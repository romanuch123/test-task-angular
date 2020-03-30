import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications = [];
  notificationSubscription: Subscription;
  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    if (!this.notificationSubscription) {
      this.notificationSubscription = this.notificationService
        .notifications.subscribe((notification) => {
          this.notifications.push(notification);
          setTimeout(
            () => {
              const index = this.notifications.indexOf(notification);
              if (index !== -1) {
                this.notifications.splice(index, 1);
              }
            },
            3000,
          );
        });
    }
  }

  deleteNotification(index) {
    this.notifications.splice(index, 1);
  }

  ngOnDestroy() {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }
}
