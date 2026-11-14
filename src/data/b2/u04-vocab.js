// B2 Unit 4 – Hobbies, sport and games: word list from Destination B2 p.24, expanded.
// `cmp` explains easily-confused words ("topic vocabulary in contrast").
const t = (w, pos, ipa, vi, en, cmp, col, ex, extra = {}) => ({ w, pos, ipa, g: 'topic', vi, en, cmp, fam: [], syn: [], ant: [], col, ex: [ex], ...extra });
const PLACE = 'pitch = sân cỏ (bóng đá, rugby, cricket) · track = đường chạy, đường đua · court = sân có vạch (tennis, bóng rổ, cầu lông) · course = sân golf, đường đua ngựa · ring = võ đài (boxing) · rink = sân băng';
const WIN = 'win = thắng (một trận, cuộc thi, giải) · beat = đánh bại (một người/đội) · score = ghi bàn, ghi điểm';
const PLAY = 'play = chơi (động từ); vở kịch · game = trò chơi, ván, trận (danh từ)';
const WATCH = 'spectator = khán giả xem trực tiếp tại sân · viewer = người xem TV';
const REF = 'umpire = trọng tài (tennis, cricket, bóng chày) · referee = trọng tài (bóng đá, boxing, bóng rổ)';
const END = 'final = trận chung kết · finale = phần kết hoành tráng (của buổi biểu diễn) · end = điểm kết thúc · ending = đoạn kết (phim, truyện)';
const BAT = 'bat = gậy (cricket, bóng chày, bóng bàn) · stick = gậy (hockey) · rod = cần câu · racket = vợt (tennis, cầu lông)';
const AMATEUR = 'amateur = nghiệp dư, không nhận tiền · professional = chuyên nghiệp, làm để kiếm tiền';
const SPORT = 'sport = thể thao nói chung · athletics = điền kinh (chạy, nhảy, ném)';
const INTERVAL = 'interval = giờ nghỉ giữa buổi (kịch, hòa nhạc) · half time = giờ nghỉ giữa hai hiệp';
const DRAW = 'draw = hòa (động từ/danh từ) · equal = bằng nhau (tính từ), ngang bằng';
const COMP = 'competitor = người tham gia cuộc thi (bất kỳ) · opponent = đối thủ trực tiếp của bạn';

