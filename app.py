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

# Read in CSVs as DataFrames and load to database
causes_df = pd.read_csv("output/causes.csv")
demographics_df = pd.read_csv("output/demographics.csv")
connection = engine.connect()
causes_df.to_sql("Causes", connection, if_exists="replace")
demographics_df.to_sql("Demographics", connection, if_exists="replace")


# Set up Flask and routes
app = Flask(__name__)

# JSONifying and setting route for demographics_df
@app.route("/api/demographics.json")
def demoSummary():
    resultsDemo = engine.execute("SELECT * FROM Demographics")
    return jsonify([dict(x) for x in resultsDemo])

# JSONifying and setting route for causes_df
@app.route("/api/causes.json")
def causeSummary():
    resultsCauses = engine.execute("SELECT * FROM Causes")
    return jsonify([dict(x) for x in resultsCauses])

# Setting default "homepage" app route
@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()