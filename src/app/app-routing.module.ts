import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { MenuComponent } from './menu/menu.component';
import { ModificarusuariosComponent } from './modificarusuarios/modificarusuarios.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
 {path: "", component: HomeComponent},
 {path: "home", component: HomeComponent},
 {path: "menu", component: MenuComponent},
 {path: "registrar", component: FormularioComponent},
 {path: "listar_productos", component: ListarusuariosComponent},
 {path: "modificar", component: ModificarusuariosComponent},
 
 {path: "**", component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
