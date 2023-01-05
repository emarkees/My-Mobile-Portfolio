const hamburger = document.querySelector("#hamburger");

        const menu = document.querySelector("#menu");
        
        const body = document.querySelector("body");
        
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          menu.classList.toggle("open");
          body.classList.toggle("fixed");
          body.classList.toggle("blur");
        });