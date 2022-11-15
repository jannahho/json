

document.addEventListener("DOMContentLoaded", function() {

  let jsonDatabase = [{
      "image": "banquet.jpg",
      "title": "Club Banquet",
      "description": "Digital collage to commemorate RCF senior banquet",
      "backgroundcolor": "#e0f2c4"
    },
    {
      "image": "parents.jpg",
      "title": "Parents",
      "description": "Digital collage for my parents' anniversary",
      "backgroundcolor": "#c4f2de"
    },
    {
      "image": "poetry.jpg",
      "title": "Black Out Poetry",
      "description": "Analog collage made with newspaper, magazine, and book page cut outs",
      "backgroundcolor": "#c4eaf2"
    },
    {
      "image": "duckcollage.jpg",
      "title": "I Like Ducks",
      "description": "A digital collage I made to show my affinity for ducks",
      "backgroundcolor": "#c4c6f2"
    },
    {
      "image": "joewall.png",
      "title": "Face Mural",
      "description": "Analog collage mural of my face for wall decor, made of abandoned art book pages",
      "backgroundcolor": "#eac4f2"
    },
    {
      "image": "boyscouts.jpg",
      "title": "Friends",
      "description": "Digital collage of my besties at a park",
      "backgroundcolor": "#f2c4c4"
    }

  ];


  for (let i = 0; i < jsonDatabase.length; i++) {
    createElement(jsonDatabase[i]);
  }

  function createElement(incomingJSON) {
    // let newListElement = document.createElement('li');
    // newListElement.classList.add("glide__slide");


    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON['backgroundcolor'];
    newContentElement.classList.add('contentDiv');
    newContentElement.classList.add('swiper-slide');


    let newProjectImage = document.createElement("IMG");
    newProjectImage.classList.add("projectImage");
    newProjectImage.src = incomingJSON['image'];
    newContentElement.appendChild(newProjectImage);


    let newProjectTitle = document.createElement("H2");
    newProjectTitle.classList.add('projectTitle');
    newProjectTitle.innerText = incomingJSON['title'];
    newContentElement.appendChild(newProjectTitle);

    let newDescription = document.createElement("P");
    newDescription.classList.add('newDescriptionClass');
    newDescription.innerText = incomingJSON['description'];
    newContentElement.appendChild(newDescription);

    // newListElement.appendChild(newContentElement);
    document.getElementById('myslides').appendChild(newContentElement);

  }

  // const config = {
  //   type: 'carousel',
  //   perView: 2,
  //   startAt: 0,
  //   focusAt: 'center',
  //   autoplay: 3000,
  //   breakpoints: {
  //     600: {
  //       perView: 1
  //     }
  //   }
  // };
  //
  // new Glide('.glide', config).mount();

  // new Glide('.glide').mount();

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});
