export interface Speech {
  id: string;
  candidateName: string;
  party: string;
  date: string;
  location: string;
  time: string;
  remarks?: string;
  source?: string;
}

export interface SpeechSchedule {
  candidateId: number;
  candidateName: string;
  speeches: Speech[];
}