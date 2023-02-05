import { IClient } from "./client.interface"

export interface IContact {
    id: number
    email: string
    tel_number: string
    created_at: Date
    updated_at: Date
    client: IClient
}

export interface IContactCreate {
    name: string
    email: string
    tel_number: string
    created_at: Date
    updated_at: Date
    client_id: string
}

export interface IContactEdit {
    id: string
    name: string
    email: string
    tel_number: string
}