// Unit 20 – Grammar: Modals 2 – obligation, probability, possibility (Destination B1).
export default {
  id: 'b1-u20',
  book: 'b1',
  no: 20,
  title: 'Modals 2: obligation, probability, possibility',
  titleVi: 'Động từ khuyết thiếu 2: bắt buộc, khả năng xảy ra',
  blocks: [
    { type: 'h', text: '1. Sự bắt buộc (obligation)' },
    { type: 'table', head: ['Cách dùng', 'Modal', 'Ví dụ'], rows: [
      ['Bắt buộc ở hiện tại/tương lai', '**must / have to / need to**', 'All visitors **must** turn off their phones. / You **have to** press “send”.'],
      ['**Cấm**', '**mustn’t**', 'You **mustn’t** smoke here.'],
      ['**Không cần thiết** (hiện tại/tương lai)', '**don’t have to / don’t need to / needn’t**', 'You **don’t have to** pay to send an email.'],
      ['Bắt buộc trong quá khứ', '**had to**', 'Yesterday, Sam **had to** buy more stamps.'],
      ['Không cần thiết trong quá khứ', '**didn’t have to / didn’t need to**', 'Everyone spoke English, so I **didn’t have to** use my Italian.'],
    ] },
    { type: 'warn', text: '**mustn’t** ≠ **don’t have to**\nYou **mustn’t** do that! (= Cấm làm!)\nYou **don’t have to** do that. (= Không bắt buộc, muốn thì làm)\n**must** không có dạng quá khứ → dùng **had to**.' },
    { type: 'tip', text: '**must** thường dùng cho nội quy, biển báo, hoặc khi người nói tự thấy cần: I **must** call my mum.\n**have to** dùng khi sự bắt buộc đến từ bên ngoài, và phổ biến hơn trong văn nói: We **have to** pay the bill today.' },

    { type: 'h', text: '2. Khả năng xảy ra (probability & possibility)' },
    { type: 'table', head: ['Mức độ chắc chắn', 'Modal', 'Ví dụ'], rows: [
      ['Gần như **chắc chắn đúng** (~95%)', '**must**', 'The phone is ringing – it **must** be Simon.'],
      ['Gần như **chắc chắn không** (~95%)', '**can’t / couldn’t**', 'This letter **can’t** be from Japan – it’s got a French stamp.'],
      ['**Có lẽ** (~70%)', '**should / ought to**', 'We **should** hear from Cheryl this weekend.'],
      ['**Có thể** (~30–50%)', '**could / may / might**', "I'm not sure what language it is – it **could / may / might** be Polish."],
    ] },
    { type: 'tip', text: 'Dùng **must / can’t** khi có **bằng chứng**: I just rang Paul, but there’s no answer. He **must** be out.\nNói về quá khứ: modal + **have + V3** (xem Unit 22): He **must have** forgotten.' },
    { type: 'warn', text: 'Trái nghĩa của **must** (suy luận) là **can’t**, KHÔNG phải mustn’t:\n✗ He mustn’t be at home – the lights are off. → ✓ He **can’t** be at home.' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Nhầm mustn’t và don’t have to (rất phổ biến).',
      '✗ I must went → ✓ I **had to** go.',
      '✗ She have to → ✓ She **has to**.',
      '✗ Do you must…? → ✓ **Do you have to**…?',
    ] },
    { type: 'tip', text: 'IELTS Speaking Part 3 cần thể hiện mức độ chắc chắn. Thay vì “I think…” mãi, hãy dùng: “It **might** be because…”, “That **must** be one of the main reasons…”, “Young people **may** not realise…”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'Smoking isn’t allowed in the airport. You ___ smoke.', o: ["mustn't", "don't have to"], a: 0 },
        { t: 'mcq', q: 'It’s not necessary to come to the station. You ___ meet me.', o: ["mustn't", "don't have to"], a: 1 },
        { t: 'mcq', q: 'We ___ wait for over two hours in the rain yesterday.', o: ['must', 'had to', 'have to'], a: 1 },
        { t: 'mcq', q: 'She’s been working all day. She ___ be tired.', o: ['must', "can't", 'should'], a: 0 },
        { t: 'mcq', q: 'That ___ be Tom – he’s in Australia this week.', o: ['must', "can't", 'may'], a: 1 },
        { t: 'mcq', q: 'Take an umbrella. It ___ rain later.', o: ['might', 'must', "can't"], a: 0 },
        { t: 'mcq', q: 'In my country, you ___ carry your passport – it’s optional.', o: ["mustn't", "don't need to"], a: 1 },
        { t: 'mcq', q: 'All passengers ___ fasten their seatbelts.', o: ['must', 'may', 'might'], a: 0 },
        { t: 'mcq', q: 'The letter was posted on Monday, so it ___ arrive today.', o: ['should', "can't", 'mustn’t'], a: 0 },
        { t: 'mcq', q: '___ you have to wear a uniform at your school?', o: ['Must', 'Do', 'Are'], a: 1 },
      ],
    },
    {
      title: 'B. Điền dạng đúng của have to',
      instruction: 'Dùng have to ở dạng khẳng định, phủ định hoặc nghi vấn, đúng thì.',
      items: [
        { t: 'gap', q: "Jade can't come out tonight. She ___ look after her little brother.", a: ['has to'] },
        { t: 'gap', q: "I didn't have enough money, so I ___ borrow some from Yuri.", a: ['had to'] },
        { t: 'gap', q: "It's raining, but luckily we ___ go out this evening.", a: ["don't have to", 'do not have to'] },
        { t: 'gap', q: 'To start the laptop, you ___ press the power button.', a: ['have to'] },
        { t: 'gap', q: 'Robbie worked last weekend, but I ___.', a: ["didn't have to", 'did not have to', "didn't"] },
        { t: 'gap', q: '___ you ___ go to piano lessons when you were younger? (2 phần, cách nhau …)', a: ['Did … have to', 'Did have to'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'Yesterday I must stay at home.', a: ['Yesterday I had to stay at home.'] },
        { t: 'fix', q: 'She have to wear glasses.', a: ['She has to wear glasses.'] },
        { t: 'fix', q: 'The lights are off. They mustn’t be at home.', a: ["The lights are off. They can't be at home.", 'The lights are off. They cannot be at home.'] },
        { t: 'fix', q: 'You mustn’t bring food – but you can if you want.', a: ["You don't have to bring food – but you can if you want.", "You don't have to bring food - but you can if you want.", "You don't need to bring food – but you can if you want."] },
        { t: 'fix', q: 'Do you must work on Saturdays?', a: ['Do you have to work on Saturdays?'] },
        { t: 'fix', q: 'He might comes later.', a: ['He might come later.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng modal chỉ bắt buộc hoặc khả năng.',
      items: [
        { t: 'tr', vi: 'Bạn không được dùng điện thoại trong phòng thi.', ref: "You mustn't use your phone in the exam room.", focus: "mustn't" },
        { t: 'tr', vi: 'Bạn không cần mang theo gì cả – chúng tôi đã chuẩn bị mọi thứ.', ref: "You don't have to bring anything – we've prepared everything.", focus: "don't have to" },
        { t: 'tr', vi: 'Hôm qua tôi phải làm thêm giờ đến 10 giờ tối.', ref: 'Yesterday I had to work overtime until 10 p.m.', focus: 'had to' },
        { t: 'tr', vi: 'Cô ấy chắc hẳn rất vui vì đã đỗ kỳ thi.', ref: 'She must be very happy because she passed the exam.', focus: 'must – deduction' },
        { t: 'tr', vi: 'Đó không thể là anh ấy được – anh ấy đang ở nước ngoài.', ref: "That can't be him – he's abroad.", focus: "can't – deduction" },
        { t: 'tr', vi: 'Trong tương lai, nhiều công việc có thể được thay thế bởi máy móc.', ref: 'In the future, many jobs might be replaced by machines.', focus: 'might + passive (IELTS)' },
      ],
    },
  ],
};
