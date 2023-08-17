import { PartialType } from '@nestjs/mapped-types';
import { CreateBookmarkDto } from './CreateBookmark.dto';

export class UpdateBookmark extends PartialType(CreateBookmarkDto) { }