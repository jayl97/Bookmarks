import { DataSource } from 'typeorm'
import { Bookmark } from './bookmark.entity'

export const bookmarkProvider = [
    {
        provide: 'BOOKMARK_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Bookmark),
        inject: ['DATA_SOURCE']
    }
]