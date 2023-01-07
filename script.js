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

  

