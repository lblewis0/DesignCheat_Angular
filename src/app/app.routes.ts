import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HorizontalLayoutsComponent } from './components/layouts/horizontal-layouts/horizontal-layouts.component';
import { VerticalLayoutsComponent } from './components/layouts/vertical-layouts/vertical-layouts.component';

export const routes: Routes = [

    { path: 'layouts' , component: LayoutsComponent},
    { path: 'layouts/horizontal-layouts' , component: HorizontalLayoutsComponent},
    { path: 'layouts/vertical-layouts' , component: VerticalLayoutsComponent},
];
