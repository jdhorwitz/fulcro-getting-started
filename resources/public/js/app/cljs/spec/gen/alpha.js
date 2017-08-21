// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29321__auto__,writer__29322__auto__,opt__29323__auto__){
return cljs.core._write.call(null,writer__29322__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31530 = arguments.length;
var i__29898__auto___31531 = (0);
while(true){
if((i__29898__auto___31531 < len__29897__auto___31530)){
args__29904__auto__.push((arguments[i__29898__auto___31531]));

var G__31532 = (i__29898__auto___31531 + (1));
i__29898__auto___31531 = G__31532;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq31529){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31529));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31534 = arguments.length;
var i__29898__auto___31535 = (0);
while(true){
if((i__29898__auto___31535 < len__29897__auto___31534)){
args__29904__auto__.push((arguments[i__29898__auto___31535]));

var G__31536 = (i__29898__auto___31535 + (1));
i__29898__auto___31535 = G__31536;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq31533){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31533));
});

var g_QMARK__31537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_31538 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__31537){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__31537))
,null));
var mkg_31539 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__31537,g_31538){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__31537,g_31538))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__31537,g_31538,mkg_31539){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31537).call(null,x);
});})(g_QMARK__31537,g_31538,mkg_31539))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__31537,g_31538,mkg_31539){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_31539).call(null,gfn);
});})(g_QMARK__31537,g_31538,mkg_31539))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__31537,g_31538,mkg_31539){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_31538).call(null,generator);
});})(g_QMARK__31537,g_31538,mkg_31539))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30003__auto___31559 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30003__auto___31559){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31560 = arguments.length;
var i__29898__auto___31561 = (0);
while(true){
if((i__29898__auto___31561 < len__29897__auto___31560)){
args__29904__auto__.push((arguments[i__29898__auto___31561]));

var G__31562 = (i__29898__auto___31561 + (1));
i__29898__auto___31561 = G__31562;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31559))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31559){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31559),args);
});})(g__30003__auto___31559))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30003__auto___31559){
return (function (seq31540){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31540));
});})(g__30003__auto___31559))
;


var g__30003__auto___31563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30003__auto___31563){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31564 = arguments.length;
var i__29898__auto___31565 = (0);
while(true){
if((i__29898__auto___31565 < len__29897__auto___31564)){
args__29904__auto__.push((arguments[i__29898__auto___31565]));

var G__31566 = (i__29898__auto___31565 + (1));
i__29898__auto___31565 = G__31566;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31563))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31563),args);
});})(g__30003__auto___31563))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30003__auto___31563){
return (function (seq31541){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31541));
});})(g__30003__auto___31563))
;


var g__30003__auto___31567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30003__auto___31567){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31568 = arguments.length;
var i__29898__auto___31569 = (0);
while(true){
if((i__29898__auto___31569 < len__29897__auto___31568)){
args__29904__auto__.push((arguments[i__29898__auto___31569]));

var G__31570 = (i__29898__auto___31569 + (1));
i__29898__auto___31569 = G__31570;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31567))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31567),args);
});})(g__30003__auto___31567))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30003__auto___31567){
return (function (seq31542){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31542));
});})(g__30003__auto___31567))
;


var g__30003__auto___31571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30003__auto___31571){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31572 = arguments.length;
var i__29898__auto___31573 = (0);
while(true){
if((i__29898__auto___31573 < len__29897__auto___31572)){
args__29904__auto__.push((arguments[i__29898__auto___31573]));

var G__31574 = (i__29898__auto___31573 + (1));
i__29898__auto___31573 = G__31574;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31571))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31571),args);
});})(g__30003__auto___31571))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30003__auto___31571){
return (function (seq31543){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31543));
});})(g__30003__auto___31571))
;


var g__30003__auto___31575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30003__auto___31575){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31576 = arguments.length;
var i__29898__auto___31577 = (0);
while(true){
if((i__29898__auto___31577 < len__29897__auto___31576)){
args__29904__auto__.push((arguments[i__29898__auto___31577]));

var G__31578 = (i__29898__auto___31577 + (1));
i__29898__auto___31577 = G__31578;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31575))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31575),args);
});})(g__30003__auto___31575))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30003__auto___31575){
return (function (seq31544){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31544));
});})(g__30003__auto___31575))
;


