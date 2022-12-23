---
title: 统计
icon: edit
date: 2022-12-23
category:
  - 统计
tag:
  - 图表
---

# 统计

<!-- more -->

::: echarts 分年度支出统计图

```js
module.exports = {
  legend: {},
  tooltip: {
    formatter: "{c}",
  },
  color: ["#61a0a8", "#2f4554", "#c23531", "#bda29a", "#c4ccd3"],
  dataset: [
    {
      dimensions: ["项目", "支出", "日期"],
      source: [
        ["水", 1826, "2022-12-23"],
        ["水", 1826, "2022-10-27"],
        ["水", 1826, "2022-08-27"],
        ["水", 1826, "2022-06-27"],
        ["税", 109600, "2022-05-30"],
        ["水", 1826, "2022-04-22"],
        ["水", 1826, "2022-02-21"],
        ["税", 14000, "2022-02-21"],
        ["水", 1826, "2021-12-24"],
        ["税", 14000, "2021-12-24"],
        ["水", 1826, "2021-10-26"],
        ["水", 1826, "2021-08-27"],
        ["税", 14000, "2021-07-29"],
        ["水", 1826, "2021-06-25"],
        ["税", 17300, "2021-05-31"],
        ["水", 1826, "2021-04-30"],
        ["水", 1826, "2021-02-28"],
        ["税", 16000, "2021-02-28"],
        ["水", 1826, "2020-12-30"],
        ["税", 16000, "2020-12-30"],
        ["水", 1826, "2020-10-27"],
        ["水", 1826, "2020-08-31"],
        ["税", 16000, "2020-07-28"],
        ["水", 1826, "2020-07-01"],
        ["税", 16500, "2020-06-01"],
        ["水", 1826, "2020-04-28"],
        ["水", 1826, "2020-02-27"],
        ["税", 16000, "2020-02-27"],
        ["水", 1826, "2019-12-26"],
        ["煤气", 2066, "2019-12-26"],
        ["税", 16000, "2019-12-26"],
        ["煤气", 1296, "2019-12-16"],
        ["煤气", 1271, "2019-11-13"],
        ["水", 1792, "2019-10-28"],
        ["煤气", 1242, "2019-09-06"],
        ["水", 1792, "2019-08-28"],
        ["煤气", 1242, "2019-07-30"],
        ["税", 16000, "2019-07-30"],
        ["水", 1792, "2019-06-26"],
        ["煤气", 1242, "2019-06-26"],
        ["煤气", 1242, "2019-05-27"],
        ["税", 16500, "2019-05-27"],
        ["水", 1792, "2019-04-22"],
        ["煤气", 1242, "2019-04-12"],
        ["煤气", 3764, "2019-04-05"],
        ["水", 1792, "2019-02-15"],
        ["煤气", 1242, "2019-02-08"],
        ["煤气", 2207, "2019-01-09"],
        ["水", 1792, "2018-12-18"],
        ["煤气", 1342, "2018-12-10"],
        ["煤气", 1512, "2018-11-08"],
        ["煤气", 1342, "2018-10-01"],
        ["煤气", 1185, "2018-09-09"],
      ],
    },
    {
      transform: {
        type: "filter",
        config: { dimension: "日期", gt: "2022", parser: "time" },
      },
    },
    {
      transform: {
        type: "filter",
        config: { dimension: "日期", gt: "2021", lt: "2022", parser: "time" },
      },
    },
    {
      transform: {
        type: "filter",
        config: { dimension: "日期", gt: "2020", lt: "2021", parser: "time" },
      },
    },
    {
      transform: {
        type: "filter",
        config: { dimension: "日期", gt: "2019", lt: "2020", parser: "time" },
      },
    },
    {
      transform: {
        type: "filter",
        config: { dimension: "日期", gt: "2018", lt: "2019", parser: "time" },
      },
    },
  ],
  series: [
    {
      type: "pie",
      radius: [20, 50],
      center: ["25%", "17%"],
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      datasetIndex: 1,
    },
    {
      type: "pie",
      radius: [20, 50],
      center: ["75%", "17%"],
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      datasetIndex: 2,
    },
    {
      type: "pie",
      radius: [20, 50],
      center: ["25%", "50%"],
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      datasetIndex: 3,
    },
    {
      type: "pie",
      radius: [20, 50],
      center: ["75%", "50%"],
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      datasetIndex: 4,
    },
    {
      type: "pie",
      radius: [20, 50],
      center: ["25%", "83%"],
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      datasetIndex: 5,
    },
  ],
};
```

