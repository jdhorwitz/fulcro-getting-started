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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__49600__auto__,writer__49601__auto__,opt__49602__auto__){
return cljs.core._write.call(null,writer__49601__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__50183__auto__ = [];
var len__50176__auto___52605 = arguments.length;
var i__50177__auto___52606 = (0);
while(true){
if((i__50177__auto___52606 < len__50176__auto___52605)){
args__50183__auto__.push((arguments[i__50177__auto___52606]));

var G__52607 = (i__50177__auto___52606 + (1));
i__50177__auto___52606 = G__52607;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq52604){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52604));
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
var args__50183__auto__ = [];
var len__50176__auto___52609 = arguments.length;
var i__50177__auto___52610 = (0);
while(true){
if((i__50177__auto___52610 < len__50176__auto___52609)){
args__50183__auto__.push((arguments[i__50177__auto___52610]));

var G__52611 = (i__50177__auto___52610 + (1));
i__50177__auto___52610 = G__52611;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq52608){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52608));
});

var g_QMARK__52612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_52613 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__52612){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__52612))
,null));
var mkg_52614 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__52612,g_52613){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__52612,g_52613))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__52612,g_52613,mkg_52614){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__52612).call(null,x);
});})(g_QMARK__52612,g_52613,mkg_52614))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__52612,g_52613,mkg_52614){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_52614).call(null,gfn);
});})(g_QMARK__52612,g_52613,mkg_52614))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__52612,g_52613,mkg_52614){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_52613).call(null,generator);
});})(g_QMARK__52612,g_52613,mkg_52614))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__51165__auto___52634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__51165__auto___52634){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52635 = arguments.length;
var i__50177__auto___52636 = (0);
while(true){
if((i__50177__auto___52636 < len__50176__auto___52635)){
args__50183__auto__.push((arguments[i__50177__auto___52636]));

var G__52637 = (i__50177__auto___52636 + (1));
i__50177__auto___52636 = G__52637;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52634))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52634),args);
});})(g__51165__auto___52634))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__51165__auto___52634){
return (function (seq52615){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52615));
});})(g__51165__auto___52634))
;


var g__51165__auto___52638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__51165__auto___52638){
return (function cljs$spec$gen$alpha$list(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52639 = arguments.length;
var i__50177__auto___52640 = (0);
while(true){
if((i__50177__auto___52640 < len__50176__auto___52639)){
args__50183__auto__.push((arguments[i__50177__auto___52640]));

var G__52641 = (i__50177__auto___52640 + (1));
i__50177__auto___52640 = G__52641;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52638))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52638),args);
});})(g__51165__auto___52638))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__51165__auto___52638){
return (function (seq52616){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52616));
});})(g__51165__auto___52638))
;


var g__51165__auto___52642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__51165__auto___52642){
return (function cljs$spec$gen$alpha$map(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52643 = arguments.length;
var i__50177__auto___52644 = (0);
while(true){
if((i__50177__auto___52644 < len__50176__auto___52643)){
args__50183__auto__.push((arguments[i__50177__auto___52644]));

var G__52645 = (i__50177__auto___52644 + (1));
i__50177__auto___52644 = G__52645;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52642))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52642),args);
});})(g__51165__auto___52642))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__51165__auto___52642){
return (function (seq52617){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52617));
});})(g__51165__auto___52642))
;


var g__51165__auto___52646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__51165__auto___52646){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52647 = arguments.length;
var i__50177__auto___52648 = (0);
while(true){
if((i__50177__auto___52648 < len__50176__auto___52647)){
args__50183__auto__.push((arguments[i__50177__auto___52648]));

var G__52649 = (i__50177__auto___52648 + (1));
i__50177__auto___52648 = G__52649;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52646))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52646),args);
});})(g__51165__auto___52646))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__51165__auto___52646){
return (function (seq52618){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52618));
});})(g__51165__auto___52646))
;


var g__51165__auto___52650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__51165__auto___52650){
return (function cljs$spec$gen$alpha$set(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52651 = arguments.length;
var i__50177__auto___52652 = (0);
while(true){
if((i__50177__auto___52652 < len__50176__auto___52651)){
args__50183__auto__.push((arguments[i__50177__auto___52652]));

var G__52653 = (i__50177__auto___52652 + (1));
i__50177__auto___52652 = G__52653;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52650))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52650),args);
});})(g__51165__auto___52650))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__51165__auto___52650){
return (function (seq52619){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52619));
});})(g__51165__auto___52650))
;


