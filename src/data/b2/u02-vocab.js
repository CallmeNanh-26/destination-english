// B2 Unit 2 – Travel and transport: word list from Destination B2 p.12, expanded.
// `cmp` explains easily-confused words ("topic vocabulary in contrast").
const t = (w, pos, ipa, vi, en, cmp, col, ex, extra = {}) => ({ w, pos, ipa, g: 'topic', vi, en, cmp, fam: [], syn: [], ant: [], col, ex: [ex], ...extra });
const JOURNEY = 'voyage = chuyến đi dài bằng tàu biển/vũ trụ · journey = quãng đường đi từ A đến B (nhấn mạnh việc di chuyển) · trip = chuyến đi ngắn, có đi có về · travel = việc đi lại nói chung (danh từ không đếm được) · excursion = chuyến tham quan ngắn theo nhóm';
const VIEW = 'view = cảnh nhìn thấy từ một chỗ (view from the window) · sight = thứ đáng xem / khả năng nhìn (the sights of Rome, at first sight)';
const WORLD = 'world = thế giới, các quốc gia, con người · earth = Trái Đất (hành tinh), đất';
const AREA = 'area = khu vực nói chung · territory = lãnh thổ thuộc quyền kiểm soát của một nước/nhóm/con vật';
const SEASON = 'season = mùa (trong năm, mùa du lịch, mùa giải) · period = khoảng thời gian bất kỳ';
const FARE = 'fare = tiền vé tàu xe, máy bay · ticket = tấm vé · fee = phí dịch vụ, lệ phí';
const MISS = 'miss = lỡ (chuyến xe), nhớ ai · lose = làm mất, lạc (đường), thua';
const TAKE = 'take = mang/đưa đi (ra xa người nói) · bring = mang/đưa đến (về phía người nói) · go = đi';
const BOOK = 'book = đặt trước (vé, phòng) · keep = giữ (chỗ, đồ vật)';
const ARRIVE = 'arrive (in/at) = đến nơi, cần giới từ · reach = đến được (không có giới từ)';
const LIVE = 'live = sống, cư trú lâu dài · stay = ở tạm (khách sạn, nhà bạn)';
const BORDER = 'border = biên giới giữa hai nước · edge = mép, rìa · line = đường kẻ, hàng';
const LENGTH = 'length = chiều dài của vật · distance = khoảng cách giữa hai điểm';
const GUIDE = 'guide = hướng dẫn, dẫn đường (người hướng dẫn) · lead = dẫn đầu, dẫn tới';
const NATIVE = 'native = bản xứ, gốc (native speaker, native country) · home = nhà, quê nhà';

