import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MoviesModule } from '../movies/movies.module';
import { SeriesModule } from '../series/series.module';

@Module({
  controllers: [SearchController],
  imports: [MoviesModule, SeriesModule],
  providers: [SearchService],
})
export class SearchModule {}
