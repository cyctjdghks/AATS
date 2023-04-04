import { useEffect, useRef } from "react";
import classes from "./Modal.module.css";

const Modal = ({
  setModalOpen,
  content,
  number,
  solutionName,
  solutionSubName,
  hashtag,
  colors,
  img,
}) => {
  // 모달 스크롤바 막기
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  const color1 = colors.color1;

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  return (
    <div className={classes.modalBackGround} onClick={closeModal}>
      <div
        className={classes.container}
        ref={modalRef}
        style={{ color: color1, borderLeft: `${color1} 15px solid`} }
      >
        <div className={classes.containerLeft}>
          <div className={classes.TitleBox}>
            <h3 className={classes.number}>{number}</h3>
            <p className={classes.solutionName}>{solutionName}</p>
            <p className={classes.solutionSubName}>{solutionSubName}</p>
            <p className={classes.hashtag}>{hashtag}</p>
            <div className={classes.contentBox}>
              <p className={classes.content}>{content}</p>
            </div>
          </div>
        </div>
        <div className={classes.center}>
          <div className={classes.imgWrapper}>
            <img src={img} alt="이미지" className={classes.solutionImg} />
          </div>
        </div>
        <button
          className={classes.close}
          onClick={closeModal}
          style={{ backgroundColor: color1 }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
