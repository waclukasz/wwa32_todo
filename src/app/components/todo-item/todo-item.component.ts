import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent implements OnInit {
    @Input() taskItem!: any
    @Output() updateTaskState = new EventEmitter<number>()

    ngOnInit(): void {
        console.log(this.taskItem);
    }

    public setTaskCompleted() {
        console.log(this.taskItem.id);
        this.updateTaskState.emit(this.taskItem.id)
    }
}