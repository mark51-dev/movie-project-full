import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { MoviesService } from '../movies/movies.service';
import { SeriesService } from '../series/series.service';

@Injectable()
export class SearchService {
  constructor(private moviesService: MoviesService, private seriesService: SeriesService) {
  }
  create(createSearchDto: CreateSearchDto) {
    return 'This action adds a new search';
  }

  findAll() {
    return `This action returns all search`;
  }

  findAllByQueryParams(type: 'movie' | 'series') {
    if (type === 'movie') {
      return this.moviesService.findAll();
    } else {
      return this.seriesService.findAll();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} search`;
  }

  update(id: number, updateSearchDto: UpdateSearchDto) {
    return `This action updates a #${id} search`;
  }

  remove(id: number) {
    return `This action removes a #${id} search`;
  }
}
