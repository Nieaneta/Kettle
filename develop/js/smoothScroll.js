function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition);
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var sectionOne = document.querySelector(".startScroll");
var sectionTwo = document.querySelector(".historyScroll");
var sectionThree = document.querySelector(".whyScroll");
var sectionFour = document.querySelector(".forWhoScroll");
var sectionFive = document.querySelector(".amrapScroll");
var sectionSix = document.querySelector(".wodScroll");

sectionOne.addEventListener("click", function() {
    smoothScroll("#start", 1000);
});

sectionTwo.addEventListener("click", function() {
    smoothScroll("#history", 1000);
});

sectionThree.addEventListener("click", function() {
    smoothScroll("#why", 1000);
});

sectionFour.addEventListener("click", function() {
    smoothScroll("#forWho", 1000);
});

sectionFour.addEventListener("click", function() {
    smoothScroll("#wod", 1000);
});

