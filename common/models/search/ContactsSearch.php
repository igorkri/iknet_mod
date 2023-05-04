<?php

namespace common\models\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use common\models\Contacts;

/**
 * ContactsSearch represents the model behind the search form of `common\models\Contacts`.
 */
class ContactsSearch extends Contacts
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['title_uk', 'title_en', 'title_ru', 'adres_uk', 'adres_en', 'adres_ru', 'coment_uk', 'coment_en', 'coment_ru', 'email', 'site', 'tel1', 'tel2'], 'safe'],
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
        $query = Contacts::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'title_uk', $this->title_uk])
            ->andFilterWhere(['like', 'title_en', $this->title_en])
            ->andFilterWhere(['like', 'title_ru', $this->title_ru])
            ->andFilterWhere(['like', 'adres_uk', $this->adres_uk])
            ->andFilterWhere(['like', 'adres_en', $this->adres_en])
            ->andFilterWhere(['like', 'adres_ru', $this->adres_ru])
            ->andFilterWhere(['like', 'coment_uk', $this->coment_uk])
            ->andFilterWhere(['like', 'coment_en', $this->coment_en])
            ->andFilterWhere(['like', 'coment_ru', $this->coment_ru])
            ->andFilterWhere(['like', 'email', $this->email])
            ->andFilterWhere(['like', 'site', $this->site])
            ->andFilterWhere(['like', 'tel1', $this->tel1])
            ->andFilterWhere(['like', 'tel2', $this->tel2]);

        return $dataProvider;
    }
}
