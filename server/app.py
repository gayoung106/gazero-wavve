from flask import Flask, render_template
import pymysql
import logging
import sys

app = Flask(__name__)

# app.logger.addHandler(logging.StreamHandler(sys.stdout))
# app.logger.setLevel(logging.ERROR)


@app.route('/')
def index():
    try:
        db_conn = pymysql.connect(host='127.0.0.1', user='root', password='1234',
                                  database='WavveProj', autocommit=True, cursorclass=pymysql.cursors.DictCursor)
        with db_conn:
            db_cursor = db_conn.cursor()
            db_cursor.execute("SELECT * FROM user")
            users = db_cursor.fetchall()
    except Exception as e:
        print("MySQL에 연결 중 오류 발생:", e)
        users = []  # 오류 발생 시 빈 리스트 반환

    return render_template('html/index.html', users=users)


if __name__ == "__main__":
    app.run(debug=True)
