// Unit 35 – Grammar: wish (Destination B1).
export default {
  id: 'b1-u35',
  book: 'b1',
  no: 35,
  title: 'Wish',
  titleVi: 'Câu ước với wish / if only',
  blocks: [
    { type: 'h', text: 'wish – ước điều không có thật' },
    { type: 'p', text: 'Dùng **wish** để nói về tình huống **không có thật** nhưng ta **mong** nó có thật. Thì của động từ sau wish **lùi một bậc** so với thời điểm ta ước.' },
    { type: 'table', head: ['Mục đích', 'Cấu trúc', 'Ví dụ'], rows: [
      ['Ước về **hiện tại** / chung chung', 'wish + **quá khứ đơn**', 'Carl **wishes** he **had** a telescope.\nI wish I **wasn’t** scared of spiders.'],
      ['Ước về **quá khứ** (tiếc nuối)', 'wish + **quá khứ hoàn thành**', 'Tracy **wishes** she**’d seen** that programme last night.\nI wish they **hadn’t cut down** so many trees.'],
      ['**Phàn nàn**, chỉ trích người khác', 'wish + **would** + V', 'I wish people **would throw** their litter in the bin!\nI wish you **wouldn’t smoke** in here.'],
      ['Ước về **khả năng / sự cho phép**', 'wish + **could** + V', 'I wish I **could travel** through time!\nDavid wishes he **could come** with us.'],
    ] },
    { type: 'tip', text: '• Sau wish + quá khứ đơn có thể dùng **was** hoặc **were** cho I/he/she/it. **were** trang trọng hơn:\nI wish I **was** an astronaut. (thân mật) / I wish I **were** an astronaut. (trang trọng)\n• **If only** dùng giống wish nhưng cảm xúc mạnh hơn:\n**If only** I **was/were** an astronaut! / **If only** I **hadn’t said** that!' },
    { type: 'warn', text: '• **Không dùng would** khi ước về **chính mình**:\n✓ I wish I **lived** on Mars. ✗ I wish I would live on Mars.\n• Nếu sự việc **có thể** xảy ra trong tương lai → dùng **hope**, không dùng wish:\n✓ I **hope** it **doesn’t snow** tomorrow. ✗ I wish it doesn’t snow tomorrow.\n• Không dùng **will / can** sau wish: ✗ I wish I can speak German → ✓ I wish I **could** speak German.' },

    { type: 'h', text: 'So sánh wish và hope' },
    { type: 'table', head: ['', 'wish', 'hope'], rows: [
      ['Khả năng', 'không thật / khó xảy ra', 'có thể xảy ra'],
      ['Thì', 'lùi thì (QKĐ, QKHT, would, could)', 'thì bình thường (HTĐ, will)'],
      ['Ví dụ', 'I wish I **were** taller.', 'I hope I **pass** the exam.'],
    ] },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ I wish I have more time → ✓ I wish I **had** more time.',
      '✗ I wish I studied harder last year → ✓ I wish I **had studied** harder last year.',
      '✗ I wish you will pass → ✓ I **hope** you **pass** / **will pass**.',
      '✗ I wish I would be rich → ✓ I wish I **were** rich.',
    ] },
    { type: 'tip', text: 'IELTS Speaking – câu ước giúp thể hiện cảm xúc và ngữ pháp phức:\nPart 1: “I **wish I had** more free time, but I’m quite busy with work at the moment.”\nPart 2: “Looking back, I **wish I had** spent more time with my grandparents.”\nPart 3: “I **wish** more people **would** use public transport instead of motorbikes.”' },
  ],
  exercises: [
    {
      title: 'A. Chia động từ (ước về hiện tại)',
      instruction: 'Chia động từ trong ngoặc.',
      items: [
        { t: 'gap', q: 'I wish I ___ (have) a million euros! I’d buy lots of great things.', a: ['had'] },
        { t: 'gap', q: 'I wish we ___ (live) in a bigger house. This one is too small.', a: ['lived'] },
        { t: 'gap', q: 'Becca wishes she ___ (be) old enough to drive a car.', a: ['was', 'were'] },
        { t: 'gap', q: 'I wish my computer ___ (not/be) broken. I can’t check my email.', a: ["wasn't", 'was not', "weren't", 'were not'] },
        { t: 'gap', q: 'I wish I ___ (not/like) chocolate so much!', a: ["didn't like", 'did not like'] },
        { t: 'gap', q: 'Grant wishes he ___ (not/make) so many mistakes all the time.', a: ["didn't make", 'did not make'] },
        { t: 'gap', q: 'Look what they’re wearing! I bet they wish they ___ (not/look) so silly!', a: ["didn't look", 'did not look'] },
      ],
    },
    {
      title: 'B. Ước về quá khứ',
      instruction: 'Chia động từ (wish + quá khứ hoàn thành).',
      items: [
        { t: 'gap', q: 'I lost the match. I wish I ___ (win).', a: ['had won', "'d won"] },
        { t: 'gap', q: 'I’m in trouble. I wish I ___ (listen) to my mother.', a: ['had listened', "'d listened"] },
        { t: 'gap', q: 'What a beautiful view! I wish we ___ (bring) a camera with us.', a: ['had brought', "'d brought"] },
        { t: 'gap', q: 'I failed the test. I wish I ___ (study) a bit harder.', a: ['had studied', "'d studied"] },
        { t: 'gap', q: 'My phone bill is €1,000! I wish I ___ (not/make) so many calls last month.', a: ["hadn't made", 'had not made'] },
        { t: 'gap', q: 'The magician is going to cut me in half! I wish he ___ (not/choose) me!', a: ["hadn't chosen", 'had not chosen'] },
      ],
    },
    {
      title: 'C. Sửa từ sai',
      instruction: 'Từ trong ngoặc kép sai. Viết từ/cụm từ đúng.',
      items: [
        { t: 'gap', q: 'I wish I “can” speak German, but I never learnt it at school. → ___', a: ['could'] },
        { t: 'gap', q: 'I wish you “will” put your toys away! It’s not difficult! → ___', a: ['would'] },
        { t: 'gap', q: 'Do you sometimes wish you “can” fly? → ___', a: ['could'] },
        { t: 'gap', q: 'I wish you “won’t” lie to me all the time! → ___', a: ["wouldn't", 'would not'] },
        { t: 'gap', q: 'If only she “will” ask me to go to the disco with her! → ___', a: ['would'] },
        { t: 'gap', q: 'If only you “can” come with us! → ___', a: ['could'] },
      ],
    },
    {
      title: 'D. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'I wish I ___ an MP3 player.', o: ['have', 'had', 'would have'], a: 1 },
        { t: 'mcq', q: 'We all wish Tim ___ with the housework.', o: ['helps', 'will help', 'would help'], a: 2 },
        { t: 'mcq', q: 'I wish I ___ to buy a lottery ticket last night.', o: ['remember', 'remembered', 'had remembered'], a: 2 },
        { t: 'mcq', q: 'I wish you ___ live so far away.', o: ["don't", "didn't", "won't"], a: 1 },
        { t: 'mcq', q: 'I wish they ___ keep changing the time of this programme.', o: ["couldn't", "wouldn't", "don't"], a: 1 },
        { t: 'mcq', q: 'Do you wish you ___ to help Michael in the shop last weekend?', o: ["hadn't offered", "didn't offer", "haven't offered"], a: 0 },
        { t: 'mcq', q: 'I ___ tomorrow is better than today.', o: ['wish', 'hope', 'want'], a: 1 },
        { t: 'mcq', q: 'I wish I ___ nearer my office. The traffic is terrible.', o: ['live', 'lived', 'would live'], a: 1 },
      ],
    },
    {
      title: 'E. Viết câu ước',
      instruction: 'Viết lại thành câu với I wish …',
      items: [
        { t: 'fix', q: 'I don’t have enough free time. (I wish …)', a: ['I wish I had enough free time.', 'I wish I had more free time.'] },
        { t: 'fix', q: 'I didn’t go to the concert. (I wish …)', a: ['I wish I had gone to the concert.', "I wish I'd gone to the concert."] },
        { t: 'fix', q: 'My neighbours always play loud music. (I wish …)', a: ["I wish my neighbours wouldn't play loud music.", 'I wish my neighbours would not play loud music.', "I wish my neighbours wouldn't always play loud music.", 'I wish my neighbours would stop playing loud music.'] },
        { t: 'fix', q: 'I can’t swim. (I wish …)', a: ['I wish I could swim.'] },
        { t: 'fix', q: 'I said something stupid in the interview. (I wish …)', a: ["I wish I hadn't said something stupid in the interview.", 'I wish I had not said something stupid in the interview.', "I wish I hadn't said that in the interview."] },
      ],
    },
    {
      title: 'F. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng wish / if only / hope.',
      items: [
        { t: 'tr', vi: 'Tôi ước mình có nhiều thời gian rảnh hơn.', ref: 'I wish I had more free time.', focus: 'wish + past simple' },
        { t: 'tr', vi: 'Tôi ước mình đã học tiếng Anh chăm chỉ hơn khi còn đi học.', ref: 'I wish I had studied English harder when I was at school.', focus: 'wish + past perfect' },
        { t: 'tr', vi: 'Giá mà tôi có thể nói tiếng Anh trôi chảy!', ref: 'If only I could speak English fluently!', focus: 'if only + could' },
        { t: 'tr', vi: 'Tôi ước mọi người sẽ không xả rác ra đường.', ref: "I wish people wouldn't throw litter in the street.", focus: 'wish + would (complaint)' },
        { t: 'tr', vi: 'Tôi hy vọng ngày mai trời không mưa.', ref: "I hope it doesn't rain tomorrow.", focus: 'hope (not wish)' },
        { t: 'tr', vi: 'Nhìn lại, tôi ước mình đã dành nhiều thời gian hơn cho ông bà.', ref: 'Looking back, I wish I had spent more time with my grandparents.', focus: 'wish + past perfect (IELTS Part 2)' },
      ],
    },
  ],
};
