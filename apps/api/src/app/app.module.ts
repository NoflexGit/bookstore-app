import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksModule } from './books/books.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hopczol.mongodb.net/?retryWrites=true&w=majority`
    ),
  ],
})
export class AppModule {}
