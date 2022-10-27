$("h1").addClass("big-title margin-50");

$("button").html("<em>Click Me</>")

$("h1").click(function () {

  $("h1").css("color", "purple");
})

$("a").attr("href", "https://www.yahoo.com");


// for(var i = 0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple"
//   });
// }


//below jquery accomplishes same thing commented out for loop above

$("button").click(function() {
  $("h1").css("color", "purple")
});

//do not need to do the for loop because jquery will go through all of the buttons


//this changes the text in the h1 based on key press
$(document).keypress(function(event) {
  $("h1").text(event.key);
});

//this changes color of h1 when you mouseover it
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
});
