import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { createTodo } from './todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private appservice: AppService){}
    
    private todos =[]

    @Post("/create")
    createTodo(@Body() data: createTodo){
           const item = {
            id: new Date().getTime(),
            ...data,
            createAt:new Date().toLocaleString(),
            isComplete:false
           }
           this.todos.push(item)
        return {
            msg: "todo created"
        }
    }
    @Get("/get-todos")
    getAllTodos(){
        return {
            todos: this.todos,
            total: this.todos.length,
            msg: "All todos fetched"
        }
    }
}


