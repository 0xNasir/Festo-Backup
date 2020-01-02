<?php
httpRESTMethod::get(function () {
    global $db;
    global $session;
    $username=$session->data["user"]['username'];
    $sql = $db->query("SELECT `quota_id` AS quotationId, `quota_no` AS quotaNo,`product_id` AS productId, `product_type` AS productType, `product_price` AS productPrice FROM `quotation` JOIN `product` ON `quotation`.`quota_id`=`product`.`quotation_id` WHERE (`quotation`.`managed_by`='$username' OR `quotation`.`contact_by_username`='$username') AND `product`.`product_price`=0 GROUP BY `product`.`product_type`");
    if ($sql->num_rows) {
        return $sql->rows;
    } else {
        return array();
    }
});

httpRESTMethod::put(function ($data){
    global $db;
    if ($db->query("UPDATE `product` SET `product_price`='$data->newPrice' WHERE `product_id`='$data->productId'")){
        $rst['updated']=true;
        $rst['message']="New price is assigned successfully";
    }else{
        $rst['updated']=false;
        $rst['message']="Sorry! New price is not assigned";
    }
    return $rst;
});