// Unit 21 – Vocabulary: Sending and receiving (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u21-vocab.js';

const reading = [
  {
    title: 'A message from the past',
    level: 'Dễ · ~180 từ',
    text: `Last month, my grandmother found a box of old letters in her cupboard. She asked me to help her read them because the handwriting was not very clear.

The letters were from her brother, who moved to Australia in 1965. In those days there was no Internet and no mobile phones. A phone call to Australia was so expensive that they only rang each other once a year, on New Year's Day. So they wrote letters. A letter took about three weeks to arrive, and then another three weeks for the reply.

In the letters, her brother told her about his new job, his new friends and the strange animals he saw. My grandmother said she used to read each letter again and again.

Today, I can send a message to my cousin in Australia and receive a reply in seconds. We even video-call every weekend. But reading those letters, I realised that something special has been lost. My grandmother kept every letter for sixty years. I can't remember a single message I sent last week.`,
    items: [
      { t: 'mcq', q: 'Why did the grandmother ask for help?', o: ['She couldn’t find the letters.', 'The handwriting was not clear.', 'The letters were in English.', 'She had lost her glasses.'], a: 1 },
      { t: 'gap', q: 'Her brother moved to Australia in ___.', a: ['1965'] },
      { t: 'mcq', q: 'How often did they phone each other?', o: ['every week', 'once a month', 'once a year', 'never'], a: 2 },
      { t: 'gap', q: 'A letter took about ___ weeks to arrive.', a: ['three', '3'] },
      { t: 'tf', q: 'The writer and his/her cousin video-call every weekend.', a: 'T' },
      { t: 'mcq', q: 'What does the writer realise at the end?', o: ['Letters were too slow.', 'Something special has been lost with modern communication.', 'Messages are better than letters.', 'The grandmother should use email.'], a: 1 },
    ],
  },
  {
    title: 'How to write a good email',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `We send and receive dozens of emails every week, but many of them are badly written. A clear, polite email can help you get a job, solve a problem or make a good impression. Here are some simple rules.

Write a clear subject line. The person receiving your email should know what it is about before they open it. "Question about the IELTS course in June" is much better than "Hello" or "Help!".

Choose the right style. If you are writing to a friend, informal language is fine: "Hi Nam, how's it going?" But if you are writing to a teacher, a company or someone you don't know, use formal language: "Dear Ms Hoa, I am writing to ask about…"

Keep it short. Most people glance at their emails quickly. Say what you want in the first two or three sentences, and use short paragraphs.

Check before you click "send". Read your email again to find mistakes. Check that you have attached any files you mentioned – forgetting the attachment is one of the most common mistakes!

Be careful with "Reply all". Before you reply to a message sent to a group, ask yourself whether everyone really needs to read your answer.

Finally, remember that emails can be forwarded and printed out. Never write anything that you wouldn't be happy for other people to see.`,
    items: [
      { t: 'mcq', q: 'Why is a clear subject line important?', o: ['It makes the email longer.', 'The reader knows what the email is about before opening it.', 'It is required by law.', 'It looks informal.'], a: 1 },
      { t: 'mcq', q: 'Which is an example of formal language?', o: ['Hi Nam, how’s it going?', 'Dear Ms Hoa, I am writing to ask about…', 'Help!', 'Hey there!'], a: 1 },
      { t: 'tf', q: 'The writer recommends long paragraphs.', a: 'F' },
      { t: 'gap', q: 'One of the most common mistakes is forgetting the ___.', a: ['attachment'] },
      { t: 'tf', q: 'You should always use “Reply all” in group emails.', a: 'F' },
      { t: 'mcq', q: 'What is the final piece of advice?', o: ['Write emails at night.', 'Don’t write anything you wouldn’t want others to see.', 'Always use emojis.', 'Print out every email.'], a: 1 },
    ],
  },
  {
    title: 'Fake news: how to spot it',
    level: 'Trung bình · ~320 từ',
    text: `A shocking story appears on your phone. A famous singer has died. A new medicine cures every illness. A city will be closed tomorrow because of a dangerous storm. Within minutes, thousands of people have shared it. But is it true?

"Fake news" – false information that is made to look like real news – spreads faster than ever before. Research by scientists in the USA found that false stories on social media reach people about six times faster than true ones. The reason is simple: fake stories are often more surprising and emotional, so people want to share them immediately.

Some fake news is created as a joke, but much of it is designed to make money or to persuade people to believe certain ideas. Every time someone clicks on a link, the website that published the story earns money from advertisements.

So how can you protect yourself? Experts suggest a few simple steps. First, check the source. Is the website one you know and trust? Fake news sites often have names that look similar to famous ones. Second, read more than the headline. Headlines are written to make you click; the full article may tell a different story. Third, look for the same story on other reliable websites or on the news. If no serious media is reporting it, be careful. Fourth, check the images. A photo may be real but from a different event or a different year.

Most importantly, pause before you share. Ask yourself how the story makes you feel. If it makes you very angry or very excited, that is exactly when you should slow down and check. The fight against fake news doesn't only depend on governments and technology companies – it depends on each one of us.`,
    items: [
      { t: 'mcq', q: 'What is “fake news”?', o: ['old news', 'false information made to look like real news', 'news about famous people', 'news on the radio'], a: 1 },
      { t: 'gap', q: 'False stories reach people about ___ times faster than true ones.', a: ['six', '6'] },
      { t: 'mcq', q: 'Why do fake stories spread quickly?', o: ['They are shorter.', 'They are more surprising and emotional.', 'They are published by governments.', 'They have better photos.'], a: 1 },
      { t: 'tf', q: 'Websites can earn money when people click on fake stories.', a: 'T' },
      { t: 'mcq', q: 'Which step is NOT suggested?', o: ['check the source', 'read more than the headline', 'share it quickly to warn friends', 'check the images'], a: 2 },
      { t: 'tf', q: 'A real photo can still be used in a misleading way.', a: 'T' },
      { t: 'mcq', q: 'When should you be most careful, according to the text?', o: ['when a story is boring', 'when a story makes you very angry or excited', 'when you read it on TV', 'when it is long'], a: 1 },
    ],
  },
  {
    title: 'Learning languages with a strong accent',
    level: 'Trung bình–Khó · ~360 từ',
    text: `"I used to be embarrassed about my accent," admits Pham Thu Trang, a 24-year-old engineer who now works for an international company in Singapore. "In meetings, I would hesitate before speaking because I was worried people would laugh at the way I pronounced words. Sometimes I didn't speak at all."

Trang's feelings are very common. Many language learners believe they need to sound exactly like a native speaker before they are good enough. But linguists say this goal is not only unrealistic, it is also unnecessary.

"There is no such thing as English without an accent," explains Dr Helen Moore, who researches international communication. "A person from Scotland, a person from Texas and a person from Australia all have different accents, and they are all native speakers. What matters is not your accent but whether people can understand you clearly."

Research supports this view. Studies show that listeners understand speakers with foreign accents very well, as long as they pronounce certain key sounds correctly, use the right word stress and speak at a reasonable speed. In fact, some features that learners worry about, such as the exact sound of "th", rarely cause communication problems. Others – like dropping the final sounds of words, which is common among Vietnamese speakers – can make a much bigger difference. Saying "fi" instead of "five" or "wor" instead of "work" can confuse listeners.

Dr Moore's advice is to focus on clarity, not perfection. "Record yourself and listen back. Practise the sounds that affect meaning. Speak a little more slowly than you think you need to. And remember that confidence makes a huge difference: people listen more carefully to someone who speaks with confidence."

Trang has followed this advice. She practised her final consonants every day for three months and asked her colleagues to tell her when they couldn't understand something. "Now I'm proud of my accent," she says. "It tells people where I'm from. As long as they understand me, why should I hide it?"`,
    items: [
      { t: 'mcq', q: 'Why did Trang sometimes not speak in meetings?', o: ['She didn’t understand the topic.', 'She was worried about her accent.', 'Her boss told her not to.', 'She was too busy.'], a: 1 },
      { t: 'tf', q: 'Dr Moore says some English speakers have no accent at all.', a: 'F', ex: '“There is no such thing as English without an accent.”' },
      { t: 'mcq', q: 'According to Dr Moore, what matters most?', o: ['sounding like a native speaker', 'being understood clearly', 'speaking fast', 'using difficult words'], a: 1 },
      { t: 'tf', q: 'The “th” sound often causes serious communication problems.', a: 'F', ex: '“rarely cause communication problems”' },
      { t: 'mcq', q: 'Which problem is common among Vietnamese speakers?', o: ['speaking too slowly', 'dropping the final sounds of words', 'using wrong grammar', 'speaking too loudly'], a: 1 },
      { t: 'mcq', q: 'Which piece of advice is NOT given by Dr Moore?', o: ['record yourself', 'speak a little more slowly', 'copy a native speaker exactly', 'be confident'], a: 2 },
      { t: 'gap', q: 'Trang practised her final consonants every day for ___ months.', a: ['three', '3'] },
      { t: 'mcq', q: 'How does Trang feel about her accent now?', o: ['embarrassed', 'proud', 'worried', 'angry'], a: 1 },
    ],
  },
  {
    title: 'Always connected: the cost of constant communication',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `The average smartphone user checks their phone around 100 times a day and receives dozens of notifications – messages, emails, likes, comments and news alerts. Never before in human history have people been so constantly connected. Yet a growing number of researchers are asking whether this permanent contact is good for us.

There is no doubt that modern communication brings enormous benefits. Families separated by thousands of kilometres can see each other's faces every day. Students can join online courses taught by the world's best universities. In emergencies, people can contact help instantly, and during natural disasters, social media has been used to find missing people and organise rescue efforts.

However, the costs are becoming clearer. One of the most widely reported is the effect on concentration. Every time a phone vibrates, our attention is interrupted, and studies suggest that it can take more than twenty minutes to return fully to a complex task. Workers who constantly check emails often feel busy all day but achieve less than they expected.

Sleep is another concern. Many people take their phones to bed and reply to messages late at night. The blue light from screens can reduce the production of melatonin, a hormone that helps us sleep, and the emotional excitement of a message can keep the brain active long after the screen is switched off.

There is also a social price. Psychologists have described a phenomenon sometimes called "phubbing" – ignoring the person you are with in order to look at your phone. Even when a phone is simply placed on the table during a conversation, research has found that people report feeling less connected to each other and that conversations tend to stay at a more superficial level.

In response, some companies have introduced rules limiting emails outside working hours. In France, a law gives employees the "right to disconnect", meaning they do not have to reply to work messages in the evening or at weekends. Individuals are also experimenting with "digital detoxes", spending a day, a weekend or even a month without their devices.

The aim, most experts agree, is not to reject technology but to use it more consciously. Turning off unnecessary notifications, keeping phones out of the bedroom and agreeing on "phone-free" times with family and friends are small changes that can help us enjoy the benefits of being connected without paying too high a price.`,
    items: [
      { t: 'gap', q: 'The average smartphone user checks their phone around ___ times a day.', a: ['100', 'a hundred', 'one hundred'] },
      { t: 'mcq', q: 'Which benefit of modern communication is mentioned?', o: ['cheaper phones', 'finding missing people during disasters', 'better sleep', 'less work'], a: 1 },
      { t: 'mcq', q: 'How long can it take to return fully to a complex task after an interruption?', o: ['a few seconds', 'about five minutes', 'more than twenty minutes', 'an hour'], a: 2 },
      { t: 'tf', q: 'Blue light from screens can help people sleep better.', a: 'F' },
      { t: 'mcq', q: 'What is “phubbing”?', o: ['calling someone late at night', 'ignoring the person you are with to look at your phone', 'deleting social media', 'sending fake messages'], a: 1 },
      { t: 'tf', q: 'Even a phone placed on the table can make conversations less deep.', a: 'T' },
      { t: 'mcq', q: 'What does the French “right to disconnect” mean?', o: ['Phones are banned at work.', 'Employees don’t have to reply to work messages outside working hours.', 'Companies must provide free internet.', 'Workers can leave early.'], a: 1 },
      { t: 'mcq', q: 'What is the writer’s conclusion?', o: ['We should stop using technology.', 'We should use technology more consciously.', 'Technology has no disadvantages.', 'Only companies can solve the problem.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Voicemail: Dentist appointment',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Lời nhắn thoại từ phòng khám. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-SoniaNeural' },
    script: [
      ['N', 'Hello, this is a message for Mr David Brown. This is Lucy from the City Dental Clinic.'],
      ['N', "I'm calling to remind you about your appointment with Doctor Patel on Thursday the twelfth of March at half past two."],
      ['N', 'Please arrive ten minutes early to fill in a short form.'],
      ['N', "If you can't come, please call us back on 020 7946 0358 at least twenty-four hours before your appointment."],
      ['N', 'You can also contact us by email at the address on our website. Thank you, and have a nice day.'],
    ],
    items: [
      { t: 'gap', q: 'The appointment is with Doctor ___.', a: ['Patel'] },
      { t: 'gap', q: 'Day: Thursday the ___ of March.', a: ['12th', 'twelfth', '12'] },
      { t: 'gap', q: 'Time: ___', a: ['2.30', '2:30', 'half past two', 'two thirty'] },
      { t: 'gap', q: 'Arrive ___ minutes early.', a: ['10', 'ten'] },
      { t: 'mcq', q: 'Why should he arrive early?', o: ['to pay', 'to fill in a form', 'to see a nurse', 'to park'], a: 1 },
      { t: 'gap', q: 'Cancel at least ___ hours before.', a: ['24', 'twenty-four', 'twenty four'] },
    ],
    dictation: ["I'm calling to remind you about your appointment.", 'Please arrive ten minutes early to fill in a short form.', 'You can also contact us by email.'],
  },
  {
    title: 'Talk: My YouTube channel',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một bạn trẻ kể về kênh YouTube dạy nấu ăn của mình.',
    rate: '-5%',
    voices: { N: 'en-US-JennyNeural' },
    script: [
      ['N', "Hi! I'm Kelly, and two years ago I started a YouTube channel about cooking cheap meals for students."],
      ['N', "At first, only my friends and family watched. I had about fifty viewers for each video. But then one video, about making five meals for under ten dollars, suddenly became really popular. It got two hundred thousand views in one week!"],
      ['N', "Now I post a new video every Friday. Making one video takes about eight hours: planning, cooking, filming and editing."],
      ['N', "The best part is reading the comments. People write to me from all over the world, and some of them send me photos of the dishes they've made."],
      ['N', "The hardest part is dealing with negative comments. At first they really upset me, but now I just don't reply to them."],
    ],
    items: [
      { t: 'mcq', q: 'What is Kelly’s channel about?', o: ['travel', 'cheap meals for students', 'music', 'fitness'], a: 1 },
      { t: 'gap', q: 'At first, each video had about ___ viewers.', a: ['50', 'fifty'] },
      { t: 'mcq', q: 'How many views did the popular video get in one week?', o: ['2,000', '20,000', '200,000', '2 million'], a: 2 },
      { t: 'gap', q: 'She posts a new video every ___.', a: ['Friday'] },
      { t: 'gap', q: 'Making one video takes about ___ hours.', a: ['8', 'eight'] },
      { t: 'tf', q: 'Kelly replies to every negative comment.', a: 'F' },
    ],
  },
  {
    title: 'Conversation: A phone call that went wrong',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Hai người bạn gọi điện nhưng tín hiệu rất kém.',
    rate: '+0%',
    voices: { Ben: 'en-GB-RyanNeural', Kate: 'en-GB-LibbyNeural' },
    script: [
      ['Kate', "Hello? Ben? Can you hear me?"],
      ['Ben', "Kate! Yes, but you're not very clear. Where are you?"],
      ['Kate', "I'm on the train. The signal's terrible here. Listen, I'm going to be late for dinner."],
      ['Ben', "Sorry, did you say late? How late?"],
      ['Kate', "About forty minutes. There's been a problem with the trains, so we're waiting outside the station."],
      ['Ben', "OK, no problem. Shall I tell the others?"],
      ['Kate', "Yes, please. And could you order for me? I'd like the fish."],
      ['Ben', "The fish. Got it. Anything to drink?"],
      ['Kate', "Just water, thanks. Oh, and Ben, I've got some news. I got the—"],
      ['Ben', "Kate? Kate? Hello? Oh, we've been cut off."],
      ['Kate', "Ben? Sorry, the call dropped. I was saying, I got the job!"],
      ['Ben', "That's fantastic! Congratulations! We'll celebrate tonight. Text me when you're nearly here."],
    ],
    items: [
      { t: 'mcq', q: 'Where is Kate?', o: ['at home', 'on the train', 'at the restaurant', 'at work'], a: 1 },
      { t: 'gap', q: 'Kate will be about ___ minutes late.', a: ['40', 'forty'] },
      { t: 'mcq', q: 'Why is she late?', o: ['She missed the train.', 'There is a problem with the trains.', 'She was at work.', 'She forgot.'], a: 1 },
      { t: 'mcq', q: 'What does Kate want to eat?', o: ['chicken', 'the fish', 'pasta', 'salad'], a: 1 },
      { t: 'tf', q: 'Kate wants some wine.', a: 'F' },
      { t: 'mcq', q: 'What is Kate’s news?', o: ['She is moving house.', 'She got the job.', 'She is getting married.', 'She passed her driving test.'], a: 1 },
    ],
    dictation: ["The signal's terrible here.", "Oh, we've been cut off."],
  },
  {
    title: 'Radio interview: The life of a news reporter',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một phóng viên truyền hình về công việc đưa tin.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-RyanNeural', Amy: 'en-AU-NatashaNeural' },
    script: [
      ['Presenter', "My guest today is Amy Walsh, who has been a TV news reporter for twelve years. Amy, what's a normal day like for you?"],
      ['Amy', "There isn't really a normal day. I usually start at about six in the morning by reading the news online and checking messages from my editor. By eight, we decide which stories to cover. Then I might be sent anywhere – a court, a flooded village, a press conference."],
      ['Presenter', "How long do you have to prepare a report?"],
      ['Amy', "Sometimes only an hour or two. For the evening news, we often film in the afternoon, edit very quickly and send everything back to the studio just before it's broadcast. It can be extremely stressful."],
      ['Presenter', "Has technology changed your job?"],
      ['Amy', "Completely. When I started, we needed a large team with heavy equipment. Now I can film, edit and send a report using just a smartphone. But there's also much more pressure. People expect news instantly, and social media means rumours spread before we've had time to check the facts."],
      ['Presenter', "How do you deal with that?"],
      ['Amy', "The most important rule is: never publish anything you haven't checked. Being first is nice, but being right is essential. If we make a mistake, viewers stop trusting us, and trust is everything in this job."],
      ['Presenter', "What advice would you give young people who want to become reporters?"],
      ['Amy', "Read widely, be curious about everything, and practise writing clearly and quickly. And learn to listen. The best stories usually come from listening carefully to ordinary people."],
    ],
    items: [
      { t: 'gap', q: 'Amy has been a reporter for ___ years.', a: ['12', 'twelve'] },
      { t: 'mcq', q: 'What does Amy do at about 6 a.m.?', o: ['films a report', 'reads the news and checks messages', 'goes to court', 'edits videos'], a: 1 },
      { t: 'tf', q: 'Amy sometimes has only an hour or two to prepare a report.', a: 'T' },
      { t: 'mcq', q: 'How has technology changed her job?', o: ['She needs a bigger team.', 'She can make a report with just a smartphone.', 'She works fewer hours.', 'She no longer writes.'], a: 1 },
      { t: 'mcq', q: 'What is Amy’s most important rule?', o: ['Always be first.', 'Never publish anything you haven’t checked.', 'Use social media.', 'Keep reports short.'], a: 1 },
      { t: 'mcq', q: 'According to Amy, the best stories usually come from…', o: ['famous people', 'listening to ordinary people', 'social media', 'press conferences'], a: 1 },
    ],
  },
  {
    title: 'Discussion: Should children have smartphones?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về độ tuổi phù hợp để trẻ em có điện thoại thông minh.',
    rate: '+5%',
    voices: { Host: 'en-GB-SoniaNeural', Paul: 'en-US-GuyNeural', Rosa: 'en-AU-NatashaNeural' },
    script: [
      ['Host', "Good evening. At what age should children get their first smartphone? Some schools have banned phones completely, and some parents have agreed not to give their children smartphones until they're fourteen. With me are Paul Grant, a father of three who supports these ideas, and Rosa Diaz, a researcher in children's media use. Paul?"],
      ['Paul', "My eldest daughter got a phone at ten, and honestly, I regret it. Within a year she was spending four or five hours a day on it. Her sleep got worse, her mood changed, and she stopped doing the things she used to love, like drawing. With my younger children, we've decided to wait."],
      ['Host', "Rosa, does research support Paul's experience?"],
      ['Rosa', "To some extent. There's clear evidence that heavy use, especially late at night, is linked to poorer sleep, and that some kinds of social media use are linked to anxiety, particularly in girls. But I'd be careful about blaming the device itself. How children use phones matters much more than whether they have one."],
      ['Paul', "But that's the problem. Apps are designed to be addictive. Expecting a ten-year-old to control that is unrealistic."],
      ['Rosa', "I agree that's a real issue. But there are also risks in banning phones completely. Children use them to stay in contact with parents, to coordinate with friends and, increasingly, for schoolwork. A child who's the only one in class without a phone can feel left out."],
      ['Host', "So is there a middle way?"],
      ['Rosa', "I think so. Some families start with a basic phone that can only call and text, then gradually add features. And clear family rules help: no phones at meals, no phones in bedrooms at night. Interestingly, rules work best when parents follow them too."],
      ['Paul', "That's fair. I'll admit I'm not always a good example myself!"],
      ['Host', "Paul Grant and Rosa Diaz, thank you both."],
    ],
    items: [
      { t: 'gap', q: 'Paul’s eldest daughter got a phone at the age of ___.', a: ['10', 'ten'] },
      { t: 'mcq', q: 'Which change did Paul NOT notice in his daughter?', o: ['worse sleep', 'mood changes', 'better school results', 'stopped drawing'], a: 2 },
      { t: 'tf', q: 'Rosa says heavy phone use late at night is linked to poorer sleep.', a: 'T' },
      { t: 'mcq', q: 'According to Rosa, what matters most?', o: ['the price of the phone', 'how children use phones', 'the brand', 'the child’s age only'], a: 1 },
      { t: 'mcq', q: 'What risk of a complete ban does Rosa mention?', o: ['Children may feel left out.', 'Phones become cheaper.', 'Parents will worry less.', 'Schools lose money.'], a: 0 },
      { t: 'mcq', q: 'What “middle way” does Rosa suggest?', o: ['a basic phone first, then more features, plus family rules', 'no phones until 18', 'unlimited use', 'phones only at school'], a: 0 },
      { t: 'tf', q: 'Paul admits he is not always a good example.', a: 'T' },
    ],
    dictation: ['How children use phones matters much more than whether they have one.', 'Rules work best when parents follow them too.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: accent, announcement, broadcast, click, interrupt, persuade, pronounce, publish, signal, whisper',
    items: [
      { t: 'gap', q: 'You can tell he’s from Australia by his ___.', a: ['accent'] },
      { t: 'gap', q: '___ on the link to download the file.', a: ['Click'] },
      { t: 'gap', q: 'There’s no ___ here – I can’t make a call.', a: ['signal'] },
      { t: 'gap', q: 'Please don’t ___ me while I’m talking.', a: ['interrupt'] },
      { t: 'gap', q: 'The final will be ___ live on Channel 1.', a: ['broadcast'] },
      { t: 'gap', q: 'How do you ___ this word?', a: ['pronounce'] },
      { t: 'gap', q: 'The book was first ___ in 2010.', a: ['published'] },
      { t: 'gap', q: 'She ___ me to join the drama club.', a: ['persuaded'] },
      { t: 'gap', q: '“Don’t tell anyone,” he ___ quietly.', a: ['whispered'] },
      { t: 'gap', q: 'Did you hear the ___ about the delay?', a: ['announcement'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: call back, come out, cut off, fill in, hang up, log off, log on, print out (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'I’m in a meeting. Can I ___ you ___ later? (2 phần, cách nhau …)', a: ['call … back', 'call back'] },
      { t: 'gap', q: 'Please ___ this form in black ink.', a: ['fill in'] },
      { t: 'gap', q: 'Her new book ___ next month.', a: ['comes out'] },
      { t: 'gap', q: 'We were ___ in the middle of the call.', a: ['cut off'] },
      { t: 'gap', q: 'She was so angry that she ___ on me.', a: ['hung up'] },
      { t: 'gap', q: '___ to the website with your student number.', a: ['Log on', 'Log onto', 'Log on to'] },
      { t: 'gap', q: 'Don’t forget to ___ when you use the library computer.', a: ['log off'] },
      { t: 'gap', q: 'Can you ___ two copies of the report?', a: ['print out'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'I heard the news ___ the radio.', o: ['in', 'on', 'at'], a: 1 },
      { t: 'mcq', q: 'You can contact us ___ email.', o: ['by', 'with', 'on'], a: 0 },
      { t: 'mcq', q: 'She’s been ___ the phone for hours.', o: ['in', 'on', 'at'], a: 1 },
      { t: 'mcq', q: 'Please reply ___ my email soon.', o: ['—', 'to', 'for'], a: 1, ex: '✗ reply my email' },
      { t: 'mcq', q: 'The book was translated ___ Vietnamese.', o: ['to', 'into', 'in'], a: 1 },
      { t: 'mcq', q: 'I received a message ___ my teacher.', o: ['from', 'by', 'of'], a: 0 },
      { t: 'mcq', q: 'She glanced ___ her watch.', o: ['on', 'at', 'to'], a: 1 },
      { t: 'mcq', q: 'Can you tell me ___ your new job?', o: ['for', 'about', 'of'], a: 1 },
      { t: 'mcq', q: 'Many people commented ___ the video.', o: ['on', 'at', 'about to'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'Good ___ is the key to a happy team. (COMMUNICATE)', a: ['communication'] },
      { t: 'gap', q: 'My internet ___ is very slow today. (CONNECT)', a: ['connection'] },
      { t: 'gap', q: 'Free ___ on all orders over 500,000 dong. (DELIVER)', a: ['delivery'] },
      { t: 'gap', q: 'The weather in Da Lat is very ___. (PREDICT)', a: ['unpredictable'] },
      { t: 'gap', q: 'The documentary was really ___. (INFORM)', a: ['informative'] },
      { t: 'gap', q: 'She gave an excellent ___ at the ceremony. (SPEAK)', a: ['speech'] },
      { t: 'gap', q: 'He ___ recorded the conversation. (SECRET)', a: ['secretly'] },
      { t: 'gap', q: 'I’ll ___ be there – I promise. (CERTAIN)', a: ['certainly'] },
      { t: 'gap', q: 'Machine ___ has improved a lot. (TRANSLATE)', a: ['translation'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['make', 'an announcement'], ['attach', 'a file'], ['switch', 'channels'], ['click on', 'a link'], ['speak with', 'an accent'], ['give', 'a speech'], ['fill in', 'a form'], ['lose', 'the signal']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “formal”:', o: ['informal', 'clear', 'online', 'polite'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “whisper”:', o: ['shout', 'type', 'pause', 'ring'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “ring sb”:', o: ['call sb', 'interrupt sb', 'persuade sb', 'contact sb by letter'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “log on”:', o: ['log off', 'print out', 'come out', 'call back'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “persuade”:', o: ['convince', 'request', 'publish', 'report'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “fill in (a form)”:', o: ['complete', 'cut off', 'hang up', 'interrupt'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi đang bận, lát nữa tôi gọi lại cho bạn nhé.', ref: "I'm busy now – I'll call you back later.", focus: 'call back' },
      { t: 'tr', vi: 'Xin vui lòng điền vào mẫu đơn này và gửi cho chúng tôi qua email.', ref: 'Please fill in this form and send it to us by email.', focus: 'fill in, by email' },
      { t: 'tr', vi: 'Tôi chưa trả lời email của giáo viên.', ref: "I haven't replied to my teacher's email yet.", focus: 'reply to' },
      { t: 'tr', vi: 'Đừng tin mọi thứ bạn đọc trên mạng.', ref: "Don't believe everything you read on the Internet.", focus: 'on the Internet' },
      { t: 'tr', vi: 'Cuộc gọi bị ngắt vì tín hiệu quá yếu.', ref: 'The call was cut off because the signal was too weak.', focus: 'cut off, signal' },
      { t: 'tr', vi: 'Cuốn sách này đã được dịch sang hơn 30 ngôn ngữ.', ref: 'This book has been translated into more than 30 languages.', focus: 'translate into (passive)' },
      { t: 'tr', vi: 'Mạng xã hội giúp mọi người giữ liên lạc nhưng cũng làm giảm sự tập trung.', ref: 'Social media helps people stay in contact, but it also reduces their concentration.', focus: 'media, contact (IELTS)' },
      { t: 'tr', vi: 'Bạn phát âm tên của mình như thế nào?', ref: 'How do you pronounce your name?', focus: 'pronounce' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'How do you usually keep in touch with your friends?' },
  { part: 'Part 1', q: 'Do you prefer texting or calling people? Why?' },
  { part: 'Part 1', q: 'How often do you write emails?' },
  { part: 'Part 1', q: 'Where do you usually get the news from?' },
  { part: 'Part 2', q: 'Describe an important message or piece of news you received.', cue: ['what the message or news was', 'who it was from', 'how you received it', 'and explain why it was important to you'] },
  { part: 'Part 3', q: 'How has technology changed the way people communicate?' },
  { part: 'Part 3', q: 'Do you think people trust the news less than in the past? Why?' },
  { part: 'Part 3', q: 'Is face-to-face communication still important in the digital age?' },
  { part: 'Part 3', q: 'Should there be stricter rules about what people post on social media?' },
];

export default {
  id: 'b1-u21',
  book: 'b1',
  no: 21,
  title: 'Sending and receiving',
  titleVi: 'Giao tiếp & truyền thông',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
