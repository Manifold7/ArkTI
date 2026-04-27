// 应用状态
let currentQuestion = 0;
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

// DOM 元素
const startPage = document.getElementById('start-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const currentQNum = document.getElementById('current-q');
const progress = document.getElementById('progress');
const optionBtns = document.querySelectorAll('.option-btn');
const loadingScreen = document.getElementById('loading-screen');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    startBtn.addEventListener('click', startTest);
    restartBtn.addEventListener('click', resetTest);

    optionBtns.forEach(btn => {
        btn.addEventListener('click', handleAnswer);
    });

    // 初始化粒子背景
    initParticles();

    // 初始化加载屏幕
    initLoadingScreen();
});

// 粒子背景初始化
function initParticles() {
    tsParticles.load("tsparticles", {
        background: {
            color: {
                value: "#0a0a0a"
            }
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ["#00d2ff", "#ffffff", "#666666"]
            },
            links: {
                enable: true,
                distance: 120,
                color: "#333333",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out"
            },
            shape: {
                type: "circle"
            },
            size: {
                value: { min: 1, max: 3 }
            },
            opacity: {
                value: { min: 0.3, max: 0.8 },
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.2,
                    sync: false
                }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 150,
                    links: {
                        opacity: 0.6,
                        color: "#00d2ff"
                    }
                }
            }
        },
        detectRetina: true
    });
}

// 加载屏幕
function initLoadingScreen() {
    const progressBar = document.getElementById('ark-progress');
    const percentText = document.getElementById('ark-percent');
    const percentDisplay = document.getElementById('percent-display');
    const statusText = document.getElementById('status-text');
    const terminalLines = document.querySelectorAll('.terminal-line');

    const statusMessages = [
        'INITIALIZING...',
        'LOADING NEURAL DATA...',
        'CALIBRATING PARAMETERS...',
        'SYNCHRONIZING RECORDS...',
        'NEARLY READY...'
    ];

    // 逐行显示终端文字
    terminalLines.forEach((line, index) => {
        const delay = parseInt(line.dataset.delay) || 0;
        setTimeout(() => {
            line.style.opacity = '1';
        }, delay);
    });

    let progress = 0;
    let statusIndex = 0;

    // 模拟加载进度
    const interval = setInterval(() => {
        const increment = Math.floor(Math.random() * 8) + 3;
        progress = Math.min(progress + increment, 100);

        progressBar.style.width = progress + '%';
        percentText.textContent = progress + '%';
        percentDisplay.textContent = progress + '%';

        const newStatusIndex = Math.floor(progress / 25);
        if (newStatusIndex !== statusIndex && newStatusIndex < statusMessages.length) {
            statusIndex = newStatusIndex;
            statusText.textContent = statusMessages[statusIndex];
        }

        if (progress >= 100) {
            clearInterval(interval);
            statusText.textContent = 'READY';
            statusText.style.color = '#00ff88';

            // 加载完成，淡出
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 800);
        }
    }, 150);
}

// 开始测试
function startTest() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showPage('test');
    loadQuestion();
}

// 加载问题
function loadQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.text;
    optionA.textContent = question.options.A;
    optionB.textContent = question.options.B;
    currentQNum.textContent = currentQuestion + 1;

    // 更新进度条
    const progressPercent = ((currentQuestion) / questions.length) * 100;
    progress.style.width = progressPercent + '%';
}

// 处理答案
function handleAnswer(e) {
    const choice = e.currentTarget.dataset.choice;
    const question = questions[currentQuestion];
    const scoreType = question.scores[choice];

    // 增加对应维度的分数
    scores[scoreType]++;

    // 下一题或显示结果
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// 显示结果
function showResult() {
    // 计算MBTI类型
    const mbtiType =
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');

    const result = characters[mbtiType];

    // 随机选择干员
    const charArray = result.characters;
    const selectedChar = charArray[Math.floor(Math.random() * charArray.length)];

    // 设置Wiki链接
    const wikiUrl = `https://prts.wiki/w/${encodeURIComponent(selectedChar.wikiName)}`;
    const characterLink = document.getElementById('character-link');
    characterLink.href = wikiUrl;

    // 设置角色图片 - 使用本地图片
    const imageUrl = `../src/images/characters/头像_${selectedChar.imageName}.png`;
    const characterImage = document.getElementById('character-image');
    characterImage.src = imageUrl;
    characterImage.alt = selectedChar.name;

    // 显示结果
    document.getElementById('personality-code').textContent = result.code;
    document.getElementById('type-title').textContent = result.title;
    document.getElementById('character-name').textContent = selectedChar.name;
    document.getElementById('character-quote').textContent = '「' + selectedChar.quote + '」';

    // 显示维度详情
    const dimensionDetails = document.getElementById('dimension-details');
    const dim1 = scores.E > scores.I ? 'E' : 'I';
    const dim2 = scores.S > scores.N ? 'S' : 'N';
    const dim3 = scores.T > scores.F ? 'T' : 'F';
    const dim4 = scores.J > scores.P ? 'J' : 'P';

    dimensionDetails.innerHTML = `
        <div class="progress-demo">
            <div class="progress-label">
                <span>${dimensionCategories['EI']}</span>
                <span>${Math.round(Math.max(scores.E, scores.I) / 3 * 100)}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${(Math.max(scores.E, scores.I) / 3 * 100)}%"></div>
            </div>
        </div>
        <div class="progress-demo">
            <div class="progress-label">
                <span>${dimensionCategories['SN']}</span>
                <span>${Math.round(Math.max(scores.S, scores.N) / 3 * 100)}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${(Math.max(scores.S, scores.N) / 3 * 100)}%"></div>
            </div>
        </div>
        <div class="progress-demo">
            <div class="progress-label">
                <span>${dimensionCategories['TF']}</span>
                <span>${Math.round(Math.max(scores.T, scores.F) / 3 * 100)}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${(Math.max(scores.T, scores.F) / 3 * 100)}%"></div>
            </div>
        </div>
        <div class="progress-demo">
            <div class="progress-label">
                <span>${dimensionCategories['JP']}</span>
                <span>${Math.round(Math.max(scores.J, scores.P) / 3 * 100)}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${(Math.max(scores.J, scores.P) / 3 * 100)}%"></div>
            </div>
        </div>
    `;

    showPage('result');
}

// 重置测试
function resetTest() {
    showPage('start');
}

// 页面切换
function showPage(pageName) {
    startPage.classList.remove('active');
    testPage.classList.remove('active');
    resultPage.classList.remove('active');

    if (pageName === 'start') {
        startPage.classList.add('active');
    } else if (pageName === 'test') {
        testPage.classList.add('active');
    } else if (pageName === 'result') {
        resultPage.classList.add('active');
        // 更新进度条到100%
        progress.style.width = '100%';
    }
}
