<?php
header("Content-Type: application/json");

httpRESTMethod::get(function (){
    date_default_timezone_set("Asia/Dhaka");
    global $db;
    $db->query("SET SESSION group_concat_max_len = 1000000;");
    if (isset($_GET["id"])){
        $id=$_GET["id"];
        global $db;
        $rst=$db->query("SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"productId\":\"',product.product_id,'\",\"productName\":\"',product.product_name,'\",\"productPartNumber\":\"',product.product_part_no,'\",\"internalPartNumber\":\"',product.internal_part_no,'\",\"productType\":\"',product.product_type,'\",\"productQty\":\"',product.product_quantity,'\",\"productUnit\":\"',product.product_unit,'\",\"productQtyAvailable\":\"',product.available_quantity,'\",\"productPrice\":\"',product.product_price,'\",\"totalPrice\":\"',product.product_price*product.product_quantity,'\",\"productDescription\":\"',product.product_description,'\"}')),']'),'[]') AS productList, SUM(product.product_price * product.product_quantity) AS cumulativePrice FROM `quotation` LEFT JOIN `product` ON `product`.`quotation_id` = `quotation`.`quota_id` GROUP BY quota_id HAVING quota_id = '$id'");
        $updateHistory=$db->query("SELECT * FROM `update_quotation_history`");
        if ($rst->num_rows){
            foreach ($rst->rows as $value){
                $history=array();
                foreach ($updateHistory->rows as $updt){
                    if ($updt['u_quotation']==$value["quota_id"]){
                        $historyData=array(
                            'updateHistoryId'=>$updt['u_quota_id'],
                            'updatedOn'=>date('d-M-Y g:sA', $updt['updated_on']),
                            'updatedQuotationNumber'=>$updt['u_quota_no'],
                            'updatedQuotationDate'=>$updt['u_quota_date'],
                            'updatedQuotationStatus'=>$updt['u_status'],
                            'updatedProduct'=>json_decode($updt['products']),
                            'updatedPrice'=>$updt['price']
                        );
                        array_push($history, $historyData);
                    }
                }
                $rdt["id"]=$value["quota_id"];
                $rdt["date"]=$value["quota_date"];
                $rdt["quotaNo"]=$value["quota_no"];
                $rdt["quotaRef"]=$value["quota_ref"];
                $rdt["companyName"]=$value["company_name"];
                $rdt["branchName"]=$value["branch_name"];
                $rdt["address"]=$value["address"];
                $rdt["contactPerson"]=$value["contact_person"];
                $rdt["personId"]=$value["person_id"];
                $rdt["designation"]=$value["designation"];
                $rdt["status"]=$value["status"];
                $rdt["state"]=$value["state"];
                $rdt["contactBy"]=$value["contact_by"];
                $rdt["contactByUserId"]=$value["contact_by_userId"];
                $rdt["contactByUsername"]=$value["contact_by_username"];
                $rdt["contactByDesignation"]=$value["contact_by_designation"];
                $rdt["contactByPhone"]=$value["contact_by_phone"];
                $rdt["remarks"]=$value["remarks"];
                $rdt["productList"]=json_decode($value["productList"]);
                $rdt["cumulativePrice"]=$value["cumulativePrice"];
                $rdt["managedBy"]=$value["managed_by"];
                $rdt["doc"]=json_decode(str_replace(chr(10),"<br>", $value['doc_data']));
                $rdt["terms"]=json_decode($value['terms_condition']);
                $rdt['printCount']=$value['print_count'];
                $rdt["revision"]=null;
                $rdt['history']=$history;
            }
            return $rdt;
        }else{
            return [];
        }

    } else {
        $dept=array();
        $revise=$db->query("SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"productId\":\"',revised_product.r_product_id,'\",\"productName\":\"',revised_product.r_product_name,'\",\"productPartNumber\":\"',revised_product.r_product_part_no,'\",\"internalPartNumber\":\"',revised_product.r_internal_part_no,'\",\"productType\":\"',revised_product.r_product_type,'\",\"productQty\":\"',revised_product.r_product_quantity,'\",\"productPrice\":\"',revised_product.r_product_price,'\",\"totalPrice\":\"',revised_product.r_product_price*revised_product.r_product_quantity,'\",\"productDescription\":\"',revised_product.r_product_description,'\"}')),']'),'[]') AS productList, SUM(revised_product.r_product_price * revised_product.r_product_quantity) AS cumulativePrice FROM `revised_quotation` LEFT JOIN `revised_product` ON `revised_product`.`r_quotation_id` = `revised_quotation`.`revised_id` GROUP BY revised_id ORDER BY revised_id DESC");
        $rst=$db->query("SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"productId\":\"',product.product_id,'\",\"productName\":\"',product.product_name,'\",\"productPartNumber\":\"',product.product_part_no,'\",\"internalPartNumber\":\"',product.internal_part_no,'\",\"productType\":\"',product.product_type,'\",\"productQty\":\"',product.product_quantity,'\",\"productUnit\":\"',product.product_unit,'\",\"productQtyAvailable\":\"',product.available_quantity,'\",\"productPrice\":\"',product.product_price,'\",\"totalPrice\":\"',product.product_price*product.product_quantity,'\",\"productDescription\":\"',product.product_description,'\"}')),']'),'[]') AS productList, SUM(product.product_price * product.product_quantity) AS cumulativePrice FROM `quotation` LEFT JOIN `product` ON `product`.`quotation_id` = `quotation`.`quota_id` GROUP BY quota_id");
        $updateHistory=$db->query("SELECT * FROM `update_quotation_history`");
        foreach ($rst->rows as $value){
            $rev=array();
            foreach ($revise->rows as $r){
                if ($value['quota_id']==$r['r_quotation']){
                    $reviseData=array(
                        "id"=>$r["revised_id"],
                        "quotationId"=>$r["r_quotation"],
                        "date"=>$r["r_quota_date"],
                        "quotaNo"=>$r["r_quota_no"],
                        "companyName"=>$r["r_company_name"],
                        "branchName"=>$r["r_branch_name"],
                        "address"=>$r["r_address"],
                        "contactPerson"=>$r["r_contact_person"],
                        "personId"=>$r["r_person_id"],
                        "designation"=>$r["r_designation"],
                        "status"=>$r["r_status"],
                        "contactBy"=>$r["r_contact_by"],
                        "remarks"=>$r["r_remarks"],
                        "productList"=>json_decode($r["productList"]),
                        "cumulativePrice"=>$r['cumulativePrice'],
                        "managedBy"=>$r["r_managed_by"],
                        "state"=>$r["r_state"],
                        "doc"=>json_decode($r['r_doc_data']),
                        "terms"=>json_decode($r['r_terms_condition']),
                    );
                    array_push($rev, $reviseData);
                }
            }
            $history=array();
            foreach ($updateHistory->rows as $updt){
                if ($updt['u_quotation']==$value["quota_id"]){
                    $historyData=array(
                        'updateHistoryId'=>$updt['u_quota_id'],
                        'updatedOn'=>$updt['updated_on'],
                        'updatedQuotationNumber'=>$updt['u_quota_no'],
                        'updatedQuotationDate'=>$updt['u_quota_date'],
                        'updatedQuotationStatus'=>$updt['u_status'],
                        'updatedProduct'=>json_decode($updt['products']),
                        'updatedPrice'=>$updt['price']
                    );
                    array_push($history, $historyData);
                }
            }
            $data=array(
                "id"=>$value["quota_id"],
                "date"=>$value["quota_date"],
                "quotaNo"=>$value["quota_no"],
                "quotaRef"=>$value["quota_ref"],
                "companyName"=>$value["company_name"],
                "branchName"=>$value["branch_name"],
                "address"=>$value["address"],
                "contactPerson"=>$value["contact_person"],
                "personId"=>$value["person_id"],
                "designation"=>$value["designation"],
                "status"=>$value["status"],
                "contactBy"=>$value["contact_by"],
                "contactByUserId"=>$value["contact_by_userId"],
                "contactByUsername"=>$value["contact_by_username"],
                "contactByDesignation"=>$value["contact_by_designation"],
                "contactByPhone"=>$value["contact_by_phone"],
                "remarks"=>$value["remarks"],
                "productList"=>json_decode($value["productList"]),
                "cumulativePrice"=>$value['cumulativePrice'],
                "managedBy"=>$value["managed_by"],
                "state"=>$value["state"],
                "doc"=>json_decode($value['doc_data']),
                "terms"=>json_decode($value['terms_condition']),
                "printCount"=>$value['print_count'],
                "revision"=>$rev,
                "history"=>$history
            );
            array_push($dept, $data);
        }
        return $dept;
    }
});

