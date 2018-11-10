import Vue from "vue"
import Router from "vue-router"
import app from "../App"
import about from "../components/selectTabContent/about"
import project from "../components/selectTabContent/project"
import blog from "../components/selectTabContent/blog"
import sketch from "../components/selectTabContent/sketch"
import store from "../store/index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "normal",
      component: undefined
    },
    {
      path: "/ability",
      name: "ability",
      component: sketch
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/project",
      name: "project",
      component: project
    },
    {
      path: "/blog",
      name: "blog",
      component: blog
    }
  ]
})
