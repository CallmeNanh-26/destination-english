// Unit 2 – Grammar: Past simple, past continuous, used to (Destination B1).
export default {
  id: 'b1-u02',
  book: 'b1',
  no: 2,
  title: 'Past simple, past continuous, used to',
  titleVi: 'Quá khứ đơn, quá khứ tiếp diễn, used to',
  blocks: [
    { type: 'h', text: '1. Quá khứ đơn (Past simple)' },
    { type: 'table', head: ['Khẳng định', 'Phủ định', 'Nghi vấn'], rows: [
      ['I/you/he… **played** / **went**', "I/you/he… **didn't play** / **didn't go**", '**Did** you **play** / **go**…?'],
    ] },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Hành động đã hoàn tất tại thời điểm xác định', 'I **saw** the new James Bond film yesterday.'],
      ['Hành động lặp lại trong quá khứ', 'I **went** to the theatre four times last month.'],
      ['Sự thật chung về quá khứ', "Fifty years ago, people **didn't spend** as much on entertainment."],
      ['Chuỗi sự kiện chính trong câu chuyện', 'Josh **pushed** the door open and **looked** inside.'],
    ] },
    { type: 'p', text: 'Dấu hiệu: **yesterday, last week/year, in 2010, two days ago, when I was a child**.' },
    { type: 'list', items: [
      'Động từ có quy tắc: + **-ed** (play → played, stop → stopp**ed**, study → stud**ied**).',
      'Động từ bất quy tắc phải học thuộc: go → **went**, see → **saw**, buy → **bought**, teach → **taught**…',
      'Phát âm đuôi -ed: /t/ sau âm vô thanh (watched), /d/ sau âm hữu thanh (played), /ɪd/ sau t, d (wanted, needed).',
    ] },

    { type: 'h', text: '2. Quá khứ tiếp diễn (Past continuous)' },
    { type: 'table', head: ['', 'Khẳng định', 'Phủ định', 'Nghi vấn'], rows: [
      ['I/he/she/it', 'was playing', "wasn't playing", '**Was** he **playing**?'],
      ['you/we/they', 'were playing', "weren't playing", '**Were** they **playing**?'],
    ] },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Hành động đang diễn ra tại một thời điểm trong quá khứ', 'At nine o’clock last night, I **was watching** TV.'],
      ['Hai hành động song song', 'I **was reading** while you **were doing** the washing-up.'],
      ['Bối cảnh của câu chuyện', 'It **was raining**, so Wendy decided to go to the cinema.'],
    ] },
    { type: 'p', text: 'Dấu hiệu: **at that moment, at 8 o’clock yesterday, while, all evening**.' },
    { type: 'tip', text: 'Hành động **ngắn xen vào** hành động **dài** đang diễn ra: dài → quá khứ tiếp diễn, ngắn → quá khứ đơn.\nThe phone **rang** while I **was watching** a DVD.\n**while** + hành động dài; **when** thường + hành động ngắn.' },
    { type: 'warn', text: 'Không dùng quá khứ tiếp diễn cho thói quen lặp lại.\n✗ Last year, I was going to the cinema every weekend.\n✓ Last year, I **went** to the cinema every weekend.' },

    { type: 'h', text: '3. Used to' },
    { type: 'table', head: ['Khẳng định', 'Phủ định', 'Nghi vấn'], rows: [
      ['I **used to** play…', "I **didn't use to** play… / I **never used to** play…", '**Did** you **use to** play…?'],
    ] },
    { type: 'p', text: '**used to + V nguyên mẫu**: thói quen hoặc trạng thái trong quá khứ **nay không còn nữa**.\nWhen I was four, I **used to** eat ice cream every day. (bây giờ không còn)\nThere **used to** be a cinema here. (giờ không còn)' },
    { type: 'warn', text: 'Đừng nhầm với **be/get used to + V-ing** (quen với việc gì):\nI **used to live** in Hanoi. (trước đây sống ở Hà Nội)\nI**’m used to living** in a big city. (đã quen sống ở thành phố lớn)' },

    { type: 'h', text: '4. Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Quên chia quá khứ vì tiếng Việt không chia thì: ✗ Yesterday I go to school. → ✓ Yesterday I **went** to school.',
      '“Did” + V-ed: ✗ Did you went…? → ✓ Did you **go**…?',
      '“didn’t used to”: ✗ I didn’t used to… → ✓ I didn’t **use** to…',
      'Quên phát âm đuôi -ed khi nói (watched /wɒtʃt/, decided /dɪˈsaɪdɪd/) – giám khảo IELTS rất chú ý.',
    ] },
    { type: 'tip', text: 'IELTS Part 2 thường kể chuyện quá khứ. Mở bài bằng bối cảnh (quá khứ tiếp diễn) rồi kể sự kiện chính (quá khứ đơn): “It was a rainy afternoon and I **was waiting** for the bus when I **noticed**…”. Dùng **used to** để so sánh xưa – nay: “I **used to** be terrified of speaking in public, but…”' },
  ],
  exercises: [
    {
      title: 'A. Chọn thì đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'I ___ my keys yesterday, so I couldn’t get in.', o: ['lost', 'was losing'], a: 0 },
        { t: 'mcq', q: 'At 8 p.m. last night, we ___ dinner.', o: ['had', 'were having'], a: 1, ex: 'Đang diễn ra tại thời điểm xác định.' },
        { t: 'mcq', q: 'She ___ her leg while she was skiing.', o: ['broke', 'was breaking'], a: 0, ex: 'Hành động ngắn xen vào.' },
        { t: 'mcq', q: 'While I ___, my brother was playing video games.', o: ['studied', 'was studying'], a: 1, ex: 'Hai hành động song song.' },
        { t: 'mcq', q: 'When I was a child, I ___ climb trees in my grandparents’ garden.', o: ['used to', 'was used to'], a: 0 },
        { t: 'mcq', q: '___ you use to play any sports at school?', o: ['Were', 'Did'], a: 1 },
        { t: 'mcq', q: 'Last summer, I ___ to the beach every weekend.', o: ['went', 'was going'], a: 0, ex: 'Thói quen lặp lại → quá khứ đơn, không dùng tiếp diễn.' },
        { t: 'mcq', q: 'The sun ___ and the birds were singing when we set off.', o: ['shone', 'was shining'], a: 1, ex: 'Bối cảnh câu chuyện.' },
        { t: 'mcq', q: 'There ___ a cinema in our town, but it closed in 2015.', o: ['used to be', 'was being'], a: 0 },
        { t: 'mcq', q: 'What ___ when the fire alarm went off?', o: ['did you do', 'were you doing'], a: 1 },
      ],
    },
    {
      title: 'B. Chia động từ trong ngoặc',
      instruction: 'Viết dạng đúng: quá khứ đơn, quá khứ tiếp diễn hoặc used to.',
      items: [
        { t: 'gap', q: 'Shakespeare ___ (write) Romeo and Juliet.', a: ['wrote'] },
        { t: 'gap', q: 'I ___ (not/see) you at the party last night.', a: ["didn't see", 'did not see'] },
        { t: 'gap', q: 'They ___ (play) tennis when it started to rain.', a: ['were playing'] },
        { t: 'gap', q: 'My dad ___ (smoke), but he gave up ten years ago.', a: ['used to smoke'] },
        { t: 'gap', q: 'Where ___ you ___ (buy) that jacket? (viết 2 phần, cách nhau …)', a: ['did … buy', 'did buy'] },
        { t: 'gap', q: 'While she ___ (cook), the lights went out.', a: ['was cooking'] },
        { t: 'gap', q: 'We ___ (not/use to) have a car when I was young.', a: ["didn't use to", 'did not use to'] },
        { t: 'gap', q: 'He ___ (teach) at this school for twenty years before he retired.', a: ['taught'] },
        { t: 'gap', q: 'What ___ you ___ (do) at 10 o’clock last night? (viết 2 phần, cách nhau …)', a: ['were … doing', 'were doing'] },
        { t: 'gap', q: 'I ___ (fall) asleep while I was watching the film.', a: ['fell'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'Yesterday I go to the library.', a: ['Yesterday I went to the library.'] },
        { t: 'fix', q: 'Did you went to the concert?', a: ['Did you go to the concert?'] },
        { t: 'fix', q: "I didn't used to like vegetables.", a: ["I didn't use to like vegetables."] },
        { t: 'fix', q: 'When I arrived, they had dinner.', a: ['When I arrived, they were having dinner.'], ex: 'Đang ăn khi tôi đến → quá khứ tiếp diễn.' },
        { t: 'fix', q: 'Last year I was going to the gym every day.', a: ['Last year I went to the gym every day.', 'Last year I used to go to the gym every day.'] },
        { t: 'fix', q: 'She was knowing the answer.', a: ['She knew the answer.'], ex: 'know là stative verb.' },
        { t: 'fix', q: 'I use to live in Da Nang when I was a child.', a: ['I used to live in Da Nang when I was a child.'] },
        { t: 'fix', q: 'While I walked home, I saw an accident.', a: ['While I was walking home, I saw an accident.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý chọn đúng thì quá khứ.',
      items: [
        { t: 'tr', vi: 'Tối qua lúc 9 giờ tôi đang học bài thì mất điện.', ref: 'I was studying at nine o’clock last night when the power went out.', focus: 'past continuous + past simple' },
        { t: 'tr', vi: 'Hồi nhỏ tôi từng rất sợ bóng tối.', ref: 'When I was little, I used to be very afraid of the dark.', focus: 'used to' },
        { t: 'tr', vi: 'Trong khi mẹ tôi nấu ăn thì bố tôi đang đọc báo.', ref: 'While my mum was cooking, my dad was reading the newspaper.', focus: 'two actions in progress' },
        { t: 'tr', vi: 'Chúng tôi đã đến Đà Lạt ba lần vào năm ngoái.', ref: 'We went to Da Lat three times last year.', focus: 'repeated past actions' },
        { t: 'tr', vi: 'Ngày trước ở đây từng có một rạp chiếu phim.', ref: 'There used to be a cinema here.', focus: 'used to (state)' },
        { t: 'tr', vi: 'Bạn đang làm gì khi tôi gọi điện cho bạn?', ref: 'What were you doing when I called you?', focus: 'past continuous question' },
        { t: 'tr', vi: 'Trời đang mưa to nên chúng tôi quyết định ở nhà.', ref: 'It was raining heavily, so we decided to stay at home.', focus: 'background + main event' },
        { t: 'tr', vi: 'Trước đây anh ấy không hay đọc sách, nhưng giờ anh ấy đọc mỗi ngày.', ref: "He didn't use to read much, but now he reads every day.", focus: "didn't use to" },
      ],
    },
  ],
};
