import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePost";
function List() {
  const { data } = usePosts();
  const navigate = useNavigate();
  return (
    <>
      <div id="sidebar">
        <h2>Posts</h2>
        <nav>
          <ul>
            {data?.map((el) => (
              <li>
                <a className="card" onClick={() => navigate(`/post/${el.id}`)}>
                  <div>
                    <b> {el.title}</b>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default List;
