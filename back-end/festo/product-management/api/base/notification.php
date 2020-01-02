<?php
httpRESTMethod::post(function ($data){
   global $db;
    $sql="SELECT * FROM `products` WHERE `products`.`productType` IN (";
    for ($i=0;$i<sizeof($data);$i++){
        if ($i!=sizeof($data)-1){
            $sql=$sql."'".$data[$i]->productType."',";
        }else{
            $sql=$sql."'".$data[$i]->productType."') AND productPrice=0";
        }
    }
    $rst=$db->query($sql);
    return $rst->rows;
});