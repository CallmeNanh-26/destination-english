// B2 Unit 12 – Vocabulary: The law and crime (Destination B2).
// Reading and listening texts are original, written around the unit's vocabulary.
import vocab from './u12-vocab.js';

const reading = [
  {
    title: 'The day my bike was stolen',
    level: 'Dễ · ~200 từ',
    text: `Last month, a thief stole my motorbike from outside a café in the city centre. I had only gone inside for ten minutes, and I was sure I had locked it. When I came out, it had gone.

I went straight to the police station to report the theft. An officer took down my details and asked if anyone had seen anything. Luckily, a waiter had caught a glimpse of two young men pushing a bike down the street. He came forward and gave the police a description.

The police looked into the case and checked the CCTV cameras in the area. A week later, they called me with good news: they had found my bike in a garage on the edge of the city, along with eleven other stolen bikes. Two men were arrested and charged with theft.

At first, the men denied everything, but the evidence from the cameras was too strong. In the end, they pleaded guilty.

I was lucky to get my bike back. Now I always use two locks, and I never leave it in the street, even for a few minutes.`,
    items: [
      { t: 'gap', q: 'The writer went into the café for ___ minutes.', a: ['ten', '10'] },
      { t: 'mcq', q: 'Who came forward with information?', o: ['a police officer', 'a waiter', 'a customer', 'a friend'], a: 1 },
      { t: 'mcq', q: 'How did the police find the bike?', o: ['by chance', 'by checking CCTV cameras', 'an anonymous call', 'the thieves returned it'], a: 1 },
      { t: 'gap', q: 'The police found ___ other stolen bikes.', a: ['eleven', '11'] },
      { t: 'tf', q: 'The men admitted the crime immediately.', a: 'F' },
      { t: 'mcq', q: 'What does the writer do now?', o: ['takes the bus', 'uses two locks', 'parks at home only', 'sold the bike'], a: 1 },
    ],
  },
  {
    title: 'Online scams: don’t get taken in',
    level: 'Dễ–Trung bình · ~270 từ',
    text: `Every year, millions of people are taken in by online scams, and the criminals behind them are getting cleverer. While burglaries and street robberies have fallen in many countries, fraud – especially online – is rising fast.

One of the most common tricks is the "fake delivery" message. You receive a text saying that a parcel could not be delivered and asking you to click a link and pay a small fee. The website looks real, but its real purpose is to steal your bank details.

Another is the "romance scam". Criminals create fake profiles on dating apps or social media and spend weeks building a relationship with their victim. Then they invent an emergency – a medical bill, a problem at customs – and ask for money. Victims often lose their life savings.

Older people are frequently targeted, but research shows that young people are actually more likely to fall for certain types of fraud, such as fake job offers or investment schemes that promise quick profits.

How can you protect yourself? Experts give some simple advice. Never click on links in unexpected messages. Never give your password or bank details to anyone, even if they claim to be from your bank or the police. Be suspicious of anyone who puts pressure on you to act quickly. And if something seems too good to be true, it probably is.

If you think you have been a victim, report it immediately. Criminals rely on people feeling too embarrassed to come forward – which is exactly how they get away with it.`,
    items: [
      { t: 'mcq', q: 'What is happening to online fraud?', o: ['It is falling.', 'It is rising fast.', 'It has disappeared.', 'It is the same.'], a: 1 },
      { t: 'mcq', q: 'What is the real purpose of a fake delivery website?', o: ['to deliver parcels', 'to steal bank details', 'to sell products', 'to collect taxes'], a: 1 },
      { t: 'mcq', q: 'In a romance scam, criminals…', o: ['steal cars', 'build a fake relationship and ask for money', 'send parcels', 'hack phones'], a: 1 },
      { t: 'tf', q: 'Young people are never victims of fraud.', a: 'F' },
      { t: 'mcq', q: 'Which is NOT advice in the text?', o: ['don’t click unexpected links', 'never give your password', 'be suspicious of pressure', 'always pay small fees'], a: 3 },
      { t: 'mcq', q: 'How do criminals get away with it?', o: ['Police ignore them.', 'Victims feel too embarrassed to report it.', 'They live abroad.', 'They use fake names.'], a: 1 },
    ],
  },
  {
    title: 'Should young offenders go to prison?',
    level: 'Trung bình · ~330 từ',
    text: `When a teenager commits a crime, how should society respond? For many years, the answer in many countries was simple: lock them up. Today, however, an increasing number of experts argue that prison often makes young offenders more likely to commit crimes again, not less.

The statistics are worrying. In several countries, more than half of young people released from prison are convicted of another crime within a year. Critics argue that prisons can act as "schools of crime", where young offenders learn from older, more experienced criminals. A prison record also makes it much harder to find a job or a place at college, which can push young people back towards crime.

As a result, many countries have brought in alternatives. Community service, in which offenders repair damage they have caused or work on local projects, makes them take responsibility for their actions while allowing them to stay at school or work. "Restorative justice" brings offenders face to face with their victims, so that they understand the real harm they have done. Studies suggest that these programmes can reduce reoffending significantly – and they are much cheaper than prison.

Not everyone is convinced. Victims of serious crimes sometimes feel that alternative punishments are too soft and that offenders are being let off lightly. Some argue that prison is necessary for violent offenders, both to punish them and to protect the public.

Most experts now take a middle position. Prison should be kept for the most serious cases, they say, but for most young offenders the aim should be to prevent future crime, not simply to punish past crime. As one judge put it, "Every young person we turn away from crime is a future victim saved."`,
    items: [
      { t: 'mcq', q: 'What do many experts now argue about prison for young offenders?', o: ['It always works.', 'It often makes reoffending more likely.', 'It is too expensive only.', 'It is too short.'], a: 1 },
      { t: 'mcq', q: 'Why are prisons called “schools of crime”?', o: ['They have classes.', 'Young offenders learn from older criminals.', 'They are near schools.', 'Teachers work there.'], a: 1 },
      { t: 'mcq', q: 'What is “restorative justice”?', o: ['longer sentences', 'offenders meet their victims', 'community service only', 'paying a fine'], a: 1 },
      { t: 'tf', q: 'Alternatives to prison are more expensive than prison.', a: 'F' },
      { t: 'mcq', q: 'How do some victims feel about alternative punishments?', o: ['They are too harsh.', 'They are too soft.', 'They are perfect.', 'They do not care.'], a: 1 },
      { t: 'mcq', q: 'What is the judge’s point?', o: ['Prison saves victims.', 'Turning a young person away from crime prevents future victims.', 'All crime should be punished harshly.', 'Judges need more power.'], a: 1 },
    ],
  },
  {
    title: 'CCTV: protection or invasion of privacy?',
    level: 'Trung bình–Khó · ~360 từ',
    text: `Walk through the centre of any large city today and you will almost certainly be filmed dozens of times. Security cameras watch over streets, shops, stations and buses, and in some cities they are now linked to facial-recognition software that can identify individuals within seconds. Supporters say this technology makes us safer. Critics say it is turning our cities into places where everyone is watched all the time.

There is some evidence that cameras can help to reduce certain types of crime. Studies have found that CCTV is particularly effective in car parks, where vehicle theft fell significantly after cameras were installed. Footage is also extremely useful after a crime has been committed: in many cases, it allows the police to identify suspects and provides strong evidence in court.

However, the effect on violent crime appears to be much smaller. Many violent incidents happen suddenly, often involving people who have been drinking and who are not thinking about the possibility of being filmed. Some researchers also argue that cameras do not prevent crime but simply move it to areas that are not covered.

The greatest concerns relate to privacy and civil rights. Facial-recognition systems have been shown to make more mistakes when identifying women and people with darker skin, leading to innocent people being stopped by police by mistake. There are also fears about how the data is stored, who has access to it, and whether it could be used to monitor peaceful protesters or political opponents.

Several cities have responded by banning the police from using facial recognition, while others have introduced strict rules about when it can be used. Many people accept cameras in public places but draw the line at technology that tracks individuals' movements.

The debate reflects a deeper question about the balance between security and freedom. Most people want to feel safe, but few want to live in a society where their every move is recorded. Finding the right balance – with clear laws, independent oversight and public discussion – may be one of the most important challenges for modern democracies.`,
    items: [
      { t: 'mcq', q: 'Where is CCTV particularly effective?', o: ['in parks', 'in car parks', 'in homes', 'in schools'], a: 1 },
      { t: 'mcq', q: 'Why is CCTV less effective against violent crime?', o: ['Cameras break.', 'Violent incidents happen suddenly, often involving drinking.', 'Police ignore footage.', 'It is too dark.'], a: 1 },
      { t: 'tf', q: 'Some researchers think cameras just move crime to other areas.', a: 'T' },
      { t: 'mcq', q: 'What problem with facial recognition is mentioned?', o: ['It is too slow.', 'It makes more mistakes with women and people with darker skin.', 'It is too cheap.', 'It only works at night.'], a: 1 },
      { t: 'mcq', q: 'How have some cities responded?', o: ['by adding more cameras', 'by banning police use of facial recognition', 'by removing all CCTV', 'by selling the data'], a: 1 },
      { t: 'mcq', q: 'What deeper question does the debate reflect?', o: ['cost vs quality', 'security vs freedom', 'old vs new technology', 'police vs courts'], a: 1 },
    ],
  },
  {
    title: 'Is prison the best way to reduce crime?',
    level: 'Khó · ~420 từ · IELTS',
    text: `For centuries, prison has been society's main response to serious crime. It serves several purposes at once: it punishes offenders, protects the public by removing dangerous people from the streets, and is intended to deter others from committing similar crimes. Yet many criminologists now question whether prison is really the most effective way to reduce crime, pointing out that in many countries prisons are overcrowded, expensive and associated with high rates of reoffending.

There are certainly strong arguments in favour of imprisonment. For violent and dangerous offenders, prison is necessary to protect the public, and few people would argue that a convicted murderer should be released into the community. Prison sentences also send a clear message that society takes crime seriously, and they give victims a sense that justice has been done. Supporters of tough sentencing also argue that the threat of prison discourages potential criminals.

However, the evidence for deterrence is weaker than many people assume. Research suggests that the certainty of being caught has a much greater effect on behaviour than the length of the sentence. Most offenders do not expect to be caught, so the prospect of a longer sentence makes little difference to their decisions. Moreover, prison can have serious negative effects. Many prisoners lose their jobs, homes and family relationships, and on release they find it extremely difficult to rebuild their lives. Without support, a large proportion return to crime.

Many experts therefore argue that money would be better spent on tackling the causes of crime. Poverty, unemployment, drug and alcohol addiction, mental illness and a lack of education are all strongly linked to offending. Programmes that offer education and job training in prison, treatment for addiction, and support after release have been shown to reduce reoffending considerably. Countries such as Norway, which focus on rehabilitation rather than punishment, have some of the lowest reoffending rates in the world.

In conclusion, while prison remains necessary for the most serious and dangerous offenders, it is not on its own the best way to reduce crime. A more effective approach would combine prison where necessary with greater investment in crime prevention, rehabilitation and alternatives to custody for less serious offences. Such a system would not only be fairer, but would also make society safer in the long term.`,
    items: [
      { t: 'mcq', q: 'Which is NOT a purpose of prison mentioned?', o: ['punishment', 'protecting the public', 'deterring others', 'making money'], a: 3 },
      { t: 'mcq', q: 'According to research, what affects behaviour more?', o: ['the length of the sentence', 'the certainty of being caught', 'the prison conditions', 'the judge'], a: 1 },
      { t: 'tf', q: 'Most offenders expect to be caught.', a: 'F' },
      { t: 'mcq', q: 'Which is a cause of crime mentioned in the text?', o: ['bad weather', 'poverty and unemployment', 'social media', 'tourism'], a: 1 },
      { t: 'mcq', q: 'Why is Norway mentioned?', o: ['It has the longest sentences.', 'It focuses on rehabilitation and has low reoffending rates.', 'It has no prisons.', 'It uses capital punishment.'], a: 1 },
      { t: 'mcq', q: 'What is the writer’s conclusion?', o: ['Prison should be abolished.', 'Prison is necessary for serious cases but should be combined with prevention and rehabilitation.', 'Longer sentences are the answer.', 'Crime cannot be reduced.'], a: 1 },
    ],
  },
];

