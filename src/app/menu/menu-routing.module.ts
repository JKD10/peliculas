import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{
      path: 'galeria',
      loadChildren: () => import('src/app/galeria/galeria.module').then( m => m.GaleriaPageModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
