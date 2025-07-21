import React from 'react';

export default function CommentRender({ dataToRender, depth = 0 }) {
    // const dataToRender = props.dataToRender;
    console.log('comments to render', dataToRender);

    return (
        <div className={`articleComments depth-${depth}`}>
            {dataToRender && dataToRender.map((dataPiece, index) => {
                return (
                    <div 
                        className={`comment ${depth > 0 ? 'reply' : ''}`} 
                        key={index}
                        style={{
                            marginLeft: `${depth * 0.4}rem`,
                            marginTop: '1.5rem',
                            // backgroundColor: `hsl(210, 100%, ${95 - depth * 5}%)`,
                            paddingLeft: '1rem',
                            paddingTop: '1rem',
                            borderLeft: '1px solid #ccc',
                            borderTop: '1px solid #ccc',
                            borderRadius: '10px 0 0 0',
                            // background: 'linear-gradient(rgb(114, 114, 114), rgb(187, 187, 187))',
                            // boxShadow: '2px 2px 10px #ccc'
                        }}>
                            <div className="commentAuthor"><span>{dataPiece.data.author}</span> wrote:</div>
                            <div>Comment: {dataPiece.data.body}</div>
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

// export default function CommentRender(props) {
//     const dataToRender = props.dataToRender;
//     console.log('comments to render', dataToRender);

//     return (
//         <div className="articleComments">
//             {dataToRender && dataToRender.map((dataPiece, index) => {
//                 return (
//                     <div className="comment" key={index}>
//                         <div>Author: {dataPiece.data.author}</div>
//                         <div>Comment: {dataPiece.data.body}</div>
//                         {dataPiece.data.replies && dataPiece.data.replies.data.children && 
//                             <CommentRender dataToRender={dataPiece.data.replies.data.children}/>
//                         }
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }