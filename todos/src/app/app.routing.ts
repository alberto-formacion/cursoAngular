import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'todos', component: TodoComponent},
    {path:'todos/:nombreTodoParam', component: TodoComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = new Array<any>();
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);