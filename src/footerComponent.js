import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import SubmissionForm from './submissionComponent';
import ImageFile from './images/pic3.jpg'

const FooterComponent = () => {
    return (
        <footer className='bg-dark p-2'>
            <Row className='container-fluid mt-5 mb-5'>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <img src={ImageFile} className='footerPix'  alt='Company Logo' />
                        <p className='text-light'>
                            
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                            Contact Us
                        </h3>
                        <p className='text-light'>
                            i am the best when it comes to latest news on drug usage and administration, you can contact me
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                            Address
                        </h3>
                        <p className='text-light'>
                             @ 6 Izomo Road, Ovwian, Udu Delta State Nigeria.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                            Subscribe
                        </h3>
                        < SubmissionForm />
                    </div>
                </Col>
            </Row>
        </footer>
    );
}

export default FooterComponent;