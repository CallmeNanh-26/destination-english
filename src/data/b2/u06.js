// B2 Unit 6 – Vocabulary: Science and technology (Destination B2).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u06-vocab.js';

const reading = [
  {
    title: 'A week without my phone',
    level: 'Dễ · ~200 từ',
    text: `Last month my class carried out an experiment: for one week, we turned off our smartphones and put them in a box in the classroom. Our teacher wanted to find out how much we really depended on them.

The first two days were terrible. I kept reaching for my phone without thinking. I didn't know what time it was, and I couldn't take photos or check the bus timetable. On average, we found that each of us usually picked up our phone more than eighty times a day!

By the middle of the week, though, things started to come on. I read a book for the first time in months, I talked to my family at dinner, and I slept much better. Some students even came up with new hobbies, like drawing or playing chess.

At the end of the experiment, we discussed the results. Most of us came to the conclusion that phones are useful but that we use them far too much. In fact, half the class decided to keep their phones switched off for an hour every evening. I'm one of them.`,
    items: [
      { t: 'mcq', q: 'What was the aim of the experiment?', o: ['to test new phones', 'to find out how much students depended on phones', 'to save money', 'to improve marks'], a: 1 },
      { t: 'tf', q: 'The first two days were easy.', a: 'F' },
      { t: 'gap', q: 'Students usually picked up their phones more than ___ times a day.', a: ['eighty', '80'] },
      { t: 'mcq', q: 'Which is NOT mentioned as a positive change?', o: ['reading a book', 'sleeping better', 'talking to family', 'getting better marks'], a: 3 },
      { t: 'mcq', q: 'What did half the class decide?', o: ['to sell their phones', 'to turn phones off for an hour every evening', 'to repeat the experiment', 'to buy new phones'], a: 1 },
    ],
  },
  {
    title: 'Accidental discoveries',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `We often imagine scientists carefully planning every experiment. In fact, some of the most important discoveries in history happened completely by accident.

In 1928, the Scottish scientist Alexander Fleming returned from holiday to find that mould had grown on one of his dishes of bacteria. Instead of throwing it away, he noticed that the bacteria around the mould had died. He had discovered penicillin, the world's first antibiotic, which has since saved millions of lives.

The microwave oven was also invented by chance. In 1945, an engineer called Percy Spencer was working with equipment used in radar when he realised that a chocolate bar in his pocket had melted. Curious, he tried the same thing with popcorn – and it popped. Within two years, the first microwave ovens were on sale, although they were nearly two metres tall!

Even something as simple as the sticky note came from a failure. A chemist was trying to develop a very strong glue but produced a weak one instead. For years nobody could think of a use for it, until a colleague came up with the idea of using it to mark pages in his book.

What do these stories have in common? Luck certainly played a part. But as Louis Pasteur once said, "chance favours the prepared mind". Each of these people noticed something unusual and, rather than ignoring it, asked why it had happened. That curiosity is perhaps the most important tool in science.`,
    items: [
      { t: 'gap', q: 'Fleming discovered penicillin in ___.', a: ['1928'] },
      { t: 'mcq', q: 'What did Fleming notice?', o: ['The mould had died.', 'The bacteria around the mould had died.', 'His dishes were broken.', 'His holiday was too long.'], a: 1 },
      { t: 'mcq', q: 'What melted in Percy Spencer’s pocket?', o: ['popcorn', 'a chocolate bar', 'a sweet', 'butter'], a: 1 },
      { t: 'tf', q: 'The first microwave ovens were small.', a: 'F' },
      { t: 'mcq', q: 'The sticky note came from…', o: ['a strong glue', 'a weak glue that failed', 'a book', 'a microwave'], a: 1 },
      { t: 'mcq', q: 'According to the writer, what do the discoverers have in common?', o: ['They were rich.', 'They noticed something unusual and asked why.', 'They worked together.', 'They were all Scottish.'], a: 1 },
    ],
  },
  {
    title: 'Electric motorbikes: the future of Vietnam’s roads?',
    level: 'Trung bình · ~320 từ',
    text: `Vietnam has one of the highest rates of motorbike ownership in the world, with an estimated 70 million bikes on its roads. Almost all of them have petrol engines, which contribute to the air pollution that regularly makes Hanoi and Ho Chi Minh City among the most polluted cities in Asia. Electric motorbikes are often presented as the solution – but how realistic is that?

There are clear advantages. Electric motors produce no exhaust fumes, they are almost silent, and they are cheap to run: charging a battery at home costs a fraction of the price of a tank of petrol. They also need less maintenance, as an electric motor has far fewer moving parts than an engine. For short trips around the city, which is how most people use their bikes, a single charge is usually enough.

However, there are still several obstacles. Electric models are more expensive to buy, and many people worry that the battery will break down after a few years and be costly to replace. Charging is another problem: millions of city residents live in narrow houses or apartments where it is difficult to plug in a bike overnight. Public charging stations and battery-swapping points are increasing, but they are not yet available everywhere.

It is also important to remember where the electricity comes from. If it is produced by burning coal, the environmental benefit is smaller than it first appears, although pollution is at least moved away from crowded streets.

The government has announced plans to restrict petrol motorbikes in central Hanoi in the coming years, and several Vietnamese companies have entered the market with new models. Experts believe that, as battery technology improves and prices fall, electric bikes will gradually become the normal choice. The question is not whether the change will take place, but how quickly.`,
    items: [
      { t: 'gap', q: 'There are an estimated ___ million motorbikes in Vietnam.', a: ['70', 'seventy'] },
      { t: 'mcq', q: 'Which is an advantage of electric motorbikes?', o: ['They are cheaper to buy.', 'They are cheap to run and almost silent.', 'They can travel very far.', 'They need petrol.'], a: 1 },
      { t: 'mcq', q: 'Why is charging a problem in cities?', o: ['Electricity is expensive.', 'Many people live where it is hard to plug in a bike.', 'Bikes cannot be charged at night.', 'Charging takes days.'], a: 1 },
      { t: 'tf', q: 'If electricity comes from coal, the environmental benefit is smaller.', a: 'T' },
      { t: 'tf', q: 'The writer thinks the change to electric bikes will never happen.', a: 'F' },
      { t: 'mcq', q: 'What will help electric bikes become normal, according to experts?', o: ['more petrol stations', 'better batteries and lower prices', 'bigger engines', 'fewer roads'], a: 1 },
    ],
  },
  {
    title: 'Can artificial intelligence be trusted?',
    level: 'Trung bình–Khó · ~370 từ',
    text: `Artificial intelligence has developed so quickly that it can be hard to keep up. AI systems can now write essays, translate languages, diagnose some diseases from medical scans and even help scientists to discover new medicines. For many people, AI has become a normal part of daily life, often without them realising it. Yet as we come to depend on these tools, a key question arises: how far can we trust them?

One problem is accuracy. AI chatbots are designed to produce answers that sound natural and confident, but they sometimes produce information that is completely false – a problem known as "hallucination". In one well-known case, a lawyer used a chatbot to prepare a court document, only to find that several of the legal cases it described did not exist. Experts therefore advise users to check important facts carefully rather than accept them as true.

A second concern is bias. AI systems learn from enormous amounts of data, and if that data reflects human prejudices, the system may repeat them. Some early face-recognition programs, for example, were far less accurate at recognising people with darker skin, because they had been trained mainly on photos of lighter-skinned faces.

There are also worries about how these systems reach their conclusions. Many modern AI models are so complex that even their designers cannot fully explain why they produce a particular answer. This matters when AI is used to make decisions about loans, jobs or medical treatment.

None of this means that AI should be rejected. Used carefully, it can save time, reduce human error and make expert knowledge available to millions of people. What it does mean is that people need to develop new skills: knowing what AI is good at, recognising its limits, and checking its results. Many schools are now introducing lessons on exactly this.

Perhaps the best approach is to treat AI like a very well-read but sometimes careless assistant – extremely useful, but not someone whose work you would submit without checking.`,
    items: [
      { t: 'mcq', q: 'What is “hallucination” in AI?', o: ['a fast answer', 'producing false information confidently', 'a type of image', 'a translation error only'], a: 1 },
      { t: 'mcq', q: 'What happened to the lawyer?', o: ['He won the case.', 'The chatbot invented legal cases.', 'He lost his job.', 'The chatbot refused to help.'], a: 1 },
      { t: 'mcq', q: 'Why were some face-recognition programs less accurate?', o: ['bad cameras', 'they were trained mainly on lighter-skinned faces', 'slow computers', 'too much data'], a: 1 },
      { t: 'tf', q: 'Designers can always explain why AI gives a particular answer.', a: 'F' },
      { t: 'tf', q: 'The writer thinks AI should be rejected.', a: 'F' },
      { t: 'mcq', q: 'How does the writer suggest treating AI?', o: ['like a perfect expert', 'like a useful but sometimes careless assistant', 'like a dangerous enemy', 'like a toy'], a: 1 },
    ],
  },
  {
    title: 'Has technology made us more or less connected?',
    level: 'Khó · ~420 từ · IELTS',
    text: `Never in human history has it been easier to communicate. A student in Hanoi can video-call a friend in Toronto for free, join an online course taught by a professor in London, and share photos with hundreds of people in seconds. On average, people in many countries now spend more than six hours a day online. Yet despite this, surveys repeatedly find that loneliness is increasing, particularly among young adults. This apparent contradiction has led many researchers to ask whether technology is bringing us together or pushing us apart.

Those who believe technology has made us more connected point to the obvious benefits. Families separated by migration can see each other every day. People with rare illnesses or unusual interests can find communities of others like them, which would have been impossible before the Internet. During the COVID-19 pandemic, video calls allowed millions of people to continue working, studying and staying in touch with loved ones when physical contact was not possible.

Critics, however, argue that online communication is often a poor substitute for the real thing. Messages and "likes" can create the feeling of contact without the depth of a face-to-face conversation. Psychologists have also found that heavy social media use is associated with anxiety and low self-esteem, as users constantly compare their own lives with the carefully edited images of others. Even when friends meet in person, phones on the table can reduce the quality of the conversation – a phenomenon some researchers call "phubbing".

The evidence suggests that what matters is not the amount of time we spend online but how we use technology. Studies have found that active use – messaging close friends, arranging to meet, taking part in discussions – tends to strengthen relationships, while passive use, such as endlessly scrolling through other people's posts, is more likely to leave people feeling isolated.

In conclusion, technology itself is neither good nor bad for human connection; it is a tool whose effects depend on the way it is used. Rather than blaming smartphones or abandoning them, individuals, schools and technology companies should encourage habits that use digital tools to support, rather than replace, real-life relationships.`,
    items: [
      { t: 'gap', q: 'People in many countries spend more than ___ hours a day online.', a: ['six', '6'] },
      { t: 'mcq', q: 'What is the “apparent contradiction”?', o: ['Technology is expensive but popular.', 'Communication is easier but loneliness is increasing.', 'People are online but bored.', 'Phones are small but powerful.'], a: 1 },
      { t: 'mcq', q: 'Which is a benefit mentioned by supporters?', o: ['people with rare illnesses can find communities', 'people spend less time online', 'phones are cheaper', 'fewer people migrate'], a: 0 },
      { t: 'mcq', q: 'What is “phubbing”?', o: ['posting photos', 'paying attention to your phone instead of the people with you', 'a type of video call', 'deleting social media'], a: 1 },
      { t: 'mcq', q: 'Which type of use tends to strengthen relationships?', o: ['passive scrolling', 'active use like messaging close friends', 'watching videos', 'using phones at dinner'], a: 1 },
      { t: 'tf', q: 'The writer concludes that technology is bad for relationships.', a: 'F' },
    ],
  },
];