var g__51165__auto___52654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__51165__auto___52654){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52655 = arguments.length;
var i__50177__auto___52656 = (0);
while(true){
if((i__50177__auto___52656 < len__50176__auto___52655)){
args__50183__auto__.push((arguments[i__50177__auto___52656]));

var G__52657 = (i__50177__auto___52656 + (1));
i__50177__auto___52656 = G__52657;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52654))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52654),args);
});})(g__51165__auto___52654))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__51165__auto___52654){
return (function (seq52620){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52620));
});})(g__51165__auto___52654))
;


var g__51165__auto___52658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__51165__auto___52658){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52659 = arguments.length;
var i__50177__auto___52660 = (0);
while(true){
if((i__50177__auto___52660 < len__50176__auto___52659)){
args__50183__auto__.push((arguments[i__50177__auto___52660]));

var G__52661 = (i__50177__auto___52660 + (1));
i__50177__auto___52660 = G__52661;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52658))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52658),args);
});})(g__51165__auto___52658))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__51165__auto___52658){
return (function (seq52621){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52621));
});})(g__51165__auto___52658))
;


var g__51165__auto___52662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__51165__auto___52662){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52663 = arguments.length;
var i__50177__auto___52664 = (0);
while(true){
if((i__50177__auto___52664 < len__50176__auto___52663)){
args__50183__auto__.push((arguments[i__50177__auto___52664]));

var G__52665 = (i__50177__auto___52664 + (1));
i__50177__auto___52664 = G__52665;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52662))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52662),args);
});})(g__51165__auto___52662))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__51165__auto___52662){
return (function (seq52622){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52622));
});})(g__51165__auto___52662))
;


var g__51165__auto___52666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__51165__auto___52666){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52667 = arguments.length;
var i__50177__auto___52668 = (0);
while(true){
if((i__50177__auto___52668 < len__50176__auto___52667)){
args__50183__auto__.push((arguments[i__50177__auto___52668]));

var G__52669 = (i__50177__auto___52668 + (1));
i__50177__auto___52668 = G__52669;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52666))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52666),args);
});})(g__51165__auto___52666))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__51165__auto___52666){
return (function (seq52623){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52623));
});})(g__51165__auto___52666))
;


var g__51165__auto___52670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__51165__auto___52670){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52671 = arguments.length;
var i__50177__auto___52672 = (0);
while(true){
if((i__50177__auto___52672 < len__50176__auto___52671)){
args__50183__auto__.push((arguments[i__50177__auto___52672]));

var G__52673 = (i__50177__auto___52672 + (1));
i__50177__auto___52672 = G__52673;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52670))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52670),args);
});})(g__51165__auto___52670))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__51165__auto___52670){
return (function (seq52624){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52624));
});})(g__51165__auto___52670))
;


var g__51165__auto___52674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__51165__auto___52674){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52675 = arguments.length;
var i__50177__auto___52676 = (0);
while(true){
if((i__50177__auto___52676 < len__50176__auto___52675)){
args__50183__auto__.push((arguments[i__50177__auto___52676]));

var G__52677 = (i__50177__auto___52676 + (1));
i__50177__auto___52676 = G__52677;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52674))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52674),args);
});})(g__51165__auto___52674))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__51165__auto___52674){
return (function (seq52625){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52625));
});})(g__51165__auto___52674))
;


var g__51165__auto___52678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__51165__auto___52678){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52679 = arguments.length;
var i__50177__auto___52680 = (0);
while(true){
if((i__50177__auto___52680 < len__50176__auto___52679)){
args__50183__auto__.push((arguments[i__50177__auto___52680]));

var G__52681 = (i__50177__auto___52680 + (1));
i__50177__auto___52680 = G__52681;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52678))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52678),args);
});})(g__51165__auto___52678))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__51165__auto___52678){
return (function (seq52626){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52626));
});})(g__51165__auto___52678))
;


