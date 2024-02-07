import { Injectable,inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppGlobalService } from '@baseapp/app-global.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHomeBaseService {

  public appGlobalService = inject(AppGlobalService);
 
  

  config : any = [ {
  "expanded" : false,
  "folder" : true,
  "data" : {
    "properties" : { }
  },
  "children" : [ {
    "data" : {
      "id" : "HOME_PAGE",
      "sysGen" : false,
      "defaultField" : false,
      "properties" : {
        "outline" : false,
        "tileType" : "type_1"
      },
      "new" : false
    },
    "children" : [ {
      "data" : {
        "id" : "726b9e02-0517-4bbb-baf5-46fc64757ffc",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 1",
          "accessControl" : [ "App Admin" ],
          "data" : "homeTile1",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 1",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "dee45963-b020-440e-a22c-ff41c4c01373",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 2",
          "accessControl" : [ "App Admin" ],
          "data" : "homeTile2",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 2",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "4a7987d6-02ca-4f00-837e-5e028832c235",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 3",
          "accessControl" : [ "App Admin" ],
          "data" : "homeTile3",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 3",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "5cc7666e-63c1-4efe-ae55-97431030ff0a",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 4",
          "accessControl" : [ "App Admin" ],
          "data" : "homeTile4",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 4",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "e66775ca-e2f4-46c3-8f62-700394a0090d",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 5",
          "accessControl" : [ "App Admin" ],
          "data" : "homeTile5",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 5",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "5b9e400f-2323-4e79-8bb9-6a0d59398e44",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 6",
          "accessControl" : [ "App Admin" ],
          "data" : "homeTile6",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 6",
      "type" : "homeTile",
      "selected" : false
    } ],
    "expanded" : false,
    "folder" : true,
    "key" : "homePage",
    "title" : "Home Page",
    "type" : "homePage",
    "selected" : false
  } ],
  "title" : "Page",
  "type" : "page",
  "key" : "page",
  "selected" : false
} ];
  
 currentUserRoles = (this.appGlobalService.getCurrentUserData()).userRoles;
 checkAccess: any = (o: string) => this.currentUserRoles.includes(o);

  public getLandingPageData() {
    let accessibleData: any = {
      children: []
    };
    const data: any = (this.config.find((t: { type: string; }) => t.type === "page"))?.children[0];
    if (!environment.prototype) {
      data.children?.filter((tileProps: any) => {
        const tile = tileProps.data?.properties;
        if (tile.accessControl && tile.accessControl.length > 0) {
          if (tile.accessControl.some(this.checkAccess))
            accessibleData.children.push(tileProps);
        }
        else {
          accessibleData.children.push(tileProps);
        }
      })
      accessibleData = { ...data, ...accessibleData };
    }
    else {

      accessibleData = data;
    }
    return accessibleData;
  }
}