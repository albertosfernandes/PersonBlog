import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: ['body-style.component.css'],
})
export class BodyComponent implements OnInit, OnDestroy{

  articles_list;
  sub: Subscription[] = [];
  
  constructor(private article_service:ArticleService) {}
  
  load_articles(){
    this.sub.push(
      this.article_service.getAllArticles()
      .subscribe(articles => {
        this.articles_list = articles;
      },
      erro => {
        console.error('erro ao carregar artigos');
      },
      () => {
        //fim
        console.log(this.articles_list);
      })
      )
    }
    ngOnInit(): void {
      this.load_articles();
    }
    ngOnDestroy(): void {
      this.sub.forEach(s => s.unsubscribe);
    }
}