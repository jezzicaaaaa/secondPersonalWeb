$(document).ready(function() {
  //SMOOTH SCROLL
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  //SMOOTH SCROLL ENDS
  //SCROLL REVEAL
  window.sr = ScrollReveal();
  sr.reveal("h2");
  sr.reveal("h1");
  sr.reveal("ul li");
  sr.reveal("p");
  sr.reveal("img");
  sr.reveal("i");
  sr.reveal("figure");

  var thingsIlove = ["my cat", "linux", "nature", "css", "logic"];
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
