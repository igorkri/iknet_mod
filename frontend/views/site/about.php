<?php
$currentLocal = \Yii::$app->session->get('_language');

if ($currentLocal == "ru") {
    $html_title = "О компании ИКНЭТ";
    $html_description = "Информация о компании ИКНЭТ и ее руководстве, отзывы от компаний-партнеров";
} elseif ($currentLocal == "uk") {
    $html_title = "Про компанію ІКНЕТ";
    $html_description = "Інформація про компанію ІКНЕТ та її керівництво, відгуки від компаній-партнерів";
} else {
    $html_title = "About the IKNET Company";
    $html_description = "Information about the IKNET Company and management, letters of reference from partner companies";
}

$useContactForm = true;
?>

<div class="boxed-layout">
    <div class="pane-wrapper clearfix">
        <div id="main-content">
            <div id="sub-header" class="layout-full has-background">
                <div class="meta-header" style="background-image:none;">
                    <div class="limit-wrapper">
                        <div class="meta-header-inside">
                            <header class="page-header ">
                                <div class="page-header-content">
                                    <h1 style="color:#fff;padding: 11px 56px !important;width: fit-content;margin: 0 auto !important" class="text-divider-double">
                                        <?php echo \frontend\helpers\SystemHelper::getText('ABOUT') ?>
                                    </h1>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>


            <!-- #main (do not remove this comment) -->
            <div id="wptime-plugin-preloader"></div>


            <div id="main" role="main" class="wpv-main layout-full">
                <div class="limit-wrapper">
                    <div class="row ">
                        <div class="wpv-grid grid-1-1  wpv-first-level first unextended animation-fade-in animated-active"
                             style="padding-top:0px;padding-bottom:0px"
                             id="wpv-column-75083166bc4eb74d5db67fbe25847f89">
                            <!--                            <h2 id="about" class="text-divider-double">--><?php echo \frontend\helpers\SystemHelper::getText('INDEX_TITILE_ABOUT_COMPANY') ?><!--</h2>-->

                            <div class="sep"></div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="wpv-grid grid-1-1  wpv-first-level first unextended"
                             style="padding-top:0px;padding-bottom:0px"
                             id="wpv-column-37b276805256aea72b27d24db45c715f">
                            <div class="about-txt">
                                <?php if ($currentLocal == "ru"): ?>
                                    <div>
                                        <p>Компания имеет успешный практический опыт реализации проектов, в частности
                                            специализируется на управлении инвестиционными проектами в энергетике и
                                            промышленности в части:</p>
                                        <ul>
                                            <li>проектирования и строительства схем внешнего электроснабжения или выдачи
                                                мощности объектов потребления и генерации;</li>
                                            <li>энергоаудита объектов энергетики с целью определения комплекса необходимых мер по дальнейшей реализации проекта;</li>
                                            <li>технического due diligence объектов энергетики;</li>
                                            <li>комплексного технического сопровождения реализации объектов энергетики;</li>
                                            <li>организации строительства и ввода в эксплуатацию объектов в энергетике;</li>
                                            <li>оптимизации затрат предприятий на электроэнергию;</li>
                                            <li>лицензирования, получения тарифов на все виды хозяйственной деятельности в
                                                энергетике, организации работы лицензиатов с Оператором рынка и Гарантированным покупателем.</li>
                                        </ul>
                                        <p>
                                            Успех компании обусловлен комплексным подходом к решению задач в сфере
                                            энергетики и постоянным мониторингом тенденций современного рынка.
                                        </p>
                                    </div>
                                <?php elseif ($currentLocal == "uk"): ?>
                                    <div>
                                        <p>Компанія має успішний практичний досвід реалізації проєктів, зокрема
                                            спеціалізується на управлінні інвестиційними проєктами в енергетиці та
                                            промисловості в частині:</p>
                                        <ul>
                                            <li>проєктування та будівництва схем зовнішнього електропостачання або
                                                видачі потужності об'єктів споживання та генерації;</li>
                                            <li>енергоаудиту об’єктів енергетики з метою визначення комплексу необхідних
                                                заходів для подальшої реалізації проєкту;</li>
                                            <li>технічного due diligence об'єктів енергетики;</li>
                                            <li>комплексного технічного супроводження реалізації об'єктів енергетики;</li>
                                            <li>організації будівництва та введення в експлуатацію об’єктів в енергетиці;</li>
                                            <li>оптимізації витрат підприємств на електроенергію;</li>
                                            <li>ліцензування, отримання тарифів на всі види господарської діяльності в
                                                енергетиці, організації роботи ліцензіатів з Оператором ринку та Гарантованим покупцем.</li>
                                        </ul>
                                        <p>Успіх компанії обумовлений комплексним підходом до вирішення задач у сфері
                                            енергетики і постійним моніторингом тенденцій сучасного ринку.</p>

                                    </div>
                                <?php else: ?>
                                    <div>
                                        <p>The Company has a successful experience of projects implementing and specializes
                                            in managing and guiding investment projects in power energy and industry,
                                            namely:</p>
                                        <ul>
                                            <li>design and construction of external power circuits or power output of
                                                objects of consumption and generation;</li>
                                            <li>energy audits of energy facilities with the aim of identifying a set of measures necessary for the further implementation of the project;</li>
                                            <li>technical due diligence of electrical energy facilities;</li>
                                            <li>comprehensive technical support of energy facilities implementation;</li>
                                            <li>organization of construction and commissioning of facilities in the energy sector;</li>
                                            <li>optimization of business costs for electricity;</li>
                                            <li>licensing and tariffs obtaining for all types of economic activity in the
                                                energy sector, organization of the licensees work with Market operator and  Guaranteed buyer.</li>

                                        </ul>
                                        <p>The success of the company is determined by the integrated approach of solving
                                            problems in energy sector and constant monitoring of the market trends.</p>
                                    </div>
                                <?php endif; ?>
                                <img class="mob" src="/images/about_mob.png"/>
                            </div>
                        </div>
                    </div>

                    <h2 class="text-divider-double"><?php echo \frontend\helpers\SystemHelper::getText('INDEX_TITILE_TESTIMONIALS') ?></h2>
                    <div class="sep"></div>
                    <div class="row">
                        <div class="wpv-grid grid-1-1  wpv-first-level unextended animation-from-bottom animated-active testimonials--wrapper"
                             style="padding-top:0px;padding-bottom:0px"
                             id="wpv-column-1ca5f0d6aca96c0a09855f4ec9bb39db">
                            <div class="bxslider-wrapper">
                                <ul class="bxslider-container" id="review-list">

                                    <?php if ($currentLocal == "ru"): ?>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Отзыв
                                                            ООО "ТИС Эко"
                                                        </div>
                                                        ИКНЭТ было проведено энергетическое обследование
                                                        (энергоаудит) Проекта для эффективной работы "ТИС
                                                        Эко" на Оптовом рынке (ОРЭ) на правах
                                                        лицензированного производителя, осуществляя продажу
                                                        электроэнергии по "зелёному" тарифу.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор Т.Н. Клименко</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Отзыв
                                                            ООО "ЛНК"
                                                        </div>
                                                        Инжиниринговая Компания Новые Энергетические
                                                        Технологии приняла активное участие в реализации
                                                        проекта "Строительство комплексного инженерного
                                                        сооружения с системой сбора биогаза полигона твёрдых
                                                        бытовых отходов для производства электроэнергии,
                                                        расположенной в административных границах
                                                        Подгорского сельского совета Обуховского района
                                                        Киевской области полигон № 5 ТБО".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор В.Е. Баннов</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Отзыв
                                                            ООО "ЭКОТЕХНИК УКРАИНА"
                                                        </div>
                                                        В соответствие с заключенным договором,
                                                        специалистами ООО "Инжиниринговая Компания Новые
                                                        Энергетические Технологии" была выполнена работа
                                                        "Технико-экономическое обоснование схемы выдачи
                                                        мощности СЭС "Богуслав" мощностью 42 МВт в
                                                        Богуславском районе Киевской области".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор Ю.П. Дячук</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Отзыв
                                                            ООО "Триумф"
                                                        </div>
                                                        ООО "Инжиниринговая Компания Новые Энергетические
                                                        Технологии" в рамках этого
                                                        проекта выполняла работы по сооружению схемы
                                                        внешнего электроснабжения АПК.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор В. П. Литвин</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Отзыв
                                                            ООО "Энергия"
                                                        </div>
                                                        ООО "Инжиниринговая Компания Новые Энергетические Технологии" в
                                                        рамках договора с ООО "Энергия", выполнило передпроектную работу
                                                        "Технико-экономическое обоснование схемы выдачи мощности
                                                        солнечной электростанции вблизи ПС 110/35/10 кВ "Орион" в
                                                        Шполянском районе Черкасской области".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>И.о. директора ООО "Энергия" Моисеев А.Н.</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Отзыв
                                                            ООО "САНЛАЙН СТ"
                                                        </div>
                                                        Вблизи пгт. Верхнячка Христиновского района
                                                        Черкасской области ООО "САНЛАЙН СТ" запланировано
                                                        сооружение фотоэлектрической станции мощностью 7 МВт
                                                        "Верхняцкая ФЭС".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор Ю.Л. Гнатюк</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Отзыв
                                                            ООО "Энергия"
                                                        </div>
                                                        По заказу ООО "Энергия", специалистами ООО "ИКНЭТ"
                                                        разработана бизнес-модель проекта сооружения
                                                        солнечной электростанции мощностью (СЭС) 10 МВт в
                                                        Черкасской области.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор И.А. Сирман</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                    <?php elseif ($currentLocal == "uk"): ?>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Відгук ТОВ "ТІС Еко"</div>
                                                        ІКНЕТ було проведено енергетичне обстеження (енергоаудит)
                                                        Проєкту для ефективної роботи "ТІС Еко" на Оптовому ринку (ОРЕ)
                                                        на правах ліцензованого виробника, здійснюючи продаж
                                                        електроенергії за "зеленим" тарифом.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор Т.Н. Кліменко</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Відгук ТОВ "ЛНК"</div>
                                                        Інжинірингова Компанія Нові Енергетичні Технології взяла активну
                                                        участь в реалізації проєкту "Будівництво комплексної інженерної
                                                        споруди з системою збору біогазу полігону твердих побутових
                                                        відходів для виробництва електроенергії, розташованої в
                                                        адміністративних межах Подгорського сільської ради Обухівського
                                                        району Київської області полігон № 5 ТПВ".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор В.Є. Баннов</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Відгук ТОВ "ЕКОТЕХНІК УКРАЇНА"</div>
                                                        У відповідності до укладеного договору, фахівцями ТОВ
                                                        "Інжинірингова Компанія Нові Енергетичні Технології" була
                                                        виконана робота "Техніко-економічне обґрунтування схеми видачі
                                                        потужності СЕС "Богуслав" потужністю 42 МВт в Богуславському
                                                        районі Київської області".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор Ю.П. Дячук</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Відгук ТОВ "Тріумф"</div>
                                                        ТОВ "Інжинірингова Компанія Нові Енергетичні Технології" в
                                                        рамках цього проєкту виконувала роботи зі спорудження схеми
                                                        зовнішнього електропостачання АПК.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор В.П. Литвин</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Відгук ТОВ "Енергія"</div>
                                                        ТОВ "Інжинірингова Компанія Нові Енергетичні Технології" в
                                                        рамках договору з ТОВ "Енергія", виконало передпроєктні роботи
                                                        "Техніко-економічне обґрунтування схеми видачі потужності
                                                        сонячної електростанції поблизу ПС 110/35/10 кВ "Оріон" в
                                                        Шполянському районі Черкаської області".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>В.о. директора ТОВ "Енергія" О.М. Моісеєв </span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Відгук ТОВ "САНЛАЙН СТ"</div>
                                                        Поблизу смт. Верхнячка Христинівського району Черкаської області
                                                        ТОВ "САНЛАЙН СТ" заплановано спорудження фотоелектричної станції
                                                        потужністю 7 МВт "Верхняцький ФЕС".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор Ю.Л. Гнатюк</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Відгук ТОВ "Енергія"</div>
                                                        На замовлення ТОВ "Енергія", фахівцями ТОВ "ІКНЕТ" розроблена
                                                        бізнес-модель проєкту спорудження сонячної електростанції
                                                        потужністю 10 МВт в Черкаській області.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Директор І.А. Сірман</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                    <?php else: ?>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Letter of Reference "TIS Eco, LLC"</div>
                                                        IKNET executed power energy inspection (energy audit) of the
                                                        Project for ensuring the effective work of "TIS Eco, LLC" at the
                                                        Wholesale Electricity Market (WEM) as the licensed producer,
                                                        which carries out sale of power energy by "green" tariff.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Director T.N. Klimenko</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Letter of Reference, "LNK, LLC"</div>
                                                        New Energy Technologies Engineering Company actively
                                                        participated in realization of the Project "Construction of
                                                        engineering complex with installed system of biogas collection
                                                        for production of electricity located within administrative
                                                        limits of Pidgirtsi Village Administration of Obukhov district,
                                                        Kyiv region. SDW landfill No. 5".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Director V.E. Bannov</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Letter of Reference, "ECOTECHNIC UKRAINE, LLC"</div>
                                                        In accordance with the signed agreement, the specialists of
                                                        Engineering company New Energy Technologies executed the work
                                                        "Feasibility Study of SPP "Boguslav" power scheme with capacity
                                                        42 MW in Boguslavsky district of Kiev region".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Director Y.P. Dyachuk</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">etter of Reference,
                                                            "TRIUMPH, LLC"
                                                        </div>
                                                        Engineering company New Energy Technologies" within the
                                                        framework of this project, executed works on the construction of
                                                        the external power supply circuit of the Agroindustrial complex.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Director V.P. Litvin</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Letter of Reference, "Energia, LLC"
                                                        </div>
                                                        Engineering company New Energy Technologies under the contract
                                                        with "Energia LLC", performed pre-design work "Feasibility study
                                                        of the scheme of issue of solar power capacity near 110/35/10 kV
                                                        "Orion" Cherkasy region in Shpolyanskaya district".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Acting as Director of "Energia LLC" A.N. Moiseev</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Letter of Reference, "SUNLINE ST, LLC"</div>
                                                        Near the village Verkhniachka Khrystynivka district of Cherkasy
                                                        region "SUNLINE ST LLC" is planned construction of photovoltaic
                                                        power plant with capacity of 7 MW "Verhnyatskaya FPP".
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Director Y.L. Gnatyuk</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote class='clearfix small simple'>
                                                <div class='quote-text'>
                                                    <div class="quote-content">
                                                        <div class="vamtam-font-style-1 with-color">Letter of Reference, "Energia, LLC"</div>
                                                        By request of "Energia LLC", specialists of "IKNET LLC"
                                                        developed the business model of the project construction of the
                                                        solar power plant (SPP) with capacity 10 MW in the Cherkasy
                                                        region.
                                                        <div><a href="/<?= $currentLocal ?>/references"><span
                                                                        class="vamtam-font-style-2 accent-1"><?php echo \frontend\helpers\SystemHelper::getText('FOOTER_ABOUT_MORE') ?></span><span
                                                                        class="accent-1"> → </span></a>
                                                        </div>
                                                        <div class="only-title"><strong class='quote-title'><span
                                                                        class='the-title'>Director I.A. Sirman</span></strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </li>
                                    <?php endif; ?>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div> <!-- .limit-wrapper -->
                <?php // include "footer-anim.php" ?>
            </div><!-- / #main (do not remove this comment) -->
        </div><!-- #main-content -->
    </div><!-- / .pane-wrapper -->
</div><!-- / .boxed-layout -->