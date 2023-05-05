<?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%presents_energy}}`.
 */
class m230505_150350_add_description_ru_column_to_presents_energy_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%presents_energy}}', 'description_ru', $this->text()->comment('Описание_RU'));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%presents_energy}}', 'description_ru');
    }
}
