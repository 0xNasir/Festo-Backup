<?php
header('Content-Type: application/json');
httpRESTMethod::post(function ($data) {
    authGuard(sessAryName,PERMISSIONS['create']);
    global $db;
    $db->query("SET SESSION group_concat_max_len = 1000000;");
    $branchSuccess = 0;
    $clientSuccess = 0;
    $contactSuccess = 0;
    $fail = 0;
    $rData = array();
    $insertClient = $db->query("INSERT INTO `company` (`companyId`, `companyName`, `isAuthorized`) VALUES (NULL, '$data->companyName', '$data->isAuthorized')");
    if ($insertClient) {
        $clientSuccess++;
        $arr = $data->branch;
        $lastClient = $db->getLastId();
        foreach ($arr as $branch) {
            $insertBranch = $db->query("INSERT INTO `branch` (`branchId`, `branchName`, `branchAddress`, `company`) VALUES (NULL, '$branch->branchName', '$branch->branchAddress', '$lastClient')");
            if ($insertBranch) {
                $branchSuccess++;
                $contacts = $branch->contactPerson;
                $lastBranch = $db->getLastId();
                foreach ($contacts as $contact) {
                    $insertContact = $db->query("INSERT INTO `contact_person` (`personId`, `personName`, `personEmail`, `personNumber`,`designation`, `branch`) VALUES (NULL, '$contact->personName', '$contact->personEmail', '$contact->personNumber', '$contact->personDesignation', '$lastBranch')");
                    if ($insertContact) {
                        $contactSuccess++;
                    }
                }
            }
        }
    }
    if ($clientSuccess) {
        $rData["allInjected"] = true;
        $rData["message"] = "$clientSuccess client with $branchSuccess branches and $contactSuccess contact are added.";
    } else {
        $rData["allInjected"] = false;
        $rData["message"] = "Client is not added!";
    }
    return $rData;
});
httpRESTMethod::get(function () {
    global $db;
    $db->query("SET SESSION group_concat_max_len = 9000000;");
    $rData = array();
    if (isset($_GET["id"])) {
        $id = $_GET["id"];
        $rst = $db->query("SELECT companyId, companyName, isAuthorized, COUNT(t1.branchId) as totalBranch,
COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"branchId\":\"',t1.branchId,'\",\"branchName\":\"',t1.branchName,'\",\"branchAddress\":\"',t1.branchAddress,'\",\"contactPerson\":',t1.contactPerson,'}')),']'),'[]') as branch FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"personId\":\"',contact_person.personId,'\",\"personName\":\"',contact_person.personName,'\",\"personEmail\":\"',contact_person.personEmail,'\",\"personNumber\":\"',contact_person.personNumber,'\",\"personDesignation\":\"',contact_person.designation,'\"}')),']'),'[]') as contactPerson FROM `company` LEFT JOIN `branch` ON company.companyId=branch.company LEFT JOIN contact_person ON contact_person.branch=branch.branchId GROUP BY branch.branchId) as t1 WHERE companyId='$id' GROUP BY companyId");
        foreach ($rst->rows as $value) {
            $data["companyId"] = $value["companyId"];
            $data["companyName"] = $value["companyName"];
            $data["isAuthorized"] = $value["isAuthorized"];
            $data["branch"] = json_decode($value["branch"]);
            $data["totalBranch"] = $value["totalBranch"];
        }
        return $data;
    } else {
        $rst = $db->query("SELECT companyId, companyName, isAuthorized, COUNT(t1.branchId) as totalBranch,
COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"branchId\":\"',t1.branchId,'\",\"branchName\":\"',t1.branchName,'\",\"branchAddress\":\"',t1.branchAddress,'\",\"contactPerson\":',t1.contactPerson,'}')),']'),'[]') as branch FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"personId\":\"',contact_person.personId,'\",\"personName\":\"',contact_person.personName,'\",\"personEmail\":\"',contact_person.personEmail,'\",\"personNumber\":\"',contact_person.personNumber,'\",\"personDesignation\":\"',contact_person.designation,'\"}')),']'),'[]') as contactPerson FROM `company` LEFT JOIN `branch` ON company.companyId=branch.company LEFT JOIN contact_person ON contact_person.branch=branch.branchId GROUP BY branch.branchId) as t1 GROUP BY companyId");
        foreach ($rst->rows as $value) {
            $data["companyId"] = $value["companyId"];
            $data["companyName"] = $value["companyName"];
            $data["isAuthorized"] = $value["isAuthorized"];
            $data["branch"] = json_decode($value["branch"]);
            $data["totalBranch"] = $value["totalBranch"];
            array_push($rData, $data);
        }
        return $rData;
    }
});
httpRESTMethod::delete(function () {
    authGuard(sessAryName,PERMISSIONS['delete']);
    $id = $_GET["id"];
    global $db;
    $rst = $db->query("DELETE FROM `company` WHERE `companyId`='$id'");
    if ($rst) {
        $rData["message"] = "Company is deleted successfully!";
    } else {
        $rData["message"] = "Sorry! Company is not deleted.";
    }
    return $rData;
});
httpRESTMethod::put(function ($data) {
    authGuard(sessAryName,PERMISSIONS['update']);
    $branchInsertCount = 0;
    $branchUpdateCount = 0;
    $branchDeleteCount = 0;
    $contactUpdateCount=0;
    $contactInsertCount=0;
    $contactDeleteCount=0;
    global $db;
    $id = $_GET["id"];
    $updateCompany = $db->query("UPDATE `company` SET `companyName` = '$data->companyName', `isAuthorized` = '$data->isAuthorized' WHERE `company`.`companyId` = '$id'");
    if ($updateCompany) {
        $rData["companyUpdateMsg"]="Company is updated!";
        $branchData = $db->query("SELECT * FROM `branch` WHERE company='$id'");
        $branchDeleteMap = array();
        $contactDeleteMap=array();
        foreach ($branchData->rows as $branch) {
            $branchDeleteMap[$branch['branchId']] = $branch['branchId'];
        }
        foreach ($data->branch as $branch) {
            $branchId = $branch->branchId;
            unset($branchDeleteMap[$branchId]);
            if ($branch->branchId != null) {
                $updateBranch = $db->query("UPDATE `branch` SET `branchName` = '$branch->branchName', `branchAddress` = '$branch->branchAddress', `company` = '$id' WHERE `branch`.`branchId` = '$branch->branchId'");
                if ($updateBranch) {
                    $branchUpdateCount=$branchUpdateCount+1;
                    $contactData = $db->query("SELECT * FROM `contact_person` WHERE branch='$branchId'");
                    foreach ($contactData->rows as $contact) {
                        $contactDeleteMap[$contact['personId']] = $contact['personId'];
                    }
                    foreach ($branch->contactPerson as $contact) {
                        $contactId = $contact->personId;
                        unset($contactDeleteMap[$contactId]);
                        if ($contact->personId!=null){
                            $updateContact = $db->query("UPDATE `contact_person` SET `personName` = '$contact->personName', `personEmail` = '$contact->personEmail', `personNumber` = '$contact->personNumber',`designation`='$contact->personDesignation', `branch` = '$branchId' WHERE `contact_person`.`personId` = '$contact->personId'");
                            if ($updateContact) {
                                $contactUpdateCount=$contactUpdateCount+1;
                            }
                        }else{
                            $insertContact=$db->query("INSERT INTO `contact_person` (`personId`, `personName`, `personEmail`, `personNumber`, `designation`, `branch`) VALUES (NULL, '$contact->personName', '$contact->personEmail', '$contact->personNumber', '$contact->personDesignation', '$branchId')");
                            if ($insertContact){
                                $contactInsertCount=$contactInsertCount+1;
                            }
                        }
                    }
                }
            } else {
                $insertBranch = $db->query("INSERT INTO `branch` (`branchId`, `branchName`, `branchAddress`, `company`) VALUES (NULL, '$branch->branchName', '$branch->branchAddress', '$id')");
                if ($insertBranch) {
                    $newBranchId=$db->getLastId();
                    $branchInsertCount=$branchInsertCount+1;
                    foreach ($branch->contactPerson as $contact){
                        $insertNewContact=$db->query("INSERT INTO `contact_person` (`personId`, `personName`, `personEmail`, `personNumber`,`designation`, `branch`) VALUES (NULL, '$contact->personName', '$contact->personEmail', '$contact->personNumber', '$contact->personDesignation', '$newBranchId')");
                        if ($insertNewContact){
                            $contactInsertCount=$contactInsertCount+1;
                        }
                    }
                }
            }
        }
        foreach ($branchDeleteMap as $value){
            $result=$db->query("DELETE FROM `branch` WHERE `branch`.`branchId` = '$value'");
            if ($result){
                $branchDeleteCount=$branchDeleteCount+1;
            }
        }
        foreach ($contactDeleteMap as $value){
            $result=$db->query("DELETE FROM `contact_person` WHERE `contact_person`.`personId` = '$value'");
            if ($result){
                $contactDeleteCount=$contactDeleteCount+1;
            }
        }
    }
    $rData["message"]=" Branch: ".$branchInsertCount." inserted, ".$branchUpdateCount." updated and ".$branchDeleteCount." deleted, Contact: ".$contactInsertCount." inserted, ".$contactUpdateCount." updated, ".$contactDeleteCount." deleted.";
    return $rData;
});