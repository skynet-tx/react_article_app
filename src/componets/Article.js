/**
 * Created by skynetsaa on 26.01.18.
 */
import React, {PureComponent} from 'react'

class Article extends PureComponent {
	state = {
		count: 0
	}

	// shouldComponentUpdate(nextProps, nextStage) {
	// 	return this.state.isOpen !== nextStage.isOpen
	// }

	componentWillMount() {
		console.log('>>> mounting');
	}

	// componentWillReceiveProps(nextProps){
	// 	console.log('>>> will receive props');
	// 	if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
	// 		isOpen: nextProps.defaultOpen
	// 	})
 	// }

	componentWillUpdate() {
		console.log('>>> component Will Update');
	}

	render () {
		const {article, isOpen, onButtonClick} = this.props
		const body = isOpen && <section className="card-text">{article.text}</section>

		return (
			<div className="card mx-auto" style={{width: '50%'}}>
				<div className="card-header">
					<h2 onClick={this.incrementCounter}>
						{article.title}
						<span className="small"> {this.state.count}</span>
						<button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
							{ isOpen ? 'close' : 'open' }
						</button>
					</h2>
				</div>
				<div className="card-body">
					<h6 className="card-subtitle text-muted">creation date: {article.date}</h6>
					{body}
				</div>
			</div>
		)
	}

	incrementCounter = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
}


export default Article