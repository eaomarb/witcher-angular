import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestsComponent } from './components/quests/quests.component';
import { HomeComponent } from './components/home/home.component';
import { GwentComponent } from './components/gwent/gwent.component';
import { AchievementsComponent } from './components/achievements/achievements.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quests', component: QuestsComponent },
  { path: 'gwent', component: GwentComponent },
  { path: 'achievements', component: AchievementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
