$(document).ready(function() {
  var thingsIlove = ["my cat", "linux", "nature", "logic", "clean code"];
  var indexOfThings = 0;

  function iterateList() {
    if (indexOfThings >= thingsIlove.length) {
      indexOfThings = 0;
    } else {
      var content = thingsIlove[indexOfThings++] + ".";
    }
    $(".thingsIlove").addClass("active");
    $(".thingsIlove").text(content);
    $(".thingsIlove").removeClass("active");
  }
  setInterval(iterateList, 900);

  //we need to store index to iterate through list
  //use setinterval to run animation over time
  //write a function that set interval can use to animate the text
  //write an animaion using css or javascript
  //hook animation up to text
  $(".cross").hide();
  $(".hamburger").on("click", function() {
    $(".cross").show();
    $(".hamburger").hide();
    $(".hamburger-content").width("auto");
  });
  $(".cross").on("click", function() {
    $(".cross").hide();
    $(".hamburger").show();
    $(".hamburger-content").width("0");
  });
});
