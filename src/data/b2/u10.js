// B2 Unit 10 – Vocabulary: People and society (Destination B2).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u10-vocab.js';

const reading = [
  {
    title: 'My grandmother, my hero',
    level: 'Dễ · ~200 từ',
    text: `I was brought up by my grandmother. My parents worked in the city, so from the age of three until I was twelve, I lived with her in a small village in the Mekong Delta.

She wasn't famous or rich – she was a very ordinary woman who sold vegetables at the local market. But she was the kindest person I have ever known. Everyone in the village looked up to her. When neighbours fell out with each other, they often asked her to help them make up.

She was strict, too. She never let me stay up late, and she was very sensitive about good manners. "Being polite costs nothing," she used to say. But when other children picked on me at school, she was the first to stand up for me.

My grandmother passed away three years ago. At her funeral, I was taken aback by the size of the crowd – hundreds of people came to say goodbye.

I often think about the lessons she taught me: work hard, be kind to everyone, and never look down on anyone. If I can become half the person she was, I'll be happy.`,
    items: [
      { t: 'mcq', q: 'Why did the writer live with the grandmother?', o: ['The parents had died.', 'The parents worked in the city.', 'The grandmother was ill.', 'The writer chose to.'], a: 1 },
      { t: 'gap', q: 'The writer lived with the grandmother until the age of ___.', a: ['twelve', '12'] },
      { t: 'mcq', q: 'What did villagers ask the grandmother to do?', o: ['sell vegetables', 'help them make up after arguments', 'teach their children', 'lend money'], a: 1 },
      { t: 'tf', q: 'The grandmother let the writer stay up late.', a: 'F' },
      { t: 'mcq', q: 'What surprised the writer at the funeral?', o: ['the rain', 'the size of the crowd', 'the music', 'the cost'], a: 1 },
      { t: 'mcq', q: 'Which lesson is NOT mentioned?', o: ['work hard', 'be kind', 'never look down on anyone', 'save money'], a: 3 },
    ],
  },
  {
    title: 'Why are people getting married later?',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `In many countries, including Vietnam, the average age at which people get married has risen steadily over the past few decades. In the 1990s, it was common for Vietnamese women to marry in their early twenties. Today, especially in cities, many people wait until their late twenties or even thirties before they settle down.

There are several reasons for this change. Firstly, more young people – particularly women – go to university, and many want to establish their careers before starting a family. Secondly, the cost of living in big cities has increased. Young couples often feel they cannot afford a wedding, a home and children until they have saved for several years.

Attitudes have also changed. In the past, parents often had a strong influence on who their children married, and there was pressure to marry early. Now, most young people choose their own partners and feel more independent of their families. Many see marriage as a choice rather than an obligation.

Some older people worry about these changes. They point out that the birth rate is falling and that the traditional extended family, in which several generations live together, is becoming less common. Others argue that people who marry later are often more mature and have more stable relationships.

Whatever the reasons, the trend seems likely to continue. As one sociologist puts it, "People haven't stopped believing in marriage. They just want to be ready for it."`,
    items: [
      { t: 'mcq', q: 'What has happened to the average age of marriage?', o: ['It has fallen.', 'It has risen.', 'It has stayed the same.', 'It changes every year.'], a: 1 },
      { t: 'mcq', q: 'Which is the first reason given?', o: ['high costs', 'more people go to university and want careers first', 'parental pressure', 'falling birth rates'], a: 1 },
      { t: 'tf', q: 'In the past, parents had little influence on marriage choices.', a: 'F' },
      { t: 'mcq', q: 'What do older people worry about?', o: ['crime', 'falling birth rate and fewer extended families', 'expensive weddings', 'divorce'], a: 1 },
      { t: 'mcq', q: 'What is an argument in favour of marrying later?', o: ['People are more mature and relationships more stable.', 'Weddings are cheaper.', 'Parents are happier.', 'Families are bigger.'], a: 0 },
      { t: 'mcq', q: 'What does the sociologist say?', o: ['People no longer believe in marriage.', 'People want to be ready for marriage.', 'Marriage is dying.', 'Weddings are too expensive.'], a: 1 },
    ],
  },
  {
    title: 'Loneliness: a modern epidemic?',
    level: 'Trung bình · ~330 từ',
    text: `We live in the most connected age in history, yet loneliness is rising. In the United Kingdom, the problem was considered so serious that in 2018 the government appointed a Minister for Loneliness. Surveys suggest that millions of people regularly go a week or more without a meaningful conversation.

Loneliness is not the same as being alone. Many people enjoy their own company, while others feel lonely in a crowd or even within a marriage. Researchers define loneliness as the gap between the relationships we have and the relationships we want.

It is often assumed that loneliness mainly affects the elderly, particularly those who have lost a partner or whose children have moved away. However, studies show that young adults aged 16 to 24 are just as likely – and sometimes more likely – to say they feel lonely. Moving away from home for university or work, the pressure of social media and a decline in community activities may all play a part.

The consequences can be serious. Long-term loneliness has been linked to depression, heart disease and a weaker immune system. One widely quoted study compared its health effects to smoking fifteen cigarettes a day.

What can be done? Some solutions are simple. Community projects that bring together different generations – such as students living with elderly people in exchange for lower rent – have had great success. Doctors in some countries now "prescribe" social activities, like joining a choir or a gardening group, instead of medicine.

There is also something every one of us can do. Experts say that small acts of kindness – asking after a neighbour, chatting to a shop assistant, inviting a new colleague for lunch – can make a real difference. As one volunteer put it, "Sometimes the most powerful thing you can give someone is your time."`,
    items: [
      { t: 'gap', q: 'The UK appointed a Minister for Loneliness in ___.', a: ['2018'] },
      { t: 'mcq', q: 'How do researchers define loneliness?', o: ['being alone', 'the gap between the relationships we have and want', 'living alone', 'having no family'], a: 1 },
      { t: 'tf', q: 'Loneliness only affects elderly people.', a: 'F' },
      { t: 'mcq', q: 'What health effect is loneliness compared to?', o: ['drinking alcohol', 'smoking fifteen cigarettes a day', 'eating fast food', 'lack of sleep'], a: 1 },
      { t: 'mcq', q: 'What do some doctors “prescribe”?', o: ['more medicine', 'social activities', 'holidays', 'exercise only'], a: 1 },
      { t: 'mcq', q: 'What does the volunteer say is most powerful?', o: ['money', 'your time', 'advice', 'medicine'], a: 1 },
    ],
  },
  {
    title: 'The power of role models',
    level: 'Trung bình–Khó · ~360 từ',
    text: `Ask a group of teenagers who they look up to, and you will probably hear the names of footballers, singers and social media stars. Ask the same question to a group of adults, and the answers are more likely to include parents, teachers or a former boss. Either way, almost everyone can name someone who has influenced the person they have become.

Psychologists have long recognised the importance of role models. Children learn a great deal simply by watching and copying the people around them – a process known as "observational learning". A child who grows up seeing adults treat others with kindness and respect is more likely to behave in the same way. Unfortunately, the same is true of negative behaviour.

The rise of celebrity culture has led to concern about the kind of role models young people choose. Critics argue that many famous people are admired for their wealth or appearance rather than their achievements or character, and that their lifestyles give young people unrealistic expectations. When celebrities behave badly, the fear is that their young fans will copy them.

However, research suggests the picture is more complicated. Young people are not simply passive followers; most are well able to distinguish between admiring someone's talent and approving of everything they do. Moreover, many public figures use their fame positively – speaking openly about mental health, supporting charities or standing up for people who are treated unfairly.

The most effective role models, studies show, are often people who are relatively close to us. A role model who seems too perfect or too distant can actually be discouraging, as their success feels impossible to achieve. By contrast, seeing someone from a similar background succeed – an older student from the same school, for example – can be highly motivating, because it suggests "if they can do it, so can I".

This may explain why mentoring schemes, which pair young people with adults from their own community, have proved so successful. Role models matter – but the most powerful ones may be much closer to home than we think.`,
    items: [
      { t: 'mcq', q: 'Who do adults usually name as role models?', o: ['celebrities', 'parents, teachers or a former boss', 'politicians', 'athletes'], a: 1 },
      { t: 'gap', q: 'Learning by watching and copying is called “___ learning”.', a: ['observational'] },
      { t: 'mcq', q: 'What is a criticism of celebrity role models?', o: ['They work too hard.', 'They are admired for wealth or looks rather than achievements.', 'They are too old.', 'They are unknown.'], a: 1 },
      { t: 'tf', q: 'Research shows young people copy everything celebrities do.', a: 'F' },
      { t: 'mcq', q: 'Why can a “too perfect” role model be discouraging?', o: ['Their success seems impossible to achieve.', 'They are rude.', 'They are not famous.', 'They live abroad.'], a: 0 },
      { t: 'mcq', q: 'What does the writer suggest about the most powerful role models?', o: ['They are famous.', 'They are often close to home.', 'They are rich.', 'They are on social media.'], a: 1 },
    ],
  },
  {
    title: 'Should adult children look after their elderly parents?',
    level: 'Khó · ~420 từ · IELTS',
    text: `In many Asian societies, including Vietnam, it has traditionally been taken for granted that adult children will care for their parents in old age. Elderly people have often lived with one of their children, usually the eldest son, in an extended family household. In many Western countries, by contrast, it is more common for older people to live independently or move into residential care homes. As populations age rapidly across the world, the question of who should be responsible for elderly people has become increasingly urgent.

Those who believe that children have a duty to care for their parents often see it as a matter of gratitude and respect. Parents devote years of their lives to bringing up their children, and it seems only fair that this care should be returned. Supporters also argue that elderly people are generally happier and healthier when they remain with their families, where they are surrounded by familiar faces and can play an active role in the lives of their grandchildren. Furthermore, family care reduces the cost to the state at a time when health and pension systems are under growing pressure.

However, there are strong arguments on the other side. Modern working life makes it difficult for many adults to provide full-time care, particularly when both partners have jobs and when children have moved to other cities or countries for work. Caring for a parent with a serious illness such as dementia can require specialist skills that ordinary family members simply do not have. Without support, carers – who are most often women – may suffer from exhaustion, stress and financial hardship, and some are forced to give up their careers altogether.

It is also worth noting that many elderly people themselves value their independence and do not wish to rely on their children. For some, a well-run care home or assisted-living community offers both professional support and the company of people of their own age.

In my view, responsibility should be shared between families and the state. Adult children should remain closely involved in their parents' lives, visiting regularly and taking part in important decisions. At the same time, governments should provide affordable professional care, training and financial support for family carers, and flexible working arrangements. In this way, elderly people can receive the care they need without placing an unfair burden on any one individual.`,
    items: [
      { t: 'mcq', q: 'Traditionally in Vietnam, elderly people often lived…', o: ['alone', 'with one of their children', 'in care homes', 'with friends'], a: 1 },
      { t: 'mcq', q: 'Which argument supports family care?', o: ['It is a matter of gratitude and respect.', 'It is more professional.', 'It costs more.', 'It is required by law.'], a: 0 },
      { t: 'mcq', q: 'Why is family care difficult today?', o: ['Elderly people are healthier.', 'Modern working life and children moving away.', 'Care homes are free.', 'Families are bigger.'], a: 1 },
      { t: 'tf', q: 'Caring for a parent with dementia may require specialist skills.', a: 'T' },
      { t: 'mcq', q: 'Who are carers most often, according to the text?', o: ['men', 'women', 'teenagers', 'professionals'], a: 1 },
      { t: 'mcq', q: 'What is the writer’s view?', o: ['Only children are responsible.', 'Only the state is responsible.', 'Responsibility should be shared between families and the state.', 'Elderly people should look after themselves.'], a: 2 },
    ],
  },
];

