// B2 Unit 4 – Vocabulary: Hobbies, sport and games (Destination B2).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u04-vocab.js';

const reading = [
  {
    title: 'How I took up badminton',
    level: 'Dễ · ~200 từ',
    text: `For years I meant to do more exercise, but I never got round to it. I was always too busy, and to be honest, I wasn't very interested in sport. Then, two years ago, a colleague invited me to play badminton after work.

At first, I found it difficult to hit the shuttlecock, and my opponent beat me easily – 21–3! But I took to the game immediately. It was fast and fun, and you didn't need much equipment: just a racket, a pair of trainers and a court.

Soon I was playing three evenings a week. I joined a local amateur club and went in for my first competition six months later. I was knocked out in the second round, but I didn't mind. Just competing against better players made me improve.

Badminton now takes up most of my free time. I've lost five kilos, I sleep better and I've made lots of new friends. My only problem is that I'm so competitive that I hate losing – even to my own teammates!`,
    items: [
      { t: 'tf', q: 'The writer has always been very interested in sport.', a: 'F' },
      { t: 'gap', q: 'In the first game, the writer lost 21–___.', a: ['3', 'three'] },
      { t: 'mcq', q: 'Why did the writer like badminton?', o: ['It was cheap and slow.', 'It was fast, fun and needed little equipment.', 'Colleagues played it.', 'It was on TV.'], a: 1 },
      { t: 'mcq', q: 'What happened in the writer’s first competition?', o: ['won it', 'was knocked out in the second round', 'did not play', 'reached the final'], a: 1 },
      { t: 'gap', q: 'The writer has lost ___ kilos.', a: ['five', '5'] },
      { t: 'mcq', q: 'What is the writer’s “only problem”?', o: ['no time', 'hating to lose', 'injuries', 'no court nearby'], a: 1 },
    ],
  },
  {
    title: 'The return of board games',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `In an age of smartphones and online games, you might expect board games to have disappeared. In fact, the opposite has happened. Sales of board games have grown steadily for more than a decade, and board-game cafés have opened in cities all over the world, from London to Ho Chi Minh City.

So why are people spending their free time moving pieces around a piece of cardboard? One reason is that board games are a social activity. Players sit around the same table, talk, laugh and argue – something that is easy to forget when we spend hours alone in front of a screen. Many people say that a game night with friends is the best way to switch off after a stressful week.

Modern board games are also very different from the ones our parents played. Instead of simply rolling dice and hoping for luck, players often have to make clever decisions, plan ahead and work together. Some games are cooperative: instead of competing against each other, all the players try to beat the game itself.

There are benefits for children too. Teachers say that games help young people to concentrate, to take turns and to deal with losing – an important skill in itself.

Of course, not everyone is a fan. Some people find the rules of modern games far too complicated, and a single game can take up an entire evening. But for millions of players, that is exactly the point: a few hours with no notifications, no screens and plenty of conversation.`,
    items: [
      { t: 'tf', q: 'Board game sales have fallen in the last decade.', a: 'F' },
      { t: 'mcq', q: 'What is one reason people enjoy board games?', o: ['They are cheap.', 'They are a social activity.', 'They are fast.', 'They can be played alone.'], a: 1 },
      { t: 'mcq', q: 'How are modern board games different?', o: ['They depend only on luck.', 'Players make decisions and plan ahead.', 'They are shorter.', 'They are for children only.'], a: 1 },
      { t: 'gap', q: 'In ___ games, all players work together to beat the game.', a: ['cooperative', 'co-operative'] },
      { t: 'mcq', q: 'According to teachers, games help children to…', o: ['win more often', 'concentrate, take turns and deal with losing', 'use phones less', 'read faster'], a: 1 },
      { t: 'tf', q: 'Some people think the rules of modern games are too complicated.', a: 'T' },
    ],
  },
  {
    title: 'Esports: real sport or just playing games?',
    level: 'Trung bình · ~330 từ',
    text: `In 2023, esports – competitive video gaming – appeared as a medal event at the Asian Games for the first time. For millions of young fans, it was proof that professional gaming is a real sport. For many others, it was a sign that the idea of sport had gone too far.

There is no doubt that esports is big business. The top professional teams train for eight to ten hours a day, have coaches and nutritionists, and compete in front of tens of thousands of spectators in huge arenas. Online, the biggest tournaments attract more viewers than some traditional sporting finals, and the best players earn millions of dollars in prize money and sponsorship.

Supporters argue that esports demands many of the same qualities as traditional sport: lightning-fast reactions, teamwork, strategy and the ability to perform under pressure. Studies of professional players have found that they make several hundred precise movements with the keyboard and mouse every minute. "Nobody can compete at this level without years of training," says one coach.

Critics, however, point out that esports involves very little physical effort. For them, a sport must include physical exercise, which is why most people agree that chess – though highly competitive – is a "mind sport" rather than a sport. Doctors also worry about the health effects of spending so many hours sitting in front of a screen, including back problems, poor eyesight and lack of sleep.

There are also questions about who owns the "pitch". Unlike football, which no one owns, every esport is a product of a private company, which can change the rules – or even switch the game off – whenever it wants.

Perhaps the debate is less important than it seems. Whether or not esports is called a sport, it has become one of the most popular forms of entertainment in the world, and it is not going away.`,
    items: [
      { t: 'gap', q: 'Esports first appeared as a medal event at the Asian Games in ___.', a: ['2023'] },
      { t: 'mcq', q: 'How long do top teams train each day?', o: ['two to three hours', 'four to five hours', 'eight to ten hours', 'twelve hours'], a: 2 },
      { t: 'mcq', q: 'Which quality do supporters say esports requires?', o: ['physical strength', 'fast reactions and teamwork', 'height', 'expensive equipment'], a: 1 },
      { t: 'tf', q: 'Most people consider chess a “mind sport”.', a: 'T' },
      { t: 'mcq', q: 'Which health worry is mentioned?', o: ['broken bones', 'back problems and poor eyesight', 'heart attacks', 'weight loss'], a: 1 },
      { t: 'mcq', q: 'Why is ownership a problem for esports?', o: ['Players own the games.', 'Private companies own and can change each game.', 'Governments own them.', 'Nobody owns them.'], a: 1 },
      { t: 'mcq', q: 'What is the writer’s conclusion?', o: ['Esports is definitely a sport.', 'Esports will soon disappear.', 'Whatever we call it, esports is hugely popular and here to stay.', 'Esports should be banned.'], a: 2 },
    ],
  },
  {
    title: 'The 10,000-hour rule: is talent a myth?',
    level: 'Trung bình–Khó · ~360 từ',
    text: `Why do some people become world-class musicians, chess players or athletes while others never get beyond the level of a keen amateur? For a long time, the answer seemed obvious: some people are simply born with a talent. In 2008, however, the writer Malcolm Gladwell popularised a different idea. Based on research by the psychologist Anders Ericsson, he suggested that the key to success in almost any field was around 10,000 hours of practice.

The idea became hugely popular. It suggested that anyone could become an expert if they were prepared to put in the time – about three hours a day for ten years. Parents signed their children up for extra lessons, and the "10,000-hour rule" appeared in countless self-help books.

Ericsson himself, however, was unhappy with this simple version of his work. He pointed out that 10,000 was an average, not a magic number, and that some experts needed far more practice while others needed far less. More importantly, he argued that what matters is not just the amount of practice but its quality. "Deliberate practice" means working on specific weaknesses, with clear goals and immediate feedback, usually with the help of a coach. Simply playing your favourite game for 10,000 hours will not make you a champion.

Later studies have also shown that practice is not the whole story. A large review of research in 2014 found that practice explained only around a quarter of the differences in performance in games such as chess, and even less in sport. Other factors – including physical characteristics like height, the age at which people start, and, yes, natural ability – also play a part.

So is talent a myth? Not entirely. But the research does carry an encouraging message. Whatever our starting point, the right kind of practice can make an enormous difference. We may not all become Olympic medallists, but most of us are capable of far more than we think.`,
    items: [
      { t: 'gap', q: 'Gladwell popularised the idea in ___.', a: ['2008'] },
      { t: 'mcq', q: 'How much practice does the rule suggest per day for ten years?', o: ['one hour', 'about three hours', 'six hours', 'ten hours'], a: 1 },
      { t: 'tf', q: 'Ericsson was happy with the popular version of his research.', a: 'F' },
      { t: 'mcq', q: 'What is “deliberate practice”?', o: ['playing for fun', 'working on weaknesses with goals and feedback', 'practising 10,000 hours', 'practising alone'], a: 1 },
      { t: 'mcq', q: 'What did the 2014 review find?', o: ['Practice explains everything.', 'Practice explained only about a quarter of differences in games like chess.', 'Talent does not exist.', 'Height is the only factor.'], a: 1 },
      { t: 'mcq', q: 'Which factor is NOT mentioned besides practice?', o: ['height', 'starting age', 'natural ability', 'money'], a: 3 },
      { t: 'mcq', q: 'What is the writer’s final message?', o: ['Talent is everything.', 'The right practice can make a big difference.', 'Practice is useless.', 'Only children can improve.'], a: 1 },
    ],
  },
  {
    title: 'Should schools spend more time on sport?',
    level: 'Khó · ~410 từ · IELTS',
    text: `In many countries, the amount of time children spend on physical education has fallen over the past few decades. Under pressure to improve exam results, schools have often reduced PE lessons in order to make room for more maths, science and languages. At the same time, children are spending more of their free time in front of screens, and rates of childhood obesity have risen sharply. This has led many health experts to argue that schools should give sport a far more central place in the timetable.

The physical benefits are clear. Regular exercise strengthens the heart, bones and muscles, and children who are active are less likely to become overweight. For some children, school is the only place where they have the opportunity to play organised sport, as clubs and equipment can be expensive.

Supporters also point to benefits that go beyond physical health. A growing body of research suggests that exercise improves concentration and memory, which means that time spent on sport may actually help, rather than harm, academic performance. Team sports teach children to cooperate, to follow rules and to deal with both winning and losing. Many adults say that the lessons they learnt on the football pitch or the basketball court have been as valuable as anything they learnt in the classroom.

However, the issue is not as simple as it seems. Many children, particularly those who are less confident or less naturally sporty, have negative experiences of school sport. Being chosen last for a team or being forced to compete in front of classmates can put young people off exercise for life. Critics also argue that schools already face enormous demands, and that parents and communities should take greater responsibility for children's activity levels.

A balanced approach may offer the best solution. Rather than simply adding more competitive sport, schools could offer a wider range of activities – dance, yoga, climbing or martial arts – so that every child can find something they enjoy. Short bursts of activity during the school day, such as a daily fifteen-minute run, have also been shown to be effective. The aim, after all, is not to produce champions but to help every child develop a lifelong habit of staying active.

In conclusion, while schools cannot solve the problem of inactive lifestyles on their own, there are strong reasons for giving physical activity a more important role – provided that it is varied, inclusive and enjoyable.`,
    items: [
      { t: 'mcq', q: 'Why have many schools reduced PE lessons?', o: ['lack of teachers', 'pressure to improve exam results', 'injuries', 'parents’ complaints'], a: 1 },
      { t: 'tf', q: 'For some children, school is the only place to play organised sport.', a: 'T' },
      { t: 'mcq', q: 'What does research suggest about exercise and learning?', o: ['Exercise harms learning.', 'Exercise improves concentration and memory.', 'There is no link.', 'Only team sports help.'], a: 1 },
      { t: 'mcq', q: 'What can put some children off exercise for life?', o: ['being chosen last or forced to compete', 'too many activities', 'outdoor lessons', 'short runs'], a: 0 },
      { t: 'mcq', q: 'Which activity is suggested as an alternative?', o: ['video games', 'dance or yoga', 'longer exams', 'chess only'], a: 1 },
      { t: 'gap', q: 'A daily ___-minute run is mentioned as effective.', a: ['fifteen', '15'] },
      { t: 'mcq', q: 'What is the writer’s conclusion?', o: ['Schools should cut PE.', 'Physical activity deserves a bigger role if varied, inclusive and enjoyable.', 'Only parents are responsible.', 'Competitive sport should be compulsory.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Sports centre message',
    level: '1 · Dễ · 1 giọng, chậm',
    desc: 'Tin nhắn thoại từ trung tâm thể thao.',
    rate: '-12%',
    voices: { N: 'en-GB-LibbyNeural' },
    script: [
      ['N', "Hello, this is Riverside Sports Centre with a message for members of the Tuesday tennis group."],
      ['N', "Unfortunately, the outdoor courts are closed for maintenance this week, so tomorrow's session has been put off until next Tuesday."],
      ['N', "However, the club competition on Saturday has been brought forward. It will now start at nine a.m. instead of eleven."],
      ['N', "Please remember to bring your own racket. Balls will be provided. If you need to pull out of the competition, call us on 0-2-0, 7-9-4-6, 3-1-5-8."],
      ['N', 'Thank you, and see you on Saturday.'],
    ],
    items: [
      { t: 'mcq', q: 'Why are the outdoor courts closed?', o: ['rain', 'maintenance', 'a competition', 'a holiday'], a: 1 },
      { t: 'mcq', q: 'What has happened to tomorrow’s session?', o: ['brought forward', 'put off until next Tuesday', 'moved indoors', 'cancelled for good'], a: 1 },
      { t: 'gap', q: 'Saturday’s competition will now start at ___ a.m.', a: ['nine', '9'] },
      { t: 'mcq', q: 'What should players bring?', o: ['balls', 'their own racket', 'shoes', 'water'], a: 1 },
      { t: 'gap', q: 'Call 020 7946 ___ to pull out.', a: ['3158'] },
    ],
    dictation: ["Tomorrow's session has been put off until next Tuesday.", 'Please remember to bring your own racket.'],
  },
  {
    title: 'Conversation: Choosing a new hobby',
    level: '2 · Dễ · 2 giọng',
    desc: 'Hai người bạn bàn chuyện chọn sở thích mới.',
    rate: '-5%',
    voices: { Minh: 'en-US-GuyNeural', Sophie: 'en-GB-SoniaNeural' },
    script: [
      ['Sophie', "You look bored, Minh. What do you get up to in your free time these days?"],
      ['Minh', "Not much, to be honest. I used to play football, but I went off it after I hurt my knee."],
      ['Sophie', "Why don't you take up climbing? There's a great climbing centre near the station."],
      ['Minh', "Climbing? I'm a bit afraid of heights."],
      ['Sophie', "That's what I said at first! But they teach you everything, and the equipment is free for beginners. I took to it straight away."],
      ['Minh', "How much does it cost?"],
      ['Sophie', "About a hundred and fifty thousand dong a session. Come with me on Thursday and have a go. If you don't like it, you don't have to carry on."],
      ['Minh', "OK, you've convinced me. Thursday it is."],
    ],
    items: [
      { t: 'mcq', q: 'Why did Minh stop playing football?', o: ['He got bored.', 'He hurt his knee.', 'He moved house.', 'He had no time.'], a: 1 },
      { t: 'mcq', q: 'What does Sophie suggest?', o: ['swimming', 'climbing', 'tennis', 'chess'], a: 1 },
      { t: 'mcq', q: 'What is Minh worried about?', o: ['the cost', 'heights', 'injuries', 'time'], a: 1 },
      { t: 'tf', q: 'Beginners have to buy their own equipment.', a: 'F' },
      { t: 'gap', q: 'They will go on ___.', a: ['Thursday'] },
    ],
    dictation: ["Why don't you take up climbing?", 'Come with me on Thursday and have a go.'],
  },
  {
    title: 'Talk: A football referee’s life',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Một trọng tài kể về công việc của mình.',
    rate: '+0%',
    voices: { Ref: 'en-GB-ThomasNeural' },
    script: [
      ['Ref', "People often ask me why anyone would want to be a referee. After all, we're the only people on the pitch that nobody cheers for!"],
      ['Ref', "I started refereeing at sixteen, mainly because my local amateur league didn't have enough officials. I took a short course, and I was hooked."],
      ['Ref', "The job is much harder than it looks. In a professional match, a referee runs around twelve kilometres – that's more than many of the players. So I train four or five times a week."],
      ['Ref', "The hardest part is the pressure. You have a split second to make a decision, with forty thousand spectators and millions of viewers watching. And of course, half of them will always think you're wrong."],
      ['Ref', "Video technology has helped, but it hasn't solved everything. In the end, refereeing is about judgement. My advice to young referees? Concentrate on the game, not the crowd – and develop a thick skin!"],
    ],
    items: [
      { t: 'gap', q: 'He started refereeing at the age of ___.', a: ['sixteen', '16'] },
      { t: 'mcq', q: 'Why did he start?', o: ['for money', 'his local league needed officials', 'his father was a referee', 'he was injured'], a: 1 },
      { t: 'gap', q: 'A referee runs around ___ kilometres in a professional match.', a: ['twelve', '12'] },
      { t: 'mcq', q: 'What is the hardest part?', o: ['the running', 'the pressure', 'the travel', 'the rules'], a: 1 },
      { t: 'mcq', q: 'What is his advice?', o: ['Listen to the crowd.', 'Concentrate on the game, not the crowd.', 'Use more technology.', 'Train less.'], a: 1 },
    ],
    dictation: ['The job is much harder than it looks.', 'Concentrate on the game, not the crowd.'],
  },
  {
    title: 'Radio interview: From amateur to Olympian',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn một vận động viên điền kinh.',
    rate: '+0%',
    voices: { Presenter: 'en-AU-NatashaNeural', Kim: 'en-US-AriaNeural' },
    script: [
      ['Presenter', "Kim Tran was working in an office until the age of twenty-five. Five years later, she competed at the Olympics. Kim, how did that happen?"],
      ['Kim', "I'd always enjoyed running, but only as a hobby. Then a friend persuaded me to go in for a local half marathon, and I finished third, which surprised everyone – especially me."],
      ['Presenter', 'And a coach noticed you?'],
      ['Kim', "Yes. She told me I had real talent but no technique. For the first year, we didn't focus on speed at all. We worked on my breathing, my running style and my diet."],
      ['Presenter', 'Was it hard to leave your job?'],
      ['Kim', "Very. I carried on working part-time for two years, training early in the morning and late at night. I didn't become professional until I was twenty-eight."],
      ['Presenter', 'What was the Olympics like?'],
      ['Kim', "I didn't win a medal – I finished fourteenth. But walking into that stadium was the best moment of my life. I'd tell anyone: it's never too late to take your chance."],
    ],
    items: [
      { t: 'gap', q: 'Kim worked in an office until she was ___.', a: ['twenty-five', '25', 'twenty five'] },
      { t: 'mcq', q: 'What happened in her first half marathon?', o: ['She won.', 'She finished third.', 'She pulled out.', 'She was injured.'], a: 1 },
      { t: 'mcq', q: 'What did the coach focus on in the first year?', o: ['speed', 'breathing, style and diet', 'competitions', 'strength'], a: 1 },
      { t: 'gap', q: 'Kim became professional at ___.', a: ['twenty-eight', '28', 'twenty eight'] },
      { t: 'mcq', q: 'Where did she finish at the Olympics?', o: ['third', 'first', 'fourteenth', 'she did not finish'], a: 2 },
    ],
    dictation: ['She told me I had real talent but no technique.', "It's never too late to take your chance."],
  },
  {
    title: 'Discussion: Are professional athletes paid too much?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3 về thu nhập của vận động viên.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Anna: 'en-GB-SoniaNeural', Duc: 'en-AU-WilliamNeural' },
    script: [
      ['Host', "Top footballers can earn more in a week than a nurse earns in ten years. Anna, is that fair?"],
      ['Anna', "I don't think it is. Nurses, teachers and firefighters do work that's essential to society. Kicking a ball well is a talent, but it doesn't save lives."],
      ['Duc', "I understand the argument, but salaries aren't based on how important a job is. They're based on how much money it generates. Top players attract millions of viewers, and that brings in huge amounts from TV rights and sponsorship."],
      ['Anna', "That explains it, but it doesn't make it right. And it's only a tiny minority who earn those salaries. Most professional athletes earn very little, especially in less popular sports and in women's sport."],
      ['Duc', "That's true, and I'd agree that the gap is a real problem. Also, sporting careers are very short. Many players retire in their early thirties, often with injuries."],
      ['Host', 'So what would you change?'],
      ['Anna', "More of the money at the top should go to grassroots sport – local clubs, school facilities, and women's teams."],
      ['Duc', "I'd support that. A small levy on the biggest transfers could make a huge difference."],
    ],
    items: [
      { t: 'mcq', q: 'Why does Anna think top salaries are unfair?', o: ['Footballers are lazy.', 'Other jobs are more essential to society.', 'Matches are too short.', 'Tickets are expensive.'], a: 1 },
      { t: 'mcq', q: 'According to Duc, salaries are based on…', o: ['how important the job is', 'how much money it generates', 'age', 'skill only'], a: 1 },
      { t: 'tf', q: 'Anna says most professional athletes earn a lot.', a: 'F' },
      { t: 'mcq', q: 'What point does Duc make about careers?', o: ['They are long.', 'They are short and often end with injuries.', 'They are easy.', 'They are well protected.'], a: 1 },
      { t: 'mcq', q: 'What do they both support?', o: ['lower ticket prices', 'sending money to grassroots sport', 'banning transfers', 'higher salaries'], a: 1 },
    ],
    dictation: ['Salaries are based on how much money it generates.', 'Sporting careers are very short.'],
  },
];

const exercises = [
  {
    title: 'A. Từ dễ nhầm – chọn từ đúng',
    instruction: 'Chọn từ đúng.',
    items: [
      { t: 'mcq', q: 'The players ran onto the football ___.', o: ['pitch', 'court', 'course'], a: 0 },
      { t: 'mcq', q: 'We booked a tennis ___ for Sunday.', o: ['court', 'pitch', 'rink'], a: 0 },
      { t: 'mcq', q: 'Vietnam ___ Thailand 2–1.', o: ['beat', 'won', 'scored'], a: 0 },
      { t: 'mcq', q: 'Vietnam ___ the match 2–1.', o: ['won', 'beat', 'scored'], a: 0 },
      { t: 'mcq', q: 'The tennis ___ called the ball out.', o: ['umpire', 'referee'], a: 0 },
      { t: 'mcq', q: 'The stadium was full of ___.', o: ['spectators', 'viewers'], a: 0 },
      { t: 'mcq', q: 'The match ended in a ___.', o: ['draw', 'equal'], a: 0 },
      { t: 'mcq', q: 'I need a new ___ for badminton.', o: ['racket', 'bat', 'rod'], a: 0 },
      { t: 'mcq', q: 'He took his fishing ___ to the lake.', o: ['rod', 'stick', 'bat'], a: 0 },
      { t: 'mcq', q: 'The score was 0–0 at ___.', o: ['half time', 'interval'], a: 0 },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: bring forward, carry on, get round to, go in for, go off, join in, knock out, pull out, put off, put up with, take to, take up (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'The match was ___ until next week because of the rain.', a: ['put off'] },
      { t: 'gap', q: 'The final has been ___ to Friday, so we have less time to prepare.', a: ['brought forward'] },
      { t: 'gap', q: 'I’ve always wanted to learn the guitar but I’ve never ___ it.', a: ['got round to', 'gotten round to'] },
      { t: 'gap', q: 'She ___ yoga last year and loves it.', a: ['took up'] },
      { t: 'gap', q: 'He had to ___ of the race because of an injury.', a: ['pull out'] },
      { t: 'gap', q: 'Our team was ___ in the first round.', a: ['knocked out'] },
      { t: 'gap', q: 'I used to love tennis, but I’ve ___ it recently.', a: ['gone off'] },
      { t: 'gap', q: 'Despite the pain, he ___ playing.', a: ['carried on'] },
      { t: 'gap', q: 'How can you ___ such noisy neighbours?', a: ['put up with'] },
      { t: 'gap', q: 'Everyone ___ when the band started singing.', a: ['joined in'] },
    ],
  },
  {
    title: 'C. Cụm từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Don’t worry about winning – just do your ___.', o: ['best', 'better', 'most'], a: 0 },
      { t: 'mcq', q: 'We have no ___ of winning the league this year.', o: ['chance', 'luck', 'turn'], a: 0 },
      { t: 'mcq', q: 'Why don’t you have a ___ at surfing?', o: ['go', 'turn', 'time'], a: 0 },
      { t: 'mcq', q: 'We took ___ to roll the dice.', o: ['turns', 'goes', 'times'], a: 0 },
      { t: 'mcq', q: 'My brother is mad ___ video games.', o: ['about', 'with', 'for'], a: 0 },
      { t: 'mcq', q: 'This sport is popular ___ teenagers.', o: ['with', 'for', 'at'], a: 0 },
      { t: 'mcq', q: 'Concentrate ___ the ball!', o: ['on', 'in', 'at'], a: 0 },
      { t: 'mcq', q: 'I prefer swimming ___ running.', o: ['to', 'than', 'from'], a: 0 },
      { t: 'mcq', q: 'She’s very fond ___ chess.', o: ['of', 'with', 'about'], a: 0 },
      { t: 'mcq', q: 'Joining the team means ___ three times a week.', o: ['training', 'to train'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'The goal was ___ for offside. (ALLOW)', a: ['disallowed'] },
      { t: 'gap', q: 'She’s very ___ – she hates losing. (COMPETE)', a: ['competitive'] },
      { t: 'gap', q: 'It was a really ___ game. (ENJOY)', a: ['enjoyable'] },
      { t: 'gap', q: 'Diving ___ is very expensive. (EQUIP)', a: ['equipment'] },
      { t: 'gap', q: '___, the match was cancelled. (FORTUNE)', a: ['Unfortunately', 'unfortunately'] },
      { t: 'gap', q: 'He’s very ___ about football history. (KNOW)', a: ['knowledgeable'] },
      { t: 'gap', q: 'It was their third ___ in a row. (LOSE)', a: ['loss'] },
      { t: 'gap', q: 'She’s a two-time Olympic ___. (MEDAL)', a: ['medallist', 'medalist'] },
      { t: 'gap', q: 'The ___ team scored in the last minute. (OPPOSE)', a: ['opposing'] },
      { t: 'gap', q: 'He’s a personal ___ at the gym. (TRAIN)', a: ['trainer'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['score', 'a goal'], ['take up', 'a hobby'], ['win', 'a medal'], ['take', 'turns'], ['a board', 'game'], ['spare', 'time'], ['a tennis', 'court'], ['do', 'your best']] },
    ],
  },
  {
    title: 'F. Viết lại câu',
    instruction: 'Viết lại câu dùng từ trong ngoặc, giữ nguyên nghĩa.',
    items: [
      { t: 'fix', q: 'The match has been postponed. (put)', a: ['The match has been put off.'] },
      { t: 'fix', q: 'I started playing golf last year. (took)', a: ['I took up golf last year.', 'I took up playing golf last year.'] },
      { t: 'fix', q: 'I can’t tolerate his behaviour. (put)', a: ["I can't put up with his behaviour.", 'I cannot put up with his behaviour.'] },
      { t: 'fix', q: 'It is difficult for me to concentrate. (find)', a: ['I find it difficult to concentrate.'] },
      { t: 'fix', q: 'She is very good at drawing. (talent)', a: ['She has a talent for drawing.', 'She has a real talent for drawing.'] },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Năm ngoái tôi bắt đầu chơi cầu lông và giờ nó chiếm gần hết thời gian rảnh của tôi.', ref: 'I took up badminton last year and now it takes up most of my free time.', focus: 'take up (2 nghĩa)' },
      { t: 'tr', vi: 'Việt Nam đã đánh bại Thái Lan 2–1 trong trận chung kết.', ref: 'Vietnam beat Thailand 2–1 in the final.', focus: 'beat ≠ win' },
      { t: 'tr', vi: 'Trận đấu bị hoãn vì trời mưa to.', ref: 'The match was put off because of heavy rain.', focus: 'put off' },
      { t: 'tr', vi: 'Tôi thấy khó tập trung khi có quá nhiều tiếng ồn.', ref: 'I find it difficult to concentrate when there is too much noise.', focus: 'find it difficult to do' },
      { t: 'tr', vi: 'Chơi thể thao đồng đội dạy trẻ em cách hợp tác và chấp nhận thua cuộc.', ref: 'Playing team sports teaches children how to cooperate and accept defeat.', focus: 'IELTS Writing Task 2' },
      { t: 'tr', vi: 'Esports ngày càng phổ biến với giới trẻ.', ref: 'Esports is becoming increasingly popular with young people.', focus: 'popular with' },
      { t: 'tr', vi: 'Cô ấy rút lui khỏi cuộc thi vì bị chấn thương.', ref: 'She pulled out of the competition because of an injury.', focus: 'pull out of' },
      { t: 'tr', vi: 'Tôi đã định học bơi từ lâu nhưng chưa bao giờ thực hiện được.', ref: "I've meant to learn to swim for ages, but I've never got round to it.", focus: 'get round to' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'What do you like to do in your free time?' },
  { part: 'Part 1', q: 'Did you play any sports when you were a child?' },
  { part: 'Part 1', q: 'Do you prefer watching sport or playing it?' },
  { part: 'Part 1', q: 'Is there a new hobby you would like to take up?' },
  { part: 'Part 2', q: 'Describe a sport or game you enjoy.', cue: ['what it is', 'how you learnt it', 'who you play it with', 'and explain why you enjoy it'] },
  { part: 'Part 3', q: 'Why do some people prefer individual sports to team sports?' },
  { part: 'Part 3', q: 'Should schools spend more time on physical education?' },
  { part: 'Part 3', q: 'Do you think professional athletes are paid too much?' },
  { part: 'Part 3', q: 'Can esports be considered a real sport?' },
];

export default {
  id: 'b2-u04',
  book: 'b2',
  no: 4,
  title: 'Hobbies, sport and games',
  titleVi: 'Sở thích, thể thao & trò chơi',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