var g__30003__auto___31579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30003__auto___31579){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31580 = arguments.length;
var i__29898__auto___31581 = (0);
while(true){
if((i__29898__auto___31581 < len__29897__auto___31580)){
args__29904__auto__.push((arguments[i__29898__auto___31581]));

var G__31582 = (i__29898__auto___31581 + (1));
i__29898__auto___31581 = G__31582;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31579))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31579),args);
});})(g__30003__auto___31579))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30003__auto___31579){
return (function (seq31545){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31545));
});})(g__30003__auto___31579))
;


var g__30003__auto___31583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30003__auto___31583){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31584 = arguments.length;
var i__29898__auto___31585 = (0);
while(true){
if((i__29898__auto___31585 < len__29897__auto___31584)){
args__29904__auto__.push((arguments[i__29898__auto___31585]));

var G__31586 = (i__29898__auto___31585 + (1));
i__29898__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31583))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31583),args);
});})(g__30003__auto___31583))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30003__auto___31583){
return (function (seq31546){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31546));
});})(g__30003__auto___31583))
;


var g__30003__auto___31587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30003__auto___31587){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31588 = arguments.length;
var i__29898__auto___31589 = (0);
while(true){
if((i__29898__auto___31589 < len__29897__auto___31588)){
args__29904__auto__.push((arguments[i__29898__auto___31589]));

var G__31590 = (i__29898__auto___31589 + (1));
i__29898__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31587))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31587),args);
});})(g__30003__auto___31587))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30003__auto___31587){
return (function (seq31547){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31547));
});})(g__30003__auto___31587))
;


var g__30003__auto___31591 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30003__auto___31591){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31592 = arguments.length;
var i__29898__auto___31593 = (0);
while(true){
if((i__29898__auto___31593 < len__29897__auto___31592)){
args__29904__auto__.push((arguments[i__29898__auto___31593]));

var G__31594 = (i__29898__auto___31593 + (1));
i__29898__auto___31593 = G__31594;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31591))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31591),args);
});})(g__30003__auto___31591))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30003__auto___31591){
return (function (seq31548){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31548));
});})(g__30003__auto___31591))
;


var g__30003__auto___31595 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30003__auto___31595){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31596 = arguments.length;
var i__29898__auto___31597 = (0);
while(true){
if((i__29898__auto___31597 < len__29897__auto___31596)){
args__29904__auto__.push((arguments[i__29898__auto___31597]));

var G__31598 = (i__29898__auto___31597 + (1));
i__29898__auto___31597 = G__31598;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31595))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31595),args);
});})(g__30003__auto___31595))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30003__auto___31595){
return (function (seq31549){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31549));
});})(g__30003__auto___31595))
;


var g__30003__auto___31599 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30003__auto___31599){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31600 = arguments.length;
var i__29898__auto___31601 = (0);
while(true){
if((i__29898__auto___31601 < len__29897__auto___31600)){
args__29904__auto__.push((arguments[i__29898__auto___31601]));

var G__31602 = (i__29898__auto___31601 + (1));
i__29898__auto___31601 = G__31602;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31599))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31599),args);
});})(g__30003__auto___31599))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30003__auto___31599){
return (function (seq31550){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31550));
});})(g__30003__auto___31599))
;


var g__30003__auto___31603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30003__auto___31603){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31604 = arguments.length;
var i__29898__auto___31605 = (0);
while(true){
if((i__29898__auto___31605 < len__29897__auto___31604)){
args__29904__auto__.push((arguments[i__29898__auto___31605]));

var G__31606 = (i__29898__auto___31605 + (1));
i__29898__auto___31605 = G__31606;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31603))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31603),args);
});})(g__30003__auto___31603))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30003__auto___31603){
return (function (seq31551){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31551));
});})(g__30003__auto___31603))
;


