import { Module } from '@nestjs/common';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BookmarkModule, AuthModule, UsersModule]
})
export class AppModule { }
