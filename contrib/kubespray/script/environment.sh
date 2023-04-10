#!/bin/bash

while getopts "c:" opt; do
  case $opt in
    c)
      CLUSTER_CONFIG=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG"
      exit 1
      ;;
  esac
done

echo "Create working folder in ${HOME}/pai-deploy"
mkdir -p ${HOME}/pai-deploy/

echo "Download kubespray to ${HOME}/pai-deploy"
sudo rm -rf ${HOME}/pai-deploy/kubespray
# kubespray could be upgrade to kubespray-2.19.1.tar.gz (not tested, must be compatible with a particular k8s version).
pushd $(pwd) > /dev/null
cd ${HOME}/pai-deploy/
curl -kLO http://down.openxpu.com/openpai/kubernetes-sigs/kubespray-release-2.11.tar.gz && tar -xzf kubespray-release-2.11.tar.gz && mv kubespray-release-2.11 kubespray || exit $?
popd > /dev/null

echo "Copy inventory folder, and save it "
cp -rfp ${HOME}/pai-deploy/kubespray/inventory/sample ${HOME}/pai-deploy/kubespray/inventory/pai


echo "Install necessray packages"

echo "Install Python3 and pip"
sudo apt-get -y update
sudo apt-get -y install software-properties-common python3 python3-dev python3-pip
# "apt-get install python3" will install python3.5 on Ubuntu 16.04
# The lastest pip doesn't support python3.5.
# Fixed version number could ensure compatibility, but now commented.
# sudo python3 -m pip install pip==20.3.4

echo "Install python packages"
sudo python3 -m pip install paramiko # need paramiko for ansible-playbook
sudo python3 -m pip install -r script/requirements.txt

echo "Install sshpass"
sudo apt-get -y install sshpass

# ansible 2.7 doesn't support distribution info collection on Ubuntu 20.04
# Use ansible 2.9.24 as a workaround
# Reference: https://stackoverflow.com/questions/61460151/ansible-not-reporting-distribution-info-on-ubuntu-20-04
# kubespray 2.19.1 could fix it? (not tested yet).
sed -i 's/ansible==.*/ansible==2.9.24/' ${HOME}/pai-deploy/kubespray/requirements.txt

echo "Install kubespray's requirements and ansible is included"
sudo python3 -m pip install -r ${HOME}/pai-deploy/kubespray/requirements.txt
