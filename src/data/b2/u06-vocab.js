// B2 Unit 6 – Science and technology: word list from Destination B2 p.36, expanded.
// `cmp` explains easily-confused words ("topic vocabulary in contrast").
const t = (w, pos, ipa, vi, en, cmp, col, ex, extra = {}) => ({ w, pos, ipa, g: 'topic', vi, en, cmp, fam: [], syn: [], ant: [], col, ex: [ex], ...extra });
const ART = 'artificial = nhân tạo, do con người làm ra (artificial intelligence) · false = sai, giả (false information, false teeth)';
const NAT = 'natural = tự nhiên, thuộc về thiên nhiên · physical = thuộc về cơ thể / vật chất (physical exercise, physical laws)';
const TRUE = 'true = đúng sự thật · accurate = chính xác (số liệu, phép đo, mô tả)';
const METHOD = 'method = phương pháp (có hệ thống, khoa học) · way = cách (thông dụng, ít trang trọng)';
const ENGINE = 'engine = động cơ (xe, máy bay, chạy bằng nhiên liệu) · machine = máy móc nói chung · motor = mô-tơ (thường chạy điện, nhỏ hơn)';
const AIM = 'aim = mục tiêu · cause = nguyên nhân (gây ra điều gì) · reason = lý do (giải thích vì sao)';
const EST = 'estimate = ước tính (gần đúng) · calculate = tính toán (chính xác)';
const ELEC = 'electric = chạy bằng điện (electric car, electric shock) · electronic = điện tử, dùng vi mạch (electronic devices)';
const INV = 'invent = phát minh ra thứ chưa từng có · discover = khám phá ra thứ đã tồn tại';
const RES = 'research = nghiên cứu (danh từ không đếm được, quá trình tìm hiểu) · experiment = thí nghiệm (một lần thử cụ thể)';
const PROG = 'progress = sự tiến bộ (không đếm được) · development = sự phát triển; một bước phát triển mới (đếm được)';
const MOD = 'modern = hiện đại, thuộc thời nay · new = mới (vừa làm ra / vừa có)';
const IND = 'industry = ngành công nghiệp · factory = nhà máy (tòa nhà sản xuất)';
const AWARD = 'award = giải thưởng (trao cho thành tích) · reward = phần thưởng (cho việc làm tốt, cho thông tin)';
const TAKE = 'take place = diễn ra (sự kiện đã lên kế hoạch) · occur = xảy ra (thường không định trước, trang trọng)';

