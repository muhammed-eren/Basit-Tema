var toggleButton = document.getElementById('cizgi');
var menu = document.querySelector('.navbar');

toggleButton.addEventListener('click', function () {
    menu.classList.toggle('active');
});


ScrollReveal().reveal(".baslik",
        {
            duration:1000,
            distance:"100px",
            delay:200,
            origin:"top",
        }
        );
        ScrollReveal().reveal(".marka_baslik",
        {
            delay:200,
            duration:2000
        }
        );
        ScrollReveal().reveal(".hakkimizda_icerik",
        {
            distance:"100px",
            delay:200,
            duration:1000
        }
        );
        ScrollReveal().reveal(".cards",
        {
            distance:"100px",
            delay:200,
            origin:"left",
            duration:1000
        }
        );
        ScrollReveal().reveal(".iframe",
        {
            delay:200,
            scale:0.1,
            duration:1000
        }
        );
        ScrollReveal().reveal(".son",
        {
            distance:"100px",
            delay:200,
            duration:1000
        }
        );
        ScrollReveal().reveal(".icerik",
        {
            delay:200,
            scale:0.1,
            duration:1000,
        }
        );