import { PolicyCategory, Candidate } from '@/types/policy';

export const policyCategories: PolicyCategory[] = [
  { id: 'education', name: '教育政策', description: '教育制度の改革と質の向上' },
  { id: 'childcare', name: '子育て支援', description: '子育て環境の整備と支援制度' },
  { id: 'welfare', name: '福祉政策', description: '高齢者・障害者支援と社会保障' },
  { id: 'economy', name: '経済政策', description: '地域経済の活性化と雇用創出' },
  { id: 'environment', name: '環境政策', description: '環境保護と持続可能な街づくり' },
  { id: 'infrastructure', name: 'インフラ整備', description: '道路・交通・公共施設の整備' },
  { id: 'safety', name: '安全・防災', description: '治安維持と災害対策' },
  { id: 'culture', name: '文化・スポーツ', description: '文化振興とスポーツ推進' }
];


export const candidates: Candidate[] = [
  {
    id: 1,
    name: 'まつど徹',
    party: '無所属（推薦なし）',
    image: 'https://www.city.funabashi.lg.jp/shisei/shoukai/001/p004832_d/img/004.jpg',
    bio: '船橋市職員35年、副市長4年、市長3期12年。東京理科大物理学科卒。',
    experience: ['船橋市職員 35年', '副市長 4年', '市長 3期12年', '全国都市公園整備促進協議会会長', '関東地区港湾整備振興協議会会長'],
    age: 70,
    birthplace: '船橋市',
    previousRole: '船橋市長',
    vision: '日本一元気な船橋、教育・福祉・環境・都市基盤整備の基盤強化',
    background: '11年連続市への愛着度8割超維持、行政経験を活かした安定運営を実現してきました。',
    career: '東京理科大物理学科卒業後、船橋市職員として35年勤務。副市長を4年務めた後、市長として3期12年間、市政運営を担当。全国都市公園整備促進協議会会長・関東地区港湾整備振興協議会会長を歴任。',
    website: 'https://tohrumatsudo.jp/',
    sns: {
      twitter: '@t_matsudo11',
      instagram: '@funabashi.shicho'
    },
    policies: [
      // 教育・子育て - 親子の幸せ応援プロジェクト
      {
        id: 'edu-matsudo-1',
        categoryId: 'education',
        title: '市独自スクールカウンセラー・ソーシャルワーカー・ロイヤー体制強化',
        description: 'いじめ・不登校支援の専門職配置',
        details: '市独自のスクールカウンセラー・ソーシャルワーカー・ロイヤー体制を強化し、いじめ・不登校問題に対応。',
        priority: 'high',
        tags: ['教育支援', 'カウンセラー', '不登校対策', 'いじめ対策']
      },
      {
        id: 'edu-matsudo-2',
        categoryId: 'education',
        title: '全校で芸術鑑賞教室実施',
        description: '体験格差解消のための文化教育',
        details: '全校で芸術鑑賞教室を実施し、子どもたちの体験格差を解消。豊かな感性を育む教育環境を提供。',
        priority: 'medium',
        tags: ['芸術教育', '体験格差', '文化振興']
      },
      {
        id: 'edu-matsudo-3',
        categoryId: 'education',
        title: '校内教育支援センター充実・西部地区サポートルーム新設',
        description: '不登校児童生徒への支援拡充',
        details: '校内教育支援センターを充実させ、西部地区にサポートルームを新設。不登校児童生徒への支援体制を強化。',
        priority: 'high',
        tags: ['教育支援', '不登校対策', 'サポートルーム']
      },
      {
        id: 'edu-matsudo-4',
        categoryId: 'education',
        title: '副教材無償化',
        description: '保護者の経済的負担軽減',
        details: '副教材の無償化により、保護者の経済的負担を軽減し、教育の機会均等を実現。',
        priority: 'medium',
        tags: ['無償化', '経済支援', '教育格差']
      },
      {
        id: 'child-matsudo-1',
        categoryId: 'childcare',
        title: '市独自児童相談所をR8年開設',
        description: '児童虐待・育児相談への迅速対応',
        details: '令和8年に市独自の児童相談所を開設し、児童虐待や育児相談に迅速に対応できる体制を構築。',
        priority: 'high',
        tags: ['児童相談所', '子育て支援', '虐待防止']
      },
      {
        id: 'child-matsudo-2',
        categoryId: 'childcare',
        title: 'ヤングケアラー支援・学習支援・受験料補助',
        description: '困難を抱える子どもへの総合支援',
        details: 'ヤングケアラーへの支援、学習支援、受験料補助など、困難を抱える子どもたちへの総合的な支援を実施。',
        priority: 'high',
        tags: ['ヤングケアラー', '学習支援', '経済支援']
      },
      {
        id: 'child-matsudo-3',
        categoryId: 'childcare',
        title: '朝7時から登校可能体制で小一の壁解消',
        description: '働く保護者のための早朝受け入れ',
        details: '朝7時から登校可能な体制を整備し、働く保護者の「小一の壁」問題を解消。',
        priority: 'high',
        tags: ['小一の壁', '早朝受け入れ', '子育て支援']
      },
      {
        id: 'child-matsudo-4',
        categoryId: 'childcare',
        title: '保育園・放課後ルーム待機児童ゼロ',
        description: '待機児童問題の完全解決',
        details: '保育園・放課後ルームの待機児童ゼロを達成し、すべての子どもに保育サービスを提供。',
        priority: 'high',
        tags: ['待機児童', '保育園', '放課後ルーム']
      },
      {
        id: 'child-matsudo-5',
        categoryId: 'childcare',
        title: 'プレーパーク活動支援',
        description: '子どもの遊び場づくり',
        details: 'プレーパーク活動を支援し、子どもたちが自由に遊べる環境を整備。',
        priority: 'medium',
        tags: ['プレーパーク', '遊び場', '子育て環境']
      },
      {
        id: 'child-matsudo-6',
        categoryId: 'childcare',
        title: '幼稚園・保育園運営支援',
        description: '就学前教育・保育の質向上',
        details: '幼稚園・保育園の運営を支援し、就学前教育・保育の質を向上。',
        priority: 'medium',
        tags: ['幼稚園', '保育園', '運営支援']
      },
      // 行政改革
      {
        id: 'gov-matsudo-1',
        categoryId: 'governance',
        title: '24時間オンライン申請・書かない窓口づくり',
        description: 'デジタル化による利便性向上',
        details: '24時間オンライン申請システムと書かない窓口づくりにより、市民サービスの利便性を大幅に向上。',
        priority: 'high',
        tags: ['DX', 'オンライン申請', '行政改革']
      },
      {
        id: 'gov-matsudo-2',
        categoryId: 'governance',
        title: '業務・事業見直し・効率化で接遇日本一',
        description: '市民サービスの質向上',
        details: '業務・事業の見直しと効率化を進め、接遇日本一の市役所を実現。',
        priority: 'high',
        tags: ['業務効率化', '接遇', 'サービス向上']
      },
      {
        id: 'gov-matsudo-3',
        categoryId: 'governance',
        title: 'DX技術活用で市民サービス向上',
        description: 'デジタル技術による行政革新',
        details: 'DX技術を積極的に活用し、市民サービスの質と利便性を向上。',
        priority: 'high',
        tags: ['DX', 'デジタル化', '行政革新']
      },
      // まちづくり
      {
        id: 'infra-matsudo-1',
        categoryId: 'infrastructure',
        title: '交通ビッグデータ活用で渋滞緩和・道路環境整備',
        description: 'スマートな交通システム構築',
        details: '交通ビッグデータを活用して渋滞を緩和し、効率的な道路環境を整備。',
        priority: 'high',
        tags: ['ビッグデータ', '渋滞対策', '道路整備']
      },
      {
        id: 'infra-matsudo-2',
        categoryId: 'infrastructure',
        title: 'グリーンスローモビリティ拡大・自動運転検討',
        description: '環境配慮型の新交通システム',
        details: 'グリーンスローモビリティを拡大し、自動運転技術の導入を検討。環境に優しい交通システムを構築。',
        priority: 'medium',
        tags: ['グリーンモビリティ', '自動運転', '環境配慮']
      },
      {
        id: 'infra-matsudo-3',
        categoryId: 'infrastructure',
        title: 'ゾーン30プラス整備で人優先安全空間',
        description: '歩行者優先の安全なまちづくり',
        details: 'ゾーン30プラスを整備し、人優先の安全な空間を創出。歩行者が安心して暮らせるまちづくり。',
        priority: 'high',
        tags: ['交通安全', 'ゾーン30', '歩行者優先']
      },
      {
        id: 'infra-matsudo-4',
        categoryId: 'infrastructure',
        title: '海老川上流地区メディカルタウン・東葉高速線新駅着工',
        description: '医療・健康をテーマとした新たなまちづくり',
        details: '海老川上流地区で医療・健康をテーマとしたメディカルタウンを開発。東葉高速線新駅の着工により、アクセスを向上。',
        priority: 'high',
        tags: ['メディカルタウン', '新駅', 'まちづくり']
      },
      {
        id: 'infra-matsudo-5',
        categoryId: 'infrastructure',
        title: '海岸保全施設に国費300億円確保',
        description: '津波・高潮対策の大規模整備',
        details: '海岸保全施設の整備に国費300億円を確保。津波・高潮から市民を守る防災インフラを強化。',
        priority: 'high',
        tags: ['防災', '海岸保全', '国費活用']
      },
      // 医療・福祉
      {
        id: 'welfare-matsudo-1',
        categoryId: 'welfare',
        title: '地域包括ケアシステム充実で健康寿命日本一',
        description: '高齢者が安心して暮らせる地域づくり',
        details: '地域包括ケアシステムを充実させ、高齢者が住み慣れた地域で暮らし続けられる環境を整備。健康寿命日本一を目指す。',
        priority: 'high',
        tags: ['地域包括ケア', '健康寿命', '高齢者支援']
      },
      {
        id: 'welfare-matsudo-2',
        categoryId: 'welfare',
        title: 'シルバーリハビリ体操普及・元気度チェック',
        description: '高齢者の健康維持・介護予防',
        details: 'シルバーリハビリ体操の普及と元気度チェックにより、高齢者の健康維持と介護予防を推進。',
        priority: 'medium',
        tags: ['介護予防', 'リハビリ', '健康維持']
      },
      {
        id: 'welfare-matsudo-3',
        categoryId: 'welfare',
        title: '健康ポイント充実で健康寿命日本一',
        description: '市民の健康づくりインセンティブ',
        details: '健康ポイント制度を充実させ、市民の健康づくりを促進。健康寿命日本一の実現を目指す。',
        priority: 'medium',
        tags: ['健康ポイント', '健康づくり', 'インセンティブ']
      },
      {
        id: 'welfare-matsudo-4',
        categoryId: 'welfare',
        title: '障害者雇用・就労支援強化',
        description: '障害者の社会参加促進',
        details: '障害者の雇用・就労支援を強化し、誰もが活躍できる共生社会を実現。',
        priority: 'high',
        tags: ['障害者支援', '雇用', '就労支援']
      },
      {
        id: 'welfare-matsudo-5',
        categoryId: 'welfare',
        title: '精神障害対応包括ケア',
        description: '精神障害者への総合的支援',
        details: '精神障害に対応した包括的なケアシステムを構築し、当事者と家族を支援。',
        priority: 'high',
        tags: ['精神障害', '包括ケア', '家族支援']
      },
      {
        id: 'welfare-matsudo-6',
        categoryId: 'welfare',
        title: '医療的ケア児者短期入所確保',
        description: '医療的ケアが必要な方への支援',
        details: '医療的ケア児者の短期入所施設を確保し、家族の負担軽減とレスパイトケアを提供。',
        priority: 'high',
        tags: ['医療的ケア', '短期入所', 'レスパイト']
      },
      {
        id: 'welfare-matsudo-7',
        categoryId: 'welfare',
        title: '5歳児健診導入',
        description: '発達障害の早期発見・支援',
        details: '5歳児健診を導入し、発達障害の早期発見と適切な支援につなげる。',
        priority: 'high',
        tags: ['健診', '発達障害', '早期発見']
      },
      {
        id: 'welfare-matsudo-8',
        categoryId: 'welfare',
        title: '若年がん患者在宅療養支援',
        description: '若年がん患者への経済的支援',
        details: '若年がん患者の在宅療養を支援し、治療と生活の両立をサポート。',
        priority: 'medium',
        tags: ['がん支援', '在宅療養', '若年者']
      },
      {
        id: 'welfare-matsudo-9',
        categoryId: 'welfare',
        title: '帯状疱疹ワクチン助成継続',
        description: '高齢者の健康維持支援',
        details: '帯状疱疹ワクチンへの助成を継続し、高齢者の健康維持を支援。',
        priority: 'medium',
        tags: ['ワクチン', '助成', '高齢者']
      },
      {
        id: 'welfare-matsudo-10',
        categoryId: 'welfare',
        title: 'LGBT理解促進・多文化共生',
        description: '多様性を尊重する社会づくり',
        details: 'LGBT理解促進と多文化共生を推進し、誰もが自分らしく生きられる社会を実現。',
        priority: 'medium',
        tags: ['LGBT', '多文化共生', 'ダイバーシティ']
      },
      // 産業・経済
      {
        id: 'eco-matsudo-1',
        categoryId: 'economy',
        title: '農水産物（ニンジン・梨・枝豆・小松菜・海苔・ホンビノス貝等）魅力発信強化',
        description: '地場産品のブランド化推進',
        details: '船橋産の農水産物（ニンジン・梨・枝豆・小松菜・海苔・ホンビノス貝等）の魅力を発信し、ブランド価値を向上。',
        priority: 'high',
        tags: ['農水産物', 'ブランド化', '地産地消']
      },
      {
        id: 'eco-matsudo-2',
        categoryId: 'economy',
        title: '異業種交流会「未来ミーティング」で若手ネットワーク形成',
        description: '若手起業家・経営者の支援',
        details: '異業種交流会「未来ミーティング」を開催し、若手起業家・経営者のネットワーク形成を支援。',
        priority: 'medium',
        tags: ['異業種交流', '若手支援', 'ネットワーク']
      },
      {
        id: 'eco-matsudo-3',
        categoryId: 'economy',
        title: '女性・多世代起業支援・企業マッチング',
        description: '多様な起業・創業支援',
        details: '女性や多世代の起業を支援し、企業マッチングにより新たなビジネス機会を創出。',
        priority: 'medium',
        tags: ['起業支援', '女性活躍', 'マッチング']
      },
      {
        id: 'culture-matsudo-1',
        categoryId: 'culture',
        title: '音楽のまちプロジェクト',
        description: '音楽文化による地域活性化',
        details: '音楽のまちプロジェクトを推進し、音楽文化による地域の活性化と市民の心の豊かさを育む。',
        priority: 'high',
        tags: ['音楽', '文化振興', 'まちづくり']
      },
      {
        id: 'culture-matsudo-2',
        categoryId: 'culture',
        title: '千葉ジェッツ・クボタスピアーズ連携強化',
        description: 'プロスポーツによる地域振興',
        details: '千葉ジェッツ（バスケットボール）・クボタスピアーズ（ラグビー）との連携を強化し、スポーツによる地域振興を推進。',
        priority: 'medium',
        tags: ['プロスポーツ', '地域連携', 'スポーツ振興']
      },
      {
        id: 'culture-matsudo-3',
        categoryId: 'culture',
        title: '取掛西貝塚国指定史跡',
        description: '文化財保護と活用',
        details: '取掛西貝塚の国指定史跡化を進め、貴重な文化財を保護・活用。',
        priority: 'medium',
        tags: ['文化財', '史跡', '歴史']
      },
      // 防災
      {
        id: 'safety-matsudo-1',
        categoryId: 'safety',
        title: '国費300億円で津波・高潮対策海岸保全施設耐震化',
        description: '大規模災害への備え',
        details: '国費300億円を活用し、津波・高潮対策のための海岸保全施設を耐震化。大規模災害から市民を守る。',
        priority: 'high',
        tags: ['津波対策', '高潮対策', '耐震化']
      },
      {
        id: 'safety-matsudo-2',
        categoryId: 'safety',
        title: '約100避難所に太陽光・蓄電池設置',
        description: '災害時の電源確保',
        details: '約100か所の避難所に太陽光発電と蓄電池を設置し、災害時の電源を確保。',
        priority: 'high',
        tags: ['避難所', '太陽光', '災害対策']
      },
      {
        id: 'safety-matsudo-3',
        categoryId: 'safety',
        title: '木造住宅耐震診断・改修助成拡大',
        description: '住宅の耐震化促進',
        details: '木造住宅の耐震診断・改修への助成を拡大し、地震に強い住宅を増やす。',
        priority: 'high',
        tags: ['耐震化', '助成', '住宅']
      },
      {
        id: 'safety-matsudo-4',
        categoryId: 'safety',
        title: '全避難所に液体歯磨き・液体ミルク配備',
        description: '避難生活の質向上',
        details: '全避難所に液体歯磨きと液体ミルクを配備し、災害時の避難生活の質を向上。',
        priority: 'medium',
        tags: ['避難所', '備蓄', '生活支援']
      },
      {
        id: 'safety-matsudo-5',
        categoryId: 'safety',
        title: '住まい防犯対策補助・電話de詐欺撲滅強化',
        description: '日常の安全・安心確保',
        details: '住まいの防犯対策への補助と電話de詐欺撲滅対策を強化し、市民の日常生活の安全を守る。',
        priority: 'medium',
        tags: ['防犯', '詐欺対策', '補助']
      },
      {
        id: 'env-matsudo-1',
        categoryId: 'environment',
        title: 'CO₂実質ゼロ公共施設',
        description: '脱炭素社会への取り組み',
        details: '公共施設のCO₂排出を実質ゼロにし、脱炭素社会の実現に向けて率先して取り組む。',
        priority: 'high',
        tags: ['脱炭素', 'CO2削減', '環境']
      },
      {
        id: 'env-matsudo-2',
        categoryId: 'environment',
        title: 'ふなばしエコカレッジ',
        description: '環境教育の推進',
        details: 'ふなばしエコカレッジを通じて、市民の環境意識を高め、持続可能な社会づくりを推進。',
        priority: 'medium',
        tags: ['環境教育', 'エコ', '市民啓発']
      },
      {
        id: 'env-matsudo-3',
        categoryId: 'environment',
        title: 'クーリングシェルター確保',
        description: '熱中症対策の拠点整備',
        details: 'クーリングシェルターを確保し、猛暑日の熱中症対策拠点として市民の健康を守る。',
        priority: 'high',
        tags: ['熱中症対策', 'クーリング', '健康']
      },
      {
        id: 'safety-matsudo-6',
        categoryId: 'safety',
        title: 'デジタルハザードマップ',
        description: '災害情報の見える化',
        details: 'デジタルハザードマップを整備し、災害リスク情報を分かりやすく市民に提供。',
        priority: 'high',
        tags: ['ハザードマップ', 'デジタル', '防災情報']
      },
      {
        id: 'safety-matsudo-7',
        categoryId: 'safety',
        title: '衛星通信で確実な情報共有体制',
        description: '災害時の通信確保',
        details: '衛星通信システムを導入し、災害時でも確実な情報共有体制を構築。',
        priority: 'high',
        tags: ['衛星通信', '災害対策', '情報共有']
      }
    ]
  },
  {
    id: 2,
    name: 'つまがり俊明',
    party: '立憲民主推薦',
    image: 'https://cdp-japan.jp/files/Dr3m/gX0h/ydmi/0B5R/Dr3mgX0hydmi0B5RUwdrb2tw_tn720.jpg',
    bio: '松下政経塾29期、総務省、神奈川県庁、船橋市議4期14年。明治大法学部・大学院修了。',
    experience: ['松下政経塾 29期', '総務省', '神奈川県庁', '船橋市議 4期14年', 'ESP総研でIT調査・マーケティング'],
    age: 47,
    birthplace: '船橋市',
    previousRole: '船橋市議会議員',
    vision: '船橋をギアチェンジ、教育中心の未来を育てるまち、人にやさしい船橋',
    background: '障がい児支援を中心とした活動を展開。市民対話を重視した政治活動を実践。',
    career: '明治大法学部・大学院修了。松下政経塾29期生として政治の道へ。総務省、神奈川県庁での行政経験を経て、船橋市議として4期14年活動。ESP総研でIT調査・マーケティング経験も持つ。',
    website: 'https://www.tsumagari.info/',
    sns: {
      twitter: '@tsumagari1977',
      facebook: 'https://www.facebook.com/team.tsumagari/'
    },
    policies: [
      {
        id: 'edu-tsuma-1',
        categoryId: 'education',
        title: '学校給食無償化',
        description: '全小中学校の給食費を完全無償化',
        details: '保護者の経済的負担軽減と子どもたちの健康的な食生活を保障。全小中学校で給食費無償化を実現。',
        priority: 'high',
        tags: ['給食無償化', '教育支援', '経済支援']
      },
      {
        id: 'edu-tsuma-2',
        categoryId: 'education',
        title: '特別支援学級全校設置',
        description: 'インクルーシブ教育の推進',
        details: '特別支援学級を全校に設置。ICT教育も強力推進し、すべての子どもに適切な教育環境を提供。',
        priority: 'high',
        tags: ['特別支援', 'インクルーシブ', 'ICT教育']
      },
      {
        id: 'child-tsuma-1',
        categoryId: 'childcare',
        title: '小児インフルエンザワクチン公費助成',
        description: '子どもの健康を守る予防接種支援',
        details: '小児インフルエンザワクチンの公費助成により、すべての子どもが予防接種を受けられる環境を整備。',
        priority: 'medium',
        tags: ['ワクチン', '公費助成', '健康支援']
      },
      {
        id: 'gov-tsuma-1',
        categoryId: 'governance',
        title: '市民対話集会（市政懇談会2.0）',
        description: 'DX推進による市民参加型市政',
        details: '市民との対話を重視した市政運営。DX推進による業務効率化、ハラスメント対策強化、会計年度職員待遇改善。',
        priority: 'high',
        tags: ['市民参加', 'DX', '行政改革']
      },
      {
        id: 'infra-tsuma-1',
        categoryId: 'infrastructure',
        title: 'インバウンド促進',
        description: '観光振興による地域活性化',
        details: 'インバウンド対策課新設、トップセールスによるシティプロモーション、まちなかスポーツ振興、若者定住支援。',
        priority: 'medium',
        tags: ['観光', 'インバウンド', '地域活性化']
      },
      {
        id: 'welfare-tsuma-1',
        categoryId: 'welfare',
        title: '医療センター早期機能強化',
        description: '災害弱者支援と福祉職支援',
        details: '医療センターの機能強化を早期実現。災害弱者支援充実、福祉職への市独自支援制度創設。',
        priority: 'high',
        tags: ['医療', '災害支援', '福祉職']
      },
      {
        id: 'eco-tsuma-1',
        categoryId: 'economy',
        title: '女性・市民の創業起業支援',
        description: '多様な就労支援による経済活性化',
        details: '女性・市民の創業起業支援、女性・ベテラン世代・障がい者就労支援、外国人観光客誘致による経済活性化。',
        priority: 'medium',
        tags: ['起業支援', '就労支援', 'ダイバーシティ']
      }
    ]
  },
  {
    id: 3,
    name: '江川 あつこ',
    party: '無所属',
    image: 'https://www.chibanippo.co.jp/sites/default/files/image/202502/20250215egawa.jpg',
    bio: '国連開発計画（UNDP）職員、ソロモンブラザーズ・アジア証券VP、東京大学大学院修士（人間の安全保障プログラム）、千葉大学人文学部卒。',
    experience: ['国連開発計画（UNDP）職員', 'ソロモンブラザーズ・アジア証券 VP', '東京大学大学院修士（人間の安全保障プログラム）', '千葉大学人文学部卒', 'メディカルタウン構想反対市民運動代表'],
    age: 67,
    birthplace: '東京都',
    previousRole: 'メディカルタウン構想反対市民運動代表',
    vision: '市政を代えいのち輝く船橋、メディカルタウン構想見直し、市民運動出身の新しいリーダー',
    background: '国際的な経験を活かし、市民の声を聞く市政運営を実現。いのちと暮らしを第一とした政策を推進。',
    career: '千葉大学人文学部卒業後、国連開発計画（UNDP）職員としてバングラデッシュ・スーダンに駐在し、国際開発に従事。ソロモンブラザーズ・アジア証券でVPを務める。東京大学大学院で人間の安全保障プログラム修士号取得。メディカルタウン構想反対市民運動を主導。',
    website: 'https://funabashi-miraikaigi.com/',
    sns: {
      twitter: '@egawa_funabashi'
    },
    policies: [
      {
        id: 'child-egawa-1',
        categoryId: 'childcare',
        title: '虐待・貧困・ヤングケアラー早期発見',
        description: '子どもたちを守る包括的支援体制',
        details: '虐待・貧困・ヤングケアラーの早期発見システム構築。船橋児童相談所の専門人材確保と市民参加型教育政策の推進。',
        priority: 'high',
        tags: ['児童保護', 'ヤングケアラー', '早期発見']
      },
      {
        id: 'gov-egawa-1',
        categoryId: 'governance',
        title: '市民参加型市政',
        description: 'メディカルタウン構想見直しと市民の声を聞く運営',
        details: '市民の声を重視した市政運営。メディカルタウン構想の抜本的見直しを実施。',
        priority: 'high',
        tags: ['市民参加', 'メディカルタウン', '市政改革']
      },
      {
        id: 'infra-egawa-1',
        categoryId: 'infrastructure',
        title: 'いのち中心の持続可能まちづくり',
        description: '災害リスク地域での大型開発反対',
        details: '災害リスクの高い地域での大型開発に反対。いのち中心の持続可能なまちづくりを推進。',
        priority: 'high',
        tags: ['持続可能', '防災', 'まちづくり']
      },
      {
        id: 'welfare-egawa-1',
        categoryId: 'welfare',
        title: 'いのちと暮らしを第一とした政策',
        description: '市民の健康と福祉を最優先',
        details: '市民の健康と福祉を最優先に考えた政策立案。医療・福祉サービスの充実と質の向上。',
        priority: 'high',
        tags: ['健康', '福祉', '市民優先']
      },
      {
        id: 'eco-egawa-1',
        categoryId: 'economy',
        title: '利権ではなくいのち輝く経済',
        description: '自然共生型経済社会の実現',
        details: '利権優先ではなく、市民のいのちが輝く経済政策。自然と共生する持続可能な経済社会の構築。',
        priority: 'medium',
        tags: ['持続可能経済', '自然共生', '市民経済']
      },
      {
        id: 'safety-egawa-1',
        categoryId: 'safety',
        title: '災害拠点病院の軟弱地盤移転反対',
        description: '真の防災対策推進',
        details: '災害拠点病院の軟弱地盤への移転に反対。科学的根拠に基づいた真の防災対策を推進。',
        priority: 'high',
        tags: ['防災', '災害拠点病院', '安全対策']
      }
    ]
  },
  {
    id: 4,
    name: '高橋 ひろし',
    party: '諸派（AIDAO党代表）',
    image: 'https://www.chibanippo.co.jp/sites/default/files/image/202503/IP250228TAN000007000_01.jpg',
    bio: '船橋市議1期（2011-2015）、IT会社パラソル代表、AIDAO党代表。船橋市出身。',
    experience: ['船橋市議 1期（2011-2015）', 'IT会社 パラソル 代表', 'AIDAO党代表', 'AI・ブロックチェーン技術専門家'],
    age: 48,
    birthplace: '船橋市出身',
    previousRole: 'IT会社代表',
    vision: '納める税金に見合うサービス提供、IT技術による市政革新',
    background: 'AI・ブロックチェーン技術による行政効率化を提唱。IT技術を活用した革新的な市政運営を目指す。',
    career: '船橋市出身。IT企業での経験を活かし、2011年から2015年まで船橋市議を1期務める。その後、IT会社パラソルを設立し代表に就任。AIDAO党を立ち上げ、AI・ブロックチェーン技術による行政改革を推進。',
    website: 'https://x.com/takahas41168704',
    sns: {
      twitter: '@takahas41168704'
    },
    policies: [
      {
        id: 'edu-takahashi-1',
        categoryId: 'education',
        title: 'IT・デジタル技術活用した教育改革',
        description: '最先端技術による教育の質向上',
        details: 'IT・デジタル技術を活用した教育改革。子育て世代へのICT支援強化により、教育格差を解消。',
        priority: 'high',
        tags: ['IT教育', 'デジタル', 'ICT支援']
      },
      {
        id: 'gov-takahashi-1',
        categoryId: 'governance',
        title: 'IT技術を活用した行政効率化',
        description: 'デジタル化推進による市民サービス向上',
        details: 'AI・ブロックチェーン技術を活用した行政効率化。デジタル化推進により、24時間365日利用可能な市民サービスを実現。',
        priority: 'high',
        tags: ['行政効率化', 'デジタル化', 'AI活用']
      },
      {
        id: 'infra-takahashi-1',
        categoryId: 'infrastructure',
        title: 'スマートシティ構想',
        description: 'IT技術による交通渋滞解決',
        details: 'IT技術を活用した交通渋滞解決システム導入。スマートシティ構想により、効率的な都市インフラを構築。',
        priority: 'high',
        tags: ['スマートシティ', '交通渋滞', 'IT活用']
      },
      {
        id: 'welfare-takahashi-1',
        categoryId: 'welfare',
        title: 'デジタル技術活用した医療福祉',
        description: '遠隔医療・介護システムの導入',
        details: 'デジタル技術を活用した医療福祉サービス向上。遠隔医療・介護システムにより、在宅でも質の高いケアを提供。',
        priority: 'medium',
        tags: ['デジタル医療', '遠隔医療', '福祉IT']
      },
      {
        id: 'eco-takahashi-1',
        categoryId: 'economy',
        title: 'IT企業誘致',
        description: 'デジタル産業による経済活性化',
        details: 'IT企業誘致による雇用創出。デジタル産業振興、技術革新による経済活性化を実現。',
        priority: 'high',
        tags: ['IT企業', 'デジタル産業', '雇用創出']
      },
      {
        id: 'safety-takahashi-1',
        categoryId: 'safety',
        title: 'IT技術活用した防災システム',
        description: 'AIによる災害予測と早期警報',
        details: 'IT技術を活用した防災システム構築。AIによる災害予測と早期警報システムで市民の安全を守る。',
        priority: 'high',
        tags: ['防災IT', 'AI予測', '早期警報']
      }
    ]
  },
  {
    id: 5,
    name: '鈴木 ひろ子',
    party: '無所属',
    image: 'https://www.chibanippo.co.jp/sites/default/files/image/202504/IP250418TAN000025000_01.jpg',
    bio: '福島中央テレビアナウンサー、WWE初代日本人ディーバ、船橋市議、千葉県議2期。',
    experience: ['福島中央テレビ アナウンサー', 'WWE初代日本人ディーバ', '船橋市議', '千葉県議 2期', 'プロレスラーKENSO（鈴木健三）夫人'],
    age: 51,
    birthplace: '福島県',
    previousRole: '千葉県議会議員',
    vision: '教育と防災の二本柱、県のチカラで船橋を変える、明るい未来を市民に',
    background: 'WWE世界巡業経験を持つ国際感覚と、県議としての経験を活かし、県との連携強化による市政改革を実現。',
    career: '福島中央テレビでアナウンサーとして活躍後、WWE初代日本人ディーバとして世界で活動。その後、船橋市議を経て千葉県議を2期務める。プロレスラーKENSO（鈴木健三）夫人。',
    website: 'https://suzukihiroko.jp/',
    sns: {
      twitter: '@htb_1623',
      facebook: 'https://www.facebook.com/hirokosuzuki1623',
      instagram: '@hiroko_suzuki23'
    },
    policies: [
      {
        id: 'edu-suzuki-1',
        categoryId: 'education',
        title: '教員配置見直し・ICT負担軽減',
        description: '公立夜間中学増設と教育環境改善',
        details: '教員配置の見直しとICT活用による負担軽減。公立夜間中学増設で学び直しの機会を提供。子ども医療費助成を高校生まで拡大。',
        priority: 'high',
        tags: ['教員支援', '夜間中学', '医療費助成']
      },
      {
        id: 'child-suzuki-1',
        categoryId: 'childcare',
        title: '医療的ケア児支援',
        description: '幼稚園預かり保育補助拡充',
        details: '医療的ケア児への支援体制強化。潜在保育士の掘り起こしと幼稚園預かり保育補助拡充により、多様な保育ニーズに対応。',
        priority: 'high',
        tags: ['医療的ケア児', '保育士', '預かり保育']
      },
      {
        id: 'gov-suzuki-1',
        categoryId: 'governance',
        title: '県との連携強化',
        description: '男女共同参画条例制定とDX推進',
        details: '県との連携を強化し、効率的な行政運営を実現。男女共同参画条例制定、DX推進による県政改革。',
        priority: 'high',
        tags: ['県連携', '男女共同参画', 'DX']
      },
      {
        id: 'infra-suzuki-1',
        categoryId: 'infrastructure',
        title: '国県道渋滞緩和・交差点改良',
        description: '歩道整備と交番早期設置',
        details: '国県道の渋滞緩和と交差点改良により交通環境を改善。歩道整備促進、交番早期設置、海老川調節池公園化。',
        priority: 'high',
        tags: ['交通渋滞', '歩道整備', '交番設置']
      },
      {
        id: 'welfare-suzuki-1',
        categoryId: 'welfare',
        title: '高齢者健康寿命延伸',
        description: '介護人材確保と県支援強化',
        details: '高齢者の健康寿命延伸プログラム推進。介護人材確保への県支援強化により、質の高い介護サービスを提供。',
        priority: 'high',
        tags: ['健康寿命', '介護人材', '高齢者支援']
      },
      {
        id: 'eco-suzuki-1',
        categoryId: 'economy',
        title: '船橋漁業者免許通常化',
        description: '農水産物PR強化',
        details: '船橋漁業者免許の通常化支援。東京湾青潮対策、千葉県産農水産物の組織的PR、フードバンク・子ども食堂ネットワーク構築。',
        priority: 'medium',
        tags: ['漁業', '農水産物', 'フードバンク']
      },
      {
        id: 'safety-suzuki-1',
        categoryId: 'safety',
        title: '災害対策徹底',
        description: 'SPS認定校増加による児童安全確保',
        details: '災害対策の徹底と県備蓄品情報一元化。SPS（セーフティプロモーションスクール）認定校増加により児童の安全を確保。',
        priority: 'high',
        tags: ['防災', 'SPS', '児童安全']
      }
    ]
  }
];