import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import "./Navbar.css";


export const Nav = styled.nav`
background: rgb(19, 19, 17);
height: 95px;
display: flex;
margin-bottom: -10px;
justify-content: flex-start;
font-family: 'Poppins', sans-serif;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #fff;
}
`;



export const NavMenu = styled.div`
display: flex;
align-items: center;

/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

