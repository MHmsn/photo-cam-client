import React from 'react';

const CommentBox = () => {

    const commentHandle = event => {
        event.preventDefault();
    }
    return (
        <div>
        <form onSubmit={commentHandle} className='flex items-center'>
            <textarea className='p-4 rounded-xl border-2' rows='5' cols='200' name='comment'/>
            <button className='btn btn-primary ml-5'>Review</button>
        </form>
        
            
        </div>
    );
};

export default CommentBox;