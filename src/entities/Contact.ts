import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Client } from "./Client";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    email: string

    @Column()
    tel_number: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => Client, (client) => client.contacts)
    client: Client
}