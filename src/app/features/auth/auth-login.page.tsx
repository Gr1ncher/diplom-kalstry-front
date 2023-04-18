import { Button, Col, Container, Flex, Input, Row } from '@/components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginAuthAction } from './auth.actions';

export const AuthLoginPage: FC<unknown> = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();

  const handleFormSubmit = ({ email, password }: { email: string; password: string }): void => {
    dispatch(loginAuthAction.started({ email, password }));
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Flex flexDirection="column">
          <Row>
            <Col>
              <Input
                label="Email"
                placeholder="Введите вашу электронную почту"
                {...register('email', { required: true })}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input label="Пароль" placeholder="Введите ваш пароль" {...register('password', { required: true })} />
            </Col>
          </Row>
          <Row mt="2rem" mb="1.6rem">
            <Col>
              <Button type="submit" fullSize>
                Войти
              </Button>
            </Col>
          </Row>
        </Flex>
        <Flex flexDirection="column"></Flex>
      </form>
    </Container>
  );
};
