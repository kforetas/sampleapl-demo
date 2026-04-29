# -*- coding: utf-8 -*-
from flask import Flask, render_template

app = Flask(__name__)

# Root
@app.route("/")
def index():
    return render_template('index.html', title='SampleAPL')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8088, debug=True)
