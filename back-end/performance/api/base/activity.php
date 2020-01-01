<?php
header('Content-Type: application/json');
httpRESTMethod::get(function (){
//    authGuard();
    date_default_timezone_set("Asia/Dhaka");
    global $db;
    if (isset($_GET['id'])){
        $id=$_GET['id'];
        $sql=$db->query("SELECT * FROM `activity` WHERE `activityId`='$id'");
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
            return $sql->rows[0];
        }else{
            return array();
        }
    }else if (isset($_GET['user'])){
        global $db;
        $user=$_GET['user'];
        $sql=$db->query("SELECT * FROM `activity` WHERE `activityUserId` LIKE '%$user%' ORDER BY `activityDate` ASC");
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
    }else{
        $d1= strtotime(date('d M Y ').'00:00:01');
        $d2= strtotime(date('d M Y ').'23:59:59');
        $sql=$db->query("SELECT * FROM `activity` WHERE `activityDate`>'$d1' AND `activityDate`<'$d2' GROUP BY `activityUserId` ORDER BY `activityDate` ASC");
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
            $ql=$db->query('SELECT `activityUserId` FROM `activity` GROUP BY `activityUserId`');
            $c=0;
            foreach ($ql->rows as $usr){
                $time=time();
                $usr=$usr['activityUserId'];
                $ctn=json_encode(array(array("contentDesc"=>"")));
                if ($db->query("INSERT INTO `activity` (`activityId`, `activityUserId`, `activityType`, `activityContent`, `activityCompany`, `activityDate`) VALUES (NULL, '$usr', '', '$ctn', '', '$time')")){
                    $c++;
                }
            }
            return null;
        }
    }
});
httpRESTMethod::post(function ($data){
    authGuard();
    date_default_timezone_set("Asia/Dhaka");
    global $db;
    global $session;
    $userId=$session->data["user"]['username'];
    $first=strtotime(date('d M Y ', $data->activityDate).'00:00:01');
    $last=strtotime(date('d M Y ', $data->activityDate).'23:59:59');
    $sql=$db->query("SELECT * FROM `activity` WHERE `activityDate`>'$first' AND `activityDate`<'$last' AND `activityUserId`='$userId'");
    if ($sql->num_rows){
        $rData['affected']=false;
        $rData['message']="Activity already available for this date";
        return $rData;
    }else{
        $content=json_encode($data->activityContent);
        if ($db->query("INSERT INTO `activity` (`activityId`, `activityUserId`, `activityType`, `activityContent`, `activityCompany`, `activityDate`) VALUES (NULL, '$userId', '$data->activityType', '$content', '$data->activityClient', '$data->activityDate')")){
            if ($data->activityType=='Visit'){
                $lastId=$db->getLastId();
                $count=0;
                foreach ($data->acivityVisit as $visit){
                    $visit->visitCompanyBranch=json_encode($visit->visitCompanyBranch);
                    $visit->visitCompanyPerson=json_encode($visit->visitCompanyPerson);
                    $outcome=json_encode($visit->visitOutcome);
                    $opportunities=json_encode($visit->visitOpportunities);
                    if ($db->query("INSERT INTO `visit` (`visitId`, `visitActivity`, `visitPurpose`, `visitCompanyId`, `visitCompany`, `visitCompanyBranch`, `visitCompanyPerson`, `visitCategory`, `visitOutCome`, `visitOpportunity`) VALUES (NULL, '$lastId', '$visit->visitPurpose', '$visit->visitCompanyId', '$visit->visitCompany', '$visit->visitCompanyBranch', '$visit->visitCompanyPerson', '$visit->visitCategory', '$outcome', '$opportunities')")){
                        $count++;
                    }
                }
                $rData['affected']=true;
                $rData['message']="Activity is added";
            }else{
                $rData['affected']=true;
                $rData['message']="Activity is added";
            }
        }else{
            $rData['affected']=false;
            $rData['message']="Activity is not added";
        }
        return $rData;
    }
});
httpRESTMethod::put(function ($data){
    authGuard();
    date_default_timezone_set("Asia/Dhaka");
    global $db;
    global $session;
    $newCount=0;
    $updtCount=0;
    $dltCount=0;
    $userId=$session->data["user"]['username'];
    $preEntry=$db->query("SELECT * FROM  `activity` WHERE `activityUserId`='$userId' AND `activityId`!='$data->activityId'");
    $isExist=false;
    if ($preEntry->num_rows){
        foreach ($preEntry->rows as $value){
            if (date('d M Y', $value['activityDate'])==date('d M Y', $data->activityDate)){
                $isExist=true;
                break;
            }
        }
    }
    if ($isExist){
        $rData['affected']=false;
        $rData['message']="This date is used prevously.";
    }else{
        $data->activityContent=json_encode($data->activityContent);
        $last=strtotime(date('d M Y ', $data->activityDate).date('H:i:s'));
        if ($db->query("UPDATE `activity` SET `activityType` = '$data->activityType', `activityContent` = '$data->activityContent', `activityCompany` = '$data->activityClient', `activityDate` = '$last' WHERE `activity`.`activityId` = '$data->activityId'")){
            if ($data->activityType=='Visit'){
                $visits=$db->query("SELECT * FROM `visit` WHERE visitActivity='$data->activityId'");
                $visitDeleteMap=array();
                foreach ($visits->rows as $visit){
                    $visitDeleteMap[$visit['visitId']]=$visit['visitId'];
                }
                $visitList=$data->acivityVisit;
                foreach ($visitList as $item) {
                    unset($visitDeleteMap[$item->visitId]);
                    $item->visitCompanyBranch=json_encode($item->visitCompanyBranch);
                    $item->visitCompanyPerson=json_encode($item->visitCompanyPerson);
                    $outcome=json_encode($item->visitOutcome);
                    $opportunities=json_encode($item->visitOpportunities);
                    if ($item->visitId!=null){
                        $result=$db->query("UPDATE `visit` SET `visitActivity` = '$data->activityId', `visitPurpose` = '$item->visitPurpose', `visitCompanyId` = '$item->visitCompanyId', `visitCompany` = '$item->visitCompany', `visitCompanyBranch` = '$item->visitCompanyBranch', `visitCompanyPerson` = '$item->visitCompanyPerson', `visitCategory` = '$item->visitCategory', `visitOutCome` = '$outcome', `visitOpportunity` = '$opportunities' WHERE `visit`.`visitId` = '$item->visitId'");
                        $updtCount=$result?$updtCount+1:$updtCount;
                    }else{
                        $result=$db->query("INSERT INTO `visit` (`visitId`, `visitActivity`, `visitPurpose`, `visitCompanyId`, `visitCompany`, `visitCompanyBranch`, `visitCompanyPerson`, `visitCategory`, `visitOutCome`, `visitOpportunity`) VALUES (NULL, '$data->activityId', '$item->visitPurpose', '$item->visitCompanyId', '$item->visitCompany','$item->visitCompanyBranch', '$item->visitCompanyPerson', '$item->visitCategory', '$outcome', '$opportunities')");
                        if ($result){
                            $newCount++;
                        }
                    }
                }
                foreach ($visitDeleteMap as $value){
                    $result=$db->query("DELETE FROM `visit` WHERE `visit`.`visitId` = '$value'");
                    if ($result){
                        $dltCount++;
                    }
                }
                $rData['affected']=true;
                $rData['message']="Activity is updated with ".$newCount." new visit, ".$updtCount." existing visit & ".$dltCount." delete.";
            }else{
                $visits=$db->query("SELECT * FROM `visit` WHERE visitActivity='$data->activityId'");
                if ($visits->num_rows){
                    $result=$db->query("DELETE FROM `visit` WHERE `visit`.`visitActivity` = '$data->activityId'");
                    if ($result){
                        $rData['affected']=true;
                        $rData['message']="Activity is updated";
                    }
                }
                $rData['affected']=true;
                $rData['message']="Activity is updated";
            }
        }else{
            $rData['affected']=false;
            $rData['message']="Activity is not updated";
        }
    }
    return $rData;
});
httpRESTMethod::delete(function (){
   authGuard();
   global $db;
   if (isset($_GET['id'])){
       $id=$_GET['id'];
       if ($db->query("DELETE FROM `activity` WHERE activityId='$id'")){
           $rData['affected']=true;
           $rData['message']="Activity is deleted";
       }else{
           $rData['affected']=false;
           $rData['message']="Sorry! Activity is not deleted";
       }
   }else{
       $rData['affected']=false;
       $rData['message']="Sorry! Something went wrong.";
   }
   return $rData;
});