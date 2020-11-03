$(function () {
  // Function: Upload
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

  // Function: Dropdown
  $(".select .btn-dropdown").click(function () {
    const parent = $(this).parents(".select");
    $(".select").not(parent).removeClass("active");
    parent.toggleClass("active");
  });

  // Function: Select
  $(".select .choices > .item").click(function () {
    $(".select").removeClass("active");
    const parent = $(this).parents(".select");
    const value = $(this).html();
    parent.find(".value").addClass("selected").html(value);
  });

  // Function: Reaction select
  let dislike = "./resources/images/icon/icon-dislike.svg";
  let dislikeActive = "./resources/images/icon/icon-dislike-active.svg";
  let like = "./resources/images/icon/icon-like.svg";
  let likeActive = "./resources/images/icon/icon-like-active.svg";
  $(".reaction .item").click(function () {
    let parent = $(this).parents(".reaction");
    parent.find("img.icon-dislike").attr("src", dislike);
    parent.find("img.icon-like").attr("src", like);

    let img = $(this).find("img");
    img.attr("src", img.data("type") == "like" ? likeActive : dislikeActive);
  });

  // Function: Open social medias
  $(".social-medias-wrapper .icon-share").click(function () {
    $(this).parents(".social-medias-wrapper").toggleClass("active");
  });
});
