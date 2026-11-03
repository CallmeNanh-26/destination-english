// Book catalogue. `content` is filled in as units are written.
import g01 from './b1/g01.js';
import g02 from './b1/g02.js';
import u03 from './b1/u03.js';
import g04 from './b1/g04.js';
import g05 from './b1/g05.js';
import u06 from './b1/u06.js';
import g07 from './b1/g07.js';
import g08 from './b1/g08.js';
import u09 from './b1/u09.js';
import g10 from './b1/g10.js';
import g11 from './b1/g11.js';
import u12 from './b1/u12.js';
import g13 from './b1/g13.js';
import g14 from './b1/g14.js';
import u15 from './b1/u15.js';
import g16 from './b1/g16.js';
import g17 from './b1/g17.js';
import u18 from './b1/u18.js';
import g19 from './b1/g19.js';
import g20 from './b1/g20.js';
import u21 from './b1/u21.js';
import g22 from './b1/g22.js';
import g23 from './b1/g23.js';
import u24 from './b1/u24.js';
import g25 from './b1/g25.js';
import g26 from './b1/g26.js';
import u27 from './b1/u27.js';
import g28 from './b1/g28.js';
import g29 from './b1/g29.js';
import u30 from './b1/u30.js';
import g31 from './b1/g31.js';
import g32 from './b1/g32.js';
import u33 from './b1/u33.js';
import g34 from './b1/g34.js';
import g35 from './b1/g35.js';
import u36 from './b1/u36.js';
import g37 from './b1/g37.js';
import g38 from './b1/g38.js';
import u39 from './b1/u39.js';
import g40 from './b1/g40.js';
import g41 from './b1/g41.js';
import u42 from './b1/u42.js';

const b1Units = [
  [1, 'g', 'Present simple, present continuous, stative verbs'],
  [2, 'g', 'Past simple, past continuous, used to'],
  [3, 'v', 'Fun and games'],
  [4, 'g', 'Present perfect simple, present perfect continuous'],
  [5, 'g', 'Past perfect simple, past perfect continuous'],
  [6, 'v', 'Learning and doing'],
  [7, 'g', 'Future time (present continuous, will, be going to, present simple)'],
  [8, 'g', 'Prepositions of time and place'],
  [9, 'v', 'Coming and going'],
  [10, 'g', 'The passive 1'],
  [11, 'g', 'The passive 2'],
  [12, 'v', 'Friends and relations'],
  [13, 'g', 'Countable and uncountable nouns'],
  [14, 'g', 'Articles'],
  [15, 'v', 'Buying and selling'],
  [16, 'g', 'Pronouns and possessive determiners'],
  [17, 'g', 'Relative clauses'],
  [18, 'v', 'Inventions and discoveries'],
  [19, 'g', 'Modals 1: ability, permission, advice'],
  [20, 'g', 'Modals 2: obligation, probability, possibility'],
  [21, 'v', 'Sending and receiving'],
  [22, 'g', 'Modals 3: the modal perfect'],
  [23, 'g', 'Questions, question tags, indirect questions'],
  [24, 'v', 'People and daily life'],
  [25, 'g', 'So and such, too and enough'],
  [26, 'g', 'Comparatives and superlatives'],
  [27, 'v', 'Working and earning'],
  [28, 'g', 'Conditionals 1: zero, first, second'],
  [29, 'g', 'Conditionals 2: third'],
  [30, 'v', 'Body and lifestyle'],
  [31, 'g', 'Reported speech'],
  [32, 'g', 'Reported questions, orders, requests'],
  [33, 'v', 'Creating and building'],
  [34, 'g', 'Direct and indirect objects'],
  [35, 'g', 'Wish'],
  [36, 'v', 'Nature and the universe'],
  [37, 'g', '-ing and infinitive'],
  [38, 'g', 'Both, either, neither, so, nor'],
  [39, 'v', 'Laughing and crying'],
  [40, 'g', 'Connectives'],
  [41, 'g', 'The causative'],
  [42, 'v', 'Problems and solutions'],
];

const content = { 'b1-u01': g01, 'b1-u02': g02, 'b1-u03': u03, 'b1-u04': g04, 'b1-u05': g05, 'b1-u06': u06,
  'b1-u07': g07, 'b1-u08': g08, 'b1-u09': u09, 'b1-u10': g10, 'b1-u11': g11, 'b1-u12': u12,
  'b1-u13': g13, 'b1-u14': g14, 'b1-u15': u15, 'b1-u16': g16, 'b1-u17': g17, 'b1-u18': u18,
  'b1-u19': g19, 'b1-u20': g20, 'b1-u21': u21, 'b1-u22': g22, 'b1-u23': g23, 'b1-u24': u24,
  'b1-u25': g25, 'b1-u26': g26, 'b1-u27': u27, 'b1-u28': g28, 'b1-u29': g29, 'b1-u30': u30,
  'b1-u31': g31, 'b1-u32': g32, 'b1-u33': u33, 'b1-u34': g34, 'b1-u35': g35, 'b1-u36': u36,
  'b1-u37': g37, 'b1-u38': g38, 'b1-u39': u39, 'b1-u40': g40, 'b1-u41': g41, 'b1-u42': u42,
};

export const books = [
  {
    id: 'b1',
    title: 'Destination B1',
    units: b1Units.map(([no, kind, title]) => {
      const id = `b1-u${String(no).padStart(2, '0')}`;
      return { id, no, kind: kind === 'v' ? 'vocab' : 'grammar', title, content: content[id] || null };
    }),
  },
  { id: 'b2', title: 'Destination B2', units: [], soon: true },
  { id: 'c1', title: 'Destination C1 & C2', units: [], soon: true },
];

export const allUnits = books.flatMap((b) => b.units);
export const findUnit = (id) => allUnits.find((u) => u.id === id);
