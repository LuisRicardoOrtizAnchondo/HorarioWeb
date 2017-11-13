$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});

$(function () {
    $('#datetimepicker4').datetimepicker();
});

$(function () {
    $('#datetimepicker3').datetimepicker({
        format: 'LT'
    });
});
