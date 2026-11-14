// B2 Unit 3 – Grammar: past time (Destination B2).
export default {
  id: 'b2-u03',
  book: 'b2',
  no: 3,
  title: 'Past time',
  titleVi: 'Thì quá khứ: đơn, tiếp diễn, hoàn thành, hoàn thành tiếp diễn; would, used to, be/get used to',
  blocks: [
    { type: 'h', text: 'Quá khứ đơn (past simple)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Hành động đơn lẻ đã xong', 'Tom and I **played** a game of chess and he **won**.'],
      ['Thói quen trong quá khứ', '**Did** you **collect** stamps when you were younger?'],
      ['Tình huống lâu dài trong quá khứ', 'A famous footballer **lived** in our house before we bought it.'],
      ['Sự thật về quá khứ', 'Crosswords **didn’t become** popular until the 1930s.'],
      ['Các sự kiện chính trong câu chuyện', 'The referee **blew** the whistle and Simon **passed** the ball to James, who **ran** towards the goal.'],
    ] },
    { type: 'tip', text: 'Dùng **did** trong câu khẳng định để nhấn mạnh: ‘Why didn’t you win?’ – ‘I **did win**! Who told you I didn’t?’' },

    { type: 'h', text: 'Quá khứ tiếp diễn (past continuous)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Đang xảy ra tại một thời điểm trong quá khứ', 'At five o’clock, I **was reading** my new book.'],
      ['Tình huống tạm thời', 'Greg **was living** in London at the time.'],
      ['Thói quen gây khó chịu (với always)', 'My brother **was always borrowing** my toys.'],
      ['Kéo dài suốt một khoảng thời gian', 'Daniel **was playing** video games all morning yesterday.'],
      ['Hai hành động song song', 'Ulla **was playing** Monopoly while we **were playing** draughts.'],
      ['Bối cảnh trong câu chuyện', 'The sun **was shining** and the birds **were singing**. Lisa opened the window…'],
    ] },
    { type: 'warn', text: '• Một hành động **xen vào** hành động đang diễn ra: quá khứ đơn + quá khứ tiếp diễn.\n✓ I **was playing** on my computer when it suddenly **crashed**.\n• **Không** dùng quá khứ tiếp diễn cho hành động **lặp lại**: ✓ When we were on holiday, we **played** volleyball every day. ✗ we were playing volleyball every day.' },

    { type: 'h', text: 'Quá khứ hoàn thành (past perfect simple)' },
    { type: 'p', text: 'Cấu trúc: **had + V3**. Dùng cho việc xảy ra **trước** một mốc trong quá khứ.' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Trạng thái trước một mốc quá khứ', 'We**’d lived** next to the gym for months before I decided to join.'],
      ['Hành động đã xong trước một mốc quá khứ', 'I**’d** already **bought** the game when I saw it was cheaper in another shop.'],
      ['Kết quả tại một mốc quá khứ', 'We didn’t feel like playing Scrabble because we **had** just **finished** a long game of Monopoly.'],
    ] },
    { type: 'tip', text: '• Khi thứ tự đã rõ (before, after), quá khứ đơn cũng được: We **lived** next to the gym for months before I decided to join.\n• Sau khi đã dùng quá khứ hoàn thành một lần, có thể quay về quá khứ đơn cho các câu tiếp.\n• **It was the first/second time…** + quá khứ hoàn thành: It was the second time I**’d been** on a plane.' },

    { type: 'h', text: 'Quá khứ hoàn thành tiếp diễn (past perfect continuous)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Kéo dài đến một mốc trong quá khứ', 'When you saw us, we **had been running** for six miles – and we still had a mile to go!'],
      ['Vừa dừng trước một mốc quá khứ (còn dấu hiệu)', 'Sarah looked tired because she **had been exercising** all morning.'],
    ] },

    { type: 'h', text: 'would và used to – thói quen trong quá khứ' },
    { type: 'table', head: ['', 'would + V', 'used to + V'], rows: [
      ['Thói quen (hành động)', '✓ My grandfather **would take** me to the park.', '✓ My mother **used to play** squash a lot.'],
      ['Trạng thái (be, have, live, like…)', '✗ không dùng', '✓ We **used to have** a house next to the park.'],
      ['Phủ định / câu hỏi', 'ít dùng (có thể dùng **would never**)', 'didn’t use to / never used to / Did you use to…?'],
    ] },
    { type: 'warn', text: '✗ We **would have** a house next to the park → ✓ We **used to have** a house… (trạng thái → chỉ dùng used to)\nPhủ định: I **didn’t use to** like football (✗ didn’t used to).' },

    { type: 'h', text: 'be/get used to + V-ing / danh từ' },
    { type: 'table', head: ['Cấu trúc', 'Nghĩa', 'Ví dụ'], rows: [
      ['**be used to** + V-ing / N', 'đã quen với', 'I didn’t like being the goalkeeper at first but now I**’m used to** it.'],
      ['**get used to** + V-ing / N', 'dần quen với (quá trình)', 'I**’m** gradually **getting used to** being in a new team.'],
      ['**used to** + V nguyên mẫu', 'đã từng (nay không còn)', 'I **used to** play tennis.'],
    ] },
    { type: 'warn', text: 'Lỗi rất hay gặp: ✗ I’m used to **get up** early → ✓ I’m used to **getting up** early. (to ở đây là giới từ → theo sau là V-ing)' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ When I came, they already left → ✓ When I came, they **had** already **left**.',
      '✗ I was playing football every Sunday last year → ✓ I **played / used to play** football every Sunday.',
      '✗ I am not used to live alone → ✓ I am not used to **living** alone.',
      '✗ Did you used to … → ✓ Did you **use to** …?',
    ] },
    { type: 'tip', text: 'IELTS Speaking Part 2 (kể chuyện quá khứ): mở bài bằng bối cảnh (quá khứ tiếp diễn), kể sự kiện (quá khứ đơn), lùi về trước (quá khứ hoàn thành):\n“It **was raining** heavily that evening. I **had** just **finished** my exams, so I **decided** to…”\nPart 1 về tuổi thơ: “When I was a child, I **used to** spend hours… My grandmother **would** tell me stories every night.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn dạng động từ đúng.',
      items: [
        { t: 'mcq', q: 'I ___ on my computer when it suddenly crashed.', o: ['played', 'was playing', 'had played'], a: 1 },
        { t: 'mcq', q: 'When we were on holiday, we ___ volleyball every day.', o: ['played', 'were playing', 'had been playing'], a: 0 },
        { t: 'mcq', q: 'By the time we arrived, the match ___.', o: ['already started', 'had already started', 'was already starting'], a: 1 },
        { t: 'mcq', q: 'Sarah looked tired because she ___ all morning.', o: ['exercised', 'had been exercising', 'was exercised'], a: 1 },
        { t: 'mcq', q: 'We ___ a house next to the park when I was a child.', o: ['would have', 'used to have', 'were having'], a: 1 },
        { t: 'mcq', q: 'My grandfather ___ me to the park every Sunday.', o: ['would take', 'was taking', 'had taken'], a: 0 },
        { t: 'mcq', q: 'I’m slowly getting used to ___ in a big city.', o: ['live', 'living', 'lived'], a: 1 },
        { t: 'mcq', q: 'It was the first time I ___ snow.', o: ['saw', 'had seen', 'have seen'], a: 1 },
        { t: 'mcq', q: '___ you use to play chess when you were young?', o: ['Did', 'Were', 'Had'], a: 0 },
        { t: 'mcq', q: 'While I ___ the dinner, the phone rang.', o: ['cooked', 'was cooking', 'had cooked'], a: 1 },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Chia động từ trong ngoặc ở thì quá khứ phù hợp.',
      items: [
        { t: 'gap', q: 'The referee ___ (blow) the whistle and the match started.', a: ['blew'] },
        { t: 'gap', q: 'At eight o’clock last night I ___ (watch) the football on TV.', a: ['was watching'] },
        { t: 'gap', q: 'I ___ (already / buy) the game when I saw it was cheaper online.', a: ['had already bought', "'d already bought"] },
        { t: 'gap', q: 'We ___ (run) for an hour when it started to rain.', a: ['had been running', "'d been running"] },
        { t: 'gap', q: 'My brother ___ (always / borrow) my things without asking. It drove me mad!', a: ['was always borrowing'] },
        { t: 'gap', q: 'I ___ (not / use) to like sport, but now I love it.', a: ["didn't use", 'did not use'] },
        { t: 'gap', q: 'She isn’t used to ___ (play) in front of a big crowd.', a: ['playing'] },
        { t: 'gap', q: 'When I got to the stadium, I realised I ___ (leave) my ticket at home.', a: ['had left', "'d left"] },
      ],
    },
    {
      title: 'C. Sửa lỗi sai',
      instruction: 'Mỗi câu có một lỗi. Viết lại câu đúng.',
      items: [
        { t: 'fix', q: 'We would have a dog when I was young.', a: ['We used to have a dog when I was young.'] },
        { t: 'fix', q: 'I am not used to get up so early.', a: ['I am not used to getting up so early.', "I'm not used to getting up so early."] },
        { t: 'fix', q: 'Did you used to play the piano?', a: ['Did you use to play the piano?'] },
        { t: 'fix', q: 'When I arrived at the party, most people already left.', a: ['When I arrived at the party, most people had already left.'] },
        { t: 'fix', q: 'Last summer I was swimming in the sea every morning.', a: ['Last summer I swam in the sea every morning.', 'Last summer I used to swim in the sea every morning.'] },
        { t: 'fix', q: 'It was the first time I ever played golf.', a: ["It was the first time I'd ever played golf.", 'It was the first time I had ever played golf.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý chọn đúng thì quá khứ.',
      items: [
        { t: 'tr', vi: 'Hồi nhỏ, tôi thường chơi đá bóng với bạn bè sau giờ học.', ref: 'When I was a child, I used to play football with my friends after school.', focus: 'used to (IELTS Part 1)' },
        { t: 'tr', vi: 'Khi tôi đến sân vận động thì trận đấu đã bắt đầu rồi.', ref: 'When I got to the stadium, the match had already started.', focus: 'past perfect' },
        { t: 'tr', vi: 'Tôi đang chạy bộ trong công viên thì trời bắt đầu mưa.', ref: 'I was jogging in the park when it started to rain.', focus: 'past continuous + past simple' },
        { t: 'tr', vi: 'Lúc đầu tôi không quen sống một mình, nhưng giờ thì tôi đã quen rồi.', ref: "At first I wasn't used to living alone, but now I've got used to it.", focus: 'be/get used to + V-ing' },
        { t: 'tr', vi: 'Cô ấy mệt vì đã tập luyện suốt cả buổi sáng.', ref: 'She was tired because she had been training all morning.', focus: 'past perfect continuous' },
        { t: 'tr', vi: 'Bà tôi thường kể chuyện cho tôi nghe mỗi tối.', ref: 'My grandmother would tell me stories every evening.', focus: 'would – past habit' },
      ],
    },
  ],
};
