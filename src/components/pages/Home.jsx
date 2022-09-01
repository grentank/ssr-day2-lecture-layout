import React, { useState, useEffect } from 'react';
import OnePost from '../ui/OnePost';

export default function Home({ backendPosts }) {
  const [allPosts, setAllPosts] = useState(backendPosts || []);
  const [input, setInput] = useState('');
  useEffect(() => {
    if (!window.initState) {
      fetch('/api/v1/posts')
        .then((res) => res.json())
        .then((data) => setAllPosts(data));
    }
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/v1/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllPosts((prev) => [...prev, data]);
        setInput('');
      });
  };
  const deleteHandler = (id) => {
    fetch(`/api/v1/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => setAllPosts((prev) => prev.filter((post) => post.id !== id)));
  };
  return (
    <div className="row">
      <div className="col-12">
        <form onSubmit={submitHandler}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" />
          <button type="submit" className="btn btn-info">Add Post</button>
        </form>
      </div>
      {allPosts && allPosts.map((el) => <OnePost deleteHandler={deleteHandler} key={el.id} post={el} />)}
    </div>
  );
}
