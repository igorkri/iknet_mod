/**
 * Created by indiwine on 28.10.2015.
 */

var reviewInst = null;
var roomStack = {};
var inst  = null;


$(document).on('closed', '.remodal', function (e) {
    booking.clearFormAndData();
});

$(document).ready(function(){
    inst = $('#book-modal--wrapper').remodal({
        hashTracking: false,
        closeOnOutsideClick: true,
        closeOnEscape: true
    });
    //nbarinst = new Nanobar({
    //    bg: "#d7620b",
    //    id: "xhr-progress-bar"
    //});

    initEmaClasses();
    timeAndPrices();
    booking();
    humanValidation();

    $(".phone--input").mask("+380 (99) 99-99-999");

    $("#form-send--btn").click(function(e){
        e.preventDefault();

    });
    checkSize();
    $(window).resize(checkSize);
    $("#navabar-resp-icon").click(function(e) {
        swichMobileMenu();
    });
    $("#navbar>ul>li, .book-btn").each(function(){
        $(this).hover(function(e){
            animateButton(e);
        });
    });
    $(".previous-page--btn").click(function(e){
        e.preventDefault();
        history.back();
    });
    reviews();
    $('input[data-isnamonly="true"]').each(function(index, element) {
        $(this).keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });
});

function initEmaClasses(){
    ajaxObjectFactory("QuestRooms", false);
    EMA.QuestRooms.objPromise.done(function(){
        var promise = EMA.QuestRooms.getList("");
        promise.done(function(data){
            roomStack = $.parseJSON(data);
            appendRooms(roomStack);
            booking.appendList(roomStack);
            //booking.selectRoom(0);
        });
    });
    ajaxObjectFactory("Reviews",false);
    EMA.Reviews.objPromise.done(function(){
        var promise = EMA.Reviews.getList("");
        promise.done(function(data){
            reviews.allReviews = $.parseJSON(data);
            reviews.drawReview(0);
        });
    });
}


function reviews(){
    reviews.allReviews = {};
    reviews.currentSatckIndex = 0;
    $("#review--left-btn").click(function(){
        reviews.switch(true);
    });
    $("#review--right-btn").click(function(){
        reviews.switch(false);
    });
}
reviews.drawReview = function(index){
    htmlGen = function(data){
        var html = "\
        <p>"+data.review+"</p>\
        <p class=\"reviewers-name\">"+data.name+"<span>"+data.position+"</span></p>";
        return html;
    };
    var reviewObject = reviews.allReviews[index];
    if(typeof reviewObject === "object"){
        var html = htmlGen(reviewObject);
        $("#reviews-wrapper").find("p").animate({opacity: 0}, 200, function(){
            var reviewsWrapper = $("#reviews-wrapper");
            reviewsWrapper.find("p").remove();
            reviewsWrapper.find("div").append(html).animate({opacity:1}, 200);
        });
        reviews.currentSatckIndex = index;
    }
};
reviews.switch = function(backward){
    if(backward === undefined){
        backward = false;
    }
    var indexSwithTo;
    if(backward === true){
        indexSwithTo = reviews.currentSatckIndex - 1;
    }else{
        indexSwithTo = reviews.currentSatckIndex + 1;
    }
    if(indexSwithTo > (reviews.allReviews.length - 1)){
        indexSwithTo = 0;
    }else if(indexSwithTo < 0){
        indexSwithTo = reviews.allReviews.length - 1;
    }
    reviews.drawReview(indexSwithTo)
};


function bookBtnAnimation(){
    $("#rooms-list .active-room").each(function(){
        $(this).hover(function(e){
            animateButton(e);
        });
    });
}







function animateButton(e){
    if(e.type === "mouseenter"){
        $(e.target).animate({
                backgroundPosition: "0 0"
            }
            ,{
                duration: 150,
                easing: "easeOutCirc"
            });
    }else{
        $(e.target).animate({
            backgroundPosition:"0 52px"
        },{
            duration: 150,
            easing: "easeOutCirc"
        });
    }
}
function delWeekScheduler(){
    $("#book-room-shed--wrapper>div.day-row").remove();
}

