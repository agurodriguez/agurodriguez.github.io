import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Terminal } from 'react-window-ui';

import Bashme from 'react-bashme';
import { Json } from 'react-bashme/dist/providers';

import './style.css';

class App extends Component {

	render() {
		return (
			<div className='content'>
				<div className='flex-center-h'>
					<header>
						<h1>agurodriguez</h1>
						<span>#coder #entrepreneur #optimist #dreamer</span>
					</header>
				</div>
				<div className='flex-center flex-grow'>
					<div style={{ width: '100%', height: '100%', maxWidth: 1024, maxHeight: 512, margin: 'auto' }}>
						<Terminal id='terminal'>
							<Bashme
								providers={[
									new Json(require('../../data/agurodriguez.json'))
								]}
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
