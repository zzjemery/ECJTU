if (window.screen.width > 992) {
    $("body").css("overflow", "hidden");
    $("nav.pc").css("display", "block");
    $(".mobile").remove();
    (function() {
        var maxWidth = window.innerWidth;
        var maxHeight = window.innerHeight;
        var index = 1;
        var dotWidth = parseInt($("#dots").css("width"));

        var dotWidth = parseInt($("#dots").css("width"));
        var isFirst = true;
        var arr = [];
        $("#dots>li").css({
            "width": dotWidth + "px",
            "height": dotWidth + "px",
            "margin-top": dotWidth * 2 + "px",
        });
        $("#dots").css("display", "block");

        $("nav>ul>li>a").on("mouseenter", function() {
            $(this).css("font-weight", "700").children(".cn").css("opacity", "1").siblings().css("opacity", "0");
            $(this).siblings(".dropDown").css("display", "block");
        }).on("mouseleave", function() {
            $(this).css("font-weight", "400").children(".en").css("opacity", "1").siblings().css("opacity", "0");
            $(this).siblings(".dropDown").css("display", "none");
        });
        $(".dropDown").on("mouseenter", function() {
            $(this).siblings("a").css("font-weight", "700").children(".cn").css("opacity", "1").siblings().css("opacity", "0");
            $(this).css("display", "block");
        }).on("mouseleave", function() {
            $(this).siblings("a").css("font-weight", "400").children(".en").css("opacity", "1").siblings().css("opacity", "0");
            $(this).css("display", "none");
        });

        scrollScreens(index);
        $(".screens>li,.bgPic").css({
            "width": maxWidth,
            "height": maxHeight
        });
        $("#bg6_1,#bg6_2,#bg6_3,#bg6_4").css({
            "height": maxHeight
        });
        $(window).resize(function() {
            maxWidth = window.innerWidth;
            maxHeight = window.innerHeight;
            dotWidth = parseInt($("#dots").css("width"));
            $(".screens li,.bgPic").css({
                "width": maxWidth,
                "height": maxHeight
            });
            $("#bg6_1,#bg6_2,#bg6_3,#bg6_4").css({
                "height": maxHeight
            });
            $("#dots li").css({
                "width": dotWidth + "px",
                "height": dotWidth + "px",
                "margin-top": dotWidth * 2 + "px"
            });
            $(".partners>dl>dd>ul>li").css({
                "width": parseInt($(".partners>dl>dd>ul").css("width")) * 23 / 100 + "px",
                "height": parseInt($(".partners>dl>dd>ul").css("height")) * 33 / 100 + "px"
            });
            scrollScreens(index);
        });

        // 滚动翻页
        var scrollFunc = function(e) {
            e = e || window.event;
            if (e.wheelDelta) { //IE/Opera/Chrome     
                if (e.wheelDelta == 120) { //向上滚动事件
                    index > 1 && (index = index - 1) && scrollScreens(index);
                } else { //向下滚动事件  
                    index < 7 && (index = index + 1) && scrollScreens(index);
                }
            } else if (e.detail) { //Firefox   
                if (e.detail == -3) { //向上滚动事件  
                    index > 1 && (index = index - 1) && scrollScreens(index);
                } else { //向下滚动事件  
                    index < 7 && (index = index + 1) && scrollScreens(index);
                }
            }
        };
        if (document.addEventListener) { document.addEventListener('DOMMouseScroll', scrollFunc, false); }
        window.onmousewheel = scrollFunc; //IE/Opera/Chrome

        // 点击圈圈翻页
        $("#dots li:not(.cur)").on("click", function() {
            index = parseInt($(this).html());
            scrollScreens(index);
        });

        // 点击翻页按钮翻页
        $("#btns").children().on("click", function() {
            if ($(this).hasClass("up")) {
                index > 1 && (index = index - 1) && scrollScreens(index);
            } else {
                index < 7 && (index = index + 1) && scrollScreens(index);
            }
        });

        function scrollScreens(index) {
            // console.log(index);
            if (document.addEventListener) { document.addEventListener('DOMMouseScroll', null, false); }
            window.onmousewheel = null; //IE/Opera/Chrome
            setTimeout(function() {
                if (document.addEventListener) { document.addEventListener('DOMMouseScroll', scrollFunc, false); }
                window.onmousewheel = scrollFunc; //IE/Opera/Chrome 
            }, 1000);

            $(".screens").css("transform", "translateY(-" + ((index - 1) * maxHeight + "px)"));

            var dot = $("#dots").children(".cur");
            var dotHeight = parseInt(dot.css("height")) + parseInt(dot.css("margin-top"));
            dot.css({
                "transform": "translateY(" + ((index - 1) * dotHeight + "px)"),
                "opacity": "0"
            });
            setTimeout(function() {
                dot.css({
                    "opacity": "1"
                });
            }, 400);

            switch (index) {
                case 1: //翻到第一屏时的动画初始状态
                    $(".aboutUs>:nth-child(4),.aboutUs>:nth-child(5),.aboutUs>:nth-child(6)").css({
                        "opacity": "0",
                    });
                    break;
                case 2:
                    $(".genuine").children().eq(3).children().css({
                        "width": "0px",
                        "opacity": "0.2"
                    });
                    $(".genuine").children().eq(4).css({
                        "top": "100%",
                        "opacity": "0.2"
                    });
                    $(".genuine").children().eq(5).css({
                        "left": "80%",
                        "opacity": "0"
                    });
                    break;
                case 3:
                    $(".idea").children().eq(3).css({
                        "left": "0",
                        "opacity": "0.2"
                    });
                    $(".idea").children().eq(4).css({
                        "top": "0",
                        "opacity": "0.2"
                    });
                    $(".idea").children().eq(5).css({
                        "top": "20%",
                        "left": "100%",
                        "opacity": "0.9"
                    });
                    break;
                case 4:
                    $(".tech").children().eq(3).css({
                        "top": "-100%",
                        "opacity": "0"
                    });
                    $(".tech").children().eq(4).css({
                        "top": "100%",
                        "opacity": "0.2"
                    });
                    break;
                case 5:
                    $(".sell").children().eq(3).css({
                        "top": "-100%",
                        "opacity": "0"
                    });
                    $(".sell").children().eq(4).css({
                        "left": "0",
                        "opacity": "0"
                    });
                    $(".sell").children().eq(5).css({
                        "transition": "opacity 0.6s,transform 0.5s",
                        "transform": "scale(6)",
                        "opacity": "0"
                    });
                    $(".sell").children().eq(6).css({
                        "transition": "opacity 0.6s,transform 0.4s",
                        "transform": "scale(6)",
                        "opacity": "0"
                    });
                    break;
                case 6:
                    $(".case>div>a>div").css({
                        "top": "100%",
                        "opacity": "0",
                    });
                    break;
                case 7:
                    if (isFirst) {
                        $(".partners>dl>dd>ul>li>div").css({
                            "transition": "transform 0.3s, opacity 0.2s",
                            "transform": "translateY(100px)",
                            "opacity": "0"
                        });
                    }
                    break;
            }
            setTimeout(function() {
                switch (index) {
                    case 1: //翻到第一屏时的动画效果
                        $(".aboutUs>:nth-child(4),.aboutUs>:nth-child(5)").animate({
                            "opacity": "1"
                        }, 400);
                        setTimeout(function() {
                            $(".aboutUs>:nth-child(6)").animate({
                                "opacity": "1"
                            }, 500);
                        }, 500);
                        break;
                    case 2:
                        $(".genuine").children().eq(3).children().animate({
                            "width": "100%",
                            "opacity": "1"
                        }, 800);
                        $(".genuine").children().eq(4).animate({
                            "top": "32%",
                            "opacity": "1"
                        }, 800);
                        $(".genuine").children().eq(5).animate({
                            "left": "73%",
                            "opacity": "1"
                        }, 800);
                        break;
                    case 3:
                        $(".idea").children().eq(3).animate({
                            "left": "32%",
                            "opacity": "1"
                        }, 800);
                        $(".idea").children().eq(4).animate({
                            "top": "30%",
                            "opacity": "1"
                        }, 800);
                        $(".idea").children().eq(5).animate({
                            "top": "5%",
                            "left": "58%",
                            "opacity": "1"
                        }, 1500);
                        break;
                    case 4:
                        $(".tech").children().eq(3).animate({
                            "top": "37%",
                            "opacity": "1"
                        }, 800);
                        $(".tech").children().eq(4).animate({
                            "top": "20%",
                            "opacity": "1"
                        }, 800);
                        break;
                    case 5:
                        setTimeout(function() {
                            $(".sell").children().eq(3).animate({
                                "top": "27%",
                                "opacity": "1"
                            }, 800);
                        }, 0);
                        setTimeout(function() {
                            $(".sell").children().eq(4).animate({
                                "left": "36%",
                                "opacity": "1"
                            }, 800);
                        }, 250);
                        setTimeout(function() {
                            $(".sell").children().eq(5).css({
                                "transform": "scale(1)",
                                "opacity": "1"
                            });
                        }, 600);
                        setTimeout(function() {
                            $(".sell").children().eq(6).css({
                                "transform": "scale(1)",
                                "opacity": "1"
                            });
                        }, 850);
                        break;
                    case 6:
                        setTimeout(function() {
                            $(".case>div>a").children("div").eq(0).animate({
                                "top": "34%",
                                "opacity": "1",
                            }, 600);
                        }, 0);
                        setTimeout(function() {
                            $(".case>div>a").children("div").eq(1).animate({
                                "top": "34%",
                                "opacity": "1",
                            }, 600);
                        }, 300);
                        setTimeout(function() {
                            $(".case>div>a").children("div").eq(2).animate({
                                "top": "34%",
                                "opacity": "1",
                            }, 600);
                        }, 600);
                        setTimeout(function() {
                            $(".case>div>a").children("div").eq(3).animate({
                                "top": "34%",
                                "opacity": "1",
                            }, 600);
                        }, 900);
                        break;
                    case 7:
                        if (isFirst) {
                            for (var i = 0; i < 12; i++) {
                                arr[i] = setTimeout(function(i) {
                                    return function() {
                                        $(".partners>dl>dd>ul>li>div").eq(i).css({
                                            "transform": "translateY(0)",
                                            "opacity": "1"
                                        });
                                    }
                                }(i), i * 200);
                            }
                        }
                        isFirst = false;
                        setTimeout(function() {
                            $(".partners>dl>dd>ul>li>div").removeAttr("style");
                        }, 2500);
                        break;
                }
            }, 800);
        }
        $("img").attr("draggable", "false");
    })()
} else {
    $("body").removeAttr("style");
    $(".pc").remove();
    $("nav.mobile").css({
        "position": "relative",
        "padding": "10px 0",
        "display": "block"
    }).find(".navbar-brand").css("padding-top", "0");

    var t = 0;
    var arr = [];
    var arrKey = [1, 1, 1, 1, 1, 1];
    var arrScroll = [];
    $("nav.mobile,.main.mobile>div").each(function() {
        t += $(this).outerHeight() / $("body").height();
        arr.push(t);
    });
    $(".main.mobile>div .tab-text").eq(0).css({
        "transform": "translateY(0)",
        "opacity": "1"
    });
    // arr = arr.slice(1);
    arr.reduce(function(pre, cur) {
        arrScroll.push(parseInt($("body").height() * ((cur - pre) * 1 / 3 + pre)));
        return cur;
    });
    // console.log(arr);
    // console.log(arrScroll);
    $(window).on("scroll", function(ev) {
        var scrTop = $(window).scrollTop();
        // console.log(scrTop);
        if (scrTop > arrScroll[0] && arrKey[1] === 1) {
            arrKey[1] = 0;
            $(".main.mobile>div .tab-text").eq(1).css({
                "transform": "translateY(0)",
                "opacity": "1"
            });
        } else if (scrTop > arrScroll[1] && arrKey[2] === 1) {
            arrKey[2] = 0;
            $(".main.mobile>div .tab-text").eq(2).css({
                "transform": "translateY(0)",
                "opacity": "1"
            });
        } else if (scrTop > arrScroll[2] && arrKey[3] === 1) {
            arrKey[3] = 0;
            $(".main.mobile>div .tab-text").eq(3).css({
                "transform": "translateY(0)",
                "opacity": "1"
            });
        } else if (scrTop > arrScroll[3] && arrKey[4] === 1) {
            arrKey[4] = 0;
            // console.log(4);
            $(".main.mobile>div .tab-text").eq(4).css({
                "transform": "translateY(0)",
                "opacity": "1"
            });
        }
    });
}