function appendRooms(data){
    if(data === undefined){
        var data = {};
    }
    var roomList = $("#rooms-list");
    roomList.find("li").remove();
    $("#book-room--selector").find("option").remove();
    $.each(data, function(index, value){
        if(value.disabled == "0"){
            var html = "<li style='opacity: 0'>\
                                <h3><a href='/room/"+value.link+"'>"+value.name+"</a></h3>\
                                <p>"+value.description+"</p>\
                                <a href=\"/room/"+value.link+"\" class=\"room-thumb\"><img src=\""+value.photos.img+"\" width=\"423\" height=\"276\"></a>\
                                <a href=\"#book-selection\" class=\"book-btn active-room\" data-id='"+value.id+"'>Забронировать</a>\
                            </li>";
        } else {
            var html = "<li style='opacity: 0'>\
                                <h3>"+value.name+"</h3>\
                                <p>"+value.description+"</p>\
                                 <a class=\"room-thumb-disabled\"><img src=\""+value.photos.img+"\" width=\"423\" height=\"276\"></a>\
                                   <a class=\"book-btn\">Комната в разработке</a>\
                            </li>";
        }

        $("#rooms-list").append(html);
        delete(html);
    });
    booking.appendBookActionOnRoom();
    bookBtnAnimation();
    var i = 0;
    roomList.find("li").each(function(){
        $(this).delay(i*200).animate({ opacity: 1}, {easing: "linear"});
        i++;
    });
}

function booking(){
    booking.monday = null;
    booking.sunday = null;
    booking.weekIndex = 0;
    booking.maxWeeksForward = 8;
    booking.bookingData = {
        "room_id": null,
        "book_date": null,
        "book_time": null,
        "name": null,
        "email": null,
        "phone": null,
        "message": ""
    };
    booking.colors = {};
    ajaxObjectFactory("RoomBooking", false);


    EMA.RoomBooking.objPromise.done(function(){
        var promise = EMA.RoomBooking.getJsStartEndOfWeek();
        var colorPromise = EMA.RoomBooking.getColorSettings();
        promise.done(function(data){
            var serverTime = jQuery.parseJSON(data);
            booking.monday = new Date(serverTime[0]);
            booking.sunday = new Date(serverTime[1]);
            booking.appendDates();
        });
        colorPromise.done(function(data){
            booking.colors = $.parseJSON(data);
        });

    });
    booking.appendActions();
};

booking.clearFormAndData = function(){
    var formInputs = $("#book-modal--wrapper").find("input, textarea");
    formInputs.val("");
    formInputs.removeClass("error").removeClass("success");
    $.each(booking.bookingData, function(index, value){
        booking.bookingData[index] = null;
    });
};

booking.switchWeeks = function(backward){
    if(backward === undefined){
        backward = false;
    }

    if(backward === false){
        if((booking.weekIndex + 1) <= booking.maxWeeksForward){
            booking.weekIndex++;
            booking.monday.setDate(booking.monday.getDate() + 7);
            booking.sunday.setDate(booking.sunday.getDate() + 7);
            timeAndPrices.getBoockingList();
            booking.appendDates();
            if(booking.weekIndex == booking.maxWeeksForward){
                $("#next-week").addClass("hide-element");
            } else {
                $("#next-week").removeClass("hide-element");
            }
            $("#prev-week").removeClass("hide-element");
        }
    } else {
        if(booking.weekIndex - 1 >= 0){
            booking.weekIndex--;
            booking.monday.setDate(booking.monday.getDate() - 7);
            booking.sunday.setDate(booking.sunday.getDate() - 7);
            timeAndPrices.getBoockingList();
            booking.appendDates();
            if(booking.weekIndex != 0){
                $("#prev-week").removeClass("hide-element");
            }else {
                $("#prev-week").addClass("hide-element");
            }
            $("#next-week").removeClass("hide-element");
        }
    }
};

