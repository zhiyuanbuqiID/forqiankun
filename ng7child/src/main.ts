import 'core-js/es7/reflect';
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';

import singleSpaAngular from 'single-spa-angular';
import { getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

// Redux
import SharedModule from './app/shared/index'


if (environment.production) {

  enableProdMode();
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule)
    .catch(err => console.log(err));
}
console.log((window as any).__POWERED_BY_QIANKUN__);
const lifecycles = singleSpaAngular(
  {
    
    bootstrapFunction: singleSpaProps => {
      render(singleSpaProps);
      singleSpaPropsSubject.next(singleSpaProps);

      return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule).catch(err => console.error(err));
    },
    template: '<ng7chunk-root />',
    Router,
    NgZone: NgZone,

  }
);
function render(props) {
  /**
 * 渲染函数
 * 主应用生命周期钩子中运行/子应用单独启动时运行
 */
  // 当传入的 shared 为空时，使用子应用自身的 shared
  // 当传入的 shared 不为空时，主应用传入的 shared 将会重载子应用的 shared
  console.log(props);
  props.pager.subscribe((v) => {
    // 在子应用注册呼机监听器，这里可以监听到其他应用的广播
    console.log(`____????：`, v);
    // store.dispatch('app/setToken', v.token)   // 在子应用中监听到其他应用广播的消息后处理逻辑
  });
  setTimeout(() =>{
    props.pager.next("我是子应用，我来发消息")
  },1000)
}

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;




