import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meetings } from './meetings.types'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  host = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Meetings[]> {
    return this.httpClient.get<Meetings[]>(`${this.host}/meetings`);
  }

  getAllRooms(): Observable<Meetings[]> {
    return this.httpClient.get<Meetings[]>(`${this.host}/meetings/:id/rooms`);
  }
  create(meetings: Meetings) {
    return this.httpClient.post<Meetings>(`${this.host}/meetings`, meetings);
  }

  getById(id: number) {
    return this.httpClient.get<Meetings>(`${this.host}/meetings/${id}`);
  }

  update(meetings: Meetings) {
    return this.httpClient.put<any>(`${this.host}/meetings/${meetings.id}`, meetings);
  }
}
