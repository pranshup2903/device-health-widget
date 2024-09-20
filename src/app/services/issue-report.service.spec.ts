import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the model matching the API response
export interface IssueReport {
  issue: string;
  quantity: number;
  priority: string;
}

@Injectable({
  providedIn: 'root',
})
export class IssueReportService {
  private apiUrl = 'https://localhost:5001/api/IssueReport'; // Update to your actual API URL

  constructor(private http: HttpClient) {}

  // Method to fetch issue reports from the backend API
  getIssueReports(): Observable<IssueReport[]> {
    return this.http.get<IssueReport[]>(this.apiUrl);
  }
}
