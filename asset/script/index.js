window.addEventListener("DOMContentLoaded", (e) => {
  Show_team();
  display_testimoial();
  offer_display()
});


/*
  *********** carousel for feature start *******
*/
$(".carosusel-feature-overview").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  stagePadding: 30,
  responsive: {
    0: {
      items: 1.2,
      stagePadding: 40,
    },
    499: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
/*
  *********** carousel for feature end *******
*/




/*
  *********** carousel for screenshot start *******
*/
$(".screenshot-body").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  center: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
      stagePadding: 30,
    },
    500: {
      items: 1.3,
      // stagePadding: 40,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1120: {
      items: 5,
    },
  },
});
/*
  *********** carousel for screenshot end *******
*/




/*
  *********** Testimonial start *******
*/
const testimonial_reviewar = [
  {
    id: 1,
    img: "asset/image/client2.jpg",
    name: "Petar parker",
    sure_name: "CEO",
    descripton: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia beatae, totam corporis facilis quis sequi iusto quaerat qui aliquid voluptates! Quasi asperiores reprehenderit quae cum!`,
  },
  {
    id: 2,
    img: "asset/image/client3.jpg",
    name: "Johon mike",
    sure_name: "Mangager",
    descripton: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia beatae, totam corporis facilis quis sequi iusto quaerat qui aliquid voluptates! Quasi asperiores reprehenderit quae cum!.`,
  },
  {
    id: 3,
    img: "asset/image/client4.jpg",
    name: "Mr Benze",
    sure_name: "Web Develpoer",
    descripton: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia beatae, totam corporis facilis quis sequi iusto quaerat qui aliquid voluptates! Quasi asperiores reprehenderit quae cum!`,
  },
  {
    id: 4,
    img: "asset/image/client1.jpg",
    name: "Wangro",
    sure_name: "Worker",
    descripton: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia beatae, totam corporis facilis quis sequi iusto quaerat qui aliquid voluptates! Quasi asperiores reprehenderit quae cum!.`,
  },
];
const testimonial_container = document.querySelector(".testimonial-carosusel");

const display_testimoial = () => {
  const testi_member = testimonial_reviewar
    .map((e) => {
      return `<div class="item">
     <div class="row testimonial-body" data-aos="fade-up">
         <div class="d-flex justify-content-between person-info">
             <img src="${e.img}" class="img-fluid border border-3 rounded-circle" alt="">
             <div class="person-name">
                 <h4>${e.name}</h4>
                 <span>${e.sure_name}</span>
             </div>
             <i class="fas fa-quote-right"></i>
         </div>
         <div class="description pt-3">
            ${e.descripton}
         </div>
     </div>
</div>`;
    })
    .join("");
  testimonial_container.innerHTML = testi_member;
};

$(document).ready((e) => {
  $(".testimonial-carosusel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      700: {
        items: 1,
        stagePadding: 30,
      },
      1000: {
        items: 2,
      },
    },
  });
});
/*
  *********** Testimonial end *******
*/




/*
  *********** Team start *******
*/
const team_Details = [
  {
    id: 1,
    name: "Elaisha",
    profession: "web developer",
    img: "asset/image/team001.jpg",
    faceBook: "#0",
    in: "#0",
    instagram: "#0",
    twitter: "#0",
  },
  {
    id: 2,
    name: "Mical jos",
    profession: "Android developer",
    img: "asset/image/team002.jpeg",
    faceBook: "#0",
    in: "#0",
    instagram: "#0",
    twitter: "#0",
  },
  {
    id: 3,
    name: "Alex Jaz",
    profession: "web desinger",
    img: "asset/image/team003.jpg",
    faceBook: "#0",
    in: "#0",
    instagram: "#0",
    twitter: "#0",
  },
  {
    id: 4,
    name: "Elaish",
    profession: "App Desinger",
    img: "asset/image/team004.jpg",
    faceBook: "#0",
    in: "#0",
    instagram: "#0",
    twitter: "#0",
  },
  {
    id: 5,
    name: "Harry",
    profession: "Assistant",
    img: "asset/image/team005.jpg",
    faceBook: "#0",
    in: "#0",
    instagram: "#0",
    twitter: "#0",
  },
  {
    id: 6,
    name: "Jonny Dav",
    profession: "Actor",
    img: "asset/image/team006.jpg",
    faceBook: "#0",
    in: "#0",
    instagram: "#0",
    twitter: "#0",
  },
];
const team_container = document.querySelector(".team-member-container");
const Show_team = () => {
  const team_member = team_Details
    .map((e) => {
      return ` <div class="item">
     <div class="row ">
          <div class="team-carryer text-center" data-aos="zoom-in">
              <div class="team-img ">
                  <img src="${e.img}" class="img-fluid mx-auto border border-3 rounded-circle" alt="">
              </div>
              <div class="d-flex justify-content-center gap-2 social-media">
                  <a href="${e.faceBook}"><i class="fab fa-facebook-f"></i></a>
                  <a href="${e.in}"><i class="fab fa-linkedin-in"></i></a>
                  <a href="${e.instagram}"><i class="fab fa-instagram"></i></a>
                  <a href="${e.twitter}"> <i class="fab fa-twitter"></i></a>
              </div>
              <div class="team-info">
                  <h4>${e.name}</h4>
                  <h6>${e.profession}</h6>
              </div>
          </div>
     </div>
  </div>`;
    })
    .join("");
  team_container.innerHTML = team_member;
};
$(document).ready((e) => {
  $(".team-member-container").owlCarousel({
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding:20,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
/*
  *********** Team end *******
*/



/*
  *********** Offer start *******
*/
const offer_display = () => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
  
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  
  
    const tittle = document.querySelector('.giveaway-date')
    const show_date = document.querySelector('.days')
    const show_hour = document.querySelector('.hour')
  
    const show_minit = document.querySelector('.minit')
    const show_secend = document.querySelector('.second')
  
  
  
    const recent_time = new Date()
  
    const recent_year = recent_time.getFullYear()
    const recent_month = recent_time.getMonth()
    const recent_date = recent_time.getDate()
  
  
  
    const futureDate = new Date(recent_year, recent_month,  recent_date+4 , 10, 30, 10)
  
    let mon = futureDate.getMonth()
    mon = month[mon]
  
    let day = futureDate.getDay()
    day = weekday[day]
  
    let date = futureDate.getDate()
    let year = futureDate.getFullYear()
    let future_hour = futureDate.getHours()
    let future_minit = futureDate.getMinutes()
  
  
  
    tittle.innerHTML = `This Offer Will be Ends On <span>${day} ${date} ${mon} ${year} ${future_hour}:${future_minit} am`
  
  
  
  
    const time = futureDate.getTime()

    const count_time = () => {
  
      const currentDate = new Date().getTime()
  
      const t = time - currentDate
  
      let mili_sec = 1000;
      let mili_minit = mili_sec * 60;
      let mili_hour = mili_minit * 60;
      let mili_day = mili_hour * 24
  
  
      let sec = Math.floor((t % mili_minit) / mili_sec)
      let minit = Math.floor((t % mili_hour) / mili_minit)
      let hours = Math.floor(((t % mili_day) / mili_hour))
      let day = Math.floor(t / mili_day)
  
  
      show_date.innerHTML = day
      show_hour.innerHTML = hours
      show_minit.innerHTML = minit
      show_secend.innerHTML = sec
    }
  
    setInterval(count_time, 1000)
  
  
  }
/*
  *********** Offer end *******
*/