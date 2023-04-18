/* eslint-disable react/jsx-props-no-spreading */
import { Button, Col, Container, Flex, Input, Row, Typography } from '@/components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerAuthAction } from './auth.actions';

export const AuthRegisterPage: FC<unknown> = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();
  const handleFormSubmit = ({ email, password }: { email: string; password: string }): void => {
    dispatch(registerAuthAction.started({ email, password }));
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Flex flexDirection="column">
          <Row>
            <Col>
              <Input label="Email" {...register('email', { required: true })} />
            </Col>
          </Row>
          <Row mb="7rem" mt="1rem">
            <Col>
              <Input label="Password" {...register('password', { required: true })} />
            </Col>
          </Row>
        </Flex>
        <Row mb="1.6rem">
          <Col>
            <Button type="submit" fullSize>
              Зарегистрироваться
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};
