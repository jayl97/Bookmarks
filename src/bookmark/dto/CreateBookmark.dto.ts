import { IsNotEmpty, Length } from "class-validator";

export class CreateBookmarkDto {
    @IsNotEmpty({ message: "The bookmark should have a title" })
    @Length(3, 255)
    title: string

    @IsNotEmpty({ message: "The bookmark should have a description" })
    @Length(3)
    description: string
}