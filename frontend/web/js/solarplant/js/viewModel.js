var geoRegionsLocal = {};


geoRegionsLocal['ru'] = [
    ["Винницкая",           1093],
    ["Волынская",           979],
    ["Днепропетровская",    1017],
    ["Донецкая",            1036],
    ["Житомирская",         1083],
    ["Закарпатская ",       979.01],
    ["Запророжская",        1026],
    ["Ивано-Франсковская",  988],
    ["Киевская",            1074],
    ["Кировоградская",      1064],
    ["Лугаснкая",           1036.1],
    ["Львовская",           913],
    ["Николаевская",        1064.01],
    ["Одесская",            1093.01],
    ["Полтавкая",           1007],
    ["Ровенская",           1017.01],
    ["Сумская",             998],
    ["Тернопольская",       988.01],
    ["Харьковская",         1020],
    ["Херсонская",          969],
    ["Хмельницкая",         1074.01],
    ["Черкасская",          1064.001],
    ["Черниговская",        1074.001],
    ["Черновицкая",         1074.0001],
    ["АР Крым",             1178],
];

geoRegionsLocal['uk'] = [
    ["Вінницька",           1093],
    ["Волинська",           979],
    ["Дніпропетровська",    1017],
    ["Донецька",            1036],
    ["Житомирська",         1083],
    ["Закарпатська",       979.01],
    ["Запорізька",        1026],
    ["Івано-Франківська",  988],
    ["Київська",            1074],
    ["Кіровоградська",      1064],
    ["Луганська",           1036.1],
    ["Львівська",           913],
    ["Миколаївська",        1064.01],
    ["Одеська",            1093.01],
    ["Полтавська",           1007],
    ["Рівненська",           1017.01],
    ["Сумська",             998],
    ["Тернопільська",       988.01],
    ["Харківська",         1020],
    ["Херсонська",          969],
    ["Хмельницька",         1074.01],
    ["Черкаська",          1064.001],
    ["Чернігівська",        1074.001],
    ["Чернівецька",         1074.0001],
    ["АР Крим",             1178],
];


geoRegionsLocal['en'] = [
    ["Vinnytsya Region",           1093],
    ["Volyn Region",           979],
    ["Dnipropetrovsk Region",    1017],
    ["Donetsk Region",            1036],
    ["Zhytomyr Region",         1083],
    ["Zakarpattya Region",       979.01],
    ["Zaporizhia Region",        1026],
    ["Ivano-Frankivsk Region",  988],
    ["Kiev Region",            1074],
    ["Kirovohrad Region",      1064],
    ["Luhansk Region",           1036.1],
    ["Lviv Region",           913],
    ["Mykolayiv Region",        1064.01],
    ["Odessa Region",            1093.01],
    ["Poltava Region",           1007],
    ["Rivne Region",           1017.01],
    ["Sumy Region",             998],
    ["Ternopil Region",       988.01],
    ["Kharkiv Region",         1020],
    ["Kherson Region",          969],
    ["Khmelnytskyi Region",         1074.01],
    ["Cherkasy Region",          1064.001],
    ["Chernihiv Region",        1074.001],
    ["Chernivtsi Region",         1074.0001],
    ["AR of Crimea",             1178],
];


geoRegions = geoRegionsLocal[currentLocal];
srvcMin = 50;
srvcMax = 10000;

onePanelCost = 211.2;

//euroCurrency = 24.151;
euroCurrency = parseFloat($('#currency').html());
var greenTariff = {
    'private': parseFloat($('#private-green-tariff').text()),
    'company': parseFloat($('#company-green-tariff').text())
};

allInvertorsCosts = [
    [1,1206],
    [5,2132],
    [10,3263],
    [20,6005],
    [30,6796],
    [100,23651],
    [500,114741],
    [1000,222565],
    [5000,1017947],
    [10000,1781408]
];

organizationSesProjectTarif = [
    //[kTw, услуги, сложность?] // это для строки 11, Проект СЭС для организаций
    [30, 0.3, 0.3],
    [100,0.138,0.3],
    [500, 0.088, 0.3],
    [1000, 0.063, 0.6],
    [5000, 0.048, 0.6],
    [10000, 0.04, 0.6]
];

