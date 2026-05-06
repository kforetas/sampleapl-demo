# FROM python:3.9
FROM registry.access.redhat.com/ubi8/python-39
# FROM registry.access.redhat.com/ubi9/python-39

ARG project_dir=/app/

COPY . $project_dir

WORKDIR $project_dir

RUN pip install -r requirements.txt

CMD ["python", "app.py"]
