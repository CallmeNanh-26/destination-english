// Unit 34 – Grammar: Direct and indirect objects (Destination B1).
export default {
  id: 'b1-u34',
  book: 'b1',
  no: 34,
  title: 'Direct and indirect objects',
  titleVi: 'Tân ngữ trực tiếp và gián tiếp',
  blocks: [
    { type: 'h', text: 'Động từ không cần tân ngữ (nội động từ)' },
    { type: 'p', text: 'Cấu trúc: **S + V**\n**The flowers** grew. / **The dog** got up.\nVí dụ: fall down, get up, grow, happen, laugh, run away, sit down, sleep, speak, stand up, walk, work.' },
    { type: 'warn', text: '✗ It happened me. → ✓ It happened **to** me.\n✗ Our rabbit ran away the garden. → ✓ Our rabbit ran away **from** the garden.' },

    { type: 'h', text: 'Động từ có một tân ngữ' },
    { type: 'p', text: 'Cấu trúc: **S + V + O**\nWe picked up **the rubbish**. / I’ve planted **a tree**.\nVí dụ: borrow, close, draw, drink, drive, eat, have, invite, open, paint, pick up, plant.' },

    { type: 'h', text: 'Động từ có hai tân ngữ' },
    { type: 'p', text: '**Tân ngữ trực tiếp** (direct object) = vật được trao/làm.\n**Tân ngữ gián tiếp** (indirect object) = người nhận (thường là người).\nSimon gave **Jill** (gián tiếp) **some flowers** (trực tiếp).' },
    { type: 'table', head: ['Cấu trúc', 'Ví dụ'], rows: [
      ['S + V + **người** + **vật**', 'Simon gave **Jill some flowers**.'],
      ['S + V + **vật** + **to/for** + **người**', 'Simon gave **some flowers to Jill**.'],
    ] },
    { type: 'p', text: 'Động từ thường gặp: bring, buy, cost, get, give, lend, make, offer, owe, pass, pay, read, send, show, sing, take, teach, tell, throw, write.' },

    { type: 'h', text: 'to hay for?' },
    { type: 'table', head: ['Giới từ', 'Ý nghĩa', 'Động từ', 'Ví dụ'], rows: [
      ['**to**', 'chuyển vật đến người nhận', 'give, lend, pass, pay, send, show, teach, tell, throw, write, offer, owe, take, bring, read, sell', 'I gave the umbrella **to** George.'],
      ['**for**', 'làm/lấy giúp ai, vì ai', 'buy, get, make, cook, find, book, save', 'I bought an umbrella **for** George.'],
    ] },
    { type: 'tip', text: 'Một số động từ có thể ở **bị động** với cả hai tân ngữ:\n**Jill** was given some flowers. (phổ biến hơn)\n**Some flowers** were given to Jill.' },
    { type: 'warn', text: '• **Không dùng giới từ** khi người đứng **trước** vật:\n✗ Simon gave **to** Jill some flowers. → ✓ Simon gave Jill some flowers.\n• **cost** không dùng to: ✗ It cost **to** me 15 euros → ✓ It cost **me** 15 euros.\n• **explain, describe, suggest, say** chỉ dùng mẫu vật + to + người:\n✗ Explain me the rule → ✓ Explain **the rule to me**.\n• Khi tân ngữ trực tiếp là **đại từ (it, them)**, đặt nó trước: Give **it to me**. (✗ Give me it – ít tự nhiên)' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ Can you explain me this word? → ✓ Can you explain **this word to me**?',
      '✗ He bought to me a book → ✓ He bought **me a book** / bought a book **for me**.',
      '✗ She told to me the answer → ✓ She told **me** the answer.',
      '✗ I said him the truth → ✓ I **told** him the truth / I said the truth **to** him.',
    ] },
    { type: 'tip', text: 'IELTS: mẫu “give sb sth” giúp câu gọn và tự nhiên:\n“Living abroad **gave me the chance** to become more independent.”\n“Technology **offers students access to** a huge amount of information.”\n“The internet **has brought us many benefits**.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn câu đúng',
      instruction: 'Chọn câu đúng ngữ pháp.',
      items: [
        { t: 'mcq', q: 'Chọn câu đúng:', o: ['My mum often makes soup for the old lady next door.', 'My mum often makes for the old lady next door some soup.'], a: 0 },
        { t: 'mcq', q: 'Chọn câu đúng:', o: ['I won’t tell to anyone your secret.', 'I won’t tell anyone your secret.'], a: 1 },
        { t: 'mcq', q: 'Chọn câu đúng:', o: ['That CD cost to me fifteen euros.', 'That CD cost me fifteen euros.'], a: 1 },
        { t: 'mcq', q: 'Chọn câu đúng:', o: ['Dan showed me his autograph book.', 'Dan showed to me his autograph book.'], a: 0 },
        { t: 'mcq', q: 'Chọn câu đúng:', o: ['Can you explain me this grammar?', 'Can you explain this grammar to me?'], a: 1 },
        { t: 'mcq', q: 'I’ve made some sandwiches ___ you.', o: ['to', 'for', '—'], a: 1 },
        { t: 'mcq', q: 'I paid the money ___ the shop assistant.', o: ['to', 'for', '—'], a: 0 },
        { t: 'mcq', q: 'We’ll bring ___ you that DVD tonight.', o: ['to', 'for', '— (không cần từ)'], a: 2 },
      ],
    },
    {
      title: 'B. Điền to / for (hoặc – nếu không cần)',
      instruction: 'Điền to, for hoặc dấu – nếu không cần từ nào.',
      items: [
        { t: 'gap', q: 'My mum is going to write a letter ___ the editor.', a: ['to'] },
        { t: 'gap', q: 'Let’s get a birthday card ___ your dad.', a: ['for'] },
        { t: 'gap', q: 'I’m not going to tell ___ you the answer!', a: ['-', '–', '—'] },
        { t: 'gap', q: 'Tony has bought a book ___ Jake.', a: ['for'] },
        { t: 'gap', q: 'A prize was given ___ the best student.', a: ['to'] },
        { t: 'gap', q: 'Could you lend your bike ___ me?', a: ['to'] },
        { t: 'gap', q: 'She cooked a delicious dinner ___ all of us.', a: ['for'] },
      ],
    },
    {
      title: 'C. Đưa tân ngữ trực tiếp ra cuối',
      instruction: 'Viết lại câu: người + vật (bỏ to/for).',
      items: [
        { t: 'fix', q: 'I owe ten euros to Danny.', a: ['I owe Danny ten euros.'] },
        { t: 'fix', q: 'Susan hasn’t bought a birthday present for her mum yet.', a: ["Susan hasn't bought her mum a birthday present yet.", 'Susan has not bought her mum a birthday present yet.', 'Susan hasn’t bought her mum a birthday present yet.'] },
        { t: 'fix', q: 'You should show your new guitar to Mike.', a: ['You should show Mike your new guitar.'] },
        { t: 'fix', q: 'Did you give that CD to Liz?', a: ['Did you give Liz that CD?'] },
        { t: 'fix', q: 'I’d like to teach English to young teenagers.', a: ["I'd like to teach young teenagers English.", 'I would like to teach young teenagers English.', 'I’d like to teach young teenagers English.'] },
      ],
    },
    {
      title: 'D. Đưa tân ngữ gián tiếp ra cuối',
      instruction: 'Viết lại câu: vật + to/for + người.',
      items: [
        { t: 'fix', q: 'Could you pass Ed the potatoes?', a: ['Could you pass the potatoes to Ed?'] },
        { t: 'fix', q: 'Throw the dog that bone!', a: ['Throw that bone to the dog!', 'Throw that bone to the dog.'] },
        { t: 'fix', q: 'Steve sang us his new song.', a: ['Steve sang his new song to us.', 'Steve sang his new song for us.'] },
        { t: 'fix', q: 'I’ll lend Doug the money.', a: ["I'll lend the money to Doug.", 'I will lend the money to Doug.', 'I’ll lend the money to Doug.'] },
        { t: 'fix', q: 'I’ve never told my mum a lie.', a: ["I've never told a lie to my mum.", 'I have never told a lie to my mum.', 'I’ve never told a lie to my mum.'] },
      ],
    },
    {
      title: 'E. Tìm từ thừa',
      instruction: 'Mỗi câu có một từ thừa. Viết lại câu đúng.',
      items: [
        { t: 'fix', q: 'My aunt recently bought for him a new telescope.', a: ['My aunt recently bought him a new telescope.', 'My aunt recently bought a new telescope for him.'] },
        { t: 'fix', q: 'When he bought it, it cost to him over two hundred euros.', a: ['When he bought it, it cost him over two hundred euros.'] },
        { t: 'fix', q: 'Last weekend, he taught to me the basics.', a: ['Last weekend, he taught me the basics.'] },
        { t: 'fix', q: 'He told to me the names of all the planets.', a: ['He told me the names of all the planets.'] },
      ],
    },
    {
      title: 'F. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý vị trí hai tân ngữ và giới từ to/for.',
      items: [
        { t: 'tr', vi: 'Bạn có thể giải thích từ này cho tôi không?', ref: 'Can you explain this word to me?', focus: 'explain sth to sb' },
        { t: 'tr', vi: 'Bố tôi mua cho tôi một chiếc xe đạp mới vào ngày sinh nhật.', ref: 'My dad bought me a new bike for my birthday.', focus: 'buy sb sth' },
        { t: 'tr', vi: 'Chiếc điện thoại đó tốn của tôi gần mười triệu đồng.', ref: 'That phone cost me nearly ten million dong.', focus: 'cost sb sth' },
        { t: 'tr', vi: 'Cô ấy được tặng một bó hoa sau buổi biểu diễn.', ref: 'She was given a bunch of flowers after the performance.', focus: 'passive with two objects' },
        { t: 'tr', vi: 'Sống ở nước ngoài đã cho tôi cơ hội trở nên độc lập hơn.', ref: 'Living abroad gave me the chance to become more independent.', focus: 'give sb sth (IELTS)' },
        { t: 'tr', vi: 'Làm ơn chuyển cho tôi lọ muối.', ref: 'Please pass me the salt.', focus: 'pass sb sth' },
      ],
    },
  ],
};
