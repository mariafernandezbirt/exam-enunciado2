import { Injectable } from '@angular/core';
import { Post } from '../../models/post.modelo';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Api {
  
  //constructor
  constructor(private http: HttpClient) { }

  //metodo del servicio que devuelve un objeto del tipo modelo de datos (interface Post)
  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
