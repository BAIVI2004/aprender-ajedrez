// Importa los módulos necesarios de Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';




// Definición del módulo principal de la aplicación usando el decorador NgModule
@NgModule({
    // Declaración de los componentes, directivas y pipes que pertenecen a este módulo
    declarations:[
        AppComponent
    ],

    imports :[
        // Importación de otros módulos necesarios para este módulo
        BrowserModule,
        AppRoutingModule,
        NgModule
        
    ],

    // Proveedores de servicios disponibles para inyección de dependencias en toda la aplicación
    providers: [],
      // Especificación del componente raíz que se utilizará al iniciar la aplicación
    bootstrap: [AppComponent]
})
// Definición de la clase del módulo, que luego se exporta para su uso en otros lugares
export class AppModule {}