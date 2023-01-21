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

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    console.log(this.articles);
  }
}
