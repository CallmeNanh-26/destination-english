// Unit 27 – Vocabulary: Working and earning (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u27-vocab.js';

const reading = [
  {
    title: 'My first job',
    level: 'Dễ · ~180 từ',
    text: `When I was eighteen, I got my first job as a waiter in a busy restaurant in Da Nang. I wanted to earn some money before starting university.

The interview was very short. The manager asked me if I had any previous experience. I didn't, but I said I was a fast learner and that I was never late. She smiled and gave me a three-month contract.

The first week was terrible. I dropped two plates, forgot several orders and once gave a customer the wrong bill. I felt under a lot of pressure. But my colleagues were really kind. An older waiter called Hung showed me how to carry plates safely and how to remember orders. "Everyone makes mistakes at first," he said.

The salary wasn't high, but customers often left tips. By the end of the summer, I had saved enough money to buy a laptop for university.

More importantly, I learnt how to work in a team, how to stay calm when things go wrong and how to speak to all kinds of people. Those skills have helped me in every job since.`,
    items: [
      { t: 'gap', q: 'The writer got the job at the age of ___.', a: ['eighteen', '18'] },
      { t: 'tf', q: 'The writer had worked as a waiter before.', a: 'F' },
      { t: 'mcq', q: 'How long was the contract?', o: ['one month', 'three months', 'six months', 'one year'], a: 1 },
      { t: 'mcq', q: 'Who helped the writer?', o: ['the manager', 'a colleague called Hung', 'a customer', 'his parents'], a: 1 },
      { t: 'mcq', q: 'What did the writer buy with the money?', o: ['a motorbike', 'a laptop', 'a phone', 'clothes'], a: 1 },
      { t: 'tf', q: 'The writer thinks the job taught useful skills.', a: 'T' },
    ],
  },
  {
    title: 'How to impress at a job interview',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `A job interview can be stressful, but good preparation makes a huge difference. Here are some tips from experienced managers.

Do your research. Before the interview, find out as much as you can about the company: what it does, who its customers are and any recent news. Interviewers are always impressed when candidates show real interest in the company.

Prepare examples. Many interviewers ask questions like "Tell me about a time you worked under pressure" or "Describe a problem you solved". Think of two or three real examples from your studies, previous jobs or volunteer work, and practise explaining them clearly.

Arrive on time – but not too early. Ten minutes before the interview is perfect. Arriving late gives a very bad first impression, but arriving forty minutes early can also make the staff feel uncomfortable.

Think about body language. Make eye contact, smile and sit up straight. Avoid checking your phone – in fact, it's best to switch it off completely.

Ask questions. At the end, the interviewer will usually ask, "Do you have any questions for us?" Never say no! Ask about the team, the training or the kind of projects you would work on. Avoid asking about the salary or holidays in a first interview.

Finally, after the interview, send a short email thanking the interviewer for their time. It is a small thing, but it shows that you are polite and professional – and it helps them remember you.`,
    items: [
      { t: 'mcq', q: 'What impresses interviewers, according to the text?', o: ['expensive clothes', 'real interest in the company', 'talking a lot', 'arriving very early'], a: 1 },
      { t: 'mcq', q: 'Why should you prepare examples?', o: ['to answer questions about experiences clearly', 'to show your certificates', 'to ask about the salary', 'to talk about your hobbies'], a: 0 },
      { t: 'gap', q: 'The best time to arrive is ___ minutes before the interview.', a: ['ten', '10'] },
      { t: 'tf', q: 'Arriving forty minutes early is a good idea.', a: 'F' },
      { t: 'tf', q: 'You should ask about the salary in a first interview.', a: 'F' },
      { t: 'mcq', q: 'What should you do after the interview?', o: ['call the manager', 'send a short thank-you email', 'visit the office again', 'post on social media'], a: 1 },
    ],
  },
  {
    title: 'The four-day working week',
    level: 'Trung bình · ~320 từ',
    text: `Imagine working only four days a week, for the same salary. For thousands of employees around the world, this is no longer a dream. In recent years, companies in the UK, Iceland, Japan and many other countries have tested a four-day week, and the results have surprised many people.

In one of the largest trials, around sixty British companies reduced their staff's working hours by twenty per cent without cutting their pay. At the end of six months, most of the companies decided to continue. Productivity – the amount of work produced – stayed the same or even increased in many cases. Workers reported feeling less stressed and less tired, and fewer of them took sick days or left their jobs.

Why does it work? Supporters say that when people have less time, they waste less of it. Long meetings become shorter, unnecessary emails disappear and workers concentrate better because they are more rested. An extra day off also gives people time for family, exercise and hobbies, which improves their mental health.

However, the four-day week is not suitable for every industry. Hospitals, schools, shops and restaurants need staff to be available every day, so they would have to employ more people, which costs money. Some managers also worry that customers will be unhappy if offices are closed on Fridays. And a few workers in the trials said they felt more pressure, because they had to do five days of work in four.

Critics also point out that many people in poorer countries, or in low-paid jobs, cannot even imagine such a change. For them, the priority is a fair income, not a shorter week.

Still, the idea is spreading. As one manager put it: "We used to measure work by the hours people spent at their desks. Now we measure it by what they achieve."`,
    items: [
      { t: 'mcq', q: 'In the British trial, working hours were reduced by…', o: ['10%', '20%', '50%', 'one hour a day'], a: 1 },
      { t: 'tf', q: 'Workers’ salaries were reduced in the trial.', a: 'F' },
      { t: 'mcq', q: 'What happened to productivity in many companies?', o: ['It fell sharply.', 'It stayed the same or increased.', 'It was not measured.', 'It doubled.'], a: 1 },
      { t: 'mcq', q: 'Why might the four-day week work, according to supporters?', o: ['People waste less time when they have less of it.', 'Managers work harder.', 'Offices are cheaper.', 'Customers prefer it.'], a: 0 },
      { t: 'mcq', q: 'Which industry may find a four-day week difficult?', o: ['software', 'hospitals', 'marketing', 'design'], a: 1 },
      { t: 'tf', q: 'Some workers felt more pressure during the trial.', a: 'T' },
      { t: 'mcq', q: 'What does the manager’s quote mean?', o: ['Work should be measured by results, not hours.', 'People should work longer hours.', 'Desks are important.', 'Meetings are useful.'], a: 0 },
    ],
  },
  {
    title: 'From beggar to business owner',
    level: 'Trung bình–Khó · ~370 từ',
    text: `Fifteen years ago, Thomas Reyes was sleeping on the streets of Manila. He had lost his job in a factory, his family could not help him and, at nineteen, he had nowhere to live. "I begged for money outside a shopping centre every day," he remembers. "People walked past as if I didn't exist. The worst thing about poverty isn't being hungry. It's being invisible."

Everything changed when a charity offered him a place on a training course for unemployed young people. For six months, he learnt to cook, to manage money and, perhaps most importantly, to believe in himself again. "The teacher told me I had a talent for cooking. Nobody had ever told me I was good at anything."

After the course, Thomas got a job as an assistant in a hotel kitchen. The pay was low and the hours were long – he often worked twelve hours a day – but he was determined to succeed. He watched the chefs carefully, asked questions and stayed late to practise. Within three years he had become a chef himself.

His ambition, however, was to be his own boss. He saved part of his salary every month, and when he had enough, he set up a small food stall selling traditional Filipino dishes. Customers loved his food, and the stall became so popular that, five years later, he opened his first restaurant.

Today, Thomas employs twenty-two people – and almost half of them were once homeless or unemployed. "When I interview people, I don't only look at their previous experience," he explains. "I look for people who want a chance. Someone gave me one, so I want to give it back."

His story has made him locally famous, but he is not interested in fame. "Success isn't about how much money you earn. It's about what you do with it." Every month, he gives part of the restaurant's profits to the charity that once helped him, and he teaches cooking classes there for free.

"I still remember the faces of the people who walked past me," he says. "Now, when I see someone on the street, I always stop. You never know what they could become."`,
    items: [
      { t: 'mcq', q: 'Why was Thomas living on the street?', o: ['He ran away from home.', 'He lost his factory job and had no support.', 'He wanted to travel.', 'His house was destroyed.'], a: 1 },
      { t: 'mcq', q: 'According to Thomas, the worst thing about poverty is…', o: ['hunger', 'being invisible', 'the weather', 'loneliness'], a: 1 },
      { t: 'gap', q: 'The training course lasted ___ months.', a: ['six', '6'] },
      { t: 'mcq', q: 'What was his first job after the course?', o: ['a chef', 'an assistant in a hotel kitchen', 'a waiter', 'a teacher'], a: 1 },
      { t: 'tf', q: 'Thomas borrowed money to set up his food stall.', a: 'F', ex: 'He saved part of his salary.' },
      { t: 'gap', q: 'Today Thomas employs ___ people.', a: ['twenty-two', '22', 'twenty two'] },
      { t: 'mcq', q: 'What does Thomas look for when he interviews people?', o: ['only previous experience', 'people who want a chance', 'university degrees', 'famous people'], a: 1 },
      { t: 'mcq', q: 'For Thomas, success is about…', o: ['how much money you earn', 'what you do with your money', 'becoming famous', 'having many restaurants'], a: 1 },
    ],
  },
  {
    title: 'Will there be enough jobs for young people?',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `Every year, millions of young people around the world finish school or university and start looking for their first job. For many of them, it is a frustrating experience. According to international organisations, young people are around three times more likely to be unemployed than adults, and many of those who do find work are in temporary, low-paid jobs with little security.

Several factors make the situation particularly difficult today. First, the world of work is changing rapidly. Technology is replacing some traditional jobs, particularly in factories and offices, while creating new ones that require digital skills many graduates do not have. Second, in many countries the number of university graduates has grown much faster than the number of jobs that require a degree. As a result, some graduates take jobs that do not use their qualifications, and they may earn less than they expected. Third, employers often demand previous experience, even for entry-level positions – creating a frustrating cycle in which young people cannot get experience without a job, and cannot get a job without experience.

The consequences go beyond money. Research suggests that long periods of unemployment early in life can have lasting effects on a person's income, health and confidence. Some economists talk about a "scarring effect": people who struggle to find work in their early twenties may still earn less than their peers twenty years later.

However, there are also reasons for optimism. Many governments are investing in apprenticeships, which allow young people to earn a salary while learning a profession, often in industries such as engineering, healthcare or technology. Online platforms have made it easier for young people to work as freelancers, find international clients or set up their own small businesses. And as populations age in many countries, large numbers of workers will retire over the next two decades, creating opportunities in sectors such as healthcare and education.

Experts say young people can improve their chances by developing skills that are hard to automate: communication, problem-solving, teamwork and the ability to keep learning. Practical experience also matters. Part-time jobs, internships and volunteer work all show employers that a candidate is responsible and ready for the world of work.

The challenge for governments, schools and businesses is to work together so that education matches the needs of a changing economy – and so that a whole generation does not lose its chance to build a successful career.`,
    items: [
      { t: 'mcq', q: 'Compared to adults, young people are about … more likely to be unemployed.', o: ['twice', 'three times', 'five times', 'ten times'], a: 1 },
      { t: 'mcq', q: 'Which is NOT given as a factor making the situation difficult?', o: ['changing technology', 'too many graduates for degree-level jobs', 'employers demanding experience', 'young people refusing to work'], a: 3 },
      { t: 'mcq', q: 'The “frustrating cycle” refers to…', o: ['needing experience to get a job, and a job to get experience', 'changing jobs often', 'studying too long', 'low salaries'], a: 0 },
      { t: 'mcq', q: 'What is the “scarring effect”?', o: ['injuries at work', 'early unemployment causing lower income years later', 'stress from exams', 'bad managers'], a: 1 },
      { t: 'tf', q: 'Apprenticeships let young people earn a salary while learning.', a: 'T' },
      { t: 'mcq', q: 'Why may ageing populations create opportunities?', o: ['Older people buy more.', 'Many workers will retire.', 'Taxes will fall.', 'Companies will close.'], a: 1 },
      { t: 'mcq', q: 'Which skills are hard to automate, according to experts?', o: ['data entry', 'communication and problem-solving', 'factory work', 'typing'], a: 1 },
      { t: 'tf', q: 'The writer believes the problem can be solved by schools alone.', a: 'F' },
    ],
  },
];

