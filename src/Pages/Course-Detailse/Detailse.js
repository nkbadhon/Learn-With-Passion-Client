import React from 'react';
import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaClock, FaRegFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';



const Detailse = () => {
    const cour = useLoaderData();

    console.log(cour.id);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${cour.name}`,
        onAfterPrint: () => alert('Downloaded')

    })


    return (
        <Container ref={componentRef} style={{ width: '100%', height: window.innerHeight }} >
            <Card>
                <Card.Header className='d-flex justify-content-between mb-2'> <div className='text-primary'><Card.Title>{cour.name}</Card.Title></div>  <div><Card.Text className='text-primary'><FaClock></FaClock>
                    {cour.duraion}
                </Card.Text>
                </div><div><button onClick={handlePrint} className="btn btn-outline-light"><h4><FaRegFilePdf className='text-primary text-large'> </FaRegFilePdf></h4></button></div>
                </Card.Header>
                <Card.Img className='course_img p-4' variant="top" src={cour.photo_url} />
                <Card.Body>

                    <Card.Text>
                        <h3 className='text-primary'>Course Details of: <small>{cour.name}</small></h3>
                        {cour.description}
                    </Card.Text>

                    <Link to={`/checkout/${cour.id}`}><Button variant="primary">Get Access</Button></Link>
                </Card.Body>
            </Card>
        </Container >
    );
};

export default Detailse;

