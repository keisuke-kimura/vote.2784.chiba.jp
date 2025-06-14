import { VotingLocation } from '@/types/voting';

export const votingLocations: VotingLocation[] = [
  {
    id: 1,
    name: '市役所6階602会議室',
    address: '船橋市湊町2丁目10番25号',
    period: '6月16日〜21日',
    hours: '8:30〜20:00',
    notes: '毎日開設',
    isDaily: true
  },
  {
    id: 2,
    name: 'フェイス5階',
    address: '船橋市本町1丁目3番1号',
    period: '6月16日〜21日',
    hours: '6月16-17: 8:30〜20:00, 6月18-20: 8:30〜21:00, 6月21: 8:30〜20:00',
    notes: '毎日開設',
    isDaily: true
  },
  {
    id: 3,
    name: '習志野台出張所2階',
    address: '船橋市習志野台2丁目45番18号',
    period: '6月16日〜21日',
    hours: '8:30〜20:00',
    isDaily: true
  },
  {
    id: 4,
    name: '西船橋出張所3階',
    address: '船橋市西船4丁目17番3号',
    period: '6月16日〜21日',
    hours: '8:30〜20:00',
    isDaily: true
  },
  {
    id: 5,
    name: '二和公民館2階',
    address: '船橋市二和東5丁目26番1号',
    period: '6月16日〜21日',
    hours: '9:00〜20:00',
    isDaily: true
  },
  {
    id: 6,
    name: '東部公民館3階',
    address: '船橋市前原西2丁目21番21号',
    period: '6月16日〜21日',
    hours: '9:00〜20:00',
    isDaily: true
  },
  {
    id: 7,
    name: '高根台公民館3階',
    address: '船橋市高根台1丁目2番5号',
    period: '6月19日〜21日',
    hours: '9:00〜20:00',
    isDaily: false
  },
  {
    id: 8,
    name: 'イオンモール船橋2階',
    address: '船橋市山手1丁目1番8号',
    period: '6月16日〜21日',
    hours: '10:00〜20:00',
    isDaily: true
  },
  {
    id: 9,
    name: '北部公民館講堂',
    address: '船橋市豊富町4番地',
    period: '6月20日〜21日',
    hours: '9:00〜17:00',
    isDaily: false
  }
];