export default [
  // ---------- Topic vocabulary in contrast ----------
  t('voyage', 'n', '/ˈvɔɪɪdʒ/', 'chuyến đi biển / vũ trụ dài ngày', 'a long journey by sea or in space', JOURNEY, ['a voyage across the Atlantic', 'maiden voyage'], 'The Titanic sank on its maiden voyage.'),
  t('journey', 'n', '/ˈdʒɜːni/', 'hành trình, chuyến đi (từ nơi này đến nơi khác)', 'travelling from one place to another', JOURNEY, ['a long journey', 'make a journey', 'the journey to work'], 'The journey from Hanoi to Sapa takes about five hours.'),
  t('trip', 'n', '/trɪp/', 'chuyến đi (ngắn, có về)', 'a visit to a place and back', JOURNEY, ['a business trip', 'a school trip', 'go on a trip'], 'We went on a day trip to Ha Long Bay.'),
  t('travel', 'n, v', '/ˈtrævl/', 'việc đi lại, du lịch', 'the activity of travelling (uncountable)', JOURNEY, ['air travel', 'travel abroad', 'travel broadens the mind'], 'Air travel has become much cheaper.', { fam: ['traveller (n)', 'travelling (n)'] }),
  t('excursion', 'n', '/ɪkˈskɜːʃn/', 'chuyến tham quan ngắn', 'a short trip, usually in a group, for pleasure', JOURNEY, ['go on an excursion', 'an excursion to the museum'], 'The hotel organises excursions to the nearby islands.'),
  t('view', 'n', '/vjuː/', 'quang cảnh (nhìn từ một chỗ)', 'what you can see from a place', VIEW, ['a view of the sea', 'a room with a view', 'block the view'], 'Our room had a stunning view of the mountains.'),
  t('sight', 'n', '/saɪt/', 'thắng cảnh; tầm nhìn', 'something worth seeing; the ability to see', VIEW, ['see the sights', 'out of sight', 'at first sight'], 'We spent the day seeing the sights of Hue.', { fam: ['sightseeing (n)'] }),
  t('world', 'n', '/wɜːld/', 'thế giới', 'all the countries and people', WORLD, ['travel around the world', 'all over the world'], 'She has travelled all over the world.', { fam: ['worldwide (adj, adv)'] }),
  t('earth', 'n', '/ɜːθ/', 'Trái Đất; đất', 'the planet we live on; soil', WORLD, ['on earth', 'the Earth’s surface'], 'The Earth goes round the Sun.'),
  t('area', 'n', '/ˈeəriə/', 'khu vực', 'a part of a place', AREA, ['a rural area', 'the surrounding area'], 'There are lots of good hotels in this area.'),
  t('territory', 'n', '/ˈterətri/', 'lãnh thổ', 'land controlled by a country or group', AREA, ['enemy territory', 'national territory'], 'The island is French territory.'),
  t('season', 'n', '/ˈsiːzn/', 'mùa', 'part of the year with a particular weather or activity', SEASON, ['the tourist season', 'high/low season', 'the rainy season'], 'Hotels are cheaper in the low season.'),
  t('period', 'n', '/ˈpɪəriəd/', 'khoảng thời gian', 'a length of time', SEASON, ['a short period of time', 'over a period of'], 'Prices rose sharply over a five-year period.'),
  t('fare', 'n', '/feə(r)/', 'giá vé (tàu xe, máy bay)', 'money you pay for a journey', FARE, ['bus/train/air fare', 'a return fare'], 'Train fares go up every January.'),
  t('ticket', 'n', '/ˈtɪkɪt/', 'vé', 'a piece of paper that lets you travel or enter', FARE, ['a one-way/return ticket', 'book a ticket'], 'I booked my plane ticket online.'),
  t('fee', 'n', '/fiː/', 'phí, lệ phí', 'money paid for a service or to join', FARE, ['an entrance fee', 'a booking fee', 'tuition fees'], 'There’s a small booking fee.'),
  t('miss', 'v', '/mɪs/', 'lỡ (chuyến); nhớ', 'fail to catch; feel sad without', MISS, ['miss the bus/flight', 'miss home'], 'Hurry up or we’ll miss the train!'),
  t('lose', 'v', '/luːz/', 'làm mất; lạc', 'be unable to find; not win', MISS, ['lose your way', 'lose your passport'], 'I lost my passport at the airport.', { fam: ['loss (n)', 'lost (adj)'] }),
  t('take', 'v', '/teɪk/', 'mang đi, đưa đi', 'move sth/sb away from the speaker', TAKE, ['take sb to the airport', 'take an umbrella'], 'Can you take me to the station?'),
  t('bring', 'v', '/brɪŋ/', 'mang đến', 'move sth/sb towards the speaker', TAKE, ['bring sth back', 'bring a friend'], 'Bring me a souvenir from Japan!'),
  t('book', 'v', '/bʊk/', 'đặt (vé, phòng)', 'arrange to have a seat, room, etc. in the future', BOOK, ['book a flight/room', 'fully booked'], 'We booked a hotel near the beach.', { fam: ['booking (n)'] }),
  t('keep', 'v', '/kiːp/', 'giữ', 'continue to have or hold', BOOK, ['keep a seat for sb', 'keep your ticket'], 'Keep your ticket until the end of the journey.'),
  t('arrive', 'v', '/əˈraɪv/', 'đến nơi', 'reach a place (arrive in/at)', ARRIVE, ['arrive in Paris', 'arrive at the airport'], 'We arrived at the hotel late at night.', { fam: ['arrival (n)'] }),
  t('reach', 'v', '/riːtʃ/', 'đến được', 'arrive at (no preposition)', ARRIVE, ['reach the top', 'reach your destination'], 'We finally reached the summit at sunrise.'),
  t('live', 'v', '/lɪv/', 'sống', 'have your home somewhere', LIVE, ['live in/at', 'live abroad'], 'My aunt lives in Australia.'),
  t('stay', 'v, n', '/steɪ/', 'ở tạm', 'spend a short time somewhere as a visitor', LIVE, ['stay at a hotel', 'stay with friends', 'a two-night stay'], 'We stayed with friends in Da Nang.'),
  t('border', 'n', '/ˈbɔːdə(r)/', 'biên giới', 'the line between two countries', BORDER, ['cross the border', 'border control'], 'We crossed the border into Laos.'),
  t('edge', 'n', '/edʒ/', 'mép, rìa', 'the outer part of sth', BORDER, ['the edge of the cliff', 'on the edge of town'], 'Don’t stand so close to the edge!'),
  t('line', 'n', '/laɪn/', 'đường; hàng', 'a long thin mark; a row', BORDER, ['the finish line', 'stand in line'], 'There was a long line at passport control.'),
  t('length', 'n', '/leŋθ/', 'chiều dài', 'how long sth is', LENGTH, ['the length of the bridge', 'at length'], 'The bridge is 2 km in length.', { fam: ['long (adj)', 'lengthen (v)'] }),
  t('distance', 'n', '/ˈdɪstəns/', 'khoảng cách', 'the amount of space between two places', LENGTH, ['a short distance', 'in the distance', 'within walking distance'], 'The hotel is within walking distance of the beach.', { fam: ['distant (adj)'] }),
  t('guide', 'v, n', '/ɡaɪd/', 'hướng dẫn; hướng dẫn viên', 'show sb the way; a person who does this', GUIDE, ['a tour guide', 'a guided tour', 'a guidebook'], 'A local guide showed us round the old town.'),
  t('lead', 'v', '/liːd/', 'dẫn đường, dẫn tới', 'go in front; be the way to a place', GUIDE, ['lead the way', 'lead to'], 'This path leads to the waterfall.'),
  t('native', 'adj', '/ˈneɪtɪv/', 'bản xứ, quê gốc', 'connected with the place you were born', NATIVE, ['native speaker', 'native country', 'native to'], 'Kangaroos are native to Australia.'),
  t('home', 'n', '/həʊm/', 'nhà, quê nhà', 'the place where you live', NATIVE, ['at home', 'leave home', 'homesick'], 'After a month abroad I was ready to go home.'),

  // ---------- Phrasal verbs ----------
  { w: 'catch up with', pos: 'phr v', ipa: '/kætʃ ˈʌp wɪð/', g: 'phrasal', vi: 'đuổi kịp', en: 'reach the same point/level as', fam: [], syn: [], ant: ['fall behind'], col: [], ex: ['Walk on – I’ll catch up with you.'] },
  { w: 'check in', pos: 'phr v', ipa: '/tʃek ˈɪn/', g: 'phrasal', vi: 'làm thủ tục nhận phòng / lên máy bay', en: 'register at a hotel or an airport', fam: ['check-in (n)'], syn: [], ant: ['check out'], col: ['check in online'], ex: ['You must check in two hours before the flight.'] },
  { w: 'check out', pos: 'phr v', ipa: '/tʃek ˈaʊt/', g: 'phrasal', vi: 'trả phòng; kiểm tra, tìm hiểu', en: 'leave a hotel; investigate', fam: ['checkout (n)'], syn: [], ant: ['check in'], col: ['check out by noon'], ex: ['We have to check out by 11 a.m.'] },
  { w: 'drop off', pos: 'phr v', ipa: '/drɒp ˈɒf/', g: 'phrasal', vi: 'cho ai xuống xe; ngủ gật', en: 'let sb get out of a vehicle; fall asleep', fam: [], syn: [], ant: ['pick up'], col: ['drop sb off at the station'], ex: ['Can you drop me off at the airport?'] },
  { w: 'get back', pos: 'phr v', ipa: '/ɡet ˈbæk/', g: 'phrasal', vi: 'trở về', en: 'return from a place', fam: [], syn: ['return'], ant: [], col: ['get back home'], ex: ['When did you get back from Japan?'] },
  { w: 'get away', pos: 'phr v', ipa: '/ɡet əˈweɪ/', g: 'phrasal', vi: 'đi nghỉ', en: 'go on holiday', fam: ['getaway (n)'], syn: [], ant: [], col: ['get away for the weekend'], ex: ['We’re hoping to get away for a few days in May.'] },
  { w: 'keep up with', pos: 'phr v', ipa: '/kiːp ˈʌp wɪð/', g: 'phrasal', vi: 'theo kịp', en: 'stay at the same point/level as', fam: [], syn: [], ant: ['fall behind'], col: ['keep up with the news'], ex: ['Slow down! I can’t keep up with you.'] },
  { w: 'make for', pos: 'phr v', ipa: '/ˈmeɪk fə(r)/', g: 'phrasal', vi: 'đi về phía', en: 'go in the direction of', fam: [], syn: ['head for'], ant: [], col: ['make for the exit'], ex: ['When the rain started, we made for the nearest café.'] },
  { w: 'pick up', pos: 'phr v', ipa: '/pɪk ˈʌp/', g: 'phrasal', vi: 'đón (ai bằng xe)', en: 'stop in a vehicle to give sb a lift', fam: [], syn: ['collect'], ant: ['drop off'], col: ['pick sb up from the airport'], ex: ['I’ll pick you up at seven.'] },
  { w: 'pull in', pos: 'phr v', ipa: '/pʊl ˈɪn/', g: 'phrasal', vi: 'tấp vào lề; (tàu) vào ga', en: 'stop by the side of the road in a car', fam: [], syn: [], ant: ['pull out'], col: ['pull in at a petrol station'], ex: ['We pulled in to look at the map.'] },
  { w: 'run over', pos: 'phr v', ipa: '/rʌn ˈəʊvə(r)/', g: 'phrasal', vi: 'cán phải, đâm phải', en: 'hit with a car', fam: [], syn: [], ant: [], col: ['be run over by a bus'], ex: ['The cat was nearly run over by a motorbike.'] },
  { w: 'see off', pos: 'phr v', ipa: '/siː ˈɒf/', g: 'phrasal', vi: 'tiễn (ai)', en: 'go to a station, etc. to say goodbye to sb', fam: [], syn: [], ant: [], col: ['see sb off at the airport'], ex: ['My whole family came to see me off at the airport.'] },
  { w: 'set out/off', pos: 'phr v', ipa: '/set ˈaʊt/', g: 'phrasal', vi: 'khởi hành', en: 'start a journey', fam: [], syn: ['leave', 'depart'], ant: [], col: ['set off early'], ex: ['We set off at dawn to avoid the traffic.'] },
  { w: 'take off', pos: 'phr v', ipa: '/teɪk ˈɒf/', g: 'phrasal', vi: '(máy bay) cất cánh', en: 'leave the ground', fam: ['take-off (n)'], syn: [], ant: ['land'], col: ['the plane took off'], ex: ['The plane took off an hour late.'] },
  { w: 'turn round', pos: 'phr v', ipa: '/tɜːn ˈraʊnd/', g: 'phrasal', vi: 'quay lại, quay đầu', en: 'go back in the opposite direction', fam: [], syn: ['turn back'], ant: [], col: [], ex: ['We realised we were lost and had to turn round.'] },

  // ---------- Phrases and collocations ----------
  { w: 'accident', pos: 'phrases', ipa: '/ˈæksɪdənt/', g: 'phrase', vi: 'tai nạn; tình cờ', en: 'have an accident; be (involved) in an accident; do sth by accident', fam: ['accidental(ly)'], syn: [], ant: ['on purpose'], col: ['have an accident', 'be involved in an accident', 'by accident'], ex: ['I met my old teacher by accident at the airport.'] },
  { w: 'advance', pos: 'phrases', ipa: '/ədˈvɑːns/', g: 'phrase', vi: 'trước; tiến về', en: 'in advance; advance to/towards a place', fam: [], syn: ['beforehand'], ant: [], col: ['book in advance', 'pay in advance'], ex: ['It’s cheaper to book train tickets in advance.'] },
  { w: 'ahead', pos: 'phrases', ipa: '/əˈhed/', g: 'phrase', vi: 'phía trước; tiếp tục', en: 'go straight ahead; go ahead; be ahead of sth/sb', fam: [], syn: [], ant: ['behind'], col: ['go straight ahead', 'go ahead', 'ahead of schedule'], ex: ['Go straight ahead and turn left at the lights.'] },
  { w: 'direction', pos: 'phrases', ipa: '/dəˈrekʃn/', g: 'phrase', vi: 'hướng', en: 'a change of direction; in the direction of; in this/that direction', fam: ['direct (v, adj)'], syn: [], ant: [], col: ['in the direction of', 'a sense of direction', 'ask for directions'], ex: ['I have no sense of direction – I get lost everywhere.'] },
  { w: 'head', pos: 'phrases', ipa: '/hed/', g: 'phrase', vi: 'đầu; hướng về', en: 'off the top of your head; head for/towards a place; head over heels (in love)', fam: [], syn: ['make for'], ant: [], col: ['head for home', 'off the top of my head'], ex: ['It’s getting dark – let’s head for home.'] },
  { w: 'holiday', pos: 'phrases', ipa: '/ˈhɒlədeɪ/', g: 'phrase', vi: 'kỳ nghỉ', en: 'go/be on holiday; have/take a holiday; bank holiday', fam: [], syn: ['vacation (US)'], ant: [], col: ['go on holiday', 'take a holiday', 'a bank holiday'], ex: ['We’re going on holiday to Thailand next month.'] },
  { w: 'left', pos: 'phrases', ipa: '/left/', g: 'phrase', vi: 'bên trái', en: 'go/turn left; on the left; on the left-hand side; left-handed', fam: [], syn: [], ant: ['right'], col: ['turn left', 'on the left-hand side'], ex: ['In the UK, people drive on the left.'] },
  { w: 'route', pos: 'phrases', ipa: '/ruːt/', g: 'phrase', vi: 'tuyến đường', en: 'plan your/a route; take a route', fam: [], syn: ['way'], ant: [], col: ['plan a route', 'take a different route', 'a bus route'], ex: ['We took the coastal route to enjoy the views.'] },
  { w: 'sights / sightseeing', pos: 'phrases', ipa: '/saɪts/', g: 'phrase', vi: 'thắng cảnh; đi tham quan', en: 'see the sights; go sightseeing', fam: [], syn: [], ant: [], col: ['see the sights', 'go sightseeing'], ex: ['We spent the morning sightseeing in the old town.'] },
  { w: 'speed', pos: 'phrases', ipa: '/spiːd/', g: 'phrase', vi: 'tốc độ', en: 'at (high/full) speed; a burst of speed; speed limit', fam: [], syn: [], ant: [], col: ['at high speed', 'the speed limit', 'a burst of speed'], ex: ['He was fined for breaking the speed limit.'] },
  { w: 'go on a tour', pos: 'phrases', ipa: '/tʊə(r)/', g: 'phrase', vi: 'chuyến tham quan', en: 'go on/take a tour of/(a)round somewhere; tour a place; tour guide', fam: ['tourism', 'tourist'], syn: [], ant: [], col: ['go on a tour of', 'a guided tour', 'tour guide'], ex: ['We took a guided tour of the palace.'] },
  { w: 'go on a trip', pos: 'phrases', ipa: '/trɪp/', g: 'phrase', vi: 'chuyến đi', en: 'business trip; school trip; go on a trip; take a trip (to a place)', fam: [], syn: [], ant: [], col: ['go on a trip', 'a business trip', 'take a trip to'], ex: ['My mum is on a business trip to Singapore.'] },
  { w: 'way', pos: 'phrases', ipa: '/weɪ/', g: 'phrase', vi: 'đường đi; cách', en: 'lose/make/find your way; in a way; on the way; go all the way (to sth/swh)', fam: [], syn: [], ant: [], col: ['lose your way', 'on the way', 'make your way to'], ex: ['We stopped for lunch on the way to Hue.'] },

  // ---------- Word patterns ----------
  { w: 'afraid of / to do', pos: 'adj + prep', ipa: '/əˈfreɪd/', g: 'pattern', vi: 'sợ', en: 'afraid of sth/sb/doing; afraid to do', fam: [], syn: ['scared of'], ant: [], col: [], ex: ['Many people are afraid of flying.'] },
  { w: 'arrange (for sb to do)', pos: 'v + pattern', ipa: '/əˈreɪndʒ/', g: 'pattern', vi: 'sắp xếp', en: 'arrange sth (with sb); arrange for sb to do', fam: ['arrangement (n)'], syn: ['organise'], ant: [], col: [], ex: ['I’ve arranged for a taxi to pick us up.'] },
  { w: 'arrive in/at', pos: 'v + prep', ipa: '/əˈraɪv/', g: 'pattern', vi: 'đến (thành phố / địa điểm)', en: 'arrive in/at a place; arrive here/there (no preposition)', fam: [], syn: [], ant: ['leave'], col: ['arrive in Tokyo', 'arrive at the station'], ex: ['We arrived in London at midnight. (✗ arrive to)'] },
  { w: 'continue (to do / doing / with)', pos: 'v + pattern', ipa: '/kənˈtɪnjuː/', g: 'pattern', vi: 'tiếp tục', en: 'continue sth/doing; continue to do; continue with sth', fam: [], syn: ['carry on'], ant: ['stop'], col: [], ex: ['Air travel continues to grow every year.'] },
  { w: 'differ from', pos: 'v + prep', ipa: '/ˈdɪfə frəm/', g: 'pattern', vi: 'khác với', en: 'differ from sth/sb', fam: ['different', 'difference'], syn: [], ant: [], col: [], ex: ['Train travel in Japan differs greatly from that in Vietnam.'] },
  { w: 'dream about/of', pos: 'v + prep', ipa: '/driːm/', g: 'pattern', vi: 'mơ (ước) về', en: 'dream about/of sth/sb/doing', fam: [], syn: [], ant: [], col: [], ex: ['I’ve always dreamed of travelling around South America.'] },
  { w: 'invite sb to do', pos: 'v + pattern', ipa: '/ɪnˈvaɪt/', g: 'pattern', vi: 'mời ai làm gì', en: 'invite sb to do / to sth', fam: ['invitation'], syn: [], ant: [], col: [], ex: ['They invited us to stay at their villa.'] },
  { w: 'keen to do / on', pos: 'adj + pattern', ipa: '/kiːn/', g: 'pattern', vi: 'hăng hái, thích', en: 'keen to do; keen on sth/sb/doing', fam: [], syn: ['eager to'], ant: [], col: [], ex: ['She’s very keen on travelling alone.'] },
  { w: 'live in/at/on/for', pos: 'v + prep', ipa: '/lɪv/', g: 'pattern', vi: 'sống ở / sống nhờ / sống vì', en: 'live in/at a place; live on/for sth', fam: [], syn: [], ant: [], col: ['live on a small salary', 'live for travel'], ex: ['Backpackers often live on very little money.'] },
  { w: 'regret (not) doing / to tell', pos: 'v + pattern', ipa: '/rɪˈɡret/', g: 'pattern', vi: 'hối tiếc (đã làm) / lấy làm tiếc phải báo', en: 'regret (not) doing; regret sth; regret to tell/inform you', fam: [], syn: [], ant: [], col: [], ex: ['I regret not visiting the temple.', 'We regret to inform you that the flight has been cancelled.'] },
  { w: 'think of/about', pos: 'v + prep', ipa: '/θɪŋk/', g: 'pattern', vi: 'nghĩ về / định', en: 'think of/about sth/sb/doing', fam: [], syn: ['consider'], ant: [], col: [], ex: ['We’re thinking of going to Bali this summer.'] },
  { w: 'write about / to', pos: 'v + pattern', ipa: '/raɪt/', g: 'pattern', vi: 'viết về / viết cho', en: 'write about sth; write (sth) (to sb); write sb sth; write sth down', fam: [], syn: [], ant: [], col: [], ex: ['She writes about her travels on her blog.'] },

  // ---------- Word formation ----------
  { w: 'arrange', pos: 'word family', ipa: '/əˈreɪndʒ/', g: 'wordform', vi: 'sắp xếp', en: 'arrange → rearrange, arrangement', fam: ['rearrange (v) sắp xếp lại', 'arrangement (n) sự sắp xếp'], syn: [], ant: [], col: ['travel arrangements'], ex: ['Have you made all the travel arrangements?'] },
  { w: 'broad', pos: 'word family', ipa: '/brɔːd/', g: 'wordform', vi: 'rộng', en: 'broad → breadth, broaden', fam: ['breadth (n) chiều rộng', 'broaden (v) mở rộng'], syn: ['wide'], ant: ['narrow'], col: ['broaden your horizons'], ex: ['Travel broadens the mind.'] },
  { w: 'culture', pos: 'word family', ipa: '/ˈkʌltʃə(r)/', g: 'wordform', vi: 'văn hóa', en: 'culture → cultural(ly), (un)cultured', fam: ['cultural (adj) thuộc văn hóa', 'culturally (adv)', 'cultured (adj) có học thức'], syn: [], ant: [], col: ['cultural differences', 'culture shock'], ex: ['Living abroad can be a great cultural experience.'] },
  { w: 'differ', pos: 'word family', ipa: '/ˈdɪfə(r)/', g: 'wordform', vi: 'khác', en: 'differ → different(ly), difference', fam: ['different (adj)', 'differently (adv)', 'difference (n)'], syn: [], ant: [], col: ['a time difference'], ex: ['There’s a seven-hour time difference between Hanoi and London.'] },
  { w: 'direct', pos: 'word family', ipa: '/dəˈrekt/', g: 'wordform', vi: 'trực tiếp; chỉ đường', en: 'direct → indirect, direction, director, (in)directly', fam: ['indirect (adj) gián tiếp', 'direction (n) hướng', 'director (n) giám đốc', 'directly (adv)'], syn: [], ant: [], col: ['a direct flight'], ex: ['Is there a direct flight to Paris?'] },
  { w: 'distant', pos: 'word family', ipa: '/ˈdɪstənt/', g: 'wordform', vi: 'xa xôi', en: 'distant → distantly, distance', fam: ['distantly (adv)', 'distance (n) khoảng cách'], syn: ['far-off', 'remote'], ant: ['near'], col: ['in the distant past'], ex: ['We could see distant mountains from the plane.'] },
  { w: 'enter', pos: 'word family', ipa: '/ˈentə(r)/', g: 'wordform', vi: 'đi vào', en: 'enter → entrance', fam: ['entrance (n) lối vào; sự vào', 'entry (n)'], syn: [], ant: ['exit'], col: ['the main entrance', 'entrance fee'], ex: ['Meet me at the main entrance.'] },
  { w: 'inhabit', pos: 'word family', ipa: '/ɪnˈhæbɪt/', g: 'wordform', vi: 'cư trú', en: 'inhabit → inhabitant', fam: ['inhabitant (n) cư dân', 'uninhabited (adj) không người ở'], syn: ['live in'], ant: [], col: ['an uninhabited island'], ex: ['The island has only 200 inhabitants.'] },
  { w: 'photograph', pos: 'word family', ipa: '/ˈfəʊtəɡrɑːf/', g: 'wordform', vi: 'bức ảnh', en: 'photograph → photography, photographer, photographic', fam: ['photography (n) nhiếp ảnh', 'photographer (n) nhiếp ảnh gia', 'photographic (adj)'], syn: [], ant: [], col: ['travel photography'], ex: ['She’s a professional travel photographer.'] },
  { w: 'recognise', pos: 'word family', ipa: '/ˈrekəɡnaɪz/', g: 'wordform', vi: 'nhận ra', en: 'recognise → (un)recognisable, recognition', fam: ['recognisable (adj)', 'unrecognisable (adj) không nhận ra được', 'recognition (n)'], syn: [], ant: [], col: [], ex: ['The town was unrecognisable after twenty years.'] },
  { w: 'time', pos: 'word family', ipa: '/taɪm/', g: 'wordform', vi: 'thời gian', en: 'time → timetable', fam: ['timetable (n) lịch trình', 'timely (adj)'], syn: [], ant: [], col: ['a train timetable'], ex: ['Check the timetable before you leave.'] },
  { w: 'tourism / tourist', pos: 'word family', ipa: '/tʊə(r)/', g: 'wordform', vi: 'chuyến du lịch', en: 'tour → tourism, tourist', fam: ['tourism (n) ngành du lịch', 'tourist (n) khách du lịch'], syn: [], ant: [], col: ['mass tourism', 'a tourist attraction'], ex: ['Tourism brings both benefits and problems to local communities.'] },
  { w: 'worldwide', pos: 'word family', ipa: '/wɜːld/', g: 'wordform', vi: 'thế giới', en: 'world → worldwide', fam: ['worldwide (adj, adv) toàn cầu'], syn: ['global'], ant: [], col: ['worldwide fame'], ex: ['The company has offices worldwide.'] },
];
