import {HttpHeaders} from '@angular/common/http';

export const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const urlAPI = 'https://localhost:8080/api';
