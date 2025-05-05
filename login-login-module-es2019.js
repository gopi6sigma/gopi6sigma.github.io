(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/forgot-psw/forgot-psw.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/forgot-psw/forgot-psw.component.ts ***!
  \**********************************************************/
/*! exports provided: ForgotPswComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPswComponent", function() { return ForgotPswComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/numbers-only.directive */ "./src/app/directives/numbers-only.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ForgotPswComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPswComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Valid Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ForgotPswComponent {
    constructor(apiService, fb, router) {
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.formSubmitted = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.forgotForm = this.fb.group({
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    submit() {
        try {
            this.formSubmitted = true;
            if (!this.forgotForm.value.phoneNumber || this.forgotForm.value.phoneNumber.length < 10) {
                return;
            }
            this.apiService.showLoader.next(true);
            this.apiService.forgotPsw(this.forgotForm.value.phoneNumber).subscribe((res) => {
                if (res && typeof res === "string") {
                    const response = JSON.parse(res);
                    if (response && response.message) {
                        console.log(response.message);
                        this.apiService.showLoader.next(false);
                        this.apiService.genericMessage(response.message, 'success');
                        this.router.navigate(['/login']);
                        // this.router.navigate(['/forgot-psw-response']);
                        // this.router.navigate(['/forgot-psw-response', { response: JSON.stringify(response.message) }]);
                    }
                }
            }, error => {
                this.apiService.showLoader.next(false);
                if (error.error && error.error.message) {
                    this.apiService.genericMessage(error.error.message || 'something went wrong', 'error');
                }
                else {
                    this.apiService.genericMessage('Did not find any student with this mobile number', 'error');
                }
                console.log(error);
            });
        }
        catch (e) {
            console.warn(e);
        }
    }
}
ForgotPswComponent.ɵfac = function ForgotPswComponent_Factory(t) { return new (t || ForgotPswComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgotPswComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPswComponent, selectors: [["app-forgot-psw"]], decls: 27, vars: 3, consts: [[1, "forgot-psw"], [1, "forgot-psw__overlay", "row", "m-0"], [1, "col-md-6", "text-sm-center", "d-flex", "forgot-psw__left", "animated", "bounceInLeft"], [1, "white-color"], [1, "primary-color"], [1, "col-md-6", "d-flex", "forgot-psw__right"], [3, "formGroup", "submit"], [1, "forgot-psw__form", "card", "m-r-32", "animated", "bounceInDown"], [1, "forgot-psw__header"], [1, "forgot-psw__form-group"], ["type", "text", "numbersOnly", "", "maxlength", "10", "minlength", "10", "formControlName", "phoneNumber", "placeholder", "Enter your mobile number", 1, "form-control"], [1, "f-14", "error-message"], [4, "ngIf"], [1, "m-t-28", "text-center"], ["type", "submit", 1, "my-btn", "my-btn-primary", "w-100"], [1, "text-center", "m-t-20", "f-l", "pointer"], ["routerLink", "/login"]], template: function ForgotPswComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "mobile number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to retrieve username/password! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPswComponent_Template_form_submit_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPswComponent_span_18_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgotPswComponent_span_19_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = (ctx.forgotForm.get("phoneNumber").touched || ctx.formSubmitted) && (((tmp_2_0 = ctx.forgotForm.get("phoneNumber")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.length) > 0 && ((tmp_2_0 = ctx.forgotForm.get("phoneNumber")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.length) < 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.forgotForm.get("phoneNumber").touched || ctx.formSubmitted) && ctx.forgotForm.get("phoneNumber").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__["NumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".forgot-psw[_ngcontent-%COMP%] {\n  background-image: url(\"https://drive.google.com/thumbnail?id=10xJiS27dxcoss8XesBhNBQ3O9rElhDnd\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  background-position: center;\n}\n.forgot-psw__overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n.forgot-psw__left[_ngcontent-%COMP%], .forgot-psw__right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.forgot-psw__sub-header[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n}\n.forgot-psw__form[_ngcontent-%COMP%] {\n  color: #000;\n  width: 25rem;\n  padding: 1.5rem;\n}\n.forgot-psw__forgot-sec[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n  font-size: 0.875rem;\n}\n.forgot-psw__form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.forgot-psw__form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n  font-size: 0.875rem;\n}\n.forgot-psw__form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n.forgot-psw[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-family: \"myFontsLight\";\n  min-height: 2.8125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbG9naW4vZm9yZ290LXBzdy9mb3Jnb3QtcHN3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9mb3Jnb3QtcHN3L2ZvcmdvdC1wc3cuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3JhdmFuaWJhbG5lL0RvY3VtZW50cy9zYWRpc2hhL210dC11aS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ssZ0dBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0FMO0FERUk7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdFZEE7QURjUjtBREVJO0VBRUkseUJBQUE7QUNEUjtBREdJO0VBQ0ksMkJBQUE7QUNEUjtBREdJO0VBQ0ksV0V2QkE7RUZ3QkEsWUFBQTtFQUNBLGVBQUE7QUNEUjtBREdJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER0k7RUFLSSxtQkFBQTtBQ0xSO0FEQ1E7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FDQ1o7QURFUTtFQUNJLG9CQUFBO0FDQVo7QURHSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vZm9yZ290LXBzdy9mb3Jnb3QtcHN3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcbi5mb3Jnb3QtcHN3IHsgICBcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdGh1bWJuYWlsP2lkPTEweEppUzI3ZHhjb3NzOFhlc0JoTkJRM085ckVsaERuZCcpO1xuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgJl9fb3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICBcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9IFxuICAgICZfX2xlZnQsIFxuICAgICZfX3JpZ2h0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gICAgJl9fc3ViLWhlYWRlciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbXlGb250c0xpZ2h0JztcbiAgICB9XG4gICAgJl9fZm9ybSB7XG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtOyAgICBcbiAgICB9XG4gICAgJl9fZm9yZ290LXNlYyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbXlGb250c0xpZ2h0JztcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9IFxuICAgICZfX2Zvcm0tZ3JvdXAge1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ215Rm9udHNMaWdodCc7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBmb250LWZhbWlseTogJ215Rm9udHNMaWdodCc7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIuODEyNXJlbTtcbiAgICB9XG59XG4iLCIuZm9yZ290LXBzdyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS90aHVtYm5haWw/aWQ9MTB4SmlTMjdkeGNvc3M4WGVzQmhOQlEzTzlyRWxoRG5kXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmZvcmdvdC1wc3dfX292ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mb3Jnb3QtcHN3X19sZWZ0LCAuZm9yZ290LXBzd19fcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZvcmdvdC1wc3dfX3N1Yi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJteUZvbnRzTGlnaHRcIjtcbn1cbi5mb3Jnb3QtcHN3X19mb3JtIHtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAyNXJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLmZvcmdvdC1wc3dfX2ZvcmdvdC1zZWMge1xuICBmb250LWZhbWlseTogXCJteUZvbnRzTGlnaHRcIjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5mb3Jnb3QtcHN3X19mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5mb3Jnb3QtcHN3X19mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwibXlGb250c0xpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uZm9yZ290LXBzd19fZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG4uZm9yZ290LXBzdyBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIm15Rm9udHNMaWdodFwiO1xuICBtaW4taGVpZ2h0OiAyLjgxMjVyZW07XG59IiwiJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuJHByaW1hcnlDb2xvcjogIzZlNjNmZjtcbiRicmFuZFByaW1hcnlDb2xvcjogIzJhMGEwYTtcbiR3aGl0ZVNtb2tlRGFyazojYWRhZGFkO1xuJHdoaXRlU21va2U6I0YyRjJGMjtcbiRFZ3lwdGlhbkJsdWU6IzE1NTU4ZDBkO1xuJERvZGdlckJsdWU6IzIxOTZGMztcbiR3aGl0ZVNtb2tlbGlnaHQ6I2RhZGFkYTtcbiRicmFuZFNlY29uZGFyeUNvbG9yOiAjZjIxYjNmO1xuJHByaW1hcnlIb3ZlcjogIzlhNTVmZjFhO1xuJG1haW5CZ0NvbG9yOiAjZjJlZGYzO1xuJHNob3dDb2xvcjogIzAwMWY0MztcbiRlcnJvckNvbG9yOiAjZGMzNTQ1O1xuJGluZGlnbzojOTIzOGFlO1xuJFBhbmFjaGUtZ3JlZW46I0VFRkFFRjtcbiRQdXJwdWwtd2hpdGU6I0U0RERFNjtcbiRhbGljZS1ibHVlOiAjRTlGN0ZEO1xuJGZsb3JhbC13aGl0ZTojRkZGN0VBO1xuJGRvZGdlci1ibHVlOiAjMTk5MUVCO1xuJHdhcm5pbmctY29sb3I6I0Y3OTgxQztcbiRDaGFibGlzLXJlZDojRkVFQkVCO1xuJGVycm9yLWNvbG9yOiAjRUQxQzI0O1xuJHN1Y2Nlc3MtY29sOiAjMUJCOTM0O1xuJGRhcmstYmctY29sb3I6ICMxOTFjMjQ7XG4kYmdHcmFkaWVudENvbG9yOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZlNjNmZiAwJSwgIzk3MzJhMyAxMDAlKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPswComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-psw',
                templateUrl: './forgot-psw.component.html',
                styleUrls: ['./forgot-psw.component.scss']
            }]
    }], function () { return [{ type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/login/sign-up/sign-up.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _forgot_psw_forgot_psw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-psw/forgot-psw.component */ "./src/app/login/forgot-psw/forgot-psw.component.ts");










const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
    },
    {
        path: 'forgot-psw',
        component: _forgot_psw_forgot_psw_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPswComponent"]
    }
];
class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
        _forgot_psw_forgot_psw_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPswComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                    _forgot_psw_forgot_psw_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPswComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGN IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGN IN...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(apiService, fb, router) {
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.isAPILoading = false;
        localStorage.clear();
        this.apiService.setToken("");
    }
    ngOnInit() {
        this.initForm();
    }
    login() {
        try {
            localStorage.clear();
            this.apiService.showLoader.next(true);
            this.apiService.login(this.loginForm.value).subscribe((response) => {
                this.apiService.showLoader.next(false);
                if (response.status && response.status === 200) {
                    const body = JSON.parse(response.body) || {};
                    const role = body.roles && body.roles.assignedRoles ? body.roles.assignedRoles : '';
                    const allRoles = body.roles && body.roles.allRoles && typeof body.roles.allRoles === 'string' ? JSON.parse(body.roles.allRoles || '[]') : [];
                    localStorage.setItem("allRoles", JSON.stringify(allRoles));
                    this.apiService.setAllRole(allRoles);
                    localStorage.setItem("adminUser", response.body);
                    localStorage.setItem("userName", body.roles.userName);
                    const token = response.headers.get("auth_token");
                    localStorage.setItem("auth_token", token);
                    localStorage.setItem("role", role);
                    this.apiService.setUserDetails(body);
                    this.apiService.setToken(token);
                    this.apiService.setRole(role);
                    if (role.indexOf("STUDENT") > -1) {
                        this.router.navigate(["./student"]);
                    }
                    else {
                        this.router.navigate(["/admin"]);
                    }
                }
                if (response && typeof response === "string") {
                    const resp = JSON.parse(response);
                    if (resp && resp.message) {
                        this.apiService.genericMessage(resp.message, "success");
                        this.login();
                    }
                }
            }, (error) => {
                this.apiService.showLoader.next(false);
                if (error.error && error.error.message) {
                    this.apiService.genericMessage(error.error.message || "something went wrong", "error");
                }
                console.log(error);
            });
        }
        catch (e) {
            console.warn(e);
        }
    }
    initForm() {
        this.loginForm = this.fb.group({
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 4, consts: [[1, "login-page"], [1, "login-page__overlay", "row", "m-0"], [1, "login-page__logo"], [1, "login-page__text"], ["href", "http://sadisha.org/", 2, "text-decoration", "underline"], ["src", "assets/images/sadisha_logo.png", 1, "w-100"], [1, "col-md-6", "text-sm-center", "d-flex", "login-page__left", "animated", "bounceInLeft"], [1, "col-md-6", "d-flex", "login-page__right"], [3, "formGroup", "submit"], [1, "login-page__form", "card", "m-r-32", "animated", "bounceInDown"], [1, "login-page__sub-header"], [1, "login-page__form-group"], ["type", "text", "formControlName", "userName", "placeholder", "Enter your user name", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "m-t-28", "text-center"], ["type", "submit", 1, "my-btn", "my-btn-primary", "w-100", 3, "disabled"], [4, "ngIf"], [1, "text-center", "m-t-20", "f-l", "pointer"], ["routerLink", "/login/forgot-psw"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2190 Back to Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_9_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login in to continue.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_span_23_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_span_24_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Forgot Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isAPILoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAPILoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAPILoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".login-page[_ngcontent-%COMP%] {\n  background-image: url(\"https://drive.google.com/thumbnail?id=10xJiS27dxcoss8XesBhNBQ3O9rElhDnd\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  background-position: center;\n}\n.login-page__logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  border-radius: 10px;\n  max-width: 130px;\n}\n.login-page__text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding-bottom: 20px;\n}\n.login-page__overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n.login-page__left[_ngcontent-%COMP%], .login-page__right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.login-page__sub-header[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n}\n.login-page__form[_ngcontent-%COMP%] {\n  color: #000;\n  width: 25rem;\n  padding: 1.5rem;\n}\n.login-page__forgot-sec[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n  font-size: 0.875rem;\n}\n.login-page__form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.login-page__form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n  font-size: 0.875rem;\n}\n.login-page__form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n.login-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-family: \"myFontsLight\";\n  min-height: 2.8125rem;\n}\n@media (max-width: 768px) {\n  .login-page__right[_ngcontent-%COMP%] {\n    justify-content: center;\n    \n  }\n  .login-page__form[_ngcontent-%COMP%] {\n    width: 100%;\n    \n  }\n  .login-page__form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n    \n  }\n  .login-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    min-height: 2.5rem;\n    \n  }\n  .login-page[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NyYXZhbmliYWxuZS9Eb2N1bWVudHMvc2FkaXNoYS9tdHQtdWkvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGdHQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNGSjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRElJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDRk47QURJSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0UzQkE7QUR5QlI7QURLSTtFQUVJLHlCQUFBO0FDSlI7QURPSTtFQUNJLDJCQUFBO0FDTFI7QURRSTtFQUNJLFdFdkNBO0VGd0NBLFlBQUE7RUFDQSxlQUFBO0FDTlI7QURTSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUNQUjtBRFVJO0VBTUksbUJBQUE7QUNiUjtBRFFRO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQ05aO0FEV1E7RUFDSSxvQkFBQTtBQ1RaO0FEYUk7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNYUjtBRGNJO0VBQ0k7SUFDRSx1QkFBQTtJQUF5QixxQ0FBQTtFQ1hqQztFRGNNO0lBQ0UsV0FBQTtJQUFhLDhDQUFBO0VDWHJCO0VEY007SUFDRSxxQkFBQTtJQUF1QixrQ0FBQTtFQ1gvQjtFRGNNO0lBQ0Usa0JBQUE7SUFBb0IsMENBQUE7RUNYNUI7RURjTTtJQUNJLGtCQUFBO0lBQW9CLGdDQUFBO0VDWDlCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5cbi5sb2dpbi1wYWdlIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWFnZXMva2VsbHktc2lra2VtYS1VN1dLWVBLT3lIZy11bnNwbGFzaC5qcGcnKSA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdGh1bWJuYWlsP2lkPTEweEppUzI3ZHhjb3NzOFhlc0JoTkJRM085ckVsaERuZCcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAmX19sb2dvIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgfVxuICAgICZfX3RleHQge1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgICZfX292ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cblxuICAgICZfX2xlZnQsXG4gICAgJl9fcmlnaHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgICZfX3N1Yi1oZWFkZXIge1xuICAgICAgICBmb250LWZhbWlseTogJ215Rm9udHNMaWdodCc7XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cblxuICAgICZfX2ZvcmdvdC1zZWMge1xuICAgICAgICBmb250LWZhbWlseTogJ215Rm9udHNMaWdodCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgfVxuXG4gICAgJl9fZm9ybS1ncm91cCB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbXlGb250c0xpZ2h0JztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbXlGb250c0xpZ2h0JztcbiAgICAgICAgbWluLWhlaWdodDogMi44MTI1cmVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAmX19yaWdodCB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciB0aGUgZm9ybSBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgIH1cblxuICAgICAgICAmX19mb3JtIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTsgLyogTWFrZSB0aGUgZm9ybSBmdWxsIHdpZHRoIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Zvcm0tZ3JvdXAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgLyogUmVkdWNlIG1hcmdpbiBmb3IgZm9ybSBncm91cHMgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyLjVyZW07IC8qIEFkanVzdCBpbnB1dCBoZWlnaHQgZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBQcmV2ZW50IGhvcml6b250YWwgb3ZlcmZsb3cgKi9cbiAgICAgICAgfVxuXG4gICAgICB9XG59XG4iLCIubG9naW4tcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS90aHVtYm5haWw/aWQ9MTB4SmlTMjdkeGNvc3M4WGVzQmhOQlEzTzlyRWxoRG5kXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmxvZ2luLXBhZ2VfX2xvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbn1cbi5sb2dpbi1wYWdlX190ZXh0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5sb2dpbi1wYWdlX19vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4ubG9naW4tcGFnZV9fbGVmdCwgLmxvZ2luLXBhZ2VfX3JpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5sb2dpbi1wYWdlX19zdWItaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwibXlGb250c0xpZ2h0XCI7XG59XG4ubG9naW4tcGFnZV9fZm9ybSB7XG4gIGNvbG9yOiAjMDAwO1xuICB3aWR0aDogMjVyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5sb2dpbi1wYWdlX19mb3Jnb3Qtc2VjIHtcbiAgZm9udC1mYW1pbHk6IFwibXlGb250c0xpZ2h0XCI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4ubG9naW4tcGFnZV9fZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubG9naW4tcGFnZV9fZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIm15Rm9udHNMaWdodFwiO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLmxvZ2luLXBhZ2VfX2Zvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuLmxvZ2luLXBhZ2UgaW5wdXQge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LWZhbWlseTogXCJteUZvbnRzTGlnaHRcIjtcbiAgbWluLWhlaWdodDogMi44MTI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dpbi1wYWdlX19yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogQ2VudGVyIHRoZSBmb3JtIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgfVxuICAubG9naW4tcGFnZV9fZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogTWFrZSB0aGUgZm9ybSBmdWxsIHdpZHRoIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgfVxuICAubG9naW4tcGFnZV9fZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIC8qIFJlZHVjZSBtYXJnaW4gZm9yIGZvcm0gZ3JvdXBzICovXG4gIH1cbiAgLmxvZ2luLXBhZ2UgaW5wdXQge1xuICAgIG1pbi1oZWlnaHQ6IDIuNXJlbTtcbiAgICAvKiBBZGp1c3QgaW5wdXQgaGVpZ2h0IGZvciBzbWFsbCBzY3JlZW5zICovXG4gIH1cbiAgLmxvZ2luLXBhZ2UgYm9keSB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8qIFByZXZlbnQgaG9yaXpvbnRhbCBvdmVyZmxvdyAqL1xuICB9XG59IiwiJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuJHByaW1hcnlDb2xvcjogIzZlNjNmZjtcbiRicmFuZFByaW1hcnlDb2xvcjogIzJhMGEwYTtcbiR3aGl0ZVNtb2tlRGFyazojYWRhZGFkO1xuJHdoaXRlU21va2U6I0YyRjJGMjtcbiRFZ3lwdGlhbkJsdWU6IzE1NTU4ZDBkO1xuJERvZGdlckJsdWU6IzIxOTZGMztcbiR3aGl0ZVNtb2tlbGlnaHQ6I2RhZGFkYTtcbiRicmFuZFNlY29uZGFyeUNvbG9yOiAjZjIxYjNmO1xuJHByaW1hcnlIb3ZlcjogIzlhNTVmZjFhO1xuJG1haW5CZ0NvbG9yOiAjZjJlZGYzO1xuJHNob3dDb2xvcjogIzAwMWY0MztcbiRlcnJvckNvbG9yOiAjZGMzNTQ1O1xuJGluZGlnbzojOTIzOGFlO1xuJFBhbmFjaGUtZ3JlZW46I0VFRkFFRjtcbiRQdXJwdWwtd2hpdGU6I0U0RERFNjtcbiRhbGljZS1ibHVlOiAjRTlGN0ZEO1xuJGZsb3JhbC13aGl0ZTojRkZGN0VBO1xuJGRvZGdlci1ibHVlOiAjMTk5MUVCO1xuJHdhcm5pbmctY29sb3I6I0Y3OTgxQztcbiRDaGFibGlzLXJlZDojRkVFQkVCO1xuJGVycm9yLWNvbG9yOiAjRUQxQzI0O1xuJHN1Y2Nlc3MtY29sOiAjMUJCOTM0O1xuJGRhcmstYmctY29sb3I6ICMxOTFjMjQ7XG4kYmdHcmFkaWVudENvbG9yOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZlNjNmZiAwJSwgIzk3MzJhMyAxMDAlKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.scss"],
            }]
    }], function () { return [{ type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class SignUpComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.initForm();
    }
    login() {
        console.log('loggin in', this.signupForm.value);
    }
    initForm() {
        this.signupForm = this.fb.group({
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 47, vars: 1, consts: [[1, "signup-page"], [1, "signup-page__overlay", "row", "m-0"], [1, "col-md-6", "text-sm-center", "d-flex", "signup-page__left", "animated", "bounceInLeft"], [1, "white-color"], [1, "primary-color"], [1, "col-md-6", "d-flex", "signup-page__right"], [3, "formGroup"], [1, "signup-page__form", "card", "m-r-32", "animated", "bounceInDown"], ["src", "/assets/images/sadisha.png"], [1, "signup-page__header"], [1, "signup-page__sub-header"], [1, "signup-page__form-group"], ["type", "text", "formControlName", "userName", "placeholder", "Enter your user name", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Enter your Email ID", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm your password", 1, "form-control"], [1, "m-t-28", "text-center"], ["type", "button", 1, "my-btn", "my-btn-primary", "w-100", 3, "click"], [1, "row", "m-t-20", "signup-page__forgot-sec", "no-gutters"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "termsAndCondition", 1, "custom-control-input"], ["for", "termsAndCondition", 1, "custom-control-label"], ["routerLink", "/terms-and-conditions"], [1, "text-center", "m-t-20", "f-l"], ["routerLink", "/"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello! Doctor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New here?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Signing up is easy. It only takes a few step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_33_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "I agree to all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".signup-page[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/mobile-login.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.signup-page__overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n.signup-page__left[_ngcontent-%COMP%], .signup-page__right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.signup-page__sub-header[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n}\n.signup-page__form[_ngcontent-%COMP%] {\n  color: #000;\n  width: 25rem;\n  padding: 1.5rem;\n}\n.signup-page__forgot-sec[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n  font-size: 0.875rem;\n}\n.signup-page__form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.signup-page__form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"myFontsLight\";\n  font-size: 0.875rem;\n}\n.signup-page__form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n.signup-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-family: \"myFontsLight\";\n  min-height: 2.8125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbG9naW4vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3JhdmFuaWJhbG5lL0RvY3VtZW50cy9zYWRpc2hhL210dC11aS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0RBQUE7RUFDQyw0QkFBQTtFQUNBLHNCQUFBO0FDQUw7QURDSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0VYQTtBRFlSO0FEQ0k7RUFFSSx5QkFBQTtBQ0FSO0FERUk7RUFDSSwyQkFBQTtBQ0FSO0FERUk7RUFDSSxXRXBCQTtFRnFCQSxZQUFBO0VBQ0EsZUFBQTtBQ0FSO0FERUk7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUtJLG1CQUFBO0FDSlI7QURBUTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUNFWjtBRENRO0VBQ0ksb0JBQUE7QUNDWjtBREVJO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuLnNpZ251cC1wYWdlIHsgICBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWFnZXMvbW9iaWxlLWxvZ2luLmpwZycpIDtcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAmX19vdmVybGF5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgIFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH0gXG4gICAgJl9fbGVmdCwgXG4gICAgJl9fcmlnaHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAmX19zdWItaGVhZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdteUZvbnRzTGlnaHQnO1xuICAgIH1cbiAgICAmX19mb3JtIHtcbiAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07ICAgIFxuICAgIH1cbiAgICAmX19mb3Jnb3Qtc2VjIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdteUZvbnRzTGlnaHQnO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIH0gXG4gICAgJl9fZm9ybS1ncm91cCB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbXlGb250c0xpZ2h0JztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbXlGb250c0xpZ2h0JztcbiAgICAgICAgbWluLWhlaWdodDogMi44MTI1cmVtO1xuICAgIH1cbn1cbiIsIi5zaWdudXAtcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21vYmlsZS1sb2dpbi5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2lnbnVwLXBhZ2VfX292ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zaWdudXAtcGFnZV9fbGVmdCwgLnNpZ251cC1wYWdlX19yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc2lnbnVwLXBhZ2VfX3N1Yi1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJteUZvbnRzTGlnaHRcIjtcbn1cbi5zaWdudXAtcGFnZV9fZm9ybSB7XG4gIGNvbG9yOiAjMDAwO1xuICB3aWR0aDogMjVyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5zaWdudXAtcGFnZV9fZm9yZ290LXNlYyB7XG4gIGZvbnQtZmFtaWx5OiBcIm15Rm9udHNMaWdodFwiO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLnNpZ251cC1wYWdlX19mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5zaWdudXAtcGFnZV9fZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIm15Rm9udHNMaWdodFwiO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLnNpZ251cC1wYWdlX19mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cbi5zaWdudXAtcGFnZSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIm15Rm9udHNMaWdodFwiO1xuICBtaW4taGVpZ2h0OiAyLjgxMjVyZW07XG59IiwiJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuJHByaW1hcnlDb2xvcjogIzZlNjNmZjtcbiRicmFuZFByaW1hcnlDb2xvcjogIzJhMGEwYTtcbiR3aGl0ZVNtb2tlRGFyazojYWRhZGFkO1xuJHdoaXRlU21va2U6I0YyRjJGMjtcbiRFZ3lwdGlhbkJsdWU6IzE1NTU4ZDBkO1xuJERvZGdlckJsdWU6IzIxOTZGMztcbiR3aGl0ZVNtb2tlbGlnaHQ6I2RhZGFkYTtcbiRicmFuZFNlY29uZGFyeUNvbG9yOiAjZjIxYjNmO1xuJHByaW1hcnlIb3ZlcjogIzlhNTVmZjFhO1xuJG1haW5CZ0NvbG9yOiAjZjJlZGYzO1xuJHNob3dDb2xvcjogIzAwMWY0MztcbiRlcnJvckNvbG9yOiAjZGMzNTQ1O1xuJGluZGlnbzojOTIzOGFlO1xuJFBhbmFjaGUtZ3JlZW46I0VFRkFFRjtcbiRQdXJwdWwtd2hpdGU6I0U0RERFNjtcbiRhbGljZS1ibHVlOiAjRTlGN0ZEO1xuJGZsb3JhbC13aGl0ZTojRkZGN0VBO1xuJGRvZGdlci1ibHVlOiAjMTk5MUVCO1xuJHdhcm5pbmctY29sb3I6I0Y3OTgxQztcbiRDaGFibGlzLXJlZDojRkVFQkVCO1xuJGVycm9yLWNvbG9yOiAjRUQxQzI0O1xuJHN1Y2Nlc3MtY29sOiAjMUJCOTM0O1xuJGRhcmstYmctY29sb3I6ICMxOTFjMjQ7XG4kYmdHcmFkaWVudENvbG9yOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZlNjNmZiAwJSwgIzk3MzJhMyAxMDAlKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2019.js.map