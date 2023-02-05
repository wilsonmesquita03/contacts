import { Contact } from "../entities/Contact";

export interface IClientCreate {
    email: string
    name: string
    tel_number: string
    password: string
}

export interface IClient {
    id: number
    name: string
    email: string
    tel_number: string
    contacts: Contact[]
    created_at: Date
    updated_at: Date
}

export interface IClientEdit {
    id: string
    name?: string
    email?: string
    tel_number?: string
    password?: string
}

export interface IClientLogin {
    email: string
    password: string
}
