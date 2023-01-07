const hamburgerButton = document.querySelector('.modal_btn');
const closeBtn = document.querySelector('.modal_hamburger');


const theModal = document.querySelector('.modal_overlay');
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

let htmll = '';
cardWork.forEach((item) => {

  htmll += `
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
     
        <button class="see-project" type="button"> See Project </button>
      
    </div>
  </div>`;
});


worksSection.innerHTML = htmll

let html2 = '';
 html2 += `<div class="modal_overlay">
 <div id="myModal" class="modal">
   <div class="modal_pry_txt">
     <div class="modal_frame">
       <h1 class="modal_proj_title">Tonic</h1>
       <span class="modal_btn"><i class=" modal_hamburger fa-solid fa-x"></i></span>
     </div>
     <ul class="modal_frame_dev">
       <li class="modal_tag_list"><h2 class="modal_canopy">CANOPY</h2></li>
       <span class="modal_counter"></span>
       <li class="modal_tag_role"><h2 class="modal_role">Back End Dev</h2></li>
       <span class="modal_counter_tw"></span>
       <li class="modal_tag_year"><h2 class="modal_yr">2015</h2></li>
     </ul>
   </div>
   <img id="snapsht_avocado" alt="snapshort img" src="./Scr/images/avocado.png" >
   <div class="modal_Left_Block">
     <p class="modal_description">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
     <ul class="modal_tag_dev">
       <li class="html_tag"><h3 class="html_txt">html</h3></li>
       <li class="css_tag"><h3 class="css_txt">css</h3></li>
       <li class="java_tag"><h3 class="java_txt">javaScript</h3></li>
     </ul>
     <span class="divider">
       <hr class="modal_vector">
     </span>
     <div id="modal_action">
       <a href="" class="link-live">
         <button 
         class="modal_live_link" type="button">See Live
         <img 
           src="./Scr/images/see_source.svg" 
           />
       </button>
       </a>
       <a href="" class="link-git">
         <button 
           class="modal_live_source"  type="button"  id="icon-gitModal" >See source
           <img  class="git_vector"
           src="./Scr/images/see_live.svg" 
           />
         </button>
       </a>
     </div>
   </div>
 </div>
</div>`
const projectButton = document.querySelectorAll('.see-project');

  projectButton[0].addEventListener('click', openpopup);
  
  function openpopup () {
   

  const ddd = document.querySelector('.ddd');
  ddd.innerHTML = html2;
  };


hamburgerButton.addEventListener('click', () => {
    nav.classList.add('close');
  });

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});



