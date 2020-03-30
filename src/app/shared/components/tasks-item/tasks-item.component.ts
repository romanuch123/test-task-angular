import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { TaskService } from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/interfaces/user';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() tasksItem: ITask;
  @Output() onUpdateTask = new EventEmitter<ITask>();
  @Output() onChangeTaskStatus = new EventEmitter<ITask>();
  @Output() onDeleteTask = new EventEmitter<string>();
  @ViewChild('sharedButton') sharedButton: ElementRef;
  @ViewChild('taskItemContainer') taskItemContainer: ElementRef;

  isEdit: boolean = false;
  isSharedOpen: boolean = false;
  isStartEdit: boolean = true;
  newTaskTitle: string = '';
  users: IUser[] = [];
  user: IUser;

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.newTaskTitle = this.tasksItem.title;
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
    this.userService.getUser().subscribe((data) => {
      this.user = data;
    });
  }

  get sharedUsers(): IUser[] {
    return this.users.filter(el => el.id !== this.user.id);
  }

  updateTask(): void {
    this.newTaskTitle = this.newTaskTitle.trim();
    const newTask: ITask = {
      ...this.tasksItem,
      title: this.newTaskTitle,
    };
    this.onUpdateTask.emit(newTask);
    this.isEdit = false;
  }
  changeTaskStatus(): void {
    this.onChangeTaskStatus.emit(this.tasksItem);
  }
  deleteTask(taskId: string): void {
    this.onDeleteTask.emit(taskId);
  }
  closeEditing(): void {
    this.isEdit = false;
    this.newTaskTitle = this.tasksItem.title;
  }
  sharedTask(task: ITask, user: IUser): void {
    const sharedTask: ITask = { ...task, sharedFromUser: this.user.email };
    this.taskService.shareTask(sharedTask, user).subscribe((data) => {
      this.isSharedOpen = false;
      this.notificationService.sendSuccessNotification('Shared', `Task shared with ${user.email}`);
    }, () => {
      this.notificationService.sendErrorNotification('Error', 'Error');
    });
  }
  clickOutsideSharedBlock(event: ElementRef) {
    if (!this.sharedButton || !this.sharedButton.nativeElement.contains(event)) {
      this.isSharedOpen = false;
    }
  }
  clickOutsideEdit(event: ElementRef) {
    if (!this.isStartEdit) {
      this.isEdit = false;
      this.isStartEdit = true;
    } else if (this.taskItemContainer.nativeElement.children[0].value) {
      this.isStartEdit = false;
    }
  }
}
