<?php
httpRESTMethod::post(function ($data){
   global $db;
   if (sizeof($data)<1){
       return array();
   }
    $sql="SELECT * FROM `products` WHERE `products`.`productType` IN (";
    for ($i=0;$i<sizeof($data);$i++){
        if ($i!=sizeof($data)-1){
            $sql=$sql."'".$data[$i]->productType."',";
        }else{
            $sql=$sql."'".$data[$i]->productType."') AND productPrice=0";
        }
    }
    $rst=$db->query($sql);
    if ($rst->num_rows){
        return $rst->rows;
    }else{
        return array();
    }
});