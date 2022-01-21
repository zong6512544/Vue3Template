// 要创建一个 Nest 应用实例，我们使用了 NestFactory 核心类。NestFactory 暴露了一些静态方法用于创建应用实例。
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 引入NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  // create() 方法返回一个实现 INestApplication 接口的对象。该对象提供了一组可用的方法，我们会在后面的章节中对这些方法进行详细描述。
  // 在上面的 main.ts 示例中，我们只是启动 HTTP 服务，让应用程序等待 HTTP 请求。
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 配置静态资源目录
  // app.useStaticAssets('public');
  // 设置虚拟路径
  app.useStaticAssets('public', {
    prefix: '/static/',
  });
  // 设置全局路由前缀
  // app.setGlobalPrefix('api');
  //
  await app.listen(3000);
}
bootstrap();
