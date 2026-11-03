// Unit 13 – Grammar: Countable and uncountable nouns (Destination B1).
export default {
  id: 'b1-u13',
  book: 'b1',
  no: 13,
  title: 'Countable and uncountable nouns',
  titleVi: 'Danh từ đếm được và không đếm được',
  blocks: [
    { type: 'h', text: '1. Danh từ đếm được (Countable nouns)' },
    { type: 'p', text: 'Có dạng **số ít và số nhiều**, đi với động từ số ít hoặc số nhiều.' },
    { type: 'table', head: ['Danh từ', 'Ví dụ'], rows: [
      ['shop → shop**s**', 'There are over 100 **shops** in the new shopping centre.'],
      ['baby → bab**ies**', "They've got some great toys for **babies**."],
      ['dish → dish**es**', 'We need to get some new **dishes**.'],
    ] },
    { type: 'p', text: 'Dùng với: **a/an, many, a few, one, two, three…**' },
    { type: 'warn', text: 'Số nhiều bất quy tắc: child → **children**, person → **people**, foot → **feet**, tooth → **teeth**, man → **men**, woman → **women**, mouse → **mice**.' },

    { type: 'h', text: '2. Danh từ không đếm được (Uncountable nouns)' },
    { type: 'p', text: 'Không có dạng số nhiều, luôn đi với **động từ số ít** – kể cả khi tận cùng bằng -s (news).' },
    { type: 'table', head: ['Danh từ không đếm được thường gặp', 'Ví dụ'], rows: [
      ['**advice, information, news, homework, work, money, furniture, luggage, equipment, bread, rice, fruit, hair, paper, traffic, research, knowledge, progress**', 'My **money is** in my wallet.\nYour **hair is** really long!\nThe **news was** a complete shock.'],
    ] },
    { type: 'table', head: ['Từ định lượng', 'Đếm được (số nhiều)', 'Không đếm được'], rows: [
      ['nhiều', '**many** books', '**much** money'],
      ['một vài / một ít', '**a few** books', '**a little** money'],
      ['cả hai đều dùng', '**some / any / a lot of / lots of / the** books', '**some / any / a lot of / lots of / the** money'],
      ['đơn vị đếm', '—', '**a piece of** advice, **a bit of** luck, **a slice of** bread, **a bottle of** water'],
    ] },
    { type: 'tip', text: '**any** dùng trong câu hỏi và phủ định: Have we got **any** homework today? / There aren’t **any** eggs left.\n**some** dùng trong câu khẳng định và lời mời/đề nghị: Would you like **some** tea?' },
    { type: 'warn', text: '• Một số danh từ luôn số nhiều: **clothes, jeans, trousers, glasses, scissors** → động từ số nhiều. Your new **jeans look** great!\n• Có từ vừa đếm được vừa không, nghĩa khác nhau:\n**paper** (giấy) / **a paper** (tờ báo) · **time** (thời gian) / **a time** (một lần) · **experience** (kinh nghiệm) / **an experience** (một trải nghiệm) · **glass** (thủy tinh) / **a glass** (cái cốc)' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ informations, advices, homeworks, furnitures, luggages → các từ này **không có -s**.',
      '✗ an advice → ✓ **a piece of** advice / **some** advice.',
      '✗ The news are good. → ✓ The news **is** good.',
      '✗ many money, much books → ✓ **much** money, **many** books.',
    ] },
    { type: 'tip', text: 'IELTS Writing hay mất điểm vì lỗi này. Ghi nhớ: “**research shows**”, “**a lot of information**”, “**much progress**”, “**a great deal of knowledge**”, “**job opportunities**” (đếm được) nhưng “**employment**” (không đếm được).' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'Can you give me some ___?', o: ['advice', 'advices', 'an advice'], a: 0 },
        { t: 'mcq', q: 'The news ___ really surprising.', o: ['was', 'were'], a: 0 },
        { t: 'mcq', q: 'How ___ people came to the party?', o: ['much', 'many'], a: 1 },
        { t: 'mcq', q: 'I don’t have ___ time today.', o: ['many', 'much'], a: 1 },
        { t: 'mcq', q: 'There are a ___ eggs in the fridge.', o: ['few', 'little'], a: 0 },
        { t: 'mcq', q: 'Could I have a ___ of cake, please?', o: ['piece', 'few', 'many'], a: 0 },
        { t: 'mcq', q: 'My jeans ___ too tight.', o: ['is', 'are'], a: 1 },
        { t: 'mcq', q: 'We need some new ___ for the living room.', o: ['furniture', 'furnitures', 'a furniture'], a: 0 },
        { t: 'mcq', q: 'Are there ___ shops near your house?', o: ['any', 'much', 'a little'], a: 0 },
        { t: 'mcq', q: 'I bought ___ paper to read on the train.', o: ['a', 'some', 'many'], a: 0, ex: 'a paper = một tờ báo.' },
      ],
    },
    {
      title: 'B. Điền từ',
      instruction: 'Điền much, many, a few, a little, some hoặc any.',
      items: [
        { t: 'gap', q: 'There isn’t ___ milk left. Can you buy some?', a: ['any', 'much'] },
        { t: 'gap', q: 'I have ___ close friends, but not many.', a: ['a few'] },
        { t: 'gap', q: 'Add ___ salt to the soup – just a bit.', a: ['a little'] },
        { t: 'gap', q: 'How ___ luggage are you taking?', a: ['much'] },
        { t: 'gap', q: 'How ___ suitcases are you taking?', a: ['many'] },
        { t: 'gap', q: 'Would you like ___ coffee?', a: ['some'] },
        { t: 'gap', q: 'We didn’t make ___ progress yesterday.', a: ['much', 'any'] },
        { t: 'gap', q: 'There were too ___ people on the bus.', a: ['many'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'I need some informations about the course.', a: ['I need some information about the course.'] },
        { t: 'fix', q: 'She gave me an useful advice.', a: ['She gave me some useful advice.', 'She gave me a useful piece of advice.', 'She gave me a piece of useful advice.'] },
        { t: 'fix', q: 'The children has gone to bed.', a: ['The children have gone to bed.'] },
        { t: 'fix', q: 'We have too many homework this week.', a: ['We have too much homework this week.'] },
        { t: 'fix', q: 'Your hair are very beautiful.', a: ['Your hair is very beautiful.'] },
        { t: 'fix', q: 'There are a lot of traffics in Hanoi.', a: ['There is a lot of traffic in Hanoi.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý danh từ đếm được và không đếm được.',
      items: [
        { t: 'tr', vi: 'Cô giáo cho tôi một lời khuyên rất hữu ích.', ref: 'My teacher gave me a very useful piece of advice.', focus: 'a piece of advice' },
        { t: 'tr', vi: 'Bạn có bao nhiêu hành lý?', ref: 'How much luggage do you have?', focus: 'how much + uncountable' },
        { t: 'tr', vi: 'Tin tức đó làm mọi người bất ngờ.', ref: 'That news surprised everyone.', focus: 'news + singular verb' },
        { t: 'tr', vi: 'Tôi cần thêm một chút thời gian để hoàn thành bài tập.', ref: 'I need a little more time to finish my homework.', focus: 'a little + uncountable' },
        { t: 'tr', vi: 'Nghiên cứu cho thấy người trẻ dành quá nhiều thời gian trên mạng.', ref: 'Research shows that young people spend too much time online.', focus: 'research shows, too much time (IELTS)' },
        { t: 'tr', vi: 'Có vài quán cà phê đẹp gần nhà tôi.', ref: 'There are a few nice cafés near my house.', focus: 'a few + plural' },
      ],
    },
  ],
};
