
// Class 'active' for nav links
$('nav li').click(function() {
    $('nav li').removeClass('active');
    $(this).addClass('active');
});

// Show tab content
$('.tabs a').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tabs a').removeClass('active');
    $('.tab-content').removeClass('current');

    $(this).addClass('active');
    $("#"+tab_id).addClass('current');
})
