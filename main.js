const column1 = [
    "Ja chcę powiedzieć jedną rzecz:",
    "Trezba powiedzieć jasno:",
    "Jak powiedział wybitny krakowianin Stanisław Lem,",
    "Proszę mnie dobrze zrozumieć",
    "Ja chciłem państwu przypomnieć, że",
    "Niech państwo nie mają złudzeń:",
    "Powiedzmy to wyraźnie:"
];
const column2 = [
    "przedstawiciele czerwonej hołoty",
    "ci wszyscy (tfu!) geje",
    "funkcjonariusze reżymowej telewizji",
    "tak zwani ekolodzy",
    "ci wszyscy (tfu!) demokraci",
    "agenci bezpieki",
    "feminazistki"
];
const column3 = [
    "zupełnie bezkarnie",
    "całkowicie bezczelnie",
    "o poglądach na lewo od komunizmu",
    "celowo i świadomie",
    "z premedytacją",
    "od czasów Okrągłego Stołu",
    "w ramach postępu"
];
const column4 = [
    "nawołują do podniesienia podatków",
    "próbują wyrzucić kierowców z miast",
    "próbują skłócić Polskę z Rosją",
    "głoszą brednię o globalnym ociepleniu",
    "zakazują posiadania broni",
    "nie dopuszczają prawicy do władzy",
    "uczą dzieci homoseksualizmu"
];
const column5 = [
    "bo dzięki temu mogą kraść",
    "bo dostają za to pieniądze",
    "bo tak się uczy w państwowej szkole",
    "bo bez tego (tfu!) demokracja nie może istnieć",
    "bo głupich jest więcej niż mądrych",
    "bo chcą tworzyć raj na ziemi",
    "bo chcą niszczyć cywilizację białego człowieka"
];
const column6 = [
    "pzez kolejne kadencje",
    "o czym się nie mówi",
    "i właśnie dlatego Europa umiera",
    "ale przyjdą muzłumanie i zrobią porządek",
    "- tak samo zresztą jak za Hitlera",
    "- proszę zobaczyć co się dzieje na zachodzie, jeśli mi państwo nie wierzą",
    "co lat temu sto nikomu nie przyszłoby nawet do głowy"
];

const columnLength = 7;

const output = document.getElementById("output");
const btn = document.getElementById("btn");
const imageFrame = document.getElementById("image");

btn.addEventListener("click", () =>{
    generate();
    btn.classList.add("clicked");
    imageFrame.classList.add("active");
})

const generate = () => {
    let text = "";

    text += column1[getRandomInt(0, columnLength)] + " ";
    text += column2[getRandomInt(0, columnLength)] + " ";
    text += column3[getRandomInt(0, columnLength)] + " ";
    text += column4[getRandomInt(0, columnLength)] + " ";
    text += column5[getRandomInt(0, columnLength)] + " ";
    text += column6[getRandomInt(0, columnLength)] + ".";

    output.textContent = text;
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}