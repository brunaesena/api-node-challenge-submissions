import { Student } from "../../domain/entities/student";

export interface StudentsRepository {
    findByID(id: string): Promise <Student | null>;
}