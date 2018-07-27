
function set_colors() {
    var logos = ["img/logo.svg","img/logo_b.svg","img/logo_rg.svg"]; //Set your logos here
    var setlogo = logos[Math.floor(Math.random() * logos.length)];
    document.getElementById("logo").src = setlogo;

    if (setlogo == "img/logo.svg") {
      document.getElementById("h2").style.color = "#BDBDBD";
      document.getElementById("journal").style.color = "#BDBDBD";
      document.getElementById("h1").classList.add('monodark');
      document.getElementById("h2").classList.add('monolight');
      document.getElementById("about").classList.add('monodark');
      document.getElementById("abouttext").classList.add('monodark');
      document.getElementById("journal").classList.add('monodark');
    }

    if (setlogo == "img/logo_b.svg") {
      document.getElementById("h2").style.color = "#2F80ED";
      document.getElementById("journal").style.color = "#2F80ED";
      document.getElementById("h1").classList.add('bluedark');
      document.getElementById("h2").classList.add('blue');
      document.getElementById("about").classList.add('bluedark');
      document.getElementById("abouttext").classList.add('bluedark');
      document.getElementById("journal").classList.add('bluedark');
    }

    if (setlogo == "img/logo_rg.svg") {
      document.getElementById("h2").style.color = "#EB5757";
      document.getElementById("journal").style.color = "#EB5757";
      document.getElementById("h1").classList.add('green');
      document.getElementById("h2").classList.add('red');
      document.getElementById("about").classList.add('green');
      document.getElementById("abouttext").classList.add('green');
      document.getElementById("journal").classList.add('green');
    }
}
