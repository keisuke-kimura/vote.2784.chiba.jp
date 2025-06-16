export interface Candidate {
  name: string;
  votes: number;
  percentage: number;
  party?: string;
  isWinner?: boolean;
}

export interface ElectionData {
  year: number;
  date: string;
  totalVoters: number;
  totalVotes: number;
  turnout: number;
  invalidVotes?: number;
  candidates: Candidate[];
  ageGroupTurnout?: {
    group: string;
    turnout: number;
  }[];
  districtTurnout?: {
    district: string;
    turnout: number;
    totalVoters?: number;
  }[];
}

export const electionHistory: ElectionData[] = [
  {
    year: 2021,
    date: "2021年6月20日",
    totalVoters: 521228,
    totalVotes: 150539,
    turnout: 28.88,
    candidates: [
      {
        name: "松戸 徹",
        votes: 109019,
        percentage: 72.42,
        party: "無所属（現職）",
        isWinner: true
      },
      {
        name: "丸山 慎一",
        votes: 27744,
        percentage: 18.43,
        party: "無所属"
      },
      {
        name: "門田 正則",
        votes: 11045,
        percentage: 7.34,
        party: "無所属"
      }
    ],
    ageGroupTurnout: [
      { group: "18-19歳", turnout: 22.92 },
      { group: "20-24歳", turnout: 15.13 },
      { group: "25-29歳", turnout: 15.33 },
      { group: "30-34歳", turnout: 19.89 },
      { group: "35-39歳", turnout: 23.23 },
      { group: "40-44歳", turnout: 25.73 },
      { group: "45-49歳", turnout: 27.59 },
      { group: "50-54歳", turnout: 29.60 },
      { group: "55-59歳", turnout: 32.39 },
      { group: "60-64歳", turnout: 35.56 },
      { group: "65-69歳", turnout: 39.88 },
      { group: "70-74歳", turnout: 41.10 },
      { group: "75-79歳", turnout: 41.05 },
      { group: "80歳以上", turnout: 30.10 }
    ],
    districtTurnout: [
      { district: "緑台町会会館", turnout: 34.19 },
      { district: "西海神小学校", turnout: 33.10 },
      { district: "習志野台公民館", turnout: 33.43 },
      { district: "高根台第二小学校", turnout: 32.47 },
      { district: "フェイス5階", turnout: 31.37 },
      { district: "前原小学校", turnout: 31.46 },
      { district: "船橋中学校", turnout: 30.66 },
      { district: "市場小学校", turnout: 26.05 },
      { district: "法典西小学校", turnout: 24.27 },
      { district: "二和小学校", turnout: 23.82 },
      { district: "高根小学校", turnout: 23.62 },
      { district: "海神中央町会会館", turnout: 23.35 },
      { district: "湊中学校", turnout: 22.90 },
      { district: "本中山6・7丁目集会所", turnout: 21.52 }
    ]
  },
  {
    year: 2017,
    date: "2017年6月18日",
    totalVoters: 508344,
    totalVotes: 142913,
    turnout: 28.1,
    candidates: [
      {
        name: "松戸 徹",
        votes: 86712,
        percentage: 60.66,
        party: "無所属（現職）",
        isWinner: true
      },
      {
        name: "西尾 憲一",
        votes: 37261,
        percentage: 26.07,
        party: "無所属"
      },
      {
        name: "薮内 好",
        votes: 10129,
        percentage: 7.09,
        party: "無所属"
      },
      {
        name: "門田 正則",
        votes: 6811,
        percentage: 4.77,
        party: "無所属"
      }
    ],
    ageGroupTurnout: [
      { group: "18-19歳", turnout: 18.83 },
      { group: "20-24歳", turnout: 12.74 },
      { group: "25-29歳", turnout: 12.68 },
      { group: "30-34歳", turnout: 16.27 },
      { group: "35-39歳", turnout: 19.97 },
      { group: "40-44歳", turnout: 22.70 },
      { group: "45-49歳", turnout: 25.19 },
      { group: "50-54歳", turnout: 28.13 },
      { group: "55-59歳", turnout: 30.56 },
      { group: "60-64歳", turnout: 35.36 },
      { group: "65-69歳", turnout: 41.19 },
      { group: "70-74歳", turnout: 45.26 },
      { group: "75-79歳", turnout: 46.96 },
      { group: "80歳以上", turnout: 33.00 }
    ],
    districtTurnout: [
      { district: "緑台町会会館", turnout: 37.37 },
      { district: "船橋中学校", turnout: 34.45 },
      { district: "フェイス5階", turnout: 31.72 },
      { district: "習志野台公民館", turnout: 30.44 },
      { district: "高根台第二小学校", turnout: 30.28 },
      { district: "西海神小学校", turnout: 29.79 },
      { district: "前原小学校", turnout: 28.59 },
      { district: "高根小学校", turnout: 27.73 },
      { district: "湊中学校", turnout: 26.52 },
      { district: "二和小学校", turnout: 26.23 },
      { district: "市場小学校", turnout: 24.82 },
      { district: "海神中央町会会館", turnout: 22.37 },
      { district: "法典西小学校", turnout: 21.18 },
      { district: "本中山6・7丁目集会所", turnout: 18.83 }
    ]
  },
  {
    year: 2013,
    date: "2013年6月23日",
    totalVoters: 486751,
    totalVotes: 168186,
    turnout: 34.55,
    candidates: [
      {
        name: "松戸 徹",
        votes: 57549,
        percentage: 34.21,
        party: "無所属",
        isWinner: true
      },
      {
        name: "西尾 けんいち",
        votes: 52060,
        percentage: 30.95,
        party: "無所属"
      },
      {
        name: "斎藤 和子",
        votes: 18054,
        percentage: 10.74,
        party: "無所属"
      },
      {
        name: "野屋敷 いと子",
        votes: 17460,
        percentage: 10.38,
        party: "無所属"
      },
      {
        name: "安藤 信宏",
        votes: 15336,
        percentage: 9.12,
        party: "無所属"
      },
      {
        name: "門田 正則",
        votes: 4716,
        percentage: 2.80,
        party: "無所属"
      }
    ],
    ageGroupTurnout: [
      { group: "20-24歳", turnout: 17.12 },
      { group: "25-29歳", turnout: 16.08 },
      { group: "30-34歳", turnout: 21.18 },
      { group: "35-39歳", turnout: 25.86 },
      { group: "40-44歳", turnout: 27.96 },
      { group: "45-49歳", turnout: 31.34 },
      { group: "50-54歳", turnout: 34.59 },
      { group: "55-59歳", turnout: 38.62 },
      { group: "60-64歳", turnout: 44.26 },
      { group: "65-69歳", turnout: 50.97 },
      { group: "70-74歳", turnout: 56.55 },
      { group: "75-79歳", turnout: 54.83 },
      { group: "80歳以上", turnout: 38.34 }
    ],
    districtTurnout: [
      { district: "緑台町会会館", turnout: 44.65 },
      { district: "習志野台公民館", turnout: 39.71 },
      { district: "船橋中学校", turnout: 38.62 },
      { district: "フェイス5階", turnout: 36.76 },
      { district: "西海神小学校", turnout: 36.15 },
      { district: "高根台第二小学校", turnout: 35.83 },
      { district: "前原小学校", turnout: 35.36 },
      { district: "高根小学校", turnout: 34.82 },
      { district: "海神中央町会会館", turnout: 31.85 },
      { district: "二和小学校", turnout: 31.25 },
      { district: "湊中学校", turnout: 29.25 },
      { district: "本中山6・7丁目集会所", turnout: 27.03 }
    ]
  }
];

// 統計情報を計算する関数
export function calculateElectionStats(data: ElectionData[]) {
  const turnoutTrend = data.map(election => ({
    year: election.year,
    turnout: election.turnout
  }));

  const averageTurnout = data.reduce((sum, election) => sum + election.turnout, 0) / data.length;

  const latestAgeGroupData = data[0].ageGroupTurnout || [];
  
  return {
    turnoutTrend,
    averageTurnout,
    latestAgeGroupData,
    totalElections: data.length
  };
}