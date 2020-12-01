AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Github",
    cardImage: "assets/images/education-page/github3.png",
    moocLink: "https://github.com/MSB-CREATION",
  },
  {
    title: "Python",
    cardImage: "assets/images/python2.png",
    moocLink: "https://www.python.org/",
  },
  {
    title: "Django",
    cardImage: "assets/images/django1.png",
    moocLink: "https://www.djangoproject.com/",
  },
  {
    title: "Gitlab",
    cardImage: "assets/images/education-page/gitlab.png",
    moocLink: "https://gitlab.com/msb-creations",
  },
  {
    title: "Softaculous",
    cardImage: "assets/images/education-page/softaculous.png",
    moocLink: "https://www.softaculous.com/",
  },
  {
    title: "Bootstrap",
    cardImage: "assets/images/education-page/bootstrap.png",
    moocLink: "https://getbootstrap.com",
  },
  {
    title: "Php",
    cardImage: "assets/images/education-page/php.png",
    moocLink: "https://www.php.net/",
  },
  {
    title: "Mysql",
    cardImage: "assets/images/education-page/mysql.png",
    moocLink: "https://www.mysql.com/",
  },
  {
    title: "Codepen",
    cardImage: "assets/images/education-page/cp.png",
    moocLink: "https://codepen.io/MishabMsb",
  },
  {
    title: "Adobe Products",
    cardImage: "assets/images/education-page/adobe.png",
    moocLink: "https://account.adobe.com",
  },
  {
    title: "Android Studio",
    cardImage: "assets/images/education-page/as.png",
    moocLink: "https://developer.android.com/studio",
  },
  {
    title: "Spotify",
    cardImage: "assets/images/education-page/spotify.png",
    moocLink: "https://www.spotify.com/in/",
  },
  {
    title: "Udemy",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/",
  },
  {
    title: "React Native",
    cardImage: "assets/images/react.jpg",
    moocLink: "https://reactjs.org/",
  },
  {
    title: "MongoDB",
    cardImage: "assets/images/mongodb.webp",
    moocLink: "https://www.mongodb.com/",
  },
  {
    title: "Laravel",
    cardImage: "assets/images/education-page/laravel.png",
    moocLink: "https://www.laravel.com/",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description}) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Govt.High School Kozhikode",
    image: "./assets/images/project-page/edu1.jpg",
    subheading:"Bio Science Normal Student, (2015-2017)",
  },

  {
    heading: "Govt.Higher Secondary School Kozhikode",
    image: "./assets/images/education-page/edu2.png",
    subheading:"Computer Commerce Student, (2017-2019)",
  },

  {
    heading: "Institute Of Human Resource Development(IHRD)",
    image: "./assets/images/education-page/edu3.jpg",
    subheading:"Bachelors of Science, Computer Science & Engineering, (2019-2022)",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"Master of Science, Computer Science & Engineering, (2022-2024)",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description}) =>
      (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);