import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../interfaces/task';
import { switchMap } from 'rxjs/operators';
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
        user.uncompletedTasks.unshift(task);
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
  getUserCompletedTasks(): Observable<ITask[]> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        return of(user.completedTasks);
      }),
    );
  }
  getUserUncompletedTasks(): Observable<ITask[]> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        return of(user.uncompletedTasks);
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
        user.uncompletedTasks = user.uncompletedTasks.map((el) => {
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
  makeTaskCompleted(task: ITask): Observable<ITask> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        user.uncompletedTasks = user.uncompletedTasks.filter(el => el.id !== task.id);
        user.completedTasks.unshift(task);
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
  makeTaskUncompleted(task: ITask): Observable<ITask> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        user.completedTasks = user.completedTasks.filter(el => el.id !== task.id);
        user.uncompletedTasks.unshift(task);
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
        user.uncompletedTasks = user.uncompletedTasks.filter(el => el.id !== taskId);
        user.completedTasks = user.completedTasks.filter(el => el.id !== taskId);
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
    userRecipient.uncompletedTasks.unshift(task);
    this.userService.updateAllUsers(userRecipient);
    return of(user.email);
  }

}
