<?php

namespace frontend\helpers;

use common\models\System;

class SystemHelper
{
    public static function getText($key)
    {
        return System::getText($key);
    }
}