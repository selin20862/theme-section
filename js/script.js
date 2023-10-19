


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
