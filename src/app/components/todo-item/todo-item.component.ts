import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
    @Input() task!: any

    ngOnInit(): void {
        console.log(this.task);
    }
}