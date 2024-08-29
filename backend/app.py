from flask import Flask
import os
from dotenv import load_dotenv
import psycopg2

app = Flask(__name__)

hostname = 'localhost'
database = 'bunny'
username = 'postgres'
pwd = 'Bob981211'
port_id = 5432


try:
    conn = psycopg2.connect(
        host = hostname,
        dbname = database,
        user = username,
        password = pwd,
        port = port_id
    )
    conn.close()

except Exception as error:
    print(error)

@app.get("/")
def home():
    return "Hello, world"