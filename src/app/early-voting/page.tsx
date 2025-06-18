'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Vote, MapPin, Clock, Calendar } from 'lucide-react';
import EarlyVoting from '@/components/EarlyVoting';

export default function EarlyVotingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-100 group-hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-medium">一覧に戻る</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">船橋市長選挙 2025</p>
                <p className="text-xs text-gray-600 font-medium">期日前投票所一覧</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            期日前投票所一覧
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            投票日当日に都合がつかない方は、期日前投票をご利用ください。
            お近くの投票所を確認して、6月16日から投票可能です。
          </p>
          
          {/* Key Information Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">投票期間</h3>
              </div>
              <p className="text-lg font-bold text-purple-600">6月16日（月）〜 6月21日（土）</p>
              <p className="text-sm text-gray-600 mt-1">告示日翌日から投票日前日まで</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900">投票時間</h3>
              </div>
              <p className="text-lg font-bold text-pink-600">8:30 〜 20:00</p>
              <p className="text-sm text-gray-600 mt-1">全ての期日前投票所で共通</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EarlyVoting />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-2">
            投票には入場整理券または本人確認書類をお持ちください
          </p>
          <p className="text-sm text-gray-500">
            詳しい情報は船橋市選挙管理委員会のウェブサイトをご確認ください
          </p>
        </div>
      </footer>
    </div>
  );
}