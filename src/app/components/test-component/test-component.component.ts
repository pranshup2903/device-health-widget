import { Component } from '@angular/core';
import { CircleGraphData, MonitoringService, SumTableData, UserDeviceService } from '@lytx/platform.ui.components';
import { DeviceHealthService } from 'app/services/device-health.service';



@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent {
  data: any[] = [];  // This is the data you want to display in the widget
  unhealthyCount: any;  // Object to store the unhealthyCount details

  constructor(private deviceHealthService: DeviceHealthService) {}

  ngOnInit() {
    
  }

  processData() {
    // Any additional data processing or sorting
  }
}
