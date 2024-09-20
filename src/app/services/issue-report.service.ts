import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Define the types
type Priority = 'high' | 'medium' | 'low';

export interface DeviceHealthData {
  key: string;
  value: number;
  priority: Priority;
}

export interface IssueReport {
  issue: string;
  quantity: number;
  priority: Priority;
}

@Injectable({
  providedIn: 'root'
})
export class IssueReportService {
  private apiUrl = 'http://localhost:5141/api/issues'; // Your .NET API endpoint

  constructor(private http: HttpClient) {}

  // Fetch data from the .NET API and map to DeviceHealthData format
  getDeviceHealthData(): Observable<DeviceHealthData[]> {
    return this.http.get<IssueReport[]>(this.apiUrl).pipe(
      map((issueReports: IssueReport[]) => 
        issueReports.map((issueReport) => ({
          key: issueReport.issue,      // Map 'issue' to 'key'
          value: issueReport.quantity, // Map 'quantity' to 'value'
          priority: issueReport.priority
        }))
      )
    );
  }
}
