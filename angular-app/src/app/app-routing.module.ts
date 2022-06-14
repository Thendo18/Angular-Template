import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentone } from './components/componentone/componentone.component';
import { componenttwo } from './components/componenttwo/componenttwo.component';
import { page1 } from '././/pages//page1/page1.component';
import { page2 } from '././/pages//page2/page2.component';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'componentone', component: componentone },
  { path: 'componenttwo', component: componenttwo },
  { path: 'page1', component: page1 },
  { path: 'page2', component: page2 },
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: '**', redirectTo: 'page1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
