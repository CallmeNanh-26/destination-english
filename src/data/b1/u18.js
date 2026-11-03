// Unit 18 – Vocabulary: Inventions and discoveries (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u18-vocab.js';

const reading = [
  {
    title: 'Happy accidents',
    level: 'Dễ · ~180 từ',
    text: `Many famous inventions were not planned. They were discovered by chance.

In 1928, a scientist called Alexander Fleming went on holiday and left some dishes in his laboratory. When he came back, he found that a strange green mould had grown on one of them. The mould had killed the bacteria around it. Fleming had discovered penicillin, the first antibiotic. It has saved millions of lives.

In 1945, an engineer named Percy Spencer was working with radar equipment when he noticed that the chocolate bar in his pocket had melted. He did an experiment with some popcorn, and it popped! This led to the invention of the microwave oven.

The sticky notes that you see on office walls were also an accident. A scientist was trying to make a very strong glue, but he made a weak one instead. A few years later, his colleague came across it and used it to stick small pieces of paper in his songbook.

These stories show that mistakes are not always bad. Sometimes they result in great discoveries.`,
    items: [
      { t: 'mcq', q: 'What did Fleming find when he came back from holiday?', o: ['a broken microscope', 'mould on one of his dishes', 'a melted chocolate bar', 'a new type of glue'], a: 1 },
      { t: 'gap', q: 'Fleming discovered penicillin in ___.', a: ['1928'] },
      { t: 'mcq', q: 'What made Percy Spencer notice something strange?', o: ['popcorn', 'a melted chocolate bar', 'a hot cup of tea', 'his radio'], a: 1 },
      { t: 'tf', q: 'The scientist who made sticky notes was trying to make a very strong glue.', a: 'T' },
      { t: 'tf', q: 'The weak glue was used immediately.', a: 'F', ex: '“A few years later…”' },
      { t: 'mcq', q: 'What is the main message of the text?', o: ['Scientists should not take holidays.', 'Mistakes can lead to great discoveries.', 'Microwaves are dangerous.', 'Glue is very important.'], a: 1 },
    ],
  },
  {
    title: 'Five gadgets that changed our lives',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `Technology moves so fast that it is easy to forget how different life was just a few decades ago. Here are five gadgets that have completely changed the way we live.

The smartphone. Today, more than six billion people own one. In a single device we have a camera, a map, a music player, a bank and a library. It is hard to remember that the first iPhone only appeared in 2007.

The laptop. Before laptops, computers were large machines that stayed on a desk. Now people can work, study and watch films almost anywhere – on a train, in a café or in bed.

The digital camera. In the past, people bought film, took 24 or 36 photos and then waited days for them to be developed. Digital cameras made photography instant and cheap, and now most of us carry one in our phone.

GPS. Paper maps and asking strangers for directions are now rare. Satellite navigation tells us exactly where we are and the fastest way to reach our destination.

The smartwatch. It measures our steps, our heart rate and even the quality of our sleep. For many people, it has become a personal health assistant.

Of course, these gadgets also have disadvantages. Many people spend too much time looking at screens, and some experts worry that we are losing skills such as reading maps or remembering phone numbers. But few of us would want to go back to life without them.`,
    items: [
      { t: 'gap', q: 'The first iPhone appeared in ___.', a: ['2007'] },
      { t: 'tf', q: 'More than six billion people own a smartphone.', a: 'T' },
      { t: 'mcq', q: 'What was photography like before digital cameras?', o: ['instant and cheap', 'you waited days for photos to be developed', 'impossible', 'only for professionals'], a: 1 },
      { t: 'mcq', q: 'What does GPS help us do?', o: ['take photos', 'find where we are and the fastest route', 'measure our heart rate', 'make phone calls'], a: 1 },
      { t: 'mcq', q: 'Which is NOT mentioned as something a smartwatch measures?', o: ['steps', 'heart rate', 'sleep quality', 'blood type'], a: 3 },
      { t: 'tf', q: 'The writer thinks these gadgets have no disadvantages.', a: 'F' },
    ],
  },
  {
    title: 'The inventor next door',
    level: 'Trung bình · ~320 từ',
    text: `When people think of inventors, they often imagine scientists in white coats working in expensive laboratories. But some of the most useful inventions come from ordinary people trying to solve everyday problems.

Take Lan, a 16-year-old student from Can Tho. Every rainy season, the streets near her home flooded, and her grandmother found it difficult to know when the water was rising during the night. Lan decided to do something about it. Using cheap parts and a free online course in programming, she built a small sensor that measures the water level and sends a message to the family's phones when it reaches a dangerous height.

"At first it didn't work at all," she laughs. "The sensor broke down every time it rained, because the water got inside. I had to try lots of different covers before I found one that worked. In the end, I used an old plastic food box."

Her invention won first prize in a national science competition last year, and a local company is now helping her produce it at a low cost. The device costs less than 300,000 dong – a fraction of the price of commercial flood alarms.

Lan's story is not unique. Around the world, young people are using affordable technology such as small computers, 3D printers and free software to create solutions for their communities. Some design water filters for villages without clean water; others build apps that connect farmers directly with customers.

Experts say that schools can encourage this kind of creativity by giving students time to experiment and fail. "The most important skill for an inventor isn't knowing the answer," says engineering teacher Mr Quang. "It's being curious enough to ask the question – and patient enough to keep trying."`,
    items: [
      { t: 'mcq', q: 'What problem did Lan want to solve?', o: ['traffic jams', 'flooding near her home at night', 'slow internet', 'expensive phones'], a: 1 },
      { t: 'mcq', q: 'How did Lan learn programming?', o: ['at university', 'from a free online course', 'from her grandmother', 'from a company'], a: 1 },
      { t: 'tf', q: 'Lan’s sensor worked perfectly the first time.', a: 'F' },
      { t: 'gap', q: 'In the end, Lan used an old plastic ___ box as a cover.', a: ['food'] },
      { t: 'mcq', q: 'How much does the device cost?', o: ['more than 3 million dong', 'less than 300,000 dong', 'about 1 million dong', 'it is free'], a: 1 },
      { t: 'tf', q: 'Lan is the only young person using technology to help her community.', a: 'F', ex: '“Lan’s story is not unique.”' },
      { t: 'mcq', q: 'According to Mr Quang, the most important skill for an inventor is…', o: ['knowing the answer', 'being curious and patient', 'having money', 'being good at maths'], a: 1 },
    ],
  },
  {
    title: 'Will robots take our jobs?',
    level: 'Trung bình–Khó · ~370 từ',
    text: `Every major new technology has created fears about jobs. When automatic weaving machines appeared in England in the early 1800s, groups of workers broke into factories and destroyed them, believing the machines would leave them unemployed. Two centuries later, artificial intelligence (AI) has created similar worries. Will robots and computer programs soon be doing our jobs?

Some research suggests the effect could be large. One well-known study estimated that almost half of all jobs in some countries could be automated within the next few decades. Jobs that involve repeating the same tasks – such as checking documents, working on production lines or answering simple customer questions – are especially at risk. Many supermarkets have already replaced cashiers with self-service machines, and AI programs can now write basic reports, translate texts and even help doctors examine X-rays.

However, history suggests that the picture is more complicated. Although technology destroys some jobs, it also creates new ones that nobody could have imagined before. Fifty years ago, there were no app designers, social media managers or data scientists. Machines also tend to take over parts of jobs rather than whole jobs. A doctor who uses AI to examine scans can spend more time talking to patients; an accountant with good software can give better advice instead of adding up numbers all day.

What seems certain is that the skills employers value are changing. Experts point out that the tasks computers find most difficult are those that require creativity, empathy, complex communication and the ability to deal with sudden, unexpected situations. These are human strengths. As a result, many believe that education should focus less on memorising facts – which machines can do instantly – and more on problem-solving, teamwork and learning how to learn.

There are also important questions for governments. If some workers lose their jobs, how will they retrain? Who will benefit from the profits that automation creates? And how can societies make sure that new technology reduces inequality rather than increasing it?

In the end, whether AI becomes a threat or an opportunity may depend less on the technology itself than on the decisions people make about how to use it.`,
    items: [
      { t: 'mcq', q: 'Why did workers destroy machines in England in the early 1800s?', o: ['The machines were dangerous.', 'They feared losing their jobs.', 'The machines were too expensive.', 'The government told them to.'], a: 1 },
      { t: 'mcq', q: 'Which jobs are especially at risk from automation?', o: ['creative jobs', 'jobs involving repeated tasks', 'jobs requiring empathy', 'management jobs'], a: 1 },
      { t: 'tf', q: 'AI can help doctors examine X-rays.', a: 'T' },
      { t: 'mcq', q: 'According to the writer, history suggests that technology…', o: ['only destroys jobs', 'destroys some jobs but also creates new ones', 'never affects jobs', 'creates only well-paid jobs'], a: 1 },
      { t: 'tf', q: 'Machines usually take over whole jobs rather than parts of them.', a: 'F' },
      { t: 'mcq', q: 'Which skill do computers find most difficult?', o: ['memorising facts', 'calculating', 'empathy and creativity', 'translating'], a: 2 },
      { t: 'mcq', q: 'What does the writer suggest education should focus on?', o: ['memorising facts', 'problem-solving and learning how to learn', 'only computer science', 'handwriting'], a: 1 },
      { t: 'mcq', q: 'The final paragraph suggests the future of AI depends mainly on…', o: ['the technology itself', 'human decisions about how to use it', 'robots', 'luck'], a: 1 },
    ],
  },
  {
    title: 'The plastic problem: a wonder material gone wrong',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `When plastic was first produced on a large scale in the 1950s, it seemed like a miracle. It was cheap, light, strong and could be made into almost any shape. It replaced glass bottles, metal cans and paper bags, and it made modern medicine, cars and computers possible. Few people imagined that this wonder material would one day become one of the world's biggest environmental problems.

The difficulty lies in the same quality that made plastic so useful: it lasts. A plastic bottle may take 450 years to break down, and some types never disappear completely. Instead, they slowly break into smaller and smaller pieces called microplastics. Scientists have found these tiny particles everywhere they have looked – at the top of Mount Everest, at the bottom of the deepest ocean, in the food we eat and even in human blood. The full effect on our health is not yet known, but research is continuing.

Every year, around eight million tonnes of plastic enter the oceans. Sea birds, turtles and fish mistake it for food, and many die as a result. In some areas of the Pacific, floating rubbish forms enormous "garbage patches" that can be seen from ships.

Recycling was once seen as the solution, but the reality is disappointing. Only about nine per cent of all plastic ever made has been recycled. Many types are difficult or expensive to recycle, and much of the plastic that people carefully separate is shipped to other countries, where it is often burnt or buried.

So what can be done? Inventors and scientists are working on several solutions. Some have developed plastics made from plants, such as corn or seaweed, which break down much more quickly. Others have discovered bacteria and enzymes that can "eat" certain types of plastic. One young Dutch inventor designed a system of floating barriers to collect rubbish from the ocean, and it has already removed tonnes of plastic.

Most experts agree, however, that technology alone will not solve the problem. Governments in many countries have banned single-use plastic bags, straws and cutlery, and some charge customers for every bag they use. Individuals can make a difference too, by carrying reusable bottles and bags, choosing products with less packaging and refusing items they do not need.

The story of plastic is a reminder that every invention has consequences, some of which may only become clear decades later. The challenge for the next generation of inventors is not only to create useful things, but to think carefully about what happens to them when we throw them away.`,
    items: [
      { t: 'mcq', q: 'Why did plastic seem like a miracle in the 1950s?', o: ['It was natural.', 'It was cheap, light, strong and flexible.', 'It was easy to recycle.', 'It disappeared quickly.'], a: 1 },
      { t: 'gap', q: 'A plastic bottle may take ___ years to break down.', a: ['450', 'four hundred and fifty'] },
      { t: 'tf', q: 'Microplastics have been found in human blood.', a: 'T' },
      { t: 'gap', q: 'About ___ million tonnes of plastic enter the oceans every year.', a: ['eight', '8'] },
      { t: 'mcq', q: 'What percentage of plastic ever made has been recycled?', o: ['about 9%', 'about 50%', 'about 90%', 'none'], a: 0 },
      { t: 'mcq', q: 'Which solution is NOT mentioned?', o: ['plastics made from plants', 'bacteria that eat plastic', 'floating barriers', 'sending plastic into space'], a: 3 },
      { t: 'tf', q: 'Experts believe technology alone can solve the plastic problem.', a: 'F' },
      { t: 'mcq', q: 'What is the main lesson of the final paragraph?', o: ['Plastic should be banned completely.', 'Inventors should consider the long-term consequences of their inventions.', 'Recycling always works.', 'The oceans are clean.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Museum audio guide',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Hướng dẫn âm thanh tại bảo tàng khoa học. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-RyanNeural' },
    script: [
      ['N', 'Welcome to the Science Museum. This is room three: Inventions that Changed the World.'],
      ['N', 'On your left, you can see one of the first telephones. It was invented by Alexander Graham Bell in eighteen seventy-six.'],
      ['N', 'In front of you is an early computer. It was so large that it filled a whole room, and it weighed more than twenty-seven tonnes.'],
      ['N', 'On your right is the first mobile phone that was sold to the public. It was very expensive and the battery lasted only thirty minutes.'],
      ['N', 'Please do not touch the objects. If you would like to try some experiments yourself, visit the activity room on the ground floor.'],
    ],
    items: [
      { t: 'gap', q: 'This is room number ___.', a: ['3', 'three'] },
      { t: 'gap', q: 'Bell invented the telephone in ___.', a: ['1876'] },
      { t: 'gap', q: 'The early computer weighed more than ___ tonnes.', a: ['27', 'twenty-seven', 'twenty seven'] },
      { t: 'gap', q: 'The first mobile phone battery lasted only ___ minutes.', a: ['30', 'thirty'] },
      { t: 'mcq', q: 'Where is the activity room?', o: ['on the first floor', 'on the ground floor', 'in room three', 'outside'], a: 1 },
    ],
    dictation: ['It was invented by Alexander Graham Bell.', 'Please do not touch the objects.', 'The battery lasted only thirty minutes.'],
  },
  {
    title: 'Talk: My favourite gadget',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một người kể về món đồ công nghệ yêu thích.',
    rate: '-5%',
    voices: { N: 'en-US-GuyNeural' },
    script: [
      ['N', "My favourite gadget is my e-reader. I got it as a birthday present three years ago, and I use it every single day."],
      ['N', "Before I had it, I always carried two or three heavy books in my bag. Now I can carry more than a thousand books in something that weighs less than two hundred grams."],
      ['N', "The screen is different from a phone screen. It doesn't hurt my eyes, even when I read for hours, and I can read it easily in bright sunlight."],
      ['N', "Another great thing is the dictionary. If I come across a word I don't know, I just touch it and the meaning appears. That's really useful when I read in English."],
      ['N', "The battery is amazing too. I only need to charge it about once a month. The only problem is that I can't lend books to my friends!"],
    ],
    items: [
      { t: 'mcq', q: 'What is his favourite gadget?', o: ['a smartphone', 'an e-reader', 'a laptop', 'a smartwatch'], a: 1 },
      { t: 'gap', q: 'He got it ___ years ago.', a: ['three', '3'] },
      { t: 'mcq', q: 'How many books can he carry on it?', o: ['about 100', 'more than 1,000', 'two or three', '200'], a: 1 },
      { t: 'tf', q: 'The screen hurts his eyes after a long time.', a: 'F' },
      { t: 'mcq', q: 'What does the dictionary function help with?', o: ['finding books', 'checking unknown words', 'charging the battery', 'lending books'], a: 1 },
      { t: 'mcq', q: 'How often does he charge it?', o: ['every day', 'once a week', 'about once a month', 'never'], a: 2 },
    ],
  },
  {
    title: 'Conversation: The printer’s broken again',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Hai đồng nghiệp xử lý máy in bị hỏng trước buổi họp.',
    rate: '+0%',
    voices: { Sophie: 'en-GB-LibbyNeural', Mark: 'en-GB-RyanNeural' },
    script: [
      ['Sophie', "Mark, have you got a minute? The printer's broken down again, and I need to print the report for the meeting at ten."],
      ['Mark', "Again? That's the third time this week. What's it doing?"],
      ['Sophie', "It just shows an error message on the screen. Something about paper."],
      ['Mark', "Have you tried turning it off and on again?"],
      ['Sophie', "Of course I have! Twice."],
      ['Mark', "OK, let me look. Ah, there's a piece of paper stuck inside. Hold on… got it."],
      ['Sophie', "Brilliant! Is it working now?"],
      ['Mark', "Let's see. Hmm, it says the ink is low. It might print a few pages, but not the whole report."],
      ['Sophie', "The report's forty pages long! What am I going to do?"],
      ['Mark', "Why don't you send it to everyone by email instead? Most people read on their laptops in meetings anyway. It saves paper too."],
      ['Sophie', "That's a good idea. I'll just print one copy of the first page for the manager."],
      ['Mark', "Perfect. And I'll ask the office to order a new printer. This one is older than me!"],
    ],
    items: [
      { t: 'gap', q: 'The meeting is at ___ o’clock.', a: ['10', 'ten'] },
      { t: 'mcq', q: 'How many times has the printer broken down this week?', o: ['once', 'twice', 'three times', 'four times'], a: 2 },
      { t: 'mcq', q: 'What was the first problem?', o: ['no ink', 'paper stuck inside', 'no electricity', 'a computer virus'], a: 1 },
      { t: 'gap', q: 'The report is ___ pages long.', a: ['40', 'forty'] },
      { t: 'mcq', q: 'What does Mark suggest?', o: ['buying ink', 'sending the report by email', 'cancelling the meeting', 'using another office'], a: 1 },
      { t: 'tf', q: 'Sophie will print one page for the manager.', a: 'T' },
    ],
    dictation: ["The printer's broken down again.", 'Have you tried turning it off and on again?'],
  },
  {
    title: 'Radio interview: A young inventor',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một nhà phát minh trẻ về chiếc ứng dụng giúp người khiếm thị.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Jack: 'en-AU-WilliamNeural' },
    script: [
      ['Presenter', "My guest today is nineteen-year-old Jack Turner, who has invented an app that helps blind people find their way around cities. Jack, where did the idea come from?"],
      ['Jack', "My grandfather lost his sight a few years ago. He'd always been very independent, and suddenly he couldn't go to the shops by himself. I wanted to find a way to help him."],
      ['Presenter', "So how does the app work?"],
      ['Jack', "It uses the phone's camera and artificial intelligence to recognise things around you, like doors, steps, traffic lights and bus numbers, and it describes them out loud through headphones. It also connects to GPS, so it can give directions."],
      ['Presenter', "Was it difficult to build?"],
      ['Jack', "Extremely. I taught myself programming from online videos, and the first version was terrible. It thought my grandfather's cat was a chair! It took me about eighteen months of testing before it was reliable."],
      ['Presenter', "And your grandfather was involved in the testing?"],
      ['Jack', "He was my most important tester. He gave me honest feedback every day. A lot of the best ideas came from him, for example making the voice speak more slowly in busy places."],
      ['Presenter', "What happens next?"],
      ['Jack', "The app is free, and over fifty thousand people have downloaded it so far. I'm starting a degree in engineering in September, and I'd like to add more languages, including Vietnamese, because a lot of users have asked for it."],
      ['Presenter', "Jack Turner, thank you."],
    ],
    items: [
      { t: 'gap', q: 'Jack is ___ years old.', a: ['19', 'nineteen'] },
      { t: 'mcq', q: 'Why did Jack create the app?', o: ['for a school project', 'to help his grandfather who lost his sight', 'to make money', 'for a competition'], a: 1 },
      { t: 'mcq', q: 'Which of these can the app recognise?', o: ['faces only', 'doors, steps, traffic lights and bus numbers', 'only text', 'only colours'], a: 1 },
      { t: 'tf', q: 'The first version of the app worked well.', a: 'F', ex: 'Nó nhận nhầm con mèo thành cái ghế.' },
      { t: 'gap', q: 'It took about ___ months of testing.', a: ['18', 'eighteen'] },
      { t: 'mcq', q: 'What idea came from his grandfather?', o: ['making it free', 'making the voice speak more slowly in busy places', 'adding a camera', 'using GPS'], a: 1 },
      { t: 'gap', q: 'More than ___ thousand people have downloaded it.', a: ['fifty', '50'] },
    ],
  },
  {
    title: 'Discussion: Is technology making us less intelligent?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về ảnh hưởng của công nghệ đến trí nhớ và khả năng tư duy.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Laura: 'en-US-AriaNeural', Sam: 'en-GB-ThomasNeural' },
    script: [
      ['Host', "Good evening. Do smartphones and search engines make us smarter, or are they slowly damaging our ability to think? With me are Dr Laura Chen, a neuroscientist, and Sam Price, a technology journalist. Laura, what does the research say?"],
      ['Laura', "There's evidence of what we call the Google effect. When people know they can easily find information online, they're less likely to remember it themselves. We remember where to find something, rather than the thing itself. Similarly, studies of drivers who rely on GPS show that they form weaker mental maps of the places they travel through."],
      ['Host', "Sam, does that worry you?"],
      ['Sam', "Not really. Humans have always used tools to support their memory. When writing was invented, the Greek philosopher Socrates complained that it would make people forgetful. And in a sense he was right, but writing also allowed us to build libraries, science and everything that followed. I think we're seeing the same thing now."],
      ['Laura', "That's a fair comparison, but there's one important difference: the speed and the amount of distraction. A book doesn't interrupt you every three minutes with a notification. Research shows that constantly switching between tasks reduces our ability to concentrate deeply, and that kind of deep thinking is how we make new connections and come up with original ideas."],
      ['Sam', "I'd agree that distraction is the real problem, not the technology itself. The same phone that distracts you can also give you access to free courses from the best universities in the world. It depends how you use it."],
      ['Host', "So what would you both recommend?"],
      ['Laura', "Turn off notifications when you need to focus, and occasionally test yourself without looking things up. Memory is like a muscle; if you never use it, it gets weaker."],
      ['Sam', "And be the one in control. Use technology to do the boring tasks, so that your brain has more time for the interesting ones."],
      ['Host', "Laura Chen and Sam Price, thank you both."],
    ],
    items: [
      { t: 'mcq', q: 'What is the “Google effect”?', o: ['People search more slowly.', 'People remember where to find information rather than the information itself.', 'People forget how to use computers.', 'Search engines make mistakes.'], a: 1 },
      { t: 'tf', q: 'Drivers who rely on GPS form stronger mental maps.', a: 'F' },
      { t: 'mcq', q: 'Why does Sam mention Socrates?', o: ['to show that worries about new technology are not new', 'to praise ancient Greece', 'to criticise writing', 'to talk about libraries'], a: 0 },
      { t: 'mcq', q: 'According to Laura, what is the important difference between books and phones?', o: ['price', 'speed and constant distraction', 'size', 'colour'], a: 1 },
      { t: 'tf', q: 'Sam believes distraction, not technology itself, is the real problem.', a: 'T' },
      { t: 'mcq', q: 'What does Laura compare memory to?', o: ['a computer', 'a muscle', 'a library', 'a map'], a: 1 },
      { t: 'mcq', q: 'What is Sam’s final advice?', o: ['stop using phones', 'use technology for boring tasks and stay in control', 'only read books', 'study neuroscience'], a: 1 },
    ],
    dictation: ['We remember where to find something, rather than the thing itself.', 'Memory is like a muscle.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: artificial, complicated, decrease, discover, effect, equipment, estimate, invent, research, unique',
    items: [
      { t: 'gap', q: 'Who ___ the light bulb?', a: ['invented'] },
      { t: 'gap', q: 'Fleming ___ penicillin by chance.', a: ['discovered'] },
      { t: 'gap', q: '___ intelligence can now write essays and translate texts.', a: ['Artificial'] },
      { t: 'gap', q: '___ shows that exercise improves memory.', a: ['Research'] },
      { t: 'gap', q: 'The price of solar panels has ___ a lot in recent years.', a: ['decreased'] },
      { t: 'gap', q: 'Social media has a big ___ on young people.', a: ['effect'] },
      { t: 'gap', q: 'The lab has a lot of expensive ___.', a: ['equipment'] },
      { t: 'gap', q: 'Scientists ___ that there are 8.7 million species on Earth.', a: ['estimate'] },
      { t: 'gap', q: 'The instructions are too ___ – I don’t understand them.', a: ['complicated'] },
      { t: 'gap', q: 'Every snowflake is ___.', a: ['unique'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: break down, come across, find out, make up, pull off, throw away, turn off, turn on (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'Our washing machine ___ last night.', a: ['broke down'] },
      { t: 'gap', q: 'I ___ an old photo while I was cleaning.', a: ['came across'] },
      { t: 'gap', q: 'Scientists are trying to ___ how the virus spreads.', a: ['find out'] },
      { t: 'gap', q: 'He ___ a story about his dog eating his homework.', a: ['made up'] },
      { t: 'gap', q: 'Please ___ the lights when you leave.', a: ['turn off'] },
      { t: 'gap', q: 'Don’t ___ your old phone – you can recycle it.', a: ['throw away'] },
      { t: 'gap', q: 'Can you ___ the computer? I need to check my email.', a: ['turn on'] },
      { t: 'gap', q: 'Be careful! You’ll ___ the handle if you pull so hard.', a: ['pull off'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'The lift is ___ order – take the stairs.', o: ['in', 'out of', 'on'], a: 1 },
      { t: 'mcq', q: 'Penicillin was discovered ___ chance.', o: ['by', 'on', 'in'], a: 0 },
      { t: 'mcq', q: '___, after ten years of work, the experiment succeeded.', o: ['At last', 'In my opinion', 'By chance'], a: 0 },
      { t: 'mcq', q: 'This phone is very different ___ my old one.', o: ['of', 'from', 'with'], a: 1 },
      { t: 'mcq', q: 'The new technology resulted ___ cheaper electricity.', o: ['in', 'from', 'to'], a: 0 },
      { t: 'mcq', q: 'Connect the printer ___ your laptop.', o: ['to', 'from', 'at'], a: 0 },
      { t: 'mcq', q: 'What’s the difference ___ a laptop and a tablet?', o: ['of', 'between', 'from'], a: 1 },
      { t: 'mcq', q: 'The museum is full ___ old machines.', o: ['with', 'of', 'by'], a: 1 },
      { t: 'mcq', q: 'A number of students ___ joined the robotics club.', o: ['has', 'have'], a: 1, ex: 'a number of + danh từ số nhiều + động từ số nhiều.' },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'Marie Curie was a famous ___. (SCIENCE)', a: ['scientist'] },
      { t: 'gap', q: 'Be careful – that water is ___! (BOIL)', a: ['boiling'] },
      { t: 'gap', q: 'This factory produces dangerous ___. (CHEMIST)', a: ['chemicals'] },
      { t: 'gap', q: 'What ___ did the researchers come to? (CONCLUDE)', a: ['conclusion'] },
      { t: 'gap', q: 'Space travel is a ___ subject. (FASCINATE)', a: ['fascinating'] },
      { t: 'gap', q: 'The moon landing was a ___ moment. (HISTORY)', a: ['historic'] },
      { t: 'gap', q: 'What is the ___ of this table? (LONG)', a: ['length'] },
      { t: 'gap', q: 'Take careful ___ before you cut the wood. (MEASURE)', a: ['measurements'] },
      { t: 'gap', q: 'The ___ gave me a high score. (EXAMINE)', a: ['examiner'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép động từ với cụm danh từ phù hợp.',
    items: [
      { t: 'match', pairs: [['carry out', 'an experiment'], ['do', 'research'], ['have', 'an effect on'], ['install', 'software'], ['make', 'a discovery'], ['come to', 'a conclusion'], ['take', 'measurements'], ['run', 'a program']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “artificial”:', o: ['digital', 'natural', 'automatic', 'unique'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “decrease”:', o: ['reduce', 'increase', 'estimate', 'lack'], a: 1 },
      { t: 'mcq', q: 'Đồng nghĩa với “complicated”:', o: ['simple', 'complex', 'exact', 'sudden'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “hardware”:', o: ['software', 'gadget', 'laptop', 'screen'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “come across”:', o: ['find by chance', 'break down', 'make up', 'throw away'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “maximum”:', o: ['minimum', 'exact', 'unique', 'digital'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Nhiều phát minh vĩ đại được khám phá một cách tình cờ.', ref: 'Many great inventions were discovered by chance.', focus: 'discover (passive), by chance' },
      { t: 'tr', vi: 'Trí tuệ nhân tạo có tác động lớn đến thị trường việc làm.', ref: 'Artificial intelligence has a big effect on the job market.', focus: 'artificial intelligence, have an effect on' },
      { t: 'tr', vi: 'Máy giặt nhà tôi lại hỏng rồi.', ref: 'Our washing machine has broken down again.', focus: 'break down' },
      { t: 'tr', vi: 'Các nhà khoa học đang cố tìm ra cách giảm rác thải nhựa.', ref: 'Scientists are trying to find out how to reduce plastic waste.', focus: 'find out, plastic' },
      { t: 'tr', vi: 'Nghiên cứu cho thấy trẻ em dành quá nhiều thời gian trước màn hình.', ref: 'Research shows that children spend too much time in front of screens.', focus: 'research shows, screen' },
      { t: 'tr', vi: 'Theo ý kiến của tôi, internet là phát minh quan trọng nhất.', ref: 'In my opinion, the internet is the most important invention.', focus: 'in my opinion, invention' },
      { t: 'tr', vi: 'Máy bán vé bị hỏng nên chúng tôi phải xếp hàng.', ref: 'The ticket machine was out of order, so we had to queue.', focus: 'out of order' },
      { t: 'tr', vi: 'Sự khác biệt giữa phần cứng và phần mềm là gì?', ref: 'What is the difference between hardware and software?', focus: 'a difference between' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'What piece of technology do you use most every day?' },
  { part: 'Part 1', q: 'Do you like learning about science? Why or why not?' },
  { part: 'Part 1', q: 'How often do you buy new gadgets?' },
  { part: 'Part 1', q: 'Is there any technology you find difficult to use?' },
  { part: 'Part 2', q: 'Describe an invention that has changed people’s lives.', cue: ['what the invention is', 'when it was invented (if you know)', 'how people use it', 'and explain how it has changed people’s lives'] },
  { part: 'Part 3', q: 'Do you think technology makes people’s lives easier or more stressful?' },
  { part: 'Part 3', q: 'Should governments spend more money on scientific research?' },
  { part: 'Part 3', q: 'Will artificial intelligence replace teachers in the future?' },
  { part: 'Part 3', q: 'What inventions do you think we will see in the next 50 years?' },
];

export default {
  id: 'b1-u18',
  book: 'b1',
  no: 18,
  title: 'Inventions and discoveries',
  titleVi: 'Phát minh & khám phá',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
