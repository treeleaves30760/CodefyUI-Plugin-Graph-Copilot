(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`.gcp-root{--gcp-canvas: var(--surface-canvas, #0f1319);--gcp-bg: var(--surface-app, #151a22);--gcp-panel: var(--surface-panel, #1c222c);--gcp-surface: var(--surface-raised, #242b37);--gcp-input-bg: var(--surface-input, #2c3441);--gcp-hover: var(--surface-hover, #353d4b);--gcp-active: var(--surface-active, #404959);--gcp-scrim: var(--surface-scrim, rgba(6, 9, 13, .72));--gcp-text: var(--text-primary, #f0f4f8);--gcp-dim: var(--text-secondary, #c6d0da);--gcp-muted: var(--text-muted, #aeb9c6);--gcp-disabled: var(--text-disabled, #6b7684);--gcp-accent-ink: var(--text-on-accent, #04212b);--gcp-border-soft: var(--border-subtle, #262e3a);--gcp-border: var(--border-base, #313a48);--gcp-border-strong: var(--border-strong, #6b7787);--gcp-focus: var(--border-focus, #22d3ee);--gcp-accent: var(--accent, #22d3ee);--gcp-accent-deep: var(--accent-deep, #06b6d4);--gcp-accent-dim: var(--accent-dim, #0e7490);--gcp-accent-wash: var(--accent-wash, rgba(34, 211, 238, .12));--gcp-accent-glow: var(--accent-glow, rgba(34, 211, 238, .45));--gcp-ok: var(--status-success, #5ec269);--gcp-danger: var(--status-error, #ff6b63);--gcp-warn: var(--status-warning, #ffc94d);--gcp-info: var(--status-info, #6aa9ff);--gcp-ok-wash: var(--success-wash, rgba(94, 194, 105, .14));--gcp-danger-wash: var(--danger-wash, rgba(255, 107, 99, .14));--gcp-warn-wash: var(--warning-wash, rgba(255, 201, 77, .14));--gcp-info-wash: var(--info-wash, rgba(106, 169, 255, .14));--gcp-wire: var(--wire, #5b6c82);--gcp-wire-active: var(--wire-active, #22d3ee);--gcp-fs-2xs: var(--fs-2xs, .6875rem);--gcp-fs-xs: var(--fs-xs, .75rem);--gcp-fs-sm: var(--fs-sm, .8125rem);--gcp-fs-md: var(--fs-md, .875rem);--gcp-fs-lg: var(--fs-lg, 1rem);--gcp-fs-xl: var(--fs-xl, 1.125rem);--gcp-lh-tight: var(--lh-tight, 1.25);--gcp-lh-snug: var(--lh-snug, 1.4);--gcp-lh: var(--lh-normal, 1.55);--gcp-r-xs: var(--radius-sm, 4px);--gcp-r-sm: var(--radius, 6px);--gcp-r: var(--radius-lg, 8px);--gcp-r-lg: var(--radius-xl, 12px);--gcp-r-pill: var(--radius-pill, 999px);--gcp-shadow-sm: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, .4));--gcp-shadow: var(--shadow, 0 4px 12px -2px rgba(0, 0, 0, .5));--gcp-shadow-lg: var(--shadow-lg, 0 12px 32px -8px rgba(0, 0, 0, .6));--gcp-shadow-pop: var(--shadow-popover, 0 16px 40px -12px rgba(0, 0, 0, .7));--gcp-edge-hi: var(--inner-highlight, inset 0 1px 0 rgba(255, 255, 255, .05));--gcp-t-fast: var(--transition-fast, .12s ease);--gcp-t: var(--transition, .18s ease);--gcp-ease: cubic-bezier(.22, 1, .36, 1);--gcp-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;position:relative;font-family:inherit;font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-dim);box-sizing:border-box;-webkit-font-smoothing:antialiased}.gcp-root *,.gcp-root *:before,.gcp-root *:after{box-sizing:inherit}.gcp-root ::-webkit-scrollbar{width:6px;height:6px}.gcp-root ::-webkit-scrollbar-track{background:transparent}.gcp-root ::-webkit-scrollbar-thumb{background:var(--gcp-border);border-radius:3px}.gcp-root ::-webkit-scrollbar-thumb:hover{background:var(--gcp-border-strong)}.gcp-fab{width:48px;height:48px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-fab:hover{background:var(--gcp-accent);transform:translateY(-1px);box-shadow:inset 0 1px #ffffff38,0 8px 18px -6px var(--gcp-accent-glow)}.gcp-fab:active{transform:scale(.96)}.gcp-fab:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-window{position:fixed;bottom:16px;right:16px;width:min(448px,calc(100vw - 32px));height:min(690px,calc(100vh - 88px));min-height:420px;background:var(--gcp-panel);border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);display:flex;flex-direction:column;box-shadow:var(--gcp-shadow-pop),var(--gcp-edge-hi);overflow:hidden;isolation:isolate;animation:gcp-window-in .2s var(--gcp-ease) both;transition:width .26s var(--gcp-ease),height .26s var(--gcp-ease),border-radius .26s var(--gcp-ease)}.gcp-window--expanded{width:min(980px,calc(100vw - 32px));height:min(800px,calc(100vh - 32px))}@keyframes gcp-window-in{0%{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}.gcp-workbench-header{display:flex;flex-direction:column;flex-shrink:0;background:linear-gradient(180deg,var(--gcp-bg) 0%,var(--gcp-canvas) 100%);border-bottom:1px solid var(--gcp-border);box-shadow:var(--gcp-edge-hi);position:relative;z-index:3}.gcp-header-main{min-height:52px;display:flex;align-items:center;gap:12px;padding:8px 10px 6px 12px}.gcp-brand{display:flex;align-items:center;gap:9px;min-width:0;flex:1}.gcp-header-mark{width:28px;height:28px;border-radius:var(--gcp-r-sm);background:var(--gcp-accent-deep);box-shadow:inset 0 1px #ffffff38;display:inline-flex;align-items:center;justify-content:center;color:var(--gcp-accent-ink);font-size:14px;flex-shrink:0}.gcp-brand-copy{display:flex;flex-direction:column;min-width:0;line-height:var(--gcp-lh-tight)}.gcp-brand-copy strong{color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600;letter-spacing:-.01em;white-space:nowrap}.gcp-brand-copy>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:600;margin-top:2px;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}.gcp-header-actions{display:flex;align-items:center;justify-content:flex-end;gap:4px;min-width:0}.gcp-icon-btn{width:28px;height:28px;border-radius:var(--gcp-r-sm);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-icon-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-icon-btn:active{transform:scale(.94)}.gcp-icon-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-icon-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-model-chip{display:inline-flex;align-items:center;gap:6px;height:26px;max-width:150px;min-width:0;padding:0 9px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:1}.gcp-model-chip:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-model-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-model-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--gcp-ok)}.gcp-label-btn{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px 0 8px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-label-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-label-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-label-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-bar{height:28px;display:flex;align-items:center;gap:8px;padding:0 13px;border-top:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-live-indicator{width:6px;height:6px;border-radius:50%;background:var(--gcp-disabled);flex-shrink:0}.gcp-live-indicator.online{background:var(--gcp-ok)}.gcp-context-name{color:var(--gcp-muted);font-weight:600}.gcp-context-stat{padding-left:8px;border-left:1px solid var(--gcp-border-soft)}.gcp-context-stat strong{color:var(--gcp-dim);font-weight:600;font-family:var(--gcp-mono)}.gcp-context-api{margin-left:auto;font-family:var(--gcp-mono)}.gcp-workbench-nav{display:flex;align-items:stretch;padding:0 6px}.gcp-nav-btn{flex:1;min-width:0;border:none;border-bottom:2px solid transparent;background:transparent;color:var(--gcp-muted);display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:7px 8px 6px;font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;outline:none;transition:color var(--gcp-t-fast),border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-nav-btn:hover{color:var(--gcp-dim)}.gcp-nav-btn.active{color:var(--gcp-text);border-bottom-color:var(--gcp-accent-deep)}.gcp-nav-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-nav-btn svg{flex-shrink:0}.gcp-view{flex:1;overflow:hidden;display:flex;flex-direction:column}.gcp-chat{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}.gcp-messages{flex:1;overflow-y:auto;padding:14px 14px 8px;display:flex;flex-direction:column;gap:12px}.gcp-welcome{margin:auto;text-align:center;padding:24px 26px;max-width:320px;display:flex;flex-direction:column;align-items:center;gap:10px}.gcp-welcome-mark{width:44px;height:44px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);display:flex;align-items:center;justify-content:center;font-size:20px;animation:gcp-pop .36s var(--gcp-ease) both}.gcp-welcome-title{font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text);letter-spacing:-.01em;animation:gcp-rise .36s var(--gcp-ease) 40ms both}.gcp-welcome-sub{font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-muted);animation:gcp-rise .36s var(--gcp-ease) 80ms both}.gcp-welcome-history{margin-top:6px;display:inline-flex;align-items:center;gap:7px;padding:6px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:500;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;animation:gcp-rise .36s var(--gcp-ease) .14s both}.gcp-welcome-history:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-welcome-history:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-welcome-suggestions{display:flex;flex-direction:column;gap:6px;width:100%;margin-top:4px;animation:gcp-rise .36s var(--gcp-ease) .11s both}.gcp-suggestion{padding:8px 11px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);background:var(--gcp-surface);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-family:inherit;line-height:var(--gcp-lh-snug);text-align:left;cursor:pointer;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none}.gcp-suggestion:hover{color:var(--gcp-accent);border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-suggestion:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@keyframes gcp-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}@keyframes gcp-rise{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}.gcp-msg-row{display:flex;flex-direction:column;gap:6px;animation:gcp-rise .24s var(--gcp-ease) both}.gcp-msg-row.user{align-items:flex-end}.gcp-msg-row.assistant{align-items:flex-start}.gcp-bubble{max-width:88%;padding:8px 11px;border-radius:var(--gcp-r);line-height:var(--gcp-lh);word-break:break-word;white-space:pre-wrap;font-size:var(--gcp-fs-sm)}.gcp-msg-row.user .gcp-bubble{background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-text);border-bottom-right-radius:var(--gcp-r-xs)}.gcp-msg-row.assistant .gcp-bubble{background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-dim);border-bottom-left-radius:var(--gcp-r-xs)}.gcp-bubble pre{background:var(--gcp-canvas);border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);padding:9px 10px;overflow-x:auto;font-size:var(--gcp-fs-xs);font-family:var(--gcp-mono);margin:7px 0 2px;white-space:pre;line-height:1.5}.gcp-bubble pre:first-child{margin-top:0}.gcp-bubble pre:last-child{margin-bottom:0}.gcp-bubble code{font-family:var(--gcp-mono);font-size:var(--gcp-fs-xs)}.gcp-bubble :not(pre)>code{background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);padding:1px 5px;border-radius:var(--gcp-r-xs);font-size:var(--gcp-fs-2xs);color:var(--gcp-text)}.gcp-bubble .gcp-md-p{margin:0 0 8px}.gcp-bubble .gcp-md-p:last-child{margin-bottom:0}.gcp-md-h1,.gcp-md-h2,.gcp-md-h3{font-weight:600;color:var(--gcp-text);margin:10px 0 6px;line-height:var(--gcp-lh-snug)}.gcp-md-h1{font-size:var(--gcp-fs-md)}.gcp-md-h2{font-size:var(--gcp-fs-sm)}.gcp-md-h3{font-size:var(--gcp-fs-sm);color:var(--gcp-muted)}.gcp-md-h1:first-child,.gcp-md-h2:first-child,.gcp-md-h3:first-child{margin-top:0}.gcp-md-list{margin:2px 0 8px;padding-left:18px}.gcp-md-list:last-child{margin-bottom:0}.gcp-md-list li{margin:3px 0}.gcp-md-list li::marker{color:var(--gcp-muted)}.gcp-md-hr{border:none;border-top:1px solid var(--gcp-border-soft);margin:10px 0}.gcp-bubble a{color:var(--gcp-accent);text-decoration:underline;text-underline-offset:2px;text-decoration-color:var(--gcp-accent-dim)}.gcp-bubble a:hover{text-decoration-color:var(--gcp-accent)}.gcp-caret{display:inline-block;width:2px;height:1em;background:var(--gcp-accent);margin-left:2px;vertical-align:text-bottom;border-radius:1px;animation:gcp-blink 1s step-end infinite}@keyframes gcp-blink{0%,to{opacity:1}50%{opacity:0}}.gcp-bubble-attachments{display:flex;flex-wrap:wrap;gap:6px;max-width:88%;justify-content:inherit}.gcp-msg-row.user .gcp-bubble-attachments{justify-content:flex-end}.gcp-att-image{max-width:160px;max-height:160px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);object-fit:cover;display:block}.gcp-att-file{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);max-width:180px}.gcp-att-file svg{color:var(--gcp-accent);flex-shrink:0}.gcp-att-file-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-ops-chip{display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);line-height:1.5;font-variant-numeric:tabular-nums}.gcp-step-tag{display:inline-flex;align-items:center;gap:6px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase}.gcp-step-tag-dot{width:6px;height:6px;border-radius:50%;background:var(--gcp-wire);flex-shrink:0}.gcp-stages{position:relative;display:flex;flex-direction:column;gap:2px;width:88%;padding-left:2px}.gcp-stages:before{content:"";position:absolute;left:10px;top:12px;bottom:12px;width:2px;border-radius:1px;background:var(--gcp-border)}.gcp-stage{position:relative;border-radius:var(--gcp-r-sm);overflow:hidden;animation:gcp-rise .2s var(--gcp-ease) both}.gcp-stage-head{display:flex;align-items:center;gap:8px;width:100%;min-height:28px;padding:4px 7px 4px 0;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast)}.gcp-stage-head:not(:disabled):hover{background:var(--gcp-hover)}.gcp-stage-head:disabled{cursor:default}.gcp-stage-head:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-stage-status{position:relative;z-index:1;width:18px;height:18px;margin-left:2px;border-radius:50%;background:var(--gcp-panel);border:1px solid var(--gcp-border);display:flex;align-items:center;justify-content:center;flex-shrink:0}.gcp-stage.ok .gcp-stage-status{color:var(--gcp-ok);background:var(--gcp-ok-wash);border-color:transparent}.gcp-stage.error .gcp-stage-status{color:var(--gcp-danger);background:var(--gcp-danger-wash);border-color:transparent}.gcp-stage.running .gcp-stage-status{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim);box-shadow:0 0 6px var(--gcp-accent-glow)}.gcp-stage-spinner{width:10px;height:10px;border-radius:50%;border:2px solid transparent;border-top-color:var(--gcp-accent);border-right-color:var(--gcp-accent);animation:gcp-spin .7s linear infinite}@keyframes gcp-spin{to{transform:rotate(360deg)}}.gcp-stage-label{font-weight:600;font-size:var(--gcp-fs-xs);color:var(--gcp-dim);white-space:nowrap;flex-shrink:0;line-height:var(--gcp-lh-tight)}.gcp-stage.running .gcp-stage-label{color:var(--gcp-text)}.gcp-stage-summary{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage.error .gcp-stage-summary{color:var(--gcp-danger)}.gcp-stage-time{flex-shrink:0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage-chevron{color:var(--gcp-muted);flex-shrink:0;transition:transform var(--gcp-t-fast)}.gcp-stage-chevron.open{transform:rotate(90deg)}.gcp-stage-detail{margin:2px 0 4px 28px;padding:8px 10px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:1.55;max-height:180px;overflow:auto;white-space:pre-wrap;word-break:break-word}.gcp-thinking{display:flex;align-items:center;gap:8px;padding:2px 2px 6px;font-size:var(--gcp-fs-sm);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-thinking-orb{color:var(--gcp-accent);font-size:var(--gcp-fs-sm);animation:gcp-orb-pulse 1.5s ease-in-out infinite}.gcp-thinking-text{background:linear-gradient(90deg,var(--gcp-muted) 25%,var(--gcp-accent) 50%,var(--gcp-muted) 75%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gcp-shimmer 1.8s linear infinite}.gcp-thinking-time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);font-variant-numeric:tabular-nums}@keyframes gcp-orb-pulse{0%,to{opacity:.45;transform:scale(.92)}50%{opacity:1;transform:scale(1.06)}}@keyframes gcp-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.gcp-error-row{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-danger);background:var(--gcp-danger-wash);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-error-icon{color:var(--gcp-danger);margin-top:1px;flex-shrink:0;display:flex}.gcp-error-body{flex:1;min-width:0}.gcp-error-title{font-size:var(--gcp-fs-xs);font-weight:600;color:var(--gcp-danger)}.gcp-error-text{font-size:var(--gcp-fs-xs);color:var(--gcp-dim);margin-top:2px;word-break:break-word;line-height:var(--gcp-lh-snug)}.gcp-retry-btn{padding:5px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast);align-self:center;flex-shrink:0}.gcp-retry-btn:hover{background:var(--gcp-danger-wash)}.gcp-retry-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-dropzone{position:absolute;top:8px;right:8px;bottom:8px;left:8px;z-index:5;border-radius:var(--gcp-r);background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;pointer-events:none;animation:gcp-fade .12s ease both}.gcp-dropzone-inner{display:flex;flex-direction:column;align-items:center;gap:10px;padding:24px 32px;border:1.5px dashed var(--gcp-accent-dim);border-radius:var(--gcp-r);color:var(--gcp-accent);font-size:var(--gcp-fs-sm);background:var(--gcp-accent-wash)}.gcp-dropzone-inner svg{width:22px;height:22px}@keyframes gcp-fade{0%{opacity:0}to{opacity:1}}.gcp-input-area{position:relative;padding:10px 12px 9px;border-top:1px solid var(--gcp-border);display:flex;flex-direction:column;gap:8px;flex-shrink:0;background:var(--gcp-bg)}.gcp-input-row{display:flex;gap:8px;align-items:flex-end}.gcp-attachments{display:flex;flex-wrap:wrap;gap:7px}.gcp-chip{position:relative;display:inline-flex;align-items:center;gap:8px;padding:5px 7px 5px 6px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border);max-width:190px;animation:gcp-pop .18s var(--gcp-ease) both}.gcp-chip.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-chip-thumb{width:30px;height:30px;border-radius:var(--gcp-r-xs);object-fit:cover;flex-shrink:0;border:1px solid var(--gcp-border-soft)}.gcp-chip-icon{width:30px;height:30px;border-radius:var(--gcp-r-xs);flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--gcp-canvas);color:var(--gcp-accent)}.gcp-chip.error .gcp-chip-icon{color:var(--gcp-danger)}.gcp-chip-body{display:flex;flex-direction:column;min-width:0;line-height:1.25}.gcp-chip-name{font-size:var(--gcp-fs-xs);color:var(--gcp-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:110px}.gcp-chip-size{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted)}.gcp-chip.error .gcp-chip-size{color:var(--gcp-danger)}.gcp-chip-spinner{width:12px;height:12px;border-radius:50%;border:2px solid var(--gcp-border);border-top-color:var(--gcp-accent);flex-shrink:0;animation:gcp-spin .7s linear infinite}.gcp-chip-remove{width:18px;height:18px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none}.gcp-chip-remove:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-chip-remove:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:1px}.gcp-file-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.gcp-attach-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast);outline:none}.gcp-attach-btn:hover:not(:disabled){color:var(--gcp-text);background:var(--gcp-hover)}.gcp-attach-btn:disabled{opacity:.4;cursor:not-allowed}.gcp-attach-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-textarea{flex:1;resize:none;background:var(--gcp-input-bg);border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);color:var(--gcp-text);font-family:inherit;font-size:var(--gcp-fs-sm);padding:8px 10px;outline:none;line-height:var(--gcp-lh-snug);min-height:34px;max-height:110px;overflow-y:auto;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-textarea::placeholder{color:var(--gcp-disabled)}.gcp-textarea:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-textarea:disabled{opacity:.5;cursor:not-allowed}.gcp-send-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-send-btn:hover:not(:disabled){background:var(--gcp-accent)}.gcp-send-btn:active:not(:disabled){transform:scale(.94)}.gcp-send-btn:disabled{opacity:.4;cursor:not-allowed;background:var(--gcp-input-bg);color:var(--gcp-disabled);box-shadow:none}.gcp-send-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-stop-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),transform var(--gcp-t-fast);outline:none}.gcp-stop-btn:hover{background:var(--gcp-danger-wash)}.gcp-stop-btn:active{transform:scale(.94)}.gcp-stop-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-composer-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:22px}.gcp-composer-context{display:flex;align-items:center;gap:6px;min-width:0}.gcp-context-chip{display:inline-flex;align-items:center;gap:6px;height:22px;max-width:230px;padding:0 7px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-soft);background:transparent;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast)}.gcp-context-chip:hover,.gcp-context-chip.open{background:var(--gcp-hover);color:var(--gcp-dim);border-color:var(--gcp-border)}.gcp-context-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-chip svg{flex-shrink:0;color:var(--gcp-accent)}.gcp-context-chip-model{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-context-chip-effort{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-weight:600}.gcp-effort{position:relative;min-width:0}.gcp-menu-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;background:transparent;border:none;cursor:default;padding:0}.gcp-effort-menu{position:absolute;bottom:calc(100% + 8px);left:0;z-index:30;min-width:250px;max-width:300px;padding:4px;background:var(--gcp-surface);border:1px solid var(--gcp-border);border-radius:var(--gcp-r);box-shadow:var(--gcp-shadow-pop);animation:gcp-rise .14s var(--gcp-ease) both}.gcp-effort-menu-title{padding:6px 8px 4px;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-effort-item{display:flex;align-items:baseline;gap:8px;width:100%;padding:6px 8px;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-effort-item:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-effort-item:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-effort-item.selected{background:var(--gcp-accent-wash)}.gcp-effort-item.selected .gcp-effort-item-name{color:var(--gcp-accent)}.gcp-effort-item-name{font-family:var(--gcp-mono);font-weight:600;white-space:nowrap;flex-shrink:0}.gcp-effort-item-desc{flex:1;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-effort-item-check{margin-left:auto;flex-shrink:0;width:12px;color:var(--gcp-accent);display:inline-flex}.gcp-effort-menu-divider{height:1px;margin:4px 0;background:var(--gcp-border)}.gcp-runbar{display:flex;align-items:center;gap:7px;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-runbar-pulse{width:7px;height:7px;border-radius:50%;background:var(--gcp-accent);flex-shrink:0;animation:gcp-runbar-pulse 1.4s ease-in-out infinite}@keyframes gcp-runbar-pulse{0%,to{opacity:.4;box-shadow:0 0 0 0 var(--gcp-accent-wash)}50%{opacity:1;box-shadow:0 0 6px 0 var(--gcp-accent-glow)}}.gcp-runbar-phase{color:var(--gcp-dim);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-runbar-step{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);font-family:var(--gcp-mono)}.gcp-runbar-time{flex-shrink:0;font-family:var(--gcp-mono)}.gcp-composer-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-disabled);white-space:nowrap;-webkit-user-select:none;user-select:none}.gcp-not-ready-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;gap:10px}.gcp-not-ready-label{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-cta-btn{padding:6px 14px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none;white-space:nowrap}.gcp-cta-btn:hover{background:var(--gcp-accent)}.gcp-cta-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history{flex:1;display:flex;flex-direction:column;overflow:hidden}.gcp-history-top{padding:12px;border-bottom:1px solid var(--gcp-border-soft);flex-shrink:0}.gcp-new-btn{width:100%;padding:8px 12px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-sm);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-new-btn:hover{background:var(--gcp-accent)}.gcp-new-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history-list{flex:1;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:2px}.gcp-history-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--gcp-r-sm);cursor:pointer;transition:background var(--gcp-t-fast);border:1px solid transparent;position:relative}.gcp-history-item:hover{background:var(--gcp-hover)}.gcp-history-item.active{background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-history-item.active:before{content:"";position:absolute;left:0;top:8px;bottom:8px;width:2px;border-radius:2px;background:var(--gcp-accent-deep)}.gcp-history-info{flex:1;min-width:0}.gcp-history-title{font-size:var(--gcp-fs-sm);color:var(--gcp-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}.gcp-history-meta{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums}.gcp-history-delete{width:24px;height:24px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:var(--gcp-fs-sm);flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),opacity var(--gcp-t-fast);outline:none;opacity:0}.gcp-history-item:hover .gcp-history-delete{opacity:1}.gcp-history-delete:hover{color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-history-delete.confirm{color:var(--gcp-danger);background:var(--gcp-danger-wash);opacity:1}.gcp-history-delete:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:1px;opacity:1}.gcp-history-empty{padding:40px 18px;text-align:center;color:var(--gcp-muted);font-size:var(--gcp-fs-sm)}.gcp-settings{flex:1;overflow-y:auto;padding:16px 14px 20px;display:flex;flex-direction:column;gap:16px}.gcp-field{display:flex;flex-direction:column;gap:6px}.gcp-label{font-size:var(--gcp-fs-2xs);font-weight:700;color:var(--gcp-muted);text-transform:uppercase;letter-spacing:.05em}.gcp-select,.gcp-input{width:100%;padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:var(--gcp-input-bg);color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-family:inherit;outline:none;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-select{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23aeb9c6' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}.gcp-select:focus,.gcp-input:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-input::placeholder{color:var(--gcp-disabled)}.gcp-model-row{display:flex;gap:6px}.gcp-model-row .gcp-input{flex:1}.gcp-load-btn{padding:7px 11px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;white-space:nowrap;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-load-btn:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-load-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-load-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-key-row{display:flex;gap:6px}.gcp-key-row .gcp-input{flex:1;font-family:var(--gcp-mono)}.gcp-show-btn{padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-show-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-show-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-section{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-border-soft);background:var(--gcp-surface)}.gcp-codex-status{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-codex-status.signed-in{color:var(--gcp-ok)}.gcp-codex-status.pending{color:var(--gcp-warn)}.gcp-codex-btns{display:flex;gap:8px}.gcp-codex-btn{padding:6px 13px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-codex-btn:hover{background:var(--gcp-accent)}.gcp-codex-btn.danger{border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);box-shadow:none}.gcp-codex-btn.danger:hover{background:var(--gcp-danger-wash)}.gcp-codex-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-field-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px}.gcp-field-hint.error{color:var(--gcp-danger)}.gcp-footnote{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);line-height:var(--gcp-lh);padding-top:6px;border-top:1px solid var(--gcp-border-soft)}.gcp-window--expanded .gcp-msg-row,.gcp-window--expanded .gcp-thinking,.gcp-window--expanded .gcp-error-row{width:min(100%,760px);margin-left:auto;margin-right:auto}.gcp-window--expanded .gcp-messages{padding:24px clamp(22px,8vw,92px) 12px}.gcp-window--expanded .gcp-input-area{padding-left:clamp(22px,9vw,108px);padding-right:clamp(22px,9vw,108px)}.gcp-window--expanded .gcp-settings,.gcp-window--expanded .gcp-history{width:min(100%,760px);margin:0 auto}.gcp-lab{position:relative;flex:1;min-height:0;overflow-y:auto;padding:18px;background:var(--gcp-panel)}.gcp-lab-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:16px}.gcp-eyebrow{display:block;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;line-height:var(--gcp-lh-snug);text-transform:uppercase}.gcp-lab-heading h1{margin:2px 0 4px;color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-tight);letter-spacing:-.01em}.gcp-lab-heading p{margin:0;max-width:560px;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-count{flex-shrink:0;padding:3px 9px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-lab-heading-actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:7px}.gcp-lab-heading-actions>button{min-height:28px;padding:5px 10px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-heading-actions>button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-heading-actions>button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-portable-message{margin:-7px 0 13px;padding:8px 10px;border:1px solid var(--gcp-ok);border-radius:var(--gcp-r-sm);background:var(--gcp-ok-wash);color:var(--gcp-ok);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-portable-message.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash);color:var(--gcp-danger)}.gcp-lab-empty{min-height:340px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 20px;border:1px dashed var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-canvas)}.gcp-lab-empty-mark{width:52px;height:52px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-lg);display:grid;place-items:center;color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-empty h2{margin:15px 0 6px;font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text)}.gcp-lab-empty p{max-width:470px;margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-example{max-width:510px;margin-top:16px;padding:10px 12px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh);text-align:left}.gcp-lab-layout{display:flex;flex-direction:column;gap:13px}.gcp-lab-studies{display:flex;gap:8px;overflow-x:auto;padding:1px 1px 5px;scrollbar-width:thin}.gcp-study-card{width:220px;min-width:220px;display:flex;flex-direction:column;align-items:stretch;gap:7px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-surface);color:var(--gcp-text);font-family:inherit;text-align:left;cursor:pointer;outline:none;transition:border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-study-card:hover{border-color:var(--gcp-border);background:var(--gcp-hover)}.gcp-study-card.active{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-study-card:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-study-card-top{display:flex;justify-content:space-between;align-items:center;gap:8px}.gcp-study-card time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono)}.gcp-study-card>strong{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:32px;font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-study-card-meta{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-lab-badge{display:inline-flex;align-items:center;width:fit-content;min-height:18px;padding:2px 7px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);color:var(--gcp-muted);background:var(--gcp-input-bg);font-size:var(--gcp-fs-2xs);font-weight:700;line-height:1;letter-spacing:.04em;text-transform:uppercase}.gcp-lab-badge.completed{color:var(--gcp-ok);border-color:var(--gcp-ok);background:var(--gcp-ok-wash)}.gcp-lab-badge.partial,.gcp-lab-badge.invalid{color:var(--gcp-warn);border-color:var(--gcp-warn);background:var(--gcp-warn-wash)}.gcp-lab-badge.failed{color:var(--gcp-danger);border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-lab-report{min-width:0;padding:16px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-edge-hi)}.gcp-lab-report-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.gcp-lab-report-head h2{margin:4px 0 0;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600;line-height:var(--gcp-lh-snug);letter-spacing:-.01em}.gcp-lab-export-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px}.gcp-lab-export-actions button{min-height:26px;padding:4px 9px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-export-actions button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-export-actions button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-export-actions button:disabled{opacity:.45;cursor:not-allowed}.gcp-lab-export-actions button:disabled:hover{background:transparent;color:var(--gcp-dim)}.gcp-lab-integrity{margin:7px 0 0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-summary-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.gcp-lab-summary-card{min-width:0;display:flex;align-items:center;gap:11px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-lab-summary-card.winner{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-lab-card-icon{width:30px;height:30px;border-radius:var(--gcp-r-sm);display:grid;place-items:center;flex-shrink:0;font-size:14px}.gcp-lab-card-icon.objective{color:var(--gcp-info);background:var(--gcp-info-wash)}.gcp-lab-card-icon.winner{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-summary-card>div{min-width:0;display:flex;flex-direction:column;gap:2px}.gcp-lab-summary-card h3{margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-transform:uppercase}.gcp-lab-summary-card strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-lab-summary-card div>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-search-plan{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:baseline;gap:3px 10px;margin-top:8px;padding:10px 11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-info-wash)}.gcp-lab-search-plan .gcp-eyebrow{grid-column:1 / -1;color:var(--gcp-info)}.gcp-lab-search-plan strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-lab-search-plan>span:not(.gcp-eyebrow){color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-search-plan small{grid-column:1 / -1;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-section{margin-top:18px}.gcp-lab-section-title{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:8px}.gcp-lab-section-title h3{margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600}.gcp-lab-section-title>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-findings{margin:0;padding:10px 12px 10px 27px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-findings li+li{margin-top:5px}.gcp-lab-findings li::marker{color:var(--gcp-accent)}.gcp-leaderboard-wrap{overflow-x:auto;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-leaderboard{width:100%;min-width:650px;border-collapse:collapse;font-size:var(--gcp-fs-xs);font-variant-numeric:tabular-nums}.gcp-leaderboard th{padding:8px 9px;border-bottom:1px solid var(--gcp-border);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-align:left;text-transform:uppercase;white-space:nowrap}.gcp-leaderboard td{padding:9px;border-bottom:1px solid var(--gcp-border-soft);color:var(--gcp-dim);vertical-align:middle}.gcp-leaderboard tbody tr:last-child td{border-bottom:none}.gcp-leaderboard tbody tr.winner{background:var(--gcp-accent-wash)}.gcp-rank{display:inline-grid;place-items:center;width:21px;height:21px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-leaderboard tr.winner .gcp-rank{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-candidate-name{display:flex;align-items:center;flex-wrap:wrap;gap:5px;min-width:140px}.gcp-candidate-name strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-winner-tag{padding:2px 5px;border-radius:var(--gcp-r-xs);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase}.gcp-candidate-operations{display:block;max-width:240px;margin-top:3px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-candidate-error{display:block;max-width:210px;margin-top:3px;color:var(--gcp-danger);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-metric-value{color:var(--gcp-text)!important;font-family:var(--gcp-mono)}.gcp-metric-detail{display:block;margin-top:3px;color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:500;line-height:var(--gcp-lh-snug);white-space:nowrap}.gcp-candidate-download{min-height:25px;padding:4px 8px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-xs);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-candidate-download:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-candidate-download:disabled{opacity:.4;cursor:not-allowed}.gcp-study-import-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:8;display:grid;place-items:center;padding:20px;background:var(--gcp-scrim)}.gcp-study-import-dialog{width:min(100%,520px);max-height:calc(100% - 12px);overflow-y:auto;padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-lg)}.gcp-study-import-dialog h2{margin:4px 0 7px;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600}.gcp-study-import-dialog>p{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-study-import-dialog dl{margin:14px 0;display:grid;gap:7px}.gcp-study-import-dialog dl>div{display:grid;grid-template-columns:105px minmax(0,1fr);gap:10px}.gcp-study-import-dialog dt{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase;letter-spacing:.04em}.gcp-study-import-dialog dd{min-width:0;margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow-wrap:anywhere}.gcp-study-import-dialog code{color:var(--gcp-accent);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-study-import-safety{padding:9px 10px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-sm);background:var(--gcp-accent-wash)}.gcp-study-import-dialog .gcp-lab-portable-message{margin:10px 0 0}.gcp-study-import-actions{display:flex;justify-content:flex-end;gap:7px;margin-top:15px}.gcp-study-import-actions button{min-height:30px;padding:6px 12px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-study-import-actions button:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-study-import-actions button.primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-weight:700;box-shadow:inset 0 1px #ffffff38}.gcp-study-import-actions button.primary:hover:not(:disabled){background:var(--gcp-accent);color:var(--gcp-accent-ink)}.gcp-study-import-actions button:disabled{opacity:.5;cursor:not-allowed}.gcp-lab-warnings{display:flex;flex-direction:column;gap:5px}.gcp-lab-warnings p{position:relative;margin:0;padding:8px 10px 8px 27px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-warn);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-warnings p:before{content:"!";position:absolute;left:10px;top:8px;color:var(--gcp-warn);font-weight:800}.gcp-paper-grid{display:grid;grid-template-columns:1fr;gap:8px}.gcp-paper-card{position:relative;padding:12px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas);overflow:hidden}.gcp-paper-index{position:absolute;right:9px;top:7px;color:var(--gcp-border-soft);font-family:var(--gcp-mono);font-size:24px;font-weight:700}.gcp-paper-card h4{position:relative;margin:0 28px 9px 0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-paper-card dl{margin:0;display:flex;flex-direction:column;gap:7px}.gcp-paper-card dl>div{display:grid;grid-template-columns:58px 1fr;gap:7px}.gcp-paper-card dt{color:var(--gcp-accent-dim);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-paper-card dd{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh)}.gcp-window--expanded .gcp-lab{padding:24px}.gcp-window--expanded .gcp-lab-layout{display:grid;grid-template-columns:220px minmax(0,1fr);align-items:start}.gcp-window--expanded .gcp-lab-studies{position:sticky;top:0;max-height:590px;flex-direction:column;overflow-x:hidden;overflow-y:auto;padding:1px 5px 1px 1px}.gcp-window--expanded .gcp-study-card{width:100%;min-width:0}.gcp-window--expanded .gcp-lab-summary-grid,.gcp-window--expanded .gcp-paper-grid{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:720px),(max-height:560px){.gcp-window,.gcp-window--expanded{top:8px;right:8px;bottom:8px;left:8px;width:auto;height:auto;min-height:0;border-radius:var(--gcp-r-lg)}.gcp-window--expanded .gcp-lab-layout{display:flex}.gcp-window--expanded .gcp-lab-studies{position:static;max-height:none;flex-direction:row;overflow-x:auto;overflow-y:hidden}.gcp-window--expanded .gcp-study-card{width:220px;min-width:220px}.gcp-window--expanded .gcp-messages{padding:16px 14px 8px}.gcp-window--expanded .gcp-input-area{padding:10px 12px 9px}}@media(max-width:430px){.gcp-header-main{padding-left:10px;gap:7px}.gcp-brand-copy>span{display:none}.gcp-header-actions .gcp-model-chip{max-width:116px}.gcp-context-bar{padding:0 11px;gap:6px}.gcp-context-name{display:none}.gcp-context-stat{padding-left:6px}.gcp-workbench-nav{padding:0 4px}.gcp-nav-btn{gap:5px;padding:7px 4px 6px;font-size:var(--gcp-fs-2xs)}.gcp-composer-hint{display:none}.gcp-lab{padding:14px 11px}.gcp-lab-report{padding:12px 10px}.gcp-lab-heading p{display:none}.gcp-lab-heading{align-items:center;margin-bottom:13px}}.gcp-experiment-approval-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:40;display:grid;place-items:center;padding:18px;background:var(--gcp-scrim)}.gcp-experiment-approval{width:min(420px,100%);padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-pop)}.gcp-experiment-approval-kicker{margin-bottom:6px;color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;text-transform:uppercase}.gcp-experiment-approval-title{color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-hypothesis{margin-top:10px;color:var(--gcp-text);font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh)}.gcp-experiment-approval-facts{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.gcp-experiment-approval-facts span{padding:3px 8px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-experiment-approval-candidates{display:grid;gap:6px;max-height:124px;margin-top:12px;overflow-y:auto}.gcp-experiment-approval-candidates>div,.gcp-experiment-approval-nodes{display:grid;grid-template-columns:minmax(72px,.35fr) minmax(0,1fr);gap:8px;padding:7px 9px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-candidates strong,.gcp-experiment-approval-nodes strong{color:var(--gcp-text)}.gcp-experiment-approval-candidates span,.gcp-experiment-approval-nodes span{min-width:0;overflow-wrap:anywhere;color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-experiment-approval-nodes{margin-top:6px}.gcp-experiment-approval-warning{margin-top:14px;padding:10px 11px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:18px}.gcp-approval-secondary,.gcp-approval-primary{min-height:32px;padding:0 13px;border-radius:var(--gcp-r-sm);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:700;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-approval-secondary{border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim)}.gcp-approval-secondary:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-approval-secondary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-approval-primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);box-shadow:inset 0 1px #ffffff38}.gcp-approval-primary:hover{background:var(--gcp-accent)}.gcp-approval-primary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@media(prefers-reduced-motion:reduce){.gcp-root *,.gcp-root *:before,.gcp-root *:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`)),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var Gb = Object.defineProperty;
var qb = (a, r, s) => r in a ? Gb(a, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[r] = s;
var ln = (a, r, s) => qb(a, typeof r != "symbol" ? r + "" : r, s);
function Ib(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Tu = { exports: {} }, es = {};
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
function kb() {
  if (_h) return es;
  _h = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(l, u, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      d = {};
      for (var y in u)
        y !== "key" && (d[y] = u[y]);
    } else d = u;
    return u = d.ref, {
      $$typeof: a,
      type: l,
      key: f,
      ref: u !== void 0 ? u : null,
      props: d
    };
  }
  return es.Fragment = r, es.jsx = s, es.jsxs = s, es;
}
var Eh;
function Kb() {
  return Eh || (Eh = 1, Tu.exports = kb()), Tu.exports;
}
var h = Kb(), Mu = { exports: {} }, _e = {};
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
function Yb() {
  if (xh) return _e;
  xh = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), f = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), _ = Symbol.iterator;
  function A(x) {
    return x === null || typeof x != "object" ? null : (x = _ && x[_] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var R = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, E = Object.assign, B = {};
  function T(x, L, ne) {
    this.props = x, this.context = L, this.refs = B, this.updater = ne || R;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(x, L) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, L, "setState");
  }, T.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function D() {
  }
  D.prototype = T.prototype;
  function V(x, L, ne) {
    this.props = x, this.context = L, this.refs = B, this.updater = ne || R;
  }
  var J = V.prototype = new D();
  J.constructor = V, E(J, T.prototype), J.isPureReactComponent = !0;
  var X = Array.isArray;
  function P() {
  }
  var q = { H: null, A: null, T: null, S: null }, ce = Object.prototype.hasOwnProperty;
  function ue(x, L, ne) {
    var ie = ne.ref;
    return {
      $$typeof: a,
      type: x,
      key: L,
      ref: ie !== void 0 ? ie : null,
      props: ne
    };
  }
  function Y(x, L) {
    return ue(x.type, L, x.props);
  }
  function Q(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function re(x) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ne) {
      return L[ne];
    });
  }
  var fe = /\/+/g;
  function ee(x, L) {
    return typeof x == "object" && x !== null && x.key != null ? re("" + x.key) : L.toString(36);
  }
  function pe(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(P, P) : (x.status = "pending", x.then(
          function(L) {
            x.status === "pending" && (x.status = "fulfilled", x.value = L);
          },
          function(L) {
            x.status === "pending" && (x.status = "rejected", x.reason = L);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function w(x, L, ne, ie, se) {
    var be = typeof x;
    (be === "undefined" || be === "boolean") && (x = null);
    var ve = !1;
    if (x === null) ve = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case r:
              ve = !0;
              break;
            case v:
              return ve = x._init, w(
                ve(x._payload),
                L,
                ne,
                ie,
                se
              );
          }
      }
    if (ve)
      return se = se(x), ve = ie === "" ? "." + ee(x, 0) : ie, X(se) ? (ne = "", ve != null && (ne = ve.replace(fe, "$&/") + "/"), w(se, L, ne, "", function(yn) {
        return yn;
      })) : se != null && (Q(se) && (se = Y(
        se,
        ne + (se.key == null || x && x.key === se.key ? "" : ("" + se.key).replace(
          fe,
          "$&/"
        ) + "/") + ve
      )), L.push(se)), 1;
    ve = 0;
    var ut = ie === "" ? "." : ie + ":";
    if (X(x))
      for (var Ve = 0; Ve < x.length; Ve++)
        ie = x[Ve], be = ut + ee(ie, Ve), ve += w(
          ie,
          L,
          ne,
          be,
          se
        );
    else if (Ve = A(x), typeof Ve == "function")
      for (x = Ve.call(x), Ve = 0; !(ie = x.next()).done; )
        ie = ie.value, be = ut + ee(ie, Ve++), ve += w(
          ie,
          L,
          ne,
          be,
          se
        );
    else if (be === "object") {
      if (typeof x.then == "function")
        return w(
          pe(x),
          L,
          ne,
          ie,
          se
        );
      throw L = String(x), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ve;
  }
  function K(x, L, ne) {
    if (x == null) return x;
    var ie = [], se = 0;
    return w(x, ie, "", "", function(be) {
      return L.call(ne, be, se++);
    }), ie;
  }
  function M(x) {
    if (x._status === -1) {
      var L = x._result;
      L = L(), L.then(
        function(ne) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ne);
        },
        function(ne) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ne);
        }
      ), x._status === -1 && (x._status = 0, x._result = L);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var te = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, Z = {
    map: K,
    forEach: function(x, L, ne) {
      K(
        x,
        function() {
          L.apply(this, arguments);
        },
        ne
      );
    },
    count: function(x) {
      var L = 0;
      return K(x, function() {
        L++;
      }), L;
    },
    toArray: function(x) {
      return K(x, function(L) {
        return L;
      }) || [];
    },
    only: function(x) {
      if (!Q(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return _e.Activity = b, _e.Children = Z, _e.Component = T, _e.Fragment = s, _e.Profiler = u, _e.PureComponent = V, _e.StrictMode = l, _e.Suspense = m, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, _e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return q.H.useMemoCache(x);
    }
  }, _e.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, _e.cacheSignal = function() {
    return null;
  }, _e.cloneElement = function(x, L, ne) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var ie = E({}, x.props), se = x.key;
    if (L != null)
      for (be in L.key !== void 0 && (se = "" + L.key), L)
        !ce.call(L, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && L.ref === void 0 || (ie[be] = L[be]);
    var be = arguments.length - 2;
    if (be === 1) ie.children = ne;
    else if (1 < be) {
      for (var ve = Array(be), ut = 0; ut < be; ut++)
        ve[ut] = arguments[ut + 2];
      ie.children = ve;
    }
    return ue(x.type, se, ie);
  }, _e.createContext = function(x) {
    return x = {
      $$typeof: f,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: d,
      _context: x
    }, x;
  }, _e.createElement = function(x, L, ne) {
    var ie, se = {}, be = null;
    if (L != null)
      for (ie in L.key !== void 0 && (be = "" + L.key), L)
        ce.call(L, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (se[ie] = L[ie]);
    var ve = arguments.length - 2;
    if (ve === 1) se.children = ne;
    else if (1 < ve) {
      for (var ut = Array(ve), Ve = 0; Ve < ve; Ve++)
        ut[Ve] = arguments[Ve + 2];
      se.children = ut;
    }
    if (x && x.defaultProps)
      for (ie in ve = x.defaultProps, ve)
        se[ie] === void 0 && (se[ie] = ve[ie]);
    return ue(x, be, se);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(x) {
    return { $$typeof: y, render: x };
  }, _e.isValidElement = Q, _e.lazy = function(x) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: x },
      _init: M
    };
  }, _e.memo = function(x, L) {
    return {
      $$typeof: g,
      type: x,
      compare: L === void 0 ? null : L
    };
  }, _e.startTransition = function(x) {
    var L = q.T, ne = {};
    q.T = ne;
    try {
      var ie = x(), se = q.S;
      se !== null && se(ne, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(P, te);
    } catch (be) {
      te(be);
    } finally {
      L !== null && ne.types !== null && (L.types = ne.types), q.T = L;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return q.H.useCacheRefresh();
  }, _e.use = function(x) {
    return q.H.use(x);
  }, _e.useActionState = function(x, L, ne) {
    return q.H.useActionState(x, L, ne);
  }, _e.useCallback = function(x, L) {
    return q.H.useCallback(x, L);
  }, _e.useContext = function(x) {
    return q.H.useContext(x);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(x, L) {
    return q.H.useDeferredValue(x, L);
  }, _e.useEffect = function(x, L) {
    return q.H.useEffect(x, L);
  }, _e.useEffectEvent = function(x) {
    return q.H.useEffectEvent(x);
  }, _e.useId = function() {
    return q.H.useId();
  }, _e.useImperativeHandle = function(x, L, ne) {
    return q.H.useImperativeHandle(x, L, ne);
  }, _e.useInsertionEffect = function(x, L) {
    return q.H.useInsertionEffect(x, L);
  }, _e.useLayoutEffect = function(x, L) {
    return q.H.useLayoutEffect(x, L);
  }, _e.useMemo = function(x, L) {
    return q.H.useMemo(x, L);
  }, _e.useOptimistic = function(x, L) {
    return q.H.useOptimistic(x, L);
  }, _e.useReducer = function(x, L, ne) {
    return q.H.useReducer(x, L, ne);
  }, _e.useRef = function(x) {
    return q.H.useRef(x);
  }, _e.useState = function(x) {
    return q.H.useState(x);
  }, _e.useSyncExternalStore = function(x, L, ne) {
    return q.H.useSyncExternalStore(
      x,
      L,
      ne
    );
  }, _e.useTransition = function() {
    return q.H.useTransition();
  }, _e.version = "19.2.7", _e;
}
var Nh;
function fd() {
  return Nh || (Nh = 1, Mu.exports = Yb()), Mu.exports;
}
var ae = fd();
const Xb = /* @__PURE__ */ Ib(ae);
var Ou = { exports: {} }, ts = {}, Cu = { exports: {} }, Du = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function Qb() {
  return Ah || (Ah = 1, (function(a) {
    function r(w, K) {
      var M = w.length;
      w.push(K);
      e: for (; 0 < M; ) {
        var te = M - 1 >>> 1, Z = w[te];
        if (0 < u(Z, K))
          w[te] = K, w[M] = Z, M = te;
        else break e;
      }
    }
    function s(w) {
      return w.length === 0 ? null : w[0];
    }
    function l(w) {
      if (w.length === 0) return null;
      var K = w[0], M = w.pop();
      if (M !== K) {
        w[0] = M;
        e: for (var te = 0, Z = w.length, x = Z >>> 1; te < x; ) {
          var L = 2 * (te + 1) - 1, ne = w[L], ie = L + 1, se = w[ie];
          if (0 > u(ne, M))
            ie < Z && 0 > u(se, ne) ? (w[te] = se, w[ie] = M, te = ie) : (w[te] = ne, w[L] = M, te = L);
          else if (ie < Z && 0 > u(se, M))
            w[te] = se, w[ie] = M, te = ie;
          else break e;
        }
      }
      return K;
    }
    function u(w, K) {
      var M = w.sortIndex - K.sortIndex;
      return M !== 0 ? M : w.id - K.id;
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
    var m = [], g = [], v = 1, b = null, _ = 3, A = !1, R = !1, E = !1, B = !1, T = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    function J(w) {
      for (var K = s(g); K !== null; ) {
        if (K.callback === null) l(g);
        else if (K.startTime <= w)
          l(g), K.sortIndex = K.expirationTime, r(m, K);
        else break;
        K = s(g);
      }
    }
    function X(w) {
      if (E = !1, J(w), !R)
        if (s(m) !== null)
          R = !0, P || (P = !0, re());
        else {
          var K = s(g);
          K !== null && pe(X, K.startTime - w);
        }
    }
    var P = !1, q = -1, ce = 5, ue = -1;
    function Y() {
      return B ? !0 : !(a.unstable_now() - ue < ce);
    }
    function Q() {
      if (B = !1, P) {
        var w = a.unstable_now();
        ue = w;
        var K = !0;
        try {
          e: {
            R = !1, E && (E = !1, D(q), q = -1), A = !0;
            var M = _;
            try {
              t: {
                for (J(w), b = s(m); b !== null && !(b.expirationTime > w && Y()); ) {
                  var te = b.callback;
                  if (typeof te == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var Z = te(
                      b.expirationTime <= w
                    );
                    if (w = a.unstable_now(), typeof Z == "function") {
                      b.callback = Z, J(w), K = !0;
                      break t;
                    }
                    b === s(m) && l(m), J(w);
                  } else l(m);
                  b = s(m);
                }
                if (b !== null) K = !0;
                else {
                  var x = s(g);
                  x !== null && pe(
                    X,
                    x.startTime - w
                  ), K = !1;
                }
              }
              break e;
            } finally {
              b = null, _ = M, A = !1;
            }
            K = void 0;
          }
        } finally {
          K ? re() : P = !1;
        }
      }
    }
    var re;
    if (typeof V == "function")
      re = function() {
        V(Q);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), ee = fe.port2;
      fe.port1.onmessage = Q, re = function() {
        ee.postMessage(null);
      };
    } else
      re = function() {
        T(Q, 0);
      };
    function pe(w, K) {
      q = T(function() {
        w(a.unstable_now());
      }, K);
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
          var K = 3;
          break;
        default:
          K = _;
      }
      var M = _;
      _ = K;
      try {
        return w();
      } finally {
        _ = M;
      }
    }, a.unstable_requestPaint = function() {
      B = !0;
    }, a.unstable_runWithPriority = function(w, K) {
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
      var M = _;
      _ = w;
      try {
        return K();
      } finally {
        _ = M;
      }
    }, a.unstable_scheduleCallback = function(w, K, M) {
      var te = a.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? te + M : te) : M = te, w) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return Z = M + Z, w = {
        id: v++,
        callback: K,
        priorityLevel: w,
        startTime: M,
        expirationTime: Z,
        sortIndex: -1
      }, M > te ? (w.sortIndex = M, r(g, w), s(m) === null && w === s(g) && (E ? (D(q), q = -1) : E = !0, pe(X, M - te))) : (w.sortIndex = Z, r(m, w), R || A || (R = !0, P || (P = !0, re()))), w;
    }, a.unstable_shouldYield = Y, a.unstable_wrapCallback = function(w) {
      var K = _;
      return function() {
        var M = _;
        _ = K;
        try {
          return w.apply(this, arguments);
        } finally {
          _ = M;
        }
      };
    };
  })(Du)), Du;
}
var jh;
function Jb() {
  return jh || (jh = 1, Cu.exports = Qb()), Cu.exports;
}
var zu = { exports: {} }, Et = {};
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
function Zb() {
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
  }, u = Symbol.for("react.portal");
  function d(m, g, v) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
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
      var v = g.as, b = y(v, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, A = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? l.d.S(
        m,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: _,
          fetchPriority: A
        }
      ) : v === "script" && l.d.X(m, {
        crossOrigin: b,
        integrity: _,
        fetchPriority: A,
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
function Fb() {
  if ($h) return zu.exports;
  $h = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), zu.exports = Zb(), zu.exports;
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
var Th;
function Wb() {
  if (Th) return ts;
  Th = 1;
  var a = Jb(), r = fd(), s = Fb();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
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
      var c = o.alternate;
      if (c === null) {
        if (i = o.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === n) return m(o), e;
          if (c === i) return m(o), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== i.return) n = o, i = c;
      else {
        for (var p = !1, S = o.child; S; ) {
          if (S === n) {
            p = !0, n = o, i = c;
            break;
          }
          if (S === i) {
            p = !0, i = o, n = c;
            break;
          }
          S = S.sibling;
        }
        if (!p) {
          for (S = c.child; S; ) {
            if (S === n) {
              p = !0, n = c, i = o;
              break;
            }
            if (S === i) {
              p = !0, i = c, n = o;
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
  var b = Object.assign, _ = Symbol.for("react.element"), A = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), V = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), Y = Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var fe = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === fe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case E:
        return "Fragment";
      case T:
        return "Profiler";
      case B:
        return "StrictMode";
      case X:
        return "Suspense";
      case P:
        return "SuspenseList";
      case ue:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return "Portal";
        case V:
          return e.displayName || "Context";
        case D:
          return (e._context.displayName || "Context") + ".Consumer";
        case J:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case q:
          return t = e.displayName || null, t !== null ? t : ee(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var pe = Array.isArray, w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, te = [], Z = -1;
  function x(e) {
    return { current: e };
  }
  function L(e) {
    0 > Z || (e.current = te[Z], te[Z] = null, Z--);
  }
  function ne(e, t) {
    Z++, te[Z] = e.current, e.current = t;
  }
  var ie = x(null), se = x(null), be = x(null), ve = x(null);
  function ut(e, t) {
    switch (ne(be, t), ne(se, e), ne(ie, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? km(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = km(t), e = Km(t, e);
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
    L(ie), ne(ie, e);
  }
  function Ve() {
    L(ie), L(se), L(be);
  }
  function yn(e) {
    e.memoizedState !== null && ne(ve, e);
    var t = ie.current, n = Km(t, e.type);
    t !== n && (ne(se, e), ne(ie, n));
  }
  function jn(e) {
    se.current === e && (L(ie), L(se)), ve.current === e && (L(ve), Zr._currentValue = M);
  }
  var wn, F;
  function he(e) {
    if (wn === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        wn = t && t[1] || "", F = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wn + e + F;
  }
  var Ke = !1;
  function at(e, t) {
    if (!e || Ke) return "";
    Ke = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (U) {
                  var z = U;
                }
                Reflect.construct(e, [], k);
              } else {
                try {
                  k.call();
                } catch (U) {
                  z = U;
                }
                e.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                z = U;
              }
              (k = e()) && typeof k.catch == "function" && k.catch(function() {
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
      var c = i.DetermineComponentFrameRoot(), p = c[0], S = c[1];
      if (p && S) {
        var N = p.split(`
`), C = S.split(`
`);
        for (o = i = 0; i < N.length && !N[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < C.length && !C[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === N.length || o === C.length)
          for (i = N.length - 1, o = C.length - 1; 1 <= i && 0 <= o && N[i] !== C[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (N[i] !== C[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || N[i] !== C[o]) {
                  var G = `
` + N[i].replace(" at new ", " at ");
                  return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      Ke = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? he(n) : "";
  }
  function xt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return he(e.type);
      case 16:
        return he("Lazy");
      case 13:
        return e.child !== t && t !== null ? he("Suspense Fallback") : he("Suspense");
      case 19:
        return he("SuspenseList");
      case 0:
      case 15:
        return at(e.type, !1);
      case 11:
        return at(e.type.render, !1);
      case 1:
        return at(e.type, !0);
      case 31:
        return he("Activity");
      default:
        return "";
    }
  }
  function bt(e) {
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
  var Tt = Object.prototype.hasOwnProperty, cn = a.unstable_scheduleCallback, Ye = a.unstable_cancelCallback, ai = a.unstable_shouldYield, ar = a.unstable_requestPaint, Nt = a.unstable_now, js = a.unstable_getCurrentPriorityLevel, ir = a.unstable_ImmediatePriority, ws = a.unstable_UserBlockingPriority, ii = a.unstable_NormalPriority, ri = a.unstable_LowPriority, rr = a.unstable_IdlePriority, sr = a.log, lr = a.unstable_setDisableYieldValue, si = null, At = null;
  function un(e) {
    if (typeof sr == "function" && lr(e), At && typeof At.setStrictMode == "function")
      try {
        At.setStrictMode(si, e);
      } catch {
      }
  }
  var jt = Math.clz32 ? Math.clz32 : Qt, ta = Math.log, or = Math.LN2;
  function Qt(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ta(e) / or | 0) | 0;
  }
  var li = 256, Ca = 262144, Jt = 4194304;
  function vn(e) {
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
  function Da(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var S = i & 134217727;
    return S !== 0 ? (i = S & ~c, i !== 0 ? o = vn(i) : (p &= S, p !== 0 ? o = vn(p) : n || (n = S & ~e, n !== 0 && (o = vn(n))))) : (S = i & ~c, S !== 0 ? o = vn(S) : p !== 0 ? o = vn(p) : n || (n = i & ~e, n !== 0 && (o = vn(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function na(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $s(e, t) {
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
  function cr() {
    var e = Jt;
    return Jt <<= 1, (Jt & 62914560) === 0 && (Jt = 4194304), e;
  }
  function H(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ye(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function St(e, t, n, i, o, c) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var S = e.entanglements, N = e.expirationTimes, C = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var G = 31 - jt(n), k = 1 << G;
      S[G] = 0, N[G] = -1;
      var z = C[G];
      if (z !== null)
        for (C[G] = null, G = 0; G < z.length; G++) {
          var U = z[G];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~k;
    }
    i !== 0 && za(e, i, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function za(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - jt(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930;
  }
  function Re(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - jt(n), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), n &= ~o;
    }
  }
  function $n(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Mt(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Mt(e) {
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
  function Ht(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ur() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : mh(e.type));
  }
  function it(e, t) {
    var n = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = n;
    }
  }
  var _t = Math.random().toString(36).slice(2), et = "__reactFiber$" + _t, Ot = "__reactProps$" + _t, oi = "__reactContainer$" + _t, So = "__reactEvents$" + _t, My = "__reactListeners$" + _t, Oy = "__reactHandles$" + _t, Md = "__reactResources$" + _t, dr = "__reactMarker$" + _t;
  function _o(e) {
    delete e[et], delete e[Ot], delete e[So], delete e[My], delete e[Oy];
  }
  function ci(e) {
    var t = e[et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[oi] || n[et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Wm(e); e !== null; ) {
            if (n = e[et]) return n;
            e = Wm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ui(e) {
    if (e = e[et] || e[oi]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function fr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function di(e) {
    var t = e[Md];
    return t || (t = e[Md] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ft(e) {
    e[dr] = !0;
  }
  var Od = /* @__PURE__ */ new Set(), Cd = {};
  function Ra(e, t) {
    fi(e, t), fi(e + "Capture", t);
  }
  function fi(e, t) {
    for (Cd[e] = t, e = 0; e < t.length; e++)
      Od.add(t[e]);
  }
  var Cy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Dd = {}, zd = {};
  function Dy(e) {
    return Tt.call(zd, e) ? !0 : Tt.call(Dd, e) ? !1 : Cy.test(e) ? zd[e] = !0 : (Dd[e] = !0, !1);
  }
  function Ts(e, t, n) {
    if (Dy(t))
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
  function Ms(e, t, n) {
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
  function Tn(e, t, n, i) {
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
  function Zt(e) {
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
  function zy(e, t, n) {
    var i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var o = i.get, c = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(p) {
          n = "" + p, c.call(this, p);
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
  function Eo(e) {
    if (!e._valueTracker) {
      var t = Rd(e) ? "checked" : "value";
      e._valueTracker = zy(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ud(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = Rd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Os(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ry = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(
      Ry,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xo(e, t, n, i, o, c, p, S) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? No(e, p, Zt(t)) : n != null ? No(e, p, Zt(n)) : i != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Zt(S) : e.removeAttribute("name");
  }
  function Ld(e, t, n, i, o, c, p, S) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Eo(e);
        return;
      }
      n = n != null ? "" + Zt(n) : "", t = t != null ? "" + Zt(t) : n, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = S ? e.checked : !!i, e.defaultChecked = !!i, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Eo(e);
  }
  function No(e, t, n) {
    t === "number" && Os(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function pi(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Zt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bd(e, t, n) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function Vd(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(l(92));
        if (pe(i)) {
          if (1 < i.length) throw Error(l(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = Zt(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i), Eo(e);
  }
  function mi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Uy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hd(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Uy.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
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
      for (var c in t)
        t.hasOwnProperty(c) && Hd(e, c, t[c]);
  }
  function Ao(e) {
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
  var Ly = /* @__PURE__ */ new Map([
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
  ]), By = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cs(e) {
    return By.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Mn() {
  }
  var jo = null;
  function wo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var hi = null, gi = null;
  function qd(e) {
    var t = ui(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (xo(
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
              'input[name="' + Ft(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[Ot] || null;
                if (!o) throw Error(l(90));
                xo(
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
              i = n[t], i.form === e.form && Ud(i);
          }
          break e;
        case "textarea":
          Bd(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && pi(e, !!n.multiple, t, !1);
      }
    }
  }
  var $o = !1;
  function Id(e, t, n) {
    if ($o) return e(t, n);
    $o = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if ($o = !1, (hi !== null || gi !== null) && (bl(), hi && (t = hi, e = gi, gi = hi = null, qd(t), e)))
        for (t = 0; t < e.length; t++) qd(e[t]);
    }
  }
  function pr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[Ot] || null;
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
      var mr = {};
      Object.defineProperty(mr, "passive", {
        get: function() {
          To = !0;
        }
      }), window.addEventListener("test", mr, mr), window.removeEventListener("test", mr, mr);
    } catch {
      To = !1;
    }
  var aa = null, Mo = null, Ds = null;
  function kd() {
    if (Ds) return Ds;
    var e, t = Mo, n = t.length, i, o = "value" in aa ? aa.value : aa.textContent, c = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (i = 1; i <= p && t[n - i] === o[c - i]; i++) ;
    return Ds = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function zs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Rs() {
    return !0;
  }
  function Kd() {
    return !1;
  }
  function Ct(e) {
    function t(n, i, o, c, p) {
      this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(c) : c[S]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Rs : Kd, this.isPropagationStopped = Kd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Rs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Rs);
      },
      persist: function() {
      },
      isPersistent: Rs
    }), t;
  }
  var Ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Us = Ct(Ua), hr = b({}, Ua, { view: 0, detail: 0 }), Vy = Ct(hr), Oo, Co, gr, Ls = b({}, hr, {
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
    getModifierState: zo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== gr && (gr && e.type === "mousemove" ? (Oo = e.screenX - gr.screenX, Co = e.screenY - gr.screenY) : Co = Oo = 0, gr = e), Oo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Co;
    }
  }), Yd = Ct(Ls), Hy = b({}, Ls, { dataTransfer: 0 }), Gy = Ct(Hy), qy = b({}, hr, { relatedTarget: 0 }), Do = Ct(qy), Iy = b({}, Ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ky = Ct(Iy), Ky = b({}, Ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Yy = Ct(Ky), Xy = b({}, Ua, { data: 0 }), Xd = Ct(Xy), Qy = {
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
  }, Jy = {
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
  }, Zy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Fy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zy[e]) ? !!t[e] : !1;
  }
  function zo() {
    return Fy;
  }
  var Wy = b({}, hr, {
    key: function(e) {
      if (e.key) {
        var t = Qy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = zs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zo,
    charCode: function(e) {
      return e.type === "keypress" ? zs(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Py = Ct(Wy), ev = b({}, Ls, {
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
  }), Qd = Ct(ev), tv = b({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zo
  }), nv = Ct(tv), av = b({}, Ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), iv = Ct(av), rv = b({}, Ls, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sv = Ct(rv), lv = b({}, Ua, {
    newState: 0,
    oldState: 0
  }), ov = Ct(lv), cv = [9, 13, 27, 32], Ro = On && "CompositionEvent" in window, yr = null;
  On && "documentMode" in document && (yr = document.documentMode);
  var uv = On && "TextEvent" in window && !yr, Jd = On && (!Ro || yr && 8 < yr && 11 >= yr), Zd = " ", Fd = !1;
  function Wd(e, t) {
    switch (e) {
      case "keyup":
        return cv.indexOf(t.keyCode) !== -1;
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
  var yi = !1;
  function dv(e, t) {
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
  function fv(e, t) {
    if (yi)
      return e === "compositionend" || !Ro && Wd(e, t) ? (e = kd(), Ds = Mo = aa = null, yi = !1, e) : null;
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
  var pv = {
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
    return t === "input" ? !!pv[e.type] : t === "textarea";
  }
  function tf(e, t, n, i) {
    hi ? gi ? gi.push(i) : gi = [i] : hi = i, t = jl(t, "onChange"), 0 < t.length && (n = new Us(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var vr = null, br = null;
  function mv(e) {
    Bm(e, 0);
  }
  function Bs(e) {
    var t = fr(e);
    if (Ud(t)) return e;
  }
  function nf(e, t) {
    if (e === "change") return t;
  }
  var af = !1;
  if (On) {
    var Uo;
    if (On) {
      var Lo = "oninput" in document;
      if (!Lo) {
        var rf = document.createElement("div");
        rf.setAttribute("oninput", "return;"), Lo = typeof rf.oninput == "function";
      }
      Uo = Lo;
    } else Uo = !1;
    af = Uo && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    vr && (vr.detachEvent("onpropertychange", lf), br = vr = null);
  }
  function lf(e) {
    if (e.propertyName === "value" && Bs(br)) {
      var t = [];
      tf(
        t,
        br,
        e,
        wo(e)
      ), Id(mv, t);
    }
  }
  function hv(e, t, n) {
    e === "focusin" ? (sf(), vr = t, br = n, vr.attachEvent("onpropertychange", lf)) : e === "focusout" && sf();
  }
  function gv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Bs(br);
  }
  function yv(e, t) {
    if (e === "click") return Bs(t);
  }
  function vv(e, t) {
    if (e === "input" || e === "change")
      return Bs(t);
  }
  function bv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Gt = typeof Object.is == "function" ? Object.is : bv;
  function Sr(e, t) {
    if (Gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Tt.call(t, o) || !Gt(e[o], t[o]))
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
    for (var t = Os(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Os(e.document);
    }
    return t;
  }
  function Bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Sv = On && "documentMode" in document && 11 >= document.documentMode, vi = null, Vo = null, _r = null, Ho = !1;
  function ff(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho || vi == null || vi !== Os(i) || (i = vi, "selectionStart" in i && Bo(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), _r && Sr(_r, i) || (_r = i, i = jl(Vo, "onSelect"), 0 < i.length && (t = new Us(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = vi)));
  }
  function La(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var bi = {
    animationend: La("Animation", "AnimationEnd"),
    animationiteration: La("Animation", "AnimationIteration"),
    animationstart: La("Animation", "AnimationStart"),
    transitionrun: La("Transition", "TransitionRun"),
    transitionstart: La("Transition", "TransitionStart"),
    transitioncancel: La("Transition", "TransitionCancel"),
    transitionend: La("Transition", "TransitionEnd")
  }, Go = {}, pf = {};
  On && (pf = document.createElement("div").style, "AnimationEvent" in window || (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation), "TransitionEvent" in window || delete bi.transitionend.transition);
  function Ba(e) {
    if (Go[e]) return Go[e];
    if (!bi[e]) return e;
    var t = bi[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in pf)
        return Go[e] = t[n];
    return e;
  }
  var mf = Ba("animationend"), hf = Ba("animationiteration"), gf = Ba("animationstart"), _v = Ba("transitionrun"), Ev = Ba("transitionstart"), xv = Ba("transitioncancel"), yf = Ba("transitionend"), vf = /* @__PURE__ */ new Map(), qo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  qo.push("scrollEnd");
  function dn(e, t) {
    vf.set(e, t), Ra(t, [e]);
  }
  var Vs = typeof reportError == "function" ? reportError : function(e) {
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
  }, Wt = [], Si = 0, Io = 0;
  function Hs() {
    for (var e = Si, t = Io = Si = 0; t < e; ) {
      var n = Wt[t];
      Wt[t++] = null;
      var i = Wt[t];
      Wt[t++] = null;
      var o = Wt[t];
      Wt[t++] = null;
      var c = Wt[t];
      if (Wt[t++] = null, i !== null && o !== null) {
        var p = i.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), i.pending = o;
      }
      c !== 0 && bf(n, o, c);
    }
  }
  function Gs(e, t, n, i) {
    Wt[Si++] = e, Wt[Si++] = t, Wt[Si++] = n, Wt[Si++] = i, Io |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function ko(e, t, n, i) {
    return Gs(e, t, n, i), qs(e);
  }
  function Va(e, t) {
    return Gs(e, null, null, t), qs(e);
  }
  function bf(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, c = e.return; c !== null; )
      c.childLanes |= n, i = c.alternate, i !== null && (i.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - jt(n), e = c.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), c) : null;
  }
  function qs(e) {
    if (50 < Ir)
      throw Ir = 0, Pc = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var _i = {};
  function Nv(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qt(e, t, n, i) {
    return new Nv(e, t, n, i);
  }
  function Ko(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = qt(
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
  function Is(e, t, n, i, o, c) {
    var p = 0;
    if (i = e, typeof e == "function") Ko(e) && (p = 1);
    else if (typeof e == "string")
      p = Tb(
        e,
        n,
        ie.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ue:
          return e = qt(31, n, t, o), e.elementType = ue, e.lanes = c, e;
        case E:
          return Ha(n.children, o, c, t);
        case B:
          p = 8, o |= 24;
          break;
        case T:
          return e = qt(12, n, t, o | 2), e.elementType = T, e.lanes = c, e;
        case X:
          return e = qt(13, n, t, o), e.elementType = X, e.lanes = c, e;
        case P:
          return e = qt(19, n, t, o), e.elementType = P, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case V:
                p = 10;
                break e;
              case D:
                p = 9;
                break e;
              case J:
                p = 11;
                break e;
              case q:
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
    return t = qt(p, n, t, o), t.elementType = e, t.type = i, t.lanes = c, t;
  }
  function Ha(e, t, n, i) {
    return e = qt(7, e, i, t), e.lanes = n, e;
  }
  function Yo(e, t, n) {
    return e = qt(6, e, null, t), e.lanes = n, e;
  }
  function _f(e) {
    var t = qt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Xo(e, t, n) {
    return t = qt(
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
  function Pt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ef.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: bt(t)
      }, Ef.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: bt(t)
    };
  }
  var Ei = [], xi = 0, ks = null, Er = 0, en = [], tn = 0, ia = null, bn = 1, Sn = "";
  function Dn(e, t) {
    Ei[xi++] = Er, Ei[xi++] = ks, ks = e, Er = t;
  }
  function xf(e, t, n) {
    en[tn++] = bn, en[tn++] = Sn, en[tn++] = ia, ia = e;
    var i = bn;
    e = Sn;
    var o = 32 - jt(i) - 1;
    i &= ~(1 << o), n += 1;
    var c = 32 - jt(t) + o;
    if (30 < c) {
      var p = o - o % 5;
      c = (i & (1 << p) - 1).toString(32), i >>= p, o -= p, bn = 1 << 32 - jt(t) + o | n << o | i, Sn = c + e;
    } else
      bn = 1 << c | n << o | i, Sn = e;
  }
  function Qo(e) {
    e.return !== null && (Dn(e, 1), xf(e, 1, 0));
  }
  function Jo(e) {
    for (; e === ks; )
      ks = Ei[--xi], Ei[xi] = null, Er = Ei[--xi], Ei[xi] = null;
    for (; e === ia; )
      ia = en[--tn], en[tn] = null, Sn = en[--tn], en[tn] = null, bn = en[--tn], en[tn] = null;
  }
  function Nf(e, t) {
    en[tn++] = bn, en[tn++] = Sn, en[tn++] = ia, bn = t.id, Sn = t.overflow, ia = e;
  }
  var ht = null, Xe = null, Te = !1, ra = null, nn = !1, Zo = Error(l(519));
  function sa(e) {
    var t = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xr(Pt(t, e)), Zo;
  }
  function Af(e) {
    var t = e.stateNode, n = e.type, i = e.memoizedProps;
    switch (t[et] = e, t[Ot] = i, n) {
      case "dialog":
        je("cancel", t), je("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        je("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Kr.length; n++)
          je(Kr[n], t);
        break;
      case "source":
        je("error", t);
        break;
      case "img":
      case "image":
      case "link":
        je("error", t), je("load", t);
        break;
      case "details":
        je("toggle", t);
        break;
      case "input":
        je("invalid", t), Ld(
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
        je("invalid", t);
        break;
      case "textarea":
        je("invalid", t), Vd(t, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || qm(t.textContent, n) ? (i.popover != null && (je("beforetoggle", t), je("toggle", t)), i.onScroll != null && je("scroll", t), i.onScrollEnd != null && je("scrollend", t), i.onClick != null && (t.onclick = Mn), t = !0) : t = !1, t || sa(e, !0);
  }
  function jf(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function Ni(e) {
    if (e !== ht) return !1;
    if (!Te) return jf(e), Te = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || mu(e.type, e.memoizedProps)), n = !n), n && Xe && sa(e), jf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Xe = Fm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Xe = Fm(e);
    } else
      t === 27 ? (t = Xe, Sa(e.type) ? (e = bu, bu = null, Xe = e) : Xe = t) : Xe = ht ? rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ga() {
    Xe = ht = null, Te = !1;
  }
  function Fo() {
    var e = ra;
    return e !== null && (Ut === null ? Ut = e : Ut.push.apply(
      Ut,
      e
    ), ra = null), e;
  }
  function xr(e) {
    ra === null ? ra = [e] : ra.push(e);
  }
  var Wo = x(null), qa = null, zn = null;
  function la(e, t, n) {
    ne(Wo, t._currentValue), t._currentValue = n;
  }
  function Rn(e) {
    e._currentValue = Wo.current, L(Wo);
  }
  function Po(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ec(e, t, n, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var p = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var S = c;
          c = o;
          for (var N = 0; N < t.length; N++)
            if (S.context === t[N]) {
              c.lanes |= n, S = c.alternate, S !== null && (S.lanes |= n), Po(
                c.return,
                n,
                e
              ), i || (p = null);
              break e;
            }
          c = S.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(l(341));
        p.lanes |= n, c = p.alternate, c !== null && (c.lanes |= n), Po(p, n, e), p = null;
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
  function Ai(e, t, n, i) {
    e = null;
    for (var o = t, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(l(387));
        if (p = p.memoizedProps, p !== null) {
          var S = o.type;
          Gt(o.pendingProps.value, p.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (o === ve.current) {
        if (p = o.alternate, p === null) throw Error(l(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Zr) : e = [Zr]);
      }
      o = o.return;
    }
    e !== null && ec(
      t,
      e,
      n,
      i
    ), t.flags |= 262144;
  }
  function Ks(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Gt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ia(e) {
    qa = e, zn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return wf(qa, e);
  }
  function Ys(e, t) {
    return qa === null && Ia(e), wf(e, t);
  }
  function wf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, zn === null) {
      if (e === null) throw Error(l(308));
      zn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else zn = zn.next = t;
    return n;
  }
  var Av = typeof AbortController < "u" ? AbortController : function() {
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
  }, jv = a.unstable_scheduleCallback, wv = a.unstable_NormalPriority, rt = {
    $$typeof: V,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function tc() {
    return {
      controller: new Av(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Nr(e) {
    e.refCount--, e.refCount === 0 && jv(wv, function() {
      e.controller.abort();
    });
  }
  var Ar = null, nc = 0, ji = 0, wi = null;
  function $v(e, t) {
    if (Ar === null) {
      var n = Ar = [];
      nc = 0, ji = ru(), wi = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return nc++, t.then($f, $f), t;
  }
  function $f() {
    if (--nc === 0 && Ar !== null) {
      wi !== null && (wi.status = "fulfilled");
      var e = Ar;
      Ar = null, ji = 0, wi = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Tv(e, t) {
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
  var Tf = w.S;
  w.S = function(e, t) {
    fm = Nt(), typeof t == "object" && t !== null && typeof t.then == "function" && $v(e, t), Tf !== null && Tf(e, t);
  };
  var ka = x(null);
  function ac() {
    var e = ka.current;
    return e !== null ? e : ke.pooledCache;
  }
  function Xs(e, t) {
    t === null ? ne(ka, ka.current) : ne(ka, t.pool);
  }
  function Mf() {
    var e = ac();
    return e === null ? null : { parent: rt._currentValue, pool: e };
  }
  var $i = Error(l(460)), ic = Error(l(474)), Qs = Error(l(542)), Js = { then: function() {
  } };
  function Of(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Cf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Mn, Mn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, zf(e), e;
      default:
        if (typeof t.status == "string") t.then(Mn, Mn);
        else {
          if (e = ke, e !== null && 100 < e.shellSuspendCounter)
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
        throw Ya = t, $i;
    }
  }
  function Ka(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ya = n, $i) : n;
    }
  }
  var Ya = null;
  function Df() {
    if (Ya === null) throw Error(l(459));
    var e = Ya;
    return Ya = null, e;
  }
  function zf(e) {
    if (e === $i || e === Qs)
      throw Error(l(483));
  }
  var Ti = null, jr = 0;
  function Zs(e) {
    var t = jr;
    return jr += 1, Ti === null && (Ti = []), Cf(Ti, e, t);
  }
  function wr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Fs(e, t) {
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
        var O = $.deletions;
        O === null ? ($.deletions = [j], $.flags |= 16) : O.push(j);
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
    function c($, j, O) {
      return $.index = O, e ? (O = $.alternate, O !== null ? (O = O.index, O < j ? ($.flags |= 67108866, j) : O) : ($.flags |= 67108866, j)) : ($.flags |= 1048576, j);
    }
    function p($) {
      return e && $.alternate === null && ($.flags |= 67108866), $;
    }
    function S($, j, O, I) {
      return j === null || j.tag !== 6 ? (j = Yo(O, $.mode, I), j.return = $, j) : (j = o(j, O), j.return = $, j);
    }
    function N($, j, O, I) {
      var de = O.type;
      return de === E ? G(
        $,
        j,
        O.props.children,
        I,
        O.key
      ) : j !== null && (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === ce && Ka(de) === j.type) ? (j = o(j, O.props), wr(j, O), j.return = $, j) : (j = Is(
        O.type,
        O.key,
        O.props,
        null,
        $.mode,
        I
      ), wr(j, O), j.return = $, j);
    }
    function C($, j, O, I) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== O.containerInfo || j.stateNode.implementation !== O.implementation ? (j = Xo(O, $.mode, I), j.return = $, j) : (j = o(j, O.children || []), j.return = $, j);
    }
    function G($, j, O, I, de) {
      return j === null || j.tag !== 7 ? (j = Ha(
        O,
        $.mode,
        I,
        de
      ), j.return = $, j) : (j = o(j, O), j.return = $, j);
    }
    function k($, j, O) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Yo(
          "" + j,
          $.mode,
          O
        ), j.return = $, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case A:
            return O = Is(
              j.type,
              j.key,
              j.props,
              null,
              $.mode,
              O
            ), wr(O, j), O.return = $, O;
          case R:
            return j = Xo(
              j,
              $.mode,
              O
            ), j.return = $, j;
          case ce:
            return j = Ka(j), k($, j, O);
        }
        if (pe(j) || re(j))
          return j = Ha(
            j,
            $.mode,
            O,
            null
          ), j.return = $, j;
        if (typeof j.then == "function")
          return k($, Zs(j), O);
        if (j.$$typeof === V)
          return k(
            $,
            Ys($, j),
            O
          );
        Fs($, j);
      }
      return null;
    }
    function z($, j, O, I) {
      var de = j !== null ? j.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return de !== null ? null : S($, j, "" + O, I);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case A:
            return O.key === de ? N($, j, O, I) : null;
          case R:
            return O.key === de ? C($, j, O, I) : null;
          case ce:
            return O = Ka(O), z($, j, O, I);
        }
        if (pe(O) || re(O))
          return de !== null ? null : G($, j, O, I, null);
        if (typeof O.then == "function")
          return z(
            $,
            j,
            Zs(O),
            I
          );
        if (O.$$typeof === V)
          return z(
            $,
            j,
            Ys($, O),
            I
          );
        Fs($, O);
      }
      return null;
    }
    function U($, j, O, I, de) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return $ = $.get(O) || null, S(j, $, "" + I, de);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case A:
            return $ = $.get(
              I.key === null ? O : I.key
            ) || null, N(j, $, I, de);
          case R:
            return $ = $.get(
              I.key === null ? O : I.key
            ) || null, C(j, $, I, de);
          case ce:
            return I = Ka(I), U(
              $,
              j,
              O,
              I,
              de
            );
        }
        if (pe(I) || re(I))
          return $ = $.get(O) || null, G(j, $, I, de, null);
        if (typeof I.then == "function")
          return U(
            $,
            j,
            O,
            Zs(I),
            de
          );
        if (I.$$typeof === V)
          return U(
            $,
            j,
            O,
            Ys(j, I),
            de
          );
        Fs(j, I);
      }
      return null;
    }
    function le($, j, O, I) {
      for (var de = null, Ce = null, oe = j, Ne = j = 0, $e = null; oe !== null && Ne < O.length; Ne++) {
        oe.index > Ne ? ($e = oe, oe = null) : $e = oe.sibling;
        var De = z(
          $,
          oe,
          O[Ne],
          I
        );
        if (De === null) {
          oe === null && (oe = $e);
          break;
        }
        e && oe && De.alternate === null && t($, oe), j = c(De, j, Ne), Ce === null ? de = De : Ce.sibling = De, Ce = De, oe = $e;
      }
      if (Ne === O.length)
        return n($, oe), Te && Dn($, Ne), de;
      if (oe === null) {
        for (; Ne < O.length; Ne++)
          oe = k($, O[Ne], I), oe !== null && (j = c(
            oe,
            j,
            Ne
          ), Ce === null ? de = oe : Ce.sibling = oe, Ce = oe);
        return Te && Dn($, Ne), de;
      }
      for (oe = i(oe); Ne < O.length; Ne++)
        $e = U(
          oe,
          $,
          Ne,
          O[Ne],
          I
        ), $e !== null && (e && $e.alternate !== null && oe.delete(
          $e.key === null ? Ne : $e.key
        ), j = c(
          $e,
          j,
          Ne
        ), Ce === null ? de = $e : Ce.sibling = $e, Ce = $e);
      return e && oe.forEach(function(Aa) {
        return t($, Aa);
      }), Te && Dn($, Ne), de;
    }
    function me($, j, O, I) {
      if (O == null) throw Error(l(151));
      for (var de = null, Ce = null, oe = j, Ne = j = 0, $e = null, De = O.next(); oe !== null && !De.done; Ne++, De = O.next()) {
        oe.index > Ne ? ($e = oe, oe = null) : $e = oe.sibling;
        var Aa = z($, oe, De.value, I);
        if (Aa === null) {
          oe === null && (oe = $e);
          break;
        }
        e && oe && Aa.alternate === null && t($, oe), j = c(Aa, j, Ne), Ce === null ? de = Aa : Ce.sibling = Aa, Ce = Aa, oe = $e;
      }
      if (De.done)
        return n($, oe), Te && Dn($, Ne), de;
      if (oe === null) {
        for (; !De.done; Ne++, De = O.next())
          De = k($, De.value, I), De !== null && (j = c(De, j, Ne), Ce === null ? de = De : Ce.sibling = De, Ce = De);
        return Te && Dn($, Ne), de;
      }
      for (oe = i(oe); !De.done; Ne++, De = O.next())
        De = U(oe, $, Ne, De.value, I), De !== null && (e && De.alternate !== null && oe.delete(De.key === null ? Ne : De.key), j = c(De, j, Ne), Ce === null ? de = De : Ce.sibling = De, Ce = De);
      return e && oe.forEach(function(Hb) {
        return t($, Hb);
      }), Te && Dn($, Ne), de;
    }
    function qe($, j, O, I) {
      if (typeof O == "object" && O !== null && O.type === E && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case A:
            e: {
              for (var de = O.key; j !== null; ) {
                if (j.key === de) {
                  if (de = O.type, de === E) {
                    if (j.tag === 7) {
                      n(
                        $,
                        j.sibling
                      ), I = o(
                        j,
                        O.props.children
                      ), I.return = $, $ = I;
                      break e;
                    }
                  } else if (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === ce && Ka(de) === j.type) {
                    n(
                      $,
                      j.sibling
                    ), I = o(j, O.props), wr(I, O), I.return = $, $ = I;
                    break e;
                  }
                  n($, j);
                  break;
                } else t($, j);
                j = j.sibling;
              }
              O.type === E ? (I = Ha(
                O.props.children,
                $.mode,
                I,
                O.key
              ), I.return = $, $ = I) : (I = Is(
                O.type,
                O.key,
                O.props,
                null,
                $.mode,
                I
              ), wr(I, O), I.return = $, $ = I);
            }
            return p($);
          case R:
            e: {
              for (de = O.key; j !== null; ) {
                if (j.key === de)
                  if (j.tag === 4 && j.stateNode.containerInfo === O.containerInfo && j.stateNode.implementation === O.implementation) {
                    n(
                      $,
                      j.sibling
                    ), I = o(j, O.children || []), I.return = $, $ = I;
                    break e;
                  } else {
                    n($, j);
                    break;
                  }
                else t($, j);
                j = j.sibling;
              }
              I = Xo(O, $.mode, I), I.return = $, $ = I;
            }
            return p($);
          case ce:
            return O = Ka(O), qe(
              $,
              j,
              O,
              I
            );
        }
        if (pe(O))
          return le(
            $,
            j,
            O,
            I
          );
        if (re(O)) {
          if (de = re(O), typeof de != "function") throw Error(l(150));
          return O = de.call(O), me(
            $,
            j,
            O,
            I
          );
        }
        if (typeof O.then == "function")
          return qe(
            $,
            j,
            Zs(O),
            I
          );
        if (O.$$typeof === V)
          return qe(
            $,
            j,
            Ys($, O),
            I
          );
        Fs($, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, j !== null && j.tag === 6 ? (n($, j.sibling), I = o(j, O), I.return = $, $ = I) : (n($, j), I = Yo(O, $.mode, I), I.return = $, $ = I), p($)) : n($, j);
    }
    return function($, j, O, I) {
      try {
        jr = 0;
        var de = qe(
          $,
          j,
          O,
          I
        );
        return Ti = null, de;
      } catch (oe) {
        if (oe === $i || oe === Qs) throw oe;
        var Ce = qt(29, oe, null, $.mode);
        return Ce.lanes = I, Ce.return = $, Ce;
      } finally {
      }
    };
  }
  var Xa = Rf(!0), Uf = Rf(!1), oa = !1;
  function rc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function sc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ca(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (ze & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = qs(e), bf(e, null, n), t;
    }
    return Gs(e, i, t, n), qs(e);
  }
  function $r(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Re(e, n);
    }
  }
  function lc(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var o = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? o = c = p : c = c.next = p, n = n.next;
        } while (n !== null);
        c === null ? o = c = t : c = c.next = t;
      } else o = c = t;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var oc = !1;
  function Tr() {
    if (oc) {
      var e = wi;
      if (e !== null) throw e;
    }
  }
  function Mr(e, t, n, i) {
    oc = !1;
    var o = e.updateQueue;
    oa = !1;
    var c = o.firstBaseUpdate, p = o.lastBaseUpdate, S = o.shared.pending;
    if (S !== null) {
      o.shared.pending = null;
      var N = S, C = N.next;
      N.next = null, p === null ? c = C : p.next = C, p = N;
      var G = e.alternate;
      G !== null && (G = G.updateQueue, S = G.lastBaseUpdate, S !== p && (S === null ? G.firstBaseUpdate = C : S.next = C, G.lastBaseUpdate = N));
    }
    if (c !== null) {
      var k = o.baseState;
      p = 0, G = C = N = null, S = c;
      do {
        var z = S.lane & -536870913, U = z !== S.lane;
        if (U ? (we & z) === z : (i & z) === z) {
          z !== 0 && z === ji && (oc = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var le = e, me = S;
            z = t;
            var qe = n;
            switch (me.tag) {
              case 1:
                if (le = me.payload, typeof le == "function") {
                  k = le.call(qe, k, z);
                  break e;
                }
                k = le;
                break e;
              case 3:
                le.flags = le.flags & -65537 | 128;
              case 0:
                if (le = me.payload, z = typeof le == "function" ? le.call(qe, k, z) : le, z == null) break e;
                k = b({}, k, z);
                break e;
              case 2:
                oa = !0;
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
          }, G === null ? (C = G = U, N = k) : G = G.next = U, p |= z;
        if (S = S.next, S === null) {
          if (S = o.shared.pending, S === null)
            break;
          U = S, S = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null;
        }
      } while (!0);
      G === null && (N = k), o.baseState = N, o.firstBaseUpdate = C, o.lastBaseUpdate = G, c === null && (o.shared.lanes = 0), ha |= p, e.lanes = p, e.memoizedState = k;
    }
  }
  function Lf(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function Bf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Lf(n[e], t);
  }
  var Mi = x(null), Ws = x(0);
  function Vf(e, t) {
    e = kn, ne(Ws, e), ne(Mi, t), kn = e | t.baseLanes;
  }
  function cc() {
    ne(Ws, kn), ne(Mi, Mi.current);
  }
  function uc() {
    kn = Ws.current, L(Mi), L(Ws);
  }
  var It = x(null), an = null;
  function da(e) {
    var t = e.alternate;
    ne(tt, tt.current & 1), ne(It, e), an === null && (t === null || Mi.current !== null || t.memoizedState !== null) && (an = e);
  }
  function dc(e) {
    ne(tt, tt.current), ne(It, e), an === null && (an = e);
  }
  function Hf(e) {
    e.tag === 22 ? (ne(tt, tt.current), ne(It, e), an === null && (an = e)) : fa();
  }
  function fa() {
    ne(tt, tt.current), ne(It, It.current);
  }
  function kt(e) {
    L(It), an === e && (an = null), L(tt);
  }
  var tt = x(0);
  function Ps(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || yu(n) || vu(n)))
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
  var Un = 0, xe = null, He = null, st = null, el = !1, Oi = !1, Qa = !1, tl = 0, Or = 0, Ci = null, Mv = 0;
  function Fe() {
    throw Error(l(321));
  }
  function fc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Gt(e[n], t[n])) return !1;
    return !0;
  }
  function pc(e, t, n, i, o, c) {
    return Un = c, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? xp : $c, Qa = !1, c = n(i, o), Qa = !1, Oi && (c = qf(
      t,
      n,
      i,
      o
    )), Gf(e), c;
  }
  function Gf(e) {
    w.H = zr;
    var t = He !== null && He.next !== null;
    if (Un = 0, st = He = xe = null, el = !1, Or = 0, Ci = null, t) throw Error(l(300));
    e === null || lt || (e = e.dependencies, e !== null && Ks(e) && (lt = !0));
  }
  function qf(e, t, n, i) {
    xe = e;
    var o = 0;
    do {
      if (Oi && (Ci = null), Or = 0, Oi = !1, 25 <= o) throw Error(l(301));
      if (o += 1, st = He = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      w.H = Np, c = t(n, i);
    } while (Oi);
    return c;
  }
  function Ov() {
    var e = w.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Cr(t) : t, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function mc() {
    var e = tl !== 0;
    return tl = 0, e;
  }
  function hc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function gc(e) {
    if (el) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      el = !1;
    }
    Un = 0, st = He = xe = null, Oi = !1, Or = tl = 0, Ci = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return st === null ? xe.memoizedState = st = e : st = st.next = e, st;
  }
  function nt() {
    if (He === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = st === null ? xe.memoizedState : st.next;
    if (t !== null)
      st = t, He = e;
    else {
      if (e === null)
        throw xe.alternate === null ? Error(l(467)) : Error(l(310));
      He = e, e = {
        memoizedState: He.memoizedState,
        baseState: He.baseState,
        baseQueue: He.baseQueue,
        queue: He.queue,
        next: null
      }, st === null ? xe.memoizedState = st = e : st = st.next = e;
    }
    return st;
  }
  function nl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cr(e) {
    var t = Or;
    return Or += 1, Ci === null && (Ci = []), e = Cf(Ci, e, t), t = xe, (st === null ? t.memoizedState : st.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? xp : $c), e;
  }
  function al(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Cr(e);
      if (e.$$typeof === V) return gt(e);
    }
    throw Error(l(438, String(e)));
  }
  function yc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = nl(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = Y;
    return t.index++, n;
  }
  function Ln(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function il(e) {
    var t = nt();
    return vc(t, He, e);
  }
  function vc(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = n;
    var o = e.baseQueue, c = i.pending;
    if (c !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = c.next, c.next = p;
      }
      t.baseQueue = o = c, i.pending = null;
    }
    if (c = e.baseState, o === null) e.memoizedState = c;
    else {
      t = o.next;
      var S = p = null, N = null, C = t, G = !1;
      do {
        var k = C.lane & -536870913;
        if (k !== C.lane ? (we & k) === k : (Un & k) === k) {
          var z = C.revertLane;
          if (z === 0)
            N !== null && (N = N.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), k === ji && (G = !0);
          else if ((Un & z) === z) {
            C = C.next, z === ji && (G = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, N === null ? (S = N = k, p = c) : N = N.next = k, xe.lanes |= z, ha |= z;
          k = C.action, Qa && n(c, k), c = C.hasEagerState ? C.eagerState : n(c, k);
        } else
          z = {
            lane: k,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, N === null ? (S = N = z, p = c) : N = N.next = z, xe.lanes |= k, ha |= k;
        C = C.next;
      } while (C !== null && C !== t);
      if (N === null ? p = c : N.next = S, !Gt(c, e.memoizedState) && (lt = !0, G && (n = wi, n !== null)))
        throw n;
      e.memoizedState = c, e.baseState = p, e.baseQueue = N, i.lastRenderedState = c;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function bc(e) {
    var t = nt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, o = n.pending, c = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== o);
      Gt(c, t.memoizedState) || (lt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, i];
  }
  function If(e, t, n) {
    var i = xe, o = nt(), c = Te;
    if (c) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else n = t();
    var p = !Gt(
      (He || o).memoizedState,
      n
    );
    if (p && (o.memoizedState = n, lt = !0), o = o.queue, Ec(Yf.bind(null, i, o, e), [
      e
    ]), o.getSnapshot !== t || p || st !== null && st.memoizedState.tag & 1) {
      if (i.flags |= 2048, Di(
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
      ), ke === null) throw Error(l(349));
      c || (Un & 127) !== 0 || kf(i, t, n);
    }
    return n;
  }
  function kf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = nl(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Kf(e, t, n, i) {
    t.value = n, t.getSnapshot = i, Xf(t) && Qf(e);
  }
  function Yf(e, t, n) {
    return n(function() {
      Xf(t) && Qf(e);
    });
  }
  function Xf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Gt(e, n);
    } catch {
      return !0;
    }
  }
  function Qf(e) {
    var t = Va(e, 2);
    t !== null && Lt(t, e, 2);
  }
  function Sc(e) {
    var t = wt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Qa) {
        un(!0);
        try {
          n();
        } finally {
          un(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ln,
      lastRenderedState: e
    }, t;
  }
  function Jf(e, t, n, i) {
    return e.baseState = n, vc(
      e,
      He,
      typeof i == "function" ? i : Ln
    );
  }
  function Cv(e, t, n, i, o) {
    if (ll(e)) throw Error(l(485));
    if (e = t.action, e !== null) {
      var c = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          c.listeners.push(p);
        }
      };
      w.T !== null ? n(!0) : c.isTransition = !1, i(c), n = t.pending, n === null ? (c.next = t.pending = c, Zf(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function Zf(e, t) {
    var n = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var c = w.T, p = {};
      w.T = p;
      try {
        var S = n(o, i), N = w.S;
        N !== null && N(p, S), Ff(e, t, S);
      } catch (C) {
        _c(e, t, C);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), w.T = c;
      }
    } else
      try {
        c = n(o, i), Ff(e, t, c);
      } catch (C) {
        _c(e, t, C);
      }
  }
  function Ff(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        Wf(e, t, i);
      },
      function(i) {
        return _c(e, t, i);
      }
    ) : Wf(e, t, n);
  }
  function Wf(e, t, n) {
    t.status = "fulfilled", t.value = n, Pf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Zf(e, n)));
  }
  function _c(e, t, n) {
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
    if (Te) {
      var n = ke.formState;
      if (n !== null) {
        e: {
          var i = xe;
          if (Te) {
            if (Xe) {
              t: {
                for (var o = Xe, c = nn; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (o = rn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                Xe = rn(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            sa(i);
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
    ), i.dispatch = n, i = Sc(!1), c = wc.bind(
      null,
      xe,
      !1,
      i.queue
    ), i = wt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, n = Cv.bind(
      null,
      xe,
      o,
      c,
      n
    ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function np(e) {
    var t = nt();
    return ap(t, He, e);
  }
  function ap(e, t, n) {
    if (t = vc(
      e,
      t,
      ep
    )[0], e = il(Ln)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Cr(t);
      } catch (p) {
        throw p === $i ? Qs : p;
      }
    else i = t;
    t = nt();
    var o = t.queue, c = o.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, Di(
      9,
      { destroy: void 0 },
      Dv.bind(null, o, n),
      null
    )), [i, c, e];
  }
  function Dv(e, t) {
    e.action = t;
  }
  function ip(e) {
    var t = nt(), n = He;
    if (n !== null)
      return ap(t, n, e);
    nt(), t = t.memoizedState, n = nt();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function Di(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = xe.updateQueue, t === null && (t = nl(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function rp() {
    return nt().memoizedState;
  }
  function rl(e, t, n, i) {
    var o = wt();
    xe.flags |= e, o.memoizedState = Di(
      1 | t,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function sl(e, t, n, i) {
    var o = nt();
    i = i === void 0 ? null : i;
    var c = o.memoizedState.inst;
    He !== null && i !== null && fc(i, He.memoizedState.deps) ? o.memoizedState = Di(t, c, n, i) : (xe.flags |= e, o.memoizedState = Di(
      1 | t,
      c,
      n,
      i
    ));
  }
  function sp(e, t) {
    rl(8390656, 8, e, t);
  }
  function Ec(e, t) {
    sl(2048, 8, e, t);
  }
  function zv(e) {
    xe.flags |= 4;
    var t = xe.updateQueue;
    if (t === null)
      t = nl(), xe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function lp(e) {
    var t = nt().memoizedState;
    return zv({ ref: t, nextImpl: e }), function() {
      if ((ze & 2) !== 0) throw Error(l(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function op(e, t) {
    return sl(4, 2, e, t);
  }
  function cp(e, t) {
    return sl(4, 4, e, t);
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
    n = n != null ? n.concat([e]) : null, sl(4, 4, up.bind(null, t, e), n);
  }
  function xc() {
  }
  function fp(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && fc(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function pp(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && fc(t, i[1]))
      return i[0];
    if (i = e(), Qa) {
      un(!0);
      try {
        e();
      } finally {
        un(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function Nc(e, t, n) {
    return n === void 0 || (Un & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = mm(), xe.lanes |= e, ha |= e, n);
  }
  function mp(e, t, n, i) {
    return Gt(n, t) ? n : Mi.current !== null ? (e = Nc(e, n, i), Gt(e, t) || (lt = !0), e) : (Un & 42) === 0 || (Un & 1073741824) !== 0 && (we & 261930) === 0 ? (lt = !0, e.memoizedState = n) : (e = mm(), xe.lanes |= e, ha |= e, t);
  }
  function hp(e, t, n, i, o) {
    var c = K.p;
    K.p = c !== 0 && 8 > c ? c : 8;
    var p = w.T, S = {};
    w.T = S, wc(e, !1, t, n);
    try {
      var N = o(), C = w.S;
      if (C !== null && C(S, N), N !== null && typeof N == "object" && typeof N.then == "function") {
        var G = Tv(
          N,
          i
        );
        Dr(
          e,
          t,
          G,
          Xt(e)
        );
      } else
        Dr(
          e,
          t,
          i,
          Xt(e)
        );
    } catch (k) {
      Dr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: k },
        Xt()
      );
    } finally {
      K.p = c, p !== null && S.types !== null && (p.types = S.types), w.T = p;
    }
  }
  function Rv() {
  }
  function Ac(e, t, n, i) {
    if (e.tag !== 5) throw Error(l(476));
    var o = gp(e).queue;
    hp(
      e,
      o,
      t,
      M,
      n === null ? Rv : function() {
        return yp(e), n(i);
      }
    );
  }
  function gp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: M,
      baseState: M,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: M
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
        lastRenderedReducer: Ln,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function yp(e) {
    var t = gp(e);
    t.next === null && (t = e.alternate.memoizedState), Dr(
      e,
      t.next.queue,
      {},
      Xt()
    );
  }
  function jc() {
    return gt(Zr);
  }
  function vp() {
    return nt().memoizedState;
  }
  function bp() {
    return nt().memoizedState;
  }
  function Uv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Xt();
          e = ca(n);
          var i = ua(t, e, n);
          i !== null && (Lt(i, t, n), $r(i, t, n)), t = { cache: tc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Lv(e, t, n) {
    var i = Xt();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ll(e) ? _p(t, n) : (n = ko(e, t, n, i), n !== null && (Lt(n, e, i), Ep(n, t, i)));
  }
  function Sp(e, t, n) {
    var i = Xt();
    Dr(e, t, n, i);
  }
  function Dr(e, t, n, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ll(e)) _p(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, S = c(p, n);
          if (o.hasEagerState = !0, o.eagerState = S, Gt(S, p))
            return Gs(e, t, o, 0), ke === null && Hs(), !1;
        } catch {
        } finally {
        }
      if (n = ko(e, t, o, i), n !== null)
        return Lt(n, e, i), Ep(n, t, i), !0;
    }
    return !1;
  }
  function wc(e, t, n, i) {
    if (i = {
      lane: 2,
      revertLane: ru(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ll(e)) {
      if (t) throw Error(l(479));
    } else
      t = ko(
        e,
        n,
        i,
        2
      ), t !== null && Lt(t, e, 2);
  }
  function ll(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function _p(e, t) {
    Oi = el = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ep(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, Re(e, n);
    }
  }
  var zr = {
    readContext: gt,
    use: al,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useLayoutEffect: Fe,
    useInsertionEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    useHostTransitionStatus: Fe,
    useFormState: Fe,
    useActionState: Fe,
    useOptimistic: Fe,
    useMemoCache: Fe,
    useCacheRefresh: Fe
  };
  zr.useEffectEvent = Fe;
  var xp = {
    readContext: gt,
    use: al,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
    useEffect: sp,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, rl(
        4194308,
        4,
        up.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      rl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = wt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Qa) {
        un(!0);
        try {
          e();
        } finally {
          un(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = wt();
      if (n !== void 0) {
        var o = n(t);
        if (Qa) {
          un(!0);
          try {
            n(t);
          } finally {
            un(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Lv.bind(
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
      e = Sc(e);
      var t = e.queue, n = Sp.bind(null, xe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: xc,
    useDeferredValue: function(e, t) {
      var n = wt();
      return Nc(n, e, t);
    },
    useTransition: function() {
      var e = Sc(!1);
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
      if (Te) {
        if (n === void 0)
          throw Error(l(407));
        n = n();
      } else {
        if (n = t(), ke === null)
          throw Error(l(349));
        (we & 127) !== 0 || kf(i, t, n);
      }
      o.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return o.queue = c, sp(Yf.bind(null, i, c, e), [
        e
      ]), i.flags |= 2048, Di(
        9,
        { destroy: void 0 },
        Kf.bind(
          null,
          i,
          c,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = wt(), t = ke.identifierPrefix;
      if (Te) {
        var n = Sn, i = bn;
        n = (i & ~(1 << 32 - jt(i) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = tl++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Mv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: jc,
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
      return t.queue = n, t = wc.bind(
        null,
        xe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: yc,
    useCacheRefresh: function() {
      return wt().memoizedState = Uv.bind(
        null,
        xe
      );
    },
    useEffectEvent: function(e) {
      var t = wt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ze & 2) !== 0)
          throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, $c = {
    readContext: gt,
    use: al,
    useCallback: fp,
    useContext: gt,
    useEffect: Ec,
    useImperativeHandle: dp,
    useInsertionEffect: op,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: il,
    useRef: rp,
    useState: function() {
      return il(Ln);
    },
    useDebugValue: xc,
    useDeferredValue: function(e, t) {
      var n = nt();
      return mp(
        n,
        He.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = il(Ln)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Cr(e),
        t
      ];
    },
    useSyncExternalStore: If,
    useId: vp,
    useHostTransitionStatus: jc,
    useFormState: np,
    useActionState: np,
    useOptimistic: function(e, t) {
      var n = nt();
      return Jf(n, He, e, t);
    },
    useMemoCache: yc,
    useCacheRefresh: bp
  };
  $c.useEffectEvent = lp;
  var Np = {
    readContext: gt,
    use: al,
    useCallback: fp,
    useContext: gt,
    useEffect: Ec,
    useImperativeHandle: dp,
    useInsertionEffect: op,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: bc,
    useRef: rp,
    useState: function() {
      return bc(Ln);
    },
    useDebugValue: xc,
    useDeferredValue: function(e, t) {
      var n = nt();
      return He === null ? Nc(n, e, t) : mp(
        n,
        He.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = bc(Ln)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Cr(e),
        t
      ];
    },
    useSyncExternalStore: If,
    useId: vp,
    useHostTransitionStatus: jc,
    useFormState: ip,
    useActionState: ip,
    useOptimistic: function(e, t) {
      var n = nt();
      return He !== null ? Jf(n, He, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: yc,
    useCacheRefresh: bp
  };
  Np.useEffectEvent = lp;
  function Tc(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Mc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var i = Xt(), o = ca(i);
      o.payload = t, n != null && (o.callback = n), t = ua(e, o, i), t !== null && (Lt(t, e, i), $r(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = Xt(), o = ca(i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ua(e, o, i), t !== null && (Lt(t, e, i), $r(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Xt(), i = ca(n);
      i.tag = 2, t != null && (i.callback = t), t = ua(e, i, n), t !== null && (Lt(t, e, n), $r(t, e, n));
    }
  };
  function Ap(e, t, n, i, o, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, c, p) : t.prototype && t.prototype.isPureReactComponent ? !Sr(n, i) || !Sr(o, c) : !0;
  }
  function jp(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Mc.enqueueReplaceState(t, t.state, null);
  }
  function Ja(e, t) {
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
    Vs(e);
  }
  function $p(e) {
    console.error(e);
  }
  function Tp(e) {
    Vs(e);
  }
  function ol(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Mp(e, t, n) {
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
  function Oc(e, t, n) {
    return n = ca(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ol(e, t);
    }, n;
  }
  function Op(e) {
    return e = ca(e), e.tag = 3, e;
  }
  function Cp(e, t, n, i) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = i.value;
      e.payload = function() {
        return o(c);
      }, e.callback = function() {
        Mp(t, n, i);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Mp(t, n, i), typeof o != "function" && (ga === null ? ga = /* @__PURE__ */ new Set([this]) : ga.add(this));
      var S = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Bv(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && Ai(
        t,
        n,
        o,
        !0
      ), n = It.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return an === null ? Sl() : n.alternate === null && We === 0 && (We = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Js ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), nu(e, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === Js ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), nu(e, i, o)), !1;
        }
        throw Error(l(435, n.tag));
      }
      return nu(e, i, o), Sl(), !1;
    }
    if (Te)
      return t = It.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Zo && (e = Error(l(422), { cause: i }), xr(Pt(e, n)))) : (i !== Zo && (t = Error(l(423), {
        cause: i
      }), xr(
        Pt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Pt(i, n), o = Oc(
        e.stateNode,
        i,
        o
      ), lc(e, o), We !== 4 && (We = 2)), !1;
    var c = Error(l(520), { cause: i });
    if (c = Pt(c, n), qr === null ? qr = [c] : qr.push(c), We !== 4 && (We = 2), t === null) return !0;
    i = Pt(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Oc(n.stateNode, i, e), lc(n, e), !1;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ga === null || !ga.has(c))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = Op(o), Cp(
              o,
              e,
              n,
              i
            ), lc(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Cc = Error(l(461)), lt = !1;
  function yt(e, t, n, i) {
    t.child = e === null ? Uf(t, null, n, i) : Xa(
      t,
      e.child,
      n,
      i
    );
  }
  function Dp(e, t, n, i, o) {
    n = n.render;
    var c = t.ref;
    if ("ref" in i) {
      var p = {};
      for (var S in i)
        S !== "ref" && (p[S] = i[S]);
    } else p = i;
    return Ia(t), i = pc(
      e,
      t,
      n,
      p,
      c,
      o
    ), S = mc(), e !== null && !lt ? (hc(e, t, o), Bn(e, t, o)) : (Te && S && Qo(t), t.flags |= 1, yt(e, t, i, o), t.child);
  }
  function zp(e, t, n, i, o) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !Ko(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, Rp(
        e,
        t,
        c,
        i,
        o
      )) : (e = Is(
        n.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Hc(e, o)) {
      var p = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Sr, n(p, i) && e.ref === t.ref)
        return Bn(e, t, o);
    }
    return t.flags |= 1, e = Cn(c, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Rp(e, t, n, i, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Sr(c, i) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = i = c, Hc(e, o))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, Bn(e, t, o);
    }
    return Dc(
      e,
      t,
      n,
      i,
      o
    );
  }
  function Up(e, t, n, i) {
    var o = i.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | n : n, e !== null) {
          for (i = t.child = e.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~c;
        } else i = 0, t.child = null;
        return Lp(
          e,
          t,
          c,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Xs(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Vf(t, c) : cc(), Hf(t);
      else
        return i = t.lanes = 536870912, Lp(
          e,
          t,
          c !== null ? c.baseLanes | n : n,
          n,
          i
        );
    } else
      c !== null ? (Xs(t, c.cachePool), Vf(t, c), fa(), t.memoizedState = null) : (e !== null && Xs(t, null), cc(), fa());
    return yt(e, t, o, n), t.child;
  }
  function Rr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Lp(e, t, n, i, o) {
    var c = ac();
    return c = c === null ? null : { parent: rt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: n,
      cachePool: c
    }, e !== null && Xs(t, null), cc(), Hf(t), e !== null && Ai(e, t, i, !0), t.childLanes = o, null;
  }
  function cl(e, t) {
    return t = dl(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Bp(e, t, n) {
    return Xa(t, e.child, null, n), e = cl(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
  }
  function Vv(e, t, n) {
    var i = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (i.mode === "hidden")
          return e = cl(t, i), t.lanes = 536870912, Rr(null, e);
        if (dc(t), (e = Xe) ? (e = Zm(
          e,
          nn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ia !== null ? { id: bn, overflow: Sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, ht = t, Xe = null)) : e = null, e === null) throw sa(t);
        return t.lanes = 536870912, null;
      }
      return cl(t, i);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (dc(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = Bp(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(l(558));
      else if (lt || Ai(e, t, n, !1), o = (n & e.childLanes) !== 0, lt || o) {
        if (i = ke, i !== null && (p = $n(i, n), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, Va(e, p), Lt(i, e, p), Cc;
        Sl(), t = Bp(
          e,
          t,
          n
        );
      } else
        e = c.treeContext, Xe = rn(p.nextSibling), ht = t, Te = !0, ra = null, nn = !1, e !== null && Nf(t, e), t = cl(t, i), t.flags |= 4096;
      return t;
    }
    return e = Cn(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ul(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(l(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Dc(e, t, n, i, o) {
    return Ia(t), n = pc(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = mc(), e !== null && !lt ? (hc(e, t, o), Bn(e, t, o)) : (Te && i && Qo(t), t.flags |= 1, yt(e, t, n, o), t.child);
  }
  function Vp(e, t, n, i, o, c) {
    return Ia(t), t.updateQueue = null, n = qf(
      t,
      i,
      n,
      o
    ), Gf(e), i = mc(), e !== null && !lt ? (hc(e, t, c), Bn(e, t, c)) : (Te && i && Qo(t), t.flags |= 1, yt(e, t, n, c), t.child);
  }
  function Hp(e, t, n, i, o) {
    if (Ia(t), t.stateNode === null) {
      var c = _i, p = n.contextType;
      typeof p == "object" && p !== null && (c = gt(p)), c = new n(i, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Mc, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = i, c.state = t.memoizedState, c.refs = {}, rc(t), p = n.contextType, c.context = typeof p == "object" && p !== null ? gt(p) : _i, c.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Tc(
        t,
        n,
        p,
        i
      ), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Mc.enqueueReplaceState(c, c.state, null), Mr(t, i, c, o), Tr(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      c = t.stateNode;
      var S = t.memoizedProps, N = Ja(n, S);
      c.props = N;
      var C = c.context, G = n.contextType;
      p = _i, typeof G == "object" && G !== null && (p = gt(G));
      var k = n.getDerivedStateFromProps;
      G = typeof k == "function" || typeof c.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, G || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (S || C !== p) && jp(
        t,
        c,
        i,
        p
      ), oa = !1;
      var z = t.memoizedState;
      c.state = z, Mr(t, i, c, o), Tr(), C = t.memoizedState, S || z !== C || oa ? (typeof k == "function" && (Tc(
        t,
        n,
        k,
        i
      ), C = t.memoizedState), (N = oa || Ap(
        t,
        n,
        N,
        i,
        z,
        C,
        p
      )) ? (G || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = C), c.props = i, c.state = C, c.context = p, i = N) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      c = t.stateNode, sc(e, t), p = t.memoizedProps, G = Ja(n, p), c.props = G, k = t.pendingProps, z = c.context, C = n.contextType, N = _i, typeof C == "object" && C !== null && (N = gt(C)), S = n.getDerivedStateFromProps, (C = typeof S == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== k || z !== N) && jp(
        t,
        c,
        i,
        N
      ), oa = !1, z = t.memoizedState, c.state = z, Mr(t, i, c, o), Tr();
      var U = t.memoizedState;
      p !== k || z !== U || oa || e !== null && e.dependencies !== null && Ks(e.dependencies) ? (typeof S == "function" && (Tc(
        t,
        n,
        S,
        i
      ), U = t.memoizedState), (G = oa || Ap(
        t,
        n,
        G,
        i,
        z,
        U,
        N
      ) || e !== null && e.dependencies !== null && Ks(e.dependencies)) ? (C || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, U, N), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        i,
        U,
        N
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = U), c.props = i, c.state = U, c.context = N, i = G) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return c = i, ul(e, t), i = (t.flags & 128) !== 0, c || i ? (c = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && i ? (t.child = Xa(
      t,
      e.child,
      null,
      o
    ), t.child = Xa(
      t,
      null,
      n,
      o
    )) : yt(e, t, n, o), t.memoizedState = c.state, e = t.child) : e = Bn(
      e,
      t,
      o
    ), e;
  }
  function Gp(e, t, n, i) {
    return Ga(), t.flags |= 256, yt(e, t, n, i), t.child;
  }
  var zc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Rc(e) {
    return { baseLanes: e, cachePool: Mf() };
  }
  function Uc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Yt), e;
  }
  function qp(e, t, n) {
    var i = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (o ? da(t) : fa(), (e = Xe) ? (e = Zm(
          e,
          nn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ia !== null ? { id: bn, overflow: Sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, ht = t, Xe = null)) : e = null, e === null) throw sa(t);
        return vu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = i.children;
      return i = i.fallback, o ? (fa(), o = t.mode, S = dl(
        { mode: "hidden", children: S },
        o
      ), i = Ha(
        i,
        o,
        n,
        null
      ), S.return = t, i.return = t, S.sibling = i, t.child = S, i = t.child, i.memoizedState = Rc(n), i.childLanes = Uc(
        e,
        p,
        n
      ), t.memoizedState = zc, Rr(null, i)) : (da(t), Lc(t, S));
    }
    var N = e.memoizedState;
    if (N !== null && (S = N.dehydrated, S !== null)) {
      if (c)
        t.flags & 256 ? (da(t), t.flags &= -257, t = Bc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (fa(), t.child = e.child, t.flags |= 128, t = null) : (fa(), S = i.fallback, o = t.mode, i = dl(
          { mode: "visible", children: i.children },
          o
        ), S = Ha(
          S,
          o,
          n,
          null
        ), S.flags |= 2, i.return = t, S.return = t, i.sibling = S, t.child = i, Xa(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = Rc(n), i.childLanes = Uc(
          e,
          p,
          n
        ), t.memoizedState = zc, t = Rr(null, i));
      else if (da(t), vu(S)) {
        if (p = S.nextSibling && S.nextSibling.dataset, p) var C = p.dgst;
        p = C, i = Error(l(419)), i.stack = "", i.digest = p, xr({ value: i, source: null, stack: null }), t = Bc(
          e,
          t,
          n
        );
      } else if (lt || Ai(e, t, n, !1), p = (n & e.childLanes) !== 0, lt || p) {
        if (p = ke, p !== null && (i = $n(p, n), i !== 0 && i !== N.retryLane))
          throw N.retryLane = i, Va(e, i), Lt(p, e, i), Cc;
        yu(S) || Sl(), t = Bc(
          e,
          t,
          n
        );
      } else
        yu(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = N.treeContext, Xe = rn(
          S.nextSibling
        ), ht = t, Te = !0, ra = null, nn = !1, e !== null && Nf(t, e), t = Lc(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (fa(), S = i.fallback, o = t.mode, N = e.child, C = N.sibling, i = Cn(N, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = N.subtreeFlags & 65011712, C !== null ? S = Cn(
      C,
      S
    ) : (S = Ha(
      S,
      o,
      n,
      null
    ), S.flags |= 2), S.return = t, i.return = t, i.sibling = S, t.child = i, Rr(null, i), i = t.child, S = e.child.memoizedState, S === null ? S = Rc(n) : (o = S.cachePool, o !== null ? (N = rt._currentValue, o = o.parent !== N ? { parent: N, pool: N } : o) : o = Mf(), S = {
      baseLanes: S.baseLanes | n,
      cachePool: o
    }), i.memoizedState = S, i.childLanes = Uc(
      e,
      p,
      n
    ), t.memoizedState = zc, Rr(e.child, i)) : (da(t), n = e.child, e = n.sibling, n = Cn(n, {
      mode: "visible",
      children: i.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Lc(e, t) {
    return t = dl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function dl(e, t) {
    return e = qt(22, e, null, t), e.lanes = 0, e;
  }
  function Bc(e, t, n) {
    return Xa(t, e.child, null, n), e = Lc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ip(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Po(e.return, t, n);
  }
  function Vc(e, t, n, i, o, c) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: o,
      treeForkCount: c
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = i, p.tail = n, p.tailMode = o, p.treeForkCount = c);
  }
  function kp(e, t, n) {
    var i = t.pendingProps, o = i.revealOrder, c = i.tail;
    i = i.children;
    var p = tt.current, S = (p & 2) !== 0;
    if (S ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, ne(tt, p), yt(e, t, i, n), i = Te ? Er : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ip(e, n, t);
        else if (e.tag === 19)
          Ip(e, n, t);
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
          e = n.alternate, e !== null && Ps(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Vc(
          t,
          !1,
          o,
          n,
          c,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ps(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Vc(
          t,
          !0,
          n,
          null,
          c,
          i
        );
        break;
      case "together":
        Vc(
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
  function Bn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ha |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ai(
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
  function Hc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ks(e)));
  }
  function Hv(e, t, n) {
    switch (t.tag) {
      case 3:
        ut(t, t.stateNode.containerInfo), la(t, rt, e.memoizedState.cache), Ga();
        break;
      case 27:
      case 5:
        yn(t);
        break;
      case 4:
        ut(t, t.stateNode.containerInfo);
        break;
      case 10:
        la(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, dc(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (da(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? qp(e, t, n) : (da(t), e = Bn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        da(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (Ai(
          e,
          t,
          n,
          !1
        ), i = (n & t.childLanes) !== 0), o) {
          if (i)
            return kp(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(tt, tt.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, Up(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        la(t, rt, e.memoizedState.cache);
    }
    return Bn(e, t, n);
  }
  function Kp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!Hc(e, n) && (t.flags & 128) === 0)
          return lt = !1, Hv(
            e,
            t,
            n
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, Te && (t.flags & 1048576) !== 0 && xf(t, Er, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = Ka(t.elementType), t.type = e, typeof e == "function")
            Ko(e) ? (i = Ja(e, i), t.tag = 1, t = Hp(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, t = Dc(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === J) {
                t.tag = 11, t = Dp(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === q) {
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
            throw t = ee(e) || e, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return Dc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return i = t.type, o = Ja(
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
          if (ut(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          i = t.pendingProps;
          var c = t.memoizedState;
          o = c.element, sc(e, t), Mr(t, i, null, n);
          var p = t.memoizedState;
          if (i = p.cache, la(t, rt, i), i !== c.cache && ec(
            t,
            [rt],
            n,
            !0
          ), Tr(), i = p.element, c.isDehydrated)
            if (c = {
              element: i,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = Gp(
                e,
                t,
                i,
                n
              );
              break e;
            } else if (i !== o) {
              o = Pt(
                Error(l(424)),
                t
              ), xr(o), t = Gp(
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
              for (Xe = rn(e.firstChild), ht = t, Te = !0, ra = null, nn = !0, n = Uf(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Ga(), i === o) {
              t = Bn(
                e,
                t,
                n
              );
              break e;
            }
            yt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ul(e, t), e === null ? (n = nh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Te || (n = t.type, e = t.pendingProps, i = wl(
          be.current
        ).createElement(n), i[et] = t, i[Ot] = e, vt(i, n, e), ft(i), t.stateNode = i) : t.memoizedState = nh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return yn(t), e === null && Te && (i = t.stateNode = Pm(
          t.type,
          t.pendingProps,
          be.current
        ), ht = t, nn = !0, o = Xe, Sa(t.type) ? (bu = o, Xe = rn(i.firstChild)) : Xe = o), yt(
          e,
          t,
          t.pendingProps.children,
          n
        ), ul(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((o = i = Xe) && (i = gb(
          i,
          t.type,
          t.pendingProps,
          nn
        ), i !== null ? (t.stateNode = i, ht = t, Xe = rn(i.firstChild), nn = !1, o = !0) : o = !1), o || sa(t)), yn(t), o = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, i = c.children, mu(o, c) ? i = null : p !== null && mu(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = pc(
          e,
          t,
          Ov,
          null,
          null,
          n
        ), Zr._currentValue = o), ul(e, t), yt(e, t, i, n), t.child;
      case 6:
        return e === null && Te && ((e = n = Xe) && (n = yb(
          n,
          t.pendingProps,
          nn
        ), n !== null ? (t.stateNode = n, ht = t, Xe = null, e = !0) : e = !1), e || sa(t)), null;
      case 13:
        return qp(e, t, n);
      case 4:
        return ut(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Xa(
          t,
          null,
          i,
          n
        ) : yt(e, t, i, n), t.child;
      case 11:
        return Dp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return yt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return yt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return yt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return i = t.pendingProps, la(t, t.type, i.value), yt(e, t, i.children, n), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, Ia(t), o = gt(o), i = i(o), t.flags |= 1, yt(e, t, i, n), t.child;
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
        return kp(e, t, n);
      case 31:
        return Vv(e, t, n);
      case 22:
        return Up(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ia(t), i = gt(rt), e === null ? (o = ac(), o === null && (o = ke, c = tc(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= n), o = c), t.memoizedState = { parent: i, cache: o }, rc(t), la(t, rt, o)) : ((e.lanes & n) !== 0 && (sc(e, t), Mr(t, null, null, n), Tr()), o = e.memoizedState, c = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), la(t, rt, i)) : (i = c.cache, la(t, rt, i), i !== o.cache && ec(
          t,
          [rt],
          n,
          !0
        ))), yt(
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
  function Vn(e) {
    e.flags |= 4;
  }
  function Gc(e, t, n, i, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (vm()) e.flags |= 8192;
        else
          throw Ya = Js, ic;
    } else e.flags &= -16777217;
  }
  function Yp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !lh(t))
      if (vm()) e.flags |= 8192;
      else
        throw Ya = Js, ic;
  }
  function fl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? cr() : 536870912, e.lanes |= t, Li |= t);
  }
  function Ur(e, t) {
    if (!Te)
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
  function Gv(e, t, n) {
    var i = t.pendingProps;
    switch (Jo(t), t.tag) {
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
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Rn(rt), Ve(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ni(t) ? Vn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Fo())), Qe(t), null;
      case 26:
        var o = t.type, c = t.memoizedState;
        return e === null ? (Vn(t), c !== null ? (Qe(t), Yp(t, c)) : (Qe(t), Gc(
          t,
          o,
          null,
          i,
          n
        ))) : c ? c !== e.memoizedState ? (Vn(t), Qe(t), Yp(t, c)) : (Qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Vn(t), Qe(t), Gc(
          t,
          o,
          e,
          i,
          n
        )), null;
      case 27:
        if (jn(t), n = be.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Vn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          e = ie.current, Ni(t) ? Af(t) : (e = Pm(o, i, n), t.stateNode = e, Vn(t));
        }
        return Qe(t), null;
      case 5:
        if (jn(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Vn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          if (c = ie.current, Ni(t))
            Af(t);
          else {
            var p = wl(
              be.current
            );
            switch (c) {
              case 1:
                c = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                c = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    c = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    c = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    c = p.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof i.is == "string" ? p.createElement("select", {
                      is: i.is
                    }) : p.createElement("select"), i.multiple ? c.multiple = !0 : i.size && (c.size = i.size);
                    break;
                  default:
                    c = typeof i.is == "string" ? p.createElement(o, { is: i.is }) : p.createElement(o);
                }
            }
            c[et] = t, c[Ot] = i;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                c.appendChild(p.stateNode);
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
            t.stateNode = c;
            e: switch (vt(c, o, i), o) {
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
            i && Vn(t);
          }
        }
        return Qe(t), Gc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && Vn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = be.current, Ni(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = ht, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[et] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || qm(e.nodeValue, n)), e || sa(t, !0);
          } else
            e = wl(e).createTextNode(
              i
            ), e[et] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = Ni(t), n !== null) {
            if (e === null) {
              if (!i) throw Error(l(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[et] = t;
            } else
              Ga(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), e = !1;
          } else
            n = Fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Qe(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Ni(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(l(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
              o[et] = t;
            } else
              Ga(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), o = !1;
          } else
            o = Fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
        }
        return kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), c = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool), c !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), fl(t, t.updateQueue), Qe(t), null);
      case 4:
        return Ve(), e === null && cu(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Rn(t.type), Qe(t), null;
      case 19:
        if (L(tt), i = t.memoizedState, i === null) return Qe(t), null;
        if (o = (t.flags & 128) !== 0, c = i.rendering, c === null)
          if (o) Ur(i, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = Ps(e), c !== null) {
                  for (t.flags |= 128, Ur(i, !1), e = c.updateQueue, t.updateQueue = e, fl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Sf(n, e), n = n.sibling;
                  return ne(
                    tt,
                    tt.current & 1 | 2
                  ), Te && Dn(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Nt() > yl && (t.flags |= 128, o = !0, Ur(i, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Ps(c), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, fl(t, e), Ur(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !Te)
                return Qe(t), null;
            } else
              2 * Nt() - i.renderingStartTime > yl && n !== 536870912 && (t.flags |= 128, o = !0, Ur(i, !1), t.lanes = 4194304);
          i.isBackwards ? (c.sibling = t.child, t.child = c) : (e = i.last, e !== null ? e.sibling = c : t.child = c, i.last = c);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Nt(), e.sibling = null, n = tt.current, ne(
          tt,
          o ? n & 1 | 2 : n & 1
        ), Te && Dn(t, i.treeForkCount), e) : (Qe(t), null);
      case 22:
      case 23:
        return kt(t), uc(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), n = t.updateQueue, n !== null && fl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && L(ka), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Rn(rt), Qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function qv(e, t) {
    switch (Jo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(rt), Ve(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return jn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (kt(t), t.alternate === null)
            throw Error(l(340));
          Ga();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          Ga();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(tt), null;
      case 4:
        return Ve(), null;
      case 10:
        return Rn(t.type), null;
      case 22:
      case 23:
        return kt(t), uc(), e !== null && L(ka), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Rn(rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xp(e, t) {
    switch (Jo(t), t.tag) {
      case 3:
        Rn(rt), Ve();
        break;
      case 26:
      case 27:
      case 5:
        jn(t);
        break;
      case 4:
        Ve();
        break;
      case 31:
        t.memoizedState !== null && kt(t);
        break;
      case 13:
        kt(t);
        break;
      case 19:
        L(tt);
        break;
      case 10:
        Rn(t.type);
        break;
      case 22:
      case 23:
        kt(t), uc(), e !== null && L(ka);
        break;
      case 24:
        Rn(rt);
    }
  }
  function Lr(e, t) {
    try {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var c = n.create, p = n.inst;
            i = c(), p.destroy = i;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (S) {
      Le(t, t.return, S);
    }
  }
  function pa(e, t, n) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            var p = i.inst, S = p.destroy;
            if (S !== void 0) {
              p.destroy = void 0, o = t;
              var N = n, C = S;
              try {
                C();
              } catch (G) {
                Le(
                  o,
                  N,
                  G
                );
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (G) {
      Le(t, t.return, G);
    }
  }
  function Qp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Bf(t, n);
      } catch (i) {
        Le(e, e.return, i);
      }
    }
  }
  function Jp(e, t, n) {
    n.props = Ja(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Le(e, t, i);
    }
  }
  function Br(e, t) {
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
      Le(e, t, o);
    }
  }
  function _n(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Le(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Le(e, t, o);
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
      Le(e, e.return, o);
    }
  }
  function qc(e, t, n) {
    try {
      var i = e.stateNode;
      ub(i, e.type, n, t), i[Ot] = t;
    } catch (o) {
      Le(e, e.return, o);
    }
  }
  function Fp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sa(e.type) || e.tag === 4;
  }
  function Ic(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Sa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function kc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mn));
    else if (i !== 4 && (i === 27 && Sa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (kc(e, t, n), e = e.sibling; e !== null; )
        kc(e, t, n), e = e.sibling;
  }
  function pl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && Sa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (pl(e, t, n), e = e.sibling; e !== null; )
        pl(e, t, n), e = e.sibling;
  }
  function Wp(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      vt(t, i, n), t[et] = e, t[Ot] = n;
    } catch (c) {
      Le(e, e.return, c);
    }
  }
  var Hn = !1, ot = !1, Kc = !1, Pp = typeof WeakSet == "function" ? WeakSet : Set, pt = null;
  function Iv(e, t) {
    if (e = e.containerInfo, fu = zl, e = df(e), Bo(e)) {
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
            var o = i.anchorOffset, c = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var p = 0, S = -1, N = -1, C = 0, G = 0, k = e, z = null;
            t: for (; ; ) {
              for (var U; k !== n || o !== 0 && k.nodeType !== 3 || (S = p + o), k !== c || i !== 0 && k.nodeType !== 3 || (N = p + i), k.nodeType === 3 && (p += k.nodeValue.length), (U = k.firstChild) !== null; )
                z = k, k = U;
              for (; ; ) {
                if (k === e) break t;
                if (z === n && ++C === o && (S = p), z === c && ++G === i && (N = p), (U = k.nextSibling) !== null) break;
                k = z, z = k.parentNode;
              }
              k = U;
            }
            n = S === -1 || N === -1 ? null : { start: S, end: N };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (pu = { focusedElem: e, selectionRange: n }, zl = !1, pt = t; pt !== null; )
      if (t = pt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, pt = e;
      else
        for (; pt !== null; ) {
          switch (t = pt, c = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  o = e[n], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                e = void 0, n = t, o = c.memoizedProps, c = c.memoizedState, i = n.stateNode;
                try {
                  var le = Ja(
                    n.type,
                    o
                  );
                  e = i.getSnapshotBeforeUpdate(
                    le,
                    c
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (me) {
                  Le(
                    n,
                    n.return,
                    me
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  gu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gu(e);
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
        qn(e, n), i & 4 && Lr(5, n);
        break;
      case 1:
        if (qn(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Le(n, n.return, p);
            }
          else {
            var o = Ja(
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
              Le(
                n,
                n.return,
                p
              );
            }
          }
        i & 64 && Qp(n), i & 512 && Br(n, n.return);
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
            Bf(e, t);
          } catch (p) {
            Le(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Wp(n);
      case 26:
      case 5:
        qn(e, n), t === null && i & 4 && Zp(n), i & 512 && Br(n, n.return);
        break;
      case 12:
        qn(e, n);
        break;
      case 31:
        qn(e, n), i & 4 && am(e, n);
        break;
      case 13:
        qn(e, n), i & 4 && im(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Wv.bind(
          null,
          n
        ), vb(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || Hn, !i) {
          t = t !== null && t.memoizedState !== null || ot, o = Hn;
          var c = ot;
          Hn = i, (ot = t) && !c ? In(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : qn(e, n), Hn = o, ot = c;
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
    t !== null && (e.alternate = null, tm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && _o(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, Dt = !1;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; )
      nm(e, t, n), n = n.sibling;
  }
  function nm(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(si, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        ot || _n(n, t), Gn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ot || _n(n, t);
        var i = Ze, o = Dt;
        Sa(n.type) && (Ze = n.stateNode, Dt = !1), Gn(
          e,
          t,
          n
        ), Xr(n.stateNode), Ze = i, Dt = o;
        break;
      case 5:
        ot || _n(n, t);
      case 6:
        if (i = Ze, o = Dt, Ze = null, Gn(
          e,
          t,
          n
        ), Ze = i, Dt = o, Ze !== null)
          if (Dt)
            try {
              (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(n.stateNode);
            } catch (c) {
              Le(
                n,
                t,
                c
              );
            }
          else
            try {
              Ze.removeChild(n.stateNode);
            } catch (c) {
              Le(
                n,
                t,
                c
              );
            }
        break;
      case 18:
        Ze !== null && (Dt ? (e = Ze, Qm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Ki(e)) : Qm(Ze, n.stateNode));
        break;
      case 4:
        i = Ze, o = Dt, Ze = n.stateNode.containerInfo, Dt = !0, Gn(
          e,
          t,
          n
        ), Ze = i, Dt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pa(2, n, t), ot || pa(4, n, t), Gn(
          e,
          t,
          n
        );
        break;
      case 1:
        ot || (_n(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && Jp(
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
        ot = (i = ot) || n.memoizedState !== null, Gn(
          e,
          t,
          n
        ), ot = i;
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
        Ki(e);
      } catch (n) {
        Le(t, t.return, n);
      }
    }
  }
  function im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ki(e);
      } catch (n) {
        Le(t, t.return, n);
      }
  }
  function kv(e) {
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
  function ml(e, t) {
    var n = kv(e);
    t.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var o = Pv.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function zt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i], c = e, p = t, S = p;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Sa(S.type)) {
                Ze = S.stateNode, Dt = !1;
                break e;
              }
              break;
            case 5:
              Ze = S.stateNode, Dt = !1;
              break e;
            case 3:
            case 4:
              Ze = S.stateNode.containerInfo, Dt = !0;
              break e;
          }
          S = S.return;
        }
        if (Ze === null) throw Error(l(160));
        nm(c, p, o), Ze = null, Dt = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        rm(t, e), t = t.sibling;
  }
  var fn = null;
  function rm(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        zt(t, e), Rt(e), i & 4 && (pa(3, e, e.return), Lr(3, e), pa(5, e, e.return));
        break;
      case 1:
        zt(t, e), Rt(e), i & 512 && (ot || n === null || _n(n, n.return)), i & 64 && Hn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var o = fn;
        if (zt(t, e), Rt(e), i & 512 && (ot || n === null || _n(n, n.return)), i & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (i = e.memoizedState, n === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[dr] || c[et] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(i), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), vt(c, i, n), c[et] = e, ft(c), i = c;
                      break e;
                    case "link":
                      var p = rh(
                        "link",
                        "href",
                        o
                      ).get(i + (n.href || ""));
                      if (p) {
                        for (var S = 0; S < p.length; S++)
                          if (c = p[S], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            p.splice(S, 1);
                            break t;
                          }
                      }
                      c = o.createElement(i), vt(c, i, n), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = rh(
                        "meta",
                        "content",
                        o
                      ).get(i + (n.content || ""))) {
                        for (S = 0; S < p.length; S++)
                          if (c = p[S], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            p.splice(S, 1);
                            break t;
                          }
                      }
                      c = o.createElement(i), vt(c, i, n), o.head.appendChild(c);
                      break;
                    default:
                      throw Error(l(468, i));
                  }
                  c[et] = e, ft(c), i = c;
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
            c !== i ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, i === null ? sh(
              o,
              e.type,
              e.stateNode
            ) : ih(
              o,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && qc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        zt(t, e), Rt(e), i & 512 && (ot || n === null || _n(n, n.return)), n !== null && i & 4 && qc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (zt(t, e), Rt(e), i & 512 && (ot || n === null || _n(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            mi(o, "");
          } catch (le) {
            Le(e, e.return, le);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, qc(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Kc = !0);
        break;
      case 6:
        if (zt(t, e), Rt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (le) {
            Le(e, e.return, le);
          }
        }
        break;
      case 3:
        if (Ml = null, o = fn, fn = $l(t.containerInfo), zt(t, e), fn = o, Rt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Ki(t.containerInfo);
          } catch (le) {
            Le(e, e.return, le);
          }
        Kc && (Kc = !1, sm(e));
        break;
      case 4:
        i = fn, fn = $l(
          e.stateNode.containerInfo
        ), zt(t, e), Rt(e), fn = i;
        break;
      case 12:
        zt(t, e), Rt(e);
        break;
      case 31:
        zt(t, e), Rt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ml(e, i)));
        break;
      case 13:
        zt(t, e), Rt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (gl = Nt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ml(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var N = n !== null && n.memoizedState !== null, C = Hn, G = ot;
        if (Hn = C || o, ot = G || N, zt(t, e), ot = G, Hn = C, Rt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || N || Hn || ot || Za(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                N = n = t;
                try {
                  if (c = N.stateNode, o)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    S = N.stateNode;
                    var k = N.memoizedProps.style, z = k != null && k.hasOwnProperty("display") ? k.display : null;
                    S.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (le) {
                  Le(N, N.return, le);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                N = t;
                try {
                  N.stateNode.nodeValue = o ? "" : N.memoizedProps;
                } catch (le) {
                  Le(N, N.return, le);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                N = t;
                try {
                  var U = N.stateNode;
                  o ? Jm(U, !0) : Jm(N.stateNode, !1);
                } catch (le) {
                  Le(N, N.return, le);
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
        i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, ml(e, n))));
        break;
      case 19:
        zt(t, e), Rt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ml(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        zt(t, e), Rt(e);
    }
  }
  function Rt(e) {
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
            var o = n.stateNode, c = Ic(e);
            pl(e, c, o);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (mi(p, ""), n.flags &= -33);
            var S = Ic(e);
            pl(e, S, p);
            break;
          case 3:
          case 4:
            var N = n.stateNode.containerInfo, C = Ic(e);
            kc(
              e,
              C,
              N
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (G) {
        Le(e, e.return, G);
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
  function Za(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pa(4, t, t.return), Za(t);
          break;
        case 1:
          _n(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Jp(
            t,
            t.return,
            n
          ), Za(t);
          break;
        case 27:
          Xr(t.stateNode);
        case 26:
        case 5:
          _n(t, t.return), Za(t);
          break;
        case 22:
          t.memoizedState === null && Za(t);
          break;
        case 30:
          Za(t);
          break;
        default:
          Za(t);
      }
      e = e.sibling;
    }
  }
  function In(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          In(
            o,
            c,
            n
          ), Lr(4, c);
          break;
        case 1:
          if (In(
            o,
            c,
            n
          ), i = c, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (C) {
              Le(i, i.return, C);
            }
          if (i = c, o = i.updateQueue, o !== null) {
            var S = i.stateNode;
            try {
              var N = o.shared.hiddenCallbacks;
              if (N !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < N.length; o++)
                  Lf(N[o], S);
            } catch (C) {
              Le(i, i.return, C);
            }
          }
          n && p & 64 && Qp(c), Br(c, c.return);
          break;
        case 27:
          Wp(c);
        case 26:
        case 5:
          In(
            o,
            c,
            n
          ), n && i === null && p & 4 && Zp(c), Br(c, c.return);
          break;
        case 12:
          In(
            o,
            c,
            n
          );
          break;
        case 31:
          In(
            o,
            c,
            n
          ), n && p & 4 && am(o, c);
          break;
        case 13:
          In(
            o,
            c,
            n
          ), n && p & 4 && im(o, c);
          break;
        case 22:
          c.memoizedState === null && In(
            o,
            c,
            n
          ), Br(c, c.return);
          break;
        case 30:
          break;
        default:
          In(
            o,
            c,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Yc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Nr(n));
  }
  function Xc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Nr(e));
  }
  function pn(e, t, n, i) {
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
        pn(
          e,
          t,
          n,
          i
        ), o & 2048 && Lr(9, t);
        break;
      case 1:
        pn(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        pn(
          e,
          t,
          n,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Nr(e)));
        break;
      case 12:
        if (o & 2048) {
          pn(
            e,
            t,
            n,
            i
          ), e = t.stateNode;
          try {
            var c = t.memoizedProps, p = c.id, S = c.onPostCommit;
            typeof S == "function" && S(
              p,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (N) {
            Le(t, t.return, N);
          }
        } else
          pn(
            e,
            t,
            n,
            i
          );
        break;
      case 31:
        pn(
          e,
          t,
          n,
          i
        );
        break;
      case 13:
        pn(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? pn(
          e,
          t,
          n,
          i
        ) : Vr(e, t) : c._visibility & 2 ? pn(
          e,
          t,
          n,
          i
        ) : (c._visibility |= 2, zi(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && Yc(p, t);
        break;
      case 24:
        pn(
          e,
          t,
          n,
          i
        ), o & 2048 && Xc(t.alternate, t);
        break;
      default:
        pn(
          e,
          t,
          n,
          i
        );
    }
  }
  function zi(e, t, n, i, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, S = n, N = i, C = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          zi(
            c,
            p,
            S,
            N,
            o
          ), Lr(8, p);
          break;
        case 23:
          break;
        case 22:
          var G = p.stateNode;
          p.memoizedState !== null ? G._visibility & 2 ? zi(
            c,
            p,
            S,
            N,
            o
          ) : Vr(
            c,
            p
          ) : (G._visibility |= 2, zi(
            c,
            p,
            S,
            N,
            o
          )), o && C & 2048 && Yc(
            p.alternate,
            p
          );
          break;
        case 24:
          zi(
            c,
            p,
            S,
            N,
            o
          ), o && C & 2048 && Xc(p.alternate, p);
          break;
        default:
          zi(
            c,
            p,
            S,
            N,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Vr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, i = t, o = i.flags;
        switch (i.tag) {
          case 22:
            Vr(n, i), o & 2048 && Yc(
              i.alternate,
              i
            );
            break;
          case 24:
            Vr(n, i), o & 2048 && Xc(i.alternate, i);
            break;
          default:
            Vr(n, i);
        }
        t = t.sibling;
      }
  }
  var Hr = 8192;
  function Ri(e, t, n) {
    if (e.subtreeFlags & Hr)
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
        Ri(
          e,
          t,
          n
        ), e.flags & Hr && e.memoizedState !== null && Mb(
          n,
          fn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ri(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var i = fn;
        fn = $l(e.stateNode.containerInfo), Ri(
          e,
          t,
          n
        ), fn = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Hr, Hr = 16777216, Ri(
          e,
          t,
          n
        ), Hr = i) : Ri(
          e,
          t,
          n
        ));
        break;
      default:
        Ri(
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
  function Gr(e) {
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
        Gr(e), e.flags & 2048 && pa(9, e, e.return);
        break;
      case 3:
        Gr(e);
        break;
      case 12:
        Gr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, hl(e)) : Gr(e);
        break;
      default:
        Gr(e);
    }
  }
  function hl(e) {
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
          pa(8, t, t.return), hl(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, hl(t));
          break;
        default:
          hl(t);
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
          pa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Nr(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, pt = i;
      else
        e: for (n = e; pt !== null; ) {
          i = pt;
          var o = i.sibling, c = i.return;
          if (tm(i), i === n) {
            pt = null;
            break e;
          }
          if (o !== null) {
            o.return = c, pt = o;
            break e;
          }
          pt = c;
        }
    }
  }
  var Kv = {
    getCacheForType: function(e) {
      var t = gt(rt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return gt(rt).controller.signal;
    }
  }, Yv = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, ke = null, Ae = null, we = 0, Ue = 0, Kt = null, ma = !1, Ui = !1, Qc = !1, kn = 0, We = 0, ha = 0, Fa = 0, Jc = 0, Yt = 0, Li = 0, qr = null, Ut = null, Zc = !1, gl = 0, fm = 0, yl = 1 / 0, vl = null, ga = null, dt = 0, ya = null, Bi = null, Kn = 0, Fc = 0, Wc = null, pm = null, Ir = 0, Pc = null;
  function Xt() {
    return (ze & 2) !== 0 && we !== 0 ? we & -we : w.T !== null ? ru() : ur();
  }
  function mm() {
    if (Yt === 0)
      if ((we & 536870912) === 0 || Te) {
        var e = Ca;
        Ca <<= 1, (Ca & 3932160) === 0 && (Ca = 262144), Yt = e;
      } else Yt = 536870912;
    return e = It.current, e !== null && (e.flags |= 32), Yt;
  }
  function Lt(e, t, n) {
    (e === ke && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (Vi(e, 0), va(
      e,
      we,
      Yt,
      !1
    )), ye(e, n), ((ze & 2) === 0 || e !== ke) && (e === ke && ((ze & 2) === 0 && (Fa |= n), We === 4 && va(
      e,
      we,
      Yt,
      !1
    )), En(e));
  }
  function hm(e, t, n) {
    if ((ze & 6) !== 0) throw Error(l(327));
    var i = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || na(e, t), o = i ? Jv(e, t) : tu(e, t, !0), c = i;
    do {
      if (o === 0) {
        Ui && !i && va(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, c && !Xv(n)) {
          o = tu(e, t, !1), c = !1;
          continue;
        }
        if (o === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var S = e;
              o = qr;
              var N = S.current.memoizedState.isDehydrated;
              if (N && (Vi(S, p).flags |= 256), p = tu(
                S,
                p,
                !1
              ), p !== 2) {
                if (Qc && !N) {
                  S.errorRecoveryDisabledLanes |= c, Fa |= c, o = 4;
                  break e;
                }
                c = Ut, Ut = o, c !== null && (Ut === null ? Ut = c : Ut.push.apply(
                  Ut,
                  c
                ));
              }
              o = p;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Vi(e, 0), va(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, c = o, c) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              va(
                i,
                t,
                Yt,
                !ma
              );
              break e;
            case 2:
              Ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (o = gl + 300 - Nt(), 10 < o)) {
            if (va(
              i,
              t,
              Yt,
              !ma
            ), Da(i, 0, !0) !== 0) break e;
            Kn = t, i.timeoutHandle = Ym(
              gm.bind(
                null,
                i,
                n,
                Ut,
                vl,
                Zc,
                t,
                Yt,
                Fa,
                Li,
                ma,
                c,
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
            Ut,
            vl,
            Zc,
            t,
            Yt,
            Fa,
            Li,
            ma,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    En(e);
  }
  function gm(e, t, n, i, o, c, p, S, N, C, G, k, z, U) {
    if (e.timeoutHandle = -1, k = t.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
      k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Mn
      }, om(
        t,
        c,
        k
      );
      var le = (c & 62914560) === c ? gl - Nt() : (c & 4194048) === c ? fm - Nt() : 0;
      if (le = Ob(
        k,
        le
      ), le !== null) {
        Kn = c, e.cancelPendingCommit = le(
          Nm.bind(
            null,
            e,
            t,
            c,
            n,
            i,
            o,
            p,
            S,
            N,
            G,
            k,
            null,
            z,
            U
          )
        ), va(e, c, p, !C);
        return;
      }
    }
    Nm(
      e,
      t,
      c,
      n,
      i,
      o,
      p,
      S,
      N
    );
  }
  function Xv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], c = o.getSnapshot;
          o = o.value;
          try {
            if (!Gt(c(), o)) return !1;
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
  function va(e, t, n, i) {
    t &= ~Jc, t &= ~Fa, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - jt(o), p = 1 << c;
      i[c] = -1, o &= ~p;
    }
    n !== 0 && za(e, n, t);
  }
  function bl() {
    return (ze & 6) === 0 ? (kr(0), !1) : !0;
  }
  function eu() {
    if (Ae !== null) {
      if (Ue === 0)
        var e = Ae.return;
      else
        e = Ae, zn = qa = null, gc(e), Ti = null, jr = 0, e = Ae;
      for (; e !== null; )
        Xp(e.alternate, e), e = e.return;
      Ae = null;
    }
  }
  function Vi(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, pb(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Kn = 0, eu(), ke = e, Ae = n = Cn(e.current, null), we = t, Ue = 0, Kt = null, ma = !1, Ui = na(e, t), Qc = !1, Li = Yt = Jc = Fa = ha = We = 0, Ut = qr = null, Zc = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - jt(i), c = 1 << o;
        t |= e[o], i &= ~c;
      }
    return kn = t, Hs(), n;
  }
  function ym(e, t) {
    xe = null, w.H = zr, t === $i || t === Qs ? (t = Df(), Ue = 3) : t === ic ? (t = Df(), Ue = 4) : Ue = t === Cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, Ae === null && (We = 1, ol(
      e,
      Pt(t, e.current)
    ));
  }
  function vm() {
    var e = It.current;
    return e === null ? !0 : (we & 4194048) === we ? an === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === an : !1;
  }
  function bm() {
    var e = w.H;
    return w.H = zr, e === null ? zr : e;
  }
  function Sm() {
    var e = w.A;
    return w.A = Kv, e;
  }
  function Sl() {
    We = 4, ma || (we & 4194048) !== we && It.current !== null || (Ui = !0), (ha & 134217727) === 0 && (Fa & 134217727) === 0 || ke === null || va(
      ke,
      we,
      Yt,
      !1
    );
  }
  function tu(e, t, n) {
    var i = ze;
    ze |= 2;
    var o = bm(), c = Sm();
    (ke !== e || we !== t) && (vl = null, Vi(e, t)), t = !1;
    var p = We;
    e: do
      try {
        if (Ue !== 0 && Ae !== null) {
          var S = Ae, N = Kt;
          switch (Ue) {
            case 8:
              eu(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              It.current === null && (t = !0);
              var C = Ue;
              if (Ue = 0, Kt = null, Hi(e, S, N, C), n && Ui) {
                p = 0;
                break e;
              }
              break;
            default:
              C = Ue, Ue = 0, Kt = null, Hi(e, S, N, C);
          }
        }
        Qv(), p = We;
        break;
      } catch (G) {
        ym(e, G);
      }
    while (!0);
    return t && e.shellSuspendCounter++, zn = qa = null, ze = i, w.H = o, w.A = c, Ae === null && (ke = null, we = 0, Hs()), p;
  }
  function Qv() {
    for (; Ae !== null; ) _m(Ae);
  }
  function Jv(e, t) {
    var n = ze;
    ze |= 2;
    var i = bm(), o = Sm();
    ke !== e || we !== t ? (vl = null, yl = Nt() + 500, Vi(e, t)) : Ui = na(
      e,
      t
    );
    e: do
      try {
        if (Ue !== 0 && Ae !== null) {
          t = Ae;
          var c = Kt;
          t: switch (Ue) {
            case 1:
              Ue = 0, Kt = null, Hi(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Of(c)) {
                Ue = 0, Kt = null, Em(t);
                break;
              }
              t = function() {
                Ue !== 2 && Ue !== 9 || ke !== e || (Ue = 7), En(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              Of(c) ? (Ue = 0, Kt = null, Em(t)) : (Ue = 0, Kt = null, Hi(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (Ae.tag) {
                case 26:
                  p = Ae.memoizedState;
                case 5:
                case 27:
                  var S = Ae;
                  if (p ? lh(p) : S.stateNode.complete) {
                    Ue = 0, Kt = null;
                    var N = S.sibling;
                    if (N !== null) Ae = N;
                    else {
                      var C = S.return;
                      C !== null ? (Ae = C, _l(C)) : Ae = null;
                    }
                    break t;
                  }
              }
              Ue = 0, Kt = null, Hi(e, t, c, 5);
              break;
            case 6:
              Ue = 0, Kt = null, Hi(e, t, c, 6);
              break;
            case 8:
              eu(), We = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        Zv();
        break;
      } catch (G) {
        ym(e, G);
      }
    while (!0);
    return zn = qa = null, w.H = i, w.A = o, ze = n, Ae !== null ? 0 : (ke = null, we = 0, Hs(), We);
  }
  function Zv() {
    for (; Ae !== null && !ai(); )
      _m(Ae);
  }
  function _m(e) {
    var t = Kp(e.alternate, e, kn);
    e.memoizedProps = e.pendingProps, t === null ? _l(e) : Ae = t;
  }
  function Em(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Vp(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          we
        );
        break;
      case 11:
        t = Vp(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          we
        );
        break;
      case 5:
        gc(t);
      default:
        Xp(n, t), t = Ae = Sf(t, kn), t = Kp(n, t, kn);
    }
    e.memoizedProps = e.pendingProps, t === null ? _l(e) : Ae = t;
  }
  function Hi(e, t, n, i) {
    zn = qa = null, gc(t), Ti = null, jr = 0;
    var o = t.return;
    try {
      if (Bv(
        e,
        o,
        t,
        n,
        we
      )) {
        We = 1, ol(
          e,
          Pt(n, e.current)
        ), Ae = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw Ae = o, c;
      We = 1, ol(
        e,
        Pt(n, e.current)
      ), Ae = null;
      return;
    }
    t.flags & 32768 ? (Te || i === 1 ? e = !0 : Ui || (we & 536870912) !== 0 ? e = !1 : (ma = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = It.current, i !== null && i.tag === 13 && (i.flags |= 16384))), xm(t, e)) : _l(t);
  }
  function _l(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        xm(
          t,
          ma
        );
        return;
      }
      e = t.return;
      var n = Gv(
        t.alternate,
        t,
        kn
      );
      if (n !== null) {
        Ae = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function xm(e, t) {
    do {
      var n = qv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Ae = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ae = e;
        return;
      }
      Ae = e = n;
    } while (e !== null);
    We = 6, Ae = null;
  }
  function Nm(e, t, n, i, o, c, p, S, N) {
    e.cancelPendingCommit = null;
    do
      El();
    while (dt !== 0);
    if ((ze & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (c = t.lanes | t.childLanes, c |= Io, St(
        e,
        n,
        c,
        p,
        S,
        N
      ), e === ke && (Ae = ke = null, we = 0), Bi = t, ya = e, Kn = n, Fc = c, Wc = o, pm = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, eb(ii, function() {
        return Tm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = w.T, w.T = null, o = K.p, K.p = 2, p = ze, ze |= 4;
        try {
          Iv(e, t, n);
        } finally {
          ze = p, K.p = o, w.T = i;
        }
      }
      dt = 1, Am(), jm(), wm();
    }
  }
  function Am() {
    if (dt === 1) {
      dt = 0;
      var e = ya, t = Bi, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = w.T, w.T = null;
        var i = K.p;
        K.p = 2;
        var o = ze;
        ze |= 4;
        try {
          rm(t, e);
          var c = pu, p = df(e.containerInfo), S = c.focusedElem, N = c.selectionRange;
          if (p !== S && S && S.ownerDocument && uf(
            S.ownerDocument.documentElement,
            S
          )) {
            if (N !== null && Bo(S)) {
              var C = N.start, G = N.end;
              if (G === void 0 && (G = C), "selectionStart" in S)
                S.selectionStart = C, S.selectionEnd = Math.min(
                  G,
                  S.value.length
                );
              else {
                var k = S.ownerDocument || document, z = k && k.defaultView || window;
                if (z.getSelection) {
                  var U = z.getSelection(), le = S.textContent.length, me = Math.min(N.start, le), qe = N.end === void 0 ? me : Math.min(N.end, le);
                  !U.extend && me > qe && (p = qe, qe = me, me = p);
                  var $ = cf(
                    S,
                    me
                  ), j = cf(
                    S,
                    qe
                  );
                  if ($ && j && (U.rangeCount !== 1 || U.anchorNode !== $.node || U.anchorOffset !== $.offset || U.focusNode !== j.node || U.focusOffset !== j.offset)) {
                    var O = k.createRange();
                    O.setStart($.node, $.offset), U.removeAllRanges(), me > qe ? (U.addRange(O), U.extend(j.node, j.offset)) : (O.setEnd(j.node, j.offset), U.addRange(O));
                  }
                }
              }
            }
            for (k = [], U = S; U = U.parentNode; )
              U.nodeType === 1 && k.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < k.length; S++) {
              var I = k[S];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          zl = !!fu, pu = fu = null;
        } finally {
          ze = o, K.p = i, w.T = n;
        }
      }
      e.current = t, dt = 2;
    }
  }
  function jm() {
    if (dt === 2) {
      dt = 0;
      var e = ya, t = Bi, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = w.T, w.T = null;
        var i = K.p;
        K.p = 2;
        var o = ze;
        ze |= 4;
        try {
          em(e, t.alternate, t);
        } finally {
          ze = o, K.p = i, w.T = n;
        }
      }
      dt = 3;
    }
  }
  function wm() {
    if (dt === 4 || dt === 3) {
      dt = 0, ar();
      var e = ya, t = Bi, n = Kn, i = pm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? dt = 5 : (dt = 0, Bi = ya = null, $m(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (ga = null), Ht(n), t = t.stateNode, At && typeof At.onCommitFiberRoot == "function")
        try {
          At.onCommitFiberRoot(
            si,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = w.T, o = K.p, K.p = 2, w.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < i.length; p++) {
            var S = i[p];
            c(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          w.T = t, K.p = o;
        }
      }
      (Kn & 3) !== 0 && El(), En(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === Pc ? Ir++ : (Ir = 0, Pc = e) : Ir = 0, kr(0);
    }
  }
  function $m(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Nr(t)));
  }
  function El() {
    return Am(), jm(), wm(), Tm();
  }
  function Tm() {
    if (dt !== 5) return !1;
    var e = ya, t = Fc;
    Fc = 0;
    var n = Ht(Kn), i = w.T, o = K.p;
    try {
      K.p = 32 > n ? 32 : n, w.T = null, n = Wc, Wc = null;
      var c = ya, p = Kn;
      if (dt = 0, Bi = ya = null, Kn = 0, (ze & 6) !== 0) throw Error(l(331));
      var S = ze;
      if (ze |= 4, um(c.current), lm(
        c,
        c.current,
        p,
        n
      ), ze = S, kr(0, !1), At && typeof At.onPostCommitFiberRoot == "function")
        try {
          At.onPostCommitFiberRoot(si, c);
        } catch {
        }
      return !0;
    } finally {
      K.p = o, w.T = i, $m(e, t);
    }
  }
  function Mm(e, t, n) {
    t = Pt(n, t), t = Oc(e.stateNode, t, 2), e = ua(e, t, 2), e !== null && (ye(e, 2), En(e));
  }
  function Le(e, t, n) {
    if (e.tag === 3)
      Mm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (ga === null || !ga.has(i))) {
            e = Pt(n, e), n = Op(2), i = ua(t, n, 2), i !== null && (Cp(
              n,
              i,
              t,
              e
            ), ye(i, 2), En(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function nu(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Yv();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(n) || (Qc = !0, o.add(n), e = Fv.bind(null, e, t, n), t.then(e, e));
  }
  function Fv(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ke === e && (we & n) === n && (We === 4 || We === 3 && (we & 62914560) === we && 300 > Nt() - gl ? (ze & 2) === 0 && Vi(e, 0) : Jc |= n, Li === we && (Li = 0)), En(e);
  }
  function Om(e, t) {
    t === 0 && (t = cr()), e = Va(e, t), e !== null && (ye(e, t), En(e));
  }
  function Wv(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Om(e, n);
  }
  function Pv(e, t) {
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
  function eb(e, t) {
    return cn(e, t);
  }
  var xl = null, Gi = null, au = !1, Nl = !1, iu = !1, ba = 0;
  function En(e) {
    e !== Gi && e.next === null && (Gi === null ? xl = Gi = e : Gi = Gi.next = e), Nl = !0, au || (au = !0, nb());
  }
  function kr(e, t) {
    if (!iu && Nl) {
      iu = !0;
      do
        for (var n = !1, i = xl; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var p = i.suspendedLanes, S = i.pingedLanes;
              c = (1 << 31 - jt(42 | e) + 1) - 1, c &= o & ~(p & ~S), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, Rm(i, c));
          } else
            c = we, c = Da(
              i,
              i === ke ? c : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (c & 3) === 0 || na(i, c) || (n = !0, Rm(i, c));
          i = i.next;
        }
      while (n);
      iu = !1;
    }
  }
  function tb() {
    Cm();
  }
  function Cm() {
    Nl = au = !1;
    var e = 0;
    ba !== 0 && fb() && (e = ba);
    for (var t = Nt(), n = null, i = xl; i !== null; ) {
      var o = i.next, c = Dm(i, t);
      c === 0 ? (i.next = null, n === null ? xl = o : n.next = o, o === null && (Gi = n)) : (n = i, (e !== 0 || (c & 3) !== 0) && (Nl = !0)), i = o;
    }
    dt !== 0 && dt !== 5 || kr(e), ba !== 0 && (ba = 0);
  }
  function Dm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - jt(c), S = 1 << p, N = o[p];
      N === -1 ? ((S & n) === 0 || (S & i) !== 0) && (o[p] = $s(S, t)) : N <= t && (e.expiredLanes |= S), c &= ~S;
    }
    if (t = ke, n = we, n = Da(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Ye(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || na(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && Ye(i), Ht(n)) {
        case 2:
        case 8:
          n = ws;
          break;
        case 32:
          n = ii;
          break;
        case 268435456:
          n = rr;
          break;
        default:
          n = ii;
      }
      return i = zm.bind(null, e), n = cn(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && Ye(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zm(e, t) {
    if (dt !== 0 && dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (El() && e.callbackNode !== n)
      return null;
    var i = we;
    return i = Da(
      e,
      e === ke ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (hm(e, i, t), Dm(e, Nt()), e.callbackNode != null && e.callbackNode === n ? zm.bind(null, e) : null);
  }
  function Rm(e, t) {
    if (El()) return null;
    hm(e, t, !0);
  }
  function nb() {
    mb(function() {
      (ze & 6) !== 0 ? cn(
        ir,
        tb
      ) : Cm();
    });
  }
  function ru() {
    if (ba === 0) {
      var e = ji;
      e === 0 && (e = li, li <<= 1, (li & 261888) === 0 && (li = 256)), ba = e;
    }
    return ba;
  }
  function Um(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Cs("" + e);
  }
  function Lm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function ab(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var c = Um(
        (o[Ot] || null).action
      ), p = i.submitter;
      p && (t = (t = p[Ot] || null) ? Um(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var S = new Us(
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
                if (ba !== 0) {
                  var N = p ? Lm(o, p) : new FormData(o);
                  Ac(
                    n,
                    {
                      pending: !0,
                      data: N,
                      method: o.method,
                      action: c
                    },
                    null,
                    N
                  );
                }
              } else
                typeof c == "function" && (S.preventDefault(), N = p ? Lm(o, p) : new FormData(o), Ac(
                  n,
                  {
                    pending: !0,
                    data: N,
                    method: o.method,
                    action: c
                  },
                  c,
                  N
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var su = 0; su < qo.length; su++) {
    var lu = qo[su], ib = lu.toLowerCase(), rb = lu[0].toUpperCase() + lu.slice(1);
    dn(
      ib,
      "on" + rb
    );
  }
  dn(mf, "onAnimationEnd"), dn(hf, "onAnimationIteration"), dn(gf, "onAnimationStart"), dn("dblclick", "onDoubleClick"), dn("focusin", "onFocus"), dn("focusout", "onBlur"), dn(_v, "onTransitionRun"), dn(Ev, "onTransitionStart"), dn(xv, "onTransitionCancel"), dn(yf, "onTransitionEnd"), fi("onMouseEnter", ["mouseout", "mouseover"]), fi("onMouseLeave", ["mouseout", "mouseover"]), fi("onPointerEnter", ["pointerout", "pointerover"]), fi("onPointerLeave", ["pointerout", "pointerover"]), Ra(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ra(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ra("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ra(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kr)
  );
  function Bm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], o = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = i.length - 1; 0 <= p; p--) {
            var S = i[p], N = S.instance, C = S.currentTarget;
            if (S = S.listener, N !== c && o.isPropagationStopped())
              break e;
            c = S, o.currentTarget = C;
            try {
              c(o);
            } catch (G) {
              Vs(G);
            }
            o.currentTarget = null, c = N;
          }
        else
          for (p = 0; p < i.length; p++) {
            if (S = i[p], N = S.instance, C = S.currentTarget, S = S.listener, N !== c && o.isPropagationStopped())
              break e;
            c = S, o.currentTarget = C;
            try {
              c(o);
            } catch (G) {
              Vs(G);
            }
            o.currentTarget = null, c = N;
          }
      }
    }
  }
  function je(e, t) {
    var n = t[So];
    n === void 0 && (n = t[So] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Vm(t, e, 2, !1), n.add(i));
  }
  function ou(e, t, n) {
    var i = 0;
    t && (i |= 4), Vm(
      n,
      e,
      i,
      t
    );
  }
  var Al = "_reactListening" + Math.random().toString(36).slice(2);
  function cu(e) {
    if (!e[Al]) {
      e[Al] = !0, Od.forEach(function(n) {
        n !== "selectionchange" && (sb.has(n) || ou(n, !1, e), ou(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Al] || (t[Al] = !0, ou("selectionchange", !1, t));
    }
  }
  function Vm(e, t, n, i) {
    switch (mh(t)) {
      case 2:
        var o = zb;
        break;
      case 8:
        o = Rb;
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
  function uu(e, t, n, i, o) {
    var c = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var p = i.tag;
        if (p === 3 || p === 4) {
          var S = i.stateNode.containerInfo;
          if (S === o) break;
          if (p === 4)
            for (p = i.return; p !== null; ) {
              var N = p.tag;
              if ((N === 3 || N === 4) && p.stateNode.containerInfo === o)
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (p = ci(S), p === null) return;
            if (N = p.tag, N === 5 || N === 6 || N === 26 || N === 27) {
              i = c = p;
              continue e;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    Id(function() {
      var C = c, G = wo(n), k = [];
      e: {
        var z = vf.get(e);
        if (z !== void 0) {
          var U = Us, le = e;
          switch (e) {
            case "keypress":
              if (zs(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Py;
              break;
            case "focusin":
              le = "focus", U = Do;
              break;
            case "focusout":
              le = "blur", U = Do;
              break;
            case "beforeblur":
            case "afterblur":
              U = Do;
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
              U = Yd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Gy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = nv;
              break;
            case mf:
            case hf:
            case gf:
              U = ky;
              break;
            case yf:
              U = iv;
              break;
            case "scroll":
            case "scrollend":
              U = Vy;
              break;
            case "wheel":
              U = sv;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Yy;
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
              U = ov;
          }
          var me = (t & 4) !== 0, qe = !me && (e === "scroll" || e === "scrollend"), $ = me ? z !== null ? z + "Capture" : null : z;
          me = [];
          for (var j = C, O; j !== null; ) {
            var I = j;
            if (O = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || O === null || $ === null || (I = pr(j, $), I != null && me.push(
              Yr(j, I, O)
            )), qe) break;
            j = j.return;
          }
          0 < me.length && (z = new U(
            z,
            le,
            null,
            n,
            G
          ), k.push({ event: z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", z && n !== jo && (le = n.relatedTarget || n.fromElement) && (ci(le) || le[oi]))
            break e;
          if ((U || z) && (z = G.window === G ? G : (z = G.ownerDocument) ? z.defaultView || z.parentWindow : window, U ? (le = n.relatedTarget || n.toElement, U = C, le = le ? ci(le) : null, le !== null && (qe = d(le), me = le.tag, le !== qe || me !== 5 && me !== 27 && me !== 6) && (le = null)) : (U = null, le = C), U !== le)) {
            if (me = Yd, I = "onMouseLeave", $ = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (me = Qd, I = "onPointerLeave", $ = "onPointerEnter", j = "pointer"), qe = U == null ? z : fr(U), O = le == null ? z : fr(le), z = new me(
              I,
              j + "leave",
              U,
              n,
              G
            ), z.target = qe, z.relatedTarget = O, I = null, ci(G) === C && (me = new me(
              $,
              j + "enter",
              le,
              n,
              G
            ), me.target = O, me.relatedTarget = qe, I = me), qe = I, U && le)
              t: {
                for (me = lb, $ = U, j = le, O = 0, I = $; I; I = me(I))
                  O++;
                I = 0;
                for (var de = j; de; de = me(de))
                  I++;
                for (; 0 < O - I; )
                  $ = me($), O--;
                for (; 0 < I - O; )
                  j = me(j), I--;
                for (; O--; ) {
                  if ($ === j || j !== null && $ === j.alternate) {
                    me = $;
                    break t;
                  }
                  $ = me($), j = me(j);
                }
                me = null;
              }
            else me = null;
            U !== null && Hm(
              k,
              z,
              U,
              me,
              !1
            ), le !== null && qe !== null && Hm(
              k,
              qe,
              le,
              me,
              !0
            );
          }
        }
        e: {
          if (z = C ? fr(C) : window, U = z.nodeName && z.nodeName.toLowerCase(), U === "select" || U === "input" && z.type === "file")
            var Ce = nf;
          else if (ef(z))
            if (af)
              Ce = vv;
            else {
              Ce = gv;
              var oe = hv;
            }
          else
            U = z.nodeName, !U || U.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? C && Ao(C.elementType) && (Ce = nf) : Ce = yv;
          if (Ce && (Ce = Ce(e, C))) {
            tf(
              k,
              Ce,
              n,
              G
            );
            break e;
          }
          oe && oe(e, z, C), e === "focusout" && C && z.type === "number" && C.memoizedProps.value != null && No(z, "number", z.value);
        }
        switch (oe = C ? fr(C) : window, e) {
          case "focusin":
            (ef(oe) || oe.contentEditable === "true") && (vi = oe, Vo = C, _r = null);
            break;
          case "focusout":
            _r = Vo = vi = null;
            break;
          case "mousedown":
            Ho = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ho = !1, ff(k, n, G);
            break;
          case "selectionchange":
            if (Sv) break;
          case "keydown":
          case "keyup":
            ff(k, n, G);
        }
        var Ne;
        if (Ro)
          e: {
            switch (e) {
              case "compositionstart":
                var $e = "onCompositionStart";
                break e;
              case "compositionend":
                $e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $e = "onCompositionUpdate";
                break e;
            }
            $e = void 0;
          }
        else
          yi ? Wd(e, n) && ($e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($e = "onCompositionStart");
        $e && (Jd && n.locale !== "ko" && (yi || $e !== "onCompositionStart" ? $e === "onCompositionEnd" && yi && (Ne = kd()) : (aa = G, Mo = "value" in aa ? aa.value : aa.textContent, yi = !0)), oe = jl(C, $e), 0 < oe.length && ($e = new Xd(
          $e,
          e,
          null,
          n,
          G
        ), k.push({ event: $e, listeners: oe }), Ne ? $e.data = Ne : (Ne = Pd(n), Ne !== null && ($e.data = Ne)))), (Ne = uv ? dv(e, n) : fv(e, n)) && ($e = jl(C, "onBeforeInput"), 0 < $e.length && (oe = new Xd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          G
        ), k.push({
          event: oe,
          listeners: $e
        }), oe.data = Ne)), ab(
          k,
          e,
          C,
          n,
          G
        );
      }
      Bm(k, t);
    });
  }
  function Yr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function jl(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = pr(e, n), o != null && i.unshift(
        Yr(e, o, c)
      ), o = pr(e, t), o != null && i.push(
        Yr(e, o, c)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function lb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Hm(e, t, n, i, o) {
    for (var c = t._reactName, p = []; n !== null && n !== i; ) {
      var S = n, N = S.alternate, C = S.stateNode;
      if (S = S.tag, N !== null && N === i) break;
      S !== 5 && S !== 26 && S !== 27 || C === null || (N = C, o ? (C = pr(n, c), C != null && p.unshift(
        Yr(n, C, N)
      )) : o || (C = pr(n, c), C != null && p.push(
        Yr(n, C, N)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var ob = /\r\n?/g, cb = /\u0000|\uFFFD/g;
  function Gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(ob, `
`).replace(cb, "");
  }
  function qm(e, t) {
    return t = Gm(t), Gm(e) === t;
  }
  function Ge(e, t, n, i, o, c) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || mi(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && mi(e, "" + i);
        break;
      case "className":
        Ms(e, "class", i);
        break;
      case "tabIndex":
        Ms(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ms(e, n, i);
        break;
      case "style":
        Gd(e, i, c);
        break;
      case "data":
        if (t !== "object") {
          Ms(e, "data", i);
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
        i = Cs("" + i), e.setAttribute(n, i);
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
          typeof c == "function" && (n === "formAction" ? (t !== "input" && Ge(e, t, "name", o.name, o, null), Ge(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Ge(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Ge(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Ge(e, t, "encType", o.encType, o, null), Ge(e, t, "method", o.method, o, null), Ge(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = Cs("" + i), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = Mn);
        break;
      case "onScroll":
        i != null && je("scroll", e);
        break;
      case "onScrollEnd":
        i != null && je("scrollend", e);
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
        n = Cs("" + i), e.setAttributeNS(
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
        je("beforetoggle", e), je("toggle", e), Ts(e, "popover", i);
        break;
      case "xlinkActuate":
        Tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Tn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Tn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Ts(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ly.get(n) || n, Ts(e, n, i));
    }
  }
  function du(e, t, n, i, o, c) {
    switch (n) {
      case "style":
        Gd(e, i, c);
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
        typeof i == "string" ? mi(e, i) : (typeof i == "number" || typeof i == "bigint") && mi(e, "" + i);
        break;
      case "onScroll":
        i != null && je("scroll", e);
        break;
      case "onScrollEnd":
        i != null && je("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = Mn);
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
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), c = e[Ot] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof i == "function")) {
              typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : Ts(e, n, i);
          }
    }
  }
  function vt(e, t, n) {
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
        je("error", e), je("load", e);
        var i = !1, o = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var p = n[c];
            if (p != null)
              switch (c) {
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
                  Ge(e, t, c, p, n, null);
              }
          }
        o && Ge(e, t, "srcSet", n.srcSet, n, null), i && Ge(e, t, "src", n.src, n, null);
        return;
      case "input":
        je("invalid", e);
        var S = c = p = o = null, N = null, C = null;
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
                  N = G;
                  break;
                case "defaultChecked":
                  C = G;
                  break;
                case "value":
                  c = G;
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
                  Ge(e, t, i, G, n, null);
              }
          }
        Ld(
          e,
          c,
          S,
          N,
          C,
          p,
          o,
          !1
        );
        return;
      case "select":
        je("invalid", e), i = p = c = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (S = n[o], S != null))
            switch (o) {
              case "value":
                c = S;
                break;
              case "defaultValue":
                p = S;
                break;
              case "multiple":
                i = S;
              default:
                Ge(e, t, o, S, n, null);
            }
        t = c, n = p, e.multiple = !!i, t != null ? pi(e, !!i, t, !1) : n != null && pi(e, !!i, n, !0);
        return;
      case "textarea":
        je("invalid", e), c = o = i = null;
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
                c = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(l(91));
                break;
              default:
                Ge(e, t, p, S, n, null);
            }
        Vd(e, i, o, c);
        return;
      case "option":
        for (N in n)
          if (n.hasOwnProperty(N) && (i = n[N], i != null))
            switch (N) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Ge(e, t, N, i, n, null);
            }
        return;
      case "dialog":
        je("beforetoggle", e), je("toggle", e), je("cancel", e), je("close", e);
        break;
      case "iframe":
      case "object":
        je("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Kr.length; i++)
          je(Kr[i], e);
        break;
      case "image":
        je("error", e), je("load", e);
        break;
      case "details":
        je("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        je("error", e), je("load", e);
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
        for (C in n)
          if (n.hasOwnProperty(C) && (i = n[C], i != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                Ge(e, t, C, i, n, null);
            }
        return;
      default:
        if (Ao(t)) {
          for (G in n)
            n.hasOwnProperty(G) && (i = n[G], i !== void 0 && du(
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
      n.hasOwnProperty(S) && (i = n[S], i != null && Ge(e, t, S, i, n, null));
  }
  function ub(e, t, n, i) {
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
        var o = null, c = null, p = null, S = null, N = null, C = null, G = null;
        for (U in n) {
          var k = n[U];
          if (n.hasOwnProperty(U) && k != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                N = k;
              default:
                i.hasOwnProperty(U) || Ge(e, t, U, null, i, k);
            }
        }
        for (var z in i) {
          var U = i[z];
          if (k = n[z], i.hasOwnProperty(z) && (U != null || k != null))
            switch (z) {
              case "type":
                c = U;
                break;
              case "name":
                o = U;
                break;
              case "checked":
                C = U;
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
                U !== k && Ge(
                  e,
                  t,
                  z,
                  U,
                  i,
                  k
                );
            }
        }
        xo(
          e,
          p,
          S,
          N,
          C,
          G,
          c,
          o
        );
        return;
      case "select":
        U = p = S = z = null;
        for (c in n)
          if (N = n[c], n.hasOwnProperty(c) && N != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                U = N;
              default:
                i.hasOwnProperty(c) || Ge(
                  e,
                  t,
                  c,
                  null,
                  i,
                  N
                );
            }
        for (o in i)
          if (c = i[o], N = n[o], i.hasOwnProperty(o) && (c != null || N != null))
            switch (o) {
              case "value":
                z = c;
                break;
              case "defaultValue":
                S = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== N && Ge(
                  e,
                  t,
                  o,
                  c,
                  i,
                  N
                );
            }
        t = S, n = p, i = U, z != null ? pi(e, !!n, z, !1) : !!i != !!n && (t != null ? pi(e, !!n, t, !0) : pi(e, !!n, n ? [] : "", !1));
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
                Ge(e, t, S, null, i, o);
            }
        for (p in i)
          if (o = i[p], c = n[p], i.hasOwnProperty(p) && (o != null || c != null))
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
                o !== c && Ge(e, t, p, o, i, c);
            }
        Bd(e, z, U);
        return;
      case "option":
        for (var le in n)
          if (z = n[le], n.hasOwnProperty(le) && z != null && !i.hasOwnProperty(le))
            switch (le) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ge(
                  e,
                  t,
                  le,
                  null,
                  i,
                  z
                );
            }
        for (N in i)
          if (z = i[N], U = n[N], i.hasOwnProperty(N) && z !== U && (z != null || U != null))
            switch (N) {
              case "selected":
                e.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Ge(
                  e,
                  t,
                  N,
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
        for (var me in n)
          z = n[me], n.hasOwnProperty(me) && z != null && !i.hasOwnProperty(me) && Ge(e, t, me, null, i, z);
        for (C in i)
          if (z = i[C], U = n[C], i.hasOwnProperty(C) && z !== U && (z != null || U != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(l(137, t));
                break;
              default:
                Ge(
                  e,
                  t,
                  C,
                  z,
                  i,
                  U
                );
            }
        return;
      default:
        if (Ao(t)) {
          for (var qe in n)
            z = n[qe], n.hasOwnProperty(qe) && z !== void 0 && !i.hasOwnProperty(qe) && du(
              e,
              t,
              qe,
              void 0,
              i,
              z
            );
          for (G in i)
            z = i[G], U = n[G], !i.hasOwnProperty(G) || z === U || z === void 0 && U === void 0 || du(
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
      z = n[$], n.hasOwnProperty($) && z != null && !i.hasOwnProperty($) && Ge(e, t, $, null, i, z);
    for (k in i)
      z = i[k], U = n[k], !i.hasOwnProperty(k) || z === U || z == null && U == null || Ge(e, t, k, z, i, U);
  }
  function Im(e) {
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
  function db() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var o = n[i], c = o.transferSize, p = o.initiatorType, S = o.duration;
        if (c && S && Im(p)) {
          for (p = 0, S = o.responseEnd, i += 1; i < n.length; i++) {
            var N = n[i], C = N.startTime;
            if (C > S) break;
            var G = N.transferSize, k = N.initiatorType;
            G && Im(k) && (N = N.responseEnd, p += G * (N < S ? 1 : (S - C) / (N - C)));
          }
          if (--i, t += 8 * (c + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var fu = null, pu = null;
  function wl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function km(e) {
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
  function mu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var hu = null;
  function fb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === hu ? !1 : (hu = e, !0) : (hu = null, !1);
  }
  var Ym = typeof setTimeout == "function" ? setTimeout : void 0, pb = typeof clearTimeout == "function" ? clearTimeout : void 0, Xm = typeof Promise == "function" ? Promise : void 0, mb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xm < "u" ? function(e) {
    return Xm.resolve(null).then(e).catch(hb);
  } : Ym;
  function hb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Sa(e) {
    return e === "head";
  }
  function Qm(e, t) {
    var n = t, i = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (i === 0) {
            e.removeChild(o), Ki(t);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          Xr(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Xr(n);
          for (var c = n.firstChild; c; ) {
            var p = c.nextSibling, S = c.nodeName;
            c[dr] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c), c = p;
          }
        } else
          n === "body" && Xr(e.ownerDocument.body);
      n = o;
    } while (n);
    Ki(t);
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
  function gu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gu(n), _o(n);
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
  function gb(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[dr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (c = e.getAttribute("src"), (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === c)
          return e;
      } else return e;
      if (e = rn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function yb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = rn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = rn(e.nextSibling), e === null)) return null;
    return e;
  }
  function yu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function vu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function vb(e, t) {
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
  function rn(e) {
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
  var bu = null;
  function Fm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return rn(e.nextSibling);
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
    switch (t = wl(n), e) {
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
  function Xr(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    _o(e);
  }
  var sn = /* @__PURE__ */ new Map(), eh = /* @__PURE__ */ new Set();
  function $l(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Yn = K.d;
  K.d = {
    f: bb,
    r: Sb,
    D: _b,
    C: Eb,
    L: xb,
    m: Nb,
    X: jb,
    S: Ab,
    M: wb
  };
  function bb() {
    var e = Yn.f(), t = bl();
    return e || t;
  }
  function Sb(e) {
    var t = ui(e);
    t !== null && t.tag === 5 && t.type === "form" ? yp(t) : Yn.r(e);
  }
  var qi = typeof document > "u" ? null : document;
  function th(e, t, n) {
    var i = qi;
    if (i && typeof t == "string" && t) {
      var o = Ft(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), eh.has(o) || (eh.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), vt(t, "link", e), ft(t), i.head.appendChild(t)));
    }
  }
  function _b(e) {
    Yn.D(e), th("dns-prefetch", e, null);
  }
  function Eb(e, t) {
    Yn.C(e, t), th("preconnect", e, t);
  }
  function xb(e, t, n) {
    Yn.L(e, t, n);
    var i = qi;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Ft(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Ft(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Ft(
        n.imageSizes
      ) + '"]')) : o += '[href="' + Ft(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = Ii(e);
          break;
        case "script":
          c = ki(e);
      }
      sn.has(c) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), sn.set(c, e), i.querySelector(o) !== null || t === "style" && i.querySelector(Qr(c)) || t === "script" && i.querySelector(Jr(c)) || (t = i.createElement("link"), vt(t, "link", e), ft(t), i.head.appendChild(t)));
    }
  }
  function Nb(e, t) {
    Yn.m(e, t);
    var n = qi;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Ft(i) + '"][href="' + Ft(e) + '"]', c = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = ki(e);
      }
      if (!sn.has(c) && (e = b({ rel: "modulepreload", href: e }, t), sn.set(c, e), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Jr(c)))
              return;
        }
        i = n.createElement("link"), vt(i, "link", e), ft(i), n.head.appendChild(i);
      }
    }
  }
  function Ab(e, t, n) {
    Yn.S(e, t, n);
    var i = qi;
    if (i && e) {
      var o = di(i).hoistableStyles, c = Ii(e);
      t = t || "default";
      var p = o.get(c);
      if (!p) {
        var S = { loading: 0, preload: null };
        if (p = i.querySelector(
          Qr(c)
        ))
          S.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = sn.get(c)) && Su(e, n);
          var N = p = i.createElement("link");
          ft(N), vt(N, "link", e), N._p = new Promise(function(C, G) {
            N.onload = C, N.onerror = G;
          }), N.addEventListener("load", function() {
            S.loading |= 1;
          }), N.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Tl(p, t, i);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: S
        }, o.set(c, p);
      }
    }
  }
  function jb(e, t) {
    Yn.X(e, t);
    var n = qi;
    if (n && e) {
      var i = di(n).hoistableScripts, o = ki(e), c = i.get(o);
      c || (c = n.querySelector(Jr(o)), c || (e = b({ src: e, async: !0 }, t), (t = sn.get(o)) && _u(e, t), c = n.createElement("script"), ft(c), vt(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(o, c));
    }
  }
  function wb(e, t) {
    Yn.M(e, t);
    var n = qi;
    if (n && e) {
      var i = di(n).hoistableScripts, o = ki(e), c = i.get(o);
      c || (c = n.querySelector(Jr(o)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = sn.get(o)) && _u(e, t), c = n.createElement("script"), ft(c), vt(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(o, c));
    }
  }
  function nh(e, t, n, i) {
    var o = (o = be.current) ? $l(o) : null;
    if (!o) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ii(n.href), n = di(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ii(n.href);
          var c = di(
            o
          ).hoistableStyles, p = c.get(e);
          if (p || (o = o.ownerDocument || o, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = o.querySelector(
            Qr(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), sn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, sn.set(e, n), c || $b(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ki(n), n = di(
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
  function Ii(e) {
    return 'href="' + Ft(e) + '"';
  }
  function Qr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ah(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function $b(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), vt(t, "link", n), ft(t), e.head.appendChild(t));
  }
  function ki(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function Jr(e) {
    return "script[async]" + e;
  }
  function ih(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + Ft(n.href) + '"]'
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
          ), ft(i), vt(i, "style", o), Tl(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = Ii(n.href);
          var c = e.querySelector(
            Qr(o)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, ft(c), c;
          i = ah(n), (o = sn.get(o)) && Su(i, o), c = (e.ownerDocument || e).createElement("link"), ft(c);
          var p = c;
          return p._p = new Promise(function(S, N) {
            p.onload = S, p.onerror = N;
          }), vt(c, "link", i), t.state.loading |= 4, Tl(c, n.precedence, e), t.instance = c;
        case "script":
          return c = ki(n.src), (o = e.querySelector(
            Jr(c)
          )) ? (t.instance = o, ft(o), o) : (i = n, (o = sn.get(c)) && (i = b({}, n), _u(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ft(o), vt(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Tl(i, n.precedence, e));
    return t.instance;
  }
  function Tl(e, t, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, c = o, p = 0; p < i.length; p++) {
      var S = i[p];
      if (S.dataset.precedence === t) c = S;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Su(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function _u(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ml = null;
  function rh(e, t, n) {
    if (Ml === null) {
      var i = /* @__PURE__ */ new Map(), o = Ml = /* @__PURE__ */ new Map();
      o.set(n, i);
    } else
      o = Ml, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
    if (i.has(e)) return i;
    for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var c = n[o];
      if (!(c[dr] || c[et] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var S = i.get(p);
        S ? S.push(c) : i.set(p, [c]);
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
  function Tb(e, t, n) {
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
  function Mb(e, t, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = Ii(i.href), c = t.querySelector(
          Qr(o)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ol.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = c, ft(c);
          return;
        }
        c = t.ownerDocument || t, i = ah(i), (o = sn.get(o)) && Su(i, o), c = c.createElement("link"), ft(c);
        var p = c;
        p._p = new Promise(function(S, N) {
          p.onload = S, p.onerror = N;
        }), vt(c, "link", i), n.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ol.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Eu = 0;
  function Ob(e, t) {
    return e.stylesheets && e.count === 0 && Dl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Dl(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Eu === 0 && (Eu = 62500 * db());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Dl(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > Eu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function Ol() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Dl(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Cl = null;
  function Dl(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Cl = /* @__PURE__ */ new Map(), t.forEach(Cb, e), Cl = null, Ol.call(e));
  }
  function Cb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Cl.get(e);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Cl.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var p = o[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), i = p);
        }
        i && n.set(null, i);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), c = n.get(p) || i, c === i && n.set(null, o), n.set(p, o), this.count++, i = Ol.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Zr = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: M,
    _currentValue2: M,
    _threadCount: 0
  };
  function Db(e, t, n, i, o, c, p, S, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = H(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = H(0), this.hiddenUpdates = H(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function oh(e, t, n, i, o, c, p, S, N, C, G, k) {
    return e = new Db(
      e,
      t,
      n,
      p,
      N,
      C,
      G,
      k,
      S
    ), t = 1, c === !0 && (t |= 24), c = qt(3, null, null, t), e.current = c, c.stateNode = e, t = tc(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, rc(c), e;
  }
  function ch(e) {
    return e ? (e = _i, e) : _i;
  }
  function uh(e, t, n, i, o, c) {
    o = ch(o), i.context === null ? i.context = o : i.pendingContext = o, i = ca(t), i.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (i.callback = c), n = ua(e, i, t), n !== null && (Lt(n, e, t), $r(n, e, t));
  }
  function dh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function xu(e, t) {
    dh(e, t), (e = e.alternate) && dh(e, t);
  }
  function fh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Va(e, 67108864);
      t !== null && Lt(t, e, 67108864), xu(e, 67108864);
    }
  }
  function ph(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xt();
      t = Mt(t);
      var n = Va(e, t);
      n !== null && Lt(n, e, t), xu(e, t);
    }
  }
  var zl = !0;
  function zb(e, t, n, i) {
    var o = w.T;
    w.T = null;
    var c = K.p;
    try {
      K.p = 2, Nu(e, t, n, i);
    } finally {
      K.p = c, w.T = o;
    }
  }
  function Rb(e, t, n, i) {
    var o = w.T;
    w.T = null;
    var c = K.p;
    try {
      K.p = 8, Nu(e, t, n, i);
    } finally {
      K.p = c, w.T = o;
    }
  }
  function Nu(e, t, n, i) {
    if (zl) {
      var o = Au(i);
      if (o === null)
        uu(
          e,
          t,
          i,
          Rl,
          n
        ), hh(e, i);
      else if (Lb(
        o,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (hh(e, i), t & 4 && -1 < Ub.indexOf(e)) {
        for (; o !== null; ) {
          var c = ui(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = vn(c.pendingLanes);
                  if (p !== 0) {
                    var S = c;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                      var N = 1 << 31 - jt(p);
                      S.entanglements[1] |= N, p &= ~N;
                    }
                    En(c), (ze & 6) === 0 && (yl = Nt() + 500, kr(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Va(c, 2), S !== null && Lt(S, c, 2), bl(), xu(c, 2);
            }
          if (c = Au(i), c === null && uu(
            e,
            t,
            i,
            Rl,
            n
          ), c === o) break;
          o = c;
        }
        o !== null && i.stopPropagation();
      } else
        uu(
          e,
          t,
          i,
          null,
          n
        );
    }
  }
  function Au(e) {
    return e = wo(e), ju(e);
  }
  var Rl = null;
  function ju(e) {
    if (Rl = null, e = ci(e), e !== null) {
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
    return Rl = e, null;
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
        switch (js()) {
          case ir:
            return 2;
          case ws:
            return 8;
          case ii:
          case ri:
            return 32;
          case rr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wu = !1, _a = null, Ea = null, xa = null, Fr = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Map(), Na = [], Ub = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _a = null;
        break;
      case "dragenter":
      case "dragleave":
        Ea = null;
        break;
      case "mouseover":
      case "mouseout":
        xa = null;
        break;
      case "pointerover":
      case "pointerout":
        Fr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wr.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, i, o, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: c,
      targetContainers: [o]
    }, t !== null && (t = ui(t), t !== null && fh(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Lb(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return _a = Pr(
          _a,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return Ea = Pr(
          Ea,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return xa = Pr(
          xa,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return Fr.set(
          c,
          Pr(
            Fr.get(c) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, Wr.set(
          c,
          Pr(
            Wr.get(c) || null,
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
    var t = ci(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, it(e.priority, function() {
              ph(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, it(e.priority, function() {
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
  function Ul(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Au(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        jo = i, n.target.dispatchEvent(i), jo = null;
      } else
        return t = ui(n), t !== null && fh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function yh(e, t, n) {
    Ul(e) && n.delete(t);
  }
  function Bb() {
    wu = !1, _a !== null && Ul(_a) && (_a = null), Ea !== null && Ul(Ea) && (Ea = null), xa !== null && Ul(xa) && (xa = null), Fr.forEach(yh), Wr.forEach(yh);
  }
  function Ll(e, t) {
    e.blockedOn === t && (e.blockedOn = null, wu || (wu = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      Bb
    )));
  }
  var Bl = null;
  function vh(e) {
    Bl !== e && (Bl = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Bl === e && (Bl = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (ju(i || n) === null)
              continue;
            break;
          }
          var c = ui(n);
          c !== null && (e.splice(t, 3), t -= 3, Ac(
            c,
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
  function Ki(e) {
    function t(N) {
      return Ll(N, e);
    }
    _a !== null && Ll(_a, e), Ea !== null && Ll(Ea, e), xa !== null && Ll(xa, e), Fr.forEach(t), Wr.forEach(t);
    for (var n = 0; n < Na.length; n++) {
      var i = Na[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Na.length && (n = Na[0], n.blockedOn === null); )
      gh(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], c = n[i + 1], p = o[Ot] || null;
        if (typeof c == "function")
          p || vh(n);
        else if (p) {
          var S = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, p = c[Ot] || null)
              S = p.formAction;
            else if (ju(o) !== null) continue;
          } else S = p.action;
          typeof S == "function" ? n[i + 1] = S : (n.splice(i, 3), i -= 3), vh(n);
        }
      }
  }
  function bh() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
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
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
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
  function $u(e) {
    this._internalRoot = e;
  }
  Vl.prototype.render = $u.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var n = t.current, i = Xt();
    uh(n, i, e, t, null, null);
  }, Vl.prototype.unmount = $u.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      uh(e.current, 2, null, e, null, null), bl(), t[oi] = null;
    }
  };
  function Vl(e) {
    this._internalRoot = e;
  }
  Vl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ur();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Na.length && t !== 0 && t < Na[n].priority; n++) ;
      Na.splice(n, 0, e), n === 0 && gh(e);
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
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Vb = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: w,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hl.isDisabled && Hl.supportsFiber)
      try {
        si = Hl.inject(
          Vb
        ), At = Hl;
      } catch {
      }
  }
  return ts.createRoot = function(e, t) {
    if (!u(e)) throw Error(l(299));
    var n = !1, i = "", o = wp, c = $p, p = Tp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = oh(
      e,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      o,
      c,
      p,
      bh
    ), e[oi] = t.current, cu(e), new $u(t);
  }, ts.hydrateRoot = function(e, t, n) {
    if (!u(e)) throw Error(l(299));
    var i = !1, o = "", c = wp, p = $p, S = Tp, N = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (N = n.formState)), t = oh(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      o,
      N,
      c,
      p,
      S,
      bh
    ), t.context = ch(null), n = t.current, i = Xt(), i = Mt(i), o = ca(i), o.callback = null, ua(n, o, i), n = i, t.current.lanes = n, ye(t, n), En(t), e[oi] = t.current, cu(e), new Vl(t);
  }, ts.version = "19.2.7", ts;
}
var Mh;
function Pb() {
  if (Mh) return Ou.exports;
  Mh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Ou.exports = Wb(), Ou.exports;
}
var e0 = Pb();
const t0 = ["none", "low", "medium", "high", "xhigh", "max"], n0 = ["low", "medium", "high", "xhigh", "max"], a0 = [
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
], i0 = 300 * 1e3, r0 = 500, Oh = 256, s0 = 160, l0 = 500, o0 = 300, c0 = /[\u0000-\u001f\u007f]/, us = /* @__PURE__ */ new Map();
function pd(a) {
  return typeof a == "string" && a !== "ultra" && /^[a-z][a-z0-9_-]{0,63}$/.test(a);
}
function Wl(a, r) {
  if (typeof a != "string" || c0.test(a)) return;
  const s = a.trim();
  if (s !== "")
    return s.slice(0, r);
}
function u0(a) {
  const r = Wl(a, Oh + 1);
  return r && r.length <= Oh ? r : void 0;
}
function d0(a) {
  if (!Array.isArray(a)) return;
  const r = /* @__PURE__ */ new Map();
  for (const s of a) {
    const l = typeof s == "string" ? s : s && typeof s == "object" ? s.effort : void 0;
    if (!pd(l) || r.has(l)) continue;
    const u = { effort: l };
    if (s && typeof s == "object") {
      const d = s.description, f = Wl(d, o0);
      f && (u.description = f);
    }
    r.set(l, u);
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
function f0(a) {
  return {
    models: a.models.map(md),
    capabilities: { ...a.capabilities },
    ...a.source ? { source: a.source } : {}
  };
}
function Mg(a) {
  if (!Array.isArray(a)) return [];
  const r = /* @__PURE__ */ new Set(), s = [];
  for (const l of a) {
    if (s.length >= r0) break;
    const u = typeof l == "string" ? { id: l } : l ?? {}, d = u0(u.id);
    if (!d || r.has(d)) continue;
    r.add(d);
    const f = [u.label, u.display_name, u.name].map((b) => Wl(b, s0)).find(Boolean), y = {
      id: d,
      label: f ?? d
    }, m = Wl(u.description, l0);
    m && (y.description = m);
    const g = u.defaultReasoningEffort ?? u.default_reasoning_effort ?? u.default_reasoning_level;
    pd(g) && (y.defaultReasoningEffort = g);
    const v = d0(
      u.reasoningEfforts ?? u.supported_reasoning_efforts ?? u.supported_reasoning_levels ?? u.reasoning_efforts
    );
    v && (y.reasoningEfforts = v), s.push(y);
  }
  return s;
}
function p0(a) {
  return a.filter((r) => r !== "ultra").map((r) => ({ effort: r }));
}
function Og(a) {
  if (a !== "openai" && a !== "openai-codex") return [];
  const r = a === "openai" ? t0 : n0;
  return a0.map((s) => ({
    id: s.id,
    label: s.label,
    description: s.description,
    defaultReasoningEffort: a === "openai" ? "medium" : s.codexDefault,
    reasoningEfforts: p0(r)
  }));
}
function Ku(a, r) {
  const s = Og(a), l = s.find((u) => u.id === r);
  if (l) return l;
  if (r === "gpt-5.6") {
    const u = s.find((d) => d.id === "gpt-5.6-sol");
    if (u) return { ...md(u), id: r, label: "GPT-5.6 (Sol alias)" };
  }
}
function Cg(a, r, s) {
  const l = [], u = /* @__PURE__ */ new Map(), d = (y) => {
    var v;
    const m = u.get(y.id);
    if (m === void 0) {
      u.set(y.id, l.length), l.push(md(y));
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
  Og(a).forEach(d), r.forEach((y) => {
    const m = Ku(a, y.id);
    m && d(m), d(y);
  });
  const f = s == null ? void 0 : s.trim();
  return f && !u.has(f) && d(Ku(a, f) ?? { id: f, label: f }), l;
}
function Pl(a, r, s = []) {
  var d;
  const l = Ku(a, r), u = s.find((f) => f.id === r);
  return u ? l ? {
    ...l,
    ...u,
    label: u.label === u.id ? l.label : u.label,
    defaultReasoningEffort: u.defaultReasoningEffort ?? l.defaultReasoningEffort,
    reasoningEfforts: (d = u.reasoningEfforts) != null && d.length ? u.reasoningEfforts : l.reasoningEfforts
  } : u : l;
}
function m0(a) {
  let r = 2166136261;
  for (let s = 0; s < a.length; s += 1)
    r ^= a.charCodeAt(s), r = Math.imul(r, 16777619);
  return `${a.length}-${(r >>> 0).toString(36)}`;
}
function Jl(a, r, s) {
  return `${a}:${m0(r ?? "")}:${(s == null ? void 0 : s.trim()) ?? ""}`;
}
function Dg(a, r = Date.now()) {
  const s = us.get(a);
  return s ? s.expiresAt <= r ? (us.delete(a), null) : f0(s.result) : null;
}
function zg(a, r, s = Date.now()) {
  us.set(a, {
    expiresAt: s + i0,
    result: {
      models: Mg(r.models),
      capabilities: {
        reasoningEffort: r.capabilities.reasoningEffort === !0,
        richModelCatalog: r.capabilities.richModelCatalog === !0
      },
      ...r.source ? { source: r.source } : {}
    }
  });
}
function rs(a) {
  const r = `${a}:`;
  for (const s of us.keys())
    s.startsWith(r) && us.delete(s);
}
const Xn = {
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
}, Rg = "settings";
function h0(a, r) {
  const s = {
    ...a.reasoningEfforts
  };
  for (const [l, u] of Object.entries(r.reasoningEfforts ?? {}))
    pd(u) && (s[l] = u);
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
function g0(a) {
  const r = a.storage.get(Rg);
  if (!r) return {
    ...Xn,
    models: { ...Xn.models },
    apiKeys: {},
    reasoningEfforts: { ...Xn.reasoningEfforts },
    providerCapabilities: { ...Xn.providerCapabilities }
  };
  try {
    const s = JSON.parse(r);
    return h0(Xn, s);
  } catch {
    return {
      ...Xn,
      models: { ...Xn.models },
      apiKeys: {},
      reasoningEfforts: { ...Xn.reasoningEfforts },
      providerCapabilities: { ...Xn.providerCapabilities }
    };
  }
}
function y0(a, r) {
  const { providerCapabilities: s, ...l } = r;
  a.storage.set(Rg, JSON.stringify(l));
}
function eo(a) {
  var s, l;
  const r = (s = a.providerCapabilities) == null ? void 0 : s[a.provider];
  if (!((r == null ? void 0 : r.reasoningEffort) !== !0 || r.reasoningModel !== a.models[a.provider]))
    return (l = a.reasoningEfforts) == null ? void 0 : l[a.provider];
}
function Ug(a, r, s) {
  var d;
  const l = { ...a.reasoningEfforts };
  s === "" ? delete l[r] : l[r] = s;
  const u = (d = a.providerCapabilities) == null ? void 0 : d[r];
  return {
    ...a,
    reasoningEfforts: l,
    ...u ? {
      providerCapabilities: {
        ...a.providerCapabilities,
        [r]: {
          reasoningEffort: u.reasoningEffort,
          richModelCatalog: u.richModelCatalog,
          ...s ? { reasoningModel: a.models[r] ?? "" } : {}
        }
      }
    } : {}
  };
}
function Yu(a, r, s, l, u) {
  var R, E;
  const d = (R = a.providerCapabilities) == null ? void 0 : R[r], f = { ...a.reasoningEfforts }, y = f[r], m = a.models[r] ?? "", g = s.find((B) => B.id === m), v = Pl(
    r,
    m,
    Cg(r, s, m)
  ), b = !!((E = v == null ? void 0 : v.reasoningEfforts) != null && E.some(
    (B) => B.effort === y
  )), _ = l.reasoningEffort && l.richModelCatalog && !!g && u !== "fallback" && u !== "stale" && !!y && !b;
  _ && delete f[r];
  const A = !_ && l.reasoningEffort && y && b ? m : void 0;
  return ((d == null ? void 0 : d.reasoningEffort) ?? !1) === l.reasoningEffort && ((d == null ? void 0 : d.richModelCatalog) ?? !1) === l.richModelCatalog && (d == null ? void 0 : d.reasoningModel) === A && !_ ? a : {
    ...a,
    reasoningEfforts: f,
    providerCapabilities: {
      ...a.providerCapabilities,
      [r]: {
        reasoningEffort: l.reasoningEffort,
        richModelCatalog: l.richModelCatalog,
        ...A ? { reasoningModel: A } : {}
      }
    }
  };
}
function v0(a, r) {
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
const Ch = 50, Lg = "conversations";
function hd(a) {
  const r = a.storage.get(Lg);
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
function Gl(a, r) {
  try {
    return a.storage.set(Lg, JSON.stringify(r)), !0;
  } catch {
    return !1;
  }
}
function Bg(a, r) {
  if (Gl(a, r)) return;
  const s = [...r];
  for (; s.length > 1; )
    if (s.pop(), Gl(a, s)) return;
  Gl(a, r.map(Dh)) || Gl(a, r.slice(0, 1).map(Dh));
}
function Xu(a) {
  return hd(a).sort((r, s) => s.updatedAt - r.updatedAt);
}
function zh(a, r) {
  const s = hd(a), l = s.findIndex((u) => u.id === r.id);
  l >= 0 ? s[l] = r : s.push(r), s.sort((u, d) => d.updatedAt - u.updatedAt), s.length > Ch && s.splice(Ch), Bg(a, s);
}
function b0(a, r) {
  const s = hd(a).filter((l) => l.id !== r);
  Bg(a, s);
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
function S0(a) {
  return a.slice(0, 40);
}
function _0() {
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
function E0({ onClick: a }) {
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      className: "gcp-fab",
      onClick: a,
      "aria-label": "Graph Copilot",
      title: "Graph Copilot",
      children: /* @__PURE__ */ h.jsx(_0, {})
    }
  );
}
const Uh = 8 * 1024 * 1024, Lh = 2 * 1024 * 1024, Bh = 20 * 1024 * 1024, x0 = /* @__PURE__ */ new Set([
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
function Vg(a) {
  const r = a.lastIndexOf(".");
  return r >= 0 ? a.slice(r + 1).toLowerCase() : "";
}
function Hg(a) {
  const r = (a.type || "").toLowerCase();
  if (r.startsWith("image/")) return "image";
  if (r === "application/pdf") return "pdf";
  if (r.startsWith("text/")) return "text";
  const s = Vg(a.name);
  return s === "pdf" ? "pdf" : x0.has(s) ? "image" : "text";
}
function os(a) {
  return a < 1024 ? `${a} B` : a < 1024 * 1024 ? `${(a / 1024).toFixed(1)} KB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
}
const N0 = {
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
function A0(a) {
  return N0[Vg(a)] ?? "";
}
function j0(a) {
  return new Promise((r, s) => {
    const l = new FileReader();
    l.onload = () => r(l.result), l.onerror = () => s(l.error ?? new Error("FileReader failed")), l.readAsDataURL(a);
  });
}
const w0 = "4.10.38", Vh = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${w0}/build`;
let Ru = null;
function $0() {
  return Ru || (Ru = import(`${Vh}/pdf.mjs`).then((r) => {
    const s = r.default ?? r;
    return s.GlobalWorkerOptions.workerSrc = `${Vh}/pdf.worker.mjs`, s;
  })), Ru;
}
async function T0(a) {
  const r = await $0(), s = await a.arrayBuffer(), l = await r.getDocument({ data: s }).promise, u = [];
  for (let d = 1; d <= l.numPages; d++) {
    const m = (await (await l.getPage(d)).getTextContent()).items.map((g) => typeof (g == null ? void 0 : g.str) == "string" ? g.str : "").join(" ").replace(/[ \t]+/g, " ").trim();
    m && u.push(m);
  }
  return u.join(`

`).trim();
}
async function M0(a, r = {}) {
  const s = Hg(a), l = {
    id: crypto.randomUUID(),
    kind: s,
    name: a.name,
    size: a.size,
    mime: a.type || ""
  };
  if (s === "image") {
    if (a.size > Uh)
      throw new Error(`Image "${a.name}" is too large (max ${os(Uh)})`);
    const d = await (r.readDataUrl ?? j0)(a);
    return { ...l, dataUrl: d };
  }
  if (s === "pdf") {
    if (a.size > Bh)
      throw new Error(`PDF "${a.name}" is too large (max ${os(Bh)})`);
    let d;
    try {
      d = await (r.loadPdfText ?? T0)(a);
    } catch (f) {
      const y = (f == null ? void 0 : f.message) ?? String(f);
      throw new Error(`Could not read PDF "${a.name}": ${y}`);
    }
    return { ...l, text: d };
  }
  if (a.size > Lh)
    throw new Error(`Text file "${a.name}" is too large (max ${os(Lh)})`);
  const u = await (r.readText ?? ((d) => d.text()))(a);
  return { ...l, text: u };
}
const O0 = /* @__PURE__ */ new Set([
  "openai",
  "openai-codex",
  "openrouter",
  "anthropic",
  "custom"
]);
function Gg(a, r, s) {
  const l = r ?? [], u = [];
  a.trim() && u.push(a);
  for (const y of l)
    if ((y.kind === "text" || y.kind === "pdf") && y.text) {
      const m = y.kind === "pdf" ? "" : A0(y.name);
      u.push(`Attached file "${y.name}":
\`\`\`${m}
${y.text}
\`\`\``);
    }
  const d = u.join(`

`), f = l.filter((y) => y.kind === "image" && y.dataUrl);
  if (f.length > 0 && O0.has(s))
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
    const u = l.slice(6).trim();
    if (!u || u === "[DONE]") continue;
    let d;
    try {
      d = JSON.parse(u);
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
async function qg(a, r, s, l) {
  let u;
  try {
    u = await a.http.fetch("/api/llm/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r),
      signal: l
    });
  } catch (m) {
    s.onError(`Network error: ${String(m)}`);
    return;
  }
  if (!u.ok) {
    let m = "";
    try {
      m = await u.text(), m.length > 200 && (m = m.slice(0, 200) + "...");
    } catch {
    }
    s.onError(`HTTP ${u.status}: ${m}`);
    return;
  }
  const d = u.body.getReader(), f = new TextDecoder();
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
async function Ig(a, r, s, l) {
  var m, g;
  const u = await a.http.fetch("/api/llm/models", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider: r, api_key: s, base_url: l })
  });
  if (!u.ok) {
    let v = "";
    try {
      v = await u.text(), v.length > 200 && (v = v.slice(0, 200) + "...");
    } catch {
    }
    throw new Error(`HTTP ${u.status}: ${v}`);
  }
  const d = await u.json(), f = d && typeof d == "object" ? d : {}, y = ["live", "cache", "stale", "fallback"].includes(String(f.source)) ? f.source : void 0;
  return {
    models: Mg(f.models),
    capabilities: {
      reasoningEffort: ((m = f.capabilities) == null ? void 0 : m.reasoning_effort) === !0,
      richModelCatalog: ((g = f.capabilities) == null ? void 0 : g.rich_model_catalog) === !0
    },
    ...y ? { source: y } : {}
  };
}
async function C0(a) {
  return (await (await a.http.fetch("/api/llm/codex/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  })).json()).auth_url;
}
async function Qu(a) {
  return await (await a.http.fetch("/api/llm/codex/status", void 0)).json();
}
async function D0(a) {
  await a.http.fetch("/api/llm/codex/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });
}
const Ta = "[REDACTED]";
function Pe(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}
function z0(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function Oa(a) {
  const r = z0(a);
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
  return Array.isArray(a) ? a.map(Fn) : Pe(a) ? Object.fromEntries(
    Object.entries(a).map(([r, s]) => [
      r,
      Oa(r) ? Ta : Fn(s)
    ])
  ) : a;
}
function An(a, r) {
  typeof a == "string" ? a.length > 0 && r.add(a) : Array.isArray(a) ? a.forEach((s) => An(s, r)) : Pe(a) && Object.values(a).forEach((s) => An(s, r));
}
function to(a, r) {
  if (Array.isArray(a))
    a.forEach((s) => to(s, r));
  else if (Pe(a))
    for (const [s, l] of Object.entries(a))
      Oa(s) ? An(l, r) : to(l, r);
}
function Gh(a, r, s, l) {
  if (!Array.isArray(a)) return;
  const u = /* @__PURE__ */ new Map();
  for (const d of a) {
    if (!Pe(d)) continue;
    let f;
    if (d.op === "add_node")
      f = typeof d.node_type == "string" ? d.node_type : void 0, typeof d.ref == "string" && f && u.set(d.ref, f);
    else if (d.op === "set_params") {
      const g = typeof d.node_id == "string" ? d.node_id : void 0;
      f = g ? u.get(g) ?? s.get(g) : void 0;
    } else
      continue;
    if (!Pe(d.params)) continue;
    const y = f ? r.get(f) : void 0, m = y ? new Map(y.params.map((g) => [g.name, g])) : void 0;
    for (const [g, v] of Object.entries(d.params)) {
      const b = m == null ? void 0 : m.get(g);
      (!b || b.param_type === "secret" || Oa(g)) && An(v, l);
    }
  }
}
function R0(a, r, s, l) {
  if (Array.isArray(a))
    for (const u of a) {
      if (!Pe(u)) continue;
      const d = typeof u.node_id == "string" ? u.node_id : void 0, f = typeof u.param == "string" ? u.param : void 0, y = d ? s.get(d) : void 0, m = y ? r.get(y) : void 0, g = m == null ? void 0 : m.params.find((v) => v.name === f);
      (!g || g.param_type === "secret" || f && Oa(f)) && An(u.values, l);
    }
}
function kg(a, r) {
  for (const s of a.values())
    for (const l of s.params)
      (l.param_type === "secret" || Oa(l.name)) && (An(l.default, r), An(l.options, r));
}
function ds(a, r, s) {
  const l = /* @__PURE__ */ new Set();
  if (kg(r, l), to(a.arguments, l), a.name === "apply_graph_operations")
    Gh(a.arguments.operations, r, s, l);
  else if (a.name === "run_graph_experiments") {
    if (Array.isArray(a.arguments.variants))
      for (const u of a.arguments.variants)
        Pe(u) && Gh(u.operations, r, s, l);
    a.arguments.search !== void 0 && An(a.arguments.search, l);
  } else a.name === "optimize_graph_parameters" && R0(
    a.arguments.bindings,
    r,
    s,
    l
  );
  return l;
}
function no(a, r, s) {
  var l;
  kg(r, s), to(a, s), An(a.presets, s);
  for (const u of a.nodes) {
    const d = (l = u.data) == null ? void 0 : l.params;
    if (!Pe(d)) continue;
    const f = typeof u.type == "string" ? r.get(u.type) : void 0, y = f ? new Map(f.params.map((m) => [m.name, m])) : void 0;
    for (const [m, g] of Object.entries(d)) {
      const v = y == null ? void 0 : y.get(m);
      (!v || v.param_type === "secret" || Oa(m)) && An(g, s);
    }
  }
}
function Ma(a, r) {
  if (typeof a == "string") {
    let s = a;
    for (const l of [...r].sort((u, d) => d.length - u.length))
      s = s.split(l).join(Ta);
    return s;
  }
  return Array.isArray(a) ? a.map((s) => Ma(s, r)) : Pe(a) ? Object.fromEntries(
    Object.entries(a).map(([s, l]) => [s, Ma(l, r)])
  ) : a;
}
function Zi(a) {
  return new Map(a.map((r) => [r.node_name, r]));
}
function fs(a) {
  return new Map(
    a.filter((r) => typeof r.type == "string").map((r) => [r.id, r.type])
  );
}
function U0(a, r) {
  const s = Zi(r), l = /* @__PURE__ */ new Set();
  no(a, s, l);
  const u = Fn(a);
  if (!Pe(u)) return { ...a, nodes: [], edges: [] };
  const d = Array.isArray(u.nodes) ? u.nodes : [];
  a.nodes.forEach((y, m) => {
    const g = d[m];
    !Pe(g) || !Pe(g.data) || y.data && Object.prototype.hasOwnProperty.call(y.data, "params") && (g.data.params = Ju(
      y.data.params,
      typeof y.type == "string" ? y.type : void 0,
      s
    ));
  });
  const f = Ma(u, l);
  return Pe(f) ? f : { nodes: [], edges: [] };
}
function ho(a, r, s, l = []) {
  let u = [], d = { nodes: [] };
  try {
    u = s.graph.getNodeDefinitions();
  } catch {
  }
  try {
    const g = s.graph.getGraph();
    d = { nodes: g.nodes, presets: g.presets };
  } catch {
  }
  const f = Zi(u), y = fs(d.nodes), m = ds(a, f, y);
  no(d, f, m);
  for (const g of l) {
    const v = Zi(g.definitions), b = fs(g.graph.nodes);
    for (const _ of ds(a, v, b))
      m.add(_);
    no(g.graph, v, m);
  }
  try {
    const g = JSON.parse(r);
    if (Array.isArray(g) || Pe(g))
      return JSON.stringify(Ma(Fn(g), m));
  } catch {
  }
  return Ma(r, m);
}
function Ju(a, r, s) {
  const l = Fn(a);
  if (!Pe(l)) return l;
  const u = r ? s.get(r) : void 0, d = u ? new Map(u.params.map((f) => [f.name, f])) : void 0;
  for (const f of Object.keys(l)) {
    const y = d == null ? void 0 : d.get(f);
    (!y || y.param_type === "secret") && (l[f] = Ta);
  }
  return l;
}
function qh(a, r, s) {
  const l = Fn(a);
  if (!Array.isArray(l)) return l;
  const u = /* @__PURE__ */ new Map();
  for (const d of l)
    if (Pe(d)) {
      if (d.op === "add_node") {
        const f = typeof d.node_type == "string" ? d.node_type : void 0;
        typeof d.ref == "string" && f && u.set(d.ref, f), "params" in d && (d.params = Ju(d.params, f, r));
      } else if (d.op === "set_params") {
        const f = typeof d.node_id == "string" ? d.node_id : void 0, y = f ? u.get(f) ?? s.get(f) : void 0;
        d.params = Ju(d.params, y, r);
      }
    }
  return l;
}
function L0(a, r, s) {
  const l = Fn(a);
  if (!Array.isArray(l)) return l;
  for (const u of l) {
    if (!Pe(u)) continue;
    const d = typeof u.node_id == "string" ? u.node_id : void 0, f = typeof u.param == "string" ? u.param : void 0, y = d ? s.get(d) : void 0, m = y ? r.get(y) : void 0, g = m == null ? void 0 : m.params.find((v) => v.name === f);
    (!g || g.param_type === "secret") && (u.values = Array.isArray(u.values) ? u.values.map(() => Ta) : Ta);
  }
  return l;
}
function Kg(a, r) {
  let s = [], l = [];
  try {
    s = r.graph.getNodeDefinitions();
  } catch {
  }
  try {
    l = r.graph.getGraph().nodes;
  } catch {
  }
  const u = Zi(s), d = fs(l), f = Fn(a.arguments), y = Pe(f) ? f : {};
  if (a.name === "apply_graph_operations")
    y.operations = qh(a.arguments.operations, u, d);
  else if (a.name === "run_graph_experiments") {
    const v = a.arguments.variants;
    Array.isArray(y.variants) && Array.isArray(v) && y.variants.forEach((b, _) => {
      Pe(b) && Pe(v[_]) && (b.operations = qh(
        v[_].operations,
        u,
        d
      ));
    }), a.arguments.search !== void 0 && (y.search = Ta);
  } else a.name === "optimize_graph_parameters" && (y.bindings = L0(
    a.arguments.bindings,
    u,
    d
  ));
  const m = ds(a, u, d), g = Ma(y, m);
  return {
    id: a.id,
    name: a.name,
    arguments: Pe(g) ? g : {}
  };
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
  const u = Zi(s), d = fs(l), f = /* @__PURE__ */ new Set();
  for (const y of a)
    for (const m of ds(y, u, d))
      f.add(m);
  return a.map((y) => {
    const m = Kg(y, r), g = Ma(m.arguments, f);
    return {
      ...m,
      arguments: Pe(g) ? g : {}
    };
  });
}
function Zu(a, r, s) {
  let l = [], u = { nodes: [], edges: [] };
  try {
    l = s.graph.getNodeDefinitions();
  } catch {
  }
  try {
    u = s.graph.getGraph();
  } catch {
  }
  const d = Zi(l), f = fs(u.nodes), y = /* @__PURE__ */ new Set();
  no(u, d, y);
  for (const m of r)
    for (const g of ds(m, d, f))
      y.add(g);
  return Ma(a, y);
}
const ql = 3e4;
function B0(a) {
  const r = a.param_type === "secret" || Oa(a.name), s = r ? Ta : Fn(a.default), l = s == null ? String(s) : typeof s == "object" ? JSON.stringify(s) : String(s), u = l.length > 60 ? l.slice(0, 60) + "..." : l;
  let d = "";
  if (a.param_type === "select" && a.options.length > 0)
    d = r ? `{${Ta}}` : `{${a.options.join("|")}}`;
  else if (a.param_type === "int" || a.param_type === "float") {
    const f = a.min_value !== null, y = a.max_value !== null;
    if (f || y) {
      const m = f ? String(a.min_value) : "", g = y ? String(a.max_value) : "";
      d = `{${m}..${g}}`;
    }
  }
  return `${a.name}:${a.param_type}=${u}${d}`;
}
function V0(a) {
  return a.map((r) => {
    const s = [];
    if (r.inputs.length > 0) {
      const u = r.inputs.map((d) => `${d.name}:${d.data_type}`).join(", ");
      s.push(`in[${u}]`);
    }
    if (r.outputs.length > 0) {
      const u = r.outputs.map((d) => `${d.name}:${d.data_type}`).join(", ");
      s.push(`out[${u}]`);
    }
    if (r.params.length > 0) {
      const u = r.params.map(B0).join(", ");
      s.push(`params[${u}]`);
    }
    const l = s.length > 0 ? " " + s.join(" ") : "";
    return `${r.node_name}:${l} [category: ${r.category}]`;
  }).join(`
`);
}
function Xg(a) {
  return a.map((r) => {
    const s = (r.description || "").replace(/\s+/g, " ").trim(), l = s.length > 100 ? s.slice(0, 100) + "..." : s;
    return `${r.node_name} [${r.category}]${l ? " - " + l : ""}`;
  }).join(`
`);
}
function Qg(a, r = []) {
  const s = U0(a, r), l = JSON.stringify({ nodes: s.nodes, edges: s.edges });
  if (l.length <= ql)
    return l;
  const u = [], d = [], f = {
    originalNodes: s.nodes.length,
    includedNodes: 0,
    originalEdges: s.edges.length,
    includedEdges: 0,
    originalChars: l.length,
    limit: ql
  }, y = () => JSON.stringify({ nodes: u, edges: d, _truncated: f });
  for (const g of s.nodes)
    if (u.push(g), f.includedNodes = u.length, y().length > ql) {
      u.pop(), f.includedNodes = u.length;
      break;
    }
  const m = new Set(u.map((g) => String(g.id ?? "")));
  for (const g of s.edges)
    if (!(!m.has(String(g.source ?? "")) || !m.has(String(g.target ?? ""))) && (d.push(g), f.includedEdges = d.length, y().length > ql)) {
      d.pop(), f.includedEdges = d.length;
      break;
    }
  return y();
}
function H0(a, r) {
  const s = Xg(a), l = Qg(r, a);
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
6. Report — summarize what changed in 1-2 sentences, in the user's language. After a run, report the returned metrics exactly (final loss, eval scalars, generated text), plus failures if any.

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
const G0 = "graph-copilot", q0 = "0.3.0";
function ao(a) {
  if (a.length === 0 || a.some((u) => !Number.isFinite(u)))
    return;
  let r = 0, s = 0;
  if (a.forEach((u, d) => {
    const f = d + 1, y = u - r;
    r += y / f;
    const m = u - r;
    s += y * m;
  }), !Number.isFinite(r) || !Number.isFinite(s))
    return;
  const l = a.length < 2 ? 0 : s / (a.length - 1);
  if (Number.isFinite(l))
    return { mean: r, variance: Math.max(0, l) };
}
function Wn(a) {
  var r;
  return (r = ao(a)) == null ? void 0 : r.mean;
}
function go(a) {
  if (a.length < 2) return;
  const r = ao(a);
  if (!r) return;
  const s = Math.sqrt(r.variance);
  return Number.isFinite(s) ? s : void 0;
}
function Zl(a) {
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
    return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * a)) - Zl(1 - a);
  let s = 0.9999999999998099;
  const l = a - 1;
  r.forEach((d, f) => {
    s += d / (l + f + 1);
  });
  const u = l + r.length - 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (l + 0.5) * Math.log(u) - u + Math.log(s);
}
function Ih(a, r, s) {
  const f = a + r, y = a + 1, m = a - 1;
  let g = 1, v = 1 - f * s / y;
  Math.abs(v) < 1e-300 && (v = 1e-300), v = 1 / v;
  let b = v;
  for (let _ = 1; _ <= 200; _ += 1) {
    const A = 2 * _;
    let R = _ * (r - _) * s / ((m + A) * (a + A));
    v = 1 + R * v, Math.abs(v) < 1e-300 && (v = 1e-300), g = 1 + R / g, Math.abs(g) < 1e-300 && (g = 1e-300), v = 1 / v, b *= v * g, R = -((a + _) * (f + _) * s) / ((a + A) * (y + A)), v = 1 + R * v, Math.abs(v) < 1e-300 && (v = 1e-300), g = 1 + R / g, Math.abs(g) < 1e-300 && (g = 1e-300), v = 1 / v;
    const E = v * g;
    if (b *= E, Math.abs(E - 1) <= 3e-14) break;
  }
  return b;
}
function I0(a, r, s) {
  if (a <= 0) return 0;
  if (a >= 1) return 1;
  const l = Math.exp(
    Zl(r + s) - Zl(r) - Zl(s) + r * Math.log(a) + s * Math.log1p(-a)
  );
  return a < (r + 1) / (r + s + 2) ? l * Ih(r, s, a) / r : 1 - l * Ih(s, r, 1 - a) / s;
}
function kh(a, r) {
  if (a === 0) return 0.5;
  const s = r / (r + a * a), l = 0.5 * I0(
    s,
    r / 2,
    0.5
  );
  return a > 0 ? 1 - l : l;
}
function k0(a) {
  if (!Number.isInteger(a) || a < 1) return;
  const r = 0.975;
  let s = 0, l = 1;
  for (; kh(l, a) < r && l < 1e6; ) l *= 2;
  if (!(l >= 1e6)) {
    for (let u = 0; u < 100; u += 1) {
      const d = (s + l) / 2;
      kh(d, a) < r ? s = d : l = d;
    }
    return (s + l) / 2;
  }
}
function Jg(a) {
  if (a.length < 2) return;
  const r = Wn(a), s = go(a), l = a.length - 1, u = k0(l);
  if (r === void 0 || s === void 0 || u === void 0)
    return;
  const d = u * s / Math.sqrt(a.length), f = r - d, y = r + d;
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
const gd = Jg;
function K0(a, r) {
  if (a.length < 2 || r.length < 2) return;
  const s = ao(a), l = ao(r);
  if (!s || !l) return;
  const u = a.length + r.length - 2, d = ((a.length - 1) * s.variance + (r.length - 1) * l.variance) / u;
  if (!Number.isFinite(d) || d <= 0) return;
  const f = (s.mean - l.mean) / Math.sqrt(d), y = 1 - 3 / (4 * u - 1), m = f * y;
  return Number.isFinite(m) ? m : void 0;
}
function ps(a, r, s) {
  const l = Wn(a), u = Wn(r);
  if (l === void 0 || u === void 0) return;
  const d = l - u, f = s === "maximize" ? d : -d;
  if (!Number.isFinite(d) || !Number.isFinite(f)) return;
  const y = K0(a, r);
  return {
    baselineMean: u,
    candidateMean: l,
    rawDelta: d,
    improvement: f,
    hedgesG: y,
    directionAdjustedHedgesG: y === void 0 ? void 0 : s === "maximize" ? y : -y
  };
}
const Y0 = [
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
function Il(a) {
  return a !== void 0 && Number.isFinite(a) ? String(a) : "";
}
function X0(a) {
  return /^[\t\r\n ]*[=+\-@]/.test(a) ? `'${a}` : a;
}
function Q0(a) {
  const r = X0(a);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function J0(a) {
  const r = [Y0.slice()];
  return a.runs.forEach((s) => {
    r.push([
      a.id,
      a.createdAt,
      a.hypothesis,
      a.objective.metric,
      a.objective.direction,
      s.variantId,
      s.variantLabel,
      Il(s.repetition),
      s.status,
      s.metricKey ?? "",
      Il(s.metricValue),
      Il(s.runtimeMs),
      s.seed === void 0 ? "" : typeof s.seed == "number" ? Il(s.seed) : s.seed,
      s.error ?? ""
    ]);
  }), r.map((s) => s.map(Q0).join(",")).join(`\r
`);
}
function ja(a) {
  return Object.is(a, -0) || a === 0 ? "0" : Number(a.toPrecision(6)).toString();
}
function xn(a) {
  return a.replace(/[\r\n]+/g, " ").replace(/`/g, "'").trim();
}
function Z0(a) {
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
function F0(a) {
  var y;
  const r = Z0(a), s = r.find((m) => m.id === a.baselineVariantId), l = [], u = [
    `# Research report: ${xn(a.id)}`,
    "",
    "## Study question",
    "",
    `- Hypothesis under test: ${xn(a.hypothesis)}`,
    `- Objective: ${a.objective.direction} \`${xn(a.objective.metric)}\`.`,
    `- Recorded evidence: ${a.runs.length} run(s) across ${r.length} variant(s).`,
    "",
    "## Observations",
    ""
  ];
  r.length === 0 && (u.push("- **[Observation]** No run records were available."), l.push("No run records were available for analysis.")), r.forEach((m) => {
    const g = Wn(m.usableValues), v = go(m.usableValues), b = Jg(m.usableValues), _ = [`n=${m.usableValues.length}`];
    if (g !== void 0 && _.push(`mean=${ja(g)}`), v !== void 0 && _.push(`sample SD=${ja(v)}`), b ? _.push(`95% Student-t CI=[${ja(b.lower)}, ${ja(b.upper)}]`) : _.push("95% Student-t CI=unavailable"), s && m.id !== s.id) {
      const A = ps(
        m.usableValues,
        s.usableValues,
        a.objective.direction
      );
      A && (_.push(`raw delta vs ${xn(s.label)}=${ja(A.rawDelta)}`), _.push(`direction-adjusted improvement=${ja(A.improvement)}`), A.hedgesG !== void 0 && _.push(`Hedges g=${ja(A.hedgesG)}`));
    }
    u.push(`- **[Observation] ${xn(m.label)}:** ${_.join("; ")}.`), m.usableValues.length < 2 && l.push(
      `${m.label} has fewer than two finite completed observations; variability and a confidence interval are unavailable.`
    ), m.unusableRuns > 0 && l.push(
      `${m.label} has ${m.unusableRuns} run(s) excluded because they failed, were incomplete, or had a non-finite objective value.`
    );
  }), a.baselineVariantId && !s && l.push(`Baseline variant '${a.baselineVariantId}' was not present in the run records.`);
  const d = s ? r.filter((m) => m.id !== s.id).map((m) => ({
    variant: m,
    comparison: ps(
      m.usableValues,
      s.usableValues,
      a.objective.direction
    )
  })).filter((m) => m.comparison !== void 0).sort((m, g) => g.comparison.improvement - m.comparison.improvement) : [];
  u.push(
    "",
    "## Claims and interpretation",
    "",
    "- **[Claim status]** The hypothesis remains a claim under test. These descriptive observations alone do not establish causality, robustness, or external validity."
  ), d[0] ? u.push(
    `- **[Candidate claim]** ${xn(d[0].variant.label)} had the strongest observed direction-adjusted change versus the baseline (${ja(d[0].comparison.improvement)}); confirm it with a pre-registered, independently replicated study before treating it as a conclusion.`
  ) : u.push("- **[Candidate claim]** No baseline comparison had enough finite evidence to nominate a directional result.");
  const f = [...a.warnings ?? [], ...l];
  return u.push("", "## Warnings", ""), f.length === 0 ? u.push("- None recorded.") : f.forEach((m) => u.push(`- **[Warning]** ${xn(m)}`)), u.push("", "## Paper leads", ""), (y = a.paperLeads) != null && y.length ? a.paperLeads.forEach((m) => {
    u.push(
      `- **[Paper lead] ${xn(m.title)}** — Evidence: ${xn(m.evidence)} Next study: ${xn(m.nextStep)}`
    );
  }) : u.push("- None recorded."), u.join(`
`);
}
const yd = "codefyui.graph-copilot.study", io = 1, Fu = "plugin-canonical-v1", ro = 5 * 1024 * 1024, Kh = 64, Yh = 1e5, Xh = 64 * 1024, ss = 1e4, ms = 8, W0 = 16, P0 = 5e3, e1 = 1e4, Wu = 1e3, vd = 512, t1 = 40, n1 = 256, kl = 1e3, Ie = 512, $t = 32 * 1024;
class mn extends Error {
  constructor(s, l) {
    super(l);
    ln(this, "code");
    this.name = "StudyBundleError", this.code = s;
  }
}
function W(a, r, s) {
  throw new mn(a, `${r}: ${s}`);
}
function Zg(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function Pu(a, r, s, l) {
  if (s > Kh && W("LIMIT_EXCEEDED", r, `maximum depth is ${Kh}`), l.values += 1, l.values > Yh && W("LIMIT_EXCEEDED", r, `maximum value count is ${Yh}`), a === null) return "null";
  if (typeof a == "boolean") return a ? "true" : "false";
  if (typeof a == "number")
    return Number.isFinite(a) || W("INVALID_VALUE", r, "numbers must be finite"), JSON.stringify(a);
  if (typeof a == "string")
    return a.length > Xh && W(
      "LIMIT_EXCEEDED",
      r,
      `maximum string length is ${Xh}`
    ), JSON.stringify(a);
  (typeof a != "object" || a === void 0) && W("INVALID_VALUE", r, `unsupported JSON value ${typeof a}`), l.stack.has(a) && W("INVALID_VALUE", r, "cyclic values are not allowed"), l.stack.add(a);
  try {
    if (Array.isArray(a)) {
      a.length > ss && W(
        "LIMIT_EXCEEDED",
        r,
        `maximum collection size is ${ss}`
      );
      for (let d = 0; d < a.length; d += 1)
        Object.prototype.hasOwnProperty.call(a, d) || W("INVALID_VALUE", `${r}/${d}`, "sparse arrays are not allowed");
      return `[${a.map((d, f) => Pu(
        d,
        `${r}/${f}`,
        s + 1,
        l
      )).join(",")}]`;
    }
    Zg(a) || W("INVALID_VALUE", r, "objects must be plain JSON objects");
    const u = Object.keys(a).sort();
    return u.length > ss && W(
      "LIMIT_EXCEEDED",
      r,
      `maximum collection size is ${ss}`
    ), `{${u.map((d) => (d.length > Ie && W("LIMIT_EXCEEDED", r, `object key exceeds ${Ie} characters`), `${JSON.stringify(d)}:${Pu(
      a[d],
      `${r}/${yo(d)}`,
      s + 1,
      l
    )}`)).join(",")}}`;
  } finally {
    l.stack.delete(a);
  }
}
function Fi(a) {
  return Pu(a, "$", 0, { values: 0, stack: /* @__PURE__ */ new WeakSet() });
}
function a1(a) {
  return new TextEncoder().encode(a).byteLength;
}
function bd(a) {
  const r = a1(a);
  if (r > ro)
    throw new mn(
      "BUNDLE_TOO_LARGE",
      `Study bundle is ${r} bytes; maximum is ${ro}`
    );
}
async function Fg(a) {
  var l;
  const r = (l = globalThis.crypto) == null ? void 0 : l.subtle;
  if (!r)
    throw new mn(
      "CRYPTO_UNAVAILABLE",
      "Web Crypto SHA-256 is unavailable in this environment"
    );
  const s = await r.digest("SHA-256", new TextEncoder().encode(a));
  return [...new Uint8Array(s)].map((u) => u.toString(16).padStart(2, "0")).join("");
}
function Se(a, r) {
  return Zg(a) || W("INVALID_BUNDLE", r, "expected an object"), a;
}
function Oe(a, r, s, l) {
  const u = new Set(r);
  for (const d of Object.keys(a))
    u.has(d) || W("INVALID_BUNDLE", `${l}/${yo(d)}`, "unknown property");
  for (const d of s)
    Object.prototype.hasOwnProperty.call(a, d) || W("INVALID_BUNDLE", l, `missing required property '${d}'`);
}
function Je(a, r, s = ss) {
  return Array.isArray(a) || W("INVALID_BUNDLE", r, "expected an array"), a.length > s && W("LIMIT_EXCEEDED", r, `maximum item count is ${s}`), a;
}
function Ee(a, r, s = Ie, l = !1) {
  return typeof a != "string" && W("INVALID_BUNDLE", r, "expected a string"), (!l && !a.trim() || a.length > s) && W(
    a.length > s ? "LIMIT_EXCEEDED" : "INVALID_BUNDLE",
    r,
    a.length > s ? `maximum length is ${s}` : "must not be empty"
  ), /\u0000/.test(a) && W("INVALID_BUNDLE", r, "NUL characters are not allowed"), a;
}
function mt(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && W("INVALID_BUNDLE", r, "expected a finite number"), a;
}
function hs(a, r, s, l) {
  const u = mt(a, r);
  return (!Number.isInteger(u) || u < s || u > l) && W("INVALID_BUNDLE", r, `expected an integer from ${s} to ${l}`), u;
}
function Wg(a, r) {
  return typeof a != "boolean" && W("INVALID_BUNDLE", r, "expected a boolean"), a;
}
function Pn(a, r, s) {
  return (typeof a != "string" || !r.includes(a)) && W("INVALID_BUNDLE", s, `expected one of: ${r.join(", ")}`), a;
}
function gs(a, r) {
  const s = Ee(a, r, 64);
  return (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(s) || Number.isNaN(Date.parse(s)) || new Date(s).toISOString() !== s) && W("INVALID_BUNDLE", r, "expected a canonical ISO-8601 UTC timestamp"), s;
}
function Be(a, r) {
  const s = Ee(a, r, 256);
  return (s !== s.trim() || /[\u0000-\u001f\u007f]/.test(s)) && W("INVALID_BUNDLE", r, "id must be trimmed and contain no control characters"), s;
}
function hn(a, r, s) {
  new Set(a).size !== a.length && W("INVALID_BUNDLE", r, `${s} must be unique`);
}
function ge(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function yo(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ei(a, r) {
  if (!a || typeof a != "object") return;
  if (Array.isArray(a)) {
    a.forEach((l, u) => ei(l, `${r}/${u}`));
    return;
  }
  const s = Se(a, r);
  if (ge(s, "$gcpSecretRef")) {
    Oe(s, ["$gcpSecretRef"], ["$gcpSecretRef"], r), Be(s.$gcpSecretRef, `${r}/$gcpSecretRef`);
    return;
  }
  for (const [l, u] of Object.entries(s))
    ei(u, `${r}/${yo(l)}`);
}
function Pg(a, r) {
  const s = Se(a, r);
  Oe(s, ["x", "y"], ["x", "y"], r), mt(s.x, `${r}/x`), mt(s.y, `${r}/y`);
}
function i1(a, r) {
  const s = Se(a, r);
  Oe(
    s,
    ["nodes", "edges", "presets", "segmentGroups", "name", "description"],
    ["nodes", "edges"],
    r
  );
  const l = Je(s.nodes, `${r}/nodes`, P0), u = [];
  l.forEach((m, g) => {
    const v = `${r}/nodes/${g}`, b = Se(m, v);
    Oe(b, ["id", "type", "position", "data"], ["id", "type", "position", "data"], v), u.push(Be(b.id, `${v}/id`)), Ee(b.type, `${v}/type`, Ie), Pg(b.position, `${v}/position`);
    const _ = Se(b.data, `${v}/data`);
    ei(_, `${v}/data`);
  }), hn(u, `${r}/nodes`, "node ids");
  const d = new Set(u), f = Je(s.edges, `${r}/edges`, e1), y = [];
  f.forEach((m, g) => {
    const v = `${r}/edges/${g}`, b = Se(m, v);
    Oe(
      b,
      ["id", "source", "target", "sourceHandle", "targetHandle", "type"],
      ["id", "source", "target", "sourceHandle", "targetHandle"],
      v
    ), y.push(Be(b.id, `${v}/id`));
    const _ = Be(b.source, `${v}/source`), A = Be(b.target, `${v}/target`);
    d.has(_) || W("INVALID_BUNDLE", `${v}/source`, "unknown source node"), d.has(A) || W("INVALID_BUNDLE", `${v}/target`, "unknown target node"), Ee(b.sourceHandle, `${v}/sourceHandle`, Ie, !0), Ee(b.targetHandle, `${v}/targetHandle`, Ie, !0), ge(b, "type") && Pn(b.type, ["data", "trigger"], `${v}/type`);
  }), hn(y, `${r}/edges`, "edge ids"), ge(s, "presets") && Je(s.presets, `${r}/presets`).forEach((g, v) => ei(g, `${r}/presets/${v}`)), ge(s, "segmentGroups") && ei(s.segmentGroups, `${r}/segmentGroups`), ge(s, "name") && Ee(s.name, `${r}/name`, Ie, !0), ge(s, "description") && Ee(s.description, `${r}/description`, $t, !0);
}
function Qh(a, r) {
  const s = Se(a, r);
  ei(s, r);
}
function r1(a, r) {
  const s = Se(a, r);
  switch (Pn(
    s.op,
    ["add_node", "connect", "set_params", "remove_node", "remove_edge", "clear_graph", "auto_layout"],
    `${r}/op`
  )) {
    case "add_node":
      Oe(s, ["op", "node_type", "ref", "params", "position"], ["op", "node_type"], r), Ee(s.node_type, `${r}/node_type`, Ie), ge(s, "ref") && Be(s.ref, `${r}/ref`), ge(s, "params") && Qh(s.params, `${r}/params`), ge(s, "position") && Pg(s.position, `${r}/position`);
      return;
    case "connect":
      Oe(
        s,
        ["op", "source", "source_handle", "target", "target_handle"],
        ["op", "source", "source_handle", "target", "target_handle"],
        r
      ), Be(s.source, `${r}/source`), Ee(s.source_handle, `${r}/source_handle`, Ie, !0), Be(s.target, `${r}/target`), Ee(s.target_handle, `${r}/target_handle`, Ie, !0);
      return;
    case "set_params":
      Oe(s, ["op", "node_id", "params"], ["op", "node_id", "params"], r), Be(s.node_id, `${r}/node_id`), Qh(s.params, `${r}/params`);
      return;
    case "remove_node":
      Oe(s, ["op", "node_id"], ["op", "node_id"], r), Be(s.node_id, `${r}/node_id`);
      return;
    case "remove_edge":
      Oe(
        s,
        ["op", "source", "target", "source_handle", "target_handle"],
        ["op", "source", "target"],
        r
      ), Be(s.source, `${r}/source`), Be(s.target, `${r}/target`), ge(s, "source_handle") && Ee(s.source_handle, `${r}/source_handle`, Ie, !0), ge(s, "target_handle") && Ee(s.target_handle, `${r}/target_handle`, Ie, !0);
      return;
    case "clear_graph":
    case "auto_layout":
      Oe(s, ["op"], ["op"], r);
  }
}
function s1(a, r) {
  const s = Se(a, r);
  Oe(
    s,
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    r
  ), Be(s.pluginId, `${r}/pluginId`), Ee(s.pluginVersion, `${r}/pluginVersion`, 128), hs(s.codefyuiApiVersion, `${r}/codefyuiApiVersion`, 1, 1e3);
}
function l1(a, r) {
  const s = Se(a, r);
  Oe(s, ["facts"], ["facts"], r);
  const l = Je(s.facts, `${r}/facts`, n1), u = [];
  l.forEach((d, f) => {
    const y = `${r}/facts/${f}`, m = Se(d, y);
    Oe(m, ["key", "status", "source", "collectedAt", "value"], ["key", "status", "source"], y), u.push(Ee(m.key, `${y}/key`, Ie));
    const g = Pn(
      m.status,
      ["observed", "declared", "unavailable"],
      `${y}/status`
    );
    Ee(m.source, `${y}/source`, Ie), ge(m, "collectedAt") && gs(m.collectedAt, `${y}/collectedAt`);
    const v = ge(m, "value");
    if (g === "unavailable" && v && W("INVALID_BUNDLE", `${y}/value`, "unavailable facts must not contain a value"), g !== "unavailable" && !v && W("INVALID_BUNDLE", y, `${g} facts require a value`), v) {
      ei(m.value, `${y}/value`);
      const b = /* @__PURE__ */ new Map();
      ys(m.value, `${y}/value`, b), b.size > 0 && W(
        "INVALID_BUNDLE",
        `${y}/value`,
        "SecretRefs are allowed only in the replayable study spec"
      );
    }
  }), hn(u, `${r}/facts`, "provenance fact keys");
}
function o1(a, r) {
  const s = Se(a, r);
  Oe(
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
  ), Ee(s.hypothesis, `${r}/hypothesis`, $t), i1(s.baseline, `${r}/baseline`);
  const l = Se(s.objective, `${r}/objective`);
  Oe(l, ["metric", "direction"], ["metric", "direction"], `${r}/objective`), Ee(l.metric, `${r}/objective/metric`, Ie), Pn(l.direction, ["maximize", "minimize"], `${r}/objective/direction`), hs(s.repetitions, `${r}/repetitions`, 1, 5), hs(s.concurrency, `${r}/concurrency`, 1, 2), Wg(s.applyBestRequested, `${r}/applyBestRequested`);
  const u = Je(s.variants, `${r}/variants`, ms);
  u.length === 0 && W("INVALID_BUNDLE", `${r}/variants`, "at least one variant is required");
  const d = [];
  u.forEach((f, y) => {
    const m = `${r}/variants/${y}`, g = Se(f, m);
    Oe(g, ["id", "label", "operations"], ["id", "label", "operations"], m), d.push(Be(g.id, `${m}/id`)), Ee(g.label, `${m}/label`, Ie), Je(
      g.operations,
      `${m}/operations`,
      Wu
    ).forEach((b, _) => {
      r1(b, `${m}/operations/${_}`);
    });
  }), hn(d, `${r}/variants`, "variant ids");
}
function c1(a, r) {
  const s = Se(a, r);
  Oe(s, ["phase", "code", "message"], ["phase", "code", "message"], r), Pn(s.phase, ["prepare", "validate", "execute", "metric", "cancel"], `${r}/phase`), Ee(s.code, `${r}/code`, Ie), Ee(s.message, `${r}/message`, $t);
}
function u1(a, r, s) {
  const l = Je(a, s, W0), u = Se(r.spec, "/payload/spec"), d = Je(u.variants, "/payload/spec/variants", ms), f = new Set(d.map((v, b) => Be(
    Se(v, `/payload/spec/variants/${b}`).id,
    `/payload/spec/variants/${b}/id`
  ))), y = hs(u.repetitions, "/payload/spec/repetitions", 1, 5), m = [], g = [];
  l.forEach((v, b) => {
    const _ = `${s}/${b}`, A = Se(v, _);
    Oe(
      A,
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
    const R = Be(A.runKey, `${_}/runKey`);
    m.push(R), ge(A, "runId") && Be(A.runId, `${_}/runId`), ge(A, "graphId") && Be(A.graphId, `${_}/graphId`);
    const E = Be(A.variantId, `${_}/variantId`);
    f.has(E) || W("INVALID_BUNDLE", `${_}/variantId`, "unknown variant id");
    const B = hs(A.repetition, `${_}/repetition`, 1, y);
    g.push(`${E}\0${B}`);
    const T = Pn(
      A.status,
      ["completed", "failed", "cancelled"],
      `${_}/status`
    );
    ge(A, "startedAt") && gs(A.startedAt, `${_}/startedAt`), ge(A, "completedAt") && gs(A.completedAt, `${_}/completedAt`), ge(A, "startedAt") && ge(A, "completedAt") && Date.parse(A.completedAt) < Date.parse(A.startedAt) && W("INVALID_BUNDLE", `${_}/completedAt`, "must not be before startedAt"), mt(A.durationMs, `${_}/durationMs`) < 0 && W("INVALID_BUNDLE", `${_}/durationMs`, "must be non-negative");
    const V = Je(A.metrics, `${_}/metrics`, vd), J = [];
    V.forEach((X, P) => {
      const q = `${_}/metrics/${P}`, ce = Se(X, q);
      Oe(
        ce,
        ["observedKey", "canonicalKey", "value", "source"],
        ["observedKey", "canonicalKey", "value", "source"],
        q
      ), J.push(Ee(ce.observedKey, `${q}/observedKey`, Ie)), Ee(ce.canonicalKey, `${q}/canonicalKey`, Ie), mt(ce.value, `${q}/value`), Pn(ce.source, ["output_summary", "progress", "client"], `${q}/source`);
    }), hn(J, `${_}/metrics`, "observed metric keys"), ge(A, "error") && c1(A.error, `${_}/error`), T === "completed" && ge(A, "error") && W("INVALID_BUNDLE", `${_}/error`, "completed runs must not contain an error"), T !== "completed" && !ge(A, "error") && W("INVALID_BUNDLE", _, `${T} runs require an error`);
  }), hn(m, s, "run keys"), hn(g, s, "variant/repetition slots");
}
function d1(a, r) {
  const s = Se(a, r);
  Oe(s, ["title", "evidence", "nextStep"], ["title", "evidence", "nextStep"], r), Ee(s.title, `${r}/title`, $t), Ee(s.evidence, `${r}/evidence`, $t), Ee(s.nextStep, `${r}/nextStep`, $t);
}
function f1(a, r) {
  const s = Se(a, r);
  if (Oe(
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
  ), Be(s.id, `${r}/id`), Ee(s.label, `${r}/label`, Ie), Pn(s.status, ["completed", "invalid", "failed"], `${r}/status`), ge(s, "metricKey") && Ee(s.metricKey, `${r}/metricKey`, Ie), Je(s.metricValues, `${r}/metricValues`, 5).forEach((f, y) => {
    mt(f, `${r}/metricValues/${y}`);
  }), ge(s, "mean") && mt(s.mean, `${r}/mean`), ge(s, "stddev") && mt(s.stddev, `${r}/stddev`) < 0 && W("INVALID_BUNDLE", `${r}/stddev`, "must be non-negative"), ge(s, "confidenceInterval95")) {
    const f = Se(s.confidenceInterval95, `${r}/confidenceInterval95`);
    Oe(
      f,
      ["level", "lower", "upper"],
      ["level", "lower", "upper"],
      `${r}/confidenceInterval95`
    ), f.level !== 0.95 && W("INVALID_BUNDLE", `${r}/confidenceInterval95/level`, "must be 0.95");
    const y = mt(f.lower, `${r}/confidenceInterval95/lower`), m = mt(f.upper, `${r}/confidenceInterval95/upper`);
    y > m && W("INVALID_BUNDLE", `${r}/confidenceInterval95`, "lower must not exceed upper");
  }
  if (ge(s, "baselineComparison")) {
    const f = Se(s.baselineComparison, `${r}/baselineComparison`);
    Oe(
      f,
      ["baselineId", "meanDelta", "objectiveImprovement", "hedgesG"],
      ["baselineId", "meanDelta", "objectiveImprovement"],
      `${r}/baselineComparison`
    ), Be(f.baselineId, `${r}/baselineComparison/baselineId`), mt(f.meanDelta, `${r}/baselineComparison/meanDelta`), mt(
      f.objectiveImprovement,
      `${r}/baselineComparison/objectiveImprovement`
    ), ge(f, "hedgesG") && mt(f.hedgesG, `${r}/baselineComparison/hedgesG`);
  }
  mt(s.runtimeMs, `${r}/runtimeMs`) < 0 && W("INVALID_BUNDLE", `${r}/runtimeMs`, "must be non-negative");
  const u = Je(s.observedMetrics, `${r}/observedMetrics`, vd), d = [];
  u.forEach((f, y) => {
    const m = `${r}/observedMetrics/${y}`, g = Se(f, m);
    Oe(g, ["key", "value"], ["key", "value"], m), d.push(Ee(g.key, `${m}/key`, Ie)), mt(g.value, `${m}/value`);
  }), hn(d, `${r}/observedMetrics`, "derived metric keys"), ge(s, "operationSummary") && Je(s.operationSummary, `${r}/operationSummary`, Wu).forEach((f, y) => Ee(f, `${r}/operationSummary/${y}`, $t)), Je(s.errors, `${r}/errors`, Wu).forEach((f, y) => Ee(f, `${r}/errors/${y}`, $t));
}
function so(a) {
  return a.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
}
function ey(a, r) {
  return Object.is(a, r) || a === r ? !0 : Math.abs(a - r) <= Number.EPSILON * 32 * Math.max(1, Math.abs(a), Math.abs(r));
}
function $a(a, r, s, l) {
  const u = ge(a, r);
  if (s === void 0) {
    u && W("INVALID_BUNDLE", `${l}/${r}`, "is not supported by the raw run evidence");
    return;
  }
  u || W("INVALID_BUNDLE", l, `${r} is required by the raw run evidence`);
  const d = mt(a[r], `${l}/${r}`);
  ey(d, s) || W("INVALID_BUNDLE", `${l}/${r}`, `does not match raw run evidence (expected ${s})`);
}
function p1(a, r, s) {
  const l = a.metrics.filter((d) => d.canonicalKey === r);
  if (l.length < 2) return;
  const u = l[0].value;
  l.some((d) => d.value !== u) && W(
    "INVALID_BUNDLE",
    `${s}/metrics`,
    `conflicting duplicate samples resolve to objective identity '${r}'`
  );
}
function ty(a, r, s) {
  const l = [...a.metrics];
  if (l.length === 0) return;
  const u = (v) => (p1(a, v.canonicalKey, s), { key: v.canonicalKey, value: v.value }), d = (v) => new Set(v.map((_) => _.canonicalKey)).size === 1 && v.length > 0 ? u(v[0]) : void 0, f = r.metric.trim(), y = l.find((v) => v.observedKey === f) ?? l.find((v) => v.observedKey.toLowerCase() === f.toLowerCase());
  if (y) return u(y);
  if (f && f.toLowerCase() !== "auto") {
    const v = so(f);
    return d(l.filter((b) => {
      const _ = so(b.observedKey);
      return _ === v || _.endsWith(`.${v}`);
    }));
  }
  const m = r.direction === "maximize" ? /(^|\.)(accuracy|f1|f1_score|reward|score|r2|auc|precision|recall)$/i : /(^|\.)(val_loss|loss|error|mae|mse|rmse)$/i, g = l.filter((v) => m.test(v.observedKey));
  return g.length > 0 ? d(g) : r.direction === "minimize" ? d(l.filter((v) => /(^|\.)runtime_ms$/i.test(v.observedKey))) : void 0;
}
function m1(a, r, s) {
  const l = Je(a.metricValues, `${s}/metricValues`, 5).map((u, d) => mt(u, `${s}/metricValues/${d}`));
  (l.length !== r.length || l.some((u, d) => u !== r[d])) && W("INVALID_BUNDLE", `${s}/metricValues`, "does not match completed raw run evidence");
}
function ny(a) {
  const r = /* @__PURE__ */ new Map();
  for (const s of a)
    for (const l of s.metrics) {
      const u = r.get(l.observedKey) ?? [];
      u.push(l.value), r.set(l.observedKey, u);
    }
  return [...r.entries()].sort(([s], [l]) => s.localeCompare(l)).slice(0, t1).map(([s, l]) => ({ key: s, value: Wn(l) }));
}
function h1(a, r, s) {
  const l = Je(
    a.observedMetrics,
    `${s}/observedMetrics`,
    vd
  ).map((u, d) => {
    const f = Se(u, `${s}/observedMetrics/${d}`);
    return {
      key: Ee(f.key, `${s}/observedMetrics/${d}/key`, Ie),
      value: mt(f.value, `${s}/observedMetrics/${d}/value`)
    };
  });
  (l.length !== r.length || l.some((u, d) => u.key !== r[d].key || !ey(u.value, r[d].value))) && W("INVALID_BUNDLE", `${s}/observedMetrics`, "does not match raw run evidence");
}
function g1(a, r, s, l) {
  const u = s ? gd(r) : void 0;
  if (!u) {
    ge(a, "confidenceInterval95") && W(
      "INVALID_BUNDLE",
      `${l}/confidenceInterval95`,
      "is not supported by the raw run evidence"
    );
    return;
  }
  ge(a, "confidenceInterval95") || W("INVALID_BUNDLE", l, "confidenceInterval95 is required by the raw run evidence");
  const d = Se(a.confidenceInterval95, `${l}/confidenceInterval95`);
  $a(d, "lower", u.lower, `${l}/confidenceInterval95`), $a(d, "upper", u.upper, `${l}/confidenceInterval95`);
}
function y1(a, r, s, l) {
  if (!r) {
    ge(a, "baselineComparison") && W("INVALID_BUNDLE", `${l}/baselineComparison`, "is not supported by the raw run evidence");
    return;
  }
  ge(a, "baselineComparison") || W("INVALID_BUNDLE", l, "baselineComparison is required by the raw run evidence");
  const u = Se(a.baselineComparison, `${l}/baselineComparison`);
  u.baselineId !== s && W("INVALID_BUNDLE", `${l}/baselineComparison/baselineId`, "does not match the evidence baseline"), $a(u, "meanDelta", r.rawDelta, `${l}/baselineComparison`), $a(
    u,
    "objectiveImprovement",
    r.improvement,
    `${l}/baselineComparison`
  ), $a(u, "hedgesG", r.hedgesG, `${l}/baselineComparison`);
}
function v1(a, r, s) {
  const l = r.spec, u = r.runs, f = a.variants.map((E, B) => {
    var pe;
    const T = `${s}/variants/${B}`, D = Se(E, T), V = D.id, J = D.label, X = u.filter((w) => w.variantId === V).sort((w, K) => w.repetition - K.repetition || w.runKey.localeCompare(K.runKey)), P = X.filter((w) => w.status === "completed"), q = P.map((w) => ty(w, l.objective, `/payload/runs/${u.indexOf(w)}`)).filter((w) => w !== void 0), ce = new Set(q.map((w) => w.key)), ue = q.map((w) => w.value), Y = ce.size === 1 ? (pe = q[0]) == null ? void 0 : pe.key : void 0, Q = P.length === l.repetitions && q.length === l.repetitions && ce.size === 1, re = D.status;
    re === "invalid" && X.length > 0 && W("INVALID_BUNDLE", `${T}/status`, "invalid variants must not contain execution runs");
    const fe = re === "invalid" ? "invalid" : Q ? "completed" : "failed";
    Y === void 0 ? ge(D, "metricKey") && W("INVALID_BUNDLE", `${T}/metricKey`, "is not supported by the raw run evidence") : D.metricKey !== Y && W(
      "INVALID_BUNDLE",
      `${T}/metricKey`,
      `does not match raw run identity '${Y}'`
    );
    const ee = Wn(X.map((w) => w.durationMs)) ?? 0;
    return $a(D, "runtimeMs", ee, T), h1(D, ny(X), T), {
      record: D,
      id: V,
      label: J,
      values: ue,
      ...Y === void 0 ? {} : { metricKey: Y },
      fullyObserved: Q,
      preRankingStatus: fe,
      finalStatus: fe,
      ...Q ? { mean: Wn(ue) } : {}
    };
  });
  new Set(
    f.filter((E) => E.preRankingStatus === "completed" && E.metricKey).map((E) => so(E.metricKey))
  ).size > 1 && f.forEach((E) => {
    E.preRankingStatus === "completed" && (E.finalStatus = "failed");
  }), f.forEach((E, B) => {
    const T = `${s}/variants/${B}`;
    E.record.status !== E.finalStatus && W(
      "INVALID_BUNDLE",
      `${T}/status`,
      `does not match raw run evidence (expected ${E.finalStatus})`
    );
    const D = E.preRankingStatus === "completed" && E.finalStatus === "failed";
    m1(
      E.record,
      D ? [] : E.values,
      T
    ), g1(
      E.record,
      E.values,
      E.finalStatus === "completed",
      T
    );
    const V = E.finalStatus === "completed" ? E.mean : void 0;
    $a(E.record, "mean", V, T), $a(
      E.record,
      "stddev",
      E.finalStatus === "completed" ? go(E.values) : void 0,
      T
    );
  });
  const m = ge(a, "baselineVariantId") ? a.baselineVariantId : void 0;
  if (m !== void 0) {
    const E = l.variants.filter((T) => T.operations.length === 0);
    (E.length !== 1 || E[0].id !== m) && W(
      "INVALID_BUNDLE",
      `${s}/baselineVariantId`,
      "must identify the single zero-operation baseline from the study spec"
    );
    const B = f.find((T) => T.id === m);
    f.forEach((T, D) => {
      const V = T.id !== m && B.finalStatus === "completed" && T.finalStatus === "completed" ? ps(T.values, B.values, l.objective.direction) : void 0;
      y1(
        T.record,
        V,
        m,
        `${s}/variants/${D}`
      );
    });
  }
  const g = f.filter((E) => E.finalStatus === "completed" && E.mean !== void 0).sort((E, B) => (l.objective.direction === "maximize" ? B.mean - E.mean : E.mean - B.mean) || E.id.localeCompare(B.id)), v = g[0], b = v ? Math.max(1, Math.abs(v.mean)) * Number.EPSILON * 8 : 0, A = (v ? g.filter((E) => Math.abs(E.mean - v.mean) <= b) : []).length === 1 ? v : void 0;
  A ? (a.winnerId !== A.id || a.winnerLabel !== A.label) && W(
    "INVALID_BUNDLE",
    `${s}/winnerId`,
    `does not match the raw-run winner '${A.id}'`
  ) : (ge(a, "winnerId") || ge(a, "winnerLabel")) && W("INVALID_BUNDLE", `${s}/winnerId`, "no unique winner is supported by the raw run evidence");
  const R = g.length === 0 ? "failed" : f.every((E) => E.finalStatus === "completed") ? "completed" : "partial";
  a.status !== R && W(
    "INVALID_BUNDLE",
    `${s}/status`,
    `does not match raw run evidence (expected ${R})`
  );
}
function b1(a, r, s) {
  const l = Se(a, s);
  Oe(
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
  const u = Je(l.variants, `${s}/variants`, ms), d = [], f = /* @__PURE__ */ new Map();
  u.forEach((b, _) => {
    f1(b, `${s}/variants/${_}`);
    const A = Se(b, `${s}/variants/${_}`), R = Be(A.id, `${s}/variants/${_}/id`);
    d.push(R), f.set(R, Ee(A.label, `${s}/variants/${_}/label`, Ie));
  }), hn(d, `${s}/variants`, "derived variant ids");
  const y = Se(r.spec, "/payload/spec"), m = /* @__PURE__ */ new Map(), g = Je(y.variants, "/payload/spec/variants", ms).map((b, _) => {
    const A = Se(b, `/payload/spec/variants/${_}`), R = Be(A.id, `/payload/spec/variants/${_}/id`);
    return m.set(
      R,
      Ee(A.label, `/payload/spec/variants/${_}/label`, Ie)
    ), R;
  });
  (d.length !== g.length || d.some((b) => !g.includes(b))) && W("INVALID_BUNDLE", `${s}/variants`, "must match spec variant ids exactly");
  for (const b of d)
    f.get(b) !== m.get(b) && W("INVALID_BUNDLE", `${s}/variants`, `label for variant '${b}' does not match the spec`);
  if (ge(l, "baselineVariantId")) {
    const b = Be(l.baselineVariantId, `${s}/baselineVariantId`);
    f.has(b) || W("INVALID_BUNDLE", `${s}/baselineVariantId`, "unknown baseline variant"), u.forEach((_, A) => {
      const R = Se(_, `${s}/variants/${A}`);
      if (!ge(R, "baselineComparison")) return;
      Se(
        R.baselineComparison,
        `${s}/variants/${A}/baselineComparison`
      ).baselineId !== b && W(
        "INVALID_BUNDLE",
        `${s}/variants/${A}/baselineComparison/baselineId`,
        "must match derived baselineVariantId"
      );
    });
  } else u.some((b) => ge(Se(b, s), "baselineComparison")) && W("INVALID_BUNDLE", `${s}/variants`, "baselineComparison requires baselineVariantId");
  if (ge(l, "winnerId")) {
    const b = Be(l.winnerId, `${s}/winnerId`);
    f.has(b) || W("INVALID_BUNDLE", `${s}/winnerId`, "unknown winner variant"), ge(l, "winnerLabel") && Ee(l.winnerLabel, `${s}/winnerLabel`, Ie) !== f.get(b) && W("INVALID_BUNDLE", `${s}/winnerLabel`, "does not match the winner variant label");
  } else ge(l, "winnerLabel") && W("INVALID_BUNDLE", `${s}/winnerLabel`, "winnerLabel requires winnerId");
  if (ge(l, "appliedVariantId")) {
    const b = Be(l.appliedVariantId, `${s}/appliedVariantId`);
    f.has(b) || W("INVALID_BUNDLE", `${s}/appliedVariantId`, "unknown applied variant");
  }
  ge(l, "applyConflict") && Ee(l.applyConflict, `${s}/applyConflict`, $t);
  const v = Se(l.insights, `${s}/insights`);
  Oe(v, ["summary", "warnings", "paperIdeas"], ["summary", "warnings", "paperIdeas"], `${s}/insights`), Je(v.summary, `${s}/insights/summary`, 1e3).forEach((b, _) => Ee(b, `${s}/insights/summary/${_}`, $t)), Je(v.warnings, `${s}/insights/warnings`, 1e3).forEach((b, _) => Ee(b, `${s}/insights/warnings/${_}`, $t)), Je(v.paperIdeas, `${s}/insights/paperIdeas`, 1e3).forEach((b, _) => d1(b, `${s}/insights/paperIdeas/${_}`)), v1(l, r, s);
}
function Jh(a) {
  return a.startsWith("/") && !/~(?:[^01]|$)/.test(a);
}
function ys(a, r, s) {
  if (!a || typeof a != "object") return;
  if (Array.isArray(a)) {
    a.forEach((u, d) => ys(u, `${r}/${d}`, s));
    return;
  }
  const l = Se(a, r);
  if (ge(l, "$gcpSecretRef")) {
    Oe(l, ["$gcpSecretRef"], ["$gcpSecretRef"], r);
    const u = Be(l.$gcpSecretRef, `${r}/$gcpSecretRef`), d = s.get(u) ?? [];
    d.push(r), s.set(u, d);
    return;
  }
  for (const [u, d] of Object.entries(l))
    ys(d, `${r}/${yo(u)}`, s);
}
function S1(a, r, s) {
  const l = Se(a, s);
  Oe(
    l,
    ["policy", "secretRequirements", "textRedactions"],
    ["policy", "secretRequirements", "textRedactions"],
    s
  ), l.policy !== "explicit-secret-ref-v1" && W("INVALID_BUNDLE", `${s}/policy`, "expected 'explicit-secret-ref-v1'");
  const u = Je(
    l.secretRequirements,
    `${s}/secretRequirements`,
    kl
  ), d = [], f = /* @__PURE__ */ new Map();
  u.forEach((A, R) => {
    const E = `${s}/secretRequirements/${R}`, B = Se(A, E);
    Oe(
      B,
      ["id", "locations", "reason", "requiredAtReplay", "nodeType", "parameter"],
      ["id", "locations", "reason", "requiredAtReplay"],
      E
    );
    const T = Be(B.id, `${E}/id`);
    d.push(T);
    const D = Je(B.locations, `${E}/locations`, kl).map((V, J) => {
      const X = Ee(
        V,
        `${E}/locations/${J}`,
        $t
      );
      return Jh(X) || W("INVALID_BUNDLE", `${E}/locations/${J}`, "expected a valid JSON Pointer"), X;
    });
    D.length === 0 && W("INVALID_BUNDLE", `${E}/locations`, "at least one location is required"), hn(D, `${E}/locations`, "secret locations"), f.set(T, [...D].sort()), Ee(B.reason, `${E}/reason`, $t), Wg(B.requiredAtReplay, `${E}/requiredAtReplay`), ge(B, "nodeType") && Ee(B.nodeType, `${E}/nodeType`, Ie), ge(B, "parameter") && Ee(B.parameter, `${E}/parameter`, Ie);
  }), hn(d, `${s}/secretRequirements`, "secret requirement ids"), Je(
    l.textRedactions,
    `${s}/textRedactions`,
    kl
  ).forEach((A, R) => {
    const E = `${s}/textRedactions/${R}`, B = Se(A, E);
    Oe(B, ["locations", "reason"], ["locations", "reason"], E);
    const T = Je(B.locations, `${E}/locations`, kl);
    T.length === 0 && W("INVALID_BUNDLE", `${E}/locations`, "at least one location is required"), T.forEach((D, V) => {
      const J = Ee(D, `${E}/locations/${V}`, $t);
      Jh(J) || W("INVALID_BUNDLE", `${E}/locations/${V}`, "expected a valid JSON Pointer");
    }), Ee(B.reason, `${E}/reason`, $t);
  });
  const m = /* @__PURE__ */ new Map(), g = Se(r.spec, "/payload/spec");
  ys(g.baseline, "/spec/baseline", m), Je(g.variants, "/payload/spec/variants", ms).forEach((A, R) => {
    const E = Se(A, `/payload/spec/variants/${R}`);
    ys(E.operations, `/spec/variants/${R}/operations`, m);
  });
  const b = [...m.keys()].sort(), _ = [...f.keys()].sort();
  (b.length !== _.length || b.some((A, R) => A !== _[R])) && W(
    "INVALID_BUNDLE",
    `${s}/secretRequirements`,
    `must declare exactly the SecretRefs used by the spec (used: ${b.join(", ") || "none"})`
  );
  for (const A of b) {
    const R = [...m.get(A)].sort(), E = f.get(A);
    (R.length !== E.length || R.some((B, T) => B !== E[T])) && W(
      "INVALID_BUNDLE",
      `${s}/secretRequirements`,
      `locations for SecretRef '${A}' do not match the spec`
    );
  }
}
function _1(a, r) {
  const s = Se(a, r);
  Oe(
    s,
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    r
  ), Be(s.id, `${r}/id`);
  const l = gs(s.createdAt, `${r}/createdAt`), u = gs(s.completedAt, `${r}/completedAt`);
  return Date.parse(u) < Date.parse(l) && W("INVALID_BUNDLE", `${r}/completedAt`, "must not be before createdAt"), s1(s.producer, `${r}/producer`), l1(s.provenance, `${r}/provenance`), o1(s.spec, `${r}/spec`), u1(s.runs, s, `${r}/runs`), b1(s.derived, s, `${r}/derived`), S1(s.redactionReport, s, `${r}/redactionReport`), s;
}
function E1(a, r) {
  const s = Se(a, r);
  Oe(
    s,
    ["algorithm", "canonicalization", "contentSha256"],
    ["algorithm", "canonicalization", "contentSha256"],
    r
  ), s.algorithm !== "SHA-256" && W("INVALID_BUNDLE", `${r}/algorithm`, "expected 'SHA-256'"), s.canonicalization !== Fu && W("INVALID_BUNDLE", `${r}/canonicalization`, `expected '${Fu}'`);
  const l = Ee(s.contentSha256, `${r}/contentSha256`, 64);
  return /^[a-f0-9]{64}$/.test(l) || W("INVALID_BUNDLE", `${r}/contentSha256`, "expected 64 lowercase hexadecimal characters"), s;
}
function x1(a) {
  Fi(a);
  const r = Se(a, "/");
  if (r.format !== yd)
    throw new mn(
      "UNSUPPORTED_FORMAT",
      `Unsupported study bundle format '${String(r.format ?? "")}'`
    );
  if (typeof r.formatVersion != "number" || !Number.isInteger(r.formatVersion))
    throw new mn("UNSUPPORTED_VERSION", "Study bundle formatVersion must be an integer");
  if (r.formatVersion > io)
    throw new mn(
      "FUTURE_VERSION",
      `Study bundle version ${r.formatVersion} requires a newer Graph Copilot`
    );
  if (r.formatVersion !== io)
    throw new mn(
      "UNSUPPORTED_VERSION",
      `Study bundle version ${r.formatVersion} is not supported`
    );
  Oe(r, ["format", "formatVersion", "payload", "integrity"], ["format", "formatVersion", "payload", "integrity"], "/");
  const s = _1(r.payload, "/payload"), l = E1(r.integrity, "/integrity");
  return { root: r, payload: s, integrity: l };
}
function ay(a) {
  return {
    format: yd,
    formatVersion: io,
    payload: a
  };
}
function iy(a, r = /* @__PURE__ */ new WeakSet()) {
  if (!a || typeof a != "object" || r.has(a)) return a;
  r.add(a);
  for (const s of Object.values(a)) iy(s, r);
  return Object.freeze(a);
}
function ry(a) {
  return JSON.parse(Fi(a));
}
function Uu(a, r) {
  return a === void 0 ? {} : { [r]: a };
}
function N1(a, r, s) {
  const l = a.variants.map((b) => {
    var ce;
    const _ = s.filter((ue) => ue.variantId === b.id).sort((ue, Y) => ue.repetition - Y.repetition || ue.runKey.localeCompare(Y.runKey)), A = _.filter((ue) => ue.status === "completed"), R = A.map((ue) => ty(ue, r.objective, `/payload/runs/${s.indexOf(ue)}`)).filter((ue) => ue !== void 0), E = new Set(R.map((ue) => ue.key)), B = R.map((ue) => ue.value), T = E.size === 1 ? (ce = R[0]) == null ? void 0 : ce.key : void 0, D = A.length === r.repetitions && R.length === r.repetitions && E.size === 1, V = b.status === "invalid" ? "invalid" : D ? "completed" : "failed", J = D ? gd(B) : void 0, X = D ? Wn(B) : void 0, P = D ? go(B) : void 0, q = {
      id: b.id,
      label: b.label,
      status: V,
      ...T === void 0 ? {} : { metricKey: T },
      metricValues: B,
      ...X === void 0 ? {} : { mean: X },
      ...P === void 0 ? {} : { stddev: P },
      ...J === void 0 ? {} : {
        confidenceInterval95: {
          level: 0.95,
          lower: J.lower,
          upper: J.upper
        }
      },
      runtimeMs: Wn(_.map((ue) => ue.durationMs)) ?? 0,
      observedMetrics: ny(_),
      ...b.operationSummary === void 0 ? {} : { operationSummary: [...b.operationSummary] },
      errors: [...b.errors]
    };
    return {
      id: b.id,
      label: b.label,
      values: B,
      ...T === void 0 ? {} : { metricKey: T },
      preRankingStatus: V,
      result: q
    };
  });
  if (new Set(
    l.filter((b) => b.preRankingStatus === "completed" && b.metricKey).map((b) => so(b.metricKey))
  ).size > 1 && l.forEach((b) => {
    if (b.preRankingStatus !== "completed") return;
    const {
      mean: _,
      stddev: A,
      confidenceInterval95: R,
      baselineComparison: E,
      ...B
    } = b.result;
    b.result = { ...B, status: "failed", metricValues: [] };
  }), a.baselineVariantId !== void 0) {
    const b = l.find((_) => _.id === a.baselineVariantId);
    (b == null ? void 0 : b.result.status) === "completed" && l.forEach((_) => {
      if (_.id === b.id || _.result.status !== "completed") return;
      const A = ps(_.values, b.values, r.objective.direction);
      A && (_.result = {
        ..._.result,
        baselineComparison: {
          baselineId: b.id,
          meanDelta: A.rawDelta,
          objectiveImprovement: A.improvement,
          ...A.hedgesG === void 0 ? {} : { hedgesG: A.hedgesG }
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
  const { payload: r, integrity: s } = x1(a), l = await Fg(Fi(ay(r)));
  if (l !== s.contentSha256)
    throw new mn(
      "INTEGRITY_MISMATCH",
      `Study bundle integrity mismatch: expected ${l}, received ${s.contentSha256}`
    );
  const u = ry(a);
  return bd(Fi(u)), iy(u);
}
async function A1(a) {
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
    derived: N1(a.session, r, a.runs),
    redactionReport: a.redactionReport
  }, l = ry(s), u = await Fg(Fi(ay(l)));
  return Sd({
    format: yd,
    formatVersion: io,
    payload: l,
    integrity: {
      algorithm: "SHA-256",
      canonicalization: Fu,
      contentSha256: u
    }
  });
}
async function _d(a) {
  const r = await Sd(a), s = Fi(r);
  return bd(s), s;
}
async function Ed(a) {
  if (typeof a != "string")
    throw new mn("INVALID_JSON", "Study bundle input must be text");
  bd(a);
  let r;
  try {
    r = JSON.parse(a);
  } catch (s) {
    throw new mn("INVALID_JSON", `Study bundle is not valid JSON: ${String(s)}`);
  }
  return Sd(r);
}
const j1 = "graph-copilot", w1 = "[REDACTED]", $1 = "Exact echoes of values removed by capture redaction were removed from text. Arbitrary unrelated secrets in ordinary strings cannot be detected.", T1 = "A credential-shaped field outside the replayable graph spec was removed.";
class M1 extends Error {
  constructor(s, l) {
    super(`${s}: ${l}`);
    ln(this, "path");
    this.name = "StudyCaptureError", this.path = s;
  }
}
function Me(a, r) {
  throw new M1(a, r);
}
function nr(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function Nn(a, r) {
  return nr(a) || Me(r, "expected a plain object"), a;
}
function Bt(a, r, s = !1) {
  return (typeof a != "string" || !s && a.length === 0) && Me(r, s ? "expected a string" : "expected a non-empty string"), a;
}
function Wi(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && Me(r, "expected a finite number"), a;
}
function As(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function O1(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function ti(a) {
  const r = O1(a);
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
function Pa(a, r, s = /* @__PURE__ */ new WeakSet()) {
  if (Array.isArray(a)) {
    if (s.has(a)) return;
    s.add(a), a.forEach((l) => Pa(l, r, s)), s.delete(a);
    return;
  }
  if (nr(a) && !s.has(a)) {
    s.add(a);
    for (const [l, u] of Object.entries(a))
      ti(l) ? Pi(u, r) : Pa(u, r, s);
    s.delete(a);
  }
}
function C1(a) {
  const r = /* @__PURE__ */ new Map();
  return a.forEach((s, l) => {
    const u = Bt(s == null ? void 0 : s.node_name, `definitions[${l}].node_name`);
    r.has(u) && Me(`definitions[${l}].node_name`, `duplicate node definition '${u}'`);
    const d = /* @__PURE__ */ new Set();
    Array.isArray(s.params) || Me(`definitions[${l}].params`, "expected an array"), s.params.forEach((f, y) => {
      const m = Bt(
        f == null ? void 0 : f.name,
        `definitions[${l}].params[${y}].name`
      );
      d.has(m) && Me(
        `definitions[${l}].params[${y}].name`,
        `duplicate parameter definition '${m}'`
      ), d.add(m);
    }), r.set(u, s);
  }), r;
}
function sy(a) {
  const r = /* @__PURE__ */ new Map();
  return a.forEach((s) => {
    typeof (s == null ? void 0 : s.id) == "string" && typeof s.type == "string" && r.set(s.id, s.type);
  }), r;
}
function D1(a, r, s) {
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
  if (Pa(a, l), !nr(a)) return;
  const u = r ? s.get(r) : void 0, d = ly(u);
  for (const [f, y] of Object.entries(a)) {
    const m = d == null ? void 0 : d.get(f);
    (!u || !m || m.param_type === "secret" || ti(f)) && Pi(y, l);
  }
}
function z1(a, r) {
  var f;
  const s = /* @__PURE__ */ new Set(), { baseline: l, request: u } = a;
  for (const y of r.values())
    for (const m of y.params)
      Pa(m.default, s), (m.param_type === "secret" || ti(m.name)) && Pi(m.default, s);
  Pa(l, s), Pa(u, s), Pa(a.provenanceFacts, s);
  for (const y of Array.isArray(l.nodes) ? l.nodes : [])
    Zh((f = y.data) == null ? void 0 : f.params, y.type, r, s);
  Array.isArray(l.presets) && l.presets.forEach((y) => Pi(y, s));
  const d = sy(Array.isArray(l.nodes) ? l.nodes : []);
  for (const y of Array.isArray(u.variants) ? u.variants : []) {
    const m = new Map(d), g = /* @__PURE__ */ new Map();
    for (const v of Array.isArray(y == null ? void 0 : y.operations) ? y.operations : []) {
      if (!nr(v)) continue;
      const b = D1(v, m, g);
      (v.op === "add_node" || v.op === "set_params") && Zh(v.params, b, r, s);
    }
  }
  return s;
}
function R1(a) {
  const s = [w1, "<removed>", "***", "�"].find((l) => [...a].every((u) => !l.includes(u)));
  if (s) return s;
  for (let l = 57344; l <= 63743; l += 1) {
    const u = String.fromCodePoint(l);
    if ([...a].every((d) => !u.includes(d))) return u;
  }
  return "";
}
class U1 {
  constructor() {
    ln(this, "byReason", /* @__PURE__ */ new Map());
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
class L1 {
  constructor(r, s) {
    ln(this, "ordered");
    ln(this, "replacement");
    this.redactions = s, this.ordered = [...r].sort((l, u) => u.length - l.length), this.replacement = R1(r);
  }
  text(r, s) {
    let l = r;
    for (const u of this.ordered) l = l.split(u).join(this.replacement);
    return l !== r && this.redactions.record(s, $1), l;
  }
  semantic(r, s) {
    return this.ordered.some((l) => r.includes(l)) && Me(s, "a redacted value appears in a semantic identity and cannot be safely rewritten"), r;
  }
}
function B1(a) {
  return a.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 180) || "secret";
}
function V1(a) {
  if (a === null) return "null";
  if (typeof a == "string") return `string:${a}`;
  if (typeof a == "number" && Number.isFinite(a)) return `number:${String(a)}`;
  if (typeof a == "boolean") return `boolean:${String(a)}`;
}
class H1 {
  constructor() {
    ln(this, "identities", /* @__PURE__ */ new Map());
    ln(this, "requirements", /* @__PURE__ */ new Map());
    ln(this, "usedIds", /* @__PURE__ */ new Set());
  }
  ref(r) {
    const s = V1(r.rawValue), l = this.identities.get(r.identity) ?? [];
    let u = s === void 0 ? void 0 : l.find((d) => d.signature === s);
    if (!u) {
      const d = B1(r.suggestedId);
      let f = d, y = 2;
      for (; this.usedIds.has(f); )
        f = `${d}-${y}`, y += 1;
      this.usedIds.add(f), u = { signature: s, id: f }, l.push(u), this.identities.set(r.identity, l), this.requirements.set(f, {
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
    return this.requirements.get(u.id).locations.add(r.location), { $gcpSecretRef: u.id };
  }
  report() {
    return [...this.requirements.values()].map(({ requirement: r, locations: s }) => ({
      ...r,
      locations: [...s].sort()
    }));
  }
}
function vs(a, r, s) {
  if (a === null || typeof a == "boolean") return a;
  if (typeof a == "number") return Wi(a, r);
  if (typeof a == "string") return s.scrubber.text(a, r);
  if (Array.isArray(a)) {
    s.stack.has(a) && Me(r, "cyclic values are not portable"), s.stack.add(a);
    try {
      const u = [];
      for (let d = 0; d < a.length; d += 1)
        Object.prototype.hasOwnProperty.call(a, d) || Me(`${r}/${d}`, "sparse arrays are not portable"), u.push(vs(a[d], `${r}/${d}`, s));
      return u;
    } finally {
      s.stack.delete(a);
    }
  }
  const l = Nn(a, r);
  s.stack.has(l) && Me(r, "cyclic values are not portable"), s.stack.add(l);
  try {
    Object.prototype.hasOwnProperty.call(l, "$gcpSecretRef") && Me(r, "raw host data may not contain the reserved '$gcpSecretRef' key");
    const u = /* @__PURE__ */ Object.create(null);
    for (const [d, f] of Object.entries(l)) {
      const y = `${r}/${As(d)}`;
      u[d] = ti(d) ? s.secrets.ref({
        identity: `credential:${r}:${d}`,
        suggestedId: `${d}-${r}`,
        rawValue: f,
        location: y,
        reason: `Credential-shaped key '${d}' was redacted recursively.`,
        parameter: d
      }) : vs(f, y, s);
    }
    return u;
  } finally {
    s.stack.delete(l);
  }
}
function lo(a, r, s, l, u = /* @__PURE__ */ new WeakSet()) {
  if (a === null || typeof a == "boolean") return a;
  if (typeof a == "number") return Wi(a, r);
  if (typeof a == "string") return s.text(a, r);
  if (Array.isArray(a)) {
    u.has(a) && Me(r, "cyclic values are not portable"), u.add(a);
    try {
      const f = [];
      for (let y = 0; y < a.length; y += 1)
        Object.prototype.hasOwnProperty.call(a, y) || Me(`${r}/${y}`, "sparse arrays are not portable"), f.push(lo(a[y], `${r}/${y}`, s, l, u));
      return f;
    } finally {
      u.delete(a);
    }
  }
  const d = Nn(a, r);
  u.has(d) && Me(r, "cyclic values are not portable"), u.add(d);
  try {
    Object.prototype.hasOwnProperty.call(d, "$gcpSecretRef") && Me(r, "provenance may not contain the reserved '$gcpSecretRef' key");
    const f = /* @__PURE__ */ Object.create(null);
    for (const [y, m] of Object.entries(d)) {
      const g = `${r}/${As(y)}`;
      ti(y) ? (f[y] = s.replacement, l.record(g, T1)) : f[y] = lo(m, g, s, l, u);
    }
    return f;
  } finally {
    u.delete(d);
  }
}
function ly(a) {
  return a ? new Map(a.params.map((r) => [r.name, r])) : void 0;
}
function ed(a, r, s, l, u, d, f) {
  const y = Nn(a, u), m = r ? d.get(r) : void 0, g = ly(m), v = /* @__PURE__ */ Object.create(null);
  for (const [b, _] of Object.entries(y)) {
    const A = `${u}/${As(b)}`, R = g == null ? void 0 : g.get(b);
    let E;
    m ? R ? R.param_type === "secret" ? E = `${r}.${b} is declared as a secret parameter.` : ti(b) && (E = `Credential-shaped parameter '${b}' was redacted recursively.`) : E = `Parameter '${b}' is absent from the captured '${r}' schema and was redacted fail-closed.` : E = r ? `Node type '${r}' has no captured schema; parameter '${b}' was redacted fail-closed.` : `The node type is unresolved; parameter '${b}' was redacted fail-closed.`, v[b] = E ? f.secrets.ref({
      identity: `${s}:param:${b}`,
      suggestedId: `${l}-${b}`,
      rawValue: _,
      location: A,
      reason: E,
      ...r === void 0 ? {} : { nodeType: r },
      parameter: b
    }) : vs(_, A, f);
  }
  return v;
}
function G1(a, r, s) {
  nr(a) || Me("baseline", "expected a plain serialized graph"), Array.isArray(a.nodes) || Me("baseline.nodes", "expected an array"), Array.isArray(a.edges) || Me("baseline.edges", "expected an array");
  const l = a.nodes.map((f, y) => {
    const m = `/spec/baseline/nodes/${y}`, g = Nn(f, `baseline.nodes[${y}]`), v = s.scrubber.semantic(Bt(g.id, `${m}/id`), `${m}/id`), b = s.scrubber.semantic(Bt(g.type, `${m}/type`), `${m}/type`);
    let _ = { x: 0, y: 0 };
    if (g.position !== void 0) {
      const E = Nn(g.position, `${m}/position`);
      _ = {
        x: Wi(E.x, `${m}/position/x`),
        y: Wi(E.y, `${m}/position/y`)
      };
    }
    const A = g.data === void 0 ? {} : Nn(g.data, `${m}/data`), R = /* @__PURE__ */ Object.create(null);
    for (const [E, B] of Object.entries(A)) {
      const T = `${m}/data/${As(E)}`;
      E === "params" ? R.params = ed(
        B,
        b,
        `node:${v}`,
        v,
        T,
        r,
        s
      ) : ti(E) ? R[E] = s.secrets.ref({
        identity: `node:${v}:credential:${E}`,
        suggestedId: `${v}-${E}`,
        rawValue: B,
        location: T,
        reason: `Credential-shaped key '${E}' was redacted recursively.`,
        nodeType: b,
        parameter: E
      }) : R[E] = vs(B, T, s);
    }
    return { id: v, type: b, position: _, data: R };
  }), u = a.edges.map((f, y) => {
    const m = `/spec/baseline/edges/${y}`, g = Nn(f, `baseline.edges[${y}]`), v = g.type;
    v !== void 0 && v !== "data" && v !== "trigger" && Me(`${m}/type`, "expected 'data' or 'trigger'");
    const b = v === "data" || v === "trigger" ? v : void 0;
    return {
      id: s.scrubber.semantic(Bt(g.id, `${m}/id`), `${m}/id`),
      source: s.scrubber.semantic(Bt(g.source, `${m}/source`), `${m}/source`),
      target: s.scrubber.semantic(Bt(g.target, `${m}/target`), `${m}/target`),
      sourceHandle: s.scrubber.semantic(
        Bt(g.sourceHandle, `${m}/sourceHandle`, !0),
        `${m}/sourceHandle`
      ),
      targetHandle: s.scrubber.semantic(
        Bt(g.targetHandle, `${m}/targetHandle`, !0),
        `${m}/targetHandle`
      ),
      ...b === void 0 ? {} : { type: b }
    };
  });
  return {
    nodes: l,
    edges: u,
    ...a.presets === void 0 ? {} : {
      presets: (Array.isArray(a.presets) || Me("/spec/baseline/presets", "expected an array"), a.presets.map((f, y) => s.secrets.ref({
        identity: `preset:${y}`,
        suggestedId: `preset-${y + 1}`,
        rawValue: f,
        location: `/spec/baseline/presets/${y}`,
        reason: "Preset schema is unavailable; the entire preset was redacted fail-closed."
      })))
    },
    ...a.segmentGroups === void 0 ? {} : { segmentGroups: vs(a.segmentGroups, "/spec/baseline/segmentGroups", s) },
    ...a.name === void 0 ? {} : { name: s.scrubber.text(Bt(a.name, "/spec/baseline/name", !0), "/spec/baseline/name") },
    ...a.description === void 0 ? {} : {
      description: s.scrubber.text(
        Bt(a.description, "/spec/baseline/description", !0),
        "/spec/baseline/description"
      )
    }
  };
}
function on(a, r, s, l = !1) {
  return s.semantic(Bt(a, r, l), r);
}
function q1(a, r, s, l, u, d) {
  Array.isArray(a) || Me(`request.variants[${s}].operations`, "expected an array");
  const f = new Map(l), y = /* @__PURE__ */ new Map();
  return a.map((m, g) => {
    const v = `/spec/variants/${s}/operations/${g}`, b = Nn(m, `request.variants[${s}].operations[${g}]`);
    switch (b.op) {
      case "add_node": {
        const _ = on(b.node_type, `${v}/node_type`, d.scrubber), A = b.ref === void 0 ? void 0 : on(b.ref, `${v}/ref`, d.scrubber);
        A !== void 0 && y.set(A, _);
        const R = u.get(_), E = /* @__PURE__ */ Object.create(null);
        for (const V of (R == null ? void 0 : R.params) ?? [])
          V.default !== void 0 && (E[V.name] = V.default);
        if (b.params !== void 0)
          for (const [V, J] of Object.entries(Nn(b.params, `${v}/params`)))
            E[V] = J;
        const T = Object.keys(E).length > 0 ? ed(
          E,
          _,
          A === void 0 ? `variant:${r}:operation:${g}` : `variant:${r}:ref:${A}`,
          A ?? `${r}-node-${g + 1}`,
          `${v}/params`,
          u,
          d
        ) : void 0, D = b.position === void 0 ? void 0 : (() => {
          const V = Nn(b.position, `${v}/position`);
          return {
            x: Wi(V.x, `${v}/position/x`),
            y: Wi(V.y, `${v}/position/y`)
          };
        })();
        return {
          op: "add_node",
          node_type: _,
          ...A === void 0 ? {} : { ref: A },
          ...T === void 0 ? {} : { params: T },
          ...D === void 0 ? {} : { position: D }
        };
      }
      case "set_params": {
        const _ = on(b.node_id, `${v}/node_id`, d.scrubber), A = y.get(_) ?? f.get(_), R = y.has(_) ? `variant:${r}:ref:${_}` : `node:${_}`;
        return {
          op: "set_params",
          node_id: _,
          params: ed(
            b.params,
            A,
            R,
            _,
            `${v}/params`,
            u,
            d
          )
        };
      }
      case "connect":
        return {
          op: "connect",
          source: on(b.source, `${v}/source`, d.scrubber),
          source_handle: on(
            b.source_handle,
            `${v}/source_handle`,
            d.scrubber,
            !0
          ),
          target: on(b.target, `${v}/target`, d.scrubber),
          target_handle: on(
            b.target_handle,
            `${v}/target_handle`,
            d.scrubber,
            !0
          )
        };
      case "remove_node": {
        const _ = on(b.node_id, `${v}/node_id`, d.scrubber);
        return y.delete(_), f.delete(_), { op: "remove_node", node_id: _ };
      }
      case "remove_edge":
        return {
          op: "remove_edge",
          source: on(b.source, `${v}/source`, d.scrubber),
          target: on(b.target, `${v}/target`, d.scrubber),
          ...b.source_handle === void 0 ? {} : {
            source_handle: on(
              b.source_handle,
              `${v}/source_handle`,
              d.scrubber,
              !0
            )
          },
          ...b.target_handle === void 0 ? {} : {
            target_handle: on(
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
        return Me(`${v}/op`, `unsupported graph operation '${String(b.op)}'`);
    }
  });
}
function I1(a, r) {
  var s;
  return ((s = a.id) == null ? void 0 : s.trim()) || `variant-${r + 1}`;
}
function k1(a) {
  Array.isArray(a.request.variants) || Me("request.variants", "expected an array"), Array.isArray(a.session.variants) || Me("session.variants", "expected an array"), (a.request.repetitions ?? 1) !== a.session.repetitions && Me("request.repetitions", "does not match the completed session"), (a.request.objective.metric !== a.session.objective.metric || a.request.objective.direction !== a.session.objective.direction) && Me("request.objective", "does not match the completed session"), a.request.hypothesis.trim() !== a.session.hypothesis && Me("request.hypothesis", "does not match the completed session"), a.request.variants.length !== a.session.variants.length && Me("request.variants", "does not match the completed session variant count"), a.request.variants.forEach((s, l) => {
    const u = a.session.variants[l];
    I1(s, l) !== (u == null ? void 0 : u.id) && Me(`request.variants[${l}].id`, "does not match the completed session variant id"), s.label.trim() !== u.label && Me(`request.variants[${l}].label`, "does not match the completed session variant label");
  });
}
function K1(a, r, s) {
  return {
    ...a,
    id: s.semantic(a.id, `/derived/variants/${r}/id`),
    label: s.text(a.label, `/derived/variants/${r}/label`),
    ...a.metricKey === void 0 ? {} : { metricKey: s.semantic(a.metricKey, `/derived/variants/${r}/metricKey`) },
    metricValues: [...a.metricValues],
    observedMetrics: Object.fromEntries(Object.entries(a.observedMetrics).map(([l, u]) => [
      s.semantic(l, `/derived/variants/${r}/observedMetrics/${As(l)}`),
      u
    ])),
    ...a.runs === void 0 ? {} : {
      runs: a.runs.map((l) => ({
        ...l,
        observedMetrics: { ...l.observedMetrics }
      }))
    },
    ...a.operationSummary === void 0 ? {} : {
      operationSummary: a.operationSummary.map((l, u) => s.text(l, `/derived/variants/${r}/operationSummary/${u}`))
    },
    errors: a.errors.map((l, u) => s.text(l, `/derived/variants/${r}/errors/${u}`))
  };
}
function Y1(a, r) {
  const s = a.variants.map((u, d) => K1(u, d, r)), l = new Map(s.map((u) => [u.id, u]));
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
        const u = r.text(a.winnerLabel, "/derived/winnerLabel");
        return a.winnerId && l.has(a.winnerId) ? l.get(a.winnerId).label : u;
      })()
    },
    ...a.applyConflict === void 0 ? {} : { applyConflict: r.text(a.applyConflict, "/derived/applyConflict") },
    insights: {
      summary: a.insights.summary.map((u, d) => r.text(u, `/derived/insights/summary/${d}`)),
      warnings: a.insights.warnings.map((u, d) => r.text(u, `/derived/insights/warnings/${d}`)),
      paperIdeas: a.insights.paperIdeas.map((u, d) => ({
        title: r.text(u.title, `/derived/insights/paperIdeas/${d}/title`),
        evidence: r.text(u.evidence, `/derived/insights/paperIdeas/${d}/evidence`),
        nextStep: r.text(u.nextStep, `/derived/insights/paperIdeas/${d}/nextStep`)
      }))
    }
  };
}
function X1(a, r, s) {
  if (!(a.metricKey === void 0 && a.metricValue === void 0))
    return (typeof a.metricKey != "string" || a.metricKey.length === 0 || typeof a.metricValue != "number" || !Number.isFinite(a.metricValue)) && Me("session.variants[].runs[].metric", "metricKey and finite metricValue must be provided together"), {
      // Older run records retained only the canonical identity. Calling that
      // stored identity the observed key is explicit client-side evidence, not
      // a guessed node/port identity.
      observedKey: r.semantic(a.metricKey, `${s}/observedKey`),
      canonicalKey: r.semantic(a.metricKey, `${s}/canonicalKey`),
      value: a.metricValue,
      source: a.metricSource ?? "client"
    };
}
function Q1(a, r) {
  const s = [], l = /* @__PURE__ */ new Set();
  return a.variants.forEach((u, d) => {
    var f;
    (f = u.runs) == null || f.forEach((y, m) => {
      var E, B;
      const g = `${u.id}\0${y.repetition}`;
      l.has(g) && Me(`session.variants[${d}].runs[${m}]`, "duplicate variant/repetition run slot"), l.add(g);
      const v = [], b = /* @__PURE__ */ new Set(), _ = X1(y, r, `/runs/${s.length}/metrics/0`);
      _ && (b.add(_.observedKey), v.push(_));
      for (const [T, D] of Object.entries(y.observedMetrics)) {
        if (!Number.isFinite(D)) continue;
        const V = ((E = y.observedMetricIdentities) == null ? void 0 : E[T]) ?? (T === "system.runtime_ms" ? "system.runtime_ms" : void 0), J = ((B = y.observedMetricSources) == null ? void 0 : B[T]) ?? (T === "system.runtime_ms" ? "client" : void 0);
        if (!V || !J) continue;
        const X = `/runs/${s.length}/metrics/${v.length}`, P = r.semantic(T, `${X}/observedKey`), q = r.semantic(V, `${X}/canonicalKey`);
        b.has(P) || (b.add(P), v.push({ observedKey: P, canonicalKey: q, value: D, source: J }));
      }
      const A = Number.isFinite(y.observedMetrics["system.runtime_ms"]) ? y.observedMetrics["system.runtime_ms"] : y.durationMs;
      Number.isFinite(A) && !b.has("system.runtime_ms") && v.push({
        observedKey: "system.runtime_ms",
        canonicalKey: "system.runtime_ms",
        value: A,
        source: "client"
      });
      const R = `/runs/${s.length}/error/message`;
      s.push({
        runKey: `${u.id}:rep:${y.repetition}`,
        variantId: u.id,
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
              R
            )
          }
        } : {}
      });
    });
  }), s;
}
function J1(a, r, s) {
  const l = (a.provenanceFacts ?? []).map((u, d) => {
    const f = `/provenance/facts/${d}`;
    return {
      key: r.text(Bt(u.key, `${f}/key`), `${f}/key`),
      status: u.status,
      source: r.text(Bt(u.source, `${f}/source`), `${f}/source`),
      ...u.collectedAt === void 0 ? {} : { collectedAt: u.collectedAt },
      ...u.value === void 0 ? {} : { value: lo(u.value, `${f}/value`, r, s) }
    };
  });
  return a.request.search !== void 0 && (l.some((u) => u.key === "optimizer.plan") && Me("provenanceFacts", "'optimizer.plan' is reserved for the captured experiment request"), l.push({
    key: "optimizer.plan",
    status: "observed",
    source: "graph-experiment request",
    value: lo(
      a.request.search,
      `/provenance/facts/${l.length}/value`,
      r,
      s
    )
  })), l.some((u) => u.key === "redaction.arbitrary_string_secret_detection") && Me(
    "provenanceFacts",
    "'redaction.arbitrary_string_secret_detection' is reserved for the capture limitation"
  ), l.push({
    key: "redaction.arbitrary_string_secret_detection",
    status: "unavailable",
    source: "schema-guided capture cannot detect arbitrary secrets embedded in ordinary strings"
  }), l;
}
async function Z1(a) {
  k1(a);
  const r = C1(a.definitions), s = z1(a, r), l = new U1(), u = new L1(s, l), d = new H1(), f = { secrets: d, scrubber: u, stack: /* @__PURE__ */ new WeakSet() }, y = G1(a.baseline, r, f), m = sy(a.baseline.nodes), g = Y1(a.session, u), v = a.request.variants.map((R, E) => ({
    id: g.variants[E].id,
    label: u.text(a.session.variants[E].label, `/spec/variants/${E}/label`),
    operations: q1(
      R.operations,
      g.variants[E].id,
      E,
      m,
      r,
      f
    )
  }));
  if (g.variants.forEach((R, E) => {
    R.label = v[E].label;
  }), g.winnerId !== void 0) {
    const R = g.variants.find((E) => E.id === g.winnerId);
    R && (g.winnerLabel = R.label);
  }
  const b = Q1(a.session, u), _ = J1(a, u, l), A = {
    policy: "explicit-secret-ref-v1",
    secretRequirements: d.report(),
    textRedactions: l.report()
  };
  return A1({
    session: g,
    completedAt: a.completedAt,
    producer: {
      pluginId: a.pluginId ?? j1,
      pluginVersion: a.pluginVersion,
      codefyuiApiVersion: a.codefyuiApiVersion
    },
    provenance: { facts: _ },
    baseline: y,
    variants: v,
    runs: b,
    redactionReport: A,
    concurrency: a.request.concurrency ?? 1,
    applyBestRequested: a.request.apply_best ?? !1
  });
}
const oo = "graph-copilot.study-index.v1", F1 = "graph-copilot.study.sha256.", xd = "codefyui.graph-copilot.study-index", Nd = 1, oy = 10, W1 = 512 * 1024, cy = 256, P1 = 32 * 1024, Fh = 4, uy = /^[a-f0-9]{64}$/, eS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, tS = "graph-copilot.study-index.v1.lock";
class ct extends Error {
  constructor(s, l, u) {
    super(l);
    ln(this, "code");
    ln(this, "causeValue");
    this.name = "StudyStorageError", this.code = s, this.causeValue = u;
  }
}
function dy(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function fy(a, r) {
  const s = Object.keys(a);
  return s.length === r.length && s.every((l) => r.includes(l));
}
function nS(a) {
  return typeof a == "string" && eS.test(a) && !Number.isNaN(Date.parse(a)) && new Date(a).toISOString() === a;
}
function py(a) {
  return typeof a == "string" && a.length > 0 && a.length <= cy && a === a.trim() && !/[\u0000-\u001f\u007f]/.test(a);
}
function aS(a) {
  if (!py(a))
    throw new ct(
      "INVALID_ID",
      `Study id must be a non-empty, trimmed string of at most ${cy} characters`
    );
}
function iS(a) {
  return !dy(a) || !fy(a, ["id", "digest", "createdAt", "hypothesis", "kind"]) || !py(a.id) || typeof a.digest != "string" || !uy.test(a.digest) || !nS(a.createdAt) || typeof a.hypothesis != "string" || !a.hypothesis.trim() || a.hypothesis.length > P1 || a.hypothesis.includes("\0") || a.kind !== "portable" ? null : Object.freeze({
    id: a.id,
    digest: a.digest,
    createdAt: a.createdAt,
    hypothesis: a.hypothesis,
    kind: "portable"
  });
}
function vo(a, r) {
  return r.createdAt.localeCompare(a.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function rS(a, r) {
  return a.createdAt.localeCompare(r.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function my(a) {
  return Object.freeze({
    format: xd,
    formatVersion: Nd,
    entries: Object.freeze([...a].sort(vo))
  });
}
const Wa = my([]);
function bo(a) {
  if (!a || a.length > W1) return Wa;
  let r;
  try {
    r = JSON.parse(a);
  } catch {
    return Wa;
  }
  if (!dy(r) || !fy(r, ["format", "formatVersion", "entries"]) || r.format !== xd || r.formatVersion !== Nd || !Array.isArray(r.entries)) return Wa;
  const s = r.entries.map(iS).filter((f) => f !== null), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const f of s)
    l.set(f.id, (l.get(f.id) ?? 0) + 1), u.set(f.digest, (u.get(f.digest) ?? 0) + 1);
  const d = s.filter((f) => l.get(f.id) === 1 && u.get(f.digest) === 1);
  return my(d.sort(vo).slice(0, oy));
}
function Ad(a) {
  return JSON.stringify({
    format: xd,
    formatVersion: Nd,
    entries: [...a].sort(vo)
  });
}
function Wh(a) {
  if (a === null) return Wa;
  const r = bo(a);
  if (a !== Ad(r.entries))
    throw new ct(
      "INDEX_READ_FAILED",
      "Portable study index is malformed or non-canonical; mutation was aborted without changing storage"
    );
  return r;
}
function er(a) {
  try {
    return a.storage.get(oo);
  } catch (r) {
    throw new ct("INDEX_READ_FAILED", "Could not read the portable study index", r);
  }
}
function hy(a, r) {
  try {
    return a.storage.remove(r), !0;
  } catch {
    return !1;
  }
}
const Kl = /* @__PURE__ */ new Map();
function sS() {
  if (typeof navigator > "u") return null;
  const a = navigator.locks;
  return !a || typeof a.request != "function" ? null : a;
}
function gy(a, r) {
  const s = sS();
  if (s === null)
    return Promise.reject(new ct(
      "LOCK_UNAVAILABLE",
      "Cross-tab storage mutations require browser Web Locks; this environment remains read-only"
    ));
  const l = Kl.get(a) ?? Promise.resolve();
  let u;
  const d = new Promise((f) => {
    u = f;
  });
  return Kl.set(a, d), l.catch(() => {
  }).then(() => s.request(a, { mode: "exclusive" }, r)).finally(() => {
    u(), Kl.get(a) === d && Kl.delete(a);
  });
}
function lS(a) {
  return gy(tS, a);
}
function oS(a, r, s) {
  if (er(a) !== r) return !1;
  try {
    a.storage.set(oo, s);
  } catch (l) {
    let u;
    try {
      u = a.storage.get(oo);
    } catch {
      u = void 0;
    }
    if (u === s) return !0;
    throw new ct(
      "INDEX_WRITE_FAILED",
      u === r ? "Portable study index write failed before changing the index" : "Portable study index write failed and the resulting index was left untouched to avoid overwriting a concurrent update",
      l
    );
  }
  return er(a) === s;
}
function cS(a, r) {
  try {
    const s = er(a), l = bo(s);
    return l.entries.some((u) => u.digest === r) ? !0 : s !== null && s !== Ad(l.entries);
  } catch {
    return !0;
  }
}
function Ph(a, r) {
  return cS(a, r) ? !0 : hy(a, jd(r));
}
function jd(a) {
  if (!uy.test(a))
    throw new ct("BUNDLE_TAMPERED", "Study digest is not a lowercase SHA-256 value");
  return `${F1}${a}`;
}
async function uS(a) {
  return Ed(a);
}
function dS(a) {
  try {
    return bo(a.storage.get(oo));
  } catch {
    return Wa;
  }
}
async function yy(a, r) {
  const s = await _d(r), l = await Ed(s), u = Object.freeze({
    id: l.payload.id,
    digest: l.integrity.contentSha256,
    createdAt: l.payload.createdAt,
    hypothesis: l.payload.spec.hypothesis,
    kind: "portable"
  });
  return lS(async () => {
    const d = er(a), y = Wh(d).entries.find((b) => b.id === u.id);
    if (y && y.digest !== u.digest)
      throw new ct(
        "ID_CONFLICT",
        `Study '${u.id}' already exists with different content; fork it to a new id before saving`
      );
    const m = jd(u.digest);
    let g;
    try {
      g = a.storage.get(m);
    } catch (b) {
      throw new ct("BUNDLE_READ_FAILED", `Could not inspect study blob ${u.digest}`, b);
    }
    if (g !== null && g !== s)
      throw new ct(
        "BUNDLE_KEY_CONFLICT",
        `Content-addressed study blob ${u.digest} already contains different bytes`
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
          throw _ !== void 0 && hy(a, m), new ct(
            "BUNDLE_WRITE_FAILED",
            `Could not store portable study blob ${u.digest}`,
            b
          );
      }
      if (g !== null && g !== s)
        throw new ct(
          "BUNDLE_KEY_CONFLICT",
          `Content-addressed study blob ${u.digest} changed during the write`
        );
    }
    try {
      for (let b = 0; b < Fh; b += 1) {
        const _ = er(a), A = Wh(_), R = A.entries.find((X) => X.id === u.id);
        if (R) {
          if (R.digest !== u.digest)
            throw new ct(
              "ID_CONFLICT",
              `Study '${u.id}' already exists with different content; fork it to a new id before saving`
            );
          return Object.freeze({
            status: v ? "saved" : "unchanged",
            entry: R,
            cleanupFailures: Object.freeze([])
          });
        }
        const E = [...A.entries, u], B = [...A.entries].sort(rS).slice(0, Math.max(0, E.length - oy)), T = new Set(B.map((X) => X.digest)), D = E.filter((X) => !T.has(X.digest)).sort(vo), V = Ad(D);
        if (!oS(a, _, V)) continue;
        const J = [];
        for (const X of B)
          Ph(a, X.digest) || J.push(X.digest);
        return Object.freeze({
          status: "saved",
          entry: u,
          cleanupFailures: Object.freeze(J)
        });
      }
      throw new ct(
        "INDEX_WRITE_FAILED",
        `Portable study index changed during ${Fh} consecutive commit attempts`
      );
    } catch (b) {
      throw v && Ph(a, u.digest), b;
    }
  });
}
async function eg(a, r) {
  aS(r);
  const l = bo(er(a)).entries.find((f) => f.id === r);
  if (!l)
    throw new ct("STUDY_NOT_FOUND", `Portable study '${r}' is not indexed`);
  const u = jd(l.digest);
  let d;
  try {
    d = a.storage.get(u);
  } catch (f) {
    throw new ct("BUNDLE_READ_FAILED", `Could not read portable study '${r}'`, f);
  }
  if (d === null)
    throw new ct("BUNDLE_MISSING", `Portable study '${r}' is indexed but its blob is missing`);
  try {
    const f = await Ed(d), y = await _d(f);
    if (f.payload.id !== l.id || f.integrity.contentSha256 !== l.digest || y !== d)
      throw new ct(
        "BUNDLE_TAMPERED",
        `Portable study '${r}' does not match its content-addressed index entry`
      );
    return f;
  } catch (f) {
    if (f instanceof ct) throw f;
    const y = f instanceof mn ? ` (${f.code})` : "";
    throw new ct(
      "BUNDLE_TAMPERED",
      `Portable study '${r}' failed integrity verification${y}`,
      f
    );
  }
}
function co(a) {
  if (typeof a == "number" && Number.isFinite(a)) return a;
  if (typeof a == "boolean") return a ? 1 : 0;
}
function Xi(a) {
  return a && typeof a == "object" && !Array.isArray(a) ? a : null;
}
function tg(a, r, s) {
  const l = Xi(s);
  if (!l) return;
  if ((typeof l.type == "string" ? l.type : "") === "model") {
    const y = co(l.trainable ?? l.params);
    y !== void 0 && (a.modelParams[r] = y);
    return;
  }
  const d = l.value, f = co(d);
  if (f !== void 0) {
    a.scalars[r] = f;
    return;
  }
  typeof d == "string" && d.length > 0 && (a.strings[r] = d.slice(0, 200));
}
function vy(a) {
  const r = {
    scalars: {},
    strings: {},
    modelParams: {},
    progress: null,
    texts: []
  }, s = Xi(a.output_summary);
  if (s)
    for (const [d, f] of Object.entries(s))
      tg(r, d, f);
  const l = Xi(a.progress);
  l && (r.progress = l);
  const u = Array.isArray(a.outputs) ? a.outputs : [];
  for (const d of u) {
    const f = Xi(d);
    if (!f) continue;
    const y = typeof f.output_kind == "string" ? f.output_kind : "";
    if (y === "progress") {
      const m = Xi(f.progress);
      m && (r.progress = m);
    } else if (y === "tensor_summary") {
      const m = Xi(f.tensor_summary);
      if (m)
        for (const [g, v] of Object.entries(m))
          tg(r, g, v);
    } else y === "text" && typeof f.text == "string" && f.text.length > 0 && r.texts.push(f.text);
  }
  return r;
}
const wd = "experiment-sessions-v1", td = "gcp:experiments-changed", ng = 8, uo = 16, fS = 20, pS = 600 * 1e3, mS = "graph-copilot.experiment-sessions-v1.lock";
class Fl extends Error {
  constructor(s, l) {
    super(s.message);
    ln(this, "observation");
    this.name = s.name, this.observation = l;
  }
}
function bs(a) {
  return a === void 0 ? a : JSON.parse(JSON.stringify(a));
}
function hS(a) {
  const r = String(a);
  return a instanceof ct && a.causeValue !== void 0 ? `${r}: ${String(a.causeValue)}` : r;
}
function Ss(a) {
  const r = typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${a}-${r}`;
}
function gS(a) {
  return typeof a == "number" && Number.isFinite(a) ? a : void 0;
}
function fo(a) {
  if (a.length !== 0)
    return a.reduce((r, s) => r + s, 0) / a.length;
}
function yS(a) {
  if (a.length < 2) return;
  const r = fo(a);
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
function vS(a) {
  return Object.fromEntries(a.params.map((r) => [r.name, bs(r.default)]));
}
function bS(a, r) {
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
  for (const [l, u] of Object.entries(r)) {
    const d = s.get(l);
    if (!d)
      return `Unknown parameter '${l}' for node type '${a.node_name}'`;
    const f = bS(d, u);
    if (f) return f;
  }
}
function SS(a) {
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
  const l = bs(a), u = {}, d = [], f = new Map(s.map((g) => [g.node_name, g])), y = (g) => {
    const v = u[g] ?? g;
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
          const E = ig(_, g.params);
          if (E) {
            m(v, `add_node: ${E}`);
            return;
          }
        }
        const A = Ss("candidate-node"), R = {
          id: A,
          type: g.node_type,
          position: g.position ?? {
            x: 160 + l.nodes.length % 4 * 240,
            y: 120 + Math.floor(l.nodes.length / 4) * 160
          },
          data: { params: { ...vS(_), ...g.params ?? {} } }
        };
        l.nodes.push(R), g.ref && (u[g.ref] = A), d.push({ index: v, ok: !0, node_id: A });
        return;
      }
      case "set_params": {
        const _ = y(g.node_id);
        if (!_) {
          m(v, `set_params: unknown node '${g.node_id}'`);
          return;
        }
        const A = l.nodes.find((B) => B.id === _), R = typeof A.type == "string" ? f.get(A.type) : void 0;
        if (!R) {
          m(v, `set_params: node '${g.node_id}' has no known definition`);
          return;
        }
        const E = ig(R, g.params);
        if (E) {
          m(v, `set_params: ${E}`);
          return;
        }
        A.data = {
          ...A.data ?? {},
          params: { ...((b = A.data) == null ? void 0 : b.params) ?? {}, ...bs(g.params) }
        }, d.push({ index: v, ok: !0, node_id: _ });
        return;
      }
      case "connect": {
        const _ = y(g.source), A = y(g.target);
        if (!_ || !A) {
          m(v, `connect: unknown ${_ ? "target" : "source"} node`);
          return;
        }
        const R = g.source_handle === "trigger", E = {
          id: Ss("candidate-edge"),
          source: _,
          target: A,
          sourceHandle: g.source_handle,
          targetHandle: R ? "__trigger" : g.target_handle,
          ...R ? { type: "trigger" } : {}
        };
        l.edges.push(E), d.push({ index: v, ok: !0 });
        return;
      }
      case "remove_node": {
        const _ = y(g.node_id);
        if (!_) {
          m(v, `remove_node: unknown node '${g.node_id}'`);
          return;
        }
        l.nodes = l.nodes.filter((A) => A.id !== _), l.edges = l.edges.filter((A) => A.source !== _ && A.target !== _), d.push({ index: v, ok: !0 });
        return;
      }
      case "remove_edge": {
        const _ = y(g.source), A = y(g.target);
        if (!_ || !A) {
          m(v, "remove_edge: unknown source or target node");
          return;
        }
        const R = l.edges.length;
        l.edges = l.edges.filter((E) => !(E.source === _ && E.target === A && (g.source_handle === void 0 || E.sourceHandle === g.source_handle) && (g.target_handle === void 0 || E.targetHandle === g.target_handle))), R === l.edges.length ? m(v, "remove_edge: no matching edge") : d.push({ index: v, ok: !0 });
        return;
      }
      case "clear_graph":
        l.nodes = [], l.edges = [], Object.keys(u).forEach((_) => delete u[_]), d.push({ index: v, ok: !0 });
        return;
      case "auto_layout":
        l.nodes.forEach((_, A) => {
          _.position = {
            x: 120 + A % 4 * 260,
            y: 100 + Math.floor(A / 4) * 180
          };
        }), d.push({ index: v, ok: !0 });
        return;
      default:
        m(v, `Unknown operation '${g.op ?? ""}'`);
    }
  }), { graph: l, results: d, refs: u };
}
async function _S(a, r, s) {
  try {
    const l = $d(r), u = await a.http.fetch("/api/graph/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: s,
      body: JSON.stringify({
        nodes: l.nodes,
        edges: l.edges,
        presets: l.presets ?? []
      })
    });
    if (!u.ok) return [`Validation request failed: HTTP ${u.status}`];
    const d = await u.json(), f = Array.isArray(d.errors) ? d.errors.map(String) : [];
    return d.valid !== !0 ? f.length > 0 ? f : ["Graph validation returned an invalid or malformed result"] : f.length === 0 ? [] : ["Graph validation returned valid=true together with errors", ...f];
  } catch (l) {
    if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
    return [`Validation request failed: ${String(l)}`];
  }
}
async function by(a, r) {
  const s = await a.http.fetch("/api/auth/bootstrap", { signal: r });
  if (!s.ok) throw new Error(`Execution auth bootstrap failed: HTTP ${s.status}`);
  const l = await s.json();
  if (typeof l.token != "string" || !l.token)
    throw new Error("Execution auth bootstrap returned no token");
  return l.token;
}
function Sy(a) {
  const r = window.location.protocol === "https:" ? "wss:" : "ws:", s = new URL(`${r}//${window.location.host}/ws/execution`);
  return s.searchParams.set("token", a), s.toString();
}
function po(a, r) {
  let s = a;
  const l = [.../* @__PURE__ */ new Set([r, encodeURIComponent(r)])].filter((u) => u.length > 0).sort((u, d) => d.length - u.length);
  for (const u of l) s = s.split(u).join("[REDACTED]");
  return s;
}
function ES(a, r, s, l, u, d) {
  const f = a.nodes.find((m) => m.id === r), y = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(s)) {
    const v = `${r}.${m}`, b = f != null && f.type && y === 1 ? `${f.type}.${m}` : v;
    l[v] = g, u[v] = b, d[v] = "output_summary", f != null && f.type && y === 1 && (l[b] = g, u[b] = b, d[b] = "output_summary");
  }
}
function xS(a, r, s, l, u, d) {
  if (!s || typeof s != "object") return;
  const f = a.nodes.find((m) => m.id === r), y = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(s)) {
    const v = gS(g);
    if (v === void 0) continue;
    const b = `${r}.progress.${m}`, _ = f != null && f.type && y === 1 ? `${f.type}.progress.${m}` : b;
    l[b] = v, u[b] = _, d[b] = "progress", f != null && f.type && y === 1 && (l[_] = v, u[_] = _, d[_] = "progress");
  }
}
function NS(a, r, s, l = pS) {
  const u = $d(a), d = Date.now();
  return new Promise((f, y) => {
    const m = new WebSocket(Sy(r)), g = {}, v = {}, b = {};
    let _ = !1;
    const A = (B) => {
      if (_) return;
      _ = !0, clearTimeout(E), s == null || s.removeEventListener("abort", R), (m.readyState === WebSocket.OPEN || m.readyState === WebSocket.CONNECTING) && m.close();
      const T = Date.now() - d;
      g["system.runtime_ms"] = T, v["system.runtime_ms"] = "system.runtime_ms", b["system.runtime_ms"] = "client";
      const D = { metrics: g, metricIdentities: v, metricSources: b, durationMs: T };
      B ? B instanceof DOMException && B.name === "AbortError" ? y(B) : y(new Fl(B, D)) : f(D);
    }, R = () => A(new DOMException("Experiment cancelled", "AbortError")), E = setTimeout(
      () => A(new Error(`Experiment run timed out after ${Math.round(l / 1e3)}s`)),
      l
    );
    if (s == null || s.addEventListener("abort", R, { once: !0 }), s != null && s.aborted) {
      R();
      return;
    }
    m.onopen = () => {
      m.send(JSON.stringify({
        action: "execute",
        nodes: u.nodes,
        edges: u.edges,
        presets: u.presets ?? [],
        run_id: Ss("gcp-experiment-run"),
        // Scalar summaries arrive on node_status regardless. Avoid retaining
        // full tensors for every candidate in CodefyUI's in-memory run store.
        record_outputs: !1,
        graph_id: Ss("gcp-experiment-graph"),
        weights_persistent: !1
      }));
    }, m.onmessage = (B) => {
      let T;
      try {
        T = JSON.parse(String(B.data));
      } catch {
        return;
      }
      const D = String(T.type ?? "");
      if (D === "node_status") {
        const V = String(T.node_id ?? ""), J = vy(T);
        ES(u, V, J.scalars, g, v, b), J.progress && xS(u, V, J.progress, g, v, b);
      } else D === "execution_complete" ? A() : (D === "execution_error" || D === "execution_stopped" || D === "error") && A(new Error(String(T.error ?? D)));
    }, m.onerror = () => A(new Error("Experiment execution WebSocket failed")), m.onclose = () => {
      _ || A(new Error("Experiment execution WebSocket closed before completion"));
    };
  }).catch((f) => {
    if (f instanceof DOMException && f.name === "AbortError") throw f;
    if (f instanceof Fl) {
      const m = new Error(po(f.message, r));
      throw m.name = f.name, new Fl(m, f.observation);
    }
    const y = f instanceof Error ? f.message : String(f);
    throw new Error(po(y, r));
  });
}
function nd(a) {
  return a.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
}
function sg(a, r, s = {}) {
  const l = Object.entries(a).filter(([, v]) => Number.isFinite(v));
  if (l.length === 0) return;
  const u = (v) => ({
    key: s[v[0]] ?? v[0],
    value: v[1],
    observedKey: v[0]
  }), d = (v) => new Set(v.map(([_]) => s[_] ?? _)).size === 1 && v.length > 0 ? u(v[0]) : void 0, f = r.metric.trim(), y = l.find(([v]) => v === f) ?? l.find(([v]) => v.toLowerCase() === f.toLowerCase());
  if (y) return u(y);
  if (f && f.toLowerCase() !== "auto") {
    const v = nd(f), b = l.filter(([_]) => {
      const A = nd(_);
      return A === v || A.endsWith(`.${v}`);
    });
    return d(b);
  }
  const m = r.direction === "maximize" ? /(^|\.)(accuracy|f1|f1_score|reward|score|r2|auc|precision|recall)$/i : /(^|\.)(val_loss|loss|error|mae|mse|rmse)$/i, g = l.filter(([v]) => m.test(v));
  return g.length > 0 ? d(g) : r.direction === "minimize" ? d(l.filter(([v]) => /(^|\.)runtime_ms$/i.test(v))) : void 0;
}
async function lg(a, r, s) {
  const l = new Array(a.length);
  let u = 0;
  const d = Array.from({ length: Math.min(r, a.length) }, async () => {
    for (; u < a.length; ) {
      const f = u++;
      l[f] = await s(a[f], f);
    }
  });
  return await Promise.all(d), l;
}
function AS(a) {
  const r = /* @__PURE__ */ new Map();
  for (const s of a)
    for (const [l, u] of Object.entries(s.metrics))
      r.has(l) || r.set(l, []), r.get(l).push(u);
  return Object.fromEntries(
    [...r.entries()].sort(([s], [l]) => s.localeCompare(l)).slice(0, 40).map(([s, l]) => [s, fo(l)])
  );
}
function jS(a) {
  const r = a.variants.filter((u) => u.operations.length === 0).length, s = a.variants.filter((u) => u.operations.length > 0);
  if (r !== 1 || s.length === 0) return;
  let l;
  for (const u of s) {
    if (u.operations.length !== 1) return;
    const d = u.operations[0];
    if (d.op !== "set_params") return;
    const f = Object.keys(d.params);
    if (f.length !== 1) return;
    const y = `${d.node_id}.${f[0]}`;
    if (l && l !== y) return;
    l = y;
  }
  return l;
}
function wS(a, r, s, l = []) {
  const u = [], d = [], f = [], y = jS(a);
  if (l.length > 1)
    u.push(
      `No unique winner: ${l.map((v) => v.label).join(", ")} tied at ${l[0].mean.toPrecision(6)}.`
    ), d.push("Automatic promotion was skipped because the top observed means were tied.");
  else if ((s == null ? void 0 : s.mean) !== void 0) {
    if (u.push(
      `${s.label} has the top observed mean at ${s.mean.toPrecision(6)} (${a.objective.direction} ${s.metricKey ?? a.objective.metric}).`
    ), s.confidenceInterval95 && u.push(
      `Its descriptive 95% Student-t interval is [${s.confidenceInterval95.lower.toPrecision(5)}, ${s.confidenceInterval95.upper.toPrecision(5)}].`
    ), s.baselineComparison) {
      const b = s.baselineComparison.hedgesG === void 0 ? "" : `; Hedges g=${s.baselineComparison.hedgesG.toPrecision(4)}`;
      u.push(
        `Versus baseline, the direction-adjusted mean change is ${s.baselineComparison.objectiveImprovement.toPrecision(5)}${b}.`
      );
    }
    const v = r.filter((b) => b.mean !== void 0).sort((b, _) => a.objective.direction === "maximize" ? _.mean - b.mean : b.mean - _.mean);
    if (v.length > 1) {
      const b = Math.abs(v[0].mean - v[1].mean);
      u.push(`The lead over the runner-up is ${b.toPrecision(4)}.`);
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
  })), { summary: u, warnings: d, paperIdeas: f };
}
function $S(a) {
  const { applyResult: r, appliedOperations: s, ...l } = a;
  return l;
}
function _y(a) {
  if (!a || typeof a != "object") return;
  const r = a;
  if (typeof r.id != "string" || typeof r.createdAt != "string" || typeof r.hypothesis != "string" || !r.objective || typeof r.objective.metric != "string" || !["maximize", "minimize"].includes(r.objective.direction) || typeof r.repetitions != "number" || !Number.isInteger(r.repetitions) || !Array.isArray(r.variants))
    return;
  const s = r.variants.filter((u) => !!u && typeof u == "object" && typeof u.id == "string" && typeof u.label == "string" && ["completed", "invalid", "failed"].includes(u.status) && Array.isArray(u.metricValues) && u.metricValues.every((d) => typeof d == "number" && Number.isFinite(d)) && (u.metricKey === void 0 || typeof u.metricKey == "string") && (u.mean === void 0 || typeof u.mean == "number" && Number.isFinite(u.mean)) && (u.stddev === void 0 || typeof u.stddev == "number" && Number.isFinite(u.stddev)) && (u.confidenceInterval95 === void 0 || u.confidenceInterval95.level === 0.95 && typeof u.confidenceInterval95.lower == "number" && Number.isFinite(u.confidenceInterval95.lower) && typeof u.confidenceInterval95.upper == "number" && Number.isFinite(u.confidenceInterval95.upper)) && (u.baselineComparison === void 0 || typeof u.baselineComparison.baselineId == "string" && typeof u.baselineComparison.meanDelta == "number" && Number.isFinite(u.baselineComparison.meanDelta) && typeof u.baselineComparison.objectiveImprovement == "number" && Number.isFinite(u.baselineComparison.objectiveImprovement) && (u.baselineComparison.hedgesG === void 0 || typeof u.baselineComparison.hedgesG == "number" && Number.isFinite(u.baselineComparison.hedgesG))) && typeof u.runtimeMs == "number" && Number.isFinite(u.runtimeMs) && !!u.observedMetrics && typeof u.observedMetrics == "object" && Array.isArray(u.errors) && u.errors.every((d) => typeof d == "string") && (u.runs === void 0 || Array.isArray(u.runs) && u.runs.every((d) => !!d && typeof d == "object" && Number.isInteger(d.repetition) && d.repetition >= 1 && ["completed", "failed"].includes(d.status) && typeof d.durationMs == "number" && Number.isFinite(d.durationMs) && (d.metricKey === void 0 || typeof d.metricKey == "string") && (d.metricValue === void 0 || typeof d.metricValue == "number" && Number.isFinite(d.metricValue)) && (d.metricSource === void 0 || ["output_summary", "progress", "client"].includes(d.metricSource)) && !!d.observedMetrics && typeof d.observedMetrics == "object" && Object.values(d.observedMetrics).every((f) => typeof f == "number" && Number.isFinite(f)) && (d.observedMetricIdentities === void 0 || !!d.observedMetricIdentities && typeof d.observedMetricIdentities == "object" && Object.values(d.observedMetricIdentities).every((f) => typeof f == "string") && Object.keys(d.observedMetricIdentities).every((f) => f in d.observedMetrics)) && (d.observedMetricSources === void 0 || !!d.observedMetricSources && typeof d.observedMetricSources == "object" && Object.values(d.observedMetricSources).every((f) => ["output_summary", "progress", "client"].includes(f)) && Object.keys(d.observedMetricSources).every((f) => f in d.observedMetrics)) && (d.error === void 0 || typeof d.error == "string"))) && (u.operationSummary === void 0 || Array.isArray(u.operationSummary) && u.operationSummary.every((d) => typeof d == "string"))), l = r.insights && typeof r.insights == "object" ? r.insights : { summary: [], warnings: [], paperIdeas: [] };
  return {
    ...r,
    status: ["completed", "partial", "failed"].includes(r.status ?? "") ? r.status : "failed",
    repetitions: r.repetitions,
    objective: r.objective,
    variants: s,
    baselineVariantId: typeof r.baselineVariantId == "string" ? r.baselineVariantId : void 0,
    search: Td(r.search) ? r.search : void 0,
    insights: {
      summary: Array.isArray(l.summary) ? l.summary.filter((u) => typeof u == "string") : [],
      warnings: Array.isArray(l.warnings) ? l.warnings.filter((u) => typeof u == "string") : [],
      paperIdeas: Array.isArray(l.paperIdeas) ? l.paperIdeas.filter((u) => !!u && typeof u == "object" && typeof u.title == "string" && typeof u.evidence == "string" && typeof u.nextStep == "string") : []
    }
  };
}
function Ey(a) {
  try {
    const r = a.storage.get(wd);
    if (!r) return [];
    const s = JSON.parse(r);
    return Array.isArray(s) ? s.map(_y).filter((l) => !!l) : [];
  } catch {
    return [];
  }
}
function TS(a) {
  let r;
  try {
    r = a.storage.get(wd);
  } catch (u) {
    throw new Error(`Could not read the Experiment Lab archive before mutation: ${String(u)}`);
  }
  if (r === null) return [];
  let s;
  try {
    s = JSON.parse(r);
  } catch (u) {
    throw new Error(`Experiment Lab archive is malformed and remains read-only: ${String(u)}`);
  }
  if (!Array.isArray(s))
    throw new Error("Experiment Lab archive is malformed and remains read-only: expected an array");
  const l = s.map((u, d) => {
    const f = _y(u);
    if (!f)
      throw new Error(`Experiment Lab archive entry ${d} is invalid and cannot be safely rewritten`);
    return f;
  });
  if (new Set(l.map((u) => u.id)).size !== l.length)
    throw new Error("Experiment Lab archive contains duplicate study ids and cannot be safely rewritten");
  if (r !== JSON.stringify(l))
    throw new Error("Experiment Lab archive is non-canonical or contains lossy legacy data and remains read-only");
  return l;
}
async function xy(a, r, s = {}) {
  await gy(mS, async () => {
    const l = TS(a);
    if (s.rejectIfExists && l.some((d) => d.id === r.id))
      throw new Error(
        `A local Experiment Lab report already uses study id '${r.id}'; import was refused to avoid overwriting local evidence.`
      );
    const u = [$S(r), ...l.filter((d) => d.id !== r.id)].slice(0, fS);
    a.storage.set(wd, JSON.stringify(u));
  }), typeof window < "u" && window.dispatchEvent(new Event(td));
}
function og(a, r, s, l, u) {
  const d = ho(
    {
      id: `experiment-session:${s.id}`,
      name: "run_graph_experiments",
      arguments: r
    },
    JSON.stringify(s),
    a,
    [{ graph: l, definitions: u }]
  );
  return JSON.parse(d);
}
function MS(a) {
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
function Yl(a, r) {
  const s = new Set(r);
  return Object.keys(a).every((l) => s.has(l));
}
function Lu(a) {
  return typeof a == "boolean" || typeof a == "string" || typeof a == "number" && Number.isFinite(a);
}
function Td(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = a;
  if (!Yl(r, [
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
  for (const u of [
    "totalDomainAssignments",
    "generatedCandidateCount",
    "totalVariantCount",
    "totalExecutionCount"
  ])
    if (!Number.isInteger(r[u]) || r[u] < 0) return !1;
  if (r.strategy === "seeded_random") {
    if (r.prngVersion !== "mulberry32-v1" || !Number.isInteger(r.plannerSeed) || r.plannerSeed < 0 || r.plannerSeed > 4294967295) return !1;
  } else if (r.prngVersion !== void 0 || r.plannerSeed !== void 0)
    return !1;
  if (!Array.isArray(r.bindings) || r.bindings.length < 1 || r.bindings.length > 4)
    return !1;
  const s = [];
  for (const u of r.bindings) {
    if (!u || typeof u != "object" || Array.isArray(u)) return !1;
    const d = u;
    if (!Yl(d, [
      "nodeId",
      "nodeType",
      "param",
      "paramType",
      "baselineValue",
      "domain"
    ]) || typeof d.nodeId != "string" || typeof d.nodeType != "string" || typeof d.param != "string" || !["int", "float", "bool", "select"].includes(String(d.paramType)) || !Lu(d.baselineValue) || !Array.isArray(d.domain) || d.domain.length < 1 || d.domain.length > 32 || !d.domain.every(Lu)) return !1;
    s.push(`${d.nodeId}\0${d.param}`);
  }
  if (new Set(s).size !== s.length || !Array.isArray(r.assignments) || r.assignments.length > 8) return !1;
  const l = [];
  for (const u of r.assignments) {
    if (!u || typeof u != "object" || Array.isArray(u)) return !1;
    const d = u;
    if (!Yl(d, ["variantId", "domainIndex", "values"]) || typeof d.variantId != "string" || !Number.isInteger(d.domainIndex) || d.domainIndex < 0 || !Array.isArray(d.values) || d.values.length !== r.bindings.length) return !1;
    l.push(d.variantId);
    for (const f of d.values) {
      if (!f || typeof f != "object" || Array.isArray(f)) return !1;
      const y = f;
      if (!Yl(y, ["nodeId", "param", "value"]) || typeof y.nodeId != "string" || typeof y.param != "string" || !Lu(y.value)) return !1;
    }
  }
  return new Set(l).size === l.length && r.generatedCandidateCount === r.assignments.length;
}
function Ny(a) {
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
  if (a.variants.length * r > uo)
    throw new Error(`Experiment budget is capped at ${uo} total runs`);
  const s = a.concurrency ?? 1;
  if (!Number.isInteger(s) || s < 1 || s > 2)
    throw new Error("Experiment concurrency must be an integer from 1 to 2");
  if (a.apply_best !== void 0 && typeof a.apply_best != "boolean")
    throw new Error("Experiment apply_best must be a boolean");
  if (a.search !== void 0 && !Td(a.search))
    throw new Error("Experiment search metadata is malformed");
  const l = a.variants.map((u, d) => {
    var f;
    if (!u || typeof u != "object") throw new Error("Every experiment variant must be an object");
    if (u.id !== void 0 && typeof u.id != "string")
      throw new Error("Experiment variant ids must be strings");
    return ((f = u.id) == null ? void 0 : f.trim()) || `variant-${d + 1}`;
  });
  if (new Set(l).size !== l.length) throw new Error("Experiment variant ids must be unique");
  for (const u of a.variants) {
    if (typeof u.label != "string" || !u.label.trim())
      throw new Error("Every experiment variant requires a label");
    if (!Array.isArray(u.operations)) throw new Error("Every experiment variant requires an operations array");
    u.operations.forEach((d, f) => {
      const y = MS(d);
      if (y) throw new Error(`Invalid operation ${f} in variant '${u.label}': ${y}`);
    });
  }
  if (a.search && (a.search.totalVariantCount !== a.variants.length || a.search.totalExecutionCount !== a.variants.length * r || a.search.assignments.some((u) => !l.includes(u.variantId))))
    throw new Error("Experiment search metadata does not match the compiled variants or run count");
  return { repetitions: r, concurrency: s };
}
function OS(a) {
  const { repetitions: r } = Ny(a);
  return a.variants.length * r;
}
async function CS(a, r, s, l = () => !1, u = () => {
}) {
  const { repetitions: d, concurrency: f } = Ny(r), y = (/* @__PURE__ */ new Date()).toISOString(), m = bs(a.graph.getGraph()), g = ag(m), v = a.graph.getNodeDefinitions(), b = r.variants.map((Y, Q) => {
    var ee;
    const re = {
      id: ((ee = Y.id) == null ? void 0 : ee.trim()) || `variant-${Q + 1}`,
      label: Y.label.trim(),
      operations: Y.operations
    }, fe = rg(m, re.operations, v);
    return {
      input: re,
      graph: fe.graph,
      preparationErrors: fe.results.filter((pe) => !pe.ok).map((pe) => pe.error ?? "operation failed"),
      validationErrors: []
    };
  });
  await lg(b, 2, async (Y) => {
    Y.preparationErrors.length === 0 && (Y.validationErrors = await _S(a, Y.graph, s));
  });
  const _ = b.filter((Y) => Y.preparationErrors.length === 0 && Y.validationErrors.length === 0);
  let A = "";
  _.length > 0 && (A = await by(a, s));
  const R = [];
  for (let Y = 0; Y < d; Y += 1) {
    const Q = Y % 2 === 0 ? _ : [..._].reverse(), re = await lg(Q, f, async (fe) => {
      try {
        return {
          variantId: fe.input.id,
          repetition: Y + 1,
          observation: await NS(fe.graph, A, s)
        };
      } catch (ee) {
        if (ee instanceof DOMException && ee.name === "AbortError") throw ee;
        return ee instanceof Fl ? {
          variantId: fe.input.id,
          repetition: Y + 1,
          observation: {
            ...ee.observation,
            error: String(ee)
          }
        } : {
          variantId: fe.input.id,
          repetition: Y + 1,
          observation: {
            metrics: {},
            metricIdentities: {},
            metricSources: {},
            durationMs: 0,
            error: String(ee)
          }
        };
      }
    });
    R.push(...re);
  }
  const E = b.map((Y) => {
    var te;
    const Q = R.filter((Z) => Z.variantId === Y.input.id), re = Q.map((Z) => Z.observation).filter((Z) => !Z.error), fe = re.map((Z) => sg(Z.metrics, r.objective, Z.metricIdentities)).filter((Z) => !!Z), ee = [
      ...Y.preparationErrors,
      ...Y.validationErrors,
      ...Q.flatMap((Z) => Z.observation.error ? [Z.observation.error] : [])
    ], pe = new Set(fe.map((Z) => Z.key)), w = re.length === d && fe.length === d && pe.size === 1;
    Y.preparationErrors.length === 0 && Y.validationErrors.length === 0 && re.length !== d && ee.push(`Only ${re.length}/${d} repetitions completed successfully.`), re.length > 0 && fe.length !== re.length && ee.push(
      `Objective metric "${r.objective.metric}" was missing in ${re.length - fe.length}/${re.length} successful repetitions.`
    ), pe.size > 1 && ee.push(`Objective metric resolved to inconsistent keys across repetitions: ${[...pe].join(", ")}.`);
    const K = fe.map((Z) => Z.value), M = w ? gd(K) : void 0;
    return {
      id: Y.input.id,
      label: Y.input.label,
      status: Y.preparationErrors.length > 0 || Y.validationErrors.length > 0 ? "invalid" : w ? "completed" : "failed",
      metricKey: pe.size === 1 ? (te = fe[0]) == null ? void 0 : te.key : void 0,
      metricValues: K,
      mean: w ? fo(K) : void 0,
      stddev: w ? yS(K) : void 0,
      confidenceInterval95: M ? {
        level: 0.95,
        lower: M.lower,
        upper: M.upper
      } : void 0,
      runtimeMs: fo(Q.map((Z) => Z.observation.durationMs)) ?? 0,
      observedMetrics: AS(Q.map((Z) => Z.observation)),
      runs: Q.map(({ repetition: Z, observation: x }) => {
        const L = sg(
          x.metrics,
          r.objective,
          x.metricIdentities
        );
        return {
          repetition: Z,
          status: x.error ? "failed" : "completed",
          durationMs: x.durationMs,
          metricKey: L == null ? void 0 : L.key,
          metricValue: L == null ? void 0 : L.value,
          metricSource: L ? x.metricSources[L.observedKey] : void 0,
          observedMetrics: x.metrics,
          observedMetricIdentities: x.metricIdentities,
          observedMetricSources: x.metricSources,
          ...x.error ? { error: x.error } : {}
        };
      }),
      operationSummary: SS(Y.input.operations),
      errors: ee
    };
  }), B = b.filter((Y) => Y.input.operations.length === 0);
  if (B.length === 1) {
    const Y = E.find((Q) => Q.id === B[0].input.id);
    if ((Y == null ? void 0 : Y.status) === "completed")
      for (const Q of E) {
        if (Q.id === Y.id || Q.status !== "completed") continue;
        const re = ps(
          Q.metricValues,
          Y.metricValues,
          r.objective.direction
        );
        re && (Q.baselineComparison = {
          baselineId: Y.id,
          meanDelta: re.rawDelta,
          objectiveImprovement: re.improvement,
          hedgesG: re.hedgesG
        });
      }
  }
  if (new Set(
    E.filter((Y) => Y.status === "completed" && Y.metricKey).map((Y) => nd(Y.metricKey))
  ).size > 1) {
    const Y = E.filter((Q) => Q.status === "completed" && Q.metricKey).map((Q) => `${Q.label}: ${Q.metricKey}`).join(", ");
    for (const Q of E)
      Q.status === "completed" && (Q.status = "failed", Q.metricValues = [], Q.mean = void 0, Q.stddev = void 0, Q.confidenceInterval95 = void 0, Q.baselineComparison = void 0, Q.errors.push(`Candidates resolved different objective metrics (${Y}); cross-candidate ranking was refused.`));
  }
  const D = E.filter((Y) => Y.status === "completed" && Y.mean !== void 0).sort((Y, Q) => (r.objective.direction === "maximize" ? Q.mean - Y.mean : Y.mean - Q.mean) || Y.id.localeCompare(Q.id)), V = D[0], J = V ? Math.max(1, Math.abs(V.mean)) * Number.EPSILON * 8 : 0, X = V ? D.filter((Y) => Math.abs(Y.mean - V.mean) <= J) : [], P = X.length === 1 ? V : void 0, q = {
    id: Ss("experiment"),
    createdAt: y,
    hypothesis: r.hypothesis.trim(),
    objective: r.objective,
    repetitions: d,
    status: D.length === 0 ? "failed" : E.every((Y) => Y.status === "completed") ? "completed" : "partial",
    variants: E,
    baselineVariantId: B.length === 1 ? B[0].input.id : void 0,
    search: r.search ? bs(r.search) : void 0,
    winnerId: P == null ? void 0 : P.id,
    winnerLabel: P == null ? void 0 : P.label,
    insights: wS({ ...r, repetitions: d }, E, P, X)
  };
  if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  if (r.apply_best && P) {
    const Y = b.find((fe) => fe.input.id === P.id).input, Q = l(), re = ag(a.graph.getGraph()) !== g;
    if (u(), Q || re)
      q.applyConflict = "The live graph changed while experiments were running; winner was not applied.";
    else if (Y.operations.some((fe) => fe.op !== "set_params"))
      q.applyConflict = "Automatic promotion supports parameter-only winners; this structural winner remains a proposal for review.";
    else if (Y.operations.length > 0) {
      if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
      const fe = rg(m, Y.operations, v);
      if (fe.results.some((ee) => !ee.ok))
        q.applyConflict = `Winner promotion failed parameter preflight: ${fe.results.filter((ee) => !ee.ok).map((ee) => ee.error).join("; ")}`;
      else {
        try {
          q.applyResult = a.graph.applyOperations(Y.operations), q.appliedOperations = Y.operations, q.applyResult.results.every((ee) => ee.ok) ? q.appliedVariantId = P.id : q.applyConflict = "Winner promotion was only partially applied; the canvas may contain a partial parameter update. Inspect operation errors.";
        } catch (ee) {
          q.applyConflict = `Winner promotion threw unexpectedly; the canvas may contain a partial parameter update: ${String(ee)}`;
        }
        q.applyConflict && a.ui.toast(q.applyConflict, "error");
      }
    } else
      q.appliedVariantId = P.id;
  }
  if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  const ce = (/* @__PURE__ */ new Date()).toISOString();
  try {
    const Y = await Z1({
      session: q,
      request: r,
      baseline: m,
      definitions: v,
      pluginId: a.pluginId || G0,
      pluginVersion: q0,
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
    }), Q = await yy(a, Y);
    if (Q.cleanupFailures.length > 0) {
      const re = `Portable study was saved, but ${Q.cleanupFailures.length} unreferenced old blob(s) could not be cleaned up.`;
      q.insights.warnings.push(re);
      try {
        a.ui.toast(re, "warning");
      } catch {
      }
    }
  } catch (Y) {
    const Q = `Experiment completed, but its portable study bundle could not be captured or saved: ${hS(Y)}`;
    q.insights.warnings.push(Q);
    try {
      a.ui.toast(Q, "warning");
    } catch {
    }
  }
  let ue = og(a, r, q, m, v);
  try {
    await xy(a, ue);
  } catch (Y) {
    const Q = `Experiment completed, but its local history could not be saved: ${String(Y)}`;
    q.insights.warnings.push(Q);
    try {
      a.ui.toast(Q, "warning");
    } catch {
    }
    ue = og(a, r, q, m, v);
  }
  return ue;
}
async function DS(a, r, s) {
  let l = !1, u, d = !0;
  const f = () => {
    d && (d = !1, u == null || u());
  };
  try {
    u = a.graph.onGraphChanged(() => {
      d && (l = !0);
    });
  } catch {
    l = !0;
  }
  try {
    return await CS(
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
const ad = 1, zS = "mulberry32-v1", cg = 4, ug = 32, Bu = 8, dg = 16, RS = /* @__PURE__ */ new Set([
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
  "apply_best"
]), US = /* @__PURE__ */ new Set(["metric", "direction"]), LS = /* @__PURE__ */ new Set(["node_id", "param", "values"]), BS = /* @__PURE__ */ new Set(["int", "float", "bool", "select"]), VS = "Planner-only seed: it deterministically selects parameter assignments and does not seed graph nodes or make graph executions reproducible.";
function id(a, r) {
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new Error(`${r} must be an object`);
  return a;
}
function rd(a, r, s) {
  const l = Object.keys(a).filter((u) => !r.has(u));
  if (l.length > 0)
    throw new Error(`${s} contains unknown field(s): ${l.join(", ")}`);
}
function mo(a, r) {
  if (typeof a != "string" || !a.trim())
    throw new Error(`${r} must be a non-empty string`);
  return a.trim();
}
function fg(a, r, s) {
  if (a === void 0) return r;
  if (typeof a != "boolean") throw new Error(`${s} must be a boolean`);
  return a;
}
function sd(a, r, s, l, u) {
  const d = a === void 0 ? r : a;
  if (!Number.isInteger(d) || d < s || d > l)
    throw new Error(`${u} must be an integer from ${s} to ${l}`);
  return d;
}
function _s(a) {
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
function HS(a, r, s) {
  const l = a.nodes.filter((d) => d.id === r);
  if (l.length === 0) throw new Error(`${s} references missing node '${r}'`);
  if (l.length > 1) throw new Error(`${s} references ambiguous duplicate node id '${r}'`);
  const u = l[0];
  if (!u.type || u.type === "note")
    throw new Error(`${s} node '${r}' has no optimizable node type`);
  return u;
}
function GS(a, r, s) {
  const l = a.filter((u) => u.node_name === r);
  if (l.length === 0) throw new Error(`${s} has no definition for node type '${r}'`);
  if (l.length > 1) throw new Error(`${s} found duplicate definitions for node type '${r}'`);
  return l[0];
}
function qS(a, r, s, l) {
  var D;
  const u = `optimizer.bindings[${r}]`, d = id(a, u);
  rd(d, LS, u);
  const f = mo(d.node_id, `${u}.node_id`), y = mo(d.param, `${u}.param`), m = HS(s, f, u), g = GS(l, m.type, u), v = g.params.filter((V) => V.name === y);
  if (v.length === 0)
    throw new Error(`${u} references unknown parameter '${y}' on '${m.type}'`);
  if (v.length > 1)
    throw new Error(`${u} references ambiguous duplicate parameter '${y}' on '${m.type}'`);
  const b = v[0];
  if (!BS.has(b.param_type))
    throw new Error(
      `${u} parameter '${f}.${y}' has unsupported type '${String(b.param_type)}'; only int, float, bool, and select are allowed`
    );
  if (Oa(y))
    throw new Error(
      `${u} parameter '${f}.${y}' has a credential-shaped name and cannot be optimized; this is refused even when the node schema declares an otherwise supported parameter type`
    );
  if (!Array.isArray(d.values) || d.values.length === 0)
    throw new Error(`${u}.values must be a non-empty explicit domain`);
  if (d.values.length > ug)
    throw new Error(`${u}.values supports at most ${ug} values`);
  const _ = d.values.map((V, J) => pg(b, V, `${u}.values[${J}]`)), A = _.map(_s);
  if (new Set(A).size !== A.length)
    throw new Error(`${u}.values must contain unique scalar values`);
  const R = (D = m.data) == null ? void 0 : D.params, B = !!R && Object.prototype.hasOwnProperty.call(R, y) ? R[y] : b.default, T = pg(b, B, `${u} baseline value`);
  return {
    node: m,
    definition: g,
    parameter: b,
    nodeId: f,
    paramName: y,
    baselineValue: T,
    domain: _
  };
}
function IS(a, r) {
  const s = new Array(a.length);
  let l = r;
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u].domain;
    s[u] = d[l % d.length], l = Math.floor(l / d.length);
  }
  return s;
}
function kS(a) {
  let r = 0;
  for (const s of a) {
    const l = _s(s.baselineValue), u = s.domain.findIndex((d) => _s(d) === l);
    if (u < 0) return;
    r = r * s.domain.length + u;
  }
  return r;
}
function KS(a) {
  let r = a >>> 0;
  return () => {
    r = r + 1831565813 >>> 0;
    let s = r;
    return s = Math.imul(s ^ s >>> 15, s | 1) >>> 0, s ^= s + Math.imul(s ^ s >>> 7, s | 61), (s ^ s >>> 14) >>> 0;
  };
}
function YS(a, r, s) {
  const l = KS(s), u = /* @__PURE__ */ new Map(), d = [];
  for (let f = 0; f < r; f += 1) {
    const y = a - f, m = l() % y, g = u.get(m) ?? m, v = y - 1, b = u.get(v) ?? v;
    m !== v ? u.set(m, b) : u.delete(m), u.delete(v), d.push(g);
  }
  return d;
}
function XS(a, r) {
  const s = [], l = /* @__PURE__ */ new Map();
  return a.forEach((u, d) => {
    l.has(u.nodeId) || (l.set(u.nodeId, []), s.push(u.nodeId)), l.get(u.nodeId).push([u.paramName, r[d]]);
  }), s.map((u) => ({
    op: "set_params",
    node_id: u,
    params: Object.fromEntries(l.get(u))
  }));
}
function QS(a, r) {
  return r.every((s, l) => _s(s) === _s(a[l].baselineValue));
}
function JS(a) {
  const r = id(a, "optimizer");
  if (rd(r, RS, "optimizer"), r.version !== void 0 && r.version !== ad)
    throw new Error(`optimizer.version must be ${ad}`);
  if (r.strategy !== "grid" && r.strategy !== "seeded_random")
    throw new Error("optimizer.strategy must be grid or seeded_random");
  const s = mo(r.hypothesis, "optimizer.hypothesis"), l = id(r.objective, "optimizer.objective");
  rd(l, US, "optimizer.objective");
  const u = mo(l.metric, "optimizer.objective.metric");
  if (l.direction !== "maximize" && l.direction !== "minimize")
    throw new Error("optimizer.objective.direction must be maximize or minimize");
  return {
    raw: r,
    strategy: r.strategy,
    hypothesis: s,
    objective: { metric: u, direction: l.direction },
    repetitions: sd(r.repetitions, 1, 1, 5, "optimizer.repetitions"),
    concurrency: sd(r.concurrency, 1, 1, 2, "optimizer.concurrency"),
    includeBaseline: fg(r.include_baseline, !0, "optimizer.include_baseline"),
    applyBest: fg(r.apply_best, !1, "optimizer.apply_best")
  };
}
function ZS(a, r, s) {
  const l = JS(a);
  if (!Array.isArray(l.raw.bindings) || l.raw.bindings.length < 1 || l.raw.bindings.length > cg)
    throw new Error(`optimizer.bindings must contain 1 to ${cg} bindings`);
  if (!r || !Array.isArray(r.nodes) || !Array.isArray(r.edges))
    throw new Error("current graph must contain nodes and edges arrays");
  if (!Array.isArray(s)) throw new Error("node definitions must be an array");
  const u = l.raw.bindings.map((X, P) => qS(X, P, r, s)), d = u.map((X) => `${X.nodeId}\0${X.paramName}`);
  if (new Set(d).size !== d.length)
    throw new Error("optimizer.bindings must not repeat the same node parameter");
  const f = u.reduce((X, P) => X * P.domain.length, 1), y = kS(u), m = Bu - (l.includeBaseline ? 1 : 0);
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
    g = Array.from({ length: f }, (X, P) => P).filter((X) => X !== y);
  } else {
    const X = sd(
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
    g = YS(b, X, v).map((q) => y !== void 0 && q >= y ? q + 1 : q);
  }
  const _ = g.map((X) => ({
    domainIndex: X,
    assignment: IS(u, X)
  })).filter(({ assignment: X }) => !QS(u, X));
  if (_.length === 0)
    throw new Error("optimizer search space contains no assignment different from the current graph baseline");
  const A = l.includeBaseline ? [{ id: "baseline", label: "Baseline", operations: [] }] : [], R = l.strategy === "grid" ? "grid" : "random", E = _.map(({ assignment: X }, P) => ({
    id: `optimizer-${R}-${String(P + 1).padStart(3, "0")}`,
    label: `${l.strategy === "grid" ? "Grid" : "Random"} ${P + 1}: ${u.map((q, ce) => `${q.nodeId}.${q.paramName}=${JSON.stringify(X[ce])}`).join(", ")}`,
    operations: XS(u, X)
  })), B = [...A, ...E];
  if (B.length > Bu)
    throw new Error(`optimizer compiled ${B.length} variants; maximum is ${Bu}`);
  const T = B.length * l.repetitions;
  if (T > dg)
    throw new Error(
      `optimizer compiled ${B.length} variants x ${l.repetitions} repetitions = ${T} executions; maximum is ${dg}`
    );
  const D = _.map(
    ({ domainIndex: X, assignment: P }, q) => ({
      variantId: E[q].id,
      domainIndex: X,
      values: u.map((ce, ue) => ({
        nodeId: ce.nodeId,
        param: ce.paramName,
        value: P[ue]
      }))
    })
  ), V = {
    schemaVersion: ad,
    strategy: l.strategy,
    prngVersion: l.strategy === "seeded_random" ? zS : void 0,
    plannerSeed: v,
    seedDescription: VS,
    includesBaseline: l.includeBaseline,
    totalDomainAssignments: f,
    baselineAssignmentExcluded: y !== void 0,
    generatedCandidateCount: E.length,
    totalVariantCount: B.length,
    totalExecutionCount: T,
    bindings: u.map((X) => ({
      nodeId: X.nodeId,
      nodeType: X.node.type,
      param: X.paramName,
      paramType: X.parameter.param_type,
      baselineValue: X.baselineValue,
      domain: [...X.domain]
    })),
    assignments: D
  };
  return {
    request: {
      hypothesis: l.hypothesis,
      objective: l.objective,
      variants: B,
      repetitions: l.repetitions,
      concurrency: l.concurrency,
      apply_best: l.applyBest,
      search: V
    },
    metadata: V
  };
}
const FS = 360, WS = 720, PS = 5e3, mg = 60;
function e_(a) {
  if (a.phase === "connecting") return "Starting graph run…";
  if (a.phase === "cancelling") return "Cancelling run…";
  const r = [
    `Running graph ${a.completedNodes}/${a.totalNodes}`
  ];
  a.nodeType && r.push(a.nodeType);
  const s = a.progress ?? {}, l = [], u = (d) => Number.isInteger(d) ? String(d) : d.toFixed(4);
  for (const d of ["epoch", "step", "loss", "val_loss"]) {
    const f = s[d];
    typeof f == "number" && Number.isFinite(f) && l.push(`${d} ${u(f)}`);
  }
  if (l.length === 0)
    for (const [d, f] of Object.entries(s)) {
      if (l.length >= 2) break;
      d !== "event" && typeof f == "number" && Number.isFinite(f) && l.push(`${d} ${u(f)}`);
    }
  return r.push(...l), r.join(" · ");
}
function t_(a) {
  const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  for (const l of a.nodes) {
    const u = typeof l.type == "string" ? l.type : "";
    u && (r.set(l.id, u), s.set(u, (s.get(u) ?? 0) + 1));
  }
  return (l) => {
    const u = r.get(l);
    return u && s.get(u) === 1 ? u : l;
  };
}
function Vu(a) {
  const r = Object.keys(a);
  if (r.length <= mg) return a;
  const s = {};
  for (const l of r.slice(0, mg)) s[l] = a[l];
  return s;
}
const n_ = /* @__PURE__ */ new Set([
  "completed",
  "cached",
  "error",
  "interrupted"
]);
async function a_(a, r) {
  const { signal: s, timeoutMs: l, onProgress: u } = r, d = await by(a, s), f = $d(a.graph.getGraph()), y = t_(f), m = f.nodes.length, g = Date.now();
  return new Promise((v) => {
    const b = new WebSocket(Sy(d)), _ = {}, A = {}, R = {}, E = {}, B = /* @__PURE__ */ new Set(), T = [];
    let D, V = !1, J = !1, X;
    const P = (Q, re) => {
      if (V) return;
      V = !0, window.clearTimeout(Y), X !== void 0 && window.clearTimeout(X), s == null || s.removeEventListener("abort", ue), (b.readyState === WebSocket.OPEN || b.readyState === WebSocket.CONNECTING) && b.close();
      const fe = T.join(`
`).slice(-1500);
      v({
        status: Q,
        durationMs: Date.now() - g,
        runId: D,
        ...re ? { error: po(re, d) } : {},
        nodeErrors: E,
        completedNodes: B.size,
        totalNodes: m,
        outputs: Vu(_),
        finalProgress: Vu(A),
        metrics: Vu(R),
        textTail: fe
      });
    }, q = (Q) => {
      if (!V && !J) {
        J = !0, u == null || u({
          phase: "cancelling",
          elapsedMs: Date.now() - g,
          completedNodes: B.size,
          totalNodes: m
        });
        try {
          b.readyState === WebSocket.OPEN && b.send(JSON.stringify(
            D ? { action: "cancel", run_id: D } : { action: "cancel" }
          ));
        } catch {
        }
        X = window.setTimeout(
          () => P(Q, Q === "timeout" ? `Run timed out after ${Math.round(l / 6e4)} minutes and was cancelled.` : void 0),
          PS
        ), ce = Q;
      }
    };
    let ce = "cancelled";
    const ue = () => q("cancelled"), Y = window.setTimeout(() => q("timeout"), l);
    if (s == null || s.addEventListener("abort", ue, { once: !0 }), s != null && s.aborted) {
      P("cancelled");
      return;
    }
    u == null || u({
      phase: "connecting",
      elapsedMs: 0,
      completedNodes: 0,
      totalNodes: m
    }), b.onopen = () => {
      b.send(JSON.stringify({
        action: "execute",
        nodes: f.nodes,
        edges: f.edges,
        presets: f.presets ?? [],
        record_outputs: !1,
        weights_persistent: !0
      }));
    }, b.onmessage = (Q) => {
      let re;
      try {
        re = JSON.parse(String(Q.data));
      } catch {
        return;
      }
      const fe = String(re.type ?? "");
      if (typeof re.run_id == "string" && re.run_id && (D = re.run_id), re.rejected === !0) {
        P("error", String(re.error ?? "The host rejected the run request."));
        return;
      }
      if (fe === "node_status") {
        const ee = String(re.node_id ?? ""), pe = String(re.status ?? ""), w = y(ee), K = vy(re);
        n_.has(pe) && B.add(ee), pe === "error" && (E[w] = po(
          String(re.error ?? "node failed"),
          d
        ));
        for (const [M, te] of Object.entries(K.scalars))
          _[`${w}.${M}`] = te;
        for (const [M, te] of Object.entries(K.strings))
          _[`${w}.${M}`] = te;
        for (const [M, te] of Object.entries(K.modelParams))
          _[`${w}.${M}.params`] = te;
        for (const M of K.texts) T.push(M);
        if (K.progress)
          for (const [M, te] of Object.entries(K.progress)) {
            const Z = co(te);
            Z !== void 0 ? A[`${w}.${M}`] = Z : typeof te == "string" && te.length <= 80 && (A[`${w}.${M}`] = te);
          }
        u == null || u({
          phase: "running",
          nodeType: w,
          nodeStatus: pe,
          ...K.progress ? { progress: K.progress } : {},
          elapsedMs: Date.now() - g,
          completedNodes: B.size,
          totalNodes: m
        });
      } else if (fe === "metric") {
        const ee = Array.isArray(re.points) ? re.points : [];
        for (const pe of ee) {
          if (!pe || typeof pe != "object") continue;
          const w = pe, K = typeof w.name == "string" ? w.name : "", M = co(w.value);
          K && M !== void 0 && (R[K] = M);
        }
      } else fe === "execution_complete" ? P("complete") : fe === "execution_stopped" ? P(ce, J ? void 0 : `Run stopped by the host (${String(re.reason ?? "stopped")}).`) : (fe === "execution_error" || fe === "error") && P("error", String(re.error ?? fe));
    }, b.onerror = () => P("error", "Execution WebSocket failed."), b.onclose = () => {
      V || P(
        J ? ce : "error",
        J ? void 0 : "Execution WebSocket closed before the run completed."
      );
    };
  });
}
const hg = 16, gg = 2, i_ = [
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
    description: `Execute the CURRENT canvas graph on the CodefyUI backend — the user's real run, with real side effects (file writes, network calls, GPU time). A user-facing confirmation is required before it starts. Call this AFTER validate_graph reports "valid": true, when the user asked to run, train, or evaluate their graph. Node statuses and live training progress (loss, epochs) stream to the panel while it runs; long training runs are expected and fine — do not cancel or restart one without being asked. Returns the final status, per-node scalar/string outputs, last progress values, metric tails, and any node errors. Use run_graph for "run it / train it"; use run_graph_experiments only for comparing variants.`,
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
        apply_best: { type: "boolean" }
      },
      required: ["strategy", "hypothesis", "objective", "bindings"]
    }
  }
];
function Ji(a) {
  const r = a.graph.getGraph();
  return JSON.stringify({ nodes: r.nodes, edges: r.edges, presets: r.presets ?? [] });
}
function r_(a) {
  if (typeof a == "string") return JSON.stringify(a);
  const r = JSON.stringify(a);
  return r === void 0 ? String(a) : r.length > 180 ? `${r.slice(0, 177)}...` : r;
}
function yg(a) {
  if (!a) return "";
  const r = Object.entries(a).map(([s, l]) => `${s}=${r_(l)}`);
  return r.length > 0 ? r.join(", ") : "no parameters";
}
function s_(a) {
  switch (a.op) {
    case "add_node": {
      const r = yg(a.params);
      return `add ${a.node_type}${r ? ` with ${r}` : ""}`;
    }
    case "set_params":
      return `set ${a.node_id}: ${yg(a.params)}`;
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
function Hu(a, r) {
  const s = a.role === "user" && a.attachments && a.attachments.length > 0 ? Gg(a.content, a.attachments, r) : a.content, l = { role: a.role, content: s };
  return a.tool_calls && (l.tool_calls = a.tool_calls), a.tool_call_id && (l.tool_call_id = a.tool_call_id), l;
}
function vg(a, r) {
  const s = /* @__PURE__ */ new Map();
  a.forEach((u, d) => {
    const f = u.op, y = r[d], m = y ? y.ok : !1;
    s.has(f) || s.set(f, { ok: 0, fail: 0 });
    const g = s.get(f);
    m ? g.ok++ : g.fail++;
  });
  const l = [];
  for (const [u, d] of s) {
    const f = d.ok + d.fail;
    d.fail === 0 ? l.push(`${u} x${f} ok`) : d.ok === 0 ? l.push(`${u} x${f} FAILED`) : l.push(`${u} x${f} (${d.ok} ok, ${d.fail} FAILED)`);
  }
  return l.join(", ");
}
function l_(a, r, s, l, u) {
  const f = { role: "system", content: H0(
    a.graph.getNodeDefinitions(),
    a.graph.getGraph()
  ) }, y = r.slice(-20), m = r.flatMap((_) => _.tool_calls ?? []), g = new Map(m.map((_) => [_.id, _])), v = y.map((_) => {
    if (_.role === "user") return Hu(_, u);
    if (_.role === "tool") {
      const A = _.tool_call_id ? g.get(_.tool_call_id) : void 0, R = ho(
        A ?? { id: _.tool_call_id ?? "legacy", name: "legacy_tool", arguments: {} },
        _.content,
        a
      );
      return Hu({ ..._, content: R }, u);
    }
    return Hu({
      ..._,
      content: Zu(_.content, m, a),
      ..._.tool_calls ? { tool_calls: Yg(_.tool_calls, a) } : {}
    }, u);
  }), b = {
    role: "user",
    content: Gg(s, l, u)
  };
  return [f, ...v, b];
}
function Ay(a, r, s = i_, l = 8192) {
  const u = a.provider, d = a.models[u] ?? "", f = {
    provider: u,
    model: d,
    messages: r,
    tools: s,
    max_tokens: l
  };
  if (u !== "openai-codex") {
    const m = u === "openai" ? a.apiKeys.openai : u === "openrouter" ? a.apiKeys.openrouter : u === "anthropic" ? a.apiKeys.anthropic : u === "custom" ? a.apiKeys.custom : void 0;
    m && (f.api_key = m);
  }
  u === "custom" && a.customBaseUrl && (f.base_url = a.customBaseUrl);
  const y = eo(a);
  return y && (f.reasoning_effort = y), f;
}
async function ld(a) {
  const r = (f) => {
    const y = ho(
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
  }, s = a.graph.getGraph(), l = s.nodes.filter((f) => f.type !== "note"), u = new Set(l.map((f) => f.id)), d = s.edges.filter((f) => typeof f.source == "string" && typeof f.target == "string" && u.has(f.source) && u.has(f.target));
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
async function o_(a) {
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
    l = Ji(a);
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
  const u = await ld(a);
  let d;
  try {
    d = Ji(a);
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
  } : u;
}
async function c_(a, r, s, l, u) {
  const f = [
    { role: "system", content: `You are a focused research sub-agent for CodefyUI Graph Copilot. Answer ONE sub-question about building a node graph, using ONLY node types that appear in the index below (exact names; if nothing in the index fits, say so instead of inventing a type). Answer with: (1) the node types needed, (2) a one-line wiring plan (which output feeds which input), (3) any params worth setting. CONCISE — no preamble, no code blocks.

## Node index
` + l },
    { role: "user", content: s }
  ];
  let y = "";
  try {
    await qg(
      a,
      Ay(r, f, [], 1024),
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
      u
    );
  } catch (m) {
    return `(research failed: ${String(m)})`;
  }
  return y.trim() || "(no answer)";
}
let Gu = !1;
async function jy(a, r, s, l, u, d, f, y = !1) {
  const { name: m, arguments: g } = a;
  if (m === "apply_graph_operations") {
    const v = g.operations;
    if (!Array.isArray(v))
      return JSON.stringify({ error: "operations must be an array of GraphOp objects" });
    let b;
    try {
      b = r.graph.applyOperations(v);
    } catch (A) {
      return JSON.stringify({ error: `applyOperations threw: ${String(A)}` });
    }
    const _ = vg(v, b.results);
    return u.push(_), l.onOpsApplied(_, b), JSON.stringify({
      results: b.results,
      refs: b.refs,
      node_count: b.node_count,
      edge_count: b.edge_count
    });
  }
  if (m === "get_node_schemas") {
    const b = (Array.isArray(g.node_types) ? g.node_types : []).map((T) => String(T)), _ = r.graph.getNodeDefinitions(), A = new Map(_.map((T) => [T.node_name, T])), R = b.map((T) => A.get(T)).filter((T) => !!T), E = b.filter((T) => !A.has(T));
    let B = R.length > 0 ? V0(R) : "(no matching node types)";
    return E.length > 0 && (B += `
(unknown node types, not in catalog: ${E.join(", ")})`), B;
  }
  if (m === "validate_graph")
    return JSON.stringify(await ld(r));
  if (m === "run_graph") {
    if (Gu)
      return JSON.stringify({
        error: "A live graph run is already in progress. Wait for it to finish or cancel it before starting another."
      });
    const v = typeof g.reason == "string" && g.reason.trim() ? g.reason.trim().slice(0, 300) : "Run the current graph.", b = typeof g.timeout_minutes == "number" && Number.isFinite(g.timeout_minutes) ? Math.round(g.timeout_minutes) : FS, _ = Math.min(Math.max(b, 1), WS);
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." });
    const A = await ld(r);
    if (!A.valid)
      return JSON.stringify({
        error: "The current graph is not runnable — fix these validation errors, then call run_graph again.",
        errors: A.errors
      });
    if (!l.onRunApproval)
      return JSON.stringify({
        error: "Running the live graph requires an interactive user confirmation, but this client did not provide one."
      });
    let R = !1, E;
    try {
      E = r.graph.onGraphChanged(() => {
        R = !0;
      });
    } catch (V) {
      return JSON.stringify({ error: `Cannot safely watch the graph during approval: ${String(V)}` });
    }
    let B;
    try {
      B = Ji(r);
    } catch (V) {
      return E(), JSON.stringify({ error: `Cannot capture the graph before approval: ${String(V)}` });
    }
    let T;
    try {
      const V = r.graph.getGraph();
      T = await l.onRunApproval({
        reason: v,
        nodeCount: V.nodes.filter((J) => J.type !== "note").length,
        edgeCount: V.edges.length,
        nodeTypes: [...new Set(
          V.nodes.map((J) => J.type).filter((J) => !!J && J !== "note")
        )],
        timeoutMinutes: _
      });
    } catch (V) {
      return f != null && f.aborted ? JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." }) : JSON.stringify({ error: `Run approval failed: ${String(V)}` });
    } finally {
      E();
    }
    if (!T)
      return JSON.stringify({ cancelled: !0, error: "The run was not approved by the user." });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." });
    let D;
    try {
      D = Ji(r) !== B;
    } catch (V) {
      return JSON.stringify({ error: `Cannot re-check the graph after approval: ${String(V)}` });
    }
    if (R || D)
      return JSON.stringify({
        cancelled: !0,
        replan: !0,
        error: "The graph changed while the run approval was open. Re-read the graph, re-validate, and propose the run again."
      });
    Gu = !0;
    try {
      const V = await a_(r, {
        signal: f,
        timeoutMs: _ * 6e4,
        onProgress: l.onRunProgress
      }), { durationMs: J, textTail: X, ...P } = V;
      return JSON.stringify({
        ...P,
        duration_s: Math.round(J / 1e3),
        ...X ? { text_tail: X } : {}
      });
    } catch (V) {
      return JSON.stringify({ error: `Run failed: ${String(V)}` });
    } finally {
      Gu = !1;
    }
  }
  if (m === "research") {
    const b = (Array.isArray(g.questions) ? g.questions : []).map((R) => String(R)).filter((R) => R.trim()).slice(0, 4);
    if (b.length === 0)
      return JSON.stringify({ error: 'research requires a non-empty "questions" array' });
    const _ = Xg(r.graph.getNodeDefinitions()), A = await Promise.all(
      b.map((R) => c_(r, s, R, _, f))
    );
    return b.map((R, E) => `[${E + 1}] Q: ${R}
A: ${A[E]}`).join(`

`);
  }
  if (m === "optimize_graph_parameters") {
    let v;
    try {
      v = ZS(
        g,
        r.graph.getGraph(),
        r.graph.getNodeDefinitions()
      );
    } catch (_) {
      return JSON.stringify({ error: String(_) });
    }
    const b = await jy(
      {
        id: a.id,
        name: "run_graph_experiments",
        arguments: v.request
      },
      r,
      s,
      l,
      u,
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
      v = OS(g);
    } catch (T) {
      return JSON.stringify({ error: String(T) });
    }
    if (v > d.remaining)
      return JSON.stringify({
        error: `Experiment turn budget exceeded: ${v} requested, ${d.remaining} of ${uo} executions remain.`
      });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." });
    if (!l.onExperimentApproval)
      return JSON.stringify({
        error: "Experiment execution requires an interactive user confirmation, but this client did not provide one."
      });
    const b = g;
    let _ = !1, A;
    try {
      A = r.graph.onGraphChanged(() => {
        _ = !0;
      });
    } catch (T) {
      return JSON.stringify({ error: `Cannot safely watch the graph during approval: ${String(T)}` });
    }
    let R;
    try {
      R = Ji(r);
    } catch (T) {
      return A(), JSON.stringify({ error: `Cannot capture the graph before approval: ${String(T)}` });
    }
    let E;
    try {
      try {
        const T = y ? {
          ...a,
          arguments: Object.fromEntries(
            Object.entries(a.arguments).filter(([V]) => V !== "search")
          )
        } : a, D = Kg(T, r).arguments;
        E = await l.onExperimentApproval({
          hypothesis: D.hypothesis,
          variantCount: b.variants.length,
          repetitions: b.repetitions ?? 1,
          executionCount: v,
          concurrency: b.concurrency ?? 1,
          applyBest: b.apply_best ?? !1,
          variants: D.variants.map((V) => ({
            label: V.label,
            operations: V.operations.map(s_)
          })),
          nodeTypes: [.../* @__PURE__ */ new Set([
            ...r.graph.getGraph().nodes.map((V) => V.type).filter((V) => !!V && V !== "note"),
            ...b.variants.flatMap((V) => V.operations.filter((J) => J.op === "add_node").map((J) => J.node_type))
          ])]
        });
      } catch (T) {
        return f != null && f.aborted ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." }) : JSON.stringify({ error: `Experiment approval failed: ${String(T)}` });
      }
    } finally {
      A();
    }
    if (!E)
      return JSON.stringify({ cancelled: !0, error: "Experiment execution was not approved by the user." });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." });
    let B;
    try {
      B = Ji(r) !== R;
    } catch (T) {
      return JSON.stringify({ error: `Cannot re-check the graph after approval: ${String(T)}` });
    }
    if (_ || B)
      return JSON.stringify({
        cancelled: !0,
        replan: !0,
        error: "The active graph changed while execution approval was open. Re-read the graph and propose the study again."
      });
    d.remaining -= v;
    try {
      const T = await DS(
        r,
        g,
        f
      );
      if (T.applyResult && T.appliedOperations) {
        const X = `promote experiment winner: ${vg(
          T.appliedOperations,
          T.applyResult.results
        )}`;
        u.push(X), l.onOpsApplied(X, T.applyResult);
      }
      const { applyResult: D, appliedOperations: V, ...J } = T;
      return JSON.stringify(J);
    } catch (T) {
      return f != null && f.aborted || T instanceof DOMException && T.name === "AbortError" ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled." }) : JSON.stringify({ error: String(T) });
    }
  }
  return m === "get_current_graph" ? Qg(r.graph.getGraph(), r.graph.getNodeDefinitions()) : JSON.stringify({ error: `Unknown tool: ${m}` });
}
async function u_(a) {
  const { api: r, settings: s, history: l, userText: u, attachments: d, callbacks: f, signal: y } = a, m = [], g = l_(
    r,
    l,
    u,
    d,
    s.provider
  );
  let v = 0, b = 0, _ = !1;
  const A = [], R = { remaining: uo }, E = (T) => {
    var D;
    m.push(T), (D = f.onTurnAppended) == null || D.call(f, T);
  }, B = (T) => {
    const D = Zu(T, A, r);
    D.trim() && E({ role: "assistant", content: D });
  };
  try {
    for (; ; ) {
      let T = "", D = null, V = null;
      if (await qg(
        r,
        Ay(s, g),
        {
          onText(ee) {
            T += ee, f.onTextDelta(ee);
          },
          onDone(ee) {
            D = ee;
          },
          onError(ee) {
            V = ee;
          }
        },
        y
      ), V !== null) {
        B(T), f.onTurnsCommitted(m), f.onError(V), f.onFinished();
        return;
      }
      if (!D) {
        B(T), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      const J = D, X = J.message.tool_calls ?? [], P = J.message.content || T, q = Zu(
        P,
        [...A, ...X],
        r
      );
      if (J.stop_reason === "end" || X.length === 0) {
        const ee = r.graph.getGraph();
        if (_ && Array.isArray(ee.nodes) && ee.nodes.length > 0) {
          const pe = await o_(r);
          if (!pe.valid) {
            if (b >= gg) {
              q.trim() && E({ role: "assistant", content: q }), E({
                role: "assistant",
                content: `I could not complete a runnable graph after ${gg} correction attempts. The current graph still fails CodefyUI validation:
` + pe.errors.map((w) => `- ${w}`).join(`
`)
              }), f.onTurnsCommitted(m), f.onFinished();
              return;
            }
            b++, q.trim() && E({ role: "assistant", content: q }), g.push({ role: "assistant", content: q }), g.push({
              role: "user",
              content: `The graph is not runnable yet — validate_graph reported these errors. Fix them with graph operations, then validate again before finishing:
` + pe.errors.map((w) => `- ${w}`).join(`
`)
            });
            continue;
          }
        }
        E({ role: "assistant", content: q }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      v++;
      const ce = Yg(X, r);
      A.push(...X);
      const ue = {
        role: "assistant",
        content: q,
        tool_calls: ce
      }, Y = m.length;
      E(ue);
      const Q = [], re = [];
      for (const ee of X) {
        const pe = Q.length, w = Date.now(), K = await jy(
          ee,
          r,
          s,
          f,
          Q,
          R,
          y
        );
        Q.length > pe && (_ = !0);
        const M = ho(ee, K, r);
        if (E({
          role: "tool",
          content: M,
          tool_call_id: ee.id,
          durationMs: Date.now() - w
        }), re.push({
          role: "tool",
          content: M,
          tool_call_id: ee.id
        }), y != null && y.aborted) {
          f.onTurnsCommitted(m), f.onFinished();
          return;
        }
      }
      Q.length > 0 && (m[Y] = { ...ue, opsSummary: Q.join("; ") });
      const fe = {
        role: "assistant",
        content: q,
        tool_calls: X
      };
      if (g.push(fe), g.push(...re), v >= hg) {
        E({
          role: "assistant",
          content: `(stopped after ${hg} tool rounds)`
        }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
    }
  } catch (T) {
    f.onTurnsCommitted(m), f.onError(String(T)), f.onFinished();
  }
}
function d_(a) {
  const r = [];
  let s = 0;
  return a.forEach((l, u) => {
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
      key: u,
      turn: l,
      stages: d,
      ...d.length > 0 ? { step: ++s } : {}
    });
  }), r;
}
function wy(a) {
  if (!Number.isFinite(a) || a < 0) return "";
  if (a < 1e4) return `${Math.max(a / 1e3, 0.1).toFixed(1)}s`;
  const r = Math.round(a / 1e3);
  if (r < 60) return `${r}s`;
  const s = Math.floor(r / 60), l = r % 60;
  return `${s}m ${String(l).padStart(2, "0")}s`;
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
function ni(a) {
  try {
    const r = JSON.parse(a);
    return r && typeof r == "object" && !Array.isArray(r) ? r : null;
  } catch {
    return null;
  }
}
function f_(a) {
  const r = Array.isArray(a.operations) ? a.operations : [], s = /* @__PURE__ */ new Map();
  for (const l of r) {
    const u = l && typeof l == "object" ? String(l.op ?? "?") : "?";
    s.set(u, (s.get(u) ?? 0) + 1);
  }
  return [...s].map(([l, u]) => `${l} ×${u}`).join(", ");
}
function gn(a, r) {
  return a.length > r ? a.slice(0, r - 1) + "…" : a;
}
function Vt(a) {
  try {
    return gn(JSON.stringify(JSON.parse(a), null, 2), 4e3);
  } catch {
    return gn(a, 4e3);
  }
}
function tr(a, r) {
  return `${a} ${r}${a === 1 ? "" : "s"}`;
}
function p_(a, r) {
  const s = ea.apply_graph_operations, l = f_(a);
  if (!r)
    return { label: s, summary: l || "applying operations", status: "running" };
  const u = ni(r.content);
  if (!u)
    return { label: s, summary: l, status: "ok", detail: Vt(r.content) };
  if (typeof u.error == "string")
    return { label: s, summary: gn(u.error, 120), status: "error", detail: Vt(r.content) };
  const f = (Array.isArray(u.results) ? u.results : []).filter((v) => !v.ok).length, y = typeof u.node_count == "number" ? u.node_count : null, m = typeof u.edge_count == "number" ? u.edge_count : null, g = [];
  return l && g.push(l), f > 0 && g.push(`${f} failed`), y !== null && m !== null && g.push(`${tr(y, "node")} · ${tr(m, "edge")}`), {
    label: s,
    summary: g.join(" — ") || "applied",
    status: f > 0 ? "error" : "ok",
    detail: Vt(r.content)
  };
}
function m_(a) {
  const r = ea.validate_graph;
  if (!a) return { label: r, summary: "checking…", status: "running" };
  const s = ni(a.content), l = Array.isArray(s == null ? void 0 : s.errors) ? s.errors.map(String) : [];
  return s != null && s.valid ? { label: r, summary: "graph is runnable", status: "ok" } : {
    label: r,
    summary: l.length > 0 ? tr(l.length, "issue") : "not runnable",
    status: "error",
    detail: l.length > 0 ? l.map((u) => `• ${u}`).join(`
`) : Vt(a.content)
  };
}
function h_(a) {
  const r = ea.get_current_graph;
  if (!a) return { label: r, summary: "reading…", status: "running" };
  const s = ni(a.content), l = Array.isArray(s == null ? void 0 : s.nodes) ? s.nodes.length : null, u = Array.isArray(s == null ? void 0 : s.edges) ? s.edges.length : null;
  return {
    label: r,
    summary: l !== null && u !== null ? `${tr(l, "node")} · ${tr(u, "edge")}` : "snapshot",
    status: "ok",
    detail: Vt(a.content)
  };
}
function g_(a, r) {
  const s = ea.get_node_schemas, l = Array.isArray(a.node_types) ? a.node_types.map(String) : [], u = l.length > 0 ? gn(l.join(", "), 90) : "node types";
  return r ? { label: s, summary: u, status: "ok", detail: gn(r.content, 4e3) } : { label: s, summary: u, status: "running" };
}
function y_(a, r) {
  const s = ea.research, l = Array.isArray(a.questions) ? a.questions.length : 0, u = l > 0 ? `${tr(l, "question")} in parallel` : "researching";
  return r ? { label: s, summary: u, status: "ok", detail: gn(r.content, 4e3) } : { label: s, summary: u, status: "running" };
}
function v_(a, r) {
  const s = ea.run_graph_experiments, l = Array.isArray(a.variants) ? a.variants.length : 0, u = typeof a.repetitions == "number" ? a.repetitions : 1, d = l > 0 ? `${l} candidates · ${l * u} runs` : "preparing study";
  if (!r) return { label: s, summary: d, status: "running" };
  const f = ni(r.content);
  if (!f || typeof f.error == "string")
    return {
      label: s,
      summary: typeof (f == null ? void 0 : f.error) == "string" ? gn(f.error, 120) : "study failed",
      status: "error",
      detail: Vt(r.content)
    };
  const y = typeof f.winnerLabel == "string" ? f.winnerLabel : null, m = typeof f.appliedVariantId == "string";
  return {
    label: s,
    summary: y ? `${y} ranked first${m ? " · applied" : ""}` : "no rankable metric",
    status: y ? "ok" : "error",
    detail: Vt(r.content)
  };
}
function b_(a, r) {
  const s = ea.optimize_graph_parameters, l = Array.isArray(a.bindings) ? a.bindings.length : 0, u = a.strategy === "seeded_random" ? "seeded random" : "grid", d = typeof a.repetitions == "number" ? a.repetitions : 1, f = a.strategy === "seeded_random" && typeof a.candidate_count == "number" ? a.candidate_count + (a.include_baseline === !1 ? 0 : 1) : void 0, y = f ? `${u} · ${l} params · ${f * d} runs` : `${u} · ${l} ${l === 1 ? "parameter" : "parameters"}`;
  if (!r) return { label: s, summary: y, status: "running" };
  const m = ni(r.content);
  if (!m || typeof m.error == "string")
    return {
      label: s,
      summary: typeof (m == null ? void 0 : m.error) == "string" ? gn(m.error, 120) : "search failed",
      status: "error",
      detail: Vt(r.content)
    };
  const g = typeof m.winnerLabel == "string" ? m.winnerLabel : null, v = typeof m.appliedVariantId == "string";
  return {
    label: s,
    summary: g ? `${g} ranked first${v ? " · applied" : ""}` : "no rankable metric",
    status: g ? "ok" : "error",
    detail: Vt(r.content)
  };
}
function S_(a, r) {
  const s = ea.run_graph, l = typeof a.reason == "string" ? gn(a.reason, 90) : "";
  if (!r) return { label: s, summary: l || "executing…", status: "running" };
  const u = ni(r.content);
  if (!u)
    return { label: s, summary: "done", status: "ok", detail: Vt(r.content) };
  if (typeof u.status != "string") {
    const y = typeof u.error == "string" ? u.error : "run not started";
    return { label: s, summary: gn(y, 120), status: "error", detail: Vt(r.content) };
  }
  const d = u.status, f = [d];
  return typeof u.completedNodes == "number" && typeof u.totalNodes == "number" && f.push(`${u.completedNodes}/${u.totalNodes} nodes`), typeof u.duration_s == "number" && f.push(wy(u.duration_s * 1e3)), {
    label: s,
    summary: f.join(" · "),
    status: d === "complete" ? "ok" : "error",
    detail: Vt(r.content)
  };
}
function __(a, r) {
  const s = ea[a.name] ?? a.name;
  if (!r) return { label: s, summary: "running…", status: "running" };
  const l = ni(r.content);
  return l && typeof l.error == "string" ? { label: s, summary: gn(l.error, 120), status: "error", detail: Vt(r.content) } : { label: s, summary: "done", status: "ok", detail: Vt(r.content) };
}
function $y(a) {
  const { call: r, result: s } = a, l = r.arguments ?? {};
  switch (r.name) {
    case "apply_graph_operations":
      return p_(l, s);
    case "validate_graph":
      return m_(s);
    case "get_current_graph":
      return h_(s);
    case "get_node_schemas":
      return g_(l, s);
    case "research":
      return y_(l, s);
    case "run_graph":
      return S_(l, s);
    case "run_graph_experiments":
      return v_(l, s);
    case "optimize_graph_parameters":
      return b_(l, s);
    default:
      return __(r, s);
  }
}
const E_ = /`([^`\n]+)`/, x_ = /\[([^\]\n]+)\]\(([^)\s]+)\)/, N_ = /\*\*([^\n]+?)\*\*/, A_ = /(^|[\s(])\*([^\s*](?:[^*\n]*?[^\s*])?)\*(?=[\s).,!?:;]|$)/;
function j_(a) {
  let r = null;
  const s = (y) => {
    y && (r === null || y.index < r.index) && (r = y);
  }, l = E_.exec(a);
  l && s({
    index: l.index,
    length: l[0].length,
    node: (y) => /* @__PURE__ */ h.jsx("code", { children: l[1] }, y)
  });
  const u = x_.exec(a);
  if (u) {
    const y = u[2];
    s({
      index: u.index,
      length: u[0].length,
      node: (m) => /^https?:\/\//i.test(y) ? /* @__PURE__ */ h.jsx("a", { href: y, target: "_blank", rel: "noopener noreferrer", children: u[1] }, m) : u[0]
    });
  }
  const d = N_.exec(a);
  d && s({
    index: d.index,
    length: d[0].length,
    node: (y) => /* @__PURE__ */ h.jsx("strong", { children: cs(d[1]) }, y)
  });
  const f = A_.exec(a);
  return f && s({
    index: f.index,
    length: f[0].length,
    prefix: f[1],
    node: (y) => /* @__PURE__ */ h.jsx("em", { children: cs(f[2]) }, y)
  }), r;
}
function cs(a) {
  const r = [];
  let s = a, l = 0;
  for (; s.length > 0; ) {
    const u = j_(s);
    if (!u) {
      r.push(s);
      break;
    }
    const d = s.slice(0, u.index) + (u.prefix ?? "");
    d && r.push(d), r.push(u.node(l++)), s = s.slice(u.index + u.length);
  }
  return r;
}
const w_ = /^(#{1,3})\s+(.*)$/, $_ = /^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/, T_ = /^\s*[-*]\s+(.*)$/, M_ = /^\s*\d+[.)]\s+(.*)$/;
function bg(a, r) {
  const s = a.split(`
`), l = [];
  let u = [], d = null, f = 0;
  const y = () => {
    u.length !== 0 && (l.push(
      /* @__PURE__ */ h.jsx("p", { className: "gcp-md-p", children: cs(u.join(`
`)) }, `${r}-p${f++}`)
    ), u = []);
  }, m = () => {
    if (!d) return;
    const g = d.items.map((v, b) => /* @__PURE__ */ h.jsx("li", { children: cs(v) }, b));
    l.push(
      d.ordered ? /* @__PURE__ */ h.jsx("ol", { className: "gcp-md-list", children: g }, `${r}-l${f++}`) : /* @__PURE__ */ h.jsx("ul", { className: "gcp-md-list", children: g }, `${r}-l${f++}`)
    ), d = null;
  };
  for (const g of s) {
    const v = w_.exec(g);
    if (v) {
      y(), m(), l.push(
        /* @__PURE__ */ h.jsx("div", { className: `gcp-md-h${v[1].length}`, children: cs(v[2]) }, `${r}-h${f++}`)
      );
      continue;
    }
    if ($_.test(g)) {
      y(), m(), l.push(/* @__PURE__ */ h.jsx("hr", { className: "gcp-md-hr" }, `${r}-r${f++}`));
      continue;
    }
    const b = T_.exec(g), _ = b ? null : M_.exec(g);
    if (b || _) {
      y();
      const A = !!_;
      (!d || d.ordered !== A) && (m(), d = { ordered: A, items: [] }), d.items.push((b ?? _)[1]);
      continue;
    }
    if (g.trim() === "") {
      y(), m();
      continue;
    }
    m(), u.push(g);
  }
  return y(), m(), l;
}
const qu = /```[^\n]*\n?([\s\S]*?)(?:```|$)/g;
function O_({ text: a }) {
  const r = [];
  let s = 0, l = 0;
  qu.lastIndex = 0;
  for (let u = qu.exec(a); u !== null && (u.index > s && r.push(...bg(a.slice(s, u.index), `s${l++}`)), r.push(
    /* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: u[1] }) }, `c${l++}`)
  ), s = u.index + u[0].length, u[0].length !== 0); u = qu.exec(a))
    ;
  return s < a.length && r.push(...bg(a.slice(s), `s${l++}`)), /* @__PURE__ */ h.jsx(h.Fragment, { children: r });
}
function C_({ kind: a }) {
  return /* @__PURE__ */ h.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    a === "pdf" ? /* @__PURE__ */ h.jsx("path", { d: "M9 18v-4M15 18v-4m0 0h1.5M9 14h.8a1 1 0 0 1 0 2H9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) : /* @__PURE__ */ h.jsx("path", { d: "M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function D_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function z_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M12 5v9", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "19", r: "1.7", fill: "currentColor" })
  ] });
}
function R_({ open: a }) {
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
function U_(a) {
  const r = a.split(/(```[^\n]*\n[\s\S]*?```|```[\s\S]*?```)/g), s = [];
  return r.forEach((l, u) => {
    if (l.startsWith("```")) {
      const d = l.replace(/^```[^\n]*\n?/, "").replace(/```$/, "");
      s.push(/* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: d }) }, u));
    } else l && s.push(/* @__PURE__ */ h.jsx("span", { children: l }, u));
  }), s;
}
function L_({ stage: a }) {
  var f;
  const [r, s] = ae.useState(!1), l = $y(a), u = !!l.detail, d = (f = a.result) == null ? void 0 : f.durationMs;
  return /* @__PURE__ */ h.jsxs("div", { className: `gcp-stage ${l.status}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "gcp-stage-head",
        onClick: () => u && s((y) => !y),
        "aria-expanded": u ? r : void 0,
        "aria-label": `${l.label}${l.summary ? `: ${l.summary}` : ""}`,
        disabled: !u,
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-status", "aria-hidden": "true", children: l.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-spinner" }) : l.status === "ok" ? /* @__PURE__ */ h.jsx(D_, {}) : /* @__PURE__ */ h.jsx(z_, {}) }),
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-label", children: l.label }),
          l.summary && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-summary", children: l.summary }),
          typeof d == "number" && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-time", children: wy(d) }),
          u && /* @__PURE__ */ h.jsx(R_, { open: r })
        ]
      }
    ),
    r && l.detail && /* @__PURE__ */ h.jsx("pre", { className: "gcp-stage-detail", children: l.detail })
  ] });
}
function Sg({
  turn: a,
  stages: r = [],
  step: s,
  streaming: l = !1,
  streamingText: u
}) {
  if (a.role === "tool") return null;
  const d = a.role === "user", f = l && u !== void 0 ? u : a.content, y = f.trim().length > 0, m = a.attachments ?? [], g = !d && r.length > 0;
  return /* @__PURE__ */ h.jsxs("div", { className: `gcp-msg-row ${d ? "user" : "assistant"}${g ? " step" : ""}`, children: [
    m.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-bubble-attachments", children: m.map(
      (v, b) => v.kind === "image" && v.dataUrl ? /* @__PURE__ */ h.jsx("img", { className: "gcp-att-image", src: v.dataUrl, alt: v.name, title: v.name }, b) : /* @__PURE__ */ h.jsxs("span", { className: "gcp-att-file", title: v.name, children: [
        /* @__PURE__ */ h.jsx(C_, { kind: v.kind }),
        /* @__PURE__ */ h.jsx("span", { className: "gcp-att-file-name", children: v.name })
      ] }, b)
    ) }),
    g && typeof s == "number" && /* @__PURE__ */ h.jsxs("div", { className: "gcp-step-tag", children: [
      /* @__PURE__ */ h.jsx("span", { className: "gcp-step-tag-dot", "aria-hidden": "true" }),
      "Step ",
      s
    ] }),
    (y || l && r.length === 0) && /* @__PURE__ */ h.jsxs("div", { className: "gcp-bubble", children: [
      d ? U_(f) : /* @__PURE__ */ h.jsx(O_, { text: f }),
      l && /* @__PURE__ */ h.jsx("span", { className: "gcp-caret", "aria-hidden": "true" })
    ] }),
    r.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-stages", children: r.map((v, b) => /* @__PURE__ */ h.jsx(L_, { stage: v }, `${v.call.id}-${b}`)) }),
    !d && a.opsSummary && r.length === 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-ops-chip", children: /* @__PURE__ */ h.jsxs("span", { children: [
      "Applied: ",
      a.opsSummary
    ] }) })
  ] });
}
function B_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L11 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L15 22L11 13L2 9L22 2Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function V_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }) });
}
function _g() {
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
function H_({ kind: a }) {
  return a === "pdf" ? /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M8.5 13.5h1a1.2 1.2 0 0 1 0 2.4h-1zm0 0v4M14 13.5v4m0-4h1.6m-1.6 2h1.2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }) : /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function G_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round" }) });
}
function q_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function I_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7.5v5.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "16.5", r: "1.2", fill: "currentColor" })
  ] });
}
function k_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M13 2L4 14h6l-1 8 9-12h-6l1-8z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Eg() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const K_ = [
  "Build a small CNN image classifier",
  "Explain what my current graph does",
  "Improve my current graph"
];
function Y_({
  api: a,
  settings: r,
  codexLoggedIn: s,
  conversation: l,
  onConversationChange: u,
  onSettingsChange: d,
  onOpenSettings: f,
  onOpenHistory: y
}) {
  var na, $s, cr;
  const [m, g] = ae.useState(""), [v, b] = ae.useState(!1), [_, A] = ae.useState(!1), [R, E] = ae.useState(""), [B, T] = ae.useState([]), [D, V] = ae.useState(0), [J, X] = ae.useState(null), [P, q] = ae.useState(""), [ce, ue] = ae.useState([]), [Y, Q] = ae.useState([]), [re, fe] = ae.useState(!1), [ee, pe] = ae.useState(null), [w, K] = ae.useState(null), [M, te] = ae.useState(null), Z = ae.useRef(null), x = ae.useRef(!0), L = ae.useRef(null), ne = ae.useRef(null), ie = ae.useRef(null), se = ae.useRef(null), be = ae.useRef(0), ve = v0(r, s), ut = Y.some((H) => H.status === "loading"), Ve = Y.filter((H) => H.status === "ready" && H.att).map((H) => H.att), yn = ve && !v && !ut && (m.trim().length > 0 || Ve.length > 0);
  ae.useEffect(() => () => {
    var H, ye;
    (H = se.current) == null || H.call(se, !1), se.current = null, (ye = ie.current) == null || ye.abort();
  }, []), ae.useEffect(() => {
    if (!v) {
      V(0);
      return;
    }
    const H = Date.now(), ye = window.setInterval(() => {
      V(Math.floor((Date.now() - H) / 1e3));
    }, 1e3);
    return () => window.clearInterval(ye);
  }, [v]);
  const jn = ae.useCallback(() => {
    const H = Z.current;
    H && (x.current = H.scrollHeight - H.scrollTop - H.clientHeight < 80);
  }, []);
  ae.useEffect(() => {
    const H = Z.current;
    H && x.current && (H.scrollTop = H.scrollHeight);
  }, [l.messages, B, R, Y.length, v]);
  const wn = ae.useCallback(() => {
    const H = L.current;
    H && (H.style.height = "auto", H.style.height = Math.min(H.scrollHeight, 110) + "px");
  }, []);
  ae.useEffect(() => {
    wn();
  }, [m, wn]);
  const F = ae.useCallback(
    (H) => {
      if (!(!ve || v))
        for (const ye of Array.from(H)) {
          const St = crypto.randomUUID(), za = Hg(ye);
          Q((Re) => [
            ...Re,
            { id: St, name: ye.name, kind: za, size: ye.size, status: "loading" }
          ]), M0(ye).then((Re) => {
            Q(
              ($n) => $n.map((Mt) => Mt.id === St ? { ...Mt, status: "ready", att: Re } : Mt)
            );
          }).catch((Re) => {
            const $n = (Re == null ? void 0 : Re.message) ?? String(Re);
            Q(
              (Mt) => Mt.map((Ht) => Ht.id === St ? { ...Ht, status: "error", error: $n } : Ht)
            );
          });
        }
    },
    [ve, v]
  ), he = (H) => {
    Q((ye) => ye.filter((St) => St.id !== H));
  }, Ke = (H) => {
    H.target.files && H.target.files.length > 0 && F(H.target.files), H.target.value = "";
  }, at = (H) => {
    var St;
    const ye = (St = H.clipboardData) == null ? void 0 : St.files;
    ye && ye.length > 0 && (F(ye), H.preventDefault());
  }, xt = (H) => {
    !ve || v || Array.from(H.dataTransfer.types).includes("Files") && (H.preventDefault(), be.current += 1, fe(!0));
  }, bt = (H) => {
    !ve || v || Array.from(H.dataTransfer.types).includes("Files") && H.preventDefault();
  }, Tt = () => {
    be.current -= 1, be.current <= 0 && (be.current = 0, fe(!1));
  }, cn = (H) => {
    be.current = 0, fe(!1), !(!ve || v) && H.dataTransfer.files && H.dataTransfer.files.length > 0 && (H.preventDefault(), F(H.dataTransfer.files));
  }, Ye = ae.useCallback(
    async (H, ye) => {
      var ur;
      const St = H.trim();
      if (!St && ye.length === 0 || v || !ve) return;
      X(null), q(St), ue(ye), g(""), Q([]), b(!0), E(""), T([]), x.current = !0;
      const za = { role: "user", content: St };
      ye.length > 0 && (za.attachments = ye);
      let Re = { ...l };
      Re.title || (Re.title = S0(St || ((ur = ye[0]) == null ? void 0 : ur.name) || "Attachment")), Re.provider = r.provider, Re.model = r.models[r.provider] ?? "";
      const $n = eo(r);
      $n ? Re.reasoningEffort = $n : delete Re.reasoningEffort, Re.messages = [...Re.messages, za], Re.updatedAt = Date.now(), u(Re), zh(a, Re);
      const Mt = new AbortController();
      ie.current = Mt;
      let Ht = "";
      await u_({
        api: a,
        settings: r,
        history: Re.messages.slice(0, -1),
        // exclude the user turn we just added
        userText: St,
        attachments: ye.length > 0 ? ye : void 0,
        callbacks: {
          onTextDelta(it) {
            Ht += it, E(Ht);
          },
          onTurnAppended(it) {
            it.role !== "tool" ? (Ht = "", E("")) : te(null), T((_t) => [..._t, it]);
          },
          onOpsApplied() {
          },
          onExperimentApproval(it) {
            var _t;
            return Mt.signal.aborted ? Promise.resolve(!1) : ((_t = se.current) == null || _t.call(se, !1), new Promise((et) => {
              se.current = et, pe(it);
            }));
          },
          onRunApproval(it) {
            var _t;
            return Mt.signal.aborted ? Promise.resolve(!1) : ((_t = se.current) == null || _t.call(se, !1), new Promise((et) => {
              se.current = et, K(it);
            }));
          },
          onRunProgress(it) {
            te(e_(it));
          },
          onTurnsCommitted(it) {
            E(""), Ht = "", T([]), Re = { ...Re, messages: [...Re.messages, ...it], updatedAt: Date.now() }, u(Re), zh(a, Re);
          },
          onError(it) {
            X(it), E(""), Ht = "";
          },
          onFinished() {
            var it;
            (it = se.current) == null || it.call(se, !1), se.current = null, pe(null), K(null), te(null), b(!1), ie.current = null;
          }
        },
        signal: Mt.signal
      });
    },
    [a, v, l, u, ve, r]
  ), ai = () => Ye(m, Ve), ar = (H) => {
    H.key === "Enter" && !H.shiftKey && (H.preventDefault(), Ye(m, Ve));
  }, Nt = () => {
    var H, ye;
    (H = se.current) == null || H.call(se, !1), se.current = null, pe(null), K(null), (ye = ie.current) == null || ye.abort();
  }, js = (H) => {
    const ye = se.current;
    se.current = null, pe(null), ye == null || ye(H);
  }, ir = (H) => {
    const ye = se.current;
    se.current = null, K(null), ye == null || ye(H);
  }, ws = () => Ye(P, ce), ii = B.length > 0 ? [...l.messages, ...B] : l.messages, ri = d_(ii), rr = ri.length === 0 && !v, sr = ri[ri.length - 1], lr = sr == null ? void 0 : sr.stages.find((H) => !H.result), At = v && R === "" && !!!lr && !ee && !w, un = B.filter(
    (H) => {
      var ye;
      return H.role === "assistant" && (((ye = H.tool_calls) == null ? void 0 : ye.length) ?? 0) > 0;
    }
  ).length, jt = ee || w ? "Waiting for approval" : M || (R !== "" ? "Writing reply" : lr ? $y(lr).label : "Thinking"), ta = r.provider, or = r.models[ta] ?? "", Qt = Pl(ta, or), li = (($s = (na = r.providerCapabilities) == null ? void 0 : na[ta]) == null ? void 0 : $s.reasoningEffort) === !0, Ca = d && li ? (Qt == null ? void 0 : Qt.reasoningEfforts) ?? [] : [], Jt = ((cr = r.reasoningEfforts) == null ? void 0 : cr[ta]) ?? "", vn = (H) => {
    A(!1), d == null || d(Ug(r, ta, H));
  }, Da = rr ? Xu(a).filter((H) => H.id !== l.id).length : 0;
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `gcp-chat${re ? " gcp-dragging" : ""}`,
      onDragEnter: xt,
      onDragOver: bt,
      onDragLeave: Tt,
      onDrop: cn,
      children: [
        /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: "gcp-messages",
            role: "log",
            "aria-live": "polite",
            "aria-label": "Conversation",
            ref: Z,
            onScroll: jn,
            children: [
              rr && /* @__PURE__ */ h.jsxs("div", { className: "gcp-welcome", children: [
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-mark", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-title", children: "Build graphs by conversation" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-sub", children: "Describe the pipeline you want, ask for parameter changes, or attach an image, PDF, or code file for context." }),
                ve && /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-suggestions", "aria-label": "Suggested prompts", children: K_.map((H) => /* @__PURE__ */ h.jsx("button", { className: "gcp-suggestion", onClick: () => Ye(H, []), children: H }, H)) }),
                Da > 0 && /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "gcp-welcome-history",
                    onClick: y,
                    "aria-label": "View previous conversations",
                    children: [
                      /* @__PURE__ */ h.jsx(q_, {}),
                      "Previous conversations (",
                      Da,
                      ")"
                    ]
                  }
                )
              ] }),
              ri.map((H) => /* @__PURE__ */ h.jsx(
                Sg,
                {
                  turn: H.turn,
                  stages: H.stages,
                  step: H.step
                },
                H.key
              )),
              v && R !== "" && /* @__PURE__ */ h.jsx(
                Sg,
                {
                  turn: { role: "assistant", content: "" },
                  streaming: !0,
                  streamingText: R
                }
              ),
              At && /* @__PURE__ */ h.jsxs("div", { className: "gcp-thinking", role: "status", "aria-label": "Waiting for the assistant", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-orb", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-text", children: "Thinking" }),
                D >= 3 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-thinking-time", children: [
                  D,
                  "s"
                ] })
              ] }),
              J && !v && /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-row", role: "alert", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-error-icon", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(I_, {}) }),
                /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-body", children: [
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-title", children: "Request failed" }),
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-text", children: J })
                ] }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-retry-btn", onClick: ws, "aria-label": "Retry", children: "Retry" })
              ] })
            ]
          }
        ),
        re && /* @__PURE__ */ h.jsx("div", { className: "gcp-dropzone", "aria-hidden": "true", children: /* @__PURE__ */ h.jsxs("div", { className: "gcp-dropzone-inner", children: [
          /* @__PURE__ */ h.jsx(_g, {}),
          /* @__PURE__ */ h.jsx("span", { children: "Drop files to attach" })
        ] }) }),
        _ && /* @__PURE__ */ h.jsx(
          "button",
          {
            className: "gcp-menu-backdrop",
            "aria-label": "Close menu",
            onClick: () => A(!1)
          }
        ),
        ee && /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-backdrop", children: /* @__PURE__ */ h.jsxs(
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
                ee.executionCount,
                " graph execution",
                ee.executionCount === 1 ? "" : "s",
                "?"
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-hypothesis", children: ee.hypothesis }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-facts", children: [
                /* @__PURE__ */ h.jsxs("span", { children: [
                  ee.variantCount,
                  " variants"
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  ee.repetitions,
                  " repetitions"
                ] }),
                /* @__PURE__ */ h.jsxs("span", { children: [
                  "concurrency ",
                  ee.concurrency
                ] }),
                ee.applyBest && /* @__PURE__ */ h.jsx("span", { children: "parameter winner may be applied" })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-warning", children: "Review the candidate settings below. Credential values are schema-redacted." }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-candidates", "aria-label": "Candidate changes", children: ee.variants.map((H, ye) => /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: H.label }),
                /* @__PURE__ */ h.jsx("span", { children: H.operations.length > 0 ? H.operations.join(" · ") : "baseline — no changes" })
              ] }, `${ye}-${H.label}`)) }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-nodes", children: [
                /* @__PURE__ */ h.jsx("strong", { children: "Nodes that may execute" }),
                /* @__PURE__ */ h.jsx("span", { children: ee.nodeTypes.length > 0 ? ee.nodeTypes.join(", ") : "No typed nodes detected" })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-warning", children: "Candidate edits stay off-canvas, but nodes may write files, call networks, use GPU time, or incur API costs." }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-actions", children: [
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-secondary", onClick: () => js(!1), autoFocus: !0, children: "Cancel" }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-primary", onClick: () => js(!0), children: "Approve and run" })
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
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-secondary", onClick: () => ir(!1), autoFocus: !0, children: "Cancel" }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-primary", onClick: () => ir(!0), children: "Run graph" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-area", children: [
          Y.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-attachments", "aria-label": "Attachments", children: Y.map((H) => {
            var ye;
            return /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: `gcp-chip ${H.kind === "image" ? "image" : "file"} ${H.status}`,
                title: H.status === "error" ? H.error : `${H.name} · ${os(H.size)}`,
                children: [
                  H.kind === "image" && ((ye = H.att) != null && ye.dataUrl) ? /* @__PURE__ */ h.jsx("img", { className: "gcp-chip-thumb", src: H.att.dataUrl, alt: H.name }) : /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-icon", children: /* @__PURE__ */ h.jsx(H_, { kind: H.kind }) }),
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-chip-body", children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-name", children: H.name }),
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-size", children: H.status === "loading" ? "reading…" : H.status === "error" ? "failed" : os(H.size) })
                  ] }),
                  H.status === "loading" && /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-spinner", "aria-hidden": "true" }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "gcp-chip-remove",
                      onClick: () => he(H.id),
                      "aria-label": `Remove ${H.name}`,
                      title: "Remove",
                      children: /* @__PURE__ */ h.jsx(G_, {})
                    }
                  )
                ]
              },
              H.id
            );
          }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-row", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: ne,
                type: "file",
                multiple: !0,
                className: "gcp-file-input",
                onChange: Ke,
                "aria-hidden": "true",
                tabIndex: -1
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-attach-btn",
                onClick: () => {
                  var H;
                  return (H = ne.current) == null ? void 0 : H.click();
                },
                disabled: !ve || v,
                "aria-label": "Attach files",
                title: "Attach image, PDF, or text/code",
                children: /* @__PURE__ */ h.jsx(_g, {})
              }
            ),
            /* @__PURE__ */ h.jsx(
              "textarea",
              {
                ref: L,
                className: "gcp-textarea",
                rows: 1,
                placeholder: "Message Graph Copilot…",
                value: m,
                onChange: (H) => g(H.target.value),
                onKeyDown: ar,
                onPaste: at,
                disabled: v || !ve,
                "aria-label": "Message input",
                "aria-disabled": ve ? void 0 : "true"
              }
            ),
            v ? /* @__PURE__ */ h.jsx("button", { className: "gcp-stop-btn", onClick: Nt, "aria-label": "Stop generation", title: "Stop", children: /* @__PURE__ */ h.jsx(V_, {}) }) : /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-send-btn",
                onClick: ai,
                disabled: !yn,
                "aria-label": "Send message",
                title: "Send",
                children: /* @__PURE__ */ h.jsx(B_, {})
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-composer-bar", children: [
            /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-context", children: Ca.length > 0 ? /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: "gcp-effort",
                onKeyDown: (H) => {
                  H.key === "Escape" && A(!1);
                },
                children: [
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      className: `gcp-context-chip${_ ? " open" : ""}`,
                      onClick: () => A((H) => !H),
                      "aria-haspopup": "menu",
                      "aria-expanded": _,
                      "aria-label": "Model and reasoning effort",
                      title: "Adjust reasoning effort",
                      children: [
                        /* @__PURE__ */ h.jsx(k_, {}),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: or || "model" }),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-effort", children: Jt || (Qt == null ? void 0 : Qt.defaultReasoningEffort) || "auto" })
                      ]
                    }
                  ),
                  _ && /* @__PURE__ */ h.jsxs("div", { className: "gcp-effort-menu", role: "menu", "aria-label": "Reasoning effort", children: [
                    /* @__PURE__ */ h.jsx("div", { className: "gcp-effort-menu-title", children: "Reasoning effort" }),
                    Ca.map((H) => /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": Jt === H.effort,
                        className: `gcp-effort-item${Jt === H.effort ? " selected" : ""}`,
                        onClick: () => vn(H.effort),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-name", children: H.effort }),
                          H.description && /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-desc", children: H.description }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: Jt === H.effort && /* @__PURE__ */ h.jsx(Eg, {}) })
                        ]
                      },
                      H.effort
                    )),
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": Jt === "",
                        className: `gcp-effort-item${Jt === "" ? " selected" : ""}`,
                        onClick: () => vn(""),
                        children: [
                          /* @__PURE__ */ h.jsxs("span", { className: "gcp-effort-item-name", children: [
                            "model default",
                            Qt != null && Qt.defaultReasoningEffort ? ` (${Qt.defaultReasoningEffort})` : ""
                          ] }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: Jt === "" && /* @__PURE__ */ h.jsx(Eg, {}) })
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
                          A(!1), f();
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
                title: `Provider: ${ta} — open settings`,
                children: /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: or || "set up model" })
              }
            ) }),
            v ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-runbar", role: "status", "aria-label": "Agent activity", children: [
              /* @__PURE__ */ h.jsx("span", { className: "gcp-runbar-pulse", "aria-hidden": "true" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-phase", children: [
                jt,
                "…"
              ] }),
              un > 0 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-step", children: [
                "step ",
                un
              ] }),
              D >= 1 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-time", children: [
                D,
                "s"
              ] })
            ] }) : /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-hint", "aria-hidden": "true", children: "Enter ↵ send · Shift+Enter newline" })
          ] }),
          !ve && !v && /* @__PURE__ */ h.jsxs("div", { className: "gcp-not-ready-overlay", children: [
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
const X_ = "Imported portable-study content passed SHA-256 integrity checking, which detects content changes but does not authenticate its author or evidence source. It is read-only and was not executed in this browser session.";
function Es(a, r) {
  return a < r ? -1 : a > r ? 1 : 0;
}
function Q_(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.value]).sort(([r], [s]) => Es(r, s))
  );
}
function J_(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.canonicalKey]).sort(([r], [s]) => Es(r, s))
  );
}
function Z_(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.source]).sort(([r], [s]) => Es(r, s))
  );
}
function F_(a, r) {
  if (r.metricKey !== void 0)
    return a.metrics.find((s) => s.canonicalKey === r.metricKey);
}
function W_(a, r) {
  const s = F_(a, r), l = a.status === "completed" ? void 0 : a.status === "cancelled" ? `Imported run was cancelled [${a.error.phase}/${a.error.code}]: ${a.error.message}` : `Imported run failed [${a.error.phase}/${a.error.code}]: ${a.error.message}`;
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
    observedMetrics: Q_(a.metrics),
    ...a.metrics.length === 0 ? {} : {
      observedMetricIdentities: J_(a.metrics),
      observedMetricSources: Z_(a.metrics)
    },
    ...l === void 0 ? {} : { error: l }
  };
}
function P_(a, r) {
  const s = r.filter((l) => l.variantId === a.id).sort((l, u) => l.repetition - u.repetition || Es(l.runKey, u.runKey)).map((l) => W_(l, a));
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
      a.observedMetrics.map(({ key: l, value: u }) => [l, u]).sort(([l], [u]) => Es(l, u))
    ),
    // Always supply an array, including an empty one. Omitting it would make
    // legacy export code synthesize attempts from aggregate metricValues.
    runs: s,
    ...a.operationSummary === void 0 ? {} : { operationSummary: [...a.operationSummary] },
    errors: [...a.errors]
  };
}
function eE(a) {
  return {
    title: a.title,
    evidence: a.evidence,
    nextStep: a.nextStep
  };
}
function tE(a) {
  const r = a.payload.provenance.facts.find((s) => s.key === "optimizer.plan" && s.status === "observed");
  if (!(!r || !Td(r.value)))
    return JSON.parse(JSON.stringify(r.value));
}
function nE(a) {
  const { payload: r } = a, { derived: s, spec: l } = r, u = tE(a);
  return {
    id: r.id,
    createdAt: r.createdAt,
    hypothesis: l.hypothesis,
    objective: { ...l.objective },
    repetitions: l.repetitions,
    status: s.status,
    variants: s.variants.map((d) => P_(d, r.runs)),
    ...u === void 0 ? {} : { search: u },
    ...s.baselineVariantId === void 0 ? {} : { baselineVariantId: s.baselineVariantId },
    ...s.winnerId === void 0 ? {} : { winnerId: s.winnerId },
    ...s.winnerLabel === void 0 ? {} : { winnerLabel: s.winnerLabel },
    ...s.appliedVariantId === void 0 ? {} : { appliedVariantId: s.appliedVariantId },
    ...s.applyConflict === void 0 ? {} : { applyConflict: s.applyConflict },
    insights: {
      summary: [...s.insights.summary],
      warnings: [...s.insights.warnings, X_],
      paperIdeas: s.insights.paperIdeas.map(eE)
    }
  };
}
function wa(a) {
  return !!a && typeof a == "object" && !Array.isArray(a);
}
function aE(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function Ty(a) {
  return wa(a) && typeof a.$gcpSecretRef == "string";
}
function xs(a, r) {
  if (Ty(a)) {
    const s = a.$gcpSecretRef;
    return aE(r.bindings, s) && typeof r.bindings[s] == "string" ? (r.resolved.add(s), r.bindings[s]) : (r.missing.add(s), "");
  }
  if (Array.isArray(a))
    return a.map((s) => xs(s, r));
  if (wa(a)) {
    const s = /* @__PURE__ */ Object.create(null);
    for (const [l, u] of Object.entries(a))
      s[l] = xs(u, r);
    return s;
  }
  return a;
}
function od(a, r) {
  return xs(a, r);
}
function iE(a, r) {
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
    presets: a.presets === void 0 ? [] : xs(a.presets, r),
    segmentGroups: a.segmentGroups === void 0 ? [] : xs(a.segmentGroups, r)
  };
}
function xg(a, r) {
  return a.nodes.some((s) => s.id === r);
}
function Yi(a, r, s) {
  const l = r[s];
  return l !== void 0 && xg(a, l) ? l : xg(a, s) ? s : null;
}
function rE(a) {
  return encodeURIComponent(a);
}
function sE(a, r) {
  let s = a, l = 1;
  for (; r.has(s); )
    s = `${a}~${l}`, l += 1;
  return r.add(s), s;
}
function Ng(a, r, s, l) {
  return sE(
    `graph-copilot:${rE(a)}:${r}:${s}`,
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
function lE(a, r, s, l, u, d, f) {
  if (!wa(r) || typeof r.op != "string")
    return Zn(s, "operation must be an object with an op string");
  switch (r.op) {
    case "add_node": {
      const y = Qn(r, "node_type", s);
      if (Jn(y)) return y;
      if (r.ref !== void 0 && typeof r.ref != "string")
        return Zn(s, "ref must be a string when provided");
      if (r.params !== void 0 && !wa(r.params))
        return Zn(s, "params must be an object when provided");
      if (r.position !== void 0 && (!wa(r.position) || typeof r.position.x != "number" || !Number.isFinite(r.position.x) || typeof r.position.y != "number" || !Number.isFinite(r.position.y)))
        return Zn(s, "position must contain finite x and y numbers");
      const m = Ng(l, "node", s, d), g = a.nodes.length, v = {
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
      }), typeof r.ref == "string" && (u[r.ref] = m), null;
    }
    case "connect": {
      const y = Qn(r, "source", s), m = Qn(r, "target", s), g = Qn(r, "source_handle", s), v = Qn(r, "target_handle", s);
      if (Jn(y)) return y;
      if (Jn(m)) return m;
      if (Jn(g)) return g;
      if (Jn(v)) return v;
      const b = Yi(a, u, y), _ = Yi(a, u, m);
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
      const A = g === "trigger", R = A ? "__trigger" : v;
      return a.edges.some((E) => E.source === b && E.target === _ && E.sourceHandle === g && E.targetHandle === R) ? {
        code: "DUPLICATE_EDGE",
        operationIndex: s,
        message: "connect: edge already exists"
      } : (a.edges.push({
        id: Ng(l, "edge", s, d),
        source: b,
        target: _,
        sourceHandle: g,
        targetHandle: R,
        type: A ? "trigger" : "data"
      }), null);
    }
    case "set_params": {
      const y = Qn(r, "node_id", s);
      if (Jn(y)) return y;
      if (!wa(r.params))
        return Zn(s, "params must be an object");
      const m = Yi(a, u, y);
      if (m === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: s,
          message: `set_params: unknown node '${y}'`
        };
      const g = a.nodes.find((b) => b.id === m), v = wa(g.data.params) ? g.data.params : {};
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
      const m = Yi(a, u, y);
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
      const g = Yi(a, u, y), v = Yi(a, u, m);
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
      for (const y of Object.keys(u)) delete u[y];
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
function Ag(a, r, s) {
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
function oE(a, r, s = {}) {
  const l = a.payload.spec.variants.find((b) => b.id === r);
  if (l === void 0)
    return Ag(r, {
      code: "VARIANT_NOT_FOUND",
      message: `Unknown study variant '${r}'`
    });
  const u = {
    bindings: s,
    missing: /* @__PURE__ */ new Set(),
    resolved: /* @__PURE__ */ new Set()
  }, d = iE(a.payload.spec.baseline, u), f = {}, y = /* @__PURE__ */ new Set([
    ...d.nodes.map((b) => b.id),
    ...d.edges.map((b) => b.id)
  ]);
  for (let b = 0; b < l.operations.length; b += 1) {
    const _ = lE(
      d,
      l.operations[b],
      b,
      l.id,
      f,
      y,
      u
    );
    if (_ !== null) return Ag(r, _, l.label);
  }
  const m = [...u.missing].sort(), g = l.operations.some((b) => b.op === "add_node"), v = g ? [
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
    sensitive: u.resolved.size > 0
  };
}
function cd(a) {
  return Ty(a) ? !0 : Array.isArray(a) ? a.some(cd) : wa(a) && Object.values(a).some(cd);
}
function cE(a) {
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
    return Ey(a);
  } catch {
    return [];
  }
}
function uE(a) {
  const r = new Date(a);
  return Number.isNaN(r.getTime()) ? "Date unavailable" : new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(r);
}
function Qi(a) {
  if (a === void 0 || !Number.isFinite(a)) return "—";
  const r = Math.abs(a);
  return r !== 0 && (r >= 1e5 || r < 1e-4) ? a.toExponential(3) : new Intl.NumberFormat(void 0, { maximumSignificantDigits: 6 }).format(a);
}
function jg(a) {
  return a === void 0 || !Number.isFinite(a) ? "—" : `${a > 0 ? "+" : ""}${Qi(a)}`;
}
function dE(a) {
  return !Number.isFinite(a) || a < 0 ? "—" : a < 1e3 ? `${Math.round(a)} ms` : `${(a / 1e3).toFixed(a < 1e4 ? 1 : 0)} s`;
}
function fE(a) {
  return [...a.variants ?? []].sort((r, s) => r.mean === void 0 ? s.mean === void 0 ? 0 : 1 : s.mean === void 0 ? -1 : a.objective.direction === "maximize" ? s.mean - r.mean : r.mean - s.mean);
}
function wg(a) {
  var s, l;
  const r = [];
  return a.variants.forEach((u) => {
    if (u.runs) {
      r.push(...u.runs.map((d) => ({
        variantId: u.id,
        variantLabel: u.label,
        repetition: d.repetition,
        status: d.status,
        metricKey: d.metricKey,
        metricValue: d.metricValue,
        runtimeMs: d.durationMs,
        error: d.error
      })));
      return;
    }
    r.push(...u.metricValues.map((d, f) => ({
      variantId: u.id,
      variantLabel: u.label,
      repetition: f + 1,
      status: "completed",
      metricKey: u.metricKey,
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
function Xl(a, r, s) {
  const l = URL.createObjectURL(new Blob([s], { type: `${r};charset=utf-8` })), u = document.createElement("a");
  u.href = l, u.download = a, u.style.display = "none", document.body.appendChild(u), u.click(), u.remove(), URL.revokeObjectURL(l);
}
function ns(a) {
  return a.replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "") || "graph-copilot-study";
}
function ku({ status: a }) {
  return /* @__PURE__ */ h.jsx("span", { className: `gcp-lab-badge ${a}`, children: a });
}
function pE() {
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
function mE({ api: a }) {
  var ue, Y, Q, re, fe, ee, pe, w, K;
  const [r, s] = ae.useState(() => Iu(a)), [l, u] = ae.useState(() => {
    var M;
    return ((M = Iu(a)[0]) == null ? void 0 : M.id) ?? null;
  }), [d, f] = ae.useState(null), [y, m] = ae.useState(!1), [g, v] = ae.useState(null), [b, _] = ae.useState(null), [A, R] = ae.useState(null), [E, B] = ae.useState(!1), T = ae.useRef(null);
  ae.useEffect(() => {
    const M = () => {
      const te = Iu(a);
      s(te), u((Z) => {
        var x;
        return Z && te.some((L) => L.id === Z) ? Z : ((x = te[0]) == null ? void 0 : x.id) ?? null;
      });
    };
    return window.addEventListener(td, M), () => window.removeEventListener(td, M);
  }, [a]);
  const D = r.find((M) => M.id === l) ?? r[0], V = D && (d == null ? void 0 : d.payload.id) === D.id ? d : null, J = ae.useMemo(() => D ? fE(D) : [], [D]);
  ae.useEffect(() => {
    let M = !0;
    return f(null), m(!1), D ? dS(a).entries.some((Z) => Z.id === D.id) ? (m(!0), eg(a, D.id).then((Z) => {
      M && f(Z);
    }).catch((Z) => {
      M && v(`Portable study could not be verified: ${String(Z)}`);
    }).finally(() => {
      M && m(!1);
    }), () => {
      M = !1;
    }) : () => {
      M = !1;
    } : () => {
      M = !1;
    };
  }, [a, D == null ? void 0 : D.id]);
  const X = async (M) => {
    var Z;
    const te = (Z = M.currentTarget.files) == null ? void 0 : Z[0];
    if (M.currentTarget.value = "", !!te) {
      R(null), v(null);
      try {
        if (typeof te.size == "number" && te.size > ro)
          throw new Error(`Portable study exceeds the ${ro} byte import limit`);
        const x = await uS(await te.text());
        _(x);
      } catch (x) {
        _(null), R(`Import rejected before storage: ${String(x)}`);
      }
    }
  }, P = async () => {
    if (!b) return;
    B(!0), R(null);
    let M = !1;
    try {
      if (Ey(a).some((x) => x.id === b.payload.id))
        throw new Error(
          `A local Experiment Lab report already uses study id '${b.payload.id}'; import was refused to avoid overwriting local evidence.`
        );
      const te = nE(b), Z = await yy(a, b);
      M = !0, await xy(a, te, { rejectIfExists: !0 }), u(te.id), f(b), _(null), v(Z.status === "unchanged" ? "This content-integrity-checked portable study was already stored; its read-only report was added." : "Portable study imported for read-only review. SHA-256 checks content changes only; it does not authenticate authorship. No graph was executed or applied.");
    } catch (te) {
      R(M ? `The content-integrity-checked bundle was stored, but its read-only Lab report could not be saved. Retry the import: ${String(te)}` : `Portable study was not imported: ${String(te)}`);
    } finally {
      B(!1);
    }
  }, q = async () => {
    if (D)
      try {
        const M = V ?? await eg(a, D.id);
        f(M), Xl(
          `${ns(D.id)}-portable-study.json`,
          "application/json",
          await _d(M)
        ), v("Portable study content integrity checked before export; SHA-256 does not authenticate authorship.");
      } catch (M) {
        v(`Portable study export failed: ${String(M)}`);
      }
  }, ce = (M, te) => {
    var Z;
    if (V)
      try {
        const x = oE(V, M);
        if (x.status === "error" || !x.graph)
          throw new Error(((Z = x.errors[0]) == null ? void 0 : Z.message) ?? "Candidate could not be reconstructed");
        Xl(
          `${ns(V.payload.id)}-${ns(te)}-graph.json`,
          "application/json",
          cE(x.graph)
        );
        const L = x.status === "blocked" ? `Candidate graph downloaded with ${x.missingSecretRefs.length} unresolved secret value(s) left blank.` : "Candidate graph materialized from the content-integrity-checked portable operation record and downloaded.";
        v(x.fidelityWarnings.length === 0 ? L : `${L} Fidelity warning: ${x.fidelityWarnings.join(" ")}`);
      } catch (x) {
        v(`Candidate graph export failed: ${String(x)}`);
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
          var M;
          return (M = T.current) == null ? void 0 : M.click();
        }, children: "Import portable study" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            ref: T,
            type: "file",
            accept: "application/json,.json",
            "aria-label": "Choose portable study file",
            hidden: !0,
            onChange: (M) => {
              X(M);
            }
          }
        )
      ] })
    ] }),
    A && !b && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message error", role: "alert", children: A }),
    g && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message", role: "status", children: g }),
    r.length === 0 || !D ? /* @__PURE__ */ h.jsx(pE, {}) : /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-layout", children: [
      /* @__PURE__ */ h.jsx("aside", { className: "gcp-lab-studies", "aria-label": "Experiment studies", children: r.map((M) => {
        var te, Z, x;
        return /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: `gcp-study-card${M.id === D.id ? " active" : ""}`,
            onClick: () => {
              v(null), u(M.id);
            },
            "aria-pressed": M.id === D.id,
            children: [
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-top", children: [
                /* @__PURE__ */ h.jsx(ku, { status: M.status }),
                /* @__PURE__ */ h.jsx("time", { dateTime: M.createdAt, children: uE(M.createdAt) })
              ] }),
              /* @__PURE__ */ h.jsx("strong", { children: M.hypothesis || "Untitled study" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-meta", children: [
                ((te = M.objective) == null ? void 0 : te.direction) === "minimize" ? "↓" : "↑",
                " ",
                ((Z = M.objective) == null ? void 0 : Z.metric) || "metric",
                /* @__PURE__ */ h.jsx("span", { "aria-hidden": "true", children: " · " }),
                ((x = M.variants) == null ? void 0 : x.length) ?? 0,
                " candidates"
              ] })
            ]
          },
          M.id
        );
      }) }),
      /* @__PURE__ */ h.jsxs("article", { className: "gcp-lab-report", "aria-label": `Experiment report: ${D.hypothesis}`, children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-report-head", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Study hypothesis" }),
            /* @__PURE__ */ h.jsx("h2", { children: D.hypothesis })
          ] }),
          /* @__PURE__ */ h.jsx(ku, { status: D.status })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-export-actions", "aria-label": "Export study evidence", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Xl(
                `${ns(D.id)}-runs.csv`,
                "text/csv",
                J0(wg(D))
              ),
              children: "Export runs CSV"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Xl(
                `${ns(D.id)}-research.md`,
                "text/markdown",
                F0(wg(D))
              ),
              children: "Export research brief"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              disabled: !V || y,
              title: V ? "Export the SHA-256 content-integrity-checked baseline, variants, provenance, and run records" : "No portable bundle is available for this legacy summary",
              onClick: () => {
                q();
              },
              children: y ? "Verifying portable study…" : "Export portable study"
            }
          )
        ] }),
        V && /* @__PURE__ */ h.jsxs("p", { className: "gcp-lab-integrity", children: [
          "Content integrity checked · SHA-256 ",
          V.integrity.contentSha256.slice(0, 12),
          "… · authorship unverified"
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-summary-grid", children: [
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card", "aria-labelledby": "gcp-study-objective", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon objective", "aria-hidden": "true", children: "◎" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-objective", children: "Study objective" }),
              /* @__PURE__ */ h.jsxs("strong", { children: [
                D.objective.direction === "maximize" ? "Maximize" : "Minimize",
                " ",
                D.objective.metric
              ] }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                D.repetitions,
                " ",
                D.repetitions === 1 ? "run" : "runs",
                " per candidate"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card winner", "aria-labelledby": "gcp-study-winner", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon winner", "aria-hidden": "true", children: "★" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-winner", children: "Winning candidate" }),
              /* @__PURE__ */ h.jsx("strong", { children: D.winnerLabel ?? "No winner resolved" }),
              /* @__PURE__ */ h.jsx("span", { children: D.winnerId ? `${Qi((ue = D.variants.find((M) => M.id === D.winnerId)) == null ? void 0 : ue.mean)} mean score` : "Check warnings for missing evidence" })
            ] })
          ] })
        ] }),
        D.search && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-search-plan", "aria-label": "Deterministic parameter search plan", children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Reproducible planner" }),
          /* @__PURE__ */ h.jsx("strong", { children: D.search.strategy === "grid" ? "Complete grid" : "Seeded random" }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            D.search.generatedCandidateCount,
            " generated candidates · ",
            " ",
            D.search.totalDomainAssignments,
            " domain assignments · ",
            " ",
            D.search.totalExecutionCount,
            " executions",
            D.search.plannerSeed === void 0 ? "" : ` · planner seed ${D.search.plannerSeed} (${D.search.prngVersion})`
          ] }),
          /* @__PURE__ */ h.jsx("small", { children: D.search.seedDescription })
        ] }),
        ((Q = (Y = D.insights) == null ? void 0 : Y.summary) == null ? void 0 : Q.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-findings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-findings", children: "Key findings" }) }),
          /* @__PURE__ */ h.jsx("ul", { className: "gcp-lab-findings", children: D.insights.summary.map((M, te) => /* @__PURE__ */ h.jsx("li", { children: M }, `${te}-${M}`)) })
        ] }),
        /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-candidate-leaderboard", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-candidate-leaderboard", children: "Candidate leaderboard" }),
            /* @__PURE__ */ h.jsx("span", { children: D.objective.direction === "maximize" ? "Higher is better" : "Lower is better" })
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
            /* @__PURE__ */ h.jsx("tbody", { children: J.map((M, te) => {
              var x, L;
              const Z = M.id === D.winnerId;
              return /* @__PURE__ */ h.jsxs("tr", { className: Z ? "winner" : void 0, children: [
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx("span", { className: "gcp-rank", children: M.mean === void 0 ? "—" : te + 1 }) }),
                /* @__PURE__ */ h.jsxs("td", { children: [
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-candidate-name", children: [
                    /* @__PURE__ */ h.jsx("strong", { children: M.label }),
                    Z && /* @__PURE__ */ h.jsx("span", { className: "gcp-winner-tag", children: "Winner" }),
                    M.status !== "completed" && /* @__PURE__ */ h.jsx(ku, { status: M.status })
                  ] }),
                  M.operationSummary && M.operationSummary.length > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-operations", children: M.operationSummary.join(" · ") }),
                  ((x = M.errors) == null ? void 0 : x.length) > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-error", children: M.errors[0] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: Qi(M.mean) }),
                  M.baselineComparison && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "improvement ",
                    jg(M.baselineComparison.objectiveImprovement),
                    M.baselineComparison.hedgesG === void 0 ? "" : ` · g ${jg(M.baselineComparison.hedgesG)}`
                  ] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: M.stddev === void 0 ? "—" : `± ${Qi(M.stddev)}` }),
                  M.confidenceInterval95 && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "95% CI [",
                    Qi(M.confidenceInterval95.lower),
                    ", ",
                    Qi(M.confidenceInterval95.upper),
                    "]"
                  ] })
                ] }),
                /* @__PURE__ */ h.jsx("td", { children: ((L = M.metricValues) == null ? void 0 : L.length) ?? 0 }),
                /* @__PURE__ */ h.jsx("td", { children: dE(M.runtimeMs) }),
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    type: "button",
                    className: "gcp-candidate-download",
                    disabled: !V,
                    title: V ? "Materialize a graph JSON without changing the canvas; recorded fidelity warnings will be shown" : "This legacy summary has no portable candidate specification",
                    onClick: () => ce(M.id, M.label),
                    children: "Download"
                  }
                ) })
              ] }, M.id);
            }) })
          ] }) })
        ] }),
        (((fe = (re = D.insights) == null ? void 0 : re.warnings) == null ? void 0 : fe.length) > 0 || D.applyConflict) && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-warnings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-warnings", children: "Evidence warnings" }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-warnings", children: [
            D.applyConflict && /* @__PURE__ */ h.jsx("p", { role: "alert", children: D.applyConflict }),
            (pe = (ee = D.insights) == null ? void 0 : ee.warnings) == null ? void 0 : pe.map((M, te) => /* @__PURE__ */ h.jsx("p", { role: "alert", children: M }, `${te}-${M}`))
          ] })
        ] }),
        ((K = (w = D.insights) == null ? void 0 : w.paperIdeas) == null ? void 0 : K.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-paper-ideas", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-paper-ideas", children: "Paper ideas" }),
            /* @__PURE__ */ h.jsx("span", { children: "Research leads, not final claims" })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "gcp-paper-grid", children: D.insights.paperIdeas.map((M, te) => /* @__PURE__ */ h.jsxs("article", { className: "gcp-paper-card", children: [
            /* @__PURE__ */ h.jsxs("span", { className: "gcp-paper-index", children: [
              "0",
              te + 1
            ] }),
            /* @__PURE__ */ h.jsx("h4", { children: M.title }),
            /* @__PURE__ */ h.jsxs("dl", { children: [
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("dt", { children: "Evidence" }),
                /* @__PURE__ */ h.jsx("dd", { children: M.evidence })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("dt", { children: "Next step" }),
                /* @__PURE__ */ h.jsx("dd", { children: M.nextStep })
              ] })
            ] })
          ] }, `${te}-${M.title}`)) })
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
          A && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message error", role: "alert", children: A }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-study-import-actions", children: [
            /* @__PURE__ */ h.jsx("button", { type: "button", onClick: () => _(null), disabled: E, children: "Cancel" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "primary", onClick: () => {
              P();
            }, disabled: E, children: E ? "Importing…" : "Import read-only" })
          ] })
        ]
      }
    ) })
  ] });
}
function hE(a) {
  const r = Date.now() - a, s = Math.floor(r / 1e3);
  if (s < 60) return "just now";
  const l = Math.floor(s / 60);
  if (l < 60) return `${l}m ago`;
  const u = Math.floor(l / 60);
  if (u < 24) return `${u}h ago`;
  const d = Math.floor(u / 24);
  return d < 7 ? `${d}d ago` : `${Math.floor(d / 7)}w ago`;
}
function gE({ api: a, activeId: r, onResume: s, onNew: l }) {
  const [u, d] = ae.useState(
    () => Xu(a)
  ), [f, y] = ae.useState(null), m = (v, b) => {
    v.stopPropagation(), f === b ? (b0(a, b), d(Xu(a)), f === b && y(null)) : y(b);
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
    u.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "gcp-history-empty", children: "No conversations yet" }) : /* @__PURE__ */ h.jsx("div", { className: "gcp-history-list", onClick: g, children: u.map((v) => /* @__PURE__ */ h.jsxs(
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
              hE(v.updatedAt),
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
let Ns = 0, ud = 0, ls = null;
function as() {
  return Ns += 1, ud += 1, ls = null, Ns;
}
function Ql(a) {
  return a === Ns;
}
async function dd(a) {
  const r = Ns;
  let s = ls;
  (s === null || s.generation !== r) && (s = {
    generation: r,
    sequence: ++ud,
    promise: Promise.resolve().then(a)
  }, ls = s);
  try {
    const l = await s.promise;
    return s.generation === Ns && s.sequence === ud ? l : null;
  } finally {
    ls === s && (ls = null);
  }
}
const $g = {
  openai: "OpenAI API",
  "openai-codex": "OpenAI Codex (ChatGPT)",
  openrouter: "OpenRouter",
  anthropic: "Claude API",
  custom: "Custom (OpenAI-compatible)"
}, yE = [
  "openai",
  "openrouter",
  "anthropic",
  "custom"
], vE = 2e3, bE = 300 * 1e3, is = {
  reasoningEffort: !1,
  richModelCatalog: !1
};
function SE({
  value: a,
  onBlur: r,
  placeholder: s,
  "aria-label": l
}) {
  const [u, d] = ae.useState(!1), [f, y] = ae.useState(a);
  return ae.useEffect(() => {
    y(a);
  }, [a]), /* @__PURE__ */ h.jsxs("div", { className: "gcp-key-row", children: [
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: u ? "text" : "password",
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
        "aria-label": u ? "Hide key" : "Show key",
        title: u ? "Hide" : "Show",
        children: u ? "Hide" : "Show"
      }
    )
  ] });
}
function _E({
  api: a,
  settings: r,
  codexLoggedIn: s,
  codexEmail: l,
  onCodexStatusChange: u,
  onChange: d
}) {
  var yn, jn, wn;
  const f = r.provider, y = f === "openai" ? r.apiKeys.openai : f === "openrouter" ? r.apiKeys.openrouter : f === "anthropic" ? r.apiKeys.anthropic : f === "custom" ? r.apiKeys.custom : void 0, m = f === "custom" ? r.customBaseUrl : void 0, g = Jl(
    f,
    f === "openai-codex" ? l ?? (s ? "active-codex-session" : "") : y,
    m
  ), [v, b] = ae.useState({ provider: f, identity: g, models: [] }), [_, A] = ae.useState(!1), [R, E] = ae.useState(null), B = ae.useRef(0), T = ae.useRef(r), D = ae.useRef(d), V = ae.useRef(u), J = ae.useRef(s), X = ae.useRef(l), P = ae.useRef(s), [q, ce] = ae.useState(null), [ue, Y] = ae.useState(!1), Q = ae.useRef(null), re = ae.useRef(0);
  T.current = r, D.current = d, V.current = u, J.current = s, X.current = l;
  const fe = r.models[f] ?? "", ee = Cg(
    f,
    v.provider === f && v.identity === g ? v.models : [],
    fe
  ), pe = Pl(f, fe, ee), K = ((jn = (yn = r.providerCapabilities) == null ? void 0 : yn[f]) == null ? void 0 : jn.reasoningEffort) === !0 ? (pe == null ? void 0 : pe.reasoningEfforts) ?? [] : [];
  ae.useEffect(() => () => {
    Q.current !== null && (clearInterval(Q.current), Q.current = null);
  }, []), ae.useEffect(() => {
    let F = !0;
    return f === "openai-codex" && dd(() => Qu(a)).then((he) => {
      if (F && he !== null) {
        const Ke = he.status === "logged_in", at = Ke ? he.email ?? null : null;
        (Ke !== J.current || at !== X.current) && (rs("openai-codex"), ie("openai-codex", [], is)), V.current(Ke, at);
      }
    }).catch(() => {
    }), () => {
      F = !1;
    };
  }, [a, f]), ae.useEffect(() => {
    P.current && !s && rs("openai-codex"), P.current = s;
  }, [s]);
  function M(F) {
    const he = { ...T.current, ...F };
    T.current = he, D.current(he);
  }
  function te(F) {
    var Ye, ai;
    const he = T.current, Ke = { ...he.reasoningEfforts }, at = Ke[f], xt = Pl(f, F, ee), bt = !!((Ye = xt == null ? void 0 : xt.reasoningEfforts) != null && Ye.some(
      (ar) => ar.effort === at
    ));
    at && (xt != null && xt.reasoningEfforts) && !bt && delete Ke[f];
    const Tt = (ai = he.providerCapabilities) == null ? void 0 : ai[f], cn = Tt ? {
      reasoningEffort: Tt.reasoningEffort,
      richModelCatalog: Tt.richModelCatalog,
      ...at && bt ? { reasoningModel: F } : {}
    } : void 0;
    M({
      models: { ...he.models, [f]: F },
      reasoningEfforts: Ke,
      ...cn ? {
        providerCapabilities: {
          ...he.providerCapabilities,
          [f]: cn
        }
      } : {}
    });
  }
  function Z(F) {
    const he = Ug(
      T.current,
      f,
      F
    );
    T.current = he, D.current(he);
  }
  function x(F, he) {
    const Ke = T.current, at = { ...Ke.providerCapabilities };
    delete at[F], M({
      apiKeys: { ...Ke.apiKeys, [F]: he },
      providerCapabilities: at
    });
  }
  function L(F) {
    return F === "openai" ? T.current.apiKeys.openai : F === "openrouter" ? T.current.apiKeys.openrouter : F === "anthropic" ? T.current.apiKeys.anthropic : F === "custom" ? T.current.apiKeys.custom : void 0;
  }
  function ne(F) {
    return Jl(
      F,
      F === "openai-codex" ? X.current ?? (J.current ? "active-codex-session" : "") : L(F),
      F === "custom" ? T.current.customBaseUrl : void 0
    );
  }
  function ie(F, he, Ke, at) {
    const xt = T.current, bt = Yu(
      xt,
      F,
      he,
      Ke,
      at
    );
    bt !== xt && (T.current = bt, D.current(bt));
  }
  async function se(F, he = f) {
    const Ke = L(he), at = he === "custom" ? T.current.customBaseUrl : void 0, xt = he === "openai-codex" ? J.current : he === "custom" ? !!at : !!Ke, bt = ne(he), Tt = ++B.current;
    if (!xt) {
      A(!1), E(null), b({ provider: he, identity: bt, models: [] }), ie(he, [], is);
      return;
    }
    const cn = bt;
    if (!F) {
      const Ye = Dg(cn);
      if (Ye) {
        if (B.current !== Tt) return;
        b({ provider: he, identity: bt, models: Ye.models }), ie(
          he,
          Ye.models,
          Ye.capabilities,
          Ye.source
        ), E(null), A(!1);
        return;
      }
    }
    A(!0), E(null);
    try {
      const Ye = await Ig(
        a,
        he,
        Ke,
        at
      );
      if (B.current !== Tt) return;
      zg(cn, Ye), b({ provider: he, identity: bt, models: Ye.models }), ie(
        he,
        Ye.models,
        Ye.capabilities,
        Ye.source
      );
    } catch (Ye) {
      if (B.current !== Tt) return;
      E(String(Ye));
    } finally {
      B.current === Tt && A(!1);
    }
  }
  ae.useEffect(() => {
    if (++B.current, A(!1), E(null), b(
      (F) => F.provider === f && F.identity === g ? F : { provider: f, identity: g, models: [] }
    ), f === "custom") {
      ie(f, [], is);
      return;
    }
    return se(!1, f), () => {
      ++B.current;
    };
  }, [a, f, y, m, s, l]);
  function be() {
    se(!0);
  }
  async function ve() {
    const F = as();
    try {
      const he = await C0(a);
      if (!Ql(F)) return;
      window.open(he, "_blank"), Y(!0), re.current = Date.now(), Q.current = setInterval(async () => {
        try {
          const Ke = await dd(() => Qu(a));
          Ke !== null && Ql(F) && Ke.status === "logged_in" && (as(), rs("openai-codex"), ie("openai-codex", [], is), V.current(!0, Ke.email ?? null), Y(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null));
        } catch {
        }
        if (Date.now() - re.current > bE) {
          if (!Ql(F)) return;
          as(), Y(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null);
        }
      }, vE);
    } catch (he) {
      ce(String(he));
    }
  }
  async function ut() {
    const F = as();
    Y(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null);
    try {
      if (await D0(a), !Ql(F)) return;
      as(), rs("openai-codex"), ++B.current, b({
        provider: "openai-codex",
        identity: Jl("openai-codex"),
        models: []
      }), E(null), ie("openai-codex", [], is), V.current(!1, null);
    } catch (he) {
      ce(String(he));
    }
  }
  const Ve = "gcp-model-datalist";
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-settings", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-provider-select", children: "Provider" }),
      /* @__PURE__ */ h.jsx(
        "select",
        {
          id: "gcp-provider-select",
          className: "gcp-select",
          value: f,
          onChange: (F) => M({ provider: F.target.value }),
          "aria-label": "Select LLM provider",
          children: Object.keys($g).map((F) => /* @__PURE__ */ h.jsx("option", { value: F, children: $g[F] }, F))
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
            list: Ve,
            value: r.models[f] ?? "",
            onChange: (F) => te(F.target.value),
            placeholder: "model id",
            "aria-label": "Model ID",
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ h.jsx("datalist", { id: Ve, children: ee.map((F) => /* @__PURE__ */ h.jsx("option", { value: F.id, label: F.label }, F.id)) }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            className: "gcp-load-btn",
            onClick: be,
            disabled: _,
            "aria-label": "Load available models from provider",
            title: "Refresh model list",
            children: _ ? "Refreshing..." : "Refresh"
          }
        )
      ] }),
      R && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: R })
    ] }),
    K.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-reasoning-effort", children: "Reasoning effort" }),
      /* @__PURE__ */ h.jsxs(
        "select",
        {
          id: "gcp-reasoning-effort",
          className: "gcp-select",
          value: ((wn = r.reasoningEfforts) == null ? void 0 : wn[f]) ?? "",
          onChange: (F) => Z(F.target.value),
          "aria-label": "Reasoning effort",
          children: [
            /* @__PURE__ */ h.jsxs("option", { value: "", children: [
              "Model default",
              pe != null && pe.defaultReasoningEffort ? ` (${pe.defaultReasoningEffort})` : ""
            ] }),
            K.map((F) => /* @__PURE__ */ h.jsx(
              "option",
              {
                value: F.effort,
                title: F.description,
                children: F.effort
              },
              F.effort
            ))
          ]
        }
      )
    ] }),
    f !== "openai-codex" && yE.filter((F) => F === f || f === "custom" && F === "custom").map(
      (F) => F === f ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
        /* @__PURE__ */ h.jsx("label", { className: "gcp-label", children: F === "openai" ? "OpenAI API Key" : F === "anthropic" ? "Anthropic API Key" : F === "openrouter" ? "OpenRouter API Key" : "Custom API Key" }),
        /* @__PURE__ */ h.jsx(
          SE,
          {
            value: r.apiKeys[F] ?? "",
            onBlur: (he) => x(F, he),
            placeholder: F === "custom" ? "API key (optional)" : "sk-...",
            "aria-label": F === "openai" ? "OpenAI API key" : F === "anthropic" ? "Anthropic API key" : F === "openrouter" ? "OpenRouter API key" : "Custom API key"
          }
        )
      ] }, F) : null
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
          onChange: (F) => M({ customBaseUrl: F.target.value }),
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
            className: `gcp-codex-status${s ? " signed-in" : ue ? " pending" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: s ? `Signed in${l ? ` as ${l}` : ""}` : ue ? "Sign-in pending... (waiting for browser auth)" : "Not signed in"
          }
        ),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-codex-btns", children: [
          !s && /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "gcp-codex-btn",
              onClick: ve,
              disabled: ue,
              "aria-label": "Sign in with ChatGPT Codex",
              children: ue ? "Waiting..." : "Sign in"
            }
          ),
          s && /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "gcp-codex-btn danger",
              onClick: ut,
              "aria-label": "Sign out from ChatGPT Codex",
              children: "Sign out"
            }
          )
        ] }),
        q && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: q })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "gcp-footnote", children: "Keys are stored in this browser's localStorage and sent only to your local CodefyUI backend, which forwards them to the selected provider." })
  ] });
}
function EE() {
  return /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }) });
}
function xE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M9 3h6M10 3v5l-5.2 9a2.7 2.7 0 0 0 2.34 4h9.72a2.7 2.7 0 0 0 2.34-4L14 8V3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M7.5 15h9", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function NE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function AE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function jE({ expanded: a }) {
  return a ? /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function wE() {
  return /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "m6 6 12 12M18 6 6 18", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round" }) });
}
function Tg(a) {
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
function $E({
  api: a,
  settings: r,
  codexLoggedIn: s,
  codexEmail: l,
  conversation: u,
  onConversationChange: d,
  onSettingsChange: f,
  onCodexStatusChange: y,
  onNewConversation: m,
  onResumeConversation: g,
  onClose: v
}) {
  const [b, _] = ae.useState("chat"), [A, R] = ae.useState("compact"), [E, B] = ae.useState(() => Tg(a));
  ae.useEffect(() => {
    var ce, ue;
    const q = () => B(Tg(a));
    q();
    try {
      return (ue = (ce = a.graph) == null ? void 0 : ce.onGraphChanged) == null ? void 0 : ue.call(ce, q);
    } catch {
      return;
    }
  }, [a]);
  const T = (q) => {
    g(q), _("chat");
  }, D = () => {
    m(), _("chat");
  }, V = (q) => {
    _((ce) => ce === q && q !== "chat" ? "chat" : q);
  }, J = r.models[r.provider] ?? "", X = Number.isFinite(a.apiVersion) ? `API v${a.apiVersion}` : "API legacy", P = [
    { id: "chat", label: "Chat", ariaLabel: "Agent chat", icon: /* @__PURE__ */ h.jsx(EE, {}) },
    { id: "experiments", label: "Lab", ariaLabel: "Experiments lab", icon: /* @__PURE__ */ h.jsx(xE, {}) },
    { id: "history", label: "History", ariaLabel: "Conversation history", icon: /* @__PURE__ */ h.jsx(NE, {}) },
    { id: "settings", label: "Settings", ariaLabel: "Settings", icon: /* @__PURE__ */ h.jsx(AE, {}) }
  ];
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `gcp-window gcp-window--${A}`,
      role: "dialog",
      "aria-label": "Graph Copilot agent workbench",
      "data-panel-mode": A,
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
                  title: `Provider: ${r.provider}${J ? ` · ${J}` : ""} — click to change`,
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-model-dot", "aria-hidden": "true" }),
                    J || "Set up model"
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "gcp-icon-btn",
                  onClick: () => R((q) => q === "compact" ? "expanded" : "compact"),
                  "aria-label": A === "compact" ? "Expand panel" : "Use compact panel",
                  title: A === "compact" ? "Expand workspace" : "Compact workspace",
                  children: /* @__PURE__ */ h.jsx(jE, { expanded: A === "expanded" })
                }
              ),
              /* @__PURE__ */ h.jsx("button", { className: "gcp-icon-btn", onClick: v, "aria-label": "Close panel", title: "Close", children: /* @__PURE__ */ h.jsx(wE, {}) })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-context-bar", "aria-label": "Current graph context", children: [
            /* @__PURE__ */ h.jsx("span", { className: `gcp-live-indicator${E.available ? " online" : ""}`, "aria-hidden": "true" }),
            /* @__PURE__ */ h.jsx("span", { className: "gcp-context-name", children: "Current graph" }),
            /* @__PURE__ */ h.jsxs("span", { className: "gcp-context-stat", children: [
              /* @__PURE__ */ h.jsx("strong", { children: E.nodes }),
              " nodes"
            ] }),
            /* @__PURE__ */ h.jsxs("span", { className: "gcp-context-stat", children: [
              /* @__PURE__ */ h.jsx("strong", { children: E.edges }),
              " edges"
            ] }),
            /* @__PURE__ */ h.jsx("span", { className: "gcp-context-api", children: X })
          ] }),
          /* @__PURE__ */ h.jsx("nav", { className: "gcp-workbench-nav", "aria-label": "Agent workbench views", children: P.map((q) => /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: `gcp-nav-btn${b === q.id ? " active" : ""}`,
              onClick: () => V(q.id),
              "aria-label": q.ariaLabel,
              "aria-current": b === q.id ? "page" : void 0,
              children: [
                q.icon,
                /* @__PURE__ */ h.jsx("span", { children: q.label })
              ]
            },
            q.id
          )) })
        ] }),
        /* @__PURE__ */ h.jsxs("main", { className: "gcp-view", children: [
          b === "chat" && /* @__PURE__ */ h.jsx(
            Y_,
            {
              api: a,
              settings: r,
              codexLoggedIn: s,
              conversation: u,
              onConversationChange: d,
              onSettingsChange: f,
              onOpenSettings: () => _("settings"),
              onOpenHistory: () => _("history")
            }
          ),
          b === "experiments" && /* @__PURE__ */ h.jsx(mE, { api: a }),
          b === "history" && /* @__PURE__ */ h.jsx(gE, { api: a, activeId: u.id, onResume: T, onNew: D }),
          b === "settings" && /* @__PURE__ */ h.jsx(
            _E,
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
function TE({ api: a }) {
  const [r, s] = ae.useState(!1), [l, u] = ae.useState(() => g0(a)), [d, f] = ae.useState(!1), [y, m] = ae.useState(null), [g, v] = ae.useState(
    () => Rh(
      l.provider,
      l.models[l.provider] ?? "",
      eo(l)
    )
  );
  ae.useEffect(() => {
    y0(a, l);
  }, [a, l]), ae.useEffect(() => {
    if (l.provider !== "openai-codex") return;
    let E = !1;
    return dd(() => Qu(a)).then((B) => {
      if (E || B === null) return;
      const T = B.status === "logged_in", D = T ? B.email ?? null : null;
      (T !== d || D !== y) && u((V) => Yu(
        V,
        "openai-codex",
        [],
        { reasoningEffort: !1, richModelCatalog: !1 }
      )), T || rs("openai-codex"), f(T), m(D);
    }).catch(() => {
    }), () => {
      E = !0;
    };
  }, [a, l.provider]), ae.useEffect(() => {
    const E = l.provider;
    if (E === "custom") return;
    const B = E === "openai" ? l.apiKeys.openai : E === "openrouter" ? l.apiKeys.openrouter : E === "anthropic" ? l.apiKeys.anthropic : void 0;
    if (!(E === "openai-codex" ? d : !!B)) return;
    const D = Jl(
      E,
      E === "openai-codex" ? y ?? "active-codex-session" : B
    );
    let V = !1;
    const J = (P) => {
      V || u((q) => {
        if (q.provider !== E) return q;
        const ce = E === "openai" ? q.apiKeys.openai : E === "openrouter" ? q.apiKeys.openrouter : E === "anthropic" ? q.apiKeys.anthropic : void 0;
        return E !== "openai-codex" && ce !== B ? q : Yu(
          q,
          E,
          P.models,
          P.capabilities,
          P.source
        );
      });
    }, X = Dg(D);
    return X ? (J(X), () => {
      V = !0;
    }) : (Ig(a, E, B).then((P) => {
      V || (zg(D, P), J(P));
    }).catch(() => {
    }), () => {
      V = !0;
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
  const b = (E) => {
    u(E);
  }, _ = (E, B) => {
    f(E), m(B);
  }, A = () => {
    v(
      Rh(
        l.provider,
        l.models[l.provider] ?? "",
        eo(l)
      )
    );
  }, R = (E) => {
    v(E);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-root", children: [
    /* @__PURE__ */ h.jsx(E0, { onClick: () => s((E) => !E) }),
    r && /* @__PURE__ */ h.jsx(
      $E,
      {
        api: a,
        settings: l,
        codexLoggedIn: d,
        codexEmail: y,
        conversation: g,
        onConversationChange: v,
        onSettingsChange: b,
        onCodexStatusChange: _,
        onNewConversation: A,
        onResumeConversation: R,
        onClose: () => s(!1)
      }
    )
  ] });
}
function OE(a) {
  const r = a.ui.addFloatingWidget({ id: "copilot" });
  e0.createRoot(r).render(
    /* @__PURE__ */ h.jsx(Xb.StrictMode, { children: /* @__PURE__ */ h.jsx(TE, { api: a }) })
  );
}
export {
  OE as default
};
