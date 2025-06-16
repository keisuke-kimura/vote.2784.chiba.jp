'use client';

import { Vote, ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';
import ElectionHistory from '@/components/ElectionHistory';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">戻る</span>
              </Link>
              <div className="w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Vote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">過去の選挙データ</h1>
                  <p className="text-xs text-gray-600 font-medium">船橋市長選挙 履歴</p>
                </div>
              </div>
            </div>
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
                このデータは<span className="font-semibold">過去の船橋市長選挙の公式結果</span>に基づいています。
                データの正確性には細心の注意を払っていますが、<span className="font-semibold">詳細は船橋市選挙管理委員会の公式サイトでご確認ください</span>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="history-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-blue-600" />
                <circle cx="100" cy="100" r="2" fill="currentColor" className="text-purple-600" />
                <circle cx="150" cy="50" r="2" fill="currentColor" className="text-pink-600" />
                <circle cx="100" cy="0" r="2" fill="currentColor" className="text-blue-600" />
                <circle cx="0" cy="100" r="2" fill="currentColor" className="text-purple-600" />
                <circle cx="200" cy="100" r="2" fill="currentColor" className="text-pink-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#history-pattern)" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              船橋市長選挙の歴史を振り返る
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              過去3回の選挙データから、投票率の推移や年代別・地域別の傾向を分析。
              より良い船橋の未来を選ぶための参考資料として。
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">データについて</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                2013年、2017年、2021年の船橋市長選挙の公式結果を掲載しています。
                投票率、候補者別得票数、年代別・地域別の投票傾向などを視覚的に確認できます。
                次回の選挙（2025年6月22日）の参考にしてください。
              </p>
            </div>
          </div>
        </div>

        <ElectionHistory />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            2025年6月22日は投票へ
          </h3>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            過去のデータを参考に、あなたの一票で船橋の未来を決めましょう。
            投票率向上にご協力ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              トップページに戻る
            </Link>
            <Link
              href="/#candidates"
              className="bg-transparent text-white border-2 border-white/50 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              候補者を見る
            </Link>
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
    </div>
  );
}