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
  @Output() onMakeTaskCompleted = new EventEmitter<ITask>();

  isEdit: boolean = false;
  newTaskTitle: string = '';
  isComplete: boolean = false;

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.newTaskTitle = this.tasksItem.title;
  }
  updateTask(): void {
    console.log(this.isComplete);
    this.newTaskTitle = this.newTaskTitle.trim();
    const newTask: ITask = {
      ...this.tasksItem,
      isComplete: this.isComplete,
      title: this.newTaskTitle,
    };
    this.taskService.updateTask(newTask).subscribe(() => {
    });
    this.onUpdateTask.emit(newTask);
    this.isEdit = false;
  }
  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {

    });
  }
  closeEditing() {
    this.isEdit = false;
    this.newTaskTitle = this.tasksItem.title;
  }
}
