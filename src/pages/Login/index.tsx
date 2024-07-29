import { SubmitHandler } from 'react-hook-form';
import { LoginForm } from '../../components/LoginForm';
import { LoginData } from '../../components/LoginForm/types';
import { login } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from '../../components/Spinner';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuthenticated } = useAuth();
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    setIsLoading(true);

    const { email, password } = data;

    login({ email, password })
      .then(() => {
        setIsAuthenticated(true);
        navigate('/');
      })
      .catch(error => {
        toast.error(error.response.statusText);
      })
      .finally(() => setIsLoading(false));
  };

  return isLoading ? <Spinner /> : (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <div className="text-center mb-4">
            <h1>Turno Admin</h1>
          </div>
          <LoginForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};