var g__51165__auto___52682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__51165__auto___52682){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52683 = arguments.length;
var i__50177__auto___52684 = (0);
while(true){
if((i__50177__auto___52684 < len__50176__auto___52683)){
args__50183__auto__.push((arguments[i__50177__auto___52684]));

var G__52685 = (i__50177__auto___52684 + (1));
i__50177__auto___52684 = G__52685;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52682))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52682),args);
});})(g__51165__auto___52682))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__51165__auto___52682){
return (function (seq52627){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52627));
});})(g__51165__auto___52682))
;


var g__51165__auto___52686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__51165__auto___52686){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52687 = arguments.length;
var i__50177__auto___52688 = (0);
while(true){
if((i__50177__auto___52688 < len__50176__auto___52687)){
args__50183__auto__.push((arguments[i__50177__auto___52688]));

var G__52689 = (i__50177__auto___52688 + (1));
i__50177__auto___52688 = G__52689;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52686))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52686),args);
});})(g__51165__auto___52686))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__51165__auto___52686){
return (function (seq52628){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52628));
});})(g__51165__auto___52686))
;


var g__51165__auto___52690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__51165__auto___52690){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52691 = arguments.length;
var i__50177__auto___52692 = (0);
while(true){
if((i__50177__auto___52692 < len__50176__auto___52691)){
args__50183__auto__.push((arguments[i__50177__auto___52692]));

var G__52693 = (i__50177__auto___52692 + (1));
i__50177__auto___52692 = G__52693;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52690))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52690),args);
});})(g__51165__auto___52690))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__51165__auto___52690){
return (function (seq52629){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52629));
});})(g__51165__auto___52690))
;


var g__51165__auto___52694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__51165__auto___52694){
return (function cljs$spec$gen$alpha$return(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52695 = arguments.length;
var i__50177__auto___52696 = (0);
while(true){
if((i__50177__auto___52696 < len__50176__auto___52695)){
args__50183__auto__.push((arguments[i__50177__auto___52696]));

var G__52697 = (i__50177__auto___52696 + (1));
i__50177__auto___52696 = G__52697;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52694))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52694),args);
});})(g__51165__auto___52694))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__51165__auto___52694){
return (function (seq52630){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52630));
});})(g__51165__auto___52694))
;


var g__51165__auto___52698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__51165__auto___52698){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52699 = arguments.length;
var i__50177__auto___52700 = (0);
while(true){
if((i__50177__auto___52700 < len__50176__auto___52699)){
args__50183__auto__.push((arguments[i__50177__auto___52700]));

var G__52701 = (i__50177__auto___52700 + (1));
i__50177__auto___52700 = G__52701;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52698))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52698),args);
});})(g__51165__auto___52698))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__51165__auto___52698){
return (function (seq52631){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52631));
});})(g__51165__auto___52698))
;


var g__51165__auto___52702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__51165__auto___52702){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52703 = arguments.length;
var i__50177__auto___52704 = (0);
while(true){
if((i__50177__auto___52704 < len__50176__auto___52703)){
args__50183__auto__.push((arguments[i__50177__auto___52704]));

var G__52705 = (i__50177__auto___52704 + (1));
i__50177__auto___52704 = G__52705;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52702))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52702),args);
});})(g__51165__auto___52702))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__51165__auto___52702){
return (function (seq52632){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52632));
});})(g__51165__auto___52702))
;


var g__51165__auto___52706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__51165__auto___52706){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52707 = arguments.length;
var i__50177__auto___52708 = (0);
while(true){
if((i__50177__auto___52708 < len__50176__auto___52707)){
args__50183__auto__.push((arguments[i__50177__auto___52708]));

var G__52709 = (i__50177__auto___52708 + (1));
i__50177__auto___52708 = G__52709;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51165__auto___52706))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51165__auto___52706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__51165__auto___52706),args);
});})(g__51165__auto___52706))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__51165__auto___52706){
return (function (seq52633){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52633));
});})(g__51165__auto___52706))
;

