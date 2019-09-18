import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { FaGithub } from 'react-icons/fa';
import { Terminal } from 'react-window-ui';

import { GitHub, Json } from 'bashme';
import Bashme from 'react-bashme';

import './style.css';

class App extends Component {

	constructor(props) {
		super(props);

		ReactGA.initialize('UA-126193327-1');
	}

	render() {
		ReactGA.pageview(window.location.pathname + window.location.search);

		return (
			<div className='content'>
				<div className='flex-center-h'>
					<header>
						<h1>agurodriguez</h1>
						<span>#coder #entrepreneur #optimist #dreamer #remoter</span>
					</header>
				</div>
				<div className='flex-center flex-grow'>
					<div style={{ width: '100%', height: '100%', maxWidth: 1024, maxHeight: 512, margin: 'auto' }}>
						<Terminal id='terminal'>
							<Bashme
								options={{
									welcomeMessage: 'Welcome to my digital home. \r\nPlease type `help` to get started.'
								}}
								providers={[
									new Json(require('../../data/agurodriguez.json')),
									new GitHub('agurodriguez'),
								]}
								onInput={(command) => {
									ReactGA.event({ category: 'bashme.command', action: command })}
								}
							/>
						</Terminal>
					</div>
				</div>
				<div className='flex-center-h'>
					<footer>
						<ul>
							<li><a href="https://github.com/agurodriguez" alt="GitHub"><FaGithub /></a></li>
							<li><a href="mailto:me@agurodriguez.net">Contact</a></li>
						</ul>
						<br />
						coded with a lot of ❤ in <span aria-label='Uruguay' role='img'>🇺🇾</span>
					</footer>
				</div>
			</div>
		);
	}
	
}

export default App;
