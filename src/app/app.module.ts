import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MainParentComponent } from './main-parent/main-parent.component';
import { SecondaryParentComponent } from './secondary-parent/secondary-parent.component';
import { ChildrenComponent } from './children/children.component';
import { DummyComponent } from './dummy/dummy.component';
import { DummySonComponent } from './dummy-son/dummy-son.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    SecondaryParentComponent,
    ChildrenComponent,
    DummyComponent,
    DummySonComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Generer un composant 'first'
// Insérer un <h1>Hello First</h1> dans le composant first
// Ajouter le composant dans le html de app.component.html
// Vérifier l'affichage
