(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paper-upload-paper-upload-module"],{

/***/ "./src/app/paper-upload/new-image-upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/paper-upload/new-image-upload.component.ts ***!
  \************************************************************/
/*! exports provided: NewImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewImageUploadComponent", function() { return NewImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_image_upload_image_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/image-upload/image-upload.service */ "./src/app/image-upload/image-upload.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function NewImageUploadComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status Here: ", ctx_r0.status, "");
} }
function NewImageUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "webcam", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function NewImageUploadComponent_div_8_Template_webcam_imageCapture_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.snapshot($event); })("initError", function NewImageUploadComponent_div_8_Template_webcam_initError_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleWebcamInitError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.captureImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trigger", ctx_r1.$trigger)("allowCameraSwitch", true)("height", 480)("width", 640)("imageQuality", 1)("videoOptions", ctx_r1.videoOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.captureBtnLable);
} }
function NewImageUploadComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.webcamPreviewImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewImageUploadComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.sendDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewImageUploadComponent {
    constructor(fb, cd, apiService, router, imageUploadService) {
        this.fb = fb;
        this.cd = cd;
        this.apiService = apiService;
        this.router = router;
        this.imageUploadService = imageUploadService;
        this.labelsList = [];
        this.serverResponce = "";
        this.isResponceSuccess = false;
        this.showLeftDiv = true;
        this.paperImage = "";
        this.maxDate = new Date().toLocaleDateString();
        this.formSubmitted = false;
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.errors = [];
        this.previewImage = "https://h5p.org/sites/default/files/styles/medium-logo/public/logos/drag-and-drop-icon.png?itok=0dFV3ej6";
        this.url = "https://h5p.org/sites/default/files/styles/medium-logo/public/logos/drag-and-drop-icon.png?itok=0dFV3ej6";
        this.stream = null;
        this.status = null;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.webcamPreviewImage = '';
        this.webcamImg = null;
        this.captureBtnLable = "";
        this.facingMode = 'environment';
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_1__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }
    hideAlert() {
        this.showLeftDiv = true;
        this.webcamPreviewImage = "";
    }
    sendDetails() {
        try {
            if (this.paperImage) {
                let data = new FormData();
                data.append("answerSheet", this.answerSheet);
                this.apiService.showLoader.next(true);
                this.apiService.addPaperImage(data).subscribe((res) => {
                    if (res && typeof res === "string") {
                        const response = JSON.parse(res);
                        if (response && response.message) {
                            this.apiService.genericMessage(response.message, "success");
                            this.apiService.showLoader.next(false);
                            this.showLeftDiv = true;
                            this.webcamPreviewImage = "";
                        }
                    }
                }, (err) => {
                    this.apiService.showLoader.next(false);
                    if (err.status === 401) {
                        this.router;
                        this.router.navigate(["/login"]);
                        return;
                    }
                    if (err.error) {
                        console.log(err.error);
                        const serverError = typeof err.error === "string" ? JSON.parse(err.error) : {};
                        this.apiService.genericMessage(serverError.error || "something went wrong", "error");
                    }
                });
            }
        }
        catch (e) {
            console.warn(e);
        }
    }
    get videoOptions() {
        const result = {};
        if (this.facingMode && this.facingMode !== '') {
            result.facingMode = { ideal: this.facingMode };
        }
        return result;
    }
    // webcam trigger
    get $trigger() {
        return this.trigger.asObservable();
    }
    snapshot(event) {
        console.log("snapshot", event);
        this.webcamPreviewImage = event.imageAsDataUrl;
        this.paperImage = event.imageAsDataUrl;
        this.captureBtnLable = "Retake Image";
        const arr = event.imageAsDataUrl.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const file = new File([u8arr], "AnswerSheet", { type: "JPEG" });
        console.log(file);
        this.answerSheet = file;
    }
    // check perms for webcam access
    checkPermissions() {
        console.log("checkPermissions");
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 500,
                height: 500
            }
        }).then((res) => {
            console.log("Camera allowed: ", res);
            this.stream = res;
            this.status = "Allowed";
            this.captureBtnLable = "Capture Image";
        }).catch(e => {
            console.log(e);
            if ((e === null || e === void 0 ? void 0 : e.message) === 'Permission denied') {
                this.status = "Permission Denied please allow camera access";
            }
            else {
                this.status = "Camera not found. Please retry...";
            }
        });
    }
    captureImage() {
        this.trigger.next();
        this.showLeftDiv = false;
        // this.sendDetails(); 
    }
    handleWebcamInitError(error) {
        if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
            console.warn("Camera access was not allowed by user!");
        }
        this.errors.push(error);
    }
}
NewImageUploadComponent.ɵfac = function NewImageUploadComponent_Factory(t) { return new (t || NewImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_image_upload_image_upload_service__WEBPACK_IMPORTED_MODULE_6__["ImageUploadService"])); };
NewImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewImageUploadComponent, selectors: [["app-new-image-upload"]], inputs: { labelsList: "labelsList" }, decls: 12, vars: 5, consts: [[1, "card", "shadow"], [1, "card-body"], [1, "card-text"], [3, "formGroup"], [1, "col-12", "col-sm-6", "col-md-4", "web-perms-button-div"], ["type", "button", 1, "my-btn", "web-perms-btn", 3, "click"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["height", "480", "width", "640", 3, "src", 4, "ngIf"], [1, "row"], [3, "trigger", "allowCameraSwitch", "height", "width", "imageQuality", "videoOptions", "imageCapture", "initError"], ["type", "button", 1, "my-btn", "my-btn-primary", 3, "click"], ["height", "480", "width", "640", 3, "src"], ["type", "button", 1, "mx-auto", "my-btn", "my-btn-primary", 3, "click"]], template: function NewImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_Template_button_click_5_listener() { return ctx.checkPermissions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Webcam Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewImageUploadComponent_p_7_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewImageUploadComponent_div_8_Template, 5, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewImageUploadComponent_img_10_Template, 1, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewImageUploadComponent_div_11_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.galleryUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stream);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webcamPreviewImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webcamPreviewImage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_1__["WebcamComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n}\n\n.dnd-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  height: 10rem;\n  border: 1px dashed #745cf2;\n}\n\n.dnd-container[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 20%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 100px;\n}\n\n#parent[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#left[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  background-color: white;\n  width: 50%;\n  position: relative;\n}\n\n#right[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  background-color: white;\n  width: 50%;\n  position: relative;\n}\n\n\n\n.webcam-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  \n  height: auto;\n  \n  display: block;\n  \n  margin: 0 auto;\n  \n}\n\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15rem;\n}\n\n.web-perms-button-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.web-perms-btn[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvcGFwZXItdXBsb2FkL25ldy1pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcGVyLXVwbG9hZC9uZXctaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FERUU7RUFFRSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUUsMENBQUE7O0FBQ0Y7RUFDSSxlQUFBO0VBQWlCLG1EQUFBO0VBQ2pCLFlBQUE7RUFBYyw4QkFBQTtFQUNkLGNBQUE7RUFBZ0Isb0RBQUE7RUFDaEIsY0FBQTtFQUFnQix1REFBQTtBQ0twQjs7QURGRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDS0o7O0FERkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFwZXItdXBsb2FkL25ldy1pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZG5kLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWRcbiAgICAjNzQ1Y2YyO1xuICAgIFxuICAgIC5wcmV2aWV3e1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICB9XG59XG4ubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufVxuI3BhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIFxuICAjbGVmdCB7XG4gICAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjcmlnaHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAvKiBBZGQgdGhpcyB0byB5b3VyIGNvbXBvbmVudCdzIENTUyBmaWxlICovXG4ud2ViY2FtLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIExpbWl0IHRoZSBpbWFnZSB3aWR0aCB0byAxMDAlIG9mIGl0cyBjb250YWluZXIgKi9cbiAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIHRoZSBhc3BlY3QgcmF0aW8gKi9cbiAgICBkaXNwbGF5OiBibG9jazsgLyogRW5zdXJlIGl0IGRvZXNuJ3QgaW5oZXJpdCBhbnkgdW5leHBlY3RlZCBzdHlsZXMgKi9cbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBpbWFnZSBob3Jpem9udGFsbHkgd2l0aGluIGl0cyBjb250YWluZXIgKi9cbiAgfVxuICBcbiAgLnByZXZpZXctaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTVyZW07XG59XG5cbi53ZWItcGVybXMtYnV0dG9uLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2ViLXBlcm1zLWJ0biB7XG4gICAgY29sb3I6IGJsYWNrO1xufSIsIi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRuZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzc0NWNmMjtcbn1cbi5kbmQtY29udGFpbmVyIC5wcmV2aWV3IHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuI3BhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNsZWZ0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcmlnaHQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEFkZCB0aGlzIHRvIHlvdXIgY29tcG9uZW50J3MgQ1NTIGZpbGUgKi9cbi53ZWJjYW0taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIExpbWl0IHRoZSBpbWFnZSB3aWR0aCB0byAxMDAlIG9mIGl0cyBjb250YWluZXIgKi9cbiAgaGVpZ2h0OiBhdXRvO1xuICAvKiBNYWludGFpbiB0aGUgYXNwZWN0IHJhdGlvICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBFbnN1cmUgaXQgZG9lc24ndCBpbmhlcml0IGFueSB1bmV4cGVjdGVkIHN0eWxlcyAqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgLyogQ2VudGVyIHRoZSBpbWFnZSBob3Jpem9udGFsbHkgd2l0aGluIGl0cyBjb250YWluZXIgKi9cbn1cblxuLnByZXZpZXctaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXJlbTtcbn1cblxuLndlYi1wZXJtcy1idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWItcGVybXMtYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-new-image-upload",
                templateUrl: "./new-image-upload.component.html",
                styleUrls: ["./new-image-upload.component.scss"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_image_upload_image_upload_service__WEBPACK_IMPORTED_MODULE_6__["ImageUploadService"] }]; }, { labelsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/paper-upload/paper-upload.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/paper-upload/paper-upload.module.ts ***!
  \*****************************************************/
/*! exports provided: PaperUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperUploadModule", function() { return PaperUploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _new_image_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-image-upload.component */ "./src/app/paper-upload/new-image-upload.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");









const routes = [
    {
        path: '',
        component: _new_image_upload_component__WEBPACK_IMPORTED_MODULE_5__["NewImageUploadComponent"],
    },
];
class PaperUploadModule {
}
PaperUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaperUploadModule });
PaperUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaperUploadModule_Factory(t) { return new (t || PaperUploadModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaperUploadModule, { declarations: [_new_image_upload_component__WEBPACK_IMPORTED_MODULE_5__["NewImageUploadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaperUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _new_image_upload_component__WEBPACK_IMPORTED_MODULE_5__["NewImageUploadComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=paper-upload-paper-upload-module-es2019.js.map