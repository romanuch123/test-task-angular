import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { TaskService } from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() tasksItem: ITask;
  @Output() onUpdateTask = new EventEmitter<ITask>();
  @Output() onDeleteTask = new EventEmitter<string>();

  isEdit: boolean = false;
  isSharedOpen: boolean = false;
  newTaskTitle: string = '';
  users: IUser[] = [];
  user: IUser;

  constructor(
    private taskService: TaskService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.newTaskTitle = this.tasksItem.title;
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  updateTask(): void {
    this.newTaskTitle = this.newTaskTitle.trim();
    const newTask: ITask = {
      ...this.tasksItem,
      title: this.newTaskTitle,
    };
    this.taskService.updateTask(newTask).subscribe(() => {
    });
    this.onUpdateTask.emit(newTask);
    this.isEdit = false;
  }
  changeTaskCompleteStatus(): void {
    this.newTaskTitle = this.newTaskTitle.trim();
    const newTask: ITask = {
      ...this.tasksItem,
      isComplete: !this.tasksItem.isComplete,
    };
    this.taskService.updateTask(newTask).subscribe(() => {
    });
    this.onUpdateTask.emit(newTask);
  }

  deleteTask(taskId: string): void {
    this.onDeleteTask.emit(taskId);
  }
  closeEditing(): void {
    this.isEdit = false;
    this.newTaskTitle = this.tasksItem.title;
  }
}
