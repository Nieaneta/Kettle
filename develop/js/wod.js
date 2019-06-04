const btnBeg = document.querySelector(".wod-article-btn.beg");
const btnAdv = document.querySelector(".wod-article-btn.adv");
const btnHard = document.querySelector(".wod-article-btn.hard");
const articleBeg = document.querySelector(".wod-article.beginner");
const articleH3Beg = document.querySelector(".wod-article-title");
const articleTextBeg = document.querySelector(".wod-article-text");

const exerciseNames = ["Angie", "Chelsea", "Barbara", "Cindy", "Annie"];

const exercisesBeg = [
    ["5 przysiadow", "5 pompek", "5 podciągnięć", "5 brzuszków"],
    ["10 skłonów", "10 wymachów ramion"],
    ["15 wyskakówdo góry", "15 pajacyków"]
];

const exercisesAdv = [
    ["15 przysiadow", "15 pompek"],
    ["20 skłonów", "20 wymachów ramion"],
    ["30 wyskakówdo góry", "30 pajacyków"]
];

const exercisesHard = [
    ["25 przysiadow", "25 pompek"],
    ["40 skłonów", "40 wymachów ramion"],
    ["60 wyskakówdo góry", "60 pajacyków"]
];

btnBeg.addEventListener("click", function() {
    // console.log("klik");

    const index = Math.floor(Math.random() * exerciseNames.length);
    // console.log(index);

    articleH3Beg.innerText = exerciseNames[index];
    const ul = document.createElement("ul");
    ul.style.zIndex = 3;
    ul.style.position = "relative";
    ul.style.listStyle = "circle";
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
    Swal.fire(`Twój WOD na dzisiaj to: ${exerciseBeg[0]}`);
    // console.log("klik");

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
    Swal.fire(`Twój WOD na dzisiaj to: `);
});

