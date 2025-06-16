'use client';

import React, { useState } from 'react';
import { Speech } from '@/types/speech';
import { CalendarDays, MapPin, Clock, ExternalLink, Info, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface SpeechScheduleProps {
  speeches: Speech[];
  candidateId?: number;
  showCandidateName?: boolean;
}

export default function SpeechSchedule({ speeches, candidateId, showCandidateName = true }: SpeechScheduleProps) {
  const [showPastSpeeches, setShowPastSpeeches] = useState(false);
  
  // 日付でグループ化
  const groupedSpeeches = speeches.reduce((acc, speech) => {
    const date = speech.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(speech);
    return acc;
  }, {} as { [key: string]: Speech[] });

  // 日付順にソート
  const sortedDates = Object.keys(groupedSpeeches).sort();
  
  // 今日の日付を取得
  const today = new Date().toISOString().split('T')[0];
  
  // 日付を分類
  const pastDates = sortedDates.filter(date => date < today);
  const todayDates = sortedDates.filter(date => date === today);
  const futureDates = sortedDates.filter(date => date > today);

  if (sortedDates.length === 0) {
    return (
      <div className="text-gray-500 text-center py-8">
        <p>街頭演説情報はありません</p>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekDay = weekDays[date.getDay()];
    return `${month}月${day}日（${weekDay}）`;
  };

  const renderSpeechItem = (speech: Speech) => (
    <div key={speech.id} className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 space-y-2">
          {showCandidateName && (
            <h4 className="font-semibold text-gray-900">{speech.candidateName}</h4>
          )}
          <div className="flex items-center text-gray-700">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span className="font-medium">{speech.time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span>{speech.location}</span>
          </div>
          {speech.remarks && (
            <div className="flex items-start text-gray-600">
              <Info className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
              <span className="text-sm">{speech.remarks}</span>
            </div>
          )}
        </div>
        {speech.source && (
          <a
            href={speech.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
          >
            <span>詳細</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* 本日の演説 */}
      {todayDates.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md border-2 border-orange-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 px-4 py-3 border-b border-orange-300">
            <div className="flex items-center text-white font-bold">
              <Sparkles className="h-5 w-5 mr-2" />
              本日の街頭演説
              <span className="ml-2 text-sm font-normal">({formatDate(todayDates[0])})</span>
            </div>
          </div>
          <div className="divide-y divide-orange-100">
            {todayDates.map(date => 
              groupedSpeeches[date].map(speech => renderSpeechItem(speech))
            )}
          </div>
        </div>
      )}

      {/* 今後の演説 */}
      {futureDates.map(date => (
        <div key={date} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-blue-50 px-4 py-2 border-b border-gray-200">
            <div className="flex items-center text-blue-700 font-medium">
              <CalendarDays className="h-4 w-4 mr-2" />
              {formatDate(date)}
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {groupedSpeeches[date].map(speech => renderSpeechItem(speech))}
          </div>
        </div>
      ))}

      {/* 過去の演説 */}
      {pastDates.length > 0 && (
        <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setShowPastSpeeches(!showPastSpeeches)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-gray-700">過去の街頭演説 ({pastDates.length}件)</span>
            {showPastSpeeches ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {showPastSpeeches && (
            <div className="border-t border-gray-200">
              {pastDates.reverse().map(date => (
                <div key={date} className="border-b border-gray-100 last:border-b-0">
                  <div className="bg-gray-100 px-4 py-2">
                    <div className="flex items-center text-gray-600 font-medium text-sm">
                      <CalendarDays className="h-3 w-3 mr-2" />
                      {formatDate(date)}
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {groupedSpeeches[date].map(speech => renderSpeechItem(speech))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 演説がない場合 */}
      {todayDates.length === 0 && futureDates.length === 0 && pastDates.length === 0 && (
        <div className="text-gray-500 text-center py-8">
          <p>街頭演説情報はありません</p>
        </div>
      )}
    </div>
  );
}