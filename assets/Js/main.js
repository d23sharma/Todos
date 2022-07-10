// Check off specific todos by clicking

$("ul").on("click", "li", function () {
  $(this).toggleClass("complete");
});

//click on X to delete todos

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropogation();
});

$("input[type = 'text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing the new todoText
    let newTodo = $(this).val();
    $(this).val("");
    //creating a new li and adding it to the ul
    $("ul").append(
      "<li><span><i class='fa-solid fa-trash'></i></span> " + newTodo + "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type = 'text']").fadeToggle();
});
