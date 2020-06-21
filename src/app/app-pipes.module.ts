import { NgModule } from '@angular/core';
import { UppercasePipe } from './core/_pipes/uppercase.pipe';
import { CasesensitivePipe } from './core/_pipes/casesensitive.pipe';


@NgModule({
    declarations: [
        UppercasePipe,
        CasesensitivePipe
    ],
    imports: [
    ],
    exports: [
        UppercasePipe,
        CasesensitivePipe
    ]
})
export class AppPipeModule { }
