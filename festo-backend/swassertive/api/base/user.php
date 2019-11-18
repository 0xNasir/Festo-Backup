<?php


httpRESTMethod::get(function (){
    //authGuard("primeAccess", "usersPage");
    global $db;

    if (isset($_GET["id"])) {
        $userId = $_GET['id'];
        global $db;
        $user = $db->query("SELECT userId, name, dob, username, gender, religion, bloodgroup, address, jointime, blocked, phones, emails, designations, CONCAT('{\"levelId\":',level.levelId,',\"title\":\"',level.title,'\",\"description\":\"',level.description,'\"}') as userLevel FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"dgnId\":',dgn.dgnId,',\"fromTime\":\"',dgn.fromTime,'\",\"toTime\":\"',dgn.toTime,'\",\"title\":\"',dgn.title,'\"}')),']'),'[]') as designations FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"emailId\":',email.emailId,',\"emailType\":\"',email.emailType,'\",\"email\":\"',email.email,'\"}')),']'),'[]') as emails FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"phoneId\":',phone.phoneId,',\"phoneType\":\"',phone.phoneType,'\",\"number\":\"',phone.number,'\"}')),']'),'[]') as phones FROM user LEFT JOIN phone ON user.userId = phone.phoneUserId GROUP BY user.userId) as t1 LEFT JOIN email ON t1.userId=email.emailUserId GROUP BY t1.userId) as t2 LEFT JOIN dgn ON t2.userId=dgn.dgnUserId GROUP BY t2.userId) as t3 join level on level.levelId = t3.userLevelId HAVING t3.userId=$userId");

        if($user->num_rows > 0) {
            $user->row["phones"] = JSON_DECODE($user->row["phones"]);
            $user->row["emails"] = JSON_DECODE($user->row["emails"]);
            $user->row["designations"] = JSON_DECODE($user->row["designations"]);
            $user->row["userLevel"] = JSON_DECODE($user->row["userLevel"]);
        }
        return $user->row;
    } else {

        $user = $db->query("SELECT userId, name, dob, username, gender, religion, bloodgroup, address, jointime, blocked, phones, emails, designations, CONCAT('{\"levelId\":',level.levelId,',\"title\":\"',level.title,'\",\"description\":\"',level.description,'\"}') as userLevel FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"dgnId\":',dgn.dgnId,',\"fromTime\":\"',dgn.fromTime,'\",\"toTime\":\"',dgn.toTime,'\",\"title\":\"',dgn.title,'\"}')),']'),'[]') as designations FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"emailId\":',email.emailId,',\"emailType\":\"',email.emailType,'\",\"email\":\"',email.email,'\"}')),']'),'[]') as emails FROM (SELECT *, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"phoneId\":',phone.phoneId,',\"phoneType\":\"',phone.phoneType,'\",\"number\":\"',phone.number,'\"}')),']'),'[]') as phones FROM user LEFT JOIN phone ON user.userId = phone.phoneUserId GROUP BY user.userId) as t1 LEFT JOIN email ON t1.userId=email.emailUserId GROUP BY t1.userId) as t2 LEFT JOIN dgn ON t2.userId=dgn.dgnUserId GROUP BY t2.userId) as t3 join level on level.levelId = t3.userLevelId");

        foreach ($user->rows as $key => $value) {
            $user->rows[$key]["phones"] = JSON_DECODE($user->rows[$key]["phones"]);
            $user->rows[$key]["emails"] = JSON_DECODE($user->rows[$key]["emails"]);
            $user->rows[$key]["designations"] = JSON_DECODE($user->rows[$key]["designations"]);
            $user->rows[$key]["userLevel"] = JSON_DECODE($user->rows[$key]["userLevel"]);
        }
        return $user->rows;
    }

});


