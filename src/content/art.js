// Interests.js

import React, {Component} from 'react';
import nero1 from '../images/Nero.jpeg';
import '../art.css';
import nero2 from '../images/Statue_of_Nero_as_a_boy.jpg';


class Art extends Component {
	render() {
		return (
			<div>
				<h2>Art</h2>
				<div>
					<img src={nero1} alt={'Nero bust'} class={'imgPadding'}/>
					<p class={'imgText'}> Bust of Nero at the Capitoline Museum, Rome.

					</p>
				</div>
				<div>
					<img src={nero2} alt={'Nero as a boy'} class={'imgPadding'}/>
					<p class={'imgText'}> Nero as a boy.

					</p>
				</div>
			</div>


				);
				}
				}

				export default Art;
