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
    ["15 swing", "15 squat", "15 clean", "25 sit up", '10 pull up'],
    ["50 pajacyków", "20 squat", '10 swing', '2min plank', '10 clean'],
    ["15 burpees", "15 squat", '20 burpees', '20 squat', '2min plank'],
    ["15 burpees", "15 lunges", '20 air squat', '20 push up', '20 squat']
];

const exercisesAdv = [
    ["15 przysiadow", "15 pompek"],
    ["20 skłonów", "20 wymachów ramion"],
    ["30 wyskoków", "30 pajacyków"]
];

const exercisesHard = [
    [
        "100 przysiadów",
        "100 pompek",
        "100 podciągnięć",
        "100 pajacyków",
        "100 wskoków na skrzynie"
    ],
    [
        "100 swingów",
        "100 pompek",
        "200 skoków na skakance",
        "100 podciągnięć",
        "50 squat"
    ],
    ["60 wyskoków", "60 pajacyków"]
];

btnBeg.addEventListener("click", function() {
    // console.log("klik");

    const index = Math.floor(Math.random() * exerciseNames.length);
    // console.log(index);

    articleH3Beg.innerText = exerciseNames[index];
    const ul = document.createElement("ul");
    ul.style.zIndex = 3;
    ul.style.position = "relative";
    ul.style.fontSize = '2rem';
    ul. style.lineHeight = '2.5rem';
    ul.style.textAlign = 'center';
    ul.style.verticalAlign = 'center';
    // ul.style.listStyle = "circle";
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
    const index = Math.floor(Math.random() * exerciseNames.length);
    // console.log(index);

    articleH3Adv.innerText = exerciseNames[index];
    const ul = document.createElement("ul");
    ul.style.zIndex = 3;
    ul.style.position = "relative";
    ul.style.listStyle = "circle";
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
    const index = Math.floor(Math.random() * exerciseNames.length);
    // console.log(index);

    articleH3Hard.innerText = exerciseNames[index];
    const ul = document.createElement("ul");
    ul.style.zIndex = 3;
    ul.style.position = "relative";
    ul.style.listStyle = "circle";
    exercisesHard[index].map(el => {
        const li = document.createElement("li");
        li.innerText = el;
        return ul.appendChild(li);
    });
    console.log(ul);
    articleTextHard.innerHTML = "";
    articleTextHard.appendChild(ul);
});

// btnHard.addEventListener("click", function() {
//     Swal.fire(`Twój WOD na dzisiaj to: `);
// });
