import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {NavigationStart, Router, ActivatedRoute, NavigationEnd} from '@angular/router'
import { MAT_DRAWER_CONTAINER, MatDrawer } from '@angular/material/sidenav/drawer';
import { filter } from 'rxjs/operators';
import { Location } from "@angular/common";
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{

  color: string = ""
  isVisible: boolean = true;
  

  absence = [{ 'name': 'Leave Balance', 'id': 'leaveBalance', 'class':'myDiv', 'link':'absence/leaveBalance'}, { 'name': 'Apply Leave', 'id': 'applyLeave', 'class':'myDiv' , 'link':'absence/applyLeave'}]; 
  // { 'name': 'Leave History', 'id': 'leaveHistory', 'class':'myDiv' , 'link':'absence/leaveHistory'}, { 'name': 'Cancel Leave', 'id': 'cancelLeave', 'class':'myDiv', 'link':'absence/cancelLeave' }, { 'name': 'Holiday List', 'id': 'holidayList', 'class':'myDiv', 'link':'absence/holidayList' }, { 'name': 'Leave Types', 'id': 'leaveTypes', 'class':'myDiv', 'link':'absence/leaveTypes' }];
  general = [{'name':'Getting Started With COCO', 'class':'generalDiv', 'link':'/'},{'name':'About COCO', 'class':'generalDiv', 'link':'aboutCoco'},{'name':'Authentication', 'class':'generalDiv', 'link':'authentication'},{'name':'Uninstall COCO', 'class':'generalDiv', 'link':'uninstallCOCO'},{'name':'Frequently Asked Questions', 'class':'generalDiv', 'link':'faq'}];
  genies = [{'name':'Create Incident', 'class':'genieDiv', 'link':'askGenie/createIncident'}];
  // {'name':'View Incidents', 'class':'genieDiv', 'link':'askGenie/viewIncident'},{'name':'Update Incident', 'class':'genieDiv', 'link':'askGenie/updateIncident'}];
  approvals = [{'name':'Approve Leave', 'class':'approvals', 'link':'approvals/approveLeave'}, {'name':'Approve Exception', 'class':'approvals', 'link':'approvals/approveException'}];
  attendance = [{ 'name': 'Raise Exception', 'link':'attendance/raiseException'}, { 'name': 'View Exception', 'link':'attendance/viewException'}, { 'name': 'Cancel Exception' , 'link':'attendance/cancelException'}];
  crm =[{'name':'Active Pipeline', 'id':'activePipeline','class':'crm', 'link':'crm/activePipeline'}, {'name':'Opportunities Closure', 'id':'opportunitiesClosure','class':'crm', 'link':'crm/opportunitiesClosure'}, {'name':'Awaiting Finance Approval', 'id':'awaitingFinanceApproval','class':'crm', 'link':'crm/awaitingFinanceApproval'}]
  workFromOffice =[{'name':'Apply Office Pass', 'id':'applyWorkFromOffice','class':'workFromOffice', 'link':'workFromOffice/applyWorkFromOffice'}, {'name':'View Office Pass', 'id':'viewOfficePass','class':'workFromOffice', 'link':'workFromOffice/viewOfficePass'}, {'name':'View Organisation Report', 'id':'workFromOfficeReport','class':'workFromOffice', 'link':'workFromOffice/workFromOfficeReport'}]
  
  opened = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );  

    logEvent(arg){
      console.log(arg);
      console.log(this.isHandset$);
      if(this.isHandset$){
        console.log("true")
      }
    }
    // closeSideNav(){
    //   if(this.isHandset$){
    //     close()
    //   }
    // }
  changebtnNew(arg) {
     console.log(arg)
    var header = document.getElementById('topId');
    var btns = header.getElementsByClassName("default");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        console.log('inside listener')
      var current = document.getElementsByClassName("blue");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" blue", "");
      }
      this.className += " blue";
      });
    }    
  }


  constructor(private breakpointObserver: BreakpointObserver, private router: Router,  private location: Location, private activatedRoute: ActivatedRoute) {
    
    // console.log('constructor')
    // var header = ['myDiv', 'approvalDiv', 'peopleSearchDiv','genieDiv','generalDiv'];
    // console.log(header)
    // for (let item of header) {
    //   console.log('inside for')
    //   var header2 = document.getElementById(item.toString())
    //   console.log("header id",header2)
    //   var btns = header2.getElementsByClassName("default");
    // console.log(btns.length)
    // for (var k = 0; k < btns.length; k++) {
    //   btns[k].addEventListener("click", function() {
    //     console.log('inside listener')
    //   var current = document.getElementsByClassName("blue");
    //   if (current.length > 0) { 
    //     current[0].className = current[0].className.replace(" blue", "");
    //   }
    //   this.className += " blue";
    //   });
    // }
    // } 
     
   }
   previousUrl$ = new BehaviorSubject<string>(null);
   currentUrl$ = new BehaviorSubject<string>(null);
   ngOnInit() {
    this.router.events.
    pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      // console.log("path",(event ));
      // if(path instanceof NavigationStart){
      //   console.log("main hit")
      // }
      // this.previousUrl$ = event.url;
      // this.previousUrl$.next(
      //   this.currentUrl$.value
      // );
      // console.log("d",this.previousUrl$)
      // console.log("activatedRoute",this.activatedRoute.url)
      // // console.log("out", this.location.isCurrentPathEqualTo('/'))
      console.log("Route Url:",this.router.url)
      if(this.router.url == '/' ){
        
        this.isVisible = false
        console.log("In If", this.isVisible)
      }else{
        this.isVisible = true;
        console.log("In Else", this.isVisible)
      }
    });
   }
  
}
