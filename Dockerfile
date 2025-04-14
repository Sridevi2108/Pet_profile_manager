FROM python:3.10

WORKDIR /app

COPY server.py .
COPY requirements.txt .
COPY static ./static

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python", "server.py"]
