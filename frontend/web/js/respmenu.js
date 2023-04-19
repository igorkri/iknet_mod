
    $(document).ready(function(){
        $("#resp-menu").emaRespMenu({
            data: responsiveMenuData,
            activateIconSelector: "#resp-menu-icon",
            maxWidth: 959,
            closeOnOutsideClick: false,
            closeOnResize: false,
            backButtonText: responsiveMenuDataBack
        });
        $("#share").jsSocials({
            showCount: false,
            showLabel: true,
            shareIn: "popup",
            shares: ["twitter", { share:  "facebook" , label: "Share"}, { share: "googleplus", label: "Share" }, "linkedin"]
        });

    });
