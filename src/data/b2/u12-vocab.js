// B2 Unit 12 – The law and crime: word list from Destination B2 p.72, expanded.
// `cmp` explains easily-confused words ("topic vocabulary in contrast").
const t = (w, pos, ipa, vi, en, cmp, col, ex, extra = {}) => ({ w, pos, ipa, g: 'topic', vi, en, cmp, fam: [], syn: [], ant: [], col, ex: [ex], ...extra });
const PROOF = 'proof = bằng chứng xác thực (chứng minh chắc chắn) · evidence = chứng cứ (thông tin, đồ vật giúp chứng minh; không đếm được)';
const ARREST = 'suspect (v) = nghi ngờ · arrest = bắt giữ · charge = buộc tội chính thức';
const ACCUSED = 'suspect (n) = nghi phạm (cảnh sát nghi ngờ) · the accused = bị cáo (người bị đưa ra xét xử)';
const VERDICT = 'decision = quyết định nói chung · verdict = phán quyết của bồi thẩm đoàn (có tội / vô tội)';
const COMMIT = 'commit = phạm (tội): commit a crime · break = vi phạm (luật, quy tắc): break the law';
const RULE = 'rule = quy tắc, nội quy · law = luật pháp · justice = công lý · right = quyền';
const JUDGE = 'judge = thẩm phán (một người, quyết định hình phạt) · jury = bồi thẩm đoàn (nhóm người dân, quyết định có tội hay không)';
const PROS = 'prosecute = khởi tố (đưa ra tòa) · persecute = ngược đãi (vì chủng tộc, tôn giáo…)';
const PUN = 'capital punishment = án tử hình · corporal punishment = nhục hình, đánh đòn';
const ROB = 'robber = kẻ cướp (dùng vũ lực, cướp ngân hàng, cửa hàng) · burglar = kẻ đột nhập nhà để trộm · thief = kẻ trộm nói chung';
const VANDAL = 'vandal = kẻ phá hoại tài sản công · hooligan = kẻ côn đồ, gây rối (thường ở các trận bóng)';
const SENT = 'sentence = tuyên án; bản án · imprison = bỏ tù';
const INN = 'innocent = vô tội · guilty = có tội';
const WIT = 'witness = nhân chứng (thấy sự việc, làm chứng ở tòa) · bystander = người đứng xem, người qua đường';
const LAW = 'lawyer = luật sư nói chung · solicitor = luật sư tư vấn (Anh; chuẩn bị hồ sơ, ít khi tranh tụng)';

