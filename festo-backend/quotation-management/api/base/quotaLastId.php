<?php
httpRESTMethod::get(function () {
    global $db;
    return $db->lastId("quotation","quota_id", "quotaId");
});