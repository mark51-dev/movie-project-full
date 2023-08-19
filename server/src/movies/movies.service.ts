import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}
  create(createMoviesDto: CreateMovieDto) {
    return this.movieRepository.save(createMoviesDto);
  }

  findAll(params?: Record<any, any>) {
    if (params) {
      return this.movieRepository.find({
        where: params,
      });
    }
    return this.movieRepository.find();
  }

  async findAllWithPagination({ page, limit }) {
    const res = await this.movieRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return res;
  }

  findOne(imdbId: string) {
    return this.movieRepository.findOneBy({ imdbId });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return this.movieRepository.delete(id);
  }
}
