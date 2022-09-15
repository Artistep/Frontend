import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player/lazy";
const Infinte = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  const video = [
    {
      id: "1",
      link:
        "https://www.youtube.com/watch?v=nteCoZ3ZX_Q",
    },
    {
      id: "2",
      link:
        "https://www.youtube.com/watch?v=PCMevkXVfRY",
    },
    {
      id: "3",
      link:
        "https://www.youtube.com/watch?v=BB4ygiKcchg",
    },
    {
      id: "4",
      link:
        "https://www.youtube.com/watch?v=4abiNNr-xHU",
    },
    {
      id: "5",
      link:
        "https://www.youtube.com/watch?v=1ynMF1CUdgY",
    },
    {
      id: "6",
      link:
        "https://www.youtube.com/watch?v=K0qKtn5VPUE",
    }
  ];

  const getItems = useCallback(async () => {
    setLoading(true);
    await setItems((prevState) => [...prevState, ...video]);
    console.log(video)
    //%2FDniTB4ZjftnZaM2%2B7OZIcZXSQMCjgLOm9LMHcwTGMkpolOPPlwgj3hP5wcC6XnQ6mYofnc4K%2BvLhrlolJiSEA%3D%3D
    // const res = await axios.get(
    //   `http://www.kspo.or.kr/openapi/service/olympicLibInfoService/getOlympicMovieList?serviceKey=%2FDniTB4ZjftnZaM2%2B7OZIcZXSQMCjgLOm9LMHcwTGMkpolOPPlwgj3hP5wcC6XnQ6mYofnc4K%2BvLhrlolJiSEA%3D%3D&numOfRows=1&pageNo=${page}`
    // );
    // if (res.data) {
    //   setItems((prevState) => [...prevState, res.data.response.body.items.item]);
    // }
    // console.log(res.data.response.body.items.item)
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getItems();

  }, [getItems]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  
  const handleVideo = () => {
    let height = 500;
    if(window.pageYOffset > 0) {
      height = window.pageYOffset + 500;
    }
    console.log(window.pageYOffset)
    window.scrollTo(0, height)
  }

  return (
    <div>
      dddd
      {
        items.map((i) => (
          <div ref={ref} style={{ width: "100%" , marginBottom: '30px'}}>
            <ReactPlayer
              id={i.id}
              key={i.id}
              url={i.link} // 플레이어 url
              width="100%" // 플레이어 크기 (가로)
              height="500px" // 플레이어 크기 (세로)
              playing={false} // 자동 재생 on
              muted={false} // 자동 재생 on
              controls={true} // 플레이어 컨트롤 노출 여부
              light={false} // 플레이어 모드
              pip={true} // pip 모드 설정 여부
              onEnded={() => handleVideo()} 
            ></ReactPlayer>
          </div>
        ))}
    </div>
  );
};

export default Infinte;
