import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ReadCSVService } from '../../services/read-csv.service';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-general-results',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './general-results.component.html',
  styleUrl: './general-results.component.scss'
})
export class GeneralResultsComponent {
  passed_students = 0;
  failed_students = 0;
  isBrowser: boolean = false;

  chartData: any = {};

  chartOptions: any = {};

  constructor(private readcsv: ReadCSVService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  createChart() {
    this.chartData = {
      labels: ['Failed Students', 'Passed Students'],
      datasets: [
        {
          data: [this.failed_students, this.passed_students],
          label: 'Passed/Failed Resume Data'
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
          if (student.Nota_Final < 5) {
            ++this.failed_students;
          }
          else {
            ++this.passed_students;
          }
        });
        this.createChart();
      },
      error: (err) => console.error('Error parsing CSV:', err)
    });
  }
}
