// import { setPublicPath } from 'systemjs-webpack-interop';
// setPublicPath('ng7chunk');
import { enableProdMode, NgZone,ApplicationRef} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular, {getSingleSpaExtraProviders}from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
debugger;

  enableProdMode();
}else{
debugger;

}

// const lifecycles = singleSpaAngular({
//   bootstrapFunction: async () => {
//     const ngModuleRef = await platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
//       AppModule,
//       // { ngZone: 'noop' },
//     );
//     const appRef = ngModuleRef.injector.get(ApplicationRef);
//     const listener = () => appRef.tick();
//     window.addEventListener('popstate', listener);
//     ngModuleRef.onDestroy(() => {
//       window.removeEventListener('popstate', listener);
//     });
//     return ngModuleRef;
//   },
//   template: '<ng7chunk-root />',
//   Router,
//   NgZone,

// });
const lifecycles = singleSpaAngular({

  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<ng7chunk-root />',
  Router,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
// export const mount = lifecycles.mount;
debugger;
// 子应用 mount 生命周期的代码
export async function mount (props) {
  debugger;
  console.log('--------------00000000000000000--------------')
  // 这里并不能捕获到全局变量的变化，因为主项目的状态在加载前已经变化了
  props.onGlobalStateChange((state, prev) => {
    console.warn('主项目状态变更')
  })
}
export const unmount = lifecycles.unmount;
