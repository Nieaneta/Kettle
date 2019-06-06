const btnBeg = document.querySelector(".wod-article-btn.beg");
const btnAdv = document.querySelector(".wod-article-btn.adv");
const btnHard = document.querySelector(".wod-article-btn.hard");

const articleBeg = document.querySelector(".wod-article.beginner");
const articleH3Beg = document.querySelector(".wod-article-title");
const articleTextBeg = document.querySelector(".wod-article-text");

const articleAdv = document.querySelector(".wod-article.advanced");
const articleH3Adv = document.querySelector(".wod-article-title.advanced");
const articleTextAdv = document.querySelector(".wod-article-text.advanced");

const articleHard = document.querySelector(".wod-article.hardcore");
const articleH3Hard = document.querySelector(".wod-article-title.hardcore");
const articleTextHard = document.querySelector(".wod-article-text.hardcore");

const exerciseNames = ["Angie", "Chelsea", "Barbara", "Cindy", "Annie"];

const exercisesBeg = [
    ["15 swing", "15 squat", "15 clean", "25 sit up", "10 pull up"],
    ["50 jump rope", "20 squat", "10 swing", "2min plank", "10 clean"],
    ["15 burpees", "15 squat", "20 burpees", "20 squat", "2min plank"],
    ["15 burpees", "15 lunges", "20 air squat", "20 push up", "20 squat"]
];

const exercisesAdv = [
    ["30 swing", "30 squat", "30 clean", "50 sit up", "20 pull up"],
    ["100 jump rope", "40 squat", "20 swing", "2min plank", "20 clean"],
    ["30 burpees", "30 squat", "40 burpees", "40 squat", "2min plank"],
    ["50 burpees", "30 lunges", "30 air squat", "30 push up", "50 squat"]
];

const exercisesHard = [
    ["100 squat", "100 push up", "100 pull up", "100 clean", "100 jump box"],
    ["100 swingów", "100 push up", "200 jump rope", "100 pull up", "50 squat"],
    ["100 burpees", "50 lunges", "100 air squat", "100 push up", "100 squat"],
    ["100 burpees", "100 squat", "100 pull up", "100 push up", "3min plank"]
];

btnBeg.addEventListener("click", function() {
    const index = Math.floor(Math.random() * exercisesBeg.length);

    articleH3Beg.innerText = exerciseNames[index];
    const ul = document.createElement("ul");
    ul.style.zIndex = 3;
    ul.style.position = "relative";
    ul.style.fontSize = "2rem";
    ul.style.lineHeight = "2.5rem";
    ul.style.textAlign = "center";
    ul.style.verticalAlign = "center";

    exercisesBeg[index].map(el => {
        const li = document.createElement("li");
        li.innerText = el;
        return ul.appendChild(li);
    });
    console.log(ul);
    articleTextBeg.innerHTML = "";
    articleTextBeg.appendChild(ul);
});

btnAdv.addEventListener("click", function() {
    const index = Math.floor(Math.random() * exercisesAdv.length);

    articleH3Adv.innerText = exerciseNames[index];
    const ul = document.createElement("ul");
    ul.style.zIndex = 3;
    ul.style.position = "relative";
    ul.style.fontSize = "2rem";
    ul.style.lineHeight = "2.5rem";
    ul.style.textAlign = "center";
    ul.style.verticalAlign = "center";

    exercisesAdv[index].map(el => {
        const li = document.createElement("li");
        li.innerText = el;
        return ul.appendChild(li);
    });
    console.log(ul);
    articleTextAdv.innerHTML = "";
    articleTextAdv.appendChild(ul);
});

btnHard.addEventListener("click", function() {
    const index = Math.floor(Math.random() * exercisesHard.length);

    articleH3Hard.innerText = exerciseNames[index];
    const ul = document.createElement("ul");
    ul.style.zIndex = 3;
    ul.style.position = "relative";
    ul.style.fontSize = "2rem";
    ul.style.lineHeight = "2.5rem";
    ul.style.textAlign = "center";
    ul.style.verticalAlign = "center";

    exercisesHard[index].map(el => {
        const li = document.createElement("li");
        li.innerText = el;
        return ul.appendChild(li);
    });
    console.log(ul);
    articleTextHard.innerHTML = "";
    articleTextHard.appendChild(ul);
});
