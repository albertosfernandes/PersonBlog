import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ModelArticles } from '../model/model-articles';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  
  constructor(private base: BaseService) {}

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
