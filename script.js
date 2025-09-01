// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми карточками и секциями
    document.querySelectorAll('.feature-card, .cta-content, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация кнопок
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        btn.addEventListener('click', function() {
            // Добавляем эффект клика
            this.style.transform = 'translateY(0) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }, 150);
        });
    });

    // Анимация логотипа
    const logo = document.querySelector('.nav-logo');
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Эффект параллакса для звезд
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const stars = document.querySelector('.stars');
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Анимация холокрона при наведении
    const holocron = document.querySelector('.holocron');
    if (holocron) {
        holocron.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.2)';
        });
        
        holocron.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'scale(1)';
        });
    }

    // Интерактивные карточки
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#ff6b35';
            this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#00d4ff';
            this.style.boxShadow = 'none';
        });
    });

    // Анимация заголовка при загрузке
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-50px)';
        line.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 300);
    });

    // Анимация подзаголовка
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(20px)';
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 900);
    }

    // Анимация кнопок героя
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(20px)';
        heroButtons.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 1200);
    }

    // Эффект печатающегося текста для подзаголовка
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Запускаем эффект печатающегося текста через 2 секунды
    setTimeout(() => {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const originalText = subtitle.textContent;
            typeWriter(subtitle, originalText, 30);
        }
    }, 2000);

    // Добавляем эффект свечения для активных элементов навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('login-btn')) {
                this.style.textShadow = '0 0 15px #00d4ff';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('login-btn')) {
                this.style.textShadow = this.classList.contains('active') ? '0 0 10px #00d4ff' : 'none';
            }
        });
    });

    // Анимация появления футера
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(30px)';
        footer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Показываем футер когда он появляется в поле зрения
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        footerObserver.observe(footer);
    }

    // Добавляем звуковые эффекты (опционально)
    function playHoverSound() {
        // Здесь можно добавить звук при наведении
        // const audio = new Audio('hover-sound.mp3');
        // audio.volume = 0.1;
        // audio.play();
    }

    // Привязываем звук к интерактивным элементам
    document.querySelectorAll('.btn, .nav-link, .feature-card').forEach(el => {
        el.addEventListener('mouseenter', playHoverSound);
    });

    // Анимация счетчика для статистики (если понадобится в будущем)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Сохраняем функцию для использования в будущем
    window.animateCounter = animateCounter;

    console.log('🚀 Krenta Cristall - Сила в знаниях!');
    console.log('✨ Сайт успешно загружен и готов к работе');
});
