import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema } from '../../common/decorators/schema.decorator';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
