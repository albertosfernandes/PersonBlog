import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ModelArticles } from '../model/model-articles';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: ModelArticles[] = [
    {
      articleId: 1,
      title: 'Por onde tudo começa!',
      date_of_included: '11/12/2021',
      introduction:
        'No primeiro post eu faço uma prévia sobre o objetivo deste blog e o esboço de um projeto inicial como base para meus futuros estudos e experimentos.'
    }
  ];
  constructor(private base: BaseService) {}

  getAll() {
    return this.articles;
  }

  getAllArticles() {
    return this.base.httpBase
    .get(this.base.urlapi + '/prod')
    .pipe(
      tap(
        data => console.log(data),
        err => console.log(err.error)
      )
    )
  }

  getArticle(articleId) {
    console.log("chamando o: " + articleId)
    return this.base.httpBase
    .get(this.base.urlapi + '/prod?articleId='+articleId)
    .pipe(
      tap(
        data => console.log("Sucesso na execucao do servico"),
        err => console.log(err.error)
      )
    )
  }
}
