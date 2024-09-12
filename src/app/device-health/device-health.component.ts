import { Component, OnInit } from '@angular/core';

// Define a type for priority values
type Priority = 'high' | 'medium' | 'low';

@Component({
  selector: 'app-device-health',
  templateUrl: './device-health.component.html',
  styleUrls: ['./device-health.component.scss']
})
export class DeviceHealthComponent implements OnInit {
  data = [
    { key: 'Overdue for check-in', value: 10, priority: 'high' },
    { key: 'Camera Issue', value: 20, priority: 'high' },
    { key: 'No Vehicle', value: 30, priority: 'medium' },
    { key: 'Wrong Status', value: 40, priority: 'medium' },
    { key: 'Power Disconnects', value: 20, priority: 'high' },
    { key: 'SD Card Issue', value: 20, priority: 'high' },
  ];

  // Define the priority ranking with type assertion
  private priorityRank: { [key in Priority]: number } = {
    high: 3,
    medium: 2,
    low: 1
  };

  ngOnInit() {
    this.sortData(); // Sort the data when the component initializes
  }

  // Sorting function to sort by priority and then by value (descending)
  sortData() {
    this.data.sort((a, b) => {
      // First, sort by priority
      const priorityComparison = this.priorityRank[b.priority as Priority] - this.priorityRank[a.priority as Priority];
      if (priorityComparison !== 0) {
        return priorityComparison;
      }
      // If priorities are equal, sort by value in descending order
      return b.value - a.value;
    });
  }
}
