import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from './room.types'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  host = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${this.host}/rooms`);
  }
  create(rooms: Room) {
    return this.httpClient.post<Room>(`${this.host}/rooms`, rooms);
  }

  getById(id: number) {
    return this.httpClient.get<Room>(`${this.host}/rooms/${id}`);
  }

  update(room: Room) {
    return this.httpClient.put<any>(`${this.host}/rooms/${room.id}`, room);
  }

}
