<?php
authGuard();
httpRESTMethod::get(function (){
   return true;
});