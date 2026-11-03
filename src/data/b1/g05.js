// Unit 5 – Grammar: Past perfect simple, past perfect continuous (Destination B1).
export default {
  id: 'b1-u05',
  book: 'b1',
  no: 5,
  title: 'Past perfect simple, past perfect continuous',
  titleVi: 'Quá khứ hoàn thành, quá khứ hoàn thành tiếp diễn',
  blocks: [
    { type: 'h', text: '1. Quá khứ hoàn thành (Past perfect simple)' },
    { type: 'p', text: 'Cấu trúc: **had + V3** (cho mọi ngôi). Phủ định: **hadn’t + V3**. Nghi vấn: **Had** + S + V3…?' },
    { type: 'p', text: 'Ý chính: hành động xảy ra **trước một thời điểm / hành động khác trong quá khứ** (“quá khứ của quá khứ”).' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Hành động/trạng thái xảy ra trước một mốc trong quá khứ', "I**'d finished** my homework a few minutes before the lesson started."],
      ['Trạng thái kéo dài đến một mốc trong quá khứ', 'Mrs Cross **had been** a teacher for twenty years before she became a head teacher.'],
      ['Kết quả quan trọng tại một thời điểm quá khứ', "We were happy because we**'d done** all our homework."],
    ] },
    { type: 'table', head: ['Từ đi kèm', 'Ví dụ'], rows: [
      ['**by** + mốc', "I'd finished my homework **by** eight o'clock."],
      ['**by the time** + quá khứ đơn', '**By the time** I got to class, the lesson **had started**.'],
      ['**before / after / when**', 'I left **after** I**’d finished** the test.'],
      ['**just**', 'Simon **had just finished** the test when the bell rang.'],
      ['**already / never… before**', 'I **had never seen** snow **before** that trip.'],
    ] },
    { type: 'warn', text: 'Quá khứ đơn hay quá khứ hoàn thành có thể **đổi nghĩa** câu:\nThe lesson **started** when I arrived. (tôi đến → rồi mới bắt đầu)\nThe lesson **had started** when I arrived. (đã bắt đầu → rồi tôi mới đến, tôi đến muộn)' },

    { type: 'h', text: '2. Quá khứ hoàn thành tiếp diễn (Past perfect continuous)' },
    { type: 'p', text: 'Cấu trúc: **had been + V-ing**' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Hành động kéo dài đến (hoặc vừa dừng trước) một mốc quá khứ – nhấn mạnh **thời gian / quá trình**', "We**'d been doing** grammar exercises for over an hour, so we were really bored!"],
      ['Giải thích nguyên nhân của một tình trạng trong quá khứ', "They had a break because they**'d been working** so hard."],
    ] },
    { type: 'p', text: 'Từ đi kèm: **for, since, before, all day/night**. Ví dụ: Tony **had been studying for hours**, so he had a headache.' },
    { type: 'tip', text: 'So sánh:\nShe**’d written** an article. → đã viết xong (kết quả)\nShe**’d been writing** an article. → đã viết một lúc, chưa chắc xong (quá trình)' },

    { type: 'h', text: '3. Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Dùng quá khứ hoàn thành khi không cần: nếu kể theo đúng thứ tự thời gian thì quá khứ đơn là đủ. ✓ I got up, had breakfast and left.',
      'Quên “had” với by the time: ✗ By the time we arrived, the film started. → ✓ … the film **had started**.',
      'Dùng “have” thay “had”: ✗ I have never seen the sea before I went to Nha Trang. → ✓ I **had** never seen…',
    ] },
    { type: 'tip', text: 'IELTS Part 2 (kể trải nghiệm): quá khứ hoàn thành giúp câu chuyện tự nhiên hơn và tăng điểm Grammatical Range: “I **had never tried** public speaking **before**, so I **had been practising** for weeks by the time the day arrived.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'When we got to the cinema, the film ___.', o: ['already started', 'had already started', 'has already started'], a: 1 },
        { t: 'mcq', q: 'She was exhausted because she ___ all day.', o: ['had been working', 'has worked', 'was working'], a: 0 },
        { t: 'mcq', q: 'I ___ my keys, so I couldn’t open the door.', o: ['had lost', 'have lost', 'had been losing'], a: 0 },
        { t: 'mcq', q: 'By the time the teacher arrived, we ___ the exercise.', o: ['finished', 'had finished', 'have finished'], a: 1 },
        { t: 'mcq', q: 'He ___ never ___ a plane before that trip.', o: ['has / taken', 'had / taken', 'was / taking'], a: 1 },
        { t: 'mcq', q: 'The ground was wet because it ___.', o: ['had been raining', 'has rained', 'rains'], a: 0 },
        { t: 'mcq', q: 'After she ___ the letter, she posted it.', o: ['had written', 'has written', 'had been writing'], a: 0 },
        { t: 'mcq', q: 'They ___ for two hours when the bus finally came.', o: ['waited', 'had been waiting', 'have been waiting'], a: 1 },
      ],
    },
    {
      title: 'B. Chia động từ trong ngoặc',
      instruction: 'Quá khứ đơn, quá khứ hoàn thành hoặc quá khứ hoàn thành tiếp diễn.',
      items: [
        { t: 'gap', q: 'When I arrived at the party, Tom ___ (already/leave).', a: ['had already left', "'d already left"] },
        { t: 'gap', q: 'I ___ (not/meet) her before that day.', a: ["hadn't met", 'had not met'] },
        { t: 'gap', q: 'Her eyes were red because she ___ (cry).', a: ['had been crying', "'d been crying"] },
        { t: 'gap', q: 'By 2020, he ___ (live) in London for ten years.', a: ['had lived', 'had been living', "'d lived", "'d been living"] },
        { t: 'gap', q: 'As soon as I ___ (finish) dinner, I went out.', a: ['had finished', 'finished', "'d finished"] },
        { t: 'gap', q: 'We ___ (study) for hours, so we decided to take a break.', a: ['had been studying', "'d been studying"] },
        { t: 'gap', q: 'The lesson ___ (just/begin) when the fire alarm went off.', a: ['had just begun', "'d just begun"] },
        { t: 'gap', q: '___ you ever ___ (try) Thai food before you went to Bangkok? (viết 2 phần, cách nhau …)', a: ['had … tried', 'had tried'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'By the time we arrived, the film started.', a: ['By the time we arrived, the film had started.', 'By the time we arrived, the film had already started.'] },
        { t: 'fix', q: 'I have never seen the sea before I went to Nha Trang.', a: ['I had never seen the sea before I went to Nha Trang.'] },
        { t: 'fix', q: 'She had been knowing him for years before they got married.', a: ['She had known him for years before they got married.'] },
        { t: 'fix', q: 'He was tired because he had been run.', a: ['He was tired because he had been running.'] },
        { t: 'fix', q: 'After I had wrote the email, I sent it.', a: ['After I had written the email, I sent it.'] },
        { t: 'fix', q: 'When I got home, my brother has eaten all the pizza.', a: ['When I got home, my brother had eaten all the pizza.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng quá khứ hoàn thành / quá khứ hoàn thành tiếp diễn khi cần.',
      items: [
        { t: 'tr', vi: 'Khi tôi đến ga thì tàu đã chạy mất rồi.', ref: 'When I got to the station, the train had already left.', focus: 'past perfect' },
        { t: 'tr', vi: 'Trước chuyến đi đó, tôi chưa bao giờ đi máy bay.', ref: 'Before that trip, I had never travelled by plane.', focus: 'had never… before' },
        { t: 'tr', vi: 'Cô ấy mệt vì đã ôn thi suốt cả đêm.', ref: 'She was tired because she had been revising all night.', focus: 'past perfect continuous' },
        { t: 'tr', vi: 'Đến lúc giáo viên vào lớp, chúng tôi đã làm xong bài tập.', ref: 'By the time the teacher came in, we had finished the exercise.', focus: 'by the time' },
        { t: 'tr', vi: 'Sau khi đã đọc hướng dẫn, anh ấy bắt đầu làm bài.', ref: 'After he had read the instructions, he started the test.', focus: 'after + past perfect' },
        { t: 'tr', vi: 'Chúng tôi đã chờ gần một tiếng thì xe buýt mới đến.', ref: 'We had been waiting for almost an hour when the bus finally arrived.', focus: 'duration before a past event' },
      ],
    },
  ],
};
