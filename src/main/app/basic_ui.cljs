(ns app.basic-ui
  (:require [fulcro.client.core :as fc]
            [om.dom :as dom]
            [om.next :as om :refer [defui]]))

(defonce app-1 (atom (fc/new-fulcro-client)))

(defui Root
  Object
  (render [this]
          (dom/div nil "Hello World.")))

