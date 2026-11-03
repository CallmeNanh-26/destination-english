// Unit 8 – Grammar: Prepositions of time and place (Destination B1).
export default {
  id: 'b1-u08',
  book: 'b1',
  no: 8,
  title: 'Prepositions of time and place',
  titleVi: 'Giới từ chỉ thời gian và nơi chốn (in, on, at)',
  blocks: [
    { type: 'p', text: 'Quy tắc chung: **in** = khoảng lớn/bao quanh → **on** = bề mặt/ngày → **at** = điểm cụ thể.' },
    { type: 'h', text: '1. IN' },
    { type: 'table', head: ['Thời gian', 'Nơi chốn'], rows: [
      ['tháng: **in** April', 'thành phố, thị trấn: **in** Edinburgh'],
      ['năm: **in** 2005', 'quốc gia, châu lục: **in** Mexico, **in** Asia'],
      ['mùa: **in** winter', 'vùng, khu vực: **in** the desert, **in** the countryside'],
      ['buổi trong ngày: **in** the afternoon', 'bên trong vật/phòng/tòa nhà: **in** the drawer, **in** the living room'],
    ] },
    { type: 'p', text: 'Cụm cố định: **in a minute/an hour** (trong 1 phút nữa), **in front of**, **in the middle (of)**, **in the future**.' },

    { type: 'h', text: '2. ON' },
    { type: 'table', head: ['Thời gian', 'Nơi chốn'], rows: [
      ['ngày trong tuần: **on** Saturday', 'đảo: **on** Mykonos, **on** Phu Quoc'],
      ['ngày tháng: **on** 19th March', 'trang: **on** page 97'],
      ['ngày cụ thể: **on** my birthday, **on** Christmas Day', 'trên bề mặt: **on** the table, **on** the wall'],
    ] },
    { type: 'p', text: 'Cụm cố định: **on the beach, on the left/right, on the bus/train/plane, on TV**.' },

    { type: 'h', text: '3. AT' },
    { type: 'table', head: ['Thời gian', 'Nơi chốn'], rows: [
      ['giờ: **at** ten past three', 'điểm cụ thể: **at** the North Pole, **at** the bus stop'],
      ['dịp lễ: **at** Christmas, **at** the weekend (BrE)', 'địa chỉ có số nhà: **at** 132 London Road'],
      ['**at** night, **at** the moment, **at** noon', 'tòa nhà + hoạt động ở đó: **at** the cinema, **at** school, **at** work'],
      ['', 'sự kiện: **at** a party, **at** a concert'],
    ] },
    { type: 'p', text: 'Cụm cố định: **at the top/bottom, at the door/window, at home**.' },

    { type: 'warn', text: '• in the morning, nhưng **on** Monday morning / **on** Tuesday evening.\n• **Không** dùng giới từ trước: tomorrow, yesterday, next/last week, this morning, every day.\n✓ We’re flying **tomorrow afternoon**. ✗ on tomorrow afternoon\n• Động từ chuyển động (go, come, move, run…) + **to**: Was it hot when you went **to** Japan? (✗ went in Japan)\n• **go home** / **arrive home** – không có “to”.' },
    { type: 'tip', text: '**in** hay **at** cho nơi chốn?\n**in** = khu vực rộng, bao quanh ta: We’re spending our holiday **in** the countryside.\n**at** = điểm trên hành trình / nơi gặp: Let’s meet **at** the train station.\n**arrive in** + thành phố/quốc gia; **arrive at** + nơi nhỏ (airport, station, hotel).' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ in Monday → ✓ **on** Monday; ✗ on 2020 → ✓ **in** 2020; ✗ in 7 o’clock → ✓ **at** 7 o’clock.',
      '✗ at next week → ✓ **next week** (không giới từ).',
      '✗ arrive to Hanoi → ✓ arrive **in** Hanoi.',
      '✗ discuss about → ✓ **discuss** sth (không giới từ).',
    ] },
  ],
  exercises: [
    {
      title: 'A. Chọn in / on / at',
      instruction: 'Chọn giới từ đúng (— nghĩa là không cần giới từ).',
      items: [
        { t: 'mcq', q: 'My birthday is ___ 12th May.', o: ['in', 'on', 'at'], a: 1 },
        { t: 'mcq', q: "I'll see you ___ six o'clock.", o: ['in', 'on', 'at'], a: 2 },
        { t: 'mcq', q: 'We usually go to the beach ___ summer.', o: ['in', 'on', 'at'], a: 0 },
        { t: 'mcq', q: 'She lives ___ 25 Tran Hung Dao Street.', o: ['in', 'on', 'at'], a: 2, ex: 'Địa chỉ có số nhà → at.' },
        { t: 'mcq', q: "We're meeting ___ next Friday.", o: ['on', 'at', '—'], a: 2 },
        { t: 'mcq', q: 'There’s a spider ___ the ceiling!', o: ['in', 'on', 'at'], a: 1 },
        { t: 'mcq', q: 'They spent their honeymoon ___ Phu Quoc island.', o: ['in', 'on', 'at'], a: 1, ex: 'Đảo → on.' },
        { t: 'mcq', q: 'I can’t sleep ___ night when it’s hot.', o: ['in', 'on', 'at'], a: 2 },
        { t: 'mcq', q: 'The answers are ___ page 120.', o: ['in', 'on', 'at'], a: 1 },
        { t: 'mcq', q: 'We arrived ___ Tokyo late in the evening.', o: ['in', 'at', 'to'], a: 0 },
        { t: 'mcq', q: 'Our class starts ___ Monday morning.', o: ['in', 'on', 'at'], a: 1 },
        { t: 'mcq', q: "When did you go ___ Japan?", o: ['in', 'to', 'at'], a: 1 },
      ],
    },
    {
      title: 'B. Điền giới từ',
      instruction: 'Điền in, on, at hoặc to. Nếu không cần giới từ, viết “-”.',
      items: [
        { t: 'gap', q: "I'll be ready ___ a minute.", a: ['in'] },
        { t: 'gap', q: 'The children are ___ school until 4 p.m.', a: ['at'] },
        { t: 'gap', q: 'Your keys are ___ the drawer.', a: ['in'] },
        { t: 'gap', q: "What are you doing ___ Christmas?", a: ['at'] },
        { t: 'gap', q: 'Turn ___ the left at the traffic lights.', a: ['to', 'on'] },
        { t: 'gap', q: 'I first went abroad ___ 2019.', a: ['in'] },
        { t: 'gap', q: "Let's meet ___ the entrance of the cinema.", a: ['at'] },
        { t: 'gap', q: "We're leaving ___ tomorrow morning.", a: ['-', '—', 'none', 'no'] },
      ],
    },
    {
      title: 'C. Tìm và sửa lỗi sai',
      instruction: 'Mỗi câu có 1 lỗi. Viết lại cả câu cho đúng.',
      items: [
        { t: 'fix', q: 'I was born on 2004.', a: ['I was born in 2004.'] },
        { t: 'fix', q: 'See you at next week!', a: ['See you next week!'] },
        { t: 'fix', q: 'We arrived to the airport at 6.', a: ['We arrived at the airport at 6.'] },
        { t: 'fix', q: 'She works in night.', a: ['She works at night.'] },
        { t: 'fix', q: 'I usually go to home after class.', a: ['I usually go home after class.'] },
        { t: 'fix', q: 'There is a nice café in the corner of my street.', a: ['There is a nice café on the corner of my street.', 'There is a nice cafe on the corner of my street.'], ex: 'Góc phố (bên ngoài) → on the corner; góc phòng → in the corner.' },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý giới từ thời gian và nơi chốn.',
      items: [
        { t: 'tr', vi: 'Tôi sinh ra ở Huế vào ngày 3 tháng 9 năm 2003.', ref: 'I was born in Hue on 3rd September 2003.', focus: 'in + city, on + date' },
        { t: 'tr', vi: 'Chúng ta gặp nhau ở ga tàu lúc 7 giờ tối thứ Sáu nhé.', ref: "Let's meet at the train station at 7 p.m. on Friday.", focus: 'at + place/time, on + day' },
        { t: 'tr', vi: 'Vào mùa hè, gia đình tôi thường đi biển.', ref: 'In summer, my family usually goes to the beach.', focus: 'in + season, go to' },
        { t: 'tr', vi: 'Hiện tại cô ấy không ở nhà; cô ấy đang ở một bữa tiệc.', ref: "She isn't at home at the moment; she's at a party.", focus: 'at home, at the moment, at a party' },
        { t: 'tr', vi: 'Có một bức tranh rất đẹp trên tường phòng khách.', ref: 'There is a beautiful painting on the living room wall.', focus: 'on + surface' },
        { t: 'tr', vi: 'Chúng tôi sẽ đến Đà Nẵng vào sáng mai.', ref: "We're arriving in Da Nang tomorrow morning.", focus: 'arrive in, no preposition before tomorrow' },
      ],
    },
  ],
};
