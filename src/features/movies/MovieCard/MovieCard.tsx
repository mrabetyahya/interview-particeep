import { ThumbDownAltOutlined, ThumbUpAltOutlined, Delete } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import CustomCard from '../../../components/Cards/CustomCard';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useAppDispatch } from '../../../redux/hooks';
import { BarStyle, StackStyle, TitleStyle, TypographyStyle } from './MovieCard.style';
import { MovieCardProps } from './MovieCard.type';
import {
  addMovieDislike,
  addMovieLike,
  deleteMovieById,
} from '../../../redux/slices/movies/moviesSlice';
import { shortenNumber } from '../../../utils/helpers/number.helpers';

function MovieCard({ movie }: MovieCardProps) {
  const { id, category, dislikes, likes, title } = movie;
  const [percentageLikes, setPercentageLikes] = useState(0);
  const [percentageDislikes, setPercentageDislikes] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    calculateBar();
  }, [movie]);

  const calculateBar = () => {
    const total = likes + dislikes;
    setPercentageLikes(Math.floor((likes / total) * 100));
    setPercentageDislikes(Math.floor((dislikes / total) * 100));
  };

  const handleLike = () => {
    dispatch(addMovieLike({ id }));
  };

  const handleDislike = () => {
    dispatch(addMovieDislike({ id }));
  };

  const handleDelete = () => {
    dispatch(deleteMovieById({ id }));
  };

  return (
    <CustomCard>
      <StackStyle spacing={2}>
        <StackStyle spacing={0}>
          <TitleStyle>{title}</TitleStyle>
          <TypographyStyle>{category}</TypographyStyle>
        </StackStyle>
        <StackStyle spacing={1}>
          <StackStyle direction="row" spacing={3}>
            <CustomButton
              text={shortenNumber(likes)}
              icon={<ThumbUpAltOutlined />}
              onClick={handleLike}
            />
            <CustomButton
              text={shortenNumber(dislikes)}
              icon={<ThumbDownAltOutlined />}
              onClick={handleDislike}
            />
          </StackStyle>
          <StackStyle width={'100%'} direction={'row'}>
            <BarStyle background={'green'} width={`${percentageLikes}%`} />
            <BarStyle background={'red'} width={`${percentageDislikes}%`} />
          </StackStyle>
          <CustomButton
            text={'Supprimer'}
            icon={<Delete sx={{ color: 'red' }} />}
            style={{ color: 'red' }}
            onClick={handleDelete}
          />
        </StackStyle>
      </StackStyle>
    </CustomCard>
  );
}

export default MovieCard;
