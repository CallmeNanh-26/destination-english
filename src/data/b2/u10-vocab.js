// B2 Unit 10 – People and society: word list from Destination B2 p.60, expanded.
// `cmp` explains easily-confused words ("topic vocabulary in contrast").
const t = (w, pos, ipa, vi, en, cmp, col, ex, extra = {}) => ({ w, pos, ipa, g: 'topic', vi, en, cmp, fam: [], syn: [], ant: [], col, ex: [ex], ...extra });
const REL = 'relationship = mối quan hệ (giữa người với người, tình cảm) · connection = sự liên quan, liên kết (giữa sự việc; quan hệ quen biết)';
const BLAME = 'blame = đổ lỗi (động từ), trách nhiệm (the blame) · fault = lỗi (it’s my fault), khuyết điểm';
const OLD = 'old = già, cũ (người, đồ vật) · ancient = cổ xưa (hàng nghìn năm)';
const CROWD = 'crowd = đám đông (tụ tập ở nơi công cộng) · audience = khán giả (xem buổi biểu diễn, chương trình)';
const ENJOY = 'enjoy = thích thú (enjoy sth/doing; enjoy yourself) · please = làm ai hài lòng (please sb)';
const SUPPORT = 'support = ủng hộ, hỗ trợ (tinh thần, tài chính) · assist = giúp đỡ (trang trọng, trong công việc)';
const KIND = 'kind = tử tế, tốt bụng (quan tâm người khác) · polite = lịch sự (cư xử đúng phép)';
const SYMP = 'sympathetic = biết cảm thông · likeable = dễ mến';
const NERV = 'nervous = lo lắng, hồi hộp · bad-tempered = cáu kỉnh, nóng tính';
const SENS = 'sensitive = nhạy cảm (dễ buồn, dễ tổn thương; hiểu cảm xúc người khác) · sensible = khôn ngoan, hợp lý';
const COMP = 'company = sự có mặt, bầu bạn (enjoy sb’s company); công ty · group = nhóm';
const POP = 'popular = được nhiều người yêu thích · famous = nổi tiếng (nhiều người biết đến)';
const TYP = 'typical = điển hình, đặc trưng · usual = thường lệ (như mọi khi) · ordinary = bình thường, không đặc biệt';
const CLOSE = 'close = thân thiết; gần (close friend, close to) · near = gần (về khoảng cách, không dùng cho quan hệ: ✗ a near friend)';
const UNK = 'unknown = không ai biết · infamous = khét tiếng (vì điều xấu)';

