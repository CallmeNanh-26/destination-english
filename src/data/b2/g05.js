// B2 Unit 5 – Grammar: future time / present tenses in time clauses / prepositions of time and place (Destination B2).
export default {
  id: 'b2-u05',
  book: 'b2',
  no: 5,
  title: 'Future time',
  titleVi: 'Thì tương lai; hiện tại trong mệnh đề thời gian; giới từ chỉ thời gian & nơi chốn',
  blocks: [
    { type: 'h', text: 'will / won’t và be going to' },
    { type: 'p', text: 'Nhiều khi nghĩa gần như nhau – **will** trang trọng hơn **be going to**.' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Sự thật về tương lai', 'The website **will come / ’s going to come** online next week.'],
      ['Dự đoán không dựa trên dấu hiệu hiện tại', 'In the future, everyone **will have / is going to have** their own flying car.'],
      ['Quyết định ngay lúc nói', 'I’ve decided! I **won’t get** a new phone just yet.'],
    ] },
    { type: 'table', head: ['Chỉ dùng will khi…', 'Ví dụ'], rows: [
      ['Đề nghị, gợi ý', 'I**’ll help** you with your physics homework, if you like.'],
      ['Yêu cầu', '**Will** you help me with my physics homework?'],
      ['Câu điều kiện loại 1', 'If we get a computer, we**’ll be able to** surf the Internet.'],
    ] },
    { type: 'warn', text: 'Đề nghị / gợi ý dạng câu hỏi với **I / we** → dùng **shall**, không dùng will:\n✓ **Shall** I help you with your homework? ✗ Will I help you…?' },
    { type: 'table', head: ['Chỉ dùng be going to khi…', 'Ví dụ'], rows: [
      ['Kế hoạch, ý định đã có từ trước', 'I**’m going to be** a famous doctor one day!'],
      ['Dự đoán dựa trên dấu hiệu hiện tại', 'It sounds like the plane**’s going to take off** in a few minutes.'],
    ] },

    { type: 'h', text: 'Hiện tại tiếp diễn và hiện tại đơn cho tương lai' },
    { type: 'table', head: ['Thì', 'Cách dùng', 'Ví dụ'], rows: [
      ['Hiện tại tiếp diễn', 'Sắp xếp đã lên lịch (có người, thời gian cụ thể)', '**Are** they **installing** the new computers next week?'],
      ['Hiện tại đơn', 'Lịch trình, thời gian biểu cố định', 'The bus to the science museum **leaves** at 8 o’clock tomorrow morning.'],
      ['Hiện tại đơn', 'Sau **if** trong câu điều kiện 0 và 1', 'If technology **continues** to advance so quickly, what will life be like?'],
    ] },

    { type: 'h', text: 'Tương lai hoàn thành, tương lai tiếp diễn' },
    { type: 'table', head: ['Thì', 'Cấu trúc', 'Cách dùng', 'Ví dụ'], rows: [
      ['Tương lai hoàn thành', 'will have + V3', 'Xong trước một mốc trong tương lai', 'I**’ll have finished** my homework by the time you come home.'],
      ['Tương lai tiếp diễn', 'will be + V-ing', 'Đang diễn ra tại một thời điểm tương lai; thói quen trong tương lai', 'This time next week, I**’ll be taking** my biology exam.\nIn the future, we**’ll** all **be flying** around using jet-packs.'],
      ['Tương lai hoàn thành tiếp diễn', 'will have been + V-ing', 'Kéo dài đến một mốc tương lai', 'At seven o’clock, I**’ll have been doing** my homework for three hours!'],
    ] },
    { type: 'tip', text: 'IELTS Writing Task 1 (dự báo trên biểu đồ) và Task 2 rất cần các thì này:\n“By 2050, the number of electric cars **will have overtaken** petrol cars.”\n“In twenty years’ time, many people **will be working** from home.”' },

    { type: 'h', text: 'Hiện tại trong mệnh đề thời gian' },
    { type: 'p', text: 'Sau **when, as soon as, before, after, until/till, while, once** ta **không dùng will / be going to** mà dùng **hiện tại đơn, hiện tại tiếp diễn hoặc hiện tại hoàn thành** để nói về tương lai.' },
    { type: 'table', head: ['Từ nối', 'Ví dụ'], rows: [
      ['when', 'It’ll be wonderful **when** scientists **find / have found** a cure for cancer.'],
      ['as soon as', 'Let me know **as soon as** your new computer **arrives / has arrived**.'],
      ['before', 'It’ll be several years **before** we **send / have sent** a mission to Mars.'],
      ['after', 'Let’s go for a pizza **after** we **go / have been** to the museum.'],
      ['until / till', 'The rocket won’t be launched **until** they **do / have done** a final check.'],
      ['while', 'Think of me **while** you **travel / are travelling** to the Moon!'],
      ['once', 'We’ll stop for petrol **once** we **pass / have passed** Cambridge.'],
    ] },
    { type: 'warn', text: '✗ I’ll call you when I **will arrive** → ✓ I’ll call you when I **arrive**.' },

    { type: 'h', text: 'Giới từ chỉ thời gian và nơi chốn' },
    { type: 'table', head: ['Giới từ', 'Dùng với', 'Ví dụ'], rows: [
      ['**at**', 'giờ, thời điểm, dịp lễ, cuối tuần (Anh); địa điểm cụ thể', 'at three o’clock, at night, at the moment, at the weekend, at the age of 18; at the stadium, at the bus stop'],
      ['**on**', 'ngày, thứ, ngày tháng cụ thể; bề mặt', 'on Monday, on my birthday, on 20th September; sit on the floor, on the left'],
      ['**in**', 'tháng, năm, mùa, buổi, khoảng thời gian; không gian bên trong, thành phố, nước', 'in July, in 2008, in (the) summer, in the morning, in an hour; in London, in a building'],
      ['in time / on time', 'kịp lúc / đúng giờ', 'We arrived **just in time for** the film. The train left **on time**.'],
      ['in / at the beginning / end', 'lúc đầu, cuối cùng / ở đầu, cuối của…', '**In the end**, we stayed at home. **At the end of** the week.'],
      ['Nơi chốn khác', '', 'next to / beside / by; at / on the front / back of; in front of / behind; towards; between; opposite; out of'],
    ] },
    { type: 'tip', text: 'Anh–Mỹ: người Mỹ thường bỏ **on** trước thứ (We’ve got a test **Monday**) và nói **Monday through Friday** (Anh: **from** Monday **to** Friday). Cuối tuần: Anh **at** the weekend, Mỹ **on** the weekend.' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ I will tell you when I will know → ✓ … when I **know**.',
      '✗ Will I open the window? → ✓ **Shall** I open the window?',
      '✗ in Monday / on the morning → ✓ **on** Monday / **in** the morning (nhưng **on** Monday morning).',
      '✗ I’ll finish it until Friday → ✓ I’ll finish it **by** Friday. (by = trước/hạn chót; until = kéo dài đến)',
    ] },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn dạng đúng.',
      items: [
        { t: 'mcq', q: 'Look at those clouds! It ___ rain.', o: ["'s going to", "'ll"], a: 0 },
        { t: 'mcq', q: 'The phone’s ringing. – I ___ answer it.', o: ["'ll", "'m going to"], a: 0 },
        { t: 'mcq', q: '___ I carry your bag for you?', o: ['Shall', 'Will'], a: 0 },
        { t: 'mcq', q: 'The train ___ at 7.15 tomorrow morning.', o: ['leaves', 'will be leaving', 'is going to leave'], a: 0 },
        { t: 'mcq', q: 'We ___ our grandparents this Sunday – it’s all arranged.', o: ['are visiting', 'visit', 'will have visited'], a: 0 },
        { t: 'mcq', q: 'This time tomorrow I ___ on a beach in Phu Quoc.', o: ['will lie', 'will be lying', 'will have lain'], a: 1 },
        { t: 'mcq', q: 'By the end of this year, I ___ English for ten years.', o: ['will study', 'will have been studying', 'am studying'], a: 1 },
        { t: 'mcq', q: 'I’ll call you as soon as I ___ home.', o: ['get', 'will get', "'m going to get"], a: 0 },
        { t: 'mcq', q: 'They won’t launch the rocket until they ___ a final check.', o: ['have done', 'will do', 'will have done'], a: 0 },
        { t: 'mcq', q: 'Please send the report ___ Friday at the latest.', o: ['by', 'until', 'in'], a: 0 },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Chia động từ trong ngoặc ở dạng tương lai hoặc hiện tại phù hợp.',
      items: [
        { t: 'gap', q: 'By the time you come home, I ___ (finish) my homework.', a: ["'ll have finished", 'will have finished'] },
        { t: 'gap', q: 'It’ll be wonderful when scientists ___ (find) a cure for cancer.', a: ['find', 'have found'] },
        { t: 'gap', q: 'Don’t phone me at 8 – I ___ (have) dinner then.', a: ["'ll be having", 'will be having'] },
        { t: 'gap', q: 'I’ve decided. I ___ (study) medicine at university.', a: ["'m going to study", 'am going to study'] },
        { t: 'gap', q: 'Let me know as soon as the package ___ (arrive).', a: ['arrives', 'has arrived'] },
        { t: 'gap', q: 'What time ___ (the film / start) tonight?', a: ['does the film start'] },
        { t: 'gap', q: 'In twenty years’ time, robots ___ (do) most housework.', a: ["'ll be doing", 'will be doing', 'will do', "'ll do"] },
        { t: 'gap', q: 'At seven o’clock, I ___ (work) on this project for three hours!', a: ["'ll have been working", 'will have been working'] },
      ],
    },
    {
      title: 'C. Giới từ thời gian & nơi chốn',
      instruction: 'Điền at, on hoặc in.',
      items: [
        { t: 'gap', q: 'The concert starts ___ eight o’clock.', a: ['at'] },
        { t: 'gap', q: 'We’re meeting ___ Monday morning.', a: ['on'] },
        { t: 'gap', q: 'I was born ___ 2005.', a: ['in'] },
        { t: 'gap', q: 'I’ll see you ___ an hour.', a: ['in'] },
        { t: 'gap', q: 'What are you doing ___ the weekend?', a: ['at'] },
        { t: 'gap', q: 'My birthday is ___ 20th September.', a: ['on'] },
        { t: 'gap', q: 'Wait for me ___ the bus stop.', a: ['at'] },
        { t: 'gap', q: 'He lives ___ a small village near Hue.', a: ['in'] },
        { t: 'gap', q: '___ the end, we decided to stay at home.', a: ['In', 'in'] },
      ],
    },
    {
      title: 'D. Sửa lỗi sai',
      instruction: 'Mỗi câu có một lỗi. Viết lại câu đúng.',
      items: [
        { t: 'fix', q: 'I’ll tell you when I will know the results.', a: ["I'll tell you when I know the results.", 'I will tell you when I know the results.'] },
        { t: 'fix', q: 'Will I open the window for you?', a: ['Shall I open the window for you?'] },
        { t: 'fix', q: 'I have to finish this essay until Friday.', a: ['I have to finish this essay by Friday.'] },
        { t: 'fix', q: 'We arrived just on time to see the start of the film.', a: ['We arrived just in time to see the start of the film.'] },
        { t: 'fix', q: 'The bus is leaving at 6 tomorrow according to the timetable.', a: ['The bus leaves at 6 tomorrow according to the timetable.'] },
      ],
    },
    {
      title: 'E. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý chọn đúng cách diễn đạt tương lai.',
      items: [
        { t: 'tr', vi: 'Đến năm 2050, xe điện sẽ đã vượt qua xe chạy xăng.', ref: 'By 2050, electric cars will have overtaken petrol cars.', focus: 'future perfect (IELTS Task 1)' },
        { t: 'tr', vi: 'Giờ này tuần sau tôi sẽ đang làm bài thi IELTS.', ref: "This time next week, I'll be taking my IELTS exam.", focus: 'future continuous' },
        { t: 'tr', vi: 'Tôi sẽ gọi cho bạn ngay khi tôi đến sân bay.', ref: "I'll call you as soon as I arrive at the airport.", focus: 'time clause + present simple' },
        { t: 'tr', vi: 'Tôi đã quyết định rồi: năm sau tôi sẽ học lập trình.', ref: "I've decided: I'm going to learn programming next year.", focus: 'be going to – intention' },
        { t: 'tr', vi: 'Để tôi giúp bạn mang hành lý nhé?', ref: 'Shall I help you carry your luggage?', focus: 'Shall I…?' },
        { t: 'tr', vi: 'Trong tương lai, nhiều người sẽ làm việc tại nhà thay vì đến văn phòng.', ref: 'In the future, many people will be working from home instead of going to an office.', focus: 'future prediction (IELTS)' },
      ],
    },
  ],
};
