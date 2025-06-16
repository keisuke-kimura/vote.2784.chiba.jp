'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Users, Award, BarChart3, PieChart, Calendar, MapPin } from 'lucide-react';
import { electionHistory, calculateElectionStats, ElectionData } from '@/data/election-history';

export default function ElectionHistory() {
  const [selectedElection, setSelectedElection] = useState<number>(0);
  const stats = calculateElectionStats(electionHistory);
  const currentElection = electionHistory[selectedElection];

  // 投票率の変化を計算
  const turnoutChange = selectedElection < electionHistory.length - 1
    ? currentElection.turnout - electionHistory[selectedElection + 1].turnout
    : 0;

  return (
    <div className="py-8">
      {/* 統計サマリー */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">平均投票率</h3>
          </div>
          <p className="text-3xl font-bold text-blue-700">{stats.averageTurnout.toFixed(2)}%</p>
          <p className="text-sm text-gray-600 mt-1">過去3回の平均</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">最新有権者数</h3>
          </div>
          <p className="text-3xl font-bold text-purple-700">{electionHistory[0].totalVoters.toLocaleString()}</p>
          <p className="text-sm text-gray-600 mt-1">2021年時点</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">最高投票率</h3>
          </div>
          <p className="text-3xl font-bold text-green-700">34.55%</p>
          <p className="text-sm text-gray-600 mt-1">2013年選挙</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">現職当選回数</h3>
          </div>
          <p className="text-3xl font-bold text-orange-700">3回</p>
          <p className="text-sm text-gray-600 mt-1">松戸徹氏</p>
        </div>
      </div>

      {/* 選挙選択タブ */}
      <div className="mb-8">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
          {electionHistory.map((election, index) => (
            <button
              key={election.year}
              onClick={() => setSelectedElection(index)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                selectedElection === index
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {election.year}年
            </button>
          ))}
        </div>
      </div>

      {/* 選挙詳細情報 */}
      <div className="space-y-8">
        {/* 基本情報 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              {currentElection.year}年 船橋市長選挙
            </h3>
            <span className="text-sm text-gray-600 font-medium">{currentElection.date}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-700 mb-2">投票率</h4>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-blue-700">{currentElection.turnout}%</p>
                {turnoutChange !== 0 && (
                  <span className={`flex items-center gap-1 text-sm font-medium ${
                    turnoutChange > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {turnoutChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {Math.abs(turnoutChange).toFixed(2)}%
                  </span>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-700 mb-2">総投票数</h4>
              <p className="text-3xl font-bold text-purple-700">{currentElection.totalVotes.toLocaleString()}</p>
              {currentElection.invalidVotes && (
                <p className="text-sm text-gray-600 mt-1">有効票: {(currentElection.totalVotes - currentElection.invalidVotes).toLocaleString()}</p>
              )}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-700 mb-2">有権者数</h4>
              <p className="text-3xl font-bold text-green-700">{currentElection.totalVoters.toLocaleString()}</p>
              {currentElection.invalidVotes && (
                <p className="text-sm text-gray-600 mt-1">無効票: {currentElection.invalidVotes.toLocaleString()}</p>
              )}
            </div>
          </div>

          {/* 候補者別結果 */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              候補者別得票数
            </h4>
            <div className="space-y-3">
              {currentElection.candidates.map((candidate, index) => (
                <div key={index} className="relative bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {candidate.isWinner && (
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div>
                        <h5 className="font-bold text-gray-900">{candidate.name}</h5>
                        {candidate.party && (
                          <p className="text-sm text-gray-600">{candidate.party}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{candidate.votes.toLocaleString()}票</p>
                      <p className="text-sm font-medium text-gray-600">{candidate.percentage}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        candidate.isWinner ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gray-400'
                      }`}
                      style={{ width: `${candidate.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 年代別投票率 */}
        {currentElection.ageGroupTurnout && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-purple-600" />
              年代別投票率
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentElection.ageGroupTurnout.map((group, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                  <h5 className="font-semibold text-gray-700 mb-2">{group.group}</h5>
                  <p className="text-2xl font-bold text-purple-700">{group.turnout}%</p>
                  <div className="mt-2 w-full bg-purple-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-500"
                      style={{ width: `${(group.turnout / 60) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 地区別投票率 */}
        {currentElection.districtTurnout && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              地区別投票率
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentElection.districtTurnout.map((district, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-700">{district.district}</h5>
                    <span className="text-2xl font-bold text-green-700">{district.turnout}%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                      style={{ width: `${(district.turnout / 50) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 投票率推移グラフ */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            投票率の推移
          </h4>
          <div className="flex items-end justify-center gap-8 h-64">
            <div className="text-center">
              <div className="h-48 flex items-end mb-2">
                <div 
                  className="w-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                  style={{ height: `${(34.55 / 40) * 100}%` }}
                />
              </div>
              <p className="font-bold text-gray-900">34.55%</p>
              <p className="text-sm text-gray-600">2013年</p>
            </div>
            
            <div className="text-center">
              <div className="h-48 flex items-end mb-2">
                <div 
                  className="w-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                  style={{ height: `${(28.1 / 40) * 100}%` }}
                />
              </div>
              <p className="font-bold text-gray-900">28.1%</p>
              <p className="text-sm text-gray-600">2017年</p>
            </div>
            
            <div className="text-center">
              <div className="h-48 flex items-end mb-2">
                <div 
                  className="w-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                  style={{ height: `${(28.88 / 40) * 100}%` }}
                />
              </div>
              <p className="font-bold text-gray-900">28.88%</p>
              <p className="text-sm text-gray-600">2021年</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}