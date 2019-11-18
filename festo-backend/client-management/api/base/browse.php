<?php
header('content-Type: application/json');
httpRESTMethod::get(function () {
    global $db;
    if (isset($_GET['browseby'])) {
        $by = $_GET['browseby'];
        if ($by == 'contact') {
            $rData = array();
            $rst = $db->query("SELECT * FROM `contact_person` INNER JOIN branch ON contact_person.branch=branch.branchId INNER JOIN company ON branch.company=company.companyId");
            foreach ($rst->rows as $data) {
                $arr["personId"]=$data["personId"];
                $arr["personName"]=$data["personName"];
                $arr["personEmail"]=$data["personEmail"];
                $arr["personNumber"]=$data["personNumber"];
                $arr["personDesignation"]=$data["designation"];
                $arr["branchName"]=$data["branchName"];
                $arr["companyName"]=$data["companyName"];

                array_push($rData, $arr);
            }
            return $rData;
        } elseif ($by == 'branch') {
            $rData = array();
            $rst = $db->query("SELECT branchId,branchName, branchAddress, companyName,COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"personId\":\"',contact_person.personId,'\",\"personName\":\"',contact_person.personName,'\",\"personEmail\":\"',contact_person.personEmail,'\",\"personNumber\":\"',contact_person.personNumber,'\"}')),']'),'[]') as contactInfo FROM `branch` INNER JOIN `contact_person` ON contact_person.branch=branch.branchId INNER JOIN company ON branch.company=company.companyId GROUP BY branch.branchId");
            foreach ($rst->rows as $data) {
                $arr["branchId"] = $data["branchId"];
                $arr["branchName"] = $data["branchName"];
                $arr["branchAddress"] = $data["branchAddress"];
                $arr["companyName"] = $data["companyName"];
                $arr["contactInfo"] = json_decode($data["contactInfo"]);
                array_push($rData, $arr);
            }
            return $rData;
        }
    }
});