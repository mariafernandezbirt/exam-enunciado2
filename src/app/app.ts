import { Component, signal } from '@angular/core';
import { Api } from './services/service/api';
import { Post } from './models/post.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exam-posts');
  
  constructor(private api: Api) { }

  //posts: Post[] = [];

  posts = signal<Post[]>([]);

  cargarPosts() {
    this.api.getPosts().subscribe(data => {
      this.posts.set(data);
      console.log(this.posts());
    });
  }

  verPost(post: Post) {
  alert(`Título: ${post.title}`);
  }

}
