import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { TaskService } from 'src/app/core/services/task.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  newTaskTitle: string = '';
  tasksList: ITask[] = [];

  constructor(
    public taskService: TaskService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.taskService.getUserUncompletedTasks().subscribe((data) => {
      this.tasksList = data;
    });
  }

  addNewTask() {
    this.newTaskTitle = this.newTaskTitle.trim();
    const id: string = `f${(+new Date).toString(16)}`;
    const newTask: ITask = {
      id,
      title: this.newTaskTitle,
      isComplete: false,
      sharedFromUser: '',
    };
    this.taskService.addNewTask(newTask).subscribe((data) => {
      this.tasksList.unshift(data);
      this.newTaskTitle = '';
      this.notificationService.sendSuccessNotification('Added', 'Task successfully added');
    }, () => {
      this.notificationService.sendErrorNotification('Error', 'Error');
    });
  }
  updateTask(task: ITask): void {
    this.taskService.updateTask(task).subscribe(() => {
      this.tasksList.forEach((el) => {
        if (el.id === task.id) {
          el.title = task.title;
          el.isComplete = task.isComplete;
        }
      });
      this.notificationService.sendSuccessNotification('Updated', 'Task successfully updated');
    }, () => {
      this.notificationService.sendErrorNotification('Error', 'Error');
    });
  }
  changeTaskStatus(task: ITask): void {
    const newTask: ITask = { ...task, isComplete: true };
    this.taskService.makeTaskCompleted(newTask).subscribe(() => {
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
