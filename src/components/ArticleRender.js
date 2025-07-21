import React from 'react';

export default function ArticleRender(props) {
    const dataToRender = props.dataToRender;
    console.log('dataToRender', dataToRender);

    return (
        <>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                        <div className="articleBody" key={index}>
                            <h3 class="articleSubreddit">{dataPiece.data.subreddit}</h3>
                            <div>By {dataPiece.data.author}</div>
                            <div>{dataPiece.data.title}</div>
                            {/* <div>Permalink: {dataPiece.data.permalink}</div> */}
                            {dataPiece.data.preview?.images && <img className="articleImage" src={dataPiece.data.preview.images[0].source.url.replaceAll('&amp;', '&')}></img>}
                            {dataPiece.data.media_metadata && <img className="articleImage" src={Object.values(dataPiece.data.media_metadata)[0].p[3].u.replaceAll('&amp;', '&')}/>}
                            <div className="articleStats">
                                <div>👍 {dataPiece.data.ups}</div>
                                <div>👎 {dataPiece.data.downs}</div>
                                <div>💬 {dataPiece.data.num_comments}</div>
                            </div>
                        </div>
                )
            })}
        </>
    )
}