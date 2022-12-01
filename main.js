const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

var particleColor = getComputedStyle(document.body).getPropertyValue(
  "--bg-round-a"
);

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const htmlEl = document.getElementsByTagName("html")[0];
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
if (currentTheme) {
  htmlEl.dataset.theme = currentTheme;
  particleColor = getComputedStyle(document.body).getPropertyValue(
    "--bg-round-a"
  );
}
const toggleTheme = (theme) => {
  htmlEl.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  particleColor = getComputedStyle(document.body).getPropertyValue(
    "--bg-round-a"
  );
  console.log(particleColor)
};

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

const toggleReg = document.querySelector("#toggleReg");
const pass = document.querySelector("#id_reg");

toggleReg.addEventListener("click", function (e) {
  const type = pass.getAttribute("type") === "password" ? "text" : "password";
  pass.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

// Configurando a partículas

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: particleColor
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: particleColor
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 6,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: particleColor,
      opacity: 0.5,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 50,
        duration: 1
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});


function loginCheck() {
  var email = document.sign_in_form.email;
  var password = document.sign_in_form.password;
  var msg = document.getElementById("msg");
  if (email == "") {
    msg.style.display = "block";
    msg.innerHTML = "Por favor, digite seu e-mail";
    email.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }

  if (password.value == "") {
    msg.style.display = "block";
    msg.innerHTML = "Por favor, digite sua senha";
    password.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value)) {
    msg.style.display = "block";
    msg.innerHTML = "Digite um e-mail válido";
    email.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
}

function registerCheck() {
  var email = document.sign_up_form.email;
  var password = document.sign_up_form.password;
  var repeat_password = document.sign_up_form.repeat_password;
  var msg = document.getElementById("msg2");
  if (email == "") {
    msg.style.display = "block";
    msg.innerHTML = "Por favor, digite seu e-mail";
    email.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }

  if (password.value == "") {
    msg.style.display = "block";
    msg.innerHTML = "Por favor, digite sua senha";
    password.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value)) {
    msg.style.display = "block";
    msg.innerHTML = "Por favor, digite seu e-mail";
    email.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }

  if (password.value !== repeat_password.value) {
    console.log(
      `password: ${password.value} | repeat: ${repeat_password.value}`
    );
    msg.style.display = "block";
    msg.innerHTML = "Tenha certeza que suas senhas são as mesmas";
    repeat_password.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
}
