import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {path: 'timeline', loadChildren: './timeline/timeline.module'},
  {path: 'notice', loadChildren: './notice/notice.module'}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
