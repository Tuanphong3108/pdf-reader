/* PDF Reader – đa ngôn ngữ (vi / en), giao diện sáng-tối và màu nhấn.
   Tiếng Việt là ngôn ngữ gốc: t('câu tiếng Việt') trả về bản dịch khi đang dùng tiếng Anh. */
(function () {
    'use strict';
    var KEY = { lang: 'pdfr.lang', theme: 'pdfr.theme', accent: 'pdfr.accent', gs: 'pdfr.gs' };
    function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

    var EN = {
 "Chia sẻ": "Share",
 "Chọn": "Select",
 "Chữ ký": "Signature",
 "Hiện các trang": "Show pages",
 "Hoàn tác": "Undo",
 "Hoàn tác (Ctrl+Z)": "Undo (Ctrl+Z)",
 "Hỗ trợ mở file trực tiếp từ hệ thống (PWA)": "Supports opening files directly from the system (PWA)",
 "Không giải mã được": "Can’t decode",
 "Làm lại": "Redo",
 "Làm lại (Ctrl+Y)": "Redo (Ctrl+Y)",
 "Lưu": "Save",
 "Lưu (Ctrl+S)": "Save (Ctrl+S)",
 "Mở tệp": "Open file",
 "Mở tệp hoặc kéo thả file PDF vào đây": "Open a file or drag and drop a PDF here",
 "Mở tệp mới": "Open another file",
 "Sẵn sàng đọc PDF": "Ready to read PDFs",
 "Thu gọn": "Collapse",
 "Thu phóng": "Zoom",
 "Thêm": "More",
 "Thêm văn bản": "Add text",
 "Thông tin khác": "Other info",
 "Trang hiện tại": "Current page",
 "Tuỳ chọn lưu": "Save options",
 "Tải lại": "Reload",
 "Vui lòng đợi trong giây lát": "Please wait a moment",
 "Văn bản": "Text",
 "Vẽ": "Draw",
 "Vẽ chữ ký": "Draw signature",
 "Vẽ chữ ký của bạn trong khu vực này": "Draw your signature in this area",
 "Vẽ và tô sáng": "Draw and highlight",
 "Xoá": "Clear",
 "Xoá mục đã chọn": "Delete selected item",
 "Xoá mục đã chọn (Delete)": "Delete selected item (Delete)",
 "Đang chuẩn bị trang in...": "Preparing pages to print...",
 "Đóng": "Close",
 "In": "Print",
 "In (Ctrl+P)": "Print (Ctrl+P)",
 "Xong": "Done",
 "Mã lỗi: ": "Error code: ",
 "Không mở được": "Can’t open",
 "tệp": "file",
 "Không thể đọc “{name}”.": "Can’t read “{name}”.",
 "Mật khẩu sai, nhập lại:": "Wrong password, try again:",
 "File này có mật khẩu, nhập vào:": "This file is password-protected. Enter the password:",
 "Lỗi tải PDF:": "Error loading PDF:",
 "Chưa nhập mật khẩu": "No password entered",
 "Không thể giải mã “{name}”": "Can’t decode “{name}”",
 "“{name}” không phải là tệp PDF.": "“{name}” isn’t a PDF file.",
 "Loại tệp: ": "File type: ",
 "không rõ": "unknown",
 "Bạn có thay đổi chưa lưu. Vẫn mở tệp khác?": "You have unsaved changes. Open another file anyway?",
 "Tệp PDF": "PDF file",
 "Đi tới trang liên kết": "Go to linked page",
 "Đã sao chép": "Copied",
 "Cắt": "Cut",
 "Sao chép": "Copy",
 "Dán": "Paste",
 "Hãy dùng Ctrl+V để dán": "Use Ctrl+V to paste",
 "Chọn tất cả": "Select all",
 "Soạn email": "Compose email",
 "Mở liên kết trong thẻ mới": "Open link in new tab",
 "Sao chép địa chỉ email": "Copy email address",
 "Sao chép địa chỉ liên kết": "Copy link address",
 "Đã sao chép liên kết": "Link copied",
 "Tìm trên Google “": "Search Google for “",
 "Chọn tất cả chữ trong trang": "Select all text on page",
 "Phóng to": "Zoom in",
 "Thu nhỏ": "Zoom out",
 "Thông tin": "Info",
 "Mở tệp…": "Open file…",
 "Xoay trang": "Rotate page",
 "Thu phóng ({n}%)": "Zoom ({n}%)",
 "Vừa chiều rộng": "Fit width",
 "Vừa trang": "Fit page",
 "Hãy chọn hoặc tạo chữ ký trước.": "Choose or create a signature first.",
 "Mã màu hệ lục phân": "Hex color code",
 "Hệ lục phân": "Hex",
 "Chọn màu từ màn hình": "Pick a color from the screen",
 "Trình duyệt này chưa hỗ trợ ống nhỏ giọt": "This browser doesn’t support the eyedropper",
 "Phông chữ": "Font",
 "Kiểu": "Style",
 "In đậm": "Bold",
 "In nghiêng": "Italic",
 "Căn trái": "Align left",
 "Căn giữa": "Align center",
 "Căn phải": "Align right",
 "Căn đều hai bên": "Justify",
 "Màu văn bản": "Text color",
 "Nhấp vào trang để thêm văn bản. Kéo chấm tròn ở góc để đổi độ rộng, dùng công cụ Chọn để di chuyển.": "Click the page to add text. Drag the corner handle to change the width and use the Select tool to move it.",
 "Bút": "Pen",
 "Bút tô sáng": "Highlighter",
 "Tẩy": "Eraser",
 "Chạm hoặc kéo lên nét vẽ để xoá cả nét đó.": "Tap or drag over a stroke to erase the whole stroke.",
 "Kích thước ": "Size ",
 "Kích thước": "Size",
 "Bảng màu": "Palette",
 "Tuỳ chỉnh": "Custom",
 "Tạo chữ ký để bắt đầu": "Create a signature to get started",
 "Chữ ký ": "Signature ",
 "Tải chữ ký xuống": "Download signature",
 "Xoá chữ ký": "Delete signature",
 "Vẽ một chữ ký khác": "Draw another signature",
 "Nhấp vào trang để đặt chữ ký.": "Click the page to place the signature.",
 "Chọn một chữ ký, rồi nhấp vào trang để đặt.": "Pick a signature, then click the page to place it.",
 "Đã lưu chữ ký": "Signature saved",
 "Lỗi lưu chữ ký:": "Couldn’t save signature:",
 "Tài liệu PDF": "PDF document",
 "Ngày sửa đổi": "Date modified",
 "Số lượng trang": "Number of pages",
 "Ngày tạo": "Date created",
 "Ứng dụng:": "Application:",
 "Phần mềm chuyển đổi:": "PDF producer:",
 "Phiên bản PDF:": "PDF version:",
 "Chế độ xem nhanh trên web:": "Fast web view:",
 "Có": "Yes",
 "Không": "No",
 "Tiêu đề:": "Title:",
 "Tác giả:": "Author:",
 "Hãy lưu thay đổi trước khi chia sẻ.": "Save your changes before sharing.",
 "Thiết bị này không hỗ trợ chia sẻ tệp.": "This device doesn’t support file sharing.",
 "Không chia sẻ được: ": "Couldn’t share: ",
 "Xoay tất cả các trang": "Rotate all pages",
 "Ẩn các trang": "Hide pages",
 "Lưu thành bản sao…": "Save a copy…",
 "Không tải được thư viện ": "Couldn’t load library ",
 " (kiểm tra kết nối mạng)": " (check your connection)",
 "Không tải được font ": "Couldn’t load font ",
 "Chưa hỗ trợ lưu chỉnh sửa cho file có mật khẩu.": "Saving edits isn’t supported for password-protected files yet.",
 "Không có quyền ghi vào tệp.": "No permission to write to the file.",
 " (bản sao).pdf": " (copy).pdf",
 "Đang lưu...": "Saving...",
 "Lỗi khi lưu: ": "Couldn’t save: ",
 "Đã lưu": "Saved",
 "Đang áp dụng chỉnh sửa...": "Applying edits...",
 "Đã đổi sang file khác": "Switched to another file",
 "Đang vẽ bản in: {i} / {n}": "Rendering print: {i} / {n}",
 "Lỗi chuẩn bị bản in: ": "Couldn’t prepare print: ",
 "Hướng dẫn bắt đầu": "Getting started",
 "Ngôn ngữ": "Language",
 "Tiếng Việt": "Tiếng Việt"
};
    var ACCENTS = {"purple":{"dark":{"primary":"#D0BCFF","onPrimary":"#381E72","primaryContainer":"#4F378B","onPrimaryContainer":"#EADDFF","secondaryContainer":"#332D41"},"light":{"primary":"#6750A4","onPrimary":"#FFFFFF","primaryContainer":"#EADDFF","onPrimaryContainer":"#21005D","secondaryContainer":"#E8DEF8"}},"lime":{"dark":{"primary":"#B9F147","onPrimary":"#2B3900","primaryContainer":"#3F5200","onPrimaryContainer":"#D4FF77","secondaryContainer":"#434A35"},"light":{"primary":"#506700","onPrimary":"#FFFFFF","primaryContainer":"#C6FA59","onPrimaryContainer":"#161F00","secondaryContainer":"#E3EAD2"}},"cyan":{"dark":{"primary":"#80E8FF","onPrimary":"#003541","primaryContainer":"#004F5D","onPrimaryContainer":"#C4F3FF","secondaryContainer":"#344B50"},"light":{"primary":"#00687A","onPrimary":"#FFFFFF","primaryContainer":"#C4F3FF","onPrimaryContainer":"#001F26","secondaryContainer":"#D5E5E9"}},"white":{"dark":{"primary":"#E6E1E5","onPrimary":"#313033","primaryContainer":"#48474A","onPrimaryContainer":"#F4EFF4","secondaryContainer":"#414043"},"light":{"primary":"#605D62","onPrimary":"#FFFFFF","primaryContainer":"#E6E1E5","onPrimaryContainer":"#1C1B1F","secondaryContainer":"#E7E2E6"}},"green":{"dark":{"primary":"#79DD97","onPrimary":"#00391B","primaryContainer":"#00522A","onPrimaryContainer":"#96FABA","secondaryContainer":"#324E3C"},"light":{"primary":"#006D3B","onPrimary":"#FFFFFF","primaryContainer":"#96FABA","onPrimaryContainer":"#00210E","secondaryContainer":"#D4E8DC"}},"blue":{"dark":{"primary":"#A4C9FE","onPrimary":"#00315D","primaryContainer":"#004784","onPrimaryContainer":"#D4E3FF","secondaryContainer":"#35485E"},"light":{"primary":"#005FAF","onPrimary":"#FFFFFF","primaryContainer":"#D4E3FF","onPrimaryContainer":"#001C3A","secondaryContainer":"#DCE2E9"}},"yellow":{"dark":{"primary":"#E7C349","onPrimary":"#3C2F00","primaryContainer":"#564500","onPrimaryContainer":"#FFE17B","secondaryContainer":"#4B4637"},"light":{"primary":"#725C00","onPrimary":"#FFFFFF","primaryContainer":"#FFE17B","onPrimaryContainer":"#241A00","secondaryContainer":"#E8E2D0"}},"orange":{"dark":{"primary":"#FFB68D","onPrimary":"#532200","primaryContainer":"#763300","onPrimaryContainer":"#FFDBC9","secondaryContainer":"#544137"},"light":{"primary":"#9B4500","onPrimary":"#FFFFFF","primaryContainer":"#FFDBC9","onPrimaryContainer":"#331200","secondaryContainer":"#F7DFD4"}},"red":{"dark":{"primary":"#FFB4A9","onPrimary":"#690005","primaryContainer":"#93000A","onPrimaryContainer":"#FFDAD6","secondaryContainer":"#583E3B"},"light":{"primary":"#BA1A1A","onPrimary":"#FFFFFF","primaryContainer":"#FFDAD6","onPrimaryContainer":"#410002","secondaryContainer":"#F9DDD9"}},"pink":{"dark":{"primary":"#FFB1C8","onPrimary":"#5E112F","primaryContainer":"#7C2945","onPrimaryContainer":"#FFD9E2","secondaryContainer":"#563F44"},"light":{"primary":"#9C4060","onPrimary":"#FFFFFF","primaryContainer":"#FFD9E2","onPrimaryContainer":"#3E001D","secondaryContainer":"#F2DDE2"}}};
    var ACCENT_NAMES = {
        vi: { purple: 'Tím', lime: 'Chanh', cyan: 'Lam', white: 'Trắng', green: 'Lá', blue: 'Dương', yellow: 'Vàng', orange: 'Cam', red: 'Đỏ', pink: 'Hồng' },
        en: { purple: 'Purple', lime: 'Lime', cyan: 'Cyan', white: 'White', green: 'Green', blue: 'Blue', yellow: 'Yellow', orange: 'Orange', red: 'Red', pink: 'Pink' }
    };

    var saved = lsGet(KEY.lang);
    var lang = (saved === 'vi' || saved === 'en') ? saved : (/^vi/i.test(navigator.language || '') ? 'vi' : 'en');
    var theme = lsGet(KEY.theme); if (theme !== 'light' && theme !== 'dark') theme = 'system';
    var accent = lsGet(KEY.accent); if (!ACCENTS[accent]) accent = 'purple';

    function t(s, p) {
        var r = (lang === 'en' && EN[s] !== undefined) ? EN[s] : s;
        if (p) r = r.replace(/\{(\w+)\}/g, function (m, k) { return p[k] !== undefined ? p[k] : m; });
        return r;
    }

    /* ---------- Dịch phần HTML tĩnh (giữ bản gốc để đổi qua lại) ---------- */
    var ATTRS = ['title', 'aria-label', 'placeholder', 'alt'];
    var textOrig = new WeakMap();
    function translateDom(root) {
        root = root || document.body;
        var w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                if (n.nodeType === 1) {
                    if (/^(SCRIPT|STYLE)$/.test(n.tagName) || n.hasAttribute('data-no-i18n')) return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var n;
        while ((n = w.nextNode())) {
            if (n.nodeType === 3) {
                var o = textOrig.get(n);
                var key = o !== undefined ? o : n.nodeValue.trim();
                if (!key) continue;
                if (o === undefined) { if (EN[key] === undefined) continue; textOrig.set(n, key); }
                var lead = n.nodeValue.match(/^\s*/)[0], trail = n.nodeValue.match(/\s*$/)[0];
                n.nodeValue = lead + (lang === 'en' ? EN[key] : key) + trail;
            } else {
                var store = n._i18n || (n._i18n = {});
                for (var i = 0; i < ATTRS.length; i++) {
                    var a = ATTRS[i];
                    if (!n.hasAttribute(a) && store[a] === undefined) continue;
                    var k = store[a] !== undefined ? store[a] : n.getAttribute(a);
                    if (store[a] === undefined) { if (EN[k] === undefined) continue; store[a] = k; }
                    n.setAttribute(a, lang === 'en' ? EN[k] : k);
                }
            }
        }
    }

    /* ---------- Giao diện sáng / tối + màu nhấn ---------- */
    function resolvedTheme() {
        if (theme === 'light' || theme === 'dark') return theme;
        return (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    var ACCENT_VARS = { primary: '--md-sys-color-primary', onPrimary: '--md-sys-color-on-primary', primaryContainer: '--md-sys-color-primary-container', onPrimaryContainer: '--md-sys-color-on-primary-container' };
    function paint() {
        var r = document.documentElement;
        if (theme === 'system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', theme);
        r.style.colorScheme = theme === 'system' ? '' : theme;
        var mode = resolvedTheme();
        for (var k in ACCENT_VARS) {
            if (accent === 'purple') r.style.removeProperty(ACCENT_VARS[k]);
            else r.style.setProperty(ACCENT_VARS[k], ACCENTS[accent][mode][k]);
        }
        // Ảnh minh hoạ lỗi bản tối: <source> chỉ dùng khi đang ở giao diện tối
        var med = theme === 'dark' ? 'all' : theme === 'light' ? 'not all' : '(prefers-color-scheme: dark)';
        var src = document.querySelectorAll('picture source[data-dark]');
        for (var i = 0; i < src.length; i++) src[i].setAttribute('media', med);
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta && accent !== 'purple') meta.setAttribute('content', ACCENTS[accent][mode].primary);
    }
    try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paint); } catch (e) {}
    paint();
    document.documentElement.lang = lang;
    document.addEventListener('DOMContentLoaded', function () { paint(); translateDom(document.body); document.documentElement.lang = lang; });

    var listeners = [];
    window.I18N = {
        t: t, ACCENTS: ACCENTS, KEY: KEY, lsGet: lsGet, lsSet: lsSet, translateDom: translateDom,
        get lang() { return lang; }, get theme() { return theme; }, get accent() { return accent; },
        accentName: function (k) { return (ACCENT_NAMES[lang] || ACCENT_NAMES.en)[k] || k; },
        resolvedTheme: resolvedTheme,
        setLang: function (l) {
            if (l !== 'vi' && l !== 'en') return;
            lang = l; lsSet(KEY.lang, l);
            document.documentElement.lang = l;
            translateDom(document.body);
            listeners.forEach(function (f) { try { f(l); } catch (e) {} });
        },
        setTheme: function (v) { theme = (v === 'light' || v === 'dark') ? v : 'system'; lsSet(KEY.theme, theme); paint(); },
        setAccent: function (v) { if (!ACCENTS[v]) return; accent = v; lsSet(KEY.accent, v); paint(); },
        onLang: function (f) { listeners.push(f); }
    };
    window.t = t;
})();
