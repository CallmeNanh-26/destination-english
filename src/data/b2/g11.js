// B2 Unit 11 – Grammar: comparatives and superlatives / so, such, enough, too (Destination B2).
export default {
  id: 'b2-u11',
  book: 'b2',
  no: 11,
  title: 'Comparatives and superlatives; so, such, enough, too',
  titleVi: 'So sánh hơn, so sánh nhất; so, such, enough, too',
  blocks: [
    { type: 'h', text: 'So sánh hơn và so sánh nhất của tính từ' },
    { type: 'table', head: ['Loại tính từ', 'Ví dụ', 'So sánh hơn', 'So sánh nhất'], rows: [
      ['1 âm tiết', 'black', 'blacker', 'the blackest'],
      ['1 âm tiết, kết thúc nguyên âm + phụ âm', 'thin', 'thinner (gấp đôi phụ âm)', 'the thinnest'],
      ['2 âm tiết, kết thúc -y', 'funny', 'funnier', 'the funniest'],
      ['2+ âm tiết', 'intelligent', 'more / less intelligent', 'the most / least intelligent'],
      ['Bất quy tắc', 'good / bad / far', 'better / worse / farther, further', 'the best / worst / farthest, furthest'],
      ['Bất quy tắc (lượng từ)', 'little / much / many', 'less / more / more', 'the least / most / most'],
    ] },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['So sánh hơn: hai đối tượng khác nhau', 'The crime rate in this area is **higher than** in other parts of the country.'],
      ['So sánh nhất: một đối tượng so với cả nhóm', 'The robbery was **the biggest** in the bank’s history.'],
    ] },
    { type: 'tip', text: '• Một số tính từ 2 âm tiết dùng được cả hai cách: clever → **cleverer / more clever**.\n• Tính từ 1 âm tiết tận cùng **-e** chỉ thêm -r/-st: white → whiter, whitest.\n• Nhấn mạnh so sánh hơn: **much / far / a lot / slightly / a bit** bigger: Crime is **a much bigger** problem here **than** in many other countries.\n• **the + so sánh hơn, the + so sánh hơn**: **The more** you practise, **the better** you get.' },

    { type: 'h', text: 'So sánh của trạng từ' },
    { type: 'table', head: ['Loại', 'Ví dụ'], rows: [
      ['Trạng từ thường', 'easily → **more / less easily** → **the most / least easily**'],
      ['Bất quy tắc', 'badly → worse → worst · early → earlier · far → farther/further · fast → faster · hard → harder · late → later · often → more often · near → nearer · soon → sooner · well → better → best'],
    ] },
    { type: 'p', text: 'Lock your door **more carefully** next time and maybe you won’t get burgled!\nOnly the criminal who ran **fastest** managed to escape from the police.' },

    { type: 'h', text: 'so và such (…đến nỗi mà)' },
    { type: 'table', head: ['Cấu trúc', 'Ví dụ'], rows: [
      ['**so** + adj / adv + that', 'The burglar was **so clever that** no one could catch him.\nJane took the money **so quickly that** no one saw her.'],
      ['**so** + many / much + N + that', 'There was **so much money that** the robber couldn’t carry it all.'],
      ['**such** + a/an + adj + N số ít + that', 'It was **such a terrible crime that** the man was sent to prison for life.'],
      ['**such** + adj + N số nhiều / không đếm được + that', 'The guard had **such good hearing that** he heard the door open.'],
      ['**such** + a lot of + N + that', 'There is **such a lot of crime** here **that** the police can’t cope.'],
    ] },
    { type: 'warn', text: '• Có thể bỏ **that**: The crime rate is so high (that) people are very frightened.\n• Đừng nhầm với **so** = vì vậy: I saw the burglar leaving, **so** I called the police.\n• ✗ such a beautiful weather → ✓ **such beautiful weather** (weather không đếm được, không có a).' },

    { type: 'h', text: 'enough và too' },
    { type: 'table', head: ['Cấu trúc', 'Nghĩa', 'Ví dụ'], rows: [
      ['**enough** + N (+ for sb) (+ to V)', 'đủ', 'There aren’t **enough police officers** on the streets **to keep** us safe.'],
      ['adj / adv + **enough** (+ for sb) (+ to V)', 'đủ', 'It wasn’t **dark enough for** the burglar **to start** working.\nDid the police respond **quickly enough to help**?'],
      ['**too** + adj / adv (+ for sb) (+ to V)', 'quá (tiêu cực)', 'The young man was **too young to go** to prison.\nWe arrived **too late for** the start of the trial.'],
      ['**too** many / much + N', 'quá nhiều', 'We send **too many** innocent people to prison.'],
    ] },
    { type: 'warn', text: '• **enough** đứng **sau** tính từ nhưng **trước** danh từ: old enough / enough money.\n• ✗ It’s enough dangerous → ✓ It’s **quite / fairly** dangerous.\n• **too** mang nghĩa tiêu cực. Khi khen dùng **very / really / extremely**: ✓ You were **really** lucky. ✗ You were too lucky not to get caught.' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ more cheaper / more better → ✓ **cheaper** / **better**',
      '✗ He is the most tallest → ✓ He is **the tallest**.',
      '✗ This problem is more serious that the other → ✓ … more serious **than** …',
      '✗ I’m too happy to see you (ý khen) → ✓ I’m **so / really** happy to see you.',
    ] },
    { type: 'tip', text: 'IELTS Writing Task 1 (so sánh số liệu):\n“Car crime was **significantly higher** in 2020 **than** in 2010.”\n“Burglary was **the most common** type of crime, **followed by** theft.”\n“Violent crime fell **slightly**, while online fraud rose **far more sharply**.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn dạng đúng.',
      items: [
        { t: 'mcq', q: 'The crime rate here is ___ than in other areas.', o: ['higher', 'more high', 'highest'], a: 0 },
        { t: 'mcq', q: 'This was the ___ robbery in the bank’s history.', o: ['biggest', 'bigger', 'most big'], a: 0 },
        { t: 'mcq', q: 'Online fraud is ___ problem than street crime in many cities.', o: ['a much bigger', 'much more big', 'a very bigger'], a: 0 },
        { t: 'mcq', q: 'Which is the ___ city in the world?', o: ['safest', 'most safe', 'safer'], a: 0 },
        { t: 'mcq', q: 'He drives ___ than his brother.', o: ['more carefully', 'carefuller', 'most carefully'], a: 0 },
        { t: 'mcq', q: 'It was ___ a terrible crime that he got life in prison.', o: ['such', 'so', 'too'], a: 0 },
        { t: 'mcq', q: 'The burglar was ___ clever that nobody caught him.', o: ['so', 'such', 'too'], a: 0 },
        { t: 'mcq', q: 'He’s ___ young to vote.', o: ['too', 'enough', 'so'], a: 0 },
        { t: 'mcq', q: 'There aren’t ___ police officers on the streets.', o: ['enough', 'too', 'such'], a: 0 },
        { t: 'mcq', q: 'Is she old ___ to drive?', o: ['enough', 'too', 'so'], a: 0 },
      ],
    },
    {
      title: 'B. Dạng đúng của tính từ / trạng từ',
      instruction: 'Viết dạng so sánh đúng của từ trong ngoặc.',
      items: [
        { t: 'gap', q: 'This is the ___ (bad) film I’ve ever seen.', a: ['worst'] },
        { t: 'gap', q: 'My house is ___ (far) from school than yours.', a: ['farther', 'further'] },
        { t: 'gap', q: 'Today is ___ (hot) than yesterday.', a: ['hotter'] },
        { t: 'gap', q: 'She’s the ___ (funny) person in our class.', a: ['funniest'] },
        { t: 'gap', q: 'The ___ (much) you read, the larger your vocabulary becomes.', a: ['more'] },
        { t: 'gap', q: 'You need to work ___ (hard) if you want to pass.', a: ['harder'] },
        { t: 'gap', q: 'Of all the students, Lan arrived ___ (early).', a: ['earliest'] },
        { t: 'gap', q: 'This exam was ___ (difficult) than I expected.', a: ['more difficult'] },
      ],
    },
    {
      title: 'C. Viết lại câu',
      instruction: 'Viết lại câu với từ trong ngoặc, giữ nguyên nghĩa.',
      items: [
        { t: 'fix', q: 'The film was so boring that I fell asleep. (such)', a: ['It was such a boring film that I fell asleep.'] },
        { t: 'fix', q: 'It was such cold weather that we stayed inside. (so)', a: ['The weather was so cold that we stayed inside.'] },
        { t: 'fix', q: 'He is too young to drive. (enough)', a: ["He isn't old enough to drive.", 'He is not old enough to drive.'] },
        { t: 'fix', q: 'The box was so heavy that I couldn’t lift it. (too)', a: ['The box was too heavy for me to lift.', 'The box was too heavy to lift.'] },
        { t: 'fix', q: 'No other city is as safe as Singapore. (safest)', a: ['Singapore is the safest city.', 'Singapore is the safest city in the world.'] },
        { t: 'fix', q: 'If you practise more, you will get better. (The more…)', a: ['The more you practise, the better you will get.', "The more you practise, the better you'll get.", 'The more you practise, the better you get.'] },
      ],
    },
    {
      title: 'D. Sửa lỗi sai',
      instruction: 'Mỗi câu có một lỗi. Viết lại câu đúng.',
      items: [
        { t: 'fix', q: 'This phone is more cheaper than that one.', a: ['This phone is cheaper than that one.'] },
        { t: 'fix', q: 'It’s enough dangerous to walk here at night.', a: ["It's quite dangerous to walk here at night.", "It's fairly dangerous to walk here at night.", "It's dangerous enough to walk here at night."] },
        { t: 'fix', q: 'We had such a beautiful weather on holiday.', a: ['We had such beautiful weather on holiday.'] },
        { t: 'fix', q: 'She is the most tallest girl in the class.', a: ['She is the tallest girl in the class.'] },
        { t: 'fix', q: 'Crime in cities is more common that in the countryside.', a: ['Crime in cities is more common than in the countryside.'] },
      ],
    },
    {
      title: 'E. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng cấu trúc so sánh / so / such / enough / too.',
      items: [
        { t: 'tr', vi: 'Tội phạm trên mạng đang trở thành một vấn đề lớn hơn nhiều so với trộm cắp đường phố.', ref: 'Online crime is becoming a much bigger problem than street theft.', focus: 'much + comparative (IELTS)' },
        { t: 'tr', vi: 'Bạn càng luyện tập nhiều, bạn sẽ càng nói tiếng Anh trôi chảy hơn.', ref: 'The more you practise, the more fluently you will speak English.', focus: 'the more…, the more…' },
        { t: 'tr', vi: 'Bộ phim hay đến nỗi tôi xem nó ba lần.', ref: 'It was such a good film that I watched it three times.', focus: 'such … that' },
        { t: 'tr', vi: 'Không có đủ cảnh sát trên đường phố để giữ an toàn cho người dân.', ref: "There aren't enough police officers on the streets to keep people safe.", focus: 'enough + noun + to V' },
        { t: 'tr', vi: 'Năm 2020, trộm cắp là loại tội phạm phổ biến nhất.', ref: 'In 2020, theft was the most common type of crime.', focus: 'superlative (IELTS Task 1)' },
        { t: 'tr', vi: 'Cậu ấy còn quá trẻ để phải vào tù.', ref: 'He is too young to go to prison.', focus: 'too + adj + to V' },
      ],
    },
  ],
};
