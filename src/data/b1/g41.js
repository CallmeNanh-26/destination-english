// Unit 41 – Grammar: The causative (Destination B1).
export default {
  id: 'b1-u41',
  book: 'b1',
  no: 41,
  title: 'The causative',
  titleVi: 'Thể nhờ bảo: have / get sth done',
  blocks: [
    { type: 'h', text: 'Thể nhờ bảo là gì?' },
    { type: 'p', text: 'Dùng khi ta **sắp xếp / thuê người khác làm việc gì cho mình** (ta không tự làm).\nCấu trúc: **S + have (chia thì) + tân ngữ (vật) + V3/ed**\nMrs Taylor **has her car cleaned** once a month. (Người khác rửa xe cho bà ấy.)' },
    { type: 'table', head: ['Câu chủ động thường', 'Thể nhờ bảo'], rows: [
      ['Someone cleans Mrs Taylor’s car every week.', 'Mrs Taylor **has her car cleaned** every week.'],
      ['A hairdresser cut my hair yesterday.', 'I **had my hair cut** yesterday.'],
    ] },

    { type: 'h', text: 'Chia have theo thì' },
    { type: 'table', head: ['Thì', 'Ví dụ'], rows: [
      ['Hiện tại đơn', 'She **has** her car **cleaned** once a month.'],
      ['Hiện tại tiếp diễn', 'She **is having** the tyres **checked** at the moment.'],
      ['Hiện tại hoàn thành', 'She **has had** the windscreen **replaced**.'],
      ['Quá khứ đơn', 'She **had** the car **filled up** with petrol yesterday.'],
      ['Quá khứ tiếp diễn', 'She **was having** the car **repaired** when I last saw her.'],
      ['Quá khứ hoàn thành', 'She **had had** the engine **checked**.'],
      ['will / modal', 'She **will have** a car alarm **fitted** when she can afford it.\nShe **would have** air bags **put in** but it’s too expensive.'],
      ['be going to', 'She **is going to have** a new car radio **installed**.'],
      ['V-ing', 'She might stop **having** the car **cleaned** so often.'],
    ] },
    { type: 'p', text: 'Thì hoàn thành tiếp diễn thường **không** dùng với thể nhờ bảo.' },

    { type: 'tip', text: '• Có thể dùng **get** thay **have** – thân mật hơn:\nI’m going to **have** my hair cut tomorrow. (trang trọng hơn)\nI’m going to **get** my hair cut tomorrow. (thân mật hơn)\n• Dùng **by** để nói ai làm: We’re having a family photo taken **by** a local photographer.' },
    { type: 'warn', text: '• **have** luôn đứng **trước** danh từ, **V3** luôn đứng **sau** danh từ:\n✓ I had **my car repaired**. ✗ I had repaired my car. (= tôi tự sửa)\n• Câu hỏi: V3 vẫn đứng sau danh từ:\n✓ Did you have **the furniture delivered** yesterday?\n✗ Did you have delivered the furniture yesterday?\n• Nhớ dạng V3 bất quy tắc: cut → **cut**, take → **taken**, make → **made**, put → **put**.' },
    { type: 'p', text: 'Thể nhờ bảo còn dùng cho **việc không may xảy ra với mình**:\nI **had my phone stolen** on the bus. (Tôi bị trộm điện thoại.)' },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      '✗ I cut my hair yesterday (nếu thợ cắt) → ✓ I **had my hair cut** yesterday.',
      '✗ I had my car repair → ✓ I had my car **repaired**.',
      '✗ She is having cut her hair → ✓ She is having **her hair cut**.',
      '✗ We had our house paint last year → ✓ We had our house **painted** last year.',
    ] },
    { type: 'tip', text: 'IELTS Speaking Part 1 (chủ đề Hair, Shopping, Home, Technology):\n“I usually **get my hair cut** every two months.”\n“When my laptop broke, I **had it repaired** at a small shop near my house.”\n“We’re planning to **have our kitchen redecorated** next year.”' },
  ],
  exercises: [
    {
      title: 'A. Viết lại với have',
      instruction: 'Viết lại câu dùng thể nhờ bảo với have.',
      items: [
        { t: 'fix', q: 'Let’s arrange for someone to knock that wall down. (Let’s …)', a: ["Let's have that wall knocked down.", 'Let’s have that wall knocked down.'] },
        { t: 'fix', q: 'We paid someone to deliver the furniture. (We …)', a: ['We had the furniture delivered.'] },
        { t: 'fix', q: 'I’m going to pay someone to paint this wall. (I’m …)', a: ["I'm going to have this wall painted.", 'I am going to have this wall painted.', 'I’m going to have this wall painted.'] },
        { t: 'fix', q: 'Has anyone printed the invitations for you yet? (Have you …)', a: ['Have you had the invitations printed yet?'] },
        { t: 'fix', q: 'You should arrange for someone to fix your mobile. (You should …)', a: ['You should have your mobile fixed.'] },
        { t: 'fix', q: 'A vet is looking at Lucy at the moment. (They …)', a: ['They are having Lucy looked at by a vet at the moment.', "They're having Lucy looked at by a vet at the moment.", 'They’re having Lucy looked at by a vet at the moment.'] },
        { t: 'fix', q: 'I haven’t taken my suit to the dry-cleaner’s yet. (I …)', a: ["I haven't had my suit dry-cleaned yet.", 'I have not had my suit dry-cleaned yet.', 'I haven’t had my suit dry-cleaned yet.'] },
      ],
    },
    {
      title: 'B. Chia động từ',
      instruction: 'Điền dạng V3 của: clean, cut, deliver, paint, repair, sign.',
      items: [
        { t: 'gap', q: 'I have my teeth ___ by a dentist every six months.', a: ['cleaned'] },
        { t: 'gap', q: 'My mum has just had her hair ___ by a hairdresser.', a: ['cut'] },
        { t: 'gap', q: 'The car broke down, so we had it ___ by a mechanic.', a: ['repaired'] },
        { t: 'gap', q: 'Let’s get a pizza ___ before the film starts.', a: ['delivered'] },
        { t: 'gap', q: 'Did you get your book ___ by the author?', a: ['signed'] },
        { t: 'gap', q: 'Garry is going to have his face ___ blue for the party!', a: ['painted'] },
      ],
    },
    {
      title: 'C. Đúng hay sai?',
      instruction: 'Chọn cụm đúng.',
      items: [
        { t: 'mcq', q: 'Mandy ___ at the moment.', o: ['is having cut her hair', 'is having her hair cut'], a: 1 },
        { t: 'mcq', q: 'I might ___ next summer.', o: ['have the house redecorated', 'have redecorated the house'], a: 0 },
        { t: 'mcq', q: 'Our dog loves ___.', o: ['having his back scratching', 'having his back scratched'], a: 1 },
        { t: 'mcq', q: 'We’re not going to ___ for the play.', o: ['have costumes make', 'have costumes made'], a: 1 },
        { t: 'mcq', q: 'How often do you ___?', o: ['have checked your teeth', 'have your teeth checked'], a: 1 },
        { t: 'mcq', q: 'You don’t like ___, do you?', o: ['having your photo taken', 'having taken your photo'], a: 0 },
        { t: 'mcq', q: 'I’m going to ___ my hair cut tomorrow. (thân mật)', o: ['get', 'make', 'do'], a: 0 },
      ],
    },
    {
      title: 'D. Chuyển sang thể nhờ bảo',
      instruction: 'Viết lại câu bắt đầu bằng chủ ngữ cho sẵn.',
      items: [
        { t: 'fix', q: 'A mechanic is repairing my car. (I …)', a: ["I'm having my car repaired.", 'I am having my car repaired.', 'I’m having my car repaired.', 'I am having my car repaired by a mechanic.'] },
        { t: 'fix', q: 'Someone stole my bike last week. (I …)', a: ['I had my bike stolen last week.'] },
        { t: 'fix', q: 'A photographer will take our wedding photos. (We …)', a: ['We will have our wedding photos taken by a photographer.', "We'll have our wedding photos taken by a photographer.", 'We will have our wedding photos taken.'] },
        { t: 'fix', q: 'Someone has repaired the roof. (We …)', a: ['We have had the roof repaired.', "We've had the roof repaired."] },
      ],
    },
    {
      title: 'E. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng thể nhờ bảo (have / get sth done).',
      items: [
        { t: 'tr', vi: 'Tôi thường đi cắt tóc hai tháng một lần.', ref: 'I usually get my hair cut every two months.', focus: 'get sth done (IELTS Part 1)' },
        { t: 'tr', vi: 'Khi laptop bị hỏng, tôi đã mang đi sửa ở một cửa hàng gần nhà.', ref: 'When my laptop broke, I had it repaired at a shop near my house.', focus: 'have sth repaired' },
        { t: 'tr', vi: 'Tôi bị trộm điện thoại trên xe buýt.', ref: 'I had my phone stolen on the bus.', focus: 'have sth stolen' },
        { t: 'tr', vi: 'Chúng tôi dự định sơn lại nhà vào năm tới.', ref: 'We are planning to have our house repainted next year.', focus: 'have sth done (future)' },
        { t: 'tr', vi: 'Bạn đã cho người kiểm tra mắt chưa?', ref: 'Have you had your eyes tested?', focus: 'question with causative' },
        { t: 'tr', vi: 'Cô ấy đang cho người sửa xe.', ref: 'She is having her car repaired.', focus: 'present continuous causative' },
      ],
    },
  ],
};
