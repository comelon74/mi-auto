import { ContactoComponent } from './pages/contacto/contacto.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const app_routes:Routes=[
    {path:'',component:InicioComponent},
    {path:'mapa',component:MapaComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**',pathMatch:'full', redirectTo:''}
]

@NgModule({
    imports:[
        RouterModule.forRoot(app_routes)
    ],
    exports:[
      RouterModule
    ]
})


export class AppRoutingModule{

}