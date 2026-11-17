// Generated: shared optional update controls; edit the original client templates.
(function(){
/* DSH workbench UI v1. MIT. Canonical source: dsh-suite/ui/workbench-ui.js.
 * Vendored into each plugin: no Suite or extra runtime dependency is required.
 * Styles are scoped to .dshw and never replace the host chrome or theme.
 */
function createWorkbenchUI(React) {
  const h = React.createElement;
  const { useEffect, useId, useRef } = React;
  const cx = (...values) => values.filter(Boolean).join(' ');
  const paths = {
    book: ['M4 4h6a3 3 0 0 1 2 2v15a4 4 0 0 0-4-2H4z', 'M20 4h-6a3 3 0 0 0-2 2v15a4 4 0 0 1 4-2h4z'],
    calendar: ['M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2Z', 'M7 3v4M17 3v4M3 10h18'],
    mail: ['M3 5h18v14H3z', 'm3 6 9 7 9-7'],
    rss: ['M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16', 'M4 19h.01'],
    slides: ['M3 4h18v13H3z', 'M12 17v4M8 21h8'],
    shield: ['m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6z', 'm8 12 3 3 5-6'],
    layers: ['M5 3h16v16H5z', 'M2 7v15h15'],
    play: ['m9 6 9 6-9 6Z'],
    video: ['M3 5h12v14H3z', 'm15 10 6-4v12l-6-4'],
    search: ['M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z', 'm16 16 5 5'],
    plus: ['M12 5v14M5 12h14'],
    refresh: ['M20 7a9 9 0 1 0 1 8', 'M20 2v5h-5'],
    settings: ['m9 3-.7 2.4-2 .9L4 5.8 2.5 8.4l1.7 1.8v2.3L2.5 14 4 17l2.5-.4 1.9 1L9 20h3l.8-2.4 2-1 2.5.4 1.5-2.7-1.7-1.9v-2.2l1.7-1.8-1.5-2.6-2.5.4-2-1L12 3Z', 'M14 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'],
    close: ['m6 6 12 12M18 6 6 18'],
    left: ['m14 5-7 7 7 7'],
    right: ['m10 5 7 7-7 7'],
    down: ['m5 9 7 7 7-7'],
    filter: ['M4 5h16M7 12h10M10 19h4'],
    download: ['M12 3v12m-5-5 5 5 5-5', 'M4 16v5h16v-5'],
    upload: ['M12 16V4m-5 5 5-5 5 5', 'M4 16v5h16v-5'],
    copy: ['M8 8h13v13H8z', 'M16 8V3H3v13h5'],
    external: ['M14 3h7v7m0-7L10 14', 'M10 3H3v18h18v-7'],
    file: ['M4 3h10l6 6v12H4z', 'M14 3v6h6M8 13h8M8 17h6'],
    folder: ['M3 5h7l2 3h9v12H3z'],
    edit: ['m15 4 5 5-10 10-6 1 1-6Z', 'm13 6 5 5'],
    trash: ['M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7'],
    more: ['M5 12h.01M12 12h.01M19 12h.01'],
    info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 11v6M12 7h.01'],
    check: ['m5 12 4 4L19 6'],
    quote: ['M4 12h6v7H3v-7c0-4 2-6 5-7M15 12h6v7h-7v-7c0-4 2-6 5-7'],
    star: ['m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z'],
    reply: ['m9 5-7 7 7 7v-5h6c3 0 5 2 6 5 0-8-4-11-12-11Z'],
    link: ['m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0', 'm14 8 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0'],
  };
  function Icon({ name = 'file', size = 20, ...props }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false, ...props },
      (paths[name] || paths.file).map((d, index) => h('path', { key: index, d })));
  }
  function Button({ children, icon, variant, className, ...props }) {
    return h('button', { type: 'button', ...props, className: cx('w-button', variant && 'w-' + variant, className) }, icon ? h(Icon, { name: icon, size: 18 }) : null, children);
  }
  function IconButton({ label, icon, ...props }) {
    return h(Button, { ...props, icon, className: cx('w-icon-button', props.className), 'aria-label': label, title: label });
  }
  function Page({ title, subtitle, actions, children, workbench = false, className, rootRef, ...props }) {
    return h('section', { ...props, ref: rootRef, className: cx('dshw', 'w-page', className), 'data-main': workbench ? 'true' : 'false' },
      h(Styles, { key: 'styles' }),
      h('header', { className: 'w-page-header' }, h('div', { className: 'w-heading' }, h('h1', null, title), subtitle ? h('p', { className: 'w-subtitle' }, subtitle) : null), actions ? h('div', { className: 'w-header-actions' }, actions) : null),
      h('div', { className: 'w-body' }, children));
  }
  function Tabs({ items, value, onChange, label, children }) {
    const id = useId();
    const active = items.some(item => item.id === value) ? value : items[0]?.id;
    function keys(event, index) {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
      const node = event.currentTarget.parentElement?.querySelectorAll('[role=tab]')[next];
      if (node) { onChange(items[next].id); node.focus(); }
    }
    return h('div', { className: 'w-tabs-layout' },
      h('div', { className: 'w-tabs', role: 'tablist', 'aria-label': label }, items.map((item, index) => h('button', {
        type: 'button', role: 'tab', key: item.id, id: id + '-' + item.id, 'aria-controls': id + '-panel', 'aria-selected': active === item.id, tabIndex: active === item.id ? 0 : -1,
        onClick: () => onChange(item.id), onKeyDown: event => keys(event, index),
      }, item.label, item.count !== undefined ? h('span', { className: 'w-count' }, item.count) : null))),
      h('div', { className: 'w-tab-panel', id: id + '-panel', role: 'tabpanel', 'aria-labelledby': id + '-' + active }, children));
  }
  function Status({ children, tone = 'info', className }) {
    if (!children) return null;
    return h('div', { className: cx('dshw', 'w-status', 'w-status-' + tone, className), role: tone === 'error' ? 'alert' : 'status', 'aria-live': tone === 'error' ? 'assertive' : 'polite' }, h(Icon, { name: tone === 'success' ? 'check' : 'info', size: 18 }), h('div', null, children));
  }
  function Empty({ title, children, action, icon = 'file' }) {
    return h('div', { className: 'dshw w-empty' }, h(Styles, { key: 'styles' }), h(Icon, { name: icon, size: 32 }), h('h2', null, title), children ? h('div', { className: 'w-muted' }, children) : null, action ? h('div', { className: 'w-toolbar' }, action) : null);
  }
  function Split({ list, detail, selected, onBack, backLabel, className, listWidth = 360 }) {
    const ref = useRef(null);
    useEffect(() => {
      if (!selected || !ref.current || ref.current.clientWidth > 760) return;
      const heading = ref.current.querySelector('.w-detail h2');
      if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    }, [selected]);
    return h('div', { ref, className: cx('w-split', className), 'data-selected': selected ? 'true' : 'false', style: { '--w-list-width': listWidth + 'px' } },
      h('div', { className: 'w-master' }, list),
      h('div', { className: 'w-detail' }, selected ? h(Button, { className: 'w-back', icon: 'left', variant: 'ghost', onClick: onBack }, backLabel) : null, detail));
  }
  function Row({ title, meta, description, active, onClick, children, status, className, disabled }) {
    return h('div', { className: cx('w-row', active && 'w-selected', className) },
      children ? h('div', { className: 'w-row-select' }, children) : null,
      h('button', { type: 'button', className: 'w-row-button', onClick, disabled, 'aria-pressed': !!active },
        h('span', { className: 'w-row-head' }, h('strong', null, title), status ? h('span', { className: 'w-tag' }, status) : null),
        meta ? h('span', { className: 'w-row-meta' }, meta) : null,
        description ? h('span', { className: 'w-row-description' }, description) : null));
  }
  function Search({ label, value, onChange, ...props }) {
    const id = useId();
    return h('div', { className: 'w-search' }, h(Icon, { name: 'search', size: 18 }), h('input', { type: 'search', id, 'aria-label': label, placeholder: label, value, onChange, ...props }));
  }
  function Switch({ label, checked, onChange, disabled }) {
    return h('label', { className: 'w-switch-label' }, h('span', null, label), h('input', { type: 'checkbox', role: 'switch', checked, disabled, onChange, 'aria-label': label }), h('span', { className: 'w-switch-track', 'aria-hidden': true }));
  }
  function Dialog({ title, children, onClose, closeLabel, className, busy = false }) {
    const id = useId(), panel = useRef(null);
    useEffect(() => {
      const previous = document.activeElement;
      panel.current?.querySelector('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')?.focus();
      return () => { if (previous?.isConnected) previous.focus({ preventScroll: true }); };
    }, []);
    function keydown(event) {
      if (event.key === 'Escape' && !event.isComposing) { event.preventDefault(); event.stopPropagation(); if (!busy) onClose(); return; }
      if (event.key !== 'Tab') return;
      const controls = [...panel.current.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]')].filter(node => node.getClientRects().length);
      const first = controls[0], last = controls.at(-1);
      if (!controls.length) { event.preventDefault(); panel.current.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    return h('div', { className: 'dshw w-overlay', onClick: event => { if (!busy && event.target === event.currentTarget) onClose(); } },
      h(Styles, { key: 'styles' }),
      h('section', { ref: panel, className: cx('w-dialog', className), role: 'dialog', 'aria-modal': true, 'aria-labelledby': id, tabIndex: -1, onKeyDown: keydown },
        h('header', { className: 'w-dialog-header' }, h('h2', { id }, title), h(IconButton, { icon: 'close', label: closeLabel, disabled: busy, onClick: onClose })), h('div', { className: 'w-dialog-body' }, children)));
  }
  function register(ctx, { id, label, icon, component, inject, order = 50 }) {
    // The two slots are optional. Existing settings and manual tools still load
    // in hosts without a workbench, while RC.3 owns navigation/pinning itself.
    ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: id, inject: () => ({ ...(inject?.() || {}), workbench: true }) }, component));
    ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id, order, label }, function WorkbenchIcon({ size }) { return h(Icon, { name: icon, size }); }));
  }
  const styles = `
.dshw{--w-bg:var(--dsw-alias-bg-layer-1,#fff);--w-soft:var(--dsw-alias-bg-layer-2,#f7f8fa);--w-text:var(--dsw-alias-label-primary,#18202c);--w-muted:var(--dsw-alias-label-secondary,#667085);--w-border:var(--dsw-alias-border-l3,#e7e9ef);--w-accent:var(--dsh-plugin-workbench-accent,#4f6bdb);--w-selected:color-mix(in srgb,var(--w-accent) 10%,var(--w-bg));--w-primary:var(--w-text);--w-on-primary:var(--w-bg);container-type:inline-size;container-name:dsh-workbench;color:var(--w-text);font:14px/1.65 var(--dsh-font-family-content,system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif);min-width:0;max-width:100%;box-sizing:border-box;text-align:start;color-scheme:inherit}
.dshw *,.dshw *:before,.dshw *:after{box-sizing:border-box}.dshw h1,.dshw h2,.dshw h3,.dshw h4,.dshw p{margin:0}.dshw h1{font-size:30px;line-height:1.25;letter-spacing:-.025em;font-weight:650}.dshw h2{font-size:24px;line-height:1.35;font-weight:650;letter-spacing:-.015em;overflow-wrap:anywhere}.dshw h3,.dshw h4{font-size:16px;line-height:1.4;font-weight:600}.dshw a{color:var(--w-accent);text-underline-offset:3px;overflow-wrap:anywhere}.dshw button,.dshw input,.dshw select,.dshw textarea{font:inherit;color:inherit;max-width:100%}.dshw input:not([type=checkbox]):not([type=radio]):not([type=file]),.dshw select,.dshw textarea{background:var(--dsw-specific-input-major,var(--w-bg));border:1px solid var(--w-border);border-radius:8px;padding:8px 11px;min-width:0;line-height:1.5}.dshw input:not([type=checkbox]):not([type=radio]):not([type=file]),.dshw select{min-height:38px}.dshw textarea{resize:vertical}.dshw input[type=checkbox],.dshw input[type=radio]{width:16px;height:16px;flex-shrink:0;accent-color:var(--w-accent)}.dshw :focus-visible{outline:2px solid var(--w-accent);outline-offset:3px}.dshw button:disabled,.dshw input:disabled,.dshw select:disabled,.dshw textarea:disabled{opacity:.5;cursor:not-allowed}.dshw label{font-size:13px}.dshw fieldset{min-width:0;border:1px solid var(--w-border);border-radius:8px}.dshw summary{cursor:pointer;font-weight:550;list-style:none;display:flex;align-items:center;gap:8px}.dshw summary::-webkit-details-marker{display:none}.dshw summary:after{content:'';display:block;margin-inline-start:auto;width:7px;height:7px;border-inline-end:1.75px solid currentColor;border-bottom:1.75px solid currentColor;transform:rotate(45deg);flex-shrink:0}.dshw details[open]>summary:after{transform:rotate(225deg)}.dshw details>summary+*{margin-top:12px}.dshw pre{white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.7 ui-monospace,SFMono-Regular,Consolas,monospace;max-width:100%;background:var(--w-soft);border-radius:6px;padding:14px}.dshw img,.dshw video,.dshw iframe{max-width:100%}
.w-page{display:flex;flex-direction:column;position:relative;padding:0;min-height:540px;gap:0}.w-page[data-main=true]{height:100%;min-height:0;padding:calc(24px + var(--dsh-frame-top-clearance,0px)) 28px 0 max(28px,var(--dsh-frame-leading-clearance,0px));overflow:auto}.dshw[data-main=true]{background:var(--w-bg)}.dshw.w-page,.dshw .w-body,.dshw .w-tab-panel{overflow-x:clip}.w-page-header{display:flex;justify-content:space-between;gap:24px;align-items:flex-start;padding-bottom:22px;flex-shrink:0}.w-heading{min-width:0}.w-subtitle{margin-top:8px!important;font-size:14px;color:var(--w-muted);line-height:1.6}.w-header-actions,.w-toolbar,.w-actions{display:flex;align-items:center;flex-wrap:wrap;gap:8px;min-width:0}.w-header-actions{justify-content:flex-end}.w-body,.w-tabs-layout{display:flex;flex-direction:column;flex:1;min-height:0;min-width:0}.w-body{overflow:auto}.w-tab-panel{flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:auto}.w-tabs{display:flex;align-items:stretch;gap:20px;border-bottom:1px solid var(--w-border);flex-shrink:0;overflow-x:auto;scrollbar-width:thin}.dshw .w-tabs>button{border:0;border-bottom:2px solid transparent;background:transparent;padding:11px 8px 13px;white-space:nowrap;font-size:14px;font-weight:550;cursor:pointer;color:var(--w-muted);display:flex;align-items:center;gap:7px}.dshw .w-tabs>button[aria-selected=true]{border-bottom-color:var(--w-accent);color:var(--w-accent)}.w-count,.w-tag{font-size:12px;line-height:1.5;display:inline-flex;align-items:center;flex-shrink:0;background:var(--w-soft);border-radius:5px;padding:1px 6px;color:var(--w-muted)}.w-tabs [aria-selected=true] .w-count,.w-selected .w-tag{color:var(--w-accent);background:var(--w-selected)}
.dshw .w-button{display:inline-flex;justify-content:center;align-items:center;gap:7px;background:var(--w-bg);border:1px solid var(--w-border);border-radius:8px;padding:8px 12px;min-height:36px;line-height:1.4;font-size:14px;font-weight:500;cursor:pointer;text-decoration:none;white-space:normal}.dshw .w-button:not(:disabled):hover{background:var(--w-soft)}.dshw .w-primary{background:var(--w-primary);border-color:var(--w-primary);color:var(--w-on-primary)}.dshw .w-primary:not(:disabled):hover{background:var(--w-primary);opacity:.9}.dshw .w-ghost{background:transparent;border-color:transparent}.dshw .w-danger{color:var(--dsw-alias-state-error-primary,#b43c3c)}.dshw .w-icon-button{width:36px;min-width:36px;padding:8px}.dshw .w-button svg{flex-shrink:0}.w-muted{color:var(--w-muted);font-size:12px;line-height:1.6}.w-section{padding:24px 0;border-bottom:1px solid var(--w-border);min-width:0}.w-section>h3{margin-bottom:12px}.w-section>p+p{margin-top:8px}.w-fields{display:grid;gap:16px;min-width:0}.w-field{display:grid;gap:6px;min-width:0}.w-field>input,.w-field>select,.w-field>textarea{width:100%}.w-status{display:flex;align-items:flex-start;gap:8px;padding:11px 13px;margin:12px 0;border:1px solid var(--w-border);border-radius:8px;background:var(--w-soft);font-size:13px;overflow-wrap:anywhere;flex-shrink:0}.w-status>svg{flex-shrink:0;margin-top:2px}.w-status-error{color:var(--dsw-alias-state-error-primary,#ad3636)}.w-status-success{color:var(--dsw-alias-state-success-primary,#24794a)}.w-status-warn{color:var(--dsw-alias-state-warning-primary,#8a5a00)}.w-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px;width:100%;max-width:580px;padding:48px 24px;margin:auto;min-height:280px;overflow-wrap:anywhere}.w-empty>svg{color:var(--w-muted)}.w-empty h2{font-size:20px}.w-empty .w-muted{font-size:14px}.w-empty .w-toolbar{justify-content:center}
.w-split{display:grid;grid-template-columns:minmax(240px,var(--w-list-width)) minmax(0,1fr);min-height:460px;flex:1;min-width:0}.w-master{min-width:0;border-inline-end:1px solid var(--w-border);overflow:auto;padding-bottom:24px}.w-detail{min-width:0;padding:26px 28px;overflow:auto;overflow-wrap:anywhere;display:flex;flex-direction:column}.w-master-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:20px 16px}.w-search{display:flex;align-items:center;gap:8px;border:1px solid var(--w-border);border-radius:8px;padding:0 10px;min-width:0;flex:1;background:var(--w-bg)}.w-search>svg{color:var(--w-muted);flex-shrink:0}.dshw .w-search>input{border:0!important;background:transparent!important;padding:8px 0!important;width:100%;outline-offset:0}.w-row{display:flex;gap:0;min-width:0;position:relative;border-bottom:1px solid var(--w-border);border-inline-start:3px solid transparent}.w-row-select{display:flex;align-items:flex-start;padding:21px 0 0 14px}.dshw .w-row-button{display:flex;flex-direction:column;align-items:stretch;gap:7px;text-align:start;width:100%;padding:18px 18px 18px 16px;border:0;background:transparent;color:inherit;min-width:0;cursor:pointer;line-height:1.5}.dshw .w-row-button:hover{background:var(--w-soft)}.w-row-head{display:flex;align-items:flex-start;gap:10px;justify-content:space-between;min-width:0}.w-row-head>strong{font-size:14px;line-height:1.5;font-weight:600;overflow-wrap:anywhere}.w-row-meta,.w-row-description{color:var(--w-muted);font-size:12px;line-height:1.6;overflow-wrap:anywhere}.w-row-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.w-selected{background:var(--w-selected);border-inline-start-color:var(--w-accent)}.w-back{display:none!important}.w-detail-title{margin-bottom:12px!important}.w-detail-meta{color:var(--w-muted);font-size:13px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.w-detail-footer{padding:24px 0;display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:auto;border-top:1px solid var(--w-border)}.w-detail-footer .w-muted{flex:1;min-width:160px}.w-definition{display:grid;grid-template-columns:minmax(80px,120px) minmax(0,1fr);gap:8px 16px;font-size:14px;margin:20px 0}.w-definition dt{color:var(--w-muted)}.w-definition dd{margin:0;min-width:0;overflow-wrap:anywhere}
.w-switch-label{display:inline-flex;align-items:center;gap:8px;font-size:13px;position:relative;cursor:pointer}.w-switch-label>input{position:absolute;opacity:0;inset-inline-end:0;width:36px!important;height:22px!important;margin:0;cursor:pointer}.w-switch-track{width:36px;height:22px;border-radius:12px;display:block;background:var(--w-border);border:1px solid var(--w-border);pointer-events:none;padding:2px;transition:background .15s}.w-switch-track:before{content:'';display:block;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 2px #0002;transition:transform .15s}.w-switch-label>input:checked+.w-switch-track{background:var(--w-accent);border-color:var(--w-accent)}.w-switch-label>input:checked+.w-switch-track:before{transform:translateX(14px)}.w-switch-label>input:focus-visible+.w-switch-track{outline:2px solid var(--w-accent);outline-offset:3px}.w-switch-label:has(>input:disabled){opacity:.5;cursor:not-allowed}
.w-overlay{position:fixed;inset:0;background:#0005;display:flex;justify-content:flex-end;z-index:1000;padding:12px;overflow:auto}.w-dialog{width:min(620px,100%);max-height:100%;display:flex;flex-direction:column;min-height:0;background:var(--w-bg);color:var(--w-text);border:1px solid var(--w-border);border-radius:12px;box-shadow:0 18px 70px #0003}.w-dialog-header{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 24px;border-bottom:1px solid var(--w-border);flex-shrink:0}.w-dialog-header>h2{font-size:20px}.w-dialog-body{overflow:auto;padding:20px 24px;min-height:0}.w-editor-grid{display:grid;grid-template-columns:210px minmax(0,1fr) 300px;min-height:500px;flex:1}.w-editor-list{padding:20px 12px;border-inline-end:1px solid var(--w-border);min-width:0}.w-editor-canvas{background:var(--w-soft);padding:20px;min-width:0;display:flex;flex-direction:column;gap:14px}.w-editor-inspector{padding:24px;border-inline-start:1px solid var(--w-border);min-width:0;overflow:auto}.w-editor-inspector h3{margin-bottom:18px}.w-preview-empty{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:12px;aspect-ratio:16/9;min-height:180px;background:var(--w-soft);border:1px solid var(--w-border);border-radius:8px;padding:24px;color:var(--w-muted)}.w-content-pad{padding:24px 0}.w-stack{display:flex;flex-direction:column;gap:16px;min-width:0}.w-scroll-x{overflow:auto;max-width:100%}
@container dsh-workbench (max-width:1000px){.w-editor-grid{grid-template-columns:160px minmax(0,1fr)}.w-editor-inspector{grid-column:1/-1;border-inline-start:0;border-top:1px solid var(--w-border)}.w-header-actions{max-width:60%}.w-split{grid-template-columns:minmax(240px,32%) minmax(0,1fr)}}
@container dsh-workbench (max-width:760px){.w-page-header{gap:14px;flex-wrap:wrap;padding-bottom:18px}.w-heading{flex:1;min-width:170px}.dshw h1{font-size:24px}.w-header-actions{max-width:100%;justify-content:flex-start}.w-subtitle{font-size:13px}.w-tabs{gap:12px}.dshw .w-tabs>button{padding:10px 4px 12px}.w-split{display:block;min-height:360px}.w-split[data-selected=false]>.w-detail{display:none}.w-split[data-selected=true]>.w-master{display:none}.w-master{border-inline-end:0}.w-detail{padding:20px 0}.w-back{display:inline-flex!important;align-self:flex-start;margin:0 0 16px!important}.w-detail h2{font-size:22px}.w-master-toolbar{padding:16px 0}.dshw .w-row-button{padding:16px 10px}.w-detail-footer{position:static}.w-detail-footer .w-muted{flex-basis:100%}.w-editor-grid{display:flex;flex-direction:column}.w-editor-list{border-inline-end:0;border-bottom:1px solid var(--w-border);padding:16px 0}.w-editor-canvas{padding:16px 0;background:var(--w-bg)}.w-editor-inspector{padding:20px 0}.w-dialog-header,.w-dialog-body{padding:16px}.w-button{min-height:40px}.w-definition{grid-template-columns:80px minmax(0,1fr)}}
@media(max-width:700px){.w-page[data-main=true]{padding:calc(16px + var(--dsh-frame-top-clearance,0px)) 16px 0 max(16px,var(--dsh-frame-leading-clearance,0px))}.w-overlay{padding:8px}.w-dialog{width:100%}}
@media(prefers-reduced-motion:reduce){.dshw *,.dshw *:before{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
`;
  function Styles() { return h('style', null, styles); }
  return { Icon, Button, IconButton, Page, Tabs, Status, Empty, Split, Row, Search, Switch, Dialog, Styles, register, styles };
}

