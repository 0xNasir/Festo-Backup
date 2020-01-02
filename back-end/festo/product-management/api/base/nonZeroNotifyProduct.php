<?php
httpRESTMethod::post(function ($data){
    global $db;
    for ($i=0;$i<sizeof($data);$i++){
        $t=$data[$i]->productType;
        $sql="SELECT * FROM `products` WHERE `products`.`productType` ='$t' AND productPrice > 0";
        $rst=$db->query($sql);
        if ($rst->num_rows){
            $dts=$rst->rows;
            $data[$i]->newPrice=$dts[0]['productPrice'];
        }else{
            $data[$i]->newPrice=null;
        }
    }
    return $data;
});