const listening = [
  {
    title: 'Voicemail: A family reunion',
    level: '1 · Dễ · 1 giọng, chậm',
    desc: 'Tin nhắn thoại về buổi họp mặt gia đình.',
    rate: '-12%',
    voices: { N: 'en-AU-NatashaNeural' },
    script: [
      ['N', "Hi Minh, it's Aunt Lan. I'm calling about the family reunion on the twenty-third."],
      ['N', "We've booked a room at the Golden Lotus restaurant for fifty people, so the whole extended family can come – even your cousins from Australia."],
      ['N', "Could you do me a favour? Your grandmother would love to see some old photos. If you have any, please bring them along."],
      ['N', "Also, your uncle asked after you. He hasn't seen you since you were twelve, so he probably won't recognise you!"],
      ['N', 'Lunch starts at half past eleven. Call me back if you have any questions. Bye!'],
    ],
    items: [
      { t: 'gap', q: 'The reunion is on the ___.', a: ['twenty-third', '23rd', 'twenty third'] },
      { t: 'gap', q: 'The room is booked for ___ people.', a: ['fifty', '50'] },
      { t: 'mcq', q: 'What favour does Aunt Lan ask?', o: ['to cook', 'to bring old photos', 'to drive grandmother', 'to pay'], a: 1 },
      { t: 'mcq', q: 'Who asked after Minh?', o: ['his grandmother', 'his uncle', 'his cousins', 'his father'], a: 1 },
      { t: 'gap', q: 'Lunch starts at half past ___.', a: ['eleven', '11'] },
    ],
    dictation: ['Could you do me a favour?', 'Your uncle asked after you.'],
  },
  {
    title: 'Conversation: Falling out with a friend',
    level: '2 · Dễ · 2 giọng',
    desc: 'Lời khuyên khi giận bạn thân.',
    rate: '-5%',
    voices: { Anna: 'en-GB-SoniaNeural', Duc: 'en-US-GuyNeural' },
    script: [
      ['Anna', "You look upset, Duc. What's wrong?"],
      ['Duc', "I've fallen out with Huy. We had an argument about money – he borrowed some and never paid it back."],
      ['Anna', "Oh no. You two have been best friends for years."],
      ['Duc', "I know. But he was really rude when I asked him about it. He said I was being mean."],
      ['Anna', "Have you tried talking to him calmly? Maybe he's having problems and is too embarrassed to say."],
      ['Duc', "I hadn't thought of that. His family has been having a hard time recently."],
      ['Anna', "Then maybe meet him for a coffee. Don't attack him – just tell him you're worried. It takes courage, but it's better than losing a friend."],
      ['Duc', "You're right. I'll message him tonight and see if we can make up."],
    ],
    items: [
      { t: 'mcq', q: 'Why did Duc and Huy fall out?', o: ['a girlfriend', 'money', 'a game', 'school'], a: 1 },
      { t: 'mcq', q: 'What did Huy say to Duc?', o: ['that he was sorry', 'that Duc was being mean', 'that he would pay soon', 'nothing'], a: 1 },
      { t: 'mcq', q: 'What does Anna suggest might be the reason?', o: ['Huy is lazy.', 'Huy may be having problems and feel embarrassed.', 'Huy is angry with Anna.', 'Huy forgot.'], a: 1 },
      { t: 'mcq', q: 'What does Anna advise?', o: ['ask for the money again', 'meet calmly and say you’re worried', 'ignore him', 'tell his parents'], a: 1 },
      { t: 'tf', q: 'Duc decides to message Huy tonight.', a: 'T' },
    ],
    dictation: ["I've fallen out with Huy.", "It takes courage, but it's better than losing a friend."],
  },
  {
    title: 'Talk: Volunteering with elderly people',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Một tình nguyện viên kể về công việc.',
    rate: '+0%',
    voices: { Speaker: 'en-GB-LibbyNeural' },
    script: [
      ['Speaker', "Two years ago, I started volunteering at a care home near my university. To be honest, I only did it because it looked good on my CV."],
      ['Speaker', "But it changed my life. I was assigned to a man called Mr Harris, who was ninety-one. At first he was quite bad-tempered and hardly spoke to me. I almost gave up."],
      ['Speaker', "Then one day I mentioned that I was studying history, and suddenly he couldn't stop talking. He'd been a teacher for forty years and had lived through events I'd only read about in books."],
      ['Speaker', "We became close friends. I visited him every Saturday, and he helped me with my essays. When he passed away last spring, I felt I'd lost a grandfather."],
      ['Speaker', "My advice? Don't look down on older people or assume they have nothing to offer. Many of them are lonely, but they're also full of stories, wisdom and humour. You'll get far more than you give."],
    ],
    items: [
      { t: 'mcq', q: 'Why did the speaker start volunteering?', o: ['to meet people', 'it looked good on her CV', 'her grandfather lived there', 'for money'], a: 1 },
      { t: 'gap', q: 'Mr Harris was ___ years old.', a: ['ninety-one', '91', 'ninety one'] },
      { t: 'mcq', q: 'What was Mr Harris like at first?', o: ['very friendly', 'bad-tempered and quiet', 'funny', 'sad'], a: 1 },
      { t: 'mcq', q: 'What made him start talking?', o: ['food', 'history', 'music', 'sport'], a: 1 },
      { t: 'mcq', q: 'What is the speaker’s advice?', o: ['volunteer for money', 'don’t look down on older people', 'avoid care homes', 'study history'], a: 1 },
    ],
    dictation: ["Don't look down on older people.", "You'll get far more than you give."],
  },
  {
    title: 'Radio interview: Growing up as an only child',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn nhà tâm lý về con một.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-RyanNeural', 'Dr Hall': 'en-US-AriaNeural' },
    script: [
      ['Presenter', "The number of families with only one child is increasing. There's a common belief that only children are spoilt and selfish. Dr Rachel Hall, is that true?"],
      ['Dr Hall', "It's a very old idea, but research doesn't really support it. Large studies have found very few differences in personality between only children and those with brothers and sisters."],
      ['Presenter', 'So where does the idea come from?'],
      ['Dr Hall', "Partly from the past, when only children were unusual. People assumed they must be different. But today, most only children go to nursery and school from an early age, so they learn to share and get on with others just like everyone else."],
      ['Presenter', 'Are there any advantages to being an only child?'],
      ['Dr Hall', "Some studies suggest only children do slightly better at school, possibly because they get more attention from their parents. They also tend to be quite independent and comfortable with their own company."],
      ['Presenter', 'And disadvantages?'],
      ['Dr Hall', "Some only children feel a lot of pressure, because all their parents' hopes are focused on them. And later in life, they may have to care for elderly parents on their own."],
    ],
    items: [
      { t: 'mcq', q: 'What is the common belief about only children?', o: ['They are clever.', 'They are spoilt and selfish.', 'They are shy.', 'They are lonely.'], a: 1 },
      { t: 'tf', q: 'Research strongly supports the belief.', a: 'F' },
      { t: 'mcq', q: 'Why do most only children learn to share today?', o: ['parents teach them', 'they go to nursery and school early', 'they have cousins', 'they watch TV'], a: 1 },
      { t: 'mcq', q: 'Which advantage is mentioned?', o: ['more friends', 'slightly better at school', 'better at sport', 'richer'], a: 1 },
      { t: 'mcq', q: 'Which disadvantage is mentioned?', o: ['pressure from parents’ hopes', 'poor health', 'bad manners', 'fewer toys'], a: 0 },
    ],
    dictation: ['Research does not really support it.', 'They tend to be quite independent.'],
  },
  {
    title: 'Discussion: Is social media making young people less kind?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3 về mạng xã hội và cách cư xử.',
    rate: '+5%',
    voices: { Host: 'en-US-JennyNeural', Kevin: 'en-GB-ThomasNeural', Mai: 'en-AU-NatashaNeural' },
    script: [
      ['Host', "There's a lot of cruelty online – insults, bullying, people putting others down. Kevin, is social media making young people less kind?"],
      ['Kevin', "I think it plays a part. When you can't see someone's face, it's much easier to be unkind. People say things online that they'd never say in person."],
      ['Mai', "I'd agree that online behaviour can be awful. But I'm not sure young people are less kind than previous generations. Bullying existed long before the Internet."],
      ['Kevin', "True, but in the past it stopped when you went home. Now it can follow you everywhere, twenty-four hours a day."],
      ['Mai', "That's a fair point. But social media also shows the opposite. Young people use it to raise money for charity, to support people going through hard times, to stand up for those who are treated unfairly."],
      ['Host', "So what should be done?"],
      ['Kevin', "Schools should teach online behaviour as seriously as they teach maths. And platforms should make it much easier to report abuse."],
      ['Mai', "And parents need to set an example. Children copy what they see – including how adults behave online."],
    ],
    items: [
      { t: 'mcq', q: 'Why is it easier to be unkind online, according to Kevin?', o: ['People are anonymous and can’t see faces.', 'It is faster.', 'It is free.', 'Nobody reads comments.'], a: 0 },
      { t: 'mcq', q: 'What is Mai’s first point?', o: ['Bullying is new.', 'Bullying existed long before the Internet.', 'Social media is safe.', 'Young people are kinder.'], a: 1 },
      { t: 'mcq', q: 'How is online bullying different, according to Kevin?', o: ['It is less serious.', 'It can follow you everywhere, all day.', 'It only happens at school.', 'It is easy to stop.'], a: 1 },
      { t: 'mcq', q: 'Which positive use of social media does Mai mention?', o: ['raising money for charity', 'playing games', 'shopping', 'watching films'], a: 0 },
      { t: 'mcq', q: 'What does Mai say parents should do?', o: ['ban phones', 'set an example', 'read children’s messages', 'nothing'], a: 1 },
    ],
    dictation: ["People say things online that they'd never say in person.", 'Children copy what they see.'],
  },
];

