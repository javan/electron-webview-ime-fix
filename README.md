# Example Electron app with workaround for incorrect IME position in `<webview>`s

Extracted from [Basecamp 3's app](https://basecamp.com/3/via).

* Electron issue: https://github.com/electron/electron/issues/4539
* Root Chromium issue: https://bugs.chromium.org/p/chromium/issues/detail?id=593134

---

Before:
![before](https://cloud.githubusercontent.com/assets/5355/19023103/05f30154-88b4-11e6-99a3-eeab107dfe5a.gif)

After:
![after](https://cloud.githubusercontent.com/assets/5355/19023111/153c93a0-88b4-11e6-8a3d-3725bf508b5f.gif)
