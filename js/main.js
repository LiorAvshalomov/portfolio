'use strict'


$(onInit)

function onInit() {
    renderPortfolios()
    renderPortModal()
}

$('.twitter ').html(`<a href="https://twitter.com/AvshalomLior" target="_blank"<i class="fa fa-twitter"></i></a>`)
$('.facebook').html(`<a href="https://www.facebook.com/lioravshlomov" target="_blank"<i class="fa fa-facebook"></i></a>`)
$('.linkedin').html(`<a href="https://www.linkedin.com/in/lioravshalomov" target="_blank"<i class="fa fa-linkedin"></i></a>`)

$("form").submit(function () {
    var elMail = $('#email').val()
    var elSubject = $('#subject').val()
    var elBody = $('#body').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${elMail}&su=${elSubject}&body=${elBody}`)
});

