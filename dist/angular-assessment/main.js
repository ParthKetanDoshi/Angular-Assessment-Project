(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Parth/GitHub/assessment/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/material/menu */ "STbY"), __webpack_require__(/*! @angular/material/button */ "bTqV")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3, i4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderComponent = void 0;
    function HeaderComponent_button_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        const _r1 = i0.ɵɵreference(7);
        i0.ɵɵproperty("matMenuTriggerFor", _r1);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.loggedinusersname);
    } }
    class HeaderComponent {
        constructor(router) {
            this.router = router;
            this.loggedinusersname = localStorage.getItem('token2');
            this.loggedinuserid = +(localStorage.getItem('token'));
        }
        ngOnInit() {
        }
        loggedIn() {
            return localStorage.getItem('token');
        }
        logOut() {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
        }
    }
    exports.HeaderComponent = HeaderComponent;
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 2, consts: [["role", "banner", 1, "toolbar"], ["routerLink", ""], ["width", "80", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["mat-button", "", "class", "userbutton", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [3, "routerLink"], ["mat-menu-item", ""], ["mat-button", "", 1, "userbutton", 3, "matMenuTriggerFor"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4, "Assessment");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, HeaderComponent_button_5_Template, 2, 2, "button", 3);
            i0.ɵɵelementStart(6, "mat-menu", null, 4);
            i0.ɵɵelementStart(8, "button", 5);
            i0.ɵɵlistener("click", function HeaderComponent_Template_button_click_8_listener() { return ctx.logOut(); });
            i0.ɵɵtext(9, "Logout");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "a", 6);
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵtext(12, "Profile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.loggedIn());
            i0.ɵɵadvance(5);
            i0.ɵɵpropertyInterpolate1("routerLink", "profile/", ctx.loggedinuserid, "");
        } }, directives: [i1.RouterLinkWithHref, i2.NgIf, i3.MatMenu, i3.MatMenuItem, i4.MatButton, i3.MatMenuTrigger], styles: [".toolbar[_ngcontent-%COMP%] {\nposition: sticky;\ntop: 0;\nleft: 0;\nright: 0;\nheight: 80px;\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\nbackground-color: #333;\ncolor: white;\nfont-weight: 600;\nz-index: 100;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\nmargin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-family: Roboto,Helvetica Neue,Arial,sans-serif!important;\n    font-size: 40px;\n}\n\n.userbutton[_ngcontent-%COMP%]{\n    margin-left: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE1BQU07QUFDTixPQUFPO0FBQ1AsUUFBUTtBQUNSLFlBQVk7QUFDWixXQUFXO0FBQ1gsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7SUFDSSw2REFBNkQ7SUFDN0QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbnBvc2l0aW9uOiBzdGlja3k7XG50b3A6IDA7XG5sZWZ0OiAwO1xucmlnaHQ6IDA7XG5oZWlnaHQ6IDgwcHg7XG53aWR0aDogMTAwJTtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbmNvbG9yOiB3aGl0ZTtcbmZvbnQtd2VpZ2h0OiA2MDA7XG56LWluZGV4OiAxMDA7XG59XG5cbi50b29sYmFyIGltZyB7XG5tYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgc3BhbntcbiAgICBmb250LWZhbWlseTogUm9ib3RvLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnVzZXJidXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcbn0iXX0= */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "7JEP":
/*!*****************************************************************!*\
  !*** ./src/app/components/profile/service/userfetch.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common/http */ "tk/3")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserfetchService = void 0;
    class UserfetchService {
        constructor(http) {
            this.http = http;
        }
        getData() {
            let url = "https://jsonplaceholder.typicode.com/users";
            return this.http.get(url);
        }
    }
    exports.UserfetchService = UserfetchService;
    UserfetchService.ɵfac = function UserfetchService_Factory(t) { return new (t || UserfetchService)(i0.ɵɵinject(i1.HttpClient)); };
    UserfetchService.ɵprov = i0.ɵɵdefineInjectable({ token: UserfetchService, factory: UserfetchService.ɵfac, providedIn: 'root' });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = void 0;
    exports.environment = {
        production: false
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/material/button */ "bTqV")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HomeComponent = void 0;
    class HomeComponent {
        constructor(router) {
            this.router = router;
            if (!localStorage.getItem('token')) {
                this.router.navigate(['/login']);
            }
        }
        ngOnInit() {
        }
    }
    exports.HomeComponent = HomeComponent;
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, consts: [[1, "container"], ["routerLink", "/dashboard"], ["mat-raised-button", "", "color", "primary", 1, "button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h1");
            i0.ɵɵtext(2, " Welcome to My");
            i0.ɵɵelement(3, "br");
            i0.ɵɵtext(4, "Angular Assessment! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 1);
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵelementStart(7, "h2");
            i0.ɵɵtext(8, "Take Me to the Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.RouterLinkWithHref, i2.MatButton], styles: [".container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    vertical-align: center;\n}\nh1[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #b52e31;\n    text-align: center;\n    font-size: 70px;\n    margin: 0;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.button[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx3SUFBd0k7SUFDeEksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUVULGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFFVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2I1MmUzMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5idXR0b24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./service/userfetch.service */ "7JEP"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/material/button */ "bTqV"), __webpack_require__(/*! @angular/material/icon */ "NFeN"), __webpack_require__(/*! @angular/material/tabs */ "wZkO"), __webpack_require__(/*! ../details/details.component */ "QVFe"), __webpack_require__(/*! ../posts/posts.component */ "hMVD"), __webpack_require__(/*! ../albums/albums.component */ "li5+")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3, i4, i5, i6, i7, i8, i9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProfileComponent = void 0;
    function ProfileComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, "home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "h3");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "h5");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-tab-group", 4);
        i0.ɵɵelementStart(11, "mat-tab", 5);
        i0.ɵɵelement(12, "app-details", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-tab", 7);
        i0.ɵɵelement(14, "app-posts", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-tab", 8);
        i0.ɵɵelement(16, "app-albums", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const item_r1 = i0.ɵɵnextContext().$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(item_r1.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("@", item_r1.username, "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("userid", ctx_r2.userid);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("userid", ctx_r2.userid);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("userid", ctx_r2.userid);
    } }
    function ProfileComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, ProfileComponent_ng_container_0_ng_container_1_Template, 17, 5, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const item_r1 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", item_r1.id == ctx_r0.userid);
    } }
    class ProfileComponent {
        constructor(route, userData, router) {
            this.route = route;
            this.userData = userData;
            this.router = router;
            if (!localStorage.getItem('token')) {
                this.router.navigate(['/login']);
            }
            this.userData.getData().subscribe(userData => {
                // console.log(userData)
                this.data = userData;
            });
        }
        ngOnInit() {
            this.userid = this.route.snapshot.params['id'];
            // console.log(this.userid)
        }
    }
    exports.ProfileComponent = ProfileComponent;
    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.UserfetchService), i0.ɵɵdirectiveInject(i1.Router)); };
    ProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["routerLink", "/dashboard"], ["mat-icon-button", "", "aria-label", "Home Button", 2, "color", "white"], ["animationDuration", "2000ms", 1, "tabgroup"], ["label", "Details"], [3, "userid"], ["label", "Posts"], ["label", "Albums"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ProfileComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.data);
        } }, directives: [i3.NgForOf, i3.NgIf, i1.RouterLinkWithHref, i4.MatButton, i5.MatIcon, i6.MatTabGroup, i6.MatTab, i7.DetailsComponent, i8.PostsComponent, i9.AlbumsComponent], styles: ["body[_ngcontent-%COMP%]{\n    overflow: hidden;\n}\ndiv[_ngcontent-%COMP%] {\n    background-color: #333;\n    padding: 10px;\n}\nh3[_ngcontent-%COMP%] {\n    display: inline;\n    color: #fff;\n    margin-left: 10px;\n    padding: 10px;\n}\nh5[_ngcontent-%COMP%] {\n    display: inline;\n    color: #fff;\n    margin: 0px;\n}\n.tabgroup[_ngcontent-%COMP%] {\n    background-color: #333;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmgzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmg1IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4udGFiZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "FHoh":
/*!***************************************************************!*\
  !*** ./src/app/components/posts/service/postfetch.service.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common/http */ "tk/3")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PostfetchService = void 0;
    class PostfetchService {
        constructor(http) {
            this.http = http;
        }
        getData() {
            let url = "https://jsonplaceholder.typicode.com/posts";
            return this.http.get(url);
        }
    }
    exports.PostfetchService = PostfetchService;
    PostfetchService.ɵfac = function PostfetchService_Factory(t) { return new (t || PostfetchService)(i0.ɵɵinject(i1.HttpClient)); };
    PostfetchService.ɵprov = i0.ɵɵdefineInjectable({ token: PostfetchService, factory: PostfetchService.ɵfac, providedIn: 'root' });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "IiCK":
