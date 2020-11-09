import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ImgviewComponent } from './component/imgview/imgview.component';
import { MenuComponent } from './component/menu/menu.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'Gallery', component: MenuComponent},
  { path: 'view', component: ViewComponent },
  { path: 'imgview', component: ImgviewComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
