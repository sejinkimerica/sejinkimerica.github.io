// [숙제10] Javascript 기초 연습
// 2024-10136 김세진

//Q1
function classifyEra(year) {
    if (year < 1910) {
        return (`${year}: '개화기 이전'`);
    }
    else if (1910 <= year < 1945) {
        return (`${year}: '일제강점기'`);
    }
    else if (1945 <= year < 1990) {
        return (`${year}: '해방 이후-현대'`);
    }
    else (year >= 1990) {
        return (`${year}: '동시대'`);
    }
}