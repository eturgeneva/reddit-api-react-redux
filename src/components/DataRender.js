import React from 'react';

export default function DataRender(props) {
    const dataToRender = props.dataToRender;
    console.log('dataToRender', dataToRender);

    return (
        <>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                    <div className="article" key={index}>
                        <div>{dataPiece.data.author}</div>
                        <div>{dataPiece.data.permalink}</div>
                        <div>{dataPiece.data.subreddit}</div>
                        <div>Thumbnail: {dataPiece.data.thumbnail}</div>
                        <img className="articleThumbnail" src={dataPiece.data.thumbnail}></img>
                        <img className="articleImage" src={dataPiece.data.url}></img>
                        <div>Upvotes: {dataPiece.data.ups}</div>
                        <div>Downvotes: {dataPiece.data.downs}</div>
                        <div>Commets: {dataPiece.data.num_comments}</div>
                    </div>
                )
            })}
        </>
    )
}