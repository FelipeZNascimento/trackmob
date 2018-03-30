import React, { Component } from 'react';
import logo from './trackmob.png';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<img src={logo} className="Header-logo" alt="logo" />
			</div>			
		);
	}
}

export default Header;
