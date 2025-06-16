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
      // 教育・子育て
      {
        id: 'edu-matsudo-1',
        categoryId: 'education',
        title: '不登校・いじめ対策強化（専門職配置）',
        description: 'スクールカウンセラー・ソーシャルワーカー体制強化',
        details: '市独自のスクールカウンセラー・ソーシャルワーカー・ロイヤー体制強化、校内教育支援センター充実、西部地区サポートルーム新設',
        priority: 'high',
        tags: ['教育支援', '不登校対策', 'いじめ対策']
      },
      {
        id: 'edu-matsudo-2',
        categoryId: 'education',
        title: '教育負担軽減・文化教育推進',
        description: '副教材無償化・芸術鑑賞教室全校実施',
        details: '副教材無償化による保護者負担軽減、全校での芸術鑑賞教室実施により体験格差解消',
        priority: 'medium',
        tags: ['無償化', '芸術教育', '教育格差']
      },
      {
        id: 'child-matsudo-1',
        categoryId: 'childcare',
        title: '児童相談所R8年開設・待機児童ゼロ達成',
        description: '児童虐待対応・保育環境整備',
        details: '市独自児童相談所を令和8年開設、保育園・放課後ルーム待機児童ゼロ達成、朝7時から登校可能体制で小一の壁解消',
        priority: 'high',
        tags: ['児童相談所', '待機児童', '子育て支援']
      },
      {
        id: 'child-matsudo-2',
        categoryId: 'childcare',
        title: 'ヤングケアラー支援・子育て環境充実',
        description: '困難を抱える子どもへの総合支援',
        details: 'ヤングケアラー支援・学習支援・受験料補助、プレーパーク活動支援、幼稚園・保育園運営支援',
        priority: 'high',
        tags: ['ヤングケアラー', '学習支援', '子育て環境']
      },
      // 行政改革
      {
        id: 'gov-matsudo-1',
        categoryId: 'governance',
        title: 'DX推進による市民サービス向上',
        description: '24時間オンライン申請・書かない窓口',
        details: '24時間オンライン申請、書かない窓口づくり、DX技術活用による市民サービス向上、業務効率化で接遇日本一',
        priority: 'high',
        tags: ['DX', 'オンライン申請', '行政改革']
      },
      // まちづくり・インフラ
      {
        id: 'infra-matsudo-1',
        categoryId: 'infrastructure',
        title: 'スマート交通システム・安全空間整備',
        description: '交通ビッグデータ活用・ゾーン30プラス',
        details: '交通ビッグデータで渋滞緩和、グリーンスローモビリティ拡大・自動運転検討、ゾーン30プラス整備で人優先安全空間',
        priority: 'high',
        tags: ['スマート交通', '交通安全', '渋滞対策']
      },
      {
        id: 'infra-matsudo-2',
        categoryId: 'infrastructure',
        title: 'メディカルタウン・東葉高速線新駅着工',
        description: '海老川上流地区の新たなまちづくり',
        details: '海老川上流地区メディカルタウン開発、東葉高速線新駅着工でアクセス向上、国費300億円で海岸保全施設整備',
        priority: 'high',
        tags: ['メディカルタウン', '新駅', 'まちづくり']
      },
      // 医療・福祉
      {
        id: 'welfare-matsudo-1',
        categoryId: 'welfare',
        title: '健康寿命日本一・高齢者支援充実',
        description: '地域包括ケア・健康ポイント・介護予防',
        details: '地域包括ケアシステム充実、健康ポイント制度、シルバーリハビリ体操普及、5歳児健診導入、帯状疱疹ワクチン助成',
        priority: 'high',
        tags: ['健康寿命', '高齢者支援', '介護予防']
      },
      {
        id: 'welfare-matsudo-2',
        categoryId: 'welfare',
        title: '障害者・医療的ケア児支援強化',
        description: '雇用促進・包括ケア・短期入所確保',
        details: '障害者雇用・就労支援強化、精神障害対応包括ケア、医療的ケア児者短期入所確保、若年がん患者在宅療養支援',
        priority: 'high',
        tags: ['障害者支援', '医療的ケア', '包括支援']
      },
      {
        id: 'welfare-matsudo-3',
        categoryId: 'welfare',
        title: 'LGBT理解促進・多文化共生推進',
        description: '多様性を尊重する社会づくり',
        details: 'LGBT理解促進と多文化共生を推進し、誰もが自分らしく生きられる社会を実現',
        priority: 'medium',
        tags: ['LGBT', '多文化共生', 'ダイバーシティ']
      },
      // 産業・経済・文化
      {
        id: 'eco-matsudo-1',
        categoryId: 'economy',
        title: '農水産物ブランド化・起業支援',
        description: '地場産品振興・若手起業家支援',
        details: '船橋産農水産物（ニンジン・梨・枝豆・小松菜・海苔・ホンビノス貝等）ブランド化、異業種交流会「未来ミーティング」、女性・多世代起業支援',
        priority: 'high',
        tags: ['農水産物', 'ブランド化', '起業支援']
      },
      {
        id: 'culture-matsudo-1',
        categoryId: 'culture',
        title: '音楽・スポーツ・文化振興',
        description: '音楽のまち・プロスポーツ連携・文化財保護',
        details: '音楽のまちプロジェクト推進、千葉ジェッツ・クボタスピアーズ連携強化、取掛西貝塚国指定史跡化',
        priority: 'high',
        tags: ['音楽', 'スポーツ振興', '文化財']
      },
      // 防災・安全
      {
        id: 'safety-matsudo-1',
        categoryId: 'safety',
        title: '津波・高潮対策（国費300億円）',
        description: '海岸保全施設耐震化・避難所電源確保',
        details: '国費300億円で海岸保全施設耐震化、約100避難所に太陽光・蓄電池設置、全避難所に液体歯磨き・液体ミルク配備',
        priority: 'high',
        tags: ['津波対策', '避難所', '防災']
      },
      {
        id: 'safety-matsudo-2',
        categoryId: 'safety',
        title: '住宅耐震化・防犯対策強化',
        description: '木造住宅耐震助成・詐欺対策・デジタル防災',
        details: '木造住宅耐震診断・改修助成拡大、住まい防犯対策補助、電話de詐欺撲滅強化、デジタルハザードマップ、衛星通信システム',
        priority: 'high',
        tags: ['耐震化', '防犯', 'デジタル防災']
      },
      // 環境
      {
        id: 'env-matsudo-1',
        categoryId: 'environment',
        title: '脱炭素・環境教育・熱中症対策',
        description: 'CO₂実質ゼロ・エコカレッジ・クーリングシェルター',
        details: '公共施設CO₂実質ゼロ、ふなばしエコカレッジによる環境教育、クーリングシェルター確保で熱中症対策',
        priority: 'high',
        tags: ['脱炭素', '環境教育', '熱中症対策']
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