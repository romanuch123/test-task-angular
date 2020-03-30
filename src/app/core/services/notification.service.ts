import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications = new Subject();

  constructor() { }

  sendErrorNotification(title: string, message: string) {
    this.sendNotification('error', title, message);
  }
  sendInfoNotification(title: string, message: string) {
    this.sendNotification('info', title, message);
  }
  sendSuccessNotification(title: string, message: string) {
    this.sendNotification('success', title, message);
  }
  sendNotification(status: string, title: string, message: string) {
    this.notifications.next({ status, title, message });
  }
}
