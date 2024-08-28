import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('todo')
export class TodoController {

    constructor(private appservice: AppService){}

    @Get("/create")
    createTodo(){
        return this.appservice.createTodo()
    }
}
