<?php

httpRESTMethod::post(function ($pdt) {
    return signin($pdt->username, $pdt->password);
});
