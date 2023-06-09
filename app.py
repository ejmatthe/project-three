# Import libraries
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template


# Define and run engine.
engine = create_engine(f"sqlite:///data/suicides.sqlite")
Base = automap_base()
Base.prepare(autoload_with=engine)
session = Session(engine)

# Set up Flask and routes
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()