<?php
httpRESTMethod::get(function (){
    $rData["link"]='';
    $rData["link"]= $rData["link"] . PROTOCOL . '://' . DOMAIN . '/' . WDN;
    return $rData;
});