organizationSesAudit = [
    //[kTw, услуги, сложность?] // это для строки 12, Аудит СЭС, тут тоже что и для организаций, только другой % сложности
    [30, 0.3, 0.1],
    [100,0.138,0.1],
    [500, 0.088, 0.1],
    [1000, 0.063, 0.1],
    [5000, 0.048, 0.1],
    [10000, 0.04, 0.1]
];

organizationProjectSupport = [
    //[kTw, услуги, сложность?] // это для строки 13, Комплексное сопровождение, тут тоже что и для организаций, только другой % сложности
    [30, 0.3, 0.6],
    [100,0.138,0.6],
    [500, 0.088, 0.6],
    [1000, 0.063, 0.3],
    [5000, 0.048, 0.3],
    [10000, 0.04, 0.3]
];

var formInputsLocal = {};

formInputsLocal['ru'] = [
    {
        'name' : 'Name',
        'label' : 'ФИО',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Post',
        'label' : 'Должность',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Company',
        'label' : 'Компания',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Tel',
        'label' : 'Тел',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Company Address',
        'label' : 'Адрес компании',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'E-mail',
        'label' : 'E-mail',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Company website',
        'label' : 'Сайт компании',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Field-of-activity',
        'label' : 'Сфера деятельности',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Address-of-the-building',
        'label' : 'Адрес здания для крышевой СЭС',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Roof-square',
        'label' : 'Площадь крыши (кв. м)',
        'required' : false,
        'value' : ''
    },
];

formInputsLocal['uk'] = [
    {
        'name' : 'Name',
        'label' : 'ПІБ',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Post',
        'label' : 'Посада',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Company',
        'label' : 'Компанія',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Tel',
        'label' : 'Тел',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Company Address',
        'label' : 'Адреса компанії',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'E-mail',
        'label' : 'E-mail',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Company website',
        'label' : 'Сайт компанії',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Field-of-activity',
        'label' : 'Сфера діяльності',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Address-of-the-building',
        'label' : 'Адреса будівлі для дахової СЕС',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Roof-square',
        'label' : 'Площа даху (кв. м)',
        'required' : false,
        'value' : ''
    },
];

formInputsLocal['en'] = [
    {
        'name' : 'Name',
        'label' : 'Full Name',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Post',
        'label' : 'Position',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Company',
        'label' : 'Company',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Tel',
        'label' : 'Tel',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Company Address',
        'label' : 'Company Address',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'E-mail',
        'label' : 'E-mail',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Company website',
        'label' : 'Company site',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Field-of-activity',
        'label' : 'Sphere of activity',
        'required' : false,
        'value' : ''
    },
    {
        'name' : 'Address-of-the-building',
        'label' : 'Address building for solar plant',
        'required' : true,
        'value' : ''
    },
    {
        'name' : 'Roof-square',
        'label' : 'Roof area (sq. m)',
        'required' : false,
        'value' : ''
    },
];

formInputs = formInputsLocal[currentLocal];

var anketaQuestionsLocal = {};
anketaQuestionsLocal['ru'] = [
    'Все нижеперечисленные',
    'Определение технической возможности присоединения объекта к электросетям (анализ существующей документации, разработка технико-экономического расчета или технико-экономического обоснования)',
    'Заключение договора аренды помещения (крыши) или приобретение в собственность',
    'Получение технических условий на присоединение крышевой СЭС к электросетям',
    'Получение разрешений на проектирование, технические условия или техническое задание (экология, пожарная безопасность и т.д.)',
    'Разработка и согласование проекта строительства крышевой СЭС',
    'Разработка и согласование проекта присоединения крышевой СЭС к электросетям',
    'Получение положительных выводов по проекту в экспертных учреждениях',
    'Получение разрешения на начало строительно-монтажных работ',
    'Оформление заказа на поставку оборудования',
    'Выполнение строительно-монтажных и пуско-наладочных работ',
    'Получение разрешения на ввод крышевой СЭС в эксплуатацию',
    'Получение лицензии на производство электрической энергии',
    'Утверждение "зеленого" тарифа на электрическую энергию для крышевой СЭС',
    'Осуществление комплекса мероприятий для работы на Оптовом рынке электроэнергии и заключение договора покупки-продажи электроэнергии с ГП "Энергорынок"',
];

