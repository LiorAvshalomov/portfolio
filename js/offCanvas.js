'use strict'

$('#cont').click(openCanvas).click(() => setTimeout(openCanvas, 500))

function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}
