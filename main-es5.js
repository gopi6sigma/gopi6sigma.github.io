function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.constant.ts": function srcAppApiConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONSTANTS", function () {
      return CONSTANTS;
    });

    var CONSTANTS = {
      //BASE_URL: "https://sadisha-be2.el.r.appspot.com",
      BASE_URL: "http://localhost:8080",
      QUESTION_PAPERS: "5ec89bb82f0000d244db705a",
      FETCH_QUESTIONS: "contests/blah",
      QUESTIONS: "questionPaper",
      SUBMIT: "submission",
      LOGIN: "login",
      FORGOT_PSW: "forgotCreds",
      ANSWER_PAPER: "answerPaper",
      ANSWERS_BY_USER: "answers?userName=",
      ANSWER_PAPERS_BY_STATUS: "answerPapersStatus?pendingStatus=",
      ANSWER_PAPERS_BY_STATUS_BY_USER: "answerPapersStatusByUser?userName=",
      SCHOOLS: "schools",
      STUDENTS: "students",
      GET_STUDENT: "student",
      REGISTER_VOLUNTEER: "volunteerRegister",
      COMPUTE_FINAL_RESULTS: "computeFinalResults",
      GALLERY: "gallery",
      GALLERY_EDIT: "galleryEdit",
      USERS: "users",
      ZONES: "zones",
      STUDENTS_STATS: "studentsMap",
      UPLOAD_PHOTO: "uploadPhoto",
      UPLOAD_PAPER: "uploadPaperUsingSignedUrl",
      RESULTS_FLAG: "true",
      EXAM_CENTERS: "exam-centers",
      COMPUTE_STATS: "compute",
      RESULTS_SYNC: "resultsSync"
    };
    /***/
  },

  /***/
  "./src/app/api.service.ts": function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.constant */
    "./src/app/api.constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient, router, cookieService) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.router = router;
        this.cookieService = cookieService;
        this.baseUrl = "";
        this.rolesList = [];
        this.dummyStudents = [{
          Name: "GOVARDHAN POLIMERA",
          parentName: "SRINIVAS",
          school: "ZPHS REDDYPALEM, GUNTUR",
          rankinOpenCategory: 1
        }, {
          Name: "SANDEEP GODUGU",
          parentName: "KRISHNAMURTHY",
          school: "TSMS THIRUMALGIRI, SURYAPET",
          rankinOpenCategory: 2
        }, {
          Name: "SK SHAHIN",
          parentName: "ALLAUDDIN",
          school: "ZPHS SIRIPURAM, SURYAPET",
          rankinOpenCategory: 4
        }, {
          Name: "SATWIKA VARALA",
          parentName: "MALLESHAM",
          school: "TSMS ELGANDHAL, KARIMNAGAR",
          rankinOpenCategory: 5
        }, {
          Name: "SAI SRI KALVA",
          parentName: "BALARAJU",
          school: "ZPHS GIRLS SIRICILLA, KARIMNAGAR",
          rankinOpenCategory: 7
        }, {
          Name: "SAI KRISHNA P",
          parentName: "RAJU",
          school: "ZPHS NIMMAPALLI, KARIMNAGAR",
          rankinOpenCategory: 8
        }, {
          Name: "SAI RAJ NUNE",
          parentName: "POORNACHANDAR",
          school: "ZPHS MALLAMPALLI, WARANGAL",
          rankinOpenCategory: 8
        }, {
          Name: "RAKSHITH S",
          parentName: "RAMASWAMY",
          school: "TSMS ELGANDHAL, KARIMNAGAR",
          rankinOpenCategory: 10
        }, {
          Name: "TRINESH T",
          parentName: "RAJENDAR",
          school: "TSMS ELGANDHAL, KARIMNAGAR",
          rankinOpenCategory: 11
        }, {
          Name: "HARSHA PALOJU",
          parentName: "SRINIVAS",
          school: "TSMS ELGANDHAL, KARIMNAGAR",
          rankinOpenCategory: 12
        }, {
          Name: "BAJARANG VILAS SHAHAPURE",
          parentName: "VILAS SHAHAPURE",
          school: "ZPHS KUNTUR, NANDED",
          rankinOpenCategory: 12
        }, {
          Name: "SRIVIDYA PONNAM",
          parentName: "THIRUPATHI",
          school: "ZPHS KOTHAPALLI, KARIMNAGAR",
          rankinOpenCategory: 14
        }, {
          Name: "NUSRATH SHAIK",
          parentName: "SAIDULU",
          school: "ZPHS SIRIKONDA, SURYAPET",
          rankinOpenCategory: 15
        }, {
          Name: "HAREESH THUNIKIPATI",
          parentName: "SOMAIAH",
          school: "TSMS TIRUMALGIRI",
          rankinOpenCategory: 15
        }, {
          Name: "YAKSHENDRA KUMAR",
          parentName: "KSHEERA SAGAR",
          school: "GOVT HIGH SCHOOL, SURYAPET",
          rankinOpenCategory: 17
        }, {
          Name: "LAVANYA GOUDA",
          parentName: "MAHESH",
          school: "ZPHS KOTHAPALLY, KARIMNAGAR",
          rankinOpenCategory: 18
        }, {
          Name: "AKSHAYA B",
          parentName: "SANJEEV",
          school: "ZPHS SAVARAN, KARIMNAGAR",
          rankinOpenCategory: 19
        }, {
          Name: "Swarnapriya Konjarla",
          parentName: "Srinivas",
          school: "ZPHS GIRLS JULAPALLI, KNR",
          rankinOpenCategory: 20
        }, {
          Name: "HARICHANDANA T",
          parentName: "SWARNALATHA",
          school: "TSMS CHIGURUMAMIDI",
          rankinOpenCategory: 21
        }, {
          Name: "AJAY DARLA",
          parentName: "DANAIAH",
          school: "ZPHS MELACHERUVU, SURYAPET",
          rankinOpenCategory: 23
        }, {
          Name: "SHASHIDHAR BURGULA",
          parentName: "NAGASURENDAR",
          school: "SRRMGH BANIGANDLAPADU",
          rankinOpenCategory: 24
        }, {
          Name: "VENKATESH B",
          parentName: "SRINU",
          school: "ZPHS GHS MADHIRA, KHAMMAM",
          rankinOpenCategory: 25
        }, {
          Name: "RISHIT CH",
          parentName: "JYOTHI",
          school: "GHS RECO BAZAR",
          rankinOpenCategory: 26
        }, {
          Name: "AJAY R",
          parentName: "RAMESH R",
          school: "GHS OLD JAGITIAL",
          rankinOpenCategory: 26
        }, {
          Name: "SPOORTHI EPPANAPALLY",
          parentName: "SHANKAR",
          school: "ZPHS GIRLS JULAPALLI, KNR",
          rankinOpenCategory: 26
        }, {
          Name: "AKSHITHA POLAGANI",
          parentName: "RAJU",
          school: "ZPHS GIRLS JULAPALLI, KNR",
          rankinOpenCategory: 26
        }, {
          Name: "HARSHA B",
          parentName: "GABBAR B",
          school: "GHS RECO BAZAR",
          rankinOpenCategory: 26
        }, {
          Name: "RAMCHARAN P",
          parentName: "RAJU",
          school: "ZPHS SHANIGARAM",
          rankinOpenCategory: 26
        }, {
          Name: "HARINI LINGALA",
          parentName: "SARITHA",
          school: "ZPHS JANGAPALLY, KNR",
          rankinOpenCategory: 32
        }, {
          Name: "SATYA TANNEERU",
          parentName: "SRINVAS",
          school: "TSMS IMAMPET",
          rankinOpenCategory: 33
        }, {
          Name: "MAHESHWAR",
          parentName: "SEETHARAM",
          school: "SRRMGH BANIGANDLAPADU",
          rankinOpenCategory: 32
        }, {
          Name: "VARUN MARAM",
          parentName: "PITCHI",
          school: "TSMS MATTAMPALLY",
          rankinOpenCategory: 34
        }, {
          Name: "ASHIWITHA A",
          parentName: "RAGHUPATHI",
          school: "TSMS ELGANDAL",
          rankinOpenCategory: 34
        }, {
          Name: "MANISHWAR MYANA",
          parentName: "SATHYANARAYANA",
          school: "ZPHS NIMMAPALLI",
          rankinOpenCategory: 37
        }, {
          Name: "SRIVALLI GALIPALLY",
          parentName: "MAHESH",
          school: "TSMS ELGANDAL",
          rankinOpenCategory: 37
        }, {
          Name: "SREENITH LEKKALA",
          parentName: "VANI LAXMAN",
          school: "ZPHS MALLAMPALLY, WGL",
          rankinOpenCategory: 39
        }, {
          Name: "KARUNAKAR S",
          parentName: "ASHOK S",
          school: "GHS DHANGARWADI",
          rankinOpenCategory: 39
        }, {
          Name: "BALA VENKATA SAI N",
          parentName: "RAMESH",
          school: "ZPHS LINGANNAPET",
          rankinOpenCategory: 39
        }, {
          Name: "SIDHARTHA RAMADUGU",
          parentName: "MALLIAH",
          school: "TSMS RUKMAPUR",
          rankinOpenCategory: 39
        }, {
          Name: "PRAVALLIKA VEERABATHINI",
          parentName: "MAHESH",
          school: "ZPHS GIRLS SIRICILLA",
          rankinOpenCategory: 43
        }, {
          Name: "MANITHEJA KOTTINTI",
          parentName: "GANGADHAR",
          school: "ZPHS YELLAREDDYPET",
          rankinOpenCategory: 43
        }, {
          Name: "SAI SRINIJA",
          parentName: "KISHTASWAMY",
          school: "ZPHS JANGAPALLY, KNR",
          rankinOpenCategory: 45
        }, {
          Name: "PRITHVI GUGULOTHU",
          parentName: "KALRAM",
          school: "ZPHS SURYAPET",
          rankinOpenCategory: 46
        }, {
          Name: "VANITHA VARA",
          parentName: "SURIBABU",
          school: "ZPSS GOVINDAPURAM",
          rankinOpenCategory: 47
        }, {
          Name: "ASHOK BATHINI",
          parentName: "GANGARAJU",
          school: "ZPHS KOTHAPALLY",
          rankinOpenCategory: 48
        }, {
          Name: "SHIVAKUMAR SAINI",
          parentName: "RAVINDAR",
          school: "TSMS ELGANDAL",
          rankinOpenCategory: 48
        }, {
          Name: "JAYANDEEP g",
          parentName: "GOPINATH",
          school: "ZPSS PANDURANGAPURAM, KHAMMAM",
          rankinOpenCategory: 51
        }, {
          Name: "PUJITA VIKKURTI",
          parentName: "SATTAYYA",
          school: "ZPHS NIMMAPALLI",
          rankinOpenCategory: 53
        }, {
          Name: "VAISHNAVI KATTAM",
          parentName: "HANUMANTHA REDDY",
          school: "TSMS CHIGURUMAMIDI",
          rankinOpenCategory: 53
        }, {
          Name: "GOPINADH TELUKUNDI",
          parentName: "PERAIAH",
          school: "ZPHS CHILUKURU",
          rankinOpenCategory: 55
        }, {
          Name: "AKSHITH MUNIGALA",
          parentName: "KONDAYYA",
          school: "TSMS ELGANDAL",
          rankinOpenCategory: 55
        }, {
          Name: "AKSHAYA EERLA",
          parentName: "SHANKARAYYA EERLA",
          school: "ZPHS RAGAMPET",
          rankinOpenCategory: 55
        }, {
          Name: "ZAKIR SK",
          parentName: "MAHBOOB SUBHANI",
          school: "ZPSS GANDHASIRI, KMM",
          rankinOpenCategory: 58
        }, {
          Name: "NARENDAR MADDULA",
          parentName: "SATYANARAYANA",
          school: "TSMS MATTAMPALLI, SURYAPET",
          rankinOpenCategory: 58
        }, {
          Name: "SAIDEEP T",
          parentName: "VENKATALAXMI",
          school: "ZPSS PANDURANGAPURAM, KMM",
          rankinOpenCategory: 60
        }, {
          Name: "BHANU G",
          parentName: "SADAIAH",
          school: "ZPHS MALLAMPALLI, WGL",
          rankinOpenCategory: 61
        }, {
          Name: "MANOJ KADEM",
          parentName: "ASHOK",
          school: "ZPHS GIRLS SIRICILLA",
          rankinOpenCategory: 63
        }, {
          Name: "BHAURAO NARAYAN PUYAD",
          parentName: "NARAYAN",
          school: "ZPHS VISHNUPURI, NANDED",
          rankinOpenCategory: 63
        }, {
          Name: "GUDE YAMINI",
          parentName: "RAMESH",
          school: "ZPHS KANDUKURU",
          rankinOpenCategory: 65
        }, {
          Name: "SRINIVAS BANDARI",
          parentName: "SAMPATH",
          school: "TSMS CHIGURUMAMIDI",
          rankinOpenCategory: 65
        }, {
          Name: "HEMANTH V",
          parentName: "SHANKAR",
          school: "ZPSS PANDURANGAPURAM, KMM",
          rankinOpenCategory: 67
        }, {
          Name: "KRISHNANJALI ELUGUM",
          parentName: "KOMALA",
          school: "TSMS ELGANDHAL",
          rankinOpenCategory: 68
        }];
        this.managerDeptId = "";
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
        this.internalNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showLoader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sideNavOpened = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.token = "";
        this.role = "";
        this.allRoles = [];
        this.userDetails = {};
        this.loggedInUserId = "";
        this.nextAttemptNumber = null;
        this.baseUrl = _api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].BASE_URL;
        var attemptNumber = this.cookieService.get("attemptNumber") || 0;
        this.cookieService.set("attemptNumber", String(Number(attemptNumber) + 1));
        this.token = localStorage.getItem("auth_token");
        this.role = localStorage.getItem("role");
        this.userDetails = JSON.parse(localStorage.getItem("adminUser") || "{}");
        this.allRoles = JSON.parse(localStorage.getItem("allRoles") || "[]");
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            auth_token: this.token
          })
        };
      }

      _createClass(ApiService, [{
        key: "setToken",
        value: function setToken(token) {
          this.token = token;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
        }
      }, {
        key: "setRole",
        value: function setRole(role) {
          this.role = role;
        }
      }, {
        key: "getRole",
        value: function getRole() {
          return this.role;
        }
      }, {
        key: "setAllRole",
        value: function setAllRole(allRoles) {
          this.allRoles = allRoles;
        }
      }, {
        key: "getAllRoles",
        value: function getAllRoles() {
          return this.allRoles;
        }
      }, {
        key: "setUserDetails",
        value: function setUserDetails() {
          var userDetails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.userDetails = userDetails;
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          return this.userDetails;
        }
      }, {
        key: "getUUID",
        value: function getUUID() {
          // http://www.ietf.org/rfc/rfc4122.txt
          var s = [];
          var hexDigits = "0123456789abcdef";

          for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
          }

          s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010

          s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

          s[8] = s[13] = s[18] = s[23] = "-";
          var uuid = s.join("");
          return uuid;
        }
      }, {
        key: "login",
        value: function login(payload) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].LOGIN);
          return this.httpClient.post(apiUrl, payload, _objectSpread(_objectSpread({}, this.httpOptions), {
            responseType: "text",
            observe: "response"
          }));
        }
      }, {
        key: "forgotPsw",
        value: function forgotPsw(phone) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].FORGOT_PSW, "?phoneNumber=").concat(phone);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "fetchQuestionPapers",
        value: function fetchQuestionPapers() {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].FETCH_QUESTIONS);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "getAnswerPaper",
        value: function getAnswerPaper() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ANSWER_PAPER);
          return this.httpClient.get(apiUrl, _objectSpread(_objectSpread({}, httpOptions), {
            responseType: "text",
            observe: "response"
          }));
        }
      }, {
        key: "getAllAnswerPaper",
        value: function getAllAnswerPaper() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ANSWER_PAPER, "s");
          return this.httpClient.get(apiUrl, _objectSpread(_objectSpread({}, httpOptions), {
            responseType: "text",
            observe: "response"
          }));
        }
      }, {
        key: "submitAnswerPaper",
        value: function submitAnswerPaper(payload) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ANSWER_PAPER);
          return this.httpClient.post(apiUrl, payload, _objectSpread(_objectSpread({}, httpOptions), {
            responseType: "text",
            observe: "response"
          }));
        }
      }, {
        key: "fetchQuestionsForPractice",
        value: function fetchQuestionsForPractice(contestId) {
          var prevAttemptNumber = this.cookieService.get("attemptNumber") || 0;
          this.nextAttemptNumber = String(Number(prevAttemptNumber) + 1);
          this.cookieService.set("attemptNumber", this.nextAttemptNumber);
          var studentId = this.cookieService.get("studentId");
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].QUESTIONS, "/").concat(studentId, "/").concat(contestId, "/").concat(this.nextAttemptNumber);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "fetchPapersBasedOnStatus",
        value: function fetchPapersBasedOnStatus(status) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ANSWER_PAPERS_BY_STATUS).concat(status);
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "fetchPapersBasedOnUser",
        value: function fetchPapersBasedOnUser(user) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ANSWER_PAPERS_BY_STATUS_BY_USER).concat(user);
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "deletePapers",
        value: function deletePapers(url, status) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ANSWER_PAPER, "?imageUrl=").concat(url, "&pendingStatus=").concat(status);
          return this.httpClient["delete"](apiUrl, httpOptions);
        }
      }, {
        key: "submitAnswers",
        value: function submitAnswers(payload, contestId) {
          var studentId = this.cookieService.get("studentId");
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].SUBMIT, "/").concat(studentId, "/").concat(contestId, "/").concat(this.nextAttemptNumber);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.post(apiUrl, payload, httpOptions);
        } // Student registration

      }, {
        key: "getListOfSchools",
        value: function getListOfSchools() {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].SCHOOLS);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "getListOfExamCenters",
        value: function getListOfExamCenters() {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].EXAM_CENTERS);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "getRandomStudent",
        value: function getRandomStudent() {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GET_STUDENT);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "getAllStudents",
        value: function getAllStudents() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].STUDENTS), httpOptions);
        }
      }, {
        key: "getStudentsStats",
        value: function getStudentsStats() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].STUDENTS_STATS), httpOptions);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].USERS), httpOptions);
        }
      }, {
        key: "getFinalResults",
        value: function getFinalResults() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.get("".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].RESULTS_SYNC), httpOptions);
        }
      }, {
        key: "updateUserRoles",
        value: function updateUserRoles(userId, payload) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].USERS, "?userName=").concat(userId);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.put(apiUrl, payload, httpOptions);
        }
      }, {
        key: "getStudentDetails",
        value: function getStudentDetails(studentId) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GET_STUDENT, "/").concat(studentId);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "computeStats",
        value: function computeStats() {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].COMPUTE_STATS);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(userName) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GET_STUDENT, "/?userName=").concat(userName);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient["delete"](apiUrl, httpOptions);
        }
      }, {
        key: "clearStudentAns",
        value: function clearStudentAns(userName) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ANSWERS_BY_USER).concat(userName);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.post(apiUrl, userName, httpOptions);
        }
      }, {
        key: "studentRegistration",
        value: function studentRegistration(payload) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].STUDENTS);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.post(apiUrl, payload, httpOptions);
        } // Gallery

      }, {
        key: "addStudentImage",
        value: function addStudentImage(payload, id) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].UPLOAD_PHOTO, "/").concat(id); // const apiUrl = `${this.baseUrl}/${CONSTANTS.GALLERY}/photos`;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              // "Content-Type": "application/x-www-form-urlencoded",
              auth_token: '6f500f26-e515-4a8f-9add-f2ae852'
            })
          };
          return this.httpClient.post(apiUrl, payload, httpOptions);
        }
      }, {
        key: "addPaperImage",
        value: function addPaperImage(payload) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].UPLOAD_PAPER);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              // "Content-Type": "multipart/form-data",
              auth_token: this.token
            })
          };
          console.log(apiUrl);
          console.log(httpOptions);
          console.log(this.token);
          return this.httpClient.post(apiUrl, payload, httpOptions);
        }
      }, {
        key: "registerVolunteer",
        value: function registerVolunteer(payload) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].REGISTER_VOLUNTEER);
          payload["roles"] = ["VOLUNTEER"];
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.post(apiUrl, payload, httpOptions);
        }
      }, {
        key: "computeFinalResults",
        value: function computeFinalResults(payload) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].COMPUTE_FINAL_RESULTS); // payload["roles"] = ["SUPER-ADMIN"];

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.httpClient.post(apiUrl, payload, httpOptions);
        }
      }, {
        key: "getZones",
        value: function getZones() {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].ZONES);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "updateStudent",
        value: function updateStudent(payload, studentId) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GET_STUDENT, "/").concat(studentId);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.put(apiUrl, payload, httpOptions);
        } // Gallery

      }, {
        key: "addGallery",
        value: function addGallery(payload, endUrl) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GALLERY, "/").concat(endUrl);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              // "Content-Type": "application/x-www-form-urlencoded",
              auth_token: this.token
            })
          };
          return this.httpClient.post(apiUrl, payload, httpOptions);
        }
      }, {
        key: "getGalleryImages",
        value: function getGalleryImages(mediaType) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GALLERY, "/").concat(mediaType);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "getAllGalleryImages",
        value: function getAllGalleryImages(mediaType) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GALLERY_EDIT, "/").concat(mediaType);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              auth_token: this.token
            })
          };
          return this.httpClient.get(apiUrl, httpOptions);
        }
      }, {
        key: "updateGalleryAssetStatus",
        value: function updateGalleryAssetStatus(payload, endUrl) {
          var apiUrl = "".concat(this.baseUrl, "/").concat(_api_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].GALLERY, "?mediaUrl=").concat(endUrl);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              // "Content-Type": "application/x-www-form-urlencoded",
              auth_token: this.token
            })
          };
          return this.httpClient.put(apiUrl, payload, httpOptions);
        }
        /**
         * @param message response message
         * @description to show success or warning message through api response message
         */

      }, {
        key: "genericMessage",
        value: function genericMessage(message, type) {
          this.internalNotifier.next({
            type: "dru-alert",
            value: {
              alertType: type,
              htmlContent: message,
              position: "v-bottom",
              duration: 4000
            }
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _style_guide_style_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./style-guide/style-guide.component */
    "./src/app/style-guide/style-guide.component.ts");
    /* harmony import */


    var _login_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/terms-and-conditions/terms-and-conditions.component */
    "./src/app/login/terms-and-conditions/terms-and-conditions.component.ts");
    /* harmony import */


    var _login_forgot_psw_forgot_psw_response_forgot_psw_response_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/forgot-psw/forgot-psw-response/forgot-psw-response.component */
    "./src/app/login/forgot-psw/forgot-psw-response/forgot-psw-response.component.ts"); // Import the new component


    var routes = [{
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./layout/layout.module */
        "./src/app/layout/layout.module.ts")).then(function (m) {
          return m.LayoutModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | website-website-module */
        "website-website-module").then(__webpack_require__.bind(null,
        /*! ./website/website.module */
        "./src/app/website/website.module.ts")).then(function (m) {
          return m.WebsiteModule;
        });
      }
    }, {
      path: 'style-guide',
      component: _style_guide_style_guide_component__WEBPACK_IMPORTED_MODULE_2__["StyleGuideComponent"]
    }, {
      path: 'terms-and-conditions',
      component: _login_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsComponent"]
    }, {
      path: 'forgot-psw-response',
      component: _login_forgot_psw_forgot_psw_response_forgot_psw_response_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPswResponseComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        initialNavigation: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            initialNavigation: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./seo.service */
    "./src/app/seo.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/snack-bar/snack-bar.component */
    "./src/app/shared/snack-bar/snack-bar.component.ts");

    function AppComponent_app_snack_bar_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-snack-bar", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.showAlert);
      }
    }

    function AppComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(apiService, _seoService, router, activatedRoute, cookieService) {
        _classCallCheck(this, AppComponent);

        this.apiService = apiService;
        this._seoService = _seoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
        this.title = 'sadisha-ui';
        this.showAlert = false;
        this.showLoader = false;

        if (!this.cookieService.get('studentId')) {
          this.cookieService.set('studentId', this.apiService.getUUID());
        }
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.showLoader.subscribe(function (flag) {
            if (_this.showLoader !== flag) {
              _this.showLoader = flag;
            }
          });
          this.apiService.internalNotifier.subscribe(function (data) {
            _this.showAlert = data.value;
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this.activatedRoute;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (route) {
            return route.outlet === 'primary';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (route) {
            return route.data;
          })).subscribe(function (event) {
            _this._seoService.updateTitle(event['title']);

            _this._seoService.updateOgUrl(event['ogUrl']); //Updating Description tag dynamically with title


            _this._seoService.updateDescription(event['title'] + event['description']);

            _this._seoService.updateKeyword(event['keywords']);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 2,
      consts: [[3, "data", 4, "ngIf"], ["class", "app-loading", 4, "ngIf"], [3, "data"], [1, "app-loading"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_snack_bar_1_Template, 1, 1, "app-snack-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 1, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAlert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__["CommonAlertSnackComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-animate-on-scroll */
    "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _style_guide_style_guide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./style-guide/style-guide.component */
    "./src/app/style-guide/style-guide.component.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/app/layout/layout.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _can_active_router_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./can-active-router-guard.service */
    "./src/app/can-active-router-guard.service.ts");
    /* harmony import */


    var _login_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./login/terms-and-conditions/terms-and-conditions.component */
    "./src/app/login/terms-and-conditions/terms-and-conditions.component.ts");
    /* harmony import */


    var _login_forgot_psw_forgot_psw_response_forgot_psw_response_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/forgot-psw/forgot-psw-response/forgot-psw-response.component */
    "./src/app/login/forgot-psw/forgot-psw-response/forgot-psw-response.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _seo_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./seo.service */
    "./src/app/seo.service.ts");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js"); // import { StudentDetailsComponent } from "./website/pages/student-details/student-details.component";


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _can_active_router_guard_service__WEBPACK_IMPORTED_MODULE_14__["CanActiveRouterGuardService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"], _seo_service__WEBPACK_IMPORTED_MODULE_19__["SEOService"]],
      imports: [[ngx_webcam__WEBPACK_IMPORTED_MODULE_20__["WebcamModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'my-app-id' // withServerTransition is available only in Angular 4

      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__["AnimateOnScrollModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register("ngsw-worker.js", {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbCarouselModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _style_guide_style_guide_component__WEBPACK_IMPORTED_MODULE_6__["StyleGuideComponent"], _login_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_15__["TermsAndConditionsComponent"], _login_forgot_psw_forgot_psw_response_forgot_psw_response_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPswResponseComponent"]],
        imports: [ngx_webcam__WEBPACK_IMPORTED_MODULE_20__["WebcamModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__["AnimateOnScrollModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbCarouselModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _style_guide_style_guide_component__WEBPACK_IMPORTED_MODULE_6__["StyleGuideComponent"], _login_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_15__["TermsAndConditionsComponent"], _login_forgot_psw_forgot_psw_response_forgot_psw_response_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPswResponseComponent"]],
          imports: [ngx_webcam__WEBPACK_IMPORTED_MODULE_20__["WebcamModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
            appId: 'my-app-id' // withServerTransition is available only in Angular 4

          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__["AnimateOnScrollModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register("ngsw-worker.js", {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbCarouselModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
          providers: [_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _can_active_router_guard_service__WEBPACK_IMPORTED_MODULE_14__["CanActiveRouterGuardService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"], _seo_service__WEBPACK_IMPORTED_MODULE_19__["SEOService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/can-active-router-guard.service.ts": function srcAppCanActiveRouterGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanActiveRouterGuardService", function () {
      return CanActiveRouterGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");

    var CanActiveRouterGuardService = /*#__PURE__*/function () {
      function CanActiveRouterGuardService(apiService) {
        _classCallCheck(this, CanActiveRouterGuardService);

        this.apiService = apiService;
      }

      _createClass(CanActiveRouterGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return true;
        }
      }]);

      return CanActiveRouterGuardService;
    }();

    CanActiveRouterGuardService.ɵfac = function CanActiveRouterGuardService_Factory(t) {
      return new (t || CanActiveRouterGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    CanActiveRouterGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanActiveRouterGuardService,
      factory: CanActiveRouterGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanActiveRouterGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/drag-and-drop.directive.ts": function srcAppDirectivesDragAndDropDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropDirective", function () {
      return DragAndDropDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DragAndDropDirective = /*#__PURE__*/function () {
      function DragAndDropDirective() {
        _classCallCheck(this, DragAndDropDirective);

        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.background = '#ffffff';
        this.opacity = '1';
      } //Dragover listener, when something is dragged over our host element


      _createClass(DragAndDropDirective, [{
        key: "onDragOver",
        value: function onDragOver(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#9ecbec';
          this.opacity = '0.8';
          console.log("Drag Over Works");
        }
      }, {
        key: "onDragLeave",
        value: //Dragleave listener, when something is dragged away from our host element
        function onDragLeave(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#fff';
          this.opacity = '1';
          console.log("Drag Leave Works");
        }
      }, {
        key: "ondrop",
        value: function ondrop(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#f5fcff';
          this.opacity = '1';
          var files = evt.dataTransfer.files;

          if (files.length > 0) {
            this.onFileDropped.emit(files);
          }
        }
      }]);

      return DragAndDropDirective;
    }();

    DragAndDropDirective.ɵfac = function DragAndDropDirective_Factory(t) {
      return new (t || DragAndDropDirective)();
    };

    DragAndDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DragAndDropDirective,
      selectors: [["", "appDragAndDrop", ""]],
      hostVars: 4,
      hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragAndDropDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          })("dragleave", function DragAndDropDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          })("drop", function DragAndDropDirective_drop_HostBindingHandler($event) {
            return ctx.ondrop($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.background)("opacity", ctx.opacity);
        }
      },
      outputs: {
        onFileDropped: "onFileDropped"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragAndDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDragAndDrop]'
        }]
      }], function () {
        return [];
      }, {
        onFileDropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.background-color']
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.opacity']
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }],
        ondrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/event-tracker.directive.ts": function srcAppDirectivesEventTrackerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventTrackerDirective", function () {
      return EventTrackerDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventTrackerDirective = /*#__PURE__*/function () {
      function EventTrackerDirective() {
        _classCallCheck(this, EventTrackerDirective);

        this.option = {
          category: '',
          action: ''
        };
      }

      _createClass(EventTrackerDirective, [{
        key: "onClick",
        value: function onClick($event) {
          window.ga('send', 'event', this.option.category, this.option.action, {
            hitCallback: function hitCallback() {
              console.log('Tracking is successful');
            }
          });
        }
      }]);

      return EventTrackerDirective;
    }();

    EventTrackerDirective.ɵfac = function EventTrackerDirective_Factory(t) {
      return new (t || EventTrackerDirective)();
    };

    EventTrackerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EventTrackerDirective,
      selectors: [["", "appEventTracker", ""]],
      hostBindings: function EventTrackerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventTrackerDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        option: ["eventTracker", "option"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventTrackerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appEventTracker]'
        }]
      }], function () {
        return [];
      }, {
        option: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['eventTracker']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/numbers-only.directive.ts": function srcAppDirectivesNumbersOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberDirective", function () {
      return NumberDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NumberDirective = /*#__PURE__*/function () {
      function NumberDirective(_el) {
        _classCallCheck(this, NumberDirective);

        this._el = _el;
      }

      _createClass(NumberDirective, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var initalValue = this._el.nativeElement.value;
          this._el.nativeElement.value = initalValue.replace(/[^0-9.]*/g, '');
          event.stopPropagation();

          if (initalValue !== this._el.nativeElement.value) {}
        }
      }]);

      return NumberDirective;
    }();

    NumberDirective.ɵfac = function NumberDirective_Factory(t) {
      return new (t || NumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumberDirective,
      selectors: [["input", "numbersOnly", ""]],
      hostBindings: function NumberDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberDirective_input_HostBindingHandler($event) {
            return ctx.onInputChange($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'input[numbersOnly]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/address-nav-header/address-nav-header.component.ts": function srcAppLayoutAddressNavHeaderAddressNavHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressNavHeaderComponent", function () {
      return AddressNavHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddressNavHeaderComponent = /*#__PURE__*/function () {
      function AddressNavHeaderComponent() {
        _classCallCheck(this, AddressNavHeaderComponent);
      }

      _createClass(AddressNavHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddressNavHeaderComponent;
    }();

    AddressNavHeaderComponent.ɵfac = function AddressNavHeaderComponent_Factory(t) {
      return new (t || AddressNavHeaderComponent)();
    };

    AddressNavHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddressNavHeaderComponent,
      selectors: [["app-address-nav-header"]],
      decls: 18,
      vars: 0,
      consts: [[1, "d-flex", "address-nav", "justify-content-end", "flex-wrap", "container-fluid"], [1, "address-nav__list"], [1, "address-nav__item"], ["href", "mailto:admin@sadisha.org", 1, "address-nav__link"], ["href", "tel:+91-9550895968", 1, "address-nav__link", "text-nowrap"], ["href", "https://www.facebook.com/sadisha.org/", 1, "address-nav__link", "social-icon"], [1, "mdi", "mdi-facebook-box"], [1, "mdi", "mdi-twitter-box"], [1, "mdi", "mdi-instagram"]],
      template: function AddressNavHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "admin@sadisha.org");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+91-9550895968");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".address-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  height: 3.125rem;\n  border-bottom: 1px solid #f2edf3;\n  color: #fff;\n  align-items: center;\n}\n.address-nav__list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  padding: 0.6rem;\n}\n.address-nav__item[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n.address-nav__link[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 50%;\n}\n.address-nav__link[_ngcontent-%COMP%]   .mdi[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media screen and (max-width: 767px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L2FkZHJlc3MtbmF2LWhlYWRlci9hZGRyZXNzLW5hdi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3JhdmFuaWJhbG5lL0RvY3VtZW50cy9zYWRpc2hhL210dC11aS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvYWRkcmVzcy1uYXYtaGVhZGVyL2FkZHJlc3MtbmF2LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQ1RJO0VEVUosbUJBQUE7QUVBSjtBRkNJO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUVDUjtBRkNJO0VBQ0ksY0FBQTtBRUNSO0FGQ0k7RUFDSSxXQ3JCQTtFRHNCQSxrQkFBQTtBRUNSO0FGQVE7RUFDSSxlQUFBO0FFRVo7QUZFQTtFQUNDO0lBQ0kscUJBQUE7RUVDSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkZHJlc3MtbmF2LWhlYWRlci9hZGRyZXNzLW5hdi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuLmFkZHJlc3MtbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRtYWluQmdDb2xvcjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJl9fbGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICB9XG4gICAgJl9faXRlbSB7XG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIH1cbiAgICAmX19saW5rIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAubWRpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuIC5jb250YWluZXItZmx1aWR7XG4gICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiB9ICAgXG59IiwiJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuJHByaW1hcnlDb2xvcjogIzZlNjNmZjtcbiRicmFuZFByaW1hcnlDb2xvcjogIzJhMGEwYTtcbiR3aGl0ZVNtb2tlRGFyazojYWRhZGFkO1xuJHdoaXRlU21va2U6I0YyRjJGMjtcbiRFZ3lwdGlhbkJsdWU6IzE1NTU4ZDBkO1xuJERvZGdlckJsdWU6IzIxOTZGMztcbiR3aGl0ZVNtb2tlbGlnaHQ6I2RhZGFkYTtcbiRicmFuZFNlY29uZGFyeUNvbG9yOiAjZjIxYjNmO1xuJHByaW1hcnlIb3ZlcjogIzlhNTVmZjFhO1xuJG1haW5CZ0NvbG9yOiAjZjJlZGYzO1xuJHNob3dDb2xvcjogIzAwMWY0MztcbiRlcnJvckNvbG9yOiAjZGMzNTQ1O1xuJGluZGlnbzojOTIzOGFlO1xuJFBhbmFjaGUtZ3JlZW46I0VFRkFFRjtcbiRQdXJwdWwtd2hpdGU6I0U0RERFNjtcbiRhbGljZS1ibHVlOiAjRTlGN0ZEO1xuJGZsb3JhbC13aGl0ZTojRkZGN0VBO1xuJGRvZGdlci1ibHVlOiAjMTk5MUVCO1xuJHdhcm5pbmctY29sb3I6I0Y3OTgxQztcbiRDaGFibGlzLXJlZDojRkVFQkVCO1xuJGVycm9yLWNvbG9yOiAjRUQxQzI0O1xuJHN1Y2Nlc3MtY29sOiAjMUJCOTM0O1xuJGRhcmstYmctY29sb3I6ICMxOTFjMjQ7XG4kYmdHcmFkaWVudENvbG9yOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZlNjNmZiAwJSwgIzk3MzJhMyAxMDAlKTsiLCIuYWRkcmVzcy1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmVkZjM7XG4gIGNvbG9yOiAjZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZHJlc3MtbmF2X19saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cbi5hZGRyZXNzLW5hdl9faXRlbSB7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuLmFkZHJlc3MtbmF2X19saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hZGRyZXNzLW5hdl9fbGluayAubWRpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressNavHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-address-nav-header',
          templateUrl: './address-nav-header.component.html',
          styleUrls: ['./address-nav-header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/admin-header/admin-header.component.ts": function srcAppLayoutAdminHeaderAdminHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function () {
      return AdminHeaderComponent;
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

    var _c0 = function _c0() {
      return ["/login"];
    };

    function AdminHeaderComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.Name, " ");
      }
    }

    var AdminHeaderComponent = /*#__PURE__*/function () {
      function AdminHeaderComponent() {
        _classCallCheck(this, AdminHeaderComponent);

        this.userDetails = {};
        this.userId = '';
        var userDetails = JSON.parse(localStorage.getItem('adminUser') || '{}');
        this.userDetails = userDetails.attributes;
        var userId = localStorage.getItem('userName');
        this.userId = userId;
      }

      _createClass(AdminHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminHeaderComponent;
    }();

    AdminHeaderComponent.ɵfac = function AdminHeaderComponent_Factory(t) {
      return new (t || AdminHeaderComponent)();
    };

    AdminHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminHeaderComponent,
      selectors: [["app-admin-header"]],
      decls: 9,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "header", "container-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["href", "http://sadisha.org/", 1, "navbar-brand", "logo"], ["src", "assets/images/sadisha.png", "alt", "Logo", 1, "img-fluid", "logo-img"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["class", "nav-item px-12 mx-4", 4, "ngIf"], [1, "nav-item", "px-12", "mx-4"], [1, "nav-link", "text-capitalize", 3, "routerLink"], [1, "user-avator"]],
      template: function AdminHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminHeaderComponent_li_8_Template, 6, 4, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetails == null ? null : ctx.userDetails.Name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".header[_ngcontent-%COMP%] {\n  position: static;\n  z-index: 100;\n  color: #fff;\n  background-color: #191c24;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.header__logout[_ngcontent-%COMP%] {\n  height: 1.5625rem;\n}\n.header__profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n}\n.header[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.header[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  max-height: 3.75rem;\n}\n.user-avator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 36px;\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  background: #fe1493;\n  border-radius: 18px;\n  margin-right: 20px;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] {\n  background-color: #9a55ff1a;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L2FkbWluLWhlYWRlci9hZG1pbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3JhdmFuaWJhbG5lL0RvY3VtZW50cy9zYWRpc2hhL210dC11aS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdDSkk7RURLSix5QkNtQlk7RURsQlosY0FBQTtFQUNBLGlCQUFBO0FFQUo7QUZDSTtFQUNJLGlCQUFBO0FFQ1I7QUZFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUVBWjtBRkdJO0VBQ0ksV0NuQkE7QUNrQlI7QUZHSTtFQUNJLG1CQUFBO0FFRFI7QUZLQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FFRko7QUZJQTtFQUNJLG1CQUFBO0FFREo7QUZHQTtFQUNJLGVBQUE7QUVBSjtBRkNJO0VBQ0ksMkJDaENPO0FDaUNmO0FGRUE7RUFDSSxrQkM5Q0k7QUMrQ1IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJnLWNvbG9yO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICZfX2xvZ291dCB7XG4gICAgICAgIGhlaWdodDogMS41NjI1cmVtO1xuICAgIH1cbiAgICAmX19wcm9maWxlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmF2LWxpbmsge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICAubG9nby1pbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzLjc1cmVtO1xuICAgIH1cbn1cblxuLnVzZXItYXZhdG9yIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmUxNDkzO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm5hdmJhci1uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2LWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyLCAmLmFjdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlIb3ZlcjtcbiAgICB9XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XG59XG4iLCIkd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kcHJpbWFyeUNvbG9yOiAjNmU2M2ZmO1xuJGJyYW5kUHJpbWFyeUNvbG9yOiAjMmEwYTBhO1xuJHdoaXRlU21va2VEYXJrOiNhZGFkYWQ7XG4kd2hpdGVTbW9rZTojRjJGMkYyO1xuJEVneXB0aWFuQmx1ZTojMTU1NThkMGQ7XG4kRG9kZ2VyQmx1ZTojMjE5NkYzO1xuJHdoaXRlU21va2VsaWdodDojZGFkYWRhO1xuJGJyYW5kU2Vjb25kYXJ5Q29sb3I6ICNmMjFiM2Y7XG4kcHJpbWFyeUhvdmVyOiAjOWE1NWZmMWE7XG4kbWFpbkJnQ29sb3I6ICNmMmVkZjM7XG4kc2hvd0NvbG9yOiAjMDAxZjQzO1xuJGVycm9yQ29sb3I6ICNkYzM1NDU7XG4kaW5kaWdvOiM5MjM4YWU7XG4kUGFuYWNoZS1ncmVlbjojRUVGQUVGO1xuJFB1cnB1bC13aGl0ZTojRTREREU2O1xuJGFsaWNlLWJsdWU6ICNFOUY3RkQ7XG4kZmxvcmFsLXdoaXRlOiNGRkY3RUE7XG4kZG9kZ2VyLWJsdWU6ICMxOTkxRUI7XG4kd2FybmluZy1jb2xvcjojRjc5ODFDO1xuJENoYWJsaXMtcmVkOiNGRUVCRUI7XG4kZXJyb3ItY29sb3I6ICNFRDFDMjQ7XG4kc3VjY2Vzcy1jb2w6ICMxQkI5MzQ7XG4kZGFyay1iZy1jb2xvcjogIzE5MWMyNDtcbiRiZ0dyYWRpZW50Q29sb3I6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmU2M2ZmIDAlLCAjOTczMmEzIDEwMCUpOyIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB6LWluZGV4OiAxMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxYzI0O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uaGVhZGVyX19sb2dvdXQge1xuICBoZWlnaHQ6IDEuNTYyNXJlbTtcbn1cbi5oZWFkZXJfX3Byb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5oZWFkZXIgLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyIC5sb2dvLWltZyB7XG4gIG1heC1oZWlnaHQ6IDMuNzVyZW07XG59XG5cbi51c2VyLWF2YXRvciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZlMTQ5MztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXYtaXRlbTpob3ZlciwgLm5hdi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmYxYTtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-header',
          templateUrl: './admin-header.component.html',
          styleUrls: ['./admin-header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/admin-landing/admin-landing.component.ts": function srcAppLayoutAdminLandingAdminLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLandingComponent", function () {
      return AdminLandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["../paper-upload"];
    };

    var _c1 = function _c1() {
      return ["../evaluation"];
    };

    var _c2 = function _c2() {
      return ["../student-edit"];
    };

    var _c3 = function _c3() {
      return ["../gallery-upload"];
    };

    var _c4 = function _c4() {
      return ["../status"];
    };

    var AdminLandingComponent = /*#__PURE__*/function () {
      function AdminLandingComponent() {
        _classCallCheck(this, AdminLandingComponent);
      }

      _createClass(AdminLandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminLandingComponent;
    }();

    AdminLandingComponent.ɵfac = function AdminLandingComponent_Factory(t) {
      return new (t || AdminLandingComponent)();
    };

    AdminLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLandingComponent,
      selectors: [["app-admin-landing"]],
      decls: 53,
      vars: 10,
      consts: [[1, "contrainer-fluid", "feature"], [1, "text-center", "f-22", "m-t-32", "m-b-20", "font-italic", "primary-text"], [1, "row", "align-items-center"], [1, "col-12", "col-md-4", "text-center"], [1, "feature__wrapper", "border", "p-5", "d-block", 3, "routerLink"], [1, "feature__icon", "mb-3"], ["src", "/assets/icons/mobile.svg", "alt", ""], [1, "feature__header", "mb-3"], [1, "feature__description"], ["src", "/assets/icons/admin.svg", "alt", ""], ["src", "/assets/icons/gallery.svg", "alt", ""], ["src", "/assets/icons/student-stots.svg", "alt", ""]],
      template: function AdminLandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Click on the any card and explore more!... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Evaluation Flow ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Click here to go to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Paper Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Evaluation Flow ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Click here to go to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Evaluation Flow ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Admin Features ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Click here to go to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Admin Features ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Gallery Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Click here to go to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gallery Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Students status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Click here to go to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Students status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".feature[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.feature__wrapper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  margin-top: 38px !important;\n}\n.feature__wrapper[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.3);\n}\n.feature__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L2FkbWluLWxhbmRpbmcvYWRtaW4tbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2FkbWluLWxhbmRpbmcvYWRtaW4tbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0k7RUFDSSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ1I7QURBUTtFQUNJLDJDQUFBO0FDRVo7QURHUTtFQUNJLFdBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1sYW5kaW5nL2FkbWluLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZSB7XG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgXG4gICAgJl9fd3JhcHBlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTFweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDM4cHggIWltcG9ydGFudDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDExcHggcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2ljb24ge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmZlYXR1cmUge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZmVhdHVyZV9fd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMzhweCAhaW1wb3J0YW50O1xufVxuLmZlYXR1cmVfX3dyYXBwZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggNnB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmZlYXR1cmVfX2ljb24gaW1nIHtcbiAgd2lkdGg6IDY1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-landing',
          templateUrl: './admin-landing.component.html',
          styleUrls: ['./admin-landing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/compute-final-results/compute-final-results.component.ts": function srcAppLayoutComputeFinalResultsComputeFinalResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComputeFinalResultsComponent", function () {
      return ComputeFinalResultsComponent;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ComputeFinalResultsComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComputeFinalResultsComponent_tr_14_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var zone_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.config[zone_r1.id].open = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComputeFinalResultsComponent_tr_14_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var zone_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.config[zone_r1.id].zphs = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComputeFinalResultsComponent_tr_14_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var zone_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.config[zone_r1.id].girls = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var zone_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r1.zoneName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.config[zone_r1.id].open);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.config[zone_r1.id].zphs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.config[zone_r1.id].girls);
      }
    }

    var ComputeFinalResultsComponent = /*#__PURE__*/function () {
      function ComputeFinalResultsComponent(apiService) {
        _classCallCheck(this, ComputeFinalResultsComponent);

        this.apiService = apiService;
        this.zones = [];
        this.config = {};
      }

      _createClass(ComputeFinalResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadZones();
        }
      }, {
        key: "loadZones",
        value: function loadZones() {
          var _this2 = this;

          this.apiService.getZones().subscribe(function (res) {
            console.log(res);
            _this2.zones = res;

            _this2.zones.forEach(function (zone) {
              _this2.config[zone.id] = {
                open: 0,
                zphs: 0,
                girls: 0
              };
            });
          }, function (err) {
            console.error("Failed to fetch zones", err);
            alert("Failed to load zones.");
          });
        }
      }, {
        key: "saveConfiguration",
        value: function saveConfiguration() {
          var _this3 = this;

          var payload = this.zones.map(function (zone) {
            var _a, _b, _c;

            return {
              zone: zone.zoneName,
              open: ((_a = _this3.config[zone.id]) === null || _a === void 0 ? void 0 : _a.open) || 0,
              zphs: ((_b = _this3.config[zone.id]) === null || _b === void 0 ? void 0 : _b.zphs) || 0,
              girls: ((_c = _this3.config[zone.id]) === null || _c === void 0 ? void 0 : _c.girls) || 0
            };
          });
          console.log(payload);
          this.apiService.computeFinalResults(payload).subscribe(function (res) {
            if (res === 'Done') {
              alert('Configuration saved successfully!');
            } else {
              alert('Failed to save configuration.');
            }
          }, function (err) {
            console.error("Error saving config", err);
            alert("Error while sending data to server.");
          });
        }
      }]);

      return ComputeFinalResultsComponent;
    }();

    ComputeFinalResultsComponent.ɵfac = function ComputeFinalResultsComponent_Factory(t) {
      return new (t || ComputeFinalResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    ComputeFinalResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComputeFinalResultsComponent,
      selectors: [["app-compute-final-results"]],
      decls: 17,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["type", "number", "min", "0", 3, "ngModel", "ngModelChange"]],
      template: function ComputeFinalResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zone-Wise Seat Allocation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ZONE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ZPHS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ZPHS GIRLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ComputeFinalResultsComponent_tr_14_Template, 9, 4, "tr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComputeFinalResultsComponent_Template_button_click_15_listener() {
            return ctx.saveConfiguration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save To File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zones);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  width: 60px;\n  padding: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L2NvbXB1dGUtZmluYWwtcmVzdWx0cy9jb21wdXRlLWZpbmFsLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb21wdXRlLWZpbmFsLXJlc3VsdHMvY29tcHV0ZS1maW5hbC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHSjs7QURERTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wdXRlLWZpbmFsLXJlc3VsdHMvY29tcHV0ZS1maW5hbC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cbiAgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBidXR0b24ge1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICB9XG4gICIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRoLCB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDVweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComputeFinalResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-compute-final-results',
          templateUrl: './compute-final-results.component.html',
          styleUrls: ['./compute-final-results.component.scss']
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
  "./src/app/layout/footer/footer.component.ts": function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.currentYear = null;
        var date = new Date();
        this.currentYear = date.getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 29,
      vars: 0,
      consts: [[1, "p-12", "footer"], [1, "container"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-sm-4", "align-self-center", "align-centre"], ["href", "http://sadisha.org/", 1, "navbar-brand", "logo"], ["src", "assets/images/sadisha.png", "alt", "Logo", 1, "img-fluid", "logo-img"], [1, "text-white"], ["href", "mailto:admin@sadisha.org", 1, "theme-color"], ["href", "tel:+919550895968", 1, "theme-color"], [1, "address-nav"], [1, "address-nav__list"], [1, "address-nav__item"], ["href", "https://www.facebook.com/sadisha.org/", 1, "address-nav__link", "social-icon"], [1, "mdi", "mdi-facebook-box"], [1, "mdi", "mdi-twitter-box"], [1, "mdi", "mdi-instagram"], [1, "text-white", "ml-3"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "admin@sadisha.org");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+91-9550895968");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Like Us on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  min-height: 12.5rem;\n  background-image: url(https://ak.picdn.net/shutterstock/videos/1009862438/thumb/10.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 0 0 3.125rem 0;\n  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);\n  margin-top: 0.937rem;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  padding: 0.937rem 0;\n}\n.footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 12.5rem;\n}\n.footer[_ngcontent-%COMP%]   .theme-color[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #9238ae;\n  font-weight: 600;\n}\n.footer[_ngcontent-%COMP%]   .address-nav[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  height: 2.125rem;\n  color: #fff;\n  align-items: center;\n}\n.footer[_ngcontent-%COMP%]   .address-nav__list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  padding: 0;\n}\n.footer[_ngcontent-%COMP%]   .address-nav__item[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n.footer[_ngcontent-%COMP%]   .address-nav__link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.footer[_ngcontent-%COMP%]   .address-nav__link[_ngcontent-%COMP%]   .mdi[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media screen and (max-width: 767px) {\n  .align-centre[_ngcontent-%COMP%] {\n    text-align: center !important;\n    margin-bottom: 0.757rem;\n  }\n  .align-centre[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NyYXZhbmliYWxuZS9Eb2N1bWVudHMvc2FkaXNoYS9tdHQtdWkvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsdUZBQUE7RUFDQSw0QkFBQTtFQUlBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQ0Esb0JBQUE7QUNBSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENJO0VBQ0kscUJBQUE7RUFDQSxjRVBBO0VGUUEsZ0JBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRS9CQTtFRmdDQSxtQkFBQTtBQ0NSO0FEQVE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0VaO0FEQVE7RUFDSSxjQUFBO0FDRVo7QURBUTtFQUNJLFdFM0NKO0FENkNSO0FERFk7RUFDSSxlQUFBO0FDR2hCO0FERUE7RUFDSTtJQUNJLDZCQUFBO0lBQ0EsdUJBQUE7RUNDTjtFREFNO0lBQ0ksdUJBQUE7RUNFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG4uZm9vdGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMi41cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2FrLnBpY2RuLm5ldC9zaHV0dGVyc3RvY2svdmlkZW9zLzEwMDk4NjI0MzgvdGh1bWIvMTAuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDAgMy4xMjVyZW0gMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIG1hcmdpbi10b3A6IDAuOTM3cmVtO1xuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBwYWRkaW5nOiAwLjkzN3JlbSAwO1xuICAgIH1cbiAgICAucm93e1xuICAgICAgICBtaW4taGVpZ2h0OiAxMi41cmVtO1xuICAgIH1cbiAgICAudGhlbWUtY29sb3J7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICRpbmRpZ287XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5hZGRyZXNzLW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAyMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgaGVpZ2h0OiAyLjEyNXJlbTtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgJl9fbGlzdCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgJl9fbGluayB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgLm1kaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gICAgLmFsaWduLWNlbnRyZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzU3cmVtO1xuICAgICAgICB1bHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5mb290ZXIge1xuICBtaW4taGVpZ2h0OiAxMi41cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9hay5waWNkbi5uZXQvc2h1dHRlcnN0b2NrL3ZpZGVvcy8xMDA5ODYyNDM4L3RodW1iLzEwLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMCAzLjEyNXJlbSAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tdG9wOiAwLjkzN3JlbTtcbn1cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHBhZGRpbmc6IDAuOTM3cmVtIDA7XG59XG4uZm9vdGVyIC5yb3cge1xuICBtaW4taGVpZ2h0OiAxMi41cmVtO1xufVxuLmZvb3RlciAudGhlbWUtY29sb3Ige1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTIzOGFlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmZvb3RlciAuYWRkcmVzcy1uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGhlaWdodDogMi4xMjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3RlciAuYWRkcmVzcy1uYXZfX2xpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbn1cbi5mb290ZXIgLmFkZHJlc3MtbmF2X19pdGVtIHtcbiAgbWFyZ2luOiAwIDFyZW07XG59XG4uZm9vdGVyIC5hZGRyZXNzLW5hdl9fbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZvb3RlciAuYWRkcmVzcy1uYXZfX2xpbmsgLm1kaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFsaWduLWNlbnRyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NTdyZW07XG4gIH1cbiAgLmFsaWduLWNlbnRyZSB1bCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iLCIkd2hpdGU6ICNmZmY7XG4kYmxhY2s6ICMwMDA7XG4kcHJpbWFyeUNvbG9yOiAjNmU2M2ZmO1xuJGJyYW5kUHJpbWFyeUNvbG9yOiAjMmEwYTBhO1xuJHdoaXRlU21va2VEYXJrOiNhZGFkYWQ7XG4kd2hpdGVTbW9rZTojRjJGMkYyO1xuJEVneXB0aWFuQmx1ZTojMTU1NThkMGQ7XG4kRG9kZ2VyQmx1ZTojMjE5NkYzO1xuJHdoaXRlU21va2VsaWdodDojZGFkYWRhO1xuJGJyYW5kU2Vjb25kYXJ5Q29sb3I6ICNmMjFiM2Y7XG4kcHJpbWFyeUhvdmVyOiAjOWE1NWZmMWE7XG4kbWFpbkJnQ29sb3I6ICNmMmVkZjM7XG4kc2hvd0NvbG9yOiAjMDAxZjQzO1xuJGVycm9yQ29sb3I6ICNkYzM1NDU7XG4kaW5kaWdvOiM5MjM4YWU7XG4kUGFuYWNoZS1ncmVlbjojRUVGQUVGO1xuJFB1cnB1bC13aGl0ZTojRTREREU2O1xuJGFsaWNlLWJsdWU6ICNFOUY3RkQ7XG4kZmxvcmFsLXdoaXRlOiNGRkY3RUE7XG4kZG9kZ2VyLWJsdWU6ICMxOTkxRUI7XG4kd2FybmluZy1jb2xvcjojRjc5ODFDO1xuJENoYWJsaXMtcmVkOiNGRUVCRUI7XG4kZXJyb3ItY29sb3I6ICNFRDFDMjQ7XG4kc3VjY2Vzcy1jb2w6ICMxQkI5MzQ7XG4kZGFyay1iZy1jb2xvcjogIzE5MWMyNDtcbiRiZ0dyYWRpZW50Q29sb3I6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmU2M2ZmIDAlLCAjOTczMmEzIDEwMCUpOyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts": function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _address_nav_header_address_nav_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../address-nav-header/address-nav-header.component */
    "./src/app/layout/address-nav-header/address-nav-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["/student-registration"];
    };

    var _c2 = function _c2() {
      return ["/volunteer-registration"];
    };

    var _c3 = function _c3() {
      return ["/faq"];
    };

    var _c4 = function _c4() {
      return ["/talent-test"];
    };

    var _c5 = function _c5() {
      return ["/gallery"];
    };

    var _c6 = function _c6() {
      return ["/press"];
    };

    var _c7 = function _c7() {
      return ["/contact-us"];
    };

    var _c8 = function _c8() {
      return ["/login"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(apiService) {
        _classCallCheck(this, HeaderComponent);

        this.apiService = apiService;
        this.isSideNavOpened = false;
        this.isRegisterDropdownOpen = false;
        this.isMenuOpen = false;
        this.userDetails = {};
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {}
      }, {
        key: "toggleMenu",
        value: function toggleMenu(event) {
          event.preventDefault(); // 👈 This prevents the default anchor behavior

          this.isMenuOpen = !this.isMenuOpen;
          var mainNavBar = document.querySelector('.main-navbar');
          var menuEle = document.querySelector('#menuDropdown');

          if (menuEle) {
            if (menuEle.classList.contains('show')) {
              menuEle.classList.remove('show');
              mainNavBar.classList.remove('main-nav--expanded');
            } else {
              menuEle.classList.add('show');
              mainNavBar.classList.add('main-nav--expanded');
            }
          }
        }
      }, {
        key: "toggleSideNav",
        value: function toggleSideNav() {// this.apiService.sideNavOpened.next(!this.isSideNavOpened);
        }
      }, {
        key: "toggleRegisterDropdown",
        value: function toggleRegisterDropdown(event) {
          event.preventDefault(); // 👈 This prevents the default anchor behavior

          this.isRegisterDropdownOpen = !this.isRegisterDropdownOpen;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 40,
      vars: 24,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "header", "container-fluid", "main-navbar"], ["type", "button", "aria-controls", "menuDropdown", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["href", "http://sadisha.org/", 1, "navbar-brand", "logo"], ["src", "assets/images/sadisha.png", "alt", "Logo", 1, "img-fluid", "logo-img"], ["id", "menuDropdown", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["routerLinkActive", "active", 1, "nav-item", "px-12", "mx-4"], [1, "nav-link", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "nav-item", "dropdown", "px-12", "mx-4"], ["href", "#", "role", "button", 1, "nav-link", "dropdown-toggle", 3, "click"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "dropdown-divider"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-address-nav-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener($event) {
            return ctx.toggleRegisterDropdown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " REGISTER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener($event) {
            return ctx.toggleRegisterDropdown($event);
          })("click", function HeaderComponent_Template_a_click_17_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "As a Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener($event) {
            return ctx.toggleRegisterDropdown($event);
          })("click", function HeaderComponent_Template_a_click_20_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "As a Volunteer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " FAQ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " MATHS TALENT TEST ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_29_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " GALLERY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " PRESS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_35_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " CONTACT US ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_38_listener($event) {
            return ctx.toggleMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " SIGN IN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isMenuOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isMenuOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isRegisterDropdownOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isRegisterDropdownOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c8));
        }
      },
      directives: [_address_nav_header_address_nav_header_component__WEBPACK_IMPORTED_MODULE_2__["AddressNavHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  color: #fff;\n}\n.header__logout[_ngcontent-%COMP%] {\n  height: 1.5625rem;\n}\n.header__profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n}\n.header[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.header[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  max-height: 70px;\n}\n.main-nav--expanded[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n@media screen and (min-width: 992px) {\n  .main-nav--expanded[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n}\n.nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.1s;\n  border-bottom: 4px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  border-bottom: 4px solid #6e63ff;\n}\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] {\n  background-color: #9a55ff1a;\n  border-bottom: 4px solid #6e63ff;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 150px;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  color: #007bff;\n}\n.nav-link.dropdown-toggle[_ngcontent-%COMP%]::after {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3JhdmFuaWJhbG5lL0RvY3VtZW50cy9zYWRpc2hhL210dC11aS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdDUEk7QUNPUjtBRkNJO0VBQ0ksaUJBQUE7QUVDUjtBRkVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRUFaO0FGR0k7RUFDSSxXQ25CQTtBQ2tCUjtBRkdJO0VBQ0ksZ0JBQUE7QUVEUjtBRktJO0VBQ0ksc0JDMUJBO0FDd0JSO0FGR1E7RUFGSjtJQUdRLDZCQUFBO0VFQVY7QUFDRjtBRkdBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7QUVBSjtBRkVJO0VBRUksZ0NBQUE7QUVEUjtBRkdJO0VBQ0ksMkJDakNPO0VEa0NQLGdDQUFBO0FFRFI7QUZJQTtFQUNJLHlRQUFBO0FFREo7QUZHQTtFQUNJLGtCQUFBO0FFQUo7QUZHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FFQUY7QUZHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBRUFGO0FGR0E7RUFDRSxtQkFBQTtBRUFGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuLmhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgICZfX2xvZ291dCB7XG4gICAgICAgIGhlaWdodDogMS41NjI1cmVtO1xuICAgIH1cbiAgICAmX19wcm9maWxlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmF2LWxpbmsge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICAubG9nby1pbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xuICAgIH1cbn1cbi5tYWluLW5hdiB7XG4gICAgJi0tZXhwYW5kZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5uYXYtaXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICAvLyBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2RhZGFkYSwgLTVweCAtNXB4IDEwcHggI2FkYWRhZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICRwcmltYXJ5Q29sb3I7XG4gICAgfVxuICAgICY6aG92ZXIsICYuYWN0aXZle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUhvdmVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJHByaW1hcnlDb2xvcjtcbiAgICB9XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzRSUzQy9zdmclM0VcIik7XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5uYXYtbGluay5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbiIsIiR3aGl0ZTogI2ZmZjtcbiRibGFjazogIzAwMDtcbiRwcmltYXJ5Q29sb3I6ICM2ZTYzZmY7XG4kYnJhbmRQcmltYXJ5Q29sb3I6ICMyYTBhMGE7XG4kd2hpdGVTbW9rZURhcms6I2FkYWRhZDtcbiR3aGl0ZVNtb2tlOiNGMkYyRjI7XG4kRWd5cHRpYW5CbHVlOiMxNTU1OGQwZDtcbiREb2RnZXJCbHVlOiMyMTk2RjM7XG4kd2hpdGVTbW9rZWxpZ2h0OiNkYWRhZGE7XG4kYnJhbmRTZWNvbmRhcnlDb2xvcjogI2YyMWIzZjtcbiRwcmltYXJ5SG92ZXI6ICM5YTU1ZmYxYTtcbiRtYWluQmdDb2xvcjogI2YyZWRmMztcbiRzaG93Q29sb3I6ICMwMDFmNDM7XG4kZXJyb3JDb2xvcjogI2RjMzU0NTtcbiRpbmRpZ286IzkyMzhhZTtcbiRQYW5hY2hlLWdyZWVuOiNFRUZBRUY7XG4kUHVycHVsLXdoaXRlOiNFNERERTY7XG4kYWxpY2UtYmx1ZTogI0U5RjdGRDtcbiRmbG9yYWwtd2hpdGU6I0ZGRjdFQTtcbiRkb2RnZXItYmx1ZTogIzE5OTFFQjtcbiR3YXJuaW5nLWNvbG9yOiNGNzk4MUM7XG4kQ2hhYmxpcy1yZWQ6I0ZFRUJFQjtcbiRlcnJvci1jb2xvcjogI0VEMUMyNDtcbiRzdWNjZXNzLWNvbDogIzFCQjkzNDtcbiRkYXJrLWJnLWNvbG9yOiAjMTkxYzI0O1xuJGJnR3JhZGllbnRDb2xvcjpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZTYzZmYgMCUsICM5NzMyYTMgMTAwJSk7IiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXJfX2xvZ291dCB7XG4gIGhlaWdodDogMS41NjI1cmVtO1xufVxuLmhlYWRlcl9fcHJvZmlsZSBpbWcge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLmhlYWRlciAubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLmxvZ28taW1nIHtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLm1haW4tbmF2LS1leHBhbmRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1uYXYtLWV4cGFuZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4ubmF2LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubmF2LWl0ZW06aG92ZXIge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzZlNjNmZjtcbn1cbi5uYXYtaXRlbTpob3ZlciwgLm5hdi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmYxYTtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM2ZTYzZmY7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5uYXYtbGluay5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
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
  "./src/app/layout/layout-wrapper/layout-wrapper.component.ts": function srcAppLayoutLayoutWrapperLayoutWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutWrapperComponent", function () {
      return LayoutWrapperComponent;
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


    var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-header/admin-header.component */
    "./src/app/layout/admin-header/admin-header.component.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../side-nav/side-nav.component */
    "./src/app/layout/side-nav/side-nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LayoutWrapperComponent = /*#__PURE__*/function () {
      function LayoutWrapperComponent(apiService) {
        _classCallCheck(this, LayoutWrapperComponent);

        this.apiService = apiService;
        this.isSideNavOpened = false;
      }

      _createClass(LayoutWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutWrapperComponent;
    }();

    LayoutWrapperComponent.ɵfac = function LayoutWrapperComponent_Factory(t) {
      return new (t || LayoutWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    LayoutWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutWrapperComponent,
      selectors: [["app-layout-wrapper"]],
      decls: 7,
      vars: 0,
      consts: [[1, "content-wrapper", "position-relative", "d-md-flex"], [1, "app-sidebar"], [1, "app-content", "w-100"], [1, "p-16", "router-content"]],
      template: function LayoutWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_2__["AdminHeaderComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQtd3JhcHBlci9sYXlvdXQtd3JhcHBlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout-wrapper',
          templateUrl: './layout-wrapper.component.html',
          styleUrls: ['./layout-wrapper.component.scss']
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
  "./src/app/layout/layout.module.ts": function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
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


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/app/layout/side-nav/side-nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _layout_wrapper_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout-wrapper/layout-wrapper.component */
    "./src/app/layout/layout-wrapper/layout-wrapper.component.ts");
    /* harmony import */


    var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-header/admin-header.component */
    "./src/app/layout/admin-header/admin-header.component.ts");
    /* harmony import */


    var _admin_landing_admin_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-landing/admin-landing.component */
    "./src/app/layout/admin-landing/admin-landing.component.ts");
    /* harmony import */


    var _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./student-edit/student-edit.component */
    "./src/app/layout/student-edit/student-edit.component.ts");
    /* harmony import */


    var _student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./student-modal/student-modal.component */
    "./src/app/layout/student-modal/student-modal.component.ts");
    /* harmony import */


    var _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./role-management/role-management.component */
    "./src/app/layout/role-management/role-management.component.ts");
    /* harmony import */


    var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-management/user-management.component */
    "./src/app/layout/user-management/user-management.component.ts");
    /* harmony import */


    var _student_stats_student_stats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./student-stats/student-stats.component */
    "./src/app/layout/student-stats/student-stats.component.ts");
    /* harmony import */


    var _compute_final_results_compute_final_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./compute-final-results/compute-final-results.component */
    "./src/app/layout/compute-final-results/compute-final-results.component.ts");

    var routes = [{
      path: '',
      component: _layout_wrapper_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["LayoutWrapperComponent"],
      children: [{
        path: 'landing',
        component: _admin_landing_admin_landing_component__WEBPACK_IMPORTED_MODULE_8__["AdminLandingComponent"]
      }, {
        path: 'student-edit',
        component: _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_9__["StudentEditComponent"]
      }, {
        path: 'role-management',
        component: _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_11__["RoleManagementComponent"]
      }, {
        path: 'user-management',
        component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"]
      }, {
        path: 'student-stats',
        component: _student_stats_student_stats_component__WEBPACK_IMPORTED_MODULE_13__["StudentStatsComponent"]
      }, {
        path: 'compute-final-results',
        component: _compute_final_results_compute_final_results_component__WEBPACK_IMPORTED_MODULE_14__["ComputeFinalResultsComponent"]
      }, {
        path: 'paper-upload',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | paper-upload-paper-upload-module */
          [__webpack_require__.e("common"), __webpack_require__.e("paper-upload-paper-upload-module")]).then(__webpack_require__.bind(null,
          /*! ../paper-upload/paper-upload.module */
          "./src/app/paper-upload/paper-upload.module.ts")).then(function (m) {
            return m.PaperUploadModule;
          });
        }
      }, {
        path: 'evaluation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | evaluation-evaluation-module */
          "evaluation-evaluation-module").then(__webpack_require__.bind(null,
          /*! ../evaluation/evaluation.module */
          "./src/app/evaluation/evaluation.module.ts")).then(function (m) {
            return m.EvaluationModule;
          });
        }
      }, {
        path: 'papers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | papers-papers-module */
          "papers-papers-module").then(__webpack_require__.bind(null,
          /*! ../papers/papers.module */
          "./src/app/papers/papers.module.ts")).then(function (m) {
            return m.PapersModule;
          });
        }
      }, {
        path: 'features',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | image-upload-image-upload-module */
          [__webpack_require__.e("common"), __webpack_require__.e("image-upload-image-upload-module")]).then(__webpack_require__.bind(null,
          /*! ../image-upload/image-upload.module */
          "./src/app/image-upload/image-upload.module.ts")).then(function (m) {
            return m.ImageUploadModule;
          });
        }
      }, {
        path: 'gallery-upload',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | image-upload-image-upload-module */
          [__webpack_require__.e("common"), __webpack_require__.e("image-upload-image-upload-module")]).then(__webpack_require__.bind(null,
          /*! ../image-upload/image-upload.module */
          "./src/app/image-upload/image-upload.module.ts")).then(function (m) {
            return m.ImageUploadModule;
          });
        }
      }, {
        path: 'status',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | image-upload-image-upload-module */
          [__webpack_require__.e("common"), __webpack_require__.e("image-upload-image-upload-module")]).then(__webpack_require__.bind(null,
          /*! ../image-upload/image-upload.module */
          "./src/app/image-upload/image-upload.module.ts")).then(function (m) {
            return m.ImageUploadModule;
          });
        }
      }]
    }];

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
        declarations: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"], _layout_wrapper_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["LayoutWrapperComponent"], _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__["AdminHeaderComponent"], _admin_landing_admin_landing_component__WEBPACK_IMPORTED_MODULE_8__["AdminLandingComponent"], _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_9__["StudentEditComponent"], _student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_10__["StudentModalComponent"], _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_11__["RoleManagementComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"], _student_stats_student_stats_component__WEBPACK_IMPORTED_MODULE_13__["StudentStatsComponent"], _compute_final_results_compute_final_results_component__WEBPACK_IMPORTED_MODULE_14__["ComputeFinalResultsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"], _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__["AdminHeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"], _layout_wrapper_layout_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["LayoutWrapperComponent"], _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__["AdminHeaderComponent"], _admin_landing_admin_landing_component__WEBPACK_IMPORTED_MODULE_8__["AdminLandingComponent"], _student_edit_student_edit_component__WEBPACK_IMPORTED_MODULE_9__["StudentEditComponent"], _student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_10__["StudentModalComponent"], _role_management_role_management_component__WEBPACK_IMPORTED_MODULE_11__["RoleManagementComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"], _student_stats_student_stats_component__WEBPACK_IMPORTED_MODULE_13__["StudentStatsComponent"], _compute_final_results_compute_final_results_component__WEBPACK_IMPORTED_MODULE_14__["ComputeFinalResultsComponent"]],
          entryComponents: [_student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_10__["StudentModalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          exports: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"], _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__["AdminHeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/role-management/role-management.component.ts": function srcAppLayoutRoleManagementRoleManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function () {
      return RoleManagementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../student-modal/student-modal.component */
    "./src/app/layout/student-modal/student-modal.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function RoleManagementComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var roles_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", roles_r2, " ");
      }
    }

    function RoleManagementComponent_tr_15_td_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RoleManagementComponent_tr_15_td_3_Template_input_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var j_r8 = ctx.index;

          var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.checkValue(i_r5, j_r8);
        })("ngModelChange", function RoleManagementComponent_tr_15_td_3_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var j_r8 = ctx.index;

          var name_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return name_r4.access[j_r8] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r8 = ctx.index;

        var name_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", name_r4.access[j_r8]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        selected: a0
      };
    };

    function RoleManagementComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_tr_15_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var i_r5 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.selectStudent(i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoleManagementComponent_tr_15_td_3_Template, 10, 1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var name_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.selectedIndex == i_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", name_r4.screen, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", name_r4.access);
      }
    }

    var RoleManagementComponent = /*#__PURE__*/function () {
      function RoleManagementComponent(dialog) {
        _classCallCheck(this, RoleManagementComponent);

        this.dialog = dialog;
        this.data = {
          roles: ["Admin", "Super Admin", "Evaluator", "Volunteer"],
          screens: [{
            screen: "Student Creation",
            access: [true, false, false, true]
          }, {
            screen: "Student Edit",
            access: [true, false, false, true]
          }, {
            screen: "Student Delete",
            access: [true, true, false, true]
          }, {
            screen: "Paper Creation",
            access: [true, false, false, true]
          }]
        };
        this.districtsList = [];
        this.hardCodeData = {};
        this.selectedIndex = 0;
      }

      _createClass(RoleManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "update",
        value: function update() {
          console.log(this.data);
        }
      }, {
        key: "selectStudent",
        value: function selectStudent(index) {
          var dailogRef = this.dialog.open(_student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_1__["StudentModalComponent"], {
            panelClass: "col-md-6",
            hasBackdrop: true,
            disableClose: true,
            data: {
              studentData: this.hardCodeData,
              district: this.districtsList
            }
          });
        }
      }, {
        key: "checkValue",
        value: function checkValue(index, role) {
          debugger;
          this.data.screens[index].access[role] = !this.data.screens[index].access[role];
        }
      }]);

      return RoleManagementComponent;
    }();

    RoleManagementComponent.ɵfac = function RoleManagementComponent_Factory(t) {
      return new (t || RoleManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    RoleManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoleManagementComponent,
      selectors: [["app-role-management"]],
      decls: 19,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "animated", "rotateInUpLeft"], [1, "card", "w-100", "m-auto"], [1, "text-center"], [1, "card-body"], [1, "table-responsive"], [1, "table", "text-center"], [1, "table-dark"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card-footer", "text-right"], [1, "my-btn", 3, "click"], [3, "ngClass"], [1, "hover", 3, "click"], [1, "toggleSwitch", "nolabel"], ["type", "checkbox", "name", "role", 3, "ngModel", "change", "ngModelChange"]],
      template: function RoleManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Role Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Screen Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RoleManagementComponent_th_13_Template, 2, 1, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoleManagementComponent_tr_15_Template, 4, 5, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_Template_button_click_17_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.screens);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 0.8em;\n  width: 400px;\n  margin: 0 auto;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n\n\n.toggleSwitch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen {\n  .toggleSwitch[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 18px;\n    position: relative;\n    overflow: visible;\n    padding: 0;\n    margin-left: 50px;\n    cursor: pointer;\n    width: 40px;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .toggleSwitch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    line-height: 20px;\n    height: 20px;\n    vertical-align: middle;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ a[_ngcontent-%COMP%], .toggleSwitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%] {\n    outline: none;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 3;\n    display: block;\n    width: 100%;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    z-index: 5;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -50px;\n    width: 100%;\n    margin: 0;\n    padding-right: 50px;\n    text-align: left;\n    white-space: nowrap;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 5;\n    display: block;\n    width: 50%;\n    margin-left: 50px;\n    text-align: left;\n    font-size: 0.9em;\n    width: 100%;\n    left: 15%;\n    top: -1px;\n    opacity: 0;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 50%;\n    z-index: 4;\n    display: block;\n    height: 100%;\n    padding: 0;\n    left: 2px;\n    width: 18px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 100%;\n    transition: all 0.2s ease-out;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n    color: #ccc;\n    opacity: 1;\n    left: 45%;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 50px;\n    top: -2px;\n    background-color: #fafafa;\n    border: 1px solid #ccc;\n    border-radius: 30px;\n    transition: all 0.2s ease-out;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ a[_ngcontent-%COMP%] {\n    border-color: #fff;\n    left: 100%;\n    margin-left: -8px;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:before {\n    border-color: #0097d1;\n    box-shadow: inset 0 0 0 30px #0097d1;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n    opacity: 0;\n  }\n\n  .toggleSwitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type {\n    opacity: 1;\n    color: #fff;\n  }\n\n  \n  .toggleSwitch.large[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 27px;\n  }\n\n  .toggleSwitch.large[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n\n  .toggleSwitch.large[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    height: 29px;\n    line-height: 28px;\n  }\n\n  .toggleSwitch.large[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ a[_ngcontent-%COMP%] {\n    left: 41px;\n  }\n\n  .toggleSwitch.xlarge[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    height: 38px;\n    line-height: 37px;\n  }\n\n  .toggleSwitch.xlarge[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ a[_ngcontent-%COMP%] {\n    left: 52px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L3JvbGUtbWFuYWdlbWVudC9yb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9yb2xlLW1hbmFnZW1lbnQvcm9sZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBLG9CQUFBOztBQUVBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUNBRjs7RURFQTtJQUdFLHNCQUFBO0VDQ0Y7O0VEQ0E7O0lBRUUsaUJBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7RUNFRjs7RURBQTs7SUFFRSxhQUFBO0VDR0Y7O0VEREE7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtFQ0lGOztFREZBO0lBQ0Usa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQ0tGOztFREhBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNNRjs7RURKQTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDT0Y7O0VETEE7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFHQSw2QkFBQTtJQUNBLHlDQUFBO0VDUUY7O0VETkE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUNTRjs7RURQQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBR0EsNkJBQUE7RUNVRjs7RURSQTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDV0Y7O0VEVEE7SUFDRSxxQkFBQTtJQUNBLG9DQUFBO0VDWUY7O0VEVkE7SUFDRSxVQUFBO0VDYUY7O0VEWEE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtFQ2NGOztFRFpBLGlCQUFBO0VBQ0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ2VGOztFRGJBO0lBQ0UsV0FBQTtFQ2dCRjs7RURkQTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtFQ2lCRjs7RURmQTtJQUNFLFVBQUE7RUNrQkY7O0VEZkE7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUNrQkY7O0VEaEJBO0lBQ0UsVUFBQTtFQ21CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JvbGUtbWFuYWdlbWVudC9yb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4vKiAgVG9nZ2xlIFN3aXRjaCAgKi9cblxuLnRvZ2dsZVN3aXRjaCBzcGFuIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4ge1xuICAudG9nZ2xlU3dpdGNoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoICoge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGxhYmVsLFxuICAudG9nZ2xlU3dpdGNoID4gc3BhbiB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLnRvZ2dsZVN3aXRjaCBpbnB1dDpmb2N1cyB+IGEsXG4gIC50b2dnbGVTd2l0Y2ggaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiA1O1xuICB9XG4gIC50b2dnbGVTd2l0Y2ggPiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC50b2dnbGVTd2l0Y2ggPiBzcGFuIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDE1JTtcbiAgICB0b3A6IC0xcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTAlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGVmdDogMnB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAudG9nZ2xlU3dpdGNoID4gc3BhbiBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbGVmdDogNDUlO1xuICB9XG4gIC50b2dnbGVTd2l0Y2ggPiBzcGFuOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgdG9wOiAtMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGlucHV0OmNoZWNrZWQgfiBhIHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgbGVmdDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGlucHV0OmNoZWNrZWQgfiBzcGFuOmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5N2QxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMwcHggIzAwOTdkMTtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGlucHV0OmNoZWNrZWQgfiBzcGFuIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoIGlucHV0OmNoZWNrZWQgfiBzcGFuIHNwYW46bGFzdC1vZi10eXBlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC8qIFN3aXRjaCBTaXplcyAqL1xuICAudG9nZ2xlU3dpdGNoLmxhcmdlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gIH1cbiAgLnRvZ2dsZVN3aXRjaC5sYXJnZSBhIHtcbiAgICB3aWR0aDogMjdweDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoLmxhcmdlID4gc3BhbiB7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG4gIC50b2dnbGVTd2l0Y2gubGFyZ2UgaW5wdXQ6Y2hlY2tlZCB+IGEge1xuICAgIGxlZnQ6IDQxcHg7XG4gIH1cblxuICAudG9nZ2xlU3dpdGNoLnhsYXJnZSA+IHNwYW4ge1xuICAgIGhlaWdodDogMzhweDtcbiAgICBsaW5lLWhlaWdodDogMzdweDtcbiAgfVxuICAudG9nZ2xlU3dpdGNoLnhsYXJnZSBpbnB1dDpjaGVja2VkIH4gYSB7XG4gICAgbGVmdDogNTJweDtcbiAgfVxufVxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLyogIFRvZ2dsZSBTd2l0Y2ggICovXG4udG9nZ2xlU3dpdGNoIHNwYW4gc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiB7XG4gIC50b2dnbGVTd2l0Y2gge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG5cbiAgLnRvZ2dsZVN3aXRjaCAqIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAudG9nZ2xlU3dpdGNoIGxhYmVsLFxuLnRvZ2dsZVN3aXRjaCA+IHNwYW4ge1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLnRvZ2dsZVN3aXRjaCBpbnB1dDpmb2N1cyB+IGEsXG4udG9nZ2xlU3dpdGNoIGlucHV0OmZvY3VzICsgbGFiZWwge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAudG9nZ2xlU3dpdGNoIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50b2dnbGVTd2l0Y2ggaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAudG9nZ2xlU3dpdGNoID4gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC50b2dnbGVTd2l0Y2ggPiBzcGFuIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDE1JTtcbiAgICB0b3A6IC0xcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIC50b2dnbGVTd2l0Y2ggYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgei1pbmRleDogNDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBsZWZ0OiAycHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5cbiAgLnRvZ2dsZVN3aXRjaCA+IHNwYW4gc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgICBjb2xvcjogI2NjYztcbiAgICBvcGFjaXR5OiAxO1xuICAgIGxlZnQ6IDQ1JTtcbiAgfVxuXG4gIC50b2dnbGVTd2l0Y2ggPiBzcGFuOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgdG9wOiAtMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgfVxuXG4gIC50b2dnbGVTd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IGEge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICB9XG5cbiAgLnRvZ2dsZVN3aXRjaCBpbnB1dDpjaGVja2VkIH4gc3BhbjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogIzAwOTdkMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMHB4ICMwMDk3ZDE7XG4gIH1cblxuICAudG9nZ2xlU3dpdGNoIGlucHV0OmNoZWNrZWQgfiBzcGFuIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIC50b2dnbGVTd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IHNwYW4gc3BhbjpsYXN0LW9mLXR5cGUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAvKiBTd2l0Y2ggU2l6ZXMgKi9cbiAgLnRvZ2dsZVN3aXRjaC5sYXJnZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICB9XG5cbiAgLnRvZ2dsZVN3aXRjaC5sYXJnZSBhIHtcbiAgICB3aWR0aDogMjdweDtcbiAgfVxuXG4gIC50b2dnbGVTd2l0Y2gubGFyZ2UgPiBzcGFuIHtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAudG9nZ2xlU3dpdGNoLmxhcmdlIGlucHV0OmNoZWNrZWQgfiBhIHtcbiAgICBsZWZ0OiA0MXB4O1xuICB9XG5cbiAgLnRvZ2dsZVN3aXRjaC54bGFyZ2UgPiBzcGFuIHtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIH1cblxuICAudG9nZ2xlU3dpdGNoLnhsYXJnZSBpbnB1dDpjaGVja2VkIH4gYSB7XG4gICAgbGVmdDogNTJweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-role-management",
          templateUrl: "./role-management.component.html",
          styleUrls: ["./role-management.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/side-nav/side-nav.component.ts": function srcAppLayoutSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
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

    function SideNavComponent_li_2_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", nav_r1.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r1.name, " ");
      }
    }

    function SideNavComponent_li_2_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", nav_r1.link)("queryParams", nav_r1.queryParam);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nav_r1.name, " ");
      }
    }

    function SideNavComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_li_2_a_1_Template, 2, 2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_li_2_a_2_Template, 2, 3, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !nav_r1.isQuery);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nav_r1.isQuery);
      }
    }

    var SideNavComponent = /*#__PURE__*/function () {
      function SideNavComponent(apiService, router) {
        _classCallCheck(this, SideNavComponent);

        this.apiService = apiService;
        this.router = router;
        this.navlinkList = [];
        this.rolesList = [];
        this.userRoles = [];
        this.isSideNavOpened = false;
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.userRoles = this.apiService.getRole();
          var allNavLinks = [{
            name: "User Management",
            link: ["/admin/user-management"],
            isQuery: false,
            icon: ""
          }, {
            name: "Papers",
            link: ["/admin/papers/paper-list"],
            isQuery: false,
            icon: ""
          }, {
            name: "Students",
            link: ["/admin/student-edit"],
            isQuery: false,
            icon: ""
          }, {
            name: "Upload Paper",
            link: ["/admin/paper-upload"],
            isQuery: false,
            icon: ""
          }, {
            name: "Evaluation",
            link: ["/admin/evaluation/paper"],
            isQuery: false,
            icon: ""
          }, {
            name: "Gallery",
            link: ["/admin/gallery-upload"],
            isQuery: false,
            icon: ""
          }, {
            name: "Students Stats",
            link: ["/admin/student-stats"],
            isQuery: false,
            icon: ""
          }, {
            name: "Student Details",
            link: ["/admin/student-edit"],
            isQuery: true,
            queryParam: {
              isdetails: true
            },
            icon: ""
          }, {
            name: "Compute Final Results",
            link: ["/admin/compute-final-results"],
            isQuery: false,
            icon: ""
          }];
          var userManagement = allNavLinks[0];
          var papers = allNavLinks[1];
          var students = allNavLinks[2];
          var evaluation = allNavLinks[3];
          var gallery = allNavLinks[4];
          var studentDetails = allNavLinks[5];
          var studentUpdate = allNavLinks[6];

          if (this.userRoles.indexOf("ADMIN") > -1 || this.userRoles.indexOf("SUPER_ADMIN") > -1) {
            this.navlinkList = allNavLinks;
          } else if (this.userRoles.indexOf("VERIFIER") > -1) {
            this.navlinkList.push(students, evaluation, gallery, studentDetails, studentUpdate);
          } else if (this.userRoles.indexOf("EVALUATOR") > -1) {
            this.navlinkList.push(gallery, studentDetails);
          } else if (this.userRoles.indexOf("VOLUNTEER") > -1) {
            this.navlinkList.push(gallery);
          } else if (this.userRoles.indexOf("STUDENT") > -1) {} else if (this.userRoles.indexOf("QUESTION_MAKER") > -1) {}

          if (this.navlinkList && this.navlinkList.length) {
            this.router.navigate(this.navlinkList[0].link);
          }

          this.apiService.sideNavOpened.subscribe(function (flag) {
            if (_this4.isSideNavOpened !== flag) {
              _this4.isSideNavOpened = flag;
            }
          });
          this.rolesList = this.apiService.rolesList;
        }
      }, {
        key: "closeSideNav",
        value: function closeSideNav() {
          if (this.isSideNavOpened) {
            this.apiService.sideNavOpened.next(false);
          }
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return !!(this.rolesList.indexOf("ADMIN") > -1);
        }
      }, {
        key: "isEmployee",
        get: function get() {
          return !!(this.rolesList.indexOf("USER") > -1);
        }
      }, {
        key: "isSecurity",
        get: function get() {
          return !!(this.rolesList.indexOf("SECURITY") > -1);
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
      return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideNavComponent,
      selectors: [["app-side-nav"]],
      decls: 3,
      vars: 1,
      consts: [[1, "side-nav"], ["routerLinkActive", "active", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active"], [3, "routerLink", 4, "ngIf"], [3, "routerLink", "queryParams", 4, "ngIf"], [3, "routerLink"], [3, "routerLink", "queryParams"]],
      template: function SideNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_li_2_Template, 3, 2, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navlinkList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".side-nav[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 5px -3px 15px 0px rgba(0, 0, 0, 0.2);\n  height: 100%;\n  min-width: 180px;\n}\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0px;\n  padding-bottom: 1.25rem;\n}\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n  padding-left: 1.25rem;\n}\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-right: 0.68rem;\n}\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  display: flex;\n  align-items: center;\n  transition: all 0.35s ease;\n  white-space: nowrap;\n  font-size: 0.875rem;\n  width: 100%;\n  cursor: pointer;\n}\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #15558d0d;\n}\n.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #2196F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3JhdmFuaWJhbG5lL0RvY3VtZW50cy9zYWRpc2hhL210dC11aS9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKO0FEQ0k7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7QUNBUjtBREVRO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQ0FaO0FEQ1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ2hCO0FEQ1k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ2hCO0FERVk7RUFDSSwyQkUxQkY7QUQwQmQ7QURLZ0I7RUFDSSxjRS9CUjtBRDRCWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcbi5zaWRlLW5hdiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiA1cHggLTNweCAxNXB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZTtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZSwgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJEVneXB0aWFuQmx1ZTtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbGw6ICMyMTk2RjM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbHRlcjogaW52ZXJ0KDQ4JSkgc2VwaWEoNzklKSBzYXR1cmF0ZSgyNDc2JSkgaHVlLXJvdGF0ZSg4NmRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMTklKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkRG9kZ2VyQmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5zaWRlLW5hdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDVweCAtM3B4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDE4MHB4O1xufVxuLnNpZGUtbmF2IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG59XG4uc2lkZS1uYXYgdWwgbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG59XG4uc2lkZS1uYXYgdWwgbGkgLmljb24ge1xuICB3aWR0aDogMS4yNXJlbTtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNjhyZW07XG59XG4uc2lkZS1uYXYgdWwgbGkgYSB7XG4gIG1pbi1oZWlnaHQ6IDIuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZS1uYXYgdWwgbGkuYWN0aXZlLCAuc2lkZS1uYXYgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1NThkMGQ7XG59XG4uc2lkZS1uYXYgdWwgbGkuYWN0aXZlIGEsIC5zaWRlLW5hdiB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6ICMyMTk2RjM7XG59IiwiJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuJHByaW1hcnlDb2xvcjogIzZlNjNmZjtcbiRicmFuZFByaW1hcnlDb2xvcjogIzJhMGEwYTtcbiR3aGl0ZVNtb2tlRGFyazojYWRhZGFkO1xuJHdoaXRlU21va2U6I0YyRjJGMjtcbiRFZ3lwdGlhbkJsdWU6IzE1NTU4ZDBkO1xuJERvZGdlckJsdWU6IzIxOTZGMztcbiR3aGl0ZVNtb2tlbGlnaHQ6I2RhZGFkYTtcbiRicmFuZFNlY29uZGFyeUNvbG9yOiAjZjIxYjNmO1xuJHByaW1hcnlIb3ZlcjogIzlhNTVmZjFhO1xuJG1haW5CZ0NvbG9yOiAjZjJlZGYzO1xuJHNob3dDb2xvcjogIzAwMWY0MztcbiRlcnJvckNvbG9yOiAjZGMzNTQ1O1xuJGluZGlnbzojOTIzOGFlO1xuJFBhbmFjaGUtZ3JlZW46I0VFRkFFRjtcbiRQdXJwdWwtd2hpdGU6I0U0RERFNjtcbiRhbGljZS1ibHVlOiAjRTlGN0ZEO1xuJGZsb3JhbC13aGl0ZTojRkZGN0VBO1xuJGRvZGdlci1ibHVlOiAjMTk5MUVCO1xuJHdhcm5pbmctY29sb3I6I0Y3OTgxQztcbiRDaGFibGlzLXJlZDojRkVFQkVCO1xuJGVycm9yLWNvbG9yOiAjRUQxQzI0O1xuJHN1Y2Nlc3MtY29sOiAjMUJCOTM0O1xuJGRhcmstYmctY29sb3I6ICMxOTFjMjQ7XG4kYmdHcmFkaWVudENvbG9yOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZlNjNmZiAwJSwgIzk3MzJhMyAxMDAlKTsiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-side-nav",
          templateUrl: "./side-nav.component.html",
          styleUrls: ["./side-nav.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/student-edit/student-edit.component.ts": function srcAppLayoutStudentEditStudentEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentEditComponent", function () {
      return StudentEditComponent;
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


    var _student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../student-modal/student-modal.component */
    "./src/app/layout/student-modal/student-modal.component.ts");
    /* harmony import */


    var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../directives/numbers-only.directive */
    "./src/app/directives/numbers-only.directive.ts");

    function StudentEditComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function StudentEditComponent_div_4_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.getStudentDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Student User Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentEditComponent_div_4_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.studentId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Get Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.studentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.studentId);
      }
    }

    function StudentEditComponent_div_5_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Student Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Parent Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Gender ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Zone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Mandal/Taluk");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select School");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_span_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_span_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Valid Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_span_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_span_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Valid Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_span_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_span_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Updating...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentEditComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function StudentEditComponent_div_5_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.updateStudent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Student User Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Student Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StudentEditComponent_div_5_div_13_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Parent Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, StudentEditComponent_div_5_div_20_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Gender ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ng-select", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, StudentEditComponent_div_5_div_27_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Zone ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ng-select", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StudentEditComponent_div_5_Template_ng_select_change_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.onSelectDistrict();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, StudentEditComponent_div_5_div_34_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Mandal/Taluk ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StudentEditComponent_div_5_Template_ng_select_change_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onSelectMandal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, StudentEditComponent_div_5_div_41_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select School ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "ng-select", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StudentEditComponent_div_5_div_48_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, StudentEditComponent_div_5_span_56_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, StudentEditComponent_div_5_span_57_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Secondary Contact ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, StudentEditComponent_div_5_span_65_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, StudentEditComponent_div_5_span_66_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, StudentEditComponent_div_5_span_69_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, StudentEditComponent_div_5_span_70_Template, 2, 0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentEditComponent_div_5_Template_button_click_71_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.resetForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentEditComponent_div_5_Template_button_click_73_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          return ctx_r25.deleteStudent(_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentEditComponent_div_5_Template_button_click_76_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          return ctx_r26.clearAnswers(_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Clear Answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_16_0 = null;
        var currVal_16 = (ctx_r1.studentsForm.get("contactNumber").touched || ctx_r1.formSubmitted) && ((tmp_16_0 = ctx_r1.studentsForm.get("contactNumber")) == null ? null : tmp_16_0.value == null ? null : tmp_16_0.value.length) > 0 && ((tmp_16_0 = ctx_r1.studentsForm.get("contactNumber")) == null ? null : tmp_16_0.value == null ? null : tmp_16_0.value.length) < 10;
        var tmp_18_0 = null;
        var currVal_18 = (ctx_r1.studentsForm.get("secondaryContact").touched || ctx_r1.formSubmitted) && ((tmp_18_0 = ctx_r1.studentsForm.get("secondaryContact")) == null ? null : tmp_18_0.value == null ? null : tmp_18_0.value.length) > 0 && ((tmp_18_0 = ctx_r1.studentsForm.get("secondaryContact")) == null ? null : tmp_18_0.value == null ? null : tmp_18_0.value.length) < 10;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.studentsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("studentName").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("studentName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("parentName").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("parentName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.genders)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("gender").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("gender").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.districtsList)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("zone").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("zone").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.mandalsList)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("mandal").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("mandal").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.schoolsList)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("schoolName").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("schoolName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("contactNumber").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("contactNumber").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.studentsForm.get("secondaryContact").touched || ctx_r1.formSubmitted) && ctx_r1.studentsForm.get("secondaryContact").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isAPILoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isAPILoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAPILoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isAPILoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isAPILoading);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        selected: a0
      };
    };

    function StudentEditComponent_div_6_tr_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentEditComponent_div_6_tr_24_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var i_r29 = ctx.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r30.selectStudent(i_r29);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r28 = ctx.$implicit;
        var i_r29 = ctx.index;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r27.selectedIndex == i_r29));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", student_r28.Name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r28.parentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r28.score);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r28.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r28.questionsSolved);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r28.school);
      }
    }

    function StudentEditComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Students List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Parent Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Class");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "District");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "School");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StudentEditComponent_div_6_tr_24_Template, 14, 9, "tr", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.studentsList);
      }
    }

    function StudentEditComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentEditComponent_ng_template_7_Template_button_click_1_listener() {
          var d_r33 = ctx.dismiss;
          return d_r33("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure,");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentEditComponent_ng_template_7_Template_button_click_12_listener() {
          var d_r33 = ctx.dismiss;
          return d_r33("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xA0 \xA0 Cancel \xA0 \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA0 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentEditComponent_ng_template_7_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \xA0 \xA0 Delete \xA0 \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.alertMsg);
      }
    }

    var StudentEditComponent = /*#__PURE__*/function () {
      function StudentEditComponent(apiService, fb, dialog, modalService, config, router, activatedRoute) {
        var _this5 = this;

        _classCallCheck(this, StudentEditComponent);

        this.apiService = apiService;
        this.fb = fb;
        this.dialog = dialog;
        this.modalService = modalService;
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.studentDetails = {};
        this.showEditForm = false;
        this.isAPILoading = false;
        this.formSubmitted = false;
        this.showForm = true;
        this.newStudent = {};
        this.genders = ["Male", "Female"];
        this.classesList = ["10th Class"];
        this.mediusList = ["Telugu", "English"];
        this.districtsList = [];
        this.schoolsList = [];
        this.mandalsList = [];
        this.studentsList = [];
        this.hardCodeData = {};
        this.showTable = false;
        this.isClearAns = false;
        this.alertMsg = "";
        this.isStudentDetails = false;
        this.selectedIndex = 0;
        this.activatedRoute.queryParams.subscribe(function (params) {
          _this5.isStudentDetails = params.isdetails === "true";
        });
        this.isStudentDetails && this.getRandomStudent();
      }

      _createClass(StudentEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.getAllStudents();
          this.initEditForm();
          this.getAllSchools();
          this.studentsList = this.apiService.dummyStudents;
        }
      }, {
        key: "initEditForm",
        value: function initEditForm() {
          this.studentsForm = this.fb.group({
            studentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            //studentClass: ["10th Class", Validators.required], commenting this validator as it's not required currently
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mandal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            schoolName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            secondaryContact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userName: [null]
          });
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(content) {
          this.isClearAns = false;
          this.alertMsg = "Do You want to delete this Student..!";
          this.modalService.open(content);
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.isClearAns ? this.confirmClearAns() : this.confirmDelete();
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete() {
          var _this6 = this;

          this.apiService.showLoader.next(true);
          this.apiService.deleteStudent(this.studentId).subscribe(function (res) {
            _this6.apiService.showLoader.next(false);

            var responce = JSON.parse(res);

            _this6.apiService.genericMessage(responce.message, "success");

            _this6.modalService.dismissAll();

            _this6.showEditForm = false;
          }, function (err) {
            _this6.apiService.showLoader.next(false);

            _this6.modalService.dismissAll();

            if (err.status === 401) {
              _this6.router.navigate(["/login"]);

              return;
            }

            if (err.error) {
              var serverError = typeof err.error === "string" ? JSON.parse(err.error) : {};

              _this6.apiService.genericMessage(serverError.error || "something went wrong", "error");
            }

            console.log(err);
          });
        }
      }, {
        key: "clearAnswers",
        value: function clearAnswers(content) {
          this.isClearAns = true;
          this.alertMsg = "Do You want to clear this Student answers";
          this.modalService.open(content);
        }
      }, {
        key: "confirmClearAns",
        value: function confirmClearAns() {
          var _this7 = this;

          this.apiService.showLoader.next(true);
          this.apiService.clearStudentAns(this.studentId).subscribe(function (res) {
            _this7.apiService.showLoader.next(false);

            _this7.apiService.genericMessage(res, "success");

            _this7.modalService.dismissAll();

            _this7.showEditForm = false;
          }, function (err) {
            _this7.apiService.showLoader.next(false);

            _this7.modalService.dismissAll();

            if (err.status === 401) {
              _this7.router.navigate(["/login"]);

              return;
            }

            if (err.error) {
              var serverError = typeof err.error === "string" ? JSON.parse(err.error) : {};

              _this7.apiService.genericMessage(serverError.error || "something went wrong", "error");
            }

            console.log(err);
          });
        }
      }, {
        key: "showStudentDetails",
        value: function showStudentDetails(res) {
          if (res && res.user) {
            this.studentDetails = res.user;
            this.hardCodeData = _objectSpread({}, this.studentDetails);
            this.hardCodeData.studentName = this.studentDetails.studentName || this.studentDetails.name;
            this.studentId = this.studentDetails.userName;
            this.studentDetails.studentName = this.studentDetails.studentName || this.studentDetails.name;
            this.studentsForm.patchValue(_objectSpread({}, this.studentDetails));
            this.studentsForm.patchValue({
              mandal: res.school.mandal,
              schoolName: res.school.schoolName
            });
            this.studentsForm.get("parentName").setValue(res.student.parentName);
            this.studentsForm.get("secondaryContact").setValue(res.student.secondaryContact);
            this.onSelectDistrict();
            this.showEditForm = true;
            console.log('this.studentsForm:', this.studentsForm);
          } else {
            this.apiService.genericMessage(res.message || "No Student Found", "info");
          }
        }
      }, {
        key: "getStudentDetails",
        value: function getStudentDetails() {
          var _this8 = this;

          this.apiService.showLoader.next(true);

          try {
            this.apiService.getStudentDetails(this.studentId).subscribe(function (res) {
              _this8.apiService.showLoader.next(false);

              _this8.showStudentDetails(res);
            }, function (err) {
              _this8.apiService.showLoader.next(false);

              if (err.status === 401) {
                _this8.router.navigateByUrl("/login");
              } else {
                console.warn(err.message);
              }
            });
          } catch (e) {
            this.apiService.showLoader.next(false);
            console.log("Student error", e);
          }
        }
      }, {
        key: "selectStudent",
        value: function selectStudent(index) {
          var dailogRef = this.dialog.open(_student_modal_student_modal_component__WEBPACK_IMPORTED_MODULE_2__["StudentModalComponent"], {
            panelClass: "col-md-6",
            hasBackdrop: true,
            disableClose: true,
            data: {
              studentData: this.hardCodeData,
              district: this.districtsList
            }
          });
        }
      }, {
        key: "formatDistrictsData",
        value: function formatDistrictsData(data) {
          if (data && Object.keys(data).length) {
            this.districtsList = Object.keys(data).map(function (key) {
              var mandals = Object.keys(data[key]).map(function (mandalName) {
                return {
                  name: mandalName,
                  schools: data[key][mandalName]
                };
              });
              return {
                name: key,
                mandals: mandals
              };
            });
          }
        }
      }, {
        key: "getAllSchools",
        value: function getAllSchools() {
          var _this9 = this;

          try {
            this.apiService.showLoader.next(true);
            this.apiService.getListOfSchools().subscribe(function (res) {
              _this9.apiService.showLoader.next(false);

              if (res && Object.keys(res)) {
                _this9.formatDistrictsData(res);
              }
            }, function (error) {
              _this9.apiService.showLoader.next(false); // if (error.status === 401) {
              //   this.router.navigate(['/login']);
              //   return;
              // }


              if (error.error) {
                var serverError = typeof error.error === "string" ? JSON.parse(error.error) : {};

                _this9.apiService.genericMessage(serverError.error || "something went wrong", "error");
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "getRandomStudent",
        value: function getRandomStudent() {
          var _this10 = this;

          try {
            this.apiService.showLoader.next(true);
            this.apiService.getRandomStudent().subscribe(function (res) {
              _this10.apiService.showLoader.next(false);

              if (res) {
                _this10.showStudentDetails(res); // this.formatDistrictsData(res);

              }
            }, function (error) {
              _this10.apiService.showLoader.next(false); // if (error.status === 401) {
              //   this.router.navigate(['/login']);
              //   return;
              // }


              if (error.error) {
                var serverError = typeof error.error === "string" ? JSON.parse(error.error) : {};

                _this10.apiService.genericMessage(serverError.error || "something went wrong", "error");
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "onSelectDistrict",
        value: function onSelectDistrict() {
          var _this11 = this;

          this.mandalsList = [];

          var val = _objectSpread({}, this.studentsForm.value);

          if (val.zone.name) {
            this.mandalsList = val.zone.mandals;
            return;
          }

          var selectedDist = this.districtsList.filter(function (val) {
            return _this11.studentsForm.value.zone === val.name;
          });

          if (selectedDist[0] && selectedDist[0].mandals) {
            this.mandalsList = selectedDist[0].mandals;
          }
        }
      }, {
        key: "onSelectMandal",
        value: function onSelectMandal() {
          this.schoolsList = [];
          console.log(this.mandalsList);
          var selectedMandal = this.studentsForm.value.mandal;
          console.log(selectedMandal);

          if (selectedMandal && selectedMandal.schools) {
            this.schoolsList = selectedMandal.schools;
          }
        }
      }, {
        key: "updateStudent",
        value: function updateStudent() {
          var _this12 = this;

          this.newStudent = {};
          this.formSubmitted = true;

          if (this.studentsForm.invalid) {
            return;
          }

          var payload = _objectSpread({}, this.studentsForm.value);

          if (payload.contactNumber.length < 10) {
            return;
          }

          payload.zone = payload.zone && payload.zone.name ? payload.zone.name : "";
          payload.center = "";
          delete payload.mandal;

          try {
            this.apiService.showLoader.next(true);
            this.apiService.updateStudent(payload, this.studentId).subscribe(function (res) {
              if (res) {
                _this12.showForm = false;
                _this12.newStudent = res;
              }

              _this12.apiService.showLoader.next(false);

              _this12.apiService.genericMessage("Successfully registered!", "success");

              _this12.resetForm();

              _this12.isStudentDetails && _this12.getRandomStudent();
            }, function (error) {
              _this12.apiService.showLoader.next(false); // if (error.status === 401) {
              //   this.router.navigate(['/login']);
              //   return;
              // }


              if (error.error) {
                var serverError = typeof error.error === "string" ? JSON.parse(error.error) : {};

                _this12.apiService.genericMessage(serverError.error || "something went wrong", "error");
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.studentsForm.reset();
          this.formSubmitted = false;
          this.isAPILoading = false;
          this.studentId = "";
          this.showEditForm = false;
        }
      }]);

      return StudentEditComponent;
    }();

    StudentEditComponent.ɵfac = function StudentEditComponent_Factory(t) {
      return new (t || StudentEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    StudentEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentEditComponent,
      selectors: [["app-student-edit"]],
      decls: 9,
      vars: 3,
      consts: [[1, "page"], [1, "page-header", "primary-text", "f-22", "m-t-5", "m-b-20", "font-italic"], [1, "page-content"], ["class", "student-field", 4, "ngIf"], [4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], ["content1", ""], [1, "student-field"], [3, "submit"], [1, "container-fluid"], [1, "row"], [1, "form-group", "col-12", "col-sm-6", "col-md-4"], [1, "label"], [1, "required-star"], [1, "input-group", "w-100"], ["type", "text", "name", "studentId", "id", "studentName", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "submit", 1, "my-btn", "my-btn-primary", "ml-3", 3, "disabled"], [3, "formGroup", "submit"], ["type", "text", "formControlName", "userName", "id", "studentUserName", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "studentName", "id", "studentName", 1, "form-control"], ["class", "f-14 error-message", 4, "ngIf"], ["type", "text", "formControlName", "parentName", "id", "parentName", 1, "form-control"], ["formControlName", "gender", "id", "gender", "name", "gender", 3, "items", "clearable"], ["formControlName", "zone", "id", "zone", "name", "zone", "bindLabel", "name", 3, "items", "clearable", "change"], ["formControlName", "mandal", "id", "mandal", "name", "mandal", "bindLabel", "name", 3, "items", "clearable", "change"], ["formControlName", "schoolName", "id", "schoolName", "name", "schoolName", 3, "items", "clearable"], ["type", "text", "numbersOnly", "", "maxlength", "10", "minlength", "10", "formControlName", "contactNumber", "id", "contactNumber", 1, "form-control"], [1, "f-14", "error-message"], ["type", "text", "numbersOnly", "", "maxlength", "10", "minlength", "10", "formControlName", "secondaryContact", "id", "secondaryContact", 1, "form-control"], [1, "m-t-28", "text-center"], ["type", "submit", 1, "my-btn", "my-btn-primary", 3, "disabled"], ["type", "button", 1, "my-btn", "cancel-btn", "m-l-28", 3, "click"], ["type", "button", 1, "my-btn", "my-btn-danger", "m-l-28", "mr-2", 3, "disabled", "click"], ["type", "button", 1, "my-btn", "my-btn-danger", "mr-2", 3, "disabled", "click"], [1, "col-md-12", "animated", "rotateInUpLeft"], [1, "card", "w-100", "m-auto"], [1, "text-center"], [1, "card-body"], [1, "table-responsive"], [1, "table", "text-center"], [1, "table-dark"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "hover", 3, "click"], [1, "img-path"], [1, "modal-header", "border-bottom-0"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "close-icon"], [1, "container-fluid", 2, "padding", "24px"], [1, "row", "justify-content-center"], [1, "col-10", "text-center"], [1, "modal-msg"], [1, "d-flex", "justify-content-center", "pb-2", "mt-3"], [1, "text-black-50", "btn", "btn-light", "rounded-pill", "hover", 2, "font-weight", "400", "border", "1px solid grey", 3, "click"], [1, "text-white", "rounded-pill", "btn", "btn-danger", "hover", 2, "font-weight", "400", 3, "click"]],
      template: function StudentEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit student ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StudentEditComponent_div_4_Template, 14, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StudentEditComponent_div_5_Template, 79, 24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StudentEditComponent_div_6_Template, 25, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StudentEditComponent_ng_template_7_Template, 18, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEditForm && !ctx.isStudentDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_9__["NumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
      styles: [".modal-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.modal-msg[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L3N0dWRlbnQtZWRpdC9zdHVkZW50LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zdHVkZW50LWVkaXQvc3R1ZGVudC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zdHVkZW50LWVkaXQvc3R1ZGVudC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlciB7XG4gIC5jbG9zZS1pY29uIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuLm1vZGFsLW1zZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIiwiLm1vZGFsLWhlYWRlciAuY2xvc2UtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ubW9kYWwtbXNnIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-student-edit",
          templateUrl: "./student-edit.component.html",
          styleUrls: ["./student-edit.component.scss"]
        }]
      }], function () {
        return [{
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/student-modal/student-modal.component.ts": function srcAppLayoutStudentModalStudentModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModalComponent", function () {
      return StudentModalComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/numbers-only.directive */
    "./src/app/directives/numbers-only.directive.ts");

    function StudentModalComponent_div_5_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Student Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Parent Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Class ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Gender ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select District ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Mandal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select School ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_span_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_span_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Valid Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_span_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_span_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Updating...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentModalComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function StudentModalComponent_div_5_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.updateStudent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Student Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentModalComponent_div_5_div_9_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Parent Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StudentModalComponent_div_5_div_16_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Student Class ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ng-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, StudentModalComponent_div_5_div_23_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Gender ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "ng-select", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, StudentModalComponent_div_5_div_30_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " District ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StudentModalComponent_div_5_Template_ng_select_change_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onSelectDistrict();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, StudentModalComponent_div_5_div_37_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Mandal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ng-select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StudentModalComponent_div_5_Template_ng_select_change_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onSelectMandal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, StudentModalComponent_div_5_div_44_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Select School ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "ng-select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, StudentModalComponent_div_5_div_51_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Contact Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, StudentModalComponent_div_5_span_59_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, StudentModalComponent_div_5_span_60_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, StudentModalComponent_div_5_span_63_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, StudentModalComponent_div_5_span_64_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentModalComponent_div_5_Template_button_click_65_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.resetForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_19_0 = null;
        var currVal_19 = (ctx_r0.studentsForm.get("contactNumber").touched || ctx_r0.formSubmitted) && ((tmp_19_0 = ctx_r0.studentsForm.get("contactNumber")) == null ? null : tmp_19_0.value == null ? null : tmp_19_0.value.length) > 0 && ((tmp_19_0 = ctx_r0.studentsForm.get("contactNumber")) == null ? null : tmp_19_0.value == null ? null : tmp_19_0.value.length) < 10;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.studentsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("studentName").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("studentName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("parentName").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("parentName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.classesList)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("studentClass").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("studentClass").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.genders)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("gender").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("gender").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.districtsList)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("zone").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("zone").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.mandalsList)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("mandal").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("mandal").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.schoolsList)("clearable", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("schoolName").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("schoolName").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.studentsForm.get("contactNumber").touched || ctx_r0.formSubmitted) && ctx_r0.studentsForm.get("contactNumber").hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isAPILoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAPILoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAPILoading);
      }
    }

    var StudentModalComponent = /*#__PURE__*/function () {
      function StudentModalComponent(dialogRef, data, fb) {
        _classCallCheck(this, StudentModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.showEditForm = false;
        this.genders = ["Male", "Female"];
        this.classesList = ["10th Class"];
        this.mediusList = ["Telugu", "English"];
        this.districtsList = [];
        this.schoolsList = [];
        this.mandalsList = [];
        this.studentsList = [];
        this.studentData = {};
        this.formSubmitted = false;
        this.isAPILoading = false;
      }

      _createClass(StudentModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.studentData = this.data.studentData;
          this.districtsList = this.data.district;
          this.initEditForm();
        }
      }, {
        key: "closeTab",
        value: function closeTab() {
          this.dialogRef.close();
        }
      }, {
        key: "initEditForm",
        value: function initEditForm() {
          this.studentsForm = this.fb.group({
            studentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            studentClass: ["10th Class", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mandal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            schoolName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userName: [null]
          });
          this.studentsForm.patchValue({
            studentName: this.studentData.studentName,
            parentName: this.studentData.parentName,
            studentClass: this.studentData.studentClass,
            gender: this.studentData.gender,
            zone: this.studentData.zone,
            mandal: this.studentData.mandal,
            schoolName: this.studentData.schoolName,
            contactNumber: this.studentData.contactNumber,
            userName: this.studentData.userName
          });
          this.showEditForm = true;
        }
      }, {
        key: "updateStudent",
        value: function updateStudent() {
          console.log("Student ", this.studentsForm.value);
        }
      }, {
        key: "onSelectDistrict",
        value: function onSelectDistrict() {
          this.mandalsList = [];
          var selectedDist = this.studentsForm.value.zone;

          if (selectedDist && selectedDist.mandals) {
            this.mandalsList = selectedDist.mandals;
          }
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.studentsForm.reset();
          this.formSubmitted = false;
          this.isAPILoading = false;
          this.studentId = "";
          this.showEditForm = false;
        }
      }, {
        key: "onSelectMandal",
        value: function onSelectMandal() {
          var _this13 = this;

          this.schoolsList = [];
          var selectedMandal = this.mandalsList.filter(function (val) {
            return _this13.studentsForm.value.mandal === val.name;
          }); // const selectedMandal = this.studentsForm.value.mandal;

          if (selectedMandal && selectedMandal[0].schools) {
            this.schoolsList = selectedMandal[0].schools;
          }
        }
      }]);

      return StudentModalComponent;
    }();

    StudentModalComponent.ɵfac = function StudentModalComponent_Factory(t) {
      return new (t || StudentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    StudentModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentModalComponent,
      selectors: [["app-student-modal"]],
      decls: 6,
      vars: 1,
      consts: [[1, "text-center", "bg-light", "p-3"], [1, ""], [1, "float-right", "hover", "text-right", 3, "click"], ["width", "40", "src", "../../../assets/icons/close-red-icon.svg", 2, "border-radius", "50%", "padding", "10px"], ["class", "container mb-2", 4, "ngIf"], [1, "container", "mb-2"], [3, "formGroup", "submit"], [1, "row"], [1, "form-group", "col-12", "col-md-6"], [1, "label"], [1, "required-star"], ["type", "text", "formControlName", "studentName", "id", "studentName", 1, "form-control"], ["class", "f-14 error-message", 4, "ngIf"], ["type", "text", "formControlName", "parentName", "id", "parentName", 1, "form-control"], ["formControlName", "studentClass", "id", "studentClass", "name", "studentClass", 3, "items", "clearable"], ["formControlName", "gender", "id", "gender", "name", "gender", 3, "items", "clearable"], ["formControlName", "zone", "id", "zone", "name", "zone", "bindLabel", "name", 3, "items", "clearable", "change"], ["formControlName", "mandal", "id", "mandal", "name", "mandal", "bindLabel", "name", 3, "items", "clearable", "change"], ["formControlName", "schoolName", "id", "schoolName", "name", "schoolName", 3, "items", "clearable"], ["type", "text", "numbersOnly", "", "maxlength", "10", "minlength", "10", "formControlName", "contactNumber", "id", "contactNumber", 1, "form-control"], [1, "f-14", "error-message"], [4, "ngIf"], [1, "m-t-28", "text-center"], ["type", "submit", 1, "my-btn", "my-btn-primary", 3, "disabled"], ["type", "button", 1, "my-btn", "cancel-btn", "m-l-28", 3, "click"]],
      template: function StudentModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Student Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentModalComponent_Template_span_click_3_listener() {
            return ctx.closeTab();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StudentModalComponent_div_5_Template, 67, 23, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]],
      styles: [".mat-dialog-container {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L3N0dWRlbnQtbW9kYWwvc3R1ZGVudC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3N0dWRlbnQtbW9kYWwvc3R1ZGVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3R1ZGVudC1tb2RhbC9zdHVkZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbiIsIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-student-modal",
          templateUrl: "./student-modal.component.html",
          styleUrls: ["./student-modal.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/student-stats/student-stats.component.ts": function srcAppLayoutStudentStatsStudentStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentStatsComponent", function () {
      return StudentStatsComponent;
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

    function StudentStatsComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var zone_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r2.n);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zone_r2.s);
      }
    }

    function StudentStatsComponent_div_14_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mandal_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mandal_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mandal_r7.students);
      }
    }

    function StudentStatsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MANDALS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NUMBER OF STUDENTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentStatsComponent_div_14_tr_11_Template, 5, 2, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var zones_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](zones_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", zones_r4.mandals);
      }
    }

    var StudentStatsComponent = /*#__PURE__*/function () {
      function StudentStatsComponent(apiService) {
        _classCallCheck(this, StudentStatsComponent);

        this.apiService = apiService;
        this.allUsers = [];
        this.allRoles = [];
        this.zones = [];
        this.mandals = [];
        this.districtsList = [];
        this.zonesList = [];
        this.schoolsList = [];
        this.mandalsList = [];
      }

      _createClass(StudentStatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStudentsStats();
        }
      }, {
        key: "getZonesStats",
        value: function getZonesStats() {
          var _iterator = _createForOfIteratorHelper(this.districtsList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var zone = _step.value;
              var name = zone.name;
              var students = 0;

              var _iterator2 = _createForOfIteratorHelper(zone.mandals),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var mandal = _step2.value;
                  students += mandal.students;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.zonesList.push({
                n: name,
                s: students
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log("Zones" + this.zonesList);
        }
      }, {
        key: "formatDistrictsData",
        value: function formatDistrictsData(data) {
          if (data && Object.keys(data).length) {
            this.districtsList = Object.keys(data).map(function (key) {
              var mandals = Object.keys(data[key]).map(function (mandalName) {
                return {
                  name: mandalName,
                  students: data[key][mandalName]
                };
              }); // Sort mandals by students

              mandals.sort(function (a, b) {
                return b.students - a.students;
              });
              return {
                name: key,
                mandals: mandals
              };
            });
            this.getZonesStats();
          }
        }
      }, {
        key: "getStudentsStats",
        value: function getStudentsStats() {
          var _this14 = this;

          try {
            this.apiService.showLoader.next(true);
            this.apiService.getStudentsStats().subscribe(function (res) {
              _this14.apiService.showLoader.next(false);

              console.log(res);

              if (res && Object.keys(res)) {
                _this14.formatDistrictsData(res);
              }
            });
          } catch (error) {
            this.apiService.showLoader.next(false); // if (error.status === 401) {
            //   this.router.navigate(['/login']);
            //   return;
            // }

            if (error.error) {
              var serverError = typeof error.error === 'string' ? JSON.parse(error.error) : {};
              this.apiService.genericMessage(serverError.error || 'something went wrong', 'error');
            }

            console.log(error);
          }
        }
      }]);

      return StudentStatsComponent;
    }();

    StudentStatsComponent.ɵfac = function StudentStatsComponent_Factory(t) {
      return new (t || StudentStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    StudentStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentStatsComponent,
      selectors: [["app-student-stats"]],
      decls: 15,
      vars: 2,
      consts: [[1, "page"], [1, "page-header", "f-22", "m-t-5", "m-b-20", "font-italic"], [1, "page-content"], [1, "table-responsive"], [1, "table", "text-center"], [1, "table-dark"], [4, "ngFor", "ngForOf"], ["class", "table-responsive", 4, "ngFor", "ngForOf"], [1, "text-center"]],
      template: function StudentStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Student Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ZONES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NUMBER OF STUDENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StudentStatsComponent_tr_13_Template, 5, 2, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentStatsComponent_div_14_Template, 12, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zonesList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.districtsList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".btn-small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.2rem 0.4rem;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.roles__toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.edit-icon-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L3N0dWRlbnQtc3RhdHMvc3R1ZGVudC1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3N0dWRlbnQtc3RhdHMvc3R1ZGVudC1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zdHVkZW50LXN0YXRzL3N0dWRlbnQtc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xufVxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucm9sZXNfX3RvZ2dsZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmVkaXQtaWNvbi1pbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi5idG4tc21hbGwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbn1cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucm9sZXNfX3RvZ2dsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lZGl0LWljb24taW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-stats',
          templateUrl: './student-stats.component.html',
          styleUrls: ['./student-stats.component.scss']
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
  "./src/app/layout/user-management/user-management.component.ts": function srcAppLayoutUserManagementUserManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
      return UserManagementComponent;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function UserManagementComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2);
      }
    }

    function UserManagementComponent_tr_15_td_3_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3.assignedRoles[role_r8] ? "Assigned" : "Not Assigned", " ");
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    function UserManagementComponent_tr_15_td_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserManagementComponent_tr_15_td_3_div_2_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var role_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return user_r3.assignedRoles[role_r8] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var role_r8 = ctx_r19.$implicit;
        var j_r9 = ctx_r19.index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var user_r3 = ctx_r18.$implicit;
        var i_r4 = ctx_r18.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r3.assignedRoles[role_r8])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("id", "active_toggle_" + i_r4 + "__" + j_r9)("checked", user_r3.assignedRoles[role_r8]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "active_toggle_" + i_r4 + "__" + j_r9);
      }
    }

    function UserManagementComponent_tr_15_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserManagementComponent_tr_15_td_3_span_1_Template, 2, 1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserManagementComponent_tr_15_td_3_div_2_Template, 6, 6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r3.isEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.isEdit);
      }
    }

    function UserManagementComponent_tr_15_img_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserManagementComponent_tr_15_img_6_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.editUserRoles(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserManagementComponent_tr_15_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserManagementComponent_tr_15_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r4 = ctx_r25.index;
          var user_r3 = ctx_r25.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.updateRoles(i_r4, user_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserManagementComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserManagementComponent_tr_15_td_3_Template, 3, 2, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserManagementComponent_tr_15_img_6_Template, 1, 0, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserManagementComponent_tr_15_button_7_Template, 2, 0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", user_r3.studentName || user_r3.userName, " [", user_r3.userName, " , ", user_r3.password, "] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 6, ctx_r1.allRoles, 0, 5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r3.isEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.isEdit);
      }
    }

    var UserManagementComponent = /*#__PURE__*/function () {
      function UserManagementComponent(apiService) {
        _classCallCheck(this, UserManagementComponent);

        this.apiService = apiService;
        this.allUsers = [];
        this.allRoles = [];
      }

      _createClass(UserManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.allRoles = this.apiService.getAllRoles();
          this.getAllUsers();
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this15 = this;

          try {
            this.apiService.showLoader.next(true);
            this.apiService.getAllUsers().subscribe(function (res) {
              _this15.apiService.showLoader.next(false);

              if (res && res.length) {
                _this15.allUsers = res;
                _this15.allUsers = _this15.allUsers.map(function (val) {
                  val.assignedRoles = {};
                  val.isEdit = false;

                  _this15.allRoles.forEach(function (role) {
                    if (val.userRoles && val.userRoles.indexOf(role) > -1) {
                      val.assignedRoles[role] = true;
                    } else {
                      val.assignedRoles[role] = false;
                    }
                  });

                  return val;
                });
                console.log('this.allUsers:', _this15.allUsers);
              }
            }, function (error) {
              _this15.apiService.showLoader.next(false); // if (error.status === 401) {
              //   this.router.navigate(['/login']);
              //   return;
              // }


              if (error.error) {
                var serverError = typeof error.error === 'string' ? JSON.parse(error.error) : {};

                _this15.apiService.genericMessage(serverError.error || 'something went wrong', 'error');
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "editUserRoles",
        value: function editUserRoles(index) {
          this.allUsers = this.allUsers.map(function (val) {
            val.isEdit = false;
            return val;
          });
          this.allUsers[index].isEdit = true;
        }
      }, {
        key: "updateRoles",
        value: function updateRoles(index, user) {
          var _this16 = this;

          try {
            var roles = [];
            Object.keys(user.assignedRoles).forEach(function (key) {
              if (user.assignedRoles[key]) {
                roles.push(key);
              }
            });
            this.apiService.showLoader.next(true);
            this.apiService.updateUserRoles(user.userName, {
              roles: roles.join(',')
            }).subscribe(function (res) {
              _this16.apiService.showLoader.next(false);

              console.log('res:', res);
              _this16.allUsers[index].isEdit = false;

              _this16.getAllUsers();

              if (res && res.length) {}
            }, function (error) {
              _this16.apiService.showLoader.next(false); // if (error.status === 401) {
              //   this.router.navigate(['/login']);
              //   return;
              // }


              if (error.error) {
                var serverError = typeof error.error === 'string' ? JSON.parse(error.error) : {};

                _this16.apiService.genericMessage(serverError.error || 'something went wrong', 'error');
              }

              console.log(error);
            });
          } catch (e) {
            console.warn(e);
          }
        }
      }]);

      return UserManagementComponent;
    }();

    UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) {
      return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    UserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserManagementComponent,
      selectors: [["app-user-management"]],
      decls: 16,
      vars: 6,
      consts: [[1, "page"], [1, "page-header", "f-22", "m-t-5", "m-b-20", "font-italic"], [1, "page-content"], [1, "table-responsive"], [1, "table", "text-center"], [1, "table-dark"], [4, "ngFor", "ngForOf"], ["class", "edit-icon-img", "src", "assets/icons/edit-ico.svg", "alt", "edit", 3, "click", 4, "ngIf"], ["class", "btn btn-small btn-primary", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "roles__toggle-wrapper", 4, "ngIf"], [1, "roles__toggle-wrapper"], [1, "onoffswitch", "onoffswitch--yes-or-no", "roles__toggle-switch"], ["type", "checkbox", "name", "onoffswitch", 1, "onoffswitch-checkbox", 3, "ngModel", "ngModelOptions", "id", "checked", "ngModelChange"], [1, "onoffswitch-label", 3, "for"], [1, "onoffswitch-inner"], [1, "onoffswitch-switch"], ["src", "assets/icons/edit-ico.svg", "alt", "edit", 1, "edit-icon-img", 3, "click"], [1, "btn", "btn-small", "btn-primary", 3, "click"]],
      template: function UserManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserManagementComponent_th_10_Template, 2, 1, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserManagementComponent_tr_15_Template, 8, 10, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 2, ctx.allRoles, 0, 5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allUsers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
      styles: [".btn-small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.2rem 0.4rem;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 110px;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  border: 2px solid #529432;\n}\n\nth[_ngcontent-%COMP%] {\n  background: #ABDD93;\n}\n\n.roles__toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.edit-icon-img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbGF5b3V0L3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLE1BQUE7QUNHUjs7QURESTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0lSOztBREZNOztFQUVFLGlCQUFBO0VBQ0EseUJBQUE7QUNLUjs7QURISTtFQUNFLG1CQUFBO0FDTU47O0FESEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbn1cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cbiAgICAudGFibGUtcmVzcG9uc2l2ZSB0aGVhZCB0aCB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgdGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAgICAgICAgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTI5NDMyO1xuICAgICAgfVxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQ6ICNBQkREOTM7XG4gICAgfVxuICBcbi5yb2xlc19fdG9nZ2xlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZWRpdC1pY29uLWltZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLmJ0bi1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCxcbnRkIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1Mjk0MzI7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZDogI0FCREQ5Mztcbn1cblxuLnJvbGVzX190b2dnbGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZWRpdC1pY29uLWltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-management',
          templateUrl: './user-management.component.html',
          styleUrls: ['./user-management.component.scss']
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
  "./src/app/login/forgot-psw/forgot-psw-response/forgot-psw-response.component.scss": function srcAppLoginForgotPswForgotPswResponseForgotPswResponseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Style for the response container */\n.response-container {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  margin-top: 20px;\n}\n/* Style for the headings */\nh1 {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n/* Style for the response message */\n.response-message {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n/* Style for the credentials section */\n.credentials {\n  margin-top: 20px;\n}\n/* Style for individual credentials */\n.credential {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.credential-label {\n  font-weight: bold;\n  color: #6e63ff;\n  margin-right: 10px;\n}\n.credential-value {\n  flex-grow: 1;\n}\n/* Add additional styles as needed */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbG9naW4vZm9yZ290LXBzdy9mb3Jnb3QtcHN3LXJlc3BvbnNlL2ZvcmdvdC1wc3ctcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wc3cvZm9yZ290LXBzdy1yZXNwb25zZS9mb3Jnb3QtcHN3LXJlc3BvbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBLDJCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBLG1DQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUNDRjtBREVBLHNDQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ0NGO0FERUEscUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNDRjtBREVBLG9DQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vZm9yZ290LXBzdy9mb3Jnb3QtcHN3LXJlc3BvbnNlL2ZvcmdvdC1wc3ctcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSBmb3IgdGhlIHJlc3BvbnNlIGNvbnRhaW5lciAqL1xuLnJlc3BvbnNlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyogU3R5bGUgZm9yIHRoZSBoZWFkaW5ncyAqL1xuaDEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qIFN0eWxlIGZvciB0aGUgcmVzcG9uc2UgbWVzc2FnZSAqL1xuLnJlc3BvbnNlLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIGNyZWRlbnRpYWxzIHNlY3Rpb24gKi9cbi5jcmVkZW50aWFscyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qIFN0eWxlIGZvciBpbmRpdmlkdWFsIGNyZWRlbnRpYWxzICovXG4uY3JlZGVudGlhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNyZWRlbnRpYWwtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2ZTYzZmY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNyZWRlbnRpYWwtdmFsdWUge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi8qIEFkZCBhZGRpdGlvbmFsIHN0eWxlcyBhcyBuZWVkZWQgKi9cbiIsIi8qIFN0eWxlIGZvciB0aGUgcmVzcG9uc2UgY29udGFpbmVyICovXG4ucmVzcG9uc2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIGhlYWRpbmdzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLyogU3R5bGUgZm9yIHRoZSByZXNwb25zZSBtZXNzYWdlICovXG4ucmVzcG9uc2UtbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIFN0eWxlIGZvciB0aGUgY3JlZGVudGlhbHMgc2VjdGlvbiAqL1xuLmNyZWRlbnRpYWxzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyogU3R5bGUgZm9yIGluZGl2aWR1YWwgY3JlZGVudGlhbHMgKi9cbi5jcmVkZW50aWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY3JlZGVudGlhbC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzZlNjNmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY3JlZGVudGlhbC12YWx1ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLyogQWRkIGFkZGl0aW9uYWwgc3R5bGVzIGFzIG5lZWRlZCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/forgot-psw/forgot-psw-response/forgot-psw-response.component.ts": function srcAppLoginForgotPswForgotPswResponseForgotPswResponseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPswResponseComponent", function () {
      return ForgotPswResponseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _forgot_psw_response_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./forgot-psw-response.component.scss */
    "./src/app/login/forgot-psw/forgot-psw-response/forgot-psw-response.component.scss");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotPswResponseComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Retrieved Credentials:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.responseData.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.responseData.password);
      }
    }

    var ForgotPswResponseComponent = /*#__PURE__*/function () {
      function ForgotPswResponseComponent(route) {
        _classCallCheck(this, ForgotPswResponseComponent);

        this.route = route;
      }

      _createClass(ForgotPswResponseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          console.log('finally here it is'); // Retrieve the response data from the route parameter

          this.route.params.subscribe(function (params) {
            if (params.response) {
              _this17.responseData = JSON.parse(params.response);
            }
          });
        }
      }]);

      return ForgotPswResponseComponent;
    }();

    ForgotPswResponseComponent.ɵfac = function ForgotPswResponseComponent_Factory(t) {
      return new (t || ForgotPswResponseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ForgotPswResponseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPswResponseComponent,
      selectors: [["app-forgot-psw-response"]],
      decls: 13,
      vars: 1,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "response-container"], [4, "ngIf"], [1, "welcome_title", "text-center", "m-t-32", "animated", "bounceInLeft"], ["routerLink", "/login", 1, "pointer"], [1, "response-message"], [1, "credentials"], [1, "credential"], [1, "credential-label"], [1, "credential-value"]],
      template: function ForgotPswResponseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Response Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPswResponseComponent_div_6_Template, 15, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Login to check your details and download the hall ticket. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Click");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " here !! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.responseData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".response-container[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  margin-top: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.response-message[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.credentials[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.credential[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.credential-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #6e63ff;\n  margin-right: 10px;\n}\n.credential-value[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvbG9naW4vZm9yZ290LXBzdy9mb3Jnb3QtcHN3LXJlc3BvbnNlL2ZvcmdvdC1wc3ctcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wc3cvZm9yZ290LXBzdy1yZXNwb25zZS9mb3Jnb3QtcHN3LXJlc3BvbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBLDJCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBLG1DQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUNDRjtBREVBLHNDQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ0NGO0FERUEscUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNDRjtBREVBLG9DQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vZm9yZ290LXBzdy9mb3Jnb3QtcHN3LXJlc3BvbnNlL2ZvcmdvdC1wc3ctcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSBmb3IgdGhlIHJlc3BvbnNlIGNvbnRhaW5lciAqL1xuLnJlc3BvbnNlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyogU3R5bGUgZm9yIHRoZSBoZWFkaW5ncyAqL1xuaDEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qIFN0eWxlIGZvciB0aGUgcmVzcG9uc2UgbWVzc2FnZSAqL1xuLnJlc3BvbnNlLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIGNyZWRlbnRpYWxzIHNlY3Rpb24gKi9cbi5jcmVkZW50aWFscyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qIFN0eWxlIGZvciBpbmRpdmlkdWFsIGNyZWRlbnRpYWxzICovXG4uY3JlZGVudGlhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNyZWRlbnRpYWwtbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2ZTYzZmY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNyZWRlbnRpYWwtdmFsdWUge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi8qIEFkZCBhZGRpdGlvbmFsIHN0eWxlcyBhcyBuZWVkZWQgKi9cbiIsIi8qIFN0eWxlIGZvciB0aGUgcmVzcG9uc2UgY29udGFpbmVyICovXG4ucmVzcG9uc2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiBTdHlsZSBmb3IgdGhlIGhlYWRpbmdzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLyogU3R5bGUgZm9yIHRoZSByZXNwb25zZSBtZXNzYWdlICovXG4ucmVzcG9uc2UtbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIFN0eWxlIGZvciB0aGUgY3JlZGVudGlhbHMgc2VjdGlvbiAqL1xuLmNyZWRlbnRpYWxzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyogU3R5bGUgZm9yIGluZGl2aWR1YWwgY3JlZGVudGlhbHMgKi9cbi5jcmVkZW50aWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY3JlZGVudGlhbC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzZlNjNmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY3JlZGVudGlhbC12YWx1ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLyogQWRkIGFkZGl0aW9uYWwgc3R5bGVzIGFzIG5lZWRlZCAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPswResponseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-psw-response',
          templateUrl: './forgot-psw-response.component.html',
          styleUrls: ['./forgot-psw-response.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/terms-and-conditions/terms-and-conditions.component.ts": function srcAppLoginTermsAndConditionsTermsAndConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
      return TermsAndConditionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TermsAndConditionsComponent = /*#__PURE__*/function () {
      function TermsAndConditionsComponent() {
        _classCallCheck(this, TermsAndConditionsComponent);
      }

      _createClass(TermsAndConditionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsAndConditionsComponent;
    }();

    TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) {
      return new (t || TermsAndConditionsComponent)();
    };

    TermsAndConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TermsAndConditionsComponent,
      selectors: [["app-terms-and-conditions"]],
      decls: 5,
      vars: 0,
      consts: [[1, "row", "no-gutters", "p-l-20", "p-t-20"], [1, "animated", "bounceInLeft"], ["routerLink", "/signup"]],
      template: function TermsAndConditionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here is the terms and conditions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go back to sign up page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terms-and-conditions',
          templateUrl: './terms-and-conditions.component.html',
          styleUrls: ['./terms-and-conditions.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/safeHtml.pipe.ts": function srcAppPipesSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe(sanitized) {
        _classCallCheck(this, SafeHtmlPipe);

        this.sanitized = sanitized;
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(value) {
          return this.sanitized.bypassSecurityTrustHtml(value);
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeHtml'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/titleCaseWord.ts": function srcAppPipesTitleCaseWordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleCaseWord", function () {
      return TitleCaseWord;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TitleCaseWord = /*#__PURE__*/function () {
      function TitleCaseWord() {
        _classCallCheck(this, TitleCaseWord);
      }

      _createClass(TitleCaseWord, [{
        key: "transform",
        value: function transform() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (!value) {
            return value;
          }

          value = value.toString();
          return value[0].toUpperCase() + value.substr(1).toLowerCase();
        }
      }]);

      return TitleCaseWord;
    }();

    TitleCaseWord.ɵfac = function TitleCaseWord_Factory(t) {
      return new (t || TitleCaseWord)();
    };

    TitleCaseWord.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "titleCaseWord",
      type: TitleCaseWord,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCaseWord, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'titleCaseWord'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seo.service.ts": function srcAppSeoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEOService", function () {
      return SEOService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SEOService = /*#__PURE__*/function () {
      function SEOService(title, meta) {
        _classCallCheck(this, SEOService);

        this.title = title;
        this.meta = meta;
      }

      _createClass(SEOService, [{
        key: "updateTitle",
        value: function updateTitle(title) {
          if (title == null) {
            title = "Sadisha Foundation";
          }

          this.title.setTitle(title);
        }
      }, {
        key: "updateOgUrl",
        value: function updateOgUrl(url) {
          this.meta.updateTag({
            name: 'og:url',
            content: url
          });
        }
      }, {
        key: "updateDescription",
        value: function updateDescription(desc) {
          if (desc == null) {
            desc = "Sadisha means Right Direction. We are a registered NGO and a passionate team of more than 150 people who want to address countless problems in rural India.";
          }

          this.meta.updateTag({
            name: 'description',
            content: desc
          });
        }
      }, {
        key: "updateKeyword",
        value: function updateKeyword(keywords) {
          if (keywords == null) {
            keywords = "Sadisha,Right Direction, NGO, Math Talent Test";
          }

          this.meta.updateTag({
            name: 'keywords',
            content: keywords
          });
        }
      }]);

      return SEOService;
    }();

    SEOService.ɵfac = function SEOService_Factory(t) {
      return new (t || SEOService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]));
    };

    SEOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SEOService,
      factory: SEOService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SEOService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/accordion/accordion-item.component.ts": function srcAppSharedAccordionAccordionItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionItemComponent", function () {
      return AccordionItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AccordionItemComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
      }
    }

    function AccordionItemComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
      }
    }

    var _c0 = [[["span"]], [["p"]]];

    var _c1 = function _c1(a0) {
      return {
        "expanded": a0
      };
    };

    var _c2 = ["span", "p"];

    var AccordionItemComponent = /*#__PURE__*/function () {
      function AccordionItemComponent() {
        _classCallCheck(this, AccordionItemComponent);

        this.toggleEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expanded = false;
      }

      _createClass(AccordionItemComponent, [{
        key: "onToggle",
        value: function onToggle() {
          this.toggleEmitter.next(this);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.expanded = !this.expanded;
        }
      }, {
        key: "close",
        value: function close() {
          this.expanded = false;
        }
      }]);

      return AccordionItemComponent;
    }();

    AccordionItemComponent.ɵfac = function AccordionItemComponent_Factory(t) {
      return new (t || AccordionItemComponent)();
    };

    AccordionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccordionItemComponent,
      selectors: [["accordion-item"]],
      outputs: {
        toggleEmitter: "toggleEmitter"
      },
      ngContentSelectors: _c2,
      decls: 7,
      vars: 6,
      consts: [[1, "d-flex", "justify-content-between", "m-0", 3, "ngClass", "click"], ["class", "mdi mdi-plus-circle", 4, "ngIf"], ["class", "mdi mdi-minus-circle", 4, "ngIf"], [1, "mdi", "mdi-plus-circle"], [1, "mdi", "mdi-minus-circle"]],
      template: function AccordionItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionItemComponent_Template_header_click_0_listener() {
            return ctx.onToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccordionItemComponent_span_3_Template, 1, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccordionItemComponent_span_4_Template, 1, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.expanded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@toggle", ctx.expanded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n    display: block;\n    padding: 10px 5px;\n    border-bottom: 1px solid #eee;\n    margin: 5px 0;\n  }\n  header[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 500;\n    margin-bottom: 5px;\n    cursor: pointer;\n  }\n  header.expanded[_ngcontent-%COMP%] {\n    color: #6e63ff;\n}\n  div[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'accordion-item',
          template: "\n  <header class=\"d-flex justify-content-between m-0\" (click)=\"onToggle()\" [ngClass]=\"{'expanded':expanded }\">\n    <ng-content select=\"span\"></ng-content>\n    <div>\n    <span *ngIf=\"!expanded\" class=\"mdi mdi-plus-circle\"></span>\n    <span *ngIf=\"expanded\" class=\"mdi mdi-minus-circle\"></span>\n    </div>\n  </header>\n  <div [@toggle]=\"expanded\">\n    <ng-content select=\"p\"></ng-content>\n  </div>\n  ",
          styles: [":host {\n    display: block;\n    padding: 10px 5px;\n    border-bottom: 1px solid #eee;\n    margin: 5px 0;\n  }\n  header {\n    font-size: 20px;\n    font-weight: 500;\n    margin-bottom: 5px;\n    cursor: pointer;\n  }\n  header.expanded {\n    color: #6e63ff;\n}\n  div {\n    overflow: hidden;\n  }"],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out'))])]
        }]
      }], null, {
        toggleEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/accordion/accordion.component.ts": function srcAppSharedAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionMode", function () {
      return AccordionMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
      return AccordionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _accordion_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordion-item.component */
    "./src/app/shared/accordion/accordion-item.component.ts");

    var _c0 = ["*"];
    var AccordionMode;

    (function (AccordionMode) {
      AccordionMode["Single"] = "single";
      AccordionMode["Multiple"] = "multiple";
    })(AccordionMode || (AccordionMode = {}));

    var AccordionComponent = /*#__PURE__*/function () {
      function AccordionComponent() {
        _classCallCheck(this, AccordionComponent);

        this.mode = AccordionMode.Multiple;
        this.openChild = null;
      }

      _createClass(AccordionComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this18 = this;

          this.items.forEach(function (item) {
            item.toggleEmitter.subscribe(function (item) {
              _this18.expand(item);
            });
          });
        }
      }, {
        key: "expand",
        value: function expand(item) {
          var _this19 = this;

          if (item == this.openChild && item.expanded) {
            return item.close();
          }

          item.toggle();
          this.openChild = item; // Multiple mode, don't close others.

          if (this.mode == AccordionMode.Multiple) {
            return;
          } // Single mode, close others.


          this.items.filter(function (item) {
            return item != _this19.openChild;
          }).map(function (item) {
            return item.close();
          });
        }
      }]);

      return AccordionComponent;
    }();

    AccordionComponent.ɵfac = function AccordionComponent_Factory(t) {
      return new (t || AccordionComponent)();
    };

    AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccordionComponent,
      selectors: [["accordion"]],
      contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _accordion_item_component__WEBPACK_IMPORTED_MODULE_1__["AccordionItemComponent"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
        }
      },
      inputs: {
        mode: "mode"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function AccordionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: ["[_nghost-%COMP%] {\n      padding: 5px 10px;\n      display: block;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'accordion',
          template: '<ng-content></ng-content>',
          styles: [":host {\n      padding: 5px 10px;\n      display: block;\n    }"]
        }]
      }], null, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_accordion_item_component__WEBPACK_IMPORTED_MODULE_1__["AccordionItemComponent"]]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/common-delete-warning-dialog/common-delete-warning-dialog.component.ts": function srcAppSharedCommonDeleteWarningDialogCommonDeleteWarningDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonDeleteWarningDialogComponent", function () {
      return CommonDeleteWarningDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pipes/safeHtml.pipe */
    "./src/app/pipes/safeHtml.pipe.ts");

    var CommonDeleteWarningDialogComponent = /*#__PURE__*/function () {
      function CommonDeleteWarningDialogComponent(dialogRef, data) {
        _classCallCheck(this, CommonDeleteWarningDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.htmlContent = '';
      }

      _createClass(CommonDeleteWarningDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closePopup",
        value: function closePopup(type) {
          this.dialogRef.close(type);
        }
      }]);

      return CommonDeleteWarningDialogComponent;
    }();

    CommonDeleteWarningDialogComponent.ɵfac = function CommonDeleteWarningDialogComponent_Factory(t) {
      return new (t || CommonDeleteWarningDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    CommonDeleteWarningDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommonDeleteWarningDialogComponent,
      selectors: [["app-common-delete-warning-dialog"]],
      decls: 8,
      vars: 3,
      consts: [[1, "m-40"], [1, "m-b-40", "f-18", "line-height-31", "text-grey2", "f-w-400", 3, "innerHtml"], [1, "d-flex", "justify-content-center"], ["type", "button", 1, "my-btn", "cancel-btn", 3, "click"], ["type", "button", 1, "my-btn", "my-btn-primary", "m-l-28", 3, "click"]],
      template: function CommonDeleteWarningDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDeleteWarningDialogComponent_Template_button_click_4_listener() {
            return ctx.closePopup("cancel");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDeleteWarningDialogComponent_Template_button_click_6_listener() {
            return ctx.closePopup("confirm");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Yes I'm sure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.htmlContent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      pipes: [_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeHtmlPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21tb24tZGVsZXRlLXdhcm5pbmctZGlhbG9nL2NvbW1vbi1kZWxldGUtd2FybmluZy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonDeleteWarningDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-common-delete-warning-dialog',
          templateUrl: './common-delete-warning-dialog.component.html',
          styleUrls: ['./common-delete-warning-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/hero-image/hero-image.component.ts": function srcAppSharedHeroImageHeroImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroImageComponent", function () {
      return HeroImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HeroImageComponent = /*#__PURE__*/function () {
      function HeroImageComponent() {
        _classCallCheck(this, HeroImageComponent);
      }

      _createClass(HeroImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroImageComponent;
    }();

    HeroImageComponent.ɵfac = function HeroImageComponent_Factory(t) {
      return new (t || HeroImageComponent)();
    };

    HeroImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroImageComponent,
      selectors: [["app-hero-image"]],
      inputs: {
        heading: "heading",
        bgImageClass: "bgImageClass"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "hero-wrapper", 3, "ngClass"], [1, "animated", "bounceInLeft"]],
      template: function HeroImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.bgImageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".hero-wrapper[_ngcontent-%COMP%] {\n  height: 60vh;\n  background-image: url(\"https://drive.google.com/thumbnail?id=10xJiS27dxcoss8XesBhNBQ3O9rElhDnd\");\n  background-position: top !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);\n}\n.hero-wrapper.contact-us[_ngcontent-%COMP%] {\n  background-image: url(\"https://drive.google.com/thumbnail?id=10xJiS27dxcoss8XesBhNBQ3O9rElhDnd\");\n}\n.hero-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  max-width: 60%;\n  line-height: 50px;\n}\n@media screen and (max-width: 767px) {\n  h1[_ngcontent-%COMP%] {\n    color: #fff;\n    max-width: 100% !important;\n    line-height: 30px !important;\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvc2hhcmVkL2hlcm8taW1hZ2UvaGVyby1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlcm8taW1hZ2UvaGVyby1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnR0FBQTtFQUVBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUNBSjtBRENJO0VBQ0ksZ0dBQUE7QUNDUjtBRENJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSwwQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVyby1pbWFnZS9oZXJvLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8td3JhcHBlciB7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3RodW1ibmFpbD9pZD0xMHhKaVMyN2R4Y29zczhYZXNCaE5CUTNPOXJFbGhEbmQnKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdXBkYXRlcy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICYuY29udGFjdC11cyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3RodW1ibmFpbD9pZD0xMHhKaVMyN2R4Y29zczhYZXNCaE5CUTNPOXJFbGhEbmQnKTtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxufVxuIiwiLmhlcm8td3JhcHBlciB7XG4gIGhlaWdodDogNjB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3RodW1ibmFpbD9pZD0xMHhKaVMyN2R4Y29zczhYZXNCaE5CUTNPOXJFbGhEbmRcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uaGVyby13cmFwcGVyLmNvbnRhY3QtdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdGh1bWJuYWlsP2lkPTEweEppUzI3ZHhjb3NzOFhlc0JoTkJRM085ckVsaERuZFwiKTtcbn1cbi5oZXJvLXdyYXBwZXIgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBoMSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero-image',
          templateUrl: './hero-image.component.html',
          styleUrls: ['./hero-image.component.scss']
        }]
      }], function () {
        return [];
      }, {
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bgImageClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/logo-brand/logo-brand.component.ts": function srcAppSharedLogoBrandLogoBrandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoBrandComponent", function () {
      return LogoBrandComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogoBrandComponent = /*#__PURE__*/function () {
      function LogoBrandComponent() {
        _classCallCheck(this, LogoBrandComponent);
      }

      _createClass(LogoBrandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoBrandComponent;
    }();

    LogoBrandComponent.ɵfac = function LogoBrandComponent_Factory(t) {
      return new (t || LogoBrandComponent)();
    };

    LogoBrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoBrandComponent,
      selectors: [["app-logo-brand"]],
      decls: 5,
      vars: 0,
      consts: [[1, "navbar-brand", "brand"], [1, "brand__primary"], [1, "brand__secondary"]],
      template: function LogoBrandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Anantha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2dvLWJyYW5kL2xvZ28tYnJhbmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoBrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logo-brand',
          templateUrl: './logo-brand.component.html',
          styleUrls: ['./logo-brand.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/page-not-found/page-not-found.component.ts": function srcAppSharedPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 8,
      vars: 0,
      consts: [[1, "page-not-found", "d-flex", "justify-content-center", "align-items-center"], [1, ""], ["src", "/assets/images/page_not_found.svg", "alt", "Page not found", 1, "page-not-found__img", "animated", "bounceInDown"], [1, "welcome_title", "text-center", "m-t-32", "animated", "bounceInLeft"], [1, "pointer"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Go to Home Page ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Click here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".page-not-found[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n  padding: 30px;\n}\n.page-not-found__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW5vdC1mb3VuZCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgJl9faW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuIiwiLnBhZ2Utbm90LWZvdW5kIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLnBhZ2Utbm90LWZvdW5kX19pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/server-down/server-down.component.ts": function srcAppSharedServerDownServerDownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerDownComponent", function () {
      return ServerDownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServerDownComponent = /*#__PURE__*/function () {
      function ServerDownComponent() {
        _classCallCheck(this, ServerDownComponent);
      }

      _createClass(ServerDownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServerDownComponent;
    }();

    ServerDownComponent.ɵfac = function ServerDownComponent_Factory(t) {
      return new (t || ServerDownComponent)();
    };

    ServerDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServerDownComponent,
      selectors: [["app-server-down"]],
      decls: 5,
      vars: 0,
      consts: [[1, "server-down", "d-flex", "justify-content-center", "align-items-center"], [1, ""], ["src", "/assets/images/server_down.svg", "alt", "Page not found", 1, "server-down__img", "animated", "bounceInDown"], [1, "welcome_title", "text-center", "m-t-32", "animated", "bounceInLeft"]],
      template: function ServerDownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Seems, Server down try some other time! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".server-down[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n  padding: 30px;\n}\n.server-down__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvc2hhcmVkL3NlcnZlci1kb3duL3NlcnZlci1kb3duLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2VydmVyLWRvd24vc2VydmVyLWRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZXJ2ZXItZG93bi9zZXJ2ZXItZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2ZXItZG93biB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgJl9faW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuIiwiLnNlcnZlci1kb3duIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLnNlcnZlci1kb3duX19pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-server-down',
          templateUrl: './server-down.component.html',
          styleUrls: ['./server-down.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts": function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _logo_brand_logo_brand_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./logo-brand/logo-brand.component */
    "./src/app/shared/logo-brand/logo-brand.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/shared/welcome/welcome.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/shared/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _server_down_server_down_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./server-down/server-down.component */
    "./src/app/shared/server-down/server-down.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _common_delete_warning_dialog_common_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./common-delete-warning-dialog/common-delete-warning-dialog.component */
    "./src/app/shared/common-delete-warning-dialog/common-delete-warning-dialog.component.ts");
    /* harmony import */


    var _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../pipes/safeHtml.pipe */
    "./src/app/pipes/safeHtml.pipe.ts");
    /* harmony import */


    var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./snack-bar/snack-bar.component */
    "./src/app/shared/snack-bar/snack-bar.component.ts");
    /* harmony import */


    var angular_highcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-highcharts */
    "./node_modules/angular-highcharts/__ivy_ngcc__/fesm2015/angular-highcharts.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _pipes_titleCaseWord__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../pipes/titleCaseWord */
    "./src/app/pipes/titleCaseWord.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./hero-image/hero-image.component */
    "./src/app/shared/hero-image/hero-image.component.ts");
    /* harmony import */


    var _layout_address_nav_header_address_nav_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../layout/address-nav-header/address-nav-header.component */
    "./src/app/layout/address-nav-header/address-nav-header.component.ts");
    /* harmony import */


    var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./accordion/accordion.component */
    "./src/app/shared/accordion/accordion.component.ts");
    /* harmony import */


    var _accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./accordion/accordion-item.component */
    "./src/app/shared/accordion/accordion-item.component.ts");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var _directives_event_tracker_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../directives/event-tracker.directive */
    "./src/app/directives/event-tracker.directive.ts");
    /* harmony import */


    var _slider_link_slider_link_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./slider-link/slider-link.component */
    "./src/app/shared/slider-link/slider-link.component.ts");
    /* harmony import */


    var _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../directives/numbers-only.directive */
    "./src/app/directives/numbers-only.directive.ts");
    /* harmony import */


    var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../directives/drag-and-drop.directive */
    "./src/app/directives/drag-and-drop.directive.ts");

    var routes = [];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forChild(routes)], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__["LazyLoadImageModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_logo_brand_logo_brand_component__WEBPACK_IMPORTED_MODULE_2__["LogoBrandComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _server_down_server_down_component__WEBPACK_IMPORTED_MODULE_5__["ServerDownComponent"], _common_delete_warning_dialog_common_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CommonDeleteWarningDialogComponent"], _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_11__["SafeHtmlPipe"], _pipes_titleCaseWord__WEBPACK_IMPORTED_MODULE_15__["TitleCaseWord"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_12__["CommonAlertSnackComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_19__["HeroImageComponent"], _layout_address_nav_header_address_nav_header_component__WEBPACK_IMPORTED_MODULE_20__["AddressNavHeaderComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_21__["AccordionComponent"], _accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_22__["AccordionItemComponent"], _directives_event_tracker_directive__WEBPACK_IMPORTED_MODULE_24__["EventTrackerDirective"], _slider_link_slider_link_component__WEBPACK_IMPORTED_MODULE_25__["SliderLinkComponent"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_26__["NumberDirective"], _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_27__["DragAndDropDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]],
        exports: [_logo_brand_logo_brand_component__WEBPACK_IMPORTED_MODULE_2__["LogoBrandComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _server_down_server_down_component__WEBPACK_IMPORTED_MODULE_5__["ServerDownComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_11__["SafeHtmlPipe"], _directives_event_tracker_directive__WEBPACK_IMPORTED_MODULE_24__["EventTrackerDirective"], _pipes_titleCaseWord__WEBPACK_IMPORTED_MODULE_15__["TitleCaseWord"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_12__["CommonAlertSnackComponent"], angular_highcharts__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_19__["HeroImageComponent"], _layout_address_nav_header_address_nav_header_component__WEBPACK_IMPORTED_MODULE_20__["AddressNavHeaderComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_21__["AccordionComponent"], _accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_22__["AccordionItemComponent"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__["LazyLoadImageModule"], _slider_link_slider_link_component__WEBPACK_IMPORTED_MODULE_25__["SliderLinkComponent"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_26__["NumberDirective"], _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_27__["DragAndDropDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_logo_brand_logo_brand_component__WEBPACK_IMPORTED_MODULE_2__["LogoBrandComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _server_down_server_down_component__WEBPACK_IMPORTED_MODULE_5__["ServerDownComponent"], _common_delete_warning_dialog_common_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CommonDeleteWarningDialogComponent"], _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_11__["SafeHtmlPipe"], _pipes_titleCaseWord__WEBPACK_IMPORTED_MODULE_15__["TitleCaseWord"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_12__["CommonAlertSnackComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_19__["HeroImageComponent"], _layout_address_nav_header_address_nav_header_component__WEBPACK_IMPORTED_MODULE_20__["AddressNavHeaderComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_21__["AccordionComponent"], _accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_22__["AccordionItemComponent"], _directives_event_tracker_directive__WEBPACK_IMPORTED_MODULE_24__["EventTrackerDirective"], _slider_link_slider_link_component__WEBPACK_IMPORTED_MODULE_25__["SliderLinkComponent"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_26__["NumberDirective"], _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_27__["DragAndDropDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forChild(routes)],
          exports: [_logo_brand_logo_brand_component__WEBPACK_IMPORTED_MODULE_2__["LogoBrandComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _server_down_server_down_component__WEBPACK_IMPORTED_MODULE_5__["ServerDownComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_11__["SafeHtmlPipe"], _directives_event_tracker_directive__WEBPACK_IMPORTED_MODULE_24__["EventTrackerDirective"], _pipes_titleCaseWord__WEBPACK_IMPORTED_MODULE_15__["TitleCaseWord"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_12__["CommonAlertSnackComponent"], angular_highcharts__WEBPACK_IMPORTED_MODULE_13__["ChartModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _hero_image_hero_image_component__WEBPACK_IMPORTED_MODULE_19__["HeroImageComponent"], _layout_address_nav_header_address_nav_header_component__WEBPACK_IMPORTED_MODULE_20__["AddressNavHeaderComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_21__["AccordionComponent"], _accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_22__["AccordionItemComponent"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_23__["LazyLoadImageModule"], _slider_link_slider_link_component__WEBPACK_IMPORTED_MODULE_25__["SliderLinkComponent"], _directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_26__["NumberDirective"], _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_27__["DragAndDropDirective"]],
          entryComponents: [_common_delete_warning_dialog_common_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CommonDeleteWarningDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/slider-link/slider-link.component.ts": function srcAppSharedSliderLinkSliderLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderLinkComponent", function () {
      return SliderLinkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var SliderLinkComponent = /*#__PURE__*/function () {
      function SliderLinkComponent() {
        _classCallCheck(this, SliderLinkComponent);

        this.text = '';
        this.link = '';
      }

      _createClass(SliderLinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderLinkComponent;
    }();

    SliderLinkComponent.ɵfac = function SliderLinkComponent_Factory(t) {
      return new (t || SliderLinkComponent)();
    };

    SliderLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderLinkComponent,
      selectors: [["app-slider-link"]],
      inputs: {
        text: "text",
        link: "link"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "slider"], [1, "p-0", "m-0", "text-nowrap"], [1, "text-white", "pointer", "link", 3, "routerLink"]],
      template: function SliderLinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Please Click Here ", ctx.text, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".slider[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: linear-gradient(45deg, #715ef6, #9435a9);\n}\n.slider__para[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 0 !important;\n  -webkit-animation: news 30s infinite linear;\n          animation: news 30s infinite linear;\n}\n.slider[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.slider[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  background: #fff;\n  color: #7b52e2 !important;\n}\n@-webkit-keyframes news {\n  0% {\n    transform: translateX(100%);\n  }\n  25% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0%);\n  }\n  75% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n@keyframes news {\n  0% {\n    transform: translateX(100%);\n  }\n  25% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0%);\n  }\n  75% {\n    transform: translateX(-50%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvc2hhcmVkL3NsaWRlci1saW5rL3NsaWRlci1saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2xpZGVyLWxpbmsvc2xpZGVyLWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDTSxhQUFBO0VBQ0Esb0RBQUE7QUNBUjtBRENJO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDJDQUFBO1VBQUEsbUNBQUE7QUNDUDtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FEQ0k7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7QUNBTjtBRElFO0VBQ0U7SUFBRywyQkFBQTtFQ0FMO0VEQ0U7SUFBSSwwQkFBQTtFQ0VOO0VEREU7SUFBSSx5QkFBQTtFQ0lOO0VESEU7SUFBSSwyQkFBQTtFQ01OO0VETEU7SUFBSyw0QkFBQTtFQ1FQO0FBQ0Y7QURkRTtFQUNFO0lBQUcsMkJBQUE7RUNBTDtFRENFO0lBQUksMEJBQUE7RUNFTjtFRERFO0lBQUkseUJBQUE7RUNJTjtFREhFO0lBQUksMkJBQUE7RUNNTjtFRExFO0lBQUssNEJBQUE7RUNRUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NsaWRlci1saW5rL3NsaWRlci1saW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5zbGlkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzcxNWVmNiwjOTQzNWE5KTtcbiAgICAmX19wYXJhe1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICBhbmltYXRpb246IG5ld3MgMzBzIGluZmluaXRlIGxpbmVhcjtcbiAgfSBcblxuICAubGluayB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgXG4gICAgICBjb2xvcjogIzdiNTJlMiAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbmV3cyB7XG4gICAgMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpfVxuICAgIDI1JXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKX1cbiAgICA1MCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKX1cbiAgICA3NSV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpfVxuICAgIDEwMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKX1cblxufSIsIi5zbGlkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM3MTVlZjYsICM5NDM1YTkpO1xufVxuLnNsaWRlcl9fcGFyYSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBuZXdzIDMwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG4uc2xpZGVyIC5saW5rIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnNsaWRlciAubGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzdiNTJlMiAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIG5ld3Mge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider-link',
          templateUrl: './slider-link.component.html',
          styleUrls: ['./slider-link.component.scss']
        }]
      }], function () {
        return [];
      }, {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/snack-bar/snack-bar.component.ts": function srcAppSharedSnackBarSnackBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonAlertSnackComponent", function () {
      return CommonAlertSnackComponent;
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

    var _c0 = ["containerBox"];

    function CommonAlertSnackComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonAlertSnackComponent_div_2_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.closeAlert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.data.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CommonAlertSnackComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonAlertSnackComponent_div_3_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.closeAlert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.data.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CommonAlertSnackComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonAlertSnackComponent_div_4_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.closeAlert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r3.data.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CommonAlertSnackComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonAlertSnackComponent_div_5_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.closeAlert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r4.data.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    } // import { SharedService,  } from 'src/app/servicess/';


    var CommonAlertSnackComponent = /*#__PURE__*/function () {
      function CommonAlertSnackComponent(apiService, render) {
        _classCallCheck(this, CommonAlertSnackComponent);

        this.apiService = apiService;
        this.render = render;
      }

      _createClass(CommonAlertSnackComponent, [{
        key: "processData",
        set: function set(data) {
          var _this20 = this;

          this.data = data;

          if (this.data.position === 'v-center') {
            this.render.setStyle(this.containerRef.nativeElement, 'top', '50vh');
          } else {
            this.render.setStyle(this.containerRef.nativeElement, 'bottom', '5vh');
          }

          if (this.data.duration) {
            setTimeout(function () {
              _this20.closeAlert();
            }, this.data.duration);
          }
        }
      }, {
        key: "closeAlert",
        value: function closeAlert() {
          this.apiService.internalNotifier.next({
            type: 'dru-alert',
            value: false
          });
        }
      }]);

      return CommonAlertSnackComponent;
    }();

    CommonAlertSnackComponent.ɵfac = function CommonAlertSnackComponent_Factory(t) {
      return new (t || CommonAlertSnackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    CommonAlertSnackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommonAlertSnackComponent,
      selectors: [["app-snack-bar"]],
      viewQuery: function CommonAlertSnackComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
        }
      },
      inputs: {
        processData: ["data", "processData"]
      },
      decls: 6,
      vars: 4,
      consts: [[1, "box-postion", "shadow", "alert-box"], ["containerBox", ""], ["class", "row app-msg-cont no-gutters info-msg-box", 4, "ngIf"], ["class", "row app-msg-cont no-gutters warning-msg-box", 4, "ngIf"], ["class", "row app-msg-cont no-gutters error-msg-box", 4, "ngIf"], ["class", "row app-msg-cont no-gutters success-msg-box", 4, "ngIf"], [1, "row", "app-msg-cont", "no-gutters", "info-msg-box"], [1, "col-sm"], [1, "dodger-blue-txt", "f-14", 3, "innerHtml"], [1, "col-sm-auto"], [1, "close-red-icon", "icon", "m-l-16", 3, "click"], [1, "row", "app-msg-cont", "no-gutters", "warning-msg-box"], [1, "medium-yellow-txt", "f-14", 3, "innerHtml"], [1, "row", "app-msg-cont", "no-gutters", "error-msg-box"], [1, "error-col-txt", "f-14", 3, "innerHtml"], [1, "row", "app-msg-cont", "no-gutters", "success-msg-box"], [1, "green-txt", "f-14", 3, "innerHtml"]],
      template: function CommonAlertSnackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonAlertSnackComponent_div_2_Template, 5, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonAlertSnackComponent_div_3_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommonAlertSnackComponent_div_4_Template, 5, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommonAlertSnackComponent_div_5_Template, 5, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.alertType == "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.alertType == "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.alertType == "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.alertType == "success");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".alert-box[_ngcontent-%COMP%] {\n  z-index: 10001;\n}\n\n.box-postion[_ngcontent-%COMP%] {\n  width: auto;\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 500;\n}\n\n.app-msg-cont[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 12px 16px;\n}\n\n.success-msg-box[_ngcontent-%COMP%] {\n  background-color: #EEFAEF;\n  border: 1px solid #1BB934;\n}\n\n.info-msg-box[_ngcontent-%COMP%] {\n  background-color: #E9F7FD;\n  border: 1px solid #1991EB;\n}\n\n.warning-msg-box[_ngcontent-%COMP%] {\n  background-color: #FFF7EA;\n  border: 1px solid #F7981C;\n}\n\n.error-msg-box[_ngcontent-%COMP%] {\n  background-color: #FEEBEB;\n  border: 1px solid #ED1C24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvc2hhcmVkL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zbmFjay1iYXIvc25hY2stYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NyYXZhbmliYWxuZS9Eb2N1bWVudHMvc2FkaXNoYS9tdHQtdWkvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUtBLDJCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURLRTtFQUNFLHlCRVpXO0VGYVgseUJBQUE7QUNGSjs7QURLRTtFQUNFLHlCRWZTO0VGZ0JULHlCQUFBO0FDRko7O0FES0U7RUFDRSx5QkVuQlU7RUZvQlYseUJBQUE7QUNGSjs7QURLRTtFQUNFLHlCRXJCUztFRnNCVCx5QkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuLmFsZXJ0LWJveHtcbiAgICB6LWluZGV4OiAxMDAwMTtcbn1cblxuLmJveC1wb3N0aW9uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB6LWluZGV4OiA1MDA7XG4gIH1cbiAgXG4gIFxuICAuYXBwLW1zZy1jb250e1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIH1cbiAgXG4gIFxuICAuc3VjY2Vzcy1tc2ctYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRQYW5hY2hlLWdyZWVuO1xuICAgIGJvcmRlcjoxcHggc29saWQgJHN1Y2Nlc3MtY29sO1xuICB9XG4gIFxuICAuaW5mby1tc2ctYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhbGljZS1ibHVlO1xuICAgIGJvcmRlcjoxcHggc29saWQgJGRvZGdlci1ibHVlO1xuICB9XG4gIFxuICAud2FybmluZy1tc2ctYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRmbG9yYWwtd2hpdGU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAkd2FybmluZy1jb2xvcjtcbiAgfVxuICBcbiAgLmVycm9yLW1zZy1ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJENoYWJsaXMtcmVkO1xuICAgIGJvcmRlcjoxcHggc29saWQgJGVycm9yLWNvbG9yO1xuICB9XG4gICIsIi5hbGVydC1ib3gge1xuICB6LWluZGV4OiAxMDAwMTtcbn1cblxuLmJveC1wb3N0aW9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiA1MDA7XG59XG5cbi5hcHAtbXNnLWNvbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xufVxuXG4uc3VjY2Vzcy1tc2ctYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRkFFRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFCQjkzNDtcbn1cblxuLmluZm8tbXNnLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RkQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTkxRUI7XG59XG5cbi53YXJuaW5nLW1zZy1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGN0VBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjc5ODFDO1xufVxuXG4uZXJyb3ItbXNnLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUVCRUI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRDFDMjQ7XG59IiwiJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuJHByaW1hcnlDb2xvcjogIzZlNjNmZjtcbiRicmFuZFByaW1hcnlDb2xvcjogIzJhMGEwYTtcbiR3aGl0ZVNtb2tlRGFyazojYWRhZGFkO1xuJHdoaXRlU21va2U6I0YyRjJGMjtcbiRFZ3lwdGlhbkJsdWU6IzE1NTU4ZDBkO1xuJERvZGdlckJsdWU6IzIxOTZGMztcbiR3aGl0ZVNtb2tlbGlnaHQ6I2RhZGFkYTtcbiRicmFuZFNlY29uZGFyeUNvbG9yOiAjZjIxYjNmO1xuJHByaW1hcnlIb3ZlcjogIzlhNTVmZjFhO1xuJG1haW5CZ0NvbG9yOiAjZjJlZGYzO1xuJHNob3dDb2xvcjogIzAwMWY0MztcbiRlcnJvckNvbG9yOiAjZGMzNTQ1O1xuJGluZGlnbzojOTIzOGFlO1xuJFBhbmFjaGUtZ3JlZW46I0VFRkFFRjtcbiRQdXJwdWwtd2hpdGU6I0U0RERFNjtcbiRhbGljZS1ibHVlOiAjRTlGN0ZEO1xuJGZsb3JhbC13aGl0ZTojRkZGN0VBO1xuJGRvZGdlci1ibHVlOiAjMTk5MUVCO1xuJHdhcm5pbmctY29sb3I6I0Y3OTgxQztcbiRDaGFibGlzLXJlZDojRkVFQkVCO1xuJGVycm9yLWNvbG9yOiAjRUQxQzI0O1xuJHN1Y2Nlc3MtY29sOiAjMUJCOTM0O1xuJGRhcmstYmctY29sb3I6ICMxOTFjMjQ7XG4kYmdHcmFkaWVudENvbG9yOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZlNjNmZiAwJSwgIzk3MzJhMyAxMDAlKTsiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonAlertSnackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-snack-bar',
          templateUrl: './snack-bar.component.html',
          styleUrls: ['./snack-bar.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        containerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['containerBox', {
            "static": true
          }]
        }],
        processData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['data']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/welcome/welcome.component.ts": function srcAppSharedWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)();
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 8,
      vars: 0,
      consts: [[1, "welcome", "d-flex", "justify-content-center", "align-items-center"], [1, ""], ["src", "/assets/images/welcome.svg", "alt", "welcome to Med360", 1, "welcome__img", "animated", "bounceInDown"], [1, "welcome_title", "text-center", "m-t-32", "animated", "bounceInLeft"], [1, "primary-color"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Welcome to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Med360");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".welcome[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n  padding: 30px;\n}\n.welcome__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmF2YW5pYmFsbmUvRG9jdW1lbnRzL3NhZGlzaGEvbXR0LXVpL3NyYy9hcHAvc2hhcmVkL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICAmX19pbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59XG4iLCIud2VsY29tZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgcGFkZGluZzogMzBweDtcbn1cbi53ZWxjb21lX19pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/style-guide/style-guide.component.ts": function srcAppStyleGuideStyleGuideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleGuideComponent", function () {
      return StyleGuideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    function StyleGuideComponent_tr_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.age, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, item_r1.amount, "1.2-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.admittedDate, " ");
      }
    }

    var StyleGuideComponent = /*#__PURE__*/function () {
      function StyleGuideComponent() {
        _classCallCheck(this, StyleGuideComponent);

        this.selectedLanguage = null;
        this.languagesList = ['English', 'Telugu', 'Kannada'];
        this.patientsList = [{
          name: 'Jon Doe',
          age: 22,
          amount: 100,
          admittedDate: '20/03/2020'
        }, {
          name: 'Herman Beck',
          age: 23,
          amount: 120.34,
          admittedDate: '21/03/2020'
        }, {
          name: 'John Richards',
          age: 43,
          amount: 220.59,
          admittedDate: '21/03/2020'
        }];
      }

      _createClass(StyleGuideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StyleGuideComponent;
    }();

    StyleGuideComponent.ɵfac = function StyleGuideComponent_Factory(t) {
      return new (t || StyleGuideComponent)();
    };

    StyleGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StyleGuideComponent,
      selectors: [["app-style-guide"]],
      decls: 76,
      vars: 6,
      consts: [[1, "content-wrapper"], [1, "section__wrapper", "p-25"], ["label", "Form"], [1, "section__heading"], [1, "form-group"], ["for", "exampleFormControlInput1", 1, "label"], [1, "required-star"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "name@example.com", 1, "form-control"], ["for", "exampleFormControlSelect1", 1, "label"], ["placeholder", "select language", "name", "selectedLanguage", 3, "items", "ngModel", "ngModelChange"], ["for", "exampleFormControlSelect2", 1, "label"], ["placeholder", "select language", "name", "selectedLanguage", 3, "items", "ngModel", "multiple", "ngModelChange"], ["for", "exampleFormControlTextarea1", 1, "label"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "keepMeSignIn", 1, "custom-control-input"], ["for", "keepMeSignIn", 1, "custom-control-label", "pointer", "label"], [1, "form-group", "m-t-12"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "customRadioInline1", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline1", 1, "custom-control-label", "label"], ["type", "radio", "id", "customRadioInline2", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline2", 1, "custom-control-label", "label"], [1, "m-t-28"], ["type", "button", 1, "my-btn", "my-btn-primary"], ["type", "button", 1, "my-btn", "cancel-btn", "m-l-28"], ["label", "Tabs"], [1, "responsive-table"], [1, "table", "table-striped", "table-hover", "my-table"], [4, "ngFor", "ngForOf"], ["label", "Modals"], [1, "py-1"], ["src", "/assets/images/avatar.png", "alt", "avatar"]],
      template: function StyleGuideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Form fields");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Age ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ng-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StyleGuideComponent_Template_ng_select_ngModelChange_19_listener($event) {
            return ctx.selectedLanguage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select multiple languages ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ng-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StyleGuideComponent_Template_ng_select_ngModelChange_25_listener($event) {
            return ctx.selectedLanguage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enter Examination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Send Welcome message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Age type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Birth Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "SIGN IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-tab", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "S.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Patient Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Admitted Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, StyleGuideComponent_tr_72_Template, 14, 8, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-tab", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Modal popup content goes here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.languagesList)("ngModel", ctx.selectedLanguage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.languagesList)("ngModel", ctx.selectedLanguage)("multiple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patientsList);
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-style-guide',
          templateUrl: './style-guide.component.html',
          styleUrls: ['./style-guide.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
    // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sravanibalne/Documents/sadisha/mtt-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map