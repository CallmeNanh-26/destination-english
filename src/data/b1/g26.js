// Unit 26 – Grammar: Comparatives and superlatives (Destination B1).
export default {
  id: 'b1-u26',
  book: 'b1',
  no: 26,
  title: 'Comparatives and superlatives',
  titleVi: 'So sánh hơn và so sánh nhất',
  blocks: [
    { type: 'h', text: '1. Cách tạo dạng so sánh' },
    { type: 'table', head: ['Loại tính từ', 'Gốc', 'So sánh hơn', 'So sánh nhất'], rows: [
      ['1 âm tiết', 'hard', 'hard**er**', 'the hard**est**'],
      ['1 âm tiết tận cùng -e', 'late', 'late**r**', 'the late**st**'],
      ['1 âm tiết: nguyên âm + phụ âm', 'big', 'big**ger**', 'the big**gest**'],
      ['2 âm tiết tận cùng -y', 'pretty', 'prett**ier**', 'the prett**iest**'],
      ['2 âm tiết trở lên', 'interesting', '**more / less** interesting', 'the **most / least** interesting'],
      ['Bất quy tắc', 'good / bad', '**better / worse**', 'the **best / worst**'],
      ['', 'little / much, many', '**less / more**', 'the **least / most**'],
      ['', 'far', '**farther / further**', 'the **farthest / furthest**'],
    ] },
    { type: 'table', head: ['Trạng từ', 'So sánh hơn', 'So sánh nhất'], rows: [
      ['carefully (thường)', 'more / less carefully', 'the most / least carefully'],
      ['well / badly', 'better / worse', 'the best / worst'],
      ['fast / early / late / near / far', 'faster / earlier / later / nearer / further', 'the fastest / earliest / latest / nearest / furthest'],
    ] },

    { type: 'h', text: '2. So sánh hơn (comparatives)' },
    { type: 'p', text: 'So sánh **hai** người/vật/hành động, thường đi với **than**:\nMy new job is **more enjoyable than** my old one.\nMy working day is **longer than** it used to be.' },
    { type: 'tip', text: 'Nâng cấp (IELTS):\n• Nhấn mạnh: **much / far / a lot** + so sánh hơn: Cities are **much more** expensive than villages.\n• Ít khác biệt: **slightly / a bit** + so sánh hơn.\n• Càng… càng…: **The more** you practise, **the better** you get.\n• Ngày càng…: Life is getting **more and more** expensive. / It’s getting **hotter and hotter**.\n• So sánh bằng: **as + adj + as**: She’s **as tall as** her mother. / not **as** expensive **as**.' },

    { type: 'h', text: '3. So sánh nhất (superlatives)' },
    { type: 'p', text: 'So sánh **một** thành viên với **cả nhóm**, thường có **the** đứng trước:\nOut of all the jobs, John’s is **the hardest**.\nToday was **the worst** day since I started working there.\nSau so sánh nhất thường dùng **in** + nơi chốn/nhóm, **of** + số lượng: the tallest building **in** Asia / the best **of** all.' },
    { type: 'tip', text: 'Hay dùng với hiện tại hoàn thành + ever: It’s **the best** film I**’ve ever seen**.' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'So sánh kép: ✗ more cheaper / most biggest → ✓ **cheaper** / **the biggest**.',
      '✗ more good / gooder → ✓ **better**; ✗ badder → ✓ **worse**.',
      'Quên “than”: ✗ He is taller me → ✓ He is taller **than** me.',
      'Quên “the”: ✗ It’s best restaurant in town → ✓ It’s **the** best restaurant in town.',
      '✗ the most tallest building of the world → ✓ the tallest building **in** the world.',
    ] },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'This exam was ___ than the last one.', o: ['easyer', 'easier', 'more easy'], a: 1 },
        { t: 'mcq', q: 'Mount Everest is ___ mountain in the world.', o: ['the highest', 'the most high', 'higher'], a: 0 },
        { t: 'mcq', q: 'My English is getting ___.', o: ['gooder', 'better', 'more good'], a: 1 },
        { t: 'mcq', q: 'This is ___ film I’ve ever seen.', o: ['the worse', 'the worst', 'the baddest'], a: 1 },
        { t: 'mcq', q: 'Hanoi is ___ than Hue.', o: ['more big', 'bigger', 'biger'], a: 1 },
        { t: 'mcq', q: 'She drives ___ than her brother.', o: ['more careful', 'more carefully', 'carefullier'], a: 1 },
        { t: 'mcq', q: 'The ___ you practise, the better you get.', o: ['much', 'more', 'most'], a: 1 },
        { t: 'mcq', q: 'My sister is ___ tall as my mother.', o: ['as', 'so', 'than'], a: 0 },
        { t: 'mcq', q: 'Living in the city is ___ more expensive than in the countryside.', o: ['very', 'much', 'most'], a: 1 },
        { t: 'mcq', q: 'Who is the youngest ___ your family?', o: ['of', 'in', 'than'], a: 1 },
      ],
    },
    {
      title: 'B. Điền dạng đúng',
      instruction: 'Viết dạng so sánh hơn hoặc so sánh nhất của từ trong ngoặc (kèm the / more / most nếu cần).',
      items: [
        { t: 'gap', q: 'Summer in Hanoi is ___ (hot) than in Da Lat.', a: ['hotter'] },
        { t: 'gap', q: 'This is ___ (expensive) restaurant in the city.', a: ['the most expensive'] },
        { t: 'gap', q: 'Today is ___ (bad) day of my life!', a: ['the worst'] },
        { t: 'gap', q: 'Can you speak ___ (slowly), please?', a: ['more slowly'] },
        { t: 'gap', q: 'Who lives ___ (far) from school – you or Nam?', a: ['further', 'farther'] },
        { t: 'gap', q: 'She is ___ (happy) now than she was last year.', a: ['happier'] },
        { t: 'gap', q: 'That was ___ (funny) joke I’ve ever heard.', a: ['the funniest'] },
        { t: 'gap', q: 'My new phone is much ___ (good) than my old one.', a: ['better'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'This phone is more cheaper than that one.', a: ['This phone is cheaper than that one.'] },
        { t: 'fix', q: 'He is the most tallest student in the class.', a: ['He is the tallest student in the class.'] },
        { t: 'fix', q: 'My brother is older me.', a: ['My brother is older than me.', 'My brother is older than I am.'] },
        { t: 'fix', q: "It's best restaurant in town.", a: ["It's the best restaurant in town.", 'It is the best restaurant in town.'] },
        { t: 'fix', q: 'Ho Chi Minh City is the biggest city of Vietnam.', a: ['Ho Chi Minh City is the biggest city in Vietnam.'] },
        { t: 'fix', q: 'Her English is more good than mine.', a: ['Her English is better than mine.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng cấu trúc so sánh.',
      items: [
        { t: 'tr', vi: 'Đây là món ăn ngon nhất mà tôi từng ăn.', ref: "This is the most delicious dish I've ever eaten.", focus: 'superlative + present perfect' },
        { t: 'tr', vi: 'Sống ở thành phố đắt hơn nhiều so với ở nông thôn.', ref: 'Living in the city is much more expensive than living in the countryside.', focus: 'much + comparative' },
        { t: 'tr', vi: 'Bạn càng đọc nhiều, vốn từ của bạn càng phong phú.', ref: 'The more you read, the richer your vocabulary becomes.', focus: 'the more…, the more…' },
        { t: 'tr', vi: 'Giá nhà ngày càng cao.', ref: 'House prices are getting higher and higher.', focus: 'comparative and comparative' },
        { t: 'tr', vi: 'Tiếng Anh của tôi không giỏi bằng tiếng Anh của chị tôi.', ref: "My English isn't as good as my sister's.", focus: 'not as … as' },
        { t: 'tr', vi: 'Anh ấy làm việc chăm chỉ hơn bất kỳ ai trong công ty.', ref: 'He works harder than anyone else in the company.', focus: 'comparative + than anyone else' },
      ],
    },
  ],
};
