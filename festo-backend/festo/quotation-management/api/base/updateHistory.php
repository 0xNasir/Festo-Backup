<?php
header("Content-Type: application/json");
httpRESTMethod::post(function ($data){
    global $db;
    $product=json_encode($data->productList);
    $currentDateInEpoch=time();
    $price=0;
    foreach ($data->productList as $prdt){
        $price=$price+$prdt->totalPrice;
    }
    $insert=$db->query("INSERT INTO `update_quotation_history` (`u_quota_id`, `updated_on`, `u_quota_date`, `u_quota_no`, `u_status`, `u_quotation`, `products`, `price`) VALUES (NULL, '$currentDateInEpoch','$data->date', '$data->quotaNo', '$data->status', '$data->id', '$product', '$price')");
    if ($insert){
        $lastId=$db->getLastId();
        $rData['injected']=true;
        $rData['id']=$lastId;
        $rData['message']="Update history is saved.";
        return $rData;
    }else{
        $rData['injected']=false;
        $rData['message']="Update history is't saved.";
    }
});
httpRESTMethod::put(function ($data){
    global $db;
    if (isset($_GET['id'])){
        $id=$_GET['id'];
        $product=json_encode($data->productList);
        $price=0;
        foreach ($data->productList as $prdt){
            $price=$price+$prdt->totalPrice;
        }
        $update=$db->query("UPDATE `update_quotation_history` SET `u_quota_no` = '$data->quotaNo', `u_status` = '$data->status', `u_quotation` = '$data->id', `products` = '$product', `price`='$price' WHERE `update_quotation_history`.`u_quota_id` = '$id'");
        if ($update){
            $rData['updated']=true;
            $rData['message']="Quotation is updated";
            return $rData;
        }else{
            $rData['updated']=false;
            $rData['message']="Quotation is not updated";
            return $rData;
        }
    }

});