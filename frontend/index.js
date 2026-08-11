(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`.gcp-root{--gcp-canvas: var(--surface-canvas, #0f1319);--gcp-bg: var(--surface-app, #151a22);--gcp-panel: var(--surface-panel, #1c222c);--gcp-surface: var(--surface-raised, #242b37);--gcp-input-bg: var(--surface-input, #2c3441);--gcp-hover: var(--surface-hover, #353d4b);--gcp-active: var(--surface-active, #404959);--gcp-scrim: var(--surface-scrim, rgba(6, 9, 13, .72));--gcp-text: var(--text-primary, #f0f4f8);--gcp-dim: var(--text-secondary, #c6d0da);--gcp-muted: var(--text-muted, #aeb9c6);--gcp-disabled: var(--text-disabled, #6b7684);--gcp-accent-ink: var(--text-on-accent, #04212b);--gcp-border-soft: var(--border-subtle, #262e3a);--gcp-border: var(--border-base, #313a48);--gcp-border-strong: var(--border-strong, #6b7787);--gcp-focus: var(--border-focus, #22d3ee);--gcp-accent: var(--accent, #22d3ee);--gcp-accent-deep: var(--accent-deep, #06b6d4);--gcp-accent-dim: var(--accent-dim, #0e7490);--gcp-accent-wash: var(--accent-wash, rgba(34, 211, 238, .12));--gcp-accent-glow: var(--accent-glow, rgba(34, 211, 238, .45));--gcp-ok: var(--status-success, #5ec269);--gcp-danger: var(--status-error, #ff6b63);--gcp-warn: var(--status-warning, #ffc94d);--gcp-info: var(--status-info, #6aa9ff);--gcp-ok-wash: var(--success-wash, rgba(94, 194, 105, .14));--gcp-danger-wash: var(--danger-wash, rgba(255, 107, 99, .14));--gcp-warn-wash: var(--warning-wash, rgba(255, 201, 77, .14));--gcp-info-wash: var(--info-wash, rgba(106, 169, 255, .14));--gcp-wire: var(--wire, #5b6c82);--gcp-wire-active: var(--wire-active, #22d3ee);--gcp-fs-2xs: var(--fs-2xs, .6875rem);--gcp-fs-xs: var(--fs-xs, .75rem);--gcp-fs-sm: var(--fs-sm, .8125rem);--gcp-fs-md: var(--fs-md, .875rem);--gcp-fs-lg: var(--fs-lg, 1rem);--gcp-fs-xl: var(--fs-xl, 1.125rem);--gcp-lh-tight: var(--lh-tight, 1.25);--gcp-lh-snug: var(--lh-snug, 1.4);--gcp-lh: var(--lh-normal, 1.55);--gcp-r-xs: var(--radius-sm, 4px);--gcp-r-sm: var(--radius, 6px);--gcp-r: var(--radius-lg, 8px);--gcp-r-lg: var(--radius-xl, 12px);--gcp-r-pill: var(--radius-pill, 999px);--gcp-shadow-sm: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, .4));--gcp-shadow: var(--shadow, 0 4px 12px -2px rgba(0, 0, 0, .5));--gcp-shadow-lg: var(--shadow-lg, 0 12px 32px -8px rgba(0, 0, 0, .6));--gcp-shadow-pop: var(--shadow-popover, 0 16px 40px -12px rgba(0, 0, 0, .7));--gcp-edge-hi: var(--inner-highlight, inset 0 1px 0 rgba(255, 255, 255, .05));--gcp-t-fast: var(--transition-fast, .12s ease);--gcp-t: var(--transition, .18s ease);--gcp-ease: cubic-bezier(.22, 1, .36, 1);--gcp-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;position:relative;font-family:inherit;font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-dim);box-sizing:border-box;-webkit-font-smoothing:antialiased}.gcp-root *,.gcp-root *:before,.gcp-root *:after{box-sizing:inherit}.gcp-root ::-webkit-scrollbar{width:6px;height:6px}.gcp-root ::-webkit-scrollbar-track{background:transparent}.gcp-root ::-webkit-scrollbar-thumb{background:var(--gcp-border);border-radius:3px}.gcp-root ::-webkit-scrollbar-thumb:hover{background:var(--gcp-border-strong)}.gcp-fab{width:48px;height:48px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-fab:hover{background:var(--gcp-accent);transform:translateY(-1px);box-shadow:inset 0 1px #ffffff38,0 8px 18px -6px var(--gcp-accent-glow)}.gcp-fab:active{transform:scale(.96)}.gcp-fab:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-window{position:fixed;bottom:16px;right:16px;width:min(448px,calc(100vw - 32px));height:min(690px,calc(100vh - 88px));min-height:420px;background:var(--gcp-panel);border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);display:flex;flex-direction:column;box-shadow:var(--gcp-shadow-pop),var(--gcp-edge-hi);overflow:hidden;isolation:isolate;animation:gcp-window-in .2s var(--gcp-ease) both;transition:width .26s var(--gcp-ease),height .26s var(--gcp-ease),border-radius .26s var(--gcp-ease)}.gcp-window--expanded{width:min(980px,calc(100vw - 32px));height:min(800px,calc(100vh - 32px))}@keyframes gcp-window-in{0%{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}.gcp-workbench-header{display:flex;flex-direction:column;flex-shrink:0;background:linear-gradient(180deg,var(--gcp-bg) 0%,var(--gcp-canvas) 100%);border-bottom:1px solid var(--gcp-border);box-shadow:var(--gcp-edge-hi);position:relative;z-index:3}.gcp-header-main{min-height:52px;display:flex;align-items:center;gap:12px;padding:8px 10px 6px 12px}.gcp-brand{display:flex;align-items:center;gap:9px;min-width:0;flex:1}.gcp-header-mark{width:28px;height:28px;border-radius:var(--gcp-r-sm);background:var(--gcp-accent-deep);box-shadow:inset 0 1px #ffffff38;display:inline-flex;align-items:center;justify-content:center;color:var(--gcp-accent-ink);font-size:14px;flex-shrink:0}.gcp-brand-copy{display:flex;flex-direction:column;min-width:0;line-height:var(--gcp-lh-tight)}.gcp-brand-copy strong{color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600;letter-spacing:-.01em;white-space:nowrap}.gcp-brand-copy>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:600;margin-top:2px;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}.gcp-header-actions{display:flex;align-items:center;justify-content:flex-end;gap:4px;min-width:0}.gcp-icon-btn{width:28px;height:28px;border-radius:var(--gcp-r-sm);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-icon-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-icon-btn:active{transform:scale(.94)}.gcp-icon-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-icon-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-model-chip{display:inline-flex;align-items:center;gap:6px;height:26px;max-width:150px;min-width:0;padding:0 9px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:1}.gcp-model-chip:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-model-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-model-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--gcp-ok)}.gcp-label-btn{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px 0 8px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-label-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-label-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-label-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-bar{height:28px;display:flex;align-items:center;gap:8px;padding:0 13px;border-top:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-live-indicator{width:6px;height:6px;border-radius:50%;background:var(--gcp-disabled);flex-shrink:0}.gcp-live-indicator.online{background:var(--gcp-ok)}.gcp-context-name{color:var(--gcp-muted);font-weight:600}.gcp-context-stat{padding-left:8px;border-left:1px solid var(--gcp-border-soft)}.gcp-context-stat strong{color:var(--gcp-dim);font-weight:600;font-family:var(--gcp-mono)}.gcp-context-api{margin-left:auto;font-family:var(--gcp-mono)}.gcp-workbench-nav{display:flex;align-items:stretch;padding:0 6px}.gcp-nav-btn{flex:1;min-width:0;border:none;border-bottom:2px solid transparent;background:transparent;color:var(--gcp-muted);display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:7px 8px 6px;font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;outline:none;transition:color var(--gcp-t-fast),border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-nav-btn:hover{color:var(--gcp-dim)}.gcp-nav-btn.active{color:var(--gcp-text);border-bottom-color:var(--gcp-accent-deep)}.gcp-nav-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-nav-btn svg{flex-shrink:0}.gcp-view{flex:1;overflow:hidden;display:flex;flex-direction:column}.gcp-chat{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}.gcp-messages{flex:1;overflow-y:auto;padding:14px 14px 8px;display:flex;flex-direction:column;gap:12px}.gcp-welcome{margin:auto;text-align:center;padding:24px 26px;max-width:320px;display:flex;flex-direction:column;align-items:center;gap:10px}.gcp-welcome-mark{width:44px;height:44px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);display:flex;align-items:center;justify-content:center;font-size:20px;animation:gcp-pop .36s var(--gcp-ease) both}.gcp-welcome-title{font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text);letter-spacing:-.01em;animation:gcp-rise .36s var(--gcp-ease) 40ms both}.gcp-welcome-sub{font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-muted);animation:gcp-rise .36s var(--gcp-ease) 80ms both}.gcp-welcome-history{margin-top:6px;display:inline-flex;align-items:center;gap:7px;padding:6px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:500;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;animation:gcp-rise .36s var(--gcp-ease) .14s both}.gcp-welcome-history:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-welcome-history:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-welcome-suggestions{display:flex;flex-direction:column;gap:6px;width:100%;margin-top:4px;animation:gcp-rise .36s var(--gcp-ease) .11s both}.gcp-suggestion{padding:8px 11px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);background:var(--gcp-surface);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-family:inherit;line-height:var(--gcp-lh-snug);text-align:left;cursor:pointer;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none}.gcp-suggestion:hover{color:var(--gcp-accent);border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-suggestion:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@keyframes gcp-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}@keyframes gcp-rise{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}.gcp-msg-row{display:flex;flex-direction:column;gap:6px;animation:gcp-rise .24s var(--gcp-ease) both}.gcp-msg-row.user{align-items:flex-end}.gcp-msg-row.assistant{align-items:flex-start}.gcp-bubble{max-width:88%;padding:8px 11px;border-radius:var(--gcp-r);line-height:var(--gcp-lh);word-break:break-word;white-space:pre-wrap;font-size:var(--gcp-fs-sm)}.gcp-msg-row.user .gcp-bubble{background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-text);border-bottom-right-radius:var(--gcp-r-xs)}.gcp-msg-row.assistant .gcp-bubble{background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-dim);border-bottom-left-radius:var(--gcp-r-xs)}.gcp-bubble pre{background:var(--gcp-canvas);border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);padding:9px 10px;overflow-x:auto;font-size:var(--gcp-fs-xs);font-family:var(--gcp-mono);margin:7px 0 2px;white-space:pre;line-height:1.5}.gcp-bubble pre:first-child{margin-top:0}.gcp-bubble pre:last-child{margin-bottom:0}.gcp-bubble code{font-family:var(--gcp-mono);font-size:var(--gcp-fs-xs)}.gcp-bubble :not(pre)>code{background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);padding:1px 5px;border-radius:var(--gcp-r-xs);font-size:var(--gcp-fs-2xs);color:var(--gcp-text)}.gcp-bubble .gcp-md-p{margin:0 0 8px}.gcp-bubble .gcp-md-p:last-child{margin-bottom:0}.gcp-md-h1,.gcp-md-h2,.gcp-md-h3{font-weight:600;color:var(--gcp-text);margin:10px 0 6px;line-height:var(--gcp-lh-snug)}.gcp-md-h1{font-size:var(--gcp-fs-md)}.gcp-md-h2{font-size:var(--gcp-fs-sm)}.gcp-md-h3{font-size:var(--gcp-fs-sm);color:var(--gcp-muted)}.gcp-md-h1:first-child,.gcp-md-h2:first-child,.gcp-md-h3:first-child{margin-top:0}.gcp-md-list{margin:2px 0 8px;padding-left:18px}.gcp-md-list:last-child{margin-bottom:0}.gcp-md-list li{margin:3px 0}.gcp-md-list li::marker{color:var(--gcp-muted)}.gcp-md-hr{border:none;border-top:1px solid var(--gcp-border-soft);margin:10px 0}.gcp-bubble a{color:var(--gcp-accent);text-decoration:underline;text-underline-offset:2px;text-decoration-color:var(--gcp-accent-dim)}.gcp-bubble a:hover{text-decoration-color:var(--gcp-accent)}.gcp-caret{display:inline-block;width:2px;height:1em;background:var(--gcp-accent);margin-left:2px;vertical-align:text-bottom;border-radius:1px;animation:gcp-blink 1s step-end infinite}@keyframes gcp-blink{0%,to{opacity:1}50%{opacity:0}}.gcp-bubble-attachments{display:flex;flex-wrap:wrap;gap:6px;max-width:88%;justify-content:inherit}.gcp-msg-row.user .gcp-bubble-attachments{justify-content:flex-end}.gcp-att-image{max-width:160px;max-height:160px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);object-fit:cover;display:block}.gcp-att-file{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);max-width:180px}.gcp-att-file svg{color:var(--gcp-accent);flex-shrink:0}.gcp-att-file-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-ops-chip{display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);line-height:1.5;font-variant-numeric:tabular-nums}.gcp-step-tag{display:inline-flex;align-items:center;gap:6px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase}.gcp-step-tag-dot{width:6px;height:6px;border-radius:50%;background:var(--gcp-wire);flex-shrink:0}.gcp-stages{position:relative;display:flex;flex-direction:column;gap:2px;width:88%;padding-left:2px}.gcp-stages:before{content:"";position:absolute;left:10px;top:12px;bottom:12px;width:2px;border-radius:1px;background:var(--gcp-border)}.gcp-stage{position:relative;border-radius:var(--gcp-r-sm);overflow:hidden;animation:gcp-rise .2s var(--gcp-ease) both}.gcp-stage-head{display:flex;align-items:center;gap:8px;width:100%;min-height:28px;padding:4px 7px 4px 0;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast)}.gcp-stage-head:not(:disabled):hover{background:var(--gcp-hover)}.gcp-stage-head:disabled{cursor:default}.gcp-stage-head:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-stage-status{position:relative;z-index:1;width:18px;height:18px;margin-left:2px;border-radius:50%;background:var(--gcp-panel);border:1px solid var(--gcp-border);display:flex;align-items:center;justify-content:center;flex-shrink:0}.gcp-stage.ok .gcp-stage-status{color:var(--gcp-ok);background:var(--gcp-ok-wash);border-color:transparent}.gcp-stage.error .gcp-stage-status{color:var(--gcp-danger);background:var(--gcp-danger-wash);border-color:transparent}.gcp-stage.running .gcp-stage-status{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim);box-shadow:0 0 6px var(--gcp-accent-glow)}.gcp-stage-spinner{width:10px;height:10px;border-radius:50%;border:2px solid transparent;border-top-color:var(--gcp-accent);border-right-color:var(--gcp-accent);animation:gcp-spin .7s linear infinite}@keyframes gcp-spin{to{transform:rotate(360deg)}}.gcp-stage-label{font-weight:600;font-size:var(--gcp-fs-xs);color:var(--gcp-dim);white-space:nowrap;flex-shrink:0;line-height:var(--gcp-lh-tight)}.gcp-stage.running .gcp-stage-label{color:var(--gcp-text)}.gcp-stage-summary{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage.error .gcp-stage-summary{color:var(--gcp-danger)}.gcp-stage-time{flex-shrink:0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage-chevron{color:var(--gcp-muted);flex-shrink:0;transition:transform var(--gcp-t-fast)}.gcp-stage-chevron.open{transform:rotate(90deg)}.gcp-stage-media{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 4px 28px}.gcp-stage-clip{max-width:100%;max-height:220px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-canvas)}.gcp-stage-detail{margin:2px 0 4px 28px;padding:8px 10px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:1.55;max-height:180px;overflow:auto;white-space:pre-wrap;word-break:break-word}.gcp-thinking{display:flex;align-items:center;gap:8px;padding:2px 2px 6px;font-size:var(--gcp-fs-sm);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-thinking-orb{color:var(--gcp-accent);font-size:var(--gcp-fs-sm);animation:gcp-orb-pulse 1.5s ease-in-out infinite}.gcp-thinking-text{background:linear-gradient(90deg,var(--gcp-muted) 25%,var(--gcp-accent) 50%,var(--gcp-muted) 75%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gcp-shimmer 1.8s linear infinite}.gcp-thinking-time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);font-variant-numeric:tabular-nums}@keyframes gcp-orb-pulse{0%,to{opacity:.45;transform:scale(.92)}50%{opacity:1;transform:scale(1.06)}}@keyframes gcp-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.gcp-error-row{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-danger);background:var(--gcp-danger-wash);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-error-icon{color:var(--gcp-danger);margin-top:1px;flex-shrink:0;display:flex}.gcp-error-body{flex:1;min-width:0}.gcp-error-title{font-size:var(--gcp-fs-xs);font-weight:600;color:var(--gcp-danger)}.gcp-error-text{font-size:var(--gcp-fs-xs);color:var(--gcp-dim);margin-top:2px;word-break:break-word;line-height:var(--gcp-lh-snug)}.gcp-retry-btn{padding:5px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast);align-self:center;flex-shrink:0}.gcp-retry-btn:hover{background:var(--gcp-danger-wash)}.gcp-retry-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-dropzone{position:absolute;top:8px;right:8px;bottom:8px;left:8px;z-index:5;border-radius:var(--gcp-r);background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;pointer-events:none;animation:gcp-fade .12s ease both}.gcp-dropzone-inner{display:flex;flex-direction:column;align-items:center;gap:10px;padding:24px 32px;border:1.5px dashed var(--gcp-accent-dim);border-radius:var(--gcp-r);color:var(--gcp-accent);font-size:var(--gcp-fs-sm);background:var(--gcp-accent-wash)}.gcp-dropzone-inner svg{width:22px;height:22px}@keyframes gcp-fade{0%{opacity:0}to{opacity:1}}.gcp-input-area{position:relative;padding:10px 12px 9px;border-top:1px solid var(--gcp-border);display:flex;flex-direction:column;gap:8px;flex-shrink:0;background:var(--gcp-bg)}.gcp-input-row{display:flex;gap:8px;align-items:flex-end}.gcp-attachments{display:flex;flex-wrap:wrap;gap:7px}.gcp-chip{position:relative;display:inline-flex;align-items:center;gap:8px;padding:5px 7px 5px 6px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border);max-width:190px;animation:gcp-pop .18s var(--gcp-ease) both}.gcp-chip.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-chip-thumb{width:30px;height:30px;border-radius:var(--gcp-r-xs);object-fit:cover;flex-shrink:0;border:1px solid var(--gcp-border-soft)}.gcp-chip-icon{width:30px;height:30px;border-radius:var(--gcp-r-xs);flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--gcp-canvas);color:var(--gcp-accent)}.gcp-chip.error .gcp-chip-icon{color:var(--gcp-danger)}.gcp-chip-body{display:flex;flex-direction:column;min-width:0;line-height:1.25}.gcp-chip-name{font-size:var(--gcp-fs-xs);color:var(--gcp-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:110px}.gcp-chip-size{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted)}.gcp-chip.error .gcp-chip-size{color:var(--gcp-danger)}.gcp-chip-spinner{width:12px;height:12px;border-radius:50%;border:2px solid var(--gcp-border);border-top-color:var(--gcp-accent);flex-shrink:0;animation:gcp-spin .7s linear infinite}.gcp-chip-remove{width:18px;height:18px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none}.gcp-chip-remove:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-chip-remove:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:1px}.gcp-file-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.gcp-attach-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast);outline:none}.gcp-attach-btn:hover:not(:disabled){color:var(--gcp-text);background:var(--gcp-hover)}.gcp-attach-btn:disabled{opacity:.4;cursor:not-allowed}.gcp-attach-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-textarea{flex:1;resize:none;background:var(--gcp-input-bg);border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);color:var(--gcp-text);font-family:inherit;font-size:var(--gcp-fs-sm);padding:8px 10px;outline:none;line-height:var(--gcp-lh-snug);min-height:34px;max-height:110px;overflow-y:auto;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-textarea::placeholder{color:var(--gcp-disabled)}.gcp-textarea:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-textarea:disabled{opacity:.5;cursor:not-allowed}.gcp-send-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-send-btn:hover:not(:disabled){background:var(--gcp-accent)}.gcp-send-btn:active:not(:disabled){transform:scale(.94)}.gcp-send-btn:disabled{opacity:.4;cursor:not-allowed;background:var(--gcp-input-bg);color:var(--gcp-disabled);box-shadow:none}.gcp-send-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-stop-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),transform var(--gcp-t-fast);outline:none}.gcp-stop-btn:hover{background:var(--gcp-danger-wash)}.gcp-stop-btn:active{transform:scale(.94)}.gcp-stop-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-composer-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:22px}.gcp-composer-context{display:flex;align-items:center;gap:6px;min-width:0}.gcp-context-chip{display:inline-flex;align-items:center;gap:6px;height:22px;max-width:230px;padding:0 7px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-soft);background:transparent;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast)}.gcp-context-chip:hover,.gcp-context-chip.open{background:var(--gcp-hover);color:var(--gcp-dim);border-color:var(--gcp-border)}.gcp-context-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-chip svg{flex-shrink:0;color:var(--gcp-accent)}.gcp-context-chip-model{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-context-chip-effort{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-weight:600}.gcp-effort{position:relative;min-width:0}.gcp-menu-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;background:transparent;border:none;cursor:default;padding:0}.gcp-effort-menu{position:absolute;bottom:calc(100% + 8px);left:0;z-index:30;min-width:250px;max-width:300px;padding:4px;background:var(--gcp-surface);border:1px solid var(--gcp-border);border-radius:var(--gcp-r);box-shadow:var(--gcp-shadow-pop);animation:gcp-rise .14s var(--gcp-ease) both}.gcp-effort-menu-title{padding:6px 8px 4px;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-effort-item{display:flex;align-items:baseline;gap:8px;width:100%;padding:6px 8px;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-effort-item:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-effort-item:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-effort-item.selected{background:var(--gcp-accent-wash)}.gcp-effort-item.selected .gcp-effort-item-name{color:var(--gcp-accent)}.gcp-effort-item-name{font-family:var(--gcp-mono);font-weight:600;white-space:nowrap;flex-shrink:0}.gcp-effort-item-desc{flex:1;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-effort-item-check{margin-left:auto;flex-shrink:0;width:12px;color:var(--gcp-accent);display:inline-flex}.gcp-effort-menu-divider{height:1px;margin:4px 0;background:var(--gcp-border)}.gcp-runbar{display:flex;align-items:center;gap:7px;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-runbar-pulse{width:7px;height:7px;border-radius:50%;background:var(--gcp-accent);flex-shrink:0;animation:gcp-runbar-pulse 1.4s ease-in-out infinite}@keyframes gcp-runbar-pulse{0%,to{opacity:.4;box-shadow:0 0 0 0 var(--gcp-accent-wash)}50%{opacity:1;box-shadow:0 0 6px 0 var(--gcp-accent-glow)}}.gcp-runbar-phase{color:var(--gcp-dim);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-run-sparkline{flex:none;color:var(--gcp-accent);opacity:.9}.gcp-runbar-step{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);font-family:var(--gcp-mono)}.gcp-runbar-time{flex-shrink:0;font-family:var(--gcp-mono)}.gcp-composer-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-disabled);white-space:nowrap;-webkit-user-select:none;user-select:none}.gcp-not-ready-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;gap:10px}.gcp-not-ready-label{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-cta-btn{padding:6px 14px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none;white-space:nowrap}.gcp-cta-btn:hover{background:var(--gcp-accent)}.gcp-cta-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history{flex:1;display:flex;flex-direction:column;overflow:hidden}.gcp-history-top{padding:12px;border-bottom:1px solid var(--gcp-border-soft);flex-shrink:0}.gcp-new-btn{width:100%;padding:8px 12px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-sm);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-new-btn:hover{background:var(--gcp-accent)}.gcp-new-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history-list{flex:1;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:2px}.gcp-history-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--gcp-r-sm);cursor:pointer;transition:background var(--gcp-t-fast);border:1px solid transparent;position:relative}.gcp-history-item:hover{background:var(--gcp-hover)}.gcp-history-item.active{background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-history-item.active:before{content:"";position:absolute;left:0;top:8px;bottom:8px;width:2px;border-radius:2px;background:var(--gcp-accent-deep)}.gcp-history-info{flex:1;min-width:0}.gcp-history-title{font-size:var(--gcp-fs-sm);color:var(--gcp-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}.gcp-history-meta{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums}.gcp-history-delete{width:24px;height:24px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:var(--gcp-fs-sm);flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),opacity var(--gcp-t-fast);outline:none;opacity:0}.gcp-history-item:hover .gcp-history-delete{opacity:1}.gcp-history-delete:hover{color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-history-delete.confirm{color:var(--gcp-danger);background:var(--gcp-danger-wash);opacity:1}.gcp-history-delete:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:1px;opacity:1}.gcp-history-empty{padding:40px 18px;text-align:center;color:var(--gcp-muted);font-size:var(--gcp-fs-sm)}.gcp-settings{flex:1;overflow-y:auto;padding:16px 14px 20px;display:flex;flex-direction:column;gap:16px}.gcp-field{display:flex;flex-direction:column;gap:6px}.gcp-label{font-size:var(--gcp-fs-2xs);font-weight:700;color:var(--gcp-muted);text-transform:uppercase;letter-spacing:.05em}.gcp-select,.gcp-input{width:100%;padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:var(--gcp-input-bg);color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-family:inherit;outline:none;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-select{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23aeb9c6' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}.gcp-select:focus,.gcp-input:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-input::placeholder{color:var(--gcp-disabled)}.gcp-model-row{display:flex;gap:6px}.gcp-model-row .gcp-input{flex:1}.gcp-load-btn{padding:7px 11px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;white-space:nowrap;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-load-btn:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-load-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-load-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-key-row{display:flex;gap:6px}.gcp-key-row .gcp-input{flex:1;font-family:var(--gcp-mono)}.gcp-show-btn{padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-show-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-show-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-section{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-border-soft);background:var(--gcp-surface)}.gcp-codex-status{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-codex-status.signed-in{color:var(--gcp-ok)}.gcp-codex-status.pending{color:var(--gcp-warn)}.gcp-codex-btns{display:flex;gap:8px}.gcp-codex-btn{padding:6px 13px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-codex-btn:hover{background:var(--gcp-accent)}.gcp-codex-btn.danger{border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);box-shadow:none}.gcp-codex-btn.danger:hover{background:var(--gcp-danger-wash)}.gcp-codex-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-field-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px}.gcp-field-hint.error{color:var(--gcp-danger)}.gcp-footnote{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);line-height:var(--gcp-lh);padding-top:6px;border-top:1px solid var(--gcp-border-soft)}.gcp-window--expanded .gcp-msg-row,.gcp-window--expanded .gcp-thinking,.gcp-window--expanded .gcp-error-row{width:min(100%,760px);margin-left:auto;margin-right:auto}.gcp-window--expanded .gcp-messages{padding:24px clamp(22px,8vw,92px) 12px}.gcp-window--expanded .gcp-input-area{padding-left:clamp(22px,9vw,108px);padding-right:clamp(22px,9vw,108px)}.gcp-window--expanded .gcp-settings,.gcp-window--expanded .gcp-history{width:min(100%,760px);margin:0 auto}.gcp-lab{position:relative;flex:1;min-height:0;overflow-y:auto;padding:18px;background:var(--gcp-panel)}.gcp-lab-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:16px}.gcp-eyebrow{display:block;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;line-height:var(--gcp-lh-snug);text-transform:uppercase}.gcp-lab-heading h1{margin:2px 0 4px;color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-tight);letter-spacing:-.01em}.gcp-lab-heading p{margin:0;max-width:560px;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-count{flex-shrink:0;padding:3px 9px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-lab-heading-actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:7px}.gcp-lab-heading-actions>button{min-height:28px;padding:5px 10px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-heading-actions>button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-heading-actions>button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-portable-message{margin:-7px 0 13px;padding:8px 10px;border:1px solid var(--gcp-ok);border-radius:var(--gcp-r-sm);background:var(--gcp-ok-wash);color:var(--gcp-ok);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-portable-message.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash);color:var(--gcp-danger)}.gcp-lab-empty{min-height:340px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 20px;border:1px dashed var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-canvas)}.gcp-lab-empty-mark{width:52px;height:52px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-lg);display:grid;place-items:center;color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-empty h2{margin:15px 0 6px;font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text)}.gcp-lab-empty p{max-width:470px;margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-example{max-width:510px;margin-top:16px;padding:10px 12px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh);text-align:left}.gcp-lab-layout{display:flex;flex-direction:column;gap:13px}.gcp-lab-studies{display:flex;gap:8px;overflow-x:auto;padding:1px 1px 5px;scrollbar-width:thin}.gcp-study-card{width:220px;min-width:220px;display:flex;flex-direction:column;align-items:stretch;gap:7px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-surface);color:var(--gcp-text);font-family:inherit;text-align:left;cursor:pointer;outline:none;transition:border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-study-card:hover{border-color:var(--gcp-border);background:var(--gcp-hover)}.gcp-study-card.active{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-study-card:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-study-card-top{display:flex;justify-content:space-between;align-items:center;gap:8px}.gcp-study-card time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono)}.gcp-study-card>strong{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:32px;font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-study-card-meta{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-lab-badge{display:inline-flex;align-items:center;width:fit-content;min-height:18px;padding:2px 7px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);color:var(--gcp-muted);background:var(--gcp-input-bg);font-size:var(--gcp-fs-2xs);font-weight:700;line-height:1;letter-spacing:.04em;text-transform:uppercase}.gcp-lab-badge.completed{color:var(--gcp-ok);border-color:var(--gcp-ok);background:var(--gcp-ok-wash)}.gcp-lab-badge.partial,.gcp-lab-badge.invalid{color:var(--gcp-warn);border-color:var(--gcp-warn);background:var(--gcp-warn-wash)}.gcp-lab-badge.failed{color:var(--gcp-danger);border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-lab-report{min-width:0;padding:16px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-edge-hi)}.gcp-lab-report-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.gcp-lab-report-head h2{margin:4px 0 0;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600;line-height:var(--gcp-lh-snug);letter-spacing:-.01em}.gcp-lab-export-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px}.gcp-lab-export-actions button{min-height:26px;padding:4px 9px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-export-actions button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-export-actions button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-export-actions button:disabled{opacity:.45;cursor:not-allowed}.gcp-lab-export-actions button:disabled:hover{background:transparent;color:var(--gcp-dim)}.gcp-lab-integrity{margin:7px 0 0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-summary-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.gcp-lab-summary-card{min-width:0;display:flex;align-items:center;gap:11px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-lab-summary-card.winner{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-lab-card-icon{width:30px;height:30px;border-radius:var(--gcp-r-sm);display:grid;place-items:center;flex-shrink:0;font-size:14px}.gcp-lab-card-icon.objective{color:var(--gcp-info);background:var(--gcp-info-wash)}.gcp-lab-card-icon.winner{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-summary-card>div{min-width:0;display:flex;flex-direction:column;gap:2px}.gcp-lab-summary-card h3{margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-transform:uppercase}.gcp-lab-summary-card strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-lab-summary-card div>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-search-plan{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:baseline;gap:3px 10px;margin-top:8px;padding:10px 11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-info-wash)}.gcp-lab-search-plan .gcp-eyebrow{grid-column:1 / -1;color:var(--gcp-info)}.gcp-lab-search-plan strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-lab-search-plan>span:not(.gcp-eyebrow){color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-search-plan small{grid-column:1 / -1;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-section{margin-top:18px}.gcp-lab-section-title{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:8px}.gcp-lab-section-title h3{margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600}.gcp-lab-section-title>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-findings{margin:0;padding:10px 12px 10px 27px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-findings li+li{margin-top:5px}.gcp-lab-findings li::marker{color:var(--gcp-accent)}.gcp-leaderboard-wrap{overflow-x:auto;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-leaderboard{width:100%;min-width:650px;border-collapse:collapse;font-size:var(--gcp-fs-xs);font-variant-numeric:tabular-nums}.gcp-leaderboard th{padding:8px 9px;border-bottom:1px solid var(--gcp-border);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-align:left;text-transform:uppercase;white-space:nowrap}.gcp-leaderboard td{padding:9px;border-bottom:1px solid var(--gcp-border-soft);color:var(--gcp-dim);vertical-align:middle}.gcp-leaderboard tbody tr:last-child td{border-bottom:none}.gcp-leaderboard tbody tr.winner{background:var(--gcp-accent-wash)}.gcp-rank{display:inline-grid;place-items:center;width:21px;height:21px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-leaderboard tr.winner .gcp-rank{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-candidate-name{display:flex;align-items:center;flex-wrap:wrap;gap:5px;min-width:140px}.gcp-candidate-name strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-winner-tag{padding:2px 5px;border-radius:var(--gcp-r-xs);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase}.gcp-candidate-operations{display:block;max-width:240px;margin-top:3px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-candidate-error{display:block;max-width:210px;margin-top:3px;color:var(--gcp-danger);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-metric-value{color:var(--gcp-text)!important;font-family:var(--gcp-mono)}.gcp-metric-detail{display:block;margin-top:3px;color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:500;line-height:var(--gcp-lh-snug);white-space:nowrap}.gcp-candidate-download{min-height:25px;padding:4px 8px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-xs);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-candidate-download:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-candidate-download:disabled{opacity:.4;cursor:not-allowed}.gcp-study-import-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:8;display:grid;place-items:center;padding:20px;background:var(--gcp-scrim)}.gcp-study-import-dialog{width:min(100%,520px);max-height:calc(100% - 12px);overflow-y:auto;padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-lg)}.gcp-study-import-dialog h2{margin:4px 0 7px;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600}.gcp-study-import-dialog>p{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-study-import-dialog dl{margin:14px 0;display:grid;gap:7px}.gcp-study-import-dialog dl>div{display:grid;grid-template-columns:105px minmax(0,1fr);gap:10px}.gcp-study-import-dialog dt{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase;letter-spacing:.04em}.gcp-study-import-dialog dd{min-width:0;margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow-wrap:anywhere}.gcp-study-import-dialog code{color:var(--gcp-accent);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-study-import-safety{padding:9px 10px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-sm);background:var(--gcp-accent-wash)}.gcp-study-import-dialog .gcp-lab-portable-message{margin:10px 0 0}.gcp-study-import-actions{display:flex;justify-content:flex-end;gap:7px;margin-top:15px}.gcp-study-import-actions button{min-height:30px;padding:6px 12px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-study-import-actions button:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-study-import-actions button.primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-weight:700;box-shadow:inset 0 1px #ffffff38}.gcp-study-import-actions button.primary:hover:not(:disabled){background:var(--gcp-accent);color:var(--gcp-accent-ink)}.gcp-study-import-actions button:disabled{opacity:.5;cursor:not-allowed}.gcp-lab-warnings{display:flex;flex-direction:column;gap:5px}.gcp-lab-warnings p{position:relative;margin:0;padding:8px 10px 8px 27px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-warn);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-warnings p:before{content:"!";position:absolute;left:10px;top:8px;color:var(--gcp-warn);font-weight:800}.gcp-paper-grid{display:grid;grid-template-columns:1fr;gap:8px}.gcp-paper-card{position:relative;padding:12px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas);overflow:hidden}.gcp-paper-index{position:absolute;right:9px;top:7px;color:var(--gcp-border-soft);font-family:var(--gcp-mono);font-size:24px;font-weight:700}.gcp-paper-card h4{position:relative;margin:0 28px 9px 0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-paper-card dl{margin:0;display:flex;flex-direction:column;gap:7px}.gcp-paper-card dl>div{display:grid;grid-template-columns:58px 1fr;gap:7px}.gcp-paper-card dt{color:var(--gcp-accent-dim);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-paper-card dd{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh)}.gcp-window--expanded .gcp-lab{padding:24px}.gcp-window--expanded .gcp-lab-layout{display:grid;grid-template-columns:220px minmax(0,1fr);align-items:start}.gcp-window--expanded .gcp-lab-studies{position:sticky;top:0;max-height:590px;flex-direction:column;overflow-x:hidden;overflow-y:auto;padding:1px 5px 1px 1px}.gcp-window--expanded .gcp-study-card{width:100%;min-width:0}.gcp-window--expanded .gcp-lab-summary-grid,.gcp-window--expanded .gcp-paper-grid{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:720px),(max-height:560px){.gcp-window,.gcp-window--expanded{top:8px;right:8px;bottom:8px;left:8px;width:auto;height:auto;min-height:0;border-radius:var(--gcp-r-lg)}.gcp-window--expanded .gcp-lab-layout{display:flex}.gcp-window--expanded .gcp-lab-studies{position:static;max-height:none;flex-direction:row;overflow-x:auto;overflow-y:hidden}.gcp-window--expanded .gcp-study-card{width:220px;min-width:220px}.gcp-window--expanded .gcp-messages{padding:16px 14px 8px}.gcp-window--expanded .gcp-input-area{padding:10px 12px 9px}}@media(max-width:430px){.gcp-header-main{padding-left:10px;gap:7px}.gcp-brand-copy>span{display:none}.gcp-header-actions .gcp-model-chip{max-width:116px}.gcp-context-bar{padding:0 11px;gap:6px}.gcp-context-name{display:none}.gcp-context-stat{padding-left:6px}.gcp-workbench-nav{padding:0 4px}.gcp-nav-btn{gap:5px;padding:7px 4px 6px;font-size:var(--gcp-fs-2xs)}.gcp-composer-hint{display:none}.gcp-lab{padding:14px 11px}.gcp-lab-report{padding:12px 10px}.gcp-lab-heading p{display:none}.gcp-lab-heading{align-items:center;margin-bottom:13px}}.gcp-experiment-approval-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:40;display:grid;place-items:center;padding:18px;background:var(--gcp-scrim)}.gcp-experiment-approval{width:min(420px,100%);padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-pop)}.gcp-experiment-approval-kicker{margin-bottom:6px;color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;text-transform:uppercase}.gcp-experiment-approval-title{color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-hypothesis{margin-top:10px;color:var(--gcp-text);font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh)}.gcp-experiment-approval-facts{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.gcp-experiment-approval-facts span{padding:3px 8px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-experiment-approval-candidates{display:grid;gap:6px;max-height:124px;margin-top:12px;overflow-y:auto}.gcp-experiment-approval-candidates>div,.gcp-experiment-approval-nodes{display:grid;grid-template-columns:minmax(72px,.35fr) minmax(0,1fr);gap:8px;padding:7px 9px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-candidates strong,.gcp-experiment-approval-nodes strong{color:var(--gcp-text)}.gcp-experiment-approval-candidates span,.gcp-experiment-approval-nodes span{min-width:0;overflow-wrap:anywhere;color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-experiment-approval-nodes{margin-top:6px}.gcp-experiment-approval-warning{margin-top:14px;padding:10px 11px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:18px}.gcp-approval-secondary,.gcp-approval-primary{min-height:32px;padding:0 13px;border-radius:var(--gcp-r-sm);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:700;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-approval-secondary{border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim)}.gcp-approval-secondary:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-approval-secondary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-approval-primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);box-shadow:inset 0 1px #ffffff38}.gcp-approval-primary:hover{background:var(--gcp-accent)}.gcp-approval-primary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@media(prefers-reduced-motion:reduce){.gcp-root *,.gcp-root *:before,.gcp-root *:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`)),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var Xb = Object.defineProperty;
var Yb = (a, r, s) => r in a ? Xb(a, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[r] = s;
var rn = (a, r, s) => Yb(a, typeof r != "symbol" ? r + "" : r, s);
function Qb(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Tu = { exports: {} }, Qr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h;
function Jb() {
  if (_h) return Qr;
  _h = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(l, c, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      d = {};
      for (var y in c)
        y !== "key" && (d[y] = c[y]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: l,
      key: f,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return Qr.Fragment = r, Qr.jsx = s, Qr.jsxs = s, Qr;
}
var Eh;
function Zb() {
  return Eh || (Eh = 1, Tu.exports = Jb()), Tu.exports;
}
var h = Zb(), Ou = { exports: {} }, _e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xh;
function Fb() {
  if (xh) return _e;
  xh = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), f = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), _ = Symbol.iterator;
  function N(E) {
    return E === null || typeof E != "object" ? null : (E = _ && E[_] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var D = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, x = Object.assign, V = {};
  function M(E, L, W) {
    this.props = E, this.context = L, this.refs = V, this.updater = W || D;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(E, L) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, L, "setState");
  }, M.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function R() {
  }
  R.prototype = M.prototype;
  function H(E, L, W) {
    this.props = E, this.context = L, this.refs = V, this.updater = W || D;
  }
  var Z = H.prototype = new R();
  Z.constructor = H, x(Z, M.prototype), Z.isPureReactComponent = !0;
  var X = Array.isArray;
  function ae() {
  }
  var B = { H: null, A: null, T: null, S: null }, ce = Object.prototype.hasOwnProperty;
  function re(E, L, W) {
    var ie = W.ref;
    return {
      $$typeof: a,
      type: E,
      key: L,
      ref: ie !== void 0 ? ie : null,
      props: W
    };
  }
  function K(E, L) {
    return re(E.type, L, E.props);
  }
  function Q(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function ue(E) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(W) {
      return L[W];
    });
  }
  var ye = /\/+/g;
  function F(E, L) {
    return typeof E == "object" && E !== null && E.key != null ? ue("" + E.key) : L.toString(36);
  }
  function le(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ae, ae) : (E.status = "pending", E.then(
          function(L) {
            E.status === "pending" && (E.status = "fulfilled", E.value = L);
          },
          function(L) {
            E.status === "pending" && (E.status = "rejected", E.reason = L);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function w(E, L, W, ie, ge) {
    var Se = typeof E;
    (Se === "undefined" || Se === "boolean") && (E = null);
    var de = !1;
    if (E === null) de = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case r:
              de = !0;
              break;
            case v:
              return de = E._init, w(
                de(E._payload),
                L,
                W,
                ie,
                ge
              );
          }
      }
    if (de)
      return ge = ge(E), de = ie === "" ? "." + F(E, 0) : ie, X(ge) ? (W = "", de != null && (W = de.replace(ye, "$&/") + "/"), w(ge, L, W, "", function(gn) {
        return gn;
      })) : ge != null && (Q(ge) && (ge = K(
        ge,
        W + (ge.key == null || E && E.key === ge.key ? "" : ("" + ge.key).replace(
          ye,
          "$&/"
        ) + "/") + de
      )), L.push(ge)), 1;
    de = 0;
    var We = ie === "" ? "." : ie + ":";
    if (X(E))
      for (var Ne = 0; Ne < E.length; Ne++)
        ie = E[Ne], Se = We + F(ie, Ne), de += w(
          ie,
          L,
          W,
          Se,
          ge
        );
    else if (Ne = N(E), typeof Ne == "function")
      for (E = Ne.call(E), Ne = 0; !(ie = E.next()).done; )
        ie = ie.value, Se = We + F(ie, Ne++), de += w(
          ie,
          L,
          W,
          Se,
          ge
        );
    else if (Se === "object") {
      if (typeof E.then == "function")
        return w(
          le(E),
          L,
          W,
          ie,
          ge
        );
      throw L = String(E), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return de;
  }
  function Y(E, L, W) {
    if (E == null) return E;
    var ie = [], ge = 0;
    return w(E, ie, "", "", function(Se) {
      return L.call(W, Se, ge++);
    }), ie;
  }
  function C(E) {
    if (E._status === -1) {
      var L = E._result;
      L = L(), L.then(
        function(W) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = W);
        },
        function(W) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = W);
        }
      ), E._status === -1 && (E._status = 0, E._result = L);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var P = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, J = {
    map: Y,
    forEach: function(E, L, W) {
      Y(
        E,
        function() {
          L.apply(this, arguments);
        },
        W
      );
    },
    count: function(E) {
      var L = 0;
      return Y(E, function() {
        L++;
      }), L;
    },
    toArray: function(E) {
      return Y(E, function(L) {
        return L;
      }) || [];
    },
    only: function(E) {
      if (!Q(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return _e.Activity = b, _e.Children = J, _e.Component = M, _e.Fragment = s, _e.Profiler = c, _e.PureComponent = H, _e.StrictMode = l, _e.Suspense = m, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, _e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return B.H.useMemoCache(E);
    }
  }, _e.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, _e.cacheSignal = function() {
    return null;
  }, _e.cloneElement = function(E, L, W) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var ie = x({}, E.props), ge = E.key;
    if (L != null)
      for (Se in L.key !== void 0 && (ge = "" + L.key), L)
        !ce.call(L, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && L.ref === void 0 || (ie[Se] = L[Se]);
    var Se = arguments.length - 2;
    if (Se === 1) ie.children = W;
    else if (1 < Se) {
      for (var de = Array(Se), We = 0; We < Se; We++)
        de[We] = arguments[We + 2];
      ie.children = de;
    }
    return re(E.type, ge, ie);
  }, _e.createContext = function(E) {
    return E = {
      $$typeof: f,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: d,
      _context: E
    }, E;
  }, _e.createElement = function(E, L, W) {
    var ie, ge = {}, Se = null;
    if (L != null)
      for (ie in L.key !== void 0 && (Se = "" + L.key), L)
        ce.call(L, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (ge[ie] = L[ie]);
    var de = arguments.length - 2;
    if (de === 1) ge.children = W;
    else if (1 < de) {
      for (var We = Array(de), Ne = 0; Ne < de; Ne++)
        We[Ne] = arguments[Ne + 2];
      ge.children = We;
    }
    if (E && E.defaultProps)
      for (ie in de = E.defaultProps, de)
        ge[ie] === void 0 && (ge[ie] = de[ie]);
    return re(E, Se, ge);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(E) {
    return { $$typeof: y, render: E };
  }, _e.isValidElement = Q, _e.lazy = function(E) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: E },
      _init: C
    };
  }, _e.memo = function(E, L) {
    return {
      $$typeof: g,
      type: E,
      compare: L === void 0 ? null : L
    };
  }, _e.startTransition = function(E) {
    var L = B.T, W = {};
    B.T = W;
    try {
      var ie = E(), ge = B.S;
      ge !== null && ge(W, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(ae, P);
    } catch (Se) {
      P(Se);
    } finally {
      L !== null && W.types !== null && (L.types = W.types), B.T = L;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return B.H.useCacheRefresh();
  }, _e.use = function(E) {
    return B.H.use(E);
  }, _e.useActionState = function(E, L, W) {
    return B.H.useActionState(E, L, W);
  }, _e.useCallback = function(E, L) {
    return B.H.useCallback(E, L);
  }, _e.useContext = function(E) {
    return B.H.useContext(E);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(E, L) {
    return B.H.useDeferredValue(E, L);
  }, _e.useEffect = function(E, L) {
    return B.H.useEffect(E, L);
  }, _e.useEffectEvent = function(E) {
    return B.H.useEffectEvent(E);
  }, _e.useId = function() {
    return B.H.useId();
  }, _e.useImperativeHandle = function(E, L, W) {
    return B.H.useImperativeHandle(E, L, W);
  }, _e.useInsertionEffect = function(E, L) {
    return B.H.useInsertionEffect(E, L);
  }, _e.useLayoutEffect = function(E, L) {
    return B.H.useLayoutEffect(E, L);
  }, _e.useMemo = function(E, L) {
    return B.H.useMemo(E, L);
  }, _e.useOptimistic = function(E, L) {
    return B.H.useOptimistic(E, L);
  }, _e.useReducer = function(E, L, W) {
    return B.H.useReducer(E, L, W);
  }, _e.useRef = function(E) {
    return B.H.useRef(E);
  }, _e.useState = function(E) {
    return B.H.useState(E);
  }, _e.useSyncExternalStore = function(E, L, W) {
    return B.H.useSyncExternalStore(
      E,
      L,
      W
    );
  }, _e.useTransition = function() {
    return B.H.useTransition();
  }, _e.version = "19.2.7", _e;
}
var Ah;
function fd() {
  return Ah || (Ah = 1, Ou.exports = Fb()), Ou.exports;
}
var te = fd();
const Wb = /* @__PURE__ */ Qb(te);
var Cu = { exports: {} }, Jr = {}, Du = { exports: {} }, zu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;
function Pb() {
  return Nh || (Nh = 1, (function(a) {
    function r(w, Y) {
      var C = w.length;
      w.push(Y);
      e: for (; 0 < C; ) {
        var P = C - 1 >>> 1, J = w[P];
        if (0 < c(J, Y))
          w[P] = Y, w[C] = J, C = P;
        else break e;
      }
    }
    function s(w) {
      return w.length === 0 ? null : w[0];
    }
    function l(w) {
      if (w.length === 0) return null;
      var Y = w[0], C = w.pop();
      if (C !== Y) {
        w[0] = C;
        e: for (var P = 0, J = w.length, E = J >>> 1; P < E; ) {
          var L = 2 * (P + 1) - 1, W = w[L], ie = L + 1, ge = w[ie];
          if (0 > c(W, C))
            ie < J && 0 > c(ge, W) ? (w[P] = ge, w[ie] = C, P = ie) : (w[P] = W, w[L] = C, P = L);
          else if (ie < J && 0 > c(ge, C))
            w[P] = ge, w[ie] = C, P = ie;
          else break e;
        }
      }
      return Y;
    }
    function c(w, Y) {
      var C = w.sortIndex - Y.sortIndex;
      return C !== 0 ? C : w.id - Y.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var f = Date, y = f.now();
      a.unstable_now = function() {
        return f.now() - y;
      };
    }
    var m = [], g = [], v = 1, b = null, _ = 3, N = !1, D = !1, x = !1, V = !1, M = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function Z(w) {
      for (var Y = s(g); Y !== null; ) {
        if (Y.callback === null) l(g);
        else if (Y.startTime <= w)
          l(g), Y.sortIndex = Y.expirationTime, r(m, Y);
        else break;
        Y = s(g);
      }
    }
    function X(w) {
      if (x = !1, Z(w), !D)
        if (s(m) !== null)
          D = !0, ae || (ae = !0, ue());
        else {
          var Y = s(g);
          Y !== null && le(X, Y.startTime - w);
        }
    }
    var ae = !1, B = -1, ce = 5, re = -1;
    function K() {
      return V ? !0 : !(a.unstable_now() - re < ce);
    }
    function Q() {
      if (V = !1, ae) {
        var w = a.unstable_now();
        re = w;
        var Y = !0;
        try {
          e: {
            D = !1, x && (x = !1, R(B), B = -1), N = !0;
            var C = _;
            try {
              t: {
                for (Z(w), b = s(m); b !== null && !(b.expirationTime > w && K()); ) {
                  var P = b.callback;
                  if (typeof P == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var J = P(
                      b.expirationTime <= w
                    );
                    if (w = a.unstable_now(), typeof J == "function") {
                      b.callback = J, Z(w), Y = !0;
                      break t;
                    }
                    b === s(m) && l(m), Z(w);
                  } else l(m);
                  b = s(m);
                }
                if (b !== null) Y = !0;
                else {
                  var E = s(g);
                  E !== null && le(
                    X,
                    E.startTime - w
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              b = null, _ = C, N = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? ue() : ae = !1;
        }
      }
    }
    var ue;
    if (typeof H == "function")
      ue = function() {
        H(Q);
      };
    else if (typeof MessageChannel < "u") {
      var ye = new MessageChannel(), F = ye.port2;
      ye.port1.onmessage = Q, ue = function() {
        F.postMessage(null);
      };
    } else
      ue = function() {
        M(Q, 0);
      };
    function le(w, Y) {
      B = M(function() {
        w(a.unstable_now());
      }, Y);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, a.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ce = 0 < w ? Math.floor(1e3 / w) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, a.unstable_next = function(w) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = _;
      }
      var C = _;
      _ = Y;
      try {
        return w();
      } finally {
        _ = C;
      }
    }, a.unstable_requestPaint = function() {
      V = !0;
    }, a.unstable_runWithPriority = function(w, Y) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var C = _;
      _ = w;
      try {
        return Y();
      } finally {
        _ = C;
      }
    }, a.unstable_scheduleCallback = function(w, Y, C) {
      var P = a.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? P + C : P) : C = P, w) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = C + J, w = {
        id: v++,
        callback: Y,
        priorityLevel: w,
        startTime: C,
        expirationTime: J,
        sortIndex: -1
      }, C > P ? (w.sortIndex = C, r(g, w), s(m) === null && w === s(g) && (x ? (R(B), B = -1) : x = !0, le(X, C - P))) : (w.sortIndex = J, r(m, w), D || N || (D = !0, ae || (ae = !0, ue()))), w;
    }, a.unstable_shouldYield = K, a.unstable_wrapCallback = function(w) {
      var Y = _;
      return function() {
        var C = _;
        _ = Y;
        try {
          return w.apply(this, arguments);
        } finally {
          _ = C;
        }
      };
    };
  })(zu)), zu;
}
var jh;
function e0() {
  return jh || (jh = 1, Du.exports = Pb()), Du.exports;
}
var Ru = { exports: {} }, Et = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wh;
function t0() {
  if (wh) return Et;
  wh = 1;
  var a = fd();
  function r(m) {
    var g = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + m + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var l = {
    d: {
      f: s,
      r: function() {
        throw Error(r(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function d(m, g, v) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: m,
      containerInfo: g,
      implementation: v
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(m, g) {
    if (m === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Et.createPortal = function(m, g) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return d(m, g, null, v);
  }, Et.flushSync = function(m) {
    var g = f.T, v = l.p;
    try {
      if (f.T = null, l.p = 2, m) return m();
    } finally {
      f.T = g, l.p = v, l.d.f();
    }
  }, Et.preconnect = function(m, g) {
    typeof m == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, l.d.C(m, g));
  }, Et.prefetchDNS = function(m) {
    typeof m == "string" && l.d.D(m);
  }, Et.preinit = function(m, g) {
    if (typeof m == "string" && g && typeof g.as == "string") {
      var v = g.as, b = y(v, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, N = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? l.d.S(
        m,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: _,
          fetchPriority: N
        }
      ) : v === "script" && l.d.X(m, {
        crossOrigin: b,
        integrity: _,
        fetchPriority: N,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Et.preinitModule = function(m, g) {
    if (typeof m == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var v = y(
            g.as,
            g.crossOrigin
          );
          l.d.M(m, {
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && l.d.M(m);
  }, Et.preload = function(m, g) {
    if (typeof m == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var v = g.as, b = y(v, g.crossOrigin);
      l.d.L(m, v, {
        crossOrigin: b,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Et.preloadModule = function(m, g) {
    if (typeof m == "string")
      if (g) {
        var v = y(g.as, g.crossOrigin);
        l.d.m(m, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else l.d.m(m);
  }, Et.requestFormReset = function(m) {
    l.d.r(m);
  }, Et.unstable_batchedUpdates = function(m, g) {
    return m(g);
  }, Et.useFormState = function(m, g, v) {
    return f.H.useFormState(m, g, v);
  }, Et.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Et.version = "19.2.7", Et;
}
var $h;
function n0() {
  if ($h) return Ru.exports;
  $h = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Ru.exports = t0(), Ru.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mh;
function a0() {
  if (Mh) return Jr;
  Mh = 1;
  var a = e0(), r = fd(), s = n0();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (d(e) !== e)
      throw Error(l(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (i = o.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return m(o), e;
          if (u === i) return m(o), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== i.return) n = o, i = u;
      else {
        for (var p = !1, S = o.child; S; ) {
          if (S === n) {
            p = !0, n = o, i = u;
            break;
          }
          if (S === i) {
            p = !0, i = o, n = u;
            break;
          }
          S = S.sibling;
        }
        if (!p) {
          for (S = u.child; S; ) {
            if (S === n) {
              p = !0, n = u, i = o;
              break;
            }
            if (S === i) {
              p = !0, i = u, n = o;
              break;
            }
            S = S.sibling;
          }
          if (!p) throw Error(l(189));
        }
      }
      if (n.alternate !== i) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, _ = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), H = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), K = Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ye = Symbol.for("react.client.reference");
  function F(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case M:
        return "Profiler";
      case V:
        return "StrictMode";
      case X:
        return "Suspense";
      case ae:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case D:
          return "Portal";
        case H:
          return e.displayName || "Context";
        case R:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case B:
          return t = e.displayName || null, t !== null ? t : F(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return F(e(t));
          } catch {
          }
      }
    return null;
  }
  var le = Array.isArray, w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], J = -1;
  function E(e) {
    return { current: e };
  }
  function L(e) {
    0 > J || (e.current = P[J], P[J] = null, J--);
  }
  function W(e, t) {
    J++, P[J] = e.current, e.current = t;
  }
  var ie = E(null), ge = E(null), Se = E(null), de = E(null);
  function We(e, t) {
    switch (W(Se, t), W(ge, e), W(ie, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Im(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Im(t), e = Km(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    L(ie), W(ie, e);
  }
  function Ne() {
    L(ie), L(ge), L(Se);
  }
  function gn(e) {
    e.memoizedState !== null && W(de, e);
    var t = ie.current, n = Km(t, e.type);
    t !== n && (W(ge, e), W(ie, n));
  }
  function ln(e) {
    ge.current === e && (L(ie), L(ge)), de.current === e && (L(de), Ir._currentValue = C);
  }
  var ta, ne;
  function me(e) {
    if (ta === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ta = t && t[1] || "", ne = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ta + e + ne;
  }
  var Ke = !1;
  function rt(e, t) {
    if (!e || Ke) return "";
    Ke = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var I = function() {
                throw Error();
              };
              if (Object.defineProperty(I.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(I, []);
                } catch (U) {
                  var z = U;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (U) {
                  z = U;
                }
                e.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                z = U;
              }
              (I = e()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch (U) {
            if (U && z && typeof U.stack == "string")
              return [U.stack, z.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = i.DetermineComponentFrameRoot(), p = u[0], S = u[1];
      if (p && S) {
        var A = p.split(`
`), O = S.split(`
`);
        for (o = i = 0; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < O.length && !O[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === A.length || o === O.length)
          for (i = A.length - 1, o = O.length - 1; 1 <= i && 0 <= o && A[i] !== O[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (A[i] !== O[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || A[i] !== O[o]) {
                  var G = `
` + A[i].replace(" at new ", " at ");
                  return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      Ke = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? me(n) : "";
  }
  function xt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return me(e.type);
      case 16:
        return me("Lazy");
      case 13:
        return e.child !== t && t !== null ? me("Suspense Fallback") : me("Suspense");
      case 19:
        return me("SuspenseList");
      case 0:
      case 15:
        return rt(e.type, !1);
      case 11:
        return rt(e.type.render, !1);
      case 1:
        return rt(e.type, !0);
      case 31:
        return me("Activity");
      default:
        return "";
    }
  }
  function _t(e) {
    try {
      var t = "", n = null;
      do
        t += xt(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Mt = Object.prototype.hasOwnProperty, on = a.unstable_scheduleCallback, Pe = a.unstable_cancelCallback, li = a.unstable_shouldYield, na = a.unstable_requestPaint, At = a.unstable_now, vo = a.unstable_getCurrentPriorityLevel, _s = a.unstable_ImmediatePriority, ar = a.unstable_UserBlockingPriority, Ua = a.unstable_NormalPriority, bo = a.unstable_LowPriority, Es = a.unstable_IdlePriority, oi = a.log, xs = a.unstable_setDisableYieldValue, wn = null, ht = null;
  function $n(e) {
    if (typeof oi == "function" && xs(e), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(wn, e);
      } catch {
      }
  }
  var Nt = Math.clz32 ? Math.clz32 : aa, As = Math.log, So = Math.LN2;
  function aa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (As(e) / So | 0) | 0;
  }
  var ia = 256, jt = 262144, ci = 4194304;
  function yn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Xt(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, u = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var S = i & 134217727;
    return S !== 0 ? (i = S & ~u, i !== 0 ? o = yn(i) : (p &= S, p !== 0 ? o = yn(p) : n || (n = S & ~e, n !== 0 && (o = yn(n))))) : (S = i & ~u, S !== 0 ? o = yn(S) : p !== 0 ? o = yn(p) : n || (n = i & ~e, n !== 0 && (o = yn(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function ra(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ns(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ir() {
    var e = ci;
    return ci <<= 1, (ci & 62914560) === 0 && (ci = 4194304), e;
  }
  function ui(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function sa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function q(e, t, n, i, o, u) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var S = e.entanglements, A = e.expirationTimes, O = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var G = 31 - Nt(n), I = 1 << G;
      S[G] = 0, A[G] = -1;
      var z = O[G];
      if (z !== null)
        for (O[G] = null, G = 0; G < z.length; G++) {
          var U = z[G];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~I;
    }
    i !== 0 && ve(e, i, 0), u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t));
  }
  function ve(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Nt(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930;
  }
  function gt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - Nt(n), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), n &= ~o;
    }
  }
  function Va(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Ue(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Ue(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function vn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Vt() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : mh(e.type));
  }
  function Yt(e, t) {
    var n = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = n;
    }
  }
  var cn = Math.random().toString(36).slice(2), je = "__reactFiber$" + cn, Ze = "__reactProps$" + cn, bn = "__reactContainer$" + cn, _o = "__reactEvents$" + cn, Ry = "__reactListeners$" + cn, Ly = "__reactHandles$" + cn, Td = "__reactResources$" + cn, rr = "__reactMarker$" + cn;
  function Eo(e) {
    delete e[je], delete e[Ze], delete e[_o], delete e[Ry], delete e[Ly];
  }
  function di(e) {
    var t = e[je];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bn] || n[je]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Wm(e); e !== null; ) {
            if (n = e[je]) return n;
            e = Wm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function fi(e) {
    if (e = e[je] || e[bn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function sr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function pi(e) {
    var t = e[Td];
    return t || (t = e[Td] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ft(e) {
    e[rr] = !0;
  }
  var Od = /* @__PURE__ */ new Set(), Cd = {};
  function Ba(e, t) {
    mi(e, t), mi(e + "Capture", t);
  }
  function mi(e, t) {
    for (Cd[e] = t, e = 0; e < t.length; e++)
      Od.add(t[e]);
  }
  var Uy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Dd = {}, zd = {};
  function Vy(e) {
    return Mt.call(zd, e) ? !0 : Mt.call(Dd, e) ? !1 : Uy.test(e) ? zd[e] = !0 : (Dd[e] = !0, !1);
  }
  function js(e, t, n) {
    if (Vy(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function ws(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Mn(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  function Qt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Rd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function By(e, t, n) {
    var i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var o = i.get, u = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(p) {
          n = "" + p, u.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(p) {
          n = "" + p;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function xo(e) {
    if (!e._valueTracker) {
      var t = Rd(e) ? "checked" : "value";
      e._valueTracker = By(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ld(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = Rd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function $s(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Hy = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(
      Hy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ao(e, t, n, i, o, u, p, S) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? No(e, p, Qt(t)) : n != null ? No(e, p, Qt(n)) : i != null && e.removeAttribute("value"), o == null && u != null && (e.defaultChecked = !!u), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Qt(S) : e.removeAttribute("name");
  }
  function Ud(e, t, n, i, o, u, p, S) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        xo(e);
        return;
      }
      n = n != null ? "" + Qt(n) : "", t = t != null ? "" + Qt(t) : n, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = S ? e.checked : !!i, e.defaultChecked = !!i, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), xo(e);
  }
  function No(e, t, n) {
    t === "number" && $s(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function hi(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Qt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vd(e, t, n) {
    if (t != null && (t = "" + Qt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Qt(n) : "";
  }
  function Bd(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(l(92));
        if (le(i)) {
          if (1 < i.length) throw Error(l(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = Qt(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i), xo(e);
  }
  function gi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hd(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Gy.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Gd(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var o in t)
        i = t[o], t.hasOwnProperty(o) && n[o] !== i && Hd(e, o, i);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Hd(e, u, t[u]);
  }
  function jo(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ky = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ms(e) {
    return ky.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Tn() {
  }
  var wo = null;
  function $o(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var yi = null, vi = null;
  function qd(e) {
    var t = fi(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ze] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ao(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[Ze] || null;
                if (!o) throw Error(l(90));
                Ao(
                  i,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              i = n[t], i.form === e.form && Ld(i);
          }
          break e;
        case "textarea":
          Vd(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && hi(e, !!n.multiple, t, !1);
      }
    }
  }
  var Mo = !1;
  function kd(e, t, n) {
    if (Mo) return e(t, n);
    Mo = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (Mo = !1, (yi !== null || vi !== null) && (gl(), yi && (t = yi, e = vi, vi = yi = null, qd(t), e)))
        for (t = 0; t < e.length; t++) qd(e[t]);
    }
  }
  function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[Ze] || null;
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        l(231, t, typeof n)
      );
    return n;
  }
  var On = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), To = !1;
  if (On)
    try {
      var or = {};
      Object.defineProperty(or, "passive", {
        get: function() {
          To = !0;
        }
      }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
    } catch {
      To = !1;
    }
  var la = null, Oo = null, Ts = null;
  function Id() {
    if (Ts) return Ts;
    var e, t = Oo, n = t.length, i, o = "value" in la ? la.value : la.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (i = 1; i <= p && t[n - i] === o[u - i]; i++) ;
    return Ts = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Os(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Cs() {
    return !0;
  }
  function Kd() {
    return !1;
  }
  function Tt(e) {
    function t(n, i, o, u, p) {
      this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(u) : u[S]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Cs : Kd, this.isPropagationStopped = Kd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cs);
      },
      persist: function() {
      },
      isPersistent: Cs
    }), t;
  }
  var Ha = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ds = Tt(Ha), cr = b({}, Ha, { view: 0, detail: 0 }), Iy = Tt(cr), Co, Do, ur, zs = b({}, cr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ro,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? (Co = e.screenX - ur.screenX, Do = e.screenY - ur.screenY) : Do = Co = 0, ur = e), Co);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Do;
    }
  }), Xd = Tt(zs), Ky = b({}, zs, { dataTransfer: 0 }), Xy = Tt(Ky), Yy = b({}, cr, { relatedTarget: 0 }), zo = Tt(Yy), Qy = b({}, Ha, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jy = Tt(Qy), Zy = b({}, Ha, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Fy = Tt(Zy), Wy = b({}, Ha, { data: 0 }), Yd = Tt(Wy), Py = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ev = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, tv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = tv[e]) ? !!t[e] : !1;
  }
  function Ro() {
    return nv;
  }
  var av = b({}, cr, {
    key: function(e) {
      if (e.key) {
        var t = Py[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Os(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ev[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ro,
    charCode: function(e) {
      return e.type === "keypress" ? Os(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), iv = Tt(av), rv = b({}, zs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Qd = Tt(rv), sv = b({}, cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ro
  }), lv = Tt(sv), ov = b({}, Ha, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), cv = Tt(ov), uv = b({}, zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dv = Tt(uv), fv = b({}, Ha, {
    newState: 0,
    oldState: 0
  }), pv = Tt(fv), mv = [9, 13, 27, 32], Lo = On && "CompositionEvent" in window, dr = null;
  On && "documentMode" in document && (dr = document.documentMode);
  var hv = On && "TextEvent" in window && !dr, Jd = On && (!Lo || dr && 8 < dr && 11 >= dr), Zd = " ", Fd = !1;
  function Wd(e, t) {
    switch (e) {
      case "keyup":
        return mv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Pd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bi = !1;
  function gv(e, t) {
    switch (e) {
      case "compositionend":
        return Pd(t);
      case "keypress":
        return t.which !== 32 ? null : (Fd = !0, Zd);
      case "textInput":
        return e = t.data, e === Zd && Fd ? null : e;
      default:
        return null;
    }
  }
  function yv(e, t) {
    if (bi)
      return e === "compositionend" || !Lo && Wd(e, t) ? (e = Id(), Ts = Oo = la = null, bi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Jd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ef(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vv[e.type] : t === "textarea";
  }
  function tf(e, t, n, i) {
    yi ? vi ? vi.push(i) : vi = [i] : yi = i, t = xl(t, "onChange"), 0 < t.length && (n = new Ds(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var fr = null, pr = null;
  function bv(e) {
    Vm(e, 0);
  }
  function Rs(e) {
    var t = sr(e);
    if (Ld(t)) return e;
  }
  function nf(e, t) {
    if (e === "change") return t;
  }
  var af = !1;
  if (On) {
    var Uo;
    if (On) {
      var Vo = "oninput" in document;
      if (!Vo) {
        var rf = document.createElement("div");
        rf.setAttribute("oninput", "return;"), Vo = typeof rf.oninput == "function";
      }
      Uo = Vo;
    } else Uo = !1;
    af = Uo && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    fr && (fr.detachEvent("onpropertychange", lf), pr = fr = null);
  }
  function lf(e) {
    if (e.propertyName === "value" && Rs(pr)) {
      var t = [];
      tf(
        t,
        pr,
        e,
        $o(e)
      ), kd(bv, t);
    }
  }
  function Sv(e, t, n) {
    e === "focusin" ? (sf(), fr = t, pr = n, fr.attachEvent("onpropertychange", lf)) : e === "focusout" && sf();
  }
  function _v(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Rs(pr);
  }
  function Ev(e, t) {
    if (e === "click") return Rs(t);
  }
  function xv(e, t) {
    if (e === "input" || e === "change")
      return Rs(t);
  }
  function Av(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : Av;
  function mr(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Mt.call(t, o) || !Bt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function of(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cf(e, t) {
    var n = of(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t)
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = of(n);
    }
  }
  function uf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function df(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = $s(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = $s(e.document);
    }
    return t;
  }
  function Bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Nv = On && "documentMode" in document && 11 >= document.documentMode, Si = null, Ho = null, hr = null, Go = !1;
  function ff(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Go || Si == null || Si !== $s(i) || (i = Si, "selectionStart" in i && Bo(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), hr && mr(hr, i) || (hr = i, i = xl(Ho, "onSelect"), 0 < i.length && (t = new Ds(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = Si)));
  }
  function Ga(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var _i = {
    animationend: Ga("Animation", "AnimationEnd"),
    animationiteration: Ga("Animation", "AnimationIteration"),
    animationstart: Ga("Animation", "AnimationStart"),
    transitionrun: Ga("Transition", "TransitionRun"),
    transitionstart: Ga("Transition", "TransitionStart"),
    transitioncancel: Ga("Transition", "TransitionCancel"),
    transitionend: Ga("Transition", "TransitionEnd")
  }, qo = {}, pf = {};
  On && (pf = document.createElement("div").style, "AnimationEvent" in window || (delete _i.animationend.animation, delete _i.animationiteration.animation, delete _i.animationstart.animation), "TransitionEvent" in window || delete _i.transitionend.transition);
  function qa(e) {
    if (qo[e]) return qo[e];
    if (!_i[e]) return e;
    var t = _i[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in pf)
        return qo[e] = t[n];
    return e;
  }
  var mf = qa("animationend"), hf = qa("animationiteration"), gf = qa("animationstart"), jv = qa("transitionrun"), wv = qa("transitionstart"), $v = qa("transitioncancel"), yf = qa("transitionend"), vf = /* @__PURE__ */ new Map(), ko = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ko.push("scrollEnd");
  function un(e, t) {
    vf.set(e, t), Ba(t, [e]);
  }
  var Ls = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Zt = [], Ei = 0, Io = 0;
  function Us() {
    for (var e = Ei, t = Io = Ei = 0; t < e; ) {
      var n = Zt[t];
      Zt[t++] = null;
      var i = Zt[t];
      Zt[t++] = null;
      var o = Zt[t];
      Zt[t++] = null;
      var u = Zt[t];
      if (Zt[t++] = null, i !== null && o !== null) {
        var p = i.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), i.pending = o;
      }
      u !== 0 && bf(n, o, u);
    }
  }
  function Vs(e, t, n, i) {
    Zt[Ei++] = e, Zt[Ei++] = t, Zt[Ei++] = n, Zt[Ei++] = i, Io |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Ko(e, t, n, i) {
    return Vs(e, t, n, i), Bs(e);
  }
  function ka(e, t) {
    return Vs(e, null, null, t), Bs(e);
  }
  function bf(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, u = e.return; u !== null; )
      u.childLanes |= n, i = u.alternate, i !== null && (i.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (o = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, o && t !== null && (o = 31 - Nt(n), e = u.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), u) : null;
  }
  function Bs(e) {
    if (50 < Ur)
      throw Ur = 0, eu = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var xi = {};
  function Mv(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, i) {
    return new Mv(e, t, n, i);
  }
  function Xo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Sf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Hs(e, t, n, i, o, u) {
    var p = 0;
    if (i = e, typeof e == "function") Xo(e) && (p = 1);
    else if (typeof e == "string")
      p = zb(
        e,
        n,
        ie.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case re:
          return e = Ht(31, n, t, o), e.elementType = re, e.lanes = u, e;
        case x:
          return Ia(n.children, o, u, t);
        case V:
          p = 8, o |= 24;
          break;
        case M:
          return e = Ht(12, n, t, o | 2), e.elementType = M, e.lanes = u, e;
        case X:
          return e = Ht(13, n, t, o), e.elementType = X, e.lanes = u, e;
        case ae:
          return e = Ht(19, n, t, o), e.elementType = ae, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case H:
                p = 10;
                break e;
              case R:
                p = 9;
                break e;
              case Z:
                p = 11;
                break e;
              case B:
                p = 14;
                break e;
              case ce:
                p = 16, i = null;
                break e;
            }
          p = 29, n = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Ht(p, n, t, o), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function Ia(e, t, n, i) {
    return e = Ht(7, e, i, t), e.lanes = n, e;
  }
  function Yo(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function _f(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Qo(e, t, n) {
    return t = Ht(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ef = /* @__PURE__ */ new WeakMap();
  function Ft(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ef.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: _t(t)
      }, Ef.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: _t(t)
    };
  }
  var Ai = [], Ni = 0, Gs = null, gr = 0, Wt = [], Pt = 0, oa = null, Sn = 1, _n = "";
  function Dn(e, t) {
    Ai[Ni++] = gr, Ai[Ni++] = Gs, Gs = e, gr = t;
  }
  function xf(e, t, n) {
    Wt[Pt++] = Sn, Wt[Pt++] = _n, Wt[Pt++] = oa, oa = e;
    var i = Sn;
    e = _n;
    var o = 32 - Nt(i) - 1;
    i &= ~(1 << o), n += 1;
    var u = 32 - Nt(t) + o;
    if (30 < u) {
      var p = o - o % 5;
      u = (i & (1 << p) - 1).toString(32), i >>= p, o -= p, Sn = 1 << 32 - Nt(t) + o | n << o | i, _n = u + e;
    } else
      Sn = 1 << u | n << o | i, _n = e;
  }
  function Jo(e) {
    e.return !== null && (Dn(e, 1), xf(e, 1, 0));
  }
  function Zo(e) {
    for (; e === Gs; )
      Gs = Ai[--Ni], Ai[Ni] = null, gr = Ai[--Ni], Ai[Ni] = null;
    for (; e === oa; )
      oa = Wt[--Pt], Wt[Pt] = null, _n = Wt[--Pt], Wt[Pt] = null, Sn = Wt[--Pt], Wt[Pt] = null;
  }
  function Af(e, t) {
    Wt[Pt++] = Sn, Wt[Pt++] = _n, Wt[Pt++] = oa, Sn = t.id, _n = t.overflow, oa = e;
  }
  var yt = null, Ye = null, Oe = !1, ca = null, en = !1, Fo = Error(l(519));
  function ua(e) {
    var t = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw yr(Ft(t, e)), Fo;
  }
  function Nf(e) {
    var t = e.stateNode, n = e.type, i = e.memoizedProps;
    switch (t[je] = e, t[Ze] = i, n) {
      case "dialog":
        $e("cancel", t), $e("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        $e("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Br.length; n++)
          $e(Br[n], t);
        break;
      case "source":
        $e("error", t);
        break;
      case "img":
      case "image":
      case "link":
        $e("error", t), $e("load", t);
        break;
      case "details":
        $e("toggle", t);
        break;
      case "input":
        $e("invalid", t), Ud(
          t,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        $e("invalid", t);
        break;
      case "textarea":
        $e("invalid", t), Bd(t, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || qm(t.textContent, n) ? (i.popover != null && ($e("beforetoggle", t), $e("toggle", t)), i.onScroll != null && $e("scroll", t), i.onScrollEnd != null && $e("scrollend", t), i.onClick != null && (t.onclick = Tn), t = !0) : t = !1, t || ua(e, !0);
  }
  function jf(e) {
    for (yt = e.return; yt; )
      switch (yt.tag) {
        case 5:
        case 31:
        case 13:
          en = !1;
          return;
        case 27:
        case 3:
          en = !0;
          return;
        default:
          yt = yt.return;
      }
  }
  function ji(e) {
    if (e !== yt) return !1;
    if (!Oe) return jf(e), Oe = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || hu(e.type, e.memoizedProps)), n = !n), n && Ye && ua(e), jf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ye = Fm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Ye = Fm(e);
    } else
      t === 27 ? (t = Ye, Aa(e.type) ? (e = Su, Su = null, Ye = e) : Ye = t) : Ye = yt ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ka() {
    Ye = yt = null, Oe = !1;
  }
  function Wo() {
    var e = ca;
    return e !== null && (zt === null ? zt = e : zt.push.apply(
      zt,
      e
    ), ca = null), e;
  }
  function yr(e) {
    ca === null ? ca = [e] : ca.push(e);
  }
  var Po = E(null), Xa = null, zn = null;
  function da(e, t, n) {
    W(Po, t._currentValue), t._currentValue = n;
  }
  function Rn(e) {
    e._currentValue = Po.current, L(Po);
  }
  function ec(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function tc(e, t, n, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var p = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var S = u;
          u = o;
          for (var A = 0; A < t.length; A++)
            if (S.context === t[A]) {
              u.lanes |= n, S = u.alternate, S !== null && (S.lanes |= n), ec(
                u.return,
                n,
                e
              ), i || (p = null);
              break e;
            }
          u = S.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(l(341));
        p.lanes |= n, u = p.alternate, u !== null && (u.lanes |= n), ec(p, n, e), p = null;
      } else p = o.child;
      if (p !== null) p.return = o;
      else
        for (p = o; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (o = p.sibling, o !== null) {
            o.return = p.return, p = o;
            break;
          }
          p = p.return;
        }
      o = p;
    }
  }
  function wi(e, t, n, i) {
    e = null;
    for (var o = t, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(l(387));
        if (p = p.memoizedProps, p !== null) {
          var S = o.type;
          Bt(o.pendingProps.value, p.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (o === de.current) {
        if (p = o.alternate, p === null) throw Error(l(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Ir) : e = [Ir]);
      }
      o = o.return;
    }
    e !== null && tc(
      t,
      e,
      n,
      i
    ), t.flags |= 262144;
  }
  function qs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Bt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ya(e) {
    Xa = e, zn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function vt(e) {
    return wf(Xa, e);
  }
  function ks(e, t) {
    return Xa === null && Ya(e), wf(e, t);
  }
  function wf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, zn === null) {
      if (e === null) throw Error(l(308));
      zn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else zn = zn.next = t;
    return n;
  }
  var Tv = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        e.push(i);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Ov = a.unstable_scheduleCallback, Cv = a.unstable_NormalPriority, st = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function nc() {
    return {
      controller: new Tv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vr(e) {
    e.refCount--, e.refCount === 0 && Ov(Cv, function() {
      e.controller.abort();
    });
  }
  var br = null, ac = 0, $i = 0, Mi = null;
  function Dv(e, t) {
    if (br === null) {
      var n = br = [];
      ac = 0, $i = su(), Mi = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return ac++, t.then($f, $f), t;
  }
  function $f() {
    if (--ac === 0 && br !== null) {
      Mi !== null && (Mi.status = "fulfilled");
      var e = br;
      br = null, $i = 0, Mi = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function zv(e, t) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return e.then(
      function() {
        i.status = "fulfilled", i.value = t;
        for (var o = 0; o < n.length; o++) (0, n[o])(t);
      },
      function(o) {
        for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), i;
  }
  var Mf = w.S;
  w.S = function(e, t) {
    fm = At(), typeof t == "object" && t !== null && typeof t.then == "function" && Dv(e, t), Mf !== null && Mf(e, t);
  };
  var Qa = E(null);
  function ic() {
    var e = Qa.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function Is(e, t) {
    t === null ? W(Qa, Qa.current) : W(Qa, t.pool);
  }
  function Tf() {
    var e = ic();
    return e === null ? null : { parent: st._currentValue, pool: e };
  }
  var Ti = Error(l(460)), rc = Error(l(474)), Ks = Error(l(542)), Xs = { then: function() {
  } };
  function Of(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Cf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Tn, Tn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, zf(e), e;
      default:
        if (typeof t.status == "string") t.then(Tn, Tn);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = t, e.status = "pending", e.then(
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = i;
              }
            },
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = i;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, zf(e), e;
        }
        throw Za = t, Ti;
    }
  }
  function Ja(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Za = n, Ti) : n;
    }
  }
  var Za = null;
  function Df() {
    if (Za === null) throw Error(l(459));
    var e = Za;
    return Za = null, e;
  }
  function zf(e) {
    if (e === Ti || e === Ks)
      throw Error(l(483));
  }
  var Oi = null, Sr = 0;
  function Ys(e) {
    var t = Sr;
    return Sr += 1, Oi === null && (Oi = []), Cf(Oi, e, t);
  }
  function _r(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Qs(e, t) {
    throw t.$$typeof === _ ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Rf(e) {
    function t($, j) {
      if (e) {
        var T = $.deletions;
        T === null ? ($.deletions = [j], $.flags |= 16) : T.push(j);
      }
    }
    function n($, j) {
      if (!e) return null;
      for (; j !== null; )
        t($, j), j = j.sibling;
      return null;
    }
    function i($) {
      for (var j = /* @__PURE__ */ new Map(); $ !== null; )
        $.key !== null ? j.set($.key, $) : j.set($.index, $), $ = $.sibling;
      return j;
    }
    function o($, j) {
      return $ = Cn($, j), $.index = 0, $.sibling = null, $;
    }
    function u($, j, T) {
      return $.index = T, e ? (T = $.alternate, T !== null ? (T = T.index, T < j ? ($.flags |= 67108866, j) : T) : ($.flags |= 67108866, j)) : ($.flags |= 1048576, j);
    }
    function p($) {
      return e && $.alternate === null && ($.flags |= 67108866), $;
    }
    function S($, j, T, k) {
      return j === null || j.tag !== 6 ? (j = Yo(T, $.mode, k), j.return = $, j) : (j = o(j, T), j.return = $, j);
    }
    function A($, j, T, k) {
      var fe = T.type;
      return fe === x ? G(
        $,
        j,
        T.props.children,
        k,
        T.key
      ) : j !== null && (j.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === ce && Ja(fe) === j.type) ? (j = o(j, T.props), _r(j, T), j.return = $, j) : (j = Hs(
        T.type,
        T.key,
        T.props,
        null,
        $.mode,
        k
      ), _r(j, T), j.return = $, j);
    }
    function O($, j, T, k) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== T.containerInfo || j.stateNode.implementation !== T.implementation ? (j = Qo(T, $.mode, k), j.return = $, j) : (j = o(j, T.children || []), j.return = $, j);
    }
    function G($, j, T, k, fe) {
      return j === null || j.tag !== 7 ? (j = Ia(
        T,
        $.mode,
        k,
        fe
      ), j.return = $, j) : (j = o(j, T), j.return = $, j);
    }
    function I($, j, T) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Yo(
          "" + j,
          $.mode,
          T
        ), j.return = $, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case N:
            return T = Hs(
              j.type,
              j.key,
              j.props,
              null,
              $.mode,
              T
            ), _r(T, j), T.return = $, T;
          case D:
            return j = Qo(
              j,
              $.mode,
              T
            ), j.return = $, j;
          case ce:
            return j = Ja(j), I($, j, T);
        }
        if (le(j) || ue(j))
          return j = Ia(
            j,
            $.mode,
            T,
            null
          ), j.return = $, j;
        if (typeof j.then == "function")
          return I($, Ys(j), T);
        if (j.$$typeof === H)
          return I(
            $,
            ks($, j),
            T
          );
        Qs($, j);
      }
      return null;
    }
    function z($, j, T, k) {
      var fe = j !== null ? j.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return fe !== null ? null : S($, j, "" + T, k);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case N:
            return T.key === fe ? A($, j, T, k) : null;
          case D:
            return T.key === fe ? O($, j, T, k) : null;
          case ce:
            return T = Ja(T), z($, j, T, k);
        }
        if (le(T) || ue(T))
          return fe !== null ? null : G($, j, T, k, null);
        if (typeof T.then == "function")
          return z(
            $,
            j,
            Ys(T),
            k
          );
        if (T.$$typeof === H)
          return z(
            $,
            j,
            ks($, T),
            k
          );
        Qs($, T);
      }
      return null;
    }
    function U($, j, T, k, fe) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return $ = $.get(T) || null, S(j, $, "" + k, fe);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case N:
            return $ = $.get(
              k.key === null ? T : k.key
            ) || null, A(j, $, k, fe);
          case D:
            return $ = $.get(
              k.key === null ? T : k.key
            ) || null, O(j, $, k, fe);
          case ce:
            return k = Ja(k), U(
              $,
              j,
              T,
              k,
              fe
            );
        }
        if (le(k) || ue(k))
          return $ = $.get(T) || null, G(j, $, k, fe, null);
        if (typeof k.then == "function")
          return U(
            $,
            j,
            T,
            Ys(k),
            fe
          );
        if (k.$$typeof === H)
          return U(
            $,
            j,
            T,
            ks(j, k),
            fe
          );
        Qs(j, k);
      }
      return null;
    }
    function se($, j, T, k) {
      for (var fe = null, ze = null, oe = j, Ae = j = 0, Te = null; oe !== null && Ae < T.length; Ae++) {
        oe.index > Ae ? (Te = oe, oe = null) : Te = oe.sibling;
        var Re = z(
          $,
          oe,
          T[Ae],
          k
        );
        if (Re === null) {
          oe === null && (oe = Te);
          break;
        }
        e && oe && Re.alternate === null && t($, oe), j = u(Re, j, Ae), ze === null ? fe = Re : ze.sibling = Re, ze = Re, oe = Te;
      }
      if (Ae === T.length)
        return n($, oe), Oe && Dn($, Ae), fe;
      if (oe === null) {
        for (; Ae < T.length; Ae++)
          oe = I($, T[Ae], k), oe !== null && (j = u(
            oe,
            j,
            Ae
          ), ze === null ? fe = oe : ze.sibling = oe, ze = oe);
        return Oe && Dn($, Ae), fe;
      }
      for (oe = i(oe); Ae < T.length; Ae++)
        Te = U(
          oe,
          $,
          Ae,
          T[Ae],
          k
        ), Te !== null && (e && Te.alternate !== null && oe.delete(
          Te.key === null ? Ae : Te.key
        ), j = u(
          Te,
          j,
          Ae
        ), ze === null ? fe = Te : ze.sibling = Te, ze = Te);
      return e && oe.forEach(function(Ma) {
        return t($, Ma);
      }), Oe && Dn($, Ae), fe;
    }
    function pe($, j, T, k) {
      if (T == null) throw Error(l(151));
      for (var fe = null, ze = null, oe = j, Ae = j = 0, Te = null, Re = T.next(); oe !== null && !Re.done; Ae++, Re = T.next()) {
        oe.index > Ae ? (Te = oe, oe = null) : Te = oe.sibling;
        var Ma = z($, oe, Re.value, k);
        if (Ma === null) {
          oe === null && (oe = Te);
          break;
        }
        e && oe && Ma.alternate === null && t($, oe), j = u(Ma, j, Ae), ze === null ? fe = Ma : ze.sibling = Ma, ze = Ma, oe = Te;
      }
      if (Re.done)
        return n($, oe), Oe && Dn($, Ae), fe;
      if (oe === null) {
        for (; !Re.done; Ae++, Re = T.next())
          Re = I($, Re.value, k), Re !== null && (j = u(Re, j, Ae), ze === null ? fe = Re : ze.sibling = Re, ze = Re);
        return Oe && Dn($, Ae), fe;
      }
      for (oe = i(oe); !Re.done; Ae++, Re = T.next())
        Re = U(oe, $, Ae, Re.value, k), Re !== null && (e && Re.alternate !== null && oe.delete(Re.key === null ? Ae : Re.key), j = u(Re, j, Ae), ze === null ? fe = Re : ze.sibling = Re, ze = Re);
      return e && oe.forEach(function(Kb) {
        return t($, Kb);
      }), Oe && Dn($, Ae), fe;
    }
    function ke($, j, T, k) {
      if (typeof T == "object" && T !== null && T.type === x && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case N:
            e: {
              for (var fe = T.key; j !== null; ) {
                if (j.key === fe) {
                  if (fe = T.type, fe === x) {
                    if (j.tag === 7) {
                      n(
                        $,
                        j.sibling
                      ), k = o(
                        j,
                        T.props.children
                      ), k.return = $, $ = k;
                      break e;
                    }
                  } else if (j.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === ce && Ja(fe) === j.type) {
                    n(
                      $,
                      j.sibling
                    ), k = o(j, T.props), _r(k, T), k.return = $, $ = k;
                    break e;
                  }
                  n($, j);
                  break;
                } else t($, j);
                j = j.sibling;
              }
              T.type === x ? (k = Ia(
                T.props.children,
                $.mode,
                k,
                T.key
              ), k.return = $, $ = k) : (k = Hs(
                T.type,
                T.key,
                T.props,
                null,
                $.mode,
                k
              ), _r(k, T), k.return = $, $ = k);
            }
            return p($);
          case D:
            e: {
              for (fe = T.key; j !== null; ) {
                if (j.key === fe)
                  if (j.tag === 4 && j.stateNode.containerInfo === T.containerInfo && j.stateNode.implementation === T.implementation) {
                    n(
                      $,
                      j.sibling
                    ), k = o(j, T.children || []), k.return = $, $ = k;
                    break e;
                  } else {
                    n($, j);
                    break;
                  }
                else t($, j);
                j = j.sibling;
              }
              k = Qo(T, $.mode, k), k.return = $, $ = k;
            }
            return p($);
          case ce:
            return T = Ja(T), ke(
              $,
              j,
              T,
              k
            );
        }
        if (le(T))
          return se(
            $,
            j,
            T,
            k
          );
        if (ue(T)) {
          if (fe = ue(T), typeof fe != "function") throw Error(l(150));
          return T = fe.call(T), pe(
            $,
            j,
            T,
            k
          );
        }
        if (typeof T.then == "function")
          return ke(
            $,
            j,
            Ys(T),
            k
          );
        if (T.$$typeof === H)
          return ke(
            $,
            j,
            ks($, T),
            k
          );
        Qs($, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, j !== null && j.tag === 6 ? (n($, j.sibling), k = o(j, T), k.return = $, $ = k) : (n($, j), k = Yo(T, $.mode, k), k.return = $, $ = k), p($)) : n($, j);
    }
    return function($, j, T, k) {
      try {
        Sr = 0;
        var fe = ke(
          $,
          j,
          T,
          k
        );
        return Oi = null, fe;
      } catch (oe) {
        if (oe === Ti || oe === Ks) throw oe;
        var ze = Ht(29, oe, null, $.mode);
        return ze.lanes = k, ze.return = $, ze;
      } finally {
      }
    };
  }
  var Fa = Rf(!0), Lf = Rf(!1), fa = !1;
  function sc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function lc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function pa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ma(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Le & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Bs(e), bf(e, null, n), t;
    }
    return Vs(e, i, t, n), Bs(e);
  }
  function Er(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, gt(e, n);
    }
  }
  function oc(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? o = u = p : u = u.next = p, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var cc = !1;
  function xr() {
    if (cc) {
      var e = Mi;
      if (e !== null) throw e;
    }
  }
  function Ar(e, t, n, i) {
    cc = !1;
    var o = e.updateQueue;
    fa = !1;
    var u = o.firstBaseUpdate, p = o.lastBaseUpdate, S = o.shared.pending;
    if (S !== null) {
      o.shared.pending = null;
      var A = S, O = A.next;
      A.next = null, p === null ? u = O : p.next = O, p = A;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, S = G.lastBaseUpdate, S !== p && (S === null ? G.firstBaseUpdate = O : S.next = O, G.lastBaseUpdate = A));
    }
    if (u !== null) {
      var I = o.baseState;
      p = 0, G = O = A = null, S = u;
      do {
        var z = S.lane & -536870913, U = z !== S.lane;
        if (U ? (Me & z) === z : (i & z) === z) {
          z !== 0 && z === $i && (cc = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var se = e, pe = S;
            z = t;
            var ke = n;
            switch (pe.tag) {
              case 1:
                if (se = pe.payload, typeof se == "function") {
                  I = se.call(ke, I, z);
                  break e;
                }
                I = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = pe.payload, z = typeof se == "function" ? se.call(ke, I, z) : se, z == null) break e;
                I = b({}, I, z);
                break e;
              case 2:
                fa = !0;
            }
          }
          z = S.callback, z !== null && (e.flags |= 64, U && (e.flags |= 8192), U = o.callbacks, U === null ? o.callbacks = [z] : U.push(z));
        } else
          U = {
            lane: z,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, G === null ? (O = G = U, A = I) : G = G.next = U, p |= z;
        if (S = S.next, S === null) {
          if (S = o.shared.pending, S === null)
            break;
          U = S, S = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null;
        }
      } while (!0);
      G === null && (A = I), o.baseState = A, o.firstBaseUpdate = O, o.lastBaseUpdate = G, u === null && (o.shared.lanes = 0), ba |= p, e.lanes = p, e.memoizedState = I;
    }
  }
  function Uf(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function Vf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Uf(n[e], t);
  }
  var Ci = E(null), Js = E(0);
  function Bf(e, t) {
    e = In, W(Js, e), W(Ci, t), In = e | t.baseLanes;
  }
  function uc() {
    W(Js, In), W(Ci, Ci.current);
  }
  function dc() {
    In = Js.current, L(Ci), L(Js);
  }
  var Gt = E(null), tn = null;
  function ha(e) {
    var t = e.alternate;
    W(at, at.current & 1), W(Gt, e), tn === null && (t === null || Ci.current !== null || t.memoizedState !== null) && (tn = e);
  }
  function fc(e) {
    W(at, at.current), W(Gt, e), tn === null && (tn = e);
  }
  function Hf(e) {
    e.tag === 22 ? (W(at, at.current), W(Gt, e), tn === null && (tn = e)) : ga();
  }
  function ga() {
    W(at, at.current), W(Gt, Gt.current);
  }
  function qt(e) {
    L(Gt), tn === e && (tn = null), L(at);
  }
  var at = E(0);
  function Zs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || vu(n) || bu(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ln = 0, xe = null, Ge = null, lt = null, Fs = !1, Di = !1, Wa = !1, Ws = 0, Nr = 0, zi = null, Rv = 0;
  function et() {
    throw Error(l(321));
  }
  function pc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function mc(e, t, n, i, o, u) {
    return Ln = u, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? xp : Mc, Wa = !1, u = n(i, o), Wa = !1, Di && (u = qf(
      t,
      n,
      i,
      o
    )), Gf(e), u;
  }
  function Gf(e) {
    w.H = $r;
    var t = Ge !== null && Ge.next !== null;
    if (Ln = 0, lt = Ge = xe = null, Fs = !1, Nr = 0, zi = null, t) throw Error(l(300));
    e === null || ot || (e = e.dependencies, e !== null && qs(e) && (ot = !0));
  }
  function qf(e, t, n, i) {
    xe = e;
    var o = 0;
    do {
      if (Di && (zi = null), Nr = 0, Di = !1, 25 <= o) throw Error(l(301));
      if (o += 1, lt = Ge = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      w.H = Ap, u = t(n, i);
    } while (Di);
    return u;
  }
  function Lv() {
    var e = w.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? jr(t) : t, e = e.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function hc() {
    var e = Ws !== 0;
    return Ws = 0, e;
  }
  function gc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function yc(e) {
    if (Fs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Fs = !1;
    }
    Ln = 0, lt = Ge = xe = null, Di = !1, Nr = Ws = 0, zi = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? xe.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function it() {
    if (Ge === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = lt === null ? xe.memoizedState : lt.next;
    if (t !== null)
      lt = t, Ge = e;
    else {
      if (e === null)
        throw xe.alternate === null ? Error(l(467)) : Error(l(310));
      Ge = e, e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null
      }, lt === null ? xe.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function Ps() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function jr(e) {
    var t = Nr;
    return Nr += 1, zi === null && (zi = []), e = Cf(zi, e, t), t = xe, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? xp : Mc), e;
  }
  function el(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return jr(e);
      if (e.$$typeof === H) return vt(e);
    }
    throw Error(l(438, String(e)));
  }
  function vc(e) {
    var t = null, n = xe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var i = xe.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ps(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = K;
    return t.index++, n;
  }
  function Un(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function tl(e) {
    var t = it();
    return bc(t, Ge, e);
  }
  function bc(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = n;
    var o = e.baseQueue, u = i.pending;
    if (u !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = u.next, u.next = p;
      }
      t.baseQueue = o = u, i.pending = null;
    }
    if (u = e.baseState, o === null) e.memoizedState = u;
    else {
      t = o.next;
      var S = p = null, A = null, O = t, G = !1;
      do {
        var I = O.lane & -536870913;
        if (I !== O.lane ? (Me & I) === I : (Ln & I) === I) {
          var z = O.revertLane;
          if (z === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), I === $i && (G = !0);
          else if ((Ln & z) === z) {
            O = O.next, z === $i && (G = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, A === null ? (S = A = I, p = u) : A = A.next = I, xe.lanes |= z, ba |= z;
          I = O.action, Wa && n(u, I), u = O.hasEagerState ? O.eagerState : n(u, I);
        } else
          z = {
            lane: I,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, A === null ? (S = A = z, p = u) : A = A.next = z, xe.lanes |= I, ba |= I;
        O = O.next;
      } while (O !== null && O !== t);
      if (A === null ? p = u : A.next = S, !Bt(u, e.memoizedState) && (ot = !0, G && (n = Mi, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = p, e.baseQueue = A, i.lastRenderedState = u;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function Sc(e) {
    var t = it(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        u = e(u, p.action), p = p.next;
      while (p !== o);
      Bt(u, t.memoizedState) || (ot = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function kf(e, t, n) {
    var i = xe, o = it(), u = Oe;
    if (u) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else n = t();
    var p = !Bt(
      (Ge || o).memoizedState,
      n
    );
    if (p && (o.memoizedState = n, ot = !0), o = o.queue, xc(Xf.bind(null, i, o, e), [
      e
    ]), o.getSnapshot !== t || p || lt !== null && lt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ri(
        9,
        { destroy: void 0 },
        Kf.bind(
          null,
          i,
          o,
          n,
          t
        ),
        null
      ), Xe === null) throw Error(l(349));
      u || (Ln & 127) !== 0 || If(i, t, n);
    }
    return n;
  }
  function If(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = Ps(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Kf(e, t, n, i) {
    t.value = n, t.getSnapshot = i, Yf(t) && Qf(e);
  }
  function Xf(e, t, n) {
    return n(function() {
      Yf(t) && Qf(e);
    });
  }
  function Yf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function Qf(e) {
    var t = ka(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function _c(e) {
    var t = wt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Wa) {
        $n(!0);
        try {
          n();
        } finally {
          $n(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Un,
      lastRenderedState: e
    }, t;
  }
  function Jf(e, t, n, i) {
    return e.baseState = n, bc(
      e,
      Ge,
      typeof i == "function" ? i : Un
    );
  }
  function Uv(e, t, n, i, o) {
    if (il(e)) throw Error(l(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          u.listeners.push(p);
        }
      };
      w.T !== null ? n(!0) : u.isTransition = !1, i(u), n = t.pending, n === null ? (u.next = t.pending = u, Zf(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Zf(e, t) {
    var n = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var u = w.T, p = {};
      w.T = p;
      try {
        var S = n(o, i), A = w.S;
        A !== null && A(p, S), Ff(e, t, S);
      } catch (O) {
        Ec(e, t, O);
      } finally {
        u !== null && p.types !== null && (u.types = p.types), w.T = u;
      }
    } else
      try {
        u = n(o, i), Ff(e, t, u);
      } catch (O) {
        Ec(e, t, O);
      }
  }
  function Ff(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        Wf(e, t, i);
      },
      function(i) {
        return Ec(e, t, i);
      }
    ) : Wf(e, t, n);
  }
  function Wf(e, t, n) {
    t.status = "fulfilled", t.value = n, Pf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Zf(e, n)));
  }
  function Ec(e, t, n) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = n, Pf(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Pf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ep(e, t) {
    return t;
  }
  function tp(e, t) {
    if (Oe) {
      var n = Xe.formState;
      if (n !== null) {
        e: {
          var i = xe;
          if (Oe) {
            if (Ye) {
              t: {
                for (var o = Ye, u = en; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break t;
                  }
                  if (o = nn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                u = o.data, o = u === "F!" || u === "F" ? o : null;
              }
              if (o) {
                Ye = nn(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            ua(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return n = wt(), n.memoizedState = n.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ep,
      lastRenderedState: t
    }, n.queue = i, n = Sp.bind(
      null,
      xe,
      i
    ), i.dispatch = n, i = _c(!1), u = $c.bind(
      null,
      xe,
      !1,
      i.queue
    ), i = wt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, n = Uv.bind(
      null,
      xe,
      o,
      u,
      n
    ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function np(e) {
    var t = it();
    return ap(t, Ge, e);
  }
  function ap(e, t, n) {
    if (t = bc(
      e,
      t,
      ep
    )[0], e = tl(Un)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = jr(t);
      } catch (p) {
        throw p === Ti ? Ks : p;
      }
    else i = t;
    t = it();
    var o = t.queue, u = o.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, Ri(
      9,
      { destroy: void 0 },
      Vv.bind(null, o, n),
      null
    )), [i, u, e];
  }
  function Vv(e, t) {
    e.action = t;
  }
  function ip(e) {
    var t = it(), n = Ge;
    if (n !== null)
      return ap(t, n, e);
    it(), t = t.memoizedState, n = it();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function Ri(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = xe.updateQueue, t === null && (t = Ps(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function rp() {
    return it().memoizedState;
  }
  function nl(e, t, n, i) {
    var o = wt();
    xe.flags |= e, o.memoizedState = Ri(
      1 | t,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function al(e, t, n, i) {
    var o = it();
    i = i === void 0 ? null : i;
    var u = o.memoizedState.inst;
    Ge !== null && i !== null && pc(i, Ge.memoizedState.deps) ? o.memoizedState = Ri(t, u, n, i) : (xe.flags |= e, o.memoizedState = Ri(
      1 | t,
      u,
      n,
      i
    ));
  }
  function sp(e, t) {
    nl(8390656, 8, e, t);
  }
  function xc(e, t) {
    al(2048, 8, e, t);
  }
  function Bv(e) {
    xe.flags |= 4;
    var t = xe.updateQueue;
    if (t === null)
      t = Ps(), xe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function lp(e) {
    var t = it().memoizedState;
    return Bv({ ref: t, nextImpl: e }), function() {
      if ((Le & 2) !== 0) throw Error(l(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function op(e, t) {
    return al(4, 2, e, t);
  }
  function cp(e, t) {
    return al(4, 4, e, t);
  }
  function up(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function dp(e, t, n) {
    n = n != null ? n.concat([e]) : null, al(4, 4, up.bind(null, t, e), n);
  }
  function Ac() {
  }
  function fp(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && pc(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function pp(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && pc(t, i[1]))
      return i[0];
    if (i = e(), Wa) {
      $n(!0);
      try {
        e();
      } finally {
        $n(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function Nc(e, t, n) {
    return n === void 0 || (Ln & 1073741824) !== 0 && (Me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = mm(), xe.lanes |= e, ba |= e, n);
  }
  function mp(e, t, n, i) {
    return Bt(n, t) ? n : Ci.current !== null ? (e = Nc(e, n, i), Bt(e, t) || (ot = !0), e) : (Ln & 42) === 0 || (Ln & 1073741824) !== 0 && (Me & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = mm(), xe.lanes |= e, ba |= e, t);
  }
  function hp(e, t, n, i, o) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var p = w.T, S = {};
    w.T = S, $c(e, !1, t, n);
    try {
      var A = o(), O = w.S;
      if (O !== null && O(S, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var G = zv(
          A,
          i
        );
        wr(
          e,
          t,
          G,
          Kt(e)
        );
      } else
        wr(
          e,
          t,
          i,
          Kt(e)
        );
    } catch (I) {
      wr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: I },
        Kt()
      );
    } finally {
      Y.p = u, p !== null && S.types !== null && (p.types = S.types), w.T = p;
    }
  }
  function Hv() {
  }
  function jc(e, t, n, i) {
    if (e.tag !== 5) throw Error(l(476));
    var o = gp(e).queue;
    hp(
      e,
      o,
      t,
      C,
      n === null ? Hv : function() {
        return yp(e), n(i);
      }
    );
  }
  function gp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: C,
      baseState: C,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Un,
        lastRenderedState: C
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Un,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function yp(e) {
    var t = gp(e);
    t.next === null && (t = e.alternate.memoizedState), wr(
      e,
      t.next.queue,
      {},
      Kt()
    );
  }
  function wc() {
    return vt(Ir);
  }
  function vp() {
    return it().memoizedState;
  }
  function bp() {
    return it().memoizedState;
  }
  function Gv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Kt();
          e = pa(n);
          var i = ma(t, e, n);
          i !== null && (Rt(i, t, n), Er(i, t, n)), t = { cache: nc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qv(e, t, n) {
    var i = Kt();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, il(e) ? _p(t, n) : (n = Ko(e, t, n, i), n !== null && (Rt(n, e, i), Ep(n, t, i)));
  }
  function Sp(e, t, n) {
    var i = Kt();
    wr(e, t, n, i);
  }
  function wr(e, t, n, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (il(e)) _p(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var p = t.lastRenderedState, S = u(p, n);
          if (o.hasEagerState = !0, o.eagerState = S, Bt(S, p))
            return Vs(e, t, o, 0), Xe === null && Us(), !1;
        } catch {
        } finally {
        }
      if (n = Ko(e, t, o, i), n !== null)
        return Rt(n, e, i), Ep(n, t, i), !0;
    }
    return !1;
  }
  function $c(e, t, n, i) {
    if (i = {
      lane: 2,
      revertLane: su(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, il(e)) {
      if (t) throw Error(l(479));
    } else
      t = Ko(
        e,
        n,
        i,
        2
      ), t !== null && Rt(t, e, 2);
  }
  function il(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function _p(e, t) {
    Di = Fs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ep(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, gt(e, n);
    }
  }
  var $r = {
    readContext: vt,
    use: el,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useLayoutEffect: et,
    useInsertionEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useSyncExternalStore: et,
    useId: et,
    useHostTransitionStatus: et,
    useFormState: et,
    useActionState: et,
    useOptimistic: et,
    useMemoCache: et,
    useCacheRefresh: et
  };
  $r.useEffectEvent = et;
  var xp = {
    readContext: vt,
    use: el,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: vt,
    useEffect: sp,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, nl(
        4194308,
        4,
        up.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return nl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      nl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = wt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Wa) {
        $n(!0);
        try {
          e();
        } finally {
          $n(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = wt();
      if (n !== void 0) {
        var o = n(t);
        if (Wa) {
          $n(!0);
          try {
            n(t);
          } finally {
            $n(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = qv.bind(
        null,
        xe,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = _c(e);
      var t = e.queue, n = Sp.bind(null, xe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Ac,
    useDeferredValue: function(e, t) {
      var n = wt();
      return Nc(n, e, t);
    },
    useTransition: function() {
      var e = _c(!1);
      return e = hp.bind(
        null,
        xe,
        e.queue,
        !0,
        !1
      ), wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var i = xe, o = wt();
      if (Oe) {
        if (n === void 0)
          throw Error(l(407));
        n = n();
      } else {
        if (n = t(), Xe === null)
          throw Error(l(349));
        (Me & 127) !== 0 || If(i, t, n);
      }
      o.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return o.queue = u, sp(Xf.bind(null, i, u, e), [
        e
      ]), i.flags |= 2048, Ri(
        9,
        { destroy: void 0 },
        Kf.bind(
          null,
          i,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = wt(), t = Xe.identifierPrefix;
      if (Oe) {
        var n = _n, i = Sn;
        n = (i & ~(1 << 32 - Nt(i) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ws++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Rv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: wc,
    useFormState: tp,
    useActionState: tp,
    useOptimistic: function(e) {
      var t = wt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = $c.bind(
        null,
        xe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: vc,
    useCacheRefresh: function() {
      return wt().memoizedState = Gv.bind(
        null,
        xe
      );
    },
    useEffectEvent: function(e) {
      var t = wt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Le & 2) !== 0)
          throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Mc = {
    readContext: vt,
    use: el,
    useCallback: fp,
    useContext: vt,
    useEffect: xc,
    useImperativeHandle: dp,
    useInsertionEffect: op,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: tl,
    useRef: rp,
    useState: function() {
      return tl(Un);
    },
    useDebugValue: Ac,
    useDeferredValue: function(e, t) {
      var n = it();
      return mp(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = tl(Un)[0], t = it().memoizedState;
      return [
        typeof e == "boolean" ? e : jr(e),
        t
      ];
    },
    useSyncExternalStore: kf,
    useId: vp,
    useHostTransitionStatus: wc,
    useFormState: np,
    useActionState: np,
    useOptimistic: function(e, t) {
      var n = it();
      return Jf(n, Ge, e, t);
    },
    useMemoCache: vc,
    useCacheRefresh: bp
  };
  Mc.useEffectEvent = lp;
  var Ap = {
    readContext: vt,
    use: el,
    useCallback: fp,
    useContext: vt,
    useEffect: xc,
    useImperativeHandle: dp,
    useInsertionEffect: op,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: Sc,
    useRef: rp,
    useState: function() {
      return Sc(Un);
    },
    useDebugValue: Ac,
    useDeferredValue: function(e, t) {
      var n = it();
      return Ge === null ? Nc(n, e, t) : mp(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Sc(Un)[0], t = it().memoizedState;
      return [
        typeof e == "boolean" ? e : jr(e),
        t
      ];
    },
    useSyncExternalStore: kf,
    useId: vp,
    useHostTransitionStatus: wc,
    useFormState: ip,
    useActionState: ip,
    useOptimistic: function(e, t) {
      var n = it();
      return Ge !== null ? Jf(n, Ge, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: vc,
    useCacheRefresh: bp
  };
  Ap.useEffectEvent = lp;
  function Tc(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Oc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var i = Kt(), o = pa(i);
      o.payload = t, n != null && (o.callback = n), t = ma(e, o, i), t !== null && (Rt(t, e, i), Er(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = Kt(), o = pa(i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ma(e, o, i), t !== null && (Rt(t, e, i), Er(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Kt(), i = pa(n);
      i.tag = 2, t != null && (i.callback = t), t = ma(e, i, n), t !== null && (Rt(t, e, n), Er(t, e, n));
    }
  };
  function Np(e, t, n, i, o, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, p) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, i) || !mr(o, u) : !0;
  }
  function jp(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Oc.enqueueReplaceState(t, t.state, null);
  }
  function Pa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t)
        i !== "ref" && (n[i] = t[i]);
    }
    if (e = e.defaultProps) {
      n === t && (n = b({}, n));
      for (var o in e)
        n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  function wp(e) {
    Ls(e);
  }
  function $p(e) {
    console.error(e);
  }
  function Mp(e) {
    Ls(e);
  }
  function rl(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Tp(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Cc(e, t, n) {
    return n = pa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      rl(e, t);
    }, n;
  }
  function Op(e) {
    return e = pa(e), e.tag = 3, e;
  }
  function Cp(e, t, n, i) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = i.value;
      e.payload = function() {
        return o(u);
      }, e.callback = function() {
        Tp(t, n, i);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Tp(t, n, i), typeof o != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([this]) : Sa.add(this));
      var S = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function kv(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && wi(
        t,
        n,
        o,
        !0
      ), n = Gt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return tn === null ? yl() : n.alternate === null && tt === 0 && (tt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Xs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), au(e, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === Xs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), au(e, i, o)), !1;
        }
        throw Error(l(435, n.tag));
      }
      return au(e, i, o), yl(), !1;
    }
    if (Oe)
      return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Fo && (e = Error(l(422), { cause: i }), yr(Ft(e, n)))) : (i !== Fo && (t = Error(l(423), {
        cause: i
      }), yr(
        Ft(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ft(i, n), o = Cc(
        e.stateNode,
        i,
        o
      ), oc(e, o), tt !== 4 && (tt = 2)), !1;
    var u = Error(l(520), { cause: i });
    if (u = Ft(u, n), Lr === null ? Lr = [u] : Lr.push(u), tt !== 4 && (tt = 2), t === null) return !0;
    i = Ft(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Cc(n.stateNode, i, e), oc(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Sa === null || !Sa.has(u))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = Op(o), Cp(
              o,
              e,
              n,
              i
            ), oc(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Dc = Error(l(461)), ot = !1;
  function bt(e, t, n, i) {
    t.child = e === null ? Lf(t, null, n, i) : Fa(
      t,
      e.child,
      n,
      i
    );
  }
  function Dp(e, t, n, i, o) {
    n = n.render;
    var u = t.ref;
    if ("ref" in i) {
      var p = {};
      for (var S in i)
        S !== "ref" && (p[S] = i[S]);
    } else p = i;
    return Ya(t), i = mc(
      e,
      t,
      n,
      p,
      u,
      o
    ), S = hc(), e !== null && !ot ? (gc(e, t, o), Vn(e, t, o)) : (Oe && S && Jo(t), t.flags |= 1, bt(e, t, i, o), t.child);
  }
  function zp(e, t, n, i, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Xo(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Rp(
        e,
        t,
        u,
        i,
        o
      )) : (e = Hs(
        n.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Gc(e, o)) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : mr, n(p, i) && e.ref === t.ref)
        return Vn(e, t, o);
    }
    return t.flags |= 1, e = Cn(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Rp(e, t, n, i, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (mr(u, i) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = i = u, Gc(e, o))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, Vn(e, t, o);
    }
    return zc(
      e,
      t,
      n,
      i,
      o
    );
  }
  function Lp(e, t, n, i) {
    var o = i.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (i = t.child = e.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~u;
        } else i = 0, t.child = null;
        return Up(
          e,
          t,
          u,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Is(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Bf(t, u) : uc(), Hf(t);
      else
        return i = t.lanes = 536870912, Up(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          i
        );
    } else
      u !== null ? (Is(t, u.cachePool), Bf(t, u), ga(), t.memoizedState = null) : (e !== null && Is(t, null), uc(), ga());
    return bt(e, t, o, n), t.child;
  }
  function Mr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Up(e, t, n, i, o) {
    var u = ic();
    return u = u === null ? null : { parent: st._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && Is(t, null), uc(), Hf(t), e !== null && wi(e, t, i, !0), t.childLanes = o, null;
  }
  function sl(e, t) {
    return t = ol(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Vp(e, t, n) {
    return Fa(t, e.child, null, n), e = sl(t, t.pendingProps), e.flags |= 2, qt(t), t.memoizedState = null, e;
  }
  function Iv(e, t, n) {
    var i = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Oe) {
        if (i.mode === "hidden")
          return e = sl(t, i), t.lanes = 536870912, Mr(null, e);
        if (fc(t), (e = Ye) ? (e = Zm(
          e,
          en
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: oa !== null ? { id: Sn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, yt = t, Ye = null)) : e = null, e === null) throw ua(t);
        return t.lanes = 536870912, null;
      }
      return sl(t, i);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var p = u.dehydrated;
      if (fc(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = Vp(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(l(558));
      else if (ot || wi(e, t, n, !1), o = (n & e.childLanes) !== 0, ot || o) {
        if (i = Xe, i !== null && (p = Va(i, n), p !== 0 && p !== u.retryLane))
          throw u.retryLane = p, ka(e, p), Rt(i, e, p), Dc;
        yl(), t = Vp(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Ye = nn(p.nextSibling), yt = t, Oe = !0, ca = null, en = !1, e !== null && Af(t, e), t = sl(t, i), t.flags |= 4096;
      return t;
    }
    return e = Cn(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ll(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(l(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function zc(e, t, n, i, o) {
    return Ya(t), n = mc(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = hc(), e !== null && !ot ? (gc(e, t, o), Vn(e, t, o)) : (Oe && i && Jo(t), t.flags |= 1, bt(e, t, n, o), t.child);
  }
  function Bp(e, t, n, i, o, u) {
    return Ya(t), t.updateQueue = null, n = qf(
      t,
      i,
      n,
      o
    ), Gf(e), i = hc(), e !== null && !ot ? (gc(e, t, u), Vn(e, t, u)) : (Oe && i && Jo(t), t.flags |= 1, bt(e, t, n, u), t.child);
  }
  function Hp(e, t, n, i, o) {
    if (Ya(t), t.stateNode === null) {
      var u = xi, p = n.contextType;
      typeof p == "object" && p !== null && (u = vt(p)), u = new n(i, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Oc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = i, u.state = t.memoizedState, u.refs = {}, sc(t), p = n.contextType, u.context = typeof p == "object" && p !== null ? vt(p) : xi, u.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Tc(
        t,
        n,
        p,
        i
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (p = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), p !== u.state && Oc.enqueueReplaceState(u, u.state, null), Ar(t, i, u, o), xr(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      u = t.stateNode;
      var S = t.memoizedProps, A = Pa(n, S);
      u.props = A;
      var O = u.context, G = n.contextType;
      p = xi, typeof G == "object" && G !== null && (p = vt(G));
      var I = n.getDerivedStateFromProps;
      G = typeof I == "function" || typeof u.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, G || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (S || O !== p) && jp(
        t,
        u,
        i,
        p
      ), fa = !1;
      var z = t.memoizedState;
      u.state = z, Ar(t, i, u, o), xr(), O = t.memoizedState, S || z !== O || fa ? (typeof I == "function" && (Tc(
        t,
        n,
        I,
        i
      ), O = t.memoizedState), (A = fa || Np(
        t,
        n,
        A,
        i,
        z,
        O,
        p
      )) ? (G || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = O), u.props = i, u.state = O, u.context = p, i = A) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      u = t.stateNode, lc(e, t), p = t.memoizedProps, G = Pa(n, p), u.props = G, I = t.pendingProps, z = u.context, O = n.contextType, A = xi, typeof O == "object" && O !== null && (A = vt(O)), S = n.getDerivedStateFromProps, (O = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== I || z !== A) && jp(
        t,
        u,
        i,
        A
      ), fa = !1, z = t.memoizedState, u.state = z, Ar(t, i, u, o), xr();
      var U = t.memoizedState;
      p !== I || z !== U || fa || e !== null && e.dependencies !== null && qs(e.dependencies) ? (typeof S == "function" && (Tc(
        t,
        n,
        S,
        i
      ), U = t.memoizedState), (G = fa || Np(
        t,
        n,
        G,
        i,
        z,
        U,
        A
      ) || e !== null && e.dependencies !== null && qs(e.dependencies)) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, U, A), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        i,
        U,
        A
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = U), u.props = i, u.state = U, u.context = A, i = G) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return u = i, ll(e, t), i = (t.flags & 128) !== 0, u || i ? (u = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && i ? (t.child = Fa(
      t,
      e.child,
      null,
      o
    ), t.child = Fa(
      t,
      null,
      n,
      o
    )) : bt(e, t, n, o), t.memoizedState = u.state, e = t.child) : e = Vn(
      e,
      t,
      o
    ), e;
  }
  function Gp(e, t, n, i) {
    return Ka(), t.flags |= 256, bt(e, t, n, i), t.child;
  }
  var Rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Lc(e) {
    return { baseLanes: e, cachePool: Tf() };
  }
  function Uc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= It), e;
  }
  function qp(e, t, n) {
    var i = t.pendingProps, o = !1, u = (t.flags & 128) !== 0, p;
    if ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (at.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Oe) {
        if (o ? ha(t) : ga(), (e = Ye) ? (e = Zm(
          e,
          en
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: oa !== null ? { id: Sn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, yt = t, Ye = null)) : e = null, e === null) throw ua(t);
        return bu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = i.children;
      return i = i.fallback, o ? (ga(), o = t.mode, S = ol(
        { mode: "hidden", children: S },
        o
      ), i = Ia(
        i,
        o,
        n,
        null
      ), S.return = t, i.return = t, S.sibling = i, t.child = S, i = t.child, i.memoizedState = Lc(n), i.childLanes = Uc(
        e,
        p,
        n
      ), t.memoizedState = Rc, Mr(null, i)) : (ha(t), Vc(t, S));
    }
    var A = e.memoizedState;
    if (A !== null && (S = A.dehydrated, S !== null)) {
      if (u)
        t.flags & 256 ? (ha(t), t.flags &= -257, t = Bc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ga(), t.child = e.child, t.flags |= 128, t = null) : (ga(), S = i.fallback, o = t.mode, i = ol(
          { mode: "visible", children: i.children },
          o
        ), S = Ia(
          S,
          o,
          n,
          null
        ), S.flags |= 2, i.return = t, S.return = t, i.sibling = S, t.child = i, Fa(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = Lc(n), i.childLanes = Uc(
          e,
          p,
          n
        ), t.memoizedState = Rc, t = Mr(null, i));
      else if (ha(t), bu(S)) {
        if (p = S.nextSibling && S.nextSibling.dataset, p) var O = p.dgst;
        p = O, i = Error(l(419)), i.stack = "", i.digest = p, yr({ value: i, source: null, stack: null }), t = Bc(
          e,
          t,
          n
        );
      } else if (ot || wi(e, t, n, !1), p = (n & e.childLanes) !== 0, ot || p) {
        if (p = Xe, p !== null && (i = Va(p, n), i !== 0 && i !== A.retryLane))
          throw A.retryLane = i, ka(e, i), Rt(p, e, i), Dc;
        vu(S) || yl(), t = Bc(
          e,
          t,
          n
        );
      } else
        vu(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = A.treeContext, Ye = nn(
          S.nextSibling
        ), yt = t, Oe = !0, ca = null, en = !1, e !== null && Af(t, e), t = Vc(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (ga(), S = i.fallback, o = t.mode, A = e.child, O = A.sibling, i = Cn(A, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = A.subtreeFlags & 65011712, O !== null ? S = Cn(
      O,
      S
    ) : (S = Ia(
      S,
      o,
      n,
      null
    ), S.flags |= 2), S.return = t, i.return = t, i.sibling = S, t.child = i, Mr(null, i), i = t.child, S = e.child.memoizedState, S === null ? S = Lc(n) : (o = S.cachePool, o !== null ? (A = st._currentValue, o = o.parent !== A ? { parent: A, pool: A } : o) : o = Tf(), S = {
      baseLanes: S.baseLanes | n,
      cachePool: o
    }), i.memoizedState = S, i.childLanes = Uc(
      e,
      p,
      n
    ), t.memoizedState = Rc, Mr(e.child, i)) : (ha(t), n = e.child, e = n.sibling, n = Cn(n, {
      mode: "visible",
      children: i.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Vc(e, t) {
    return t = ol(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ol(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function Bc(e, t, n) {
    return Fa(t, e.child, null, n), e = Vc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function kp(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), ec(e.return, t, n);
  }
  function Hc(e, t, n, i, o, u) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: o,
      treeForkCount: u
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = i, p.tail = n, p.tailMode = o, p.treeForkCount = u);
  }
  function Ip(e, t, n) {
    var i = t.pendingProps, o = i.revealOrder, u = i.tail;
    i = i.children;
    var p = at.current, S = (p & 2) !== 0;
    if (S ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, W(at, p), bt(e, t, i, n), i = Oe ? gr : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && kp(e, n, t);
        else if (e.tag === 19)
          kp(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Zs(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Hc(
          t,
          !1,
          o,
          n,
          u,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Zs(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Hc(
          t,
          !0,
          n,
          null,
          u,
          i
        );
        break;
      case "together":
        Hc(
          t,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ba |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (wi(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Gc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && qs(e)));
  }
  function Kv(e, t, n) {
    switch (t.tag) {
      case 3:
        We(t, t.stateNode.containerInfo), da(t, st, e.memoizedState.cache), Ka();
        break;
      case 27:
      case 5:
        gn(t);
        break;
      case 4:
        We(t, t.stateNode.containerInfo);
        break;
      case 10:
        da(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, fc(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (ha(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? qp(e, t, n) : (ha(t), e = Vn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        ha(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (wi(
          e,
          t,
          n,
          !1
        ), i = (n & t.childLanes) !== 0), o) {
          if (i)
            return Ip(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), W(at, at.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, Lp(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        da(t, st, e.memoizedState.cache);
    }
    return Vn(e, t, n);
  }
  function Kp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!Gc(e, n) && (t.flags & 128) === 0)
          return ot = !1, Kv(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Oe && (t.flags & 1048576) !== 0 && xf(t, gr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = Ja(t.elementType), t.type = e, typeof e == "function")
            Xo(e) ? (i = Pa(e, i), t.tag = 1, t = Hp(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, t = zc(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === Z) {
                t.tag = 11, t = Dp(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === B) {
                t.tag = 14, t = zp(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              }
            }
            throw t = F(e) || e, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return zc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return i = t.type, o = Pa(
          i,
          t.pendingProps
        ), Hp(
          e,
          t,
          i,
          o,
          n
        );
      case 3:
        e: {
          if (We(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          i = t.pendingProps;
          var u = t.memoizedState;
          o = u.element, lc(e, t), Ar(t, i, null, n);
          var p = t.memoizedState;
          if (i = p.cache, da(t, st, i), i !== u.cache && tc(
            t,
            [st],
            n,
            !0
          ), xr(), i = p.element, u.isDehydrated)
            if (u = {
              element: i,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Gp(
                e,
                t,
                i,
                n
              );
              break e;
            } else if (i !== o) {
              o = Ft(
                Error(l(424)),
                t
              ), yr(o), t = Gp(
                e,
                t,
                i,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ye = nn(e.firstChild), yt = t, Oe = !0, ca = null, en = !0, n = Lf(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Ka(), i === o) {
              t = Vn(
                e,
                t,
                n
              );
              break e;
            }
            bt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ll(e, t), e === null ? (n = nh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Oe || (n = t.type, e = t.pendingProps, i = Al(
          Se.current
        ).createElement(n), i[je] = t, i[Ze] = e, St(i, n, e), ft(i), t.stateNode = i) : t.memoizedState = nh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return gn(t), e === null && Oe && (i = t.stateNode = Pm(
          t.type,
          t.pendingProps,
          Se.current
        ), yt = t, en = !0, o = Ye, Aa(t.type) ? (Su = o, Ye = nn(i.firstChild)) : Ye = o), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), ll(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Oe && ((o = i = Ye) && (i = _b(
          i,
          t.type,
          t.pendingProps,
          en
        ), i !== null ? (t.stateNode = i, yt = t, Ye = nn(i.firstChild), en = !1, o = !0) : o = !1), o || ua(t)), gn(t), o = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, i = u.children, hu(o, u) ? i = null : p !== null && hu(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = mc(
          e,
          t,
          Lv,
          null,
          null,
          n
        ), Ir._currentValue = o), ll(e, t), bt(e, t, i, n), t.child;
      case 6:
        return e === null && Oe && ((e = n = Ye) && (n = Eb(
          n,
          t.pendingProps,
          en
        ), n !== null ? (t.stateNode = n, yt = t, Ye = null, e = !0) : e = !1), e || ua(t)), null;
      case 13:
        return qp(e, t, n);
      case 4:
        return We(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Fa(
          t,
          null,
          i,
          n
        ) : bt(e, t, i, n), t.child;
      case 11:
        return Dp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return bt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return i = t.pendingProps, da(t, t.type, i.value), bt(e, t, i.children, n), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, Ya(t), o = vt(o), i = i(o), t.flags |= 1, bt(e, t, i, n), t.child;
      case 14:
        return zp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Rp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Ip(e, t, n);
      case 31:
        return Iv(e, t, n);
      case 22:
        return Lp(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ya(t), i = vt(st), e === null ? (o = ic(), o === null && (o = Xe, u = nc(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= n), o = u), t.memoizedState = { parent: i, cache: o }, sc(t), da(t, st, o)) : ((e.lanes & n) !== 0 && (lc(e, t), Ar(t, null, null, n), xr()), o = e.memoizedState, u = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), da(t, st, i)) : (i = u.cache, da(t, st, i), i !== o.cache && tc(
          t,
          [st],
          n,
          !0
        ))), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
  }
  function Bn(e) {
    e.flags |= 4;
  }
  function qc(e, t, n, i, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (vm()) e.flags |= 8192;
        else
          throw Za = Xs, rc;
    } else e.flags &= -16777217;
  }
  function Xp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !lh(t))
      if (vm()) e.flags |= 8192;
      else
        throw Za = Xs, rc;
  }
  function cl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ir() : 536870912, e.lanes |= t, Bi |= t);
  }
  function Tr(e, t) {
    if (!Oe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Xv(e, t, n) {
    var i = t.pendingProps;
    switch (Zo(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(t), null;
      case 1:
        return Qe(t), null;
      case 3:
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Rn(st), Ne(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ji(t) ? Bn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wo())), Qe(t), null;
      case 26:
        var o = t.type, u = t.memoizedState;
        return e === null ? (Bn(t), u !== null ? (Qe(t), Xp(t, u)) : (Qe(t), qc(
          t,
          o,
          null,
          i,
          n
        ))) : u ? u !== e.memoizedState ? (Bn(t), Qe(t), Xp(t, u)) : (Qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Bn(t), Qe(t), qc(
          t,
          o,
          e,
          i,
          n
        )), null;
      case 27:
        if (ln(t), n = Se.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Bn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          e = ie.current, ji(t) ? Nf(t) : (e = Pm(o, i, n), t.stateNode = e, Bn(t));
        }
        return Qe(t), null;
      case 5:
        if (ln(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Bn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          if (u = ie.current, ji(t))
            Nf(t);
          else {
            var p = Al(
              Se.current
            );
            switch (u) {
              case 1:
                u = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                u = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    u = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    u = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    u = p.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof i.is == "string" ? p.createElement("select", {
                      is: i.is
                    }) : p.createElement("select"), i.multiple ? u.multiple = !0 : i.size && (u.size = i.size);
                    break;
                  default:
                    u = typeof i.is == "string" ? p.createElement(o, { is: i.is }) : p.createElement(o);
                }
            }
            u[je] = t, u[Ze] = i;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                u.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t)
                  break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            t.stateNode = u;
            e: switch (St(u, o, i), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && Bn(t);
          }
        }
        return Qe(t), qc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && Bn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = Se.current, ji(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = yt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[je] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || qm(e.nodeValue, n)), e || ua(t, !0);
          } else
            e = Al(e).createTextNode(
              i
            ), e[je] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = ji(t), n !== null) {
            if (e === null) {
              if (!i) throw Error(l(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[je] = t;
            } else
              Ka(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), e = !1;
          } else
            n = Wo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Qe(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = ji(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(l(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
              o[je] = t;
            } else
              Ka(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), o = !1;
          } else
            o = Wo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        return qt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), cl(t, t.updateQueue), Qe(t), null);
      case 4:
        return Ne(), e === null && uu(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Rn(t.type), Qe(t), null;
      case 19:
        if (L(at), i = t.memoizedState, i === null) return Qe(t), null;
        if (o = (t.flags & 128) !== 0, u = i.rendering, u === null)
          if (o) Tr(i, !1);
          else {
            if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Zs(e), u !== null) {
                  for (t.flags |= 128, Tr(i, !1), e = u.updateQueue, t.updateQueue = e, cl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Sf(n, e), n = n.sibling;
                  return W(
                    at,
                    at.current & 1 | 2
                  ), Oe && Dn(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && At() > ml && (t.flags |= 128, o = !0, Tr(i, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Zs(u), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, cl(t, e), Tr(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Oe)
                return Qe(t), null;
            } else
              2 * At() - i.renderingStartTime > ml && n !== 536870912 && (t.flags |= 128, o = !0, Tr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (e = i.last, e !== null ? e.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = At(), e.sibling = null, n = at.current, W(
          at,
          o ? n & 1 | 2 : n & 1
        ), Oe && Dn(t, i.treeForkCount), e) : (Qe(t), null);
      case 22:
      case 23:
        return qt(t), dc(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), n = t.updateQueue, n !== null && cl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && L(Qa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Rn(st), Qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Yv(e, t) {
    switch (Zo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(st), Ne(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ln(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (qt(t), t.alternate === null)
            throw Error(l(340));
          Ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          Ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(at), null;
      case 4:
        return Ne(), null;
      case 10:
        return Rn(t.type), null;
      case 22:
      case 23:
        return qt(t), dc(), e !== null && L(Qa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Rn(st), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yp(e, t) {
    switch (Zo(t), t.tag) {
      case 3:
        Rn(st), Ne();
        break;
      case 26:
      case 27:
      case 5:
        ln(t);
        break;
      case 4:
        Ne();
        break;
      case 31:
        t.memoizedState !== null && qt(t);
        break;
      case 13:
        qt(t);
        break;
      case 19:
        L(at);
        break;
      case 10:
        Rn(t.type);
        break;
      case 22:
      case 23:
        qt(t), dc(), e !== null && L(Qa);
        break;
      case 24:
        Rn(st);
    }
  }
  function Or(e, t) {
    try {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var u = n.create, p = n.inst;
            i = u(), p.destroy = i;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (S) {
      Be(t, t.return, S);
    }
  }
  function ya(e, t, n) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            var p = i.inst, S = p.destroy;
            if (S !== void 0) {
              p.destroy = void 0, o = t;
              var A = n, O = S;
              try {
                O();
              } catch (G) {
                Be(
                  o,
                  A,
                  G
                );
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (G) {
      Be(t, t.return, G);
    }
  }
  function Qp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Vf(t, n);
      } catch (i) {
        Be(e, e.return, i);
      }
    }
  }
  function Jp(e, t, n) {
    n.props = Pa(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Be(e, t, i);
    }
  }
  function Cr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(i) : n.current = i;
      }
    } catch (o) {
      Be(e, t, o);
    }
  }
  function En(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Be(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Be(e, t, o);
        }
      else n.current = null;
  }
  function Zp(e) {
    var t = e.type, n = e.memoizedProps, i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (o) {
      Be(e, e.return, o);
    }
  }
  function kc(e, t, n) {
    try {
      var i = e.stateNode;
      hb(i, e.type, n, t), i[Ze] = t;
    } catch (o) {
      Be(e, e.return, o);
    }
  }
  function Fp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Aa(e.type) || e.tag === 4;
  }
  function Ic(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Aa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Kc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tn));
    else if (i !== 4 && (i === 27 && Aa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Kc(e, t, n), e = e.sibling; e !== null; )
        Kc(e, t, n), e = e.sibling;
  }
  function ul(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && Aa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (ul(e, t, n), e = e.sibling; e !== null; )
        ul(e, t, n), e = e.sibling;
  }
  function Wp(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      St(t, i, n), t[je] = e, t[Ze] = n;
    } catch (u) {
      Be(e, e.return, u);
    }
  }
  var Hn = !1, ct = !1, Xc = !1, Pp = typeof WeakSet == "function" ? WeakSet : Set, pt = null;
  function Qv(e, t) {
    if (e = e.containerInfo, pu = Ol, e = df(e), Bo(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var o = i.anchorOffset, u = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var p = 0, S = -1, A = -1, O = 0, G = 0, I = e, z = null;
            t: for (; ; ) {
              for (var U; I !== n || o !== 0 && I.nodeType !== 3 || (S = p + o), I !== u || i !== 0 && I.nodeType !== 3 || (A = p + i), I.nodeType === 3 && (p += I.nodeValue.length), (U = I.firstChild) !== null; )
                z = I, I = U;
              for (; ; ) {
                if (I === e) break t;
                if (z === n && ++O === o && (S = p), z === u && ++G === i && (A = p), (U = I.nextSibling) !== null) break;
                I = z, z = I.parentNode;
              }
              I = U;
            }
            n = S === -1 || A === -1 ? null : { start: S, end: A };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (mu = { focusedElem: e, selectionRange: n }, Ol = !1, pt = t; pt !== null; )
      if (t = pt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, pt = e;
      else
        for (; pt !== null; ) {
          switch (t = pt, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  o = e[n], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, o = u.memoizedProps, u = u.memoizedState, i = n.stateNode;
                try {
                  var se = Pa(
                    n.type,
                    o
                  );
                  e = i.getSnapshotBeforeUpdate(
                    se,
                    u
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (pe) {
                  Be(
                    n,
                    n.return,
                    pe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  yu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yu(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, pt = e;
            break;
          }
          pt = t.return;
        }
  }
  function em(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        qn(e, n), i & 4 && Or(5, n);
        break;
      case 1:
        if (qn(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Be(n, n.return, p);
            }
          else {
            var o = Pa(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              Be(
                n,
                n.return,
                p
              );
            }
          }
        i & 64 && Qp(n), i & 512 && Cr(n, n.return);
        break;
      case 3:
        if (qn(e, n), i & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Vf(e, t);
          } catch (p) {
            Be(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Wp(n);
      case 26:
      case 5:
        qn(e, n), t === null && i & 4 && Zp(n), i & 512 && Cr(n, n.return);
        break;
      case 12:
        qn(e, n);
        break;
      case 31:
        qn(e, n), i & 4 && am(e, n);
        break;
      case 13:
        qn(e, n), i & 4 && im(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ab.bind(
          null,
          n
        ), xb(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || Hn, !i) {
          t = t !== null && t.memoizedState !== null || ct, o = Hn;
          var u = ct;
          Hn = i, (ct = t) && !u ? kn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : qn(e, n), Hn = o, ct = u;
        }
        break;
      case 30:
        break;
      default:
        qn(e, n);
    }
  }
  function tm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, tm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Eo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, Ot = !1;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; )
      nm(e, t, n), n = n.sibling;
  }
  function nm(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(wn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        ct || En(n, t), Gn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ct || En(n, t);
        var i = Fe, o = Ot;
        Aa(n.type) && (Fe = n.stateNode, Ot = !1), Gn(
          e,
          t,
          n
        ), Gr(n.stateNode), Fe = i, Ot = o;
        break;
      case 5:
        ct || En(n, t);
      case 6:
        if (i = Fe, o = Ot, Fe = null, Gn(
          e,
          t,
          n
        ), Fe = i, Ot = o, Fe !== null)
          if (Ot)
            try {
              (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(n.stateNode);
            } catch (u) {
              Be(
                n,
                t,
                u
              );
            }
          else
            try {
              Fe.removeChild(n.stateNode);
            } catch (u) {
              Be(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Fe !== null && (Ot ? (e = Fe, Qm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Yi(e)) : Qm(Fe, n.stateNode));
        break;
      case 4:
        i = Fe, o = Ot, Fe = n.stateNode.containerInfo, Ot = !0, Gn(
          e,
          t,
          n
        ), Fe = i, Ot = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ya(2, n, t), ct || ya(4, n, t), Gn(
          e,
          t,
          n
        );
        break;
      case 1:
        ct || (En(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && Jp(
          n,
          t,
          i
        )), Gn(
          e,
          t,
          n
        );
        break;
      case 21:
        Gn(
          e,
          t,
          n
        );
        break;
      case 22:
        ct = (i = ct) || n.memoizedState !== null, Gn(
          e,
          t,
          n
        ), ct = i;
        break;
      default:
        Gn(
          e,
          t,
          n
        );
    }
  }
  function am(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Yi(e);
      } catch (n) {
        Be(t, t.return, n);
      }
    }
  }
  function im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Yi(e);
      } catch (n) {
        Be(t, t.return, n);
      }
  }
  function Jv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Pp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Pp()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function dl(e, t) {
    var n = Jv(e);
    t.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var o = ib.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i], u = e, p = t, S = p;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Aa(S.type)) {
                Fe = S.stateNode, Ot = !1;
                break e;
              }
              break;
            case 5:
              Fe = S.stateNode, Ot = !1;
              break e;
            case 3:
            case 4:
              Fe = S.stateNode.containerInfo, Ot = !0;
              break e;
          }
          S = S.return;
        }
        if (Fe === null) throw Error(l(160));
        nm(u, p, o), Fe = null, Ot = !1, u = o.alternate, u !== null && (u.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        rm(t, e), t = t.sibling;
  }
  var dn = null;
  function rm(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ct(t, e), Dt(e), i & 4 && (ya(3, e, e.return), Or(3, e), ya(5, e, e.return));
        break;
      case 1:
        Ct(t, e), Dt(e), i & 512 && (ct || n === null || En(n, n.return)), i & 64 && Hn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var o = dn;
        if (Ct(t, e), Dt(e), i & 512 && (ct || n === null || En(n, n.return)), i & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (i = e.memoizedState, n === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      u = o.getElementsByTagName("title")[0], (!u || u[rr] || u[je] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = o.createElement(i), o.head.insertBefore(
                        u,
                        o.querySelector("head > title")
                      )), St(u, i, n), u[je] = e, ft(u), i = u;
                      break e;
                    case "link":
                      var p = rh(
                        "link",
                        "href",
                        o
                      ).get(i + (n.href || ""));
                      if (p) {
                        for (var S = 0; S < p.length; S++)
                          if (u = p[S], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            p.splice(S, 1);
                            break t;
                          }
                      }
                      u = o.createElement(i), St(u, i, n), o.head.appendChild(u);
                      break;
                    case "meta":
                      if (p = rh(
                        "meta",
                        "content",
                        o
                      ).get(i + (n.content || ""))) {
                        for (S = 0; S < p.length; S++)
                          if (u = p[S], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            p.splice(S, 1);
                            break t;
                          }
                      }
                      u = o.createElement(i), St(u, i, n), o.head.appendChild(u);
                      break;
                    default:
                      throw Error(l(468, i));
                  }
                  u[je] = e, ft(u), i = u;
                }
                e.stateNode = i;
              } else
                sh(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = ih(
                o,
                i,
                e.memoizedProps
              );
          else
            u !== i ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, i === null ? sh(
              o,
              e.type,
              e.stateNode
            ) : ih(
              o,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && kc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ct(t, e), Dt(e), i & 512 && (ct || n === null || En(n, n.return)), n !== null && i & 4 && kc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), Dt(e), i & 512 && (ct || n === null || En(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            gi(o, "");
          } catch (se) {
            Be(e, e.return, se);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, kc(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Xc = !0);
        break;
      case 6:
        if (Ct(t, e), Dt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (se) {
            Be(e, e.return, se);
          }
        }
        break;
      case 3:
        if (wl = null, o = dn, dn = Nl(t.containerInfo), Ct(t, e), dn = o, Dt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Yi(t.containerInfo);
          } catch (se) {
            Be(e, e.return, se);
          }
        Xc && (Xc = !1, sm(e));
        break;
      case 4:
        i = dn, dn = Nl(
          e.stateNode.containerInfo
        ), Ct(t, e), Dt(e), dn = i;
        break;
      case 12:
        Ct(t, e), Dt(e);
        break;
      case 31:
        Ct(t, e), Dt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, dl(e, i)));
        break;
      case 13:
        Ct(t, e), Dt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (pl = At()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, dl(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var A = n !== null && n.memoizedState !== null, O = Hn, G = ct;
        if (Hn = O || o, ct = G || A, Ct(t, e), ct = G, Hn = O, Dt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || A || Hn || ct || ei(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                A = n = t;
                try {
                  if (u = A.stateNode, o)
                    p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    S = A.stateNode;
                    var I = A.memoizedProps.style, z = I != null && I.hasOwnProperty("display") ? I.display : null;
                    S.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (se) {
                  Be(A, A.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = o ? "" : A.memoizedProps;
                } catch (se) {
                  Be(A, A.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                A = t;
                try {
                  var U = A.stateNode;
                  o ? Jm(U, !0) : Jm(A.stateNode, !1);
                } catch (se) {
                  Be(A, A.return, se);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, dl(e, n))));
        break;
      case 19:
        Ct(t, e), Dt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, dl(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ct(t, e), Dt(e);
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, i = e.return; i !== null; ) {
          if (Fp(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(l(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, u = Ic(e);
            ul(e, u, o);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (gi(p, ""), n.flags &= -33);
            var S = Ic(e);
            ul(e, S, p);
            break;
          case 3:
          case 4:
            var A = n.stateNode.containerInfo, O = Ic(e);
            Kc(
              e,
              O,
              A
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (G) {
        Be(e, e.return, G);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        sm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function qn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        em(e, t.alternate, t), t = t.sibling;
  }
  function ei(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ya(4, t, t.return), ei(t);
          break;
        case 1:
          En(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Jp(
            t,
            t.return,
            n
          ), ei(t);
          break;
        case 27:
          Gr(t.stateNode);
        case 26:
        case 5:
          En(t, t.return), ei(t);
          break;
        case 22:
          t.memoizedState === null && ei(t);
          break;
        case 30:
          ei(t);
          break;
        default:
          ei(t);
      }
      e = e.sibling;
    }
  }
  function kn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, u = t, p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          kn(
            o,
            u,
            n
          ), Or(4, u);
          break;
        case 1:
          if (kn(
            o,
            u,
            n
          ), i = u, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (O) {
              Be(i, i.return, O);
            }
          if (i = u, o = i.updateQueue, o !== null) {
            var S = i.stateNode;
            try {
              var A = o.shared.hiddenCallbacks;
              if (A !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < A.length; o++)
                  Uf(A[o], S);
            } catch (O) {
              Be(i, i.return, O);
            }
          }
          n && p & 64 && Qp(u), Cr(u, u.return);
          break;
        case 27:
          Wp(u);
        case 26:
        case 5:
          kn(
            o,
            u,
            n
          ), n && i === null && p & 4 && Zp(u), Cr(u, u.return);
          break;
        case 12:
          kn(
            o,
            u,
            n
          );
          break;
        case 31:
          kn(
            o,
            u,
            n
          ), n && p & 4 && am(o, u);
          break;
        case 13:
          kn(
            o,
            u,
            n
          ), n && p & 4 && im(o, u);
          break;
        case 22:
          u.memoizedState === null && kn(
            o,
            u,
            n
          ), Cr(u, u.return);
          break;
        case 30:
          break;
        default:
          kn(
            o,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Yc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && vr(n));
  }
  function Qc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && vr(e));
  }
  function fn(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        lm(
          e,
          t,
          n,
          i
        ), t = t.sibling;
  }
  function lm(e, t, n, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        fn(
          e,
          t,
          n,
          i
        ), o & 2048 && Or(9, t);
        break;
      case 1:
        fn(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        fn(
          e,
          t,
          n,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && vr(e)));
        break;
      case 12:
        if (o & 2048) {
          fn(
            e,
            t,
            n,
            i
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, p = u.id, S = u.onPostCommit;
            typeof S == "function" && S(
              p,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (A) {
            Be(t, t.return, A);
          }
        } else
          fn(
            e,
            t,
            n,
            i
          );
        break;
      case 31:
        fn(
          e,
          t,
          n,
          i
        );
        break;
      case 13:
        fn(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, p = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? fn(
          e,
          t,
          n,
          i
        ) : Dr(e, t) : u._visibility & 2 ? fn(
          e,
          t,
          n,
          i
        ) : (u._visibility |= 2, Li(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && Yc(p, t);
        break;
      case 24:
        fn(
          e,
          t,
          n,
          i
        ), o & 2048 && Qc(t.alternate, t);
        break;
      default:
        fn(
          e,
          t,
          n,
          i
        );
    }
  }
  function Li(e, t, n, i, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, p = t, S = n, A = i, O = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Li(
            u,
            p,
            S,
            A,
            o
          ), Or(8, p);
          break;
        case 23:
          break;
        case 22:
          var G = p.stateNode;
          p.memoizedState !== null ? G._visibility & 2 ? Li(
            u,
            p,
            S,
            A,
            o
          ) : Dr(
            u,
            p
          ) : (G._visibility |= 2, Li(
            u,
            p,
            S,
            A,
            o
          )), o && O & 2048 && Yc(
            p.alternate,
            p
          );
          break;
        case 24:
          Li(
            u,
            p,
            S,
            A,
            o
          ), o && O & 2048 && Qc(p.alternate, p);
          break;
        default:
          Li(
            u,
            p,
            S,
            A,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Dr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, i = t, o = i.flags;
        switch (i.tag) {
          case 22:
            Dr(n, i), o & 2048 && Yc(
              i.alternate,
              i
            );
            break;
          case 24:
            Dr(n, i), o & 2048 && Qc(i.alternate, i);
            break;
          default:
            Dr(n, i);
        }
        t = t.sibling;
      }
  }
  var zr = 8192;
  function Ui(e, t, n) {
    if (e.subtreeFlags & zr)
      for (e = e.child; e !== null; )
        om(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function om(e, t, n) {
    switch (e.tag) {
      case 26:
        Ui(
          e,
          t,
          n
        ), e.flags & zr && e.memoizedState !== null && Rb(
          n,
          dn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ui(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var i = dn;
        dn = Nl(e.stateNode.containerInfo), Ui(
          e,
          t,
          n
        ), dn = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = zr, zr = 16777216, Ui(
          e,
          t,
          n
        ), zr = i) : Ui(
          e,
          t,
          n
        ));
        break;
      default:
        Ui(
          e,
          t,
          n
        );
    }
  }
  function cm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Rr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          pt = i, dm(
            i,
            e
          );
        }
      cm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        um(e), e = e.sibling;
  }
  function um(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Rr(e), e.flags & 2048 && ya(9, e, e.return);
        break;
      case 3:
        Rr(e);
        break;
      case 12:
        Rr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fl(e)) : Rr(e);
        break;
      default:
        Rr(e);
    }
  }
  function fl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          pt = i, dm(
            i,
            e
          );
        }
      cm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ya(8, t, t.return), fl(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fl(t));
          break;
        default:
          fl(t);
      }
      e = e.sibling;
    }
  }
  function dm(e, t) {
    for (; pt !== null; ) {
      var n = pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ya(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          vr(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, pt = i;
      else
        e: for (n = e; pt !== null; ) {
          i = pt;
          var o = i.sibling, u = i.return;
          if (tm(i), i === n) {
            pt = null;
            break e;
          }
          if (o !== null) {
            o.return = u, pt = o;
            break e;
          }
          pt = u;
        }
    }
  }
  var Zv = {
    getCacheForType: function(e) {
      var t = vt(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return vt(st).controller.signal;
    }
  }, Fv = typeof WeakMap == "function" ? WeakMap : Map, Le = 0, Xe = null, we = null, Me = 0, Ve = 0, kt = null, va = !1, Vi = !1, Jc = !1, In = 0, tt = 0, ba = 0, ti = 0, Zc = 0, It = 0, Bi = 0, Lr = null, zt = null, Fc = !1, pl = 0, fm = 0, ml = 1 / 0, hl = null, Sa = null, dt = 0, _a = null, Hi = null, Kn = 0, Wc = 0, Pc = null, pm = null, Ur = 0, eu = null;
  function Kt() {
    return (Le & 2) !== 0 && Me !== 0 ? Me & -Me : w.T !== null ? su() : Vt();
  }
  function mm() {
    if (It === 0)
      if ((Me & 536870912) === 0 || Oe) {
        var e = jt;
        jt <<= 1, (jt & 3932160) === 0 && (jt = 262144), It = e;
      } else It = 536870912;
    return e = Gt.current, e !== null && (e.flags |= 32), It;
  }
  function Rt(e, t, n) {
    (e === Xe && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null) && (Gi(e, 0), Ea(
      e,
      Me,
      It,
      !1
    )), sa(e, n), ((Le & 2) === 0 || e !== Xe) && (e === Xe && ((Le & 2) === 0 && (ti |= n), tt === 4 && Ea(
      e,
      Me,
      It,
      !1
    )), xn(e));
  }
  function hm(e, t, n) {
    if ((Le & 6) !== 0) throw Error(l(327));
    var i = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ra(e, t), o = i ? eb(e, t) : nu(e, t, !0), u = i;
    do {
      if (o === 0) {
        Vi && !i && Ea(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Wv(n)) {
          o = nu(e, t, !1), u = !1;
          continue;
        }
        if (o === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var S = e;
              o = Lr;
              var A = S.current.memoizedState.isDehydrated;
              if (A && (Gi(S, p).flags |= 256), p = nu(
                S,
                p,
                !1
              ), p !== 2) {
                if (Jc && !A) {
                  S.errorRecoveryDisabledLanes |= u, ti |= u, o = 4;
                  break e;
                }
                u = zt, zt = o, u !== null && (zt === null ? zt = u : zt.push.apply(
                  zt,
                  u
                ));
              }
              o = p;
            }
            if (u = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Gi(e, 0), Ea(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, u = o, u) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ea(
                i,
                t,
                It,
                !va
              );
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (o = pl + 300 - At(), 10 < o)) {
            if (Ea(
              i,
              t,
              It,
              !va
            ), Xt(i, 0, !0) !== 0) break e;
            Kn = t, i.timeoutHandle = Xm(
              gm.bind(
                null,
                i,
                n,
                zt,
                hl,
                Fc,
                t,
                It,
                ti,
                Bi,
                va,
                u,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          gm(
            i,
            n,
            zt,
            hl,
            Fc,
            t,
            It,
            ti,
            Bi,
            va,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    xn(e);
  }
  function gm(e, t, n, i, o, u, p, S, A, O, G, I, z, U) {
    if (e.timeoutHandle = -1, I = t.subtreeFlags, I & 8192 || (I & 16785408) === 16785408) {
      I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Tn
      }, om(
        t,
        u,
        I
      );
      var se = (u & 62914560) === u ? pl - At() : (u & 4194048) === u ? fm - At() : 0;
      if (se = Lb(
        I,
        se
      ), se !== null) {
        Kn = u, e.cancelPendingCommit = se(
          Am.bind(
            null,
            e,
            t,
            u,
            n,
            i,
            o,
            p,
            S,
            A,
            G,
            I,
            null,
            z,
            U
          )
        ), Ea(e, u, p, !O);
        return;
      }
    }
    Am(
      e,
      t,
      u,
      n,
      i,
      o,
      p,
      S,
      A
    );
  }
  function Wv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], u = o.getSnapshot;
          o = o.value;
          try {
            if (!Bt(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ea(e, t, n, i) {
    t &= ~Zc, t &= ~ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var u = 31 - Nt(o), p = 1 << u;
      i[u] = -1, o &= ~p;
    }
    n !== 0 && ve(e, n, t);
  }
  function gl() {
    return (Le & 6) === 0 ? (Vr(0), !1) : !0;
  }
  function tu() {
    if (we !== null) {
      if (Ve === 0)
        var e = we.return;
      else
        e = we, zn = Xa = null, yc(e), Oi = null, Sr = 0, e = we;
      for (; e !== null; )
        Yp(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Gi(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, vb(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Kn = 0, tu(), Xe = e, we = n = Cn(e.current, null), Me = t, Ve = 0, kt = null, va = !1, Vi = ra(e, t), Jc = !1, Bi = It = Zc = ti = ba = tt = 0, zt = Lr = null, Fc = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - Nt(i), u = 1 << o;
        t |= e[o], i &= ~u;
      }
    return In = t, Us(), n;
  }
  function ym(e, t) {
    xe = null, w.H = $r, t === Ti || t === Ks ? (t = Df(), Ve = 3) : t === rc ? (t = Df(), Ve = 4) : Ve = t === Dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, kt = t, we === null && (tt = 1, rl(
      e,
      Ft(t, e.current)
    ));
  }
  function vm() {
    var e = Gt.current;
    return e === null ? !0 : (Me & 4194048) === Me ? tn === null : (Me & 62914560) === Me || (Me & 536870912) !== 0 ? e === tn : !1;
  }
  function bm() {
    var e = w.H;
    return w.H = $r, e === null ? $r : e;
  }
  function Sm() {
    var e = w.A;
    return w.A = Zv, e;
  }
  function yl() {
    tt = 4, va || (Me & 4194048) !== Me && Gt.current !== null || (Vi = !0), (ba & 134217727) === 0 && (ti & 134217727) === 0 || Xe === null || Ea(
      Xe,
      Me,
      It,
      !1
    );
  }
  function nu(e, t, n) {
    var i = Le;
    Le |= 2;
    var o = bm(), u = Sm();
    (Xe !== e || Me !== t) && (hl = null, Gi(e, t)), t = !1;
    var p = tt;
    e: do
      try {
        if (Ve !== 0 && we !== null) {
          var S = we, A = kt;
          switch (Ve) {
            case 8:
              tu(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var O = Ve;
              if (Ve = 0, kt = null, qi(e, S, A, O), n && Vi) {
                p = 0;
                break e;
              }
              break;
            default:
              O = Ve, Ve = 0, kt = null, qi(e, S, A, O);
          }
        }
        Pv(), p = tt;
        break;
      } catch (G) {
        ym(e, G);
      }
    while (!0);
    return t && e.shellSuspendCounter++, zn = Xa = null, Le = i, w.H = o, w.A = u, we === null && (Xe = null, Me = 0, Us()), p;
  }
  function Pv() {
    for (; we !== null; ) _m(we);
  }
  function eb(e, t) {
    var n = Le;
    Le |= 2;
    var i = bm(), o = Sm();
    Xe !== e || Me !== t ? (hl = null, ml = At() + 500, Gi(e, t)) : Vi = ra(
      e,
      t
    );
    e: do
      try {
        if (Ve !== 0 && we !== null) {
          t = we;
          var u = kt;
          t: switch (Ve) {
            case 1:
              Ve = 0, kt = null, qi(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Of(u)) {
                Ve = 0, kt = null, Em(t);
                break;
              }
              t = function() {
                Ve !== 2 && Ve !== 9 || Xe !== e || (Ve = 7), xn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ve = 7;
              break e;
            case 4:
              Ve = 5;
              break e;
            case 7:
              Of(u) ? (Ve = 0, kt = null, Em(t)) : (Ve = 0, kt = null, qi(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (we.tag) {
                case 26:
                  p = we.memoizedState;
                case 5:
                case 27:
                  var S = we;
                  if (p ? lh(p) : S.stateNode.complete) {
                    Ve = 0, kt = null;
                    var A = S.sibling;
                    if (A !== null) we = A;
                    else {
                      var O = S.return;
                      O !== null ? (we = O, vl(O)) : we = null;
                    }
                    break t;
                  }
              }
              Ve = 0, kt = null, qi(e, t, u, 5);
              break;
            case 6:
              Ve = 0, kt = null, qi(e, t, u, 6);
              break;
            case 8:
              tu(), tt = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        tb();
        break;
      } catch (G) {
        ym(e, G);
      }
    while (!0);
    return zn = Xa = null, w.H = i, w.A = o, Le = n, we !== null ? 0 : (Xe = null, Me = 0, Us(), tt);
  }
  function tb() {
    for (; we !== null && !li(); )
      _m(we);
  }
  function _m(e) {
    var t = Kp(e.alternate, e, In);
    e.memoizedProps = e.pendingProps, t === null ? vl(e) : we = t;
  }
  function Em(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Bp(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Me
        );
        break;
      case 11:
        t = Bp(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Me
        );
        break;
      case 5:
        yc(t);
      default:
        Yp(n, t), t = we = Sf(t, In), t = Kp(n, t, In);
    }
    e.memoizedProps = e.pendingProps, t === null ? vl(e) : we = t;
  }
  function qi(e, t, n, i) {
    zn = Xa = null, yc(t), Oi = null, Sr = 0;
    var o = t.return;
    try {
      if (kv(
        e,
        o,
        t,
        n,
        Me
      )) {
        tt = 1, rl(
          e,
          Ft(n, e.current)
        ), we = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw we = o, u;
      tt = 1, rl(
        e,
        Ft(n, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Oe || i === 1 ? e = !0 : Vi || (Me & 536870912) !== 0 ? e = !1 : (va = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Gt.current, i !== null && i.tag === 13 && (i.flags |= 16384))), xm(t, e)) : vl(t);
  }
  function vl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        xm(
          t,
          va
        );
        return;
      }
      e = t.return;
      var n = Xv(
        t.alternate,
        t,
        In
      );
      if (n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function xm(e, t) {
    do {
      var n = Yv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        we = e;
        return;
      }
      we = e = n;
    } while (e !== null);
    tt = 6, we = null;
  }
  function Am(e, t, n, i, o, u, p, S, A) {
    e.cancelPendingCommit = null;
    do
      bl();
    while (dt !== 0);
    if ((Le & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (u = t.lanes | t.childLanes, u |= Io, q(
        e,
        n,
        u,
        p,
        S,
        A
      ), e === Xe && (we = Xe = null, Me = 0), Hi = t, _a = e, Kn = n, Wc = u, Pc = o, pm = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, rb(Ua, function() {
        return Mm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = w.T, w.T = null, o = Y.p, Y.p = 2, p = Le, Le |= 4;
        try {
          Qv(e, t, n);
        } finally {
          Le = p, Y.p = o, w.T = i;
        }
      }
      dt = 1, Nm(), jm(), wm();
    }
  }
  function Nm() {
    if (dt === 1) {
      dt = 0;
      var e = _a, t = Hi, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = w.T, w.T = null;
        var i = Y.p;
        Y.p = 2;
        var o = Le;
        Le |= 4;
        try {
          rm(t, e);
          var u = mu, p = df(e.containerInfo), S = u.focusedElem, A = u.selectionRange;
          if (p !== S && S && S.ownerDocument && uf(
            S.ownerDocument.documentElement,
            S
          )) {
            if (A !== null && Bo(S)) {
              var O = A.start, G = A.end;
              if (G === void 0 && (G = O), "selectionStart" in S)
                S.selectionStart = O, S.selectionEnd = Math.min(
                  G,
                  S.value.length
                );
              else {
                var I = S.ownerDocument || document, z = I && I.defaultView || window;
                if (z.getSelection) {
                  var U = z.getSelection(), se = S.textContent.length, pe = Math.min(A.start, se), ke = A.end === void 0 ? pe : Math.min(A.end, se);
                  !U.extend && pe > ke && (p = ke, ke = pe, pe = p);
                  var $ = cf(
                    S,
                    pe
                  ), j = cf(
                    S,
                    ke
                  );
                  if ($ && j && (U.rangeCount !== 1 || U.anchorNode !== $.node || U.anchorOffset !== $.offset || U.focusNode !== j.node || U.focusOffset !== j.offset)) {
                    var T = I.createRange();
                    T.setStart($.node, $.offset), U.removeAllRanges(), pe > ke ? (U.addRange(T), U.extend(j.node, j.offset)) : (T.setEnd(j.node, j.offset), U.addRange(T));
                  }
                }
              }
            }
            for (I = [], U = S; U = U.parentNode; )
              U.nodeType === 1 && I.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < I.length; S++) {
              var k = I[S];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          Ol = !!pu, mu = pu = null;
        } finally {
          Le = o, Y.p = i, w.T = n;
        }
      }
      e.current = t, dt = 2;
    }
  }
  function jm() {
    if (dt === 2) {
      dt = 0;
      var e = _a, t = Hi, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = w.T, w.T = null;
        var i = Y.p;
        Y.p = 2;
        var o = Le;
        Le |= 4;
        try {
          em(e, t.alternate, t);
        } finally {
          Le = o, Y.p = i, w.T = n;
        }
      }
      dt = 3;
    }
  }
  function wm() {
    if (dt === 4 || dt === 3) {
      dt = 0, na();
      var e = _a, t = Hi, n = Kn, i = pm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? dt = 5 : (dt = 0, Hi = _a = null, $m(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Sa = null), vn(n), t = t.stateNode, ht && typeof ht.onCommitFiberRoot == "function")
        try {
          ht.onCommitFiberRoot(
            wn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = w.T, o = Y.p, Y.p = 2, w.T = null;
        try {
          for (var u = e.onRecoverableError, p = 0; p < i.length; p++) {
            var S = i[p];
            u(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          w.T = t, Y.p = o;
        }
      }
      (Kn & 3) !== 0 && bl(), xn(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === eu ? Ur++ : (Ur = 0, eu = e) : Ur = 0, Vr(0);
    }
  }
  function $m(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, vr(t)));
  }
  function bl() {
    return Nm(), jm(), wm(), Mm();
  }
  function Mm() {
    if (dt !== 5) return !1;
    var e = _a, t = Wc;
    Wc = 0;
    var n = vn(Kn), i = w.T, o = Y.p;
    try {
      Y.p = 32 > n ? 32 : n, w.T = null, n = Pc, Pc = null;
      var u = _a, p = Kn;
      if (dt = 0, Hi = _a = null, Kn = 0, (Le & 6) !== 0) throw Error(l(331));
      var S = Le;
      if (Le |= 4, um(u.current), lm(
        u,
        u.current,
        p,
        n
      ), Le = S, Vr(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(wn, u);
        } catch {
        }
      return !0;
    } finally {
      Y.p = o, w.T = i, $m(e, t);
    }
  }
  function Tm(e, t, n) {
    t = Ft(n, t), t = Cc(e.stateNode, t, 2), e = ma(e, t, 2), e !== null && (sa(e, 2), xn(e));
  }
  function Be(e, t, n) {
    if (e.tag === 3)
      Tm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Tm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Sa === null || !Sa.has(i))) {
            e = Ft(n, e), n = Op(2), i = ma(t, n, 2), i !== null && (Cp(
              n,
              i,
              t,
              e
            ), sa(i, 2), xn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function au(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Fv();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(n) || (Jc = !0, o.add(n), e = nb.bind(null, e, t, n), t.then(e, e));
  }
  function nb(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (Me & n) === n && (tt === 4 || tt === 3 && (Me & 62914560) === Me && 300 > At() - pl ? (Le & 2) === 0 && Gi(e, 0) : Zc |= n, Bi === Me && (Bi = 0)), xn(e);
  }
  function Om(e, t) {
    t === 0 && (t = ir()), e = ka(e, t), e !== null && (sa(e, t), xn(e));
  }
  function ab(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Om(e, n);
  }
  function ib(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    i !== null && i.delete(t), Om(e, n);
  }
  function rb(e, t) {
    return on(e, t);
  }
  var Sl = null, ki = null, iu = !1, _l = !1, ru = !1, xa = 0;
  function xn(e) {
    e !== ki && e.next === null && (ki === null ? Sl = ki = e : ki = ki.next = e), _l = !0, iu || (iu = !0, lb());
  }
  function Vr(e, t) {
    if (!ru && _l) {
      ru = !0;
      do
        for (var n = !1, i = Sl; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var p = i.suspendedLanes, S = i.pingedLanes;
              u = (1 << 31 - Nt(42 | e) + 1) - 1, u &= o & ~(p & ~S), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Rm(i, u));
          } else
            u = Me, u = Xt(
              i,
              i === Xe ? u : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (u & 3) === 0 || ra(i, u) || (n = !0, Rm(i, u));
          i = i.next;
        }
      while (n);
      ru = !1;
    }
  }
  function sb() {
    Cm();
  }
  function Cm() {
    _l = iu = !1;
    var e = 0;
    xa !== 0 && yb() && (e = xa);
    for (var t = At(), n = null, i = Sl; i !== null; ) {
      var o = i.next, u = Dm(i, t);
      u === 0 ? (i.next = null, n === null ? Sl = o : n.next = o, o === null && (ki = n)) : (n = i, (e !== 0 || (u & 3) !== 0) && (_l = !0)), i = o;
    }
    dt !== 0 && dt !== 5 || Vr(e), xa !== 0 && (xa = 0);
  }
  function Dm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var p = 31 - Nt(u), S = 1 << p, A = o[p];
      A === -1 ? ((S & n) === 0 || (S & i) !== 0) && (o[p] = Ns(S, t)) : A <= t && (e.expiredLanes |= S), u &= ~S;
    }
    if (t = Xe, n = Me, n = Xt(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Pe(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ra(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && Pe(i), vn(n)) {
        case 2:
        case 8:
          n = ar;
          break;
        case 32:
          n = Ua;
          break;
        case 268435456:
          n = Es;
          break;
        default:
          n = Ua;
      }
      return i = zm.bind(null, e), n = on(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && Pe(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zm(e, t) {
    if (dt !== 0 && dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (bl() && e.callbackNode !== n)
      return null;
    var i = Me;
    return i = Xt(
      e,
      e === Xe ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (hm(e, i, t), Dm(e, At()), e.callbackNode != null && e.callbackNode === n ? zm.bind(null, e) : null);
  }
  function Rm(e, t) {
    if (bl()) return null;
    hm(e, t, !0);
  }
  function lb() {
    bb(function() {
      (Le & 6) !== 0 ? on(
        _s,
        sb
      ) : Cm();
    });
  }
  function su() {
    if (xa === 0) {
      var e = $i;
      e === 0 && (e = ia, ia <<= 1, (ia & 261888) === 0 && (ia = 256)), xa = e;
    }
    return xa;
  }
  function Lm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ms("" + e);
  }
  function Um(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function ob(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var u = Lm(
        (o[Ze] || null).action
      ), p = i.submitter;
      p && (t = (t = p[Ze] || null) ? Lm(t.formAction) : p.getAttribute("formAction"), t !== null && (u = t, p = null));
      var S = new Ds(
        "action",
        "action",
        null,
        i,
        o
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (xa !== 0) {
                  var A = p ? Um(o, p) : new FormData(o);
                  jc(
                    n,
                    {
                      pending: !0,
                      data: A,
                      method: o.method,
                      action: u
                    },
                    null,
                    A
                  );
                }
              } else
                typeof u == "function" && (S.preventDefault(), A = p ? Um(o, p) : new FormData(o), jc(
                  n,
                  {
                    pending: !0,
                    data: A,
                    method: o.method,
                    action: u
                  },
                  u,
                  A
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var lu = 0; lu < ko.length; lu++) {
    var ou = ko[lu], cb = ou.toLowerCase(), ub = ou[0].toUpperCase() + ou.slice(1);
    un(
      cb,
      "on" + ub
    );
  }
  un(mf, "onAnimationEnd"), un(hf, "onAnimationIteration"), un(gf, "onAnimationStart"), un("dblclick", "onDoubleClick"), un("focusin", "onFocus"), un("focusout", "onBlur"), un(jv, "onTransitionRun"), un(wv, "onTransitionStart"), un($v, "onTransitionCancel"), un(yf, "onTransitionEnd"), mi("onMouseEnter", ["mouseout", "mouseover"]), mi("onMouseLeave", ["mouseout", "mouseover"]), mi("onPointerEnter", ["pointerout", "pointerover"]), mi("onPointerLeave", ["pointerout", "pointerover"]), Ba(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ba(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ba("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ba(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ba(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ba(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), db = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Br)
  );
  function Vm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], o = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = i.length - 1; 0 <= p; p--) {
            var S = i[p], A = S.instance, O = S.currentTarget;
            if (S = S.listener, A !== u && o.isPropagationStopped())
              break e;
            u = S, o.currentTarget = O;
            try {
              u(o);
            } catch (G) {
              Ls(G);
            }
            o.currentTarget = null, u = A;
          }
        else
          for (p = 0; p < i.length; p++) {
            if (S = i[p], A = S.instance, O = S.currentTarget, S = S.listener, A !== u && o.isPropagationStopped())
              break e;
            u = S, o.currentTarget = O;
            try {
              u(o);
            } catch (G) {
              Ls(G);
            }
            o.currentTarget = null, u = A;
          }
      }
    }
  }
  function $e(e, t) {
    var n = t[_o];
    n === void 0 && (n = t[_o] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Bm(t, e, 2, !1), n.add(i));
  }
  function cu(e, t, n) {
    var i = 0;
    t && (i |= 4), Bm(
      n,
      e,
      i,
      t
    );
  }
  var El = "_reactListening" + Math.random().toString(36).slice(2);
  function uu(e) {
    if (!e[El]) {
      e[El] = !0, Od.forEach(function(n) {
        n !== "selectionchange" && (db.has(n) || cu(n, !1, e), cu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[El] || (t[El] = !0, cu("selectionchange", !1, t));
    }
  }
  function Bm(e, t, n, i) {
    switch (mh(t)) {
      case 2:
        var o = Bb;
        break;
      case 8:
        o = Hb;
        break;
      default:
        o = Nu;
    }
    n = o.bind(
      null,
      t,
      n,
      e
    ), o = void 0, !To || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, !1);
  }
  function du(e, t, n, i, o) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var p = i.tag;
        if (p === 3 || p === 4) {
          var S = i.stateNode.containerInfo;
          if (S === o) break;
          if (p === 4)
            for (p = i.return; p !== null; ) {
              var A = p.tag;
              if ((A === 3 || A === 4) && p.stateNode.containerInfo === o)
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (p = di(S), p === null) return;
            if (A = p.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              i = u = p;
              continue e;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    kd(function() {
      var O = u, G = $o(n), I = [];
      e: {
        var z = vf.get(e);
        if (z !== void 0) {
          var U = Ds, se = e;
          switch (e) {
            case "keypress":
              if (Os(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = iv;
              break;
            case "focusin":
              se = "focus", U = zo;
              break;
            case "focusout":
              se = "blur", U = zo;
              break;
            case "beforeblur":
            case "afterblur":
              U = zo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = Xd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Xy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = lv;
              break;
            case mf:
            case hf:
            case gf:
              U = Jy;
              break;
            case yf:
              U = cv;
              break;
            case "scroll":
            case "scrollend":
              U = Iy;
              break;
            case "wheel":
              U = dv;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Fy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Qd;
              break;
            case "toggle":
            case "beforetoggle":
              U = pv;
          }
          var pe = (t & 4) !== 0, ke = !pe && (e === "scroll" || e === "scrollend"), $ = pe ? z !== null ? z + "Capture" : null : z;
          pe = [];
          for (var j = O, T; j !== null; ) {
            var k = j;
            if (T = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || T === null || $ === null || (k = lr(j, $), k != null && pe.push(
              Hr(j, k, T)
            )), ke) break;
            j = j.return;
          }
          0 < pe.length && (z = new U(
            z,
            se,
            null,
            n,
            G
          ), I.push({ event: z, listeners: pe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", z && n !== wo && (se = n.relatedTarget || n.fromElement) && (di(se) || se[bn]))
            break e;
          if ((U || z) && (z = G.window === G ? G : (z = G.ownerDocument) ? z.defaultView || z.parentWindow : window, U ? (se = n.relatedTarget || n.toElement, U = O, se = se ? di(se) : null, se !== null && (ke = d(se), pe = se.tag, se !== ke || pe !== 5 && pe !== 27 && pe !== 6) && (se = null)) : (U = null, se = O), U !== se)) {
            if (pe = Xd, k = "onMouseLeave", $ = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (pe = Qd, k = "onPointerLeave", $ = "onPointerEnter", j = "pointer"), ke = U == null ? z : sr(U), T = se == null ? z : sr(se), z = new pe(
              k,
              j + "leave",
              U,
              n,
              G
            ), z.target = ke, z.relatedTarget = T, k = null, di(G) === O && (pe = new pe(
              $,
              j + "enter",
              se,
              n,
              G
            ), pe.target = T, pe.relatedTarget = ke, k = pe), ke = k, U && se)
              t: {
                for (pe = fb, $ = U, j = se, T = 0, k = $; k; k = pe(k))
                  T++;
                k = 0;
                for (var fe = j; fe; fe = pe(fe))
                  k++;
                for (; 0 < T - k; )
                  $ = pe($), T--;
                for (; 0 < k - T; )
                  j = pe(j), k--;
                for (; T--; ) {
                  if ($ === j || j !== null && $ === j.alternate) {
                    pe = $;
                    break t;
                  }
                  $ = pe($), j = pe(j);
                }
                pe = null;
              }
            else pe = null;
            U !== null && Hm(
              I,
              z,
              U,
              pe,
              !1
            ), se !== null && ke !== null && Hm(
              I,
              ke,
              se,
              pe,
              !0
            );
          }
        }
        e: {
          if (z = O ? sr(O) : window, U = z.nodeName && z.nodeName.toLowerCase(), U === "select" || U === "input" && z.type === "file")
            var ze = nf;
          else if (ef(z))
            if (af)
              ze = xv;
            else {
              ze = _v;
              var oe = Sv;
            }
          else
            U = z.nodeName, !U || U.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? O && jo(O.elementType) && (ze = nf) : ze = Ev;
          if (ze && (ze = ze(e, O))) {
            tf(
              I,
              ze,
              n,
              G
            );
            break e;
          }
          oe && oe(e, z, O), e === "focusout" && O && z.type === "number" && O.memoizedProps.value != null && No(z, "number", z.value);
        }
        switch (oe = O ? sr(O) : window, e) {
          case "focusin":
            (ef(oe) || oe.contentEditable === "true") && (Si = oe, Ho = O, hr = null);
            break;
          case "focusout":
            hr = Ho = Si = null;
            break;
          case "mousedown":
            Go = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Go = !1, ff(I, n, G);
            break;
          case "selectionchange":
            if (Nv) break;
          case "keydown":
          case "keyup":
            ff(I, n, G);
        }
        var Ae;
        if (Lo)
          e: {
            switch (e) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          bi ? Wd(e, n) && (Te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Te = "onCompositionStart");
        Te && (Jd && n.locale !== "ko" && (bi || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && bi && (Ae = Id()) : (la = G, Oo = "value" in la ? la.value : la.textContent, bi = !0)), oe = xl(O, Te), 0 < oe.length && (Te = new Yd(
          Te,
          e,
          null,
          n,
          G
        ), I.push({ event: Te, listeners: oe }), Ae ? Te.data = Ae : (Ae = Pd(n), Ae !== null && (Te.data = Ae)))), (Ae = hv ? gv(e, n) : yv(e, n)) && (Te = xl(O, "onBeforeInput"), 0 < Te.length && (oe = new Yd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          G
        ), I.push({
          event: oe,
          listeners: Te
        }), oe.data = Ae)), ob(
          I,
          e,
          O,
          n,
          G
        );
      }
      Vm(I, t);
    });
  }
  function Hr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function xl(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e, u = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || u === null || (o = lr(e, n), o != null && i.unshift(
        Hr(e, o, u)
      ), o = lr(e, t), o != null && i.push(
        Hr(e, o, u)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function fb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Hm(e, t, n, i, o) {
    for (var u = t._reactName, p = []; n !== null && n !== i; ) {
      var S = n, A = S.alternate, O = S.stateNode;
      if (S = S.tag, A !== null && A === i) break;
      S !== 5 && S !== 26 && S !== 27 || O === null || (A = O, o ? (O = lr(n, u), O != null && p.unshift(
        Hr(n, O, A)
      )) : o || (O = lr(n, u), O != null && p.push(
        Hr(n, O, A)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var pb = /\r\n?/g, mb = /\u0000|\uFFFD/g;
  function Gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(pb, `
`).replace(mb, "");
  }
  function qm(e, t) {
    return t = Gm(t), Gm(e) === t;
  }
  function qe(e, t, n, i, o, u) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || gi(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && gi(e, "" + i);
        break;
      case "className":
        ws(e, "class", i);
        break;
      case "tabIndex":
        ws(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ws(e, n, i);
        break;
      case "style":
        Gd(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          ws(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = Ms("" + i), e.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && qe(e, t, "name", o.name, o, null), qe(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), qe(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), qe(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (qe(e, t, "encType", o.encType, o, null), qe(e, t, "method", o.method, o, null), qe(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = Ms("" + i), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = Tn);
        break;
      case "onScroll":
        i != null && $e("scroll", e);
        break;
      case "onScrollEnd":
        i != null && $e("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(l(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(l(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ms("" + i), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "" + i) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : e.setAttribute(n, i);
        break;
      case "popover":
        $e("beforetoggle", e), $e("toggle", e), js(e, "popover", i);
        break;
      case "xlinkActuate":
        Mn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Mn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Mn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Mn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Mn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Mn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Mn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Mn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Mn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        js(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = qy.get(n) || n, js(e, n, i));
    }
  }
  function fu(e, t, n, i, o, u) {
    switch (n) {
      case "style":
        Gd(e, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(l(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(l(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string" ? gi(e, i) : (typeof i == "number" || typeof i == "bigint") && gi(e, "" + i);
        break;
      case "onScroll":
        i != null && $e("scroll", e);
        break;
      case "onScrollEnd":
        i != null && $e("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = Tn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cd.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), u = e[Ze] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, o), typeof i == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : js(e, n, i);
          }
    }
  }
  function St(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        $e("error", e), $e("load", e);
        var i = !1, o = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var p = n[u];
            if (p != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  qe(e, t, u, p, n, null);
              }
          }
        o && qe(e, t, "srcSet", n.srcSet, n, null), i && qe(e, t, "src", n.src, n, null);
        return;
      case "input":
        $e("invalid", e);
        var S = u = p = o = null, A = null, O = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var G = n[i];
            if (G != null)
              switch (i) {
                case "name":
                  o = G;
                  break;
                case "type":
                  p = G;
                  break;
                case "checked":
                  A = G;
                  break;
                case "defaultChecked":
                  O = G;
                  break;
                case "value":
                  u = G;
                  break;
                case "defaultValue":
                  S = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(l(137, t));
                  break;
                default:
                  qe(e, t, i, G, n, null);
              }
          }
        Ud(
          e,
          u,
          S,
          A,
          O,
          p,
          o,
          !1
        );
        return;
      case "select":
        $e("invalid", e), i = p = u = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (S = n[o], S != null))
            switch (o) {
              case "value":
                u = S;
                break;
              case "defaultValue":
                p = S;
                break;
              case "multiple":
                i = S;
              default:
                qe(e, t, o, S, n, null);
            }
        t = u, n = p, e.multiple = !!i, t != null ? hi(e, !!i, t, !1) : n != null && hi(e, !!i, n, !0);
        return;
      case "textarea":
        $e("invalid", e), u = o = i = null;
        for (p in n)
          if (n.hasOwnProperty(p) && (S = n[p], S != null))
            switch (p) {
              case "value":
                i = S;
                break;
              case "defaultValue":
                o = S;
                break;
              case "children":
                u = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(l(91));
                break;
              default:
                qe(e, t, p, S, n, null);
            }
        Bd(e, i, o, u);
        return;
      case "option":
        for (A in n)
          if (n.hasOwnProperty(A) && (i = n[A], i != null))
            switch (A) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                qe(e, t, A, i, n, null);
            }
        return;
      case "dialog":
        $e("beforetoggle", e), $e("toggle", e), $e("cancel", e), $e("close", e);
        break;
      case "iframe":
      case "object":
        $e("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Br.length; i++)
          $e(Br[i], e);
        break;
      case "image":
        $e("error", e), $e("load", e);
        break;
      case "details":
        $e("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        $e("error", e), $e("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in n)
          if (n.hasOwnProperty(O) && (i = n[O], i != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                qe(e, t, O, i, n, null);
            }
        return;
      default:
        if (jo(t)) {
          for (G in n)
            n.hasOwnProperty(G) && (i = n[G], i !== void 0 && fu(
              e,
              t,
              G,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (S in n)
      n.hasOwnProperty(S) && (i = n[S], i != null && qe(e, t, S, i, n, null));
  }
  function hb(e, t, n, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, u = null, p = null, S = null, A = null, O = null, G = null;
        for (U in n) {
          var I = n[U];
          if (n.hasOwnProperty(U) && I != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = I;
              default:
                i.hasOwnProperty(U) || qe(e, t, U, null, i, I);
            }
        }
        for (var z in i) {
          var U = i[z];
          if (I = n[z], i.hasOwnProperty(z) && (U != null || I != null))
            switch (z) {
              case "type":
                u = U;
                break;
              case "name":
                o = U;
                break;
              case "checked":
                O = U;
                break;
              case "defaultChecked":
                G = U;
                break;
              case "value":
                p = U;
                break;
              case "defaultValue":
                S = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(l(137, t));
                break;
              default:
                U !== I && qe(
                  e,
                  t,
                  z,
                  U,
                  i,
                  I
                );
            }
        }
        Ao(
          e,
          p,
          S,
          A,
          O,
          G,
          u,
          o
        );
        return;
      case "select":
        U = p = S = z = null;
        for (u in n)
          if (A = n[u], n.hasOwnProperty(u) && A != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = A;
              default:
                i.hasOwnProperty(u) || qe(
                  e,
                  t,
                  u,
                  null,
                  i,
                  A
                );
            }
        for (o in i)
          if (u = i[o], A = n[o], i.hasOwnProperty(o) && (u != null || A != null))
            switch (o) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                S = u;
                break;
              case "multiple":
                p = u;
              default:
                u !== A && qe(
                  e,
                  t,
                  o,
                  u,
                  i,
                  A
                );
            }
        t = S, n = p, i = U, z != null ? hi(e, !!n, z, !1) : !!i != !!n && (t != null ? hi(e, !!n, t, !0) : hi(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = z = null;
        for (S in n)
          if (o = n[S], n.hasOwnProperty(S) && o != null && !i.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, S, null, i, o);
            }
        for (p in i)
          if (o = i[p], u = n[p], i.hasOwnProperty(p) && (o != null || u != null))
            switch (p) {
              case "value":
                z = o;
                break;
              case "defaultValue":
                U = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(l(91));
                break;
              default:
                o !== u && qe(e, t, p, o, i, u);
            }
        Vd(e, z, U);
        return;
      case "option":
        for (var se in n)
          if (z = n[se], n.hasOwnProperty(se) && z != null && !i.hasOwnProperty(se))
            switch (se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                qe(
                  e,
                  t,
                  se,
                  null,
                  i,
                  z
                );
            }
        for (A in i)
          if (z = i[A], U = n[A], i.hasOwnProperty(A) && z !== U && (z != null || U != null))
            switch (A) {
              case "selected":
                e.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                qe(
                  e,
                  t,
                  A,
                  z,
                  i,
                  U
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var pe in n)
          z = n[pe], n.hasOwnProperty(pe) && z != null && !i.hasOwnProperty(pe) && qe(e, t, pe, null, i, z);
        for (O in i)
          if (z = i[O], U = n[O], i.hasOwnProperty(O) && z !== U && (z != null || U != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(l(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  O,
                  z,
                  i,
                  U
                );
            }
        return;
      default:
        if (jo(t)) {
          for (var ke in n)
            z = n[ke], n.hasOwnProperty(ke) && z !== void 0 && !i.hasOwnProperty(ke) && fu(
              e,
              t,
              ke,
              void 0,
              i,
              z
            );
          for (G in i)
            z = i[G], U = n[G], !i.hasOwnProperty(G) || z === U || z === void 0 && U === void 0 || fu(
              e,
              t,
              G,
              z,
              i,
              U
            );
          return;
        }
    }
    for (var $ in n)
      z = n[$], n.hasOwnProperty($) && z != null && !i.hasOwnProperty($) && qe(e, t, $, null, i, z);
    for (I in i)
      z = i[I], U = n[I], !i.hasOwnProperty(I) || z === U || z == null && U == null || qe(e, t, I, z, i, U);
  }
  function km(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function gb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var o = n[i], u = o.transferSize, p = o.initiatorType, S = o.duration;
        if (u && S && km(p)) {
          for (p = 0, S = o.responseEnd, i += 1; i < n.length; i++) {
            var A = n[i], O = A.startTime;
            if (O > S) break;
            var G = A.transferSize, I = A.initiatorType;
            G && km(I) && (A = A.responseEnd, p += G * (A < S ? 1 : (S - O) / (A - O)));
          }
          if (--i, t += 8 * (u + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var pu = null, mu = null;
  function Al(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Im(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Km(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function hu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gu = null;
  function yb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === gu ? !1 : (gu = e, !0) : (gu = null, !1);
  }
  var Xm = typeof setTimeout == "function" ? setTimeout : void 0, vb = typeof clearTimeout == "function" ? clearTimeout : void 0, Ym = typeof Promise == "function" ? Promise : void 0, bb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ym < "u" ? function(e) {
    return Ym.resolve(null).then(e).catch(Sb);
  } : Xm;
  function Sb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Aa(e) {
    return e === "head";
  }
  function Qm(e, t) {
    var n = t, i = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (i === 0) {
            e.removeChild(o), Yi(t);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          Gr(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Gr(n);
          for (var u = n.firstChild; u; ) {
            var p = u.nextSibling, S = u.nodeName;
            u[rr] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = p;
          }
        } else
          n === "body" && Gr(e.ownerDocument.body);
      n = o;
    } while (n);
    Yi(t);
  }
  function Jm(e, t) {
    var n = e;
    e = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = i;
    } while (n);
  }
  function yu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yu(n), Eo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function _b(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[rr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = nn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Eb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = nn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = nn(e.nextSibling), e === null)) return null;
    return e;
  }
  function vu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function bu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function xb(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var i = function() {
        t(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
    }
  }
  function nn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Su = null;
  function Fm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return nn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Wm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Pm(e, t, n) {
    switch (t = Al(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function Gr(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Eo(e);
  }
  var an = /* @__PURE__ */ new Map(), eh = /* @__PURE__ */ new Set();
  function Nl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Xn = Y.d;
  Y.d = {
    f: Ab,
    r: Nb,
    D: jb,
    C: wb,
    L: $b,
    m: Mb,
    X: Ob,
    S: Tb,
    M: Cb
  };
  function Ab() {
    var e = Xn.f(), t = gl();
    return e || t;
  }
  function Nb(e) {
    var t = fi(e);
    t !== null && t.tag === 5 && t.type === "form" ? yp(t) : Xn.r(e);
  }
  var Ii = typeof document > "u" ? null : document;
  function th(e, t, n) {
    var i = Ii;
    if (i && typeof t == "string" && t) {
      var o = Jt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), eh.has(o) || (eh.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), St(t, "link", e), ft(t), i.head.appendChild(t)));
    }
  }
  function jb(e) {
    Xn.D(e), th("dns-prefetch", e, null);
  }
  function wb(e, t) {
    Xn.C(e, t), th("preconnect", e, t);
  }
  function $b(e, t, n) {
    Xn.L(e, t, n);
    var i = Ii;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Jt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Jt(
        n.imageSizes
      ) + '"]')) : o += '[href="' + Jt(e) + '"]';
      var u = o;
      switch (t) {
        case "style":
          u = Ki(e);
          break;
        case "script":
          u = Xi(e);
      }
      an.has(u) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), an.set(u, e), i.querySelector(o) !== null || t === "style" && i.querySelector(qr(u)) || t === "script" && i.querySelector(kr(u)) || (t = i.createElement("link"), St(t, "link", e), ft(t), i.head.appendChild(t)));
    }
  }
  function Mb(e, t) {
    Xn.m(e, t);
    var n = Ii;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Jt(i) + '"][href="' + Jt(e) + '"]', u = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Xi(e);
      }
      if (!an.has(u) && (e = b({ rel: "modulepreload", href: e }, t), an.set(u, e), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(kr(u)))
              return;
        }
        i = n.createElement("link"), St(i, "link", e), ft(i), n.head.appendChild(i);
      }
    }
  }
  function Tb(e, t, n) {
    Xn.S(e, t, n);
    var i = Ii;
    if (i && e) {
      var o = pi(i).hoistableStyles, u = Ki(e);
      t = t || "default";
      var p = o.get(u);
      if (!p) {
        var S = { loading: 0, preload: null };
        if (p = i.querySelector(
          qr(u)
        ))
          S.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = an.get(u)) && _u(e, n);
          var A = p = i.createElement("link");
          ft(A), St(A, "link", e), A._p = new Promise(function(O, G) {
            A.onload = O, A.onerror = G;
          }), A.addEventListener("load", function() {
            S.loading |= 1;
          }), A.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, jl(p, t, i);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: S
        }, o.set(u, p);
      }
    }
  }
  function Ob(e, t) {
    Xn.X(e, t);
    var n = Ii;
    if (n && e) {
      var i = pi(n).hoistableScripts, o = Xi(e), u = i.get(o);
      u || (u = n.querySelector(kr(o)), u || (e = b({ src: e, async: !0 }, t), (t = an.get(o)) && Eu(e, t), u = n.createElement("script"), ft(u), St(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(o, u));
    }
  }
  function Cb(e, t) {
    Xn.M(e, t);
    var n = Ii;
    if (n && e) {
      var i = pi(n).hoistableScripts, o = Xi(e), u = i.get(o);
      u || (u = n.querySelector(kr(o)), u || (e = b({ src: e, async: !0, type: "module" }, t), (t = an.get(o)) && Eu(e, t), u = n.createElement("script"), ft(u), St(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(o, u));
    }
  }
  function nh(e, t, n, i) {
    var o = (o = Se.current) ? Nl(o) : null;
    if (!o) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ki(n.href), n = pi(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ki(n.href);
          var u = pi(
            o
          ).hoistableStyles, p = u.get(e);
          if (p || (o = o.ownerDocument || o, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, p), (u = o.querySelector(
            qr(e)
          )) && !u._p && (p.instance = u, p.state.loading = 5), an.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, an.set(e, n), u || Db(
            o,
            e,
            n,
            p.state
          ))), t && i === null)
            throw Error(l(528, ""));
          return p;
        }
        if (t && i !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Xi(n), n = pi(
          o
        ).hoistableScripts, i = n.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function Ki(e) {
    return 'href="' + Jt(e) + '"';
  }
  function qr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ah(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Db(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), St(t, "link", n), ft(t), e.head.appendChild(t));
  }
  function Xi(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function kr(e) {
    return "script[async]" + e;
  }
  function ih(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + Jt(n.href) + '"]'
          );
          if (i)
            return t.instance = i, ft(i), i;
          var o = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), ft(i), St(i, "style", o), jl(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = Ki(n.href);
          var u = e.querySelector(
            qr(o)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ft(u), u;
          i = ah(n), (o = an.get(o)) && _u(i, o), u = (e.ownerDocument || e).createElement("link"), ft(u);
          var p = u;
          return p._p = new Promise(function(S, A) {
            p.onload = S, p.onerror = A;
          }), St(u, "link", i), t.state.loading |= 4, jl(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Xi(n.src), (o = e.querySelector(
            kr(u)
          )) ? (t.instance = o, ft(o), o) : (i = n, (o = an.get(u)) && (i = b({}, n), Eu(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ft(o), St(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, jl(i, n.precedence, e));
    return t.instance;
  }
  function jl(e, t, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, u = o, p = 0; p < i.length; p++) {
      var S = i[p];
      if (S.dataset.precedence === t) u = S;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function _u(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Eu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var wl = null;
  function rh(e, t, n) {
    if (wl === null) {
      var i = /* @__PURE__ */ new Map(), o = wl = /* @__PURE__ */ new Map();
      o.set(n, i);
    } else
      o = wl, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
    if (i.has(e)) return i;
    for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var u = n[o];
      if (!(u[rr] || u[je] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = u.getAttribute(t) || "";
        p = e + p;
        var S = i.get(p);
        S ? S.push(u) : i.set(p, [u]);
      }
    }
    return i;
  }
  function sh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function zb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function lh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Rb(e, t, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = Ki(i.href), u = t.querySelector(
          qr(o)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = $l.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, ft(u);
          return;
        }
        u = t.ownerDocument || t, i = ah(i), (o = an.get(o)) && _u(i, o), u = u.createElement("link"), ft(u);
        var p = u;
        p._p = new Promise(function(S, A) {
          p.onload = S, p.onerror = A;
        }), St(u, "link", i), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = $l.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var xu = 0;
  function Lb(e, t) {
    return e.stylesheets && e.count === 0 && Tl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Tl(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && xu === 0 && (xu = 62500 * gb());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Tl(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > xu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function $l() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Tl(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ml = null;
  function Tl(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ml = /* @__PURE__ */ new Map(), t.forEach(Ub, e), Ml = null, $l.call(e));
  }
  function Ub(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ml.get(e);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ml.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < o.length; u++) {
          var p = o[u];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), i = p);
        }
        i && n.set(null, i);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), u = n.get(p) || i, u === i && n.set(null, o), n.set(p, o), this.count++, i = $l.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ir = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0
  };
  function Vb(e, t, n, i, o, u, p, S, A) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ui(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ui(0), this.hiddenUpdates = ui(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function oh(e, t, n, i, o, u, p, S, A, O, G, I) {
    return e = new Vb(
      e,
      t,
      n,
      p,
      A,
      O,
      G,
      I,
      S
    ), t = 1, u === !0 && (t |= 24), u = Ht(3, null, null, t), e.current = u, u.stateNode = e, t = nc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, sc(u), e;
  }
  function ch(e) {
    return e ? (e = xi, e) : xi;
  }
  function uh(e, t, n, i, o, u) {
    o = ch(o), i.context === null ? i.context = o : i.pendingContext = o, i = pa(t), i.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (i.callback = u), n = ma(e, i, t), n !== null && (Rt(n, e, t), Er(n, e, t));
  }
  function dh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Au(e, t) {
    dh(e, t), (e = e.alternate) && dh(e, t);
  }
  function fh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ka(e, 67108864);
      t !== null && Rt(t, e, 67108864), Au(e, 67108864);
    }
  }
  function ph(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kt();
      t = Ue(t);
      var n = ka(e, t);
      n !== null && Rt(n, e, t), Au(e, t);
    }
  }
  var Ol = !0;
  function Bb(e, t, n, i) {
    var o = w.T;
    w.T = null;
    var u = Y.p;
    try {
      Y.p = 2, Nu(e, t, n, i);
    } finally {
      Y.p = u, w.T = o;
    }
  }
  function Hb(e, t, n, i) {
    var o = w.T;
    w.T = null;
    var u = Y.p;
    try {
      Y.p = 8, Nu(e, t, n, i);
    } finally {
      Y.p = u, w.T = o;
    }
  }
  function Nu(e, t, n, i) {
    if (Ol) {
      var o = ju(i);
      if (o === null)
        du(
          e,
          t,
          i,
          Cl,
          n
        ), hh(e, i);
      else if (qb(
        o,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (hh(e, i), t & 4 && -1 < Gb.indexOf(e)) {
        for (; o !== null; ) {
          var u = fi(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var p = yn(u.pendingLanes);
                  if (p !== 0) {
                    var S = u;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                      var A = 1 << 31 - Nt(p);
                      S.entanglements[1] |= A, p &= ~A;
                    }
                    xn(u), (Le & 6) === 0 && (ml = At() + 500, Vr(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = ka(u, 2), S !== null && Rt(S, u, 2), gl(), Au(u, 2);
            }
          if (u = ju(i), u === null && du(
            e,
            t,
            i,
            Cl,
            n
          ), u === o) break;
          o = u;
        }
        o !== null && i.stopPropagation();
      } else
        du(
          e,
          t,
          i,
          null,
          n
        );
    }
  }
  function ju(e) {
    return e = $o(e), wu(e);
  }
  var Cl = null;
  function wu(e) {
    if (Cl = null, e = di(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Cl = e, null;
  }
  function mh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (vo()) {
          case _s:
            return 2;
          case ar:
            return 8;
          case Ua:
          case bo:
            return 32;
          case Es:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $u = !1, Na = null, ja = null, wa = null, Kr = /* @__PURE__ */ new Map(), Xr = /* @__PURE__ */ new Map(), $a = [], Gb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Na = null;
        break;
      case "dragenter":
      case "dragleave":
        ja = null;
        break;
      case "mouseover":
      case "mouseout":
        wa = null;
        break;
      case "pointerover":
      case "pointerout":
        Kr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xr.delete(t.pointerId);
    }
  }
  function Yr(e, t, n, i, o, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: u,
      targetContainers: [o]
    }, t !== null && (t = fi(t), t !== null && fh(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function qb(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return Na = Yr(
          Na,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return ja = Yr(
          ja,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return wa = Yr(
          wa,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "pointerover":
        var u = o.pointerId;
        return Kr.set(
          u,
          Yr(
            Kr.get(u) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return u = o.pointerId, Xr.set(
          u,
          Yr(
            Xr.get(u) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
    }
    return !1;
  }
  function gh(e) {
    var t = di(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, Yt(e.priority, function() {
              ph(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, Yt(e.priority, function() {
              ph(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Dl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ju(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        wo = i, n.target.dispatchEvent(i), wo = null;
      } else
        return t = fi(n), t !== null && fh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function yh(e, t, n) {
    Dl(e) && n.delete(t);
  }
  function kb() {
    $u = !1, Na !== null && Dl(Na) && (Na = null), ja !== null && Dl(ja) && (ja = null), wa !== null && Dl(wa) && (wa = null), Kr.forEach(yh), Xr.forEach(yh);
  }
  function zl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $u || ($u = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      kb
    )));
  }
  var Rl = null;
  function vh(e) {
    Rl !== e && (Rl = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Rl === e && (Rl = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (wu(i || n) === null)
              continue;
            break;
          }
          var u = fi(n);
          u !== null && (e.splice(t, 3), t -= 3, jc(
            u,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: i
            },
            i,
            o
          ));
        }
      }
    ));
  }
  function Yi(e) {
    function t(A) {
      return zl(A, e);
    }
    Na !== null && zl(Na, e), ja !== null && zl(ja, e), wa !== null && zl(wa, e), Kr.forEach(t), Xr.forEach(t);
    for (var n = 0; n < $a.length; n++) {
      var i = $a[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < $a.length && (n = $a[0], n.blockedOn === null); )
      gh(n), n.blockedOn === null && $a.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], u = n[i + 1], p = o[Ze] || null;
        if (typeof u == "function")
          p || vh(n);
        else if (p) {
          var S = null;
          if (u && u.hasAttribute("formAction")) {
            if (o = u, p = u[Ze] || null)
              S = p.formAction;
            else if (wu(o) !== null) continue;
          } else S = p.action;
          typeof S == "function" ? n[i + 1] = S : (n.splice(i, 3), i -= 3), vh(n);
        }
      }
  }
  function bh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(p) {
            return o = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      o !== null && (o(), o = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function Mu(e) {
    this._internalRoot = e;
  }
  Ll.prototype.render = Mu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var n = t.current, i = Kt();
    uh(n, i, e, t, null, null);
  }, Ll.prototype.unmount = Mu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      uh(e.current, 2, null, e, null, null), gl(), t[bn] = null;
    }
  };
  function Ll(e) {
    this._internalRoot = e;
  }
  Ll.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vt();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < $a.length && t !== 0 && t < $a[n].priority; n++) ;
      $a.splice(n, 0, e), n === 0 && gh(e);
    }
  };
  var Sh = r.version;
  if (Sh !== "19.2.7")
    throw Error(
      l(
        527,
        Sh,
        "19.2.7"
      )
    );
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Ib = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: w,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ul.isDisabled && Ul.supportsFiber)
      try {
        wn = Ul.inject(
          Ib
        ), ht = Ul;
      } catch {
      }
  }
  return Jr.createRoot = function(e, t) {
    if (!c(e)) throw Error(l(299));
    var n = !1, i = "", o = wp, u = $p, p = Mp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = oh(
      e,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      o,
      u,
      p,
      bh
    ), e[bn] = t.current, uu(e), new Mu(t);
  }, Jr.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(l(299));
    var i = !1, o = "", u = wp, p = $p, S = Mp, A = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (A = n.formState)), t = oh(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      o,
      A,
      u,
      p,
      S,
      bh
    ), t.context = ch(null), n = t.current, i = Kt(), i = Ue(i), o = pa(i), o.callback = null, ma(n, o, i), n = i, t.current.lanes = n, sa(t, n), xn(t), e[bn] = t.current, uu(e), new Ll(t);
  }, Jr.version = "19.2.7", Jr;
}
var Th;
function i0() {
  if (Th) return Cu.exports;
  Th = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Cu.exports = a0(), Cu.exports;
}
var r0 = i0();
const s0 = ["none", "low", "medium", "high", "xhigh", "max"], l0 = ["low", "medium", "high", "xhigh", "max"], o0 = [
  {
    id: "gpt-5.6-sol",
    label: "GPT-5.6 Sol",
    description: "Frontier model for complex professional work",
    codexDefault: "max"
  },
  {
    id: "gpt-5.6-terra",
    label: "GPT-5.6 Terra",
    description: "Balances intelligence and cost",
    codexDefault: "medium"
  },
  {
    id: "gpt-5.6-luna",
    label: "GPT-5.6 Luna",
    description: "Optimized for cost-sensitive workloads",
    codexDefault: "medium"
  }
], c0 = 300 * 1e3, u0 = 500, Oh = 256, d0 = 160, f0 = 500, p0 = 300, m0 = /[\u0000-\u001f\u007f]/, is = /* @__PURE__ */ new Map();
function pd(a) {
  return typeof a == "string" && a !== "ultra" && /^[a-z][a-z0-9_-]{0,63}$/.test(a);
}
function Zl(a, r) {
  if (typeof a != "string" || m0.test(a)) return;
  const s = a.trim();
  if (s !== "")
    return s.slice(0, r);
}
function h0(a) {
  const r = Zl(a, Oh + 1);
  return r && r.length <= Oh ? r : void 0;
}
function g0(a) {
  if (!Array.isArray(a)) return;
  const r = /* @__PURE__ */ new Map();
  for (const s of a) {
    const l = typeof s == "string" ? s : s && typeof s == "object" ? s.effort : void 0;
    if (!pd(l) || r.has(l)) continue;
    const c = { effort: l };
    if (s && typeof s == "object") {
      const d = s.description, f = Zl(d, p0);
      f && (c.description = f);
    }
    r.set(l, c);
  }
  return r.size > 0 ? Array.from(r.values()) : void 0;
}
function md(a) {
  var r;
  return {
    ...a,
    reasoningEfforts: (r = a.reasoningEfforts) == null ? void 0 : r.map((s) => ({ ...s }))
  };
}
function y0(a) {
  return {
    models: a.models.map(md),
    capabilities: { ...a.capabilities },
    ...a.source ? { source: a.source } : {}
  };
}
function Cg(a) {
  if (!Array.isArray(a)) return [];
  const r = /* @__PURE__ */ new Set(), s = [];
  for (const l of a) {
    if (s.length >= u0) break;
    const c = typeof l == "string" ? { id: l } : l ?? {}, d = h0(c.id);
    if (!d || r.has(d)) continue;
    r.add(d);
    const f = [c.label, c.display_name, c.name].map((b) => Zl(b, d0)).find(Boolean), y = {
      id: d,
      label: f ?? d
    }, m = Zl(c.description, f0);
    m && (y.description = m);
    const g = c.defaultReasoningEffort ?? c.default_reasoning_effort ?? c.default_reasoning_level;
    pd(g) && (y.defaultReasoningEffort = g);
    const v = g0(
      c.reasoningEfforts ?? c.supported_reasoning_efforts ?? c.supported_reasoning_levels ?? c.reasoning_efforts
    );
    v && (y.reasoningEfforts = v), s.push(y);
  }
  return s;
}
function v0(a) {
  return a.filter((r) => r !== "ultra").map((r) => ({ effort: r }));
}
function Dg(a) {
  if (a !== "openai" && a !== "openai-codex") return [];
  const r = a === "openai" ? s0 : l0;
  return o0.map((s) => ({
    id: s.id,
    label: s.label,
    description: s.description,
    defaultReasoningEffort: a === "openai" ? "medium" : s.codexDefault,
    reasoningEfforts: v0(r)
  }));
}
function Xu(a, r) {
  const s = Dg(a), l = s.find((c) => c.id === r);
  if (l) return l;
  if (r === "gpt-5.6") {
    const c = s.find((d) => d.id === "gpt-5.6-sol");
    if (c) return { ...md(c), id: r, label: "GPT-5.6 (Sol alias)" };
  }
}
function zg(a, r, s) {
  const l = [], c = /* @__PURE__ */ new Map(), d = (y) => {
    var v;
    const m = c.get(y.id);
    if (m === void 0) {
      c.set(y.id, l.length), l.push(md(y));
      return;
    }
    const g = l[m];
    l[m] = {
      ...g,
      ...y,
      label: y.label === y.id && g.label !== g.id ? g.label : y.label,
      defaultReasoningEffort: y.defaultReasoningEffort ?? g.defaultReasoningEffort,
      reasoningEfforts: (v = y.reasoningEfforts) != null && v.length ? y.reasoningEfforts.map((b) => ({ ...b })) : g.reasoningEfforts
    };
  };
  Dg(a).forEach(d), r.forEach((y) => {
    const m = Xu(a, y.id);
    m && d(m), d(y);
  });
  const f = s == null ? void 0 : s.trim();
  return f && !c.has(f) && d(Xu(a, f) ?? { id: f, label: f }), l;
}
function Fl(a, r, s = []) {
  var d;
  const l = Xu(a, r), c = s.find((f) => f.id === r);
  return c ? l ? {
    ...l,
    ...c,
    label: c.label === c.id ? l.label : c.label,
    defaultReasoningEffort: c.defaultReasoningEffort ?? l.defaultReasoningEffort,
    reasoningEfforts: (d = c.reasoningEfforts) != null && d.length ? c.reasoningEfforts : l.reasoningEfforts
  } : c : l;
}
function b0(a) {
  let r = 2166136261;
  for (let s = 0; s < a.length; s += 1)
    r ^= a.charCodeAt(s), r = Math.imul(r, 16777619);
  return `${a.length}-${(r >>> 0).toString(36)}`;
}
function Xl(a, r, s) {
  return `${a}:${b0(r ?? "")}:${(s == null ? void 0 : s.trim()) ?? ""}`;
}
function Rg(a, r = Date.now()) {
  const s = is.get(a);
  return s ? s.expiresAt <= r ? (is.delete(a), null) : y0(s.result) : null;
}
function Lg(a, r, s = Date.now()) {
  is.set(a, {
    expiresAt: s + c0,
    result: {
      models: Cg(r.models),
      capabilities: {
        reasoningEffort: r.capabilities.reasoningEffort === !0,
        richModelCatalog: r.capabilities.richModelCatalog === !0
      },
      ...r.source ? { source: r.source } : {}
    }
  });
}
function Pr(a) {
  const r = `${a}:`;
  for (const s of is.keys())
    s.startsWith(r) && is.delete(s);
}
const Yn = {
  provider: "openai",
  models: {
    openai: "gpt-5.6-sol",
    "openai-codex": "gpt-5.6-sol",
    openrouter: "",
    anthropic: "claude-sonnet-4-6",
    custom: ""
  },
  apiKeys: {},
  // Codex ships pinned to GPT-5.6 Sol at max effort. The value is still sent
  // only after the host confirms reasoning-effort support for the model.
  reasoningEfforts: { "openai-codex": "max" },
  providerCapabilities: {},
  customBaseUrl: ""
}, Ug = "settings";
function S0(a, r) {
  const s = {
    ...a.reasoningEfforts
  };
  for (const [l, c] of Object.entries(r.reasoningEfforts ?? {}))
    pd(c) && (s[l] = c);
  return {
    provider: r.provider ?? a.provider,
    models: { ...a.models, ...r.models },
    apiKeys: { ...a.apiKeys, ...r.apiKeys },
    reasoningEfforts: s,
    // A host upgrade/downgrade must be negotiated again each browser session.
    providerCapabilities: {},
    customBaseUrl: r.customBaseUrl !== void 0 ? r.customBaseUrl : a.customBaseUrl
  };
}
function _0(a) {
  const r = a.storage.get(Ug);
  if (!r) return {
    ...Yn,
    models: { ...Yn.models },
    apiKeys: {},
    reasoningEfforts: { ...Yn.reasoningEfforts },
    providerCapabilities: { ...Yn.providerCapabilities }
  };
  try {
    const s = JSON.parse(r);
    return S0(Yn, s);
  } catch {
    return {
      ...Yn,
      models: { ...Yn.models },
      apiKeys: {},
      reasoningEfforts: { ...Yn.reasoningEfforts },
      providerCapabilities: { ...Yn.providerCapabilities }
    };
  }
}
function E0(a, r) {
  const { providerCapabilities: s, ...l } = r;
  a.storage.set(Ug, JSON.stringify(l));
}
function Wl(a) {
  var s, l;
  const r = (s = a.providerCapabilities) == null ? void 0 : s[a.provider];
  if (!((r == null ? void 0 : r.reasoningEffort) !== !0 || r.reasoningModel !== a.models[a.provider]))
    return (l = a.reasoningEfforts) == null ? void 0 : l[a.provider];
}
function Vg(a, r, s) {
  var d;
  const l = { ...a.reasoningEfforts };
  s === "" ? delete l[r] : l[r] = s;
  const c = (d = a.providerCapabilities) == null ? void 0 : d[r];
  return {
    ...a,
    reasoningEfforts: l,
    ...c ? {
      providerCapabilities: {
        ...a.providerCapabilities,
        [r]: {
          reasoningEffort: c.reasoningEffort,
          richModelCatalog: c.richModelCatalog,
          ...s ? { reasoningModel: a.models[r] ?? "" } : {}
        }
      }
    } : {}
  };
}
function Yu(a, r, s, l, c) {
  var D, x;
  const d = (D = a.providerCapabilities) == null ? void 0 : D[r], f = { ...a.reasoningEfforts }, y = f[r], m = a.models[r] ?? "", g = s.find((V) => V.id === m), v = Fl(
    r,
    m,
    zg(r, s, m)
  ), b = !!((x = v == null ? void 0 : v.reasoningEfforts) != null && x.some(
    (V) => V.effort === y
  )), _ = l.reasoningEffort && l.richModelCatalog && !!g && c !== "fallback" && c !== "stale" && !!y && !b;
  _ && delete f[r];
  const N = !_ && l.reasoningEffort && y && b ? m : void 0;
  return ((d == null ? void 0 : d.reasoningEffort) ?? !1) === l.reasoningEffort && ((d == null ? void 0 : d.richModelCatalog) ?? !1) === l.richModelCatalog && (d == null ? void 0 : d.reasoningModel) === N && !_ ? a : {
    ...a,
    reasoningEfforts: f,
    providerCapabilities: {
      ...a.providerCapabilities,
      [r]: {
        reasoningEffort: l.reasoningEffort,
        richModelCatalog: l.richModelCatalog,
        ...N ? { reasoningModel: N } : {}
      }
    }
  };
}
function x0(a, r) {
  switch (a.provider) {
    case "openai":
      return !!a.apiKeys.openai;
    case "openrouter":
      return !!a.apiKeys.openrouter;
    case "anthropic":
      return !!a.apiKeys.anthropic;
    case "openai-codex":
      return r;
    case "custom":
      return !!a.customBaseUrl;
    default:
      return !1;
  }
}
const Ch = 50, Bg = "conversations";
function hd(a) {
  const r = a.storage.get(Bg);
  if (!r) return [];
  try {
    return JSON.parse(r);
  } catch {
    return [];
  }
}
function Dh(a) {
  return a.messages.some((r) => {
    var s;
    return (s = r.attachments) == null ? void 0 : s.some((l) => l.dataUrl);
  }) ? {
    ...a,
    messages: a.messages.map(
      (r) => r.attachments ? {
        ...r,
        attachments: r.attachments.map(
          (s) => s.dataUrl ? { ...s, dataUrl: void 0 } : s
        )
      } : r
    )
  } : a;
}
function Vl(a, r) {
  try {
    return a.storage.set(Bg, JSON.stringify(r)), !0;
  } catch {
    return !1;
  }
}
function Hg(a, r) {
  if (Vl(a, r)) return;
  const s = [...r];
  for (; s.length > 1; )
    if (s.pop(), Vl(a, s)) return;
  Vl(a, r.map(Dh)) || Vl(a, r.slice(0, 1).map(Dh));
}
function Qu(a) {
  return hd(a).sort((r, s) => s.updatedAt - r.updatedAt);
}
function zh(a, r) {
  const s = hd(a), l = s.findIndex((c) => c.id === r.id);
  l >= 0 ? s[l] = r : s.push(r), s.sort((c, d) => d.updatedAt - c.updatedAt), s.length > Ch && s.splice(Ch), Hg(a, s);
}
function A0(a, r) {
  const s = hd(a).filter((l) => l.id !== r);
  Hg(a, s);
}
function Rh(a, r, s) {
  const l = Date.now();
  return {
    id: crypto.randomUUID(),
    title: "",
    createdAt: l,
    updatedAt: l,
    provider: a,
    model: r,
    ...s ? { reasoningEffort: s } : {},
    messages: []
  };
}
function N0(a) {
  return a.slice(0, 40);
}
function j0() {
  return /* @__PURE__ */ h.jsx(
    "svg",
    {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ h.jsx(
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
          fill: "currentColor"
        }
      )
    }
  );
}
function w0({ onClick: a }) {
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      className: "gcp-fab",
      onClick: a,
      "aria-label": "Graph Copilot",
      title: "Graph Copilot",
      children: /* @__PURE__ */ h.jsx(j0, {})
    }
  );
}
const Lh = 8 * 1024 * 1024, Uh = 2 * 1024 * 1024, Vh = 20 * 1024 * 1024, $0 = /* @__PURE__ */ new Set([
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp",
  "bmp",
  "svg",
  "avif",
  "ico"
]);
function Gg(a) {
  const r = a.lastIndexOf(".");
  return r >= 0 ? a.slice(r + 1).toLowerCase() : "";
}
function qg(a) {
  const r = (a.type || "").toLowerCase();
  if (r.startsWith("image/")) return "image";
  if (r === "application/pdf") return "pdf";
  if (r.startsWith("text/")) return "text";
  const s = Gg(a.name);
  return s === "pdf" ? "pdf" : $0.has(s) ? "image" : "text";
}
function ns(a) {
  return a < 1024 ? `${a} B` : a < 1024 * 1024 ? `${(a / 1024).toFixed(1)} KB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
}
const M0 = {
  py: "python",
  ts: "ts",
  tsx: "tsx",
  js: "js",
  jsx: "jsx",
  json: "json",
  md: "markdown",
  html: "html",
  css: "css",
  scss: "scss",
  sh: "bash",
  bash: "bash",
  yml: "yaml",
  yaml: "yaml",
  toml: "toml",
  sql: "sql",
  go: "go",
  rs: "rust",
  java: "java",
  c: "c",
  h: "c",
  cpp: "cpp",
  cc: "cpp",
  cs: "csharp",
  rb: "ruby",
  php: "php",
  kt: "kotlin",
  swift: "swift",
  xml: "xml",
  csv: "csv",
  txt: ""
};
function T0(a) {
  return M0[Gg(a)] ?? "";
}
function O0(a) {
  return new Promise((r, s) => {
    const l = new FileReader();
    l.onload = () => r(l.result), l.onerror = () => s(l.error ?? new Error("FileReader failed")), l.readAsDataURL(a);
  });
}
const C0 = "4.10.38", Bh = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${C0}/build`;
let Lu = null;
function D0() {
  return Lu || (Lu = import(`${Bh}/pdf.mjs`).then((r) => {
    const s = r.default ?? r;
    return s.GlobalWorkerOptions.workerSrc = `${Bh}/pdf.worker.mjs`, s;
  })), Lu;
}
async function z0(a) {
  const r = await D0(), s = await a.arrayBuffer(), l = await r.getDocument({ data: s }).promise, c = [];
  for (let d = 1; d <= l.numPages; d++) {
    const m = (await (await l.getPage(d)).getTextContent()).items.map((g) => typeof (g == null ? void 0 : g.str) == "string" ? g.str : "").join(" ").replace(/[ \t]+/g, " ").trim();
    m && c.push(m);
  }
  return c.join(`

`).trim();
}
async function R0(a, r = {}) {
  const s = qg(a), l = {
    id: crypto.randomUUID(),
    kind: s,
    name: a.name,
    size: a.size,
    mime: a.type || ""
  };
  if (s === "image") {
    if (a.size > Lh)
      throw new Error(`Image "${a.name}" is too large (max ${ns(Lh)})`);
    const d = await (r.readDataUrl ?? O0)(a);
    return { ...l, dataUrl: d };
  }
  if (s === "pdf") {
    if (a.size > Vh)
      throw new Error(`PDF "${a.name}" is too large (max ${ns(Vh)})`);
    let d;
    try {
      d = await (r.loadPdfText ?? z0)(a);
    } catch (f) {
      const y = (f == null ? void 0 : f.message) ?? String(f);
      throw new Error(`Could not read PDF "${a.name}": ${y}`);
    }
    return { ...l, text: d };
  }
  if (a.size > Uh)
    throw new Error(`Text file "${a.name}" is too large (max ${ns(Uh)})`);
  const c = await (r.readText ?? ((d) => d.text()))(a);
  return { ...l, text: c };
}
const L0 = /* @__PURE__ */ new Set([
  "openai",
  "openai-codex",
  "openrouter",
  "anthropic",
  "custom"
]);
function kg(a, r, s) {
  const l = r ?? [], c = [];
  a.trim() && c.push(a);
  for (const y of l)
    if ((y.kind === "text" || y.kind === "pdf") && y.text) {
      const m = y.kind === "pdf" ? "" : T0(y.name);
      c.push(`Attached file "${y.name}":
\`\`\`${m}
${y.text}
\`\`\``);
    }
  const d = c.join(`

`), f = l.filter((y) => y.kind === "image" && y.dataUrl);
  if (f.length > 0 && L0.has(s))
    return [
      { type: "text", text: d || "(see attached image)" },
      ...f.map((m) => ({ type: "image_url", image_url: { url: m.dataUrl } }))
    ];
  if (f.length > 0) {
    const y = f.map((m) => `[image attached (not sent to this provider): ${m.name}]`).join(`
`);
    return [d, y].filter(Boolean).join(`

`);
  }
  return d;
}
function Hh(a, r) {
  const s = a.split(`
`);
  for (const l of s) {
    if (!l.startsWith("data: ")) continue;
    const c = l.slice(6).trim();
    if (!c || c === "[DONE]") continue;
    let d;
    try {
      d = JSON.parse(c);
    } catch {
      continue;
    }
    const f = d.type;
    if (f === "text_delta")
      r.onText(d.text ?? "");
    else if (f === "done") {
      const y = {
        message: d.message,
        stop_reason: d.stop_reason,
        usage: d.usage ?? {}
      };
      r.onDone(y);
    } else if (f === "error")
      return r.onError(d.message ?? "Unknown error from LLM proxy"), !0;
  }
  return !1;
}
async function Ig(a, r, s, l) {
  let c;
  try {
    c = await a.http.fetch("/api/llm/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r),
      signal: l
    });
  } catch (m) {
    s.onError(`Network error: ${String(m)}`);
    return;
  }
  if (!c.ok) {
    let m = "";
    try {
      m = await c.text(), m.length > 200 && (m = m.slice(0, 200) + "...");
    } catch {
    }
    s.onError(`HTTP ${c.status}: ${m}`);
    return;
  }
  const d = c.body.getReader(), f = new TextDecoder();
  let y = "";
  try {
    for (; ; ) {
      const { done: m, value: g } = await d.read();
      if (m) break;
      y += f.decode(g, { stream: !0 }).replace(/\r\n/g, `
`);
      const v = y.split(`

`);
      y = v.pop() ?? "";
      for (const b of v) {
        if (!b.trim()) continue;
        if (Hh(b, s)) {
          d.cancel().catch(() => {
          });
          return;
        }
      }
    }
    y.trim() && Hh(y, s);
  } catch (m) {
    (m == null ? void 0 : m.name) !== "AbortError" && s.onError(`Stream read error: ${String(m)}`);
  } finally {
    d.releaseLock();
  }
}
async function Kg(a, r, s, l) {
  var m, g;
  const c = await a.http.fetch("/api/llm/models", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider: r, api_key: s, base_url: l })
  });
  if (!c.ok) {
    let v = "";
    try {
      v = await c.text(), v.length > 200 && (v = v.slice(0, 200) + "...");
    } catch {
    }
    throw new Error(`HTTP ${c.status}: ${v}`);
  }
  const d = await c.json(), f = d && typeof d == "object" ? d : {}, y = ["live", "cache", "stale", "fallback"].includes(String(f.source)) ? f.source : void 0;
  return {
    models: Cg(f.models),
    capabilities: {
      reasoningEffort: ((m = f.capabilities) == null ? void 0 : m.reasoning_effort) === !0,
      richModelCatalog: ((g = f.capabilities) == null ? void 0 : g.rich_model_catalog) === !0
    },
    ...y ? { source: y } : {}
  };
}
async function U0(a) {
  return (await (await a.http.fetch("/api/llm/codex/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  })).json()).auth_url;
}
async function Ju(a) {
  return await (await a.http.fetch("/api/llm/codex/status", void 0)).json();
}
async function V0(a) {
  await a.http.fetch("/api/llm/codex/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });
}
const za = "[REDACTED]";
function nt(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}
function B0(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function La(a) {
  const r = B0(a);
  return [
    "secret",
    "secrets",
    "token",
    "password",
    "credential",
    "credentials",
    "authorization",
    "api_key",
    "private_key",
    "access_key",
    "client_secret",
    "access_token",
    "refresh_token",
    "auth_token",
    "bearer_token"
  ].some((s) => r === s || r.endsWith(`_${s}`));
}
function Fn(a) {
  return Array.isArray(a) ? a.map(Fn) : nt(a) ? Object.fromEntries(
    Object.entries(a).map(([r, s]) => [
      r,
      La(r) ? za : Fn(s)
    ])
  ) : a;
}
function jn(a, r) {
  typeof a == "string" ? a.length > 0 && r.add(a) : Array.isArray(a) ? a.forEach((s) => jn(s, r)) : nt(a) && Object.values(a).forEach((s) => jn(s, r));
}
function Pl(a, r) {
  if (Array.isArray(a))
    a.forEach((s) => Pl(s, r));
  else if (nt(a))
    for (const [s, l] of Object.entries(a))
      La(s) ? jn(l, r) : Pl(l, r);
}
function Gh(a, r, s, l) {
  if (!Array.isArray(a)) return;
  const c = /* @__PURE__ */ new Map();
  for (const d of a) {
    if (!nt(d)) continue;
    let f;
    if (d.op === "add_node")
      f = typeof d.node_type == "string" ? d.node_type : void 0, typeof d.ref == "string" && f && c.set(d.ref, f);
    else if (d.op === "set_params") {
      const g = typeof d.node_id == "string" ? d.node_id : void 0;
      f = g ? c.get(g) ?? s.get(g) : void 0;
    } else
      continue;
    if (!nt(d.params)) continue;
    const y = f ? r.get(f) : void 0, m = y ? new Map(y.params.map((g) => [g.name, g])) : void 0;
    for (const [g, v] of Object.entries(d.params)) {
      const b = m == null ? void 0 : m.get(g);
      (!b || b.param_type === "secret" || La(g)) && jn(v, l);
    }
  }
}
function H0(a, r, s, l) {
  if (Array.isArray(a))
    for (const c of a) {
      if (!nt(c)) continue;
      const d = typeof c.node_id == "string" ? c.node_id : void 0, f = typeof c.param == "string" ? c.param : void 0, y = d ? s.get(d) : void 0, m = y ? r.get(y) : void 0, g = m == null ? void 0 : m.params.find((v) => v.name === f);
      (!g || g.param_type === "secret" || f && La(f)) && jn(c.values, l);
    }
}
function Xg(a, r) {
  for (const s of a.values())
    for (const l of s.params)
      (l.param_type === "secret" || La(l.name)) && (jn(l.default, r), jn(l.options, r));
}
function rs(a, r, s) {
  const l = /* @__PURE__ */ new Set();
  if (Xg(r, l), Pl(a.arguments, l), a.name === "apply_graph_operations")
    Gh(a.arguments.operations, r, s, l);
  else if (a.name === "run_graph_experiments") {
    if (Array.isArray(a.arguments.variants))
      for (const c of a.arguments.variants)
        nt(c) && Gh(c.operations, r, s, l);
    a.arguments.search !== void 0 && jn(a.arguments.search, l);
  } else a.name === "optimize_graph_parameters" && H0(
    a.arguments.bindings,
    r,
    s,
    l
  );
  return l;
}
function eo(a, r, s) {
  var l;
  Xg(r, s), Pl(a, s), jn(a.presets, s);
  for (const c of a.nodes) {
    const d = (l = c.data) == null ? void 0 : l.params;
    if (!nt(d)) continue;
    const f = typeof c.type == "string" ? r.get(c.type) : void 0, y = f ? new Map(f.params.map((m) => [m.name, m])) : void 0;
    for (const [m, g] of Object.entries(d)) {
      const v = y == null ? void 0 : y.get(m);
      (!v || v.param_type === "secret" || La(m)) && jn(g, s);
    }
  }
}
function Ra(a, r) {
  if (typeof a == "string") {
    let s = a;
    for (const l of [...r].sort((c, d) => d.length - c.length))
      s = s.split(l).join(za);
    return s;
  }
  return Array.isArray(a) ? a.map((s) => Ra(s, r)) : nt(a) ? Object.fromEntries(
    Object.entries(a).map(([s, l]) => [s, Ra(l, r)])
  ) : a;
}
function Zi(a) {
  return new Map(a.map((r) => [r.node_name, r]));
}
function ss(a) {
  return new Map(
    a.filter((r) => typeof r.type == "string").map((r) => [r.id, r.type])
  );
}
function G0(a, r) {
  const s = Zi(r), l = /* @__PURE__ */ new Set();
  eo(a, s, l);
  const c = Fn(a);
  if (!nt(c)) return { ...a, nodes: [], edges: [] };
  const d = Array.isArray(c.nodes) ? c.nodes : [];
  a.nodes.forEach((y, m) => {
    const g = d[m];
    !nt(g) || !nt(g.data) || y.data && Object.prototype.hasOwnProperty.call(y.data, "params") && (g.data.params = Zu(
      y.data.params,
      typeof y.type == "string" ? y.type : void 0,
      s
    ));
  });
  const f = Ra(c, l);
  return nt(f) ? f : { nodes: [], edges: [] };
}
function po(a, r, s, l = []) {
  let c = [], d = { nodes: [] };
  try {
    c = s.graph.getNodeDefinitions();
  } catch {
  }
  try {
    const g = s.graph.getGraph();
    d = { nodes: g.nodes, presets: g.presets };
  } catch {
  }
  const f = Zi(c), y = ss(d.nodes), m = rs(a, f, y);
  eo(d, f, m);
  for (const g of l) {
    const v = Zi(g.definitions), b = ss(g.graph.nodes);
    for (const _ of rs(a, v, b))
      m.add(_);
    eo(g.graph, v, m);
  }
  try {
    const g = JSON.parse(r);
    if (Array.isArray(g) || nt(g))
      return JSON.stringify(Ra(Fn(g), m));
  } catch {
  }
  return Ra(r, m);
}
function Zu(a, r, s) {
  const l = Fn(a);
  if (!nt(l)) return l;
  const c = r ? s.get(r) : void 0, d = c ? new Map(c.params.map((f) => [f.name, f])) : void 0;
  for (const f of Object.keys(l)) {
    const y = d == null ? void 0 : d.get(f);
    (!y || y.param_type === "secret") && (l[f] = za);
  }
  return l;
}
function qh(a, r, s) {
  const l = Fn(a);
  if (!Array.isArray(l)) return l;
  const c = /* @__PURE__ */ new Map();
  for (const d of l)
    if (nt(d)) {
      if (d.op === "add_node") {
        const f = typeof d.node_type == "string" ? d.node_type : void 0;
        typeof d.ref == "string" && f && c.set(d.ref, f), "params" in d && (d.params = Zu(d.params, f, r));
      } else if (d.op === "set_params") {
        const f = typeof d.node_id == "string" ? d.node_id : void 0, y = f ? c.get(f) ?? s.get(f) : void 0;
        d.params = Zu(d.params, y, r);
      }
    }
  return l;
}
function q0(a, r, s) {
  const l = Fn(a);
  if (!Array.isArray(l)) return l;
  for (const c of l) {
    if (!nt(c)) continue;
    const d = typeof c.node_id == "string" ? c.node_id : void 0, f = typeof c.param == "string" ? c.param : void 0, y = d ? s.get(d) : void 0, m = y ? r.get(y) : void 0, g = m == null ? void 0 : m.params.find((v) => v.name === f);
    (!g || g.param_type === "secret") && (c.values = Array.isArray(c.values) ? c.values.map(() => za) : za);
  }
  return l;
}
function Yg(a, r) {
  let s = [], l = [];
  try {
    s = r.graph.getNodeDefinitions();
  } catch {
  }
  try {
    l = r.graph.getGraph().nodes;
  } catch {
  }
  const c = Zi(s), d = ss(l), f = Fn(a.arguments), y = nt(f) ? f : {};
  if (a.name === "apply_graph_operations")
    y.operations = qh(a.arguments.operations, c, d);
  else if (a.name === "run_graph_experiments") {
    const v = a.arguments.variants;
    Array.isArray(y.variants) && Array.isArray(v) && y.variants.forEach((b, _) => {
      nt(b) && nt(v[_]) && (b.operations = qh(
        v[_].operations,
        c,
        d
      ));
    }), a.arguments.search !== void 0 && (y.search = za);
  } else a.name === "optimize_graph_parameters" && (y.bindings = q0(
    a.arguments.bindings,
    c,
    d
  ));
  const m = rs(a, c, d), g = Ra(y, m);
  return {
    id: a.id,
    name: a.name,
    arguments: nt(g) ? g : {}
  };
}
function Qg(a, r) {
  let s = [], l = [];
  try {
    s = r.graph.getNodeDefinitions();
  } catch {
  }
  try {
    l = r.graph.getGraph().nodes;
  } catch {
  }
  const c = Zi(s), d = ss(l), f = /* @__PURE__ */ new Set();
  for (const y of a)
    for (const m of rs(y, c, d))
      f.add(m);
  return a.map((y) => {
    const m = Yg(y, r), g = Ra(m.arguments, f);
    return {
      ...m,
      arguments: nt(g) ? g : {}
    };
  });
}
function Fu(a, r, s) {
  let l = [], c = { nodes: [], edges: [] };
  try {
    l = s.graph.getNodeDefinitions();
  } catch {
  }
  try {
    c = s.graph.getGraph();
  } catch {
  }
  const d = Zi(l), f = ss(c.nodes), y = /* @__PURE__ */ new Set();
  eo(c, d, y);
  for (const m of r)
    for (const g of rs(m, d, f))
      y.add(g);
  return Ra(a, y);
}
const Bl = 3e4;
function k0(a) {
  const r = a.param_type === "secret" || La(a.name), s = r ? za : Fn(a.default), l = s == null ? String(s) : typeof s == "object" ? JSON.stringify(s) : String(s), c = l.length > 60 ? l.slice(0, 60) + "..." : l;
  let d = "";
  if (a.param_type === "select" && a.options.length > 0)
    d = r ? `{${za}}` : `{${a.options.join("|")}}`;
  else if (a.param_type === "int" || a.param_type === "float") {
    const f = a.min_value !== null, y = a.max_value !== null;
    if (f || y) {
      const m = f ? String(a.min_value) : "", g = y ? String(a.max_value) : "";
      d = `{${m}..${g}}`;
    }
  }
  return `${a.name}:${a.param_type}=${c}${d}`;
}
function I0(a) {
  return a.map((r) => {
    const s = [];
    if (r.inputs.length > 0) {
      const c = r.inputs.map((d) => `${d.name}:${d.data_type}`).join(", ");
      s.push(`in[${c}]`);
    }
    if (r.outputs.length > 0) {
      const c = r.outputs.map((d) => `${d.name}:${d.data_type}`).join(", ");
      s.push(`out[${c}]`);
    }
    if (r.params.length > 0) {
      const c = r.params.map(k0).join(", ");
      s.push(`params[${c}]`);
    }
    const l = s.length > 0 ? " " + s.join(" ") : "";
    return `${r.node_name}:${l} [category: ${r.category}]`;
  }).join(`
`);
}
function Jg(a) {
  return a.map((r) => {
    const s = (r.description || "").replace(/\s+/g, " ").trim(), l = s.length > 100 ? s.slice(0, 100) + "..." : s;
    return `${r.node_name} [${r.category}]${l ? " - " + l : ""}`;
  }).join(`
`);
}
function Zg(a, r = []) {
  const s = G0(a, r), l = JSON.stringify({ nodes: s.nodes, edges: s.edges });
  if (l.length <= Bl)
    return l;
  const c = [], d = [], f = {
    originalNodes: s.nodes.length,
    includedNodes: 0,
    originalEdges: s.edges.length,
    includedEdges: 0,
    originalChars: l.length,
    limit: Bl
  }, y = () => JSON.stringify({ nodes: c, edges: d, _truncated: f });
  for (const g of s.nodes)
    if (c.push(g), f.includedNodes = c.length, y().length > Bl) {
      c.pop(), f.includedNodes = c.length;
      break;
    }
  const m = new Set(c.map((g) => String(g.id ?? "")));
  for (const g of s.edges)
    if (!(!m.has(String(g.source ?? "")) || !m.has(String(g.target ?? ""))) && (d.push(g), f.includedEdges = d.length, y().length > Bl)) {
      d.pop(), f.includedEdges = d.length;
      break;
    }
  return y();
}
function K0(a, r) {
  const s = Jg(a), l = Zg(r, a);
  return `You are Graph Copilot, the agent embedded in CodefyUI, a visual node-graph editor for machine-learning pipelines. You build and repair graphs on the user's canvas through typed GraphOps, run canvas-isolated experiments when explicitly authorized, optimize against measured metrics, and turn observations into testable research hypotheses.

## Operating principles
- You are an agent. Keep working, across as many tool rounds as needed, until the request is fully handled; only then reply. Never end with a half-built graph unless you are truly blocked, and then say exactly what is missing and why.
- Ground every claim in tool results from this conversation. Never invent node types, port names, param values, or experiment numbers.
- Bias to action. Canvas edits are reversible (one batch = one undo step), so plan briefly and build instead of asking permission. Ask first only when the request is ambiguous in a way that changes what you would build, or before destructive or costly actions (clear_graph, executing experiments).
- When a tool result contradicts your assumption, the tool result wins — re-plan from it.
- Values shown as [REDACTED] are secrets deliberately hidden from you. Never guess, fabricate, echo, or overwrite them unless the user supplies a new value in chat.

## How to build (follow in order)
1. Plan — 1-2 sentences naming the nodes you intend and the data/control flow between them. For a COMPLEX build (roughly 8+ nodes or several subsystems), first call research with 2-4 independent sub-questions (e.g. data pipeline / model / training loop) and fold the answers into the plan.
2. Look up schemas — call get_node_schemas for every node type you plan to touch. Port and param names must come from schemas or the current graph, never from memory.
3. Build — apply_graph_operations in small batches (add_node with a "ref", connect, set_params), ending each structural batch with one auto_layout. Prefer several small batches over one enormous batch.
4. Verify — call validate_graph, fix every reported error with more operations, and validate again. Repeat until it reports "valid": true.
5. Run — ONLY when the user asked to run, train, or evaluate: call run_graph (the user confirms it first). It executes the live canvas graph on the backend and streams node statuses and training progress into the panel. Long training runs are normal — wait for the result; never cancel or restart one on your own.
6. Report — summarize what changed in 1-2 sentences, in the user's language. After a run, report the returned metrics exactly (final loss, eval scalars, generated text), plus failures if any. When the result carries media entries (clips from VideoWrite, rollout videos), say so and name the url — the panel plays the clip inline right under the run stage.

## Recovering from errors
- Failing ops are skipped and reported per index; the other ops in the batch DID apply. Re-send only corrected versions of the failed ops — re-sending the whole batch duplicates nodes.
- Read each error message and fix its cause: a wrong port name (re-check schemas), a wrong node id (use the "refs" map or "node_id" from the previous result, or get_current_graph), or an out-of-range param.
- "ref" aliases exist only inside their own batch. In later batches, use real node ids.
- After two failed attempts at the same fix, step back: re-read the current graph, question the plan, and try a different construction rather than repeating the same edit.

## Completion contract
A build/edit request is done only when every REQUIRED input is connected, params respect their declared types and ranges, and validate_graph returned "valid": true for the current revision. If you cannot get there, state plainly that the graph is not runnable yet and list the remaining errors — never present an unvalidated graph as success.

## Experiments and research
When the user asks to test, compare, optimize, ablate, or explore research ideas:
1. Before proposing runs, state a falsifiable hypothesis, ONE numeric metric, and its direction (maximize or minimize). Never invent or extrapolate a measured result.
2. Pick the right tool: run_graph_experiments for explicit comparisons and structural ablations; optimize_graph_parameters for searches over existing int/float/bool/select params, as a complete small grid or a uint32-seeded random plan (the seed makes planning repeatable; it does NOT seed graph execution). Never optimize secret/file/tensor/unknown params.
3. Design for evidence: include an explicit baseline plus focused variants, change one factor at a time, and use at least 3 repetitions when the user wants reliable evidence — otherwise label the result a pilot. Repetitions reuse the same candidate graph; do not call them independent seeds unless the graph itself randomizes or exposes a seed schedule. Include seed controls and held-out evaluation when the graph exposes them.
4. Respect cost and consent: both tools share one UI confirmation and a 16-execution budget per turn, and a chat instruction alone is never consent. Candidate graphs are canvas-isolated but NOT side-effect-free — nodes may write files, call networks, or spend API/GPU budget. State the planned run count before the confirmation appears.
5. Set apply_best=true only when the user explicitly asked to optimize or apply the winner. Promotion is parameter-only and refuses if the live graph changed mid-study; structural winners stay proposals for review.
6. Report faithfully: the unique winner or the exact tie, effect sizes as measured, failures and variance limits, and the next experiment a stronger claim would need. Experiment output is evidence, not proof — no novelty or significance claims without enough independent runs and an appropriate test.
7. Training-process research (LR / architecture / data sensitivity of LM training): scale the pipeline to the study, not the other way around — a small CausalLMModel (d_model 128-384, 2-6 layers) over a capped LMTokenizedDataset (max_tokens a few million, matching max_steps) trains in minutes per run. Set timeout_minutes on the study to fit one run (per-run cap, up to 60). Vary exactly one knob per variant (an lr sweep via optimize_graph_parameters; an architecture or data A/B via run_graph_experiments; seed replication by varying CausalLMModel.seed). Rank on PerplexityEvaluate.val_loss (minimize) over a fixed held-out token set, and read training dynamics from the metric series (train_loss_batch, lr) the runs record.
8. VLA (vision-language-action) research runs on the PushWorld family and follows one canonical chain: Start -> PushWorldEnv -> PushWorldDemos -> DataLoader -> TrainingLoop, with VLAModel supplying BOTH the model and the loss_fn (they are mode-matched by construction — never wire a generic loss to a VLA head), then VLARollout (env + trained model) for closed-loop success_rate and VLAActionEval (holdout) for open-loop MSE, and VideoWrite on PushWorldDemos.demo_video or VLARollout.frames so the run produces a playable clip. Keep chunk equal between PushWorldDemos and VLAModel, image_size equal between PushWorldEnv and VLAModel, and keep demo_noise on (its default) — it is the recovery data closed-loop control needs. The head paradigm (head_type: flow_matching vs regression), execute_k (receding horizon), instruction_mode=swapped (the language-grounding ablation), and vision_stem are the sanctioned research knobs; success_rate is the headline metric, and the swapped-vs-normal gap is the language-grounding evidence.

## Graph model
Each node has a type (the bare name from the index), typed input/output ports, and params. Edges connect an output handle to an input handle; the connected data types must be compatible. Some pipelines need a control-flow trigger from a Start node (connect with source_handle "trigger").

## Rules
- Use the exact node-type name from the index — the bare name only (e.g. Dataset), never the trailing "[category: ...]" tag.
- run_graph executes the user's real graph with real side effects (files, network, GPU). Use it for "run it / train it" requests after validation passes; use run_graph_experiments for comparisons. One run at a time.
- Connect every REQUIRED input of nodes you add; validate_graph reports the ones you missed.
- Never use clear_graph unless the user explicitly asked to start over.
- Do not remove or rewire nodes the user built unless the request requires it — and say so when you do.

## Style
- Reply in the user's language.
- Match the shape of the request: a question gets a direct answer; a build gets a brief plan, the work, and a 1-2 sentence summary of what changed. No filler openers, no restating the request.
- Use \`code\` for node types, ports, and params; keep paragraphs and lists short; skip headings unless the reply is genuinely long.
- Present measured numbers exactly as reported, with the metric name and direction.

## Node catalog index (NodeName [Category] - description). Call get_node_schemas for exact ports/params.
${s}

## Current graph
${l}`;
}
const X0 = "graph-copilot", Y0 = "0.3.0";
function to(a) {
  if (a.length === 0 || a.some((c) => !Number.isFinite(c)))
    return;
  let r = 0, s = 0;
  if (a.forEach((c, d) => {
    const f = d + 1, y = c - r;
    r += y / f;
    const m = c - r;
    s += y * m;
  }), !Number.isFinite(r) || !Number.isFinite(s))
    return;
  const l = a.length < 2 ? 0 : s / (a.length - 1);
  if (Number.isFinite(l))
    return { mean: r, variance: Math.max(0, l) };
}
function Wn(a) {
  var r;
  return (r = to(a)) == null ? void 0 : r.mean;
}
function mo(a) {
  if (a.length < 2) return;
  const r = to(a);
  if (!r) return;
  const s = Math.sqrt(r.variance);
  return Number.isFinite(s) ? s : void 0;
}
function Yl(a) {
  const r = [
    676.5203681218851,
    -1259.1392167224028,
    771.3234287776531,
    -176.6150291621406,
    12.507343278686905,
    -0.13857109526572012,
    9984369578019572e-21,
    15056327351493116e-23
  ];
  if (a < 0.5)
    return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * a)) - Yl(1 - a);
  let s = 0.9999999999998099;
  const l = a - 1;
  r.forEach((d, f) => {
    s += d / (l + f + 1);
  });
  const c = l + r.length - 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (l + 0.5) * Math.log(c) - c + Math.log(s);
}
function kh(a, r, s) {
  const f = a + r, y = a + 1, m = a - 1;
  let g = 1, v = 1 - f * s / y;
  Math.abs(v) < 1e-300 && (v = 1e-300), v = 1 / v;
  let b = v;
  for (let _ = 1; _ <= 200; _ += 1) {
    const N = 2 * _;
    let D = _ * (r - _) * s / ((m + N) * (a + N));
    v = 1 + D * v, Math.abs(v) < 1e-300 && (v = 1e-300), g = 1 + D / g, Math.abs(g) < 1e-300 && (g = 1e-300), v = 1 / v, b *= v * g, D = -((a + _) * (f + _) * s) / ((a + N) * (y + N)), v = 1 + D * v, Math.abs(v) < 1e-300 && (v = 1e-300), g = 1 + D / g, Math.abs(g) < 1e-300 && (g = 1e-300), v = 1 / v;
    const x = v * g;
    if (b *= x, Math.abs(x - 1) <= 3e-14) break;
  }
  return b;
}
function Q0(a, r, s) {
  if (a <= 0) return 0;
  if (a >= 1) return 1;
  const l = Math.exp(
    Yl(r + s) - Yl(r) - Yl(s) + r * Math.log(a) + s * Math.log1p(-a)
  );
  return a < (r + 1) / (r + s + 2) ? l * kh(r, s, a) / r : 1 - l * kh(s, r, 1 - a) / s;
}
function Ih(a, r) {
  if (a === 0) return 0.5;
  const s = r / (r + a * a), l = 0.5 * Q0(
    s,
    r / 2,
    0.5
  );
  return a > 0 ? 1 - l : l;
}
function J0(a) {
  if (!Number.isInteger(a) || a < 1) return;
  const r = 0.975;
  let s = 0, l = 1;
  for (; Ih(l, a) < r && l < 1e6; ) l *= 2;
  if (!(l >= 1e6)) {
    for (let c = 0; c < 100; c += 1) {
      const d = (s + l) / 2;
      Ih(d, a) < r ? s = d : l = d;
    }
    return (s + l) / 2;
  }
}
function Fg(a) {
  if (a.length < 2) return;
  const r = Wn(a), s = mo(a), l = a.length - 1, c = J0(l);
  if (r === void 0 || s === void 0 || c === void 0)
    return;
  const d = c * s / Math.sqrt(a.length), f = r - d, y = r + d;
  if ([d, f, y].every(Number.isFinite))
    return {
      confidenceLevel: 0.95,
      degreesOfFreedom: l,
      mean: r,
      margin: d,
      lower: f,
      upper: y
    };
}
const gd = Fg;
function Z0(a, r) {
  if (a.length < 2 || r.length < 2) return;
  const s = to(a), l = to(r);
  if (!s || !l) return;
  const c = a.length + r.length - 2, d = ((a.length - 1) * s.variance + (r.length - 1) * l.variance) / c;
  if (!Number.isFinite(d) || d <= 0) return;
  const f = (s.mean - l.mean) / Math.sqrt(d), y = 1 - 3 / (4 * c - 1), m = f * y;
  return Number.isFinite(m) ? m : void 0;
}
function ls(a, r, s) {
  const l = Wn(a), c = Wn(r);
  if (l === void 0 || c === void 0) return;
  const d = l - c, f = s === "maximize" ? d : -d;
  if (!Number.isFinite(d) || !Number.isFinite(f)) return;
  const y = Z0(a, r);
  return {
    baselineMean: c,
    candidateMean: l,
    rawDelta: d,
    improvement: f,
    hedgesG: y,
    directionAdjustedHedgesG: y === void 0 ? void 0 : s === "maximize" ? y : -y
  };
}
const F0 = [
  "study_id",
  "created_at",
  "hypothesis",
  "objective_metric",
  "direction",
  "variant_id",
  "variant_label",
  "repetition",
  "status",
  "metric_key",
  "metric_value",
  "runtime_ms",
  "seed",
  "error"
];
function Hl(a) {
  return a !== void 0 && Number.isFinite(a) ? String(a) : "";
}
function W0(a) {
  return /^[\t\r\n ]*[=+\-@]/.test(a) ? `'${a}` : a;
}
function P0(a) {
  const r = W0(a);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function e1(a) {
  const r = [F0.slice()];
  return a.runs.forEach((s) => {
    r.push([
      a.id,
      a.createdAt,
      a.hypothesis,
      a.objective.metric,
      a.objective.direction,
      s.variantId,
      s.variantLabel,
      Hl(s.repetition),
      s.status,
      s.metricKey ?? "",
      Hl(s.metricValue),
      Hl(s.runtimeMs),
      s.seed === void 0 ? "" : typeof s.seed == "number" ? Hl(s.seed) : s.seed,
      s.error ?? ""
    ]);
  }), r.map((s) => s.map(P0).join(",")).join(`\r
`);
}
function Ta(a) {
  return Object.is(a, -0) || a === 0 ? "0" : Number(a.toPrecision(6)).toString();
}
function An(a) {
  return a.replace(/[\r\n]+/g, " ").replace(/`/g, "'").trim();
}
function t1(a) {
  const r = /* @__PURE__ */ new Map();
  return a.runs.forEach((s) => {
    let l = r.get(s.variantId);
    l || (l = {
      id: s.variantId,
      label: s.variantLabel || s.variantId,
      usableValues: [],
      unusableRuns: 0
    }, r.set(s.variantId, l)), s.status === "completed" && Number.isFinite(s.metricValue) ? l.usableValues.push(s.metricValue) : l.unusableRuns += 1;
  }), [...r.values()];
}
function n1(a) {
  var y;
  const r = t1(a), s = r.find((m) => m.id === a.baselineVariantId), l = [], c = [
    `# Research report: ${An(a.id)}`,
    "",
    "## Study question",
    "",
    `- Hypothesis under test: ${An(a.hypothesis)}`,
    `- Objective: ${a.objective.direction} \`${An(a.objective.metric)}\`.`,
    `- Recorded evidence: ${a.runs.length} run(s) across ${r.length} variant(s).`,
    "",
    "## Observations",
    ""
  ];
  r.length === 0 && (c.push("- **[Observation]** No run records were available."), l.push("No run records were available for analysis.")), r.forEach((m) => {
    const g = Wn(m.usableValues), v = mo(m.usableValues), b = Fg(m.usableValues), _ = [`n=${m.usableValues.length}`];
    if (g !== void 0 && _.push(`mean=${Ta(g)}`), v !== void 0 && _.push(`sample SD=${Ta(v)}`), b ? _.push(`95% Student-t CI=[${Ta(b.lower)}, ${Ta(b.upper)}]`) : _.push("95% Student-t CI=unavailable"), s && m.id !== s.id) {
      const N = ls(
        m.usableValues,
        s.usableValues,
        a.objective.direction
      );
      N && (_.push(`raw delta vs ${An(s.label)}=${Ta(N.rawDelta)}`), _.push(`direction-adjusted improvement=${Ta(N.improvement)}`), N.hedgesG !== void 0 && _.push(`Hedges g=${Ta(N.hedgesG)}`));
    }
    c.push(`- **[Observation] ${An(m.label)}:** ${_.join("; ")}.`), m.usableValues.length < 2 && l.push(
      `${m.label} has fewer than two finite completed observations; variability and a confidence interval are unavailable.`
    ), m.unusableRuns > 0 && l.push(
      `${m.label} has ${m.unusableRuns} run(s) excluded because they failed, were incomplete, or had a non-finite objective value.`
    );
  }), a.baselineVariantId && !s && l.push(`Baseline variant '${a.baselineVariantId}' was not present in the run records.`);
  const d = s ? r.filter((m) => m.id !== s.id).map((m) => ({
    variant: m,
    comparison: ls(
      m.usableValues,
      s.usableValues,
      a.objective.direction
    )
  })).filter((m) => m.comparison !== void 0).sort((m, g) => g.comparison.improvement - m.comparison.improvement) : [];
  c.push(
    "",
    "## Claims and interpretation",
    "",
    "- **[Claim status]** The hypothesis remains a claim under test. These descriptive observations alone do not establish causality, robustness, or external validity."
  ), d[0] ? c.push(
    `- **[Candidate claim]** ${An(d[0].variant.label)} had the strongest observed direction-adjusted change versus the baseline (${Ta(d[0].comparison.improvement)}); confirm it with a pre-registered, independently replicated study before treating it as a conclusion.`
  ) : c.push("- **[Candidate claim]** No baseline comparison had enough finite evidence to nominate a directional result.");
  const f = [...a.warnings ?? [], ...l];
  return c.push("", "## Warnings", ""), f.length === 0 ? c.push("- None recorded.") : f.forEach((m) => c.push(`- **[Warning]** ${An(m)}`)), c.push("", "## Paper leads", ""), (y = a.paperLeads) != null && y.length ? a.paperLeads.forEach((m) => {
    c.push(
      `- **[Paper lead] ${An(m.title)}** — Evidence: ${An(m.evidence)} Next study: ${An(m.nextStep)}`
    );
  }) : c.push("- None recorded."), c.join(`
`);
}
const yd = "codefyui.graph-copilot.study", no = 1, Wu = "plugin-canonical-v1", ao = 5 * 1024 * 1024, Kh = 64, Xh = 1e5, Yh = 64 * 1024, es = 1e4, os = 8, a1 = 16, i1 = 5e3, r1 = 1e4, Pu = 1e3, vd = 512, s1 = 40, l1 = 256, Gl = 1e3, Ie = 512, $t = 32 * 1024;
class pn extends Error {
  constructor(s, l) {
    super(l);
    rn(this, "code");
    this.name = "StudyBundleError", this.code = s;
  }
}
function ee(a, r, s) {
  throw new pn(a, `${r}: ${s}`);
}
function Wg(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function ed(a, r, s, l) {
  if (s > Kh && ee("LIMIT_EXCEEDED", r, `maximum depth is ${Kh}`), l.values += 1, l.values > Xh && ee("LIMIT_EXCEEDED", r, `maximum value count is ${Xh}`), a === null) return "null";
  if (typeof a == "boolean") return a ? "true" : "false";
  if (typeof a == "number")
    return Number.isFinite(a) || ee("INVALID_VALUE", r, "numbers must be finite"), JSON.stringify(a);
  if (typeof a == "string")
    return a.length > Yh && ee(
      "LIMIT_EXCEEDED",
      r,
      `maximum string length is ${Yh}`
    ), JSON.stringify(a);
  (typeof a != "object" || a === void 0) && ee("INVALID_VALUE", r, `unsupported JSON value ${typeof a}`), l.stack.has(a) && ee("INVALID_VALUE", r, "cyclic values are not allowed"), l.stack.add(a);
  try {
    if (Array.isArray(a)) {
      a.length > es && ee(
        "LIMIT_EXCEEDED",
        r,
        `maximum collection size is ${es}`
      );
      for (let d = 0; d < a.length; d += 1)
        Object.prototype.hasOwnProperty.call(a, d) || ee("INVALID_VALUE", `${r}/${d}`, "sparse arrays are not allowed");
      return `[${a.map((d, f) => ed(
        d,
        `${r}/${f}`,
        s + 1,
        l
      )).join(",")}]`;
    }
    Wg(a) || ee("INVALID_VALUE", r, "objects must be plain JSON objects");
    const c = Object.keys(a).sort();
    return c.length > es && ee(
      "LIMIT_EXCEEDED",
      r,
      `maximum collection size is ${es}`
    ), `{${c.map((d) => (d.length > Ie && ee("LIMIT_EXCEEDED", r, `object key exceeds ${Ie} characters`), `${JSON.stringify(d)}:${ed(
      a[d],
      `${r}/${ho(d)}`,
      s + 1,
      l
    )}`)).join(",")}}`;
  } finally {
    l.stack.delete(a);
  }
}
function Fi(a) {
  return ed(a, "$", 0, { values: 0, stack: /* @__PURE__ */ new WeakSet() });
}
function o1(a) {
  return new TextEncoder().encode(a).byteLength;
}
function bd(a) {
  const r = o1(a);
  if (r > ao)
    throw new pn(
      "BUNDLE_TOO_LARGE",
      `Study bundle is ${r} bytes; maximum is ${ao}`
    );
}
async function Pg(a) {
  var l;
  const r = (l = globalThis.crypto) == null ? void 0 : l.subtle;
  if (!r)
    throw new pn(
      "CRYPTO_UNAVAILABLE",
      "Web Crypto SHA-256 is unavailable in this environment"
    );
  const s = await r.digest("SHA-256", new TextEncoder().encode(a));
  return [...new Uint8Array(s)].map((c) => c.toString(16).padStart(2, "0")).join("");
}
function be(a, r) {
  return Wg(a) || ee("INVALID_BUNDLE", r, "expected an object"), a;
}
function De(a, r, s, l) {
  const c = new Set(r);
  for (const d of Object.keys(a))
    c.has(d) || ee("INVALID_BUNDLE", `${l}/${ho(d)}`, "unknown property");
  for (const d of s)
    Object.prototype.hasOwnProperty.call(a, d) || ee("INVALID_BUNDLE", l, `missing required property '${d}'`);
}
function Je(a, r, s = es) {
  return Array.isArray(a) || ee("INVALID_BUNDLE", r, "expected an array"), a.length > s && ee("LIMIT_EXCEEDED", r, `maximum item count is ${s}`), a;
}
function Ee(a, r, s = Ie, l = !1) {
  return typeof a != "string" && ee("INVALID_BUNDLE", r, "expected a string"), (!l && !a.trim() || a.length > s) && ee(
    a.length > s ? "LIMIT_EXCEEDED" : "INVALID_BUNDLE",
    r,
    a.length > s ? `maximum length is ${s}` : "must not be empty"
  ), /\u0000/.test(a) && ee("INVALID_BUNDLE", r, "NUL characters are not allowed"), a;
}
function mt(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && ee("INVALID_BUNDLE", r, "expected a finite number"), a;
}
function cs(a, r, s, l) {
  const c = mt(a, r);
  return (!Number.isInteger(c) || c < s || c > l) && ee("INVALID_BUNDLE", r, `expected an integer from ${s} to ${l}`), c;
}
function ey(a, r) {
  return typeof a != "boolean" && ee("INVALID_BUNDLE", r, "expected a boolean"), a;
}
function Pn(a, r, s) {
  return (typeof a != "string" || !r.includes(a)) && ee("INVALID_BUNDLE", s, `expected one of: ${r.join(", ")}`), a;
}
function us(a, r) {
  const s = Ee(a, r, 64);
  return (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(s) || Number.isNaN(Date.parse(s)) || new Date(s).toISOString() !== s) && ee("INVALID_BUNDLE", r, "expected a canonical ISO-8601 UTC timestamp"), s;
}
function He(a, r) {
  const s = Ee(a, r, 256);
  return (s !== s.trim() || /[\u0000-\u001f\u007f]/.test(s)) && ee("INVALID_BUNDLE", r, "id must be trimmed and contain no control characters"), s;
}
function mn(a, r, s) {
  new Set(a).size !== a.length && ee("INVALID_BUNDLE", r, `${s} must be unique`);
}
function he(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function ho(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ii(a, r) {
  if (!a || typeof a != "object") return;
  if (Array.isArray(a)) {
    a.forEach((l, c) => ii(l, `${r}/${c}`));
    return;
  }
  const s = be(a, r);
  if (he(s, "$gcpSecretRef")) {
    De(s, ["$gcpSecretRef"], ["$gcpSecretRef"], r), He(s.$gcpSecretRef, `${r}/$gcpSecretRef`);
    return;
  }
  for (const [l, c] of Object.entries(s))
    ii(c, `${r}/${ho(l)}`);
}
function ty(a, r) {
  const s = be(a, r);
  De(s, ["x", "y"], ["x", "y"], r), mt(s.x, `${r}/x`), mt(s.y, `${r}/y`);
}
function c1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["nodes", "edges", "presets", "segmentGroups", "name", "description"],
    ["nodes", "edges"],
    r
  );
  const l = Je(s.nodes, `${r}/nodes`, i1), c = [];
  l.forEach((m, g) => {
    const v = `${r}/nodes/${g}`, b = be(m, v);
    De(b, ["id", "type", "position", "data"], ["id", "type", "position", "data"], v), c.push(He(b.id, `${v}/id`)), Ee(b.type, `${v}/type`, Ie), ty(b.position, `${v}/position`);
    const _ = be(b.data, `${v}/data`);
    ii(_, `${v}/data`);
  }), mn(c, `${r}/nodes`, "node ids");
  const d = new Set(c), f = Je(s.edges, `${r}/edges`, r1), y = [];
  f.forEach((m, g) => {
    const v = `${r}/edges/${g}`, b = be(m, v);
    De(
      b,
      ["id", "source", "target", "sourceHandle", "targetHandle", "type"],
      ["id", "source", "target", "sourceHandle", "targetHandle"],
      v
    ), y.push(He(b.id, `${v}/id`));
    const _ = He(b.source, `${v}/source`), N = He(b.target, `${v}/target`);
    d.has(_) || ee("INVALID_BUNDLE", `${v}/source`, "unknown source node"), d.has(N) || ee("INVALID_BUNDLE", `${v}/target`, "unknown target node"), Ee(b.sourceHandle, `${v}/sourceHandle`, Ie, !0), Ee(b.targetHandle, `${v}/targetHandle`, Ie, !0), he(b, "type") && Pn(b.type, ["data", "trigger"], `${v}/type`);
  }), mn(y, `${r}/edges`, "edge ids"), he(s, "presets") && Je(s.presets, `${r}/presets`).forEach((g, v) => ii(g, `${r}/presets/${v}`)), he(s, "segmentGroups") && ii(s.segmentGroups, `${r}/segmentGroups`), he(s, "name") && Ee(s.name, `${r}/name`, Ie, !0), he(s, "description") && Ee(s.description, `${r}/description`, $t, !0);
}
function Qh(a, r) {
  const s = be(a, r);
  ii(s, r);
}
function u1(a, r) {
  const s = be(a, r);
  switch (Pn(
    s.op,
    ["add_node", "connect", "set_params", "remove_node", "remove_edge", "clear_graph", "auto_layout"],
    `${r}/op`
  )) {
    case "add_node":
      De(s, ["op", "node_type", "ref", "params", "position"], ["op", "node_type"], r), Ee(s.node_type, `${r}/node_type`, Ie), he(s, "ref") && He(s.ref, `${r}/ref`), he(s, "params") && Qh(s.params, `${r}/params`), he(s, "position") && ty(s.position, `${r}/position`);
      return;
    case "connect":
      De(
        s,
        ["op", "source", "source_handle", "target", "target_handle"],
        ["op", "source", "source_handle", "target", "target_handle"],
        r
      ), He(s.source, `${r}/source`), Ee(s.source_handle, `${r}/source_handle`, Ie, !0), He(s.target, `${r}/target`), Ee(s.target_handle, `${r}/target_handle`, Ie, !0);
      return;
    case "set_params":
      De(s, ["op", "node_id", "params"], ["op", "node_id", "params"], r), He(s.node_id, `${r}/node_id`), Qh(s.params, `${r}/params`);
      return;
    case "remove_node":
      De(s, ["op", "node_id"], ["op", "node_id"], r), He(s.node_id, `${r}/node_id`);
      return;
    case "remove_edge":
      De(
        s,
        ["op", "source", "target", "source_handle", "target_handle"],
        ["op", "source", "target"],
        r
      ), He(s.source, `${r}/source`), He(s.target, `${r}/target`), he(s, "source_handle") && Ee(s.source_handle, `${r}/source_handle`, Ie, !0), he(s, "target_handle") && Ee(s.target_handle, `${r}/target_handle`, Ie, !0);
      return;
    case "clear_graph":
    case "auto_layout":
      De(s, ["op"], ["op"], r);
  }
}
function d1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    r
  ), He(s.pluginId, `${r}/pluginId`), Ee(s.pluginVersion, `${r}/pluginVersion`, 128), cs(s.codefyuiApiVersion, `${r}/codefyuiApiVersion`, 1, 1e3);
}
function f1(a, r) {
  const s = be(a, r);
  De(s, ["facts"], ["facts"], r);
  const l = Je(s.facts, `${r}/facts`, l1), c = [];
  l.forEach((d, f) => {
    const y = `${r}/facts/${f}`, m = be(d, y);
    De(m, ["key", "status", "source", "collectedAt", "value"], ["key", "status", "source"], y), c.push(Ee(m.key, `${y}/key`, Ie));
    const g = Pn(
      m.status,
      ["observed", "declared", "unavailable"],
      `${y}/status`
    );
    Ee(m.source, `${y}/source`, Ie), he(m, "collectedAt") && us(m.collectedAt, `${y}/collectedAt`);
    const v = he(m, "value");
    if (g === "unavailable" && v && ee("INVALID_BUNDLE", `${y}/value`, "unavailable facts must not contain a value"), g !== "unavailable" && !v && ee("INVALID_BUNDLE", y, `${g} facts require a value`), v) {
      ii(m.value, `${y}/value`);
      const b = /* @__PURE__ */ new Map();
      ds(m.value, `${y}/value`, b), b.size > 0 && ee(
        "INVALID_BUNDLE",
        `${y}/value`,
        "SecretRefs are allowed only in the replayable study spec"
      );
    }
  }), mn(c, `${r}/facts`, "provenance fact keys");
}
function p1(a, r) {
  const s = be(a, r);
  De(
    s,
    [
      "hypothesis",
      "baseline",
      "objective",
      "repetitions",
      "concurrency",
      "applyBestRequested",
      "variants"
    ],
    [
      "hypothesis",
      "baseline",
      "objective",
      "repetitions",
      "concurrency",
      "applyBestRequested",
      "variants"
    ],
    r
  ), Ee(s.hypothesis, `${r}/hypothesis`, $t), c1(s.baseline, `${r}/baseline`);
  const l = be(s.objective, `${r}/objective`);
  De(l, ["metric", "direction"], ["metric", "direction"], `${r}/objective`), Ee(l.metric, `${r}/objective/metric`, Ie), Pn(l.direction, ["maximize", "minimize"], `${r}/objective/direction`), cs(s.repetitions, `${r}/repetitions`, 1, 5), cs(s.concurrency, `${r}/concurrency`, 1, 2), ey(s.applyBestRequested, `${r}/applyBestRequested`);
  const c = Je(s.variants, `${r}/variants`, os);
  c.length === 0 && ee("INVALID_BUNDLE", `${r}/variants`, "at least one variant is required");
  const d = [];
  c.forEach((f, y) => {
    const m = `${r}/variants/${y}`, g = be(f, m);
    De(g, ["id", "label", "operations"], ["id", "label", "operations"], m), d.push(He(g.id, `${m}/id`)), Ee(g.label, `${m}/label`, Ie), Je(
      g.operations,
      `${m}/operations`,
      Pu
    ).forEach((b, _) => {
      u1(b, `${m}/operations/${_}`);
    });
  }), mn(d, `${r}/variants`, "variant ids");
}
function m1(a, r) {
  const s = be(a, r);
  De(s, ["phase", "code", "message"], ["phase", "code", "message"], r), Pn(s.phase, ["prepare", "validate", "execute", "metric", "cancel"], `${r}/phase`), Ee(s.code, `${r}/code`, Ie), Ee(s.message, `${r}/message`, $t);
}
function h1(a, r, s) {
  const l = Je(a, s, a1), c = be(r.spec, "/payload/spec"), d = Je(c.variants, "/payload/spec/variants", os), f = new Set(d.map((v, b) => He(
    be(v, `/payload/spec/variants/${b}`).id,
    `/payload/spec/variants/${b}/id`
  ))), y = cs(c.repetitions, "/payload/spec/repetitions", 1, 5), m = [], g = [];
  l.forEach((v, b) => {
    const _ = `${s}/${b}`, N = be(v, _);
    De(
      N,
      [
        "runKey",
        "runId",
        "graphId",
        "variantId",
        "repetition",
        "status",
        "startedAt",
        "completedAt",
        "durationMs",
        "metrics",
        "error"
      ],
      ["runKey", "variantId", "repetition", "status", "durationMs", "metrics"],
      _
    );
    const D = He(N.runKey, `${_}/runKey`);
    m.push(D), he(N, "runId") && He(N.runId, `${_}/runId`), he(N, "graphId") && He(N.graphId, `${_}/graphId`);
    const x = He(N.variantId, `${_}/variantId`);
    f.has(x) || ee("INVALID_BUNDLE", `${_}/variantId`, "unknown variant id");
    const V = cs(N.repetition, `${_}/repetition`, 1, y);
    g.push(`${x}\0${V}`);
    const M = Pn(
      N.status,
      ["completed", "failed", "cancelled"],
      `${_}/status`
    );
    he(N, "startedAt") && us(N.startedAt, `${_}/startedAt`), he(N, "completedAt") && us(N.completedAt, `${_}/completedAt`), he(N, "startedAt") && he(N, "completedAt") && Date.parse(N.completedAt) < Date.parse(N.startedAt) && ee("INVALID_BUNDLE", `${_}/completedAt`, "must not be before startedAt"), mt(N.durationMs, `${_}/durationMs`) < 0 && ee("INVALID_BUNDLE", `${_}/durationMs`, "must be non-negative");
    const H = Je(N.metrics, `${_}/metrics`, vd), Z = [];
    H.forEach((X, ae) => {
      const B = `${_}/metrics/${ae}`, ce = be(X, B);
      De(
        ce,
        ["observedKey", "canonicalKey", "value", "source"],
        ["observedKey", "canonicalKey", "value", "source"],
        B
      ), Z.push(Ee(ce.observedKey, `${B}/observedKey`, Ie)), Ee(ce.canonicalKey, `${B}/canonicalKey`, Ie), mt(ce.value, `${B}/value`), Pn(ce.source, ["output_summary", "progress", "client"], `${B}/source`);
    }), mn(Z, `${_}/metrics`, "observed metric keys"), he(N, "error") && m1(N.error, `${_}/error`), M === "completed" && he(N, "error") && ee("INVALID_BUNDLE", `${_}/error`, "completed runs must not contain an error"), M !== "completed" && !he(N, "error") && ee("INVALID_BUNDLE", _, `${M} runs require an error`);
  }), mn(m, s, "run keys"), mn(g, s, "variant/repetition slots");
}
function g1(a, r) {
  const s = be(a, r);
  De(s, ["title", "evidence", "nextStep"], ["title", "evidence", "nextStep"], r), Ee(s.title, `${r}/title`, $t), Ee(s.evidence, `${r}/evidence`, $t), Ee(s.nextStep, `${r}/nextStep`, $t);
}
function y1(a, r) {
  const s = be(a, r);
  if (De(
    s,
    [
      "id",
      "label",
      "status",
      "metricKey",
      "metricValues",
      "mean",
      "stddev",
      "confidenceInterval95",
      "baselineComparison",
      "runtimeMs",
      "observedMetrics",
      "operationSummary",
      "errors"
    ],
    ["id", "label", "status", "metricValues", "runtimeMs", "observedMetrics", "errors"],
    r
  ), He(s.id, `${r}/id`), Ee(s.label, `${r}/label`, Ie), Pn(s.status, ["completed", "invalid", "failed"], `${r}/status`), he(s, "metricKey") && Ee(s.metricKey, `${r}/metricKey`, Ie), Je(s.metricValues, `${r}/metricValues`, 5).forEach((f, y) => {
    mt(f, `${r}/metricValues/${y}`);
  }), he(s, "mean") && mt(s.mean, `${r}/mean`), he(s, "stddev") && mt(s.stddev, `${r}/stddev`) < 0 && ee("INVALID_BUNDLE", `${r}/stddev`, "must be non-negative"), he(s, "confidenceInterval95")) {
    const f = be(s.confidenceInterval95, `${r}/confidenceInterval95`);
    De(
      f,
      ["level", "lower", "upper"],
      ["level", "lower", "upper"],
      `${r}/confidenceInterval95`
    ), f.level !== 0.95 && ee("INVALID_BUNDLE", `${r}/confidenceInterval95/level`, "must be 0.95");
    const y = mt(f.lower, `${r}/confidenceInterval95/lower`), m = mt(f.upper, `${r}/confidenceInterval95/upper`);
    y > m && ee("INVALID_BUNDLE", `${r}/confidenceInterval95`, "lower must not exceed upper");
  }
  if (he(s, "baselineComparison")) {
    const f = be(s.baselineComparison, `${r}/baselineComparison`);
    De(
      f,
      ["baselineId", "meanDelta", "objectiveImprovement", "hedgesG"],
      ["baselineId", "meanDelta", "objectiveImprovement"],
      `${r}/baselineComparison`
    ), He(f.baselineId, `${r}/baselineComparison/baselineId`), mt(f.meanDelta, `${r}/baselineComparison/meanDelta`), mt(
      f.objectiveImprovement,
      `${r}/baselineComparison/objectiveImprovement`
    ), he(f, "hedgesG") && mt(f.hedgesG, `${r}/baselineComparison/hedgesG`);
  }
  mt(s.runtimeMs, `${r}/runtimeMs`) < 0 && ee("INVALID_BUNDLE", `${r}/runtimeMs`, "must be non-negative");
  const c = Je(s.observedMetrics, `${r}/observedMetrics`, vd), d = [];
  c.forEach((f, y) => {
    const m = `${r}/observedMetrics/${y}`, g = be(f, m);
    De(g, ["key", "value"], ["key", "value"], m), d.push(Ee(g.key, `${m}/key`, Ie)), mt(g.value, `${m}/value`);
  }), mn(d, `${r}/observedMetrics`, "derived metric keys"), he(s, "operationSummary") && Je(s.operationSummary, `${r}/operationSummary`, Pu).forEach((f, y) => Ee(f, `${r}/operationSummary/${y}`, $t)), Je(s.errors, `${r}/errors`, Pu).forEach((f, y) => Ee(f, `${r}/errors/${y}`, $t));
}
function io(a) {
  return a.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
}
function ny(a, r) {
  return Object.is(a, r) || a === r ? !0 : Math.abs(a - r) <= Number.EPSILON * 32 * Math.max(1, Math.abs(a), Math.abs(r));
}
function Da(a, r, s, l) {
  const c = he(a, r);
  if (s === void 0) {
    c && ee("INVALID_BUNDLE", `${l}/${r}`, "is not supported by the raw run evidence");
    return;
  }
  c || ee("INVALID_BUNDLE", l, `${r} is required by the raw run evidence`);
  const d = mt(a[r], `${l}/${r}`);
  ny(d, s) || ee("INVALID_BUNDLE", `${l}/${r}`, `does not match raw run evidence (expected ${s})`);
}
function v1(a, r, s) {
  const l = a.metrics.filter((d) => d.canonicalKey === r);
  if (l.length < 2) return;
  const c = l[0].value;
  l.some((d) => d.value !== c) && ee(
    "INVALID_BUNDLE",
    `${s}/metrics`,
    `conflicting duplicate samples resolve to objective identity '${r}'`
  );
}
function ay(a, r, s) {
  const l = [...a.metrics];
  if (l.length === 0) return;
  const c = (v) => (v1(a, v.canonicalKey, s), { key: v.canonicalKey, value: v.value }), d = (v) => new Set(v.map((_) => _.canonicalKey)).size === 1 && v.length > 0 ? c(v[0]) : void 0, f = r.metric.trim(), y = l.find((v) => v.observedKey === f) ?? l.find((v) => v.observedKey.toLowerCase() === f.toLowerCase());
  if (y) return c(y);
  if (f && f.toLowerCase() !== "auto") {
    const v = io(f);
    return d(l.filter((b) => {
      const _ = io(b.observedKey);
      return _ === v || _.endsWith(`.${v}`);
    }));
  }
  const m = r.direction === "maximize" ? /(^|\.)(accuracy|f1|f1_score|reward|score|r2|auc|precision|recall)$/i : /(^|\.)(val_loss|loss|error|mae|mse|rmse)$/i, g = l.filter((v) => m.test(v.observedKey));
  return g.length > 0 ? d(g) : r.direction === "minimize" ? d(l.filter((v) => /(^|\.)runtime_ms$/i.test(v.observedKey))) : void 0;
}
function b1(a, r, s) {
  const l = Je(a.metricValues, `${s}/metricValues`, 5).map((c, d) => mt(c, `${s}/metricValues/${d}`));
  (l.length !== r.length || l.some((c, d) => c !== r[d])) && ee("INVALID_BUNDLE", `${s}/metricValues`, "does not match completed raw run evidence");
}
function iy(a) {
  const r = /* @__PURE__ */ new Map();
  for (const s of a)
    for (const l of s.metrics) {
      const c = r.get(l.observedKey) ?? [];
      c.push(l.value), r.set(l.observedKey, c);
    }
  return [...r.entries()].sort(([s], [l]) => s.localeCompare(l)).slice(0, s1).map(([s, l]) => ({ key: s, value: Wn(l) }));
}
function S1(a, r, s) {
  const l = Je(
    a.observedMetrics,
    `${s}/observedMetrics`,
    vd
  ).map((c, d) => {
    const f = be(c, `${s}/observedMetrics/${d}`);
    return {
      key: Ee(f.key, `${s}/observedMetrics/${d}/key`, Ie),
      value: mt(f.value, `${s}/observedMetrics/${d}/value`)
    };
  });
  (l.length !== r.length || l.some((c, d) => c.key !== r[d].key || !ny(c.value, r[d].value))) && ee("INVALID_BUNDLE", `${s}/observedMetrics`, "does not match raw run evidence");
}
function _1(a, r, s, l) {
  const c = s ? gd(r) : void 0;
  if (!c) {
    he(a, "confidenceInterval95") && ee(
      "INVALID_BUNDLE",
      `${l}/confidenceInterval95`,
      "is not supported by the raw run evidence"
    );
    return;
  }
  he(a, "confidenceInterval95") || ee("INVALID_BUNDLE", l, "confidenceInterval95 is required by the raw run evidence");
  const d = be(a.confidenceInterval95, `${l}/confidenceInterval95`);
  Da(d, "lower", c.lower, `${l}/confidenceInterval95`), Da(d, "upper", c.upper, `${l}/confidenceInterval95`);
}
function E1(a, r, s, l) {
  if (!r) {
    he(a, "baselineComparison") && ee("INVALID_BUNDLE", `${l}/baselineComparison`, "is not supported by the raw run evidence");
    return;
  }
  he(a, "baselineComparison") || ee("INVALID_BUNDLE", l, "baselineComparison is required by the raw run evidence");
  const c = be(a.baselineComparison, `${l}/baselineComparison`);
  c.baselineId !== s && ee("INVALID_BUNDLE", `${l}/baselineComparison/baselineId`, "does not match the evidence baseline"), Da(c, "meanDelta", r.rawDelta, `${l}/baselineComparison`), Da(
    c,
    "objectiveImprovement",
    r.improvement,
    `${l}/baselineComparison`
  ), Da(c, "hedgesG", r.hedgesG, `${l}/baselineComparison`);
}
function x1(a, r, s) {
  const l = r.spec, c = r.runs, f = a.variants.map((x, V) => {
    var le;
    const M = `${s}/variants/${V}`, R = be(x, M), H = R.id, Z = R.label, X = c.filter((w) => w.variantId === H).sort((w, Y) => w.repetition - Y.repetition || w.runKey.localeCompare(Y.runKey)), ae = X.filter((w) => w.status === "completed"), B = ae.map((w) => ay(w, l.objective, `/payload/runs/${c.indexOf(w)}`)).filter((w) => w !== void 0), ce = new Set(B.map((w) => w.key)), re = B.map((w) => w.value), K = ce.size === 1 ? (le = B[0]) == null ? void 0 : le.key : void 0, Q = ae.length === l.repetitions && B.length === l.repetitions && ce.size === 1, ue = R.status;
    ue === "invalid" && X.length > 0 && ee("INVALID_BUNDLE", `${M}/status`, "invalid variants must not contain execution runs");
    const ye = ue === "invalid" ? "invalid" : Q ? "completed" : "failed";
    K === void 0 ? he(R, "metricKey") && ee("INVALID_BUNDLE", `${M}/metricKey`, "is not supported by the raw run evidence") : R.metricKey !== K && ee(
      "INVALID_BUNDLE",
      `${M}/metricKey`,
      `does not match raw run identity '${K}'`
    );
    const F = Wn(X.map((w) => w.durationMs)) ?? 0;
    return Da(R, "runtimeMs", F, M), S1(R, iy(X), M), {
      record: R,
      id: H,
      label: Z,
      values: re,
      ...K === void 0 ? {} : { metricKey: K },
      fullyObserved: Q,
      preRankingStatus: ye,
      finalStatus: ye,
      ...Q ? { mean: Wn(re) } : {}
    };
  });
  new Set(
    f.filter((x) => x.preRankingStatus === "completed" && x.metricKey).map((x) => io(x.metricKey))
  ).size > 1 && f.forEach((x) => {
    x.preRankingStatus === "completed" && (x.finalStatus = "failed");
  }), f.forEach((x, V) => {
    const M = `${s}/variants/${V}`;
    x.record.status !== x.finalStatus && ee(
      "INVALID_BUNDLE",
      `${M}/status`,
      `does not match raw run evidence (expected ${x.finalStatus})`
    );
    const R = x.preRankingStatus === "completed" && x.finalStatus === "failed";
    b1(
      x.record,
      R ? [] : x.values,
      M
    ), _1(
      x.record,
      x.values,
      x.finalStatus === "completed",
      M
    );
    const H = x.finalStatus === "completed" ? x.mean : void 0;
    Da(x.record, "mean", H, M), Da(
      x.record,
      "stddev",
      x.finalStatus === "completed" ? mo(x.values) : void 0,
      M
    );
  });
  const m = he(a, "baselineVariantId") ? a.baselineVariantId : void 0;
  if (m !== void 0) {
    const x = l.variants.filter((M) => M.operations.length === 0);
    (x.length !== 1 || x[0].id !== m) && ee(
      "INVALID_BUNDLE",
      `${s}/baselineVariantId`,
      "must identify the single zero-operation baseline from the study spec"
    );
    const V = f.find((M) => M.id === m);
    f.forEach((M, R) => {
      const H = M.id !== m && V.finalStatus === "completed" && M.finalStatus === "completed" ? ls(M.values, V.values, l.objective.direction) : void 0;
      E1(
        M.record,
        H,
        m,
        `${s}/variants/${R}`
      );
    });
  }
  const g = f.filter((x) => x.finalStatus === "completed" && x.mean !== void 0).sort((x, V) => (l.objective.direction === "maximize" ? V.mean - x.mean : x.mean - V.mean) || x.id.localeCompare(V.id)), v = g[0], b = v ? Math.max(1, Math.abs(v.mean)) * Number.EPSILON * 8 : 0, N = (v ? g.filter((x) => Math.abs(x.mean - v.mean) <= b) : []).length === 1 ? v : void 0;
  N ? (a.winnerId !== N.id || a.winnerLabel !== N.label) && ee(
    "INVALID_BUNDLE",
    `${s}/winnerId`,
    `does not match the raw-run winner '${N.id}'`
  ) : (he(a, "winnerId") || he(a, "winnerLabel")) && ee("INVALID_BUNDLE", `${s}/winnerId`, "no unique winner is supported by the raw run evidence");
  const D = g.length === 0 ? "failed" : f.every((x) => x.finalStatus === "completed") ? "completed" : "partial";
  a.status !== D && ee(
    "INVALID_BUNDLE",
    `${s}/status`,
    `does not match raw run evidence (expected ${D})`
  );
}
function A1(a, r, s) {
  const l = be(a, s);
  De(
    l,
    [
      "status",
      "variants",
      "baselineVariantId",
      "winnerId",
      "winnerLabel",
      "appliedVariantId",
      "applyConflict",
      "insights"
    ],
    ["status", "variants", "insights"],
    s
  ), Pn(l.status, ["completed", "partial", "failed"], `${s}/status`);
  const c = Je(l.variants, `${s}/variants`, os), d = [], f = /* @__PURE__ */ new Map();
  c.forEach((b, _) => {
    y1(b, `${s}/variants/${_}`);
    const N = be(b, `${s}/variants/${_}`), D = He(N.id, `${s}/variants/${_}/id`);
    d.push(D), f.set(D, Ee(N.label, `${s}/variants/${_}/label`, Ie));
  }), mn(d, `${s}/variants`, "derived variant ids");
  const y = be(r.spec, "/payload/spec"), m = /* @__PURE__ */ new Map(), g = Je(y.variants, "/payload/spec/variants", os).map((b, _) => {
    const N = be(b, `/payload/spec/variants/${_}`), D = He(N.id, `/payload/spec/variants/${_}/id`);
    return m.set(
      D,
      Ee(N.label, `/payload/spec/variants/${_}/label`, Ie)
    ), D;
  });
  (d.length !== g.length || d.some((b) => !g.includes(b))) && ee("INVALID_BUNDLE", `${s}/variants`, "must match spec variant ids exactly");
  for (const b of d)
    f.get(b) !== m.get(b) && ee("INVALID_BUNDLE", `${s}/variants`, `label for variant '${b}' does not match the spec`);
  if (he(l, "baselineVariantId")) {
    const b = He(l.baselineVariantId, `${s}/baselineVariantId`);
    f.has(b) || ee("INVALID_BUNDLE", `${s}/baselineVariantId`, "unknown baseline variant"), c.forEach((_, N) => {
      const D = be(_, `${s}/variants/${N}`);
      if (!he(D, "baselineComparison")) return;
      be(
        D.baselineComparison,
        `${s}/variants/${N}/baselineComparison`
      ).baselineId !== b && ee(
        "INVALID_BUNDLE",
        `${s}/variants/${N}/baselineComparison/baselineId`,
        "must match derived baselineVariantId"
      );
    });
  } else c.some((b) => he(be(b, s), "baselineComparison")) && ee("INVALID_BUNDLE", `${s}/variants`, "baselineComparison requires baselineVariantId");
  if (he(l, "winnerId")) {
    const b = He(l.winnerId, `${s}/winnerId`);
    f.has(b) || ee("INVALID_BUNDLE", `${s}/winnerId`, "unknown winner variant"), he(l, "winnerLabel") && Ee(l.winnerLabel, `${s}/winnerLabel`, Ie) !== f.get(b) && ee("INVALID_BUNDLE", `${s}/winnerLabel`, "does not match the winner variant label");
  } else he(l, "winnerLabel") && ee("INVALID_BUNDLE", `${s}/winnerLabel`, "winnerLabel requires winnerId");
  if (he(l, "appliedVariantId")) {
    const b = He(l.appliedVariantId, `${s}/appliedVariantId`);
    f.has(b) || ee("INVALID_BUNDLE", `${s}/appliedVariantId`, "unknown applied variant");
  }
  he(l, "applyConflict") && Ee(l.applyConflict, `${s}/applyConflict`, $t);
  const v = be(l.insights, `${s}/insights`);
  De(v, ["summary", "warnings", "paperIdeas"], ["summary", "warnings", "paperIdeas"], `${s}/insights`), Je(v.summary, `${s}/insights/summary`, 1e3).forEach((b, _) => Ee(b, `${s}/insights/summary/${_}`, $t)), Je(v.warnings, `${s}/insights/warnings`, 1e3).forEach((b, _) => Ee(b, `${s}/insights/warnings/${_}`, $t)), Je(v.paperIdeas, `${s}/insights/paperIdeas`, 1e3).forEach((b, _) => g1(b, `${s}/insights/paperIdeas/${_}`)), x1(l, r, s);
}
function Jh(a) {
  return a.startsWith("/") && !/~(?:[^01]|$)/.test(a);
}
function ds(a, r, s) {
  if (!a || typeof a != "object") return;
  if (Array.isArray(a)) {
    a.forEach((c, d) => ds(c, `${r}/${d}`, s));
    return;
  }
  const l = be(a, r);
  if (he(l, "$gcpSecretRef")) {
    De(l, ["$gcpSecretRef"], ["$gcpSecretRef"], r);
    const c = He(l.$gcpSecretRef, `${r}/$gcpSecretRef`), d = s.get(c) ?? [];
    d.push(r), s.set(c, d);
    return;
  }
  for (const [c, d] of Object.entries(l))
    ds(d, `${r}/${ho(c)}`, s);
}
function N1(a, r, s) {
  const l = be(a, s);
  De(
    l,
    ["policy", "secretRequirements", "textRedactions"],
    ["policy", "secretRequirements", "textRedactions"],
    s
  ), l.policy !== "explicit-secret-ref-v1" && ee("INVALID_BUNDLE", `${s}/policy`, "expected 'explicit-secret-ref-v1'");
  const c = Je(
    l.secretRequirements,
    `${s}/secretRequirements`,
    Gl
  ), d = [], f = /* @__PURE__ */ new Map();
  c.forEach((N, D) => {
    const x = `${s}/secretRequirements/${D}`, V = be(N, x);
    De(
      V,
      ["id", "locations", "reason", "requiredAtReplay", "nodeType", "parameter"],
      ["id", "locations", "reason", "requiredAtReplay"],
      x
    );
    const M = He(V.id, `${x}/id`);
    d.push(M);
    const R = Je(V.locations, `${x}/locations`, Gl).map((H, Z) => {
      const X = Ee(
        H,
        `${x}/locations/${Z}`,
        $t
      );
      return Jh(X) || ee("INVALID_BUNDLE", `${x}/locations/${Z}`, "expected a valid JSON Pointer"), X;
    });
    R.length === 0 && ee("INVALID_BUNDLE", `${x}/locations`, "at least one location is required"), mn(R, `${x}/locations`, "secret locations"), f.set(M, [...R].sort()), Ee(V.reason, `${x}/reason`, $t), ey(V.requiredAtReplay, `${x}/requiredAtReplay`), he(V, "nodeType") && Ee(V.nodeType, `${x}/nodeType`, Ie), he(V, "parameter") && Ee(V.parameter, `${x}/parameter`, Ie);
  }), mn(d, `${s}/secretRequirements`, "secret requirement ids"), Je(
    l.textRedactions,
    `${s}/textRedactions`,
    Gl
  ).forEach((N, D) => {
    const x = `${s}/textRedactions/${D}`, V = be(N, x);
    De(V, ["locations", "reason"], ["locations", "reason"], x);
    const M = Je(V.locations, `${x}/locations`, Gl);
    M.length === 0 && ee("INVALID_BUNDLE", `${x}/locations`, "at least one location is required"), M.forEach((R, H) => {
      const Z = Ee(R, `${x}/locations/${H}`, $t);
      Jh(Z) || ee("INVALID_BUNDLE", `${x}/locations/${H}`, "expected a valid JSON Pointer");
    }), Ee(V.reason, `${x}/reason`, $t);
  });
  const m = /* @__PURE__ */ new Map(), g = be(r.spec, "/payload/spec");
  ds(g.baseline, "/spec/baseline", m), Je(g.variants, "/payload/spec/variants", os).forEach((N, D) => {
    const x = be(N, `/payload/spec/variants/${D}`);
    ds(x.operations, `/spec/variants/${D}/operations`, m);
  });
  const b = [...m.keys()].sort(), _ = [...f.keys()].sort();
  (b.length !== _.length || b.some((N, D) => N !== _[D])) && ee(
    "INVALID_BUNDLE",
    `${s}/secretRequirements`,
    `must declare exactly the SecretRefs used by the spec (used: ${b.join(", ") || "none"})`
  );
  for (const N of b) {
    const D = [...m.get(N)].sort(), x = f.get(N);
    (D.length !== x.length || D.some((V, M) => V !== x[M])) && ee(
      "INVALID_BUNDLE",
      `${s}/secretRequirements`,
      `locations for SecretRef '${N}' do not match the spec`
    );
  }
}
function j1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    r
  ), He(s.id, `${r}/id`);
  const l = us(s.createdAt, `${r}/createdAt`), c = us(s.completedAt, `${r}/completedAt`);
  return Date.parse(c) < Date.parse(l) && ee("INVALID_BUNDLE", `${r}/completedAt`, "must not be before createdAt"), d1(s.producer, `${r}/producer`), f1(s.provenance, `${r}/provenance`), p1(s.spec, `${r}/spec`), h1(s.runs, s, `${r}/runs`), A1(s.derived, s, `${r}/derived`), N1(s.redactionReport, s, `${r}/redactionReport`), s;
}
function w1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["algorithm", "canonicalization", "contentSha256"],
    ["algorithm", "canonicalization", "contentSha256"],
    r
  ), s.algorithm !== "SHA-256" && ee("INVALID_BUNDLE", `${r}/algorithm`, "expected 'SHA-256'"), s.canonicalization !== Wu && ee("INVALID_BUNDLE", `${r}/canonicalization`, `expected '${Wu}'`);
  const l = Ee(s.contentSha256, `${r}/contentSha256`, 64);
  return /^[a-f0-9]{64}$/.test(l) || ee("INVALID_BUNDLE", `${r}/contentSha256`, "expected 64 lowercase hexadecimal characters"), s;
}
function $1(a) {
  Fi(a);
  const r = be(a, "/");
  if (r.format !== yd)
    throw new pn(
      "UNSUPPORTED_FORMAT",
      `Unsupported study bundle format '${String(r.format ?? "")}'`
    );
  if (typeof r.formatVersion != "number" || !Number.isInteger(r.formatVersion))
    throw new pn("UNSUPPORTED_VERSION", "Study bundle formatVersion must be an integer");
  if (r.formatVersion > no)
    throw new pn(
      "FUTURE_VERSION",
      `Study bundle version ${r.formatVersion} requires a newer Graph Copilot`
    );
  if (r.formatVersion !== no)
    throw new pn(
      "UNSUPPORTED_VERSION",
      `Study bundle version ${r.formatVersion} is not supported`
    );
  De(r, ["format", "formatVersion", "payload", "integrity"], ["format", "formatVersion", "payload", "integrity"], "/");
  const s = j1(r.payload, "/payload"), l = w1(r.integrity, "/integrity");
  return { root: r, payload: s, integrity: l };
}
function ry(a) {
  return {
    format: yd,
    formatVersion: no,
    payload: a
  };
}
function sy(a, r = /* @__PURE__ */ new WeakSet()) {
  if (!a || typeof a != "object" || r.has(a)) return a;
  r.add(a);
  for (const s of Object.values(a)) sy(s, r);
  return Object.freeze(a);
}
function ly(a) {
  return JSON.parse(Fi(a));
}
function Uu(a, r) {
  return a === void 0 ? {} : { [r]: a };
}
function M1(a, r, s) {
  const l = a.variants.map((b) => {
    var ce;
    const _ = s.filter((re) => re.variantId === b.id).sort((re, K) => re.repetition - K.repetition || re.runKey.localeCompare(K.runKey)), N = _.filter((re) => re.status === "completed"), D = N.map((re) => ay(re, r.objective, `/payload/runs/${s.indexOf(re)}`)).filter((re) => re !== void 0), x = new Set(D.map((re) => re.key)), V = D.map((re) => re.value), M = x.size === 1 ? (ce = D[0]) == null ? void 0 : ce.key : void 0, R = N.length === r.repetitions && D.length === r.repetitions && x.size === 1, H = b.status === "invalid" ? "invalid" : R ? "completed" : "failed", Z = R ? gd(V) : void 0, X = R ? Wn(V) : void 0, ae = R ? mo(V) : void 0, B = {
      id: b.id,
      label: b.label,
      status: H,
      ...M === void 0 ? {} : { metricKey: M },
      metricValues: V,
      ...X === void 0 ? {} : { mean: X },
      ...ae === void 0 ? {} : { stddev: ae },
      ...Z === void 0 ? {} : {
        confidenceInterval95: {
          level: 0.95,
          lower: Z.lower,
          upper: Z.upper
        }
      },
      runtimeMs: Wn(_.map((re) => re.durationMs)) ?? 0,
      observedMetrics: iy(_),
      ...b.operationSummary === void 0 ? {} : { operationSummary: [...b.operationSummary] },
      errors: [...b.errors]
    };
    return {
      id: b.id,
      label: b.label,
      values: V,
      ...M === void 0 ? {} : { metricKey: M },
      preRankingStatus: H,
      result: B
    };
  });
  if (new Set(
    l.filter((b) => b.preRankingStatus === "completed" && b.metricKey).map((b) => io(b.metricKey))
  ).size > 1 && l.forEach((b) => {
    if (b.preRankingStatus !== "completed") return;
    const {
      mean: _,
      stddev: N,
      confidenceInterval95: D,
      baselineComparison: x,
      ...V
    } = b.result;
    b.result = { ...V, status: "failed", metricValues: [] };
  }), a.baselineVariantId !== void 0) {
    const b = l.find((_) => _.id === a.baselineVariantId);
    (b == null ? void 0 : b.result.status) === "completed" && l.forEach((_) => {
      if (_.id === b.id || _.result.status !== "completed") return;
      const N = ls(_.values, b.values, r.objective.direction);
      N && (_.result = {
        ..._.result,
        baselineComparison: {
          baselineId: b.id,
          meanDelta: N.rawDelta,
          objectiveImprovement: N.improvement,
          ...N.hedgesG === void 0 ? {} : { hedgesG: N.hedgesG }
        }
      });
    });
  }
  const d = l.filter((b) => b.result.status === "completed" && b.result.mean !== void 0).sort((b, _) => (r.objective.direction === "maximize" ? _.result.mean - b.result.mean : b.result.mean - _.result.mean) || b.id.localeCompare(_.id)), f = d[0], y = f ? Math.max(1, Math.abs(f.result.mean)) * Number.EPSILON * 8 : 0, g = (f ? d.filter((b) => Math.abs(b.result.mean - f.result.mean) <= y) : []).length === 1 ? f : void 0;
  return {
    status: d.length === 0 ? "failed" : l.every((b) => b.result.status === "completed") ? "completed" : "partial",
    variants: l.map((b) => b.result),
    ...Uu(a.baselineVariantId, "baselineVariantId"),
    ...g === void 0 ? {} : { winnerId: g.id, winnerLabel: g.label },
    ...Uu(a.appliedVariantId, "appliedVariantId"),
    ...Uu(a.applyConflict, "applyConflict"),
    insights: {
      summary: [...a.insights.summary],
      warnings: [...a.insights.warnings],
      paperIdeas: a.insights.paperIdeas.map((b) => ({ ...b }))
    }
  };
}
async function Sd(a) {
  const { payload: r, integrity: s } = $1(a), l = await Pg(Fi(ry(r)));
  if (l !== s.contentSha256)
    throw new pn(
      "INTEGRITY_MISMATCH",
      `Study bundle integrity mismatch: expected ${l}, received ${s.contentSha256}`
    );
  const c = ly(a);
  return bd(Fi(c)), sy(c);
}
async function T1(a) {
  const r = {
    hypothesis: a.session.hypothesis,
    baseline: a.baseline,
    objective: { ...a.session.objective },
    repetitions: a.session.repetitions,
    concurrency: a.concurrency ?? 1,
    applyBestRequested: a.applyBestRequested ?? !1,
    variants: a.variants
  }, s = {
    id: a.session.id,
    createdAt: a.session.createdAt,
    completedAt: a.completedAt,
    producer: a.producer,
    provenance: a.provenance,
    spec: r,
    runs: a.runs,
    derived: M1(a.session, r, a.runs),
    redactionReport: a.redactionReport
  }, l = ly(s), c = await Pg(Fi(ry(l)));
  return Sd({
    format: yd,
    formatVersion: no,
    payload: l,
    integrity: {
      algorithm: "SHA-256",
      canonicalization: Wu,
      contentSha256: c
    }
  });
}
async function _d(a) {
  const r = await Sd(a), s = Fi(r);
  return bd(s), s;
}
async function Ed(a) {
  if (typeof a != "string")
    throw new pn("INVALID_JSON", "Study bundle input must be text");
  bd(a);
  let r;
  try {
    r = JSON.parse(a);
  } catch (s) {
    throw new pn("INVALID_JSON", `Study bundle is not valid JSON: ${String(s)}`);
  }
  return Sd(r);
}
const O1 = "graph-copilot", C1 = "[REDACTED]", D1 = "Exact echoes of values removed by capture redaction were removed from text. Arbitrary unrelated secrets in ordinary strings cannot be detected.", z1 = "A credential-shaped field outside the replayable graph spec was removed.";
class R1 extends Error {
  constructor(s, l) {
    super(`${s}: ${l}`);
    rn(this, "path");
    this.name = "StudyCaptureError", this.path = s;
  }
}
function Ce(a, r) {
  throw new R1(a, r);
}
function nr(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function Nn(a, r) {
  return nr(a) || Ce(r, "expected a plain object"), a;
}
function Lt(a, r, s = !1) {
  return (typeof a != "string" || !s && a.length === 0) && Ce(r, s ? "expected a string" : "expected a non-empty string"), a;
}
function Wi(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && Ce(r, "expected a finite number"), a;
}
function Ss(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function L1(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function ri(a) {
  const r = L1(a);
  return [
    "secret",
    "secrets",
    "token",
    "password",
    "credential",
    "credentials",
    "authorization",
    "api_key",
    "private_key",
    "access_key",
    "client_secret",
    "access_token",
    "refresh_token",
    "auth_token",
    "bearer_token"
  ].some((s) => r === s || r.endsWith(`_${s}`));
}
function Pi(a, r, s = /* @__PURE__ */ new WeakSet()) {
  if (typeof a == "string") {
    a.length > 0 && r.add(a);
    return;
  }
  if (Array.isArray(a)) {
    if (s.has(a)) return;
    s.add(a), a.forEach((l) => Pi(l, r, s)), s.delete(a);
    return;
  }
  if (nr(a)) {
    if (s.has(a)) return;
    s.add(a), Object.values(a).forEach((l) => Pi(l, r, s)), s.delete(a);
  }
}
function ai(a, r, s = /* @__PURE__ */ new WeakSet()) {
  if (Array.isArray(a)) {
    if (s.has(a)) return;
    s.add(a), a.forEach((l) => ai(l, r, s)), s.delete(a);
    return;
  }
  if (nr(a) && !s.has(a)) {
    s.add(a);
    for (const [l, c] of Object.entries(a))
      ri(l) ? Pi(c, r) : ai(c, r, s);
    s.delete(a);
  }
}
function U1(a) {
  const r = /* @__PURE__ */ new Map();
  return a.forEach((s, l) => {
    const c = Lt(s == null ? void 0 : s.node_name, `definitions[${l}].node_name`);
    r.has(c) && Ce(`definitions[${l}].node_name`, `duplicate node definition '${c}'`);
    const d = /* @__PURE__ */ new Set();
    Array.isArray(s.params) || Ce(`definitions[${l}].params`, "expected an array"), s.params.forEach((f, y) => {
      const m = Lt(
        f == null ? void 0 : f.name,
        `definitions[${l}].params[${y}].name`
      );
      d.has(m) && Ce(
        `definitions[${l}].params[${y}].name`,
        `duplicate parameter definition '${m}'`
      ), d.add(m);
    }), r.set(c, s);
  }), r;
}
function oy(a) {
  const r = /* @__PURE__ */ new Map();
  return a.forEach((s) => {
    typeof (s == null ? void 0 : s.id) == "string" && typeof s.type == "string" && r.set(s.id, s.type);
  }), r;
}
function V1(a, r, s) {
  if (a.op === "add_node") {
    const l = typeof a.node_type == "string" ? a.node_type : void 0;
    return l && typeof a.ref == "string" && s.set(a.ref, l), l;
  }
  if (a.op === "set_params") {
    const l = typeof a.node_id == "string" ? a.node_id : void 0;
    return l ? s.get(l) ?? r.get(l) : void 0;
  }
  a.op === "remove_node" && typeof a.node_id == "string" ? (s.delete(a.node_id), r.delete(a.node_id)) : a.op === "clear_graph" && (r.clear(), s.clear());
}
function Zh(a, r, s, l) {
  if (ai(a, l), !nr(a)) return;
  const c = r ? s.get(r) : void 0, d = cy(c);
  for (const [f, y] of Object.entries(a)) {
    const m = d == null ? void 0 : d.get(f);
    (!c || !m || m.param_type === "secret" || ri(f)) && Pi(y, l);
  }
}
function B1(a, r) {
  var f;
  const s = /* @__PURE__ */ new Set(), { baseline: l, request: c } = a;
  for (const y of r.values())
    for (const m of y.params)
      ai(m.default, s), (m.param_type === "secret" || ri(m.name)) && Pi(m.default, s);
  ai(l, s), ai(c, s), ai(a.provenanceFacts, s);
  for (const y of Array.isArray(l.nodes) ? l.nodes : [])
    Zh((f = y.data) == null ? void 0 : f.params, y.type, r, s);
  Array.isArray(l.presets) && l.presets.forEach((y) => Pi(y, s));
  const d = oy(Array.isArray(l.nodes) ? l.nodes : []);
  for (const y of Array.isArray(c.variants) ? c.variants : []) {
    const m = new Map(d), g = /* @__PURE__ */ new Map();
    for (const v of Array.isArray(y == null ? void 0 : y.operations) ? y.operations : []) {
      if (!nr(v)) continue;
      const b = V1(v, m, g);
      (v.op === "add_node" || v.op === "set_params") && Zh(v.params, b, r, s);
    }
  }
  return s;
}
function H1(a) {
  const s = [C1, "<removed>", "***", "�"].find((l) => [...a].every((c) => !l.includes(c)));
  if (s) return s;
  for (let l = 57344; l <= 63743; l += 1) {
    const c = String.fromCodePoint(l);
    if ([...a].every((d) => !c.includes(d))) return c;
  }
  return "";
}
class G1 {
  constructor() {
    rn(this, "byReason", /* @__PURE__ */ new Map());
  }
  record(r, s) {
    const l = this.byReason.get(s) ?? /* @__PURE__ */ new Set();
    l.add(r), this.byReason.set(s, l);
  }
  report() {
    return [...this.byReason.entries()].map(([r, s]) => ({
      locations: [...s].sort(),
      reason: r
    }));
  }
}
class q1 {
  constructor(r, s) {
    rn(this, "ordered");
    rn(this, "replacement");
    this.redactions = s, this.ordered = [...r].sort((l, c) => c.length - l.length), this.replacement = H1(r);
  }
  text(r, s) {
    let l = r;
    for (const c of this.ordered) l = l.split(c).join(this.replacement);
    return l !== r && this.redactions.record(s, D1), l;
  }
  semantic(r, s) {
    return this.ordered.some((l) => r.includes(l)) && Ce(s, "a redacted value appears in a semantic identity and cannot be safely rewritten"), r;
  }
}
function k1(a) {
  return a.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 180) || "secret";
}
function I1(a) {
  if (a === null) return "null";
  if (typeof a == "string") return `string:${a}`;
  if (typeof a == "number" && Number.isFinite(a)) return `number:${String(a)}`;
  if (typeof a == "boolean") return `boolean:${String(a)}`;
}
class K1 {
  constructor() {
    rn(this, "identities", /* @__PURE__ */ new Map());
    rn(this, "requirements", /* @__PURE__ */ new Map());
    rn(this, "usedIds", /* @__PURE__ */ new Set());
  }
  ref(r) {
    const s = I1(r.rawValue), l = this.identities.get(r.identity) ?? [];
    let c = s === void 0 ? void 0 : l.find((d) => d.signature === s);
    if (!c) {
      const d = k1(r.suggestedId);
      let f = d, y = 2;
      for (; this.usedIds.has(f); )
        f = `${d}-${y}`, y += 1;
      this.usedIds.add(f), c = { signature: s, id: f }, l.push(c), this.identities.set(r.identity, l), this.requirements.set(f, {
        requirement: {
          id: f,
          reason: r.reason,
          requiredAtReplay: !0,
          ...r.nodeType === void 0 ? {} : { nodeType: r.nodeType },
          ...r.parameter === void 0 ? {} : { parameter: r.parameter }
        },
        locations: /* @__PURE__ */ new Set()
      });
    }
    return this.requirements.get(c.id).locations.add(r.location), { $gcpSecretRef: c.id };
  }
  report() {
    return [...this.requirements.values()].map(({ requirement: r, locations: s }) => ({
      ...r,
      locations: [...s].sort()
    }));
  }
}
function fs(a, r, s) {
  if (a === null || typeof a == "boolean") return a;
  if (typeof a == "number") return Wi(a, r);
  if (typeof a == "string") return s.scrubber.text(a, r);
  if (Array.isArray(a)) {
    s.stack.has(a) && Ce(r, "cyclic values are not portable"), s.stack.add(a);
    try {
      const c = [];
      for (let d = 0; d < a.length; d += 1)
        Object.prototype.hasOwnProperty.call(a, d) || Ce(`${r}/${d}`, "sparse arrays are not portable"), c.push(fs(a[d], `${r}/${d}`, s));
      return c;
    } finally {
      s.stack.delete(a);
    }
  }
  const l = Nn(a, r);
  s.stack.has(l) && Ce(r, "cyclic values are not portable"), s.stack.add(l);
  try {
    Object.prototype.hasOwnProperty.call(l, "$gcpSecretRef") && Ce(r, "raw host data may not contain the reserved '$gcpSecretRef' key");
    const c = /* @__PURE__ */ Object.create(null);
    for (const [d, f] of Object.entries(l)) {
      const y = `${r}/${Ss(d)}`;
      c[d] = ri(d) ? s.secrets.ref({
        identity: `credential:${r}:${d}`,
        suggestedId: `${d}-${r}`,
        rawValue: f,
        location: y,
        reason: `Credential-shaped key '${d}' was redacted recursively.`,
        parameter: d
      }) : fs(f, y, s);
    }
    return c;
  } finally {
    s.stack.delete(l);
  }
}
function ro(a, r, s, l, c = /* @__PURE__ */ new WeakSet()) {
  if (a === null || typeof a == "boolean") return a;
  if (typeof a == "number") return Wi(a, r);
  if (typeof a == "string") return s.text(a, r);
  if (Array.isArray(a)) {
    c.has(a) && Ce(r, "cyclic values are not portable"), c.add(a);
    try {
      const f = [];
      for (let y = 0; y < a.length; y += 1)
        Object.prototype.hasOwnProperty.call(a, y) || Ce(`${r}/${y}`, "sparse arrays are not portable"), f.push(ro(a[y], `${r}/${y}`, s, l, c));
      return f;
    } finally {
      c.delete(a);
    }
  }
  const d = Nn(a, r);
  c.has(d) && Ce(r, "cyclic values are not portable"), c.add(d);
  try {
    Object.prototype.hasOwnProperty.call(d, "$gcpSecretRef") && Ce(r, "provenance may not contain the reserved '$gcpSecretRef' key");
    const f = /* @__PURE__ */ Object.create(null);
    for (const [y, m] of Object.entries(d)) {
      const g = `${r}/${Ss(y)}`;
      ri(y) ? (f[y] = s.replacement, l.record(g, z1)) : f[y] = ro(m, g, s, l, c);
    }
    return f;
  } finally {
    c.delete(d);
  }
}
function cy(a) {
  return a ? new Map(a.params.map((r) => [r.name, r])) : void 0;
}
function td(a, r, s, l, c, d, f) {
  const y = Nn(a, c), m = r ? d.get(r) : void 0, g = cy(m), v = /* @__PURE__ */ Object.create(null);
  for (const [b, _] of Object.entries(y)) {
    const N = `${c}/${Ss(b)}`, D = g == null ? void 0 : g.get(b);
    let x;
    m ? D ? D.param_type === "secret" ? x = `${r}.${b} is declared as a secret parameter.` : ri(b) && (x = `Credential-shaped parameter '${b}' was redacted recursively.`) : x = `Parameter '${b}' is absent from the captured '${r}' schema and was redacted fail-closed.` : x = r ? `Node type '${r}' has no captured schema; parameter '${b}' was redacted fail-closed.` : `The node type is unresolved; parameter '${b}' was redacted fail-closed.`, v[b] = x ? f.secrets.ref({
      identity: `${s}:param:${b}`,
      suggestedId: `${l}-${b}`,
      rawValue: _,
      location: N,
      reason: x,
      ...r === void 0 ? {} : { nodeType: r },
      parameter: b
    }) : fs(_, N, f);
  }
  return v;
}
function X1(a, r, s) {
  nr(a) || Ce("baseline", "expected a plain serialized graph"), Array.isArray(a.nodes) || Ce("baseline.nodes", "expected an array"), Array.isArray(a.edges) || Ce("baseline.edges", "expected an array");
  const l = a.nodes.map((f, y) => {
    const m = `/spec/baseline/nodes/${y}`, g = Nn(f, `baseline.nodes[${y}]`), v = s.scrubber.semantic(Lt(g.id, `${m}/id`), `${m}/id`), b = s.scrubber.semantic(Lt(g.type, `${m}/type`), `${m}/type`);
    let _ = { x: 0, y: 0 };
    if (g.position !== void 0) {
      const x = Nn(g.position, `${m}/position`);
      _ = {
        x: Wi(x.x, `${m}/position/x`),
        y: Wi(x.y, `${m}/position/y`)
      };
    }
    const N = g.data === void 0 ? {} : Nn(g.data, `${m}/data`), D = /* @__PURE__ */ Object.create(null);
    for (const [x, V] of Object.entries(N)) {
      const M = `${m}/data/${Ss(x)}`;
      x === "params" ? D.params = td(
        V,
        b,
        `node:${v}`,
        v,
        M,
        r,
        s
      ) : ri(x) ? D[x] = s.secrets.ref({
        identity: `node:${v}:credential:${x}`,
        suggestedId: `${v}-${x}`,
        rawValue: V,
        location: M,
        reason: `Credential-shaped key '${x}' was redacted recursively.`,
        nodeType: b,
        parameter: x
      }) : D[x] = fs(V, M, s);
    }
    return { id: v, type: b, position: _, data: D };
  }), c = a.edges.map((f, y) => {
    const m = `/spec/baseline/edges/${y}`, g = Nn(f, `baseline.edges[${y}]`), v = g.type;
    v !== void 0 && v !== "data" && v !== "trigger" && Ce(`${m}/type`, "expected 'data' or 'trigger'");
    const b = v === "data" || v === "trigger" ? v : void 0;
    return {
      id: s.scrubber.semantic(Lt(g.id, `${m}/id`), `${m}/id`),
      source: s.scrubber.semantic(Lt(g.source, `${m}/source`), `${m}/source`),
      target: s.scrubber.semantic(Lt(g.target, `${m}/target`), `${m}/target`),
      sourceHandle: s.scrubber.semantic(
        Lt(g.sourceHandle, `${m}/sourceHandle`, !0),
        `${m}/sourceHandle`
      ),
      targetHandle: s.scrubber.semantic(
        Lt(g.targetHandle, `${m}/targetHandle`, !0),
        `${m}/targetHandle`
      ),
      ...b === void 0 ? {} : { type: b }
    };
  });
  return {
    nodes: l,
    edges: c,
    ...a.presets === void 0 ? {} : {
      presets: (Array.isArray(a.presets) || Ce("/spec/baseline/presets", "expected an array"), a.presets.map((f, y) => s.secrets.ref({
        identity: `preset:${y}`,
        suggestedId: `preset-${y + 1}`,
        rawValue: f,
        location: `/spec/baseline/presets/${y}`,
        reason: "Preset schema is unavailable; the entire preset was redacted fail-closed."
      })))
    },
    ...a.segmentGroups === void 0 ? {} : { segmentGroups: fs(a.segmentGroups, "/spec/baseline/segmentGroups", s) },
    ...a.name === void 0 ? {} : { name: s.scrubber.text(Lt(a.name, "/spec/baseline/name", !0), "/spec/baseline/name") },
    ...a.description === void 0 ? {} : {
      description: s.scrubber.text(
        Lt(a.description, "/spec/baseline/description", !0),
        "/spec/baseline/description"
      )
    }
  };
}
function sn(a, r, s, l = !1) {
  return s.semantic(Lt(a, r, l), r);
}
function Y1(a, r, s, l, c, d) {
  Array.isArray(a) || Ce(`request.variants[${s}].operations`, "expected an array");
  const f = new Map(l), y = /* @__PURE__ */ new Map();
  return a.map((m, g) => {
    const v = `/spec/variants/${s}/operations/${g}`, b = Nn(m, `request.variants[${s}].operations[${g}]`);
    switch (b.op) {
      case "add_node": {
        const _ = sn(b.node_type, `${v}/node_type`, d.scrubber), N = b.ref === void 0 ? void 0 : sn(b.ref, `${v}/ref`, d.scrubber);
        N !== void 0 && y.set(N, _);
        const D = c.get(_), x = /* @__PURE__ */ Object.create(null);
        for (const H of (D == null ? void 0 : D.params) ?? [])
          H.default !== void 0 && (x[H.name] = H.default);
        if (b.params !== void 0)
          for (const [H, Z] of Object.entries(Nn(b.params, `${v}/params`)))
            x[H] = Z;
        const M = Object.keys(x).length > 0 ? td(
          x,
          _,
          N === void 0 ? `variant:${r}:operation:${g}` : `variant:${r}:ref:${N}`,
          N ?? `${r}-node-${g + 1}`,
          `${v}/params`,
          c,
          d
        ) : void 0, R = b.position === void 0 ? void 0 : (() => {
          const H = Nn(b.position, `${v}/position`);
          return {
            x: Wi(H.x, `${v}/position/x`),
            y: Wi(H.y, `${v}/position/y`)
          };
        })();
        return {
          op: "add_node",
          node_type: _,
          ...N === void 0 ? {} : { ref: N },
          ...M === void 0 ? {} : { params: M },
          ...R === void 0 ? {} : { position: R }
        };
      }
      case "set_params": {
        const _ = sn(b.node_id, `${v}/node_id`, d.scrubber), N = y.get(_) ?? f.get(_), D = y.has(_) ? `variant:${r}:ref:${_}` : `node:${_}`;
        return {
          op: "set_params",
          node_id: _,
          params: td(
            b.params,
            N,
            D,
            _,
            `${v}/params`,
            c,
            d
          )
        };
      }
      case "connect":
        return {
          op: "connect",
          source: sn(b.source, `${v}/source`, d.scrubber),
          source_handle: sn(
            b.source_handle,
            `${v}/source_handle`,
            d.scrubber,
            !0
          ),
          target: sn(b.target, `${v}/target`, d.scrubber),
          target_handle: sn(
            b.target_handle,
            `${v}/target_handle`,
            d.scrubber,
            !0
          )
        };
      case "remove_node": {
        const _ = sn(b.node_id, `${v}/node_id`, d.scrubber);
        return y.delete(_), f.delete(_), { op: "remove_node", node_id: _ };
      }
      case "remove_edge":
        return {
          op: "remove_edge",
          source: sn(b.source, `${v}/source`, d.scrubber),
          target: sn(b.target, `${v}/target`, d.scrubber),
          ...b.source_handle === void 0 ? {} : {
            source_handle: sn(
              b.source_handle,
              `${v}/source_handle`,
              d.scrubber,
              !0
            )
          },
          ...b.target_handle === void 0 ? {} : {
            target_handle: sn(
              b.target_handle,
              `${v}/target_handle`,
              d.scrubber,
              !0
            )
          }
        };
      case "clear_graph":
        return f.clear(), y.clear(), { op: "clear_graph" };
      case "auto_layout":
        return { op: "auto_layout" };
      default:
        return Ce(`${v}/op`, `unsupported graph operation '${String(b.op)}'`);
    }
  });
}
function Q1(a, r) {
  var s;
  return ((s = a.id) == null ? void 0 : s.trim()) || `variant-${r + 1}`;
}
function J1(a) {
  Array.isArray(a.request.variants) || Ce("request.variants", "expected an array"), Array.isArray(a.session.variants) || Ce("session.variants", "expected an array"), (a.request.repetitions ?? 1) !== a.session.repetitions && Ce("request.repetitions", "does not match the completed session"), (a.request.objective.metric !== a.session.objective.metric || a.request.objective.direction !== a.session.objective.direction) && Ce("request.objective", "does not match the completed session"), a.request.hypothesis.trim() !== a.session.hypothesis && Ce("request.hypothesis", "does not match the completed session"), a.request.variants.length !== a.session.variants.length && Ce("request.variants", "does not match the completed session variant count"), a.request.variants.forEach((s, l) => {
    const c = a.session.variants[l];
    Q1(s, l) !== (c == null ? void 0 : c.id) && Ce(`request.variants[${l}].id`, "does not match the completed session variant id"), s.label.trim() !== c.label && Ce(`request.variants[${l}].label`, "does not match the completed session variant label");
  });
}
function Z1(a, r, s) {
  return {
    ...a,
    id: s.semantic(a.id, `/derived/variants/${r}/id`),
    label: s.text(a.label, `/derived/variants/${r}/label`),
    ...a.metricKey === void 0 ? {} : { metricKey: s.semantic(a.metricKey, `/derived/variants/${r}/metricKey`) },
    metricValues: [...a.metricValues],
    observedMetrics: Object.fromEntries(Object.entries(a.observedMetrics).map(([l, c]) => [
      s.semantic(l, `/derived/variants/${r}/observedMetrics/${Ss(l)}`),
      c
    ])),
    ...a.runs === void 0 ? {} : {
      runs: a.runs.map((l) => ({
        ...l,
        observedMetrics: { ...l.observedMetrics }
      }))
    },
    ...a.operationSummary === void 0 ? {} : {
      operationSummary: a.operationSummary.map((l, c) => s.text(l, `/derived/variants/${r}/operationSummary/${c}`))
    },
    errors: a.errors.map((l, c) => s.text(l, `/derived/variants/${r}/errors/${c}`))
  };
}
function F1(a, r) {
  const s = a.variants.map((c, d) => Z1(c, d, r)), l = new Map(s.map((c) => [c.id, c]));
  return {
    ...a,
    id: r.semantic(a.id, "/id"),
    hypothesis: r.text(a.hypothesis, "/spec/hypothesis"),
    objective: {
      ...a.objective,
      metric: r.semantic(a.objective.metric, "/spec/objective/metric")
    },
    variants: s,
    ...a.search === void 0 ? {} : { search: a.search },
    ...a.winnerLabel === void 0 ? {} : {
      winnerLabel: (() => {
        const c = r.text(a.winnerLabel, "/derived/winnerLabel");
        return a.winnerId && l.has(a.winnerId) ? l.get(a.winnerId).label : c;
      })()
    },
    ...a.applyConflict === void 0 ? {} : { applyConflict: r.text(a.applyConflict, "/derived/applyConflict") },
    insights: {
      summary: a.insights.summary.map((c, d) => r.text(c, `/derived/insights/summary/${d}`)),
      warnings: a.insights.warnings.map((c, d) => r.text(c, `/derived/insights/warnings/${d}`)),
      paperIdeas: a.insights.paperIdeas.map((c, d) => ({
        title: r.text(c.title, `/derived/insights/paperIdeas/${d}/title`),
        evidence: r.text(c.evidence, `/derived/insights/paperIdeas/${d}/evidence`),
        nextStep: r.text(c.nextStep, `/derived/insights/paperIdeas/${d}/nextStep`)
      }))
    }
  };
}
function W1(a, r, s) {
  if (!(a.metricKey === void 0 && a.metricValue === void 0))
    return (typeof a.metricKey != "string" || a.metricKey.length === 0 || typeof a.metricValue != "number" || !Number.isFinite(a.metricValue)) && Ce("session.variants[].runs[].metric", "metricKey and finite metricValue must be provided together"), {
      // Older run records retained only the canonical identity. Calling that
      // stored identity the observed key is explicit client-side evidence, not
      // a guessed node/port identity.
      observedKey: r.semantic(a.metricKey, `${s}/observedKey`),
      canonicalKey: r.semantic(a.metricKey, `${s}/canonicalKey`),
      value: a.metricValue,
      source: a.metricSource ?? "client"
    };
}
function P1(a, r) {
  const s = [], l = /* @__PURE__ */ new Set();
  return a.variants.forEach((c, d) => {
    var f;
    (f = c.runs) == null || f.forEach((y, m) => {
      var x, V;
      const g = `${c.id}\0${y.repetition}`;
      l.has(g) && Ce(`session.variants[${d}].runs[${m}]`, "duplicate variant/repetition run slot"), l.add(g);
      const v = [], b = /* @__PURE__ */ new Set(), _ = W1(y, r, `/runs/${s.length}/metrics/0`);
      _ && (b.add(_.observedKey), v.push(_));
      for (const [M, R] of Object.entries(y.observedMetrics)) {
        if (!Number.isFinite(R)) continue;
        const H = ((x = y.observedMetricIdentities) == null ? void 0 : x[M]) ?? (M === "system.runtime_ms" ? "system.runtime_ms" : void 0), Z = ((V = y.observedMetricSources) == null ? void 0 : V[M]) ?? (M === "system.runtime_ms" ? "client" : void 0);
        if (!H || !Z) continue;
        const X = `/runs/${s.length}/metrics/${v.length}`, ae = r.semantic(M, `${X}/observedKey`), B = r.semantic(H, `${X}/canonicalKey`);
        b.has(ae) || (b.add(ae), v.push({ observedKey: ae, canonicalKey: B, value: R, source: Z }));
      }
      const N = Number.isFinite(y.observedMetrics["system.runtime_ms"]) ? y.observedMetrics["system.runtime_ms"] : y.durationMs;
      Number.isFinite(N) && !b.has("system.runtime_ms") && v.push({
        observedKey: "system.runtime_ms",
        canonicalKey: "system.runtime_ms",
        value: N,
        source: "client"
      });
      const D = `/runs/${s.length}/error/message`;
      s.push({
        runKey: `${c.id}:rep:${y.repetition}`,
        variantId: c.id,
        repetition: y.repetition,
        status: y.status,
        durationMs: y.durationMs,
        metrics: v,
        ...y.status === "failed" ? {
          error: {
            phase: "execute",
            code: "EXPERIMENT_RUN_FAILED",
            message: r.text(
              y.error ?? "No error message was recorded by the experiment runtime.",
              D
            )
          }
        } : {}
      });
    });
  }), s;
}
function eS(a, r, s) {
  const l = (a.provenanceFacts ?? []).map((c, d) => {
    const f = `/provenance/facts/${d}`;
    return {
      key: r.text(Lt(c.key, `${f}/key`), `${f}/key`),
      status: c.status,
      source: r.text(Lt(c.source, `${f}/source`), `${f}/source`),
      ...c.collectedAt === void 0 ? {} : { collectedAt: c.collectedAt },
      ...c.value === void 0 ? {} : { value: ro(c.value, `${f}/value`, r, s) }
    };
  });
  return a.request.search !== void 0 && (l.some((c) => c.key === "optimizer.plan") && Ce("provenanceFacts", "'optimizer.plan' is reserved for the captured experiment request"), l.push({
    key: "optimizer.plan",
    status: "observed",
    source: "graph-experiment request",
    value: ro(
      a.request.search,
      `/provenance/facts/${l.length}/value`,
      r,
      s
    )
  })), l.some((c) => c.key === "redaction.arbitrary_string_secret_detection") && Ce(
    "provenanceFacts",
    "'redaction.arbitrary_string_secret_detection' is reserved for the capture limitation"
  ), l.push({
    key: "redaction.arbitrary_string_secret_detection",
    status: "unavailable",
    source: "schema-guided capture cannot detect arbitrary secrets embedded in ordinary strings"
  }), l;
}
async function tS(a) {
  J1(a);
  const r = U1(a.definitions), s = B1(a, r), l = new G1(), c = new q1(s, l), d = new K1(), f = { secrets: d, scrubber: c, stack: /* @__PURE__ */ new WeakSet() }, y = X1(a.baseline, r, f), m = oy(a.baseline.nodes), g = F1(a.session, c), v = a.request.variants.map((D, x) => ({
    id: g.variants[x].id,
    label: c.text(a.session.variants[x].label, `/spec/variants/${x}/label`),
    operations: Y1(
      D.operations,
      g.variants[x].id,
      x,
      m,
      r,
      f
    )
  }));
  if (g.variants.forEach((D, x) => {
    D.label = v[x].label;
  }), g.winnerId !== void 0) {
    const D = g.variants.find((x) => x.id === g.winnerId);
    D && (g.winnerLabel = D.label);
  }
  const b = P1(a.session, c), _ = eS(a, c, l), N = {
    policy: "explicit-secret-ref-v1",
    secretRequirements: d.report(),
    textRedactions: l.report()
  };
  return T1({
    session: g,
    completedAt: a.completedAt,
    producer: {
      pluginId: a.pluginId ?? O1,
      pluginVersion: a.pluginVersion,
      codefyuiApiVersion: a.codefyuiApiVersion
    },
    provenance: { facts: _ },
    baseline: y,
    variants: v,
    runs: b,
    redactionReport: N,
    concurrency: a.request.concurrency ?? 1,
    applyBestRequested: a.request.apply_best ?? !1
  });
}
const so = "graph-copilot.study-index.v1", nS = "graph-copilot.study.sha256.", xd = "codefyui.graph-copilot.study-index", Ad = 1, uy = 10, aS = 512 * 1024, dy = 256, iS = 32 * 1024, Fh = 4, fy = /^[a-f0-9]{64}$/, rS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, sS = "graph-copilot.study-index.v1.lock";
class ut extends Error {
  constructor(s, l, c) {
    super(l);
    rn(this, "code");
    rn(this, "causeValue");
    this.name = "StudyStorageError", this.code = s, this.causeValue = c;
  }
}
function py(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function my(a, r) {
  const s = Object.keys(a);
  return s.length === r.length && s.every((l) => r.includes(l));
}
function lS(a) {
  return typeof a == "string" && rS.test(a) && !Number.isNaN(Date.parse(a)) && new Date(a).toISOString() === a;
}
function hy(a) {
  return typeof a == "string" && a.length > 0 && a.length <= dy && a === a.trim() && !/[\u0000-\u001f\u007f]/.test(a);
}
function oS(a) {
  if (!hy(a))
    throw new ut(
      "INVALID_ID",
      `Study id must be a non-empty, trimmed string of at most ${dy} characters`
    );
}
function cS(a) {
  return !py(a) || !my(a, ["id", "digest", "createdAt", "hypothesis", "kind"]) || !hy(a.id) || typeof a.digest != "string" || !fy.test(a.digest) || !lS(a.createdAt) || typeof a.hypothesis != "string" || !a.hypothesis.trim() || a.hypothesis.length > iS || a.hypothesis.includes("\0") || a.kind !== "portable" ? null : Object.freeze({
    id: a.id,
    digest: a.digest,
    createdAt: a.createdAt,
    hypothesis: a.hypothesis,
    kind: "portable"
  });
}
function go(a, r) {
  return r.createdAt.localeCompare(a.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function uS(a, r) {
  return a.createdAt.localeCompare(r.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function gy(a) {
  return Object.freeze({
    format: xd,
    formatVersion: Ad,
    entries: Object.freeze([...a].sort(go))
  });
}
const ni = gy([]);
function yo(a) {
  if (!a || a.length > aS) return ni;
  let r;
  try {
    r = JSON.parse(a);
  } catch {
    return ni;
  }
  if (!py(r) || !my(r, ["format", "formatVersion", "entries"]) || r.format !== xd || r.formatVersion !== Ad || !Array.isArray(r.entries)) return ni;
  const s = r.entries.map(cS).filter((f) => f !== null), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  for (const f of s)
    l.set(f.id, (l.get(f.id) ?? 0) + 1), c.set(f.digest, (c.get(f.digest) ?? 0) + 1);
  const d = s.filter((f) => l.get(f.id) === 1 && c.get(f.digest) === 1);
  return gy(d.sort(go).slice(0, uy));
}
function Nd(a) {
  return JSON.stringify({
    format: xd,
    formatVersion: Ad,
    entries: [...a].sort(go)
  });
}
function Wh(a) {
  if (a === null) return ni;
  const r = yo(a);
  if (a !== Nd(r.entries))
    throw new ut(
      "INDEX_READ_FAILED",
      "Portable study index is malformed or non-canonical; mutation was aborted without changing storage"
    );
  return r;
}
function er(a) {
  try {
    return a.storage.get(so);
  } catch (r) {
    throw new ut("INDEX_READ_FAILED", "Could not read the portable study index", r);
  }
}
function yy(a, r) {
  try {
    return a.storage.remove(r), !0;
  } catch {
    return !1;
  }
}
const ql = /* @__PURE__ */ new Map();
function dS() {
  if (typeof navigator > "u") return null;
  const a = navigator.locks;
  return !a || typeof a.request != "function" ? null : a;
}
function vy(a, r) {
  const s = dS();
  if (s === null)
    return Promise.reject(new ut(
      "LOCK_UNAVAILABLE",
      "Cross-tab storage mutations require browser Web Locks; this environment remains read-only"
    ));
  const l = ql.get(a) ?? Promise.resolve();
  let c;
  const d = new Promise((f) => {
    c = f;
  });
  return ql.set(a, d), l.catch(() => {
  }).then(() => s.request(a, { mode: "exclusive" }, r)).finally(() => {
    c(), ql.get(a) === d && ql.delete(a);
  });
}
function fS(a) {
  return vy(sS, a);
}
function pS(a, r, s) {
  if (er(a) !== r) return !1;
  try {
    a.storage.set(so, s);
  } catch (l) {
    let c;
    try {
      c = a.storage.get(so);
    } catch {
      c = void 0;
    }
    if (c === s) return !0;
    throw new ut(
      "INDEX_WRITE_FAILED",
      c === r ? "Portable study index write failed before changing the index" : "Portable study index write failed and the resulting index was left untouched to avoid overwriting a concurrent update",
      l
    );
  }
  return er(a) === s;
}
function mS(a, r) {
  try {
    const s = er(a), l = yo(s);
    return l.entries.some((c) => c.digest === r) ? !0 : s !== null && s !== Nd(l.entries);
  } catch {
    return !0;
  }
}
function Ph(a, r) {
  return mS(a, r) ? !0 : yy(a, jd(r));
}
function jd(a) {
  if (!fy.test(a))
    throw new ut("BUNDLE_TAMPERED", "Study digest is not a lowercase SHA-256 value");
  return `${nS}${a}`;
}
async function hS(a) {
  return Ed(a);
}
function gS(a) {
  try {
    return yo(a.storage.get(so));
  } catch {
    return ni;
  }
}
async function by(a, r) {
  const s = await _d(r), l = await Ed(s), c = Object.freeze({
    id: l.payload.id,
    digest: l.integrity.contentSha256,
    createdAt: l.payload.createdAt,
    hypothesis: l.payload.spec.hypothesis,
    kind: "portable"
  });
  return fS(async () => {
    const d = er(a), y = Wh(d).entries.find((b) => b.id === c.id);
    if (y && y.digest !== c.digest)
      throw new ut(
        "ID_CONFLICT",
        `Study '${c.id}' already exists with different content; fork it to a new id before saving`
      );
    const m = jd(c.digest);
    let g;
    try {
      g = a.storage.get(m);
    } catch (b) {
      throw new ut("BUNDLE_READ_FAILED", `Could not inspect study blob ${c.digest}`, b);
    }
    if (g !== null && g !== s)
      throw new ut(
        "BUNDLE_KEY_CONFLICT",
        `Content-addressed study blob ${c.digest} already contains different bytes`
      );
    if (y && g === s)
      return Object.freeze({
        status: "unchanged",
        entry: y,
        cleanupFailures: Object.freeze([])
      });
    const v = g === null;
    if (v) {
      try {
        a.storage.set(m, s);
      } catch (b) {
        let _;
        try {
          _ = a.storage.get(m);
        } catch {
          _ = void 0;
        }
        if (_ === s)
          g = _;
        else
          throw _ !== void 0 && yy(a, m), new ut(
            "BUNDLE_WRITE_FAILED",
            `Could not store portable study blob ${c.digest}`,
            b
          );
      }
      if (g !== null && g !== s)
        throw new ut(
          "BUNDLE_KEY_CONFLICT",
          `Content-addressed study blob ${c.digest} changed during the write`
        );
    }
    try {
      for (let b = 0; b < Fh; b += 1) {
        const _ = er(a), N = Wh(_), D = N.entries.find((X) => X.id === c.id);
        if (D) {
          if (D.digest !== c.digest)
            throw new ut(
              "ID_CONFLICT",
              `Study '${c.id}' already exists with different content; fork it to a new id before saving`
            );
          return Object.freeze({
            status: v ? "saved" : "unchanged",
            entry: D,
            cleanupFailures: Object.freeze([])
          });
        }
        const x = [...N.entries, c], V = [...N.entries].sort(uS).slice(0, Math.max(0, x.length - uy)), M = new Set(V.map((X) => X.digest)), R = x.filter((X) => !M.has(X.digest)).sort(go), H = Nd(R);
        if (!pS(a, _, H)) continue;
        const Z = [];
        for (const X of V)
          Ph(a, X.digest) || Z.push(X.digest);
        return Object.freeze({
          status: "saved",
          entry: c,
          cleanupFailures: Object.freeze(Z)
        });
      }
      throw new ut(
        "INDEX_WRITE_FAILED",
        `Portable study index changed during ${Fh} consecutive commit attempts`
      );
    } catch (b) {
      throw v && Ph(a, c.digest), b;
    }
  });
}
async function eg(a, r) {
  oS(r);
  const l = yo(er(a)).entries.find((f) => f.id === r);
  if (!l)
    throw new ut("STUDY_NOT_FOUND", `Portable study '${r}' is not indexed`);
  const c = jd(l.digest);
  let d;
  try {
    d = a.storage.get(c);
  } catch (f) {
    throw new ut("BUNDLE_READ_FAILED", `Could not read portable study '${r}'`, f);
  }
  if (d === null)
    throw new ut("BUNDLE_MISSING", `Portable study '${r}' is indexed but its blob is missing`);
  try {
    const f = await Ed(d), y = await _d(f);
    if (f.payload.id !== l.id || f.integrity.contentSha256 !== l.digest || y !== d)
      throw new ut(
        "BUNDLE_TAMPERED",
        `Portable study '${r}' does not match its content-addressed index entry`
      );
    return f;
  } catch (f) {
    if (f instanceof ut) throw f;
    const y = f instanceof pn ? ` (${f.code})` : "";
    throw new ut(
      "BUNDLE_TAMPERED",
      `Portable study '${r}' failed integrity verification${y}`,
      f
    );
  }
}
const yS = 96e3;
function ps(a) {
  if (typeof a == "number" && Number.isFinite(a)) return a;
  if (typeof a == "boolean") return a ? 1 : 0;
}
function Oa(a) {
  return a && typeof a == "object" && !Array.isArray(a) ? a : null;
}
function tg(a, r, s) {
  const l = Oa(s);
  if (!l) return;
  if ((typeof l.type == "string" ? l.type : "") === "model") {
    const y = ps(l.trainable ?? l.params);
    y !== void 0 && (a.modelParams[r] = y);
    return;
  }
  const d = l.value, f = ps(d);
  if (f !== void 0) {
    a.scalars[r] = f;
    return;
  }
  typeof d == "string" && d.length > 0 && (a.strings[r] = d.slice(0, 200));
}
function Sy(a) {
  const r = {
    scalars: {},
    strings: {},
    modelParams: {},
    progress: null,
    texts: [],
    media: []
  }, s = Oa(a.output_summary);
  if (s)
    for (const [d, f] of Object.entries(s))
      tg(r, d, f);
  const l = Oa(a.progress);
  l && (r.progress = l);
  const c = Array.isArray(a.outputs) ? a.outputs : [];
  for (const d of c) {
    const f = Oa(d);
    if (!f) continue;
    const y = typeof f.output_kind == "string" ? f.output_kind : "";
    if (y === "progress") {
      const m = Oa(f.progress);
      m && (r.progress = m);
    } else if (y === "tensor_summary") {
      const m = Oa(f.tensor_summary);
      if (m)
        for (const [g, v] of Object.entries(m))
          tg(r, g, v);
    } else if (y === "text")
      typeof f.text == "string" && f.text.length > 0 && r.texts.push(f.text);
    else if (y === "image") {
      const m = Oa(f.image), g = m && typeof m.data == "string" ? m.data : "";
      g && g.length <= yS && r.media.push({
        kind: "image",
        data: g,
        format: m && typeof m.format == "string" ? m.format : "png",
        ...typeof f.port == "string" && f.port ? { port: f.port } : {}
      });
    } else if (y === "video") {
      const m = Oa(f.video), g = m && typeof m.url == "string" ? m.url : "";
      if (g && g.startsWith("/")) {
        const v = {
          kind: "video",
          url: g,
          format: m && typeof m.format == "string" ? m.format : "mp4",
          ...typeof f.port == "string" && f.port ? { port: f.port } : {}
        };
        for (const b of ["fps", "frames", "width", "height", "bytes"]) {
          const _ = ps(m == null ? void 0 : m[b]);
          _ !== void 0 && (v[b] = _);
        }
        r.media.push(v);
      }
    }
  }
  return r;
}
const wd = "experiment-sessions-v1", nd = "gcp:experiments-changed", ng = 8, lo = 16, vS = 20, _y = 600 * 1e3, bS = "graph-copilot.experiment-sessions-v1.lock";
function Ey(a) {
  const r = a.timeout_minutes;
  return typeof r != "number" || !Number.isFinite(r) ? _y : Math.min(60, Math.max(1, Math.round(r))) * 60 * 1e3;
}
class Ql extends Error {
  constructor(s, l) {
    super(s.message);
    rn(this, "observation");
    this.name = s.name, this.observation = l;
  }
}
function ms(a) {
  return a === void 0 ? a : JSON.parse(JSON.stringify(a));
}
function SS(a) {
  const r = String(a);
  return a instanceof ut && a.causeValue !== void 0 ? `${r}: ${String(a.causeValue)}` : r;
}
function hs(a) {
  const r = typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${a}-${r}`;
}
function _S(a) {
  return typeof a == "number" && Number.isFinite(a) ? a : void 0;
}
function oo(a) {
  if (a.length !== 0)
    return a.reduce((r, s) => r + s, 0) / a.length;
}
function ES(a) {
  if (a.length < 2) return;
  const r = oo(a);
  return Math.sqrt(a.reduce((s, l) => s + (l - r) ** 2, 0) / (a.length - 1));
}
function ag(a) {
  return JSON.stringify({
    nodes: a.nodes,
    edges: a.edges,
    presets: a.presets ?? []
  });
}
function $d(a) {
  const r = a.nodes.filter((l) => l.type !== "note"), s = new Set(r.map((l) => l.id));
  return {
    ...a,
    nodes: r,
    edges: a.edges.filter((l) => typeof l.source == "string" && typeof l.target == "string" && s.has(l.source) && s.has(l.target))
  };
}
function xS(a) {
  return Object.fromEntries(a.params.map((r) => [r.name, ms(r.default)]));
}
function AS(a, r) {
  if (a.param_type === "int" && (typeof r != "number" || !Number.isInteger(r)))
    return `Parameter '${a.name}' must be an integer`;
  if (a.param_type === "float" && (typeof r != "number" || Number.isNaN(r)))
    return `Parameter '${a.name}' must be a number`;
  if (a.param_type === "bool" && typeof r != "boolean")
    return `Parameter '${a.name}' must be a boolean`;
  if (a.param_type === "string" && typeof r != "string")
    return `Parameter '${a.name}' must be a string`;
  if (a.param_type === "select" && (typeof r != "string" || !a.options.includes(r)))
    return `Parameter '${a.name}' must be one of: ${a.options.join(", ")}`;
  if ((a.param_type === "int" || a.param_type === "float") && typeof r == "number") {
    if (a.min_value !== null && r < a.min_value)
      return `Parameter '${a.name}' must be >= ${a.min_value}`;
    if (a.max_value !== null && r > a.max_value)
      return `Parameter '${a.name}' must be <= ${a.max_value}`;
  }
}
function ig(a, r) {
  if (!r || typeof r != "object" || Array.isArray(r))
    return "params must be an object";
  const s = new Map(a.params.map((l) => [l.name, l]));
  for (const [l, c] of Object.entries(r)) {
    const d = s.get(l);
    if (!d)
      return `Unknown parameter '${l}' for node type '${a.node_name}'`;
    const f = AS(d, c);
    if (f) return f;
  }
}
function NS(a) {
  return a.map((r) => {
    switch (r.op) {
      case "add_node":
        return `add ${r.node_type}${r.params ? ` (${Object.keys(r.params).join(", ") || "defaults"})` : ""}`;
      case "set_params":
        return `set ${r.node_id}: ${Object.keys(r.params).join(", ") || "no parameters"}`;
      case "connect":
        return `connect ${r.source}.${r.source_handle} -> ${r.target}.${r.target_handle}`;
      case "remove_node":
        return `remove node ${r.node_id}`;
      case "remove_edge":
        return `remove edge ${r.source} -> ${r.target}`;
      case "clear_graph":
        return "clear graph";
      case "auto_layout":
        return "auto layout";
    }
  });
}
function rg(a, r, s) {
  const l = ms(a), c = {}, d = [], f = new Map(s.map((g) => [g.node_name, g])), y = (g) => {
    const v = c[g] ?? g;
    return l.nodes.some((b) => b.id === v) ? v : void 0;
  }, m = (g, v) => d.push({ index: g, ok: !1, error: v });
  return r.forEach((g, v) => {
    var b;
    if (!g || typeof g != "object" || typeof g.op != "string") {
      m(v, "Operation must be an object with an op field");
      return;
    }
    switch (g.op) {
      case "add_node": {
        const _ = f.get(g.node_type);
        if (!_) {
          m(v, `Unknown node type '${g.node_type}'`);
          return;
        }
        if (g.params !== void 0) {
          const x = ig(_, g.params);
          if (x) {
            m(v, `add_node: ${x}`);
            return;
          }
        }
        const N = hs("candidate-node"), D = {
          id: N,
          type: g.node_type,
          position: g.position ?? {
            x: 160 + l.nodes.length % 4 * 240,
            y: 120 + Math.floor(l.nodes.length / 4) * 160
          },
          data: { params: { ...xS(_), ...g.params ?? {} } }
        };
        l.nodes.push(D), g.ref && (c[g.ref] = N), d.push({ index: v, ok: !0, node_id: N });
        return;
      }
      case "set_params": {
        const _ = y(g.node_id);
        if (!_) {
          m(v, `set_params: unknown node '${g.node_id}'`);
          return;
        }
        const N = l.nodes.find((V) => V.id === _), D = typeof N.type == "string" ? f.get(N.type) : void 0;
        if (!D) {
          m(v, `set_params: node '${g.node_id}' has no known definition`);
          return;
        }
        const x = ig(D, g.params);
        if (x) {
          m(v, `set_params: ${x}`);
          return;
        }
        N.data = {
          ...N.data ?? {},
          params: { ...((b = N.data) == null ? void 0 : b.params) ?? {}, ...ms(g.params) }
        }, d.push({ index: v, ok: !0, node_id: _ });
        return;
      }
      case "connect": {
        const _ = y(g.source), N = y(g.target);
        if (!_ || !N) {
          m(v, `connect: unknown ${_ ? "target" : "source"} node`);
          return;
        }
        const D = g.source_handle === "trigger", x = {
          id: hs("candidate-edge"),
          source: _,
          target: N,
          sourceHandle: g.source_handle,
          targetHandle: D ? "__trigger" : g.target_handle,
          ...D ? { type: "trigger" } : {}
        };
        l.edges.push(x), d.push({ index: v, ok: !0 });
        return;
      }
      case "remove_node": {
        const _ = y(g.node_id);
        if (!_) {
          m(v, `remove_node: unknown node '${g.node_id}'`);
          return;
        }
        l.nodes = l.nodes.filter((N) => N.id !== _), l.edges = l.edges.filter((N) => N.source !== _ && N.target !== _), d.push({ index: v, ok: !0 });
        return;
      }
      case "remove_edge": {
        const _ = y(g.source), N = y(g.target);
        if (!_ || !N) {
          m(v, "remove_edge: unknown source or target node");
          return;
        }
        const D = l.edges.length;
        l.edges = l.edges.filter((x) => !(x.source === _ && x.target === N && (g.source_handle === void 0 || x.sourceHandle === g.source_handle) && (g.target_handle === void 0 || x.targetHandle === g.target_handle))), D === l.edges.length ? m(v, "remove_edge: no matching edge") : d.push({ index: v, ok: !0 });
        return;
      }
      case "clear_graph":
        l.nodes = [], l.edges = [], Object.keys(c).forEach((_) => delete c[_]), d.push({ index: v, ok: !0 });
        return;
      case "auto_layout":
        l.nodes.forEach((_, N) => {
          _.position = {
            x: 120 + N % 4 * 260,
            y: 100 + Math.floor(N / 4) * 180
          };
        }), d.push({ index: v, ok: !0 });
        return;
      default:
        m(v, `Unknown operation '${g.op ?? ""}'`);
    }
  }), { graph: l, results: d, refs: c };
}
async function jS(a, r, s) {
  try {
    const l = $d(r), c = await a.http.fetch("/api/graph/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: s,
      body: JSON.stringify({
        nodes: l.nodes,
        edges: l.edges,
        presets: l.presets ?? []
      })
    });
    if (!c.ok) return [`Validation request failed: HTTP ${c.status}`];
    const d = await c.json(), f = Array.isArray(d.errors) ? d.errors.map(String) : [];
    return d.valid !== !0 ? f.length > 0 ? f : ["Graph validation returned an invalid or malformed result"] : f.length === 0 ? [] : ["Graph validation returned valid=true together with errors", ...f];
  } catch (l) {
    if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
    return [`Validation request failed: ${String(l)}`];
  }
}
async function xy(a, r) {
  const s = await a.http.fetch("/api/auth/bootstrap", { signal: r });
  if (!s.ok) throw new Error(`Execution auth bootstrap failed: HTTP ${s.status}`);
  const l = await s.json();
  if (typeof l.token != "string" || !l.token)
    throw new Error("Execution auth bootstrap returned no token");
  return l.token;
}
function Ay(a) {
  const r = window.location.protocol === "https:" ? "wss:" : "ws:", s = new URL(`${r}//${window.location.host}/ws/execution`);
  return s.searchParams.set("token", a), s.toString();
}
function co(a, r) {
  let s = a;
  const l = [.../* @__PURE__ */ new Set([r, encodeURIComponent(r)])].filter((c) => c.length > 0).sort((c, d) => d.length - c.length);
  for (const c of l) s = s.split(c).join("[REDACTED]");
  return s;
}
function wS(a, r, s, l, c, d) {
  const f = a.nodes.find((m) => m.id === r), y = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(s)) {
    const v = `${r}.${m}`, b = f != null && f.type && y === 1 ? `${f.type}.${m}` : v;
    l[v] = g, c[v] = b, d[v] = "output_summary", f != null && f.type && y === 1 && (l[b] = g, c[b] = b, d[b] = "output_summary");
  }
}
function $S(a, r, s, l, c, d) {
  if (!s || typeof s != "object") return;
  const f = a.nodes.find((m) => m.id === r), y = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(s)) {
    const v = _S(g);
    if (v === void 0) continue;
    const b = `${r}.progress.${m}`, _ = f != null && f.type && y === 1 ? `${f.type}.progress.${m}` : b;
    l[b] = v, c[b] = _, d[b] = "progress", f != null && f.type && y === 1 && (l[_] = v, c[_] = _, d[_] = "progress");
  }
}
function MS(a, r, s, l = _y) {
  const c = $d(a), d = Date.now();
  return new Promise((f, y) => {
    const m = new WebSocket(Ay(r)), g = {}, v = {}, b = {};
    let _ = !1;
    const N = (V) => {
      if (_) return;
      _ = !0, clearTimeout(x), s == null || s.removeEventListener("abort", D), (m.readyState === WebSocket.OPEN || m.readyState === WebSocket.CONNECTING) && m.close();
      const M = Date.now() - d;
      g["system.runtime_ms"] = M, v["system.runtime_ms"] = "system.runtime_ms", b["system.runtime_ms"] = "client";
      const R = { metrics: g, metricIdentities: v, metricSources: b, durationMs: M };
      V ? V instanceof DOMException && V.name === "AbortError" ? y(V) : y(new Ql(V, R)) : f(R);
    }, D = () => N(new DOMException("Experiment cancelled", "AbortError")), x = setTimeout(
      () => N(new Error(`Experiment run timed out after ${Math.round(l / 1e3)}s`)),
      l
    );
    if (s == null || s.addEventListener("abort", D, { once: !0 }), s != null && s.aborted) {
      D();
      return;
    }
    m.onopen = () => {
      m.send(JSON.stringify({
        action: "execute",
        nodes: c.nodes,
        edges: c.edges,
        presets: c.presets ?? [],
        run_id: hs("gcp-experiment-run"),
        // Scalar summaries arrive on node_status regardless. Avoid retaining
        // full tensors for every candidate in CodefyUI's in-memory run store.
        record_outputs: !1,
        graph_id: hs("gcp-experiment-graph"),
        weights_persistent: !1
      }));
    }, m.onmessage = (V) => {
      let M;
      try {
        M = JSON.parse(String(V.data));
      } catch {
        return;
      }
      const R = String(M.type ?? "");
      if (R === "node_status") {
        const H = String(M.node_id ?? ""), Z = Sy(M);
        wS(c, H, Z.scalars, g, v, b), Z.progress && $S(c, H, Z.progress, g, v, b);
      } else R === "execution_complete" ? N() : (R === "execution_error" || R === "execution_stopped" || R === "error") && N(new Error(String(M.error ?? R)));
    }, m.onerror = () => N(new Error("Experiment execution WebSocket failed")), m.onclose = () => {
      _ || N(new Error("Experiment execution WebSocket closed before completion"));
    };
  }).catch((f) => {
    if (f instanceof DOMException && f.name === "AbortError") throw f;
    if (f instanceof Ql) {
      const m = new Error(co(f.message, r));
      throw m.name = f.name, new Ql(m, f.observation);
    }
    const y = f instanceof Error ? f.message : String(f);
    throw new Error(co(y, r));
  });
}
function ad(a) {
  return a.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
}
function sg(a, r, s = {}) {
  const l = Object.entries(a).filter(([, v]) => Number.isFinite(v));
  if (l.length === 0) return;
  const c = (v) => ({
    key: s[v[0]] ?? v[0],
    value: v[1],
    observedKey: v[0]
  }), d = (v) => new Set(v.map(([_]) => s[_] ?? _)).size === 1 && v.length > 0 ? c(v[0]) : void 0, f = r.metric.trim(), y = l.find(([v]) => v === f) ?? l.find(([v]) => v.toLowerCase() === f.toLowerCase());
  if (y) return c(y);
  if (f && f.toLowerCase() !== "auto") {
    const v = ad(f), b = l.filter(([_]) => {
      const N = ad(_);
      return N === v || N.endsWith(`.${v}`);
    });
    return d(b);
  }
  const m = r.direction === "maximize" ? /(^|\.)(accuracy|f1|f1_score|reward|score|r2|auc|precision|recall)$/i : /(^|\.)(val_loss|loss|error|mae|mse|rmse)$/i, g = l.filter(([v]) => m.test(v));
  return g.length > 0 ? d(g) : r.direction === "minimize" ? d(l.filter(([v]) => /(^|\.)runtime_ms$/i.test(v))) : void 0;
}
async function lg(a, r, s) {
  const l = new Array(a.length);
  let c = 0;
  const d = Array.from({ length: Math.min(r, a.length) }, async () => {
    for (; c < a.length; ) {
      const f = c++;
      l[f] = await s(a[f], f);
    }
  });
  return await Promise.all(d), l;
}
function TS(a) {
  const r = /* @__PURE__ */ new Map();
  for (const s of a)
    for (const [l, c] of Object.entries(s.metrics))
      r.has(l) || r.set(l, []), r.get(l).push(c);
  return Object.fromEntries(
    [...r.entries()].sort(([s], [l]) => s.localeCompare(l)).slice(0, 40).map(([s, l]) => [s, oo(l)])
  );
}
function OS(a) {
  const r = a.variants.filter((c) => c.operations.length === 0).length, s = a.variants.filter((c) => c.operations.length > 0);
  if (r !== 1 || s.length === 0) return;
  let l;
  for (const c of s) {
    if (c.operations.length !== 1) return;
    const d = c.operations[0];
    if (d.op !== "set_params") return;
    const f = Object.keys(d.params);
    if (f.length !== 1) return;
    const y = `${d.node_id}.${f[0]}`;
    if (l && l !== y) return;
    l = y;
  }
  return l;
}
function CS(a, r, s, l = []) {
  const c = [], d = [], f = [], y = OS(a);
  if (l.length > 1)
    c.push(
      `No unique winner: ${l.map((v) => v.label).join(", ")} tied at ${l[0].mean.toPrecision(6)}.`
    ), d.push("Automatic promotion was skipped because the top observed means were tied.");
  else if ((s == null ? void 0 : s.mean) !== void 0) {
    if (c.push(
      `${s.label} has the top observed mean at ${s.mean.toPrecision(6)} (${a.objective.direction} ${s.metricKey ?? a.objective.metric}).`
    ), s.confidenceInterval95 && c.push(
      `Its descriptive 95% Student-t interval is [${s.confidenceInterval95.lower.toPrecision(5)}, ${s.confidenceInterval95.upper.toPrecision(5)}].`
    ), s.baselineComparison) {
      const b = s.baselineComparison.hedgesG === void 0 ? "" : `; Hedges g=${s.baselineComparison.hedgesG.toPrecision(4)}`;
      c.push(
        `Versus baseline, the direction-adjusted mean change is ${s.baselineComparison.objectiveImprovement.toPrecision(5)}${b}.`
      );
    }
    const v = r.filter((b) => b.mean !== void 0).sort((b, _) => a.objective.direction === "maximize" ? _.mean - b.mean : b.mean - _.mean);
    if (v.length > 1) {
      const b = Math.abs(v[0].mean - v[1].mean);
      c.push(`The lead over the runner-up is ${b.toPrecision(4)}.`);
    }
    y ? f.push({
      title: `Controlled parameter study: ${y}`,
      evidence: `A one-factor pilot found the top observed mean for ${s.label} across ${a.repetitions ?? 1} repeated execution(s).`,
      nextStep: "Add an explicit seed schedule, report confidence intervals, and test on a held-out dataset."
    }) : f.push({
      title: `Replication study for ${a.objective.metric}`,
      evidence: `${s.label} has the top observed mean, but the variants are not proven to be a controlled one-factor ablation.`,
      nextStep: "Create a baseline and one-factor variants, add controlled seeds, then repeat on held-out data."
    });
  } else if (l.length === 0) {
    const v = r.some((b) => b.errors.some((_) => _.includes("cross-candidate ranking was refused")));
    d.push(v ? "Candidates exposed different objective metric identities, so no cross-candidate ranking was valid." : `No candidate exposed the requested numeric metric '${a.objective.metric}'.`);
  }
  (a.repetitions ?? 1) < 3 ? d.push("This is a pilot comparison, not paper-grade evidence; use at least 3-5 controlled independent seeds.") : d.push("Repetitions reused each candidate graph. Treat them as independent seeds only when the graph contains an explicit seed schedule."), r.some((v) => {
    var b;
    return v.confidenceInterval95 || ((b = v.baselineComparison) == null ? void 0 : b.hedgesG) !== void 0;
  }) && d.push(
    "Confidence intervals and Hedges g are descriptive screening statistics here; no hypothesis test, multiple-comparison correction, or causal claim was performed."
  );
  const m = r.filter((v) => v.status !== "completed");
  m.length > 0 && d.push(`${m.length} candidate(s) were invalid or failed during execution.`);
  const g = r.filter((v) => v.mean !== void 0 && v.stddev !== void 0 && Math.abs(v.mean) > 0 && v.stddev / Math.abs(v.mean) > 0.1);
  return g.length > 0 && (d.push(`High run-to-run variation detected for: ${g.map((v) => v.label).join(", ")}.`), f.push({
    title: "Sensitivity and stability analysis",
    evidence: "At least one candidate has a coefficient of variation above 10% in this pilot.",
    nextStep: "Increase repetitions and test whether initialization, data order, or hyperparameters explain the variance."
  })), { summary: c, warnings: d, paperIdeas: f };
}
function DS(a) {
  const { applyResult: r, appliedOperations: s, ...l } = a;
  return l;
}
function Ny(a) {
  if (!a || typeof a != "object") return;
  const r = a;
  if (typeof r.id != "string" || typeof r.createdAt != "string" || typeof r.hypothesis != "string" || !r.objective || typeof r.objective.metric != "string" || !["maximize", "minimize"].includes(r.objective.direction) || typeof r.repetitions != "number" || !Number.isInteger(r.repetitions) || !Array.isArray(r.variants))
    return;
  const s = r.variants.filter((c) => !!c && typeof c == "object" && typeof c.id == "string" && typeof c.label == "string" && ["completed", "invalid", "failed"].includes(c.status) && Array.isArray(c.metricValues) && c.metricValues.every((d) => typeof d == "number" && Number.isFinite(d)) && (c.metricKey === void 0 || typeof c.metricKey == "string") && (c.mean === void 0 || typeof c.mean == "number" && Number.isFinite(c.mean)) && (c.stddev === void 0 || typeof c.stddev == "number" && Number.isFinite(c.stddev)) && (c.confidenceInterval95 === void 0 || c.confidenceInterval95.level === 0.95 && typeof c.confidenceInterval95.lower == "number" && Number.isFinite(c.confidenceInterval95.lower) && typeof c.confidenceInterval95.upper == "number" && Number.isFinite(c.confidenceInterval95.upper)) && (c.baselineComparison === void 0 || typeof c.baselineComparison.baselineId == "string" && typeof c.baselineComparison.meanDelta == "number" && Number.isFinite(c.baselineComparison.meanDelta) && typeof c.baselineComparison.objectiveImprovement == "number" && Number.isFinite(c.baselineComparison.objectiveImprovement) && (c.baselineComparison.hedgesG === void 0 || typeof c.baselineComparison.hedgesG == "number" && Number.isFinite(c.baselineComparison.hedgesG))) && typeof c.runtimeMs == "number" && Number.isFinite(c.runtimeMs) && !!c.observedMetrics && typeof c.observedMetrics == "object" && Array.isArray(c.errors) && c.errors.every((d) => typeof d == "string") && (c.runs === void 0 || Array.isArray(c.runs) && c.runs.every((d) => !!d && typeof d == "object" && Number.isInteger(d.repetition) && d.repetition >= 1 && ["completed", "failed"].includes(d.status) && typeof d.durationMs == "number" && Number.isFinite(d.durationMs) && (d.metricKey === void 0 || typeof d.metricKey == "string") && (d.metricValue === void 0 || typeof d.metricValue == "number" && Number.isFinite(d.metricValue)) && (d.metricSource === void 0 || ["output_summary", "progress", "client"].includes(d.metricSource)) && !!d.observedMetrics && typeof d.observedMetrics == "object" && Object.values(d.observedMetrics).every((f) => typeof f == "number" && Number.isFinite(f)) && (d.observedMetricIdentities === void 0 || !!d.observedMetricIdentities && typeof d.observedMetricIdentities == "object" && Object.values(d.observedMetricIdentities).every((f) => typeof f == "string") && Object.keys(d.observedMetricIdentities).every((f) => f in d.observedMetrics)) && (d.observedMetricSources === void 0 || !!d.observedMetricSources && typeof d.observedMetricSources == "object" && Object.values(d.observedMetricSources).every((f) => ["output_summary", "progress", "client"].includes(f)) && Object.keys(d.observedMetricSources).every((f) => f in d.observedMetrics)) && (d.error === void 0 || typeof d.error == "string"))) && (c.operationSummary === void 0 || Array.isArray(c.operationSummary) && c.operationSummary.every((d) => typeof d == "string"))), l = r.insights && typeof r.insights == "object" ? r.insights : { summary: [], warnings: [], paperIdeas: [] };
  return {
    ...r,
    status: ["completed", "partial", "failed"].includes(r.status ?? "") ? r.status : "failed",
    repetitions: r.repetitions,
    objective: r.objective,
    variants: s,
    baselineVariantId: typeof r.baselineVariantId == "string" ? r.baselineVariantId : void 0,
    search: Md(r.search) ? r.search : void 0,
    insights: {
      summary: Array.isArray(l.summary) ? l.summary.filter((c) => typeof c == "string") : [],
      warnings: Array.isArray(l.warnings) ? l.warnings.filter((c) => typeof c == "string") : [],
      paperIdeas: Array.isArray(l.paperIdeas) ? l.paperIdeas.filter((c) => !!c && typeof c == "object" && typeof c.title == "string" && typeof c.evidence == "string" && typeof c.nextStep == "string") : []
    }
  };
}
function jy(a) {
  try {
    const r = a.storage.get(wd);
    if (!r) return [];
    const s = JSON.parse(r);
    return Array.isArray(s) ? s.map(Ny).filter((l) => !!l) : [];
  } catch {
    return [];
  }
}
function zS(a) {
  let r;
  try {
    r = a.storage.get(wd);
  } catch (c) {
    throw new Error(`Could not read the Experiment Lab archive before mutation: ${String(c)}`);
  }
  if (r === null) return [];
  let s;
  try {
    s = JSON.parse(r);
  } catch (c) {
    throw new Error(`Experiment Lab archive is malformed and remains read-only: ${String(c)}`);
  }
  if (!Array.isArray(s))
    throw new Error("Experiment Lab archive is malformed and remains read-only: expected an array");
  const l = s.map((c, d) => {
    const f = Ny(c);
    if (!f)
      throw new Error(`Experiment Lab archive entry ${d} is invalid and cannot be safely rewritten`);
    return f;
  });
  if (new Set(l.map((c) => c.id)).size !== l.length)
    throw new Error("Experiment Lab archive contains duplicate study ids and cannot be safely rewritten");
  if (r !== JSON.stringify(l))
    throw new Error("Experiment Lab archive is non-canonical or contains lossy legacy data and remains read-only");
  return l;
}
async function wy(a, r, s = {}) {
  await vy(bS, async () => {
    const l = zS(a);
    if (s.rejectIfExists && l.some((d) => d.id === r.id))
      throw new Error(
        `A local Experiment Lab report already uses study id '${r.id}'; import was refused to avoid overwriting local evidence.`
      );
    const c = [DS(r), ...l.filter((d) => d.id !== r.id)].slice(0, vS);
    a.storage.set(wd, JSON.stringify(c));
  }), typeof window < "u" && window.dispatchEvent(new Event(nd));
}
function og(a, r, s, l, c) {
  const d = po(
    {
      id: `experiment-session:${s.id}`,
      name: "run_graph_experiments",
      arguments: r
    },
    JSON.stringify(s),
    a,
    [{ graph: l, definitions: c }]
  );
  return JSON.parse(d);
}
function RS(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return "operation must be an object";
  const r = a, s = (l) => typeof r[l] == "string" && r[l] !== "";
  switch (r.op) {
    case "add_node":
      return s("node_type") ? r.ref !== void 0 && typeof r.ref != "string" ? "add_node ref must be a string" : r.params !== void 0 && (!r.params || typeof r.params != "object" || Array.isArray(r.params)) ? "add_node params must be an object" : void 0 : "add_node requires node_type";
    case "set_params":
      return s("node_id") ? !r.params || typeof r.params != "object" || Array.isArray(r.params) ? "set_params params must be an object" : void 0 : "set_params requires node_id";
    case "connect":
      return s("source") && s("source_handle") && s("target") && typeof r.target_handle == "string" ? void 0 : "connect requires string source, source_handle, target, and target_handle";
    case "remove_node":
      return s("node_id") ? void 0 : "remove_node requires node_id";
    case "remove_edge":
      return !s("source") || !s("target") ? "remove_edge requires source and target" : r.source_handle !== void 0 && typeof r.source_handle != "string" ? "remove_edge source_handle must be a string" : r.target_handle !== void 0 && typeof r.target_handle != "string" ? "remove_edge target_handle must be a string" : void 0;
    case "clear_graph":
    case "auto_layout":
      return;
    default:
      return `unknown operation '${String(r.op ?? "")}'`;
  }
}
function kl(a, r) {
  const s = new Set(r);
  return Object.keys(a).every((l) => s.has(l));
}
function Vu(a) {
  return typeof a == "boolean" || typeof a == "string" || typeof a == "number" && Number.isFinite(a);
}
function Md(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = a;
  if (!kl(r, [
    "schemaVersion",
    "strategy",
    "prngVersion",
    "plannerSeed",
    "seedDescription",
    "includesBaseline",
    "totalDomainAssignments",
    "baselineAssignmentExcluded",
    "generatedCandidateCount",
    "totalVariantCount",
    "totalExecutionCount",
    "bindings",
    "assignments"
  ]) || r.schemaVersion !== 1 || !["grid", "seeded_random"].includes(String(r.strategy)) || typeof r.seedDescription != "string" || typeof r.includesBaseline != "boolean" || typeof r.baselineAssignmentExcluded != "boolean") return !1;
  for (const c of [
    "totalDomainAssignments",
    "generatedCandidateCount",
    "totalVariantCount",
    "totalExecutionCount"
  ])
    if (!Number.isInteger(r[c]) || r[c] < 0) return !1;
  if (r.strategy === "seeded_random") {
    if (r.prngVersion !== "mulberry32-v1" || !Number.isInteger(r.plannerSeed) || r.plannerSeed < 0 || r.plannerSeed > 4294967295) return !1;
  } else if (r.prngVersion !== void 0 || r.plannerSeed !== void 0)
    return !1;
  if (!Array.isArray(r.bindings) || r.bindings.length < 1 || r.bindings.length > 4)
    return !1;
  const s = [];
  for (const c of r.bindings) {
    if (!c || typeof c != "object" || Array.isArray(c)) return !1;
    const d = c;
    if (!kl(d, [
      "nodeId",
      "nodeType",
      "param",
      "paramType",
      "baselineValue",
      "domain"
    ]) || typeof d.nodeId != "string" || typeof d.nodeType != "string" || typeof d.param != "string" || !["int", "float", "bool", "select"].includes(String(d.paramType)) || !Vu(d.baselineValue) || !Array.isArray(d.domain) || d.domain.length < 1 || d.domain.length > 32 || !d.domain.every(Vu)) return !1;
    s.push(`${d.nodeId}\0${d.param}`);
  }
  if (new Set(s).size !== s.length || !Array.isArray(r.assignments) || r.assignments.length > 8) return !1;
  const l = [];
  for (const c of r.assignments) {
    if (!c || typeof c != "object" || Array.isArray(c)) return !1;
    const d = c;
    if (!kl(d, ["variantId", "domainIndex", "values"]) || typeof d.variantId != "string" || !Number.isInteger(d.domainIndex) || d.domainIndex < 0 || !Array.isArray(d.values) || d.values.length !== r.bindings.length) return !1;
    l.push(d.variantId);
    for (const f of d.values) {
      if (!f || typeof f != "object" || Array.isArray(f)) return !1;
      const y = f;
      if (!kl(y, ["nodeId", "param", "value"]) || typeof y.nodeId != "string" || typeof y.param != "string" || !Vu(y.value)) return !1;
    }
  }
  return new Set(l).size === l.length && r.generatedCandidateCount === r.assignments.length;
}
function $y(a) {
  if (!a || typeof a != "object") throw new Error("Experiment request must be an object");
  if (typeof a.hypothesis != "string" || !a.hypothesis.trim())
    throw new Error("Experiment requires a hypothesis");
  if (!a.objective || typeof a.objective != "object" || typeof a.objective.metric != "string" || !a.objective.metric.trim())
    throw new Error("Experiment requires an objective metric");
  if (!["maximize", "minimize"].includes(a.objective.direction))
    throw new Error("Experiment objective direction must be maximize or minimize");
  if (!Array.isArray(a.variants) || a.variants.length === 0)
    throw new Error("Experiment requires at least one variant");
  if (a.variants.length > ng)
    throw new Error(`Experiment supports at most ${ng} variants`);
  const r = a.repetitions ?? 1;
  if (!Number.isInteger(r) || r < 1 || r > 5)
    throw new Error("Experiment repetitions must be an integer from 1 to 5");
  if (a.variants.length * r > lo)
    throw new Error(`Experiment budget is capped at ${lo} total runs`);
  const s = a.concurrency ?? 1;
  if (!Number.isInteger(s) || s < 1 || s > 2)
    throw new Error("Experiment concurrency must be an integer from 1 to 2");
  if (a.apply_best !== void 0 && typeof a.apply_best != "boolean")
    throw new Error("Experiment apply_best must be a boolean");
  if (a.search !== void 0 && !Md(a.search))
    throw new Error("Experiment search metadata is malformed");
  const l = a.variants.map((c, d) => {
    var f;
    if (!c || typeof c != "object") throw new Error("Every experiment variant must be an object");
    if (c.id !== void 0 && typeof c.id != "string")
      throw new Error("Experiment variant ids must be strings");
    return ((f = c.id) == null ? void 0 : f.trim()) || `variant-${d + 1}`;
  });
  if (new Set(l).size !== l.length) throw new Error("Experiment variant ids must be unique");
  for (const c of a.variants) {
    if (typeof c.label != "string" || !c.label.trim())
      throw new Error("Every experiment variant requires a label");
    if (!Array.isArray(c.operations)) throw new Error("Every experiment variant requires an operations array");
    c.operations.forEach((d, f) => {
      const y = RS(d);
      if (y) throw new Error(`Invalid operation ${f} in variant '${c.label}': ${y}`);
    });
  }
  if (a.search && (a.search.totalVariantCount !== a.variants.length || a.search.totalExecutionCount !== a.variants.length * r || a.search.assignments.some((c) => !l.includes(c.variantId))))
    throw new Error("Experiment search metadata does not match the compiled variants or run count");
  return { repetitions: r, concurrency: s };
}
function LS(a) {
  const { repetitions: r } = $y(a);
  return a.variants.length * r;
}
async function US(a, r, s, l = () => !1, c = () => {
}) {
  const { repetitions: d, concurrency: f } = $y(r), y = (/* @__PURE__ */ new Date()).toISOString(), m = ms(a.graph.getGraph()), g = ag(m), v = a.graph.getNodeDefinitions(), b = r.variants.map((K, Q) => {
    var F;
    const ue = {
      id: ((F = K.id) == null ? void 0 : F.trim()) || `variant-${Q + 1}`,
      label: K.label.trim(),
      operations: K.operations
    }, ye = rg(m, ue.operations, v);
    return {
      input: ue,
      graph: ye.graph,
      preparationErrors: ye.results.filter((le) => !le.ok).map((le) => le.error ?? "operation failed"),
      validationErrors: []
    };
  });
  await lg(b, 2, async (K) => {
    K.preparationErrors.length === 0 && (K.validationErrors = await jS(a, K.graph, s));
  });
  const _ = b.filter((K) => K.preparationErrors.length === 0 && K.validationErrors.length === 0);
  let N = "";
  _.length > 0 && (N = await xy(a, s));
  const D = [];
  for (let K = 0; K < d; K += 1) {
    const Q = K % 2 === 0 ? _ : [..._].reverse(), ue = await lg(Q, f, async (ye) => {
      try {
        return {
          variantId: ye.input.id,
          repetition: K + 1,
          observation: await MS(
            ye.graph,
            N,
            s,
            Ey(r)
          )
        };
      } catch (F) {
        if (F instanceof DOMException && F.name === "AbortError") throw F;
        return F instanceof Ql ? {
          variantId: ye.input.id,
          repetition: K + 1,
          observation: {
            ...F.observation,
            error: String(F)
          }
        } : {
          variantId: ye.input.id,
          repetition: K + 1,
          observation: {
            metrics: {},
            metricIdentities: {},
            metricSources: {},
            durationMs: 0,
            error: String(F)
          }
        };
      }
    });
    D.push(...ue);
  }
  const x = b.map((K) => {
    var P;
    const Q = D.filter((J) => J.variantId === K.input.id), ue = Q.map((J) => J.observation).filter((J) => !J.error), ye = ue.map((J) => sg(J.metrics, r.objective, J.metricIdentities)).filter((J) => !!J), F = [
      ...K.preparationErrors,
      ...K.validationErrors,
      ...Q.flatMap((J) => J.observation.error ? [J.observation.error] : [])
    ], le = new Set(ye.map((J) => J.key)), w = ue.length === d && ye.length === d && le.size === 1;
    K.preparationErrors.length === 0 && K.validationErrors.length === 0 && ue.length !== d && F.push(`Only ${ue.length}/${d} repetitions completed successfully.`), ue.length > 0 && ye.length !== ue.length && F.push(
      `Objective metric "${r.objective.metric}" was missing in ${ue.length - ye.length}/${ue.length} successful repetitions.`
    ), le.size > 1 && F.push(`Objective metric resolved to inconsistent keys across repetitions: ${[...le].join(", ")}.`);
    const Y = ye.map((J) => J.value), C = w ? gd(Y) : void 0;
    return {
      id: K.input.id,
      label: K.input.label,
      status: K.preparationErrors.length > 0 || K.validationErrors.length > 0 ? "invalid" : w ? "completed" : "failed",
      metricKey: le.size === 1 ? (P = ye[0]) == null ? void 0 : P.key : void 0,
      metricValues: Y,
      mean: w ? oo(Y) : void 0,
      stddev: w ? ES(Y) : void 0,
      confidenceInterval95: C ? {
        level: 0.95,
        lower: C.lower,
        upper: C.upper
      } : void 0,
      runtimeMs: oo(Q.map((J) => J.observation.durationMs)) ?? 0,
      observedMetrics: TS(Q.map((J) => J.observation)),
      runs: Q.map(({ repetition: J, observation: E }) => {
        const L = sg(
          E.metrics,
          r.objective,
          E.metricIdentities
        );
        return {
          repetition: J,
          status: E.error ? "failed" : "completed",
          durationMs: E.durationMs,
          metricKey: L == null ? void 0 : L.key,
          metricValue: L == null ? void 0 : L.value,
          metricSource: L ? E.metricSources[L.observedKey] : void 0,
          observedMetrics: E.metrics,
          observedMetricIdentities: E.metricIdentities,
          observedMetricSources: E.metricSources,
          ...E.error ? { error: E.error } : {}
        };
      }),
      operationSummary: NS(K.input.operations),
      errors: F
    };
  }), V = b.filter((K) => K.input.operations.length === 0);
  if (V.length === 1) {
    const K = x.find((Q) => Q.id === V[0].input.id);
    if ((K == null ? void 0 : K.status) === "completed")
      for (const Q of x) {
        if (Q.id === K.id || Q.status !== "completed") continue;
        const ue = ls(
          Q.metricValues,
          K.metricValues,
          r.objective.direction
        );
        ue && (Q.baselineComparison = {
          baselineId: K.id,
          meanDelta: ue.rawDelta,
          objectiveImprovement: ue.improvement,
          hedgesG: ue.hedgesG
        });
      }
  }
  if (new Set(
    x.filter((K) => K.status === "completed" && K.metricKey).map((K) => ad(K.metricKey))
  ).size > 1) {
    const K = x.filter((Q) => Q.status === "completed" && Q.metricKey).map((Q) => `${Q.label}: ${Q.metricKey}`).join(", ");
    for (const Q of x)
      Q.status === "completed" && (Q.status = "failed", Q.metricValues = [], Q.mean = void 0, Q.stddev = void 0, Q.confidenceInterval95 = void 0, Q.baselineComparison = void 0, Q.errors.push(`Candidates resolved different objective metrics (${K}); cross-candidate ranking was refused.`));
  }
  const R = x.filter((K) => K.status === "completed" && K.mean !== void 0).sort((K, Q) => (r.objective.direction === "maximize" ? Q.mean - K.mean : K.mean - Q.mean) || K.id.localeCompare(Q.id)), H = R[0], Z = H ? Math.max(1, Math.abs(H.mean)) * Number.EPSILON * 8 : 0, X = H ? R.filter((K) => Math.abs(K.mean - H.mean) <= Z) : [], ae = X.length === 1 ? H : void 0, B = {
    id: hs("experiment"),
    createdAt: y,
    hypothesis: r.hypothesis.trim(),
    objective: r.objective,
    repetitions: d,
    status: R.length === 0 ? "failed" : x.every((K) => K.status === "completed") ? "completed" : "partial",
    variants: x,
    baselineVariantId: V.length === 1 ? V[0].input.id : void 0,
    search: r.search ? ms(r.search) : void 0,
    winnerId: ae == null ? void 0 : ae.id,
    winnerLabel: ae == null ? void 0 : ae.label,
    insights: CS({ ...r, repetitions: d }, x, ae, X)
  };
  if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  if (r.apply_best && ae) {
    const K = b.find((ye) => ye.input.id === ae.id).input, Q = l(), ue = ag(a.graph.getGraph()) !== g;
    if (c(), Q || ue)
      B.applyConflict = "The live graph changed while experiments were running; winner was not applied.";
    else if (K.operations.some((ye) => ye.op !== "set_params"))
      B.applyConflict = "Automatic promotion supports parameter-only winners; this structural winner remains a proposal for review.";
    else if (K.operations.length > 0) {
      if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
      const ye = rg(m, K.operations, v);
      if (ye.results.some((F) => !F.ok))
        B.applyConflict = `Winner promotion failed parameter preflight: ${ye.results.filter((F) => !F.ok).map((F) => F.error).join("; ")}`;
      else {
        try {
          B.applyResult = a.graph.applyOperations(K.operations), B.appliedOperations = K.operations, B.applyResult.results.every((F) => F.ok) ? B.appliedVariantId = ae.id : B.applyConflict = "Winner promotion was only partially applied; the canvas may contain a partial parameter update. Inspect operation errors.";
        } catch (F) {
          B.applyConflict = `Winner promotion threw unexpectedly; the canvas may contain a partial parameter update: ${String(F)}`;
        }
        B.applyConflict && a.ui.toast(B.applyConflict, "error");
      }
    } else
      B.appliedVariantId = ae.id;
  }
  if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  const ce = (/* @__PURE__ */ new Date()).toISOString();
  try {
    const K = await tS({
      session: B,
      request: r,
      baseline: m,
      definitions: v,
      pluginId: a.pluginId || X0,
      pluginVersion: Y0,
      codefyuiApiVersion: a.apiVersion,
      completedAt: ce,
      provenanceFacts: [
        {
          key: "codefyui.api_version",
          status: "observed",
          source: "CodefyUIPluginAPI",
          collectedAt: ce,
          value: a.apiVersion
        },
        {
          key: "experiment.coordinator",
          status: "observed",
          source: "Graph Copilot browser runtime",
          collectedAt: ce,
          value: "browser-local"
        },
        {
          key: "experiment.runner_seed_schedule",
          status: "unavailable",
          source: "Graph Copilot does not assign graph-node RNG seeds"
        }
      ]
    }), Q = await by(a, K);
    if (Q.cleanupFailures.length > 0) {
      const ue = `Portable study was saved, but ${Q.cleanupFailures.length} unreferenced old blob(s) could not be cleaned up.`;
      B.insights.warnings.push(ue);
      try {
        a.ui.toast(ue, "warning");
      } catch {
      }
    }
  } catch (K) {
    const Q = `Experiment completed, but its portable study bundle could not be captured or saved: ${SS(K)}`;
    B.insights.warnings.push(Q);
    try {
      a.ui.toast(Q, "warning");
    } catch {
    }
  }
  let re = og(a, r, B, m, v);
  try {
    await wy(a, re);
  } catch (K) {
    const Q = `Experiment completed, but its local history could not be saved: ${String(K)}`;
    B.insights.warnings.push(Q);
    try {
      a.ui.toast(Q, "warning");
    } catch {
    }
    re = og(a, r, B, m, v);
  }
  return re;
}
async function VS(a, r, s) {
  let l = !1, c, d = !0;
  const f = () => {
    d && (d = !1, c == null || c());
  };
  try {
    c = a.graph.onGraphChanged(() => {
      d && (l = !0);
    });
  } catch {
    l = !0;
  }
  try {
    return await US(
      a,
      r,
      s,
      () => l,
      f
    );
  } finally {
    f();
  }
}
const id = 1, BS = "mulberry32-v1", cg = 4, ug = 32, Bu = 8, dg = 16, HS = /* @__PURE__ */ new Set([
  "version",
  "strategy",
  "hypothesis",
  "objective",
  "bindings",
  "candidate_count",
  "seed",
  "include_baseline",
  "repetitions",
  "concurrency",
  "timeout_minutes",
  "apply_best"
]), GS = /* @__PURE__ */ new Set(["metric", "direction"]), qS = /* @__PURE__ */ new Set(["node_id", "param", "values"]), kS = /* @__PURE__ */ new Set(["int", "float", "bool", "select"]), IS = "Planner-only seed: it deterministically selects parameter assignments and does not seed graph nodes or make graph executions reproducible.";
function rd(a, r) {
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new Error(`${r} must be an object`);
  return a;
}
function sd(a, r, s) {
  const l = Object.keys(a).filter((c) => !r.has(c));
  if (l.length > 0)
    throw new Error(`${s} contains unknown field(s): ${l.join(", ")}`);
}
function uo(a, r) {
  if (typeof a != "string" || !a.trim())
    throw new Error(`${r} must be a non-empty string`);
  return a.trim();
}
function fg(a, r, s) {
  if (a === void 0) return r;
  if (typeof a != "boolean") throw new Error(`${s} must be a boolean`);
  return a;
}
function Jl(a, r, s, l, c) {
  const d = a === void 0 ? r : a;
  if (!Number.isInteger(d) || d < s || d > l)
    throw new Error(`${c} must be an integer from ${s} to ${l}`);
  return d;
}
function gs(a) {
  return typeof a == "number" ? `number:${Object.is(a, -0) ? "0" : String(a)}` : `${typeof a}:${JSON.stringify(a)}`;
}
function pg(a, r, s) {
  switch (a.param_type) {
    case "int":
      if (typeof r != "number" || !Number.isFinite(r) || !Number.isInteger(r))
        throw new Error(`${s} must be a finite integer`);
      break;
    case "float":
      if (typeof r != "number" || !Number.isFinite(r))
        throw new Error(`${s} must be a finite number`);
      break;
    case "bool":
      if (typeof r != "boolean") throw new Error(`${s} must be a boolean`);
      break;
    case "select":
      if (typeof r != "string") throw new Error(`${s} must be a string select option`);
      if (!Array.isArray(a.options) || !a.options.includes(r))
        throw new Error(`${s} must be one of: ${(a.options ?? []).join(", ")}`);
      break;
    default:
      throw new Error(`${s} uses unsupported parameter type '${String(a.param_type)}'`);
  }
  if (typeof r == "number") {
    if (typeof a.min_value == "number" && r < a.min_value)
      throw new Error(`${s} must be >= ${a.min_value}`);
    if (typeof a.max_value == "number" && r > a.max_value)
      throw new Error(`${s} must be <= ${a.max_value}`);
  }
  return r;
}
function KS(a, r, s) {
  const l = a.nodes.filter((d) => d.id === r);
  if (l.length === 0) throw new Error(`${s} references missing node '${r}'`);
  if (l.length > 1) throw new Error(`${s} references ambiguous duplicate node id '${r}'`);
  const c = l[0];
  if (!c.type || c.type === "note")
    throw new Error(`${s} node '${r}' has no optimizable node type`);
  return c;
}
function XS(a, r, s) {
  const l = a.filter((c) => c.node_name === r);
  if (l.length === 0) throw new Error(`${s} has no definition for node type '${r}'`);
  if (l.length > 1) throw new Error(`${s} found duplicate definitions for node type '${r}'`);
  return l[0];
}
function YS(a, r, s, l) {
  var R;
  const c = `optimizer.bindings[${r}]`, d = rd(a, c);
  sd(d, qS, c);
  const f = uo(d.node_id, `${c}.node_id`), y = uo(d.param, `${c}.param`), m = KS(s, f, c), g = XS(l, m.type, c), v = g.params.filter((H) => H.name === y);
  if (v.length === 0)
    throw new Error(`${c} references unknown parameter '${y}' on '${m.type}'`);
  if (v.length > 1)
    throw new Error(`${c} references ambiguous duplicate parameter '${y}' on '${m.type}'`);
  const b = v[0];
  if (!kS.has(b.param_type))
    throw new Error(
      `${c} parameter '${f}.${y}' has unsupported type '${String(b.param_type)}'; only int, float, bool, and select are allowed`
    );
  if (La(y))
    throw new Error(
      `${c} parameter '${f}.${y}' has a credential-shaped name and cannot be optimized; this is refused even when the node schema declares an otherwise supported parameter type`
    );
  if (!Array.isArray(d.values) || d.values.length === 0)
    throw new Error(`${c}.values must be a non-empty explicit domain`);
  if (d.values.length > ug)
    throw new Error(`${c}.values supports at most ${ug} values`);
  const _ = d.values.map((H, Z) => pg(b, H, `${c}.values[${Z}]`)), N = _.map(gs);
  if (new Set(N).size !== N.length)
    throw new Error(`${c}.values must contain unique scalar values`);
  const D = (R = m.data) == null ? void 0 : R.params, V = !!D && Object.prototype.hasOwnProperty.call(D, y) ? D[y] : b.default, M = pg(b, V, `${c} baseline value`);
  return {
    node: m,
    definition: g,
    parameter: b,
    nodeId: f,
    paramName: y,
    baselineValue: M,
    domain: _
  };
}
function QS(a, r) {
  const s = new Array(a.length);
  let l = r;
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c].domain;
    s[c] = d[l % d.length], l = Math.floor(l / d.length);
  }
  return s;
}
function JS(a) {
  let r = 0;
  for (const s of a) {
    const l = gs(s.baselineValue), c = s.domain.findIndex((d) => gs(d) === l);
    if (c < 0) return;
    r = r * s.domain.length + c;
  }
  return r;
}
function ZS(a) {
  let r = a >>> 0;
  return () => {
    r = r + 1831565813 >>> 0;
    let s = r;
    return s = Math.imul(s ^ s >>> 15, s | 1) >>> 0, s ^= s + Math.imul(s ^ s >>> 7, s | 61), (s ^ s >>> 14) >>> 0;
  };
}
function FS(a, r, s) {
  const l = ZS(s), c = /* @__PURE__ */ new Map(), d = [];
  for (let f = 0; f < r; f += 1) {
    const y = a - f, m = l() % y, g = c.get(m) ?? m, v = y - 1, b = c.get(v) ?? v;
    m !== v ? c.set(m, b) : c.delete(m), c.delete(v), d.push(g);
  }
  return d;
}
function WS(a, r) {
  const s = [], l = /* @__PURE__ */ new Map();
  return a.forEach((c, d) => {
    l.has(c.nodeId) || (l.set(c.nodeId, []), s.push(c.nodeId)), l.get(c.nodeId).push([c.paramName, r[d]]);
  }), s.map((c) => ({
    op: "set_params",
    node_id: c,
    params: Object.fromEntries(l.get(c))
  }));
}
function PS(a, r) {
  return r.every((s, l) => gs(s) === gs(a[l].baselineValue));
}
function e_(a) {
  const r = rd(a, "optimizer");
  if (sd(r, HS, "optimizer"), r.version !== void 0 && r.version !== id)
    throw new Error(`optimizer.version must be ${id}`);
  if (r.strategy !== "grid" && r.strategy !== "seeded_random")
    throw new Error("optimizer.strategy must be grid or seeded_random");
  const s = uo(r.hypothesis, "optimizer.hypothesis"), l = rd(r.objective, "optimizer.objective");
  sd(l, GS, "optimizer.objective");
  const c = uo(l.metric, "optimizer.objective.metric");
  if (l.direction !== "maximize" && l.direction !== "minimize")
    throw new Error("optimizer.objective.direction must be maximize or minimize");
  return {
    raw: r,
    strategy: r.strategy,
    hypothesis: s,
    objective: { metric: c, direction: l.direction },
    repetitions: Jl(r.repetitions, 1, 1, 5, "optimizer.repetitions"),
    concurrency: Jl(r.concurrency, 1, 1, 2, "optimizer.concurrency"),
    timeoutMinutes: r.timeout_minutes === void 0 ? void 0 : Jl(r.timeout_minutes, 10, 1, 60, "optimizer.timeout_minutes"),
    includeBaseline: fg(r.include_baseline, !0, "optimizer.include_baseline"),
    applyBest: fg(r.apply_best, !1, "optimizer.apply_best")
  };
}
function t_(a, r, s) {
  const l = e_(a);
  if (!Array.isArray(l.raw.bindings) || l.raw.bindings.length < 1 || l.raw.bindings.length > cg)
    throw new Error(`optimizer.bindings must contain 1 to ${cg} bindings`);
  if (!r || !Array.isArray(r.nodes) || !Array.isArray(r.edges))
    throw new Error("current graph must contain nodes and edges arrays");
  if (!Array.isArray(s)) throw new Error("node definitions must be an array");
  const c = l.raw.bindings.map((X, ae) => YS(X, ae, r, s)), d = c.map((X) => `${X.nodeId}\0${X.paramName}`);
  if (new Set(d).size !== d.length)
    throw new Error("optimizer.bindings must not repeat the same node parameter");
  const f = c.reduce((X, ae) => X * ae.domain.length, 1), y = JS(c), m = Bu - (l.includeBaseline ? 1 : 0);
  let g, v;
  const b = f - (y === void 0 ? 0 : 1);
  if (l.strategy === "grid") {
    if (l.raw.candidate_count !== void 0)
      throw new Error("optimizer.candidate_count is only allowed for seeded_random");
    if (l.raw.seed !== void 0)
      throw new Error("optimizer.seed is only allowed for seeded_random");
    if (b > m)
      throw new Error(
        `Grid Cartesian product has ${b} changed assignments but only ${m} candidate slots are available; narrow the domains instead of truncating the grid`
      );
    g = Array.from({ length: f }, (X, ae) => ae).filter((X) => X !== y);
  } else {
    const X = Jl(
      l.raw.candidate_count,
      Number.NaN,
      1,
      m,
      "optimizer.candidate_count"
    );
    if (!Number.isInteger(l.raw.seed) || l.raw.seed < 0 || l.raw.seed > 4294967295)
      throw new Error("optimizer.seed is required for seeded_random and must be a uint32 integer");
    if (v = l.raw.seed, X > b)
      throw new Error(
        `seeded_random requested ${X} unique changed assignments, but only ${b} are available`
      );
    g = FS(b, X, v).map((B) => y !== void 0 && B >= y ? B + 1 : B);
  }
  const _ = g.map((X) => ({
    domainIndex: X,
    assignment: QS(c, X)
  })).filter(({ assignment: X }) => !PS(c, X));
  if (_.length === 0)
    throw new Error("optimizer search space contains no assignment different from the current graph baseline");
  const N = l.includeBaseline ? [{ id: "baseline", label: "Baseline", operations: [] }] : [], D = l.strategy === "grid" ? "grid" : "random", x = _.map(({ assignment: X }, ae) => ({
    id: `optimizer-${D}-${String(ae + 1).padStart(3, "0")}`,
    label: `${l.strategy === "grid" ? "Grid" : "Random"} ${ae + 1}: ${c.map((B, ce) => `${B.nodeId}.${B.paramName}=${JSON.stringify(X[ce])}`).join(", ")}`,
    operations: WS(c, X)
  })), V = [...N, ...x];
  if (V.length > Bu)
    throw new Error(`optimizer compiled ${V.length} variants; maximum is ${Bu}`);
  const M = V.length * l.repetitions;
  if (M > dg)
    throw new Error(
      `optimizer compiled ${V.length} variants x ${l.repetitions} repetitions = ${M} executions; maximum is ${dg}`
    );
  const R = _.map(
    ({ domainIndex: X, assignment: ae }, B) => ({
      variantId: x[B].id,
      domainIndex: X,
      values: c.map((ce, re) => ({
        nodeId: ce.nodeId,
        param: ce.paramName,
        value: ae[re]
      }))
    })
  ), H = {
    schemaVersion: id,
    strategy: l.strategy,
    prngVersion: l.strategy === "seeded_random" ? BS : void 0,
    plannerSeed: v,
    seedDescription: IS,
    includesBaseline: l.includeBaseline,
    totalDomainAssignments: f,
    baselineAssignmentExcluded: y !== void 0,
    generatedCandidateCount: x.length,
    totalVariantCount: V.length,
    totalExecutionCount: M,
    bindings: c.map((X) => ({
      nodeId: X.nodeId,
      nodeType: X.node.type,
      param: X.paramName,
      paramType: X.parameter.param_type,
      baselineValue: X.baselineValue,
      domain: [...X.domain]
    })),
    assignments: R
  };
  return {
    request: {
      hypothesis: l.hypothesis,
      objective: l.objective,
      variants: V,
      repetitions: l.repetitions,
      concurrency: l.concurrency,
      ...l.timeoutMinutes !== void 0 ? { timeout_minutes: l.timeoutMinutes } : {},
      apply_best: l.applyBest,
      search: H
    },
    metadata: H
  };
}
const n_ = 360, a_ = 720, i_ = 5e3, mg = 60, r_ = 8;
async function My(a, r) {
  try {
    const s = await a.http.fetch("/api/system/devices", { signal: r });
    if (!s.ok) return;
    const l = await s.json();
    return typeof l.default == "string" && l.default ? l.default : void 0;
  } catch {
    return;
  }
}
function s_(a) {
  if (a.phase === "connecting") return "Starting graph run…";
  if (a.phase === "cancelling") return "Cancelling run…";
  const r = [
    `Running graph ${a.completedNodes}/${a.totalNodes}`
  ];
  a.nodeType && r.push(a.nodeType);
  const s = a.progress ?? {}, l = [], c = (d) => Number.isInteger(d) ? String(d) : d.toFixed(4);
  for (const d of ["epoch", "step", "loss", "val_loss"]) {
    const f = s[d];
    typeof f == "number" && Number.isFinite(f) && l.push(`${d} ${c(f)}`);
  }
  if (l.length === 0)
    for (const [d, f] of Object.entries(s)) {
      if (l.length >= 2) break;
      d !== "event" && typeof f == "number" && Number.isFinite(f) && l.push(`${d} ${c(f)}`);
    }
  return r.push(...l), r.join(" · ");
}
function l_(a) {
  const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  for (const l of a.nodes) {
    const c = typeof l.type == "string" ? l.type : "";
    c && (r.set(l.id, c), s.set(c, (s.get(c) ?? 0) + 1));
  }
  return (l) => {
    const c = r.get(l);
    return c && s.get(c) === 1 ? c : l;
  };
}
function Hu(a) {
  const r = Object.keys(a);
  if (r.length <= mg) return a;
  const s = {};
  for (const l of r.slice(0, mg)) s[l] = a[l];
  return s;
}
const o_ = /* @__PURE__ */ new Set([
  "completed",
  "cached",
  "error",
  "interrupted"
]);
async function c_(a, r) {
  const { signal: s, timeoutMs: l, onProgress: c } = r, d = r.device ?? await My(a, s), f = await xy(a, s), y = $d(a.graph.getGraph()), m = l_(y), g = y.nodes.length, v = Date.now();
  return new Promise((b) => {
    const _ = new WebSocket(Ay(f)), N = {}, D = {}, x = {}, V = {}, M = /* @__PURE__ */ new Set(), R = [], H = [];
    let Z, X = !1, ae = !1, B, ce = !1;
    const re = (F, le) => {
      if (X) return;
      X = !0, window.clearTimeout(ye), B !== void 0 && window.clearTimeout(B), s == null || s.removeEventListener("abort", ue), (_.readyState === WebSocket.OPEN || _.readyState === WebSocket.CONNECTING) && _.close();
      const w = R.join(`
`).slice(-1500);
      b({
        status: F,
        durationMs: Date.now() - v,
        runId: Z,
        ...le ? { error: co(le, f) } : {},
        nodeErrors: V,
        completedNodes: M.size,
        totalNodes: g,
        outputs: Hu(N),
        finalProgress: Hu(D),
        metrics: Hu(x),
        textTail: w,
        media: H
      });
    }, K = (F) => {
      if (!X && !ae) {
        if (ae = !0, !ce) {
          Q = F, re(F);
          return;
        }
        c == null || c({
          phase: "cancelling",
          elapsedMs: Date.now() - v,
          completedNodes: M.size,
          totalNodes: g
        });
        try {
          _.readyState === WebSocket.OPEN && _.send(JSON.stringify(
            Z ? { action: "cancel", run_id: Z } : { action: "cancel" }
          ));
        } catch {
        }
        B = window.setTimeout(
          () => re(F, F === "timeout" ? `Run timed out after ${Math.round(l / 6e4)} minutes and was cancelled.` : void 0),
          i_
        ), Q = F;
      }
    };
    let Q = "cancelled";
    const ue = () => K("cancelled"), ye = window.setTimeout(() => K("timeout"), l);
    if (s == null || s.addEventListener("abort", ue, { once: !0 }), s != null && s.aborted) {
      re("cancelled");
      return;
    }
    c == null || c({
      phase: "connecting",
      elapsedMs: 0,
      completedNodes: 0,
      totalNodes: g
    }), _.onopen = () => {
      X || ae || (_.send(JSON.stringify({
        action: "execute",
        nodes: y.nodes,
        edges: y.edges,
        presets: y.presets ?? [],
        record_outputs: !1,
        weights_persistent: !0,
        ...d ? { device: d } : {}
      })), ce = !0);
    }, _.onmessage = (F) => {
      let le;
      try {
        le = JSON.parse(String(F.data));
      } catch {
        return;
      }
      const w = String(le.type ?? "");
      if (typeof le.run_id == "string" && le.run_id && (Z = le.run_id), le.rejected === !0) {
        re("error", String(le.error ?? "The host rejected the run request."));
        return;
      }
      if (w === "node_status") {
        const Y = String(le.node_id ?? ""), C = String(le.status ?? ""), P = m(Y), J = Sy(le);
        o_.has(C) && M.add(Y), C === "error" && (V[P] = co(
          String(le.error ?? "node failed"),
          f
        ));
        for (const [E, L] of Object.entries(J.scalars))
          N[`${P}.${E}`] = L;
        for (const [E, L] of Object.entries(J.strings))
          N[`${P}.${E}`] = L;
        for (const [E, L] of Object.entries(J.modelParams))
          N[`${P}.${E}.params`] = L;
        for (const E of J.texts) R.push(E);
        for (const E of J.media) {
          if (H.length >= r_) break;
          H.push({ node: P, ...E });
        }
        if (J.progress)
          for (const [E, L] of Object.entries(J.progress)) {
            const W = ps(L);
            W !== void 0 ? D[`${P}.${E}`] = W : typeof L == "string" && L.length <= 80 && (D[`${P}.${E}`] = L);
          }
        c == null || c({
          phase: "running",
          nodeType: P,
          nodeStatus: C,
          ...J.progress ? { progress: J.progress } : {},
          elapsedMs: Date.now() - v,
          completedNodes: M.size,
          totalNodes: g
        });
      } else if (w === "metric") {
        const Y = Array.isArray(le.points) ? le.points : [];
        for (const C of Y) {
          if (!C || typeof C != "object") continue;
          const P = C, J = typeof P.name == "string" ? P.name : "", E = ps(P.value);
          J && E !== void 0 && (x[J] = E);
        }
      } else w === "execution_complete" ? re("complete") : w === "execution_stopped" ? re(Q, ae ? void 0 : `Run stopped by the host (${String(le.reason ?? "stopped")}).`) : (w === "execution_error" || w === "error") && re("error", String(le.error ?? w));
    }, _.onerror = () => re("error", "Execution WebSocket failed."), _.onclose = () => {
      X || re(
        ae ? Q : "error",
        ae ? void 0 : "Execution WebSocket closed before the run completed."
      );
    };
  });
}
const hg = 16, gg = 2, u_ = [
  {
    name: "apply_graph_operations",
    description: `Apply a batch of graph edits to the canvas as ONE undo step. Failing operations are skipped and reported per-index (with an error message) so you can self-correct and retry.
Each entry in "operations" is one GraphOp object; use these EXACT field names:
- {"op":"add_node","node_type":"<exact catalog name>","ref":"<alias>","params":{...},"position":{"x":<num>,"y":<num>}} — ref/params/position optional. "ref" is a temporary alias usable as source/target/node_id ONLY within this SAME batch. In a LATER apply_graph_operations call refs are gone — use the real node id from the previous result (the "refs" map or each op's "node_id"), or call get_current_graph.
- {"op":"connect","source":"<node id or ref>","source_handle":"<output port name>","target":"<node id or ref>","target_handle":"<input port name>"} — handle names are the port names from the catalog out[...] / in[...]. For control-flow trigger edges use source_handle "trigger".
- {"op":"set_params","node_id":"<node id or ref>","params":{...}}
- {"op":"remove_node","node_id":"<node id or ref>"}
- {"op":"remove_edge","source":"<node id or ref>","target":"<node id or ref>","source_handle":"<optional>","target_handle":"<optional>"}
- {"op":"clear_graph"} — wipes the whole graph; only when the user asks to start over.
- {"op":"auto_layout"} — auto-positions all nodes; run once after a structural batch.`,
    input_schema: {
      type: "object",
      properties: {
        operations: {
          type: "array",
          items: { type: "object" }
          // GraphOp union documented in the tool description above
        }
      },
      required: ["operations"]
    }
  },
  {
    name: "get_current_graph",
    description: "Read the current serialized graph (the user may have edited it manually).",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "get_node_schemas",
    description: 'Get the exact input/output ports and params for specific node types. Call this before adding/connecting those nodes so you use correct port and param names (the catalog index lists names only). Returns one detail line per node: "Name: in[port:TYPE, ...] out[...] params[name:type=default{range}, ...] [category: X]".',
    input_schema: {
      type: "object",
      properties: {
        node_types: { type: "array", items: { type: "string" } }
      },
      required: ["node_types"]
    }
  },
  {
    name: "validate_graph",
    description: 'Validate the current graph on the server: checks for unknown node types, MISSING REQUIRED INPUT connections, and out-of-range params. Returns {"valid": boolean, "errors": string[]}. Call this after building and fix every error until valid is true — this is what makes the graph actually runnable.',
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "run_graph",
    description: `Execute the CURRENT canvas graph on the CodefyUI backend — the user's real run, with real side effects (file writes, network calls, GPU time). A user-facing confirmation is required before it starts. Call this AFTER validate_graph reports "valid": true, when the user asked to run, train, or evaluate their graph. Node statuses and live training progress (loss, epochs) stream to the panel while it runs; long training runs are expected and fine — do not cancel or restart one without being asked. Returns the final status, per-node scalar/string outputs, last progress values, metric tails, any node errors, and a "media" list when the run produced renderable artifacts (VideoWrite clips, image previews) — each entry is a reference {node, port, kind, format, url?, frames?, bytes?}; the clip itself plays inline in the panel, and you should mention it and its url in your report. Use run_graph for "run it / train it"; use run_graph_experiments only for comparing variants.`,
    input_schema: {
      type: "object",
      properties: {
        reason: {
          type: "string",
          description: "One short sentence shown in the user confirmation: what this run does and why."
        },
        timeout_minutes: {
          type: "integer",
          minimum: 1,
          maximum: 720,
          description: "Optional wall-clock cap in minutes (default 360). Pick generously for training runs."
        },
        device: {
          type: "string",
          enum: ["cpu", "cuda", "mps"],
          description: `Optional run-level compute device (what device="auto" nodes follow). Defaults to the host's preferred device — set this only when the user asked for a specific one.`
        }
      },
      required: ["reason"]
    }
  },
  {
    name: "research",
    description: 'For COMPLEX graphs only: research several independent sub-tasks IN PARALLEL using focused lightweight sub-agents (each sees just the node index, not this whole conversation, so it stays token-cheap). Returns a concise answer per question. Example: ["which nodes build the data pipeline for MNIST?", "which nodes build a CNN classifier?", "which nodes form the training loop?"]. Use the answers to plan, then build with apply_graph_operations.',
    input_schema: {
      type: "object",
      properties: {
        questions: { type: "array", items: { type: "string" } }
      },
      required: ["questions"]
    }
  },
  {
    name: "run_graph_experiments",
    description: 'Run a bounded experiment study on canvas-isolated clones of the current graph, then rank candidates by a numeric backend metric. A user-facing confirmation is required before execution because graph nodes retain their normal side effects (for example file writes, network calls, or paid API usage). Candidate edits never touch the live canvas while running. Each variant has a label and a GraphOp operations array using the same exact fields as apply_graph_operations. Include an empty-operations baseline when useful. The metric can be an exact "node-id.port", a unique suffix such as "accuracy", a unique "NodeType.port", or "auto". direction is "maximize" or "minimize". Use repetitions >=3 for variance estimates (max 16 executions across the entire agent turn); concurrency defaults to 1 and is capped at 2 to protect GPU memory. Set apply_best=true only when the user asked to optimize/apply the winner; automatic promotion is parameter-only and is refused if they changed the live graph mid-study. Structural winners remain review-only summaries. The result includes rankings, observed metrics, warnings, and evidence-grounded paper follow-ups.',
    input_schema: {
      type: "object",
      properties: {
        hypothesis: { type: "string" },
        objective: {
          type: "object",
          properties: {
            metric: { type: "string" },
            direction: { type: "string", enum: ["maximize", "minimize"] }
          },
          required: ["metric", "direction"]
        },
        variants: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              label: { type: "string" },
              operations: { type: "array", items: { type: "object" } }
            },
            required: ["label", "operations"]
          }
        },
        repetitions: { type: "integer", minimum: 1, maximum: 5 },
        concurrency: { type: "integer", minimum: 1, maximum: 2 },
        timeout_minutes: {
          type: "integer",
          minimum: 1,
          maximum: 60,
          description: "Per-run wall-clock cap in minutes (default 10). Raise for training-process studies whose single runs are longer, e.g. small-LM ablations."
        },
        apply_best: { type: "boolean" }
      },
      required: ["hypothesis", "objective", "variants"]
    }
  },
  {
    name: "optimize_graph_parameters",
    description: 'Compile and run a transparent, bounded parameter search on the current graph. Use this instead of manually inventing variants when the user asks to optimize existing numeric, boolean, or select parameters. Only existing-node int/float/bool/select parameters are accepted; secret, string, file, tensor, preset, and unknown parameters are refused. "grid" evaluates the complete Cartesian product and refuses to truncate it. "seeded_random" requires candidate_count and a uint32 seed; that seed makes candidate PLANNING repeatable but does NOT seed graph-node execution. Values must be explicit schema-valid domains. The compiler creates only set_params variants, optionally includes the current graph as baseline, and delegates to the same confirmation, 16-execution turn budget, isolated runner, and guarded promotion path as run_graph_experiments.',
    input_schema: {
      type: "object",
      properties: {
        version: { type: "integer", enum: [1] },
        strategy: { type: "string", enum: ["grid", "seeded_random"] },
        hypothesis: { type: "string" },
        objective: {
          type: "object",
          properties: {
            metric: { type: "string" },
            direction: { type: "string", enum: ["maximize", "minimize"] }
          },
          required: ["metric", "direction"]
        },
        bindings: {
          type: "array",
          minItems: 1,
          maxItems: 4,
          items: {
            type: "object",
            properties: {
              node_id: { type: "string" },
              param: { type: "string" },
              values: { type: "array", minItems: 1, maxItems: 32, items: {} }
            },
            required: ["node_id", "param", "values"]
          }
        },
        candidate_count: { type: "integer", minimum: 1, maximum: 8 },
        seed: { type: "integer", minimum: 0, maximum: 4294967295 },
        include_baseline: { type: "boolean" },
        repetitions: { type: "integer", minimum: 1, maximum: 5 },
        concurrency: { type: "integer", minimum: 1, maximum: 2 },
        timeout_minutes: {
          type: "integer",
          minimum: 1,
          maximum: 60,
          description: "Per-run wall-clock cap in minutes (default 10). Raise for parameter searches over real training runs."
        },
        apply_best: { type: "boolean" }
      },
      required: ["strategy", "hypothesis", "objective", "bindings"]
    }
  }
];
function fo(a) {
  const r = a.graph.getGraph();
  return JSON.stringify({ nodes: r.nodes, edges: r.edges, presets: r.presets ?? [] });
}
function yg(a) {
  const r = a.graph.getGraph(), s = r.nodes.filter((c) => c.type !== "note").map((c) => {
    var d;
    return {
      id: c.id,
      type: c.type ?? "",
      params: ((d = c.data) == null ? void 0 : d.params) ?? {}
    };
  }).sort((c, d) => c.id.localeCompare(d.id)), l = r.edges.map((c) => ({
    source: c.source ?? "",
    sourceHandle: c.sourceHandle ?? "",
    target: c.target ?? "",
    targetHandle: c.targetHandle ?? "",
    type: c.type ?? ""
  })).sort((c, d) => JSON.stringify(c).localeCompare(JSON.stringify(d)));
  return JSON.stringify({ nodes: s, edges: l, presets: r.presets ?? [] });
}
function d_(a) {
  if (typeof a == "string") return JSON.stringify(a);
  const r = JSON.stringify(a);
  return r === void 0 ? String(a) : r.length > 180 ? `${r.slice(0, 177)}...` : r;
}
function vg(a) {
  if (!a) return "";
  const r = Object.entries(a).map(([s, l]) => `${s}=${d_(l)}`);
  return r.length > 0 ? r.join(", ") : "no parameters";
}
function f_(a) {
  switch (a.op) {
    case "add_node": {
      const r = vg(a.params);
      return `add ${a.node_type}${r ? ` with ${r}` : ""}`;
    }
    case "set_params":
      return `set ${a.node_id}: ${vg(a.params)}`;
    case "connect":
      return `connect ${a.source}.${a.source_handle} -> ${a.target}.${a.target_handle}`;
    case "remove_node":
      return `remove node ${a.node_id}`;
    case "remove_edge":
      return `remove edge ${a.source} -> ${a.target}`;
    case "clear_graph":
      return "clear graph";
    case "auto_layout":
      return "auto layout";
  }
}
function Gu(a, r) {
  const s = a.role === "user" && a.attachments && a.attachments.length > 0 ? kg(a.content, a.attachments, r) : a.content, l = { role: a.role, content: s };
  return a.tool_calls && (l.tool_calls = a.tool_calls), a.tool_call_id && (l.tool_call_id = a.tool_call_id), l;
}
function bg(a, r) {
  const s = /* @__PURE__ */ new Map();
  a.forEach((c, d) => {
    const f = c.op, y = r[d], m = y ? y.ok : !1;
    s.has(f) || s.set(f, { ok: 0, fail: 0 });
    const g = s.get(f);
    m ? g.ok++ : g.fail++;
  });
  const l = [];
  for (const [c, d] of s) {
    const f = d.ok + d.fail;
    d.fail === 0 ? l.push(`${c} x${f} ok`) : d.ok === 0 ? l.push(`${c} x${f} FAILED`) : l.push(`${c} x${f} (${d.ok} ok, ${d.fail} FAILED)`);
  }
  return l.join(", ");
}
function p_(a, r, s, l, c) {
  const f = { role: "system", content: K0(
    a.graph.getNodeDefinitions(),
    a.graph.getGraph()
  ) }, y = r.slice(-20), m = r.flatMap((_) => _.tool_calls ?? []), g = new Map(m.map((_) => [_.id, _])), v = y.map((_) => {
    if (_.role === "user") return Gu(_, c);
    if (_.role === "tool") {
      const N = _.tool_call_id ? g.get(_.tool_call_id) : void 0, D = po(
        N ?? { id: _.tool_call_id ?? "legacy", name: "legacy_tool", arguments: {} },
        _.content,
        a
      );
      return Gu({ ..._, content: D }, c);
    }
    return Gu({
      ..._,
      content: Fu(_.content, m, a),
      ..._.tool_calls ? { tool_calls: Qg(_.tool_calls, a) } : {}
    }, c);
  }), b = {
    role: "user",
    content: kg(s, l, c)
  };
  return [f, ...v, b];
}
function Ty(a, r, s = u_, l = 8192) {
  const c = a.provider, d = a.models[c] ?? "", f = {
    provider: c,
    model: d,
    messages: r,
    tools: s,
    max_tokens: l
  };
  if (c !== "openai-codex") {
    const m = c === "openai" ? a.apiKeys.openai : c === "openrouter" ? a.apiKeys.openrouter : c === "anthropic" ? a.apiKeys.anthropic : c === "custom" ? a.apiKeys.custom : void 0;
    m && (f.api_key = m);
  }
  c === "custom" && a.customBaseUrl && (f.base_url = a.customBaseUrl);
  const y = Wl(a);
  return y && (f.reasoning_effort = y), f;
}
async function ld(a) {
  const r = (f) => {
    const y = po(
      { name: "validate_graph", arguments: {} },
      JSON.stringify(f),
      a
    );
    try {
      const m = JSON.parse(y);
      let g = m.valid === !0;
      const v = Array.isArray(m.errors) ? m.errors.filter((b) => typeof b == "string") : [];
      return g && v.length > 0 && (g = !1), !g && v.length === 0 && v.push("Graph validation failed without diagnostic details."), { valid: g, errors: v };
    } catch {
      return { valid: !1, errors: ["Graph validation returned an unreadable result."] };
    }
  }, s = a.graph.getGraph(), l = s.nodes.filter((f) => f.type !== "note"), c = new Set(l.map((f) => f.id)), d = s.edges.filter((f) => typeof f.source == "string" && typeof f.target == "string" && c.has(f.source) && c.has(f.target));
  try {
    const f = await a.http.fetch("/api/graph/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes: l, edges: d, presets: s.presets ?? [] })
    });
    if (!f.ok)
      return r({ valid: !1, errors: [`validate request failed: HTTP ${f.status}`] });
    const y = await f.json();
    return r({
      valid: y.valid === !0,
      errors: Array.isArray(y.errors) ? y.errors.filter((m) => typeof m == "string") : []
    });
  } catch (f) {
    return r({ valid: !1, errors: [`validate request error: ${String(f)}`] });
  }
}
async function m_(a) {
  let r = !1, s;
  try {
    s = a.graph.onGraphChanged(() => {
      r = !0;
    });
  } catch {
    return {
      valid: !1,
      errors: ["Graph validation could not safely monitor the active graph for concurrent changes."]
    };
  }
  let l;
  try {
    l = fo(a);
  } catch {
    try {
      s();
    } catch {
    }
    return {
      valid: !1,
      errors: ["Graph validation could not capture the active graph revision."]
    };
  }
  const c = await ld(a);
  let d;
  try {
    d = fo(a);
  } catch {
  }
  const f = r || d === void 0 || d !== l;
  try {
    s();
  } catch {
  }
  return f ? {
    valid: !1,
    errors: [
      "The active graph changed while validation was in flight. Re-read the current graph and validate that revision before finishing."
    ]
  } : c;
}
async function h_(a, r, s, l, c) {
  const f = [
    { role: "system", content: `You are a focused research sub-agent for CodefyUI Graph Copilot. Answer ONE sub-question about building a node graph, using ONLY node types that appear in the index below (exact names; if nothing in the index fits, say so instead of inventing a type). Answer with: (1) the node types needed, (2) a one-line wiring plan (which output feeds which input), (3) any params worth setting. CONCISE — no preamble, no code blocks.

## Node index
` + l },
    { role: "user", content: s }
  ];
  let y = "";
  try {
    await Ig(
      a,
      Ty(r, f, [], 1024),
      {
        onText: (m) => {
          y += m;
        },
        onDone: (m) => {
          !y && m.message.content && (y = m.message.content);
        },
        onError: (m) => {
          y += `
(research error: ${m})`;
        }
      },
      c
    );
  } catch (m) {
    return `(research failed: ${String(m)})`;
  }
  return y.trim() || "(no answer)";
}
let qu = !1;
async function Oy(a, r, s, l, c, d, f, y = !1) {
  const { name: m, arguments: g } = a;
  if (m === "apply_graph_operations") {
    const v = g.operations;
    if (!Array.isArray(v))
      return JSON.stringify({ error: "operations must be an array of GraphOp objects" });
    let b;
    try {
      b = r.graph.applyOperations(v);
    } catch (N) {
      return JSON.stringify({ error: `applyOperations threw: ${String(N)}` });
    }
    const _ = bg(v, b.results);
    return c.push(_), l.onOpsApplied(_, b), JSON.stringify({
      results: b.results,
      refs: b.refs,
      node_count: b.node_count,
      edge_count: b.edge_count
    });
  }
  if (m === "get_node_schemas") {
    const b = (Array.isArray(g.node_types) ? g.node_types : []).map((M) => String(M)), _ = r.graph.getNodeDefinitions(), N = new Map(_.map((M) => [M.node_name, M])), D = b.map((M) => N.get(M)).filter((M) => !!M), x = b.filter((M) => !N.has(M));
    let V = D.length > 0 ? I0(D) : "(no matching node types)";
    return x.length > 0 && (V += `
(unknown node types, not in catalog: ${x.join(", ")})`), V;
  }
  if (m === "validate_graph")
    return JSON.stringify(await ld(r));
  if (m === "run_graph") {
    if (qu)
      return JSON.stringify({
        error: "A live graph run is already in progress. Wait for it to finish or cancel it before starting another."
      });
    const v = typeof g.reason == "string" && g.reason.trim() ? g.reason.trim().slice(0, 300) : "Run the current graph.", b = typeof g.timeout_minutes == "number" && Number.isFinite(g.timeout_minutes) ? Math.round(g.timeout_minutes) : n_, _ = Math.min(Math.max(b, 1), a_), D = (typeof g.device == "string" && ["cpu", "cuda", "mps"].includes(g.device) ? g.device : void 0) ?? await My(r, f);
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." });
    const x = await ld(r);
    if (!x.valid)
      return JSON.stringify({
        error: "The current graph is not runnable — fix these validation errors, then call run_graph again.",
        errors: x.errors
      });
    if (!l.onRunApproval)
      return JSON.stringify({
        error: "Running the live graph requires an interactive user confirmation, but this client did not provide one."
      });
    let V;
    try {
      V = yg(r);
    } catch (H) {
      return JSON.stringify({ error: `Cannot capture the graph before approval: ${String(H)}` });
    }
    let M;
    try {
      const H = r.graph.getGraph();
      M = await l.onRunApproval({
        reason: v,
        nodeCount: H.nodes.filter((Z) => Z.type !== "note").length,
        edgeCount: H.edges.length,
        nodeTypes: [...new Set(
          H.nodes.map((Z) => Z.type).filter((Z) => !!Z && Z !== "note")
        )],
        timeoutMinutes: _,
        device: D ?? "host default"
      });
    } catch (H) {
      return f != null && f.aborted ? JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." }) : JSON.stringify({ error: `Run approval failed: ${String(H)}` });
    }
    if (!M)
      return JSON.stringify({ cancelled: !0, error: "The run was not approved by the user." });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." });
    let R;
    try {
      R = yg(r) !== V;
    } catch (H) {
      return JSON.stringify({ error: `Cannot re-check the graph after approval: ${String(H)}` });
    }
    if (R)
      return JSON.stringify({
        cancelled: !0,
        replan: !0,
        error: "The graph changed while the run approval was open. Re-read the graph, re-validate, and propose the run again."
      });
    qu = !0;
    try {
      const H = await c_(r, {
        signal: f,
        timeoutMs: _ * 6e4,
        ...D ? { device: D } : {},
        onProgress: l.onRunProgress
      }), { durationMs: Z, textTail: X, media: ae, ...B } = H, ce = (ae ?? []).map(({ data: re, ...K }) => ({
        ...K,
        ...re ? { inline_preview: !0 } : {}
      }));
      return JSON.stringify({
        ...B,
        ...D ? { device: D } : {},
        duration_s: Math.round(Z / 1e3),
        ...X ? { text_tail: X } : {},
        ...ce.length ? { media: ce } : {}
      });
    } catch (H) {
      return JSON.stringify({ error: `Run failed: ${String(H)}` });
    } finally {
      qu = !1;
    }
  }
  if (m === "research") {
    const b = (Array.isArray(g.questions) ? g.questions : []).map((D) => String(D)).filter((D) => D.trim()).slice(0, 4);
    if (b.length === 0)
      return JSON.stringify({ error: 'research requires a non-empty "questions" array' });
    const _ = Jg(r.graph.getNodeDefinitions()), N = await Promise.all(
      b.map((D) => h_(r, s, D, _, f))
    );
    return b.map((D, x) => `[${x + 1}] Q: ${D}
A: ${N[x]}`).join(`

`);
  }
  if (m === "optimize_graph_parameters") {
    let v;
    try {
      v = t_(
        g,
        r.graph.getGraph(),
        r.graph.getNodeDefinitions()
      );
    } catch (_) {
      return JSON.stringify({ error: String(_) });
    }
    const b = await Oy(
      {
        id: a.id,
        name: "run_graph_experiments",
        arguments: v.request
      },
      r,
      s,
      l,
      c,
      d,
      f,
      !0
    );
    try {
      const _ = JSON.parse(b);
      return JSON.stringify({ ..._, optimizer: v.metadata });
    } catch {
      return b;
    }
  }
  if (m === "run_graph_experiments") {
    if (g.search !== void 0 && !y)
      return JSON.stringify({
        error: "search metadata is internal optimizer provenance; call optimize_graph_parameters instead"
      });
    let v;
    try {
      v = LS(g);
    } catch (M) {
      return JSON.stringify({ error: String(M) });
    }
    if (v > d.remaining)
      return JSON.stringify({
        error: `Experiment turn budget exceeded: ${v} requested, ${d.remaining} of ${lo} executions remain.`
      });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." });
    if (!l.onExperimentApproval)
      return JSON.stringify({
        error: "Experiment execution requires an interactive user confirmation, but this client did not provide one."
      });
    const b = g;
    let _ = !1, N;
    try {
      N = r.graph.onGraphChanged(() => {
        _ = !0;
      });
    } catch (M) {
      return JSON.stringify({ error: `Cannot safely watch the graph during approval: ${String(M)}` });
    }
    let D;
    try {
      D = fo(r);
    } catch (M) {
      return N(), JSON.stringify({ error: `Cannot capture the graph before approval: ${String(M)}` });
    }
    let x;
    try {
      try {
        const M = y ? {
          ...a,
          arguments: Object.fromEntries(
            Object.entries(a.arguments).filter(([H]) => H !== "search")
          )
        } : a, R = Yg(M, r).arguments;
        x = await l.onExperimentApproval({
          hypothesis: R.hypothesis,
          variantCount: b.variants.length,
          repetitions: b.repetitions ?? 1,
          executionCount: v,
          concurrency: b.concurrency ?? 1,
          runTimeoutMinutes: Math.round(Ey(b) / 6e4),
          applyBest: b.apply_best ?? !1,
          variants: R.variants.map((H) => ({
            label: H.label,
            operations: H.operations.map(f_)
          })),
          nodeTypes: [.../* @__PURE__ */ new Set([
            ...r.graph.getGraph().nodes.map((H) => H.type).filter((H) => !!H && H !== "note"),
            ...b.variants.flatMap((H) => H.operations.filter((Z) => Z.op === "add_node").map((Z) => Z.node_type))
          ])]
        });
      } catch (M) {
        return f != null && f.aborted ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." }) : JSON.stringify({ error: `Experiment approval failed: ${String(M)}` });
      }
    } finally {
      N();
    }
    if (!x)
      return JSON.stringify({ cancelled: !0, error: "Experiment execution was not approved by the user." });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." });
    let V;
    try {
      V = fo(r) !== D;
    } catch (M) {
      return JSON.stringify({ error: `Cannot re-check the graph after approval: ${String(M)}` });
    }
    if (_ || V)
      return JSON.stringify({
        cancelled: !0,
        replan: !0,
        error: "The active graph changed while execution approval was open. Re-read the graph and propose the study again."
      });
    d.remaining -= v;
    try {
      const M = await VS(
        r,
        g,
        f
      );
      if (M.applyResult && M.appliedOperations) {
        const X = `promote experiment winner: ${bg(
          M.appliedOperations,
          M.applyResult.results
        )}`;
        c.push(X), l.onOpsApplied(X, M.applyResult);
      }
      const { applyResult: R, appliedOperations: H, ...Z } = M;
      return JSON.stringify(Z);
    } catch (M) {
      return f != null && f.aborted || M instanceof DOMException && M.name === "AbortError" ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled." }) : JSON.stringify({ error: String(M) });
    }
  }
  return m === "get_current_graph" ? Zg(r.graph.getGraph(), r.graph.getNodeDefinitions()) : JSON.stringify({ error: `Unknown tool: ${m}` });
}
async function g_(a) {
  const { api: r, settings: s, history: l, userText: c, attachments: d, callbacks: f, signal: y } = a, m = [], g = p_(
    r,
    l,
    c,
    d,
    s.provider
  );
  let v = 0, b = 0, _ = !1;
  const N = [], D = { remaining: lo }, x = (M) => {
    var R;
    m.push(M), (R = f.onTurnAppended) == null || R.call(f, M);
  }, V = (M) => {
    const R = Fu(M, N, r);
    R.trim() && x({ role: "assistant", content: R });
  };
  try {
    for (; ; ) {
      let M = "", R = null, H = null;
      if (await Ig(
        r,
        Ty(s, g),
        {
          onText(F) {
            M += F, f.onTextDelta(F);
          },
          onDone(F) {
            R = F;
          },
          onError(F) {
            H = F;
          }
        },
        y
      ), H !== null) {
        V(M), f.onTurnsCommitted(m), f.onError(H), f.onFinished();
        return;
      }
      if (!R) {
        V(M), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      const Z = R, X = Z.message.tool_calls ?? [], ae = Z.message.content || M, B = Fu(
        ae,
        [...N, ...X],
        r
      );
      if (Z.stop_reason === "end" || X.length === 0) {
        const F = r.graph.getGraph();
        if (_ && Array.isArray(F.nodes) && F.nodes.length > 0) {
          const le = await m_(r);
          if (!le.valid) {
            if (b >= gg) {
              B.trim() && x({ role: "assistant", content: B }), x({
                role: "assistant",
                content: `I could not complete a runnable graph after ${gg} correction attempts. The current graph still fails CodefyUI validation:
` + le.errors.map((w) => `- ${w}`).join(`
`)
              }), f.onTurnsCommitted(m), f.onFinished();
              return;
            }
            b++, B.trim() && x({ role: "assistant", content: B }), g.push({ role: "assistant", content: B }), g.push({
              role: "user",
              content: `The graph is not runnable yet — validate_graph reported these errors. Fix them with graph operations, then validate again before finishing:
` + le.errors.map((w) => `- ${w}`).join(`
`)
            });
            continue;
          }
        }
        x({ role: "assistant", content: B }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      v++;
      const ce = Qg(X, r);
      N.push(...X);
      const re = {
        role: "assistant",
        content: B,
        tool_calls: ce
      }, K = m.length;
      x(re);
      const Q = [], ue = [];
      for (const F of X) {
        const le = Q.length, w = Date.now(), Y = await Oy(
          F,
          r,
          s,
          f,
          Q,
          D,
          y
        );
        Q.length > le && (_ = !0);
        const C = po(F, Y, r);
        if (x({
          role: "tool",
          content: C,
          tool_call_id: F.id,
          durationMs: Date.now() - w
        }), ue.push({
          role: "tool",
          content: C,
          tool_call_id: F.id
        }), y != null && y.aborted) {
          f.onTurnsCommitted(m), f.onFinished();
          return;
        }
      }
      Q.length > 0 && (m[K] = { ...re, opsSummary: Q.join("; ") });
      const ye = {
        role: "assistant",
        content: B,
        tool_calls: X
      };
      if (g.push(ye), g.push(...ue), v >= hg) {
        x({
          role: "assistant",
          content: `(stopped after ${hg} tool rounds)`
        }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
    }
  } catch (M) {
    f.onTurnsCommitted(m), f.onError(String(M)), f.onFinished();
  }
}
const Sg = 120, y_ = ["loss", "train_loss", "val_loss"];
function v_(a, r) {
  const s = r.progress;
  if (!s) return a;
  for (const l of y_) {
    const c = s[l];
    if (typeof c == "number" && Number.isFinite(c)) {
      const d = [...a, c];
      return d.length > Sg ? d.slice(d.length - Sg) : d;
    }
  }
  return a;
}
function b_(a, r, s) {
  if (a.length < 2) return "";
  const l = Math.min(...a), d = Math.max(...a) - l, f = r / (a.length - 1), y = 1.5, m = s - y * 2;
  return a.map((g, v) => {
    const b = v * f, _ = d === 0 ? s / 2 : y + (1 - (g - l) / d) * m;
    return `${b.toFixed(1)},${_.toFixed(1)}`;
  }).join(" ");
}
function S_({ series: a }) {
  const l = b_(a, 96, 20);
  if (!l) return null;
  const c = a[a.length - 1];
  return /* @__PURE__ */ h.jsx(
    "svg",
    {
      className: "gcp-run-sparkline",
      viewBox: "0 0 96 20",
      width: 96,
      height: 20,
      role: "img",
      "aria-label": `Training loss trend, latest ${c.toFixed(4)}`,
      children: /* @__PURE__ */ h.jsx(
        "polyline",
        {
          points: l,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinejoin: "round",
          strokeLinecap: "round"
        }
      )
    }
  );
}
function __(a) {
  const r = [];
  let s = 0;
  return a.forEach((l, c) => {
    if (l.role === "tool") {
      for (let f = r.length - 1; f >= 0; f--) {
        const y = r[f].stages.find(
          (m) => m.call.id === l.tool_call_id && !m.result
        );
        if (y) {
          y.result = l;
          return;
        }
      }
      return;
    }
    l.role === "user" && (s = 0);
    const d = (l.tool_calls ?? []).map((f) => ({ call: f }));
    r.push({
      key: c,
      turn: l,
      stages: d,
      ...d.length > 0 ? { step: ++s } : {}
    });
  }), r;
}
function Cy(a) {
  if (!Number.isFinite(a) || a < 0) return "";
  if (a < 1e4) return `${Math.max(a / 1e3, 0.1).toFixed(1)}s`;
  const r = Math.round(a / 1e3);
  if (r < 60) return `${r}s`;
  const s = Math.floor(r / 60), l = r % 60;
  return `${s}m ${String(l).padStart(2, "0")}s`;
}
function E_(a) {
  const r = Array.isArray(a.media) ? a.media : [], s = [];
  for (const l of r) {
    if (!l || typeof l != "object") continue;
    const c = l, d = typeof c.url == "string" ? c.url : "";
    c.kind !== "video" || !d.startsWith("/") || s.push({
      kind: "video",
      url: d,
      format: typeof c.format == "string" ? c.format : "mp4",
      ...typeof c.node == "string" && c.node ? { node: c.node } : {}
    });
  }
  return s;
}
const ea = {
  apply_graph_operations: "Edit graph",
  get_current_graph: "Read graph",
  get_node_schemas: "Node schemas",
  validate_graph: "Validate graph",
  research: "Research",
  run_graph: "Run graph",
  run_graph_experiments: "Experiment study",
  optimize_graph_parameters: "Parameter search"
};
function si(a) {
  try {
    const r = JSON.parse(a);
    return r && typeof r == "object" && !Array.isArray(r) ? r : null;
  } catch {
    return null;
  }
}
function x_(a) {
  const r = Array.isArray(a.operations) ? a.operations : [], s = /* @__PURE__ */ new Map();
  for (const l of r) {
    const c = l && typeof l == "object" ? String(l.op ?? "?") : "?";
    s.set(c, (s.get(c) ?? 0) + 1);
  }
  return [...s].map(([l, c]) => `${l} ×${c}`).join(", ");
}
function hn(a, r) {
  return a.length > r ? a.slice(0, r - 1) + "…" : a;
}
function Ut(a) {
  try {
    return hn(JSON.stringify(JSON.parse(a), null, 2), 4e3);
  } catch {
    return hn(a, 4e3);
  }
}
function tr(a, r) {
  return `${a} ${r}${a === 1 ? "" : "s"}`;
}
function A_(a, r) {
  const s = ea.apply_graph_operations, l = x_(a);
  if (!r)
    return { label: s, summary: l || "applying operations", status: "running" };
  const c = si(r.content);
  if (!c)
    return { label: s, summary: l, status: "ok", detail: Ut(r.content) };
  if (typeof c.error == "string")
    return { label: s, summary: hn(c.error, 120), status: "error", detail: Ut(r.content) };
  const f = (Array.isArray(c.results) ? c.results : []).filter((v) => !v.ok).length, y = typeof c.node_count == "number" ? c.node_count : null, m = typeof c.edge_count == "number" ? c.edge_count : null, g = [];
  return l && g.push(l), f > 0 && g.push(`${f} failed`), y !== null && m !== null && g.push(`${tr(y, "node")} · ${tr(m, "edge")}`), {
    label: s,
    summary: g.join(" — ") || "applied",
    status: f > 0 ? "error" : "ok",
    detail: Ut(r.content)
  };
}
function N_(a) {
  const r = ea.validate_graph;
  if (!a) return { label: r, summary: "checking…", status: "running" };
  const s = si(a.content), l = Array.isArray(s == null ? void 0 : s.errors) ? s.errors.map(String) : [];
  return s != null && s.valid ? { label: r, summary: "graph is runnable", status: "ok" } : {
    label: r,
    summary: l.length > 0 ? tr(l.length, "issue") : "not runnable",
    status: "error",
    detail: l.length > 0 ? l.map((c) => `• ${c}`).join(`
`) : Ut(a.content)
  };
}
function j_(a) {
  const r = ea.get_current_graph;
  if (!a) return { label: r, summary: "reading…", status: "running" };
  const s = si(a.content), l = Array.isArray(s == null ? void 0 : s.nodes) ? s.nodes.length : null, c = Array.isArray(s == null ? void 0 : s.edges) ? s.edges.length : null;
  return {
    label: r,
    summary: l !== null && c !== null ? `${tr(l, "node")} · ${tr(c, "edge")}` : "snapshot",
    status: "ok",
    detail: Ut(a.content)
  };
}
function w_(a, r) {
  const s = ea.get_node_schemas, l = Array.isArray(a.node_types) ? a.node_types.map(String) : [], c = l.length > 0 ? hn(l.join(", "), 90) : "node types";
  return r ? { label: s, summary: c, status: "ok", detail: hn(r.content, 4e3) } : { label: s, summary: c, status: "running" };
}
function $_(a, r) {
  const s = ea.research, l = Array.isArray(a.questions) ? a.questions.length : 0, c = l > 0 ? `${tr(l, "question")} in parallel` : "researching";
  return r ? { label: s, summary: c, status: "ok", detail: hn(r.content, 4e3) } : { label: s, summary: c, status: "running" };
}
function M_(a, r) {
  const s = ea.run_graph_experiments, l = Array.isArray(a.variants) ? a.variants.length : 0, c = typeof a.repetitions == "number" ? a.repetitions : 1, d = l > 0 ? `${l} candidates · ${l * c} runs` : "preparing study";
  if (!r) return { label: s, summary: d, status: "running" };
  const f = si(r.content);
  if (!f || typeof f.error == "string")
    return {
      label: s,
      summary: typeof (f == null ? void 0 : f.error) == "string" ? hn(f.error, 120) : "study failed",
      status: "error",
      detail: Ut(r.content)
    };
  const y = typeof f.winnerLabel == "string" ? f.winnerLabel : null, m = typeof f.appliedVariantId == "string";
  return {
    label: s,
    summary: y ? `${y} ranked first${m ? " · applied" : ""}` : "no rankable metric",
    status: y ? "ok" : "error",
    detail: Ut(r.content)
  };
}
function T_(a, r) {
  const s = ea.optimize_graph_parameters, l = Array.isArray(a.bindings) ? a.bindings.length : 0, c = a.strategy === "seeded_random" ? "seeded random" : "grid", d = typeof a.repetitions == "number" ? a.repetitions : 1, f = a.strategy === "seeded_random" && typeof a.candidate_count == "number" ? a.candidate_count + (a.include_baseline === !1 ? 0 : 1) : void 0, y = f ? `${c} · ${l} params · ${f * d} runs` : `${c} · ${l} ${l === 1 ? "parameter" : "parameters"}`;
  if (!r) return { label: s, summary: y, status: "running" };
  const m = si(r.content);
  if (!m || typeof m.error == "string")
    return {
      label: s,
      summary: typeof (m == null ? void 0 : m.error) == "string" ? hn(m.error, 120) : "search failed",
      status: "error",
      detail: Ut(r.content)
    };
  const g = typeof m.winnerLabel == "string" ? m.winnerLabel : null, v = typeof m.appliedVariantId == "string";
  return {
    label: s,
    summary: g ? `${g} ranked first${v ? " · applied" : ""}` : "no rankable metric",
    status: g ? "ok" : "error",
    detail: Ut(r.content)
  };
}
function O_(a, r) {
  const s = ea.run_graph, l = typeof a.reason == "string" ? hn(a.reason, 90) : "";
  if (!r) return { label: s, summary: l || "executing…", status: "running" };
  const c = si(r.content);
  if (!c)
    return { label: s, summary: "done", status: "ok", detail: Ut(r.content) };
  if (typeof c.status != "string") {
    const m = typeof c.error == "string" ? c.error : "run not started";
    return { label: s, summary: hn(m, 120), status: "error", detail: Ut(r.content) };
  }
  const d = c.status, f = [d];
  typeof c.completedNodes == "number" && typeof c.totalNodes == "number" && f.push(`${c.completedNodes}/${c.totalNodes} nodes`), typeof c.duration_s == "number" && f.push(Cy(c.duration_s * 1e3));
  const y = E_(c);
  return y.length && f.push(`${y.length} clip${y.length > 1 ? "s" : ""}`), {
    label: s,
    summary: f.join(" · "),
    status: d === "complete" ? "ok" : "error",
    detail: Ut(r.content),
    ...y.length ? { media: y } : {}
  };
}
function C_(a, r) {
  const s = ea[a.name] ?? a.name;
  if (!r) return { label: s, summary: "running…", status: "running" };
  const l = si(r.content);
  return l && typeof l.error == "string" ? { label: s, summary: hn(l.error, 120), status: "error", detail: Ut(r.content) } : { label: s, summary: "done", status: "ok", detail: Ut(r.content) };
}
function Dy(a) {
  const { call: r, result: s } = a, l = r.arguments ?? {};
  switch (r.name) {
    case "apply_graph_operations":
      return A_(l, s);
    case "validate_graph":
      return N_(s);
    case "get_current_graph":
      return j_(s);
    case "get_node_schemas":
      return w_(l, s);
    case "research":
      return $_(l, s);
    case "run_graph":
      return O_(l, s);
    case "run_graph_experiments":
      return M_(l, s);
    case "optimize_graph_parameters":
      return T_(l, s);
    default:
      return C_(r, s);
  }
}
const D_ = /`([^`\n]+)`/, z_ = /\[([^\]\n]+)\]\(([^)\s]+)\)/, R_ = /\*\*([^\n]+?)\*\*/, L_ = /(^|[\s(])\*([^\s*](?:[^*\n]*?[^\s*])?)\*(?=[\s).,!?:;]|$)/;
function U_(a) {
  let r = null;
  const s = (y) => {
    y && (r === null || y.index < r.index) && (r = y);
  }, l = D_.exec(a);
  l && s({
    index: l.index,
    length: l[0].length,
    node: (y) => /* @__PURE__ */ h.jsx("code", { children: l[1] }, y)
  });
  const c = z_.exec(a);
  if (c) {
    const y = c[2];
    s({
      index: c.index,
      length: c[0].length,
      node: (m) => /^https?:\/\//i.test(y) ? /* @__PURE__ */ h.jsx("a", { href: y, target: "_blank", rel: "noopener noreferrer", children: c[1] }, m) : c[0]
    });
  }
  const d = R_.exec(a);
  d && s({
    index: d.index,
    length: d[0].length,
    node: (y) => /* @__PURE__ */ h.jsx("strong", { children: as(d[1]) }, y)
  });
  const f = L_.exec(a);
  return f && s({
    index: f.index,
    length: f[0].length,
    prefix: f[1],
    node: (y) => /* @__PURE__ */ h.jsx("em", { children: as(f[2]) }, y)
  }), r;
}
function as(a) {
  const r = [];
  let s = a, l = 0;
  for (; s.length > 0; ) {
    const c = U_(s);
    if (!c) {
      r.push(s);
      break;
    }
    const d = s.slice(0, c.index) + (c.prefix ?? "");
    d && r.push(d), r.push(c.node(l++)), s = s.slice(c.index + c.length);
  }
  return r;
}
const V_ = /^(#{1,3})\s+(.*)$/, B_ = /^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/, H_ = /^\s*[-*]\s+(.*)$/, G_ = /^\s*\d+[.)]\s+(.*)$/;
function _g(a, r) {
  const s = a.split(`
`), l = [];
  let c = [], d = null, f = 0;
  const y = () => {
    c.length !== 0 && (l.push(
      /* @__PURE__ */ h.jsx("p", { className: "gcp-md-p", children: as(c.join(`
`)) }, `${r}-p${f++}`)
    ), c = []);
  }, m = () => {
    if (!d) return;
    const g = d.items.map((v, b) => /* @__PURE__ */ h.jsx("li", { children: as(v) }, b));
    l.push(
      d.ordered ? /* @__PURE__ */ h.jsx("ol", { className: "gcp-md-list", children: g }, `${r}-l${f++}`) : /* @__PURE__ */ h.jsx("ul", { className: "gcp-md-list", children: g }, `${r}-l${f++}`)
    ), d = null;
  };
  for (const g of s) {
    const v = V_.exec(g);
    if (v) {
      y(), m(), l.push(
        /* @__PURE__ */ h.jsx("div", { className: `gcp-md-h${v[1].length}`, children: as(v[2]) }, `${r}-h${f++}`)
      );
      continue;
    }
    if (B_.test(g)) {
      y(), m(), l.push(/* @__PURE__ */ h.jsx("hr", { className: "gcp-md-hr" }, `${r}-r${f++}`));
      continue;
    }
    const b = H_.exec(g), _ = b ? null : G_.exec(g);
    if (b || _) {
      y();
      const N = !!_;
      (!d || d.ordered !== N) && (m(), d = { ordered: N, items: [] }), d.items.push((b ?? _)[1]);
      continue;
    }
    if (g.trim() === "") {
      y(), m();
      continue;
    }
    m(), c.push(g);
  }
  return y(), m(), l;
}
const ku = /```[^\n]*\n?([\s\S]*?)(?:```|$)/g;
function q_({ text: a }) {
  const r = [];
  let s = 0, l = 0;
  ku.lastIndex = 0;
  for (let c = ku.exec(a); c !== null && (c.index > s && r.push(..._g(a.slice(s, c.index), `s${l++}`)), r.push(
    /* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: c[1] }) }, `c${l++}`)
  ), s = c.index + c[0].length, c[0].length !== 0); c = ku.exec(a))
    ;
  return s < a.length && r.push(..._g(a.slice(s), `s${l++}`)), /* @__PURE__ */ h.jsx(h.Fragment, { children: r });
}
function k_({ kind: a }) {
  return /* @__PURE__ */ h.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    a === "pdf" ? /* @__PURE__ */ h.jsx("path", { d: "M9 18v-4M15 18v-4m0 0h1.5M9 14h.8a1 1 0 0 1 0 2H9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) : /* @__PURE__ */ h.jsx("path", { d: "M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function I_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function K_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M12 5v9", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "19", r: "1.7", fill: "currentColor" })
  ] });
}
function X_({ open: a }) {
  return /* @__PURE__ */ h.jsx(
    "svg",
    {
      className: `gcp-stage-chevron${a ? " open" : ""}`,
      width: "11",
      height: "11",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ h.jsx("path", { d: "M9 6l6 6-6 6", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function Y_(a) {
  const r = a.split(/(```[^\n]*\n[\s\S]*?```|```[\s\S]*?```)/g), s = [];
  return r.forEach((l, c) => {
    if (l.startsWith("```")) {
      const d = l.replace(/^```[^\n]*\n?/, "").replace(/```$/, "");
      s.push(/* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: d }) }, c));
    } else l && s.push(/* @__PURE__ */ h.jsx("span", { children: l }, c));
  }), s;
}
function Q_({ stage: a }) {
  var f;
  const [r, s] = te.useState(!1), l = Dy(a), c = !!l.detail, d = (f = a.result) == null ? void 0 : f.durationMs;
  return /* @__PURE__ */ h.jsxs("div", { className: `gcp-stage ${l.status}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "gcp-stage-head",
        onClick: () => c && s((y) => !y),
        "aria-expanded": c ? r : void 0,
        "aria-label": `${l.label}${l.summary ? `: ${l.summary}` : ""}`,
        disabled: !c,
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-status", "aria-hidden": "true", children: l.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-spinner" }) : l.status === "ok" ? /* @__PURE__ */ h.jsx(I_, {}) : /* @__PURE__ */ h.jsx(K_, {}) }),
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-label", children: l.label }),
          l.summary && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-summary", children: l.summary }),
          typeof d == "number" && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-time", children: Cy(d) }),
          c && /* @__PURE__ */ h.jsx(X_, { open: r })
        ]
      }
    ),
    l.media && l.media.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-stage-media", children: l.media.map((y) => (
      // #310: same-origin /api/media references, host-served with a
      // real Content-Type. A gif is an animated image — browsers
      // refuse it as a <video> source.
      y.format === "gif" ? /* @__PURE__ */ h.jsx(
        "img",
        {
          className: "gcp-stage-clip",
          src: y.url,
          alt: y.node ? `${y.node} output clip` : "run output clip"
        },
        y.url
      ) : /* @__PURE__ */ h.jsx(
        "video",
        {
          className: "gcp-stage-clip",
          src: y.url,
          controls: !0,
          loop: !0,
          preload: "metadata"
        },
        y.url
      )
    )) }),
    r && l.detail && /* @__PURE__ */ h.jsx("pre", { className: "gcp-stage-detail", children: l.detail })
  ] });
}
function Eg({
  turn: a,
  stages: r = [],
  step: s,
  streaming: l = !1,
  streamingText: c
}) {
  if (a.role === "tool") return null;
  const d = a.role === "user", f = l && c !== void 0 ? c : a.content, y = f.trim().length > 0, m = a.attachments ?? [], g = !d && r.length > 0;
  return /* @__PURE__ */ h.jsxs("div", { className: `gcp-msg-row ${d ? "user" : "assistant"}${g ? " step" : ""}`, children: [
    m.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-bubble-attachments", children: m.map(
      (v, b) => v.kind === "image" && v.dataUrl ? /* @__PURE__ */ h.jsx("img", { className: "gcp-att-image", src: v.dataUrl, alt: v.name, title: v.name }, b) : /* @__PURE__ */ h.jsxs("span", { className: "gcp-att-file", title: v.name, children: [
        /* @__PURE__ */ h.jsx(k_, { kind: v.kind }),
        /* @__PURE__ */ h.jsx("span", { className: "gcp-att-file-name", children: v.name })
      ] }, b)
    ) }),
    g && typeof s == "number" && /* @__PURE__ */ h.jsxs("div", { className: "gcp-step-tag", children: [
      /* @__PURE__ */ h.jsx("span", { className: "gcp-step-tag-dot", "aria-hidden": "true" }),
      "Step ",
      s
    ] }),
    (y || l && r.length === 0) && /* @__PURE__ */ h.jsxs("div", { className: "gcp-bubble", children: [
      d ? Y_(f) : /* @__PURE__ */ h.jsx(q_, { text: f }),
      l && /* @__PURE__ */ h.jsx("span", { className: "gcp-caret", "aria-hidden": "true" })
    ] }),
    r.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-stages", children: r.map((v, b) => /* @__PURE__ */ h.jsx(Q_, { stage: v }, `${v.call.id}-${b}`)) }),
    !d && a.opsSummary && r.length === 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-ops-chip", children: /* @__PURE__ */ h.jsxs("span", { children: [
      "Applied: ",
      a.opsSummary
    ] }) })
  ] });
}
function J_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L11 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L15 22L11 13L2 9L22 2Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function Z_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }) });
}
function xg() {
  return /* @__PURE__ */ h.jsx("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(
    "path",
    {
      d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function F_({ kind: a }) {
  return a === "pdf" ? /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M8.5 13.5h1a1.2 1.2 0 0 1 0 2.4h-1zm0 0v4M14 13.5v4m0-4h1.6m-1.6 2h1.2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }) : /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function W_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round" }) });
}
function P_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function eE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7.5v5.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "16.5", r: "1.2", fill: "currentColor" })
  ] });
}
function tE() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M13 2L4 14h6l-1 8 9-12h-6l1-8z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Ag() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const nE = [
  "Build a small CNN image classifier",
  "Explain what my current graph does",
  "Improve my current graph"
];
function aE({
  api: a,
  settings: r,
  codexLoggedIn: s,
  conversation: l,
  onConversationChange: c,
  onSettingsChange: d,
  onOpenSettings: f,
  onOpenHistory: y
}) {
  var ir, ui, sa;
  const [m, g] = te.useState(""), [v, b] = te.useState(!1), [_, N] = te.useState(!1), [D, x] = te.useState(""), [V, M] = te.useState([]), [R, H] = te.useState(0), [Z, X] = te.useState(null), [ae, B] = te.useState(""), [ce, re] = te.useState([]), [K, Q] = te.useState([]), [ue, ye] = te.useState(!1), [F, le] = te.useState(null), [w, Y] = te.useState(null), [C, P] = te.useState(null), [J, E] = te.useState([]), L = te.useRef(null), W = te.useRef(!0), ie = te.useRef(null), ge = te.useRef(null), Se = te.useRef(null), de = te.useRef(null), We = te.useRef(0), Ne = x0(r, s), gn = K.some((q) => q.status === "loading"), ln = K.filter((q) => q.status === "ready" && q.att).map((q) => q.att), ta = Ne && !v && !gn && (m.trim().length > 0 || ln.length > 0);
  te.useEffect(() => () => {
    var q, ve;
    (q = de.current) == null || q.call(de, !1), de.current = null, (ve = Se.current) == null || ve.abort();
  }, []), te.useEffect(() => {
    if (!v) {
      H(0);
      return;
    }
    const q = Date.now(), ve = window.setInterval(() => {
      H(Math.floor((Date.now() - q) / 1e3));
    }, 1e3);
    return () => window.clearInterval(ve);
  }, [v]);
  const ne = te.useCallback(() => {
    const q = L.current;
    q && (W.current = q.scrollHeight - q.scrollTop - q.clientHeight < 80);
  }, []);
  te.useEffect(() => {
    const q = L.current;
    q && W.current && (q.scrollTop = q.scrollHeight);
  }, [l.messages, V, D, K.length, v]);
  const me = te.useCallback(() => {
    const q = ie.current;
    q && (q.style.height = "auto", q.style.height = Math.min(q.scrollHeight, 110) + "px");
  }, []);
  te.useEffect(() => {
    me();
  }, [m, me]);
  const Ke = te.useCallback(
    (q) => {
      if (!(!Ne || v))
        for (const ve of Array.from(q)) {
          const gt = crypto.randomUUID(), Va = qg(ve);
          Q((Ue) => [
            ...Ue,
            { id: gt, name: ve.name, kind: Va, size: ve.size, status: "loading" }
          ]), R0(ve).then((Ue) => {
            Q(
              (vn) => vn.map((Vt) => Vt.id === gt ? { ...Vt, status: "ready", att: Ue } : Vt)
            );
          }).catch((Ue) => {
            const vn = (Ue == null ? void 0 : Ue.message) ?? String(Ue);
            Q(
              (Vt) => Vt.map((Yt) => Yt.id === gt ? { ...Yt, status: "error", error: vn } : Yt)
            );
          });
        }
    },
    [Ne, v]
  ), rt = (q) => {
    Q((ve) => ve.filter((gt) => gt.id !== q));
  }, xt = (q) => {
    q.target.files && q.target.files.length > 0 && Ke(q.target.files), q.target.value = "";
  }, _t = (q) => {
    var gt;
    const ve = (gt = q.clipboardData) == null ? void 0 : gt.files;
    ve && ve.length > 0 && (Ke(ve), q.preventDefault());
  }, Mt = (q) => {
    !Ne || v || Array.from(q.dataTransfer.types).includes("Files") && (q.preventDefault(), We.current += 1, ye(!0));
  }, on = (q) => {
    !Ne || v || Array.from(q.dataTransfer.types).includes("Files") && q.preventDefault();
  }, Pe = () => {
    We.current -= 1, We.current <= 0 && (We.current = 0, ye(!1));
  }, li = (q) => {
    We.current = 0, ye(!1), !(!Ne || v) && q.dataTransfer.files && q.dataTransfer.files.length > 0 && (q.preventDefault(), Ke(q.dataTransfer.files));
  }, na = te.useCallback(
    async (q, ve) => {
      var cn;
      const gt = q.trim();
      if (!gt && ve.length === 0 || v || !Ne) return;
      X(null), B(gt), re(ve), g(""), Q([]), b(!0), x(""), M([]), W.current = !0;
      const Va = { role: "user", content: gt };
      ve.length > 0 && (Va.attachments = ve);
      let Ue = { ...l };
      Ue.title || (Ue.title = N0(gt || ((cn = ve[0]) == null ? void 0 : cn.name) || "Attachment")), Ue.provider = r.provider, Ue.model = r.models[r.provider] ?? "";
      const vn = Wl(r);
      vn ? Ue.reasoningEffort = vn : delete Ue.reasoningEffort, Ue.messages = [...Ue.messages, Va], Ue.updatedAt = Date.now(), c(Ue), zh(a, Ue);
      const Vt = new AbortController();
      Se.current = Vt;
      let Yt = "";
      await g_({
        api: a,
        settings: r,
        history: Ue.messages.slice(0, -1),
        // exclude the user turn we just added
        userText: gt,
        attachments: ve.length > 0 ? ve : void 0,
        callbacks: {
          onTextDelta(je) {
            Yt += je, x(Yt);
          },
          onTurnAppended(je) {
            je.role !== "tool" ? (Yt = "", x("")) : (P(null), E([])), M((Ze) => [...Ze, je]);
          },
          onOpsApplied() {
          },
          onExperimentApproval(je) {
            var Ze;
            return Vt.signal.aborted ? Promise.resolve(!1) : ((Ze = de.current) == null || Ze.call(de, !1), new Promise((bn) => {
              de.current = bn, le(je);
            }));
          },
          onRunApproval(je) {
            var Ze;
            return Vt.signal.aborted ? Promise.resolve(!1) : ((Ze = de.current) == null || Ze.call(de, !1), new Promise((bn) => {
              de.current = bn, Y(je);
            }));
          },
          onRunProgress(je) {
            P(s_(je)), je.phase === "connecting" ? E([]) : E((Ze) => v_(Ze, je));
          },
          onTurnsCommitted(je) {
            x(""), Yt = "", M([]), Ue = { ...Ue, messages: [...Ue.messages, ...je], updatedAt: Date.now() }, c(Ue), zh(a, Ue);
          },
          onError(je) {
            X(je), x(""), Yt = "";
          },
          onFinished() {
            var je;
            (je = de.current) == null || je.call(de, !1), de.current = null, le(null), Y(null), P(null), E([]), b(!1), Se.current = null;
          }
        },
        signal: Vt.signal
      });
    },
    [a, v, l, c, Ne, r]
  ), At = () => na(m, ln), vo = (q) => {
    q.key === "Enter" && !q.shiftKey && (q.preventDefault(), na(m, ln));
  }, _s = () => {
    var q, ve;
    (q = de.current) == null || q.call(de, !1), de.current = null, le(null), Y(null), (ve = Se.current) == null || ve.abort();
  }, ar = (q) => {
    const ve = de.current;
    de.current = null, le(null), ve == null || ve(q);
  }, Ua = (q) => {
    const ve = de.current;
    de.current = null, Y(null), ve == null || ve(q);
  }, bo = () => na(ae, ce), Es = V.length > 0 ? [...l.messages, ...V] : l.messages, oi = __(Es), xs = oi.length === 0 && !v, wn = oi[oi.length - 1], ht = wn == null ? void 0 : wn.stages.find((q) => !q.result), Nt = v && D === "" && !!!ht && !F && !w, As = V.filter(
    (q) => {
      var ve;
      return q.role === "assistant" && (((ve = q.tool_calls) == null ? void 0 : ve.length) ?? 0) > 0;
    }
  ).length, So = F || w ? "Waiting for approval" : C || (D !== "" ? "Writing reply" : ht ? Dy(ht).label : "Thinking"), aa = r.provider, ia = r.models[aa] ?? "", jt = Fl(aa, ia), ci = ((ui = (ir = r.providerCapabilities) == null ? void 0 : ir[aa]) == null ? void 0 : ui.reasoningEffort) === !0, yn = d && ci ? (jt == null ? void 0 : jt.reasoningEfforts) ?? [] : [], Xt = ((sa = r.reasoningEfforts) == null ? void 0 : sa[aa]) ?? "", ra = (q) => {
    N(!1), d == null || d(Vg(r, aa, q));
  }, Ns = xs ? Qu(a).filter((q) => q.id !== l.id).length : 0;
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `gcp-chat${ue ? " gcp-dragging" : ""}`,
      onDragEnter: Mt,
      onDragOver: on,
      onDragLeave: Pe,
      onDrop: li,
      children: [
        /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: "gcp-messages",
            role: "log",
            "aria-live": "polite",
            "aria-label": "Conversation",
            ref: L,
            onScroll: ne,
            children: [
              xs && /* @__PURE__ */ h.jsxs("div", { className: "gcp-welcome", children: [
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-mark", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-title", children: "Build graphs by conversation" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-sub", children: "Describe the pipeline you want, ask for parameter changes, or attach an image, PDF, or code file for context." }),
                Ne && /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-suggestions", "aria-label": "Suggested prompts", children: nE.map((q) => /* @__PURE__ */ h.jsx("button", { className: "gcp-suggestion", onClick: () => na(q, []), children: q }, q)) }),
                Ns > 0 && /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "gcp-welcome-history",
                    onClick: y,
                    "aria-label": "View previous conversations",
                    children: [
                      /* @__PURE__ */ h.jsx(P_, {}),
                      "Previous conversations (",
                      Ns,
                      ")"
                    ]
                  }
                )
              ] }),
              oi.map((q) => /* @__PURE__ */ h.jsx(
                Eg,
                {
                  turn: q.turn,
                  stages: q.stages,
                  step: q.step
                },
                q.key
              )),
              v && D !== "" && /* @__PURE__ */ h.jsx(
                Eg,
                {
                  turn: { role: "assistant", content: "" },
                  streaming: !0,
                  streamingText: D
                }
              ),
              Nt && /* @__PURE__ */ h.jsxs("div", { className: "gcp-thinking", role: "status", "aria-label": "Waiting for the assistant", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-orb", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-text", children: "Thinking" }),
                R >= 3 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-thinking-time", children: [
                  R,
                  "s"
                ] })
              ] }),
              Z && !v && /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-row", role: "alert", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-error-icon", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(eE, {}) }),
                /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-body", children: [
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-title", children: "Request failed" }),
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-text", children: Z })
                ] }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-retry-btn", onClick: bo, "aria-label": "Retry", children: "Retry" })
              ] })
            ]
          }
        ),
        ue && /* @__PURE__ */ h.jsx("div", { className: "gcp-dropzone", "aria-hidden": "true", children: /* @__PURE__ */ h.jsxs("div", { className: "gcp-dropzone-inner", children: [
          /* @__PURE__ */ h.jsx(xg, {}),
          /* @__PURE__ */ h.jsx("span", { children: "Drop files to attach" })
        ] }) }),
        _ && /* @__PURE__ */ h.jsx(
          "button",
          {
            className: "gcp-menu-backdrop",
            "aria-label": "Close menu",
            onClick: () => N(!1)
          }
        ),
        F && /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-backdrop", children: /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: "gcp-experiment-approval",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "gcp-experiment-approval-title",
            children: [
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-kicker", children: "Execution approval" }),
              /* @__PURE__ */ h.jsxs("div", { id: "gcp-experiment-approval-title", className: "gcp-experiment-approval-title", children: [
                "Run ",
                F.executionCount,
                " graph execution",
                F.executionCount === 1 ? "" : "s",
                "?"
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-hypothesis", children: F.hypothesis }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-facts", children: [
                /* @__PURE__ */ h.jsxs("span", { children: [
                  F.variantCount,
                  " variants"
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  F.repetitions,
                  " repetitions"
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  "concurrency ",
                  F.concurrency
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  "per-run cap ",
                  F.runTimeoutMinutes,
                  " min"
                ] }),
                F.applyBest && /* @__PURE__ */ h.jsx("span", { children: "parameter winner may be applied" })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-warning", children: "Review the candidate settings below. Credential values are schema-redacted." }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-candidates", "aria-label": "Candidate changes", children: F.variants.map((q, ve) => /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: q.label }),
                /* @__PURE__ */ h.jsx("span", { children: q.operations.length > 0 ? q.operations.join(" · ") : "baseline — no changes" })
              ] }, `${ve}-${q.label}`)) }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-nodes", children: [
                /* @__PURE__ */ h.jsx("strong", { children: "Nodes that may execute" }),
                /* @__PURE__ */ h.jsx("span", { children: F.nodeTypes.length > 0 ? F.nodeTypes.join(", ") : "No typed nodes detected" })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-warning", children: "Candidate edits stay off-canvas, but nodes may write files, call networks, use GPU time, or incur API costs." }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-actions", children: [
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-secondary", onClick: () => ar(!1), autoFocus: !0, children: "Cancel" }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-primary", onClick: () => ar(!0), children: "Approve and run" })
              ] })
            ]
          }
        ) }),
        w && /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-backdrop", children: /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: "gcp-experiment-approval",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "gcp-run-approval-title",
            children: [
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-kicker", children: "Execution approval" }),
              /* @__PURE__ */ h.jsx("div", { id: "gcp-run-approval-title", className: "gcp-experiment-approval-title", children: "Run the current graph?" }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-hypothesis", children: w.reason }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-facts", children: [
                /* @__PURE__ */ h.jsxs("span", { children: [
                  w.nodeCount,
                  " node",
                  w.nodeCount === 1 ? "" : "s"
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  w.edgeCount,
                  " edge",
                  w.edgeCount === 1 ? "" : "s"
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  "device ",
                  w.device
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  "time cap ",
                  w.timeoutMinutes,
                  " min"
                ] })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-nodes", children: [
                /* @__PURE__ */ h.jsx("strong", { children: "Nodes that will execute" }),
                /* @__PURE__ */ h.jsx("span", { children: w.nodeTypes.length > 0 ? w.nodeTypes.join(", ") : "No typed nodes detected" })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-warning", children: "This executes your live graph with real side effects — file writes, network calls, GPU time. Training runs can take a long time; progress streams into this panel and Stop cancels the run." }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-actions", children: [
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-secondary", onClick: () => Ua(!1), autoFocus: !0, children: "Cancel" }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-primary", onClick: () => Ua(!0), children: "Run graph" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-area", children: [
          K.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-attachments", "aria-label": "Attachments", children: K.map((q) => {
            var ve;
            return /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: `gcp-chip ${q.kind === "image" ? "image" : "file"} ${q.status}`,
                title: q.status === "error" ? q.error : `${q.name} · ${ns(q.size)}`,
                children: [
                  q.kind === "image" && ((ve = q.att) != null && ve.dataUrl) ? /* @__PURE__ */ h.jsx("img", { className: "gcp-chip-thumb", src: q.att.dataUrl, alt: q.name }) : /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-icon", children: /* @__PURE__ */ h.jsx(F_, { kind: q.kind }) }),
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-chip-body", children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-name", children: q.name }),
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-size", children: q.status === "loading" ? "reading…" : q.status === "error" ? "failed" : ns(q.size) })
                  ] }),
                  q.status === "loading" && /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-spinner", "aria-hidden": "true" }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "gcp-chip-remove",
                      onClick: () => rt(q.id),
                      "aria-label": `Remove ${q.name}`,
                      title: "Remove",
                      children: /* @__PURE__ */ h.jsx(W_, {})
                    }
                  )
                ]
              },
              q.id
            );
          }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-row", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: ge,
                type: "file",
                multiple: !0,
                className: "gcp-file-input",
                onChange: xt,
                "aria-hidden": "true",
                tabIndex: -1
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-attach-btn",
                onClick: () => {
                  var q;
                  return (q = ge.current) == null ? void 0 : q.click();
                },
                disabled: !Ne || v,
                "aria-label": "Attach files",
                title: "Attach image, PDF, or text/code",
                children: /* @__PURE__ */ h.jsx(xg, {})
              }
            ),
            /* @__PURE__ */ h.jsx(
              "textarea",
              {
                ref: ie,
                className: "gcp-textarea",
                rows: 1,
                placeholder: "Message Graph Copilot…",
                value: m,
                onChange: (q) => g(q.target.value),
                onKeyDown: vo,
                onPaste: _t,
                disabled: v || !Ne,
                "aria-label": "Message input",
                "aria-disabled": Ne ? void 0 : "true"
              }
            ),
            v ? /* @__PURE__ */ h.jsx("button", { className: "gcp-stop-btn", onClick: _s, "aria-label": "Stop generation", title: "Stop", children: /* @__PURE__ */ h.jsx(Z_, {}) }) : /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-send-btn",
                onClick: At,
                disabled: !ta,
                "aria-label": "Send message",
                title: "Send",
                children: /* @__PURE__ */ h.jsx(J_, {})
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-composer-bar", children: [
            /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-context", children: yn.length > 0 ? /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: "gcp-effort",
                onKeyDown: (q) => {
                  q.key === "Escape" && N(!1);
                },
                children: [
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      className: `gcp-context-chip${_ ? " open" : ""}`,
                      onClick: () => N((q) => !q),
                      "aria-haspopup": "menu",
                      "aria-expanded": _,
                      "aria-label": "Model and reasoning effort",
                      title: "Adjust reasoning effort",
                      children: [
                        /* @__PURE__ */ h.jsx(tE, {}),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: ia || "model" }),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-effort", children: Xt || (jt == null ? void 0 : jt.defaultReasoningEffort) || "auto" })
                      ]
                    }
                  ),
                  _ && /* @__PURE__ */ h.jsxs("div", { className: "gcp-effort-menu", role: "menu", "aria-label": "Reasoning effort", children: [
                    /* @__PURE__ */ h.jsx("div", { className: "gcp-effort-menu-title", children: "Reasoning effort" }),
                    yn.map((q) => /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": Xt === q.effort,
                        className: `gcp-effort-item${Xt === q.effort ? " selected" : ""}`,
                        onClick: () => ra(q.effort),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-name", children: q.effort }),
                          q.description && /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-desc", children: q.description }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: Xt === q.effort && /* @__PURE__ */ h.jsx(Ag, {}) })
                        ]
                      },
                      q.effort
                    )),
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": Xt === "",
                        className: `gcp-effort-item${Xt === "" ? " selected" : ""}`,
                        onClick: () => ra(""),
                        children: [
                          /* @__PURE__ */ h.jsxs("span", { className: "gcp-effort-item-name", children: [
                            "model default",
                            jt != null && jt.defaultReasoningEffort ? ` (${jt.defaultReasoningEffort})` : ""
                          ] }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: Xt === "" && /* @__PURE__ */ h.jsx(Ag, {}) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ h.jsx("div", { className: "gcp-effort-menu-divider", role: "separator" }),
                    /* @__PURE__ */ h.jsx(
                      "button",
                      {
                        role: "menuitem",
                        className: "gcp-effort-item",
                        onClick: () => {
                          N(!1), f();
                        },
                        children: /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-name", children: "Change model…" })
                      }
                    )
                  ] })
                ]
              }
            ) : /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-context-chip",
                onClick: f,
                "aria-label": "Model settings",
                title: `Provider: ${aa} — open settings`,
                children: /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: ia || "set up model" })
              }
            ) }),
            v ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-runbar", role: "status", "aria-label": "Agent activity", children: [
              /* @__PURE__ */ h.jsx("span", { className: "gcp-runbar-pulse", "aria-hidden": "true" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-phase", children: [
                So,
                "…"
              ] }),
              J.length >= 2 && /* @__PURE__ */ h.jsx(S_, { series: J }),
              As > 0 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-step", children: [
                "step ",
                As
              ] }),
              R >= 1 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-time", children: [
                R,
                "s"
              ] })
            ] }) : /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-hint", "aria-hidden": "true", children: "Enter ↵ send · Shift+Enter newline" })
          ] }),
          !Ne && !v && /* @__PURE__ */ h.jsxs("div", { className: "gcp-not-ready-overlay", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-not-ready-label", children: "Configure a provider in Settings" }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-cta-btn",
                onClick: f,
                "aria-label": "Open settings to configure a provider",
                children: "Settings"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const iE = "Imported portable-study content passed SHA-256 integrity checking, which detects content changes but does not authenticate its author or evidence source. It is read-only and was not executed in this browser session.";
function ys(a, r) {
  return a < r ? -1 : a > r ? 1 : 0;
}
function rE(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.value]).sort(([r], [s]) => ys(r, s))
  );
}
function sE(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.canonicalKey]).sort(([r], [s]) => ys(r, s))
  );
}
function lE(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.source]).sort(([r], [s]) => ys(r, s))
  );
}
function oE(a, r) {
  if (r.metricKey !== void 0)
    return a.metrics.find((s) => s.canonicalKey === r.metricKey);
}
function cE(a, r) {
  const s = oE(a, r), l = a.status === "completed" ? void 0 : a.status === "cancelled" ? `Imported run was cancelled [${a.error.phase}/${a.error.code}]: ${a.error.message}` : `Imported run failed [${a.error.phase}/${a.error.code}]: ${a.error.message}`;
  return {
    repetition: a.repetition,
    // ExperimentSession has no cancelled run state. Preserve the distinction
    // in the error text while ensuring cancelled evidence never appears as a
    // successful observation.
    status: a.status === "completed" ? "completed" : "failed",
    durationMs: a.durationMs,
    ...s === void 0 ? {} : {
      metricKey: s.canonicalKey,
      metricValue: s.value,
      metricSource: s.source
    },
    observedMetrics: rE(a.metrics),
    ...a.metrics.length === 0 ? {} : {
      observedMetricIdentities: sE(a.metrics),
      observedMetricSources: lE(a.metrics)
    },
    ...l === void 0 ? {} : { error: l }
  };
}
function uE(a, r) {
  const s = r.filter((l) => l.variantId === a.id).sort((l, c) => l.repetition - c.repetition || ys(l.runKey, c.runKey)).map((l) => cE(l, a));
  return {
    id: a.id,
    label: a.label,
    status: a.status,
    ...a.metricKey === void 0 ? {} : { metricKey: a.metricKey },
    metricValues: [...a.metricValues],
    ...a.mean === void 0 ? {} : { mean: a.mean },
    ...a.stddev === void 0 ? {} : { stddev: a.stddev },
    ...a.confidenceInterval95 === void 0 ? {} : { confidenceInterval95: { ...a.confidenceInterval95 } },
    ...a.baselineComparison === void 0 ? {} : { baselineComparison: { ...a.baselineComparison } },
    runtimeMs: a.runtimeMs,
    observedMetrics: Object.fromEntries(
      a.observedMetrics.map(({ key: l, value: c }) => [l, c]).sort(([l], [c]) => ys(l, c))
    ),
    // Always supply an array, including an empty one. Omitting it would make
    // legacy export code synthesize attempts from aggregate metricValues.
    runs: s,
    ...a.operationSummary === void 0 ? {} : { operationSummary: [...a.operationSummary] },
    errors: [...a.errors]
  };
}
function dE(a) {
  return {
    title: a.title,
    evidence: a.evidence,
    nextStep: a.nextStep
  };
}
function fE(a) {
  const r = a.payload.provenance.facts.find((s) => s.key === "optimizer.plan" && s.status === "observed");
  if (!(!r || !Md(r.value)))
    return JSON.parse(JSON.stringify(r.value));
}
function pE(a) {
  const { payload: r } = a, { derived: s, spec: l } = r, c = fE(a);
  return {
    id: r.id,
    createdAt: r.createdAt,
    hypothesis: l.hypothesis,
    objective: { ...l.objective },
    repetitions: l.repetitions,
    status: s.status,
    variants: s.variants.map((d) => uE(d, r.runs)),
    ...c === void 0 ? {} : { search: c },
    ...s.baselineVariantId === void 0 ? {} : { baselineVariantId: s.baselineVariantId },
    ...s.winnerId === void 0 ? {} : { winnerId: s.winnerId },
    ...s.winnerLabel === void 0 ? {} : { winnerLabel: s.winnerLabel },
    ...s.appliedVariantId === void 0 ? {} : { appliedVariantId: s.appliedVariantId },
    ...s.applyConflict === void 0 ? {} : { applyConflict: s.applyConflict },
    insights: {
      summary: [...s.insights.summary],
      warnings: [...s.insights.warnings, iE],
      paperIdeas: s.insights.paperIdeas.map(dE)
    }
  };
}
function Ca(a) {
  return !!a && typeof a == "object" && !Array.isArray(a);
}
function mE(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function zy(a) {
  return Ca(a) && typeof a.$gcpSecretRef == "string";
}
function vs(a, r) {
  if (zy(a)) {
    const s = a.$gcpSecretRef;
    return mE(r.bindings, s) && typeof r.bindings[s] == "string" ? (r.resolved.add(s), r.bindings[s]) : (r.missing.add(s), "");
  }
  if (Array.isArray(a))
    return a.map((s) => vs(s, r));
  if (Ca(a)) {
    const s = /* @__PURE__ */ Object.create(null);
    for (const [l, c] of Object.entries(a))
      s[l] = vs(c, r);
    return s;
  }
  return a;
}
function od(a, r) {
  return vs(a, r);
}
function hE(a, r) {
  return {
    name: a.name ?? "",
    description: a.description ?? "",
    nodes: a.nodes.map((s) => ({
      id: s.id,
      type: s.type,
      position: { x: s.position.x, y: s.position.y },
      data: od(s.data, r)
    })),
    edges: a.edges.map((s) => ({
      id: s.id,
      source: s.source,
      target: s.target,
      sourceHandle: s.sourceHandle,
      targetHandle: s.targetHandle,
      ...s.type === void 0 ? {} : { type: s.type }
    })),
    presets: a.presets === void 0 ? [] : vs(a.presets, r),
    segmentGroups: a.segmentGroups === void 0 ? [] : vs(a.segmentGroups, r)
  };
}
function Ng(a, r) {
  return a.nodes.some((s) => s.id === r);
}
function Qi(a, r, s) {
  const l = r[s];
  return l !== void 0 && Ng(a, l) ? l : Ng(a, s) ? s : null;
}
function gE(a) {
  return encodeURIComponent(a);
}
function yE(a, r) {
  let s = a, l = 1;
  for (; r.has(s); )
    s = `${a}~${l}`, l += 1;
  return r.add(s), s;
}
function jg(a, r, s, l) {
  return yE(
    `graph-copilot:${gE(a)}:${r}:${s}`,
    l
  );
}
function Zn(a, r) {
  return { code: "INVALID_OPERATION", operationIndex: a, message: r };
}
function Qn(a, r, s) {
  const l = a[r];
  return typeof l == "string" ? l : Zn(s, `${r} must be a string`);
}
function Jn(a) {
  return typeof a != "string";
}
function vE(a, r, s, l, c, d, f) {
  if (!Ca(r) || typeof r.op != "string")
    return Zn(s, "operation must be an object with an op string");
  switch (r.op) {
    case "add_node": {
      const y = Qn(r, "node_type", s);
      if (Jn(y)) return y;
      if (r.ref !== void 0 && typeof r.ref != "string")
        return Zn(s, "ref must be a string when provided");
      if (r.params !== void 0 && !Ca(r.params))
        return Zn(s, "params must be an object when provided");
      if (r.position !== void 0 && (!Ca(r.position) || typeof r.position.x != "number" || !Number.isFinite(r.position.x) || typeof r.position.y != "number" || !Number.isFinite(r.position.y)))
        return Zn(s, "position must contain finite x and y numbers");
      const m = jg(l, "node", s, d), g = a.nodes.length, v = {
        x: 160 + g % 4 * 240,
        y: 120 + Math.floor(g / 4) * 160
      }, b = r.position;
      return a.nodes.push({
        id: m,
        type: y,
        position: b === void 0 ? v : { x: b.x, y: b.y },
        data: {
          params: r.params === void 0 ? {} : od(r.params, f)
        }
      }), typeof r.ref == "string" && (c[r.ref] = m), null;
    }
    case "connect": {
      const y = Qn(r, "source", s), m = Qn(r, "target", s), g = Qn(r, "source_handle", s), v = Qn(r, "target_handle", s);
      if (Jn(y)) return y;
      if (Jn(m)) return m;
      if (Jn(g)) return g;
      if (Jn(v)) return v;
      const b = Qi(a, c, y), _ = Qi(a, c, m);
      if (b === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: s,
          message: `connect: unknown source node '${y}'`
        };
      if (_ === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: s,
          message: `connect: unknown target node '${m}'`
        };
      const N = g === "trigger", D = N ? "__trigger" : v;
      return a.edges.some((x) => x.source === b && x.target === _ && x.sourceHandle === g && x.targetHandle === D) ? {
        code: "DUPLICATE_EDGE",
        operationIndex: s,
        message: "connect: edge already exists"
      } : (a.edges.push({
        id: jg(l, "edge", s, d),
        source: b,
        target: _,
        sourceHandle: g,
        targetHandle: D,
        type: N ? "trigger" : "data"
      }), null);
    }
    case "set_params": {
      const y = Qn(r, "node_id", s);
      if (Jn(y)) return y;
      if (!Ca(r.params))
        return Zn(s, "params must be an object");
      const m = Qi(a, c, y);
      if (m === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: s,
          message: `set_params: unknown node '${y}'`
        };
      const g = a.nodes.find((b) => b.id === m), v = Ca(g.data.params) ? g.data.params : {};
      return g.data = {
        ...g.data,
        params: {
          ...v,
          ...od(r.params, f)
        }
      }, null;
    }
    case "remove_node": {
      const y = Qn(r, "node_id", s);
      if (Jn(y)) return y;
      const m = Qi(a, c, y);
      return m === null ? {
        code: "UNKNOWN_NODE",
        operationIndex: s,
        message: `remove_node: unknown node '${y}'`
      } : (a.nodes = a.nodes.filter((g) => g.id !== m), a.edges = a.edges.filter((g) => g.source !== m && g.target !== m), null);
    }
    case "remove_edge": {
      const y = Qn(r, "source", s), m = Qn(r, "target", s);
      if (Jn(y)) return y;
      if (Jn(m)) return m;
      if (r.source_handle !== void 0 && typeof r.source_handle != "string")
        return Zn(s, "source_handle must be a string when provided");
      if (r.target_handle !== void 0 && typeof r.target_handle != "string")
        return Zn(s, "target_handle must be a string when provided");
      const g = Qi(a, c, y), v = Qi(a, c, m);
      if (g === null || v === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: s,
          message: "remove_edge: unknown source or target node"
        };
      const b = new Set(a.edges.filter((_) => _.source === g && _.target === v && (r.source_handle === void 0 || _.sourceHandle === r.source_handle) && (r.target_handle === void 0 || _.targetHandle === r.target_handle)).map((_) => _.id));
      return b.size === 0 ? {
        code: "UNKNOWN_EDGE",
        operationIndex: s,
        message: "remove_edge: no matching edge"
      } : (a.edges = a.edges.filter((_) => !b.has(_.id)), null);
    }
    case "clear_graph":
      a.nodes = [], a.edges = [];
      for (const y of Object.keys(c)) delete c[y];
      return null;
    case "auto_layout":
      return a.nodes.forEach((y, m) => {
        y.position = {
          x: 120 + m % 4 * 260,
          y: 100 + Math.floor(m / 4) * 180
        };
      }), null;
    default:
      return Zn(s, `unknown operation '${r.op}'`);
  }
}
function wg(a, r, s) {
  return {
    status: "error",
    variantId: a,
    variantLabel: s,
    graph: null,
    refs: {},
    missingSecretRefs: [],
    errors: [r],
    fidelity: "portable-operation-replay",
    fidelityWarnings: [],
    sensitive: !1
  };
}
function bE(a, r, s = {}) {
  const l = a.payload.spec.variants.find((b) => b.id === r);
  if (l === void 0)
    return wg(r, {
      code: "VARIANT_NOT_FOUND",
      message: `Unknown study variant '${r}'`
    });
  const c = {
    bindings: s,
    missing: /* @__PURE__ */ new Set(),
    resolved: /* @__PURE__ */ new Set()
  }, d = hE(a.payload.spec.baseline, c), f = {}, y = /* @__PURE__ */ new Set([
    ...d.nodes.map((b) => b.id),
    ...d.edges.map((b) => b.id)
  ]);
  for (let b = 0; b < l.operations.length; b += 1) {
    const _ = vE(
      d,
      l.operations[b],
      b,
      l.id,
      f,
      y,
      c
    );
    if (_ !== null) return wg(r, _, l.label);
  }
  const m = [...c.missing].sort(), g = l.operations.some((b) => b.op === "add_node"), v = g ? [
    "Portable study v1 does not include node-definition defaults. Added nodes contain only parameters recorded in the operation, so defaults used by the original runtime may be missing.",
    "Generated node and edge ids are deterministic portable ids and may differ from ids used by the original experiment execution."
  ] : [];
  return {
    status: m.length === 0 ? "ready" : "blocked",
    variantId: r,
    variantLabel: l.label,
    graph: d,
    refs: { ...f },
    missingSecretRefs: m,
    errors: [],
    fidelity: g ? "approximate-node-defaults" : "portable-operation-replay",
    fidelityWarnings: v,
    sensitive: c.resolved.size > 0
  };
}
function cd(a) {
  return zy(a) ? !0 : Array.isArray(a) ? a.some(cd) : Ca(a) && Object.values(a).some(cd);
}
function SE(a) {
  const r = {
    name: a.name,
    description: a.description,
    nodes: a.nodes,
    edges: a.edges,
    presets: a.presets,
    segmentGroups: a.segmentGroups
  };
  if (cd(r))
    throw new Error("Candidate graph still contains an unresolved SecretRef");
  return JSON.stringify(r, null, 2);
}
function Iu(a) {
  try {
    return jy(a);
  } catch {
    return [];
  }
}
function _E(a) {
  const r = new Date(a);
  return Number.isNaN(r.getTime()) ? "Date unavailable" : new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(r);
}
function Ji(a) {
  if (a === void 0 || !Number.isFinite(a)) return "—";
  const r = Math.abs(a);
  return r !== 0 && (r >= 1e5 || r < 1e-4) ? a.toExponential(3) : new Intl.NumberFormat(void 0, { maximumSignificantDigits: 6 }).format(a);
}
function $g(a) {
  return a === void 0 || !Number.isFinite(a) ? "—" : `${a > 0 ? "+" : ""}${Ji(a)}`;
}
function EE(a) {
  return !Number.isFinite(a) || a < 0 ? "—" : a < 1e3 ? `${Math.round(a)} ms` : `${(a / 1e3).toFixed(a < 1e4 ? 1 : 0)} s`;
}
function xE(a) {
  return [...a.variants ?? []].sort((r, s) => r.mean === void 0 ? s.mean === void 0 ? 0 : 1 : s.mean === void 0 ? -1 : a.objective.direction === "maximize" ? s.mean - r.mean : r.mean - s.mean);
}
function Mg(a) {
  var s, l;
  const r = [];
  return a.variants.forEach((c) => {
    if (c.runs) {
      r.push(...c.runs.map((d) => ({
        variantId: c.id,
        variantLabel: c.label,
        repetition: d.repetition,
        status: d.status,
        metricKey: d.metricKey,
        metricValue: d.metricValue,
        runtimeMs: d.durationMs,
        error: d.error
      })));
      return;
    }
    r.push(...c.metricValues.map((d, f) => ({
      variantId: c.id,
      variantLabel: c.label,
      repetition: f + 1,
      status: "completed",
      metricKey: c.metricKey,
      metricValue: d
    })));
  }), {
    id: a.id,
    createdAt: a.createdAt,
    hypothesis: a.hypothesis,
    objective: a.objective,
    baselineVariantId: a.baselineVariantId,
    warnings: ((s = a.insights) == null ? void 0 : s.warnings) ?? [],
    paperLeads: ((l = a.insights) == null ? void 0 : l.paperIdeas) ?? [],
    runs: r
  };
}
function Il(a, r, s) {
  const l = URL.createObjectURL(new Blob([s], { type: `${r};charset=utf-8` })), c = document.createElement("a");
  c.href = l, c.download = a, c.style.display = "none", document.body.appendChild(c), c.click(), c.remove(), URL.revokeObjectURL(l);
}
function Zr(a) {
  return a.replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "") || "graph-copilot-study";
}
function Ku({ status: a }) {
  return /* @__PURE__ */ h.jsx("span", { className: `gcp-lab-badge ${a}`, children: a });
}
function AE() {
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-empty", children: [
    /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-empty-mark", "aria-hidden": "true", children: /* @__PURE__ */ h.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", children: [
      /* @__PURE__ */ h.jsx("path", { d: "M9 3h6M10 3v5l-5.2 9a2.7 2.7 0 0 0 2.34 4h9.72a2.7 2.7 0 0 0 2.34-4L14 8V3", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ h.jsx("path", { d: "M7.5 15h9", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" })
    ] }) }),
    /* @__PURE__ */ h.jsx("h2", { children: "No experiment studies yet" }),
    /* @__PURE__ */ h.jsx("p", { children: "Ask the agent to compare graph variants against a numeric objective. Completed studies, ranked candidates, and research leads will appear here." }),
    /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-example", children: "“Compare three learning-rate variants, maximize validation accuracy, and run each three times.”" })
  ] });
}
function NE({ api: a }) {
  var re, K, Q, ue, ye, F, le, w, Y;
  const [r, s] = te.useState(() => Iu(a)), [l, c] = te.useState(() => {
    var C;
    return ((C = Iu(a)[0]) == null ? void 0 : C.id) ?? null;
  }), [d, f] = te.useState(null), [y, m] = te.useState(!1), [g, v] = te.useState(null), [b, _] = te.useState(null), [N, D] = te.useState(null), [x, V] = te.useState(!1), M = te.useRef(null);
  te.useEffect(() => {
    const C = () => {
      const P = Iu(a);
      s(P), c((J) => {
        var E;
        return J && P.some((L) => L.id === J) ? J : ((E = P[0]) == null ? void 0 : E.id) ?? null;
      });
    };
    return window.addEventListener(nd, C), () => window.removeEventListener(nd, C);
  }, [a]);
  const R = r.find((C) => C.id === l) ?? r[0], H = R && (d == null ? void 0 : d.payload.id) === R.id ? d : null, Z = te.useMemo(() => R ? xE(R) : [], [R]);
  te.useEffect(() => {
    let C = !0;
    return f(null), m(!1), R ? gS(a).entries.some((J) => J.id === R.id) ? (m(!0), eg(a, R.id).then((J) => {
      C && f(J);
    }).catch((J) => {
      C && v(`Portable study could not be verified: ${String(J)}`);
    }).finally(() => {
      C && m(!1);
    }), () => {
      C = !1;
    }) : () => {
      C = !1;
    } : () => {
      C = !1;
    };
  }, [a, R == null ? void 0 : R.id]);
  const X = async (C) => {
    var J;
    const P = (J = C.currentTarget.files) == null ? void 0 : J[0];
    if (C.currentTarget.value = "", !!P) {
      D(null), v(null);
      try {
        if (typeof P.size == "number" && P.size > ao)
          throw new Error(`Portable study exceeds the ${ao} byte import limit`);
        const E = await hS(await P.text());
        _(E);
      } catch (E) {
        _(null), D(`Import rejected before storage: ${String(E)}`);
      }
    }
  }, ae = async () => {
    if (!b) return;
    V(!0), D(null);
    let C = !1;
    try {
      if (jy(a).some((E) => E.id === b.payload.id))
        throw new Error(
          `A local Experiment Lab report already uses study id '${b.payload.id}'; import was refused to avoid overwriting local evidence.`
        );
      const P = pE(b), J = await by(a, b);
      C = !0, await wy(a, P, { rejectIfExists: !0 }), c(P.id), f(b), _(null), v(J.status === "unchanged" ? "This content-integrity-checked portable study was already stored; its read-only report was added." : "Portable study imported for read-only review. SHA-256 checks content changes only; it does not authenticate authorship. No graph was executed or applied.");
    } catch (P) {
      D(C ? `The content-integrity-checked bundle was stored, but its read-only Lab report could not be saved. Retry the import: ${String(P)}` : `Portable study was not imported: ${String(P)}`);
    } finally {
      V(!1);
    }
  }, B = async () => {
    if (R)
      try {
        const C = H ?? await eg(a, R.id);
        f(C), Il(
          `${Zr(R.id)}-portable-study.json`,
          "application/json",
          await _d(C)
        ), v("Portable study content integrity checked before export; SHA-256 does not authenticate authorship.");
      } catch (C) {
        v(`Portable study export failed: ${String(C)}`);
      }
  }, ce = (C, P) => {
    var J;
    if (H)
      try {
        const E = bE(H, C);
        if (E.status === "error" || !E.graph)
          throw new Error(((J = E.errors[0]) == null ? void 0 : J.message) ?? "Candidate could not be reconstructed");
        Il(
          `${Zr(H.payload.id)}-${Zr(P)}-graph.json`,
          "application/json",
          SE(E.graph)
        );
        const L = E.status === "blocked" ? `Candidate graph downloaded with ${E.missingSecretRefs.length} unresolved secret value(s) left blank.` : "Candidate graph materialized from the content-integrity-checked portable operation record and downloaded.";
        v(E.fidelityWarnings.length === 0 ? L : `${L} Fidelity warning: ${E.fidelityWarnings.join(" ")}`);
      } catch (E) {
        v(`Candidate graph export failed: ${String(E)}`);
      }
  };
  return /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab", "aria-labelledby": "gcp-lab-title", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-heading", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Autonomous evaluation" }),
        /* @__PURE__ */ h.jsx("h1", { id: "gcp-lab-title", children: "Experiment Lab" }),
        /* @__PURE__ */ h.jsx("p", { children: "Compare isolated graph candidates and turn results into defensible research directions." })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-heading-actions", children: [
        /* @__PURE__ */ h.jsxs("span", { className: "gcp-lab-count", "aria-label": `${r.length} experiment studies`, children: [
          r.length,
          " ",
          r.length === 1 ? "study" : "studies"
        ] }),
        /* @__PURE__ */ h.jsx("button", { type: "button", onClick: () => {
          var C;
          return (C = M.current) == null ? void 0 : C.click();
        }, children: "Import portable study" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            ref: M,
            type: "file",
            accept: "application/json,.json",
            "aria-label": "Choose portable study file",
            hidden: !0,
            onChange: (C) => {
              X(C);
            }
          }
        )
      ] })
    ] }),
    N && !b && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message error", role: "alert", children: N }),
    g && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message", role: "status", children: g }),
    r.length === 0 || !R ? /* @__PURE__ */ h.jsx(AE, {}) : /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-layout", children: [
      /* @__PURE__ */ h.jsx("aside", { className: "gcp-lab-studies", "aria-label": "Experiment studies", children: r.map((C) => {
        var P, J, E;
        return /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: `gcp-study-card${C.id === R.id ? " active" : ""}`,
            onClick: () => {
              v(null), c(C.id);
            },
            "aria-pressed": C.id === R.id,
            children: [
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-top", children: [
                /* @__PURE__ */ h.jsx(Ku, { status: C.status }),
                /* @__PURE__ */ h.jsx("time", { dateTime: C.createdAt, children: _E(C.createdAt) })
              ] }),
              /* @__PURE__ */ h.jsx("strong", { children: C.hypothesis || "Untitled study" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-meta", children: [
                ((P = C.objective) == null ? void 0 : P.direction) === "minimize" ? "↓" : "↑",
                " ",
                ((J = C.objective) == null ? void 0 : J.metric) || "metric",
                /* @__PURE__ */ h.jsx("span", { "aria-hidden": "true", children: " · " }),
                ((E = C.variants) == null ? void 0 : E.length) ?? 0,
                " candidates"
              ] })
            ]
          },
          C.id
        );
      }) }),
      /* @__PURE__ */ h.jsxs("article", { className: "gcp-lab-report", "aria-label": `Experiment report: ${R.hypothesis}`, children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-report-head", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Study hypothesis" }),
            /* @__PURE__ */ h.jsx("h2", { children: R.hypothesis })
          ] }),
          /* @__PURE__ */ h.jsx(Ku, { status: R.status })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-export-actions", "aria-label": "Export study evidence", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Il(
                `${Zr(R.id)}-runs.csv`,
                "text/csv",
                e1(Mg(R))
              ),
              children: "Export runs CSV"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Il(
                `${Zr(R.id)}-research.md`,
                "text/markdown",
                n1(Mg(R))
              ),
              children: "Export research brief"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              disabled: !H || y,
              title: H ? "Export the SHA-256 content-integrity-checked baseline, variants, provenance, and run records" : "No portable bundle is available for this legacy summary",
              onClick: () => {
                B();
              },
              children: y ? "Verifying portable study…" : "Export portable study"
            }
          )
        ] }),
        H && /* @__PURE__ */ h.jsxs("p", { className: "gcp-lab-integrity", children: [
          "Content integrity checked · SHA-256 ",
          H.integrity.contentSha256.slice(0, 12),
          "… · authorship unverified"
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-summary-grid", children: [
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card", "aria-labelledby": "gcp-study-objective", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon objective", "aria-hidden": "true", children: "◎" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-objective", children: "Study objective" }),
              /* @__PURE__ */ h.jsxs("strong", { children: [
                R.objective.direction === "maximize" ? "Maximize" : "Minimize",
                " ",
                R.objective.metric
              ] }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                R.repetitions,
                " ",
                R.repetitions === 1 ? "run" : "runs",
                " per candidate"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card winner", "aria-labelledby": "gcp-study-winner", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon winner", "aria-hidden": "true", children: "★" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-winner", children: "Winning candidate" }),
              /* @__PURE__ */ h.jsx("strong", { children: R.winnerLabel ?? "No winner resolved" }),
              /* @__PURE__ */ h.jsx("span", { children: R.winnerId ? `${Ji((re = R.variants.find((C) => C.id === R.winnerId)) == null ? void 0 : re.mean)} mean score` : "Check warnings for missing evidence" })
            ] })
          ] })
        ] }),
        R.search && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-search-plan", "aria-label": "Deterministic parameter search plan", children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Reproducible planner" }),
          /* @__PURE__ */ h.jsx("strong", { children: R.search.strategy === "grid" ? "Complete grid" : "Seeded random" }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            R.search.generatedCandidateCount,
            " generated candidates · ",
            " ",
            R.search.totalDomainAssignments,
            " domain assignments · ",
            " ",
            R.search.totalExecutionCount,
            " executions",
            R.search.plannerSeed === void 0 ? "" : ` · planner seed ${R.search.plannerSeed} (${R.search.prngVersion})`
          ] }),
          /* @__PURE__ */ h.jsx("small", { children: R.search.seedDescription })
        ] }),
        ((Q = (K = R.insights) == null ? void 0 : K.summary) == null ? void 0 : Q.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-findings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-findings", children: "Key findings" }) }),
          /* @__PURE__ */ h.jsx("ul", { className: "gcp-lab-findings", children: R.insights.summary.map((C, P) => /* @__PURE__ */ h.jsx("li", { children: C }, `${P}-${C}`)) })
        ] }),
        /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-candidate-leaderboard", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-candidate-leaderboard", children: "Candidate leaderboard" }),
            /* @__PURE__ */ h.jsx("span", { children: R.objective.direction === "maximize" ? "Higher is better" : "Lower is better" })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "gcp-leaderboard-wrap", children: /* @__PURE__ */ h.jsxs("table", { className: "gcp-leaderboard", children: [
            /* @__PURE__ */ h.jsx("thead", { children: /* @__PURE__ */ h.jsxs("tr", { children: [
              /* @__PURE__ */ h.jsx("th", { scope: "col", children: "Rank" }),
              /* @__PURE__ */ h.jsx("th", { scope: "col", children: "Candidate" }),
              /* @__PURE__ */ h.jsx("th", { scope: "col", children: "Mean" }),
              /* @__PURE__ */ h.jsx("th", { scope: "col", children: "Variation" }),
              /* @__PURE__ */ h.jsx("th", { scope: "col", children: "Runs" }),
              /* @__PURE__ */ h.jsx("th", { scope: "col", children: "Runtime" }),
              /* @__PURE__ */ h.jsx("th", { scope: "col", children: "Graph" })
            ] }) }),
            /* @__PURE__ */ h.jsx("tbody", { children: Z.map((C, P) => {
              var E, L;
              const J = C.id === R.winnerId;
              return /* @__PURE__ */ h.jsxs("tr", { className: J ? "winner" : void 0, children: [
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx("span", { className: "gcp-rank", children: C.mean === void 0 ? "—" : P + 1 }) }),
                /* @__PURE__ */ h.jsxs("td", { children: [
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-candidate-name", children: [
                    /* @__PURE__ */ h.jsx("strong", { children: C.label }),
                    J && /* @__PURE__ */ h.jsx("span", { className: "gcp-winner-tag", children: "Winner" }),
                    C.status !== "completed" && /* @__PURE__ */ h.jsx(Ku, { status: C.status })
                  ] }),
                  C.operationSummary && C.operationSummary.length > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-operations", children: C.operationSummary.join(" · ") }),
                  ((E = C.errors) == null ? void 0 : E.length) > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-error", children: C.errors[0] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: Ji(C.mean) }),
                  C.baselineComparison && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "improvement ",
                    $g(C.baselineComparison.objectiveImprovement),
                    C.baselineComparison.hedgesG === void 0 ? "" : ` · g ${$g(C.baselineComparison.hedgesG)}`
                  ] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: C.stddev === void 0 ? "—" : `± ${Ji(C.stddev)}` }),
                  C.confidenceInterval95 && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "95% CI [",
                    Ji(C.confidenceInterval95.lower),
                    ", ",
                    Ji(C.confidenceInterval95.upper),
                    "]"
                  ] })
                ] }),
                /* @__PURE__ */ h.jsx("td", { children: ((L = C.metricValues) == null ? void 0 : L.length) ?? 0 }),
                /* @__PURE__ */ h.jsx("td", { children: EE(C.runtimeMs) }),
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    type: "button",
                    className: "gcp-candidate-download",
                    disabled: !H,
                    title: H ? "Materialize a graph JSON without changing the canvas; recorded fidelity warnings will be shown" : "This legacy summary has no portable candidate specification",
                    onClick: () => ce(C.id, C.label),
                    children: "Download"
                  }
                ) })
              ] }, C.id);
            }) })
          ] }) })
        ] }),
        (((ye = (ue = R.insights) == null ? void 0 : ue.warnings) == null ? void 0 : ye.length) > 0 || R.applyConflict) && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-warnings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-warnings", children: "Evidence warnings" }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-warnings", children: [
            R.applyConflict && /* @__PURE__ */ h.jsx("p", { role: "alert", children: R.applyConflict }),
            (le = (F = R.insights) == null ? void 0 : F.warnings) == null ? void 0 : le.map((C, P) => /* @__PURE__ */ h.jsx("p", { role: "alert", children: C }, `${P}-${C}`))
          ] })
        ] }),
        ((Y = (w = R.insights) == null ? void 0 : w.paperIdeas) == null ? void 0 : Y.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-paper-ideas", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-paper-ideas", children: "Paper ideas" }),
            /* @__PURE__ */ h.jsx("span", { children: "Research leads, not final claims" })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "gcp-paper-grid", children: R.insights.paperIdeas.map((C, P) => /* @__PURE__ */ h.jsxs("article", { className: "gcp-paper-card", children: [
            /* @__PURE__ */ h.jsxs("span", { className: "gcp-paper-index", children: [
              "0",
              P + 1
            ] }),
            /* @__PURE__ */ h.jsx("h4", { children: C.title }),
            /* @__PURE__ */ h.jsxs("dl", { children: [
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("dt", { children: "Evidence" }),
                /* @__PURE__ */ h.jsx("dd", { children: C.evidence })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("dt", { children: "Next step" }),
                /* @__PURE__ */ h.jsx("dd", { children: C.nextStep })
              ] })
            ] })
          ] }, `${P}-${C.title}`)) })
        ] })
      ] })
    ] }),
    b && /* @__PURE__ */ h.jsx("div", { className: "gcp-study-import-backdrop", children: /* @__PURE__ */ h.jsxs(
      "section",
      {
        className: "gcp-study-import-dialog",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "gcp-study-import-title",
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Content-integrity check passed · authorship unverified" }),
          /* @__PURE__ */ h.jsx("h2", { id: "gcp-study-import-title", children: "Import portable study?" }),
          /* @__PURE__ */ h.jsx("p", { children: b.payload.spec.hypothesis }),
          /* @__PURE__ */ h.jsxs("dl", { children: [
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("dt", { children: "Study ID" }),
              /* @__PURE__ */ h.jsx("dd", { children: b.payload.id })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("dt", { children: "Candidates" }),
              /* @__PURE__ */ h.jsx("dd", { children: b.payload.spec.variants.length })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("dt", { children: "Run records" }),
              /* @__PURE__ */ h.jsx("dd", { children: b.payload.runs.length })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("dt", { children: "Secrets required" }),
              /* @__PURE__ */ h.jsx("dd", { children: b.payload.redactionReport.secretRequirements.length })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("dt", { children: "SHA-256" }),
              /* @__PURE__ */ h.jsx("dd", { children: /* @__PURE__ */ h.jsx("code", { children: b.integrity.contentSha256 }) })
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "gcp-study-import-safety", children: "SHA-256 detects content changes only; it does not authenticate the author or evidence source. Import stores the bundle for read-only review and does not execute, replay, apply, or open any graph." }),
          N && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message error", role: "alert", children: N }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-study-import-actions", children: [
            /* @__PURE__ */ h.jsx("button", { type: "button", onClick: () => _(null), disabled: x, children: "Cancel" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "primary", onClick: () => {
              ae();
            }, disabled: x, children: x ? "Importing…" : "Import read-only" })
          ] })
        ]
      }
    ) })
  ] });
}
function jE(a) {
  const r = Date.now() - a, s = Math.floor(r / 1e3);
  if (s < 60) return "just now";
  const l = Math.floor(s / 60);
  if (l < 60) return `${l}m ago`;
  const c = Math.floor(l / 60);
  if (c < 24) return `${c}h ago`;
  const d = Math.floor(c / 24);
  return d < 7 ? `${d}d ago` : `${Math.floor(d / 7)}w ago`;
}
function wE({ api: a, activeId: r, onResume: s, onNew: l }) {
  const [c, d] = te.useState(
    () => Qu(a)
  ), [f, y] = te.useState(null), m = (v, b) => {
    v.stopPropagation(), f === b ? (A0(a, b), d(Qu(a)), f === b && y(null)) : y(b);
  }, g = () => {
    y(null);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-history", children: [
    /* @__PURE__ */ h.jsx("div", { className: "gcp-history-top", children: /* @__PURE__ */ h.jsx(
      "button",
      {
        className: "gcp-new-btn",
        onClick: l,
        "aria-label": "Start new conversation",
        children: "+ New chat"
      }
    ) }),
    c.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "gcp-history-empty", children: "No conversations yet" }) : /* @__PURE__ */ h.jsx("div", { className: "gcp-history-list", onClick: g, children: c.map((v) => /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: `gcp-history-item${v.id === r ? " active" : ""}`,
        onClick: () => s(v),
        role: "button",
        tabIndex: 0,
        "aria-label": `Resume conversation: ${v.title || "(untitled)"}`,
        onKeyDown: (b) => {
          (b.key === "Enter" || b.key === " ") && (b.preventDefault(), s(v));
        },
        children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-history-info", children: [
            /* @__PURE__ */ h.jsx("div", { className: "gcp-history-title", children: v.title || "(untitled)" }),
            /* @__PURE__ */ h.jsxs("div", { className: "gcp-history-meta", children: [
              jE(v.updatedAt),
              " · ",
              v.provider,
              "/",
              v.model || "—",
              v.reasoningEffort ? ` · ${v.reasoningEffort} effort` : ""
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `gcp-history-delete${f === v.id ? " confirm" : ""}`,
              onClick: (b) => m(b, v.id),
              "aria-label": f === v.id ? `Confirm delete "${v.title || "untitled"}"` : `Delete "${v.title || "untitled"}"`,
              title: f === v.id ? "Click again to confirm" : "Delete",
              children: "✕"
            }
          )
        ]
      },
      v.id
    )) })
  ] });
}
let bs = 0, ud = 0, ts = null;
function Fr() {
  return bs += 1, ud += 1, ts = null, bs;
}
function Kl(a) {
  return a === bs;
}
async function dd(a) {
  const r = bs;
  let s = ts;
  (s === null || s.generation !== r) && (s = {
    generation: r,
    sequence: ++ud,
    promise: Promise.resolve().then(a)
  }, ts = s);
  try {
    const l = await s.promise;
    return s.generation === bs && s.sequence === ud ? l : null;
  } finally {
    ts === s && (ts = null);
  }
}
const Tg = {
  openai: "OpenAI API",
  "openai-codex": "OpenAI Codex (ChatGPT)",
  openrouter: "OpenRouter",
  anthropic: "Claude API",
  custom: "Custom (OpenAI-compatible)"
}, $E = [
  "openai",
  "openrouter",
  "anthropic",
  "custom"
], ME = 2e3, TE = 300 * 1e3, Wr = {
  reasoningEffort: !1,
  richModelCatalog: !1
};
function OE({
  value: a,
  onBlur: r,
  placeholder: s,
  "aria-label": l
}) {
  const [c, d] = te.useState(!1), [f, y] = te.useState(a);
  return te.useEffect(() => {
    y(a);
  }, [a]), /* @__PURE__ */ h.jsxs("div", { className: "gcp-key-row", children: [
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: c ? "text" : "password",
        className: "gcp-input",
        value: f,
        onChange: (m) => y(m.target.value),
        onBlur: () => r(f),
        placeholder: s ?? "API key",
        "aria-label": l,
        autoComplete: "off",
        spellCheck: !1
      }
    ),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        className: "gcp-show-btn",
        onClick: () => d((m) => !m),
        "aria-label": c ? "Hide key" : "Show key",
        title: c ? "Hide" : "Show",
        children: c ? "Hide" : "Show"
      }
    )
  ] });
}
function CE({
  api: a,
  settings: r,
  codexLoggedIn: s,
  codexEmail: l,
  onCodexStatusChange: c,
  onChange: d
}) {
  var gn, ln, ta;
  const f = r.provider, y = f === "openai" ? r.apiKeys.openai : f === "openrouter" ? r.apiKeys.openrouter : f === "anthropic" ? r.apiKeys.anthropic : f === "custom" ? r.apiKeys.custom : void 0, m = f === "custom" ? r.customBaseUrl : void 0, g = Xl(
    f,
    f === "openai-codex" ? l ?? (s ? "active-codex-session" : "") : y,
    m
  ), [v, b] = te.useState({ provider: f, identity: g, models: [] }), [_, N] = te.useState(!1), [D, x] = te.useState(null), V = te.useRef(0), M = te.useRef(r), R = te.useRef(d), H = te.useRef(c), Z = te.useRef(s), X = te.useRef(l), ae = te.useRef(s), [B, ce] = te.useState(null), [re, K] = te.useState(!1), Q = te.useRef(null), ue = te.useRef(0);
  M.current = r, R.current = d, H.current = c, Z.current = s, X.current = l;
  const ye = r.models[f] ?? "", F = zg(
    f,
    v.provider === f && v.identity === g ? v.models : [],
    ye
  ), le = Fl(f, ye, F), Y = ((ln = (gn = r.providerCapabilities) == null ? void 0 : gn[f]) == null ? void 0 : ln.reasoningEffort) === !0 ? (le == null ? void 0 : le.reasoningEfforts) ?? [] : [];
  te.useEffect(() => () => {
    Q.current !== null && (clearInterval(Q.current), Q.current = null);
  }, []), te.useEffect(() => {
    let ne = !0;
    return f === "openai-codex" && dd(() => Ju(a)).then((me) => {
      if (ne && me !== null) {
        const Ke = me.status === "logged_in", rt = Ke ? me.email ?? null : null;
        (Ke !== Z.current || rt !== X.current) && (Pr("openai-codex"), ie("openai-codex", [], Wr)), H.current(Ke, rt);
      }
    }).catch(() => {
    }), () => {
      ne = !1;
    };
  }, [a, f]), te.useEffect(() => {
    ae.current && !s && Pr("openai-codex"), ae.current = s;
  }, [s]);
  function C(ne) {
    const me = { ...M.current, ...ne };
    M.current = me, R.current(me);
  }
  function P(ne) {
    var Pe, li;
    const me = M.current, Ke = { ...me.reasoningEfforts }, rt = Ke[f], xt = Fl(f, ne, F), _t = !!((Pe = xt == null ? void 0 : xt.reasoningEfforts) != null && Pe.some(
      (na) => na.effort === rt
    ));
    rt && (xt != null && xt.reasoningEfforts) && !_t && delete Ke[f];
    const Mt = (li = me.providerCapabilities) == null ? void 0 : li[f], on = Mt ? {
      reasoningEffort: Mt.reasoningEffort,
      richModelCatalog: Mt.richModelCatalog,
      ...rt && _t ? { reasoningModel: ne } : {}
    } : void 0;
    C({
      models: { ...me.models, [f]: ne },
      reasoningEfforts: Ke,
      ...on ? {
        providerCapabilities: {
          ...me.providerCapabilities,
          [f]: on
        }
      } : {}
    });
  }
  function J(ne) {
    const me = Vg(
      M.current,
      f,
      ne
    );
    M.current = me, R.current(me);
  }
  function E(ne, me) {
    const Ke = M.current, rt = { ...Ke.providerCapabilities };
    delete rt[ne], C({
      apiKeys: { ...Ke.apiKeys, [ne]: me },
      providerCapabilities: rt
    });
  }
  function L(ne) {
    return ne === "openai" ? M.current.apiKeys.openai : ne === "openrouter" ? M.current.apiKeys.openrouter : ne === "anthropic" ? M.current.apiKeys.anthropic : ne === "custom" ? M.current.apiKeys.custom : void 0;
  }
  function W(ne) {
    return Xl(
      ne,
      ne === "openai-codex" ? X.current ?? (Z.current ? "active-codex-session" : "") : L(ne),
      ne === "custom" ? M.current.customBaseUrl : void 0
    );
  }
  function ie(ne, me, Ke, rt) {
    const xt = M.current, _t = Yu(
      xt,
      ne,
      me,
      Ke,
      rt
    );
    _t !== xt && (M.current = _t, R.current(_t));
  }
  async function ge(ne, me = f) {
    const Ke = L(me), rt = me === "custom" ? M.current.customBaseUrl : void 0, xt = me === "openai-codex" ? Z.current : me === "custom" ? !!rt : !!Ke, _t = W(me), Mt = ++V.current;
    if (!xt) {
      N(!1), x(null), b({ provider: me, identity: _t, models: [] }), ie(me, [], Wr);
      return;
    }
    const on = _t;
    if (!ne) {
      const Pe = Rg(on);
      if (Pe) {
        if (V.current !== Mt) return;
        b({ provider: me, identity: _t, models: Pe.models }), ie(
          me,
          Pe.models,
          Pe.capabilities,
          Pe.source
        ), x(null), N(!1);
        return;
      }
    }
    N(!0), x(null);
    try {
      const Pe = await Kg(
        a,
        me,
        Ke,
        rt
      );
      if (V.current !== Mt) return;
      Lg(on, Pe), b({ provider: me, identity: _t, models: Pe.models }), ie(
        me,
        Pe.models,
        Pe.capabilities,
        Pe.source
      );
    } catch (Pe) {
      if (V.current !== Mt) return;
      x(String(Pe));
    } finally {
      V.current === Mt && N(!1);
    }
  }
  te.useEffect(() => {
    if (++V.current, N(!1), x(null), b(
      (ne) => ne.provider === f && ne.identity === g ? ne : { provider: f, identity: g, models: [] }
    ), f === "custom") {
      ie(f, [], Wr);
      return;
    }
    return ge(!1, f), () => {
      ++V.current;
    };
  }, [a, f, y, m, s, l]);
  function Se() {
    ge(!0);
  }
  async function de() {
    const ne = Fr();
    try {
      const me = await U0(a);
      if (!Kl(ne)) return;
      window.open(me, "_blank"), K(!0), ue.current = Date.now(), Q.current = setInterval(async () => {
        try {
          const Ke = await dd(() => Ju(a));
          Ke !== null && Kl(ne) && Ke.status === "logged_in" && (Fr(), Pr("openai-codex"), ie("openai-codex", [], Wr), H.current(!0, Ke.email ?? null), K(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null));
        } catch {
        }
        if (Date.now() - ue.current > TE) {
          if (!Kl(ne)) return;
          Fr(), K(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null);
        }
      }, ME);
    } catch (me) {
      ce(String(me));
    }
  }
  async function We() {
    const ne = Fr();
    K(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null);
    try {
      if (await V0(a), !Kl(ne)) return;
      Fr(), Pr("openai-codex"), ++V.current, b({
        provider: "openai-codex",
        identity: Xl("openai-codex"),
        models: []
      }), x(null), ie("openai-codex", [], Wr), H.current(!1, null);
    } catch (me) {
      ce(String(me));
    }
  }
  const Ne = "gcp-model-datalist";
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-settings", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-provider-select", children: "Provider" }),
      /* @__PURE__ */ h.jsx(
        "select",
        {
          id: "gcp-provider-select",
          className: "gcp-select",
          value: f,
          onChange: (ne) => C({ provider: ne.target.value }),
          "aria-label": "Select LLM provider",
          children: Object.keys(Tg).map((ne) => /* @__PURE__ */ h.jsx("option", { value: ne, children: Tg[ne] }, ne))
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-model-input", children: "Model" }),
      /* @__PURE__ */ h.jsxs("div", { className: "gcp-model-row", children: [
        /* @__PURE__ */ h.jsx(
          "input",
          {
            id: "gcp-model-input",
            className: "gcp-input",
            list: Ne,
            value: r.models[f] ?? "",
            onChange: (ne) => P(ne.target.value),
            placeholder: "model id",
            "aria-label": "Model ID",
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ h.jsx("datalist", { id: Ne, children: F.map((ne) => /* @__PURE__ */ h.jsx("option", { value: ne.id, label: ne.label }, ne.id)) }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            className: "gcp-load-btn",
            onClick: Se,
            disabled: _,
            "aria-label": "Load available models from provider",
            title: "Refresh model list",
            children: _ ? "Refreshing..." : "Refresh"
          }
        )
      ] }),
      D && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: D })
    ] }),
    Y.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-reasoning-effort", children: "Reasoning effort" }),
      /* @__PURE__ */ h.jsxs(
        "select",
        {
          id: "gcp-reasoning-effort",
          className: "gcp-select",
          value: ((ta = r.reasoningEfforts) == null ? void 0 : ta[f]) ?? "",
          onChange: (ne) => J(ne.target.value),
          "aria-label": "Reasoning effort",
          children: [
            /* @__PURE__ */ h.jsxs("option", { value: "", children: [
              "Model default",
              le != null && le.defaultReasoningEffort ? ` (${le.defaultReasoningEffort})` : ""
            ] }),
            Y.map((ne) => /* @__PURE__ */ h.jsx(
              "option",
              {
                value: ne.effort,
                title: ne.description,
                children: ne.effort
              },
              ne.effort
            ))
          ]
        }
      )
    ] }),
    f !== "openai-codex" && $E.filter((ne) => ne === f || f === "custom" && ne === "custom").map(
      (ne) => ne === f ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
        /* @__PURE__ */ h.jsx("label", { className: "gcp-label", children: ne === "openai" ? "OpenAI API Key" : ne === "anthropic" ? "Anthropic API Key" : ne === "openrouter" ? "OpenRouter API Key" : "Custom API Key" }),
        /* @__PURE__ */ h.jsx(
          OE,
          {
            value: r.apiKeys[ne] ?? "",
            onBlur: (me) => E(ne, me),
            placeholder: ne === "custom" ? "API key (optional)" : "sk-...",
            "aria-label": ne === "openai" ? "OpenAI API key" : ne === "anthropic" ? "Anthropic API key" : ne === "openrouter" ? "OpenRouter API key" : "Custom API key"
          }
        )
      ] }, ne) : null
    ),
    f === "custom" && /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-base-url", children: "Base URL" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "gcp-base-url",
          className: "gcp-input",
          type: "url",
          value: r.customBaseUrl,
          onChange: (ne) => C({ customBaseUrl: ne.target.value }),
          placeholder: "http://127.0.0.1:11434/v1",
          "aria-label": "Custom API base URL",
          spellCheck: !1
        }
      )
    ] }),
    f === "openai-codex" && /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", children: "ChatGPT Codex Auth" }),
      /* @__PURE__ */ h.jsxs("div", { className: "gcp-codex-section", children: [
        /* @__PURE__ */ h.jsx(
          "div",
          {
            className: `gcp-codex-status${s ? " signed-in" : re ? " pending" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: s ? `Signed in${l ? ` as ${l}` : ""}` : re ? "Sign-in pending... (waiting for browser auth)" : "Not signed in"
          }
        ),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-codex-btns", children: [
          !s && /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "gcp-codex-btn",
              onClick: de,
              disabled: re,
              "aria-label": "Sign in with ChatGPT Codex",
              children: re ? "Waiting..." : "Sign in"
            }
          ),
          s && /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "gcp-codex-btn danger",
              onClick: We,
              "aria-label": "Sign out from ChatGPT Codex",
              children: "Sign out"
            }
          )
        ] }),
        B && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: B })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "gcp-footnote", children: "Keys are stored in this browser's localStorage and sent only to your local CodefyUI backend, which forwards them to the selected provider." })
  ] });
}
function DE() {
  return /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }) });
}
function zE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M9 3h6M10 3v5l-5.2 9a2.7 2.7 0 0 0 2.34 4h9.72a2.7 2.7 0 0 0 2.34-4L14 8V3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M7.5 15h9", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function RE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function LE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function UE({ expanded: a }) {
  return a ? /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function VE() {
  return /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "m6 6 12 12M18 6 6 18", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round" }) });
}
function Og(a) {
  var r, s;
  try {
    const l = (s = (r = a.graph) == null ? void 0 : r.getGraph) == null ? void 0 : s.call(r);
    return l ? {
      nodes: Array.isArray(l.nodes) ? l.nodes.length : 0,
      edges: Array.isArray(l.edges) ? l.edges.length : 0,
      available: !0
    } : { nodes: 0, edges: 0, available: !1 };
  } catch {
    return { nodes: 0, edges: 0, available: !1 };
  }
}
function BE({
  api: a,
  settings: r,
  codexLoggedIn: s,
  codexEmail: l,
  conversation: c,
  onConversationChange: d,
  onSettingsChange: f,
  onCodexStatusChange: y,
  onNewConversation: m,
  onResumeConversation: g,
  onClose: v
}) {
  const [b, _] = te.useState("chat"), [N, D] = te.useState("compact"), [x, V] = te.useState(() => Og(a));
  te.useEffect(() => {
    var ce, re;
    const B = () => V(Og(a));
    B();
    try {
      return (re = (ce = a.graph) == null ? void 0 : ce.onGraphChanged) == null ? void 0 : re.call(ce, B);
    } catch {
      return;
    }
  }, [a]);
  const M = (B) => {
    g(B), _("chat");
  }, R = () => {
    m(), _("chat");
  }, H = (B) => {
    _((ce) => ce === B && B !== "chat" ? "chat" : B);
  }, Z = r.models[r.provider] ?? "", X = Number.isFinite(a.apiVersion) ? `API v${a.apiVersion}` : "API legacy", ae = [
    { id: "chat", label: "Chat", ariaLabel: "Agent chat", icon: /* @__PURE__ */ h.jsx(DE, {}) },
    { id: "experiments", label: "Lab", ariaLabel: "Experiments lab", icon: /* @__PURE__ */ h.jsx(zE, {}) },
    { id: "history", label: "History", ariaLabel: "Conversation history", icon: /* @__PURE__ */ h.jsx(RE, {}) },
    { id: "settings", label: "Settings", ariaLabel: "Settings", icon: /* @__PURE__ */ h.jsx(LE, {}) }
  ];
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `gcp-window gcp-window--${N}`,
      role: "dialog",
      "aria-label": "Graph Copilot agent workbench",
      "data-panel-mode": N,
      children: [
        /* @__PURE__ */ h.jsxs("header", { className: "gcp-workbench-header", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-header-main", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "gcp-brand", children: [
              /* @__PURE__ */ h.jsx("span", { className: "gcp-header-mark", "aria-hidden": "true", children: "✦" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-brand-copy", children: [
                /* @__PURE__ */ h.jsx("strong", { children: "Graph Copilot" }),
                /* @__PURE__ */ h.jsx("span", { children: "Agent workbench" })
              ] })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "gcp-header-actions", children: [
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  className: "gcp-model-chip",
                  onClick: () => _("settings"),
                  "aria-label": "Active model — open settings",
                  title: `Provider: ${r.provider}${Z ? ` · ${Z}` : ""} — click to change`,
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-model-dot", "aria-hidden": "true" }),
                    Z || "Set up model"
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "gcp-icon-btn",
                  onClick: () => D((B) => B === "compact" ? "expanded" : "compact"),
                  "aria-label": N === "compact" ? "Expand panel" : "Use compact panel",
                  title: N === "compact" ? "Expand workspace" : "Compact workspace",
                  children: /* @__PURE__ */ h.jsx(UE, { expanded: N === "expanded" })
                }
              ),
              /* @__PURE__ */ h.jsx("button", { className: "gcp-icon-btn", onClick: v, "aria-label": "Close panel", title: "Close", children: /* @__PURE__ */ h.jsx(VE, {}) })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-context-bar", "aria-label": "Current graph context", children: [
            /* @__PURE__ */ h.jsx("span", { className: `gcp-live-indicator${x.available ? " online" : ""}`, "aria-hidden": "true" }),
            /* @__PURE__ */ h.jsx("span", { className: "gcp-context-name", children: "Current graph" }),
            /* @__PURE__ */ h.jsxs("span", { className: "gcp-context-stat", children: [
              /* @__PURE__ */ h.jsx("strong", { children: x.nodes }),
              " nodes"
            ] }),
            /* @__PURE__ */ h.jsxs("span", { className: "gcp-context-stat", children: [
              /* @__PURE__ */ h.jsx("strong", { children: x.edges }),
              " edges"
            ] }),
            /* @__PURE__ */ h.jsx("span", { className: "gcp-context-api", children: X })
          ] }),
          /* @__PURE__ */ h.jsx("nav", { className: "gcp-workbench-nav", "aria-label": "Agent workbench views", children: ae.map((B) => /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: `gcp-nav-btn${b === B.id ? " active" : ""}`,
              onClick: () => H(B.id),
              "aria-label": B.ariaLabel,
              "aria-current": b === B.id ? "page" : void 0,
              children: [
                B.icon,
                /* @__PURE__ */ h.jsx("span", { children: B.label })
              ]
            },
            B.id
          )) })
        ] }),
        /* @__PURE__ */ h.jsxs("main", { className: "gcp-view", children: [
          b === "chat" && /* @__PURE__ */ h.jsx(
            aE,
            {
              api: a,
              settings: r,
              codexLoggedIn: s,
              conversation: c,
              onConversationChange: d,
              onSettingsChange: f,
              onOpenSettings: () => _("settings"),
              onOpenHistory: () => _("history")
            }
          ),
          b === "experiments" && /* @__PURE__ */ h.jsx(NE, { api: a }),
          b === "history" && /* @__PURE__ */ h.jsx(wE, { api: a, activeId: c.id, onResume: M, onNew: R }),
          b === "settings" && /* @__PURE__ */ h.jsx(
            CE,
            {
              api: a,
              settings: r,
              codexLoggedIn: s,
              codexEmail: l,
              onCodexStatusChange: y,
              onChange: f
            }
          )
        ] })
      ]
    }
  );
}
function HE({ api: a }) {
  const [r, s] = te.useState(!1), [l, c] = te.useState(() => _0(a)), [d, f] = te.useState(!1), [y, m] = te.useState(null), [g, v] = te.useState(
    () => Rh(
      l.provider,
      l.models[l.provider] ?? "",
      Wl(l)
    )
  );
  te.useEffect(() => {
    E0(a, l);
  }, [a, l]), te.useEffect(() => {
    if (l.provider !== "openai-codex") return;
    let x = !1;
    return dd(() => Ju(a)).then((V) => {
      if (x || V === null) return;
      const M = V.status === "logged_in", R = M ? V.email ?? null : null;
      (M !== d || R !== y) && c((H) => Yu(
        H,
        "openai-codex",
        [],
        { reasoningEffort: !1, richModelCatalog: !1 }
      )), M || Pr("openai-codex"), f(M), m(R);
    }).catch(() => {
    }), () => {
      x = !0;
    };
  }, [a, l.provider]), te.useEffect(() => {
    const x = l.provider;
    if (x === "custom") return;
    const V = x === "openai" ? l.apiKeys.openai : x === "openrouter" ? l.apiKeys.openrouter : x === "anthropic" ? l.apiKeys.anthropic : void 0;
    if (!(x === "openai-codex" ? d : !!V)) return;
    const R = Xl(
      x,
      x === "openai-codex" ? y ?? "active-codex-session" : V
    );
    let H = !1;
    const Z = (ae) => {
      H || c((B) => {
        if (B.provider !== x) return B;
        const ce = x === "openai" ? B.apiKeys.openai : x === "openrouter" ? B.apiKeys.openrouter : x === "anthropic" ? B.apiKeys.anthropic : void 0;
        return x !== "openai-codex" && ce !== V ? B : Yu(
          B,
          x,
          ae.models,
          ae.capabilities,
          ae.source
        );
      });
    }, X = Rg(R);
    return X ? (Z(X), () => {
      H = !0;
    }) : (Kg(a, x, V).then((ae) => {
      H || (Lg(R, ae), Z(ae));
    }).catch(() => {
    }), () => {
      H = !0;
    });
  }, [
    a,
    l.provider,
    l.apiKeys.openai,
    l.apiKeys.openrouter,
    l.apiKeys.anthropic,
    d,
    y
  ]);
  const b = (x) => {
    c(x);
  }, _ = (x, V) => {
    f(x), m(V);
  }, N = () => {
    v(
      Rh(
        l.provider,
        l.models[l.provider] ?? "",
        Wl(l)
      )
    );
  }, D = (x) => {
    v(x);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-root", children: [
    /* @__PURE__ */ h.jsx(w0, { onClick: () => s((x) => !x) }),
    r && /* @__PURE__ */ h.jsx(
      BE,
      {
        api: a,
        settings: l,
        codexLoggedIn: d,
        codexEmail: y,
        conversation: g,
        onConversationChange: v,
        onSettingsChange: b,
        onCodexStatusChange: _,
        onNewConversation: N,
        onResumeConversation: D,
        onClose: () => s(!1)
      }
    )
  ] });
}
function qE(a) {
  const r = a.ui.addFloatingWidget({ id: "copilot" });
  r0.createRoot(r).render(
    /* @__PURE__ */ h.jsx(Wb.StrictMode, { children: /* @__PURE__ */ h.jsx(HE, { api: a }) })
  );
}
export {
  qE as default
};
