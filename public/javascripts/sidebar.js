$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});

$(function () {
  $('#datetimepicker4').datetimepicker();
  $('#dtclock1').datetimepicker({
      format: 'LT'
  });
  $('#dtclock2').datetimepicker({
      format: 'LT'
  });
});
