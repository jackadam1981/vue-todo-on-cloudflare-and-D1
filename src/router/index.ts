import { createRouter, createWebHistory } from "vue-router";

import NewToDoVue from "@/components/NewToDo.vue";
import ToDoListVue from "@/components/ToDoList.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: ToDoListVue,
        },
        {
            path: "/new",
            component: NewToDoVue,
        }
    ]
})

export default router