export default [
  // ---------- Topic vocabulary in contrast ----------
  t('relationship', 'n', '/rɪˈleɪʃnʃɪp/', 'mối quan hệ', 'the way two people or groups feel about each other', REL, ['a close relationship', 'have a good relationship with'], 'I have a good relationship with my parents.'),
  t('connection', 'n', '/kəˈnekʃn/', 'sự liên quan, kết nối', 'a link between things or people', REL, ['a connection between', 'have connections'], 'There’s a clear connection between poverty and crime.', { fam: ['connect (v)'] }),
  t('blame', 'v, n', '/bleɪm/', 'đổ lỗi; trách nhiệm', 'say sb is responsible for sth bad', BLAME, ['blame sb for sth', 'take the blame'], 'Don’t blame me for your mistakes!'),
  t('fault', 'n', '/fɔːlt/', 'lỗi', 'responsibility for a mistake', BLAME, ['it’s my fault', 'find fault with'], 'It wasn’t your fault – it was an accident.'),
  t('old', 'adj', '/əʊld/', 'già, cũ', 'having lived or existed for a long time', OLD, ['old people', 'an old friend'], 'My grandmother is very old but still very active.'),
  t('ancient', 'adj', '/ˈeɪnʃənt/', 'cổ xưa', 'from thousands of years ago', OLD, ['ancient history', 'ancient civilisations'], 'Ancient Egyptian society was very hierarchical.'),
  t('crowd', 'n', '/kraʊd/', 'đám đông', 'a large group of people in one place', CROWD, ['a huge crowd', 'crowds of people'], 'A crowd gathered outside the town hall.', { fam: ['crowded (adj)'] }),
  t('audience', 'n', '/ˈɔːdiəns/', 'khán giả', 'people watching a performance or programme', CROWD, ['a live audience', 'target audience'], 'The audience clapped loudly at the end.'),
  t('enjoy', 'v', '/ɪnˈdʒɔɪ/', 'thích thú', 'get pleasure from sth', ENJOY, ['enjoy yourself', 'enjoy doing'], 'I really enjoy spending time with my family.'),
  t('please', 'v', '/pliːz/', 'làm hài lòng', 'make sb happy or satisfied', ENJOY, ['hard to please', 'please everyone'], 'You can’t please everyone.', { fam: ['pleased (adj)', 'pleasant (adj)'] }),
  t('support', 'v, n', '/səˈpɔːt/', 'ủng hộ, hỗ trợ', 'help or encourage sb', SUPPORT, ['support a charity', 'emotional support'], 'My friends supported me through a difficult time.', { fam: ['supportive (adj)'] }),
  t('assist', 'v', '/əˈsɪst/', 'giúp đỡ (trang trọng)', 'help sb do a task', SUPPORT, ['assist sb with/in sth'], 'Volunteers assist elderly people with their shopping.', { fam: ['assistance (n)', 'assistant (n)'] }),
  t('kind', 'adj', '/kaɪnd/', 'tử tế, tốt bụng', 'caring and generous towards others', KIND, ['kind to sb', 'it’s kind of you'], 'It was very kind of you to help me.'),
  t('polite', 'adj', '/pəˈlaɪt/', 'lịch sự', 'behaving with good manners', KIND, ['polite to sb'], 'It’s polite to say thank you.'),
  t('sympathetic', 'adj', '/ˌsɪmpəˈθetɪk/', 'biết cảm thông', 'showing you understand sb’s problems', SYMP, ['sympathetic to/towards'], 'My teacher was very sympathetic when my grandfather died.', { fam: ['sympathy (n)', 'sympathise (v)'] }),
  t('likeable', 'adj', '/ˈlaɪkəbl/', 'dễ mến', 'pleasant and easy to like', SYMP, ['a likeable character'], 'He’s a really likeable guy – everyone gets on with him.'),
  t('nervous', 'adj', '/ˈnɜːvəs/', 'lo lắng, hồi hộp', 'worried or anxious', NERV, ['nervous about sth'], 'I always get nervous before exams.'),
  t('bad-tempered', 'adj', '/ˌbæd ˈtempəd/', 'cáu kỉnh', 'often angry or annoyed', NERV, ['get bad-tempered'], 'My boss is very bad-tempered on Monday mornings.'),
  t('sensitive', 'adj', '/ˈsensətɪv/', 'nhạy cảm', 'easily upset; aware of others’ feelings', SENS, ['sensitive to', 'a sensitive issue'], 'She’s very sensitive to criticism.', { fam: ['sensitivity (n)'] }),
  t('sensible', 'adj', '/ˈsensəbl/', 'khôn ngoan, hợp lý', 'showing good judgement', SENS, ['a sensible decision'], 'That sounds like a sensible idea.'),
  t('company', 'n', '/ˈkʌmpəni/', 'sự bầu bạn; công ty', 'being with other people; a business', COMP, ['enjoy sb’s company', 'keep sb company'], 'I enjoy my grandmother’s company.'),
  t('group', 'n', '/ɡruːp/', 'nhóm', 'a number of people together', COMP, ['a group of friends', 'age group'], 'A group of students organised the charity event.'),
  t('popular', 'adj', '/ˈpɒpjələ(r)/', 'được yêu thích', 'liked by many people', POP, ['popular with/among'], 'She’s very popular at school.', { fam: ['popularity (n)'] }),
  t('famous', 'adj', '/ˈfeɪməs/', 'nổi tiếng', 'known by many people', POP, ['famous for'], 'Hoi An is famous for its lanterns.'),
  t('typical', 'adj', '/ˈtɪpɪkl/', 'điển hình', 'having the usual qualities of a group', TYP, ['typical of', 'a typical family'], 'A typical Vietnamese family used to include three generations.'),
  t('usual', 'adj', '/ˈjuːʒuəl/', 'thường lệ', 'normal, happening most often', TYP, ['as usual', 'than usual'], 'He was late, as usual.'),
  t('ordinary', 'adj', '/ˈɔːdnri/', 'bình thường', 'not special or different', TYP, ['ordinary people', 'out of the ordinary'], 'The film tells the story of ordinary people.'),
  t('close', 'adj', '/kləʊs/', 'thân thiết; gần', 'having a strong relationship; near', CLOSE, ['a close friend', 'close to sb'], 'I’m very close to my sister.'),
  t('near', 'adj, prep', '/nɪə(r)/', 'gần', 'a short distance away', CLOSE, ['near here', 'the nearest'], 'We live near the city centre.'),
  t('unknown', 'adj', '/ˌʌnˈnəʊn/', 'không ai biết', 'not known or famous', UNK, ['a relatively unknown'], 'The writer was unknown until her first book came out.'),
  t('infamous', 'adj', '/ˈɪnfəməs/', 'khét tiếng', 'well known for being bad', UNK, ['an infamous criminal'], 'The prison was infamous for its terrible conditions.'),

  // ---------- Phrasal verbs ----------
  { w: 'ask after', pos: 'phr v', ipa: '/ɑːsk ˈɑːftə(r)/', g: 'phrasal', vi: 'hỏi thăm', en: 'ask for news about', fam: [], syn: [], ant: [], col: ['ask after sb'], ex: ['My aunt always asks after you.'] },
  { w: 'bring up', pos: 'phr v', ipa: '/brɪŋ ˈʌp/', g: 'phrasal', vi: 'nuôi dạy', en: 'look after a child until he or she becomes an adult', fam: ['upbringing (n)'], syn: ['raise'], ant: [], col: ['be brought up by'], ex: ['I was brought up by my grandparents.'] },
  { w: 'fall for', pos: 'phr v', ipa: '/ˈfɔːl fə(r)/', g: 'phrasal', vi: 'phải lòng; mắc lừa', en: 'fall in love with; believe (a lie, trick, etc.)', fam: [], syn: [], ant: [], col: ['fall for a trick'], ex: ['Don’t fall for that old excuse!'] },
  { w: 'fall out (with)', pos: 'phr v', ipa: '/fɔːl ˈaʊt/', g: 'phrasal', vi: 'cãi nhau, giận nhau', en: 'have an argument with and stop being friends', fam: [], syn: ['argue'], ant: ['make up'], col: ['fall out with sb'], ex: ['I fell out with my best friend over something silly.'] },
  { w: 'get on (with)', pos: 'phr v', ipa: '/ɡet ˈɒn/', g: 'phrasal', vi: 'hòa thuận', en: 'have a good relationship (with)', fam: [], syn: ['get along'], ant: ['fall out'], col: ['get on well with'], ex: ['I get on really well with my flatmates.'] },
  { w: 'grow up', pos: 'phr v', ipa: '/ɡrəʊ ˈʌp/', g: 'phrasal', vi: 'lớn lên', en: 'become older', fam: ['grown-up (n)'], syn: [], ant: [], col: ['grow up in'], ex: ['I grew up in a small village near Hue.'] },
  { w: 'look down on', pos: 'phr v', ipa: '/lʊk ˈdaʊn ɒn/', g: 'phrasal', vi: 'coi thường', en: 'think that you are better than', fam: [], syn: ['despise'], ant: ['look up to'], col: [], ex: ['Nobody should look down on people because they are poor.'] },
  { w: 'look up to', pos: 'phr v', ipa: '/lʊk ˈʌp tə/', g: 'phrasal', vi: 'ngưỡng mộ, kính trọng', en: 'admire and respect', fam: [], syn: ['admire'], ant: ['look down on'], col: [], ex: ['I’ve always looked up to my older brother.'] },
  { w: 'make up', pos: 'phr v', ipa: '/meɪk ˈʌp/', g: 'phrasal', vi: 'làm lành', en: 'become friends again after an argument', fam: [], syn: [], ant: ['fall out'], col: ['make up with sb', 'kiss and make up'], ex: ['They argued, but they made up the next day.'] },
  { w: 'pass away', pos: 'phr v', ipa: '/pɑːs əˈweɪ/', g: 'phrasal', vi: 'qua đời', en: 'die (polite)', fam: [], syn: ['die'], ant: [], col: [], ex: ['My grandfather passed away last year.'] },
  { w: 'pick on', pos: 'phr v', ipa: '/ˈpɪk ɒn/', g: 'phrasal', vi: 'bắt nạt, chọc ghẹo', en: 'keep treating someone badly or unfairly', fam: [], syn: ['bully'], ant: [], col: [], ex: ['The older boys used to pick on him at school.'] },
  { w: 'put down', pos: 'phr v', ipa: '/pʊt ˈdaʊn/', g: 'phrasal', vi: 'hạ thấp, chê bai', en: 'criticise, make someone feel stupid', fam: ['put-down (n)'], syn: ['humiliate'], ant: ['praise'], col: [], ex: ['Good teachers never put their students down.'] },
  { w: 'settle down', pos: 'phr v', ipa: '/ˌsetl ˈdaʊn/', g: 'phrasal', vi: 'ổn định (cuộc sống, gia đình); bình tĩnh lại', en: 'become calm; stay in one place or get married and live quietly', fam: [], syn: [], ant: [], col: ['settle down and have children'], ex: ['After years of travelling, she decided to settle down.'] },
  { w: 'stand up for', pos: 'phr v', ipa: '/stænd ˈʌp fə(r)/', g: 'phrasal', vi: 'bênh vực', en: 'support in an argument or fight', fam: [], syn: ['defend'], ant: [], col: ['stand up for yourself'], ex: ['You have to stand up for what you believe in.'] },
  { w: 'take aback', pos: 'phr v', ipa: '/teɪk əˈbæk/', g: 'phrasal', vi: 'làm sửng sốt', en: 'surprise (usually passive)', fam: [], syn: ['shock'], ant: [], col: ['be taken aback'], ex: ['I was taken aback by his rude reply.'] },

  // ---------- Phrases and collocations ----------
  { w: 'meet with approval', pos: 'phrases', ipa: '/əˈpruːvl/', g: 'phrase', vi: 'được tán thành', en: 'show/give (your) approval of/for sth; meet with sb’s approval', fam: ['approve (v)'], syn: [], ant: ['disapproval'], col: [], ex: ['The plan met with everyone’s approval.'] },
  { w: 'have an argument', pos: 'phrases', ipa: '/ˈɑːɡjumənt/', g: 'phrase', vi: 'cãi nhau', en: 'have an argument (with sb) (about sth/doing); win/lose an argument', fam: ['argue (v)'], syn: [], ant: [], col: ['win an argument'], ex: ['I had an argument with my brother about housework.'] },
  { w: 'take care of', pos: 'phrases', ipa: '/keə(r)/', g: 'phrase', vi: 'chăm sóc', en: 'take care (of sth/sb); care for/about sth/sb', fam: [], syn: ['look after'], ant: [], col: ['care about', 'care for'], ex: ['Who takes care of your grandparents?'] },
  { w: 'have the courage', pos: 'phrases', ipa: '/ˈkʌrɪdʒ/', g: 'phrase', vi: 'có can đảm', en: 'have the courage to do; it takes courage to do', fam: ['courageous (adj)'], syn: ['bravery'], ant: [], col: [], ex: ['It takes courage to admit you were wrong.'] },
  { w: 'in disguise', pos: 'phrases', ipa: '/dɪsˈɡaɪz/', g: 'phrase', vi: 'cải trang', en: 'in disguise; wear a disguise; disguise yourself; disguised as', fam: [], syn: [], ant: [], col: ['a blessing in disguise'], ex: ['Losing that job was a blessing in disguise.'] },
  { w: 'have a dream', pos: 'phrases', ipa: '/driːm/', g: 'phrase', vi: 'có ước mơ', en: 'have a dream (about sth/doing); daydream; dream of/about doing', fam: [], syn: [], ant: [], col: ['dream of doing'], ex: ['She has always had a dream of opening her own café.'] },
  { w: 'start a family', pos: 'phrases', ipa: '/ˈfæməli/', g: 'phrase', vi: 'lập gia đình, sinh con', en: 'have/start a family; nuclear family; extended family', fam: [], syn: [], ant: [], col: ['nuclear family', 'extended family'], ex: ['Many young couples are waiting longer to start a family.'] },
  { w: 'do sb a favour', pos: 'phrases', ipa: '/ˈfeɪvə(r)/', g: 'phrase', vi: 'giúp ai một việc', en: 'do/owe sb a favour; be in favour of', fam: ['favourite'], syn: [], ant: [], col: ['ask a favour', 'in favour of'], ex: ['Could you do me a favour and feed my cat?', 'Most people are in favour of the new law.'] },
  { w: 'make friends', pos: 'phrases', ipa: '/frendz/', g: 'phrase', vi: 'kết bạn', en: 'make/become/be/stay friends (with sb); best friend', fam: [], syn: [], ant: [], col: ['make friends with'], ex: ['It’s easy to make friends at university.'] },
  { w: 'fall in love', pos: 'phrases', ipa: '/lʌv/', g: 'phrase', vi: 'phải lòng', en: 'be/fall in love with sb', fam: [], syn: ['fall for'], ant: [], col: [], ex: ['They fell in love at first sight.'] },
  { w: 'in a good mood', pos: 'phrases', ipa: '/muːd/', g: 'phrase', vi: 'tâm trạng tốt', en: 'in a good/bad mood; in the right/wrong mood; in the mood for sth', fam: ['moody (adj)'], syn: [], ant: [], col: ['in the mood for'], ex: ['I’m not in the mood for going out tonight.'] },
  { w: 'feel pity for', pos: 'phrases', ipa: '/ˈpɪti/', g: 'phrase', vi: 'thương hại; tiếc', en: 'pity sb; take pity on sb; feel pity for sb; it’s a pity (that)', fam: [], syn: ['shame'], ant: [], col: ['what a pity', 'it’s a pity that'], ex: ['It’s a pity you can’t come to the party.'] },
  { w: 'keep a promise', pos: 'phrases', ipa: '/ˈprɒmɪs/', g: 'phrase', vi: 'giữ lời hứa', en: 'promise to do; give/make sb a promise; keep/break a promise', fam: [], syn: [], ant: ['break a promise'], col: ['break a promise'], ex: ['He always keeps his promises.'] },

  // ---------- Word patterns ----------
  { w: 'agree with / to / that', pos: 'v + pattern', ipa: '/əˈɡriː/', g: 'pattern', vi: 'đồng ý', en: 'agree with/on/to sth; agree with sb; agree to do; agree that', fam: [], syn: [], ant: ['disagree'], col: [], ex: ['I agree with you about that.', 'They agreed to help.'] },
  { w: 'allow sb to do', pos: 'v + pattern', ipa: '/əˈlaʊ/', g: 'pattern', vi: 'cho phép ai làm gì', en: 'allow sb to do; allow sth', fam: [], syn: ['permit'], ant: ['forbid'], col: [], ex: ['My parents didn’t allow me to stay out late.'] },
  { w: 'approve of', pos: 'v + prep', ipa: '/əˈpruːv əv/', g: 'pattern', vi: 'tán thành', en: 'approve of sth/doing; approve sth', fam: [], syn: [], ant: ['disapprove of'], col: [], ex: ['Her parents didn’t approve of her boyfriend.'] },
  { w: 'ask sb to do / ask for', pos: 'v + pattern', ipa: '/ɑːsk/', g: 'pattern', vi: 'yêu cầu; hỏi xin', en: 'ask sb sth; ask sb to do sth (for you); ask about/for sth; ask if/whether', fam: [], syn: [], ant: [], col: [], ex: ['She asked me to look after her dog.'] },
  { w: 'attack sb for', pos: 'v + pattern', ipa: '/əˈtæk/', g: 'pattern', vi: 'công kích ai vì', en: 'attack sth; attack sb for sth/doing; an attack on sth/sb', fam: [], syn: ['criticise'], ant: [], col: [], ex: ['The minister was attacked for ignoring the problem.'] },
  { w: 'ban sb from', pos: 'v + pattern', ipa: '/bæn/', g: 'pattern', vi: 'cấm ai', en: 'ban sb from sth/doing; ban sth', fam: [], syn: ['prohibit'], ant: ['allow'], col: [], ex: ['He was banned from driving for a year.'] },
  { w: 'convince sb to do / that', pos: 'v + pattern', ipa: '/kənˈvɪns/', g: 'pattern', vi: 'thuyết phục', en: 'convince sb (of sth); convince sb to do; convince sb that', fam: [], syn: ['persuade'], ant: [], col: [], ex: ['I convinced my dad to let me go.'] },
  { w: 'force sb to do', pos: 'v + pattern', ipa: '/fɔːs/', g: 'pattern', vi: 'ép buộc ai', en: 'force sb to do sth; force sb into sth/doing', fam: [], syn: ['make'], ant: [], col: [], ex: ['Nobody should be forced to marry against their will.'] },
  { w: 'independent of/from', pos: 'adj + prep', ipa: '/ˌɪndɪˈpendənt/', g: 'pattern', vi: 'độc lập khỏi', en: 'independent of/from sth/sb', fam: ['independence'], syn: [], ant: ['dependent on'], col: [], ex: ['Young people today become independent of their parents later.'] },
  { w: 'let sb do', pos: 'v + pattern', ipa: '/let/', g: 'pattern', vi: 'để ai làm gì', en: 'let sb do sth (no "to")', fam: [], syn: ['allow'], ant: [], col: [], ex: ['My parents let me choose my own university. (✗ let me to choose)'] },
  { w: 'object to', pos: 'v + prep', ipa: '/əbˈdʒekt tə/', g: 'pattern', vi: 'phản đối', en: 'object to sth/doing', fam: ['objection'], syn: ['oppose'], ant: [], col: [], ex: ['Many residents objected to the new building.'] },
  { w: 'pretend to do / that', pos: 'v + pattern', ipa: '/prɪˈtend/', g: 'pattern', vi: 'giả vờ', en: 'pretend to be; pretend to do; pretend that', fam: [], syn: [], ant: [], col: [], ex: ['He pretended not to see me.'] },
  { w: 'rely on', pos: 'v + prep', ipa: '/rɪˈlaɪ ɒn/', g: 'pattern', vi: 'dựa vào', en: 'rely on sth/sb', fam: ['reliable'], syn: ['depend on'], ant: [], col: [], ex: ['Many elderly people rely on their children for support.'] },

  // ---------- Word formation ----------
  { w: 'ability / disability', pos: 'word family', ipa: '/əˈbɪləti/', g: 'wordform', vi: 'khả năng / khuyết tật', en: 'able → unable, (in)ability, disabled, disability', fam: ['unable (adj)', 'inability (n)', 'disabled (adj)', 'disability (n)'], syn: [], ant: [], col: ['people with disabilities'], ex: ['Public buildings should be accessible to people with disabilities.'] },
  { w: 'achievement', pos: 'word family', ipa: '/əˈtʃiːvmənt/', g: 'wordform', vi: 'thành tựu', en: 'achieve → achievement', fam: ['achieve (v)'], syn: [], ant: [], col: ['a great achievement'], ex: ['Getting into university was a huge achievement.'] },
  { w: 'argumentative', pos: 'word family', ipa: '/ˌɑːɡjuˈmentətɪv/', g: 'wordform', vi: 'hay cãi', en: 'argue → argument, argumentative', fam: ['argument (n)'], syn: [], ant: [], col: [], ex: ['Teenagers can be very argumentative.'] },
  { w: 'careful / careless', pos: 'word family', ipa: '/ˈkeəfl/', g: 'wordform', vi: 'cẩn thận / bất cẩn', en: 'care → careful(ly), careless(ly), (un)caring', fam: ['caring (adj) chu đáo', 'uncaring (adj)'], syn: [], ant: [], col: [], ex: ['She’s a very caring person.'] },
  { w: 'correspondence', pos: 'word family', ipa: '/ˌkɒrəˈspɒndəns/', g: 'wordform', vi: 'thư từ', en: 'correspond → correspondence', fam: ['correspond (v)'], syn: [], ant: [], col: [], ex: ['They kept up a correspondence for years.'] },
  { w: 'friendship / friendly', pos: 'word family', ipa: '/ˈfrendʃɪp/', g: 'wordform', vi: 'tình bạn / thân thiện', en: 'friend → friendship, (un)friendly', fam: ['friendly (adj)', 'unfriendly (adj)'], syn: [], ant: [], col: ['a close friendship'], ex: ['Their friendship lasted for fifty years.'] },
  { w: 'happiness', pos: 'word family', ipa: '/ˈhæpinəs/', g: 'wordform', vi: 'hạnh phúc', en: 'happy → unhappy, (un)happiness, (un)happily', fam: ['unhappy (adj)', 'unhappiness (n)', 'happily (adv)'], syn: [], ant: [], col: [], ex: ['Money doesn’t always bring happiness.'] },
  { w: 'jealousy', pos: 'word family', ipa: '/ˈdʒeləsi/', g: 'wordform', vi: 'sự ghen tị', en: 'jealous → jealousy, jealously', fam: ['jealous (adj)', 'jealously (adv)'], syn: ['envy'], ant: [], col: [], ex: ['Jealousy can destroy a friendship.'] },
  { w: 'kindness / unkind', pos: 'word family', ipa: '/ˈkaɪndnəs/', g: 'wordform', vi: 'lòng tốt / không tử tế', en: 'kind → unkind, (un)kindness, kindly', fam: ['unkind (adj)', 'kindness (n)', 'kindly (adv)'], syn: [], ant: [], col: ['an act of kindness'], ex: ['Small acts of kindness make a big difference.'] },
  { w: 'marriage', pos: 'word family', ipa: '/ˈmærɪdʒ/', g: 'wordform', vi: 'hôn nhân', en: 'marry → marriage, (un)married', fam: ['married (adj)', 'unmarried (adj)'], syn: [], ant: ['divorce'], col: ['a happy marriage'], ex: ['People are getting married later than in the past.'] },
  { w: 'nervousness', pos: 'word family', ipa: '/ˈnɜːvəsnəs/', g: 'wordform', vi: 'sự lo lắng', en: 'nerve → nervous(ly), nervousness', fam: ['nerve (n)', 'nervous (adj)', 'nervously (adv)'], syn: [], ant: [], col: [], ex: ['She laughed nervously.'] },
  { w: 'disobey', pos: 'word family', ipa: '/ˌdɪsəˈbeɪ/', g: 'wordform', vi: 'không vâng lời', en: 'obey → disobey, (dis)obedient(ly), (dis)obedience', fam: ['obedient (adj)', 'disobedient (adj)', 'obedience (n)'], syn: [], ant: ['obey'], col: [], ex: ['Children who disobey their parents may be punished.'] },
  { w: 'personality', pos: 'word family', ipa: '/ˌpɜːsəˈnæləti/', g: 'wordform', vi: 'tính cách', en: 'person → (im)personal(ly), personality', fam: ['personal (adj)', 'impersonal (adj)', 'personally (adv)'], syn: ['character'], ant: [], col: ['a strong personality'], ex: ['She has a really friendly personality.'] },
  { w: 'impolite / politeness', pos: 'word family', ipa: '/ˌɪmpəˈlaɪt/', g: 'wordform', vi: 'bất lịch sự / sự lịch sự', en: 'polite → impolite, (im)politely, (im)politeness', fam: ['politely (adv)', 'politeness (n)'], syn: ['rude'], ant: [], col: [], ex: ['It’s impolite to interrupt.'] },
  { w: 'relation / relative', pos: 'word family', ipa: '/rɪˈleɪʃn/', g: 'wordform', vi: 'quan hệ / họ hàng', en: 'relate → relative(ly), relation, relationship', fam: ['relative (n) họ hàng', 'relatively (adv) tương đối', 'relation (n)'], syn: [], ant: [], col: ['a close relative'], ex: ['We visit our relatives during Tết.'] },
  { w: 'willingness', pos: 'word family', ipa: '/ˈwɪlɪŋnəs/', g: 'wordform', vi: 'sự sẵn lòng', en: 'willing → unwilling, (un)willingness, (un)willingly', fam: ['willing (adj)', 'unwilling (adj)', 'willingly (adv)'], syn: [], ant: [], col: [], ex: ['Employers value a willingness to learn.'] },
];
