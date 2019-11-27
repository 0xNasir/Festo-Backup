<?php
//This portion of code is used by quotation management application

httpRESTMethod::get(function (){
    global $db;
    if (isset($_GET['query'])){
        $data=$_GET['query'];
        $returnData=array();
        $rst=$db->query("SELECT * FROM products WHERE productName LIKE '%$data%' LIMIT 5");
        foreach ($rst->rows as $values){
            $rData["productId"]=$values["productId"];
            $rData["productName"]=$values["productName"];
            $rData["productPartNumber"]=$values["productPartNo"];
            $rData["productType"]=$values["productType"];
            $rData["productQty"]='1';
            $rData["productPrice"]=$values["productPrice"];
            $rData["productDescription"]=$values["productDescription"];
            array_push($returnData, $rData);
        }
        return $returnData;
    }elseif(isset($_GET['part'])){
        $data=$_GET['part'];
        $returnData=array();
        $rst=$db->query("SELECT * FROM products WHERE productPartNo LIKE '%$data%' LIMIT 5");
        foreach ($rst->rows as $values){
            $rData["productId"]=$values["productId"];
            $rData["productName"]=$values["productName"];
            $rData["productPartNumber"]=$values["productPartNo"];
            $rData["productType"]=$values["productType"];
            $rData["productQty"]='1';
            $rData["productPrice"]=$values["productPrice"];
            $rData["productDescription"]=$values["productDescription"];
            array_push($returnData, $rData);
        }
        return $returnData;
    }elseif(isset($_GET['type'])){
        $data=$_GET['type'];
        $returnData=array();
        $rst=$db->query("SELECT * FROM products WHERE productType LIKE '%$data%' LIMIT 5");
        foreach ($rst->rows as $values){
            $rData["productId"]=$values["productId"];
            $rData["productName"]=$values["productName"];
            $rData["productPartNumber"]=$values["productPartNo"];
            $rData["productType"]=$values["productType"];
            $rData["productQty"]='1';
            $rData["productPrice"]=$values["productPrice"];
            $rData["productDescription"]=$values["productDescription"];
            array_push($returnData, $rData);
        }
        return $returnData;
    }else{
        return null;
    }
});