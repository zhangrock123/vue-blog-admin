import utils from '@/utils';
import store from "@/store";


export default (vueRouter, to, from, next) => {
  document.getElementsByTagName('title')[0].innerHTML = to && to.meta && to.meta.title ? to.meta.title : '系统';

  next();
};
