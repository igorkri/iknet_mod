if (typeof solar_pp_calc != "undefined") {
    requirejs.config({
        "baseUrl": "/js/lib",
        "paths": {
            "app": "../app"
        },
        "shim": {
            "/solarplant/vendor/js/knockout.js":["/solarplant/vendor/js/jquery-ui.js"],
            "/solarplant/js/main.migrate.js": ["/solarplant/vendor/js/knockout.js"],
            "/solarplant/js/model.min.js": ["/solarplant/js/main.migrate.js"],

        }
    });
    requirejs(["app/calc", "/solarplant/vendor/js/jquery-ui.js", "/solarplant/vendor/js/knockout.js",
        "/solarplant/js/main.migrate.js", "/solarplant/js/model.min.js",  ]);
} 