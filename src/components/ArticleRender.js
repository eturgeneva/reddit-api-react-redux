import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ArticleRender(props) {
    const dataToRender = props.dataToRender;
    console.log('dataToRender', dataToRender);

    return (
        <>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                        <div key={index}>
                            <div>{dataPiece.data.author}</div>
                            <div>Permalink: {dataPiece.data.permalink}</div>
                            <div>{dataPiece.data.subreddit}</div>
                            <div>Thumbnail: {dataPiece.data.thumbnail}</div>
                            <img className="articleThumbnail" src={dataPiece.data.thumbnail}></img>
                            <img className="articleImage" src={dataPiece.data.url}></img>
                            <div>Upvotes: {dataPiece.data.ups}</div>
                            <div>Downvotes: {dataPiece.data.downs}</div>
                            <div>Comments: {dataPiece.data.num_comments}</div>
                        </div>
                )
            })}
        </>
    )
}