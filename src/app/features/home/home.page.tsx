import { FC, useEffect } from 'react';
import { Container, Flex, Typography } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleLoadingSelector } from '@ro-loading';
import { getProductsSelector } from './home.selector';
import { searchProductAction } from './home.action';

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const isSearchLoading = useSelector((state) => getSingleLoadingSelector(state, 'productSearch'));
  const products = useSelector(getProductsSelector);
  useEffect(() => {
    dispatch(searchProductAction.started());
  }, []);

  return (
    <Container>
      <Typography variant="h2">Каталог</Typography>
      <Flex>
        {isSearchLoading
          ? 'Loading...'
          : products.map((product) => {
              return (
                <Flex key={product.id} flexDirection="column" css={{ marginRight: '1.5rem' }}>
                  <img src="https://placehold.co/400x600/png" />
                  <Typography variant="body1">{product.title}</Typography>
                  <Typography variant="body1">{product.price} руб</Typography>
                </Flex>
              );
            })}
      </Flex>
    </Container>
  );
};
