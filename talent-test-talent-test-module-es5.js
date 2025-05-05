function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["talent-test-talent-test-module"], {
  /***/
  "./src/app/talent-test/final-results/final-results.component.ts": function srcAppTalentTestFinalResultsFinalResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalResultsComponent", function () {
      return FinalResultsComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FinalResultsComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var result_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.parentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.school);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.zone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.rankinOpenCategory);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.questionsSolved);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r1.score);
      }
    }

    var FinalResultsComponent = /*#__PURE__*/function () {
      function FinalResultsComponent(apiService) {
        _classCallCheck(this, FinalResultsComponent);

        this.apiService = apiService;
        this.finalResult = [];
      }

      _createClass(FinalResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.finalResult = [
          //   {Name: "PITLA TEJASWINI", parentName: "KIRAN", school: "ZPHS (GIRLS) GEETHANAGAR", zone: "KARIMNAGAR", rankinOpenCategory: "2", questionsSolved: "7", score: "10.652448"},
          //   {Name: "KALE ABHISHEK", parentName: "SANJAY", school: "ZPHS VISHNUPURI", zone: "NANDED", rankinOpenCategory: "3", questionsSolved: "7", score: "10.434682"},
          //   {Name: "BOMMIDI AKHIL", parentName: "BOMMIDI SUJATHA ", school: "TSMS RUKMAPUR", zone: "KARIMNAGAR", rankinOpenCategory: "4", questionsSolved: "6", score: "10.034357"},
          //   {Name: "KAMALE ANIKET", parentName: "MARTAND ", school: "ZPHS KUNTUR", zone: "NANDED", rankinOpenCategory: "5", questionsSolved: "6", score: "9.475275"},
          //   {Name: "VELIDE PRAVEEN", parentName: "VELIDE RADHIKA", school: "GOVT HIGH SHOOL NARENDRA NAGAR", zone: "WARANGAL", rankinOpenCategory: "6", questionsSolved: "6", score: "9.393681"},
          //   {Name: "SRIPATHI SIDDARTH", parentName: "DAMODAR", school: "ZPHS KATLAKUNTA", zone: "KARIMNAGAR", rankinOpenCategory: "7", questionsSolved: "6", score: "9.375546"},
          //   {Name: "MAHESHUNI JASHWANTH", parentName: " RAJENDAR", school: "T.S.MODEL SCHOOL", zone: "KARIMNAGAR", rankinOpenCategory: "8", questionsSolved: "6", score: "8.962731"},
          //   {Name: "VODNALA VIDYANTH", parentName: "CHANDRASHEKAR ", school: "ZPHS KOTHAPALLY, KNR", zone: "KARIMNAGAR", rankinOpenCategory: "9", questionsSolved: "5", score: "8.248155"},
          //   {Name: "ANNALDAS HANSIKA", parentName: "A.LAXMINARAYANA", school: "ZPHS BOYS SIRICILLA, SRL", zone: "KARIMNAGAR", rankinOpenCategory: "10", questionsSolved: "5", score: "8.125283"},
          //   {Name: "AMIREDDY ABHYUDAYA", parentName: "MALLAREDDY", school: "KGBV  ALLIPUR", zone: "KARIMNAGAR", rankinOpenCategory: "10", questionsSolved: "5", score: "8.125283"},
          //   {Name: "ERUGHADINDLA MANYATHA", parentName: "E.LINGASWAMY", school: "ZPHS NERADA", zone: "SURYAPET", rankinOpenCategory: "12", questionsSolved: "5", score: "8.078149"},
          //   {Name: "GOLLAPELLI AKSHAYA", parentName: "GOLLAPELLI KAMALA CHARY, RAMADEVI ", school: "ZPHS KOTHAPALLY, KNR", zone: "KARIMNAGAR", rankinOpenCategory: "13", questionsSolved: "5", score: "8.070185"},
          //   {Name: "NAMPALLY SHALINI", parentName: "SAMPATH", school: "ZPHS GIRLS JULAPALLI", zone: "KARIMNAGAR", rankinOpenCategory: "14", questionsSolved: "5", score: "8.035725"},
          //   {Name: "GADDAM NAVADEEP", parentName: "GADDAM VENKATESHAM", school: "ZPHS (GIRLS) GEETHANAGAR", zone: "KARIMNAGAR", rankinOpenCategory: "15", questionsSolved: "5", score: "7.899951"},
          //   {Name: "VENNAPUSA SARASWATHI", parentName: "ANJI REDDY", school: "AP MODEL SCHOOL, VIPPARALA REDDY PALEM", zone: "GUNTUR", rankinOpenCategory: "16", questionsSolved: "5", score: "7.868582"},
          //   {Name: "YASHWANTH BATHINI YASHWANTH", parentName: "GANGARAJU ", school: "ZPHS KOTHAPALLY, KNR", zone: "KARIMNAGAR", rankinOpenCategory: "17", questionsSolved: "5", score: "7.833187"},
          //   {Name: "THOUTAM NAMRATHA", parentName: "SURESH", school: "GOVT HIGH SHOOL NARENDRA NAGAR", zone: "WARANGAL", rankinOpenCategory: "18", questionsSolved: "5", score: "7.793026"},
          //   {Name: "DUDIPALA DEVI SHASHI KUMAR", parentName: "DUDIPALA SATHISH BABU", school: "ZPHS KURAVI", zone: "WARANGAL", rankinOpenCategory: "19", questionsSolved: "5", score: "7.758566"},
          //   {Name: "KOTHAPALLY VYSHNAVI", parentName: "SRINIVAS", school: "ZPHS KESHAVAPATNAM, KNR", zone: "KARIMNAGAR", rankinOpenCategory: "20", questionsSolved: "5", score: "7.711432"},
          //   {Name: "CHERUKU KARTHIK", parentName: "CHERUKU VENKAT RAJU", school: "GOVT HIGH SHOOL NARENDRA NAGAR", zone: "WARANGAL", rankinOpenCategory: "21", questionsSolved: "5", score: "7.678901"},
          //   {Name: "CHITHALURI BHANU PRAKASH", parentName: "SRIHARI", school: "TSMS THIRUMALAGIRI", zone: "SURYAPET", rankinOpenCategory: "27", questionsSolved: "4", score: "6.475232"},
          //   {Name: "NAKIREKANTI SAHANA", parentName: "BHARGAV", school: "TSMS PENPAHAD", zone: "SURYAPET", rankinOpenCategory: "29", questionsSolved: "4", score: "6.460401"},
          //   {Name: "AMBAT LASHWIKA", parentName: "SATYANARSYANA", school: "ZPHS AMBARIPET", zone: "KARIMNAGAR", rankinOpenCategory: "30", questionsSolved: "4", score: "6.435071"},
          //   {Name: "ANTHAGIRI ANUSRI", parentName: "ANJAIAH", school: "ZPHS ANNARAM, MANAKONDUR", zone: "KARIMNAGAR", rankinOpenCategory: "37", questionsSolved: "4", score: "6.353477"},
          //   {Name: "RATHANAKARAM TEJASWINI", parentName: "SAIRAJU", school: "ZPHS GUNDLAPALLI", zone: "GUNTUR", rankinOpenCategory: "39", questionsSolved: "4", score: "6.257863"},
          //   {Name: "BHUKYA GOPICHAND", parentName: "BABU", school: "ZPHS RAMAPURAM", zone: "SURYAPET", rankinOpenCategory: "41", questionsSolved: "4", score: "6.234145"},
          //   {Name: "BHUKYA MANIKANTA", parentName: "BADD", school: "ZPHS RAMAPURAM", zone: "SURYAPET", rankinOpenCategory: "42", questionsSolved: "4", score: "6.215440"},
          //   {Name: "MANUPAKA VARALAXMI", parentName: "VENKATESHWARLU", school: "ZPHS GIRLS MANAKONDUR, KNR", zone: "KARIMNAGAR", rankinOpenCategory: "43", questionsSolved: "4", score: "6.183242"},
          //   {Name: "MACHA MADHUMITHA", parentName: "MACHA JAYANTH", school: "ZPHS GIRLS SIRICILLA,SRL", zone: "KARIMNAGAR", rankinOpenCategory: "43", questionsSolved: "4", score: "6.183242"},
          //   {Name: "PENTI MONIKA", parentName: "VENKATESHAM , SUJATHA", school: "ZPHS KOTHAPALLY, KNR", zone: "KARIMNAGAR", rankinOpenCategory: "45", questionsSolved: "4", score: "6.183242"},
          //   {Name: "MARYADHA ANUSHKA", parentName: "MALLAIAH ", school: "ZPHS SOLIPET", zone: "SURYAPET", rankinOpenCategory: "46", questionsSolved: "4", score: "6.151455"},
          //   {Name: "VUCHIDI YASHASHWITHA", parentName: "SURENDER REDDY", school: "ZPHS ALMASPUR", zone: "KARIMNAGAR", rankinOpenCategory: "55", questionsSolved: "4", score: "6.068849"},
          //   {Name: "KAVHALE VAISHNAVI", parentName: "SHANKAR", school: "ZPHS VISHNUPURI", zone: "NANDED", rankinOpenCategory: "64", questionsSolved: "4", score: "5.956094"},
          //   {Name: "KORBANWAD SHRADDHA", parentName: "MUKUND", school: "ZPHS BARAD", zone: "NANDED", rankinOpenCategory: "66", questionsSolved: "4", score: "5.953961"},
          //   {Name: "METIKALA KUSUMITHA", parentName: "RAMAKRISHNA", school: "ZPHS (G) HUZURNAGAR", zone: "SURYAPET", rankinOpenCategory: "68", questionsSolved: "4", score: "5.941158"},
          //   {Name: "KOTA PALLAVI", parentName: "VEERAIAH", school: "ZPHS GORENTLA", zone: "SURYAPET", rankinOpenCategory: "69", questionsSolved: "4", score: "5.923485"},
          //   {Name: "DHARAVATH VISHAL", parentName: "DHARAVATH RAV I", school: "TSMS CHILKODU", zone: "KHAMMAM", rankinOpenCategory: "72", questionsSolved: "4", score: "5.819488"},
          //   {Name: "CHALLA UMA", parentName: "RAVI", school: "ZPHS (G) HUZURNAGAR", zone: "SURYAPET", rankinOpenCategory: "77", questionsSolved: "3", score: "5.136905"},
          //   {Name: "KATAKAN SAI", parentName: "VEERABHADRAK", school: "GHS SANTHI NAGAR", zone: "KHAMMAM", rankinOpenCategory: "79", questionsSolved: "3", score: "5.030743"},
          //   {Name: "GOLI SANJANA SRI", parentName: "RAMESH", school: "ZPHS BOYS KAMALAPUR", zone: "WARANGAL", rankinOpenCategory: "80", questionsSolved: "3", score: "5.029981"},
          //   {Name: "RACHCHA AKANKSHA", parentName: "RAJU", school: "ZPHS SCHOOL PALAKURTHY", zone: "WARANGAL", rankinOpenCategory: "94", questionsSolved: "3", score: "4.859746"},
          //   {Name: "KOLA VISHAL", parentName: "K. VIJAY KUMAR", school: "ZPHS KORRAJULAGUTTA", zone: "KHAMMAM", rankinOpenCategory: "104", questionsSolved: "3", score: "4.785019"},
          //   {Name: "AMARAJU AKSHAYA", parentName: "SRINIVAS", school: "ZPHS BOLLIKUNTA", zone: "WARANGAL", rankinOpenCategory: "113", questionsSolved: "3", score: "4.737885"},
          //   {Name: "RAYARAKULA SWATHI", parentName: "UPENDAR", school: "GHS MARKAZI", zone: "WARANGAL", rankinOpenCategory: "123", questionsSolved: "3", score: "4.630465"},
          //   {Name: "MITTAPALLY SUHANI", parentName: "KAVITHA", school: "GOVT HIGH SHOOL NARENDRA NAGAR", zone: "WARANGAL", rankinOpenCategory: "123", questionsSolved: "3", score: "4.630465"},
          //   {Name: "BANALA GANESH", parentName: "SRINIVAS", school: "ZPHS PANDILLAPALLI", zone: "KHAMMAM", rankinOpenCategory: "136", questionsSolved: "3", score: "4.591067"},
          //   {Name: "MOHAMMAD SADIYA FIRDOUSE", parentName: "MOHAMMAD ABDUL KALEEM", school: "GOVT GIRLS HIGH SCHOOL", zone: "KHAMMAM", rankinOpenCategory: "139", questionsSolved: "3", score: "4.567651"},
          //   {Name: "ANNEGANI PUJITHA", parentName: "NAGA UPENDAR ", school: "ZPHS PAMMI", zone: "KHAMMAM", rankinOpenCategory: "161", questionsSolved: "3", score: "4.378637"},
          //   {Name: "GUDA KAVYA", parentName: "GUDA SANJEEVA REDDY", school: "ZPHS SANTHAGUDIPADU", zone: "GUNTUR", rankinOpenCategory: "175", questionsSolved: "3", score: "4.307894"},
          //   {Name: "THUPAKULA SOWJANYA", parentName: "UPENDRA", school: "GOVT HIGH SCHOOL, NAGULAVANCHA", zone: "KHAMMAM", rankinOpenCategory: "181", questionsSolved: "3", score: "4.258909"},
          //   {Name: "PANUGANTI LAKSHMIDEVI", parentName: "RAMAYYACHARI", school: "ZPHS REDDYPALEM", zone: "GUNTUR", rankinOpenCategory: "184", questionsSolved: "3", score: "4.088674"},
          // ];
          try {
            this.apiService.showLoader.next(true);
            this.apiService.getFinalResults().subscribe(function (res) {
              _this.apiService.showLoader.next(false);

              if (res && res.length) {
                _this.finalResult = res;
              }
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }]);

      return FinalResultsComponent;
    }();

    FinalResultsComponent.ɵfac = function FinalResultsComponent_Factory(t) {
      return new (t || FinalResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    FinalResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinalResultsComponent,
      selectors: [["app-final-results"]],
      decls: 27,
      vars: 1,
      consts: [[1, "col-md-12", "animated", "rotateInUpLeft"], [1, "card", "w-100", "m-auto"], [1, "text-center"], [1, "card-body"], [1, "table-responsive"], [1, "table", "text-center"], [1, "table-dark"], [4, "ngFor", "ngForOf"]],
      template: function FinalResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Selected List of Sadisha Math Talent Test - 2024");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Parent Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "School");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rank in Open Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Questions Solved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FinalResultsComponent_tr_26_Template, 17, 8, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.finalResult);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhbGVudC10ZXN0L2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-final-results",
          templateUrl: "./final-results.component.html",
          styleUrls: ["./final-results.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/talent-test/notifications/notifications.component.ts": function srcAppTalentTestNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_slider_link_slider_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/slider-link/slider-link.component */
    "./src/app/shared/slider-link/slider-link.component.ts");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)();
    };

    NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 126,
      vars: 1,
      consts: [[1, "notifications"], [3, "link", "text"], [1, "container", "animated", "fadeInUp"], [1, "row"], [1, "pl-3", "my-2"], [1, "col-md-12", "notifications__card-parent"], [1, "card", "notifications__card"], [1, "card-body", "f-12", 2, "color", "red"], [1, "card-body", "f-10"], [1, "mt-4"], ["href", "https://maps.app.goo.gl/g6HTAyW9LGLXnHQ89", "target", "_blank", 2, "color", "blue"], ["href", "https://maps.app.goo.gl/8EEwsPbQ7ijs48wo7", "target", "_blank", 2, "color", "blue"], ["href", "https://goo.gl/maps/F9uyb5Q3gb363iL79", "target", "_blank", 2, "color", "blue"], ["href", "https://goo.gl/maps/SCz6hYfe5kqBSbFH6", "target", "_blank", 2, "color", "blue"], ["href", "https://goo.gl/maps/B2PDJ4mZsVKSdHkcA", "target", "_blank", 2, "color", "blue"], ["href", "https://maps.app.goo.gl/FYKmJzfSe7bi3ybJ9", "target", "_blank", 2, "color", "blue"], [1, "card-body", "f-8", "font-bold", 2, "color", "black"], [1, "card-body"], [1, "card", "notifications__card", "mb-3"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-slider-link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time and Venue Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scheduled Time of the exam is: Sunday 11 AM, 10th November 2024.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Registrations are open NOW!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last date to register: Tuesday 6 PM, 07th November 2024.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reporting Time is 10:30 AM. No candidate is allowed after 10:50 AM.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Candidates must bring printed or electronic-copy of the Hall-Ticket. Otherwise the candidate is not allowed to write the exam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Venue/Center Of Examination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Karimnagar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " -> Prakasam Academy Of Learning, Arnakonda, Choppadandi, Karimnagar. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Click Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Contact: Mora Sai Kumar, 6309313756.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Warangal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " -> Krishnaveni Jr. College, Nakkalagutta, beside NPDCL Office, Hanamkonda. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Click Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Contact: Pavan Kumar, 9989237142.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Khammam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " -> Sri Chaitanya Junior College, Vidya Soudha Campus(TVS SHOWROOM), Kaviraj Nagar, Khammam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Click Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Contact: Narendra Simha, 9581357080.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Suryapet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " -> Zilla Parishad Boys High School, Opp. municipal office, Suryapet. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Click Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Contact: Damalla Koteswar Rao, 9912789974.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Guntur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " -> SVVR Z P High School, Nekarikallu Mandal, Guntur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Click Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Contact: Gopi, 9705795118.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Nanded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " -> Gramin Technical And Management Campus, Vishnupuri, Nanded, Maharashtra. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Click Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Contact: Pralobh Kulkarkarni, 9421819020.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Candidates should bring both Aadhar Card and Hall-Ticket to the examination center.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Candidates should reach the venue at their own expense. No Transportation will be provided.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Eligibility Criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Students from only ZP, Model or KGBV schools in class 10th can register! If you don't see your school in the list or find it difficult to register, please call 9550895968 or email to admin@sadisha.org with your details. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Structure of the Exam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " It\u2019s an OPEN BOOK exam. That is, students can refer to any textbook or notes during the exam. Mobile phones and calculators are not allowed. Duration of this exam will be 60 minutes and the question paper contains 10 problems. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "All the answers are non-negative integers. Candidates must carry their Aadhaar card to the exam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Questions and Scoring Strategy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " The scoring is relative. That is, marks for a correct answer depend upon how many people have correctly answered the question.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " An easy question correctly solved by several people can fetch only 1.12 marks while a hard question solved by very few can fetch as many as 1.99 marks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Prize Structure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Up to 70 students will be provided free Intermediate Education (+2) including hostel fee in a good college in a nearby town. 18 of these belong to the open category, 26 reserved for ZP schools students and 26 are reserved for ZP girl students. Seat distribution varies by district. A cut-off score of 2 questions will be applicable for these seats. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Top 3 schools in open category and top 3 schools in ZP category will get a memento in addition to the cash prize detailed below. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Each question is rewarded with Rs 256. Those schools who score a minimum of 20 total questions, will be rewarded and the maximum amount we pay is 25600. That is, if 10 students from your school altogether solve 20 questions, your school gets 5120 rupees as a cash prize. This amount will be paid through a cheque and the bank account should only belong to the school. No personal bank accounts are entertained. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Login to see your results of Math Talent Test  - November, 2024");
        }
      },
      directives: [_shared_slider_link_slider_link_component__WEBPACK_IMPORTED_MODULE_1__["SliderLinkComponent"]],
      styles: [".notifications__news[_ngcontent-%COMP%] {\n  padding: 0.625rem;\n  background: linear-gradient(90deg, #6e63ff 0%, #9732a3 100%);\n}\n.notifications__para[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 1.06rem;\n  font-weight: 500;\n  padding: 0 !important;\n  -webkit-animation: news 16s infinite linear;\n          animation: news 16s infinite linear;\n}\n.notifications__para[_ngcontent-%COMP%]:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.notifications__card[_ngcontent-%COMP%] {\n  border-left: 7px solid #6e63ff;\n  font-weight: 500;\n  transition: all 0.6s ease-in;\n}\n.notifications__card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0.625rem;\n}\n.notifications__card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.notifications__card[_ngcontent-%COMP%]:hover {\n  border-left: 7px solid #9238ae;\n  cursor: pointer;\n  box-shadow: 0 40px 24px 0 rgba(0, 0, 0, 0.5);\n}\n@-webkit-keyframes news {\n  0% {\n    transform: translateX(100%);\n  }\n  25% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0%);\n  }\n  75% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n@keyframes news {\n  0% {\n    transform: translateX(100%);\n  }\n  25% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0%);\n  }\n  75% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n.registration-guidelines[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  \n  padding: 10px;\n  \n  border: 1px solid #ccc;\n  \n  border-radius: 5px;\n  \n  text-align: left;\n  \n}\n@media screen and (max-width: 767px) {\n  .notifications__news[_ngcontent-%COMP%] {\n    padding: 0.625rem;\n    background: linear-gradient(90deg, #6e63ff 0%, #9732a3 100%);\n    white-space: nowrap;\n  }\n  .notifications__para[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvdGFsZW50LXRlc3Qvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NyYXZhbmliYWxuZS9Eb2N1bWVudHMvc2FkaXNoYS9tdHQtdWkvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdGFsZW50LXRlc3Qvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksaUJBQUE7RUFDQSw0RENxQlM7QUN0QmpCO0FGSUk7RUFDSSxTQUFBO0VBQ0EsV0NUQTtFRFVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDJDQUFBO1VBQUEsbUNBQUE7QUVGVDtBRklJO0VBQ0ksb0NBQUE7VUFBQSw0QkFBQTtBRUZSO0FGSUk7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUVGUjtBRkdRO0VBQ0ksaUJBQUE7QUVEWjtBRkVZO0VBQ0ksbUJBQUE7QUVBaEI7QUZJSTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FFRlI7QUZJSTtFQUNJO0lBQUcsMkJBQUE7RUVEVDtFRkVNO0lBQUksMEJBQUE7RUVDVjtFRkFNO0lBQUkseUJBQUE7RUVHVjtFRkZNO0lBQUksMkJBQUE7RUVLVjtFRkpNO0lBQUssNEJBQUE7RUVPWDtBQUNGO0FGYkk7RUFDSTtJQUFHLDJCQUFBO0VFRFQ7RUZFTTtJQUFJLDBCQUFBO0VFQ1Y7RUZBTTtJQUFJLHlCQUFBO0VFR1Y7RUZGTTtJQUFJLDJCQUFBO0VFS1Y7RUZKTTtJQUFLLDRCQUFBO0VFT1g7QUFDRjtBRkZBO0VBQ0kseUJBQUE7RUFBMkIscUJBQUE7RUFDM0IsYUFBQTtFQUFlLCtCQUFBO0VBQ2Ysc0JBQUE7RUFBd0IsV0FBQTtFQUN4QixrQkFBQTtFQUFvQixvQkFBQTtFQUNwQixnQkFBQTtFQUFrQiw2QkFBQTtBRVV0QjtBRlJBO0VBRVE7SUFDSSxpQkFBQTtJQUNBLDREQy9CSztJRGdDTCxtQkFBQTtFRVVWO0VGUk07SUFDSSxtQkFBQTtFRVVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWxlbnQtdGVzdC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG4ubm90aWZpY2F0aW9ucyB7XG4gICAgJl9fbmV3c3tcbiAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICRiZ0dyYWRpZW50Q29sb3I7XG4gICAgfVxuICAgIFxuICAgICZfX3BhcmF7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjA2cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICBhbmltYXRpb246IG5ld3MgMTZzIGluZmluaXRlIGxpbmVhcjtcbiAgICB9IFxuICAgICZfX3BhcmE6aG92ZXJ7XG4gICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgfVxuICAgICZfX2NhcmR7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgJHByaW1hcnlDb2xvcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbjtcbiAgICAgICAgLmNhcmQtYm9keXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgXG4gICAgJl9fY2FyZDpob3ZlcntcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAkaW5kaWdvO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNDBweCAyNHB4IDAgcmdiYSgwLCAwLDAsIDAuNSk7XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG5ld3Mge1xuICAgICAgICAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSl9XG4gICAgICAgIDI1JXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKX1cbiAgICAgICAgNTAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSl9XG4gICAgICAgIDc1JXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSl9XG4gICAgICAgIDEwMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKX1cbiAgICBcbiAgICB9XG4gICAgXG4gICBcbn1cbi5yZWdpc3RyYXRpb24tZ3VpZGVsaW5lcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNzsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIFBhZGRpbmcgYXJvdW5kIHRoZSBjb250ZW50ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogQm9yZGVyICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBDZW50ZXItYWxpZ24gdGhlIGNvbnRlbnQgKi9cbiAgfVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gICAgLm5vdGlmaWNhdGlvbnN7XG4gICAgICAgICZfX25ld3N7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiZ0dyYWRpZW50Q29sb3I7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgICZfX3BhcmF7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB9XG4gICAgfVxufSIsIiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDtcbiRwcmltYXJ5Q29sb3I6ICM2ZTYzZmY7XG4kYnJhbmRQcmltYXJ5Q29sb3I6ICMyYTBhMGE7XG4kd2hpdGVTbW9rZURhcms6I2FkYWRhZDtcbiR3aGl0ZVNtb2tlOiNGMkYyRjI7XG4kRWd5cHRpYW5CbHVlOiMxNTU1OGQwZDtcbiREb2RnZXJCbHVlOiMyMTk2RjM7XG4kd2hpdGVTbW9rZWxpZ2h0OiNkYWRhZGE7XG4kYnJhbmRTZWNvbmRhcnlDb2xvcjogI2YyMWIzZjtcbiRwcmltYXJ5SG92ZXI6ICM5YTU1ZmYxYTtcbiRtYWluQmdDb2xvcjogI2YyZWRmMztcbiRzaG93Q29sb3I6ICMwMDFmNDM7XG4kZXJyb3JDb2xvcjogI2RjMzU0NTtcbiRpbmRpZ286IzkyMzhhZTtcbiRQYW5hY2hlLWdyZWVuOiNFRUZBRUY7XG4kUHVycHVsLXdoaXRlOiNFNERERTY7XG4kYWxpY2UtYmx1ZTogI0U5RjdGRDtcbiRmbG9yYWwtd2hpdGU6I0ZGRjdFQTtcbiRkb2RnZXItYmx1ZTogIzE5OTFFQjtcbiR3YXJuaW5nLWNvbG9yOiNGNzk4MUM7XG4kQ2hhYmxpcy1yZWQ6I0ZFRUJFQjtcbiRlcnJvci1jb2xvcjogI0VEMUMyNDtcbiRzdWNjZXNzLWNvbDogIzFCQjkzNDtcbiRkYXJrLWJnLWNvbG9yOiAjMTkxYzI0O1xuJGJnR3JhZGllbnRDb2xvcjpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZTYzZmYgMCUsICM5NzMyYTMgMTAwJSk7IiwiLm5vdGlmaWNhdGlvbnNfX25ld3Mge1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmU2M2ZmIDAlLCAjOTczMmEzIDEwMCUpO1xufVxuLm5vdGlmaWNhdGlvbnNfX3BhcmEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBuZXdzIDE2cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uc19fcGFyYTpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG4ubm90aWZpY2F0aW9uc19fY2FyZCB7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzZlNjNmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbjtcbn1cbi5ub3RpZmljYXRpb25zX19jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbn1cbi5ub3RpZmljYXRpb25zX19jYXJkIC5jYXJkLWJvZHkgcCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4ubm90aWZpY2F0aW9uc19fY2FyZDpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzkyMzhhZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDQwcHggMjRweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbkBrZXlmcmFtZXMgbmV3cyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuXG4ucmVnaXN0cmF0aW9uLWd1aWRlbGluZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAvKiBCYWNrZ3JvdW5kIGNvbG9yICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8qIFBhZGRpbmcgYXJvdW5kIHRoZSBjb250ZW50ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIC8qIEJvcmRlciAqL1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKiBDZW50ZXItYWxpZ24gdGhlIGNvbnRlbnQgKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5vdGlmaWNhdGlvbnNfX25ld3Mge1xuICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZlNjNmZiAwJSwgIzk3MzJhMyAxMDAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5ub3RpZmljYXRpb25zX19wYXJhIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notifications',
          templateUrl: './notifications.component.html',
          styleUrls: ['./notifications.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/talent-test/papers-menu-list/papers-menu-list.component.ts": function srcAppTalentTestPapersMenuListPapersMenuListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PapersMenuListComponent", function () {
      return PapersMenuListComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function PapersMenuListComponent_div_0_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PapersMenuListComponent_div_0_li_2_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var list_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.sendMessage(list_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.selectedItem == list_r2))("routerLink", "/talent-test/previous-papers/" + list_r2.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r2.displayName, " ");
      }
    }

    function PapersMenuListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PapersMenuListComponent_div_0_li_2_Template, 2, 5, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.paperList);
      }
    }

    var PapersMenuListComponent = /*#__PURE__*/function () {
      function PapersMenuListComponent(apiService, route, router) {
        _classCallCheck(this, PapersMenuListComponent);

        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.paperList = [];
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PapersMenuListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var paperId = this.route.snapshot.paramMap.get('paper');

          if (paperId == null) {
            paperId = "2023";
          }

          this.fetchQuestionPapers(paperId);
        }
      }, {
        key: "fetchQuestionPapers",
        value: function fetchQuestionPapers(paperId) {
          var _this2 = this;

          try {
            var index = 0,
                i = 0;
            this.apiService.showLoader.next(true);
            this.apiService.fetchQuestionPapers().subscribe(function (response) {
              _this2.apiService.showLoader.next(false);

              if (response && Object.keys(response).length) {
                console.log('hueeyyyy');
                console.log(response);
                Object.keys(response).sort().forEach(function (key) {
                  if (key == paperId) {
                    index = i;
                  }

                  var obj = {
                    displayName: key,
                    value: key,
                    questions: (response[key] || []).map(function (val) {
                      return {
                        question: val,
                        ans: null
                      };
                    })
                  };

                  _this2.paperList.push(obj);

                  i++;
                });

                _this2.sendMessage(_this2.paperList[index]);
              }

              console.log(_this2.paperList);

              _this2.paperList.reverse();
            }, function (error) {
              _this2.apiService.showLoader.next(false);

              if (error.error && error.error.message) {
                _this2.apiService.genericMessage(error.error.message || 'something went wrong', 'error');
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(data) {
          this.selectedItem = data;
          this.messageEvent.emit(data);
        }
      }]);

      return PapersMenuListComponent;
    }();

    PapersMenuListComponent.ɵfac = function PapersMenuListComponent_Factory(t) {
      return new (t || PapersMenuListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PapersMenuListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PapersMenuListComponent,
      selectors: [["app-papers-menu-list"]],
      outputs: {
        messageEvent: "messageEvent"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "papers-list animated fadeInTopLeft container p-0", 4, "ngIf"], [1, "papers-list", "animated", "fadeInTopLeft", "container", "p-0"], [1, "papers-list__wrapper", "list-unstyled", "text-black-50"], ["class", "papers-list__item border text-nowrap px-3 border-bottom-0", "routerLinkActive", "active", 3, "ngClass", "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "papers-list__item", "border", "text-nowrap", "px-3", "border-bottom-0", 3, "ngClass", "routerLink", "click"]],
      template: function PapersMenuListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PapersMenuListComponent_div_0_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paperList.length > 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.625rem;\n  transition: 0.8s all;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 1px #e9e1e1;\n  background: linear-gradient(90deg, #6e63ff 0%, #9732a3 100%);\n  color: #fff;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  box-shadow: 0px 0px 1px 1px #e9e1e1;\n  background: linear-gradient(90deg, #6e63ff 0%, #9732a3 100%);\n}\n\n.papers-list[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.papers-list__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvdGFsZW50LXRlc3QvcGFwZXJzLW1lbnUtbGlzdC9wYXBlcnMtbWVudS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWxlbnQtdGVzdC9wYXBlcnMtbWVudS1saXN0L3BhcGVycy1tZW51LWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3JhdmFuaWJhbG5lL0RvY3VtZW50cy9zYWRpc2hhL210dC11aS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLDRERWFhO0VGWmIsV0ViSTtBRGVSOztBREFBO0VBQ0ksV0FBQTtFQUNBLG1DQUFBO0VBQ0EsNERFT2E7QURKakI7O0FEQUE7RUFDSSxzQkV0Qkk7QUR5QlI7O0FERkk7RUFDSSxhQUFBO0VBRUEsY0FBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvdGFsZW50LXRlc3QvcGFwZXJzLW1lbnUtbGlzdC9wYXBlcnMtbWVudS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcbnVse1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxudWwgbGl7XG4gICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgdHJhbnNpdGlvbjogMC44cyBhbGw7XG59XG51bCBsaTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNlOWUxZTE7XG4gICAgYmFja2dyb3VuZDogJGJnR3JhZGllbnRDb2xvcjtcbiAgICBjb2xvcjogJHdoaXRlO1xufVxuLmFjdGl2ZXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2U5ZTFlMTtcbiAgICBiYWNrZ3JvdW5kOiAkYmdHcmFkaWVudENvbG9yO1xufVxuXG4ucGFwZXJzLWxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAmX193cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cbiIsInVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG51bCBsaSB7XG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xuICB0cmFuc2l0aW9uOiAwLjhzIGFsbDtcbn1cblxudWwgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCAjZTllMWUxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZTYzZmYgMCUsICM5NzMyYTMgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCAjZTllMWUxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZTYzZmYgMCUsICM5NzMyYTMgMTAwJSk7XG59XG5cbi5wYXBlcnMtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucGFwZXJzLWxpc3RfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIkd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kcHJpbWFyeUNvbG9yOiAjNmU2M2ZmO1xuJGJyYW5kUHJpbWFyeUNvbG9yOiAjMmEwYTBhO1xuJHdoaXRlU21va2VEYXJrOiNhZGFkYWQ7XG4kd2hpdGVTbW9rZTojRjJGMkYyO1xuJEVneXB0aWFuQmx1ZTojMTU1NThkMGQ7XG4kRG9kZ2VyQmx1ZTojMjE5NkYzO1xuJHdoaXRlU21va2VsaWdodDojZGFkYWRhO1xuJGJyYW5kU2Vjb25kYXJ5Q29sb3I6ICNmMjFiM2Y7XG4kcHJpbWFyeUhvdmVyOiAjOWE1NWZmMWE7XG4kbWFpbkJnQ29sb3I6ICNmMmVkZjM7XG4kc2hvd0NvbG9yOiAjMDAxZjQzO1xuJGVycm9yQ29sb3I6ICNkYzM1NDU7XG4kaW5kaWdvOiM5MjM4YWU7XG4kUGFuYWNoZS1ncmVlbjojRUVGQUVGO1xuJFB1cnB1bC13aGl0ZTojRTREREU2O1xuJGFsaWNlLWJsdWU6ICNFOUY3RkQ7XG4kZmxvcmFsLXdoaXRlOiNGRkY3RUE7XG4kZG9kZ2VyLWJsdWU6ICMxOTkxRUI7XG4kd2FybmluZy1jb2xvcjojRjc5ODFDO1xuJENoYWJsaXMtcmVkOiNGRUVCRUI7XG4kZXJyb3ItY29sb3I6ICNFRDFDMjQ7XG4kc3VjY2Vzcy1jb2w6ICMxQkI5MzQ7XG4kZGFyay1iZy1jb2xvcjogIzE5MWMyNDtcbiRiZ0dyYWRpZW50Q29sb3I6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmU2M2ZmIDAlLCAjOTczMmEzIDEwMCUpOyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PapersMenuListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-papers-menu-list',
          templateUrl: './papers-menu-list.component.html',
          styleUrls: ['./papers-menu-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        messageEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/talent-test/previous-papers/previous-papers.component.ts": function srcAppTalentTestPreviousPapersPreviousPapersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviousPapersComponent", function () {
      return PreviousPapersComponent;
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


    var _papers_menu_list_papers_menu_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../papers-menu-list/papers-menu-list.component */
    "./src/app/talent-test/papers-menu-list/papers-menu-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_event_tracker_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../directives/event-tracker.directive */
    "./src/app/directives/event-tracker.directive.ts");
    /* harmony import */


    var _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/numbers-only.directive */
    "./src/app/directives/numbers-only.directive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PreviousPapersComponent_div_3_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviousPapersComponent_div_3_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.showPractice(ctx_r6.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Practice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PreviousPapersComponent_div_3_div_6_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r10 + 1, ") ", ctx_r11.practiceQuestions[i_r10] == null ? null : ctx_r11.practiceQuestions[i_r10].ans, " ");
      }
    }

    function PreviousPapersComponent_div_3_div_6_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviousPapersComponent_div_3_div_6_ng_container_4_div_1_Template, 2, 2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r10 = ctx.index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.questions[i_r10]);
      }
    }

    function PreviousPapersComponent_div_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Answer Sheet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreviousPapersComponent_div_3_div_6_ng_container_4_Template, 2, 1, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ansSheets);
      }
    }

    function PreviousPapersComponent_div_3_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviousPapersComponent_div_3_ng_container_8_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.cancelForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviousPapersComponent_div_3_ng_container_8_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.submitForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PreviousPapersComponent_div_3_ng_container_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r17 = ctx.$implicit;
        var i_r18 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r18 + 1, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r17.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PreviousPapersComponent_div_3_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviousPapersComponent_div_3_ng_container_9_div_1_Template, 4, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.questions);
      }
    }

    function PreviousPapersComponent_div_3_ng_container_10_div_1_div_4_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only digits (0-9) are allowed here.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "previous-paper__wrong-answer": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "previous-paper__text-area--readonly": a0
      };
    };

    function PreviousPapersComponent_div_3_ng_container_10_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ans:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PreviousPapersComponent_div_3_ng_container_10_div_1_div_4_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return item_r20.ans = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PreviousPapersComponent_div_3_ng_container_10_div_1_div_4_span_7_Template, 2, 0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var item_r20 = ctx_r29.$implicit;
        var i_r21 = ctx_r29.index;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r22.isFormSubmitted && item_r20.ans != ctx_r22.correctAnswers[i_r21]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r20.ans)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r22.isFormSubmitted));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.errors == null ? null : _r24.errors.pattern);
      }
    }

    function PreviousPapersComponent_div_3_ng_container_10_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Correct Ans:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.correctAnswers[i_r21], "");
      }
    }

    function PreviousPapersComponent_div_3_ng_container_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreviousPapersComponent_div_3_ng_container_10_div_1_div_4_Template, 8, 8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreviousPapersComponent_div_3_ng_container_10_div_1_div_5_Template, 4, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r20 = ctx.$implicit;
        var i_r21 = ctx.index;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r21 + 1, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r20.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.showAns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isFormSubmitted && item_r20.ans != ctx_r19.correctAnswers[i_r21]);
      }
    }

    function PreviousPapersComponent_div_3_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviousPapersComponent_div_3_ng_container_10_div_1_Template, 6, 4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.practiceQuestions);
      }
    }

    function PreviousPapersComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreviousPapersComponent_div_3_button_5_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreviousPapersComponent_div_3_div_6_Template, 5, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PreviousPapersComponent_div_3_ng_container_8_Template, 5, 0, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PreviousPapersComponent_div_3_ng_container_9_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PreviousPapersComponent_div_3_ng_container_10_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showAns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showAns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showAns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showAns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showAns);
      }
    }

    var PreviousPapersComponent = /*#__PURE__*/function () {
      function PreviousPapersComponent(apiService) {
        _classCallCheck(this, PreviousPapersComponent);

        this.apiService = apiService;
        this.showAns = false;
        this.questions = [];
        this.practiceQuestions = [];
        this.ansSheets = [];
        this.correctAnswers = [];
        this.isFormSubmitted = false;
      }

      _createClass(PreviousPapersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelectTab",
        value: function onSelectTab($event) {
          this.data = $event;
          this.questions = this.data.questions;
          this.cancelForm();
        }
      }, {
        key: "showPractice",
        value: function showPractice(data) {
          var _this3 = this;

          this.showAns = true;
          this.practiceQuestions = [];

          try {
            this.apiService.showLoader.next(true);
            this.apiService.fetchQuestionsForPractice(data.value).subscribe(function (response) {
              _this3.apiService.showLoader.next(false);

              if (response && response.length) {
                var numberOfRows = Math.ceil(response.length / 3);
                _this3.ansSheets = new Array(numberOfRows * 3);
                _this3.practiceQuestions = response.map(function (val) {
                  return {
                    question: val,
                    ans: null
                  };
                });
              }
            }, function (error) {
              _this3.apiService.showLoader.next(false);

              if (error.error && error.error.message) {
                _this3.apiService.genericMessage(error.error.message || 'something went wrong', 'error');
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "clearFormAndClose",
        value: function clearFormAndClose() {
          this.showAns = false;
          this.practiceQuestions = this.practiceQuestions.map(function (val, index) {
            val.ans = null;
            return val;
          });
        }
      }, {
        key: "cancelForm",
        value: function cancelForm() {
          this.showAns = false;
          this.isFormSubmitted = false;
          this.ansSheets = [];
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this4 = this;

          var errorFields = document.querySelectorAll('.field-error-text');

          if (errorFields && errorFields.length) {
            this.apiService.genericMessage('Correct the errors and submit', 'error');
            return;
          }

          try {
            this.isFormSubmitted = true;
            this.apiService.showLoader.next(true);
            var payload = {};
            this.practiceQuestions.forEach(function (val, index) {
              payload[index + 1] = val.ans;
            });
            this.apiService.submitAnswers(payload, this.data.value).subscribe(function (response) {
              _this4.apiService.showLoader.next(false);

              _this4.apiService.genericMessage('Successfully submitted', 'success');

              if (response) {
                _this4.correctAnswers = response;
              }
            }, function (error) {
              _this4.apiService.showLoader.next(false);

              if (error.error && error.error.message) {
                _this4.apiService.genericMessage(error.error.message || 'something went wrong', 'error');
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }]);

      return PreviousPapersComponent;
    }();

    PreviousPapersComponent.ɵfac = function PreviousPapersComponent_Factory(t) {
      return new (t || PreviousPapersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    PreviousPapersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviousPapersComponent,
      selectors: [["app-previous-papers"]],
      decls: 4,
      vars: 1,
      consts: [[1, "mt-4", "previous-paper", "row"], [1, "previous-paper__tabs"], [3, "messageEvent"], ["class", "previous-paper__questions container position-relative border animated fadeInLeft", 4, "ngIf"], [1, "previous-paper__questions", "container", "position-relative", "border", "animated", "fadeInLeft"], [1, "d-flex", "justify-content-between", "align-items-center", "px-3", "pt-2"], [1, "primary-color", "f-22"], ["class", "my-btn my-btn-primary", "appEventTracker", "", 3, "click", 4, "ngIf"], ["class", "previous-paper__answers", 4, "ngIf"], [1, "text-right", "my-3"], [4, "ngIf"], ["appEventTracker", "", 1, "my-btn", "my-btn-primary", 3, "click"], [1, "previous-paper__answers"], [1, "text-center"], [1, "previous-paper__answers-table", "row", "m-0"], [4, "ngFor", "ngForOf"], ["class", "col-6 col-sm-4 previous-paper__answers-column", 4, "ngIf"], [1, "col-6", "col-sm-4", "previous-paper__answers-column"], [1, "m-r-8", "my-btn", "cancel-btn", 3, "click"], [1, "my-btn", "my-btn-primary", 3, "click"], ["class", "pl-3 pf-14", 4, "ngFor", "ngForOf"], [1, "pl-3", "pf-14"], [3, "innerHtml"], [3, "ngClass", 4, "ngIf"], ["class", "previous-paper__correct-answer", 4, "ngIf"], [3, "ngClass"], [1, "d-flex"], ["type", "text", "numbersOnly", "", "pattern", "^[0-9]+$", 1, "form-control", "w-75", "ml-2", "previous-paper__text-area", 3, "ngModel", "ngClass", "ngModelChange"], ["question1", "ngModel"], [1, "field-error", "m-0", "pl-5", "pb-2"], ["class", "field-error-text", 4, "ngIf"], [1, "field-error-text"], [1, "previous-paper__correct-answer"]],
      template: function PreviousPapersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-papers-menu-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("messageEvent", function PreviousPapersComponent_Template_app_papers_menu_list_messageEvent_2_listener($event) {
            return ctx.onSelectTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviousPapersComponent_div_3_Template, 11, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.value);
        }
      },
      directives: [_papers_menu_list_papers_menu_list_component__WEBPACK_IMPORTED_MODULE_2__["PapersMenuListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _directives_event_tracker_directive__WEBPACK_IMPORTED_MODULE_4__["EventTrackerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".previous-paper__tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.previous-paper__answers-table[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n.previous-paper__answers-column[_ngcontent-%COMP%] {\n  padding: 0.625rem;\n}\n.previous-paper__text-area[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #6e63ff !important;\n  margin-bottom: 10px;\n  outline: none;\n  resize: none;\n}\n.previous-paper__text-area--readonly[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.previous-paper__text-area[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.previous-paper__wrong-answer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545 !important;\n}\n.previous-paper__correct-answer[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-style: italic;\n  color: #6e63ff;\n  margin-left: 32px;\n  margin-bottom: 10px;\n}\n.ng-dirty.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #ED1C24 !important;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #ED1C24;\n  font-size: 12px;\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvdGFsZW50LXRlc3QvcHJldmlvdXMtcGFwZXJzL3ByZXZpb3VzLXBhcGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFsZW50LXRlc3QvcHJldmlvdXMtcGFwZXJzL3ByZXZpb3VzLXBhcGVycy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxXQUFBO0FDRFI7QURHSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdJO0VBQ0ksaUJBQUE7QUNEUjtBREdJO0VBRUksMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRlI7QURHUTtFQUNJLG9CQUFBO0FDRFo7QURJUTtFQUNJLGFBQUE7QUNGWjtBRE1RO0VBQ0ksb0NBQUE7QUNKWjtBRE9LO0VBQ0csaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNFaENPO0VGaUNQLGlCQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRFNBO0VBQ0ksZ0NBQUE7QUNOSjtBRFNBO0VBQ0ksY0V2QlU7RUZ3QlYsZUFBQTtFQUNBLGdCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC90YWxlbnQtdGVzdC9wcmV2aW91cy1wYXBlcnMvcHJldmlvdXMtcGFwZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuLnByZXZpb3VzLXBhcGVyIHtcbiAgICAmX190YWJzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICZfX2Fuc3dlcnMtdGFibGUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICAgICZfX2Fuc3dlcnMtY29sdW1uIHtcbiAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgfVxuICAgICZfX3RleHQtYXJlYXtcblxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHByaW1hcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICYtLXJlYWRvbmx5IHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX3dyb25nLWFuc3dlciB7XG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRlcnJvckNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICZfX2NvcnJlY3QtYW5zd2VyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICB9XG59XG5cbi5uZy1kaXJ0eS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAgIGJvcmRlci1jb2xvcjogJGVycm9yLWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5maWVsZC1lcnJvciB7XG4gICAgY29sb3I6ICRlcnJvci1jb2xvcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cbiIsIi5wcmV2aW91cy1wYXBlcl9fdGFicyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpb3VzLXBhcGVyX19hbnN3ZXJzLXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnByZXZpb3VzLXBhcGVyX19hbnN3ZXJzLWNvbHVtbiB7XG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xufVxuLnByZXZpb3VzLXBhcGVyX190ZXh0LWFyZWEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZlNjNmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG59XG4ucHJldmlvdXMtcGFwZXJfX3RleHQtYXJlYS0tcmVhZG9ubHkge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wcmV2aW91cy1wYXBlcl9fdGV4dC1hcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wcmV2aW91cy1wYXBlcl9fd3JvbmctYW5zd2VyIHRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuLnByZXZpb3VzLXBhcGVyX19jb3JyZWN0LWFuc3dlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNmU2M2ZmO1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm5nLWRpcnR5Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1jb2xvcjogI0VEMUMyNCAhaW1wb3J0YW50O1xufVxuXG4uZmllbGQtZXJyb3Ige1xuICBjb2xvcjogI0VEMUMyNDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufSIsIiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDtcbiRwcmltYXJ5Q29sb3I6ICM2ZTYzZmY7XG4kYnJhbmRQcmltYXJ5Q29sb3I6ICMyYTBhMGE7XG4kd2hpdGVTbW9rZURhcms6I2FkYWRhZDtcbiR3aGl0ZVNtb2tlOiNGMkYyRjI7XG4kRWd5cHRpYW5CbHVlOiMxNTU1OGQwZDtcbiREb2RnZXJCbHVlOiMyMTk2RjM7XG4kd2hpdGVTbW9rZWxpZ2h0OiNkYWRhZGE7XG4kYnJhbmRTZWNvbmRhcnlDb2xvcjogI2YyMWIzZjtcbiRwcmltYXJ5SG92ZXI6ICM5YTU1ZmYxYTtcbiRtYWluQmdDb2xvcjogI2YyZWRmMztcbiRzaG93Q29sb3I6ICMwMDFmNDM7XG4kZXJyb3JDb2xvcjogI2RjMzU0NTtcbiRpbmRpZ286IzkyMzhhZTtcbiRQYW5hY2hlLWdyZWVuOiNFRUZBRUY7XG4kUHVycHVsLXdoaXRlOiNFNERERTY7XG4kYWxpY2UtYmx1ZTogI0U5RjdGRDtcbiRmbG9yYWwtd2hpdGU6I0ZGRjdFQTtcbiRkb2RnZXItYmx1ZTogIzE5OTFFQjtcbiR3YXJuaW5nLWNvbG9yOiNGNzk4MUM7XG4kQ2hhYmxpcy1yZWQ6I0ZFRUJFQjtcbiRlcnJvci1jb2xvcjogI0VEMUMyNDtcbiRzdWNjZXNzLWNvbDogIzFCQjkzNDtcbiRkYXJrLWJnLWNvbG9yOiAjMTkxYzI0O1xuJGJnR3JhZGllbnRDb2xvcjpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZTYzZmYgMCUsICM5NzMyYTMgMTAwJSk7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviousPapersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-previous-papers',
          templateUrl: './previous-papers.component.html',
          styleUrls: ['./previous-papers.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/talent-test/registration/registration.component.ts": function srcAppTalentTestRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent() {
        _classCallCheck(this, RegistrationComponent);
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)();
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 21,
      vars: 0,
      consts: [[1, "container-fluid", "text-center"], [1, "mt-4"], ["href", "https://docs.google.com/forms/d/14JScO7iDsNwoJ4_gJXeO4v27lUNhYMhH95Pr1oqi-LU", "rel", "noopener noreferrer", "target", "_blank", 1, "theme-color"], ["href", "https://docs.google.com/forms/d/1VLR2URxi25azZzEk6Hbui3nApFr7JXVEJkrJf7HwdJM", "rel", "noopener noreferrer", "target", "_blank", 1, "theme-color"], [1, "note"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please fill in and submit the following form to register your school:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "School Registration Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Please fill in and submit the following form to register as a student: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Student Registration Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Note: If you are part of any of the Finalized Centers found in the bottom, you do not have to register.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Point of Contact: Praveen @ +91-9550895968 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Centers Finalized So Far ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container-fluid[_ngcontent-%COMP%]   .theme-color[_ngcontent-%COMP%] {\n  color: #1991EB;\n}\n.container-fluid[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  color: #ED1C24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvdGFsZW50LXRlc3QvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3RhbGVudC10ZXN0L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxjQ2dCTTtBQ2pCZDtBRkdJO0VBQ0ksY0NnQk07QUNqQmQiLCJmaWxlIjoic3JjL2FwcC90YWxlbnQtdGVzdC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuLmNvbnRhaW5lci1mbHVpZHtcbiAgICAudGhlbWUtY29sb3J7XG4gICAgICAgIGNvbG9yOiAkZG9kZ2VyLWJsdWU7XG4gICAgfVxuICAgIC5ub3Rle1xuICAgICAgICBjb2xvcjokZXJyb3ItY29sb3I7XG4gICAgfVxufSIsIiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDtcbiRwcmltYXJ5Q29sb3I6ICM2ZTYzZmY7XG4kYnJhbmRQcmltYXJ5Q29sb3I6ICMyYTBhMGE7XG4kd2hpdGVTbW9rZURhcms6I2FkYWRhZDtcbiR3aGl0ZVNtb2tlOiNGMkYyRjI7XG4kRWd5cHRpYW5CbHVlOiMxNTU1OGQwZDtcbiREb2RnZXJCbHVlOiMyMTk2RjM7XG4kd2hpdGVTbW9rZWxpZ2h0OiNkYWRhZGE7XG4kYnJhbmRTZWNvbmRhcnlDb2xvcjogI2YyMWIzZjtcbiRwcmltYXJ5SG92ZXI6ICM5YTU1ZmYxYTtcbiRtYWluQmdDb2xvcjogI2YyZWRmMztcbiRzaG93Q29sb3I6ICMwMDFmNDM7XG4kZXJyb3JDb2xvcjogI2RjMzU0NTtcbiRpbmRpZ286IzkyMzhhZTtcbiRQYW5hY2hlLWdyZWVuOiNFRUZBRUY7XG4kUHVycHVsLXdoaXRlOiNFNERERTY7XG4kYWxpY2UtYmx1ZTogI0U5RjdGRDtcbiRmbG9yYWwtd2hpdGU6I0ZGRjdFQTtcbiRkb2RnZXItYmx1ZTogIzE5OTFFQjtcbiR3YXJuaW5nLWNvbG9yOiNGNzk4MUM7XG4kQ2hhYmxpcy1yZWQ6I0ZFRUJFQjtcbiRlcnJvci1jb2xvcjogI0VEMUMyNDtcbiRzdWNjZXNzLWNvbDogIzFCQjkzNDtcbiRkYXJrLWJnLWNvbG9yOiAjMTkxYzI0O1xuJGJnR3JhZGllbnRDb2xvcjpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZTYzZmYgMCUsICM5NzMyYTMgMTAwJSk7IiwiLmNvbnRhaW5lci1mbHVpZCAudGhlbWUtY29sb3Ige1xuICBjb2xvcjogIzE5OTFFQjtcbn1cbi5jb250YWluZXItZmx1aWQgLm5vdGUge1xuICBjb2xvcjogI0VEMUMyNDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/talent-test/talent-test.module.ts": function srcAppTalentTestTalentTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TalentTestModule", function () {
      return TalentTestModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _telent_test_wrapper_telent_test_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./telent-test-wrapper/telent-test-wrapper.component */
    "./src/app/talent-test/telent-test-wrapper/telent-test-wrapper.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/talent-test/notifications/notifications.component.ts");
    /* harmony import */


    var _previous_papers_previous_papers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./previous-papers/previous-papers.component */
    "./src/app/talent-test/previous-papers/previous-papers.component.ts");
    /* harmony import */


    var _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./final-results/final-results.component */
    "./src/app/talent-test/final-results/final-results.component.ts");
    /* harmony import */


    var _papers_menu_list_papers_menu_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./papers-menu-list/papers-menu-list.component */
    "./src/app/talent-test/papers-menu-list/papers-menu-list.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/talent-test/registration/registration.component.ts");

    var routes = [{
      path: '',
      component: _telent_test_wrapper_telent_test_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["TalentTestWrapperComponent"],
      children: [{
        path: 'notifications',
        component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"],
        data: {
          title: 'Notifications',
          description: ' Notifications',
          keywords: 'Sadisha,Right Direction, NGO, Notifications, Math Talent Test, Free Intermediate Education, ZP schools, Government schools, TSMS, ZPHS'
        }
      }, {
        path: 'register',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"]
      }, {
        path: 'previous-papers',
        component: _previous_papers_previous_papers_component__WEBPACK_IMPORTED_MODULE_6__["PreviousPapersComponent"],
        data: {
          title: 'Previous Papers',
          description: ' Previous year papers and practice tests',
          keywords: 'Sadisha,Right Direction, NGO, Previous Papers, Practice Tests, Previous year papers, math, mathematics, aptitude, problems, 10th grade, high school, puzzles'
        }
      }, {
        path: 'previous-papers/:paper',
        component: _previous_papers_previous_papers_component__WEBPACK_IMPORTED_MODULE_6__["PreviousPapersComponent"],
        data: {
          title: 'Previous Papers',
          description: ' Previous year papers and practice tests',
          keywords: 'Sadisha,Right Direction, NGO, Previous Papers, Practice Tests, Previous year papers, math, mathematics, aptitude, problems, 10th grade, high school, puzzles'
        }
      }, {
        path: 'final-results',
        component: _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_7__["FinalResultsComponent"],
        data: {
          title: 'Final Results',
          description: ' Final results of previous year paper',
          keywords: 'Sadisha,Right Direction, NGO, Final Results, Students,  Math Talent Test, 2021, Karimnagar, Warangal, Khammam, Nanded'
        }
      }, {
        path: '**',
        redirectTo: 'previous-papers',
        pathMatch: 'full'
      }]
    }];

    var TalentTestModule = function TalentTestModule() {
      _classCallCheck(this, TalentTestModule);
    };

    TalentTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TalentTestModule
    });
    TalentTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TalentTestModule_Factory(t) {
        return new (t || TalentTestModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TalentTestModule, {
        declarations: [_telent_test_wrapper_telent_test_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["TalentTestWrapperComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], _previous_papers_previous_papers_component__WEBPACK_IMPORTED_MODULE_6__["PreviousPapersComponent"], _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_7__["FinalResultsComponent"], _papers_menu_list_papers_menu_list_component__WEBPACK_IMPORTED_MODULE_8__["PapersMenuListComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalentTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_telent_test_wrapper_telent_test_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["TalentTestWrapperComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], _previous_papers_previous_papers_component__WEBPACK_IMPORTED_MODULE_6__["PreviousPapersComponent"], _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_7__["FinalResultsComponent"], _papers_menu_list_papers_menu_list_component__WEBPACK_IMPORTED_MODULE_8__["PapersMenuListComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/talent-test/telent-test-wrapper/telent-test-wrapper.component.ts": function srcAppTalentTestTelentTestWrapperTelentTestWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TalentTestWrapperComponent", function () {
      return TalentTestWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/hero-image/hero-image.component */
    "./src/app/shared/hero-image/hero-image.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/talent-test/notifications"];
    };

    var _c1 = function _c1() {
      return ["/talent-test/previous-papers"];
    };

    var _c2 = function _c2() {
      return ["/talent-test/final-results"];
    };

    var TalentTestWrapperComponent = /*#__PURE__*/function () {
      function TalentTestWrapperComponent() {
        _classCallCheck(this, TalentTestWrapperComponent);
      }

      _createClass(TalentTestWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TalentTestWrapperComponent;
    }();

    TalentTestWrapperComponent.ɵfac = function TalentTestWrapperComponent_Factory(t) {
      return new (t || TalentTestWrapperComponent)();
    };

    TalentTestWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TalentTestWrapperComponent,
      selectors: [["app-telent-test-wrapper"]],
      decls: 14,
      vars: 8,
      consts: [[3, "heading", "bgImageClass"], [1, "talent-test", "bg-white", "pt-3"], [1, "container-fluid", "p-0"], [1, "d-flex", "justify-content-center", "custom-tabs", "m-b-16", "animated", "fadeInRight"], [1, "list-unstyled", "d-flex"], ["routerLinkActive", "active", 3, "routerLink"]],
      template: function TalentTestWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero-image", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Previous Papers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Final Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Sadisha Maths Talent Test Notifications, Practice papers and Results")("bgImageClass", "talent-test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        }
      },
      directives: [_shared_hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_1__["HeroImageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["@media screen and (max-width: 767px) {\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px !important;\n    white-space: nowrap;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvdGFsZW50LXRlc3QvdGVsZW50LXRlc3Qtd3JhcHBlci90ZWxlbnQtdGVzdC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWxlbnQtdGVzdC90ZWxlbnQtdGVzdC13cmFwcGVyL3RlbGVudC10ZXN0LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUTtJQUNJLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VDQVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhbGVudC10ZXN0L3RlbGVudC10ZXN0LXdyYXBwZXIvdGVsZW50LXRlc3Qtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgIHVse1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICB1bCBsaSB7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalentTestWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-telent-test-wrapper',
          templateUrl: './telent-test-wrapper.component.html',
          styleUrls: ['./telent-test-wrapper.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=talent-test-talent-test-module-es5.js.map