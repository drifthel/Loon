# drifthel / Loon
Maintained by [drifthel](https://github.com/drifthel)
**Plugins · Configuration · Rules**

个人维护的 Loon 插件与配置项目。

专注于 iOS 广告过滤、应用优化、网页增强与网络分流。

---

## Overview | 项目概览

| 项目 | 说明 | 链接 |
|:---|:---|:---|
| AdBlock | 自定义广告过滤插件 | [安装](https://raw.githubusercontent.com/drifthel/Loon/main/Plugins/blockAds.plugin) · [源码](https://github.com/drifthel/Loon/blob/main/Plugins/blockAds.plugin) |
| Configuration | Loon 配置文件 `loon.lcf` | [查看](https://github.com/drifthel/Loon/blob/main/Config/loon.lcf) · [导入 Loon](https://www.nsloon.com/openloon/import?sub=https%3A%2F%2Fraw.githubusercontent.com%2Fdrifthel%2FLoon%2Fmain%2FConfig%2Floon.lcf) · [源码目录](https://github.com/drifthel/Loon/tree/main/Config) |

---

## Plugins | 插件

| 插件 | 功能说明 |
|:---|:---|
| `blockAds` | 针对常用 iOS 应用过滤开屏广告、信息流广告及推广内容 |

### Modifications | 修改记录

| 项目 | 修改内容 |
|:---|:---|
| MLOL | 新增推荐接口拦截，阻止 `mlol.qt.qq.com/go/recommend` 相关请求 |

---

## Configuration | 配置

| 配置项目 | 数量 |
|:---|---:|
| 插件订阅 | 41 条 |
| 远程分流规则 | 37 条 |
| 代理策略组 | 9 个 |
| 节点筛选器 | 6 个 |

<details>
<summary>Plugin Subscriptions | 插件订阅详情</summary>

| 分类 | 插件 | 功能说明 |
|:---|:---|:---|
| 自定义 | `blockAds` | 自定义广告过滤 |
| 地图与出行 | `Amap_remove_ads`、`Umetrip_remove_ads`、`TaobaoTravel_remove_ads`、`12306_remove_ads`、`2bulu_remove_ads` | 地图、航旅及出行应用优化 |
| 电商购物 | `FleaMarket_remove_ads`、`Weidian_remove_ads`、`Taobao_remove_ads`、`PuPuMall_remove_ads`、`PinDuoDuo_remove_ads`、`JD_remove_ads`、`MrHema_remove_ads`、`Dewu_remove_ads` | 电商平台广告过滤 |
| 社交通讯 | `Weixin_Official_Accounts_remove_ads`、`Weixin_external_links_unlock`、`WexinMiniPrograms_Remove_ads`、`Weibo_remove_ads`、`TelegramRedirect` | 社交应用优化、外链解锁及链接跳转 |
| 内容娱乐 | `CosmosPodcast_remove_ads`、`NeteaseCloudMusic_remove_ads`、`NetEaseGodlike_remove_ads`、`Bilibili_remove_ads`、`DouBan` | 内容平台及影音应用优化 |
| 其他应用 | `XunLei_remove_ads`、`RedPaper_remove_ads`、`XiaoCan_remove_ads`、`MeiTu_remove_ads`、`QuarkBrowser_remove_ads`、`Damai_remove_ads` | 应用广告过滤及功能优化 |
| 工具与规则 | `webpage`、`myblockads`、`startup`、`Script-Hub`、`Google`、`AppleWeatherEnhancer`、`Block_HTTPDNS`、`BlockAdvertisers`、`Remove_ads_by_keli`、`Sub-Store`、`BoxJs` | 网页增强、脚本管理、网络过滤及订阅管理 |

注：Script-Hub 包含两个不同订阅来源。

</details>

<details>
<summary>Remote Rules | 远程分流规则</summary>

| 分类 | 规则集 | 分流策略 |
|:---|:---|:---|
| 国际服务 | Microsoft、TikTok | `DIRECT` |
| 国际服务 | GitHub、Twitter、Instagram、Telegram、Threads、Global | `时延优选` |
| 国际服务 | Gemini | `Rare Areas` |
| 国际服务 | AI | `AI` |
| 国际服务 | GoogleVoice | `United States` |
| Apple 服务 | AppleFirmware、AppStore、Apple、iCloud、AppleMusic | `DIRECT` |
| 国内服务 | Tencent、WeChat、ChinaMax、UnionPay、MeiTuan、HeMa、FeiZhu、Duolingo、DouBan、ChinaTelecom、ByteDance、BiliBili、Baidu、Alibaba、AliPay、Douyin、XiaoHongShu、Xunlei | `DIRECT` |
| 广告与网络 | `filter.list` | `REJECT` |
| 广告与网络 | LAN、CN REGION | `DIRECT` |

</details>

### Local Rules | 本地规则

| 匹配域名或请求 | 策略 |
|:---|:---|
| `mlol.qt.qq.com` | `DIRECT` |
| `mlol.qt.qq.com/go/express/` 相关请求 | `REJECT`（原始规则语法待核对） |
| `amdc.m.taobao.com` | `DIRECT` |
| `apple.com`、`itunes.apple.com`、`icloud.com` | `DIRECT` |
| `aliyuncs.com` | `DIRECT` |
| `tiktok-live.oss-cn-chengdu.aliyuncs.com` | `DIRECT` |
| `dig.bdurl.net` | `DIRECT` |

### Proxy Groups | 代理策略组

| 策略组 | 类型 | 功能说明 |
|:---|:---|:---|
| 手动选择 | `Select` | 手动选择代理线路 |
| 时延优选 | `URL-Test` | 自动选择低延迟线路 |
| Global | `Select` | 全部节点选择 |
| Hong Kong | `URL-Test` | 香港节点自动测速 |
| Japan | `URL-Test` | 日本节点自动测速 |
| Singapore | `URL-Test` | 新加坡节点自动测速 |
| United States | `URL-Test` | 美国节点自动测速 |
| Rare Areas | `Select` | 其他地区节点 |
| AI | `URL-Test` | AI 服务专用线路 |

### Node Filters | 节点筛选

| 筛选器 | 节点范围 |
|:---|:---|
| `Sub-ALL` | 全部节点 |
| `Sub-HK` | 香港节点 |
| `Sub-JP` | 日本节点 |
| `Sub-SG` | 新加坡节点 |
| `Sub-US` | 美国节点 |
| `Sub-RA` | 其他地区节点 |

---

## DNS & Network | 网络设置

| 项目 | 配置说明 |
|:---|:---|
| IP 模式 | IPv4 优先 |
| IPv6 TUN | 关闭 |
| DNS | 系统 DNS、阿里 DNS、腾讯 DNS |
| 加密 DNS | AliDNS DoH / DoH3 / DoQ |
| SNI | 辅助规则匹配 |
| STUN | 直连时丢弃 |
| UDP Fallback | `REJECT` |
| 网络绕过 | 局域网及私有 IP |

## Host Mapping | 本地映射

| 域名 |
|:---|
| `iosapps.itunes.apple.com` |
| `updates.cdn-apple.com` |
| `updates.g.aaplimg.com` |

---

## Notes | 说明

- 本项目为个人维护的 Loon 插件及配置集合。
- 公开配置不包含个人 MITM 证书、私钥及密码。
- 插件及远程规则由各自上游维护，实际功能以上游项目为准。
- 使用前请根据自己的节点订阅及网络环境调整配置。
- 部分本地规则语法仍需进一步核对。

---

Maintained by [drifthel](https://github.com/drifthel)
