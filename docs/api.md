---
id: api
title: Custom MDX
---
import ApiComponent from '../src/theme/ApiComponent.js';
import ChartComponent from '../src/theme/ChartComponent.js';

## Api Example

<ApiComponent/>

## Charts

<ChartComponent/>

## Tabs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>