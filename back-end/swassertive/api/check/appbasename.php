<?php

httpRESTMethod::post(function ($basename) {
    global $db;
    $user = $db->query("SELECT `app`.`sessAryName` FROM `app` WHERE `app`.`sessAryName` = '$basename->basename'");

    if ($user->num_rows > 0) {
        return true;
    } else {
        return false;
    }
});
