// Unit 6 – Vocabulary: Learning and doing (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u06-vocab.js';

const reading = [
  {
    title: 'My first week at language school',
    level: 'Dễ · ~180 từ',
    text: `Last month I started an English course at a language school in Da Nang. I was a bit nervous on the first day because I hadn't studied English since I left school.

My teacher, Mr Brown, is from Scotland. On the first morning he gave us a short test to find out our level. I didn't know some of the answers, so I had to guess. Luckily, I passed and joined the intermediate class.

There are twelve students in my class. Some of them are really clever – one girl knows hundreds of words by heart! At first I hesitated to speak because I was worried about making mistakes. But Mr Brown reminded us that mistakes are a normal part of learning. "Don't cross out everything you write," he said. "Mistakes show me what you need to learn."

Now I try to write down five new words every day and look them up at home. I feel I'm already making progress, and I'm considering taking the IELTS exam next year.`,
    items: [
      { t: 'tf', q: 'The writer had studied English recently before starting the course.', a: 'F', ex: '“I hadn’t studied English since I left school.”' },
      { t: 'mcq', q: 'Why did the writer have to guess some answers?', o: ['The test was too long.', 'He/She didn’t know them.', 'The teacher told everyone to guess.', 'The instructions were unclear.'], a: 1 },
      { t: 'mcq', q: 'What did Mr Brown say about mistakes?', o: ['They should always be crossed out.', 'They are a normal part of learning.', 'Students should avoid them.', 'They lower your marks.'], a: 1 },
      { t: 'tf', q: 'One student can remember hundreds of words without looking.', a: 'T', ex: '“knows hundreds of words by heart”' },
      { t: 'gap', q: 'Every day the writer writes down ___ new words.', a: ['five', '5'] },
      { t: 'tf', q: 'The writer has already booked the IELTS exam.', a: 'F', ex: 'Chỉ đang “considering” (cân nhắc).' },
    ],
  },
  {
    title: 'Five ways to revise smarter',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `Exam season is stressful for almost every student. Many people spend hours reading their notes again and again, but research shows that this is not the most effective way to revise. Here are five tips that really work.

1 Test yourself. Instead of rereading, close your book and try to write down everything you remember. Then check what you missed. This "active recall" makes your brain work harder, so you remember more.

2 Space it out. Revising a subject for twenty minutes every day is much better than doing it for three hours the night before. Your memory needs time between sessions.

3 Teach someone. If you can explain an idea to a friend or a family member, you have really understood it. If you can't, you know which parts you need to look up again.

4 Take care of your mental health. Sleep, exercise and short breaks all help you concentrate. Students who stay up all night before an exam usually get lower marks, not higher ones.

5 Practise under exam conditions. Find past papers, set a timer and work in silence. When the real day comes, the instructions and the format will feel familiar, and you will be less likely to panic.

Finally, remember that one exam does not decide your future. If you fail, you can usually take it again. In fact, many successful people failed important exams when they were young.`,
    items: [
      { t: 'mcq', q: 'According to the article, rereading notes is…', o: ['the best way to revise', 'not the most effective method', 'only useful for maths', 'a waste of time for everyone'], a: 1 },
      { t: 'mcq', q: '“Active recall” means…', o: ['reading your notes aloud', 'trying to remember information without looking', 'revising with friends', 'highlighting key words'], a: 1 },
      { t: 'tf', q: 'Revising for three hours the night before is better than short daily sessions.', a: 'F' },
      { t: 'mcq', q: 'Teaching someone else helps because…', o: ['it saves time', 'it shows whether you have really understood', 'your friend can do the exam for you', 'teachers recommend it'], a: 1 },
      { t: 'tf', q: 'Students who stay up all night usually get better marks.', a: 'F' },
      { t: 'gap', q: 'Practising with past papers makes the format feel ___ on exam day.', a: ['familiar'] },
      { t: 'tf', q: 'The writer says that failing an exam can ruin your life.', a: 'F', ex: '“one exam does not decide your future”' },
    ],
  },
  {
    title: 'Learning by heart: old-fashioned or essential?',
    level: 'Trung bình · ~310 từ',
    text: `For centuries, schoolchildren around the world learnt poems, multiplication tables and historical dates by heart. Today, many teachers consider this method old-fashioned. Why memorise anything, they ask, when you can search for it online in seconds?

Critics argue that memorisation encourages students to repeat information without understanding it. A student might know the definition of "democracy" perfectly but be unable to explain why it matters. Instead, they say, schools should focus on skills such as critical thinking, creativity and problem-solving – abilities that a search engine cannot provide.

However, a growing number of experts are in favour of bringing memorisation back. Cognitive scientists point out that we can only think critically about things we already know. If you have to look up every word in a text, you will not have enough mental energy left to understand its argument. In other words, knowledge stored in long-term memory frees the brain to concentrate on more complex tasks.

Supporters also note that memorising can build confidence. Actors, musicians and public speakers all learn material by heart so that they can perform without hesitating. Language learners who memorise useful phrases often speak more fluently than those who build every sentence from scratch.

In general, the answer seems to lie in balance. Learning facts by heart is not the goal of education, but it can be a powerful tool – as long as students also understand what they are remembering and know how to use it.`,
    items: [
      { t: 'mcq', q: 'Why do some teachers think memorisation is old-fashioned?', o: ['Students hate it.', 'Information can be found online quickly.', 'It takes too long.', 'Exams no longer exist.'], a: 1 },
      { t: 'mcq', q: 'Critics believe memorisation can lead to…', o: ['better creativity', 'repeating information without understanding', 'stronger critical thinking', 'higher marks'], a: 1 },
      { t: 'tf', q: 'Cognitive scientists say knowledge in long-term memory helps the brain handle complex tasks.', a: 'T' },
      { t: 'mcq', q: 'According to paragraph 3, if you have to look up every word…', o: ['you learn faster', 'you have less mental energy to understand the argument', 'you remember the text better', 'you will enjoy reading more'], a: 1 },
      { t: 'tf', q: 'Language learners who memorise phrases may speak more fluently.', a: 'T' },
      { t: 'tf', q: 'The writer believes memorisation should be the main goal of education.', a: 'F', ex: '“Learning facts by heart is not the goal of education”' },
      { t: 'mcq', q: '“from scratch” (đoạn 4) nghĩa gần nhất là…', o: ['from the beginning, with nothing prepared', 'very quickly', 'with a pen', 'from memory'], a: 0 },
    ],
  },
  {
    title: 'Never too old to code',
    level: 'Trung bình–Khó · ~360 từ',
    text: `When Margaret Hill retired from her job as a librarian at the age of 68, her grandchildren gave her a tablet. "I thought I'd use it to read the news and video-call the family," she laughs. "I never imagined I'd end up writing apps."

It began with a simple question. Margaret's grandson, Leo, was struggling with a programming course at university, and she wondered whether she could help him with his homework. "I didn't know anything about computers," she admits. "But I've always loved puzzles, and code is really just a very logical puzzle."

She signed up for a free online course for beginners. The first few weeks were difficult. "The instructions were full of technical terms I'd never heard before. I spent more time looking up words than writing code." Several times she nearly gave up. What kept her going, she says, was a small achievement each day: a button that worked, a line of text that appeared on the screen.

Two years later, Margaret has completed four courses and earned a professional qualification in web development. Last spring she built an app that reminds older people to take their medicine. It has been downloaded more than 30,000 times.

Experts say her story is less unusual than it sounds. Research suggests that while older adults may learn some things more slowly, they are often better at concentrating for long periods and at connecting new information to what they already know. "Learning a new skill also seems to protect mental health," says Dr Priya Shah, who studies ageing and memory. "It keeps the brain active and gives people a sense of purpose."

For Margaret, the biggest change has been in how she sees herself. "I used to say I wasn't clever enough for technology. In fact, I just hadn't tried." Her advice to anyone thinking of learning something new? "Don't hesitate, and don't compare yourself with twenty-year-olds. Make progress at your own speed."`,
    items: [
      { t: 'mcq', q: 'Why did Margaret first become interested in programming?', o: ['She needed it for her job.', 'She wanted to help her grandson with his course.', 'Her doctor recommended it.', 'She saw an advert for a course.'], a: 1 },
      { t: 'tf', q: 'Margaret already had some computer experience before she started.', a: 'F', ex: '“I didn’t know anything about computers”' },
      { t: 'mcq', q: 'What was the main difficulty in the first weeks?', o: ['The course was expensive.', 'She didn’t understand many technical words.', 'Her tablet was too slow.', 'She had no time.'], a: 1 },
      { t: 'mcq', q: 'What helped her continue?', o: ['Money from her family', 'Small successes every day', 'A strict teacher', 'Exams with good marks'], a: 1 },
      { t: 'gap', q: 'Her app reminds older people to take their ___.', a: ['medicine'] },
      { t: 'tf', q: 'According to research, older adults are often good at concentrating for long periods.', a: 'T' },
      { t: 'tf', q: 'Dr Shah thinks learning new skills can be bad for older people’s mental health.', a: 'F' },
      { t: 'mcq', q: 'What does Margaret mean by “I just hadn’t tried”?', o: ['She was never clever enough.', 'Her belief about herself was wrong – she had simply never attempted it.', 'She regrets learning to code.', 'Technology is only for young people.'], a: 1 },
    ],
  },
  {
    title: 'The learning styles myth',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `Ask a group of students how they learn best and many will give you a confident answer: "I'm a visual learner," or "I need to hear things to remember them." The idea that each person has a preferred learning style – visual, auditory or kinaesthetic (learning by doing) – and learns more when teaching matches that style is one of the most popular beliefs in education. Surveys suggest that more than 80 per cent of teachers in some countries are in favour of it. There is just one problem: there is very little evidence that it is true.

Over the past twenty years, researchers have tested the theory many times. In a typical experiment, students first take a questionnaire to identify their "style". They are then taught the same material in different ways – some through pictures, some through spoken explanations – and take a test afterwards. If the theory were correct, visual learners would get higher marks after visual lessons and auditory learners after spoken ones. Study after study has failed to find this pattern.

So why does the myth survive? One reason is that people genuinely do have preferences. You may enjoy diagrams more than lectures. But enjoying something is not the same as learning more from it. Another reason is that the theory is flattering and simple: it suggests that if you are struggling, the problem is the teaching method, not the difficulty of the subject.

What actually works, according to cognitive scientists, is matching the method to the content rather than to the learner. Geography is best learnt with maps; pronunciation is best learnt by listening and speaking; a dance is best learnt by moving. Combining words and pictures also helps almost everyone, a principle known as "dual coding".

Some experts warn that labelling children as one type of learner can actually do harm. A child who believes she is a "kinaesthetic learner" might decide that reading is simply not for her and stop trying to improve.

None of this means that teachers should ignore their students' feelings. Motivation matters enormously, and lessons that students find engaging are more likely to hold their attention. But if you want to achieve better results, the evidence suggests you should spend less time worrying about your learning style and more time using proven techniques: testing yourself, spacing out your revision, and connecting new ideas to what you already know.`,
    items: [
      { t: 'mcq', q: 'What is the main purpose of the article?', o: ['to explain how to find your learning style', 'to show that the popular learning-styles theory lacks evidence', 'to criticise teachers', 'to compare visual and auditory learners'], a: 1 },
      { t: 'tf', q: 'Most teachers in some countries believe in learning styles.', a: 'T', ex: '“more than 80 per cent of teachers in some countries”' },
      { t: 'mcq', q: 'In the experiments described, researchers found that…', o: ['visual learners did better after visual lessons', 'matching teaching to style did not improve results', 'auditory learners always scored higher', 'questionnaires were inaccurate'], a: 1 },
      { t: 'tf', q: 'The writer says people do not have any learning preferences at all.', a: 'F', ex: '“people genuinely do have preferences”' },
      { t: 'mcq', q: 'According to cognitive scientists, the teaching method should match…', o: ['the learner’s style', 'the content being taught', 'the teacher’s preference', 'the time of day'], a: 1 },
      { t: 'gap', q: 'Combining words and pictures is a principle called “___ coding”.', a: ['dual'] },
      { t: 'tf', q: 'Labelling a child as one type of learner may discourage them from improving other skills.', a: 'T' },
      { t: 'mcq', q: '“flattering” (đoạn 3) gần nghĩa nhất với…', o: ['making you feel good about yourself', 'very complicated', 'scientifically proven', 'boring'], a: 0 },
    ],
  },
];

