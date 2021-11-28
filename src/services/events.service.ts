import dayjs from "dayjs";

// Types
import { IEvent, IEventsByTime } from "@typings/event.types";

class EventsService {
  /**
   * Separate events by time (past/future)
   *
   * @param   events - List of all events
   * @param   date   - Comparison date (if not today)
   * @returns Events separated by time
   */
  separateEventsByTime(events: IEvent[], date?: string): IEventsByTime {
    return events.reduce(
      (accum, e) => {
        const isPast = dayjs(date).isAfter(e.date);
        if (isPast) {
          return { ...accum, pastEvents: [...accum.pastEvents, e] };
        } else {
          return { ...accum, futureEvents: [...accum.futureEvents, e] };
        }
      },
      { futureEvents: [], pastEvents: [] } as IEventsByTime,
    );
  }
}

const singleton = new EventsService();
export default singleton;
