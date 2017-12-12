<?php
/**
 * Created by PhpStorm.
 * User: amezheritsky
 * Date: 12.12.17
 * Time: 11:51
 */

namespace app\models;

use yii\db\ActiveRecord;

class Media extends ActiveRecord
{
    const STATUS_INACTIVE = 0;
    const STATUS_ACTIVE = 1;

    /**
     * @return string the name of the table associated with this ActiveRecord class.
     */
    public static function tableName()
    {
        return '{{media}}';
    }
}