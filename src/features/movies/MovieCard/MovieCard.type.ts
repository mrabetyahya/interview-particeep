import { Movie } from '../../../types/models/Movies';

export interface MovieCardProps {
  movie: Movie;
}

export interface StackStyleProps {
  direction?: string;
  spacing?: number;
  width?: string;
  align?: string;
}

export interface BarStyleProps {
  width?: string;
  background?: string;
}
