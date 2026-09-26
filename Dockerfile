# FROM python:3.9
# FROM registry.access.redhat.com/ubi8/python-39
# ベースイメージはパイプラインから digest 指定で差し替え可能（パッチ適用デモ用）
ARG BASE_IMAGE=registry.access.redhat.com/ubi9/python-39:latest
FROM ${BASE_IMAGE}

ARG project_dir=/app/

COPY . $project_dir

WORKDIR $project_dir

RUN pip install -r requirements.txt

CMD ["python", "app.py"]
