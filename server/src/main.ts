// 要创建一个 Nest 应用实例，我们使用了 NestFactory 核心类。NestFactory 暴露了一些静态方法用于创建应用实例。
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create() 方法返回一个实现 INestApplication 接口的对象。该对象提供了一组可用的方法，我们会在后面的章节中对这些方法进行详细描述。 
  // 在上面的 main.ts 示例中，我们只是启动 HTTP 服务，让应用程序等待 HTTP 请求。
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
