<?php
// This coding snippet for adding Contact info from quotation management system
httpRESTMethod::post(function ($data){
    global $db;
    $sql="INSERT INTO `contact_person` (`personId`, `personName`, `personEmail`, `personNumber`,`designation`, `branch`) VALUES (NULL, '$data->personName', '$data->personEmail', '$data->personNumber', '$data->personDesignation', '$data->branchId')";
    if ($db->query($sql)){
        $rData["allInjected"] = true;
        $rData["message"] = "Contact person is added successfully!";
    }else{
        $rData["allInjected"] = false;
        $rData["message"] = "Contact person is not added!";
    }
    return $rData;
});