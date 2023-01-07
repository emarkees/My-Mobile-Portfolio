const hamburger = document.querySelector("#hamburger");

        const menu = document.querySelector("#menu");
        
        const body = document.querySelector("body");
        
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          menu.classList.toggle("open");
          menu.classList.toogle("close")
          body.classList.toggle("fixed");
          body.classList.toggle("blur");
        });


const theModal = document.querySelector('#myModal');
const closeModal = document.querySelector('modal_hamburger');
const worksSection = document.querySelector('.work-container');

const cardWork = [

  {
    id: "#one",  
    title: "Tonic",
    Cartegories: ['CANOPY', 'Back End Dev', '2015'],
    img: "./Scr/images/avocado.png",
    shortDescription:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: 'https://github.com/emarkees/My-Mobile-Portfolio',
    linkToSource: 'https://emarkees.github.io/My-Mobile-Portfolio/',
  },
  {
    id: "#one",  
    title: "Tonic",
    Cartegories: ['CANOPY', 'BACK END DEV', '2015'],
    img: "./Scr/images/avocao.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: 'https://alexisjw.github.io/set-up-myFirst-mobile/',
    linkToSource: 'https://github.com/AlexisJW/set-up-myFirst-mobile',
  },
]