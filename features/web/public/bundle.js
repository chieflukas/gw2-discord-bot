webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){E["default"].isLoggedIn()||t({pathname:"/get_login",state:{nextPathname:e.location.pathname}})}var i=n(1),a=r(i),u=n(20),s=n(67),l=n(268),c=r(l),f=n(271),h=r(f),p=n(272),d=r(p),y=n(269),v=r(y),m=n(267),_=r(m),b=n(270),g=r(b),w=n(73),E=r(w),k=n(159),O=r(k),j=localStorage.getItem("jwt");j&&O["default"].loginUser(j);var L=a["default"].createElement(s.Route,{path:"/",component:c["default"]},a["default"].createElement(s.Route,{onEnter:o},a["default"].createElement(s.IndexRoute,{component:h["default"]}),a["default"].createElement(s.Route,{path:"/api_key",component:_["default"]}),a["default"].createElement(s.Route,{path:"/characters",component:g["default"]})),a["default"].createElement(s.Route,{path:"/get_login",component:d["default"]}),a["default"].createElement(s.Route,{path:"/auth",component:v["default"]}),a["default"].createElement(s.Route,{path:"/logout",onEnter:function(e,t){O["default"].logoutUser(),t({pathname:"/get_login"})}}));(0,u.render)(a["default"].createElement(s.Router,{history:s.browserHistory},L),document.getElementById("app"))},73:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(273),l=r(s),c=n(194),f=r(c),h=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.subscribe(function(){return e._registerToActions.bind(e)}),e._user=null,e._jwt=null,e}return a(t,e),u(t,[{key:"_registerToActions",value:function(e){switch(e.actionType){case"LOGIN":this._jwt=e.jwt,this._user=(0,f["default"])(this._jwt),this.emitChange();break;case"LOGOUT":this._user=null,this.emitChange()}}},{key:"isLoggedIn",value:function(){return!!this._user}},{key:"sub",get:function(){if(this._user)return JSON.parse(this._user.sub)}},{key:"jwt",get:function(){return this._jwt}},{key:"username",get:function(){return this._user?this.sub.username:""}},{key:"discriminator",get:function(){return this._user?this.sub.discriminator:""}},{key:"id",get:function(){return this._user?this.sub.id:""}}]),t}(l["default"]);t["default"]=new h},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(254),u=r(a),s=n(73),l=r(s),c=n(159),f=r(c),h=null,p=function(){function e(){return o(this,e),h?h:(h=this,this.socket=(0,u["default"])(),h)}return i(e,[{key:"login",value:function(e){var t=this;return new Promise(function(n,r){t.socket.emit("Login",e,function(e){return e.error?r(e.error):(f["default"].loginUser(e.jwt),void n(e))})})}},{key:"send",value:function(e,t){var n=this;return new Promise(function(r,o){return l["default"].isLoggedIn?void n.socket.emit(e,{jwt:l["default"].jwt,data:t},function(e){return"Invalid token"===e.error?f["default"].logoutUser():e.error?o(e.error):void r(e.data)}):o("Not logged in")})}}]),e}();t["default"]=new p},159:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(160),i=r(o),a=n(67);t["default"]={loginUser:function(e){i["default"].dispatch({actionType:"LOGIN",jwt:e}),localStorage.setItem("jwt",e)},logoutUser:function(){localStorage.removeItem("jwt"),i["default"].dispatch({actionType:"LOGOUT"}),a.browserHistory.push("/get_login")}}},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(187);t["default"]=new r.Dispatcher},267:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(84),f=n(97),h=r(f),p=n(261),d=r(p),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:e.name,permissions:e.permissions},n}return a(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({name:e.name,permissions:e.permissions})}},{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement("p",null,l["default"].createElement("b",null,this.state.name)),this.state.permissions&&this.state.permissions.map(function(e){return l["default"].createElement("span",{key:e},e," ")}))}}]),t}(l["default"].Component),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n.saveKey=n.saveKey.bind(n),n.state={key:"",new_token:{}},n}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=Math.random().toString(36).toUpperCase().substr(2,5);this.setState({code:e})}},{key:"getValidationState",value:function(){var e=this.state.key;if(e)return e.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{20}-\w{4}-\w{4}-\w{4}-\w{12}$/)?this.state.error?"error":"success":"warning"}},{key:"handleChange",value:function(e){var t=this,n=e.target.value;this.setState({key:n,error:null,new_token:{}}),n.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{20}-\w{4}-\w{4}-\w{4}-\w{12}$/)&&d["default"].get("https://api.guildwars2.com/v2/tokeninfo?access_token="+n).accept("json").end(function(e,n){if(e&&!n)return t.setState({error:e.message}),void console.log(e);var r=JSON.parse(n.text),o={new_token:r};o.new_token=r,r.text&&(o.error=r.text),r.name&&!r.name.match(t.state.code)&&(o.error="code is not in key name"),t.setState(o)})}},{key:"saveKey",value:function(){var e=this;h["default"].send("set key",this.state.key).then(function(t){e.props.onChange()})["catch"](function(e){alert("Error saving key")})}},{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(c.Panel,{header:"New Key"},l["default"].createElement("p",null,"Please provide a key from ",l["default"].createElement("a",{href:"https://account.arena.net/applications",target:"_new"},"https://account.arena.net/applications")," - include the code ",l["default"].createElement("b",null,this.state.code)," in the key name field."),l["default"].createElement("form",null,l["default"].createElement(c.FormGroup,{controlId:"formApiKey",validationState:this.getValidationState()},l["default"].createElement(c.ControlLabel,null,"API Key"),l["default"].createElement(c.FormControl,{type:"text",value:this.state.key,placeholder:"API Key",onChange:this.handleChange}),l["default"].createElement(c.FormControl.Feedback,null),l["default"].createElement(c.HelpBlock,null,this.state.error))),l["default"].createElement(y,{name:this.state.new_token.name,permissions:this.state.new_token.permissions})),l["default"].createElement(c.Button,{bsStyle:"primary",disabled:"success"!==this.getValidationState(),onClick:this.saveKey},"Save Key"))}}]),t}(l["default"].Component),m=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.keyChanged=e.keyChanged.bind(e),e.state={addingKey:!1},e}return a(t,e),u(t,[{key:"componentWillMount",value:function(){this.keyChanged()}},{key:"keyChanged",value:function(){var e=this;h["default"].send("get token").then(function(t){e.setState(Object.assign(t,{addingKey:!1}))})}},{key:"render",value:function(){var e=this;return l["default"].createElement("div",null,l["default"].createElement(c.Panel,{header:"Current Key"},l["default"].createElement(y,{name:this.state.name,permissions:this.state.permissions})),this.state.addingKey?l["default"].createElement(v,{onChange:this.keyChanged}):l["default"].createElement(c.Button,{bsStyle:"primary",onClick:function(){e.setState({addingKey:!0})}},"Change Key"))}}]),t}(l["default"].Component);t["default"]=m},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(84),f=n(67),h=n(220),p=n(73),d=r(p),y=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getLoginState(),e}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.changeListener=this._onChange.bind(this),d["default"].addChangeListener(this.changeListener)}},{key:"componentWillUnmount",value:function(){d["default"].removeChangeListener(this.changeListener)}},{key:"_onChange",value:function(){this.setState(this._getLoginState())}},{key:"_getLoginState",value:function(){return{userLoggedIn:d["default"].isLoggedIn(),user:d["default"].username}}},{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(c.Navbar,null,l["default"].createElement(c.Navbar.Header,null,l["default"].createElement(c.Navbar.Brand,null,l["default"].createElement(f.Link,{to:"/"},"Discord Guild Wars 2 Bot"))),this.state.userLoggedIn&&l["default"].createElement(c.Nav,null,l["default"].createElement(h.LinkContainer,{to:"/characters"},l["default"].createElement(c.NavItem,{eventKey:1},"Characters"))),l["default"].createElement(c.Nav,{pullRight:!0},this.state.userLoggedIn&&l["default"].createElement(c.NavDropdown,{eventKey:1,title:this.state.user,id:"user_dropdown"},l["default"].createElement(h.LinkContainer,{to:"/api_key"},l["default"].createElement(c.NavItem,{eventKey:1},"API Key")),l["default"].createElement(h.LinkContainer,{to:"/logout"},l["default"].createElement(c.NavItem,{eventKey:2},"Logout"))))),l["default"].createElement("div",{className:"container"},this.props.children))}}]),t}(l["default"].Component);t["default"]=y},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(67),f=n(97),h=r(f),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;h["default"].login(window.location.href).then(function(){c.browserHistory.push("/")})["catch"](function(t){return e.setState({error:t})})}},{key:"render",value:function(){return l["default"].createElement("div",null,"Authorizing ...")}}]),t}(l["default"].Component);t["default"]=p},270:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(97),f=r(c),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this;f["default"].send("get characters").then(function(t){e.setState({characters:t})})}},{key:"render",value:function(){return l["default"].createElement("div",null,"Characters")}}]),t}(l["default"].Component);t["default"]=h},271:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(73),f=r(c),h=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getLoginState(),e}return a(t,e),u(t,[{key:"_getLoginState",value:function(){return{username:f["default"].username}}},{key:"render",value:function(){return l["default"].createElement("span",null,this.state.username)}}]),t}(l["default"].Component),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("p",null,"Hello ",l["default"].createElement(h,null))}}]),t}(l["default"].Component);t["default"]=p},272:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(84),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(c.Well,{bsSize:"large"},"The button below will send you to the discord site to enter your credentials.  You will then be redirected back to this site."),l["default"].createElement(c.Button,{bsStyle:"primary",bsSize:"large",block:!0,href:"/login"},"Login"))}}]),t}(l["default"].Component);t["default"]=f},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(354),l=n(160),c=r(l),f=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._listeners=0,e}return a(t,e),u(t,[{key:"subscribe",value:function(e){this._dispatchToken=c["default"].register(e())}},{key:"emitChange",value:function(){this.emit("CHANGE")}},{key:"addChangeListener",value:function(e){this._listeners++,this.on("CHANGE",e)}},{key:"removeChangeListener",value:function(e){this._listeners--,this.removeListener("CHANGE",e)}},{key:"dispatchToken",get:function(){return this._dispatchToken}}]),t}(s.EventEmitter);t["default"]=f},354:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function o(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,o,u,s,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(n=this._events[e],a(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),n.apply(this,u)}else if(i(n))for(u=Array.prototype.slice.call(arguments,1),l=n.slice(),o=l.length,s=0;s<o;s++)l[s].apply(this,u);return!0},n.prototype.addListener=function(e,t){var o;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(o=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,o&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),o||(o=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var o=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,o,a,u;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],a=n.length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(u=a;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){o=u;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}}});