<?php
httpRESTMethod::get(function (){
   global $db;
   $sql=$db->query('SELECT `product_type` AS productType FROM `product` WHERE `product_price`=0 GROUP BY `product_type`');
   return $sql->rows;
});