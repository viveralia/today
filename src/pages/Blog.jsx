import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import Footer from '../components/Footer';

class Blog extends Component {
    state = {
        news: []
    }
    // Consulta a la API
    async componentDidMount(){
        this.getTheNews();        
    }
    // Getting the news via News API
    getTheNews = async () => {
        // Creating the URL
        const apiKey = 'ec4b64ed6501408088d62763ede73d6c';
        const country = 'mx';
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=science&pageSize=20&apiKey=${apiKey}`;
        // Getting the info
        const answer = await fetch(url);
        const news = await answer.json();
        // Setting the state
        this.setState({
            news: news.articles
        })        
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <NewsList
                    news={this.state.news}
                />
                <Footer/>
            </Fragment>
        );
    }
}

export default Blog;