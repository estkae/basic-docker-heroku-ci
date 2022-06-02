FROM python
WORKDIR /path
ENV PORT=$port
COPY requirements.txt .
RUN pip install -r requirements.txt 

COPY . .
EXPOSE $port
CMD ["python","app.py"]
