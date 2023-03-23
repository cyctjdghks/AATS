import { useState } from "react";

import Modal from "./Modal";

import classes from "./SolutionItem.module.css";

const SolutionItem = (props) => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const number = props.number
  const solutionName = props.solutionName
  const solutionSubName = props.solutionSubName
  const hashtag = props.hashtag

  return (
    <div className={classes.solutionBox}>
      <div>
        <h3 className={classes.number}>{number}</h3>
        <p className={classes.solutionName}>{solutionName}</p>
        <p className={classes.solutionSubName}>{solutionSubName}</p>
        <p className={classes.hashtag}>{hashtag}</p>
      </div>
      <div>
        <img src={props.img} alt="" className={classes.img} onClick={showModal}/>
      </div>
      <div>
        {modalOpen 
        && 
        <Modal 
        setModalOpen={setModalOpen}
        number={number}
        solutionName={solutionName}
        solutionSubName={solutionSubName}
        hashtag={hashtag}
        />}
      </div>
    </div>
  );
};

export default SolutionItem;
