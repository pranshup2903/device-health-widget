import { Component, OnInit } from '@angular/core';
import { UnhealthyCountData, IssueReportService } from '../services/issue-report.service'; // Import the updated service

@Component({
  selector: 'app-device-health',
  templateUrl: './device-health.component.html',
  styleUrls: ['./device-health.component.scss']
})
export class DeviceHealthComponent implements OnInit {
  data: UnhealthyCountData[] = [];

  // Mapping object to rename the keys
  keyMapping: { [key: string]: string } = {
    checkInGrade: 'Check-in grade',
    calibrationGrade: 'Calibration grade',
    presenceGrade: 'Presence grade',
    ignitionGrade: 'Ignition grade',
    gpsGrade: 'GPS grade',
    // Add other mappings as needed
  };

  constructor(private issueReportService: IssueReportService) {}

  ngOnInit() {
    this.issueReportService.getUnhealthyCountData().subscribe((response) => {
      this.data = response;
    });
  }

  // Function to get the display name of the key
  getDisplayName(key: string): string {
    return this.keyMapping[key] || key; // Return mapped name or original if no mapping found
  }
}
