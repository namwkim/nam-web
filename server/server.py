import sys, os
from flask import Flask, render_template, request, send_from_directory, jsonify, logging
from flask.ext.socketio import SocketIO
from werkzeug import secure_filename
from logging.handlers import RotatingFileHandler

app = Flask(__name__)
# app.config.from_object('config')
#app.config.from_pyfile('config.py')
app.config.update(dict(
    CLIENT_FOLDER='../client',
    DEBUG = True, # Turns on debugging features in Flask
    DEV_PORT = 3000,
    PRD_PORT = 4000
    # BCRYPT_LEVEL = 12 # Configuration for the Flask-Bcrypt extension
    # SECRET_KEY = xxx #  should define this in your instance folder
))

socketio = SocketIO(app)
# logging into a file for production
# handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=1)
# handler.setLevel(logging.INFO)
# app.logger.addHandler(handler)

# app.logger.info(app.config['CLIENT_FOLDER'])
@app.route('/')
def index():
    return render_template("index.html")


# This is required by zone.js as it need to access the
# "main.js" file in the "ClientApp\app" folder which it
# does by accessing "<your-site-path>/app/main.js"
@app.route('/app/<path:filename>')
def client_app_folder(filename):
    return send_from_directory(os.path.join(app.config['CLIENT_FOLDER'], "app"), filename)

# Custom static data
@app.route('/assets/<path:filename>')
def client_assets_folder(filename):
    return send_from_directory(os.path.join(app.config['CLIENT_FOLDER'], "assets"), filename)

@app.route('/node_modules/<path:filename>')
def client_node_modules_folder(filename):
    return send_from_directory(os.path.join(app.config['CLIENT_FOLDER'], "node_modules"), filename)

@app.route('/<path:filename>')
def client_folder(filename):
    return send_from_directory(app.config['CLIENT_FOLDER'], filename)

if __name__ == '__main__':
    if len(sys.argv)==2 and sys.argv[1]=="-production":
        port = app.config["PRD_PORT"]
    else:
        port = app.config["DEV_PORT"]
    socketio.run(app=app, host='0.0.0.0', port=port)
