// Unit 10 – Grammar: The passive 1 (present simple, past simple, will) (Destination B1).
export default {
  id: 'b1-u10',
  book: 'b1',
  no: 10,
  title: 'The passive 1',
  titleVi: 'Câu bị động 1 (hiện tại đơn, quá khứ đơn, will)',
  blocks: [
    { type: 'p', text: 'Cấu trúc chung: **be (chia theo thì) + V3 (past participle)**' },
    { type: 'table', head: ['Thì', 'Chủ động', 'Bị động'], rows: [
      ['Hiện tại đơn', 'They always invite Grandma.', 'Grandma **is** always **invited**.'],
      ['Quá khứ đơn', 'They invited Uncle Adrian.', 'Uncle Adrian **was invited**.'],
      ['will', "They will / won't invite the neighbours.", "The neighbours **will / won't be invited**."],
    ] },
    { type: 'table', head: ['Khẳng định', 'Phủ định', 'Nghi vấn'], rows: [
      ['Everyone **is invited**!', "Some people **aren't invited**.", '**Is** everyone **invited**?'],
      ['The bike **was stolen**.', "It **wasn't stolen**.", '**Was** it **stolen**?'],
    ] },

    { type: 'h', text: 'Khi nào dùng bị động?' },
    { type: 'list', items: [
      '**Không biết** ai làm: My sister’s bike **was stolen** yesterday.',
      '**Không cần / không muốn** nói ai làm: **Was** Simon **invited**?',
      'Người làm **hiển nhiên**: The thief **was arrested**. (bởi cảnh sát – không cần nói)',
      'Muốn **nhấn mạnh** sự vật/sự việc hơn người làm (rất phổ biến trong văn viết học thuật, IELTS Writing Task 1 – quy trình).',
    ] },

    { type: 'h', text: 'Cách chuyển câu chủ động → bị động' },
    { type: 'table', head: ['Bước', 'Ví dụ: Someone **stole** **my sister’s bike** yesterday.'], rows: [
      ['1. Tân ngữ của câu chủ động → chủ ngữ mới', '**My sister’s bike** …'],
      ['2. Thêm **be** cùng thì với động từ gốc (stole → quá khứ → was)', 'My sister’s bike **was** …'],
      ['3. Thêm **V3** của động từ (steal → stolen)', 'My sister’s bike was **stolen** …'],
      ['4. Hoàn thành phần còn lại', 'My sister’s bike was stolen **yesterday**.'],
    ] },
    { type: 'warn', text: 'Phrasal verb khi chuyển sang bị động vẫn **giữ nguyên tiểu từ**:\nThey **picked up** the broken glass. → The broken glass was **picked up**.\nĐộng từ bất quy tắc: nhớ dùng **V3** (steal → **stolen**, write → **written**, build → **built**).' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Thiếu “be”: ✗ The house built in 1990. → ✓ The house **was built** in 1990.',
      'Dùng V2 thay V3: ✗ It was wrote → ✓ It was **written**.',
      'Bị động với nội động từ (không có tân ngữ): ✗ The accident was happened. → ✓ The accident **happened**.',
      'Lạm dụng bị động trong văn nói khiến câu cứng nhắc – chỉ dùng khi phù hợp.',
    ] },
    { type: 'tip', text: 'IELTS Writing Task 1 (quy trình) gần như bắt buộc dùng bị động: “First, the tea leaves **are picked** by hand. They **are** then **dried** and **sorted**…”\nSpeaking: “My hometown **is known** for its seafood.” / “The bridge **was built** about 20 years ago.”' },
  ],
  exercises: [
    {
      title: 'A. Chủ động hay bị động?',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'English ___ all over the world.', o: ['speaks', 'is spoken', 'was spoken'], a: 1 },
        { t: 'mcq', q: 'The Mona Lisa ___ by Leonardo da Vinci.', o: ['painted', 'was painted', 'is painting'], a: 1 },
        { t: 'mcq', q: 'The results ___ next week.', o: ['will announce', 'will be announced', 'are announcing'], a: 1 },
        { t: 'mcq', q: 'The accident ___ at 9 p.m.', o: ['happened', 'was happened', 'is happened'], a: 0, ex: 'happen là nội động từ, không dùng bị động.' },
        { t: 'mcq', q: 'My phone ___ last night!', o: ['stole', 'was stolen', 'is stolen'], a: 1 },
        { t: 'mcq', q: 'Rice ___ in many parts of Asia.', o: ['grows', 'is grown', 'was grow'], a: 1 },
        { t: 'mcq', q: '___ the letters sent yesterday?', o: ['Did', 'Were', 'Was'], a: 1 },
        { t: 'mcq', q: 'The new bridge ___ next year.', o: ["won't finish", "won't be finished", "isn't finished"], a: 1 },
        { t: 'mcq', q: 'Our teacher ___ us a lot of homework every day.', o: ['gives', 'is given', 'was given'], a: 0 },
        { t: 'mcq', q: 'The rubbish ___ every Monday.', o: ['collects', 'is collected', 'collected'], a: 1 },
      ],
    },
    {
      title: 'B. Chia động từ ở dạng bị động',
      instruction: 'Dùng bị động: hiện tại đơn, quá khứ đơn hoặc will.',
      items: [
        { t: 'gap', q: 'This temple ___ (build) in the 11th century.', a: ['was built'] },
        { t: 'gap', q: 'Breakfast ___ (serve) from 6 to 10 every morning.', a: ['is served'] },
        { t: 'gap', q: 'The winners ___ (announce) tomorrow.', a: ['will be announced'] },
        { t: 'gap', q: 'These shoes ___ (make) in Vietnam.', a: ['are made'] },
        { t: 'gap', q: 'The thief ___ (catch) by the police last night.', a: ['was caught'] },
        { t: 'gap', q: 'The concert ___ (not/cancel) – it’s still on!', a: ["wasn't cancelled", 'was not cancelled', "hasn't been cancelled"] },
        { t: 'gap', q: '"Harry Potter" ___ (write) by J.K. Rowling.', a: ['was written'] },
        { t: 'gap', q: 'You ___ (pick up) at the airport by our driver.', a: ['will be picked up'] },
      ],
    },
    {
      title: 'C. Viết lại câu ở dạng bị động',
      instruction: 'Viết lại cả câu, bỏ “by + người” nếu không cần thiết.',
      items: [
        { t: 'fix', q: 'Someone cleans the classrooms every evening.', a: ['The classrooms are cleaned every evening.'] },
        { t: 'fix', q: 'They built this hotel in 2010.', a: ['This hotel was built in 2010.'] },
        { t: 'fix', q: 'They will open the new airport next year.', a: ['The new airport will be opened next year.'] },
        { t: 'fix', q: 'Somebody stole my wallet.', a: ['My wallet was stolen.'] },
        { t: 'fix', q: 'People speak French in Canada.', a: ['French is spoken in Canada.'] },
        { t: 'fix', q: 'They picked up the rubbish after the festival.', a: ['The rubbish was picked up after the festival.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng câu bị động.',
      items: [
        { t: 'tr', vi: 'Chùa Một Cột được xây dựng vào năm 1049.', ref: 'The One Pillar Pagoda was built in 1049.', focus: 'passive – past simple' },
        { t: 'tr', vi: 'Xe đạp của tôi bị đánh cắp tối qua.', ref: 'My bike was stolen last night.', focus: 'passive – unknown agent' },
        { t: 'tr', vi: 'Quê tôi nổi tiếng với phở và cà phê.', ref: 'My hometown is known for pho and coffee.', focus: 'be known for' },
        { t: 'tr', vi: 'Kết quả kỳ thi sẽ được công bố vào thứ Hai tới.', ref: 'The exam results will be announced next Monday.', focus: 'passive – will' },
        { t: 'tr', vi: 'Cà phê được trồng chủ yếu ở Tây Nguyên.', ref: 'Coffee is grown mainly in the Central Highlands.', focus: 'passive – present simple' },
        { t: 'tr', vi: 'Bạn có được mời đến đám cưới của cô ấy không?', ref: 'Were you invited to her wedding?', focus: 'passive question' },
      ],
    },
  ],
};
