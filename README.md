drifthel Loon Plugins

A collection of Loon plugins and configuration files maintained by drifthel.

专注于 iOS 广告过滤、网页增强、请求优化与个性化规则，持续改善网络使用体验。

⸻

📦 Plugins

AdBlock — 广告过滤插件

针对常用 iOS 应用进行广告过滤，减少开屏广告、信息流广告及不必要的推广内容。

项目	链接
Install	添加到 Loon
Source	GitHub 源码

Modifications & Improvements

* MLOL Recommendation Request Blocking — 新增对 mlol.qt.qq.com/go/recommend 推荐接口的拦截规则，阻止相关推荐请求。

⸻

⚙️ Configuration

loon.lcf — Loon 配置文件

个人 Loon 配置文件，支持在线查看、一键跳转导入及查看 GitHub 源代码。

<p align="left">
  <a href="https://github.com/drifthel/Loon/blob/main/Config/loon.lcf">
    <img src="https://img.shields.io/badge/View-查看配置-007AFF?style=for-the-badge" alt="查看配置">
  </a>
  <a href="https://www.nsloon.com/openloon/import?sub=https%3A%2F%2Fraw.githubusercontent.com%2Fdrifthel%2FLoon%2Fmain%2FConfig%2Floon.lcf">
    <img src="https://img.shields.io/badge/Import-导入到_Loon-34C759?style=for-the-badge" alt="导入到 Loon">
  </a>
  <a href="https://github.com/drifthel/Loon/tree/main/Config">
    <img src="https://img.shields.io/badge/Source-GitHub源码-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub 源码">
  </a>
</p>

快捷入口

* View Configuration — 在线查看 loon.lcf 配置内容。
* Import to Loon — 跳转至 Loon 导入页面。
* GitHub Source — 浏览仓库 Config 目录。

⸻

🧩 Plugin Subscriptions

当前配置共包含 41 条插件订阅，其中 Script-Hub 使用了两个不同的订阅来源。

Custom Plugin

插件名称	功能说明
blockAds	自定义广告过滤插件

Advertising Filters & App Enhancements

插件名称	功能说明
Amap_remove_ads	高德地图去广告
webpage	网页相关功能
myblockads	广告过滤
startup	应用启动相关优化
XunLei_remove_ads	迅雷去广告
CosmosPodcast_remove_ads	播客去广告
RedPaper_remove_ads	红包相关优化
XiaoCan_remove_ads	小蚕相关去广告
FleaMarket_remove_ads	闲鱼去广告
Weixin_Official_Accounts_remove_ads	微信公众号去广告
Weixin_external_links_unlock	微信外链解锁
WexinMiniPrograms_Remove_ads	微信小程序去广告
Weidian_remove_ads	微店去广告
Weibo_remove_ads	微博去广告
NeteaseCloudMusic_remove_ads	网易云音乐去广告
NetEaseGodlike_remove_ads	网易相关功能优化
Taobao_remove_ads	淘宝去广告
PuPuMall_remove_ads	朴朴超市去广告
PinDuoDuo_remove_ads	拼多多去广告
MeiTu_remove_ads	美图相关优化
2bulu_remove_ads	两步路相关优化
QuarkBrowser_remove_ads	夸克浏览器去广告
JD_remove_ads	京东去广告
MrHema_remove_ads	盒马去广告
Umetrip_remove_ads	航旅纵横去广告
TaobaoTravel_remove_ads	飞猪旅行相关优化
Dewu_remove_ads	得物去广告
Damai_remove_ads	大麦去广告
Bilibili_remove_ads	哔哩哔哩去广告

Utilities & Other Features

插件名称	功能说明
TelegramRedirect	Telegram 链接跳转
Script-Hub	脚本管理工具（两个订阅来源）
Google	Google 相关功能
AppleWeatherEnhancer	Apple 天气增强
12306_remove_ads	12306 去广告
Block_HTTPDNS	HTTPDNS 拦截
BlockAdvertisers	广告商拦截
Remove_ads_by_keli	去广告
Sub-Store	订阅管理
BoxJs	脚本管理与配置工具

