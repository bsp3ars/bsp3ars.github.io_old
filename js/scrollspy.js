// Cache selectors
var lastId;
topMenu = $("#navbarMenuHeroA");
hamburger = $(".navbar-burger");
topMenuHeight = topMenu.innerHeight();
// All list items
menuItems = topMenu.find(".page");
// Anchors corresponding to menu items
scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
});
//console.log(scrollItems);
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
    if (document.getElementById("navbarMenuHeroA").classList.contains("is-active")) {
        hamburger.click();
    }
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    window.location.toString().split("%23")[0];
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        cur = scrollItems;
    }
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;

        // Set/remove active class
        menuItems.removeClass("is-active");
        menuItems.filter("[href='#" + id + "']").addClass("is-active");
    }
});