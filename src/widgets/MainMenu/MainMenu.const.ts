import { TreeViewItem } from "@/shared/ui/components/TreeView";

export const menuItems: TreeViewItem[] = [
  {
    id: "0",
    title: "frontend",
    isDirectory: true,
    items: [
      {
        id: "1",
        title: "react",
        isDirectory: true,
        items: [
          { id: "2", title: "Что такое VDOM?", isDirectory: false },
          { id: "3", title: "Как избежать перерендера?", isDirectory: false },
          { id: "4", title: "Какие бывают хуки?", isDirectory: false },
          {
            id: "5",
            title: "Как можно хранить состояние?",
            isDirectory: false,
          },
        ],
      },
      {
        id: "6",
        title: "js",
        isDirectory: true,
        items: [
          { id: "7", title: "Какие типы бывают?", isDirectory: false },
          { id: "8", title: "Что такое this?", isDirectory: false },
          { id: "9", title: "Что такое прототип?", isDirectory: false },
          {
            id: "10",
            title: "Как обрабатывается js в браузере?",
            isDirectory: false,
          },
        ],
      },
      { id: "11", title: "Зачем всё это?", isDirectory: false },
    ],
  },
];