const listening = [
  {
    title: 'Police appeal for witnesses',
    level: '1 · Dễ · 1 giọng, chậm',
    desc: 'Lời kêu gọi nhân chứng của cảnh sát.',
    rate: '-12%',
    voices: { N: 'en-GB-ThomasNeural' },
    script: [
      ['N', 'Police are asking for witnesses after a robbery at a jewellery shop on Market Street on Tuesday evening.'],
      ['N', 'At about seven fifteen p.m., two men entered the shop and threatened the staff. They made off with watches and rings worth around forty thousand pounds.'],
      ['N', 'The first man is described as tall, in his twenties, and was wearing a black jacket. The second man was shorter and had a red cap.'],
      ['N', 'Nobody was seriously hurt, but a shop assistant was taken to hospital in shock.'],
      ['N', 'Anyone who saw anything unusual in the area is asked to come forward and call the police on 0-1-6-1, 4-9-6, 2-2-0-7.'],
    ],
    items: [
      { t: 'mcq', q: 'What kind of shop was robbed?', o: ['a bank', 'a jewellery shop', 'a phone shop', 'a supermarket'], a: 1 },
      { t: 'gap', q: 'The robbery happened at about seven ___ p.m.', a: ['fifteen', '15'] },
      { t: 'gap', q: 'The goods were worth around ___ thousand pounds.', a: ['forty', '40'] },
      { t: 'mcq', q: 'What was the second man wearing?', o: ['a black jacket', 'a red cap', 'a blue coat', 'glasses'], a: 1 },
      { t: 'tf', q: 'Someone was seriously injured.', a: 'F' },
    ],
    dictation: ['Police are asking for witnesses after a robbery.', 'Anyone who saw anything unusual is asked to come forward.'],
  },
  {
    title: 'Conversation: Reporting a stolen wallet',
    level: '2 · Dễ · 2 giọng',
    desc: 'Báo mất ví tại đồn cảnh sát.',
    rate: '-5%',
    voices: { Officer: 'en-GB-RyanNeural', Linh: 'en-AU-NatashaNeural' },
    script: [
      ['Officer', 'Good afternoon. How can I help?'],
      ['Linh', "I'd like to report a theft. Someone stole my wallet on the bus this morning."],
      ['Officer', "I'm sorry to hear that. Can you tell me what happened?"],
      ['Linh', "The bus was very crowded. A man kept pushing against me, and when I got off, my bag was open and my wallet had gone."],
      ['Officer', 'Did you see his face?'],
      ['Linh', "Only for a second. He was young, with short hair and a grey hoodie."],
      ['Officer', "OK, I'll take that down. What was in the wallet?"],
      ['Linh', "About eight hundred thousand dong, my ID card and two bank cards. I've already cancelled the cards."],
      ['Officer', "Good. We'll look into it and check the cameras on the bus. Sometimes thieves throw wallets away and people hand them in, so it's worth checking with us next week."],
    ],
    items: [
      { t: 'mcq', q: 'Where was the wallet stolen?', o: ['in a café', 'on the bus', 'at school', 'in a shop'], a: 1 },
      { t: 'mcq', q: 'What was the thief wearing?', o: ['a black jacket', 'a grey hoodie', 'a red cap', 'a suit'], a: 1 },
      { t: 'gap', q: 'There was about ___ thousand dong in the wallet.', a: ['eight hundred', '800'] },
      { t: 'tf', q: 'Linh has already cancelled her bank cards.', a: 'T' },
      { t: 'mcq', q: 'Why should Linh check with the police next week?', o: ['to pay a fee', 'people sometimes hand in thrown-away wallets', 'to see the thief', 'to sign a form'], a: 1 },
    ],
    dictation: ["I'd like to report a theft.", "We'll look into it and check the cameras."],
  },
  {
    title: 'Talk: A day in court',
    level: '3 · Trung bình · 1 giọng',
    desc: 'Một sinh viên luật kể về buổi dự phiên tòa.',
    rate: '+0%',
    voices: { Student: 'en-US-JennyNeural' },
    script: [
      ['Student', "As part of my law course, I spent a day watching trials at the local court. It was completely different from what I'd seen in films."],
      ['Student', "Firstly, it was much slower. There were no dramatic speeches. Most of the time, lawyers were asking witnesses very detailed questions, and the judge was taking notes."],
      ['Student', "The case I watched was about a car accident. The accused man was charged with dangerous driving. He claimed the other driver was at fault, but a bystander who had seen everything gave evidence against him."],
      ['Student', "The jury took about three hours to reach a verdict. They found him guilty, and the judge sentenced him to six months in prison, suspended for two years, and banned him from driving."],
      ['Student', "What struck me most was how seriously everyone took their role. It made me realise how much responsibility lawyers and judges have – one decision can change someone's life."],
    ],
    items: [
      { t: 'mcq', q: 'How was the real court different from films?', o: ['faster', 'much slower, with no dramatic speeches', 'more exciting', 'louder'], a: 1 },
      { t: 'mcq', q: 'What was the man charged with?', o: ['theft', 'dangerous driving', 'robbery', 'fraud'], a: 1 },
      { t: 'mcq', q: 'Who gave evidence against him?', o: ['a police officer', 'a bystander', 'his friend', 'the judge'], a: 1 },
      { t: 'gap', q: 'The jury took about ___ hours to reach a verdict.', a: ['three', '3'] },
      { t: 'tf', q: 'The man was banned from driving.', a: 'T' },
    ],
    dictation: ['The accused man was charged with dangerous driving.', 'One decision can change someone’s life.'],
  },
  {
    title: 'Radio interview: Life as a police detective',
    level: '4 · Trung bình–Khó · 2 giọng',
    desc: 'Phỏng vấn một thám tử cảnh sát.',
    rate: '+0%',
    voices: { Presenter: 'en-GB-SoniaNeural', Mike: 'en-US-GuyNeural' },
    script: [
      ['Presenter', "Detective Inspector Mike Lewis has worked in the police for twenty years. Mike, is detective work like it is on TV?"],
      ['Mike', "Not really! On TV, a detective solves a murder in an hour. In real life, an investigation can take months or even years, and most of the work is done at a desk – going through phone records, bank statements and CCTV footage."],
      ['Presenter', 'How has the job changed?'],
      ['Mike', "Enormously. When I started, most evidence came from witnesses. Now, almost every crime leaves a digital trace. Mobile phones are probably our most important source of evidence."],
      ['Presenter', 'And the types of crime?'],
      ['Mike', "Burglaries have fallen a lot, partly because of better home security. But online fraud has exploded. Many criminals don't even live in the same country as their victims, which makes them very hard to catch."],
      ['Presenter', "What's the hardest part of the job?"],
      ['Mike', "Speaking to victims' families. You can't always give them the answers they want. But when you do find the person responsible and bring them to justice, there's no better feeling."],
    ],
    items: [
      { t: 'gap', q: 'Mike has worked in the police for ___ years.', a: ['twenty', '20'] },
      { t: 'mcq', q: 'Where is most detective work done, according to Mike?', o: ['on the street', 'at a desk', 'in court', 'at crime scenes'], a: 1 },
      { t: 'mcq', q: 'What is probably the most important source of evidence now?', o: ['witnesses', 'mobile phones', 'fingerprints', 'DNA'], a: 1 },
      { t: 'mcq', q: 'Why have burglaries fallen?', o: ['more police', 'better home security', 'longer sentences', 'fewer houses'], a: 1 },
      { t: 'mcq', q: 'What is the hardest part of the job?', o: ['paperwork', 'speaking to victims’ families', 'long hours', 'court'], a: 1 },
    ],
    dictation: ['Almost every crime leaves a digital trace.', 'Online fraud has exploded.'],
  },
  {
    title: 'Discussion: Should the age of criminal responsibility be raised?',
    level: '5 · Khó · 3 giọng, tốc độ tự nhiên',
    desc: 'Thảo luận kiểu IELTS Part 3 về độ tuổi chịu trách nhiệm hình sự.',
    rate: '+5%',
    voices: { Host: 'en-AU-WilliamNeural', Clare: 'en-GB-LibbyNeural', Tom: 'en-GB-ThomasNeural' },
    script: [
      ['Host', "In some countries, children as young as ten can be prosecuted for crimes. Clare, should that age be raised?"],
      ['Clare', "I think so. A ten-year-old's brain is still developing. They often don't fully understand the consequences of their actions. Putting them through the criminal justice system can do more harm than good."],
      ['Tom', "I understand that, but some young children commit very serious crimes. Victims and their families deserve justice too. If we raise the age, aren't we letting those children off?"],
      ['Clare', "Not at all. Raising the age doesn't mean doing nothing. It means dealing with children through social services and education rather than courts. The aim should be to understand why they did it and stop it happening again."],
      ['Tom', "That's reasonable for minor offences. But for violent crimes, I still think there needs to be some form of accountability."],
      ['Clare', "I agree that children should take responsibility. The question is whether a criminal court is the right place for that."],
      ['Host', "Is there a compromise?"],
      ['Tom', "Perhaps a higher age in general – say fourteen – but with exceptions for the most serious offences."],
      ['Clare', "I could accept that, as long as the focus stays on rehabilitation."],
    ],
    items: [
      { t: 'mcq', q: 'Why does Clare want to raise the age?', o: ['Children are too expensive to prosecute.', 'Their brains are still developing.', 'Courts are too busy.', 'Parents should be punished.'], a: 1 },
      { t: 'mcq', q: 'What is Tom’s concern?', o: ['Victims deserve justice too.', 'Prisons are full.', 'Social workers are expensive.', 'Children are innocent.'], a: 0 },
      { t: 'mcq', q: 'How does Clare say children should be dealt with?', o: ['through courts', 'through social services and education', 'by parents only', 'not at all'], a: 1 },
      { t: 'gap', q: 'Tom suggests a general age of ___.', a: ['fourteen', '14'] },
      { t: 'tf', q: 'Clare accepts the compromise if the focus stays on rehabilitation.', a: 'T' },
    ],
    dictation: ["A ten-year-old's brain is still developing.", 'The aim should be to stop it happening again.'],
  },
];

