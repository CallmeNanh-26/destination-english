// Unit 36 – Vocabulary: Nature and the universe (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u36-vocab.js';

const reading = [
  {
    title: 'A weekend in Cúc Phương',
    level: 'Dễ · ~200 từ',
    text: `Last month my class went on a trip to Cúc Phương National Park. It is located about 120 kilometres south-west of Hanoi, and it was the first national park in Vietnam.

In the beginning, I wasn't very excited. I live in the city centre and I'm a bit afraid of insects! But the countryside was beautiful, and the air was so fresh after the pollution of Hanoi.

On the first day, we visited a centre that rescues wild animals. They look after monkeys called langurs, which are in danger of becoming extinct. The workers told us that some of these animals had been caught by hunters.

The next morning, we walked to a tree that is more than one thousand years old. It was raining a little – just a light shower – but nobody minded. On the way, we saw butterflies of every colour, and our guide told us that there are about four hundred species of butterfly in the park.

In total, we only spent two days there, but I learnt a lot. Now I'm much more aware of how important it is to protect wildlife – and I'm not so scared of insects any more.`,
    items: [
      { t: 'gap', q: 'Cúc Phương is about ___ kilometres from Hanoi.', a: ['120', 'one hundred and twenty', 'a hundred and twenty'] },
      { t: 'tf', q: 'Cúc Phương was the first national park in Vietnam.', a: 'T' },
      { t: 'mcq', q: 'Why wasn’t the writer excited at first?', o: ['She doesn’t like trees.', 'She is a bit afraid of insects.', 'It was too far.', 'It was too hot.'], a: 1 },
      { t: 'mcq', q: 'What does the centre do?', o: ['sells animals', 'rescues wild animals', 'hunts monkeys', 'grows trees'], a: 1 },
      { t: 'gap', q: 'There are about ___ species of butterfly in the park.', a: ['400', 'four hundred'] },
      { t: 'tf', q: 'The trip lasted a week.', a: 'F' },
    ],
  },
  {
    title: 'Thunder and lightning: the facts',
    level: 'Dễ–Trung bình · ~260 từ',
    text: `Thunderstorms are one of nature's most amazing – and most dangerous – shows. At any moment, there are about two thousand thunderstorms happening around the world, and lightning hits the Earth around forty to fifty times every second.

So what is lightning? Inside a storm cloud, small pieces of ice crash into each other and build up an electric charge. When the charge becomes too great, it is released as a giant spark: lightning. A single flash can be five times hotter than the surface of the sun!

Thunder is the sound that lightning makes. The lightning heats the air so quickly that the air explodes outwards, creating a loud bang. Because light travels much faster than sound, we always see the lightning before we hear the thunder. You can even work out how far away a storm is: count the seconds between the flash and the bang, then divide by three. The answer is the distance in kilometres.

People often say that lightning never strikes the same place twice. In fact, it often does. Tall buildings are hit many times every year.

How can you stay safe? If you are outside, go inside a building or a car as soon as you hear thunder. Don't stand under a tree – lightning often hits tall objects. And if you are swimming, get out of the water immediately. Remember the simple rule: "When thunder roars, go indoors!"`,
    items: [
      { t: 'gap', q: 'There are about ___ thunderstorms happening around the world at any moment.', a: ['2,000', '2000', 'two thousand'] },
      { t: 'mcq', q: 'What builds up an electric charge in a cloud?', o: ['water drops', 'pieces of ice crashing', 'wind', 'the sun'], a: 1 },
      { t: 'tf', q: 'A flash of lightning can be hotter than the surface of the sun.', a: 'T' },
      { t: 'mcq', q: 'Why do we see lightning before we hear thunder?', o: ['Light travels faster than sound.', 'Thunder happens later.', 'Our eyes are better than our ears.', 'Sound is blocked by clouds.'], a: 0 },
      { t: 'gap', q: 'If you count 9 seconds between flash and bang, the storm is ___ km away.', a: ['3', 'three'] },
      { t: 'tf', q: 'Lightning never strikes the same place twice.', a: 'F' },
      { t: 'mcq', q: 'Which is NOT safety advice in the text?', o: ['go inside a car', 'don’t stand under a tree', 'get out of the water', 'lie down in an open field'], a: 3 },
    ],
  },
  {
    title: 'The saola: Asia’s unicorn',
    level: 'Trung bình · ~320 từ',
    text: `In 1992, scientists working in the forests on the border between Vietnam and Laos found something extraordinary in a hunter's home: a pair of long, straight horns that did not belong to any known animal. They had discovered a new species of large mammal – the first one found anywhere in the world for more than fifty years.

The animal was named the saola. It looks a little like a deer, with a dark brown coat and white marks on its face, but it is actually related to cows and goats. Because it is so rare and so difficult to see, it is often called "the Asian unicorn".

Very little is known about the saola. No scientist has ever seen one in the wild. A few were caught by local people in the 1990s, but none survived for long in captivity. The last confirmed photo was taken by a camera trap in 2013. Experts believe that there may be fewer than a hundred left – perhaps only a few dozen.

The biggest danger to the saola is not hunters looking for saolas, but traps set for other animals. Thousands of simple wire traps are put in the forests every year, and saolas are caught by accident. The destruction of the forests for roads and farms is another serious problem.

Conservation groups are working hard to save the saola from extinction. Teams of local people walk through the forest removing traps – in some areas they have removed more than 200,000. Scientists are also collecting water samples from forest streams to look for saola DNA, which could help them locate the remaining animals.

If the saola becomes extinct, we will have lost an animal that we never really got to know. Its story shows how much of the natural world is still unknown – and how quickly we could lose it.`,
    items: [
      { t: 'gap', q: 'The saola was discovered in ___.', a: ['1992'] },
      { t: 'mcq', q: 'What is the saola related to?', o: ['deer', 'cows and goats', 'horses', 'bears'], a: 1 },
      { t: 'tf', q: 'Scientists have often seen saolas in the wild.', a: 'F' },
      { t: 'gap', q: 'The last confirmed photo was taken in ___.', a: ['2013'] },
      { t: 'mcq', q: 'What is the biggest danger to the saola?', o: ['hunters looking for saolas', 'traps set for other animals', 'disease', 'tourists'], a: 1 },
      { t: 'mcq', q: 'Why are scientists collecting water samples?', o: ['to check pollution', 'to look for saola DNA', 'to find new fish', 'to measure the climate'], a: 1 },
      { t: 'tf', q: 'Local teams have removed more than 200,000 traps in some areas.', a: 'T' },
    ],
  },
  {
    title: 'Are we alone in the universe?',
    level: 'Trung bình–Khó · ~360 từ',
    text: `For thousands of years, people have looked up at the night sky and asked the same question: is there life anywhere else? Today, for the first time in history, we may be close to an answer.

Our solar system contains eight planets, but only the Earth is known to support life. For a long time, scientists believed that life needed exactly the conditions we have here: a mild climate, liquid water and an atmosphere. Mercury and Venus are too hot, while the planets furthest from the sun are freezing.

However, discoveries on our own planet have changed our ideas. Scientists have found tiny living things in boiling water, in ice, and at the bottom of the deepest oceans, where there is no sunlight at all. If life can exist in such extreme places on Earth, it might exist in places we once thought impossible.

This is why some scientists are excited about two moons in our solar system. Europa, a satellite of Jupiter, is covered in a thick layer of ice, but under the ice there is probably an enormous ocean – containing more water than all the Earth's oceans together. Enceladus, a small moon of Saturn, regularly shoots jets of water into space. Space missions are now being planned to study both moons more closely.

Beyond our solar system, astronomers have found more than five thousand planets orbiting other stars. Some of them are located in the "Goldilocks zone" – not too hot and not too cold for liquid water. With billions of stars in our galaxy alone, many scientists believe that life elsewhere is not only possible, but likely.

Of course, if life is found, it will probably be very simple – more like bacteria than little green men. But even that discovery would be one of the most important in human history. It would tell us that the origin of life is not a lucky accident, and that the universe may be full of living things.`,
    items: [
      { t: 'gap', q: 'Our solar system contains ___ planets.', a: ['8', 'eight'] },
      { t: 'mcq', q: 'Which planets are described as too hot?', o: ['Jupiter and Saturn', 'Mercury and Venus', 'Mars and Earth', 'all of them'], a: 1 },
      { t: 'tf', q: 'Living things have been found at the bottom of the deepest oceans.', a: 'T' },
      { t: 'mcq', q: 'What is probably under Europa’s ice?', o: ['a volcano', 'an enormous ocean', 'a city', 'nothing'], a: 1 },
      { t: 'mcq', q: 'What is the “Goldilocks zone”?', o: ['an area with gold', 'an area where liquid water can exist', 'the centre of the galaxy', 'the area near the sun'], a: 1 },
      { t: 'gap', q: 'Astronomers have found more than ___ planets orbiting other stars.', a: ['5,000', '5000', 'five thousand'] },
      { t: 'tf', q: 'The writer thinks we will probably find intelligent “little green men”.', a: 'F' },
    ],
  },
  {
    title: 'The Mekong Delta: on the front line of climate change',
    level: 'Khó · ~420 từ · IELTS',
    text: `The Mekong Delta is one of the most productive farming regions on Earth. Home to around seventeen million people, it produces about half of Vietnam's rice and much of its fruit and fish. Yet scientists warn that this vital region is under serious threat, and that climate change is only part of the story.

The most visible problem is salt water. During the dry season, sea water travels up the rivers and into the fields. Rice cannot grow in salty soil, and in the severe drought of 2016, hundreds of thousands of hectares of crops were damaged. Rising sea levels, caused by global warming, are making the problem worse. Some studies suggest that, by the end of the century, a large part of the delta could be under water at high tide.

However, many researchers argue that local human activity is causing as much damage as the global climate. The delta is actually sinking, partly because huge amounts of groundwater are being pumped out for homes, farms and factories. In some areas, the land is falling by more than two centimetres a year – far faster than the sea is rising. At the same time, dams built further up the Mekong are trapping the sand and mud that the river once carried down to the delta. Without this mud, the land cannot build up naturally, and the coastline is being washed away.

What can be done? Some solutions are technical: building sea walls, controlling water pumping and improving forecasts so that farmers know when salt water is coming. Others involve working with nature rather than against it. In many areas, farmers have switched from rice to shrimp, or alternate between the two depending on the season – an approach that turns salt water from a threat into a resource. Planting mangrove forests along the coast is another effective measure, as their roots protect the land from waves and storms while providing a home for wildlife.

The future of the Mekong Delta is therefore not yet decided. International agreements to reduce carbon emissions are essential, but they are not enough on their own. Equally important are decisions taken locally – about water, dams and land use. As one scientist put it, the delta's fate will be determined "not only in climate conferences, but in every village along the river".`,
    items: [
      { t: 'gap', q: 'About ___ million people live in the Mekong Delta.', a: ['17', 'seventeen'] },
      { t: 'mcq', q: 'Why is salt water a problem?', o: ['It kills fish.', 'Rice cannot grow in salty soil.', 'It causes floods in cities.', 'It makes water too hot.'], a: 1 },
      { t: 'tf', q: 'The writer says climate change is the only cause of the delta’s problems.', a: 'F' },
      { t: 'mcq', q: 'Why is the delta sinking?', o: ['earthquakes', 'too much groundwater is pumped out', 'heavy rain', 'too many buildings'], a: 1 },
      { t: 'mcq', q: 'How do dams upstream affect the delta?', o: ['They provide more mud.', 'They trap the sand and mud the river used to carry.', 'They stop salt water.', 'They have no effect.'], a: 1 },
      { t: 'mcq', q: 'How does alternating rice and shrimp help?', o: ['It turns salt water into a resource.', 'It stops all salt water.', 'It uses less land.', 'It increases rice prices.'], a: 0 },
      { t: 'tf', q: 'Mangrove forests protect the land and provide a home for wildlife.', a: 'T' },
      { t: 'mcq', q: 'What is the main point of the final paragraph?', o: ['Only international agreements matter.', 'Both global agreements and local decisions are important.', 'Nothing can be done.', 'Farmers should leave the delta.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'The weather forecast',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Bản tin dự báo thời tiết. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-SoniaNeural' },
    script: [
      ['N', "Good evening. Here's the weather forecast for tomorrow."],
      ['N', "In the north, it will be a cold day, with temperatures of around eight degrees. At night it will be freezing, so be careful on the roads."],
      ['N', "In the centre of the country, there will be some showers in the morning, but it will clear up in the afternoon."],
      ['N', "In the south, the heatwave will continue. Temperatures will reach thirty-six degrees, so drink plenty of water."],
      ['N', "And on Saturday, there may be thunder and lightning in the west. That's all from me. Goodnight."],
    ],
    items: [
      { t: 'gap', q: 'In the north, temperatures will be around ___ degrees.', a: ['8', 'eight'] },
      { t: 'mcq', q: 'What will happen in the centre in the afternoon?', o: ['more showers', 'it will clear up', 'snow', 'thunder'], a: 1 },
      { t: 'gap', q: 'In the south, temperatures will reach ___ degrees.', a: ['36', 'thirty-six', 'thirty six'] },
      { t: 'mcq', q: 'When may there be thunder and lightning?', o: ['tomorrow morning', 'tonight', 'on Saturday', 'on Sunday'], a: 2 },
      { t: 'tf', q: 'It will be freezing in the north at night.', a: 'T' },
    ],
    dictation: ['Here is the weather forecast for tomorrow.', 'In the south, the heatwave will continue.'],
  },
  {
    title: 'Conversation: Camping in the hills',
    level: '2 · Dễ · 2 giọng',
    desc: 'Hai người bạn đi cắm trại.',
    rate: '-5%',
    voices: { Nam: 'en-US-GuyNeural', Emma: 'en-GB-LibbyNeural' },
    script: [
      ['Emma', "Wow, look at the view! You can see the mountains in the distance."],
      ['Nam', "It's amazing. Right, let's put up the tent before it gets dark. Can you pass me those poles?"],
      ['Emma', "Sure. Just let me put down this bag first. It's so heavy!"],
      ['Nam', "Thanks. … OK, the tent's done. Now we need a fire. It's going to be freezing tonight."],
      ['Emma', "I've got some wood. But be careful – it's very dry here. Look, there's a sign that says no fires in summer."],
      ['Nam', "It's autumn now, so it's OK. But we'll keep it small, and we'll put it out properly before we go to sleep."],
      ['Emma', "Good idea. Oh no, the fire's going out already!"],
      ['Nam', "Put some more wood on. … That's better. And tomorrow morning we must clear up all our rubbish. I hate it when people leave litter in the countryside."],
      ['Emma', "Me too. Hey – listen! Was that an owl?"],
    ],
    items: [
      { t: 'mcq', q: 'What can they see in the distance?', o: ['the sea', 'the mountains', 'a city', 'a lake'], a: 1 },
      { t: 'mcq', q: 'What do they do first?', o: ['make a fire', 'put up the tent', 'cook dinner', 'go for a walk'], a: 1 },
      { t: 'tf', q: 'Fires are not allowed in summer.', a: 'T' },
      { t: 'mcq', q: 'What will they do before they go to sleep?', o: ['put out the fire', 'build a bigger fire', 'leave the fire burning', 'go home'], a: 0 },
      { t: 'gap', q: 'Tomorrow morning they must clear up all their ___.', a: ['rubbish', 'litter'] },
      { t: 'mcq', q: 'What animal do they hear at the end?', o: ['a dog', 'a monkey', 'an owl', 'a snake'], a: 2 },
    ],
    dictation: ["Let's put up the tent before it gets dark.", 'We must clear up all our rubbish.'],
  },
  {
    title: 'Talk: Welcome to the wildlife rescue centre',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Nhân viên trung tâm cứu hộ động vật giới thiệu.',
    rate: '+0%',
    voices: { Guide: 'en-AU-NatashaNeural' },
    script: [
      ['Guide', "Hello, everyone, and welcome to the wildlife rescue centre. We were set up in 2005, and since then we've rescued more than three thousand animals."],
      ['Guide', "Most of our animals come to us because their homes have been destroyed, or because they were kept illegally as pets. In total, we look after about two hundred animals at the moment, including mammals, birds and reptiles."],
      ['Guide', "Our aim is always to return animals to the wild. Before that, they need time to get healthy and to learn to find their own food. For some animals, that takes a few weeks. For others, like bears, it can take years – and sadly, some can never go back."],
      ['Guide', "A few rules before we start. Please keep your voice down, and don't feed the animals – they're on special diets. And please don't touch anything inside the areas marked 'Keep Out'."],
      ['Guide', "The tour lasts an hour at most. At the end, you can visit our shop. All the money goes to the centre, so thank you for your support!"],
    ],
    items: [
      { t: 'gap', q: 'The centre was set up in ___.', a: ['2005'] },
      { t: 'gap', q: 'They have rescued more than ___ animals.', a: ['3,000', '3000', 'three thousand'] },
      { t: 'mcq', q: 'Why do most animals come to the centre?', o: ['They are old.', 'Their homes were destroyed or they were illegal pets.', 'Zoos send them.', 'They were born there.'], a: 1 },
      { t: 'gap', q: 'At the moment they look after about ___ animals.', a: ['200', 'two hundred'] },
      { t: 'tf', q: 'All animals can eventually go back to the wild.', a: 'F' },
      { t: 'mcq', q: 'Why shouldn’t visitors feed the animals?', o: ['They bite.', 'They are on special diets.', 'Food is expensive.', 'They are asleep.'], a: 1 },
    ],
    dictation: ['Our aim is always to return animals to the wild.', 'The tour lasts an hour at most.'],
  },
  {
    title: 'Radio interview: The problem of space junk',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn nhà thiên văn học về rác vũ trụ.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-RyanNeural', 'Dr Patel': 'en-US-AriaNeural' },
    script: [
      ['Presenter', "We usually think of pollution as a problem on Earth. But my guest, astronomer Dr Anita Patel, says we're polluting space too. Dr Patel, what is space junk?"],
      ['Dr Patel', "It's any human-made object in orbit around the Earth that no longer has a use – old satellites, parts of rockets, even tools that astronauts have dropped. There are more than thirty thousand pieces large enough to track, and millions of smaller ones."],
      ['Presenter', 'Why is that dangerous? Space is very big.'],
      ['Dr Patel', "It is, but these objects travel incredibly fast – about twenty-eight thousand kilometres an hour. At that speed, even a tiny piece of metal can destroy a satellite. And every collision creates more pieces, so the problem builds up."],
      ['Presenter', 'And why should ordinary people care?'],
      ['Dr Patel', "Because we depend on satellites every day – for weather forecasts, GPS, the internet, even bank payments. If important satellites were damaged, life on Earth would be seriously affected."],
      ['Presenter', 'Can anything be done?'],
      ['Dr Patel', "Yes. New rules say satellites must be removed from orbit after their missions end. Companies are also testing ways to catch old satellites – with nets, magnets, even giant arms. But it's expensive, and no single country can solve it. It's a global problem that needs global cooperation."],
    ],
    items: [
      { t: 'mcq', q: 'Which is NOT an example of space junk?', o: ['old satellites', 'parts of rockets', 'dropped tools', 'stars'], a: 3 },
      { t: 'gap', q: 'There are more than ___ pieces large enough to track.', a: ['30,000', '30000', 'thirty thousand'] },
      { t: 'gap', q: 'Space junk travels at about ___ kilometres an hour.', a: ['28,000', '28000', 'twenty-eight thousand', 'twenty eight thousand'] },
      { t: 'mcq', q: 'Why does the problem build up?', o: ['More rockets are launched every day.', 'Every collision creates more pieces.', 'Satellites get bigger.', 'The Earth pulls them closer.'], a: 1 },
      { t: 'mcq', q: 'Which use of satellites is NOT mentioned?', o: ['weather forecasts', 'GPS', 'bank payments', 'growing food'], a: 3 },
      { t: 'tf', q: 'Dr Patel thinks one country can solve the problem alone.', a: 'F' },
    ],
    dictation: ['Even a tiny piece of metal can destroy a satellite.', 'It is a global problem that needs global cooperation.'],
  },
  {
    title: 'Discussion: Are zoos good for wildlife?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3 về vai trò của sở thú.',
    rate: '+5%',
    voices: { Host: 'en-GB-ThomasNeural', Sarah: 'en-GB-SoniaNeural', James: 'en-AU-WilliamNeural' },
    script: [
      ['Host', "Today's question: do zoos help wildlife, or should they be closed? Sarah, you work at a zoo."],
      ['Sarah', "Modern zoos are very different from the zoos of fifty years ago. Our main purpose now is conservation. Several species, such as the Arabian oryx, would be extinct if zoos hadn't bred them and returned them to the wild."],
      ['James', "Those success stories are real, but they're rare. Most animals in zoos aren't endangered at all; they're there because visitors want to see them. Elephants, for instance, walk many kilometres a day in the wild. No zoo can give them that space, and many of them show signs of stress."],
      ['Sarah', "I agree that some animals aren't suitable for zoos, and the best zoos are stopping keeping them. But zoos also educate millions of people. Children who see a tiger up close are much more likely to care about protecting tigers."],
      ['James', "I'm not sure that's true. Studies on whether zoo visits actually change people's behaviour are mixed. And today, with high-quality documentaries, people can learn about animals in their natural environment without keeping them in cages."],
      ['Host', 'So what would you prefer, James?'],
      ['James', "Spend the money protecting habitats. If we preserve the forests and stop illegal hunting, animals won't need zoos to survive."],
      ['Sarah', "Ideally, yes. But habitats are being destroyed faster than we can protect them. For some species, zoos are the last safe place. I think we need both."],
    ],
    items: [
      { t: 'mcq', q: 'According to Sarah, what is the main purpose of modern zoos?', o: ['entertainment', 'conservation', 'making money', 'research only'], a: 1 },
      { t: 'gap', q: 'Sarah gives the example of the Arabian ___.', a: ['oryx'] },
      { t: 'mcq', q: 'Why does James mention elephants?', o: ['They are endangered.', 'Zoos can’t give them enough space.', 'They are popular with children.', 'They live long.'], a: 1 },
      { t: 'tf', q: 'James thinks documentaries can teach people about animals.', a: 'T' },
      { t: 'mcq', q: 'What does James want money to be spent on?', o: ['bigger zoos', 'protecting habitats', 'documentaries', 'breeding programmes'], a: 1 },
      { t: 'tf', q: 'At the end, Sarah says zoos alone are enough.', a: 'F' },
    ],
    dictation: ['Most animals in zoos are not endangered at all.', 'Habitats are being destroyed faster than we can protect them.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền: climate, forecast, heatwave, lightning, shower, thunder, insect, mammal, reptile, species, wildlife.',
    items: [
      { t: 'gap', q: 'Have you heard what the weather ___ is for tomorrow?', a: ['forecast'] },
      { t: 'gap', q: 'Britain is experiencing a ___. It’s unusually hot and it hasn’t rained for weeks.', a: ['heatwave'] },
      { t: 'gap', q: 'It won’t rain much, but there might be the occasional ___.', a: ['shower'] },
      { t: 'gap', q: 'The ___ was so loud I hid under the bed!', a: ['thunder'] },
      { t: 'gap', q: '___ hit a tree in the garden and a branch came off.', a: ['Lightning', 'lightning'] },
      { t: 'gap', q: 'I wish I lived in a country with a warmer ___.', a: ['climate'] },
      { t: 'gap', q: 'I don’t see a lot of ___ because I live in a big city.', a: ['wildlife'] },
      { t: 'gap', q: 'It’s very unusual to see this ___ of bird round here.', a: ['species'] },
      { t: 'gap', q: 'If it’s got six legs, it’s probably an ___.', a: ['insect'] },
      { t: 'gap', q: 'Snakes and lizards are different kinds of ___.', a: ['reptile'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: blow up, build up, clear up, go out, keep out, put down, put out, put up (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'They’re going to ___ the old bridge with dynamite.', a: ['blow up'] },
      { t: 'gap', q: 'Let’s ___ this rubbish and put it in the bin.', a: ['clear up'] },
      { t: 'gap', q: 'I’m going to ___ a sign to tell people not to drop litter.', a: ['put up'] },
      { t: 'gap', q: 'There was a sign saying “___” on the gate.', a: ['Keep Out', 'keep out'] },
      { t: 'gap', q: 'How long did it take to ___ the forest fire?', a: ['put out'] },
      { t: 'gap', q: 'I’ll just ___ this box and then I’ll help you.', a: ['put down'] },
      { t: 'gap', q: 'The traffic has ___ a lot round here over recent years.', a: ['built up'] },
      { t: 'gap', q: 'The fire will ___ unless we put some more wood on.', a: ['go out'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'A golden eagle was sitting ___ the tree.', o: ['on top of', 'in top of', 'at top'], a: 0 },
      { t: 'mcq', q: 'I could just see the mountain ___.', o: ['in the distance', 'at the distance', 'on the distance'], a: 0 },
      { t: 'mcq', q: 'It will take an hour ___ to pick up this rubbish.', o: ['at most', 'in most', 'on most'], a: 0 },
      { t: 'mcq', q: '___, there are over eighty types of animal in the zoo.', o: ['In total', 'At total', 'On total'], a: 0 },
      { t: 'mcq', q: 'There are lots of strange fish ___ the bottom of the sea.', o: ['in', 'at', 'on'], a: 1 },
      { t: 'mcq', q: 'Are you worried ___ our planet?', o: ['about', 'of', 'for'], a: 0 },
      { t: 'mcq', q: 'We’re aware ___ the problems.', o: ['about', 'of', 'with'], a: 1 },
      { t: 'mcq', q: 'We’re extremely short ___ time.', o: ['of', 'in', 'on'], a: 0 },
      { t: 'mcq', q: 'There’s been an increase ___ pollution.', o: ['of', 'in', 'on'], a: 1 },
      { t: 'mcq', q: 'We must prevent people ___ polluting the planet.', o: ['to', 'from', 'of'], a: 1 },
      { t: 'mcq', q: 'They care about the damage being done ___ the environment.', o: ['to', 'on', 'for'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'This path looks a bit ___ to me. (DANGER)', a: ['dangerous'] },
      { t: 'gap', q: 'This submarine only goes to a ___ of 500 metres. (DEEP)', a: ['depth'] },
      { t: 'gap', q: 'Scientists worry about the ___ of the rainforests. (DESTROY)', a: ['destruction'] },
      { t: 'gap', q: '___ must be a very interesting hobby. (GARDEN)', a: ['Gardening', 'gardening'] },
      { t: 'gap', q: 'Air ___ is a serious problem in cities. (POLLUTE)', a: ['pollution'] },
      { t: 'gap', q: 'What’s it like living in ___ London? (CENTRE)', a: ['central'] },
      { t: 'gap', q: 'Animals should live in their ___ environment. (NATURE)', a: ['natural'] },
      { t: 'gap', q: 'It’s so ___ that I can’t see where I’m going. (FOG)', a: ['foggy'] },
      { t: 'gap', q: 'What would you do if there was an ___ of the Earth by aliens? (INVADE)', a: ['invasion'] },
      { t: 'gap', q: 'The island is almost completely ___. (CIRCLE)', a: ['circular'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['global', 'warming'], ['climate', 'change'], ['the solar', 'system'], ['an endangered', 'species'], ['the weather', 'forecast'], ['wild', 'animals'], ['air', 'pollution'], ['put out', 'a fire']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “freezing”:', o: ['boiling', 'mild', 'foggy', 'wild'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “global”:', o: ['local', 'wild', 'natural', 'amazing'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “preserve”:', o: ['protect', 'destroy', 'pollute', 'invade'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “put up (a sign)”:', o: ['take down', 'put out', 'blow up', 'clear up'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “blow up”:', o: ['explode', 'increase', 'tidy', 'stop burning'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “at most”:', o: ['at least', 'in total', 'on top', 'at first'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “extinct”:', o: ['died out', 'wild', 'rare', 'endangered'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Nhiều loài động vật đang có nguy cơ tuyệt chủng.', ref: 'Many species of animals are in danger of becoming extinct.', focus: 'species, extinct' },
      { t: 'tr', vi: 'Biến đổi khí hậu là một vấn đề toàn cầu.', ref: 'Climate change is a global problem.', focus: 'climate, global' },
      { t: 'tr', vi: 'Nếu tất cả chúng ta tái chế rác, ít cây sẽ bị chặt hơn.', ref: 'If we all recycled our rubbish, fewer trees would be cut down.', focus: 'recycle + second conditional' },
      { t: 'tr', vi: 'Làm ơn đừng xả rác ở công viên.', ref: "Please don't drop litter in the park.", focus: 'litter' },
      { t: 'tr', vi: 'Ô nhiễm không khí ở Hà Nội ngày càng nghiêm trọng.', ref: 'Air pollution in Hanoi is getting more and more serious.', focus: 'pollution' },
      { t: 'tr', vi: 'Chính phủ nên ngăn các công ty gây ô nhiễm sông ngòi.', ref: 'The government should prevent companies from polluting rivers.', focus: 'prevent sb from (IELTS)' },
      { t: 'tr', vi: 'Mọi người cần nhận thức rõ hơn về thiệt hại mà chúng ta đang gây ra cho môi trường.', ref: 'People need to be more aware of the damage we are doing to the environment.', focus: 'aware of, damage to (IELTS)' },
      { t: 'tr', vi: 'Đã có sự gia tăng đáng kể về số lượng đợt nắng nóng trong những năm gần đây.', ref: 'There has been a significant increase in the number of heatwaves in recent years.', focus: 'an increase in (IELTS Writing Task 1)' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'What’s the weather like in your hometown?' },
  { part: 'Part 1', q: 'Do you prefer living in the city or the countryside?' },
  { part: 'Part 1', q: 'Have you ever looked at the stars at night?' },
  { part: 'Part 1', q: 'Do you recycle? Why or why not?' },
  { part: 'Part 2', q: 'Describe a beautiful natural place you have visited.', cue: ['where it is', 'when you went there', 'what you did there', 'and explain why you think it is beautiful'] },
  { part: 'Part 3', q: 'What are the biggest environmental problems in your country?' },
  { part: 'Part 3', q: 'Should governments or individuals be responsible for protecting the environment?' },
  { part: 'Part 3', q: 'Do you think zoos are a good way to protect animals?' },
  { part: 'Part 3', q: 'Is it worth spending money on space exploration?' },
];

export default {
  id: 'b1-u36',
  book: 'b1',
  no: 36,
  title: 'Nature and the universe',
  titleVi: 'Thiên nhiên & vũ trụ',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
