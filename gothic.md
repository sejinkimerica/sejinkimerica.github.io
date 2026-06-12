---
layout: page
title: 고딕 소설 비교 페이지
permalink: /gothic/
---

# [숙제13] 텍스트 분석 도구 구현

<!-- Q1: 두 고딕 소설의 상위 30개 단어 비교 -->
<h2>Frankenstein vs. Dracula -- 상위 30개 단어</h2>
<div style="display: flex; gap: 1em;">
    <div style="flex: 1;">
        <h3>Frankenstein (Shelley, 1818)</h3>
        <div style="height: 600px;">
            <canvas id="chart-frankenstein"></canvas>
        </div>
    </div>
    <div style="flex: 1;">
        <h3>Dracula (Stoker, 1897)</h3>
        <div style="height: 600px;">
            <canvas id="chart-dracula"></canvas>
        </div>
    </div>
</div>

<!-- Q2: 보고서 (아래에 작성) -->
## 보고서
### 추가한 불용어와 근거
NLTK 기본 목록 외에 다음 7개의 단어를 `data/stopwords-custom.txt`에
추가했다: 'would', 'could', 'said', 'may', 'shall', 'every', 'must'
이 단어들은 두 작품의 상위 30개에 **모두** 들어 있었으나, 조동사나 담화 표지로서
어휘적 의미보다는 19세기 영어 산문의 **문체적 특성**을
보여 줄 뿐이라고 판단하여 제외했다. 
### 두 작품의 단어 빈도가 들려주는 이야기
- **공통으로 도드라지는 단어**: 'time'
- **한 작품에만 도드라지는 단어**와 그것이 시사하는 작품의 특성: Dracula와 달리 Frankenstein에서는 'father'라는 단어가 부각된다. 그것은 Frankenstein에서 과학자가 만들어낸 괴물이 과학자를 'father(아버지)'라고 불렀기 때문이다. 한편 Frankenstein에서와 달리 Dracula에서 두드러지는 단어는 'helsing'이다. 이는 작중 등장인물의 이름이 'helsing'이기 때문이며, 그가 작품에서 차지하는 비중이 높음을 시사한다.

{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/gothic.js"></script>