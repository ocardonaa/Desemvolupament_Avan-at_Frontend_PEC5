export class StudentDTO {
    id: number;
    name: string;
    surnames: string;
    sex: string;
    grade: number;
    absences: number;

    constructor(id: number, name: string, surnames: string, sex: string, grade: number, absences: number) {
        this.id = id;
        this.name = name;
        this.surnames = surnames;
        this.sex = sex;
        this.grade = grade;
        this.absences = absences;
    }
}