/* One update control per plugin. Only transport, idle guards and installation
 * coordination are shared; no global update page or update-all action exists. */
function __stardustUpdatesGuards() {
  const key = Symbol.for('stardustlc.plugin-updates.guards.v1');
  return globalThis[key] ||= { values: new Map(), listeners: new Set(), viewListeners: new Set(), clients: new Set() };
}
function __stardustUpdatesGuard(React, name, { dirty = false, busy = false, retainOnClose = false } = {}) {
  const token = React.useRef(null);
  if (!token.current) token.current = {};
  React.useLayoutEffect(() => {
    const pool = __stardustUpdatesGuards();
    if (!dirty && !busy) for (const [key, value] of pool.values) if (value.name === name && value.orphan) pool.values.delete(key);
    pool.values.set(token.current, { name, dirty: !!dirty, busy: !!busy, retainOnClose, orphan: false });
    for (const listener of pool.listeners) listener();
  }, [name, !!dirty, !!busy, retainOnClose]);
  React.useEffect(() => () => {
    const pool = __stardustUpdatesGuards(), value = pool.values.get(token.current);
    if (value?.retainOnClose && (value.dirty || value.busy)) value.orphan = true;
    else pool.values.delete(token.current);
    for (const listener of pool.listeners) listener();
  }, []);
}
function __StardustPluginUpdatesFooter({ React, name }) {
  const [, render] = React.useState(0), pool = __stardustUpdatesGuards();
  React.useEffect(() => { const fn = () => render(value => value + 1); pool.viewListeners.add(fn); return () => pool.viewListeners.delete(fn); }, []);
  const client = [...pool.clients].find(client => typeof client.Footer === 'function' && client.has(name));
  if (!client) return null;
  return React.createElement(client.Footer, { name });
}
function __stardustUpdatesFooter(React, name) {
  return React.createElement(__StardustPluginUpdatesFooter, { key: 'plugin-updates', React, name });
}
function __stardustUpdatesInlinePage(React, element, name) {
  return React.cloneElement(element, null, element.props.children, __stardustUpdatesFooter(React, name));
}
function __stardustUpdatesDetailName(subject, rows) {
  if (!subject || !['bundle', 'row'].includes(subject.kind)) return null;
  if (subject.kind === 'row' && subject.pkg?.name === '@stardustlc/dsh-suite') {
    const component = rows.find(row => row.bundledBy === subject.pkg.name && (subject.row?.moduleName === row.name || subject.row?.moduleName?.startsWith(row.name + '/')));
    if (component) return component.name;
  }
  return rows.some(row => row.name === subject.pkg?.name) ? subject.pkg.name : null;
}
function __stardustUpdatesNativeFormState(document) {
  let dirty = false, busy = false;
  for (const scope of document.querySelectorAll('[data-plugin-detail],[data-plugin-row-detail]')) for (const button of scope.querySelectorAll('button')) {
    if (!button.getClientRects().length || button.closest('.plugin-updates-footer')) continue;
    const label = (button.getAttribute('aria-label') || button.textContent || '').trim();
    if (/^(?:正在保存|保存中|Saving)(?:[.…\s]|$)/i.test(label) || button.getAttribute('aria-busy') === 'true') busy = true;
    if (!button.disabled && button.getAttribute('aria-disabled') !== 'true' && /^(?:保存(?:更改|设置|配置)?|Save(?: changes| settings| configuration)?)(?:\s+(?:Ctrl|⌘|Enter|↵).*)?$/i.test(label)) dirty = true;
  }
  return { dirty, busy };
}
function __stardustUpdatesDisplayRows(next, known) {
  for (const row of next.rows) known.set(row.name, row);
  if (!['verifying', 'installing', 'cancelling', 'unknown', 'restore-failed'].includes(next.job?.state)) return next;
  const rows = [...next.rows];
  for (const row of known.values()) if ((row.name === next.job.name || row.bundledBy === next.job.name) && !rows.some(item => item.name === row.name)) rows.push({ ...row, updating: true });
  return { ...next, rows };
}
function __stardustUpdatesSuiteRows(next, participants) {
  // Transitive Suite rows identify the migration entry in existing workbenches.
  const suite = next.rows.find(row => row.name === '@stardustlc/dsh-suite' && row.enabled);
  if (!suite) return next;
  const rows = [...next.rows], names = new Set(rows.map(row => row.name));
  for (const item of participants) if (item.suiteComponent && item.packageVersion && item.label && !names.has(item.name)) {
    names.add(item.name);
    rows.push({ name: item.name, version: item.packageVersion, enabled: true, sourceKind: 'suite', loadError: false, label: item.label, labelEn: item.labelEn, bundledBy: suite.name });
  }
  return { ...next, rows };
}
function __stardustUpdatesWrap(definition, participant) {
  return { ...definition, factory(require) {
    const original = definition.factory(require);
    if (!original || typeof original !== 'object') return original;
    const React = require('react');
    return { ...original, apply(ctx, ...args) {
      const result = original.apply?.call(this, ctx, ...args);
      // The optional alpha.3 slot stays dormant in older hosts; its scoped
      // injection unregisters naturally when the plugin is unloaded.
      if (participant.iconData && participant.sectionIds?.length && typeof ctx.inject === 'function') ctx.inject(['slots'], host => {
        for (const id of new Set(participant.sectionIds)) host.slots.inject('settings.section.icon', () => host.slots.register({ name: 'settings.section.icon', id }, function PluginSettingsIcon({ size = 20 }) {
          return React.createElement('img', { src: participant.iconData, alt: '', 'aria-hidden': true, width: size, height: size, style: { objectFit: 'contain', display: 'block', flexShrink: 0 } });
        }));
      });
      if (typeof ctx.inject === 'function') ctx.inject(['slots', 'locale', 'remote', 'remote.pluginManager'], host => __stardustUpdatesJoin(host, React, require, participant));
      return result;
    } };
  } };
}
function __stardustUpdatesJoin(host, React, require, participant) {
  const key = Symbol.for('stardustlc.plugin-updates.client.v1'), pools = globalThis[key] ||= new WeakMap(), root = host.root || host;
  if (typeof root.plugin !== 'function') return;
  let record = pools.get(root);
  if (!record) {
    record = { refs: new Map(), timer: null, version: participant.version, alive: true, hold: false, uiRevision: 3, migration: Promise.resolve() };
    pools.set(root, record);
    __stardustUpdatesActivate(record, pools, root, React, require);
  } else if ((record.uiRevision || 0) < 3 && !record.upgrading) {
    // The first loaded participant may still own a pre-footer client. Keep
    // its references and draft guards, wait for any admitted install, then
    // replace that one client fiber instead of running two window heartbeats.
    const shared = record;
    const previousMigration = record.migration;
    record.upgrading = record.migration = Promise.resolve(previousMigration).then(async () => {
      while (shared.alive && shared.hold) await new Promise(resolve => setTimeout(resolve, 500));
      if (!shared.alive || !shared.refs.size) return;
      await shared.fiber?.dispose?.();
      if (!shared.refs.size) return;
      shared.alive = true; shared.uiRevision = 3; pools.set(root, shared);
      __stardustUpdatesActivate(shared, pools, root, React, require);
    }).catch(() => { /* The original page remains usable if host disposal fails. */ });
  }
  clearTimeout(record.timer);
  const ref = {}; record.refs.set(ref, participant);
  host.effect(() => () => {
    record.refs.delete(ref);
    const stop = () => {
      if (record.refs.size || !record.alive) return;
      if (record.hold) { record.timer = setTimeout(stop, 1000); return; }
      record.alive = false; Promise.resolve(record.fiber?.dispose?.()).catch(() => {});
    };
    if (!record.refs.size) record.timer = setTimeout(stop, 1000);
  });
}
function __stardustUpdatesActivate(shared, pools, root, React, require) {
  shared.fiber = root.plugin({ name: 'stardustlc-plugin-updates-client', inject: ['slots', 'locale', 'remote', 'remote.pluginManager'], apply(ctx) {
    const client = __stardustUpdatesClient(ctx, React, require, shared);
    ctx.effect(() => () => { shared.alive = false; client.dispose(); if (pools.get(root) === shared) pools.delete(root); });
  } });
  Promise.resolve(shared.fiber).catch(() => { shared.alive = false; if (pools.get(root) === shared) pools.delete(root); });
}
function __stardustUpdatesClient(ctx, React, require, shared) {
  const h = React.createElement, W = createWorkbenchUI(React), route = new URL('api/stardustlc/plugin-updates', document.baseURI);
  const { useState, useEffect } = React, id = crypto.randomUUID(), listeners = new Set(), pool = __stardustUpdatesGuards(), requests = new Set(), notified = new Set(), knownRows = new Map();
  let alive = true, registered = false, state = null, lastInteraction = Date.now(), inPoll = false, manualOperation = false, legacyHint = null;
  const language = () => String(ctx.locale?.getSnapshot?.().active || '').startsWith('en') ? 'en' : 'zh';
  const t = (zh, en) => language() === 'en' ? en : zh;
  const preferences = name => state?.preferences.packages[name] || { checkEnabled: true, autoInstall: false, deferredUntil: 0, ignoredVersion: null };
  const rowFor = name => state?.rows.find(row => row.name === name);
  const activeJob = () => ['verifying', 'installing', 'cancelling'].includes(state?.job?.state);
  function notify() { shared.hold = manualOperation || activeJob(); for (const listener of listeners) listener(); for (const listener of pool.viewListeners) listener(); }
  async function api(body = { action: 'state' }) {
    const controller = new AbortController(); requests.add(controller);
    const timeout = setTimeout(() => controller.abort(), ['check', 'check-when-due'].includes(body.action) ? 95000 : 45000);
    try {
      const response = await fetch(route, { method: 'POST', credentials: 'same-origin', cache: 'no-store', signal: controller.signal, headers: { 'content-type': 'application/json', 'x-stardustlc-updates': '1' }, body: JSON.stringify(body) });
      let data; try { data = await response.json(); } catch { throw new Error('service-unavailable'); }
      if (!response.ok || !data.ok) throw new Error(response.status === 403 ? 'owner-required' : data.code || 'service-unavailable');
      return data.value;
    } catch (error) { if (error?.name === 'AbortError') throw new Error('service-unavailable'); throw error; }
    finally { clearTimeout(timeout); requests.delete(controller); }
  }
  function pageState(manual = manualOperation) {
    const values = [...pool.values.values()], nativeForm = __stardustUpdatesNativeFormState(document);
    const dialog = [...document.querySelectorAll('[role="dialog"],dialog[open]')].some(node => node.getClientRects().length && !(manual && (node.closest('.plugin-updates-footer') || node.querySelector('.plugin-updates-footer'))));
    return { action: 'heartbeat', id, dirty: nativeForm.dirty || values.some(value => value.dirty), busy: nativeForm.busy || values.some(value => value.busy) || dialog, idleForMs: Math.min(86400000, Math.max(0, Date.now() - lastInteraction)) };
  }
  const heartbeat = () => api(pageState());
  function interaction() { lastInteraction = Date.now(); if (registered && alive) void heartbeat().catch(() => {}); }
  const guardChanged = () => { if (registered && alive) void heartbeat().catch(() => {}); };
  for (const event of ['pointerdown', 'keydown', 'input']) document.addEventListener(event, interaction, { capture: true, passive: true });
  pool.listeners.add(guardChanged);
  const close = () => { void fetch(route, { method: 'POST', credentials: 'same-origin', keepalive: true, headers: { 'content-type': 'application/json', 'x-stardustlc-updates': '1' }, body: JSON.stringify({ action: 'client-close', id }) }).catch(() => {}); };
  window.addEventListener('pagehide', close);
  async function refresh() { const next = await api(); if (alive) { state = __stardustUpdatesDisplayRows(__stardustUpdatesSuiteRows(next, shared.refs.values()), knownRows); notify(); } return next; }
  function useSnapshot() {
    const [, render] = useState(0);
    useEffect(() => { const fn = () => render(value => value + 1); listeners.add(fn); const stop = ctx.locale?.subscribe?.(fn); return () => { listeners.delete(fn); stop?.(); }; }, []);
    return state;
  }
  function message(code) {
    return ({
      'page-dirty': t('有未保存的修改。请先保存或放弃修改，再更新。', 'Save or discard unsaved changes before updating.'),
      'page-busy': t('有页面操作或对话框尚未结束，请完成后再试。', 'Finish the active page operation or close its dialog, then retry.'),
      'page-not-ready': t('还有窗口状态未确认，或旧版插件尚未提供状态保护。请刷新相关窗口，必要时先手动更新旧版插件。', 'A window state is unknown or an older plugin lacks state protection. Refresh the affected windows and manually update legacy plugins if needed.'),
      busy: t('DSH 正在执行任务或安装，请等操作结束。', 'DSH is running a task or installation. Wait for it to finish.'),
      'activity-unknown': t('无法确认任务是否空闲，已暂停安装。', 'Installation paused because task activity is unknown.'),
      'restart-required': t('更新服务需要重启后继续。请在方便时手动重启 DSH。', 'The updater needs a restart. Restart DSH manually when convenient.'),
      'operation-unconfirmed': t('上次安装未确认或恢复失败。请在官方插件管理中检查并修复，之后手动重启 DSH。', 'The last installation is unconfirmed or recovery failed. Check and repair it in native plugin management, then restart DSH manually.'),
      'check-first': t('检查结果已过期，请重新检查。', 'This check expired. Check again.'),
      'release-changed': t('发布信息已变化，本次未安装。请重新检查。', 'Release metadata changed. Nothing was installed; check again.'),
      'preferences-conflict': t('另一个窗口修改了偏好，已刷新，请重试。', 'Preferences changed in another window. They have been refreshed; retry.'),
      'preferences-unreadable': t('更新偏好文件无法读取，自动安装已关闭。请检查当前 profile 的 stardustlc-plugin-updates.json。', 'Preferences could not be read. Automatic installation is off. Check stardustlc-plugin-updates.json in this profile.'),
      'no-update': t('版本已变化或暂不兼容，请重新检查。', 'The version changed or is incompatible. Check again.'),
      'source-not-registry': t('本地源码、Git 等安装，请通过原安装方式更新。', 'Update local, Git and other external sources through their original installation method.'),
      'managed-by-suite': t('先将 Suite 组件迁移为独立安装。', 'Convert Suite components to independent installations first.'),
      'suite-hmr-required': t('切换安装方式需要宿主启用热重载。', 'Converting Suite requires Host hot reload.'),
      'suite-inventory-changed': t('套件与独立插件的安装状态或 Loader 条目不一致，请在原生插件详情检查。', 'Suite and standalone bundle inventory or Loader entries differ. Review native plugin details.'),
      'suite-stage-failed': t('切换安装方式时宿主报告失败，请在插件管理中查看详情。', 'The Host reported a conversion failure. See native plugin management for details.'),
      'suite-recovery-required': t('Suite 的上次切换等待恢复。', 'The previous Suite conversion needs recovery.'),
      'suite-recovery-unreadable': t('Suite 恢复记录无法读取，请在原生插件管理中检查已安装组件。', 'The Suite recovery record is unreadable. Check the installed bundles in native plugin management.'),
      'owner-required': t('只有 profile 拥有者能管理更新。', 'Only the profile owner can manage updates.'),
      'version-mismatch': t('宿主装入的版本与目标不同。请重新检查版本和软件源策略。', 'The installed version differs from the target. Check the release and registry policy.'),
      'unexpected-package': t('宿主装入的包或版本与目标不同。请检查版本和软件源策略。', 'The installed package or version differed from the target. Check the release and registry policy.'),
      'version-unconfirmed': t('尚未确认新版已加载，请在插件详情中检查当前版本。', 'The new version could not be confirmed. Check the installed version in plugin details.'),
      'build-blocked': t('构建脚本等待批准。请查看原生插件管理中的安装提示。', 'Build scripts await approval. Review the install details in native plugin management.'),
    })[code] || t('操作未完成，请刷新后重试。DSH 不会因此自动重启。', 'The operation could not be completed. Refresh and retry. DSH will not restart automatically.');
  }
  // releaseOf() keeps the failing engine/peer range check as a stable code; say which
  // environment has to change instead of only reporting that the release is incompatible.
  function requirement(release) {
    return ({
      'dsh-version': t('需要换成与该版本匹配的 DSH 本体', 'it needs a different DSH version'),
      'node-version': t('需要换成与该版本匹配的 Node.js', 'it needs a different Node.js version'),
      deprecated: t('作者已把这个版本标记为弃用', 'the author marked this release as deprecated'),
      'not-bundle': t('这个版本不是可加载的 DSH 插件包', 'this release is not a loadable DSH plugin bundle'),
    })[release?.reason] || t('发布元数据的兼容范围与当前环境不符', 'its published compatibility range does not match this environment');
  }
  function jobLabel(job) {
    if (job.mode === 'migration') {
      return ({
        complete: t('Suite 已切换为独立安装', 'Suite components are now installed independently'),
        'restart-required': t('切换配置已保存，等待重启', 'Conversion saved. Restart Harness to finish'),
        restored: t('切换失败，已恢复 Suite', 'Conversion failed; Suite restored'),
        'restore-failed': t('恢复 Suite 失败', 'Suite recovery failed'),
        cancelled: t('已取消切换', 'Conversion cancelled'),
        failed: t('切换失败', 'Conversion failed'),
      })[job.state] || ({
        checking: t('正在核对 Suite 组件', 'Checking Suite components'),
        installing: t('正在准备独立插件', 'Preparing independent bundles'),
        applying: t('正在切换加载方式', 'Switching bundle activation'),
        restoring: t('正在恢复 Suite', 'Restoring Suite'),
      })[job.phase];
    }
    if (job.state === 'installing') {
      const phase = ({
        checking: t('宿主正在检查版本', 'Host checking release'),
        removing: t('正在卸载旧版', 'Unloading the previous version'),
        applying: t('正在加载新版', 'Loading the new version'),
        restoring: t('正在恢复旧版', 'Restoring the previous version'),
      })[job.phase];
      if (phase) return phase;
    }
    return ({ verifying: t('正在核对版本', 'Verifying release'), installing: t('正在安装', 'Installing'), cancelling: t('正在请求取消', 'Requesting cancellation'), complete: t('已更新', 'Updated'), 'restart-required': t('已安装，等待你手动重启', 'Installed; manual restart needed'), restored: t('更新未成功，已恢复原版本', 'Update failed; previous version restored'), 'restore-failed': t('恢复未成功，请检查官方插件管理', 'Recovery failed; check native plugin management'), unknown: t('结果未确认，请检查官方插件管理', 'Result unconfirmed; check native plugin management'), cancelled: t('已取消', 'Cancelled'), failed: t('更新未成功', 'Update failed') })[job.state] || job.state;
  }
  function FooterFrame({ name, label, subtitle, actions, children }) {
    return h('section', { className: 'dshw plugin-updates-footer', 'data-plugin-update-footer': name, 'aria-label': label + t(' · 版本与更新', ' · Version and updates') },
      h('style', null, W.styles),
      h('style', null, '.plugin-updates-footer{box-sizing:border-box;flex-shrink:0;margin-top:28px;padding-top:18px;border-top:1px solid var(--dsw-alias-border-l3,#e5e7eb);min-width:0;max-width:100%;color:var(--dsw-alias-label-primary,#202124)}.plugin-updates-footer .updates-head{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px}.plugin-updates-footer h2{font-size:14px;line-height:22px;margin:0;font-weight:600}.plugin-updates-footer .updates-subtitle,.plugin-updates-footer .updates-version{font:12px/1.6 ui-monospace,monospace;overflow-wrap:anywhere;margin:4px 0}.plugin-updates-footer .updates-options{margin-top:12px}.plugin-updates-footer .updates-options>summary{cursor:pointer;font-size:12px;line-height:22px;color:var(--dsw-alias-label-secondary,#657080)}.plugin-updates-footer .updates-options>summary:focus-visible{outline:2px solid var(--dsw-focus-ring-color,#6b79df);outline-offset:4px}.plugin-updates-footer .updates-settings{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:16px;padding:14px 0 0}.plugin-updates-footer .updates-note{margin:5px 0 0;font-size:12px;line-height:1.6}.plugin-updates-footer>.w-section{margin:10px 0 0;padding:0;border:0}.plugin-updates-footer .w-toolbar{margin-top:10px!important}.plugin-updates-footer .w-switch-label{max-width:100%;gap:12px;align-items:flex-start}.plugin-updates-footer .w-switch-track{flex-shrink:0}.plugin-updates-footer .updates-notes{margin-top:12px;padding:12px;border:1px solid var(--dsw-alias-border-l3,#e5e7eb);border-radius:10px}.plugin-updates-footer .updates-notes pre{white-space:pre-wrap;overflow-wrap:anywhere;max-height:240px;overflow:auto;font:12px/1.7 ui-monospace,monospace}.plugin-updates-footer .w-overlay{z-index:1002}@media(max-width:600px){.plugin-updates-footer .updates-head{gap:8px}.plugin-updates-footer .w-toolbar{gap:6px;flex-wrap:wrap}.plugin-updates-footer .w-button{max-width:100%}}'),
      h('div', { className: 'updates-head' }, h('div', null, h('h2', null, t('版本与更新', 'Version and updates')), h('p', { className: 'updates-subtitle w-muted' }, subtitle)), actions), children);
  }
  function Panel({ name }) {
    const snapshot = useSnapshot(), [error, setError] = useState(''), [working, setWorking] = useState(false), [checking, setChecking] = useState(false), [dialog, setDialog] = useState(null), [selectedVersion, setSelectedVersion] = useState(null), [notes, setNotes] = useState(null), [notesOpen, setNotesOpen] = useState(false), [loadingNotes, setLoadingNotes] = useState(false);
    const row = rowFor(name), target = name, prefs = preferences(name);
    const suiteEntry = !!row?.bundledBy || (name === '@stardustlc/dsh-suite' && row?.enabled);
    const managed = row?.sourceKind === 'registry' && !suiteEntry;
    const latestJob = snapshot?.job;
    const job = latestJob?.name === name || latestJob?.mode === 'migration' && (latestJob.requestedName === name || suiteEntry && activeJob()) ? latestJob : null;
    useEffect(() => {
      if (managed && prefs.checkEnabled) void api({ action: 'check-when-due', name }).then(refresh).catch(() => {});
    }, [name, managed, prefs.checkEnabled]);
    async function perform(callback) { setError(''); setWorking(true); try { await callback(); await refresh(); } catch (error) { setError(error.message); await refresh().catch(() => {}); } finally { setWorking(false); } }
    async function save(changes, consent) { await api({ action: 'preferences', name: target, revision: state.preferences.revision, changes, consent }); }
    async function check() { setError(''); setChecking(true); try { await api({ action: 'check', name: target }); await refresh(); } catch (error) { setError(error.message); } finally { setChecking(false); } }
    async function runOperation(request) {
      setDialog(null); manualOperation = true; notify();
      await perform(async () => {
        try {
          await heartbeat();
          const started = await api(request);
          while (alive) {
            await new Promise(resolve => setTimeout(resolve, 800)); await heartbeat(); await refresh();
            if (state.job?.id !== started.id) throw new Error('operation-unconfirmed');
            if (!activeJob()) break;
          }
        } finally { manualOperation = false; notify(); }
      });
    }
    async function showNotes() {
      if (notesOpen) { setNotesOpen(false); return; }
      setNotesOpen(true); setNotes(null); setLoadingNotes(true); setError('');
      try { setNotes(await api({ action: 'notes', name: target, version: row.release.version })); } catch (error) { setError(error.message); } finally { setLoadingNotes(false); }
    }
    if (!snapshot) return h(W.Status, null, t('正在读取更新状态…', 'Loading update status…'));
    const ownPage = pageState(true), unconfirmed = ['unknown', 'restore-failed'].includes(snapshot.job?.state);
    const pageBusy = ownPage.busy || (snapshot.pages.clients || []).some(client => client.id !== id && client.busy);
    const busy = working || activeJob() || snapshot.updaterRestart || snapshot.preferenceError || !snapshot.activity.known
      || snapshot.activity.busy || snapshot.pages.dirty || ownPage.dirty || pageBusy || !snapshot.pages.known;
    const installLocked = busy || unconfirmed || !!snapshot.suiteRecovery;
    const checkingThis = checking || snapshot.checkingNames?.includes(target);
    const canMigrate = snapshot.suiteMigration && !installLocked && !snapshot.pendingRestart;
    const canRecover = snapshot.suiteRecovery?.version && snapshot.suiteMigration && !busy && !snapshot.pendingRestart;
    const showUpdate = managed && row.available;
    const canConfirm = showUpdate && row.release.version === selectedVersion && !installLocked && !row.loadError;
    function progress() {
      if (!job) return null;
      const result = job.outcome?.result;
      const reason = job.reason || (result?.pendingBuilds || result?.failureKind === 'build-blocked' ? 'build-blocked' : result?.error?.code);
      const canCancel = activeJob() && !['applying', 'restoring'].includes(job.phase);
      return h('section', { className: 'w-section', role: 'status', 'aria-label': t('更新进度', 'Update progress') },
        h('h3', null, jobLabel(job)),
        job.to && h('p', { className: 'w-muted' }, job.from + ' → ' + job.to + (job.mode === 'automatic' ? t(' · 自动补丁', ' · Automatic patch') : '')),
        job.total && activeJob() && h('p', { className: 'w-muted' }, job.completed + ' / ' + job.total),
        reason && h(W.Status, { tone: 'error' }, message(reason)),
        canCancel && h(W.Button, { disabled: job.state === 'cancelling', onClick: () => perform(() => api({ action: 'cancel', id: job.id })) }, t('取消', 'Cancel')));
    }
    function windowControls() {
      if (!(snapshot.pages.clients || []).some(client => !client.fresh)) return null;
      return h('div', null,
        h(W.Status, null, h('p', null, t('有窗口已断开，无法确认是否还有未保存修改。仍在使用的窗口请先保存并刷新；已关闭的窗口可以手动重新确认。', 'A disconnected window may contain unsaved changes. Save and refresh windows still in use. If they are closed, you can confirm that manually.')), h(W.Button, { onClick: () => setDialog('windows') }, t('重新确认已关闭的窗口', 'Confirm closed windows'))),
        dialog === 'windows' && h(W.Dialog, { title: t('断开的窗口都已关闭？', 'Are the disconnected windows closed?'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
          h('div', { className: 'w-stack' }, h('p', null, t('只清除超过 45 秒未回应的其他窗口记录。请先确认它们已经关闭；仍在使用的窗口请保存修改并刷新。当前或仍在回应的窗口保护会保留。', 'Only other windows silent for over 45 seconds are cleared. Confirm that they are closed; save and refresh windows still in use. Current and responsive windows remain protected.')), h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')), h(W.Button, { onClick: () => { setDialog(null); void perform(() => api({ ...pageState(true), action: 'reconfirm-windows', confirmation: 'other-stale-windows-are-closed' })); } }, t('已关闭，重新确认状态', 'They are closed; reconfirm'))))));
    }
    function recoveryControls() {
      if (!snapshot.suiteRecovery) return null;
      if (snapshot.suiteRecovery.restartRequired) return h(W.Status, null, t('请重启 Harness。下次启动时会核对独立插件是否已加载。', 'Restart Harness. It will verify that the individual plugins loaded at startup.'));
      return h('div', null,
        h(W.Status, null, snapshot.suiteRecovery.awaitingVerification
          ? t('正在核对独立插件的加载状态。若仍有插件无法加载，可以恢复 Suite。', 'Checking the individual plugins. Recover Suite if any still fail to load.')
          : message(snapshot.suiteRecovery.error || 'suite-recovery-required')),
        snapshot.suiteRecovery.version && h(W.Button, { disabled: !canRecover, onClick: () => setDialog('recovery') }, t('恢复 Suite', 'Recover Suite')),
        dialog === 'recovery' && h(W.Dialog, { title: t('恢复上次 Suite 切换？', 'Recover the previous Suite conversion?'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
          h('div', { className: 'w-stack' },
            h('p', null, t('Harness 会核对当前组件状态，并按需恢复切换前的安装方式。', 'Harness checks the current component state and recovers the previous installation if needed.')),
            h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')),
              h(W.Button, { variant: 'primary', disabled: !canRecover, onClick: () => runOperation({ action: 'recover-suite', name, confirmation: 'restore-previous-suite' }) }, t('确认恢复', 'Recover'))))));
    }
    if (!row) return recoveryControls() || progress() || h(W.Status, null, t('此插件尚未安装或已从当前 profile 移除。', 'This plugin is not installed in the current profile.'));
    const title = language() === 'en' ? row.labelEn : row.label;
    if (suiteEntry) return h(FooterFrame, { name, label: title, subtitle: name + ' · ' + row.version, actions: h(W.Button, { variant: 'primary', disabled: !canMigrate, onClick: () => setDialog('migration') }, t('切换为独立安装', 'Use independent installations')) },
      h(W.Status, null, snapshot.suiteMigration ? t('组件随 Suite 安装。切换后即可单独更新。', 'These components are installed by Suite. Convert them for per-plugin updates.') : message('suite-hmr-required')),
      (snapshot.pages.dirty || ownPage.dirty) && h(W.Status, null, message('page-dirty')),
      (snapshot.activity.busy || pageBusy) && h(W.Status, null, message(snapshot.activity.busy ? 'busy' : 'page-busy')),
      snapshot.pendingRestart && h(W.Status, null, message('restart-required')),
      error && h(W.Status, { tone: 'error' }, message(error)),
      unconfirmed && h(W.Status, { tone: 'error' }, message('operation-unconfirmed')),
      windowControls(),
      recoveryControls(),
      progress(),
      dialog === 'migration' && h(W.Dialog, { title: t('将 Suite 组件切换为独立安装？', 'Convert Suite components to independent installations?'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
        h('div', { className: 'w-stack' }, h('p', null, t('Harness 会卸载旧 Suite 包，以当前版本登记各组件并恢复配置。切换期间组件会暂时卸载。', 'Harness removes the old Suite bundle and registers the components independently at the same versions with their existing settings. The components unload during the conversion.')),
          h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')), h(W.Button, { variant: 'primary', disabled: !canMigrate, onClick: () => runOperation({ action: 'migrate-suite', name, confirmation: 'convert-suite-to-independent-bundles' }) }, t('确认切换', 'Convert installations'))))));
    const status = row.sourceKind !== 'registry' ? t('请通过原安装方式更新', 'Update through the original installation method') : row.loadError ? t('加载异常，请先检查原生插件管理', 'Loading error. Check native plugin management') : row.error ? t('检查失败，可以重试', 'Check failed. Try again') : row.release && !row.release.compatible ? 'v' + row.release.version + ' · ' + requirement(row.release) + (row.release.required ? ' (' + row.release.required + ')' : '') : row.available ? (prefs.ignoredVersion === row.release.version ? t('已忽略提醒，仍可手动更新', 'Reminder ignored. Manual update available') : t('有兼容的新版本', 'Compatible update available')) : row.checkedAt ? t('当前已是最新稳定版', 'Latest stable version') : t('尚未检查', 'Not checked yet');
    const checkButton = variant => h(W.Button, { variant, icon: 'refresh', disabled: checkingThis || !managed, onClick: check }, checkingThis ? t('正在检查…', 'Checking…') : t('检查更新', 'Check for updates'));
    const primary = showUpdate
      ? h(W.Button, { variant: 'primary', icon: 'download', disabled: installLocked || row.loadError, onClick: () => { setSelectedVersion(row.release.version); setDialog('install'); } }, t('更新至 v', 'Update to v') + row.release.version)
      : managed ? checkButton() : null;
    return h(FooterFrame, { name, label: title, subtitle: name + ' · ' + row.version, actions: primary },
      h('section', { className: 'w-section' },
        h('p', { className: 'w-muted updates-note' }, status),
        showUpdate && row.blockedRelease && h('p', { className: 'w-muted updates-note' }, 'v' + row.blockedRelease.version + ' · ' + requirement(row.blockedRelease) + (row.blockedRelease.required ? ' (' + row.blockedRelease.required + ')' : '')),
        !row.enabled && h('p', { className: 'w-muted' }, t('当前已停用。', 'Currently disabled.')),
        row.checkedAt && h('p', { className: 'w-muted updates-note' }, t('上次检查 ', 'Last checked ') + new Date(row.checkedAt).toLocaleString(language() === 'en' ? 'en-US' : 'zh-CN')),
        h('div', { className: 'w-toolbar' },
          showUpdate && checkButton('ghost'),
          row.release && h(W.Button, { variant: 'ghost', onClick: showNotes, 'aria-expanded': notesOpen }, t('更新记录', 'Release notes')),
          showUpdate && h(W.Button, { variant: 'ghost', disabled: working, onClick: () => perform(() => api({ action: 'later', name: target, revision: state.preferences.revision })) }, t('明天再提醒', 'Remind me tomorrow')),
          showUpdate && prefs.ignoredVersion !== row.release.version && h(W.Button, { variant: 'ghost', disabled: working, onClick: () => perform(() => api({ action: 'ignore', name: target, revision: state.preferences.revision, version: row.release.version })) }, t('忽略此版本提醒', 'Ignore this reminder')))),
      notesOpen && h('section', { className: 'updates-notes', 'aria-label': t('更新记录', 'Release notes') }, h('strong', null, target + ' · ' + (notes?.version || row.release?.version || '')), loadingNotes ? h('p', null, t('正在读取…', 'Loading…')) : notes?.text ? h('pre', null, notes.text) : h('p', null, t('未找到此版本的独立更新记录。', 'No separate notes were found for this version.')), notes?.url && h('a', { href: notes.url, target: '_blank', rel: 'noreferrer noopener' }, t('查看仓库更新记录', 'View repository changelog'))),
      h('details', { className: 'updates-options' }, h('summary', null, t('更新选项', 'Update options'), ' · ', prefs.checkEnabled ? t('自动检查：开', 'Checks: on') : t('自动检查：关', 'Checks: off'), ' · ', prefs.autoInstall ? t('自动安装：开', 'Install: on') : t('自动安装：关', 'Install: off')), h('section', { className: 'updates-settings', 'aria-label': t('这个插件的更新偏好', 'Update preferences for this plugin') },
        h('div', null, h(W.Switch, { label: t('自动检查这个插件的更新', 'Automatically check this plugin'), checked: prefs.checkEnabled, disabled: working || !!snapshot.preferenceError || row.sourceKind !== 'registry', onChange: event => perform(() => save({ checkEnabled: event.target.checked })) }), h('p', { className: 'w-muted updates-note' }, t('默认开启，后台每 15 分钟检查。', 'On by default. Checks run every 15 minutes.'))),
        h('div', null, h(W.Switch, { label: t('空闲时自动安装这个插件的补丁', 'Install patches for this plugin while idle'), checked: prefs.autoInstall, disabled: working || !!snapshot.preferenceError || row.sourceKind !== 'registry', onChange: event => event.target.checked ? setDialog('automatic') : perform(() => save({ autoInstall: false })) }), h('p', { className: 'w-muted updates-note' }, t('默认关闭。明确开启后，仅空闲且没有未保存修改时安装兼容补丁。其他插件的开关不变。', 'Off by default. Explicitly enable compatible patches while idle with no unsaved changes. Other plugins’ settings stay unchanged.'))))),
      error && h(W.Status, { tone: 'error' }, message(error)), snapshot.preferenceError && h(W.Status, { tone: 'error' }, message('preferences-unreadable')),
      snapshot.pendingRestart && h(W.Status, null, snapshot.updaterRestart ? message('restart-required') : t('已有更新等待手动重启后生效。你可以继续工作，自动安装已暂停。', 'Some updates need a manual restart. Continue your work; automatic installation is paused.')),
      prefs.autoInstall && snapshot.autoReady === false && h(W.Status, null, message('page-not-ready')),
      windowControls(),
      (snapshot.pages.dirty || ownPage.dirty) && h(W.Status, null, message('page-dirty')), (snapshot.activity.busy || pageBusy) && h(W.Status, null, message(snapshot.activity.busy ? 'busy' : 'page-busy')),
      prefs.deferredUntil > Date.now() && h(W.Status, null, t('此插件已推迟提醒和自动安装 24 小时，仍可手动更新。', 'Reminders and automatic installation for this plugin are deferred for 24 hours. Manual updates remain available.')),
      unconfirmed && h(W.Status, { tone: 'error' }, message('operation-unconfirmed')),
      recoveryControls(),
      progress(),
      ['automatic', 'install'].includes(dialog) && h(W.Dialog, { title: dialog === 'automatic' ? t('允许这个插件自动安装补丁？', 'Allow automatic patches for this plugin?') : t('确认更新此插件', 'Confirm this plugin update'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
        dialog === 'automatic' ? h('div', { className: 'w-stack' }, h('p', null, (language() === 'en' ? row.labelEn : row.label) + ' · ' + target), h('p', null, t('你正在主动启用这个插件的自动安装。只处理兼容的稳定补丁；有任务、未保存修改、未知窗口或等待重启时暂停。', 'You are explicitly enabling automatic installation for this plugin. Only compatible stable patches qualify; running tasks, unsaved changes, unknown windows or a pending restart pause it.')), h('p', null, t('不会自动重启 DSH，其他插件不会跟着开启。可随时关闭。', 'DSH will not restart automatically, and other plugins will not be enabled for automatic updates. Turn it off anytime.')), h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('保持关闭', 'Keep off')), h(W.Button, { variant: 'primary', onClick: () => { setDialog(null); void perform(() => save({ checkEnabled: true, autoInstall: true }, 'enable-idle-patch-updates')); } }, t('允许此插件自动安装补丁', 'Allow patches for this plugin')))) :
        h('div', { className: 'w-stack' }, h('p', { className: 'updates-version' }, target + ' · ' + row.version + ' → ' + selectedVersion),
          h('p', null, selectedVersion === row.release?.version ? t('Harness 会重新加载此插件。需要重启时，更新区会显示宿主结果。', 'Harness reloads this plugin. If a restart is needed, it appears in the update result.') : message('check-first')),
          h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')),
            h(W.Button, { variant: 'primary', disabled: !canConfirm, onClick: () => runOperation({ action: 'install', name, version: selectedVersion, confirmation: 'update-installed-plugin' }) }, t('安装此版本', 'Install this version')))))
    );
  }
  function NativeFooter({ subject }) {
    const snapshot = useSnapshot(), name = __stardustUpdatesDetailName(subject, snapshot?.rows || []);
    return name ? h(Panel, { name }) : null;
  }
  function Reminder() {
    useSnapshot();
    const row = state?.rows.find(row => { const prefs = preferences(row.name); return row.available && !row.updating && !row.bundledBy && prefs.checkEnabled && prefs.deferredUntil <= Date.now() && prefs.ignoredVersion !== row.release.version && !notified.has(row.name + '@' + row.release.version); });
    if (!row && !legacyHint) return null;
    let Toast; try { Toast = require('@deepseek-ai/dsh-client-ui-primitives').Toast; } catch { return null; }
    if (!Toast) return null;
    const hint = legacyHint, key = hint ? 'legacy-' + hint : row.name + '@' + row.release.version;
    return h(Toast, { key, text: hint ? hint + t('：请打开「插件」中的此插件详情页，在底部管理更新。', ': open its details in Plugins to manage updates at the bottom.') : (language() === 'en' ? row.labelEn : row.label) + t('有新版本，可在页面底部查看。', ' has an update. Review it at the bottom of its page.'), icon: h(W.Icon, { name: 'refresh', size: 18 }), holdMs: 7000, onDone: () => { if (hint) legacyHint = null; else notified.add(key); notify(); } });
  }
  function register() {
    if (!alive) return;
    if (!registered) {
      registered = true; pool.clients.add(client);
      ctx.slots.inject('plugins.detail.section', () => ctx.slots.register({ name: 'plugins.detail.section', id: 'stardustlc.plugin-update-footer', order: 1000 }, NativeFooter));
      ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'stardustlc.plugin-update-reminder' }, Reminder));
      notify();
    }
  }
  async function poll() {
    if (inPoll || !alive || !shared.refs.size) return;
    inPoll = true;
    try { await refresh(); register(); await heartbeat(); }
    catch { /* Owner-only controls stay absent for guests and unsupported hosts. */ }
    finally { inPoll = false; }
  }
  const timer = setInterval(() => { void poll(); }, 15000), first = setTimeout(() => { void poll(); }, 100);
  const client = { t, Footer: Panel, Button: W.Button, open(name) { const footer = [...document.querySelectorAll('[data-plugin-update-footer]')].find(node => node.getAttribute('data-plugin-update-footer') === name); if (footer) footer.scrollIntoView({ block: 'end', behavior: 'smooth' }); else { legacyHint = name; notify(); } }, has: name => registered && !!rowFor(name), row: rowFor, dispose() {
    close(); alive = false; clearTimeout(first); clearInterval(timer); pool.clients.delete(client);
    pool.listeners.delete(guardChanged); listeners.clear();
    for (const event of ['pointerdown', 'keydown', 'input']) document.removeEventListener(event, interaction, true);
    window.removeEventListener('pagehide', close);
    for (const controller of requests) controller.abort();
    for (const listener of pool.viewListeners) listener();
  } };
  return client;
}

/* STARDUSTLC_UPDATE_CLIENT_BODY_START */
// Generated from templates/client.js, templates/panels/ and templates/workbench-ui.js. Edit the sources.
(function () {
/* DSH workbench UI v1. MIT. Canonical source: dsh-suite/ui/workbench-ui.js.
 * Vendored into each plugin: no Suite or extra runtime dependency is required.
 * Styles are scoped to .dshw and never replace the host chrome or theme.
 */
function createWorkbenchUI(React) {
  const h = React.createElement;
  const { useEffect, useId, useRef } = React;
  const cx = (...values) => values.filter(Boolean).join(' ');
  const paths = {
    book: ['M4 4h6a3 3 0 0 1 2 2v15a4 4 0 0 0-4-2H4z', 'M20 4h-6a3 3 0 0 0-2 2v15a4 4 0 0 1 4-2h4z'],
    calendar: ['M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2Z', 'M7 3v4M17 3v4M3 10h18'],
    mail: ['M3 5h18v14H3z', 'm3 6 9 7 9-7'],
    rss: ['M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16', 'M4 19h.01'],
    slides: ['M3 4h18v13H3z', 'M12 17v4M8 21h8'],
    shield: ['m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6z', 'm8 12 3 3 5-6'],
    layers: ['M5 3h16v16H5z', 'M2 7v15h15'],
    play: ['m9 6 9 6-9 6Z'],
    video: ['M3 5h12v14H3z', 'm15 10 6-4v12l-6-4'],
    search: ['M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z', 'm16 16 5 5'],
    plus: ['M12 5v14M5 12h14'],
    refresh: ['M20 7a9 9 0 1 0 1 8', 'M20 2v5h-5'],
    settings: ['m9 3-.7 2.4-2 .9L4 5.8 2.5 8.4l1.7 1.8v2.3L2.5 14 4 17l2.5-.4 1.9 1L9 20h3l.8-2.4 2-1 2.5.4 1.5-2.7-1.7-1.9v-2.2l1.7-1.8-1.5-2.6-2.5.4-2-1L12 3Z', 'M14 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'],
    close: ['m6 6 12 12M18 6 6 18'],
    left: ['m14 5-7 7 7 7'],
    right: ['m10 5 7 7-7 7'],
    down: ['m5 9 7 7 7-7'],
    filter: ['M4 5h16M7 12h10M10 19h4'],
    download: ['M12 3v12m-5-5 5 5 5-5', 'M4 16v5h16v-5'],
    upload: ['M12 16V4m-5 5 5-5 5 5', 'M4 16v5h16v-5'],
    copy: ['M8 8h13v13H8z', 'M16 8V3H3v13h5'],
    external: ['M14 3h7v7m0-7L10 14', 'M10 3H3v18h18v-7'],
    file: ['M4 3h10l6 6v12H4z', 'M14 3v6h6M8 13h8M8 17h6'],
    folder: ['M3 5h7l2 3h9v12H3z'],
    edit: ['m15 4 5 5-10 10-6 1 1-6Z', 'm13 6 5 5'],
    trash: ['M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7'],
    more: ['M5 12h.01M12 12h.01M19 12h.01'],
    info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 11v6M12 7h.01'],
    check: ['m5 12 4 4L19 6'],
    quote: ['M4 12h6v7H3v-7c0-4 2-6 5-7M15 12h6v7h-7v-7c0-4 2-6 5-7'],
    star: ['m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z'],
    reply: ['m9 5-7 7 7 7v-5h6c3 0 5 2 6 5 0-8-4-11-12-11Z'],
    link: ['m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0', 'm14 8 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0'],
  };
  function Icon({ name = 'file', size = 20, ...props }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false, ...props },
      (paths[name] || paths.file).map((d, index) => h('path', { key: index, d })));
  }
  function Button({ children, icon, variant, className, ...props }) {
    return h('button', { type: 'button', ...props, className: cx('w-button', variant && 'w-' + variant, className) }, icon ? h(Icon, { name: icon, size: 18 }) : null, children);
  }
  function IconButton({ label, icon, ...props }) {
    return h(Button, { ...props, icon, className: cx('w-icon-button', props.className), 'aria-label': label, title: label });
  }
  function Page({ title, subtitle, actions, children, workbench = false, className, rootRef, ...props }) {
    return h('section', { ...props, ref: rootRef, className: cx('dshw', 'w-page', className), 'data-main': workbench ? 'true' : 'false' },
      h(Styles, { key: 'styles' }),
      h('header', { className: 'w-page-header' }, h('div', { className: 'w-heading' }, h('h1', null, title), subtitle ? h('p', { className: 'w-subtitle' }, subtitle) : null), actions ? h('div', { className: 'w-header-actions' }, actions) : null),
      h('div', { className: 'w-body' }, children));
  }
  function Tabs({ items, value, onChange, label, children }) {
    const id = useId();
    const active = items.some(item => item.id === value) ? value : items[0]?.id;
    function keys(event, index) {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
      const node = event.currentTarget.parentElement?.querySelectorAll('[role=tab]')[next];
      if (node) { onChange(items[next].id); node.focus(); }
    }
    return h('div', { className: 'w-tabs-layout' },
      h('div', { className: 'w-tabs', role: 'tablist', 'aria-label': label }, items.map((item, index) => h('button', {
        type: 'button', role: 'tab', key: item.id, id: id + '-' + item.id, 'aria-controls': id + '-panel', 'aria-selected': active === item.id, tabIndex: active === item.id ? 0 : -1,
        onClick: () => onChange(item.id), onKeyDown: event => keys(event, index),
      }, item.label, item.count !== undefined ? h('span', { className: 'w-count' }, item.count) : null))),
      h('div', { className: 'w-tab-panel', id: id + '-panel', role: 'tabpanel', 'aria-labelledby': id + '-' + active }, children));
  }
  function Status({ children, tone = 'info', className }) {
    if (!children) return null;
    return h('div', { className: cx('dshw', 'w-status', 'w-status-' + tone, className), role: tone === 'error' ? 'alert' : 'status', 'aria-live': tone === 'error' ? 'assertive' : 'polite' }, h(Icon, { name: tone === 'success' ? 'check' : 'info', size: 18 }), h('div', null, children));
  }
  function Empty({ title, children, action, icon = 'file' }) {
    return h('div', { className: 'dshw w-empty' }, h(Styles, { key: 'styles' }), h(Icon, { name: icon, size: 32 }), h('h2', null, title), children ? h('div', { className: 'w-muted' }, children) : null, action ? h('div', { className: 'w-toolbar' }, action) : null);
  }
  function Split({ list, detail, selected, onBack, backLabel, className, listWidth = 360 }) {
    const ref = useRef(null);
    useEffect(() => {
      if (!selected || !ref.current || ref.current.clientWidth > 760) return;
      const heading = ref.current.querySelector('.w-detail h2');
      if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    }, [selected]);
    return h('div', { ref, className: cx('w-split', className), 'data-selected': selected ? 'true' : 'false', style: { '--w-list-width': listWidth + 'px' } },
      h('div', { className: 'w-master' }, list),
      h('div', { className: 'w-detail' }, selected ? h(Button, { className: 'w-back', icon: 'left', variant: 'ghost', onClick: onBack }, backLabel) : null, detail));
  }
  function Row({ title, meta, description, active, onClick, children, status, className, disabled }) {
    return h('div', { className: cx('w-row', active && 'w-selected', className) },
      children ? h('div', { className: 'w-row-select' }, children) : null,
      h('button', { type: 'button', className: 'w-row-button', onClick, disabled, 'aria-pressed': !!active },
        h('span', { className: 'w-row-head' }, h('strong', null, title), status ? h('span', { className: 'w-tag' }, status) : null),
        meta ? h('span', { className: 'w-row-meta' }, meta) : null,
        description ? h('span', { className: 'w-row-description' }, description) : null));
  }
  function Search({ label, value, onChange, ...props }) {
    const id = useId();
    return h('div', { className: 'w-search' }, h(Icon, { name: 'search', size: 18 }), h('input', { type: 'search', id, 'aria-label': label, placeholder: label, value, onChange, ...props }));
  }
  function Switch({ label, checked, onChange, disabled }) {
    return h('label', { className: 'w-switch-label' }, h('span', null, label), h('input', { type: 'checkbox', role: 'switch', checked, disabled, onChange, 'aria-label': label }), h('span', { className: 'w-switch-track', 'aria-hidden': true }));
  }
  function Dialog({ title, children, onClose, closeLabel, className, busy = false }) {
    const id = useId(), panel = useRef(null);
    useEffect(() => {
      const previous = document.activeElement;
      panel.current?.querySelector('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')?.focus();
      return () => { if (previous?.isConnected) previous.focus({ preventScroll: true }); };
    }, []);
    function keydown(event) {
      if (event.key === 'Escape' && !event.isComposing) { event.preventDefault(); event.stopPropagation(); if (!busy) onClose(); return; }
      if (event.key !== 'Tab') return;
      const controls = [...panel.current.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]')].filter(node => node.getClientRects().length);
      const first = controls[0], last = controls.at(-1);
      if (!controls.length) { event.preventDefault(); panel.current.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    return h('div', { className: 'dshw w-overlay', onClick: event => { if (!busy && event.target === event.currentTarget) onClose(); } },
      h(Styles, { key: 'styles' }),
      h('section', { ref: panel, className: cx('w-dialog', className), role: 'dialog', 'aria-modal': true, 'aria-labelledby': id, tabIndex: -1, onKeyDown: keydown },
        h('header', { className: 'w-dialog-header' }, h('h2', { id }, title), h(IconButton, { icon: 'close', label: closeLabel, disabled: busy, onClick: onClose })), h('div', { className: 'w-dialog-body' }, children)));
  }
  function register(ctx, { id, label, icon, component, inject, order = 50 }) {
    // The two slots are optional. Existing settings and manual tools still load
    // in hosts without a workbench, while RC.3 owns navigation/pinning itself.
    ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: id, inject: () => ({ ...(inject?.() || {}), workbench: true }) }, component));
    ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id, order, label }, function WorkbenchIcon({ size }) { return h(Icon, { name: icon, size }); }));
  }
  const styles = `
.dshw{--w-bg:var(--dsw-alias-bg-layer-1,#fff);--w-soft:var(--dsw-alias-bg-layer-2,#f7f8fa);--w-text:var(--dsw-alias-label-primary,#18202c);--w-muted:var(--dsw-alias-label-secondary,#667085);--w-border:var(--dsw-alias-border-l3,#e7e9ef);--w-accent:var(--dsh-plugin-workbench-accent,#4f6bdb);--w-selected:color-mix(in srgb,var(--w-accent) 10%,var(--w-bg));--w-primary:var(--w-text);--w-on-primary:var(--w-bg);container-type:inline-size;container-name:dsh-workbench;color:var(--w-text);font:14px/1.65 var(--dsh-font-family-content,system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif);min-width:0;max-width:100%;box-sizing:border-box;text-align:start;color-scheme:inherit}
.dshw *,.dshw *:before,.dshw *:after{box-sizing:border-box}.dshw h1,.dshw h2,.dshw h3,.dshw h4,.dshw p{margin:0}.dshw h1{font-size:30px;line-height:1.25;letter-spacing:-.025em;font-weight:650}.dshw h2{font-size:24px;line-height:1.35;font-weight:650;letter-spacing:-.015em;overflow-wrap:anywhere}.dshw h3,.dshw h4{font-size:16px;line-height:1.4;font-weight:600}.dshw a{color:var(--w-accent);text-underline-offset:3px;overflow-wrap:anywhere}.dshw button,.dshw input,.dshw select,.dshw textarea{font:inherit;color:inherit;max-width:100%}.dshw input:not([type=checkbox]):not([type=radio]):not([type=file]),.dshw select,.dshw textarea{background:var(--dsw-specific-input-major,var(--w-bg));border:1px solid var(--w-border);border-radius:8px;padding:8px 11px;min-width:0;line-height:1.5}.dshw input:not([type=checkbox]):not([type=radio]):not([type=file]),.dshw select{min-height:38px}.dshw textarea{resize:vertical}.dshw input[type=checkbox],.dshw input[type=radio]{width:16px;height:16px;flex-shrink:0;accent-color:var(--w-accent)}.dshw :focus-visible{outline:2px solid var(--w-accent);outline-offset:3px}.dshw button:disabled,.dshw input:disabled,.dshw select:disabled,.dshw textarea:disabled{opacity:.5;cursor:not-allowed}.dshw label{font-size:13px}.dshw fieldset{min-width:0;border:1px solid var(--w-border);border-radius:8px}.dshw summary{cursor:pointer;font-weight:550;list-style:none;display:flex;align-items:center;gap:8px}.dshw summary::-webkit-details-marker{display:none}.dshw summary:after{content:'';display:block;margin-inline-start:auto;width:7px;height:7px;border-inline-end:1.75px solid currentColor;border-bottom:1.75px solid currentColor;transform:rotate(45deg);flex-shrink:0}.dshw details[open]>summary:after{transform:rotate(225deg)}.dshw details>summary+*{margin-top:12px}.dshw pre{white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.7 ui-monospace,SFMono-Regular,Consolas,monospace;max-width:100%;background:var(--w-soft);border-radius:6px;padding:14px}.dshw img,.dshw video,.dshw iframe{max-width:100%}
.w-page{display:flex;flex-direction:column;position:relative;padding:0;min-height:540px;gap:0}.w-page[data-main=true]{height:100%;min-height:0;padding:calc(24px + var(--dsh-frame-top-clearance,0px)) 28px 0 max(28px,var(--dsh-frame-leading-clearance,0px));overflow:auto}.dshw[data-main=true]{background:var(--w-bg)}.dshw.w-page,.dshw .w-body,.dshw .w-tab-panel{overflow-x:clip}.w-page-header{display:flex;justify-content:space-between;gap:24px;align-items:flex-start;padding-bottom:22px;flex-shrink:0}.w-heading{min-width:0}.w-subtitle{margin-top:8px!important;font-size:14px;color:var(--w-muted);line-height:1.6}.w-header-actions,.w-toolbar,.w-actions{display:flex;align-items:center;flex-wrap:wrap;gap:8px;min-width:0}.w-header-actions{justify-content:flex-end}.w-body,.w-tabs-layout{display:flex;flex-direction:column;flex:1;min-height:0;min-width:0}.w-body{overflow:auto}.w-tab-panel{flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:auto}.w-tabs{display:flex;align-items:stretch;gap:20px;border-bottom:1px solid var(--w-border);flex-shrink:0;overflow-x:auto;scrollbar-width:thin}.dshw .w-tabs>button{border:0;border-bottom:2px solid transparent;background:transparent;padding:11px 8px 13px;white-space:nowrap;font-size:14px;font-weight:550;cursor:pointer;color:var(--w-muted);display:flex;align-items:center;gap:7px}.dshw .w-tabs>button[aria-selected=true]{border-bottom-color:var(--w-accent);color:var(--w-accent)}.w-count,.w-tag{font-size:12px;line-height:1.5;display:inline-flex;align-items:center;flex-shrink:0;background:var(--w-soft);border-radius:5px;padding:1px 6px;color:var(--w-muted)}.w-tabs [aria-selected=true] .w-count,.w-selected .w-tag{color:var(--w-accent);background:var(--w-selected)}
.dshw .w-button{display:inline-flex;justify-content:center;align-items:center;gap:7px;background:var(--w-bg);border:1px solid var(--w-border);border-radius:8px;padding:8px 12px;min-height:36px;line-height:1.4;font-size:14px;font-weight:500;cursor:pointer;text-decoration:none;white-space:normal}.dshw .w-button:not(:disabled):hover{background:var(--w-soft)}.dshw .w-primary{background:var(--w-primary);border-color:var(--w-primary);color:var(--w-on-primary)}.dshw .w-primary:not(:disabled):hover{background:var(--w-primary);opacity:.9}.dshw .w-ghost{background:transparent;border-color:transparent}.dshw .w-danger{color:var(--dsw-alias-state-error-primary,#b43c3c)}.dshw .w-icon-button{width:36px;min-width:36px;padding:8px}.dshw .w-button svg{flex-shrink:0}.w-muted{color:var(--w-muted);font-size:12px;line-height:1.6}.w-section{padding:24px 0;border-bottom:1px solid var(--w-border);min-width:0}.w-section>h3{margin-bottom:12px}.w-section>p+p{margin-top:8px}.w-fields{display:grid;gap:16px;min-width:0}.w-field{display:grid;gap:6px;min-width:0}.w-field>input,.w-field>select,.w-field>textarea{width:100%}.w-status{display:flex;align-items:flex-start;gap:8px;padding:11px 13px;margin:12px 0;border:1px solid var(--w-border);border-radius:8px;background:var(--w-soft);font-size:13px;overflow-wrap:anywhere;flex-shrink:0}.w-status>svg{flex-shrink:0;margin-top:2px}.w-status-error{color:var(--dsw-alias-state-error-primary,#ad3636)}.w-status-success{color:var(--dsw-alias-state-success-primary,#24794a)}.w-status-warn{color:var(--dsw-alias-state-warning-primary,#8a5a00)}.w-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px;width:100%;max-width:580px;padding:48px 24px;margin:auto;min-height:280px;overflow-wrap:anywhere}.w-empty>svg{color:var(--w-muted)}.w-empty h2{font-size:20px}.w-empty .w-muted{font-size:14px}.w-empty .w-toolbar{justify-content:center}
.w-split{display:grid;grid-template-columns:minmax(240px,var(--w-list-width)) minmax(0,1fr);min-height:460px;flex:1;min-width:0}.w-master{min-width:0;border-inline-end:1px solid var(--w-border);overflow:auto;padding-bottom:24px}.w-detail{min-width:0;padding:26px 28px;overflow:auto;overflow-wrap:anywhere;display:flex;flex-direction:column}.w-master-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:20px 16px}.w-search{display:flex;align-items:center;gap:8px;border:1px solid var(--w-border);border-radius:8px;padding:0 10px;min-width:0;flex:1;background:var(--w-bg)}.w-search>svg{color:var(--w-muted);flex-shrink:0}.dshw .w-search>input{border:0!important;background:transparent!important;padding:8px 0!important;width:100%;outline-offset:0}.w-row{display:flex;gap:0;min-width:0;position:relative;border-bottom:1px solid var(--w-border);border-inline-start:3px solid transparent}.w-row-select{display:flex;align-items:flex-start;padding:21px 0 0 14px}.dshw .w-row-button{display:flex;flex-direction:column;align-items:stretch;gap:7px;text-align:start;width:100%;padding:18px 18px 18px 16px;border:0;background:transparent;color:inherit;min-width:0;cursor:pointer;line-height:1.5}.dshw .w-row-button:hover{background:var(--w-soft)}.w-row-head{display:flex;align-items:flex-start;gap:10px;justify-content:space-between;min-width:0}.w-row-head>strong{font-size:14px;line-height:1.5;font-weight:600;overflow-wrap:anywhere}.w-row-meta,.w-row-description{color:var(--w-muted);font-size:12px;line-height:1.6;overflow-wrap:anywhere}.w-row-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.w-selected{background:var(--w-selected);border-inline-start-color:var(--w-accent)}.w-back{display:none!important}.w-detail-title{margin-bottom:12px!important}.w-detail-meta{color:var(--w-muted);font-size:13px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.w-detail-footer{padding:24px 0;display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:auto;border-top:1px solid var(--w-border)}.w-detail-footer .w-muted{flex:1;min-width:160px}.w-definition{display:grid;grid-template-columns:minmax(80px,120px) minmax(0,1fr);gap:8px 16px;font-size:14px;margin:20px 0}.w-definition dt{color:var(--w-muted)}.w-definition dd{margin:0;min-width:0;overflow-wrap:anywhere}
.w-switch-label{display:inline-flex;align-items:center;gap:8px;font-size:13px;position:relative;cursor:pointer}.w-switch-label>input{position:absolute;opacity:0;inset-inline-end:0;width:36px!important;height:22px!important;margin:0;cursor:pointer}.w-switch-track{width:36px;height:22px;border-radius:12px;display:block;background:var(--w-border);border:1px solid var(--w-border);pointer-events:none;padding:2px;transition:background .15s}.w-switch-track:before{content:'';display:block;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 2px #0002;transition:transform .15s}.w-switch-label>input:checked+.w-switch-track{background:var(--w-accent);border-color:var(--w-accent)}.w-switch-label>input:checked+.w-switch-track:before{transform:translateX(14px)}.w-switch-label>input:focus-visible+.w-switch-track{outline:2px solid var(--w-accent);outline-offset:3px}.w-switch-label:has(>input:disabled){opacity:.5;cursor:not-allowed}
.w-overlay{position:fixed;inset:0;background:#0005;display:flex;justify-content:flex-end;z-index:1000;padding:12px;overflow:auto}.w-dialog{width:min(620px,100%);max-height:100%;display:flex;flex-direction:column;min-height:0;background:var(--w-bg);color:var(--w-text);border:1px solid var(--w-border);border-radius:12px;box-shadow:0 18px 70px #0003}.w-dialog-header{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 24px;border-bottom:1px solid var(--w-border);flex-shrink:0}.w-dialog-header>h2{font-size:20px}.w-dialog-body{overflow:auto;padding:20px 24px;min-height:0}.w-editor-grid{display:grid;grid-template-columns:210px minmax(0,1fr) 300px;min-height:500px;flex:1}.w-editor-list{padding:20px 12px;border-inline-end:1px solid var(--w-border);min-width:0}.w-editor-canvas{background:var(--w-soft);padding:20px;min-width:0;display:flex;flex-direction:column;gap:14px}.w-editor-inspector{padding:24px;border-inline-start:1px solid var(--w-border);min-width:0;overflow:auto}.w-editor-inspector h3{margin-bottom:18px}.w-preview-empty{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:12px;aspect-ratio:16/9;min-height:180px;background:var(--w-soft);border:1px solid var(--w-border);border-radius:8px;padding:24px;color:var(--w-muted)}.w-content-pad{padding:24px 0}.w-stack{display:flex;flex-direction:column;gap:16px;min-width:0}.w-scroll-x{overflow:auto;max-width:100%}
@container dsh-workbench (max-width:1000px){.w-editor-grid{grid-template-columns:160px minmax(0,1fr)}.w-editor-inspector{grid-column:1/-1;border-inline-start:0;border-top:1px solid var(--w-border)}.w-header-actions{max-width:60%}.w-split{grid-template-columns:minmax(240px,32%) minmax(0,1fr)}}
@container dsh-workbench (max-width:760px){.w-page-header{gap:14px;flex-wrap:wrap;padding-bottom:18px}.w-heading{flex:1;min-width:170px}.dshw h1{font-size:24px}.w-header-actions{max-width:100%;justify-content:flex-start}.w-subtitle{font-size:13px}.w-tabs{gap:12px}.dshw .w-tabs>button{padding:10px 4px 12px}.w-split{display:block;min-height:360px}.w-split[data-selected=false]>.w-detail{display:none}.w-split[data-selected=true]>.w-master{display:none}.w-master{border-inline-end:0}.w-detail{padding:20px 0}.w-back{display:inline-flex!important;align-self:flex-start;margin:0 0 16px!important}.w-detail h2{font-size:22px}.w-master-toolbar{padding:16px 0}.dshw .w-row-button{padding:16px 10px}.w-detail-footer{position:static}.w-detail-footer .w-muted{flex-basis:100%}.w-editor-grid{display:flex;flex-direction:column}.w-editor-list{border-inline-end:0;border-bottom:1px solid var(--w-border);padding:16px 0}.w-editor-canvas{padding:16px 0;background:var(--w-bg)}.w-editor-inspector{padding:20px 0}.w-dialog-header,.w-dialog-body{padding:16px}.w-button{min-height:40px}.w-definition{grid-template-columns:80px minmax(0,1fr)}}
@media(max-width:700px){.w-page[data-main=true]{padding:calc(16px + var(--dsh-frame-top-clearance,0px)) 16px 0 max(16px,var(--dsh-frame-leading-clearance,0px))}.w-overlay{padding:8px}.w-dialog{width:100%}}
@media(prefers-reduced-motion:reduce){.dshw *,.dshw *:before{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
`;
  function Styles() { return h('style', null, styles); }
  return { Icon, Button, IconButton, Page, Tabs, Status, Empty, Split, Row, Search, Switch, Dialog, Styles, register, styles };
}

// Editable browser entry. Build with node scripts/build-client.mjs.
// Shared original browser source. build-client substitutes the engine identity.
window.__ModuleLoader__.load(__stardustUpdatesWrap({ id: 'dsh-hyperframes', factory: require => {
        const React = require('react'), { useState, useEffect, useRef } = React, h = React.createElement;
        const W = createWorkbenchUI(React);
// Per-view preferences stay in this plugin instance; user files are never changed.
const projectLibraryPreferences = new Map();
function ProjectLibrary({ items, scope = 'projects', language = 'zh', searchText, updatedAt, renderItem, t, searchHint }) {
  const saved = projectLibraryPreferences.get(scope);
  const [query, setQuery] = React.useState(saved?.query || '');
  const [order, setOrder] = React.useState(saved?.order || 'updated');
  const controlId = React.useId();
  const normalize = text => String(text ?? '').normalize('NFKC').toLocaleLowerCase(language);
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  const collator = new Intl.Collator(language, { numeric: true, sensitivity: 'base' });
  const timestamp = row => { const value = Date.parse(updatedAt(row)); return Number.isFinite(value) ? value : 0; };
  const visible = items.filter(row => words.every(word => normalize(searchText(row)).includes(word))).sort((a, b) => {
    const tie = collator.compare(String(a.title || ''), String(b.title || '')) || String(a.id).localeCompare(String(b.id));
    return order === 'title' ? tie : (order === 'oldest' ? timestamp(a) - timestamp(b) : timestamp(b) - timestamp(a)) || tie;
  });
  function change(nextQuery, nextOrder) {
    projectLibraryPreferences.set(scope, { query: nextQuery, order: nextOrder });
    setQuery(nextQuery); setOrder(nextOrder);
  }
  return h('section', { className: 'project-library', 'aria-label': t('工程查找', 'Find projects') },
    h('style', null, PROJECT_LIBRARY_CSS),
    h('div', { className: 'project-library-controls' },
      h('label', { htmlFor: controlId + '-query' }, t('搜索工程', 'Search projects'),
        h('input', { id: controlId + '-query', type: 'search', value: query, placeholder: searchHint, maxLength: 200,
          onChange: e => change(e.target.value, order), onKeyDown: e => { if (e.key === 'Escape' && query) { e.preventDefault(); e.stopPropagation(); change('', order); } } })),
      h('label', { htmlFor: controlId + '-order' }, t('排序', 'Sort by'),
        h('select', { id: controlId + '-order', value: order, onChange: e => change(query, e.target.value) },
          h('option', { value: 'updated' }, t('最近更新', 'Recently updated')),
          h('option', { value: 'oldest' }, t('最早更新', 'Oldest updated')),
          h('option', { value: 'title' }, t('标题', 'Title')))),
      query ? h(W.Button, { variant: 'ghost', onClick: () => change('', order) }, t('清空搜索', 'Clear search')) : null),
    h('p', { className: 'w-muted project-library-count', role: 'status', 'aria-live': 'polite' },
      t('显示 ', 'Showing ') + visible.length + ' / ' + items.length + t(' 个工程', ' projects')),
    visible.length ? visible.map(renderItem) : h(W.Empty, { title: t('没有匹配的工程', 'No matching projects'), icon: 'folder' },
      t('换个关键词，或清空搜索查看全部工程。', 'Try another keyword or clear the search to show all projects.')));
}
const PROJECT_LIBRARY_CSS = `.project-library{min-width:0}.project-library-controls{display:flex;gap:12px;align-items:end;flex-wrap:wrap;padding:12px 0}.project-library-controls>label{display:grid;gap:6px;margin:0!important;min-width:0;color:var(--w-muted);font-size:13px}.project-library-controls>label:first-child{flex:1 1 240px}.project-library-controls>label:nth-child(2){flex:0 1 180px}.project-library-controls input,.project-library-controls select{width:100%;min-width:0;min-height:38px;font:inherit;color:var(--w-text);background:var(--w-bg);border:1px solid var(--w-border);border-radius:8px;padding:8px 10px}.project-library-count{margin:4px 0 12px;font-size:12px}.project-library-controls :focus-visible{outline:2px solid var(--w-accent);outline-offset:3px}@media(max-width:520px){.project-library-controls>label:first-child{flex-basis:100%}.project-library-controls>label:nth-child(2){flex:1 1 160px}}`;

function MediaCanvas({ project, fields, render, dirty, stale, job, running, ready, busy, start, perform, setNotice, t }) {
  const previewing = job?.kind === 'preview' && job.state === 'running';
  const ratio = fields.format === 'portrait' ? '9 / 16' : fields.format === 'square' ? '1 / 1' : '16 / 9';
  return h('div', { className: 'media-preview-workspace' },
    h('div', { className: 'w-toolbar' }, h(W.Button, { icon: 'play', disabled: !project || running || dirty || !ready, title: !ready ? t('先在“环境”页准备渲染工具。', 'Prepare the renderer in Environment first.') : undefined, onClick: () => start('preview') }, t('启动 Studio 预览', 'Start Studio preview')),
      h(W.Button, { disabled: busy || !previewing, onClick: () => perform(async () => { await api({ action: 'cancel', job: job.id }); setNotice(t('已请求停止；正在关闭本次任务。', 'Stopping this job.')); }) }, t('停止预览', 'Stop preview')),
      previewing && job.url ? h('a', { className: 'w-button', href: job.url, target: '_blank', rel: 'noopener noreferrer' }, t('打开 Studio', 'Open Studio')) : null),
    render ? h('div', { className: 'media-player-wrap' }, h('video', { key: render.id, controls: true, preload: 'metadata', src: urlFor(project, 'mp4', { render: render.id }), 'aria-label': t('已导出视频', 'Exported video') })) :
      h('div', { className: 'w-preview-empty media-empty-preview', style: { aspectRatio: ratio, width: fields.format === 'portrait' ? 'min(100%, 240px)' : fields.format === 'square' ? 'min(100%, 440px)' : 'min(100%, 960px)', maxHeight: 'none', minHeight: '0px', alignSelf: 'center' } }, h(W.Icon, { name: 'video', size: 32 }), h('strong', null, t('导出 MP4 后可在这里播放', 'Play the MP4 here after exporting')), h('p', { className: 'w-muted' }, t('Studio 预览会在单独页面打开。', 'Studio preview opens in a separate page.'))),
    h('p', { className: 'w-muted media-render-caption' }, render ? dirty ? t('此 MP4 反映已保存修订；当前编辑尚未保存。', 'This MP4 reflects a saved revision. Current edits are not saved.') : t('此 MP4 来自修订 ', 'This MP4 uses revision ') + render.revision + (stale ? t('，工程已有更新，请重新导出。', '; your project has newer changes. Export again.') : t('，请播放检查最终画面。', '. Play it to check the final output.')) : t('尚未导出本次修改。', 'No export for these changes yet.')),
    render ? h('a', { className: 'w-button', href: urlFor(project, 'mp4', { render: render.id, download: '1' }), download: '' }, t('下载这份 MP4', 'Download this MP4')) : null);
}

function MediaAssets({ project, dirty, running, fileRef, upload, perform, setProject, t }) {
  const [remove, setRemove] = useState(null);
  if (!project) return h(W.Empty, { title: t('先保存工程，再添加素材', 'Save the project before adding media'), icon: 'video' }, t('填写标题并点击上方“保存工程”。', 'Enter a title and choose Save project above.'));
  const imageIds = project.assets.filter(asset => asset.kind === 'image').map(asset => asset.id);
  const move = (asset, offset) => perform(async () => {
    const order = [...imageIds], index = order.indexOf(asset.id), next = index + offset;
    if (index < 0 || next < 0 || next >= order.length) return;
    [order[index], order[next]] = [order[next], order[index]];
    setProject(await api({ action: 'reorderImages', id: project.id, revision: project.revision, imageIds: order }));
  });
  return h('section', { className: 'media-assets-view' },
    h('div', { className: 'w-toolbar' }, h('h3', null, t('工程素材', 'Project media') + ' · ' + project.assets.length), h(W.Button, { icon: 'upload', disabled: running || dirty, onClick: () => fileRef.current?.click() }, t('上传素材', 'Upload media'))),
    h('p', { className: 'w-muted' }, t('PNG/JPEG 图片、一个背景音频和一个静音背景视频；每个 ≤20 MB，总共 ≤40 MB。轮播按下方图片顺序，每张至少两秒。', 'PNG/JPEG images, one background audio and one muted background video; each ≤20 MB, total ≤40 MB. Slideshow follows the image order below, at least two seconds per image.')),
    imageIds.length > 1 ? h('p', { className: 'w-muted' }, t('上移或下移图片后立即保存。已导出的 MP4 保持原样，请重新导出以应用新顺序。', 'Moving an image saves its order immediately. Existing MP4s are preserved; export again to apply the new order.')) : null,
    dirty ? h(W.Status, null, t('请先保存修改，再上传或移除素材副本。', 'Save changes before uploading or removing media copies.')) : null,
    h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.mp3,.wav,.mp4', disabled: running || dirty, onChange: upload, 'aria-label': t('上传素材副本', 'Upload a media copy'), style: { display: 'none' } }),
    project.assets.length ? h('ul', { className: 'media-asset-list' }, project.assets.map(asset => h('li', { key: asset.id }, asset.kind === 'image' ? h('img', { src: urlFor(project, 'asset', { asset: asset.id }), alt: asset.name }) : h(W.Icon, { name: asset.kind === 'video' ? 'video' : 'file', size: 28 }),
      h('div', null, h('strong', null, asset.name), h('p', { className: 'w-muted' }, (asset.kind === 'image' ? t('图片 ', 'Image ') + (imageIds.indexOf(asset.id) + 1) + ' / ' + imageIds.length : asset.kind === 'audio' ? t('背景音频', 'Background audio') : t('背景视频', 'Background video')) + ' · ' + Math.ceil(asset.bytes / 1024) + ' KB')),
      asset.kind === 'image' && imageIds.length > 1 ? h('div', { className: 'w-toolbar media-asset-order' },
        h(W.Button, { variant: 'ghost', disabled: running || dirty || imageIds.indexOf(asset.id) === 0, 'aria-label': t('上移图片：', 'Move image up: ') + asset.name, onClick: () => move(asset, -1) }, t('上移', 'Move up')),
        h(W.Button, { variant: 'ghost', disabled: running || dirty || imageIds.indexOf(asset.id) === imageIds.length - 1, 'aria-label': t('下移图片：', 'Move image down: ') + asset.name, onClick: () => move(asset, 1) }, t('下移', 'Move down'))) : null,
      h(W.Button, { variant: 'ghost', icon: 'trash', disabled: running || dirty, onClick: () => setRemove(asset) }, t('移除上传副本', 'Remove uploaded copy'))))) : h(W.Empty, { title: t('还没有上传素材', 'No media uploaded yet'), icon: 'video' }, t('标题卡可以直接导出。需要图片或配乐时，再上传自己的素材。', 'Title cards can be exported as they are. Upload your own media when you need images or music.')),
    remove ? h(W.Dialog, { title: t('移除素材副本', 'Remove media copy'), closeLabel: t('取消', 'Cancel'), busy: running, onClose: () => setRemove(null) }, h('p', null, remove.name), h('p', { className: 'w-muted' }, t('仅移除本工程中的上传副本，原文件保留。', 'Only the uploaded project copy is removed. Your original file is preserved.')), h('div', { className: 'w-toolbar' }, h(W.Button, { variant: 'danger', disabled: running || dirty, onClick: () => perform(async () => { setProject(await api({ action: 'removeAsset', id: project.id, revision: project.revision, asset: remove.id })); setRemove(null); }) }, t('确认移除副本', 'Confirm removal')), h(W.Button, { disabled: running, onClick: () => setRemove(null) }, t('取消', 'Cancel')))) : null);
}

function MediaExports({ project, dirty, running, activeJob, busy, setArchiveReview, t }) {
  if (!project) return h(W.Empty, { title: t('工程尚未保存', 'Project not saved yet'), icon: 'video' }, t('保存后才能导出视频和可编辑工程。', 'Save the project to export video and editable source.'));
  return h('section', { className: 'media-exports-view' },
    h('h3', null, t('已导出成品', 'Exported videos')),
    h('p', { className: 'w-muted' }, t('每份 MP4 对应已保存的工程修订。修改内容后，需要重新导出。', 'Each MP4 corresponds to a saved project revision. Export again after editing.')),
    project.renders.length ? h('ul', { className: 'media-export-list' }, project.renders.map(render => h('li', { key: render.id },
      h('div', null, h('strong', null, t('修订 ', 'Revision ') + render.revision), h('p', { className: 'w-muted' }, new Date(render.created).toLocaleString() + ' · ' + Math.ceil(render.bytes / 1024) + ' KB'), render.revision === project.revision && !dirty ? h('span', { className: 'w-tag' }, t('当前已保存版本', 'Current saved version')) : null),
      h('a', { className: 'w-button', href: urlFor(project, 'mp4', { render: render.id, download: '1' }), download: '' }, t('下载 MP4', 'Download MP4'))))) : h(W.Empty, { title: t('尚无 MP4 成品', 'No MP4 yet'), icon: 'video' }, t('先准备环境、保存并预览工程，再点击“导出 MP4”。', 'Prepare the renderer, save and preview the project, then choose Export MP4.')),
    h('section', { className: 'w-section' }, h('h3', null, t('工程备份', 'Editable project backup')), h('a', { className: 'w-button', href: urlFor(project, 'source'), download: '' }, t('下载可编辑工程', 'Download editable project'))),
    h('section', { className: 'w-section' }, h('h3', null, t('归档', 'Archive')), h('p', { className: 'w-muted' }, t('归档保留素材与成品，不占当前 30 个工程名额。', 'Archiving preserves media and exports and frees an active project slot.')), h(W.Button, { disabled: busy || dirty || activeJob, onClick: () => setArchiveReview(true) }, t('归档此工程', 'Archive this project'))));
}

const MEDIA_WORKBENCH_CSS = `
.media-workbench.dmw{--fg:var(--w-text);--fg-muted:var(--w-muted);--border:var(--w-border);--bg:var(--w-bg);--bg-surface:var(--w-bg);padding:0}.media-workbench.dmw[data-main=true]{padding:calc(24px + var(--dsh-frame-top-clearance,0px)) 28px 0 max(28px,var(--dsh-frame-leading-clearance,0px))}.media-workbench .media-editor{display:grid;grid-template-columns:260px minmax(0,1fr) 220px;min-height:500px;flex:1}.media-workbench .media-content-fields{border-inline-end:1px solid var(--w-border);padding:24px 20px 24px 0;min-width:0}.media-workbench .media-properties{border-inline-start:1px solid var(--w-border);padding:24px 0 24px 20px;min-width:0}.media-workbench .media-content-fields h3,.media-workbench .media-properties h3{margin-bottom:20px}.media-workbench .media-field{display:grid;gap:7px;margin:0 0 18px;font-size:13px}.media-workbench .media-field label{margin:0;color:var(--w-muted)}.media-workbench .media-field input,.media-workbench .media-field select,.media-workbench .media-field textarea{width:100%;font-size:14px}.media-workbench .media-field textarea{min-height:160px}.media-workbench .media-preview-workspace{display:flex;flex-direction:column;align-items:stretch;gap:16px;padding:24px;min-width:0}.media-workbench .media-preview-workspace>.w-toolbar{justify-content:flex-start}.media-workbench .media-empty-preview{margin:auto 0;max-height:600px;min-height:180px;width:100%;justify-content:center;background:var(--w-soft);border-radius:8px}.media-workbench .media-player-wrap{display:flex;justify-content:center;align-items:center;min-height:220px;flex:1;min-width:0}.media-workbench .media-player-wrap video{width:100%;height:auto;max-height:calc(100dvh - 360px);object-fit:contain;border-radius:8px;background:#14171c}.media-workbench .media-render-caption{margin-top:0}.media-workbench .media-preview-workspace>.w-button{align-self:flex-start}.media-workbench .media-properties .w-section{padding:20px 0}.media-workbench .media-properties .w-button{width:100%;margin-top:10px}.media-workbench .media-properties p{margin:12px 0}.media-workbench .media-job{border-bottom:1px solid var(--w-border);padding:14px 0;font-size:13px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}.media-workbench .media-job details{width:100%}.media-workbench .media-job pre{font-size:12px;max-height:240px}.media-workbench .media-job progress{width:180px;height:10px;accent-color:var(--w-accent)}.media-workbench .media-job[data-state=failed]>strong{color:var(--dsw-alias-state-error-primary,#ad3636)}.media-workbench .media-job[data-state=done]>strong{color:var(--dsw-alias-state-success-primary,#24794a)}.media-workbench .media-export-checks{list-style:none;padding:0;margin:14px 0;display:grid;gap:6px;font-size:13px;overflow-wrap:anywhere}.media-workbench .media-project-list{max-width:900px;padding:12px 0 24px}.media-workbench .media-project-list .w-row-button{padding:20px 16px;border:0;border-radius:0;background:transparent}.media-workbench .media-assets-view,.media-workbench .media-exports-view,.media-workbench .media-environment{padding:24px 0;width:min(900px,100%)}.media-workbench .media-assets-view>.w-muted,.media-workbench .media-exports-view>.w-muted{margin-top:12px}.media-workbench .media-asset-list,.media-workbench .media-export-list{list-style:none;padding:0;margin:20px 0;display:flex;flex-direction:column}.media-workbench .media-asset-list>li,.media-workbench .media-export-list>li{display:flex;align-items:center;gap:16px;flex-wrap:wrap;min-width:0;padding:18px 0;border-bottom:1px solid var(--w-border)}.media-workbench .media-asset-list>li>div,.media-workbench .media-export-list>li>div{flex:1;min-width:180px;overflow-wrap:anywhere}.media-workbench .media-asset-list img{width:80px;height:60px;object-fit:contain;border-radius:6px;background:var(--w-soft)}.media-workbench .media-export-list p{margin-top:5px}.media-workbench .media-export-list .w-tag{margin-top:8px}.media-workbench .media-environment>p{margin:14px 0}.media-workbench .media-environment>button{margin-top:12px}.media-workbench.dmw button.primary{background:var(--w-primary);border-color:var(--w-primary);color:var(--w-on-primary)}.media-workbench .card{border:0;border-bottom:1px solid var(--w-border);border-radius:0;padding:20px 0;background:transparent;box-shadow:none}.media-workbench .notice{background:var(--w-soft);color:var(--w-text);border:1px solid var(--w-border)}.media-workbench .notice.error{color:var(--dsw-alias-state-error-primary,#ad3636)}.media-workbench .media-project-list .bar{justify-content:space-between;border-bottom:1px solid var(--w-border);padding:16px 0}.media-workbench .media-exports-view .w-section h3{margin-bottom:12px}.media-workbench .media-environment button{border:1px solid var(--w-border);border-radius:8px;background:var(--w-primary);color:var(--w-on-primary);padding:8px 12px;font-size:14px;min-height:36px}.media-workbench .media-properties a{font-size:12px}.media-workbench :focus-visible{outline:2px solid var(--w-accent);outline-offset:3px}
@container dsh-workbench (max-width:1050px){.media-workbench .media-editor{grid-template-columns:240px minmax(0,1fr)}.media-workbench .media-properties{grid-column:1/-1;border-inline-start:0;border-top:1px solid var(--w-border);padding:20px 0;display:grid;grid-template-columns:1fr 1fr;gap:20px}.media-workbench .media-properties>h3{grid-column:1/-1;margin:0}.media-workbench .media-properties>.w-section{padding:0;border:0}.media-workbench .media-preview-workspace{padding-inline-end:0}}
@container dsh-workbench (max-width:760px){.media-workbench .media-editor{display:flex;flex-direction:column}.media-workbench .media-content-fields{border-inline-end:0;padding:20px 0}.media-workbench .media-preview-workspace{order:-1;padding:20px 0}.media-workbench .media-properties{display:block}.media-workbench .media-properties>.w-section{padding:20px 0;border-top:1px solid var(--w-border)}.media-workbench .media-empty-preview{max-height:440px}.media-workbench .media-player-wrap video{max-height:480px}.media-workbench .media-asset-list>li>div{min-width:120px}}
@media(max-width:700px){.media-workbench.dmw[data-main=true]{padding:calc(16px + var(--dsh-frame-top-clearance,0px)) 16px 0 max(16px,var(--dsh-frame-leading-clearance,0px))}}
`;

        const engine = 'hyperframes', title = engine === 'hyperframes' ? 'HyperFrames' : 'Remotion', route = 'api/dsh-' + engine + '/workbench';
        function mediaError(error, en) {
            const message = typeof error === 'string' ? error : error?.message || String(error || '');
            if (!en || !/[\u3400-\u9fff]/.test(message))
                return message;
            if (error?.status === 401)
                return 'Your session expired. Reopen DSH and try again.';
            if (/调整图片顺序需要/.test(message))
                return 'Reload the project before changing its image order.';
            if (/图片顺序/.test(message))
                return 'Use every current image exactly once. Reload the project before trying again.';
            if (/先归档|已达 30/.test(message))
                return 'The 30 active project slots are full. Archive another project before creating or restoring one.';
            if (/已有预览或渲染/.test(message))
                return 'Stop the active preview or cancel the render before archiving or restoring a project.';
            if (error?.status === 409 || /已.*更新|另一窗口|修订/.test(message))
                return 'The project changed. Reopen the latest version and compare it with your preserved input.';
            if (/标题/.test(message))
                return 'Enter a title up to 72 characters.';
            if (/时长/.test(message))
                return 'Set a duration between 3 and 30 seconds.';
            if (/正文/.test(message))
                return 'Use body text up to 360 characters.';
            if (/素材|PNG|JPEG|MP3|WAV|MP4/.test(message))
                return 'Check the media format and file contents. Each asset must be ≤20 MB; a project supports 12 assets and 40 MB total, with one audio and one video background.';
            if (/任务|官方|FFmpeg|Chrome|环境/.test(message))
                return 'The official task did not finish. Open the job log and check the render environment, then retry. Your project is preserved.';
            if (/工程记录|项目目录|文件/.test(message))
                return 'The project files could not be read safely. Back them up and check their location and permissions before retrying.';
            return 'The operation failed. Check the DSH logs and reload the project before retrying; your input is preserved.';
        }
        let cache = { project: null, fields: null, dirty: false, job: null, creating: false };
        const empty = () => ({ template: 'title', title: '', body: '', format: 'landscape', duration: 8 });
        const fieldsOf = p => ({ template: p.template, title: p.title, body: p.body, format: p.format, duration: p.duration });
        // Official stage names are the only progress signal the engines expose; map them to steps instead of inventing percentages.
        const jobSteps = { prepare: ['下载环境', '检查 FFmpeg', '下载官方依赖', '检查官方环境', '检查或下载 Chrome', '下载专用渲染浏览器'], preview: ['准备修订快照', '启动官方预览', '官方预览已就绪'], render: ['准备修订快照', '检查合成', '渲染 MP4', '已完成'] };
        const jobStepOf = step => { const steps = jobSteps[step?.kind] || [], index = steps.indexOf(step?.stage); return { index: index < 0 ? 0 : index, total: steps.length || 1 }; };
        const css = `.dmw{font:14px/1.6 system-ui,sans-serif;color:var(--fg,#142D39);min-width:0;padding:8px}.dmw *{box-sizing:border-box}.dmw h2{margin:0;font-size:23px}.dmw h3{font-size:17px;margin:8px 0}.dmw .muted{color:var(--fg-muted,#677881);font-size:13px}.dmw .bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:12px 0}.dmw button,.dmw .button{font:inherit;color:inherit;background:var(--bg-surface,#fff);border:1px solid var(--border,#c8d6d9);border-radius:9px;padding:8px 12px;cursor:pointer;white-space:normal;text-decoration:none}.dmw button.primary{background:#df5639;border-color:#df5639;color:white}.dmw button:disabled{opacity:.45;cursor:default}.dmw input:not([type=file]),.dmw textarea,.dmw select{font:inherit;color:inherit;width:100%;border:1px solid var(--border,#b9cccd);border-radius:8px;padding:9px;background:var(--bg,#fff)}.dmw label{display:block;margin:10px 0 4px}.dmw .card{border:1px solid var(--border,#ccd7d6);border-radius:12px;padding:14px;margin:12px 0;min-width:0;background:var(--bg-surface,#fff)}.dmw .notice{border-radius:8px;padding:10px;margin:10px 0;background:#eef5ed;color:#28573e;overflow-wrap:anywhere}.dmw .error{background:#fff0ec;color:#943b27}.dmw .row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.dmw .projects{display:grid;gap:8px}.dmw .projects button{text-align:left;width:100%}.dmw img{width:90px;height:70px;object-fit:contain}.dmw .assets{display:flex;flex-direction:column;gap:8px}.dmw .asset{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.dmw video{width:100%;max-height:400px;background:#142D39;border-radius:10px}.dmw pre{white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;margin:8px 0;max-height:220px;overflow:auto}.dmw :focus-visible{outline:3px solid #79CDB4;outline-offset:2px}[role=dialog]:has(.dmw){width:min(1160px,calc(100vw - 40px))!important;max-width:1160px!important}@media(max-width:700px){.dmw{padding:3px}.dmw .row{grid-template-columns:1fr}[role=dialog]:has(.dmw){width:100%!important;max-width:100%!important;flex-direction:column!important}[role=dialog]:has(.dmw)>nav+div{min-width:0;width:100%}[role=dialog]:has(.dmw)>nav+div>div:has(.dmw){padding:12px!important;min-width:0}[role=dialog]:has(.dmw) nav{width:100%!important;flex-basis:auto!important;border-right:0;max-height:170px;overflow:auto}[role=dialog]:has(.dmw) nav>div:has(>button){display:flex;flex-direction:row!important;flex-wrap:wrap;gap:4px}}`;
        async function api(body) {
            const response = await fetch(new URL(route, document.baseURI), { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json', 'x-dsh-media': '1' }, body: JSON.stringify(body) });
            let data;
            try {
                data = await response.json();
            }
            catch {
                throw new Error('无法读取插件响应，请检查是否已经重启 DSH。');
            }
            if (!response.ok || !data.ok) {
                const error = new Error(data.message || '操作未完成');
                error.status = response.status;
                throw error;
            }
            return data.value;
        }
        function urlFor(project, kind, extra = {}) { const url = new URL(route, document.baseURI); url.search = new URLSearchParams({ id: project.id, kind, ...extra }); return url.href; }
        function Workbench({locale,workbench=false}={}) {
const [editorTab,setEditorTab]=useState('content'),[libraryTab,setLibraryTab]=useState('projects');const controlId=React.useId();
            const [lang, setLang] = useState('zh'), [projects, setProjects] = useState([]), [archived, setArchived] = useState([]), [archiveReview, setArchiveReview] = useState(false), [environment, setEnvironment] = useState(null), [templates, setTemplates] = useState([]);
            const [project, setProject] = useState(cache.project), [fields, setFields] = useState(cache.fields || empty()), [dirty, setDirty] = useState(cache.dirty), [creating, setCreating] = useState(cache.creating);
            const [job, setJob] = useState(cache.job), [busy, setBusy] = useState(false), [error, setError] = useState(''), [notice, setNotice] = useState(''), [pending, setPending] = useState(null), [conflict, setConflict] = useState(false), [exportReview, setExportReview] = useState(false);
            const busyRef = useRef(false), fileRef = useRef(null), latest = useRef({ project, fields, dirty });
            latest.current = { project, fields, dirty };
            const t = (zh, en) => lang === 'en' ? en : zh, activeJob = job?.state === 'running', running = busy || activeJob && job.kind !== 'prepare', jobStep = jobStepOf(job);
// Update protection: dsh-hyperframes
__stardustUpdatesGuard(React, "dsh-hyperframes", { dirty, busy: busy || activeJob, retainOnClose: true });

            const stage = lang === 'en' ? ({ '下载环境': 'Preparing environment', '检查 FFmpeg': 'Checking FFmpeg', '下载官方依赖': 'Downloading official dependencies', '检查官方环境': 'Checking official CLI', '检查或下载 Chrome': 'Checking or downloading Chrome', '下载专用渲染浏览器': 'Downloading the official rendering browser', '准备修订快照': 'Preparing saved revision', '启动官方预览': 'Starting official preview', '官方预览已就绪': 'Official preview is ready', '检查合成': 'Checking composition', '渲染 MP4': 'Rendering MP4', '已完成': 'Completed', '已取消': 'Cancelled', '已取消；工程已保留': 'Cancelled; project preserved', '官方任务未完成，请展开运行记录后重试。工程已保留。': 'The official task failed. Open the job log and retry; your project is preserved.', '未找到 FFmpeg，请安装并加入 PATH，重启 DSH 后重试。工程已保留。': 'FFmpeg was not found. Install it, add it to PATH, then restart DSH and retry; your project is preserved.' }[job?.stage] || mediaError(job?.stage, true)) : job?.stage;
            useEffect(() => { const update = () => setLang(String(locale?.getSnapshot?.().active || '').startsWith('en') ? 'en' : 'zh'); update(); return locale?.subscribe?.(update); }, [locale]);
            useEffect(() => { cache = { project, fields, dirty, job, creating }; }, [project, fields, dirty, job, creating]);
            useEffect(() => { const exit = e => { if (latest.current.dirty) {
                e.preventDefault();
                e.returnValue = '';
            } }; window.addEventListener('beforeunload', exit); return () => window.removeEventListener('beforeunload', exit); }, []);
            async function refresh() {
                const data = await api({ action: 'list' });
                setProjects(data.projects);
                setArchived(data.archivedProjects || []);
                setEnvironment(data.environment);
                setTemplates(data.templates);
                const current = latest.current, saved = !current.dirty && data.projects.find(row => row.id === current.project?.id);
                if (saved) {
                    setProject(saved);
                    setFields(fieldsOf(saved));
                }
                setJob(previous => data.jobs.find(row => row.id === previous?.id) || data.jobs.filter(row => row.state === 'running').at(-1) || data.jobs.at(-1) || null);
            }
            useEffect(() => { refresh().catch(e => setError(e)); }, []);
            useEffect(() => {
                if (!job || job.state !== 'running')
                    return;
                let live = true, polling = false;
                const timer = setInterval(async () => {
                    if (polling)
                        return;
                    polling = true;
                    try {
                        const next = await api({ action: 'job', job: job.id });
                        if (!live)
                            return;
                        // Refresh output before the terminal state tears down this polling effect.
                        if (next.state !== 'running')
                            await refresh();
                        else
                            setJob(next);
                    }
                    catch (e) {
                        if (live) {
                            setError(e);
                            setJob(null);
                        }
                    }
                    finally {
                        polling = false;
                    }
                }, 1000);
                return () => { live = false; clearInterval(timer); };
            }, [job?.id, job?.state]);
            async function perform(fn) { if (busyRef.current)
                return; busyRef.current = true; setBusy(true); setError(''); setNotice(''); try {
                return await fn();
            }
            catch (e) {
                setError(e);
                setConflict(e.status === 409);
            }
            finally {
                busyRef.current = false;
                setBusy(false);
            } }
            async function open(id) { const next = await api({ action: 'get', id }); setProject(next); setFields(fieldsOf(next)); setCreating(false); setDirty(false); setConflict(false); setPending(null); setArchiveReview(false); }
            function navigate(target) { if (dirty) {
                setPending(target);
                return;
            } perform(() => move(target)); }
            async function move(target) { if (target === 'new') {
                setProject(null);
                setFields(empty());
                setCreating(true);setEditorTab('content');
            }
            else if (target === 'list') {
                setProject(null);
                setCreating(false);
                await refresh();
            }
            else
                await open(target); setDirty(false); setPending(null); }
            async function save() { const next = await api(project ? { action: 'update', id: project.id, revision: project.revision, fields } : { action: 'create', fields }); setProject(next); setFields(fieldsOf(next)); setCreating(false); setDirty(false); setConflict(false); setNotice(t('工程已保存。', 'Project saved.')); await refresh(); return next; }
            async function upload(event) {
                const file = event.target.files?.[0];
                if (!file)
                    return;
                await perform(async () => {
                    if (!project || dirty)
                        throw new Error(t('请先保存工程，再上传素材。', 'Save your project before uploading media.'));
                    if (file.size > 20 * 1024 * 1024)
                        throw new Error(t('单个素材不能超过 20 MB。', 'Each asset must be at most 20 MB.'));
                    const response = await fetch(new URL(route + '/upload', document.baseURI), { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/octet-stream', 'x-dsh-media': '1', 'x-project-id': project.id, 'x-project-revision': String(project.revision), 'x-file-name': encodeURIComponent(file.name) }, body: file });
                    const result = await response.json();
                    if (!response.ok || !result.ok) {
                        const e = new Error(result.message);
                        e.status = response.status;
                        throw e;
                    }
                    setProject(result.value);
                    setNotice(t('素材副本已保存，原文件未改变。', 'A media copy was saved; your original is unchanged.'));
                });
                event.target.value = '';
            }
            async function start(action) { await perform(async () => { if (action !== 'prepare' && dirty)
                throw new Error(t('请先保存修改。', 'Save changes first.')); setJob(await api({ action, id: project?.id, revision: project?.revision })); }); }
            async function archiveProject() { await api({ action: 'archive', id: project.id, revision: project.revision, confirmed: true }); setArchiveReview(false); setProject(null); setCreating(false); setDirty(false); await refresh(); setNotice(t('工程已归档，素材和成品均保留，可在下方恢复。', 'Project archived. Media and output are preserved; restore it below.')); }
            const render=project?.renders?.[0],stale=render && (dirty || render.revision!==project.revision);
const canSave=fields.title.trim().length>0 && fields.title.length<=72 && Number.isInteger(fields.duration) && fields.duration>=3 && fields.duration<=30;
            const saveHint=!fields.title.trim()?t('先填写标题再保存。','Enter a title before saving.'):fields.title.length>72?t('标题最多 72 字符。','Titles are limited to 72 characters.'):!(Number.isInteger(fields.duration)&&fields.duration>=3&&fields.duration<=30)?t('时长需在 3–30 秒之间。','Set a duration between 3 and 30 seconds.'):project&&!dirty?t('没有需要保存的修改。','There is nothing to save yet.'):null;
            const exportHint=!environment?.ready?t('先在“环境”页准备渲染工具，再导出。','Prepare the renderer in Environment before exporting.'):dirty?t('先保存修改；导出使用已保存的修订。','Save your changes first; exports use the saved revision.'):t('先检查导出内容，再开始渲染。','Review the export summary before rendering.');
            if(!environment) return __stardustUpdatesInlinePage(React,h(W.Page,{workbench,title,subtitle:t('编辑视频工程，预览并导出 MP4。','Edit video projects, preview and export MP4.'),className:'dmw media-workbench'},h('style',null,MEDIA_WORKBENCH_CSS),error?h(W.Empty,{title:t('暂时无法读取工程','Projects are unavailable'),action:h(W.Button,{disabled:busy,onClick:()=>perform(refresh)},t('重新读取项目','Reload projects'))},mediaError(error,lang==='en')):h(W.Empty,{title:t('正在读取工程与渲染环境…','Loading projects and render environment…'),icon:'video'})),"dsh-hyperframes");
            return __stardustUpdatesInlinePage(React,h(W.Page,{workbench,title,subtitle:t('编辑视频工程，预览并导出 MP4。','Edit video projects, preview and export MP4.'),className:'dmw media-workbench',actions:h(React.Fragment,null,
 project || creating ? h(W.Button,{icon:'left',disabled:running,onClick:()=>navigate('list')},t('返回项目','Back to projects')) : h(W.Button,{icon:'plus',variant:'primary',disabled:running,onClick:()=>navigate('new')},t('新建视频','New video')),
 project || creating ? h(W.Button,{variant:'primary',disabled:running || !canSave || !!project && !dirty,title:saveHint || undefined,onClick:()=>perform(save)},t('保存工程','Save project')) : h(W.IconButton,{icon:'refresh',label:t('刷新项目','Refresh projects'),disabled:running,onClick:()=>perform(refresh)}),
 project ? h(W.Button,{icon:'download',disabled:running || dirty || !environment.ready,title:exportHint,onClick:()=>setExportReview(true)},t('导出 MP4','Export MP4')) : null)},
 h('style',null,css),h('style',null,MEDIA_WORKBENCH_CSS),h(W.Status,{tone:'error'},conflict ? t('工程已在别处更新，当前输入尚未保存。先复制需要的修改，再重新载入最新修订。', 'The project changed elsewhere and your input is not saved yet. Copy what you need, then reload the latest revision.') : error && mediaError(error,lang==='en')),h(W.Status,{tone:'success'},notice),conflict && project ? h('div',{className:'w-toolbar'},h(W.Button,{icon:'refresh',disabled:running,onClick:()=>setPending(project.id)},t('重新载入最新版本（放弃我的输入）','Reload the latest version (discard my input)')),h(W.Button,{variant:'ghost',disabled:running,onClick:()=>setConflict(false)},t('保留我的输入，稍后处理','Keep my input for now'))) : null,
 (project || creating) && !environment.ready ? h(W.Status,null,t('首次导出前需要准备本地渲染环境；内容可以先编辑和保存。','Prepare the local renderer before your first export. You can edit and save content now.'),h(W.Button,{variant:'ghost',onClick:()=>setEditorTab('environment')},t('查看环境','View environment'))) : null,
 job ? h('div',{className:'media-job',role:job.state==='failed'?'alert':'status','data-state':job.state,'aria-live':job.state==='failed'?'assertive':'polite'},h('strong',null,t('任务状态：','Job status: ')+stage),job.state==='running'?h('span',{className:'w-muted'},t('步骤 '+(jobStep.index+1)+' / '+jobStep.total,'Step '+(jobStep.index+1)+' / '+jobStep.total)):null,
 job.state==='running'?h('progress',{className:'media-job-progress',max:jobStep.total,value:jobStep.index+1,'aria-label':t('任务步骤进度','Job step progress')}):null,
 job.url?h('a',{className:'w-button',href:job.url,target:'_blank',rel:'noopener noreferrer'},t('打开官方 Studio 预览','Open official Studio preview')):null,
 job.state==='running'?h(W.Button,{disabled:busy,onClick:()=>perform(async()=>{await api({action:'cancel',job:job.id});setNotice(t('已请求停止；正在关闭本次任务。','Stopping this job.'));})},job.kind==='preview'?t('停止预览，返回编辑','Stop preview and return to editing'):t('取消任务','Cancel job')):null,
 job.state==='failed'?h(W.Button,{variant:'primary',icon:'refresh',disabled:running || dirty || job.kind!=='prepare' && !project,title:dirty?t('先保存修改，再用同一修订重试。','Save your changes before retrying the same revision.'):job.kind!=='prepare' && !project?t('先在工程库打开工程，再重试本次任务。','Open the project from the list before retrying this task.'):t('重试失败的官方任务；工程已保留。','Retry the failed official task; your project is preserved.'),onClick:()=>start(job.kind==='prepare'?'prepare':job.kind)},t('重试本次任务','Retry this task')):null,
 h('details',null,h('summary',null,t('查看运行记录','Show job log')),h('pre',null,job.lines.join('\n')))) : null,
 h(W.Tabs,{label:t('视频工作台视图','Video workbench views'),value:project || creating ? editorTab : libraryTab,onChange:project || creating ? setEditorTab : setLibraryTab,items:project || creating ? [{id:'content',label:t('内容与预览','Content and preview')},{id:'assets',label:t('素材','Media')},{id:'exports',label:t('导出记录','Exports')},{id:'environment',label:t('环境','Environment')}] : [{id:'projects',label:t('当前工程','Projects'),count:projects.length},{id:'archives',label:t('已归档','Archived'),count:archived.length},{id:'environment',label:t('环境','Environment')}]},
 !project && !creating ? libraryTab === 'environment' ? h('section',{className:'media-environment'},h('h3',null,t('渲染环境','Render environment')+(environment.ready?t(' · 已准备',' · ready'):t(' · 首次需下载',' · first download required'))),h('p', { className: 'muted' }, t(environment?.hint, 'First use downloads the official CLI. ' + (engine === 'hyperframes' ? 'Windows uses the official rendering browser; other platforms reuse installed Chrome when available. FFmpeg must be in PATH.' : 'Installed Chrome is reused; a browser is downloaded when needed. Remotion retains its official license.'))),
engine === 'remotion' && h('p', null, h('a', { href: 'https://www.remotion.dev/license', target: '_blank', rel: 'noreferrer' }, t('查看 Remotion 使用许可证', 'Read the Remotion license'))),
h('button', { disabled: busy || activeJob, onClick: () => start('prepare') }, environment?.ready ? t('重新检查 / 修复环境', 'Check / repair environment') : t('准备渲染环境', 'Prepare render environment'))) : libraryTab === 'archives' ? archived.length ? h('section',{className:'media-project-list'},h('p', { className: 'muted' }, t('归档保留素材与成品，不占当前 30 个工程名额。恢复后可以继续编辑。', 'Archives retain media and output, freeing an active project slot. Restore to edit again.')),
h(ProjectLibrary,{items:archived,scope:'archives',language:lang,t,searchHint:t('搜索归档工程','Search archived projects'),searchText:p=>[p.title,p.body,p.template].join(' '),updatedAt:p=>p.updated,renderItem:p=>h('div', { className: 'bar', key: p.id }, h('strong', null, p.title), h('button', { disabled: busy || dirty || activeJob, onClick: () => perform(async () => { await api({ action: 'restore', id: p.id, revision: p.revision, confirmed: true }); await refresh(); await open(p.id); setNotice(t('工程已恢复。', 'Project restored.')); }) }, t('恢复工程', 'Restore project')))})) : h(W.Empty,{title:t('没有归档工程','No archived projects'),icon:'folder'}) : projects.length ? h('div',{className:'media-project-list'},h(ProjectLibrary,{items:projects,language:lang,t,searchHint:t('搜索标题、正文或模板','Search titles, text or templates'),searchText:p=>[p.title,p.body,p.template,templates.find(row=>row.id===p.template)?.[lang==='en'?'en':'zh']].join(' '),updatedAt:p=>p.updated,renderItem:p=>h(W.Row,{key:p.id,title:p.title,disabled:running,meta:p.duration+t(' 秒 · 修订 ',' sec · revision ')+p.revision,description:(templates.find(row=>row.id===p.template)?.[lang==='en'?'en':'zh'] || p.template),onClick:()=>{setEditorTab('content');navigate(p.id);}})})) : h(W.Empty,{title:t('还没有视频工程','No video projects yet'),icon:'video',action:h(W.Button,{variant:'primary',icon:'plus',disabled:running,onClick:()=>navigate('new')},t('新建视频','New video'))},t('点击“新建视频”，选择模板并保存。环境可以稍后准备。','Choose New video, select a template and save. The renderer can be prepared later.')) :
 editorTab === 'environment' ? h('section',{className:'media-environment'},h('h3',null,t('渲染环境','Render environment')+(environment.ready?t(' · 已准备',' · ready'):t(' · 首次需下载',' · first download required'))),h('p', { className: 'muted' }, t(environment?.hint, 'First use downloads the official CLI. ' + (engine === 'hyperframes' ? 'Windows uses the official rendering browser; other platforms reuse installed Chrome when available. FFmpeg must be in PATH.' : 'Installed Chrome is reused; a browser is downloaded when needed. Remotion retains its official license.'))),
engine === 'remotion' && h('p', null, h('a', { href: 'https://www.remotion.dev/license', target: '_blank', rel: 'noreferrer' }, t('查看 Remotion 使用许可证', 'Read the Remotion license'))),
h('button', { disabled: busy || activeJob, onClick: () => start('prepare') }, environment?.ready ? t('重新检查 / 修复环境', 'Check / repair environment') : t('准备渲染环境', 'Prepare render environment'))) : editorTab === 'assets' ? h(MediaAssets,{project,dirty,running,fileRef,upload,perform,setProject,t}) : editorTab === 'exports' ? h(MediaExports,{project,dirty,running,activeJob,busy,setArchiveReview,t}) :
 h('div',{className:'media-editor'},h('section',{className:'media-content-fields'},h('h3',null,t('模板与内容','Template and content')),h('div',{className:'media-field'},h('label', { htmlFor: controlId+'-template' }, t('模板', 'Template')),h('select', { id: controlId+'-template', disabled: running, value: fields.template, onChange: e => { setFields({ ...fields, template: e.target.value }); setDirty(true); } }, templates.map(row => h('option', { key: row.id, value: row.id }, lang === 'en' ? row.en : row.zh)))),
h('div',{className:'media-field'},h('label', { htmlFor: controlId+'-title' }, t('标题（最多 72 字符）', 'Title (up to 72 characters)')),h('input', { id: controlId+'-title', value: fields.title, disabled: running, maxLength: 72, onChange: e => { setFields({ ...fields, title: e.target.value }); setDirty(true); } })),
h('div',{className:'media-field'},h('label', { htmlFor: controlId+'-body' }, t('正文（轮播时每行对应一页）', 'Body (one line per slideshow page)')),h('textarea', { id: controlId+'-body', value: fields.body, disabled: running, maxLength: 360, rows: 4, onChange: e => { setFields({ ...fields, body: e.target.value }); setDirty(true); } })),dirty?h('p',{className:'w-muted'},t('有未保存修改；切换工程前会提醒。','Unsaved changes. You will be asked before switching projects.')):project?h('p',{className:'w-muted'},t('已保存 · 修订 ','Saved · revision ')+project.revision):null,project && h('button', { disabled: running || !dirty, onClick: () => { setFields(fieldsOf(project)); setDirty(false); setError(''); } }, t('取消修改', 'Discard changes'))),
 h(MediaCanvas,{project,fields,render,dirty,stale,job,running,ready:environment.ready,busy,start,perform,setNotice,t}),
 h('aside',{className:'media-properties'},h('h3',null,t('视频设置','Video settings')),h('div',{className:'media-field'},h('label', { htmlFor: controlId+'-format' }, t('画幅', 'Canvas')),h('select', { id: controlId+'-format', value: fields.format, disabled: running, onChange: e => { setFields({ ...fields, format: e.target.value }); setDirty(true); } }, ['landscape', 'portrait', 'square'].map((key, i) => h('option', { key, value: key }, [t('横屏 16:9', 'Landscape 16:9'), t('竖屏 9:16', 'Portrait 9:16'), t('正方形', 'Square')][i])))),
h('div',{className:'media-field'},h('label', { htmlFor: controlId+'-duration' }, t('时长（3–30 秒）', 'Duration (3–30 seconds)')),h('input', { id: controlId+'-duration', type: 'number', min: 3, max: 30, value: fields.duration, disabled: running, onChange: e => { setFields({ ...fields, duration: Number(e.target.value) }); setDirty(true); } })),
 h('section',{className:'w-section'},h('p',null,t('已上传素材 ','Uploaded media ')+(project?.assets.length || 0)),h(W.Button,{icon:'upload',disabled:!project || running || dirty,onClick:()=>setEditorTab('assets')},t('上传素材','Upload media')),project?h('a',{className:'w-button',href:urlFor(project,'source'),download:''},t('下载可编辑工程','Download editable project')):null),
 h('p',{className:'w-muted'},t('导出使用本地 ','Exports use the local ')+title+t(' 引擎。',' engine.')),h('p',{className:'w-muted'},t('图片、音频和无声视频；单文件 20 MB，工程合计 40 MB。','Images, audio and muted video; 20 MB per file, 40 MB per project.')),engine==='remotion'?h('a',{href:'https://www.remotion.dev/license',target:'_blank',rel:'noopener noreferrer'},t('Remotion 许可说明','Remotion license')):null))),
 project && exportReview ? h(W.Dialog,{title:t('导出前检查','Check before export'),closeLabel:t('取消导出','Cancel export'),busy:running,onClose:()=>setExportReview(false)},
 h('p', null, t('确认后启动官方渲染，生成新 MP4；工程内容不会被修改。', 'Rendering starts after you confirm and produces a new MP4. Your project is not modified.')),
 h('ul', { className: 'media-export-checks' }, h('li', null, t('标题：', 'Title: ') + project.title), h('li', null, t('画幅与时长：', 'Canvas and duration: ') + ({ landscape: t('横屏 16:9', 'Landscape 16:9'), portrait: t('竖屏 9:16', 'Portrait 9:16'), square: t('正方形', 'Square') }[project.format] || project.format) + ' · ' + project.duration + t(' 秒', ' sec')), h('li', null, t('素材：', 'Media: ') + project.assets.length + t(' 个', ' items')), h('li', null, t('修订：', 'Revision: ') + project.revision), h('li', null, t('渲染环境：', 'Renderer: ') + (environment.ready ? t('已准备', 'ready') : t('未准备', 'not ready'))), h('li', null, t('上次导出：', 'Last export: ') + (render ? t('修订 ', 'revision ') + render.revision : t('尚未导出', 'none yet')))),
 !project.assets.length ? h(W.Status, null, t('没有上传素材，本次只渲染模板内容。', 'No media uploaded; this export renders the template only.')) : null,
 render && render.revision !== project.revision ? h(W.Status, null, t('上一份 MP4 对应修订 ', 'The last MP4 uses revision ') + render.revision + t('，本次会生成修订 ', '; this export creates revision ') + project.revision + t(' 的新成品；旧成品保留在导出记录中。', '. Older files stay in Exports.')) : null,
 h('div', { className: 'w-toolbar' }, h(W.Button, { variant: 'primary', icon: 'download', disabled: running || dirty || !environment.ready, title: exportHint, onClick: () => { setExportReview(false); start('render'); } }, t('开始导出', 'Start export')), h(W.Button, { disabled: running, onClick: () => setExportReview(false) }, t('取消导出', 'Cancel export')))) : null,
 pending ? h(W.Dialog,{title:t('有未保存的修改','Unsaved changes'),closeLabel:t('留在当前','Stay here'),busy:running,onClose:()=>setPending(null)},h('p', null, t('有未保存内容，如何继续？', 'You have unsaved changes.')),
conflict ? h(W.Status, { tone: 'error' }, t('此工程已在别处更新，直接保存会再次冲突。请选择放弃修改并载入最新版本，或留在当前复制需要的输入。', 'This project changed elsewhere, so saving again would conflict. Discard and load the latest revision, or stay here to copy your input.')) : null,
 h('div', { className: 'w-toolbar' }, h(W.Button, { variant: 'primary', disabled: running || conflict, title: conflict ? t('工程已更新，无法直接保存。', 'The project changed, so saving is blocked.') : undefined, onClick: () => perform(async () => { await save(); await move(pending); }) }, t('保存后继续', 'Save and continue')), h(W.Button, { disabled: running, onClick: () => perform(() => move(pending)) }, t('放弃修改并继续', 'Discard and continue')), h(W.Button, { variant: 'ghost', onClick: () => setPending(null) }, t('留在当前', 'Stay here')))) : null,
 project && archiveReview ? h(W.Dialog,{title:t('归档此工程','Archive this project'),closeLabel:t('取消归档','Cancel archive'),busy:busy || activeJob,onClose:()=>setArchiveReview(false)},h('p', null, t('归档后将从当前项目列表移走；工程、上传素材和已导出 MP4 全部保留，可随时恢复。未保存修改需先处理。', 'Archiving removes this project from the active list. The project, uploaded media and exported MP4s are preserved and can be restored. Save or discard pending edits first.')),
h('div', { className: 'bar' }, h('button', { disabled: busy || dirty || activeJob, onClick: () => perform(archiveProject) }, t('确认归档', 'Confirm archive')), h('button', { disabled: busy, onClick: () => setArchiveReview(false) }, t('取消归档', 'Cancel archive')))) : null),"dsh-hyperframes");
        }
        function apply(ctx) { let locale; try {
            locale = ctx.get?.('locale') || ctx.locale;
        }
        catch { } W.register(ctx,{id:'dsh-'+engine+'.workbench',label:()=>title,icon:engine==='hyperframes'?'layers':'play',component:Workbench,inject:()=>({locale}),order:engine==='hyperframes'?65:66});
ctx.slots.inject('settings.section', () => ctx.slots.register({ name: 'settings.section', id: 'dsh-hyperframes', order: engine === 'hyperframes' ? 62 : 63, label: () => title, inject: () => ({ locale }) }, Workbench)); }
        return { inject: ['slots', 'locale'], apply };
    } },{"name":"dsh-hyperframes","version":"0.1.0","hasWorkbench":true,"packageVersion":"0.11.6","label":"HyperFrames","labelEn":"HyperFrames","suiteComponent":true,"sectionIds":["dsh-hyperframes"],"iconData":"data:image/webp;base64,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"}));

})();

/* STARDUSTLC_UPDATE_CLIENT_BODY_END */
})();
