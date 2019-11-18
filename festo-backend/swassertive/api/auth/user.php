<?php
authGuard();

httpRESTMethod::get(function () {
    // global $db;
    global $session;
    $userData["user"]["fullName"] = $session->data["user"]["fullName"];
    $userData["user"]["userId"] = $session->data["user"]["userId"];
    $userData["user"]["username"] = $session->data["user"]["username"];

    $userData["appList"] = $session->data["appList"];
    $userData["primeAccess"] = $session->data["primeAccess"];
    return $userData;
});