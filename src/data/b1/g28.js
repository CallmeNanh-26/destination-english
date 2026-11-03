// Unit 28 – Grammar: Conditionals 1 – zero, first, second (Destination B1).
export default {
  id: 'b1-u28',
  book: 'b1',
  no: 28,
  title: 'Conditionals 1: zero, first, second',
  titleVi: 'Câu điều kiện loại 0, 1, 2',
  blocks: [
    { type: 'p', text: 'Câu điều kiện có 2 phần: **tình huống** (mệnh đề if) và **kết quả**.\nNếu bắt đầu bằng **if** → có **dấu phẩy**: If you join a gym, I’ll join too.\nNếu bắt đầu bằng kết quả → **không** có dấu phẩy: I’ll join too if you join a gym.' },

    { type: 'h', text: '1. Câu điều kiện loại 0 (zero conditional)' },
    { type: 'table', head: ['Cấu trúc', 'Dùng khi', 'Ví dụ'], rows: [
      ['**If + hiện tại đơn, hiện tại đơn**', 'Sự thật chung, khoa học', 'If people **eat** too much, they often **get** fat. / If you **heat** ice, it **melts**.'],
    ] },

    { type: 'h', text: '2. Câu điều kiện loại 1 (first conditional)' },
    { type: 'table', head: ['Cấu trúc', 'Dùng khi', 'Ví dụ'], rows: [
      ['**If + hiện tại đơn, will + V**', 'Tình huống **có thật / có khả năng** xảy ra ở hiện tại hoặc tương lai', 'If you **take** these pills, you**’ll start** to feel better soon.'],
    ] },
    { type: 'tip', text: '• Có thể thay will bằng modal khác: If you get some rest, you **might** feel better.\n• Hoặc câu mệnh lệnh: If you don’t feel well, **go** home!\n• **unless** = if … not: You’ll fail **unless** you study. (= if you don’t study)' },
    { type: 'warn', text: 'KHÔNG dùng will trong mệnh đề if:\n✗ If it will rain, we’ll stay at home. → ✓ If it **rains**, we’ll stay at home.' },

    { type: 'h', text: '3. Câu điều kiện loại 2 (second conditional)' },
    { type: 'table', head: ['Cấu trúc', 'Dùng khi', 'Ví dụ'], rows: [
      ['**If + quá khứ đơn, would + V**', 'Tình huống **không có thật / khó xảy ra** ở hiện tại hoặc tương lai', 'If my legs **were** longer, I **would be** a much faster runner!'],
    ] },
    { type: 'p', text: 'Dù dùng thì quá khứ, câu loại 2 **không** nói về quá khứ mà về hiện tại/tương lai không có thật.\nIf I **had** a million dollars, I **would travel** around the world. (nhưng tôi không có)' },
    { type: 'tip', text: '**Lời khuyên**: **If I were you, I would…** (trang trọng hơn) / If I was you, I’d… (thân mật).\nIf I **were** you, I would eat less chocolate.\nCó thể thay would bằng **could / might**: If I had more time, I **could** learn the guitar.' },

    { type: 'h', text: 'So sánh loại 1 và loại 2' },
    { type: 'table', head: ['Loại 1 – có khả năng', 'Loại 2 – không thực tế'], rows: [
      ['If I **pass** the exam, I**’ll** celebrate. (có thể đỗ)', 'If I **won** the lottery, I**’d** buy a house. (khó xảy ra)'],
      ['If it **rains** tomorrow, we**’ll** stay in.', 'If I **lived** by the sea, I**’d** swim every day. (nhưng tôi không sống ở đó)'],
    ] },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Dùng will sau if: ✗ If I will have time → ✓ If I **have** time.',
      'Dùng would sau if: ✗ If I would be rich → ✓ If I **were** rich.',
      'Trộn loại: ✗ If I had money, I will buy… → ✓ If I had money, I **would** buy…',
      'Quên dấu phẩy khi mệnh đề if đứng đầu câu (trong văn viết).',
    ] },
    { type: 'tip', text: 'IELTS Speaking Part 3 rất hay hỏi giả định: “What would happen if…?”, “If you were the government, what would you do?”. Trả lời bằng câu loại 2: “**If** the government **invested** more in public transport, fewer people **would** drive to work.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'If you heat water to 100°C, it ___.', o: ['boils', 'will boil', 'would boil'], a: 0 },
        { t: 'mcq', q: 'If it ___ tomorrow, we’ll cancel the picnic.', o: ['rains', 'will rain', 'rained'], a: 0 },
        { t: 'mcq', q: 'If I ___ rich, I would buy a house by the sea.', o: ['am', 'were', 'will be'], a: 1 },
        { t: 'mcq', q: 'If you study hard, you ___ the exam.', o: ['pass', "'ll pass", "'d pass"], a: 1 },
        { t: 'mcq', q: 'If I were you, I ___ that job.', o: ['will take', 'would take', 'take'], a: 1 },
        { t: 'mcq', q: 'What ___ you do if you lost your phone?', o: ['will', 'would', 'do'], a: 1 },
        { t: 'mcq', q: 'You won’t get fit ___ you exercise regularly.', o: ['if', 'unless', 'when'], a: 1 },
        { t: 'mcq', q: 'If she ___ more time, she would learn Japanese.', o: ['has', 'had', 'would have'], a: 1 },
        { t: 'mcq', q: 'If you don’t feel well, ___ home.', o: ['go', 'went', 'would go'], a: 0 },
        { t: 'mcq', q: 'I’ll call you if I ___ any news.', o: ['hear', 'will hear', 'heard'], a: 0 },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Chia động từ trong ngoặc (loại 0, 1 hoặc 2).',
      items: [
        { t: 'gap', q: 'If you mix red and blue, you ___ (get) purple.', a: ['get'] },
        { t: 'gap', q: 'If I ___ (see) Lan, I’ll give her your message.', a: ['see'] },
        { t: 'gap', q: 'If I ___ (be) taller, I’d play basketball.', a: ['were', 'was'] },
        { t: 'gap', q: 'We ___ (miss) the bus if we don’t hurry.', a: ['will miss', "'ll miss"] },
        { t: 'gap', q: 'If I had a car, I ___ (drive) to work.', a: ['would drive', "'d drive"] },
        { t: 'gap', q: 'If he ___ (not/study), he won’t pass.', a: ["doesn't study", 'does not study'] },
        { t: 'gap', q: 'What would you do if you ___ (win) the lottery?', a: ['won'] },
        { t: 'gap', q: 'If I ___ (know) the answer, I would tell you.', a: ['knew'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'If it will rain, we will stay at home.', a: ['If it rains, we will stay at home.', "If it rains, we'll stay at home."] },
        { t: 'fix', q: 'If I would be rich, I would travel the world.', a: ['If I were rich, I would travel the world.', 'If I was rich, I would travel the world.'] },
        { t: 'fix', q: 'If I had more money, I will buy a new laptop.', a: ['If I had more money, I would buy a new laptop.', "If I had more money, I'd buy a new laptop."] },
        { t: 'fix', q: 'If I am you, I would see a doctor.', a: ['If I were you, I would see a doctor.', 'If I was you, I would see a doctor.', "If I were you, I'd see a doctor."] },
        { t: 'fix', q: "Unless you don't hurry, you'll be late.", a: ["Unless you hurry, you'll be late.", 'Unless you hurry, you will be late.', "If you don't hurry, you'll be late."] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng câu điều kiện phù hợp.',
      items: [
        { t: 'tr', vi: 'Nếu bạn không ngủ đủ giấc, bạn sẽ khó tập trung.', ref: "If you don't get enough sleep, you'll find it hard to concentrate.", focus: 'first conditional' },
        { t: 'tr', vi: 'Nếu tôi là bạn, tôi sẽ luyện nói tiếng Anh mỗi ngày.', ref: "If I were you, I'd practise speaking English every day.", focus: 'If I were you' },
        { t: 'tr', vi: 'Nếu tôi có nhiều thời gian hơn, tôi sẽ học chơi guitar.', ref: "If I had more time, I'd learn to play the guitar.", focus: 'second conditional' },
        { t: 'tr', vi: 'Nếu trời mưa vào thứ Bảy, chúng ta sẽ đi xem phim.', ref: "If it rains on Saturday, we'll go to the cinema.", focus: 'first conditional' },
        { t: 'tr', vi: 'Nếu chính phủ đầu tư nhiều hơn vào giao thông công cộng, sẽ có ít người lái xe hơn.', ref: 'If the government invested more in public transport, fewer people would drive.', focus: 'second conditional (IELTS)' },
        { t: 'tr', vi: 'Bạn sẽ không tiến bộ trừ khi bạn luyện tập thường xuyên.', ref: "You won't improve unless you practise regularly.", focus: 'unless' },
      ],
    },
  ],
};
