# [0079. window.onbeforeunload](https://github.com/Tdahuyou/TNotes.html-css-js/tree/main/notes/0079.%20window.onbeforeunload)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 📒 `window.onbeforeunload`](#2--windowonbeforeunload)
- [3. 💻 demos.1 - window.onbeforeunload 基本使用](#3--demos1---windowonbeforeunload-基本使用)
- [4. 🔗 References](#4--references)

<!-- endregion:toc -->

## 1. 📝 概述

- 知识点：
  - 掌握 `window.onbeforeunload` 的基本使用
- 评价：
  - 在 chrome 上无法配置弹出的提示内容，【1】给 `window.onbeforeunload` 赋值的函数返回一个空字符串和【2】配置 `event.returnValue` 为指定内容，最终【1】、【2】的效果是一样的。在其它浏览器上没有做多测试。

## 2. 📒 `window.onbeforeunload`

- `window.onbeforeunload`
  - `window.onbeforeunload` 是一个事件处理器，它用于在窗口、页面或标签即将卸载时触发。
  - 使用 `onbeforeunload` 事件可以显示一个确认对话框给用户，询问他们是否真的要离开页面。
  - **当用户尝试关闭浏览器窗口、刷新页面、导航到另一个页面或者通过其他方式离开当前页面时**，这个事件会被触发。
  - **这在用户正在编辑表单或其他数据而尚未保存的情况下特别有用**，因为它提供了一种防止意外丢失工作的方式。
- 注意：
  - 滥用 `onbeforeunload` 可能会导致糟糕的用户体验，应谨慎使用，仅在必要时提醒用户。

## 3. 💻 demos.1 - window.onbeforeunload 基本使用

- 在页面上插入以下脚本，当页面要被关闭或者刷新的时候，会弹出确认提示框。

```javascript {10}
window.onbeforeunload = function (event) {
  // 设置对话框中的消息（注意：现代浏览器可能忽略自定义消息）
  event.returnValue = '您确定要离开此页面吗？未保存的数据将会丢失。'
  // 返回相同的字符串也是必需的，以确保兼容性
  return event.returnValue
}
// 以 chrome 为例，我们配置的文案并不会生效，而是使用浏览器预设好的固定文案。

// 其实只需要让 window.onbeforeunload 绑定的函数返回一个字符串，它就能够正常工作。
window.onbeforeunload = () => ''
// 这么写，也会在页面被关闭或者刷新之前，触发一个确认对话框。
```

::: code-group

<<< ./demos/1/1.html {}

<<< ./demos/1/2.html {}

:::

- 关闭页面：
  - ![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-08-21-11-13-18.png)
- 刷新页面：
  - ![img](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-01-02-09-46-36.png)

## 4. 🔗 References

- https://developer.mozilla.org/zh-CN/docs/Web/API/Window/beforeunload_event
  - mdn - window.onbeforeunload
