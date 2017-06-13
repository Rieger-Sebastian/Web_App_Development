var main = function () {
    "use strict";
    //language=JQuery-CSS
    var addCommentFromInputBox = function () {
        var $new_comment = $("</p>");
        var $content = $("<div>wait while writing.</div>");
        $("body").append($content);
        $content.slideDown(2000, function () {

        if ($(".comment-input input").val() !== "") {
            $new_comment.text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn(2000);
            $(".comment-input input").val("");
        }
        });
    }
    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

$(".comment-input input").on("keypress", function (event) {
    var $new_comment = $("</p>");
    if (event.keyCode === 13 && $(".comment-input input").val() !== "") {
        addCommentFromInputBox();
    }
});
};

$(document).ready(main);
