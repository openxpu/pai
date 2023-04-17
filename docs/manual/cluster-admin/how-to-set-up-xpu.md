# How to setup XPU

This document describes how to enable XPU on PAI. To set up XPU, you need:

  1. Install XPU packages on the PAI GPU worker node, refer to [`XPU user guide`](http://www.xpucube.com/en/pdf/xpu-docker-user-guide.pdf).
  2. Confirm enable XPU in the PAI installation.

## Enable XPU when install PAI

In OpenPAI v1.8.2 or later, admin can enable or disable XPU in config.yaml by setting: enable_xpu: "true"。

### config.yaml example

```yaml
user: forexample
password: forexample
docker_image_tag: v1.8.2

# Optional

#######################################################################
#                    OpenPAI Customized Settings                      #
#######################################################################
# enable_hived_scheduler: true
# enable_docker_cache: false
# docker_cache_storage_backend: "azure" # or "filesystem"
# docker_cache_azure_account_name: ""
# docker_cache_azure_account_key: ""
# docker_cache_azure_container_name: "dockerregistry"
# docker_cache_fs_mount_path: "/var/lib/registry"
# docker_cache_remote_url: "https://registry-1.docker.io"
# docker_cache_htpasswd: ""
# enable_marketplace: "true"
enable_xpu: "true"

# ...
```

Please note after OpenPAI v1.8.2 or later which maintained by OpenXPU, enabling XPU by default. If you want to disable XPU, please change in config.yaml file enable_xpu: "false" when install PAI.
