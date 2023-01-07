const hamburgerButton = document.querySelector('.modal_btn');
const closeBtn = document.querySelector('.modal_hamburger');


const theModal = document.querySelector('#myModal');
const closeModal = document.querySelector('modal_hamburger');
const worksSection = document.querySelector('.work-container');

const cardWork = [

  {
    
    name: "Tonic",
    Cartegories: ['CANOPY', 'Back End Dev', '2015'],
    featuredImage: "./Scr/images/avocado.png",
    shortDescription:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: 'https://github.com/emolio',
    linkToSource: 'https://emarkees.github.',
    cardNo: "#one", 
  },
  
];

let html = '';
cardWork.forEach((item) => {

  html += `
  <div class="box" id="${item.cardNo}">
    <img src="${item.featuredImage}" alt="image card" class="snapshot_avocado">
    <div class="mobile_left_block">
      <div class="mobile_pry_txt">
        <h2 class="mobile_proj_title"> ${item.name} </h1>
        <ul class="mobile_frame_dev">
          <li class="mobile_tag_list"><h1 class="mobile_canopy">CANOPY</h2></li>
          <span class="counter"></span>
          <li class="mobile_tag_role"><h5 class="mobile_role">Back End Dev</h5></li>
          <span class="counter_tw"></span>
          <li class="mobile_tag_year"><h5 class="mobile_yr">2015</h5></li>
        </ul>
      </div>
      <div class="details"> ${item.shortDescription} </div>
      <ul class="technologies-label">
        ${item.technologies.map((tech) => `<li class="tags_li">${tech}</li>`).join('')}
      </ul>
     
        <button class="see-projec" type="button"> See Project </button>
      
    </div>
  </div>`;
});


worksSection.innerHTML = html


const projectButton = document.querySelectorAll('.see-project');

projectButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('#myModal');
    const title = modal.querySelector('.modal_pry_txt');
    const img = modal.querySelector('img.snapshot_avocado');
    const description = modal.querySelector('.modal_description');
    const technologies = modal.querySelector('.tag_list');
    const linkLiveDemo = modal.querySelector('a.link-live');
    const linkGit = modal.querySelector('a.link-git');

    title.textContent = cardWork[index].name;
    img.innerHTML = cardWork[index].featuredImage;
    description.textContent = cardWork[index].description;
    technologies.innerHTML = cardWork[index].technologies.map((item) => `<li>${item}</li>`).join('');
    linkLiveDemo.href = cardWork[index].linkToLive;
    linkGit.href = cardWork[index].linkToSource;

   modal.style.display = 'block';
  });
});

hamburgerButton.addEventListener('click', () => {
    nav.classList.add('close');
  });

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});



