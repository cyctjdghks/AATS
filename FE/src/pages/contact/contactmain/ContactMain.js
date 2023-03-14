import classes from "./ContactMain.module.css";
const ContactMain = () => {
    return (
        <div className={classes.pagebox}>
            <div className={classes.titlebox}>
                <h1>1:1 문의하기</h1>
                <h3>문의사항이 있으시면 다음을 기재해주시거나 전화 주시면 빠르게 상담 가능합니다.</h3>
            </div>
            <hr className={classes.hr}/>
            <br /><br />
            <div className={classes.mainbox}>
                <div className={classes.contentbox}>
                    <div className={classes.contentboxone}>
                        <label>
                            <p>이름</p>
                            <input type="text" placeholder="Your Name(required)" />
                        </label>
                        <label>
                            <p>휴대폰 번호</p>
                            <input type="text" placeholder="Your Number(required)" />
                        </label>
                        <label>
                            <p>이메일</p>
                            <input type="text" placeholder="Your Email(required)" />
                        </label>
                        <label >
                            <p>제목</p>
                            <input type="text" placeholder="Subject" />
                        </label>
                    </div>
                    <div className={classes.contentboxtwo}>
                        <label>
                            <p>내용</p>
                            <input type="content" placeholder="Your Message" />
                        </label>
                    </div>
                </div>
                <div className={classes.imgbox}>
                    <h3>CONTACT US</h3>
                    <p className={classes.imgemail}>SSAFY.D102@ssafy.com</p>
                    <p className={classes.imgcontetnt}>D102조는 모두의 일상을 더 나은 방향으로 바꾸기위해
                        많이 많이 엄청 노력합니다. </p>
                    
                </div>
              
            </div>
        </div>
        
    );
};

export default ContactMain;