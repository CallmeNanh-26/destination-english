// Unit 12 – Vocabulary: Friends and relations (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u12-vocab.js';

const reading = [
  {
    title: 'My best friend',
    level: 'Dễ · ~170 từ',
    text: `My best friend is called Linh. We met on our first day at secondary school, when we were eleven. I was sitting by myself because I didn't know anybody, and she came over and introduced herself. We've been close friends ever since.

Linh and I have a lot in common. We both love music, we're both crazy about cats, and we both hate getting up early! But we are also quite different. She is very confident and talks to strangers easily, while I am shy. She helps me to be braver, and I help her to be more patient.

Of course, we don't always get on. Last year we fell out over something silly – I forgot her birthday. She didn't speak to me for a week. In the end, I apologised and bought her a cake, and she forgave me.

Now we study at different universities, but we stay in contact every day. I trust her completely, and I know she will never let me down.`,
    items: [
      { t: 'gap', q: 'The writer met Linh when they were ___ years old.', a: ['eleven', '11'] },
      { t: 'mcq', q: 'How did they meet?', o: ['Their parents introduced them.', 'Linh introduced herself.', 'They were neighbours.', 'They met online.'], a: 1 },
      { t: 'tf', q: 'The writer and Linh have exactly the same personality.', a: 'F', ex: '“we are also quite different”' },
      { t: 'mcq', q: 'Why did they fall out?', o: ['Linh lied.', 'The writer forgot Linh’s birthday.', 'They argued about music.', 'Linh moved away.'], a: 1 },
      { t: 'tf', q: 'Linh forgave the writer.', a: 'T' },
      { t: 'tf', q: 'They go to the same university now.', a: 'F' },
    ],
  },
  {
    title: 'Living with flatmates: a survival guide',
    level: 'Dễ–Trung bình · ~260 từ',
    text: `Moving out of your parents' home and renting a flat with friends is an exciting step towards becoming independent. But sharing a home is not always easy. Even close friends can fall out when they live together. Here are some tips to help you get on with your flatmates.

Talk about money from the start. Decide how you will split the rent and the bills, and who will pay for shared things like cleaning products. Arguments about money are one of the most common reasons why flatmates stop speaking to each other.

Make a cleaning timetable. Nobody likes coming home to a kitchen full of dirty dishes. If everyone knows what they are responsible for, there are fewer arguments.

Respect each other's privacy. Your flatmate's room is their private space. Always knock before you go in, and never borrow their things without asking.

Be patient and don't keep problems to yourself. If something annoys you, talk about it calmly instead of letting your anger grow. Often the other person has no idea that they are doing something wrong.

Finally, spend some time together. Cook a meal, watch a film or decorate the living room together. Flatmates who see each other as friends, not just people who share a fridge, are usually happier – and much more likely to forgive each other's mistakes.`,
    items: [
      { t: 'mcq', q: 'According to the article, sharing a flat with friends…', o: ['is always easy', 'can cause problems even between close friends', 'is cheaper than living alone', 'is not recommended'], a: 1 },
      { t: 'mcq', q: 'What is one of the most common causes of arguments?', o: ['music', 'money', 'visitors', 'cooking'], a: 1 },
      { t: 'tf', q: 'You can borrow your flatmate’s things if you return them quickly.', a: 'F', ex: '“never borrow their things without asking”' },
      { t: 'mcq', q: 'What should you do if something annoys you?', o: ['keep quiet', 'move out', 'talk about it calmly', 'tell other friends'], a: 2 },
      { t: 'gap', q: 'Always ___ before you go into your flatmate’s room.', a: ['knock'] },
      { t: 'tf', q: 'The writer suggests spending time together as friends.', a: 'T' },
    ],
  },
  {
    title: 'Can you be friends with your parents?',
    level: 'Trung bình · ~310 từ',
    text: `A generation ago, few teenagers would have described their parents as friends. Parents were figures of authority: they made the rules, and children were expected to follow them. Today, however, many young people say they have a close, open relationship with their mum or dad – and some even call them their best friend.

Psychologists say there are several reasons for this change. Families are smaller, so parents can spend more time with each child. Many parents also grew up with more relaxed attitudes and want to be more involved in their children's lives. And technology means that families can chat to each other throughout the day, sharing jokes and photos.

There are clear benefits. Teenagers who feel they can talk to their parents about anything are less likely to keep dangerous secrets. They tend to be more confident and to have better mental health. "When my parents split up, my mum and I became much closer," says Huong, 19. "She was honest with me about everything, and I trust her more than anyone."

But some experts warn that being a friend is not the same as being a parent. Children need someone who will set limits and sometimes say no, even when it makes them unpopular. "A parent who only wants to be liked may find it difficult to give advice the child doesn't want to hear," explains family therapist Dr Mark Allen. "Friends are equals. Parents are not – and that's actually a good thing."

Perhaps the ideal is somewhere in between: a relationship based on love, respect and honesty, where young people feel free to share their problems, but where parents are still willing to be the adult when it really matters.`,
    items: [
      { t: 'mcq', q: 'A generation ago, parents were mainly seen as…', o: ['friends', 'figures of authority', 'teachers', 'strangers'], a: 1 },
      { t: 'mcq', q: 'Which is NOT given as a reason for the change?', o: ['smaller families', 'more relaxed parents', 'technology', 'longer school days'], a: 3 },
      { t: 'tf', q: 'Teenagers who talk openly with parents are less likely to keep dangerous secrets.', a: 'T' },
      { t: 'mcq', q: 'What happened to Huong’s relationship with her mother after her parents split up?', o: ['It got worse.', 'They became closer.', 'They stopped talking.', 'Nothing changed.'], a: 1 },
      { t: 'tf', q: 'Dr Allen believes parents should only try to be liked.', a: 'F' },
      { t: 'mcq', q: 'According to Dr Allen, why is it good that parents and children are not equals?', o: ['Parents can set limits and give unwanted advice.', 'Parents are always right.', 'Children don’t need friends.', 'It is traditional.'], a: 0 },
      { t: 'mcq', q: 'The writer’s conclusion is that…', o: ['parents should never be friends with children', 'a balance between friendship and parenting is best', 'friendship is all that matters', 'teenagers should live on their own'], a: 1 },
    ],
  },
  {
    title: 'Strangers on a train',
    level: 'Trung bình–Khó · ~360 từ',
    text: `Most of us were brought up to be careful with strangers. On public transport, we avoid eye contact, look at our phones and try not to start conversations. But according to a series of experiments by psychologists at the University of Chicago, we may be missing out.

In one study, commuters on trains were divided into three groups. The first group was asked to start a conversation with the person next to them. The second was told to sit in silence and keep to themselves. The third was given no instructions and simply did what they normally did. At the end of the journey, everyone reported how they had felt.

The results surprised the researchers – and the commuters. People who had talked to a stranger reported the most positive journey, even those who described themselves as shy. Yet before the experiment, most participants had predicted the opposite: they expected conversations to be awkward and believed that the other person would not want to chat.

Why do we get it so wrong? The researchers suggest that we underestimate how interested other people are in talking to us. We assume that strangers will think we are strange or annoying, so we stay silent – and because everyone stays silent, nobody discovers that the conversation would have been enjoyable.

Other studies support these findings. People who have brief, friendly exchanges with a barista or a neighbour report feeling happier and more connected to their community. In a world where many people say they feel lonely, even though they are surrounded by others, these small moments may matter more than we think.

Of course, there are times when people genuinely want to be left alone, and it is important to respect that. Safety also matters. But the next time you are waiting for a bus or sitting on a train, the research suggests it might be worth taking the risk of saying hello. The worst that can happen is a short, slightly awkward silence. The best? You might make a friend.`,
    items: [
      { t: 'mcq', q: 'In the experiment, how many groups were there?', o: ['two', 'three', 'four', 'five'], a: 1 },
      { t: 'mcq', q: 'Which group reported the most positive journey?', o: ['those who sat in silence', 'those who talked to a stranger', 'those with no instructions', 'all groups felt the same'], a: 1 },
      { t: 'tf', q: 'Shy people did not enjoy talking to strangers.', a: 'F', ex: '“even those who described themselves as shy”' },
      { t: 'mcq', q: 'Before the experiment, most participants expected conversations to be…', o: ['enjoyable', 'awkward', 'useful', 'long'], a: 1 },
      { t: 'mcq', q: 'According to researchers, why do we stay silent?', o: ['We are too busy.', 'We underestimate how much others want to talk.', 'It is dangerous to talk.', 'Trains are too noisy.'], a: 1 },
      { t: 'tf', q: 'Short friendly exchanges with a barista can make people feel happier.', a: 'T' },
      { t: 'mcq', q: 'What does the writer suggest?', o: ['Always talk to every stranger.', 'It may be worth saying hello, while respecting others.', 'Never talk to strangers.', 'Use your phone on trains.'], a: 1 },
    ],
  },
  {
    title: 'Why friendships fade – and how to keep them',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `Think about the people you were closest to ten years ago. How many of them are still part of your life? For most people, the answer is "not many". Research by the evolutionary psychologist Robin Dunbar suggests that we lose around half of our close friends every seven years, and the reasons are rarely dramatic. We seldom fall out with people; we simply drift apart.

Life changes are the most common cause. Moving to a new city, starting university, getting married or having children all reduce the time we can spend with old friends. Friendship, Dunbar argues, needs regular contact to survive. Without it, emotional closeness slowly declines, even when there has been no argument at all.

Interestingly, the way friendships fade appears to be different for men and women. Studies suggest that female friendships tend to depend on conversation: phone calls, messages and talking about feelings. Male friendships, on the other hand, are often built around shared activities, such as playing football or watching matches together. When those activities stop, the friendship may disappear surprisingly quickly.

Does it matter? Many researchers believe it does. People with strong social connections live longer, recover from illness more quickly and are less likely to suffer from depression. One well-known review of studies concluded that loneliness can be as harmful to health as smoking fifteen cigarettes a day.

The good news is that friendships can be maintained with relatively little effort, as long as the effort is regular. Experts recommend a few simple habits. Schedule time for friends, just as you would for work. Send a short message when something reminds you of someone – it shows that you care about them. Celebrate their successes rather than being jealous of them, and be honest when you have been too busy to keep in contact. Above all, don't wait for the other person to make the first move: many friendships end only because both people are waiting.

It is also worth remembering that not every friendship needs to last forever. Some people are part of our lives for a particular period, and that is perfectly natural. But for the relationships that really matter, a little time and attention can make the difference between a friend you used to have and a friend for life.`,
    items: [
      { t: 'mcq', q: 'According to Dunbar, how often do we lose about half of our close friends?', o: ['every year', 'every three years', 'every seven years', 'every ten years'], a: 2 },
      { t: 'tf', q: 'Most friendships end because of serious arguments.', a: 'F', ex: '“We seldom fall out with people; we simply drift apart.”' },
      { t: 'mcq', q: '“drift apart” means…', o: ['argue loudly', 'gradually become less close', 'move to another country', 'meet again'], a: 1 },
      { t: 'mcq', q: 'Male friendships are often based on…', o: ['talking about feelings', 'shared activities', 'phone calls', 'work'], a: 1 },
      { t: 'gap', q: 'Loneliness may be as harmful as smoking ___ cigarettes a day.', a: ['fifteen', '15'] },
      { t: 'mcq', q: 'Which habit is NOT recommended?', o: ['scheduling time for friends', 'sending short messages', 'waiting for the other person to contact you first', 'celebrating friends’ successes'], a: 2 },
      { t: 'tf', q: 'The writer says every friendship should last forever.', a: 'F' },
      { t: 'mcq', q: 'What is the main message of the final paragraph?', o: ['Friendships always end.', 'Small, regular efforts can keep important friendships alive.', 'Only family matters.', 'It is better to have few friends.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Voicemail: Party invitation',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Lời nhắn mời dự tiệc. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-SoniaNeural' },
    script: [
      ['N', "Hi Tom, it's Anna. I'm having a party to celebrate my new flat, and I'd love you to come!"],
      ['N', "It's next Saturday, the fourteenth, starting at seven thirty in the evening. The address is 22 Park Road, flat number five, on the third floor."],
      ['N', "You don't need to bring any food, but you can bring something to drink if you like. And please bring your girlfriend, Sophie. I'd really like to meet her!"],
      ['N', "Oh, and it's quite a quiet neighbourhood, so we have to finish by eleven. Text me to let me know if you can come. Bye!"],
    ],
    items: [
      { t: 'mcq', q: 'Why is Anna having a party?', o: ['It is her birthday.', 'She has a new flat.', 'She passed her exams.', 'She is getting married.'], a: 1 },
      { t: 'gap', q: 'Date: Saturday the ___', a: ['14th', '14', 'fourteenth'] },
      { t: 'gap', q: 'The party starts at ___ p.m.', a: ['7.30', '7:30', 'seven thirty', 'half past seven'] },
      { t: 'gap', q: 'Address: ___ Park Road, flat 5', a: ['22', 'twenty-two'] },
      { t: 'mcq', q: 'What should Tom bring?', o: ['food', 'something to drink (optional)', 'music', 'a present'], a: 1 },
      { t: 'gap', q: 'The party must finish by ___ o’clock.', a: ['11', 'eleven'] },
    ],
    dictation: ["I'm having a party to celebrate my new flat.", "It's quite a quiet neighbourhood.", 'Text me to let me know if you can come.'],
  },
  {
    title: 'Talk: My grandparents',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một người kể về ông bà mình.',
    rate: '-5%',
    voices: { N: 'en-US-JennyNeural' },
    script: [
      ['N', "I'd like to talk about my grandparents, who brought me up after my parents moved abroad for work. I lived with them from the age of five until I went to university."],
      ['N', "My grandfather was a teacher. He was very patient, and he helped me with my homework every evening. He always said that honesty was the most important thing in life, and he never told a lie."],
      ['N', "My grandmother was the opposite – very lively and funny. She loved decorating the house, especially for festivals, and she was incredibly generous. If a neighbour needed help, she was always the first to offer."],
      ['N', "They've been married for fifty-two years, and they still hold hands when they go for a walk. I really admire them for that."],
      ['N', "Now that I live on my own in the city, I call them every Sunday. I'm so grateful for everything they did for me."],
    ],
    items: [
      { t: 'mcq', q: 'Why did the speaker’s grandparents bring her up?', o: ['Her parents were ill.', 'Her parents moved abroad for work.', 'Her parents divorced.', 'She wanted to live in the country.'], a: 1 },
      { t: 'gap', q: 'She lived with them from the age of ___.', a: ['5', 'five'] },
      { t: 'mcq', q: 'What was her grandfather like?', o: ['funny and lively', 'patient and honest', 'strict and cold', 'shy'], a: 1 },
      { t: 'tf', q: 'Her grandmother was very generous.', a: 'T' },
      { t: 'gap', q: 'They have been married for ___ years.', a: ['52', 'fifty-two', 'fifty two'] },
      { t: 'mcq', q: 'How often does she call them?', o: ['every day', 'every Sunday', 'once a month', 'at festivals'], a: 1 },
    ],
  },
  {
    title: 'Conversation: Falling out',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Jess kể với bạn mình về một cuộc cãi nhau.',
    rate: '+0%',
    voices: { Jess: 'en-GB-LibbyNeural', Ollie: 'en-GB-RyanNeural' },
    script: [
      ['Ollie', "You're very quiet today, Jess. Are you in a bad mood?"],
      ['Jess', "Sort of. I had an argument with Mia yesterday."],
      ['Ollie', "Mia? But you two get on so well. What happened?"],
      ['Jess', "She told some people at work that I'm going out with Daniel. It was supposed to be private. I only told her because I trusted her."],
      ['Ollie', "Oh no. Did she do it on purpose?"],
      ['Jess', "She says she didn't. She thought everyone already knew. But I still feel really let down."],
      ['Ollie', "I understand. But you've been friends since primary school. Don't you think you should talk to her?"],
      ['Jess', "Maybe. She sent me a message last night apologising, but I haven't replied yet."],
      ['Ollie', "Well, everybody makes mistakes. If she's really sorry, maybe you could forgive her. You don't want to lose a friend like that over one mistake."],
      ['Jess', "You're right. I'll call her this evening. Thanks, Ollie. You're a good friend too, you know."],
    ],
    items: [
      { t: 'mcq', q: 'Why is Jess in a bad mood?', o: ['She failed an exam.', 'She argued with her friend Mia.', 'She split up with Daniel.', 'She lost her job.'], a: 1 },
      { t: 'mcq', q: 'What did Mia do?', o: ['She lied to Jess.', 'She told people Jess’s private news.', 'She forgot Jess’s birthday.', 'She went out with Daniel.'], a: 1 },
      { t: 'tf', q: 'Mia says she did it on purpose.', a: 'F' },
      { t: 'gap', q: 'Jess and Mia have been friends since ___ school.', a: ['primary'] },
      { t: 'tf', q: 'Mia has already apologised.', a: 'T' },
      { t: 'mcq', q: 'What does Jess decide to do?', o: ['never speak to Mia again', 'call Mia this evening', 'send a message tomorrow', 'talk to Daniel'], a: 1 },
    ],
    dictation: ['I only told her because I trusted her.', "You don't want to lose a friend like that over one mistake."],
  },
  {
    title: 'Radio interview: Making friends in a new city',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một nhà tâm lý học về việc kết bạn khi chuyển đến nơi mới.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Tom: 'en-AU-WilliamNeural' },
    script: [
      ['Presenter', "Moving to a new city can be exciting, but it can also be lonely. My guest today is psychologist Dr Tom Hughes, who has written a book about making friends as an adult. Tom, why is it so hard?"],
      ['Tom', "At school or university, friendships happen almost automatically. You see the same people every day, you have time, and everyone is looking for friends. As adults, we're busy, people already have their own social groups, and we often feel embarrassed to say we're lonely."],
      ['Presenter', "So where should people start?"],
      ['Tom', "My first piece of advice is: repeat yourself. Research shows that it takes around fifty hours together to turn someone you know into a casual friend, and about two hundred hours to become close friends. So instead of trying lots of different events once, join one regular activity, like a sports club, a language class or volunteering, and keep going back."],
      ['Presenter', "That's a lot of hours!"],
      ['Tom', "It is, but they add up quickly if you see people every week. The second piece of advice is to take the first step. Most people are waiting for someone else to suggest coffee. If you ask, they'll usually say yes."],
      ['Presenter', "What about people who are shy?"],
      ['Tom', "Shy people often make very loyal friends, because they listen well. I'd suggest activities where you do something together, like cooking or hiking, rather than standing at a party making small talk. It takes the pressure off."],
      ['Presenter', "And what mistakes should people avoid?"],
      ['Tom', "Comparing yourself with others on social media. Everyone else seems to have a huge group of friends. In reality, most people have only three to five close friends. That's completely normal."],
      ['Presenter', "Dr Tom Hughes, thank you."],
    ],
    items: [
      { t: 'mcq', q: 'Why is making friends harder for adults?', o: ['Adults don’t like people.', 'People are busy and already have social groups.', 'Cities are dangerous.', 'There are no clubs.'], a: 1 },
      { t: 'gap', q: 'It takes about ___ hours to become casual friends.', a: ['50', 'fifty'] },
      { t: 'gap', q: 'It takes about ___ hours to become close friends.', a: ['200', 'two hundred'] },
      { t: 'mcq', q: 'What is Tom’s first piece of advice?', o: ['Try many different events.', 'Join one regular activity and keep going back.', 'Use dating apps.', 'Move to a smaller town.'], a: 1 },
      { t: 'tf', q: 'Tom says most people will say yes if you invite them for coffee.', a: 'T' },
      { t: 'mcq', q: 'What does he recommend for shy people?', o: ['big parties', 'activities you do together', 'online chat only', 'public speaking classes'], a: 1 },
      { t: 'gap', q: 'Most people have only three to ___ close friends.', a: ['five', '5'] },
    ],
  },
  {
    title: 'Discussion: Are online friends real friends?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về tình bạn trên mạng giữa người dẫn, một sinh viên và một nhà xã hội học.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Zoe: 'en-US-AriaNeural', Helen: 'en-GB-SoniaNeural' },
    script: [
      ['Host', "Hello and welcome. Today's question: can you have real friends that you've never met in person? With me are Zoe Clark, a university student who says some of her closest friends live online, and sociologist Professor Helen Ward. Zoe, tell us about your online friends."],
      ['Zoe', "Sure. I grew up in a very small town and honestly, I didn't have much in common with the people at my school. When I was fourteen, I joined an online community for people who write stories. I met two girls there, one in Canada and one in Singapore, and we've been chatting almost every day for six years. They've supported me through some really difficult times."],
      ['Host', "Professor Ward, is that a real friendship?"],
      ['Helen', "In many ways, yes. The research is quite clear that online relationships can provide real emotional support, especially for people who feel isolated where they live. What matters is the quality of the connection, not where it happens."],
      ['Host', "But there must be some limits?"],
      ['Helen', "There are. Online friends can't bring you soup when you're ill or give you a hug at a funeral. Physical presence still matters for our wellbeing. And online, it's easier to show only the best side of yourself, so it can take longer to really know and trust someone."],
      ['Zoe', "That's true, but I'd argue it can work the other way too. I've told my online friends things I was too embarrassed to say to anyone face to face. Sometimes the distance makes it easier to be honest."],
      ['Helen', "That's a fair point, and it's something we see in the research. My concern is mainly with young people who replace all their face-to-face contact with screens. The healthiest pattern seems to be a mix of both."],
      ['Zoe', "I agree with that. And actually, we're finally meeting in person next summer. We've been saving up for two years!"],
      ['Host', "That's lovely. Zoe Clark and Helen Ward, thank you both."],
    ],
    items: [
      { t: 'mcq', q: 'Why did Zoe look for friends online?', o: ['She was bored.', 'She didn’t have much in common with people at her school.', 'Her parents told her to.', 'She was studying abroad.'], a: 1 },
      { t: 'gap', q: 'Zoe has been chatting with her online friends for ___ years.', a: ['six', '6'] },
      { t: 'tf', q: 'Professor Ward thinks online friendships can give real emotional support.', a: 'T' },
      { t: 'mcq', q: 'Which limit of online friendship does Professor Ward mention?', o: ['They are too expensive.', 'Online friends can’t be physically present.', 'They always end quickly.', 'They are illegal for teenagers.'], a: 1 },
      { t: 'mcq', q: 'Why does Zoe say distance can help?', o: ['It is cheaper.', 'It can make it easier to be honest.', 'You can ignore people.', 'You have more friends.'], a: 1 },
      { t: 'mcq', q: 'What does Professor Ward consider the healthiest pattern?', o: ['only online friends', 'only face-to-face friends', 'a mix of both', 'no social media'], a: 2 },
      { t: 'tf', q: 'Zoe has already met her online friends in person.', a: 'F', ex: 'Họ sẽ gặp nhau vào hè năm sau.' },
    ],
    dictation: ['What matters is the quality of the connection, not where it happens.', 'Sometimes the distance makes it easier to be honest.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: apologise, confident, generous, grateful, independent, introduce, loyal, mood, recognise, stranger',
    items: [
      { t: 'gap', q: 'I didn’t ___ her – she has changed so much!', a: ['recognise', 'recognize'] },
      { t: 'gap', q: 'Let me ___ you to my best friend, Nam.', a: ['introduce'] },
      { t: 'gap', q: 'You should ___ to your mother for shouting at her.', a: ['apologise', 'apologize'] },
      { t: 'gap', q: "I'm really ___ for all your help.", a: ['grateful'] },
      { t: 'gap', q: 'He’s in a terrible ___ this morning.', a: ['mood'] },
      { t: 'gap', q: 'My aunt is very ___ – she always buys us presents.', a: ['generous'] },
      { t: 'gap', q: 'A ___ friend will never talk about you behind your back.', a: ['loyal'] },
      { t: 'gap', q: 'Children shouldn’t get into cars with ___.', a: ['strangers'] },
      { t: 'gap', q: 'She moved out at 18 because she wanted to be ___.', a: ['independent'] },
      { t: 'gap', q: 'He feels more ___ when he speaks English now.', a: ['confident'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: bring up, fall out, get on, go out with, grow up, let down, look after, split up (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'I ___ in a small village near Hue.', a: ['grew up'] },
      { t: 'gap', q: 'She was ___ by her aunt after her parents died.', a: ['brought up'] },
      { t: 'gap', q: 'Do you ___ well with your brother?', a: ['get on'] },
      { t: 'gap', q: 'They ___ after five years together.', a: ['split up'] },
      { t: 'gap', q: 'Can you ___ my cat while I’m on holiday?', a: ['look after'] },
      { t: 'gap', q: 'I promised to help, and I won’t ___ you ___. (2 phần, cách nhau …)', a: ['let … down', 'let down'] },
      { t: 'gap', q: 'Lan and Hoa ___ over a boy and stopped speaking.', a: ['fell out'] },
      { t: 'gap', q: 'How long has your sister been ___ Minh?', a: ['going out with'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'She is married ___ an engineer.', o: ['with', 'to', 'for'], a: 1, ex: '✗ married with' },
      { t: 'mcq', q: 'My parents are very proud ___ me.', o: ['of', 'for', 'about'], a: 0 },
      { t: 'mcq', q: 'He apologised ___ breaking the vase.', o: ['about', 'for', 'of'], a: 1 },
      { t: 'mcq', q: 'We have nothing ___ common.', o: ['on', 'at', 'in'], a: 2 },
      { t: 'mcq', q: 'Sorry! I didn’t do it ___ purpose.', o: ['on', 'by', 'for'], a: 0 },
      { t: 'mcq', q: 'She’s jealous ___ her sister’s success.', o: ['about', 'of', 'with'], a: 1 },
      { t: 'mcq', q: 'Be kind ___ animals.', o: ['with', 'to', 'for'], a: 1 },
      { t: 'mcq', q: 'I had an argument ___ my dad about money.', o: ['with', 'to', 'against'], a: 0 },
      { t: 'mcq', q: 'Do you still keep ___ contact with your school friends?', o: ['on', 'at', 'in'], a: 2 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'Never trust him – he’s a terrible ___. (LIE)', a: ['liar'] },
      { t: 'gap', q: 'She has a warm and friendly ___. (PERSON)', a: ['personality'] },
      { t: 'gap', q: 'I have a very close ___ with my cousin. (RELATE)', a: ['relationship'] },
      { t: 'gap', q: '___ is the most important quality in a friend. (HONEST)', a: ['Honesty'] },
      { t: 'gap', q: 'That was a ___ mistake – check your work! (CARE)', a: ['careless'] },
      { t: 'gap', q: 'I have great ___ for people who help others. (ADMIRE)', a: ['admiration'] },
      { t: 'gap', q: 'Public speaking helped her build ___. (CONFIDENT)', a: ['confidence'] },
      { t: 'gap', q: 'He was ___ to come because he was ill. (ABLE)', a: ['unable'] },
      { t: 'gap', q: 'She asked for his ___ after the argument. (FORGIVE)', a: ['forgiveness'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['a close', 'friend'], ['in a bad', 'mood'], ['tell', 'a lie'], ['earn sb’s', 'respect'], ['a married', 'couple'], ['pay', 'the rent'], ['a complete', 'stranger'], ['fall', 'in love']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Đồng nghĩa với “split up”:', o: ['break up', 'get on', 'grow up', 'bring up'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “generous”:', o: ['kind', 'mean', 'loyal', 'patient'], a: 1 },
      { t: 'mcq', q: 'Đồng nghĩa với “look after”:', o: ['take care of', 'look for', 'let down', 'fall out'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “on purpose”:', o: ['deliberately', 'by accident', 'in common', 'by yourself'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “confident”:', o: ['shy', 'cool', 'loving', 'independent'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “on your own”:', o: ['together', 'by yourself', 'in love', 'in contact'], a: 1 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi được ông bà nuôi dạy ở một ngôi làng nhỏ.', ref: 'I was brought up by my grandparents in a small village.', focus: 'bring up (passive)' },
      { t: 'tr', vi: 'Tôi và chị gái có rất nhiều điểm chung.', ref: 'My sister and I have a lot in common.', focus: 'in common' },
      { t: 'tr', vi: 'Anh ấy xin lỗi tôi vì đã quên sinh nhật tôi.', ref: 'He apologised to me for forgetting my birthday.', focus: 'apologise to sb for + -ing' },
      { t: 'tr', vi: 'Bạn có hòa thuận với bạn cùng phòng không?', ref: 'Do you get on well with your flatmate?', focus: 'get on with' },
      { t: 'tr', vi: 'Một người bạn trung thành sẽ không bao giờ làm bạn thất vọng.', ref: 'A loyal friend will never let you down.', focus: 'loyal, let down' },
      { t: 'tr', vi: 'Bố mẹ tôi rất tự hào về tôi khi tôi đỗ đại học.', ref: 'My parents were very proud of me when I got into university.', focus: 'proud of' },
      { t: 'tr', vi: 'Cô ấy đã kết hôn với một bác sĩ.', ref: 'She is married to a doctor.', focus: 'married to' },
      { t: 'tr', vi: 'Tôi vẫn giữ liên lạc với các bạn cũ thời phổ thông.', ref: "I still keep in contact with my old school friends.", focus: 'in contact with' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you have a lot of friends? How did you meet them?' },
  { part: 'Part 1', q: 'Who are you closest to in your family?' },
  { part: 'Part 1', q: 'Do you prefer spending time with one friend or a group of friends?' },
  { part: 'Part 1', q: 'Do you get on well with your neighbours?' },
  { part: 'Part 2', q: 'Describe a friend who has had an important influence on you.', cue: ['who this person is', 'how and when you met', 'what you do together', 'and explain how this person has influenced you'] },
  { part: 'Part 3', q: 'What makes a good friend?' },
  { part: 'Part 3', q: 'Do you think social media helps or harms friendships?' },
  { part: 'Part 3', q: 'How have family relationships changed in your country in recent years?' },
  { part: 'Part 3', q: 'Is it easier for children or adults to make friends? Why?' },
];

export default {
  id: 'b1-u12',
  book: 'b1',
  no: 12,
  title: 'Friends and relations',
  titleVi: 'Bạn bè & các mối quan hệ',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
