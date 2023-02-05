import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Contact } from "./Contact";
import { Exclude } from "class-transformer";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    @Exclude()
    password: string

    @Column()
    tel_number: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Contact, (contact) => contact.client, {onDelete: "CASCADE", nullable: true})
    contacts: Contact[]
}   