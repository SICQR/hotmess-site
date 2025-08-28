// Radio types as specified in the business requirements
export type DOW = 'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun';

export interface RadioShow {
  id: string; 
  title: string; 
  slug: string;
  host?: string; 
  day: DOW; 
  start: string; 
  end: string;
  description?: string; 
  tags?: string[]; 
  live?: boolean;
}

export interface NowPlaying { 
  title: string; 
  artist?: string; 
  startedAt?: string;
}