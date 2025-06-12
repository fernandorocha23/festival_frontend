import NewsArticle from "./NewsArticle.jsx";


function News({news}){
    return(
        <section id="noticias">
            <h2>Principais Notícias</h2>
            <div className="noticias-container">
                {news.map( (a, index) => <NewsArticle
                    key={index}
                    headline={a.headline}
                    news_text={a.news_text}
                    image_path={a.image_path}
                />)}
            </div>
        </section>
    )
}
export default News;