// Unit 15 – Vocabulary: Buying and selling (Destination B1).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u15-vocab.js';

const reading = [
  {
    title: 'My first market stall',
    level: 'Dễ · ~170 từ',
    text: `Last summer I decided to sell some of my old things at the Sunday market. I had too many clothes, books I would never read again and a guitar I hadn't touched for years.

The stall cost 100,000 dong for the day. I arrived at six in the morning and put everything on a big table. At first, nobody stopped. Then an old woman picked up a jacket and asked how much it cost. I said 80,000. She offered 50,000. In the end, we agreed on 60,000 – my first sale!

By lunchtime I was much more confident. A student bought five books, and a man paid 1.5 million for the guitar in cash. It was in good condition, so he got a real bargain.

When I came back home, I added up my money: 2.3 million dong. After paying for the stall, I had made a profit of 2.2 million. I'm saving up for a new laptop, so it was a great start!`,
    items: [
      { t: 'mcq', q: 'Why did the writer go to the market?', o: ['to buy food', 'to sell old things', 'to work for a friend', 'to buy a guitar'], a: 1 },
      { t: 'gap', q: 'The stall cost ___ dong for the day.', a: ['100,000', '100000', '100.000'] },
      { t: 'mcq', q: 'How much did the old woman finally pay for the jacket?', o: ['50,000', '60,000', '80,000', '100,000'], a: 1 },
      { t: 'tf', q: 'The man paid for the guitar by credit card.', a: 'F', ex: '“paid … in cash”' },
      { t: 'tf', q: 'The guitar was in bad condition.', a: 'F' },
      { t: 'mcq', q: 'What is the writer saving up for?', o: ['a guitar', 'a new laptop', 'a holiday', 'a motorbike'], a: 1 },
    ],
  },
  {
    title: 'How to avoid buying things you don’t need',
    level: 'Dễ–Trung bình · ~260 từ',
    text: `Have you ever come home from the shops with bags full of things you didn't plan to buy? You're not alone. Shops and websites are designed to make us spend more, and it's easy to waste money without noticing. Here are some simple ways to stay in control.

Make a list – and stick to it. Before you go shopping, decide what you really require. If something isn't on the list, don't buy it.

Wait 48 hours. If you see something you love, don't purchase it immediately. Wait two days. If you still want it after that, and you can afford it, then buy it. You'll be surprised how often the feeling disappears.

Don't be fooled by "sales". A 50% discount is only a bargain if you actually need the item. Spending 300,000 on something you'll never use isn't saving money – it's wasting it.

Pay in cash. Research shows that people spend more when they pay by credit card, because it doesn't feel like real money. Seeing notes leave your wallet makes you think twice.

Unsubscribe from advertisements. Shopping apps and emails send you offers every day to make you feel you are missing out. Turning off notifications is one of the easiest ways to save.

Finally, ask yourself one question: "Will this make my life better in a month's time?" If the answer is no, put it back on the shelf.`,
    items: [
      { t: 'mcq', q: 'According to the article, shops and websites are designed to…', o: ['help customers save', 'make us spend more', 'sell only cheap items', 'give things away'], a: 1 },
      { t: 'gap', q: 'Before buying something you love, wait ___ hours.', a: ['48', 'forty-eight'] },
      { t: 'tf', q: 'The writer says every sale item is a bargain.', a: 'F' },
      { t: 'mcq', q: 'Why do people spend more with credit cards?', o: ['Cards give discounts.', 'It doesn’t feel like real money.', 'Shops prefer cards.', 'Cards are safer.'], a: 1 },
      { t: 'mcq', q: 'What is one easy way to save, according to the text?', o: ['shopping at night', 'turning off shopping notifications', 'buying in bulk', 'using more apps'], a: 1 },
      { t: 'tf', q: 'The final question is about whether the item will improve your life in a month.', a: 'T' },
    ],
  },
  {
    title: 'The rise of second-hand shopping',
    level: 'Trung bình · ~310 từ',
    text: `Not long ago, buying second-hand clothes was something people did only when they couldn't afford anything new. Today, it has become fashionable. Websites and apps where people sell their old clothes are growing quickly, and many young shoppers say they now buy more second-hand items than new ones.

There are several reasons for this change. The first is money. Prices of new clothes from famous brands have risen sharply, and second-hand shopping allows people to own designer items at a fraction of the original cost. "I bought a leather jacket that would have cost a fortune in the shop," says Thu, 22. "It was in perfect condition and I paid less than a quarter of the price."

The second reason is the environment. The fashion industry produces huge amounts of waste, and millions of tonnes of clothing are thrown away every year. Buying second-hand means fewer new clothes have to be produced, which saves water and energy.

A third reason is variety. In a normal shop, everyone buys the same few styles. Second-hand markets offer a wide variety of unique items, so shoppers can create their own look.

However, there are some disadvantages. It can take a long time to find the right size, and you can't always take items back if they don't fit. Online, photos don't always show the true condition of a product, so buyers need to read descriptions carefully and check the seller's reviews.

Experts believe the trend will continue. Some big brands have even started buying back their own old products from customers and selling them again – a sign that second-hand is no longer second best.`,
    items: [
      { t: 'mcq', q: 'In the past, second-hand clothes were bought mainly by…', o: ['fashionable people', 'people who couldn’t afford new clothes', 'designers', 'tourists'], a: 1 },
      { t: 'mcq', q: 'How much did Thu pay for her jacket?', o: ['the full price', 'half the price', 'less than a quarter of the price', 'nothing'], a: 2 },
      { t: 'tf', q: 'The fashion industry produces a lot of waste.', a: 'T' },
      { t: 'mcq', q: 'What is the third reason given?', o: ['money', 'the environment', 'variety', 'speed'], a: 2 },
      { t: 'tf', q: 'It is always easy to return second-hand items.', a: 'F' },
      { t: 'mcq', q: 'What should online buyers do?', o: ['trust all photos', 'read descriptions and check reviews', 'only pay in cash', 'buy quickly'], a: 1 },
      { t: 'mcq', q: '“second-hand is no longer second best” means…', o: ['second-hand items are now worse', 'second-hand is now seen as a good choice', 'brands don’t sell second-hand', 'people prefer new items'], a: 1 },
    ],
  },
  {
    title: 'From street stall to online fortune',
    level: 'Trung bình–Khó · ~360 từ',
    text: `Ten years ago, Nguyen Van Hai was selling coffee from a small stall outside a university in Da Lat. Today his company exports coffee to fourteen countries and employs more than two hundred people. His story shows how a good product, hard work and a little luck can turn a small business into a big success.

Hai grew up on his grandparents' coffee farm. "I always knew our coffee was special," he says. "But farmers like my grandparents earned very little. Middlemen bought the beans cheaply and sold them abroad for a huge profit." When he finished school, Hai couldn't afford to go to university, so he borrowed money from his uncle and opened a stall selling coffee to students.

The stall was popular, but the turning point came by chance. A tourist from Germany tried his coffee, loved it and asked whether she could buy some to take home. A month later, she emailed him: her friends wanted to order fifty kilos. "I had no idea how to export anything," Hai laughs. "I spent weeks finding out about customs, fees and shipping."

He decided to sell directly to customers online, without middlemen. He built a simple website, posted photos of the farms and told the stories of the farmers. Customers liked knowing exactly where their coffee came from, and they were happy to pay a fair price. Within three years, demand was so high that Hai could no longer supply enough beans from his family farm. He began working with other local farmers, paying them twice what middlemen had paid.

Not everything went well. In 2021 a storm destroyed part of the harvest, and the company went into debt. "I nearly gave up," Hai admits. "But our customers were incredibly loyal. Many ordered more to help us."

Today Hai has paid back every loan, and he invests part of the company's profits in a school near the farms. "Money isn't everything," he says. "If my business can give farmers' children the education I couldn't have, that's real success."`,
    items: [
      { t: 'gap', q: 'Hai’s company exports coffee to ___ countries.', a: ['14', 'fourteen'] },
      { t: 'mcq', q: 'Why did farmers like Hai’s grandparents earn little?', o: ['The coffee was poor quality.', 'Middlemen bought beans cheaply.', 'They had too few customers.', 'The government took their profits.'], a: 1 },
      { t: 'mcq', q: 'How did Hai get money to open his stall?', o: ['from a bank', 'from his uncle', 'from a tourist', 'from his savings'], a: 1 },
      { t: 'mcq', q: 'What was the turning point?', o: ['winning a competition', 'a German tourist asking to buy coffee', 'going to university', 'opening a café'], a: 1 },
      { t: 'tf', q: 'Hai already knew how to export goods.', a: 'F' },
      { t: 'mcq', q: 'Why did customers like buying from Hai’s website?', o: ['It was the cheapest.', 'They knew where their coffee came from.', 'Delivery was free.', 'It had many brands.'], a: 1 },
      { t: 'tf', q: 'Hai pays local farmers more than middlemen did.', a: 'T', ex: '“paying them twice what middlemen had paid”' },
      { t: 'mcq', q: 'What does Hai invest part of the profits in?', o: ['a new farm', 'a school', 'a café chain', 'advertising'], a: 1 },
    ],
  },
  {
    title: 'Is cash disappearing?',
    level: 'Khó (B1+/B2) · ~420 từ',
    text: `In many cities around the world, it is becoming possible to live for weeks without touching a single coin or note. People pay for coffee with their phones, split restaurant bills through apps and buy train tickets with a tap of a card. In Sweden, fewer than one in ten purchases in shops are now made in cash, and some businesses no longer accept it at all. Vietnam, too, has seen a rapid rise in QR-code payments, even at small street stalls.

Supporters of a cashless society point to clear advantages. Digital payments are fast and convenient: there is no need to carry a heavy wallet, count change or worry about running out of money at the wrong moment. They are also easier to track. Every transaction leaves a record, which makes it harder for criminals to hide stolen money or avoid paying taxes. Shop owners save time and money too, since they no longer need to count cash, store it safely or take it to the bank.

However, critics warn that the disappearance of cash could leave some people behind. Older people, those living in rural areas with poor internet, and people who do not have bank accounts may find it difficult to pay for everyday things. "Cash is the only form of payment that doesn't depend on technology working perfectly," says economist Dr Sarah Lim. "When the network goes down, a digital-only system simply stops."

Privacy is another concern. When every purchase is recorded, banks and technology companies can collect detailed information about what we buy, where and when. Some people are uncomfortable with the idea that their spending habits can be used to target advertisements at them, or even shared with others.

There is also evidence that digital payments change the way we spend. Several studies have found that people spend significantly more when they pay by card or phone than when they pay in cash. Handing over notes is a physical reminder that money is limited; tapping a phone is not. For people who already struggle to manage their money, this can make it easier to get into debt.

So, will cash disappear completely? Probably not soon. Many governments are now taking steps to protect access to cash, and some countries require shops to accept it. What seems certain is that the role of cash is changing: from the main way we pay to a back-up that we hope we will rarely need.`,
    items: [
      { t: 'mcq', q: 'What is the main topic of the article?', o: ['how to save money', 'the advantages and disadvantages of a cashless society', 'banks in Sweden', 'QR codes in Vietnam'], a: 1 },
      { t: 'tf', q: 'In Sweden, most shop purchases are still made in cash.', a: 'F', ex: '“fewer than one in ten purchases … in cash”' },
      { t: 'mcq', q: 'Why are digital payments harder for criminals to use?', o: ['They are expensive.', 'Every transaction leaves a record.', 'Banks check every payment.', 'They need a password.'], a: 1 },
      { t: 'mcq', q: 'Which group may find a cashless system difficult?', o: ['young students', 'people without bank accounts', 'shop owners', 'tourists'], a: 1 },
      { t: 'tf', q: 'Dr Lim says digital systems always work perfectly.', a: 'F' },
      { t: 'mcq', q: 'What privacy concern is mentioned?', o: ['Phones can be stolen.', 'Companies can collect detailed information about spending.', 'Cash can be copied.', 'Passwords are weak.'], a: 1 },
      { t: 'tf', q: 'Studies suggest people spend more when paying by card or phone.', a: 'T' },
      { t: 'mcq', q: 'According to the writer, the future role of cash is probably…', o: ['the main way to pay', 'a back-up', 'illegal', 'more popular than before'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Shop announcement: Summer sale',
    level: '1 · Rất dễ · 1 giọng, chậm',
    desc: 'Thông báo khuyến mãi trong siêu thị. Nghe và điền thông tin.',
    rate: '-15%',
    voices: { N: 'en-GB-LibbyNeural' },
    script: [
      ['N', 'Good afternoon, shoppers, and welcome to City Store. Our summer sale starts today!'],
      ['N', 'All clothes on the first floor are now thirty per cent off. In the electronics department on the second floor, selected laptops and phones are reduced by up to forty per cent.'],
      ['N', 'Today only, every customer who spends more than five hundred thousand dong will receive a free shopping bag.'],
      ['N', 'Please remember to keep your receipt. If you are not happy with your purchase, you can take it back within fourteen days.'],
      ['N', 'The store closes at nine o’clock tonight. Thank you for shopping with us.'],
    ],
    items: [
      { t: 'gap', q: 'Clothes on the first floor are ___ per cent off.', a: ['30', 'thirty'] },
      { t: 'gap', q: 'Electronics are on the ___ floor.', a: ['second', '2nd'] },
      { t: 'mcq', q: 'What do customers get if they spend more than 500,000 dong today?', o: ['a discount', 'a free shopping bag', 'a coffee', 'free delivery'], a: 1 },
      { t: 'gap', q: 'You can return items within ___ days.', a: ['14', 'fourteen'] },
      { t: 'gap', q: 'The store closes at ___ p.m.', a: ['9', 'nine'] },
    ],
    dictation: ['Our summer sale starts today.', 'Please remember to keep your receipt.', 'You can take it back within fourteen days.'],
  },
  {
    title: 'Talk: How I save money as a student',
    level: '2 · Dễ · 1 giọng Mỹ',
    desc: 'Một sinh viên chia sẻ cách tiết kiệm tiền.',
    rate: '-5%',
    voices: { N: 'en-US-AriaNeural' },
    script: [
      ['N', "Hi, I'm Emma, and I'm in my second year at university. Like most students, I don't have much money, so I've learnt a few ways to save."],
      ['N', "First, I cook at home. Eating out every day costs a fortune. I cook big meals on Sundays and take lunch to university in a box. That saves me about fifty dollars a week."],
      ['N', "Second, I never buy textbooks new. I borrow them from the library or buy them second-hand from older students. Some of them even give their old books away for free."],
      ['N', "Third, I use an app that adds up everything I spend. At the end of the month, I can see exactly where my money went. The first time I checked, I found I was spending sixty dollars a month on coffee!"],
      ['N', "Now I'm saving up for a trip to Japan next summer. I've already saved eight hundred dollars."],
    ],
    items: [
      { t: 'mcq', q: 'Which year of university is Emma in?', o: ['first', 'second', 'third', 'fourth'], a: 1 },
      { t: 'gap', q: 'Cooking at home saves her about $___ a week.', a: ['50', 'fifty'] },
      { t: 'tf', q: 'Emma always buys new textbooks.', a: 'F' },
      { t: 'mcq', q: 'What does her app do?', o: ['finds cheap flights', 'adds up everything she spends', 'sells old books', 'orders food'], a: 1 },
      { t: 'gap', q: 'She was spending $___ a month on coffee.', a: ['60', 'sixty'] },
      { t: 'gap', q: 'She is saving up for a trip to ___.', a: ['Japan'] },
    ],
  },
  {
    title: 'Conversation: Taking something back',
    level: '3 · Trung bình · Hội thoại 2 người (Anh-Anh)',
    desc: 'Một khách hàng mang trả máy sấy tóc bị hỏng.',
    rate: '+0%',
    voices: { Assistant: 'en-GB-RyanNeural', Customer: 'en-GB-SoniaNeural' },
    script: [
      ['Assistant', 'Good morning. How can I help you?'],
      ['Customer', "Hi. I bought this hairdryer here last week, but it's stopped working. It just turns off after a minute."],
      ['Assistant', "I'm sorry to hear that. Have you got the receipt?"],
      ['Customer', "Yes, here it is. I paid by credit card."],
      ['Assistant', "Thank you. So you bought it on the third, for forty-five pounds. Would you like a replacement or your money back?"],
      ['Customer', "Hmm. Is the replacement exactly the same model?"],
      ['Assistant', "It is, but if you prefer, there's a newer model that's on sale this week for fifty pounds. You'd just need to pay the difference."],
      ['Customer', "Only five pounds more? What's the difference between them?"],
      ['Assistant', "The new one is lighter and it has a two-year guarantee instead of one."],
      ['Customer', "OK, that sounds like a good deal. I'll take the new one."],
      ['Assistant', "Great. I'll put the five pounds on your card, and I'll print you a new receipt."],
    ],
    items: [
      { t: 'mcq', q: 'What is the problem with the hairdryer?', o: ['It’s too noisy.', 'It turns off after a minute.', 'It’s the wrong colour.', 'It’s too hot.'], a: 1 },
      { t: 'tf', q: 'The customer paid in cash.', a: 'F' },
      { t: 'gap', q: 'The original hairdryer cost £___.', a: ['45', 'forty-five', 'forty five'] },
      { t: 'mcq', q: 'What two choices does the assistant first offer?', o: ['repair or refund', 'replacement or money back', 'discount or voucher', 'new model or repair'], a: 1 },
      { t: 'gap', q: 'The newer model has a ___-year guarantee.', a: ['two', '2'] },
      { t: 'mcq', q: 'What does the customer decide?', o: ['to get her money back', 'to take the same model', 'to buy the newer model and pay £5 more', 'to come back later'], a: 2 },
    ],
    dictation: ["I bought this hairdryer here last week, but it's stopped working.", 'Would you like a replacement or your money back?'],
  },
  {
    title: 'Radio interview: The power of advertising',
    level: '4 · Khó · Phỏng vấn (giọng Anh + Úc)',
    desc: 'Phỏng vấn một chuyên gia marketing về cách quảng cáo ảnh hưởng đến người mua.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Chris: 'en-AU-WilliamNeural' },
    script: [
      ['Presenter', "Today I'm joined by Chris Bell, who has worked in advertising for twenty years. Chris, how many advertisements do we see every day?"],
      ['Chris', "Estimates vary, but it's somewhere between four thousand and ten thousand, if you include online adverts, product placement in films, logos on clothes and so on. Most of them we don't even notice consciously."],
      ['Presenter', "So do they still work if we don't notice them?"],
      ['Chris', "Very often, yes. Advertising works by repetition. The more often you see a brand, the more familiar it feels, and we tend to trust things that feel familiar. So when you're standing in a supermarket choosing between two products, you'll probably pick the one you recognise."],
      ['Presenter', "What techniques do advertisers use?"],
      ['Chris', "One of the most common is creating a sense of urgency: 'Only three left!', 'Sale ends tonight!'. People hate the idea of missing out, so they buy quickly without comparing prices. Another is selling a feeling rather than a product. Car adverts rarely talk about engines; they show freedom, adventure, success."],
      ['Presenter', "Has social media changed things?"],
      ['Chris', "Enormously. Influencers are now one of the most powerful forms of advertising, because followers see them almost as friends. A recommendation from someone you feel you know is far more convincing than a TV commercial."],
      ['Presenter', "Any advice for listeners who want to resist?"],
      ['Chris', "Ask yourself: 'Did I want this before I saw the advert?' If the answer is no, wait a few days. And remember, if a product is free, then very often you are the product – your data is what's being sold."],
    ],
    items: [
      { t: 'mcq', q: 'How many adverts do we see every day, according to Chris?', o: ['400–1,000', '4,000–10,000', '40,000', 'about 100'], a: 1 },
      { t: 'tf', q: 'We consciously notice most of the adverts we see.', a: 'F' },
      { t: 'mcq', q: 'Why does repetition work?', o: ['Familiar things feel more trustworthy.', 'Adverts become cheaper.', 'People remember prices.', 'It makes products better.'], a: 0 },
      { t: 'mcq', q: '“Only three left!” is an example of…', o: ['selling a feeling', 'creating urgency', 'product placement', 'influencer marketing'], a: 1 },
      { t: 'mcq', q: 'What do car adverts usually show?', o: ['engines and prices', 'freedom, adventure and success', 'safety tests', 'factories'], a: 1 },
      { t: 'tf', q: 'Chris says influencers are less convincing than TV commercials.', a: 'F' },
      { t: 'mcq', q: 'What does Chris mean by “you are the product”?', o: ['You will be famous.', 'Your personal data is being sold.', 'You should sell things online.', 'Products are free.'], a: 1 },
    ],
  },
  {
    title: 'Discussion: Should students learn about money at school?',
    level: '5 · Rất khó · 3 người, tốc độ tự nhiên',
    desc: 'Thảo luận về việc dạy quản lý tài chính trong trường học.',
    rate: '+5%',
    voices: { Host: 'en-GB-RyanNeural', Anna: 'en-US-AriaNeural', Peter: 'en-GB-ThomasNeural' },
    script: [
      ['Host', "Welcome back. A recent survey found that more than half of young adults feel they left school without knowing how to manage money. Should financial education be a compulsory subject? I'm joined by Anna Grant, a financial adviser, and Peter Shaw, a secondary school head teacher. Anna?"],
      ['Anna', "Absolutely, it should. Every week I meet people in their twenties who are already seriously in debt. Many of them didn't understand how credit cards work, or how quickly interest adds up. They're intelligent people. Nobody simply ever taught them."],
      ['Host', "Peter, you're less sure?"],
      ['Peter', "I agree with the aim, of course. My concern is time. The school day is already full, and every year someone says we should add another subject. If we introduce financial education, what do we take out?"],
      ['Anna', "I'd say it doesn't need to be a separate subject. You could include it in maths. Instead of calculating the area of a triangle, students could compare two phone contracts, or work out the real cost of a loan."],
      ['Peter', "That's a fair point, and some of our teachers already do that. The other issue is that many teachers don't feel confident teaching it. They'd need training."],
      ['Host', "What about parents? Isn't this something families should teach?"],
      ['Peter', "Ideally, yes. But not every family talks about money, and some parents are struggling themselves. School is the one place where everyone gets the same information."],
      ['Anna', "Exactly. And the earlier the better. Research suggests that money habits are largely formed by the age of seven. By the time students are sixteen, we're often trying to change habits rather than build them."],
      ['Host', "So, a final answer from both of you: compulsory or not?"],
      ['Peter', "Yes, but as part of existing subjects, with proper training for teachers."],
      ['Anna', "I can accept that, as long as it actually happens."],
    ],
    items: [
      { t: 'mcq', q: 'What did the survey find?', o: ['Young adults save a lot.', 'More than half of young adults feel unprepared to manage money.', 'Most schools teach finance.', 'Parents teach money skills well.'], a: 1 },
      { t: 'tf', q: 'Anna thinks people in debt are usually not intelligent.', a: 'F', ex: '“They’re intelligent people. Nobody simply ever taught them.”' },
      { t: 'mcq', q: 'What is Peter’s main concern at first?', o: ['cost', 'lack of time in the school day', 'parents’ opinions', 'students’ interest'], a: 1 },
      { t: 'mcq', q: 'Where does Anna suggest including financial education?', o: ['in history', 'in maths', 'after school', 'online only'], a: 1 },
      { t: 'tf', q: 'Peter says some teachers would need training.', a: 'T' },
      { t: 'gap', q: 'Money habits are largely formed by the age of ___.', a: ['seven', '7'] },
      { t: 'mcq', q: 'What do they finally agree on?', o: ['no financial education', 'a separate compulsory subject', 'compulsory but within existing subjects, with teacher training', 'parents should teach it'], a: 2 },
    ],
    dictation: ['Nobody simply ever taught them.', 'School is the one place where everyone gets the same information.'],
  },
];

const exercises = [
  {
    title: 'A. Từ vựng chủ đề – điền từ',
    instruction: 'Điền dạng đúng của: afford, bargain, brand, debt, export, fee, owe, profit, receipt, waste',
    items: [
      { t: 'gap', q: "I can't ___ to buy a new car right now.", a: ['afford'] },
      { t: 'gap', q: 'Only 99,000 dong? That’s a real ___!', a: ['bargain'] },
      { t: 'gap', q: 'Nike is a famous sports ___.', a: ['brand'] },
      { t: 'gap', q: 'Don’t ___ your money on things you don’t need.', a: ['waste'] },
      { t: 'gap', q: 'The company made a huge ___ last year.', a: ['profit'] },
      { t: 'gap', q: 'Keep the ___ in case you need to return it.', a: ['receipt'] },
      { t: 'gap', q: 'I still ___ my brother some money.', a: ['owe'] },
      { t: 'gap', q: 'Vietnam ___ rice to many countries.', a: ['exports'] },
      { t: 'gap', q: 'University ___ are very high in the UK.', a: ['fees'] },
      { t: 'gap', q: 'He has been in ___ since he lost his job.', a: ['debt'] },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: add up, come back, give away, hurry up, pay back, save up, take back, take down (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: "I'm ___ for a new phone.", a: ['saving up'] },
      { t: 'gap', q: 'Could you ___ the bill? I think it’s wrong.', a: ['add up'] },
      { t: 'gap', q: 'The shop is ___ free samples today.', a: ['giving away'] },
      { t: 'gap', q: "Lend me 100,000 and I'll ___ you ___ tomorrow. (2 phần, cách nhau …)", a: ['pay … back', 'pay back'] },
      { t: 'gap', q: '___! The shop closes in five minutes.', a: ['Hurry up'] },
      { t: 'gap', q: 'These shoes don’t fit. I’ll ___ them ___ to the shop. (2 phần, cách nhau …)', a: ['take … back', 'take back'] },
      { t: 'gap', q: 'Please ___ that box from the top shelf.', a: ['take down'] },
      { t: 'gap', q: 'When did you ___ from the market?', a: ['come back'] },
    ],
  },
  {
    title: 'C. Cụm giới từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Can I pay ___ credit card?', o: ['by', 'with', 'in'], a: 0 },
      { t: 'mcq', q: 'Most street vendors want to be paid ___ cash.', o: ['by', 'in', 'on'], a: 1 },
      { t: 'mcq', q: 'This house is ___ sale.', o: ['on', 'for', 'in'], a: 1 },
      { t: 'mcq', q: 'The car is old but ___ good condition.', o: ['on', 'at', 'in'], a: 2 },
      { t: 'mcq', q: 'I borrowed some money ___ my parents.', o: ['to', 'from', 'by'], a: 1 },
      { t: 'mcq', q: 'Could you lend your laptop ___ me?', o: ['to', 'from', 'for'], a: 0 },
      { t: 'mcq', q: 'She spends too much money ___ clothes.', o: ['in', 'for', 'on'], a: 2 },
      { t: 'mcq', q: 'Who does this wallet belong ___?', o: ['to', 'for', 'with'], a: 0 },
      { t: 'mcq', q: 'There’s something wrong ___ my phone.', o: ['about', 'with', 'for'], a: 1 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'The city needs more ___ housing for young people. (AFFORD)', a: ['affordable'] },
      { t: 'gap', q: 'The ___ in this restaurant is excellent. (SERVE)', a: ['service'] },
      { t: 'gap', q: 'Buying a house is a big ___. (DECIDE)', a: ['decision'] },
      { t: 'gap', q: 'This app is completely ___ – it never works. (USE)', a: ['useless'] },
      { t: 'gap', q: 'Keep your ___ things in the hotel safe. (VALUE)', a: ['valuable'] },
      { t: 'gap', q: 'The meal was surprisingly ___ – only 50,000 dong. (EXPENSE)', a: ['inexpensive'] },
      { t: 'gap', q: 'In ___ to the price, you must pay a delivery fee. (ADD)', a: ['addition'] },
      { t: 'gap', q: 'The claims in the advert were completely ___. (TRUE)', a: ['untrue'] },
      { t: 'gap', q: 'Make a ___ of prices before you buy. (COMPARE)', a: ['comparison'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép động từ với cụm danh từ phù hợp.',
    items: [
      { t: 'match', pairs: [['make', 'a profit'], ['pay off', 'a debt'], ['keep', 'the receipt'], ['cost', 'a fortune'], ['make', 'a purchase'], ['save', 'money'], ['waste', 'time'], ['invest', 'in a company']] },
    ],
  },
  {
    title: 'F. Đồng nghĩa – trái nghĩa',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'Trái nghĩa với “export”:', o: ['import', 'supply', 'sell', 'own'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “purchase”:', o: ['sell', 'buy', 'save', 'owe'], a: 1 },
      { t: 'mcq', q: 'Trái nghĩa với “profit”:', o: ['loss', 'fee', 'fortune', 'sale'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “select”:', o: ['choose', 'demand', 'require', 'waste'], a: 0 },
      { t: 'mcq', q: 'Trái nghĩa với “lend”:', o: ['borrow', 'give', 'owe', 'pay'], a: 0 },
      { t: 'mcq', q: 'Đồng nghĩa với “require”:', o: ['need', 'supply', 'obtain', 'own'], a: 0 },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Tôi không đủ tiền mua chiếc điện thoại đó.', ref: "I can't afford (to buy) that phone.", focus: 'afford' },
      { t: 'tr', vi: 'Tôi đang dành dụm tiền để đi du lịch Nhật Bản.', ref: "I'm saving up for a trip to Japan.", focus: 'save up for' },
      { t: 'tr', vi: 'Bạn có thể trả bằng tiền mặt hoặc bằng thẻ.', ref: 'You can pay in cash or by card.', focus: 'in cash, by card' },
      { t: 'tr', vi: 'Cô ấy tiêu quá nhiều tiền vào quần áo hàng hiệu.', ref: 'She spends too much money on designer clothes.', focus: 'spend money on, brand' },
      { t: 'tr', vi: 'Hãy giữ hóa đơn phòng khi bạn muốn đổi trả.', ref: 'Keep the receipt in case you want to take it back.', focus: 'receipt, take back' },
      { t: 'tr', vi: 'Tôi đã mượn em gái 200 nghìn và sẽ trả lại vào tuần sau.', ref: "I borrowed 200,000 dong from my sister and I'll pay her back next week.", focus: 'borrow from, pay back' },
      { t: 'tr', vi: 'Mua sắm trực tuyến tiết kiệm thời gian nhưng dễ khiến ta lãng phí tiền.', ref: 'Online shopping saves time, but it can easily make us waste money.', focus: 'save time, waste money (IELTS)' },
      { t: 'tr', vi: 'Chiếc xe máy cũ nhưng vẫn trong tình trạng tốt.', ref: 'The motorbike is old but still in good condition.', focus: 'in good condition' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you enjoy shopping? Why or why not?' },
  { part: 'Part 1', q: 'Do you prefer shopping online or in shops?' },
  { part: 'Part 1', q: 'Are you good at saving money?' },
  { part: 'Part 1', q: 'What was the last thing you bought?' },
  { part: 'Part 2', q: 'Describe something you bought that you were very happy with.', cue: ['what it was', 'where and when you bought it', 'how much it cost', 'and explain why you were happy with it'] },
  { part: 'Part 3', q: 'Why do some people buy things they don’t really need?' },
  { part: 'Part 3', q: 'How has online shopping changed the way people buy things?' },
  { part: 'Part 3', q: 'Should advertising aimed at children be banned?' },
  { part: 'Part 3', q: 'Do you think a cashless society is a good idea?' },
];

export default {
  id: 'b1-u15',
  book: 'b1',
  no: 15,
  title: 'Buying and selling',
  titleVi: 'Mua bán & tiền bạc',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
