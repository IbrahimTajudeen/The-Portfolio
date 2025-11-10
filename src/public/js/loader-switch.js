

show = () => $('#loading-panel').fadeIn('slow');

hide = () => $('#loading-panel').fadeOut('slow');

$(window).on('load', function () {
    $('#loading-panel').fadeOut('slow');
})

//export { hide, show }