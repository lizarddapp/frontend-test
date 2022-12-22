import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useComments, usePost } from "../hooks/usePost";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { data: post } = usePost(id || "");
  const { data: comments } = useComments(id || "");
  const filteredComments = useMemo(() => {
    if (text) {
      const reg = new RegExp(text, "i");
      return comments?.filter(
        (el) =>
          el.name.search(reg) >= 0 ||
          el.body.search(reg) >= 0 ||
          el.email.search(reg) >= 0
      );
    } else return comments;
  }, [text, comments]);
  return (
    <div id="sidebar">
      <h1 onClick={() => navigate("/")}>
        <a> {`< Back`}</a>
      </h1>
      <h2>Post {id}</h2>
      <div className="card">
        <div>
          <b>{post?.title}</b>
        </div>
        <div>{post?.body}</div>
      </div>
      <h2>Comments</h2>
      <div className="comment">
        {filteredComments?.map((comment) => (
          <>
            <div>
              <b>{comment.name}</b>
            </div>
            <small>{comment?.email}</small>
            <div>{comment?.body}</div>
            <hr />
          </>
        ))}
      </div>
      <div>
        <input
          placeholder="Search Comment by (Name, Email, Body)"
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
      </div>
    </div>
  );
}

export default Post;
