<?php
httpRESTMethod::put(function ($data){
    global $db;
    $count=0;
    if (isset($_GET['id'])){
        $id=$_GET['id'];
        foreach ($data->productList as $value){
            $updt=$db->query("UPDATE `product` SET `product_quantity` = '$value->productQty', `product_price` = '$value->productPrice' WHERE `quotation_id` = '$id'");
            if ($updt){
                $count=$count+1;
            }
        }
        $rData['injected']=true;
        $rData['message']="Product is inserted";
        return $rData;
    }else{
        return false;
    }
});