<?php
header('Content-Type: application/json');
httpRESTMethod::get(function () {
    global $db;
    $rst=$db->query("SELECT COUNT(productId) as totalProduct, SUM(productInStock) AS inStockProduct, SUM(productUuq) AS upcomingProduct, SUM(productLoan) AS lentProduct, SUM(productBooking) AS bookedProduct FROM products");
    foreach ($rst->rows as $value){
        $data=array(
            'totalProduct'=>$value['totalProduct'],
            'inStockProduct'=>$value['inStockProduct'],
            'upcomingProduct'=>$value['upcomingProduct'],
            'lentProduct'=>$value['lentProduct'],
            'bookedProduct'=>$value['bookedProduct']
        );
    }
    return $data;
});