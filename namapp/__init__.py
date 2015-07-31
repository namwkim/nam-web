import os
from flask import Flask, render_template, request, jsonify, logging
from werkzeug import secure_filename

app = Flask(__name__, static_url_path='')
app.config.from_object('config')
app.config.from_pyfile('config.py')

@app.route('/')
def index():
    return render_template("index.html")

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port='6353') # app.debug = True  : this will reload server on code changes


# Route that will process the file upload
# @app.route('/request', methods=['POST'])
# def request():
    # Get the name of the uploaded file
    # param = request.param['paramname']
    # app.logger.error(file)
    #return jsonify(filepath = None)
