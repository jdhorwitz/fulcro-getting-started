(ns cljs.user
  (:require
   [app.basic-ui :refer [app-1 Root]]
   [fulcro.client.core :as fc]))

(defn refresh [] (swap! app-1 fc/mount Root "app-1"))

(refresh)

