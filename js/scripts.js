$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const typeInput = $("input#type").val().toUpperCase();
    $(".type").text(typeInput);
    $("#show").show();
  });
});