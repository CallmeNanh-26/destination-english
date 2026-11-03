// Unit 39 – Vocabulary: Laughing and crying (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u39-vocab.js';

const reading = [
  {
    title: 'The most embarrassing day of my life',
    level: 'Dễ · ~200 từ',
    text: `When I was fourteen, I was very shy. I hated speaking in front of people, and I always sat at the back of the class.

One day, our English teacher asked everyone to give a short talk about their favourite hobby. I was so nervous about it that I couldn't sleep the night before.

When it was my turn, I walked to the front of the class with my notes. At first, everything went well. But then I dropped my notes on the floor. When I bent down to pick them up, I hit my head on the teacher's desk! Everyone started laughing. I felt my face go red, and I wanted to run away.

But then something strange happened. I started laughing too. I couldn't stop! The teacher was laughing, my friends were laughing, and in the end even the shyest girl in the class was in tears from laughing so much.

When we calmed down, I finished my talk. It wasn't perfect, but at least I did it. Since that day, I've never been so scared of speaking in public. I learnt that when something embarrassing happens, the best thing to do is laugh at yourself.`,
    items: [
      { t: 'gap', q: 'The writer was ___ years old.', a: ['fourteen', '14'] },
      { t: 'mcq', q: 'How did the writer feel about the talk?', o: ['excited', 'nervous', 'bored', 'angry'], a: 1 },
      { t: 'mcq', q: 'What happened when the writer picked up the notes?', o: ['fell over', 'hit their head on the desk', 'tore the notes', 'cried'], a: 1 },
      { t: 'tf', q: 'The writer ran out of the classroom.', a: 'F' },
      { t: 'tf', q: 'The writer finished the talk in the end.', a: 'T' },
      { t: 'mcq', q: 'What lesson did the writer learn?', o: ['never speak in public', 'laugh at yourself when something embarrassing happens', 'always use notes', 'sit at the back'], a: 1 },
    ],
  },
  {
    title: 'Laughter yoga: laughing for no reason',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `Imagine a group of adults standing in a park early in the morning, laughing loudly – but nobody has told a joke. This is laughter yoga, and it is now practised in more than a hundred countries.

Laughter yoga was started in 1995 by an Indian doctor, Madan Kataria. He had read that laughing is good for our health, so he decided to start a laughter club. At first, members took turns telling jokes. But after a few weeks, they ran out of good jokes, and some of the jokes were rude. So Dr Kataria had a new idea: what if people laughed without jokes?

He discovered that the body cannot tell the difference between real laughter and "fake" laughter. Both have the same benefits. And when people laugh together, the fake laughter quickly becomes real – laughing is very catching!

A typical session lasts about thirty minutes. It includes breathing exercises, clapping and silly activities, such as pretending to be a lion or laughing like you have just heard the funniest joke in the world.

Supporters say that laughter yoga reduces stress, improves your mood and helps you to feel closer to other people. Some companies now use it to cheer up their workers, and some hospitals use it with patients.

Of course, not everyone is enthusiastic. Some people feel ridiculous laughing for no reason, especially in public. But as Dr Kataria says, "We don't laugh because we are happy – we are happy because we laugh."`,
    items: [
      { t: 'gap', q: 'Laughter yoga is practised in more than ___ countries.', a: ['a hundred', '100', 'one hundred'] },
      { t: 'gap', q: 'It was started in ___.', a: ['1995'] },
      { t: 'mcq', q: 'Why did the club stop telling jokes?', o: ['Jokes were too long.', 'They ran out of good jokes and some were rude.', 'Nobody laughed.', 'The doctor didn’t like jokes.'], a: 1 },
      { t: 'tf', q: 'The body can tell the difference between real and fake laughter.', a: 'F' },
      { t: 'gap', q: 'A typical session lasts about ___ minutes.', a: ['thirty', '30'] },
      { t: 'mcq', q: 'Why do some people not like laughter yoga?', o: ['It is expensive.', 'They feel ridiculous laughing for no reason.', 'It is dangerous.', 'It takes too long.'], a: 1 },
    ],
  },
  {
    title: 'Big boys do cry',
    level: 'Trung bình · ~330 từ',
    text: `"Stop crying – be a man!" Many boys around the world grow up hearing words like these. From an early age, they learn that showing emotions such as sadness or fear is a sign of weakness. But psychologists say that this attitude may be seriously harming men's health.

Crying is a natural human reaction. Babies of both sexes cry the same amount, and young boys and girls cry almost equally. The difference begins around the age of eleven or twelve, when boys start to feel ashamed of tears. By adulthood, women in many countries cry several times more often than men.

Why does this matter? Scientists believe that crying helps us to deal with stress. After a good cry, many people say they feel calmer and more relaxed. Crying also tells other people that we need help, which can bring us closer to friends and family. Men who hide their feelings may find it harder to ask for support when they are going through a difficult time.

There are serious consequences. In many countries, men are much less likely than women to see a doctor about depression, and much more likely to suffer in silence. Some experts believe this is one reason why the rate of suicide is higher among men.

The good news is that attitudes are changing. Famous sportsmen have spoken openly about crying after important matches, and some schools now teach children of both sexes how to talk about their emotions. Campaigns encourage men to "talk to a mate" when they feel miserable.

Nobody is saying that men should cry all the time. But being able to show our feelings – at least with the people we trust – is not a weakness. As one psychologist put it, "It takes a strong person to admit they are hurting."`,
    items: [
      { t: 'mcq', q: 'What do many boys learn from an early age?', o: ['that crying is healthy', 'that showing emotions is a sign of weakness', 'to talk about feelings', 'to laugh more'], a: 1 },
      { t: 'tf', q: 'Baby boys cry less than baby girls.', a: 'F' },
      { t: 'gap', q: 'The difference begins around the age of eleven or ___.', a: ['twelve', '12'] },
      { t: 'mcq', q: 'How do many people feel after crying?', o: ['angry', 'calmer and more relaxed', 'more stressed', 'embarrassed'], a: 1 },
      { t: 'tf', q: 'Men are more likely than women to see a doctor about depression.', a: 'F' },
      { t: 'mcq', q: 'Which is evidence that attitudes are changing?', o: ['Men cry less.', 'Sportsmen speak openly about crying.', 'Schools ban crying.', 'Doctors refuse to help.'], a: 1 },
      { t: 'mcq', q: 'What is the main message of the article?', o: ['Men should cry all the time.', 'Showing feelings is not a weakness.', 'Women cry too much.', 'Crying is bad for health.'], a: 1 },
    ],
  },
  {
    title: 'Online bullying: no place to hide',
    level: 'Trung bình–Khó · ~370 từ',
    text: `In the past, children who were bullied at school could at least escape when they went home. Today, that is no longer true. With smartphones and social media, bullies can follow their victims everywhere, 24 hours a day. This is known as cyberbullying, and research suggests that around one in three young people have experienced it.

Cyberbullying takes many forms. It can involve sending rude or threatening messages, spreading rumours, sharing embarrassing photos, or deliberately leaving someone out of an online group. Because messages can be shared with hundreds of people in seconds, the hurt can be much greater than with traditional bullying. And because bullies can hide behind fake names, victims often don't even know who is attacking them.

The effects can be serious. Victims may become depressed, anxious and unable to concentrate at school. Many feel too ashamed or frightened to tell anyone, especially their parents, because they are worried that their phone will be taken away.

So what can be done? Experts give several pieces of advice to young people. First, don't react. Bullies want a reaction, so replying angrily usually makes things worse. Second, keep the evidence: take screenshots of messages before you block the person. Third, and most importantly, tell someone you trust – a parent, a teacher or a friend.

Schools also have an important role. Many now teach students about online behaviour, and some have introduced systems that allow students to report bullying in secret. Social media companies, meanwhile, are under pressure to remove harmful content more quickly and to make it easier to report abuse.

But perhaps the most powerful solution lies with ordinary users. Research shows that bullying usually stops quickly when someone who is watching speaks up. A simple message such as "That's not funny" or a private word of support to the victim can make an enormous difference. As one campaign puts it: "Don't just scroll past – be the one who says something."`,
    items: [
      { t: 'mcq', q: 'How is cyberbullying different from bullying in the past?', o: ['It only happens at school.', 'Victims cannot escape at home.', 'It is less serious.', 'It only affects adults.'], a: 1 },
      { t: 'gap', q: 'Around one in ___ young people have experienced cyberbullying.', a: ['three', '3'] },
      { t: 'mcq', q: 'Which is NOT mentioned as a form of cyberbullying?', o: ['spreading rumours', 'sharing embarrassing photos', 'leaving someone out of a group', 'stealing money'], a: 3 },
      { t: 'tf', q: 'Victims always know who is bullying them.', a: 'F' },
      { t: 'mcq', q: 'Why don’t many victims tell their parents?', o: ['Their parents are too busy.', 'They worry their phone will be taken away.', 'Their parents are bullies.', 'They don’t care.'], a: 1 },
      { t: 'mcq', q: 'What is the first piece of advice?', o: ['reply angrily', 'don’t react', 'delete everything', 'change school'], a: 1 },
      { t: 'tf', q: 'Bullying often stops quickly when a witness speaks up.', a: 'T' },
    ],
  },
  {
    title: 'The science of laughter',
    level: 'Khó · ~420 từ · IELTS',
    text: `We tend to assume that laughter is simply a reaction to something funny. Yet research suggests that this is only a small part of the story. When the psychologist Robert Provine and his students recorded more than a thousand examples of people laughing in everyday situations, they found that fewer than one in five laughs followed anything resembling a joke. Most came after ordinary comments such as "See you later" or "I know". Laughter, it seems, is less about humour than about relationships.

This explains why we are around thirty times more likely to laugh when we are with other people than when we are alone. Laughter sends a signal: it shows that we feel relaxed, that we agree, or that we are friendly. Even rats and chimpanzees "laugh" when they play, which suggests that laughter developed long before language as a way of building social bonds. Studies have also found that groups of friends laugh more together than groups of strangers, and that people who share a sense of humour tend to like each other more.

The physical benefits of laughter are also well documented. A good laugh increases the flow of blood, relaxes the muscles, and causes the brain to release endorphins – chemicals that make us feel good and can even reduce pain. One experiment found that people who had watched a comedy video for fifteen minutes could tolerate around ten percent more pain than those who had watched a serious documentary. Laughter also appears to reduce levels of stress hormones, though scientists warn against claims that it can cure serious illnesses.

However, laughter is not always positive. People may laugh nervously when they are embarrassed, or laugh at someone in order to exclude or bully them. Humour can also be easily misunderstood across cultures: a joke that seems harmless in one country may be considered rude or offensive in another. In the workplace, managers who use humour well can create a more positive atmosphere, but jokes that target particular people can quickly damage trust.

Perhaps the most important lesson from laughter research is that humour cannot easily be forced. Laughter is most powerful when it is shared and spontaneous. In an age when many people spend hours alone in front of screens, the simple act of laughing with friends may be one of the most effective – and enjoyable – ways to protect both our mental and physical health.`,
    items: [
      { t: 'mcq', q: 'What did Provine’s research find?', o: ['Most laughter follows jokes.', 'Fewer than one in five laughs followed something like a joke.', 'People laugh more alone.', 'Animals never laugh.'], a: 1 },
      { t: 'gap', q: 'We are around ___ times more likely to laugh with other people than alone.', a: ['thirty', '30'] },
      { t: 'mcq', q: 'What does the fact that rats and chimpanzees “laugh” suggest?', o: ['Laughter developed before language to build social bonds.', 'Animals tell jokes.', 'Laughter is only human.', 'Animals are stressed.'], a: 0 },
      { t: 'tf', q: 'Endorphins can reduce pain.', a: 'T' },
      { t: 'gap', q: 'People who watched a comedy could tolerate around ___ percent more pain.', a: ['ten', '10'] },
      { t: 'tf', q: 'Scientists say laughter can cure serious illnesses.', a: 'F' },
      { t: 'mcq', q: 'Which negative side of laughter is mentioned?', o: ['It raises blood pressure.', 'It can be used to bully or exclude people.', 'It causes pain.', 'It wastes time.'], a: 1 },
      { t: 'mcq', q: 'What is the writer’s main conclusion?', o: ['Humour should be forced at work.', 'Shared, spontaneous laughter protects our health.', 'Screens make us laugh more.', 'Laughter is mostly about jokes.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Voicemail: I’m so sorry!',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Tin nhắn thoại xin lỗi một người bạn.',
    rate: '-15%',
    voices: { N: 'en-GB-LibbyNeural' },
    script: [
      ['N', "Hi Anna, it's Kate. I'm calling because I'm really sorry about yesterday."],
      ['N', "I know you were upset when I laughed at your new haircut. It was rude of me, and I didn't mean to hurt your feelings. Actually, I think it looks great."],
      ['N', "I've been feeling miserable about it all day. Can I take you out for a coffee on Saturday to say sorry? My treat!"],
      ['N', "Call me back when you get this message. And please don't be angry with me for too long! Bye."],
    ],
    items: [
      { t: 'mcq', q: 'Why is Kate calling?', o: ['to invite Anna to a party', 'to say sorry', 'to ask for help', 'to tell a joke'], a: 1 },
      { t: 'mcq', q: 'What did Kate laugh at?', o: ['Anna’s dress', 'Anna’s haircut', 'Anna’s joke', 'Anna’s shoes'], a: 1 },
      { t: 'tf', q: 'Kate really thinks the haircut looks bad.', a: 'F' },
      { t: 'gap', q: 'Kate wants to take Anna out for a ___ on Saturday.', a: ['coffee'] },
      { t: 'tf', q: 'Kate will pay.', a: 'T' },
    ],
    dictation: ["I didn't mean to hurt your feelings.", "I've been feeling miserable about it all day."],
  },
  {
    title: 'Conversation: Cheer up!',
    level: '2 · Dễ · 2 giọng',
    desc: 'Một người bạn an ủi bạn mình sau khi trượt bài thi.',
    rate: '-5%',
    voices: { Tom: 'en-GB-RyanNeural', Mai: 'en-AU-NatashaNeural' },
    script: [
      ['Tom', "Hey Mai, what's wrong? You look really upset."],
      ['Mai', "I failed my driving test. Again. That's the third time!"],
      ['Tom', "Oh no, I'm sorry. What happened?"],
      ['Mai', "I was so nervous that I forgot to look in the mirror. The examiner stopped the test after ten minutes. It was so embarrassing."],
      ['Tom', "Come on, don't be so hard on yourself. Lots of people fail the first few times. My brother failed four times!"],
      ['Mai', "Really? But he's a great driver now."],
      ['Tom', "Exactly. And you're a good driver too – you just need to stay calm. Why don't we go for a drive at the weekend? I'll help you practise."],
      ['Mai', "That would be great. Thanks, Tom. You always know how to cheer me up."],
      ['Tom', "And when you pass, we'll celebrate with a big dinner. You're paying, of course!"],
      ['Mai', "Ha! Deal."],
    ],
    items: [
      { t: 'mcq', q: 'Why is Mai upset?', o: ['She lost her job.', 'She failed her driving test.', 'She had an accident.', 'She lost her phone.'], a: 1 },
      { t: 'gap', q: 'It was Mai’s ___ time failing.', a: ['third', '3rd'] },
      { t: 'mcq', q: 'What did Mai forget to do?', o: ['wear a seatbelt', 'look in the mirror', 'stop at a red light', 'turn on the lights'], a: 1 },
      { t: 'gap', q: 'Tom’s brother failed ___ times.', a: ['four', '4'] },
      { t: 'mcq', q: 'What does Tom offer to do?', o: ['pay for lessons', 'help her practise at the weekend', 'drive her everywhere', 'talk to the examiner'], a: 1 },
      { t: 'tf', q: 'Tom says he will pay for the celebration dinner.', a: 'F' },
    ],
    dictation: ["Don't be so hard on yourself.", 'You always know how to cheer me up.'],
  },
  {
    title: 'Talk: How I became a comedian',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Một diễn viên hài kể về con đường đến với nghề.',
    rate: '+0%',
    voices: { Speaker: 'en-US-JennyNeural' },
    script: [
      ['Speaker', "People are often surprised when I tell them that I was an extremely shy child. At school, I hardly spoke at all. But at home, I was different. I used to tell jokes to my family and make my little sister laugh until she was in tears."],
      ['Speaker', "When I was twenty-two, a friend dared me to try a comedy night at a local bar. I was terrified. My hands were shaking, and at first nobody laughed. Then I told a story about my grandmother trying to use a smartphone, and the whole room exploded. That feeling was amazing – I wanted to feel it again."],
      ['Speaker', "For the next five years, I performed almost every night, often for free. Some nights went really badly. Once, someone in the audience shouted 'You're not funny!' and I wanted to run away. But you learn to deal with it."],
      ['Speaker', "The secret of comedy, I think, is honesty. The best jokes come from real life – embarrassing moments, family arguments, things everyone has experienced but nobody talks about."],
      ['Speaker', "My advice to anyone who wants to try it? Don't wait until you feel confident. Just go on stage. The confidence comes later."],
    ],
    items: [
      { t: 'mcq', q: 'What was the speaker like at school?', o: ['very noisy', 'extremely shy', 'naughty', 'popular'], a: 1 },
      { t: 'gap', q: 'She first tried comedy at the age of ___.', a: ['twenty-two', '22', 'twenty two'] },
      { t: 'mcq', q: 'Which story made the audience laugh?', o: ['about her sister', 'about her grandmother using a smartphone', 'about school', 'about a bar'], a: 1 },
      { t: 'gap', q: 'She performed almost every night for ___ years.', a: ['five', '5'] },
      { t: 'mcq', q: 'According to her, what is the secret of comedy?', o: ['confidence', 'honesty', 'being rude', 'long practice'], a: 1 },
      { t: 'tf', q: 'She advises people to wait until they feel confident.', a: 'F' },
    ],
    dictation: ['The best jokes come from real life.', 'The confidence comes later.'],
  },
  {
    title: 'Radio interview: Dealing with exam stress',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn chuyên gia tâm lý về căng thẳng thi cử.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', 'Dr Reed': 'en-GB-ThomasNeural' },
    script: [
      ['Presenter', "With exam season approaching, many students are feeling the pressure. Dr Simon Reed is a psychologist who works with teenagers. Dr Reed, is some stress actually a good thing?"],
      ['Dr Reed', "Yes, a little stress can help you to focus and work harder. The problem starts when it becomes too much – when students can't sleep, stop eating properly, or feel miserable all the time."],
      ['Presenter', 'What are the warning signs that parents should look out for?'],
      ['Dr Reed', "Changes in behaviour. A child who is usually calm might suddenly become bad-tempered, or a sociable child might stop seeing friends. Some students also complain of headaches or stomach aches."],
      ['Presenter', 'And what can students do to help themselves?'],
      ['Dr Reed', "First, take regular breaks – studying for hours without stopping is actually less effective. Second, exercise; even a twenty-minute walk can improve your mood. Third, talk to someone. Many students feel embarrassed about admitting they're struggling, but sharing a problem really does help."],
      ['Presenter', 'What about parents? How can they help?'],
      ['Dr Reed', "By staying calm themselves! Children react to their parents' anxiety. And it's important not to compare them with brothers, sisters or friends. Praise effort, not just results. Remind them that one exam doesn't decide their whole future."],
    ],
    items: [
      { t: 'tf', q: 'Dr Reed thinks all stress is bad.', a: 'F' },
      { t: 'mcq', q: 'Which is a warning sign mentioned?', o: ['eating more', 'changes in behaviour', 'studying more', 'sleeping too much'], a: 1 },
      { t: 'mcq', q: 'Why should students take regular breaks?', o: ['It’s more fun.', 'Studying without stopping is less effective.', 'Teachers say so.', 'It saves time.'], a: 1 },
      { t: 'gap', q: 'Even a ___-minute walk can improve your mood.', a: ['twenty', '20'] },
      { t: 'mcq', q: 'What should parents praise?', o: ['results only', 'effort', 'good behaviour', 'grades'], a: 1 },
      { t: 'tf', q: 'Dr Reed says parents should compare children with their friends.', a: 'F' },
    ],
    dictation: ['A little stress can help you to focus.', 'One exam does not decide their whole future.'],
  },
  {
    title: 'Discussion: Should children have smartphones?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3: trẻ em có nên dùng điện thoại thông minh?',
    rate: '+5%',
    voices: { Host: 'en-US-GuyNeural', Helen: 'en-GB-SoniaNeural', Raj: 'en-AU-WilliamNeural' },
    script: [
      ['Host', "Several countries are now discussing banning smartphones for children under fourteen. Helen, you're a head teacher. Would you support that?"],
      ['Helen', "I would. Since phones became common, we've seen a sharp increase in anxiety and depression among young people. Children compare themselves with others all the time, and cyberbullying follows them home. They need time to grow up without that pressure."],
      ['Raj', "I understand the concern, but I'm not convinced a ban is the answer. Phones aren't just for social media. Children use them to keep in touch with parents, to study, to find information. If we take them away, we're just delaying the problem."],
      ['Helen', "Nobody's saying children should never use technology. A basic phone for calls and messages is fine. It's the constant access to social media that worries me."],
      ['Raj', "But children will find a way round any ban – they always do. I think it's better to teach them how to use phones responsibly: how to deal with rude messages, when to switch off, how to recognise fake news."],
      ['Helen', "Education is important, I agree. But we don't give children alcohol and then teach them to drink responsibly. Some things are simply not suitable for young brains."],
      ['Host', 'Is there any middle ground?'],
      ['Raj', "Maybe. Phone-free schools seem to work well – students talk to each other more at break time. And parents could agree with each other to delay smartphones, so no child feels left out."],
      ['Helen', "Exactly. If all the parents in a class agree, the pressure disappears."],
    ],
    items: [
      { t: 'gap', q: 'Some countries are discussing a ban for children under ___.', a: ['fourteen', '14'] },
      { t: 'mcq', q: 'Why does Helen support a ban?', o: ['Phones are expensive.', 'There has been an increase in anxiety and depression.', 'Children don’t study.', 'Phones break easily.'], a: 1 },
      { t: 'mcq', q: 'What does Raj think?', o: ['A ban is the best solution.', 'It is better to teach responsible use.', 'Phones should be free.', 'Children should use phones all day.'], a: 1 },
      { t: 'tf', q: 'Helen thinks children should never use any technology.', a: 'F' },
      { t: 'mcq', q: 'What comparison does Helen make?', o: ['with cars', 'with alcohol', 'with television', 'with books'], a: 1 },
      { t: 'mcq', q: 'What middle ground do they agree on?', o: ['phone-free schools and parents agreeing together', 'banning all phones', 'giving every child a smartphone', 'more social media'], a: 0 },
    ],
    dictation: ['Cyberbullying follows them home.', 'If all the parents in a class agree, the pressure disappears.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền: annoy, attitude, bad-tempered, behave, bully, celebrate, embarrassing, polite, react, regret, ridiculous, shy.',
    items: [
      { t: 'gap', q: 'It really ___ me when people talk during a film.', a: ['annoys'] },
      { t: 'gap', q: 'She has a really positive ___ to life.', a: ['attitude'] },
      { t: 'gap', q: 'My dad gets ___ when he’s hungry.', a: ['bad-tempered', 'bad tempered'] },
      { t: 'gap', q: 'The children ___ very well at the wedding.', a: ['behaved'] },
      { t: 'gap', q: 'He was ___ at school because he was different.', a: ['bullied'] },
      { t: 'gap', q: 'We went out for dinner to ___ her new job.', a: ['celebrate'] },
      { t: 'gap', q: 'Falling over on stage was so ___!', a: ['embarrassing'] },
      { t: 'gap', q: 'It’s ___ to say thank you.', a: ['polite'] },
      { t: 'gap', q: 'I’m not sure how Tom will ___ to the news.', a: ['react'] },
      { t: 'gap', q: 'I ___ not studying harder at school.', a: ['regret'] },
      { t: 'gap', q: 'You look ___ in that hat!', a: ['ridiculous'] },
      { t: 'gap', q: 'I was too ___ to speak in class.', a: ['shy'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền một từ: calm down, cheer up, come on, go on, hang on, run away, shut up, speak up.',
    items: [
      { t: 'gap', q: 'Come ___, or we’re going to be late!', a: ['on'] },
      { t: 'gap', q: 'Just hang ___ one second while I find my phone.', a: ['on'] },
      { t: 'gap', q: 'Peter is so noisy! I wish he would just shut ___!', a: ['up'] },
      { t: 'gap', q: 'It annoyed me that Jason just went ___ talking when I was crying.', a: ['on'] },
      { t: 'gap', q: 'Try to calm ___ and tell us exactly what happened.', a: ['down'] },
      { t: 'gap', q: 'You’ll have to speak ___ because I can’t hear you.', a: ['up'] },
      { t: 'gap', q: 'Did you know that Sarah ran ___ from home when she was fourteen?', a: ['away'] },
      { t: 'gap', q: 'I was feeling sad, but seeing my cousins really cheered me ___.', a: ['up'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: '___ first I didn’t like him, but now we’re best friends.', o: ['At', 'In', 'On'], a: 0 },
      { t: 'mcq', q: 'She came home ___ tears.', o: ['in', 'at', 'with'], a: 0 },
      { t: 'mcq', q: 'They planned the party ___ secret.', o: ['on', 'at', 'in'], a: 2 },
      { t: 'mcq', q: '___ times I feel a bit lonely.', o: ['In', 'At', 'On'], a: 1 },
      { t: 'mcq', q: 'I’m ashamed ___ what I said.', o: ['about', 'of', 'for'], a: 1 },
      { t: 'mcq', q: 'I’m really nervous ___ my speaking test.', o: ['about', 'of', 'with'], a: 0 },
      { t: 'mcq', q: 'We congratulated her ___ passing her test.', o: ['for', 'on', 'about'], a: 1 },
      { t: 'mcq', q: 'Don’t laugh ___ me!', o: ['to', 'at', 'on'], a: 1 },
      { t: 'mcq', q: 'I’m tired ___ hearing the same jokes.', o: ['of', 'with', 'from'], a: 0 },
      { t: 'mcq', q: 'I was surprised ___ his reaction.', o: ['by', 'for', 'of'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'People don’t always show their true ___. (FEEL)', a: ['feelings'] },
      { t: 'gap', q: 'Somebody with a big smile might actually be ___. (HAPPY)', a: ['unhappy'] },
      { t: 'gap', q: 'Our ___ life is very personal. (EMOTION)', a: ['emotional'] },
      { t: 'gap', q: 'Not everyone is ___ to our problems. (SYMPATHY)', a: ['sympathetic'] },
      { t: 'gap', q: 'Some teenagers appear ___ by everything. (BORE)', a: ['bored'] },
      { t: 'gap', q: '… even things that they actually find ___. (EXCITE)', a: ['exciting'] },
      { t: 'gap', q: 'Kids are so ___ – they never stop running! (ENERGY)', a: ['energetic'] },
      { t: 'gap', q: 'My favourite ___ is on TV tonight. (COMEDY)', a: ['comedian'] },
      { t: 'gap', q: 'The children played ___ in the garden. (NOISE)', a: ['noisily'] },
      { t: 'gap', q: 'There was no ___ in his voice. (HATE)', a: ['hatred'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['tell', 'a joke'], ['hurt sb’s', 'feelings'], ['a good sense of', 'humour'], ['burst into', 'tears'], ['reduce', 'stress'], ['show your', 'emotions'], ['a positive', 'attitude'], ['stay', 'calm']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “polite”:', o: ['rude', 'shy', 'calm', 'glad'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “miserable”:', o: ['very unhappy', 'very funny', 'very calm', 'very rude'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “shy”:', o: ['outgoing', 'naughty', 'upset', 'depressed'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “hang on”:', o: ['wait', 'continue', 'escape', 'hurry'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “amusing”:', o: ['funny', 'ridiculous', 'embarrassing', 'romantic'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “go on”:', o: ['continue', 'stop', 'leave', 'wait'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “bad-tempered”:', o: ['easy-going', 'naughty', 'noisy', 'depressed'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi không có ý làm tổn thương cảm xúc của bạn.', ref: "I didn't mean to hurt your feelings.", focus: 'hurt sb’s feelings' },
      { t: 'tr', vi: 'Cô ấy có khiếu hài hước rất tốt.', ref: 'She has a great sense of humour.', focus: 'sense of humour' },
      { t: 'tr', vi: 'Hãy bình tĩnh lại và kể cho tôi chuyện gì đã xảy ra.', ref: 'Calm down and tell me what happened.', focus: 'calm down' },
      { t: 'tr', vi: 'Tôi rất lo lắng về bài thi nói.', ref: "I'm really nervous about the speaking test.", focus: 'nervous about' },
      { t: 'tr', vi: 'Mặc dù rất mệt, anh ấy vẫn cố làm chúng tôi vui lên.', ref: 'In spite of being very tired, he tried to cheer us up.', focus: 'in spite of, cheer up' },
      { t: 'tr', vi: 'Cười là một cách tuyệt vời để giảm căng thẳng.', ref: 'Laughing is a great way to reduce stress.', focus: 'reduce stress' },
      { t: 'tr', vi: 'Nhiều người đàn ông cảm thấy xấu hổ khi thể hiện cảm xúc.', ref: 'Many men feel ashamed of showing their emotions.', focus: 'ashamed of + V-ing (IELTS)' },
      { t: 'tr', vi: 'Bắt nạt trên mạng có thể gây ra những ảnh hưởng nghiêm trọng đến sức khỏe tinh thần của giới trẻ.', ref: "Cyberbullying can have serious effects on young people's mental health.", focus: 'IELTS Writing' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'What kind of things make you laugh?' },
  { part: 'Part 1', q: 'Do you like watching comedies? Why or why not?' },
  { part: 'Part 1', q: 'How do you usually cheer yourself up when you feel sad?' },
  { part: 'Part 1', q: 'Are you a shy person?' },
  { part: 'Part 2', q: 'Describe a time when you felt very embarrassed.', cue: ['when and where it happened', 'what happened', 'how you reacted', 'and explain how you feel about it now'] },
  { part: 'Part 3', q: 'Why do some people find it difficult to show their emotions?' },
  { part: 'Part 3', q: 'Is humour important in the workplace?' },
  { part: 'Part 3', q: 'What causes stress for young people today?' },
  { part: 'Part 3', q: 'How can schools reduce bullying?' },
];

export default {
  id: 'b1-u39',
  book: 'b1',
  no: 39,
  title: 'Laughing and crying',
  titleVi: 'Cười & khóc – cảm xúc',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
