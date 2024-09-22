import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UnhealthyCountData {
  key: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class IssueReportService {
  private apiUrl = 'http://localhost:5003/devicehealth'; // The new API endpoint

  constructor(private http: HttpClient) {}

  // Send POST request and map response to UnhealthyCountData format
  getUnhealthyCountData(): Observable<UnhealthyCountData[]> {
    const requestBody = {
      healthParams: ["Check In"],
      companyId: null,
      sortOrder: "desc",
      scrollId: null,
      size: 2
    };

    return this.http.post<any>(this.apiUrl, requestBody).pipe(
      map((response) => {
        const unhealthyCount = response.unhealthyCount;
        // Convert unhealthyCount to an array of { key, value }
        const unhealthyCountArray = Object.keys(unhealthyCount).map(key => ({
          key,
          value: unhealthyCount[key]
        }));
        // Sort by value in descending order and take the top 5
        return unhealthyCountArray.sort((a, b) => b.value - a.value).slice(0, 5);
      })
    );
  }
}
