import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogRouting } from './blog-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PostComponent,
        ListComponent,
        CreateComponent
    ],
    imports: [
        CommonModule,
        BlogRouting,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule.forChild()
    ],
    exports: [
        PostComponent,
        ListComponent,
        CreateComponent
    ]
})

export class BlogViewModule { }