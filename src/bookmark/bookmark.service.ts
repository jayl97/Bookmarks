import { Inject, Injectable } from "@nestjs/common";
import { CreateBookmarkDto } from "./dto/CreateBookmark.dto";
import { Repository } from 'typeorm'
import { Bookmark } from "./bookmark.entity";
import { UpdateBookmark } from "./dto/UpdateBookmark.dto";

@Injectable()
export class BookmarkService {
    constructor(
        @Inject('BOOKMARK_REPOSITORY')
        private bookmarkRepository: Repository<Bookmark>
    ) { }

    async createBookmark(createBookmarkDto: CreateBookmarkDto): Promise<{ id: number, title: string, description: string }> {
        const bookmarkEntity = Object.assign(new Bookmark(), createBookmarkDto)
        const createdBookmark = await this.bookmarkRepository.save(bookmarkEntity)
        return createdBookmark
    }

    async findAllBookmarks(): Promise<Bookmark[]> {
        return this.bookmarkRepository.find()
    }

    findById(id: number) {
        return this.bookmarkRepository.findOneBy({ id })
    }

    async updateBookmark(id: number, updateBookmark: UpdateBookmark) {
        const updatedBookmark = await this.bookmarkRepository.update(id, updateBookmark)
        return updatedBookmark
    }

    removeBookmark(id: number) {
        return this.bookmarkRepository.delete(id)
    }
}