import { SubmitHandler } from 'react-hook-form';
import { FormContainer, FormTitle } from './styles';
import { LoginForm } from '../../components/LoginForm';
import { FormData } from '../../components/LoginForm/types';

export const Login = () => {
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
        <FormTitle>Turno Admin</FormTitle>
        <LoginForm onSubmit={onSubmit} />
    </FormContainer>
  );
};
