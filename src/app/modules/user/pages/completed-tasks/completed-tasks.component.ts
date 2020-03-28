import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/core/interfaces/task';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit {
  tasksList: ITask[] = [];

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.taskService.getUserTasks().subscribe((data) => {
      this.tasksList = data;
    });
  }
  get filtredTaskList(): ITask[] {
    return this.tasksList.filter(el => el.isComplete);
  }

  updateTask(task: ITask): void {
    this.tasksList.forEach((el) => {
      if (el.id === task.id) {
        el.isComplete = task.isComplete;
      }
    });
  }
}
