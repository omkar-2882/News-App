import React from 'react'

const NewsItem = (props) => {
        let { title, description, imgUrl, newsUrl, author, date, source } = props
        return (
            <div className='my-3 mx-1'>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }
                    }>
                        <span className="badge rounded-pill bg-danger" style={{padding:'8px'}}>{source.name}<span className="visually-hidden">unread messages</span></span>

                    </div>

                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} ...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem