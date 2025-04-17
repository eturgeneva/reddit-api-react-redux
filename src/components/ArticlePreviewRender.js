import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ArticlePreviewRender(props) {
    const dataToRender = props.dataToRender;
    console.log('dataToRender', dataToRender);

    // function handleClick(articleUrl) {
    //     props.redditClient.fetchSelectedArticle(articleUrl);
    // }

    return (
        <>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                    <Link to={`${dataPiece.data.id}`}>
                        <div className="article" key={index} >
                            <div>{dataPiece.data.author}</div>
                            <div>Permalink: {dataPiece.data.permalink}</div>
                            <div>{dataPiece.data.subreddit}</div>
                            <div>Thumbnail: {dataPiece.data.thumbnail}</div>
                            {/* {!dataPiece.data.media_metadata && <img className="articleThumbnail" src={dataPiece.data.thumbnail}></img>} */}
                            {/* {!dataPiece.data.media_metadata && <img className="articleImage" src={dataPiece.data.url}></img>} */}
                            {dataPiece.data.preview?.images && <img className="articleImage" src={dataPiece.data.preview.images[0].source.url.replaceAll('&amp;', '&')}></img>}
                            {dataPiece.data.media_metadata && <img src={Object.values(dataPiece.data.media_metadata)[0].p[0].u.replaceAll('&amp;', '&')}/>}
                            <div>Upvotes: {dataPiece.data.ups}</div>
                            <div>Downvotes: {dataPiece.data.downs}</div>
                            <div>Comments: {dataPiece.data.num_comments}</div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}