const listening = [
  {
    title: 'Science museum announcement',
    level: '1 · Dễ · 1 giọng, chậm',
    desc: 'Thông báo ở bảo tàng khoa học.',
    rate: '-12%',
    voices: { N: 'en-US-JennyNeural' },
    script: [
      ['N', 'Welcome to the National Science Museum. Here is some information about today’s events.'],
      ['N', 'At eleven o’clock, there will be a live experiment in the Discovery Hall on the second floor. Our scientists will show you how to turn water into ice in less than a minute.'],
      ['N', 'At two thirty, you can take part in a robot-building workshop for children aged eight to fourteen. Places are limited to twenty, so please book at the information desk.'],
      ['N', 'Please note that the Space Gallery is closed today because some equipment has broken down.'],
      ['N', 'Photography is allowed everywhere in the museum, but please do not use flash. Thank you, and enjoy your visit.'],
    ],
    items: [
      { t: 'gap', q: 'The live experiment is on the ___ floor.', a: ['second', '2nd'] },
      { t: 'mcq', q: 'What will the scientists show?', o: ['how to make electricity', 'how to turn water into ice', 'how robots work', 'how rockets fly'], a: 1 },
      { t: 'gap', q: 'The workshop is limited to ___ children.', a: ['twenty', '20'] },
      { t: 'mcq', q: 'Why is the Space Gallery closed?', o: ['cleaning', 'equipment has broken down', 'a private event', 'it is new'], a: 1 },
      { t: 'tf', q: 'Visitors cannot take photos.', a: 'F' },
    ],
    dictation: ['Our scientists will show you how to turn water into ice.', 'Some equipment has broken down.'],
  },
  {
    title: 'Conversation: My laptop has broken down',
    level: '2 · Dễ · 2 giọng',
    desc: 'Nhờ bạn sửa máy tính hỏng.',
    rate: '-5%',
    voices: { Hoa: 'en-AU-NatashaNeural', Sam: 'en-GB-RyanNeural' },
    script: [
      ['Hoa', "Sam, can you help me? My laptop has broken down and my essay is due tomorrow!"],
      ['Sam', "Calm down. What happened exactly?"],
      ['Hoa', "It just turned off in the middle of my work, and now nothing happens when I press the button."],
      ['Sam', "Is it plugged in? Maybe the battery's just empty."],
      ['Hoa', "Of course it's plugged in! … Oh. Actually, the cable wasn't connected properly."],
      ['Sam', "There you go – the light's on now. Give it a minute to charge."],
      ['Hoa', "Thank goodness. But what if I've lost my essay?"],
      ['Sam', "Your documents are saved automatically to the cloud, aren't they? You should be able to find the latest version."],
      ['Hoa', "Yes, here it is! Sam, you're a genius."],
      ['Sam', "Not really. But maybe back up your work more often in future!"],
    ],
    items: [
      { t: 'mcq', q: 'Why is Hoa worried?', o: ['She lost her phone.', 'Her laptop stopped working and her essay is due.', 'She failed an exam.', 'Her Internet is slow.'], a: 1 },
      { t: 'mcq', q: 'What was the real problem?', o: ['a virus', 'the cable was not connected properly', 'a broken screen', 'no Internet'], a: 1 },
      { t: 'tf', q: 'Hoa lost her essay completely.', a: 'F' },
      { t: 'mcq', q: 'Where were her documents saved?', o: ['on a USB stick', 'in the cloud', 'on Sam’s computer', 'nowhere'], a: 1 },
      { t: 'mcq', q: 'What is Sam’s advice?', o: ['buy a new laptop', 'back up work more often', 'stop writing essays', 'use a phone'], a: 1 },
    ],
    dictation: ['My laptop has broken down.', 'Your documents are saved automatically to the cloud.'],
  },
  {
    title: 'Talk: How to come up with a great idea',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Một nhà sáng chế chia sẻ cách nảy ra ý tưởng.',
    rate: '+0%',
    voices: { Speaker: 'en-GB-ThomasNeural' },
    script: [
      ['Speaker', "People often ask me how I came up with my first invention – a solar-powered phone charger that folds into a book. The honest answer is: I didn't come up with it in a moment of genius."],
      ['Speaker', "I started with a problem. I was camping, and my phone battery kept dying. So I wrote down every possible solution – there were about forty – and then narrowed them down to three."],
      ['Speaker', "Then came the boring part: testing. I built more than a hundred prototypes. Most of them didn't come off. Some broke after a day, and one actually gave off smoke!"],
      ['Speaker', "My advice is this. First, fall in love with the problem, not with your idea. Second, fail quickly and cheaply. And third, talk to real users. The people who will use your product often know more than you do."],
      ['Speaker', "Inventing isn't magic. It's a method – and anyone can learn it."],
    ],
    items: [
      { t: 'mcq', q: 'What was the speaker’s first invention?', o: ['a camping tent', 'a solar-powered phone charger', 'a smartphone', 'a book light'], a: 1 },
      { t: 'gap', q: 'He wrote down about ___ possible solutions.', a: ['forty', '40'] },
      { t: 'mcq', q: 'How many prototypes did he build?', o: ['about ten', 'about forty', 'more than a hundred', 'three'], a: 2 },
      { t: 'mcq', q: 'What happened to one prototype?', o: ['It exploded.', 'It gave off smoke.', 'It was stolen.', 'It won an award.'], a: 1 },
      { t: 'mcq', q: 'Which is NOT part of his advice?', o: ['fall in love with the problem', 'fail quickly and cheaply', 'talk to real users', 'keep your idea secret'], a: 3 },
    ],
    dictation: ['I started with a problem.', "Inventing isn't magic. It's a method."],
  },
  {
    title: 'Radio interview: Robots in hospitals',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn bác sĩ về robot phẫu thuật.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', 'Dr Lam': 'en-US-GuyNeural' },
    script: [
      ['Presenter', "Robots are now being used in operating theatres around the world. Dr Peter Lam is a surgeon who has carried out more than five hundred robotic operations. Dr Lam, does the robot do the operation?"],
      ['Dr Lam', "No – that's a common misunderstanding. The surgeon controls the robot from a console a few metres away. The robot simply makes our movements smaller and more accurate."],
      ['Presenter', 'So what are the advantages?'],
      ['Dr Lam', "The cuts are much smaller, so patients lose less blood and recover faster. On average, my patients leave hospital two or three days earlier than with traditional surgery."],
      ['Presenter', 'And the disadvantages?'],
      ['Dr Lam', "Cost, mainly. A surgical robot costs around two million dollars, plus maintenance. And surgeons need months of training to use it properly."],
      ['Presenter', 'Will robots ever operate on their own?'],
      ['Dr Lam', "Researchers are working on it, and some simple tasks can already be automated. But I'd be surprised if a robot carried out a full operation without a surgeon in the next twenty years. Medicine is about judgement, not just movement."],
    ],
    items: [
      { t: 'gap', q: 'Dr Lam has carried out more than ___ robotic operations.', a: ['five hundred', '500'] },
      { t: 'tf', q: 'The robot carries out the operation by itself.', a: 'F' },
      { t: 'mcq', q: 'Why do patients recover faster?', o: ['better food', 'smaller cuts and less blood loss', 'shorter operations only', 'stronger medicine'], a: 1 },
      { t: 'gap', q: 'A surgical robot costs around ___ million dollars.', a: ['two', '2'] },
      { t: 'mcq', q: 'What does Dr Lam think about fully automatic surgery?', o: ['It will happen next year.', 'He would be surprised if it happened in the next twenty years.', 'It already exists.', 'It is illegal.'], a: 1 },
    ],
    dictation: ['The robot makes our movements smaller and more accurate.', 'Medicine is about judgement, not just movement.'],
  },
  {
    title: 'Discussion: Should governments fund space exploration?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3 về chi tiêu cho khám phá vũ trụ.',
    rate: '+5%',
    voices: { Host: 'en-AU-WilliamNeural', Linh: 'en-GB-LibbyNeural', Tom: 'en-US-GuyNeural' },
    script: [
      ['Host', "Countries spend billions on space programmes every year. Linh, is that money well spent?"],
      ['Linh', "I'm not convinced. There are millions of people without clean water or basic healthcare. I find it hard to justify sending people to Mars while we haven't solved problems here on Earth."],
      ['Tom', "I understand that, but space research has given us technologies we use every day – satellite navigation, weather forecasting, even better water filters. Many of them came from space programmes."],
      ['Linh', "That's true, but couldn't we have developed those technologies more cheaply by researching them directly?"],
      ['Tom', "Possibly. But some discoveries only happen when you aim for something extremely difficult. And satellites are now essential for monitoring climate change."],
      ['Linh', "I'd agree that satellites are valuable. My doubts are about human missions, which are far more expensive than robots."],
      ['Host', 'So is there a middle ground?'],
      ['Tom', "Perhaps governments should focus on science and satellites, and let private companies pay for the more ambitious human missions."],
      ['Linh', "That sounds reasonable – as long as the public money goes to research that benefits everyone."],
    ],
    items: [
      { t: 'mcq', q: 'What is Linh’s main concern?', o: ['Space is dangerous.', 'Money should go to problems on Earth first.', 'Satellites are useless.', 'Private companies are greedy.'], a: 1 },
      { t: 'mcq', q: 'Which technology does Tom NOT mention?', o: ['satellite navigation', 'weather forecasting', 'water filters', 'smartphones'], a: 3 },
      { t: 'tf', q: 'Linh agrees that satellites are valuable.', a: 'T' },
      { t: 'mcq', q: 'What are Linh’s doubts mainly about?', o: ['satellites', 'human missions', 'robots', 'climate research'], a: 1 },
      { t: 'mcq', q: 'What compromise does Tom suggest?', o: ['stop all space research', 'governments fund science and satellites, private companies fund human missions', 'only send robots to Mars', 'double the budget'], a: 1 },
    ],
    dictation: ['Satellites are now essential for monitoring climate change.', 'Human missions are far more expensive than robots.'],
  },
];

