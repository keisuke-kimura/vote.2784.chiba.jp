'use client';

import { useState, useMemo, useEffect } from 'react';
import { MessageCircle, Users, FileSearch, Vote, ArrowRight, MapPin, BarChart3, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import PolicyComparison from '@/components/PolicyComparison';
import EarlyVoting from '@/components/EarlyVoting';
import SpeechSchedule from '@/components/SpeechSchedule';
import { candidates as candidatesData } from '@/data/policies';
import { speeches } from '@/data/speeches';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [earlyVotingOpen, setEarlyVotingOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Randomize candidates on client side only
  const candidates = useMemo(() => {
    const mappedCandidates = candidatesData.map(candidate => ({
      id: candidate.id,
      name: candidate.name,
      party: candidate.party,
      image: candidate.image,
      age: candidate.age,
      previousRole: candidate.previousRole,
      vision: candidate.vision,
      bio: candidate.bio,
      keyPolicies: candidate.policies.filter(p => p.priority === 'high').slice(0, 3),
      isIncumbent: candidate.id === 1 // Track incumbent status
    }));
    // Only shuffle on client side after mounting
    return mounted ? shuffleArray(mappedCandidates) : mappedCandidates;
  }, [mounted]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">船橋市長選挙 2025</h1>
                <p className="text-xs text-gray-600 font-medium">政策比較プラットフォーム</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#speeches" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">街頭演説</a>
              <a href="#debate" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">討論会</a>
              <a href="#features" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">機能</a>
              <a href="#candidates" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">候補者</a>
              <Link href="/history" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">過去の選挙</Link>
              <button
                onClick={() => setComparisonOpen(true)}
                className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                政策比較
              </button>
              <Link 
                href="/early-voting"
                className="text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md inline-block"
              >
                期日前投票
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Notice Section */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm">
              <p className="text-amber-800 leading-relaxed">
                このサイトは<span className="font-semibold">AIを使用してWeb上の公開情報を収集・整理</span>して作成されています。
                最新の正確な情報については、<span className="font-semibold">街頭演説等で候補者ご本人に直接ご確認ください</span>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600" />
                <rect x="120" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600" />
                <path d="M 20 150 L 50 120 L 80 150 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-600" />
                <line x1="100" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="1" className="text-gray-400" opacity="0.5" />
                <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="1" className="text-gray-400" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        
        {/* City Skyline Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 opacity-5">
          <svg className="w-full h-64" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <defs>
              <linearGradient id="skyline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'rgb(59, 130, 246)', stopOpacity:0.2}} />
                <stop offset="100%" style={{stopColor:'rgb(147, 51, 234)', stopOpacity:0.3}} />
              </linearGradient>
            </defs>
            <path d="M0,300 L0,200 L100,200 L100,150 L150,150 L150,100 L200,100 L200,180 L300,180 L300,80 L350,80 L350,120 L400,120 L400,160 L500,160 L500,60 L550,60 L550,140 L650,140 L650,100 L700,100 L700,180 L800,180 L800,90 L850,90 L850,150 L950,150 L950,110 L1000,110 L1000,170 L1100,170 L1100,130 L1200,130 L1200,300 Z" 
                  fill="url(#skyline-gradient)" />
            <path d="M0,300 L0,250 L50,250 L50,220 L120,220 L120,200 L180,200 L180,240 L250,240 L250,180 L320,180 L320,210 L380,210 L380,190 L450,190 L450,150 L520,150 L520,200 L600,200 L600,170 L680,170 L680,230 L750,230 L750,160 L820,160 L820,200 L900,200 L900,180 L980,180 L980,220 L1050,220 L1050,190 L1120,190 L1120,240 L1200,240 L1200,300 Z" 
                  fill="currentColor" className="text-blue-600" opacity="0.1" />
          </svg>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-20 animate-float">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <Vote className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float-delayed">
          <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <Users className="w-10 h-10 text-purple-600" />
          </div>
        </div>
        <div className="absolute top-40 left-1/4 animate-float">
          <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-pink-600" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              2025年6月22日 投開票
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              候補者の政策を
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                かんたんに比較
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              AIがあなたの関心に合わせて各候補者の政策をわかりやすく解説。
              賢い一票で船橋の未来を選びましょう。
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* AI Chat Button */}
              <button
                onClick={() => setChatOpen(true)}
                className="group relative bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-6 rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">AIと対話を始める</h3>
                  <p className="text-sm text-white/90 leading-relaxed mb-3">
                    気になる政策について質問するだけ。AIが分かりやすく解説します
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium">
                    今すぐ始める
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Policy Comparison Button */}
              <button
                onClick={() => setComparisonOpen(true)}
                className="group relative bg-white hover:bg-gray-50 text-gray-800 p-6 rounded-2xl transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer border-2 border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <FileSearch className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">政策を比較する</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    全候補者の政策を分野別に一覧表示。違いが一目で分かります
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-green-700">
                    比較表を見る
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Early Voting Button */}
              <Link
                href="/early-voting"
                className="group relative bg-white hover:bg-gray-50 text-gray-800 p-6 rounded-2xl transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 block border-2 border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">期日前投票所</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    お近くの投票所を確認。6/16から投票可能です
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-700">
                    投票所を探す
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              選挙をもっとわかりやすく
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              最新のテクノロジーで、政策比較をシンプルに
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">AI対話アシスタント</h4>
              <p className="text-gray-700 leading-relaxed">
                「教育政策について教えて」など、自然な言葉で質問するだけ。AIが各候補者の政策をわかりやすく説明します。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <FileSearch className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">スマート比較機能</h4>
              <p className="text-gray-700 leading-relaxed">
                教育、福祉、経済など、関心のある分野で候補者の政策を一覧比較。違いが一目でわかります。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">詳細プロフィール</h4>
              <p className="text-gray-700 leading-relaxed">
                各候補者の経歴、実績、ビジョンを詳しく掲載。投票の判断材料を豊富に提供します。
              </p>
            </div>
            <Link href="/history" className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">過去の選挙データ</h4>
              <p className="text-gray-700 leading-relaxed">
                過去3回の投票率や年代別・地域別の傾向を分析。データで見る船橋市長選挙の歴史。
              </p>
              <p className="text-orange-600 font-medium mt-3 group-hover:gap-2 flex items-center gap-1 transition-all">
                詳しく見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section id="candidates" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              立候補者プロフィール
            </h3>
            <p className="text-xl text-gray-700 font-medium">
              5名の候補者が船橋市の未来を提案します
            </p>
          </div>
          <div className="space-y-8">
            {candidates.map((candidate) => (
              <Link 
                key={candidate.id} 
                href={`/candidates/${candidate.id}`}
                className="group block"
              >
                <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 cursor-pointer">
                  <div className="grid md:grid-cols-4 gap-8">
                    {/* Profile Section */}
                    <div className="md:col-span-1">
                      <div className="flex flex-col items-center md:items-start">
                        <div className="relative mb-4">
                          <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                            <img 
                              src={candidate.image} 
                              alt={candidate.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"%3E%3Crect width="128" height="128" fill="%23f3f4f6"/%3E%3Cpath d="M64 64m-28 0a28 28 0 1 0 56 0a28 28 0 1 0 -56 0M64 40a12 12 0 1 0 0 24a12 12 0 0 0 0-24zM64 72c-12 0-22 6-22 12v6h44v-6c0-6-10-12-22-12z" fill="%23d1d5db"/%3E%3C/svg%3E';
                              }}
                            />
                          </div>
                          {candidate.isIncumbent && (
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg">
                              現職
                            </span>
                          )}
                        </div>
                        <div className="text-center md:text-left">
                          <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{candidate.name}</h4>
                          <p className="text-lg text-gray-600 font-medium">{candidate.age}歳</p>
                          <p className="text-sm font-semibold text-gray-800 mt-2">{candidate.party}</p>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                      <div className="space-y-5">
                        {/* Vision */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-2xl border border-blue-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <Vote className="w-4 h-4 text-white" />
                            </div>
                            <h5 className="text-lg font-bold text-gray-900">ビジョン</h5>
                          </div>
                          <p className="text-gray-800 font-semibold leading-relaxed text-lg pl-11">{candidate.vision}</p>
                        </div>

                        {/* Bio */}
                        <div className="border-l-4 border-gray-300 pl-5">
                          <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">経歴</h5>
                          <p className="text-gray-800 leading-relaxed">{candidate.bio}</p>
                        </div>

                        {/* Key Policies */}
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                              <FileSearch className="w-4 h-4 text-white" />
                            </div>
                            <h5 className="text-lg font-bold text-gray-900">重点政策</h5>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            {candidate.keyPolicies.map((policy) => (
                              <div key={policy.id} className="relative bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-xl" />
                                <h6 className="font-bold text-gray-900 mb-3 text-base leading-tight">{policy.title}</h6>
                                <p className="text-sm text-gray-800 leading-relaxed">{policy.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-end pt-2">
                          <div className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 group-hover:text-blue-700 group-hover:gap-3 transition-all bg-blue-50 px-6 py-3 rounded-xl group-hover:bg-blue-100">
                            詳細を見る
                            <ArrowRight className="w-5 h-5 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Speech Schedule Section */}
      <section id="speeches" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              街頭演説スケジュール
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto px-4">
              各候補者の街頭演説予定をご確認いただけます
            </p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden p-4 sm:p-6">
            <SpeechSchedule speeches={speeches} showCandidateName={true} />
          </div>
        </div>
      </section>

      {/* Public Debate Section */}
      <section id="debate" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              公開討論会アーカイブ
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto px-4">
              船橋市長選挙立候補予定者による公開討論会の様子をご覧いただけます
            </p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://www.youtube.com/embed/HnaWNVh26uE" 
                title="船橋市長選挙立候補予定者 公開討論会"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">討論会について</h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    各候補者が政策や船橋市の未来について語る貴重な機会です。
                    それぞれの考えや人柄を直接知ることができます。
                    投票の参考にぜひご覧ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Election History Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              過去の選挙データ
            </h3>
            <p className="text-base sm:text-lg text-gray-700 font-medium max-w-2xl mx-auto px-4">
              船橋市長選挙の投票率推移と傾向を確認できます
            </p>
          </div>

          {/* 統計カード */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">平均投票率</h4>
              </div>
              <p className="text-3xl font-bold text-blue-700">30.51%</p>
              <p className="text-sm text-gray-600 mt-1">過去3回の平均</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">最新有権者数</h4>
              </div>
              <p className="text-3xl font-bold text-purple-700">521,228</p>
              <p className="text-sm text-gray-600 mt-1">2021年時点</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">最高投票率</h4>
              </div>
              <p className="text-3xl font-bold text-green-700">34.55%</p>
              <p className="text-sm text-gray-600 mt-1">2013年選挙</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">現職当選回数</h4>
              </div>
              <p className="text-3xl font-bold text-orange-700">3回</p>
              <p className="text-sm text-gray-600 mt-1">松戸徹氏</p>
            </div>
          </div>

          {/* 投票率推移グラフ */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              投票率の推移
            </h4>
            <div className="flex items-end justify-center gap-8 h-48">
              <div className="text-center">
                <div className="h-40 flex items-end mb-2">
                  <div 
                    className="w-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                    style={{ height: '86.375%' }}
                  />
                </div>
                <p className="font-bold text-gray-900">34.55%</p>
                <p className="text-sm text-gray-600">2013年</p>
              </div>
              
              <div className="text-center">
                <div className="h-40 flex items-end mb-2">
                  <div 
                    className="w-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                    style={{ height: '70.25%' }}
                  />
                </div>
                <p className="font-bold text-gray-900">28.1%</p>
                <p className="text-sm text-gray-600">2017年</p>
              </div>
              
              <div className="text-center">
                <div className="h-40 flex items-end mb-2">
                  <div 
                    className="w-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                    style={{ height: '72.2%' }}
                  />
                </div>
                <p className="font-bold text-gray-900">28.88%</p>
                <p className="text-sm text-gray-600">2021年</p>
              </div>
            </div>
          </div>

          {/* 詳細ボタン */}
          <div className="text-center">
            <Link
              href="/history"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <BarChart3 className="w-5 h-5" />
              詳細データを見る
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            投票日まで、しっかり比較
          </h3>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            AIアシスタントが、あなたの疑問にお答えします。
            政策の違いを理解して、納得の一票を。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setChatOpen(true)}
              className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              AIに質問する
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setComparisonOpen(true)}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/50 px-8 py-4 rounded-xl font-medium transition-all cursor-pointer"
            >
              政策比較表を見る
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Vote className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300 font-medium">船橋市長選挙 2025</p>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              このサイトは候補者の政策比較を支援する目的で作成されています。
            </p>
            <p className="text-gray-500 text-xs mt-2">
              特定の候補者・政党を支持するものではありません。
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Modal Placeholder */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between" style={{ backgroundColor: 'oklch(55.8% .288 302.321)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">AIチャットボット</h3>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-lg transition-all cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col h-[calc(80vh-80px)]">
              <div className="bg-amber-50 border-b border-amber-200 px-6 py-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div className="text-sm">
                    <p className="font-semibold text-amber-800 mb-1">ご注意ください</p>
                    <p className="text-amber-700 leading-relaxed">
                      AIチャットの回答は参考情報です。正確性を保証するものではありません。
                      最新の正確な情報については、必ず各候補者の
                      <span className="font-semibold">公式HPをご確認ください</span>。
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex-1 min-h-[600px]">
                <iframe
                  src="https://dify.2784.chiba.jp/chatbot/e6ooh4qUbifkOJ1v"
                  className="w-full h-full border-0"
                  allow="microphone"
                  title="AI チャットボット"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Policy Comparison Modal */}
      {comparisonOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full h-full max-w-none max-h-none overflow-hidden">
            <div className="h-full overflow-y-auto">
              <PolicyComparison onClose={() => setComparisonOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Early Voting Modal */}
      {earlyVotingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full h-full max-w-none max-h-none overflow-hidden">
            <div className="h-full overflow-y-auto">
              <EarlyVoting onClose={() => setEarlyVotingOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}