import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
 
@Component({

    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],

})

 

export class MenuComponent implements OnInit {

    constructor() { }

    isCollapsed = true;
    items: MenuItem[];

    toggleLogin() {
        this.isCollapsed = !this.isCollapsed;
    }

    ngOnInit() {
            this.items = [

                {
                    label: 'HOME', routerLink: 'home'
                },

                {
                    label: 'ORDER MANAGEMENT',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'angIndex', routerLink: ['angIndex']},
                        {label: 'Invoice Inquiry', routerLink: ['invoice-inquiry']},
                        {label: 'Manage Quote', routerLink: ['manage-quote']},
                        {label: 'Order Inquiry', routerLink: ['order-inquiry']},
                    ]
                },

                {
                    label: 'BUILD & BUY',
                },

                {
                    label: 'SELF-SERVICES UTILITIES',

                },

                {
                    label: 'LITERATURE',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Price Catalog', routerLink: ['price-catalog']},
                        {label: 'Intstallation Instructions', routerLink: ['installation-instructions']},
                        {label: 'Order Forms', routerLink: ['order-forms']},
                        {label: 'Corrective Repair', routerLink: ['corrective-repair']},
                        {label: 'Estimatinmg & TakeOff Guides', routerLink: 'estimating-and-take-off-guides'},
                    ]
                },

 

                {
                    label: 'VIDEOS & TRAINING',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Video Library Installation Care', routerLink: 'video-library-installation-care'},
                        {label: 'Training', routerLink: 'training'}
                    ]
                }
            ];
        }
}