export default [
  // ---------- Topic vocabulary in contrast ----------
  t('proof', 'n', '/pruːf/', 'bằng chứng xác thực', 'facts that show sth is definitely true', PROOF, ['proof of identity', 'no proof'], 'There’s no proof that he stole the money.', { fam: ['prove (v)'] }),
  t('evidence', 'n', '/ˈevɪdəns/', 'chứng cứ', 'information or objects that help to show sth is true (uncountable)', PROOF, ['give evidence', 'a piece of evidence'], 'The police found new evidence at the scene. (✗ evidences)'),
  t('suspect (v)', 'v', '/səˈspekt/', 'nghi ngờ', 'think sb may be guilty', ARREST, ['suspect sb of sth'], 'Police suspect him of stealing the car.', { fam: ['suspicious (adj)', 'suspicion (n)'] }),
  t('arrest', 'v, n', '/əˈrest/', 'bắt giữ', 'take sb to a police station because they may be guilty', ARREST, ['arrest sb for sth', 'under arrest'], 'Two men were arrested for burglary.'),
  t('charge', 'v, n', '/tʃɑːdʒ/', 'buộc tội', 'formally accuse sb of a crime', ARREST, ['charge sb with sth', 'face charges'], 'He was charged with robbery.'),
  t('suspect (n)', 'n', '/ˈsʌspekt/', 'nghi phạm', 'sb the police think may have committed a crime', ACCUSED, ['the main suspect'], 'The police are questioning three suspects.'),
  t('the accused', 'n', '/əˈkjuːzd/', 'bị cáo', 'the person on trial in court', ACCUSED, ['the accused man'], 'The accused denied all the charges.'),
  t('decision', 'n', '/dɪˈsɪʒn/', 'quyết định', 'a choice made after thinking', VERDICT, ['make a decision'], 'The judge’s decision was final.'),
  t('verdict', 'n', '/ˈvɜːdɪkt/', 'phán quyết', 'the official decision of a jury: guilty or not guilty', VERDICT, ['reach a verdict', 'a guilty verdict'], 'The jury took two days to reach a verdict.'),
  t('commit', 'v', '/kəˈmɪt/', 'phạm (tội)', 'do sth illegal', COMMIT, ['commit a crime', 'commit fraud'], 'Most crimes are committed by young men.'),
  t('break', 'v', '/breɪk/', 'vi phạm', 'not obey (a law, rule)', COMMIT, ['break the law', 'break the rules'], 'Anyone who breaks the law should be punished. (✗ commit the law)'),
  t('rule', 'n', '/ruːl/', 'quy tắc', 'an instruction about what you must or must not do', RULE, ['school rules', 'follow the rules'], 'You must follow the rules of the game.'),
  t('law', 'n', '/lɔː/', 'luật', 'the system of rules of a country', RULE, ['against the law', 'obey the law'], 'Driving without a licence is against the law.'),
  t('justice', 'n', '/ˈdʒʌstɪs/', 'công lý', 'fairness in the way people are treated', RULE, ['the justice system', 'bring sb to justice'], 'The victims’ families want justice.'),
  t('right', 'n', '/raɪt/', 'quyền', 'sth you are morally or legally allowed to do', RULE, ['human rights', 'the right to'], 'Everyone has the right to a fair trial.'),
  t('judge', 'n, v', '/dʒʌdʒ/', 'thẩm phán', 'the person in charge of a court who decides punishments', JUDGE, ['the judge sentenced'], 'The judge sentenced him to five years.'),
  t('jury', 'n', '/ˈdʒʊəri/', 'bồi thẩm đoàn', 'a group of citizens who decide if sb is guilty', JUDGE, ['the jury found him guilty'], 'The jury found her not guilty.'),
  t('prosecute', 'v', '/ˈprɒsɪkjuːt/', 'khởi tố', 'officially accuse sb in a court of law', PROS, ['be prosecuted for'], 'Shoplifters will be prosecuted.', { fam: ['prosecution (n)'] }),
  t('persecute', 'v', '/ˈpɜːsɪkjuːt/', 'ngược đãi', 'treat sb cruelly because of their race, religion, etc.', PROS, ['be persecuted for'], 'They fled because they were being persecuted for their beliefs.', { fam: ['persecution (n)'] }),
  t('capital punishment', 'n phr', '/ˌkæpɪtl ˈpʌnɪʃmənt/', 'án tử hình', 'punishment by death', PUN, ['abolish capital punishment'], 'Many countries have abolished capital punishment.'),
  t('corporal punishment', 'n phr', '/ˌkɔːpərəl ˈpʌnɪʃmənt/', 'nhục hình, đánh đòn', 'physical punishment such as hitting', PUN, ['ban corporal punishment'], 'Corporal punishment is banned in schools in many countries.'),
  t('robber', 'n', '/ˈrɒbə(r)/', 'kẻ cướp', 'sb who steals using force or threats', ROB, ['a bank robber'], 'The robbers escaped in a stolen car.'),
  t('burglar', 'n', '/ˈbɜːɡlə(r)/', 'kẻ đột nhập (trộm nhà)', 'sb who breaks into a building to steal', ROB, ['burglar alarm'], 'A burglar broke in while we were on holiday.', { fam: ['burglary (n)', 'burgle (v)'] }),
  t('thief', 'n', '/θiːf/', 'kẻ trộm', 'sb who steals (general word)', ROB, ['a car thief'], 'A thief stole my phone on the bus.'),
  t('vandal', 'n', '/ˈvændl/', 'kẻ phá hoại', 'sb who deliberately damages public property', VANDAL, ['vandals damaged'], 'Vandals sprayed graffiti on the school walls.', { fam: ['vandalism (n)'] }),
  t('hooligan', 'n', '/ˈhuːlɪɡən/', 'kẻ côn đồ', 'a violent young troublemaker', VANDAL, ['football hooligans'], 'Football hooligans caused trouble after the match.', { fam: ['hooliganism (n)'] }),
  t('sentence', 'v, n', '/ˈsentəns/', 'tuyên án; bản án', 'officially state a punishment; the punishment given', SENT, ['sentence sb to', 'a prison sentence', 'a life sentence'], 'She was sentenced to two years in prison.'),
  t('imprison', 'v', '/ɪmˈprɪzn/', 'bỏ tù', 'put sb in prison', SENT, ['be imprisoned for'], 'He was imprisoned for fraud.', { fam: ['imprisonment (n)'] }),
  t('innocent', 'adj', '/ˈɪnəsnt/', 'vô tội', 'not guilty of a crime', INN, ['prove your innocence', 'innocent until proven guilty'], 'Everyone is innocent until proven guilty.', { fam: ['innocence (n)'] }),
  t('guilty', 'adj', '/ˈɡɪlti/', 'có tội', 'having committed a crime', INN, ['plead guilty', 'find sb guilty'], 'The jury found him guilty of murder.', { fam: ['guilt (n)'] }),
  t('witness', 'n, v', '/ˈwɪtnəs/', 'nhân chứng', 'sb who sees a crime and tells the police or court', WIT, ['a key witness', 'witness a crime'], 'Several witnesses saw the robbery.'),
  t('bystander', 'n', '/ˈbaɪstændə(r)/', 'người qua đường', 'sb who is there but not involved', WIT, ['innocent bystanders'], 'An innocent bystander was injured.'),
  t('lawyer', 'n', '/ˈlɔːjə(r)/', 'luật sư', 'sb trained to advise and represent people in law', LAW, ['hire a lawyer'], 'You should speak to a lawyer.'),
  t('solicitor', 'n', '/səˈlɪsɪtə(r)/', 'luật sư tư vấn (Anh)', 'a lawyer who gives legal advice and prepares documents (UK)', LAW, ['a family solicitor'], 'Our solicitor helped us buy the house.'),

  // ---------- Phrasal verbs ----------
  { w: 'back down', pos: 'phr v', ipa: '/bæk ˈdaʊn/', g: 'phrasal', vi: 'nhượng bộ, lùi bước', en: 'stop demanding sth, stop saying that you will do sth', fam: [], syn: ['give in'], ant: [], col: ['refuse to back down'], ex: ['The government finally backed down and changed the law.'] },
  { w: 'break out', pos: 'phr v', ipa: '/breɪk ˈaʊt/', g: 'phrasal', vi: 'vượt ngục', en: 'escape (from prison)', fam: ['breakout (n)'], syn: ['escape'], ant: [], col: ['break out of prison'], ex: ['Three prisoners broke out last night.'] },
  { w: 'bring in', pos: 'phr v', ipa: '/brɪŋ ˈɪn/', g: 'phrasal', vi: 'ban hành, đưa vào', en: 'introduce a new law or system', fam: [], syn: ['introduce'], ant: [], col: ['bring in a new law'], ex: ['The government is bringing in tougher laws on drink-driving.'] },
  { w: 'chase after', pos: 'phr v', ipa: '/tʃeɪs ˈɑːftə(r)/', g: 'phrasal', vi: 'đuổi theo', en: 'follow sb/sth quickly in order to catch them', fam: [], syn: ['pursue'], ant: [], col: [], ex: ['The police officer chased after the thief.'] },
  { w: 'come forward', pos: 'phr v', ipa: '/kʌm ˈfɔːwəd/', g: 'phrasal', vi: 'ra trình báo, cung cấp thông tin', en: 'offer help or information', fam: [], syn: [], ant: [], col: ['witnesses came forward'], ex: ['Police are asking witnesses to come forward.'] },
  { w: 'get away with', pos: 'phr v', ipa: '/ɡet əˈweɪ wɪð/', g: 'phrasal', vi: 'thoát tội', en: 'escape punishment for', fam: [], syn: [], ant: [], col: ['get away with murder'], ex: ['He cheated in the exam and got away with it.'] },
  { w: 'go off', pos: 'phr v', ipa: '/ɡəʊ ˈɒf/', g: 'phrasal', vi: 'nổ; (chuông) reo', en: 'explode; be fired (a gun); start ringing (an alarm)', fam: [], syn: ['explode'], ant: [], col: ['the alarm went off'], ex: ['The burglar alarm went off in the middle of the night.'] },
  { w: 'hand in', pos: 'phr v', ipa: '/hænd ˈɪn/', g: 'phrasal', vi: 'nộp, giao nộp', en: 'give to a person in authority', fam: [], syn: ['submit'], ant: [], col: ['hand in a wallet'], ex: ['She handed the wallet in to the police.'] },
  { w: 'hold up', pos: 'phr v', ipa: '/həʊld ˈʌp/', g: 'phrasal', vi: 'cướp (có vũ khí); làm chậm trễ', en: 'rob while threatening violence; delay', fam: ['hold-up (n)'], syn: ['rob', 'delay'], ant: [], col: ['hold up a bank'], ex: ['Two armed men held up a petrol station.'] },
  { w: 'let off', pos: 'phr v', ipa: '/let ˈɒf/', g: 'phrasal', vi: 'tha, phạt nhẹ; cho nổ', en: 'give little or no punishment; make a bomb, etc. explode', fam: [], syn: [], ant: ['punish'], col: ['let sb off with a warning'], ex: ['The police let him off with a warning.'] },
  { w: 'look into', pos: 'phr v', ipa: '/lʊk ˈɪntə/', g: 'phrasal', vi: 'điều tra', en: 'investigate', fam: [], syn: ['investigate'], ant: [], col: ['look into a complaint'], ex: ['The police are looking into the robbery.'] },
  { w: 'make off', pos: 'phr v', ipa: '/meɪk ˈɒf/', g: 'phrasal', vi: 'tẩu thoát', en: 'escape', fam: [], syn: ['run away'], ant: [], col: ['make off with sth'], ex: ['The thieves made off with jewellery worth $50,000.'] },
  { w: 'take down', pos: 'phr v', ipa: '/teɪk ˈdaʊn/', g: 'phrasal', vi: 'ghi lại (lời ai nói)', en: 'write down what someone says', fam: [], syn: ['note down'], ant: [], col: ['take down a statement'], ex: ['The officer took down the witness’s statement.'] },
  { w: 'take in', pos: 'phr v', ipa: '/teɪk ˈɪn/', g: 'phrasal', vi: 'lừa gạt', en: 'trick sb into believing sth that is not true', fam: [], syn: ['deceive'], ant: [], col: ['be taken in by'], ex: ['Many elderly people were taken in by the phone scam.'] },

  // ---------- Phrases and collocations ----------
  { w: 'take into account', pos: 'phrases', ipa: '/əˈkaʊnt/', g: 'phrase', vi: 'tính đến, xem xét', en: 'on account of; take into account; account for sth', fam: [], syn: ['consider'], ant: [], col: ['on account of'], ex: ['The judge took his age into account.'] },
  { w: 'take advantage of', pos: 'phrases', ipa: '/ədˈvɑːntɪdʒ/', g: 'phrase', vi: 'lợi dụng; tận dụng', en: 'take advantage of sth/sb; have an advantage over; an/one advantage (of sth)', fam: [], syn: ['exploit'], ant: [], col: ['have an advantage over'], ex: ['Criminals take advantage of people who are not careful online.'] },
  { w: 'be to blame', pos: 'phrases', ipa: '/bleɪm/', g: 'phrase', vi: 'chịu trách nhiệm (lỗi)', en: 'be to blame (for sth/doing); get/take the blame; put the blame on sb; blame sb for sth', fam: [], syn: ['be responsible'], ant: [], col: ['take the blame'], ex: ['Who is to blame for the rise in crime?'] },
  { w: 'cause damage', pos: 'phrases', ipa: '/ˈdæmɪdʒ/', g: 'phrase', vi: 'gây thiệt hại', en: 'do/cause damage (to sth)', fam: [], syn: [], ant: [], col: ['serious damage'], ex: ['The vandals caused thousands of dollars’ worth of damage.'] },
  { w: 'at fault', pos: 'phrases', ipa: '/fɔːlt/', g: 'phrase', vi: 'có lỗi', en: 'at fault; find fault with sth/sb', fam: [], syn: ['to blame'], ant: [], col: ['find fault with'], ex: ['The driver was clearly at fault.'] },
  { w: 'have no intention of', pos: 'phrases', ipa: '/ɪnˈtenʃn/', g: 'phrase', vi: 'không có ý định', en: 'have the/no intention of doing', fam: ['intend (v)'], syn: [], ant: [], col: [], ex: ['He had no intention of paying the fine.'] },
  { w: 'by mistake', pos: 'phrases', ipa: '/mɪˈsteɪk/', g: 'phrase', vi: 'do nhầm', en: 'make a mistake; a mistake to do; mistake sb for sb; do sth by mistake', fam: [], syn: ['by accident'], ant: ['on purpose'], col: ['mistake sb for sb'], ex: ['The police arrested the wrong man by mistake.'] },
  { w: 'necessary to do', pos: 'phrases', ipa: '/ˈnesəsəri/', g: 'phrase', vi: 'cần thiết', en: 'necessary (for sb) to do', fam: ['necessity'], syn: [], ant: ['unnecessary'], col: [], ex: ['Is it necessary for me to give evidence?'] },
  { w: 'in order to', pos: 'phrases', ipa: '/ˈɔːdə(r)/', g: 'phrase', vi: 'để (mục đích); theo thứ tự', en: 'in order; put sth in order; in order to do; give an order (to sb) (to do)', fam: [], syn: ['so as to'], ant: [], col: ['give an order'], ex: ['CCTV was installed in order to reduce crime.'] },
  { w: 'ask for permission', pos: 'phrases', ipa: '/pəˈmɪʃn/', g: 'phrase', vi: 'xin phép', en: 'give sb permission to do; ask (sb) for permission to do; have/get permission (from sb) to do', fam: ['permit (v)'], syn: [], ant: [], col: [], ex: ['You need permission to film in a court.'] },
  { w: 'on purpose', pos: 'phrases', ipa: '/ˈpɜːpəs/', g: 'phrase', vi: 'cố ý', en: 'do sth on purpose; purpose of sth', fam: [], syn: ['deliberately'], ant: ['by accident'], col: ['the purpose of'], ex: ['The fire was started on purpose.'] },
  { w: 'reason with', pos: 'phrases', ipa: '/ˈriːzn/', g: 'phrase', vi: 'lý lẽ, thuyết phục', en: 'reason why; reason for sth; reason with sb', fam: [], syn: [], ant: [], col: ['the reason for'], ex: ['It’s impossible to reason with him when he’s angry.'] },
  { w: 'find a solution', pos: 'phrases', ipa: '/səˈluːʃn/', g: 'phrase', vi: 'tìm giải pháp', en: 'have/find/think of/work out/come up with/figure out a solution (to sth)', fam: [], syn: [], ant: [], col: ['a solution to'], ex: ['We need to find a solution to youth crime.'] },
  { w: 'do wrong', pos: 'phrases', ipa: '/rɒŋ/', g: 'phrase', vi: 'làm điều sai', en: 'do wrong; do the wrong thing; go wrong; the wrong way up', fam: [], syn: [], ant: ['do right'], col: ['go wrong'], ex: ['He admitted that he had done wrong.'] },

  // ---------- Word patterns ----------
  { w: 'accuse sb of', pos: 'v + pattern', ipa: '/əˈkjuːz/', g: 'pattern', vi: 'buộc tội ai về', en: 'accuse sb of sth/doing', fam: [], syn: [], ant: [], col: [], ex: ['She was accused of stealing from her employer.'] },
  { w: 'arrest sb for', pos: 'v + pattern', ipa: '/əˈrest/', g: 'pattern', vi: 'bắt ai vì', en: 'arrest sb for sth/doing', fam: [], syn: [], ant: [], col: [], ex: ['He was arrested for dangerous driving.'] },
  { w: 'charge sb with', pos: 'v + pattern', ipa: '/tʃɑːdʒ/', g: 'pattern', vi: 'buộc tội ai về', en: 'charge sb with sth', fam: [], syn: [], ant: [], col: [], ex: ['She was charged with fraud. (✗ charged of)'] },
  { w: 'claim to be / that', pos: 'v + pattern', ipa: '/kleɪm/', g: 'pattern', vi: 'tuyên bố', en: 'claim to be/do; claim that', fam: [], syn: [], ant: [], col: [], ex: ['He claimed to be a police officer.'] },
  { w: 'deny doing', pos: 'v + pattern', ipa: '/dɪˈnaɪ/', g: 'pattern', vi: 'phủ nhận đã làm', en: 'deny sth/doing', fam: [], syn: [], ant: ['admit'], col: [], ex: ['He denied breaking into the house.'] },
  { w: 'doubt that / whether', pos: 'v + pattern', ipa: '/daʊt/', g: 'pattern', vi: 'nghi ngờ', en: 'doubt sth; doubt that; doubt if/whether', fam: [], syn: [], ant: [], col: [], ex: ['I doubt whether prison really changes people.'] },
  { w: 'forgive sb for', pos: 'v + pattern', ipa: '/fəˈɡɪv/', g: 'pattern', vi: 'tha thứ cho ai vì', en: 'forgive sb for sth/doing', fam: ['forgiveness'], syn: [], ant: [], col: [], ex: ['She forgave him for lying to her.'] },
  { w: 'catch a glimpse of', pos: 'v + pattern', ipa: '/ɡlɪmps/', g: 'pattern', vi: 'thoáng thấy', en: 'glimpse sth; catch a glimpse of sth', fam: [], syn: [], ant: [], col: [], ex: ['The witness only caught a glimpse of the robber.'] },
  { w: 'guilty of', pos: 'adj + prep', ipa: '/ˈɡɪlti əv/', g: 'pattern', vi: 'phạm tội', en: 'guilty of sth/doing', fam: [], syn: [], ant: ['innocent of'], col: [], ex: ['He was found guilty of theft.'] },
  { w: 'legal (for sb) to do', pos: 'adj + pattern', ipa: '/ˈliːɡl/', g: 'pattern', vi: 'hợp pháp', en: 'legal (for sb) to do', fam: ['illegal'], syn: ['lawful'], ant: ['illegal'], col: [], ex: ['Is it legal to ride a motorbike at 16?'] },
  { w: 'make sb do / be made to do', pos: 'v + pattern', ipa: '/meɪk/', g: 'pattern', vi: 'bắt ai làm gì', en: 'make sb do; be made to do', fam: [], syn: ['force'], ant: [], col: [], ex: ['They made him pay for the damage.', 'He was made to pay for the damage.'] },
  { w: 'refuse to do', pos: 'v + pattern', ipa: '/rɪˈfjuːz/', g: 'pattern', vi: 'từ chối làm', en: 'refuse to do sth; refuse sth', fam: [], syn: [], ant: ['agree'], col: [], ex: ['The suspect refused to answer questions.'] },
  { w: 'respect sb for', pos: 'v + pattern', ipa: '/rɪˈspekt/', g: 'pattern', vi: 'tôn trọng ai vì', en: 'respect sth; respect sb for sth/doing; have respect for sth/sb', fam: ['respectful'], syn: [], ant: [], col: [], ex: ['I respect her for telling the truth.'] },
  { w: 'threaten to do / with', pos: 'v + pattern', ipa: '/ˈθretn/', g: 'pattern', vi: 'đe dọa', en: 'threaten to do; threaten sb with sth', fam: ['threat'], syn: [], ant: [], col: [], ex: ['The robber threatened the cashier with a knife.'] },

  // ---------- Word formation ----------
  { w: 'accusation', pos: 'word family', ipa: '/ˌækjuˈzeɪʃn/', g: 'wordform', vi: 'lời buộc tội', en: 'accuse → accused, accusation', fam: ['accuse (v)', 'accused (adj, n)'], syn: [], ant: [], col: ['make an accusation'], ex: ['He denied all the accusations.'] },
  { w: 'addiction', pos: 'word family', ipa: '/əˈdɪkʃn/', g: 'wordform', vi: 'sự nghiện', en: 'addict → addicted, addictive, addiction', fam: ['addict (n) người nghiện', 'addicted (adj)', 'addictive (adj) gây nghiện'], syn: [], ant: [], col: ['drug addiction'], ex: ['Drug addiction is linked to many crimes.'] },
  { w: 'conviction', pos: 'word family', ipa: '/kənˈvɪkʃn/', g: 'wordform', vi: 'sự kết án', en: 'convict → convicted, conviction', fam: ['convict (v) kết án; (n) tù nhân', 'convicted (adj)'], syn: [], ant: [], col: ['a previous conviction'], ex: ['He had no previous convictions.'] },
  { w: 'criminal', pos: 'word family', ipa: '/ˈkrɪmɪnl/', g: 'wordform', vi: 'tội phạm; thuộc hình sự', en: 'crime → criminal', fam: ['crime (n)'], syn: ['offender'], ant: [], col: ['a criminal record'], ex: ['Having a criminal record makes it hard to find a job.'] },
  { w: 'evidently', pos: 'word family', ipa: '/ˈevɪdəntli/', g: 'wordform', vi: 'rõ ràng là', en: 'evident → evidence, evidently', fam: ['evident (adj)', 'evidence (n)'], syn: ['clearly'], ant: [], col: [], ex: ['Evidently, the burglar knew the house well.'] },
  { w: 'forgery', pos: 'word family', ipa: '/ˈfɔːdʒəri/', g: 'wordform', vi: 'sự giả mạo; đồ giả', en: 'forge → forgery, forger', fam: ['forge (v) làm giả', 'forger (n)'], syn: ['fake'], ant: [], col: [], ex: ['The painting turned out to be a forgery.'] },
  { w: 'dishonest', pos: 'word family', ipa: '/dɪsˈɒnɪst/', g: 'wordform', vi: 'không trung thực', en: 'honest → dishonest, (dis)honesty, (dis)honestly', fam: ['honest (adj)', 'honesty (n)', 'dishonesty (n)'], syn: [], ant: ['honest'], col: [], ex: ['It was dishonest of him to keep the money.'] },
  { w: 'investigation', pos: 'word family', ipa: '/ɪnˌvestɪˈɡeɪʃn/', g: 'wordform', vi: 'cuộc điều tra', en: 'investigate → investigative, investigation, investigator', fam: ['investigate (v)', 'investigator (n)', 'investigative (adj)'], syn: ['inquiry'], ant: [], col: ['carry out an investigation'], ex: ['The police have started an investigation.'] },
  { w: 'unlawful', pos: 'word family', ipa: '/ʌnˈlɔːfl/', g: 'wordform', vi: 'bất hợp pháp', en: 'law → lawyer, (un)lawful', fam: ['lawful (adj)'], syn: ['illegal'], ant: ['lawful'], col: [], ex: ['The court ruled that the arrest was unlawful.'] },
  { w: 'murderer', pos: 'word family', ipa: '/ˈmɜːdərə(r)/', g: 'wordform', vi: 'kẻ giết người', en: 'murder → murderer', fam: ['murder (n, v)'], syn: ['killer'], ant: [], col: [], ex: ['The murderer was sentenced to life in prison.'] },
  { w: 'offender', pos: 'word family', ipa: '/əˈfendə(r)/', g: 'wordform', vi: 'người phạm tội', en: 'offence → offensive, offend, offender', fam: ['offence (n) tội, hành vi phạm pháp', 'offend (v)', 'offensive (adj) xúc phạm'], syn: ['criminal'], ant: [], col: ['young offenders', 'a first-time offender'], ex: ['Young offenders need education, not just punishment.'] },
  { w: 'imprisonment', pos: 'word family', ipa: '/ɪmˈprɪznmənt/', g: 'wordform', vi: 'sự bỏ tù', en: 'prison → prisoner, imprison(ed), imprisonment', fam: ['prisoner (n) tù nhân', 'imprison (v)'], syn: [], ant: [], col: ['life imprisonment'], ex: ['He was sentenced to life imprisonment.'] },
  { w: 'unproven / disprove', pos: 'word family', ipa: '/ʌnˈpruːvn/', g: 'wordform', vi: 'chưa được chứng minh / bác bỏ', en: 'prove → proof, (un)proven, disprove', fam: ['proof (n)', 'proven (adj)', 'disprove (v)'], syn: [], ant: [], col: [], ex: ['The new evidence disproved his story.'] },
  { w: 'robbery', pos: 'word family', ipa: '/ˈrɒbəri/', g: 'wordform', vi: 'vụ cướp', en: 'rob → robbery, robber', fam: ['rob (v) – rob a person/bank (✗ rob money)', 'robber (n)'], syn: [], ant: [], col: ['armed robbery'], ex: ['There was an armed robbery at the bank.'] },
  { w: 'insecure / security', pos: 'word family', ipa: '/sɪˈkjʊərəti/', g: 'wordform', vi: 'an ninh / không an toàn', en: 'secure → insecure, (in)security', fam: ['secure (adj)', 'security (n)', 'insecurity (n)'], syn: ['safety'], ant: [], col: ['security guard', 'security cameras'], ex: ['The bank has increased security.'] },
  { w: 'theft', pos: 'word family', ipa: '/θeft/', g: 'wordform', vi: 'vụ trộm', en: 'thief → theft', fam: ['thief (n), số nhiều thieves'], syn: ['stealing'], ant: [], col: ['car theft', 'identity theft'], ex: ['Identity theft is a growing problem.'] },
];
