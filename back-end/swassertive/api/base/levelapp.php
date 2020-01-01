<?php
authGuard("primeAccess", "userLevelManage");


httpRESTMethod::get(function (){
    global $db;

    if (isset($_GET["id"])){
        $levelId = $_GET["id"];
        $level = $db->query("SELECT levelId, title, description, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"permissionId\":',permissionId,',\"appId\":',appId,',\"appName\":\"',appName,'\"}')),']'),'[]') as appList FROM (SELECT * FROM `level`LEFT JOIN permission ON level.levelId = permission.permissionLevelId) as t1 LEFT JOIN app on t1.permissionAppId=app.appId GROUP BY levelId HAVING levelId=$levelId");

        if ($level->num_rows) {
            $level->row["appList"] = JSON_DECODE($level->row["appList"]);
        }

        return $level->row;
    }
    else {
        $level = $db->query("SELECT levelId, title, description, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"permissionId\":',permissionId,',\"appId\":',appId,',\"appName\":\"',appName,'\"}')),']'),'[]') as appList FROM (SELECT * FROM `level`LEFT JOIN permission ON level.levelId = permission.permissionLevelId) as t1 LEFT JOIN app on t1.permissionAppId=app.appId GROUP BY levelId");

        foreach ($level->rows as $key => $value) {
            $level->rows[$key]["appList"] = JSON_DECODE($level->rows[$key]["appList"]);
        }

        return $level->rows;
    }
});


httpRESTMethod::post(function ($pdt){
    //var_dump($pdt);
    global $db;
    $result = $db->query("INSERT INTO `permission` (permissionLevelId, permissionAppId, access) VALUES ('$pdt->permissionLevelId', '$pdt->permissionAppId', '[]');");

    return $result;
});


httpRESTMethod::delete(function (){
    //var_dump($pdt);
    $permissionId = $_GET["id"];
    global $db;
    $result = $db->query("DELETE FROM `permission` WHERE `permission`.`permissionId` = '$permissionId';");

    return $result;
});
