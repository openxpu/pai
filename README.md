# Open Platform for AI (OpenPAI) ![alt text][logo]

[logo]: ./pailogo.jpg "OpenPAI"

<h3 align="center">
  <p>
    <b>English</b> |
    <a href="./README_zh_CN.md">简体中文</a>
  <p>
</h3>

**As of December 2022, Microsoft, the initial developer, announced that they would no longer develop and maintain the OpenPAI platform. Nevertheless, OpenXPU will resume the development of new features, fix any errors if necessary and maintain the OpenPAI platform from this point onward.**

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
  <p><b>If you are looking for custom support from the OpenXPU team</b><p>
</h3>

<a target="_blank" href="http://xpucube.com/openpai">
    <img alt="OpenXPU Support Program" src="http://xpucube.com/images/openxpu-support-en.png" style="max-width: 600px; border: 1px solid #eee; border-radius: 4px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
</a><br>

<h3>
  <p><b>Table of Contents</b><p>
</h3>

- [Open Platform for AI (OpenPAI) ](#open-platform-for-ai-openpai-)
  - [When to consider OpenPAI](#when-to-consider-openpai)
  - [Why choose OpenPAI](#why-choose-openpai)
      - [Most complete solution and easy to extend](#most-complete-solution-and-easy-to-extend)
      - [Support on-premises and easy to deploy](#support-on-premises-and-easy-to-deploy)
      - [Support popular AI frameworks and heterogeneous hardware](#support-popular-ai-frameworks-and-heterogeneous-hardware)
      - [Virtualization improves efficiency and flexibility](#virtualization-improves-efficiency-and-flexibility)
  - [Installation and user guide](#installation-and-user-guide)
    - [For cluster administrators](#for-cluster-administrators)
    - [For cluster users](#for-cluster-users)
  - [Standalone Components](#standalone-components)
  - [OpenPAI Manual](#openpai-manual)
  - [Related Projects](#related-projects)
  - [Get involved](#get-involved)
  - [How to contribute](#how-to-contribute)
    - [Contributor License Agreement](#contributor-license-agreement)
    - [Contributors](#contributors)

## When to consider OpenPAI

1. When your organization needs to share powerful AI computing resources (GPU/FPGA farm, etc.) among teams.
2. When your organization needs to share and reuse common AI assets like Model, Data, Environment, etc.
3. When your organization needs an easy IT ops platform for AI.
4. When you want to run a complete training pipeline in one place.
5. When you want to run training & inference tasks in one place.

## Why choose OpenPAI

The platform incorporates the mature design that has a proven track record in Microsoft's large-scale production environment, And OpenXPU improves OpenPAI with resource (GPU) virtualization capabilities.

#### Most complete solution and easy to extend

OpenPAI is a most complete solution for deep learning, support virtual cluster, compatible with Kubernetes eco-system, complete training pipeline at one cluster etc. OpenPAI is architected in a modular way: different module can be plugged in as appropriate. [Here](./docs/system_architecture.md) is the architecture of OpenPAI, highlighting technical innovations of the platform.

#### Support on-premises and easy to deploy

OpenPAI is a full stack solution. OpenPAI not only supports on-premises, hybrid, or public Cloud deployment but also supports single-box deployment for trial users.

#### Support popular AI frameworks and heterogeneous hardware

Pre-built container for popular AI frameworks. Easy to include heterogeneous hardware. Support Distributed training, such as distributed TensorFlow.

#### Virtualization improves efficiency and flexibility
 
GPU virtualization technology supports fine-grained computing power scheduling, which not only improves the efficiency of computing resources, but also provides more flexible scheduling capabilities and higher task throughput.

## Installation and user guide

OpenPAI manages computing resources and is optimized for deep learning. Through container technology, the computing hardware are decoupled with software, so that it's easy to run distributed jobs, switch with different deep learning frameworks, or run other kinds of jobs on consistent environments.

As OpenPAI is a platform, there are typically two different roles:

- **Cluster users** are the consumers of the cluster's computing resources. According to the deployment scenarios, cluster users could be researchers of Machine Learning and Deep Learning, data scientists, lab teachers, students and so on.
- **Cluster administrators** are the maintainers of computing resources. The administrators are responsible for the deployment and availability of the cluster.

OpenPAI provides end-to-end manuals for both cluster users and administrators.

### For cluster administrators

The [admin manual](./docs/manual/cluster-admin/README.md) is a comprehensive guide for cluster administrators, it covers (but not limited to) the following contents:

- **Installation and upgrade**. The installation is based on Kubespray, and OpenPAI provides an [installation guide](./docs/manual/cluster-admin/installation-guide.md) to facilitate the installation.

  If you are considering upgrade from older version to the latest version, please refer to [upgrade guide](./docs/manual/cluster-admin/upgrade-guide.md).

  _If there is any question during deployment, please check [installation FAQs and troubleshooting](./docs/manual/cluster-admin/installation-faqs-and-troubleshooting.md) first. If it is not covered yet, refer to [here](#get-involved) to ask question or submit an issue._

- **Basic cluster management**. Through the Web-portal and a command-line tool `paictl`, administrators could complete [cluster managements](./docs/manual/cluster-admin/basic-management-operations.md), such as [adding (or removing) nodes](./docs/manual/cluster-admin/how-to-add-and-remove-nodes.md), [monitoring nodes and services](./docs/manual/cluster-admin/basic-management-operations.md), and [storages setup and permission control](./docs/manual/cluster-admin/how-to-set-up-storage.md).

- **Users and groups management**. Administrators could manage the [users and groups](./docs/manual/cluster-admin/how-to-manage-users-and-groups.md) easily.

- **Alerts management**. Administrators could [customize alerts rules and actions](./docs/manual/cluster-admin/how-to-use-alert-system.md).

- **Customization**. Administrators could customize the cluster by [plugins](./docs/manual/cluster-admin/how-to-customize-cluster-by-plugins.md). Administrators could also upgrade (or downgrade) a single component (e.g. rest servers) to address customized application demands.

### For cluster users

The [user manual](./docs/manual/cluster-user/README.md) is a guidance for cluster users, who could train and serve deep learning (and other) tasks on OpenPAI.

- **Job submission and monitoring**. The [quick start tutorial](./docs/manual/cluster-user/quick-start.md) is a good start for learning how to train models on OpenPAI. And more examples and supports to multiple mainstream frameworks (out-of-the-box docker images) are in [here](./docs/manual/cluster-user/docker-images-and-job-examples.md). OpenPAI also provides supports for [good debuggability](./docs/manual/cluster-user/how-to-debug-jobs.md) and [advanced job functionalities](./docs/manual/cluster-user/how-to-use-advanced-job-settings.md).

- **Data managements**. Users could use cluster provisioned storages and custom storages in their jobs. The cluster provisioned storages are well integrated and easy to configure in a job [(refer to here)](./docs/manual/cluster-user/how-to-manage-data.md).

- **Collaboration and sharing**. OpenPAI provides facilities for collaboration in teams and organizations. The cluster provisioned storages are organized by teams (groups). And users could easily share their works (e.g. jobs) in the [marketplace](./docs/manual/cluster-user/use-marketplace.md), where others could discover and reproduce (clone) by one-click.

Besides the webportal, OpenPAI provides [VS Code extension](./docs/manual/cluster-user/use-vscode-extension.md) and [command line tool (preview)](https://github.com/openxpu/openpaisdk). The VS Code extension is a friendly, GUI based client tool of OpenPAI, and it's highly recommended. It's an extension of Visual Studio Code. It can submit job, simulate jobs locally, manage multiple OpenPAI environments, and so on.

## Standalone Components

OpenPAI uses a  modularized component design and organizes the code structure to 1 main repo together with 7 standalone key component repos. [pai](https://github.com/openxpu/pai) is the main repo, and the 7 component repos are:

- [hivedscheduler](https://github.com/openxpu/hivedscheduler) is a Kubernetes Scheduler Extender for Multi-Tenant GPU clusters, which provides various advantages over standard k8s scheduler.
- [frameworkcontroller](https://github.com/openxpu/frameworkcontroller) is built to orchestrate all kinds of applications on Kubernetes by a single controller.
- [openpai-protocol](https://github.com/openxpu/openpai-protocol) is the specification of OpenPAI job protocol.
- [openpai-runtime](https://github.com/openxpu/openpai-runtime) provides runtime support which is necessary for the OpenPAI protocol.
- [openpaisdk](https://github.com/openxpu/openpaisdk) is a JavaScript SDK designed to facilitate the developers of OpenPAI to offer more user-friendly experience.
- [openpaimarketplace](https://github.com/openxpu/openpaimarketplace) is a service which stores examples and job templates. Users can use it from webportal plugin to share their jobs or run-and-learn others' sharing job.
- [openpaivscode](https://github.com/openxpu/openpaivscode) is a VSCode extension, which makes users connect OpenPAI clusters, submit AI jobs, simulate jobs locally and manage files in VSCode easily.

## OpenPAI Manual
- Detailed documents could be found in the [OpenPAI Manual](./docs) if you are interested.

## Related Projects

Targeting at openness and advancing state-of-art technology, [Microsoft Research (MSR)](https://www.microsoft.com/en-us/research/group/systems-research-group-asia/) and [Microsoft Software Technology Center Asia (STCA)](https://www.microsoft.com/en-us/ard/default.aspx) had also released few other open source projects.
- [NNI](https://github.com/Microsoft/nni) : An open source AutoML toolkit for neural architecture search and hyper-parameter tuning.
  We encourage researchers and students leverage these projects to accelerate the AI development and research.
- [MMdnn](https://github.com/Microsoft/MMdnn) : A comprehensive, cross-framework solution to convert, visualize and diagnose deep neural network models. The "MM" in MMdnn stands for model management and "dnn" is an acronym for deep neural network.
- [NeuronBlocks](https://github.com/Microsoft/NeuronBlocks) : An NLP deep learning modeling toolkit that helps engineers to build DNN models like playing Lego. The main goal of this toolkit is to minimize developing cost for NLP deep neural network model building, including both training and inference stages.
- [SPTAG](https://github.com/Microsoft/SPTAG) : Space Partition Tree And Graph (SPTAG) is an open source library for large scale vector approximate nearest neighbor search scenario.

## Get involved

- [Stack Overflow](./docs/stackoverflow.md): If you have questions about OpenPAI, please submit question at Stack Overflow under tag: openpai
- [Gitter chat](https://gitter.im/Microsoft/pai): You can also ask questions in Microsoft/pai conversation.
- [Create an issue or feature request](https://github.com/openxpu/pai/issues/new/choose): If you have issue/ bug/ new feature, please submit it to GitHub.

## How to contribute

### Contributor License Agreement

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using the CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

### Contributors

One key purpose of OpenPAI is to support the highly diversified requirements from academia and industry. OpenPAI is completely open: it is under the MIT license. This makes OpenPAI particularly attractive to evaluate various research ideas, which include but not limited to the [components](./docs/research_education.md).

OpenPAI operates in an open model. It was initially designed and developed by [Microsoft Research (MSR)](https://www.microsoft.com/en-us/research/group/systems-research-group-asia/) and [Microsoft Software Technology Center Asia (STCA)](https://www.microsoft.com/en-us/ard/default.aspx) platform team.
[Peking University](http://eecs.pku.edu.cn/EN/), [Xi'an Jiaotong University](http://www.aiar.xjtu.edu.cn/), [Zhejiang University](http://www.cesc.zju.edu.cn/index_e.htm), [University of Science and Technology of China](http://eeis.ustc.edu.cn/) and [SHANGHAI INESA AI INNOVATION CENTER (SHAIIC)](https://www.shaiic.com/) also develop the platform jointly.

After v1.8.1, Microsoft announced that they would no longer develop and maintain the OpenPAI platform. Since then, OpenXPU resumes the development of new features, fix any errors if necessary and maintain the OpenPAI platform from this point onward. 

Contributions from academia and industry are all highly welcome.
