<?php
httpRESTMethod::put(function ($data) {
    global $db;
    $count = 0;
    $fail = 0;
    foreach ($data as $dts) {
        $sql = $db->query("UPDATE `products` SET `productPrice`='$dts->SalePrice', `productBasePrice`='$dts->BasePrice', `productAddedOn`='$dts->Date' WHERE `productType`='$dts->Identcode1' AND `productPartNo`='$dts->PartNo'");
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