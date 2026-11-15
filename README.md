drifthel Loon

Loon plugins & personal configuration.

专注于广告过滤、应用优化与网络分流。

⸻

Plugins

Plugin	Description	Install	Source
blockAds	自定义广告过滤	Install	Source

Modifications

项目	修改内容
MLOL	拦截 mlol.qt.qq.com/go/recommend 推荐接口

⸻

Configuration

loon.lcf

操作	链接
查看配置	View
导入 Loon	Import
查看源码	GitHub

⸻

Plugin Subscriptions

共 41 条插件订阅（Script-Hub 包含两个来源）。

分类	插件
自定义	blockAds
地图与出行	Amap_remove_ads、Umetrip_remove_ads、TaobaoTravel_remove_ads、12306_remove_ads、2bulu_remove_ads
电商与购物	FleaMarket_remove_ads、Weidian_remove_ads、Taobao_remove_ads、PuPuMall_remove_ads、PinDuoDuo_remove_ads、JD_remove_ads、MrHema_remove_ads、Dewu_remove_ads
社交与通讯	Weixin_Official_Accounts_remove_ads、Weixin_external_links_unlock、WexinMiniPrograms_Remove_ads、Weibo_remove_ads、TelegramRedirect
内容与娱乐	CosmosPodcast_remove_ads、NeteaseCloudMusic_remove_ads、NetEaseGodlike_remove_ads、Bilibili_remove_ads、DouBan
其他应用	XunLei_remove_ads、RedPaper_remove_ads、XiaoCan_remove_ads、MeiTu_remove_ads、QuarkBrowser_remove_ads、Damai_remove_ads
工具与规则	webpage、myblockads、startup、Script-Hub（两个来源）、Google、AppleWeatherEnhancer、Block_HTTPDNS、BlockAdvertisers、Remove_ads_by_keli、Sub-Store、BoxJs

⸻

Remote Rules

共 37 条远程规则。

分类	规则集	策略
国际服务	Microsoft、TikTok	DIRECT
国际服务	GitHub、Twitter、Instagram、Telegram、Threads、Global	时延优选
国际服务	Gemini	Rare Areas
国际服务	AI	AI
国际服务	GoogleVoice	United States
Apple	AppleFirmware、AppStore、Apple、iCloud、AppleMusic	DIRECT
国内服务	Tencent、WeChat、ChinaMax、UnionPay、MeiTuan、HeMa、FeiZhu、Duolingo、DouBan、ChinaTelecom、ByteDance、BiliBili、Baidu、Alibaba、AliPay、Douyin、XiaoHongShu、Xunlei	DIRECT
广告与网络	filter.list	REJECT
广告与网络	LAN、CN REGION	DIRECT

⸻

Local Rules

匹配域名	策略
mlol.qt.qq.com	DIRECT
mlol.qt.qq.com/go/express/	REJECT（原始规则待核对）
amdc.m.taobao.com	DIRECT
apple.com、itunes.apple.com、icloud.com	DIRECT
aliyuncs.com	DIRECT
tiktok-live.oss-cn-chengdu.aliyuncs.com	DIRECT
dig.bdurl.net	DIRECT

⸻

Proxy Groups

策略组	类型	用途
手动选择	Select	手动选择线路
时延优选	URL-Test	自动选择低延迟线路
Global	Select	全部节点
Hong Kong	URL-Test	香港节点
Japan	URL-Test	日本节点
Singapore	URL-Test	新加坡节点
United States	URL-Test	美国节点
Rare Areas	Select	其他地区
AI	URL-Test	AI 服务

⸻

Node Filters

筛选器	节点
Sub-ALL	全部节点
Sub-HK	香港
Sub-JP	日本
Sub-SG	新加坡
Sub-US	美国
Sub-RA	其他地区

⸻

DNS & Network

项目	设置
IP 模式	IPv4 Only
IPv6 TUN	Off
DNS	System、AliDNS、腾讯 DNS
加密 DNS	DoH / DoH3 / DoQ
SNI	辅助规则匹配
STUN	直连时丢弃
UDP Fallback	REJECT
Bypass	局域网及私有 IP

Host

域名

iosapps.itunes.apple.com

updates.cdn-apple.com

updates.g.aaplimg.com

⸻

Notes

* 公开配置不包含个人 MITM 证书、私钥及密码。
* 使用前请根据自己的节点订阅调整配置。
* 插件功能以各自上游项目为准。
* 部分本地规则语法仍待核对。

⸻

<p align="center">Maintained by <a href="https://github.com/drifthel">drifthel</a></p>
