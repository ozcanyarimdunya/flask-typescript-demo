from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/people')
def people():
    data = {
        'firstname': 'Ozcan',
        'lastname': 'Yarimdunya',
        'age': 24,
        'companies': [
            'Ankaway Companies Group',
            'Huawei Technologies'
        ]
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
