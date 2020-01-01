<?php
authGuard("primeAccess", "applicationManage");


httpRESTMethod::get(function (){
    global $db;
    if (isset($_GET["id"])){
        $permissionId = $_GET["id"];
        global $db;
        $permission = $db->query("SELECT permissionId, appId, levelId, access, title, description, appName, url, sessAryName, remark, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"keyword\":\"',access.keyword,'\",\"definition\":\"',access.definition,'\",\"val\":',access.val,'}')),']'),'[]') AS defaultAccess FROM (SELECT * FROM (SELECT * FROM permission LEFT JOIN level ON level.levelId=permission.permissionLevelId) AS t1 LEFT JOIN app ON app.appId=permissionAppId) AS t2 LEFT JOIN access ON access.accessAppId=t2.appId GROUP BY access.accessAppId, t2.permissionId HAVING permissionId=$permissionId");

        if ($permission->num_rows) {
            $permission->row["access"] = JSON_DECODE($permission->row["access"]);
            $permission->row["accessList"] = JSON_DECODE($permission->row["defaultAccess"]);
            $permission->row["defaultAccess"] = JSON_DECODE($permission->row["defaultAccess"]);
            $access = array();
            foreach ($permission->row["access"] as $k=>$v){
                $access[$v->keyword] = $v->val;
            }
            foreach ($permission->row["accessList"] as $k=>$v){
                if (isset($access[$v->keyword])){
                    $permission->row["accessList"][$k]->val = $access[$v->keyword];
                }
            }
            unset($permission->row["defaultAccess"]);
            unset($permission->row["access"]);
        }

        return $permission->row;
    }
    else {
        $permission = $db->query("SELECT permissionId, appId, levelId, access, title, description, appName, url, sessAryName, remark, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"keyword\":\"',access.keyword,'\",\"definition\":\"',access.definition,'\",\"val\":',access.val,'}')),']'),'[]') AS defaultAccess FROM (SELECT * FROM (SELECT * FROM permission LEFT JOIN level ON level.levelId=permission.permissionLevelId) AS t1 LEFT JOIN app ON app.appId=permissionAppId) AS t2 LEFT JOIN access ON access.accessAppId=t2.appId GROUP BY access.accessAppId, t2.permissionId");

        foreach ($permission->rows as $key => $value) {
            $permission->rows[$key]["access"] = JSON_DECODE($permission->rows[$key]["access"]);
            $permission->rows[$key]["accessList"] = JSON_DECODE($permission->rows[$key]["defaultAccess"]);
            $permission->rows[$key]["defaultAccess"] = JSON_DECODE($permission->rows[$key]["defaultAccess"]);
            $access = array();
            foreach ($permission->rows[$key]["access"] as $k=>$v){
                $access[$v->keyword] = $v->val;
            }
            foreach ($permission->rows[$key]["accessList"] as $k=>$v){
                if (isset($access[$v->keyword])){
                    $permission->rows[$key]["accessList"][$k]->val = $access[$v->keyword];
                }
            }
            unset($permission->rows[$key]["defaultAccess"]);
            unset($permission->rows[$key]["access"]);
        }

        return $permission->rows;
    }

});




httpRESTMethod::put(function ($pdt){
    //var_dump($pdt);
    global $db;

    $appDfltAccesses = $db->query("SELECT * FROM `access` WHERE `access`.`accessAppId` = '$pdt->appId';");

    //mapping app default accesses
    $dfltAccessMap = array();
    foreach ($appDfltAccesses->rows as $index=>$appDfltAccess){
        $dfltAccessMap[$appDfltAccess["keyword"]] = $appDfltAccess["val"];
    }


    // making default access modifier
    $modifiedAccesses = array();
    foreach ($pdt->accessList as $index=>$access){
        //var_dump($access);
        if (isset($dfltAccessMap[$access->keyword])){
            if ($dfltAccessMap[$access->keyword] == $access->val){
                //echo "equal\n";
            } else {
                //echo "unequal\n";
                array_push($modifiedAccesses, array("keyword"=>$access->keyword, "val"=>$access->val));
            }
        }
    }

    $modifiedPermissionJSON = JSON_encode($modifiedAccesses);
    $result = $db->query("UPDATE `permission` SET `access` = '$modifiedPermissionJSON' WHERE `permission`.`permissionId` = '$pdt->permissionId';");

    return $result;
});