anketaQuestionsLocal['uk'] = [
    'Всі перелічені нижче',
    'Визначення технічної можливості приєднання об`єкта до електромереж (аналіз існуючої документації, розробка техніко-економічного розрахунку або техніко-економічного обґрунтування)',
    'Укладення договору оренди приміщення (даху) або придбання у власність',
    'Отримання технічних умов на приєднання дахової СЕС до електричних мереж',
    'Отримання дозволів на проектування, технічні умови або технічне завдання (екологія, пожежна безпека і т.д.)',
    'Розробка та погодження проекту будівництва дахової СЕС',
    'Розробка та погодження проекту приєднання дахової СЕС до електричних мереж',
    'Отримання позитивних висновків по проекту в експертних установах',
    'Отримання дозволу на початок будівельно-монтажних робіт',
    'Оформлення замовлення на поставку обладнання',
    'Виконання будівельно-монтажних та пусконалагоджувальних робіт',
    'Отримання дозволу на введення дахової СЕС в експлуатацію',
    'Отримання ліцензії на виробництво електричної енергії',
    'Затвердження "зеленого" тарифу на електричну енергію для дахової СЕС',
    'Здійснення комплексу заходів для роботи на Оптовому ринку електроенергії та укладення договору купівлі-продажу електроенергії з ДП "Енергоринок"',
];

anketaQuestionsLocal['en'] = [
    'All listed below',
    'Definition of the object technical possibility connection to power grids (analysis of the existing documents, development feasibility calculation or feasibility study)',
    'The conclusion of a lease agreement premises (roof) or acquisition in ownership',
    'Obtaining technical conditions for the accession the solar power plant to power grids ',
    'Obtaining permits for the design, technical terms or technical assignment',
    'Project development and approval of the solar power plant building ',
    'Project development and approval for the solar power plant connection to power grids',
    'Obtaining project positive conclusions in expert institutions',
    'Obtaining permission for construction and installation works',
    'Order execution for the equipment supply',
    'Performance of construction, installation and commissioning works',
    'Obtaining a permit for solar power plant implementation',
    'Obtaining a license for electricity generation',
    'Green tariff approval for the solar power plant',
    'Implementation of measures for work on the Wholesale Electricity Market (WEM) and contract conclusion with SE Energorynok  for electricity purchasing and sale',
];

anketaQuestions = anketaQuestionsLocal[currentLocal];

function calculateHardwareCost(capacity){
    var panelCount = Math.ceil( capacity * 4 ); //4 панели на 1 кВт
    var panelCost  = onePanelCost * euroCurrency * panelCount;
    var invertorCost = middleCostCalculate(capacity, allInvertorsCosts) * euroCurrency;

    var result = (panelCost + invertorCost) * 1.2;
    return parseInt(result);
}

function middleCostCalculate(sesCapacity,tarifsArr){

    for(var i = 0; i < (tarifsArr.length -1); i++){

        var currentTarif = {'capacity':tarifsArr[i][0], 'tarif':tarifsArr[i][1]};
        var nextTarif    = {'capacity':tarifsArr[i+1][0], 'tarif':tarifsArr[i+1][1]};

        if(i === tarifsArr.length -2 && sesCapacity >= nextTarif['capacity']){  //если требуется более, чем в самом дорогом тарифе
            return nextTarif['tarif'];
        }

        if(i === 0 && sesCapacity <= currentTarif['capacity']){ //если требуется менее, чем в самом дешевом тарифе
            return currentTarif['tarif'];
        }

        if (sesCapacity === currentTarif['capacity']){  return currentTarif['tarif']; }
        if (sesCapacity === nextTarif['capacity']){     return nextTarif['tarif'];    }

        if (sesCapacity > currentTarif['capacity'] && sesCapacity < nextTarif['capacity']){
            var coefficient = (sesCapacity - currentTarif['capacity']) / (nextTarif['capacity'] - currentTarif['capacity']);
        }

        if (coefficient){
            return ((nextTarif['tarif'] - currentTarif['tarif']) * 0.4) + currentTarif['tarif'] ;
        }
    }
}

