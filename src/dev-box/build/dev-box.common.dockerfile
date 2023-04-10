# Copyright (c) Microsoft Corporation.
# Copyright (c) 2023 xpucube.com. All rights reserved.
#
# Licensed under the MIT License.

FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

RUN apt-get -y update && \
    apt-get -y upgrade && \
    apt-get -y install --no-install-recommends apt-utils && \
    apt-get -y install \
      nano \
      vim \
      joe \
      wget \
      curl \
      jq \
      gawk \
      psmisc \
      python3 \
      python3-pip \
      python3-tz \
      python3-nose \
      python3-prettytable \
      python3-netifaces \
      python3-dev \
      python3-mysqldb \
      openjdk-8-jre \
      openjdk-8-jdk \
      openssh-server \
      openssh-client \
      git \
      parallel \
      subversion \
      bash-completion \
      inotify-tools \
      rsync \
      coreutils \
      nfs-common \
      net-tools \
      sshpass && \
    ln -s python3 /usr/bin/python && \
    mkdir -p /cluster-configuration && \
    git clone https://github.com/openxpu/pai.git && \
    python3 -m pip install --upgrade --ignore-installed pip && \
    python3 -m pip install --ignore-installed setuptools==46.1.0 && \
    python3 -m pip install pyOpenSSL jinja2 netaddr passlib PyYAML urllib3 bcrypt dnspython python-etcd docker kubernetes==12.0.0 paramiko cryptography cachetools GitPython jsonschema attrs dicttoxml beautifulsoup4 future

WORKDIR /tmp

ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64

RUN echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc

# install hadoop
ENV HADOOP_VERSION=2.9.0
LABEL HADOOP_VERSION=2.9.0

RUN wget -qO- http://archive.apache.org/dist/hadoop/common/hadoop-${HADOOP_VERSION}/hadoop-${HADOOP_VERSION}.tar.gz | \
    tar xz -C /usr/local && \
    mv /usr/local/hadoop-${HADOOP_VERSION} /usr/local/hadoop

ENV HADOOP_INSTALL=/usr/local/hadoop \
    NVIDIA_VISIBLE_DEVICES=all

ENV HADOOP_PREFIX=${HADOOP_INSTALL} \
    HADOOP_BIN_DIR=${HADOOP_INSTALL}/bin \
    HADOOP_SBIN_DIR=${HADOOP_INSTALL}/sbin \
    HADOOP_HDFS_HOME=${HADOOP_INSTALL} \
    HADOOP_COMMON_LIB_NATIVE_DIR=${HADOOP_INSTALL}/lib/native \
    HADOOP_OPTS="-Djava.library.path=${HADOOP_INSTALL}/lib/native"

ENV PATH=/usr/local/nvidia/bin:/usr/local/cuda/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:${HADOOP_BIN_DIR}:${HADOOP_SBIN_DIR} \
    LD_LIBRARY_PATH=/usr/local/cuda/extras/CUPTI/lib:/usr/local/cuda/extras/CUPTI/lib64:/usr/local/nvidia/lib:/usr/local/nvidia/lib64:/usr/local/cuda/lib64:/usr/local/cuda/targets/x86_64-linux/lib/stubs:${JAVA_HOME}/jre/lib/amd64/server


# Only node manager need this.#
RUN wget https://download.docker.com/linux/static/stable/x86_64/docker-20.10.7.tgz
RUN tar xzvf docker-20.10.7.tgz
RUN mv docker/* /usr/local/bin/

# alert manager tool
RUN wget https://github.com/prometheus/alertmanager/releases/download/v0.15.2/alertmanager-0.15.2.linux-amd64.tar.gz
RUN tar xzvf alertmanager-0.15.2.linux-amd64.tar.gz
RUN mv alertmanager-0.15.2.linux-amd64/amtool /usr/local/bin

# install Azure CLI for deploy on  Azure AKS
RUN echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ xenial main" | \
    tee /etc/apt/sources.list.d/azure-cli.list

RUN curl -L https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

RUN apt-get -y install apt-transport-https &&  \
    apt-get -y update && \
    apt-get -y install azure-cli

RUN wget https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
# RUN wget https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl
# kubectl version that is within one minor version difference of the cluster.
# RUN wget https://dl.k8s.io/release/v1.16.15/bin/linux/amd64/kubectl
RUN chmod +x kubectl
RUN mv kubectl /usr/local/bin

# reinstall requests otherwise will get error: `cannot import name DependencyWarning`
RUN echo y | python3 -m pip uninstall requests && \
    echo y | python3 -m pip install requests && \
    echo y | python3 -m pip install docopt && \
    echo y | python3 -m pip install ansible==2.9.24

RUN rm -rf /tmp/*

WORKDIR /

# checkout to latest OpenPAI release version by default
# checkout to assigned branch if assigned
COPY build/start-script.sh /usr/local
RUN chmod u+x /usr/local/start-script.sh

ENTRYPOINT ["/usr/local/start-script.sh"]
