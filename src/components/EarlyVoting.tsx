'use client';

import { useState } from 'react';
import { MapPin, Clock, Calendar, Info, X, Search, Map } from 'lucide-react';
import { votingLocations } from '@/data/voting-locations';

interface EarlyVotingProps {
  onClose?: () => void;
}

export default function EarlyVoting({ onClose }: EarlyVotingProps = {}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = votingLocations.filter(location => 
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Header - Only show when used as modal */}
      {onClose && (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">期日前投票所一覧</h2>
                  <p className="text-sm text-gray-600 font-medium">船橋市長選挙 2025</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="group p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search and Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl mb-8">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">期日前投票の正しい手続き</h3>
              <div className="space-y-2 text-gray-800">
                <p>投票日当日に仕事やレジャー等で投票に行けない場合は期日前投票ができます</p>
                <p className="font-medium">「宣誓書」を記入して提出する必要があります</p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                  <li>入場整理券裏面（期日前投票用）が宣誓書になっています</li>
                  <li>あらかじめ記入のうえお持ちいただくとスムーズに受付できます</li>
                  <li>宣誓書は期日前投票所にも用意しています</li>
                </ul>
                <p className="text-sm">入場整理券が届かない場合や破損・紛失した場合でも、選挙人名簿に登録されていれば投票できます</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="投票所名や住所で検索..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-bold text-lg text-gray-900 flex-1">{location.name}</h3>
                  {location.isDaily && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      毎日開設
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 font-medium">{location.address}</p>
                      <button
                        onClick={() => openGoogleMaps(location.address)}
                        className="mt-1 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Map className="w-4 h-4" />
                        地図で見る
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700">投票期間</p>
                      <p className="text-sm text-gray-700">{location.period}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700">投票時間</p>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{location.hours}</p>
                    </div>
                  </div>

                  {location.notes && location.notes !== '毎日開設' && (
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">{location.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">期日前投票所 概要</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium mb-1">投票所数</p>
                  <p className="text-4xl font-bold">{votingLocations.length}箇所</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
              </div>
              <p className="text-blue-100 text-sm mt-3">市内各地に設置</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium mb-1">毎日開設</p>
                  <p className="text-4xl font-bold">{votingLocations.filter(l => l.isDaily).length}箇所</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
              </div>
              <p className="text-green-100 text-sm mt-3">期間中毎日利用可能</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium mb-1">投票期間</p>
                  <p className="text-3xl font-bold">6/16-21</p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
              </div>
              <p className="text-purple-100 text-sm mt-3">最大6日間</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}