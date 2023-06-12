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

# JSONifying and setting route for demographics_df
@app.route("/api/demographics.json")
def demoSummary():
    resultsDemo = engine.execute("SELECT * FROM Demographics")
    return jsonify([dict(x) for x in resultsDemo])

@app.route("/api/demographicsAggregate.json")
def demoAggSummary():
    resultsDemoAgg = engine.execute("SELECT * FROM DemographicsAggregate")
    return jsonify([dict(x) for x in resultsDemoAgg])

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
    app.run(debug=True)