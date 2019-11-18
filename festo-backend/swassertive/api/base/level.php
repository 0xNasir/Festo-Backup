<?php
authGuard("primeAccess", "userLevelManage");

httpRESTMethod::get(function (){
    global $db;
    if (isset($_GET["id"])){
        $levelId = $_GET["id"];
        global $db;
        $rd = $db->query("SELECT * FROM level WHERE levelId = $levelId");
        return $rd->row;
    } else {
        $rd = $db->query("SELECT * FROM level");
        return $rd->rows;
    }
});


httpRESTMethod::post(function ($pdt){
    //var_dump($pdt);
    global $db;

    $result = $db->query("INSERT INTO `level` (title, description) VALUES ('$pdt->title', '$pdt->description');");

    return $result;
});


httpRESTMethod::put(function ($pdt){
    global $db;

    $result = $db->query("UPDATE `level` SET `title` = '$pdt->title', `description` = '$pdt->description' WHERE `level`.`levelId` = $pdt->levelId;");

    return $result;
});
