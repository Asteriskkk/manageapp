import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {SelectedUseCases} from '../models/selectedUseCases.model';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})

export class mainPage implements OnInit {
  userForm: FormGroup;
  selectedUseCases = new SelectedUseCases();

  Absence: Array<any> = [
    { name: 'Apply Leave', value: 'applyLeave' },
    { name: 'Cancel Leave', value: 'cancelLeave' },
    { name: 'Holiday List', value: 'holidayList' },
    { name: 'Leave History', value: 'leaveHistory' },
    { name: 'Leave Balance', value: 'leaveBalance' }
  ];
  Attendance: Array<any> = [
    { name: 'Raise Exception', value: 'raiseException' },
    { name: 'View Exception', value: 'viewException' },
    { name: 'Cancel Exception', value: 'cancelException' }
  ];
  Servicedesk: Array<any> = [
    { name: 'Create Incident', value: 'createIncident' },
    { name: 'View Incident', value: 'viewIncident' },
    { name: 'Update/Reopen Incident', value: 'up/reInc' },
    { name: 'Create SR', value: 'createSR' },
    { name: 'View SR Status', value: 'viewSR' },
    { name: 'Update SR', value: 'updateSR' },
    { name: 'Reopen SR', value: 'reopemSR' },
    { name: 'Cancel SR', value: 'cancelSR' }
  ];
  PeopleSearch: Array<any> = [
    { name: 'People Search', value: 'peopleSearch' }
  ];
  WorkFromHome: Array<any> = [
    { name: 'Apply WFO', value: 'applyWfo' },
    { name: 'View WFO', value: 'viewWfo' },
    { name: 'View Organisation report', value: 'orgReport' }
  ];
  Approvals: Array<any> = [
    { name: 'Approve Leave', value: 'approveLeave' },
    { name: 'Approve Exception', value: 'approveException' },
    { name: 'Approve Service Request', value: 'approveSR' }
  ];

    constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  
      }
  
    ngOnInit(){
      this.userForm = this.formBuilder.group({
        Absence: this.formBuilder.array([], [Validators.required]),
        Attendance: this.formBuilder.array([], [Validators.required]),
        SeriveDesk: this.formBuilder.array([], [Validators.required]),
        PeopleSearch: this.formBuilder.array([], [Validators.required]),
        WorkFromHome: this.formBuilder.array([], [Validators.required]),
        Approvals: this.formBuilder.array([], [Validators.required])
      })
    }
   
    onAbsenceChange(e) {
      const Absence: FormArray = this.userForm.get('Absence') as FormArray;
  
      if (e.target.checked) {
        Absence.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        Absence.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            Absence.removeAt(i);
            return;
          }
          i++;
        });
      }
    }

    onAttendanceChange(e) {
      const Attendance: FormArray = this.userForm.get('Attendance') as FormArray;
  
      if (e.target.checked) {
        Attendance.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        Attendance.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            Attendance.removeAt(i);
            return;
          }
          i++;
        });
      }
    }

    onServiceDeskChange(e) {
      const SeriveDesk: FormArray = this.userForm.get('SeriveDesk') as FormArray;
  
      if (e.target.checked) {
        SeriveDesk.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        SeriveDesk.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            SeriveDesk.removeAt(i);
            return;
          }
          i++;
        });
      }
    }

    onPeopleSearchChange(e) {
      const PeopleSearch: FormArray = this.userForm.get('PeopleSearch') as FormArray;
  
      if (e.target.checked) {
        PeopleSearch.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        PeopleSearch.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            PeopleSearch.removeAt(i);
            return;
          }
          i++;
        });
      }
    }

    onWorkFromHomeChange(e) {
      const WorkFromHome: FormArray = this.userForm.get('WorkFromHome') as FormArray;
  
      if (e.target.checked) {
        WorkFromHome.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        WorkFromHome.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            WorkFromHome.removeAt(i);
            return;
          }
          i++;
        });
      }
    }

    onApprovalsChange(e) {
      const Approvals: FormArray = this.userForm.get('Approvals') as FormArray;
  
      if (e.target.checked) {
        Approvals.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        Approvals.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            Approvals.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
   

    onSubmit(values){
      console.log("values",this.userForm.value)
      this.selectedUseCases.useCases = this.userForm.value;
      this.router.navigate(['absence/applyLeave']); 
    }

  }

