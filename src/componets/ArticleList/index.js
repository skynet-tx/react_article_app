/**
 * Created by skynetsaa on 26.01.18.
 */
import React, {PureComponent} from 'react'
import Article from "../Article"
import './style.css'

class ArticleList extends PureComponent {
	state = {
		openArticleId: null
	}

	render () {
		const articleElements = this.props.articles.map( (article, index) =>
			<li key={article.id} className="article-list__li">
				<Article article={article}
						 onButtonClick={this.handleClick.bind(this, article.id)}
						 isOpen={this.state.openArticleId === article.id}  />
			</li>
		)

		return (
			<ul>
				{ articleElements }
			</ul>
		)
	}

	handleClick = openArticleId => {
		this.setState({
			openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
		})
	}
}

export default ArticleList