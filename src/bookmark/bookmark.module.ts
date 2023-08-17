import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { DatabaseModule } from '../database.module';
import { bookmarkProvider } from './bookmark.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [BookmarkController],
    providers: [...bookmarkProvider, BookmarkService]
})
export class BookmarkModule { }
