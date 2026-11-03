// Unit 11 – Grammar: The passive 2 (continuous, perfect, be going to, modals; by/with) (Destination B1).
export default {
  id: 'b1-u11',
  book: 'b1',
  no: 11,
  title: 'The passive 2',
  titleVi: 'Câu bị động 2 (tiếp diễn, hoàn thành, be going to, động từ khuyết thiếu)',
  blocks: [
    { type: 'p', text: 'Vẫn là công thức **be (chia theo thì) + V3**. Chỉ cần chia **be** đúng thì.' },
    { type: 'table', head: ['Thì / dạng', 'Chủ động', 'Bị động'], rows: [
      ['Hiện tại tiếp diễn', 'My aunt is doing the washing-up.', 'The washing-up **is being done** by my aunt.'],
      ['Hiện tại hoàn thành', 'My cousin has sent the invitations.', 'The invitations **have been sent** by my cousin.'],
      ['Quá khứ tiếp diễn', 'My uncle was cleaning the car.', 'The car **was being cleaned** by my uncle.'],
      ['Quá khứ hoàn thành', 'Our neighbours had taken the twins to the zoo.', 'The twins **had been taken** to the zoo.'],
      ['be going to', "They're going to invite Phil.", 'Phil **is going to be invited**.'],
      ['might / should / must / can', 'They might invite Kyle. / We must tell Dominic.', 'Kyle **might be invited**. / Dominic **must be told**.'],
    ] },
    { type: 'tip', text: 'Mẹo: tiếp diễn → thêm **being**; hoàn thành → thêm **been**; modal → **modal + be + V3**.\nis doing → is **being** done · has sent → has **been** sent · must tell → must **be** told' },

    { type: 'h', text: 'by và with' },
    { type: 'table', head: ['', 'Ví dụ'], rows: [
      ['**by** + người/vật **thực hiện** hành động (khi muốn nhấn mạnh)', 'My sister’s bedroom was painted **by** my parents.'],
      ['**with** + **dụng cụ** được dùng', 'Soup is usually eaten **with** a spoon.'],
      ['Không dùng by/with khi không cần biết ai làm', 'Mrs Fisher was taken to hospital yesterday.'],
    ] },

    { type: 'h', text: 'Lỗi người Việt hay mắc' },
    { type: 'list', items: [
      'Quên “being”: ✗ The road is repaired at the moment. → ✓ The road **is being repaired** at the moment.',
      'Quên “been”: ✗ The tickets have sold. → ✓ The tickets **have been sold**.',
      'Modal + V3 thiếu be: ✗ It must done today. → ✓ It must **be done** today.',
      'Thêm “by people / by someone” thừa: ✗ My phone was stolen by someone. → ✓ My phone was stolen.',
    ] },
    { type: 'tip', text: 'IELTS Writing Task 2 dùng bị động + modal rất hiệu quả: “Stricter laws **should be introduced**…”, “More money **must be invested** in public transport.” Task 1: “The number of cars **has been increasing**…”, “A new park **is going to be built**…”' },
  ],
  exercises: [
    {
      title: 'A. Chọn dạng bị động đúng',
      instruction: 'Chọn đáp án đúng.',
      items: [
        { t: 'mcq', q: 'The road ___ at the moment, so we have to take another route.', o: ['is repaired', 'is being repaired', 'has repaired'], a: 1 },
        { t: 'mcq', q: 'All the tickets ___ already.', o: ['have been sold', 'have sold', 'are being sold'], a: 0 },
        { t: 'mcq', q: 'This form must ___ in black ink.', o: ['complete', 'be completed', 'been completed'], a: 1 },
        { t: 'mcq', q: 'When we arrived, the food ___ already ___.', o: ['had / been eaten', 'was / eating', 'has / eaten'], a: 0 },
        { t: 'mcq', q: 'A new shopping centre ___ next to the station.', o: ['is going to build', 'is going to be built', 'is going to be build'], a: 1 },
        { t: 'mcq', q: 'The cake was cut ___ a knife.', o: ['by', 'with', 'from'], a: 1 },
        { t: 'mcq', q: 'The song was written ___ a famous Vietnamese composer.', o: ['by', 'with', 'of'], a: 0 },
        { t: 'mcq', q: 'I felt like I ___ while I was walking home.', o: ['was being followed', 'was followed', 'had followed'], a: 0 },
        { t: 'mcq', q: 'Phones ___ in the exam room.', o: ["can't use", "can't be used", "can't been used"], a: 1 },
        { t: 'mcq', q: 'Has the winner ___ yet?', o: ['been chosen', 'chosen', 'being chosen'], a: 0 },
      ],
    },
    {
      title: 'B. Chia động từ ở dạng bị động',
      instruction: 'Dùng thì / dạng được gợi ý trong ngoặc.',
      items: [
        { t: 'gap', q: 'The house ___ (paint) right now. (hiện tại tiếp diễn)', a: ['is being painted'] },
        { t: 'gap', q: 'Your order ___ (send). It will arrive tomorrow. (hiện tại hoàn thành)', a: ['has been sent'] },
        { t: 'gap', q: 'The patient ___ (examine) when I arrived. (quá khứ tiếp diễn)', a: ['was being examined'] },
        { t: 'gap', q: 'The window ___ (break) before we moved in. (quá khứ hoàn thành)', a: ['had been broken'] },
        { t: 'gap', q: 'The match ___ (show) live on TV tonight. (be going to)', a: ['is going to be shown'] },
        { t: 'gap', q: 'This problem should ___ (solve) as soon as possible.', a: ['be solved'] },
        { t: 'gap', q: 'The museum might ___ (close) for repairs.', a: ['be closed'] },
        { t: 'gap', q: 'Thousands of trees ___ (cut down) in the last ten years. (hiện tại hoàn thành)', a: ['have been cut down'] },
      ],
    },
    {
      title: 'C. Viết lại câu ở dạng bị động',
      instruction: 'Viết lại cả câu. Bỏ người thực hiện nếu không cần thiết.',
      items: [
        { t: 'fix', q: 'They are building a new hospital in my town.', a: ['A new hospital is being built in my town.'] },
        { t: 'fix', q: 'Someone has eaten my sandwich!', a: ['My sandwich has been eaten!'] },
        { t: 'fix', q: 'You must wear a helmet.', a: ['A helmet must be worn.'] },
        { t: 'fix', q: 'They were interviewing the singer when the lights went out.', a: ['The singer was being interviewed when the lights went out.'] },
        { t: 'fix', q: 'They are going to close the road tomorrow.', a: ['The road is going to be closed tomorrow.'] },
        { t: 'fix', q: 'We should protect the environment.', a: ['The environment should be protected.'] },
      ],
    },
    {
      title: 'D. Dịch câu Việt → Anh (AI chấm)',
      instruction: 'Dùng câu bị động phù hợp.',
      items: [
        { t: 'tr', vi: 'Một cây cầu mới đang được xây dựng qua sông Hồng.', ref: 'A new bridge is being built across the Red River.', focus: 'present continuous passive' },
        { t: 'tr', vi: 'Tất cả vé đã được bán hết.', ref: 'All the tickets have been sold.', focus: 'present perfect passive' },
        { t: 'tr', vi: 'Điện thoại phải được tắt trong phòng thi.', ref: 'Phones must be switched off in the exam room.', focus: 'modal passive' },
        { t: 'tr', vi: 'Chính phủ nên đầu tư thêm tiền vào giáo dục. (dùng bị động)', ref: 'More money should be invested in education.', focus: 'should be + V3 (IELTS)' },
        { t: 'tr', vi: 'Khi chúng tôi đến thì bữa tiệc đã được dọn dẹp.', ref: 'When we arrived, the party had been cleared up.', focus: 'past perfect passive' },
        { t: 'tr', vi: 'Bức tranh này được vẽ bởi một nghệ sĩ trẻ người Việt.', ref: 'This painting was painted by a young Vietnamese artist.', focus: 'by + agent' },
      ],
    },
  ],
};
