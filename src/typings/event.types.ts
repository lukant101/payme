/** Base event shape */
export interface IEventBase {
  id: string;
  /** Event date */
  date: string;
  /** Event name/title */
  title: string;
}

export interface IEvent extends IEventBase {
  /** When event was created */
  createdAt: string;
  /** Event cost */
  cost?: number;
  /** Event description */
  description?: string;
  /** Event statistics (optional) */
  stats?: IEventStats;
}

/** Separate events by time (future vs past) */
export interface IEventsByTime {
  /** Future events */
  futureEvents: IEvent[];
  /** Past events */
  pastEvents: IEvent[];
}

/** Event statistics */
export interface IEventStats {
  /** Number of attendees */
  attending: number;
  /** Number of unpaid attendees */
  unpaid: number;
}
