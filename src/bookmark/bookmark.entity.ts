import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bookmark {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    title: string

    @Column('text')
    description: string
}