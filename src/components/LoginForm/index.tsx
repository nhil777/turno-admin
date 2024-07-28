import { useForm } from 'react-hook-form';
import { LoginData, LoginFormI } from './types';
import { ErrorContainer, InputWrapper } from './styles';

export const LoginForm = ({ onSubmit }: LoginFormI) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
            <input
                type="email"
                placeholder="Ex: joe@doe.com"
                {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <ErrorContainer>{errors.email.message}</ErrorContainer>}
        </InputWrapper>
        <InputWrapper>
            <input
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <ErrorContainer>{errors.password.message}</ErrorContainer>}
        </InputWrapper>

        <button type="submit">Login</button>
    </form>
  );
};