const exercises = [
  {
    title: 'A. Từ dễ nhầm – chọn từ đúng',
    instruction: 'Chọn từ đúng.',
    items: [
      { t: 'mcq', q: '___ intelligence is changing many industries.', o: ['Artificial', 'False'], a: 0 },
      { t: 'mcq', q: 'The measurements must be completely ___.', o: ['accurate', 'true'], a: 0 },
      { t: 'mcq', q: 'Who ___ the light bulb?', o: ['invented', 'discovered'], a: 0 },
      { t: 'mcq', q: 'Scientists have ___ a new species of frog.', o: ['discovered', 'invented'], a: 0 },
      { t: 'mcq', q: 'There has been a lot of ___ into climate change.', o: ['research', 'experiment'], a: 0 },
      { t: 'mcq', q: 'We’ve made great ___ this term.', o: ['progress', 'development'], a: 0 },
      { t: 'mcq', q: 'Please switch off all ___ devices.', o: ['electronic', 'electric'], a: 0 },
      { t: 'mcq', q: 'The car ___ won’t start.', o: ['engine', 'machine'], a: 0 },
      { t: 'mcq', q: 'She won an ___ for her research.', o: ['award', 'reward'], a: 0 },
      { t: 'mcq', q: 'The conference will ___ in Da Nang next month.', o: ['take place', 'occur'], a: 0 },
      { t: 'mcq', q: 'Scientists ___ that there are about 8.7 million species on Earth.', o: ['estimate', 'calculate'], a: 0 },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: break down, carry out, come off, come up with, cut off, find out, give off, narrow down, plug in, put through, turn into, work out (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'My laptop ___ the night before the deadline.', a: ['broke down'] },
      { t: 'gap', q: 'The tests were ___ in a laboratory.', a: ['carried out'] },
      { t: 'gap', q: 'She ___ a brilliant idea for the project.', a: ['came up with'] },
      { t: 'gap', q: 'The storm ___ the electricity for two days.', a: ['cut off'] },
      { t: 'gap', q: 'Scientists are trying to ___ why bees are dying.', a: ['find out'] },
      { t: 'gap', q: 'These chemicals ___ a strange smell.', a: ['give off'] },
      { t: 'gap', q: 'We’ve ___ the possible causes to three.', a: ['narrowed down'] },
      { t: 'gap', q: 'Is the printer ___? It isn’t working.', a: ['plugged in'] },
      { t: 'gap', q: 'Could you ___ to the IT department? (nối máy cho tôi)', a: ['put me through'] },
      { t: 'gap', q: 'The old factory was ___ a science museum.', a: ['turned into'] },
      { t: 'gap', q: 'I can’t ___ how to use this app.', a: ['work out'] },
      { t: 'gap', q: 'The plan was risky, but it ___ in the end.', a: ['came off'] },
    ],
  },
  {
    title: 'C. Cụm từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: '___ average, teenagers spend seven hours a day online.', o: ['On', 'In', 'At'], a: 0 },
      { t: 'mcq', q: 'They are carrying out research ___ renewable energy.', o: ['into', 'for', 'at'], a: 0 },
      { t: 'mcq', q: 'The telescope ___ a photo of a distant galaxy.', o: ['took', 'made', 'did'], a: 0 },
      { t: 'mcq', q: 'We discussed ___ the results with our teacher.', o: ['—', 'about', 'of'], a: 0 },
      { t: 'mcq', q: 'Can you explain this formula ___ me?', o: ['to', 'for', '—'], a: 0 },
      { t: 'mcq', q: 'Did you manage ___ your phone?', o: ['to fix', 'fixing'], a: 0 },
      { t: 'mcq', q: 'The new technology resulted ___ lower costs.', o: ['in', 'from', 'of'], a: 0 },
      { t: 'mcq', q: 'The heat caused the metal ___.', o: ['to expand', 'expanding', 'expand'], a: 0 },
      { t: 'mcq', q: 'I’m looking forward to ___ the new VR headset.', o: ['trying', 'try'], a: 0 },
      { t: 'mcq', q: '___ conclusion, technology brings more benefits than problems.', o: ['In', 'On', 'At'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: '___, the new phone will have no buttons. (APPEAR)', a: ['Apparently', 'apparently'] },
      { t: 'gap', q: 'The ___ of penicillin saved millions of lives. (DISCOVER)', a: ['discovery'] },
      { t: 'gap', q: 'There is no simple ___ for the result. (EXPLAIN)', a: ['explanation'] },
      { t: 'gap', q: 'More ___, the technology is cheap. (IMPORTANT)', a: ['importantly'] },
      { t: 'gap', q: 'I’m taking an ___ course in programming. (INTRODUCE)', a: ['introductory'] },
      { t: 'gap', q: 'The printing press was a great ___. (INVENT)', a: ['invention'] },
      { t: 'gap', q: 'Careful ___ is the basis of science. (OBSERVE)', a: ['observation'] },
      { t: 'gap', q: 'Social media can have ___ effects on teenagers. (PSYCHOLOGY)', a: ['psychological'] },
      { t: 'gap', q: 'AI is a ___ technology. (REVOLUTION)', a: ['revolutionary'] },
      { t: 'gap', q: 'There is no ___ evidence for that claim. (SCIENCE)', a: ['scientific'] },
      { t: 'gap', q: '___ progress has been remarkably fast. (TECHNOLOGY)', a: ['Technological', 'technological'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['carry out', 'an experiment'], ['make', 'progress'], ['artificial', 'intelligence'], ['come to', 'a conclusion'], ['take', 'a photo'], ['make', 'a phone call'], ['natural', 'resources'], ['win', 'an award']] },
    ],
  },
  {
    title: 'F. Viết lại câu',
    instruction: 'Viết lại câu dùng từ trong ngoặc, giữ nguyên nghĩa.',
    items: [
      { t: 'fix', q: 'The machine stopped working. (broke)', a: ['The machine broke down.'] },
      { t: 'fix', q: 'She thought of a great solution. (came)', a: ['She came up with a great solution.'] },
      { t: 'fix', q: 'Because of the power cut, the factory closed. (result)', a: ['As a result of the power cut, the factory closed.'] },
      { t: 'fix', q: 'It is impossible for me to work without the Internet. (find)', a: ['I find it impossible to work without the Internet.'] },
      { t: 'fix', q: 'Actually, the idea is very old. (fact)', a: ['In fact, the idea is very old.', 'As a matter of fact, the idea is very old.'] },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Trí tuệ nhân tạo đang thay đổi cách chúng ta làm việc và học tập.', ref: 'Artificial intelligence is changing the way we work and study.', focus: 'artificial intelligence' },
      { t: 'tr', vi: 'Các nhà khoa học đang tiến hành nghiên cứu về năng lượng tái tạo.', ref: 'Scientists are carrying out research into renewable energy.', focus: 'carry out research into' },
      { t: 'tr', vi: 'Máy tính của tôi bị hỏng đúng vào đêm trước hạn nộp bài.', ref: 'My computer broke down the night before the deadline.', focus: 'break down' },
      { t: 'tr', vi: 'Trung bình, thanh thiếu niên dành hơn sáu tiếng mỗi ngày trên mạng.', ref: 'On average, teenagers spend more than six hours a day online.', focus: 'on average (IELTS Task 1)' },
      { t: 'tr', vi: 'Ai là người đã phát minh ra điện thoại?', ref: 'Who invented the telephone?', focus: 'invent ≠ discover' },
      { t: 'tr', vi: 'Công nghệ đã giúp mọi người dễ dàng giữ liên lạc với gia đình ở nước ngoài.', ref: 'Technology has made it easier for people to keep in touch with their families abroad.', focus: 'IELTS Writing Task 2' },
      { t: 'tr', vi: 'Kết luận lại, công nghệ không tốt cũng không xấu; điều quan trọng là cách chúng ta sử dụng nó.', ref: 'In conclusion, technology is neither good nor bad; what matters is how we use it.', focus: 'in conclusion (IELTS)' },
      { t: 'tr', vi: 'Chúng tôi đã thu hẹp các lựa chọn xuống còn hai.', ref: "We've narrowed the options down to two.", focus: 'narrow down' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'How often do you use your phone?' },
  { part: 'Part 1', q: 'Were you interested in science at school?' },
  { part: 'Part 1', q: 'What piece of technology could you not live without?' },
  { part: 'Part 1', q: 'Do you use AI tools? What for?' },
  { part: 'Part 2', q: 'Describe a piece of technology that has changed your life.', cue: ['what it is', 'when you started using it', 'how you use it', 'and explain how it has changed your life'] },
  { part: 'Part 3', q: 'Has technology made people more or less connected?' },
  { part: 'Part 3', q: 'Should governments spend money on space exploration?' },
  { part: 'Part 3', q: 'Can artificial intelligence be trusted to make important decisions?' },
  { part: 'Part 3', q: 'How will technology change the way people work in the future?' },
];

export default {
  id: 'b2-u06',
  book: 'b2',
  no: 6,
  title: 'Science and technology',
  titleVi: 'Khoa học & công nghệ',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
