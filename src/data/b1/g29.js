// Unit 29 – Grammar: Conditionals 2 – third conditional (Destination B1).
export default {
  id: 'b1-u29',
  book: 'b1',
  no: 29,
  title: 'Conditionals 2: third',
  titleVi: 'Câu điều kiện loại 3 (giả định về quá khứ)',
  blocks: [
    { type: 'h', text: 'Câu điều kiện loại 3 (third conditional)' },
    { type: 'p', text: 'Cấu trúc: **If + quá khứ hoàn thành (had + V3), would have + V3**\nDùng cho tình huống **không có thật trong quá khứ** và **kết quả không có thật** của nó – thường để diễn tả **tiếc nuối** hoặc **chỉ trích**.' },
    { type: 'table', head: ['Câu điều kiện', 'Thực tế đã xảy ra'], rows: [
      ['If the chemist **had been** open, I **would have bought** some aspirin.', 'Hiệu thuốc đóng cửa, nên tôi không mua được.'],
      ['If I **hadn’t listened** to you, I **would have cooked** the chicken for too long.', 'Tôi đã nghe lời bạn, nên không nấu quá lâu.'],
      ['If he **had seen** the doctor, he **wouldn’t have been** ill for so long.', 'Anh ấy không đi khám, nên ốm lâu.'],
      ['If you **hadn’t eaten** a giant pizza, you **wouldn’t have been** sick!', 'Bạn đã ăn cả cái pizza khổng lồ, nên bị ốm.'],
    ] },
    { type: 'tip', text: 'Có thể thay would bằng **could / might**:\nIf you had eaten a giant pizza, you **might have been** sick. (có thể, không chắc)\nIf Mary had told me she was coming, I **could have cooked** a nice meal. (đã có thể nấu)' },
    { type: 'warn', text: '• Loại 3 là loại **duy nhất** nói về **quá khứ**:\nIf I **had had** a headache, I would have taken an aspirin. (quá khứ)\nIf I **had** a headache, I would take an aspirin. (loại 2 – hiện tại/chung chung)\n• Khi nói, **’d** có thể là **had** (mệnh đề if) hoặc **would** (mệnh đề kết quả): If I**’d** known, I**’d** have come. = If I **had** known, I **would** have come.' },

    { type: 'h', text: 'Tổng hợp các loại câu điều kiện' },
    { type: 'table', head: ['Loại', 'Cấu trúc', 'Thời gian', 'Ví dụ'], rows: [
      ['0', 'If + HTĐ, HTĐ', 'luôn đúng', 'If you heat ice, it melts.'],
      ['1', 'If + HTĐ, will + V', 'hiện tại/tương lai – có thể', 'If it rains, I’ll stay in.'],
      ['2', 'If + QKĐ, would + V', 'hiện tại/tương lai – không thật', 'If I were rich, I’d travel.'],
      ['3', 'If + had V3, would have V3', 'quá khứ – không thật', 'If I’d studied, I’d have passed.'],
    ] },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ If I would have known → ✓ If I **had** known.',
      '✗ If I had studied, I would pass → ✓ … I **would have passed**.',
      '✗ would have went → ✓ would have **gone** (V3!).',
    ] },
    { type: 'tip', text: 'IELTS Speaking Part 2 (kể chuyện quá khứ) – kết thúc bằng một câu loại 3 rất ấn tượng: “**If** I **hadn’t taken** that course, I **would never have met** my best friend.” / “Looking back, **if** I **had prepared** better, I **could have got** a higher score.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'If I ___ about the party, I would have come.', o: ['knew', 'had known', 'would know'], a: 1 },
        { t: 'mcq', q: 'If she had studied harder, she ___ the exam.', o: ['would pass', 'would have passed', 'will pass'], a: 1 },
        { t: 'mcq', q: 'We ___ the train if we had left earlier.', o: ["wouldn't miss", "wouldn't have missed", "didn't miss"], a: 1 },
        { t: 'mcq', q: 'If he ___ so fast, he wouldn’t have crashed.', o: ["hadn't driven", "didn't drive", "wouldn't drive"], a: 0 },
        { t: 'mcq', q: 'If you had asked me, I ___ helped you.', o: ['would', 'would have', 'had'], a: 1 },
        { t: 'mcq', q: 'If I ___ more money now, I’d buy a car. (hiện tại)', o: ['had', 'had had', 'have had'], a: 0 },
        { t: 'mcq', q: 'If it hadn’t rained, we ___ to the beach.', o: ['would go', 'would have gone', 'had gone'], a: 1 },
        { t: 'mcq', q: 'If they had invited me, I ___ have gone. (có thể)', o: ['might', 'will', 'would to'], a: 0 },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Chia động từ theo câu điều kiện loại 3.',
      items: [
        { t: 'gap', q: 'If I ___ (not/oversleep), I wouldn’t have been late.', a: ["hadn't overslept", 'had not overslept'] },
        { t: 'gap', q: 'If you had told me, I ___ (buy) you a present.', a: ['would have bought', "would've bought", "'d have bought"] },
        { t: 'gap', q: 'She ___ (not/get) the job if she hadn’t spoken English.', a: ["wouldn't have got", 'would not have got', "wouldn't have gotten"] },
        { t: 'gap', q: 'If we ___ (take) a taxi, we would have arrived on time.', a: ['had taken', "'d taken"] },
        { t: 'gap', q: 'If he ___ (wear) a helmet, he wouldn’t have been badly hurt.', a: ['had worn', "'d worn"] },
        { t: 'gap', q: 'I ___ (call) you if I had had my phone.', a: ['would have called', "would've called", "'d have called"] },
      ],
    },
    {
      title: 'C. Viết câu điều kiện loại 3',
      instruction: 'Viết lại thành câu điều kiện loại 3.',
      items: [
        { t: 'fix', q: "I didn't study, so I failed the test.", a: ["If I had studied, I wouldn't have failed the test.", 'If I had studied, I would not have failed the test.', "If I'd studied, I wouldn't have failed the test.", 'If I had studied, I would have passed the test.'] },
        { t: 'fix', q: 'It rained, so we cancelled the match.', a: ["If it hadn't rained, we wouldn't have cancelled the match.", 'If it had not rained, we would not have cancelled the match.'] },
        { t: 'fix', q: 'She left early, so she missed the end of the film.', a: ["If she hadn't left early, she wouldn't have missed the end of the film.", 'If she had not left early, she would not have missed the end of the film.'] },
        { t: 'fix', q: "He didn't set an alarm, so he overslept.", a: ["If he had set an alarm, he wouldn't have overslept.", 'If he had set an alarm, he would not have overslept.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng câu điều kiện loại 3.',
      items: [
        { t: 'tr', vi: 'Nếu tôi biết bạn bị ốm, tôi đã đến thăm bạn rồi.', ref: "If I had known you were ill, I would have visited you.", focus: 'third conditional' },
        { t: 'tr', vi: 'Nếu chúng tôi đi sớm hơn, chúng tôi đã không bị lỡ chuyến bay.', ref: "If we had left earlier, we wouldn't have missed the flight.", focus: 'third conditional – negative result' },
        { t: 'tr', vi: 'Nếu tôi không tham gia câu lạc bộ đó, tôi đã không gặp bạn thân nhất của mình.', ref: "If I hadn't joined that club, I wouldn't have met my best friend.", focus: 'third conditional (IELTS Part 2)' },
        { t: 'tr', vi: 'Nếu cô ấy chuẩn bị kỹ hơn, cô ấy có thể đã đạt điểm cao hơn.', ref: 'If she had prepared better, she could have got a higher score.', focus: 'could have' },
        { t: 'tr', vi: 'Nếu bạn nghe lời tôi, bạn đã không gặp rắc rối.', ref: "If you had listened to me, you wouldn't have got into trouble.", focus: 'third conditional' },
      ],
    },
  ],
};
