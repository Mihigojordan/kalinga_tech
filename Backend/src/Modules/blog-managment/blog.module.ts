// src/Modules/blog-managment/blog.module.ts
import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { AdminModule } from '../admin/admin.module'; // import AdminModule

@Module({
  imports: [AdminModule], // <- this gives BlogModule access to AdminAuthGuard & JwtService
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
