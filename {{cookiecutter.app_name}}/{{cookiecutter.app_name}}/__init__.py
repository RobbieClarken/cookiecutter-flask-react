from flask import Flask, render_template


__version__ = '0.1.0'


def create_app():

    app = Flask(__name__)

    @app.route('/')
    def index():
        return render_template('index.html')

    return app
