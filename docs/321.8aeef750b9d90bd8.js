"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[321],{321:(dt,lt,p)=>{var c=p(467),J=p(345),Q=p(362),b=p(555),h=p(76),y=(p(52),p(749)),ae=p(742);const Y="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ce="https://fcmregistrations.googleapis.com/v1",X="FCM_MSG",de=3,le=1;var _=function(e){return e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",e}(_||{}),v=function(e){return e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e}(v||{});function l(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function pe(e){const n=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let r=0;r<i.length;++r)o[r]=i.charCodeAt(r);return o}const w="fcm_token_details_db",fe=5,Z="fcm_token_object_Store";function k(){return k=(0,c.A)(function*(e){if("databases"in indexedDB&&!(yield indexedDB.databases()).map(r=>r.name).includes(w))return null;let t=null;return(yield(0,y.P2)(w,fe,{upgrade:(i=(0,c.A)(function*(o,r,a,d){var g;if(r<2||!o.objectStoreNames.contains(Z))return;const se=d.objectStore(Z),m=yield se.index("fcmSenderId").get(e);if(yield se.clear(),m)if(2===r){const s=m;if(!s.auth||!s.p256dh||!s.endpoint)return;t={token:s.fcmToken,createTime:null!==(g=s.createTime)&&void 0!==g?g:Date.now(),subscriptionOptions:{auth:s.auth,p256dh:s.p256dh,endpoint:s.endpoint,swScope:s.swScope,vapidKey:"string"==typeof s.vapidKey?s.vapidKey:l(s.vapidKey)}}}else if(3===r){const s=m;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:l(s.auth),p256dh:l(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:l(s.vapidKey)}}}else if(4===r){const s=m;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:l(s.auth),p256dh:l(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:l(s.vapidKey)}}}}),function(r,a,d,g){return i.apply(this,arguments)})})).close(),yield(0,y.MR)(w),yield(0,y.MR)("fcm_vapid_details_db"),yield(0,y.MR)("undefined"),function he(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null;var i}),k.apply(this,arguments)}const ye="firebase-messaging-database",me=1,f="firebase-messaging-store";let S=null;function T(){return S||(S=(0,y.P2)(ye,me,{upgrade:(e,t)=>{0===t&&e.createObjectStore(f)}})),S}function A(e){return I.apply(this,arguments)}function I(){return I=(0,c.A)(function*(e){const t=D(e),i=yield(yield T()).transaction(f).objectStore(f).get(t);if(i)return i;{const o=yield function ge(e){return k.apply(this,arguments)}(e.appConfig.senderId);if(o)return yield E(e,o),o}}),I.apply(this,arguments)}function E(e,t){return x.apply(this,arguments)}function x(){return(x=(0,c.A)(function*(e,t){const n=D(e),o=(yield T()).transaction(f,"readwrite");return yield o.objectStore(f).put(t,n),yield o.done,t})).apply(this,arguments)}function M(){return(M=(0,c.A)(function*(e){const t=D(e),i=(yield T()).transaction(f,"readwrite");yield i.objectStore(f).delete(t),yield i.done})).apply(this,arguments)}function D({appConfig:e}){return e.appId}const u=new h.FA("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});function ve(e,t){return O.apply(this,arguments)}function O(){return(O=(0,c.A)(function*(e,t){const n=yield P(e),i=te(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{r=yield(yield fetch(K(e.appConfig),o)).json()}catch(a){throw u.create("token-subscribe-failed",{errorInfo:a?.toString()})}if(r.error)throw u.create("token-subscribe-failed",{errorInfo:r.error.message});if(!r.token)throw u.create("token-subscribe-no-token");return r.token})).apply(this,arguments)}function C(){return(C=(0,c.A)(function*(e,t){const n=yield P(e),i=te(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{r=yield(yield fetch(`${K(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw u.create("token-update-failed",{errorInfo:a?.toString()})}if(r.error)throw u.create("token-update-failed",{errorInfo:r.error.message});if(!r.token)throw u.create("token-update-no-token");return r.token})).apply(this,arguments)}function ee(e,t){return N.apply(this,arguments)}function N(){return(N=(0,c.A)(function*(e,t){const i={method:"DELETE",headers:yield P(e)};try{const r=yield(yield fetch(`${K(e.appConfig)}/${t}`,i)).json();if(r.error)throw u.create("token-unsubscribe-failed",{errorInfo:r.error.message})}catch(o){throw u.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}})).apply(this,arguments)}function K({projectId:e}){return`${ce}/projects/${e}/registrations`}function P(e){return L.apply(this,arguments)}function L(){return(L=(0,c.A)(function*({appConfig:e,installations:t}){const n=yield t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})})).apply(this,arguments)}function te({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==Y&&(o.web.applicationPubKey=i),o}const ke=6048e5;function R(){return R=(0,c.A)(function*(e){const t=yield function Ae(e,t){return W.apply(this,arguments)}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:l(t.getKey("auth")),p256dh:l(t.getKey("p256dh"))},i=yield A(e.firebaseDependencies);if(i){if(function Ie(e,t){return t.vapidKey===e.vapidKey&&t.endpoint===e.endpoint&&t.auth===e.auth&&t.p256dh===e.p256dh}(i.subscriptionOptions,n))return Date.now()>=i.createTime+ke?function Te(e,t){return j.apply(this,arguments)}(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{yield ee(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return ie(e.firebaseDependencies,n)}return ie(e.firebaseDependencies,n)}),R.apply(this,arguments)}function ne(e){return B.apply(this,arguments)}function B(){return B=(0,c.A)(function*(e){const t=yield A(e.firebaseDependencies);t&&(yield ee(e.firebaseDependencies,t.token),yield function be(e){return M.apply(this,arguments)}(e.firebaseDependencies));const n=yield e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}),B.apply(this,arguments)}function j(){return j=(0,c.A)(function*(e,t){try{const n=yield function we(e,t){return C.apply(this,arguments)}(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return yield E(e.firebaseDependencies,i),n}catch(n){throw n}}),j.apply(this,arguments)}function ie(e,t){return F.apply(this,arguments)}function F(){return(F=(0,c.A)(function*(e,t){const i={token:yield ve(e,t),createTime:Date.now(),subscriptionOptions:t};return yield E(e,i),i.token})).apply(this,arguments)}function W(){return(W=(0,c.A)(function*(e,t){return(yield e.pushManager.getSubscription())||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pe(t)})})).apply(this,arguments)}function U(){return(U=(0,c.A)(function*(e,t){const n=function Ke(e,t){var n,i;const o={};return e.from&&(o.project_number=e.from),e.fcmMessageId&&(o.message_id=e.fcmMessageId),o.instance_id=t,o.message_type=e.notification?_.DISPLAY_NOTIFICATION.toString():_.DATA_MESSAGE.toString(),o.sdk_platform=de.toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(o.collapse_key=e.collapse_key),o.event=le.toString(),!(null===(n=e.fcmOptions)||void 0===n)&&n.analytics_label&&(o.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label),o}(t,yield e.firebaseDependencies.installations.getId());!function Pe(e,t,n){const i={};i.event_time_ms=Math.floor(Date.now()).toString(),i.source_extension_json_proto3=JSON.stringify({messaging_client_event:t}),n&&(i.compliance_data=function Le(e){return{privacy_context:{prequest:{origin_associated_product_id:e}}}}(n)),e.logEvents.push(i)}(e,n,t.productId)})).apply(this,arguments)}function G(){return G=(0,c.A)(function*(e,t){var n,i;const{newSubscription:o}=e;if(!o)return void(yield ne(t));const r=yield A(t.firebaseDependencies);yield ne(t),t.vapidKey=null!==(i=null===(n=r?.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:Y,yield function Se(e){return R.apply(this,arguments)}(t)}),G.apply(this,arguments)}function H(){return H=(0,c.A)(function*(e,t){const n=function Ue({data:e}){if(!e)return null;try{return e.json()}catch{return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&(yield function Ne(e,t){return U.apply(this,arguments)}(t,n));const i=yield oe();if(function He(e){return e.some(t=>"visible"===t.visibilityState&&!t.url.startsWith("chrome-extension://"))}(i))return function $e(e,t){t.isFirebaseMessaging=!0,t.messageType=v.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(i,n);if(n.notification&&(yield function Ve(e){var t;const{actions:n}=e,{maxActions:i}=Notification;return n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function We(e){const t=Object.assign({},e.notification);return t.data={[X]:e},t}(n))),t&&t.onBackgroundMessageHandler){const o=function Ee(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function xe(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const r=t.notification.icon;r&&(e.notification.icon=r)}(t,e),function Me(e,t){t.data&&(e.data=t.data)}(t,e),function De(e,t){var n,i,o,r,a;if(!(t.fcmOptions||null!==(n=t.notification)&&void 0!==n&&n.click_action))return;e.fcmOptions={};const d=null!==(o=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==o?o:null===(r=t.notification)||void 0===r?void 0:r.click_action;d&&(e.fcmOptions.link=d);const g=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;g&&(e.fcmOptions.analyticsLabel=g)}(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?yield t.onBackgroundMessageHandler(o):t.onBackgroundMessageHandler.next(o)}}),H.apply(this,arguments)}function $(){return $=(0,c.A)(function*(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[X];if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=function qe(e){var t,n,i;return(null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action)||(function Oe(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}(e.data)?self.location.origin:null)}(i);if(!o)return;const r=new URL(o,self.location.href),a=new URL(self.location.origin);if(r.host!==a.host)return;let d=yield function Ge(e){return V.apply(this,arguments)}(r);return d?d=yield d.focus():(d=yield self.clients.openWindow(o),yield function Ce(e){return new Promise(t=>{setTimeout(t,e)})}(3e3)),d?(i.messageType=v.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,d.postMessage(i)):void 0}),$.apply(this,arguments)}function V(){return(V=(0,c.A)(function*(e){const t=yield oe();for(const n of t){const i=new URL(n.url,self.location.href);if(e.host===i.host)return n}return null})).apply(this,arguments)}function oe(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function q(e){return u.create("missing-app-config-values",{valueName:e})}!function Re(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));n.join("")}("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Je{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=function ze(e){if(!e||!e.options)throw q("App Configuration Object");if(!e.name)throw q("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw q(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}const Qe=e=>{const t=new Je(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(function je(e,t){return H.apply(this,arguments)}(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(function Be(e,t){return G.apply(this,arguments)}(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(function Fe(e){return $.apply(this,arguments)}(n))}),t};!function Ye(){(0,ae._registerComponent)(new Q.uA("messaging-sw",Qe,"PUBLIC"))}();class re{constructor(t,n){this.app=t,this._delegate=n,this.app=t,this._delegate=n}getToken(t){var n=this;return(0,c.A)(function*(){return(0,b.gf)(n._delegate,t)})()}deleteToken(){var t=this;return(0,c.A)(function*(){return(0,b.ni)(t._delegate)})()}onMessage(t){return(0,b.xD)(this._delegate,t)}onBackgroundMessage(t){return function tt(e,t){return function Ze(e,t){if(void 0!==self.document)throw u.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=(0,h.Ku)(e),t)}(this._delegate,t)}}const at=e=>self&&"ServiceWorkerGlobalScope"in self?new re(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new re(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),ct={isSupported:function ot(){return self&&"ServiceWorkerGlobalScope"in self?function st(){return(0,h.zW)()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}():function rt(){return typeof window<"u"&&(0,h.zW)()&&(0,h.dM)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}()}};(function ut(){J.A.INTERNAL.registerComponent(new Q.uA("messaging-compat",at,"PUBLIC").setServiceProps(ct))})(),J.A.registerVersion("@firebase/messaging-compat","0.2.12")}}]);