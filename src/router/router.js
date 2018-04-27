import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect:'/home-page/index',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/home-page',
        icon: 'home',
        name: 'projects',
        title: '首页',
        show: true,
        component: Main,
        children: [
            {
                path: 'index', icon: 'ios-paper-outline', name: 'projects_index', title: '项目管理',
                component: resolve => {
                    require(['@/views/home-page/home-page.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/nurse-pattern',
        icon: 'ios-keypad',
        title: '护理模式',
        name: 'nurse-pattern',
        show: false,
        component: Main,
        children: [
            {
                path: 'index', title: '护理模式', name: 'pattern_index',
                component: resolve => {
                    require(['@/views/nurse-pattern/nurse-pattern.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/online-order',
        icon: 'ios-telephone',
        title: '在线预约',
        name: 'online-order',
        show: false,
        component: Main,
        children: [
            {
                path: 'index', title: '护理模式', name: 'order_index',
                component: resolve => {
                    require(['@/views/online-order/online-order.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/user-center',
        icon: 'person',
        title: '用户中心',
        name: 'user-center',
        show: false,
        component: Main,
        children: [
            {
                path: 'index', title: '护理模式', name: 'center_index',
                component: resolve => {
                    require(['@/views/user-center/user-center.vue'], resolve)
                }
            }
        ]
    },


];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
