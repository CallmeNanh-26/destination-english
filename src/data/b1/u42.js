// Unit 42 – Vocabulary: Problems and solutions (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u42-vocab.js';

const reading = [
  {
    title: 'Ask Annie: My room is always in a mess!',
    level: 'Dễ · ~210 từ',
    text: `Dear Annie,
My mum and I argue every day because of my bedroom. She says it's always in a mess, and she's right! There are clothes on the floor, books everywhere and old cups under the bed. I want to keep it tidy, but I never have time. Now Mum says I can't go out at the weekend until I sort it out. What should I do?
Tom, 15

Dear Tom,
Don't worry – you're not the only teenager with this problem! Here are a few sensible ideas.

First, get rid of things you don't need. If you haven't worn something for a year, give it away. Fewer things means less mess.

Second, make it easy. Put a box in the corner of your room for books, and hang up your clothes as soon as you take them off. When you've finished with something, put it back straight away.

Third, spend just ten minutes every evening tidying up. Ten minutes isn't much, but it will stop the mess from building up.

Finally, talk to your mum calmly. Tell her you understand the problem and you're going to work on it. I'm sure she'll be pleased – and you'll be out with your friends again in no time!

Good luck,
Annie`,
    items: [
      { t: 'mcq', q: 'Why do Tom and his mum argue?', o: ['his homework', 'his bedroom', 'his friends', 'his phone'], a: 1 },
      { t: 'tf', q: 'Tom wants to keep his room tidy.', a: 'T' },
      { t: 'mcq', q: 'What should Tom do with clothes he hasn’t worn for a year?', o: ['keep them', 'give them away', 'sell them', 'hang them up'], a: 1 },
      { t: 'gap', q: 'Annie suggests tidying for ___ minutes every evening.', a: ['ten', '10'] },
      { t: 'mcq', q: 'What is Annie’s final piece of advice?', o: ['move to a new room', 'talk to his mum calmly', 'ask his friends for help', 'stay at home'], a: 1 },
      { t: 'tf', q: 'Annie thinks Tom is the only teenager with this problem.', a: 'F' },
    ],
  },
  {
    title: 'Five steps to solving any problem',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `Everyone has problems – at school, at work or at home. Some people panic, while others seem to deal with them easily. The difference is often not intelligence, but method. Here are five simple steps that experts recommend.

1. Define the problem. It sounds obvious, but many people try to solve a problem before they really understand it. Write it down in one sentence. "I'm always late for school" is clearer than "My mornings are terrible."

2. Find the cause. Ask yourself why the problem happens. Are you late because you get up late, because the bus is slow, or because you can't find your things? Different causes need different solutions.

3. Think of several solutions. Don't stop at the first idea. Write down as many as you can, even silly ones. Sometimes a ridiculous idea leads to a sensible one.

4. Choose and act. Think about the advantages and disadvantages of each solution, then choose the best one and try it. Don't wait for the ideal solution – it may not exist.

5. Check the result. After a week or two, ask yourself if things are better. If not, don't be negative – go back to step three and try something else.

Finally, remember that you don't have to solve every problem alone. Talking to someone you trust can help you see the situation differently. As the saying goes, "A problem shared is a problem halved."`,
    items: [
      { t: 'mcq', q: 'According to the text, what is often the difference between people who deal with problems well and those who don’t?', o: ['intelligence', 'method', 'money', 'age'], a: 1 },
      { t: 'tf', q: 'Step 1 suggests writing the problem in one sentence.', a: 'T' },
      { t: 'mcq', q: 'Why is it important to find the cause?', o: ['Different causes need different solutions.', 'It is faster.', 'Teachers ask for it.', 'It avoids arguments.'], a: 0 },
      { t: 'tf', q: 'You should only write down sensible ideas.', a: 'F' },
      { t: 'mcq', q: 'What should you do if the solution doesn’t work?', o: ['give up', 'go back to step three', 'ask for money', 'wait'], a: 1 },
      { t: 'gap', q: '“A problem shared is a problem ___.”', a: ['halved'] },
    ],
  },
  {
    title: 'How rumours spread online',
    level: 'Trung bình · ~330 từ',
    text: `In 2020, a rumour spread across social media claiming that drinking hot water every fifteen minutes could protect people from a virus. It was completely false, but within days it had been shared millions of times in dozens of languages. Why do rumours like this spread so quickly – and what can we do about them?

Researchers at a major American university investigated this question by studying more than 100,000 stories shared on Twitter. Their results were surprising: false stories spread around six times faster than true ones, and were seventy percent more likely to be shared. Interestingly, the main cause was not computer programs, but ordinary people.

So why do we share false information? One reason is that false stories are often more surprising or emotional than the truth. A shocking claim makes us feel angry, frightened or amazed, and we want to tell our friends. Another reason is that we tend to believe stories that match what we already think. If a rumour supports our opinions, we are less likely to doubt it.

Speed is also a problem. On social media, we often share things in a few seconds, without reading the whole article or checking where it came from. Many people assume that if a friend has shared something, it must be true.

Experts suggest a few simple habits. Before you share something, stop and think: How does this make me feel? Strong emotions are a warning sign. Check the source – is it a well-known news organisation, or a website you've never heard of? Search for the story to see if other sources are reporting it. And if you are not sure, don't share it.

Some schools now teach students these skills from an early age. It may be one of the most important lessons of the digital age: in a world full of information, the ability to tell fact from rumour is more valuable than ever.`,
    items: [
      { t: 'tf', q: 'The rumour about hot water was true.', a: 'F' },
      { t: 'gap', q: 'Researchers studied more than ___ stories.', a: ['100,000', '100000', 'a hundred thousand', 'one hundred thousand'] },
      { t: 'gap', q: 'False stories spread around ___ times faster than true ones.', a: ['six', '6'] },
      { t: 'mcq', q: 'What was the main cause of false stories spreading?', o: ['computer programs', 'ordinary people', 'news organisations', 'governments'], a: 1 },
      { t: 'mcq', q: 'Why are we less likely to doubt some rumours?', o: ['They are short.', 'They match what we already think.', 'They come from friends abroad.', 'They have pictures.'], a: 1 },
      { t: 'mcq', q: 'According to experts, what is a warning sign?', o: ['strong emotions', 'long articles', 'old news', 'many comments'], a: 0 },
      { t: 'tf', q: 'Experts advise sharing a story if you are not sure, so others can check it.', a: 'F' },
    ],
  },
  {
    title: 'Can Hanoi solve its traffic problem?',
    level: 'Trung bình–Khó · ~370 từ',
    text: `Anyone who has visited Hanoi knows that its streets are full of life – and full of traffic. The city has more than seven million motorbikes and over a million cars, and the numbers are increasing every year. At rush hour, many main roads come to a complete standstill. The result is not only lost time, but also serious air pollution, which on some days is among the worst in Asia.

Finding a solution is not easy. One proposal that has caused a great deal of discussion is a plan to ban motorbikes from the city centre by 2030. Supporters claim that a ban would reduce traffic jams, cut pollution and make the streets safer. They point to cities such as Singapore and Seoul, where good public transport has encouraged people to leave their vehicles at home.

However, critics warn that the plan could create more problems than it solves. For millions of people, the motorbike is not just a means of transport but a way of making a living – delivery drivers, street sellers and motorbike taxi drivers all rely on them. Motorbikes are also cheap and flexible, able to go down the city's narrow alleys where buses cannot. Critics argue that it would be unfair to ban them before the city has a public transport system that can replace them.

Progress is being made. Hanoi opened its first metro line in 2021, and several more are planned. The bus network has been improved, and there are now electric buses on some routes. But the metro system is still small, and many people find buses slow and inconvenient.

In my view, there is no single solution. A sensible approach would combine several measures: building more metro lines as quickly as possible, making buses faster with special bus lanes, encouraging electric motorbikes, and creating more pedestrian streets. Above all, the government needs to involve local people in the decisions, rather than simply telling them what to do. A transport system only works if people actually want to use it.`,
    items: [
      { t: 'gap', q: 'Hanoi has more than ___ million motorbikes.', a: ['seven', '7'] },
      { t: 'mcq', q: 'What is the controversial proposal?', o: ['banning cars', 'banning motorbikes from the city centre by 2030', 'closing the metro', 'building more roads'], a: 1 },
      { t: 'mcq', q: 'Which cities do supporters point to?', o: ['Bangkok and Jakarta', 'Singapore and Seoul', 'London and Paris', 'Tokyo and Beijing'], a: 1 },
      { t: 'mcq', q: 'Why do critics think a ban would be unfair?', o: ['Motorbikes are expensive.', 'Many people rely on motorbikes to make a living.', 'Buses are too fast.', 'Tourists like motorbikes.'], a: 1 },
      { t: 'gap', q: 'Hanoi opened its first metro line in ___.', a: ['2021'] },
      { t: 'tf', q: 'The writer believes there is one perfect solution.', a: 'F' },
      { t: 'mcq', q: 'What does the writer say is most important?', o: ['banning all vehicles', 'involving local people in decisions', 'building more car parks', 'raising petrol prices'], a: 1 },
    ],
  },
  {
    title: 'Plastic: whose problem is it?',
    level: 'Khó · ~430 từ · IELTS',
    text: `Every minute, the equivalent of a rubbish truck full of plastic is dumped into the world's oceans. Plastic has been found in the deepest ocean trenches, in Arctic ice and even inside the human body. There is little doubt that plastic pollution is one of the most serious environmental problems of our time. What is far less clear is who should be responsible for solving it.

For many years, the dominant message has been that the solution lies with individuals. Consumers have been encouraged to carry reusable bags, refuse plastic straws and recycle their waste carefully. These actions are not meaningless: when millions of people change their habits, the effect can be significant, and personal choices can send a message to businesses about what customers want. In several countries, small charges on plastic bags have reduced their use by more than eighty percent.

However, critics argue that focusing on individuals hides the real cause of the problem. Only around nine percent of all the plastic ever produced has been recycled; most of the rest has ended up in landfill, been burned, or polluted the environment. Much of the packaging we buy simply cannot be recycled, no matter how carefully we sort it. Some researchers point out that the idea of individual responsibility has been actively promoted by the very companies that produce plastic, as a way of avoiding stricter rules. In their view, asking consumers to solve the problem is like asking people to empty a bath while the tap is still running.

For this reason, many experts believe that governments and businesses must take the lead. Possible measures include banning unnecessary single-use plastics, requiring producers to pay for the collection and recycling of their packaging, and investing in alternative materials. A global treaty on plastic pollution, which is currently being negotiated, could set common rules for all countries. Developing countries, which often lack proper waste management systems, will need financial support to deal with both their own waste and the plastic that is exported to them from richer nations.

In reality, the most effective approach is likely to involve everyone. Governments can create the rules, businesses can redesign their products, and individuals can make responsible choices and put pressure on both. What seems certain is that recycling alone will not be enough. The most sensible solution to plastic waste is to produce much less of it in the first place.`,
    items: [
      { t: 'mcq', q: 'Where has plastic been found, according to the text?', o: ['only on beaches', 'in deep ocean trenches, Arctic ice and the human body', 'only in rivers', 'only in cities'], a: 1 },
      { t: 'tf', q: 'The writer says individual actions are completely meaningless.', a: 'F' },
      { t: 'gap', q: 'Plastic bag charges have reduced use by more than ___ percent in some countries.', a: ['eighty', '80'] },
      { t: 'gap', q: 'Only around ___ percent of all plastic ever produced has been recycled.', a: ['nine', '9'] },
      { t: 'mcq', q: 'What does the “bath” comparison mean?', o: ['Recycling is easy.', 'Individuals can’t solve the problem while production continues.', 'We should use less water.', 'Plastic is useful in bathrooms.'], a: 1 },
      { t: 'mcq', q: 'Which measure is NOT mentioned for governments and businesses?', o: ['banning single-use plastics', 'making producers pay for recycling', 'investing in alternative materials', 'closing all factories'], a: 3 },
      { t: 'tf', q: 'Developing countries may need financial support.', a: 'T' },
      { t: 'mcq', q: 'What is the writer’s final conclusion?', o: ['Recycling alone will solve the problem.', 'We should produce much less plastic in the first place.', 'Only individuals are responsible.', 'Plastic is not a serious problem.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'School announcement: Lost property',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Thông báo ở trường về đồ thất lạc.',
    rate: '-15%',
    voices: { N: 'en-GB-ThomasNeural' },
    script: [
      ['N', "Good morning, everyone. This is an announcement about lost property."],
      ['N', "The lost property box is in a mess. At the moment, there are twenty-three jumpers, eleven water bottles and four mobile phones in it!"],
      ['N', "If you have lost something, please come to the school office before Friday. The office is open from eight until four."],
      ['N', "On Friday afternoon, we will give everything that is left to a local charity. So please check the box this week."],
      ['N', "And remember – write your name on your things. Then we can return them to you quickly. Thank you."],
    ],
    items: [
      { t: 'gap', q: 'There are ___ jumpers in the box.', a: ['twenty-three', '23', 'twenty three'] },
      { t: 'gap', q: 'There are ___ mobile phones in the box.', a: ['four', '4'] },
      { t: 'mcq', q: 'When is the office open?', o: ['8 to 4', '9 to 5', '8 to 3', '7 to 4'], a: 0 },
      { t: 'mcq', q: 'What will happen on Friday afternoon?', o: ['Things will be thrown away.', 'Things will go to a charity.', 'Things will be sold.', 'The office will close.'], a: 1 },
      { t: 'tf', q: 'Students should write their names on their things.', a: 'T' },
    ],
    dictation: ['The lost property box is in a mess.', 'Please write your name on your things.'],
  },
  {
    title: 'Conversation: Sharing out the housework',
    level: '2 · Dễ · 2 giọng',
    desc: 'Hai người bạn cùng phòng chia việc nhà.',
    rate: '-5%',
    voices: { Lucy: 'en-GB-SoniaNeural', Ben: 'en-US-GuyNeural' },
    script: [
      ['Lucy', "Ben, we need to talk. The flat is in a terrible mess, and I'm doing all the cleaning."],
      ['Ben', "Sorry, Lucy. I've been under a lot of pressure at work. But you're right, it's not fair."],
      ['Lucy', "Why don't we share out the jobs? Then we both know what to do."],
      ['Ben', "Good idea. I'll do the washing-up and take the rubbish out. I don't mind those."],
      ['Lucy', "OK. Then I'll clean the bathroom and the kitchen. What about the shopping?"],
      ['Ben', "Let's take turns – one week each. Oh, and we've run out of milk again."],
      ['Lucy', "That's another thing! Can you please put things back in the fridge when you've finished with them?"],
      ['Ben', "Fair enough. Let's write a list and put it up on the fridge, so we don't forget."],
      ['Lucy', "Perfect. I'm glad we sorted that out."],
    ],
    items: [
      { t: 'mcq', q: 'What is Lucy’s problem?', o: ['Ben is noisy.', 'She is doing all the cleaning.', 'The rent is too high.', 'Ben never cooks.'], a: 1 },
      { t: 'mcq', q: 'Why hasn’t Ben helped?', o: ['He was ill.', 'He has been under pressure at work.', 'He was on holiday.', 'He doesn’t like cleaning.'], a: 1 },
      { t: 'mcq', q: 'Which jobs will Ben do?', o: ['bathroom and kitchen', 'washing-up and rubbish', 'shopping only', 'cooking'], a: 1 },
      { t: 'gap', q: 'They will take turns doing the shopping, one ___ each.', a: ['week'] },
      { t: 'gap', q: 'They have run out of ___.', a: ['milk'] },
      { t: 'mcq', q: 'Where will they put the list?', o: ['on the door', 'on the fridge', 'on the wall', 'on the table'], a: 1 },
    ],
    dictation: ["Why don't we share out the jobs?", "I'm glad we sorted that out."],
  },
  {
    title: 'Talk: How to avoid online scams',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Cảnh sát hướng dẫn cách tránh lừa đảo trên mạng.',
    rate: '+0%',
    voices: { Officer: 'en-AU-WilliamNeural' },
    script: [
      ['Officer', "Good afternoon. I'm Officer Grant, and I investigate online fraud. Last year, the number of scams reported in this area increased by forty percent, so I'd like to give you some advice."],
      ['Officer', "The first thing to watch out for is messages that create pressure. Scammers often claim that your bank account is in danger, or that you've won a prize that you must collect today. Real banks never ask you to act immediately."],
      ['Officer', "Second, never give your password or bank details to anyone by phone, email or text – not even if they pretend to be from your bank or from the police."],
      ['Officer', "Third, be careful with links. If you're not sure about a message, don't click on it. Contact the company directly using the number on their official website."],
      ['Officer', "And finally, if something seems too good to be true, it probably is. If you think you've been a victim, don't feel ashamed – it happens to clever people too. Report it to us as soon as possible. The sooner we know, the more likely we are to sort it out."],
    ],
    items: [
      { t: 'gap', q: 'Scams increased by ___ percent last year.', a: ['forty', '40'] },
      { t: 'mcq', q: 'What do scammers often do?', o: ['create pressure', 'send letters', 'visit your home', 'ask for advice'], a: 0 },
      { t: 'tf', q: 'Real banks sometimes ask you to act immediately.', a: 'F' },
      { t: 'mcq', q: 'What should you do if you’re not sure about a message?', o: ['click the link', 'contact the company using the official number', 'reply quickly', 'forward it to friends'], a: 1 },
      { t: 'mcq', q: 'What does the officer say about victims?', o: ['They are stupid.', 'They shouldn’t feel ashamed.', 'They should keep quiet.', 'They can’t get help.'], a: 1 },
    ],
    dictation: ['If something seems too good to be true, it probably is.', 'Report it to us as soon as possible.'],
  },
  {
    title: 'Radio interview: Solving the housing problem',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn chuyên gia về vấn đề nhà ở cho người trẻ.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-LibbyNeural', Daniel: 'en-GB-RyanNeural' },
    script: [
      ['Presenter', "In many cities, young people simply can't afford to buy a home. Daniel Carter is an economist who specialises in housing. Daniel, what's the cause of the problem?"],
      ['Daniel', "Mainly, we haven't built enough homes. Cities have grown very fast, but the number of new homes hasn't kept up. When demand is higher than supply, prices go up. In some cities, house prices are now more than fifteen times the average salary."],
      ['Presenter', 'So the solution is simply to build more?'],
      ['Daniel', "That's part of it, but it isn't that simple. If we build expensive flats that only rich people can buy, it doesn't help young people at all. We need affordable homes, and we need them near jobs and public transport."],
      ['Presenter', 'What else can governments do?'],
      ['Daniel', "Several things. Some countries have had success with rent controls, which limit how much rents can rise each year. Others build public housing – Singapore is the famous example, where around eighty percent of people live in government-built flats. Taxes on empty homes can also encourage owners to rent them out."],
      ['Presenter', 'Are there any disadvantages to these ideas?'],
      ['Daniel', "Of course. Strict rent controls can discourage people from building new homes to rent. And public housing is expensive for governments. There's no ideal solution – but doing nothing is the worst option of all."],
    ],
    items: [
      { t: 'mcq', q: 'According to Daniel, what is the main cause of the problem?', o: ['too many homes', 'not enough homes have been built', 'high salaries', 'low taxes'], a: 1 },
      { t: 'gap', q: 'In some cities, house prices are more than ___ times the average salary.', a: ['fifteen', '15'] },
      { t: 'tf', q: 'Daniel thinks building expensive flats will help young people.', a: 'F' },
      { t: 'gap', q: 'In Singapore, around ___ percent of people live in government-built flats.', a: ['eighty', '80'] },
      { t: 'mcq', q: 'What is a disadvantage of strict rent controls?', o: ['They increase rents.', 'They can discourage people from building homes to rent.', 'They are illegal.', 'They make homes empty.'], a: 1 },
      { t: 'mcq', q: 'What does Daniel say is the worst option?', o: ['public housing', 'rent controls', 'doing nothing', 'building more'], a: 2 },
    ],
    dictation: ['When demand is higher than supply, prices go up.', 'Doing nothing is the worst option of all.'],
  },
  {
    title: 'Discussion: Can technology solve our problems?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3: công nghệ có giải quyết được các vấn đề của xã hội?',
    rate: '+5%',
    voices: { Host: 'en-US-JennyNeural', Kevin: 'en-US-GuyNeural', Laura: 'en-GB-SoniaNeural' },
    script: [
      ['Host', "Today's question: can technology solve the world's biggest problems, like climate change, disease and poverty? Kevin, you work in the tech industry. What do you think?"],
      ['Kevin', "I'm an optimist. Look at what technology has already achieved. Solar power is now cheaper than coal in most countries. Vaccines were developed in less than a year during the pandemic. Mobile phones have given millions of people in poor countries access to banking. I believe technology is our best hope."],
      ['Laura', "I don't doubt that technology can help. But I think we rely on it too much. Many of our problems are actually caused by technology – pollution, for example, or the effects of social media on mental health. New inventions often solve one problem and create another."],
      ['Kevin', "That's true, but the answer is better technology, not less technology. Electric cars are solving the problems that petrol cars created."],
      ['Laura', "Partly. But electric cars still cause traffic jams, and the batteries need materials that are mined in terrible conditions. Sometimes the solution isn't a new machine – it's changing our behaviour. Driving less, consuming less."],
      ['Host', "So what's more important – new technology, or changing how we live?"],
      ['Laura', "In my view, we need both. But we shouldn't assume that some future invention will save us, so we don't have to change anything now."],
      ['Kevin', "I'd agree with that. Technology gives us tools, but people and governments have to decide how to use them."],
    ],
    items: [
      { t: 'mcq', q: 'How does Kevin describe himself?', o: ['a pessimist', 'an optimist', 'a scientist', 'a politician'], a: 1 },
      { t: 'mcq', q: 'Which example does Kevin NOT give?', o: ['solar power', 'vaccines', 'mobile banking', 'space travel'], a: 3 },
      { t: 'tf', q: 'Laura thinks technology can’t help at all.', a: 'F' },
      { t: 'mcq', q: 'According to Laura, what problems are caused by technology?', o: ['pollution and social media effects', 'disease and poverty', 'traffic only', 'unemployment only'], a: 0 },
      { t: 'mcq', q: 'What problem with electric cars does Laura mention?', o: ['They are slow.', 'Battery materials are mined in terrible conditions.', 'They are too cheap.', 'They use petrol.'], a: 1 },
      { t: 'tf', q: 'At the end, Kevin partly agrees with Laura.', a: 'T' },
    ],
    dictation: ['New inventions often solve one problem and create another.', 'Technology gives us tools.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: assume, cause, complain, convince, criticise, deny, encourage, investigate, pretend, refuse, rumour, warn.',
    items: [
      { t: 'gap', q: 'I ___ you knew about the meeting – sorry!', a: ['assumed'] },
      { t: 'gap', q: 'Traffic is the main ___ of air pollution.', a: ['cause'] },
      { t: 'gap', q: 'The neighbours ___ about the noise.', a: ['complained'] },
      { t: 'gap', q: 'I finally ___ my parents to let me go.', a: ['convinced'] },
      { t: 'gap', q: 'The government was ___ for doing nothing.', a: ['criticised', 'criticized'] },
      { t: 'gap', q: 'He ___ breaking the window, but I saw him do it.', a: ['denied'] },
      { t: 'gap', q: 'My teacher ___ me to enter the competition.', a: ['encouraged'] },
      { t: 'gap', q: 'The police are ___ the accident.', a: ['investigating'] },
      { t: 'gap', q: 'She ___ to be ill so she didn’t have to go to school.', a: ['pretended'] },
      { t: 'gap', q: 'He ___ to help us.', a: ['refused'] },
      { t: 'gap', q: 'There’s a ___ that our teacher is leaving.', a: ['rumour', 'rumor'] },
      { t: 'gap', q: 'I ___ you not to touch it!', a: ['warned'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: hang up, pick up, put back, run out of, share out, sort out, watch out, work out (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: '___ your clothes – don’t leave them on the floor!', a: ['Hang up', 'hang up'] },
      { t: 'gap', q: 'Please ___ your toys.', a: ['pick up'] },
      { t: 'gap', q: '___ the book on the shelf when you’ve finished.', a: ['Put back', 'put back'] },
      { t: 'gap', q: 'We’ve ___ milk. Can you buy some?', a: ['run out of'] },
      { t: 'gap', q: 'Let’s ___ the work so it’s fair.', a: ['share out'] },
      { t: 'gap', q: 'Don’t worry, I’ll ___ the problem.', a: ['sort out'] },
      { t: 'gap', q: '___! There’s a car coming!', a: ['Watch out', 'watch out'] },
      { t: 'gap', q: 'I can’t ___ how to fix it.', a: ['work out'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'I deleted the file ___ mistake.', o: ['by', 'in', 'on'], a: 0 },
      { t: 'mcq', q: 'You’ll be ___ trouble if Mum finds out!', o: ['on', 'in', 'at'], a: 1 },
      { t: 'mcq', q: 'Students are ___ a lot of pressure.', o: ['under', 'in', 'on'], a: 0 },
      { t: 'mcq', q: '___ my view, the government should do more.', o: ['On', 'In', 'At'], a: 1 },
      { t: 'mcq', q: 'The company is in danger ___ closing.', o: ['to', 'of', 'for'], a: 1 },
      { t: 'mcq', q: 'How do you deal ___ stress?', o: ['with', 'about', 'on'], a: 0 },
      { t: 'mcq', q: 'You can always rely ___ me.', o: ['in', 'on', 'to'], a: 1 },
      { t: 'mcq', q: 'She insisted ___ paying for dinner.', o: ['on', 'to', 'for'], a: 0 },
      { t: 'mcq', q: 'My parents don’t approve ___ my plans.', o: ['about', 'of', 'with'], a: 1 },
      { t: 'mcq', q: 'There is no easy solution ___ this problem.', o: ['for', 'of', 'to'], a: 2 },
      { t: 'mcq', q: 'The doctor advised ___ travelling.', o: ['against', 'from', 'off'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'I ___ you to see a doctor. (ADVICE)', a: ['advise'] },
      { t: 'gap', q: 'I was ___ by the instructions. (CONFUSE)', a: ['confused'] },
      { t: 'gap', q: 'Everyone came, with the ___ of Tom. (EXCEPT)', a: ['exception'] },
      { t: 'gap', q: 'Thanks, that was really ___. (HELP)', a: ['helpful'] },
      { t: 'gap', q: '___, nobody was hurt. (LUCK)', a: ['Luckily', 'luckily'] },
      { t: 'gap', q: 'Walking is ___ to driving for short trips. (PREFER)', a: ['preferable'] },
      { t: 'gap', q: 'The report made several ___. (RECOMMEND)', a: ['recommendations'] },
      { t: 'gap', q: 'His ___ to help surprised everyone. (REFUSE)', a: ['refusal'] },
      { t: 'gap', q: 'We need to find a ___ to this problem. (SOLVE)', a: ['solution'] },
      { t: 'gap', q: 'Can I make a ___? (SUGGEST)', a: ['suggestion'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['spread', 'a rumour'], ['find', 'a solution'], ['a serious', 'problem'], ['make', 'a suggestion'], ['spare', 'time'], ['on', 'purpose'], ['have', 'an accident'], ['as a', 'result']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “praise”:', o: ['criticise', 'encourage', 'convince', 'claim'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “positive”:', o: ['negative', 'serious', 'sensible', 'ideal'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “sort out”:', o: ['solve', 'cause', 'deny', 'warn'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “by accident”:', o: ['on purpose', 'in trouble', 'in a mess', 'under pressure'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “rely on”:', o: ['depend on', 'insist on', 'believe in', 'deal with'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “deny”:', o: ['admit', 'refuse', 'doubt', 'claim'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “convince”:', o: ['persuade', 'pretend', 'complain', 'assume'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Đừng lo, tôi sẽ giải quyết chuyện đó.', ref: "Don't worry, I'll sort it out.", focus: 'sort out' },
      { t: 'tr', vi: 'Chúng ta hết thời gian rồi.', ref: "We've run out of time.", focus: 'run out of' },
      { t: 'tr', vi: 'Tôi vô tình xóa mất tập tin.', ref: 'I deleted the file by mistake.', focus: 'by mistake' },
      { t: 'tr', vi: 'Học sinh ngày nay chịu nhiều áp lực phải đạt điểm cao.', ref: 'Students today are under a lot of pressure to get high marks.', focus: 'under pressure' },
      { t: 'tr', vi: 'Theo quan điểm của tôi, chính phủ nên đầu tư nhiều hơn vào giao thông công cộng.', ref: 'In my view, the government should invest more in public transport.', focus: 'in my view (IELTS)' },
      { t: 'tr', vi: 'Một lợi thế của việc sống ở thành phố là có nhiều cơ hội việc làm.', ref: 'One advantage of living in a city is that there are more job opportunities.', focus: 'an advantage of (IELTS)' },
      { t: 'tr', vi: 'Không có giải pháp dễ dàng nào cho vấn đề ô nhiễm nhựa.', ref: 'There is no easy solution to the problem of plastic pollution.', focus: 'a solution to' },
      { t: 'tr', vi: 'Mạng xã hội có thể có tác động tiêu cực đến sức khỏe tinh thần của thanh thiếu niên.', ref: "Social media can have a negative effect on teenagers' mental health.", focus: 'negative effect on (IELTS Writing)' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'How do you usually deal with problems in your daily life?' },
  { part: 'Part 1', q: 'Who do you ask for advice when you have a problem?' },
  { part: 'Part 1', q: 'Do you often feel under pressure?' },
  { part: 'Part 1', q: 'Is your room usually tidy or in a mess?' },
  { part: 'Part 2', q: 'Describe a problem you solved.', cue: ['what the problem was', 'how you solved it', 'whether anyone helped you', 'and explain how you felt after solving it'] },
  { part: 'Part 3', q: 'What are the biggest problems in cities in your country?' },
  { part: 'Part 3', q: 'Should governments or individuals be responsible for solving environmental problems?' },
  { part: 'Part 3', q: 'Can technology solve most of the world’s problems?' },
  { part: 'Part 3', q: 'Why do rumours and fake news spread so quickly today?' },
];

export default {
  id: 'b1-u42',
  book: 'b1',
  no: 42,
  title: 'Problems and solutions',
  titleVi: 'Vấn đề & giải pháp',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
