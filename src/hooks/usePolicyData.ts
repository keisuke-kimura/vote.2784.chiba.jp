'use client';

import React, { useState } from 'react';
import type { Candidate, PolicyItem, PolicyComparison } from '@/types/policy';
import { candidates as initialCandidates, policyCategories } from '@/data/policies';

export function usePolicyData() {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCandidateById = (id: number): Candidate | undefined => {
    return candidates.find(candidate => candidate.id === id);
  };

  const getCandidatesByIds = (ids: number[]): Candidate[] => {
    return candidates.filter(candidate => ids.includes(candidate.id));
  };

  const getPoliciesByCategory = (candidateId: number, categoryId: string): PolicyItem[] => {
    const candidate = getCandidateById(candidateId);
    return candidate?.policies.filter(policy => policy.categoryId === categoryId) || [];
  };

  const searchPolicies = (query: string, candidateIds?: number[]): PolicyItem[] => {
    const targetCandidates = candidateIds ? getCandidatesByIds(candidateIds) : candidates;
    const allPolicies = targetCandidates.flatMap(candidate => candidate.policies);
    
    if (!query.trim()) return allPolicies;

    const lowerQuery = query.toLowerCase();
    return allPolicies.filter(policy => 
      policy.title.toLowerCase().includes(lowerQuery) ||
      policy.description.toLowerCase().includes(lowerQuery) ||
      policy.details.toLowerCase().includes(lowerQuery) ||
      policy.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  const compareByCategory = (candidateIds: number[], categoryId: string): PolicyComparison => {
    const category = policyCategories.find(cat => cat.id === categoryId);
    const targetCandidates = getCandidatesByIds(candidateIds);

    return {
      categoryId,
      categoryName: category?.name || '',
      candidates: targetCandidates.map(candidate => ({
        candidateId: candidate.id,
        candidateName: candidate.name,
        policy: candidate.policies.find(policy => policy.categoryId === categoryId) || null
      }))
    };
  };

  const getComparisonMatrix = (candidateIds: number[]): PolicyComparison[] => {
    return policyCategories.map(category => compareByCategory(candidateIds, category.id))
      .filter(comparison => comparison.candidates.some(c => c.policy !== null));
  };

  const getPolicyStatistics = React.useCallback(() => {
    const stats = {
      totalPolicies: 0,
      policiesByCategory: {} as Record<string, number>,
      policiesByPriority: { high: 0, medium: 0, low: 0 },
      policiesByCandidate: {} as Record<string, number>
    };

    candidates.forEach(candidate => {
      stats.policiesByCandidate[candidate.name] = candidate.policies.length;
      stats.totalPolicies += candidate.policies.length;

      candidate.policies.forEach(policy => {
        stats.policiesByCategory[policy.categoryId] = 
          (stats.policiesByCategory[policy.categoryId] || 0) + 1;
        stats.policiesByPriority[policy.priority]++;
      });
    });

    return stats;
  }, [candidates]);

  const getTopPoliciesByPriority = React.useCallback((priority: 'high' | 'medium' | 'low', limit = 10): PolicyItem[] => {
    const allPolicies = candidates.flatMap(candidate => candidate.policies);
    return allPolicies
      .filter(policy => policy.priority === priority)
      .slice(0, limit);
  }, [candidates]);

  const getCategoryCoverage = (candidateId: number): { covered: string[], missing: string[] } => {
    const candidate = getCandidateById(candidateId);
    if (!candidate) return { covered: [], missing: policyCategories.map(c => c.id) };

    const coveredCategories = [...new Set(candidate.policies.map(p => p.categoryId))];
    const allCategories = policyCategories.map(c => c.id);
    const missingCategories = allCategories.filter(id => !coveredCategories.includes(id));

    return { covered: coveredCategories, missing: missingCategories };
  };

  // シミュレーション: 外部APIからデータを取得する関数
  const refreshPolicyData = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      // 実際の実装では、ここでAPIコールを行う
      await new Promise(resolve => setTimeout(resolve, 1000)); // シミュレーション
      
      // データの更新をシミュレート
      setCandidates(prevCandidates => [...prevCandidates]);
    } catch (err) {
      setError(err instanceof Error ? err.message : '政策データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return {
    // データ
    candidates,
    policyCategories,
    loading,
    error,

    // 基本的な取得関数
    getCandidateById,
    getCandidatesByIds,
    getPoliciesByCategory,

    // 検索・フィルタリング
    searchPolicies,

    // 比較機能
    compareByCategory,
    getComparisonMatrix,

    // 統計・分析
    getPolicyStatistics,
    getTopPoliciesByPriority,
    getCategoryCoverage,

    // データ管理
    refreshPolicyData
  };
}