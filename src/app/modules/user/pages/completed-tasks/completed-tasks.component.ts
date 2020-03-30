import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/core/interfaces/task';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit {
  tasksList: ITask[] = [];

  constructor(
    private taskService: TaskService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.taskService.getUserCompletedTasks().subscribe((data) => {
      this.tasksList = data;
    });
  }

  updateTask(task: ITask): void {
    this.taskService.updateTask(task).subscribe(() => {
      this.tasksList.forEach((el) => {
        if (el.id === task.id) {
          el.isComplete = task.isComplete;
        }
      });
      this.notificationService.sendSuccessNotification('Updated', 'Task successfully updated');
    }, () => {
      this.notificationService.sendErrorNotification('Error', 'Error');
    });
  }
  changeTaskStatus(task: ITask): void {
    const newTask: ITask = { ...task, isComplete: false };
    this.taskService.makeTaskUncompleted(newTask).subscribe(() => {
      this.tasksList = this.tasksList.filter(el => el.id !== task.id);
      this.notificationService.sendSuccessNotification('Completed', 'Task was completed');
    }, () => {
      this.notificationService.sendErrorNotification('Error', 'Error');
    });
  }
  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasksList = this.tasksList.filter(el => el.id !== taskId);
      this.notificationService.sendSuccessNotification('Deleted', 'Task successfully Deleted');
    }, () => {
      this.notificationService.sendErrorNotification('Error', 'Error');
    });
  }
}
