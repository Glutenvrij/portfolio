(function() {
    $(document).ready(function(){
        
        $('li').each(function(i) {
            if ($(this).find("a").hasClass("active")) {
                $(this).find("ul").removeClass("hidden")
            }
        });
    });
})();

// window.onload = function() {
//     var val = document.getElementById('nav-link');
//     if(val.classList.contains('active')){
//         this.
//     }
// };
