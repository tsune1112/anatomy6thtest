document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            type: '選択式',
            section: 'スクワット',
            question: 'スクワット動作における主働筋の組み合わせとして、最も適切なものはどれですか？',
            options: ['大胸筋、上腕三頭筋、三角筋', '広背筋、上腕二頭筋、菱形筋', '大腿四頭筋、大殿筋、ハムストリングス', '腹直筋、腹横筋、脊柱起立筋'],
            answer: 'c) 大腿四頭筋、大殿筋、ハムストリングス',
            explanation: 'スクワットは下半身の代表的な多関節運動で、主に股関節の伸展（大殿筋 Gluteus Maximus、ハムストリングス Hamstrings）と膝関節の伸展（大腿四頭筋 Quadriceps）によって動作します。'
        },
        {
            type: '穴埋め式',
            section: 'スクワット',
            question: '深いスクワット（ディープスクワット）では、股関節の屈曲角度が大きくなるため、特に ( ① ) の活動が相対的に上がる傾向があります。',
            answer: '① 大殿筋',
            explanation: 'スクワットを深く行うと股関節の屈曲が大きくなり、伸張された大殿筋 (Gluteus Maximus) の活動が高まります。'
        },
        {
            type: '穴埋め式',
            section: 'スクワット',
            question: '大腿四頭筋 (Quadriceps) の停止は膝蓋骨を経由して ( ① ) です。',
            answer: '① 脛骨粗面',
            explanation: '大腿四頭筋 (Quadriceps) は膝蓋骨 (Patella) を経由して脛骨粗面 (Tibial Tuberosity) に停止します。',
            category: 'origin_insertion'
        },
        {
            type: '選択式',
            section: 'スクワット',
            question: '大殿筋 (Gluteus Maximus) の起始として正しいものはどれですか？',
            options: ['腸骨前下棘', '坐骨結節', '仙骨、腸骨後面、胸腰筋膜', '鎖骨内側半分'],
            answer: 'c) 仙骨、腸骨後面、胸腰筋膜',
            explanation: '大殿筋 (Gluteus Maximus) の起始は仙骨 (Sacrum)、腸骨後面 (Posterior Ilium)、胸腰筋膜 (Thoracolumbar Fascia) です。',
            category: 'origin_insertion'
        },
        {
            type: '正誤問題',
            section: 'ヒップリフト',
            question: 'ヒップリフトにおいて、膝を深く曲げる（膝関節の屈曲角度を小さくする）と、ハムストリングスの活動が優位になり、大殿筋の貢献度は下がる。 (正 or 誤)',
            answer: '誤',
            explanation: '膝を深く曲げるとハムストリングス (Hamstrings) が短縮した状態（短縮位）になり、力を発揮しにくくなります。その結果、股関節伸展の主動作が大殿筋 (Gluteus Maximus) に移り、大殿筋の活動が相対的に上がります。'
        },
        {
            type: '記述式',
            section: 'ヒップリフト',
            question: 'ヒップリフトで足幅を広げた場合、どの筋肉群の活動が増加しますか？その理由も簡潔に説明してください。',
            answer: '内転筋群。',
            explanation: '足幅を広げると、股関節伸展を協力する内転筋群 (Adductor Muscles)（特に大内転筋 Adductor Magnus）が動員されるため。'
        },
        {
            type: '選択式',
            section: 'ベンチプレス',
            question: 'ベンチプレスでグリップ幅を広くした場合、特に活動が増加するのはどの筋肉のどの部分ですか？',
            options: ['大胸筋の鎖骨部', '大胸筋の胸骨部', '三角筋の前部', '上腕三頭筋'],
            answer: 'b) 大胸筋の胸骨部',
            explanation: 'グリップ幅を広くすると大胸筋 (Pectoralis Major) 胸骨部の活動が増加し、狭くすると三角筋前部 (Anterior Deltoid) と大胸筋鎖骨部 (Pectoralis Major Clavicular Head) の活動が増加します。これは、筋線維の走行方向と力の発揮方向の関係によるものです。目的に応じてグリップ幅を調整することで、ターゲットとする筋肉の活動を最適化できます。'
        },
        {
            type: '穴埋め式',
            section: 'ベンチプレス',
            question: 'ベンチプレスにおいて、肩関節の安定性を高め、傷害リスクを低減するためには、肩甲骨を ( ① ) ・ ( ② ) させることが重要です。',
            answer: '① 後退、② 下制',
            explanation: '肩甲骨を後退・下制させることで、肩関節が安定し、大胸筋 (Pectoralis Major) の活動を高めることができます。これにより、肩のインピンジメントなどのリスクを軽減します。'
        },
        {
            type: '選択式',
            section: 'ベンチプレス',
            question: '上腕三頭筋 (Triceps Brachii) の長頭の起始はどこですか？',
            options: ['烏口突起', '関節窩下結節', '上腕骨後面', '尺骨肘頭'],
            answer: 'b) 関節窩下結節',
            explanation: '上腕三頭筋 (Triceps Brachii) の長頭の起始は関節窩下結節 (Infraglenoid Tubercle) です。',
            category: 'origin_insertion'
        },
        {
            type: '選択式',
            section: 'プランク',
            question: 'プランク姿勢を維持する際に、体幹の安定性に最も重要とされ、「天然のコルセット」とも呼ばれる筋肉はどれですか？',
            options: ['腹直筋', '外腹斜筋', '内腹斜筋', '腹横筋'],
            answer: 'd) 腹横筋',
            explanation: '腹横筋 (Transversus Abdominis) は腹部の最も深層にある筋肉で、その筋線維は水平に走行しています。お腹周りをコルセットのように包み込み、腹圧を高めて体幹を安定させる重要な役割を持ちます。'
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
            explanation: '動作開始時に肩甲骨を下に引き下げる（下制）ことで、主働筋である広背筋 (Latissimus Dorsi) が効率的に収縮し、適切に背中の筋肉を鍛えることができます。'
        },
        {
            type: '記述式',
            section: 'チンニング（懸垂）',
            question: 'チンニング（懸垂）で、順手（手のひらが前向き）と逆手（手のひらが自分向き）では、主にどちらの筋肉の関与度が変わりますか？それぞれの場合で活動が高まる筋肉を挙げてください。',
            answer: '主に上腕二頭筋と広背筋の関与度合いが変わります。逆手では上腕二頭筋の活動が高まり、順手では広背筋の活動が高まります。',
            explanation: '逆手（手のひらが自分向き）は、上腕二頭筋 (Biceps Brachii) が最も力を発揮しやすい肢位のため、その関与が大きくなります。'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '広背筋 (Latissimus Dorsi) の停止は ( ① ) です。',
            answer: '① 上腕骨小結節稜',
            explanation: '広背筋 (Latissimus Dorsi) の停止は上腕骨小結節稜 (Lesser Tubercle of Humerus) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: 'ショルダープレスにおける肩の安定性には、主働筋である三角筋と、( ① ) と呼ばれる4つの筋肉群（棘上筋、棘下筋、小円筋、肩甲下筋）の協調が不可欠です。',
            answer: '① ローテーターカフ（回旋筋腱板）',
            explanation: 'ローテーターカフ (Rotator Cuff) は肩関節を安定させるインナーマッスルの総称です。三角筋 (Deltoid) が大きな力を発揮する間、上腕骨頭が関節窩からずれないように保持する重要な役割を担います。'
        },
        {
            type: '選択式',
            section: 'ショルダープレス',
            question: 'ショルダープレスにおける腕の動きと肩甲骨の動きの連動は「肩甲上腕リズム」と呼ばれます。このリズムにおける、上腕骨と肩甲骨の理想的な動きの比率（上腕骨：肩甲骨）はどれですか？',
            options: ['1 : 1', '2 : 1', '1 : 2', '3 : 1'],
            answer: 'b) 2 : 1',
            explanation: '肩甲上腕リズムは、腕を上げる（外転・屈曲）際に、上腕骨の動きが2度に対して肩甲骨が1度の割合で動くという連動性を示します。これにより、スムーズで安全な肩の動きが可能になります。'
        },
        // 新しい起始・停止に関する問題
        {
            type: '穴埋め式',
            section: 'スクワット',
            question: '大腿四頭筋 (Quadriceps) のうち、大腿直筋 (Rectus Femoris) の起始は ( ① ) です。',
            answer: '① 腸骨前下棘',
            explanation: '大腿四頭筋 (Quadriceps) の大腿直筋 (Rectus Femoris) の起始は腸骨前下棘 (Anterior Inferior Iliac Spine) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'スクワット',
            question: 'ハムストリングス (Hamstrings) の起始は ( ① ) です。',
            answer: '① 坐骨結節',
            explanation: 'ハムストリングス (Hamstrings) の起始は坐骨結節 (Ischial Tuberosity) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'スクワット',
            question: 'ハムストリングス (Hamstrings) の停止のうち、半腱様筋 (Semitendinosus) と半膜様筋 (Semimembranosus) の停止は ( ① ) です。',
            answer: '① 脛骨内側顆',
            explanation: 'ハムストリングス (Hamstrings) の半腱様筋 (Semitendinosus) と半膜様筋 (Semimembranosus) の停止は脛骨内側顆 (Medial Condyle of Tibia) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'スクワット',
            question: 'ハムストリングス (Hamstrings) の停止のうち、大腿二頭筋 (Biceps Femoris) の停止は ( ① ) です。',
            answer: '① 腓骨頭',
            explanation: 'ハムストリングス (Hamstrings) の大腿二頭筋 (Biceps Femoris) の停止は腓骨頭 (Head of Fibula) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ヒップリフト',
            question: '脊柱起立筋 (Erector Spinae) の起始は仙骨、腸骨稜、( ① ) です。',
            answer: '① 腰椎棘突起',
            explanation: '脊柱起立筋 (Erector Spinae) の起始は仙骨 (Sacrum)、腸骨稜 (Iliac Crest)、腰椎棘突起 (Lumbar Spinous Processes) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ヒップリフト',
            question: '脊柱起立筋 (Erector Spinae) の停止は肋骨、( ① ) ・ ( ② ) 棘突起です。',
            answer: '① 胸椎、② 頸椎',
            explanation: '脊柱起立筋 (Erector Spinae) の停止は肋骨 (Ribs)、胸椎 (Thoracic Vertebrae)・頸椎 (Cervical Vertebrae) 棘突起です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ベンチプレス',
            question: '大胸筋 (Pectoralis Major) の起始は鎖骨内側半分、( ① ) 、肋軟骨です。',
            answer: '① 胸骨前面',
            explanation: '大胸筋 (Pectoralis Major) の起始は鎖骨内側半分 (Medial Half of Clavicle)、胸骨前面 (Anterior Surface of Sternum)、肋軟骨 (Costal Cartilages) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ベンチプレス',
            question: '大胸筋 (Pectoralis Major) の停止は ( ① ) です。',
            answer: '① 上腕骨大結節稜',
            explanation: '大胸筋 (Pectoralis Major) の停止は上腕骨大結節稜 (Crest of Greater Tubercle of Humerus) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ベンチプレス',
            question: '三角筋前部 (Anterior Deltoid) の起始は ( ① ) です。',
            answer: '① 鎖骨外側 1/3',
            explanation: '三角筋前部 (Anterior Deltoid) の起始は鎖骨外側 1/3 (Lateral 1/3 of Clavicle) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ベンチプレス',
            question: '三角筋前部 (Anterior Deltoid) の停止は ( ① ) です。',
            answer: '① 上腕骨三角筋粗面',
            explanation: '三角筋前部 (Anterior Deltoid) の停止は上腕骨三角筋粗面 (Deltoid Tuberosity of Humerus) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ベンチプレス',
            question: '上腕三頭筋 (Triceps Brachii) の停止は ( ① ) です。',
            answer: '① 尺骨肘頭',
            explanation: '上腕三頭筋 (Triceps Brachii) の停止は尺骨肘頭 (Olecranon Process of Ulna) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'プランク',
            question: '腹横筋 (Transversus Abdominis) の起始は胸腰筋膜、腸骨稜、( ① ) です。',
            answer: '① 下位肋軟骨',
            explanation: '腹横筋 (Transversus Abdominis) の起始は胸腰筋膜 (Thoracolumbar Fascia)、腸骨稜 (Iliac Crest)、下位肋軟骨 (Lower Costal Cartilages) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'プランク',
            question: '腹横筋 (Transversus Abdominis) の停止は腹直筋鞘、白線、( ① ) です。',
            answer: '① 恥骨結合',
            explanation: '腹横筋 (Transversus Abdominis) の停止は腹直筋鞘 (Rectus Sheath)、白線 (Linea Alba)、恥骨結合 (Pubic Symphysis) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'プランク',
            question: '腹直筋 (Rectus Abdominis) の起始は ( ① ) 、恥骨稜です。',
            answer: '① 恥骨結合',
            explanation: '腹直筋 (Rectus Abdominis) の起始は恥骨結合 (Pubic Symphysis)、恥骨稜 (Pubic Crest) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'プランク',
            question: '腹直筋 (Rectus Abdominis) の停止は剣状突起、( ① ) 肋軟骨です。',
            answer: '① 第 5-7',
            explanation: '腹直筋 (Rectus Abdominis) の停止は剣状突起 (Xiphoid Process)、第 5-7肋軟骨 (5th-7th Costal Cartilages) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'プランク',
            question: '外腹斜筋 (External Oblique) の起始は ( ① ) です。',
            answer: '① 下位 8肋骨',
            explanation: '外腹斜筋 (External Oblique) の起始は下位 8肋骨 (Lower 8 Ribs) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'プランク',
            question: '内腹斜筋 (Internal Oblique) の起始は ( ① ) です。',
            answer: '① 胸腰筋膜',
            explanation: '内腹斜筋 (Internal Oblique) の起始は胸腰筋膜 (Thoracolumbar Fascia) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'プランク',
            question: '腹斜筋 (Obliques) の停止は腹直筋鞘、白線、( ① ) です。',
            answer: '① 恥骨結合',
            explanation: '腹斜筋 (Obliques) の停止は腹直筋鞘 (Rectus Sheath)、白線 (Linea Alba)、恥骨結合 (Pubic Symphysis) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '広背筋 (Latissimus Dorsi) の起始は胸腰筋膜、下部胸椎・腰椎棘突起、( ① ) です。',
            answer: '① 仙骨後面',
            explanation: '広背筋 (Latissimus Dorsi) の起始は胸腰筋膜 (Thoracolumbar Fascia)、下部胸椎・腰椎棘突起 (Lower Thoracic and Lumbar Spinous Processes)、仙骨後面 (Posterior Sacrum) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '大円筋 (Teres Major) の起始は ( ① ) です。',
            answer: '① 肩甲骨下角外側面',
            explanation: '大円筋 (Teres Major) の起始は肩甲骨下角外側面 (Inferior Angle of Scapula, Lateral Surface) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '大円筋 (Teres Major) の停止は ( ① ) です。',
            answer: '① 上腕骨小結節稜',
            explanation: '大円筋 (Teres Major) の停止は上腕骨小結節稜 (Lesser Tubercle of Humerus) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '菱形筋 (Rhomboids) の起始は ( ① ) 頸椎〜 ( ② ) 胸椎棘突起です。',
            answer: '① 第7、② 第 5',
            explanation: '菱形筋 (Rhomboids) の起始は第7頸椎 (7th Cervical Vertebra)〜第 5胸椎棘突起 (5th Thoracic Vertebra Spinous Processes) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '菱形筋 (Rhomboids) の停止は ( ① ) です。',
            answer: '① 肩甲骨内側縁',
            explanation: '菱形筋 (Rhomboids) の停止は肩甲骨内側縁 (Medial Border of Scapula) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '上腕二頭筋 (Biceps Brachii) の長頭の起始は ( ① ) です。',
            answer: '① 関節窩上結節',
            explanation: '上腕二頭筋 (Biceps Brachii) の長頭の起始は関節窩上結節 (Supraglenoid Tubercle) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '上腕二頭筋 (Biceps Brachii) の短頭の起始は ( ① ) です。',
            answer: '① 烏口突起',
            explanation: '上腕二頭筋 (Biceps Brachii) の短頭の起始は烏口突起 (Coracoid Process) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'チンニング（懸垂）',
            question: '上腕二頭筋 (Biceps Brachii) の停止は ( ① ) です。',
            answer: '① 橈骨粗面',
            explanation: '上腕二頭筋 (Biceps Brachii) の停止は橈骨粗面 (Radial Tuberosity) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: '三角筋 (Deltoid) の起始のうち、前部は ( ① ) です。',
            answer: '① 鎖骨外側 1/3',
            explanation: '三角筋 (Deltoid) の起始のうち、前部 (Anterior Deltoid) は鎖骨外側 1/3 (Lateral 1/3 of Clavicle) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: '三角筋 (Deltoid) の起始のうち、中部は ( ① ) です。',
            answer: '① 肩峰',
            explanation: '三角筋 (Deltoid) の起始のうち、中部 (Middle Deltoid) は肩峰 (Acromion) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: '三角筋 (Deltoid) の起始のうち、後部は ( ① ) です。',
            answer: '① 肩甲棘',
            explanation: '三角筋 (Deltoid) の起始のうち、後部 (Posterior Deltoid) は肩甲棘 (Spine of Scapula) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: '三角筋 (Deltoid) の停止は ( ① ) です。',
            answer: '① 上腕骨三角筋粗面',
            explanation: '三角筋 (Deltoid) の停止は上腕骨三角筋粗面 (Deltoid Tuberosity of Humerus) です。',
            category: 'origin_insertion'
        },
        {
            type: '選択式',
            section: 'ショルダープレス',
            question: 'ローテーターカフ (Rotator Cuff) を構成する筋肉として正しい組み合わせはどれですか？',
            options: ['大胸筋、広背筋、三角筋、上腕三頭筋', '棘上筋、棘下筋、小円筋、肩甲下筋', '腹直筋、腹横筋、内腹斜筋、外腹斜筋', '大腿四頭筋、ハムストリングス、大殿筋、下腿三頭筋'],
            answer: 'b) 棘上筋、棘下筋、小円筋、肩甲下筋',
            explanation: 'ローテーターカフ (Rotator Cuff) は棘上筋 (Supraspinatus)、棘下筋 (Infraspinatus)、小円筋 (Teres Minor)、肩甲下筋 (Subscapularis) の4つの筋肉で構成されます。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: 'ローテーターカフ (Rotator Cuff) の停止は上腕骨の ( ① ) ・ ( ② ) です。',
            answer: '① 大結節、② 小結節',
            explanation: 'ローテーターカフ (Rotator Cuff) の停止は上腕骨の大結節 (Greater Tubercle of Humerus) ・小結節 (Lesser Tubercle of Humerus) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: '僧帽筋上部 (Upper Trapezius) の起始は後頭骨外後頭隆起、( ① ) です。',
            answer: '① 項靭帯',
            explanation: '僧帽筋上部 (Upper Trapezius) の起始は後頭骨外後頭隆起 (External Occipital Protuberance)、項靭帯 (Nuchal Ligament) です。',
            category: 'origin_insertion'
        },
        {
            type: '穴埋め式',
            section: 'ショルダープレス',
            question: '僧帽筋上部 (Upper Trapezius) の停止は鎖骨外側 1/3、肩峰、( ① ) です。',
            answer: '① 肩甲棘',
            explanation: '僧帽筋上部 (Upper Trapezius) の停止は鎖骨外側 1/3 (Lateral 1/3 of Clavicle)、肩峰 (Acromion)、肩甲棘 (Spine of Scapula) です。',
            category: 'origin_insertion'
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const quiz10Btn = document.getElementById('quiz-10-btn');
    const quiz20Btn = document.getElementById('quiz-20-btn');
    const quizAllBtn = document.getElementById('quiz-all-btn');
    const toggleAllAnswersBtn = document.getElementById('toggle-all-answers-btn');
    const answerControlDiv = document.querySelector('.answer-control');

    // Event listeners for quiz mode selection buttons
    quiz10Btn.addEventListener('click', () => generateQuiz(10));
    quiz20Btn.addEventListener('click', () => generateQuiz(20));
    quizAllBtn.addEventListener('click', () => generateQuiz(quizData.length));

    // Event listeners for new origin/insertion quiz buttons
    document.getElementById('origin-insertion-quiz-10-btn').addEventListener('click', () => generateQuiz(10, 'origin_insertion'));
    document.getElementById('origin-insertion-quiz-15-btn').addEventListener('click', () => generateQuiz(15, 'origin_insertion'));
    document.getElementById('origin-insertion-quiz-20-btn').addEventListener('click', () => generateQuiz(20, 'origin_insertion'));


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