var g__51178__auto___52731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__51178__auto___52731){
return (function cljs$spec$gen$alpha$any(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52732 = arguments.length;
var i__50177__auto___52733 = (0);
while(true){
if((i__50177__auto___52733 < len__50176__auto___52732)){
args__50183__auto__.push((arguments[i__50177__auto___52733]));

var G__52734 = (i__50177__auto___52733 + (1));
i__50177__auto___52733 = G__52734;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52731))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52731){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52731);
});})(g__51178__auto___52731))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__51178__auto___52731){
return (function (seq52710){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52710));
});})(g__51178__auto___52731))
;


var g__51178__auto___52735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__51178__auto___52735){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52736 = arguments.length;
var i__50177__auto___52737 = (0);
while(true){
if((i__50177__auto___52737 < len__50176__auto___52736)){
args__50183__auto__.push((arguments[i__50177__auto___52737]));

var G__52738 = (i__50177__auto___52737 + (1));
i__50177__auto___52737 = G__52738;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52735))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52735){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52735);
});})(g__51178__auto___52735))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__51178__auto___52735){
return (function (seq52711){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52711));
});})(g__51178__auto___52735))
;


var g__51178__auto___52739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__51178__auto___52739){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52740 = arguments.length;
var i__50177__auto___52741 = (0);
while(true){
if((i__50177__auto___52741 < len__50176__auto___52740)){
args__50183__auto__.push((arguments[i__50177__auto___52741]));

var G__52742 = (i__50177__auto___52741 + (1));
i__50177__auto___52741 = G__52742;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52739))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52739){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52739);
});})(g__51178__auto___52739))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__51178__auto___52739){
return (function (seq52712){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52712));
});})(g__51178__auto___52739))
;


var g__51178__auto___52743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__51178__auto___52743){
return (function cljs$spec$gen$alpha$char(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52744 = arguments.length;
var i__50177__auto___52745 = (0);
while(true){
if((i__50177__auto___52745 < len__50176__auto___52744)){
args__50183__auto__.push((arguments[i__50177__auto___52745]));

var G__52746 = (i__50177__auto___52745 + (1));
i__50177__auto___52745 = G__52746;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52743))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52743){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52743);
});})(g__51178__auto___52743))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__51178__auto___52743){
return (function (seq52713){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52713));
});})(g__51178__auto___52743))
;


var g__51178__auto___52747 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__51178__auto___52747){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52748 = arguments.length;
var i__50177__auto___52749 = (0);
while(true){
if((i__50177__auto___52749 < len__50176__auto___52748)){
args__50183__auto__.push((arguments[i__50177__auto___52749]));

var G__52750 = (i__50177__auto___52749 + (1));
i__50177__auto___52749 = G__52750;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52747))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52747){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52747);
});})(g__51178__auto___52747))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__51178__auto___52747){
return (function (seq52714){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52714));
});})(g__51178__auto___52747))
;


var g__51178__auto___52751 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__51178__auto___52751){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52752 = arguments.length;
var i__50177__auto___52753 = (0);
while(true){
if((i__50177__auto___52753 < len__50176__auto___52752)){
args__50183__auto__.push((arguments[i__50177__auto___52753]));

var G__52754 = (i__50177__auto___52753 + (1));
i__50177__auto___52753 = G__52754;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52751))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52751){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52751);
});})(g__51178__auto___52751))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__51178__auto___52751){
return (function (seq52715){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52715));
});})(g__51178__auto___52751))
;


var g__51178__auto___52755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__51178__auto___52755){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52756 = arguments.length;
var i__50177__auto___52757 = (0);
while(true){
if((i__50177__auto___52757 < len__50176__auto___52756)){
args__50183__auto__.push((arguments[i__50177__auto___52757]));

var G__52758 = (i__50177__auto___52757 + (1));
i__50177__auto___52757 = G__52758;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52755))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52755){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52755);
});})(g__51178__auto___52755))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__51178__auto___52755){
return (function (seq52716){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52716));
});})(g__51178__auto___52755))
;


var g__51178__auto___52759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__51178__auto___52759){
return (function cljs$spec$gen$alpha$double(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52760 = arguments.length;
var i__50177__auto___52761 = (0);
while(true){
if((i__50177__auto___52761 < len__50176__auto___52760)){
args__50183__auto__.push((arguments[i__50177__auto___52761]));

var G__52762 = (i__50177__auto___52761 + (1));
i__50177__auto___52761 = G__52762;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52759))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52759){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52759);
});})(g__51178__auto___52759))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__51178__auto___52759){
return (function (seq52717){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52717));
});})(g__51178__auto___52759))
;


