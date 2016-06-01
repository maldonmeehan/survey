$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);
      event.preventDefault();
  });
});

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var food = $("#food").val();

    $(".food").text(foodInput);
      event.preventDefault();
  });
});
