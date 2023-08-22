import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Article } from '../article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  articles: Article[] = []

  constructor(private navCtrl: NavController, private articlesService: ArticlesService) { }

  ionViewWillEnter(){
    this.articles = this.articlesService.getArticles()
  }

  afficherDetails(id: number){
    this.navCtrl.navigateForward(['/tabs/accueil',id])
  }

  ngOnInit() {
  }

}