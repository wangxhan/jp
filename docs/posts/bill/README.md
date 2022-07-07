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

| **item** | **日期**     | **现金支出** | **水** | **煤气** | **固定资产税** | **转账** |
|:--------:|:----------:|:--------:|:-----:|:------:|:---------:|:------:|
| ---    | 当前汇总       | 361305   | 39968 | 23437  | 297900    | 400000 |
| **43**   | 27/06/2022 | 1826     | 1826  | 0      | 0         | 0      |
| **42**   | 30/05/2022 | 109600   | 0     | 0      | 109600    | 0      |
| **41**   | 22/04/2022 | 1826     | 1826  | 0      | 0         | 0      |
| **40**   | 22/02/2022 | 0        | 0     | 0      | 0         | 150000 |
| **39**   | 21/02/2022 | 15826    | 1826  | 0      | 14000     | 0      |
| ---    |            |          |       |        |           |        |
| **38**   | 24/12/2021 | 15826    | 1826  | 0      | 14000     | 0      |
| **37**   | 26/10/2021 | 1826     | 1826  | 0      | 0         | 0      |
| **36**   | 27/08/2021 | 1826     | 1826  | 0      | 0         | 0      |
| **35**   | 29/07/2021 | 14000    | 0     | 0      | 14000     | 0      |
| **34**   | 25/06/2021 | 1826     | 1826  | 0      | 0         | 0      |
| **33**   | 31/05/2021 | 17300    | 0     | 0      | 17300     | 0      |
| **32**   | 30/04/2021 | 1826     | 1826  | 0      | 0         | 0      |
| **31**   | 28/02/2021 | 17826    | 1826  | 0      | 16000     | 0      |
| ---    |            |          |       |        |           |        |
| **30**   | 30/12/2020 | 17826    | 1826  | 0      | 16000     | 0      |
| **29**   | 27/10/2020 | 1826     | 1826  | 0      | 0         | 0      |
| **28**   | 31/08/2020 | 1826     | 1826  | 0      | 0         | 0      |
| **27**   | 28/07/2020 | 16000    | 0     | 0      | 16000     | 0      |
| **26**   | 01/07/2020 | 1826     | 1826  | 0      | 0         | 0      |
| **25**   | 03/06/2020 | 0        | 0     | 0      | 0         | 150000 |
| **24**   | 01/06/2020 | 16500    | 0     | 0      | 16500     | 0      |
| **23**   | 28/04/2020 | 1826     | 1826  | 0      | 0         | 0      |
| **22**   | 27/02/2020 | 17826    | 1826  | 0      | 16000     | 0      |
| ---    |            |          |       |        |           |        |
| **21**   | 26/12/2019 | 19892    | 1826  | 2066   | 16000     | 0      |
| **20**   | 16/12/2019 | 1296     | 0     | 1296   | 0         | 0      |
| **19**   | 13/11/2019 | 1271     | 0     | 1271   | 0         | 0      |
| **18**   | 28/10/2019 | 1792     | 1792  | 0      | 0         | 0      |
| **17**   | 06/09/2019 | 1242     | 0     | 1242   | 0         | 0      |
| **16**   | 28/08/2019 | 1792     | 1792  | 0      | 0         | 0      |
| **15**   | 30/07/2019 | 17242    | 0     | 1242   | 16000     | 0      |
| **14**   | 26/06/2019 | 3034     | 1792  | 1242   | 0         | 0      |
| **13**   | 27/05/2019 | 17742    | 0     | 1242   | 16500     | 0      |
| **12**   | 22/04/2019 | 1792     | 1792  | 0      | 0         | 0      |
| **11**   | 12/04/2019 | 1242     | 0     | 1242   | 0         | 0      |
| **10**   | 05/04/2019 | 3764     | 0     | 3764   | 0         | 0      |
| **9**    | 15/02/2019 | 1792     | 1792  | 0      | 0         | 0      |
| **8**    | 08/02/2019 | 1242     | 0     | 1242   | 0         | 0      |
| **7**    | 09/01/2019 | 2207     | 0     | 2207   | 0         | 0      |
| ---     |            |          |       |        |           |        |
| **6**    | 18/12/2018 | 1792     | 1792  | 0      | 0         | 0      |
| **5**    | 10/12/2018 | 1342     | 0     | 1342   | 0         | 0      |
| **4**    | 08/11/2018 | 1512     | 0     | 1512   | 0         | 0      |
| **3**    | 01/10/2018 | 1342     | 0     | 1342   | 0         | 0      |
| **2**    | 09/09/2018 | 1185     | 0     | 1185   | 0         | 0      |
| **1**    | 08/08/2018 | 0        | 0     | 0      | 0         | 100000 |

