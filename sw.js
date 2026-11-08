// Đổi số phiên bản mỗi khi muốn ép máy người dùng xoá cache cũ
const CACHE_NAME = 'pdf-reader-v5';

// File của app: bắt buộc phải có
const CORE_ASSETS = [
    './',
    'index.html',
    'manifest.json',
    'icon.png'
];

// File từ CDN: cố gắng cache sẵn, lỗi cái nào bỏ qua cái đó (không làm hỏng việc cài SW)
// Font Material Symbols (woff2) và cMap/standard_fonts sẽ được cache lúc chạy (runtime) ở bên dưới
const EXTERNAL_ASSETS = [
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
    'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&display=swap',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    'https://tuanphong3108.github.io/md3-loading/Loading_Indicator.gif'
];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(CORE_ASSETS);
        await Promise.allSettled(EXTERNAL_ASSETS.map(url => cache.add(url)));
        await self.skipWaiting();
    })());
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

    if (url.origin === self.location.origin) {
        event.respondWith(staleWhileRevalidate(event));
    } else {
        event.respondWith(cacheFirst(req));
    }
});

// File của app: trả bản cache ngay cho nhanh, đồng thời tải bản mới về cache cho lần sau
async function staleWhileRevalidate(event) {
    const req = event.request;
    const isNavigation = req.mode === 'navigate';
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: isNavigation });

    const network = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
    }).catch(() => null);

    if (cached) {
        event.waitUntil(network);
        return cached;
    }

    const res = await network;
    if (res) return res;

    // Offline và chưa có trong cache: mở trang chính
    if (isNavigation) {
        const fallback = await cache.match('index.html');
        if (fallback) return fallback;
    }
    return Response.error();
}

// File từ CDN (có version cố định / font): có trong cache thì dùng luôn, chưa có thì tải rồi lưu lại
async function cacheFirst(req) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;

    try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
    } catch (err) {
        return Response.error();
    }
}
