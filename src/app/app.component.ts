import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isModalOpened: boolean = false;
  public taskName: string = '';

  public toggleModal() {
    this.isModalOpened = !this.isModalOpened;
  }

  public addTask() {
    console.log(this.taskName);
    
  }
}
