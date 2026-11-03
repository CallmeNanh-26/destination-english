// Unit 3 – Vocabulary: Fun and games (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u03-vocab.js';

const reading = [
  {
    title: 'How I took up climbing',
    level: 'Dễ · ~170 từ',
    text: `Last year I was bored with my free time. I spent most evenings playing video games in my bedroom, and I wasn't very active. Then my friend Maya asked me to join in a climbing session at the new gym near our school. I was nervous because I'm not very good at sports, but I agreed.

The first session was hard. My arms hurt and I fell off the wall many times (don't worry – there's a rope!). But the coach, a friendly woman called Jess, told me to carry on. "Everyone falls at the beginning," she said. "The important thing is not to give up."

Now I go to the gym twice a week and I've become a member of the climbing club. Last month I even took part in my first competition. I didn't win – my opponent was much more experienced – but I had great fun, and I made lots of new friends. I still play video games sometimes, but only for fun at weekends.`,
    items: [
      { t: 'mcq', q: 'Before climbing, the writer usually spent evenings…', o: ['playing sports with friends', 'playing video games at home', 'working at a gym', 'studying at school'], a: 1 },
      { t: 'tf', q: 'The writer felt confident before the first session.', a: 'F', ex: '“I was nervous because I’m not very good at sports.”' },
      { t: 'tf', q: 'The writer was in real danger when falling off the wall.', a: 'F', ex: 'Có dây an toàn: “don’t worry – there’s a rope!”' },
      { t: 'mcq', q: 'What did the coach advise?', o: ['to try an easier sport', 'to keep trying', 'to buy better equipment', 'to train alone'], a: 1, ex: '“carry on… not to give up”' },
      { t: 'tf', q: 'The writer won the first competition.', a: 'F', ex: '“I didn’t win”' },
      { t: 'gap', q: 'Now the writer plays video games only ___ at weekends.', a: ['for fun'] },
    ],
  },
  {
    title: 'Board game cafés: the comeback of the dice',
    level: 'Dễ–Trung bình · ~260 từ',
    text: `Ten years ago, many people thought that board games would disappear. Why would anyone move pieces around a piece of cardboard when they could play amazing video games on their phones? But something surprising has happened: board games are back, and they are especially popular with young adults.

In cities around the world, board game cafés are opening. Customers pay a small fee, order a drink and choose from hundreds of games on the shelves. If you don't know the rules, a member of staff – often called a "game guru" – will explain them to you.

Linh, 24, runs a board game café in Hanoi. "Our customers are mostly students and office workers," she says. "They spend all day looking at screens, so they want to do something different in the evening. Playing face to face is more sociable. You laugh, you argue, sometimes you accuse your friends of cheating!"

Linh also organises a competition every month. "It started as a small event just for fun, but now about sixty people take part. The champion wins free drinks for a month – a very good prize for a student!"

Of course, not everyone is a fan. Some people get bored with long games that last several hours. But for many, a board game café is the perfect place to switch off and have fun.`,
    items: [
      { t: 'mcq', q: 'Ten years ago, many people believed board games…', o: ['would become more popular', 'would disappear', 'were only for children', 'were too expensive'], a: 1 },
      { t: 'mcq', q: 'A “game guru” is someone who…', o: ['sells games', 'explains the rules', 'wins competitions', 'designs new games'], a: 1 },
      { t: 'tf', q: 'Most of Linh’s customers are retired people.', a: 'F', ex: '“mostly students and office workers”' },
      { t: 'mcq', q: 'Why do Linh’s customers enjoy board games?', o: ['They are cheaper than video games.', 'They want a break from screens and like meeting face to face.', 'They want to win prizes.', 'Phones are not allowed in the café.'], a: 1 },
      { t: 'tf', q: 'The monthly competition started as a large professional event.', a: 'F', ex: '“It started as a small event just for fun”' },
      { t: 'tf', q: 'The champion wins money.', a: 'F', ex: '“free drinks for a month”' },
      { t: 'gap', q: 'Some people get ___ long games that last several hours. (2 từ)', a: ['bored with'] },
    ],
  },
  {
    title: 'Is gaming a sport?',
    level: 'Trung bình · ~300 từ',
    text: `In 2023, the International Olympic Committee announced plans for the first Olympic Esports Games. For millions of fans, this was great news. For others, it was a terrible mistake. So, should video games be treated as a sport?

Supporters of esports point out that top players train as hard as any athlete. Professional teams have coaches, follow strict schedules and practise for up to ten hours a day. Matches require fast reactions, careful strategy and excellent teamwork. "People think we just sit and have fun," says Kim, a 21-year-old professional player from South Korea. "But the pressure is enormous. In a big competition, one small mistake can cost your team the championship."

Critics, however, argue that a sport must involve physical activity. "Sitting in a chair and moving a mouse is a skill, but it isn't sport," says sports journalist Harry Moss. He also worries that the Olympics will encourage young people to spend even more time indoors, when many are already inactive.

There is another problem. In traditional sports, the rules belong to nobody: anyone can organise a football match. Video games, on the other hand, are owned by companies, which can change the rules – or stop the game completely – whenever they want.

Perhaps the answer lies somewhere in the middle. Esports clearly demand dedication and talent, and they are hugely entertaining to watch. Whether we call them "sport" or not, they are here to stay.`,
    items: [
      { t: 'mcq', q: 'The article mainly…', o: ['argues that esports should be banned', 'presents different views on whether esports are a sport', 'explains how to become a professional gamer', 'describes the history of the Olympics'], a: 1 },
      { t: 'tf', q: 'Professional gamers may practise up to ten hours a day.', a: 'T' },
      { t: 'mcq', q: 'Kim says that in big competitions…', o: ['players can relax', 'one small mistake can be very costly', 'teams don’t need coaches', 'fans are not interested'], a: 1 },
      { t: 'tf', q: 'Harry Moss thinks gaming requires no skill.', a: 'F', ex: '“…is a skill, but it isn’t sport”' },
      { t: 'tf', q: 'Harry Moss is worried esports may make young people less active.', a: 'T' },
      { t: 'mcq', q: 'What is the “another problem” mentioned in paragraph 4?', o: ['Games are too expensive.', 'Companies own the games and can change the rules.', 'Matches last too long.', 'There are no referees.'], a: 1 },
      { t: 'tf', q: 'The writer believes esports will soon disappear.', a: 'F', ex: '“they are here to stay”' },
      { t: 'mcq', q: '“dedication” (đoạn cuối) gần nghĩa nhất với…', o: ['luck', 'hard work and commitment', 'money', 'popularity'], a: 1 },
    ],
  },
  {
    title: 'The loneliest job in football',
    level: 'Trung bình–Khó · ~370 từ',
    text: `Every Saturday, Daniel Okafor walks onto a football pitch knowing that, by the end of the afternoon, thousands of people will probably be shouting at him. Daniel is a referee, and he says it is the best job in the world.

"People think referees hate football," he laughs. "It's the opposite. I was crazy about the game as a child, but I wasn't a good enough player to go professional. Refereeing was my way of staying in the game."

The job is far more demanding than most fans realise. A referee runs around twelve kilometres during a match – often more than some players – so Daniel trains five days a week. He also studies videos of his previous games to learn from his mistakes. "You have less than a second to make a decision," he explains. "You can't press pause. And you know that if you get it wrong, it will be on television that night."

The hardest moments, he says, come when he has to send off a popular player. "The home supporters are furious, the player's teammates are surrounding you, and you have to stay completely calm. If you look nervous, you lose control of the game."

Technology has changed the job. Video assistant referees (VAR) now check important decisions, such as goals and penalties. Daniel welcomes the help, but he believes it has a cost. "Fans used to celebrate a goal immediately. Now they wait two minutes to see if it counts. Some of the emotion has gone."

Does the criticism ever get to him? "Of course. Nobody likes being called names by forty thousand people. But I remind myself why I do it. When a game flows well and nobody talks about the referee afterwards, that's a perfect day." He smiles. "The best referees are the ones you don't notice."`,
    items: [
      { t: 'mcq', q: 'Why did Daniel become a referee?', o: ['He disliked football players.', 'He loved football but wasn’t good enough to play professionally.', 'It is very well paid.', 'His father was a referee.'], a: 1 },
      { t: 'tf', q: 'Referees sometimes run further than players during a match.', a: 'T', ex: '“often more than some players”' },
      { t: 'mcq', q: 'Why does Daniel watch videos of his games?', o: ['to enjoy his success', 'to learn from his mistakes', 'to prepare for TV interviews', 'to check VAR decisions'], a: 1 },
      { t: 'mcq', q: 'According to Daniel, what matters most when sending off a popular player?', o: ['explaining the rule to the fans', 'staying calm', 'asking VAR', 'talking to the captain'], a: 1 },
      { t: 'tf', q: 'Daniel is completely against VAR.', a: 'F', ex: '“Daniel welcomes the help, but…”' },
      { t: 'mcq', q: 'What does “The best referees are the ones you don’t notice” mean?', o: ['Good referees hide from cameras.', 'A good referee lets the game flow without controversy.', 'Referees should never speak.', 'Fans dislike all referees.'], a: 1 },
      { t: 'gap', q: 'Daniel says VAR has taken away some of the ___ of celebrating a goal.', a: ['emotion'] },
      { t: 'tf', q: 'Daniel earns a lot of money from refereeing.', a: 'NG', ex: 'Bài không nhắc đến thu nhập.' },
    ],
  },
  {
    title: 'Why do we play?',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `Humans are not the only animals that play. Young cats chase pieces of string, dolphins throw seaweed to each other, and crows have been filmed sliding down snowy roofs again and again, apparently just for fun. But humans take play further than any other species. We invent games with complex rules, we build stadiums for them, and we spend billions every year watching other people play. Why?

One explanation is that play is practice. When children play hide-and-seek, they develop skills that were once essential for survival: hiding from danger, searching and running. Board games like chess train us to plan ahead and to predict what an opponent will do next. In this sense, games are a safe place to make mistakes. Losing a game hurts, but nobody actually gets injured.

Psychologists also point to the role of challenge. According to a well-known theory, people feel most satisfied when a task is neither too easy nor too difficult. If a game is too easy, we get bored; if it is too hard, we feel anxious and give up. Successful game designers spend months adjusting the difficulty so that players stay in this "flow" state, completely absorbed in the activity. This is why many people lose track of time when they are playing.

Games also bring people together. Supporting the same team creates a powerful sense of belonging, even among strangers. Researchers have found that fans watching a match together often experience synchronised heart rates during exciting moments – a physical sign of shared emotion.

Not all effects of games are positive, of course. Some video games are designed to keep players spending money, using reward systems similar to those in gambling. Experts warn that children are especially at risk because they find it harder to control their impulses.

Nevertheless, most researchers agree that play is far from a waste of time. It helps us learn, relax and connect with others. As the philosopher Plato is said to have put it, you can discover more about a person in an hour of play than in a year of conversation.`,
    items: [
      { t: 'mcq', q: 'The examples of cats, dolphins and crows show that…', o: ['animals are very intelligent', 'play is not unique to humans', 'animals play more than humans', 'animals need training'], a: 1 },
      { t: 'tf', q: 'Games allow people to make mistakes without serious consequences.', a: 'T', ex: '“games are a safe place to make mistakes”' },
      { t: 'mcq', q: 'According to the “flow” theory, people feel most satisfied when a task is…', o: ['very easy', 'extremely difficult', 'at the right level of difficulty', 'done in a group'], a: 2 },
      { t: 'tf', q: 'Game designers try to make games as difficult as possible.', a: 'F', ex: 'Họ điều chỉnh độ khó để người chơi ở trạng thái “flow”.' },
      { t: 'tf', q: 'Fans watching a match together may have heart rates that rise and fall together.', a: 'T' },
      { t: 'tf', q: 'All experts believe video games are harmful to children.', a: 'F', ex: 'Chỉ một số game có cơ chế giống cờ bạc; đa số nhà nghiên cứu cho rằng chơi là có ích.' },
      { t: 'mcq', q: '“absorbed” (đoạn 3) nghĩa là…', o: ['completely focused on and interested in', 'tired', 'confused', 'physically hurt'], a: 0 },
      { t: 'gap', q: 'Some video games use reward systems similar to those in ___.', a: ['gambling'] },
    ],
  },
];

