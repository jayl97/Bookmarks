import { Body, Controller, Delete, Get, HttpCode, Param, Patch, UsePipes } from "@nestjs/common/decorators";
import { BookmarkService } from "./bookmark.service";
import { Post, ValidationPipe } from "@nestjs/common";
import { CreateBookmarkDto } from "./dto/CreateBookmark.dto";
import { UpdateBookmark } from "./dto/UpdateBookmark.dto";

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }

    @Post('create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createBookmark(@Body() bookmarkData: CreateBookmarkDto) {
        return this.bookmarkService.createBookmark(bookmarkData)
    }

    @Get('all-bookmarks')
    findAllBookmarks() {
        return this.bookmarkService.findAllBookmarks()
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.bookmarkService.findById(+id)
    }

    @Patch(":id")
    updateBookmark(@Param('id') id: number, @Body() updateBookmark: UpdateBookmark) {
        return this.bookmarkService.updateBookmark(+id, updateBookmark)
    }

    @Delete(":id")
    removeBookmark(@Param('id') id: number) {
        return this.bookmarkService.removeBookmark(+id)
    }
}