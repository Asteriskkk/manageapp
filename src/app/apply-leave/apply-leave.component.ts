import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Inject } from '@angular/core';
//import { DialogBox } from '../dialogbox/dialogbox.component';
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  userForm: FormGroup;
  applyLeaveUrl: string;
  EMPLID: string;
  HALF_DAY: string;
  COMMENTS: string;
  APPROVE_STATUS: string;
  editBut: boolean;
  applyLeaveUrlMethod: string;
  customer: any;
  variable: boolean;
  loading: boolean = true;
  showSuccess : boolean = false
  showMapping : boolean = false
  requestBody: any = ["START_DATE","END_DATE","TYPE_OF_LEAVE","LEAVE_DESCRIPTION"]
  responseBody:any=["STATUS","MESSAGE","APPROVER_NAME"];
  // key1;key2;key3;key4;key5;key6;key7;
  
  errorMessage;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.editBut = true;
    this.applyLeaveUrlMethod = "POST";
    // this.key1="From Date";
    // this.key2="To Date";
    // this.key3="Leave Type";
    // this.key4="Reason";
    // this.key5="Approve Status";
    // this.key6="Message";
    // this.key7="Approver Name"
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      EMPLID: ['', [Validators.required]],
      LEAVE_TYPE: ['', [Validators.required]],
      FROM_DT: ['', [Validators.required]],
      TO_DT: ['', [Validators.required]],
      HALF_DAY: ['', [Validators.required]],
      COMMENTS: ['', [Validators.required]],
      STATUS: ['', [Validators.required]],
      MESSAGE: ['', [Validators.required]],
      APPROVER_NAME: ['', [Validators.required]],
      APPROVE_STATUS: ['', [Validators.required]],
      applyLeaveUrl: ['', [Validators.required]],
      applyLeaveUrlMethod: ["", [Validators.required]],
    LEAVE_DESCRIPTION: ["", [Validators.required]],
    key1: ["", [Validators.required]],
    key2: ["", [Validators.required]],
    key3: ["", [Validators.required]],
    key4: ["", [Validators.required]],
    key5: ["", [Validators.required]],
    key6: ["", [Validators.required]],
    key7: ["", [Validators.required]]


    })
    
  }


  changeMessage(e) {
    console.log(e.value)
    this.MESSAGE.setValue(e.target.value, {
      onlySelf: true
    })
  }

 



 

  changeTodate(e) {
    console.log(e.value)
    this.TO_DT.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get TO_DT() {
    return this.userForm.get('TO_DT');
  }

 

  changeLeavetype(e) {
    console.log(e.value)
    this.LEAVE_TYPE.setValue(e.target.value, {
      onlySelf: true
    })
  }

 

  // Getter method to access formcontrols
  get LEAVE_TYPE() {
    return this.userForm.get('LEAVE_TYPE');
  }
  
   changeReason(e) {
    console.log(e.value)
    this.LEAVE_DESCRIPTION.setValue(e.target.value, {
      onlySelf: true
    })
  }

 

  // Getter method to access formcontrols
  get LEAVE_DESCRIPTION() {
    return this.userForm.get('LEAVE_DESCRIPTION');
  }





  // Getter method to access formcontrols
  get MESSAGE() {
    return this.userForm.get('MESSAGE');
  }
  
   changeStatus(e) {
    console.log(e.value)
    this.STATUS.setValue(e.target.value, {
      onlySelf: true
    })
  }

 

  // Getter method to access formcontrols
  get STATUS() {
    return this.userForm.get('STATUS');
  }
  
  
     changeApprovername(e) {
    console.log(e.value)
    this.APPROVER_NAME.setValue(e.target.value, {
      onlySelf: true
    })
  }

 

  // Getter method to access formcontrols
  get APPROVER_NAME() {
    return this.userForm.get('APPROVER_NAME');
  }

  changeFromdate(e) {
    console.log(e.value)
    this.FROM_DT.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get FROM_DT() {
    return this.userForm.get('FROM_DT');
  }

  changeCustomer(customer) {
    console.log("customer", customer)
    this.customer = customer;
    this.loading = true;
    this.errorMessage = "";
    this.http.get('http://localhost:3000/viewCustomer?customer=' + customer + '&useCase=applyLeaveMapper').subscribe((data: any) => {
      console.log("data", data);
      var keys = Object.keys(data);
      console.log(keys)
      if (keys.length == 0) {
        console.log("inside read")
        this.applyLeaveUrl = "";
        this.EMPLID = "";
        this.HALF_DAY = "";
        this.COMMENTS = "";
        this.APPROVE_STATUS = "";
        this.variable = false;
        this.editBut = true;
      } else {
        this.variable = true;
        this.editBut = false;
        for (var i in data) {
          if (typeof data[i] == "object") {
            for (var j in data[i]) {
              this[j] = data[i][j];
            }
          } else {
            this[i] = data[i];
          }
        }
      }
    }, error => {
      console.log(error);
      this.loading = false;
      this.errorMessage = "There is some technical issue, please try after some time.";
      console.log(error);
    });
  }

  onSubmit(form: any): void {
    console.log('you submitted value1:', form);
    var button = document.activeElement.getAttribute("Name");
    if (button == "edit") {
      console.log("inside")
      this.variable = false;
      this.editBut = true;
    } else {
      if (form.COMMENTS == undefined) {
        var fieldElement = <HTMLInputElement>document.getElementById('btn');
        fieldElement.disabled = true;
      } else {
        this.loading = true;
        this.errorMessage = "";
        let obj = {
          "postData": {
            "EMPLID": this.EMPLID,
            "LEAVE_TYPE": this.LEAVE_TYPE,
            "FROM_DT": this.FROM_DT,
            "TO_DT": this.TO_DT,
            "HALF_DAY": this.HALF_DAY,
            "COMMENTS": this.COMMENTS
          },
          "response": {
            "STATUS": this.STATUS,
            "MESSAGE": this.MESSAGE,
            "APPROVER_NAME": this.APPROVER_NAME,
            "APPROVE_STATUS": this.APPROVE_STATUS
          },
          "applyLeaveUrl": this.applyLeaveUrl
        }
        this.http.post('http://localhost:3000/createCustomer?customer=' + this.customer + '&useCase=applyLeaveMapper', obj).subscribe((data: any) => {
          console.log("data", data)
          // this.dialog.open(DialogBox, {
          //   data: {
          //     msg: data.msg
          //   }
          // });
        }, error => {
          console.log(error);
          this.loading = false;
          this.errorMessage = "There is some technical issue, please try after some time.";
          console.log(error);
        });
      }
    }

  }
}

