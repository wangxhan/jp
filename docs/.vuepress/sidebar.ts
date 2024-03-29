import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  {
    text: "记账",
    icon: "note",
    link: "/posts/bill/",
    prefix: "/posts/bill/",
    children: [
      {
        text: "2022年",
        icon: "note",
        collapsable: true,
        children: [
          "bill046",
          "bill045",
          "bill044",
          "bill043",
          "bill042",
          "bill041",
          "bill040",
          "bill039",
        ],
      },
      {
        text: "2021年及以前",
        icon: "note",
        children: [
          {
            text: "2021",
            icon: "note",
            collapsable: true,
            children: [
              "bill038",
              "bill037",
              "bill036",
              "bill035",
              "bill034",
              "bill033",
              "bill032",
              "bill031",
            ],
          },
          {
            text: "2020",
            icon: "note",
            collapsable: true,
            children: [
              "bill030",
              "bill029",
              "bill028",
              "bill027",
              "bill026",
              "bill025",
              "bill024",
              "bill023",
              "bill022",
            ],
          },
          {
            text: "2019",
            icon: "note",
            collapsable: true,
            children: [
              "bill021",
              "bill020",
              "bill019",
              "bill018",
              "bill017",
              "bill016",
              "bill015",
              "bill014",
              "bill013",
              "bill012",
              "bill011",
              "bill010",
              "bill009",
              "bill008",
              "bill007",
            ],
          },
          {
            text: "2018",
            icon: "note",
            collapsable: true,
            children: [
              "bill006",
              "bill005",
              "bill004",
              "bill003",
              "bill002",
              "bill001",
            ],
          },
        ],
      },
    ],
  },
]);