// Listening: speakers map to Edge neural voices; scripts/gen-audio.mjs renders them to public/audio.
const listening = [
  {
    title: 'Answerphone: Riverside Sports Centre',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Tin nhắn thoại của trung tâm thể thao. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-SoniaNeural' },
    script: [
      ['N', "Hello, and thank you for calling Riverside Sports Centre. We're sorry, but there is no one available to take your call at the moment. Here is some information about our opening times and activities."],
      ['N', 'The centre is open from seven a.m. to ten p.m., Monday to Friday, and from eight a.m. to six p.m. at weekends. Our gym is open at the same times as the centre.'],
      ['N', "This month, we are starting a new table tennis club for beginners. The club meets every Wednesday evening at half past six. It costs four pounds per session, and you don't need to bring your own equipment."],
      ['N', 'If you would like to become a member of the centre, membership costs twenty-five pounds a month for adults and fifteen pounds for students. Members can use the swimming pool for free.'],
      ['N', 'For more information, please visit our website or call back during office hours. Thank you, and have a great day!'],
    ],
    items: [
      { t: 'gap', q: 'Weekday opening hours: 7 a.m. – ___ p.m.', a: ['10', 'ten'] },
      { t: 'gap', q: 'At weekends the centre closes at ___ p.m.', a: ['6', 'six'] },
      { t: 'gap', q: 'New club: ___ tennis for beginners', a: ['table'] },
      { t: 'gap', q: 'The club meets every ___ evening.', a: ['Wednesday'] },
      { t: 'gap', q: 'Price per session: £___', a: ['4', 'four'] },
      { t: 'gap', q: 'Student membership: £___ a month', a: ['15', 'fifteen'] },
      { t: 'mcq', q: 'Members can use the ___ for free.', o: ['gym', 'swimming pool', 'tennis courts', 'café'], a: 1 },
    ],
    dictation: ['The club meets every Wednesday evening.', "You don't need to bring your own equipment.", 'Members can use the swimming pool for free.'],
  },
  {
    title: 'Talk: Why I took up the guitar',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một học sinh nói về sở thích chơi guitar.',
    rate: '-5%',
    voices: { N: 'en-US-GuyNeural' },
    script: [
      ['N', 'Hi everyone. Today I want to talk about my favourite hobby: playing the guitar. I took it up about two years ago, when I was sixteen. Before that, I didn’t have any real hobbies. I just listened to music on my phone all the time.'],
      ['N', "One day, I went to a concert with my cousin. The band played folk music, and the guitarist was incredible. I couldn't stop watching his hands. On the way home, I told my cousin, I want to do that! She laughed, but the next week she gave me her old guitar."],
      ['N', "Learning wasn't easy. For the first few months, my fingers really hurt, and I almost gave up. My parents weren't happy either, because I practised late at night. They kept asking me to play more quietly! But I carried on, and I watched a lot of free lessons online."],
      ['N', "Now I play in a small group with three friends from school. We're not famous, of course, but we sometimes play at cafés on Saturday evenings. The first time I went on stage, I was so nervous that I forgot the words to the song. Luckily, the audience just laughed and clapped."],
      ['N', "For me, music is the best way to relax. If you're thinking of learning an instrument, my advice is simple: don't worry about being perfect. Just have fun."],
    ],
    items: [
      { t: 'mcq', q: 'How old was the speaker when he started playing the guitar?', o: ['14', '16', '18', '20'], a: 1 },
      { t: 'mcq', q: 'What made him want to learn?', o: ['a video online', 'a guitarist at a folk concert', 'his cousin’s lessons', 'a school club'], a: 1 },
      { t: 'mcq', q: 'Where did he get his first guitar?', o: ['He bought it.', 'From his cousin.', 'From his parents.', 'From a friend.'], a: 1 },
      { t: 'tf', q: 'His parents complained about the noise.', a: 'T' },
      { t: 'mcq', q: 'How did he mainly learn?', o: ['with a private teacher', 'at school', 'from free online lessons', 'from his cousin'], a: 2 },
      { t: 'tf', q: 'His group is quite famous.', a: 'F' },
      { t: 'mcq', q: 'What happened the first time he performed?', o: ['He played perfectly.', 'He forgot the words.', 'He broke a string.', 'Nobody came.'], a: 1 },
    ],
  },
  {
    title: 'Conversation: Football or jazz?',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Jack và Emma lên kế hoạch cho thứ Bảy.',
    rate: '+0%',
    voices: { Jack: 'en-GB-RyanNeural', Emma: 'en-GB-LibbyNeural' },
    script: [
      ['Jack', 'Hey Emma, are you doing anything on Saturday?'],
      ['Emma', 'Not really. Why, do you have any plans?'],
      ['Jack', "Well, my brother's got two tickets for the football. United are playing against City. He can't go, so he's given them to me."],
      ['Emma', "Oh, that's nice of him. But you know I'm not really a fan of football. I find it a bit boring, to be honest."],
      ['Jack', "Boring? It's the biggest game of the season! If United win, they'll be champions."],
      ['Emma', "I know, I know. But actually, I was going to ask you something. There's a jazz concert at the Riverside Hall on Saturday night. Do you fancy coming with me?"],
      ['Jack', "Jazz? Hmm, I'm not sure. I've never really listened to jazz."],
      ['Emma', 'Well, this is a good chance to try. The band is supposed to be really entertaining, and tickets are only eight pounds.'],
      ['Jack', 'What time does it start?'],
      ['Emma', 'Half past eight.'],
      ['Jack', 'And the match starts at three, so it finishes around five. Actually… we could do both!'],
      ['Emma', 'Both? So you want me to come to the football as well?'],
      ['Jack', "Why not? Come on, give it a try. If you hate it, I'll buy you dinner before the concert."],
      ['Emma', "Deal. But if United lose, you're not allowed to complain all evening."],
      ['Jack', "I promise. Well… I'll try."],
    ],
    items: [
      { t: 'mcq', q: 'Where did Jack get the football tickets?', o: ['He bought them online.', 'From his brother.', 'From Emma.', 'He won them.'], a: 1 },
      { t: 'tf', q: 'Emma is a big football fan.', a: 'F' },
      { t: 'mcq', q: 'What will happen if United win?', o: ['They will play City again.', 'They will become champions.', 'Jack will buy dinner.', 'The concert will be cancelled.'], a: 1 },
      { t: 'gap', q: 'Concert tickets cost £___.', a: ['8', 'eight'] },
      { t: 'gap', q: 'The concert starts at ___.', a: ['8:30', '8.30', 'half past eight', 'eight thirty'] },
      { t: 'mcq', q: 'What do they finally decide?', o: ['to go only to the match', 'to go only to the concert', 'to go to both', 'to stay at home'], a: 2 },
      { t: 'mcq', q: 'What does Jack promise if Emma hates the match?', o: ['to leave early', 'to buy her dinner', 'to pay for the concert', 'never to ask again'], a: 1 },
    ],
    dictation: ['Do you fancy coming with me?', "If you hate it, I'll buy you dinner before the concert."],
  },
  {
    title: 'Radio interview: The young chess champion',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn Mia, 14 tuổi, nhà vô địch cờ vua trẻ quốc gia.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-RyanNeural', Mia: 'en-AU-NatashaNeural' },
    script: [
      ['Presenter', 'Welcome back to Young Achievers. My guest today is fourteen-year-old Mia Thompson, who last month became the national junior chess champion. Congratulations, Mia.'],
      ['Mia', "Thank you! I'm still a bit shocked, to be honest."],
      ['Presenter', "Let's start at the beginning. How did you get into chess?"],
      ['Mia', "It was actually my grandfather. When I was six, I broke my leg and couldn't go outside for weeks. I was bored with everything, so he taught me to play. At first he let me win, but after a few months I started beating him for real."],
      ['Presenter', 'And when did you start playing seriously?'],
      ['Mia', 'When I was nine, I joined a chess club at school. The coach there, Mr Patel, saw that I had some talent and encouraged me to enter competitions. I lost a lot at the beginning. I mean, a lot. But he always said that every defeat teaches you something.'],
      ['Presenter', 'Tell us about the final.'],
      ['Mia', 'It lasted almost five hours. My opponent was seventeen and much more experienced. In the middle of the game I made a terrible mistake and lost my queen. I honestly thought it was over.'],
      ['Presenter', 'So what happened?'],
      ['Mia', 'I decided to take a risk. I started attacking, even though it was dangerous. I think my opponent got too relaxed because he was winning. He made one small mistake, and I was able to win.'],
      ['Presenter', 'Amazing. How much do you train now?'],
      ['Mia', 'About two hours a day after school, and more at weekends. But I also do other things. I play the violin and I go swimming twice a week. My coach says a healthy body helps a healthy mind.'],
      ['Presenter', "Some people say chess isn't really a sport. What do you think?"],
      ['Mia', "I think it is. You need concentration and stamina, and you have to control your emotions. Try sitting still and thinking hard for five hours. It's exhausting!"],
      ['Presenter', 'Mia Thompson, thank you so much.'],
    ],
    items: [
      { t: 'mcq', q: 'Who taught Mia to play chess?', o: ['her father', 'her grandfather', 'Mr Patel', 'a teacher at school'], a: 1 },
      { t: 'mcq', q: 'Why did she start playing?', o: ['She had a broken leg and was bored.', 'She saw a competition on TV.', 'Her school made her.', 'Her brother played.'], a: 0 },
      { t: 'gap', q: 'She joined a chess club at the age of ___.', a: ['9', 'nine'] },
      { t: 'tf', q: 'Mia won most of her early competitions.', a: 'F', ex: '“I lost a lot at the beginning”' },
      { t: 'mcq', q: 'What happened in the middle of the final?', o: ['Her opponent left.', 'She lost her queen.', 'She felt ill.', 'The referee stopped the game.'], a: 1 },
      { t: 'mcq', q: 'How did Mia win the final?', o: ['She played very safely.', 'She took a risk and attacked.', 'Her opponent was ill.', 'They agreed a draw.'], a: 1 },
      { t: 'gap', q: 'She trains about ___ hours a day after school.', a: ['2', 'two'] },
      { t: 'tf', q: 'Mia thinks chess is mentally and physically tiring.', a: 'T' },
    ],
  },
  {
    title: 'Podcast: Is competition good for kids?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận giữa người dẫn, chuyên gia tâm lý và huấn luyện viên bóng đá trẻ.',
    rate: '+5%',
    voices: { Host: 'en-GB-SoniaNeural', Alan: 'en-US-GuyNeural', Rachel: 'en-AU-NatashaNeural' },
    script: [
      ['Host', "Hello and welcome to Family Matters. Today's question: is competition good for children? With me are Doctor Alan Lewis, a child psychologist, and Rachel Burns, who coaches a junior football team. Alan, let's start with you."],
      ['Alan', "Thanks. Well, I think competition itself isn't the problem; it's how adults handle it. Research shows that when children compete in a supportive environment, they develop resilience. They learn to cope with losing and to keep trying. The trouble starts when winning becomes the only thing that matters."],
      ['Host', 'Rachel, you see this every weekend. Do you agree?'],
      ['Rachel', "Absolutely. Honestly, the children are usually fine. It's the parents on the sidelines who worry me. I've seen dads shouting at the referee, and mums arguing with other parents. The kids pick up on that. Some of them become so afraid of making mistakes that they stop enjoying the game."],
      ['Host', 'So should we stop keeping score for young children? Some leagues have done that.'],
      ['Rachel', "I'm not convinced. Kids keep score anyway! They always know who won. I think it's better to teach them that losing is normal than to pretend it doesn't happen."],
      ['Alan', "I'd partly agree with Rachel. Removing scores completely can send a strange message. But for very young children, say under eight, the focus should be on having fun and learning skills, not on results. Interestingly, studies show that most children who give up sport do so around the age of thirteen, and the main reason they give is that it stopped being fun."],
      ['Host', "That's quite a striking figure. Rachel, what do you do in your team to keep it fun?"],
      ['Rachel', "Well, everyone gets equal time on the pitch, whether they're our best player or not. And at the end of each match, we don't just talk about the score. Each child names one thing they did well and one thing they want to improve."],
      ['Alan', "That's exactly the kind of approach that works. It teaches children to measure success by their own progress rather than by comparing themselves with others."],
      ['Host', "Great advice. Let's take a short break, and when we come back, we'll be looking at video games."],
    ],
    items: [
      { t: 'mcq', q: 'What is Dr Lewis’s main point at the start?', o: ['Competition is always harmful.', 'The problem is how adults handle competition.', 'Children should never compete.', 'Winning is the most important thing.'], a: 1 },
      { t: 'mcq', q: 'According to Rachel, who causes most problems at matches?', o: ['the children', 'the referees', 'the parents', 'the coaches'], a: 2 },
      { t: 'tf', q: 'Rachel supports not keeping score for young children.', a: 'F', ex: '“I’m not convinced.”' },
      { t: 'tf', q: 'Dr Lewis thinks children under eight should focus on fun and skills.', a: 'T' },
      { t: 'gap', q: 'Most children who give up sport do so around the age of ___.', a: ['13', 'thirteen'] },
      { t: 'mcq', q: 'The main reason children give up sport is that…', o: ['they have too much homework', 'they get injured', 'it stopped being fun', 'equipment is expensive'], a: 2 },
      { t: 'mcq', q: 'What happens at the end of each match in Rachel’s team?', o: ['The best player gets a prize.', 'Each child names one strength and one thing to improve.', 'Parents give feedback.', 'They watch a video of the match.'], a: 1 },
      { t: 'tf', q: 'The next part of the programme is about video games.', a: 'T' },
    ],
    dictation: ['The trouble starts when winning becomes the only thing that matters.', 'It teaches children to measure success by their own progress.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: gym, referee, coach, cheat, support, score, opponent, challenge, organise, pleasure',
    items: [
      { t: 'gap', q: "If you want to get fitter, why don't you join a ___?", a: ['gym'] },
      { t: 'gap', q: 'The ___ blew his whistle and the match started.', a: ['referee'] },
      { t: 'gap', q: 'Our ___ makes us train for two hours every Saturday morning.', a: ['coach'] },
      { t: 'gap', q: 'He was caught ___ at cards and nobody wanted to play with him again.', a: ['cheating'] },
      { t: 'gap', q: 'Which football team do you ___?', a: ['support'] },
      { t: 'gap', q: 'She ___ two goals in the second half.', a: ['scored'] },
      { t: 'gap', q: 'My ___ in the final was much stronger than me.', a: ['opponent'] },
      { t: 'gap', q: 'Climbing Everest was the biggest ___ of his life.', a: ['challenge'] },
      { t: 'gap', q: 'The school is ___ a quiz night to raise money.', a: ['organising', 'organizing'] },
      { t: 'gap', q: "I don't play to win – I get a lot of ___ from just being outdoors.", a: ['pleasure'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền phrasal verb đúng (chia động từ nếu cần): carry on, eat out, give up, join in, send off, take up, turn down, turn up',
    items: [
      { t: 'gap', q: 'He ___ football after he broke his leg.', a: ['gave up'] },
      { t: 'gap', q: "I'd love to ___ the piano when I retire.", a: ['take up'] },
      { t: 'gap', q: "Could you ___ the radio? I can't hear the commentary.", a: ['turn up'] },
      { t: 'gap', q: 'Two players were ___ for fighting.', a: ['sent off'] },
      { t: 'gap', q: "Don't stop – ___ playing!", a: ['carry on'] },
      { t: 'gap', q: 'Everyone at the party ___ when the band played their most famous song.', a: ['joined in'] },
      { t: 'gap', q: 'We usually ___ on Fridays because nobody wants to cook.', a: ['eat out'] },
      { t: 'gap', q: 'Please ___ the music – the baby is sleeping.', a: ['turn down'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'We got to the stadium just ___ the kick-off.', o: ['on time for', 'in time for', 'at time for'], a: 1, ex: 'in time (for) = kịp lúc; on time = đúng giờ (không đi với for + sự kiện theo nghĩa “kịp”).' },
      { t: 'mcq', q: 'The singer fell over ___ stage.', o: ['in', 'at', 'on'], a: 2 },
      { t: 'mcq', q: "I'm not really keen ___ team sports.", o: ['in', 'on', 'about'], a: 1 },
      { t: 'mcq', q: 'Are you interested ___ joining the chess club?', o: ['in', 'on', 'at'], a: 0 },
      { t: 'mcq', q: 'My sister is crazy ___ K-pop.', o: ['with', 'about', 'for'], a: 1 },
      { t: 'mcq', q: 'This game is very popular ___ teenagers.', o: ['to', 'with', 'for'], a: 1 },
      { t: 'mcq', q: 'Do you feel ___ going for a swim?', o: ['to', 'like', 'as'], a: 1 },
      { t: 'mcq', q: 'We have a game ___ the best team in the league tomorrow.', o: ['with', 'against', 'versus to'], a: 1 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'Swimming is a great way to stay ___. (ACT)', a: ['active'] },
      { t: 'gap', q: 'My grandfather was a ___ in the navy for twenty years. (SAIL)', a: ['sailor'] },
      { t: 'gap', q: 'She has a huge ___ of old board games. (COLLECT)', a: ['collection'] },
      { t: 'gap', q: 'I spent most of my ___ in a small village. (CHILD)', a: ['childhood'] },
      { t: 'gap', q: "The firefighter's ___ actions saved three lives. (HERO)", a: ['heroic'] },
      { t: 'gap', q: 'Zidane was one of the most talented football ___ of all time. (PLAY)', a: ['players'] },
      { t: 'gap', q: 'Which ___ instrument do you play? (MUSIC)', a: ['musical'] },
      { t: 'gap', q: 'The hotel offers live ___ every evening. (ENTERTAIN)', a: ['entertainment'] },
      { t: 'gap', q: 'Usain Bolt is one of the greatest stars in the history of ___. (ATHLETE)', a: ['athletics'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép động từ với cụm danh từ phù hợp.',
    items: [
      { t: 'match', pairs: [['take', 'a risk'], ['score', 'a goal'], ['suffer', 'a defeat'], ['join', 'a club'], ['face', 'a challenge'], ['keep', 'score'], ['go', 'on stage'], ['lose', 'interest in sth']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “take up (a hobby)”:', o: ['carry on', 'give up', 'join in', 'turn up'], a: 1 },
      { t: 'mcq', q: 'Đồng nghĩa với “opponent”:', o: ['teammate', 'rival', 'coach', 'referee'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “victory”:', o: ['champion', 'defeat', 'score', 'challenge'], a: 1 },
      { t: 'mcq', q: 'Đồng nghĩa với “entertaining”:', o: ['boring', 'amusing', 'risky', 'inactive'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “turn up the volume”:', o: ['turn down', 'give up', 'send off', 'eat out'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “take part in”:', o: ['participate in', 'give up', 'support', 'beat'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài. AI sẽ chấm, sửa lỗi và gợi ý cách nói hay hơn.',
    items: [
      { t: 'tr', vi: 'Tôi đã bắt đầu chơi cầu lông từ năm ngoái để khỏe hơn.', ref: 'I took up badminton last year to get fitter.', focus: 'take up' },
      { t: 'tr', vi: 'Anh ấy bị đuổi khỏi sân vì phạm lỗi với đối thủ.', ref: 'He was sent off for fouling his opponent.', focus: 'send off, opponent' },
      { t: 'tr', vi: 'Chúng tôi chơi chỉ để cho vui, không ai giữ tỉ số cả.', ref: 'We play just for fun – nobody keeps score.', focus: 'for fun, keep score' },
      { t: 'tr', vi: 'Em gái tôi mê nhạc dân gian và muốn trở thành ca sĩ.', ref: 'My sister is crazy about folk music and wants to become a singer.', focus: 'crazy about, word formation' },
      { t: 'tr', vi: 'Đừng bỏ cuộc! Ai cũng thua khi mới bắt đầu.', ref: "Don't give up! Everyone loses when they first start.", focus: 'give up' },
      { t: 'tr', vi: 'Đội chúng tôi đã chịu một thất bại nặng nề trước đương kim vô địch.', ref: 'Our team suffered a heavy defeat against the reigning champions.', focus: 'suffer a defeat, champion' },
      { t: 'tr', vi: 'Bạn có muốn tham gia cuộc thi hát của trường không?', ref: 'Would you like to take part in the school singing competition?', focus: 'take part in, competition' },
      { t: 'tr', vi: 'Chúng tôi đến sân vận động vừa kịp lúc trận đấu bắt đầu.', ref: 'We arrived at the stadium just in time for the start of the match.', focus: 'in time for' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you like playing games? What kind of games do you enjoy?' },
  { part: 'Part 1', q: 'Did you play any sports when you were a child?' },
  { part: 'Part 1', q: 'Do you prefer watching sport or playing it? Why?' },
  { part: 'Part 1', q: 'What kind of music do you usually listen to?' },
  { part: 'Part 2', q: 'Describe a game or sport you enjoy playing.', cue: ['what it is', 'when and where you play it', 'who you play it with', 'and explain why you enjoy it'] },
  { part: 'Part 3', q: 'Why do you think some people take up a sport but give it up quickly?' },
  { part: 'Part 3', q: 'Is competition good for children? Why or why not?' },
  { part: 'Part 3', q: 'Do you think video games should be considered a sport?' },
  { part: 'Part 3', q: 'How have free-time activities changed in your country in recent years?' },
];

export default {
  id: 'b1-u03',
  book: 'b1',
  no: 3,
  title: 'Fun and games',
  titleVi: 'Vui chơi & giải trí',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
