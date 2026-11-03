// Unit 24 – Vocabulary: People and daily life (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u24-vocab.js';

const reading = [
  {
    title: 'A day in my life',
    level: 'Dễ · ~180 từ',
    text: `My name is Minh and I'm a second-year university student in Hanoi. People often ask me what a typical day looks like, so here it is.

I wake up at six, but I don't usually get up until quarter past – I'm not a morning person! I have breakfast with my grandparents, who I live with. Then I catch the bus to university. The journey takes about forty minutes, so I use the time to catch up with my reading.

Classes finish at about three. Twice a week I volunteer at a charity that teaches English to children in my community. I love it, and it's helped me become more confident speaking in public.

In the evening I help my grandmother cook dinner, and after we eat, I wash up. My grandfather always says it's my job because I'm the youngest! Then I study for a couple of hours and chat with my friends online.

My routine is quite busy, but I have a good balance between studying, helping others and spending time with my family.`,
    items: [
      { t: 'mcq', q: 'Who does Minh live with?', o: ['his parents', 'his grandparents', 'friends', 'alone'], a: 1 },
      { t: 'tf', q: 'Minh gets out of bed as soon as he wakes up.', a: 'F', ex: '“I don’t usually get up until quarter past”' },
      { t: 'mcq', q: 'What does Minh do on the bus?', o: ['sleeps', 'catches up with his reading', 'listens to music', 'talks to friends'], a: 1 },
      { t: 'gap', q: 'He volunteers at a charity ___ a week.', a: ['twice', 'two times'] },
      { t: 'mcq', q: 'Volunteering has helped Minh…', o: ['earn money', 'become more confident speaking in public', 'find a job', 'meet his girlfriend'], a: 1 },
      { t: 'tf', q: 'Minh washes up after dinner.', a: 'T' },
    ],
  },
  {
    title: 'Small habits, big changes',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `Most of us have tried to change our lives with big promises: "From Monday, I'll go to the gym every day!" or "This year I'll read fifty books!" And most of us have failed within a few weeks. According to habit experts, the problem is that we try to change too much, too quickly.

A better approach is to start with tiny habits – changes so small that they feel almost too easy. Instead of promising to exercise for an hour, do five push-ups after you get up. Instead of reading fifty books, read one page before bed. Because these actions are so simple, you are much more likely to do them every day, and repetition is what turns an action into a habit.

Another useful technique is "habit stacking": linking a new habit to something you already do. For example: "After I put away the breakfast dishes, I will write down three things I'm grateful for." Your existing routine reminds you to do the new action.

It also helps to make good habits easy and bad habits difficult. If you want to use your phone less, leave it in another room while you study. If you want to eat more fruit, put it on the table where you can see it.

Finally, don't worry if you miss a day. Research suggests it takes, on average, around two months to form a new habit, and missing one day doesn't make much difference. What matters is getting back on track the next day. Small habits, repeated over time, can lead to surprisingly big changes.`,
    items: [
      { t: 'mcq', q: 'Why do big promises often fail?', o: ['People are lazy.', 'We try to change too much too quickly.', 'They are too expensive.', 'Nobody helps us.'], a: 1 },
      { t: 'mcq', q: 'Which is an example of a “tiny habit”?', o: ['exercising for an hour', 'reading fifty books', 'doing five push-ups after you get up', 'going to the gym daily'], a: 2 },
      { t: 'mcq', q: '“Habit stacking” means…', o: ['doing many habits at once', 'linking a new habit to an existing one', 'stopping bad habits', 'writing habits on a list'], a: 1 },
      { t: 'tf', q: 'Leaving your phone in another room can help you use it less.', a: 'T' },
      { t: 'gap', q: 'It takes around ___ months on average to form a new habit.', a: ['two', '2'] },
      { t: 'tf', q: 'Missing one day completely ruins a new habit.', a: 'F' },
    ],
  },
  {
    title: 'Keeping traditions alive',
    level: 'Trung bình · ~320 từ',
    text: `In a small village in northern Vietnam, a group of teenagers gathers every Sunday afternoon in the community hall. They are not there to play video games or chat online. They are learning to sing quan họ, a traditional form of folk music that is hundreds of years old.

"When I was younger, I thought it was boring – something only old people liked," admits Lan, 16. "But my grandmother persuaded me to try. Now I love it. When we sing together, I feel connected to the people who sang these songs centuries ago."

Around the world, many communities are worried that their traditions are disappearing. As young people move to cities for work and spend more time on their phones, fewer of them learn the songs, crafts, recipes and festivals of their grandparents. Some experts estimate that half of the world's languages may disappear by the end of this century.

However, there are also signs of hope. In many places, young people are finding new ways to keep traditions alive. Some post videos of traditional dances on social media, where they attract millions of viewers. Others combine old and new – a band in Hanoi mixes traditional instruments with electronic music, and their concerts are always sold out. Governments and charities are also helping by organising festivals and paying older masters to teach their skills.

Of course, not every tradition should be kept. Some old customs are unfair or even harmful, and societies change for good reasons. But many traditions give people a sense of identity and belonging that is especially valuable in a fast-changing world.

For Lan, the answer is simple. "Traditions only die if nobody cares about them. If young people take part, they'll stay alive – maybe a little different, but alive."`,
    items: [
      { t: 'mcq', q: 'What do the teenagers learn on Sunday afternoons?', o: ['video games', 'quan họ folk singing', 'traditional cooking', 'English'], a: 1 },
      { t: 'tf', q: 'Lan always loved traditional music.', a: 'F' },
      { t: 'mcq', q: 'Why are traditions disappearing in many places?', o: ['Governments ban them.', 'Young people move to cities and spend time on phones.', 'They are too expensive.', 'Old people don’t want to teach.'], a: 1 },
      { t: 'gap', q: 'Some experts estimate that ___ of the world’s languages may disappear this century.', a: ['half'] },
      { t: 'mcq', q: 'How does the band in Hanoi keep traditions alive?', o: ['by mixing traditional instruments with electronic music', 'by singing only old songs', 'by teaching in schools', 'by banning modern music'], a: 0 },
      { t: 'tf', q: 'The writer believes every tradition should be kept.', a: 'F' },
      { t: 'mcq', q: 'According to Lan, traditions die when…', o: ['they change', 'nobody cares about them', 'governments stop paying', 'young people move away'], a: 1 },
    ],
  },
  {
    title: 'Crime and second chances',
    level: 'Trung bình–Khó · ~370 từ',
    text: `At the age of nineteen, David Hughes was sent to prison for breaking into houses. By the time he was released three years later, he had no qualifications, no job and very few friends who weren't criminals themselves. "Everyone expected me to go back to prison," he says. "To be honest, so did I."

David's situation is far from unusual. In many countries, around half of all people who leave prison commit another crime within a few years. Experts say the reasons are complicated. Former prisoners often find it extremely difficult to get a job, since many employers won't hire anyone with a criminal record. Without work, some return to crime simply to survive. Others go back to the same neighbourhoods and the same friends who got them into trouble in the first place.

However, some countries have very different results. In Norway, fewer than one in five former prisoners commit a new crime within two years – one of the lowest rates in the world. Norwegian prisons focus strongly on education and training. Prisoners can take courses, learn skills such as cooking or carpentry and prepare for life after release. Critics have accused the system of being too soft. Supporters reply that the aim of prison should not only be to punish people, but to make sure they don't harm society again.

David was lucky. A charity offered him a place on a training programme for young offenders, and a local café owner agreed to give him a job. "She knew about my past, but she said everyone deserves a second chance," David remembers. "Nobody had ever trusted me like that before. I didn't want to let her down."

Today, David is in his thirties and runs his own business. He also visits prisons to talk to young men about his experience. "I don't try to tell them that what I did was OK. It wasn't. I'm responsible for my choices, and I paid for them. But I tell them that the past doesn't have to decide the future – as long as somebody gives you a chance, and you take it."`,
    items: [
      { t: 'gap', q: 'David was sent to prison at the age of ___.', a: ['nineteen', '19'] },
      { t: 'mcq', q: 'What crime did David commit?', o: ['robbing a bank', 'breaking into houses', 'stealing cars', 'selling drugs'], a: 1 },
      { t: 'mcq', q: 'Why do many former prisoners return to crime?', o: ['They enjoy it.', 'They find it hard to get a job, and return to old friends.', 'Prisons are comfortable.', 'Their families encourage them.'], a: 1 },
      { t: 'tf', q: 'Norway has one of the lowest re-offending rates in the world.', a: 'T' },
      { t: 'mcq', q: 'What do Norwegian prisons focus on?', o: ['hard physical work', 'education and training', 'long sentences', 'isolation'], a: 1 },
      { t: 'tf', q: 'Everyone agrees that the Norwegian system is a good idea.', a: 'F', ex: 'Critics accused it of being too soft.' },
      { t: 'mcq', q: 'Who gave David a job?', o: ['a charity', 'a café owner', 'his father', 'the government'], a: 1 },
      { t: 'mcq', q: 'What is David’s message to young prisoners?', o: ['Crime is acceptable.', 'The past doesn’t have to decide the future.', 'Prison is easy.', 'Never trust anyone.'], a: 1 },
    ],
  },
  {
    title: 'The loneliness epidemic',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `We live in the most connected age in human history. We can send a message to the other side of the world in seconds and have hundreds of "friends" online. Yet surveys in many countries suggest that loneliness is increasing, so much so that some health experts now describe it as an epidemic. In 2018, the UK even appointed a government minister responsible for loneliness.

Loneliness is not the same as being alone. Many people enjoy spending time by themselves. Loneliness is the painful feeling that our social relationships are not as close or meaningful as we want them to be. It can affect anyone, but research shows it is surprisingly common among young adults in their late teens and twenties, as well as among older people who live alone.

The causes are complex. Populations in many cities are increasingly made up of people living alone. People move more often for work or study, leaving behind family and old friends. Traditional places where communities used to meet – local shops, clubs, religious centres – have become less important in many people's lives. And while social media allows us to stay in touch, some studies suggest that passive scrolling, rather than real interaction, can make people feel more isolated, as they compare their ordinary lives with the perfect images of others.

The effects on health are serious. Long-term loneliness has been linked to heart disease, depression and poor sleep, and some researchers believe its impact on life expectancy is comparable to that of smoking or obesity.

Fortunately, there are many ways to respond. Some cities have introduced "social prescribing", in which doctors can send lonely patients to community activities, such as gardening groups, choirs or volunteering, rather than simply giving them medicine. In the Netherlands, some supermarkets have opened "chat checkouts", where customers who are in no hurry can talk to the cashier. Projects that bring together young and old people – for example, students living in care homes in exchange for cheaper rent – have proved popular and beneficial for both generations.

Individuals can make a difference too. Experts suggest that small, regular contact matters more than occasional big events: a chat with a neighbour, a call to a grandparent, inviting a new classmate to lunch. Volunteering is another powerful option, because helping others gives people both purpose and connection. In a world full of screens, it seems, the simplest human acts – listening, sharing a meal, smiling at a stranger – may be among the most important.`,
    items: [
      { t: 'mcq', q: 'What did the UK do in 2018?', o: ['banned social media', 'appointed a minister responsible for loneliness', 'built new care homes', 'closed clubs'], a: 1 },
      { t: 'tf', q: 'Being alone and being lonely are the same thing.', a: 'F' },
      { t: 'mcq', q: 'Which groups are especially affected by loneliness?', o: ['children under ten', 'young adults and older people living alone', 'married couples', 'office workers only'], a: 1 },
      { t: 'mcq', q: 'According to some studies, what kind of social media use can increase isolation?', o: ['video calls', 'passive scrolling', 'group chats', 'sharing photos with family'], a: 1 },
      { t: 'tf', q: 'Loneliness may affect life expectancy as much as smoking.', a: 'T' },
      { t: 'mcq', q: 'What is “social prescribing”?', o: ['giving lonely people medicine', 'doctors sending lonely patients to community activities', 'a social media app', 'free phone calls'], a: 1 },
      { t: 'gap', q: 'In the Netherlands, some supermarkets have “___ checkouts”.', a: ['chat'] },
      { t: 'mcq', q: 'According to experts, what matters most for individuals?', o: ['occasional big parties', 'small, regular contact', 'having many online friends', 'moving to a new city'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Community centre announcement',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Thông báo hoạt động tại trung tâm cộng đồng. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-LibbyNeural' },
    script: [
      ['N', 'Welcome to Greenfield Community Centre. Here is some information about our activities this month.'],
      ['N', 'Our youth club meets every Tuesday and Thursday from six to eight in the evening. It is free for everyone aged twelve to eighteen.'],
      ['N', 'On Saturday the twentieth, we are holding a charity fun run in the park. All the money will go to the local children’s hospital. The run starts at nine o’clock.'],
      ['N', 'We are also looking for volunteers to help older residents with their shopping. If you would like to help, please speak to Margaret at reception.'],
      ['N', 'Thank you, and we hope to see you soon.'],
    ],
    items: [
      { t: 'mcq', q: 'When does the youth club meet?', o: ['Monday and Wednesday', 'Tuesday and Thursday', 'every weekend', 'Friday only'], a: 1 },
      { t: 'gap', q: 'The youth club is for people aged twelve to ___.', a: ['18', 'eighteen'] },
      { t: 'gap', q: 'The charity fun run is on Saturday the ___.', a: ['20th', 'twentieth', '20'] },
      { t: 'mcq', q: 'Where will the money go?', o: ['the community centre', 'the local children’s hospital', 'the youth club', 'a school'], a: 1 },
      { t: 'gap', q: 'Speak to ___ at reception if you want to volunteer.', a: ['Margaret'] },
    ],
    dictation: ['It is free for everyone aged twelve to eighteen.', 'All the money will go to the local children’s hospital.', 'Please speak to Margaret at reception.'],
  },
  {
    title: 'Talk: My morning routine',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một người chia sẻ thói quen buổi sáng đã thay đổi cuộc sống.',
    rate: '-5%',
    voices: { N: 'en-US-GuyNeural' },
    script: [
      ['N', "A year ago, my mornings were terrible. I used to wake up late, check my phone in bed for half an hour, and then rush to work without breakfast. I was always stressed."],
      ['N', "So I decided to change my routine. Now I get up at six every day, even at weekends. The first thing I do is drink a big glass of water. I don't touch my phone until after breakfast."],
      ['N', "Then I go for a twenty-minute walk. It's the best part of my day. Sometimes I listen to a podcast, but usually I just enjoy the quiet."],
      ["N", "After that, I have a proper breakfast and plan my day. I write down the three most important things I need to do."],
      ['N', "It wasn't easy at first, but after about two months it became a habit. I feel much calmer now, and I get a lot more done."],
    ],
    items: [
      { t: 'mcq', q: 'What did he use to do in bed?', o: ['read a book', 'check his phone', 'listen to music', 'plan his day'], a: 1 },
      { t: 'gap', q: 'Now he gets up at ___ every day.', a: ['6', 'six'] },
      { t: 'mcq', q: 'What is the first thing he does?', o: ['checks his phone', 'drinks a glass of water', 'goes for a walk', 'has breakfast'], a: 1 },
      { t: 'gap', q: 'His walk lasts ___ minutes.', a: ['20', 'twenty'] },
      { t: 'gap', q: 'He writes down the ___ most important things to do.', a: ['three', '3'] },
      { t: 'tf', q: 'The new routine became a habit after about two months.', a: 'T' },
    ],
  },
  {
    title: 'Conversation: New neighbours',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Hai người hàng xóm mới gặp nhau.',
    rate: '+0%',
    voices: { Sarah: 'en-GB-SoniaNeural', Tom: 'en-GB-RyanNeural' },
    script: [
      ['Sarah', "Hi! You must be the new neighbours. I'm Sarah, from number twelve."],
      ['Tom', "Oh, hello! Yes, I'm Tom. We moved in on Saturday. My wife's inside, putting things away."],
      ['Sarah', "Welcome to the street! How are you settling in?"],
      ['Tom', "Slowly! There are boxes everywhere. But it seems like a really friendly neighbourhood."],
      ['Sarah', "It is. Most people have lived here for years. Actually, we have a street party every summer – it's a bit of a tradition. It's in three weeks, on the fifteenth. You should come!"],
      ['Tom', "That sounds lovely. What do we need to bring?"],
      ['Sarah', "Just some food to share. Everyone brings something. Oh, and one thing you should know: the rubbish is collected on Wednesday mornings, so put your bins out on Tuesday night."],
      ['Tom', "Good to know. Thanks. Is there a good supermarket nearby?"],
      ['Sarah', "There's a small one at the end of the street, but the big one is about ten minutes' walk, next to the station."],
      ['Tom', "Great. Well, it was nice to meet you, Sarah. Please come round for a coffee when we've unpacked!"],
      ['Sarah', "I'd love to. Good luck with the boxes!"],
    ],
    items: [
      { t: 'gap', q: 'Sarah lives at number ___.', a: ['12', 'twelve'] },
      { t: 'mcq', q: 'When did Tom move in?', o: ['on Friday', 'on Saturday', 'last month', 'yesterday'], a: 1 },
      { t: 'gap', q: 'The street party is on the ___.', a: ['15th', 'fifteenth', '15'] },
      { t: 'mcq', q: 'What should Tom bring to the party?', o: ['drinks', 'some food to share', 'music', 'nothing'], a: 1 },
      { t: 'mcq', q: 'When should he put the bins out?', o: ['Monday morning', 'Tuesday night', 'Wednesday night', 'Saturday'], a: 1 },
      { t: 'mcq', q: 'Where is the big supermarket?', o: ['at the end of the street', 'next to the station', 'next to the park', 'in the town centre'], a: 1 },
    ],
    dictation: ['We moved in on Saturday.', "It's a bit of a tradition."],
  },
  {
    title: 'Radio interview: Volunteering abroad',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một người trẻ đã dành một năm làm tình nguyện.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Liam: 'en-AU-WilliamNeural' },
    script: [
      ['Presenter', "My guest today is Liam Carter, who spent a year volunteering in a village in Cambodia after finishing school. Liam, why did you decide to go?"],
      ['Liam', "Honestly, I didn't know what I wanted to study at university. I was eighteen, and I felt I needed to see more of the world before making that decision. A friend told me about a charity that needed English teachers."],
      ['Presenter', "What was your typical day like?"],
      ['Liam', "I got up at five thirty, because it gets very hot later. I taught children in the morning and adults in the evening, after they finished work in the fields. In the afternoons I helped build a new classroom."],
      ['Presenter', "What was the most difficult part?"],
      ['Liam', "At first, the culture shock. Everything was unfamiliar: the language, the food, even the way people greeted each other. I made lots of mistakes. Once I accidentally offended an old man by pointing my feet at him while I was sitting. But people were very patient and forgave me."],
      ['Presenter', "Some people criticise short-term volunteering abroad. What do you think?"],
      ['Liam', "It's a fair criticism. Some programmes are more about the volunteers than the community. I'd say, choose a charity that works with local people, stay as long as you can, and go to learn, not to save anyone."],
      ['Presenter', "And did it help you decide what to study?"],
      ['Liam', "Definitely. I'm now training to be a teacher. And I'm still in touch with many of my students."],
    ],
    items: [
      { t: 'mcq', q: 'Why did Liam decide to volunteer?', o: ['to earn money', 'he wasn’t sure what to study and wanted to see the world', 'his school required it', 'to learn Cambodian'], a: 1 },
      { t: 'gap', q: 'Liam got up at five ___.', a: ['thirty', '30'] },
      { t: 'mcq', q: 'Who did he teach in the evening?', o: ['children', 'adults', 'other volunteers', 'nobody'], a: 1 },
      { t: 'mcq', q: 'What did he do in the afternoons?', o: ['slept', 'helped build a classroom', 'studied Khmer', 'worked in the fields'], a: 1 },
      { t: 'tf', q: 'Liam once offended an old man by mistake.', a: 'T' },
      { t: 'mcq', q: 'What is Liam’s advice for volunteers?', o: ['Go for a short time.', 'Choose a charity that works with locals and go to learn.', 'Go to save people.', 'Only volunteer in your own country.'], a: 1 },
      { t: 'mcq', q: 'What is Liam doing now?', o: ['working for the charity', 'training to be a teacher', 'travelling', 'studying medicine'], a: 1 },
    ],
  },
  {
    title: 'Discussion: Should voting be compulsory?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về việc có nên bắt buộc đi bầu cử.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Grace: 'en-AU-NatashaNeural', Martin: 'en-US-GuyNeural' },
    script: [
      ['Host', "Good evening. In some countries, including Australia, voting in elections is compulsory, and people who don't vote can be fined. In others, fewer than half of young people vote. Should voting be compulsory? With me are Grace Taylor, a political scientist from Sydney, and Martin Cole, who campaigns for individual freedom. Grace?"],
      ['Grace', "In Australia, compulsory voting has been in place since 1924, and around ninety per cent of people vote. The big advantage is that the government represents everyone, not just the groups who are most likely to vote, which tend to be older and wealthier people. Politicians can't ignore the young or the poor, because they know those people will vote too."],
      ['Host', "Martin, you disagree."],
      ['Martin', "I do. I think the right to vote should include the right not to vote. If people don't feel any of the candidates represent them, forcing them to choose one seems wrong. And people who are forced to vote may not take the time to understand the issues. They might just pick a name at random."],
      ['Grace', "That's a common argument, but the research doesn't really support it. Once people have to vote, they tend to become more interested in politics, not less. And in Australia you can always spoil your ballot paper if you really don't want to choose anyone. You just have to turn up."],
      ['Martin', "Even so, I'd rather see governments solve the real problem: why so many young people feel politics has nothing to do with them. Make voting easier – online voting, voting at weekends – and teach politics properly at school."],
      ['Grace', "I'd agree with all of that. I just don't think it's either-or. You can do those things and make voting compulsory."],
      ['Host', "So, briefly: compulsory or not?"],
      ['Martin', "Not compulsory, but much easier and better explained."],
      ['Grace', "Compulsory, because democracy works best when everyone takes part."],
      ['Host', "Grace Taylor and Martin Cole, thank you both."],
    ],
    items: [
      { t: 'gap', q: 'Compulsory voting in Australia started in ___.', a: ['1924'] },
      { t: 'gap', q: 'Around ___ per cent of Australians vote.', a: ['90', 'ninety'] },
      { t: 'mcq', q: 'According to Grace, what is the main advantage of compulsory voting?', o: ['It saves money.', 'The government represents everyone.', 'Elections are faster.', 'Politicians become richer.'], a: 1 },
      { t: 'mcq', q: 'What is Martin’s first argument?', o: ['Voting is too expensive.', 'The right to vote should include the right not to vote.', 'Young people shouldn’t vote.', 'Elections are unfair.'], a: 1 },
      { t: 'tf', q: 'Grace says research shows compulsory voting makes people less interested in politics.', a: 'F' },
      { t: 'mcq', q: 'What does Martin suggest instead?', o: ['banning elections', 'making voting easier and teaching politics at school', 'fining non-voters', 'lowering the voting age to 12'], a: 1 },
      { t: 'mcq', q: 'What is Grace’s final position?', o: ['not compulsory', 'compulsory, because democracy works best when everyone takes part', 'only online voting', 'she has no opinion'], a: 1 },
    ],
    dictation: ['The right to vote should include the right not to vote.', 'Democracy works best when everyone takes part.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: admit, arrest, charity, community, habit, illegal, population, responsible, steal, tradition',
    items: [
      { t: 'gap', q: 'It is ___ to drive without a licence.', a: ['illegal'] },
      { t: 'gap', q: 'Someone ___ my bike last night.', a: ['stole'] },
      { t: 'gap', q: 'The police ___ two men outside the bank.', a: ['arrested'] },
      { t: 'gap', q: 'He finally ___ that he had lied.', a: ['admitted'] },
      { t: 'gap', q: 'Biting your nails is a bad ___.', a: ['habit'] },
      { t: 'gap', q: 'The ___ of Ho Chi Minh City is over 9 million.', a: ['population'] },
      { t: 'gap', q: 'Who is ___ for cleaning the classroom today?', a: ['responsible'] },
      { t: 'gap', q: 'We raised money for a ___ that helps homeless people.', a: ['charity'] },
      { t: 'gap', q: 'Giving lucky money at Tet is an old ___.', a: ['tradition'] },
      { t: 'gap', q: 'The new library is great for the local ___.', a: ['community'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: break into, catch up, get away with, get up, move in, put away, wake up, wash up (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'Thieves ___ our house while we were on holiday.', a: ['broke into'] },
      { t: 'gap', q: 'I missed two lessons, so I need to ___ with the class.', a: ['catch up'] },
      { t: 'gap', q: 'He cheated and ___ it – nobody noticed!', a: ['got away with'] },
      { t: 'gap', q: 'I ___ at 5 a.m. because of the noise, but I didn’t ___ until 7. (2 phần, cách nhau …)', a: ['woke up … get up', 'woke up get up'] },
      { t: 'gap', q: 'New neighbours ___ next door last week.', a: ['moved in'] },
      { t: 'gap', q: 'Please ___ your toys before bed.', a: ['put away'] },
      { t: 'gap', q: 'It’s your turn to ___ after dinner.', a: ['wash up'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'It’s ___ the law to smoke in hospitals.', o: ['against', 'without', 'under'], a: 0 },
      { t: 'mcq', q: 'She learnt to drive ___ the age of 18.', o: ['in', 'on', 'at'], a: 2 },
      { t: 'mcq', q: 'I get nervous when I speak ___ public.', o: ['on', 'in', 'at'], a: 1 },
      { t: 'mcq', q: 'She accused me ___ lying.', o: ['for', 'of', 'about'], a: 1 },
      { t: 'mcq', q: 'Don’t blame me ___ your mistakes!', o: ['for', 'of', 'on'], a: 0 },
      { t: 'mcq', q: 'They blamed the accident ___ the weather.', o: ['for', 'on', 'of'], a: 1 },
      { t: 'mcq', q: 'He was found guilty ___ robbery.', o: ['for', 'of', 'with'], a: 1 },
      { t: 'mcq', q: 'My dad was angry ___ me about my results.', o: ['with', 'at to', 'for'], a: 0 },
      { t: 'mcq', q: 'I share a room ___ my sister.', o: ['to', 'with', 'for'], a: 1 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'The view from the top was ___! (BELIEF)', a: ['unbelievable'] },
      { t: 'gap', q: 'It was a ___ decision to report the crime. (COURAGE)', a: ['courageous'] },
      { t: 'gap', q: 'The next ___ is in two years. (ELECT)', a: ['election'] },
      { t: 'gap', q: 'We should fight for gender ___. (EQUAL)', a: ['equality'] },
      { t: 'gap', q: 'Luckily, everyone was still ___ after the accident. (LIFE)', a: ['alive'] },
      { t: 'gap', q: 'What ___ are you? – I’m Vietnamese. (NATION)', a: ['nationality'] },
      { t: 'gap', q: 'The protest was completely ___. (PEACE)', a: ['peaceful'] },
      { t: 'gap', q: 'The two ___ escaped from the prison. (PRISON)', a: ['prisoners'] },
      { t: 'gap', q: 'They finally reached an ___. (AGREE)', a: ['agreement'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['commit', 'a crime'], ['break', 'a habit'], ['go to', 'prison'], ['raise money', 'for charity'], ['keep', 'a tradition alive'], ['vote', 'in an election'], ['a busy', 'schedule'], ['a daily', 'routine']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “illegal”:', o: ['legal', 'social', 'typical', 'familiar'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “admit”:', o: ['deny', 'accuse', 'blame', 'vote'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “in touch with”:', o: ['in contact with', 'in public', 'against the law', 'in response to'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “familiar”:', o: ['unfamiliar', 'typical', 'responsible', 'social'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “in public”:', o: ['in private', 'in touch', 'in response', 'at the age of'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “wake up”:', o: ['fall asleep', 'get up', 'catch up', 'move in'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Kẻ trộm đã đột nhập vào nhà hàng xóm của tôi tối qua.', ref: "Thieves broke into my neighbour's house last night.", focus: 'break into' },
      { t: 'tr', vi: 'Ở Việt Nam, đi xe máy không đội mũ bảo hiểm là trái luật.', ref: "In Vietnam, it's against the law to ride a motorbike without a helmet.", focus: 'against the law' },
      { t: 'tr', vi: 'Cô ấy buộc tội tôi đã lấy điện thoại của cô ấy.', ref: 'She accused me of taking her phone.', focus: 'accuse sb of + -ing' },
      { t: 'tr', vi: 'Tôi thường thức dậy lúc 6 giờ nhưng 6 giờ 15 mới ra khỏi giường.', ref: "I usually wake up at six, but I don't get up until quarter past.", focus: 'wake up vs get up' },
      { t: 'tr', vi: 'Thói quen hàng ngày của tôi khá bận rộn.', ref: 'My daily routine is quite busy.', focus: 'routine' },
      { t: 'tr', vi: 'Chính phủ nên làm nhiều hơn để giúp người cao tuổi sống một mình.', ref: 'The government should do more to help elderly people who live alone.', focus: 'government (IELTS)' },
      { t: 'tr', vi: 'Hãy giữ liên lạc sau khi tốt nghiệp nhé.', ref: "Let's keep in touch after we graduate.", focus: 'in touch' },
      { t: 'tr', vi: 'Anh ấy bắt đầu làm tình nguyện ở tuổi 16.', ref: 'He started volunteering at the age of 16.', focus: 'at the age of' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Describe your typical day.' },
  { part: 'Part 1', q: 'Are you a morning person or an evening person?' },
  { part: 'Part 1', q: 'Do you know your neighbours well?' },
  { part: 'Part 1', q: 'Have you ever done any volunteer work?' },
  { part: 'Part 2', q: 'Describe a tradition in your country that you enjoy.', cue: ['what the tradition is', 'when and how people celebrate it', 'what you usually do', 'and explain why you enjoy it'] },
  { part: 'Part 3', q: 'Why do some young people lose interest in traditional customs?' },
  { part: 'Part 3', q: 'What can governments do to reduce crime?' },
  { part: 'Part 3', q: 'Do you think people are lonelier today than in the past?' },
  { part: 'Part 3', q: 'Should young people be encouraged to take part in community activities?' },
];

export default {
  id: 'b1-u24',
  book: 'b1',
  no: 24,
  title: 'People and daily life',
  titleVi: 'Con người & đời sống hàng ngày',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