⸻

🌐 Remote Rules

当前配置包含 37 条远程分流规则订阅。

International Services & Social Platforms

规则集	分流策略
Microsoft	DIRECT
GitHub	时延优选
TikTok	DIRECT
Gemini	Rare Areas
Twitter	时延优选
Instagram	时延优选
Telegram	时延优选
Threads	时延优选
Global	时延优选
AI	AI
GoogleVoice	United States

Apple Ecosystem & System Services

规则集	分流策略
AppleFirmware	DIRECT
AppStore	DIRECT
Apple	DIRECT
iCloud	DIRECT
AppleMusic	DIRECT

Mainland China Services

规则集	分流策略
Tencent	DIRECT
WeChat	DIRECT
ChinaMax	DIRECT
UnionPay	DIRECT
MeiTuan	DIRECT
HeMa	DIRECT
FeiZhu	DIRECT
Duolingo	DIRECT
DouBan	DIRECT
ChinaTelecom	DIRECT
ByteDance	DIRECT
BiliBili	DIRECT
Baidu	DIRECT
Alibaba	DIRECT
AliPay	DIRECT
Douyin	DIRECT
XiaoHongShu	DIRECT
Xunlei	DIRECT

Ad Blocking & Network Rules

规则集	分流策略
filter.list	REJECT
LAN	DIRECT
CN REGION	DIRECT

⸻

📍 Local Rules

配置文件中包含以下自定义本地规则：

匹配域名或请求	分流策略
mlol.qt.qq.com	DIRECT
mlol.qt.qq.com/go/express/ 相关请求	REJECT（原始规则语法待核对）
amdc.m.taobao.com	DIRECT
apple.com	DIRECT
itunes.apple.com	DIRECT
icloud.com	DIRECT
aliyuncs.com	DIRECT
tiktok-live.oss-cn-chengdu.aliyuncs.com	DIRECT
dig.bdurl.net	DIRECT

⸻

🚦 Proxy Groups

当前配置包含 9 个代理策略组。

策略组	类型	用途
手动选择	Select	手动选择代理线路
时延优选	URL-Test	自动选择低延迟线路
Global	Select	全部节点筛选
Hong Kong	URL-Test	香港节点自动测速
Japan	URL-Test	日本节点自动测速
Singapore	URL-Test	新加坡节点自动测速
United States	URL-Test	美国节点自动测速
Rare Areas	Select	其他地区节点
AI	URL-Test	AI 服务专用线路

⸻

🗂️ Node Filters

通过远程筛选器对订阅节点进行分类。

筛选器	节点范围
Sub-ALL	全部可用节点
Sub-HK	香港节点
Sub-JP	日本节点
Sub-SG	新加坡节点
Sub-US	美国节点
Sub-RA	其他地区节点

⸻

🌍 DNS & Network

DNS Configuration

* IPv4 优先模式
* IPv6 TUN 关闭
* 阿里 DNS、腾讯 DNS 及系统 DNS
* AliDNS DoH / DoH3 / DoQ

Network Optimization

* SNI 辅助规则匹配
* 直连时丢弃 STUN
* UDP 回落策略：REJECT
* 局域网及私有 IP 绕过代理

⸻

🖥️ Host Mapping

配置包含以下 Apple CDN 本地映射：

* iosapps.itunes.apple.com
* updates.cdn-apple.com
* updates.g.aaplimg.com

⸻

📝 Notes

* 本项目配置为个人自用配置的公开分享版。
* 公开配置不包含个人 MITM 证书、私钥及密码。
* 插件与远程规则由各自上游维护，实际功能以对应项目为准。
* 使用前请根据自己的节点订阅及网络环境进行调整。
* 本地规则中的 URL 匹配规则仍需进一步核对语法。
* 项目内容会根据实际使用情况持续维护与更新。

⸻

<p align="center">
  <sub>Maintained by <a href="https://github.com/drifthel">drifthel</a></sub>
</p>
