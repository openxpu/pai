# AI 开放平台 (OpenPAI) ![alt text][logo]

[logo]: ./pailogo.jpg "OpenPAI"

<h3 align="center">
  <p>
    <a href="./README.md">English</a> |
    <b>简体中文</b>
  <p>
</h3>

**截至2022年12月，微软宣布他们将不再继续开发和维护 OpenPAI 平台。然而，仍然有大量的用户和开发者的需要 OpenPAI，不只是需要运维现有部署的 OpenPAI 集群，他们更需要 OpenPAI 紧跟 AI 的最新发展并支持更多的功能。基于业界对 OpenPAI 的期望， OpenXPU 团队决定承担起 OpenPAI 开源项目的开发维护工作，恢复新功能的开发，修复任何错误，让用户可以放心轻松地使用下去**

<table>
  <tr>
    <td align="center">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <br/>
      <a href="https://github.com/openxpu/openpaimarketplace" target="_blank">
        <img src="./docs/images/architecture/Picture1.svg" width="610" alt="Marketplace Logo" />
      </a>
      <br/>
      <img src="./docs/images/architecture/Picture2.svg" width="200" alt=" Web Portal" />
      <a href="https://github.com/openxpu/openpaisdk" target="_blank">
        <img src="./docs/images/architecture/Picture3.svg" width="200" alt="VScode" />
      </a>
      <a href="https://github.com/openxpu/openpaivscode" target="_blank">
        <img src="./docs/images/architecture/Picture4.svg" width="200" alt="SDK" />
      </a>
      <br/>
      <img src="./docs/images/architecture/Picture5.svg" width="610" alt="API" />
      <br/>
      <img src="./docs/images/architecture/Picture18.svg" width="610" alt="Services" />
      <br/>
      <img src="./docs/images/architecture/Picture19.svg" width="304" alt="User Authentication" />
      <img src="./docs/images/architecture/Picture20.svg" width="304" alt="User/Group Management" />
      <br/>
      <img src="./docs/images/architecture/Picture21.svg" width="304" alt="Storage Management" />
      <img src="./docs/images/architecture/Picture22.svg" width="304" alt="Cluster/Job Monitoring" />
      <br/>
      <a href="https://github.com/openxpu/frameworkcontroller" target="_blank">
        <img src="./docs/images/architecture/Picture23.svg" width="304" alt="Job Orchestration" />
      </a>
      <a href="https://github.com/openxpu/hivedscheduler" target="_blank">
        <img src="./docs/images/architecture/Picture24.svg" width="304" alt="Job Scheduling" />
      </a>
      <br/>
      <a href="https://github.com/openxpu/openpai-runtime" target="_blank">
        <img src="./docs/images/architecture/Picture25.svg" width="304" alt="Job Runtime" />
      </a>
      <img src="./docs/images/architecture/Picture26.svg" width="304" alt="Job Error Analysis" />
      <br/>
      <img src="./docs/images/architecture/Picture15.svg" width="610" alt="Kubernetes Cluster Management" />
      <br/>
      <img src="./docs/images/architecture/Picture16.svg" width="610" alt="CPU/GPU/FPGA/InfiniBand" />
    </td>
  </tr>
</table><br>

<h3>
  <p><b>寻找由 OpenXPU 团队提供支持服务</b><p>
</h3>

<a target="_blank" href="http://xpucube.com/openpai">
  <img alt="OpenXPU Support Program" src="http://xpucube.com/images/openxpu-support-cn.png" style="max-width: 600px; border: 1px solid #eee; border-radius: 4px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
</a><br>

<h3>
  <p><b>目录</b><p>
</h3>

