import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbCarouselModule, NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { DropDownBasicComponent } from './dropdown-basic/dropdown-basic.component';
import { CollapseBasicComponent } from './Collapse/collapse-basic/collapse-basic.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbCarouselModule,
        NgbDropdownModule,
        NgbCollapseModule,
        FormsModule,
    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CarouselComponent,
    DropDownBasicComponent,
    CollapseBasicComponent,
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CarouselComponent,
        DropDownBasicComponent,
        CollapseBasicComponent
    ]
})
export class ComponentsModule { }
