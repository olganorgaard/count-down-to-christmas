/*Count down timer*/
function christmasCountdown(){
    const christmasDate = new Date("December 25, 2025 00:00");
    const now = new Date();
    const leftDate = christmasDate - now; 
    const msInSeconds = 1000;
    const msInMinutes = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(leftDate/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHours = Math.floor((leftDate%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHours;

    const displayMinutes = Math.floor((leftDate%msInHour)/msInMinutes);
    document.querySelector('.minutes').textContent = displayMinutes;

    const displaySeconds = Math.floor((leftDate%msInMinutes)/msInSeconds);
    document.querySelector('.seconds').textContent = displaySeconds;

    if (leftDate <= 0 ){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerId);
        marryChristmas();
    }
}

let timerId = setInterval(christmasCountdown, 1000);


function marryChristmas(){
    const heading = document.querySelector('h1');
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!!!";
    heading.classList.add('red');
}

/*Animation*/
gsap.from("#myButton", {y: -500, ease: "bounce", duration: 2, delay: 2})
gsap.from(".block", {opacity: 0, duration: 2, delay: 1, stagger: .6})
gsap.from(".christmas", {y: -100, duration: 2, stagger: .6, opacity: 0})
gsap.from(".santa-claus", {y: -500, ease: "bounce", duration: 2, delay: 2})

// SEARCH

const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.movies');

searchInput.addEventListener('keyup', (event) => {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})

/*Play and puse btn*/
const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

button.addEventListener ('click', function() {

    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})
/*Snow*/
particlesJS("particles-js", {
    particles: {
      number: {
        value: 1000,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "https://cdn.glitch.global/b32f4e04-b79a-47f5-b432-c59b14b36181/snowflake.png?v=1667466099733",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        //size of the snow
        value: 9,
        random: false,
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 5,
        direction: "bottom",
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
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
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
 
