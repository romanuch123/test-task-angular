import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../interfaces/task';
import { switchMap, flatMap } from 'rxjs/operators';
import { IUser } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private userService: UserService,
  ) { }

  addNewTask(task: ITask): Observable<ITask> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        user.tasks.unshift(task);
        return of(user);
      }),
      switchMap((user) => {
        this.userService.updateUser(user);
        return of(user);
      }),
      switchMap((user) => {
        this.userService.updateAllUsers(user);
        return of(task);
      })
    );
  }
  getUserTasks(): Observable<ITask[]> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        return of(user.tasks);
      }),
    );
  }
  getAllTasks(): Observable<ITask[]> {
    const user = JSON.parse(localStorage.getItem('user'));
    return of(user.tasks);
  }
  updateTask(task: ITask): Observable<ITask> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        user.tasks = user.tasks.map((el) => {
          if (el.id === task.id) {
            return { ...el, ...task };
          }
          return el;
        });
        return of(user);
      }),
      switchMap((user) => {
        this.userService.updateUser(user);
        return of(user);
      }),
      switchMap((user) => {
        this.userService.updateAllUsers(user);
        return of(task);
      })
    );
  }
  deleteTask(taskId: string): Observable<boolean> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        user.tasks = user.tasks.filter(el => el.id !== taskId);
        return of(user);
      }),
      switchMap((user) => {
        this.userService.updateUser(user);
        return of(user);
      }),
      switchMap((user) => {
        this.userService.updateAllUsers(user);
        return of(true);
      })
    );
  }
  shareTask(task: ITask, user: IUser): Observable<string> {
    const userRecipient = user;
    userRecipient.tasks.unshift(task);
    this.userService.updateAllUsers(userRecipient);
    return of(user.email);
  }

}
