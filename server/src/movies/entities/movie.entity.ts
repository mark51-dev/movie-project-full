import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  imdbId: string;

  @Column({ nullable: true })
  posterSmall: string;

  @Column({ nullable: true })
  posterBig: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  originalName: string;

  @Column('text', { array: true })
  genres: string;

  @Column('text', { array: true, nullable: true })
  actors: string[];

  @Column('text', { array: true, nullable: true })
  translations: string[];

  @Column('text', { array: true, nullable: true })
  countries: string[];

  @Column({ nullable: true })
  videoLength: number;

  @Column('text', { array: true, nullable: true })
  directors: string[];

  @Column()
  year: number;

  @Column('decimal', { default: 0.0, precision: 6, scale: 1 })
  imdbRating: number;

  @Column('text', { array: true })
  playlist: string[];
}
