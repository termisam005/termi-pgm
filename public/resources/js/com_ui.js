/*natoin_bar*/
// $(function () {
//     $(".nation_bar").click(function () {
//         $(".nation_bar").removeClass("on");
//         $(this).addClass("on");
//     });
// });

/*tab*/
$(function () {
    $(".tab").click(function () {
        $(".tab").removeClass("on");
        $(this).addClass("on");
    });
});

$(function () {
    $(".verstab").click(function () {
        $(".verstab").removeClass("on");
        $(this).addClass("on");
    });
});

$(function () {
    $(".btbox").click(function () {
        $(this).toggleClass("on");
    });
});

/*art*/
$(function () {
    $(".art").click(function () {
        $(".art").removeClass("on");
        $(this).addClass("on");
    });
});

$(function () {
    $(".go").click(function () {
        $(".go").removeClass("on");
        $(this).addClass("on");
    })
});

/*gr_fixmenu*/
// $(function () {
//     $(".btn_menu").click(function () {
//         $(".fixmenu_bar").slideToggle(200);
//     });
// });

/*fixmenu*/
// $(function () {
//     $(".fixmenu").hover(
//         function () {
//             $(this).children(".hidden_menu").stop().animate({
//                 width: "toggle"
//             }, 200);
//         }
//     );
// });

/*nav_menu*/
$(function () {
    $(".nav_menu").click(function () {
        $(".nav_menu").removeClass("on");
        $(this).addClass("on");
    });
});

/*hd_icline*/
// $(function () {
//     $(".circle_p").click(function () {
//         $(this).parents(".hcircle").toggleClass("on");
//         $(".hidd_dark").css("display", "block");
//     });
//     $(".hidd_dark").click(function () {
//         $(this).parents(".hcircle").removeClass("on");
//     });
//     $(".flags").click(function () {
//         $(this).parents(".hcircle").removeClass("on");
//     });
// });

/*hcircle*/
// let currenMenu;
// let cicZone = document.querySelectorAll('.hcircle');
// let theDark = document.querySelector('.hidd_dark');

// function circleHandler() {
//     if (currenMenu) {
//         currenMenu.classList.remove('on');
//     }
//     this.classList.add('on');
//     currenMenu = this;
//     theDark.style.display = "block";

//     theDark.addEventListener('click', function () {
//         currenMenu.classList.remove('on');
//         this.style.display = "none";
//     });
// }
// for (var i = 0; i < cicZone.length; i++) {
//     cicZone[i].addEventListener('click', circleHandler);
// }

/*natoin_bar*/
// let currentBar;
// let nationBar = document.querySelectorAll('.nation_bar');

// function nationHandler() {
//     if (currentBar) {
//         currentBar.classList.remove('on');
//     }
//     this.classList.add('on');
//     currentBar = this;
// }
// for (var i = 0; i < nationBar.length; i++) {
//     nationBar[i].addEventListener('click', nationHandler);
// }

/*gr_message*/
// $(function () {
//     $(".btn_message").click(function () {
//         $(".gr_message").stop().animate({
//             width: "toggle"
//         }, 150);
//     });
// });

/*ex_button*/
// $(function () {
//     $(".button").click(function () {
//         $(".button").removeClass("button_on");
//         $(this).addClass("button_on");
//     });
// });
