import { enableProdMode } from '@angular/core'; // 用来关闭 angular 的开发者模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // 告知 angular 使用哪个模块启动整个应用

import { AppModule } from './app/app.module';
import { environment } from './environments/environment'; // 导入环境配置

/**
 * 如果当前是生产环境，就调用 enableProdMode 方法，关闭angular的开发者模式
 */
if (environment.production) {
  enableProdMode();
}

/**
 * 启动整个应用（应用的起点）
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/**
 * 启动过程：先加载 主模块，再加载主模块中依赖的模块，一次类推，加载完模块后，
 * 在index.html中寻找主模块提供的 css 选择器标签 <app-root></app-root>,
 * 将该位置替换成主模块中的html模板
 * 在替换完成的过程中，显示<app-root>Loading。。。</app-root>之间的内容 loading...
 */
