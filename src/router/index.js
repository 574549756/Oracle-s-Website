import Vue from "vue"
import Router from "vue-router"
import app from "../App"
import about from "../components/about"
import project from "../components/project"
import blog from "../components/blog"
import ability from "../components/ability"
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
    },
    {
      path: "/ability",
      name: "ability",
      component: ability
    }
  ]
})
