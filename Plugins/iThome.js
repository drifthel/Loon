


const body = $response.body;

if (typeof body !== "string" || !body) {
    $done({});
} else if (body.includes("loon-ithome-cleaner")) {
    $done({});
} else {

    const pageScript = String.raw`
(function () {
    'use strict';

    const KEYWORDS = [
        '好物推荐',
        '好物',
        '推广商品',
        '商品推广',
        '广告'
    ];

    const APP_KEYWORDS = [
        '立即打开',
        '打开APP',
        '打开 App',
        '打开app',
        '下载APP',
        '下载 App',
        '下载app',
        '使用APP',
        '使用 App',
        '爱科技爱这里'
    ];

    function isProtected(el) {
        return !!el.closest(
            'header, nav, main, article, ' +
            '[class*="logo"], [id*="logo"]'
        );
    }

    // =========================
    // 清理好物推荐和商品广告
    // =========================
    function cleanGoods() {
        document.querySelectorAll('a').forEach(a => {
            if (isProtected(a)) return;

            const text = (a.innerText || '').trim();
            const href = a.href || '';

            if (
                KEYWORDS.some(k => text.includes(k)) ||
                /haowu|good|goods|product|item|shop|mall|taobao|jd\.com|tmall/i.test(href)
            ) {
                let box = a;

                for (let i = 0; i < 5; i++) {
                    if (!box.parentElement) break;

                    const parent = box.parentElement;

                    if (isProtected(parent)) break;

                    const textLength =
                        (parent.innerText || '').trim().length;

                    const rect = parent.getBoundingClientRect();

                    if (
                        rect.width > 150 &&
                        rect.height > 40 &&
                        textLength < 500
                    ) {
                        box = parent;
                    } else {
                        break;
                    }
                }

                box.remove();
            }
        });
    }

    // =========================
    // 清理 IT之家手机网页版底部 App Banner
    // 已确认的实际 CSS 选择器
    // =========================
    function cleanMobileBanner() {
        document.querySelectorAll(
            '.open-app-banner'
        ).forEach(el => {
            el.remove();
        });
    }

    // =========================
    // 清理底部其他 App 推广悬浮层
    // =========================
    function cleanAppBanner() {
        document.querySelectorAll(
            'body > *, body > div > *, body > section'
        ).forEach(el => {
            if (isProtected(el)) return;

            const style = getComputedStyle(el);

            if (
                style.position !== 'fixed' &&
                style.position !== 'sticky'
            ) return;

            const rect = el.getBoundingClientRect();

            if (rect.bottom < window.innerHeight - 100) return;

            if (
                rect.width < 200 ||
                rect.height < 35 ||
                rect.height > 180
            ) return;

            const text = (el.innerText || '').trim();

            if (!text) return;

            if (
                APP_KEYWORDS.some(k => text.includes(k))
            ) {
                el.remove();
            }
        });
    }

    // =========================
    // 清理右上角「最会买」
    // =========================
    function cleanTopBuy() {
        document.querySelectorAll('a').forEach(a => {
            const text = (a.innerText || '').trim();

            if (text !== '最会买') return;

            const rect = a.getBoundingClientRect();

            // 只处理页面顶部右侧入口
            if (
                rect.top >= -10 &&
                rect.top < 180 &&
                rect.left > window.innerWidth * 0.4
            ) {
                let box = a;

                // 尝试移除入口所在的小容器
                for (let i = 0; i < 3; i++) {
                    const parent = box.parentElement;

                    if (!parent || isProtected(parent)) break;

                    const parentRect = parent.getBoundingClientRect();

                    if (
                        parentRect.width < 220 &&
                        parentRect.height < 100 &&
                        parentRect.top >= -10 &&
                        parentRect.top < 180 &&
                        parentRect.left > window.innerWidth * 0.3
                    ) {
                        box = parent;
                    } else {
                        break;
                    }
                }

                box.remove();
            }
        });
    }

    function clean() {
        cleanGoods();
        cleanMobileBanner();
        cleanAppBanner();
        cleanTopBuy();
    }

    // 首次执行
    clean();

    // 监听动态加载内容
    let timer = null;

    new MutationObserver(() => {
        clearTimeout(timer);
        timer = setTimeout(clean, 150);
    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // 延迟执行
    [500, 1500, 3000, 5000].forEach(delay => {
        setTimeout(clean, delay);
    });

})();
`;

    const injected =
        '<script id="loon-ithome-cleaner">' +
        pageScript +
        '</script>';

    let newBody;

    if (/<\/body\s*>/i.test(body)) {
        newBody = body.replace(
            /<\/body\s*>/i,
            injected + '</body>'
        );
    } else if (/<\/html\s*>/i.test(body)) {
        newBody = body.replace(
            /<\/html\s*>/i,
            injected + '</html>'
        );
    } else {
        newBody = body + injected;
    }

    $done({
        body: newBody
    });
}
