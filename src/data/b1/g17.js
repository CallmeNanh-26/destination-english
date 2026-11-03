// Unit 17 – Grammar: Relative clauses (Destination B1).
export default {
  id: 'b1-u17',
  book: 'b1',
  no: 17,
  title: 'Relative clauses',
  titleVi: 'Mệnh đề quan hệ',
  blocks: [
    { type: 'p', text: 'Mệnh đề quan hệ giúp **bổ sung thông tin** cho danh từ mà không cần tách thành câu mới.\nThat man over there is called Bill Gates. He started Microsoft.\n→ That man over there, **who**’s called Bill Gates, started Microsoft.' },
    { type: 'h', text: '1. Đại từ quan hệ' },
    { type: 'table', head: ['Đại từ', 'Dùng cho', 'Ví dụ'], rows: [
      ['**who**', 'người', "What's the name of the man **who** created the Internet?"],
      ['**which**', 'vật, con vật', 'The experiment **which** worked was the last one.'],
      ['**that**', 'người hoặc vật (chỉ trong mệnh đề xác định)', 'Did you see the programme about the woman **that** invented Tippex?'],
      ['**where**', 'nơi chốn', 'This is the town **where** Albert Einstein was born.'],
      ['**whose**', 'sở hữu (của người/vật)', "That's the man **whose** sister discovered a new planet."],
      ['**when**', 'thời gian', 'I remember the day **when** we first met.'],
    ] },
    { type: 'warn', text: '• Có thể dùng **who** cho con vật khi coi nó như có cá tính: Our dog, **who**’s called Benji, is eight.\n• **Không lặp lại** chủ ngữ/tân ngữ sau đại từ quan hệ:\n✗ the man who **he** created the World Wide Web\n✗ the experiment which I’m doing **it** at the moment' },

    { type: 'h', text: '2. Mệnh đề quan hệ xác định (defining)' },
    { type: 'p', text: 'Cho biết **chính xác người/vật nào** đang được nói đến. Bỏ đi thì câu không đủ nghĩa.\nThe person **who is wearing the blue shirt** started Microsoft.\nThis is the TV **which works**. This is the TV **which doesn’t work**.' },
    { type: 'list', items: [
      '**Không** dùng dấu phẩy.',
      'Có thể dùng **that** thay cho who/which.',
      'Có thể **bỏ** who/which/that khi nó là **tân ngữ**: The book (**that**) I bought is great. (I là chủ ngữ của mệnh đề → bỏ được)',
    ] },

    { type: 'h', text: '3. Mệnh đề quan hệ không xác định (non-defining)' },
    { type: 'p', text: 'Thêm **thông tin phụ**. Bỏ đi câu vẫn đủ nghĩa.\nThis program, **which is totally free**, protects your computer against viruses.\nCarl, **whose sister is famous**, is a friend of mine.' },
    { type: 'list', items: [
      '**Phải** có dấu phẩy.',
      '**Không** dùng **that**.',
      '**Không** được bỏ đại từ quan hệ.',
      '**which** có thể thay cho **cả mệnh đề** trước: He passed the exam, **which** surprised everyone.',
    ] },
    { type: 'tip', text: 'Tên riêng, hoặc danh từ đã rõ là ai/cái gì (my mother, Hanoi) → luôn dùng mệnh đề **không xác định** có dấu phẩy:\nMy mother, **who** is a nurse, works nights. (✗ My mother that is a nurse…)' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Thừa đại từ: ✗ The girl who she sits next to me… → ✓ The girl who sits next to me…',
      'Dùng which cho người: ✗ the teacher which… → ✓ the teacher **who**…',
      'Dùng that sau dấu phẩy: ✗ Hanoi, that is the capital… → ✓ Hanoi, **which** is the capital…',
      'Nhầm where/which: ✗ the city which I was born → ✓ the city **where** I was born / the city **which** I was born **in**.',
    ] },
    { type: 'tip', text: 'Mệnh đề quan hệ là cách dễ nhất để tạo **câu phức** trong IELTS (tăng điểm Grammatical Range): “I grew up in Hue, **which** is famous for its royal tombs, and my best friend, **whose** family runs a restaurant there, still lives nearby.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đại từ quan hệ',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'The woman ___ lives next door is a doctor.', o: ['who', 'which', 'where'], a: 0 },
        { t: 'mcq', q: 'This is the café ___ we first met.', o: ['which', 'where', 'who'], a: 1 },
        { t: 'mcq', q: 'I lost the phone ___ my dad gave me.', o: ['who', 'which', 'whose'], a: 1 },
        { t: 'mcq', q: 'That’s the boy ___ father is a famous singer.', o: ['who', 'whose', 'which'], a: 1 },
        { t: 'mcq', q: 'Hanoi, ___ is the capital of Vietnam, is over 1,000 years old.', o: ['that', 'which', 'where'], a: 1 },
        { t: 'mcq', q: 'The scientist ___ discovered penicillin was Alexander Fleming.', o: ['which', 'who', 'whose'], a: 1 },
        { t: 'mcq', q: 'He failed the test, ___ was a big surprise.', o: ['that', 'which', 'what'], a: 1 },
        { t: 'mcq', q: 'Do you remember the year ___ we moved here?', o: ['when', 'where', 'which'], a: 0 },
        { t: 'mcq', q: 'My grandmother, ___ is 90, still goes swimming.', o: ['that', 'who', 'which'], a: 1 },
        { t: 'mcq', q: 'The laptop ___ I bought last week has already broken.', o: ['who', 'where', 'that'], a: 2 },
      ],
    },
    {
      title: 'B. Nối hai câu bằng mệnh đề quan hệ',
      instruction: 'Viết lại thành một câu (chú ý dấu phẩy với mệnh đề không xác định).',
      items: [
        { t: 'fix', q: 'I have a friend. She speaks four languages.', a: ['I have a friend who speaks four languages.', 'I have a friend that speaks four languages.'] },
        { t: 'fix', q: 'This is the house. I grew up there.', a: ['This is the house where I grew up.', 'This is the house which I grew up in.', 'This is the house that I grew up in.', 'This is the house I grew up in.'] },
        { t: 'fix', q: 'Da Lat is very cool. It is in the Central Highlands.', a: ['Da Lat, which is in the Central Highlands, is very cool.'] },
        { t: 'fix', q: 'I met a man. His son is in my class.', a: ['I met a man whose son is in my class.'] },
        { t: 'fix', q: 'The film was boring. We watched it last night.', a: ['The film which we watched last night was boring.', 'The film that we watched last night was boring.', 'The film we watched last night was boring.'] },
        { t: 'fix', q: 'My uncle lives in Canada. He is an engineer.', a: ['My uncle, who lives in Canada, is an engineer.', 'My uncle, who is an engineer, lives in Canada.'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'The girl who she sits next to me is very kind.', a: ['The girl who sits next to me is very kind.'] },
        { t: 'fix', q: 'The teacher which taught me English was Australian.', a: ['The teacher who taught me English was Australian.', 'The teacher that taught me English was Australian.'] },
        { t: 'fix', q: 'Ho Chi Minh City, that is the biggest city in Vietnam, is very busy.', a: ['Ho Chi Minh City, which is the biggest city in Vietnam, is very busy.'] },
        { t: 'fix', q: 'This is the restaurant which we had dinner.', a: ['This is the restaurant where we had dinner.', 'This is the restaurant which we had dinner in.', 'This is the restaurant that we had dinner in.'] },
        { t: 'fix', q: 'The book which I am reading it is very interesting.', a: ['The book which I am reading is very interesting.', 'The book that I am reading is very interesting.', 'The book I am reading is very interesting.'] },
        { t: 'fix', q: 'The man who car was stolen called the police.', a: ['The man whose car was stolen called the police.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng mệnh đề quan hệ.',
      items: [
        { t: 'tr', vi: 'Người phụ nữ đã phát minh ra loại máy này là người Việt Nam.', ref: 'The woman who invented this machine is Vietnamese.', focus: 'who – defining' },
        { t: 'tr', vi: 'Huế, nơi tôi sinh ra, nổi tiếng với ẩm thực cung đình.', ref: 'Hue, where I was born, is famous for its royal cuisine.', focus: 'where – non-defining' },
        { t: 'tr', vi: 'Tôi có một người bạn có bố là phi công.', ref: 'I have a friend whose father is a pilot.', focus: 'whose' },
        { t: 'tr', vi: 'Cuốn sách mà bạn cho tôi mượn rất hay.', ref: 'The book (that) you lent me is very good.', focus: 'omitting the object pronoun' },
        { t: 'tr', vi: 'Anh ấy đỗ kỳ thi, điều đó khiến bố mẹ anh ấy rất vui.', ref: 'He passed the exam, which made his parents very happy.', focus: 'which referring to a whole clause' },
        { t: 'tr', vi: 'Đây là lý do tại sao tôi muốn học ở nước ngoài.', ref: 'This is the reason why I want to study abroad.', focus: 'the reason why' },
      ],
    },
  ],
};
