<?php
httpRESTMethod::post(function ($data) {
    global $db;
    $k = 0;
    $rData = array();
    for ($i = 0; $i < sizeof($data); $i++) {
        $t = $data[$i]->productType;
        $sql = "SELECT * FROM `products` WHERE `products`.`productType` ='$t' AND productPrice > 0";
        $rst = $db->query($sql);
        if ($rst->num_rows) {
            $dts = $rst->rows;
            $rData[$k] = $data[$i];
            $rData[$k]->newPrice = $dts[0]['productPrice'];
            $k++;
        }
    }
    return $rData;
});