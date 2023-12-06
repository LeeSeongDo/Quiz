import Axios from "axios";

import { useState, useEffect } from "react";

export default function TEST() {
  //   const apiClient = Axios.create({
  //     baseURL: "https://youtube.googleapis.com/youtube/v3/search",
  //     params: { key: "AIzaSyCPV66lZnaWhqwFZTQB4sQvDWy-e0gx550" },
  //   });
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyCPV66lZnaWhqwFZTQB4sQvDWy-e0gx550",
        q: query,
      },
    })
      .then((res) => {
        console.log(res);
        setPosts(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(posts);
  }, [query]);

  const EnterEvent = (e) => {
    if (window.event.keyCode === 13) {
      setQuery(title);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          onKeyUp={EnterEvent}
        />
        <button onClick={() => setQuery(title)}>검색하기</button>
      </div>
      {/* 유튜브 동영상 부모 div */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts?.map((dd) => {
          const link = `https://www.youtube.com/embed/${dd.id.videoId}`;
          console.log(link);
          return (
            <div>
              <iframe
                id="ytplayer"
                type="text/html"
                width="400"
                height="200"
                src={link}
                frameborder="1"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
