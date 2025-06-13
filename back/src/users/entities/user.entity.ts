import { Entity, PrimaryGenerateColumn, Column } from "typeorm";

@Entity({
    name: 'user'
})

export class User {
    @PrimaryGenerateColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string
}
