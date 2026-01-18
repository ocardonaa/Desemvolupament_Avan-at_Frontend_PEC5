import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ReadCSVService } from '../../services/read-csv.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss'
})
export class GenderComponent {
  males = 0;
  females = 0;
  isBrowser: boolean = false;

  chartData: any = {};

  chartOptions: any = {};

  constructor(private readcsv: ReadCSVService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); //usado por un error en la consola proveniente de Canvas
  }

  createChart() {
    this.chartData = {
      labels: ['Male Students', 'Female Students'],
      datasets: [
        {
          data: [this.males, this.females],
          label: 'Students Resume Data'
        }
      ]
    }
    this.chartOptions = {
      responsive: true
    }
  }

  ngOnInit() {
    this.readcsv.getCsvData('/assets/notas_alumnos-1.csv').subscribe({
      next: (data) => {
        data.forEach(student => {
          if (student.Sexo === 'F') {
            ++this.females;
          }
          else {
            ++this.males;
          }
        });
        this.createChart();
      },
      error: (err) => console.error('Error parsing CSV:', err)
    });
  }

}
