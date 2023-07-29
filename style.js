//<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
//<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
//<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
//<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
//
//<script>
//    // Swiper Slider
//    var swiper = new Swiper(".swiper", {
//        slidesPerView: 3,
//        breakpoints: {
//            768: {
//                slidesPerView: 4,
//            }
//        },
//        loop: true,
//        navigation: {
//            nextEl: ".swiper-button-next",
//            prevEl: ".swiper-button-prev",
//        },
//    });
//
//    var swiper1 = new Swiper(".slider1", {
//        slidesPerView: 1,
//        loop: true,
//        navigation: {
//            nextEl: ".swiper-button-next",
//            prevEl: ".swiper-button-prev",
//        },
//    });
//
//    var swiper1_mobile = new Swiper(".slider1_mobile", {
//        slidesPerView: 1,
//        loop: true,
//        navigation: {
//            nextEl: ".swiper-button-next",
//            prevEl: ".swiper-button-prev",
//        },
//        touchRatio: 3,
//    });
//
//    // Slick Carousel
//    $(document).ready(function () {
//        $('.slider').slick({
//            autoplay: false, // 自動再生
//            autoplaySpeed: 2000, // 自動再生のスピード（2秒ごと）
//            arrows: true, // 矢印の表示
//            dots: true // ドットの表示
//        });
//    });
//
//    // Intersection Observer
//    document.addEventListener('DOMContentLoaded', function() {
//    var defaultHeader = document.querySelector('.gnav-pc');
//    var stickyHeader = document.querySelector('#sticky-header');
//    var observerOptions = {
//        root: null,
//        rootMargin: '0px',
//        threshold: 0
//    };
//
//    var observer = new IntersectionObserver(function(entries) {
//        entries.forEach(function(entry) {
//            if (!entry.isIntersecting) {
//                stickyHeader.style.display = 'block';
//                stickyHeader.style.position = 'fixed';
//                stickyHeader.style.top = '0';
//            } else {
//                stickyHeader.style.display = 'none';
//            }
//        });
//    }, observerOptions);
//
//    observer.observe(defaultHeader);
//});
//</script>
//