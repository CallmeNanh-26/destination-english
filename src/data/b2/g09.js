// B2 Unit 9 – Grammar: conditionals (Destination B2).
export default {
  id: 'b2-u09',
  book: 'b2',
  no: 9,
  title: 'Conditionals',
  titleVi: 'Câu điều kiện: loại 0, 1, 2, 3, hỗn hợp, đảo ngữ; unless, in case, as long as, provided',
  blocks: [
    { type: 'h', text: 'Loại 0 và loại 1' },
    { type: 'table', head: ['Loại', 'Cấu trúc', 'Cách dùng', 'Ví dụ'], rows: [
      ['0', 'If + HTĐ, HTĐ', 'Sự thật chung, định nghĩa', 'If you **have** faith in something, you **believe** in something you cannot prove.'],
      ['1', 'If + thì hiện tại, will + V', 'Điều kiện có thật / có khả năng ở hiện tại, tương lai', 'If you **have** a birthday party, you**’ll get** loads of presents.\nIf you**’re working** till 6.30, we**’ll have** dinner at about eight.\nIf you **have revised** properly, you **won’t have** any problems.'],
    ] },
    { type: 'tip', text: '• Có thể thay **will** bằng **may, might, can, could, should, have to…**: If you have a party, you **might** get loads of presents.\n• **If + should + V** = có thể nhưng không chắc: If you **should bump** into Alex, you’ll be able to get a lift home.\n• **If + hiện tại, mệnh lệnh** để hướng dẫn: If you **decide** to have a party, **tell** me!' },

    { type: 'h', text: 'unless, in case, as/so long as, provided (that)' },
    { type: 'table', head: ['Từ', 'Nghĩa', 'Ví dụ'], rows: [
      ['**unless**', '= if … not (trừ khi)', 'I’ll be there at six **unless** I get delayed.'],
      ['**in case**', '= phòng khi (vì có thể…)', 'Let’s take our wellies **in case** it’s muddy.'],
      ['**as / so long as**', '= chỉ cần, miễn là', '**As long as** I’m happy, my parents don’t care what job I do.'],
      ['**provided (that)**', '= miễn là (trang trọng hơn)', '**Provided (that)** I’m happy, my parents don’t care what job I do.'],
    ] },
    { type: 'warn', text: '• Sau **unless** dùng động từ khẳng định: ✗ unless I don’t get delayed.\n• **in case ≠ if**: Take an umbrella **in case** it rains (mang theo phòng mưa – dù mưa hay không) ≠ Take an umbrella **if** it rains (chỉ mang khi trời mưa).' },

    { type: 'h', text: 'Loại 2 – giả định ở hiện tại / tương lai' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Không có thật, khó xảy ra, giả định', 'If you **had** a beard, you **would look** just like Charles Dickens!\nIf you **were flying** to Rio, **would** you **get** there quicker?'],
      ['Lời khuyên', 'If I **were** you, I **would think** very carefully about my future. (trang trọng hơn)\nIf I **was** you, I’d have a party. (thân mật)'],
    ] },
    { type: 'tip', text: 'Có thể dùng **might/could** thay would: If we were older, we **could** go on holiday on our own.\n**could** trong mệnh đề if = was/were able to: If I **could** drive, I’d buy a car.' },

    { type: 'h', text: 'Loại 3 – giả định trong quá khứ' },
    { type: 'p', text: 'Cấu trúc: **If + quá khứ hoàn thành (đơn/tiếp diễn), would have + V3**' },
    { type: 'table', head: ['Ví dụ', 'Thực tế'], rows: [
      ['If you **had worn** a fake beard, no one **would have known** who you were!', 'Bạn không đeo râu giả nên mọi người nhận ra bạn.'],
      ['If she**’d been wearing** her new glasses, I **would have noticed** them.', 'Cô ấy không đeo nên tôi không để ý.'],
    ] },
    { type: 'tip', text: 'Có thể dùng **might/could/should have**: If I had done some revision, I **might / could / should have passed** the exam.' },

    { type: 'h', text: 'Câu điều kiện hỗn hợp (mixed)' },
    { type: 'table', head: ['Kiểu', 'Cấu trúc', 'Ví dụ'], rows: [
      ['Quá khứ → kết quả hiện tại', 'If + QKHT, would + V', 'If I **had listened** to my parents, I **wouldn’t be** in so much trouble **now**.'],
      ['Hiện tại → kết quả quá khứ', 'If + QKĐ, would have + V3', 'If I **had** a mobile, I **would have called** you last night.'],
    ] },

    { type: 'h', text: 'Câu điều kiện đảo ngữ (trang trọng)' },
    { type: 'table', head: ['Loại', 'Đảo ngữ', 'Ví dụ'], rows: [
      ['1', '**Should** + S + V', '**Should** the situation worsen, the UN is prepared to send in a peacekeeping force.'],
      ['2', '**Were** + S + to V / adj…', '**Were** the situation to worsen, the UN would be prepared to…'],
      ['3', '**Had** + S + V3', '**Had** the situation worsened, the UN would have been prepared to…'],
    ] },
    { type: 'warn', text: '• Khi mệnh đề điều kiện đứng trước, dùng **dấu phẩy**; khi kết quả đứng trước thì không cần.\n• Phủ định đảo ngữ: **Had I not** known… (✗ Hadn’t I known…)\n• Anh–Mỹ: người Mỹ nói chuyện thân mật đôi khi dùng would trong mệnh đề if (How would you feel if this **would happen**?) – trong IELTS hãy dùng chuẩn Anh: if this **happened**.' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ If I will have time, I will help → ✓ If I **have** time, I’ll help.',
      '✗ If I would be rich… → ✓ If I **were** rich…',
      '✗ If I had studied harder, I would pass → ✓ … I **would have passed**.',
      '✗ Unless you don’t hurry, you’ll be late → ✓ **Unless you hurry**, you’ll be late.',
    ] },
    { type: 'tip', text: 'IELTS: câu điều kiện là “cấu trúc phức” giúp tăng điểm Grammatical Range.\nSpeaking Part 3: “**If** governments **invested** more in public transport, fewer people **would** drive.”\nWriting Task 2 (trang trọng): “**Were** stricter laws **to be** introduced, crime rates might fall.” / “**Should** this trend **continue**, …”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn dạng đúng.',
      items: [
        { t: 'mcq', q: 'If you heat ice, it ___.', o: ['melts', 'will melt', 'would melt'], a: 0 },
        { t: 'mcq', q: 'If it ___ tomorrow, we’ll stay at home.', o: ['rains', 'will rain', 'would rain'], a: 0 },
        { t: 'mcq', q: 'If I ___ you, I’d apologise.', o: ['were', 'am', 'had been'], a: 0 },
        { t: 'mcq', q: 'If she had left earlier, she ___ the train.', o: ['would catch', "wouldn't have missed", 'will catch'], a: 1 },
        { t: 'mcq', q: 'If I had listened to my parents, I ___ in trouble now.', o: ["wouldn't be", "wouldn't have been", "won't be"], a: 0 },
        { t: 'mcq', q: 'I’ll come to the party ___ I have to work late.', o: ['unless', 'in case', 'provided'], a: 0 },
        { t: 'mcq', q: 'Take a jacket ___ it gets cold later.', o: ['in case', 'unless', 'as long as'], a: 0 },
        { t: 'mcq', q: 'You can borrow my car ___ you drive carefully.', o: ['as long as', 'unless', 'in case'], a: 0 },
        { t: 'mcq', q: '___ the situation worsen, the government will act.', o: ['Should', 'Were', 'Had'], a: 0 },
        { t: 'mcq', q: '___ I known, I would have helped you.', o: ['Had', 'Should', 'Were'], a: 0 },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Chia động từ trong ngoặc theo loại câu điều kiện phù hợp.',
      items: [
        { t: 'gap', q: 'If you ___ (not / hurry), you’ll miss the bus.', a: ["don't hurry", 'do not hurry'] },
        { t: 'gap', q: 'If I ___ (have) more money, I would travel round the world.', a: ['had'] },
        { t: 'gap', q: 'If we ___ (know) about the traffic, we would have left earlier.', a: ['had known', "'d known"] },
        { t: 'gap', q: 'If he ___ (be) more careful, he wouldn’t have had the accident.', a: ['had been', "'d been"] },
        { t: 'gap', q: 'If I had a mobile, I ___ (call) you last night.', a: ['would have called', "'d have called"] },
        { t: 'gap', q: 'If she hadn’t moved abroad, she ___ (not / speak) such good English now.', a: ["wouldn't speak", 'would not speak'] },
        { t: 'gap', q: 'What ___ (you / do) if you won the lottery?', a: ['would you do'] },
        { t: 'gap', q: 'We’d still be waiting if you ___ (not / turn) up.', a: ["hadn't turned", 'had not turned'] },
      ],
    },
    {
      title: 'C. Viết lại câu',
      instruction: 'Viết lại câu theo gợi ý trong ngoặc.',
      items: [
        { t: 'fix', q: 'I didn’t revise, so I failed the exam. (If…)', a: ["If I had revised, I wouldn't have failed the exam.", 'If I had revised, I would have passed the exam.', "If I'd revised, I wouldn't have failed the exam."] },
        { t: 'fix', q: 'I don’t have a car, so I can’t drive you home. (If…)', a: ['If I had a car, I could drive you home.', "If I had a car, I'd drive you home.", 'If I had a car, I would drive you home.'] },
        { t: 'fix', q: 'If you don’t study, you won’t pass. (Unless…)', a: ["Unless you study, you won't pass.", 'Unless you study, you will not pass.'] },
        { t: 'fix', q: 'If the situation worsens, we will act. (Should…)', a: ['Should the situation worsen, we will act.'] },
        { t: 'fix', q: 'If I had known, I would have told you. (Had…)', a: ['Had I known, I would have told you.'] },
        { t: 'fix', q: 'I didn’t take the job, so I’m not rich now. (If… – mixed)', a: ["If I had taken the job, I would be rich now.", "If I'd taken the job, I'd be rich now."] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng đúng loại câu điều kiện.',
      items: [
        { t: 'tr', vi: 'Nếu chính phủ đầu tư nhiều hơn vào giao thông công cộng, sẽ có ít người đi xe máy hơn.', ref: 'If the government invested more in public transport, fewer people would ride motorbikes.', focus: 'second conditional (IELTS Part 3)' },
        { t: 'tr', vi: 'Nếu tôi nghe lời bố mẹ, bây giờ tôi đã không gặp rắc rối.', ref: "If I had listened to my parents, I wouldn't be in trouble now.", focus: 'mixed conditional' },
        { t: 'tr', vi: 'Mang theo ô phòng khi trời mưa.', ref: 'Take an umbrella in case it rains.', focus: 'in case' },
        { t: 'tr', vi: 'Bạn có thể mượn máy tính của tôi miễn là bạn cẩn thận với nó.', ref: 'You can borrow my laptop as long as you are careful with it.', focus: 'as long as' },
        { t: 'tr', vi: 'Nếu xu hướng này tiếp tục, các thành phố sẽ trở nên đông đúc hơn nữa.', ref: 'Should this trend continue, cities will become even more crowded.', focus: 'inverted conditional (IELTS Writing)' },
        { t: 'tr', vi: 'Nếu tôi biết bạn đến, tôi đã nấu bữa tối rồi.', ref: "If I had known you were coming, I would have cooked dinner.", focus: 'third conditional' },
      ],
    },
  ],
};
