// B2 Unit 8 – Vocabulary: The media (Destination B2).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u08-vocab.js';

const reading = [
  {
    title: 'How I get my news',
    level: 'Dễ · ~200 từ',
    text: `My grandparents still have a newspaper delivered every morning. My grandfather reads the broadsheet from the first page to the last, while my grandmother flicks through it looking for the crossword. In the evening, they always watch the news bulletin on the same channel at seven o'clock.

My parents are different. They listen to the radio in the car and read articles on news websites during their lunch break. They rarely buy a newspaper, but they sometimes look up stories online if they want more detail.

As for me, I almost never watch the news on TV. I get most of my information from social media, often from short videos that last less than a minute. It's quick and easy, but I've realised that it has some problems. Last month, I shared a story about a famous singer that turned out to be completely made up. I felt really embarrassed.

Since then, I've tried to be more careful. Before I believe a story, I check whether other news sources are reporting it too. It takes a little longer, but at least I don't spread false information any more.`,
    items: [
      { t: 'mcq', q: 'How does the grandmother read the newspaper?', o: ['from first to last page', 'she flicks through it for the crossword', 'online', 'she does not read it'], a: 1 },
      { t: 'gap', q: 'The grandparents watch the news bulletin at ___ o’clock.', a: ['seven', '7'] },
      { t: 'mcq', q: 'Where do the parents read articles?', o: ['in a newspaper', 'on news websites', 'on social media', 'in magazines'], a: 1 },
      { t: 'mcq', q: 'Where does the writer get most news?', o: ['TV', 'radio', 'social media', 'newspapers'], a: 2 },
      { t: 'tf', q: 'The story the writer shared was true.', a: 'F' },
      { t: 'mcq', q: 'What does the writer do now before believing a story?', o: ['asks parents', 'checks if other sources report it', 'ignores all news', 'reads the comments'], a: 1 },
    ],
  },
  {
    title: 'The life of a foreign correspondent',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `Ever since she was a teenager, Sarah Nguyen wanted to be a journalist. Today she works as a foreign correspondent in Southeast Asia, reporting on everything from elections to natural disasters for an international news agency.

"People think it's a glamorous job," she says, "but most of the time it isn't." A typical day might start at 5 a.m. with a phone call from her editor in London, who wants a story by the end of the afternoon. She then spends hours interviewing people, checking facts and writing – often in a hotel room with an unreliable Internet connection.

The most important part of the job, she says, is accuracy. "It's easy to make a mistake when you're under pressure. But if you get a fact wrong, people stop trusting you. So I always check every name, every number and every quote with at least two sources."

Sarah also believes that journalists have a responsibility to tell the stories that are often ignored. "The media tends to focus on wars and disasters, but I try to report positive stories too – a village that has built its own solar power system, for example, or young people starting businesses."

The job has its dangers. Sarah has covered floods and protests, and some of her colleagues around the world have been arrested simply for doing their work. "Freedom of the press is something many of us take for granted," she says. "In many countries, it simply doesn't exist."

Does she ever regret her choice? "Never. It's exhausting, but I feel that I'm making a difference."`,
    items: [
      { t: 'mcq', q: 'What does Sarah say about her job?', o: ['It is always glamorous.', 'Most of the time it is not glamorous.', 'It is easy.', 'It is boring.'], a: 1 },
      { t: 'gap', q: 'A typical day might start at ___ a.m.', a: ['5', 'five'] },
      { t: 'mcq', q: 'What is the most important part of the job, according to Sarah?', o: ['speed', 'accuracy', 'travel', 'photos'], a: 1 },
      { t: 'gap', q: 'She checks every fact with at least ___ sources.', a: ['two', '2'] },
      { t: 'mcq', q: 'Which positive story does she mention?', o: ['a new airport', 'a village solar power system', 'a sports team', 'a film festival'], a: 1 },
      { t: 'tf', q: 'Sarah regrets her career choice.', a: 'F' },
    ],
  },
  {
    title: 'Fake news: how to see through it',
    level: 'Trung bình · ~320 từ',
    text: `False or misleading stories have always existed, but social media has allowed them to spread faster than ever before. A made-up story can be shared millions of times before anyone checks whether it is true, and by the time a correction appears, most people have already moved on. So how can ordinary readers protect themselves?

The first step is to look at the source. Is the story from a well-known news organisation, or from a website you have never heard of? Fake news sites often copy the design and names of real ones, changing just one letter in the web address. It is also worth checking the date: old stories are sometimes shared as if they were new.

Secondly, be suspicious of headlines that seem designed to make you angry or shocked. Emotional headlines are more likely to be shared, which is exactly why people who create fake stories use them. If a headline makes you feel strongly, that is a good moment to stop and think.

Thirdly, read beyond the headline. Many people share stories without reading them, and the article itself may not support the headline at all. Check whether the story names its sources and includes quotes from real experts.

Finally, see whether other reliable sources are reporting the same story. If a major event has really happened, many news organisations will be covering it. If only one unknown website mentions it, there is a good chance it is not true.

Images and videos need special care. Photos can be edited, taken out of context or even created entirely by artificial intelligence. A reverse image search can quickly show where a picture first appeared.

None of these steps takes long, and together they can make a real difference. As one expert puts it: "Before you share, take a moment to compare."`,
    items: [
      { t: 'mcq', q: 'Why has fake news become a bigger problem?', o: ['People read less.', 'Social media spreads it faster.', 'Newspapers have closed.', 'Journalists are lazy.'], a: 1 },
      { t: 'mcq', q: 'How do fake news sites often trick readers?', o: ['by using real journalists', 'by copying real sites and changing one letter in the address', 'by being free', 'by using no images'], a: 1 },
      { t: 'tf', q: 'Emotional headlines are less likely to be shared.', a: 'F' },
      { t: 'mcq', q: 'What is the third piece of advice?', o: ['check the date', 'read beyond the headline', 'use a search engine', 'ask a friend'], a: 1 },
      { t: 'mcq', q: 'What does it suggest if only one unknown site reports a big event?', o: ['It is probably true.', 'There is a good chance it is not true.', 'It is very important.', 'It is breaking news.'], a: 1 },
      { t: 'gap', q: 'A reverse ___ search shows where a picture first appeared.', a: ['image'] },
    ],
  },
  {
    title: 'Is print journalism dying?',
    level: 'Trung bình–Khó · ~360 từ',
    text: `Twenty years ago, millions of people bought a newspaper every day on their way to work. Today, the scene on any train or bus is very different: almost everyone is looking at a phone. In many countries, sales of printed newspapers have fallen by more than half since the early 2000s, and hundreds of local papers have closed. It is tempting to conclude that print journalism is dying.

The main reason is financial. Newspapers traditionally earned most of their money from advertising, not from the price of the paper itself. When advertisers moved online – especially to search engines and social media platforms that could target customers far more precisely – newspapers lost their most important source of income. At the same time, readers became used to getting news for free on the Internet.

The consequences go beyond the newspaper industry. When local papers close, nobody reports on local council meetings or court cases. Studies in the United States have found that in "news deserts" – areas without a local newspaper – fewer people vote, and local government spending tends to rise, possibly because politicians feel that nobody is watching.

However, it would be wrong to say that journalism itself is dying. Some publications have successfully adapted by asking readers to pay for online subscriptions. A few major newspapers now have more paying digital readers than they ever had print buyers. Others rely on donations from readers or on support from foundations. New forms of journalism, such as podcasts and newsletters, have also attracted large audiences.

There are even signs that print is finding a new, smaller role. Some magazines have increased their prices and focused on high-quality design and long, thoughtful articles that people want to keep, rather than daily news, which is better delivered online.

The real question, therefore, is not whether newspapers will survive on paper, but whether societies will find new ways to pay for the careful, independent reporting that democracy depends on.`,
    items: [
      { t: 'mcq', q: 'By how much have newspaper sales fallen in many countries?', o: ['by about 10%', 'by more than half', 'by a quarter', 'not at all'], a: 1 },
      { t: 'mcq', q: 'What is the main reason for the decline?', o: ['bad journalism', 'advertisers moved online', 'paper is expensive', 'people read less'], a: 1 },
      { t: 'mcq', q: 'What happens in “news deserts”?', o: ['more people vote', 'fewer people vote', 'newspapers are cheaper', 'more papers open'], a: 1 },
      { t: 'tf', q: 'Some newspapers now have more digital subscribers than they ever had print buyers.', a: 'T' },
      { t: 'mcq', q: 'How have some magazines adapted?', o: ['by lowering prices', 'by focusing on quality design and long articles', 'by stopping printing', 'by publishing daily news'], a: 1 },
      { t: 'mcq', q: 'According to the writer, the real question is…', o: ['whether paper is necessary', 'how to pay for independent reporting', 'whether people read', 'how to make news faster'], a: 1 },
    ],
  },
  {
    title: 'Should social media companies be responsible for what users post?',
    level: 'Khó · ~420 từ · IELTS',
    text: `Social media platforms have transformed the way information is shared. A single post can reach millions of people within hours, giving ordinary citizens a voice that was once reserved for journalists and politicians. Yet the same platforms have also been used to spread false information, hate speech and harmful content. This has led to a heated debate about whether the companies that run them should be held legally responsible for what their users post.

Those who argue for greater responsibility point out that social media companies are not neutral. Their algorithms decide which posts appear at the top of our feeds, and these systems are designed to keep users on the platform for as long as possible. Since shocking and emotional content tends to attract the most attention, critics claim that the companies effectively promote misleading or extreme material because it makes them money. If newspapers can be sued for publishing false and damaging stories, they argue, there is no reason why platforms with far greater influence should be treated differently.

There are also practical arguments. The largest companies are among the wealthiest in the world, and they have the technology and resources to identify and remove harmful content far more quickly than any government. Several countries have already introduced laws that require platforms to remove illegal content within a short time or face heavy fines.

On the other hand, many people worry that making companies responsible for every post could threaten freedom of speech. Faced with the risk of large fines, platforms may simply remove anything controversial, including legitimate political criticism and satire. There is also the question of who decides what counts as "harmful" or "false" – a decision that, in the wrong hands, could be used to silence opponents. Moreover, with billions of posts published every day, checking every one is impossible, and automated systems often make mistakes.

In my view, a balanced approach is needed. Companies should not be expected to check every individual post, but they should be responsible for the design of their systems – including how their algorithms promote content – and they should be required to act quickly when harmful material is reported. Clear rules, independent oversight and transparency about how decisions are made would help to protect users without giving either governments or private companies too much control over what we are allowed to say.`,
    items: [
      { t: 'mcq', q: 'Why do critics say platforms are not neutral?', o: ['They employ journalists.', 'Their algorithms decide which posts appear first.', 'They are owned by governments.', 'They charge users.'], a: 1 },
      { t: 'mcq', q: 'Why might algorithms promote shocking content?', o: ['It is cheaper.', 'It keeps users on the platform and makes money.', 'Users ask for it.', 'Laws require it.'], a: 1 },
      { t: 'tf', q: 'Some countries already fine platforms that do not remove illegal content quickly.', a: 'T' },
      { t: 'mcq', q: 'What is one worry about making companies responsible?', o: ['They will lose users.', 'They may remove legitimate criticism and satire.', 'Fines are too small.', 'Posts will become longer.'], a: 1 },
      { t: 'mcq', q: 'What does the writer suggest companies should be responsible for?', o: ['checking every post', 'the design of their systems and acting on reports', 'nothing', 'choosing what users may say'], a: 1 },
      { t: 'tf', q: 'The writer wants governments to have full control over online speech.', a: 'F' },
    ],
  },
];

