// [숙제12] 인문학 데이터 시각화
// 2024-10136 김세진

// Q1
fetch("/data/sillok.json")
    .then(response => response.json())
    .then(records => {
    const labels = records.map(r => r.king);
    const counts = records.map(r => r.count);
    const canvas = document.querySelector("#q1-chart");
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{label: "왕 이름", 
                        data: counts,
                        backgroundColor: "rgba(54, 162, 235,0.6)", //파랑
                        
                    }],
        },
        options: {
            scales: { y: { beginAtZero: true}}
        }
    });
    })




// Q2
fetch("/data/nobel-literature.csv")
    .then(response => response.text())
    .then(csv => {
    ...
    });