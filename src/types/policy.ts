export interface PolicyCategory {
  id: string;
  name: string;
  description: string;
}

export interface PolicyItem {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  details: string;
  priority: 'high' | 'medium' | 'low';
  tags: string[];
}

export interface Candidate {
  id: number;
  name: string;
  party: string;
  image: string;
  bio: string;
  experience: string[];
  policies: PolicyItem[];
  age?: number;
  birthplace?: string;
  previousRole?: string;
  vision?: string;
  background?: string;
  career?: string;
  website?: string;
  sns?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface PolicyComparison {
  categoryId: string;
  categoryName: string;
  candidates: {
    candidateId: number;
    candidateName: string;
    policy: PolicyItem | null;
  }[];
}

export interface ComparisonFilter {
  categories: string[];
  priorities: ('high' | 'medium' | 'low')[];
  searchQuery: string;
}