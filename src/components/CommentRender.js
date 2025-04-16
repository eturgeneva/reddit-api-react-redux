import React from 'react';

export default function CommentRender(props) {
    const dataToRender = props.dataToRender;
    console.log('comments to render', dataToRender);

    return (
        <>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                    <div className="comment" key={index}>
                        <div>Author: {dataPiece.data.author}</div>
                        <div>Comment: {dataPiece.data.body}</div>
                        {dataPiece.data.replies && dataPiece.data.replies.data.children && 
                                <CommentRender dataToRender={dataPiece.data.replies.data.children}/>
                        }
                    </div>
                )
            })}
        </>
    )
}