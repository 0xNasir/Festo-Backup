<?php
authGuard("primeAccess", "primeAccessControl");

httpRESTMethod::get(function () {
    global $db;
    $userId = $_GET["id"];

    $user = $db->query("SELECT userId, primeAccessMod, COALESCE(CONCAT('[',GROUP_CONCAT(CONCAT('{\"keyword\":\"',prime.keyword,'\",\"definition\":\"',prime.definition,'\",\"val\":',prime.val,'}')),']'),'[]') as primeAccess FROM `user` JOIN `prime` GROUP BY userId HAVING userId = '$userId'");
    $user->row["primeAccessMod"] = JSON_decode($user->row["primeAccessMod"]);
    $user->row["primeAccess"] = JSON_decode($user->row["primeAccess"]);


    $primeAccessModArray = array();
    foreach ($user->row["primeAccessMod"] as $index => $value) {
        $primeAccessModArray[$value->keyword] = $value->val;
    }


    //$primeAccess = array();
    //var_dump($user->row["primeAccess"]);
    foreach ($user->row["primeAccess"] as $index => $value) {
        if (isset($primeAccessModArray[$value->keyword])) {
            $user->row["primeAccess"][$index]->val = $primeAccessModArray[$value->keyword];
        }
    }

    return $user->row["primeAccess"];

});


httpRESTMethod::put(function ($primeAccessMod) {
    global $db;
    $userId = $_GET["id"];
    // var_dump($primeAccessMod);

    $primeAccessDefault = $db->query("SELECT * FROM `prime`")->rows;


    $arrayToStore = array_map(function ($value) use ($primeAccessMod) {

        $filterVal = array_filter($primeAccessMod, function ($val) use ($value) {
            return ($val->keyword == $value["keyword"]);
        });

        // checking the value is available
        if (sizeof($filterVal) > 0) {
            // pickup the value from the filtered array
            $filterVal = array_pop($filterVal);

            // return the desired data or null
            if ($filterVal->val != $value["val"]) {
                return array("keyword" => $value["keyword"], "val" => $filterVal->val);
            } else {
                return null;
            }
        }
    }, $primeAccessDefault);

    // to remove the null values
    $arrayToStore = array_filter($arrayToStore, function ($val) {
        return ($val != null);
    });
    // To reindexing the array
    $arrayToStore = array_values($arrayToStore);

    $JSON_DataToStore = JSON_encode($arrayToStore);

    $result = $db->query("UPDATE `user` SET `primeAccessMod` = '$JSON_DataToStore' WHERE `userId` = '$userId'");

    return $result;
});


/*$primeAccessDefault = $db->query("SELECT * FROM `prime`")->rows;

$primeAccessModArray = array();
foreach ($primeAccessMod as $index=>$value) {
    $primeAccessModArray[$value->keyword] = $value->val;
}
//var_dump($primeAccessDefault);

$primeAccessModFinal = array();
foreach ($primeAccessDefault as $key=>$val){
    $accessSet = array();
    if (isset($primeAccessModArray[$val["keyword"]])) {
        if ($primeAccessModArray[$val["keyword"]] != $val["val"]){
            $accessSet["keyword"] = $val["keyword"];
            $accessSet["val"] = $primeAccessModArray[$val["keyword"]];

            array_push($primeAccessModFinal, $accessSet);
        }

    }

}

return $primeAccessModFinal;*/