const listening = [
  {
    title: 'Radio news bulletin',
    level: '1 · Dễ · 1 giọng, chậm',
    desc: 'Bản tin phát thanh ngắn.',
    rate: '-12%',
    voices: { N: 'en-GB-RyanNeural' },
    script: [
      ['N', "Good morning. Here is the eight o'clock news bulletin."],
      ['N', 'The government has announced plans to build three new hospitals in the north of the country. The first is expected to open in 2028.'],
      ['N', 'Heavy rain has caused flooding in several coastal towns. Around two hundred people have been moved to safety, and roads in the area are closed.'],
      ['N', 'In sport, the national women’s football team beat Japan two–one last night to reach the final of the Asian Cup.'],
      ['N', "And finally, a nine-year-old girl from Da Nang has won an international science competition with her invention: a solar-powered fan. That's all for now. The next bulletin is at nine."],
    ],
    items: [
      { t: 'gap', q: 'The government plans to build ___ new hospitals.', a: ['three', '3'] },
      { t: 'gap', q: 'The first hospital should open in ___.', a: ['2028'] },
      { t: 'gap', q: 'Around ___ people have been moved to safety.', a: ['two hundred', '200'] },
      { t: 'mcq', q: 'What was the football score?', o: ['1–0', '2–1', '2–2', '3–1'], a: 1 },
      { t: 'mcq', q: 'What did the girl invent?', o: ['a robot', 'a solar-powered fan', 'a new app', 'an electric bike'], a: 1 },
    ],
    dictation: ['The government has announced plans to build three new hospitals.', 'Roads in the area are closed.'],
  },
  {
    title: 'Conversation: What shall we watch?',
    level: '2 · Dễ · 2 giọng',
    desc: 'Hai bạn cùng phòng chọn chương trình TV.',
    rate: '-5%',
    voices: { Jack: 'en-GB-ThomasNeural', Vy: 'en-AU-NatashaNeural' },
    script: [
      ['Jack', "There's nothing on tonight. Just a quiz show and some talk show with a celebrity chef."],
      ['Vy', "What about that documentary on channel four? It's about the history of the Internet."],
      ['Jack', "When does it come on?"],
      ['Vy', "Half past eight. It's had really good reviews – one newspaper described it as 'the best documentary of the year'."],
      ['Jack', "Was that in a tabloid? They say that about everything!"],
      ['Vy', "No, it was in a broadsheet. And the columnist who wrote it is usually very hard to please."],
      ['Jack', "OK, let's watch it. But if it's boring, I'm turning over to the football."],
      ['Vy', "Deal. I'll make some popcorn."],
    ],
    items: [
      { t: 'mcq', q: 'What is on tonight, according to Jack?', o: ['a film and the news', 'a quiz show and a talk show', 'football only', 'a documentary only'], a: 1 },
      { t: 'mcq', q: 'What is the documentary about?', o: ['cooking', 'the history of the Internet', 'football', 'celebrities'], a: 1 },
      { t: 'gap', q: 'It comes on at half past ___.', a: ['eight', '8'] },
      { t: 'mcq', q: 'Where was the good review published?', o: ['a tabloid', 'a broadsheet', 'a blog', 'a magazine'], a: 1 },
      { t: 'mcq', q: 'What will Jack do if it’s boring?', o: ['go to bed', 'turn over to the football', 'go out', 'read a book'], a: 1 },
    ],
    dictation: ['When does it come on?', "If it's boring, I'm turning over to the football."],
  },
  {
    title: 'Talk: A day in the life of a TV newsroom',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Biên tập viên mô tả một ngày ở phòng tin.',
    rate: '+0%',
    voices: { Editor: 'en-US-AriaNeural' },
    script: [
      ['Editor', "I'm the editor of the evening news programme, so my day is a race against the clock. We go on air at six, and everything has to be ready."],
      ['Editor', "At nine a.m., we hold a meeting where reporters put forward ideas. We usually have about twenty possible stories, and I have to choose the eight or nine that will make it onto the programme."],
      ['Editor', "Then the reporters go out to film interviews, while researchers check facts and look up background information. Nothing goes on air until two people have checked it."],
      ['Editor', "The hardest decisions come when a big story breaks in the afternoon. Then we might have to change the whole running order in an hour – or interrupt another programme with a newsflash."],
      ['Editor', "People sometimes accuse the media of being biased. We try very hard to give a fair description of events and include different points of view. We don't always get it right, but we take that responsibility seriously."],
    ],
    items: [
      { t: 'gap', q: 'The programme goes on air at ___.', a: ['six', '6'] },
      { t: 'mcq', q: 'What happens at the 9 a.m. meeting?', o: ['They film interviews.', 'Reporters put forward ideas.', 'They watch the competition.', 'They check facts.'], a: 1 },
      { t: 'mcq', q: 'How many stories make it onto the programme?', o: ['about twenty', 'eight or nine', 'three', 'fifteen'], a: 1 },
      { t: 'mcq', q: 'Before anything goes on air…', o: ['the editor watches it', 'two people check it', 'the reporter approves it', 'viewers vote'], a: 1 },
      { t: 'mcq', q: 'What can happen when a big story breaks?', o: ['They cancel the programme.', 'They change the running order or use a newsflash.', 'They ignore it.', 'They wait until tomorrow.'], a: 1 },
    ],
    dictation: ['Reporters put forward ideas.', 'Nothing goes on air until two people have checked it.'],
  },
  {
    title: 'Radio interview: Influencers and advertising',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn chuyên gia về quảng cáo qua người có ảnh hưởng.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', 'Dr Ward': 'en-US-GuyNeural' },
    script: [
      ['Presenter', "Influencers now earn billions from advertising. Dr Emma Ward studies media and young people. Dr Ward, why are influencers so persuasive?"],
      ['Dr Ward', "Because they don't feel like advertisers. Followers see them as friends. When a friend recommends a product, we're far more likely to trust it than when we see a traditional advert."],
      ['Presenter', 'Is that a problem?'],
      ['Dr Ward', "It can be, if people don't realise they're looking at an advert. In our research, nearly half of teenagers couldn't tell the difference between a sponsored post and an ordinary one."],
      ['Presenter', 'What are the rules?'],
      ['Dr Ward', "In many countries, influencers must clearly label paid posts – with words like 'ad' or 'sponsored'. But many don't, and the rules are difficult to enforce."],
      ['Presenter', 'What would you like to see?'],
      ['Dr Ward', "Better media education in schools, so young people learn to ask, 'Who is paying for this?' And platforms should make labels much more visible – not hidden at the end of a long caption."],
    ],
    items: [
      { t: 'mcq', q: 'Why are influencers persuasive, according to Dr Ward?', o: ['They are experts.', 'Followers see them as friends.', 'Their products are cheaper.', 'They use celebrities.'], a: 1 },
      { t: 'gap', q: 'Nearly ___ of teenagers couldn’t tell a sponsored post from an ordinary one.', a: ['half'] },
      { t: 'mcq', q: 'What must influencers do in many countries?', o: ['pay a tax', 'label paid posts clearly', 'stop advertising', 'show their income'], a: 1 },
      { t: 'tf', q: 'The rules are easy to enforce.', a: 'F' },
      { t: 'mcq', q: 'Which question should young people learn to ask?', o: ['Is it cheap?', 'Who is paying for this?', 'Is it popular?', 'Is it new?'], a: 1 },
    ],
    dictation: ['Followers see them as friends.', 'Who is paying for this?'],
  },
  {
    title: 'Discussion: Do we need traditional news anymore?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3 về báo chí truyền thống và mạng xã hội.',
    rate: '+5%',
    voices: { Host: 'en-AU-WilliamNeural', Thu: 'en-GB-LibbyNeural', Mark: 'en-US-GuyNeural' },
    script: [
      ['Host', "Many young people say they don't need traditional news organisations any more – they get everything from social media. Thu, are they right?"],
      ['Thu', "I don't think so. Social media is fast, but most of the information on it comes from traditional journalists in the first place. Someone has to go to the scene, interview witnesses and check the facts."],
      ['Mark', "That's true, but social media has also made news more democratic. Ordinary people can report events as they happen. Some of the most important stories of the last decade began with a video posted by a member of the public."],
      ['Thu', "Absolutely, citizen journalism has its place. But a video without context can be very misleading. Professional journalists explain what happened and why it matters."],
      ['Mark', "I'd agree with that. My concern is that traditional media isn't always trusted either. Many people feel that big news organisations are biased."],
      ['Thu', "That's a fair point. Which is why transparency matters – showing your sources, correcting mistakes openly."],
      ['Host', "So the answer is both?"],
      ['Mark', "I think so. Social media for speed, professional journalism for depth and accuracy."],
    ],
    items: [
      { t: 'mcq', q: 'What is Thu’s main argument?', o: ['Social media is more accurate.', 'Much social media news comes from traditional journalists.', 'Newspapers are cheaper.', 'TV news is better.'], a: 1 },
      { t: 'mcq', q: 'How has social media made news more democratic, according to Mark?', o: ['It is free.', 'Ordinary people can report events as they happen.', 'It has no adverts.', 'It is shorter.'], a: 1 },
      { t: 'mcq', q: 'What is Thu’s concern about citizen videos?', o: ['They are low quality.', 'Without context they can be misleading.', 'They are illegal.', 'They are too long.'], a: 1 },
      { t: 'mcq', q: 'Why does Thu think transparency matters?', o: ['to save money', 'because many people think big media is biased', 'to get more viewers', 'to avoid laws'], a: 1 },
      { t: 'tf', q: 'At the end, they agree that both types of news have a role.', a: 'T' },
    ],
    dictation: ['Someone has to go to the scene and check the facts.', 'A video without context can be very misleading.'],
  },
];

