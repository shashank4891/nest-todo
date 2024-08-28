import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { createTodo, updateTodo } from './todo.dto';

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

    @Put("/update/:id")
    updateTodosById(@Param('id') id:number, @Body() data:updateTodo){
        const new_todo = this.todos.map((cur, i)=>{
            if(cur.id == id){
                return {
                    ...cur,
                    ['title']: data.title,
                    isComplete: true
                }
            }
            return cur 
        })
        this.todos = new_todo
        return {
            msg: "todo is updated"
        }       
    }

    @Delete("/delete/:id")
    deleteTodosById(@Param('id') id:number){
        const new_todo = this.todos.filter((cur)=>cur.id != id)
        this.todos = new_todo
        return {
            msg: "todo is deleted"
        }       
    }
}


