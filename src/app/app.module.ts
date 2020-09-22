import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AbsenceComponent } from './absence/absence.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { CancelLeaveComponent } from './cancel-leave/cancel-leave.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { AboutCocoComponent } from './about-coco/about-coco.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FaqComponent } from './faq/faq.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { ViewIncidentComponent } from './view-incident/view-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { YApproveExceptionComponent } from './y-approve-exception/y-approve-exception.component';
import { YRaiseExceptionComponent } from './y-raise-exception/y-raise-exception.component';
import { YViewExceptionComponent } from './y-view-exception/y-view-exception.component';
import { YViewAttendanceSummaryComponent } from './y-view-attendance-summary/y-view-attendance-summary.component';
import { YCancelExceptionComponent } from './y-cancel-exception/y-cancel-exception.component';
import { YQuarterlyShortfallComponent } from './y-quarterly-shortfall/y-quarterly-shortfall.component';
import { YRecentShortfallComponent } from './y-recent-shortfall/y-recent-shortfall.component';
import { YArtEnrollmentComponent } from './y-art-enrollment/y-art-enrollment.component';
import { YUnlockAccountComponent } from './y-unlock-account/y-unlock-account.component';
import { YResetPasswordComponent } from './y-reset-password/y-reset-password.component';
import { YChangePasswordComponent } from './y-change-password/y-change-password.component';
import { YBookNightCabComponent } from './y-book-night-cab/y-book-night-cab.component';
import { YApplyOneDayBusPassComponent } from './y-apply-one-day-bus-pass/y-apply-one-day-bus-pass.component';
import { YApplyBussPassComponent } from './y-apply-buss-pass/y-apply-buss-pass.component';
import { YViewCabRequestsComponent } from './y-view-cab-requests/y-view-cab-requests.component';
import { YViewOneDayBusPassComponent } from './y-view-one-day-bus-pass/y-view-one-day-bus-pass.component';
import { YViewBusPassComponent } from './y-view-bus-pass/y-view-bus-pass.component';
import { YCancelOneDayBusPassComponent } from './y-cancel-one-day-bus-pass/y-cancel-one-day-bus-pass.component';
import { YCancelCabRequestsComponent } from './y-cancel-cab-requests/y-cancel-cab-requests.component';
import { YCancelBussPassComponent } from './y-cancel-buss-pass/y-cancel-buss-pass.component';
import { homePage } from './home-page/home-page.component';
import { mainPage } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AbsenceComponent,
    ApplyLeaveComponent,
    CancelLeaveComponent,
    LeaveHistoryComponent,
    HolidayListComponent,
    AboutCocoComponent,
    GettingStartedComponent,
    AuthenticationComponent,
    FaqComponent,
    ApproveLeaveComponent,
    PeopleSearchComponent,
    CreateIncidentComponent,
    ViewIncidentComponent,
    UpdateIncidentComponent,
    YApproveExceptionComponent,
    YRaiseExceptionComponent,
    YViewExceptionComponent,
    YViewAttendanceSummaryComponent,
    YCancelExceptionComponent,
    YQuarterlyShortfallComponent,
    YRecentShortfallComponent,
    YArtEnrollmentComponent,
    YUnlockAccountComponent,
    YResetPasswordComponent,
    YChangePasswordComponent,
    YBookNightCabComponent,
    YApplyOneDayBusPassComponent,
    YApplyBussPassComponent,
    YViewCabRequestsComponent,
    YViewOneDayBusPassComponent,
    YViewBusPassComponent,
    YCancelOneDayBusPassComponent,
    YCancelCabRequestsComponent,
    YCancelBussPassComponent,
    homePage,
    mainPage
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTreeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
