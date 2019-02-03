import { NgModule } from "@angular/core";

import {
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule { }
