import image from "../assets/breakingnews.jpg";

const NewsItem = ({title, description, urlToImage, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={urlToImage ? urlToImage : image} style={{height:"200px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0,50) : "Title not available at this moment !!"}</h5>
        <p className="card-text">{description ? description.slice(0,90) : "Sorry, we couldn't retrieve the description for this news article at the moment. Please check back later for updates or visit our site for more information !!"}</p>
        <a href={url} className="btn btn-primary">Read more</a>
    </div>
    </div>
  )
}

export default NewsItem
