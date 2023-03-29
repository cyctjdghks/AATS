import pymysql

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

cursor = conn.cursor()
cursor.execute("describe user_attendance_start")
# databases = cursor.fetchall()
columns = [column[0] for column in cursor.fetchall()]
print(columns)
## INSERT 문

## 데이터 확인
cursor.execute("select * from user_attendance_start")
for row in cursor.fetchall():

    print(row)


class_name = 'JaeHyeon_worker'
# 슬라이싱 끝에 워커인지 유저인지 파악하기 위함
print(class_name.split('_')[1])
if class_name.split('_')[1] == 'user':
    sql = "UPDATE user SET user_status = %s WHERE user_id = %s"
    val = (1, class_name.split('_')[0])
    cursor.execute(sql, val)
    conn.commit()
elif class_name.split('_')[1] == 'worker':
    sql = "UPDATE worker SET worker_status = %s WHERE worker_id = %s"
    val = (0, class_name.split('_')[0])
    cursor.execute(sql, val)

    conn.commit()
cursor.execute("select * from worker")
for row in cursor.fetchall():
    print(row)

conn.close()
