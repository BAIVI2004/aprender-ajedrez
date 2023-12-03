import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // Lazyloading
  {path: 'auth',
loadChildren:()=>import('./modules/auth/auth.module').then( m => m.AuthModule)

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}