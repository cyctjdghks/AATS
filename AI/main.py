from flask import Flask, render_template, Response

from flask_cors import CORS
import pymysql
import certifi as ce
from Ivcam import generate_frames_IP_NUM1, generate_frames_IP_NUM2, generate_frames_IP_NUM3, generate_frames_IP_NUM4

print(ce.__version__)

# MariaDB connection 정보 입력
host = 'j8d102.p.ssafy.io'
port = 3306
user = 'root'
password = 'wjdtlsdjqtwh102'
database = 'd102'

# MariaDB 연결
conn = pymysql.connect(
    host=host,
    port=port,
    user=user,
    password=password,
    database=database
)

# Connection이 잘 되었는지 확인
if conn:
    print("MariaDB에 접속되었습니다.")
else:
    print("MariaDB에 접속할 수 없습니다.")

app = Flask(__name__)

CORS(app)  # 모든


@app.route('/ai')
def index():
    return render_template('index.html')


@app.route('/ai/video_feed_IP1')
def video_feed_IP1():
    return Response(generate_frames_IP_NUM1(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/ai//video_feed_IP2')
def video_feed_IP2():
    return Response(generate_frames_IP_NUM2(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/ai//video_feed_IP3')
def video_feed_IP3():
    return Response(generate_frames_IP_NUM3(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/ai//video_feed_IP4')
def video_feed_IP4():
    return Response(generate_frames_IP_NUM4(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8083, debug=True)
