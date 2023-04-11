import { TesteService } from './teste.service';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './paginas/novo-componente/novo-componente.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    DiretivasComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule
  ],
  providers: [TesteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
