'use client';

import { useMemo } from 'react';
import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';
import { usePolicyData } from '@/hooks/usePolicyData';

export default function PolicySummary() {
  const { getPolicyStatistics, getTopPoliciesByPriority, policyCategories } = usePolicyData();
  
  const stats = useMemo(() => getPolicyStatistics(), [getPolicyStatistics]);
  const highPriorityPolicies = useMemo(() => getTopPoliciesByPriority('high', 5), [getTopPoliciesByPriority]);

  const getCategoryName = (categoryId: string) => {
    return policyCategories.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BarChart3 className="w-6 h-6" />
        政策データサマリー
      </h2>

      {/* 全体統計 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">総政策数</p>
              <p className="text-2xl font-bold text-blue-900">{stats.totalPolicies}</p>
            </div>
            <PieChart className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">重要政策</p>
              <p className="text-2xl font-bold text-green-900">{stats.policiesByPriority.high}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">政策分野</p>
              <p className="text-2xl font-bold text-purple-900">{Object.keys(stats.policiesByCategory).length}</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">候補者数</p>
              <p className="text-2xl font-bold text-orange-900">{Object.keys(stats.policiesByCandidate).length}</p>
            </div>
            <Users className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 分野別政策数 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">分野別政策数</h3>
          <div className="space-y-3">
            {Object.entries(stats.policiesByCategory)
              .sort(([,a], [,b]) => b - a)
              .map(([categoryId, count]) => {
                const percentage = (count / stats.totalPolicies) * 100;
                return (
                  <div key={categoryId} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 flex-1">
                      {getCategoryName(categoryId)}
                    </span>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8 text-right">{count}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* 候補者別政策数 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">候補者別政策数</h3>
          <div className="space-y-3">
            {Object.entries(stats.policiesByCandidate)
              .sort(([,a], [,b]) => b - a)
              .map(([candidateName, count]) => {
                const percentage = (count / stats.totalPolicies) * 100;
                return (
                  <div key={candidateName} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 flex-1">
                      {candidateName}
                    </span>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8 text-right">{count}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* 重要度別分布 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">重要度別分布</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600 font-medium">重要</p>
            <p className="text-2xl font-bold text-red-900">{stats.policiesByPriority.high}</p>
            <p className="text-xs text-red-600">
              {((stats.policiesByPriority.high / stats.totalPolicies) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-600 font-medium">中程度</p>
            <p className="text-2xl font-bold text-yellow-900">{stats.policiesByPriority.medium}</p>
            <p className="text-xs text-yellow-600">
              {((stats.policiesByPriority.medium / stats.totalPolicies) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600 font-medium">低</p>
            <p className="text-2xl font-bold text-green-900">{stats.policiesByPriority.low}</p>
            <p className="text-xs text-green-600">
              {((stats.policiesByPriority.low / stats.totalPolicies) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* 重要政策一覧 */}
      {highPriorityPolicies.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">注目の重要政策</h3>
          <div className="space-y-3">
            {highPriorityPolicies.map(policy => (
              <div key={policy.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{policy.title}</h4>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                    重要
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{policy.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {getCategoryName(policy.categoryId)}
                  </span>
                  {policy.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}