document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs .tab');
  const prevArrow = document.querySelector('.arrows.left');
  const nextArrow = document.querySelector('.arrows.right');
  let currentIndex = 0;

  

  function updateTab(tab) {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const dataTab = tab.getAttribute('data-tab');
    
    const slides = document.querySelectorAll(`.${dataTab}-slide`);
    slides.forEach((slide) => {
      slide.classList.add('active');
    });
    
    // Hide all slides not matching the current tab
    document.querySelectorAll('.carousel-slide').forEach((slide) => {
      if (!slide.classList.contains(`${dataTab}-slide`)) {
        slide.classList.remove('active');
      }
    });
    
    currentIndex = 0;
    updateCarousel();
  }

  function updateCarousel() {
    const visibleSlides = document.querySelectorAll('.carousel-slide.active');
    if (visibleSlides.length > 0) {
      const offset = -currentIndex * 100;
      document.querySelector('.carousel-track').style.transform = `translateX(${offset}%)`;
    }

    // Verifica se estamos no primeiro slide
    if (currentIndex === 0) {
      prevArrow.classList.add('disabled');  // Adiciona transparência à seta da esquerda
    } else {
      prevArrow.classList.remove('disabled');  // Remove transparência quando não estiver no primeiro slide
    }

    // Verifica se estamos no último slide
    if (currentIndex === visibleSlides.length - 1) {
      nextArrow.classList.add('disabled');  // Adiciona transparência à seta da direita
    } else {
      nextArrow.classList.remove('disabled');  // Remove transparência quando não estiver no último slide
    }
  }

  function nextSlide() {
    const visibleSlides = document.querySelectorAll('.carousel-slide.active');
    if (visibleSlides.length > 0 && currentIndex < visibleSlides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    const visibleSlides = document.querySelectorAll('.carousel-slide.active');
    if (visibleSlides.length > 0 && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => updateTab(tab));
  });

  prevArrow.addEventListener('click', prevSlide);
  nextArrow.addEventListener('click', nextSlide);

  // Initialize
  updateTab(tabs[0]);
});

  //Zoom da imagem em cada slide do carrossel
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
  
    // Seleciona imagens de celular e PC
    const imagesCelular = document.querySelectorAll('.carousel-image-celular img');
    const imagesPC = document.querySelectorAll('.carousel-image-pc img');
  
    // Função para abrir o modal ao clicar na imagem
    function openModal(image) {
      modal.style.display = "block";  // Exibe o modal
      modalImg.src = image.src;       // Define o src da imagem no modal para o da imagem clicada
    }
  
    // Adiciona evento de clique para imagens de celular
    imagesCelular.forEach(image => {
      image.addEventListener('click', function() {
        openModal(this);
      });
    });
  
    // Adiciona evento de clique para imagens de PC
    imagesPC.forEach(image => {
      image.addEventListener('click', function() {
        openModal(this);
      });
    });
  
    // Fechar o modal ao pressionar ESC
    window.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        modal.style.display = "none";  // Esconde o modal
      }
    });
  
    // Fechar o modal ao clicar fora da imagem (opcional)
    modal.addEventListener('click', function() {
      modal.style.display = "none";    // Esconde o modal
    });
  });
  
// FAQ

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.icon');

  if (answer.classList.contains('show')) {
      answer.classList.remove('show');
      icon.textContent = '+';
  } else {
      answer.classList.add('show');
      icon.textContent = '-';
  }

  // Adiciona ou remove a classe ativa
  element.classList.toggle('active');
}

// Rolagem do cabeçalho transparente

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar-custom');
  if (window.scrollY > 50) { // Altere 50 para a distância que preferir
    navbar.classList.add('transparent');
  } else {
    navbar.classList.remove('transparent');
  }
});

// botão de rolagem

// Mostrar o botão quando rolar para baixo
window.onscroll = function() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "flex"; // Exibe o botão
  } else {
    scrollTopBtn.style.display = "none"; // Esconde o botão
  }
};

// Voltar para o topo ao clicar no botão
document.getElementById("scrollTopBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolar suavemente para o topo
});