var g__30003__auto___31607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30003__auto___31607){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31608 = arguments.length;
var i__29898__auto___31609 = (0);
while(true){
if((i__29898__auto___31609 < len__29897__auto___31608)){
args__29904__auto__.push((arguments[i__29898__auto___31609]));

var G__31610 = (i__29898__auto___31609 + (1));
i__29898__auto___31609 = G__31610;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31607))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31607){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31607),args);
});})(g__30003__auto___31607))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30003__auto___31607){
return (function (seq31552){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31552));
});})(g__30003__auto___31607))
;


var g__30003__auto___31611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30003__auto___31611){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31612 = arguments.length;
var i__29898__auto___31613 = (0);
while(true){
if((i__29898__auto___31613 < len__29897__auto___31612)){
args__29904__auto__.push((arguments[i__29898__auto___31613]));

var G__31614 = (i__29898__auto___31613 + (1));
i__29898__auto___31613 = G__31614;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31611))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31611),args);
});})(g__30003__auto___31611))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30003__auto___31611){
return (function (seq31553){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31553));
});})(g__30003__auto___31611))
;


var g__30003__auto___31615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30003__auto___31615){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31616 = arguments.length;
var i__29898__auto___31617 = (0);
while(true){
if((i__29898__auto___31617 < len__29897__auto___31616)){
args__29904__auto__.push((arguments[i__29898__auto___31617]));

var G__31618 = (i__29898__auto___31617 + (1));
i__29898__auto___31617 = G__31618;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31615))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31615),args);
});})(g__30003__auto___31615))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30003__auto___31615){
return (function (seq31554){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31554));
});})(g__30003__auto___31615))
;


var g__30003__auto___31619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30003__auto___31619){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31620 = arguments.length;
var i__29898__auto___31621 = (0);
while(true){
if((i__29898__auto___31621 < len__29897__auto___31620)){
args__29904__auto__.push((arguments[i__29898__auto___31621]));

var G__31622 = (i__29898__auto___31621 + (1));
i__29898__auto___31621 = G__31622;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31619))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31619),args);
});})(g__30003__auto___31619))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30003__auto___31619){
return (function (seq31555){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31555));
});})(g__30003__auto___31619))
;


var g__30003__auto___31623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30003__auto___31623){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31624 = arguments.length;
var i__29898__auto___31625 = (0);
while(true){
if((i__29898__auto___31625 < len__29897__auto___31624)){
args__29904__auto__.push((arguments[i__29898__auto___31625]));

var G__31626 = (i__29898__auto___31625 + (1));
i__29898__auto___31625 = G__31626;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31623))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31623),args);
});})(g__30003__auto___31623))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30003__auto___31623){
return (function (seq31556){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31556));
});})(g__30003__auto___31623))
;


var g__30003__auto___31627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30003__auto___31627){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31628 = arguments.length;
var i__29898__auto___31629 = (0);
while(true){
if((i__29898__auto___31629 < len__29897__auto___31628)){
args__29904__auto__.push((arguments[i__29898__auto___31629]));

var G__31630 = (i__29898__auto___31629 + (1));
i__29898__auto___31629 = G__31630;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31627))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31627),args);
});})(g__30003__auto___31627))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30003__auto___31627){
return (function (seq31557){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31557));
});})(g__30003__auto___31627))
;


var g__30003__auto___31631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30003__auto___31631){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31632 = arguments.length;
var i__29898__auto___31633 = (0);
while(true){
if((i__29898__auto___31633 < len__29897__auto___31632)){
args__29904__auto__.push((arguments[i__29898__auto___31633]));

var G__31634 = (i__29898__auto___31633 + (1));
i__29898__auto___31633 = G__31634;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30003__auto___31631))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30003__auto___31631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30003__auto___31631),args);
});})(g__30003__auto___31631))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30003__auto___31631){
return (function (seq31558){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31558));
});})(g__30003__auto___31631))
;

