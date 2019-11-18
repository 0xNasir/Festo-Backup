(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!--<div style=\"text-align:center; background-color: #999999\">\n  SimpleWork Assertive development mode\n</div>-->\n\n<router-outlet></router-outlet>\n\n<div style=\"background-color: #3f51b5; color: #FFF; height: 100px; padding: 20px;\">\n  User & App Management Shell\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-app/add-app.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-app/add-app.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<mat-progress-bar mode=\"query\" *ngIf=\"gs.isLoading\"></mat-progress-bar>\n<div [ngClass]=\"{disabledDiv: gs.isLoading}\" style=\"background-color: red; margin: 40px auto 20px auto; width: 700px; border: 1px solid silver;\">\n  <mat-toolbar color=\"primary\">\n    <button mat-flat-button color=\"primary\"\n            (click)=\"location.back()\"\n            matTooltipPosition=\"after\"\n            matTooltip=\"Go back to the previous page\">\n      <mat-icon>keyboard_arrow_left</mat-icon>\n    </button>\n    Add new application\n  </mat-toolbar>\n  <div style=\"background-color: #fbfbfb;  padding: 50px;\">\n    <form [formGroup]=\"newApp\" (submit)=\"saveNewApp()\" autocomplete=\"false\">\n\n      <mat-form-field>\n        <mat-label>Application Name</mat-label>\n        <input matInput formControlName=\"appName\" placeholder=\"Enter App name\">\n        <mat-error>Field is required</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Application URL</mat-label>\n        <input matInput formControlName=\"url\" placeholder=\"Enter App URL\">\n        <mat-error *ngIf=\"newApp.get('url').errors?.required\">Field is required</mat-error>\n        <mat-error *ngIf=\"newApp.get('url').errors?.pattern\">Invalid URL</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Base name</mat-label>\n        <input matInput formControlName=\"sessAryName\" placeholder=\"Enter App base anme\">\n        <mat-error *ngIf=\"newApp.get('sessAryName').errors?.required\">Field is required</mat-error>\n        <mat-error *ngIf=\"newApp.get('sessAryName').errors?.minlength\">Minimum length is 2</mat-error>\n        <mat-error *ngIf=\"newApp.get('sessAryName').errors?.uniqueBaseName\">This value is already exists</mat-error>\n        <mat-hint *ngIf=\"newApp.get('sessAryName').pending\" align=\"end\">Checking availability...</mat-hint>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Remark</mat-label>\n        <textarea matInput #remarkTag formControlName=\"remark\" maxlength=\"100\"\n                  placeholder=\"Write down any dependencies or critical operations.\"></textarea>\n        <mat-hint align=\"end\">{{remarkTag.value.length}} / 100</mat-hint>\n      </mat-form-field>\n\n\n      <div style=\"margin-top: 20px; padding: 10px; border: 1px solid silver;\">\n        <div formArrayName=\"accesses\" *ngFor=\"let access of newApp.get('accesses').controls; let i = index\"\n             style=\"padding: 10px; background-color: #f5f5f5; border-bottom: 1px solid silver;\">\n          <div [formGroupName]=\"i\">\n\n            <mat-form-field style=\"width: 450px;\">\n              <mat-label>Definition</mat-label>\n              <input matInput formControlName=\"definition\" placeholder=\"Access definition\" required>\n              <mat-error>Field is required</mat-error>\n            </mat-form-field>\n            <button mat-icon-button (click)=\"removeAccessGroup(i)\"\n                    color=\"warn\" style=\"margin-left: 20px;\"\n                    *ngIf=\"newApp.get('accesses').length>1\">\n              <mat-icon>clear</mat-icon>\n            </button>\n\n            <mat-form-field style=\"width: 200px; margin-right: 50px;\">\n              <mat-label>Keyword</mat-label>\n              <input matInput formControlName=\"keyword\" placeholder=\"Access keyword\" required>\n              <mat-error>Field is required</mat-error>\n            </mat-form-field>\n\n            <mat-slide-toggle formControlName=\"val\" #valTag>Default value {{\n              access.get('val').value?'enabled':'disabled' }}\n            </mat-slide-toggle>\n\n          </div>\n        </div>\n        Add a another access field\n        <button mat-icon-button\n                type=\"button\"\n                style=\"margin-left: 20px;\"\n                (click)=\"addAccessGroup()\"\n                color=\"accent\"\n                [disabled]=\"newApp.get('accesses').invalid\">\n          <mat-icon>add_circle</mat-icon>\n        </button>\n      </div>\n\n\n      <div style=\"margin-top: 20px; padding: 20px;\" align=\"end\">\n        <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"newApp.invalid\">\n          <mat-icon>save</mat-icon>\n          Save\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-user/add-user.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-user/add-user.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<mat-progress-bar mode=\"query\" *ngIf=\"gs.isLoading\"></mat-progress-bar>\n<div [ngClass]=\"{disabledDiv: gs.isLoading}\" style=\"background-color: red; margin: 40px auto 20px auto; width: 700px; border: 1px solid silver;\">\n  <mat-toolbar color=\"primary\">\n    <button mat-flat-button color=\"primary\"\n            (click)=\"location.back()\"\n            matTooltipPosition=\"after\"\n            matTooltip=\"Go back to the previous page\">\n      <mat-icon>keyboard_arrow_left</mat-icon>\n    </button>\n    Add new user\n  </mat-toolbar>\n<div style=\"background-color: #fbfbfb; padding: 50px;\">\n  <form *ngIf=\"userLevels\" [formGroup]=\"newUser\" (submit)=\"addNewUser()\" autocomplete=\"false\">\n\n    <!--Full name field-->\n    <mat-form-field>\n      <mat-label>Full name</mat-label>\n      <input matInput formControlName=\"name\" placeholder=\"Enter full name\" required>\n      <mat-error *ngIf=\"newUser.get('name').errors?.required\">Required Field</mat-error>\n      <mat-error *ngIf=\"newUser.get('name').errors?.pattern\">3 to 30 character A-Z a-z . - are supported.</mat-error>\n    </mat-form-field>\n\n    <!--Username field-->\n    <mat-form-field>\n      <mat-label>Username</mat-label>\n      <input matInput formControlName=\"username\" #userNameTag placeholder=\"Enter username without space\" required>\n      <mat-error *ngIf=\"newUser.get('username').errors?.required\">Required Field</mat-error>\n      <mat-error *ngIf=\"newUser.get('username').errors?.pattern\">Small later, digit with no space supported</mat-error>\n      <mat-error *ngIf=\"newUser.get('username').errors?.minlength\">Minimum length should be 4</mat-error>\n      <mat-error *ngIf=\"newUser.get('username').errors?.maxlength\">Maximum allowed length 20</mat-error>\n      <mat-error *ngIf=\"newUser.get('username').errors?.uniqueUsername\">This name is not available</mat-error>\n      <mat-hint *ngIf=\"newUser.get('username').pending\" align=\"start\">Checking availability...</mat-hint>\n      <mat-hint align=\"end\">{{userNameTag.value.length}} / 20</mat-hint>\n    </mat-form-field>\n\n    <!--Password field-->\n    <mat-form-field>\n      <mat-label>Password</mat-label>\n      <input matInput formControlName=\"password\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required>\n      <button mat-icon-button matSuffix type=\"button\" (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </button>\n      <mat-error *ngIf=\"newUser.get('password').errors?.required\">Required Field</mat-error>\n      <mat-error *ngIf=\"newUser.get('password').errors?.minlength\">Minimum length 4</mat-error>\n      <mat-error *ngIf=\"newUser.get('password').errors?.maxlength\">Maximum length 20</mat-error>\n    </mat-form-field>\n    <!--User level field-->\n    <mat-form-field>\n      <mat-label>User level</mat-label>\n      <mat-select formControlName=\"userLevelId\" required>\n        <mat-option value=\"\">Select...</mat-option>\n        <mat-option *ngFor=\"let userLevel of userLevels\" [value]=\"userLevel.levelId\">{{ userLevel.title }}</mat-option>\n      </mat-select>\n      <mat-error>Required Field</mat-error>\n    </mat-form-field>\n\n    <!--Add email section-->\n    <div style=\"border: 1px solid silver; padding: 10px;\">\n      <div formArrayName=\"emails\" *ngFor=\"let email of newUser.controls.emails.controls; let i = index\">\n        <!--<hr *ngIf=\"newUser.value.emails.length>1\">-->\n        <div formGroupName=\"{{ i }}\" style=\"background-color: #f7f7f7; padding: 10px;\">\n          <mat-form-field style=\"width: 100px;\">\n            <mat-label>Email Type</mat-label>\n            <mat-select formControlName=\"emailType\">\n              <mat-option value=\"Home\">Home</mat-option>\n              <mat-option value=\"Work\">Work</mat-option>\n              <mat-option value=\"Other\">Other</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field style=\"width: 300px; margin-left: 10px; margin-right: 20px;\">\n            <mat-label>E-mail address</mat-label>\n            <input matInput formControlName=\"email\" placeholder=\"Enter email address\" required>\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"email.get('email').errors?.required\">Required field</mat-error>\n            <mat-error *ngIf=\"email.get('email').errors?.email\">Invalid Email</mat-error>\n          </mat-form-field>\n\n          <button mat-icon-button\n                  *ngIf=\"newUser.value.emails.length>1\"\n                  color=\"warn\"\n                  (click)=\"removeEmailGroup(i)\">\n            <mat-icon>clear</mat-icon>\n          </button>\n        </div>\n      </div>\n      <span>Add another email address</span>\n      <button mat-icon-button [disabled]=\"newUser.get('emails').invalid\" (click)=\"addEmailGroup()\" color=\"accent\"><mat-icon>add_circle</mat-icon></button>\n    </div>\n\n    <!--Add phone number section-->\n    <div style=\"border: 1px solid silver; padding: 10px; margin-top: 20px;\">\n      <div formArrayName=\"phones\" *ngFor=\"let phone of newUser.get('phones').controls; let i = index\">\n\n        <div [formGroupName]=\"i\" style=\"background-color: #f7f7f7; padding: 10px;\">\n          <mat-form-field style=\"width: 100px;\">\n            <mat-label>Phone Type</mat-label>\n            <mat-select formControlName=\"phoneType\">\n              <mat-option value=\"Home\">Home</mat-option>\n              <mat-option value=\"Work\">Work</mat-option>\n              <mat-option value=\"Other\">Other</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field style=\"width: 300px; margin-left: 10px; margin-right: 20px;\">\n            <mat-label>Phone number</mat-label>\n            <input formControlName=\"number\" matInput placeholder=\"Enter phone number\" required>\n            <mat-icon matSuffix>phone</mat-icon>\n            <mat-error>Required Field</mat-error>\n          </mat-form-field>\n\n          <button mat-icon-button (click)=\"removePhoneGroup(i)\" *ngIf=\"newUser.value.phones.length>1\" color=\"warn\"><mat-icon>clear</mat-icon></button>\n        </div>\n      </div>\n      <span>Add another phone number</span>\n      <button mat-icon-button [disabled]=\"newUser.get('phones').invalid\" (click)=\"addPhoneGroup()\" color=\"accent\"><mat-icon>add_circle</mat-icon></button>\n    </div >\n\n    <!--Date of birth section-->\n    <mat-form-field style=\"width: 300px; margin-top: 20px;\">\n      <mat-label>Date of birth</mat-label>\n      <input matInput formControlName=\"dob\" [matDatepicker]=\"doppicker\" placeholder=\"Enter DOB\" required>\n      <mat-datepicker-toggle matSuffix [for]=\"doppicker\"></mat-datepicker-toggle>\n      <mat-datepicker #doppicker></mat-datepicker>\n      <mat-error>Required Field</mat-error>\n    </mat-form-field>\n\n    <!--Designation section-->\n    <div style=\"margin-top: 20px;\">\n      <div style=\"background-color: #f7f7f7; padding: 10px;\">\n\n        <mat-form-field style=\"width: 300px;  margin-right: 20px;\">\n          <mat-label>Designation</mat-label>\n          <input matInput formControlName=\"dgnTitle\" placeholder=\"Title\" required>\n          <mat-error>Required Field</mat-error>\n        </mat-form-field>\n\n        <mat-form-field  style=\"width: 200px;\">\n          <mat-label>From date</mat-label>\n          <input matInput formControlName=\"dgnFromDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error>Required Field</mat-error>\n        </mat-form-field>\n\n        <!--<button mat-icon-button color=\"warn\"><mat-icon>close</mat-icon></button>-->\n      </div>\n    </div>\n\n\n    <!--Gender + Religion + BloodGroup-->\n    <div style=\"padding: 10px; background-color: #f5f5f5; margin-top: 20px;\">\n\n      <mat-form-field style=\"width: 180px;\">\n        <mat-label>Gender</mat-label>\n        <mat-select formControlName=\"gender\">\n          <mat-option value=\"Male\">Male</mat-option>\n          <mat-option value=\"Female\">Female</mat-option>\n          <mat-option value=\"Other\">Other</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 180px; margin-left: 10px; margin-right: 10px;\">\n        <mat-label>Religion</mat-label>\n        <mat-select formControlName=\"religion\">\n          <mat-option value=\"Islam\">Islam</mat-option>\n          <mat-option value=\"Hinduism\">Hinduism</mat-option>\n          <mat-option value=\"Christianity\">Christianity</mat-option>\n          <mat-option value=\"Buddism\">Buddism</mat-option>\n          <mat-option value=\"Judaism\">Judaism</mat-option>\n          <mat-option value=\"Catholicism\">Catholicism</mat-option>\n          <mat-option value=\"Other\">Other</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field style=\"width: 180px;\">\n        <mat-label>Blood Group</mat-label>\n        <mat-select formControlName=\"bloodGroup\">\n          <mat-option value=\"A+\">A+</mat-option>\n          <mat-option value=\"A-\">A-</mat-option>\n          <mat-option value=\"B+\">B+</mat-option>\n          <mat-option value=\"B-\">B-</mat-option>\n          <mat-option value=\"AB+\">AB+</mat-option>\n          <mat-option value=\"AB-\">AB-</mat-option>\n          <mat-option value=\"O+\">O+</mat-option>\n          <mat-option value=\"O-\">O-</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n    </div>\n\n    <mat-form-field style=\"margin-top: 20px;\">\n      <mat-label>Address</mat-label>\n      <textarea matInput #addressVal maxlength=\"120\" formControlName=\"address\" placeholder=\"Enter address\"></textarea>\n      <mat-hint align=\"end\">{{ addressVal.value.length }} / 120</mat-hint>\n    </mat-form-field>\n\n    <div style=\"margin-top: 20px;\" align=\"end\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"newUser.invalid\"><mat-icon>save</mat-icon> Save</button>\n    </div>\n\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bad-request/bad-request.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bad-request/bad-request.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bad-request works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-app/edit-app.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-app/edit-app.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<mat-progress-bar mode=\"query\" *ngIf=\"gs.isLoading\"></mat-progress-bar>\n<div [ngClass]=\"{disabledDiv: gs.isLoading}\" style=\"background-color: red; margin: 40px auto 20px auto; width: 700px; border: 1px solid silver;\">\n  <mat-toolbar color=\"primary\">\n    <button mat-flat-button color=\"primary\"\n            (click)=\"location.back()\"\n            matTooltipPosition=\"after\"\n            matTooltip=\"Go back to the previous page\">\n      <mat-icon>keyboard_arrow_left</mat-icon>\n    </button>\n    Edit application properties\n  </mat-toolbar>\n  <div style=\"background-color: #fbfbfb; padding: 50px;\">\n    <form *ngIf=\"editApp\" [formGroup]=\"editApp\" (submit)=\"saveApp()\" autocomplete=\"false\">\n\n      <mat-form-field>\n        <mat-label>Application Name</mat-label>\n        <input matInput formControlName=\"appName\" placeholder=\"Enter App name\">\n        <mat-error>Field is required</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Application URL</mat-label>\n        <input matInput formControlName=\"url\" placeholder=\"Enter App URL\">\n        <mat-error *ngIf=\"editApp.get('url').errors?.required\">Field is required</mat-error>\n        <mat-error *ngIf=\"editApp.get('url').errors?.pattern\">Invalid URL</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Base name (Disabled)</mat-label>\n        <input matInput formControlName=\"sessAryName\" placeholder=\"Enter App base anme\">\n        <mat-error *ngIf=\"editApp.get('sessAryName').errors?.required\">Field is required</mat-error>\n        <mat-error *ngIf=\"editApp.get('sessAryName').errors?.minlength\">Minimum length is 2</mat-error>\n        <mat-error *ngIf=\"editApp.get('sessAryName').errors?.uniqueBaseName\">This value is already exists</mat-error>\n        <mat-hint *ngIf=\"editApp.get('sessAryName').pending\" align=\"end\">Checking availability...</mat-hint>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Remark</mat-label>\n        <textarea matInput #remarkTag formControlName=\"remark\" maxlength=\"100\"\n                  placeholder=\"Write down any dependencies or critical operations.\"></textarea>\n        <mat-hint align=\"end\">{{remarkTag.value.length}} / 100</mat-hint>\n      </mat-form-field>\n\n\n      <div style=\"margin-top: 20px; padding: 10px; border: 1px solid silver;\">\n        <div formArrayName=\"accesses\" *ngFor=\"let access of editApp.get('accesses').controls; let i = index\"\n             style=\"padding: 10px; background-color: #f5f5f5; border-bottom: 1px solid silver;\">\n          <div [formGroupName]=\"i\">\n\n            <mat-form-field style=\"width: 450px;\">\n              <mat-label>Definition</mat-label>\n              <input matInput formControlName=\"definition\" placeholder=\"Access definition\" required>\n              <mat-error>Field is required</mat-error>\n            </mat-form-field>\n            <button mat-icon-button (click)=\"removeAccessGroup(i)\"\n                    color=\"warn\" style=\"margin-left: 20px;\"\n                    *ngIf=\"editApp.get('accesses').length>1\">\n              <mat-icon>clear</mat-icon>\n            </button>\n\n            <mat-form-field style=\"width: 200px; margin-right: 50px;\">\n              <mat-label>Keyword</mat-label>\n              <input matInput formControlName=\"keyword\" placeholder=\"Access keyword\" required>\n              <mat-error>Field is required</mat-error>\n            </mat-form-field>\n\n            <mat-slide-toggle formControlName=\"val\" #valTag>Default value {{\n              access.get('val').value?'enabled':'disabled' }}\n            </mat-slide-toggle>\n\n          </div>\n        </div>\n        Add a another access field\n        <button mat-icon-button\n                type=\"button\"\n                style=\"margin-left: 20px;\"\n                (click)=\"addAccessGroup()\"\n                color=\"accent\"\n                [disabled]=\"editApp.get('accesses').invalid\">\n          <mat-icon>add_circle</mat-icon>\n        </button>\n      </div>\n\n\n      <div style=\"margin-top: 20px; padding: 20px;\" align=\"end\">\n        <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"editApp.invalid\">\n          <mat-icon>save</mat-icon>\n          Save\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-user/edit-user.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-user/edit-user.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<mat-progress-bar mode=\"query\" *ngIf=\"gs.isLoading\"></mat-progress-bar>\n<div [ngClass]=\"{disabledDiv: gs.isLoading}\" style=\"background-color: red; margin: 40px auto 20px auto; width: 700px; border: 1px solid silver;\">\n  <mat-toolbar color=\"primary\">\n    <button mat-flat-button color=\"primary\"\n            (click)=\"location.back()\"\n            matTooltipPosition=\"after\"\n            matTooltip=\"Go back to the previous page\">\n      <mat-icon>keyboard_arrow_left</mat-icon>\n    </button>\n    Edit User\n  </mat-toolbar>\n  <div style=\"background-color: #fbfbfb; padding: 50px;\">\n    <form *ngIf=\"userLevels\" [formGroup]=\"formData\" (submit)=\"updateUser()\" autocomplete=\"false\">\n\n      <!--Full name field-->\n      <mat-form-field>\n        <mat-label>Full name</mat-label>\n        <input matInput formControlName=\"name\" placeholder=\"Enter full name\" required>\n        <mat-error *ngIf=\"formData.get('name').errors?.required\">Required Field</mat-error>\n        <mat-error *ngIf=\"formData.get('name').errors?.pattern\">3 to 30 character A-Z a-z . - are supported.</mat-error>\n      </mat-form-field>\n\n      <!--Username field-->\n      <mat-form-field>\n        <mat-label>Username</mat-label>\n        <input matInput formControlName=\"username\" #userNameTag placeholder=\"Enter username without space\" required>\n        <mat-error *ngIf=\"formData.get('username').errors?.required\">Required Field</mat-error>\n        <mat-error *ngIf=\"formData.get('username').errors?.pattern\">Small later, digit with no space supported</mat-error>\n        <mat-error *ngIf=\"formData.get('username').errors?.minlength\">Minimum length should be 4</mat-error>\n        <mat-error *ngIf=\"formData.get('username').errors?.maxlength\">Maximum allowed length 20</mat-error>\n        <mat-error *ngIf=\"formData.get('username').errors?.uniqueUsername\">This name is not available</mat-error>\n        <mat-hint *ngIf=\"formData.get('username').pending\" align=\"start\">Checking availability...</mat-hint>\n        <mat-hint align=\"end\">{{userNameTag.value.length}} / 20</mat-hint>\n      </mat-form-field>\n\n      <!--User level field-->\n      <mat-form-field>\n        <mat-label>User level</mat-label>\n        <mat-select formControlName=\"userLevelId\" required>\n          <mat-option value=\"\">Select...</mat-option>\n          <mat-option *ngFor=\"let userLevel of userLevels\" [value]=\"userLevel.levelId\">{{ userLevel.title }}</mat-option>\n        </mat-select>\n        <mat-error>Required Field</mat-error>\n      </mat-form-field>\n\n      <!--Add email section-->\n      <div style=\"border: 1px solid silver; padding: 10px;\">\n        <div formArrayName=\"emails\" *ngFor=\"let email of formData.controls.emails.controls; let i = index\">\n          <!--<hr *ngIf=\"formData.value.emails.length>1\">-->\n          <div formGroupName=\"{{ i }}\" style=\"background-color: #f7f7f7; padding: 10px;\">\n            <mat-form-field style=\"width: 100px;\">\n              <mat-label>Email Type</mat-label>\n              <mat-select formControlName=\"emailType\">\n                <mat-option value=\"Home\">Home</mat-option>\n                <mat-option value=\"Work\">Work</mat-option>\n                <mat-option value=\"Other\">Other</mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 300px; margin-left: 10px; margin-right: 20px;\">\n              <mat-label>E-mail address</mat-label>\n              <input matInput formControlName=\"email\" placeholder=\"Enter email address\" required>\n              <mat-icon matSuffix>email</mat-icon>\n              <mat-error *ngIf=\"email.get('email').errors?.required\">Required field</mat-error>\n              <mat-error *ngIf=\"email.get('email').errors?.email\">Invalid Email</mat-error>\n            </mat-form-field>\n\n            <button mat-icon-button\n                    *ngIf=\"formData.value.emails.length>1\"\n                    color=\"warn\"\n                    (click)=\"removeEmailGroup(i)\">\n              <mat-icon>clear</mat-icon>\n            </button>\n          </div>\n        </div>\n        <span>Add another email address</span>\n        <button mat-icon-button [disabled]=\"formData.get('emails').invalid\" (click)=\"addEmailGroup()\" color=\"accent\"><mat-icon>add_circle</mat-icon></button>\n      </div>\n\n      <!--Add phone number section-->\n      <div style=\"border: 1px solid silver; padding: 10px; margin-top: 20px;\">\n        <div formArrayName=\"phones\" *ngFor=\"let phone of formData.get('phones').controls; let i = index\">\n\n          <div [formGroupName]=\"i\" style=\"background-color: #f7f7f7; padding: 10px;\">\n            <mat-form-field style=\"width: 100px;\">\n              <mat-label>Phone Type</mat-label>\n              <mat-select formControlName=\"phoneType\">\n                <mat-option value=\"Home\">Home</mat-option>\n                <mat-option value=\"Work\">Work</mat-option>\n                <mat-option value=\"Other\">Other</mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 300px; margin-left: 10px; margin-right: 20px;\">\n              <mat-label>Phone number</mat-label>\n              <input formControlName=\"number\" matInput placeholder=\"Enter phone number\" required>\n              <mat-icon matSuffix>phone</mat-icon>\n              <mat-error>Required Field</mat-error>\n            </mat-form-field>\n\n            <button mat-icon-button (click)=\"removePhoneGroup(i)\" *ngIf=\"formData.value.phones.length>1\" color=\"warn\"><mat-icon>clear</mat-icon></button>\n          </div>\n        </div>\n        <span>Add another phone number</span>\n        <button mat-icon-button [disabled]=\"formData.get('phones').invalid\" (click)=\"addPhoneGroup()\" color=\"accent\"><mat-icon>add_circle</mat-icon></button>\n      </div >\n\n      <!--Date of birth section-->\n      <mat-form-field style=\"width: 300px; margin-top: 20px;\">\n        <mat-label>Date of birth</mat-label>\n        <input matInput formControlName=\"dob\" [matDatepicker]=\"doppicker\" placeholder=\"Enter DOB\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"doppicker\"></mat-datepicker-toggle>\n        <mat-datepicker #doppicker></mat-datepicker>\n        <mat-error>Required Field</mat-error>\n      </mat-form-field>\n\n      <!--Designation section-->\n      <div style=\"margin-top: 20px;\">\n        <div style=\"background-color: #f7f7f7; padding: 10px;\">\n\n          <mat-form-field style=\"width: 300px;  margin-right: 20px;\">\n            <mat-label>Designation</mat-label>\n            <input matInput formControlName=\"dgnTitle\" placeholder=\"Title\" required>\n            <mat-error>Required Field</mat-error>\n          </mat-form-field>\n\n          <mat-form-field  style=\"width: 200px;\">\n            <mat-label>From date</mat-label>\n            <input matInput formControlName=\"dgnFromDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" required>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error>Required Field</mat-error>\n          </mat-form-field>\n\n          <!--<button mat-icon-button color=\"warn\"><mat-icon>close</mat-icon></button>-->\n        </div>\n      </div>\n\n\n      <!--Gender + Religion + BloodGroup-->\n      <div style=\"padding: 10px; background-color: #f5f5f5; margin-top: 20px;\">\n\n        <mat-form-field style=\"width: 180px;\">\n          <mat-label>Gender</mat-label>\n          <mat-select formControlName=\"gender\">\n            <mat-option value=\"Male\">Male</mat-option>\n            <mat-option value=\"Female\">Female</mat-option>\n            <mat-option value=\"Other\">Other</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 180px; margin-left: 10px; margin-right: 10px;\">\n          <mat-label>Religion</mat-label>\n          <mat-select formControlName=\"religion\">\n            <mat-option value=\"Islam\">Islam</mat-option>\n            <mat-option value=\"Hinduism\">Hinduism</mat-option>\n            <mat-option value=\"Christianity\">Christianity</mat-option>\n            <mat-option value=\"Buddism\">Buddism</mat-option>\n            <mat-option value=\"Judaism\">Judaism</mat-option>\n            <mat-option value=\"Catholicism\">Catholicism</mat-option>\n            <mat-option value=\"Other\">Other</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field style=\"width: 180px;\">\n          <mat-label>Blood Group</mat-label>\n          <mat-select formControlName=\"bloodGroup\">\n            <mat-option value=\"A+\">A+</mat-option>\n            <mat-option value=\"A-\">A-</mat-option>\n            <mat-option value=\"B+\">B+</mat-option>\n            <mat-option value=\"B-\">B-</mat-option>\n            <mat-option value=\"AB+\">AB+</mat-option>\n            <mat-option value=\"AB-\">AB-</mat-option>\n            <mat-option value=\"O+\">O+</mat-option>\n            <mat-option value=\"O-\">O-</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      </div>\n\n      <mat-form-field style=\"margin-top: 20px;\">\n        <mat-label>Address</mat-label>\n        <textarea matInput #addressVal maxlength=\"120\" formControlName=\"address\" placeholder=\"Enter address\"></textarea>\n        <mat-hint align=\"end\">{{ addressVal.value.length }} / 120</mat-hint>\n      </mat-form-field>\n\n      <div style=\"margin-top: 20px;\" align=\"end\">\n        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"formData.invalid\"><mat-icon>save</mat-icon> Save</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n\r\n<mat-tab-group *ngIf=\"gs.userData\">\r\n  <mat-tab label=\"App List\">\r\n\r\n    <mat-card class=\"apps-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>User apps list</mat-card-title>\r\n        <mat-card-subtitle>Useful applications as per user role.</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-list>\r\n\r\n          <mat-list-item *ngFor=\"let app of gs.userData.appList\">\r\n            <mat-icon mat-list-icon>touch_app</mat-icon>\r\n            <a href=\"#\" mat-line>{{app.appName}}</a>\r\n            <p mat-line> {{app.remark}} </p>\r\n          </mat-list-item>\r\n\r\n        </mat-list>\r\n      </mat-card-content>\r\n      <mat-card-actions></mat-card-actions>\r\n    </mat-card>\r\n\r\n  </mat-tab>\r\n  <mat-tab label=\"Options\">\r\n\r\n    <mat-card style=\"width: 400px; margin: 10px;\">\r\n      <mat-card-header>\r\n        <mat-card-title>User Options</mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n\r\n        <button mat-raised-button color=\"warn\" (click)=\"router.navigate(['/manage/user'])\">Users</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"router.navigate(['/manage/app'])\">Applications</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"router.navigate(['/manage/level'])\">User Levels</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"router.navigate(['/manage/prime/access'])\">Prime access control</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"changePassword()\">Change password</button>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-app/manage-app.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-app/manage-app.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div style=\"width: 100%; margin: 10px auto 0 auto; padding: 10px; background-color: #FFF;\">\n  <mat-toolbar style=\"justify-content: space-between;\">\n    <div>\n      <button mat-flat-button style=\"background: #f5f5f5;\"\n              (click)=\"location.back()\"\n              matTooltipPosition=\"after\"\n              matTooltip=\"Go back to the previous page\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      Manage Application\n    </div>\n    <div>\n      <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n        <input matInput style=\"background-color:  background-color: #f5f5f5;\" [(ngModel)]=\"searchKey\" (keyup)=\"appTableFilter($event.target.value)\" placeholder=\"Search...\">\n        <button mat-icon-button matSuffix (click)=\"onSearchClear()\" aria-label=\"clear\"><mat-icon>close</mat-icon></button>\n      </mat-form-field>\n\n      <button mat-mini-fab\n              style=\"margin-left: 50px;\" color=\"accent\"\n              aria-label=\"Add new user\" (click)=\"router.navigate(['/manage/app/add'])\"\n              matTooltip=\"Add new App\"\n              matTooltipPosition=\"before\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar>\n\n\n  <table mat-table [dataSource]=\"tableData\" class=\"mat-elevation-z8\" matSort>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"appName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> App name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.appName}} </td>\n    </ng-container>\n\n    <!-- Username Column -->\n    <ng-container matColumnDef=\"sessAryName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Base name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.sessAryName}} </td>\n    </ng-container>\n\n    <!-- Designation Column -->\n    <ng-container matColumnDef=\"remark\">\n      <th mat-header-cell *matHeaderCellDef> Remark </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.remark}} </td>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"warn\"\n                matTooltip=\"Edit App properties\"\n                (click)=\"router.navigate(['/manage/app/edit/' + element.appId])\"\n                matTooltipPosition=\"before\"><mat-icon>edit</mat-icon></button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading data...\n      </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data...\n      </mat-footer-cell>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':tableData!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':paginator.length!=0}\"></mat-footer-row>\n  </table>\n  <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-level-app/manage-level-app.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-level-app/manage-level-app.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div style=\"padding: 10px;\">\n  <div *ngIf=\"permittedAppList\">\n\n    <mat-toolbar style=\"justify-content: space-between\">\n\n\n      <div>\n        <button mat-flat-button style=\"background: #f5f5f5;\"\n                (click)=\"location.back()\"\n                matTooltipPosition=\"after\"\n                matTooltip=\"Go back to the previous page\">\n          <mat-icon>keyboard_arrow_left</mat-icon>\n        </button>\n        <span matTooltip=\"{{permittedAppList.description}}\" matTooltipPosition=\"after\">\n          {{permittedAppList.title}} [ID: {{ permittedAppList.levelId }}]\n        </span>\n\n      </div>\n      <div>\n\n        <mat-form-field *ngIf=\"remainingAppListToAdd\" style=\"width: 300px;\" floatLabel=\"never\">\n          <input type=\"text\" placeholder=\"Pick one to add\" aria-label=\"Number\" matInput [formControl]=\"appPickControl\" [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option (click)=\"setOption(option.appId)\" *ngFor=\"let option of filteredOptions | async\" [value]=\"option.appName\">\n              {{option.appName}}\n            </mat-option>\n            <mat-option disabled=\"true\" *ngIf=\"!remainingAppListToAdd.length\" style=\"padding: 10px;\">\n              No Apps remaining to add\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n\n        <button mat-icon-button [disabled]=\"!selectedAppId\" (click)=\"addAppToThisLevel()\"><mat-icon>add_circle</mat-icon></button>\n\n      </div>\n    </mat-toolbar>\n\n    <div style=\"border: 2px solid #f5f5f5; padding: 10px;\">\n      <mat-card *ngFor=\"let app of permittedAppList.appList\" style=\"margin: 5px;\">\n        <mat-card-header style=\"justify-content: space-between\">\n          <mat-card-title>{{ app.appName }} [ID: {{ app.appId }}]</mat-card-title>\n          <mat-card-subtitle>Permission Id: {{ app.permissionId }}</mat-card-subtitle>\n          <div>\n            <button mat-flat-button color=\"accent\" (click)=\"updateLevelPermission(app.permissionId)\" style=\"margin-right: 10px;\"><mat-icon>playlist_add_check</mat-icon></button>\n            <button mat-flat-button color=\"warn\" (click)=\"removeAppFromThisLevel(app.permissionId)\"><mat-icon>delete</mat-icon></button>\n          </div>\n        </mat-card-header>\n      </mat-card>\n    </div>\n\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-level/manage-level.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-level/manage-level.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div style=\"width: 100%; margin: 10px auto 0 auto; padding: 10px; background-color: #FFF;\">\n  <mat-toolbar style=\"justify-content: space-between;\">\n\n    <div>\n      <button mat-flat-button style=\"background: #f5f5f5;\"\n              (click)=\"location.back()\"\n              matTooltipPosition=\"after\"\n              matTooltip=\"Go back to the previous page\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      MANAGE USER LEVEL\n    </div>\n    <div>\n\n\n      <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n        <input matInput style=\"background-color:  background-color: #f5f5f5;\" [(ngModel)]=\"searchKey\" (keyup)=\"levelTableFilter($event.target.value)\" placeholder=\"Search...\">\n        <button mat-icon-button matSuffix (click)=\"onSearchClear()\" aria-label=\"clear\"><mat-icon>close</mat-icon></button>\n      </mat-form-field>\n\n      <button mat-mini-fab\n              color=\"accent\"\n              (click)=\"addNewLevel()\"\n              matTooltip=\"Add new level\"\n              matTooltipPosition=\"before\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar>\n\n\n  <table mat-table [dataSource]=\"tableData\" class=\"mat-elevation-z8\" matSort>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- Username Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"warn\"\n                matTooltip=\"Edit user level properties\"\n                (click)=\"editLevel(element.levelId)\"\n                matTooltipPosition=\"before\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"accent\"\n                matTooltip=\"Manage user level app list\"\n                (click)=\"router.navigate(['/manage/level/apps/' + element.levelId])\"\n                matTooltipPosition=\"before\">\n          <mat-icon>playlist_add_check</mat-icon>\n        </button>\n\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading data...\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data...\n      </mat-footer-cell>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':tableData!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':paginator.length!=0}\"></mat-footer-row>\n  </table>\n  <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-user/manage-user.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-user/manage-user.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div style=\"width: 100%; margin: 10px auto 0 auto; padding: 10px; background-color: #FFF;\">\n  <mat-toolbar style=\"justify-content: space-between;\">\n    <div>\n      <button mat-flat-button style=\"background: #f5f5f5;\"\n              matTooltipPosition=\"after\"\n              matTooltip=\"Go back to the previous page\"\n              (click)=\"location.back()\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      MANAGE USER ACCOUNT\n    </div>\n    <div>\n      <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n        <input matInput style=\"background-color:  background-color: #f5f5f5;\" [(ngModel)]=\"searchKey\" (keyup)=\"userTableFilter($event.target.value)\" placeholder=\"Search...\">\n        <button mat-icon-button matSuffix (click)=\"onSearchClear()\" aria-label=\"clear\"><mat-icon>close</mat-icon></button>\n      </mat-form-field>\n\n      <button mat-mini-fab\n              matTooltipPosition=\"before\"\n              matTooltip=\"Add new user\"\n              style=\"margin-left: 50px;\" color=\"accent\"\n              aria-label=\"Add new user\" (click)=\"router.navigate(['/manage/user/add'])\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar>\n\n\n\n\n  <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n\n  <table mat-table [dataSource]=\"tableData\" class=\"mat-elevation-z8\" matSort>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Full Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Username Column -->\n    <ng-container matColumnDef=\"username\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Username </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n    </ng-container>\n\n    <!-- Designation Column -->\n    <ng-container matColumnDef=\"designation\">\n      <th mat-header-cell *matHeaderCellDef> Designation </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.designation}} </td>\n    </ng-container>\n\n    <!-- Duration Column -->\n    <ng-container matColumnDef=\"duration\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Duration </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.duration}} </td>\n    </ng-container>\n\n    <!-- Blood Group Column -->\n    <ng-container matColumnDef=\"bloodGroup\">\n      <th mat-header-cell *matHeaderCellDef> Blood Group </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.bloodGroup}}</td>\n    </ng-container>\n\n    <!-- User Level Column -->\n    <ng-container matColumnDef=\"userLevel\">\n      <th mat-header-cell *matHeaderCellDef> User Level </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.userLevel}}</td>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button matTooltip=\"Detail view\" matTooltipPosition=\"before\" color=\"accent\" (click)=\"openDialog(element.userId)\"><mat-icon>launch</mat-icon></button>\n        <button mat-icon-button matTooltip=\"Edit\" (click)=\"router.navigate(['/manage/user/edit/', element.userId])\" matTooltipPosition=\"before\" color=\"warn\"><mat-icon>edit</mat-icon></button>\n        <button mat-icon-button matTooltip=\"Change password\" matTooltipPosition=\"before\" color=\"warn\"><mat-icon>vpn_key</mat-icon></button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading data...\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data...\n      </mat-footer-cell>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':tableData!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':paginator.length!=0}\"></mat-footer-row>\n  </table>\n  <mat-paginator (page)=\"syncPrimaryPaginator($event)\"\n                 [pageSize]=\"paginator.pageSize\" [pageIndex]=\"paginator.pageIndex\"\n                 [length]=\"paginator.length\" [pageSizeOptions]=\"paginator.pageSizeOptions\"\n                 showFirstLastButtons>\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navbar\">\r\n  <!--<div>SW-Assertive</div>-->\r\n  <div>User & App Shell</div>\r\n  <div *ngIf=\"navBarData\">\r\n    <button mat-flat-button (click)=\"router.navigate(['/home'])\" color=\"primary\"><mat-icon>home</mat-icon> Home</button>\r\n    <button mat-flat-button color=\"primary\"><mat-icon>account_box</mat-icon> {{navBarData.user.fullName}}</button>\r\n    <button mat-flat-button color=\"primary\" (click)=\"signOut()\"><mat-icon>exit_to_app</mat-icon> Sign out</button>\r\n\r\n    <button mat-icon-button [mat-menu-trigger-for]=\"beforeMenu\"><mat-icon>apps</mat-icon></button>\r\n    <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\r\n      <a href=\"{{app.url}}\" mat-menu-item *ngFor=\"let app of navBarData.appList\"\r\n      matTooltip=\"{{app.remark}}\" [matTooltipPosition]=\"'before'\">\r\n        {{app.appName}}\r\n      </a>\r\n    </mat-menu>\r\n\r\n  </div>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/prime-access/prime-access.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/prime-access/prime-access.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div style=\"width: 100%; margin: 10px auto 0 auto; padding: 10px; background-color: #FFF;\">\n  <mat-toolbar style=\"justify-content: space-between;\">\n    <div>\n      <button mat-flat-button style=\"background: #f5f5f5;\"\n              matTooltipPosition=\"after\"\n              matTooltip=\"Go back to the previous page\"\n              (click)=\"location.back()\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      MANAGE PRIME ACCESS\n    </div>\n    <div>\n      <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n        <input matInput style=\"background-color:  background-color: #f5f5f5;\" [(ngModel)]=\"searchKey\" (keyup)=\"userTableFilter($event.target.value)\" placeholder=\"Search...\">\n        <button mat-icon-button matSuffix (click)=\"onSearchClear()\" aria-label=\"clear\"><mat-icon>close</mat-icon></button>\n      </mat-form-field>\n    </div>\n  </mat-toolbar>\n\n  <table mat-table [dataSource]=\"tableData\" class=\"mat-elevation-z8\" matSort>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Full Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Username Column -->\n    <ng-container matColumnDef=\"username\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Username </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n    </ng-container>\n\n    <!-- User Level Column -->\n    <ng-container matColumnDef=\"userLevel\">\n      <th mat-header-cell *matHeaderCellDef> User Level </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.userLevel}}</td>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button matTooltip=\"Change Prime Access\" matTooltipPosition=\"before\" color=\"warn\" (click)=\"openDialog(element.userId)\"><mat-icon>verified_user</mat-icon></button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading data...\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data...\n      </mat-footer-cell>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':tableData!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':paginator.length!=0}\"></mat-footer-row>\n  </table>\n  <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sign-in/sign-in.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sign-in/sign-in.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"query\" *ngIf=\"isLoading\"></mat-progress-bar>\r\n\r\n<div [ngClass]=\"{disabledDiv: isLoading}\" class=\"signInBlock\">\r\n\r\n  <div class=\"signInHeader\">Sign in</div>\r\n\r\n  <div class=\"signInContainer\">\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Username</mat-label>\r\n      <input matInput id=\"input_1\" [errorStateMatcher]=\"matcher\" (keyup.enter)=\"focusInput2()\" [(ngModel)]=\"loginData.username\" placeholder=\"Enter your username\" autocomplete=\"off\">\r\n      <mat-icon matSuffix>perm_identity</mat-icon>\r\n      <mat-hint></mat-hint>\r\n      <mat-error>{{matcher.errorMessage}}</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n      <mat-label>Password</mat-label>\r\n      <input matInput id=\"input_2\" [errorStateMatcher]=\"matcher\" (keyup.enter)=\"signIn(loginData)\" [(ngModel)]=\"loginData.password\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\r\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      <!--<mat-hint></mat-hint>-->\r\n      <mat-error>{{matcher.errorMessage}}</mat-error>\r\n    </mat-form-field>\r\n\r\n    <button mat-button style=\"border-radius: 0;\">About credential</button>\r\n    <button mat-raised-button color=\"primary\" style=\"float: right; border-radius: 0;\" (click)=\"signIn(loginData)\">Sign in</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n<button (click)=\"loadingToggle()\">Test Enable disable</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-add-level/dialog-add-level.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog/dialog-add-level/dialog-add-level.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.levelId?'Edit level':'Add new level'}}</h1>\n<div mat-dialog-content>\n\n  <form [formGroup]=\"formData\" autocomplete=\"off\">\n\n    <mat-form-field>\n      <mat-label>Title</mat-label>\n      <input matInput formControlName=\"title\" placeholder=\"Enter title\" cdkFocusInitial>\n      <mat-error *ngIf=\"formData.get('title').errors?.required\">Field is required</mat-error>\n      <mat-error *ngIf=\"formData.get('title').errors?.minlength\">Minimum length is 3</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Description</mat-label>\n      <textarea matInput formControlName=\"description\" placeholder=\"Enter description\"></textarea>\n      <mat-error>Field is required</mat-error>\n    </mat-form-field>\n\n  </form>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-flat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-raised-button [disabled]=\"formData.invalid\" [mat-dialog-close]=\"formData.value\">Save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>User Level: <strong>{{prmData.title}}</strong></h1>\n<div mat-dialog-content>\n  <h3 mat-dialog-title>App Name: <strong>{{prmData.appName}}</strong></h3>\n  <div>\n    <div *ngFor=\"let access of prmData.accessList\" style=\"padding: 10px;\">\n      <mat-slide-toggle [(ngModel)]=\"access.val\">{{ access.definition }}</mat-slide-toggle>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-flat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"prmData\">Save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-change-password/dialog-change-password.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog/dialog-change-password/dialog-change-password.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title><strong>Change password!</strong></h1>\n\n<div mat-dialog-content>\n  <h3 mat-dialog-title><strong>{{data.fullName}}</strong> [{{data.username}}]</h3>\n  <div>\n    <form>\n      <mat-form-field>\n        <mat-label>Current password</mat-label>\n        <input matInput placeholder=\"Enter current password.\" [type]=\"hidex ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hidex = !hidex\">{{hidex ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>New password</mat-label>\n        <input matInput placeholder=\"Enter new password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Retype new password</mat-label>\n        <input matInput placeholder=\"Retype new password\" [type]=\"hide ? 'password' : 'text'\">\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </mat-form-field>\n    </form>\n  </div>\n</div>\n\n<div mat-dialog-actions align=\"end\">\n  <button mat-flat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"primeAccess\">Save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-prime-access/dialog-prime-access.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog/dialog-prime-access/dialog-prime-access.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Full Name: <strong>{{user.name}}</strong></h1>\n<div mat-dialog-content>\n  <h3 mat-dialog-title>Username: <strong>{{user.username}}</strong></h3>\n  <div>\n    <div *ngFor=\"let access of primeAccess\" style=\"padding: 10px;\">\n      <mat-slide-toggle [(ngModel)]=\"access.val\">{{ access.definition }}</mat-slide-toggle>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-flat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"primeAccess\">Save</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-user-view/dialog-user-view.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog/dialog-user-view/dialog-user-view.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.name}}</h1>\n<div mat-dialog-content>\n  <i>{{data.username}}</i>\n  <h5>{{data.designations[0].title}}</h5>\n  <p>Blood Group: {{data.bloodgroup}}</p>\n  <p>Religion: {{data.religion}}</p>\n\n  <div style=\"padding: 20px; background: #f5f5f5;\">Phone:\n    <div style=\"padding: 5px;\" *ngFor=\"let phone of data.phones\">{{phone.phoneType}}: {{phone.number}}</div>\n  </div>\n\n  <div style=\"padding: 20px; background: #f5f5f5;\">E-mail:\n    <div style=\"padding: 5px;\" *ngFor=\"let email of data.emails\">{{email.emailType}}: {{email.email}}</div>\n  </div>\n\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/manage-user/manage-user.component */ "./src/app/components/manage-user/manage-user.component.ts");
/* harmony import */ var _components_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bad-request/bad-request.component */ "./src/app/components/bad-request/bad-request.component.ts");
/* harmony import */ var _components_manage_app_manage_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manage-app/manage-app.component */ "./src/app/components/manage-app/manage-app.component.ts");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/components/add-user/add-user.component.ts");
/* harmony import */ var _components_add_app_add_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-app/add-app.component */ "./src/app/components/add-app/add-app.component.ts");
/* harmony import */ var _components_edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-app/edit-app.component */ "./src/app/components/edit-app/edit-app.component.ts");
/* harmony import */ var _components_manage_level_manage_level_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage-level/manage-level.component */ "./src/app/components/manage-level/manage-level.component.ts");
/* harmony import */ var _components_manage_level_app_manage_level_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/manage-level-app/manage-level-app.component */ "./src/app/components/manage-level-app/manage-level-app.component.ts");
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-user/edit-user.component */ "./src/app/components/edit-user/edit-user.component.ts");
/* harmony import */ var _components_prime_access_prime_access_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/prime-access/prime-access.component */ "./src/app/components/prime-access/prime-access.component.ts");
















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/user', component: _components_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_6__["ManageUserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/user/add', component: _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/user/edit/:id', component: _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_14__["EditUserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/app', component: _components_manage_app_manage_app_component__WEBPACK_IMPORTED_MODULE_8__["ManageAppComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/app/add', component: _components_add_app_add_app_component__WEBPACK_IMPORTED_MODULE_10__["AddAppComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/app/edit/:id', component: _components_edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_11__["EditAppComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/level', component: _components_manage_level_manage_level_component__WEBPACK_IMPORTED_MODULE_12__["ManageLevelComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/level/apps/:id', component: _components_manage_level_app_manage_level_app_component__WEBPACK_IMPORTED_MODULE_13__["ManageLevelAppComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'manage/prime/access', component: _components_prime_access_prime_access_component__WEBPACK_IMPORTED_MODULE_15__["PrimeAccessComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'signin', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'badrequest', component: _components_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_7__["BadRequestComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'swassertiveFront';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage-user/manage-user.component */ "./src/app/components/manage-user/manage-user.component.ts");
/* harmony import */ var _components_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bad-request/bad-request.component */ "./src/app/components/bad-request/bad-request.component.ts");
/* harmony import */ var _components_manage_app_manage_app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/manage-app/manage-app.component */ "./src/app/components/manage-app/manage-app.component.ts");
/* harmony import */ var _dialog_dialog_user_view_dialog_user_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/dialog-user-view/dialog-user-view.component */ "./src/app/dialog/dialog-user-view/dialog-user-view.component.ts");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/components/add-user/add-user.component.ts");
/* harmony import */ var _components_add_app_add_app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-app/add-app.component */ "./src/app/components/add-app/add-app.component.ts");
/* harmony import */ var _components_edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-app/edit-app.component */ "./src/app/components/edit-app/edit-app.component.ts");
/* harmony import */ var _components_manage_level_manage_level_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/manage-level/manage-level.component */ "./src/app/components/manage-level/manage-level.component.ts");
/* harmony import */ var _dialog_dialog_add_level_dialog_add_level_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialog/dialog-add-level/dialog-add-level.component */ "./src/app/dialog/dialog-add-level/dialog-add-level.component.ts");
/* harmony import */ var _components_manage_level_app_manage_level_app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/manage-level-app/manage-level-app.component */ "./src/app/components/manage-level-app/manage-level-app.component.ts");
/* harmony import */ var _dialog_dialog_change_level_app_permission_dialog_change_level_app_permission_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component */ "./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.ts");
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-user/edit-user.component */ "./src/app/components/edit-user/edit-user.component.ts");
/* harmony import */ var _components_prime_access_prime_access_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/prime-access/prime-access.component */ "./src/app/components/prime-access/prime-access.component.ts");
/* harmony import */ var _dialog_dialog_prime_access_dialog_prime_access_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialog/dialog-prime-access/dialog-prime-access.component */ "./src/app/dialog/dialog-prime-access/dialog-prime-access.component.ts");
/* harmony import */ var _dialog_dialog_change_password_dialog_change_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialog/dialog-change-password/dialog-change-password.component */ "./src/app/dialog/dialog-change-password/dialog-change-password.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _components_manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_12__["ManageUserComponent"],
                _components_bad_request_bad_request_component__WEBPACK_IMPORTED_MODULE_13__["BadRequestComponent"],
                _components_manage_app_manage_app_component__WEBPACK_IMPORTED_MODULE_14__["ManageAppComponent"],
                _dialog_dialog_user_view_dialog_user_view_component__WEBPACK_IMPORTED_MODULE_15__["DialogUserViewComponent"],
                _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_16__["AddUserComponent"],
                _components_add_app_add_app_component__WEBPACK_IMPORTED_MODULE_17__["AddAppComponent"],
                _components_edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_18__["EditAppComponent"],
                _components_manage_level_manage_level_component__WEBPACK_IMPORTED_MODULE_19__["ManageLevelComponent"],
                _dialog_dialog_add_level_dialog_add_level_component__WEBPACK_IMPORTED_MODULE_20__["DialogAddLevelComponent"],
                _components_manage_level_app_manage_level_app_component__WEBPACK_IMPORTED_MODULE_21__["ManageLevelAppComponent"],
                _dialog_dialog_change_level_app_permission_dialog_change_level_app_permission_component__WEBPACK_IMPORTED_MODULE_22__["DialogChangeLevelAppPermissionComponent"],
                _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_23__["EditUserComponent"],
                _components_prime_access_prime_access_component__WEBPACK_IMPORTED_MODULE_24__["PrimeAccessComponent"],
                _dialog_dialog_prime_access_dialog_prime_access_component__WEBPACK_IMPORTED_MODULE_25__["DialogPrimeAccessComponent"],
                _dialog_dialog_change_password_dialog_change_password_component__WEBPACK_IMPORTED_MODULE_26__["DialogChangePasswordComponent"]
            ],
            entryComponents: [
                _dialog_dialog_user_view_dialog_user_view_component__WEBPACK_IMPORTED_MODULE_15__["DialogUserViewComponent"],
                _dialog_dialog_add_level_dialog_add_level_component__WEBPACK_IMPORTED_MODULE_20__["DialogAddLevelComponent"],
                _dialog_dialog_change_level_app_permission_dialog_change_level_app_permission_component__WEBPACK_IMPORTED_MODULE_22__["DialogChangeLevelAppPermissionComponent"],
                _dialog_dialog_prime_access_dialog_prime_access_component__WEBPACK_IMPORTED_MODULE_25__["DialogPrimeAccessComponent"],
                _dialog_dialog_change_password_dialog_change_password_component__WEBPACK_IMPORTED_MODULE_26__["DialogChangePasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log('verifying user authentication...');
        return this.authService.isSignedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/add-app/add-app.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/add-app/add-app.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtYXBwL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcc3dhc3NlcnRpdmVGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRkLWFwcFxcYWRkLWFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZGQtYXBwL2FkZC1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWFwcC9hZGQtYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-app/add-app.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/add-app/add-app.component.ts ***!
  \*********************************************************/
/*! exports provided: AddAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAppComponent", function() { return AddAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/custom.validator */ "./src/app/services/custom.validator.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");







var AddAppComponent = /** @class */ (function () {
    function AddAppComponent(fb, dataService, location, gs) {
        this.fb = fb;
        this.dataService = dataService;
        this.location = location;
        this.gs = gs;
    }
    AddAppComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddAppComponent.prototype.buildForm = function () {
        this.newApp = this.fb.group({
            appName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: ['http://', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(http|HTTP)(|s|S)(:\\/\\/).{2,100}$')]],
            sessAryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)], _services_custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].uniqueBaseName(this.dataService)],
            remark: [''],
            accesses: this.fb.array([
                this.makeAccessGroup()
            ])
        });
    };
    AddAppComponent.prototype.mapNewApp = function (data) {
        var anApp = {
            appId: null,
            appName: data.appName,
            url: data.url,
            sessAryName: data.sessAryName,
            remark: data.remark,
            disabled: '0',
            accesses: data.accesses
        };
        return anApp;
    };
    AddAppComponent.prototype.saveNewApp = function () {
        var _this = this;
        this.gs.isLoading = true;
        // console.log(this.newApp.value);
        this.dataService.createNewApp(this.mapNewApp(this.newApp.value)).subscribe(function (sc) {
            console.log(sc);
            _this.gs.isLoading = false;
            _this.location.back();
        });
    };
    AddAppComponent.prototype.makeAccessGroup = function () {
        return this.fb.group({
            keyword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            definition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            val: [false]
        });
    };
    AddAppComponent.prototype.addAccessGroup = function () {
        this.newApp.get('accesses').push(this.makeAccessGroup());
    };
    AddAppComponent.prototype.removeAccessGroup = function (groupIndex) {
        this.newApp.get('accesses').removeAt(groupIndex);
    };
    AddAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-app',
            template: __webpack_require__(/*! raw-loader!./add-app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-app/add-app.component.html"),
            styles: [__webpack_require__(/*! ./add-app.component.scss */ "./src/app/components/add-app/add-app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
    ], AddAppComponent);
    return AddAppComponent;
}());



