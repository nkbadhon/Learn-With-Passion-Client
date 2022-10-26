import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaStudiovinari, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, providerLogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        providerLogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container >
                <Navbar.Brand> <Link style={{ textDecoration: 'none' }} to='/' ><FaStudiovinari></FaStudiovinari> Learn With Passion</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Link className='mx-2' style={{ textDecoration: 'none' }} to={`/`}>Home</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none' }} to={`/coursedetails/:id`}>Courses</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none' }} to={`/`}>FAQ</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none' }} to={`/`}>Blogs</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none' }} to={`/registration`}>Registration</Link>
                    </Nav>
                    <Nav>
                        <Link className='mx-2' style={{ textDecoration: 'none' }} to={`/`}>{
                            user?.uid ? <span>
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button variant="info" onClick={handleLogOut}>Logout</Button>

                                </>
                            </span>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/registration'>Registrer</Link>
                                </>

                        }</Link>
                        <Link className='mx-2' style={{ textDecoration: 'none' }} eventKey={2} to={`/`}>
                            {

                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                    : <FaUser></FaUser>

                            }


                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;