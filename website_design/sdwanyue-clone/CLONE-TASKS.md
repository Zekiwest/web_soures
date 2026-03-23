# 万岳科技网站复刻任务清单

**目标网站**: https://www.sdwanyue.com/
**本地地址**: http://localhost:3002

---

## 首页模块

### ✅ 已通过
| 模块 | 类名 | 高度 | 状态 |
|------|------|------|------|
| 导航 | header | - | ✅ 通过 |
| Banner | swiper-container | 570px | ✅ 通过 |
| 数据统计 | events-container | 118px | ✅ 通过 (stats-section) |
| 系统产品 | system-container | 840px | ✅ 通过 |
| 解决方案 | scheme-info | 785px | ✅ 通过 |
| 服务保障 | ensure-container | 612px | ✅ 通过 |

### ⏳ 待复刻
| 序号 | 模块 | 类名 | 高度 | 优先级 |
|------|------|------|------|--------|
| 1 | 更多服务 | drawer-container | 335px | 中 |
| 2 | 资质证书 | auth-container | 316px | 中 |
| 3 | 新闻动态 | new-container | 399px | 中 |
| 4 | 页脚 | footer | - | 高 |

---

## 二级页面 (按优先级)

### 产品页面
| 页面 | 路径 | 状态 |
|------|------|------|
| 在线教育系统 | /education | ⏳ |
| 知识付费系统 | /newknowledge | ⏳ |
| 企业内训系统 | /neixun | ⏳ |
| 智慧党建系统 | /newparty | ⏳ |
| 互联网医院系统 | /hospital | ⏳ |
| 在线问诊系统 | /wenzhen | ⏳ |
| 数字药店系统 | /D-drugstore | ⏳ |
| 同城O2O系统 | /O2O | ⏳ |
| 同城跑腿系统 | /paotui | ⏳ |
| 代驾系统 | /daijia | ⏳ |
| 在线预约系统 | /yuyue | ⏳ |
| 多商户商城系统 | /new_shop | ⏳ |

### 其他页面
| 页面 | 路径 | 状态 |
|------|------|------|
| 产品体验 | /free | ⏳ |
| 产品动态 | /lists/2 | ⏳ |
| 常见问题 | /lists/3 | ⏳ |
| 资质展示 | /zizhi | ⏳ |
| 系统定制 | /dingzhi | ⏳ |

---

## 六维度检查模板

每个模块复刻时复制此模板：

```
### [模块名称]

#### 形 (Shape)
- [ ] width: ?px
- [ ] height: ?px
- [ ] padding: ?px
- [ ] border-radius: ?px
- [ ] box-shadow: ?

#### 色 (Color)
- [ ] background: ?
- [ ] color: ?
- [ ] gradient: ?

#### 字 (Typography)
- [ ] font-size: ?px
- [ ] font-weight: ?
- [ ] line-height: ?

#### 构 (Layout)
- [ ] display: flex/grid
- [ ] gap: ?px
- [ ] align-items: ?

#### 质 (Texture)
- [ ] 背景图: URL
- [ ] 图标: URL

#### 动 (Animation)
- [ ] transition: ?
- [ ] hover: ?
```

---

## 样式提取脚本

保存为 `extract-styles.js`:

```javascript
const puppeteer = require('puppeteer');

const URL = 'https://www.sdwanyue.com/';
const SELECTOR = '.scheme-container'; // 修改为要提取的选择器

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 2000 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  const styles = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;

    const s = window.getComputedStyle(el);

    // 获取子元素
    const children = [];
    el.querySelectorAll('*').forEach(child => {
      if (child.children.length === 0 && child.textContent?.trim()) {
        const cs = window.getComputedStyle(child);
        children.push({
          tag: child.tagName,
          text: child.textContent.trim().substring(0, 30),
          color: cs.color,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight
        });
      }
    });

    return {
      // 形
      width: s.width,
      height: s.height,
      padding: s.padding,
      borderRadius: s.borderRadius,
      boxShadow: s.boxShadow,
      // 色
      background: s.background.substring(0, 200),
      color: s.color,
      // 字
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      // 构
      display: s.display,
      gap: s.gap,
      alignItems: s.alignItems,
      // 子元素
      children: children.slice(0, 10)
    };
  }, SELECTOR);

  console.log(JSON.stringify(styles, null, 2));
  await browser.close();
})();
```

---

## 当前进度

- [x] 导航模块
- [x] Banner 轮播
- [x] 数据统计
- [x] 系统产品
- [x] 解决方案
- [x] 服务保障
- [ ] 更多服务
- [ ] 资质证书
- [ ] 新闻动态
- [ ] 页脚
- [ ] 二级页面

**完成度**: 6/10 首页模块 (60%)