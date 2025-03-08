const textConfig = {
  text1: "Hello Em nha! 👋",
  text2: "Nhớ nhớ nhớ Em? 😍",
};

$(document).ready(function () {
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 600);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "Bấm vô đây nè!",
    }).then(function () {
      $(".content").show(200);
      showRandomPopups();
    });
  }

  function showRandomPopups() {
    let popupInterval;
    setTimeout(() => clearInterval(popupInterval), 30000);
    const audio1 = document.querySelector('audio');
    if (audio1) {
      audio1.pause();
      audio1.currentTime = 0;
    }
    const audio = new Audio("./sound/tranbonho.mp3");
    audio.play();
    popupInterval = setInterval(() => {
      let posX = Math.floor(Math.random() * ($(window).width() - 300));
      let posY = Math.floor(Math.random() * ($(window).height() - 200));
      
      const popup = document.createElement("div");
      popup.classList.add("custom-popup");
      popup.style.position = "absolute";
      popup.style.left = posX + "px";
      popup.style.top = posY + "px";
      popup.style.zIndex = 9999;
      popup.innerHTML = `
        <div style="background: pink; padding: 10px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3); text-align: center;">
          <img src="img/chanh.jpg" width="100" height="100" style="border-radius: 10px;"/>
          <h3>${textConfig.text2}</h3>
        </div>
      `;
      document.body.appendChild(popup);
    }, 200);
  }
});
