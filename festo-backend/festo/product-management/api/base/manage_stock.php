<?php
httpRESTMethod::put(function ($data){
   global $db;
   $sql=$db->query("SELECT `productInStock` FROM `products` WHERE `products`.`productId` = '$data->productId'");
   if ($sql){
       $prdt=$sql->rows[0];
       if ($data->type=='out'){
           $qty=$prdt['productInStock']-$data->productQuantity;
       }else{
           $qty=$prdt['productInStock']+$data->productQuantity;
       }

       $sqlUpdt=$db->query("UPDATE `products` SET `productInStock` = '$qty' WHERE `products`.`productId` = '$data->productId'");
       if ($sqlUpdt){
           $time=time();
           $sqlInsrt=$db->query("INSERT INTO `product_quantity_revision` (`revisionId`, `product`, `revisionInStock`, `revisionDate`) VALUES (NULL, '$data->productId', '$qty', '$time')");
           if ($sqlInsrt){
               $rData["updated"]=true;
               $rData["message"]="Product and revision is updated successfully!";
           }else{
               $rData["updated"]=true;
               $rData["message"]="Product is updated successfully! Revision is not updated";
           }
       }else{
           $rData["updated"]=false;
           $rData["message"]="Sorry! Product is not updated";
           $rData['duplicate']=false;
       }
       return $rData;
   }else{
       return null;
   }
});