<?php
header('Content-Type: application/json');
httpRESTMethod::get(function (){
    $dashboardData=array();
    global $db;
    if (isset($_GET['state'])){
        $state=$_GET['state'];
        $rst=$db->query("SELECT COUNT(status) as numberOfQuotation FROM quotation where state='$state'");
        foreach ($rst->rows as $value){
            $data=array(
                'numberOfQuotation'=>$value['numberOfQuotation']
            );
        }
        return $data;
    }else{
        $rst=$db->query("SELECT `status`, COUNT(status) AS numberOfQuotation, SUM(numerOfProduct) as totalProduct, SUM(quotationValue) as totalValue FROM (SELECT *, SUM(product.product_price) as quotationValue, COUNT(product.product_id) as numerOfProduct FROM `quotation` LEFT JOIN product ON quotation.quota_id=product.quotation_id WHERE state='Complete' GROUP BY quota_id) as t1 GROUP BY status");
        foreach ($rst->rows as $value){
            $data=array(
                'status'=>$value['status'],
                'numberOfQuotation'=>$value['numberOfQuotation'],
                'totalProduct'=>$value['totalProduct'],
                'totalPrice'=>$value['totalValue']
            );
            array_push($dashboardData, $data);
        }
        return $dashboardData;
    }
});