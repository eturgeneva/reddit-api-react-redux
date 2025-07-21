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

    return (
        <div className={`articleComments depth-${depth}`}>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                    <div 
                        className={`comment ${depth > 0 ? 'reply' : ''}`} 
                        key={index}
                        style={{
                            marginLeft: `${depth * 0.4}rem`,
                            marginTop: '1rem',
                            paddingLeft: '1rem',
                            borderRadius: '10px',
                            backgroundColor: 'hsla(210, 100%, 95%, 0.2)'
                        }}>
                            <div className="commentAuthor"><span>{dataPiece.data.author}</span> wrote:</div>
                            <div className="commentText">{dataPiece.data.body}</div>
                            {dataPiece.data.replies?.data?.children?.length > 0 && (
                                <CommentRender 
                                    dataToRender={dataPiece.data.replies.data.children}
                                    depth={depth + 1}
                                />
                            )}
                    </div>
                )
            })}
        </div>
    )
}