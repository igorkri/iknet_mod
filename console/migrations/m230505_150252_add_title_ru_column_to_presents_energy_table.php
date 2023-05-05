<?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%presents_energy}}`.
 */
class m230505_150252_add_title_ru_column_to_presents_energy_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%presents_energy}}', 'title_ru', $this->string()->comment('Название_RU'));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%presents_energy}}', 'title_ru');
    }
}