var g__30016__auto___31656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30016__auto___31656){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31657 = arguments.length;
var i__29898__auto___31658 = (0);
while(true){
if((i__29898__auto___31658 < len__29897__auto___31657)){
args__29904__auto__.push((arguments[i__29898__auto___31658]));

var G__31659 = (i__29898__auto___31658 + (1));
i__29898__auto___31658 = G__31659;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31656))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31656){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31656);
});})(g__30016__auto___31656))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30016__auto___31656){
return (function (seq31635){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31635));
});})(g__30016__auto___31656))
;


var g__30016__auto___31660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30016__auto___31660){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31661 = arguments.length;
var i__29898__auto___31662 = (0);
while(true){
if((i__29898__auto___31662 < len__29897__auto___31661)){
args__29904__auto__.push((arguments[i__29898__auto___31662]));

var G__31663 = (i__29898__auto___31662 + (1));
i__29898__auto___31662 = G__31663;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31660))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31660){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31660);
});})(g__30016__auto___31660))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30016__auto___31660){
return (function (seq31636){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31636));
});})(g__30016__auto___31660))
;


var g__30016__auto___31664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30016__auto___31664){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31665 = arguments.length;
var i__29898__auto___31666 = (0);
while(true){
if((i__29898__auto___31666 < len__29897__auto___31665)){
args__29904__auto__.push((arguments[i__29898__auto___31666]));

var G__31667 = (i__29898__auto___31666 + (1));
i__29898__auto___31666 = G__31667;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31664))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31664){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31664);
});})(g__30016__auto___31664))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30016__auto___31664){
return (function (seq31637){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31637));
});})(g__30016__auto___31664))
;


var g__30016__auto___31668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30016__auto___31668){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31669 = arguments.length;
var i__29898__auto___31670 = (0);
while(true){
if((i__29898__auto___31670 < len__29897__auto___31669)){
args__29904__auto__.push((arguments[i__29898__auto___31670]));

var G__31671 = (i__29898__auto___31670 + (1));
i__29898__auto___31670 = G__31671;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31668))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31668){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31668);
});})(g__30016__auto___31668))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30016__auto___31668){
return (function (seq31638){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31638));
});})(g__30016__auto___31668))
;


var g__30016__auto___31672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30016__auto___31672){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31673 = arguments.length;
var i__29898__auto___31674 = (0);
while(true){
if((i__29898__auto___31674 < len__29897__auto___31673)){
args__29904__auto__.push((arguments[i__29898__auto___31674]));

var G__31675 = (i__29898__auto___31674 + (1));
i__29898__auto___31674 = G__31675;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31672))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31672){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31672);
});})(g__30016__auto___31672))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30016__auto___31672){
return (function (seq31639){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31639));
});})(g__30016__auto___31672))
;


var g__30016__auto___31676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30016__auto___31676){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31677 = arguments.length;
var i__29898__auto___31678 = (0);
while(true){
if((i__29898__auto___31678 < len__29897__auto___31677)){
args__29904__auto__.push((arguments[i__29898__auto___31678]));

var G__31679 = (i__29898__auto___31678 + (1));
i__29898__auto___31678 = G__31679;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31676))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31676){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31676);
});})(g__30016__auto___31676))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30016__auto___31676){
return (function (seq31640){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31640));
});})(g__30016__auto___31676))
;


var g__30016__auto___31680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30016__auto___31680){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31681 = arguments.length;
var i__29898__auto___31682 = (0);
while(true){
if((i__29898__auto___31682 < len__29897__auto___31681)){
args__29904__auto__.push((arguments[i__29898__auto___31682]));

var G__31683 = (i__29898__auto___31682 + (1));
i__29898__auto___31682 = G__31683;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31680))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31680){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31680);
});})(g__30016__auto___31680))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30016__auto___31680){
return (function (seq31641){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31641));
});})(g__30016__auto___31680))
;


var g__30016__auto___31684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30016__auto___31684){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31685 = arguments.length;
var i__29898__auto___31686 = (0);
while(true){
if((i__29898__auto___31686 < len__29897__auto___31685)){
args__29904__auto__.push((arguments[i__29898__auto___31686]));

var G__31687 = (i__29898__auto___31686 + (1));
i__29898__auto___31686 = G__31687;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31684))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31684){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31684);
});})(g__30016__auto___31684))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30016__auto___31684){
return (function (seq31642){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31642));
});})(g__30016__auto___31684))
;


