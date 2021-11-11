import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: "full"
  },
  {
    path:'login',
    loadChildren:()=> import('./pages/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path:'pages',
    loadChildren:()=> import('./pages/pages.module').then(m=> m.PagesModule),
    canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
