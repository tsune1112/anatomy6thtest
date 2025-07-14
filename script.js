document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            type: '選択式',
            section: 'スクワット',
            question: 'スクワット動作における主働筋の組み合わせとして、最も適切なものはどれですか？',
            options: ['大胸筋、上腕三頭筋、三角筋', '広背筋、上腕二頭筋、菱形筋', '大腿四頭筋、大殿筋、ハムストリングス', '腹直筋、腹横筋、脊柱起立筋'],
            answer: 'c) 大腿四頭筋、大殿筋、ハムストリングス',
            explanation: 'スクワットは下半身の代表的な多関節運動で、主に股関節の伸展（大殿筋、ハムストリングス）と膝関節の伸展（大腿四頭筋）によって動作します。'
        },
        {
            type: '穴埋め式',
            section: 'スクワット',
            question: '深いスクワット（ディープスクワット）では、股関節の屈曲角度が大きくなるため、特に ( ① ) の活動が相対的に上がる傾向があります。',
            answer: '① 大殿筋',
            explanation: 'スクワットを深く行うと股関節の屈曲が大きくなり、伸張された大殿筋の活動が高まります。'
        },
        {
            type: '正誤問題',
            section: 'ヒップリフト',
            question: 'ヒップリフトにおいて、膝を深く曲げる（膝関節の屈曲角度を小さくする）と、ハムストリングスの活動が優位になり、大殿筋の貢献度は下がる。 (正 or 誤)',
            answer: '誤',
            explanation: '膝を深く曲げるとハムストリングスが短縮した状態（短縮位）になり、力を発揮しにくくなります。その結果、股関節伸展の主動作が大殿筋に移り、大殿筋の活動が相対的に上がります。'
        },
        {
            type: '記述式',
            section: 'ヒップリフト',
            question: 'ヒップリフトで足幅を広げた場合、どの筋肉群の活動が増加しますか？その理由も簡潔に説明してください。',
            answer: '内転筋群。',
            explanation: '足幅を広げると、股関節伸展を協力する内転筋（特に大内転筋）が動員されるため。'
        },
        {
            type: '選択式',
            section: 'ベンチプレス',
            question: 'ベンチプレスでグリップ幅を広くした場合、特に活動が増加するのはどの筋肉のどの部分ですか？',
            options: ['大胸筋の内側部', '大胸筋の外側部', '三角筋の前部', '上腕三頭筋'],
            answer: 'b) 大胸筋の外側部',
            explanation: 'グリップ幅を広くすると、力の発揮方向が大胸筋の筋線維のうち、外側の走行と一致しやすくなるため、外側部の活動が増加します。逆に狭くすると内側部や三角筋前部の活動が増えます。'
        },
        {
            type: '穴埋め式',
            section: 'ベンチプレス',
            question: 'ベンチプレスにおいて、肩関節の安定性を高め、傷害リスクを低減するためには、肩甲骨を ( ① ) ・ ( ② ) させることが重要です。',
            answer: '① 後退、② 下制',
            explanation: '肩甲骨を後退・下制させることで、肩関節が安定し、大胸筋の活動を高めることができます。これにより、肩のインピンジメントなどのリスクを軽減します。'
        },
        {
            type: '選択式',
            section: 'プランク',
            question: 'プランク姿勢を維持する際に、体幹の安定性に最も重要とされ、「天然のコルセット」とも呼ばれる筋肉はどれですか？',
            options: ['腹直筋', '外腹斜筋', '内腹斜筋', '腹横筋'],
            answer: 'd) 腹横筋',
            explanation: '腹横筋は腹部の最も深層にある筋肉で、その筋線維は水平に走行しています。お腹周りをコルセットのように包み込み、腹圧を高めて体幹を安定させる重要な役割を持ちます。'
        },
        {
            type: '正誤問題',
            section: 'プランク',
            question: 'プランクは、筋肉の長さを変えずに力を発揮し続ける「等張性収縮」の代表的なエクササイズである。 (正 or 誤)',
            answer: '誤',
            explanation: 'プランクは、筋肉の長さを変えずに力を発揮し続ける「等尺性収縮（アイソメトリック収縮）」を利用したエクササイズです。関節の動きは伴いません。'
        },
        {
            type: '選択式',
            section: 'チンニング（懸垂）',
            question: 'チンニング（懸垂）の動作を開始する際、意識すべき最も重要な肩甲骨の動きはどれですか？',
            options: ['上方回旋', '下制', '外転', '前傾'],
            answer: 'b) 下制',
            explanation: '動作開始時に肩甲骨を下に引き下げる（下制）ことで、主働筋である広背筋が効率的に収縮し、適切に背中の筋肉を鍛えることができます。'
        },
        {
            type: '記述式',
            section: 'チンニング（懸垂）',
            question: 'チンニング（懸垂）で、順手（手のひらが前向き）と逆手（手のひらが自分向き）では、主にどちらの筋肉の関与度が変わりますか？それぞれの場合で活動が高まる筋肉を挙げてください。',
            answer: '主に上腕二頭筋と広背筋の関与度合いが変わります。逆手では上腕二頭筋の活動が高まり、順手では広背筋の活動が高まります。',
            explanation: '逆手（手のひらが自分向き）は、上腕二頭筋が最も力を発揮しやすい肢位のため、その関与が大きくなります。'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: 'ショルダープレスにおける肩の安定性には、主働筋である三角筋と、( ① ) と呼ばれる4つの筋肉群（棘上筋、棘下筋、小円筋、肩甲下筋）の協調が不可欠です。',
            answer: '① ローテーターカフ（回旋筋腱板）',
            explanation: 'ローテーターカフは肩関節を安定させるインナーマッスルの総称です。三角筋が大きな力を発揮する間、上腕骨頭が関節窩からずれないように保持する重要な役割を担います。'
        },
        {
            type: '選択式',
            section: 'ショルダープレス',
            question: 'ショルダープレスにおける腕の動きと肩甲骨の動きの連動は「肩甲上腕リズム」と呼ばれます。このリズムにおける、上腕骨と肩甲骨の理想的な動きの比率（上腕骨：肩甲骨）はどれですか？',
            options: ['1 : 1', '2 : 1', '1 : 2', '3 : 1'],
            answer: 'b) 2 : 1',
            explanation: '肩甲上腕リズムは、腕を上げる（外転・屈曲）際に、上腕骨の動きが2度に対して肩甲骨が1度の割合で動くという連動性を示します。これにより、スムーズで安全な肩の動きが可能になります。'
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const quiz10Btn = document.getElementById('quiz-10-btn');
    const quiz20Btn = document.getElementById('quiz-20-btn');
    const quizAllBtn = document.getElementById('quiz-all-btn');
    const toggleAllAnswersBtn = document.getElementById('toggle-all-answers-btn');
    const answerControlDiv = document.querySelector('.answer-control');

    // Fisher-Yates (Knuth) shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function generateQuiz(numQuestions) {
        quizContainer.innerHTML = ''; // Clear previous quiz
        answerControlDiv.style.display = 'block'; // Show toggle all answers button

        const shuffledQuizData = shuffleArray([...quizData]); // Shuffle a copy of the data
        const selectedQuestions = shuffledQuizData.slice(0, numQuestions);

        let currentSection = '';
        selectedQuestions.forEach((q, index) => {
            if (q.section !== currentSection) {
                const sectionHeader = document.createElement('h2');
                sectionHeader.textContent = `第${index + 1}部：${q.section}`;
                quizContainer.appendChild(sectionHeader);
                currentSection = q.section;
            }

            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');

            const questionHeader = document.createElement('h3');
            questionHeader.textContent = `問${index + 1}（${q.type}）`;
            questionBlock.appendChild(questionHeader);

            const questionText = document.createElement('p');
            questionText.textContent = q.question;
            questionBlock.appendChild(questionText);

            if (q.options && q.options.length > 0) {
                const optionsList = document.createElement('ol');
                optionsList.setAttribute('type', 'a');
                q.options.forEach(option => {
                    const listItem = document.createElement('li');
                    listItem.textContent = option;
                    optionsList.appendChild(listItem);
                });
                questionBlock.appendChild(optionsList);
            }

            const toggleBtn = document.createElement('button');
            toggleBtn.classList.add('toggle-answer-btn');
            toggleBtn.textContent = '解答を表示/非表示';
            questionBlock.appendChild(toggleBtn);

            const answerBlock = document.createElement('div');
            answerBlock.classList.add('answer-block', 'hidden');

            const answerP = document.createElement('p');
            answerP.innerHTML = `<strong>解答：</strong> ${q.answer}`;
            answerBlock.appendChild(answerP);

            const explanationP = document.createElement('p');
            explanationP.innerHTML = `<strong>解説：</strong> ${q.explanation}`;
            answerBlock.appendChild(explanationP);

            questionBlock.appendChild(answerBlock);
            quizContainer.appendChild(questionBlock);
        });

        // Add event listeners to newly created toggle buttons
        document.querySelectorAll('.toggle-answer-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.nextElementSibling.classList.toggle('hidden');
            });
        });
    }

    // Event listeners for quiz mode selection buttons
    quiz10Btn.addEventListener('click', () => generateQuiz(10));
    quiz20Btn.addEventListener('click', () => generateQuiz(20));
    quizAllBtn.addEventListener('click', () => generateQuiz(quizData.length));

    // Event listener for toggle all answers button
    toggleAllAnswersBtn.addEventListener('click', function() {
        const allAnswerBlocks = document.querySelectorAll('.answer-block');
        const allHidden = Array.from(allAnswerBlocks).every(block => block.classList.contains('hidden'));

        allAnswerBlocks.forEach(block => {
            if (allHidden) {
                block.classList.remove('hidden');
            } else {
                block.classList.add('hidden');
            }
        });
    });
});