var g__30016__auto___31688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30016__auto___31688){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31689 = arguments.length;
var i__29898__auto___31690 = (0);
while(true){
if((i__29898__auto___31690 < len__29897__auto___31689)){
args__29904__auto__.push((arguments[i__29898__auto___31690]));

var G__31691 = (i__29898__auto___31690 + (1));
i__29898__auto___31690 = G__31691;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31688))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31688){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31688);
});})(g__30016__auto___31688))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30016__auto___31688){
return (function (seq31643){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31643));
});})(g__30016__auto___31688))
;


var g__30016__auto___31692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30016__auto___31692){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31693 = arguments.length;
var i__29898__auto___31694 = (0);
while(true){
if((i__29898__auto___31694 < len__29897__auto___31693)){
args__29904__auto__.push((arguments[i__29898__auto___31694]));

var G__31695 = (i__29898__auto___31694 + (1));
i__29898__auto___31694 = G__31695;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31692))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31692){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31692);
});})(g__30016__auto___31692))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30016__auto___31692){
return (function (seq31644){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31644));
});})(g__30016__auto___31692))
;


var g__30016__auto___31696 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30016__auto___31696){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31697 = arguments.length;
var i__29898__auto___31698 = (0);
while(true){
if((i__29898__auto___31698 < len__29897__auto___31697)){
args__29904__auto__.push((arguments[i__29898__auto___31698]));

var G__31699 = (i__29898__auto___31698 + (1));
i__29898__auto___31698 = G__31699;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31696))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31696){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31696);
});})(g__30016__auto___31696))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30016__auto___31696){
return (function (seq31645){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31645));
});})(g__30016__auto___31696))
;


var g__30016__auto___31700 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30016__auto___31700){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31701 = arguments.length;
var i__29898__auto___31702 = (0);
while(true){
if((i__29898__auto___31702 < len__29897__auto___31701)){
args__29904__auto__.push((arguments[i__29898__auto___31702]));

var G__31703 = (i__29898__auto___31702 + (1));
i__29898__auto___31702 = G__31703;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31700))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31700){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31700);
});})(g__30016__auto___31700))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30016__auto___31700){
return (function (seq31646){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31646));
});})(g__30016__auto___31700))
;


var g__30016__auto___31704 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30016__auto___31704){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31705 = arguments.length;
var i__29898__auto___31706 = (0);
while(true){
if((i__29898__auto___31706 < len__29897__auto___31705)){
args__29904__auto__.push((arguments[i__29898__auto___31706]));

var G__31707 = (i__29898__auto___31706 + (1));
i__29898__auto___31706 = G__31707;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31704))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31704){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31704);
});})(g__30016__auto___31704))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30016__auto___31704){
return (function (seq31647){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31647));
});})(g__30016__auto___31704))
;


var g__30016__auto___31708 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30016__auto___31708){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31709 = arguments.length;
var i__29898__auto___31710 = (0);
while(true){
if((i__29898__auto___31710 < len__29897__auto___31709)){
args__29904__auto__.push((arguments[i__29898__auto___31710]));

var G__31711 = (i__29898__auto___31710 + (1));
i__29898__auto___31710 = G__31711;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31708))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31708){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31708);
});})(g__30016__auto___31708))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30016__auto___31708){
return (function (seq31648){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31648));
});})(g__30016__auto___31708))
;


var g__30016__auto___31712 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30016__auto___31712){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31713 = arguments.length;
var i__29898__auto___31714 = (0);
while(true){
if((i__29898__auto___31714 < len__29897__auto___31713)){
args__29904__auto__.push((arguments[i__29898__auto___31714]));

var G__31715 = (i__29898__auto___31714 + (1));
i__29898__auto___31714 = G__31715;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31712))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31712){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31712);
});})(g__30016__auto___31712))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30016__auto___31712){
return (function (seq31649){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31649));
});})(g__30016__auto___31712))
;


