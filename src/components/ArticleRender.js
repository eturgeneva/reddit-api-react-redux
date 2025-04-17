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
                        <div className="articleBody" key={index}>
                            <div>{dataPiece.data.author}</div>
                            <div>Permalink: {dataPiece.data.permalink}</div>
                            <div>{dataPiece.data.subreddit}</div>
                            {/* {!dataPiece.data.media_metadata && <img className="articleThumbnail" src={dataPiece.data.thumbnail}></img>} */}
                            {/* {!dataPiece.data.media_metadata && <img className="articleImage" src={dataPiece.data.url}></img>} */}
                            {dataPiece.data.preview?.images && <img className="articleImage" src={dataPiece.data.preview.images[0].source.url.replaceAll('&amp;', '&')}></img>}
                            <div>Upvotes: {dataPiece.data.ups}</div>
                            <div>Downvotes: {dataPiece.data.downs}</div>
                            <div>Comments: {dataPiece.data.num_comments}</div>
                            {/* <img src="https://preview.redd.it/6sl38rdona471.jpg?width=640&crop=smart&auto=webp&s=159a5bb2b3b66b4561783c8e2455d5e66fce719b"/> */}
                            {/* <img src="https://preview.redd.it/6sl38rdona471.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=95a685cc6db50974ad95f0a571b20b58ecdc29f0"/> */}
                            {dataPiece.data.media_metadata && <img src={Object.values(dataPiece.data.media_metadata)[0].p[3].u.replaceAll('&amp;', '&')}/>}
                            {/* <div>{Object.values(dataPiece.data.media_metadata)[0].p[3].u.replace('&amp;', '&')}</div> */}
                            {/* <img src="https://preview.redd.it/voj6lldona471.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=d69727f8a1195406d20e564f1a12989356d93c62"/> */}
                            {/* <img src={dataPiece.data.media_metadata[0].p[3].u}/> */}
                        </div>
                )
            })}
        </>
    )
}