function NewsArticle({ headline, news_text, image_path }){
    return (
        <article>
            <img src={image_path} alt={headline}/>
            <h3>{headline}</h3>
            <p>{news_text}</p>
        </article>
    )
}
export default NewsArticle;