var g__51178__auto___52763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__51178__auto___52763){
return (function cljs$spec$gen$alpha$int(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52764 = arguments.length;
var i__50177__auto___52765 = (0);
while(true){
if((i__50177__auto___52765 < len__50176__auto___52764)){
args__50183__auto__.push((arguments[i__50177__auto___52765]));

var G__52766 = (i__50177__auto___52765 + (1));
i__50177__auto___52765 = G__52766;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52763))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52763){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52763);
});})(g__51178__auto___52763))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__51178__auto___52763){
return (function (seq52718){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52718));
});})(g__51178__auto___52763))
;


var g__51178__auto___52767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__51178__auto___52767){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52768 = arguments.length;
var i__50177__auto___52769 = (0);
while(true){
if((i__50177__auto___52769 < len__50176__auto___52768)){
args__50183__auto__.push((arguments[i__50177__auto___52769]));

var G__52770 = (i__50177__auto___52769 + (1));
i__50177__auto___52769 = G__52770;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52767))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52767){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52767);
});})(g__51178__auto___52767))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__51178__auto___52767){
return (function (seq52719){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52719));
});})(g__51178__auto___52767))
;


var g__51178__auto___52771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__51178__auto___52771){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52772 = arguments.length;
var i__50177__auto___52773 = (0);
while(true){
if((i__50177__auto___52773 < len__50176__auto___52772)){
args__50183__auto__.push((arguments[i__50177__auto___52773]));

var G__52774 = (i__50177__auto___52773 + (1));
i__50177__auto___52773 = G__52774;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52771))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52771){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52771);
});})(g__51178__auto___52771))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__51178__auto___52771){
return (function (seq52720){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52720));
});})(g__51178__auto___52771))
;


var g__51178__auto___52775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__51178__auto___52775){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52776 = arguments.length;
var i__50177__auto___52777 = (0);
while(true){
if((i__50177__auto___52777 < len__50176__auto___52776)){
args__50183__auto__.push((arguments[i__50177__auto___52777]));

var G__52778 = (i__50177__auto___52777 + (1));
i__50177__auto___52777 = G__52778;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52775))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52775){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52775);
});})(g__51178__auto___52775))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__51178__auto___52775){
return (function (seq52721){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52721));
});})(g__51178__auto___52775))
;


var g__51178__auto___52779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__51178__auto___52779){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52780 = arguments.length;
var i__50177__auto___52781 = (0);
while(true){
if((i__50177__auto___52781 < len__50176__auto___52780)){
args__50183__auto__.push((arguments[i__50177__auto___52781]));

var G__52782 = (i__50177__auto___52781 + (1));
i__50177__auto___52781 = G__52782;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52779))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52779){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52779);
});})(g__51178__auto___52779))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__51178__auto___52779){
return (function (seq52722){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52722));
});})(g__51178__auto___52779))
;


var g__51178__auto___52783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__51178__auto___52783){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52784 = arguments.length;
var i__50177__auto___52785 = (0);
while(true){
if((i__50177__auto___52785 < len__50176__auto___52784)){
args__50183__auto__.push((arguments[i__50177__auto___52785]));

var G__52786 = (i__50177__auto___52785 + (1));
i__50177__auto___52785 = G__52786;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52783))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52783){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52783);
});})(g__51178__auto___52783))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__51178__auto___52783){
return (function (seq52723){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52723));
});})(g__51178__auto___52783))
;


var g__51178__auto___52787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__51178__auto___52787){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52788 = arguments.length;
var i__50177__auto___52789 = (0);
while(true){
if((i__50177__auto___52789 < len__50176__auto___52788)){
args__50183__auto__.push((arguments[i__50177__auto___52789]));

var G__52790 = (i__50177__auto___52789 + (1));
i__50177__auto___52789 = G__52790;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52787))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52787){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52787);
});})(g__51178__auto___52787))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__51178__auto___52787){
return (function (seq52724){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52724));
});})(g__51178__auto___52787))
;


