import { ApplicationResultEventsMessages } from './application-result-events';

export class ApplicationResult<T = string> {
  public readonly event: ApplicationResultEventsMessages;
  public readonly message?: T;

  public constructor(event: ApplicationResultEventsMessages, message?: T) {
    this.event = event;
    this.message = message;
  }
}
