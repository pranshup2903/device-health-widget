import { Component, OnInit } from '@angular/core';
import { DeviceHealthData, IssueReportService } from  '../services/issue-report.service'// Import the service

@Component({
  selector: 'app-device-health',
  templateUrl: './device-health.component.html',
  styleUrls: ['./device-health.component.scss']
})
export class DeviceHealthComponent implements OnInit {
  data: DeviceHealthData[] = [];

  private priorityRank: { [key in string]: number } = {
    high: 3,
    medium: 2,
    low: 1
  };

  constructor(private issueReportService: IssueReportService) {}

  ngOnInit() {
    this.issueReportService.getDeviceHealthData().subscribe((response) => {
      this.data = response;
      this.sortData(); // Sort the data once it's fetched
    });
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
