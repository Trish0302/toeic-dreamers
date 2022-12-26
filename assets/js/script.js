let videoList = $(".video-list-item ");
let videoContent = $(".video-content video");
let videoArr = [
    {
        title: "PHƯƠNG PHÁP CHINH PHỤC BÀI THI ĐỌC TOEIC (V2.9.22)",
        name: "TOEIC HURRICANE",
        lesson: "INTRODUCTORY APPROACH FOR TOEIC BEGINNERS",
        date: "28/09/2022",
    },
    {
        title: "ETS 2022 TEST 5 PART 5 | NHẮM MẮT THẤY TOEIC 500+",
        name: "TOEIC MARATHON",
        lesson: "ETS 2022 TEST 5 PART 5",
        date: "23/07/2022",
    },
    {
        title: "ETS 2022 TEST 4 PART 5 | MUỘN RỒI MÀ SAO CÒN... GIẢI ĐỀ?",
        name: "TOEIC MARATHON",
        lesson: "ETS 2022 TEST 4 PART 5",
        date: "17/07/2022",
    },
    {
        title: "ETS 2022 TEST 3 PART 5 | MỖI NGÀY TÔI CHỌN MỘT ĐỀ THI",
        name: "TOEIC MARATHON",
        lesson: "ETS 2022 TEST 3 PART 5",
        date: "13/07/2022",
    },
    {
        title: "ETS 2022 TEST 2 PART 5 | GIẢI ĐỀ ĐỠ BUỒN",
        name: "TOEIC MARATHON",
        lesson: "ETS 2022 TEST 2 PART 5",
        date: "10/07/2022",
    },
    {
        title: 'ETS 2022 TEST 1 PART 5 | MÌNH PHẢI "GIẢI ĐỀ" NHƯ MÙA HÈ NĂM ẤY!',
        name: "TOEIC MARATHON",
        lesson: "ETS 2022 TEST 1 PART 5",
        date: "05/07/2022",
    },
    {
        title: "LIVESTREAM 24/12/2022 | CHÂN MÂY TOEIC",
        name: "TOEIC VIDEO",
        lesson: "YBM TOEIC READING 1000 VOL 2 TEST 1 PART 5",
        date: "24/12/2022",
    },
];

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has("id")) {
    let id = searchParams.get("id");

    setTimeout(() => {
        $($(videoList)[id - 1]).trigger("click");
    }, 1);
}

$(".navbar-toggler img").click(() => {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-collapse").removeClass("collapsing");
    $(".navbar-collapse").attr("id", null);
    window.location.href = "index.html";
});

videoList.click(function () {
    let imgSrc = $(this).find("img");
    let index = $(this).index() + 1;

    if ($(this).hasClass("active") == false) {
        videoList.each(function () {
            $(this).find("img").attr("src", " assets/img/play-button.svg");
        });
        videoContent.attr("src", "assets/video/video-" + index + ".mp4");
        videoContent.attr("poster", "assets/img/thumbnail-" + index + ".png");
    }

    if (imgSrc.attr("src") == " assets/img/play-button.svg") {
        imgSrc.attr("src", " assets/img/pause-button.svg");
        $(".video-content video").trigger("play");
    } else {
        imgSrc.attr("src", " assets/img/play-button.svg");
        $(".video-content video").trigger("pause");
    }

    videoList.removeClass("active");
    $(this).addClass("active");

    $(".video-title h4").text(videoArr[index - 1].title);

    $($(".video-description table tr th:nth-child(2)")[0]).text(
        videoArr[index - 1].name
    );
    $($(".video-description table tr th:nth-child(2)")[1]).text(
        videoArr[index - 1].lesson
    );
    $($(".video-description table tr th:nth-child(2)")[2]).text(
        videoArr[index - 1].date
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

videoContent.bind("play", function (e) {
    let index = e.currentTarget.getAttribute("poster")[21] - 1;
    videoList
        .find("img")
        [index].setAttribute("src", " assets/img/pause-button.svg");
});

videoContent.bind("pause", function (e) {
    let index = e.currentTarget.getAttribute("poster")[21] - 1;
    videoList
        .find("img")
        [index].setAttribute("src", " assets/img/play-button.svg");
});

$("nav form button").click(() => {
    window.location.href = "danh-sach-bai-giang.html";
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(".swiper-slide img").click(function () {
    let index = $(".swiper-slide img").index(this);
    window.location.href = "chi-tiet-bai-giang.html?id=" + index;
});
