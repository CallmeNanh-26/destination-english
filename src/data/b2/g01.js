// B2 Unit 1 – Grammar: present time (Destination B2).
export default {
  id: 'b2-u01',
  book: 'b2',
  no: 1,
  title: 'Present time',
  titleVi: 'Thì hiện tại: đơn, tiếp diễn, hoàn thành, hoàn thành tiếp diễn; động từ trạng thái',
  blocks: [
    { type: 'h', text: 'Hiện tại đơn (present simple)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Thói quen hiện tại', 'Toby **walks** to work.'],
      ['Tần suất', 'Angela **doesn’t visit** us very often.'],
      ['Tình huống lâu dài', 'Carlo **works** in a travel agent’s.'],
      ['Trạng thái', '**Do** you **have** an up-to-date passport?'],
      ['Sự thật hiển nhiên', 'Poland **is** in the European Union.'],
    ] },
    { type: 'tip', text: 'Dùng **do/does** trong câu khẳng định để **nhấn mạnh** (thường để phản bác):\n‘You don’t like going by bus, do you?’ – ‘Actually, I **do like** going by bus for short distances.’' },

    { type: 'h', text: 'Hiện tại tiếp diễn (present continuous)' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Đang xảy ra lúc nói', 'Mike **is driving** to work at the moment.'],
      ['Chuỗi hành động tạm thời', 'Taxi drivers **aren’t stopping** at the station because of the roadworks.'],
      ['Tình huống tạm thời', '**Are** they **staying** in a hotel near the stadium?'],
      ['Xu hướng đang thay đổi', 'Holidays abroad **are becoming** increasingly popular.'],
      ['Thói quen gây khó chịu (với **always**)', 'Dad **is always cleaning** the car when I want to use it!'],
    ] },
    { type: 'tip', text: 'IELTS Writing Task 2 / Speaking Part 3 rất hay cần câu nói về **xu hướng**: “More and more people **are choosing** to work from home.” / “Air travel **is becoming** cheaper, but its environmental cost **is rising**.”' },

    { type: 'h', text: 'Hiện tại hoàn thành (present perfect simple)' },
    { type: 'p', text: 'Cấu trúc: **have/has + V3**' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Bắt đầu trong quá khứ, vẫn còn tiếp diễn', 'She**’s had** her motorbike for over six years.'],
      ['Chuỗi hành động tính đến hiện tại', 'We**’ve travelled** by taxi, bus, plane and train – all in the last 24 hours!'],
      ['Trải nghiệm, không nói thời điểm', '**Have** you ever **flown** in a helicopter?'],
      ['Kết quả ở hiện tại là quan trọng', 'I**’ve booked** the coach tickets.'],
    ] },
    { type: 'warn', text: '• Sau **It’s the first/second… time** dùng hiện tại hoàn thành: It’s the second time I**’ve been** on a plane. (✗ I am on a plane)\n• Anh–Mỹ: người Mỹ hay dùng quá khứ đơn: US We already **saw** the Sphinx. / UK We**’ve** already **seen** the Sphinx.\n• Mỹ dùng **gotten**, Anh dùng **got**: We’ve already **got** Dan a new rucksack.' },

    { type: 'h', text: 'Hiện tại hoàn thành tiếp diễn (present perfect continuous)' },
    { type: 'p', text: 'Cấu trúc: **have/has been + V-ing**' },
    { type: 'table', head: ['Cách dùng', 'Ví dụ'], rows: [
      ['Hành động kéo dài đến hiện tại', 'We **have been driving** for hours. Can’t we have a break soon?'],
      ['Vừa dừng lại, còn để lại dấu hiệu', 'I’m out of breath because I**’ve been running** to get here in time.'],
    ] },
    { type: 'warn', text: '• Hay đi với **all day/week, for, since, just**.\n• **Không** dùng với **ever/never**: ✓ Have you ever **flown** in a helicopter? ✗ Have you ever been flying…\n• Đôi khi nghĩa gần như nhau: I **have worked / have been working** at the airport for four years.\n• Đôi khi khác nghĩa: I **have read** that book (đọc xong rồi) ≠ I **have been reading** that book (chưa xong).' },

    { type: 'h', text: 'Động từ trạng thái (stative verbs)' },
    { type: 'p', text: 'Không mô tả hành động nên thường **không dùng ở thì tiếp diễn**: ✓ I **see** what you mean. ✗ I am seeing what you mean.' },
    { type: 'table', head: ['Nhóm', 'Động từ'], rows: [
      ['Suy nghĩ', 'believe, imagine, know, mean, think, understand'],
      ['Tồn tại', 'be, exist'],
      ['Cảm xúc', 'hate, like, love, need, prefer, satisfy, want'],
      ['Giác quan', 'hear, see, smell, sound, taste'],
      ['Vẻ ngoài', 'appear, look, resemble, seem'],
      ['Sở hữu, quan hệ', 'belong to, consist of, have, include, involve, own'],
    ] },
    { type: 'tip', text: 'Một số động từ vừa là trạng thái vừa là hành động, **đổi nghĩa**:\n**Do** you **have** your plane ticket? (sở hữu) ↔ **Are** you **having** lunch? (đang ăn)\nI **think** it’s a good idea. (cho rằng) ↔ I**’m thinking** about moving abroad. (đang cân nhắc)\nThis soup **tastes** great. (có vị) ↔ The chef **is tasting** the soup. (đang nếm)' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ I am living here since 2015 → ✓ I **have lived / have been living** here since 2015.',
      '✗ I am knowing the answer → ✓ I **know** the answer.',
      '✗ How long are you learning English? → ✓ How long **have you been learning** English?',
      '✗ It’s the first time I visit Hanoi → ✓ It’s the first time I**’ve visited** Hanoi.',
    ] },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn dạng động từ đúng.',
      items: [
        { t: 'mcq', q: 'Elizabeth ___ to bed at around eleven o’clock.', o: ['usually goes', 'is usually going'], a: 0 },
        { t: 'mcq', q: 'Dan ___ on the other phone right now.', o: ['talks', 'is talking'], a: 1 },
        { t: 'mcq', q: 'We ___ any meat at the moment as we’re both on a diet.', o: ["don't eat", "aren't eating"], a: 1 },
        { t: 'mcq', q: '___ increasingly safe?', o: ['Does air travel get', 'Is air travel getting'], a: 1 },
        { t: 'mcq', q: 'My mum ___ me every weekend without fail.', o: ['calls', 'is calling'], a: 0 },
        { t: 'mcq', q: '___ up with excuses for not having done your homework. It’s so annoying!', o: ['You always come', "You're always coming"], a: 1 },
        { t: 'mcq', q: 'No, the train ___ at Cirencester on Saturdays.', o: ["doesn't stop", "isn't stopping"], a: 0 },
        { t: 'mcq', q: 'Have you ever ___ in a helicopter?', o: ['flown', 'been flying'], a: 0 },
        { t: 'mcq', q: 'This soup ___ delicious!', o: ['tastes', 'is tasting'], a: 0 },
        { t: 'mcq', q: 'I ___ about changing my job. What do you think?', o: ['think', 'am thinking'], a: 1 },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Chia động từ trong ngoặc ở thì hiện tại phù hợp.',
      items: [
        { t: 'gap', q: 'It’s the first time ___ (I / ever / eat) octopus!', a: ["I've ever eaten", 'I have ever eaten'] },
        { t: 'gap', q: 'Sandy ___ (not / see) his sister since she went to university.', a: ["hasn't seen", 'has not seen'] },
        { t: 'gap', q: 'Poor Tracy! She ___ (write) that essay for hours now and she still hasn’t finished!', a: ['has been writing', "'s been writing"] },
        { t: 'gap', q: '___ (you / ever / meet) anyone famous?', a: ['Have you ever met'] },
        { t: 'gap', q: '___ (I / try) to get in touch with Jenny all morning but I can’t find her anywhere.', a: ["I've been trying", 'I have been trying'] },
        { t: 'gap', q: '___ (I / not / finish) the book yet so I can’t tell you what happens.', a: ["I haven't finished", 'I have not finished'] },
        { t: 'gap', q: '___ (We / live) here for the last six years.', a: ["We've lived", 'We have lived', "We've been living", 'We have been living'] },
        { t: 'gap', q: 'They ___ (go) on holiday to Spain and won’t be back until the end of the month.', a: ["'ve gone", 'have gone'] },
      ],
    },
    {
      title: 'C. Sửa lỗi sai',
      instruction: 'Viết lại câu cho đúng.',
      items: [
        { t: 'fix', q: 'My dad is often getting up late on Saturday mornings.', a: ['My dad often gets up late on Saturday mornings.'] },
        { t: 'fix', q: 'Are you speaking any other languages apart from English?', a: ['Do you speak any other languages apart from English?'] },
        { t: 'fix', q: 'I already buy all my Christmas presents and it’s only October!', a: ["I've already bought all my Christmas presents and it's only October!", 'I have already bought all my Christmas presents and it’s only October!', "I have already bought all my Christmas presents and it's only October!"] },
        { t: 'fix', q: 'Carlo is never eating Chinese food before.', a: ['Carlo has never eaten Chinese food before.'] },
        { t: 'fix', q: 'Needs Melanie any help painting her new flat?', a: ['Does Melanie need any help painting her new flat?'] },
        { t: 'fix', q: 'I am knowing what you mean.', a: ['I know what you mean.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Chú ý chọn đúng thì hiện tại.',
      items: [
        { t: 'tr', vi: 'Ngày càng nhiều người trẻ chọn làm việc từ xa.', ref: 'More and more young people are choosing to work remotely.', focus: 'present continuous – xu hướng (IELTS)' },
        { t: 'tr', vi: 'Tôi đã học tiếng Anh được tám năm nhưng vẫn chưa tự tin khi nói.', ref: "I've been learning English for eight years but I'm still not confident when I speak.", focus: 'present perfect continuous' },
        { t: 'tr', vi: 'Đây là lần đầu tiên tôi đi du lịch nước ngoài một mình.', ref: "This is the first time I've travelled abroad on my own.", focus: 'It’s the first time + present perfect' },
        { t: 'tr', vi: 'Em trai tôi lúc nào cũng mượn điện thoại của tôi mà không hỏi!', ref: 'My younger brother is always borrowing my phone without asking!', focus: 'always + present continuous (phàn nàn)' },
        { t: 'tr', vi: 'Giá vé máy bay đã tăng đáng kể trong vài năm gần đây.', ref: 'Air fares have risen considerably over the last few years.', focus: 'present perfect + over the last few years (IELTS Writing)' },
        { t: 'tr', vi: 'Tôi đang cân nhắc việc chuyển sang thành phố khác.', ref: "I'm thinking about moving to another city.", focus: 'think – stative vs action' },
      ],
    },
  ],
};
