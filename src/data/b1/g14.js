// Unit 14 – Grammar: Articles (Destination B1).
export default {
  id: 'b1-u14',
  book: 'b1',
  no: 14,
  title: 'Articles',
  titleVi: 'Mạo từ a / an / the / không mạo từ',
  blocks: [
    { type: 'h', text: '1. a / an (mạo từ không xác định)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Danh từ đếm được số ít, **chưa xác định** (nhắc lần đầu, một cái bất kỳ)', 'I need to get **a** new coat.'],
      ['**an** khi từ sau bắt đầu bằng **âm** nguyên âm', "I don't have enough money for **an** expensive dress."],
      ['Nghề nghiệp', 'She is **an** engineer. / He works as **a** waiter.'],
    ] },
    { type: 'warn', text: 'a/an theo **âm**, không theo chữ cái:\n**an** honest person, **an** hour (h câm) · **a** euro, **a** uniform, **a** university (/juː/) · **an** MBA (/em/)' },

    { type: 'h', text: '2. the (mạo từ xác định)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Danh từ số ít **xác định** (cả hai người đều biết là cái nào)', "Let's go to **the** new shopping centre."],
      ['Danh từ số nhiều xác định', 'Where are **the** books I ordered?'],
      ['Danh từ không đếm được xác định', 'I gave the shop assistant **the** money.'],
      ['Nhắc lại lần thứ hai', 'I bought **a** shirt and **a** tie. **The** shirt was cheap.'],
      ['Vật duy nhất', '**the** sun, **the** moon, **the** Earth, **the** world, **the** sky, **the** environment'],
    ] },

    { type: 'h', text: '3. Không dùng mạo từ (zero article)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Danh từ số nhiều nói **chung chung**', 'Prices have gone up a lot recently.'],
      ['Danh từ không đếm được nói chung', 'Fresh fruit is really good for you.'],
    ] },
    { type: 'tip', text: 'So sánh: **Dogs** are loyal animals. (chó nói chung) / **The dogs** next door bark all night. (những con chó cụ thể)' },

    { type: 'h', text: '4. Các quy tắc đặc biệt' },
    { type: 'table', head: ['', 'Dùng THE', 'KHÔNG mạo từ'], rows: [
      ['Nơi chốn', 'biển, đại dương (**the** Atlantic), sông (**the** Amazon), vùng (**the** Antarctic), một số nước (**the** USA, **the** UK), công trình (**the** theatre), **the** sea', 'thành phố (Moscow), hầu hết quốc gia (France, Vietnam), châu lục (Europe), đường phố (Baker Street), hành tinh (Mars)'],
      ['Hoạt động', 'on **the** radio, **the** media, play **the** piano (nhạc cụ)', 'go to work, on TV, go shopping, play tennis (thể thao), listen to music, go to school, be at university, môn học (maths)'],
      ['Thời gian', 'in **the** morning, on **the** 20th March, in **the** 1950s', 'thứ (Thursday), tháng (May), năm (2009), at night'],
      ['Người', '**the** King, **the** Prime Minister, **the** army, **the** police, **the** English (người Anh nói chung)', 'become king, he’s English, speak English'],
    ] },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Quên mạo từ trước danh từ đếm được số ít: ✗ I am student. → ✓ I am **a** student.',
      'Thêm “the” khi nói chung: ✗ The life is beautiful. → ✓ **Life** is beautiful. ✗ I like the music. (nói chung) → ✓ I like music.',
      '✗ go to the school (đi học) → ✓ go to school; ✗ play the football → ✓ play football.',
      '✗ a information, a homework → không đếm được, không dùng a/an.',
    ] },
    { type: 'tip', text: 'IELTS: nói về khái niệm chung thì **không** dùng the: “**Technology** has changed **education**.”, “**Young people** today…”. Mạo từ là lỗi phổ biến nhất của thí sinh Việt Nam ở tiêu chí Grammatical Accuracy.' },
  ],
  exercises: [
    {
      title: 'A. Chọn a / an / the / — (không mạo từ)',
      instruction: 'Chọn đáp án đúng. “—” = không cần mạo từ.',
      items: [
        { t: 'mcq', q: 'She is ___ university student.', o: ['a', 'an', 'the'], a: 0 },
        { t: 'mcq', q: 'I waited for ___ hour.', o: ['a', 'an', '—'], a: 1 },
        { t: 'mcq', q: '___ sun rises in the east.', o: ['A', 'The', '—'], a: 1 },
        { t: 'mcq', q: 'I love ___ chocolate.', o: ['a', 'the', '—'], a: 2 },
        { t: 'mcq', q: 'Can you play ___ guitar?', o: ['a', 'the', '—'], a: 1 },
        { t: 'mcq', q: 'We play ___ badminton every weekend.', o: ['a', 'the', '—'], a: 2 },
        { t: 'mcq', q: 'The Mekong is ___ longest river in Southeast Asia.', o: ['a', 'the', '—'], a: 1 },
        { t: 'mcq', q: 'He lives in ___ Vietnam.', o: ['a', 'the', '—'], a: 2 },
        { t: 'mcq', q: 'She’s visiting ___ USA next summer.', o: ['a', 'the', '—'], a: 1 },
        { t: 'mcq', q: 'I bought a bag and a hat. ___ bag was cheap.', o: ['A', 'The', '—'], a: 1 },
        { t: 'mcq', q: 'My brother wants to be ___ engineer.', o: ['a', 'an', 'the'], a: 1 },
        { t: 'mcq', q: 'I usually go to ___ bed at 11.', o: ['a', 'the', '—'], a: 2 },
      ],
    },
    {
      title: 'B. Điền mạo từ',
      instruction: 'Điền a, an, the. Nếu không cần mạo từ, viết “-”.',
      items: [
        { t: 'gap', q: 'Is there ___ bank near here?', a: ['a'] },
        { t: 'gap', q: 'He’s ___ honest man.', a: ['an'] },
        { t: 'gap', q: 'We need to protect ___ environment.', a: ['the'] },
        { t: 'gap', q: '___ money can’t buy happiness.', a: ['-', '—'] },
        { t: 'gap', q: 'My favourite subject is ___ history.', a: ['-', '—'] },
        { t: 'gap', q: 'I heard it on ___ radio.', a: ['the'] },
        { t: 'gap', q: 'What do you do in ___ evening?', a: ['the'] },
        { t: 'gap', q: 'My birthday is in ___ May.', a: ['-', '—'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'I am student at Hanoi University.', a: ['I am a student at Hanoi University.', "I'm a student at Hanoi University."] },
        { t: 'fix', q: 'The life in big cities is stressful.', a: ['Life in big cities is stressful.'] },
        { t: 'fix', q: 'She plays the tennis very well.', a: ['She plays tennis very well.'] },
        { t: 'fix', q: 'He is a European and he speaks the English.', a: ['He is a European and he speaks English.'] },
        { t: 'fix', q: 'Can you close a door, please?', a: ['Can you close the door, please?'] },
        { t: 'fix', q: 'It was a amazing experience.', a: ['It was an amazing experience.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý dùng đúng mạo từ.',
      items: [
        { t: 'tr', vi: 'Tôi là sinh viên năm hai và chị tôi là kỹ sư.', ref: "I'm a second-year student and my sister is an engineer.", focus: 'a/an + jobs' },
        { t: 'tr', vi: 'Công nghệ đã thay đổi cách chúng ta học tập.', ref: 'Technology has changed the way we learn.', focus: 'zero article for general ideas' },
        { t: 'tr', vi: 'Tôi đã mua một chiếc điện thoại mới. Chiếc điện thoại rất đắt.', ref: 'I bought a new phone. The phone was very expensive.', focus: 'a → the (second mention)' },
        { t: 'tr', vi: 'Em gái tôi học chơi piano vào buổi tối.', ref: 'My sister learns to play the piano in the evening.', focus: 'the + instruments, in the evening' },
        { t: 'tr', vi: 'Sông Hồng chảy qua Hà Nội.', ref: 'The Red River flows through Hanoi.', focus: 'the + rivers, no article + cities' },
        { t: 'tr', vi: 'Trẻ em ngày nay dành quá nhiều thời gian xem TV.', ref: 'Children today spend too much time watching TV.', focus: 'general plural, on TV' },
      ],
    },
  ],
};
