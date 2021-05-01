import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnglishCvComponent} from './english-cv/english-cv.component';
import {SpanishCvComponent} from './spanish-cv/spanish-cv.component';


const routes: Routes = [
  {
    path: 'en',
    component: EnglishCvComponent,
  },
  {
    path: 'es',
    component: SpanishCvComponent,
  },
  { path: '',   redirectTo: '/en', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
