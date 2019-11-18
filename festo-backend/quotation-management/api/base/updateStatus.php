<?php
header("Content-Type: application/json");
httpRESTMethod::put(function ($data){
    global $db;
    $id=isset($_GET['id'])?$_GET['id']:'';
    $stmt=$db->query("UPDATE `quotation` SET `status` = '$data->status' WHERE `quotation`.`quota_id` = '$id'");
    if ($stmt){
        $rData['updated']=true;
        $rData['message']="Status is changed to ".$data->status;
    }else{
        $rData['updated']=false;
        $rData['message']="Status is not changed";
    }
    return $rData;
});