// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51933){
var map__51934 = p__51933;
var map__51934__$1 = ((((!((map__51934 == null)))?((((map__51934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51934):map__51934);
var m = map__51934__$1;
var n = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51936_51958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51937_51959 = null;
var count__51938_51960 = (0);
var i__51939_51961 = (0);
while(true){
if((i__51939_51961 < count__51938_51960)){
var f_51962 = cljs.core._nth.call(null,chunk__51937_51959,i__51939_51961);
cljs.core.println.call(null,"  ",f_51962);

var G__51963 = seq__51936_51958;
var G__51964 = chunk__51937_51959;
var G__51965 = count__51938_51960;
var G__51966 = (i__51939_51961 + (1));
seq__51936_51958 = G__51963;
chunk__51937_51959 = G__51964;
count__51938_51960 = G__51965;
i__51939_51961 = G__51966;
continue;
} else {
var temp__5278__auto___51967 = cljs.core.seq.call(null,seq__51936_51958);
if(temp__5278__auto___51967){
var seq__51936_51968__$1 = temp__5278__auto___51967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51936_51968__$1)){
var c__49855__auto___51969 = cljs.core.chunk_first.call(null,seq__51936_51968__$1);
var G__51970 = cljs.core.chunk_rest.call(null,seq__51936_51968__$1);
var G__51971 = c__49855__auto___51969;
var G__51972 = cljs.core.count.call(null,c__49855__auto___51969);
var G__51973 = (0);
seq__51936_51958 = G__51970;
chunk__51937_51959 = G__51971;
count__51938_51960 = G__51972;
i__51939_51961 = G__51973;
continue;
} else {
var f_51974 = cljs.core.first.call(null,seq__51936_51968__$1);
cljs.core.println.call(null,"  ",f_51974);

var G__51975 = cljs.core.next.call(null,seq__51936_51968__$1);
var G__51976 = null;
var G__51977 = (0);
var G__51978 = (0);
seq__51936_51958 = G__51975;
chunk__51937_51959 = G__51976;
count__51938_51960 = G__51977;
i__51939_51961 = G__51978;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51979 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__48943__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__48943__auto__)){
return or__48943__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51979);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51979)))?cljs.core.second.call(null,arglists_51979):arglists_51979));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51940_51980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51941_51981 = null;
var count__51942_51982 = (0);
var i__51943_51983 = (0);
while(true){
if((i__51943_51983 < count__51942_51982)){
var vec__51944_51984 = cljs.core._nth.call(null,chunk__51941_51981,i__51943_51983);
var name_51985 = cljs.core.nth.call(null,vec__51944_51984,(0),null);
var map__51947_51986 = cljs.core.nth.call(null,vec__51944_51984,(1),null);
var map__51947_51987__$1 = ((((!((map__51947_51986 == null)))?((((map__51947_51986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51947_51986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51947_51986):map__51947_51986);
var doc_51988 = cljs.core.get.call(null,map__51947_51987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51989 = cljs.core.get.call(null,map__51947_51987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51985);

cljs.core.println.call(null," ",arglists_51989);

if(cljs.core.truth_(doc_51988)){
cljs.core.println.call(null," ",doc_51988);
} else {
}

var G__51990 = seq__51940_51980;
var G__51991 = chunk__51941_51981;
var G__51992 = count__51942_51982;
var G__51993 = (i__51943_51983 + (1));
seq__51940_51980 = G__51990;
chunk__51941_51981 = G__51991;
count__51942_51982 = G__51992;
i__51943_51983 = G__51993;
continue;
} else {
var temp__5278__auto___51994 = cljs.core.seq.call(null,seq__51940_51980);
if(temp__5278__auto___51994){
var seq__51940_51995__$1 = temp__5278__auto___51994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51940_51995__$1)){
var c__49855__auto___51996 = cljs.core.chunk_first.call(null,seq__51940_51995__$1);
var G__51997 = cljs.core.chunk_rest.call(null,seq__51940_51995__$1);
var G__51998 = c__49855__auto___51996;
var G__51999 = cljs.core.count.call(null,c__49855__auto___51996);
var G__52000 = (0);
seq__51940_51980 = G__51997;
chunk__51941_51981 = G__51998;
count__51942_51982 = G__51999;
i__51943_51983 = G__52000;
continue;
} else {
var vec__51949_52001 = cljs.core.first.call(null,seq__51940_51995__$1);
var name_52002 = cljs.core.nth.call(null,vec__51949_52001,(0),null);
var map__51952_52003 = cljs.core.nth.call(null,vec__51949_52001,(1),null);
var map__51952_52004__$1 = ((((!((map__51952_52003 == null)))?((((map__51952_52003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51952_52003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51952_52003):map__51952_52003);
var doc_52005 = cljs.core.get.call(null,map__51952_52004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52006 = cljs.core.get.call(null,map__51952_52004__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52002);

cljs.core.println.call(null," ",arglists_52006);

if(cljs.core.truth_(doc_52005)){
cljs.core.println.call(null," ",doc_52005);
} else {
}

var G__52007 = cljs.core.next.call(null,seq__51940_51995__$1);
var G__52008 = null;
var G__52009 = (0);
var G__52010 = (0);
seq__51940_51980 = G__52007;
chunk__51941_51981 = G__52008;
count__51942_51982 = G__52009;
i__51943_51983 = G__52010;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__51954 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51955 = null;
var count__51956 = (0);
var i__51957 = (0);
while(true){
if((i__51957 < count__51956)){
var role = cljs.core._nth.call(null,chunk__51955,i__51957);
var temp__5278__auto___52011__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___52011__$1)){
var spec_52012 = temp__5278__auto___52011__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_52012));
} else {
}

var G__52013 = seq__51954;
var G__52014 = chunk__51955;
var G__52015 = count__51956;
var G__52016 = (i__51957 + (1));
seq__51954 = G__52013;
chunk__51955 = G__52014;
count__51956 = G__52015;
i__51957 = G__52016;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__51954);
if(temp__5278__auto____$1){
var seq__51954__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51954__$1)){
var c__49855__auto__ = cljs.core.chunk_first.call(null,seq__51954__$1);
var G__52017 = cljs.core.chunk_rest.call(null,seq__51954__$1);
var G__52018 = c__49855__auto__;
var G__52019 = cljs.core.count.call(null,c__49855__auto__);
var G__52020 = (0);
seq__51954 = G__52017;
chunk__51955 = G__52018;
count__51956 = G__52019;
i__51957 = G__52020;
continue;
} else {
var role = cljs.core.first.call(null,seq__51954__$1);
var temp__5278__auto___52021__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___52021__$2)){
var spec_52022 = temp__5278__auto___52021__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_52022));
} else {
}

var G__52023 = cljs.core.next.call(null,seq__51954__$1);
var G__52024 = null;
var G__52025 = (0);
var G__52026 = (0);
seq__51954 = G__52023;
chunk__51955 = G__52024;
count__51956 = G__52025;
i__51957 = G__52026;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map