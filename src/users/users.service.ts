import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    @Inject("USER_REPOSITORY")

    private userRepository: Repository<Users>

    async createUser(createUserDto: CreateUserDto): Promise<{ firstname: String, lastname: String, username: String }> {
        const userEntity = Object.assign(new Users(), createUserDto)
        const createdUser = await this.userRepository.save(userEntity)
        const { password, ...userWithoutPassword } = createdUser
        return userWithoutPassword
    }

    async findAllUsers(): Promise<Users[]> {
        return this.userRepository.find()
    }

    findByUsername(username: string) {
        return this.userRepository.findOneBy({ username })
    }

    updateUser(id: number, updateUserDto: UpdateUserDto) {
        const updatedUser = this.userRepository.update(id, updateUserDto)
        return updatedUser
    }

    removeUser(id: number) {
        return this.userRepository.delete(id)
    }
}
