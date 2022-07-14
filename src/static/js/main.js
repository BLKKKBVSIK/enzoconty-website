let lastQuickview = "nil";

function calculateMyAge(dateString) {
    var birthday = new Date(dateString);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function quickviewlang(quickviewName, quickviews) {
    if ($('div#' + quickviewName + '.is-active').length) {
        $('div#' + quickviewName + '.is-active').removeClass('is-active');
        //document.querySelectorAll("body :not(.unblur)")
        //    .forEach(element => element.style.filter = "blur(0px)");
    } else {
        $('div#' + lastQuickview + '.is-active').removeClass('is-active');
        lastQuickview = quickviewName;
        $('div#' + quickviewName).addClass('is-active');
        var iframe = $("#"+ quickviewName +"Iframe");
        iframe.attr("src", iframe.data("src"));
        //document.querySelectorAll("body :not(.unblur)")
        //    .forEach(element => element.style.filter = "blur(2px)");
    }
}

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
    $('div#' + lastQuickview + '.is-active').removeClass('is-active');
    map.invalidateSize()
    popup.setContent("<span>Right now in<br><b>Saint-Petersburg</b></span>");
    marker.bindPopup(popup);
    marker.openPopup();
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.navbar').css('background', '#12206D');
        $('#hire-button').fadeIn();
        $('#devname').fadeIn();
    } else {
        $('.navbar').css('background', 'transparent');
        $('#hire-button').fadeOut();
        $('#devname').fadeOut();
    }
});

