import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModelArticles } from '../../model/model-articles';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit, OnChanges, OnDestroy {
  sub: Subscription[] = [];
  articles: ModelArticles[] = [];

  constructor(private serviceArticle: ArticleService) {}

  getAll() {
    this.articles = this.serviceArticle.getAll();
  }

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.getAll();
    console.log(this.articles);
  }
}
