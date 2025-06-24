
        // Mobile menu functionality
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
        
        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
        
        // Form submission
        const newsletterForm = document.getElementById('newsletterForm');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Bültenimize abone olduğunuz için teşekkür ederiz!');
                emailInput.value = '';
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
    // waxa ku ddha marka masej ka la diro wa baxay mesejku 
  

  $(document).ready(function(){
    $(".activity-slider").owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots:false,
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        992:{ items:3 }
      }
    });
  });
fetch('/backend/api/add_news.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ title: 'Title here', content: 'Content here' })
}).then(res => res.text()).then(data => alert(data));
fetch('/backend/api/get_news.php')
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('newsContainer');
        data.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
            newsContainer.appendChild(newsItem);
        });
    })
    .catch(error => console.error('Error fetching news:', error));