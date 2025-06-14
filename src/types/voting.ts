export interface VotingLocation {
  id: number;
  name: string;
  address: string;
  period: string;
  hours: string;
  notes?: string;
  isDaily?: boolean;
}