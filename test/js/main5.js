// function set_colors() {
//     var colorset = ['linear-gradient(rgba(235, 87, 87, 0),rgba(235, 87, 87, 0.25), rgba(235, 87, 87, 1))','linear-gradient(rgba(79, 79, 79, 0),rgba(79, 79, 79, 0.25), rgba(79, 79, 79, 1))','linear-gradient(rgba(39, 174, 96, 0),rgba(39, 174, 96, 0.25), rgba(39, 174, 96, 1))','linear-gradient(rgba(47, 128, 237, 0),rgba(47, 128, 237, 0.25),rgba(47, 128, 237, 1))']; //Set your colors here
//     var bgcolor = colorset[Math.floor(Math.random() * colorset.length)];
//     document.body.style.background = bgcolor;
//
//     if (bgcolor == 'linear-gradient(rgba(79, 79, 79, 0),rgba(79, 79, 79, 0.25), rgba(79, 79, 79, 1))') {
//       document.getElementById("logo").src = "img/logo.svg";
//     } else if (bgcolor == 'linear-gradient(rgba(47, 128, 237, 0),rgba(47, 128, 237, 0.25),rgba(47, 128, 237, 1))') {
//       document.getElementById("logo").src = "img/logo_b.svg";
//     }else {
//       document.getElementById("logo").src = "img/logo_rg.svg";
//     }
// }
function set_colors() {
    var logos = ["img/logo.svg","img/logo_b.svg","img/logo_rg.svg"]; //Set your colors here
    var setlogo = logos[Math.floor(Math.random() * logos.length)];
    document.getElementById("logo").src = setlogo;

    if (setlogo == "img/logo.svg") {
      // document.getElementById("h2").style.color = "#BDBDBD";
      // document.getElementById("journal").style.color = "#BDBDBD";
      // document.getElementById("logo").classList.add('monodark');
      document.getElementById("h1").classList.add('monodark');
      document.getElementById("h2").classList.add('monolight');
      // document.getElementById("about").classList.add('monodark');
      document.getElementById("abouttext").classList.add('monodark');
      document.getElementById("journal").classList.add('monodark');
      // document.getElementById("footer").classList.add('monolight');
    }

    if (setlogo == "img/logo_b.svg") {
      // document.getElementById("h2").style.color = "#2F80ED";
      // document.getElementById("journal").style.color = "#2F80ED";
      // document.getElementById("logo").classList.add('bluedark');
      document.getElementById("h1").classList.add('bluedark');
      document.getElementById("h2").classList.add('blue');
      // document.getElementById("about").classList.add('bluedark');
      document.getElementById("abouttext").classList.add('bluedark');
      document.getElementById("journal").classList.add('bluedark');
      // document.getElementById("footer").classList.add('blue');
    }

    if (setlogo == "img/logo_rg.svg") {
      // document.getElementById("h2").style.color = "#EB5757";
      // document.getElementById("journal").style.color = "#EB5757";
      // document.getElementById("logo").classList.add('green');
      document.getElementById("h1").classList.add('green');
      document.getElementById("h2").classList.add('red');
      // document.getElementById("about").classList.add('green');
      document.getElementById("abouttext").classList.add('green');
      document.getElementById("journal").classList.add('green');
      // document.getElementById("footer").classList.add('red');
    }

//     if (bgcolor == 'linear-gradient(rgba(79, 79, 79, 0),rgba(79, 79, 79, 0.25), rgba(79, 79, 79, 1))') {
//       document.getElementById("logo").src = "img/logo.svg";
//     } else if (bgcolor == 'linear-gradient(rgba(47, 128, 237, 0),rgba(47, 128, 237, 0.25),rgba(47, 128, 237, 1))') {
//       document.getElementById("logo").src = "img/logo_b.svg";
//     }else {
//       document.getElementById("logo").src = "img/logo_rg.svg";
//     }
}
