# drifthel / Loon

**Plugins · Configuration · Rules**

Personal Loon plugins and configuration maintained by [@drifthel](https://github.com/drifthel).

广告过滤、应用优化与网络分流。

---

## Overview

| Resource | Description | Link |
|:--|:--|:--|
| Plugin | AdBlock | [Install](https://raw.githubusercontent.com/drifthel/Loon/main/Plugins/blockAds.plugin) · [Source](https://github.com/drifthel/Loon/blob/main/Plugins/blockAds.plugin) |
| Configuration | loon.lcf | [View](https://github.com/drifthel/Loon/blob/main/Config/loon.lcf) · [Import](https://www.nsloon.com/openloon/import?sub=https%3A%2F%2Fraw.githubusercontent.com%2Fdrifthel%2FLoon%2Fmain%2FConfig%2Floon.lcf) |
| Repository | Config source | [Browse](https://github.com/drifthel/Loon/tree/main/Config) |

---

## Plugins

| Name | Description |
|:--|:--|
| `blockAds` | Custom ad-blocking plugin |

### Modifications

| Target | Modification |
|:--|:--|
| MLOL | Block recommendation requests at `mlol.qt.qq.com/go/recommend` |

---

## Configuration

**File:** `Config/loon.lcf`

| Component | Count |
|:--|--:|
| Plugin subscriptions | 41 |
| Remote rule sets | 37 |
| Proxy groups | 9 |
| Node filters | 6 |

---

## Plugin Subscriptions

<details>
<summary>View all plugin subscriptions</summary>

| Category | Plugins |
|:--|:--|
| Custom | `blockAds` |
| Maps & Travel | `Amap_remove_ads`, `Umetrip_remove_ads`, `TaobaoTravel_remove_ads`, `12306_remove_ads`, `2bulu_remove_ads` |
| Shopping | `FleaMarket_remove_ads`, `Weidian_remove_ads`, `Taobao_remove_ads`, `PuPuMall_remove_ads`, `PinDuoDuo_remove_ads`, `JD_remove_ads`, `MrHema_remove_ads`, `Dewu_remove_ads` |
| Social | `Weixin_Official_Accounts_remove_ads`, `Weixin_external_links_unlock`, `WexinMiniPrograms_Remove_ads`, `Weibo_remove_ads`, `TelegramRedirect` |
| Media | `CosmosPodcast_remove_ads`, `NeteaseCloudMusic_remove_ads`, `NetEaseGodlike_remove_ads`, `Bilibili_remove_ads`, `DouBan` |
| Other Apps | `XunLei_remove_ads`, `RedPaper_remove_ads`, `XiaoCan_remove_ads`, `MeiTu_remove_ads`, `QuarkBrowser_remove_ads`, `Damai_remove_ads` |
| Utilities | `webpage`, `myblockads`, `startup`, `Script-Hub` (2 sources), `Google`, `AppleWeatherEnhancer`, `Block_HTTPDNS`, `BlockAdvertisers`, `Remove_ads_by_keli`, `Sub-Store`, `BoxJs` |

</details>

---

## Remote Rules

<details>
<summary>View all 37 remote rule sets</summary>

| Category | Rule Sets | Policy |
|:--|:--|:--|
| International | Microsoft, TikTok | `DIRECT` |
| International | GitHub, Twitter, Instagram, Telegram, Threads, Global | `时延优选` |
| International | Gemini | `Rare Areas` |
| International | AI | `AI` |
| International | GoogleVoice | `United States` |
| Apple | AppleFirmware, AppStore, Apple, iCloud, AppleMusic | `DIRECT` |
| China | Tencent, WeChat, ChinaMax, UnionPay, MeiTuan, HeMa, FeiZhu, Duolingo, DouBan, ChinaTelecom, ByteDance, BiliBili, Baidu, Alibaba, AliPay, Douyin, XiaoHongShu, Xunlei | `DIRECT` |
| Network | `filter.list` | `REJECT` |
| Network | LAN, CN REGION | `DIRECT` |

</details>

---

## Local Rules

| Match | Policy |
|:--|:--|
| `mlol.qt.qq.com` | `DIRECT` |
| `mlol.qt.qq.com/go/express/` requests | `REJECT`* |
| `amdc.m.taobao.com` | `DIRECT` |
| `apple.com` · `itunes.apple.com` · `icloud.com` | `DIRECT` |
| `aliyuncs.com` | `DIRECT` |
| `tiktok-live.oss-cn-chengdu.aliyuncs.com` | `DIRECT` |
| `dig.bdurl.net` | `DIRECT` |

---

## Proxy Groups

| Name | Type | Purpose |
|:--|:--|:--|
| 手动选择 | `Select` | Manual selection |
| 时延优选 | `URL-Test` | Lowest latency |
| Global | `Select` | All nodes |
| Hong Kong | `URL-Test` | Hong Kong nodes |
| Japan | `URL-Test` | Japan nodes |
| Singapore | `URL-Test` | Singapore nodes |
| United States | `URL-Test` | US nodes |
| Rare Areas | `Select` | Other regions |
| AI | `URL-Test` | AI services |

---

## Node Filters

| Filter | Region |
|:--|:--|
| `Sub-ALL` | All nodes |
| `Sub-HK` | Hong Kong |
| `Sub-JP` | Japan |
| `Sub-SG` | Singapore |
| `Sub-US` | United States |
| `Sub-RA` | Other regions |

---

## DNS & Network

| Setting | Value |
|:--|:--|
| IP Mode | IPv4 Only |
| IPv6 TUN | Off |
| DNS | System · AliDNS · Tencent DNS |
| Encrypted DNS | DoH · DoH3 · DoQ |
| SNI | Rule matching assistance |
| STUN | Reject on direct connections |
| UDP Fallback | `REJECT` |
| Bypass | LAN & Private IP |

---

## Host Mapping

| Host |
|:--|
| `iosapps.itunes.apple.com` |
| `updates.cdn-apple.com` |
| `updates.g.aaplimg.com` |

---

## Notes

- Public configuration excludes personal MITM certificates and private keys.
- Adjust node subscriptions and settings before use.
- Plugin and rule functionality is maintained by their respective upstream projects.
- `mlol.qt.qq.com/go/express/` rule syntax requires verification.

---

<p align="center">
  Maintained by <a href="https://github.com/drifthel">drifthel</a>
</p>
