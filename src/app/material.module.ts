import { NgModule } from "@angular/core";

import {
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule { }
