import { Component } from '@angular/core';

export type Task = {
  name: string,
  id: number,
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isModalOpened: boolean = false;
  public taskName: string = '';
  public taskList: Task[] = []

  public toggleModal() {
    this.isModalOpened = !this.isModalOpened;
  }

  public addTask(event?: any) {
    if (!event || event.key === 'Enter') {
      const task: Task = {
        name: this.taskName,
        id: Date.now(),
        completed: false
      }
      
      this.taskList.unshift(task);
  
      this.taskName = '';
      this.toggleModal();
  
      console.log(this.taskList);
    }
  }
}
