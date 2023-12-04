import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // Lazyloading
  {path: 'auth',
loadChildren:()=>import('./modules/auth/auth.module').then( m => m.AuthModule)

},
{
  path: 'inicio',
  loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule),
},
{
path: 'productos',
    loadChildren: () => import('./modules/cursos/cursos.module').then(m => m.CursosModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}