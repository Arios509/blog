import { Router, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'post', component: PostComponent },
    { path: 'post/:id', component: PostComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class BlogRouting { }