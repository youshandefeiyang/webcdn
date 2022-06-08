(function ($) {
  $.fn.mChange = function (options) {
    var w1, np, ns, v;
    var opts = $.extend({}, $.fn.mChange.defaults, options);
    //初始化
    var c = $(this);
    var f = c.parent();
    var n = $(opts.nav);
    var i = 0;
    var sw = 1;
    c.hide();

    if (opts.navs) {
      w1 =
        n.outerWidth() +
        (parseInt(n.css("margin-left")) ? parseInt(n.css("margin-left")) : 0) +
        (parseInt(n.css("margin-right")) ? parseInt(n.css("margin-right")) : 0);
      np = $(opts.nav).parent();
      n.wrapAll("<div class='scroll' style='height:100%;'></div>");
      ns = np.find(".scroll");
      ns.width(n.size() * w1);
      np.stop().animate({ scrollLeft: 0 }, 100);
    }

    function run() {
      if (sw) {
        i++;
        i = change(i);
      }
    }

    function change(idx) {
      if (c.size() > 1 || idx == "begin") {
        sw = 0;
        if (idx == "begin") {
          idx = 0;
          speed = 0;
        } else {
          speed = opts.speed;
          c.stop().fadeOut(speed);
        }

        n.removeClass("now");
        if (idx == c.size()) {
          idx = 0;
        }
        if (idx < 0) {
          idx = c.size() - 1;
        }

        c.eq(idx)
          .stop()
          .fadeIn(speed, function () {
            if (typeof opts.animates == "function") {
              opts.animates(idx); //执行自定义动画
            }
            sw = 1;
          });
        n.eq(idx).addClass("now");
        if (opts.navs) {
          autonav(idx);
        }

        return idx;
      }
    }
    change("begin");

    if (opts.auto == 1) {
      v = setInterval(run, opts.time);
    }

    if (opts.mousestop == 1) {
      c.hover(
        function () {
          sw = 0;
        },
        function () {
          sw = 1;
        }
      );
    }

    //导航溢出部分滑动显示
    function autonav(idx) {
      np.animate({ scrollLeft: idx * w1 });
    }

    n.each(function (index, element) {
      $(this).bind(opts.nave, function () {
        if (sw == 1 && c.eq(index).size() > 0) {
          change(index);
          i = index;
          if (opts.auto) {
            clearInterval(v);
            v = setInterval(run, opts.time);
          }
        }
      });
    });

    $(opts.prev).click(function () {
      if (sw == 1) {
        if (opts.cycle == 1 || (opts.cycle == 0 && i > 0)) {
          i--;
          i = change(i);
          if (opts.auto == 1) {
            clearInterval(v);
            v = setInterval(run, opts.time);
          }
        }
      }
    });
    $(opts.next).click(function () {
      if (sw == 1) {
        if (opts.cycle == 1 || (opts.cycle == 0 && i < c.size() - 1)) {
          i++;
          i = change(i);
          if (opts.auto) {
            clearInterval(v);
            v = setInterval(run, opts.time);
          }
        }
      }
    });

    if (opts.mousewheel) {
      f.mousewheel(function (event, delta, deltaX, deltaY) {
        if (delta < 0) {
          if (sw == 1) {
            if (opts.cycle == 1 || (opts.cycle == 0 && i < c.size() - 1)) {
              i++;
              i = change(i);
              if (opts.auto) {
                clearInterval(v);
                v = setInterval(run, opts.time);
              }
            }
          }
        } else {
          if (sw == 1) {
            if (opts.cycle == 1 || (opts.cycle == 0 && i > 0)) {
              i--;
              i = change(i);
              if (opts.auto) {
                clearInterval(v);
                v = setInterval(run, opts.time);
              }
            }
          }
        }
        event.stopPropagation();
        event.preventDefault();
      });
    }
  };
  $.fn.mChange.defaults = {
    auto: 1,
    arrow: 1,
    speed: 800,
    time: 5000,
    nav: null,
    nave: "click",
    navs: 0,
    prev: null,
    next: null,
    cycle: 1,
    mousestop: 0,
    mousewheel: 0,
    animates: null,
  };
})(jQuery);
$(function () {
  $(".ww_b dd a").click(function () {
    $(".nav_menu a.close").click();
  });
});
$.post("get_tq2.html" + "?" + Math.random(), {}, function (data) {
  $("#tq").html(data);
});
var var_kw = "";
$(".kw").on("paste", contentHandler);

function contentHandler(e) {
  var _this = $(this);
  setTimeout(function () {
    var_kw = _this.val();
  }, 200);
}
$(".ok").on("click", function () {
  kw = $(".kw").val();

  if (kw == "" || kw == "搜索关键词...") {
    if (var_kw == "") {
      my_alert("请输入关键词");
      return false;
    } else {
      kw = var_kw;
    }
  }
  var souce_title = "文创";
  window.open("/fully_search/" + kw + "/" + souce_title);
});

