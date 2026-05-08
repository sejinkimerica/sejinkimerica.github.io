// [숙제10] Javascript 기초 연습
// 2024-10136 김세진

// Q1
function classifyEra(year) {
    if (year < 1910) {
        return ('개화기 이전');
    }
    else if (year < 1945) {
        return ('일제강점기');
    }
    else if (year < 1990) {
        return ('해방 이후-현대');
    }
    else {
        return ('동시대');
    }
}

const years = [1908, 1936, 1972, 2025];
for (year of years) {
    console.log(`${year}년: ${classifyEra(year)}`)
}


// Q2
const works = ["날개", "오감도", "지주회시", "종생기", "권태"];
console.log(works.length)
console.log(works[0])
console.log(works[works.length - 1])

const titled = works.map(work => `「${work}」`);
console.log(titled);

const long = works.filter(w => w.length >= 3);
console.log(long);

for (let i = 0; i < long.length; i++) {
    console.log(`${i + 1}번째 작품: ${long[i]}`);
}