GeoRegion = function(name, koef) {
    this.name = name;
    this.koef = koef;
};

function ViewModel()
{
    var self = this;

    self.sesType = ko.observable();

    self.value_changed = function(){
        if(self.sesType() === 'private_person'){
            $("#slider").slider({ min: 14, max: 420, step: 3})
        } else {
            $("#slider").slider({ min: 420, max: 140000, step: 10})
        }
    }
    self.square = ko.observable();

    self.geography = ko.observableArray([]);
    for (var i = 0; i < geoRegions.length; i++) {
        self.geography.push(new GeoRegion(geoRegions[i][0], geoRegions[i][1]));
    }

    self.solarEfficiency = ko.observable(false);

    self.capacity = ko.computed(function(){
        if (self.square() && self.solarEfficiency()) {
            var result = parseFloat(parseInt(self.square()) / 14).toFixed(2);

            return (!result) ? '-' : result ;
        } else {
            return '-';
        }
    });

    self.srvcHardwareCost = ko.computed(function(){
        return calculateHardwareCost( parseFloat(self.capacity()) )
    });

    self.srvcDesignInstallCost = ko.computed(function(){
        if (self.sesType() === 'private_person'){
            return parseInt(self.srvcHardwareCost() * 0.25);
        } else {
            return parseInt(self.srvcHardwareCost() * 0.2);
        }
    });

    self.srvcProjectSESCost = ko.computed(function(){
        if (self.sesType() === 'private_person') {
            return parseInt(self.srvcHardwareCost() * 0.05);
        } else {
            var coefs = middleCostDifCapacityCalculate(self.capacity(), organizationSesProjectTarif);
            return parseInt( ((self.srvcHardwareCost() + self.srvcDesignInstallCost()) * coefs[0]) * coefs[1]);
        }
    });

    function middleCostDifCapacityCalculate(sesCapacity, tarifsArr){
        sesCapacity = parseFloat(sesCapacity);
        for(var i = 0; i < (tarifsArr.length -1); i++){

            var currentTarif = {'capacity':tarifsArr[i][0],   'service':tarifsArr[i][1]  ,'complexity':tarifsArr[i][2]  };
            var nextTarif    = {'capacity':tarifsArr[i+1][0], 'service':tarifsArr[i+1][1],'complexity':tarifsArr[i+1][2]};

            if(i === tarifsArr.length -2 && sesCapacity >= nextTarif['capacity']){  //если требуется более, чем в самом дорогом тарифе
                return [nextTarif['service'], nextTarif['complexity']];
            }

            if(i === 0 && sesCapacity <= currentTarif['capacity']){ //если требуется менее, чем в самом дешевом тарифе
                return [currentTarif['service'], currentTarif['complexity']];
            }

            if (sesCapacity === currentTarif['capacity']){  return [currentTarif['service'], currentTarif['complexity']]; }
            if (sesCapacity === nextTarif['capacity']){     return [nextTarif['service'],    nextTarif['complexity']];   }

            if (sesCapacity > currentTarif['capacity'] && sesCapacity < nextTarif['capacity']){
                var serviceCoef    = (sesCapacity - currentTarif['capacity']) / (nextTarif['capacity'] - currentTarif['capacity']);
                serviceCoef = ((nextTarif['service'] - currentTarif['service']) * serviceCoef) + currentTarif['service'];
                var complexityCoef = (sesCapacity - currentTarif['capacity']) / (nextTarif['capacity'] - currentTarif['capacity']);
                complexityCoef = ((nextTarif['complexity'] - currentTarif['complexity']) * complexityCoef) + currentTarif['complexity'];
                return [serviceCoef, complexityCoef];
            }
        }

        return [0,0];
    }

    self.srvcAudit = ko.computed(function(){
        if (self.sesType() === 'private_person') {
            return parseInt(self.srvcHardwareCost() * 0.02);
        } else {
            var coefs = middleCostDifCapacityCalculate(self.capacity(), organizationSesAudit);
            return parseInt( ((self.srvcHardwareCost() + self.srvcDesignInstallCost()) * coefs[0]) * coefs[1]);
        }
    });

    self.srvcCompSupportCost = ko.computed(function(){
        if (self.sesType() === 'private_person') {
            return parseInt(self.srvcHardwareCost() * 0.05);
        } else {
            var coefs = middleCostDifCapacityCalculate(self.capacity(), organizationProjectSupport);
            return parseInt( ((self.srvcHardwareCost() + self.srvcDesignInstallCost()) * coefs[0]) * coefs[1]);
        }
    });

    self.srvcTotalCost = ko.computed(function(){
        var total = parseInt(
            self.srvcHardwareCost() +
            self.srvcDesignInstallCost() +
            self.srvcProjectSESCost() +
            self.srvcAudit() +
            self.srvcCompSupportCost());
        return (!total) ? '-' : total ;
    });

    self.incGreenTariff = ko.computed(function(){
        if (self.sesType() === 'private_person') {
            // return 5.74;
            return greenTariff['private'];
        } else {
            // return 5.42;
            return greenTariff['company'];
        }
    });

    self.incTimedCapacity = ko.computed(function(){
        var result = parseFloat(( self.solarEfficiency() ) * self.capacity() );
        return (!result) ? '-' : result.toFixed(2) ;
    });

    self.incTimedAmount = ko.computed(function(){
        var result = parseFloat( self.incGreenTariff() *  self.incTimedCapacity() / 1.18);
        return (!result) ? '-' : result.toFixed(2) ;
    });

    self.incYearedProfit = ko.computed(function(){
        var result = parseFloat( self.srvcTotalCost() / self.incTimedAmount() );
        return (!result) ? '-' : result.toFixed(1) ;
    });


    self.srvcDetailsEnabled = ko.observable(false);
    self.enableSrvcDetails = function()
    {
        if (self.srvcDetailsEnabled()) {
            self.srvcDetailsEnabled(false);
        } else {
            if (parseFloat(self.capacity()) >= 0.999) {
                self.srvcDetailsEnabled(true);
            }
        }
    }

    /*<!--form-->*/
    self.formEnabled = ko.observable(false);
    self.enableForm = function()
    {
        self.formEnabled(true);
        $("html, body").animate({ scrollTop: 0 }, 600);
    }
    self.disableForm = function()
    {
        self.formEnabled(false);
    }
    self.formCheckboxEnabled = ko.observable(false);
    self.enableFormCheckbox = function()
    {
        if (self.formCheckboxEnabled()) {
            self.formCheckboxEnabled(false);
        } else {
            self.formCheckboxEnabled(true);
        }
    }

    self.submitForm = function()
    {
        var data = [];
        $.each(self.formInputs(), function(index, value) {
            data.push({'name' : value.name, 'value' : value.value});
        });
        var questions = [];
        $('#anketaQuestions > label > input:checked').each(function(index, element){
            var title = $(element).parent().children('span').html();
            questions.push(title);
        });
        if (questions.length) {
            data.push({'anketaQuestions' : questions});
        }
        //console.log(data);
        var sendObject = {
            'action': "solarPPCalcFormSubmit",
            'arguments': data,
        };
        $.post("/ajax/", sendObject, function(response){
            if (response.success == true) {
                self.disableForm();
                $("html, body").animate({ scrollTop: 0 }, 600);
                $("#message").show();
                setTimeout(function () {
                    $("#message").hide();
                }, 10000);
            }
        }, 'json');
    }

    self.formInputs = ko.observableArray(formInputs);
    self.anketaQuestions = ko.observableArray(anketaQuestions);
/*<!--/form-->*/

}

ko.applyBindings(new ViewModel());

$(function(){
    $(".square").focus();
    $('form input[type="text"]').each(function(index, element) {
        if ($(element).attr('req') == 'required') {
            $(element).attr('required', true);
        }
    });
    $('#anketaQuestions > label:first-child > input').click(function(){
        $('#anketaQuestions > label > input').each(function(index, element){
            if (index != 0) {
                $(this).click();
            }
        });
    });
});

