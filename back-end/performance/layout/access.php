<?php

// access layout file to access control


// simple login format

$devMode = true;
$sessionCookieName = "SWASESS";
if ($devMode){
    // Allow CORS headers
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    // set the defined token for development mode
    $session->start('thisIsDevelopmentModeToken');
} else {
    // Startup the session
    if ($tokenId = $cookie->get($sessionCookieName)){
        $session->start($tokenId);
    } else {
        $cookie->set($sessionCookieName, $session->start(), 360000);
    }
}


function responseUnauthorized($destroy = false){
    if ($destroy) {
        global $session;
        $session->data = array();
    }
    header("HTTP/1.1 401 Unauthorized");
    exit();
}

function authGuard($sessAryName = "", $keyword = "") {
    global $session;
    // Check the data available
    if (empty($session->data)){
        responseUnauthorized();
    } else {
        // check whether the data is valid or not
        if (isset($session->data["user"]["HTTP_USER_AGENT"]) and isset($session->data["user"]['username'])) {
            // Check the data is valid or not
            if ($session->data["user"]["HTTP_USER_AGENT"] == $_SERVER['HTTP_USER_AGENT']){
                // Authentic User
                // echo "Welcome you are logged in";
                // Check for the specific user permission
                if ($sessAryName == "primeAccess"){
                    if (isset($session->data["primeAccess"][$keyword])){
                        if ($session->data["primeAccess"][$keyword] == 1 or $session->data["primeAccess"][$keyword] == "1"){
                            // Authentic user
                        } else {
                            responseUnauthorized();
                        }
                    } else {
                        responseUnauthorized();
                    }
                }
                else if ($sessAryName != "" and $keyword != ""){
                    if (isset($session->data["permission"][$sessAryName])){
                        if (isset($session->data["permission"][$sessAryName][$keyword])){
                            if ($session->data["permission"][$sessAryName][$keyword] == "1" or $session->data["permission"][$sessAryName][$keyword] == 1){
                                // Authentic for specific permission
                                // echo "authentic";
                            } else {
                                responseUnauthorized();
                            }
                        } else {
                            responseUnauthorized();
                        }
                    } else {
                        responseUnauthorized();
                    }
                }
            } else {
                responseUnauthorized(true);
            }
        } else {
            responseUnauthorized(true);
        }
    }
}