const exercises = [
  {
    title: 'A. Từ dễ nhầm – chọn từ đúng',
    instruction: 'Chọn từ đúng.',
    items: [
      { t: 'mcq', q: 'The actor ___ that he was getting married.', o: ['denied', 'refused'], a: 0 },
      { t: 'mcq', q: 'The minister ___ to answer any questions.', o: ['refused', 'denied'], a: 0 },
      { t: 'mcq', q: 'She ___ the invitation to appear on the show.', o: ['accepted', 'agreed'], a: 0 },
      { t: 'mcq', q: 'The scandal was the main ___ on every front page.', o: ['headline', 'heading'], a: 0 },
      { t: 'mcq', q: 'The ___ press is full of celebrity gossip.', o: ['tabloid', 'broadsheet'], a: 0 },
      { t: 'mcq', q: 'The football ___ got very excited when they scored.', o: ['commentator', 'announcer'], a: 0 },
      { t: 'mcq', q: 'She writes a weekly ___ about health.', o: ['column', 'heading'], a: 0 },
      { t: 'mcq', q: 'The match will be ___ live on national TV.', o: ['broadcast', 'channel'], a: 0 },
      { t: 'mcq', q: 'The film was interrupted by a ___ about the earthquake.', o: ['newsflash', 'bulletin'], a: 0 },
      { t: 'mcq', q: 'He wrote a computer ___ that checks spelling.', o: ['program', 'programme'], a: 0 },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: bring up, come out, fill in, flick through, go into, hand out, look up, make up, put forward, see through, stand out, turn over (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'Her new book ___ next month.', a: ['comes out', 'is coming out'] },
      { t: 'gap', q: 'Please ___ this form and return it to reception.', a: ['fill in'] },
      { t: 'gap', q: 'I ___ a magazine while I was waiting at the dentist’s.', a: ['flicked through'] },
      { t: 'gap', q: 'The article doesn’t ___ much detail.', a: ['go into'] },
      { t: 'gap', q: 'They were ___ free newspapers outside the station.', a: ['handing out'] },
      { t: 'gap', q: 'If you don’t know the word, ___ in a dictionary. (tra nó)', a: ['look it up'] },
      { t: 'gap', q: 'The whole story was ___ – none of it was true.', a: ['made up'] },
      { t: 'gap', q: 'Several new ideas were ___ at the meeting.', a: ['put forward'] },
      { t: 'gap', q: 'Most readers ___ the fake story immediately.', a: ['saw through'] },
      { t: 'gap', q: 'Bright colours help an advert ___.', a: ['stand out'] },
    ],
  },
  {
    title: 'C. Cụm từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: '___ the report, prices will rise next year.', o: ['According to', 'In my view', 'In control'], a: 0 },
      { t: 'mcq', q: 'The minister refused to comment ___ the story.', o: ['on', 'about', 'to'], a: 0 },
      { t: 'mcq', q: 'People often confuse opinion ___ fact.', o: ['with', 'to', 'for'], a: 0 },
      { t: 'mcq', q: 'Adverts try to persuade us ___ things we don’t need.', o: ['to buy', 'buying', 'buy'], a: 0 },
      { t: 'mcq', q: 'There’s no point ___ with people online.', o: ['arguing', 'to argue'], a: 0 },
      { t: 'mcq', q: 'The news took everyone ___ surprise.', o: ['by', 'with', 'in'], a: 0 },
      { t: 'mcq', q: 'We take free information ___ granted.', o: ['for', 'as', 'to'], a: 0 },
      { t: 'mcq', q: 'Can you tell the ___ between real and fake news?', o: ['difference', 'description', 'view'], a: 0 },
      { t: 'mcq', q: 'The situation is now ___ control.', o: ['under', 'in', 'on'], a: 0 },
      { t: 'mcq', q: 'Young people are more ___ to get news from social media.', o: ['likely', 'probably', 'possible'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'The president made an important ___. (ANNOUNCE)', a: ['announcement'] },
      { t: 'gap', q: 'The story was so ___ that nobody trusted it. (BELIEF)', a: ['unbelievable'] },
      { t: 'gap', q: 'The evidence was not very ___. (CONVINCE)', a: ['convincing'] },
      { t: 'gap', q: 'The ___ criticised the government. (EDIT)', a: ['editorial', 'editor'] },
      { t: 'gap', q: 'It was a ___ look at modern life. (HUMOUR)', a: ['humorous'] },
      { t: 'gap', q: 'The documentary was really ___. (INFORM)', a: ['informative'] },
      { t: 'gap', q: 'She studied ___ at university. (JOURNAL)', a: ['journalism'] },
      { t: 'gap', q: 'Most ___ use social media to reach voters. (POLITICS)', a: ['politicians'] },
      { t: 'gap', q: 'The media is extremely ___. (POWER)', a: ['powerful'] },
      { t: 'gap', q: 'That headline is completely ___! (RIDICULE)', a: ['ridiculous'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['hit', 'the headlines'], ['freedom of', 'the press'], ['take sth', 'for granted'], ['make', 'a difference'], ['a news', 'bulletin'], ['social', 'media'], ['surf', 'the Internet'], ['fill in', 'a form']] },
    ],
  },
  {
    title: 'F. Viết lại câu',
    instruction: 'Viết lại câu dùng từ trong ngoặc, giữ nguyên nghĩa.',
    items: [
      { t: 'fix', q: 'He said it wasn’t true that he had lied. (denied)', a: ['He denied lying.', 'He denied that he had lied.', 'He denied having lied.'] },
      { t: 'fix', q: 'The story wasn’t true – he invented it. (made)', a: ['He made up the story.', 'He made the story up.', 'The story was made up.'] },
      { t: 'fix', q: 'The news surprised everyone. (by)', a: ['The news took everyone by surprise.'] },
      { t: 'fix', q: 'It’s useless to argue with him. (point)', a: ["There's no point in arguing with him.", 'There is no point in arguing with him.', "There's no point arguing with him."] },
      { t: 'fix', q: 'The report says that sales are falling. (according)', a: ['According to the report, sales are falling.'] },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Truyền thông có ảnh hưởng rất lớn đến dư luận.', ref: 'The media has a huge influence on public opinion.', focus: 'have an influence on (IELTS)' },
      { t: 'tr', vi: 'Bộ trưởng phủ nhận những tin đồn về vụ bê bối.', ref: 'The minister denied the rumours about the scandal.', focus: 'deny ≠ refuse' },
      { t: 'tr', vi: 'Nhiều người không phân biệt được tin thật và tin giả.', ref: "Many people can't tell the difference between real and fake news.", focus: 'tell the difference between' },
      { t: 'tr', vi: 'Chúng ta thường coi quyền tự do báo chí là điều hiển nhiên.', ref: 'We often take freedom of the press for granted.', focus: 'take sth for granted' },
      { t: 'tr', vi: 'Câu chuyện đó hoàn toàn là bịa đặt.', ref: 'That story was completely made up.', focus: 'make up' },
      { t: 'tr', vi: 'Theo một báo cáo gần đây, giới trẻ chủ yếu đọc tin tức trên mạng xã hội.', ref: 'According to a recent report, young people mainly read the news on social media.', focus: 'according to (IELTS Writing)' },
      { t: 'tr', vi: 'Quảng cáo cố gắng thuyết phục chúng ta mua những thứ không cần thiết.', ref: "Advertisements try to persuade us to buy things we don't need.", focus: 'persuade sb to do' },
      { t: 'tr', vi: 'Theo quan điểm của tôi, các công ty mạng xã hội nên chịu trách nhiệm nhiều hơn.', ref: 'In my view, social media companies should take more responsibility.', focus: 'in my view (IELTS Task 2)' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'How do you usually get your news?' },
  { part: 'Part 1', q: 'Do you read newspapers or magazines?' },
  { part: 'Part 1', q: 'What kind of TV programmes do you enjoy?' },
  { part: 'Part 1', q: 'How much time do you spend on social media each day?' },
  { part: 'Part 2', q: 'Describe a news story that interested you.', cue: ['what the story was about', 'where you saw or heard it', 'how you felt about it', 'and explain why it interested you'] },
  { part: 'Part 3', q: 'Do you think traditional newspapers will disappear?' },
  { part: 'Part 3', q: 'How can people protect themselves from fake news?' },
  { part: 'Part 3', q: 'Should social media companies be responsible for what users post?' },
  { part: 'Part 3', q: 'What influence do celebrities and influencers have on young people?' },
];

export default {
  id: 'b2-u08',
  book: 'b2',
  no: 8,
  title: 'The media',
  titleVi: 'Truyền thông',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
