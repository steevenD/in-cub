import {HttpHeaders} from '@angular/common/http';

export const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const urlAPI = 'http://localhost:3000/';
