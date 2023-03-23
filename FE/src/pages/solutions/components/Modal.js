import { useEffect, useRef } from "react";
import classes from "./Modal.module.css";

const Modal = ({ setModalOpen, id, title, content, writer, number }) => {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef < HTMLDivElement > null;

  return (
    <div className={classes.container}>
      <div className={classes.containerLeft}>
      <h3 className={classes.number}>{number}</h3>
      
      </div>
      <div className={classes.containerRight}>
        <img src="" alt="이미지" />
        <button className={classes.close} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