/*!*****************************************************************!*\
  !*** ./src/app/components/albums/service/photofetch.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common/http */ "tk/3")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PhotofetchService = void 0;
    class PhotofetchService {
        constructor(http) {
            this.http = http;
        }
        getData() {
            let url = "https://jsonplaceholder.typicode.com/photos";
            return this.http.get(url);
        }
    }
    exports.PhotofetchService = PhotofetchService;
    PhotofetchService.ɵfac = function PhotofetchService_Factory(t) { return new (t || PhotofetchService)(i0.ɵɵinject(i1.HttpClient)); };
    PhotofetchService.ɵprov = i0.ɵɵdefineInjectable({ token: PhotofetchService, factory: PhotofetchService.ɵfac, providedIn: 'root' });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FooterComponent = void 0;
    class FooterComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    exports.FooterComponent = FooterComponent;
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "footer"], ["href", "https://parthketandoshi.github.io/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 0);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2, "Angular Project created by ");
            i0.ɵɵelementStart(3, "a", 1);
            i0.ɵɵtext(4, "Parth Doshi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, styles: [".footer[_ngcontent-%COMP%]{\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    background-color: #333;\n    color: white;\n    z-index: 1;\n    font-weight: 300;\n}\n\n.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    \n    text-align: center;\n    width: 100%;\n    font-size: 20px;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: white;\n    font-weight: 500;\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n    text-shadow: 0 0 2px #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9vdGVyIHNwYW57XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvb3RlciBhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9vdGVyIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjZmZmZmZmO1xufSJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./service/user-service.service */ "V/ss"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/material/card */ "Wp6s"), __webpack_require__(/*! @angular/material/form-field */ "kmnG"), __webpack_require__(/*! @angular/material/input */ "qFsG"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/material/button */ "bTqV"), __webpack_require__(/*! @angular/material/icon */ "NFeN"), __webpack_require__(/*! ng2-search-filter */ "cZdB")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DashboardComponent = void 0;
    function DashboardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 6);
        i0.ɵɵlistener("click", function DashboardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.value = ""; });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    function DashboardComponent_ng_container_7_mat_card_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 8);
        i0.ɵɵelementStart(1, "mat-card-title");
        i0.ɵɵtext(2);
        i0.ɵɵelementStart(3, "h4");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-subtitle");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-card-content");
        i0.ɵɵtext(8);
        i0.ɵɵelement(9, "br");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-card-actions");
        i0.ɵɵelementStart(12, "a", 9);
        i0.ɵɵelementStart(13, "button", 10);
        i0.ɵɵtext(14, "View Profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const item_r4 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2("ID", item_r4.id, "- ", item_r4.name, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" @", item_r4.username, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(item_r4.company.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("EMail ID: ", item_r4.email, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Contact No.: ", item_r4.phone, "");
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate1("routerLink", "/profile/", item_r4.id, "");
    } }
    function DashboardComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DashboardComponent_ng_container_7_mat_card_1_Template, 15, 7, "mat-card", 7);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const item_r4 = ctx.$implicit;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", item_r4.id != ctx_r1.loggedinuserid);
    } }
    class DashboardComponent {
        constructor(userData, router) {
            this.userData = userData;
            this.router = router;
            this.loggedinuserid = +(localStorage.getItem('token'));
            this.value = '';
            if (!localStorage.getItem('token')) {
                this.router.navigate(['/login']);
            }
            this.userData.getData().subscribe(userData => {
                // console.log(userData)
                this.data = userData;
            });
        }
        ngOnInit() {
        }
    }
    exports.DashboardComponent = DashboardComponent;
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(i0.ɵɵdirectiveInject(i1.UserServiceService), i0.ɵɵdirectiveInject(i2.Router)); };
    DashboardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 9, vars: 6, consts: [[1, "searchbarcard"], [1, "search-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "grid"], [4, "ngFor", "ngForOf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["class", "card", 4, "ngIf"], [1, "card"], [3, "routerLink"], ["mat-raised-button", "", "color", "primary"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Search User");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, DashboardComponent_button_5_Template, 3, 0, "button", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, DashboardComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
            i0.ɵɵpipe(8, "filter");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.value);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(8, 3, ctx.data, ctx.value));
        } }, directives: [i3.MatCard, i4.MatFormField, i4.MatLabel, i5.MatInput, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.NgIf, i7.NgForOf, i8.MatButton, i4.MatSuffix, i9.MatIcon, i3.MatCardTitle, i3.MatCardSubtitle, i3.MatCardContent, i3.MatCardActions, i2.RouterLinkWithHref], pipes: [i10.Ng2SearchPipe], styles: [".grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n.card[_ngcontent-%COMP%] {\n    background-color: #333;\n    margin: 10px;\n    padding: 20px;\n}\n.search-form-field[_ngcontent-%COMP%] {\n    color: #fff;\n    width: 100%;\n}\n.searchbarcard[_ngcontent-%COMP%]{\n    background-color: #333;\n    width: 75%;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin-top: 5px;\n    margin-left: auto;\n    margin-right: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQjtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2hiYXJjYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0b1xufSJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "QVFe":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./service/userfetch.service */ "VIH4"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/material/grid-list */ "zkoq"), __webpack_require__(/*! @angular/material/card */ "Wp6s")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3, i4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DetailsComponent = void 0;
    function DetailsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-grid-list", 3);
        i0.ɵɵelementStart(2, "mat-grid-tile", 4);
        i0.ɵɵelementStart(3, "mat-card", 5);
        i0.ɵɵelementStart(4, "mat-card-title", 6);
        i0.ɵɵelementStart(5, "h3");
        i0.ɵɵtext(6, "PERSONAL DETAILS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-card-content");
        i0.ɵɵelementStart(8, "table");
        i0.ɵɵelementStart(9, "tr");
        i0.ɵɵelementStart(10, "td");
        i0.ɵɵelementStart(11, "b");
        i0.ɵɵtext(12, "ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "td");
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "tr");
        i0.ɵɵelementStart(16, "td");
        i0.ɵɵelementStart(17, "b");
        i0.ɵɵtext(18, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "td");
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "tr");
        i0.ɵɵelementStart(22, "td");
        i0.ɵɵelementStart(23, "b");
        i0.ɵɵtext(24, "Username");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "td");
        i0.ɵɵtext(26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "tr");
        i0.ɵɵelementStart(28, "td");
        i0.ɵɵelementStart(29, "b");
        i0.ɵɵtext(30, "EMail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "td");
        i0.ɵɵtext(32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "tr");
        i0.ɵɵelementStart(34, "td");
        i0.ɵɵelementStart(35, "b");
        i0.ɵɵtext(36, "Phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "td");
        i0.ɵɵtext(38);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "tr");
        i0.ɵɵelementStart(40, "td");
        i0.ɵɵelementStart(41, "b");
        i0.ɵɵtext(42, "Website");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "td");
        i0.ɵɵtext(44);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "mat-grid-tile", 4);
        i0.ɵɵelementStart(46, "mat-card", 5);
        i0.ɵɵelementStart(47, "mat-card-title", 6);
        i0.ɵɵelementStart(48, "h3");
        i0.ɵɵtext(49, "COMPANY DETAILS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "mat-card-content");
        i0.ɵɵelementStart(51, "table");
        i0.ɵɵelementStart(52, "tr");
        i0.ɵɵelementStart(53, "td");
        i0.ɵɵelementStart(54, "b");
        i0.ɵɵtext(55, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "td");
        i0.ɵɵtext(57);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "tr");
        i0.ɵɵelementStart(59, "td");
        i0.ɵɵelementStart(60, "b");
        i0.ɵɵtext(61, "Catchphrase");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "td");
        i0.ɵɵtext(63);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "tr");
        i0.ɵɵelementStart(65, "td");
        i0.ɵɵelementStart(66, "b");
        i0.ɵɵtext(67, "Business Strategy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "td");
        i0.ɵɵtext(69);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "mat-grid-tile", 4);
        i0.ɵɵelementStart(71, "mat-card", 5);
        i0.ɵɵelementStart(72, "mat-card-title", 6);
        i0.ɵɵelementStart(73, "h3");
        i0.ɵɵtext(74, "GEOGRAPHICAL DETAILS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "mat-card-content");
        i0.ɵɵelementStart(76, "table");
        i0.ɵɵelementStart(77, "tr");
        i0.ɵɵelementStart(78, "td");
        i0.ɵɵtext(79, " Latitude ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(80, "td");
        i0.ɵɵtext(81);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "tr");
        i0.ɵɵelementStart(83, "td");
        i0.ɵɵtext(84, " Longitude ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(85, "td");
        i0.ɵɵtext(86);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(87, "mat-grid-tile", 4);
        i0.ɵɵelementStart(88, "mat-card", 5);
        i0.ɵɵelementStart(89, "mat-card-title", 6);
        i0.ɵɵelementStart(90, "h3");
        i0.ɵɵtext(91, "ADDRESS DETAILS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "mat-card-content");
        i0.ɵɵelementStart(93, "table");
        i0.ɵɵelementStart(94, "tr");
        i0.ɵɵelementStart(95, "td");
        i0.ɵɵtext(96, " Street ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(97, "td");
        i0.ɵɵtext(98);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(99, "tr");
        i0.ɵɵelementStart(100, "td");
        i0.ɵɵtext(101, " Suite ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(102, "td");
        i0.ɵɵtext(103);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(104, "tr");
        i0.ɵɵelementStart(105, "td");
        i0.ɵɵtext(106, " City ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(107, "td");
        i0.ɵɵtext(108);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(109, "tr");
        i0.ɵɵelementStart(110, "td");
        i0.ɵɵtext(111, " Zip Code ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(112, "td");
        i0.ɵɵtext(113);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const item_r1 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("colspan", 3)("rowspan", 1);
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate1(" ", item_r1.id, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", item_r1.name, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", item_r1.username, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", item_r1.email, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", item_r1.phone, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", item_r1.website, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("colspan", 2)("rowspan", 2);
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate1(" ", item_r1.company.name, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", item_r1.company.catchPhrase, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", item_r1.company.bs, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("colspan", 1)("rowspan", 1);
        i0.ɵɵadvance(11);
        i0.ɵɵtextInterpolate1(" ", item_r1.address.geo.lat, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", item_r1.address.geo.lng, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("colspan", 2)("rowspan", 1);
        i0.ɵɵadvance(11);
        i0.ɵɵtextInterpolate1(" ", item_r1.address.street, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", item_r1.address.suite, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", item_r1.address.city, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", item_r1.address.zipcode, " ");
    } }
    function DetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 1);
        i0.ɵɵtemplate(1, DetailsComponent_ng_container_0_ng_container_1_Template, 114, 23, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const item_r1 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", item_r1.id == ctx_r0.userid);
    } }
    class DetailsComponent {
        constructor(userData) {
            this.userData = userData;
            this.userData.getData().subscribe(userData => {
                // console.log(userData)
                this.data = userData;
            });
        }
        ngOnInit() {
            // console.log(this.userid);
        }
    }
    exports.DetailsComponent = DetailsComponent;
    DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(i0.ɵɵdirectiveInject(i1.UserfetchService)); };
    DetailsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DetailsComponent, selectors: [["app-details"]], inputs: { userid: "userid" }, decls: 1, vars: 1, consts: [["class", "w-100 h-100", 4, "ngFor", "ngForOf"], [1, "w-100", "h-100"], [4, "ngIf"], ["cols", "5", 1, "gridlist"], [1, "tile", 3, "colspan", "rowspan"], [1, "card"], [2, "text-align", "center"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DetailsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.data);
        } }, directives: [i2.NgForOf, i2.NgIf, i3.MatGridList, i3.MatGridTile, i4.MatCard, i4.MatCardTitle, i4.MatCardContent], styles: ["p[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.tile[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.4);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    width: 75%;\n    border-radius: 10px;\n}\n.card[_ngcontent-%COMP%]:hover{\n    box-shadow: 0 0 20px #fff;\n}\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 25px;\n    padding: 10px;\n}\nb[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\ntd[_ngcontent-%COMP%]{\n    padding-top: 0.2em;\n    padding-bottom: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsd0lBQXdJO0lBQ3hJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4udGlsZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmQ6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggI2ZmZjtcbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG50ZHtcbiAgICBwYWRkaW5nLXRvcDogMC4yZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xufSJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! ./components/header/header.component */ "2MiI"), __webpack_require__(/*! ./components/footer/footer.component */ "LmEr")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3, i4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppComponent = void 0;
    function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-header");
    } }
    function AppComponent_app_footer_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-footer");
    } }
    class AppComponent {
        constructor() {
            this.title = 'angular-assessment';
        }
        loggedIn() {
            return localStorage.getItem('token');
        }
    }
    exports.AppComponent = AppComponent;
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
            i0.ɵɵelement(1, "router-outlet");
            i0.ɵɵtemplate(2, AppComponent_app_footer_2_Template, 1, 0, "app-footer", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.loggedIn());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loggedIn());
        } }, directives: [i1.NgIf, i2.RouterOutlet, i3.HeaderComponent, i4.FooterComponent], styles: ["body[_ngcontent-%COMP%] {\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "V/ss":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/service/user-service.service.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common/http */ "tk/3")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserServiceService = void 0;
    class UserServiceService {
        constructor(http) {
            this.http = http;
        }
        getData() {
            let url = "https://jsonplaceholder.typicode.com/users";
            return this.http.get(url);
        }
    }
    exports.UserServiceService = UserServiceService;
    UserServiceService.ɵfac = function UserServiceService_Factory(t) { return new (t || UserServiceService)(i0.ɵɵinject(i1.HttpClient)); };
    UserServiceService.ɵprov = i0.ɵɵdefineInjectable({ token: UserServiceService, factory: UserServiceService.ɵfac, providedIn: 'root' });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "VIH4":
/*!*****************************************************************!*\
  !*** ./src/app/components/details/service/userfetch.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common/http */ "tk/3")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserfetchService = void 0;
    class UserfetchService {
        constructor(http) {
            this.http = http;
        }
        getData() {
            let url = "https://jsonplaceholder.typicode.com/users";
            return this.http.get(url);
        }
    }
    exports.UserfetchService = UserfetchService;
    UserfetchService.ɵfac = function UserfetchService_Factory(t) { return new (t || UserfetchService)(i0.ɵɵinject(i1.HttpClient)); };
    UserfetchService.ɵprov = i0.ɵɵdefineInjectable({ token: UserfetchService, factory: UserfetchService.ɵfac, providedIn: 'root' });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/material/card */ "Wp6s"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! @angular/material/form-field */ "kmnG"), __webpack_require__(/*! @angular/material/input */ "qFsG"), __webpack_require__(/*! @angular/material/button */ "bTqV"), __webpack_require__(/*! @angular/common */ "ofXK")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3, i4, i5, i6, i7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginComponent = void 0;
    function LoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 12);
        i0.ɵɵelementStart(1, "strong");
        i0.ɵɵtext(2, "Warning!");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3, " Incorrect EMail ID or Password ");
        i0.ɵɵelementEnd();
    } }
    class LoginComponent {
        constructor(router) {
            this.router = router;
            this.useremails = ["Sincere@april.biz", "Shanna@melissa.tv", "Nathan@yesenia.net", "Julianne.OConner@kory.org", "Lucio_Hettinger@annie.ca", "Karley_Dach@jasper.info", "Telly.Hoeger@billy.biz", "Sherwood@rosamond.me", "Chaim_McDermott@dana.io", "Rey.Padberg@karina.biz"];
            this.usernames = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"];
            this.alert = false;
        }
        ngOnInit() {
        }
        onLogin(data) {
            if (this.useremails.indexOf(data.userEmail) != -1 && data.password == "pass@123") {
                // console.log("Login Successful")
                this.loggedinuserid = String(this.useremails.indexOf(data.userEmail) + 1);
                localStorage.setItem('token', this.loggedinuserid);
                localStorage.setItem('token2', this.usernames[(this.useremails.indexOf(data.userEmail))]);
                this.router.navigate(['']);
            }
            else {
                // console.log("Login Failed")
                // window.alert("Incorrect Email ID or Password")
                this.alert = true;
            }
        }
    }
    exports.LoginComponent = LoginComponent;
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 2, consts: [[1, "container"], [1, "card"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [2, "margin-bottom", "30px"], [3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "Email", "appearance", "outline", 1, "form-field"], ["matInput", "", "placeholder", "Please Enter your Email ID", "required", "", "ngModel", "", "name", "userEmail", "autocomplete", "off"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "type", "password", "placeholder", "Please Enter your Password", "required", "", "ngModel", "", "name", "password"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "button", 3, "disabled"], ["class", "alert alert-danger", "role", "alert", "style", "margin-top:30px", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", 2, "margin-top", "30px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            const _r2 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-card", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4, "Assessment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-card-header");
            i0.ɵɵelementStart(6, "mat-card-title", 3);
            i0.ɵɵelementStart(7, "h2");
            i0.ɵɵtext(8, "Log In");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "form", 4, 5);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(10); return ctx.onLogin(_r0.value); });
            i0.ɵɵelementStart(11, "mat-form-field", 6);
            i0.ɵɵelementStart(12, "mat-label");
            i0.ɵɵtext(13, "Email ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 7);
            i0.ɵɵelementStart(15, "mat-hint");
            i0.ɵɵtext(16, " Sincere@april.biz,Shanna@melissa.tv,Nathan@yesenia.net,Julianne.OConner@kory.org,Lucio_Hettinger@annie.ca,Karley_Dach@jasper.info,Telly.Hoeger@billy.biz,Sherwood@rosamond.me,Chaim_McDermott@dana.io,Rey.Padberg@karina.biz ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-form-field", 8);
            i0.ɵɵelementStart(18, "mat-label");
            i0.ɵɵtext(19, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 9);
            i0.ɵɵelementStart(21, "mat-hint");
            i0.ɵɵtext(22, " pass@123 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 10);
            i0.ɵɵtext(24, "Log In");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(25, LoginComponent_div_25_Template, 4, 0, "div", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(10);
            i0.ɵɵadvance(23);
            i0.ɵɵproperty("disabled", !_r0.valid);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.alert);
        } }, directives: [i2.MatCard, i2.MatCardHeader, i2.MatCardTitle, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatFormField, i4.MatLabel, i5.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i4.MatHint, i6.MatButton, i7.NgIf], styles: [".container[_ngcontent-%COMP%]{\n    margin-top: 10%\n}\n.card[_ngcontent-%COMP%]{\n    width: 75%;\n    margin-left: auto;\n    margin-right: auto;\n}\n.form-field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.button[_ngcontent-%COMP%]{\n    width: 40%;\n}\nspan[_ngcontent-%COMP%]{\n    font-family: Roboto,Helvetica Neue,Arial,sans-serif!important;\n    font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDZEQUE2RDtJQUM3RCxlQUFlO0FBQ25CIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDEwJVxufVxuLmNhcmR7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9ue1xuICAgIHdpZHRoOiA0MCU7XG59XG5zcGFue1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/platform-browser */ "jhN1"), __webpack_require__(/*! @angular/common/http */ "tk/3"), __webpack_require__(/*! @angular/material/card */ "Wp6s"), __webpack_require__(/*! @angular/material/button */ "bTqV"), __webpack_require__(/*! @angular/material/form-field */ "kmnG"), __webpack_require__(/*! @angular/material/input */ "qFsG"), __webpack_require__(/*! @angular/material/tabs */ "wZkO"), __webpack_require__(/*! @angular/material/grid-list */ "zkoq"), __webpack_require__(/*! @angular/material/icon */ "NFeN"), __webpack_require__(/*! @angular/material/menu */ "STbY"), __webpack_require__(/*! @angular/router */ "tyNb"), __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws"), __webpack_require__(/*! @angular/forms */ "3Pt+"), __webpack_require__(/*! ng2-search-filter */ "cZdB"), __webpack_require__(/*! ./app.component */ "Sy1n"), __webpack_require__(/*! ./components/home/home.component */ "BuFo"), __webpack_require__(/*! ./components/header/header.component */ "2MiI"), __webpack_require__(/*! ./components/footer/footer.component */ "LmEr"), __webpack_require__(/*! ./components/login/login.component */ "W3Zi"), __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv"), __webpack_require__(/*! ./components/details/details.component */ "QVFe"), __webpack_require__(/*! ./components/albums/albums.component */ "li5+"), __webpack_require__(/*! ./components/posts/posts.component */ "hMVD"), __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/router */ "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, platform_browser_1, http_1, card_1, button_1, form_field_1, input_1, tabs_1, grid_list_1, icon_1, menu_1, router_1, animations_1, forms_1, ng2_search_filter_1, app_component_1, home_component_1, header_component_1, footer_component_1, login_component_1, dashboard_component_1, details_component_1, albums_component_1, posts_component_1, profile_component_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppModule = void 0;
    const appRoutes = [
        { path: '', component: home_component_1.HomeComponent },
        { path: 'login', component: login_component_1.LoginComponent },
        { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
        { path: 'profile', component: login_component_1.LoginComponent },
        { path: 'profile/:id', component: profile_component_1.ProfileComponent, children: [
                { path: 'details', component: details_component_1.DetailsComponent },
                { path: 'albums', component: albums_component_1.AlbumsComponent },
                { path: 'posts', component: posts_component_1.PostsComponent }
            ] },
    ];
    class AppModule {
    }
    exports.AppModule = AppModule;
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                tabs_1.MatTabsModule,
                grid_list_1.MatGridListModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                forms_1.FormsModule,
                ng2_search_filter_1.Ng2SearchPipeModule,
                router_1.RouterModule.forRoot(appRoutes)
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            login_component_1.LoginComponent,
            dashboard_component_1.DashboardComponent,
            details_component_1.DetailsComponent,
            albums_component_1.AlbumsComponent,
            posts_component_1.PostsComponent,
            profile_component_1.ProfileComponent], imports: [platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
            card_1.MatCardModule,
            button_1.MatButtonModule,
            form_field_1.MatFormFieldModule,
            input_1.MatInputModule,
            tabs_1.MatTabsModule,
            grid_list_1.MatGridListModule,
            icon_1.MatIconModule,
            menu_1.MatMenuModule,
            forms_1.FormsModule,
            ng2_search_filter_1.Ng2SearchPipeModule, i1.RouterModule] }); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "biUE":
