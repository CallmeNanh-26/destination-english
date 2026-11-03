// Unit 32 – Grammar: Reported questions, orders, requests (Destination B1).
export default {
  id: 'b1-u32',
  book: 'b1',
  no: 32,
  title: 'Reported questions, orders, requests',
  titleVi: 'Tường thuật câu hỏi, mệnh lệnh, lời yêu cầu',
  blocks: [
    { type: 'h', text: 'Câu hỏi Yes/No → if / whether' },
    { type: 'p', text: 'Câu hỏi bắt đầu bằng **be, do, have** hoặc **động từ khuyết thiếu** → dùng **asked (sb) if / whether** + **S + V** (trật tự câu khẳng định) và lùi thì như câu tường thuật thường.' },
    { type: 'table', head: ['Trực tiếp', 'Tường thuật'], rows: [
      ['‘**Have** you **been** to the gallery?’ he asked her.', 'He asked her **if she had been** to the gallery.'],
      ['‘**Do** you **want** a sweater?’ my mum asked.', 'My mum asked **if I wanted** a sweater.'],
      ['‘**Are** you **making** a skirt?’ I asked Anne.', 'I asked Anne **if she was making** a skirt.'],
      ['‘**Can** you paint?’ Mary asked her friend.', 'Mary asked her friend **if he could** paint.'],
      ['‘**Will** you make me one?’ I asked Terry.', 'I asked Terry **if he would** make me one.'],
      ['‘**Shall** I wear a jacket?’ I asked Mum.', 'I asked Mum **if I should** wear a jacket.'],
      ['‘**May** I borrow your coat?’ Mr Jones asked me.', 'Mr Jones asked me **if he might** borrow my coat.'],
    ] },
    { type: 'tip', text: 'Có thể dùng **whether** thay cho **if**: He asked her **whether** she had been to the gallery.\nVới câu hỏi lựa chọn (A **or** B) thường dùng whether: Sally asked **whether** she should study maths **or** English.' },

    { type: 'h', text: 'Câu hỏi có từ để hỏi (Wh-)' },
    { type: 'p', text: 'Giữ nguyên từ để hỏi, sau đó là **chủ ngữ + động từ** (KHÔNG đảo ngữ, KHÔNG dùng do/does/did, KHÔNG có dấu ?).' },
    { type: 'table', head: ['Trực tiếp', 'Tường thuật'], rows: [
      ['‘**What** kind of shoes **are** in fashion now?’', 'My mum asked me **what kind of shoes were** in fashion at that moment.'],
      ['‘**Who did you see** at the show?’ asked Ben.', 'Ben asked **who I had seen** at the show.'],
      ['‘**Which** one **do you want**?’ Sarah asked Liam.', 'Sarah asked Liam **which one he wanted**.'],
      ['‘**When will they finish** the house?’ I asked.', 'I asked **when they would finish** the house.'],
      ['‘**Why did you say** that?’ my sister asked me.', 'My sister asked me **why I had said** that.'],
      ['‘**How much did** your hat **cost**?’ Ed asked Carl.', 'Ed asked Carl **how much his hat had cost**.'],
    ] },
    { type: 'warn', text: '• Không dùng trật tự câu hỏi:\n✓ I asked when **they would finish** the house.\n✗ I asked when **would they finish** the house.\n• Phân biệt **Who** làm chủ ngữ và tân ngữ:\n‘**Who saw** you?’ → He asked me **who had seen** me.\n‘**Who did** you **see**?’ → He asked me **who I had seen**.' },

    { type: 'h', text: 'Mệnh lệnh và lời yêu cầu' },
    { type: 'table', head: ['Loại', 'Trực tiếp', 'Tường thuật'], rows: [
      ['Mệnh lệnh', '‘**Put** your clothes in the drawer,’ Mum said.', 'Mum **told me to put** my clothes in the drawer.'],
      ['Mệnh lệnh phủ định', '‘**Don’t wear** the red one,’ Alice said.', 'Alice **told me not to wear** the red one.'],
      ['Yêu cầu', '‘**Will you make** me one?’ I asked Terry.', 'I **asked Terry to make** me one.'],
      ['Yêu cầu phủ định', '‘**Please don’t move** my pictures,’ said Olga.', 'Olga **asked me not to move** her pictures.'],
    ] },
    { type: 'p', text: 'Cấu trúc: **told / asked / ordered / warned + sb + (not) to + V**' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ She asked me where did I live → ✓ She asked me **where I lived**.',
      '✗ He asked me that if I was OK → ✓ He asked me **if** I was OK.',
      '✗ She told me don’t be late → ✓ She told me **not to be** late.',
      '✗ He asked me what time is it? → ✓ He asked me **what time it was**.',
    ] },
    { type: 'tip', text: 'IELTS Speaking Part 2: kể lại một cuộc trò chuyện bằng câu tường thuật nghe rất tự nhiên:\n“The interviewer **asked me why I wanted** the job, and then she **asked whether I had** any experience.”\n“My manager **told me not to worry** about it.”' },
  ],
  exercises: [
    {
      title: 'A. Chọn đáp án đúng',
      instruction: 'Chọn dạng tường thuật đúng.',
      items: [
        { t: 'mcq', q: '‘Has your brother gone out?’ → Mum asked me if my brother ___ out.', o: ['has gone', 'had gone', 'went out'], a: 1 },
        { t: 'mcq', q: '‘Do you know the answer?’ → The teacher asked Ruby if she ___ the answer.', o: ['knew', 'had known', 'does know'], a: 0 },
        { t: 'mcq', q: '‘Is this your car?’ → The police officer asked the man if it ___ his car.', o: ['is', 'was', 'were'], a: 1 },
        { t: 'mcq', q: '‘Does your laptop need a new battery?’ → Jerry asked me if my laptop ___ a new battery.', o: ['needed', 'will need', 'does need'], a: 0 },
        { t: 'mcq', q: '‘Are you having a barbecue?’ → I asked the Browns if they ___ a barbecue.', o: ['were having', 'had been having', 'are having'], a: 0 },
        { t: 'mcq', q: 'She asked me where ___.', o: ['did I live', 'I lived', 'do I live'], a: 1 },
        { t: 'mcq', q: 'The teacher told us ___ talk during the test.', o: ["don't", 'not to', 'to not'], a: 1 },
        { t: 'mcq', q: 'He asked me ___ I wanted tea or coffee.', o: ['that', 'whether', 'what'], a: 1 },
      ],
    },
    {
      title: 'B. Điền một từ',
      instruction: 'Điền một động từ khuyết thiếu (would, might, could, should).',
      items: [
        { t: 'gap', q: '‘Will you be at the party?’ → Richard asked me if I ___ be at the party.', a: ['would'] },
        { t: 'gap', q: '‘May I ask you a few questions?’ → The woman asked Ted if she ___ ask him a few questions.', a: ['might', 'could'] },
        { t: 'gap', q: '‘Can we go to the zoo tomorrow?’ → Jane asked if they ___ go to the zoo the following day.', a: ['could'] },
        { t: 'gap', q: '‘Shall I study maths or English?’ → Sally asked whether she ___ study maths or English.', a: ['should'] },
        { t: 'gap', q: '‘Can you write with your left hand?’ → Val asked me whether I ___ write with my left hand.', a: ['could'] },
        { t: 'gap', q: '‘Will our bus leave on time?’ → Mum asked the driver whether our bus ___ leave on time.', a: ['would'] },
      ],
    },
    {
      title: 'C. Viết lại câu hỏi Wh-',
      instruction: 'Viết lại thành câu tường thuật.',
      items: [
        { t: 'fix', q: '‘When did your brother join the army?’ Rudy asked me. (Rudy asked me …)', a: ['Rudy asked me when my brother had joined the army.'] },
        { t: 'fix', q: '‘How was your trip to Turkey?’ I asked Katherine. (I asked Katherine …)', a: ['I asked Katherine how her trip to Turkey had been.'] },
        { t: 'fix', q: '‘Why was Rob on TV?’ Denise asked me. (Denise asked me …)', a: ['Denise asked me why Rob had been on TV.', 'Denise asked me why Rob was on TV.'] },
        { t: 'fix', q: '‘Who saw you at the park?’ the police officer asked me.', a: ['The police officer asked me who had seen me at the park.'] },
        { t: 'fix', q: '‘Who did you see at the park?’ the police officer asked me.', a: ['The police officer asked me who I had seen at the park.'] },
      ],
    },
    {
      title: 'D. Mệnh lệnh và yêu cầu',
      instruction: 'Viết lại dùng told / asked + sb + (not) to V.',
      items: [
        { t: 'fix', q: '‘Put your clothes in the drawer,’ Mum said to me. (told)', a: ['Mum told me to put my clothes in the drawer.'] },
        { t: 'fix', q: '‘Don’t be late,’ the teacher said to us. (told)', a: ['The teacher told us not to be late.'] },
        { t: 'fix', q: '‘Please close the window,’ Anna said to me. (asked)', a: ['Anna asked me to close the window.'] },
        { t: 'fix', q: '‘Please don’t touch my laptop,’ my brother said to me. (asked)', a: ['My brother asked me not to touch his laptop.'] },
        { t: 'fix', q: '‘Will you draw me a picture?’ Jenny asked. (asked me)', a: ['Jenny asked me to draw her a picture.', 'Jenny asked me to draw a picture for her.'] },
      ],
    },
    {
      title: 'E. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng câu hỏi / mệnh lệnh tường thuật.',
      items: [
        { t: 'tr', vi: 'Người phỏng vấn hỏi tôi tại sao tôi muốn công việc này.', ref: 'The interviewer asked me why I wanted the job.', focus: 'reported Wh- question' },
        { t: 'tr', vi: 'Cô ấy hỏi tôi đã từng đến Đà Lạt chưa.', ref: 'She asked me if I had ever been to Da Lat.', focus: 'asked if + past perfect' },
        { t: 'tr', vi: 'Bác sĩ bảo tôi đừng uống cà phê vào buổi tối.', ref: 'The doctor told me not to drink coffee in the evening.', focus: 'told sb not to V' },
        { t: 'tr', vi: 'Tôi hỏi người bán hàng chiếc áo khoác đó giá bao nhiêu.', ref: 'I asked the shop assistant how much that jacket cost.', focus: 'how much + S + V' },
        { t: 'tr', vi: 'Mẹ nhờ tôi dọn phòng trước khi khách đến.', ref: 'My mum asked me to tidy my room before the guests arrived.', focus: 'asked sb to V' },
        { t: 'tr', vi: 'Anh ấy hỏi liệu chúng tôi nên đi bằng xe buýt hay tàu hỏa.', ref: 'He asked whether we should go by bus or by train.', focus: 'whether … or' },
      ],
    },
  ],
};
