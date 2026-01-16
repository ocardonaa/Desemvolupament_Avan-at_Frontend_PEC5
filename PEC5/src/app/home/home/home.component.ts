import { Component } from '@angular/core';
import { StudentDTO } from '../../models/student-dto.model';
import { ReadCSVService } from '../../services/read-csv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  students: any[] = [];

  constructor(private readcsv: ReadCSVService) {
  }

  ngOnInit() {
    this.readcsv.getCsvData('/assets/notas_alumnos-1.csv').subscribe({
      next: (data) => {
        data.forEach(student => {
          const newStudent = new StudentDTO(student.ID_Alumno, student.Nombre, student.Apellidos, student.Sexo, student.Nota_Final, student.Faltas_Asistencia);
          this.students.push(newStudent);
        });
      },
      error: (err) => console.error('Error parsing CSV:', err)
    });
  }
}