::: echarts 分年度、分类、分项支出统计图

```js

var data = [
    {
        name: '2022',
        itemStyle: {
            color: '#da0d68'
        },
        children: [
            {
                name: '水',
                itemStyle: {
                    color: '#975e6d'
                },
                children: [
                    {
                        name: '2022-06-27',
                        value: 1826,
                        itemStyle: {
                            color: '#f99e1c'
                        }
                    },
                    {
                        name: '2022-04-22',
                        value: 1826,
                        itemStyle: {
                            color: '#ef5a78'
                        }
                    },
                    {
                        name: '2022-02-21',
                        value: 1826,
                        itemStyle: {
                            color: '#f7f1bd'
                        }
                    }
                ]
            },
            {
                name: '固定资产税',
                itemStyle: {
                    color: '#e0719c'
                },
                children: [
                    {
                        name: '2022-05-30',
                        value: 109600,
                        itemStyle: {
                            color: '#ef5a78'
                        }
                    },
                    {
                        name: '2022-02-21',
                        value: 14000,
                        itemStyle: {
                            color: '#f7f1bd'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: '2021',
        itemStyle: {
            color: '#da1d23'
        },
        children: [
            {
                name: '水',
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [
                    {
                        name: '2021-12-24',
                        value: 1826,
                        itemStyle: {
                            color: '#3e0317'
                        }
                    },
                    {
                        name: '2021-10-26',
                        value: 1826,
                        itemStyle: {
                            color: '#e62969'
                        }
                    },
                    {
                        name: '2021-08-27',
                        value: 1826,
                        itemStyle: {
                            color: '#6569b0'
                        }
                    },
                    {
                        name: '2021-06-25',
                        value: 1826,
                        itemStyle: {
                            color: '#ef2d36'
                        }
                    },
                    {
                        name: '2021-04-30',
                        value: 1826,
                        itemStyle: {
                            color: '#b53b54'
                        }
                    },
                    {
                        name: '2021-02-28',
                        value: 1826,
                        itemStyle: {
                            color: '#a5446f'
                        }
                    }
                ]
            },
            {
                name: '固定资产税',
                itemStyle: {
                    color: '#c94a44'
                },
                children: [
                    {
                        name: '2021-12-24',
                        value: 14000,
                        itemStyle: {
                            color: '#f2684b'
                        }
                    },
                    {
                        name: '2021-07-29',
                        value: 14000,
                        itemStyle: {
                            color: '#e73451'
                        }
                    },
                    {
                        name: '2021-05-31',
                        value: 17300,
                        itemStyle: {
                            color: '#e65656'
                        }
                    },
                    {
                        name: '2021-02-28',
                        value: 16000,
                        itemStyle: {
                            color: '#f89a1c'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: '2020',
        itemStyle: {
            color: '#dd4c51'
        },
        children: [
            {
                name: '水',
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [
                    {
                        name: '2020-12-30',
                        value: 1826,
                        itemStyle: {
                            color: '#3e0317'
                        }
                    },
                    {
                        name: '2020-10-27',
                        value: 1826,
                        itemStyle: {
                            color: '#e62969'
                        }
                    },
                    {
                        name: '2020-08-31',
                        value: 1826,
                        itemStyle: {
                            color: '#6569b0'
                        }
                    },
                    {
                        name: '2020-07-01',
                        value: 1826,
                        itemStyle: {
                            color: '#ef2d36'
                        }
                    },
                    {
                        name: '2020-04-28',
                        value: 1826,
                        itemStyle: {
                            color: '#b53b54'
                        }
                    },
                    {
                        name: '2020-02-27',
                        value: 1826,
                        itemStyle: {
                            color: '#a5446f'
                        }
                    }
                ]
            },
            {
                name: '固定资产税',
                itemStyle: {
                    color: '#c94a44'
                },
                children: [
                    {
                        name: '2020-12-30',
                        value: 16000,
                        itemStyle: {
                            color: '#f2684b'
                        }
                    },
                    {
                        name: '2020-07-28',
                        value: 16000,
                        itemStyle: {
                            color: '#e73451'
                        }
                    },
                    {
                        name: '2020-06-01',
                        value: 16500,
                        itemStyle: {
                            color: '#e65656'
                        }
                    },
                    {
                        name: '2020-02-27',
                        value: 16000,
                        itemStyle: {
                            color: '#f89a1c'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: '2019',
        itemStyle: {
            color: '#f7a128'
        },
        children: [
            {
                name: '水',
                itemStyle: {
                    color: '#f26355'
                },
                children: [
                    {
                        name: '2019-12-26',
                        value: 1826,
                        itemStyle: {
                            color: '#3e0317'
                        }
                    },
                    {
                        name: '2019-10-28',
                        value: 1792,
                        itemStyle: {
                            color: '#e62969'
                        }
                    },
                    {
                        name: '2019-08-28',
                        value: 1792,
                        itemStyle: {
                            color: '#6569b0'
                        }
                    },
                    {
                        name: '2019-06-26',
                        value: 1792,
                        itemStyle: {
                            color: '#ef2d36'
                        }
                    },
                    {
                        name: '2019-04-22',
                        value: 1792,
                        itemStyle: {
                            color: '#b53b54'
                        }
                    },
                    {
                        name: '2019-02-15',
                        value: 1792,
                        itemStyle: {
                            color: '#a5446f'
                        }
                    }
                ]
            },
            {
                name: '煤气',
                itemStyle: {
                    color: '#e2631e'
                },
                children: [
                    {
                        name: '2019-12-26',
                        value: 2066,
                        itemStyle: {
                            color: '#3e0317'
                        }
                    },
                    {
                        name: '2019-12-16',
                        value: 1296,
                        itemStyle: {
                            color: '#e62969'
                        }
                    },
                    {
                        name: '2019-11-13',
                        value: 1271,
                        itemStyle: {
                            color: '#6569b0'
                        }
                    },
                    {
                        name: '2019-09-06',
                        value: 1242,
                        itemStyle: {
                            color: '#ef2d36'
                        }
                    },
                    {
                        name: '2019-07-30',
                        value: 1242,
                        itemStyle: {
                            color: '#b53b54'
                        }
                    },
                    {
                        name: '2019-06-26',
                        value: 1242,
                        itemStyle: {
                            color: '#a5446f'
                        }
                    },
                    {
                        name: '2019-05-27',
                        value: 1242,
                        itemStyle: {
                            color: '#3e0317'
                        }
                    },
                    {
                        name: '2019-04-12',
                        value: 1242,
                        itemStyle: {
                            color: '#e62969'
                        }
                    },
                    {
                        name: '2019-04-05',
                        value: 3764,
                        itemStyle: {
                            color: '#6569b0'
                        }
                    },
                    {
                        name: '2019-02-08',
                        value: 1242,
                        itemStyle: {
                            color: '#ef2d36'
                        }
                    },
                    {
                        name: '2019-01-09',
                        value: 2207,
                        itemStyle: {
                            color: '#b53b54'
                        }
                    }
                ]
            },
            {
                name: '固定资产税',
                itemStyle: {
                    color: '#fde404'
                },
                children: [
                    {
                        name: '2019-12-26',
                        value: 16000,
                        itemStyle: {
                            color: '#f2684b'
                        }
                    },
                    {
                        name: '2019-07-30',
                        value: 16000,
                        itemStyle: {
                            color: '#e73451'
                        }
                    },
                    {
                        name: '2010-05-27',
                        value: 16500,
                        itemStyle: {
                            color: '#e65656'
                        }
                    }
                ]
            }
        ]
    },
    {
        name: '2018',
        itemStyle: {
            color: '#da0d68'
        },
        children: [
            {
                name: '水',
                itemStyle: {
                    color: '#975e6d'
                },
                children: [
                    {
                        name: '2018-12-18',
                        value: 1792,
                        itemStyle: {
                            color: '#f99e1c'
                        }
                    }
                ]
            },
            {
                name: '煤气',
                itemStyle: {
                    color: '#e0719c'
                },
                children: [
                    {
                        name: '2018-12-10',
                        value: 1342,
                        itemStyle: {
                            color: '#ef5a78'
                        }
                    },
                    {
                        name: '2018-11-08',
                        value: 1512,
                        itemStyle: {
                            color: '#f7f1bd'
                        }
                    },
                    {
                        name: '2018-10-01',
                        value: 1342,
                        itemStyle: {
                            color: '#e65656'
                        }
                    },
                    {
                        name: '2018-09-09',
                        value: 1185,
                        itemStyle: {
                            color: '#f89a1c'
                        }
                    }
                ]
            }
        ]
    }
]

module.exports = {
    series: {
        type: 'sunburst',
        data: data,
        radius: [0, '95%'],
        sort: undefined,
        emphasis: {
            focus: 'ancestor'
        },
        levels: [
            {},
            {
                r0: '15%',
                r: '35%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            },
            {
                r0: '35%',
                r: '70%',
                label: {
                    align: 'right'
                }
            },
            {
                r0: '70%',
                r: '72%',
                label: {
                    position: 'outside',
                    padding: 5,
                    silent: false,
                },
                itemStyle: {
                    borderWidth: 3
                }
            }
        ]
    }
}


```

:::

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