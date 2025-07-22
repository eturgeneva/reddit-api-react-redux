import React from 'react';

export default function CommentRender({ dataToRender, loading, depth = 0 }) {
    console.log('comments to render', dataToRender);

    if (loading) {
        return (
            <div className="loadingContainer">
                <div className="spinner"></div>
                <div>Loading comments...</div>
            </div>
        );
    }

    const flattenComments = (comments, currentDepth = 0, result =[]) => {
        comments.forEach(comment => {
            result.push({ ...comment, _depth: currentDepth });

            const replies = comment?.data?.replies?.data?.children;
            if (replies && replies.length > 0) {
                flattenComments(replies, currentDepth + 1, result);
            }
        });
        return result;
    }

    const flatComments = flattenComments(dataToRender);

    // Stair-stepped rendering:
    return (
        <div className={`articleComments depth-${depth}`}>
            {flatComments.map((comment, index) => (
                <div
                    key={index}
                    className="comment"
                    style={{
                        marginTop: '1rem',
                        marginLeft: `${comment._depth * 1.8}rem`,
                        padding: '1rem',
                        borderRadius: '10px',
                        // backgroundColor: `rgba(120, 142, 223, ${comment._depth * 0.1})`,
                        backgroundColor: `rgba(120, 142, 223, ${Math.max(0.25 - comment._depth * 0.05, 0.05)})`,
                    }}>
                            <div className="commentAuthor"><span>{comment.data.author}</span> wrote:</div>
                            <div className="commentText">{comment.data.body}</div>
                    </div>
                )
            )}
        </div>
    )

    // Nested rendering:
    // return (
    //     <div className={`articleComments depth-${depth}`}>
    //         {dataToRender && dataToRender.map((dataPiece, index) => {
    //             return (
    //                 <div 
    //                     className={`comment ${depth > 0 ? 'reply' : ''}`} 
    //                     key={index}
    //                     style={{
    //                         marginLeft: `${depth * 0.4}rem`,
    //                         marginTop: '1rem',
    //                         paddingLeft: '1rem',
    //                         borderRadius: '10px',
    //                         backgroundColor: 'rgba(120, 142, 223, 0.2)'
    //                     }}>
    //                         <div className="commentAuthor"><span>{dataPiece.data.author}</span> wrote:</div>
    //                         <div className="commentText">{dataPiece.data.body}</div>
    //                         {dataPiece.data.replies?.data?.children?.length > 0 && (
    //                             <CommentRender 
    //                                 dataToRender={dataPiece.data.replies.data.children}
    //                                 depth={depth + 1}
    //                             />
    //                         )}
    //                 </div>
    //             )
    //         })}
    //     </div>
    // )
}
