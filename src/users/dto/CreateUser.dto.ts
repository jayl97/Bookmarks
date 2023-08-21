import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "" })
    firstname: string

    @IsNotEmpty({ message: "" })
    lastname: string

    @IsNotEmpty({ message: "" })
    username: string

    @IsNotEmpty({ message: "" })
    password: string
}