export default [
  // ---------- Topic vocabulary in contrast ----------
  t('artificial', 'adj', '/ˌɑːtɪˈfɪʃl/', 'nhân tạo', 'made by people, not natural', ART, ['artificial intelligence (AI)', 'artificial light'], 'Artificial intelligence is changing the way we work.'),
  t('false', 'adj', '/fɔːls/', 'sai; giả', 'not true; not real', ART, ['false information', 'true or false'], 'The rumour turned out to be false.'),
  t('natural', 'adj', '/ˈnætʃrəl/', 'tự nhiên', 'existing in nature; normal', NAT, ['natural resources', 'natural disasters'], 'Coal and oil are natural resources.', { fam: ['nature (n)', 'naturally (adv)'] }),
  t('physical', 'adj', '/ˈfɪzɪkl/', 'thuộc cơ thể; vật lý', 'connected with the body or with things you can touch', NAT, ['physical exercise', 'the physical world'], 'Physical activity is good for your brain.', { fam: ['physics (n)', 'physicist (n)'] }),
  t('true', 'adj', '/truː/', 'đúng, thật', 'based on facts, not false', TRUE, ['a true story', 'come true'], 'Is it true that light travels faster than sound?'),
  t('accurate', 'adj', '/ˈækjərət/', 'chính xác', 'correct in every detail', TRUE, ['accurate measurements', 'an accurate description'], 'GPS gives a very accurate position.', { fam: ['accuracy (n)', 'inaccurate (adj)'], ant: ['inaccurate'] }),
  t('method', 'n', '/ˈmeθəd/', 'phương pháp', 'a planned way of doing sth', METHOD, ['a scientific method', 'teaching methods'], 'Scientists use different methods to test their ideas.'),
  t('way', 'n', '/weɪ/', 'cách', 'how sth is done', METHOD, ['the best way to', 'in a way'], 'What’s the easiest way to learn coding?'),
  t('engine', 'n', '/ˈendʒɪn/', 'động cơ', 'a machine that makes a vehicle move', ENGINE, ['a car engine', 'a jet engine', 'search engine'], 'The plane had problems with one of its engines.'),
  t('machine', 'n', '/məˈʃiːn/', 'máy móc', 'a piece of equipment that does a job', ENGINE, ['a washing machine', 'by machine'], 'Most of the work is now done by machine.', { fam: ['machinery (n)'] }),
  t('motor', 'n', '/ˈməʊtə(r)/', 'mô-tơ', 'a device that produces movement, often electric', ENGINE, ['an electric motor'], 'The fan is powered by a small electric motor.'),
  t('aim', 'n, v', '/eɪm/', 'mục tiêu', 'sth you hope to achieve', AIM, ['the aim of the study', 'aim to do'], 'The aim of the project is to reduce plastic waste.'),
  t('cause', 'n, v', '/kɔːz/', 'nguyên nhân; gây ra', 'what makes sth happen', AIM, ['the main cause of', 'cause damage'], 'Scientists are trying to find the cause of the disease.'),
  t('reason', 'n', '/ˈriːzn/', 'lý do', 'why sth happens or is done', AIM, ['the reason for/why', 'for some reason'], 'The reason why the experiment failed is still unclear.'),
  t('estimate', 'v, n', '/ˈestɪmeɪt/', 'ước tính', 'guess the size, cost, etc. approximately', EST, ['it is estimated that', 'a rough estimate'], 'It is estimated that there are 8 billion people on Earth.'),
  t('calculate', 'v', '/ˈkælkjuleɪt/', 'tính toán', 'find an exact amount using numbers', EST, ['calculate the cost'], 'The app calculates how many calories you burn.', { fam: ['calculation (n)', 'calculator (n)'] }),
  t('electric', 'adj', '/ɪˈlektrɪk/', 'chạy bằng điện', 'using or producing electricity', ELEC, ['an electric car', 'an electric shock'], 'Electric cars are becoming more popular.', { fam: ['electricity (n)', 'electrical (adj)'] }),
  t('electronic', 'adj', '/ɪˌlekˈtrɒnɪk/', 'điện tử', 'using microchips and electric current', ELEC, ['electronic devices', 'electronic payment'], 'Please switch off all electronic devices.', { fam: ['electronics (n)'] }),
  t('invent', 'v', '/ɪnˈvent/', 'phát minh', 'create sth that did not exist before', INV, ['invent a machine'], 'Who invented the telephone?'),
  t('discover', 'v', '/dɪˈskʌvə(r)/', 'khám phá', 'find sth that already existed', INV, ['discover a new species'], 'Penicillin was discovered by accident in 1928.'),
  t('research', 'n, v', '/rɪˈsɜːtʃ/', 'nghiên cứu', 'detailed study to find new facts', RES, ['do/carry out research', 'research into'], 'Research shows that sleep improves memory. (✗ a research / researches)'),
  t('experiment', 'n, v', '/ɪkˈsperɪmənt/', 'thí nghiệm', 'a test to find out sth', RES, ['do/carry out an experiment', 'experiment on/with'], 'We did an experiment to measure the speed of sound.', { fam: ['experimental (adj)'] }),
  t('progress', 'n', '/ˈprəʊɡres/', 'sự tiến bộ', 'movement towards a better state (uncountable)', PROG, ['make progress', 'technological progress'], 'We’ve made a lot of progress this year. (✗ a progress)'),
  t('development', 'n', '/dɪˈveləpmənt/', 'sự phát triển; bước phát triển', 'growth; a new event or product', PROG, ['the development of', 'a new development'], 'The development of the Internet changed everything.', { fam: ['develop (v)'] }),
  t('modern', 'adj', '/ˈmɒdn/', 'hiện đại', 'of the present time, not old-fashioned', MOD, ['modern technology', 'modern life'], 'Modern technology makes communication easy.'),
  t('new', 'adj', '/njuː/', 'mới', 'recently made or bought', MOD, ['a new phone', 'brand new'], 'I’ve just bought a new laptop.'),
  t('industry', 'n', '/ˈɪndəstri/', 'ngành công nghiệp', 'the production of goods; a type of business', IND, ['the car industry', 'the tech industry'], 'The tech industry employs millions of people.', { fam: ['industrial (adj)'] }),
  t('factory', 'n', '/ˈfæktri/', 'nhà máy', 'a building where goods are made', IND, ['work in a factory'], 'The new factory will produce electric scooters.'),
  t('award', 'n, v', '/əˈwɔːd/', 'giải thưởng; trao', 'a prize given for an achievement', AWARD, ['win an award', 'award sb a prize'], 'She won an award for her research.'),
  t('reward', 'n, v', '/rɪˈwɔːd/', 'phần thưởng; thưởng', 'sth given in return for good work or help', AWARD, ['a reward for', 'offer a reward'], 'The police are offering a reward for information.', { fam: ['rewarding (adj) đáng làm'] }),
  t('take place', 'v phr', '/teɪk ˈpleɪs/', 'diễn ra', 'happen (usually planned)', TAKE, ['take place in/at'], 'The conference will take place in Da Nang.'),
  t('occur', 'v', '/əˈkɜː(r)/', 'xảy ra', 'happen (often unexpectedly; formal)', TAKE, ['occur naturally'], 'Earthquakes occur when tectonic plates move.', { fam: ['occurrence (n)'] }),

  // ---------- Phrasal verbs ----------
  { w: 'break down', pos: 'phr v', ipa: '/breɪk ˈdaʊn/', g: 'phrasal', vi: 'hỏng (máy móc)', en: 'stop working (for a machine, etc.)', fam: ['breakdown (n)'], syn: [], ant: [], col: ['the car broke down'], ex: ['My laptop broke down the night before the deadline.'] },
  { w: 'carry out', pos: 'phr v', ipa: '/ˌkæri ˈaʊt/', g: 'phrasal', vi: 'tiến hành', en: 'perform (an experiment, etc.)', fam: [], syn: ['conduct', 'do'], ant: [], col: ['carry out research/an experiment'], ex: ['The tests were carried out in a laboratory.'] },
  { w: 'come off', pos: 'phr v', ipa: '/kʌm ˈɒf/', g: 'phrasal', vi: 'thành công', en: 'succeed', fam: [], syn: ['succeed', 'work'], ant: ['fail'], col: [], ex: ['The experiment was risky, but it came off.'] },
  { w: 'come on', pos: 'phr v', ipa: '/kʌm ˈɒn/', g: 'phrasal', vi: 'tiến bộ', en: 'develop or make progress', fam: [], syn: ['progress'], ant: [], col: ['come on well'], ex: ['Your English is really coming on!'] },
  { w: 'come up with', pos: 'phr v', ipa: '/kʌm ˈʌp wɪð/', g: 'phrasal', vi: 'nghĩ ra', en: 'think of (an idea, a plan, etc.)', fam: [], syn: ['think of'], ant: [], col: ['come up with a solution'], ex: ['She came up with a brilliant idea.'] },
  { w: 'cut off', pos: 'phr v', ipa: '/kʌt ˈɒf/', g: 'phrasal', vi: 'cắt (nguồn cung cấp)', en: 'stop the supply of sth', fam: [], syn: [], ant: [], col: ['cut off the electricity'], ex: ['The storm cut off the electricity for two days.'] },
  { w: 'find out', pos: 'phr v', ipa: '/faɪnd ˈaʊt/', g: 'phrasal', vi: 'tìm ra, phát hiện', en: 'discover information, etc.', fam: [], syn: ['discover'], ant: [], col: ['find out the truth'], ex: ['Scientists are trying to find out why bees are dying.'] },
  { w: 'give off', pos: 'phr v', ipa: '/ɡɪv ˈɒf/', g: 'phrasal', vi: 'tỏa ra (nhiệt, mùi)', en: 'produce sth such as heat or a smell', fam: [], syn: ['emit'], ant: [], col: ['give off heat/gas'], ex: ['The chemicals give off a strange smell.'] },
  { w: 'narrow down', pos: 'phr v', ipa: '/ˌnærəʊ ˈdaʊn/', g: 'phrasal', vi: 'thu hẹp', en: 'reduce the number of possibilities', fam: [], syn: [], ant: [], col: ['narrow down the choices'], ex: ['We’ve narrowed it down to three possible causes.'] },
  { w: 'plug in', pos: 'phr v', ipa: '/plʌɡ ˈɪn/', g: 'phrasal', vi: 'cắm điện', en: 'connect to the electricity supply', fam: [], syn: [], ant: ['unplug'], col: ['plug in the charger'], ex: ['Is the printer plugged in?'] },
  { w: 'put through', pos: 'phr v', ipa: '/pʊt ˈθruː/', g: 'phrasal', vi: 'nối máy (điện thoại)', en: 'connect by phone', fam: [], syn: ['connect'], ant: [], col: ['put sb through to'], ex: ['Could you put me through to the IT department?'] },
  { w: 'turn into', pos: 'phr v', ipa: '/tɜːn ˈɪntə/', g: 'phrasal', vi: 'biến thành', en: 'change into sth different', fam: [], syn: ['become', 'transform into'], ant: [], col: ['turn water into ice'], ex: ['The old factory was turned into a science museum.'] },
  { w: 'turn off', pos: 'phr v', ipa: '/tɜːn ˈɒf/', g: 'phrasal', vi: 'tắt', en: 'stop a machine working', fam: [], syn: ['switch off'], ant: ['turn on'], col: ['turn off the computer'], ex: ['Turn off the lights when you leave.'] },
  { w: 'work out', pos: 'phr v', ipa: '/wɜːk ˈaʊt/', g: 'phrasal', vi: 'tìm ra (lời giải)', en: 'find the solution to a problem, etc.', fam: [], syn: ['solve', 'figure out'], ant: [], col: ['work out the answer'], ex: ['I can’t work out how to use this app.'] },

  // ---------- Phrases and collocations ----------
  { w: 'make an attempt', pos: 'phrases', ipa: '/əˈtempt/', g: 'phrase', vi: 'nỗ lực, thử', en: 'make an attempt (at sth/doing / to do); attempt to do; in an attempt to do', fam: [], syn: ['try'], ant: [], col: ['make an attempt to', 'in an attempt to'], ex: ['In an attempt to save energy, the school installed solar panels.'] },
  { w: 'on average', pos: 'phrases', ipa: '/ɒn ˈævərɪdʒ/', g: 'phrase', vi: 'trung bình', en: 'on average', fam: [], syn: [], ant: [], col: [], ex: ['On average, teenagers spend seven hours a day online.'] },
  { w: 'in the beginning', pos: 'phrases', ipa: '/bɪˈɡɪnɪŋ/', g: 'phrase', vi: 'lúc đầu', en: 'in the beginning; at the beginning (of sth); beginning with', fam: [], syn: ['at first'], ant: ['in the end'], col: ['at the beginning of'], ex: ['At the beginning of the 20th century, few homes had electricity.'] },
  { w: 'at the bottom of', pos: 'phrases', ipa: '/ˈbɒtəm/', g: 'phrase', vi: 'ở đáy', en: 'at/on the bottom (of sth)', fam: [], syn: [], ant: ['at the top of'], col: [], ex: ['The robot explored the bottom of the ocean.'] },
  { w: 'the cause of', pos: 'phrases', ipa: '/kɔːz/', g: 'phrase', vi: 'nguyên nhân của', en: '(be/find/look for) the cause of sth', fam: [], syn: [], ant: [], col: ['find the cause of', 'the main cause of'], ex: ['Engineers are looking for the cause of the fault.'] },
  { w: 'come to a conclusion', pos: 'phrases', ipa: '/kənˈkluːʒn/', g: 'phrase', vi: 'đi đến kết luận', en: 'come to/reach the conclusion (that); in conclusion', fam: ['conclude (v)'], syn: [], ant: [], col: ['reach a conclusion', 'in conclusion'], ex: ['In conclusion, technology brings more benefits than drawbacks.'] },
  { w: 'do an experiment', pos: 'phrases', ipa: '/ɪkˈsperɪmənt/', g: 'phrase', vi: 'làm thí nghiệm', en: 'do/perform/carry out an experiment (on sth); experiment with sth/doing', fam: [], syn: [], ant: [], col: ['carry out an experiment', 'experiment with'], ex: ['They carried out experiments on mice.'] },
  { w: 'in fact', pos: 'phrases', ipa: '/ɪn ˈfækt/', g: 'phrase', vi: 'thực ra', en: 'in fact; as a matter of fact; the fact (of the matter) is (that); face the facts', fam: [], syn: ['actually'], ant: [], col: ['as a matter of fact', 'face the facts'], ex: ['Many people think AI is new. In fact, the idea is over 70 years old.'] },
  { w: 'with the introduction of', pos: 'phrases', ipa: '/ˌɪntrəˈdʌkʃn/', g: 'phrase', vi: 'với sự ra đời của', en: 'with the introduction of sth; an introduction to sth/sb', fam: ['introduce (v)'], syn: [], ant: [], col: ['an introduction to physics'], ex: ['With the introduction of smartphones, people began to read more news online.'] },
  { w: 'make a phone call', pos: 'phrases', ipa: '/ˈfəʊn kɔːl/', g: 'phrase', vi: 'gọi điện', en: 'make/receive/get a phone call', fam: [], syn: [], ant: [], col: [], ex: ['I need to make a quick phone call.'] },
  { w: 'take a photo', pos: 'phrases', ipa: '/ˈfəʊtəʊ/', g: 'phrase', vi: 'chụp ảnh', en: 'take a photo(graph) (of sth/sb)', fam: [], syn: [], ant: [], col: [], ex: ['The telescope took a photo of a distant galaxy. (✗ make a photo)'] },
  { w: 'carry out research', pos: 'phrases', ipa: '/rɪˈsɜːtʃ/', g: 'phrase', vi: 'tiến hành nghiên cứu', en: 'carry out / do research (on/into sth)', fam: [], syn: [], ant: [], col: ['research into', 'research on'], ex: ['They are carrying out research into renewable energy.'] },

  // ---------- Word patterns ----------
  { w: 'cause sb/sth to do', pos: 'v + pattern', ipa: '/kɔːz/', g: 'pattern', vi: 'khiến ai/cái gì làm gì', en: 'cause sth; cause sb/sth to do', fam: [], syn: ['make'], ant: [], col: [], ex: ['The heat caused the metal to expand.'] },
  { w: 'consider (doing / whether)', pos: 'v + pattern', ipa: '/kənˈsɪdə(r)/', g: 'pattern', vi: 'cân nhắc; coi là', en: 'consider sth/doing; consider if/whether; consider sb for sth; consider it strange (for sb to do)', fam: ['consideration'], syn: [], ant: [], col: [], ex: ['We’re considering buying an electric car.'] },
  { w: 'discuss sth (with sb)', pos: 'v + pattern', ipa: '/dɪˈskʌs/', g: 'pattern', vi: 'thảo luận', en: 'discuss sth/doing (with sb) – no "about"', fam: ['discussion'], syn: [], ant: [], col: [], ex: ['We discussed the results with our teacher. (✗ discussed about)'] },
  { w: 'explain sth to sb', pos: 'v + pattern', ipa: '/ɪkˈspleɪn/', g: 'pattern', vi: 'giải thích cho ai', en: 'explain that; explain sth (to sb)', fam: [], syn: [], ant: [], col: [], ex: ['Can you explain this formula to me? (✗ explain me)'] },
  { w: 'intend to do', pos: 'v + pattern', ipa: '/ɪnˈtend/', g: 'pattern', vi: 'dự định', en: 'intend to do/doing', fam: ['intention'], syn: ['plan'], ant: [], col: [], ex: ['I intend to study computer science.'] },
  { w: 'know about / be known as', pos: 'v + pattern', ipa: '/nəʊ/', g: 'pattern', vi: 'biết về / được biết đến là', en: 'know (about) sth/doing; know of sb; be known as sth', fam: [], syn: [], ant: [], col: [], ex: ['Silicon Valley is known as the centre of the tech industry.'] },
  { w: 'look forward to', pos: 'v + pattern', ipa: '/lʊk ˈfɔːwəd tə/', g: 'pattern', vi: 'mong đợi', en: 'look at/for sth/sb; look forward to sth/doing', fam: [], syn: [], ant: [], col: [], ex: ['I’m looking forward to trying the new VR headset.'] },
  { w: 'manage to do', pos: 'v + pattern', ipa: '/ˈmænɪdʒ/', g: 'pattern', vi: 'xoay xở làm được', en: 'manage to do', fam: [], syn: ['succeed in'], ant: [], col: [], ex: ['Did you manage to fix your phone?'] },
  { w: 'plan to do', pos: 'v + pattern', ipa: '/plæn/', g: 'pattern', vi: 'lên kế hoạch', en: 'plan sth; plan to do', fam: [], syn: [], ant: [], col: [], ex: ['They plan to launch the satellite next year.'] },
  { w: 'find it impossible to do', pos: 'adj + pattern', ipa: '/ɪmˈpɒsəbl/', g: 'pattern', vi: 'thấy không thể làm gì', en: 'possible (for sb) to do; find sth possible; find it (im)possible to do', fam: [], syn: [], ant: [], col: [], ex: ['Many older people find it impossible to live without their phones.'] },
  { w: 'result in / as a result of', pos: 'n, v + pattern', ipa: '/rɪˈzʌlt/', g: 'pattern', vi: 'dẫn đến / là kết quả của', en: 'the result of sth/doing; result in sth/doing; result from sth; as a result of sth', fam: [], syn: ['lead to'], ant: [], col: [], ex: ['The new technology resulted in lower costs.', 'As a result of the power cut, the factory closed.'] },
  { w: 'wonder about / if', pos: 'v + pattern', ipa: '/ˈwʌndə(r)/', g: 'pattern', vi: 'tự hỏi', en: 'wonder about sth/doing; wonder if/whether/why', fam: [], syn: [], ant: [], col: [], ex: ['I wonder if robots will ever be able to feel emotions.'] },

  // ---------- Word formation ----------
  { w: 'appear', pos: 'word family', ipa: '/əˈpɪə(r)/', g: 'wordform', vi: 'xuất hiện; có vẻ', en: 'appear → appearance, apparently', fam: ['appearance (n)', 'apparently (adv) có vẻ như'], syn: [], ant: ['disappear'], col: [], ex: ['Apparently, the new phone will have no buttons at all.'] },
  { w: 'build', pos: 'word family', ipa: '/bɪld/', g: 'wordform', vi: 'xây', en: 'build → builder, building', fam: ['builder (n)', 'building (n)'], syn: [], ant: [], col: [], ex: ['The building is powered entirely by solar energy.'] },
  { w: 'discovery', pos: 'word family', ipa: '/dɪˈskʌvəri/', g: 'wordform', vi: 'sự khám phá', en: 'discover → discovery', fam: ['discover (v)', 'discoverer (n)'], syn: [], ant: [], col: ['make a discovery'], ex: ['The discovery of penicillin saved millions of lives.'] },
  { w: 'explanation', pos: 'word family', ipa: '/ˌekspləˈneɪʃn/', g: 'wordform', vi: 'lời giải thích', en: 'explain → explanation', fam: ['explain (v)'], syn: [], ant: [], col: ['give an explanation'], ex: ['There is no simple explanation for the result.'] },
  { w: 'important', pos: 'word family', ipa: '/ɪmˈpɔːtnt/', g: 'wordform', vi: 'quan trọng', en: 'important → unimportant, importance, importantly', fam: ['importance (n)', 'unimportant (adj)', 'importantly (adv)'], syn: [], ant: [], col: ['more importantly'], ex: ['More importantly, the technology is cheap.'] },
  { w: 'introduce', pos: 'word family', ipa: '/ˌɪntrəˈdjuːs/', g: 'wordform', vi: 'giới thiệu; đưa vào', en: 'introduce → introduction, introductory', fam: ['introduction (n)', 'introductory (adj) nhập môn'], syn: [], ant: [], col: ['an introductory course'], ex: ['I’m taking an introductory course in programming.'] },
  { w: 'inventor / invention', pos: 'word family', ipa: '/ɪnˈventə(r)/', g: 'wordform', vi: 'nhà phát minh / phát minh', en: 'invent → inventor, invention', fam: ['inventor (n)', 'invention (n)', 'inventive (adj)'], syn: [], ant: [], col: [], ex: ['The printing press was one of the greatest inventions in history.'] },
  { w: 'observe', pos: 'word family', ipa: '/əbˈzɜːv/', g: 'wordform', vi: 'quan sát', en: 'observe → observer, observation', fam: ['observer (n)', 'observation (n)', 'observatory (n) đài thiên văn'], syn: [], ant: [], col: [], ex: ['Careful observation is the basis of science.'] },
  { w: 'possibly / impossibility', pos: 'word family', ipa: '/ˈpɒsəbli/', g: 'wordform', vi: 'có lẽ / sự không thể', en: 'possible → impossible, (im)possibility, (im)possibly', fam: ['possibility (n)', 'impossibility (n)', 'possibly (adv)'], syn: [], ant: [], col: [], ex: ['Robots will possibly replace many jobs.'] },
  { w: 'psychology', pos: 'word family', ipa: '/saɪˈkɒlədʒi/', g: 'wordform', vi: 'tâm lý học', en: 'psychology → psychologist, psychological(ly)', fam: ['psychologist (n)', 'psychological (adj)'], syn: [], ant: [], col: [], ex: ['Social media can have psychological effects on teenagers.'] },
  { w: 'researcher', pos: 'word family', ipa: '/rɪˈsɜːtʃə(r)/', g: 'wordform', vi: 'nhà nghiên cứu', en: 'research → researcher', fam: ['research (n, v)'], syn: [], ant: [], col: [], ex: ['Researchers at the university have developed a new battery.'] },
  { w: 'revolution', pos: 'word family', ipa: '/ˌrevəˈluːʃn/', g: 'wordform', vi: 'cuộc cách mạng', en: 'revolution → revolutionary', fam: ['revolutionary (adj) mang tính cách mạng', 'revolutionise (v)'], syn: [], ant: [], col: ['the digital revolution'], ex: ['AI is a revolutionary technology.'] },
  { w: 'science', pos: 'word family', ipa: '/ˈsaɪəns/', g: 'wordform', vi: 'khoa học', en: 'science → scientist, (un)scientific(ally)', fam: ['scientist (n)', 'scientific (adj)', 'unscientific (adj)'], syn: [], ant: [], col: ['scientific evidence'], ex: ['There is no scientific evidence for that claim.'] },
  { w: 'technology', pos: 'word family', ipa: '/tekˈnɒlədʒi/', g: 'wordform', vi: 'công nghệ', en: 'technology → technological(ly); technical(ly); technician, technique', fam: ['technological (adj)', 'technical (adj) kỹ thuật', 'technician (n) kỹ thuật viên', 'technique (n) kỹ thuật, cách làm'], syn: [], ant: [], col: ['technological progress'], ex: ['Technological progress has been remarkably fast.'] },
  { w: 'wooden', pos: 'word family', ipa: '/ˈwʊdn/', g: 'wordform', vi: 'bằng gỗ', en: 'wood → wooden', fam: ['wood (n)'], syn: [], ant: [], col: [], ex: ['Early computers were kept in wooden cabinets.'] },
];
