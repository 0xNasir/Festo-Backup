<?php

httpRESTMethod::post(function ($username) {
    global $db;
    $user = $db->query("SELECT `user`.`username` FROM `user` WHERE `user`.`username` = '$username->username'");

    if ($user->num_rows > 0) {
        return true;
    } else {
        return false;
    }
});
