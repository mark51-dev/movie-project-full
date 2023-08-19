import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { MoviesService } from 'src/movies/movies.service';
import { SeriesService } from 'src/series/series.service';

@Injectable()
export class SearchService {
  constructor(
    private moviesService: MoviesService,
    private seriesService: SeriesService,
  ) {}
  create(createSearchDto: CreateSearchDto) {
    return 'This action adds a new search';
  }

  findAll() {
    return `This action returns all search`;
  }

  findAllByQueryParams(queryParams: Record<any, any>) {
    const { type } = queryParams;
    if (type === 'movie') {
      return this.moviesService.findAll(queryParams);
    } else {
      return this.seriesService.findAll(queryParams);
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
