from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ruan')
def home():
    return '<h1>bitch</h1>'


if __name__ == '__main__':
    app.run(debug=True)