var g__30016__auto___31716 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30016__auto___31716){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31717 = arguments.length;
var i__29898__auto___31718 = (0);
while(true){
if((i__29898__auto___31718 < len__29897__auto___31717)){
args__29904__auto__.push((arguments[i__29898__auto___31718]));

var G__31719 = (i__29898__auto___31718 + (1));
i__29898__auto___31718 = G__31719;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31716))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31716){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31716);
});})(g__30016__auto___31716))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30016__auto___31716){
return (function (seq31650){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31650));
});})(g__30016__auto___31716))
;


var g__30016__auto___31720 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30016__auto___31720){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31721 = arguments.length;
var i__29898__auto___31722 = (0);
while(true){
if((i__29898__auto___31722 < len__29897__auto___31721)){
args__29904__auto__.push((arguments[i__29898__auto___31722]));

var G__31723 = (i__29898__auto___31722 + (1));
i__29898__auto___31722 = G__31723;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31720))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31720){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31720);
});})(g__30016__auto___31720))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30016__auto___31720){
return (function (seq31651){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31651));
});})(g__30016__auto___31720))
;


var g__30016__auto___31724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30016__auto___31724){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31725 = arguments.length;
var i__29898__auto___31726 = (0);
while(true){
if((i__29898__auto___31726 < len__29897__auto___31725)){
args__29904__auto__.push((arguments[i__29898__auto___31726]));

var G__31727 = (i__29898__auto___31726 + (1));
i__29898__auto___31726 = G__31727;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31724))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31724){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31724);
});})(g__30016__auto___31724))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30016__auto___31724){
return (function (seq31652){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31652));
});})(g__30016__auto___31724))
;


var g__30016__auto___31728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30016__auto___31728){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31729 = arguments.length;
var i__29898__auto___31730 = (0);
while(true){
if((i__29898__auto___31730 < len__29897__auto___31729)){
args__29904__auto__.push((arguments[i__29898__auto___31730]));

var G__31731 = (i__29898__auto___31730 + (1));
i__29898__auto___31730 = G__31731;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31728))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31728){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31728);
});})(g__30016__auto___31728))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30016__auto___31728){
return (function (seq31653){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31653));
});})(g__30016__auto___31728))
;


var g__30016__auto___31732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30016__auto___31732){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31733 = arguments.length;
var i__29898__auto___31734 = (0);
while(true){
if((i__29898__auto___31734 < len__29897__auto___31733)){
args__29904__auto__.push((arguments[i__29898__auto___31734]));

var G__31735 = (i__29898__auto___31734 + (1));
i__29898__auto___31734 = G__31735;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31732))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31732){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31732);
});})(g__30016__auto___31732))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30016__auto___31732){
return (function (seq31654){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31654));
});})(g__30016__auto___31732))
;


var g__30016__auto___31736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30016__auto___31736){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31737 = arguments.length;
var i__29898__auto___31738 = (0);
while(true){
if((i__29898__auto___31738 < len__29897__auto___31737)){
args__29904__auto__.push((arguments[i__29898__auto___31738]));

var G__31739 = (i__29898__auto___31738 + (1));
i__29898__auto___31738 = G__31739;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});})(g__30016__auto___31736))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30016__auto___31736){
return (function (args){
return cljs.core.deref.call(null,g__30016__auto___31736);
});})(g__30016__auto___31736))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30016__auto___31736){
return (function (seq31655){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31655));
});})(g__30016__auto___31736))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29904__auto__ = [];
var len__29897__auto___31742 = arguments.length;
var i__29898__auto___31743 = (0);
while(true){
if((i__29898__auto___31743 < len__29897__auto___31742)){
args__29904__auto__.push((arguments[i__29898__auto___31743]));

var G__31744 = (i__29898__auto___31743 + (1));
i__29898__auto___31743 = G__31744;
continue;
} else {
}
break;
}

var argseq__29905__auto__ = ((((0) < args__29904__auto__.length))?(new cljs.core.IndexedSeq(args__29904__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29905__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__31740_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31740_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq31741){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31741));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__31745_SHARP_){
return (new Date(p1__31745_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1503276799204