/*!*****************************************************************!*\
  !*** ./src/app/components/albums/service/albumfetch.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! @angular/common/http */ "tk/3")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AlbumfetchService = void 0;
    class AlbumfetchService {
        constructor(http) {
            this.http = http;
        }
        getData() {
            let url = "https://jsonplaceholder.typicode.com/albums";
            return this.http.get(url);
        }
    }
    exports.AlbumfetchService = AlbumfetchService;
    AlbumfetchService.ɵfac = function AlbumfetchService_Factory(t) { return new (t || AlbumfetchService)(i0.ɵɵinject(i1.HttpClient)); };
    AlbumfetchService.ɵprov = i0.ɵɵdefineInjectable({ token: AlbumfetchService, factory: AlbumfetchService.ɵfac, providedIn: 'root' });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "hMVD":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./service/postfetch.service */ "FHoh"), __webpack_require__(/*! @angular/common */ "ofXK"), __webpack_require__(/*! @angular/material/card */ "Wp6s")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PostsComponent = void 0;
    function PostsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mat-card", 3);
        i0.ɵɵelementStart(2, "mat-card-title");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-card-content");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const item_r1 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2(" ", item_r1.id, ". ", item_r1.title, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", item_r1.body, " ");
    } }
    function PostsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, PostsComponent_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const item_r1 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", item_r1.userId == ctx_r0.userid);
    } }
    class PostsComponent {
        constructor(postData) {
            this.postData = postData;
            this.postData.getData().subscribe(postData => {
                // console.log(postData)
                this.data = postData;
            });
        }
        ngOnInit() {
            // console.log(this.userid);
        }
    }
    exports.PostsComponent = PostsComponent;
    PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostfetchService)); };
    PostsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["app-posts"]], inputs: { userid: "userid" }, decls: 2, vars: 1, consts: [[1, "container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, PostsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.data);
        } }, directives: [i2.NgForOf, i2.NgIf, i3.MatCard, i3.MatCardTitle, i3.MatCardContent], styles: ["body[_ngcontent-%COMP%] {\n    background-color: #666;\n}\np[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.4);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    \n    border-radius: 10px;\n    margin-top: 20px;\n    padding: 5px;\n}\n.card[_ngcontent-%COMP%]:hover{\n    box-shadow: 0 0 15px #fff;\n}\n.container[_ngcontent-%COMP%]{\n    overflow: auto;\n    height: 100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLHdJQUF3STtJQUN4SSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InBvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xufVxucCB7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgLyogd2lkdGg6IDc1JTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmNhcmQ6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggI2ZmZjtcbn1cbi5jb250YWluZXJ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "li5+":
/*!*******************************************************!*\
  !*** ./src/app/components/albums/albums.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./service/albumfetch.service */ "biUE"), __webpack_require__(/*! ./service/photofetch.service */ "IiCK"), __webpack_require__(/*! @angular/common */ "ofXK")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, i0, i1, i2, i3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AlbumsComponent = void 0;
    function AlbumsComponent_ng_container_1_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "figure");
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementStart(4, "figcaption");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const photo_r4 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("src", photo_r4.url, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2(" ", photo_r4.id, ". ", photo_r4.title, " ");
    } }
    function AlbumsComponent_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, AlbumsComponent_ng_container_1_ng_container_1_ng_container_3_ng_container_1_Template, 6, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const photo_r4 = ctx.$implicit;
        const album_r1 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", photo_r4.albumId == album_r1.id);
    } }
    function AlbumsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, AlbumsComponent_ng_container_1_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const album_r1 = i0.ɵɵnextContext().$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2(" ", album_r1.id, ". ", album_r1.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r2.photoData);
    } }
    function AlbumsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, AlbumsComponent_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        const album_r1 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", album_r1.userId == ctx_r0.userid);
    } }
    class AlbumsComponent {
        constructor(fetchedAlbumData, fetchedPhotoData) {
            this.fetchedAlbumData = fetchedAlbumData;
            this.fetchedPhotoData = fetchedPhotoData;
            this.fetchedAlbumData.getData().subscribe(fetchedAlbumData => {
                // console.log(fetchedAlbumData)
                this.albumData = fetchedAlbumData;
            });
            this.fetchedPhotoData.getData().subscribe(fetchedPhotoData => {
                // console.log(fetchedPhotoData)
                this.photoData = fetchedPhotoData;
            });
        }
        ngOnInit() {
            // console.log(this.userid);
        }
    }
    exports.AlbumsComponent = AlbumsComponent;
    AlbumsComponent.ɵfac = function AlbumsComponent_Factory(t) { return new (t || AlbumsComponent)(i0.ɵɵdirectiveInject(i1.AlbumfetchService), i0.ɵɵdirectiveInject(i2.PhotofetchService)); };
    AlbumsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlbumsComponent, selectors: [["app-albums"]], inputs: { userid: "userid" }, decls: 2, vars: 1, consts: [[1, "container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "src"]], template: function AlbumsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AlbumsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.albumData);
        } }, directives: [i3.NgForOf, i3.NgIf], styles: ["body[_ngcontent-%COMP%]{\n    overflow-y: hidden;\n}\n.container[_ngcontent-%COMP%]{\n    overflow: auto;\n    height: 100%;\n    width: 100%;\n}\n.button[_ngcontent-%COMP%]{\n    width: 100%;\n    margin: 10px;\n}\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n    color: #fff;\n}\nfigure[_ngcontent-%COMP%]{\n    border: 1px #cccccc solid;\n    padding: 4px;\n    width: 610px;\n}\nfigcaption[_ngcontent-%COMP%]{\n    background-color: black;\n    color: #fff;\n    font-style: italic;\n    padding: 2px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFsYnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uY29udGFpbmVye1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuaDMsIHAge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuZmlndXJle1xuICAgIGJvcmRlcjogMXB4ICNjY2NjY2Mgc29saWQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHdpZHRoOiA2MTBweDtcbn1cbmZpZ2NhcHRpb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/platform-browser */ "jhN1"), __webpack_require__(/*! @angular/core */ "fXoL"), __webpack_require__(/*! ./app/app.module */ "ZAI4"), __webpack_require__(/*! ./environments/environment */ "AytR")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, __NgCli_bootstrap_1, core_1, app_module_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    __NgCli_bootstrap_1.platformBrowser().bootstrapModule(app_module_1.AppModule)
        .catch(err => console.error(err));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map