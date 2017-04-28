var Forum = React.createClass({

	getInitialState: function() {

		return {
			allAnswers: {
				"1": {
					body: "dassdasadsadsadas",
					correct: false
				},
				"2": {
					body: "dassdasadsadsadas",
					correct: false
				},
				"3": {
					body: "dassdasadsadsadas",
					correct: false
				}
			}
		}
	},

	render: function() {
		
		return (
			
			<div>
				<ForumHeader/>
				
				<div className="container">
					<ForumQuestion/>
					<hr />
					<ForumAnswers allAnswers={ this.state.allAnswers }/>
					<hr />
					<h4>Add an answer</h4>
					<ForumAddAnswer/>
				</div>
			</div>

		);
		
	}


});