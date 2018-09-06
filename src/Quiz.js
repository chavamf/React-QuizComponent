import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quiz_position: 1
		};
	}
	
	render() {
		return (
			<React.Fragment>
				<QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
			</React.Fragment>
		);
	}
}

export default Quiz;