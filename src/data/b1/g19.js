// Unit 19 – Grammar: Modals 1 – ability, permission, advice (Destination B1).
export default {
  id: 'b1-u19',
  book: 'b1',
  no: 19,
  title: 'Modals 1: ability, permission, advice',
  titleVi: 'Động từ khuyết thiếu 1: khả năng, xin phép, lời khuyên',
  blocks: [
    { type: 'h', text: '1. Giới thiệu động từ khuyết thiếu (modal verbs)' },
    { type: 'p', text: 'Các modal: **can, could, may, might, will, would, shall, should, must**.' },
    { type: 'list', items: [
      'Chỉ có **một dạng** cho mọi ngôi: she **can** swim (✗ she cans).',
      'Theo sau là **động từ nguyên mẫu không “to”**: You should **call** Stella. (✗ should to call)',
      'Câu hỏi: đảo modal lên trước: **Can you** understand what he’s saying?',
      'Phủ định: modal + **not**: can’t, couldn’t, shouldn’t, mustn’t…',
      'Bị động: modal + **be + V3**: The address **should be written** clearly.',
    ] },
    { type: 'p', text: '**Bán khuyết thiếu (semi-modals)**: **ought to, have to, need to**. *ought to* không đổi dạng; *have to* và *need to* chia theo ngôi và thì như động từ thường (she **has** to, he **needed** to).' },

    { type: 'h', text: '2. Khả năng (ability)' },
    { type: 'table', head: ['Cách dùng', 'Modal', 'Ví dụ'], rows: [
      ['Khả năng hiện tại / chung chung', '**can**', '**Can** you use a fax machine?'],
      ['Khả năng trong quá khứ', '**could**', 'Tom **could** read when he was two years old.'],
      ['Các thì khác', '**be able to**', 'Soon, I**’ll be able to** speak Italian. / **Have** you **been able to** contact him?'],
    ] },
    { type: 'tip', text: 'Một lần làm được việc khó trong quá khứ → dùng **was/were able to** (hoặc managed to), không dùng could:\nThe fire was big, but everyone **was able to** escape. (✗ could escape)' },

    { type: 'h', text: '3. Xin phép và cho phép (permission)' },
    { type: 'table', head: ['Cách dùng', 'Modal', 'Ví dụ'], rows: [
      ['Xin phép', '**can / could / may**', '**Can / Could / May** I use the phone?'],
      ['Cho phép', '**can / may**', 'You **can / may** send the fax when you like.'],
    ] },
    { type: 'p', text: 'Mức độ lịch sự tăng dần: **can** < **could** < **may**. Trả lời “Could I…?” bằng “Yes, you **can**.” (✗ Yes, you could.)' },

    { type: 'h', text: '4. Lời khuyên (advice)' },
    { type: 'table', head: ['Modal', 'Ví dụ'], rows: [
      ['**should / shouldn’t**', 'Liam **should** watch less TV. / You **shouldn’t** stay up so late.'],
      ['**ought to / ought not to**', 'Liam **ought to** watch less TV.'],
    ] },
    { type: 'tip', text: 'Các cách khuyên khác (IELTS hay dùng): **If I were you, I’d…** / **You’d better…** (nên làm, nếu không sẽ có hậu quả) / **Why don’t you…?** / **It’s a good idea to…**' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ can to ride / should to see → ✓ can **ride** / should **see**',
      '✗ Do you can come? → ✓ **Can you** come?',
      '✗ He cans swim. → ✓ He **can** swim.',
      '✗ I couldn’t bought → ✓ I couldn’t **buy**.',
      '✗ ought listen → ✓ ought **to** listen.',
    ] },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'My grandmother ___ speak French when she was young.', o: ['can', 'could', 'is able'], a: 1 },
        { t: 'mcq', q: '___ I borrow your pen, please?', o: ['Could', 'Should', 'Must'], a: 0 },
        { t: 'mcq', q: 'You look tired. You ___ go to bed earlier.', o: ['can', 'should', 'may'], a: 1 },
        { t: 'mcq', q: 'I hope I ___ come to your party next week.', o: ["'ll can", "'ll be able to", 'could'], a: 1 },
        { t: 'mcq', q: 'She ___ swim very well.', o: ['cans', 'can', 'can to'], a: 1 },
        { t: 'mcq', q: 'You ___ to apologise to her.', o: ['should', 'ought', 'must'], a: 1 },
        { t: 'mcq', q: 'The fire was terrible, but luckily everyone ___ get out.', o: ['could', 'was able to', 'can'], a: 1, ex: 'Một lần làm được việc khó → was able to.' },
        { t: 'mcq', q: '– May I come in? – Yes, you ___.', o: ['could', 'may', 'should'], a: 1 },
        { t: 'mcq', q: 'You ___ eat so much fast food – it’s bad for you.', o: ["shouldn't", "can't", "mayn't"], a: 0 },
        { t: 'mcq', q: "I haven't ___ sleep well since I moved here.", o: ['could', 'can', 'been able to'], a: 2 },
      ],
    },
    {
      title: 'B. Điền modal phù hợp',
      instruction: 'Điền can, could, be able to (đúng dạng), should hoặc ought to.',
      items: [
        { t: 'gap', q: 'When I was five, I ___ ride a bike. (khả năng quá khứ)', a: ['could'] },
        { t: 'gap', q: '___ I open the window? It’s hot. (xin phép)', a: ['Can', 'Could', 'May'] },
        { t: 'gap', q: 'You ___ see a doctor about that cough. (lời khuyên)', a: ['should', 'ought to'] },
        { t: 'gap', q: 'One day I’ll ___ speak English fluently. (tương lai)', a: ['be able to'] },
        { t: 'gap', q: 'I’m sorry, I ___ come tomorrow – I have an exam. (không thể)', a: ["can't", 'cannot', "won't be able to"] },
        { t: 'gap', q: 'You ___ to drink more water. (lời khuyên, có “to”)', a: ['ought'] },
        { t: 'gap', q: 'Have you ___ finish your project yet?', a: ['been able to'] },
        { t: 'gap', q: 'She ___ play the piano and the violin. (khả năng hiện tại)', a: ['can'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'My older brother can to ride a motorbike.', a: ['My older brother can ride a motorbike.'] },
        { t: 'fix', q: 'Do you can come to my party?', a: ['Can you come to my party?'] },
        { t: 'fix', q: 'You should to see a doctor.', a: ['You should see a doctor.'] },
        { t: 'fix', q: "I couldn't bought any bread.", a: ["I couldn't buy any bread."] },
        { t: 'fix', q: "The school ought listen to students' opinions.", a: ["The school ought to listen to students' opinions."] },
        { t: 'fix', q: 'She cans speak three languages.', a: ['She can speak three languages.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng modal phù hợp.',
      items: [
        { t: 'tr', vi: 'Hồi 6 tuổi tôi đã biết bơi.', ref: 'I could swim when I was six.', focus: 'could – past ability' },
        { t: 'tr', vi: 'Tôi có thể dùng máy tính của bạn một chút được không?', ref: 'Could I use your computer for a moment?', focus: 'could – permission' },
        { t: 'tr', vi: 'Bạn nên ngủ đủ giấc trước kỳ thi.', ref: 'You should get enough sleep before the exam.', focus: 'should – advice' },
        { t: 'tr', vi: 'Nếu tôi là bạn, tôi sẽ luyện nói tiếng Anh mỗi ngày.', ref: "If I were you, I'd practise speaking English every day.", focus: 'If I were you (advice)' },
        { t: 'tr', vi: 'Sau khóa học này, tôi sẽ có thể giao tiếp tự tin hơn.', ref: "After this course, I'll be able to communicate more confidently.", focus: "will be able to" },
        { t: 'tr', vi: 'Học sinh không nên dùng điện thoại trong giờ học.', ref: "Students shouldn't use their phones during lessons.", focus: "shouldn't" },
      ],
    },
  ],
};
