<?php
authGuard();

httpRESTMethod::get(function () {
    // global $db;
    global $session;
    return $session->data;
});