var g__51178__auto___52791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__51178__auto___52791){
return (function cljs$spec$gen$alpha$string(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52792 = arguments.length;
var i__50177__auto___52793 = (0);
while(true){
if((i__50177__auto___52793 < len__50176__auto___52792)){
args__50183__auto__.push((arguments[i__50177__auto___52793]));

var G__52794 = (i__50177__auto___52793 + (1));
i__50177__auto___52793 = G__52794;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52791))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52791){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52791);
});})(g__51178__auto___52791))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__51178__auto___52791){
return (function (seq52725){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52725));
});})(g__51178__auto___52791))
;


var g__51178__auto___52795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__51178__auto___52795){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52796 = arguments.length;
var i__50177__auto___52797 = (0);
while(true){
if((i__50177__auto___52797 < len__50176__auto___52796)){
args__50183__auto__.push((arguments[i__50177__auto___52797]));

var G__52798 = (i__50177__auto___52797 + (1));
i__50177__auto___52797 = G__52798;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52795))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52795){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52795);
});})(g__51178__auto___52795))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__51178__auto___52795){
return (function (seq52726){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52726));
});})(g__51178__auto___52795))
;


var g__51178__auto___52799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__51178__auto___52799){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52800 = arguments.length;
var i__50177__auto___52801 = (0);
while(true){
if((i__50177__auto___52801 < len__50176__auto___52800)){
args__50183__auto__.push((arguments[i__50177__auto___52801]));

var G__52802 = (i__50177__auto___52801 + (1));
i__50177__auto___52801 = G__52802;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52799))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52799){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52799);
});})(g__51178__auto___52799))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__51178__auto___52799){
return (function (seq52727){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52727));
});})(g__51178__auto___52799))
;


var g__51178__auto___52803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__51178__auto___52803){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52804 = arguments.length;
var i__50177__auto___52805 = (0);
while(true){
if((i__50177__auto___52805 < len__50176__auto___52804)){
args__50183__auto__.push((arguments[i__50177__auto___52805]));

var G__52806 = (i__50177__auto___52805 + (1));
i__50177__auto___52805 = G__52806;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52803))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52803){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52803);
});})(g__51178__auto___52803))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__51178__auto___52803){
return (function (seq52728){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52728));
});})(g__51178__auto___52803))
;


var g__51178__auto___52807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__51178__auto___52807){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52808 = arguments.length;
var i__50177__auto___52809 = (0);
while(true){
if((i__50177__auto___52809 < len__50176__auto___52808)){
args__50183__auto__.push((arguments[i__50177__auto___52809]));

var G__52810 = (i__50177__auto___52809 + (1));
i__50177__auto___52809 = G__52810;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52807))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52807){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52807);
});})(g__51178__auto___52807))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__51178__auto___52807){
return (function (seq52729){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52729));
});})(g__51178__auto___52807))
;


var g__51178__auto___52811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__51178__auto___52811){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52812 = arguments.length;
var i__50177__auto___52813 = (0);
while(true){
if((i__50177__auto___52813 < len__50176__auto___52812)){
args__50183__auto__.push((arguments[i__50177__auto___52813]));

var G__52814 = (i__50177__auto___52813 + (1));
i__50177__auto___52813 = G__52814;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});})(g__51178__auto___52811))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__51178__auto___52811){
return (function (args){
return cljs.core.deref.call(null,g__51178__auto___52811);
});})(g__51178__auto___52811))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__51178__auto___52811){
return (function (seq52730){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52730));
});})(g__51178__auto___52811))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__50183__auto__ = [];
var len__50176__auto___52817 = arguments.length;
var i__50177__auto___52818 = (0);
while(true){
if((i__50177__auto___52818 < len__50176__auto___52817)){
args__50183__auto__.push((arguments[i__50177__auto___52818]));

var G__52819 = (i__50177__auto___52818 + (1));
i__50177__auto___52818 = G__52819;
continue;
} else {
}
break;
}

var argseq__50184__auto__ = ((((0) < args__50183__auto__.length))?(new cljs.core.IndexedSeq(args__50183__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__50184__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__52815_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__52815_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq52816){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52816));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__52820_SHARP_){
return (new Date(p1__52820_SHARP_));
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

//# sourceMappingURL=alpha.js.map