const exercises = [
  {
    title: 'A. Từ dễ nhầm – chọn từ đúng',
    instruction: 'Chọn từ đúng.',
    items: [
      { t: 'mcq', q: 'I have a very good ___ with my parents.', o: ['relationship', 'connection'], a: 0 },
      { t: 'mcq', q: 'Don’t worry – it wasn’t your ___.', o: ['fault', 'blame'], a: 0 },
      { t: 'mcq', q: 'The ___ clapped at the end of the play.', o: ['audience', 'crowd'], a: 0 },
      { t: 'mcq', q: 'She’s very ___ – she gets upset easily.', o: ['sensitive', 'sensible'], a: 0 },
      { t: 'mcq', q: 'That sounds like a ___ plan.', o: ['sensible', 'sensitive'], a: 0 },
      { t: 'mcq', q: 'He’s my ___ friend – we tell each other everything.', o: ['close', 'near'], a: 0 },
      { t: 'mcq', q: 'The prison was ___ for its terrible conditions.', o: ['infamous', 'unknown'], a: 0 },
      { t: 'mcq', q: 'She’s very ___ with her classmates – everyone likes her.', o: ['popular', 'famous'], a: 0 },
      { t: 'mcq', q: 'He was late, as ___.', o: ['usual', 'typical', 'ordinary'], a: 0 },
      { t: 'mcq', q: 'I really enjoy my grandmother’s ___.', o: ['company', 'group'], a: 0 },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: ask after, bring up, fall out, get on, grow up, look down on, look up to, make up, pass away, pick on, settle down, stand up for (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'I was ___ by my grandparents in the countryside.', a: ['brought up'] },
      { t: 'gap', q: 'I ___ with my best friend over something silly.', a: ['fell out'] },
      { t: 'gap', q: 'They argued, but they ___ the next day.', a: ['made up'] },
      { t: 'gap', q: 'Do you ___ well with your neighbours?', a: ['get on'] },
      { t: 'gap', q: 'I’ve always ___ my older sister.', a: ['looked up to'] },
      { t: 'gap', q: 'Nobody should ___ people because they are poor.', a: ['look down on'] },
      { t: 'gap', q: 'My grandfather ___ last year at the age of 90.', a: ['passed away'] },
      { t: 'gap', q: 'Older boys used to ___ him at school.', a: ['pick on'] },
      { t: 'gap', q: 'You have to ___ what you believe in.', a: ['stand up for'] },
      { t: 'gap', q: 'After years of travelling, she decided to ___.', a: ['settle down'] },
    ],
  },
  {
    title: 'C. Cụm từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Could you ___ me a favour?', o: ['do', 'make', 'give'], a: 0 },
      { t: 'mcq', q: 'I’m not in the ___ for going out tonight.', o: ['mood', 'favour', 'care'], a: 0 },
      { t: 'mcq', q: 'It’s a ___ you can’t come to the party.', o: ['pity', 'favour', 'care'], a: 0 },
      { t: 'mcq', q: 'He always ___ his promises.', o: ['keeps', 'makes', 'does'], a: 0 },
      { t: 'mcq', q: 'Most people are in ___ of the new law.', o: ['favour', 'approval', 'mood'], a: 0 },
      { t: 'mcq', q: 'Her parents didn’t approve ___ her boyfriend.', o: ['of', 'to', 'with'], a: 0 },
      { t: 'mcq', q: 'My parents let me ___ my own university.', o: ['choose', 'to choose', 'choosing'], a: 0 },
      { t: 'mcq', q: 'He was banned ___ driving for a year.', o: ['from', 'of', 'to'], a: 0 },
      { t: 'mcq', q: 'Many residents objected ___ the new building.', o: ['to', 'against', 'for'], a: 0 },
      { t: 'mcq', q: 'Elderly people often rely ___ their children.', o: ['on', 'to', 'for'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'Buildings should be accessible to people with ___. (ABLE)', a: ['disabilities', 'disability'] },
      { t: 'gap', q: 'Getting into university was a great ___. (ACHIEVE)', a: ['achievement'] },
      { t: 'gap', q: 'Teenagers can be very ___. (ARGUE)', a: ['argumentative'] },
      { t: 'gap', q: 'She’s a warm, ___ person. (CARE)', a: ['caring'] },
      { t: 'gap', q: 'Their ___ lasted fifty years. (FRIEND)', a: ['friendship'] },
      { t: 'gap', q: 'Money doesn’t always bring ___. (HAPPY)', a: ['happiness'] },
      { t: 'gap', q: '___ can destroy a friendship. (JEALOUS)', a: ['Jealousy', 'jealousy'] },
      { t: 'gap', q: 'Small acts of ___ make a big difference. (KIND)', a: ['kindness'] },
      { t: 'gap', q: 'She has a very strong ___. (PERSON)', a: ['personality'] },
      { t: 'gap', q: 'It’s ___ to interrupt people. (POLITE)', a: ['impolite'] },
      { t: 'gap', q: 'Employers value a ___ to learn. (WILLING)', a: ['willingness'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['make', 'friends'], ['start', 'a family'], ['keep', 'a promise'], ['have', 'an argument'], ['the extended', 'family'], ['fall', 'in love'], ['in a good', 'mood'], ['an act of', 'kindness']] },
    ],
  },
  {
    title: 'F. Viết lại câu',
    instruction: 'Viết lại câu dùng từ trong ngoặc, giữ nguyên nghĩa.',
    items: [
      { t: 'fix', q: 'I admire and respect my teacher. (look)', a: ['I look up to my teacher.'] },
      { t: 'fix', q: 'We became friends again after the argument. (made)', a: ['We made up after the argument.'] },
      { t: 'fix', q: 'My parents allowed me to go. (let)', a: ['My parents let me go.'] },
      { t: 'fix', q: 'I was very surprised by his reply. (aback)', a: ['I was taken aback by his reply.'] },
      { t: 'fix', q: 'It’s sad that you can’t come. (pity)', a: ["It's a pity that you can't come.", "It's a pity you can't come.", 'It is a pity that you cannot come.'] },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi được ông bà nuôi dạy ở quê.', ref: 'I was brought up by my grandparents in the countryside.', focus: 'bring up' },
      { t: 'tr', vi: 'Tôi rất hòa hợp với anh chị em của mình.', ref: 'I get on very well with my brothers and sisters.', focus: 'get on with' },
      { t: 'tr', vi: 'Tôi luôn ngưỡng mộ mẹ vì sự chăm chỉ của bà.', ref: 'I have always looked up to my mother for her hard work.', focus: 'look up to' },
      { t: 'tr', vi: 'Nhiều cặp đôi trẻ chờ lâu hơn trước khi lập gia đình.', ref: 'Many young couples are waiting longer before starting a family.', focus: 'start a family (IELTS)' },
      { t: 'tr', vi: 'Người cao tuổi thường phụ thuộc vào con cái để được hỗ trợ.', ref: 'Elderly people often rely on their children for support.', focus: 'rely on' },
      { t: 'tr', vi: 'Những hành động tử tế nhỏ có thể tạo ra sự khác biệt lớn.', ref: 'Small acts of kindness can make a big difference.', focus: 'kindness, make a difference' },
      { t: 'tr', vi: 'Theo tôi, trách nhiệm chăm sóc người già nên được chia sẻ giữa gia đình và nhà nước.', ref: 'In my opinion, the responsibility for caring for the elderly should be shared between families and the state.', focus: 'IELTS Writing Task 2' },
      { t: 'tr', vi: 'Thật đáng tiếc là bạn không thể đến dự đám cưới.', ref: "It's a pity you can't come to the wedding.", focus: "it's a pity" },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Who are you closest to in your family?' },
  { part: 'Part 1', q: 'Do you prefer spending time alone or with other people?' },
  { part: 'Part 1', q: 'How do you usually make new friends?' },
  { part: 'Part 1', q: 'Is there anyone you look up to?' },
  { part: 'Part 2', q: 'Describe a person who has had a strong influence on you.', cue: ['who this person is', 'how you know them', 'what they have done for you', 'and explain why they have influenced you so much'] },
  { part: 'Part 3', q: 'Why are people getting married later than in the past?' },
  { part: 'Part 3', q: 'Should adult children look after their elderly parents?' },
  { part: 'Part 3', q: 'Are celebrities good role models for young people?' },
  { part: 'Part 3', q: 'Why do some people feel lonely even though they are always connected online?' },
];

export default {
  id: 'b2-u10',
  book: 'b2',
  no: 10,
  title: 'People and society',
  titleVi: 'Con người & xã hội',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
