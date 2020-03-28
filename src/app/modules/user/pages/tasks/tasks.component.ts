import { Component, OnInit, DoCheck } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, DoCheck {
  newTaskTitle: string = '';
  tasksList: ITask[] = [];

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskService.getUserTasks().subscribe((data) => {
      this.tasksList = data;
    });
  }
  ngDoCheck(): void {

  }

  get filtredTaskList(): ITask[] {
    return this.tasksList.filter(el => !el.isComplete);
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
    },
    () => {

    });
  }
  updateTask(task: ITask): void {
    this.tasksList.forEach((el) => {
      if (el.id === task.id) {
        el.title = task.title;
        el.isComplete = task.isComplete;
      }
    });
  }
}
