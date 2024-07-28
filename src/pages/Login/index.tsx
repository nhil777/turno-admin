import { SubmitHandler } from 'react-hook-form';
import { FormContainer, FormTitle } from './styles';
import { LoginForm } from '../../components/LoginForm';
import { LoginData } from '../../components/LoginForm/types';
import { login } from '../../services/Auth';

export const Login = () => {
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const { email, password } = data;

    const success = await login({ email, password });

    if (success) {
      alert('success')
    } else {
      alert('Login failed');
    }
  };

  return (
    <FormContainer>
        <FormTitle>Turno Admin</FormTitle>
        <LoginForm onSubmit={onSubmit} />
    </FormContainer>
  );
};
