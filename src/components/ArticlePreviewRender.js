import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSubreddit, removeSubreddit, selectedSubreddits } from '../app/subredditsSlice';

export default function ArticlePreviewRender({ dataToRender, loading }) {
    // const dataToRender = props.dataToRender;
    console.log('dataToRender', dataToRender);
    const dispatch = useDispatch();
    const subreddits = useSelector(selectedSubreddits);
    console.log('subreddits list', subreddits);

    function ArticleSkeleton() {
        return (
            <div className="article">
                <div className="skeleton skeletonSubreddit"></div>
                <div className="skeleton skeletonTitle"></div>
                <div className="skeleton skeletonImage"></div>
                <div className="skeletonTextLine skeleton"></div>
                {/* <div className="skeletonStats">
                    <div className="skeleton skeletonStat"></div>
                    <div className="skeleton skeletonStat"></div>
                    <div className="skeleton skeletonStat"></div>
                </div> */}
            </div>
        );
    }

    if (loading) {
        // Spinner:
        // return (
        //     <div className="articleBody loadingContainer">
        //         <div className="spinner"></div>
        //         <div>Loading articles...</div>
        //     </div>
        // )

        // Skeleton:
        return (
            <>
                {Array.from({ length: 5 }).map((_, index) => (
                    <ArticleSkeleton key={index} />
                ))}
            </>
        );
    }

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
                                <div>
                                    <h3 className="articleSubreddit">r/{dataPiece.data.subreddit}</h3>
                                    <div className="articlePostedInfo">By <span className="articleAuthor">{dataPiece.data.author}</span> {formatDistanceToNowStrict(new Date(dataPiece.data.created_utc * 1000), { addSuffix: true })}</div>
                                </div>

                                {subreddits.subreddits.includes(dataPiece.data.subreddit) ?
                                    // <button onClick={() => unfollow(dataPiece.data.subreddit)} className="followButton unfollowButton">💔 Unfollow {dataPiece.data.subreddit}</button>
                                    <button onClick={() => unfollow(dataPiece.data.subreddit)} className="followButton unfollowButton">✖ Unfollow r/{dataPiece.data.subreddit}</button>
                                    :
                                    <button onClick={() => follow(dataPiece.data.subreddit)} className="followButton">💗 Follow r/{dataPiece.data.subreddit}</button>
                                }
                            </div>

                            {/* <div>By <span className="articleAuthor">{dataPiece.data.author}</span> <span className="articlePostedTime">{formatDistanceToNowStrict(new Date(dataPiece.data.created_utc * 1000), { addSuffix: true })}</span></div> */}
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