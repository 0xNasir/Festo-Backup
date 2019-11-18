<?php
header("Content-Type: application/json");

httpRESTMethod::get(function (){
    global $db;
    if (isset($_GET["id"])){
        $id=$_GET["id"];
        $rst=$db->query("SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"productId\":\"',revised_product.product_id,'\",\"productName\":\"',revised_product.product_name,'\",\"productPartNumber\":\"',revised_product.product_part_no,'\",\"internalPartNumber\":\"',revised_product.internal_part_no,'\",\"productType\":\"',revised_product.product_type,'\",\"productQty\":\"',revised_product.product_quantity,'\",\"productPrice\":\"',revised_product.product_price,'\",\"totalPrice\":\"',revised_product.product_price*revised_product.product_quantity,'\",\"productDescription\":\"',revised_product.product_description,'\"}')),']'),'[]') AS productList, SUM(revised_product.product_price * revised_product.product_quantity) AS cumulativePrice FROM `revised_quotation` LEFT JOIN `revised_product` ON `revised_product`.`quotation_id` = `revised_quotation`.`revised_id` GROUP BY revised_id HAVING revised_id = '$id'");
        foreach ($rst->rows as $value){
            $rdt["id"]=$value["revised_id"];
            $rdt["date"]=$value["quota_date"];
            $rdt["quotaNo"]=$value["quota_no"];
            $rdt["companyName"]=$value["company_name"];
            $rdt["branchName"]=$value["branch_name"];
            $rdt["address"]=$value["address"];
            $rdt["contactPerson"]=$value["contact_person"];
            $rdt["personId"]=$value["person_id"];
            $rdt["designation"]=$value["designation"];
            $rdt["status"]=$value["status"];
            $rdt["contactBy"]=$value["contact_by"];
            $rdt["remarks"]=$value["remarks"];
            $rdt["productList"]=json_decode($value["productList"]);
            $rdt["cumulativePrice"]=$value["cumulativePrice"];
            $rdt["managedBy"]=$value["managed_by"];
            $rdt["state"]=$value["state"];
            $rdt["doc"]=json_decode($value['doc_data']);
            $rdt["terms"]=json_decode($value['terms_condition']);
        }
        return $rdt;
    }
});

httpRESTMethod::post(function ($data){
    authGuard(sessAryName, PERMISSIONS['create']);
    global $session;
    $id='';
    if (isset($_GET['id'])){
        $id=$_GET['id'];
    }
    $date=$data->date;
    $quota_no=$data->quotaNo;
    $company_name=$data->companyName;
    $branch_name=$data->branchName;
    $branch_address=$data->branchAddress;
    $contact_person=$data->contactPerson;
    $person_id=$data->personId;
    $designation=$data->designation;
    $status=$data->status;
    $contact_by=$data->contactBy;
    $remarks=$data->remarks;
    $managed_by=$session->data["user"]['username'];
    $doc=json_encode($data->generatePdf);
    $terms=json_encode($data->termsCondition);
    global $db;
    $rst=$db->query("INSERT INTO `revised_quotation` (`revised_id`, `r_quotation`, `r_quota_date`, `r_quota_no`, `r_company_name`,`r_branch_name`,`r_address`, `r_contact_person`,`r_person_id`,`r_designation`, `r_status`, `r_contact_by`, `r_remarks`, `r_managed_by`, `r_state`, `r_doc_data`, `r_terms_condition`) VALUES(NULL, '$id', '$date', '$quota_no', '$company_name', '$branch_name', '$branch_address', '$contact_person', '$person_id', '$designation', '$status', '$contact_by', '$remarks','$managed_by','Complete', '$doc', '$terms')");
    $quotationId = $db->getLastId();
    if ($rst){
        $rdt["injected"]=true;
        $rdt["quotationId"]=$quotationId;
    }else{
        $rdt['alert_type']="alert-danger";
        $rdt["injected"]=false;
        $rdt["message"]="Quotation is not added!";
    }
    return $rdt;
});

httpRESTMethod::put(function ($data){
    authGuard(sessAryName, PERMISSIONS['update']);
    $hasEmptyPrice=false;
    $rdt=array();
    $id=isset($_GET['id'])?$_GET['id']:null;
    $date=$data->date;
    $quota_no=$data->quotaNo;
    $company_name=$data->companyName;
    $branch_name=$data->branchName;
    $branch_address=$data->branchAddress;
    $contact_person=$data->contactPerson;
    $person_id=$data->personId;
    $designation=$data->designation;
    $status=$data->status;
    $contact_by=$data->contactBy;
    $remarks=$data->remarks;
    $product_list=$data->productList;
    $doc=json_encode($data->generatePdf);
    $terms=json_encode($data->termsCondition);
    if (count($product_list)==0){
        $state='Incomplete';
    }else{
        $state='Complete';
    }
    global $db;
    $rst=$db->query("UPDATE `revised_quotation` SET `r_quota_date` = '$date', `r_quota_no` = '$quota_no', `r_company_name` = '$company_name', `r_branch_name` = '$branch_name', `r_address` = '$branch_address', `r_contact_person` = '$contact_person',`r_person_id` = '$person_id',`r_designation` = '$designation', `r_status` = '$status', `r_contact_by` = '$contact_by', `r_remarks` = '$remarks' , `r_state` = '$state', `r_doc_data`='$doc', `r_terms_condition`='$terms' WHERE `revised_quotation`.`revised_id` = '$id'");
    if ($rst){
        $result=0;
        foreach ($product_list as $item){
            $rdt["entry"]=true;
            if ($item->productPrice=='0.00'){
                $hasEmptyPrice=true;
            }
            $result=$db->query("INSERT INTO `revised_product` (`r_product_id`, `r_quotation_id`, `r_product_name`, `r_product_part_no`, `r_internal_part_no`, `r_product_type`, `r_product_quantity`, `r_product_price`, `r_product_description`) VALUES (NULL, '$id', '$item->productName', '$item->productPartNumber', '$item->internalPartNumber', '$item->productType', '$item->productQty', '$item->productPrice', '$item->productDescription')");
            if ($result){
                $rdt["new_product"]="inserted";
            }else{
                $rdt["new_product"]="not inserted";
            }
        }
        if ($result){
            $rdt["injected"]=true;
            $rdt['alert_type']="alert-success";
            $rdt["message"]="Quotation is updated!";
        }else{
            $rdt["injected"]=false;
            $rdt['alert_type']="alert-warning";
            $rdt["message"]="Quotation is updated but product is not updated at all";
        }
    }else{
        $rdt['alert_type']="alert-danger";
        $rdt["injected"]=false;
        $rdt["message"]="Quotation is not updated!";
    }
    if ($hasEmptyPrice){
        $rst=$db->query("UPDATE `revised_quotation` SET `r_state` = 'Incomplete' WHERE `revised_quotation`.`revised_id` = '$id'");
        if ($rst){
            $rdt["state"]="Incomplete";
        }
    }
    return $rdt;
});

httpRESTMethod::delete(function (){
    authGuard(sessAryName, PERMISSIONS['delete']);
    $id=$_GET["id"];
    global $db;
    $rst=$db->query("DELETE FROM revised_quotation WHERE revised_id='$id'");
    if ($rst){
        $rdt["injected"]=true;
        $rdt['alert_msg']="alert-success";
        $rdt["message"]="Quotation is deleted!";
    }else{
        $rdt["injected"]=false;
        $rdt['alert_msg']="alert-danger";
        $rdt["message"]="Quotation is not deleted!";
    }
    return $rdt;
});

