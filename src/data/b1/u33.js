// Unit 33 – Vocabulary: Creating and building (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u33-vocab.js';

const reading = [
  {
    title: 'My grandmother’s sewing machine',
    level: 'Dễ · ~190 từ',
    text: `When I was a child, my grandmother had an old sewing machine in the corner of her living room. It was almost ancient – she had bought it in 1975 – but it still worked perfectly because she maintained it carefully.

My grandmother was a very practical woman. She made almost all of her own clothes, and she made clothes for the whole family too. She had a big pile of material at the back of her wardrobe: cotton for summer shirts, wool for winter jumpers and even a little silk for special occasions.

When I was eight, she taught me how to use the machine. First, I learnt how to cut the material using a paper pattern. Then I learnt how to fold the edges and sew them. My first creation was a striped bag. It wasn't perfect, but I was very proud of it.

Today I work as a fashion designer. People often ask me where my ideas come from. The truth is that my love of design started with that old machine – and with a grandmother who believed that anyone could create something beautiful.`,
    items: [
      { t: 'gap', q: 'The grandmother bought the sewing machine in ___.', a: ['1975'] },
      { t: 'mcq', q: 'Why did the machine still work perfectly?', o: ['It was new.', 'She maintained it carefully.', 'Nobody used it.', 'It was expensive.'], a: 1 },
      { t: 'tf', q: 'The grandmother bought most of her clothes in shops.', a: 'F' },
      { t: 'mcq', q: 'Which material did she use for special occasions?', o: ['cotton', 'wool', 'silk', 'leather'], a: 2 },
      { t: 'gap', q: 'The writer’s first creation was a striped ___.', a: ['bag'] },
      { t: 'mcq', q: 'What is the writer’s job now?', o: ['a teacher', 'a fashion designer', 'an architect', 'a shop assistant'], a: 1 },
    ],
  },
  {
    title: 'Upcycling: give your old clothes a new life',
    level: 'Dễ–Trung bình · ~260 từ',
    text: `Every year, millions of tonnes of clothes end up in rubbish dumps. Many of them are hardly worn – they simply went out of fashion. But a growing number of young people are fighting back with a trend called "upcycling": changing old things into something new and better.

Upcycling is different from recycling. When you recycle a T-shirt, it is broken down into material to make something else. When you upcycle it, you keep the T-shirt but improve it with your own ideas and a few simple tools.

Here are three easy projects for beginners:

1. Turn a long-sleeved shirt into a summer top. Simply cut off the sleeves and fold the edges neatly. If the shirt is a bit loose, add a belt.

2. Change old jeans into a bag. Cut off the legs, sew the bottom closed and use one of the legs to make a strap. Jeans are made of strong cotton, so the bag will last for years.

3. Give a plain jumper a new style. Sew on buttons, add patches with a checked or striped pattern, or paint a design with special fabric paint.

The best thing about upcycling is that every item is unique. Nobody else will have the same top as you! It also saves money and is much better for the environment.

So, before you throw something away, look at it again and use your imagination. With a little preparation and creativity, you might be amazed by what you can make.`,
    items: [
      { t: 'tf', q: 'Many clothes that end up in rubbish dumps are hardly worn.', a: 'T' },
      { t: 'mcq', q: 'What is the difference between recycling and upcycling?', o: ['Upcycling breaks things down into material.', 'Upcycling keeps the item but improves it.', 'Recycling is more creative.', 'There is no difference.'], a: 1 },
      { t: 'gap', q: 'To make a summer top, you cut off the ___ of a shirt.', a: ['sleeves'] },
      { t: 'mcq', q: 'Why will the jeans bag last for years?', o: ['It is made of silk.', 'Jeans are made of strong cotton.', 'It has a belt.', 'It is painted.'], a: 1 },
      { t: 'tf', q: 'The text says you need expensive tools to upcycle clothes.', a: 'F' },
      { t: 'mcq', q: 'Which is NOT mentioned as a benefit of upcycling?', o: ['unique items', 'saving money', 'helping the environment', 'making money by selling clothes'], a: 3 },
    ],
  },
  {
    title: 'The áo dài: a design that never goes out of style',
    level: 'Trung bình · ~320 từ',
    text: `Fashion changes quickly. Styles that are in fashion this year often look old-fashioned the next. But some designs seem to last forever, and Vietnam's áo dài is one of the best examples.

The áo dài is a long silk tunic worn over loose trousers. It is tight at the top and has long sleeves, and the two long panels at the front and the back move gently when the wearer walks. Its shape is simple, but it requires great skill to make. A good tailor takes more than twenty measurements to make sure it fits perfectly.

The origins of the áo dài go back several centuries, but the modern version was created in the 1930s, when designers in Hanoi made it tighter and more modern. Since then, it has been changed many times. In the 1960s, some designers shortened the sleeves and used brighter colours. In recent years, young designers have experimented with new materials, such as cotton and linen, and printed patterns of flowers, lotus leaves and even famous paintings.

Today the áo dài is worn by schoolgirls, brides, office workers and air hostesses. Men also wear a version of it at weddings and during Tết. Many tourists who visit Hội An have one made in just a day or two.

Why has the áo dài remained so popular? Some people say it is because it suits almost everyone. Others believe it is because it reminds Vietnamese people of their history and identity. Whatever the reason, it is a perfect example of how a traditional design can be maintained and improved without losing its character.`,
    items: [
      { t: 'mcq', q: 'How is the áo dài described?', o: ['loose at the top with short sleeves', 'tight at the top with long sleeves', 'a short cotton dress', 'a jacket and trousers'], a: 1 },
      { t: 'gap', q: 'A good tailor takes more than ___ measurements.', a: ['twenty', '20'] },
      { t: 'gap', q: 'The modern áo dài was created in the ___.', a: ['1930s', '1930’s', "1930's"] },
      { t: 'tf', q: 'In the 1960s, some designers made the sleeves longer.', a: 'F' },
      { t: 'tf', q: 'Men never wear the áo dài.', a: 'F' },
      { t: 'mcq', q: 'According to the text, why is the áo dài still popular?', o: ['It is cheap.', 'It suits almost everyone and reminds people of their identity.', 'It is easy to make.', 'The government requires it.'], a: 1 },
      { t: 'mcq', q: 'What is the main idea of the last paragraph?', o: ['Traditional designs cannot change.', 'A traditional design can be improved without losing its character.', 'The áo dài will soon go out of fashion.', 'Only tourists buy áo dài.'], a: 1 },
    ],
  },
  {
    title: 'Building with bamboo',
    level: 'Trung bình–Khó · ~360 từ',
    text: `When we think of modern buildings, we usually imagine concrete, steel and glass. But a growing number of architects believe that one of the best building materials for the future is also one of the most ancient: bamboo.

Bamboo has been used for building in Asia for thousands of years. It is surprisingly strong – some types are as strong as steel when they are pulled – but it is also light and flexible. This means that bamboo buildings can bend and stretch during storms and earthquakes instead of breaking.

Bamboo is also very good for the environment. It is actually a type of grass, and some species can grow almost a metre in a single day. A bamboo forest can be harvested every three to five years, while a tree for wood may take fifty years to grow. In addition, producing concrete and steel creates huge amounts of carbon dioxide, but growing bamboo removes carbon dioxide from the air.

Vietnamese architect Võ Trọng Nghĩa has become famous around the world for his bamboo designs. His cafés, restaurants and schools have high, curved roofs and are naturally cool, so they do not need air conditioning. Visitors are often amazed by how light and open the spaces feel.

However, bamboo is not perfect. If it is not treated properly, insects can damage it and it can rot in wet weather. Untreated bamboo buildings may only last a few years. Today, scientists have developed new ways to protect bamboo, and with the right preparation and maintenance, a bamboo building can last for fifty years or more.

There is another problem: many people still see bamboo as a "poor man's material". Changing this image may be the biggest challenge of all. But as more beautiful bamboo buildings appear in cities around the world, attitudes are starting to change. The material of the past may turn out to be the material of the future.`,
    items: [
      { t: 'mcq', q: 'Why can bamboo buildings survive earthquakes?', o: ['They are very heavy.', 'Bamboo can bend and stretch.', 'They are built underground.', 'They use steel.'], a: 1 },
      { t: 'tf', q: 'Bamboo is a type of tree.', a: 'F' },
      { t: 'gap', q: 'A bamboo forest can be harvested every three to ___ years.', a: ['five', '5'] },
      { t: 'mcq', q: 'What is special about Võ Trọng Nghĩa’s buildings?', o: ['They are made of concrete.', 'They are naturally cool and don’t need air conditioning.', 'They are very small.', 'They are underground.'], a: 1 },
      { t: 'tf', q: 'Untreated bamboo buildings may only last a few years.', a: 'T' },
      { t: 'mcq', q: 'According to the writer, what may be the biggest challenge?', o: ['finding enough bamboo', 'changing people’s image of bamboo', 'training architects', 'the cost of bamboo'], a: 1 },
      { t: 'tf', q: 'Growing bamboo adds carbon dioxide to the air.', a: 'F' },
    ],
  },
  {
    title: 'Can a machine be creative?',
    level: 'Khó · ~420 từ · IELTS',
    text: `In 2018, a portrait called "Edmond de Belamy" was sold at an auction in New York for more than $430,000. It looked like an old painting of a gentleman in a dark coat, but there was something unusual about it: it had been created not by an artist but by a computer program. Since then, artificial intelligence has produced poems, songs, film scripts and thousands of images in seconds. This has raised a difficult question: can a machine really be creative?

Those who answer "yes" point out that creativity has always involved combining existing ideas in new ways. No artist creates from nothing; every painter has been influenced by the painters before them. An AI system that has studied millions of pictures, they argue, is doing something similar, only faster. Moreover, AI tools allow people who lack practical skills, such as drawing, to express their imagination. In this sense, technology may give more people the freedom to create.

Critics, however, describe AI art as "clever copying". They argue that human creativity comes from experience, emotion and intention – an artist paints a picture of a storm because they have felt fear or wonder. A machine has never felt anything. It does not decide to create; it simply follows a request and calculates which result is most likely to match it. Many artists are also angry that their work was used to train these systems without permission or payment, and they are worried about losing their jobs.

There is perhaps a middle position. Photography offers a useful comparison. When cameras were invented in the nineteenth century, some people claimed it was the end of painting. Instead, painters were freed from the need to copy reality exactly, and new styles such as Impressionism appeared. Photography itself eventually became an art form – not because the camera was creative, but because of the choices made by the person using it.

Perhaps AI will follow a similar pattern. The machine may not be creative in the human sense, but it may become a powerful tool in the hands of creative people. What matters, in the end, may not be who – or what – made the work, but whether it makes us think, feel or see the world differently.`,
    items: [
      { t: 'gap', q: 'The AI portrait was sold for more than $___.', a: ['430,000', '430000', '430 000'] },
      { t: 'mcq', q: 'According to supporters, creativity has always involved…', o: ['creating from nothing', 'combining existing ideas in new ways', 'having expensive tools', 'working alone'], a: 1 },
      { t: 'tf', q: 'Supporters say AI allows people without drawing skills to express their imagination.', a: 'T' },
      { t: 'mcq', q: 'Why do critics call AI art “clever copying”?', o: ['It is always illegal.', 'It lacks experience, emotion and intention.', 'It is too expensive.', 'It is badly made.'], a: 1 },
      { t: 'tf', q: 'All artists were paid when their work was used to train AI systems.', a: 'F' },
      { t: 'mcq', q: 'Why does the writer mention photography?', o: ['to show cameras destroyed painting', 'to compare a new technology that became a tool for art', 'to explain how AI works', 'to criticise Impressionism'], a: 1 },
      { t: 'tf', q: 'The writer clearly believes machines are creative in the human sense.', a: 'F' },
      { t: 'mcq', q: 'What does the writer suggest matters most in the end?', o: ['who made the work', 'how much it costs', 'whether it makes us think, feel or see differently', 'how fast it was made'], a: 2 },
    ],
  },
];

