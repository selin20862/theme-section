


// info
$(document).ready(function() {
    $(".dropdown-link").click(function(event) {
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

$(document).ready(function() {
    const openBtn = $('.svg-filtre-open');
    const closeBtn = $('.svg-filtre-close');
    const filtre = $('.filtre');
    const animationDuration = 0.2;

    openBtn.on('click', function(e) {
        e.preventDefault();
        filtre.toggle();
        if (filtre.is(':visible')) {
            gsap.to(filtre, { duration: animationDuration, opacity: 1, ease: 'power2.out' });
            closeBtn.toggle();
            openBtn.toggle();
        }
    });

    closeBtn.on('click', function(e) {
        e.preventDefault();
        gsap.to(filtre, { duration: animationDuration, opacity: 0, ease: 'power2.in', onComplete: hideFiltre });
        closeBtn.toggle();
        openBtn.toggle();
    });

    function hideFiltre() {
        filtre.hide();
    }
});
// fin info

// menubar
function openNav() {
    document.getElementById("mySidebar").style.left = "0"; /* Slide the sidebar in */
    document.getElementById("mySidebar").style.width = "100%"; /* Set the width of the sidebar to 100% */
   
}
function closeNav() {
    document.getElementById("mySidebar").style.left = "0"; /* Slide the sidebar in */
    document.getElementById("mySidebar").style.width = "0"; /* Set the width of the sidebar to 100% */
   
}