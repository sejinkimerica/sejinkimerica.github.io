// [숙제11] 동적 웹 페이지 구현
// 2024-10136 김세진

// Q1
const themeBtn = document.querySelector("#theme-btn");
const q1Box = document.querySelector("q1-box");
themeBtn.addEventListener("click", () => { 
    q1Box.classList.toggle("dark");
    themeBtn.classList.toggle.textContet = "라이트 모드";
});