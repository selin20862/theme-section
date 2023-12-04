


// info
$(document).ready(function () {
    $(".dropdown-link").click(function (event) {
        event.preventDefault(); // Empêche le lien de naviguer vers une autre page
        var dropdownContent = $(this).next(".dropdown-conte");

        dropdownContent.slideToggle();
        dropdownContent.toggleClass("custom-dropdown");

        $(".custom-dropdown").css({
            "display": "flex",
            "justify-content": "flex-end",
            "flex-direction": "column"
        });
    });
});

$(document).ready(function () {
    const openBtn = $('.svg-filtre-open');
    const closeBtn = $('.svg-filtre-close');
    const filtre = $('.filtre');
    const animationDuration = 0.2;

    openBtn.on('click', function (e) {
        e.preventDefault();
        filtre.toggle();
        if (filtre.is(':visible')) {
            gsap.to(filtre, { duration: animationDuration, opacity: 1, ease: 'power2.out' });
            closeBtn.toggle();
            openBtn.toggle();
        }
    });

    closeBtn.on('click', function (e) {
        e.preventDefault();
        gsap.to(filtre, { duration: animationDuration, opacity: 0, ease: 'power2.in', onComplete: hideFiltre });
        closeBtn.toggle();
        openBtn.toggle();
    });

    function hideFiltre() {
        filtre.hide();
    }

    var imageWidth = $('.section-detail img').width();
    var containerWidth = $('.section-detail').width();

    if (window.innerWidth >= 992 && imageWidth > 0.5 * containerWidth) {
        console.log('L\'image est plus grande que 50% du conteneur');

        $('.div-detail').css({
            'position': 'absolute',
            'left': '0',
            'bottom': '0',
            'width': '50%'
        });

        $('.div-detail a:first-child').on('click', function (e) {
            e.preventDefault();
            $(this).fadeOut();
            $('.div-detail a:nth-child(2)').fadeIn().css('display', 'flex');
            $('.div-detail h1, .div-detail p').fadeOut();
            $('.div-detail').animate({ width: '30%', height: '30%' });
        });

        $('.div-detail a:nth-child(2)').on('click', function (e) {
            e.preventDefault();
            $(this).fadeOut();
            $('.div-detail a:first-child').fadeIn();
            $('.div-detail h1, .div-detail p').fadeIn();
            $('.div-detail').animate({ width: '50%', height: '60%' });
        });

    } else if (imageWidth < 0.5 * containerWidth) {
        console.log('L\'image est plus petite que 50% du conteneur');

        $('.div-detail a:first-child').css({
            'display': 'none'
        });
    }


    if (window.innerWidth >= 992) {
        const sectionTravaux = document.querySelector('.sectiontravaux');
        let sectionTravauxWidth = sectionTravaux.offsetWidth;
        let amountToScroll = sectionTravauxWidth - window.innerWidth;

        gsap.to(sectionTravaux, {
            x: -amountToScroll,
            scrollTrigger: {
                trigger: sectionTravaux,
                start: "top top",
                end: "+=100%",
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        });

        const sectionProjets = document.querySelector('.sectionprojets');
        let sectionProjetsWidth = sectionProjets.offsetWidth;
        let amountToScroll2 = sectionProjetsWidth - window.innerWidth;

        gsap.to(sectionProjets, {
            x: -amountToScroll2,
            scrollTrigger: {
                trigger: sectionProjets,
                start: "top top",
                end: "+=100%",
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        });

    }







});

