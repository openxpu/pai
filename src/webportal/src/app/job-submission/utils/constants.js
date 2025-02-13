// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
// BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

export const STORAGE_PREFIX = '/pai_data/';
export const SECRET_PATTERN = /^<% \$secrets.([a-zA-Z_][a-zA-Z0-9_]*) %>/;

export const ERROR_MARGIN = 22.15;
export const TENSORBOARD_LOG_PATH = '/mnt/tensorboard';
// Wrap comments with `` just a workaround, we may need to change rest-server or
// runtime to support comments in commands filed
export const CUSTOM_STORAGE_START = '`#CUSTOM_STORAGE_START`';
export const CUSTOM_STORAGE_END = '`#CUSTOM_STORAGE_END`';
export const TEAMWISE_DATA_CMD_START = '`#TEAMWISE_STORAGE_START`';
export const TEAMWISE_DATA_CMD_END = '`#TEAMWISE_STORAGE_END`';
export const AUTO_GENERATE_NOTIFY =
  '`#Auto generated code, please do not modify`';
export const PAI_ENV_VAR = [
  {
    key: 'PAI_JOB_NAME',
    desc: 'jobName in config file',
  },
  {
    key: 'PAI_USER_NAME',
    desc: 'User who submit the job',
  },
  {
    key: 'PAI_DEFAULT_FS_URI',
    desc: 'Default file system uri in PAI',
  },
  {
    key: 'PAI_TASK_ROLE_COUNT',
    desc: `Total task roles' number in config file`,
  },
  {
    key: 'PAI_TASK_ROLE_LIST',
    desc: 'Comma separated all task role names in config file',
  },
  {
    key: 'PAI_TASK_ROLE_TASK_COUNT_$taskRole',
    desc: 'Task count of the task role',
  },
  {
    key: 'PAI_HOST_IP_$taskRole_$taskIndex',
    desc: 'The host IP for taskIndex task in taskRole',
  },
  {
    key: 'PAI_PORT_LIST_$taskRole_$taskIndex_$portType',
    desc: 'The $portType port list for taskIndex task in taskRole',
  },
  {
    key: 'PAI_RESOURCE_$taskRole',
    desc:
      'Resource requirement for the task role in "gpuNumber,cpuNumber,memMB,shmMB" format',
  },
  {
    key: 'PAI_MIN_FAILED_TASK_COUNT_$taskRole',
    desc: 'taskRole.minFailedTaskCount of the task role',
  },
  {
    key: 'PAI_MIN_SUCCEEDED_TASK_COUNT_$taskRole',
    desc: 'taskRole.minSucceededTaskCount of the task role',
  },
  {
    key: 'PAI_CURRENT_TASK_ROLE_NAME',
    desc: 'taskRole.name of current task role',
  },
  {
    key: 'PAI_CURRENT_TASK_ROLE_CURRENT_TASK_INDEX',
    desc: 'Index of current task in current task role, starting from 0',
  },
];
export const PROTOCOL_TOOLTIPS = {
  taskRoleContainerSize:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/quick-start.md',
  hivedSkuType:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/quick-start.md',
  taskRole:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-run-distributed-job.md#taskrole-and-instance',
  parameters:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-use-advanced-job-settings.md#parameters-and-secrets',
  secrets: `https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-use-advanced-job-settings.md#parameters-and-secrets`,
  data:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-manage-data.md',
  tools:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-debug-jobs.md#how-to-debug-jobs',
  dockerImage:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/docker-images-and-job-examples.md',
  teamStorage:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-manage-data.md#use-storage-in-jobs',
  tensorboard:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-debug-jobs.md#how-to-use-tensorboard-plugin',
  ssh:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-debug-jobs.md#how-to-use-ssh',
  policy:
    'https://github.com/openxpu/pai/blob/master/docs/manual/cluster-user/how-to-use-advanced-job-settings.md#job-exit-spec-retry-policy-and-completion-policy',
};

export const COMMAND_PLACEHOLDER = `'You could define your own Parameters, Secrets or Data mount point on the right sidebar.

All lines will be concatenated by "&&". So do not use characters like "#", "\\" in your command'`;

export const DOCKER_OPTIONS = [
  {
    key: 'python_3.6-pytorch_1.4.0-gpu',
    text: 'PyTorch 1.4.0 + Python 3.6 with GPU, CUDA 10.1',
    image: 'openpai/standard:python_3.6-pytorch_1.4.0-gpu',
  },
  {
    key: 'python_3.6-pytorch_1.2.0-gpu',
    text: 'PyTorch 1.2.0 + Python 3.6 with GPU, CUDA 10.0',
    image: 'openpai/standard:python_3.6-pytorch_1.2.0-gpu',
  },
  {
    key: 'python_3.6-tensorflow_2.1.0-gpu',
    text: 'TensorFlow 2.1.0 + Python 3.6 with GPU, CUDA 10.1',
    image: 'openpai/standard:python_3.6-tensorflow_2.1.0-gpu',
  },
  {
    key: 'python_3.6-tensorflow_1.15.0-gpu',
    text: 'TensorFlow 1.15.0 + Python 3.6 with GPU, CUDA 10.0',
    image: 'openpai/standard:python_3.6-tensorflow_1.15.0-gpu',
  },
  {
    key: 'python_3.6-mxnet_1.5.1-gpu',
    text: 'MXNet 1.5.1 + Python 3.6 with GPU, CUDA 10.1',
    image: 'openpai/standard:python_3.6-mxnet_1.5.1-gpu',
  },
  {
    key: 'python_3.6-cntk_2.7-gpu',
    text: 'CNTK 2.7 + Python 3.6 with GPU, CUDA 10.1',
    image: 'openpai/standard:python_3.6-cntk_2.7-gpu',
  },
  {
    key: 'python_3.6-pytorch_1.4.0-cpu',
    text: 'PyTorch 1.4.0 + Python 3.6 with CPU',
    image: 'openpai/standard:python_3.6-pytorch_1.4.0-cpu',
  },
  {
    key: 'python_3.6-pytorch_1.2.0-cpu',
    text: 'PyTorch 1.2.0 + Python 3.6 with CPU',
    image: 'openpai/standard:python_3.6-pytorch_1.2.0-cpu',
  },
  {
    key: 'python_3.6-tensorflow_2.1.0-cpu',
    text: 'TensorFlow 2.1.0 + Python 3.6 with CPU',
    image: 'openpai/standard:python_3.6-tensorflow_2.1.0-cpu',
  },
  {
    key: 'python_3.6-tensorflow_1.15.0-cpu',
    text: 'TensorFlow 1.15.0 + Python 3.6 with CPU',
    image: 'openpai/standard:python_3.6-tensorflow_1.15.0-cpu',
  },
];
export const DEFAULT_DOCKER_URI =
  'openpai/standard:python_3.6-pytorch_1.2.0-gpu';
// For PAI runtime only
export const PAI_PLUGIN = 'com.microsoft.pai.runtimeplugin';

export const STORAGE_PLUGIN = 'teamwise_storage';

export const SSH_KEY_BITS = 1024;

export const USERSSH_TYPE_OPTIONS = [
  {
    key: 'custom',
    text: 'Custom',
  },
  // {
  //   key: 'system',
  //   text: 'System',
  // },
];
