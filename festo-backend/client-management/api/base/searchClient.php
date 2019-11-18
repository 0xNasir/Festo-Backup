<?php
//This file containing coding snippet is used in quotation management
httpRESTMethod::get(function (){
    global $db;
    $db->query("SET SESSION group_concat_max_len = 9000000;");
    $rData = array();
    if (isset($_GET["q"])) {
        $companyName = $_GET["q"];
        $rst = $db->query("SELECT companyId, companyName, isAuthorized, COUNT(t1.branchId) as totalBranch,
COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"branchId\":\"',t1.branchId,'\",\"branchName\":\"',t1.branchName,'\",\"branchAddress\":\"',t1.branchAddress,'\",\"contactPerson\":',t1.contactPerson,'}')),']'),'[]') as branch FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"personId\":\"',contact_person.personId,'\",\"personName\":\"',contact_person.personName,'\",\"personEmail\":\"',contact_person.personEmail,'\",\"personNumber\":\"',contact_person.personNumber,'\",\"personDesignation\":\"',contact_person.designation,'\"}')),']'),'[]') as contactPerson FROM `company` LEFT JOIN `branch` ON company.companyId=branch.company LEFT JOIN contact_person ON contact_person.branch=branch.branchId GROUP BY branch.branchId) as t1 WHERE companyName LIKE '%$companyName%' GROUP BY companyId");
        foreach ($rst->rows as $value) {
            $data["companyId"] = $value["companyId"];
            $data["companyName"] = $value["companyName"];
            $data["isAuthorized"] = $value["isAuthorized"];
            $data["branch"] = json_decode($value["branch"]);
            $data["totalBranch"] = $value["totalBranch"];
            array_push($rData, $data);
        }
        return $rData;
    }else{
        return null;
    }
});