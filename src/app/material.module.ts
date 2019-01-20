import { NgModule } from "@angular/core";

import {
    MatButtonModule,
    MatSidenavModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class MaterialModule { }
