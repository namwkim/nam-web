from server import app, socketio
# app = server.app
# socketio = server.socketio

#from server import app, socketio
from flask import request
@socketio.on('connect', namespace='/main')
def connected():
    ip = request.remote_addr
    app.logger.info("<<<<<<<<< socketio connected ("+ip+") >>>>>>>>>>")
    emit('my response', {'data': 'Connected'})


@socketio.on('disconnect', namespace='/test')
def disconnected():
    app.logger.info('Client disconnected')