$(".kw").on("keyup", function (e) {
  if (e.keyCode == 13) {
    $(".ok").click();
  } else {
    var_kw = $(this).val();
  }
});

// CONFIG.checkLogin(function(user_id, c) {
// 	$('.login_1 .ul').html(
// 		'<span class="a" onclick="window.location.href=\'/member/index.html\'">个人中心</span><span class="a logout_li">退出</span>'
// 		);
// });
var get_sso = localStorage.getItem("get_sso");
if (get_sso) {
  $.post(
    "getThirdKey.html",
    {
      uid: get_sso,
    },
    function (data1) {
      var memberLoginSource = "";
      if (data1.status == 1) {
        if (data1["source"] == "qq") {
          memberLoginSource = "QQ";
        } else if (data1["source"] == "wechat") {
          memberLoginSource = "微信";
        } else if (data1["source"] == "sina") {
          memberLoginSource = "微博";
        }
      } else {
        memberLoginSource = "正常";
      }
      $.get(
        "passport/get_sso.json",
        {
          uid: get_sso,
        },
        function (data) {
          if (data.status) {
            $.each(data.urls, function (i, p) {
              $.ajax({
                url: p,
                type: "GET",
                data: data.user,
                dataType: "jsonp",
                success: function (data) {},
              });
            });
            localStorage.removeItem("get_sso");
            if (localStorage.getItem("get_login")) {
              dplus.track("UM_Event_LoginSuc", {
                nickname: data["user"]["username"],
                user_id: CONFIG.UID,
              });
              aplus_queue.push({
                action: "aplus.record",
                arguments: [
                  "Um_Event_Login",
                  "OTHER",
                  {
                    Um_Key_AccountNumber: data["user"]["username"],
                    Um_Key_LoginMode: memberLoginSource,
                    page_name: "LoginPage",
                  },
                ],
              });
              localStorage.removeItem("get_login");
            }
          }
        }
      );
    }
  );
}

