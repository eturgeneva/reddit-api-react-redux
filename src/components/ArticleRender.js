import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import ArticleSkeleton from './ArticleSkeleton.js';

export default function ArticleRender({ dataToRender, loading }) {
    // const dataToRender = props.dataToRender;
    console.log('dataToRender', dataToRender);

    if (loading) {
        // Spinner:
        return (
            <div className="articleBody loadingContainer">
                <div className="spinner"></div>
                <div>Loading article...</div>
            </div>
        )

        // Skeleton:
        // return (
        //     <>
        //         {Array.from({ length: 5 }).map((_, index) => (
        //             <ArticleSkeleton key={index} />
        //         ))}
        //     </>
        // );
    }

    return (
        <>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                        <div className="articleBody" key={index}>
                            <h3 class="articleSubreddit">r/{dataPiece.data.subreddit}</h3>
                            {/* <div class="articleAuthor">By <span>{dataPiece.data.author}</span></div> */}
                            <div className="articlePostedInfo">By <span className="articleAuthor">{dataPiece.data.author}</span> {formatDistanceToNowStrict(new Date(dataPiece.data.created_utc * 1000), { addSuffix: true })}</div>
                            <div className="articleTitle">{dataPiece.data.title}</div>
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