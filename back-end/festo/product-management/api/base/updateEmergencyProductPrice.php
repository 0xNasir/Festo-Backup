<?php
httpRESTMethod::put(function ($data){
   global $db;
    $time=time();
    $queryData=$db->query("SELECT * FROM products WHERE productId='$data->productId'");
    $dt=$queryData->rows[0];
    if ($dt['productPrice']==$data->productPrice){
        $rData['updated']=false;
        $rData['message']='Price unchanged';
    }else{
        $rst=$db->query("UPDATE `products` SET `productPrice` = '$data->productPrice', `productAddedOn` = '$time' WHERE `products`.`productType` = '$data->productType'");
        if ($rst){
            $sql1=$db->query("INSERT INTO `product_price_revision` (`revisionId`, `product`, `revisionPrice`, `revisionDate`) VALUES (NULL, '$data->productId', '$data->productPrice','$time')");
            if ($sql1){
                $rData["updated"]=true;
                $rData["message"]="Emergency product and price revision is updated successfully!";
            }else{
                $rData["updated"]=true;
                $rData["message"]="Emergency product and is updated successfully! Revision is not updated";
            }
        }else{
            $rData["updated"]=false;
            $rData["message"]="Emergency product is not updated!";
        }
    }
   return $rData;
});