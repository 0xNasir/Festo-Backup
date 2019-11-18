<?php


//authGuard("primeAccess","manageApp");

// Read all data
httpRESTMethod::get(function (){
    global $db;

    if (isset($_GET["id"])) {
        $appId = $_GET["id"];

        $app = $db->query("SELECT app.appId, app.appName, app.url, app.sessAryName, app.remark, app.disabled, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"accessId\":',access.accessId,',\"keyword\":\"',access.keyword,'\",\"definition\":\"',access.definition,'\",\"val\":',access.val,'}')),']'),'[]') as accesses FROM app LEFT JOIN access ON app.appId=access.accessAppId GROUP BY app.appId HAVING app.appId=$appId");

        if ($app->num_rows) {
            $app->row["accesses"] = JSON_DECODE($app->row["accesses"]);
        }
        return $app->row;
    }
    else {
        $app = $db->query("SELECT app.appId, app.appName, app.url, app.sessAryName, app.remark, app.disabled, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"accessId\":',access.accessId,',\"keyword\":\"',access.keyword,'\",\"definition\":\"',access.definition,'\",\"val\":',access.val,'}')),']'),'[]') as accesses FROM app LEFT JOIN access ON app.appId=access.accessAppId GROUP BY app.appId");

        foreach ($app->rows as $key => $value) {
            $app->rows[$key]["accesses"] = JSON_DECODE($app->rows[$key]["accesses"]);
        }
        return $app->rows;
    }
});


httpRESTMethod::post(function ($pdt){
    //var_dump($pdt);
    global $db;
    $lastId = 0;
    $result = $db->query("INSERT INTO `app` (appName, url, sessAryName, remark) 
VALUES ('$pdt->appName', '$pdt->url', '$pdt->sessAryName', '$pdt->remark');");

    if ($result){
        $lastId = $db->getLastId();

        foreach ($pdt->accesses as $index=>$access){
            $result = $db->query("INSERT INTO `access` (accessAppId, keyword, definition, val) VALUES ('$lastId', '$access->keyword', '$access->definition', '$access->val');");
        }
    }

    return $result;
});


httpRESTMethod::put(function ($pdt){
    //var_dump($pdt);
    global $db;

    // finding accesses array data to delete
    $result = $db->query("SELECT * FROM `access` WHERE `access`.`accessAppId` = '$pdt->appId'");
    // mapping the available data
    $mapData = array();
    foreach ($pdt->accesses as $ind=>$val){
        $mapData[$val->accessId] = $val->val;
    }

    foreach ($result->rows as $index=>$value){
        if (!isset($mapData[$value["accessId"]])){
            $accessId = $value["accessId"];
            $db->query("DELETE FROM `access` where `access`.`accessId` = '$accessId'");
        }
    }

    $update = $pdt;

    $result = $db->query("
UPDATE `app` SET 
`appName` = '$update->appName', 
`url` = '$update->url', 
`remark` = '$update->remark', 
`disabled` = '$update->disabled' 
WHERE `app`.`appId` = $update->appId;
");
    foreach ($update->accesses as $index=>$access){
        if ($access->accessId != null){
            $result = $db->query("UPDATE `access` SET `keyword` = '$access->keyword', `definition` = '$access->definition', `val` = '$access->val' WHERE `access`.`accessId` = $access->accessId;");
        } else {
            $result = $db->query("INSERT INTO `access` (accessAppId, keyword, definition, val) VALUES ('$update->appId', '$access->keyword', '$access->definition', '$access->val');");
        }
    }
    return $result;
});

