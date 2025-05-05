function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-upload-image-upload-module"], {
  /***/
  "./src/app/image-upload/image-upload.module.ts": function srcAppImageUploadImageUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function () {
      return ImageUploadModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _images_preview_list_images_preview_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./images-preview-list/images-preview-list.component */
    "./src/app/image-upload/images-preview-list/images-preview-list.component.ts");
    /* harmony import */


    var _images_upload_wrapper_images_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./images-upload-wrapper/images-upload-wrapper.component */
    "./src/app/image-upload/images-upload-wrapper/images-upload-wrapper.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _new_image_upload_new_image_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./new-image-upload/new-image-upload.component */
    "./src/app/image-upload/new-image-upload/new-image-upload.component.ts");

    var routes = [{
      path: '',
      component: _images_upload_wrapper_images_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ImagesUploadWrapperComponent"]
    }];

    var ImageUploadModule = function ImageUploadModule() {
      _classCallCheck(this, ImageUploadModule);
    };

    ImageUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImageUploadModule
    });
    ImageUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ImageUploadModule_Factory(t) {
        return new (t || ImageUploadModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageUploadModule, {
        declarations: [_images_preview_list_images_preview_list_component__WEBPACK_IMPORTED_MODULE_2__["ImagesPreviewListComponent"], _images_upload_wrapper_images_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ImagesUploadWrapperComponent"], _new_image_upload_new_image_upload_component__WEBPACK_IMPORTED_MODULE_7__["NewImageUploadComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_images_preview_list_images_preview_list_component__WEBPACK_IMPORTED_MODULE_2__["ImagesPreviewListComponent"], _images_upload_wrapper_images_upload_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ImagesUploadWrapperComponent"], _new_image_upload_new_image_upload_component__WEBPACK_IMPORTED_MODULE_7__["NewImageUploadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/image-upload/images-preview-list/images-preview-list.component.ts": function srcAppImageUploadImagesPreviewListImagesPreviewListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesPreviewListComponent", function () {
      return ImagesPreviewListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _image_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../image-upload.service */
    "./src/app/image-upload/image-upload.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    function ImagesPreviewListComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesPreviewListComponent_div_7_div_1_Template_img_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;
          var photoObj_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.editAsset(i_r4, photoObj_r3, "photos");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImagesPreviewListComponent_div_7_div_1_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var photoObj_r3 = ctx.$implicit;
          return photoObj_r3.active = $event;
        })("ngModelChange", function ImagesPreviewListComponent_div_7_div_1_Template_input_ngModelChange_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;
          var photoObj_r3 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.updateActiveStatus(i_r4, photoObj_r3, "photos");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photoObj_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", photoObj_r3.active)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("id", "active_toggle_" + i_r4)("checked", photoObj_r3.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "active_toggle_" + i_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photoObj_r3.mediaUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", photoObj_r3.mediaDesc, " ");
      }
    }

    function ImagesPreviewListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesPreviewListComponent_div_7_div_1_Template, 12, 8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.photosList);
      }
    }

    function ImagesPreviewListComponent_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesPreviewListComponent_div_8_div_1_Template_img_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var i_r11 = ctx.index;
          var videoObj_r10 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.editAsset(i_r11, videoObj_r10, "videos");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImagesPreviewListComponent_div_8_div_1_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var videoObj_r10 = ctx.$implicit;
          return videoObj_r10.active = $event;
        })("ngModelChange", function ImagesPreviewListComponent_div_8_div_1_Template_input_ngModelChange_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var i_r11 = ctx.index;
          var videoObj_r10 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.updateActiveStatus(i_r11, videoObj_r10, "videos");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var videoObj_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", videoObj_r10.active)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("id", "active_toggle_" + i_r11)("checked", videoObj_r10.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "active_toggle_" + i_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", videoObj_r10.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", videoObj_r10.mediaDesc, " ");
      }
    }

    function ImagesPreviewListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesPreviewListComponent_div_8_div_1_Template, 12, 8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.videosList);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        active: a0
      };
    };

    var ImagesPreviewListComponent = /*#__PURE__*/function () {
      function ImagesPreviewListComponent(apiService, router, imageUploadService, sanitizer) {
        _classCallCheck(this, ImagesPreviewListComponent);

        this.apiService = apiService;
        this.router = router;
        this.imageUploadService = imageUploadService;
        this.sanitizer = sanitizer;
        this.labelsList = [];
        this.photosList = [];
        this.isFirstTimeVideoOpen = true; // photosList = [{
        //   mediaUrl: 'https://images.unsplash.com/photo-1628243426757-b092ba839ff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
        //   mediaName: 'Photo name',
        //   active: false
        // }];

        this.videosList = [];
        this.isImageView = true;
      }

      _createClass(ImagesPreviewListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getGalleryImages("photos");
          this.imageUploadService.refreshAssets.subscribe(function (res) {
            if (res && res.type) {
              _this.getGalleryImages(res.type);
            }
          });
        }
      }, {
        key: "onClickVideo",
        value: function onClickVideo() {
          this.isImageView = false;

          if (this.isFirstTimeVideoOpen) {
            this.getGalleryImages("videos");
          }
        }
      }, {
        key: "editAsset",
        value: function editAsset(i, photoObj, type) {
          this.imageUploadService.editAssets.next({
            index: i,
            asset: photoObj,
            type: type
          });
        }
      }, {
        key: "updateActiveStatus",
        value: function updateActiveStatus(i, photoObj, type) {
          var _this2 = this;

          var payload = {
            isActive: photoObj.active
          };

          try {
            this.apiService.showLoader.next(true);
            this.apiService.updateGalleryAssetStatus(payload, photoObj.mediaUrl).subscribe(function (res) {
              _this2.apiService.showLoader.next(false); // this.getGalleryImages(type);

            }, function (err) {
              _this2.apiService.showLoader.next(false);

              if (err.status === 401) {
                _this2.router.navigate(["/login"]);

                return;
              }

              if (err.error) {
                var serverError = typeof err.error === "string" ? JSON.parse(err.error) : {};

                _this2.apiService.genericMessage(serverError.error || "something went wrong", "error");
              }
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "getGalleryImages",
        value: function getGalleryImages(type) {
          var _this3 = this;

          try {
            this.apiService.showLoader.next(true);
            this.apiService.getAllGalleryImages(type).subscribe(function (res) {
              _this3.apiService.showLoader.next(false);

              if (type === "videos") {
                _this3.videosList = res;
                _this3.videosList = _this3.videosList.map(function (val) {
                  val.path = val.mediaUrl;

                  if (val.path) {
                    val.path = val.path.split('"').filter(function (path) {
                      return path;
                    }).join();
                    val.path = _this3.sanitizer.bypassSecurityTrustResourceUrl(val.path);
                  }

                  return val;
                });
              } else {
                _this3.photosList = res;
              }
            }, function (err) {
              _this3.apiService.showLoader.next(false);

              if (err.status === 401) {
                _this3.router.navigate(["/login"]);

                return;
              }

              if (err.error) {
                var serverError = typeof err.error === "string" ? JSON.parse(err.error) : {};

                _this3.apiService.genericMessage(serverError.error || "something went wrong", "error");
              }
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }]);

      return ImagesPreviewListComponent;
    }();

    ImagesPreviewListComponent.ɵfac = function ImagesPreviewListComponent_Factory(t) {
      return new (t || ImagesPreviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_upload_service__WEBPACK_IMPORTED_MODULE_3__["ImageUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
    };

    ImagesPreviewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImagesPreviewListComponent,
      selectors: [["app-images-preview-list"]],
      inputs: {
        labelsList: "labelsList"
      },
      decls: 9,
      vars: 8,
      consts: [[1, "images-preview", "mr-4"], [1, "row", "justify-content-center", "custom-tabs"], [1, "list-unstyled"], [3, "ngClass", "click"], ["class", "row m-t-20", 4, "ngIf"], [1, "row", "m-t-20"], ["class", "col-12 col-sm-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4"], [1, "images-preview__wrapper"], [1, "images-preview__img-parent"], ["src", "assets/icons/edit-ico.svg", "alt", "edit", 1, "edit-icon-img", 3, "click"], [1, "onoffswitch", "images-preview__toggle-switch"], ["type", "checkbox", "name", "onoffswitch", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "id", "checked", "ngModelChange"], [1, "onoffswitch-label", 3, "for"], [1, "onoffswitch-inner"], [1, "onoffswitch-switch"], [1, "w-100", 3, "src"], [1, "text-center", "image-description"], ["class", "col-12 col-sm-6 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-6"]],
      template: function ImagesPreviewListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesPreviewListComponent_Template_li_click_3_listener() {
            return ctx.isImageView = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesPreviewListComponent_Template_li_click_5_listener() {
            return ctx.onClickVideo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Video ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImagesPreviewListComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImagesPreviewListComponent_div_8_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.isImageView));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, !ctx.isImageView));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isImageView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isImageView);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".images-preview__wrapper[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  padding: 5px;\n  border-radius: 2px;\n  position: relative;\n}\n.images-preview__img-parent[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.images-preview__img-parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.images-preview__img-parent[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  height: 300px;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.images-preview__img-parent[_ngcontent-%COMP%]   .edit-icon-img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 82px;\n  top: 15px;\n  cursor: pointer;\n}\n.images-preview[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6e63ff;\n  font-style: italic;\n}\n.images-preview__toggle-switch[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlcy1wcmV2aWV3LWxpc3QvaW1hZ2VzLXByZXZpZXctbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlcy1wcmV2aWV3LWxpc3QvaW1hZ2VzLXByZXZpZXctbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FES0k7RUFDSSxVQUFBO0FDSFI7QURLUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0haO0FETVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNKWjtBRE1RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0paO0FEUUE7RUFDSSxlQUFBO0VBQ0EsY0VwQ1c7RUZxQ1gsa0JBQUE7QUNOSjtBRFFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlcy1wcmV2aWV3LWxpc3QvaW1hZ2VzLXByZXZpZXctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5cbi5pbWFnZXMtcHJldmlldyB7XG4gICAgJl9fd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICZfX2ltZy1wYXJlbnQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmcmFtZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXQtaWNvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogODJweDtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuLmltYWdlLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuICAgICZfX3RvZ2dsZS1zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgfVxufSIsIi5pbWFnZXMtcHJldmlld19fd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltYWdlcy1wcmV2aWV3X19pbWctcGFyZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbi5pbWFnZXMtcHJldmlld19faW1nLXBhcmVudCBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uaW1hZ2VzLXByZXZpZXdfX2ltZy1wYXJlbnQgaWZyYW1lIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5pbWFnZXMtcHJldmlld19faW1nLXBhcmVudCAuZWRpdC1pY29uLWltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDgycHg7XG4gIHRvcDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltYWdlcy1wcmV2aWV3IC5pbWFnZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2ZTYzZmY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5pbWFnZXMtcHJldmlld19fdG9nZ2xlLXN3aXRjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn0iLCIkd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kcHJpbWFyeUNvbG9yOiAjNmU2M2ZmO1xuJGJyYW5kUHJpbWFyeUNvbG9yOiAjMmEwYTBhO1xuJHdoaXRlU21va2VEYXJrOiNhZGFkYWQ7XG4kd2hpdGVTbW9rZTojRjJGMkYyO1xuJEVneXB0aWFuQmx1ZTojMTU1NThkMGQ7XG4kRG9kZ2VyQmx1ZTojMjE5NkYzO1xuJHdoaXRlU21va2VsaWdodDojZGFkYWRhO1xuJGJyYW5kU2Vjb25kYXJ5Q29sb3I6ICNmMjFiM2Y7XG4kcHJpbWFyeUhvdmVyOiAjOWE1NWZmMWE7XG4kbWFpbkJnQ29sb3I6ICNmMmVkZjM7XG4kc2hvd0NvbG9yOiAjMDAxZjQzO1xuJGVycm9yQ29sb3I6ICNkYzM1NDU7XG4kaW5kaWdvOiM5MjM4YWU7XG4kUGFuYWNoZS1ncmVlbjojRUVGQUVGO1xuJFB1cnB1bC13aGl0ZTojRTREREU2O1xuJGFsaWNlLWJsdWU6ICNFOUY3RkQ7XG4kZmxvcmFsLXdoaXRlOiNGRkY3RUE7XG4kZG9kZ2VyLWJsdWU6ICMxOTkxRUI7XG4kd2FybmluZy1jb2xvcjojRjc5ODFDO1xuJENoYWJsaXMtcmVkOiNGRUVCRUI7XG4kZXJyb3ItY29sb3I6ICNFRDFDMjQ7XG4kc3VjY2Vzcy1jb2w6ICMxQkI5MzQ7XG4kZGFyay1iZy1jb2xvcjogIzE5MWMyNDtcbiRiZ0dyYWRpZW50Q29sb3I6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmU2M2ZmIDAlLCAjOTczMmEzIDEwMCUpOyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesPreviewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-images-preview-list",
          templateUrl: "./images-preview-list.component.html",
          styleUrls: ["./images-preview-list.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _image_upload_service__WEBPACK_IMPORTED_MODULE_3__["ImageUploadService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      }, {
        labelsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/image-upload/images-upload-wrapper/images-upload-wrapper.component.ts": function srcAppImageUploadImagesUploadWrapperImagesUploadWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesUploadWrapperComponent", function () {
      return ImagesUploadWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _images_preview_list_images_preview_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../images-preview-list/images-preview-list.component */
    "./src/app/image-upload/images-preview-list/images-preview-list.component.ts");
    /* harmony import */


    var _new_image_upload_new_image_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../new-image-upload/new-image-upload.component */
    "./src/app/image-upload/new-image-upload/new-image-upload.component.ts");

    var ImagesUploadWrapperComponent = /*#__PURE__*/function () {
      function ImagesUploadWrapperComponent() {
        _classCallCheck(this, ImagesUploadWrapperComponent);

        this.labelsList = [];
      }

      _createClass(ImagesUploadWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.labelsList = ['2020 Team', '2019 Team', '2017 Team', '2016 Team'];
        }
      }]);

      return ImagesUploadWrapperComponent;
    }();

    ImagesUploadWrapperComponent.ɵfac = function ImagesUploadWrapperComponent_Factory(t) {
      return new (t || ImagesUploadWrapperComponent)();
    };

    ImagesUploadWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImagesUploadWrapperComponent,
      selectors: [["app-images-upload-wrapper"]],
      decls: 5,
      vars: 2,
      consts: [[1, "d-flex"], [1, "preview"], [3, "labelsList"], [1, "create-new"]],
      template: function ImagesUploadWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-images-preview-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-new-image-upload", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelsList", ctx.labelsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelsList", ctx.labelsList);
        }
      },
      directives: [_images_preview_list_images_preview_list_component__WEBPACK_IMPORTED_MODULE_1__["ImagesPreviewListComponent"], _new_image_upload_new_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["NewImageUploadComponent"]],
      styles: [".preview[_ngcontent-%COMP%] {\n  flex-basis: 75%;\n}\n\n.create-new[_ngcontent-%COMP%] {\n  flex-basis: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlcy11cGxvYWQtd3JhcHBlci9pbWFnZXMtdXBsb2FkLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ltYWdlLXVwbG9hZC9pbWFnZXMtdXBsb2FkLXdyYXBwZXIvaW1hZ2VzLXVwbG9hZC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlcy11cGxvYWQtd3JhcHBlci9pbWFnZXMtdXBsb2FkLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlld3tcbiAgICBmbGV4LWJhc2lzOiA3NSU7XG59XG4uY3JlYXRlLW5ld3tcbiAgICBmbGV4LWJhc2lzOiAyNSU7XG59IiwiLnByZXZpZXcge1xuICBmbGV4LWJhc2lzOiA3NSU7XG59XG5cbi5jcmVhdGUtbmV3IHtcbiAgZmxleC1iYXNpczogMjUlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesUploadWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-images-upload-wrapper',
          templateUrl: './images-upload-wrapper.component.html',
          styleUrls: ['./images-upload-wrapper.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/image-upload/new-image-upload/new-image-upload.component.ts": function srcAppImageUploadNewImageUploadNewImageUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewImageUploadComponent", function () {
      return NewImageUploadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _image_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../image-upload.service */
    "./src/app/image-upload/image-upload.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../directives/drag-and-drop.directive */
    "./src/app/directives/drag-and-drop.directive.ts");

    function NewImageUploadComponent_div_11_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.previewImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function NewImageUploadComponent_div_11_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_div_11_div_3_div_1_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.showGallery();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_div_11_div_3_div_1_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var image_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.removeImg(image_r12, i_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function NewImageUploadComponent_div_11_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewImageUploadComponent_div_11_div_3_div_1_Template, 4, 1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.previewImages);
      }
    }

    function NewImageUploadComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFileDropped", function NewImageUploadComponent_div_11_Template_section_onFileDropped_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.uploadFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewImageUploadComponent_div_11_img_2_Template, 1, 1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewImageUploadComponent_div_11_div_3_Template, 2, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewImageUploadComponent_div_11_Template_input_change_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.fileProgress($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_div_11_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r10.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Browse Images ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.previewImages.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.previewImages && ctx_r0.previewImages.length);
      }
    }

    function NewImageUploadComponent_div_13_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Event Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewImageUploadComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Video Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewImageUploadComponent_div_13_div_6_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.galleryUpload.get("videoUrl").touched || ctx_r1.formSubmitted) && ctx_r1.galleryUpload.get("videoUrl").hasError("required"));
      }
    }

    function NewImageUploadComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Event Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewImageUploadComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Event Place ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewImageUploadComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Event Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewImageUploadComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_div_35_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.hideAlert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.serverResponce, " ");
      }
    }

    function NewImageUploadComponent_button_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_button_37_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.sendDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewImageUploadComponent_button_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_button_38_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.updateAssetDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    var NewImageUploadComponent = /*#__PURE__*/function () {
      function NewImageUploadComponent(fb, cd, apiService, router, imageUploadService) {
        _classCallCheck(this, NewImageUploadComponent);

        this.fb = fb;
        this.cd = cd;
        this.apiService = apiService;
        this.router = router;
        this.imageUploadService = imageUploadService;
        this.labelsList = [];
        this.serverResponce = "";
        this.isResponceSuccess = false;
        this.isImageUpload = true;
        this.galleryImages = [];
        this.previewImages = [];
        this.maxDate = new Date().toLocaleDateString();
        this.formSubmitted = false;
        this.previewImage = "https://h5p.org/sites/default/files/styles/medium-logo/public/logos/drag-and-drop-icon.png?itok=0dFV3ej6";
        this.url = "https://h5p.org/sites/default/files/styles/medium-logo/public/logos/drag-and-drop-icon.png?itok=0dFV3ej6";
        this.editAssetObj = {};
        this.editAsset = false;
      }

      _createClass(NewImageUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.galleryUpload = this.fb.group({
            mediaName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mediaDesc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mediaPlace: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.imageUploadService.editAssets.subscribe(function (res) {
            if (res && Object.keys(res).length && res.asset) {
              _this4.isImageUpload = res.type === 'photos';
              _this4.editAssetObj = res;
              _this4.editAsset = true;

              _this4.galleryUpload.patchValue(_objectSpread({}, res.asset));
            }
          });
        }
      }, {
        key: "updateAssetDetails",
        value: function updateAssetDetails() {
          var _this5 = this;

          var value = _objectSpread({}, this.galleryUpload.value);

          var payload = {
            mediaName: value.mediaName,
            mediaType: value.mediaType,
            mediaDesc: value.mediaDesc,
            mediaPlace: value.mediaPlace
          };

          try {
            this.apiService.showLoader.next(true);
            this.apiService.updateGalleryAssetStatus(payload, this.editAssetObj.asset.mediaUrl).subscribe(function (res) {
              _this5.apiService.showLoader.next(false);

              if (res && typeof res === "string") {
                var response = JSON.parse(res);

                _this5.apiService.genericMessage(response.message, "success");

                _this5.imageUploadService.refreshAssets.next({
                  time: new Date().getTime(),
                  type: _this5.editAssetObj.type
                });

                _this5.editAsset = false;

                _this5.galleryUpload.reset();
              }
            }, function (err) {
              _this5.apiService.showLoader.next(false);

              if (err.status === 401) {
                _this5.router.navigate(["/login"]);

                return;
              }

              if (err.error) {
                var serverError = typeof err.error === "string" ? JSON.parse(err.error) : {};

                _this5.apiService.genericMessage(serverError.error || "something went wrong", "error");
              }
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "imageUpload",
        value: function imageUpload() {
          this.isImageUpload = true;

          if (this.galleryUpload.contains("videoUrl")) {
            this.previewImage = this.url;
            this.galleryUpload.addControl("image", this.fb.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            this.galleryUpload.removeControl("videoUrl");
          }
        }
      }, {
        key: "videoUpload",
        value: function videoUpload() {
          this.isImageUpload = false;

          if (this.galleryUpload.contains("image")) {
            this.galleryUpload.addControl("videoUrl", this.fb.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            this.galleryUpload.removeControl("image");
          }
        }
      }, {
        key: "hideAlert",
        value: function hideAlert() {
          this.isResponceSuccess = false;
        }
      }, {
        key: "sendDetails",
        value: function sendDetails() {
          var _this6 = this;

          try {
            var endUrl = "photos";

            var payLoad = _objectSpread({}, this.galleryUpload.value);

            payLoad.mediaType = this.isImageUpload ? "photos" : "videos";
            var data = new FormData();

            if (this.isImageUpload) {
              data = new FormData();
              delete payLoad.image;
              payLoad.mediaType = "photos";
              this.galleryImages.forEach(function (file) {
                data.append("gallery", file);
              });
              data.append("galleryStr", JSON.stringify(_objectSpread({}, payLoad)));
            } else {
              payLoad.mediaType = "videos";
              delete payLoad.videoUrl;
              endUrl = "videos";
              data.append("gallery", JSON.stringify(this.galleryUpload.get("videoUrl").value));
              data.append("galleryStr", JSON.stringify(_objectSpread({}, payLoad)));
            }

            this.apiService.showLoader.next(true);
            this.apiService.addGallery(data, endUrl).subscribe(function (res) {
              _this6.apiService.showLoader.next(false);

              if (res && typeof res === "string") {
                var response = JSON.parse(res);

                if (response && response.message) {
                  _this6.imageUploadService.refreshAssets.next({
                    time: new Date().getTime(),
                    type: payLoad.mediaType
                  });

                  _this6.galleryImages = [];
                  _this6.previewImages = [];

                  _this6.galleryUpload.reset();

                  _this6.apiService.genericMessage(response.message, "success");
                }
              }
            }, function (err) {
              _this6.apiService.showLoader.next(false);

              if (err.status === 401) {
                _this6.router.navigate(["/login"]);

                return;
              }

              if (err.error) {
                var serverError = typeof err.error === "string" ? JSON.parse(err.error) : {};

                _this6.apiService.genericMessage(serverError.error || "something went wrong", "error");
              }
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "fileProgress",
        value: function fileProgress(event) {
          var file = event.target.files;
          this.uploadFile(file);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this7 = this;

          var reader = new FileReader(); // HTML5 FileReader API

          var file = event[0];

          if (event) {
            reader.readAsDataURL(file); // When file uploads set it to file formcontrol

            reader.onload = function (ev) {
              // this.galleryUpload.get('image').setValue(file);
              _this7.galleryImages.push(file);

              _this7.previewImages.push(ev.target.result);
            }; // ChangeDetectorRef since file is loading outside the zone


            this.cd.markForCheck();
          }
        }
      }, {
        key: "removeImg",
        value: function removeImg(img, index) {
          this.previewImages.splice(index, 1);
          this.galleryImages.splice(index, 1);
        }
      }, {
        key: "showGallery",
        value: function showGallery() {
          console.log("Show Gallery functions");
        }
      }]);

      return NewImageUploadComponent;
    }();

    NewImageUploadComponent.ɵfac = function NewImageUploadComponent_Factory(t) {
      return new (t || NewImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"]));
    };

    NewImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewImageUploadComponent,
      selectors: [["app-new-image-upload"]],
      inputs: {
        labelsList: "labelsList"
      },
      decls: 39,
      vars: 15,
      consts: [[1, "card", "shadow"], [1, "card-body"], [1, "title"], [1, "card-text"], [1, "row", "justify-content-center", "custom-tabs", "mb-2"], [1, "list-unstyled"], [3, "ngClass", "click"], ["class", "dnd-wraper my-2", 4, "ngIf"], [3, "formGroup"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "label"], [1, "required-star"], ["type", "text", "formControlName", "mediaName", "id", "mediaName", 1, "form-control"], ["class", "f-14 error-message", 4, "ngIf"], ["type", "text", "formControlName", "mediaPlace", "id", "mediaPlace", 1, "form-control"], ["formControlName", "mediaDesc", "rows", "4", 1, "form-control"], ["class", "alert alert-success f-14 alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "d-flex"], ["type", "submit", "class", "mx-auto my-btn  my-btn-primary shadow", 3, "click", 4, "ngIf"], [1, "dnd-wraper", "my-2"], ["appDragAndDrop", "", 1, "dnd-container", 3, "onFileDropped"], ["class", "preview", "alt", "image", 3, "src", 4, "ngIf"], ["class", "d-flex justify-content-start flex-wrap", 4, "ngIf"], ["type", "file", "name", "file", 1, "form-control", "d-none", 3, "change"], ["fileInput", ""], ["type", "button", 1, "my-btn", "my-btn-primary", "w-100", 3, "click"], ["alt", "image", 1, "preview", 3, "src"], [1, "d-flex", "justify-content-start", "flex-wrap"], ["class", "position-relative", 4, "ngFor", "ngForOf"], [1, "position-relative"], ["width", "70", "height", "70", 1, "m-1", 3, "src", "click"], [1, "position-absolute", "text-white", 2, "top", "0", "right", "0", 3, "click"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png", "width", "15", 1, "hover", 2, "margin-top", "-5px"], ["type", "text", "formControlName", "videoUrl", "id", "studentName", 1, "form-control"], [1, "f-14", "error-message"], ["role", "alert", 1, "alert", "alert-success", "f-14", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["type", "submit", 1, "mx-auto", "my-btn", "my-btn-primary", "shadow", 3, "click"]],
      template: function NewImageUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_Template_li_click_7_listener() {
            return ctx.imageUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Image ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewImageUploadComponent_Template_li_click_9_listener() {
            return ctx.videoUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Video ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewImageUploadComponent_div_11_Template, 8, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewImageUploadComponent_div_13_Template, 7, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Event Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewImageUploadComponent_div_20_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Event Place ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NewImageUploadComponent_div_27_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Event Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NewImageUploadComponent_div_34_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NewImageUploadComponent_div_35_Template, 5, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NewImageUploadComponent_button_37_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NewImageUploadComponent_button_38_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isImageUpload));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.isImageUpload));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isImageUpload && !ctx.editAsset);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.galleryUpload);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isImageUpload && !ctx.editAsset);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.galleryUpload.get("mediaName").touched || ctx.formSubmitted) && ctx.galleryUpload.get("mediaName").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.galleryUpload.get("mediaPlace").touched || ctx.formSubmitted) && ctx.galleryUpload.get("mediaPlace").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.galleryUpload.get("mediaDesc").touched || ctx.formSubmitted) && ctx.galleryUpload.get("mediaDesc").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isResponceSuccess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editAsset);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editAsset);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_6__["DragAndDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n}\n\n.dnd-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  height: 10rem;\n  border: 1px dashed #745cf2;\n}\n\n.dnd-container[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 100px;\n}\n\n.register-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: inline-block;\n  text-decoration: underline !important;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvaW1hZ2UtdXBsb2FkL25ldy1pbWFnZS11cGxvYWQvbmV3LWltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1hZ2UtdXBsb2FkL25ldy1pbWFnZS11cGxvYWQvbmV3LWltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSOztBREVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2UtdXBsb2FkL25ldy1pbWFnZS11cGxvYWQvbmV3LWltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kbmQtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZFxuICAgICM3NDVjZjI7XG4gICAgXG4gICAgLnByZXZpZXd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuLmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLnJlZ2lzdGVyLWxpbmsge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSIsIi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRuZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzc0NWNmMjtcbn1cbi5kbmQtY29udGFpbmVyIC5wcmV2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ucmVnaXN0ZXItbGluayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-new-image-upload",
          templateUrl: "./new-image-upload.component.html",
          styleUrls: ["./new-image-upload.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"]
        }];
      }, {
        labelsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=image-upload-image-upload-module-es5.js.map