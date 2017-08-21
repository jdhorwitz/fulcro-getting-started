// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30858){
var map__30859 = p__30858;
var map__30859__$1 = ((((!((map__30859 == null)))?((((map__30859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30859):map__30859);
var m = map__30859__$1;
var n = cljs.core.get.call(null,map__30859__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30859__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30861_30883 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30862_30884 = null;
var count__30863_30885 = (0);
var i__30864_30886 = (0);
while(true){
if((i__30864_30886 < count__30863_30885)){
var f_30887 = cljs.core._nth.call(null,chunk__30862_30884,i__30864_30886);
cljs.core.println.call(null,"  ",f_30887);

var G__30888 = seq__30861_30883;
var G__30889 = chunk__30862_30884;
var G__30890 = count__30863_30885;
var G__30891 = (i__30864_30886 + (1));
seq__30861_30883 = G__30888;
chunk__30862_30884 = G__30889;
count__30863_30885 = G__30890;
i__30864_30886 = G__30891;
continue;
} else {
var temp__5278__auto___30892 = cljs.core.seq.call(null,seq__30861_30883);
if(temp__5278__auto___30892){
var seq__30861_30893__$1 = temp__5278__auto___30892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30861_30893__$1)){
var c__29576__auto___30894 = cljs.core.chunk_first.call(null,seq__30861_30893__$1);
var G__30895 = cljs.core.chunk_rest.call(null,seq__30861_30893__$1);
var G__30896 = c__29576__auto___30894;
var G__30897 = cljs.core.count.call(null,c__29576__auto___30894);
var G__30898 = (0);
seq__30861_30883 = G__30895;
chunk__30862_30884 = G__30896;
count__30863_30885 = G__30897;
i__30864_30886 = G__30898;
continue;
} else {
var f_30899 = cljs.core.first.call(null,seq__30861_30893__$1);
cljs.core.println.call(null,"  ",f_30899);

var G__30900 = cljs.core.next.call(null,seq__30861_30893__$1);
var G__30901 = null;
var G__30902 = (0);
var G__30903 = (0);
seq__30861_30883 = G__30900;
chunk__30862_30884 = G__30901;
count__30863_30885 = G__30902;
i__30864_30886 = G__30903;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30904 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28664__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28664__auto__)){
return or__28664__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30904);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30904)))?cljs.core.second.call(null,arglists_30904):arglists_30904));
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
var seq__30865_30905 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30866_30906 = null;
var count__30867_30907 = (0);
var i__30868_30908 = (0);
while(true){
if((i__30868_30908 < count__30867_30907)){
var vec__30869_30909 = cljs.core._nth.call(null,chunk__30866_30906,i__30868_30908);
var name_30910 = cljs.core.nth.call(null,vec__30869_30909,(0),null);
var map__30872_30911 = cljs.core.nth.call(null,vec__30869_30909,(1),null);
var map__30872_30912__$1 = ((((!((map__30872_30911 == null)))?((((map__30872_30911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30872_30911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30872_30911):map__30872_30911);
var doc_30913 = cljs.core.get.call(null,map__30872_30912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30914 = cljs.core.get.call(null,map__30872_30912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30910);

cljs.core.println.call(null," ",arglists_30914);

if(cljs.core.truth_(doc_30913)){
cljs.core.println.call(null," ",doc_30913);
} else {
}

var G__30915 = seq__30865_30905;
var G__30916 = chunk__30866_30906;
var G__30917 = count__30867_30907;
var G__30918 = (i__30868_30908 + (1));
seq__30865_30905 = G__30915;
chunk__30866_30906 = G__30916;
count__30867_30907 = G__30917;
i__30868_30908 = G__30918;
continue;
} else {
var temp__5278__auto___30919 = cljs.core.seq.call(null,seq__30865_30905);
if(temp__5278__auto___30919){
var seq__30865_30920__$1 = temp__5278__auto___30919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30865_30920__$1)){
var c__29576__auto___30921 = cljs.core.chunk_first.call(null,seq__30865_30920__$1);
var G__30922 = cljs.core.chunk_rest.call(null,seq__30865_30920__$1);
var G__30923 = c__29576__auto___30921;
var G__30924 = cljs.core.count.call(null,c__29576__auto___30921);
var G__30925 = (0);
seq__30865_30905 = G__30922;
chunk__30866_30906 = G__30923;
count__30867_30907 = G__30924;
i__30868_30908 = G__30925;
continue;
} else {
var vec__30874_30926 = cljs.core.first.call(null,seq__30865_30920__$1);
var name_30927 = cljs.core.nth.call(null,vec__30874_30926,(0),null);
var map__30877_30928 = cljs.core.nth.call(null,vec__30874_30926,(1),null);
var map__30877_30929__$1 = ((((!((map__30877_30928 == null)))?((((map__30877_30928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30877_30928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30877_30928):map__30877_30928);
var doc_30930 = cljs.core.get.call(null,map__30877_30929__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30931 = cljs.core.get.call(null,map__30877_30929__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30927);

cljs.core.println.call(null," ",arglists_30931);

if(cljs.core.truth_(doc_30930)){
cljs.core.println.call(null," ",doc_30930);
} else {
}

var G__30932 = cljs.core.next.call(null,seq__30865_30920__$1);
var G__30933 = null;
var G__30934 = (0);
var G__30935 = (0);
seq__30865_30905 = G__30932;
chunk__30866_30906 = G__30933;
count__30867_30907 = G__30934;
i__30868_30908 = G__30935;
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

var seq__30879 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30880 = null;
var count__30881 = (0);
var i__30882 = (0);
while(true){
if((i__30882 < count__30881)){
var role = cljs.core._nth.call(null,chunk__30880,i__30882);
var temp__5278__auto___30936__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___30936__$1)){
var spec_30937 = temp__5278__auto___30936__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_30937));
} else {
}

var G__30938 = seq__30879;
var G__30939 = chunk__30880;
var G__30940 = count__30881;
var G__30941 = (i__30882 + (1));
seq__30879 = G__30938;
chunk__30880 = G__30939;
count__30881 = G__30940;
i__30882 = G__30941;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__30879);
if(temp__5278__auto____$1){
var seq__30879__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30879__$1)){
var c__29576__auto__ = cljs.core.chunk_first.call(null,seq__30879__$1);
var G__30942 = cljs.core.chunk_rest.call(null,seq__30879__$1);
var G__30943 = c__29576__auto__;
var G__30944 = cljs.core.count.call(null,c__29576__auto__);
var G__30945 = (0);
seq__30879 = G__30942;
chunk__30880 = G__30943;
count__30881 = G__30944;
i__30882 = G__30945;
continue;
} else {
var role = cljs.core.first.call(null,seq__30879__$1);
var temp__5278__auto___30946__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___30946__$2)){
var spec_30947 = temp__5278__auto___30946__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_30947));
} else {
}

var G__30948 = cljs.core.next.call(null,seq__30879__$1);
var G__30949 = null;
var G__30950 = (0);
var G__30951 = (0);
seq__30879 = G__30948;
chunk__30880 = G__30949;
count__30881 = G__30950;
i__30882 = G__30951;
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

//# sourceMappingURL=repl.js.map?rel=1503276798026