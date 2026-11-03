// Unit 22 – Grammar: Modals 3 – the modal perfect (Destination B1).
export default {
  id: 'b1-u22',
  book: 'b1',
  no: 22,
  title: 'Modals 3: the modal perfect',
  titleVi: 'Động từ khuyết thiếu 3: modal + have + V3 (nói về quá khứ)',
  blocks: [
    { type: 'p', text: 'Cấu trúc: **modal + have + V3** – dùng để nói về **quá khứ**: suy đoán, chỉ trích, tiếc nuối, khả năng đã không xảy ra.' },
    { type: 'table', head: ['Khẳng định', 'Phủ định', 'Nghi vấn'], rows: [
      ['You **should have told** me.', "You **shouldn't have told** Liz.", '**Should** I **have invited** Carol?'],
    ] },
    { type: 'tip', text: 'Khi nói nhanh, “have” được đọc nhẹ thành /əv/: should’ve /ˈʃʊdəv/, could’ve, must’ve. **Không** viết “should of”!' },

    { type: 'h', text: '1. Khả năng đã có nhưng không làm (could have)' },
    { type: 'p', text: 'We **could have gone** to the party, but we decided not to. (= đã có thể đi nhưng không đi)' },
    { type: 'warn', text: 'So sánh:\nI **could play** the guitar when I was seven. (= tôi biết chơi – khả năng chung trong quá khứ)\nI **could have played** the guitar. (= tôi đã có cơ hội chơi nhưng đã không chơi)' },

    { type: 'h', text: '2. Chỉ trích, tiếc nuối (should have / ought to have)' },
    { type: 'p', text: 'You **should have invited** Carol to your party. (= bạn đã không mời, và điều đó là sai)\nI **shouldn’t have eaten** so much. (= tôi đã ăn quá nhiều – tiếc)' },

    { type: 'h', text: '3. Suy đoán về quá khứ' },
    { type: 'table', head: ['Mức độ', 'Modal', 'Ví dụ'], rows: [
      ['Gần như chắc chắn **đã**', '**must have**', 'They **must have had** a lovely holiday! (họ trông rất vui)'],
      ['Gần như chắc chắn **đã không**', '**can’t / couldn’t have**', 'They **can’t have had** any sleep! (mắt họ thâm quầng)'],
      ['**Có thể đã**', '**could / may / might have**', 'Helen **might have found** a new house. (không chắc)'],
    ] },

    { type: 'h', text: '4. Điều mong đợi khác với thực tế (should have)' },
    { type: 'p', text: 'Jim **should have arrived** half an hour ago. I wonder where he is. (= lẽ ra phải đến rồi nhưng chưa)' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ should of / could of → ✓ should **have** / could **have**.',
      '✗ must have went → ✓ must have **gone** (dùng V3!).',
      '✗ He mustn’t have seen me → ✓ He **can’t have** seen me (suy đoán phủ định).',
      'Quên dùng dạng hoàn thành khi nói về quá khứ: ✗ She must be tired yesterday → ✓ She **must have been** tired yesterday.',
    ] },
    { type: 'tip', text: 'IELTS Speaking Part 2/3: “Looking back, I **should have** studied harder.”, “Ancient people **must have found** it very difficult to…”, “If the government had acted earlier, the problem **could have been** avoided.” – những câu này thể hiện ngữ pháp band 7+.' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'The ground is wet. It ___ rained last night.', o: ['must have', "can't have", 'should have'], a: 0 },
        { t: 'mcq', q: 'You ___ told me it was your birthday! I would have bought a present.', o: ['must have', 'should have', 'might have'], a: 1 },
        { t: 'mcq', q: 'She ___ seen me – she walked straight past.', o: ["can't have", 'must have', 'should have'], a: 0 },
        { t: 'mcq', q: 'We ___ won the match, but we missed a penalty.', o: ['could have', 'must have', "can't have"], a: 0 },
        { t: 'mcq', q: 'I don’t know where my keys are. I ___ left them at work.', o: ['might have', "can't have", 'should have'], a: 0 },
        { t: 'mcq', q: 'I feel sick. I ___ eaten so much cake.', o: ["shouldn't have", "mustn't have", "couldn't have"], a: 0 },
        { t: 'mcq', q: 'The train ___ arrived at 9, but it’s already 9.30.', o: ['should have', 'must have', 'can have'], a: 0 },
        { t: 'mcq', q: 'He got 100% in the test. He ___ studied very hard.', o: ['must have', "can't have", 'should have'], a: 0 },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Viết modal + have + V3 với từ cho sẵn.',
      items: [
        { t: 'gap', q: 'Lan isn’t answering. She ___ (must / go) out.', a: ['must have gone', "must've gone"] },
        { t: 'gap', q: 'You ___ (should / ask) me for help.', a: ['should have asked', "should've asked"] },
        { t: 'gap', q: 'He ___ (can’t / finish) already – he only started 5 minutes ago!', a: ["can't have finished", 'cannot have finished'] },
        { t: 'gap', q: 'I ___ (could / go) to university abroad, but I chose to stay.', a: ['could have gone', "could've gone"] },
        { t: 'gap', q: 'They ___ (might / miss) the bus.', a: ['might have missed', "might've missed"] },
        { t: 'gap', q: 'You ___ (shouldn’t / shout) at her.', a: ["shouldn't have shouted", 'should not have shouted'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'You should of called me.', a: ['You should have called me.', "You should've called me."] },
        { t: 'fix', q: 'She must have went home early.', a: ['She must have gone home early.'] },
        { t: 'fix', q: "He mustn't have heard the news – he looked so calm.", a: ["He can't have heard the news – he looked so calm.", "He couldn't have heard the news – he looked so calm.", "He can't have heard the news - he looked so calm."] },
        { t: 'fix', q: 'They must be very tired after the long journey yesterday.', a: ['They must have been very tired after the long journey yesterday.'] },
        { t: 'fix', q: 'I could passed the exam if I had studied.', a: ['I could have passed the exam if I had studied.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng modal + have + V3.',
      items: [
        { t: 'tr', vi: 'Lẽ ra tôi nên học chăm hơn khi còn ở trường.', ref: 'I should have studied harder when I was at school.', focus: 'should have – regret' },
        { t: 'tr', vi: 'Chắc hẳn cô ấy đã quên cuộc hẹn của chúng ta.', ref: 'She must have forgotten our appointment.', focus: 'must have – deduction' },
        { t: 'tr', vi: 'Anh ấy không thể đã làm điều đó – anh ấy ở nhà cả ngày.', ref: "He can't have done it – he was at home all day.", focus: "can't have" },
        { t: 'tr', vi: 'Chúng tôi đã có thể đến kịp nếu không bị kẹt xe.', ref: "We could have arrived on time if we hadn't been stuck in traffic.", focus: 'could have' },
        { t: 'tr', vi: 'Có lẽ họ đã đi nhầm đường.', ref: 'They might have taken the wrong road.', focus: 'might have' },
        { t: 'tr', vi: 'Lẽ ra bạn không nên nói với cô ấy bí mật đó.', ref: "You shouldn't have told her that secret.", focus: "shouldn't have" },
      ],
    },
  ],
};
