$(function() {
    // Initialize navbar sticky
    const sticky = xs ? 30 : 117;
    const onScroll = function() {
        if (window.pageYOffset >= sticky) {
            $("#sticky-navbar").addClass("active");
        } else {
            $("#sticky-navbar").removeClass("active");
        }
    };
    window.onscroll = onScroll;
    onScroll();

    // Initialize menu toggle
    $(".menu-toggle").click(function() {
        $(".menu-xs").toggleClass("active");
    });

    // Change collapse icon
    $(".collapse").on("show.bs.collapse hide.bs.collapse", function() {
        $(this)
            .parent()
            .find(".header")
            .find(".rotate")
            .toggleClass("rotate-90");
    });

    // Initialize language selector
    $(".ui.dropdown").dropdown();
});