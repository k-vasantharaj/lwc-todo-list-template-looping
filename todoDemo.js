import { LightningElement } from 'lwc';

export default class TodoDemo extends LightningElement {
    toDoList=[];
    newTask;

    handleTaskChange(event){
        this.newTask = event.target.value;
    }
    handleAddClick(){
        if(this.newTask){
            let taskId = this.toDoList.length;
        taskId++;
        let taskObj = {
            id : taskId,
            taskName : this.newTask
        }
        this.toDoList = [...this.toDoList, taskObj];
        this.newTask='';
        }
    }
    handleRemoveTask(event){
        let taskId = event.target.name;
        this.toDoList = this.toDoList.filter(task=>task.id !== taskId)
    }

    get isToDoListAvl(){
        return this.toDoList.length > 0;
    }
}
