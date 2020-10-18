// $(function() {
//     // Initialize navbar sticky
//     const sticky = xs ? 30 : 117;
//     const onScroll = function() {
//         if (window.pageYOffset >= sticky) {
//             $("#sticky-navbar").addClass("active");
//         } else {
//             $("#sticky-navbar").removeClass("active");
//         }
//     };
//     window.onscroll = onScroll;
//     onScroll();

//     // Initialize menu toggle
//     $(".menu-toggle").click(function() {
//         $(".menu-xs").toggleClass("active");
//     });

//     // Change collapse icon
//     $(".collapse").on("show.bs.collapse hide.bs.collapse", function() {
//         $(this)
//             .parent()
//             .find(".header")
//             .find(".rotate")
//             .toggleClass("rotate-90");
//     });

//     // Initialize language selector
//     $(".ui.dropdown").dropdown();
// });

$(function () {
  $(".file-upload [type='file']").bind("change", function () {
    const parent = $(this).parents(".file-upload");
    const filename = $(this).val();

    if (/^\s*$/.test(filename)) {
      parent.find(".filename").text("No document selected");
    } else {
      parent.find(".filename").text(filename.replace("C:\\fakepath\\", ""));
    }
  });

  $(document).click(function (e) {
    const node = e.target;
    const parent = $(node).parents(".select");

    if (!parent.length) {
      $(".select").not(parent).removeClass("active");
    }
  });

  $(".select .btn-dropdown").click(function () {
    const parent = $(this).parents(".select");
    $(".select").not(parent).removeClass("active");
    parent.toggleClass("active");
  });

  $(".select .choices > .item").click(function () {
    $(".select").removeClass("active");
    const parent = $(this).parents(".select");
    const value = $(this).html();
    parent.find(".value").addClass("selected").html(value);
  });
});
