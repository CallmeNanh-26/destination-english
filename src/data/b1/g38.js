// Unit 38 – Grammar: Both, either, neither, so, nor (Destination B1).
export default {
  id: 'b1-u38',
  book: 'b1',
  no: 38,
  title: 'Both, either, neither, so, nor',
  titleVi: 'Both, either, neither, so, nor',
  blocks: [
    { type: 'h', text: 'both … and (cả … và …)' },
    { type: 'p', text: 'Nhấn mạnh **cả hai** điều đều đúng.\n**both** + danh từ + **and** + danh từ / **both** + tính từ + **and** + tính từ\n**Both** Adam **and** Vicky said Colin was very kind.\nSimon is **both** rude **and** unkind.\nJack and Jill **both** know lots of jokes. (both đứng sau chủ ngữ, trước động từ thường)\nMy sister and I were **both** shocked. (both đứng sau to be)' },
    { type: 'tip', text: 'Dùng **both of** trước **đại từ** (us, them, you) – bắt buộc:\nI’ve had an argument with **both of them**. (✗ both them)\nTrước danh từ có the/my…, of có thể có hoặc không: **both (of) my parents**.' },

    { type: 'h', text: 'either … or (hoặc … hoặc …)' },
    { type: 'p', text: 'Nói về **lựa chọn** giữa hai thứ.\nI’ll buy a card with **either** a puppy **or** a kitten on it.\nHe’ll be **either** happy **or** shocked!\nYou can **either** tell him how you feel **or** hope he notices.' },
    { type: 'tip', text: '**either of** + đại từ: I really like Robert and Martin – I’ll go out with **either of them**!\nTrong câu phủ định: I don’t like **either** of them. (= tôi không thích cả hai)' },

    { type: 'h', text: 'neither … nor (không … cũng không …)' },
    { type: 'p', text: 'Nhấn mạnh **cả hai** điều **phủ định** đều đúng. Động từ ở dạng **khẳng định**!\nI’ve got **neither** the time **nor** the energy to take up a new hobby.\nWhat you said was **neither** true **nor** fair.' },
    { type: 'tip', text: '**Neither of** + đại từ/danh từ số nhiều: **Neither of us** found Jason’s joke funny.' },
    { type: 'warn', text: '• Không dùng hai phủ định: ✗ I **don’t** like **neither** tea nor coffee. → ✓ I like **neither** tea **nor** coffee. / I **don’t** like **either** tea **or** coffee.\n• Khi neither … nor / either … or nối hai chủ ngữ, động từ chia theo **chủ ngữ gần nhất**: Neither my brother nor my parents **are** at home.' },

    { type: 'h', text: 'so / nor (… cũng vậy)' },
    { type: 'table', head: ['Cấu trúc', 'Dùng khi', 'Ví dụ'], rows: [
      ['**so** + trợ động từ + S', 'thêm ý cho câu **khẳng định**', 'Lisa is really unkind, and **so is** Angela.\nYou’re good at listening, and **so am I**.'],
      ['**nor / neither** + trợ động từ + S', 'thêm ý cho câu **phủ định**', 'My brother hasn’t been invited, and **nor has** his friend.\nTom wouldn’t forgive her, and **nor would I**.'],
    ] },
    { type: 'p', text: 'Trợ động từ phải **khớp thì** với câu trước: be → am/is/are/was; thì đơn → do/does/did; hoàn thành → have/has/had; modal → can/will/would…\nDùng một mình trong hội thoại:\n‘I like Hannah’s sense of humour.’ – ‘**So do I**.’\n‘I don’t find Mark funny.’ – ‘**Nor do I**.’ / ‘**Neither do I**.’' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ ‘I love pho.’ – ‘Me too, I do.’ / ‘So I do.’ → ✓ **So do I.** (đảo trợ động từ lên trước)',
      '✗ ‘I can’t swim.’ – ‘So can’t I.’ → ✓ **Nor/Neither can I.**',
      '✗ ‘I went to Da Lat.’ – ‘So do I.’ → ✓ **So did I.** (khớp thì)',
      '✗ Both of my brother → ✓ **Both of my brothers** (số nhiều).',
    ] },
    { type: 'tip', text: 'IELTS Speaking & Writing:\n“Online learning is **both** flexible **and** affordable.”\n“Students can **either** study at home **or** attend classes in person.”\n“**Neither** the government **nor** individuals can solve this problem alone.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: '___ Adam and Vicky said Colin was very kind.', o: ['Both', 'Either', 'Neither'], a: 0 },
        { t: 'mcq', q: 'I’ll buy a card with ___ a puppy or a kitten on it.', o: ['both', 'either', 'neither'], a: 1 },
        { t: 'mcq', q: 'What you said was neither true ___ fair.', o: ['or', 'nor', 'and'], a: 1 },
        { t: 'mcq', q: '___ of us found Jason’s joke funny. (không ai trong chúng tôi)', o: ['Both', 'Either', 'Neither'], a: 2 },
        { t: 'mcq', q: 'I’ve had an argument with both ___.', o: ['them', 'of them', 'they'], a: 1 },
        { t: 'mcq', q: '‘I like Hannah’s sense of humour.’ – ‘So ___ I.’', o: ['am', 'do', 'like'], a: 1 },
        { t: 'mcq', q: '‘I don’t find Mark funny.’ – ‘___ do I.’', o: ['So', 'Nor', 'Either'], a: 1 },
        { t: 'mcq', q: 'You’re good at listening to people, and so ___ I.', o: ['am', 'do', 'are'], a: 0 },
        { t: 'mcq', q: 'Simon is both rude ___ unkind.', o: ['or', 'nor', 'and'], a: 2 },
      ],
    },
    {
      title: 'B. so / nor + trợ động từ',
      instruction: 'Điền trợ động từ phù hợp.',
      items: [
        { t: 'gap', q: 'Lisa is really unkind, and so ___ Angela.', a: ['is'] },
        { t: 'gap', q: 'My brother hasn’t been invited, and nor ___ his friend.', a: ['has'] },
        { t: 'gap', q: 'Tom wouldn’t forgive her, and nor ___ I.', a: ['would'] },
        { t: 'gap', q: '‘I went to the concert last night.’ – ‘So ___ I.’', a: ['did'] },
        { t: 'gap', q: '‘I can’t swim.’ – ‘Nor ___ I.’', a: ['can'] },
        { t: 'gap', q: '‘I’ve never been to Japan.’ – ‘Neither ___ I.’', a: ['have'] },
        { t: 'gap', q: '‘I’m going to the party.’ – ‘So ___ I.’', a: ['am'] },
        { t: 'gap', q: 'My sister loves horror films, and so ___ my mum.', a: ['does'] },
      ],
    },
    {
      title: 'C. Nối câu',
      instruction: 'Viết lại câu dùng từ trong ngoặc.',
      items: [
        { t: 'fix', q: 'Adam is funny. Vicky is funny too. (both … and)', a: ['Both Adam and Vicky are funny.'] },
        { t: 'fix', q: 'I haven’t got the time. I haven’t got the energy. (neither … nor)', a: ["I've got neither the time nor the energy.", 'I have got neither the time nor the energy.', 'I have neither the time nor the energy.', 'I’ve got neither the time nor the energy.'] },
        { t: 'fix', q: 'We can go to the cinema, or we can stay at home. (either … or)', a: ['We can either go to the cinema or stay at home.', 'Either we can go to the cinema or we can stay at home.'] },
        { t: 'fix', q: 'Tom didn’t laugh. Jenny didn’t laugh. (Neither … nor)', a: ['Neither Tom nor Jenny laughed.'] },
        { t: 'fix', q: 'I like reading. My brother likes reading too. (so)', a: ['I like reading, and so does my brother.', 'I like reading and so does my brother.'] },
        { t: 'fix', q: 'I don’t like either tea or coffee. (neither … nor)', a: ['I like neither tea nor coffee.'] },
      ],
    },
    {
      title: 'D. Sửa lỗi sai',
      instruction: 'Mỗi câu có một lỗi. Viết lại câu đúng.',
      items: [
        { t: 'fix', q: '‘I can’t drive.’ – ‘So can’t I.’', a: ['Nor can I.', 'Neither can I.', "'I can't drive.' – 'Nor can I.'"] },
        { t: 'fix', q: 'I don’t like neither of them.', a: ["I don't like either of them.", 'I like neither of them.', 'I do not like either of them.'] },
        { t: 'fix', q: 'Both my parents is teachers.', a: ['Both my parents are teachers.', 'Both of my parents are teachers.'] },
        { t: 'fix', q: '‘I watched the match.’ – ‘So do I.’', a: ['So did I.'] },
      ],
    },
    {
      title: 'E. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng both/either/neither/so/nor.',
      items: [
        { t: 'tr', vi: 'Học trực tuyến vừa linh hoạt vừa tiết kiệm.', ref: 'Online learning is both flexible and affordable.', focus: 'both … and (IELTS)' },
        { t: 'tr', vi: 'Bạn có thể đi bằng xe buýt hoặc bằng tàu.', ref: 'You can go either by bus or by train.', focus: 'either … or' },
        { t: 'tr', vi: 'Cả chính phủ lẫn cá nhân đều không thể tự mình giải quyết vấn đề này.', ref: 'Neither the government nor individuals can solve this problem alone.', focus: 'neither … nor (IELTS Writing)' },
        { t: 'tr', vi: '“Tôi không thích đồ ăn cay.” – “Tôi cũng không.”', ref: '"I don\'t like spicy food." – "Nor do I."', focus: 'Nor do I' },
        { t: 'tr', vi: 'Cả hai người họ đều nói tiếng Anh rất giỏi.', ref: 'Both of them speak English very well.', focus: 'both of them' },
        { t: 'tr', vi: 'Anh trai tôi đã từng đến Nhật, và tôi cũng vậy.', ref: 'My brother has been to Japan, and so have I.', focus: 'so have I' },
      ],
    },
  ],
};