// Add new user
httpRESTMethod::post(function ($pdt){
    authGuard("primeAccess", "addNewUser");
    global $db;
    $lastId=0;
    $password = md5($pdt->password);
    $result = $db->query("
INSERT INTO user 
(name, dob, username, password, gender, religion, bloodGroup, address, joinTime, userLevelId, primeAccessMod)
 VALUES 
 ('$pdt->name', '$pdt->dob', '$pdt->username', '$password', '$pdt->gender', '$pdt->religion', '$pdt->bloodGroup', '$pdt->address', '$pdt->joinTime', '$pdt->userLevelId', '[]')
 ");

    if ($result){
        $lastId = $db->getLastId();
        $sqlMultiQuery = "";
        foreach ($pdt->phones as $index=>$phone) {
            $sqlMultiQuery = "INSERT INTO `phone` (`phoneUserId`, `phoneType`, `number`) VALUES ('$lastId', '$phone->phoneType', '$phone->number'); ";
            $db->query($sqlMultiQuery);
        }

        foreach ($pdt->emails as $index=>$email) {
            $sqlMultiQuery = "INSERT INTO `email` (`emailUserId`, `emailType`, `email`) VALUES ('$lastId', '$email->emailType', '$email->email');";
            $db->query($sqlMultiQuery);
        }

        foreach ($pdt->designations as $index=>$designation){
            $sqlMultiQuery = "INSERT INTO `dgn` (`dgnUserId`, `fromTime`, `toTime`, `title`) VALUES ('$lastId', '$designation->fromTime', '$designation->toTime', '$designation->title');";
            $db->query($sqlMultiQuery);
        }
    }
    return $result;
});

// Edit user
httpRESTMethod::put(function ($pdt){
    authGuard("primeAccess", "editUser");
    global $db;
    //$delete = $pdt->delete;
    $update = $pdt;

    // To update the main data
    $result = $db->query("
UPDATE `user` SET 
`name` = '$update->name', 
`dob` = '$update->dob', 
`gender` = '$update->gender', 
`religion` = '$update->religion', 
`bloodgroup` = '$update->bloodgroup', 
`address` = '$update->address', 
`jointime` = '$update->jointime', 
`userLevelId` = '$update->userLevelId', 
`blocked` = '$update->blocked' 
WHERE `user`.`userId` = $update->userId;
");

    // To update the phone array data
    $backData = $db->query("SELECT `phoneId` FROM `phone` WHERE `phoneUserId` = '$update->userId'");
    $phonesDeleteMap = array();
    foreach ($backData->rows as $key=>$val) {
        $phonesDeleteMap[$val["phoneId"]] = $val["phoneId"];
    }
    foreach ($update->phones as $index=>$phone){
        unset($phonesDeleteMap[$phone->phoneId]);
        if ($phone->phoneId != null){
            $result = $db->query("UPDATE `phone` SET `phoneType` = '$phone->phoneType', `number` = '$phone->number' WHERE `phone`.`phoneId` = $phone->phoneId;");
        } else {
            $result = $db->query("INSERT INTO `phone` (phoneUserId, phoneType, number) VALUES ('$update->userId', '$phone->phoneType', '$phone->number');");
        }
    }
    foreach ($phonesDeleteMap as $val) {
        $result = $db->query("DELETE FROM `phone` WHERE `phoneId` = '$val'");
    }

    // To update the email array data
    $backData = $db->query("SELECT `emailId` FROM `email` WHERE `emailUserId` = '$update->userId'");
    $emailDeleteMap = array();
    foreach ($backData->rows as $val){
        $emailDeleteMap[$val["emailId"]] = $val["emailId"];
    }
    foreach ($update->emails as $index=>$email){
        unset($emailDeleteMap[$email->emailId]);
        if ($email->emailId != null){
            $result = $db->query("UPDATE `email` SET `emailType` = '$email->emailType', `email` = '$email->email' WHERE `email`.`emailId` = $email->emailId;");
        } else {
            $result = $db->query("INSERT INTO `email` (emailUserId, emailType, email) VALUES ('$update->userId', '$email->emailType', '$email->email');");
        }
    }
    foreach ($emailDeleteMap as $val) {
        $result = $db->query("DELETE FROM `email` WHERE `emailId` = $val");
    }

    // To update designations
    $backData = $db->query("SELECT `dgnId` FROM `dgn` WHERE `dgnUserId`='$update->userId'");
    $dgnDeleteMap = array();
    foreach ($backData->rows as $val){
        $dgnDeleteMap[$val["dgnId"]] = $val["dgnId"];
    }
    foreach ($update->designations as $index=>$designation){
        unset($dgnDeleteMap[$designation->dgnId]);
        if($designation->dgnId != null){
            $result = $db->query("UPDATE `dgn` SET `fromTime` = '$designation->fromTime', `toTime` = '$designation->toTime', `title` = '$designation->title' WHERE `dgn`.`dgnId`=$designation->dgnId;");
        } else {
            $result = $db->query("INSERT INTO `dgn` (dgnUserId, fromTime, toTime, title) VALUES ('$update->userId', '$designation->fromTime', '$designation->toTime', '$designation->title');");
        }
    }
    foreach ($dgnDeleteMap as $value) {
        $result = $db->query("DELETE FROM `dgn` WHERE `dgnId` = '$value'");
    }

    return $result;
});

