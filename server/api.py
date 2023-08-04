from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/api/hello')
def hello():
    return jsonify({"message": "Hello from Flask!"})

# Flask 앱을 Serverless 함수로 래핑


def handler(request, response):
    app(request.environ, response.start_response)
