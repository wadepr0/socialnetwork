(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(48),r=n(5),s="ADD-MESSAGE",i={dialogs:[{id:1,name:"Michelangelo",avatar:"http://1.bp.blogspot.com/-242AE06Iy74/U0ORg5GT1RI/AAAAAAAArGM/_YvM2-pVoLE/s1600/True+Detective_1+by+Yura+Shwedoff.jpg"},{id:2,name:"Leonardo",avatar:"https://i.pinimg.com/564x/d9/63/30/d963300762736f6cfd7d0ab9acfc4fc8.jpg"},{id:3,name:"Raphael",avatar:"https://cdnb.artstation.com/p/assets/images/images/036/858/837/large/james-zitnik-tmnt-final-jpg-low-res.jpg?1618835206"},{id:4,name:"Donatello",avatar:"https://pbs.twimg.com/media/CK1lhoAWUAAApGB.png"},{id:5,name:"Cryptogram",avatar:"https://i.redd.it/mg8zrn3vcp0y.png"},{id:6,name:"Orcoholist",avatar:"https://sun9-84.userapi.com/impf/c837524/v837524630/4813f/rQf8O2JPHak.jpg?size=676x960&quality=96&sign=d89652faeea839b5cb0873f51526e75b&type=album"},{id:7,name:"Loma",avatar:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c090fd70425409.5ba2edba50e39.jpg"},{id:8,name:"jENYAFUNK",avatar:"https://i.pinimg.com/originals/f7/2f/eb/f72feb868d5397686c04c35773f84289.png"}],messages:[{id:1,message:"Hey, are you still doing React?"},{id:2,message:"Yep, its not easy one"},{id:3,message:"lol, spending 5 months on React -_-"},{id:4,message:")))0"}]},c=function(e){return{type:s,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messages.length+1,message:t.newMessageBody};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},13:function(e,t,n){e.exports={nav:"Nav_nav__2hweF",item:"Nav_item__2W_Ni",link:"Nav_link__1nde8",active:"Nav_active__3HJyv"}},132:function(e,t,n){e.exports={friendsOnline:"SideBar_friendsOnline__1iJpm"}},133:function(e,t,n){e.exports={friend:"Friend_friend__YyqqX"}},135:function(e,t,n){e.exports={status:"ProfileStatus_status__3KMev"}},136:function(e,t,n){e.exports={main:"Profile_main__2i9F6",profile_wrapper:"Profile_profile_wrapper__3Q7yy",avatar:"Profile_avatar__olZCt",edit:"Profile_edit__3hB5S",avatar_wrapper:"Profile_avatar_wrapper__37DNF"}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(5),r=n(27),s=n(28),i=n(30),c=n(29),o=n(1),u=n.n(o),l=n(12),d=n(10),p=n(0),j=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(i.a)(o,t);var n=Object(c.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(a.a)({},this.props)):Object(p.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(j)(t)}},16:function(e,t,n){e.exports={wrap:"Users_wrap__1r55e",status:"Users_status__xumUT",avatar:"Users_avatar__3iAD_",userName:"Users_userName__1ABDK",location:"Users_location__1teOH",info:"Users_info__32gM4",nameLocation:"Users_nameLocation__3lF5M",followButton:"Users_followButton__TirKc",greenButton:"Users_greenButton__2sIvJ",infoWrapper:"Users_infoWrapper__1fz6g",pages:"Users_pages__F2Mh2",currentPage:"Users_currentPage__1Osl9"}},17:function(e,t,n){e.exports={item:"Post_item__2J2ws",post:"Post_post__2zM93",author:"Post_author__iankS",date:"Post_date__2_sIn",avatar:"Post_avatar__3ziq_",likes:"Post_likes__Rzr7F",edit:"Post_edit__31gEe",delete:"Post_delete__114Xp",reaction:"Post_reaction__yXS31",header_left:"Post_header_left__3KURr",header_edit:"Post_header_edit__2M5xP"}},246:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(11),s=n.n(r),i=n(20),c=n(48),o=n(5),u=n(129).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"418a3dee-f1ef-4c0b-b822-d1a85cff188e"}}),l=function(e){return u.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return u.get("profile/status/"+e).then((function(e){return e.data}))},p=function(e){return u.put("profile/status/",{status:e}).then((function(e){return e.data}))},j=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},f=function(e,t){return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},b=function(e){return u.delete("follow/".concat(e)).then((function(e){return e.data}))},m=function(e){return u.post("follow/".concat(e)).then((function(e){return e.data}))},h="ADD-POST",O="SET-USER-PROFILE",g="SET-STATUS",v={posts:[{id:6,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",likesCount:3,author:"Wade Wilson",date:"40 minutes ago"},{id:5,message:"React awesome",likesCount:77,author:"Wade Wilson",date:"2 hours ago"},{id:4,message:"Loma pidor-dolboeb",likesCount:552,author:"Wade Wilson",date:"Yesterday"},{id:3,message:"React awesome",likesCount:77,author:"Wade Wilson",date:"2 hours ago"},{id:2,message:"React awesome",likesCount:77,author:"Wade Wilson",date:"2 hours ago"},{id:1,message:"React awesome",likesCount:77,author:"Wade Wilson",date:"2 hours ago"}],profile:null,status:""},_=function(e){return{type:g,status:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var n=new Date,a=function(){switch(n.getMonth()){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}},r=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),s=n.getHours()<10?"0"+n.getHours():n.getHours(),i={id:e.posts.length+1,message:t.newPostText,likesCount:0,author:"Wade Wilson",date:a()+" "+n.getDate()+" "+n.getFullYear()+" "+s+":"+r};return Object(o.a)(Object(o.a)({},e),{},{posts:[i].concat(Object(c.a)(e.posts))});case O:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profileId});case g:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}},w=n(104),P={friends:[{id:1,name:"Michelangelo",avatar:"http://1.bp.blogspot.com/-242AE06Iy74/U0ORg5GT1RI/AAAAAAAArGM/_YvM2-pVoLE/s1600/True+Detective_1+by+Yura+Shwedoff.jpg"},{id:2,name:"Leonardo",avatar:"https://i.pinimg.com/564x/d9/63/30/d963300762736f6cfd7d0ab9acfc4fc8.jpg"},{id:3,name:"Raphael",avatar:"https://cdnb.artstation.com/p/assets/images/images/036/858/837/large/james-zitnik-tmnt-final-jpg-low-res.jpg?1618835206"},{id:4,name:"Donatello",avatar:"https://pbs.twimg.com/media/CK1lhoAWUAAApGB.png"},{id:5,name:"Cryptogram",avatar:"https://i.redd.it/mg8zrn3vcp0y.png"},{id:6,name:"Orcoholist",avatar:"https://sun9-84.userapi.com/impf/c837524/v837524630/4813f/rQf8O2JPHak.jpg?size=676x960&quality=96&sign=d89652faeea839b5cb0873f51526e75b&type=album"},{id:7,name:"Loma",avatar:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c090fd70425409.5ba2edba50e39.jpg"},{id:8,name:"jENYAFUNK",avatar:"https://i.pinimg.com/originals/f7/2f/eb/f72feb868d5397686c04c35773f84289.png"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return e},y="TOGGLE_FOLLOW",C="SET_USERS",k="SET_CURRENT_PAGE",S="SET_TOTAL_COUNT",A="TOGGLE_IS_FETCHING",U="TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowingProgress:[]},E=function(e){return{type:y,userId:e}},I=function(e){return{type:C,users:e}},M=function(e){return{type:k,page:e}},T=function(e){return{type:S,totalCount:e}},D=function(e){return{type:A,value:e}},R=function(e,t){return{type:U,value:e,userId:t}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!e.followed}):e}))});case C:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case k:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.page});case S:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case A:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.value});case U:return Object(o.a)(Object(o.a)({},e),{},{isFollowingProgress:t.value?[].concat(Object(c.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!==t.userId}))});default:return e}},W=n(50),z="SET_USER_DATA",B={id:null,email:null,login:null,isFetching:!1,isAuth:!1},G=function(e,t,n,a){return{type:z,payload:{id:e,email:t,login:n,isAuth:a}}},H=function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("auth/me").then((function(e){return e.data}));case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,i=a.email,c=a.login,t(G(r,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},Y=n(130),J=n(128),K="INITIALISED_SUCCESS",Q={initialised:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(o.a)(Object(o.a)({},e),{},{initialised:!0});default:return e}},V=Object(a.c)({profilePage:x,dialogsPage:w.b,navPage:N,usersPage:L,auth:q,form:J.a,app:X}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,$=Object(a.e)(V,Z(Object(a.a)(Y.a))),ee=n(1),te=n.n(ee),ne=n(69),ae=n.n(ne),re=n(27),se=n(28),ie=n(30),ce=n(29),oe=(n(246),n(13)),ue=n.n(oe),le=n(14),de=n(12),pe=n(132),je=n.n(pe),fe=n(133),be=n.n(fe),me=n(0);var he=function(e){return Object(me.jsxs)("div",{className:be.a.friend,children:[Object(me.jsx)("img",{src:e.avatar,alt:""}),Object(me.jsx)("p",{children:e.name})]})};var Oe=function(e){var t=e.navPage.friends.map((function(e){return Object(me.jsx)(he,{name:e.name,avatar:e.avatar},e.id)}));return Object(me.jsx)("div",{className:je.a.friendsOnline,children:t})},ge=Object(de.b)((function(e){return{navPage:e.navPage}}))(Oe);var ve=function(e){return Object(me.jsxs)("nav",{className:ue.a.nav,children:[Object(me.jsxs)("ul",{children:[Object(me.jsx)("li",{className:ue.a.item,children:Object(me.jsx)(le.b,{activeClassName:ue.a.active,className:"".concat(ue.a.link," ","fa-home"),to:"/profile"})}),Object(me.jsx)("li",{className:ue.a.item,children:Object(me.jsx)(le.b,{activeClassName:ue.a.active,className:"".concat(ue.a.link," ","fa-users"),to:"/users"})}),Object(me.jsx)("li",{className:ue.a.item,children:Object(me.jsx)(le.b,{activeClassName:ue.a.active,className:"".concat(ue.a.link," ","fa-envelope-o"),to:"/dialogs"})}),Object(me.jsx)("li",{className:ue.a.item,children:Object(me.jsx)(le.b,{activeClassName:ue.a.active,className:"".concat(ue.a.link," ","fa-camera-retro"),to:"/photos"})}),Object(me.jsx)("li",{className:ue.a.item,children:Object(me.jsx)(le.b,{activeClassName:ue.a.active,className:"".concat(ue.a.link," ","fa-music"),to:"/music"})}),Object(me.jsx)("li",{className:ue.a.item,children:Object(me.jsx)(le.b,{activeClassName:ue.a.active,className:"".concat(ue.a.link," ","fa-cog"),to:"/settings"})})]}),Object(me.jsx)(ge,{})]})};n(252);var _e=function(e){return Object(me.jsx)("div",{children:"Photos"})};n(253);var xe=function(e){return Object(me.jsx)("div",{children:"Music"})};n(254);var we=function(e){return Object(me.jsx)("div",{children:"Settings"})},Pe=n(10),Ne=n(60),ye=n(16),Ce=n.n(ye),ke=function(e){for(var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,r=e.pageSize,s=e.portionSize,i=void 0===s?10:s,c=Math.ceil(a/r),o=[],u=1;u<=c;u++)o.push(u);var l=Math.ceil(c/i),d=Object(ee.useState)(1),p=Object(Ne.a)(d,2),j=p[0],f=p[1],b=(j-1)*i+1,m=j*i;return Object(me.jsxs)("div",{className:Ce.a.pages,children:[Object(me.jsx)("div",{children:j>1&&Object(me.jsx)("button",{onClick:function(){f(j-1)},children:"Previous"})}),o.filter((function(e){return e>=b&&e<=m})).map((function(e){return Object(me.jsx)("span",{onClick:function(t){return n(e)},className:t===e&&Ce.a.currentPage,children:e})})),Object(me.jsx)("div",{children:l>j&&Object(me.jsx)("button",{onClick:function(){f(j+1)},children:"Next"})})]})},Se=function(e){return Object(me.jsxs)("div",{children:[Object(me.jsx)(ke,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(me.jsx)("div",{className:Ce.a.wrap,children:Object(me.jsxs)("div",{className:Ce.a.info,children:[Object(me.jsx)(le.b,{to:"/profile/"+t.id,children:Object(me.jsx)("img",{className:Ce.a.avatar,src:null===t.photos.small?"https://www.meme-arsenal.com/memes/fdff581c15b2110b6a4280e3d85db6cc.jpg":t.photos.small,alt:""})}),Object(me.jsx)("div",{className:Ce.a.infoWrapper,children:Object(me.jsxs)("div",{className:Ce.a.nameLocation,children:[Object(me.jsx)("div",{className:Ce.a.userName,children:t.name}),Object(me.jsxs)("div",{className:Ce.a.location,children:["".concat(t.name,"'s City")," ","Country"]})]})}),Object(me.jsx)("i",{className:Ce.a.status,children:null===t.status?"I don't have status yet":t.status}),Object(me.jsx)("div",{children:t.followed?Object(me.jsx)("button",{disabled:e.isFollowingProgress.some((function(e){return e===t.id})),className:Ce.a.followButton,onClick:function(){e.unFollowUsers(t.id)},children:"Unfollow"}):Object(me.jsx)("button",{disabled:e.isFollowingProgress.some((function(e){return e===t.id})),className:"".concat(Ce.a.greenButton," ").concat(Ce.a.followButton),onClick:function(){e.followUsers(t.id)},children:"Follow"})})]})},t.id)}))]})},Ae=n.p+"static/media/preloader.427cf793.gif",Ue=function(e){return Object(me.jsx)("div",{children:Object(me.jsx)("img",{style:{width:"100%",height:"auto"},src:Ae})})},Fe=(n(137),n(134)),Ee=Object(Fe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ie=function(e){return e.usersPage.pageSize},Me=function(e){return e.usersPage.totalUsersCount},Te=function(e){return e.usersPage.currentPage},De=function(e){return e.usersPage.isFetching},Re=function(e){return e.usersPage.isFollowingProgress},Le=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){var e;Object(re.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.onPageChanged(t,e.props.pageSize)},e}return Object(se.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers()}},{key:"render",value:function(){return Object(me.jsx)("div",{children:this.props.isFetching?Object(me.jsx)(Ue,{}):Object(me.jsx)(Se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,isFollowingProgress:this.props.isFollowingProgress,followUsers:this.props.followUsers,unFollowUsers:this.props.unFollowUsers})})}}]),n}(te.a.Component),We={toggleFollow:E,setUsers:I,setCurrentPage:M,setTotalUsersCount:T,toggleIsFetching:D,toggleIsFollowingProgress:R,requestUsers:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(D(!0)),n.next=3,f(e,t);case 3:r=n.sent,a(D(!1)),a(I(r.items)),a(T(r.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},onPageChanged:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(D(!0)),a(M(e)),n.next=4,f(e,t);case 4:r=n.sent,a(D(!1)),a(I(r.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followUsers:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(R(!0,e)),t.next=3,m(e);case 3:0===t.sent.resultCode&&n(E(e)),n(R(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowUsers:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(R(!0,e)),t.next=3,b(e);case 3:0===t.sent.resultCode&&n(E(e)),n(R(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ze=Object(a.d)(Object(de.b)((function(e){return{users:Ee(e),pageSize:Ie(e),totalUsersCount:Me(e),currentPage:Te(e),isFetching:De(e),isFollowingProgress:Re(e)}}),We))(Le),Be=n(40),Ge=n.n(Be);var He=function(e){return Object(me.jsxs)("div",{className:Ge.a.description,children:[Object(me.jsx)("div",{className:Ge.a.name,children:e.profile.fullName}),Object(me.jsx)("div",{className:Ge.a.country,children:e.country}),Object(me.jsxs)("div",{className:Ge.a.followers,children:["Followers: ",e.followers," "]}),Object(me.jsxs)("div",{className:Ge.a.likes,children:["Reputation: ",e.likes]}),Object(me.jsxs)("div",{className:Ge.a.posts,children:["Posts: ",e.posts]})]})},qe=n(92),Ye=n.n(qe),Je=n(135),Ke=n.n(Je),Qe=function(e){var t=Object(ee.useState)(!1),n=Object(Ne.a)(t,2),a=n[0],r=n[1],s=Object(ee.useState)(e.status),i=Object(Ne.a)(s,2),c=i[0],o=i[1];Object(ee.useEffect)((function(){o(e.status)}),[e.status]);return Object(me.jsx)("div",{className:Ke.a.status,children:a?Object(me.jsx)("div",{children:Object(me.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(c)},value:c})}):Object(me.jsx)("div",{children:Object(me.jsx)("span",{onDoubleClick:function(){r(!0)},children:c||"I don't have status yet"})})})};var Xe=function(e){return e.profile?Object(me.jsxs)("div",{className:Ye.a.avatar_wrapper,children:[Object(me.jsx)("span",{children:e.profile.status}),Object(me.jsx)("img",{className:Ye.a.avatar,src:e.profile.photos.large?e.profile.photos.large:"https://www.meme-arsenal.com/memes/fdff581c15b2110b6a4280e3d85db6cc.jpg",alt:""}),Object(me.jsx)(Qe,{status:e.status,updateStatus:e.updateStatus}),Object(me.jsx)(He,{followers:"777",likes:"157",posts:"12",country:"Russian Federation",profile:e.profile})]}):Object(me.jsx)(Ue,{})},Ve=n(136),Ze=n.n(Ve),$e=n(126),et=n(127),tt=n(43),nt=n(44),at=n(35),rt=n.n(at),st=n(17),it=n.n(st);var ct=function(e){return Object(me.jsxs)("div",{className:it.a.item,children:[Object(me.jsxs)("div",{className:it.a.avatar,children:[Object(me.jsxs)("div",{className:it.a.header_left,children:[Object(me.jsx)("img",{src:"https://joediliberto.files.wordpress.com/2011/01/fight-club02.jpg",alt:""}),Object(me.jsxs)("div",{children:[Object(me.jsx)("div",{className:it.a.author,children:e.author}),Object(me.jsx)("div",{className:it.a.date,children:e.date})]})]}),Object(me.jsxs)("div",{className:it.a.header_edit,children:[Object(me.jsx)("div",{className:"".concat(it.a.edit," ","fa-pencil"),children:Object(me.jsx)("span",{})}),Object(me.jsx)("div",{className:"".concat(it.a.delete," ","fa-trash"),children:Object(me.jsx)("span",{})})]})]}),Object(me.jsx)("div",{className:it.a.post,children:e.message}),Object(me.jsxs)("div",{className:it.a.reaction,children:[Object(me.jsx)("div",{className:"".concat(it.a.likes," ","fa-heart"),children:Object(me.jsx)("span",{children:e.likesCount})}),Object(me.jsx)("div",{className:"".concat(it.a.likes," ","fa-comments"),children:Object(me.jsx)("span",{children:e.likesCount})}),Object(me.jsx)("div",{className:"".concat(it.a.likes," ","fa-bookmark-o"),children:Object(me.jsx)("span",{children:e.likesCount})}),Object(me.jsx)("div",{className:"".concat(it.a.likes," ","fa-reply"),children:Object(me.jsx)("span",{children:e.likesCount})})]})]})},ot=Object(tt.a)(50);var ut=function(e){return console.log(e),Object(me.jsxs)("form",{onSubmit:e.handleSubmit,className:rt.a.textarea_wrapper,children:[Object(me.jsx)("div",{className:rt.a.header,children:"New Post"}),Object(me.jsx)($e.a,{name:"newPostText",component:nt.b,validate:[tt.b,ot]}),Object(me.jsxs)("div",{className:rt.a.buttons,children:[Object(me.jsx)("button",{className:rt.a.button,children:"+"}),Object(me.jsx)("button",{className:rt.a.submit,children:"Create Post"})]})]})};ut=Object(et.a)({form:"ProfileAddNewPostForm"})(ut);var lt=function(e){var t=e.posts.map((function(e){return Object(me.jsx)(ct,{message:e.message,likesCount:e.likesCount,author:e.author,date:e.date},e.id)}));return Object(me.jsxs)("div",{className:rt.a.wrapper,children:[Object(me.jsx)(ut,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(me.jsx)("div",{className:rt.a.posts,children:t})]})},dt=Object(de.b)((function(e){return{posts:e.profilePage.posts,newPost:e.profilePage.newPost}}),(function(e){return{addPost:function(t){e(function(e){return{type:h,newPostText:e}}(t))}}}))(lt);var pt=function(e){return Object(me.jsx)("main",{children:Object(me.jsxs)("div",{className:Ze.a.profile_wrapper,children:[Object(me.jsx)(Xe,{src:"https://joediliberto.files.wordpress.com/2011/01/fight-club02.jpg",profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(me.jsx)(dt,{})]})})},jt=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.currentUserId)||this.props.history.push("/login"),this.props.getUserProfileId(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(me.jsx)(pt,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(te.a.Component),ft={getUserProfileId:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:a=t.sent,n({type:O,profileId:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:a=t.sent,n(_(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:0===t.sent.resultCode&&n(_(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},bt=Object(a.d)(Object(de.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,currentUserId:e.auth.id,isAuth:e.auth.isAuth}}),ft),Pe.f)(jt),mt=n(49),ht=n.n(mt);var Ot=function(e){return Object(me.jsxs)("header",{className:ht.a.header,children:[Object(me.jsxs)("div",{className:ht.a.logoWrapper,children:[Object(me.jsx)("img",{src:"/images/reactjs-icon.svg",alt:""}),Object(me.jsxs)("div",{className:ht.a.logo,children:["WADE",Object(me.jsx)("span",{children:"PRO"})]})]}),Object(me.jsx)("div",{className:ht.a.loginBlock,children:e.isAuth?Object(me.jsxs)("div",{className:ht.a.userName,children:[e.login,Object(me.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(me.jsx)(le.b,{to:"/login",children:"Login"})})]})},gt=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"render",value:function(){return Object(me.jsx)(Ot,Object(o.a)({},this.props))}}]),n}(te.a.Component),vt={logout:function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===u.delete("auth/login").then((function(e){return e.data})).resultCode&&t(G(null,null,null,!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},_t=Object(de.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),vt)(gt),xt=n(39),wt=n.n(xt),Pt=Object(et.a)({form:"login"})((function(e){return Object(me.jsx)("div",{children:Object(me.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(me.jsx)("div",{children:Object(me.jsx)($e.a,{placeholder:"Email",name:"email",validate:[tt.b],component:nt.a})}),Object(me.jsx)("div",{children:Object(me.jsx)($e.a,{placeholder:"Password",name:"password",type:"password",validate:[tt.b],component:nt.a})}),Object(me.jsxs)("div",{children:[Object(me.jsx)($e.a,{type:"checkbox",name:"rememberMe",component:nt.a}),"remember me"]}),e.error&&Object(me.jsx)("div",{className:wt.a.formSummaryError,children:e.error}),Object(me.jsx)("div",{children:Object(me.jsx)("button",{children:"Login"})})]})})})),Nt=Object(de.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(i.a)(s.a.mark((function a(r){var i,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j(e,t,n);case 2:0===(i=a.sent).resultCode?r(H()):(c=i.messages.length>0?i.messages[0]:"Some error",r(Object(W.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(me.jsx)(Pe.a,{to:"/profile"}):Object(me.jsxs)("div",{children:[Object(me.jsx)("h1",{children:"Login"}),Object(me.jsx)(Pt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),yt=te.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Ct=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"componentDidMount",value:function(){this.props.initialiseApp()}},{key:"render",value:function(){return this.props.initialised?Object(me.jsxs)("div",{className:"app-wrapper",children:[Object(me.jsx)(_t,{}),Object(me.jsx)(ve,{}),Object(me.jsx)("div",{className:"app-wrapper-content",children:Object(me.jsxs)(ee.Suspense,{fallback:Object(me.jsx)(Ue,{}),children:[Object(me.jsx)(Pe.b,{path:"/profile/:userId?",render:function(){return Object(me.jsx)(bt,{})}}),Object(me.jsx)(Pe.b,{path:"/users",render:function(){return Object(me.jsx)(ze,{})}}),Object(me.jsx)(Pe.b,{path:"/dialogs",render:function(){return Object(me.jsx)(yt,{})}}),Object(me.jsx)(Pe.b,{path:"/photos",render:function(){return Object(me.jsx)(_e,{})}}),Object(me.jsx)(Pe.b,{path:"/music",render:function(){return Object(me.jsx)(xe,{})}}),Object(me.jsx)(Pe.b,{path:"/settings",render:function(){return Object(me.jsx)(we,{})}}),Object(me.jsx)(Pe.b,{path:"/login",render:function(){return Object(me.jsx)(Nt,{})}})]})})]}):Object(me.jsx)(Ue,{})}}]),n}(ee.Component),kt=Object(a.d)(Pe.f,Object(de.b)((function(e){return{initialised:e.app.initialised}}),{initialiseApp:function(){return function(e){e(H()).then((function(){e({type:K})}))}}}))(Ct);ae.a.render(Object(me.jsx)(le.a,{children:Object(me.jsx)(de.a,{store:$,children:Object(me.jsx)(kt,{})})}),document.getElementById("root"))},35:function(e,t,n){e.exports={buttons:"MyPosts_buttons__3QOO_",send:"MyPosts_send__t2iN-",wrapper:"MyPosts_wrapper__3fAkI",header:"MyPosts_header__goGo0",textarea_wrapper:"MyPosts_textarea_wrapper__2AFGT",button:"MyPosts_button__2t8yQ",submit:"MyPosts_submit__1cH4w"}},39:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2O1ro",error:"FormsControl_error__3nRKt",formSummaryError:"FormsControl_formSummaryError__2RAQl"}},40:function(e,t,n){e.exports={description:"Description_description__38k7I",name:"Description_name__3m-th",followers:"Description_followers__BPZJP",likes:"Description_likes__30rC2",posts:"Description_posts__2ZfYh",country:"Description_country__bRWu7"}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"You can't send empty form"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n(5),r=n(95),s=(n(1),n(39)),i=n.n(s),c=n(0),o=["input","meta"],u=["input","meta"],l=function(e){var t=e.input,n=e.meta,s=Object(r.a)(e,o),u=n.touched&&n.error;return Object(c.jsxs)("div",{className:i.a.formControl,children:[Object(c.jsx)("div",{className:u?i.a.error:"",children:Object(c.jsx)("textarea",Object(a.a)(Object(a.a)({},t),s))}),u&&Object(c.jsx)("span",{children:n.error})]})},d=function(e){var t=e.input,n=e.meta,s=Object(r.a)(e,u),o=n.touched&&n.error;return Object(c.jsxs)("div",{className:i.a.formControl,children:[Object(c.jsx)("div",{className:o?i.a.error:"",children:Object(c.jsx)("input",Object(a.a)(Object(a.a)({},t),s))}),o&&Object(c.jsx)("span",{children:n.error})]})}},49:function(e,t,n){e.exports={header:"Header_header__3rNqp",logoWrapper:"Header_logoWrapper__QBer9",logo:"Header_logo__R2gOf",colorization:"Header_colorization__1Xn-H",rotate:"Header_rotate__O4LQK",loginBlock:"Header_loginBlock__2akVD",userName:"Header_userName__2eM23"}},92:function(e,t,n){e.exports={main:"ProfileInfo_main__2qDXW",profile_wrapper:"ProfileInfo_profile_wrapper__5cxxk",avatar:"ProfileInfo_avatar__2U1rS",edit:"ProfileInfo_edit__2zlkL",avatar_wrapper:"ProfileInfo_avatar_wrapper__3Gqym"}}},[[294,1,2]]]);
//# sourceMappingURL=main.13b52a29.chunk.js.map