const listening = [
  {
    title: 'Job advertisement',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Quảng cáo tuyển dụng trên radio. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-RyanNeural' },
    script: [
      ['N', 'Sunshine Hotel is looking for a new receptionist to join our friendly team.'],
      ['N', 'You must speak good English, and previous experience is helpful but not necessary. Full training will be given.'],
      ['N', 'The job is full-time, five days a week, and the salary is two thousand dollars a month. Staff also receive free meals and twenty days of holiday a year.'],
      ['N', 'To apply, please send your application by email before the thirtieth of June. Interviews will take place in the first week of July.'],
      ['N', 'Join us and start your career in the hotel industry!'],
    ],
    items: [
      { t: 'gap', q: 'Job: hotel ___', a: ['receptionist'] },
      { t: 'tf', q: 'Previous experience is necessary.', a: 'F' },
      { t: 'gap', q: 'Salary: $___ a month', a: ['2,000', '2000', 'two thousand'] },
      { t: 'gap', q: 'Holiday: ___ days a year', a: ['20', 'twenty'] },
      { t: 'gap', q: 'Deadline: the ___ of June', a: ['30th', 'thirtieth', '30'] },
      { t: 'mcq', q: 'When are the interviews?', o: ['end of June', 'first week of July', 'in August', 'next week'], a: 1 },
    ],
    dictation: ['Full training will be given.', 'Staff also receive free meals.', 'Please send your application by email.'],
  },
  {
    title: 'Talk: Why I changed career',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một người kể về việc chuyển nghề ở tuổi 35.',
    rate: '-5%',
    voices: { N: 'en-US-AriaNeural' },
    script: [
      ['N', "For ten years, I worked in a bank. I had a good salary, a nice office and a pension. My parents were very proud of me."],
      ['N', "But I wasn't happy. Every Sunday evening I felt sick, because I didn't want to go to work on Monday. I was fed up with spending all day looking at numbers."],
      ['N', "When I was thirty-five, I decided to change career and become a primary school teacher. It was a difficult decision. I had to go back to university for a year, and my salary is now about half of what it was."],
      ['N', "Some people thought I was crazy. But I've never regretted it. Every day is different, and when a child finally understands something, it's the best feeling in the world."],
      ["N", "My advice? Don't stay in a job just for the money. Life is too short."],
    ],
    items: [
      { t: 'gap', q: 'She worked in a bank for ___ years.', a: ['ten', '10'] },
      { t: 'mcq', q: 'How did she feel on Sunday evenings?', o: ['excited', 'sick', 'relaxed', 'bored'], a: 1 },
      { t: 'gap', q: 'She changed career at the age of ___.', a: ['35', 'thirty-five', 'thirty five'] },
      { t: 'mcq', q: 'What is her new job?', o: ['university lecturer', 'primary school teacher', 'bank manager', 'nurse'], a: 1 },
      { t: 'mcq', q: 'How much does she earn now?', o: ['the same', 'twice as much', 'about half', 'nothing'], a: 2 },
      { t: 'tf', q: 'She regrets her decision.', a: 'F' },
    ],
  },
  {
    title: 'Conversation: Asking for a pay rise',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Một nhân viên xin tăng lương với sếp.',
    rate: '+0%',
    voices: { Anna: 'en-GB-SoniaNeural', 'Mr Hall': 'en-GB-RyanNeural' },
    script: [
      ['Anna', "Mr Hall, have you got a few minutes? There's something I'd like to talk to you about."],
      ['Mr Hall', "Of course, Anna. Come in. What's on your mind?"],
      ['Anna', "Well, I've been working here for three years now, and over the last year I've taken on a lot more responsibility. Since Mark left, I've been in charge of the whole social media team."],
      ['Mr Hall', "Yes, and you've done an excellent job. Our online sales have gone up by twenty per cent."],
      ['Anna', "Thank you. That's why I wanted to ask whether you would consider a pay rise. I feel my salary doesn't reflect my current role."],
      ['Mr Hall', "I understand. What did you have in mind?"],
      ['Anna', "I was thinking of a ten per cent increase."],
      ['Mr Hall', "Hmm. I think you deserve it, but I can't decide alone. I'll need to discuss it with the finance department. Can I give you an answer by the end of next week?"],
      ['Anna', "Of course. Thank you for listening."],
      ['Mr Hall', "Thank you for asking. It's good to know you want to stay with us."],
    ],
    items: [
      { t: 'gap', q: 'Anna has worked there for ___ years.', a: ['three', '3'] },
      { t: 'mcq', q: 'What is Anna in charge of?', o: ['the finance department', 'the social media team', 'sales staff', 'the whole company'], a: 1 },
      { t: 'gap', q: 'Online sales have gone up by ___ per cent.', a: ['20', 'twenty'] },
      { t: 'gap', q: 'Anna asks for a ___ per cent increase.', a: ['10', 'ten'] },
      { t: 'tf', q: 'Mr Hall immediately agrees to the pay rise.', a: 'F' },
      { t: 'mcq', q: 'When will Mr Hall give an answer?', o: ['tomorrow', 'by the end of next week', 'next month', 'today'], a: 1 },
    ],
    dictation: ["I've been working here for three years now.", 'I feel my salary does not reflect my current role.'],
  },
  {
    title: 'Radio interview: Working from home',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một chuyên gia về ưu nhược điểm của làm việc tại nhà.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', 'Dr Jones': 'en-AU-WilliamNeural' },
    script: [
      ['Presenter', "Since the pandemic, millions of people have worked from home, at least part of the week. Dr Ben Jones studies how this affects workers. Ben, is working from home good for us?"],
      ['Dr Jones', "It depends on the person and the job. For many people, the biggest benefit is not commuting. The average worker in a big city spends about an hour a day travelling. That's time they can now spend with their family, exercising or sleeping."],
      ['Presenter', "And productivity?"],
      ['Dr Jones', "Studies show mixed results. People often concentrate better on individual tasks at home, without colleagues interrupting them. But creative work and teamwork can suffer. Some of the best ideas come from informal conversations in the office kitchen."],
      ['Presenter', "What about young workers?"],
      ['Dr Jones', "That's a real concern. Young employees learn a lot by watching more experienced colleagues: how they speak to customers, how they deal with problems. That's much harder over a video call. Some young people also feel lonely and find it difficult to make friends at work."],
      ['Presenter', "What's the solution?"],
      ['Dr Jones', "Most companies now use a hybrid model: two or three days in the office, the rest at home. I think that's sensible, as long as teams agree to be in the office on the same days. Otherwise, you travel an hour to sit alone and do video calls!"],
      ['Presenter', "Any advice for people working at home?"],
      ['Dr Jones', "Set clear limits. Have a fixed start and finish time, and if possible a separate space for work. When your office is also your bedroom, it's very hard to switch off."],
    ],
    items: [
      { t: 'mcq', q: 'What is the biggest benefit of working from home for many people?', o: ['higher salary', 'not commuting', 'more meetings', 'better computers'], a: 1 },
      { t: 'gap', q: 'The average city worker spends about an ___ a day travelling.', a: ['hour'] },
      { t: 'mcq', q: 'What kind of work can suffer at home?', o: ['individual tasks', 'creative work and teamwork', 'writing emails', 'reading'], a: 1 },
      { t: 'mcq', q: 'Why is working from home a concern for young workers?', o: ['They earn less.', 'They learn less from experienced colleagues and may feel lonely.', 'They don’t have laptops.', 'They prefer offices.'], a: 1 },
      { t: 'mcq', q: 'What is a hybrid model?', o: ['working only at home', 'some days in the office, some at home', 'working at night', 'working for two companies'], a: 1 },
      { t: 'tf', q: 'Dr Jones says teams should be in the office on the same days.', a: 'T' },
      { t: 'mcq', q: 'What is his advice for home workers?', o: ['work in the bedroom', 'set clear limits like fixed hours and a separate space', 'work longer hours', 'avoid video calls'], a: 1 },
    ],
  },
  {
    title: 'Discussion: Should there be a maximum salary?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về khoảng cách thu nhập và việc giới hạn lương lãnh đạo.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Nina: 'en-US-AriaNeural', George: 'en-GB-ThomasNeural' },
    script: [
      ['Host', "Good evening. In some large companies, the boss now earns more than three hundred times the salary of an average worker. Should there be a limit? With me are Nina Patel, an economist who campaigns against inequality, and George Wright, a business consultant. Nina?"],
      ['Nina', "When a chief executive earns in one day what a cleaner in the same company earns in a year, something has gone wrong. That level of inequality damages trust, and research shows that very unequal societies tend to have more health and social problems. I'm not saying everyone should earn the same, but I'd support a rule that the highest salary can't be more than, say, twenty times the lowest."],
      ['Host', "George?"],
      ['George', "I understand the concern, but I think a legal limit would cause more problems than it solves. Companies compete internationally for the best leaders. If you limit salaries in one country, talented people may simply move abroad, and some companies might move with them, taking jobs and tax income away."],
      ['Nina', "That argument comes up every time, but the evidence that top leaders would all leave is quite weak. And there are other options. Some countries require companies to publish the ratio between the highest and average salary. Just making it public puts pressure on companies to behave more fairly."],
      ['George', "That's something I'd agree with. Transparency is good. I'd also say the bigger issue is the bottom, not the top. If we focus on raising the minimum wage and making sure people can live on what they earn, that helps far more people than limiting a few chief executives."],
      ['Nina', "I'd support both. A fair minimum and a reasonable maximum."],
      ['Host', "So, briefly: should there be a maximum salary?"],
      ['George', "No, but more transparency and a higher minimum wage."],
      ['Nina', "Yes, because no one's work is worth three hundred times more than someone else's."],
      ['Host', "Nina Patel and George Wright, thank you."],
    ],
    items: [
      { t: 'gap', q: 'Some bosses earn more than ___ times the average worker’s salary.', a: ['300', 'three hundred'] },
      { t: 'mcq', q: 'What rule does Nina suggest?', o: ['everyone earns the same', 'the highest salary no more than about 20 times the lowest', 'no salaries for bosses', 'higher taxes for workers'], a: 1 },
      { t: 'mcq', q: 'What is George’s main argument against a limit?', o: ['It is unfair to bosses.', 'Talented leaders and companies might move abroad.', 'It is too complicated.', 'Workers don’t want it.'], a: 1 },
      { t: 'tf', q: 'Nina thinks there is strong evidence that top leaders would leave.', a: 'F' },
      { t: 'mcq', q: 'What do both speakers agree on?', o: ['a maximum salary', 'transparency about salaries', 'lower minimum wages', 'banning bonuses'], a: 1 },
      { t: 'mcq', q: 'According to George, what is the bigger issue?', o: ['the salaries at the bottom', 'bosses’ holidays', 'taxes on companies', 'international competition'], a: 0 },
      { t: 'mcq', q: 'What is Nina’s final answer?', o: ['No limit.', 'Yes, because no one’s work is worth 300 times more.', 'Only transparency.', 'She isn’t sure.'], a: 1 },
    ],
    dictation: ['Transparency is good.', 'A fair minimum and a reasonable maximum.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: ambition, colleague, contract, deserve, earn, income, pension, pressure, retire, salary',
    items: [
      { t: 'gap', q: 'Her ___ is to open her own restaurant.', a: ['ambition'] },
      { t: 'gap', q: 'I get on well with all my ___.', a: ['colleagues'] },
      { t: 'gap', q: 'Read the ___ carefully before you sign it.', a: ['contract'] },
      { t: 'gap', q: 'You’ve worked so hard – you ___ a holiday.', a: ['deserve'] },
      { t: 'gap', q: 'How much does a pilot ___ a year?', a: ['earn'] },
      { t: 'gap', q: 'Families on a low ___ need more support.', a: ['income'] },
      { t: 'gap', q: 'My grandparents live on their ___.', a: ['pension'] },
      { t: 'gap', q: 'Doctors often work under a lot of ___.', a: ['pressure'] },
      { t: 'gap', q: 'My dad wants to ___ at 60.', a: ['retire'] },
      { t: 'gap', q: 'The job has a good ___ and long holidays.', a: ['salary'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: call off, give back, go on, put off, set up, stay up, take away, take over (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'The meeting was ___ because the boss was ill.', a: ['called off'] },
      { t: 'gap', q: 'She ___ her own company when she was 25.', a: ['set up'] },
      { t: 'gap', q: 'Don’t ___ your application until the last minute.', a: ['put off'] },
      { t: 'gap', q: 'I ___ until 2 a.m. finishing the report.', a: ['stayed up'] },
      { t: 'gap', q: 'What’s ___? Why is everyone shouting?', a: ['going on'] },
      { t: 'gap', q: 'A big company ___ the small family business.', a: ['took over'] },
      { t: 'gap', q: 'Please ___ the laptop when you leave the job.', a: ['give back'] },
      { t: 'gap', q: 'Robots may ___ many factory jobs.', a: ['take away'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Who is ___ charge of this department?', o: ['on', 'in', 'at'], a: 1 },
      { t: 'mcq', q: 'My dad is in Singapore ___ business.', o: ['in', 'for', 'on'], a: 2 },
      { t: 'mcq', q: 'The bus drivers are ___ strike today.', o: ['on', 'in', 'at'], a: 0 },
      { t: 'mcq', q: 'I’m going to apply ___ that job.', o: ['to', 'for', 'at'], a: 1 },
      { t: 'mcq', q: 'She works ___ a nurse.', o: ['like', 'as', 'for'], a: 1 },
      { t: 'mcq', q: 'He works ___ a big bank.', o: ['for', 'as', 'by'], a: 0 },
      { t: 'mcq', q: 'I’m fed up ___ working weekends.', o: ['of', 'with', 'about'], a: 1 },
      { t: 'mcq', q: 'Your salary depends ___ your experience.', o: ['of', 'in', 'on'], a: 2 },
      { t: 'mcq', q: 'She is responsible ___ training new staff.', o: ['of', 'for', 'about'], a: 1 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'Youth ___ is a big problem in many countries. (EMPLOY)', a: ['unemployment'] },
      { t: 'gap', q: 'He works as a shop ___. (ASSIST)', a: ['assistant'] },
      { t: 'gap', q: 'My older sister is so ___ – she always tells me what to do! (BOSS)', a: ['bossy'] },
      { t: 'gap', q: 'Please write your name and ___ on the form. (OCCUPY)', a: ['occupation'] },
      { t: 'gap', q: 'My grandfather is enjoying his ___. (RETIRE)', a: ['retirement'] },
      { t: 'gap', q: 'Health and ___ rules must be followed at work. (SAFE)', a: ['safety'] },
      { t: 'gap', q: 'Unfortunately, your application was ___. (SUCCEED)', a: ['unsuccessful'] },
      { t: 'gap', q: 'The ___ results will be announced tomorrow. (OFFICE)', a: ['official'] },
      { t: 'gap', q: 'Our company has over 500 ___. (EMPLOY)', a: ['employees'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['earn', 'a living'], ['sign', 'a contract'], ['go on', 'strike'], ['set', 'a goal'], ['pay', 'tax'], ['go for', 'an interview'], ['live in', 'poverty'], ['work under', 'pressure']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Đồng nghĩa với “call off”:', o: ['cancel', 'delay', 'start', 'happen'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “put off”:', o: ['postpone', 'remove', 'return', 'start'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “wealthy”:', o: ['rich', 'poor', 'famous', 'successful'], a: 1 },
      { t: 'mcq', q: 'Đồng nghĩa với “colleague”:', o: ['co-worker', 'boss', 'customer', 'leader'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “employer”:', o: ['employee', 'manager', 'boss', 'leader'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “previous”:', o: ['former', 'next', 'earlier', 'old'], a: 1 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi đã nộp đơn xin việc vào một công ty phần mềm.', ref: "I've applied for a job at a software company.", focus: 'apply for' },
      { t: 'tr', vi: 'Mục tiêu của tôi là tự mở công ty riêng trước 30 tuổi.', ref: 'My goal is to set up my own company before I turn 30.', focus: 'goal, set up' },
      { t: 'tr', vi: 'Cuộc họp bị hủy vì giám đốc bị ốm.', ref: 'The meeting was called off because the manager was ill.', focus: 'call off' },
      { t: 'tr', vi: 'Cô ấy chịu trách nhiệm đào tạo nhân viên mới.', ref: 'She is responsible for training new staff.', focus: 'responsible for, staff' },
      { t: 'tr', vi: 'Lương của bạn phụ thuộc vào kinh nghiệm.', ref: 'Your salary depends on your experience.', focus: 'depend on, salary' },
      { t: 'tr', vi: 'Tôi chán ngấy việc phải làm thêm giờ mỗi cuối tuần.', ref: "I'm fed up with working overtime every weekend.", focus: 'fed up with' },
      { t: 'tr', vi: 'Tỷ lệ thất nghiệp ở người trẻ đang tăng ở nhiều quốc gia.', ref: 'Youth unemployment is rising in many countries.', focus: 'unemployment (IELTS)' },
      { t: 'tr', vi: 'Bố tôi đang đi công tác ở Nhật Bản.', ref: 'My father is in Japan on business.', focus: 'on business' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you work or study? What do you like about it?' },
  { part: 'Part 1', q: 'What job did you want to do when you were a child?' },
  { part: 'Part 1', q: 'Would you prefer to work for a big company or a small one?' },
  { part: 'Part 1', q: 'Have you ever had a part-time job?' },
  { part: 'Part 2', q: 'Describe a job you would like to do in the future.', cue: ['what the job is', 'what skills or qualifications it requires', 'how you could get this job', 'and explain why you would like to do it'] },
  { part: 'Part 3', q: 'Is salary the most important factor when choosing a job?' },
  { part: 'Part 3', q: 'Why do some young people find it difficult to get a job?' },
  { part: 'Part 3', q: 'What are the advantages and disadvantages of working from home?' },
  { part: 'Part 3', q: 'Should people be allowed to retire whenever they want?' },
];

export default {
  id: 'b1-u27',
  book: 'b1',
  no: 27,
  title: 'Working and earning',
  titleVi: 'Công việc & thu nhập',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
