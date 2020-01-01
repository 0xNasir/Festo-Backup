<?php

// access layout file to access control


// simple login format

$devMode = true;
$sessionCookieName = "SWASESS";
if ($devMode){
    // Allow CORS headers
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


    // set the defined token for development mode
    $session->start('thisIsDevelopmentModeToken');
} else {
    // Startup the session
    if ($tokenId = $cookie->get($sessionCookieName)){
        $session->start($tokenId);
    } else {
        $cookie->set($sessionCookieName, $session->start());
    }
}


function responseUnauthorized($destroy = false){
    if ($destroy) {
        global $session;
        $session->data = array();
    }
    header("HTTP/1.1 401 Unauthorized");
    exit();
}

function authGuard($sessAryName = "", $keyword = "") {
    global $session;
    // Check the data available
    if (empty($session->data)){
        responseUnauthorized();
    } else {
        // check whether the data is valid or not
        if (isset($session->data["user"]["HTTP_USER_AGENT"]) and isset($session->data["user"]['username'])) {
            // Check the data is valid or not
            if ($session->data["user"]["HTTP_USER_AGENT"] == $_SERVER['HTTP_USER_AGENT']){
                // Authentic User
                // echo "Welcome you are logged in";
                // Check for the specific user permission
                if ($sessAryName == "primeAccess"){
                    if (isset($session->data["primeAccess"][$keyword])){
                        if ($session->data["primeAccess"][$keyword] == 1 or $session->data["primeAccess"][$keyword] == "1"){
                            // Authentic user
                        } else {
                            responseUnauthorized();
                        }
                    } else {
                        responseUnauthorized();
                    }
                }
                else if ($sessAryName != "" and $keyword != ""){
                    if (isset($session->data["permission"][$sessAryName])){
                        if (isset($session->data["permission"][$sessAryName][$keyword])){
                            if ($session->data["permission"][$sessAryName][$keyword] == "1" or $session->data["permission"][$sessAryName][$keyword] == 1){
                                // Authentic for specific permission
                                // echo "authentic";
                            } else {
                                responseUnauthorized();
                            }
                        } else {
                            responseUnauthorized();
                        }
                    } else {
                        responseUnauthorized();
                    }
                }
            } else {
                responseUnauthorized(true);
            }
        } else {
            responseUnauthorized(true);
        }
    }
}


function signin($username, $password) {
    global $db;
    global $session;
    $password = md5($password);
    // fetch data from database and verify

    // To increase the sql group concat function
    $db->query("SET SESSION group_concat_max_len = 1000000;");
    $user = $db->query("select userId, username, name as fullName, password, title as userLevel, appAccess, primeAccessMod,
COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"keyword\":\"',prime.keyword,'\",\"definition\":\"',prime.definition,'\",\"val\":',prime.val,'}')),']'),'[]') as primeAccess
from (select *,
COALESCE(concat('[',GROUP_CONCAT(CONCAT('{\"appId\":',appId,',\"appName\":\"',appName,'\",\"url\":\"',url,'\",\"remark\":\"',remark,'\",\"sessAryName\":\"',sessAryName,'\",\"disabled\":',disabled,',\"access\":',access,',\"defaultAccess\":',defaultAccess,'}')),']'),'[]') as appAccess
 from (select *,
COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"keyword\":\"',access.keyword,'\",\"definition\":\"',access.definition,'\",\"val\":',access.val,'}')),']'),'[]') AS defaultAccess
 from (select * from (select * from
(select * from user left join level on userLevelId=levelId) as t1
left join permission on t1.levelId=permission.permissionLevelId) as t2
left join app on app.appId=t2.permissionAppId) as t3
left join access on access.accessAppId=t3.appId
group by accessAppId, userId) as t4 
group by userId) as t5 JOIN prime group by userId having username='$username' and password='$password'");

    if ($user->num_rows){
        $user->row["appAccess"] = JSON_DECODE($user->row["appAccess"]);
        $user->row["primeAccess"] = JSON_DECODE($user->row["primeAccess"]);
        $user->row["primeAccessMod"] = JSON_DECODE($user->row["primeAccessMod"]);


        foreach ($user->row["appAccess"] as $key=>$value){
            $user->row["appAccess"][$key]->accessList =  array_map(function ($object) { return clone $object; }, $user->row["appAccess"][$key]->defaultAccess);
            $access = array();
            foreach ($user->row["appAccess"][$key]->access as $k=>$v) {
                $access[$v->keyword] = $v->val?true:false;
            }
            foreach ($user->row["appAccess"][$key]->accessList as $k=>$v) {
                if (isset($access[$v->keyword])){
                    $user->row["appAccess"][$key]->accessList[$k]->val = $access[$v->keyword]?true:false;
                }
            }

            unset($user->row["appAccess"][$key]->defaultAccess);
            unset($user->row["appAccess"][$key]->access);
        }

        // setup session variables
        $sessArray = array();
        $sessArray["user"]["fullName"] = $user->row["fullName"];
        $sessArray["user"]["username"] = $user->row["username"];
        $sessArray["user"]["userId"] = $user->row["userId"];
        $sessArray["user"]["HTTP_USER_AGENT"] = $_SERVER['HTTP_USER_AGENT'];
        $loggedId=$user->row["userId"];
        $dgn=$db->query("SELECT * FROM `dgn` WHERE dgnUserId='$loggedId' ORDER BY fromTime DESC");
        if ($dgn){
            $sessArray["user"]["userDesignation"] = $dgn->rows[0]["title"];
        }else{
            $sessArray["user"]["userDesignation"] = 'Engineer';
        }
        $phn=$db->query("SELECT * FROM `phone` WHERE phoneUserId='$loggedId' AND phoneType='Work'");
        if ($phn){
            $sessArray["user"]["userPhone"] = $phn->rows[0]["number"];
        }else{
            $sessArray["user"]["userPhone"] = '';
        }
        $sessArray["permission"] = array();
        $sessArray["appList"] = array();

        foreach ($user->row["appAccess"] as $key=>$val){
            //making appList
            array_push($sessArray["appList"], array(
                "appId"=>$val->appId,
                "appName"=>$val->appName,
                "url"=>$val->url,
                "sessAryName"=>$val->sessAryName,
                "remark"=>$val->remark,
                "disabled"=>$val->disabled
            ));

            // setup permission
            $sessArray["permission"][$val->sessAryName] = array();
            foreach ($val->accessList as $k=>$v){
                $sessArray["permission"][$val->sessAryName][$v->keyword] = $v->val?true:false;
            }
        }



        $primeAccessModArray = array();
        foreach ($user->row["primeAccessMod"] as $index=>$value) {
            $primeAccessModArray[$value->keyword] = $value->val?true:false;
        }


        $sessArray["primeAccess"] = array();
        foreach ($user->row["primeAccess"] as $index=>$value){
            if (isset($primeAccessModArray[$value->keyword])) {
                $sessArray{"primeAccess"}[$value->keyword] = $primeAccessModArray[$value->keyword]?true:false;
            } else {
                $sessArray{"primeAccess"}[$value->keyword] = $value->val?true:false;
            }
        }


        //

         //var_dump($user->row);
         // var_dump($sessArray);

        // Assign value to the session


        $session->data = $sessArray;

        return array("status"=>"success");
    } else {
        $session->data = array();

        return array("status"=>"failed");
    }
}

function signout() {
    global $session;
    $session->data = array();
    return array("status"=>"success");
}