const listening = [
  {
    title: 'Exam instructions',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Giáo viên đọc hướng dẫn trước giờ thi. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-RyanNeural' },
    script: [
      ['N', 'Good morning, everyone. Please listen carefully to these instructions before the exam begins.'],
      ['N', 'The exam lasts ninety minutes. There are four parts, and you must answer all the questions. Write your name and your student number at the top of every page.'],
      ['N', "Please use a pen, not a pencil. If you make a mistake, don't rub it out. Just cross it out neatly and write the correct answer next to it."],
      ['N', 'You may not use a dictionary, and all mobile phones must be switched off and left in your bag at the back of the room.'],
      ['N', 'If you finish early, check your answers carefully. You may not leave the room during the last fifteen minutes.'],
      ['N', 'You can now turn over your papers. Good luck!'],
    ],
    items: [
      { t: 'gap', q: 'The exam lasts ___ minutes.', a: ['90', 'ninety'] },
      { t: 'gap', q: 'Number of parts: ___', a: ['4', 'four'] },
      { t: 'gap', q: 'Write your name and student ___ on every page.', a: ['number'] },
      { t: 'mcq', q: 'If you make a mistake, you should…', o: ['rub it out', 'cross it out', 'ask the teacher', 'start a new page'], a: 1 },
      { t: 'tf', q: 'Students can use a dictionary.', a: 'F' },
      { t: 'gap', q: 'You cannot leave during the last ___ minutes.', a: ['15', 'fifteen'] },
    ],
    dictation: ["If you make a mistake, don't rub it out.", 'You can now turn over your papers.', 'All mobile phones must be switched off.'],
  },
  {
    title: 'Talk: Learning online',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một sinh viên kể về trải nghiệm học khóa online.',
    rate: '-5%',
    voices: { N: 'en-US-JennyNeural' },
    script: [
      ['N', "Hi, I'm Sarah. Last year I decided to take an online course in photography. I'd always been interested in it, but I couldn't find a class near my home that fitted my working hours."],
      ['N', 'The course lasted twelve weeks. Every week there were three short videos, and then we had to take photos and upload them. The teacher marked our work and wrote comments.'],
      ['N', "The best thing was that I could study whenever I wanted, usually late in the evening after work. The worst thing was that it was hard to stay motivated. There was nobody to remind me to do my homework, and twice I almost gave up."],
      ['N', "What helped me was joining an online group with other students. We shared our photos and pointed out each other's mistakes. It felt like a real class."],
      ['N', "In the end, I passed the course and got a certificate. I'm not an expert yet, of course, but I've made a lot of progress. Next, I'm considering a course in video editing."],
    ],
    items: [
      { t: 'mcq', q: 'Why did Sarah choose an online course?', o: ['It was cheaper.', 'No local class fitted her working hours.', 'Her friend recommended it.', 'She wanted a degree.'], a: 1 },
      { t: 'gap', q: 'The course lasted ___ weeks.', a: ['12', 'twelve'] },
      { t: 'mcq', q: 'How many videos were there each week?', o: ['two', 'three', 'four', 'five'], a: 1 },
      { t: 'mcq', q: 'What was the most difficult thing for her?', o: ['understanding the videos', 'staying motivated', 'paying for the course', 'using the camera'], a: 1 },
      { t: 'tf', q: 'Joining a group of other students helped her.', a: 'T' },
      { t: 'tf', q: 'She now considers herself an expert photographer.', a: 'F' },
      { t: 'gap', q: 'Next she is thinking about a course in video ___.', a: ['editing'] },
    ],
  },
  {
    title: 'Conversation: Revision plans',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Hai sinh viên Tom và Amy bàn kế hoạch ôn thi.',
    rate: '+0%',
    voices: { Tom: 'en-GB-RyanNeural', Amy: 'en-GB-SoniaNeural' },
    script: [
      ['Amy', "Hi Tom. You look exhausted. Have you been revising all night again?"],
      ['Tom', "Yeah, till about three. The history exam is on Monday and I still haven't finished the notes."],
      ['Amy', "Three in the morning? That's crazy. You won't be able to concentrate in the exam if you don't sleep."],
      ['Tom', "I know, but there's so much to learn. All those dates! I'm trying to learn them by heart."],
      ['Amy', "Why don't we revise together? I've made some flashcards for history. We could test each other."],
      ['Tom', "That would be great. When are you free?"],
      ['Amy', "Tomorrow afternoon, after my maths lecture. Say, four o'clock in the library?"],
      ['Tom', "The library's always so crowded on Saturdays. What about my flat? It's quieter."],
      ['Amy', "OK, fine. But only if you promise to go to bed before midnight tonight."],
      ['Tom', "Deal. Oh, and could you remind me which chapters we need to know? I've lost the list."],
      ['Amy', "Chapters three to seven. I'll send you a message so you can write it down."],
    ],
    items: [
      { t: 'mcq', q: 'Why does Tom look tired?', o: ['He was working late.', 'He was revising until 3 a.m.', 'He was at a party.', 'He was ill.'], a: 1 },
      { t: 'gap', q: 'The history exam is on ___.', a: ['Monday'] },
      { t: 'mcq', q: 'What has Amy made to help them revise?', o: ['a timetable', 'flashcards', 'a video', 'a mind map'], a: 1 },
      { t: 'mcq', q: 'Where will they meet?', o: ['in the library', "at Tom's flat", "at Amy's house", 'in a café'], a: 1 },
      { t: 'gap', q: 'They will meet at ___ o’clock.', a: ['4', 'four'] },
      { t: 'tf', q: 'Tom must promise to go to bed before midnight.', a: 'T' },
      { t: 'gap', q: 'They need to know chapters three to ___.', a: ['7', 'seven'] },
    ],
    dictation: ["You won't be able to concentrate in the exam if you don't sleep.", "I'll send you a message so you can write it down."],
  },
  {
    title: 'Radio interview: How to remember anything',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một nhà vô địch trí nhớ về các kỹ thuật ghi nhớ.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Ben: 'en-AU-WilliamNeural' },
    script: [
      ['Presenter', "My guest today is Ben Carter, who last year won the national memory championship by memorising the order of a pack of cards in under forty seconds. Ben, welcome."],
      ['Ben', 'Thanks for having me.'],
      ['Presenter', 'So, were you born with an amazing memory?'],
      ['Ben', "Not at all. In fact, at school I had a terrible memory. I used to forget my homework, my sports kit, even people's names. I only got interested in memory techniques at university, when I was failing my exams."],
      ['Presenter', 'What changed?'],
      ['Ben', 'I read a book about a technique called the memory palace. You imagine a place you know well, like your house, and you put the things you want to remember in different rooms. Then, to remember them, you just walk through the house in your mind.'],
      ['Presenter', 'And that really works?'],
      ['Ben', 'It works because our brains are much better at remembering places and pictures than lists of words. The stranger the picture, the better. If I need to remember to buy eggs, I might imagine a giant egg sitting on my sofa, watching TV.'],
      ['Presenter', 'Can ordinary people use this for, say, learning a language?'],
      ['Ben', "Absolutely. Language learners can link a new word to a funny image based on how it sounds. But I'd point out that memory techniques are only part of the story. You also need to review regularly. Even champions forget things if they don't revise."],
      ['Presenter', 'How long do you practise each day?'],
      ['Ben', 'About an hour before a competition, but normally just fifteen or twenty minutes. Consistency matters more than time.'],
      ['Presenter', 'Ben Carter, thank you.'],
    ],
    items: [
      { t: 'gap', q: 'Ben memorised a pack of cards in under ___ seconds.', a: ['40', 'forty'] },
      { t: 'tf', q: 'Ben had an excellent memory at school.', a: 'F', ex: '“at school I had a terrible memory”' },
      { t: 'mcq', q: 'When did Ben become interested in memory techniques?', o: ['as a child', 'at university, when he was failing exams', 'after he started work', 'when he won a competition'], a: 1 },
      { t: 'mcq', q: 'In a “memory palace”, you…', o: ['write lists of words', 'place things to remember in rooms of a familiar place', 'repeat words aloud', 'draw a map'], a: 1 },
      { t: 'mcq', q: 'Why does the technique work?', o: ['Brains remember places and pictures better than word lists.', 'It is very quick.', 'It uses music.', 'It only needs one practice.'], a: 0 },
      { t: 'tf', q: 'Ben says memory techniques alone are enough; you don’t need to review.', a: 'F' },
      { t: 'gap', q: 'Normally Ben practises for fifteen or ___ minutes a day.', a: ['20', 'twenty'] },
      { t: 'mcq', q: 'What does Ben say is most important?', o: ['talent', 'consistency', 'expensive courses', 'competitions'], a: 1 },
    ],
  },
  {
    title: 'Discussion: Should homework be banned?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận giữa người dẫn, một giáo viên và một nhà nghiên cứu giáo dục.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Linda: 'en-US-AriaNeural', Mark: 'en-GB-ThomasNeural' },
    script: [
      ['Host', "Welcome to Learning Today. Several schools have recently stopped giving homework to younger pupils, and the decision has divided parents. With me are Linda Park, a primary school head teacher, and Mark Evans, an education researcher. Linda, your school was one of the first to ban homework. Why?"],
      ['Linda', "Honestly, because it wasn't working. Our pupils were spending hours on worksheets every evening, many of them were stressed, and parents were arguing with their children at the kitchen table. And when we looked at the results, we couldn't see any real benefit for children under eleven."],
      ['Host', 'Mark, is that what the research says?'],
      ['Mark', "Broadly, yes. For primary school children, the link between homework and achievement is very weak. For teenagers, it's a different story. Secondary students who do a moderate amount of homework, roughly an hour or two a day, tend to do better. But beyond that, the benefits disappear, and stress goes up."],
      ['Host', "So it's about quantity?"],
      ['Mark', "Quantity and quality. Pointless homework, like copying out sentences, achieves very little. Homework that makes students recall what they've learnt, or apply it to something new, can be really valuable."],
      ['Linda', "And I'd add that we didn't just stop learning at home. We now ask children to read every evening, for pleasure, whatever they like. And we encourage families to cook together, play board games, talk. Those are skills too."],
      ['Host', "Some parents say that without homework, children won't learn to work independently. What would you say to them?"],
      ['Linda', "I understand the concern, but independence doesn't come from worksheets. It comes from curiosity. In fact, our pupils are asking more questions in class than ever before."],
      ['Mark', "I'd be a bit more cautious. In general, I'm in favour of reducing homework for young children, but I wouldn't ban it completely for older students. The key is to give less of it and to make sure every task has a clear purpose."],
      ['Host', 'Linda Park and Mark Evans, thank you both.'],
    ],
    items: [
      { t: 'mcq', q: 'Why did Linda’s school stop homework?', o: ['Teachers had no time to mark it.', 'It caused stress and showed no clear benefit for young children.', 'Parents demanded more homework.', 'The government required it.'], a: 1 },
      { t: 'tf', q: 'According to Mark, homework has a strong effect on primary school results.', a: 'F', ex: '“the link … is very weak”' },
      { t: 'gap', q: 'Mark says teenagers benefit from roughly an hour or ___ of homework a day.', a: ['two', '2'] },
      { t: 'mcq', q: 'Which kind of homework does Mark say is valuable?', o: ['copying sentences', 'tasks that make students recall or apply what they learnt', 'long worksheets', 'homework done with parents'], a: 1 },
      { t: 'mcq', q: 'What do Linda’s pupils do at home now?', o: ['nothing', 'read for pleasure every evening', 'online tests', 'extra maths'], a: 1 },
      { t: 'tf', q: 'Linda says her pupils ask more questions in class now.', a: 'T' },
      { t: 'mcq', q: 'What is Mark’s final position?', o: ['Ban all homework.', 'Give more homework.', 'Reduce homework for young children but don’t ban it for older students.', 'Leave everything as it is.'], a: 2 },
    ],
    dictation: ['For primary school children, the link between homework and achievement is very weak.', 'Independence comes from curiosity.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: achieve, concentrate, degree, fail, hesitate, instructions, mark, qualification, remind, revise',
    items: [
      { t: 'gap', q: "I can't ___ with the TV on.", a: ['concentrate'] },
      { t: 'gap', q: 'Please read the ___ carefully before you begin.', a: ['instructions'] },
      { t: 'gap', q: 'She has a ___ in economics from Hanoi University.', a: ['degree'] },
      { t: 'gap', q: "If you don't study, you'll ___ the exam.", a: ['fail'] },
      { t: 'gap', q: "Don't ___ to ask me if you need help.", a: ['hesitate'] },
      { t: 'gap', q: 'Can you ___ me to call Mum later?', a: ['remind'] },
      { t: 'gap', q: "I'm ___ for my maths test tomorrow.", a: ['revising'] },
      { t: 'gap', q: 'He got full ___ in the vocabulary quiz.', a: ['marks'] },
      { t: 'gap', q: 'She finally ___ her dream of studying abroad.', a: ['achieved'] },
      { t: 'gap', q: 'You need a teaching ___ to work at this school.', a: ['qualification'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền phrasal verb đúng (chia động từ nếu cần): cross out, look up, point out, read out, rip up, rub out, turn over, write down',
    items: [
      { t: 'gap', q: "If you don't know a word, ___ it ___ in the dictionary. (2 phần, cách nhau …)", a: ['look … up', 'look up'] },
      { t: 'gap', q: 'The teacher ___ the names of the winners.', a: ['read out'] },
      { t: 'gap', q: 'Please ___ your papers and start writing.', a: ['turn over'] },
      { t: 'gap', q: 'He ___ the letter and threw it in the bin.', a: ['ripped up'] },
      { t: 'gap', q: 'Use a pencil so you can ___ any mistakes.', a: ['rub out'] },
      { t: 'gap', q: 'Thanks for ___ that error in my essay.', a: ['pointing out'] },
      { t: 'gap', q: 'Can you ___ your email address for me?', a: ['write down'] },
      { t: 'gap', q: 'If you write the wrong answer, just ___ it ___. (2 phần, cách nhau …)', a: ['cross … out', 'cross out'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'We had to learn the poem ___ heart.', o: ['by', 'in', 'with'], a: 0 },
      { t: 'mcq', q: '___ conclusion, online learning has both advantages and disadvantages.', o: ['On', 'In', 'At'], a: 1 },
      { t: 'mcq', q: 'Most teachers are in favour ___ shorter exams.', o: ['for', 'of', 'to'], a: 1 },
      { t: 'mcq', q: 'How do you cope ___ exam stress?', o: ['with', 'about', 'for'], a: 0 },
      { t: 'mcq', q: 'She succeeded ___ getting a scholarship.', o: ['to', 'in', 'at'], a: 1 },
      { t: 'mcq', q: "Don't confuse 'lose' ___ 'loose'.", o: ['to', 'with', 'by'], a: 1 },
      { t: 'mcq', q: 'He is capable ___ much better work.', o: ['to', 'for', 'of'], a: 2 },
      { t: 'mcq', q: "What's your opinion ___ the new timetable?", o: ['of', 'for', 'on to'], a: 0 },
      { t: 'mcq', q: 'I thought it would be difficult. ___, it was really easy.', o: ['In general', 'In fact', 'For instance'], a: 1 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'This course is designed for complete ___. (BEGIN)', a: ['beginners'] },
      { t: 'gap', q: 'The firefighter received an award for ___. (BRAVE)', a: ['bravery'] },
      { t: 'gap', q: 'Three of your answers are ___. (CORRECT)', a: ['incorrect'] },
      { t: 'gap', q: 'Long ___ was the hardest part of maths for me. (DIVIDE)', a: ['division'] },
      { t: 'gap', q: 'Everyone has the right to a good ___. (EDUCATE)', a: ['education'] },
      { t: 'gap', q: 'My driving ___ is very patient. (INSTRUCT)', a: ['instructor'] },
      { t: 'gap', q: "It's easier to ___ words if you use them in sentences. (MEMORY)", a: ['memorise', 'memorize'] },
      { t: 'gap', q: 'The students worked in complete ___. (SILENT)', a: ['silence'] },
      { t: 'gap', q: 'Could you ___ the explanation for the younger children? (SIMPLE)', a: ['simplify'] },
      { t: 'gap', q: 'Keep the dictionary on your desk for quick ___. (REFER)', a: ['reference'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép động từ với cụm danh từ phù hợp.',
    items: [
      { t: 'match', pairs: [['take', 'an exam'], ['make', 'progress'], ['achieve', 'a goal'], ['follow', 'the instructions'], ['gain', 'experience'], ['develop', 'a skill'], ['get', 'full marks'], ['learn', 'sth by heart']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “pass (an exam)”:', o: ['take', 'fail', 'revise', 'mark'], a: 1 },
      { t: 'mcq', q: 'Đồng nghĩa với “clever”:', o: ['smart', 'mental', 'brave', 'silent'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “for instance”:', o: ['in fact', 'for example', 'in general', 'in conclusion'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “expert”:', o: ['specialist', 'beginner', 'instructor', 'professional'], a: 1 },
      { t: 'mcq', q: 'Đồng nghĩa với “rub out”:', o: ['erase', 'write down', 'look up', 'turn over'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “mental”:', o: ['physical', 'clever', 'simple', 'correct'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Nếu bạn không biết từ nào, hãy tra trong từ điển.', ref: "If you don't know a word, look it up in a dictionary.", focus: 'look up' },
      { t: 'tr', vi: 'Tôi đang cân nhắc việc học thạc sĩ ở nước ngoài.', ref: "I'm considering doing a master's degree abroad.", focus: 'consider + -ing, degree' },
      { t: 'tr', vi: 'Đừng ngần ngại hỏi nếu bạn có thắc mắc.', ref: "Don't hesitate to ask if you have any questions.", focus: 'hesitate' },
      { t: 'tr', vi: 'Cô ấy đã đỗ kỳ thi với điểm số rất cao.', ref: 'She passed the exam with very high marks.', focus: 'pass, marks' },
      { t: 'tr', vi: 'Thực ra, học thuộc lòng không phải lúc nào cũng là cách tốt nhất.', ref: 'In fact, learning by heart is not always the best way.', focus: 'in fact, by heart' },
      { t: 'tr', vi: 'Làm sao bạn đối phó với áp lực thi cử?', ref: 'How do you cope with exam pressure?', focus: 'cope with' },
      { t: 'tr', vi: 'Giáo viên đã chỉ ra vài lỗi ngữ pháp trong bài luận của tôi.', ref: 'The teacher pointed out a few grammar mistakes in my essay.', focus: 'point out' },
      { t: 'tr', vi: 'Tôi đã tiến bộ nhiều kể từ khi bắt đầu khóa học này.', ref: "I've made a lot of progress since I started this course.", focus: 'make progress, course' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you work or are you a student? What do you study?' },
  { part: 'Part 1', q: 'What was your favourite subject at school? Why?' },
  { part: 'Part 1', q: 'Do you prefer studying alone or with other people?' },
  { part: 'Part 1', q: 'How do you usually prepare for exams?' },
  { part: 'Part 2', q: 'Describe a skill you learnt that you think is useful.', cue: ['what the skill is', 'when and how you learnt it', 'how difficult it was to learn', 'and explain why you think it is useful'] },
  { part: 'Part 3', q: 'Do you think exams are a good way to measure ability?' },
  { part: 'Part 3', q: 'What are the advantages and disadvantages of online learning?' },
  { part: 'Part 3', q: 'Is it more important to learn practical skills or academic knowledge?' },
  { part: 'Part 3', q: 'Should older people continue learning new things? Why?' },
];

export default {
  id: 'b1-u06',
  book: 'b1',
  no: 6,
  title: 'Learning and doing',
  titleVi: 'Học tập & làm việc',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
