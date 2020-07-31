import { Component, OnInit } from '@angular/core';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import pager from './util/pager';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
	msg:any = {};
	genActiveRule(routerPrefix: string) {
		return (location: { pathname: string }) => location.pathname.startsWith(routerPrefix)
	}
	ngOnInit(): void {
		// 发送的消息体
		this.msg = {
			data:"I'm data",
			pager
		};
		// 注册监听事件
		pager.subscribe((v) => {
			console.log("监听到子应用发来消息",v)
			// 在主应用注册呼机监听器，这里可以监听到其他应用的广播
			// console.log(`监听到子应用${v.from}发来消息：`, v);
			// store.dispatch('app/setToken', v.token); // 这里处理主应用监听到改变后的逻辑
		});
		  



		this.registerMicroApps();

		// setDefaultMountApp('/ng9toother');
		// setDefaultMountApp('/ng7chunk');
		start();

		runAfterFirstMounted(() => {
			console.log('[MainApp] first app mounted');
		});
		
		setTimeout(() => {
			pager.next('--------')
		}, 5000);

	}

	registerMicroApps() {
		registerMicroApps(
			[
				// {
				// 	name: 'ng70727',
				// 	entry: '//localhost:7119',
				// 	container: '#subapp-viewport',
				// 	activeRule: '/ng70727',
				// },
				{
					name: 'ng7chunk',
					entry: '//localhost:7103',
					container: '#subapp-viewport',

					activeRule: '/ng7chunk',
					props: this.msg,
				},
				// {
				// 	name: 'angular9',
				// 	entry: '//localhost:7188',
				// 	container: '#subapp-viewport',
				// 	activeRule: '/ng9',
				// },

				// {
				// 	name: 'ng9toother',
				// 	entry: '//localhost:7103',
				// 	container: '#subapp-viewport',
				// 	activeRule: '/ng9toother',
				// },
			],
			{
				beforeLoad: [
					app => {
						console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
						return Promise.resolve();
					},
				],
				beforeMount: [
					app => {
						console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
						return Promise.resolve();
					},
				],
				afterUnmount: [
					app => {
						console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
						return Promise.resolve();
					},
				],
			}
		);
	}
}
