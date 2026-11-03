// Unit 30 – Vocabulary: Body and lifestyle (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u30-vocab.js';

const reading = [
  {
    title: 'My grandmother’s secret',
    level: 'Dễ · ~180 từ',
    text: `My grandmother is eighty-five, but she still goes to the market by bike every morning. People in our neighbourhood often ask her what her secret is.

"There's no secret," she laughs. "I just follow a few simple rules."

First, she eats three meals a day at the same time, and she never eats too much. Her meals contain lots of vegetables, rice and fish, and very little meat. She rarely eats salty or fried food, and she has never drunk a fizzy drink in her life!

Second, she stays active. Every morning she does twenty minutes of exercise in the park with her friends, and she spends the afternoon working in her garden.

Third, she goes to bed early and gets up early. She sleeps for about eight hours every night.

Finally, she says, "Don't worry too much." When she has a problem, she talks about it with her family instead of keeping it inside.

I'm not sure I can follow all her rules – I love fried chicken too much! But I'm trying to cut down on fizzy drinks and go to bed earlier.`,
    items: [
      { t: 'gap', q: 'The grandmother is ___ years old.', a: ['eighty-five', '85', 'eighty five'] },
      { t: 'mcq', q: 'How does she go to the market?', o: ['on foot', 'by bike', 'by bus', 'by motorbike'], a: 1 },
      { t: 'tf', q: 'She eats a lot of meat.', a: 'F' },
      { t: 'gap', q: 'She exercises in the park for ___ minutes every morning.', a: ['twenty', '20'] },
      { t: 'mcq', q: 'What does she do when she has a problem?', o: ['keeps it inside', 'talks with her family', 'goes for a walk', 'goes to sleep'], a: 1 },
      { t: 'mcq', q: 'What is the writer trying to do?', o: ['eat more fried chicken', 'cut down on fizzy drinks and sleep earlier', 'go to the market', 'start gardening'], a: 1 },
    ],
  },
  {
    title: 'Five myths about healthy eating',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `There is so much advice about food online that it's hard to know what to believe. Here are five common myths – and the truth.

Myth 1: "You should never eat after 8 p.m." The time you eat matters much less than what and how much you eat. However, eating a big meal just before bed can affect your sleep.

Myth 2: "All fat is bad for you." Your body needs some fat to work properly. Fats found in fish, nuts and avocados are actually good for your heart. It is better to limit fried food and processed snacks.

Myth 3: "Fresh fruit juice is as healthy as fruit." Juice contains the vitamins of fruit, but much less fibre, and a lot of sugar. A glass of orange juice can contain the sugar of four or five oranges! It's better to eat the whole fruit.

Myth 4: "Skipping breakfast helps you lose weight." For some people it may, but many people who skip breakfast eat more later in the day, especially unhealthy snacks.

Myth 5: "Vitamin pills are a good replacement for healthy food." Most people who eat a balanced diet get all the vitamins they need from food. Pills can help people with certain medical problems, but they cannot replace vegetables and fruit.

The truth is that there is no magic diet. Experts agree on a few simple ideas: eat a variety of foods, mostly plants; cut down on sugar and salt; drink plenty of water; and enjoy your meals slowly.`,
    items: [
      { t: 'tf', q: 'According to the text, the time you eat matters more than what you eat.', a: 'F' },
      { t: 'mcq', q: 'Which fats are good for your heart?', o: ['fats in fried food', 'fats in fish, nuts and avocados', 'fats in snacks', 'all fats'], a: 1 },
      { t: 'mcq', q: 'What is the problem with fruit juice?', o: ['It has no vitamins.', 'It has less fibre and a lot of sugar.', 'It is too expensive.', 'It causes infections.'], a: 1 },
      { t: 'tf', q: 'Many people who skip breakfast eat more later in the day.', a: 'T' },
      { t: 'tf', q: 'Vitamin pills can completely replace vegetables and fruit.', a: 'F' },
      { t: 'mcq', q: 'Which is NOT one of the experts’ simple ideas?', o: ['eat a variety of foods', 'cut down on sugar and salt', 'drink plenty of water', 'never eat fat'], a: 3 },
    ],
  },
  {
    title: 'Why we need to sleep',
    level: 'Trung bình · ~320 từ',
    text: `We spend around a third of our lives asleep. For a long time, scientists did not fully understand why. Today, research shows that sleep is not just rest: it is one of the most important things we can do for our bodies and our brains.

While we sleep, our brains are surprisingly busy. They organise the information we have learnt during the day, moving important memories into long-term storage. This is why students who sleep well after studying tend to remember more than those who stay up all night. The brain also seems to "clean" itself during sleep, removing waste products that build up while we are awake.

Sleep affects our bodies too. It helps muscles recover after exercise, supports the immune system that fights infection, and controls the hormones that tell us when we are hungry or full. People who regularly sleep less than six hours a night are more likely to put on weight, catch colds and suffer from heart problems.

So how much sleep do we need? Most adults need between seven and nine hours a night, while teenagers need even more – around eight to ten. Yet surveys suggest that many teenagers sleep far less, often because they use their phones late at night.

Experts offer some simple advice for better sleep. Go to bed and get up at the same time every day, even at weekends. Avoid coffee and energy drinks in the afternoon and evening. Keep your bedroom dark, quiet and cool. Most importantly, put your phone away at least an hour before bed. The light from screens tells your brain it is still daytime, and the messages and videos keep your mind active.

It may seem that sleeping less gives you more time to study, work or have fun. In fact, the opposite is true: a well-rested brain works faster, learns better and makes fewer mistakes.`,
    items: [
      { t: 'gap', q: 'We spend around a ___ of our lives asleep.', a: ['third'] },
      { t: 'mcq', q: 'What does the brain do during sleep?', o: ['nothing', 'organises information and moves memories to long-term storage', 'forgets everything', 'produces waste'], a: 1 },
      { t: 'tf', q: 'Students who stay up all night remember more.', a: 'F' },
      { t: 'mcq', q: 'Which is NOT mentioned as an effect of too little sleep?', o: ['putting on weight', 'catching colds', 'heart problems', 'better memory'], a: 3 },
      { t: 'mcq', q: 'How much sleep do teenagers need?', o: ['5–6 hours', '6–7 hours', '8–10 hours', '11–12 hours'], a: 2 },
      { t: 'mcq', q: 'Why should you put your phone away before bed?', o: ['to save battery', 'screen light and messages keep your brain active', 'phones are noisy', 'to avoid infection'], a: 1 },
      { t: 'tf', q: 'The writer thinks sleeping less helps you achieve more.', a: 'F' },
    ],
  },
  {
    title: 'Getting back on my feet',
    level: 'Trung bình–Khó · ~370 từ',
    text: `Two years ago, Nguyen Thi Mai was a promising young runner. She trained six days a week and had just won a regional championship. Then, during a race in the rain, she slipped and fell down. "I heard a terrible sound in my knee," she remembers. "The pain was so bad I couldn't stand up."

At the hospital, doctors told her she had a serious injury and would need an operation. "The first thing I asked was: will I be able to run again? The doctor said it was possible, but it would take a long time and a lot of hard work."

After the operation, Mai spent three weeks unable to walk without help. The physical pain was difficult, but the mental side was even harder. "Running was my whole life. Without it, I didn't know who I was. I stopped going out and I put on weight because I was eating a lot of junk food." For a while, she ignored her physiotherapist's exercises because she didn't believe they would make any difference.

The turning point came when she met another patient at the clinic, an older man who was recovering from a stroke. "He was learning to walk again, at sixty-five, and he was always smiling. He told me, 'Every small step is a victory.' I felt ashamed that I had given up so easily."

From then on, Mai followed her treatment carefully. She did her exercises every day, started cooking healthy meals and cut down on sugar. When she was allowed to, she began swimming to build up her strength without putting too much pressure on her knee. She also talked to a sports psychologist, who helped her deal with her fear of getting injured again.

Eighteen months after the accident, Mai ran her first race again. She didn't win – she finished in twelfth place – but she cried when she crossed the finish line. "It was the best race of my life," she says.

Today Mai is training to become a physiotherapist herself. "I want to help people the way others helped me. Recovery isn't only about the body. It's about believing that you can get better."`,
    items: [
      { t: 'mcq', q: 'How did Mai get injured?', o: ['in a car accident', 'she slipped and fell during a race in the rain', 'at the gym', 'playing football'], a: 1 },
      { t: 'mcq', q: 'What did Mai first ask the doctor?', o: ['how long she would stay in hospital', 'if she would be able to run again', 'how much the operation cost', 'when she could go home'], a: 1 },
      { t: 'tf', q: 'For Mai, the mental side of recovery was easier than the physical side.', a: 'F' },
      { t: 'mcq', q: 'Who changed Mai’s attitude?', o: ['her coach', 'an older patient recovering from a stroke', 'her mother', 'a famous runner'], a: 1 },
      { t: 'mcq', q: 'Why did Mai start swimming?', o: ['to lose weight quickly', 'to build strength without too much pressure on her knee', 'because she hated running', 'for a competition'], a: 1 },
      { t: 'gap', q: 'Mai ran her first race again ___ months after the accident.', a: ['eighteen', '18'] },
      { t: 'tf', q: 'Mai won her first race after the injury.', a: 'F', ex: 'She finished twelfth.' },
      { t: 'mcq', q: 'What is Mai training to become?', o: ['a doctor', 'a physiotherapist', 'a coach', 'a psychologist'], a: 1 },
    ],
  },
  {
    title: 'The sugar problem',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `A hundred years ago, sugar was a luxury. Today, it is everywhere – not only in sweets, cakes and fizzy drinks, but also in bread, sauces, yoghurts and even foods that do not taste sweet at all. Many people consume far more sugar than they realise, and health experts are increasingly worried about the consequences.

The World Health Organization recommends that adults should limit "free sugars" – sugars added to food or found in honey and fruit juice – to less than ten per cent of their daily energy, and ideally less than five per cent. That is about six teaspoons a day. Yet a single can of a popular fizzy drink can contain around nine teaspoons. In many countries, average consumption is two or three times the recommended level.

Too much sugar has been linked to a number of serious health problems. The most obvious is weight gain: sugary foods and drinks contain a lot of energy but do not make us feel full, so we tend to eat more. Being seriously overweight increases the risk of type 2 diabetes, heart disease and some types of cancer. Sugar is also the main cause of tooth decay, which remains one of the most common diseases in the world, particularly among children.

Why is it so difficult to cut down? Part of the answer is biological. Sweet foods activate the brain's reward system, producing a feeling of pleasure that makes us want more. Part of it is commercial: food companies know that sugar makes products more attractive, and they spend huge amounts on advertising, often aimed at children. And part of it is simply habit. Many people grow up drinking sweet drinks with every meal.

Governments have started to respond. More than fifty countries have introduced a tax on sugary drinks. In the UK, the tax encouraged many companies to reduce the sugar in their products before it even began. Other measures include clearer labels, limits on advertising to children and healthier school meals.

Individuals can also make a difference with small changes: drinking water instead of fizzy drinks, reading labels, cooking at home more often and choosing whole fruit rather than juice. The goal is not to remove sugar completely – an occasional sweet treat is part of a balanced, enjoyable life – but to make it, once again, something special rather than something we eat without thinking.`,
    items: [
      { t: 'mcq', q: 'According to the text, sugar is now found…', o: ['only in sweets', 'in many foods, even ones that don’t taste sweet', 'only in drinks', 'mainly in fruit'], a: 1 },
      { t: 'gap', q: 'The WHO ideal limit is about ___ teaspoons of free sugars a day.', a: ['six', '6'] },
      { t: 'gap', q: 'A can of fizzy drink can contain around ___ teaspoons of sugar.', a: ['nine', '9'] },
      { t: 'mcq', q: 'Why do sugary foods lead to weight gain?', o: ['They contain vitamins.', 'They have a lot of energy but don’t make us feel full.', 'They are expensive.', 'They cause infections.'], a: 1 },
      { t: 'mcq', q: 'Which is NOT given as a reason why it is hard to cut down on sugar?', o: ['the brain’s reward system', 'advertising', 'habit', 'sugar is cheaper than water'], a: 3 },
      { t: 'tf', q: 'More than fifty countries have a tax on sugary drinks.', a: 'T' },
      { t: 'tf', q: 'In the UK, companies reduced sugar only after the tax began.', a: 'F', ex: '“before it even began”' },
      { t: 'mcq', q: 'What is the writer’s final message?', o: ['Remove sugar completely.', 'Make sugar something special again, not something we eat without thinking.', 'Sugar is harmless.', 'Only governments can help.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Doctor’s instructions',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Bác sĩ dặn dò bệnh nhân bị cúm. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-SoniaNeural' },
    script: [
      ['N', "OK, you've got flu, but don't worry, you'll get over it in about a week."],
      ['N', 'Take two of these pills three times a day, after meals. Don’t take them on an empty stomach.'],
      ['N', 'Drink plenty of water – at least two litres a day – and try to rest as much as possible. Stay at home for the next three days. Don’t go to work.'],
      ['N', "If your cough gets worse, or if you find it difficult to breathe, come back and see me immediately."],
      ['N', 'Oh, and no coffee for a few days. It will help you sleep better at night.'],
    ],
    items: [
      { t: 'gap', q: 'The patient will get over the flu in about a ___.', a: ['week'] },
      { t: 'gap', q: 'Take two pills ___ times a day.', a: ['three', '3'] },
      { t: 'mcq', q: 'When should the pills be taken?', o: ['before meals', 'after meals', 'at night only', 'in the morning'], a: 1 },
      { t: 'gap', q: 'Drink at least ___ litres of water a day.', a: ['two', '2'] },
      { t: 'gap', q: 'Stay at home for the next ___ days.', a: ['three', '3'] },
      { t: 'mcq', q: 'What should the patient avoid?', o: ['water', 'coffee', 'meals', 'sleep'], a: 1 },
    ],
    dictation: ['Take two of these pills three times a day.', 'Drink plenty of water and try to rest.', 'If your cough gets worse, come back and see me.'],
  },
  {
    title: 'Talk: How I got in shape',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một người kể về việc thay đổi lối sống để khỏe mạnh hơn.',
    rate: '-5%',
    voices: { N: 'en-US-GuyNeural' },
    script: [
      ['N', "Two years ago, I was really out of shape. I worked in an office all day, I ate fast food for lunch and I never did any exercise. I'd put on fifteen kilos since university."],
      ['N', "One day, I walked up three floors of stairs and I couldn't breathe. That was when I decided to change."],
      ['N', "I didn't go on a crazy diet. I just made small changes. I started cooking my own lunch and taking it to work. I cut down on fizzy drinks and drank water instead."],
      ['N', "I also started jogging. At first I could only run for five minutes, but I kept going, three times a week. Last month I ran my first half marathon!"],
      ['N', "I've lost twelve kilos, but the best thing is how I feel. I have more energy, I sleep better and I'm much happier."],
    ],
    items: [
      { t: 'gap', q: 'He had put on ___ kilos since university.', a: ['fifteen', '15'] },
      { t: 'mcq', q: 'What made him decide to change?', o: ['a doctor’s advice', 'he couldn’t breathe after walking up stairs', 'his wife', 'an advert'], a: 1 },
      { t: 'tf', q: 'He went on a strict diet.', a: 'F' },
      { t: 'mcq', q: 'How often did he go jogging?', o: ['every day', 'three times a week', 'once a week', 'at weekends'], a: 1 },
      { t: 'mcq', q: 'What did he do last month?', o: ['ran a half marathon', 'joined a gym', 'went on holiday', 'had an operation'], a: 0 },
      { t: 'gap', q: 'He has lost ___ kilos.', a: ['twelve', '12'] },
    ],
  },
  {
    title: 'Conversation: At the restaurant',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Một khách hàng gọi món và hỏi về dị ứng thực phẩm.',
    rate: '+0%',
    voices: { Waiter: 'en-GB-RyanNeural', Customer: 'en-GB-LibbyNeural' },
    script: [
      ['Waiter', "Good evening. Are you ready to order?"],
      ['Customer', "Almost. I just have a question first. I'm allergic to nuts. Does the chicken curry contain any?"],
      ['Waiter', "Let me check… yes, I'm afraid the curry sauce contains peanuts. But the grilled chicken with vegetables doesn't contain any nuts."],
      ['Customer', "Is it spicy?"],
      ['Waiter', "Not very. It's cooked with garlic, lemon and a little chilli. If you prefer, the chef can make it without chilli."],
      ['Customer', "No, a little chilli is fine. I'll have that, please. And could I have brown rice instead of chips?"],
      ['Waiter', "Of course. Anything to drink?"],
      ['Customer', "Just sparkling water, please. I'm trying to cut down on sugar."],
      ['Waiter', "Very good. And would you like to see the dessert menu later?"],
      ['Customer', "Maybe. If there's something without nuts!"],
      ['Waiter', "I'll make sure the chef knows about your allergy."],
    ],
    items: [
      { t: 'mcq', q: 'What is the customer allergic to?', o: ['seafood', 'nuts', 'milk', 'eggs'], a: 1 },
      { t: 'tf', q: 'The chicken curry is safe for her.', a: 'F' },
      { t: 'mcq', q: 'What does she order?', o: ['chicken curry', 'grilled chicken with vegetables', 'fish', 'pasta'], a: 1 },
      { t: 'mcq', q: 'What does she have instead of chips?', o: ['salad', 'brown rice', 'bread', 'noodles'], a: 1 },
      { t: 'mcq', q: 'Why does she order sparkling water?', o: ['She doesn’t like juice.', 'She is trying to cut down on sugar.', 'It is free.', 'She is allergic to cola.'], a: 1 },
      { t: 'tf', q: 'The waiter will tell the chef about her allergy.', a: 'T' },
    ],
    dictation: ["I'm allergic to nuts.", "I'm trying to cut down on sugar."],
  },
  {
    title: 'Radio interview: A nutritionist’s advice',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một chuyên gia dinh dưỡng về thói quen ăn uống của sinh viên.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Kate: 'en-AU-NatashaNeural' },
    script: [
      ['Presenter', "Today I'm joined by Kate Morgan, a nutritionist who works with university students. Kate, what are the biggest problems you see?"],
      ['Kate', "The biggest one is skipping meals, especially breakfast. Students stay up late, wake up just in time for class and rush out without eating. Then they're hungry by mid-morning and buy snacks that are full of sugar and salt."],
      ['Presenter', "Is cost a problem?"],
      ['Kate', "Definitely. Many students think healthy food is expensive, but in comparison with takeaway food, home cooking is actually much cheaper. A big pot of vegetable soup costs very little and can last for several meals."],
      ['Presenter', "What about energy drinks? They seem very popular."],
      ['Kate', "They're a real concern. Some students drink three or four a day during exams. They contain huge amounts of caffeine and sugar, which can affect sleep, cause headaches and make people feel anxious. Water, or a cup of green tea, is a much better choice."],
      ['Presenter', "So what's your top advice?"],
      ['Kate', "Plan ahead. On Sunday, spend an hour cooking two or three simple dishes for the week. Always have healthy snacks with you, like fruit or nuts, unless you're allergic, of course. And try to eat with other people. Students who share meals with friends tend to eat better and feel less lonely."],
      ['Presenter', "Kate Morgan, thank you."],
    ],
    items: [
      { t: 'mcq', q: 'What is the biggest problem Kate sees?', o: ['eating too much', 'skipping meals, especially breakfast', 'eating too much fruit', 'cooking too often'], a: 1 },
      { t: 'tf', q: 'Kate says home cooking is more expensive than takeaway food.', a: 'F' },
      { t: 'mcq', q: 'What can a pot of vegetable soup do?', o: ['last for several meals', 'replace water', 'cure flu', 'help you sleep'], a: 0 },
      { t: 'mcq', q: 'Which is NOT mentioned as an effect of energy drinks?', o: ['affecting sleep', 'headaches', 'anxiety', 'better memory'], a: 3 },
      { t: 'mcq', q: 'What does Kate recommend instead of energy drinks?', o: ['coffee', 'water or green tea', 'juice', 'cola'], a: 1 },
      { t: 'mcq', q: 'What is her top advice?', o: ['plan ahead and cook on Sunday', 'eat only once a day', 'take vitamin pills', 'go on a diet'], a: 0 },
      { t: 'tf', q: 'Kate says students who eat with friends tend to eat better.', a: 'T' },
    ],
  },
  {
    title: 'Discussion: Should unhealthy food be taxed?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về việc đánh thuế đồ ăn không lành mạnh.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', 'Dr Lee': 'en-US-AriaNeural', Tom: 'en-GB-ThomasNeural' },
    script: [
      ['Host', "Good evening. Many countries now tax sugary drinks. Some experts want to go further and tax other unhealthy foods, such as salty snacks and fast food. Is that a good idea? With me are Doctor Susan Lee, a public health expert, and Tom Baker, who runs a chain of small cafés. Susan?"],
      ['Dr Lee', "The evidence from sugar taxes is very encouraging. In several countries, people now buy significantly fewer sugary drinks, and many companies have reduced the sugar in their products. Obesity and diabetes cost health systems enormous amounts of money. A tax both changes behaviour and raises money that can be spent on prevention, for example free sports facilities or healthier school meals."],
      ['Host', "Tom, you're not convinced."],
      ['Tom', "My problem is that these taxes hit poorer families hardest. They spend a bigger part of their income on food, and they often live in areas where healthy food is harder to find. So you're making life more expensive for the people who are already struggling."],
      ['Dr Lee', "That's an important point. But poorer families also suffer most from diet-related illness. If the money is used to make healthy food cheaper, for instance by reducing the price of fruit and vegetables, the overall effect can actually be positive for them."],
      ['Tom', "If that really happened, I'd be more open to it. But too often the money just disappears into the general budget. I'd also say education matters more than prices. People need to know how to cook simple, healthy meals."],
      ['Dr Lee', "I agree education is essential, but on its own it isn't enough. Most people already know fizzy drinks aren't healthy. Prices, advertising and what's available in shops have a much bigger influence on what we actually buy."],
      ['Host', "So, briefly: tax unhealthy food or not?"],
      ['Tom', "Only if every penny goes to making healthy food cheaper, plus much better education."],
      ['Dr Lee', "Yes, combined with support for poorer families. It's one of the most effective tools we have."],
      ['Host', "Susan Lee and Tom Baker, thank you both."],
    ],
    items: [
      { t: 'mcq', q: 'According to Dr Lee, what has happened in countries with sugar taxes?', o: ['People buy more sugary drinks.', 'People buy fewer sugary drinks and companies reduce sugar.', 'Nothing has changed.', 'Prices of fruit have increased.'], a: 1 },
      { t: 'mcq', q: 'How does Dr Lee suggest the tax money could be used?', o: ['to build roads', 'for prevention like sports facilities and healthier school meals', 'to pay doctors', 'to advertise fast food'], a: 1 },
      { t: 'mcq', q: 'What is Tom’s main concern?', o: ['Taxes hit poorer families hardest.', 'His cafés will close.', 'Taxes are too low.', 'People don’t like vegetables.'], a: 0 },
      { t: 'tf', q: 'Dr Lee says poorer families suffer most from diet-related illness.', a: 'T' },
      { t: 'mcq', q: 'What does Tom think matters more than prices?', o: ['advertising', 'education', 'taxes', 'restaurants'], a: 1 },
      { t: 'tf', q: 'Dr Lee thinks education alone is enough.', a: 'F' },
      { t: 'mcq', q: 'What is Tom’s final position?', o: ['No tax at all.', 'Only if the money makes healthy food cheaper, plus education.', 'Tax everything.', 'He agrees completely with Dr Lee.'], a: 1 },
    ],
    dictation: ['Education is essential, but on its own it is not enough.', 'It is one of the most effective tools we have.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: affect, benefit, contain, cure, ingredient, injury, limit, recover, suffer, treatment',
    items: [
      { t: 'gap', q: 'Lack of sleep can ___ your memory.', a: ['affect'] },
      { t: 'gap', q: 'Regular exercise has many ___.', a: ['benefits'] },
      { t: 'gap', q: 'This drink ___ a lot of sugar.', a: ['contains'] },
      { t: 'gap', q: 'Scientists are still looking for a ___ for cancer.', a: ['cure'] },
      { t: 'gap', q: 'What are the main ___ of this dish?', a: ['ingredients'] },
      { t: 'gap', q: 'He missed the season because of a knee ___.', a: ['injury'] },
      { t: 'gap', q: 'Try to ___ the amount of salt you eat.', a: ['limit'] },
      { t: 'gap', q: 'She is ___ from a serious illness.', a: ['recovering'] },
      { t: 'gap', q: 'Many students ___ from stress during exams.', a: ['suffer'] },
      { t: 'gap', q: 'He is receiving ___ for his back problem.', a: ['treatment'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: cut down on, fall down, get over, go off, lie down, put on, sit down, stand up (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'I’m trying to ___ coffee.', a: ['cut down on'] },
      { t: 'gap', q: 'It took me two weeks to ___ the flu.', a: ['get over'] },
      { t: 'gap', q: 'Don’t drink that milk – it’s ___.', a: ['gone off'] },
      { t: 'gap', q: 'If you feel dizzy, ___ for a few minutes.', a: ['lie down'] },
      { t: 'gap', q: 'I’ve ___ 3 kilos since Tet.', a: ['put on'] },
      { t: 'gap', q: 'Be careful on the stairs – don’t ___!', a: ['fall down'] },
      { t: 'gap', q: 'Please ___ – the doctor will see you soon.', a: ['sit down'] },
      { t: 'gap', q: 'You should ___ and stretch every hour.', a: ['stand up'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'I go swimming to stay ___ shape.', o: ['on', 'in', 'at'], a: 1 },
      { t: 'mcq', q: 'No cake for me – I’m ___ a diet.', o: ['in', 'on', 'at'], a: 1 },
      { t: 'mcq', q: 'Smokers are ___ risk of lung disease.', o: ['in', 'on', 'at'], a: 2 },
      { t: 'mcq', q: 'I’m allergic ___ peanuts.', o: ['with', 'to', 'of'], a: 1 },
      { t: 'mcq', q: 'Many teenagers are addicted ___ their phones.', o: ['to', 'with', 'on'], a: 0 },
      { t: 'mcq', q: 'He complained ___ the waiter about the food.', o: ['with', 'to', 'at'], a: 1 },
      { t: 'mcq', q: 'She is recovering ___ an operation.', o: ['of', 'from', 'after to'], a: 1 },
      { t: 'mcq', q: 'The kitchen smells ___ fresh bread.', o: ['of', 'like to', 'with'], a: 0 },
      { t: 'mcq', q: 'Combine healthy food ___ regular exercise.', o: ['with', 'to', 'and to'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'There’s a great ___ near my house that sells fresh bread. (BAKE)', a: ['bakery'] },
      { t: 'gap', q: 'I’m taking a ___ class to learn Italian food. (COOK)', a: ['cookery'] },
      { t: 'gap', q: 'I have no ___ of giving up chocolate! (INTEND)', a: ['intention'] },
      { t: 'gap', q: 'I go ___ in the park every morning. (JOG)', a: ['jogging'] },
      { t: 'gap', q: 'You should have a ___ check-up every year. (MEDICINE)', a: ['medical'] },
      { t: 'gap', q: 'The injection was completely ___. (PAIN)', a: ['painless'] },
      { t: 'gap', q: 'There has been a big ___ in smoking. (REDUCE)', a: ['reduction'] },
      { t: 'gap', q: 'She has very ___ skin. (SENSE)', a: ['sensitive'] },
      { t: 'gap', q: 'He has lost a lot of ___. (WEIGH)', a: ['weight'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['a balanced', 'diet'], ['have', 'an operation'], ['catch', 'flu'], ['take', 'a pill'], ['skip', 'a meal'], ['put on', 'weight'], ['stay', 'in shape'], ['do', 'exercise']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Đồng nghĩa với “get over (an illness)”:', o: ['recover from', 'suffer from', 'go off', 'cut down'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “put on weight”:', o: ['lose weight', 'gain weight', 'cut down', 'lie down'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “healthy”:', o: ['fit', 'unhealthy', 'balanced', 'sensible'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “sit down”:', o: ['stand up', 'lie down', 'fall down', 'cut down'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “in shape”:', o: ['fit', 'on a diet', 'at risk', 'ill'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “benefit”:', o: ['advantage', 'injury', 'infection', 'limit'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi đang cố gắng giảm uống đồ uống có ga.', ref: "I'm trying to cut down on fizzy drinks.", focus: 'cut down on' },
      { t: 'tr', vi: 'Tôi bị dị ứng với hải sản.', ref: "I'm allergic to seafood.", focus: 'allergic to' },
      { t: 'tr', vi: 'Mất hai tuần tôi mới khỏi cúm.', ref: 'It took me two weeks to get over the flu.', focus: 'get over, flu' },
      { t: 'tr', vi: 'Tập thể dục đều đặn mang lại nhiều lợi ích cho sức khỏe tinh thần.', ref: 'Regular exercise has many benefits for mental health.', focus: 'benefit (IELTS)' },
      { t: 'tr', vi: 'Thiếu ngủ có thể ảnh hưởng đến khả năng tập trung của bạn.', ref: 'Lack of sleep can affect your ability to concentrate.', focus: 'affect' },
      { t: 'tr', vi: 'Tôi đi bơi ba lần một tuần để giữ dáng.', ref: 'I go swimming three times a week to stay in shape.', focus: 'in shape' },
      { t: 'tr', vi: 'So với đồ ăn nhanh, đồ ăn nấu ở nhà lành mạnh hơn nhiều.', ref: 'In comparison with fast food, home-cooked food is much healthier.', focus: 'in comparison with' },
      { t: 'tr', vi: 'Món ăn này quá mặn và quá cay đối với tôi.', ref: 'This dish is too salty and too spicy for me.', focus: 'salty, spicy' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you think you have a healthy lifestyle?' },
  { part: 'Part 1', q: 'What kind of food do you usually eat?' },
  { part: 'Part 1', q: 'How do you usually relax after a busy day?' },
  { part: 'Part 1', q: 'Do you prefer eating at home or eating out?' },
  { part: 'Part 2', q: 'Describe a healthy habit you have or would like to have.', cue: ['what the habit is', 'when you started it (or why you want to start it)', 'how it helps you', 'and explain why you think it is important'] },
  { part: 'Part 3', q: 'Why do many young people have unhealthy lifestyles?' },
  { part: 'Part 3', q: 'Should governments tax unhealthy food?' },
  { part: 'Part 3', q: 'Is mental health as important as physical health?' },
  { part: 'Part 3', q: 'How has people’s diet changed in your country in recent years?' },
];

export default {
  id: 'b1-u30',
  book: 'b1',
  no: 30,
  title: 'Body and lifestyle',
  titleVi: 'Sức khỏe & lối sống',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
