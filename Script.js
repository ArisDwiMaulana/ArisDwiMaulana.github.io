function SmartAnchorScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetID = this.getAttribute('href');
      const targetElement = document.querySelector(targetID);
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
  
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}

SmartAnchorScroll()