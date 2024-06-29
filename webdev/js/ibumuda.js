// dropdown navbar menu //

document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector(".menu-icon");
    var navMenu = document.querySelector(".nav-menu");

    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});


//faqs//

var acc = document.getElementsByClassName('accordion');

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        var panel = this.nextElementSibling;

        for (var j = 0; j < acc.length; j++) {
            var otherPanel = acc[j].nextElementSibling;
            if (otherPanel !== panel) {
                otherPanel.style.display = 'none';
                acc[j].classList.remove('active');
            }
        }

        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        this.classList.toggle('active');
    });
}