- [AI 开放平台 (OpenPAI) ](#ai-开放平台-openpai-)
  - [什么场景下使用 OpenPAI](#什么场景下使用-openpai)
  - [为什么选用 OpenPAI](#为什么选用-openpai)
      - [完整解决方案且易于扩展](#完整解决方案且易于扩展)
      - [支持本地、云端部署且易于使用](#支持本地云端部署且易于使用)
      - [支持流行的框架和主流的加速卡硬件](#支持流行的框架和主流的加速卡硬件)
      - [虚拟化技术提供高效灵活的算力调度](#虚拟化技术提供高效灵活的算力调度)
  - [安装与使用指南](#安装与使用指南)
    - [面向 OpenPAI 管理员](#面向-openpai-管理员)
    - [对于 OpenPAI 使用用户](#对于-openpai-使用用户)
  - [OpenPAI 组件](#openpai-组件)
  - [OpenPAI 手册](#openpai-手册)
  - [参与 OpenPAI 讨论](#参与-openpai-讨论)
  - [参与 OpenPAI 开发](#参与-openpai-开发)
    - [贡献者授权协议](#贡献者授权协议)
    - [开发贡献者](#开发贡献者)

## 什么场景下使用 OpenPAI

1. 当您的组织需要在团队之间共享强大的 AI 计算资源（GPU/FPGA 等）时。
2. 当您的组织需要共享和重用通用 AI 资产（模型、数据、环境等）时。
3. 当您的组织需要一个轻松的 AI IT 运维平台时。
4. 当您想一站式运行完整的训练流程时。
5. 当您想在一个平台上同时运行训练和推理任务时。

## 为什么选用 OpenPAI

该平台融合了在微软大规模 AI 平台生产环境中具有良好记录的成熟设计，为 AI 开发者提供了一个轻松高效地 AI 任务运行调度平台，同时，OpenPAI 具有强大的资源管理和集群运维功能，方便管理员的日常管理和运维工作。

#### 完整解决方案且易于扩展

OpenPAI 是深度学习最完整的解决方案，支持虚拟集群，兼容 Kubernetes 生态系统，在一个集群上完成训练管道等。OpenPAI 采用模块化方式构建：可以根据需要插入不同的模块。[这里](./docs/system_architecture.md) 是 OpenPAI 的架构，突出了平台的技术创新。

#### 支持本地、云端部署且易于使用

OpenPAI 是一个全栈解决方案。 OpenPAI 不仅支持本地、混合或公有云部署，还支持试用用户的单机部署。

#### 支持流行的框架和主流的加速卡硬件

支持主流的异构计算硬件，为流行的 AI 框架预构建的容器，支持主流的计算框架，支持分布式训练，比如分布式TensorFlow。

#### 虚拟化技术提供高效灵活的算力调度

GPU 虚拟化技术支持细粒度算力调度，不但提高了计算资源的效率，更能提供更灵活的调度能力和更高的任务吞吐量。

## 安装与使用指南

OpenPAI 管理计算资源并针对深度学习进行了优化。通过容器技术，计算硬件与软件解耦，可以轻松运行分布式作业，切换不同的深度学习框架，或者在一致的环境中运行其他类型的作业。

由于 OpenPAI 是一个平台，因此通常有两个不同的角色：

- **OpenPAI 用户** 是集群计算资源的消费者。根据部署场景，集群用户可以是机器学习和深度学习的研究人员、数据科学家、实验室教师、学生等。
- **OpenPAI 管理员** 是计算资源的维护者。管理员负责集群的部署和可用性。

OpenPAI 为集群用户和管理员提供端到端的手册。

### 面向 OpenPAI 管理员

[管理员手册](./docs_zh_CN/manual/cluster-admin/README.md) 是一本集群管理员的综合指南，涵盖（但不限于）以下内容：

- **安装与升级**. 安装基于 Kubespray，OpenPAI 提供了 [安装指南](./docs_zh_CN/manual/cluster-admin/installation-guide.md) 方便安装。

  如果您正在考虑从旧版本升级到最新版本，请参考 [升级指南](./docs_zh_CN/manual/cluster-admin/upgrade-guide.md).

  _如果在部署过程中有任何问题，请先查看 [安装常见问题解答及故障排除](./docs_zh_CN/manual/cluster-admin/installation-faqs-and-troubleshooting.md). 如果尚未涵盖，请参阅 [这里](#get-involved) 提出或提交问题。_

- **基础管理**. 通过Web-portal和命令行工具 `paictl`, 管理员可以完成 [集群管理](./docs_zh_CN/manual/cluster-admin/basic-management-operations.md), 比如 [添加（或删除）节点](./docs_zh_CN/manual/cluster-admin/how-to-add-and-remove-nodes.md), [监控节点和服务](./docs_zh_CN/manual/cluster-admin/basic-management-operations.md), 以及 [存储设置和权限控制](./docs_zh_CN/manual/cluster-admin/how-to-set-up-storage.md).

- **用户与组管理**. 管理员可以轻松管理 [用户和组](./docs_zh_CN/manual/cluster-admin/how-to-manage-users-and-groups.md)。

- **告警管理**. 管理员可以 [自定义警报规则和操作](./docs_zh_CN/manual/cluster-admin/how-to-use-alert-system.md).

- **定制化**. 管理员可以通过 [插件](./docs_zh_CN/manual/cluster-admin/how-to-customize-cluster-by-plugins.md). 管理员还可以升级(或降级) 单个组件 (比如 rest servers) 以满足定制的应用程序需求。

### 对于 OpenPAI 使用用户

[用户手册](./docs_zh_CN/manual/cluster-user/README.md) 是集群用户的指南，他们可以在 OpenPAI 上训练和服务深度学习（和其他）任务。

- **作业提交和监控**. [快速入门教程](./docs_zh_CN/manual/cluster-user/quick-start.md) 是学习如何在 OpenPAI 上训练模型的良好开端。更多的示例和对多个主流框架（开箱即用的 docker 镜像）的支持都在 [这里](./docs_zh_CN/manual/cluster-user/docker-images-and-job-examples.md). OpenPAI 还支持 [调试](./docs_zh_CN/manual/cluster-user/how-to-debug-jobs.md) 和 [高级作业功能](./docs_zh_CN/manual/cluster-user/how-to-use-advanced-job-settings.md).

- **数据管理**. 用户可以在他们的工作中使用集群配置的存储和自定义存储。集群配置的存储集成良好，易于在作业中配置 [这里](./docs_zh_CN/manual/cluster-user/how-to-manage-data.md).

- **协作与共享**. OpenPAI 为团队和组织中的协作提供便利。集群配置的存储按团队（组）组织。并且用户可以轻松地在 [marketplace](./docs_zh_CN/manual/cluster-user/use-marketplace.md) 分享他们的作品（例如工作） ，其他人可以通过单击来发现和复制（克隆）。

除了 webportal，OpenPAI 还提供 [VS Code 扩展](./docs_zh_CN/manual/cluster-user/use-vscode-extension.md) 和 [命令行工具 (预览)](https://github.com/openxpu/openpaisdk). VS Code 扩展是一个友好的、基于 GUI 的 OpenPAI 客户端工具，强烈推荐使用。它是 Visual Studio Code 的扩展。它可以提交作业、在本地模拟作业、管理多个 OpenPAI 环境等。

## OpenPAI 组件

OpenPAI 使用模块化组件设计，并将代码结构组织为 1 个主仓库和 7 个独立的关键组件仓库。[pai](https://github.com/openxpu/pai) 是主要的仓库，其他 7 个组件仓库为：

- [hivedscheduler](https://github.com/openxpu/hivedscheduler) 是用于多租户 GPU 集群的 Kubernetes 调度程序扩展程序，它提供了超过标准 k8s 调度程序的各种优势。
- [frameworkcontroller](https://github.com/openxpu/frameworkcontroller) 旨在通过单个控制器在 Kubernetes 上编排各种应用程序。
- [openpai-protocol](https://github.com/openxpu/openpai-protocol) 是 OpenPAI 作业协议的规范。
- [openpai-runtime](https://github.com/openxpu/openpai-runtime) 提供 OpenPAI 协议所必需的运行时支持。
- [openpaisdk](https://github.com/openxpu/openpaisdk) 是一个 JavaScript SDK，旨在帮助 OpenPAI 的开发者提供更友好的用户体验
- [openpaimarketplace](https://github.com/openxpu/openpaimarketplace) 是一种存储示例和工作模板的服务。用户可以从 webportal 插件使用它来分享他们的工作或运行和学习其他人的共享工作。
- [openpaivscode](https://github.com/openxpu/openpaivscode) 是一个 VSCode 扩展，它使用户可以轻松地连接 OpenPAI 集群、提交 AI 作业、在本地模拟作业以及在 VSCode 中轻松管理文件。

## OpenPAI 手册

- 如果您需要，请参阅 OpenPai 手册。 [here](./docs_zh_CN)

## 参与 OpenPAI 讨论

- [Stack Overflow](./docs/stackoverflow.md): 如果您对 OpenPAI 有任何疑问，请在 Stack Overflow 上提交问题，标签为：openpai
- [Gitter chat](https://gitter.im/Microsoft/pai): 也可以在 Microsoft/pai conversation 中提问
- [Create an issue or feature request](https://github.com/openxpu/pai/issues/new/choose): 如果您有问题/错误/新功能，请将其提交到 GitHub。

## 参与 OpenPAI 开发

### 贡献者授权协议

本项目欢迎贡献和建议。大多数贡献都要求您同意贡献者许可协议 (CLA)，声明您有权并且实际上授予我们使用您的贡献的权利。有关详细信息，请访问 https://cla.microsoft.com.

当您提交拉取请求时，CLA-bot 将自动确定您是否需要提供 CLA 并适当地修饰 PR（例如，标签、评论）。只需按照机器人提供的说明进行操作即可。您只需使用 CLA 对所有存储库执行一次此操作。

该项目采用 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
有关更多信息，请参阅 [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) 或
联系 [opencode@microsoft.com](mailto:opencode@microsoft.com) 提出任何其他问题或意见。

### 开发贡献者

OpenPAI 的一个关键目的是支持学术界和工业界高度多样化的需求。OpenPAI 是完全开放的：它在 MIT 许可下。这使得 OpenPAI 特别有吸引力来评估各种研究想法。

OpenPAI 在开放模型中运行。它最初由 [Microsoft Research (MSR)](https://www.microsoft.com/en-us/research/group/systems-research-group-asia/) 和 [Microsoft Software Technology Center Asia (STCA)](https://www.microsoft.com/en-us/ard/default.aspx) 平台团队设计开发。
[北京大学](http://eecs.pku.edu.cn/EN/), [西安交通大学](http://www.aiar.xjtu.edu.cn/), [浙江大学](http://www.cesc.zju.edu.cn/index_e.htm), [中国科学技术大学](http://eeis.ustc.edu.cn/) and [上海仪电人工智能研究院(SHAIIC)](https://www.shaiic.com/) 也共同参与了 OpenPAI 的开发。

在 v1.8.1 之后，微软宣布他们将不再开发和维护 OpenPAI 平台。此后，OpenXPU 团队恢复新功能的开发，必要时修复任何错误，并从此维护 OpenPAI 平台。OpenXPU 团队非常欢迎开发者和用户参与 OpenPAI 的开发，提出反馈和意见，或者向我们寻求帮助。