const listening = [
  {
    title: 'How to fold a paper boat',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Hướng dẫn gấp thuyền giấy. Nghe và trả lời.',
    rate: '-15%',
    voices: { N: 'en-GB-LibbyNeural' },
    script: [
      ['N', "Today we're going to make a paper boat. You don't need any tools – just one rectangular piece of paper."],
      ['N', 'First, fold the paper in half, from top to bottom. Make sure the edges match.'],
      ['N', 'Next, fold the two top corners down to the middle, so you have a triangle shape.'],
      ['N', 'Then fold the bottom edges up on both sides. Be careful not to tear the paper.'],
      ['N', "Finally, open the bottom, pull the two sides gently, and press it flat. There you are – your boat is ready! It's simple, but it takes a little practice."],
    ],
    items: [
      { t: 'mcq', q: 'What do you need?', o: ['scissors and glue', 'one piece of paper', 'two pieces of paper', 'a pen'], a: 1 },
      { t: 'gap', q: 'First, fold the paper in ___.', a: ['half'] },
      { t: 'mcq', q: 'After folding the corners, what shape do you have?', o: ['a square', 'a circle', 'a triangle', 'a star'], a: 2 },
      { t: 'gap', q: 'Be careful not to ___ the paper.', a: ['tear'] },
      { t: 'tf', q: 'The speaker says it is very difficult.', a: 'F' },
    ],
    dictation: ['Fold the paper in half and make sure the edges match.', 'Be careful not to tear the paper.'],
  },
  {
    title: 'Conversation: In the changing room',
    level: '2 · Dễ · 2 giọng',
    desc: 'Khách hàng thử quần áo tại cửa hàng.',
    rate: '-5%',
    voices: { Assistant: 'en-GB-RyanNeural', Customer: 'en-GB-SoniaNeural' },
    script: [
      ['Assistant', 'Hi there. Can I help you?'],
      ['Customer', "Yes, I'd like to try on these jeans, please. And this striped shirt."],
      ['Assistant', 'Of course. The changing rooms are at the back of the shop, next to the stairs.'],
      ['Customer', "Thanks. … Hmm, the jeans are much too tight. I can hardly do them up! Have you got them in a bigger size?"],
      ['Assistant', "Let me check. … Here you are, size twelve. How's the shirt?"],
      ['Customer', "The shirt's a bit loose, but I like it like that. Is it cotton?"],
      ['Assistant', "Yes, a hundred percent cotton. And it's on sale this week – twenty percent off."],
      ['Customer', 'Great. These jeans fit perfectly now. Do you think the shirt matches them?'],
      ['Assistant', 'Definitely. Striped shirts are really in fashion at the moment. That style really suits you.'],
      ['Customer', "OK, I'll take both. Can I pay by card?"],
    ],
    items: [
      { t: 'gap', q: 'The changing rooms are at the ___ of the shop.', a: ['back'] },
      { t: 'mcq', q: 'What is the problem with the first pair of jeans?', o: ['too loose', 'too tight', 'wrong colour', 'too long'], a: 1 },
      { t: 'gap', q: 'The bigger size is size ___.', a: ['twelve', '12'] },
      { t: 'mcq', q: 'What is the shirt made of?', o: ['silk', 'wool', 'cotton', 'linen'], a: 2 },
      { t: 'gap', q: 'The shirt is ___ percent off this week.', a: ['twenty', '20'] },
      { t: 'tf', q: 'The customer decides to buy only the jeans.', a: 'F' },
    ],
    dictation: ['The jeans are much too tight.', 'That style really suits you.'],
  },
  {
    title: 'Museum guide: The ancient pottery exhibition',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Hướng dẫn viên giới thiệu triển lãm gốm cổ.',
    rate: '+0%',
    voices: { Guide: 'en-AU-WilliamNeural' },
    script: [
      ['Guide', "Good morning, everyone, and welcome to the gallery. Today's exhibition is all about ancient pottery from Southeast Asia."],
      ['Guide', "The oldest pieces, here in the first room, are around three thousand years old. As you can see, their shapes are quite simple, and the surfaces are rough. People made them by hand, without any special tools."],
      ['Guide', 'In the second room, you will notice a big improvement in quality. By this time, potters were using a wheel, so the pots are much smoother and more regular. Look at the patterns too – mostly lines and circles, and some birds and fish.'],
      ['Guide', "The third room contains our most famous pieces – blue and white plates from the fifteenth century. Some of them travelled as far as the Middle East. Please don't touch them; they are extremely fragile."],
      ['Guide', "At the end of the tour, there's a workshop in the room in the corner, where you can try to create your own pot. Photos are allowed, but please don't use the flash. The tour takes about forty-five minutes. Let's begin."],
    ],
    items: [
      { t: 'gap', q: 'The oldest pieces are around ___ years old.', a: ['three thousand', '3000', '3,000'] },
      { t: 'mcq', q: 'How were the oldest pots made?', o: ['on a wheel', 'by hand', 'by machine', 'in a factory'], a: 1 },
      { t: 'mcq', q: 'Why are the pots in the second room smoother?', o: ['They are newer copies.', 'Potters used a wheel.', 'They were painted.', 'They are made of glass.'], a: 1 },
      { t: 'gap', q: 'The famous blue and white plates are from the ___ century.', a: ['fifteenth', '15th'] },
      { t: 'tf', q: 'Visitors can use flash when taking photos.', a: 'F' },
      { t: 'gap', q: 'The tour takes about ___ minutes.', a: ['forty-five', '45', 'forty five'] },
    ],
    dictation: ['You will notice a big improvement in quality.', 'Please do not touch them; they are extremely fragile.'],
  },
  {
    title: 'Radio interview: Designing homes for the future',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn một kiến trúc sư về nhà ở tương lai.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Mark: 'en-US-GuyNeural' },
    script: [
      ['Presenter', "My guest today is the architect Mark Ellis, who designs small, affordable homes. Mark, why small homes?"],
      ['Mark', "Well, in many cities, young people simply can't afford a house. Land is expensive, so we need to make better use of space. I like to say that a home doesn't have to be big; it has to be well designed."],
      ['Presenter', 'What does a well-designed small home look like?'],
      ['Mark', "The key is flexibility. In one of our flats, the bed folds up into the wall during the day, and the table slides out from under the kitchen counter. One room can be a bedroom at night and an office in the morning."],
      ['Presenter', 'And what materials do you use?'],
      ['Mark', "We try to use local and recycled materials as much as possible – recycled wood, bamboo, even bricks from old buildings. It reduces costs and it's better for the environment. We also make sure the homes are easy and cheap to maintain."],
      ['Presenter', "Some people say these homes are too small to live in comfortably."],
      ['Mark', "I understand that. They're not suitable for everyone – a family with four children would struggle! But for single people or young couples, they offer independence at a price they can afford. And in my experience, when people live with less space, they often realise they need fewer things."],
      ['Presenter', 'Mark Ellis, thank you.'],
    ],
    items: [
      { t: 'mcq', q: 'Why does Mark design small homes?', o: ['They are fashionable.', 'Young people can’t afford big houses.', 'They are easier to build.', 'The government asked him.'], a: 1 },
      { t: 'gap', q: 'Mark says the key to a small home is ___.', a: ['flexibility'] },
      { t: 'mcq', q: 'What happens to the bed during the day?', o: ['It is removed.', 'It folds up into the wall.', 'It becomes a sofa.', 'It is moved outside.'], a: 1 },
      { t: 'mcq', q: 'Which material is NOT mentioned?', o: ['recycled wood', 'bamboo', 'old bricks', 'glass'], a: 3 },
      { t: 'tf', q: 'Mark thinks the homes are suitable for large families.', a: 'F' },
      { t: 'mcq', q: 'What do people often realise when they live in less space?', o: ['They need more money.', 'They need fewer things.', 'They want a bigger house.', 'They feel lonely.'], a: 1 },
    ],
    dictation: ['A home does not have to be big; it has to be well designed.', 'They are not suitable for everyone.'],
  },
  {
    title: 'Discussion: Should old buildings be preserved?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3: giữ lại hay thay thế các tòa nhà cũ?',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Linh: 'en-AU-NatashaNeural', David: 'en-GB-ThomasNeural' },
    script: [
      ['Host', "Cities are growing fast, and many old buildings are being knocked down to make space for new ones. Linh, you work for a heritage organisation. Why should we keep old buildings?"],
      ['Linh', "Because they're part of a city's identity. When you walk through Hanoi's Old Quarter, you can see how people lived a hundred years ago. Once those buildings are gone, they're gone forever. You can't recreate history."],
      ['David', "I understand that, but we have to be practical. Many old buildings are in terrible condition. They're expensive to maintain, they're not safe in a fire, and they don't have enough space for growing populations. People need modern housing."],
      ['Linh', "I'm not saying every old building should be kept. But the most important ones should be. And many can be adapted – an old factory can become an art gallery or a library, for example. That's often cheaper than building something new."],
      ['David', "That works for some buildings, certainly. But who pays? Restoration is often more expensive than people think, and owners don't always have the money."],
      ['Linh', "That's where governments should help, through grants or tax reductions. And don't forget tourism: historic areas attract millions of visitors, which brings money into the local economy."],
      ['Host', 'So is there a compromise?'],
      ['David', "I think so. Protect the truly special buildings, but allow modern development around them – as long as new buildings are designed to match the style of the area."],
      ['Linh', "I'd agree with that. The worst outcome is a city where every street looks the same."],
    ],
    items: [
      { t: 'mcq', q: 'Why does Linh want to keep old buildings?', o: ['They are cheap to maintain.', 'They are part of a city’s identity.', 'They are safer.', 'They are bigger.'], a: 1 },
      { t: 'mcq', q: 'Which problem with old buildings does David NOT mention?', o: ['expensive to maintain', 'not safe in a fire', 'not enough space', 'too far from the city centre'], a: 3 },
      { t: 'gap', q: 'Linh says an old factory can become an art gallery or a ___.', a: ['library'] },
      { t: 'mcq', q: 'How does Linh think governments should help?', o: ['by knocking buildings down', 'through grants or tax reductions', 'by banning tourism', 'by building new cities'], a: 1 },
      { t: 'tf', q: 'David thinks new buildings should match the style of the area.', a: 'T' },
      { t: 'tf', q: 'At the end, the two speakers completely disagree.', a: 'F' },
    ],
    dictation: ['Once those buildings are gone, they are gone forever.', 'That is often cheaper than building something new.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – sửa từ sai',
    instruction: 'Mỗi từ trong ngoặc kép nằm sai câu. Viết từ đúng (ancient, checked, loose, practical, rough, smooth, striped, suitable, tight).',
    items: [
      { t: 'gap', q: 'These jeans are too “ancient”. Do you have a smaller size? → ___', a: ['loose'] },
      { t: 'gap', q: 'I don’t like your “smooth” dress. It makes you look like a zebra! → ___', a: ['striped'] },
      { t: 'gap', q: 'It’s good to have “rough” skills, like being able to make your own clothes. → ___', a: ['practical'] },
      { t: 'gap', q: 'Ouch! These shoes are far too “checked”. → ___', a: ['tight'] },
      { t: 'gap', q: 'Wear that “suitable” shirt, the one with the red and white squares. → ___', a: ['checked'] },
      { t: 'gap', q: 'Do you have any jackets “loose” for a one-year-old girl? → ___', a: ['suitable'] },
      { t: 'gap', q: 'This woollen jumper is really “striped”. It makes me itch! → ___', a: ['rough'] },
      { t: 'gap', q: 'The “practical” Egyptians almost always wore white clothes. → ___', a: ['ancient'] },
      { t: 'gap', q: 'Feel this material. It’s so soft and “tight”. → ___', a: ['smooth'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: cut off, do up, fill up, have on, leave out, put on, take off, try on (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'Always ___ clothes before you buy them.', a: ['try on'] },
      { t: 'gap', q: 'Make sure you can ___ the jacket properly – it shouldn’t be too tight.', a: ['do up'] },
      { t: 'gap', q: 'Please ___ your shoes before you come in.', a: ['take off'] },
      { t: 'gap', q: 'It’s cold – ___ a jumper.', a: ['put on'] },
      { t: 'gap', q: 'I ___ the sleeves of an old shirt to make a summer top.', a: ['cut off'] },
      { t: 'gap', q: 'Don’t ___ your wardrobe with clothes you never wear.', a: ['fill up'] },
      { t: 'gap', q: 'You’ve ___ the most important detail of the design!', a: ['left out'] },
      { t: 'gap', q: 'What did she ___ at the party? – A beautiful silk dress.', a: ['have on'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'They want to build a play area at the back ___ our house.', o: ['of', 'in', 'to'], a: 0 },
      { t: 'mcq', q: 'Those silver boots are really ___ fashion at the moment!', o: ['on', 'in', 'at'], a: 1 },
      { t: 'mcq', q: 'Things go ___ style very quickly.', o: ['out of', 'off', 'away'], a: 0 },
      { t: 'mcq', q: 'Tina is only two, so I was amazed ___ the picture she drew.', o: ['by', 'with', 'on'], a: 0 },
      { t: 'mcq', q: 'Picasso has been a huge influence ___ me.', o: ['in', 'on', 'to'], a: 1 },
      { t: 'mcq', q: 'Writing poetry is similar ___ writing a song.', o: ['with', 'to', 'as'], a: 1 },
      { t: 'mcq', q: 'I was a bit disappointed ___ his last book.', o: ['from', 'with', 'of'], a: 1 },
      { t: 'mcq', q: 'There’s a lot involved ___ writing a symphony.', o: ['in', 'on', 'at'], a: 0 },
      { t: 'mcq', q: 'This music always reminds me ___ summer evenings.', o: ['about', 'of', 'for'], a: 1 },
      { t: 'mcq', q: 'My drawing went wrong, so I changed it ___ a camel!', o: ['to', 'into', 'for'], a: 1 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'She must have a lot of ___ to think of ideas like that. (IMAGINE)', a: ['imagination'] },
      { t: 'gap', q: 'I love this cup, but it hasn’t got a ___. (HAND)', a: ['handle'] },
      { t: 'gap', q: 'His favourite ___ was Mozart. (COMPOSE)', a: ['composer'] },
      { t: 'gap', q: 'Leonardo da Vinci was really ___. (INTELLIGENT)', a: ['intelligent'] },
      { t: 'gap', q: 'Todd is really ___. He loves painting and music. (ART)', a: ['artistic'] },
      { t: 'gap', q: 'Windows made of ___ glass would be safer. (BREAK)', a: ['unbreakable'] },
      { t: 'gap', q: 'It took a lot of ___ to get the show right. (PREPARE)', a: ['preparation'] },
      { t: 'gap', q: 'Shall we go to the Dali ___? (EXHIBIT)', a: ['exhibition'] },
      { t: 'gap', q: 'It’s impossible to achieve ___. (PERFECT)', a: ['perfection'] },
      { t: 'gap', q: 'Our teacher gives us a lot of ___ to paint what we want. (FREE)', a: ['freedom'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['an art', 'gallery'], ['try on', 'a dress'], ['a big', 'improvement'], ['fold', 'the paper in half'], ['maintain', 'a building'], ['short', 'sleeves'], ['use your', 'imagination'], ['go out of', 'fashion']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “tight”:', o: ['loose', 'rough', 'smooth', 'striped'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “rough”:', o: ['smooth', 'ancient', 'tight', 'loose'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “put on (clothes)”:', o: ['take off', 'try on', 'do up', 'have on'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “fix”:', o: ['repair', 'tear', 'fold', 'stretch'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “ancient”:', o: ['very old', 'modern', 'practical', 'suitable'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “in fashion”:', o: ['out of fashion', 'in style', 'trendy', 'stylish'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “leave out”:', o: ['not include', 'add', 'remove clothes', 'go outside'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi có thể mặc thử chiếc váy này không? Cái kia quá chật.', ref: 'Can I try this dress on? That one is too tight.', focus: 'try on, tight' },
      { t: 'tr', vi: 'Màu đỏ thật sự hợp với bạn.', ref: 'Red really suits you.', focus: 'suit' },
      { t: 'tr', vi: 'Áo dài không bao giờ lỗi mốt.', ref: 'The áo dài never goes out of fashion.', focus: 'go out of fashion' },
      { t: 'tr', vi: 'Bài hát này luôn gợi cho tôi nhớ về tuổi thơ.', ref: 'This song always reminds me of my childhood.', focus: 'remind sb of' },
      { t: 'tr', vi: 'Tôi đã biến chiếc quần jean cũ thành một chiếc túi.', ref: 'I changed my old jeans into a bag.', focus: 'change sth into' },
      { t: 'tr', vi: 'Các tòa nhà cũ thì tốn kém để bảo trì.', ref: 'Old buildings are expensive to maintain.', focus: 'maintain' },
      { t: 'tr', vi: 'Trí tuệ nhân tạo đã có ảnh hưởng lớn đến ngành thiết kế.', ref: 'Artificial intelligence has had a huge influence on the design industry.', focus: 'an influence on (IELTS)' },
      { t: 'tr', vi: 'Cần rất nhiều sự chuẩn bị để tổ chức một cuộc triển lãm.', ref: 'It takes a lot of preparation to organise an exhibition.', focus: 'preparation, exhibition' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you like art? What kind of art do you like?' },
  { part: 'Part 1', q: 'Are you good at making things with your hands?' },
  { part: 'Part 1', q: 'Do you care about fashion? Why or why not?' },
  { part: 'Part 1', q: 'What kind of buildings do you like?' },
  { part: 'Part 2', q: 'Describe something you made by hand.', cue: ['what it was', 'how you made it', 'how long it took', 'and explain how you felt about it'] },
  { part: 'Part 3', q: 'Why do some people enjoy making things themselves instead of buying them?' },
  { part: 'Part 3', q: 'Should governments spend money preserving old buildings?' },
  { part: 'Part 3', q: 'Can artificial intelligence ever replace human artists?' },
  { part: 'Part 3', q: 'How has fashion changed in your country in recent years?' },
];

export default {
  id: 'b1-u33',
  book: 'b1',
  no: 33,
  title: 'Creating and building',
  titleVi: 'Sáng tạo & xây dựng',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
