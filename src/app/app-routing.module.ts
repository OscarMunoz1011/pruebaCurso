import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaGifsComponent } from './pages/gifs/pagina-gifs/pagina-gifs.component';
import { PorPaisComponent } from './pages/paises/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/paises/por-region/por-region.component';
import { PorContinenteComponent } from './pages/paises/por-continente/por-continente.component';

const routes: Routes = [
    {
        path: '',
        component: PaginaGifsComponent,
        pathMatch: 'full'
    },
    {
        path: 'gifs',
        component: PaginaGifsComponent,
    },
    {
        path: 'por-pais',
        component: PorPaisComponent,
    },
    {
        path: 'por-region',
        component: PorRegionComponent,
    },
    {
        path: 'por-continente',
        component: PorContinenteComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