booking.appendDates = function(){
    var workingDate = new Date(booking.monday.getTime());
    $("#book-room-shed--wrapper").find("div.day-row").each(function(){
        $(this).find("span.date").text(workingDate.getDate()+"."+(workingDate.getMonth()+1));
        $(this).data("timestamp", workingDate.getTime());
        workingDate.setDate(workingDate.getDate()+1);
    })
};
booking.appendList = function(data){
    $("#book-room--selector").append("<option selected disabled>Выбор комнаты</option>");
    $.each(data, function(index, value){
        if(value.disabled == "0"){
            $("#book-room--selector").append("<option value='"+value.id+"' data-stack-index='"+index+"'>"+value.name+"</option>");
        }
    });
};
booking.appendActions = function(){
    $("#book-room--selector").change(function(e){
        booking.selectRoom($(e.target).find(":selected").data("stack-index"));
        $("#book-room-info--wrapper").removeClass("hide-element");
    });
    $("#prev-week").click(function(){
        booking.switchWeeks(true);
    });
    $("#next-week").click(function(){
        booking.switchWeeks();
    });
    $("#book-modal--wrapper").find("input, textarea").on("blur", function(){
        $(this).removeClass("error").removeClass("success");
    });
    $("#send-booking--btn").click(function(e){
        e.preventDefault();
        if(booking.validateForm() === true){
            booking.save();
        }
    });
};
booking.appendBookActionOnRoom = function(){
    $("#rooms-list").find(".active-room").click(function(e){
        $("#book-room--selector").val($(e.target).data("id"));
        $("#book-room--selector").change();
    });
};
booking.selectRoom = function(stackIndex){
    var room = roomStack[stackIndex];
    if(typeof room  === "object"){
        $("#book-room-info--image").attr("src", room.photos.img);
        $("#book-room-info--block").find("p.book-room-name").text(EMA.truncateString(room.name, 25));
        $("#book-room-info--block").find("p.book-room-description").text(EMA.truncateString(room.description, 69));
    }
    //timeAndPrices.getList(room.id, booking.monday, booking.sunday);
    timeAndPrices.getBoockingList();
};
booking.validateForm = function(){
    var errorDetected = false;
    $("#book-modal--wrapper").find("input, textarea").each(function(){
        var inputVal = $(this).val();
        switch ($(this).attr("id")){
            case "name":
                if(inputVal.length < 3){
                    $(this).addClass("error");
                    errorDetected = true;
                } else {
                    $(this).addClass("success");
                }
                break;
            case "email":
                var re = /^.*@.*\..*$/;
                if(re.test(inputVal) === false){
                    $(this).addClass("error");
                    errorDetected = true;
                } else {
                    $(this).addClass("success");
                }
                break;
            case "phone":
                if(inputVal.length < 19){
                    $(this).addClass("error");
                    errorDetected = true;
                } else {
                    $(this).addClass("success");
                }
                break;
            case "human-check":
                if(humanValidation.check(inputVal) === false){
                    $(this).addClass("error");
                    errorDetected = true;
                } else {
                    $(this).addClass("success");
                }
        }
        if(errorDetected === false){
            if(booking.bookingData[$(this).attr("id")] !== undefined){
                booking.bookingData[$(this).attr("id")] = inputVal;
            }
        }
    });
    if(errorDetected === false){
        return true;
    }else {
        return false;
    }
};
booking.save = function(){
    var promise = EMA.RoomBooking.bookRoom(booking.bookingData);
    promise.done(function(data){
        alert("Бронирование успешно. На Ваш email выслано письмо с сылкой на подтврждение которая будет активна в течении 30 мин.");
        timeAndPrices.getBoockingList();
        inst.close();
    });
    promise.fail(function(data){
        alert("Во врем бронирования произошла ошибка:\n"+data);
    });
};



function timeAndPrices(){
    ajaxObjectFactory("QuestRoomPrices", false);
};


timeAndPrices.delAllrows = function(){
    $("#book-room-shed--wrapper>div.day-row").find("li").remove();
    $("#book-room-shed--wrapper").css("display", "none");
};

timeAndPrices.appendModalAction = function(){
    $('div.day-row>ul>li>div').on('click', function( e ) {
        e.preventDefault();
        if($(this).hasClass("disabled") === false){
            booking.bookingData.book_time = $(this).data("time");

            var bookDate = new Date($(this).parents("div.day-row").data("timestamp"));

            booking.bookingData.book_date = bookDate.getFullYear()+"-"+(bookDate.getMonth()+1)+"-"+bookDate.getDate();
            booking.bookingData.room_id = $("#book-room--selector").val();


            $("#book-room-modal").text($("#book-room--selector").find(":selected").text());
            $("#book-date-modal").text($(this).parents("div.day-row").children("span").text());
            $("#book-time-modal").text(EMA.truncateString(booking.bookingData.book_time, 5, ""));

            inst.open();
        }
    });
};

timeAndPrices.rowDataModel = function(){
    this.id = "";
    this.quest_room_id = "";
    this.time = "";
    this.mon = "";
    this.tues = "";
    this.wed = "";
    this.thurs = "";
    this.fri = "";
    this.sat = "";
    this.sun = "";
    this.start_date = "";
    this.end_date = "";
    this.regular = "1";
};

timeAndPrices.getBoockingList = function(){
    timeAndPrices.getList($("#book-room--selector").val(), booking.monday, booking.sunday);
};

