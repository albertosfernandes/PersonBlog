import { Injectable } from '@angular/core';
import { ModelArticles } from '../model/model-articles';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: ModelArticles[] = [
    {
      articleId: 1,
      articleTitle: 'Por onde tudo começa!',
      articleDate: '11/12/2021',
      articleResume:
        'No primeiro post eu faço uma prévia sobre o objetivo deste blog e o esboço de um projeto inicial como base para meus futuros estudos e experimentos.',
      articleKeys: '#Route53 #S3',
    },
    {
      articleId: 2,
      articleTitle: 'Segundo artigo de teste',
      articleDate: '11/12/2021',
      articleResume: 'Este é um artigo de teste do segundo artigo.... Criando massa de dados como teste',
      articleKeys: '#teste2',
    },
    {
      articleId: 3,
      articleTitle: 'Terceiro artigo de teste',
      articleDate: '11/12/2021',
      articleResume: 'Este é um artigo de teste para o item 3 da minha lista....',
      articleKeys: '#teste3',
    },
  ];
  constructor(private base: BaseService) {}

  getAll() {
    return this.articles;
  }
}
