# 如何设置XPU

本文档介绍了如何在OpenPAI环境中打开或者关闭XPU相关功能，您需要遵循下列步骤：

  1. 在OpenPAI的GPU工作节点已经安装了XPU相关软件，如何安装请参考[`XPU安装使用手册`](http://www.xpucube.com/en/pdf/xpu-docker-user-guide.pdf)。
  2. 在OpenPAI安装时将XPU组件启用（默认已经启用）。

## 在安装OpenPAI时启用XPU

在OpenPAI v1.8.2及以后版本, 管理员可以在安装OpenPAI的同时启用XPU相关功能：在config.yaml文件中设置enable_xpu: "true"。

### config.yaml 示例

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

请注意在OpenPAI v1.8.2之后（即OpenXPU之后维护的OpenPAI版本），默认都是打开了对XPU的支持，如果需要关闭XPU相关功能请在安装OpenPAI时在config.yaml文件中设置enable_xpu: "false"。
