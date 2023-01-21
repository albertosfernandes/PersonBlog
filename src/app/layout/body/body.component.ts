import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModelArticles } from 'src/app/model/model-articles';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: ['body-style.component.css'],
})
export class BodyComponent implements OnInit, OnDestroy{

  articles_list;
  article;
  visible:boolean = true
  sub: Subscription[] = [];
  @Output() change_post = new EventEmitter();
  
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
        console.log(this.articles_list);
      })
      )
    }

    load_article(articleId){
      this.sub.push(
        this.article_service.getArticle(articleId)
        .subscribe(articlevalue => {
          this.article = articlevalue[0].post_content;
        },
        erro => {
          console.error('erro ao carregar artigos');
        },
        () => {
//          console.log('meu post: ' + this.article);
          this.visible = false
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