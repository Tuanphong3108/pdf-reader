/* PDF Reader – màn hình Getting Started (hướng dẫn bắt đầu): chọn ngôn ngữ, làm quen tính năng, phím tắt, giao diện sáng-tối và màu nhấn.
   Dùng window.I18N (i18n.js). Mở bằng GS.open(); tự mở ở lần chạy đầu tiên. */
(function () {
    'use strict';
    var TOTAL = 5;
    var ICONS = {
        s2: ['file_open', 'drag_pan', 'install_desktop'],
        s3: ['select_all', 'link', 'text_fields', 'ink_pen', 'signature', 'undo', 'view_sidebar', 'print', 'info']
    };
    var T = {
        vi: {
            sub: 'Hướng dẫn bắt đầu', skip: 'Bỏ qua', back: 'Quay lại', next: 'Tiếp theo', finish: 'Bắt đầu đọc PDF',
            step: 'Bước {n} / {t}', names: ['Chào mừng', 'Mở tệp PDF', 'Tính năng', 'Phím tắt', 'Cài đặt nhanh'],
            s1_title: 'Chào mừng đến với PDF Reader',
            s1_desc: 'Trình đọc và chỉnh sửa PDF chạy ngay trong trình duyệt: chọn và sao chép chữ, thêm văn bản, vẽ, ký tên, in và lưu — giao diện Material 3 kiểu ChromeOS, dùng được cả khi không có mạng.',
            s1_pick: 'Chọn ngôn ngữ',
            s2_chip: 'Bắt đầu', s2_title: 'Mở một tệp PDF', s2_desc: 'Tệp được đọc trực tiếp trên máy của bạn, không tải lên máy chủ nào cả.',
            s2_t: ['Nút Mở tệp', 'Kéo & thả', 'Cài ứng dụng'],
            s2_d: ['Bấm “Mở tệp” trên thanh trên để chọn PDF. Phím tắt: <kbd>Ctrl</kbd> + <kbd>O</kbd>.', 'Kéo tệp PDF thả thẳng vào cửa sổ ứng dụng. Nếu mở bằng trình duyệt có hỗ trợ, bạn lưu đè lên tệp gốc được luôn.', 'Cài PDF Reader (nút cài đặt trên thanh địa chỉ) để mở PDF trực tiếp từ hệ thống và dùng khi offline.'],
            s2_note: 'Tệp có mật khẩu sẽ được hỏi mật khẩu khi mở. Nếu tệp bị lỗi, bạn sẽ thấy màn hình lỗi kèm mã lỗi.',
            s3_chip: 'Tính năng', s3_title: 'Những thứ hay ho đi kèm',
            s3_t: ['Chọn & sao chép chữ', 'Liên kết bấm được', 'Thêm văn bản', 'Vẽ, tô sáng, tẩy', 'Chữ ký', 'Hoàn tác / Làm lại', 'Trang xem trước', 'In & chia sẻ', 'Lưu & thông tin'],
            s3_d: ['Bôi đen để sao chép — chữ được ngắt dòng, ngắt đoạn đúng theo bố cục tài liệu. Chuột phải để mở menu nhanh.', 'Liên kết trong PDF, địa chỉ web và email được tự nhận diện và bấm mở được.', 'Chọn font, cỡ chữ, căn lề, màu và kéo để đổi độ rộng. Văn bản trong tệp lưu ra giống hệt trên màn hình.', 'Bút, bút tô sáng và tẩy với nhiều cỡ nét, bảng màu hoặc màu tuỳ chỉnh.', 'Vẽ chữ ký một lần, dùng lại cho mọi tài liệu.', 'Hoàn tác và làm lại mọi chỉnh sửa. <kbd>Ctrl</kbd> + <kbd>Z</kbd>.', 'Xoay từng trang ngay ở ảnh xem trước, hoặc xoay tất cả các trang.', 'In bản đã chỉnh sửa hoặc chia sẻ tệp qua hệ thống.', 'Lưu đè hoặc lưu thành bản sao. Xem thông tin tệp ở “Thông tin”.'],
            s4_chip: 'Phím tắt', s4_title: 'Điều khiển không cần chuột',
            k: [['Mở tệp', ['Ctrl', 'O']], ['Lưu', ['Ctrl', 'S']], ['In', ['Ctrl', 'P']], ['Hoàn tác', ['Ctrl', 'Z']], ['Làm lại', ['Ctrl', 'Y']], ['Phóng to / Thu nhỏ', ['Ctrl', '+', '-']], ['Về 100%', ['Ctrl', '0']], ['Sao chép chữ đã chọn', ['Ctrl', 'C']], ['Xoá mục đã chọn', ['Delete']], ['Bỏ chọn / Đóng bảng', ['Esc']]],
            s5_chip: 'Cài đặt nhanh', s5_title: 'Chọn phong cách của bạn',
            s5_desc: 'Xem thử ngay trên màn hình này. Thay đổi được áp dụng ngay và nhớ cho lần sau; bạn có thể mở lại hướng dẫn này từ menu “Thêm”.',
            t_title: 'Chế độ sáng / tối', t_desc: 'Chọn tông nền cho giao diện', t_system: 'Hệ thống', t_light: 'Sáng', t_dark: 'Tối',
            a_title: 'Màu chủ đạo', a_desc: 'Màu nhấn của nút, thanh và các mục đang chọn'
        },
        en: {
            sub: 'Getting started', skip: 'Skip', back: 'Back', next: 'Next', finish: 'Start reading PDFs',
            step: 'Step {n} of {t}', names: ['Welcome', 'Open a PDF', 'Features', 'Shortcuts', 'Quick settings'],
            s1_title: 'Welcome to PDF Reader',
            s1_desc: 'A PDF reader and editor that runs right in your browser: select and copy text, add text, draw, sign, print and save — a ChromeOS-style Material 3 design that also works offline.',
            s1_pick: 'Choose your language',
            s2_chip: 'Get started', s2_title: 'Open a PDF file', s2_desc: 'Files are read straight from your device and never uploaded to any server.',
            s2_t: ['Open file button', 'Drag & drop', 'Install the app'],
            s2_d: ['Click “Open file” in the top bar to pick a PDF. Shortcut: <kbd>Ctrl</kbd> + <kbd>O</kbd>.', 'Drop a PDF onto the app window. In browsers that support it you can save right over the original file.', 'Install PDF Reader (the install button in the address bar) to open PDFs straight from the system and use it offline.'],
            s2_note: 'Password-protected files ask for the password when opened. If a file is damaged you will see an error screen with an error code.',
            s3_chip: 'Features', s3_title: 'Handy things included',
            s3_t: ['Select & copy text', 'Clickable links', 'Add text', 'Draw, highlight, erase', 'Signature', 'Undo / Redo', 'Page thumbnails', 'Print & share', 'Save & info'],
            s3_d: ['Highlight to copy — lines and paragraphs break exactly like the document layout. Right-click for a quick menu.', 'Links in the PDF, web addresses and emails are detected automatically and open on click.', 'Pick the font, size, alignment and color, and drag to change the width. Text in the saved file matches the screen exactly.', 'Pen, highlighter and eraser with several stroke sizes, a palette or a custom color.', 'Draw a signature once and reuse it in every document.', 'Undo and redo every edit. <kbd>Ctrl</kbd> + <kbd>Z</kbd>.', 'Rotate single pages right in the thumbnails, or rotate all pages.', 'Print your edited version or share the file through the system.', 'Save over the file or save a copy. See file details under “Info”.'],
            s4_chip: 'Shortcuts', s4_title: 'Control it without a mouse',
            k: [['Open file', ['Ctrl', 'O']], ['Save', ['Ctrl', 'S']], ['Print', ['Ctrl', 'P']], ['Undo', ['Ctrl', 'Z']], ['Redo', ['Ctrl', 'Y']], ['Zoom in / out', ['Ctrl', '+', '-']], ['Back to 100%', ['Ctrl', '0']], ['Copy selected text', ['Ctrl', 'C']], ['Delete selected item', ['Delete']], ['Deselect / close panel', ['Esc']]],
            s5_chip: 'Quick settings', s5_title: 'Pick your style',
            s5_desc: 'Preview it right on this screen. Changes apply immediately and are remembered; you can reopen this guide from the “More” menu.',
            t_title: 'Light / dark mode', t_desc: 'Choose the background tone', t_system: 'System', t_light: 'Light', t_dark: 'Dark',
            a_title: 'Accent color', a_desc: 'The highlight color of buttons, bars and selected items'
        }
    };

    var CSS = [
        '#gs{position:fixed;inset:0;z-index:7000;display:flex;flex-direction:column;background:var(--md-sys-color-background);color:var(--md-sys-color-on-background);font-family:"Google Sans Flex",sans-serif;user-select:none;-webkit-user-select:none;opacity:0;transition:opacity .25s}',
        '#gs.show{opacity:1}#gs[hidden]{display:none!important}',
        '#gs *{box-sizing:border-box}',
        '#gs .gs-ms{font-family:"Material Symbols Outlined";font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;font-feature-settings:"liga";font-size:24px}',
        '#gs header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:20px clamp(16px,4vw,40px) 8px;flex-shrink:0}',
        '#gs .brand{display:flex;align-items:center;gap:12px;min-width:0}',
        '#gs .badge{width:44px;height:44px;border-radius:16px;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);display:grid;place-items:center;flex-shrink:0}',
        '#gs .brand h1{margin:0;font-size:16px;font-weight:800;line-height:1.2}#gs .brand p{margin:0;font-size:12px;opacity:.7}',
        '#gs .btn-text{border:none;background:transparent;color:inherit;opacity:.75;font:700 13px "Google Sans Flex",sans-serif;padding:10px 16px;border-radius:19px;cursor:pointer;transition:background .2s,border-radius .3s}',
        '#gs .btn-text:hover{background:color-mix(in srgb,var(--md-sys-color-primary) 14%,transparent);opacity:1;border-radius:14px}',
        '#gs .stepper{display:flex;gap:8px;padding:8px clamp(16px,4vw,40px) 0;flex-shrink:0}',
        '#gs .pill{flex:1;height:8px;border-radius:99px;background:var(--md-sys-color-surface-variant);position:relative;overflow:hidden;cursor:pointer;transition:flex .4s cubic-bezier(.34,1.56,.64,1)}',
        '#gs .pill.done::after,#gs .pill.active::after{content:"";position:absolute;inset:0;background:var(--md-sys-color-primary);border-radius:inherit}',
        '#gs .pill.active{flex:2.4}#gs .pill.done{opacity:.55}',
        '#gs .meta{display:flex;justify-content:space-between;padding:8px clamp(18px,4vw,42px) 0;font-size:12px;font-weight:700;opacity:.8;flex-shrink:0}',
        '#gs .meta b{color:var(--md-sys-color-primary);opacity:1}',
        '#gs main{position:relative;flex:1;min-height:0;overflow:hidden}',
        '#gs .slide{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;padding:20px clamp(16px,4vw,40px);display:flex;flex-direction:column;align-items:center;opacity:0;pointer-events:none;transform:translateX(60px) scale(.97);transition:opacity .35s,transform .45s cubic-bezier(.2,0,0,1)}',
        '#gs .slide.active{opacity:1;pointer-events:auto;transform:none}#gs .slide.before{transform:translateX(-60px) scale(.97)}',
        '#gs .inner{width:100%;max-width:920px;margin:auto 0;display:flex;flex-direction:column;gap:22px}',
        '#gs .center{align-items:center;text-align:center}',
        '#gs .chip{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);font-size:12px;font-weight:800}',
        '#gs .chip .gs-ms{font-size:18px}',
        '#gs h2{margin:0;font-size:clamp(26px,4.2vw,42px);font-weight:900;line-height:1.1;letter-spacing:-.5px}',
        '#gs .lead{margin:0;font-size:clamp(14px,1.7vw,17px);opacity:.75;line-height:1.6;max-width:640px}#gs .center .lead{margin-inline:auto}',
        '#gs .hero{width:112px;height:112px;border-radius:36px;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);display:grid;place-items:center;margin:0 auto;animation:gsfloat 5s ease-in-out infinite}',
        '#gs .hero .gs-ms{font-size:60px}',
        '@keyframes gsfloat{50%{transform:translateY(-8px) rotate(-3deg);border-radius:44px 30px 44px 30px}}',
        '#gs .lang-label{font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;opacity:.7;margin-bottom:12px}',
        '#gs .lang-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;max-width:460px;margin:0 auto}',
        '#gs .lang-card{border:2px solid transparent;background:var(--md-sys-color-surface-container);color:inherit;font:800 16px "Google Sans Flex",sans-serif;padding:20px 12px;border-radius:28px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;transition:border-radius .3s,transform .2s,background .2s}',
        '#gs .lang-card small{font-weight:600;font-size:12px;opacity:.7}#gs .lang-card:hover{border-radius:18px;transform:translateY(-2px)}',
        '#gs .lang-card.sel{background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);border-color:var(--md-sys-color-primary)}',
        '#gs .lang-card .tick{height:22px;opacity:0;color:var(--md-sys-color-primary);font-size:22px;transition:opacity .2s}#gs .lang-card.sel .tick{opacity:1}',
        '#gs .grid{display:grid;gap:14px}#gs .g3{grid-template-columns:repeat(3,1fr)}',
        '#gs .card{background:var(--md-sys-color-surface-container);border-radius:28px;padding:20px;display:flex;flex-direction:column;gap:10px;transition:border-radius .35s,transform .3s cubic-bezier(.34,1.56,.64,1),background .2s}',
        '#gs .card:hover{border-radius:20px;transform:translateY(-3px);background:var(--md-sys-color-surface-container-high)}',
        '#gs .ico{width:48px;height:48px;border-radius:16px;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);display:grid;place-items:center}',
        '#gs .ico .gs-ms{font-size:26px}',
        '#gs .card h3{margin:0;font-size:16px;font-weight:800}#gs .card p{margin:0;font-size:13px;line-height:1.55;opacity:.75}',
        '#gs kbd{font:700 12px ui-monospace,Menlo,Consolas,monospace;padding:3px 8px;border-radius:8px;background:var(--md-sys-color-surface-variant);color:var(--md-sys-color-on-surface);box-shadow:0 2px 0 var(--md-sys-color-outline-variant)}',
        '#gs .note{display:flex;align-items:center;gap:12px;padding:14px 18px;border-radius:22px;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);font-size:13px;line-height:1.5}',
        '#gs .note .gs-ms{flex-shrink:0}',
        '#gs .keys{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}',
        '#gs .key-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-radius:20px;background:var(--md-sys-color-surface-container);font-size:13px;font-weight:700}',
        '#gs .key-row .k{display:flex;gap:6px;align-items:center;flex-shrink:0}',
        '#gs .set-grid{display:grid;gap:14px}',
        '#gs .set-card{background:var(--md-sys-color-surface-container);border-radius:28px;padding:20px 22px;display:flex;flex-direction:column;gap:14px}',
        '#gs .set-head{display:flex;align-items:center;gap:12px}',
        '#gs .set-head .ico{width:40px;height:40px;border-radius:14px}#gs .set-head .ico .gs-ms{font-size:22px}',
        '#gs .set-head h3{margin:0;font-size:16px;font-weight:800}#gs .set-head p{margin:2px 0 0;font-size:12px;opacity:.7}',
        '#gs .seg{display:flex;gap:6px;background:var(--md-sys-color-surface-container-high);padding:6px;border-radius:999px}',
        '#gs .seg button{flex:1;border:none;background:transparent;color:inherit;font:800 13px "Google Sans Flex",sans-serif;padding:12px 10px;border-radius:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .2s,border-radius .3s}',
        '#gs .seg button .gs-ms{font-size:20px}#gs .seg button:hover{background:color-mix(in srgb,var(--md-sys-color-primary) 14%,transparent)}',
        '#gs .seg button.sel{background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);border-radius:18px}',
        '#gs .swatches{display:flex;flex-wrap:wrap;gap:12px}',
        '#gs .sw{width:48px;height:48px;border-radius:24px;border:3px solid transparent;cursor:pointer;display:grid;place-items:center;transition:border-radius .35s,transform .25s}',
        '#gs .sw:hover{transform:scale(1.1);border-radius:16px}#gs .sw.sel{border-color:var(--md-sys-color-on-surface);border-radius:16px;transform:scale(1.08)}',
        '#gs .sw .gs-ms{opacity:0;font-size:22px;transition:opacity .2s}#gs .sw.sel .gs-ms{opacity:1}',
        '#gs .sw-name{font-size:13px;font-weight:800;color:var(--md-sys-color-primary)}',
        '#gs footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px clamp(16px,4vw,40px) 22px;flex-shrink:0}',
        '#gs .btn{border:none;font:800 14px "Google Sans Flex",sans-serif;padding:14px 26px;border-radius:25px;cursor:pointer;display:inline-flex;align-items:center;gap:10px;transition:border-radius .35s,transform .2s,filter .2s}',
        '#gs .btn .gs-ms{font-size:20px}#gs .btn:hover{border-radius:18px}#gs .btn:active{transform:scale(.95)}',
        '#gs .btn.tonal{background:var(--md-sys-color-surface-container-high);color:var(--md-sys-color-on-surface)}',
        '#gs .btn.filled{background:var(--md-sys-color-primary);color:var(--md-sys-color-on-primary);box-shadow:0 8px 24px color-mix(in srgb,var(--md-sys-color-primary) 28%,transparent)}',
        '#gs .btn[disabled]{opacity:.35;pointer-events:none}',
        '#gs .dots{display:flex;gap:6px}#gs .dot{width:8px;height:8px;border-radius:99px;background:var(--md-sys-color-surface-variant);transition:width .35s cubic-bezier(.34,1.56,.64,1),background .2s}',
        '#gs .dot.active{width:26px;background:var(--md-sys-color-primary)}',
        '@media(max-width:720px){#gs .g3,#gs .keys{grid-template-columns:1fr}#gs .dots{display:none}#gs .btn{padding:13px 20px}#gs .hero{width:88px;height:88px;border-radius:30px}#gs .hero .gs-ms{font-size:46px}}',
        '@media(prefers-reduced-motion:reduce){#gs *{animation:none!important;transition-duration:.01ms!important}}'
    ].join('\n');

    var root = null, step = 0, lang = 'vi', built = false;
    function ms(n) { return '<span class="gs-ms">' + n + '</span>'; }
    function $(s, r) { return (r || root).querySelector(s); }
    function $$(s, r) { return Array.prototype.slice.call((r || root).querySelectorAll(s)); }

    function build() {
        if (built) return; built = true;
        var st = document.createElement('style'); st.id = 'gs-style'; st.textContent = CSS; document.head.appendChild(st);
        root = document.createElement('div'); root.id = 'gs'; root.hidden = true; root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('data-no-i18n', '');
        var cards2 = [0, 1, 2].map(function (i) { return '<div class="card"><div class="ico">' + ms(ICONS.s2[i]) + '</div><h3 data-t="s2_t" data-n="' + i + '"></h3><p data-t="s2_d" data-n="' + i + '" data-html></p></div>'; }).join('');
        var cards3 = ICONS.s3.map(function (ic, i) { return '<div class="card"><div class="ico">' + ms(ic) + '</div><h3 data-t="s3_t" data-n="' + i + '"></h3><p data-t="s3_d" data-n="' + i + '" data-html></p></div>'; }).join('');
        root.innerHTML =
            '<header><div class="brand"><div class="badge">' + ms('picture_as_pdf') + '</div><div><h1>PDF Reader</h1><p data-t="sub"></p></div></div><button class="btn-text" id="gs-skip" data-t="skip"></button></header>' +
            '<div class="stepper" id="gs-stepper"></div><div class="meta"><span id="gs-count"></span><b id="gs-name"></b></div>' +
            '<main>' +
            '<section class="slide center" data-step="0"><div class="inner center"><div class="hero">' + ms('picture_as_pdf') + '</div><h2 data-t="s1_title"></h2><p class="lead" data-t="s1_desc"></p>' +
            '<div style="width:100%"><div class="lang-label" data-t="s1_pick"></div><div class="lang-grid">' +
            '<button class="lang-card" data-lang="vi"><span class="gs-ms tick">check_circle</span>Tiếng Việt<small>Vietnamese</small></button>' +
            '<button class="lang-card" data-lang="en"><span class="gs-ms tick">check_circle</span>English<small>Tiếng Anh</small></button></div></div></div></section>' +
            '<section class="slide" data-step="1"><div class="inner"><div><span class="chip">' + ms('add_circle') + '<span data-t="s2_chip"></span></span></div><h2 data-t="s2_title"></h2><p class="lead" data-t="s2_desc"></p>' +
            '<div class="grid g3">' + cards2 + '</div><div class="note">' + ms('lock') + '<span data-t="s2_note"></span></div></div></section>' +
            '<section class="slide" data-step="2"><div class="inner"><div><span class="chip">' + ms('auto_awesome') + '<span data-t="s3_chip"></span></span></div><h2 data-t="s3_title"></h2><div class="grid g3">' + cards3 + '</div></div></section>' +
            '<section class="slide" data-step="3"><div class="inner"><div><span class="chip">' + ms('keyboard') + '<span data-t="s4_chip"></span></span></div><h2 data-t="s4_title"></h2><div class="keys" id="gs-keys"></div></div></section>' +
            '<section class="slide" data-step="4"><div class="inner"><div><span class="chip">' + ms('tune') + '<span data-t="s5_chip"></span></span></div><h2 data-t="s5_title"></h2><p class="lead" data-t="s5_desc"></p><div class="set-grid">' +
            '<div class="set-card"><div class="set-head"><div class="ico">' + ms('contrast') + '</div><div><h3 data-t="t_title"></h3><p data-t="t_desc"></p></div></div><div class="seg" id="gs-theme">' +
            '<button data-theme="system">' + ms('brightness_auto') + '<span data-t="t_system"></span></button><button data-theme="light">' + ms('light_mode') + '<span data-t="t_light"></span></button><button data-theme="dark">' + ms('dark_mode') + '<span data-t="t_dark"></span></button></div></div>' +
            '<div class="set-card"><div class="set-head"><div class="ico">' + ms('palette') + '</div><div><h3 data-t="a_title"></h3><p data-t="a_desc"></p></div></div><div class="swatches" id="gs-sw"></div><div class="sw-name" id="gs-swname"></div></div>' +
            '</div></div></section></main>' +
            '<footer><button class="btn tonal" id="gs-back">' + ms('arrow_back') + '<span data-t="back"></span></button><div class="dots" id="gs-dots"></div>' +
            '<button class="btn filled" id="gs-next"><span id="gs-next-t"></span>' + ms('arrow_forward').replace('class="gs-ms"', 'class="gs-ms" id="gs-next-i"') + '</button></footer>';
        document.body.appendChild(root);

        var s = $('#gs-stepper'), d = $('#gs-dots');
        for (var i = 0; i < TOTAL; i++) {
            var p = document.createElement('div'); p.className = 'pill'; (function (n) { p.addEventListener('click', function () { go(n); }); })(i); s.appendChild(p);
            var dot = document.createElement('div'); dot.className = 'dot'; d.appendChild(dot);
        }
        // Ô màu nhấn
        var box = $('#gs-sw');
        Object.keys(I18N.ACCENTS).forEach(function (k) {
            var b = document.createElement('button'); b.className = 'sw'; b.dataset.accent = k;
            b.innerHTML = ms('check');
            b.addEventListener('click', function () { I18N.setAccent(k); paintSettings(); });
            box.appendChild(b);
        });
        $$('.lang-card').forEach(function (b) { b.addEventListener('click', function () { I18N.setLang(b.dataset.lang); lang = I18N.lang; apply(); }); });
        $$('#gs-theme button').forEach(function (b) { b.addEventListener('click', function () { I18N.setTheme(b.dataset.theme); paintSettings(); }); });
        $('#gs-next').addEventListener('click', function () { if (step === TOTAL - 1) close(); else go(step + 1); });
        $('#gs-back').addEventListener('click', function () { go(step - 1); });
        $('#gs-skip').addEventListener('click', close);
        root.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight' && step < TOTAL - 1) go(step + 1);
            else if (e.key === 'ArrowLeft' && step > 0) go(step - 1);
            else if (e.key === 'Escape') close();
            e.stopPropagation();
        });
        // Làm mới khi hệ thống đổi sáng/tối (chế độ Hệ thống)
        try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paintSettings); } catch (e) {}
    }

    function paintSettings() {
        $$('#gs-theme button').forEach(function (b) { b.classList.toggle('sel', b.dataset.theme === I18N.theme); });
        var mode = I18N.resolvedTheme();
        $$('.sw').forEach(function (b) {
            var c = I18N.ACCENTS[b.dataset.accent][mode];
            b.style.background = c.primary; b.style.color = c.onPrimary; b.title = I18N.accentName(b.dataset.accent);
            b.classList.toggle('sel', b.dataset.accent === I18N.accent);
        });
        $('#gs-swname').textContent = I18N.accentName(I18N.accent);
    }

    function apply() {
        var d = T[lang] || T.en;
        document.documentElement.lang = lang;
        $$('[data-t]').forEach(function (el) {
            var k = el.getAttribute('data-t'), v = d[k];
            if (el.hasAttribute('data-n')) v = v[+el.getAttribute('data-n')];
            if (v === undefined) return;
            if (el.hasAttribute('data-html')) el.innerHTML = v; else el.textContent = v;
        });
        var keys = $('#gs-keys'); keys.innerHTML = '';
        d.k.forEach(function (row) {
            var r = document.createElement('div'); r.className = 'key-row';
            r.innerHTML = '<span></span><span class="k">' + row[1].map(function (x) { return '<kbd>' + x + '</kbd>'; }).join('') + '</span>';
            r.firstChild.textContent = row[0]; keys.appendChild(r);
        });
        $$('.lang-card').forEach(function (b) { b.classList.toggle('sel', b.dataset.lang === lang); });
        paintSettings(); update();
    }

    function update() {
        var d = T[lang] || T.en;
        $$('.pill').forEach(function (p, i) { p.classList.toggle('active', i === step); p.classList.toggle('done', i < step); });
        $$('.dot').forEach(function (p, i) { p.classList.toggle('active', i === step); });
        $$('.slide').forEach(function (s, i) { s.classList.toggle('active', i === step); s.classList.toggle('before', i < step); if (i === step) s.scrollTop = 0; });
        $('#gs-count').textContent = d.step.replace('{n}', step + 1).replace('{t}', TOTAL);
        $('#gs-name').textContent = d.names[step];
        $('#gs-back').disabled = step === 0;
        var last = step === TOTAL - 1;
        $('#gs-next-t').textContent = last ? d.finish : d.next;
        $('#gs-next-i').textContent = last ? 'play_arrow' : 'arrow_forward';
    }
    function go(n) { step = Math.max(0, Math.min(TOTAL - 1, n)); update(); }

    var prevFocus = null;
    function open(startStep) {
        build();
        prevFocus = document.activeElement;
        lang = I18N.lang; step = startStep || 0;
        root.hidden = false; apply();
        requestAnimationFrame(function () { root.classList.add('show'); });
        $('#gs-next').focus({ preventScroll: true });
    }
    function close() {
        if (!root || root.hidden) return;
        I18N.lsSet(I18N.KEY.gs, '1');
        root.classList.remove('show');
        setTimeout(function () { root.hidden = true; }, 250);
        document.documentElement.lang = I18N.lang;
        if (prevFocus && prevFocus.focus) try { prevFocus.focus({ preventScroll: true }); } catch (e) {}
    }

    window.GS = { open: open, close: close };
    function auto() { if (!I18N.lsGet(I18N.KEY.gs)) open(0); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', auto); else auto();
})();
