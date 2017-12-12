<?php
/**
 * Created by PhpStorm.
 * User: amezheritsky
 * Date: 12.12.17
 * Time: 11:48
 */

namespace app\controllers;

use yii\rest\ActiveController;

class MediaController extends ActiveController
{
    public $modelClass = 'app\models\Media';
}