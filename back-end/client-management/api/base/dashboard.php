<?php
header('Content-Type: application/json');
httpRESTMethod::get(function (){
    global $db;
    $rst=$db->query("SELECT (SELECT COUNT(DISTINCT company.companyId) FROM company) AS totalCompany, (SELECT COUNT(DISTINCT branch.branchId) FROM branch) AS totalBranch, (SELECT COUNT(DISTINCT contact_person.personId) FROM contact_person) AS totalContact");
    foreach ($rst->rows as $data){
        $rData["totalCompany"]=$data["totalCompany"];
        $rData["totalBranch"]=$data["totalBranch"];
        $rData["totalContact"]=$data["totalContact"];
    }
    return $rData;
});