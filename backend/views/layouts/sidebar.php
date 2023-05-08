<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
        <img src="/favicon.ico" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">Iknet</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->


        <!-- SidebarSearch Form -->
        <!-- href be escaped -->
        <div class="form-inline">
<!--            <div class="input-group" data-widget="sidebar-search">-->
<!--                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">-->
<!--                <div class="input-group-append">-->
<!--                    <button class="btn btn-sidebar">-->
<!--                        <i class="fas fa-search fa-fw"></i>-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <?php
            echo \hail812\adminlte\widgets\Menu::widget([
                'items' => [

                    ['label' => 'Меню', 'url' => ['menu/index'], 'icon' => 'ellipsis-v'],

                    [
                        'label' => 'Катеорії', 'icon' => 'bars',
                        'items' => [
                            ['label' => 'Категорії новин', 'url' => ['news-category/index'],'icon' => 'list'],
                            ['label' => 'Категорії проєктів', 'url' => ['project-category/index'],'icon' => 'list']
                        ]

                    ],
                    ['label' => 'Новини', 'url' => ['news/index'], 'icon' => 'file-alt'],

                    ['label' => 'Проєкти', 'url' => ['projects/index'], 'icon' => 'edit'],

                    ['label' => 'Сторінки', 'url' => ['page/index'], 'icon' => 'file-alt'],


                    [
                        'label' => 'Подарунки енергетикам', 'icon' => 'gift',
                        'items' => [
                            ['label' => 'Ред. сторінки', 'url' => ['presents-energy/index', 'category_id' => 13],'icon' => 'edit'],
                            ['label' => 'Подарунки', 'url' => ['presents-energy-list/index'],'icon' => 'list']
                        ]
                    ],
                    [
                        'label' => 'Вакансії', 'icon' => 'chart-line',
                        'items' => [
                            ['label' => 'Ред. сторінки', 'url' => ['page-career/index'],'icon' => 'edit'],
                            ['label' => 'Список вакансій', 'url' => ['vcancies/index'],'icon' => 'list']
                        ]
                    ],
                    [
                        'label' => 'Компанія', 'icon' => 'chart-line',
                        'items' => [
                            ['label' => 'Клієнты', 'url' => ['clients-brand/index'], 'icon' => 'copyright'],
                            ['label' => 'Відгуки', 'url' => ['reviews/index'], 'icon' => 'list'],
                            ['label' => 'Про компанію', 'url' => ['about/index'], 'icon' => 'list'],
                            ['label' => 'Контакти', 'url' => ['contacts/index'], 'icon' => 'list'],
                        ]
                    ],
                    [
                        'label' => 'Головна сторінка', 'icon' => 'bars',
                        'items' => [
                            ['label' => 'Експерт в реалізації проєктів', 'url' => ['reclaimed/index'], 'icon' => 'list'],
                            ['label' => 'Список секцій', 'url' => ['home-section/index'],'icon' => 'list'],
                            ['label' => 'Таби головної сторінки', 'url' => ['home-tabs/index'], 'icon' => 'list'],
                        ]
                    ],
                ],
            ]);
            ?>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>