// Unit 40 – Grammar: Connectives (Destination B1).
export default {
  id: 'b1-u40',
  book: 'b1',
  no: 40,
  title: 'Connectives',
  titleVi: 'Từ nối: thời gian, tương phản, unless',
  blocks: [
    { type: 'h', text: 'Từ chỉ thời gian + hiện tại đơn (nói về tương lai)' },
    { type: 'p', text: 'Sau **after, as soon as, before, until/till, when, while** ta dùng **hiện tại đơn** (hoặc hiện tại hoàn thành) để nói về tương lai – **không dùng will / be going to**.' },
    { type: 'table', head: ['Từ nối', 'Ví dụ'], rows: [
      ['after', 'I’ll call you **after** we **solve** the problem.'],
      ['as soon as', 'I’ll call you **as soon as** we **solve** the problem.'],
      ['before', 'It’ll be a few days **before** we **find** the solution.'],
      ['until / till', 'I won’t call you **until** we **find** the solution.'],
      ['when', 'It’ll be great **when** we **find** the solution.'],
      ['while', 'I’ll be in the office **while** I **deal** with this problem.'],
    ] },
    { type: 'tip', text: '• Có thể đặt mệnh đề thời gian ở đầu câu – khi đó dùng **dấu phẩy**:\n**As soon as** we solve the problem, I’ll call you.\n• Dùng **hiện tại hoàn thành** để nhấn mạnh việc đã xong: I’ll go out **after** I**’ve finished** my homework.' },
    { type: 'warn', text: '✗ I’ll call you when I **will get** home. → ✓ … when I **get** home.\n✗ Wait here until I **will come** back. → ✓ … until I **come** back.' },

    { type: 'h', text: 'Từ chỉ sự tương phản' },
    { type: 'table', head: ['Từ nối', 'Cấu trúc', 'Ví dụ'], rows: [
      ['**although**', 'Although + **S + V**, S + V', '**Although** my homework **was** difficult, I finished it before bed.\nI finished it before bed, **although** it was difficult.'],
      ['**in spite of / despite**', '+ **V-ing** hoặc **danh từ**, S + V', '**In spite of revising** for hours, I didn’t do well.\n**Despite my revision**, I didn’t do well.\nI didn’t do well, **despite revising** for hours.'],
      ['**however**', 'Câu 1. **However**, câu 2.', 'We believed we would find a solution. **However**, we were wrong.\n… We were wrong, **however**.'],
    ] },
    { type: 'warn', text: '• **despite** KHÔNG có **of**: ✗ despite of → ✓ despite / in spite of\n• Sau despite / in spite of KHÔNG dùng mệnh đề: ✗ Despite it was cold → ✓ **Although** it was cold / **Despite the cold** / **Despite it being** cold / **Despite the fact that** it was cold.\n• **however** bắt đầu câu mới, có dấu phẩy sau; không nối 2 mệnh đề bằng dấu phẩy như although.\n• Không dùng **although … but** cùng lúc (lỗi rất phổ biến của người Việt do “tuy … nhưng”): ✗ Although it rained, **but** we went out.' },

    { type: 'h', text: 'unless = if … not' },
    { type: 'p', text: '**Unless** you hurry up, we’ll be late. (= **If** you **don’t** hurry up, we’ll be late.)\nSau unless dùng động từ **khẳng định**: ✗ Unless you don’t hurry → ✓ Unless you hurry.' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ Although he was tired, but he kept working. → ✓ **Although** he was tired, he kept working.',
      '✗ Despite of the rain, … → ✓ **Despite** the rain / **In spite of** the rain, …',
      '✗ I will tell you when I will know. → ✓ I will tell you when I **know**.',
      '✗ However the CD was expensive, it was bad. → ✓ The CD was expensive. **However**, it was bad.',
    ] },
    { type: 'tip', text: 'IELTS Writing Task 2 – từ nối tương phản giúp bài viết mạch lạc (Coherence & Cohesion):\n“**Although** technology has many benefits, it also has some drawbacks.”\n“**Despite** the high cost, many families still choose private schools.”\n“Public transport is cheap. **However**, it is often crowded and unreliable.”\nĐừng lặp “However” quá nhiều – kết hợp với although, despite, while, whereas.' },
  ],
  exercises: [
    {
      title: 'A. Sửa thì sau từ nối thời gian',
      instruction: 'Cụm trong ngoặc kép sai. Viết lại cụm đúng.',
      items: [
        { t: 'gap', q: 'We’ll have something to eat when we “will get” home. → ___', a: ['get'] },
        { t: 'gap', q: 'I won’t book the tickets until you “will tell” me to. → ___', a: ['tell'] },
        { t: 'gap', q: 'I’ll come home as soon as the concert “will finish”. → ___', a: ['finishes', 'has finished'] },
        { t: 'gap', q: 'After you “are going to do” this test, we’ll play a game. → ___', a: ['do', 'have done', "'ve done"] },
        { t: 'gap', q: 'He’ll send you a text message before he “is going to leave”. → ___', a: ['leaves'] },
        { t: 'gap', q: 'Will you go to St Petersburg while you “will be” in Russia? → ___', a: ['are'] },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Chia động từ (be, come, finish, have, leave, take) đúng thì.',
      items: [
        { t: 'gap', q: 'Call me as soon as you ___ (have) any news.', a: ['have'] },
        { t: 'gap', q: 'She’ll have to do a lot of revision before she ___ (take) the exam.', a: ['takes'] },
        { t: 'gap', q: 'Are they going to visit you while they ___ (be) in the UK?', a: ['are'] },
        { t: 'gap', q: 'Do you want to go to university after you ___ (leave) school?', a: ['leave'] },
        { t: 'gap', q: 'Claire won’t have a break until she ___ (finish) all her homework.', a: ['finishes', 'has finished'] },
        { t: 'gap', q: 'The lesson can’t start till the teacher ___ (come).', a: ['comes'] },
      ],
    },
    {
      title: 'C. Although hay Despite?',
      instruction: 'Chọn từ đúng.',
      items: [
        { t: 'mcq', q: '___ the water was cold, we still went swimming.', o: ['Although', 'Despite'], a: 0 },
        { t: 'mcq', q: '___ my mum’s got a mobile, she never uses it.', o: ['Although', 'Despite'], a: 0 },
        { t: 'mcq', q: '___ looking for hours, I couldn’t find a nice pair of jeans.', o: ['Although', 'Despite'], a: 1 },
        { t: 'mcq', q: '___ taking a map, we still got lost.', o: ['Although', 'Despite'], a: 1 },
        { t: 'mcq', q: 'I don’t like sweets, ___ I do like chocolate.', o: ['although', 'despite'], a: 0 },
        { t: 'mcq', q: 'We enjoyed the picnic ___ the bad weather.', o: ['although', 'despite'], a: 1 },
      ],
    },
    {
      title: 'D. Although / In spite of / However',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: '___ it was expensive, the CD wasn’t very good quality.', o: ['Although', 'In spite of', 'However'], a: 0 },
        { t: 'mcq', q: '___ being expensive, the CD wasn’t very good quality.', o: ['Although', 'In spite of', 'However'], a: 1 },
        { t: 'mcq', q: '___ the cost, the CD wasn’t very good quality.', o: ['Although', 'In spite of', 'However'], a: 1 },
        { t: 'mcq', q: 'The CD was expensive. ___, it wasn’t very good quality.', o: ['Although', 'In spite of', 'However'], a: 2 },
        { t: 'mcq', q: 'The CD was expensive. It wasn’t very good quality, ___.', o: ['although', 'despite', 'however'], a: 2 },
        { t: 'mcq', q: 'The CD wasn’t very good quality, ___ being expensive.', o: ['although', 'despite', 'however'], a: 1 },
        { t: 'mcq', q: 'The CD wasn’t very good quality, ___ it was expensive.', o: ['although', 'in spite of', 'however'], a: 0 },
        { t: 'mcq', q: '___ you hurry up, we’ll miss the bus.', o: ['Unless', 'If', 'Although'], a: 0 },
      ],
    },
    {
      title: 'E. Viết lại câu',
      instruction: 'Viết lại câu dùng từ trong ngoặc.',
      items: [
        { t: 'fix', q: 'It was raining. We played football. (Although)', a: ['Although it was raining, we played football.'] },
        { t: 'fix', q: 'It was raining. We played football. (Despite)', a: ['Despite the rain, we played football.', 'Despite it raining, we played football.', 'Despite the fact that it was raining, we played football.'] },
        { t: 'fix', q: 'If you don’t study, you won’t pass. (Unless)', a: ["Unless you study, you won't pass.", 'Unless you study, you will not pass.'] },
        { t: 'fix', q: 'Although he was tired, but he kept working. (sửa lỗi)', a: ['Although he was tired, he kept working.'] },
        { t: 'fix', q: 'Despite of the traffic, we arrived on time. (sửa lỗi)', a: ['Despite the traffic, we arrived on time.', 'In spite of the traffic, we arrived on time.'] },
      ],
    },
    {
      title: 'F. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng từ nối phù hợp.',
      items: [
        { t: 'tr', vi: 'Tôi sẽ gọi cho bạn ngay khi tôi về đến nhà.', ref: "I'll call you as soon as I get home.", focus: 'as soon as + present simple' },
        { t: 'tr', vi: 'Mặc dù công nghệ mang lại nhiều lợi ích, nó cũng có một số hạn chế.', ref: 'Although technology brings many benefits, it also has some drawbacks.', focus: 'although (IELTS Writing)' },
        { t: 'tr', vi: 'Bất chấp chi phí cao, nhiều gia đình vẫn chọn trường tư.', ref: 'Despite the high cost, many families still choose private schools.', focus: 'despite + noun' },
        { t: 'tr', vi: 'Phương tiện công cộng rẻ. Tuy nhiên, nó thường đông đúc.', ref: 'Public transport is cheap. However, it is often crowded.', focus: 'however' },
        { t: 'tr', vi: 'Trừ khi chúng ta hành động ngay, vấn đề sẽ trở nên tồi tệ hơn.', ref: 'Unless we act now, the problem will get worse.', focus: 'unless' },
        { t: 'tr', vi: 'Tôi sẽ không đi ngủ cho đến khi làm xong bài tập.', ref: "I won't go to bed until I've finished my homework.", focus: 'until + present perfect' },
      ],
    },
  ],
};
