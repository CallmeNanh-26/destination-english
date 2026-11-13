// B2 Unit 2 – Vocabulary: Travel and transport (Destination B2).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u02-vocab.js';

const reading = [
  {
    title: 'My first solo trip',
    level: 'Dễ · ~200 từ',
    text: `Last summer I went on my first trip abroad on my own. I was twenty and I had always dreamed of seeing Japan.

I booked my flight three months in advance, which saved me a lot of money. The journey from Hanoi to Tokyo took about six hours, and the plane took off a little late, but I didn't mind.

When I arrived at Narita Airport, I was afraid of getting lost, so I had planned my route to the hostel very carefully. Even so, I lost my way twice in the huge train stations! A kind old man saw that I was confused and guided me to the right platform.

I stayed in a small hostel in Asakusa. Every morning I set off early to see the sights: temples, gardens and busy shopping streets. One day I went on an excursion to Mount Fuji. The view from the lake was unforgettable.

I only regret not staying longer. Travelling alone taught me to be independent, and it really broadened my mind.`,
    items: [
      { t: 'gap', q: 'The writer booked the flight three months in ___.', a: ['advance'] },
      { t: 'tf', q: 'The plane left on time.', a: 'F' },
      { t: 'mcq', q: 'Why had the writer planned the route carefully?', o: ['to save money', 'because of a fear of getting lost', 'because the hostel asked', 'to meet a friend'], a: 1 },
      { t: 'gap', q: 'The writer lost the way ___ in the stations.', a: ['twice', 'two times'] },
      { t: 'mcq', q: 'Where did the writer go on an excursion?', o: ['Osaka', 'Mount Fuji', 'Kyoto', 'Narita'], a: 1 },
      { t: 'mcq', q: 'What does the writer regret?', o: ['going alone', 'not staying longer', 'booking early', 'staying in a hostel'], a: 1 },
    ],
  },
  {
    title: 'Slow travel: why the journey matters',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `For many people, a holiday means getting to their destination as quickly as possible: a cheap flight, a short stay, then home again. But a growing number of travellers are choosing a different approach, known as "slow travel".

Slow travellers avoid planes whenever they can. Instead, they go by train, bus, bike or even on foot, and they see the journey as part of the holiday rather than a waste of time. A trip from London to Rome, for example, takes around two hours by plane but a day and a half by train. For slow travellers, that is not a problem – it is a chance to watch the countryside change and to meet people on the way.

Slow travel also means staying longer in one place. Rather than rushing from sight to sight, slow travellers might rent a flat for a month, shop in local markets and learn a few words of the language. As a result, they often feel they understand the culture much better.

There are environmental benefits too. A single long-distance flight can produce more carbon dioxide than a person in some countries produces in a whole year. Trains produce a fraction of that.

Of course, slow travel is not for everyone. It takes time, and train fares are sometimes higher than budget airline tickets. Many people simply cannot take a month off work. Supporters argue, however, that even small changes help: taking the train for shorter trips, or spending one week in one city instead of visiting five.`,
    items: [
      { t: 'mcq', q: 'How do slow travellers see the journey?', o: ['as a waste of time', 'as part of the holiday', 'as too expensive', 'as dangerous'], a: 1 },
      { t: 'gap', q: 'London to Rome by train takes about a day and a ___.', a: ['half'] },
      { t: 'tf', q: 'Slow travellers usually visit as many sights as possible.', a: 'F' },
      { t: 'tf', q: 'Train fares are always cheaper than budget airline tickets.', a: 'F' },
      { t: 'mcq', q: 'Which is an environmental point in the text?', o: ['Trains produce much less CO2 than planes.', 'Buses are worse than planes.', 'Bikes are expensive.', 'Flights are getting cleaner.'], a: 0 },
      { t: 'mcq', q: 'What do supporters say about people who cannot travel slowly?', o: ['They should stay at home.', 'Even small changes help.', 'They should fly more.', 'They should change jobs.'], a: 1 },
    ],
  },
  {
    title: 'Hanoi’s metro: a new way to get around',
    level: 'Trung bình · ~320 từ',
    text: `For decades, the motorbike has been the only realistic way to get around Hanoi. With more than seven million of them on the roads, the city's streets are famous for their energy – and for their traffic jams. The opening of the city's first metro lines has therefore been seen as a turning point.

The first line, running from Cat Linh to Ha Dong, opened in 2021 after years of delays. At first, many residents were doubtful. Stations were some distance from their homes, and there were few connections with bus routes. "Why would I take the metro when my motorbike takes me door to door?" one office worker asked.

However, attitudes have slowly changed. Trains run every few minutes during rush hour, the carriages are air-conditioned, and fares are low. A journey that can take forty minutes by motorbike in heavy traffic takes less than twenty by train. Students in particular have welcomed the metro, as it allows them to study or read on the way to university instead of breathing in exhaust fumes.

The city now plans to build a network of around ten lines, together with bus lanes and car parks at stations so that people can combine different types of transport. Experts say that this is essential: a metro line on its own cannot solve the problem unless it is part of a wider system.

There are still challenges. Building underground lines in a city with ancient buildings and soft ground is slow and expensive. Some commuters also find the walk to the station difficult in the heat and rain of a Hanoi summer.

Nevertheless, most observers agree that the direction is right. As one city planner put it, "We cannot keep building wider roads. Sooner or later, a city has to move people, not vehicles."`,
    items: [
      { t: 'gap', q: 'The first metro line opened in ___.', a: ['2021'] },
      { t: 'mcq', q: 'Why were many residents doubtful at first?', o: ['Fares were high.', 'Stations were far from home and connections were poor.', 'Trains were slow.', 'There was no air conditioning.'], a: 1 },
      { t: 'mcq', q: 'Why have students welcomed the metro?', o: ['It is free for them.', 'They can study on the way and avoid fumes.', 'It goes to every school.', 'It runs all night.'], a: 1 },
      { t: 'gap', q: 'The city plans a network of around ___ lines.', a: ['ten', '10'] },
      { t: 'tf', q: 'Experts think one metro line alone can solve the traffic problem.', a: 'F' },
      { t: 'mcq', q: 'Which challenge is mentioned?', o: ['lack of passengers', 'soft ground and ancient buildings', 'high fares', 'too many stations'], a: 1 },
      { t: 'mcq', q: 'What does the planner mean by “move people, not vehicles”?', o: ['Ban all vehicles.', 'Focus on public transport rather than more roads.', 'Build bigger roads.', 'Make cars cheaper.'], a: 1 },
    ],
  },
  {
    title: 'Overtourism: when visitors become a problem',
    level: 'Trung bình–Khó · ~360 từ',
    text: `In the summer of 2017, residents of Barcelona held protests with a surprising message: "Tourists go home." It was one of the first signs of a problem that has since been named "overtourism" – the situation in which the number of visitors to a place becomes so large that it damages the environment, the local economy or the quality of life of the people who live there.

Cheap flights, cruise ships and social media have all contributed. A single photograph shared online can turn a quiet beach into a crowded attraction within months. Venice, which has around 50,000 permanent inhabitants, receives tens of thousands of visitors on a busy day. Many locals have moved out because rents have risen as flats are converted into holiday accommodation.

The effects are not only felt in Europe. In Thailand, Maya Bay – made famous by a Hollywood film – was closed for more than three years because thousands of daily visitors had destroyed most of its coral. In Vietnam, some popular areas of Sa Pa and Hoi An face similar pressures during the high season.

Governments have tried various solutions. Venice now charges day-trippers an entrance fee on busy days and has banned large cruise ships from the city centre. Amsterdam has stopped issuing licences for new hotels in the centre and has run campaigns discouraging certain types of visitors. Bhutan has taken a different approach: every tourist must pay a daily fee, which keeps numbers low and funds environmental projects.

Critics argue that such measures risk making travel a privilege of the rich. Others point out that tourism provides millions of jobs, and that many communities depend on it. The challenge, therefore, is not to stop tourism but to manage it: spreading visitors across the year and across different regions, and making sure that local people share in the benefits.

Travellers themselves can help, too. Visiting in the low season, staying longer in one place and choosing locally owned businesses are all ways to enjoy a destination without contributing to its destruction.`,
    items: [
      { t: 'mcq', q: 'What is “overtourism”?', o: ['A lack of tourists', 'Too many visitors damaging a place', 'Cheap flights', 'A type of holiday'], a: 1 },
      { t: 'gap', q: 'Venice has around ___ permanent inhabitants.', a: ['50,000', '50000', 'fifty thousand'] },
      { t: 'mcq', q: 'Why was Maya Bay closed?', o: ['for filming', 'because its coral had been destroyed', 'because of a storm', 'because of high fees'], a: 1 },
      { t: 'tf', q: 'Amsterdam has stopped new hotel licences in the centre.', a: 'T' },
      { t: 'mcq', q: 'How does Bhutan control tourist numbers?', o: ['a daily fee', 'a ban on flights', 'a visitor lottery', 'closing hotels'], a: 0 },
      { t: 'tf', q: 'The writer thinks tourism should be stopped completely.', a: 'F' },
      { t: 'mcq', q: 'Which is NOT advice for travellers?', o: ['visit in the low season', 'stay longer in one place', 'use locally owned businesses', 'take more cruises'], a: 3 },
    ],
  },
  {
    title: 'Will we stop flying?',
    level: 'Khó · ~420 từ · IELTS',
    text: `Air travel is one of the great achievements of the twentieth century. A journey that once took weeks by sea now takes a matter of hours, and millions of people who could never have afforded to travel abroad now do so every year. Yet aviation is also one of the fastest-growing sources of greenhouse gas emissions, and many scientists argue that, unless something changes, it will make international climate targets impossible to reach.

Some people have responded by refusing to fly altogether. In Sweden, the word "flygskam" – flight shame – became popular in 2018, and for a time domestic air travel there actually fell. Several European governments have since banned short domestic flights where a train journey of less than two and a half hours exists.

The aviation industry, meanwhile, insists that technology will solve the problem. Aircraft are already far more fuel-efficient than they were thirty years ago, and companies are investing in sustainable aviation fuels made from waste, as well as electric and hydrogen-powered planes. However, critics point out that these technologies are still at an early stage. Electric batteries are heavy, which limits planes to short distances, and sustainable fuels currently make up less than one percent of the fuel used. Meanwhile, the number of passengers continues to rise.

Another option is to change the price of flying. At present, international aviation fuel is not taxed in most countries, which means that a flight can be cheaper than the train for the same route. Some economists propose a "frequent flyer levy", in which each person's first flight of the year is tax-free but every additional flight is taxed at a higher rate. Because a small proportion of people take the majority of flights, this would reduce emissions without preventing ordinary families from taking an annual holiday.

Not everyone accepts these arguments. Many developing countries depend heavily on tourism, and higher prices could hit their economies hard. Air travel also allows families separated by migration to stay in touch, and makes international business, education and scientific cooperation possible.

It seems unlikely, then, that we will stop flying. The more realistic question is how much, how often and at what cost. Most experts agree that the answer will involve a combination of cleaner technology, fairer pricing and better alternatives on land – together with a change in attitudes, so that a long-distance flight is seen less as a routine and more as an occasional luxury.`,
    items: [
      { t: 'mcq', q: 'What does “flygskam” mean?', o: ['cheap flights', 'flight shame', 'frequent flyer', 'train travel'], a: 1 },
      { t: 'tf', q: 'Some European governments have banned short flights where a fast train exists.', a: 'T' },
      { t: 'mcq', q: 'What is a problem with electric planes?', o: ['They are too noisy.', 'Heavy batteries limit them to short distances.', 'They are illegal.', 'They use more fuel.'], a: 1 },
      { t: 'gap', q: 'Sustainable fuels make up less than ___ percent of fuel used.', a: ['one', '1'] },
      { t: 'mcq', q: 'How would a “frequent flyer levy” work?', o: ['All flights taxed equally', 'First flight tax-free, extra flights taxed more', 'Only business flights taxed', 'Flights banned after one per year'], a: 1 },
      { t: 'mcq', q: 'Which argument against higher prices is given?', o: ['Developing countries depend on tourism.', 'Trains are slower.', 'Airports would close.', 'Pilots would lose jobs.'], a: 0 },
      { t: 'tf', q: 'The writer predicts that people will soon stop flying altogether.', a: 'F' },
      { t: 'mcq', q: 'What is the writer’s conclusion?', o: ['Technology alone will solve the problem.', 'A combination of solutions and a change in attitudes is needed.', 'Nothing can be done.', 'Flying should be banned.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Airport announcement',
    level: '1 · Dễ · 1 giọng, chậm',
    desc: 'Thông báo ở sân bay. Nghe và điền thông tin.',
    rate: '-12%',
    voices: { N: 'en-GB-SoniaNeural' },
    script: [
      ['N', 'Good afternoon, ladies and gentlemen. This is an announcement for passengers on flight VN 54 to London Heathrow.'],
      ['N', 'Due to bad weather, this flight will now take off at 4.45 p.m., one hour later than planned.'],
      ['N', 'Check-in is still open at desks 12 to 16. Please make sure you have your passport and boarding pass ready.'],
      ['N', 'Passengers who are worried about missing a connecting flight should speak to a member of staff at the information desk.'],
      ['N', 'We apologise for any inconvenience and thank you for your patience.'],
    ],
    items: [
      { t: 'gap', q: 'The flight number is VN ___.', a: ['54'] },
      { t: 'mcq', q: 'Why is the flight late?', o: ['a technical problem', 'bad weather', 'a strike', 'a missing pilot'], a: 1 },
      { t: 'gap', q: 'The flight will now take off at ___ p.m.', a: ['4.45', '4:45'] },
      { t: 'gap', q: 'Check-in is at desks 12 to ___.', a: ['16', 'sixteen'] },
      { t: 'mcq', q: 'Who should go to the information desk?', o: ['everyone', 'people worried about a connecting flight', 'families with children', 'business passengers'], a: 1 },
    ],
    dictation: ['This flight will now take off one hour later than planned.', 'Please make sure you have your passport ready.'],
  },
  {
    title: 'Conversation: Booking a trip',
    level: '2 · Dễ · 2 giọng',
    desc: 'Hai người bạn lên kế hoạch đi du lịch cuối tuần.',
    rate: '-5%',
    voices: { Lan: 'en-AU-NatashaNeural', Tom: 'en-GB-RyanNeural' },
    script: [
      ['Lan', 'So, are we going to Da Lat or Nha Trang this weekend?'],
      ['Tom', "Da Lat, I think. Nha Trang will be really crowded – it's the high season."],
      ['Lan', 'OK. Shall we fly or take the night bus?'],
      ['Tom', "The bus is cheaper – the fare's only about three hundred thousand dong. But it takes eight hours."],
      ['Lan', "I'd rather fly. If we book in advance, the ticket isn't much more expensive, and we won't waste a whole night travelling."],
      ['Tom', 'Fair enough. What about somewhere to stay?'],
      ['Lan', "My cousin lives there. She said we could stay with her, and she'll pick us up from the airport."],
      ['Tom', 'Perfect! Then we can spend Saturday seeing the sights and go on an excursion to the waterfalls on Sunday.'],
      ['Lan', "Great. I'll book the flights tonight before the prices go up."],
    ],
    items: [
      { t: 'mcq', q: 'Why don’t they go to Nha Trang?', o: ['It is too far.', 'It will be crowded in the high season.', 'It is too expensive.', 'The weather is bad.'], a: 1 },
      { t: 'gap', q: 'The bus journey takes ___ hours.', a: ['eight', '8'] },
      { t: 'mcq', q: 'How do they decide to travel?', o: ['night bus', 'by plane', 'by train', 'by motorbike'], a: 1 },
      { t: 'mcq', q: 'Where will they stay?', o: ['in a hotel', 'with Lan’s cousin', 'in a hostel', 'with Tom’s friend'], a: 1 },
      { t: 'gap', q: 'On Sunday they will go on an excursion to the ___.', a: ['waterfalls', 'waterfall'] },
    ],
    dictation: ['If we book in advance, the ticket is not much more expensive.', 'She will pick us up from the airport.'],
  },
  {
    title: 'Talk: A tour guide’s tips',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Hướng dẫn viên chia sẻ mẹo cho khách du lịch.',
    rate: '+0%',
    voices: { Guide: 'en-US-JennyNeural' },
    script: [
      ['Guide', "Hi everyone. I've been working as a tour guide for twelve years, so I'd like to share a few tips before we set off."],
      ['Guide', "First, don't try to see everything. Many visitors rush from one sight to the next and come home exhausted. Choose two or three places a day and take your time."],
      ['Guide', "Second, learn a few words of the local language. Even 'hello' and 'thank you' make a big difference, and people will be much friendlier."],
      ['Guide', 'Third, keep a copy of your passport on your phone, separate from the real one. If you lose it, getting a new one will be much quicker.'],
      ['Guide', "And finally, eat where the local people eat. The restaurants near the main tourist attractions are usually expensive and not very good. Walk two streets away and you'll find better food at half the price."],
      ['Guide', "OK, that's enough advice. Let's make our way to the old town – follow me, and please keep up!"],
    ],
    items: [
      { t: 'gap', q: 'The guide has been working for ___ years.', a: ['twelve', '12'] },
      { t: 'mcq', q: 'How many places a day does the guide suggest?', o: ['one', 'two or three', 'five', 'as many as possible'], a: 1 },
      { t: 'mcq', q: 'Why should you learn a few local words?', o: ['to get discounts', 'people will be friendlier', 'it is required', 'to read signs'], a: 1 },
      { t: 'mcq', q: 'Where should you keep a copy of your passport?', o: ['in your bag', 'on your phone', 'at the hotel', 'with the guide'], a: 1 },
      { t: 'tf', q: 'Restaurants near tourist attractions are usually cheap and good.', a: 'F' },
    ],
    dictation: ["Don't try to see everything.", 'Eat where the local people eat.'],
  },
  {
    title: 'Radio interview: Life as a long-distance cyclist',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn một người đạp xe xuyên châu Á.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-LibbyNeural', Marco: 'en-US-GuyNeural' },
    script: [
      ['Presenter', 'My guest today, Marco Ferri, has just got back from an eighteen-month journey by bike from Italy to Vietnam. Marco, why a bike?'],
      ['Marco', 'I wanted to see the world slowly. On a plane, you see clouds. On a bike, you see every village, every change in the landscape, and you meet people who would never normally speak to a tourist.'],
      ['Presenter', 'How far did you travel in total?'],
      ['Marco', "Around fourteen thousand kilometres, through sixteen countries. On a good day I'd do a hundred kilometres, but in the mountains of Central Asia, sometimes only thirty."],
      ['Presenter', 'What was the hardest part?'],
      ['Marco', "Honestly, the borders. Some crossings took a whole day of paperwork. And once, in Kazakhstan, I lost my way in a storm and had to sleep in a shepherd's hut. But the family there invited me to stay for three days!"],
      ['Presenter', 'Did you ever think of giving up?'],
      ['Marco', "Once, when my bike broke down in the desert. But a truck driver picked me up and took me to the next town. Again and again, strangers helped me. That's what I'll remember most – not the sights, but the kindness."],
    ],
    items: [
      { t: 'gap', q: 'Marco’s journey lasted ___ months.', a: ['eighteen', '18'] },
      { t: 'gap', q: 'He travelled through ___ countries.', a: ['sixteen', '16'] },
      { t: 'mcq', q: 'What was the hardest part for Marco?', o: ['the food', 'the borders', 'the heat', 'loneliness'], a: 1 },
      { t: 'mcq', q: 'What happened in Kazakhstan?', o: ['He was robbed.', 'He lost his way in a storm and stayed with a family.', 'His visa expired.', 'He got ill.'], a: 1 },
      { t: 'mcq', q: 'What will Marco remember most?', o: ['the sights', 'the kindness of strangers', 'the mountains', 'the desert'], a: 1 },
    ],
    dictation: ['On a bike, you see every village.', 'Again and again, strangers helped me.'],
  },
  {
    title: 'Discussion: Should tourists pay more?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3 về phí du lịch.',
    rate: '+5%',
    voices: { Host: 'en-GB-ThomasNeural', Mai: 'en-AU-NatashaNeural', Peter: 'en-US-GuyNeural' },
    script: [
      ['Host', 'More and more destinations are introducing tourist taxes. Mai, you work in tourism in Hoi An. Is this a good idea?'],
      ['Mai', 'I think so, as long as the money is used properly. Tourists use local roads, water and rubbish collection, but often the local community pays for all of that. A small fee – a dollar or two a night – could fund the protection of the old town.'],
      ['Peter', "I'm not against the principle, but I worry about the effect on budget travellers and students. If every city adds a fee, travel becomes something only wealthy people can afford."],
      ['Mai', "That's fair. But the fee could depend on the type of accommodation – higher for luxury hotels, almost nothing for hostels."],
      ['Peter', "That's more reasonable. My other concern is transparency. In some places, nobody knows where the money actually goes."],
      ['Mai', 'Agreed. Visitors would accept it much more easily if they could see the results – cleaner streets, restored buildings.'],
      ['Host', 'So, a cautious yes?'],
      ['Peter', "A cautious yes – if it's fair and the spending is clear."],
    ],
    items: [
      { t: 'mcq', q: 'Why does Mai support a tourist tax?', o: ['to reduce tourist numbers', 'tourists use local services that locals pay for', 'to pay hotel staff', 'to build airports'], a: 1 },
      { t: 'mcq', q: 'What is Peter worried about?', o: ['crime', 'travel becoming only for the wealthy', 'hotel quality', 'pollution'], a: 1 },
      { t: 'mcq', q: 'What does Mai suggest?', o: ['the same fee for everyone', 'a fee depending on the type of accommodation', 'no fee for families', 'a fee only at airports'], a: 1 },
      { t: 'gap', q: 'Peter’s other concern is ___ – knowing where the money goes.', a: ['transparency'] },
      { t: 'tf', q: 'At the end, both speakers give a cautious yes.', a: 'T' },
    ],
    dictation: ['Travel becomes something only wealthy people can afford.', 'Visitors would accept it if they could see the results.'],
  },
];

const exercises = [
  {
    title: 'A. Từ dễ nhầm – chọn từ đúng',
    instruction: 'Chọn từ đúng trong mỗi nhóm.',
    items: [
      { t: 'mcq', q: 'The Titanic sank on its first ___ across the Atlantic.', o: ['voyage', 'trip', 'excursion'], a: 0 },
      { t: 'mcq', q: '___ broadens the mind.', o: ['Travel', 'Journey', 'Trip'], a: 0 },
      { t: 'mcq', q: 'How long is the ___ from your house to school?', o: ['journey', 'travel', 'voyage'], a: 0 },
      { t: 'mcq', q: 'Our room had a beautiful ___ of the lake.', o: ['view', 'sight'], a: 0 },
      { t: 'mcq', q: 'The bus ___ has gone up again.', o: ['fare', 'fee', 'ticket'], a: 0 },
      { t: 'mcq', q: 'Hurry up or we’ll ___ the train!', o: ['miss', 'lose'], a: 0 },
      { t: 'mcq', q: 'We finally ___ the top of the mountain.', o: ['reached', 'arrived'], a: 0 },
      { t: 'mcq', q: 'We ___ at a lovely hotel by the sea for a week.', o: ['stayed', 'lived'], a: 0 },
      { t: 'mcq', q: 'What’s the ___ between Hanoi and Hue?', o: ['distance', 'length'], a: 0 },
      { t: 'mcq', q: 'Please ___ me a souvenir from Paris!', o: ['bring', 'take'], a: 0 },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền phrasal verb đúng (catch up with, check in, check out, drop off, get away, pick up, see off, set off, take off, turn round), chia động từ và thêm tân ngữ nếu cần.',
    items: [
      { t: 'gap', q: 'You must ___ at least two hours before an international flight.', a: ['check in'] },
      { t: 'gap', q: 'We have to ___ of the hotel by 11 a.m.', a: ['check out'] },
      { t: 'gap', q: 'Could you ___ at the station on your way to work? (đưa tôi xuống xe)', a: ['drop me off'] },
      { t: 'gap', q: 'I’ll ___ from the airport at nine. (đón bạn)', a: ['pick you up'] },
      { t: 'gap', q: 'The plane couldn’t ___ because of the fog.', a: ['take off'] },
      { t: 'gap', q: 'We ___ at dawn to avoid the traffic.', a: ['set off', 'set out'] },
      { t: 'gap', q: 'My family came to the airport to ___. (tiễn tôi)', a: ['see me off'] },
      { t: 'gap', q: 'We realised we were going the wrong way and had to ___.', a: ['turn round', 'turn around'] },
      { t: 'gap', q: 'Walk on ahead – I’ll ___ you in a minute.', a: ['catch up with'] },
      { t: 'gap', q: 'We’re hoping to ___ for a few days next month.', a: ['get away'] },
    ],
  },
  {
    title: 'C. Cụm từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'It’s cheaper to book tickets ___ advance.', o: ['in', 'on', 'by'], a: 0 },
      { t: 'mcq', q: 'I broke the vase ___ accident.', o: ['by', 'in', 'with'], a: 0 },
      { t: 'mcq', q: 'We stopped for lunch ___ the way to Hue.', o: ['on', 'in', 'by'], a: 0 },
      { t: 'mcq', q: 'We arrived ___ London late at night.', o: ['in', 'to', 'at'], a: 0 },
      { t: 'mcq', q: 'We arrived ___ the airport two hours early.', o: ['at', 'to', 'in'], a: 0 },
      { t: 'mcq', q: 'I’ve always dreamed ___ visiting Iceland.', o: ['of', 'to', 'for'], a: 0 },
      { t: 'mcq', q: 'We regret ___ you that the flight has been cancelled.', o: ['to inform', 'informing'], a: 0 },
      { t: 'mcq', q: 'I regret ___ the museum – everyone says it’s amazing.', o: ['not visiting', 'not to visit'], a: 0 },
      { t: 'mcq', q: 'He was fined for breaking the speed ___.', o: ['limit', 'line', 'border'], a: 0 },
      { t: 'mcq', q: 'We took a guided ___ of the palace.', o: ['tour', 'travel', 'voyage'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'Have you made all the travel ___? (ARRANGE)', a: ['arrangements'] },
      { t: 'gap', q: 'Travelling can ___ your mind. (BROAD)', a: ['broaden'] },
      { t: 'gap', q: 'Living abroad helps you understand ___ differences. (CULTURE)', a: ['cultural'] },
      { t: 'gap', q: 'There’s a seven-hour time ___ between Hanoi and London. (DIFFER)', a: ['difference'] },
      { t: 'gap', q: 'Is there a ___ flight, or do we have to change? (DIRECT)', a: ['direct'] },
      { t: 'gap', q: 'The hotel is within walking ___ of the beach. (DISTANT)', a: ['distance'] },
      { t: 'gap', q: 'Meet me at the main ___. (ENTER)', a: ['entrance'] },
      { t: 'gap', q: 'The island has fewer than 300 ___. (INHABIT)', a: ['inhabitants'] },
      { t: 'gap', q: 'The town was almost ___ after twenty years. (RECOGNISE)', a: ['unrecognisable', 'unrecognizable'] },
      { t: 'gap', q: 'Mass ___ can damage the environment. (TOUR)', a: ['tourism'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['book', 'in advance'], ['go', 'sightseeing'], ['lose', 'your way'], ['a business', 'trip'], ['the speed', 'limit'], ['cross', 'the border'], ['a guided', 'tour'], ['high', 'season']] },
    ],
  },
  {
    title: 'F. Viết lại câu',
    instruction: 'Viết lại câu dùng từ trong ngoặc, giữ nguyên nghĩa.',
    items: [
      { t: 'fix', q: 'We started our journey very early. (set)', a: ['We set off very early.', 'We set out very early.'] },
      { t: 'fix', q: 'The plane left the ground at 6 a.m. (took)', a: ['The plane took off at 6 a.m.', 'The plane took off at 6am.'] },
      { t: 'fix', q: 'I booked the hotel before I left. (advance)', a: ['I booked the hotel in advance.'] },
      { t: 'fix', q: 'I’m sorry I didn’t visit the old town. (regret)', a: ['I regret not visiting the old town.', 'I regret not having visited the old town.'] },
      { t: 'fix', q: 'We met by chance at the station. (accident)', a: ['We met by accident at the station.'] },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Chuyến đi từ Hà Nội đến Sa Pa mất khoảng năm tiếng.', ref: 'The journey from Hanoi to Sa Pa takes about five hours.', focus: 'journey (≠ travel)' },
      { t: 'tr', vi: 'Đặt vé trước sẽ rẻ hơn nhiều.', ref: "It's much cheaper to book tickets in advance.", focus: 'in advance' },
      { t: 'tr', vi: 'Tôi bị lạc đường ở ga tàu vì không đọc được biển chỉ dẫn.', ref: "I lost my way at the station because I couldn't read the signs.", focus: 'lose your way' },
      { t: 'tr', vi: 'Gia đình tôi ra sân bay tiễn tôi.', ref: 'My family came to the airport to see me off.', focus: 'see sb off' },
      { t: 'tr', vi: 'Du lịch đại trà có thể gây hại cho môi trường và cộng đồng địa phương.', ref: 'Mass tourism can harm the environment and local communities.', focus: 'tourism (IELTS)' },
      { t: 'tr', vi: 'Đi du lịch giúp mở rộng tầm nhìn và hiểu thêm về các nền văn hóa khác.', ref: 'Travelling broadens your mind and helps you understand other cultures.', focus: 'broaden (IELTS Speaking)' },
      { t: 'tr', vi: 'Chính phủ nên đầu tư nhiều hơn vào giao thông công cộng thay vì xây thêm đường.', ref: 'The government should invest more in public transport instead of building more roads.', focus: 'IELTS Writing Task 2' },
      { t: 'tr', vi: 'Tôi rất tiếc đã không ở lại lâu hơn.', ref: 'I really regret not staying longer.', focus: 'regret + V-ing' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you enjoy travelling? Why or why not?' },
  { part: 'Part 1', q: 'How do you usually get to school or work?' },
  { part: 'Part 1', q: 'Do you prefer travelling alone or with other people?' },
  { part: 'Part 1', q: 'Is public transport good where you live?' },
  { part: 'Part 2', q: 'Describe a memorable journey you have made.', cue: ['where you went', 'how you travelled', 'who you were with', 'and explain why it was memorable'] },
  { part: 'Part 3', q: 'How has tourism changed your country in recent years?' },
  { part: 'Part 3', q: 'Should governments limit the number of tourists in popular places?' },
  { part: 'Part 3', q: 'What can be done to persuade people to use public transport instead of private vehicles?' },
  { part: 'Part 3', q: 'Do you think people will travel less by plane in the future?' },
];

export default {
  id: 'b2-u02',
  book: 'b2',
  no: 2,
  title: 'Travel and transport',
  titleVi: 'Du lịch & giao thông',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
