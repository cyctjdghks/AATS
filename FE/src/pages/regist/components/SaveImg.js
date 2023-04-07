import classes from "./SaveImg.module.css";

const SaveImg = ({onSubmit, filename, ...rest}) => {
  return (
    <div className={classes.filebox}>
        <form onSubmit={onSubmit}>
          <label htmlFor="file">파일찾기</label>
          <input type="file" id="file" name="files" multiple />
          <input className={classes.uploadName} placeholder="파일 업로드 후 저장을 눌러주세요" defaultValue={filename} disabled={true}/>
          <button type="submit"> 저장</button>
        </form>
      </div>
  );
};

export default SaveImg;
