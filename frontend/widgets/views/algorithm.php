<?php

$lang = \Yii::$app->session->get('_language');

if($lang == 'ru'){
    $h1 =  'Алгоритм реализации проектов альтернативной энергетики';
    $download =  'Скачать';
    $image_tab = '/img/IKNET_algoritm_ru.jpg';

}elseif($lang == 'en'){
    $h1 =  'Implementation Algorithm for Alternative Energy project';
    $download = 'Download';
    $image_tab = '/img/IKNET_algoritm_en.jpg';

}else{
    $h1 =  'Алгоритм реалізації проєктів альтернативної енергетики';
    $download = 'Скачати';
    $image_tab = '/img/table.png';

}

?>

<section class="algorithm">
    <div class="block">
        <h1><?= $h1 ?></h1>
        <img src="<?= $image_tab ?>" alt="">
        <a href="<?= $image_tab ?>" class="uni_link" download>
            <?= $download ?>
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.15598 14.4375H11.8435C12.0691 14.4376 12.2863 14.5233 12.4512 14.6773C12.6161 14.8314 12.7164 15.0423 12.7318 15.2674C12.7471 15.4925 12.6765 15.7151 12.5341 15.8902C12.3917 16.0652 12.1882 16.1797 11.9646 16.2104L11.8435 16.2188H1.15598C0.930326 16.2187 0.713111 16.133 0.548226 15.9789C0.38334 15.8249 0.283078 15.614 0.267698 15.3888C0.252317 15.1637 0.322965 14.9411 0.465367 14.7661C0.607769 14.591 0.811307 14.4766 1.03485 14.4458L1.15598 14.4375H11.8435H1.15598ZM6.3786 0.195812L6.49973 0.1875C6.71495 0.187509 6.92288 0.265451 7.08508 0.406911C7.24728 0.548371 7.35277 0.74378 7.38204 0.957L7.39035 1.07812V10.2076L10.0682 7.531C10.2192 7.38003 10.4194 7.28835 10.6324 7.27266C10.8453 7.25696 11.0568 7.3183 11.2284 7.4455L11.3281 7.531C11.4791 7.68202 11.5708 7.88225 11.5864 8.09521C11.6021 8.30816 11.5408 8.51967 11.4136 8.69119L11.3281 8.79094L7.1291 12.9887C6.9783 13.1396 6.77838 13.2313 6.56569 13.2472C6.353 13.2631 6.14166 13.2022 5.9701 13.0754L5.87035 12.9887L1.67135 8.79094C1.512 8.63202 1.41872 8.41867 1.41026 8.19377C1.4018 7.96888 1.4788 7.74912 1.62577 7.57869C1.77274 7.40825 1.97878 7.29977 2.20247 7.27507C2.42616 7.25036 2.65092 7.31125 2.83154 7.4455L2.93129 7.531L5.6091 10.21V1.07812C5.60911 0.862905 5.68705 0.654969 5.82851 0.49277C5.96997 0.330571 6.16538 0.225082 6.3786 0.195812L6.49973 0.1875L6.3786 0.195812Z"
                    fill="" />
            </svg>
        </a>
    </div>
</section>