httpRESTMethod::post(function ($data){

    authGuard(sessAryName, PERMISSIONS['create']);
    global $session;
    $managed_by=$session->data["user"]['username'];
    global $db;
    $doc=json_encode($data->generatePdf);
    $terms=json_encode($data->termsCondition);
    $status='Ready';
    foreach ($data->productList as $product){
        if ($product->productPrice>0){
            $status='Ready';
        }else{
            $status='Preparing';
            break;
        }
    }
    $rst=$db->query("INSERT INTO `quotation` (`quota_id`, `quota_date`, `quota_no`, `quota_ref`, `company_name`,`branch_name`,`address`, `contact_person`,`person_id`,`designation`, `status`, `contact_by`, `contact_by_userId`, `contact_by_username`,`contact_by_designation`,`contact_by_phone`, `remarks`, `managed_by`, `state`, `doc_data`, `terms_condition`, `print_count`) VALUES(NULL, '$data->date', '$data->quotaNo','$data->quotaRef', '$data->companyName', '$data->branchName', '$data->branchAddress', '$data->contactPerson', '$data->personId', '$data->designation', '$status', '$data->contactBy', '$data->contactByUserId', '$data->contactByUsername', '$data->contactByDesignation', '$data->contactByPhone', '$data->remarks','$managed_by','Incomplete', '$doc', '$terms', 0)");
    if ($rst){
        $quotationId = $db->getLastId();
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
    $id=$data->id;
    $product_list=$data->productList;
    $doc=json_encode($data->generatePdf);
    $terms=json_encode($data->termsCondition);
    $status='Ready';
    foreach ($data->productList as $product){
        if ($product->productPrice>0){
            $status='Ready';
        }else{
            $status='Preparing';
            break;
        }
    }
    if (count($product_list)==0){
        $state='Incomplete';
    }else{
        $state='Complete';
    }
    global $db;
    $rst=$db->query("UPDATE `quotation` SET `quota_date` = '$data->date', `quota_no` = '$data->quotaNo', `quota_ref` = '$data->quotaRef', `company_name` = '$data->companyName', `branch_name` = '$data->branchName', `address` = '$data->branchAddress', `contact_person` = '$data->contactPerson',`person_id` = '$data->personId',`designation` = '$data->designation', `status` = '$status', `contact_by` = '$data->contactBy', `contact_by_userId` = '$data->contactByUserId', `contact_by_username` = '$data->contactByUsername', `contact_by_designation` = '$data->contactByDesignation', `contact_by_phone` = '$data->contactByPhone', `remarks` = '$data->remarks' , `state` = '$state', `doc_data`='$doc', `terms_condition`='$terms' WHERE `quotation`.`quota_id` = '$id'");
    if ($rst){
        $products=$db->query("SELECT * FROM `product` WHERE quotation_id='$id'");
        $productDeleteMap=array();
        foreach ($products->rows as $product){
            $productDeleteMap[$product['product_id']]=$product['product_id'];
        }
        $result=0;
        foreach ($product_list as $item){
            unset($productDeleteMap[$item->productId]);
            if ($item->productId!=null){
                if ($item->productPrice=='0.00'){
                    $hasEmptyPrice=true;
                }
                $result=$db->query("UPDATE `product` SET `product_name` = '$item->productName', `product_part_no` = '$item->productPartNumber',`internal_part_no` = '$item->internalPartNumber', `product_type` = '$item->productType', `product_quantity` = '$item->productQty', `product_unit` = '$item->productUnit', `available_quantity` = '$item->productQtyAvailable', `product_price` = '$item->productPrice', `product_description` = '$item->productDescription' WHERE `product`.`product_id` ='$item->productId'");
            }else{
                $rdt["entry"]=true;
                if ($item->productPrice=='0.00'){
                    $hasEmptyPrice=true;
                }
                $result=$db->query("INSERT INTO `product` (`product_id`, `quotation_id`, `product_name`, `product_part_no`, `internal_part_no`, `product_type`, `product_quantity`, `available_quantity` , `product_unit`, `product_price`, `product_description`) VALUES (NULL, '$id', '$item->productName', '$item->productPartNumber', '$item->internalPartNumber', '$item->productType', '$item->productQty','$item->productQtyAvailable', '$item->productUnit', '$item->productPrice', '$item->productDescription')");
                if ($result){
                    $rdt["new_product"]="inserted";
                }else{
                    $rdt["new_product"]="not inserted";
                }
            }
        }
        foreach ($productDeleteMap as $value){
            $result=$db->query("DELETE FROM `product` WHERE `product`.`product_id` = '$value'");
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
        $rst=$db->query("UPDATE `quotation` SET `status` = 'Preparing', `state` = 'Incomplete' WHERE `quotation`.`quota_id` = '$id'");
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
    $rst=$db->query("DELETE FROM quotation WHERE quota_id='$id'");
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

