<?php
header("Content-Type: application/json");
httpRESTMethod::get(function (){
    $dept=array();
    global $db;
    $rst=$db->query("SELECT * FROM `product`");
    foreach ($rst->rows as $value){
        $data=array(
            "productId"=>$value['product_id'],
            "productName"=>$value["product_name"],
            "productPartNumber"=>$value["product_part_no"],
            "productType"=>$value["product_type"],
            "productQty"=>$value["product_quantity"],
            "productPrice"=>$value["product_price"],
            "productDescription"=>$value["product_description"]
        );
        array_push($dept, $data);
    }
    return $dept;
});

httpRESTMethod::post(function ($data){
    authGuard(sessAryName, PERMISSIONS['create']);
    global $db;
    if (isset($_GET['quota'])){
        $quotationId=$_GET['quota'];
        $arr=$data->productList;
        $query="INSERT INTO `product` (`product_id`, `quotation_id`, `product_name`, `product_part_no`,  `internal_part_no`, `product_type`, `product_quantity`, `product_price`, `product_description`) VALUES";
        $i=0;
        foreach ($arr as $item){
            $i=$i+1;
            if (count($arr) == $i){
                $query=$query."(NULL, '$quotationId', '$item->productName', '$item->productPartNumber','$item->internalPartNumber', '$item->productType', '$item->productQty', '$item->productPrice', '$item->productDescription')";
                break;
            }
            $query=$query."(NULL, '$quotationId', '$item->productName', '$item->productPartNumber','$item->internalPartNumber', '$item->productType', '$item->productQty', '$item->productPrice', '$item->productDescription'), ";
        }
        $exec=$db->query($query);
        if ($exec){
            $rdt["injected"]=true;
            $rdt['alert_type']="alert-success";
            $rdt["message"]="Quotation is added!";
        }else{
            $rdt["injected"]=true;
            $rdt['alert_type']="alert-success";
            $rdt["message"]="Quotation is added but product is not added";
        }
        return $rdt;
    }
});