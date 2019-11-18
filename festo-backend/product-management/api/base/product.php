<?php
header('Content-Type: application/json');
httpRESTMethod::get(function (){
    global $db;
    if (isset($_GET['id'])){
        $id=$_GET['id'];
        $rData=array();
        $result=$db->query("SELECT * FROM products WHERE productId='$id'");
        foreach ($result->rows as $values){
            $rData["productId"]=$values["productId"];
            $rData["productName"]=$values["productName"];
            $rData["productPartNo"]=$values["productPartNo"];
            $rData["productType"]=$values["productType"];
            $rData["productCategory"]=$values["productCategory"];
            $rData["productDescription"]=$values["productDescription"];
            $rData["productPrice"]=$values["productPrice"];
            $rData["productInStock"]=$values["productInStock"];
            $rData["productUuq"]=$values["productUuq"];
            $rData["productLoan"]=$values["productLoan"];
            $rData["productBooking"]=$values["productBooking"];
            $rData["productOrigin"]=$values["productOrigin"];
            $rData["productRevision"]=null;
        }
        return $rData;
    }else{
        $result=$db->query("SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"revisionId\":\"',product_price_revision.revisionId,'\",\"revisionDate\":\"',FROM_UNIXTIME(product_price_revision.revisionDate),'\",\"revisionPrice\":\"',product_price_revision.revisionPrice,'\"}')),']'),'[]') AS productPriceRevision FROM `products` LEFT JOIN `product_price_revision` ON `products`.`productId` = `product_price_revision`.`product` GROUP BY products.productId");
        $data=array();
        foreach ($result->rows as $values){
            $rId=$values["productId"];
            $sql=$db->query("SELECT  `revisionInStock`, FROM_UNIXTIME(`revisionDate`) AS revisionDate FROM product_quantity_revision WHERE product='$rId'");
            if ($sql){
                $rData['productQuantityRevision']=$sql->rows;
            }else{
                $rData['productQuantityRevision']=null;
            }
            $rData["productId"]=$values["productId"];
            $rData["productName"]=$values["productName"];
            $rData["productPartNo"]=$values["productPartNo"];
            $rData["productType"]=$values["productType"];
            $rData["productCategory"]=$values["productCategory"];
            $rData["productDescription"]=$values["productDescription"];
            $rData["productPrice"]=$values["productPrice"];
            $rData["productInStock"]=$values["productInStock"];
            $rData["productUuq"]=$values["productUuq"];
            $rData["productLoan"]=$values["productLoan"];
            $rData["productBooking"]=$values["productBooking"];
            $rData["productOrigin"]=$values["productOrigin"];
            $rData["productPriceRevision"]=json_decode($values["productPriceRevision"]);
            array_push($data, $rData);
        }
        return $data;
    }

});
httpRESTMethod::post(function ($data){
   global $db;
   $query=$db->query("SELECT * FROM `products` WHERE `productType`='$data->productType'");
   if ($query->num_rows){
       $rData["injected"]=false;
       $rData["message"]="Type already exists. Please try another one.";
       return $rData;
   }
    $result=$db->query("INSERT INTO `products` (`productId`,`productName`, `productPartNo`, `productType`, `productCategory`, `productDescription`, `productPrice`, `productInStock`, `productUuq`, `productLoan`, `productBooking`, `productOrigin`) VALUES (NULL, '$data->productName','$data->productPartNo','$data->productType', '$data->productCategory', '$data->productDescription', '$data->productPrice', '$data->productInStock', '$data->productUuq', '$data->productLoan', '$data->productBooking', '$data->productOrigin')");
   if ($result){
       $lastId=$db->getLastId();
       $time=time();
       $sql1=$db->query("INSERT INTO `product_price_revision` (`revisionId`, `product`, `revisionPrice`, `revisionDate`) VALUES (NULL, '$lastId', '$data->productPrice', '$time')");
       $sql2=$db->query("INSERT INTO `product_quantity_revision` (`revisionId`, `product`, `revisionInStock`, `revisionDate`) VALUES (NULL, '$lastId', '$data->productInStock', '$time')");
       if ($sql1&&$sql2){
           $rData["injected"]=true;
           $rData["message"]="Product and revision is added";
       }else{
           $rData["injected"]=true;
           $rData["message"]="Product is added! Revision is not added";
       }
   }else{
       $rData["injected"]=false;
       $rData["message"]="Sorry! Product is not added";
   }
   return $rData;
});
httpRESTMethod::put(function ($data){
   global $db;
   $checkDuplicate=$db->query("SELECT * FROM products");
   if ($checkDuplicate->num_rows){
       foreach ($checkDuplicate->rows as $pdts){
           if ($pdts['productId']!=$data->productId & $pdts['productType']==$data->productType){
               $rData['updated']=false;
               $rData['message']="Product type is already used in another product.";
               $rData['duplicate']=true;
               return $rData;
           }
       }
   }
   $queryData=$db->query("SELECT * FROM products WHERE productId='$data->productId'");
   $dt=$queryData->rows[0];
   $result=$db->query("UPDATE `products` SET `productName` = '$data->productName', `productPartNo` = '$data->productPartNo',`productType` = '$data->productType', `productCategory` = '$data->productCategory', `productDescription` = '$data->productDescription', `productPrice` = '$data->productPrice', `productInStock` = '$data->productInStock', `productUuq` = '$data->productUuq', `productLoan` = '$data->productLoan', `productBooking` = '$data->productBooking', `productOrigin` = '$data->productOrigin' WHERE `products`.`productId` = '$data->productId'");
   if ($result){
       $time=time();
       if ($dt['productPrice']!=$data->productPrice){
           $sql1=$db->query("INSERT INTO `product_price_revision` (`revisionId`, `product`, `revisionPrice`, `revisionDate`) VALUES (NULL, '$data->productId', '$data->productPrice','$time')");
           if ($sql1){
               $rData["updated"]=true;
               $rData["message"]="Product and revision is updated successfully!";
           }else{
               $rData["updated"]=true;
               $rData["message"]="Product is updated successfully! Revision is not updated";
           }
       }elseif($dt['productInStock']!=$data->productInStock){
           $sql2=$db->query("INSERT INTO `product_quantity_revision` (`revisionId`, `product`, `revisionInStock`, `revisionDate`) VALUES (NULL, '$data->productId', '$data->productInStock', '$time')");
           if ($sql2){
               $rData["updated"]=true;
               $rData["message"]="Product and revision is updated successfully!";
           }else{
               $rData["updated"]=true;
               $rData["message"]="Product is updated successfully! Revision is not updated";
           }
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
});
httpRESTMethod::delete(function (){
    $id=$_GET["id"];
    global $db;
    $rst=$db->query("DELETE FROM products WHERE productId='$id'");
    if ($rst){
        $sql1=$db->query("DELETE FROM product_price_revision WHERE product='$id'");
        $sql2=$db->query("DELETE FROM product_quantity_revision WHERE product='$id'");
        if ($sql1&$sql2){
            $rData["isDeleted"]=true;
            $rData["message"]="Product and revision is deleted successfully!";
        }else{
            $rData["isDeleted"]=true;
            $rData["message"]="Product is deleted successfully! Revision is not deleted";
        }
    }else{
        $rData["isDeleted"]=false;
        $rData["message"]="Product is not deleted!";
    }
    return $rData;
});