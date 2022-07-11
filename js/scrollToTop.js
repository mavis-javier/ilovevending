const scroll = document.getElementById('top');

scroll.addEventListener("click", function() {
    $("html, body").animate({scrollTop: 0}, "slow");
});