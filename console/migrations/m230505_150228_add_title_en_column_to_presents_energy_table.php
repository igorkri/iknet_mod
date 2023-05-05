<?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%presents_energy}}`.
 */
class m230505_150228_add_title_en_column_to_presents_energy_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%presents_energy}}', 'title_en', $this->string()->comment('Название_EN'));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%presents_energy}}', 'title_en');
    }
}
