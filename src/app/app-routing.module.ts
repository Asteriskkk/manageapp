import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceComponent} from './absence/absence.component';
import { AboutCocoComponent} from './about-coco/about-coco.component';
import {ApplyLeaveComponent} from './apply-leave/apply-leave.component';
import {ApproveLeaveComponent} from './approve-leave/approve-leave.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {CancelLeaveComponent} from './cancel-leave/cancel-leave.component';
import {CreateIncidentComponent} from './create-incident/create-incident.component';
import {FaqComponent} from './faq/faq.component';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {HolidayListComponent} from './holiday-list/holiday-list.component';
import {LeaveHistoryComponent} from './leave-history/leave-history.component';
import {PeopleSearchComponent} from './people-search/people-search.component';
import {UpdateIncidentComponent} from './update-incident/update-incident.component';
import {ViewIncidentComponent} from './view-incident/view-incident.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import { YApplyBussPassComponent } from './y-apply-buss-pass/y-apply-buss-pass.component';
import { YApplyOneDayBusPassComponent } from './y-apply-one-day-bus-pass/y-apply-one-day-bus-pass.component';
import { YApproveExceptionComponent } from './y-approve-exception/y-approve-exception.component';
import { YArtEnrollmentComponent } from './y-art-enrollment/y-art-enrollment.component';
import { YBookNightCabComponent } from './y-book-night-cab/y-book-night-cab.component';
import { YCancelBussPassComponent } from './y-cancel-buss-pass/y-cancel-buss-pass.component';
import { YCancelCabRequestsComponent } from './y-cancel-cab-requests/y-cancel-cab-requests.component';
import { YCancelExceptionComponent } from './y-cancel-exception/y-cancel-exception.component';
import { YCancelOneDayBusPassComponent } from './y-cancel-one-day-bus-pass/y-cancel-one-day-bus-pass.component';
import { YChangePasswordComponent } from './y-change-password/y-change-password.component';
import { YQuarterlyShortfallComponent } from './y-quarterly-shortfall/y-quarterly-shortfall.component';
import { YRaiseExceptionComponent } from './y-raise-exception/y-raise-exception.component';
import { YRecentShortfallComponent } from './y-recent-shortfall/y-recent-shortfall.component';
import { YResetPasswordComponent } from './y-reset-password/y-reset-password.component';
import { YUnlockAccountComponent } from './y-unlock-account/y-unlock-account.component';
import { YViewAttendanceSummaryComponent } from './y-view-attendance-summary/y-view-attendance-summary.component';
import { YViewBusPassComponent } from './y-view-bus-pass/y-view-bus-pass.component';
import { YViewCabRequestsComponent } from './y-view-cab-requests/y-view-cab-requests.component';
import { YViewExceptionComponent } from './y-view-exception/y-view-exception.component';
import { YViewOneDayBusPassComponent } from './y-view-one-day-bus-pass/y-view-one-day-bus-pass.component';
import { homePage } from './home-page/home-page.component';
import { mainPage } from './main-page/main-page.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'absence/leaveBalance', component: AbsenceComponent },
      { path: '', component: mainPage },
      { path: 'home', component: mainPage },
      { path: 'absence/applyLeave', component: ApplyLeaveComponent },
      { path: 'approvals/approveLeave', component: ApproveLeaveComponent },
      { path: 'authentication', component: AuthenticationComponent },
      { path: 'absence/cancelLeave', component: CancelLeaveComponent },
      { path: 'askGenie/createIncident', component: CreateIncidentComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'gettingStarted', component: GettingStartedComponent },
      { path: 'absence/holidayList', component: HolidayListComponent },
      { path: 'absence/leaveHistory', component: LeaveHistoryComponent },
      { path: 'peopleSearch', component: PeopleSearchComponent },
      { path: 'askGenie/updateIncident', component: UpdateIncidentComponent },
      { path: 'askGenie/viewIncident', component: ViewIncidentComponent },
      {path:'ctm/applyBusPass', component:YApplyBussPassComponent},
      {path:'ctm/bookNightCab', component:YBookNightCabComponent},
      {path:'ctm/applyOneDayBusPass', component:YApplyOneDayBusPassComponent},
      {path:'ctm/cancelBusPass', component:YCancelBussPassComponent},
      {path:'ctm/cancelCabRequests', component:YCancelCabRequestsComponent},
      {path:'ctm/cancelOneDayBusPass', component:YCancelOneDayBusPassComponent},
      {path:'ctm/viewBusPass', component:YViewBusPassComponent},
      {path:'ctm/viewCabRequests', component:YViewCabRequestsComponent},
      {path:'ctm/viewOneDayBusPass', component:YViewOneDayBusPassComponent},
      {path:'approvals/approveException', component:YApproveExceptionComponent},
      {path:'attendance/cancelException', component:YCancelExceptionComponent},
      {path:'attendance/quarterlyShortfall', component:YQuarterlyShortfallComponent},
      {path:'attendance/raiseException', component:YRaiseExceptionComponent},
      {path:'attendance/recentShortfall', component:YRecentShortfallComponent},
      {path:'attendance/viewAttendanceSummary', component:YViewAttendanceSummaryComponent},
      {path:'attendance/viewException', component:YViewExceptionComponent},     
      {path:'art/resetPassword', component:YResetPasswordComponent},
      {path:'art/unlockAccount', component:YUnlockAccountComponent},
      {path:'art/enrollment', component:YArtEnrollmentComponent},
      {path:'art/changePassword', component:YChangePasswordComponent}     

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AbsenceComponent, MainNavComponent]