const exercises = [
  {
    title: 'A. Từ dễ nhầm – chọn từ đúng',
    instruction: 'Chọn từ đúng.',
    items: [
      { t: 'mcq', q: 'The police found new ___ at the scene.', o: ['evidence', 'proof'], a: 0 },
      { t: 'mcq', q: 'He was ___ with robbery.', o: ['charged', 'arrested', 'suspected'], a: 0 },
      { t: 'mcq', q: 'The ___ found him not guilty.', o: ['jury', 'judge'], a: 0 },
      { t: 'mcq', q: 'The jury took two days to reach a ___.', o: ['verdict', 'decision'], a: 0 },
      { t: 'mcq', q: 'Anyone who ___ the law should be punished.', o: ['breaks', 'commits'], a: 0 },
      { t: 'mcq', q: 'Most crimes are ___ by young men.', o: ['committed', 'broken'], a: 0 },
      { t: 'mcq', q: 'A ___ broke into our house while we were away.', o: ['burglar', 'robber'], a: 0 },
      { t: 'mcq', q: 'Two armed ___ held up the bank.', o: ['robbers', 'burglars'], a: 0 },
      { t: 'mcq', q: 'She was ___ to two years in prison.', o: ['sentenced', 'imprisoned'], a: 0 },
      { t: 'mcq', q: 'Shoplifters will be ___.', o: ['prosecuted', 'persecuted'], a: 0 },
      { t: 'mcq', q: 'An innocent ___ was injured in the fight.', o: ['bystander', 'witness'], a: 0 },
    ],
  },
  {
    title: 'B. Phrasal verbs',
    instruction: 'Điền: back down, break out, bring in, come forward, get away with, go off, hand in, hold up, let off, look into, make off, take in (chia động từ nếu cần).',
    items: [
      { t: 'gap', q: 'Three prisoners ___ of the prison last night.', a: ['broke out'] },
      { t: 'gap', q: 'The government is ___ tougher laws on drink-driving.', a: ['bringing in'] },
      { t: 'gap', q: 'Police are asking witnesses to ___.', a: ['come forward'] },
      { t: 'gap', q: 'He cheated, but he ___ it – nobody noticed.', a: ['got away with'] },
      { t: 'gap', q: 'The burglar alarm ___ in the middle of the night.', a: ['went off'] },
      { t: 'gap', q: 'Someone ___ my lost wallet to the police.', a: ['handed in'] },
      { t: 'gap', q: 'Two armed men ___ a petrol station.', a: ['held up'] },
      { t: 'gap', q: 'The police ___ with a warning. (tha cho anh ta)', a: ['let him off'] },
      { t: 'gap', q: 'The police are ___ the robbery.', a: ['looking into'] },
      { t: 'gap', q: 'The thieves ___ with jewellery worth $50,000.', a: ['made off'] },
      { t: 'gap', q: 'Many elderly people were ___ by the phone scam.', a: ['taken in'] },
    ],
  },
  {
    title: 'C. Cụm từ & word patterns',
    instruction: 'Chọn đáp án đúng.',
    items: [
      { t: 'mcq', q: 'She was accused ___ stealing from her employer.', o: ['of', 'for', 'with'], a: 0 },
      { t: 'mcq', q: 'He was charged ___ fraud.', o: ['with', 'of', 'for'], a: 0 },
      { t: 'mcq', q: 'He was arrested ___ dangerous driving.', o: ['for', 'of', 'with'], a: 0 },
      { t: 'mcq', q: 'He was found guilty ___ theft.', o: ['of', 'for', 'with'], a: 0 },
      { t: 'mcq', q: 'The robber threatened the cashier ___ a knife.', o: ['with', 'by', 'of'], a: 0 },
      { t: 'mcq', q: 'The fire was started ___ purpose.', o: ['on', 'by', 'in'], a: 0 },
      { t: 'mcq', q: 'The police arrested the wrong man by ___.', o: ['mistake', 'fault', 'purpose'], a: 0 },
      { t: 'mcq', q: 'Who is to ___ for the rise in crime?', o: ['blame', 'fault', 'mistake'], a: 0 },
      { t: 'mcq', q: 'Criminals take ___ of careless people online.', o: ['advantage', 'account', 'damage'], a: 0 },
      { t: 'mcq', q: 'They made him ___ for the damage.', o: ['pay', 'to pay', 'paying'], a: 0 },
    ],
  },
  {
    title: 'D. Word formation',
    instruction: 'Dùng từ in hoa để tạo từ phù hợp với câu.',
    items: [
      { t: 'gap', q: 'He denied all the ___. (ACCUSE)', a: ['accusations'] },
      { t: 'gap', q: 'Drug ___ is linked to many crimes. (ADDICT)', a: ['addiction'] },
      { t: 'gap', q: 'He had no previous ___. (CONVICT)', a: ['convictions'] },
      { t: 'gap', q: 'Having a ___ record makes it hard to find work. (CRIME)', a: ['criminal'] },
      { t: 'gap', q: 'It was ___ of him to keep the money. (HONEST)', a: ['dishonest'] },
      { t: 'gap', q: 'The police have started an ___. (INVESTIGATE)', a: ['investigation'] },
      { t: 'gap', q: 'Young ___ need education, not just punishment. (OFFENCE)', a: ['offenders'] },
      { t: 'gap', q: 'He was sentenced to life ___. (PRISON)', a: ['imprisonment'] },
      { t: 'gap', q: 'There was an armed ___ at the bank. (ROB)', a: ['robbery'] },
      { t: 'gap', q: 'The bank has increased ___. (SECURE)', a: ['security'] },
      { t: 'gap', q: 'Identity ___ is a growing problem. (THIEF)', a: ['theft'] },
    ],
  },
  {
    title: 'E. Ghép collocation',
    instruction: 'Ghép các phần để tạo cụm từ đúng.',
    items: [
      { t: 'match', pairs: [['commit', 'a crime'], ['break', 'the law'], ['reach', 'a verdict'], ['a prison', 'sentence'], ['plead', 'guilty'], ['give', 'evidence'], ['a criminal', 'record'], ['human', 'rights']] },
    ],
  },
  {
    title: 'F. Viết lại câu',
    instruction: 'Viết lại câu dùng từ trong ngoặc, giữ nguyên nghĩa.',
    items: [
      { t: 'fix', q: 'The police are investigating the case. (looking)', a: ['The police are looking into the case.'] },
      { t: 'fix', q: 'He escaped punishment for the crime. (got away)', a: ['He got away with the crime.', 'He got away with it.'] },
      { t: 'fix', q: 'He said he hadn’t stolen the car. (denied)', a: ['He denied stealing the car.', 'He denied having stolen the car.'] },
      { t: 'fix', q: 'The court said he had committed the crime. (guilty)', a: ['He was found guilty.', 'The court found him guilty.', 'He was found guilty of the crime.'] },
      { t: 'fix', q: 'She deliberately broke the window. (purpose)', a: ['She broke the window on purpose.'] },
    ],
  },
  {
    title: 'G. Dịch câu Việt → Anh (AI chấm)',
    instruction: 'Dịch sang tiếng Anh, cố gắng dùng từ vựng của bài.',
    items: [
      { t: 'tr', vi: 'Hai người đàn ông bị bắt và bị buộc tội trộm cắp.', ref: 'Two men were arrested and charged with theft.', focus: 'arrest, charge with' },
      { t: 'tr', vi: 'Bồi thẩm đoàn tuyên bố anh ta có tội.', ref: 'The jury found him guilty.', focus: 'find sb guilty' },
      { t: 'tr', vi: 'Cảnh sát đang kêu gọi nhân chứng ra trình báo.', ref: 'The police are asking witnesses to come forward.', focus: 'come forward' },
      { t: 'tr', vi: 'Tội phạm trên mạng thường lợi dụng những người cao tuổi.', ref: 'Online criminals often take advantage of elderly people.', focus: 'take advantage of' },
      { t: 'tr', vi: 'Ai vi phạm pháp luật cũng phải bị trừng phạt.', ref: 'Anyone who breaks the law must be punished.', focus: 'break the law' },
      { t: 'tr', vi: 'Nhiều chuyên gia cho rằng nhà tù không phải là cách tốt nhất để giảm tội phạm.', ref: 'Many experts believe that prison is not the best way to reduce crime.', focus: 'IELTS Writing Task 2' },
      { t: 'tr', vi: 'Thẩm phán đã cân nhắc đến tuổi của bị cáo.', ref: "The judge took the defendant's age into account.", focus: 'take into account' },
      { t: 'tr', vi: 'Kẻ trộm đã tẩu thoát với số trang sức trị giá hàng trăm triệu đồng.', ref: 'The thieves made off with jewellery worth hundreds of millions of dong.', focus: 'make off with' },
    ],
  },
];

const speaking = [
  { part: 'Part 1', q: 'Do you feel safe in the area where you live?' },
  { part: 'Part 1', q: 'Do you enjoy watching crime dramas or reading detective stories?' },
  { part: 'Part 1', q: 'Have you ever lost something valuable?' },
  { part: 'Part 1', q: 'Are there many security cameras in your city?' },
  { part: 'Part 2', q: 'Describe a time when you saw someone break a rule or law.', cue: ['where and when it happened', 'what the person did', 'how other people reacted', 'and explain how you felt about it'] },
  { part: 'Part 3', q: 'Why do some young people commit crimes?' },
  { part: 'Part 3', q: 'Is prison the best way to reduce crime?' },
  { part: 'Part 3', q: 'Do security cameras invade people’s privacy?' },
  { part: 'Part 3', q: 'How can people protect themselves from online fraud?' },
];

export default {
  id: 'b2-u12',
  book: 'b2',
  no: 12,
  title: 'The law and crime',
  titleVi: 'Pháp luật & tội phạm',
  vocab,
  reading,
  listening,
  exercises,
  speaking,
};
