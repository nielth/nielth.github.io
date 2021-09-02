window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w < 992) {
        document.getElementById("about-column-left").style.position = "relative";
    }
}

function myFunction() {
      var w = window.innerWidth;
      var header = document.getElementById("about_page");
      var sticky = header.offsetTop;
      var w = window.innerWidth;
      if (window.pageYOffset + 72 > sticky && w > 992) {
         document.getElementById("about-column-left").style.position = "fixed";
         document.getElementById("about-column-left").style.height = "100%";
         document.getElementById("about-column-left").style.top = "72px";
      } else if (window.pageYOffset + 72 <= sticky && w > 992) {
         document.getElementById("about-column-left").style.position = "absolute";
         document.getElementById("about-column-left").style.height = "100vh";
         document.getElementById("about-column-left").style.top = "0";
      }
   }

 window.addEventListener('load', myFunction);
 window.addEventListener('scroll', myFunction);
 window.addEventListener('resize', myFunction);


$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 72 <= scrollPos && refElement.position().top - 72 + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

window.addEventListener('load', onScroll);


function responsiveMenu() {
    var w = window.innerWidth;
    var x = document.getElementById("menu");
    if (x.className === "menu" &&  w <= 670) {
      x.className += "-responsive";
    } else {
      x.className = "menu";
    }
  }

// Typewrite front page
class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 5; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}

// remove fragment as much as it can go without adding an entry in browser history:
window.location.replace("#");

// slice off the remaining '#' in HTML5:    
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

window.onload = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w < 992) {
        document.getElementById("about-column-left").style.height = h + "px";
        document.getElementById("home_page").style.height = h + "px";
        document.body.style.height = h + "px";
    }
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w < 992) {
        document.getElementById("about-column-left").style.height = h + "px";
        document.getElementById("about-column-left").style.position = "relative";
    }
};