export default [
  // ---------- Topic vocabulary in contrast ----------
  t('pitch', 'n', '/pɪtʃ/', 'sân cỏ', 'an area of ground for football, rugby, etc.', PLACE, ['a football pitch', 'on the pitch'], 'The fans ran onto the pitch after the final whistle.'),
  t('track', 'n', '/træk/', 'đường chạy, đường đua', 'a path or circuit for racing', PLACE, ['a running track', 'a race track'], 'She runs ten laps of the track every morning.'),
  t('court', 'n', '/kɔːt/', 'sân (tennis, bóng rổ…)', 'a marked area for tennis, basketball, etc.', PLACE, ['a tennis/basketball court'], 'We booked a badminton court for Saturday.'),
  t('course', 'n', '/kɔːs/', 'sân golf; đường đua', 'an area for golf or horse racing', PLACE, ['a golf course'], 'The new golf course has 18 holes.'),
  t('ring', 'n', '/rɪŋ/', 'võ đài', 'a square area where boxers fight', PLACE, ['a boxing ring'], 'The two boxers stepped into the ring.'),
  t('rink', 'n', '/rɪŋk/', 'sân trượt băng', 'an area of ice for skating', PLACE, ['an ice rink'], 'There’s an ice rink in the shopping centre.'),
  t('win', 'v', '/wɪn/', 'thắng', 'be the best in a game, competition, etc.', WIN, ['win a match', 'win a medal', 'win by two goals'], 'Vietnam won the match 2–0.', { fam: ['winner (n)'] }),
  t('beat', 'v', '/biːt/', 'đánh bại', 'defeat a person or team', WIN, ['beat sb at chess', 'beat the record'], 'Vietnam beat Thailand 2–0. (✗ won Thailand)'),
  t('score', 'v, n', '/skɔː(r)/', 'ghi bàn; tỉ số', 'get a goal or point; the number of points', WIN, ['score a goal', 'the final score'], 'He scored twice in the second half.'),
  t('play', 'v, n', '/pleɪ/', 'chơi; vở kịch', 'take part in a game; a story performed in a theatre', PLAY, ['play football', 'play a game'], 'Do you play any sports?'),
  t('game', 'n', '/ɡeɪm/', 'trò chơi, ván, trận', 'an activity with rules; a single match', PLAY, ['a board game', 'a game of chess', 'win the game'], 'Let’s have a game of cards.'),
  t('spectator', 'n', '/spekˈteɪtə(r)/', 'khán giả (tại sân)', 'sb who watches an event in person', WATCH, ['thousands of spectators'], 'The stadium holds 40,000 spectators.'),
  t('viewer', 'n', '/ˈvjuːə(r)/', 'người xem (TV)', 'sb who watches TV', WATCH, ['millions of viewers'], 'The final was watched by 500 million viewers.'),
  t('umpire', 'n', '/ˈʌmpaɪə(r)/', 'trọng tài (tennis, cricket)', 'official in tennis, cricket, baseball', REF, ['the umpire’s decision'], 'The player argued with the umpire.'),
  t('referee', 'n', '/ˌrefəˈriː/', 'trọng tài (bóng đá, boxing)', 'official in football, boxing, basketball', REF, ['the referee blew the whistle'], 'The referee showed him a red card.'),
  t('final', 'n, adj', '/ˈfaɪnl/', 'trận chung kết', 'the last game of a competition', END, ['the World Cup final', 'reach the final'], 'They reached the final for the first time.'),
  t('finale', 'n', '/fɪˈnɑːli/', 'màn kết (biểu diễn)', 'the exciting last part of a show', END, ['a grand finale'], 'The concert ended with a spectacular finale.'),
  t('end', 'n', '/end/', 'kết thúc', 'the last part or point', END, ['at the end of the game'], 'At the end of the match, the players shook hands.'),
  t('ending', 'n', '/ˈendɪŋ/', 'đoạn kết (truyện, phim)', 'the way a story finishes', END, ['a happy ending'], 'The film has a surprising ending.'),
  t('bat', 'n', '/bæt/', 'gậy (cricket, bóng chày); vợt bóng bàn', 'a piece of wood for hitting the ball', BAT, ['a baseball bat', 'a table-tennis bat'], 'He hit the ball with his bat.'),
  t('stick', 'n', '/stɪk/', 'gậy (hockey)', 'a long thin piece of wood used in hockey', BAT, ['a hockey stick'], 'She broke her hockey stick in the match.'),
  t('rod', 'n', '/rɒd/', 'cần câu', 'a long pole for fishing', BAT, ['a fishing rod'], 'My grandad gave me his old fishing rod.'),
  t('racket', 'n', '/ˈrækɪt/', 'vợt (tennis, cầu lông)', 'a bat with strings for tennis, badminton', BAT, ['a tennis racket'], 'I need new strings for my racket.'),
  t('amateur', 'adj, n', '/ˈæmətə(r)/', 'nghiệp dư', 'doing sth for pleasure, not money', AMATEUR, ['an amateur team', 'amateur photographer'], 'He plays for an amateur football club.'),
  t('professional', 'adj, n', '/prəˈfeʃənl/', 'chuyên nghiệp', 'doing sth as a paid job', AMATEUR, ['a professional footballer', 'turn professional'], 'She turned professional at the age of 17.'),
  t('sport', 'n', '/spɔːt/', 'thể thao', 'a physical activity with rules', SPORT, ['do/play sport', 'a team sport'], 'What’s your favourite sport?'),
  t('athletics', 'n', '/æθˈletɪks/', 'điền kinh', 'running, jumping and throwing sports', SPORT, ['an athletics competition'], 'Athletics is the main event of the Olympics.', { fam: ['athlete (n)', 'athletic (adj)'] }),
  t('interval', 'n', '/ˈɪntəvl/', 'giờ nghỉ giữa buổi (kịch, nhạc)', 'a short break in a play or concert', INTERVAL, ['during the interval'], 'We bought drinks during the interval.'),
  t('half time', 'n', '/ˌhɑːf ˈtaɪm/', 'giờ nghỉ giữa hiệp', 'the break between two halves of a match', INTERVAL, ['at half time'], 'The score was 1–1 at half time.'),
  t('draw', 'v, n', '/drɔː/', 'hòa', 'finish a game with equal scores', DRAW, ['draw 2–2', 'end in a draw'], 'The match ended in a draw.'),
  t('equal', 'adj', '/ˈiːkwəl/', 'bằng nhau', 'the same in amount or level', DRAW, ['equal pay', 'on equal terms'], 'The two teams are equal on points.', { fam: ['equality (n)', 'equalise (v)'] }),
  t('competitor', 'n', '/kəmˈpetɪtə(r)/', 'người dự thi', 'sb who takes part in a competition', COMP, ['500 competitors'], 'Over 500 competitors took part in the marathon.'),
  t('opponent', 'n', '/əˈpəʊnənt/', 'đối thủ', 'the person or team you play against', COMP, ['a tough opponent', 'beat your opponent'], 'Never underestimate your opponent.'),

  // ---------- Phrasal verbs ----------
  { w: 'bring forward', pos: 'phr v', ipa: '/brɪŋ ˈfɔːwəd/', g: 'phrasal', vi: 'dời lên sớm hơn', en: 'change the date/time of an event so it happens earlier', fam: [], syn: [], ant: ['put off', 'postpone'], col: ['bring the match forward'], ex: ['The match has been brought forward to Friday.'] },
  { w: 'carry on', pos: 'phr v', ipa: '/ˌkæri ˈɒn/', g: 'phrasal', vi: 'tiếp tục', en: 'continue', fam: [], syn: ['continue', 'go on'], ant: ['stop'], col: ['carry on playing'], ex: ['Despite his injury, he carried on playing.'] },
  { w: 'get round to', pos: 'phr v', ipa: '/ɡet ˈraʊnd tə/', g: 'phrasal', vi: 'cuối cùng cũng làm (việc định làm từ lâu)', en: 'start (after planning to do sth for a long time)', fam: [], syn: [], ant: [], col: ['never get round to it'], ex: ['I’ve always wanted to learn the guitar but I’ve never got round to it.'] },
  { w: 'get up to', pos: 'phr v', ipa: '/ɡet ˈʌp tə/', g: 'phrasal', vi: 'làm (đặc biệt là trò nghịch)', en: 'do; do sth you should not do', fam: [], syn: [], ant: [], col: ['What have you been getting up to?'], ex: ['What did you get up to at the weekend?'] },
  { w: 'go in for', pos: 'phr v', ipa: '/ɡəʊ ˈɪn fə(r)/', g: 'phrasal', vi: 'tham gia (cuộc thi); thích', en: 'enter (a competition); like', fam: [], syn: ['enter'], ant: [], col: ['go in for a competition'], ex: ['She’s going in for the chess championship.'] },
  { w: 'go off', pos: 'phr v', ipa: '/ɡəʊ ˈɒf/', g: 'phrasal', vi: 'hết thích', en: 'stop liking', fam: [], syn: [], ant: ['take to'], col: ['go off sb/sth'], ex: ['I used to love tennis but I’ve gone off it.'] },
  { w: 'join in', pos: 'phr v', ipa: '/dʒɔɪn ˈɪn/', g: 'phrasal', vi: 'tham gia (cùng mọi người)', en: 'participate, take part', fam: [], syn: ['take part'], ant: [], col: ['join in the fun'], ex: ['Everyone joined in the singing.'] },
  { w: 'knock out', pos: 'phr v', ipa: '/nɒk ˈaʊt/', g: 'phrasal', vi: 'loại (khỏi giải); hạ đo ván', en: 'defeat and remove from a competition; make unconscious', fam: ['knockout (n)'], syn: ['eliminate'], ant: [], col: ['be knocked out of the cup'], ex: ['They were knocked out in the first round.'] },
  { w: 'look out', pos: 'phr v', ipa: '/lʊk ˈaʊt/', g: 'phrasal', vi: 'coi chừng', en: 'be careful', fam: [], syn: ['watch out'], ant: [], col: ['Look out!'], ex: ['Look out! The ball’s coming towards you!'] },
  { w: 'pull out', pos: 'phr v', ipa: '/pʊl ˈaʊt/', g: 'phrasal', vi: 'rút lui', en: 'stop being involved in an activity', fam: [], syn: ['withdraw'], ant: [], col: ['pull out of the race'], ex: ['He had to pull out of the race with an injury.'] },
  { w: 'put off', pos: 'phr v', ipa: '/pʊt ˈɒf/', g: 'phrasal', vi: 'hoãn lại', en: 'delay, postpone', fam: [], syn: ['postpone'], ant: ['bring forward'], col: ['put off the match'], ex: ['The game was put off because of the rain.'] },
  { w: 'put up with', pos: 'phr v', ipa: '/pʊt ˈʌp wɪð/', g: 'phrasal', vi: 'chịu đựng', en: 'tolerate', fam: [], syn: ['tolerate', 'stand'], ant: [], col: ['put up with the noise'], ex: ['I can’t put up with his bad behaviour any more.'] },
  { w: 'take to', pos: 'phr v', ipa: '/ˈteɪk tə/', g: 'phrasal', vi: 'bắt đầu thích (thành thói quen)', en: 'start (as a habit); start to like', fam: [], syn: [], ant: ['go off'], col: ['take to sth immediately'], ex: ['She took to golf immediately.'] },
  { w: 'take up', pos: 'phr v', ipa: '/teɪk ˈʌp/', g: 'phrasal', vi: 'bắt đầu (môn thể thao, sở thích); chiếm (chỗ/thời gian)', en: 'start (a hobby, sport); fill an amount of space/time', fam: [], syn: [], ant: ['give up'], col: ['take up yoga', 'take up a lot of time'], ex: ['I took up yoga last year.', 'Training takes up most of my free time.'] },

  // ---------- Phrases and collocations ----------
  { w: 'best', pos: 'phrases', ipa: '/best/', g: 'phrase', vi: 'tốt nhất', en: 'make the best of sth; do your best; the best at sth/doing', fam: [], syn: [], ant: [], col: ['do your best', 'make the best of'], ex: ['Don’t worry about winning – just do your best.'] },
  { w: 'chance', pos: 'phrases', ipa: '/tʃɑːns/', g: 'phrase', vi: 'cơ hội; khả năng', en: 'have/take/get a chance to do; have a chance of doing; (little/no) chance of; a chance of a lifetime', fam: [], syn: ['opportunity'], ant: [], col: ['take a chance', 'a chance of a lifetime', 'stand a chance'], ex: ['We have no chance of winning the league this year.'] },
  { w: 'have a go', pos: 'phrases', ipa: '/hæv ə ˈɡəʊ/', g: 'phrase', vi: 'thử', en: 'your go (your turn); have a go (try)', fam: [], syn: ['have a try'], ant: [], col: ['It’s your go.', 'have a go at sth'], ex: ['Have a go at surfing – it’s great fun!'] },
  { w: 'height', pos: 'phrases', ipa: '/haɪt/', g: 'phrase', vi: 'chiều cao; đỉnh cao', en: 'in height; afraid of heights; the height of sth', fam: ['high (adj)'], syn: [], ant: [], col: ['afraid of heights', 'at the height of'], ex: ['Climbers can’t be afraid of heights.'] },
  { w: 'mad about', pos: 'phrases', ipa: '/ˈmæd əˈbaʊt/', g: 'phrase', vi: 'mê', en: 'mad about/on sth/sb/doing; go/become mad', fam: [], syn: ['crazy about', 'keen on'], ant: [], col: ['mad about football'], ex: ['My brother is mad about video games.'] },
  { w: 'take pleasure in', pos: 'phrases', ipa: '/ˈpleʒə(r)/', g: 'phrase', vi: 'thấy vui khi', en: 'take pleasure in sth/doing; gain/get pleasure from', fam: ['pleasant', 'please'], syn: ['enjoy'], ant: [], col: ['take pleasure in', 'get pleasure from'], ex: ['He takes great pleasure in beating his older brother at chess.'] },
  { w: 'popular with', pos: 'phrases', ipa: '/ˈpɒpjələ wɪð/', g: 'phrase', vi: 'được ưa chuộng bởi', en: 'popular with/among', fam: ['popularity'], syn: [], ant: ['unpopular'], col: ['popular with teenagers'], ex: ['Pickleball is becoming popular with young people.'] },
  { w: 'side', pos: 'phrases', ipa: '/saɪd/', g: 'phrase', vi: 'phía; phe', en: '(on) the opposite/far side; side with sb; on the winning/losing side', fam: [], syn: [], ant: [], col: ['on the winning side', 'side with sb'], ex: ['For once, I was on the winning side.'] },
  { w: 'talent', pos: 'phrases', ipa: '/ˈtælənt/', g: 'phrase', vi: 'tài năng', en: 'have a talent (for sth/doing); talent contest', fam: ['talented'], syn: ['gift'], ant: [], col: ['a talent for music', 'a talent show'], ex: ['She has a real talent for drawing.'] },
  { w: 'time', pos: 'phrases', ipa: '/taɪm/', g: 'phrase', vi: 'thời gian', en: 'on time; in time; spend time doing; take time to do; free/spare/leisure time; have a good time; for the time being', fam: [], syn: [], ant: [], col: ['spend time doing', 'in my spare time', 'have a good time', 'take up time'], ex: ['In my spare time, I enjoy playing badminton.'] },
  { w: 'turn', pos: 'phrases', ipa: '/tɜːn/', g: 'phrase', vi: 'lượt', en: 'in turn; take turns; your turn (to do)', fam: [], syn: ['go'], ant: [], col: ['take turns', 'it’s your turn'], ex: ['We took turns to roll the dice.'] },

  // ---------- Word patterns ----------
  { w: 'compete against/with/for/in', pos: 'v + prep', ipa: '/kəmˈpiːt/', g: 'pattern', vi: 'cạnh tranh, thi đấu', en: 'compete against/with sb; compete for/in sth', fam: [], syn: [], ant: [], col: [], ex: ['Twenty teams are competing for the cup.'] },
  { w: 'concentrate on', pos: 'v + prep', ipa: '/ˈkɒnsntreɪt ɒn/', g: 'pattern', vi: 'tập trung vào', en: 'concentrate on sth/doing', fam: ['concentration'], syn: ['focus on'], ant: [], col: [], ex: ['Concentrate on the ball!'] },
  { w: 'find it difficult to do', pos: 'pattern', ipa: '/ˈdɪfɪkəlt/', g: 'pattern', vi: 'thấy khó làm gì', en: 'difficult to do; find sth difficult; find it difficult to do', fam: [], syn: [], ant: ['find it easy'], col: [], ex: ['I find it difficult to stay motivated in winter.'] },
  { w: 'fond of', pos: 'adj + prep', ipa: '/fɒnd əv/', g: 'pattern', vi: 'thích', en: 'fond of sth/sb/doing', fam: [], syn: ['keen on'], ant: [], col: [], ex: ['She’s very fond of gardening.'] },
  { w: 'free to / from / of / for', pos: 'adj + pattern', ipa: '/friː/', g: 'pattern', vi: 'tự do; không có; miễn phí', en: 'free to do; free from/of sth; free for sb', fam: [], syn: [], ant: [], col: ['free of charge'], ex: ['Entry is free for children under five.'] },
  { w: 'interested in', pos: 'adj + prep', ipa: '/ˈɪntrəstɪd ɪn/', g: 'pattern', vi: 'quan tâm, thích', en: 'interested in sth/doing', fam: [], syn: ['keen on'], ant: [], col: [], ex: ['Are you interested in joining our team?'] },
  { w: 'involve / involved in', pos: 'v, adj + pattern', ipa: '/ɪnˈvɒlv/', g: 'pattern', vi: 'bao gồm; tham gia vào', en: 'involve sth/doing; involved in sth/doing', fam: ['involvement'], syn: [], ant: [], col: [], ex: ['The job involves travelling a lot.', 'He’s involved in a local football club.'] },
  { w: 'listen to', pos: 'v + prep', ipa: '/ˈlɪsn tə/', g: 'pattern', vi: 'nghe', en: 'listen to sth/sb', fam: [], syn: [], ant: [], col: [], ex: ['I listen to podcasts while I run.'] },
  { w: 'mean to do / mean doing', pos: 'v + pattern', ipa: '/miːn/', g: 'pattern', vi: 'định làm / có nghĩa là', en: 'mean to do (intend); this means that / means doing', fam: [], syn: [], ant: [], col: [], ex: ['I meant to call you, but I forgot.', 'Joining the team means training three times a week.'] },
  { w: 'prefer to do / doing', pos: 'v + pattern', ipa: '/prɪˈfɜː(r)/', g: 'pattern', vi: 'thích hơn', en: 'prefer to do (rather than do); prefer sth (rather than sth); prefer sth/doing (to sth/doing)', fam: ['preference'], syn: [], ant: [], col: [], ex: ['I prefer swimming to running.'] },
  { w: 'stop doing / to do', pos: 'v + pattern', ipa: '/stɒp/', g: 'pattern', vi: 'ngừng làm / dừng lại để làm', en: 'stop sth/doing; stop to do; stop sb from doing', fam: [], syn: [], ant: [], col: [], ex: ['He stopped playing football after his injury.', 'We stopped to have a drink.'] },
  { w: 'sure/certain of/that/to do', pos: 'adj + pattern', ipa: '/ʃʊə(r)/', g: 'pattern', vi: 'chắc chắn', en: 'make/be sure/certain that; sure/certain to do; sure/certain of sth', fam: [], syn: [], ant: ['unsure'], col: [], ex: ['They’re certain to win the league.'] },

  // ---------- Word formation ----------
  { w: 'allow', pos: 'word family', ipa: '/əˈlaʊ/', g: 'wordform', vi: 'cho phép', en: 'allow → disallow, allowance, allowable', fam: ['disallow (v) không công nhận (bàn thắng)', 'allowance (n) trợ cấp'], syn: ['permit'], ant: [], col: ['a goal was disallowed'], ex: ['The goal was disallowed for offside.'] },
  { w: 'associate', pos: 'word family', ipa: '/əˈsəʊʃieɪt/', g: 'wordform', vi: 'liên tưởng, liên kết', en: 'associate → disassociate, association, (un)associated', fam: ['association (n) hiệp hội', 'associated (adj)'], syn: [], ant: [], col: ['the Football Association'], ex: ['He’s a member of the national tennis association.'] },
  { w: 'competition / competitor', pos: 'word family', ipa: '/kəmˈpiːt/', g: 'wordform', vi: 'cuộc thi; người dự thi', en: 'compete → competition, competitor, competitive(ly)', fam: ['competition (n)', 'competitor (n)', 'competitive (adj) có tính cạnh tranh'], syn: [], ant: [], col: ['a highly competitive sport'], ex: ['She’s very competitive – she hates losing.'] },
  { w: 'enjoy', pos: 'word family', ipa: '/ɪnˈdʒɔɪ/', g: 'wordform', vi: 'thích thú', en: 'enjoy → enjoyment, enjoyable', fam: ['enjoyment (n)', 'enjoyable (adj) thú vị'], syn: [], ant: [], col: [], ex: ['It was a very enjoyable game.'] },
  { w: 'equip', pos: 'word family', ipa: '/ɪˈkwɪp/', g: 'wordform', vi: 'trang bị', en: 'equip → equipment, equipped', fam: ['equipment (n, không đếm được) dụng cụ', 'equipped (adj)'], syn: [], ant: [], col: ['sports equipment', 'well-equipped gym'], ex: ['Diving equipment is expensive. (✗ equipments)'] },
  { w: 'fortune', pos: 'word family', ipa: '/ˈfɔːtʃuːn/', g: 'wordform', vi: 'vận may; gia tài', en: 'fortune → misfortune, (un)fortunate(ly)', fam: ['misfortune (n) điều không may', 'fortunate (adj)', 'unfortunately (adv)'], syn: ['luck'], ant: [], col: [], ex: ['Unfortunately, the match was cancelled.'] },
  { w: 'interest', pos: 'word family', ipa: '/ˈɪntrəst/', g: 'wordform', vi: 'sự quan tâm', en: 'interest → (un)interesting(ly), interested', fam: ['interesting (adj)', 'uninteresting (adj)', 'interested (adj)'], syn: [], ant: [], col: [], ex: ['Chess can seem uninteresting to young children.'] },
  { w: 'know', pos: 'word family', ipa: '/nəʊ/', g: 'wordform', vi: 'biết', en: 'know → knowledge, (un)knowledgeable', fam: ['knowledge (n) kiến thức', 'knowledgeable (adj) hiểu biết'], syn: [], ant: [], col: [], ex: ['He’s very knowledgeable about football history.'] },
  { w: 'lose', pos: 'word family', ipa: '/luːz/', g: 'wordform', vi: 'thua; mất', en: 'lose → lost, loss, loser', fam: ['loss (n) trận thua; sự mất mát', 'loser (n)'], syn: [], ant: ['win'], col: ['a 3–0 loss'], ex: ['It was their third loss in a row.'] },
  { w: 'maintain', pos: 'word family', ipa: '/meɪnˈteɪn/', g: 'wordform', vi: 'duy trì, bảo dưỡng', en: 'maintain → maintenance', fam: ['maintenance (n)'], syn: [], ant: [], col: [], ex: ['The pitch needs regular maintenance.'] },
  { w: 'medal', pos: 'word family', ipa: '/ˈmedl/', g: 'wordform', vi: 'huy chương', en: 'medal → medallist, medallion', fam: ['medallist (n) người đoạt huy chương'], syn: [], ant: [], col: ['an Olympic gold medallist'], ex: ['She’s a two-time Olympic medallist.'] },
  { w: 'oppose', pos: 'word family', ipa: '/əˈpəʊz/', g: 'wordform', vi: 'phản đối, đối đầu', en: 'oppose → opposition, opponent, opposite, opposing', fam: ['opposition (n)', 'opponent (n) đối thủ', 'opposite (adj, prep)', 'opposing (adj) đối phương'], syn: [], ant: [], col: ['the opposing team'], ex: ['The opposing team scored in the last minute.'] },
  { w: 'practice / practise', pos: 'word family', ipa: '/ˈpræktɪs/', g: 'wordform', vi: 'luyện tập', en: 'practice (n) → practise (v), (im)practical(ly)', fam: ['practise (v, Anh-Anh)', 'practical (adj) thực tế', 'impractical (adj)'], syn: [], ant: [], col: ['football practice'], ex: ['You need to practise every day.'] },
  { w: 'train', pos: 'word family', ipa: '/treɪn/', g: 'wordform', vi: 'tập luyện', en: 'train → retrain, trainer, training', fam: ['trainer (n) huấn luyện viên', 'training (n)', 'retrain (v)'], syn: [], ant: [], col: ['a personal trainer'], ex: ['He goes to training three times a week.'] },
];
