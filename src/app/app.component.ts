import { Component } from '@angular/core';

/**
 * @Component 组件元数据装饰器
 *      作用：
 *           1、告诉框架如何处理一个typescript类
 *      装饰器中的属性：
 *            1、装饰器中属性的值叫做元数据，angular根据元数据的值来渲染组件，并执行组件的逻辑
 * Template模板：
 *      1、templateUrl指定组件的html模板，可以在其中使用模板语法
 * Controller控制器：
 *      1、控制器中包含组件的所有属性和方法
 *      2、绝大多数的页面逻辑写在控制器中
 *      3、控制器通过数据绑定与模板通讯
 *      4、处理模板上发生的事件
 */



 /**
  * @Component 装饰器中的每一个属性就是一个元数据
 */
@Component({
  selector: 'app-root', // 表示当前组件可以使用 <app-root> 标签来调用
  templateUrl: './app.component.html', // 组件的模板
  styleUrls: ['./app.component.css']
})
/**
 * 控制器：AppComponent 就是一个 typescript 类
*/
export class AppComponent {
  title = 'online-auction 练习';
}

/**
 * 逻辑：
 *     通过装饰器将元数据附加到一个typescript类上
*/