/***/ }),

/***/ "./src/app/components/add-user/add-user.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/add-user/add-user.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdXNlci9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXHN3YXNzZXJ0aXZlRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkZC11c2VyXFxhZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/add-user/add-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-user/add-user.component.ts ***!
  \***********************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/custom.validator */ "./src/app/services/custom.validator.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");







var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(fb, dataService, location, gs) {
        this.fb = fb;
        this.dataService = dataService;
        this.location = location;
        this.gs = gs;
        this.hide = true;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllLevels().subscribe(function (sc) {
            _this.userLevels = sc;
            // console.log(sc);
            _this.buildForm();
            // console.log(this.newUser);
            /*this.newUser.valueChanges.subscribe(val => {
              console.log(this.newUser);
              console.log((val.dgnFromDate as Date).getTime());
              console.log((val.dgnFromDate));
            });*/
        });
    };
    AddUserComponent.prototype.buildForm = function () {
        this.newUser = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[A-Z a-z.-]{3,30}$')]],
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9]+$')
                ], _services_custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].uniqueUsername(this.dataService)],
            dob: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userLevelId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            gender: ['Male'],
            religion: ['Islam'],
            bloodGroup: ['A+'],
            address: [''],
            dgnTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dgnFromDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emails: this.fb.array([
                this.makeEmailGroup()
            ]),
            phones: this.fb.array([
                this.makePhoneGroup()
            ])
        });
    };
    AddUserComponent.prototype.mapUserData = function (data) {
        var aUser = {
            userId: null,
            name: data.name,
            dob: (Math.trunc(data.dob.getTime() / 1000)).toString(),
            username: data.username,
            password: data.password,
            gender: data.gender,
            religion: data.religion,
            bloodGroup: data.bloodGroup,
            address: data.address,
            joinTime: (Math.trunc((new Date().getTime()) / 1000)).toString(),
            userLevelId: data.userLevelId,
            blocked: '0',
            phones: data.phones,
            emails: data.emails,
            designations: [
                {
                    fromTime: (Math.trunc(data.dgnFromDate.getTime() / 1000)).toString(),
                    toTime: '0',
                    title: data.dgnTitle
                }
            ]
        };
        return aUser;
    };
    AddUserComponent.prototype.addNewUser = function () {
        var _this = this;
        this.gs.isLoading = true;
        // console.log(this.mapUserData(this.newUser.value));
        this.dataService.createNewUser(this.mapUserData(this.newUser.value)).subscribe(function (sc) {
            console.log(sc);
            _this.gs.isLoading = false;
            _this.location.back();
        });
    };
    AddUserComponent.prototype.makeEmailGroup = function () {
        return this.fb.group({
            emailType: ['Work'],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    AddUserComponent.prototype.addEmailGroup = function () {
        this.newUser.get('emails').push(this.makeEmailGroup());
    };
    AddUserComponent.prototype.removeEmailGroup = function (groupIndexNumber) {
        this.newUser.get('emails').removeAt(groupIndexNumber);
    };
    AddUserComponent.prototype.makePhoneGroup = function () {
        return this.fb.group({
            phoneType: ['Work'],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AddUserComponent.prototype.addPhoneGroup = function () {
        this.newUser.get('phones').push(this.makePhoneGroup());
    };
    AddUserComponent.prototype.removePhoneGroup = function (groupIndexNumber) {
        this.newUser.get('phones').removeAt(groupIndexNumber);
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.scss */ "./src/app/components/add-user/add-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/components/bad-request/bad-request.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/bad-request/bad-request.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFkLXJlcXVlc3QvYmFkLXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/bad-request/bad-request.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bad-request/bad-request.component.ts ***!
  \*****************************************************************/
/*! exports provided: BadRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequestComponent", function() { return BadRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadRequestComponent = /** @class */ (function () {
    function BadRequestComponent() {
    }
    BadRequestComponent.prototype.ngOnInit = function () {
    };
    BadRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bad-request',
            template: __webpack_require__(/*! raw-loader!./bad-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bad-request/bad-request.component.html"),
            styles: [__webpack_require__(/*! ./bad-request.component.scss */ "./src/app/components/bad-request/bad-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadRequestComponent);
    return BadRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-app/edit-app.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-app/edit-app.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWFwcC9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXHN3YXNzZXJ0aXZlRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVkaXQtYXBwXFxlZGl0LWFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWFwcC9lZGl0LWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWFwcC9lZGl0LWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/edit-app/edit-app.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/edit-app/edit-app.component.ts ***!
  \***********************************************************/
/*! exports provided: EditAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppComponent", function() { return EditAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");







var EditAppComponent = /** @class */ (function () {
    function EditAppComponent(gs, fb, dataService, activatedRoute, location) {
        this.gs = gs;
        this.fb = fb;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    EditAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.editAppId = params.get('id');
            _this.getAppDataAndSetToForm();
        });
    };
    EditAppComponent.prototype.buildForm = function () {
        this.editApp = this.fb.group({
            appName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(http|HTTP)(|s|S)(:\\/\\/).{2,100}$')]],
            sessAryName: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            remark: [''],
            accesses: this.fb.array([])
        });
    };
    EditAppComponent.prototype.mapEditAppData = function (data) {
        var anApp = {
            appId: this.editAppId,
            appName: data.appName,
            url: data.url,
            remark: data.remark,
            disabled: '0',
            accesses: data.accesses
        };
        return anApp;
    };
    EditAppComponent.prototype.getAppDataAndSetToForm = function () {
        var _this = this;
        this.dataService.getAppById(this.editAppId).subscribe(function (sc) {
            // console.log(sc);
            // Building form could be set on lifecycle hook
            _this.buildForm();
            // building form array for accesses
            var accessesFormArray = _this.fb.array([]);
            sc.accesses.forEach(function (access) {
                accessesFormArray.push(_this.fb.group({
                    accessId: access.accessId,
                    definition: access.definition,
                    keyword: access.keyword,
                    val: access.val
                }));
            });
            _this.editApp.patchValue({
                appName: sc.appName,
                url: sc.url,
                sessAryName: sc.sessAryName,
                remark: sc.remark
            });
            _this.editApp.setControl('accesses', accessesFormArray);
        });
    };
    EditAppComponent.prototype.saveApp = function () {
        var _this = this;
        this.gs.isLoading = true;
        var dataToSend = this.mapEditAppData(this.editApp.value);
        // console.log(dataToSend);
        this.dataService.updateApp(dataToSend).subscribe(function (sc) {
            console.log(sc);
            _this.gs.isLoading = false;
            _this.location.back();
        });
    };
    EditAppComponent.prototype.makeAccessGroup = function () {
        return this.fb.group({
            accessId: null,
            keyword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            definition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            val: [false]
        });
    };
    EditAppComponent.prototype.addAccessGroup = function () {
        this.editApp.get('accesses').push(this.makeAccessGroup());
    };
    EditAppComponent.prototype.removeAccessGroup = function (groupIndex) {
        this.editApp.get('accesses').removeAt(groupIndex);
    };
    EditAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-app',
            template: __webpack_require__(/*! raw-loader!./edit-app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-app/edit-app.component.html"),
            styles: [__webpack_require__(/*! ./edit-app.component.scss */ "./src/app/components/edit-app/edit-app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], EditAppComponent);
    return EditAppComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-user/edit-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-user/edit-user.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXVzZXIvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxzd2Fzc2VydGl2ZUZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxlZGl0LXVzZXJcXGVkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/edit-user/edit-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(fb, dataService, location, gs, activatedRoute) {
        this.fb = fb;
        this.dataService = dataService;
        this.location = location;
        this.gs = gs;
        this.activatedRoute = activatedRoute;
        this.hide = true;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.dataService.getUserById(params.get('id')).subscribe(function (userRtSc) {
                _this.primeUserData = userRtSc;
                _this.dataService.getAllLevels().subscribe(function (sc) {
                    _this.userLevels = sc;
                    console.log(sc);
                    _this.buildForm();
                    // making array data
                    var userEmails = _this.fb.array([]);
                    userRtSc.emails.forEach(function (email) {
                        userEmails.push(_this.fb.group({
                            emailId: email.emailId,
                            emailType: email.emailType,
                            email: email.email
                        }));
                    });
                    var userPhones = _this.fb.array([]);
                    userRtSc.phones.forEach(function (phone) {
                        userPhones.push(_this.fb.group({
                            phoneId: phone.phoneId,
                            phoneType: phone.phoneType,
                            number: phone.number
                        }));
                    });
                    // console.log(userRtSc);
                    _this.formData.patchValue({
                        name: userRtSc.name,
                        username: userRtSc.username,
                        dob: new Date(Number(userRtSc.dob) * 1000),
                        userLevelId: userRtSc.userLevel.levelId.toString(),
                        gender: userRtSc.gender,
                        religion: userRtSc.religion,
                        bloodGroup: userRtSc.bloodgroup,
                        address: userRtSc.address,
                        dgnTitle: userRtSc.designations[0].title,
                        dgnFromDate: new Date(Number(userRtSc.designations[0].fromTime) * 1000),
                    });
                    _this.formData.setControl('emails', userEmails);
                    _this.formData.setControl('phones', userPhones);
                    // console.log(this.formData);
                    /*this.formData.valueChanges.subscribe(val => {
                      console.log(this.formData);
                      console.log((val.dgnFromDate as Date).getTime());
                      console.log((val.dgnFromDate));
                    });*/
                });
            });
        });
    };
    EditUserComponent.prototype.buildForm = function () {
        this.formData = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[A-Z a-z.-]{3,30}$')]],
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9]+$')
                ]],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userLevelId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: [''],
            religion: [''],
            bloodGroup: [''],
            address: [''],
            dgnTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dgnFromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emails: this.fb.array([
                this.makeEmailGroup()
            ]),
            phones: this.fb.array([
                this.makePhoneGroup()
            ])
        });
    };
    EditUserComponent.prototype.mapUserData = function (data) {
        var aUser = {
            userId: this.primeUserData.userId,
            name: data.name,
            dob: (Math.trunc(data.dob.getTime() / 1000)).toString(),
            username: data.username,
            gender: data.gender,
            religion: data.religion,
            bloodgroup: data.bloodGroup,
            address: data.address,
            jointime: (Math.trunc((new Date().getTime()) / 1000)).toString(),
            userLevelId: data.userLevelId,
            blocked: '0',
            phones: data.phones,
            emails: data.emails,
            designations: [
                {
                    dgnId: null,
                    fromTime: (Math.trunc(data.dgnFromDate.getTime() / 1000)).toString(),
                    toTime: '0',
                    title: data.dgnTitle
                }
            ]
        };
        return aUser;
    };
    EditUserComponent.prototype.updateUser = function () {
        var _this = this;
        this.gs.isLoading = true;
        // console.log(this.mapUserData(this.formData.value));
        console.log('updating user data');
        this.dataService.updateUser(this.mapUserData(this.formData.value)).subscribe(function (sc) {
            console.log(sc);
            _this.gs.isLoading = false;
            _this.location.back();
        });
    };
    EditUserComponent.prototype.makeEmailGroup = function () {
        return this.fb.group({
            emailId: null,
            emailType: ['Work'],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    EditUserComponent.prototype.addEmailGroup = function () {
        this.formData.get('emails').push(this.makeEmailGroup());
    };
    EditUserComponent.prototype.removeEmailGroup = function (groupIndexNumber) {
        this.formData.get('emails').removeAt(groupIndexNumber);
    };
    EditUserComponent.prototype.makePhoneGroup = function () {
        return this.fb.group({
            phoneId: null,
            phoneType: ['Work'],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditUserComponent.prototype.addPhoneGroup = function () {
        this.formData.get('phones').push(this.makePhoneGroup());
    };
    EditUserComponent.prototype.removePhoneGroup = function (groupIndexNumber) {
        this.formData.get('phones').removeAt(groupIndexNumber);
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/components/edit-user/edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n\nbutton {\n  display: block;\n  width: 90%;\n  margin: 10px;\n}\n\n.apps-card {\n  max-width: 500px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcc3dhc3NlcnRpdmVGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuXHJcbn1cclxuXHJcbi5hcHBzLWNhcmQge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5hcHBzLWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_dialog_change_password_dialog_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog/dialog-change-password/dialog-change-password.component */ "./src/app/dialog/dialog-change-password/dialog-change-password.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






// @ts-ignore
var HomeComponent = /** @class */ (function () {
    function HomeComponent(gs, router, dialog) {
        this.gs = gs;
        this.router = router;
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.changePassword = function () {
        var dialogRef = this.dialog.open(_dialog_dialog_change_password_dialog_change_password_component__WEBPACK_IMPORTED_MODULE_4__["DialogChangePasswordComponent"], {
            width: '450px',
            panelClass: 'userViewModal',
            data: this.gs.userData.user
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('Updating password');
            }
            else {
                console.log('Dialog canceled');
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-app/manage-app.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/manage-app/manage-app.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n.search-form-field {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtYXBwL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcc3dhc3NlcnRpdmVGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFuYWdlLWFwcFxcbWFuYWdlLWFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtYXBwL21hbmFnZS1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZS1hcHAvbWFuYWdlLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWFyY2gtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA0MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/manage-app/manage-app.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/manage-app/manage-app.component.ts ***!
  \***************************************************************/
/*! exports provided: ManageAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAppComponent", function() { return ManageAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ManageAppComponent = /** @class */ (function () {
    function ManageAppComponent(dataService, router, location, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.location = location;
        this.dialog = dialog;
        this.displayedColumns = ['appName', 'sessAryName', 'remark', 'status', 'action'];
    }
    ManageAppComponent.prototype.ngOnInit = function () {
        this.getAllApps();
    };
    ManageAppComponent.prototype.getAllApps = function () {
        var _this = this;
        this.dataService.getAllApps().subscribe(function (sc) {
            var apps = [];
            _this.primaryData = sc;
            _this.primaryData.forEach(function (appData) {
                var app = {
                    appId: appData.appId,
                    appName: appData.appName,
                    sessAryName: appData.sessAryName,
                    remark: appData.remark,
                    status: 'N/A'
                };
                apps.push(app);
            });
            _this.tableData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](apps);
            _this.tableData.sort = _this.sort;
            _this.tableData.paginator = _this.paginator;
            _this.tableData.filterPredicate = function (data, filter) {
                var logicBool1 = data.appName.toLowerCase().includes(filter);
                var logicBool2 = data.sessAryName.toLowerCase().includes(filter);
                var logicBool3 = data.remark.toLowerCase().includes(filter);
                var logicBool4 = data.status.toLowerCase().includes(filter);
                return (logicBool1 || logicBool2 || logicBool3 || logicBool4);
            };
        });
    };
    ManageAppComponent.prototype.appTableFilter = function (value) {
        this.tableData.filter = value.trim().toLowerCase();
        if (this.tableData.paginator) {
            this.tableData.paginator.firstPage();
        }
    };
    ManageAppComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.appTableFilter(this.searchKey);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ManageAppComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ManageAppComponent.prototype, "sort", void 0);
    ManageAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-app',
            template: __webpack_require__(/*! raw-loader!./manage-app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-app/manage-app.component.html"),
            styles: [__webpack_require__(/*! ./manage-app.component.scss */ "./src/app/components/manage-app/manage-app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ManageAppComponent);
    return ManageAppComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-level-app/manage-level-app.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/manage-level-app/manage-level-app.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbGV2ZWwtYXBwL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcc3dhc3NlcnRpdmVGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFuYWdlLWxldmVsLWFwcFxcbWFuYWdlLWxldmVsLWFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbGV2ZWwtYXBwL21hbmFnZS1sZXZlbC1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZS1sZXZlbC1hcHAvbWFuYWdlLWxldmVsLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/manage-level-app/manage-level-app.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/manage-level-app/manage-level-app.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageLevelAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLevelAppComponent", function() { return ManageLevelAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialog_dialog_change_level_app_permission_dialog_change_level_app_permission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component */ "./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ManageLevelAppComponent = /** @class */ (function () {
    function ManageLevelAppComponent(dialog, snackBar, activatedRoute, dataService, location) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.location = location;
        this.appPickControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.selectedAppId = '';
        this.remainingAppListToAdd = [];
    }
    ManageLevelAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.levelAppsId = params.get('id');
            _this.getAndSetData();
        });
        this.appPickControl.valueChanges.subscribe(function (val) {
            // console.log(this.selectedAppId);
            _this.selectedAppId = '';
        });
    };
    ManageLevelAppComponent.prototype.getAndSetData = function () {
        this.getLevelApps();
    };
    ManageLevelAppComponent.prototype.getLevelApps = function () {
        var _this = this;
        this.dataService.getLevelApps(this.levelAppsId).subscribe(function (sc) {
            // console.log(sc);
            _this.permittedAppList = sc;
            _this.getAppList();
        });
    };
    ManageLevelAppComponent.prototype.getAppList = function () {
        var _this = this;
        this.dataService.getAllApps().subscribe(function (sc) {
            // clear Remaining app list to add
            _this.remainingAppListToAdd.length = 0;
            sc.forEach(function (iApp) {
                var anApp = {
                    appId: iApp.appId,
                    appName: iApp.appName
                };
                var abc = _this.permittedAppList.appList.filter(function (datas) { return datas.appName.toLowerCase().includes(anApp.appName.toLowerCase()); });
                if (abc.length === 0) {
                    _this.remainingAppListToAdd.push(anApp);
                }
            });
            _this.filteredOptions = _this.appPickControl.valueChanges
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return _this._filter(value); }));
        });
    };
    ManageLevelAppComponent.prototype.setOption = function (appId) {
        this.selectedAppId = appId;
    };
    ManageLevelAppComponent.prototype.addAppToThisLevel = function () {
        var _this = this;
        var pdt = {
            permissionLevelId: this.levelAppsId,
            permissionAppId: this.selectedAppId
        };
        console.log('Adding new app to this level');
        this.dataService.addAppToLevel(pdt).subscribe(function (sc) {
            console.log(sc);
            _this.appPickControl.setValue('');
            _this.getAndSetData();
        });
    };
    ManageLevelAppComponent.prototype.removeAppFromThisLevel = function (id) {
        var _this = this;
        var conf = confirm('Do you want remove this app form user level');
        if (conf) {
            console.log('Removing permission from this level');
            this.dataService.removeAppFromLevel(id).subscribe(function (sc) {
                console.log(sc);
                _this.getAndSetData();
            });
        }
        else {
            console.log('Canceled remove action');
        }
    };
    ManageLevelAppComponent.prototype.updateLevelPermission = function (permissionId) {
        var _this = this;
        this.dataService.getLevelAppPermissionData(permissionId).subscribe(function (sc) {
            var levelAppPermissionData = sc;
            var appPermission = {
                permissionId: levelAppPermissionData.permissionId,
                appId: levelAppPermissionData.appId,
                levelId: levelAppPermissionData.levelId,
                title: levelAppPermissionData.title,
                description: levelAppPermissionData.description,
                appName: levelAppPermissionData.appName,
                url: levelAppPermissionData.url,
                sessAryName: levelAppPermissionData.sessAryName,
                remark: levelAppPermissionData.remark,
                accessList: levelAppPermissionData.accessList
            };
            var dialogRef = _this.dialog.open(_dialog_dialog_change_level_app_permission_dialog_change_level_app_permission_component__WEBPACK_IMPORTED_MODULE_7__["DialogChangeLevelAppPermissionComponent"], {
                width: '600px',
                panelClass: 'userViewModal',
                data: appPermission
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    console.log('Updating level permission');
                    // console.log(result);
                    _this.dataService.udateLevelAppPermissionData(result).subscribe(function (sc) {
                        console.log(sc);
                        _this.snackBar.open('App permission updated for this level', 'ok', {
                            duration: 2000,
                            horizontalPosition: 'right'
                        });
                    });
                }
                else {
                    console.log('Dialog canceled');
                }
            });
        });
    };
    ManageLevelAppComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.remainingAppListToAdd.filter(function (anApp) { return anApp.appName.toLowerCase().includes(filterValue); });
    };
    ManageLevelAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-level-app',
            template: __webpack_require__(/*! raw-loader!./manage-level-app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-level-app/manage-level-app.component.html"),
            styles: [__webpack_require__(/*! ./manage-level-app.component.scss */ "./src/app/components/manage-level-app/manage-level-app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], ManageLevelAppComponent);
    return ManageLevelAppComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-level/manage-level.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-level/manage-level.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n.search-form-field {\n  width: 400px;\n  margin-right: 50px;\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbGV2ZWwvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxzd2Fzc2VydGl2ZUZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYW5hZ2UtbGV2ZWxcXG1hbmFnZS1sZXZlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbGV2ZWwvbWFuYWdlLWxldmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlLWxldmVsL21hbmFnZS1sZXZlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VhcmNoLWZvcm0tZmllbGQge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/manage-level/manage-level.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-level/manage-level.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLevelComponent", function() { return ManageLevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialog_dialog_add_level_dialog_add_level_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog-add-level/dialog-add-level.component */ "./src/app/dialog/dialog-add-level/dialog-add-level.component.ts");







var ManageLevelComponent = /** @class */ (function () {
    function ManageLevelComponent(dataService, router, location, dialog, snackBar) {
        this.dataService = dataService;
        this.router = router;
        this.location = location;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['title', 'description', 'action'];
    }
    ManageLevelComponent.prototype.ngOnInit = function () {
        this.getAllLevels();
    };
    ManageLevelComponent.prototype.getAllLevels = function () {
        var _this = this;
        this.dataService.getAllLevels().subscribe(function (sc) {
            var levels = [];
            _this.primaryData = sc;
            _this.primaryData.forEach(function (levelData) {
                var level = {
                    levelId: levelData.levelId,
                    title: levelData.title,
                    description: levelData.description
                };
                levels.push(level);
            });
            _this.tableData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](levels);
            _this.tableData.sort = _this.sort;
            _this.tableData.paginator = _this.paginator;
            _this.tableData.filterPredicate = function (data, filter) {
                var logicBool1 = data.title.toLowerCase().includes(filter);
                var logicBool2 = data.description.toLowerCase().includes(filter);
                return (logicBool1 || logicBool2);
            };
        });
    };
    ManageLevelComponent.prototype.levelTableFilter = function (value) {
        this.tableData.filter = value.trim().toLowerCase();
        if (this.tableData.paginator) {
            this.tableData.paginator.firstPage();
        }
    };
    ManageLevelComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.levelTableFilter(this.searchKey);
    };
    ManageLevelComponent.prototype.addNewLevel = function () {
        var _this = this;
        var level = {
            levelId: null,
            title: '',
            description: ''
        };
        var dialogRef = this.dialog.open(_dialog_dialog_add_level_dialog_add_level_component__WEBPACK_IMPORTED_MODULE_6__["DialogAddLevelComponent"], {
            width: '450px',
            panelClass: 'userViewModal',
            data: level
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('Creating new level');
                _this.dataService.createNewLevel(result).subscribe(function (sc) {
                    console.log(sc);
                    _this.getAllLevels();
                    _this.snackBar.open('New user level added', 'OK', {
                        duration: 3000,
                        horizontalPosition: 'left'
                    });
                });
            }
            else {
                console.log('Dialog canceled');
            }
        });
    };
    ManageLevelComponent.prototype.editLevel = function (levelId) {
        var _this = this;
        var aLevelById = this.primaryData.find(function (sLevel) { return sLevel.levelId === levelId; });
        var level = {
            levelId: aLevelById,
            title: aLevelById.title,
            description: aLevelById.description
        };
        var dialogRef = this.dialog.open(_dialog_dialog_add_level_dialog_add_level_component__WEBPACK_IMPORTED_MODULE_6__["DialogAddLevelComponent"], {
            width: '450px',
            panelClass: 'userViewModal',
            data: level
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('Updating new level');
                var pdt = {
                    levelId: aLevelById.levelId,
                    title: result.title,
                    description: result.description
                };
                _this.dataService.editLevel(pdt).subscribe(function (sc) {
                    console.log(sc);
                    _this.getAllLevels();
                    _this.snackBar.open('Update successful!', 'OK', {
                        duration: 3000,
                        horizontalPosition: 'left'
                    });
                });
            }
            else {
                console.log('Dialog canceled');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ManageLevelComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ManageLevelComponent.prototype, "sort", void 0);
    ManageLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-level',
            template: __webpack_require__(/*! raw-loader!./manage-level.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-level/manage-level.component.html"),
            styles: [__webpack_require__(/*! ./manage-level.component.scss */ "./src/app/components/manage-level/manage-level.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ManageLevelComponent);
    return ManageLevelComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-user/manage-user.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-user/manage-user.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n.search-form-field {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtdXNlci9EOlxcUHJvamVjdHNcXEFuZ3VsYXJcXHN3YXNzZXJ0aXZlRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1hbmFnZS11c2VyXFxtYW5hZ2UtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtdXNlci9tYW5hZ2UtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlLXVzZXIvbWFuYWdlLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oaWRle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZHtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VhcmNoLWZvcm0tZmllbGQge1xuICB3aWR0aDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/manage-user/manage-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/manage-user/manage-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_user_view_dialog_user_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog/dialog-user-view/dialog-user-view.component */ "./src/app/dialog/dialog-user-view/dialog-user-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ManageUserComponent = /** @class */ (function () {
    function ManageUserComponent(dataService, router, dialog, location) {
        this.dataService = dataService;
        this.router = router;
        this.dialog = dialog;
        this.location = location;
        this.displayedColumns = ['name', 'username', 'designation', 'duration', 'bloodGroup', 'userLevel', 'status', 'action'];
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    ManageUserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.dataService.getAllUsers().subscribe(function (sc) {
            var users = [];
            _this.primaryData = sc;
            _this.primaryData.forEach(function (userData) {
                var user = {
                    userId: userData.userId,
                    name: userData.name,
                    username: userData.username,
                    designation: 'M/A',
                    duration: 'N/A',
                    bloodGroup: userData.bloodgroup,
                    userLevel: userData.userLevel.title,
                    status: 'N/A'
                };
                users.push(user);
            });
            _this.tableData = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](users);
            _this.tableData.sort = _this.sort;
            _this.tableData.paginator = _this.paginator;
            _this.tableData.filterPredicate = function (data, filter) {
                var logicBool1 = data.name.toLowerCase().includes(filter);
                var logicBool2 = data.username.toLowerCase().includes(filter);
                var logicBool3 = data.designation.toLowerCase().includes(filter);
                var logicBool4 = data.duration.toLowerCase().includes(filter);
                var logicBool5 = data.bloodGroup.toLowerCase().includes(filter);
                var logicBool6 = data.userLevel.toLowerCase().includes(filter);
                var logicBool7 = data.status.toLowerCase().includes(filter);
                return (logicBool1 || logicBool2 || logicBool3 || logicBool4 || logicBool5 || logicBool6 || logicBool7);
            };
        });
    };
    ManageUserComponent.prototype.userTableFilter = function (value) {
        this.tableData.filter = value.trim().toLowerCase();
        if (this.tableData.paginator) {
            this.tableData.paginator.firstPage();
        }
    };
    ManageUserComponent.prototype.syncPrimaryPaginator = function (event) {
        this.paginator.pageIndex = event.pageIndex;
        this.paginator.pageSize = event.pageSize;
        this.paginator.page.emit(event);
    };
    ManageUserComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.userTableFilter(this.searchKey);
    };
    ManageUserComponent.prototype.openDialog = function (userId) {
        var aUserById = this.primaryData.find(function (user) { return user.userId === userId; });
        var dialogRef = this.dialog.open(_dialog_dialog_user_view_dialog_user_view_component__WEBPACK_IMPORTED_MODULE_4__["DialogUserViewComponent"], {
            width: '450px',
            panelClass: 'userViewModal',
            data: aUserById
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ManageUserComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ManageUserComponent.prototype, "sort", void 0);
    ManageUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-user',
            template: __webpack_require__(/*! raw-loader!./manage-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-user/manage-user.component.html"),
            styles: [__webpack_require__(/*! ./manage-user.component.scss */ "./src/app/components/manage-user/manage-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], ManageUserComponent);
    return ManageUserComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  justify-content: space-between;\n}\n.navbar button {\n  margin-right: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcc3dhc3NlcnRpdmVGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBidXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICB9XHJcbn1cclxuIiwiLm5hdmJhciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5uYXZiYXIgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, authService, gs) {
        this.router = router;
        this.authService = authService;
        this.gs = gs;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if user data is not present in the global service then fetch it and store to the global service
        if (!this.gs.userData) {
            this.authService.getUserData().subscribe(function (user) {
                // console.log(user);
                _this.gs.userData = user;
                _this.navBarData = _this.gs.userData;
            });
        }
        else {
            this.navBarData = this.gs.userData;
        }
    };
    NavigationComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().subscribe(function (sc) {
            console.warn('signed out... navigating to signin...');
            _this.router.navigate(['/signin']);
        }, function (fl) {
            document.cookie = 'SWASESS=; Max-Age=-99999999;';
            _this.router.navigate(['/signin']);
        });
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/prime-access/prime-access.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/prime-access/prime-access.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.hide {\n  display: none;\n}\n\n.search-form-field {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmltZS1hY2Nlc3MvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxzd2Fzc2VydGl2ZUZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcmltZS1hY2Nlc3NcXHByaW1lLWFjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltZS1hY2Nlc3MvcHJpbWUtYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmltZS1hY2Nlc3MvcHJpbWUtYWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGlkZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/prime-access/prime-access.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/prime-access/prime-access.component.ts ***!
  \*******************************************************************/
/*! exports provided: PrimeAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeAccessComponent", function() { return PrimeAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialog_dialog_prime_access_dialog_prime_access_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog-prime-access/dialog-prime-access.component */ "./src/app/dialog/dialog-prime-access/dialog-prime-access.component.ts");







var PrimeAccessComponent = /** @class */ (function () {
    function PrimeAccessComponent(dataService, router, dialog, location) {
        this.dataService = dataService;
        this.router = router;
        this.dialog = dialog;
        this.location = location;
        this.displayedColumns = ['name', 'username', 'userLevel', 'status', 'action'];
    }
    PrimeAccessComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    PrimeAccessComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.dataService.getAllUsers().subscribe(function (sc) {
            var users = [];
            _this.primaryData = sc;
            _this.primaryData.forEach(function (userData) {
                var user = {
                    userId: userData.userId,
                    name: userData.name,
                    username: userData.username,
                    designation: 'M/A',
                    duration: 'N/A',
                    bloodGroup: userData.bloodgroup,
                    userLevel: userData.userLevel.title,
                    status: 'N/A'
                };
                users.push(user);
            });
            _this.tableData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](users);
            _this.tableData.sort = _this.sort;
            _this.tableData.paginator = _this.paginator;
            _this.tableData.filterPredicate = function (data, filter) {
                var logicBool1 = data.name.toLowerCase().includes(filter);
                var logicBool2 = data.username.toLowerCase().includes(filter);
                var logicBool6 = data.userLevel.toLowerCase().includes(filter);
                var logicBool7 = data.status.toLowerCase().includes(filter);
                return (logicBool1 || logicBool2 || logicBool6 || logicBool7);
            };
        });
    };
    PrimeAccessComponent.prototype.userTableFilter = function (value) {
        this.tableData.filter = value.trim().toLowerCase();
        if (this.tableData.paginator) {
            this.tableData.paginator.firstPage();
        }
    };
    PrimeAccessComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.userTableFilter(this.searchKey);
    };
    PrimeAccessComponent.prototype.openDialog = function (userId) {
        var _this = this;
        this.dataService.getPrimeAccessByUserId(userId).subscribe(function (scPrimeAccess) {
            var aUserById = _this.primaryData.find(function (user) { return user.userId === userId; });
            var dualData = {
                user: aUserById,
                primeAccess: scPrimeAccess
            };
            var dialogRef = _this.dialog.open(_dialog_dialog_prime_access_dialog_prime_access_component__WEBPACK_IMPORTED_MODULE_6__["DialogPrimeAccessComponent"], {
                width: '450px',
                panelClass: 'userViewModal',
                data: dualData
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    console.log("updating prime access");
                    _this.dataService.setPrimeAccessByUserId(userId, result).subscribe(function (sc) {
                        console.log(sc);
                    });
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], PrimeAccessComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], PrimeAccessComponent.prototype, "sort", void 0);
    PrimeAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prime-access',
            template: __webpack_require__(/*! raw-loader!./prime-access.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/prime-access/prime-access.component.html"),
            styles: [__webpack_require__(/*! ./prime-access.component.scss */ "./src/app/components/prime-access/prime-access.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], PrimeAccessComponent);
    return PrimeAccessComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signInBlock {\n  width: 450px;\n  margin: 80px auto 0 auto;\n  box-sizing: border-box;\n  background-color: white;\n  border: 1px solid #3f51b5;\n}\n.signInBlock .signInHeader {\n  background-color: #3f51b5;\n  color: #FFF;\n  box-sizing: border-box;\n  height: 60px;\n  line-height: 60px;\n  vertical-align: center;\n  padding-left: 16px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.signInBlock .signInContainer {\n  padding: 20px;\n}\n.signInBlock mat-form-field {\n  width: 100%;\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL0Q6XFxQcm9qZWN0c1xcQW5ndWxhclxcc3dhc3NlcnRpdmVGcm9udC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lnbi1pblxcc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25JbkJsb2Nre1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBtYXJnaW46IDgwcHggYXV0byAwIGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM2Y1MWI1O1xyXG5cclxuICAuc2lnbkluSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuc2lnbkluQ29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iLCIuc2lnbkluQmxvY2sge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvIDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZjUxYjU7XG59XG4uc2lnbkluQmxvY2sgLnNpZ25JbkhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zaWduSW5CbG9jayAuc2lnbkluQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5zaWduSW5CbG9jayBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(gs, authService, router, renderer) {
        var _this = this;
        this.gs = gs;
        this.authService = authService;
        this.router = router;
        this.renderer = renderer;
        this.hide = true;
        this.isLoading = false;
        this.signInFailed = false;
        this.loginData = {
            username: '',
            password: ''
        };
        this.matcher = {
            isErrorState: function () {
                return _this.signInFailed; // return boolean status value
            },
            errorMessage: 'Sign in failed due to invalid input!'
        };
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.gs.userData = null;
        var element1 = this.renderer.selectRootElement('#input_1');
        setTimeout(function () { return element1.focus(); }, 200);
    };
    SignInComponent.prototype.focusInput2 = function () {
        var element2 = this.renderer.selectRootElement('#input_2');
        setTimeout(function () { return element2.focus(); }, 0);
    };
    SignInComponent.prototype.signIn = function (pdt) {
        var _this = this;
        this.isLoading = true;
        this.authService.signIn(pdt).subscribe(function (res) {
            if (res.status === 'success') {
                _this.router.navigate(['/home']);
            }
            else {
                _this.isLoading = false;
                _this.signInFailed = true;
                console.error('Sign in failed!');
            }
        });
    };
    SignInComponent.prototype.loadingToggle = function () {
        this.isLoading = !this.isLoading;
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/components/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-add-level/dialog-add-level.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dialog/dialog-add-level/dialog-add-level.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nbutton {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy1hZGQtbGV2ZWwvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxzd2Fzc2VydGl2ZUZyb250L3NyY1xcYXBwXFxkaWFsb2dcXGRpYWxvZy1hZGQtbGV2ZWxcXGRpYWxvZy1hZGQtbGV2ZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpYWxvZy9kaWFsb2ctYWRkLWxldmVsL2RpYWxvZy1hZGQtbGV2ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvZGlhbG9nLWFkZC1sZXZlbC9kaWFsb2ctYWRkLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dialog/dialog-add-level/dialog-add-level.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialog/dialog-add-level/dialog-add-level.component.ts ***!
  \***********************************************************************/
/*! exports provided: DialogAddLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddLevelComponent", function() { return DialogAddLevelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var DialogAddLevelComponent = /** @class */ (function () {
    function DialogAddLevelComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogAddLevelComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    DialogAddLevelComponent.prototype.buildForm = function () {
        this.formData = this.fb.group({
            title: [this.data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            description: [this.data.description]
        });
    };
    DialogAddLevelComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAddLevelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-add-level',
            template: __webpack_require__(/*! raw-loader!./dialog-add-level.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-add-level/dialog-add-level.component.html"),
            styles: [__webpack_require__(/*! ./dialog-add-level.component.scss */ "./src/app/dialog/dialog-add-level/dialog-add-level.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogAddLevelComponent);
    return DialogAddLevelComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2ctY2hhbmdlLWxldmVsLWFwcC1wZXJtaXNzaW9uL2RpYWxvZy1jaGFuZ2UtbGV2ZWwtYXBwLXBlcm1pc3Npb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DialogChangeLevelAppPermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChangeLevelAppPermissionComponent", function() { return DialogChangeLevelAppPermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DialogChangeLevelAppPermissionComponent = /** @class */ (function () {
    function DialogChangeLevelAppPermissionComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogChangeLevelAppPermissionComponent.prototype.ngOnInit = function () {
        this.prmData = this.data;
    };
    DialogChangeLevelAppPermissionComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogChangeLevelAppPermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-change-level-app-permission',
            template: __webpack_require__(/*! raw-loader!./dialog-change-level-app-permission.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.html"),
            styles: [__webpack_require__(/*! ./dialog-change-level-app-permission.component.scss */ "./src/app/dialog/dialog-change-level-app-permission/dialog-change-level-app-permission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], DialogChangeLevelAppPermissionComponent);
    return DialogChangeLevelAppPermissionComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-change-password/dialog-change-password.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dialog/dialog-change-password/dialog-change-password.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy1jaGFuZ2UtcGFzc3dvcmQvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxzd2Fzc2VydGl2ZUZyb250L3NyY1xcYXBwXFxkaWFsb2dcXGRpYWxvZy1jaGFuZ2UtcGFzc3dvcmRcXGRpYWxvZy1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpYWxvZy9kaWFsb2ctY2hhbmdlLXBhc3N3b3JkL2RpYWxvZy1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2ctY2hhbmdlLXBhc3N3b3JkL2RpYWxvZy1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dialog/dialog-change-password/dialog-change-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dialog/dialog-change-password/dialog-change-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DialogChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChangePasswordComponent", function() { return DialogChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogChangePasswordComponent = /** @class */ (function () {
    function DialogChangePasswordComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.hidex = true;
        this.hide = true;
    }
    DialogChangePasswordComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    DialogChangePasswordComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-change-password',
            template: __webpack_require__(/*! raw-loader!./dialog-change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-change-password/dialog-change-password.component.html"),
            styles: [__webpack_require__(/*! ./dialog-change-password.component.scss */ "./src/app/dialog/dialog-change-password/dialog-change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogChangePasswordComponent);
    return DialogChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-prime-access/dialog-prime-access.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dialog/dialog-prime-access/dialog-prime-access.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2ctcHJpbWUtYWNjZXNzL2RpYWxvZy1wcmltZS1hY2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialog/dialog-prime-access/dialog-prime-access.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dialog/dialog-prime-access/dialog-prime-access.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DialogPrimeAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPrimeAccessComponent", function() { return DialogPrimeAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogPrimeAccessComponent = /** @class */ (function () {
    function DialogPrimeAccessComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogPrimeAccessComponent.prototype.ngOnInit = function () {
        this.user = this.data.user;
        this.primeAccess = this.data.primeAccess;
    };
    DialogPrimeAccessComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogPrimeAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-prime-access',
            template: __webpack_require__(/*! raw-loader!./dialog-prime-access.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-prime-access/dialog-prime-access.component.html"),
            styles: [__webpack_require__(/*! ./dialog-prime-access.component.scss */ "./src/app/dialog/dialog-prime-access/dialog-prime-access.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogPrimeAccessComponent);
    return DialogPrimeAccessComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-user-view/dialog-user-view.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dialog/dialog-user-view/dialog-user-view.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userViewModal {\n  background-color: red;\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy11c2VyLXZpZXcvRDpcXFByb2plY3RzXFxBbmd1bGFyXFxzd2Fzc2VydGl2ZUZyb250L3NyY1xcYXBwXFxkaWFsb2dcXGRpYWxvZy11c2VyLXZpZXdcXGRpYWxvZy11c2VyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpYWxvZy9kaWFsb2ctdXNlci12aWV3L2RpYWxvZy11c2VyLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2ctdXNlci12aWV3L2RpYWxvZy11c2VyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlclZpZXdNb2RhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbiIsIi51c2VyVmlld01vZGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB3aWR0aDogNjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dialog/dialog-user-view/dialog-user-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialog/dialog-user-view/dialog-user-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: DialogUserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserViewComponent", function() { return DialogUserViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogUserViewComponent = /** @class */ (function () {
    function DialogUserViewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.outputData = 'output data';
    }
    DialogUserViewComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    DialogUserViewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogUserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-user-view',
            template: __webpack_require__(/*! raw-loader!./dialog-user-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog-user-view/dialog-user-view.component.html"),
            styles: [__webpack_require__(/*! ./dialog-user-view.component.scss */ "./src/app/dialog/dialog-user-view/dialog-user-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogUserViewComponent);
    return DialogUserViewComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(gs, http, router) {
        this.gs = gs;
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.signIn = function (pdt) {
        return this.http.post(this.gs.apiServerStaticUrl + 'auth/in', pdt);
    };
    AuthService.prototype.signOut = function () {
        return this.http.get(this.gs.apiServerStaticUrl + 'auth/out');
    };
    AuthService.prototype.isSignedIn = function () {
        var _this = this;
        return this.http.get(this.gs.apiServerStaticUrl + 'auth/guard').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (sc) {
            console.warn('user verified as authentic!');
            return sc;
        }, function (fl) {
            return false;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/signin']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthService.prototype.getUserData = function () {
        var _this = this;
        return this.http.get(this.gs.apiServerStaticUrl + 'auth/user').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('user authentication denied!');
                _this.router.navigate(['/signin']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/custom.validator.ts":
/*!**********************************************!*\
  !*** ./src/app/services/custom.validator.ts ***!
  \**********************************************/
/*! exports provided: CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);

var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    CustomValidator.uniqueUsername = function (dataService) {
        return function (control) {
            return dataService.isUsernameAvailable(control.value).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(500), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (sc) {
                if (sc === true) {
                    return { uniqueUsername: true };
                }
                else {
                    return null;
                }
            }, function (fl) {
                console.log(fl);
                return null;
            }));
        };
    };
    CustomValidator.uniqueBaseName = function (dataService) {
        return function (control) {
            return dataService.isAppBaseNameAvailable(control.value).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(500), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (sc) {
                if (sc === true) {
                    return { uniqueBaseName: true };
                }
                else {
                    return null;
                }
            }, function (fl) {
                console.log(fl);
                return null;
            }));
        };
    };
    return CustomValidator;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);







var DataService = /** @class */ (function () {
    function DataService(gs, router, http) {
        this.gs = gs;
        this.router = router;
        this.http = http;
    }
    DataService.prototype.getAllUsers = function () {
        var _this = this;
        return this.http.get(this.gs.apiServerStaticUrl + 'base/user').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/badrequest']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    DataService.prototype.getUserById = function (id) {
        var _this = this;
        return this.http.get(this.gs.apiServerStaticUrl + 'base/user&id=' + id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/badrequest']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    DataService.prototype.getPrimeAccessByUserId = function (id) {
        var _this = this;
        return this.http.get(this.gs.apiServerStaticUrl + 'base/primeaccess&id=' + id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/badrequest']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    DataService.prototype.setPrimeAccessByUserId = function (id, accessData) {
        var _this = this;
        return this.http.put(this.gs.apiServerStaticUrl + 'base/primeaccess&id=' + id, accessData).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/badrequest']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    DataService.prototype.updateUser = function (user) {
        var _this = this;
        return this.http.put(this.gs.apiServerStaticUrl + 'base/user', user).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/badrequest']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    DataService.prototype.getAllApps = function () {
        var _this = this;
        return this.http.get(this.gs.apiServerStaticUrl + 'base/app').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/badrequest']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    DataService.prototype.getAppById = function (id) {
        var _this = this;
        return this.http.get(this.gs.apiServerStaticUrl + 'base/app&id=' + id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            if (err.status === 401) {
                console.error('authentication denied!');
                _this.router.navigate(['/badrequest']);
            }
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    DataService.prototype.updateApp = function (appData) {
        return this.http.put(this.gs.apiServerStaticUrl + 'base/app', appData);
    };
    DataService.prototype.createNewUser = function (userData) {
        return this.http.post(this.gs.apiServerStaticUrl + 'base/user', userData);
    };
    DataService.prototype.getAllLevels = function () {
        return this.http.get(this.gs.apiServerStaticUrl + 'base/level');
    };
    DataService.prototype.createNewLevel = function (levelData) {
        return this.http.post(this.gs.apiServerStaticUrl + 'base/level', levelData);
    };
    DataService.prototype.editLevel = function (levelData) {
        return this.http.put(this.gs.apiServerStaticUrl + 'base/level', levelData);
    };
    DataService.prototype.getLevelApps = function (levelId) {
        return this.http.get(this.gs.apiServerStaticUrl + 'base/levelapp&id=' + levelId);
    };
    DataService.prototype.addAppToLevel = function (pdt) {
        return this.http.post(this.gs.apiServerStaticUrl + 'base/levelapp', pdt);
    };
    DataService.prototype.removeAppFromLevel = function (id) {
        return this.http.delete(this.gs.apiServerStaticUrl + 'base/levelapp&id=' + id);
    };
    DataService.prototype.getLevelAppPermissionData = function (id) {
        return this.http.get(this.gs.apiServerStaticUrl + 'base/permission&id=' + id);
    };
    DataService.prototype.udateLevelAppPermissionData = function (pdt) {
        return this.http.put(this.gs.apiServerStaticUrl + 'base/permission', pdt);
    };
    DataService.prototype.isUsernameAvailable = function (un) {
        var pdt = {
            username: un
        };
        return this.http.post(this.gs.apiServerStaticUrl + 'check/username', pdt);
    };
    DataService.prototype.isAppBaseNameAvailable = function (un) {
        var pdt = {
            basename: un
        };
        return this.http.post(this.gs.apiServerStaticUrl + 'check/appbasename', pdt);
    };
    DataService.prototype.createNewApp = function (appData) {
        return this.http.post(this.gs.apiServerStaticUrl + 'base/app', appData);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.apiServerStaticUrl = 'http://127.0.0.1/swassertive/?api=';
    }
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular\swassertiveFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map