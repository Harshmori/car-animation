$(document).ready(function () {
  //variables
  $surface = $(".surface");
  $car = $(".car");
  $img = $(".car img");
  music = document.getElementById("rhapsody");
  music2 = document.getElementById("kun");
  let flag = true;
  let radio = false;
  const cars = ["./assets/Img_05.png", "./assets/Img_06.png"];

  //keypress event
  $(document).on("keypress", function (e) {
    if (e.which == 13) {
      $($surface).toggleClass("moveRight");
      $($car).toggleClass("suspension");
    }
  });

  $(document).on("keypress", function (e) {
    if (e.which == 32) {
      if (flag) {
        flag = false;
        $img.attr("src", cars[0]);
      } else {
        flag = true;
        $img.attr("src", cars[1]);
      }
    }
  });
  $(document).on("keypress", function (e) {
    if (e.which == 109) {
      if (radio == false) {
        radio = true;
        music.play();
      } else {
        radio = false;
        music.pause();
        music.currentTime = music.currentTime();
      }
    } else if (e.which == 107) {
      if (radio == false) {
        radio = true;
        music2.play();
      } else {
        radio = false;
        music2.pause();
        music2.currentTime = music2.currentTime();
      }
    }
  });
});
