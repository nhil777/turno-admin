import { SubmitHandler } from 'react-hook-form';
import { FormContainer, FormTitle } from './styles';
import { LoginForm } from '../../components/LoginForm';
import { LoginData } from '../../components/LoginForm/types';
import { login } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    setIsLoading(true);

    const { email, password } = data;

    login({ email, password })
      .then(() => navigate('/'))
      .catch(error => {
        const { response } = error;

        if (response.status === 401) {
          alert('Invalid credentials');
          return;
        }

        alert(response.statusText);
      })
      .finally(() => setIsLoading(false));
  };

  return isLoading ? <p>Loading</p> : (
    <FormContainer>
      <FormTitle>Turno Admin</FormTitle>
      <LoginForm onSubmit={onSubmit} />
    </FormContainer>
  );
};
