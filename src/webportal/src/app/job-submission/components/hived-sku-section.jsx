// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useCallback, useContext, useMemo } from 'react';
import { get, isEmpty } from 'lodash';
import { Dropdown, Stack } from 'office-ui-fabric-react';
import PropTypes from 'prop-types';
import { BasicSection } from './basic-section';
import { CSpinButton } from './customized-components';
import { FormShortSection } from './form-page';
import { PROTOCOL_TOOLTIPS } from '../utils/constants';
import Context from './context';
import webportalConfig from '../../config/webportal.config';

export const HivedSkuSection = React.memo(props => {
  const { value, isSingle, onChange } = props;
  const { skuNum, skuType, skuPercent } = value;
  const { hivedSkuTypes } = useContext(Context);

  const skuPercentOptions = [
    {key: 25,  text: '25%'},
    {key: 50,  text: '50%'},
    {key: 75,  text: '75%'},
    {key: 100, text: '100%'},
  ];

  const skuOptions = useMemo(
    () =>
      Object.entries(hivedSkuTypes).reduce((options, skuType) => {
        const [name, { gpu, cpu, memory }] = skuType;
        return [
          ...options,
          {
            key: name,
            sku: { gpu, cpu, memory },
            text: `${name} (${gpu} GPU, ${cpu} CPU, ${memory} memory)`,
          },
        ];
      }, []),
    [hivedSkuTypes],
  );

  const _setSku = () => {
    if (value.skuType != null) {
      const selected = skuOptions.find(option => option.key === value.skuType);
      if (selected == null) {
        onChange({ ...value, skuType: null, sku: null });
      } else if (value.sku == null) {
        onChange({ ...value, sku: get(selected, 'sku', null), skuPerCent: skuPercentOptions[3].key });
      }
    } else if (!isEmpty(skuOptions)) {
      onChange({
        ...value,
        skuType: skuOptions[0].key,
        sku: skuOptions[0].sku,
        skuPercent: skuPercentOptions[3].key,
      });
    }
  };

  const _onSkuNumChange = useCallback(
    num => {
      onChange({
        ...value,
        skuNum: num,
      });
    },
    [onChange],
  );

  const _onSkuPercentChange = useCallback(
    (_, item) => {
      onChange({
        ...value,
        skuPercent: item.key,
      });
    },
    [onChange],
  );

  const _onSkuTypeChange = useCallback(
    (_, item) => {
      onChange({
        ...value,
        skuType: item.key,
        sku: item.sku,
      });
    },
    [onChange],
  );

  _setSku();
  return (
    <BasicSection
      sectionLabel='Resources SKU'
      sectionTooltip={PROTOCOL_TOOLTIPS.hivedSkuType}
    >
      <FormShortSection gap='m'>
        <Stack horizontal verticalAlign='baseline'>
          <div style={{ width: '20%' }}>SKU Count</div>
          <Stack.Item grow>
            <CSpinButton value={skuNum} min={1} onChange={_onSkuNumChange} />
          </Stack.Item>
        </Stack>
	{ webportalConfig.xpuEnabled === 'true' && (
          <Stack horizontal verticalAlign='baseline'>
            <div style={{ width: '20%' }}>SKU vGPU Size</div>
            <Stack.Item grow>
              <Dropdown
                placeholder='Select SKU vGPU size in percent'
                options={skuPercentOptions}
                onChange={_onSkuPercentChange}
                selectedKey={skuPercent}
                disabled={!isSingle}
                errorMessage={!isSingle ? 'The vGPU function for Distributed Tasks will be available shortly.' : null}
              />
            </Stack.Item>
          </Stack>
	)}
        <Stack horizontal verticalAlign='baseline'>
          <div style={{ width: '20%' }}>SKU Type</div>
          <Stack.Item grow>
            <Dropdown
              placeholder='Select SKU type'
              options={skuOptions}
              onChange={_onSkuTypeChange}
              selectedKey={skuType}
            />
          </Stack.Item>
        </Stack>
      </FormShortSection>
    </BasicSection>
  );
});

HivedSkuSection.propTypes = {
  value: PropTypes.object.isRequired,
  isSingle: PropTypes.bool,
  onChange: PropTypes.func,
};
