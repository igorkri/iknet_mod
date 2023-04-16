<?php


namespace backend\models;


use yii\base\Model;

class UploadFile extends Model
{

    public $file;

    public function rules()
    {
        return [
            [['file'], 'safe'],
        ];
    }

}