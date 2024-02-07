import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

export const routes: Routes = [
    {
        path: 'reactive-forms',
        component: ReactiveFormsComponent,

    },
    {
        path: 'template-driven-forms',
        component: TemplateDrivenFormsComponent,

    }
];
