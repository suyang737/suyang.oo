function changeMessage() {
    document.getElementById('message').textContent = '버튼을 클릭하셨습니다!';
}

function goToNaver() {
    window.location.href = 'https://www.naver.com/';
}

function getNewsLinkName() {
    return '네이버 뉴스';
}

// 새로운 함수: 네이버 뉴스 링크를 동적으로 생성
function renderNewsLink() {
    const container = document.getElementById('news-link-container');
    if (container) {
        container.innerHTML = `<a href="https://www.naver.com/" target="_blank">${getNewsLinkName()}</a>`;
    }
}

// 새로운 함수: 네이버로 이동하는 버튼을 동적으로 생성
function renderNaverButton() {
    const container = document.getElementById('naver-button-container');
    if (container) {
        container.innerHTML = `<button onclick="goToNaver()">네이버로 이동</button>`;
    }
}
