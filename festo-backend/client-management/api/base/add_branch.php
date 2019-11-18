<?php
// This coding snippet for ading branch from quotation management system
httpRESTMethod::post(function ($data){

    global $db;
    $contactSuccess=0;
    $sql="INSERT INTO `branch` (`branchId`, `branchName`, `branchAddress`, `company`) VALUES (NULL, '$data->branchName', '$data->branchAddress', '$data->companyId')";
    if ($db->query($sql)){
        $id=$db->getLastId();
        foreach ($data->contactPerson as $contact){
            $insertContact = $db->query("INSERT INTO `contact_person` (`personId`, `personName`, `personEmail`, `personNumber`,`designation`, `branch`) VALUES (NULL, '$contact->personName', '$contact->personEmail', '$contact->personNumber', '$contact->personDesignation', '$id')");
            if ($insertContact) {
                $contactSuccess++;
            }
        }
    }
    if ($contactSuccess) {
        $rData["allInjected"] = true;
        $rData["message"] = "1 Branch with $contactSuccess contact are added.";
    } else {
        $rData["allInjected"] = false;
        $rData["message"] = "Branch is not added!";
    }
    return $rData;
});