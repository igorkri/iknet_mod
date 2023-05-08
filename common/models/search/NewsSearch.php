<?php

namespace common\models\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use common\models\News;

/**
 * NewsSearch represents the model behind the search form of `common\models\News`.
 */
class NewsSearch extends News
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'created_at', 'updated_at', 'category_id', 'menu_id', 'published'], 'integer'],
            [['slug', 'title_uk', 'text_uk', 'seo_title_uk', 'seo_description_uk', 'seo_keywords_uk', 'title_en', 'text_en', 'seo_title_en', 'seo_description_en', 'seo_keywords_en', 'title_ru', 'text_ru', 'seo_title_ru', 'seo_description_ru', 'seo_keywords_ru', 'image', 'image_og'], 'safe'],
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
        $query = News::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'sort' => [
                'defaultOrder' => [
                    'created_at' => SORT_DESC,
                ]
            ]
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
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'category_id' => $this->category_id,
            'menu_id' => $this->menu_id,
            'published' => $this->published,
        ]);

        $query->andFilterWhere(['like', 'slug', $this->slug])
            ->andFilterWhere(['like', 'title_uk', $this->title_uk])
            ->andFilterWhere(['like', 'text_uk', $this->text_uk])
            ->andFilterWhere(['like', 'seo_title_uk', $this->seo_title_uk])
            ->andFilterWhere(['like', 'seo_description_uk', $this->seo_description_uk])
            ->andFilterWhere(['like', 'seo_keywords_uk', $this->seo_keywords_uk])
            ->andFilterWhere(['like', 'title_en', $this->title_en])
            ->andFilterWhere(['like', 'text_en', $this->text_en])
            ->andFilterWhere(['like', 'seo_title_en', $this->seo_title_en])
            ->andFilterWhere(['like', 'seo_description_en', $this->seo_description_en])
            ->andFilterWhere(['like', 'seo_keywords_en', $this->seo_keywords_en])
            ->andFilterWhere(['like', 'title_ru', $this->title_ru])
            ->andFilterWhere(['like', 'text_ru', $this->text_ru])
            ->andFilterWhere(['like', 'seo_title_ru', $this->seo_title_ru])
            ->andFilterWhere(['like', 'seo_description_ru', $this->seo_description_ru])
            ->andFilterWhere(['like', 'seo_keywords_ru', $this->seo_keywords_ru])
            ->andFilterWhere(['like', 'image', $this->image])
            ->andFilterWhere(['like', 'image_og', $this->image_og]);

        return $dataProvider;
    }
}
