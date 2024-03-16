(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        // console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);















// var selectedrow = null

// function showalert(message,classname) {

// const div = document.createElement("div")
// div.className = `alert alert-${classname}`

// div.appendChild(document.createTextNode(message))
// const container = document.querySelector(".container")
// const main = document.querySelector(".main")
// container.insertBefore(div,main)
// setTimeout(() => document.querySelector(".alert").remove(),3000)

    
// }


var selectedrow = null


function clearfields() {
    
document.querySelector("#name").value = ""
document.querySelector("#checkin").value = ""
document.querySelector("#checkout").value = ""
document.querySelector("#select3").value = ""

}



document.querySelector("#student-form").addEventListener("submit" , (e) => {

e.preventDefault()

const name = document.querySelector("#name").value
const checkin = document.querySelector("#checkin").value
const checkout = document.querySelector("#checkout").value
const select3 = document.querySelector("#select3").value

if (name == "" || checkin == "" || checkout == "" || select3 == ""){



} else {

if (selectedrow == null) {
    const list = document.querySelector("#student-list")
    const row = document.createElement("tr")
    
row.innerHTML = `

<td>${name}</td>
<td>${checkin}</td>
<td>${checkout}</td>
<td>${select3}</td>

`
list.appendChild(row)
selectedrow = null
alert ("Added successfully","success")


}




}






})








