$(window).on("load", function () {
  $(".profil").addClass("show");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // skills
  if (wScroll > $("#skill-section").offset().top - 200) {
    $("#skill-section .section").addClass("muncul");
    $(".progress .bg-success").addClass("full");
    $(".progress .bg-danger").addClass("full");
    $(".progress .bg-info").addClass("half");
  }
});

const images = document.querySelectorAll(".hero-section .bouncy");
images.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("bouncing");
    setTimeout(function () {
      item.classList.remove("bouncing");
    }, 1200);
  });
});

const txt = document.querySelectorAll("#skill-section .bounce");
txt.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("bouncing");
    setTimeout(function () {
      item.classList.remove("bouncing");
    }, 1200);
  });
});

const h2 = document.querySelectorAll("#gallery-section .bouncy");
h2.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("bouncing");
    setTimeout(function () {
      item.classList.remove("bouncing");
    }, 1200);
  });
});

const contact = document.querySelectorAll("#contact-section .bouncy");
contact.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("bouncing");
    setTimeout(function () {
      item.classList.remove("bouncing");
    }, 1200);
  });
});

{
  let words = [
      "' Love is like a fart. If you have to force it, it's probably shit ' ",
      "'' Money is like the 6th sense . It allows u to enjoy your other 5 ''",
      " '' The only thing more painful than being an active forgetter is to be an inert rememberer. Jhonanatan S Foer '' ",
      " '' de gustibus non est disputandum '' ",
      " '' Trusting u is my decision, proving u wrong is your choice. Patrick Star'' ",
      " '' To move forward, we have to leave something behind. '' ",
      " '' 당신이 만날 때 가장 반갑고 헤어질 때 가장 힘든 사람이 되고 싶습니다. '' ",
      " '' 道場で泣き戦場で笑う. '' ",
    ],
    i = 0;
  setInterval(function () {
    $(".teks").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 7000);
}
