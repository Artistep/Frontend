import React from "react";
import "./styled.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <input placeholder="제목을 입력하세요" />
          </header>
          <main>
            <textarea placeholder="뮤지션, 리스너와 공유하고 싶은 내용을 작성해주세요." />
          </main>
          <footer>
            <div>
              <button className="close" onClick={close}>
                사진
              </button>
              <button className="close" onClick={close}>
                동영상
              </button>
            </div>
            <div>
              <button className="close" onClick={close}>
                게시하기
              </button>
            </div>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
