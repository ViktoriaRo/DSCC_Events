(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,a){e.exports=a(427)},225:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(216),o=a.n(i),c=(a(225),a(20)),s=a(21),l=a(23),u=a(22),m=a(24),d=a(430),h=a(432),p=a(428),f=a(232),E=a(429),g=a(9),v=Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/create"},"New Event")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/",className:"btn btn-floating pink lightening-1"},e.profile.initials)))}),b=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signin"},"Log In")))},N=Object(g.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(v,{profile:a}):r.a.createElement(b,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{to:"/",className:"brand-logo"},"EnLightning"),n))}),y=a(49),w=a.n(y),O=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notification"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content," "),r.a.createElement("div",{className:"grey-text note-date"},w()(e.time.toDate()).fromNow()))})))))},j=function(e){var t=e.event;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},w()(t.createdAt.toDate()).calendar())))},C=function(e){var t=e.events;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(f.a,{to:"/event/"+e.id,key:e.id},r.a.createElement(j,{event:e}))}))},S=a(15),R=a(26),k=a(431),F=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.events,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(C,{events:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(O,{notifications:n})))):r.a.createElement(k.a,{to:"/signin"})}}]),t}(n.Component),x=Object(S.d)(Object(g.b)(function(e){return console.log(e),{events:e.firestore.ordered.events,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(R.firestoreConnect)([{collection:"events",orderBy:["createdAt","desc"]},{collection:"notifications",limit:4,orderBy:["time","desc"]}]))(F),A=Object(S.d)(Object(g.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.events;return{event:n?n[a]:null,auth:e.firebase.auth}}),Object(R.firestoreConnect)([{collection:"events"}]))(function(e){var t=e.event;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,w()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading event...")):r.a.createElement(k.a,{to:"/signin"})}),I=a(30),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(k.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),L=Object(g.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(U),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(k.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign up"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),P=Object(g.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,i=n.getFirestore,o=r(),c=i();o.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return c.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(_),T=a(41),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(I.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createEvent(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create new Event"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Event Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(k.a,{to:"/signin"})}}]),t}(n.Component),G=Object(g.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createEvent:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),i=a().firebase.profile,o=a().firebase.auth.uid;r.collection("events").add(Object(T.a)({},e,{authorFirstName:i.firstName,authorLastName:i.lastName,authorId:o,createdAt:new Date})).then(function(){t({type:"CREATE_EVENT",event:e})}).catch(function(e){t({type:"CREATE_EVENT_ERROR",err:e})})}}(t))}}})(W),z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{path:"/event/:id",component:A}),r.a.createElement(p.a,{path:"/signin",component:L}),r.a.createElement(p.a,{path:"/signup",component:P}),r.a.createElement(p.a,{path:"/create",component:G}))))}}]),t}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");D?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):q(t,e)})}}function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var H={authError:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(T.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(T.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("logout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(T.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(T.a)({},e,{authError:t.err.message});default:return e}},J={events:[{id:"1",title:"First event",content:"Is post each that just leaf no. He connection interested so we an sympathize advantages. To said is it shed want do. Occasional middletons everything so to. Have spot part for his quit may. Enable it is square my an regard. Often merit stuff first oh up hills as he. Servants contempt as although addition dashwood is procured. Interest in yourself an do of numerous feelings cheerful confined. "},{id:"2",title:"Second event",content:"Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no. Boisterous estimating interested collecting get conviction friendship say boy. Him mrs shy article smiling respect opinion excited. Welcomed humoured rejoiced peculiar to in an.  "},{id:"3",title:"Third event",content:"It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings. Acceptance unreserved old admiration projection nay yet him. Lasted am so before on esteem vanity oh. "}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_EVENT":return console.log("created event",t.event),e;case"CREATE_EVENT_ERROR":return console.log("create event error",t.err),e;default:return e}},Q=a(62),$=Object(S.c)({auth:V,event:K,firestore:Q.firestoreReducer,firebase:R.firebaseReducer}),M=a(219),X=a(90),Y=a.n(X);a(420),a(425);Y.a.initializeApp({apiKey:"AIzaSyCR8WmtG_DllPn3LRySiyofBRt60oeQFd4",authDomain:"enlightning-976fd.firebaseapp.com",databaseURL:"https://enlightning-976fd.firebaseio.com",projectId:"enlightning-976fd",storageBucket:"enlightning-976fd.appspot.com",messagingSenderId:"717223605384"}),Y.a.firestore().settings({timestampsInSnapshots:!0});var Z=Y.a,ee=Object(S.e)($,Object(S.d)(Object(S.a)(M.a.withExtraArgument({getFirebase:R.getFirebase,getFirestore:Q.getFirestore})),Object(Q.reduxFirestore)(Z),Object(R.reactReduxFirebase)(Z,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ee.firebaseAuthIsReady.then(function(){o.a.render(r.a.createElement(g.a,{store:ee},r.a.createElement(z,null)),document.getElementById("root")),B()})}},[[220,2,1]]]);
//# sourceMappingURL=main.4b0ac589.chunk.js.map