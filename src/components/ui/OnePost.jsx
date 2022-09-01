import React from 'react';

export default function OnePost({ post, deleteHandler }) {
  return (
    <>
      <div className="col-4">{post?.title}</div>
      <div className="col-4">тут было время</div>
      <div className="col-4">
        <button className="btn btn-danger" onClick={() => deleteHandler(post.id)} type="button">X</button>
      </div>
    </>
  );
}
