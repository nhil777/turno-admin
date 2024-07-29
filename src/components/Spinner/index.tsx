import {Spinner as BSSPinner} from 'react-bootstrap';

export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <BSSPinner animation="border" variant="primary" />
        </div>
    );
}
