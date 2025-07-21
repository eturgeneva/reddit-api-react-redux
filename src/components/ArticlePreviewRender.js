import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSubreddit, removeSubreddit, selectedSubreddits } from '../app/subredditsSlice';

export default function ArticlePreviewRender(props) {
    const dataToRender = props.dataToRender;
    console.log('dataToRender', dataToRender);
    const dispatch = useDispatch();
    const subreddits = useSelector(selectedSubreddits);
    console.log('subreddits list', subreddits);

    function follow(subreddit) {
        dispatch(addSubreddit(subreddit));
    }

    function unfollow(subreddit) {
        dispatch(removeSubreddit(subreddit));
    }

    return (
        <>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                        <div className="article" key={index} >
                            <div className="articleHeader">
                                <h3 className="articleSubreddit">r/{dataPiece.data.subreddit}</h3>

                                {subreddits.subreddits.includes(dataPiece.data.subreddit) ?
                                    // <button onClick={() => unfollow(dataPiece.data.subreddit)} className="followButton unfollowButton">💔 Unfollow {dataPiece.data.subreddit}</button>
                                    <button onClick={() => unfollow(dataPiece.data.subreddit)} className="followButton unfollowButton">✖ Unfollow r/{dataPiece.data.subreddit}</button>
                                    :
                                    <button onClick={() => follow(dataPiece.data.subreddit)} className="followButton">💗 Follow r/{dataPiece.data.subreddit}</button>
                                }
                            </div>

                            <div className="articleAuthor">By <span>{dataPiece.data.author}</span></div>
                            <div className="articleTitle">{dataPiece.data.title}</div>

                            <Link to={`${dataPiece.data.id}`}>
                                {dataPiece.data.preview?.images && <img className="articleImagePreview" src={dataPiece.data.preview.images[0].source.url.replaceAll('&amp;', '&')}></img>}
                            </Link>

                             <Link to={`${dataPiece.data.id}`}>
                                {dataPiece.data.media_metadata && <img className="articleImagePreview" src={Object.values(dataPiece.data.media_metadata)[0].p[0].u.replaceAll('&amp;', '&')}/>}
                            </Link>

                            <div className="articleDetails">
                                <Link to={`${dataPiece.data.id}`}>
                                    <button className="readMoreButton">Read more</button>
                                </Link>
                                <div className="articleStats">
                                    <div>👍 {dataPiece.data.ups}</div>
                                    <div>👎 {dataPiece.data.downs}</div>

                                    <Link to={`${dataPiece.data.id}`}>
                                        <div>💬{dataPiece.data.num_comments}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                )
            })}
        </>
    )
}