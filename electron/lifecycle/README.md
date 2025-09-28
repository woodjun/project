### 生命周期

electron从创建到销毁的过程中会触发一系列的事件，触发事件如下：

- ready：初始化完成
- dom-ready：一个窗口中的文本加载完成
- did-finish-load：导航完成时触发
- window-all-closed：所有窗口都被关闭时触发
- before-quit：在关闭窗口之前触发
- will-quit：在窗口关闭并且应用退出时触发
- quit：当所有窗口被关闭时触发