import { Module } from '@nestjs/common';
import { MainService } from './main.service';
import { MainController } from './main.controller';
import { MoviesModule } from '../movies/movies.module';
import { SeriesModule } from '../series/series.module';

@Module({
  controllers: [MainController],
  providers: [MainService],
  imports: [MoviesModule, SeriesModule],
})
export class MainModule {}
