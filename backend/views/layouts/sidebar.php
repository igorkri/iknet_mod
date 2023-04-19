<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="<?=$assetDir?>/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">Iknet</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->


        <!-- SidebarSearch Form -->
        <!-- href be escaped -->
        <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                    <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <?php
            echo \hail812\adminlte\widgets\Menu::widget([
                'items' => [
//                    [
//                        'label' => 'Новости',
//                        'icon' => 'tachometer-alt',
////                        'badge' => '<span class="right badge badge-info">2</span>',
//                        'items' => [
//                            ['label' => 'Все новости', 'url' => ['news/index'], 'iconStyle' => 'far'],
//                        ]
//                    ],

                    ['label' => 'Меню', 'url' => ['menu/index'], 'icon' => 'ellipsis-v'],
                    ['label' => 'Категории', 'url' => ['category/index'], 'icon' => 'bars'],
                    ['label' => 'Новости', 'url' => ['news/index'], 'icon' => 'newspaper'],
                    ['label' => 'Проекти', 'url' => ['project/index'], 'icon' => 'project-diagram'],
                    ['label' => 'Цены и тарифы', 'url' => ['price/index'], 'icon' => 'barcode'],
                    ['label' => 'Страницы', 'url' => ['page/index'], 'icon' => 'file-alt'],
                    ['label' => 'Подарки енергетикам', 'url' => ['presents-energy-list/index'], 'icon' => 'gift'],
                    [
                        'label' => 'Вакансии', 'icon' => 'chart-line',
                        'items' => [
                            ['label' => 'Ред. страницы', 'url' => ['career/index'],'icon' => 'edit'],
                            ['label' => 'Список вакансий', 'url' => ['career/index'],'icon' => 'list']
                        ]
                    ],
                    ['label' => 'Клиенты', 'url' => ['clients-brand/index'], 'icon' => 'copyright'],
//                    ['label' => 'Gii',  'icon' => 'file-code', 'url' => ['/gii'], 'target' => '_blank'],
//                    ['label' => 'Level1'],
//                    [
//                        'label' => 'Level1',
//                        'items' => [
//                            ['label' => 'Level2', 'iconStyle' => 'far'],
//                            [
//                                'label' => 'Level2',
//                                'iconStyle' => 'far',
//                                'items' => [
//                                    ['label' => 'Level3', 'iconStyle' => 'far', 'icon' => 'dot-circle'],
//                                    ['label' => 'Level3', 'iconStyle' => 'far', 'icon' => 'dot-circle'],
//                                    ['label' => 'Level3', 'iconStyle' => 'far', 'icon' => 'dot-circle']
//                                ]
//                            ],
//                            ['label' => 'Level2', 'iconStyle' => 'far']
//                        ]
//                    ],
//                    ['label' => 'Level1'],
//                    ['label' => 'LABELS', 'header' => true],
//                    ['label' => 'Important', 'iconStyle' => 'far', 'iconClassAdded' => 'text-danger'],
//                    ['label' => 'Warning', 'iconClass' => 'nav-icon far fa-circle text-warning'],
//                    ['label' => 'Informational', 'iconStyle' => 'far', 'iconClassAdded' => 'text-info'],
                ],
            ]);
            ?>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>