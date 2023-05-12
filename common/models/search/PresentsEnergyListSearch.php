<?php

namespace common\models\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use common\models\PresentsEnergyList;

/**
 * PresentsEnergyListSearch represents the model behind the search form of `common\models\PresentsEnergyList`.
 */
class PresentsEnergyListSearch extends PresentsEnergyList
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['title_uk', 'description_uk', 'sku_uk', 'title_en', 'description_en', 'sku_en', 'title_ru', 'description_ru', 'sku_ru'], 'safe'],
            [['price_uk', 'price_en', 'price_ru'], 'number'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = PresentsEnergyList::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

//        if (!$this->validate()) {
//            // uncomment the following line if you do not want to return any records when validation fails
//            // $query->where('0=1');
//            return $dataProvider;
//        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'price_uk' => $this->price_uk,
        ]);

        $query->andFilterWhere(['like', 'title_uk', $this->title_uk])
            ->andFilterWhere(['like', 'description_uk', $this->description_uk])
            ->andFilterWhere(['like', 'sku_uk', $this->sku_uk]);

        return $dataProvider;
    }
}
