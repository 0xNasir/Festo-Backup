<?php
authGuard();

httpRESTMethod::get(function () {
    global $session;
    return $session->data;
});