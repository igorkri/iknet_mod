<?php

namespace common\models\search;

use common\models\ClientsBrand;
use yii\base\Model;
use yii\data\ActiveDataProvider;


/**
 * ClientsBrandSearch represents the model behind the search form of `app\models\ClientsBrand`.
 */
class ClientsBrandSearch extends ClientsBrand
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'published'], 'integer'],
            [['order', 'name', 'slug', 'file'], 'safe'],
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
        $query = ClientsBrand::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'pagination' => false,
            'sort'=> ['defaultOrder' => ['order' => SORT_ASC]],
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
            'published' => $this->published,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'slug', $this->slug])
            ->andFilterWhere(['like', 'file', $this->file]);

        return $dataProvider;
    }
}
