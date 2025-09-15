// app.module.ts
import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './Modules/admin/admin.module';
import { BlogModule } from './Modules/blog-managment/blog.module';
import { ProductModule } from './Modules/product-management/product.module';
@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true, // so you don't have to import ConfigModule in every module
    }),
    CommonModule,
    AdminModule,
    BlogModule,
    ProductModule
  ],
  controllers: [],
})
export class AppModule {}
