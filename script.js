let proNavItem = document.querySelectorAll('ul.nav li');

// Update background content 
let procedures = {
    dermal:{
        title:"Dermal Fillers",
        content:"Facial volume loss begins in most people once they hit their mid-30s. Don’t let the loss of youthful volume dictate your appearance! Take action with our collection of Dermal Fillers, such as Restylane ® and Juvederm®. Our dermal fillers are FDA-approved to lift and add volume to wrinkles, fine lines, or enhance your lips. Experience smoother, younger-looking skin today!",
        link:"https://www.plasticsurgery.org/cosmetic-procedures/dermal-fillers",
        background:"images/dermal.jpg"
    },
    coolsculpting:{
        title:"Cool Scultping",
        content:"A non-surgical body contouring treatment that selectively freezes and eliminates unwanted fat cells. This procedure uses a controlled cooling process to target and destroy stubborn pockets of fat, resulting in a more sculpted physique without surgery or downtime.",
        link:"https://www.coolsculpting.com/",
        background:"images/coolSculpting.jpg"
    },
    qwo:{
        title:"QWO",
        content:"An injectable treatment for cellulite that is designed to smooth the skin and improve the appearance of dimpling caused by connective tissue bands. Qwo uses enzymes to break down the bands and stimulate collagen production, leading to a smoother and more even skin surface.",
        link:"https://sheaaestheticclinic.com/qwo-cellulite-treatment",
        background:"images/qwo.jpg"
    },
    advancedLaser:{
        title:"Advanced Lasers",
        content:" A range of high-tech cosmetic laser treatments that are used to address a variety of skin concerns. These treatments use advanced laser technology to target specific skin cells and structures, including hair follicles, blood vessels, and pigmented areas, with minimal discomfort or downtime.",
        link:"https://www.drcassileth.com/plastic-surgery/body/body.html",
        background:"images/advancedLasers.jpg"
    },
    microneedling:{
        title:"Microneedling",
        content:" A minimally invasive skin rejuvenation treatment that uses a specialized device to create tiny punctures in the skin. These micro-injuries stimulate the body's natural healing response and promote collagen production, resulting in smoother, more even-toned skin with fewer fine lines and wrinkles.",
        link:"https://www.shapiroplasticsurgery.com/skin-klinic/skin-rejuvenation/microneedling/",
        background:"images/microneedling.jpg"
    },
    botox:{
        title:"Botox",
        content:"A popular injectable treatment that is used to temporarily relax the facial muscles and reduce the appearance of wrinkles and fine lines. Botox is made from a purified form of botulinum toxin, which blocks nerve signals to the muscles, resulting in a smoother, more youthful-looking appearance.",
        link:"https://www.shapiroplasticsurgery.com/skin-klinic/skin-rejuvenation/microneedling/",
        background:"images/botox.jpg"
    }

}

// Toggles Active and None-Active Class 
proNavItem.forEach(link => {
    link.addEventListener('click', () => {
      // Remove active class from all other links
      proNavItem.forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.classList.remove('active');
        }
      });
      // Toggle active class on clicked link
      link.classList.toggle('active');
    });
    
  });


//   Toggles Content Background 
proNavItem.forEach(link =>{

    link.addEventListener('click',()=>{
       
     //   Set container variables 
     let procedureBg = document.querySelector('.container-procedure-content');
     let procedureTitle = document.getElementById('text-procedure-title');
     let procedureContent = document.getElementById('text-prodecure-content');
     let procedureLinkInnterText = document.getElementById('text-procedure-inner-text');
     let procedureLink = document.getElementById('text-procedure-link');
     let selectedProcedure = link.getAttribute('data-procedure');
     
     // Update procedure content based on selected procedure
     if (procedures[selectedProcedure]) {
         procedureTitle.textContent = procedures[selectedProcedure].title;
         procedureContent.textContent = procedures[selectedProcedure].content;
         procedureLink.setAttribute('href', procedures[selectedProcedure].link);
         procedureBg.style.backgroundImage = `url(${procedures[selectedProcedure].background})`;
         procedureLinkInnterText.textContent = procedures[selectedProcedure].title;
         
     }  
    })

})