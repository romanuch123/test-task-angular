import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { TaskService } from 'src/app/core/services/task.service';

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
  newTaskTitle: string = '';

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.newTaskTitle = this.tasksItem.title;
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