:::

| **项目** | **支出** | **日期**   |                   |
| -------- | -------- | ---------- | ----------------- |
| 水       | 1826     | 2022-12-23 | [链接](./bill046) |
| 水       | 1826     | 2022-10-27 | [链接](./bill045) |
| 水       | 1826     | 2022-08-27 | [链接](./bill044) |
| 水       | 1826     | 2022-06-27 | [链接](./bill043) |
| 税       | 109600   | 2022-05-30 | [链接](./bill042) |
| 水       | 1826     | 2022-04-22 | [链接](./bill041) |
| 水       | 1826     | 2022-02-21 | [链接](./bill039) |
| 税       | 14000    | 2022-02-21 | [链接](./bill039) |
| 水       | 1826     | 2021-12-24 | [链接](./bill038) |
| 税       | 14000    | 2021-12-24 | [链接](./bill038) |
| 水       | 1826     | 2021-10-26 | [链接](./bill037) |
| 水       | 1826     | 2021-08-27 | [链接](./bill036) |
| 税       | 14000    | 2021-07-29 | [链接](./bill035) |
| 水       | 1826     | 2021-06-25 | [链接](./bill034) |
| 税       | 17300    | 2021-05-31 | [链接](./bill033) |
| 水       | 1826     | 2021-04-30 | [链接](./bill032) |
| 水       | 1826     | 2021-02-28 | [链接](./bill031) |
| 税       | 16000    | 2021-02-28 | [链接](./bill031) |
| 水       | 1826     | 2020-12-30 | [链接](./bill030) |
| 税       | 16000    | 2020-12-30 | [链接](./bill030) |
| 水       | 1826     | 2020-10-27 | [链接](./bill029) |
| 水       | 1826     | 2020-08-31 | [链接](./bill028) |
| 税       | 16000    | 2020-07-28 | [链接](./bill027) |
| 水       | 1826     | 2020-07-01 | [链接](./bill026) |
| 税       | 16500    | 2020-06-01 | [链接](./bill024) |
| 水       | 1826     | 2020-04-28 | [链接](./bill023) |
| 水       | 1826     | 2020-02-27 | [链接](./bill022) |
| 税       | 16000    | 2020-02-27 | [链接](./bill022) |
| 水       | 1826     | 2019-12-26 | [链接](./bill021) |
| 煤气     | 2066     | 2019-12-26 | [链接](./bill021) |
| 税       | 16000    | 2019-12-26 | [链接](./bill021) |
| 煤气     | 1296     | 2019-12-16 | [链接](./bill020) |
| 煤气     | 1271     | 2019-11-13 | [链接](./bill019) |
| 水       | 1792     | 2019-10-28 | [链接](./bill018) |
| 煤气     | 1242     | 2019-09-06 | [链接](./bill017) |
| 水       | 1792     | 2019-08-28 | [链接](./bill016) |
| 煤气     | 1242     | 2019-07-30 | [链接](./bill015) |
| 税       | 16000    | 2019-07-30 | [链接](./bill015) |
| 水       | 1792     | 2019-06-26 | [链接](./bill014) |
| 煤气     | 1242     | 2019-06-26 | [链接](./bill014) |
| 煤气     | 1242     | 2019-05-27 | [链接](./bill013) |
| 税       | 16500    | 2019-05-27 | [链接](./bill013) |
| 水       | 1792     | 2019-04-22 | [链接](./bill012) |
| 煤气     | 1242     | 2019-04-12 | [链接](./bill011) |
| 煤气     | 3764     | 2019-04-05 | [链接](./bill010) |
| 水       | 1792     | 2019-02-15 | [链接](./bill009) |
| 煤气     | 1242     | 2019-02-08 | [链接](./bill008) |
| 煤气     | 2207     | 2019-01-09 | [链接](./bill007) |
| 水       | 1792     | 2018-12-18 | [链接](./bill006) |
| 煤气     | 1342     | 2018-12-10 | [链接](./bill005) |
| 煤气     | 1512     | 2018-11-08 | [链接](./bill004) |
| 煤气     | 1342     | 2018-10-01 | [链接](./bill003) |
| 煤气     | 1185     | 2018-09-09 | [链接](./bill002) |