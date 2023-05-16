 <?php

use yii\db\Migration;

/**
 * Handles adding columns to table `{{%presents_energy_list}}`.
 */
class m230516_054018_add_order_column_to_presents_energy_list_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%presents_energy_list}}', 'order', $this->integer());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%presents_energy_list}}', 'order');
    }
}
