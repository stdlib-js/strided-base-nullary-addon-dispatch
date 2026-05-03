"use strict";var p=function(n,a){return function(){return a||n((a={exports:{}}).exports,a),a.exports}};var w=p(function(J,g){"use strict";var c=require("@stdlib/assert-is-function"),T=require("@stdlib/assert-is-typed-array-like"),v=require("@stdlib/strided-base-dtype-resolve-enum"),C=require("@stdlib/strided-base-reinterpret-complex64"),L=require("@stdlib/strided-base-reinterpret-complex128"),y=require("@stdlib/strided-base-reinterpret-boolean"),q=require("@stdlib/string-format"),V=v("complex64"),b=v("complex128"),B=v("bool");function P(n,a){if(!c(n))throw new TypeError(q("invalid argument. First argument must be a function. Value: `%s`.",n));if(!c(a))throw new TypeError(q("invalid argument. Second argument must be a function. Value: `%s`.",a));return l;function l(u,r,e,t){var i;if(!T(e))return a(u,r,e,t),e;if(r=v(r),r===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return r===V?i=C(e,0):r===b?i=L(e,0):r===B?i=y(e,0):i=e,n(u,r,i,t),e}}g.exports=P});var E=p(function(K,h){"use strict";var f=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-typed-array-like"),A=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,s=require("@stdlib/strided-base-dtype-resolve-enum"),F=require("@stdlib/strided-base-reinterpret-complex64"),M=require("@stdlib/strided-base-reinterpret-complex128"),I=require("@stdlib/strided-base-reinterpret-boolean"),S=require("@stdlib/strided-base-offset-view"),U=require("@stdlib/strided-base-min-view-buffer-index"),m=require("@stdlib/string-format"),N=s("complex64"),R=s("complex128"),j=s("bool");function z(n,a){if(!f(n))throw new TypeError(m("invalid argument. First argument must be a function. Value: `%s`.",n));if(!f(a))throw new TypeError(m("invalid argument. Second argument must be a function. Value: `%s`.",a));return l;function l(u,r,e,t,i){var o;if(!d(e))return a(u,r,e,t,i),e;if(r=s(r),r===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!A(i))throw new TypeError(m("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",i));return i=U(u,t,i),r===N?o=F(e,i):r===R?o=M(e,i):r===j?o=I(e,i):o=S(e,i),n(u,r,o,t),e}}h.exports=z});var D=require("@stdlib/utils-define-nonenumerable-read-only-property"),O=w(),G=E();D(O,"ndarray",G);module.exports=O;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
