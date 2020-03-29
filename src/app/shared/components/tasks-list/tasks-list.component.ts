import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() tasksList: ITask[] = [];
  @Output() onUpdateTask = new EventEmitter<ITask>();
  @Output() onDeleteTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  updateTask(task: ITask) {
    this.onUpdateTask.emit(task);
  }
  deleteTask(taskId: string): void {
    this.onDeleteTask.emit(taskId);
  }
}
