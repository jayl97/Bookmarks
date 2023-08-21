import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.createUser(createUserDto)
    }

    @Get()
    findAllUsers() {
        return this.usersService.findAllUsers()
    }

    @Get(':username')
    findByUsername(@Param('username') username: string) {
        return this.usersService.findByUsername(username)
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(+id, updateUserDto)
    }

    @Delete(':id')
    removeUser(@Param('id') id: string) {
        return this.usersService.removeUser(+id)
    }
}
