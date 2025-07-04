'use client';

import { useState, useMemo } from 'react';
import { Search, Users, ChevronDown, X, Vote, Filter } from 'lucide-react';
import type { ComparisonFilter } from '@/types/policy';
import { policyCategories, candidates } from '@/data/policies';

interface PolicyComparisonProps {
  onClose?: () => void;
}

export default function PolicyComparison({ onClose }: PolicyComparisonProps) {
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([1, 2, 3, 4, 5]);
  const [filter, setFilter] = useState<ComparisonFilter>({
    categories: [],
    priorities: [],
    searchQuery: ''
  });
  const [expandedCategories, setExpandedCategories] = useState<string[]>(policyCategories.map(cat => cat.id));
  const [showFilters, setShowFilters] = useState(false);

  const filteredComparisons = useMemo(() => {
    let categoriesToShow = policyCategories;
    
    if (filter.categories.length > 0) {
      categoriesToShow = categoriesToShow.filter(cat => filter.categories.includes(cat.id));
    }

    return categoriesToShow.map(category => {
      const candidateComparisons = selectedCandidates.map(candidateId => {
        const candidate = candidates.find(c => c.id === candidateId);
        if (!candidate) return null;

        let policies = candidate.policies.filter(p => p.categoryId === category.id);

        if (filter.priorities.length > 0) {
          policies = policies.filter(p => filter.priorities.includes(p.priority));
        }

        if (filter.searchQuery) {
          policies = policies.filter(p => 
            p.title.toLowerCase().includes(filter.searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(filter.searchQuery.toLowerCase()) ||
            p.tags.some(tag => tag.toLowerCase().includes(filter.searchQuery.toLowerCase()))
          );
        }

        return {
          candidateId,
          candidateName: candidate.name,
          policies
        };
      });

      return {
        category,
        comparisons: candidateComparisons
      };
    }).filter(({ comparisons }) => 
      comparisons.some(c => c !== null && c.policies.length > 0) || !filter.searchQuery
    );
  }, [selectedCandidates, filter]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };


  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return '最重要';
      case 'medium': return '重要';
      case 'low': return '通常';
      default: return '';
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        {/* Title Bar */}
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <Vote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">政策比較ツール</h2>
                <p className="text-xs sm:text-sm text-gray-700 font-medium mt-0 sm:mt-0.5 hidden sm:block">候補者の政策を分野別に比較できます</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden group p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer border border-gray-200"
              >
                <Filter className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="group p-2 sm:p-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-gray-700" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="px-3 sm:px-4 py-3 bg-amber-50 border-b border-amber-200">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              <span className="font-semibold">AIを使用してWeb上の公開情報を収集</span>しています。
              最新情報は<span className="font-semibold">街頭演説等で候補者ご本人にご確認ください</span>。
            </p>
          </div>
        </div>

        {/* Search Bar - Always Visible */}
        <div className="px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="キーワードで検索..."
              className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
              value={filter.searchQuery}
              onChange={(e) => setFilter({ ...filter, searchQuery: e.target.value })}
            />
          </div>
        </div>

        {/* Filters - Collapsible on Mobile */}
        <div className={`${showFilters || 'hidden sm:block'} px-3 pb-3 sm:px-4 sm:pb-4 space-y-2 sm:space-y-3 bg-gray-50 sm:bg-white border-t sm:border-0 border-gray-100`}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {/* Category Filter */}
            <select
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-white sm:bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium"
              value={filter.categories[0] || ''}
              onChange={(e) => setFilter({ ...filter, categories: e.target.value ? [e.target.value] : [] })}
            >
              <option value="">全てのカテゴリー</option>
              {policyCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* Priority Filter */}
            <select
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-white sm:bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium"
              value={filter.priorities[0] || ''}
              onChange={(e) => setFilter({ ...filter, priorities: e.target.value ? [e.target.value as 'high' | 'medium' | 'low'] : [] })}
            >
              <option value="">全ての優先度</option>
              <option value="high">最重要</option>
              <option value="medium">重要</option>
              <option value="low">通常</option>
            </select>
          </div>

          {/* Candidate Filter */}
          <div className="bg-white sm:bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border sm:border-0 border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">表示する候補者:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 sm:gap-2">
              {candidates.map(candidate => (
                <label key={candidate.id} className="flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:bg-gray-50 sm:hover:bg-white px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md sm:rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedCandidates.includes(candidate.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCandidates([...selectedCandidates, candidate.id]);
                      } else {
                        setSelectedCandidates(selectedCandidates.filter(id => id !== candidate.id));
                      }
                    }}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                  />
                  <span className="text-[11px] sm:text-xs md:text-sm text-gray-800 font-medium">{candidate.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {filteredComparisons.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Search className="w-12 h-12 text-gray-500" />
              </div>
              <p className="text-2xl text-gray-700 font-bold mb-4">該当する政策が見つかりません</p>
              <p className="text-lg text-gray-600 font-medium">検索条件を変更してお試しください</p>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 space-y-6">
            {filteredComparisons.map(({ category, comparisons }) => {
              const isExpanded = expandedCategories.includes(category.id);
              
              return (
                <div key={category.id} className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all group cursor-pointer"
                  >
                    <div className="text-left">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                      <p className="text-gray-700 mt-1 md:mt-2 text-sm md:text-lg">{category.description}</p>
                    </div>
                    <div className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br rounded-xl flex items-center justify-center transition-all flex-shrink-0 ml-4 ${isExpanded ? 'from-blue-500 to-purple-600 rotate-180' : 'from-gray-200 to-gray-300'}`}>
                      <ChevronDown className={`w-5 h-5 md:w-7 md:h-7 transition-colors ${isExpanded ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 md:px-10 pb-10 bg-gradient-to-b from-gray-50 to-white">
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6 md:gap-8">
                        {comparisons.filter(c => c !== null).map(comparison => (
                          <div key={comparison!.candidateId} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="mb-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                                  <img 
                                    src={candidates.find(c => c.id === comparison!.candidateId)?.image}
                                    alt={comparison!.candidateName}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" fill="%23f3f4f6"/%3E%3Cpath d="M24 24m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M24 17a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM24 28c-5 0-9 2.5-9 5v2.5h18v-2.5c0-2.5-4-5-9-5z" fill="%23d1d5db"/%3E%3C/svg%3E';
                                    }}
                                  />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-gray-900 line-clamp-1">{comparison!.candidateName}</h4>
                              </div>
                            </div>
                            {comparison!.policies.length === 0 ? (
                              <p className="text-sm md:text-base text-gray-500 italic text-center py-8 md:py-12 font-medium">この分野の政策は見つかりませんでした</p>
                            ) : (
                              <div className="space-y-4 md:space-y-5">
                                {comparison!.policies.map(policy => (
                                  <div key={policy.id} className="group bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 md:p-6 hover:from-white hover:to-blue-50 hover:shadow-md transition-all border border-gray-200">
                                    <div className="mb-3">
                                      <h5 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-relaxed mb-2">{policy.title}</h5>
                                      <span className={`inline-block text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold whitespace-nowrap shadow-sm ${
                                        policy.priority === 'high' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                                        policy.priority === 'medium' ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
                                        'bg-gray-200 text-gray-700'
                                      }`}>
                                        {getPriorityText(policy.priority)}
                                      </span>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-800 mb-3 md:mb-4 leading-relaxed">{policy.description}</p>
                                    {policy.tags.length > 0 && (
                                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                                        {policy.tags.map(tag => (
                                          <span key={tag} className="text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 bg-white text-gray-700 rounded-lg font-medium border border-gray-300 shadow-sm">
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}