import { IsNotEmpty } from "class-validator";

export class createTodo{

    @IsNotEmpty({message: "title must be required"})
    title:string

    @IsNotEmpty({message: "desc must be required"})
    description:string
}