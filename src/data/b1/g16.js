// Unit 16 – Grammar: Pronouns and possessive determiners (Destination B1).
export default {
  id: 'b1-u16',
  book: 'b1',
  no: 16,
  title: 'Pronouns and possessive determiners',
  titleVi: 'Đại từ và tính từ sở hữu',
  blocks: [
    { type: 'table', head: ['Đại từ chủ ngữ', 'Đại từ tân ngữ', 'Tính từ sở hữu', 'Đại từ sở hữu', 'Đại từ phản thân'], rows: [
      ['I', 'me', 'my', 'mine', 'myself'],
      ['you', 'you', 'your', 'yours', 'yourself / yourselves'],
      ['he', 'him', 'his', 'his', 'himself'],
      ['she', 'her', 'her', 'hers', 'herself'],
      ['it', 'it', 'its', '—', 'itself'],
      ['we', 'us', 'our', 'ours', 'ourselves'],
      ['they', 'them', 'their', 'theirs', 'themselves'],
    ] },

    { type: 'h', text: '1. Đại từ chủ ngữ & tân ngữ' },
    { type: 'p', text: '**Chủ ngữ** đứng trước động từ: **They** built the first aeroplane.\n**Tân ngữ** đứng sau động từ hoặc giới từ: Could you give **me** that equipment? / Could you give that equipment to **me**?' },

    { type: 'h', text: '2. Tính từ sở hữu (possessive determiners)' },
    { type: 'p', text: 'Luôn đứng **trước danh từ**: That’s **their** car. / Is this **my** coffee?' },
    { type: 'warn', text: '**its** ≠ **it’s**\nHere’s the dog’s water and here’s **its** food. (= của nó)\n**It’s** the best camera I’ve ever had. (= It is)' },

    { type: 'h', text: '3. Đại từ sở hữu (possessive pronouns)' },
    { type: 'p', text: '**Không** đi kèm danh từ – thay thế cho “tính từ sở hữu + danh từ”:\nThat car is **ours**. (= our car) ✗ This is hers car.\nKhông có đại từ sở hữu cho **it**.' },
    { type: 'tip', text: '“a friend of **mine**” = một người bạn của tôi (✗ a friend of me).' },

    { type: 'h', text: '4. Đại từ phản thân (reflexive pronouns)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Chủ ngữ và tân ngữ là **cùng một người/vật**', 'My computer turns **itself** off after half an hour. / Did you hurt **yourself**?'],
      ['**Nhấn mạnh** tự mình làm', 'Nobody helped me. I did it **myself**!'],
      ['**by + reflexive** = một mình', 'She lives **by herself**.'],
    ] },
    { type: 'warn', text: 'Một số động từ **không** dùng phản thân trong tiếng Anh (khác tiếng Việt/ngôn ngữ khác): ✗ I relaxed myself → ✓ I **relaxed**; ✗ concentrate myself, feel myself, meet myself.\n**each other** (lẫn nhau) ≠ **themselves**: They looked at **each other**. (A nhìn B, B nhìn A) / They looked at **themselves** in the mirror.' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Nhầm he/she (tiếng Việt nói “bạn ấy”, “nó”): ✗ My mother… he → ✓ she. Rất hay gặp khi nói nhanh trong IELTS Speaking!',
      'Thiếu tân ngữ: ✗ I like it very much the movie. → ✓ I like the movie very much.',
      '✗ Me and my friend went… (văn trang trọng) → ✓ My friend and I went…',
      '✗ it’s colour → ✓ **its** colour.',
    ] },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đại từ / tính từ sở hữu đúng.',
      items: [
        { t: 'mcq', q: 'This isn’t my bag. It’s ___.', o: ['her', 'hers', 'she'], a: 1 },
        { t: 'mcq', q: 'The company changed ___ logo last year.', o: ['its', "it's", 'their'], a: 0 },
        { t: 'mcq', q: 'Can you help ___ with my homework?', o: ['I', 'me', 'my'], a: 1 },
        { t: 'mcq', q: 'Be careful! You’ll cut ___.', o: ['you', 'yourself', 'your'], a: 1 },
        { t: 'mcq', q: 'My brother and ___ are going to the cinema.', o: ['me', 'I', 'my'], a: 1 },
        { t: 'mcq', q: 'Is this book ___ or mine?', o: ['your', 'yours', 'you'], a: 1 },
        { t: 'mcq', q: 'They built the house ___ – without any help.', o: ['themselves', 'theirselves', 'them'], a: 0 },
        { t: 'mcq', q: 'She’s a friend of ___.', o: ['me', 'my', 'mine'], a: 2 },
        { t: 'mcq', q: '___ raining again!', o: ['Its', "It's", 'It'], a: 1 },
        { t: 'mcq', q: 'Lan and Mai text ___ every day.', o: ['themselves', 'each other', 'them'], a: 1 },
      ],
    },
    {
      title: 'B. Điền đại từ',
      instruction: 'Điền đại từ / tính từ sở hữu phù hợp.',
      items: [
        { t: 'gap', q: 'My sister loves ___ new job. (của cô ấy)', a: ['her'] },
        { t: 'gap', q: 'We painted the room ___. (tự chúng tôi)', a: ['ourselves'] },
        { t: 'gap', q: 'That isn’t their car. ___ is the red one. (của họ)', a: ['Theirs'] },
        { t: 'gap', q: 'Please give the keys to ___. (chúng tôi)', a: ['us'] },
        { t: 'gap', q: 'The cat is licking ___ paws. (của nó)', a: ['its'] },
        { t: 'gap', q: 'Did you enjoy ___ at the party? (bản thân bạn)', a: ['yourself', 'yourselves'] },
        { t: 'gap', q: 'Thanh lives by ___. (bản thân anh ấy)', a: ['himself'] },
        { t: 'gap', q: 'Is this phone ___? (của bạn)', a: ['yours'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'My mother is a teacher. He works at a primary school.', a: ['My mother is a teacher. She works at a primary school.'] },
        { t: 'fix', q: 'This is hers bike.', a: ['This is her bike.', 'This bike is hers.'] },
        { t: 'fix', q: 'The dog wagged it’s tail.', a: ['The dog wagged its tail.'] },
        { t: 'fix', q: 'I relaxed myself on the beach.', a: ['I relaxed on the beach.'] },
        { t: 'fix', q: 'He is a close friend of me.', a: ['He is a close friend of mine.'] },
        { t: 'fix', q: 'They taught theirselves to cook.', a: ['They taught themselves to cook.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý đại từ và tính từ sở hữu.',
      items: [
        { t: 'tr', vi: 'Mẹ tôi tự học tiếng Anh khi bà ấy 50 tuổi.', ref: 'My mother taught herself English when she was 50.', focus: 'reflexive, she/her' },
        { t: 'tr', vi: 'Chiếc xe màu đỏ là của chúng tôi, không phải của họ.', ref: 'The red car is ours, not theirs.', focus: 'possessive pronouns' },
        { t: 'tr', vi: 'Công ty đó vừa thay đổi logo của mình.', ref: 'That company has just changed its logo.', focus: 'its' },
        { t: 'tr', vi: 'Anh ấy là một người bạn cũ của tôi.', ref: 'He is an old friend of mine.', focus: 'a friend of mine' },
        { t: 'tr', vi: 'Họ giúp đỡ lẫn nhau rất nhiều.', ref: 'They help each other a lot.', focus: 'each other' },
        { t: 'tr', vi: 'Tôi và em trai đã tự sửa chiếc xe đạp.', ref: 'My brother and I fixed the bike ourselves.', focus: 'X and I, ourselves' },
      ],
    },
  ],
};