$(".logout_li").click(function () {
  $.get("passport/get_uid.html", function (data) {
    localStorage.setItem("get_sso", data["uid"]);
    window.location.href = "passport/login.html";
  });
});
$(".sina").click(function () {
  window.location.href =
    "https://api.weibo.com/oauth2/authorize?client_id=1755211118&amp;redirect_uri=https%3A%2F%2Fwww.dpm.org.cn%2Fthird%2Fcallback%2Fsina.html";
});
$(".nav_main a,.nav_child a, .nav_menu .ww_b .list a").click(function () {
  var nav_level = "一级导航";
  if (
    $(this).parents(".nav_child").length > 0 ||
    $(this).parents("dl").length > 0
  ) {
    var nav_level = "二级导航";
  }
  aplus_queue.push({
    action: "aplus.record",
    arguments: [
      "Um_Event_NavigationClick",
      "CLK",
      {
        Um_Key_NavigationName: $(this).text(),
        Um_Key_NavigationLevel: nav_level,
        page_name: "ggzw_CreativePage",
      },
    ],
  });
});
$(".meg a,.meg .a").click(function () {
  dplus.track("MessageClick", {
    ClickName: "点击导航“留言”按钮",
  });
  // const {aplus_queue} = window;
  aplus_queue.push({
    action: "aplus.record",
    arguments: [
      "Um_Event_CoreClick",
      "CLK",
      {
        Um_Key_FocusName: "点击导航“留言”按钮",
        page_name: "ggzw_CreativePage",
      },
    ],
  });
});
$(".login_1 .a").click(function () {
  dplus.track("按钮", {
    导航按钮: "会员-" + $(this).text(),
  });
  aplus_queue.push({
    action: "aplus.record",
    arguments: [
      "Um_Event_CoreClick",
      "CLK",
      {
        Um_Key_FocusName: "会员-" + $(this).text(),
        page_name: "ggzw_CreativePage",
      },
    ],
  });
});
$(".lang .a,.nav_menu .ww_b .box0 a").click(function () {
  dplus.track("按钮", {
    导航按钮: "语言-" + $(this).text(),
  });
  aplus_queue.push({
    action: "aplus.record",
    arguments: [
      "Um_Event_CoreClick",
      "CLK",
      {
        Um_Key_FocusName: "语言-" + $(this).text(),
        page_name: "ggzw_CreativePage",
      },
    ],
  });
});
$(window).on("load", function () {
  setTimeout(function () {
    window._bd_share_config = {
      share: [],
    };
    with (document)
      (0)[
        ((getElementsByTagName("head")[0] || body).appendChild(
          createElement("script")
        ).src =
          "static/api/js/shareb662.js?cdnversion=" + ~(-new Date() / 36e5))
      ];
  }, 3000);
});
$(function () {
  var img_diwen = "./image/s62985a1802668.jpg";
  $(".winchance").css({
    "background-image": "url('" + img_diwen + "')",
  });
});
$(function () {
  $(".aliyun_button a").on("click", function () {
    if (
      $(this).attr("href") != undefined &&
      $(this).attr("href") != "javascript:void(0);"
    ) {
      var title = $(this).text();
      if (title != "") {
        dplus.track("按钮", {
          名称: title,
        });
        aplus_queue.push({
          action: "aplus.record",
          arguments: [
            "Um_Event_ProductClick",
            "CLK",
            {
              Um_Key_ButtonName: title,
              page_name: "ggzw_CreativePage",
            },
          ],
        });
        var link = $(this).attr("href");
        if (link) {
          window.open(link);
        }
      }
    }
    return false;
  });
});
$(function () {
  $(".aliyun_button2 .a1,.aliyun_button2 .a2").on("click", function () {
    if (
      $(this).attr("href") != undefined &&
      $(this).attr("href") != "javascript:void(0);"
    ) {
      var title = $(this).parents(".textwarp").find(".public-title a").text();
      aplus_queue.push({
        action: "aplus.record",
        arguments: [
          "Um_Event_AppDownloadClick",
          "CLK",
          {
            Um_Key_AppName: title,
            Um_Key_ButtonName:
              $(this).hasClass("a1") == true ? "IOS下载" : "Android下载",
            page_name: "ggzw_CreativePage",
          },
        ],
      });
      var link = $(this).attr("href");
      if (link) {
        window.open(link);
      }
    }
    return false;
  });
});
$(function () {
  $(".winchance .item4 .button1 img").bind("click", function () {
    $(this).next(".tip_alert").show();
  });
  $(".tip_alert .close").bind("click", function () {
    $(".tip_alert").hide();
  });
  $(window)
    .resize(function () {
      var height = $(window).height();
      var banner = $(".winchance .banner");
      if (height > 900) {
        return;
      }
      banner.css({
        height: height - 93,
      });
    })
    .trigger("resize");
  $(window).scroll(function () {
    if (scrollact(".winchance .item1", 300)) {
      $(".item1 .child").mChange({
        auto: 1, //是否自动播放,1为自动,0为手动
        arrow: 1, //是否反转箭头,1为点击左侧向右滚动,0则相反
        speed: 500, //效果速度,大于0.3
        time: 10000, //周期时间，大于1
        nav: ".winchance .item1 .foucs .nav a", //导航
        nave: "click", //导航事件
        navs: 0, //导航滚动
        prev: null, //上一个
        next: null, //下一个
        cycle: 1, //是否循环
        mousestop: 0, //是否鼠标划入停止
        mousewheel: 0, //是否开启滚轮事件
        animates: function (idx) {
          $(".item1 .child")
            .eq(idx)
            .addClass("now")
            .siblings()
            .removeClass("now");
        }, //自定义函数
      });
      // },1000);
      $(".item1 .child").eq(0).addClass("now");
    }
    if (scrollact(".winchance .item2", 300)) {
      $(".item2 .child").mChange({
        auto: 1, //是否自动播放,1为自动,0为手动
        arrow: 1, //是否反转箭头,1为点击左侧向右滚动,0则相反
        speed: 500, //效果速度,大于0.3
        time: 10000, //周期时间，大于1
        nav: ".winchance .item2 .foucs .nav a", //导航
        nave: "click", //导航事件
        navs: 0, //导航滚动
        prev: null, //上一个
        next: null, //下一个
        cycle: 1, //是否循环
        mousestop: 0, //是否鼠标划入停止
        mousewheel: 0, //是否开启滚轮事件
        animates: function (idx) {
          $(".item2 .child")
            .eq(idx)
            .addClass("now")
            .siblings()
            .removeClass("now");
        }, //自定义函数
      });
      $(".item2 .child").eq(0).addClass("now");
    }
    if (scrollact(".winchance .item3", 300)) {
      $(".winchance .item3").addClass("now");
    }
    if (scrollact(".winchance .item4", 300)) {
      $(".item4 .child").mChange({
        auto: 1, //是否自动播放,1为自动,0为手动
        arrow: 1, //是否反转箭头,1为点击左侧向右滚动,0则相反
        speed: 500, //效果速度,大于0.3
        time: 10000, //周期时间，大于1
        nav: ".winchance .item4 .foucs .nav a", //导航
        nave: "click", //导航事件
        navs: 0, //导航滚动
        prev: null, //上一个
        next: null, //下一个
        cycle: 1, //是否循环
        mousestop: 0, //是否鼠标划入停止
        mousewheel: 0, //是否开启滚轮事件
        animates: function (idx) {
          $(".item4 .child")
            .eq(idx)
            .addClass("now")
            .siblings()
            .removeClass("now");
        }, //自定义函数
      });
      $(".item4 .child").eq(0).addClass("now");
    }
    if (scrollact(".winchance .item5", 300)) {
      $(".item5").addClass("now");
      $(".winchance .item5 .imgtextwarp .wrap1").eq(0).addClass("now");
    }
  });

  function scrollact(e, fix) {
    if (!fix) {
      fix = 0;
    }
    if ($(e)[0].flage) {
      return;
    }
    if (
      $(window).scrollTop() + Math.abs($(window).height() - $(e).height()) >=
      +$(e).offset().top - fix
    ) {
      $(e)[0].flage = 1;
      return true;
    }
  }
  var arcbox = $("#arcbox"),
    $img = arcbox.find(".img"),
    imgSize = $img.size(),
    sr = 360 / imgSize,
    iw = $img.width(),
    ih = $img.height(),
    centerX = arcbox.width() / 2,
    centerY = arcbox.height() / 2,
    timer = 0,
    index = 0,
    d = 0;

  function init(deg) {
    $img.each(function (i) {
      var d = i * sr + deg;
      var y = centerY + Math.sin((d * Math.PI) / 180) * centerY,
        x = centerX + Math.cos((d * Math.PI) / 180) * centerX;
      $(this).css({
        top: y - ih / 2,
        left: x - iw / 2,
      });
    });
    $(".winchance .item5 .imgtextwarp .wrap1")
      .eq(index)
      .addClass("now")
      .siblings()
      .removeClass("now");
  }
  init(0);
  $(".img", arcbox).bind("click", function () {
    index = $(this).index();
    init(-index * sr);

    console.log(index);
  });

  $(".winchance .item5 .button1 .next").bind("click", function () {
    index--;
    if (index < 0) {
      index = imgSize - 1;
    }
    init(-index * sr);
  });
  $(".winchance .item5 .button1 .prev").bind("click", function () {
    index++;
    if (index > imgSize - 1) {
      index = 0;
    }

    init(-index * sr);
  });

  autoPlay();

  function autoPlay() {
    clearInterval(timer);
    timer = setInterval(function () {
      index--;
      init(-index * sr);
    }, 5000);
  }
  $(".winchance .item5 .arc,.winchance .item5 .button1 .a").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      autoPlay();
    }
  );
});
$.get(
  "get_pageview.html",
  function (data) {
    if (data.status == 1) {
      var num = data.pageview.toString();
      var num1 = "";
      for (var i = 0; i < num.length; i++) {
        num1 += "<i>" + num.substr(i, 1) + "</i>";
      }
      $(".footer .num .inner").html(num1);
      $("#footer .num").css("visibility", "inherit");
    }
  },
  "json"
);

