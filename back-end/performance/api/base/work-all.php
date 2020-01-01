<?php
header('Content-Type: application/json');
httpRESTMethod::get(function (){
    authGuard();
    global $db;
    $sql=$db->query("SELECT * FROM `activity` ORDER BY `activityDate` ASC");
    if ($sql->num_rows){
        for ($i=0; $i<count($sql->rows);$i++){
            $sql->rows[$i]['activityContent']=json_decode($sql->rows[$i]['activityContent']);
            $id=$sql->rows[$i]['activityId'];
            $visit=$db->query("SELECT * FROM `visit` WHERE `visitActivity`='$id'");
            if ($visit->num_rows){
                for ($j=0;$j<count($visit->rows);$j++){
                    $visit->rows[$j]['visitCompanyBranch']=json_decode($visit->rows[$j]['visitCompanyBranch']);
                    $visit->rows[$j]['visitCompanyPerson']=json_decode($visit->rows[$j]['visitCompanyPerson']);
                    $visit->rows[$j]['visitOutCome']=json_decode($visit->rows[$j]['visitOutCome']);
                    $visit->rows[$j]['visitOpportunity']=json_decode($visit->rows[$j]['visitOpportunity']);
                }
                $sql->rows[$i]['visit']=$visit->rows;
            }else{
                $sql->rows[$i]['visit']=array();
            }
        }
        return $sql->rows;
    }else{
        return array();
    }
});