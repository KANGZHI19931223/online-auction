import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  /**
   * 只能声明组件、指令、管道,
   */
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent
  ],
  /**
   * 应用正常运转还需要的内容，也就是当前模块依赖的其他模块，可以使用引入模块中提供的组件、指令、服务
   */
  imports: [
    BrowserModule, // 开发web应用必选模块
  ],
  /**
   * 只能声明服务
   */
  providers: [],
  /**
   * 声明主组件
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