timeAndPrices.getList = function(roomId, monday, sunday){

    var whereCaluse = {"quest_room_id": roomId,
        "start_date": monday.getFullYear()+"-"+(monday.getMonth() + 1)+"-"+monday.getDate(),
        "end_date": sunday.getFullYear()+"-"+(sunday.getMonth() + 1)+"-"+sunday.getDate()
    };
    var roomBockingWhere = {"room_id": roomId,
        "start_date": monday.getFullYear()+"-"+(monday.getMonth() + 1)+"-"+monday.getDate(),
        "end_date": sunday.getFullYear()+"-"+(sunday.getMonth() + 1)+"-"+sunday.getDate()
    };
    var promise = EMA.QuestRoomPrices.getListForDates(whereCaluse);
    var denyedPromises = EMA.RoomBooking.getNotBookableDates(roomBockingWhere);

    jQuery.when(promise, denyedPromises).done(function(prices, denied){
        var rows = jQuery.parseJSON(prices[0]);
        var denyDates = jQuery.parseJSON(denied[0]);
        timeAndPrices.appendRows(rows);
        timeAndPrices.appendDeniedBookings(denyDates);
    });

};

timeAndPrices.appendRows = function(data){
    timeAndPrices.delAllrows();
    jQuery.each(data, function(index, value){
        $("#book-room-shed--wrapper").find("div.day-row").each(function (day) {

            var price = 0;
            switch (day){
                case 0:
                    price = value.mon;
                    break;
                case 1:
                    price = value.tues;
                    break;
                case 2:
                    price = value.wed;
                    break;
                case 3:
                    price = value.thurs;
                    break;
                case 4:
                    price = value.fri;
                    break;
                case 5:
                    price = value.sat;
                    break;
                case 6:
                    price = value.sun;
                    break;
            }

            var colorClass = "yellow-text";

            if(price <= booking.colors.low){
                colorClass = "blue-text";
            }else if(price >= booking.colors.high){
                colorClass = "orange-text";
            }

            var html = '<li>\
                            <p>'+EMA.truncateString(value.time, 5, "")+'</p>\
                            <div data-time="'+value.time+'" class="'+colorClass+'">'+price+'<\div>\
                        </li>';
            $(this).find("ul").append(html);
        });
    });
    timeAndPrices.appendModalAction();
    if(timeAndPrices.numOfRows() === 0){
        $("#book-room-shed--wrapper").css("display", "none");
    }else{
        $("#book-room-shed--wrapper").css("display", "block");
    }

};

timeAndPrices.appendDeniedBookings = function(data){
    jQuery.each(data, function(index, value){
        var date = new Date(index);
        date.setHours(0, 0, 0);
        var node = $("#book-room-shed--wrapper>div.day-row");
        node.each(function(){
            if($(this).data("timestamp") == date.getTime()){
                var currentDate = $(this);
                if(value[0] === "ALL"){
                    currentDate.find("ul>li>div").addClass("disabled");
                } else {
                    jQuery.each(value, function(timeIndex, timeValue){
                        currentDate.find("ul>li>div[data-time='"+timeValue+"']").addClass("disabled");
                    });
                }
            }
        });

    });
};

timeAndPrices.numOfRows = function(){
    return $("#book-room-shed--wrapper>div:first-child").find("ul").children().length;
};












function humanValidation(){
    humanValidation.firstNum = Math.floor((Math.random() * 15) + 1);
    humanValidation.secondNum = Math.floor((Math.random() * 15) + 1);
    var forms = $(".form");
    forms.find(".human-check-fn").text(humanValidation.firstNum);
    forms.find(".human-check-sn").text(humanValidation.secondNum);
}
humanValidation.check = function(num){
    if(num == (humanValidation.firstNum + humanValidation.secondNum)){
        return true;
    } else {
        return false;
    }
};

function checkSize(){
    if (window.matchMedia('(max-width: 1344px)').matches) {
        $(".top-menu").addClass("hide-element").removeClass("show-element");
    }else{
        $(".top-menu").removeClass("show-element").removeClass("hide-element").css("top", "0");
    }
    $("#navabar-resp-icon>img").attr("src", "images/menu.png");
}
function swichMobileMenu(){
    if($(".top-menu").hasClass("hide-element") === true){
        $(".top-menu").removeClass("hide-element").addClass("show-element").css("top", "-300px").animate({top:"0"}, 500);
        $("#navabar-resp-icon>img").attr("src", "images/menu_active.png");
    }else{
        $(".top-menu").animate({top: "-300px"}, {duration: "500", complete: function(){
            $(".top-menu").addClass("hide-element").removeClass("show-element");
        }});
        $("#navabar-resp-icon>img").attr("src", "images/menu.png");
    }
}