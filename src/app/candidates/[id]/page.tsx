'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';
import { ArrowLeft, Calendar, MapPin, Award, Vote, Target, BookOpen, Twitter, Facebook, Instagram } from 'lucide-react';
import { candidates, policyCategories } from '@/data/policies';
import type { PolicyItem } from '@/types/policy';

interface PolicyByCategory {
  id: string;
  name: string;
  description: string;
  policies: PolicyItem[];
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function CandidateDetailPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const candidate = candidates.find(c => c.id === parseInt(resolvedParams.id));

  if (!candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">候補者が見つかりません</h1>
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            トップページへ戻る
          </button>
        </div>
      </div>
    );
  }

  // Group policies by category
  const policiesByCategory: PolicyByCategory[] = policyCategories
    .map(category => ({
      ...category,
      policies: candidate.policies.filter(p => p.categoryId === category.id)
    }))
    .filter(category => category.policies.length > 0);

  const getPriorityText = (priority: PolicyItem['priority']) => {
    switch (priority) {
      case 'high': return '最重要';
      case 'medium': return '重要';
      case 'low': return '通常';
    }
  };

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
                <p className="text-xs text-gray-600 font-medium">候補者詳細</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Candidate Info */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Profile Image and Basic Info */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-56 h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl mx-auto overflow-hidden shadow-xl">
                  <img 
                    src={candidate.image} 
                    alt={candidate.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="224" height="224" viewBox="0 0 224 224"%3E%3Crect width="224" height="224" fill="%23f3f4f6"/%3E%3Cpath d="M112 112m-48 0a48 48 0 1 0 96 0a48 48 0 1 0 -96 0M112 68a20 20 0 1 0 0 40a20 20 0 0 0 0-40zM112 128c-20 0-36 10-36 20v10h72v-10c0-10-16-20-36-20z" fill="%23d1d5db"/%3E%3C/svg%3E';
                    }}
                  />
                </div>
                {candidate.id === 1 && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg">
                    現職
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-2">{candidate.name}</h1>
              <p className="text-lg font-medium text-gray-700 mb-6">{candidate.party}</p>
              
              <div className="space-y-3 text-left bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">年齢</p>
                    <p className="font-medium text-gray-900">{candidate.age}歳</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">出身地</p>
                    <p className="font-medium text-gray-900">{candidate.birthplace}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">前職</p>
                    <p className="font-medium text-gray-900">{candidate.previousRole}</p>
                  </div>
                </div>
              </div>
              {candidate.website && (
                <div className="mt-6">
                  <a 
                    href={candidate.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>公式サイト</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
              {candidate.sns && (
                <div className="mt-4 space-y-3">
                  {candidate.sns.twitter && (
                    <a 
                      href={`https://twitter.com/${candidate.sns.twitter.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                    >
                      <Twitter className="w-5 h-5 text-gray-700" />
                      <span className="text-sm font-medium text-gray-700">{candidate.sns.twitter}</span>
                    </a>
                  )}
                  {candidate.sns.facebook && (
                    <a 
                      href={candidate.sns.facebook.startsWith('http') ? candidate.sns.facebook : `https://www.facebook.com/${encodeURIComponent(candidate.sns.facebook)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                    >
                      <Facebook className="w-5 h-5 text-gray-700" />
                      <span className="text-sm font-medium text-gray-700">
                        {candidate.sns.facebook.startsWith('http') ? 'Facebook' : candidate.sns.facebook}
                      </span>
                    </a>
                  )}
                  {candidate.sns.instagram && (
                    <a 
                      href={`https://www.instagram.com/${candidate.sns.instagram.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                    >
                      <Instagram className="w-5 h-5 text-gray-700" />
                      <span className="text-sm font-medium text-gray-700">{candidate.sns.instagram}</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Profile and Vision */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  ビジョン・基本理念
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <p className="text-xl font-semibold text-gray-900 mb-4 leading-relaxed">{candidate.vision}</p>
                  <p className="text-gray-800 leading-relaxed">{candidate.background}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  経歴・実績
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-gray-800 whitespace-pre-line leading-relaxed">{candidate.career}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">主な経歴・実績</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />
              <div className="space-y-8">
                {candidate.experience.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center z-10">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <p className="text-gray-800 font-medium">{exp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要政策・公約</h2>
            <p className="text-lg text-gray-600">分野別に具体的な政策をご紹介します</p>
          </div>
          
          {policiesByCategory.map(category => (
            <div key={category.id} className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                <p className="text-gray-700 mt-2 font-medium">{category.description}</p>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {category.policies.map(policy => (
                    <div key={policy.id} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gray-300">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{policy.title}</h4>
                        <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          policy.priority === 'high' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                          policy.priority === 'medium' ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {getPriorityText(policy.priority)}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{policy.description}</p>
                      <p className="text-sm text-gray-800 leading-relaxed">{policy.details}</p>
                      {policy.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {policy.tags.map(tag => (
                            <span key={tag} className="text-xs px-3 py-1 bg-white text-gray-700 rounded-lg font-medium border border-gray-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">他の候補者も比較してみましょう</h3>
          <p className="text-gray-700 mb-8 font-medium">各候補者の政策を比較して、あなたに最適な選択を</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/')}
              className="group bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg border border-gray-200 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              候補者一覧に戻る
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              ページトップへ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}