import { StudentsRepository } from "../../src/application/repositories/studentsRepository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentsRepository {
    public items: Student[] = [];

    async findByID(id: string): Promise<Student | null> {
        const student = this.items.find(student => student.id == id)    

        if(!student){
            return null;
        }

        return student;
    }
}