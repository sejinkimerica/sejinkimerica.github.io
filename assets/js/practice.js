const lit = ["감자", "고구마", "아사이베리", "카라멜라떼"];
const long = lit.filter(l => l.length >=5);
console.log(long)

function countChar(text, target) {
    let count = 0;
    for (const ch of text) {
        if (ch === target) count ++}
    return count
}
const text = "나는 말하는 감자입니다. 감자는 맛있다";
const target = ["감","나"];
const counts = target.map(t=>countChar(text,t));
console.log(counts)

for (i=0; i<target.length; i++) {
    console.log(`'${target[i]}'는 ${counts[i]}번 등장했습니다}`)
}

let maxIdx = 0;
for (i=0; i<counts.length; i++) {
    if (counts[i]>counts[maxIdx]) maxIdx = i;
}
const topTarget = target[maxIdx];
console.log(`가장 많이 나온 글자: '${target[maxIdx]}'`)

let count = 0;
function countNonHangul(text){
    for(const ch in text) {
        if (ch <= "가" | ch >= "힣") count ++;
    }
    return count
}
const text = "나는 2005년생이고 영어이름은 Erica이다."
const counts = countNonHangul(text)
console.log(counts)

const li = document.createElement("li");
li.textContent = "종생기"

const ul = document.querySelector("#works");
ul.appendChild(li); // 따옴표 안붙임!!

const list = document.querySelector("#list");
const li = document.createElement("li");
li.textContent = "처음";
list.appendChild(li)



// 19강
fetch("/data/works.json")
    .then(response => response.json())
    .then(works => {
        console.log(works);
        console.log(works[0].title)
        console.log(works[0].length)
    });

[
    {"title": "날개", "author": "이상", "year": 1936},
    {"title": "오감도", "author": "이상", "year": 1934},
    {"title": "진달래꽃", "author": "김소월", "year": 1925},
    {"title": "서시", "author": "윤동주", "year": 1948}
]

fetch("/data/works.json")
    .then(response => response.json())
    .then(works => {
        for (const work of works) {
            const li = document.createElement("li");
            li.textContent = `${work.title} (${work.author})`;
            listBox.appendChild(li);
        }
    });