var main = function () {
    "use strict";
    //language=JQuery-CSS
    $(".comment-input button").on("click",function (event) {
        $(".comments").append("<p>this is a new </p>")
    });
};
$(document).ready(main);
