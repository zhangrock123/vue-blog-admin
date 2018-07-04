const INDEX = r => require.ensure([], () => r(require('@/pages/index.vue')), 'index');
const LOGIN = r => require.ensure([], () => r(require('@/pages/login.vue')), 'login');
const EDIT_ARTICLE = r => require.ensure([], () => r(require('@/pages/editArticle.vue')), 'editArticle');
const EDIT_TYPE = r => require.ensure([], () => r(require('@/pages/editType.vue')), 'editType');
const TYPE_LIST = r => require.ensure([], () => r(require('@/pages/typeList.vue')), 'typeList');


/**
 * 路由meta参数配置说明
 *  auth  是否需要用户登录验证
 *  title 改变浏览器标题名称
 *  template 使用模版名称
 *  menuTag 左侧栏菜单项激活
 */

export default [
  // 缺省页面重定向主页面
  {
    path: '/',
    redirect: { name: 'index' }
  },
  // 主页面
  {
    path: '/index',
    name: 'index',
    meta: {
      auth: true,
      title: '首页',
      template: 'appLayout',
      menuTag: 'index'
    },
    component: INDEX
  },
  // 用户登录
  {
    path: '/login',
    name: 'login',
    meta: {
      auth: false,
      title: '用户登录',
      template: '',
      menuTag: ''
    },
    component: LOGIN
  },
  {
    path: '/edit-article',
    name: 'editArticle',
    meta: {
      auth: true,
      title: '文章编辑',
      template: 'appLayout',
      menuTag: 'index'
    },
    component: EDIT_ARTICLE
  },
  {
    path: '/type-list',
    name: 'typeList',
    meta: {
      auth: true,
      title: '类别列表',
      template: 'appLayout',
      menuTag: 'typeList'
    },
    component: TYPE_LIST
  },
  {
    path: '/edit-type',
    name: 'editType',
    meta: {
      auth: true,
      title: '类别编辑',
      template: 'appLayout',
      menuTag: 'typeList'
    },
    component: EDIT_TYPE
  },
];