$("#footer .btns a").bind("click", function () {
  $("#footer .proposal").animate({
    bottom: 0,
  });
  return false;
});

$("#footer .proposal").bind("mouseout", function (e) {
  $(this).animate({
    bottom: "-60px",
  });
});
$(function () {
  $(".share .wb, .share .i1").on("click", function () {
    dplus.track("分享", {
      类型: "微博",
    });
    aplus_queue.push({
      action: "aplus.record",
      arguments: [
        "Um_Event_SidebarClick",
        "CLK",
        {
          Um_Key_ButtonName: "微博",
          page_name: "ggzw_HomePage",
        },
      ],
    });
  });
  $(".share .wx, .share .i2").on("click", function () {
    setTimeout(function () {
      $("body #bdshare_weixin_qrcode_dialog .bd_weixin_popup_foot").html(
        "使用微信“扫一扫”即可将网页分享至朋友圈"
      );
    }, 200);
    dplus.track("分享", {
      类型: "微信",
    });
    aplus_queue.push({
      action: "aplus.record",
      arguments: [
        "Um_Event_SidebarClick",
        "CLK",
        {
          Um_Key_ButtonName: "微信",
          page_name: "ggzw_HomePage",
        },
      ],
    });
  });
  $(".share .qq, .share .i3").on("click", function () {
    dplus.track("分享", {
      类型: "QQ",
    });
    aplus_queue.push({
      action: "aplus.record",
      arguments: [
        "Um_Event_SidebarClick",
        "CLK",
        {
          Um_Key_ButtonName: "QQ",
          page_name: "ggzw_HomePage",
        },
      ],
    });
  });

  $(window).on("load", function () {
    setTimeout(function () {
      window._bd_share_config = {
        share: [],
      };
      with (document)
        (0)[
          ((getElementsByTagName("head")[0] || body).appendChild(
            createElement("script")
          ).src =
            "static/api/js/shareb662.js?cdnversion=" + ~(-new Date() / 36e5))
        ];
    }, 3000);
  });
});
