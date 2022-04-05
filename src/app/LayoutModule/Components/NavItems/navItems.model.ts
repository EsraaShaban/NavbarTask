import { Injectable } from '@angular/core';
import { INavItem } from '../NavItem/iINavItem';

@Injectable()
export class NavItemsModel {
  
  //======================Data=======================
  public items: Array<INavItem> = new Array<INavItem>();

  //===================Constructor====================
  constructor() { 
    this.setItems();
  }

  //======================Logic=======================

  // Set Items
  public setItems() {
   this.items = [
    {
      text: "Home",
      icon: "home",
      url: "home"
    },
    {
      text: "My Orders",
      icon: "library_add",
      url: "orders"
    },
    {
      text: "Conversations",
      icon: "message",
      url: "conversations"
    },
    {
      text: "More Details",
      icon: "list",
      url: "moreDetails"
    },
   ]
  }

}
