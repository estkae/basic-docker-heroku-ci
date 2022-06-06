import flask 
from flask import jsonify
from os import environ  
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True
env_port = 5000
if environ.get('PORT') is not None: env_port =  environ.get('PORT')

ninjaTurtles = [
    {'id': 0, 'name': '-Raffaello-'},
    {'id': 1, 'name': '-Donatello-'},
    {'id': 2, 'name': '-Michelangelo-'},
    {'id': 3, 'name': '-Leonardo-'},
]

@app.route('/', methods=['GET'])
def home():
    return "<h1>Simple api test</h1><p>Type /api/ninjaTurtles on the URL to get some data</p>"

@app.route('/api/ninjaTurtles', methods=['GET'])
def api():
    return jsonify(ninjaTurtles)

app.run(host="0.0.0.0", port=env_port)