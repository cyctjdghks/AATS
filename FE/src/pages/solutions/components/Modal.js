import { useEffect, useRef } from "react";
import classes from "./Modal.module.css";

const Modal = ({ setModalOpen, id, title, content, writer, number, solutionName, solutionSubName, hashtag}) => {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };



  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  return (
    <div className={classes.modalBackGround} onClick={closeModal}>

    <div className={classes.container} ref={modalRef}>
      <div className={classes.containerLeft}>
        <div className={classes.vLine}></div>
        <div>
        <div className={classes.TitleBox}>
      <h3 className={classes.number}>{number}</h3>
      <p className={classes.solutionName}>{solutionName}</p>
        <p className={classes.solutionSubName}>{solutionSubName}</p>
        <p className={classes.hashtag}>{hashtag}</p>
      </div>
      <div className={classes.contentBox}>
        <p className={classes.content}>{content}</p>
      </div>
        </div>
      </div>
      <div className={classes.containerRight}>
        <img src="" alt="이미지" />
        <button className={classes.close} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
    </div>
  );
};

export default Modal;
