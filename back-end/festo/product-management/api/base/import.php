<?php
httpRESTMethod::put(function ($data) {
    global $db;
    $count = 0;
    $fail = 0;
    foreach ($data->data as $dts) {
        /**
         * If the article designation is like DESCRIPTION TYPE
         */
        $lSpace = 0;
        for ($x = 0; $x < strlen($dts->ArticleDesignation); $x++) {
            if ($dts->ArticleDesignation[$x]==' '){
                $lSpace=$x;
            }
        }
        $type = $dts->Identcode1 === '0' ? substr($dts->ArticleDesignation, $lSpace+1, strlen($dts->ArticleDesignation)) : $dts->Identcode1;
        $sql = $db->query("UPDATE `products` SET `productPrice`='$dts->SalePrice', `productBasePrice`='$dts->BasePrice', `productAddedOn`='$data->Date' WHERE `productType`='$type' AND `productPartNo`='$dts->PartNo'");
        if ($sql) {
            $count++;
        } else {
            $fail++;
        }
    }
    $rData['inject'] = true;
    $rData['message'] = $count . " products updated. " . $fail . " products fail to update";
    return $rData;
});