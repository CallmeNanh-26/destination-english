// Unit 9 – Vocabulary: Coming and going (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u09-vocab.js';

const reading = [
  {
    title: 'A postcard from Phu Quoc',
    level: 'Dễ · ~170 từ',
    text: `Dear Grandma,

We're having a wonderful time on Phu Quoc! The journey here was a bit stressful, though. Our flight from Hanoi was delayed by two hours, and when we finally reached the island, it was nearly midnight.

Our accommodation is a small family hotel close to the beach. It isn't a luxury resort, but the rooms are clean and comfortable, and the owners provide us with a delicious breakfast every morning.

Yesterday we took a boat trip to some small islands nearby. The sea was so clear that we could see the fish! Today we're exploring the town on foot. There's a busy harbour full of fishing boats, and a night market that is famous for its seafood.

I've bought you a souvenir – a little bottle of the island's famous fish sauce. Don't worry, I've packed it very carefully in my luggage!

We're going back home on Sunday. See you soon!

Love,
Mai`,
    items: [
      { t: 'mcq', q: 'Why was the journey stressful?', o: ['They lost their luggage.', 'Their flight was delayed.', 'The hotel was full.', 'The sea was rough.'], a: 1 },
      { t: 'tf', q: 'Mai is staying at a luxury resort.', a: 'F', ex: '“It isn’t a luxury resort”' },
      { t: 'tf', q: 'Breakfast is included at the hotel.', a: 'T', ex: '“provide us with a delicious breakfast every morning”' },
      { t: 'mcq', q: 'How is Mai exploring the town today?', o: ['by bike', 'by taxi', 'on foot', 'by boat'], a: 2 },
      { t: 'gap', q: 'The night market is famous for its ___.', a: ['seafood'] },
      { t: 'mcq', q: 'What souvenir has Mai bought?', o: ['a T-shirt', 'fish sauce', 'a postcard', 'some seafood'], a: 1 },
    ],
  },
  {
    title: 'Travelling light: why less is more',
    level: 'Dễ–Trung bình · ~260 từ',
    text: `When most people pack for a holiday, they make the same mistake: they take far too much. Two pairs of shoes become five, "just in case" becomes the rule, and the suitcase becomes so heavy that it needs two people to lift it.

More and more travellers, however, are choosing to travel light – with nothing but hand luggage. The advantages are surprising.

First, it saves money. Many airlines now charge extra for checked bags, sometimes more than the price of the ticket itself. Second, it saves time. You don't have to wait at the baggage belt when you arrive, and there's no risk of your luggage being lost or sent to the wrong destination. Third, it makes the journey itself more pleasant. Getting on and off crowded trains, climbing stairs in old hotels and walking through busy streets are all much easier with one small bag.

So how do you do it? Experts suggest choosing clothes that match each other, so that a few items can make many different outfits. Wear your heaviest shoes and jacket on the plane. Buy small bottles of shampoo, or simply use the ones your accommodation provides. And remember that most destinations have shops: if you really forget something, you can usually buy it there.

"The first time I travelled with just a backpack, I felt nervous," says Linh, a student from Da Nang who spent a month in Europe. "But by the end of the trip, I felt free. I never want to drag a huge suitcase across a city again."`,
    items: [
      { t: 'mcq', q: 'What is the common packing mistake?', o: ['forgetting the passport', 'taking too much', 'packing too late', 'buying a small suitcase'], a: 1 },
      { t: 'tf', q: 'Some airlines charge more for checked bags than for the ticket.', a: 'T' },
      { t: 'mcq', q: 'Which is NOT mentioned as an advantage of travelling light?', o: ['saving money', 'saving time', 'meeting new people', 'easier movement'], a: 2 },
      { t: 'gap', q: 'Experts suggest wearing your heaviest shoes and jacket on the ___.', a: ['plane'] },
      { t: 'tf', q: 'Linh felt confident the first time she travelled with a backpack.', a: 'F', ex: '“I felt nervous”' },
      { t: 'mcq', q: 'How did Linh feel at the end of her trip?', o: ['tired', 'free', 'disappointed', 'lost'], a: 1 },
    ],
  },
  {
    title: 'Slow travel',
    level: 'Trung bình · ~310 từ',
    text: `Ten countries in ten days. For many tourists, a holiday is a race: they rush from one famous attraction to the next, take a photo, buy a souvenir and hurry back to the coach. They return home with hundreds of pictures but very few real memories.

The "slow travel" movement offers an alternative. Instead of visiting many places quickly, slow travellers choose one destination and stay there for a longer time – a week, a month or even more. They rent a flat rather than staying in a hotel, shop at local markets and use public transport or explore on foot.

Supporters say this way of travelling has several benefits. It is less tiring, because you spend less time packing, catching flights and waiting at airports. It is often cheaper, as long stays in apartments cost less per night than hotels. Most importantly, it allows travellers to understand the place they are visiting. "When you stay in a village for a month, you become part of the neighbourhood," explains travel writer Anna Brooks. "The baker knows your name. You learn a few words of the language. You see how people really live."

Slow travel is also better for the environment. Flights are responsible for a large part of tourism's carbon emissions, and taking fewer, longer trips by train or ferry reduces this significantly.

Of course, slow travel is not for everyone. Many people only have one or two weeks of holiday a year, and they want to see as much as possible. But even on a short break, travellers can follow the same idea: choose fewer places, stay longer in each, and leave time simply to sit in a café and watch the world go by.`,
    items: [
      { t: 'mcq', q: 'According to the writer, many tourists return home with…', o: ['lots of photos but few real memories', 'no souvenirs', 'too much luggage', 'new friends'], a: 0 },
      { t: 'mcq', q: 'Slow travellers usually…', o: ['visit many countries quickly', 'stay longer in one place', 'only travel by plane', 'stay in luxury hotels'], a: 1 },
      { t: 'tf', q: 'Slow travel is usually more expensive than normal travel.', a: 'F', ex: '“It is often cheaper”' },
      { t: 'mcq', q: 'What is the most important benefit, according to supporters?', o: ['saving money', 'understanding the place you visit', 'taking better photos', 'avoiding crowds'], a: 1 },
      { t: 'tf', q: 'Flights produce a large part of tourism’s carbon emissions.', a: 'T' },
      { t: 'tf', q: 'The writer thinks everyone should only do slow travel.', a: 'F', ex: '“slow travel is not for everyone”' },
      { t: 'mcq', q: '“watch the world go by” means…', o: ['travel around the world', 'relax and watch people and life around you', 'look at a map', 'watch TV'], a: 1 },
    ],
  },
  {
    title: 'The longest bus journey of my life',
    level: 'Trung bình–Khó · ~360 từ',
    text: `I had always wanted to travel abroad on my own, so when I finished university I bought a backpack, booked a cheap flight to South America and promised my parents I would be careful. Nothing, however, had prepared me for the bus from Lima to Cusco.

The ticket said the journey would take twenty hours. The man at the coach station smiled when I asked if it usually left on schedule. "More or less," he said. I should have understood what that meant.

We set off three hours late, after the driver had spent a long time arguing with someone on the phone. The bus was crowded and the seats were less comfortable than they had looked in the photos online. Still, the views were incredible: deserts, then mountains, then valleys so green they hardly looked real.

Around midnight, the bus suddenly stopped. A truck had crashed on the narrow mountain road ahead, and nobody could pass. Luckily, nobody had been seriously hurt, but we would have to wait until the road was cleared. That took nine hours. Passengers got off to stretch their legs, a woman sold hot soup from a huge pot, and a group of students played the guitar. An old man taught me how to play a local card game, and beat me every single time.

By the time we finally reached Cusco, the journey had taken thirty-four hours. I was tired, hungry and badly needed a shower. And yet, strangely, it remains one of my favourite travel memories.

When I tell this story, people often ask why I didn't just fly. The flight would have taken an hour and a half. But I would never have seen those mountains, tasted that soup or learnt that card game. Sometimes the delays and problems are exactly what make a journey worth remembering.`,
    items: [
      { t: 'mcq', q: 'Why did the writer go to South America?', o: ['for work', 'to visit family', 'to travel alone after university', 'to study'], a: 2 },
      { t: 'tf', q: 'The bus left on time.', a: 'F', ex: '“We set off three hours late”' },
      { t: 'mcq', q: 'Why did the bus stop around midnight?', o: ['It broke down.', 'A truck had crashed on the road ahead.', 'The driver was tired.', 'There was a festival.'], a: 1 },
      { t: 'gap', q: 'The passengers waited ___ hours for the road to be cleared.', a: ['nine', '9'] },
      { t: 'tf', q: 'The writer won the card game several times.', a: 'F', ex: 'Ông lão “beat me every single time”.' },
      { t: 'gap', q: 'In total, the journey took ___ hours.', a: ['thirty-four', '34', 'thirty four'] },
      { t: 'mcq', q: 'What is the writer’s main message?', o: ['Always fly when possible.', 'Buses in South America are dangerous.', 'Problems on a journey can create the best memories.', 'Never travel alone.'], a: 2 },
    ],
  },
  {
    title: 'Overtourism: when visitors become a problem',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `Every summer, the narrow streets of Venice become so crowded that residents can hardly walk to the shops. In Barcelona, local people have marched through the city with signs telling tourists to go home. In Asia, too, famous destinations from Bali to Ha Long Bay are struggling with the same question: what happens when a place becomes too popular?

The term "overtourism" describes the situation in which the number of visitors damages a destination – its environment, its culture or the quality of life of the people who live there. The causes are easy to understand. Cheap flights have made travel abroad affordable for millions of people who could never travel before. Social media encourages everyone to visit the same famous spots and take the same photographs. Cruise ships can bring thousands of passengers into a small harbour town in a single morning.

The effects can be serious. Rents rise as apartments are turned into holiday accommodation, forcing local families to move out of the neighbourhoods where they grew up. Traditional shops are replaced by souvenir stalls. Beaches, coral reefs and mountain paths are damaged by too many feet. Ironically, the very things that made a place attractive can be destroyed by the people who come to see them.

Governments are trying different solutions. Venice now charges day visitors an entry fee at busy times. Amsterdam has banned new souvenir shops in its historic centre. The Philippines closed the island of Boracay for six months to clean its beaches and fix its water system. Some cities limit the number of cruise ships that can arrive each day.

Tourists can also make a difference. Experts suggest travelling outside the peak season, choosing less famous destinations, staying longer in one place rather than making short day trips, and spending money in small, locally owned businesses. Even simple actions – learning a few words of the local language, respecting quiet hours, following signs in natural areas – help to make visitors welcome rather than resented.

Tourism brings enormous benefits: jobs, income and the chance for people from different cultures to meet. The challenge for the future is not to stop people travelling, but to make sure that the places we love are still worth visiting – and still pleasant to live in – for generations to come.`,
    items: [
      { t: 'mcq', q: 'What does “overtourism” mean?', o: ['travelling too often', 'too many visitors damaging a place', 'expensive holidays', 'tourists who stay too long'], a: 1 },
      { t: 'mcq', q: 'Which is NOT given as a cause of overtourism?', o: ['cheap flights', 'social media', 'cruise ships', 'bad weather'], a: 3 },
      { t: 'tf', q: 'Overtourism can force local families to leave their neighbourhoods.', a: 'T' },
      { t: 'mcq', q: 'What does “ironically” suggest in paragraph 3?', o: ['Tourists destroy the things they come to see.', 'Tourism is always good.', 'Locals like souvenir shops.', 'Places become more attractive.'], a: 0 },
      { t: 'gap', q: 'The Philippines closed Boracay for ___ months.', a: ['six', '6'] },
      { t: 'tf', q: 'Amsterdam has banned all tourists from its centre.', a: 'F', ex: 'Chỉ cấm mở thêm cửa hàng lưu niệm.' },
      { t: 'mcq', q: 'Which advice for tourists is given?', o: ['Travel only in summer.', 'Visit only famous places.', 'Spend money in local businesses.', 'Make many short day trips.'], a: 2 },
      { t: 'tf', q: 'The writer believes people should stop travelling.', a: 'F' },
    ],
  },
];

