Nam's Website Boilerplate using SemanticUI, Angularjs, and FlaskServer.
-------

Install
-------
- Dependencies : node, npm, grunt, bower, python, pip
  * This app builds on flask-python-server, angularjs, paperjs
- Run following commands.
```
pip install -r requirements.txt
npm install
grunt build
grunt run
```
- Go to: localhost:6353.
- Optional, but recommended way. see: [https://goo.gl/EaCMLJ])
```
pip install virtualenv
pip install virtualenvwrapper
export WORKON_HOME=~/Envs
mkdir -p $WORKON_HOME
source /usr/local/bin/virtualenvwrapper.sh
mkvirtualenv hyecoo

(hyecoo)$ pip install -r requirements.txt
npm install
grunt build
grunt run
```
