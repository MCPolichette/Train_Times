// navigationn functions
function hideDisplay(tab) {
    $(".train-card").hide()
    $(tab).show();
}
$(".add-train-tab").on("click", function () { hideDisplay("#add-train-card") });
$(".train-schedule-tab").on("click", function () { hideDisplay("#train-schedule-card") });


// Window Loading Programing
window.onload = function (event) {
    $("#add-train-card").hide();
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

}
