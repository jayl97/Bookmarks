import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, password: string) {
        const user = await this.usersService.findByUsername(username)
        const storedPassword = user?.password
        const isMatch = await bcrypt.compare(password, storedPassword || '')
        if (!isMatch) {
            throw new UnauthorizedException()
        }
        const payload = { username: user?.username }
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
