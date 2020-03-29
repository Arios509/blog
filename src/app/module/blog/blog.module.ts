import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogRouting } from './blog-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        PostComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        BlogRouting,
        MarkdownModule.forChild()
    ],
    exports: [
    ]
})

export class BlogViewModule { }