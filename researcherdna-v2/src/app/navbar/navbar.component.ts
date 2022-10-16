import { Component, OnInit, Input, Output, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  pages = {home: 0, students: 1, project: 2, toolbox: 3, forum: 4, account: 5}
  @ViewChild("page_0") page_0: any;
  @ViewChild("page_1") page_1: any;
  @ViewChild("page_2") page_2: any;
  @ViewChild("page_3") page_3: any;
  @ViewChild("page_4") page_4: any;
  @ViewChild("page_5") page_5: any;
  setActive = "border-right: 2px solid rgb(0, 170, 255); background-color: rgba(255, 255, 255, 0.669);"
  setInactive = "border-right: 2px solid rgb(0, 170, 255, 0); background-color: rgba(255, 255, 255, 0.);"

  activeElementStyle = {unsetBackgroundColor: "rgba(255, 255, 255, 0)", unsetBorderRightColor: "2px solid rgb(0, 170, 255, 0)", borderRightColor: "2px solid rgb(0, 170, 255)", backgroundColor: "rgba(255, 255, 255, 0.669)"}
  setInitialActiveStyle = `border-right: ${this.activeElementStyle.borderRightColor}; background-color: ${this.activeElementStyle.backgroundColor};`;
  unsetInitialActiveStyle = `border-right: ${this.activeElementStyle.unsetBackgroundColor}; background-color: ${this.activeElementStyle.unsetBackgroundColor};`

  pageStatusesArray = [
    this.setInactive,
    this.setInactive,
    this.setInactive,
    this.setInactive,
    this.setInactive,
    this.setInactive];

  ngOnInit(): void {
    if(localStorage.getItem('sidenav-active-tag-number') == null){
      setInitialPageActive(this.pageStatusesArray, this.setActive, 0)
    }
    else{
      for(let x = 0; x < this.pageStatusesArray.length; x++){
        manageActiveTabs(this.pageStatusesArray, this.setActive, this.setInactive, x, localStorage.getItem('sidenav-active-tag-number'));
      }
    }
    function setInitialPageActive(pageStatusesArray:any, setActive:any, index:any){
      pageStatusesArray[index] = setActive;
    }
    function setInitialPageInActive(pageStatusesArray:any, setInactive:any, index:any){
      pageStatusesArray[index] = setInactive;
    }
    function manageActiveTabs(pageStatusesArray:any, setActive:any, setInactive:any, index:any, activePageIndex:any){
      if( activePageIndex == index){
        setInitialPageActive(pageStatusesArray, setActive, index)
      }
      else{
        setInitialPageInActive(pageStatusesArray, setInactive, index);
      }
    }
  }

  setPageActive(_viewChild:any,pageNumber:number){
    pageActivatorProcedure(this.page_0, _viewChild, pageNumber, this.activeElementStyle)
    pageActivatorProcedure(this.page_1, _viewChild, pageNumber, this.activeElementStyle)
    pageActivatorProcedure(this.page_2, _viewChild, pageNumber, this.activeElementStyle)
    pageActivatorProcedure(this.page_3, _viewChild, pageNumber, this.activeElementStyle)
    pageActivatorProcedure(this.page_4, _viewChild, pageNumber, this.activeElementStyle)
    pageActivatorProcedure(this.page_5, _viewChild, pageNumber, this.activeElementStyle)
    function activatePage(page:any, style:any)
    {
      page.nativeElement.style.borderRight = style.borderRightColor;
      page.nativeElement.style.backgroundColor = style.backgroundColor;
    }
    function deactivatePage(page:any, style:any){
      page.nativeElement.style.borderRight = style.unsetBorderRightColor;
      page.nativeElement.style.backgroundColor = style.unsetBackgroundColor;
    }
    function saveChanges(pageId:number){
      localStorage.setItem('sidenav-active-tag-number', pageId.toString());
    }
    function pageActivatorProcedure(page:any, _vewChild:any, pageNumber:any, activeElementStyle:any ){
      if(page.nativeElement === _viewChild)
      {
        saveChanges(pageNumber);
        activatePage(page, activeElementStyle);
      }
    else
      deactivatePage(page, activeElementStyle);
    }
  }

}
