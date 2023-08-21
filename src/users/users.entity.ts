import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    firstname: string

    @Column("varchar")
    lastname: string

    @Column("varchar")
    username: string

    @Column("varchar")
    password: string

    @BeforeInsert()
    async setPassword() {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
    }
}