import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Priority = 'high' | 'medium' | 'low';

interface DeviceHealthData {
  key: string;
  value: number;
  priority: Priority;
}

@Component({
  selector: 'app-device-health',
  templateUrl: './device-health.component.html',
  styleUrls: ['./device-health.component.scss']
})
export class DeviceHealthComponent implements OnInit {
  data: DeviceHealthData[] = [];

  private priorityRank: { [key in Priority]: number } = {
    high: 3,
    medium: 2,
    low: 1
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData().subscribe((response) => {
      this.data = response;
      this.sortData(); // Sort the data once it's fetched
    });
  }

  fetchData(): Observable<DeviceHealthData[]> {
    return this.http.get<DeviceHealthData[]>('assets/device-health-data.json');
  }

  sortData() {
    this.data.sort((a, b) => {
      const priorityComparison = this.priorityRank[b.priority] - this.priorityRank[a.priority];
      if (priorityComparison !== 0) {
        return priorityComparison;
      }
      return b.value - a.value;
    });
  }
}
