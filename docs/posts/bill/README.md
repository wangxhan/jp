---
title: 统计
icon: edit
date: 2022-07-01
category:
  - 统计
tag:
  - 图表
---

# 统计

<!-- more -->

::: echarts 分类支出

```json
{
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    }
  },
  "legend": {},
  "xAxis": {
    "type": "value"
  },
  "yAxis": {
    "type": "category",
    "data": ["2018", "2019", "2020", "2021", "2022"]
  },
  "series": [
    {
      "name": "固定资产税",
      "type": "bar",
      "stack": "total",
      "label": {
        "show": true
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [0, 48500, 48500, 45300, 123600]
    },
    {
      "name": "水",
      "type": "bar",
      "stack": "total",
      "label": {
        "show": true
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [1792, 10786, 10956, 10956, 5478]
    },
    {
      "name": "煤气",
      "type": "bar",
      "stack": "total",
      "label": {
        "show": true
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [5381, 18056, 0, 0, 0]
    }
  ]
}
```

:::

::: echarts 余额

```json
{
  "polar": {
      "radius": [30, "80%"]
    },
  "angleAxis": {
      "max": 400000,
      "startAngle": 75
    },
  "radiusAxis": {
      "type": "category",
      "data": ["支出", "转账"]
    },
  "tooltip": {},
  "series": {
      "type": "bar",
      "data": [361305, 400000],
      "coordinateSystem": "polar",
      "label": {
        "show": true,
        "position": "middle",
        "formatter": "{b}: {c}"
      }
    }
}
```

:::