const listening = [
  {
    title: 'Station announcements',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Thông báo tại nhà ga. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-LibbyNeural' },
    script: [
      ['N', 'Good morning, ladies and gentlemen. This is an announcement for passengers travelling to Brighton.'],
      ['N', 'The nine fifteen train to Brighton is delayed by approximately twenty minutes. This train will now depart from platform six, not platform four. We apologise for the delay.'],
      ['N', 'Passengers for Oxford, please note that the ten o’clock service has been cancelled because of a problem with the track. The next train to Oxford will leave at ten thirty from platform two.'],
      ['N', 'Please keep your luggage with you at all times. Lost property can be collected from the information desk next to the main entrance.'],
      ['N', 'Thank you for travelling with us.'],
    ],
    items: [
      { t: 'gap', q: 'The 9.15 train to Brighton is delayed by about ___ minutes.', a: ['20', 'twenty'] },
      { t: 'gap', q: 'The Brighton train will leave from platform ___.', a: ['6', 'six'] },
      { t: 'mcq', q: 'What has happened to the 10 o’clock train to Oxford?', o: ['It is delayed.', 'It has been cancelled.', 'It is changing platform.', 'It is leaving early.'], a: 1 },
      { t: 'gap', q: 'The next Oxford train leaves at ___.', a: ['10.30', '10:30', 'ten thirty', 'half past ten'] },
      { t: 'mcq', q: 'Where is lost property?', o: ['on platform 2', 'at the information desk', 'in the café', 'at the ticket office'], a: 1 },
    ],
    dictation: ['This train will now depart from platform six.', 'We apologise for the delay.', 'Please keep your luggage with you at all times.'],
  },
  {
    title: 'Talk: My first trip abroad',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một người kể về chuyến đi nước ngoài đầu tiên.',
    rate: '-5%',
    voices: { N: 'en-US-GuyNeural' },
    script: [
      ['N', "My first trip abroad was to Japan, when I was nineteen. I'd saved money for almost two years, working in a café at weekends."],
      ['N', "I was so excited that I packed my suitcase a week before I left. And of course, I packed far too much. When I got to the airport, my bag was three kilos over the limit, and I had to pay forty dollars extra. That was a lesson!"],
      ['N', "In Tokyo, I stayed in a tiny hotel room. It was so small that I could touch both walls at the same time. But it was very clean and convenient, just two minutes from the station."],
      ['N', "The thing that surprised me most was public transport. The trains were always on schedule, to the minute. And even when they were crowded, everyone was completely silent."],
      ['N', "I spent ten days there, and I'd love to go back. Next time, though, I'm only taking hand luggage."],
    ],
    items: [
      { t: 'gap', q: 'He was ___ years old on his first trip abroad.', a: ['19', 'nineteen'] },
      { t: 'mcq', q: 'How did he save money for the trip?', o: ['working in a café', 'teaching English', 'selling his car', 'his parents gave it'], a: 0 },
      { t: 'mcq', q: 'Why did he pay extra at the airport?', o: ['He was late.', 'His bag was too heavy.', 'He changed his flight.', 'He forgot his passport.'], a: 1 },
      { t: 'tf', q: 'His hotel room was large.', a: 'F' },
      { t: 'mcq', q: 'What surprised him most?', o: ['the food', 'public transport', 'the prices', 'the weather'], a: 1 },
      { t: 'gap', q: 'He stayed in Japan for ___ days.', a: ['10', 'ten'] },
    ],
  },
  {
    title: 'Conversation: Booking a weekend break',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Lucy và Sam lên kế hoạch cho một kỳ nghỉ cuối tuần.',
    rate: '+0%',
    voices: { Lucy: 'en-GB-SoniaNeural', Sam: 'en-GB-RyanNeural' },
    script: [
      ['Lucy', "Sam, I really need a break. Shall we go away somewhere next weekend?"],
      ['Sam', "Good idea. Where were you thinking? The coast?"],
      ['Lucy', "Yes, somewhere by the sea. What about Brighton? It's not far from London."],
      ['Sam', "Brighton will be really crowded on a sunny weekend. What about somewhere quieter, like Whitstable? It's famous for its oysters."],
      ['Lucy', "Ooh, I like seafood. How do we get there?"],
      ['Sam', "We could drive, but the traffic on Friday evenings is terrible. The train's easier. It takes about an hour and a half."],
      ['Lucy', "OK, let's go by train. What about accommodation? A hotel?"],
      ['Sam', "Hotels there are quite expensive. I found a little flat to rent near the harbour. It's eighty-five pounds a night."],
      ['Lucy', "That's fine if we share it. Shall I book the train tickets and you book the flat?"],
      ['Sam', "Deal. Let's set off early on Saturday, so we have the whole day there."],
      ['Lucy', "Not too early! I'll book the nine o'clock train."],
    ],
    items: [
      { t: 'tf', q: 'Sam thinks Brighton will be crowded.', a: 'T' },
      { t: 'mcq', q: 'Whitstable is famous for its…', o: ['beaches', 'oysters', 'castle', 'nightlife'], a: 1 },
      { t: 'mcq', q: 'Why don’t they drive?', o: ['They don’t have a car.', 'The traffic on Friday evenings is bad.', 'Parking is expensive.', 'Lucy can’t drive.'], a: 1 },
      { t: 'gap', q: 'The train journey takes about an hour and a ___.', a: ['half'] },
      { t: 'mcq', q: 'Where will they stay?', o: ['in a hotel', 'in a flat near the harbour', 'with friends', 'at a campsite'], a: 1 },
      { t: 'gap', q: 'The flat costs £___ a night.', a: ['85', 'eighty-five', 'eighty five'] },
      { t: 'mcq', q: 'What will Lucy do?', o: ['book the flat', 'book the train tickets', 'drive', 'cook dinner'], a: 1 },
    ],
    dictation: ["It's not far from London.", "I found a little flat to rent near the harbour."],
  },
  {
    title: 'Radio interview: Life as a flight attendant',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một tiếp viên hàng không với 15 năm kinh nghiệm.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-RyanNeural', Kate: 'en-AU-NatashaNeural' },
    script: [
      ['Presenter', "Today on Working Lives, I'm talking to Kate Morris, who has been a flight attendant for fifteen years. Kate, people often think your job is very glamorous. Is it?"],
      ['Kate', "Sometimes! I've been to more than sixty countries, and I've seen some incredible places. But most of the time, you see the airport and the hotel, and then you're on the next flight."],
      ['Presenter', "What does a typical day look like?"],
      ['Kate', "There's no typical day, really. On a long-haul flight, I might start work at five in the morning and finish fourteen hours later in a different time zone. Before passengers come on board, we check all the safety equipment. Then it's serving meals, helping people, and dealing with any problems."],
      ['Presenter', "What kind of problems?"],
      ['Kate', "Usually small things: a passenger who's nervous about flying, or someone who's put their luggage in the wrong place. Occasionally there's a medical emergency. Once, a man became very ill over the Pacific, and we had to land in Hawaii. Luckily, there was a doctor on board."],
      ['Presenter', "What's the hardest part of the job?"],
      ['Kate', "Being away from home. I miss birthdays, weddings, Christmas. And jet lag is really tiring. You never quite know what time your body thinks it is."],
      ['Presenter', "Would you recommend the job?"],
      ['Kate', "Yes, but only if you're patient, flexible and you genuinely like people. If you just want to travel, it's probably better to go on holiday!"],
    ],
    items: [
      { t: 'gap', q: 'Kate has been a flight attendant for ___ years.', a: ['15', 'fifteen'] },
      { t: 'gap', q: 'She has visited more than ___ countries.', a: ['60', 'sixty'] },
      { t: 'tf', q: 'Kate usually has lots of time to explore the places she flies to.', a: 'F' },
      { t: 'mcq', q: 'What do attendants do before passengers board?', o: ['serve drinks', 'check the safety equipment', 'clean the toilets', 'sell souvenirs'], a: 1 },
      { t: 'mcq', q: 'Why did the plane once land in Hawaii?', o: ['bad weather', 'a passenger became very ill', 'a technical problem', 'they ran out of fuel'], a: 1 },
      { t: 'mcq', q: 'What is the hardest part of the job for Kate?', o: ['difficult passengers', 'being away from home', 'low pay', 'long training'], a: 1 },
      { t: 'mcq', q: 'Who does Kate think should do this job?', o: ['people who only want to travel', 'patient, flexible people who like others', 'people who speak many languages', 'young people'], a: 1 },
    ],
  },
  {
    title: 'Discussion: Should tourists pay to enter cities?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về phí vào cửa cho du khách ở các thành phố đông khách.',
    rate: '+5%',
    voices: { Host: 'en-GB-SoniaNeural', David: 'en-US-GuyNeural', Elena: 'en-AU-NatashaNeural' },
    script: [
      ['Host', "Good evening. Several popular destinations now charge day visitors an entry fee, and more cities are considering the idea. With me are David Lee, who runs a tour company, and Elena Rossi, who represents residents in a historic city centre. Elena, why do you support these fees?"],
      ['Elena', "Because our neighbourhoods are disappearing. On a busy day, we have more tourists than residents. Rents have gone up so much that young families can't afford to stay. A small fee won't solve everything, but it reduces the numbers at peak times and it raises money to repair the damage."],
      ['Host', "David, you're not convinced."],
      ['David', "I understand the problem, I really do. But I'm worried that fees punish the wrong people. Day visitors are often families on a budget, students, people who can't afford a hotel. Wealthy tourists on cruise ships will simply pay and keep coming."],
      ['Elena', "That's a fair point about cruise ships. In fact, I'd be in favour of much higher charges for them. A single ship can bring five thousand people into a small harbour in one morning."],
      ['David', "On that we agree. I'd also say that the bigger issue is that everyone visits the same three streets. Cities should be promoting other areas and other seasons, spreading visitors out, rather than just putting up a gate."],
      ['Host', "Is there any evidence that fees actually work?"],
      ['Elena', "It's still early. In some places numbers have fallen slightly on the busiest days, but most people seem willing to pay. I think the fee is more valuable as a message: this is a living city, not a theme park."],
      ['David', "And my message would be: let's manage tourism better before we start charging people to walk down a street."],
      ['Host', "David Lee and Elena Rossi, thank you both."],
    ],
    items: [
      { t: 'mcq', q: 'Why does Elena support entry fees?', o: ['to make cities richer', 'to reduce numbers at peak times and pay for repairs', 'to stop all tourism', 'to help tour companies'], a: 1 },
      { t: 'tf', q: 'Elena says young families can no longer afford to live in her area.', a: 'T' },
      { t: 'mcq', q: 'What is David’s main worry?', o: ['Fees are too low.', 'Fees punish budget travellers more than rich tourists.', 'Fees are illegal.', 'Tourists will stop coming.'], a: 1 },
      { t: 'gap', q: 'A single cruise ship can bring ___ people into a small harbour.', a: ['5000', '5,000', 'five thousand'] },
      { t: 'tf', q: 'David and Elena agree about cruise ships.', a: 'T' },
      { t: 'mcq', q: 'What does David suggest instead?', o: ['banning tourists', 'spreading visitors to other areas and seasons', 'building more hotels', 'cheaper flights'], a: 1 },
      { t: 'mcq', q: 'According to Elena, the fee is most valuable as…', o: ['a source of money', 'a message that the city is a living place', 'a way to stop cruises', 'a tourist attraction'], a: 1 },
    ],
    dictation: ['A small fee will not solve everything.', 'This is a living city, not a theme park.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: accommodation, book, cancel, catch, crowded, delay, destination, luggage, souvenir, traffic',
    items: [
      { t: 'gap', q: 'Our flight was ___ by three hours because of fog.', a: ['delayed'] },
      { t: 'gap', q: 'We ran to the station but didn’t ___ the last train.', a: ['catch'] },
      { t: 'gap', q: 'I’ve ___ a table for four at 8 p.m.', a: ['booked'] },
      { t: 'gap', q: 'The concert was ___ because the singer was ill.', a: ['cancelled', 'canceled'] },
      { t: 'gap', q: 'Students can find cheap ___ near the university.', a: ['accommodation'] },
      { t: 'gap', q: 'The market was so ___ that we could hardly move.', a: ['crowded'] },
      { t: 'gap', q: 'Bali is a popular holiday ___ for Australians.', a: ['destination'] },
      { t: 'gap', q: 'Please don’t leave your ___ unattended.', a: ['luggage'] },
      { t: 'gap', q: 'The ___ in Hanoi is terrible at rush hour.', a: ['traffic'] },
      { t: 'gap', q: 'I bought a small ___ for each of my friends.', a: ['souvenir'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: get in, get off, get on, get out of, go away, go back, set off, take off (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'The plane ___ an hour late because of the storm.', a: ['took off'] },
      { t: 'gap', q: 'We ___ at 5 a.m. to avoid the traffic.', a: ['set off'] },
      { t: 'gap', q: '___ the bus at the stop after the museum.', a: ['Get off'] },
      { t: 'gap', q: "Quick, ___ the car! It's starting to rain.", a: ['get in', 'get into'] },
      { t: 'gap', q: "We're ___ for the weekend, so we won't be at home.", a: ['going away'] },
      { t: 'gap', q: 'I’d love to ___ to Hoi An one day.', a: ['go back'] },
      { t: 'gap', q: 'She ___ the taxi and paid the driver.', a: ['got out of'] },
      { t: 'gap', q: 'Hurry up and ___ the train – the doors are closing!', a: ['get on'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'We went to the old town ___ foot.', o: ['by', 'on', 'in'], a: 1 },
      { t: 'mcq', q: 'They travelled to Japan ___ air.', o: ['by', 'on', 'with'], a: 0 },
      { t: 'mcq', q: 'There were 300 passengers ___ board.', o: ['in', 'at', 'on'], a: 2 },
      { t: 'mcq', q: 'Hue is famous ___ its royal tombs.', o: ['of', 'for', 'with'], a: 1 },
      { t: 'mcq', q: 'We arrived ___ the airport two hours early.', o: ['in', 'at', 'to'], a: 1 },
      { t: 'mcq', q: 'The hotel provides guests ___ free Wi-Fi.', o: ['for', 'with', 'by'], a: 1 },
      { t: 'mcq', q: 'This beach isn’t suitable ___ small children.', o: ['to', 'for', 'with'], a: 1 },
      { t: 'mcq', q: 'We waited ___ the ferry for two hours.', o: ['for', 'to', 'on'], a: 0 },
      { t: 'mcq', q: 'The trains are running ___ schedule today.', o: ['in', 'at', 'on'], a: 2 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'The Temple of Literature is a popular tourist ___. (ATTRACT)', a: ['attraction'] },
      { t: 'gap', q: 'Please arrive at the airport two hours before ___. (DEPART)', a: ['departure'] },
      { t: 'gap', q: 'The seats on the night bus were very ___. (COMFORT)', a: ['uncomfortable'] },
      { t: 'gap', q: 'Can you give me ___ to the station? (DIRECT)', a: ['directions'] },
      { t: 'gap', q: 'The museum welcomes thousands of ___ every day. (VISIT)', a: ['visitors'] },
      { t: 'gap', q: 'The taxi ___ didn’t know the way. (DRIVE)', a: ['driver'] },
      { t: 'gap', q: 'Have you ever ___ in a helicopter? (FLY)', a: ['flown'] },
      { t: 'gap', q: 'We had a ___ of three different tours. (CHOOSE)', a: ['choice'] },
      { t: 'gap', q: 'Experienced ___ always pack light. (TRAVEL)', a: ['travellers', 'travelers'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép động từ với cụm danh từ phù hợp.',
    items: [
      { t: 'match', pairs: [['book', 'a room'], ['catch', 'a train'], ['pack', 'your suitcase'], ['reach', 'your destination'], ['miss', 'a flight'], ['take', 'a break'], ['go on', 'a cruise'], ['use', 'public transport']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Đồng nghĩa với “abroad”:', o: ['nearby', 'overseas', 'local', 'domestic'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “take off” (máy bay):', o: ['land', 'set off', 'get on', 'go away'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “crowded”:', o: ['busy', 'packed', 'empty', 'convenient'], a: 2 },
      { t: 'mcq', q: 'Đồng nghĩa với “reach (a place)”:', o: ['leave', 'arrive at', 'book', 'cancel'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “catch (a bus)”:', o: ['miss', 'take', 'get on', 'book'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “set off”:', o: ['arrive', 'leave / start a journey', 'stay', 'come back'], a: 1 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Chuyến bay của chúng tôi bị hoãn ba tiếng vì thời tiết xấu.', ref: 'Our flight was delayed by three hours because of bad weather.', focus: 'delay' },
      { t: 'tr', vi: 'Chúng tôi khởi hành lúc 5 giờ sáng để tránh kẹt xe.', ref: 'We set off at 5 a.m. to avoid the traffic.', focus: 'set off, traffic' },
      { t: 'tr', vi: 'Hội An nổi tiếng với những chiếc đèn lồng đầy màu sắc.', ref: 'Hoi An is famous for its colourful lanterns.', focus: 'famous for' },
      { t: 'tr', vi: 'Khách sạn cung cấp cho khách bữa sáng miễn phí.', ref: 'The hotel provides guests with free breakfast.', focus: 'provide sb with' },
      { t: 'tr', vi: 'Bạn nên đặt chỗ ở trước vì mùa hè rất đông khách.', ref: 'You should book your accommodation in advance because summer is very crowded.', focus: 'book, accommodation, crowded' },
      { t: 'tr', vi: 'Tôi chưa bao giờ đi nước ngoài một mình.', ref: "I've never travelled abroad on my own.", focus: 'abroad (no “to”)' },
      { t: 'tr', vi: 'Xuống xe buýt ở trạm tiếp theo rồi đi bộ khoảng năm phút.', ref: 'Get off the bus at the next stop and walk for about five minutes.', focus: 'get off, on foot' },
      { t: 'tr', vi: 'Phương tiện công cộng ở thành phố này rất tiện lợi và rẻ.', ref: 'Public transport in this city is very convenient and cheap.', focus: 'public transport, convenient' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you like travelling? Why or why not?' },
  { part: 'Part 1', q: 'How do you usually get to work or school?' },
  { part: 'Part 1', q: 'Do you prefer travelling alone or with other people?' },
  { part: 'Part 1', q: 'What do you usually pack when you go on a trip?' },
  { part: 'Part 2', q: 'Describe a memorable journey you have made.', cue: ['where you went', 'how you travelled', 'who you went with', 'and explain why the journey was memorable'] },
  { part: 'Part 3', q: 'What are the advantages and disadvantages of tourism for a local area?' },
  { part: 'Part 3', q: 'How can governments encourage people to use public transport?' },
  { part: 'Part 3', q: 'Do you think people will travel more or less in the future? Why?' },
  { part: 'Part 3', q: 'Is it better to visit many places quickly or one place slowly?' },
];

export default {
  id: 'b1-u09',
  book: 'b1',
  no: 9,
  title: 'Coming and going',
  titleVi: 'Đi lại & du lịch',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
