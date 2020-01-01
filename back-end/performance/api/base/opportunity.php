<?php
header('Content-Type: application/json');
httpRESTMethod::get(function (){
    global $db;
    $sql=$db->query('SELECT * FROM `partners`');
    return $sql->rows;
});