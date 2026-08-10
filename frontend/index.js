(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`.gcp-root{--gcp-canvas: var(--surface-canvas, #0f1319);--gcp-bg: var(--surface-app, #151a22);--gcp-panel: var(--surface-panel, #1c222c);--gcp-surface: var(--surface-raised, #242b37);--gcp-input-bg: var(--surface-input, #2c3441);--gcp-hover: var(--surface-hover, #353d4b);--gcp-active: var(--surface-active, #404959);--gcp-scrim: var(--surface-scrim, rgba(6, 9, 13, .72));--gcp-text: var(--text-primary, #f0f4f8);--gcp-dim: var(--text-secondary, #c6d0da);--gcp-muted: var(--text-muted, #aeb9c6);--gcp-disabled: var(--text-disabled, #6b7684);--gcp-accent-ink: var(--text-on-accent, #04212b);--gcp-border-soft: var(--border-subtle, #262e3a);--gcp-border: var(--border-base, #313a48);--gcp-border-strong: var(--border-strong, #6b7787);--gcp-focus: var(--border-focus, #22d3ee);--gcp-accent: var(--accent, #22d3ee);--gcp-accent-deep: var(--accent-deep, #06b6d4);--gcp-accent-dim: var(--accent-dim, #0e7490);--gcp-accent-wash: var(--accent-wash, rgba(34, 211, 238, .12));--gcp-accent-glow: var(--accent-glow, rgba(34, 211, 238, .45));--gcp-ok: var(--status-success, #5ec269);--gcp-danger: var(--status-error, #ff6b63);--gcp-warn: var(--status-warning, #ffc94d);--gcp-info: var(--status-info, #6aa9ff);--gcp-ok-wash: var(--success-wash, rgba(94, 194, 105, .14));--gcp-danger-wash: var(--danger-wash, rgba(255, 107, 99, .14));--gcp-warn-wash: var(--warning-wash, rgba(255, 201, 77, .14));--gcp-info-wash: var(--info-wash, rgba(106, 169, 255, .14));--gcp-wire: var(--wire, #5b6c82);--gcp-wire-active: var(--wire-active, #22d3ee);--gcp-fs-2xs: var(--fs-2xs, .6875rem);--gcp-fs-xs: var(--fs-xs, .75rem);--gcp-fs-sm: var(--fs-sm, .8125rem);--gcp-fs-md: var(--fs-md, .875rem);--gcp-fs-lg: var(--fs-lg, 1rem);--gcp-fs-xl: var(--fs-xl, 1.125rem);--gcp-lh-tight: var(--lh-tight, 1.25);--gcp-lh-snug: var(--lh-snug, 1.4);--gcp-lh: var(--lh-normal, 1.55);--gcp-r-xs: var(--radius-sm, 4px);--gcp-r-sm: var(--radius, 6px);--gcp-r: var(--radius-lg, 8px);--gcp-r-lg: var(--radius-xl, 12px);--gcp-r-pill: var(--radius-pill, 999px);--gcp-shadow-sm: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, .4));--gcp-shadow: var(--shadow, 0 4px 12px -2px rgba(0, 0, 0, .5));--gcp-shadow-lg: var(--shadow-lg, 0 12px 32px -8px rgba(0, 0, 0, .6));--gcp-shadow-pop: var(--shadow-popover, 0 16px 40px -12px rgba(0, 0, 0, .7));--gcp-edge-hi: var(--inner-highlight, inset 0 1px 0 rgba(255, 255, 255, .05));--gcp-t-fast: var(--transition-fast, .12s ease);--gcp-t: var(--transition, .18s ease);--gcp-ease: cubic-bezier(.22, 1, .36, 1);--gcp-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;position:relative;font-family:inherit;font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-dim);box-sizing:border-box;-webkit-font-smoothing:antialiased}.gcp-root *,.gcp-root *:before,.gcp-root *:after{box-sizing:inherit}.gcp-root ::-webkit-scrollbar{width:6px;height:6px}.gcp-root ::-webkit-scrollbar-track{background:transparent}.gcp-root ::-webkit-scrollbar-thumb{background:var(--gcp-border);border-radius:3px}.gcp-root ::-webkit-scrollbar-thumb:hover{background:var(--gcp-border-strong)}.gcp-fab{width:48px;height:48px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-fab:hover{background:var(--gcp-accent);transform:translateY(-1px);box-shadow:inset 0 1px #ffffff38,0 8px 18px -6px var(--gcp-accent-glow)}.gcp-fab:active{transform:scale(.96)}.gcp-fab:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-window{position:fixed;bottom:16px;right:16px;width:min(448px,calc(100vw - 32px));height:min(690px,calc(100vh - 88px));min-height:420px;background:var(--gcp-panel);border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);display:flex;flex-direction:column;box-shadow:var(--gcp-shadow-pop),var(--gcp-edge-hi);overflow:hidden;isolation:isolate;animation:gcp-window-in .2s var(--gcp-ease) both;transition:width .26s var(--gcp-ease),height .26s var(--gcp-ease),border-radius .26s var(--gcp-ease)}.gcp-window--expanded{width:min(980px,calc(100vw - 32px));height:min(800px,calc(100vh - 32px))}@keyframes gcp-window-in{0%{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}.gcp-workbench-header{display:flex;flex-direction:column;flex-shrink:0;background:linear-gradient(180deg,var(--gcp-bg) 0%,var(--gcp-canvas) 100%);border-bottom:1px solid var(--gcp-border);box-shadow:var(--gcp-edge-hi);position:relative;z-index:3}.gcp-header-main{min-height:52px;display:flex;align-items:center;gap:12px;padding:8px 10px 6px 12px}.gcp-brand{display:flex;align-items:center;gap:9px;min-width:0;flex:1}.gcp-header-mark{width:28px;height:28px;border-radius:var(--gcp-r-sm);background:var(--gcp-accent-deep);box-shadow:inset 0 1px #ffffff38;display:inline-flex;align-items:center;justify-content:center;color:var(--gcp-accent-ink);font-size:14px;flex-shrink:0}.gcp-brand-copy{display:flex;flex-direction:column;min-width:0;line-height:var(--gcp-lh-tight)}.gcp-brand-copy strong{color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600;letter-spacing:-.01em;white-space:nowrap}.gcp-brand-copy>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:600;margin-top:2px;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}.gcp-header-actions{display:flex;align-items:center;justify-content:flex-end;gap:4px;min-width:0}.gcp-icon-btn{width:28px;height:28px;border-radius:var(--gcp-r-sm);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-icon-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-icon-btn:active{transform:scale(.94)}.gcp-icon-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-icon-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-model-chip{display:inline-flex;align-items:center;gap:6px;height:26px;max-width:150px;min-width:0;padding:0 9px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:1}.gcp-model-chip:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-model-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-model-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--gcp-ok)}.gcp-label-btn{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px 0 8px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-label-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-label-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-label-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-bar{height:28px;display:flex;align-items:center;gap:8px;padding:0 13px;border-top:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-live-indicator{width:6px;height:6px;border-radius:50%;background:var(--gcp-disabled);flex-shrink:0}.gcp-live-indicator.online{background:var(--gcp-ok)}.gcp-context-name{color:var(--gcp-muted);font-weight:600}.gcp-context-stat{padding-left:8px;border-left:1px solid var(--gcp-border-soft)}.gcp-context-stat strong{color:var(--gcp-dim);font-weight:600;font-family:var(--gcp-mono)}.gcp-context-api{margin-left:auto;font-family:var(--gcp-mono)}.gcp-workbench-nav{display:flex;align-items:stretch;padding:0 6px}.gcp-nav-btn{flex:1;min-width:0;border:none;border-bottom:2px solid transparent;background:transparent;color:var(--gcp-muted);display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:7px 8px 6px;font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;outline:none;transition:color var(--gcp-t-fast),border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-nav-btn:hover{color:var(--gcp-dim)}.gcp-nav-btn.active{color:var(--gcp-text);border-bottom-color:var(--gcp-accent-deep)}.gcp-nav-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-nav-btn svg{flex-shrink:0}.gcp-view{flex:1;overflow:hidden;display:flex;flex-direction:column}.gcp-chat{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}.gcp-messages{flex:1;overflow-y:auto;padding:14px 14px 8px;display:flex;flex-direction:column;gap:12px}.gcp-welcome{margin:auto;text-align:center;padding:24px 26px;max-width:320px;display:flex;flex-direction:column;align-items:center;gap:10px}.gcp-welcome-mark{width:44px;height:44px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);display:flex;align-items:center;justify-content:center;font-size:20px;animation:gcp-pop .36s var(--gcp-ease) both}.gcp-welcome-title{font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text);letter-spacing:-.01em;animation:gcp-rise .36s var(--gcp-ease) 40ms both}.gcp-welcome-sub{font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-muted);animation:gcp-rise .36s var(--gcp-ease) 80ms both}.gcp-welcome-history{margin-top:6px;display:inline-flex;align-items:center;gap:7px;padding:6px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:500;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;animation:gcp-rise .36s var(--gcp-ease) .14s both}.gcp-welcome-history:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-welcome-history:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-welcome-suggestions{display:flex;flex-direction:column;gap:6px;width:100%;margin-top:4px;animation:gcp-rise .36s var(--gcp-ease) .11s both}.gcp-suggestion{padding:8px 11px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);background:var(--gcp-surface);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-family:inherit;line-height:var(--gcp-lh-snug);text-align:left;cursor:pointer;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none}.gcp-suggestion:hover{color:var(--gcp-accent);border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-suggestion:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@keyframes gcp-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}@keyframes gcp-rise{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}.gcp-msg-row{display:flex;flex-direction:column;gap:6px;animation:gcp-rise .24s var(--gcp-ease) both}.gcp-msg-row.user{align-items:flex-end}.gcp-msg-row.assistant{align-items:flex-start}.gcp-bubble{max-width:88%;padding:8px 11px;border-radius:var(--gcp-r);line-height:var(--gcp-lh);word-break:break-word;white-space:pre-wrap;font-size:var(--gcp-fs-sm)}.gcp-msg-row.user .gcp-bubble{background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-text);border-bottom-right-radius:var(--gcp-r-xs)}.gcp-msg-row.assistant .gcp-bubble{background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-dim);border-bottom-left-radius:var(--gcp-r-xs)}.gcp-bubble pre{background:var(--gcp-canvas);border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);padding:9px 10px;overflow-x:auto;font-size:var(--gcp-fs-xs);font-family:var(--gcp-mono);margin:7px 0 2px;white-space:pre;line-height:1.5}.gcp-bubble pre:first-child{margin-top:0}.gcp-bubble pre:last-child{margin-bottom:0}.gcp-bubble code{font-family:var(--gcp-mono);font-size:var(--gcp-fs-xs)}.gcp-bubble :not(pre)>code{background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);padding:1px 5px;border-radius:var(--gcp-r-xs);font-size:var(--gcp-fs-2xs);color:var(--gcp-text)}.gcp-bubble .gcp-md-p{margin:0 0 8px}.gcp-bubble .gcp-md-p:last-child{margin-bottom:0}.gcp-md-h1,.gcp-md-h2,.gcp-md-h3{font-weight:600;color:var(--gcp-text);margin:10px 0 6px;line-height:var(--gcp-lh-snug)}.gcp-md-h1{font-size:var(--gcp-fs-md)}.gcp-md-h2{font-size:var(--gcp-fs-sm)}.gcp-md-h3{font-size:var(--gcp-fs-sm);color:var(--gcp-muted)}.gcp-md-h1:first-child,.gcp-md-h2:first-child,.gcp-md-h3:first-child{margin-top:0}.gcp-md-list{margin:2px 0 8px;padding-left:18px}.gcp-md-list:last-child{margin-bottom:0}.gcp-md-list li{margin:3px 0}.gcp-md-list li::marker{color:var(--gcp-muted)}.gcp-md-hr{border:none;border-top:1px solid var(--gcp-border-soft);margin:10px 0}.gcp-bubble a{color:var(--gcp-accent);text-decoration:underline;text-underline-offset:2px;text-decoration-color:var(--gcp-accent-dim)}.gcp-bubble a:hover{text-decoration-color:var(--gcp-accent)}.gcp-caret{display:inline-block;width:2px;height:1em;background:var(--gcp-accent);margin-left:2px;vertical-align:text-bottom;border-radius:1px;animation:gcp-blink 1s step-end infinite}@keyframes gcp-blink{0%,to{opacity:1}50%{opacity:0}}.gcp-bubble-attachments{display:flex;flex-wrap:wrap;gap:6px;max-width:88%;justify-content:inherit}.gcp-msg-row.user .gcp-bubble-attachments{justify-content:flex-end}.gcp-att-image{max-width:160px;max-height:160px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);object-fit:cover;display:block}.gcp-att-file{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);max-width:180px}.gcp-att-file svg{color:var(--gcp-accent);flex-shrink:0}.gcp-att-file-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-ops-chip{display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);line-height:1.5;font-variant-numeric:tabular-nums}.gcp-step-tag{display:inline-flex;align-items:center;gap:6px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase}.gcp-step-tag-dot{width:6px;height:6px;border-radius:50%;background:var(--gcp-wire);flex-shrink:0}.gcp-stages{position:relative;display:flex;flex-direction:column;gap:2px;width:88%;padding-left:2px}.gcp-stages:before{content:"";position:absolute;left:10px;top:12px;bottom:12px;width:2px;border-radius:1px;background:var(--gcp-border)}.gcp-stage{position:relative;border-radius:var(--gcp-r-sm);overflow:hidden;animation:gcp-rise .2s var(--gcp-ease) both}.gcp-stage-head{display:flex;align-items:center;gap:8px;width:100%;min-height:28px;padding:4px 7px 4px 0;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast)}.gcp-stage-head:not(:disabled):hover{background:var(--gcp-hover)}.gcp-stage-head:disabled{cursor:default}.gcp-stage-head:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-stage-status{position:relative;z-index:1;width:18px;height:18px;margin-left:2px;border-radius:50%;background:var(--gcp-panel);border:1px solid var(--gcp-border);display:flex;align-items:center;justify-content:center;flex-shrink:0}.gcp-stage.ok .gcp-stage-status{color:var(--gcp-ok);background:var(--gcp-ok-wash);border-color:transparent}.gcp-stage.error .gcp-stage-status{color:var(--gcp-danger);background:var(--gcp-danger-wash);border-color:transparent}.gcp-stage.running .gcp-stage-status{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim);box-shadow:0 0 6px var(--gcp-accent-glow)}.gcp-stage-spinner{width:10px;height:10px;border-radius:50%;border:2px solid transparent;border-top-color:var(--gcp-accent);border-right-color:var(--gcp-accent);animation:gcp-spin .7s linear infinite}@keyframes gcp-spin{to{transform:rotate(360deg)}}.gcp-stage-label{font-weight:600;font-size:var(--gcp-fs-xs);color:var(--gcp-dim);white-space:nowrap;flex-shrink:0;line-height:var(--gcp-lh-tight)}.gcp-stage.running .gcp-stage-label{color:var(--gcp-text)}.gcp-stage-summary{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage.error .gcp-stage-summary{color:var(--gcp-danger)}.gcp-stage-time{flex-shrink:0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage-chevron{color:var(--gcp-muted);flex-shrink:0;transition:transform var(--gcp-t-fast)}.gcp-stage-chevron.open{transform:rotate(90deg)}.gcp-stage-detail{margin:2px 0 4px 28px;padding:8px 10px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:1.55;max-height:180px;overflow:auto;white-space:pre-wrap;word-break:break-word}.gcp-thinking{display:flex;align-items:center;gap:8px;padding:2px 2px 6px;font-size:var(--gcp-fs-sm);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-thinking-orb{color:var(--gcp-accent);font-size:var(--gcp-fs-sm);animation:gcp-orb-pulse 1.5s ease-in-out infinite}.gcp-thinking-text{background:linear-gradient(90deg,var(--gcp-muted) 25%,var(--gcp-accent) 50%,var(--gcp-muted) 75%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gcp-shimmer 1.8s linear infinite}.gcp-thinking-time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);font-variant-numeric:tabular-nums}@keyframes gcp-orb-pulse{0%,to{opacity:.45;transform:scale(.92)}50%{opacity:1;transform:scale(1.06)}}@keyframes gcp-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.gcp-error-row{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-danger);background:var(--gcp-danger-wash);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-error-icon{color:var(--gcp-danger);margin-top:1px;flex-shrink:0;display:flex}.gcp-error-body{flex:1;min-width:0}.gcp-error-title{font-size:var(--gcp-fs-xs);font-weight:600;color:var(--gcp-danger)}.gcp-error-text{font-size:var(--gcp-fs-xs);color:var(--gcp-dim);margin-top:2px;word-break:break-word;line-height:var(--gcp-lh-snug)}.gcp-retry-btn{padding:5px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast);align-self:center;flex-shrink:0}.gcp-retry-btn:hover{background:var(--gcp-danger-wash)}.gcp-retry-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-dropzone{position:absolute;top:8px;right:8px;bottom:8px;left:8px;z-index:5;border-radius:var(--gcp-r);background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;pointer-events:none;animation:gcp-fade .12s ease both}.gcp-dropzone-inner{display:flex;flex-direction:column;align-items:center;gap:10px;padding:24px 32px;border:1.5px dashed var(--gcp-accent-dim);border-radius:var(--gcp-r);color:var(--gcp-accent);font-size:var(--gcp-fs-sm);background:var(--gcp-accent-wash)}.gcp-dropzone-inner svg{width:22px;height:22px}@keyframes gcp-fade{0%{opacity:0}to{opacity:1}}.gcp-input-area{position:relative;padding:10px 12px 9px;border-top:1px solid var(--gcp-border);display:flex;flex-direction:column;gap:8px;flex-shrink:0;background:var(--gcp-bg)}.gcp-input-row{display:flex;gap:8px;align-items:flex-end}.gcp-attachments{display:flex;flex-wrap:wrap;gap:7px}.gcp-chip{position:relative;display:inline-flex;align-items:center;gap:8px;padding:5px 7px 5px 6px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border);max-width:190px;animation:gcp-pop .18s var(--gcp-ease) both}.gcp-chip.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-chip-thumb{width:30px;height:30px;border-radius:var(--gcp-r-xs);object-fit:cover;flex-shrink:0;border:1px solid var(--gcp-border-soft)}.gcp-chip-icon{width:30px;height:30px;border-radius:var(--gcp-r-xs);flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--gcp-canvas);color:var(--gcp-accent)}.gcp-chip.error .gcp-chip-icon{color:var(--gcp-danger)}.gcp-chip-body{display:flex;flex-direction:column;min-width:0;line-height:1.25}.gcp-chip-name{font-size:var(--gcp-fs-xs);color:var(--gcp-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:110px}.gcp-chip-size{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted)}.gcp-chip.error .gcp-chip-size{color:var(--gcp-danger)}.gcp-chip-spinner{width:12px;height:12px;border-radius:50%;border:2px solid var(--gcp-border);border-top-color:var(--gcp-accent);flex-shrink:0;animation:gcp-spin .7s linear infinite}.gcp-chip-remove{width:18px;height:18px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none}.gcp-chip-remove:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-chip-remove:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:1px}.gcp-file-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.gcp-attach-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast);outline:none}.gcp-attach-btn:hover:not(:disabled){color:var(--gcp-text);background:var(--gcp-hover)}.gcp-attach-btn:disabled{opacity:.4;cursor:not-allowed}.gcp-attach-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-textarea{flex:1;resize:none;background:var(--gcp-input-bg);border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);color:var(--gcp-text);font-family:inherit;font-size:var(--gcp-fs-sm);padding:8px 10px;outline:none;line-height:var(--gcp-lh-snug);min-height:34px;max-height:110px;overflow-y:auto;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-textarea::placeholder{color:var(--gcp-disabled)}.gcp-textarea:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-textarea:disabled{opacity:.5;cursor:not-allowed}.gcp-send-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-send-btn:hover:not(:disabled){background:var(--gcp-accent)}.gcp-send-btn:active:not(:disabled){transform:scale(.94)}.gcp-send-btn:disabled{opacity:.4;cursor:not-allowed;background:var(--gcp-input-bg);color:var(--gcp-disabled);box-shadow:none}.gcp-send-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-stop-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),transform var(--gcp-t-fast);outline:none}.gcp-stop-btn:hover{background:var(--gcp-danger-wash)}.gcp-stop-btn:active{transform:scale(.94)}.gcp-stop-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-composer-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:22px}.gcp-composer-context{display:flex;align-items:center;gap:6px;min-width:0}.gcp-context-chip{display:inline-flex;align-items:center;gap:6px;height:22px;max-width:230px;padding:0 7px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-soft);background:transparent;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast)}.gcp-context-chip:hover,.gcp-context-chip.open{background:var(--gcp-hover);color:var(--gcp-dim);border-color:var(--gcp-border)}.gcp-context-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-chip svg{flex-shrink:0;color:var(--gcp-accent)}.gcp-context-chip-model{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-context-chip-effort{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-weight:600}.gcp-effort{position:relative;min-width:0}.gcp-menu-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;background:transparent;border:none;cursor:default;padding:0}.gcp-effort-menu{position:absolute;bottom:calc(100% + 8px);left:0;z-index:30;min-width:250px;max-width:300px;padding:4px;background:var(--gcp-surface);border:1px solid var(--gcp-border);border-radius:var(--gcp-r);box-shadow:var(--gcp-shadow-pop);animation:gcp-rise .14s var(--gcp-ease) both}.gcp-effort-menu-title{padding:6px 8px 4px;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-effort-item{display:flex;align-items:baseline;gap:8px;width:100%;padding:6px 8px;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-effort-item:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-effort-item:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-effort-item.selected{background:var(--gcp-accent-wash)}.gcp-effort-item.selected .gcp-effort-item-name{color:var(--gcp-accent)}.gcp-effort-item-name{font-family:var(--gcp-mono);font-weight:600;white-space:nowrap;flex-shrink:0}.gcp-effort-item-desc{flex:1;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-effort-item-check{margin-left:auto;flex-shrink:0;width:12px;color:var(--gcp-accent);display:inline-flex}.gcp-effort-menu-divider{height:1px;margin:4px 0;background:var(--gcp-border)}.gcp-runbar{display:flex;align-items:center;gap:7px;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-runbar-pulse{width:7px;height:7px;border-radius:50%;background:var(--gcp-accent);flex-shrink:0;animation:gcp-runbar-pulse 1.4s ease-in-out infinite}@keyframes gcp-runbar-pulse{0%,to{opacity:.4;box-shadow:0 0 0 0 var(--gcp-accent-wash)}50%{opacity:1;box-shadow:0 0 6px 0 var(--gcp-accent-glow)}}.gcp-runbar-phase{color:var(--gcp-dim);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-runbar-step{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);font-family:var(--gcp-mono)}.gcp-runbar-time{flex-shrink:0;font-family:var(--gcp-mono)}.gcp-composer-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-disabled);white-space:nowrap;-webkit-user-select:none;user-select:none}.gcp-not-ready-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;gap:10px}.gcp-not-ready-label{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-cta-btn{padding:6px 14px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none;white-space:nowrap}.gcp-cta-btn:hover{background:var(--gcp-accent)}.gcp-cta-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history{flex:1;display:flex;flex-direction:column;overflow:hidden}.gcp-history-top{padding:12px;border-bottom:1px solid var(--gcp-border-soft);flex-shrink:0}.gcp-new-btn{width:100%;padding:8px 12px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-sm);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-new-btn:hover{background:var(--gcp-accent)}.gcp-new-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history-list{flex:1;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:2px}.gcp-history-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--gcp-r-sm);cursor:pointer;transition:background var(--gcp-t-fast);border:1px solid transparent;position:relative}.gcp-history-item:hover{background:var(--gcp-hover)}.gcp-history-item.active{background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-history-item.active:before{content:"";position:absolute;left:0;top:8px;bottom:8px;width:2px;border-radius:2px;background:var(--gcp-accent-deep)}.gcp-history-info{flex:1;min-width:0}.gcp-history-title{font-size:var(--gcp-fs-sm);color:var(--gcp-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}.gcp-history-meta{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums}.gcp-history-delete{width:24px;height:24px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:var(--gcp-fs-sm);flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),opacity var(--gcp-t-fast);outline:none;opacity:0}.gcp-history-item:hover .gcp-history-delete{opacity:1}.gcp-history-delete:hover{color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-history-delete.confirm{color:var(--gcp-danger);background:var(--gcp-danger-wash);opacity:1}.gcp-history-delete:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:1px;opacity:1}.gcp-history-empty{padding:40px 18px;text-align:center;color:var(--gcp-muted);font-size:var(--gcp-fs-sm)}.gcp-settings{flex:1;overflow-y:auto;padding:16px 14px 20px;display:flex;flex-direction:column;gap:16px}.gcp-field{display:flex;flex-direction:column;gap:6px}.gcp-label{font-size:var(--gcp-fs-2xs);font-weight:700;color:var(--gcp-muted);text-transform:uppercase;letter-spacing:.05em}.gcp-select,.gcp-input{width:100%;padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:var(--gcp-input-bg);color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-family:inherit;outline:none;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-select{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23aeb9c6' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}.gcp-select:focus,.gcp-input:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-input::placeholder{color:var(--gcp-disabled)}.gcp-model-row{display:flex;gap:6px}.gcp-model-row .gcp-input{flex:1}.gcp-load-btn{padding:7px 11px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;white-space:nowrap;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-load-btn:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-load-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-load-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-key-row{display:flex;gap:6px}.gcp-key-row .gcp-input{flex:1;font-family:var(--gcp-mono)}.gcp-show-btn{padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-show-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-show-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-section{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-border-soft);background:var(--gcp-surface)}.gcp-codex-status{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-codex-status.signed-in{color:var(--gcp-ok)}.gcp-codex-status.pending{color:var(--gcp-warn)}.gcp-codex-btns{display:flex;gap:8px}.gcp-codex-btn{padding:6px 13px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-codex-btn:hover{background:var(--gcp-accent)}.gcp-codex-btn.danger{border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);box-shadow:none}.gcp-codex-btn.danger:hover{background:var(--gcp-danger-wash)}.gcp-codex-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-field-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px}.gcp-field-hint.error{color:var(--gcp-danger)}.gcp-footnote{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);line-height:var(--gcp-lh);padding-top:6px;border-top:1px solid var(--gcp-border-soft)}.gcp-window--expanded .gcp-msg-row,.gcp-window--expanded .gcp-thinking,.gcp-window--expanded .gcp-error-row{width:min(100%,760px);margin-left:auto;margin-right:auto}.gcp-window--expanded .gcp-messages{padding:24px clamp(22px,8vw,92px) 12px}.gcp-window--expanded .gcp-input-area{padding-left:clamp(22px,9vw,108px);padding-right:clamp(22px,9vw,108px)}.gcp-window--expanded .gcp-settings,.gcp-window--expanded .gcp-history{width:min(100%,760px);margin:0 auto}.gcp-lab{position:relative;flex:1;min-height:0;overflow-y:auto;padding:18px;background:var(--gcp-panel)}.gcp-lab-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:16px}.gcp-eyebrow{display:block;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;line-height:var(--gcp-lh-snug);text-transform:uppercase}.gcp-lab-heading h1{margin:2px 0 4px;color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-tight);letter-spacing:-.01em}.gcp-lab-heading p{margin:0;max-width:560px;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-count{flex-shrink:0;padding:3px 9px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-lab-heading-actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:7px}.gcp-lab-heading-actions>button{min-height:28px;padding:5px 10px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-heading-actions>button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-heading-actions>button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-portable-message{margin:-7px 0 13px;padding:8px 10px;border:1px solid var(--gcp-ok);border-radius:var(--gcp-r-sm);background:var(--gcp-ok-wash);color:var(--gcp-ok);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-portable-message.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash);color:var(--gcp-danger)}.gcp-lab-empty{min-height:340px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 20px;border:1px dashed var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-canvas)}.gcp-lab-empty-mark{width:52px;height:52px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-lg);display:grid;place-items:center;color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-empty h2{margin:15px 0 6px;font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text)}.gcp-lab-empty p{max-width:470px;margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-example{max-width:510px;margin-top:16px;padding:10px 12px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh);text-align:left}.gcp-lab-layout{display:flex;flex-direction:column;gap:13px}.gcp-lab-studies{display:flex;gap:8px;overflow-x:auto;padding:1px 1px 5px;scrollbar-width:thin}.gcp-study-card{width:220px;min-width:220px;display:flex;flex-direction:column;align-items:stretch;gap:7px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-surface);color:var(--gcp-text);font-family:inherit;text-align:left;cursor:pointer;outline:none;transition:border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-study-card:hover{border-color:var(--gcp-border);background:var(--gcp-hover)}.gcp-study-card.active{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-study-card:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-study-card-top{display:flex;justify-content:space-between;align-items:center;gap:8px}.gcp-study-card time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono)}.gcp-study-card>strong{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:32px;font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-study-card-meta{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-lab-badge{display:inline-flex;align-items:center;width:fit-content;min-height:18px;padding:2px 7px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);color:var(--gcp-muted);background:var(--gcp-input-bg);font-size:var(--gcp-fs-2xs);font-weight:700;line-height:1;letter-spacing:.04em;text-transform:uppercase}.gcp-lab-badge.completed{color:var(--gcp-ok);border-color:var(--gcp-ok);background:var(--gcp-ok-wash)}.gcp-lab-badge.partial,.gcp-lab-badge.invalid{color:var(--gcp-warn);border-color:var(--gcp-warn);background:var(--gcp-warn-wash)}.gcp-lab-badge.failed{color:var(--gcp-danger);border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-lab-report{min-width:0;padding:16px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-edge-hi)}.gcp-lab-report-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.gcp-lab-report-head h2{margin:4px 0 0;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600;line-height:var(--gcp-lh-snug);letter-spacing:-.01em}.gcp-lab-export-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px}.gcp-lab-export-actions button{min-height:26px;padding:4px 9px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-export-actions button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-export-actions button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-export-actions button:disabled{opacity:.45;cursor:not-allowed}.gcp-lab-export-actions button:disabled:hover{background:transparent;color:var(--gcp-dim)}.gcp-lab-integrity{margin:7px 0 0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-summary-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.gcp-lab-summary-card{min-width:0;display:flex;align-items:center;gap:11px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-lab-summary-card.winner{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-lab-card-icon{width:30px;height:30px;border-radius:var(--gcp-r-sm);display:grid;place-items:center;flex-shrink:0;font-size:14px}.gcp-lab-card-icon.objective{color:var(--gcp-info);background:var(--gcp-info-wash)}.gcp-lab-card-icon.winner{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-summary-card>div{min-width:0;display:flex;flex-direction:column;gap:2px}.gcp-lab-summary-card h3{margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-transform:uppercase}.gcp-lab-summary-card strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-lab-summary-card div>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-search-plan{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:baseline;gap:3px 10px;margin-top:8px;padding:10px 11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-info-wash)}.gcp-lab-search-plan .gcp-eyebrow{grid-column:1 / -1;color:var(--gcp-info)}.gcp-lab-search-plan strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-lab-search-plan>span:not(.gcp-eyebrow){color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-search-plan small{grid-column:1 / -1;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-section{margin-top:18px}.gcp-lab-section-title{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:8px}.gcp-lab-section-title h3{margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600}.gcp-lab-section-title>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-findings{margin:0;padding:10px 12px 10px 27px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-findings li+li{margin-top:5px}.gcp-lab-findings li::marker{color:var(--gcp-accent)}.gcp-leaderboard-wrap{overflow-x:auto;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-leaderboard{width:100%;min-width:650px;border-collapse:collapse;font-size:var(--gcp-fs-xs);font-variant-numeric:tabular-nums}.gcp-leaderboard th{padding:8px 9px;border-bottom:1px solid var(--gcp-border);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-align:left;text-transform:uppercase;white-space:nowrap}.gcp-leaderboard td{padding:9px;border-bottom:1px solid var(--gcp-border-soft);color:var(--gcp-dim);vertical-align:middle}.gcp-leaderboard tbody tr:last-child td{border-bottom:none}.gcp-leaderboard tbody tr.winner{background:var(--gcp-accent-wash)}.gcp-rank{display:inline-grid;place-items:center;width:21px;height:21px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-leaderboard tr.winner .gcp-rank{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-candidate-name{display:flex;align-items:center;flex-wrap:wrap;gap:5px;min-width:140px}.gcp-candidate-name strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-winner-tag{padding:2px 5px;border-radius:var(--gcp-r-xs);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase}.gcp-candidate-operations{display:block;max-width:240px;margin-top:3px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-candidate-error{display:block;max-width:210px;margin-top:3px;color:var(--gcp-danger);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-metric-value{color:var(--gcp-text)!important;font-family:var(--gcp-mono)}.gcp-metric-detail{display:block;margin-top:3px;color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:500;line-height:var(--gcp-lh-snug);white-space:nowrap}.gcp-candidate-download{min-height:25px;padding:4px 8px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-xs);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-candidate-download:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-candidate-download:disabled{opacity:.4;cursor:not-allowed}.gcp-study-import-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:8;display:grid;place-items:center;padding:20px;background:var(--gcp-scrim)}.gcp-study-import-dialog{width:min(100%,520px);max-height:calc(100% - 12px);overflow-y:auto;padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-lg)}.gcp-study-import-dialog h2{margin:4px 0 7px;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600}.gcp-study-import-dialog>p{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-study-import-dialog dl{margin:14px 0;display:grid;gap:7px}.gcp-study-import-dialog dl>div{display:grid;grid-template-columns:105px minmax(0,1fr);gap:10px}.gcp-study-import-dialog dt{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase;letter-spacing:.04em}.gcp-study-import-dialog dd{min-width:0;margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow-wrap:anywhere}.gcp-study-import-dialog code{color:var(--gcp-accent);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-study-import-safety{padding:9px 10px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-sm);background:var(--gcp-accent-wash)}.gcp-study-import-dialog .gcp-lab-portable-message{margin:10px 0 0}.gcp-study-import-actions{display:flex;justify-content:flex-end;gap:7px;margin-top:15px}.gcp-study-import-actions button{min-height:30px;padding:6px 12px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-study-import-actions button:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-study-import-actions button.primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-weight:700;box-shadow:inset 0 1px #ffffff38}.gcp-study-import-actions button.primary:hover:not(:disabled){background:var(--gcp-accent);color:var(--gcp-accent-ink)}.gcp-study-import-actions button:disabled{opacity:.5;cursor:not-allowed}.gcp-lab-warnings{display:flex;flex-direction:column;gap:5px}.gcp-lab-warnings p{position:relative;margin:0;padding:8px 10px 8px 27px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-warn);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-warnings p:before{content:"!";position:absolute;left:10px;top:8px;color:var(--gcp-warn);font-weight:800}.gcp-paper-grid{display:grid;grid-template-columns:1fr;gap:8px}.gcp-paper-card{position:relative;padding:12px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas);overflow:hidden}.gcp-paper-index{position:absolute;right:9px;top:7px;color:var(--gcp-border-soft);font-family:var(--gcp-mono);font-size:24px;font-weight:700}.gcp-paper-card h4{position:relative;margin:0 28px 9px 0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-paper-card dl{margin:0;display:flex;flex-direction:column;gap:7px}.gcp-paper-card dl>div{display:grid;grid-template-columns:58px 1fr;gap:7px}.gcp-paper-card dt{color:var(--gcp-accent-dim);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-paper-card dd{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh)}.gcp-window--expanded .gcp-lab{padding:24px}.gcp-window--expanded .gcp-lab-layout{display:grid;grid-template-columns:220px minmax(0,1fr);align-items:start}.gcp-window--expanded .gcp-lab-studies{position:sticky;top:0;max-height:590px;flex-direction:column;overflow-x:hidden;overflow-y:auto;padding:1px 5px 1px 1px}.gcp-window--expanded .gcp-study-card{width:100%;min-width:0}.gcp-window--expanded .gcp-lab-summary-grid,.gcp-window--expanded .gcp-paper-grid{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:720px),(max-height:560px){.gcp-window,.gcp-window--expanded{top:8px;right:8px;bottom:8px;left:8px;width:auto;height:auto;min-height:0;border-radius:var(--gcp-r-lg)}.gcp-window--expanded .gcp-lab-layout{display:flex}.gcp-window--expanded .gcp-lab-studies{position:static;max-height:none;flex-direction:row;overflow-x:auto;overflow-y:hidden}.gcp-window--expanded .gcp-study-card{width:220px;min-width:220px}.gcp-window--expanded .gcp-messages{padding:16px 14px 8px}.gcp-window--expanded .gcp-input-area{padding:10px 12px 9px}}@media(max-width:430px){.gcp-header-main{padding-left:10px;gap:7px}.gcp-brand-copy>span{display:none}.gcp-header-actions .gcp-model-chip{max-width:116px}.gcp-context-bar{padding:0 11px;gap:6px}.gcp-context-name{display:none}.gcp-context-stat{padding-left:6px}.gcp-workbench-nav{padding:0 4px}.gcp-nav-btn{gap:5px;padding:7px 4px 6px;font-size:var(--gcp-fs-2xs)}.gcp-composer-hint{display:none}.gcp-lab{padding:14px 11px}.gcp-lab-report{padding:12px 10px}.gcp-lab-heading p{display:none}.gcp-lab-heading{align-items:center;margin-bottom:13px}}.gcp-experiment-approval-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:40;display:grid;place-items:center;padding:18px;background:var(--gcp-scrim)}.gcp-experiment-approval{width:min(420px,100%);padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-pop)}.gcp-experiment-approval-kicker{margin-bottom:6px;color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;text-transform:uppercase}.gcp-experiment-approval-title{color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-hypothesis{margin-top:10px;color:var(--gcp-text);font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh)}.gcp-experiment-approval-facts{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.gcp-experiment-approval-facts span{padding:3px 8px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-experiment-approval-candidates{display:grid;gap:6px;max-height:124px;margin-top:12px;overflow-y:auto}.gcp-experiment-approval-candidates>div,.gcp-experiment-approval-nodes{display:grid;grid-template-columns:minmax(72px,.35fr) minmax(0,1fr);gap:8px;padding:7px 9px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-candidates strong,.gcp-experiment-approval-nodes strong{color:var(--gcp-text)}.gcp-experiment-approval-candidates span,.gcp-experiment-approval-nodes span{min-width:0;overflow-wrap:anywhere;color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-experiment-approval-nodes{margin-top:6px}.gcp-experiment-approval-warning{margin-top:14px;padding:10px 11px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:18px}.gcp-approval-secondary,.gcp-approval-primary{min-height:32px;padding:0 13px;border-radius:var(--gcp-r-sm);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:700;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-approval-secondary{border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim)}.gcp-approval-secondary:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-approval-secondary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-approval-primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);box-shadow:inset 0 1px #ffffff38}.gcp-approval-primary:hover{background:var(--gcp-accent)}.gcp-approval-primary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@media(prefers-reduced-motion:reduce){.gcp-root *,.gcp-root *:before,.gcp-root *:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`)),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var Cb = Object.defineProperty;
var Ob = (a, r, l) => r in a ? Cb(a, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[r] = l;
var tn = (a, r, l) => Ob(a, typeof r != "symbol" ? r + "" : r, l);
function zb(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Au = { exports: {} }, Xr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mh;
function Rb() {
  if (mh) return Xr;
  mh = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(s, u, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      d = {};
      for (var v in u)
        v !== "key" && (d[v] = u[v]);
    } else d = u;
    return u = d.ref, {
      $$typeof: a,
      type: s,
      key: f,
      ref: u !== void 0 ? u : null,
      props: d
    };
  }
  return Xr.Fragment = r, Xr.jsx = l, Xr.jsxs = l, Xr;
}
var hh;
function Ub() {
  return hh || (hh = 1, Au.exports = Rb()), Au.exports;
}
var h = Ub(), Nu = { exports: {} }, ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gh;
function Lb() {
  if (gh) return ve;
  gh = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), _ = Symbol.iterator;
  function N(E) {
    return E === null || typeof E != "object" ? null : (E = _ && E[_] || E["@@iterator"], typeof E == "function" ? E : null);
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
  }, x = Object.assign, H = {};
  function $(E, L, Z) {
    this.props = E, this.context = L, this.refs = H, this.updater = Z || R;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(E, L) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, L, "setState");
  }, $.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function z() {
  }
  z.prototype = $.prototype;
  function K(E, L, Z) {
    this.props = E, this.context = L, this.refs = H, this.updater = Z || R;
  }
  var ae = K.prototype = new z();
  ae.constructor = K, x(ae, $.prototype), ae.isPureReactComponent = !0;
  var X = Array.isArray;
  function ne() {
  }
  var G = { H: null, A: null, T: null, S: null }, ce = Object.prototype.hasOwnProperty;
  function ue(E, L, Z) {
    var te = Z.ref;
    return {
      $$typeof: a,
      type: E,
      key: L,
      ref: te !== void 0 ? te : null,
      props: Z
    };
  }
  function k(E, L) {
    return ue(E.type, L, E.props);
  }
  function Q(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function oe(E) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(Z) {
      return L[Z];
    });
  }
  var ye = /\/+/g;
  function ee(E, L) {
    return typeof E == "object" && E !== null && E.key != null ? oe("" + E.key) : L.toString(36);
  }
  function he(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ne, ne) : (E.status = "pending", E.then(
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
  function T(E, L, Z, te, fe) {
    var Ee = typeof E;
    (Ee === "undefined" || Ee === "boolean") && (E = null);
    var Te = !1;
    if (E === null) Te = !0;
    else
      switch (Ee) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case r:
              Te = !0;
              break;
            case y:
              return Te = E._init, T(
                Te(E._payload),
                L,
                Z,
                te,
                fe
              );
          }
      }
    if (Te)
      return fe = fe(E), Te = te === "" ? "." + ee(E, 0) : te, X(fe) ? (Z = "", Te != null && (Z = Te.replace(ye, "$&/") + "/"), T(fe, L, Z, "", function(fn) {
        return fn;
      })) : fe != null && (Q(fe) && (fe = k(
        fe,
        Z + (fe.key == null || E && E.key === fe.key ? "" : ("" + fe.key).replace(
          ye,
          "$&/"
        ) + "/") + Te
      )), L.push(fe)), 1;
    Te = 0;
    var at = te === "" ? "." : te + ":";
    if (X(E))
      for (var Ve = 0; Ve < E.length; Ve++)
        te = E[Ve], Ee = at + ee(te, Ve), Te += T(
          te,
          L,
          Z,
          Ee,
          fe
        );
    else if (Ve = N(E), typeof Ve == "function")
      for (E = Ve.call(E), Ve = 0; !(te = E.next()).done; )
        te = te.value, Ee = at + ee(te, Ve++), Te += T(
          te,
          L,
          Z,
          Ee,
          fe
        );
    else if (Ee === "object") {
      if (typeof E.then == "function")
        return T(
          he(E),
          L,
          Z,
          te,
          fe
        );
      throw L = String(E), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function Y(E, L, Z) {
    if (E == null) return E;
    var te = [], fe = 0;
    return T(E, te, "", "", function(Ee) {
      return L.call(Z, Ee, fe++);
    }), te;
  }
  function O(E) {
    if (E._status === -1) {
      var L = E._result;
      L = L(), L.then(
        function(Z) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = Z);
        },
        function(Z) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = Z);
        }
      ), E._status === -1 && (E._status = 0, E._result = L);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ie = typeof reportError == "function" ? reportError : function(E) {
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
    forEach: function(E, L, Z) {
      Y(
        E,
        function() {
          L.apply(this, arguments);
        },
        Z
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
  return ve.Activity = b, ve.Children = J, ve.Component = $, ve.Fragment = l, ve.Profiler = u, ve.PureComponent = K, ve.StrictMode = s, ve.Suspense = m, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return G.H.useMemoCache(E);
    }
  }, ve.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(E, L, Z) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var te = x({}, E.props), fe = E.key;
    if (L != null)
      for (Ee in L.key !== void 0 && (fe = "" + L.key), L)
        !ce.call(L, Ee) || Ee === "key" || Ee === "__self" || Ee === "__source" || Ee === "ref" && L.ref === void 0 || (te[Ee] = L[Ee]);
    var Ee = arguments.length - 2;
    if (Ee === 1) te.children = Z;
    else if (1 < Ee) {
      for (var Te = Array(Ee), at = 0; at < Ee; at++)
        Te[at] = arguments[at + 2];
      te.children = Te;
    }
    return ue(E.type, fe, te);
  }, ve.createContext = function(E) {
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
  }, ve.createElement = function(E, L, Z) {
    var te, fe = {}, Ee = null;
    if (L != null)
      for (te in L.key !== void 0 && (Ee = "" + L.key), L)
        ce.call(L, te) && te !== "key" && te !== "__self" && te !== "__source" && (fe[te] = L[te]);
    var Te = arguments.length - 2;
    if (Te === 1) fe.children = Z;
    else if (1 < Te) {
      for (var at = Array(Te), Ve = 0; Ve < Te; Ve++)
        at[Ve] = arguments[Ve + 2];
      fe.children = at;
    }
    if (E && E.defaultProps)
      for (te in Te = E.defaultProps, Te)
        fe[te] === void 0 && (fe[te] = Te[te]);
    return ue(E, Ee, fe);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(E) {
    return { $$typeof: v, render: E };
  }, ve.isValidElement = Q, ve.lazy = function(E) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: E },
      _init: O
    };
  }, ve.memo = function(E, L) {
    return {
      $$typeof: g,
      type: E,
      compare: L === void 0 ? null : L
    };
  }, ve.startTransition = function(E) {
    var L = G.T, Z = {};
    G.T = Z;
    try {
      var te = E(), fe = G.S;
      fe !== null && fe(Z, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(ne, ie);
    } catch (Ee) {
      ie(Ee);
    } finally {
      L !== null && Z.types !== null && (L.types = Z.types), G.T = L;
    }
  }, ve.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, ve.use = function(E) {
    return G.H.use(E);
  }, ve.useActionState = function(E, L, Z) {
    return G.H.useActionState(E, L, Z);
  }, ve.useCallback = function(E, L) {
    return G.H.useCallback(E, L);
  }, ve.useContext = function(E) {
    return G.H.useContext(E);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(E, L) {
    return G.H.useDeferredValue(E, L);
  }, ve.useEffect = function(E, L) {
    return G.H.useEffect(E, L);
  }, ve.useEffectEvent = function(E) {
    return G.H.useEffectEvent(E);
  }, ve.useId = function() {
    return G.H.useId();
  }, ve.useImperativeHandle = function(E, L, Z) {
    return G.H.useImperativeHandle(E, L, Z);
  }, ve.useInsertionEffect = function(E, L) {
    return G.H.useInsertionEffect(E, L);
  }, ve.useLayoutEffect = function(E, L) {
    return G.H.useLayoutEffect(E, L);
  }, ve.useMemo = function(E, L) {
    return G.H.useMemo(E, L);
  }, ve.useOptimistic = function(E, L) {
    return G.H.useOptimistic(E, L);
  }, ve.useReducer = function(E, L, Z) {
    return G.H.useReducer(E, L, Z);
  }, ve.useRef = function(E) {
    return G.H.useRef(E);
  }, ve.useState = function(E) {
    return G.H.useState(E);
  }, ve.useSyncExternalStore = function(E, L, Z) {
    return G.H.useSyncExternalStore(
      E,
      L,
      Z
    );
  }, ve.useTransition = function() {
    return G.H.useTransition();
  }, ve.version = "19.2.7", ve;
}
var yh;
function id() {
  return yh || (yh = 1, Nu.exports = Lb()), Nu.exports;
}
var P = id();
const Bb = /* @__PURE__ */ zb(P);
var ju = { exports: {} }, Qr = {}, wu = { exports: {} }, $u = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vh;
function Vb() {
  return vh || (vh = 1, (function(a) {
    function r(T, Y) {
      var O = T.length;
      T.push(Y);
      e: for (; 0 < O; ) {
        var ie = O - 1 >>> 1, J = T[ie];
        if (0 < u(J, Y))
          T[ie] = Y, T[O] = J, O = ie;
        else break e;
      }
    }
    function l(T) {
      return T.length === 0 ? null : T[0];
    }
    function s(T) {
      if (T.length === 0) return null;
      var Y = T[0], O = T.pop();
      if (O !== Y) {
        T[0] = O;
        e: for (var ie = 0, J = T.length, E = J >>> 1; ie < E; ) {
          var L = 2 * (ie + 1) - 1, Z = T[L], te = L + 1, fe = T[te];
          if (0 > u(Z, O))
            te < J && 0 > u(fe, Z) ? (T[ie] = fe, T[te] = O, ie = te) : (T[ie] = Z, T[L] = O, ie = L);
          else if (te < J && 0 > u(fe, O))
            T[ie] = fe, T[te] = O, ie = te;
          else break e;
        }
      }
      return Y;
    }
    function u(T, Y) {
      var O = T.sortIndex - Y.sortIndex;
      return O !== 0 ? O : T.id - Y.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var f = Date, v = f.now();
      a.unstable_now = function() {
        return f.now() - v;
      };
    }
    var m = [], g = [], y = 1, b = null, _ = 3, N = !1, R = !1, x = !1, H = !1, $ = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function ae(T) {
      for (var Y = l(g); Y !== null; ) {
        if (Y.callback === null) s(g);
        else if (Y.startTime <= T)
          s(g), Y.sortIndex = Y.expirationTime, r(m, Y);
        else break;
        Y = l(g);
      }
    }
    function X(T) {
      if (x = !1, ae(T), !R)
        if (l(m) !== null)
          R = !0, ne || (ne = !0, oe());
        else {
          var Y = l(g);
          Y !== null && he(X, Y.startTime - T);
        }
    }
    var ne = !1, G = -1, ce = 5, ue = -1;
    function k() {
      return H ? !0 : !(a.unstable_now() - ue < ce);
    }
    function Q() {
      if (H = !1, ne) {
        var T = a.unstable_now();
        ue = T;
        var Y = !0;
        try {
          e: {
            R = !1, x && (x = !1, z(G), G = -1), N = !0;
            var O = _;
            try {
              t: {
                for (ae(T), b = l(m); b !== null && !(b.expirationTime > T && k()); ) {
                  var ie = b.callback;
                  if (typeof ie == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var J = ie(
                      b.expirationTime <= T
                    );
                    if (T = a.unstable_now(), typeof J == "function") {
                      b.callback = J, ae(T), Y = !0;
                      break t;
                    }
                    b === l(m) && s(m), ae(T);
                  } else s(m);
                  b = l(m);
                }
                if (b !== null) Y = !0;
                else {
                  var E = l(g);
                  E !== null && he(
                    X,
                    E.startTime - T
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              b = null, _ = O, N = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? oe() : ne = !1;
        }
      }
    }
    var oe;
    if (typeof K == "function")
      oe = function() {
        K(Q);
      };
    else if (typeof MessageChannel < "u") {
      var ye = new MessageChannel(), ee = ye.port2;
      ye.port1.onmessage = Q, oe = function() {
        ee.postMessage(null);
      };
    } else
      oe = function() {
        $(Q, 0);
      };
    function he(T, Y) {
      G = $(function() {
        T(a.unstable_now());
      }, Y);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, a.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ce = 0 < T ? Math.floor(1e3 / T) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, a.unstable_next = function(T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = _;
      }
      var O = _;
      _ = Y;
      try {
        return T();
      } finally {
        _ = O;
      }
    }, a.unstable_requestPaint = function() {
      H = !0;
    }, a.unstable_runWithPriority = function(T, Y) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var O = _;
      _ = T;
      try {
        return Y();
      } finally {
        _ = O;
      }
    }, a.unstable_scheduleCallback = function(T, Y, O) {
      var ie = a.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? ie + O : ie) : O = ie, T) {
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
      return J = O + J, T = {
        id: y++,
        callback: Y,
        priorityLevel: T,
        startTime: O,
        expirationTime: J,
        sortIndex: -1
      }, O > ie ? (T.sortIndex = O, r(g, T), l(m) === null && T === l(g) && (x ? (z(G), G = -1) : x = !0, he(X, O - ie))) : (T.sortIndex = J, r(m, T), R || N || (R = !0, ne || (ne = !0, oe()))), T;
    }, a.unstable_shouldYield = k, a.unstable_wrapCallback = function(T) {
      var Y = _;
      return function() {
        var O = _;
        _ = Y;
        try {
          return T.apply(this, arguments);
        } finally {
          _ = O;
        }
      };
    };
  })($u)), $u;
}
var bh;
function Hb() {
  return bh || (bh = 1, wu.exports = Vb()), wu.exports;
}
var Tu = { exports: {} }, Nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sh;
function Gb() {
  if (Sh) return Nt;
  Sh = 1;
  var a = id();
  function r(m) {
    var g = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + m + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var s = {
    d: {
      f: l,
      r: function() {
        throw Error(r(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function d(m, g, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: b == null ? null : "" + b,
      children: m,
      containerInfo: g,
      implementation: y
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(m, g) {
    if (m === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Nt.createPortal = function(m, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return d(m, g, null, y);
  }, Nt.flushSync = function(m) {
    var g = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, m) return m();
    } finally {
      f.T = g, s.p = y, s.d.f();
    }
  }, Nt.preconnect = function(m, g) {
    typeof m == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(m, g));
  }, Nt.prefetchDNS = function(m) {
    typeof m == "string" && s.d.D(m);
  }, Nt.preinit = function(m, g) {
    if (typeof m == "string" && g && typeof g.as == "string") {
      var y = g.as, b = v(y, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, N = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        m,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: _,
          fetchPriority: N
        }
      ) : y === "script" && s.d.X(m, {
        crossOrigin: b,
        integrity: _,
        fetchPriority: N,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Nt.preinitModule = function(m, g) {
    if (typeof m == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var y = v(
            g.as,
            g.crossOrigin
          );
          s.d.M(m, {
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(m);
  }, Nt.preload = function(m, g) {
    if (typeof m == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, b = v(y, g.crossOrigin);
      s.d.L(m, y, {
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
  }, Nt.preloadModule = function(m, g) {
    if (typeof m == "string")
      if (g) {
        var y = v(g.as, g.crossOrigin);
        s.d.m(m, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(m);
  }, Nt.requestFormReset = function(m) {
    s.d.r(m);
  }, Nt.unstable_batchedUpdates = function(m, g) {
    return m(g);
  }, Nt.useFormState = function(m, g, y) {
    return f.H.useFormState(m, g, y);
  }, Nt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Nt.version = "19.2.7", Nt;
}
var _h;
function qb() {
  if (_h) return Tu.exports;
  _h = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), Tu.exports = Gb(), Tu.exports;
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
var Eh;
function Ib() {
  if (Eh) return Qr;
  Eh = 1;
  var a = Hb(), r = id(), l = qb();
  function s(e) {
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
  function v(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (d(e) !== e)
      throw Error(s(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(s(188));
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
        throw Error(s(188));
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
          if (!p) throw Error(s(189));
        }
      }
      if (n.alternate !== i) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = y(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, _ = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), k = Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ye = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case $:
        return "Profiler";
      case H:
        return "StrictMode";
      case X:
        return "Suspense";
      case ne:
        return "SuspenseList";
      case ue:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return "Portal";
        case K:
          return e.displayName || "Context";
        case z:
          return (e._context.displayName || "Context") + ".Consumer";
        case ae:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
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
  var he = Array.isArray, T = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], J = -1;
  function E(e) {
    return { current: e };
  }
  function L(e) {
    0 > J || (e.current = ie[J], ie[J] = null, J--);
  }
  function Z(e, t) {
    J++, ie[J] = e.current, e.current = t;
  }
  var te = E(null), fe = E(null), Ee = E(null), Te = E(null);
  function at(e, t) {
    switch (Z(Ee, t), Z(fe, e), Z(te, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Lm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Lm(t), e = Bm(t, e);
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
    L(te), Z(te, e);
  }
  function Ve() {
    L(te), L(fe), L(Ee);
  }
  function fn(e) {
    e.memoizedState !== null && Z(Te, e);
    var t = te.current, n = Bm(t, e.type);
    t !== n && (Z(fe, e), Z(te, n));
  }
  function En(e) {
    fe.current === e && (L(te), L(fe)), Te.current === e && (L(Te), Ir._currentValue = O);
  }
  var Fn, W;
  function pe(e) {
    if (Fn === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Fn = t && t[1] || "", W = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Fn + e + W;
  }
  var ke = !1;
  function it(e, t) {
    if (!e || ke) return "";
    ke = !0;
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
                  var C = U;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (U) {
                  C = U;
                }
                e.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                C = U;
              }
              (I = e()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch (U) {
            if (U && C && typeof U.stack == "string")
              return [U.stack, C.stack];
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
        var A = p.split(`
`), D = S.split(`
`);
        for (o = i = 0; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < D.length && !D[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === A.length || o === D.length)
          for (i = A.length - 1, o = D.length - 1; 1 <= i && 0 <= o && A[i] !== D[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (A[i] !== D[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || A[i] !== D[o]) {
                  var V = `
` + A[i].replace(" at new ", " at ");
                  return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ke = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? pe(n) : "";
  }
  function ft(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return pe(e.type);
      case 16:
        return pe("Lazy");
      case 13:
        return e.child !== t && t !== null ? pe("Suspense Fallback") : pe("Suspense");
      case 19:
        return pe("SuspenseList");
      case 0:
      case 15:
        return it(e.type, !1);
      case 11:
        return it(e.type.render, !1);
      case 1:
        return it(e.type, !0);
      case 31:
        return pe("Activity");
      default:
        return "";
    }
  }
  function Et(e) {
    try {
      var t = "", n = null;
      do
        t += ft(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Tt = Object.prototype.hasOwnProperty, an = a.unstable_scheduleCallback, Fe = a.unstable_cancelCallback, ti = a.unstable_shouldYield, Pi = a.unstable_requestPaint, pt = a.unstable_now, bl = a.unstable_getCurrentPriorityLevel, ni = a.unstable_ImmediatePriority, ai = a.unstable_UserBlockingPriority, er = a.unstable_NormalPriority, fo = a.unstable_LowPriority, tr = a.unstable_IdlePriority, po = a.log, Wn = a.unstable_setDisableYieldValue, xn = null, Ze = null;
  function pn(e) {
    if (typeof po == "function" && Wn(e), Ze && typeof Ze.setStrictMode == "function")
      try {
        Ze.setStrictMode(xn, e);
      } catch {
      }
  }
  var xt = Math.clz32 ? Math.clz32 : _l, An = Math.log, Sl = Math.LN2;
  function _l(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (An(e) / Sl | 0) | 0;
  }
  var Ma = 256, Da = 262144, Ca = 4194304;
  function B(e) {
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
  function Se(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, c = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var S = i & 134217727;
    return S !== 0 ? (i = S & ~c, i !== 0 ? o = B(i) : (p &= S, p !== 0 ? o = B(p) : n || (n = S & ~e, n !== 0 && (o = B(n))))) : (S = i & ~c, S !== 0 ? o = B(S) : p !== 0 ? o = B(p) : n || (n = i & ~e, n !== 0 && (o = B(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function rt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ii(e, t) {
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
  function Re() {
    var e = Ca;
    return Ca <<= 1, (Ca & 62914560) === 0 && (Ca = 4194304), e;
  }
  function mn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function jt(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function rn(e, t, n, i, o, c) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var S = e.entanglements, A = e.expirationTimes, D = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var V = 31 - xt(n), I = 1 << V;
      S[V] = 0, A[V] = -1;
      var C = D[V];
      if (C !== null)
        for (D[V] = null, V = 0; V < C.length; V++) {
          var U = C[V];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~I;
    }
    i !== 0 && nr(e, i, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(p & ~t));
  }
  function nr(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - xt(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930;
  }
  function At(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - xt(n), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), n &= ~o;
    }
  }
  function Oa(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : ar(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function ar(e) {
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
  function mo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _d() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : sh(e.type));
  }
  function Ed(e, t) {
    var n = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = n;
    }
  }
  var Pn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + Pn, Mt = "__reactProps$" + Pn, ri = "__reactContainer$" + Pn, ho = "__reactEvents$" + Pn, _y = "__reactListeners$" + Pn, Ey = "__reactHandles$" + Pn, xd = "__reactResources$" + Pn, ir = "__reactMarker$" + Pn;
  function go(e) {
    delete e[yt], delete e[Mt], delete e[ho], delete e[_y], delete e[Ey];
  }
  function li(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ri] || n[yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = km(e); e !== null; ) {
            if (n = e[yt]) return n;
            e = km(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function si(e) {
    if (e = e[yt] || e[ri]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function rr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function oi(e) {
    var t = e[xd];
    return t || (t = e[xd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function mt(e) {
    e[ir] = !0;
  }
  var Ad = /* @__PURE__ */ new Set(), Nd = {};
  function za(e, t) {
    ci(e, t), ci(e + "Capture", t);
  }
  function ci(e, t) {
    for (Nd[e] = t, e = 0; e < t.length; e++)
      Ad.add(t[e]);
  }
  var xy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jd = {}, wd = {};
  function Ay(e) {
    return Tt.call(wd, e) ? !0 : Tt.call(jd, e) ? !1 : xy.test(e) ? wd[e] = !0 : (jd[e] = !0, !1);
  }
  function El(e, t, n) {
    if (Ay(t))
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
  function xl(e, t, n) {
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
  function Nn(e, t, n, i) {
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
  function kt(e) {
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
  function $d(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ny(e, t, n) {
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
  function yo(e) {
    if (!e._valueTracker) {
      var t = $d(e) ? "checked" : "value";
      e._valueTracker = Ny(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Td(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = $d(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Al(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var jy = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      jy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function vo(e, t, n, i, o, c, p, S) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + kt(t)) : e.value !== "" + kt(t) && (e.value = "" + kt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? bo(e, p, kt(t)) : n != null ? bo(e, p, kt(n)) : i != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + kt(S) : e.removeAttribute("name");
  }
  function Md(e, t, n, i, o, c, p, S) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        yo(e);
        return;
      }
      n = n != null ? "" + kt(n) : "", t = t != null ? "" + kt(t) : n, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = S ? e.checked : !!i, e.defaultChecked = !!i, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), yo(e);
  }
  function bo(e, t, n) {
    t === "number" && Al(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function ui(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + kt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dd(e, t, n) {
    if (t != null && (t = "" + kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + kt(n) : "";
  }
  function Cd(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(s(92));
        if (he(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = kt(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i), yo(e);
  }
  function di(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Od(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || wy.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function zd(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var o in t)
        i = t[o], t.hasOwnProperty(o) && n[o] !== i && Od(e, o, i);
    } else
      for (var c in t)
        t.hasOwnProperty(c) && Od(e, c, t[c]);
  }
  function So(e) {
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
  var $y = /* @__PURE__ */ new Map([
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
  ]), Ty = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nl(e) {
    return Ty.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function jn() {
  }
  var _o = null;
  function Eo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var fi = null, pi = null;
  function Rd(e) {
    var t = si(e);
    if (t && (e = t.stateNode)) {
      var n = e[Mt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (vo(
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
              'input[name="' + Yt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[Mt] || null;
                if (!o) throw Error(s(90));
                vo(
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
              i = n[t], i.form === e.form && Td(i);
          }
          break e;
        case "textarea":
          Dd(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ui(e, !!n.multiple, t, !1);
      }
    }
  }
  var xo = !1;
  function Ud(e, t, n) {
    if (xo) return e(t, n);
    xo = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (xo = !1, (fi !== null || pi !== null) && (fs(), fi && (t = fi, e = pi, pi = fi = null, Rd(t), e)))
        for (t = 0; t < e.length; t++) Rd(e[t]);
    }
  }
  function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[Mt] || null;
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
        s(231, t, typeof n)
      );
    return n;
  }
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ao = !1;
  if (wn)
    try {
      var sr = {};
      Object.defineProperty(sr, "passive", {
        get: function() {
          Ao = !0;
        }
      }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
    } catch {
      Ao = !1;
    }
  var ea = null, No = null, jl = null;
  function Ld() {
    if (jl) return jl;
    var e, t = No, n = t.length, i, o = "value" in ea ? ea.value : ea.textContent, c = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (i = 1; i <= p && t[n - i] === o[c - i]; i++) ;
    return jl = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function wl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $l() {
    return !0;
  }
  function Bd() {
    return !1;
  }
  function Dt(e) {
    function t(n, i, o, c, p) {
      this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = c, this.target = p, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(c) : c[S]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? $l : Bd, this.isPropagationStopped = Bd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $l);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $l);
      },
      persist: function() {
      },
      isPersistent: $l
    }), t;
  }
  var Ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Tl = Dt(Ra), or = b({}, Ra, { view: 0, detail: 0 }), My = Dt(or), jo, wo, cr, Ml = b({}, or, {
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
    getModifierState: To,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== cr && (cr && e.type === "mousemove" ? (jo = e.screenX - cr.screenX, wo = e.screenY - cr.screenY) : wo = jo = 0, cr = e), jo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : wo;
    }
  }), Vd = Dt(Ml), Dy = b({}, Ml, { dataTransfer: 0 }), Cy = Dt(Dy), Oy = b({}, or, { relatedTarget: 0 }), $o = Dt(Oy), zy = b({}, Ra, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ry = Dt(zy), Uy = b({}, Ra, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ly = Dt(Uy), By = b({}, Ra, { data: 0 }), Hd = Dt(By), Vy = {
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
  }, Hy = {
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
  }, Gy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gy[e]) ? !!t[e] : !1;
  }
  function To() {
    return qy;
  }
  var Iy = b({}, or, {
    key: function(e) {
      if (e.key) {
        var t = Vy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: To,
    charCode: function(e) {
      return e.type === "keypress" ? wl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Ky = Dt(Iy), ky = b({}, Ml, {
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
  }), Gd = Dt(ky), Yy = b({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: To
  }), Xy = Dt(Yy), Qy = b({}, Ra, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zy = Dt(Qy), Jy = b({}, Ml, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fy = Dt(Jy), Wy = b({}, Ra, {
    newState: 0,
    oldState: 0
  }), Py = Dt(Wy), ev = [9, 13, 27, 32], Mo = wn && "CompositionEvent" in window, ur = null;
  wn && "documentMode" in document && (ur = document.documentMode);
  var tv = wn && "TextEvent" in window && !ur, qd = wn && (!Mo || ur && 8 < ur && 11 >= ur), Id = " ", Kd = !1;
  function kd(e, t) {
    switch (e) {
      case "keyup":
        return ev.indexOf(t.keyCode) !== -1;
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
  function Yd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var mi = !1;
  function nv(e, t) {
    switch (e) {
      case "compositionend":
        return Yd(t);
      case "keypress":
        return t.which !== 32 ? null : (Kd = !0, Id);
      case "textInput":
        return e = t.data, e === Id && Kd ? null : e;
      default:
        return null;
    }
  }
  function av(e, t) {
    if (mi)
      return e === "compositionend" || !Mo && kd(e, t) ? (e = Ld(), jl = No = ea = null, mi = !1, e) : null;
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
        return qd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var iv = {
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
  function Xd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!iv[e.type] : t === "textarea";
  }
  function Qd(e, t, n, i) {
    fi ? pi ? pi.push(i) : pi = [i] : fi = i, t = bs(t, "onChange"), 0 < t.length && (n = new Tl(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var dr = null, fr = null;
  function rv(e) {
    Dm(e, 0);
  }
  function Dl(e) {
    var t = rr(e);
    if (Td(t)) return e;
  }
  function Zd(e, t) {
    if (e === "change") return t;
  }
  var Jd = !1;
  if (wn) {
    var Do;
    if (wn) {
      var Co = "oninput" in document;
      if (!Co) {
        var Fd = document.createElement("div");
        Fd.setAttribute("oninput", "return;"), Co = typeof Fd.oninput == "function";
      }
      Do = Co;
    } else Do = !1;
    Jd = Do && (!document.documentMode || 9 < document.documentMode);
  }
  function Wd() {
    dr && (dr.detachEvent("onpropertychange", Pd), fr = dr = null);
  }
  function Pd(e) {
    if (e.propertyName === "value" && Dl(fr)) {
      var t = [];
      Qd(
        t,
        fr,
        e,
        Eo(e)
      ), Ud(rv, t);
    }
  }
  function lv(e, t, n) {
    e === "focusin" ? (Wd(), dr = t, fr = n, dr.attachEvent("onpropertychange", Pd)) : e === "focusout" && Wd();
  }
  function sv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Dl(fr);
  }
  function ov(e, t) {
    if (e === "click") return Dl(t);
  }
  function cv(e, t) {
    if (e === "input" || e === "change")
      return Dl(t);
  }
  function uv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : uv;
  function pr(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Tt.call(t, o) || !Bt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function ef(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tf(e, t) {
    var n = ef(e);
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
      n = ef(n);
    }
  }
  function nf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function af(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Al(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Al(e.document);
    }
    return t;
  }
  function Oo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var dv = wn && "documentMode" in document && 11 >= document.documentMode, hi = null, zo = null, mr = null, Ro = !1;
  function rf(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ro || hi == null || hi !== Al(i) || (i = hi, "selectionStart" in i && Oo(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), mr && pr(mr, i) || (mr = i, i = bs(zo, "onSelect"), 0 < i.length && (t = new Tl(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = hi)));
  }
  function Ua(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var gi = {
    animationend: Ua("Animation", "AnimationEnd"),
    animationiteration: Ua("Animation", "AnimationIteration"),
    animationstart: Ua("Animation", "AnimationStart"),
    transitionrun: Ua("Transition", "TransitionRun"),
    transitionstart: Ua("Transition", "TransitionStart"),
    transitioncancel: Ua("Transition", "TransitionCancel"),
    transitionend: Ua("Transition", "TransitionEnd")
  }, Uo = {}, lf = {};
  wn && (lf = document.createElement("div").style, "AnimationEvent" in window || (delete gi.animationend.animation, delete gi.animationiteration.animation, delete gi.animationstart.animation), "TransitionEvent" in window || delete gi.transitionend.transition);
  function La(e) {
    if (Uo[e]) return Uo[e];
    if (!gi[e]) return e;
    var t = gi[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in lf)
        return Uo[e] = t[n];
    return e;
  }
  var sf = La("animationend"), of = La("animationiteration"), cf = La("animationstart"), fv = La("transitionrun"), pv = La("transitionstart"), mv = La("transitioncancel"), uf = La("transitionend"), df = /* @__PURE__ */ new Map(), Lo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Lo.push("scrollEnd");
  function ln(e, t) {
    df.set(e, t), za(t, [e]);
  }
  var Cl = typeof reportError == "function" ? reportError : function(e) {
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
  }, Xt = [], yi = 0, Bo = 0;
  function Ol() {
    for (var e = yi, t = Bo = yi = 0; t < e; ) {
      var n = Xt[t];
      Xt[t++] = null;
      var i = Xt[t];
      Xt[t++] = null;
      var o = Xt[t];
      Xt[t++] = null;
      var c = Xt[t];
      if (Xt[t++] = null, i !== null && o !== null) {
        var p = i.pending;
        p === null ? o.next = o : (o.next = p.next, p.next = o), i.pending = o;
      }
      c !== 0 && ff(n, o, c);
    }
  }
  function zl(e, t, n, i) {
    Xt[yi++] = e, Xt[yi++] = t, Xt[yi++] = n, Xt[yi++] = i, Bo |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Vo(e, t, n, i) {
    return zl(e, t, n, i), Rl(e);
  }
  function Ba(e, t) {
    return zl(e, null, null, t), Rl(e);
  }
  function ff(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, c = e.return; c !== null; )
      c.childLanes |= n, i = c.alternate, i !== null && (i.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - xt(n), e = c.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), c) : null;
  }
  function Rl(e) {
    if (50 < Ur)
      throw Ur = 0, Qc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var vi = {};
  function hv(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vt(e, t, n, i) {
    return new hv(e, t, n, i);
  }
  function Ho(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $n(e, t) {
    var n = e.alternate;
    return n === null ? (n = Vt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function pf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ul(e, t, n, i, o, c) {
    var p = 0;
    if (i = e, typeof e == "function") Ho(e) && (p = 1);
    else if (typeof e == "string")
      p = Sb(
        e,
        n,
        te.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ue:
          return e = Vt(31, n, t, o), e.elementType = ue, e.lanes = c, e;
        case x:
          return Va(n.children, o, c, t);
        case H:
          p = 8, o |= 24;
          break;
        case $:
          return e = Vt(12, n, t, o | 2), e.elementType = $, e.lanes = c, e;
        case X:
          return e = Vt(13, n, t, o), e.elementType = X, e.lanes = c, e;
        case ne:
          return e = Vt(19, n, t, o), e.elementType = ne, e.lanes = c, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case K:
                p = 10;
                break e;
              case z:
                p = 9;
                break e;
              case ae:
                p = 11;
                break e;
              case G:
                p = 14;
                break e;
              case ce:
                p = 16, i = null;
                break e;
            }
          p = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Vt(p, n, t, o), t.elementType = e, t.type = i, t.lanes = c, t;
  }
  function Va(e, t, n, i) {
    return e = Vt(7, e, i, t), e.lanes = n, e;
  }
  function Go(e, t, n) {
    return e = Vt(6, e, null, t), e.lanes = n, e;
  }
  function mf(e) {
    var t = Vt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function qo(e, t, n) {
    return t = Vt(
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
  var hf = /* @__PURE__ */ new WeakMap();
  function Qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = hf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Et(t)
      }, hf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Et(t)
    };
  }
  var bi = [], Si = 0, Ll = null, hr = 0, Zt = [], Jt = 0, ta = null, hn = 1, gn = "";
  function Tn(e, t) {
    bi[Si++] = hr, bi[Si++] = Ll, Ll = e, hr = t;
  }
  function gf(e, t, n) {
    Zt[Jt++] = hn, Zt[Jt++] = gn, Zt[Jt++] = ta, ta = e;
    var i = hn;
    e = gn;
    var o = 32 - xt(i) - 1;
    i &= ~(1 << o), n += 1;
    var c = 32 - xt(t) + o;
    if (30 < c) {
      var p = o - o % 5;
      c = (i & (1 << p) - 1).toString(32), i >>= p, o -= p, hn = 1 << 32 - xt(t) + o | n << o | i, gn = c + e;
    } else
      hn = 1 << c | n << o | i, gn = e;
  }
  function Io(e) {
    e.return !== null && (Tn(e, 1), gf(e, 1, 0));
  }
  function Ko(e) {
    for (; e === Ll; )
      Ll = bi[--Si], bi[Si] = null, hr = bi[--Si], bi[Si] = null;
    for (; e === ta; )
      ta = Zt[--Jt], Zt[Jt] = null, gn = Zt[--Jt], Zt[Jt] = null, hn = Zt[--Jt], Zt[Jt] = null;
  }
  function yf(e, t) {
    Zt[Jt++] = hn, Zt[Jt++] = gn, Zt[Jt++] = ta, hn = t.id, gn = t.overflow, ta = e;
  }
  var vt = null, Ye = null, $e = !1, na = null, Ft = !1, ko = Error(s(519));
  function aa(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw gr(Qt(t, e)), ko;
  }
  function vf(e) {
    var t = e.stateNode, n = e.type, i = e.memoizedProps;
    switch (t[yt] = e, t[Mt] = i, n) {
      case "dialog":
        Ne("cancel", t), Ne("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ne("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Br.length; n++)
          Ne(Br[n], t);
        break;
      case "source":
        Ne("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ne("error", t), Ne("load", t);
        break;
      case "details":
        Ne("toggle", t);
        break;
      case "input":
        Ne("invalid", t), Md(
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
        Ne("invalid", t);
        break;
      case "textarea":
        Ne("invalid", t), Cd(t, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || Rm(t.textContent, n) ? (i.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), i.onScroll != null && Ne("scroll", t), i.onScrollEnd != null && Ne("scrollend", t), i.onClick != null && (t.onclick = jn), t = !0) : t = !1, t || aa(e, !0);
  }
  function bf(e) {
    for (vt = e.return; vt; )
      switch (vt.tag) {
        case 5:
        case 31:
        case 13:
          Ft = !1;
          return;
        case 27:
        case 3:
          Ft = !0;
          return;
        default:
          vt = vt.return;
      }
  }
  function _i(e) {
    if (e !== vt) return !1;
    if (!$e) return bf(e), $e = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || cu(e.type, e.memoizedProps)), n = !n), n && Ye && aa(e), bf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Ye = Km(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Ye = Km(e);
    } else
      t === 27 ? (t = Ye, ya(e.type) ? (e = mu, mu = null, Ye = e) : Ye = t) : Ye = vt ? Pt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    Ye = vt = null, $e = !1;
  }
  function Yo() {
    var e = na;
    return e !== null && (Rt === null ? Rt = e : Rt.push.apply(
      Rt,
      e
    ), na = null), e;
  }
  function gr(e) {
    na === null ? na = [e] : na.push(e);
  }
  var Xo = E(null), Ga = null, Mn = null;
  function ia(e, t, n) {
    Z(Xo, t._currentValue), t._currentValue = n;
  }
  function Dn(e) {
    e._currentValue = Xo.current, L(Xo);
  }
  function Qo(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Zo(e, t, n, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var p = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var S = c;
          c = o;
          for (var A = 0; A < t.length; A++)
            if (S.context === t[A]) {
              c.lanes |= n, S = c.alternate, S !== null && (S.lanes |= n), Qo(
                c.return,
                n,
                e
              ), i || (p = null);
              break e;
            }
          c = S.next;
        }
      } else if (o.tag === 18) {
        if (p = o.return, p === null) throw Error(s(341));
        p.lanes |= n, c = p.alternate, c !== null && (c.lanes |= n), Qo(p, n, e), p = null;
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
  function Ei(e, t, n, i) {
    e = null;
    for (var o = t, c = !1; o !== null; ) {
      if (!c) {
        if ((o.flags & 524288) !== 0) c = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var p = o.alternate;
        if (p === null) throw Error(s(387));
        if (p = p.memoizedProps, p !== null) {
          var S = o.type;
          Bt(o.pendingProps.value, p.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (o === Te.current) {
        if (p = o.alternate, p === null) throw Error(s(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Ir) : e = [Ir]);
      }
      o = o.return;
    }
    e !== null && Zo(
      t,
      e,
      n,
      i
    ), t.flags |= 262144;
  }
  function Bl(e) {
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
  function qa(e) {
    Ga = e, Mn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function bt(e) {
    return Sf(Ga, e);
  }
  function Vl(e, t) {
    return Ga === null && qa(e), Sf(e, t);
  }
  function Sf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Mn === null) {
      if (e === null) throw Error(s(308));
      Mn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Mn = Mn.next = t;
    return n;
  }
  var gv = typeof AbortController < "u" ? AbortController : function() {
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
  }, yv = a.unstable_scheduleCallback, vv = a.unstable_NormalPriority, lt = {
    $$typeof: K,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Jo() {
    return {
      controller: new gv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function yr(e) {
    e.refCount--, e.refCount === 0 && yv(vv, function() {
      e.controller.abort();
    });
  }
  var vr = null, Fo = 0, xi = 0, Ai = null;
  function bv(e, t) {
    if (vr === null) {
      var n = vr = [];
      Fo = 0, xi = eu(), Ai = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Fo++, t.then(_f, _f), t;
  }
  function _f() {
    if (--Fo === 0 && vr !== null) {
      Ai !== null && (Ai.status = "fulfilled");
      var e = vr;
      vr = null, xi = 0, Ai = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Sv(e, t) {
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
  var Ef = T.S;
  T.S = function(e, t) {
    rm = pt(), typeof t == "object" && t !== null && typeof t.then == "function" && bv(e, t), Ef !== null && Ef(e, t);
  };
  var Ia = E(null);
  function Wo() {
    var e = Ia.current;
    return e !== null ? e : Ke.pooledCache;
  }
  function Hl(e, t) {
    t === null ? Z(Ia, Ia.current) : Z(Ia, t.pool);
  }
  function xf() {
    var e = Wo();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var Ni = Error(s(460)), Po = Error(s(474)), Gl = Error(s(542)), ql = { then: function() {
  } };
  function Af(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Nf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(jn, jn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, wf(e), e;
      default:
        if (typeof t.status == "string") t.then(jn, jn);
        else {
          if (e = Ke, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
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
            throw e = t.reason, wf(e), e;
        }
        throw ka = t, Ni;
    }
  }
  function Ka(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ka = n, Ni) : n;
    }
  }
  var ka = null;
  function jf() {
    if (ka === null) throw Error(s(459));
    var e = ka;
    return ka = null, e;
  }
  function wf(e) {
    if (e === Ni || e === Gl)
      throw Error(s(483));
  }
  var ji = null, br = 0;
  function Il(e) {
    var t = br;
    return br += 1, ji === null && (ji = []), Nf(ji, e, t);
  }
  function Sr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Kl(e, t) {
    throw t.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function $f(e) {
    function t(w, j) {
      if (e) {
        var M = w.deletions;
        M === null ? (w.deletions = [j], w.flags |= 16) : M.push(j);
      }
    }
    function n(w, j) {
      if (!e) return null;
      for (; j !== null; )
        t(w, j), j = j.sibling;
      return null;
    }
    function i(w) {
      for (var j = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? j.set(w.key, w) : j.set(w.index, w), w = w.sibling;
      return j;
    }
    function o(w, j) {
      return w = $n(w, j), w.index = 0, w.sibling = null, w;
    }
    function c(w, j, M) {
      return w.index = M, e ? (M = w.alternate, M !== null ? (M = M.index, M < j ? (w.flags |= 67108866, j) : M) : (w.flags |= 67108866, j)) : (w.flags |= 1048576, j);
    }
    function p(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function S(w, j, M, q) {
      return j === null || j.tag !== 6 ? (j = Go(M, w.mode, q), j.return = w, j) : (j = o(j, M), j.return = w, j);
    }
    function A(w, j, M, q) {
      var se = M.type;
      return se === x ? V(
        w,
        j,
        M.props.children,
        q,
        M.key
      ) : j !== null && (j.elementType === se || typeof se == "object" && se !== null && se.$$typeof === ce && Ka(se) === j.type) ? (j = o(j, M.props), Sr(j, M), j.return = w, j) : (j = Ul(
        M.type,
        M.key,
        M.props,
        null,
        w.mode,
        q
      ), Sr(j, M), j.return = w, j);
    }
    function D(w, j, M, q) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== M.containerInfo || j.stateNode.implementation !== M.implementation ? (j = qo(M, w.mode, q), j.return = w, j) : (j = o(j, M.children || []), j.return = w, j);
    }
    function V(w, j, M, q, se) {
      return j === null || j.tag !== 7 ? (j = Va(
        M,
        w.mode,
        q,
        se
      ), j.return = w, j) : (j = o(j, M), j.return = w, j);
    }
    function I(w, j, M) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Go(
          "" + j,
          w.mode,
          M
        ), j.return = w, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case N:
            return M = Ul(
              j.type,
              j.key,
              j.props,
              null,
              w.mode,
              M
            ), Sr(M, j), M.return = w, M;
          case R:
            return j = qo(
              j,
              w.mode,
              M
            ), j.return = w, j;
          case ce:
            return j = Ka(j), I(w, j, M);
        }
        if (he(j) || oe(j))
          return j = Va(
            j,
            w.mode,
            M,
            null
          ), j.return = w, j;
        if (typeof j.then == "function")
          return I(w, Il(j), M);
        if (j.$$typeof === K)
          return I(
            w,
            Vl(w, j),
            M
          );
        Kl(w, j);
      }
      return null;
    }
    function C(w, j, M, q) {
      var se = j !== null ? j.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return se !== null ? null : S(w, j, "" + M, q);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case N:
            return M.key === se ? A(w, j, M, q) : null;
          case R:
            return M.key === se ? D(w, j, M, q) : null;
          case ce:
            return M = Ka(M), C(w, j, M, q);
        }
        if (he(M) || oe(M))
          return se !== null ? null : V(w, j, M, q, null);
        if (typeof M.then == "function")
          return C(
            w,
            j,
            Il(M),
            q
          );
        if (M.$$typeof === K)
          return C(
            w,
            j,
            Vl(w, M),
            q
          );
        Kl(w, M);
      }
      return null;
    }
    function U(w, j, M, q, se) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return w = w.get(M) || null, S(j, w, "" + q, se);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case N:
            return w = w.get(
              q.key === null ? M : q.key
            ) || null, A(j, w, q, se);
          case R:
            return w = w.get(
              q.key === null ? M : q.key
            ) || null, D(j, w, q, se);
          case ce:
            return q = Ka(q), U(
              w,
              j,
              M,
              q,
              se
            );
        }
        if (he(q) || oe(q))
          return w = w.get(M) || null, V(j, w, q, se, null);
        if (typeof q.then == "function")
          return U(
            w,
            j,
            M,
            Il(q),
            se
          );
        if (q.$$typeof === K)
          return U(
            w,
            j,
            M,
            Vl(j, q),
            se
          );
        Kl(j, q);
      }
      return null;
    }
    function re(w, j, M, q) {
      for (var se = null, Ce = null, le = j, xe = j = 0, we = null; le !== null && xe < M.length; xe++) {
        le.index > xe ? (we = le, le = null) : we = le.sibling;
        var Oe = C(
          w,
          le,
          M[xe],
          q
        );
        if (Oe === null) {
          le === null && (le = we);
          break;
        }
        e && le && Oe.alternate === null && t(w, le), j = c(Oe, j, xe), Ce === null ? se = Oe : Ce.sibling = Oe, Ce = Oe, le = we;
      }
      if (xe === M.length)
        return n(w, le), $e && Tn(w, xe), se;
      if (le === null) {
        for (; xe < M.length; xe++)
          le = I(w, M[xe], q), le !== null && (j = c(
            le,
            j,
            xe
          ), Ce === null ? se = le : Ce.sibling = le, Ce = le);
        return $e && Tn(w, xe), se;
      }
      for (le = i(le); xe < M.length; xe++)
        we = U(
          le,
          w,
          xe,
          M[xe],
          q
        ), we !== null && (e && we.alternate !== null && le.delete(
          we.key === null ? xe : we.key
        ), j = c(
          we,
          j,
          xe
        ), Ce === null ? se = we : Ce.sibling = we, Ce = we);
      return e && le.forEach(function(Ea) {
        return t(w, Ea);
      }), $e && Tn(w, xe), se;
    }
    function de(w, j, M, q) {
      if (M == null) throw Error(s(151));
      for (var se = null, Ce = null, le = j, xe = j = 0, we = null, Oe = M.next(); le !== null && !Oe.done; xe++, Oe = M.next()) {
        le.index > xe ? (we = le, le = null) : we = le.sibling;
        var Ea = C(w, le, Oe.value, q);
        if (Ea === null) {
          le === null && (le = we);
          break;
        }
        e && le && Ea.alternate === null && t(w, le), j = c(Ea, j, xe), Ce === null ? se = Ea : Ce.sibling = Ea, Ce = Ea, le = we;
      }
      if (Oe.done)
        return n(w, le), $e && Tn(w, xe), se;
      if (le === null) {
        for (; !Oe.done; xe++, Oe = M.next())
          Oe = I(w, Oe.value, q), Oe !== null && (j = c(Oe, j, xe), Ce === null ? se = Oe : Ce.sibling = Oe, Ce = Oe);
        return $e && Tn(w, xe), se;
      }
      for (le = i(le); !Oe.done; xe++, Oe = M.next())
        Oe = U(le, w, xe, Oe.value, q), Oe !== null && (e && Oe.alternate !== null && le.delete(Oe.key === null ? xe : Oe.key), j = c(Oe, j, xe), Ce === null ? se = Oe : Ce.sibling = Oe, Ce = Oe);
      return e && le.forEach(function(Db) {
        return t(w, Db);
      }), $e && Tn(w, xe), se;
    }
    function qe(w, j, M, q) {
      if (typeof M == "object" && M !== null && M.type === x && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case N:
            e: {
              for (var se = M.key; j !== null; ) {
                if (j.key === se) {
                  if (se = M.type, se === x) {
                    if (j.tag === 7) {
                      n(
                        w,
                        j.sibling
                      ), q = o(
                        j,
                        M.props.children
                      ), q.return = w, w = q;
                      break e;
                    }
                  } else if (j.elementType === se || typeof se == "object" && se !== null && se.$$typeof === ce && Ka(se) === j.type) {
                    n(
                      w,
                      j.sibling
                    ), q = o(j, M.props), Sr(q, M), q.return = w, w = q;
                    break e;
                  }
                  n(w, j);
                  break;
                } else t(w, j);
                j = j.sibling;
              }
              M.type === x ? (q = Va(
                M.props.children,
                w.mode,
                q,
                M.key
              ), q.return = w, w = q) : (q = Ul(
                M.type,
                M.key,
                M.props,
                null,
                w.mode,
                q
              ), Sr(q, M), q.return = w, w = q);
            }
            return p(w);
          case R:
            e: {
              for (se = M.key; j !== null; ) {
                if (j.key === se)
                  if (j.tag === 4 && j.stateNode.containerInfo === M.containerInfo && j.stateNode.implementation === M.implementation) {
                    n(
                      w,
                      j.sibling
                    ), q = o(j, M.children || []), q.return = w, w = q;
                    break e;
                  } else {
                    n(w, j);
                    break;
                  }
                else t(w, j);
                j = j.sibling;
              }
              q = qo(M, w.mode, q), q.return = w, w = q;
            }
            return p(w);
          case ce:
            return M = Ka(M), qe(
              w,
              j,
              M,
              q
            );
        }
        if (he(M))
          return re(
            w,
            j,
            M,
            q
          );
        if (oe(M)) {
          if (se = oe(M), typeof se != "function") throw Error(s(150));
          return M = se.call(M), de(
            w,
            j,
            M,
            q
          );
        }
        if (typeof M.then == "function")
          return qe(
            w,
            j,
            Il(M),
            q
          );
        if (M.$$typeof === K)
          return qe(
            w,
            j,
            Vl(w, M),
            q
          );
        Kl(w, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, j !== null && j.tag === 6 ? (n(w, j.sibling), q = o(j, M), q.return = w, w = q) : (n(w, j), q = Go(M, w.mode, q), q.return = w, w = q), p(w)) : n(w, j);
    }
    return function(w, j, M, q) {
      try {
        br = 0;
        var se = qe(
          w,
          j,
          M,
          q
        );
        return ji = null, se;
      } catch (le) {
        if (le === Ni || le === Gl) throw le;
        var Ce = Vt(29, le, null, w.mode);
        return Ce.lanes = q, Ce.return = w, Ce;
      } finally {
      }
    };
  }
  var Ya = $f(!0), Tf = $f(!1), ra = !1;
  function ec(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function la(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sa(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (ze & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Rl(e), ff(e, null, n), t;
    }
    return zl(e, i, t, n), Rl(e);
  }
  function _r(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, At(e, n);
    }
  }
  function nc(e, t) {
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
  var ac = !1;
  function Er() {
    if (ac) {
      var e = Ai;
      if (e !== null) throw e;
    }
  }
  function xr(e, t, n, i) {
    ac = !1;
    var o = e.updateQueue;
    ra = !1;
    var c = o.firstBaseUpdate, p = o.lastBaseUpdate, S = o.shared.pending;
    if (S !== null) {
      o.shared.pending = null;
      var A = S, D = A.next;
      A.next = null, p === null ? c = D : p.next = D, p = A;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, S = V.lastBaseUpdate, S !== p && (S === null ? V.firstBaseUpdate = D : S.next = D, V.lastBaseUpdate = A));
    }
    if (c !== null) {
      var I = o.baseState;
      p = 0, V = D = A = null, S = c;
      do {
        var C = S.lane & -536870913, U = C !== S.lane;
        if (U ? (je & C) === C : (i & C) === C) {
          C !== 0 && C === xi && (ac = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var re = e, de = S;
            C = t;
            var qe = n;
            switch (de.tag) {
              case 1:
                if (re = de.payload, typeof re == "function") {
                  I = re.call(qe, I, C);
                  break e;
                }
                I = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = de.payload, C = typeof re == "function" ? re.call(qe, I, C) : re, C == null) break e;
                I = b({}, I, C);
                break e;
              case 2:
                ra = !0;
            }
          }
          C = S.callback, C !== null && (e.flags |= 64, U && (e.flags |= 8192), U = o.callbacks, U === null ? o.callbacks = [C] : U.push(C));
        } else
          U = {
            lane: C,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, V === null ? (D = V = U, A = I) : V = V.next = U, p |= C;
        if (S = S.next, S === null) {
          if (S = o.shared.pending, S === null)
            break;
          U = S, S = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null;
        }
      } while (!0);
      V === null && (A = I), o.baseState = A, o.firstBaseUpdate = D, o.lastBaseUpdate = V, c === null && (o.shared.lanes = 0), fa |= p, e.lanes = p, e.memoizedState = I;
    }
  }
  function Mf(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function Df(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Mf(n[e], t);
  }
  var wi = E(null), kl = E(0);
  function Cf(e, t) {
    e = Hn, Z(kl, e), Z(wi, t), Hn = e | t.baseLanes;
  }
  function ic() {
    Z(kl, Hn), Z(wi, wi.current);
  }
  function rc() {
    Hn = kl.current, L(wi), L(kl);
  }
  var Ht = E(null), Wt = null;
  function oa(e) {
    var t = e.alternate;
    Z(tt, tt.current & 1), Z(Ht, e), Wt === null && (t === null || wi.current !== null || t.memoizedState !== null) && (Wt = e);
  }
  function lc(e) {
    Z(tt, tt.current), Z(Ht, e), Wt === null && (Wt = e);
  }
  function Of(e) {
    e.tag === 22 ? (Z(tt, tt.current), Z(Ht, e), Wt === null && (Wt = e)) : ca();
  }
  function ca() {
    Z(tt, tt.current), Z(Ht, Ht.current);
  }
  function Gt(e) {
    L(Ht), Wt === e && (Wt = null), L(tt);
  }
  var tt = E(0);
  function Yl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || fu(n) || pu(n)))
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
  var Cn = 0, _e = null, He = null, st = null, Xl = !1, $i = !1, Xa = !1, Ql = 0, Ar = 0, Ti = null, _v = 0;
  function We() {
    throw Error(s(321));
  }
  function sc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function oc(e, t, n, i, o, c) {
    return Cn = c, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, T.H = e === null || e.memoizedState === null ? gp : xc, Xa = !1, c = n(i, o), Xa = !1, $i && (c = Rf(
      t,
      n,
      i,
      o
    )), zf(e), c;
  }
  function zf(e) {
    T.H = wr;
    var t = He !== null && He.next !== null;
    if (Cn = 0, st = He = _e = null, Xl = !1, Ar = 0, Ti = null, t) throw Error(s(300));
    e === null || ot || (e = e.dependencies, e !== null && Bl(e) && (ot = !0));
  }
  function Rf(e, t, n, i) {
    _e = e;
    var o = 0;
    do {
      if ($i && (Ti = null), Ar = 0, $i = !1, 25 <= o) throw Error(s(301));
      if (o += 1, st = He = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      T.H = yp, c = t(n, i);
    } while ($i);
    return c;
  }
  function Ev() {
    var e = T.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Nr(t) : t, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (_e.flags |= 1024), t;
  }
  function cc() {
    var e = Ql !== 0;
    return Ql = 0, e;
  }
  function uc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function dc(e) {
    if (Xl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Xl = !1;
    }
    Cn = 0, st = He = _e = null, $i = !1, Ar = Ql = 0, Ti = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return st === null ? _e.memoizedState = st = e : st = st.next = e, st;
  }
  function nt() {
    if (He === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = st === null ? _e.memoizedState : st.next;
    if (t !== null)
      st = t, He = e;
    else {
      if (e === null)
        throw _e.alternate === null ? Error(s(467)) : Error(s(310));
      He = e, e = {
        memoizedState: He.memoizedState,
        baseState: He.baseState,
        baseQueue: He.baseQueue,
        queue: He.queue,
        next: null
      }, st === null ? _e.memoizedState = st = e : st = st.next = e;
    }
    return st;
  }
  function Zl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Nr(e) {
    var t = Ar;
    return Ar += 1, Ti === null && (Ti = []), e = Nf(Ti, e, t), t = _e, (st === null ? t.memoizedState : st.next) === null && (t = t.alternate, T.H = t === null || t.memoizedState === null ? gp : xc), e;
  }
  function Jl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Nr(e);
      if (e.$$typeof === K) return bt(e);
    }
    throw Error(s(438, String(e)));
  }
  function fc(e) {
    var t = null, n = _e.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var i = _e.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Zl(), _e.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = k;
    return t.index++, n;
  }
  function On(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fl(e) {
    var t = nt();
    return pc(t, He, e);
  }
  function pc(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(s(311));
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
      var S = p = null, A = null, D = t, V = !1;
      do {
        var I = D.lane & -536870913;
        if (I !== D.lane ? (je & I) === I : (Cn & I) === I) {
          var C = D.revertLane;
          if (C === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), I === xi && (V = !0);
          else if ((Cn & C) === C) {
            D = D.next, C === xi && (V = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, A === null ? (S = A = I, p = c) : A = A.next = I, _e.lanes |= C, fa |= C;
          I = D.action, Xa && n(c, I), c = D.hasEagerState ? D.eagerState : n(c, I);
        } else
          C = {
            lane: I,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, A === null ? (S = A = C, p = c) : A = A.next = C, _e.lanes |= I, fa |= I;
        D = D.next;
      } while (D !== null && D !== t);
      if (A === null ? p = c : A.next = S, !Bt(c, e.memoizedState) && (ot = !0, V && (n = Ai, n !== null)))
        throw n;
      e.memoizedState = c, e.baseState = p, e.baseQueue = A, i.lastRenderedState = c;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function mc(e) {
    var t = nt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, o = n.pending, c = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        c = e(c, p.action), p = p.next;
      while (p !== o);
      Bt(c, t.memoizedState) || (ot = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c;
    }
    return [c, i];
  }
  function Uf(e, t, n) {
    var i = _e, o = nt(), c = $e;
    if (c) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var p = !Bt(
      (He || o).memoizedState,
      n
    );
    if (p && (o.memoizedState = n, ot = !0), o = o.queue, yc(Vf.bind(null, i, o, e), [
      e
    ]), o.getSnapshot !== t || p || st !== null && st.memoizedState.tag & 1) {
      if (i.flags |= 2048, Mi(
        9,
        { destroy: void 0 },
        Bf.bind(
          null,
          i,
          o,
          n,
          t
        ),
        null
      ), Ke === null) throw Error(s(349));
      c || (Cn & 127) !== 0 || Lf(i, t, n);
    }
    return n;
  }
  function Lf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = Zl(), _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Bf(e, t, n, i) {
    t.value = n, t.getSnapshot = i, Hf(t) && Gf(e);
  }
  function Vf(e, t, n) {
    return n(function() {
      Hf(t) && Gf(e);
    });
  }
  function Hf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function Gf(e) {
    var t = Ba(e, 2);
    t !== null && Ut(t, e, 2);
  }
  function hc(e) {
    var t = wt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Xa) {
        pn(!0);
        try {
          n();
        } finally {
          pn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: On,
      lastRenderedState: e
    }, t;
  }
  function qf(e, t, n, i) {
    return e.baseState = n, pc(
      e,
      He,
      typeof i == "function" ? i : On
    );
  }
  function xv(e, t, n, i, o) {
    if (es(e)) throw Error(s(485));
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
      T.T !== null ? n(!0) : c.isTransition = !1, i(c), n = t.pending, n === null ? (c.next = t.pending = c, If(t, c)) : (c.next = n.next, t.pending = n.next = c);
    }
  }
  function If(e, t) {
    var n = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var c = T.T, p = {};
      T.T = p;
      try {
        var S = n(o, i), A = T.S;
        A !== null && A(p, S), Kf(e, t, S);
      } catch (D) {
        gc(e, t, D);
      } finally {
        c !== null && p.types !== null && (c.types = p.types), T.T = c;
      }
    } else
      try {
        c = n(o, i), Kf(e, t, c);
      } catch (D) {
        gc(e, t, D);
      }
  }
  function Kf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        kf(e, t, i);
      },
      function(i) {
        return gc(e, t, i);
      }
    ) : kf(e, t, n);
  }
  function kf(e, t, n) {
    t.status = "fulfilled", t.value = n, Yf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, If(e, n)));
  }
  function gc(e, t, n) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = n, Yf(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Yf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Xf(e, t) {
    return t;
  }
  function Qf(e, t) {
    if ($e) {
      var n = Ke.formState;
      if (n !== null) {
        e: {
          var i = _e;
          if ($e) {
            if (Ye) {
              t: {
                for (var o = Ye, c = Ft; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (o = Pt(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                c = o.data, o = c === "F!" || c === "F" ? o : null;
              }
              if (o) {
                Ye = Pt(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            aa(i);
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
      lastRenderedReducer: Xf,
      lastRenderedState: t
    }, n.queue = i, n = pp.bind(
      null,
      _e,
      i
    ), i.dispatch = n, i = hc(!1), c = Ec.bind(
      null,
      _e,
      !1,
      i.queue
    ), i = wt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, n = xv.bind(
      null,
      _e,
      o,
      c,
      n
    ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function Zf(e) {
    var t = nt();
    return Jf(t, He, e);
  }
  function Jf(e, t, n) {
    if (t = pc(
      e,
      t,
      Xf
    )[0], e = Fl(On)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Nr(t);
      } catch (p) {
        throw p === Ni ? Gl : p;
      }
    else i = t;
    t = nt();
    var o = t.queue, c = o.dispatch;
    return n !== t.memoizedState && (_e.flags |= 2048, Mi(
      9,
      { destroy: void 0 },
      Av.bind(null, o, n),
      null
    )), [i, c, e];
  }
  function Av(e, t) {
    e.action = t;
  }
  function Ff(e) {
    var t = nt(), n = He;
    if (n !== null)
      return Jf(t, n, e);
    nt(), t = t.memoizedState, n = nt();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function Mi(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = _e.updateQueue, t === null && (t = Zl(), _e.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Wf() {
    return nt().memoizedState;
  }
  function Wl(e, t, n, i) {
    var o = wt();
    _e.flags |= e, o.memoizedState = Mi(
      1 | t,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function Pl(e, t, n, i) {
    var o = nt();
    i = i === void 0 ? null : i;
    var c = o.memoizedState.inst;
    He !== null && i !== null && sc(i, He.memoizedState.deps) ? o.memoizedState = Mi(t, c, n, i) : (_e.flags |= e, o.memoizedState = Mi(
      1 | t,
      c,
      n,
      i
    ));
  }
  function Pf(e, t) {
    Wl(8390656, 8, e, t);
  }
  function yc(e, t) {
    Pl(2048, 8, e, t);
  }
  function Nv(e) {
    _e.flags |= 4;
    var t = _e.updateQueue;
    if (t === null)
      t = Zl(), _e.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function ep(e) {
    var t = nt().memoizedState;
    return Nv({ ref: t, nextImpl: e }), function() {
      if ((ze & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function tp(e, t) {
    return Pl(4, 2, e, t);
  }
  function np(e, t) {
    return Pl(4, 4, e, t);
  }
  function ap(e, t) {
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
  function ip(e, t, n) {
    n = n != null ? n.concat([e]) : null, Pl(4, 4, ap.bind(null, t, e), n);
  }
  function vc() {
  }
  function rp(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && sc(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function lp(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && sc(t, i[1]))
      return i[0];
    if (i = e(), Xa) {
      pn(!0);
      try {
        e();
      } finally {
        pn(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function bc(e, t, n) {
    return n === void 0 || (Cn & 1073741824) !== 0 && (je & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = sm(), _e.lanes |= e, fa |= e, n);
  }
  function sp(e, t, n, i) {
    return Bt(n, t) ? n : wi.current !== null ? (e = bc(e, n, i), Bt(e, t) || (ot = !0), e) : (Cn & 42) === 0 || (Cn & 1073741824) !== 0 && (je & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = sm(), _e.lanes |= e, fa |= e, t);
  }
  function op(e, t, n, i, o) {
    var c = Y.p;
    Y.p = c !== 0 && 8 > c ? c : 8;
    var p = T.T, S = {};
    T.T = S, Ec(e, !1, t, n);
    try {
      var A = o(), D = T.S;
      if (D !== null && D(S, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var V = Sv(
          A,
          i
        );
        jr(
          e,
          t,
          V,
          Kt(e)
        );
      } else
        jr(
          e,
          t,
          i,
          Kt(e)
        );
    } catch (I) {
      jr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: I },
        Kt()
      );
    } finally {
      Y.p = c, p !== null && S.types !== null && (p.types = S.types), T.T = p;
    }
  }
  function jv() {
  }
  function Sc(e, t, n, i) {
    if (e.tag !== 5) throw Error(s(476));
    var o = cp(e).queue;
    op(
      e,
      o,
      t,
      O,
      n === null ? jv : function() {
        return up(e), n(i);
      }
    );
  }
  function cp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: O,
      baseState: O,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: O
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
        lastRenderedReducer: On,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function up(e) {
    var t = cp(e);
    t.next === null && (t = e.alternate.memoizedState), jr(
      e,
      t.next.queue,
      {},
      Kt()
    );
  }
  function _c() {
    return bt(Ir);
  }
  function dp() {
    return nt().memoizedState;
  }
  function fp() {
    return nt().memoizedState;
  }
  function wv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Kt();
          e = la(n);
          var i = sa(t, e, n);
          i !== null && (Ut(i, t, n), _r(i, t, n)), t = { cache: Jo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function $v(e, t, n) {
    var i = Kt();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, es(e) ? mp(t, n) : (n = Vo(e, t, n, i), n !== null && (Ut(n, e, i), hp(n, t, i)));
  }
  function pp(e, t, n) {
    var i = Kt();
    jr(e, t, n, i);
  }
  function jr(e, t, n, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (es(e)) mp(t, o);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null))
        try {
          var p = t.lastRenderedState, S = c(p, n);
          if (o.hasEagerState = !0, o.eagerState = S, Bt(S, p))
            return zl(e, t, o, 0), Ke === null && Ol(), !1;
        } catch {
        } finally {
        }
      if (n = Vo(e, t, o, i), n !== null)
        return Ut(n, e, i), hp(n, t, i), !0;
    }
    return !1;
  }
  function Ec(e, t, n, i) {
    if (i = {
      lane: 2,
      revertLane: eu(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, es(e)) {
      if (t) throw Error(s(479));
    } else
      t = Vo(
        e,
        n,
        i,
        2
      ), t !== null && Ut(t, e, 2);
  }
  function es(e) {
    var t = e.alternate;
    return e === _e || t !== null && t === _e;
  }
  function mp(e, t) {
    $i = Xl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function hp(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, At(e, n);
    }
  }
  var wr = {
    readContext: bt,
    use: Jl,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useInsertionEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useSyncExternalStore: We,
    useId: We,
    useHostTransitionStatus: We,
    useFormState: We,
    useActionState: We,
    useOptimistic: We,
    useMemoCache: We,
    useCacheRefresh: We
  };
  wr.useEffectEvent = We;
  var gp = {
    readContext: bt,
    use: Jl,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: bt,
    useEffect: Pf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Wl(
        4194308,
        4,
        ap.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Wl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Wl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = wt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Xa) {
        pn(!0);
        try {
          e();
        } finally {
          pn(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = wt();
      if (n !== void 0) {
        var o = n(t);
        if (Xa) {
          pn(!0);
          try {
            n(t);
          } finally {
            pn(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = $v.bind(
        null,
        _e,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = hc(e);
      var t = e.queue, n = pp.bind(null, _e, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: vc,
    useDeferredValue: function(e, t) {
      var n = wt();
      return bc(n, e, t);
    },
    useTransition: function() {
      var e = hc(!1);
      return e = op.bind(
        null,
        _e,
        e.queue,
        !0,
        !1
      ), wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var i = _e, o = wt();
      if ($e) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), Ke === null)
          throw Error(s(349));
        (je & 127) !== 0 || Lf(i, t, n);
      }
      o.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return o.queue = c, Pf(Vf.bind(null, i, c, e), [
        e
      ]), i.flags |= 2048, Mi(
        9,
        { destroy: void 0 },
        Bf.bind(
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
      var e = wt(), t = Ke.identifierPrefix;
      if ($e) {
        var n = gn, i = hn;
        n = (i & ~(1 << 32 - xt(i) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ql++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = _v++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: _c,
    useFormState: Qf,
    useActionState: Qf,
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
      return t.queue = n, t = Ec.bind(
        null,
        _e,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: fc,
    useCacheRefresh: function() {
      return wt().memoizedState = wv.bind(
        null,
        _e
      );
    },
    useEffectEvent: function(e) {
      var t = wt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ze & 2) !== 0)
          throw Error(s(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, xc = {
    readContext: bt,
    use: Jl,
    useCallback: rp,
    useContext: bt,
    useEffect: yc,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: lp,
    useReducer: Fl,
    useRef: Wf,
    useState: function() {
      return Fl(On);
    },
    useDebugValue: vc,
    useDeferredValue: function(e, t) {
      var n = nt();
      return sp(
        n,
        He.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fl(On)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Nr(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: dp,
    useHostTransitionStatus: _c,
    useFormState: Zf,
    useActionState: Zf,
    useOptimistic: function(e, t) {
      var n = nt();
      return qf(n, He, e, t);
    },
    useMemoCache: fc,
    useCacheRefresh: fp
  };
  xc.useEffectEvent = ep;
  var yp = {
    readContext: bt,
    use: Jl,
    useCallback: rp,
    useContext: bt,
    useEffect: yc,
    useImperativeHandle: ip,
    useInsertionEffect: tp,
    useLayoutEffect: np,
    useMemo: lp,
    useReducer: mc,
    useRef: Wf,
    useState: function() {
      return mc(On);
    },
    useDebugValue: vc,
    useDeferredValue: function(e, t) {
      var n = nt();
      return He === null ? bc(n, e, t) : sp(
        n,
        He.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = mc(On)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Nr(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: dp,
    useHostTransitionStatus: _c,
    useFormState: Ff,
    useActionState: Ff,
    useOptimistic: function(e, t) {
      var n = nt();
      return He !== null ? qf(n, He, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: fc,
    useCacheRefresh: fp
  };
  yp.useEffectEvent = ep;
  function Ac(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Nc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var i = Kt(), o = la(i);
      o.payload = t, n != null && (o.callback = n), t = sa(e, o, i), t !== null && (Ut(t, e, i), _r(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = Kt(), o = la(i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = sa(e, o, i), t !== null && (Ut(t, e, i), _r(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Kt(), i = la(n);
      i.tag = 2, t != null && (i.callback = t), t = sa(e, i, n), t !== null && (Ut(t, e, n), _r(t, e, n));
    }
  };
  function vp(e, t, n, i, o, c, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, c, p) : t.prototype && t.prototype.isPureReactComponent ? !pr(n, i) || !pr(o, c) : !0;
  }
  function bp(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Nc.enqueueReplaceState(t, t.state, null);
  }
  function Qa(e, t) {
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
  function Sp(e) {
    Cl(e);
  }
  function _p(e) {
    console.error(e);
  }
  function Ep(e) {
    Cl(e);
  }
  function ts(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function xp(e, t, n) {
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
  function jc(e, t, n) {
    return n = la(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ts(e, t);
    }, n;
  }
  function Ap(e) {
    return e = la(e), e.tag = 3, e;
  }
  function Np(e, t, n, i) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = i.value;
      e.payload = function() {
        return o(c);
      }, e.callback = function() {
        xp(t, n, i);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      xp(t, n, i), typeof o != "function" && (pa === null ? pa = /* @__PURE__ */ new Set([this]) : pa.add(this));
      var S = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Tv(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && Ei(
        t,
        n,
        o,
        !0
      ), n = Ht.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Wt === null ? ps() : n.alternate === null && Pe === 0 && (Pe = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === ql ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Fc(e, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === ql ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), Fc(e, i, o)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return Fc(e, i, o), ps(), !1;
    }
    if ($e)
      return t = Ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== ko && (e = Error(s(422), { cause: i }), gr(Qt(e, n)))) : (i !== ko && (t = Error(s(423), {
        cause: i
      }), gr(
        Qt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Qt(i, n), o = jc(
        e.stateNode,
        i,
        o
      ), nc(e, o), Pe !== 4 && (Pe = 2)), !1;
    var c = Error(s(520), { cause: i });
    if (c = Qt(c, n), Rr === null ? Rr = [c] : Rr.push(c), Pe !== 4 && (Pe = 2), t === null) return !0;
    i = Qt(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = jc(n.stateNode, i, e), nc(n, e), !1;
        case 1:
          if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (pa === null || !pa.has(c))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = Ap(o), Np(
              o,
              e,
              n,
              i
            ), nc(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var wc = Error(s(461)), ot = !1;
  function St(e, t, n, i) {
    t.child = e === null ? Tf(t, null, n, i) : Ya(
      t,
      e.child,
      n,
      i
    );
  }
  function jp(e, t, n, i, o) {
    n = n.render;
    var c = t.ref;
    if ("ref" in i) {
      var p = {};
      for (var S in i)
        S !== "ref" && (p[S] = i[S]);
    } else p = i;
    return qa(t), i = oc(
      e,
      t,
      n,
      p,
      c,
      o
    ), S = cc(), e !== null && !ot ? (uc(e, t, o), zn(e, t, o)) : ($e && S && Io(t), t.flags |= 1, St(e, t, i, o), t.child);
  }
  function wp(e, t, n, i, o) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" && !Ho(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, $p(
        e,
        t,
        c,
        i,
        o
      )) : (e = Ul(
        n.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Rc(e, o)) {
      var p = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : pr, n(p, i) && e.ref === t.ref)
        return zn(e, t, o);
    }
    return t.flags |= 1, e = $n(c, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function $p(e, t, n, i, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (pr(c, i) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = i = c, Rc(e, o))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, zn(e, t, o);
    }
    return $c(
      e,
      t,
      n,
      i,
      o
    );
  }
  function Tp(e, t, n, i) {
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
        return Mp(
          e,
          t,
          c,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Hl(
          t,
          c !== null ? c.cachePool : null
        ), c !== null ? Cf(t, c) : ic(), Of(t);
      else
        return i = t.lanes = 536870912, Mp(
          e,
          t,
          c !== null ? c.baseLanes | n : n,
          n,
          i
        );
    } else
      c !== null ? (Hl(t, c.cachePool), Cf(t, c), ca(), t.memoizedState = null) : (e !== null && Hl(t, null), ic(), ca());
    return St(e, t, o, n), t.child;
  }
  function $r(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Mp(e, t, n, i, o) {
    var c = Wo();
    return c = c === null ? null : { parent: lt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: n,
      cachePool: c
    }, e !== null && Hl(t, null), ic(), Of(t), e !== null && Ei(e, t, i, !0), t.childLanes = o, null;
  }
  function ns(e, t) {
    return t = is(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Dp(e, t, n) {
    return Ya(t, e.child, null, n), e = ns(t, t.pendingProps), e.flags |= 2, Gt(t), t.memoizedState = null, e;
  }
  function Mv(e, t, n) {
    var i = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if ($e) {
        if (i.mode === "hidden")
          return e = ns(t, i), t.lanes = 536870912, $r(null, e);
        if (lc(t), (e = Ye) ? (e = Im(
          e,
          Ft
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: hn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mf(e), n.return = t, t.child = n, vt = t, Ye = null)) : e = null, e === null) throw aa(t);
        return t.lanes = 536870912, null;
      }
      return ns(t, i);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var p = c.dehydrated;
      if (lc(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = Dp(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (ot || Ei(e, t, n, !1), o = (n & e.childLanes) !== 0, ot || o) {
        if (i = Ke, i !== null && (p = Oa(i, n), p !== 0 && p !== c.retryLane))
          throw c.retryLane = p, Ba(e, p), Ut(i, e, p), wc;
        ps(), t = Dp(
          e,
          t,
          n
        );
      } else
        e = c.treeContext, Ye = Pt(p.nextSibling), vt = t, $e = !0, na = null, Ft = !1, e !== null && yf(t, e), t = ns(t, i), t.flags |= 4096;
      return t;
    }
    return e = $n(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function as(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function $c(e, t, n, i, o) {
    return qa(t), n = oc(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = cc(), e !== null && !ot ? (uc(e, t, o), zn(e, t, o)) : ($e && i && Io(t), t.flags |= 1, St(e, t, n, o), t.child);
  }
  function Cp(e, t, n, i, o, c) {
    return qa(t), t.updateQueue = null, n = Rf(
      t,
      i,
      n,
      o
    ), zf(e), i = cc(), e !== null && !ot ? (uc(e, t, c), zn(e, t, c)) : ($e && i && Io(t), t.flags |= 1, St(e, t, n, c), t.child);
  }
  function Op(e, t, n, i, o) {
    if (qa(t), t.stateNode === null) {
      var c = vi, p = n.contextType;
      typeof p == "object" && p !== null && (c = bt(p)), c = new n(i, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Nc, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = i, c.state = t.memoizedState, c.refs = {}, ec(t), p = n.contextType, c.context = typeof p == "object" && p !== null ? bt(p) : vi, c.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Ac(
        t,
        n,
        p,
        i
      ), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), p !== c.state && Nc.enqueueReplaceState(c, c.state, null), xr(t, i, c, o), Er(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      c = t.stateNode;
      var S = t.memoizedProps, A = Qa(n, S);
      c.props = A;
      var D = c.context, V = n.contextType;
      p = vi, typeof V == "object" && V !== null && (p = bt(V));
      var I = n.getDerivedStateFromProps;
      V = typeof I == "function" || typeof c.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, V || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (S || D !== p) && bp(
        t,
        c,
        i,
        p
      ), ra = !1;
      var C = t.memoizedState;
      c.state = C, xr(t, i, c, o), Er(), D = t.memoizedState, S || C !== D || ra ? (typeof I == "function" && (Ac(
        t,
        n,
        I,
        i
      ), D = t.memoizedState), (A = ra || vp(
        t,
        n,
        A,
        i,
        C,
        D,
        p
      )) ? (V || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = D), c.props = i, c.state = D, c.context = p, i = A) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      c = t.stateNode, tc(e, t), p = t.memoizedProps, V = Qa(n, p), c.props = V, I = t.pendingProps, C = c.context, D = n.contextType, A = vi, typeof D == "object" && D !== null && (A = bt(D)), S = n.getDerivedStateFromProps, (D = typeof S == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== I || C !== A) && bp(
        t,
        c,
        i,
        A
      ), ra = !1, C = t.memoizedState, c.state = C, xr(t, i, c, o), Er();
      var U = t.memoizedState;
      p !== I || C !== U || ra || e !== null && e.dependencies !== null && Bl(e.dependencies) ? (typeof S == "function" && (Ac(
        t,
        n,
        S,
        i
      ), U = t.memoizedState), (V = ra || vp(
        t,
        n,
        V,
        i,
        C,
        U,
        A
      ) || e !== null && e.dependencies !== null && Bl(e.dependencies)) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, U, A), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        i,
        U,
        A
      )), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = U), c.props = i, c.state = U, c.context = A, i = V) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return c = i, as(e, t), i = (t.flags & 128) !== 0, c || i ? (c = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && i ? (t.child = Ya(
      t,
      e.child,
      null,
      o
    ), t.child = Ya(
      t,
      null,
      n,
      o
    )) : St(e, t, n, o), t.memoizedState = c.state, e = t.child) : e = zn(
      e,
      t,
      o
    ), e;
  }
  function zp(e, t, n, i) {
    return Ha(), t.flags |= 256, St(e, t, n, i), t.child;
  }
  var Tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mc(e) {
    return { baseLanes: e, cachePool: xf() };
  }
  function Dc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= It), e;
  }
  function Rp(e, t, n) {
    var i = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, p;
    if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if ($e) {
        if (o ? oa(t) : ca(), (e = Ye) ? (e = Im(
          e,
          Ft
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: hn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mf(e), n.return = t, t.child = n, vt = t, Ye = null)) : e = null, e === null) throw aa(t);
        return pu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = i.children;
      return i = i.fallback, o ? (ca(), o = t.mode, S = is(
        { mode: "hidden", children: S },
        o
      ), i = Va(
        i,
        o,
        n,
        null
      ), S.return = t, i.return = t, S.sibling = i, t.child = S, i = t.child, i.memoizedState = Mc(n), i.childLanes = Dc(
        e,
        p,
        n
      ), t.memoizedState = Tc, $r(null, i)) : (oa(t), Cc(t, S));
    }
    var A = e.memoizedState;
    if (A !== null && (S = A.dehydrated, S !== null)) {
      if (c)
        t.flags & 256 ? (oa(t), t.flags &= -257, t = Oc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ca(), t.child = e.child, t.flags |= 128, t = null) : (ca(), S = i.fallback, o = t.mode, i = is(
          { mode: "visible", children: i.children },
          o
        ), S = Va(
          S,
          o,
          n,
          null
        ), S.flags |= 2, i.return = t, S.return = t, i.sibling = S, t.child = i, Ya(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = Mc(n), i.childLanes = Dc(
          e,
          p,
          n
        ), t.memoizedState = Tc, t = $r(null, i));
      else if (oa(t), pu(S)) {
        if (p = S.nextSibling && S.nextSibling.dataset, p) var D = p.dgst;
        p = D, i = Error(s(419)), i.stack = "", i.digest = p, gr({ value: i, source: null, stack: null }), t = Oc(
          e,
          t,
          n
        );
      } else if (ot || Ei(e, t, n, !1), p = (n & e.childLanes) !== 0, ot || p) {
        if (p = Ke, p !== null && (i = Oa(p, n), i !== 0 && i !== A.retryLane))
          throw A.retryLane = i, Ba(e, i), Ut(p, e, i), wc;
        fu(S) || ps(), t = Oc(
          e,
          t,
          n
        );
      } else
        fu(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = A.treeContext, Ye = Pt(
          S.nextSibling
        ), vt = t, $e = !0, na = null, Ft = !1, e !== null && yf(t, e), t = Cc(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (ca(), S = i.fallback, o = t.mode, A = e.child, D = A.sibling, i = $n(A, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = A.subtreeFlags & 65011712, D !== null ? S = $n(
      D,
      S
    ) : (S = Va(
      S,
      o,
      n,
      null
    ), S.flags |= 2), S.return = t, i.return = t, i.sibling = S, t.child = i, $r(null, i), i = t.child, S = e.child.memoizedState, S === null ? S = Mc(n) : (o = S.cachePool, o !== null ? (A = lt._currentValue, o = o.parent !== A ? { parent: A, pool: A } : o) : o = xf(), S = {
      baseLanes: S.baseLanes | n,
      cachePool: o
    }), i.memoizedState = S, i.childLanes = Dc(
      e,
      p,
      n
    ), t.memoizedState = Tc, $r(e.child, i)) : (oa(t), n = e.child, e = n.sibling, n = $n(n, {
      mode: "visible",
      children: i.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Cc(e, t) {
    return t = is(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function is(e, t) {
    return e = Vt(22, e, null, t), e.lanes = 0, e;
  }
  function Oc(e, t, n) {
    return Ya(t, e.child, null, n), e = Cc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Up(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Qo(e.return, t, n);
  }
  function zc(e, t, n, i, o, c) {
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
  function Lp(e, t, n) {
    var i = t.pendingProps, o = i.revealOrder, c = i.tail;
    i = i.children;
    var p = tt.current, S = (p & 2) !== 0;
    if (S ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, Z(tt, p), St(e, t, i, n), i = $e ? hr : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Up(e, n, t);
        else if (e.tag === 19)
          Up(e, n, t);
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
          e = n.alternate, e !== null && Yl(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), zc(
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
          if (e = o.alternate, e !== null && Yl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        zc(
          t,
          !0,
          n,
          null,
          c,
          i
        );
        break;
      case "together":
        zc(
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
  function zn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), fa |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ei(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = $n(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Rc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Bl(e)));
  }
  function Dv(e, t, n) {
    switch (t.tag) {
      case 3:
        at(t, t.stateNode.containerInfo), ia(t, lt, e.memoizedState.cache), Ha();
        break;
      case 27:
      case 5:
        fn(t);
        break;
      case 4:
        at(t, t.stateNode.containerInfo);
        break;
      case 10:
        ia(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, lc(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (oa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Rp(e, t, n) : (oa(t), e = zn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        oa(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (Ei(
          e,
          t,
          n,
          !1
        ), i = (n & t.childLanes) !== 0), o) {
          if (i)
            return Lp(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Z(tt, tt.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, Tp(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ia(t, lt, e.memoizedState.cache);
    }
    return zn(e, t, n);
  }
  function Bp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!Rc(e, n) && (t.flags & 128) === 0)
          return ot = !1, Dv(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, $e && (t.flags & 1048576) !== 0 && gf(t, hr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = Ka(t.elementType), t.type = e, typeof e == "function")
            Ho(e) ? (i = Qa(e, i), t.tag = 1, t = Op(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, t = $c(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === ae) {
                t.tag = 11, t = jp(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === G) {
                t.tag = 14, t = wp(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              }
            }
            throw t = ee(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return $c(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return i = t.type, o = Qa(
          i,
          t.pendingProps
        ), Op(
          e,
          t,
          i,
          o,
          n
        );
      case 3:
        e: {
          if (at(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          i = t.pendingProps;
          var c = t.memoizedState;
          o = c.element, tc(e, t), xr(t, i, null, n);
          var p = t.memoizedState;
          if (i = p.cache, ia(t, lt, i), i !== c.cache && Zo(
            t,
            [lt],
            n,
            !0
          ), Er(), i = p.element, c.isDehydrated)
            if (c = {
              element: i,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
              t = zp(
                e,
                t,
                i,
                n
              );
              break e;
            } else if (i !== o) {
              o = Qt(
                Error(s(424)),
                t
              ), gr(o), t = zp(
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
              for (Ye = Pt(e.firstChild), vt = t, $e = !0, na = null, Ft = !0, n = Tf(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Ha(), i === o) {
              t = zn(
                e,
                t,
                n
              );
              break e;
            }
            St(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return as(e, t), e === null ? (n = Zm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : $e || (n = t.type, e = t.pendingProps, i = Ss(
          Ee.current
        ).createElement(n), i[yt] = t, i[Mt] = e, _t(i, n, e), mt(i), t.stateNode = i) : t.memoizedState = Zm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return fn(t), e === null && $e && (i = t.stateNode = Ym(
          t.type,
          t.pendingProps,
          Ee.current
        ), vt = t, Ft = !0, o = Ye, ya(t.type) ? (mu = o, Ye = Pt(i.firstChild)) : Ye = o), St(
          e,
          t,
          t.pendingProps.children,
          n
        ), as(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && $e && ((o = i = Ye) && (i = sb(
          i,
          t.type,
          t.pendingProps,
          Ft
        ), i !== null ? (t.stateNode = i, vt = t, Ye = Pt(i.firstChild), Ft = !1, o = !0) : o = !1), o || aa(t)), fn(t), o = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, i = c.children, cu(o, c) ? i = null : p !== null && cu(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = oc(
          e,
          t,
          Ev,
          null,
          null,
          n
        ), Ir._currentValue = o), as(e, t), St(e, t, i, n), t.child;
      case 6:
        return e === null && $e && ((e = n = Ye) && (n = ob(
          n,
          t.pendingProps,
          Ft
        ), n !== null ? (t.stateNode = n, vt = t, Ye = null, e = !0) : e = !1), e || aa(t)), null;
      case 13:
        return Rp(e, t, n);
      case 4:
        return at(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Ya(
          t,
          null,
          i,
          n
        ) : St(e, t, i, n), t.child;
      case 11:
        return jp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return St(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return St(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return St(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return i = t.pendingProps, ia(t, t.type, i.value), St(e, t, i.children, n), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, qa(t), o = bt(o), i = i(o), t.flags |= 1, St(e, t, i, n), t.child;
      case 14:
        return wp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return $p(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Lp(e, t, n);
      case 31:
        return Mv(e, t, n);
      case 22:
        return Tp(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return qa(t), i = bt(lt), e === null ? (o = Wo(), o === null && (o = Ke, c = Jo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= n), o = c), t.memoizedState = { parent: i, cache: o }, ec(t), ia(t, lt, o)) : ((e.lanes & n) !== 0 && (tc(e, t), xr(t, null, null, n), Er()), o = e.memoizedState, c = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ia(t, lt, i)) : (i = c.cache, ia(t, lt, i), i !== o.cache && Zo(
          t,
          [lt],
          n,
          !0
        ))), St(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Rn(e) {
    e.flags |= 4;
  }
  function Uc(e, t, n, i, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (dm()) e.flags |= 8192;
        else
          throw ka = ql, Po;
    } else e.flags &= -16777217;
  }
  function Vp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !eh(t))
      if (dm()) e.flags |= 8192;
      else
        throw ka = ql, Po;
  }
  function rs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Re() : 536870912, e.lanes |= t, zi |= t);
  }
  function Tr(e, t) {
    if (!$e)
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
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Cv(e, t, n) {
    var i = t.pendingProps;
    switch (Ko(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xe(t), null;
      case 1:
        return Xe(t), null;
      case 3:
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Dn(lt), Ve(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (_i(t) ? Rn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yo())), Xe(t), null;
      case 26:
        var o = t.type, c = t.memoizedState;
        return e === null ? (Rn(t), c !== null ? (Xe(t), Vp(t, c)) : (Xe(t), Uc(
          t,
          o,
          null,
          i,
          n
        ))) : c ? c !== e.memoizedState ? (Rn(t), Xe(t), Vp(t, c)) : (Xe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Rn(t), Xe(t), Uc(
          t,
          o,
          e,
          i,
          n
        )), null;
      case 27:
        if (En(t), n = Ee.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Rn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Xe(t), null;
          }
          e = te.current, _i(t) ? vf(t) : (e = Ym(o, i, n), t.stateNode = e, Rn(t));
        }
        return Xe(t), null;
      case 5:
        if (En(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Rn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Xe(t), null;
          }
          if (c = te.current, _i(t))
            vf(t);
          else {
            var p = Ss(
              Ee.current
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
            c[yt] = t, c[Mt] = i;
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
            e: switch (_t(c, o, i), o) {
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
            i && Rn(t);
          }
        }
        return Xe(t), Uc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && Rn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = Ee.current, _i(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = vt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[yt] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Rm(e.nodeValue, n)), e || aa(t, !0);
          } else
            e = Ss(e).createTextNode(
              i
            ), e[yt] = t, t.stateNode = e;
        }
        return Xe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = _i(t), n !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[yt] = t;
            } else
              Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), e = !1;
          } else
            n = Yo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Xe(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = _i(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[yt] = t;
            } else
              Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), o = !1;
          } else
            o = Yo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
        }
        return Gt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), c = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool), c !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), rs(t, t.updateQueue), Xe(t), null);
      case 4:
        return Ve(), e === null && iu(t.stateNode.containerInfo), Xe(t), null;
      case 10:
        return Dn(t.type), Xe(t), null;
      case 19:
        if (L(tt), i = t.memoizedState, i === null) return Xe(t), null;
        if (o = (t.flags & 128) !== 0, c = i.rendering, c === null)
          if (o) Tr(i, !1);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (c = Yl(e), c !== null) {
                  for (t.flags |= 128, Tr(i, !1), e = c.updateQueue, t.updateQueue = e, rs(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    pf(n, e), n = n.sibling;
                  return Z(
                    tt,
                    tt.current & 1 | 2
                  ), $e && Tn(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && pt() > us && (t.flags |= 128, o = !0, Tr(i, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Yl(c), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, rs(t, e), Tr(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !$e)
                return Xe(t), null;
            } else
              2 * pt() - i.renderingStartTime > us && n !== 536870912 && (t.flags |= 128, o = !0, Tr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (c.sibling = t.child, t.child = c) : (e = i.last, e !== null ? e.sibling = c : t.child = c, i.last = c);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = pt(), e.sibling = null, n = tt.current, Z(
          tt,
          o ? n & 1 | 2 : n & 1
        ), $e && Tn(t, i.treeForkCount), e) : (Xe(t), null);
      case 22:
      case 23:
        return Gt(t), rc(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), n = t.updateQueue, n !== null && rs(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && L(Ia), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Dn(lt), Xe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ov(e, t) {
    switch (Ko(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Dn(lt), Ve(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return En(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Gt(t), t.alternate === null)
            throw Error(s(340));
          Ha();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Gt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Ha();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(tt), null;
      case 4:
        return Ve(), null;
      case 10:
        return Dn(t.type), null;
      case 22:
      case 23:
        return Gt(t), rc(), e !== null && L(Ia), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Dn(lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hp(e, t) {
    switch (Ko(t), t.tag) {
      case 3:
        Dn(lt), Ve();
        break;
      case 26:
      case 27:
      case 5:
        En(t);
        break;
      case 4:
        Ve();
        break;
      case 31:
        t.memoizedState !== null && Gt(t);
        break;
      case 13:
        Gt(t);
        break;
      case 19:
        L(tt);
        break;
      case 10:
        Dn(t.type);
        break;
      case 22:
      case 23:
        Gt(t), rc(), e !== null && L(Ia);
        break;
      case 24:
        Dn(lt);
    }
  }
  function Mr(e, t) {
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
  function ua(e, t, n) {
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
              var A = n, D = S;
              try {
                D();
              } catch (V) {
                Le(
                  o,
                  A,
                  V
                );
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (V) {
      Le(t, t.return, V);
    }
  }
  function Gp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Df(t, n);
      } catch (i) {
        Le(e, e.return, i);
      }
    }
  }
  function qp(e, t, n) {
    n.props = Qa(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Le(e, t, i);
    }
  }
  function Dr(e, t) {
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
  function yn(e, t) {
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
  function Ip(e) {
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
  function Lc(e, t, n) {
    try {
      var i = e.stateNode;
      tb(i, e.type, n, t), i[Mt] = t;
    } catch (o) {
      Le(e, e.return, o);
    }
  }
  function Kp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ya(e.type) || e.tag === 4;
  }
  function Bc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Kp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ya(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = jn));
    else if (i !== 4 && (i === 27 && ya(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Vc(e, t, n), e = e.sibling; e !== null; )
        Vc(e, t, n), e = e.sibling;
  }
  function ls(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && ya(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (ls(e, t, n), e = e.sibling; e !== null; )
        ls(e, t, n), e = e.sibling;
  }
  function kp(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      _t(t, i, n), t[yt] = e, t[Mt] = n;
    } catch (c) {
      Le(e, e.return, c);
    }
  }
  var Un = !1, ct = !1, Hc = !1, Yp = typeof WeakSet == "function" ? WeakSet : Set, ht = null;
  function zv(e, t) {
    if (e = e.containerInfo, su = ws, e = af(e), Oo(e)) {
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
            var p = 0, S = -1, A = -1, D = 0, V = 0, I = e, C = null;
            t: for (; ; ) {
              for (var U; I !== n || o !== 0 && I.nodeType !== 3 || (S = p + o), I !== c || i !== 0 && I.nodeType !== 3 || (A = p + i), I.nodeType === 3 && (p += I.nodeValue.length), (U = I.firstChild) !== null; )
                C = I, I = U;
              for (; ; ) {
                if (I === e) break t;
                if (C === n && ++D === o && (S = p), C === c && ++V === i && (A = p), (U = I.nextSibling) !== null) break;
                I = C, C = I.parentNode;
              }
              I = U;
            }
            n = S === -1 || A === -1 ? null : { start: S, end: A };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ou = { focusedElem: e, selectionRange: n }, ws = !1, ht = t; ht !== null; )
      if (t = ht, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ht = e;
      else
        for (; ht !== null; ) {
          switch (t = ht, c = t.alternate, e = t.flags, t.tag) {
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
                  var re = Qa(
                    n.type,
                    o
                  );
                  e = i.getSnapshotBeforeUpdate(
                    re,
                    c
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (de) {
                  Le(
                    n,
                    n.return,
                    de
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  du(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      du(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ht = e;
            break;
          }
          ht = t.return;
        }
  }
  function Xp(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Bn(e, n), i & 4 && Mr(5, n);
        break;
      case 1:
        if (Bn(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Le(n, n.return, p);
            }
          else {
            var o = Qa(
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
        i & 64 && Gp(n), i & 512 && Dr(n, n.return);
        break;
      case 3:
        if (Bn(e, n), i & 64 && (e = n.updateQueue, e !== null)) {
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
            Df(e, t);
          } catch (p) {
            Le(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && i & 4 && kp(n);
      case 26:
      case 5:
        Bn(e, n), t === null && i & 4 && Ip(n), i & 512 && Dr(n, n.return);
        break;
      case 12:
        Bn(e, n);
        break;
      case 31:
        Bn(e, n), i & 4 && Jp(e, n);
        break;
      case 13:
        Bn(e, n), i & 4 && Fp(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Iv.bind(
          null,
          n
        ), cb(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || Un, !i) {
          t = t !== null && t.memoizedState !== null || ct, o = Un;
          var c = ct;
          Un = i, (ct = t) && !c ? Vn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Bn(e, n), Un = o, ct = c;
        }
        break;
      case 30:
        break;
      default:
        Bn(e, n);
    }
  }
  function Qp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && go(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Je = null, Ct = !1;
  function Ln(e, t, n) {
    for (n = n.child; n !== null; )
      Zp(e, t, n), n = n.sibling;
  }
  function Zp(e, t, n) {
    if (Ze && typeof Ze.onCommitFiberUnmount == "function")
      try {
        Ze.onCommitFiberUnmount(xn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        ct || yn(n, t), Ln(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ct || yn(n, t);
        var i = Je, o = Ct;
        ya(n.type) && (Je = n.stateNode, Ct = !1), Ln(
          e,
          t,
          n
        ), Hr(n.stateNode), Je = i, Ct = o;
        break;
      case 5:
        ct || yn(n, t);
      case 6:
        if (i = Je, o = Ct, Je = null, Ln(
          e,
          t,
          n
        ), Je = i, Ct = o, Je !== null)
          if (Ct)
            try {
              (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(n.stateNode);
            } catch (c) {
              Le(
                n,
                t,
                c
              );
            }
          else
            try {
              Je.removeChild(n.stateNode);
            } catch (c) {
              Le(
                n,
                t,
                c
              );
            }
        break;
      case 18:
        Je !== null && (Ct ? (e = Je, Gm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), qi(e)) : Gm(Je, n.stateNode));
        break;
      case 4:
        i = Je, o = Ct, Je = n.stateNode.containerInfo, Ct = !0, Ln(
          e,
          t,
          n
        ), Je = i, Ct = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ua(2, n, t), ct || ua(4, n, t), Ln(
          e,
          t,
          n
        );
        break;
      case 1:
        ct || (yn(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && qp(
          n,
          t,
          i
        )), Ln(
          e,
          t,
          n
        );
        break;
      case 21:
        Ln(
          e,
          t,
          n
        );
        break;
      case 22:
        ct = (i = ct) || n.memoizedState !== null, Ln(
          e,
          t,
          n
        ), ct = i;
        break;
      default:
        Ln(
          e,
          t,
          n
        );
    }
  }
  function Jp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        qi(e);
      } catch (n) {
        Le(t, t.return, n);
      }
    }
  }
  function Fp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        qi(e);
      } catch (n) {
        Le(t, t.return, n);
      }
  }
  function Rv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Yp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Yp()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function ss(e, t) {
    var n = Rv(e);
    t.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var o = Kv.bind(null, e, i);
        i.then(o, o);
      }
    });
  }
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i], c = e, p = t, S = p;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (ya(S.type)) {
                Je = S.stateNode, Ct = !1;
                break e;
              }
              break;
            case 5:
              Je = S.stateNode, Ct = !1;
              break e;
            case 3:
            case 4:
              Je = S.stateNode.containerInfo, Ct = !0;
              break e;
          }
          S = S.return;
        }
        if (Je === null) throw Error(s(160));
        Zp(c, p, o), Je = null, Ct = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Wp(t, e), t = t.sibling;
  }
  var sn = null;
  function Wp(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ot(t, e), zt(e), i & 4 && (ua(3, e, e.return), Mr(3, e), ua(5, e, e.return));
        break;
      case 1:
        Ot(t, e), zt(e), i & 512 && (ct || n === null || yn(n, n.return)), i & 64 && Un && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var o = sn;
        if (Ot(t, e), zt(e), i & 512 && (ct || n === null || yn(n, n.return)), i & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (i = e.memoizedState, n === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      c = o.getElementsByTagName("title")[0], (!c || c[ir] || c[yt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(i), o.head.insertBefore(
                        c,
                        o.querySelector("head > title")
                      )), _t(c, i, n), c[yt] = e, mt(c), i = c;
                      break e;
                    case "link":
                      var p = Wm(
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
                      c = o.createElement(i), _t(c, i, n), o.head.appendChild(c);
                      break;
                    case "meta":
                      if (p = Wm(
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
                      c = o.createElement(i), _t(c, i, n), o.head.appendChild(c);
                      break;
                    default:
                      throw Error(s(468, i));
                  }
                  c[yt] = e, mt(c), i = c;
                }
                e.stateNode = i;
              } else
                Pm(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Fm(
                o,
                i,
                e.memoizedProps
              );
          else
            c !== i ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, i === null ? Pm(
              o,
              e.type,
              e.stateNode
            ) : Fm(
              o,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && Lc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ot(t, e), zt(e), i & 512 && (ct || n === null || yn(n, n.return)), n !== null && i & 4 && Lc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ot(t, e), zt(e), i & 512 && (ct || n === null || yn(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            di(o, "");
          } catch (re) {
            Le(e, e.return, re);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, Lc(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Hc = !0);
        break;
      case 6:
        if (Ot(t, e), zt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (re) {
            Le(e, e.return, re);
          }
        }
        break;
      case 3:
        if (xs = null, o = sn, sn = _s(t.containerInfo), Ot(t, e), sn = o, zt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            qi(t.containerInfo);
          } catch (re) {
            Le(e, e.return, re);
          }
        Hc && (Hc = !1, Pp(e));
        break;
      case 4:
        i = sn, sn = _s(
          e.stateNode.containerInfo
        ), Ot(t, e), zt(e), sn = i;
        break;
      case 12:
        Ot(t, e), zt(e);
        break;
      case 31:
        Ot(t, e), zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ss(e, i)));
        break;
      case 13:
        Ot(t, e), zt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (cs = pt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ss(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var A = n !== null && n.memoizedState !== null, D = Un, V = ct;
        if (Un = D || o, ct = V || A, Ot(t, e), ct = V, Un = D, zt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || A || Un || ct || Za(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                A = n = t;
                try {
                  if (c = A.stateNode, o)
                    p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    S = A.stateNode;
                    var I = A.memoizedProps.style, C = I != null && I.hasOwnProperty("display") ? I.display : null;
                    S.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (re) {
                  Le(A, A.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = o ? "" : A.memoizedProps;
                } catch (re) {
                  Le(A, A.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                A = t;
                try {
                  var U = A.stateNode;
                  o ? qm(U, !0) : qm(A.stateNode, !1);
                } catch (re) {
                  Le(A, A.return, re);
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
        i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, ss(e, n))));
        break;
      case 19:
        Ot(t, e), zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ss(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ot(t, e), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, i = e.return; i !== null; ) {
          if (Kp(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, c = Bc(e);
            ls(e, c, o);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (di(p, ""), n.flags &= -33);
            var S = Bc(e);
            ls(e, S, p);
            break;
          case 3:
          case 4:
            var A = n.stateNode.containerInfo, D = Bc(e);
            Vc(
              e,
              D,
              A
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (V) {
        Le(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Pp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Bn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Xp(e, t.alternate, t), t = t.sibling;
  }
  function Za(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ua(4, t, t.return), Za(t);
          break;
        case 1:
          yn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && qp(
            t,
            t.return,
            n
          ), Za(t);
          break;
        case 27:
          Hr(t.stateNode);
        case 26:
        case 5:
          yn(t, t.return), Za(t);
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
  function Vn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, c = t, p = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Vn(
            o,
            c,
            n
          ), Mr(4, c);
          break;
        case 1:
          if (Vn(
            o,
            c,
            n
          ), i = c, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (D) {
              Le(i, i.return, D);
            }
          if (i = c, o = i.updateQueue, o !== null) {
            var S = i.stateNode;
            try {
              var A = o.shared.hiddenCallbacks;
              if (A !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < A.length; o++)
                  Mf(A[o], S);
            } catch (D) {
              Le(i, i.return, D);
            }
          }
          n && p & 64 && Gp(c), Dr(c, c.return);
          break;
        case 27:
          kp(c);
        case 26:
        case 5:
          Vn(
            o,
            c,
            n
          ), n && i === null && p & 4 && Ip(c), Dr(c, c.return);
          break;
        case 12:
          Vn(
            o,
            c,
            n
          );
          break;
        case 31:
          Vn(
            o,
            c,
            n
          ), n && p & 4 && Jp(o, c);
          break;
        case 13:
          Vn(
            o,
            c,
            n
          ), n && p & 4 && Fp(o, c);
          break;
        case 22:
          c.memoizedState === null && Vn(
            o,
            c,
            n
          ), Dr(c, c.return);
          break;
        case 30:
          break;
        default:
          Vn(
            o,
            c,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Gc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && yr(n));
  }
  function qc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yr(e));
  }
  function on(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        em(
          e,
          t,
          n,
          i
        ), t = t.sibling;
  }
  function em(e, t, n, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        on(
          e,
          t,
          n,
          i
        ), o & 2048 && Mr(9, t);
        break;
      case 1:
        on(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        on(
          e,
          t,
          n,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yr(e)));
        break;
      case 12:
        if (o & 2048) {
          on(
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
          } catch (A) {
            Le(t, t.return, A);
          }
        } else
          on(
            e,
            t,
            n,
            i
          );
        break;
      case 31:
        on(
          e,
          t,
          n,
          i
        );
        break;
      case 13:
        on(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, p = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? on(
          e,
          t,
          n,
          i
        ) : Cr(e, t) : c._visibility & 2 ? on(
          e,
          t,
          n,
          i
        ) : (c._visibility |= 2, Di(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && Gc(p, t);
        break;
      case 24:
        on(
          e,
          t,
          n,
          i
        ), o & 2048 && qc(t.alternate, t);
        break;
      default:
        on(
          e,
          t,
          n,
          i
        );
    }
  }
  function Di(e, t, n, i, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var c = e, p = t, S = n, A = i, D = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Di(
            c,
            p,
            S,
            A,
            o
          ), Mr(8, p);
          break;
        case 23:
          break;
        case 22:
          var V = p.stateNode;
          p.memoizedState !== null ? V._visibility & 2 ? Di(
            c,
            p,
            S,
            A,
            o
          ) : Cr(
            c,
            p
          ) : (V._visibility |= 2, Di(
            c,
            p,
            S,
            A,
            o
          )), o && D & 2048 && Gc(
            p.alternate,
            p
          );
          break;
        case 24:
          Di(
            c,
            p,
            S,
            A,
            o
          ), o && D & 2048 && qc(p.alternate, p);
          break;
        default:
          Di(
            c,
            p,
            S,
            A,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Cr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, i = t, o = i.flags;
        switch (i.tag) {
          case 22:
            Cr(n, i), o & 2048 && Gc(
              i.alternate,
              i
            );
            break;
          case 24:
            Cr(n, i), o & 2048 && qc(i.alternate, i);
            break;
          default:
            Cr(n, i);
        }
        t = t.sibling;
      }
  }
  var Or = 8192;
  function Ci(e, t, n) {
    if (e.subtreeFlags & Or)
      for (e = e.child; e !== null; )
        tm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function tm(e, t, n) {
    switch (e.tag) {
      case 26:
        Ci(
          e,
          t,
          n
        ), e.flags & Or && e.memoizedState !== null && _b(
          n,
          sn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ci(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var i = sn;
        sn = _s(e.stateNode.containerInfo), Ci(
          e,
          t,
          n
        ), sn = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Or, Or = 16777216, Ci(
          e,
          t,
          n
        ), Or = i) : Ci(
          e,
          t,
          n
        ));
        break;
      default:
        Ci(
          e,
          t,
          n
        );
    }
  }
  function nm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function zr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ht = i, im(
            i,
            e
          );
        }
      nm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        am(e), e = e.sibling;
  }
  function am(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        zr(e), e.flags & 2048 && ua(9, e, e.return);
        break;
      case 3:
        zr(e);
        break;
      case 12:
        zr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, os(e)) : zr(e);
        break;
      default:
        zr(e);
    }
  }
  function os(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ht = i, im(
            i,
            e
          );
        }
      nm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ua(8, t, t.return), os(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, os(t));
          break;
        default:
          os(t);
      }
      e = e.sibling;
    }
  }
  function im(e, t) {
    for (; ht !== null; ) {
      var n = ht;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          yr(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, ht = i;
      else
        e: for (n = e; ht !== null; ) {
          i = ht;
          var o = i.sibling, c = i.return;
          if (Qp(i), i === n) {
            ht = null;
            break e;
          }
          if (o !== null) {
            o.return = c, ht = o;
            break e;
          }
          ht = c;
        }
    }
  }
  var Uv = {
    getCacheForType: function(e) {
      var t = bt(lt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return bt(lt).controller.signal;
    }
  }, Lv = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, Ke = null, Ae = null, je = 0, Ue = 0, qt = null, da = !1, Oi = !1, Ic = !1, Hn = 0, Pe = 0, fa = 0, Ja = 0, Kc = 0, It = 0, zi = 0, Rr = null, Rt = null, kc = !1, cs = 0, rm = 0, us = 1 / 0, ds = null, pa = null, dt = 0, ma = null, Ri = null, Gn = 0, Yc = 0, Xc = null, lm = null, Ur = 0, Qc = null;
  function Kt() {
    return (ze & 2) !== 0 && je !== 0 ? je & -je : T.T !== null ? eu() : _d();
  }
  function sm() {
    if (It === 0)
      if ((je & 536870912) === 0 || $e) {
        var e = Da;
        Da <<= 1, (Da & 3932160) === 0 && (Da = 262144), It = e;
      } else It = 536870912;
    return e = Ht.current, e !== null && (e.flags |= 32), It;
  }
  function Ut(e, t, n) {
    (e === Ke && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null) && (Ui(e, 0), ha(
      e,
      je,
      It,
      !1
    )), jt(e, n), ((ze & 2) === 0 || e !== Ke) && (e === Ke && ((ze & 2) === 0 && (Ja |= n), Pe === 4 && ha(
      e,
      je,
      It,
      !1
    )), vn(e));
  }
  function om(e, t, n) {
    if ((ze & 6) !== 0) throw Error(s(327));
    var i = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || rt(e, t), o = i ? Hv(e, t) : Jc(e, t, !0), c = i;
    do {
      if (o === 0) {
        Oi && !i && ha(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, c && !Bv(n)) {
          o = Jc(e, t, !1), c = !1;
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
              o = Rr;
              var A = S.current.memoizedState.isDehydrated;
              if (A && (Ui(S, p).flags |= 256), p = Jc(
                S,
                p,
                !1
              ), p !== 2) {
                if (Ic && !A) {
                  S.errorRecoveryDisabledLanes |= c, Ja |= c, o = 4;
                  break e;
                }
                c = Rt, Rt = o, c !== null && (Rt === null ? Rt = c : Rt.push.apply(
                  Rt,
                  c
                ));
              }
              o = p;
            }
            if (c = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Ui(e, 0), ha(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, c = o, c) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ha(
                i,
                t,
                It,
                !da
              );
              break e;
            case 2:
              Rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (o = cs + 300 - pt(), 10 < o)) {
            if (ha(
              i,
              t,
              It,
              !da
            ), Se(i, 0, !0) !== 0) break e;
            Gn = t, i.timeoutHandle = Vm(
              cm.bind(
                null,
                i,
                n,
                Rt,
                ds,
                kc,
                t,
                It,
                Ja,
                zi,
                da,
                c,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          cm(
            i,
            n,
            Rt,
            ds,
            kc,
            t,
            It,
            Ja,
            zi,
            da,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    vn(e);
  }
  function cm(e, t, n, i, o, c, p, S, A, D, V, I, C, U) {
    if (e.timeoutHandle = -1, I = t.subtreeFlags, I & 8192 || (I & 16785408) === 16785408) {
      I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: jn
      }, tm(
        t,
        c,
        I
      );
      var re = (c & 62914560) === c ? cs - pt() : (c & 4194048) === c ? rm - pt() : 0;
      if (re = Eb(
        I,
        re
      ), re !== null) {
        Gn = c, e.cancelPendingCommit = re(
          ym.bind(
            null,
            e,
            t,
            c,
            n,
            i,
            o,
            p,
            S,
            A,
            V,
            I,
            null,
            C,
            U
          )
        ), ha(e, c, p, !D);
        return;
      }
    }
    ym(
      e,
      t,
      c,
      n,
      i,
      o,
      p,
      S,
      A
    );
  }
  function Bv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], c = o.getSnapshot;
          o = o.value;
          try {
            if (!Bt(c(), o)) return !1;
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
  function ha(e, t, n, i) {
    t &= ~Kc, t &= ~Ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var c = 31 - xt(o), p = 1 << c;
      i[c] = -1, o &= ~p;
    }
    n !== 0 && nr(e, n, t);
  }
  function fs() {
    return (ze & 6) === 0 ? (Lr(0), !1) : !0;
  }
  function Zc() {
    if (Ae !== null) {
      if (Ue === 0)
        var e = Ae.return;
      else
        e = Ae, Mn = Ga = null, dc(e), ji = null, br = 0, e = Ae;
      for (; e !== null; )
        Hp(e.alternate, e), e = e.return;
      Ae = null;
    }
  }
  function Ui(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, ib(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Gn = 0, Zc(), Ke = e, Ae = n = $n(e.current, null), je = t, Ue = 0, qt = null, da = !1, Oi = rt(e, t), Ic = !1, zi = It = Kc = Ja = fa = Pe = 0, Rt = Rr = null, kc = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - xt(i), c = 1 << o;
        t |= e[o], i &= ~c;
      }
    return Hn = t, Ol(), n;
  }
  function um(e, t) {
    _e = null, T.H = wr, t === Ni || t === Gl ? (t = jf(), Ue = 3) : t === Po ? (t = jf(), Ue = 4) : Ue = t === wc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, Ae === null && (Pe = 1, ts(
      e,
      Qt(t, e.current)
    ));
  }
  function dm() {
    var e = Ht.current;
    return e === null ? !0 : (je & 4194048) === je ? Wt === null : (je & 62914560) === je || (je & 536870912) !== 0 ? e === Wt : !1;
  }
  function fm() {
    var e = T.H;
    return T.H = wr, e === null ? wr : e;
  }
  function pm() {
    var e = T.A;
    return T.A = Uv, e;
  }
  function ps() {
    Pe = 4, da || (je & 4194048) !== je && Ht.current !== null || (Oi = !0), (fa & 134217727) === 0 && (Ja & 134217727) === 0 || Ke === null || ha(
      Ke,
      je,
      It,
      !1
    );
  }
  function Jc(e, t, n) {
    var i = ze;
    ze |= 2;
    var o = fm(), c = pm();
    (Ke !== e || je !== t) && (ds = null, Ui(e, t)), t = !1;
    var p = Pe;
    e: do
      try {
        if (Ue !== 0 && Ae !== null) {
          var S = Ae, A = qt;
          switch (Ue) {
            case 8:
              Zc(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ht.current === null && (t = !0);
              var D = Ue;
              if (Ue = 0, qt = null, Li(e, S, A, D), n && Oi) {
                p = 0;
                break e;
              }
              break;
            default:
              D = Ue, Ue = 0, qt = null, Li(e, S, A, D);
          }
        }
        Vv(), p = Pe;
        break;
      } catch (V) {
        um(e, V);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Mn = Ga = null, ze = i, T.H = o, T.A = c, Ae === null && (Ke = null, je = 0, Ol()), p;
  }
  function Vv() {
    for (; Ae !== null; ) mm(Ae);
  }
  function Hv(e, t) {
    var n = ze;
    ze |= 2;
    var i = fm(), o = pm();
    Ke !== e || je !== t ? (ds = null, us = pt() + 500, Ui(e, t)) : Oi = rt(
      e,
      t
    );
    e: do
      try {
        if (Ue !== 0 && Ae !== null) {
          t = Ae;
          var c = qt;
          t: switch (Ue) {
            case 1:
              Ue = 0, qt = null, Li(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Af(c)) {
                Ue = 0, qt = null, hm(t);
                break;
              }
              t = function() {
                Ue !== 2 && Ue !== 9 || Ke !== e || (Ue = 7), vn(e);
              }, c.then(t, t);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              Af(c) ? (Ue = 0, qt = null, hm(t)) : (Ue = 0, qt = null, Li(e, t, c, 7));
              break;
            case 5:
              var p = null;
              switch (Ae.tag) {
                case 26:
                  p = Ae.memoizedState;
                case 5:
                case 27:
                  var S = Ae;
                  if (p ? eh(p) : S.stateNode.complete) {
                    Ue = 0, qt = null;
                    var A = S.sibling;
                    if (A !== null) Ae = A;
                    else {
                      var D = S.return;
                      D !== null ? (Ae = D, ms(D)) : Ae = null;
                    }
                    break t;
                  }
              }
              Ue = 0, qt = null, Li(e, t, c, 5);
              break;
            case 6:
              Ue = 0, qt = null, Li(e, t, c, 6);
              break;
            case 8:
              Zc(), Pe = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Gv();
        break;
      } catch (V) {
        um(e, V);
      }
    while (!0);
    return Mn = Ga = null, T.H = i, T.A = o, ze = n, Ae !== null ? 0 : (Ke = null, je = 0, Ol(), Pe);
  }
  function Gv() {
    for (; Ae !== null && !ti(); )
      mm(Ae);
  }
  function mm(e) {
    var t = Bp(e.alternate, e, Hn);
    e.memoizedProps = e.pendingProps, t === null ? ms(e) : Ae = t;
  }
  function hm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Cp(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          je
        );
        break;
      case 11:
        t = Cp(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          je
        );
        break;
      case 5:
        dc(t);
      default:
        Hp(n, t), t = Ae = pf(t, Hn), t = Bp(n, t, Hn);
    }
    e.memoizedProps = e.pendingProps, t === null ? ms(e) : Ae = t;
  }
  function Li(e, t, n, i) {
    Mn = Ga = null, dc(t), ji = null, br = 0;
    var o = t.return;
    try {
      if (Tv(
        e,
        o,
        t,
        n,
        je
      )) {
        Pe = 1, ts(
          e,
          Qt(n, e.current)
        ), Ae = null;
        return;
      }
    } catch (c) {
      if (o !== null) throw Ae = o, c;
      Pe = 1, ts(
        e,
        Qt(n, e.current)
      ), Ae = null;
      return;
    }
    t.flags & 32768 ? ($e || i === 1 ? e = !0 : Oi || (je & 536870912) !== 0 ? e = !1 : (da = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Ht.current, i !== null && i.tag === 13 && (i.flags |= 16384))), gm(t, e)) : ms(t);
  }
  function ms(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        gm(
          t,
          da
        );
        return;
      }
      e = t.return;
      var n = Cv(
        t.alternate,
        t,
        Hn
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
    Pe === 0 && (Pe = 5);
  }
  function gm(e, t) {
    do {
      var n = Ov(e.alternate, e);
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
    Pe = 6, Ae = null;
  }
  function ym(e, t, n, i, o, c, p, S, A) {
    e.cancelPendingCommit = null;
    do
      hs();
    while (dt !== 0);
    if ((ze & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (c = t.lanes | t.childLanes, c |= Bo, rn(
        e,
        n,
        c,
        p,
        S,
        A
      ), e === Ke && (Ae = Ke = null, je = 0), Ri = t, ma = e, Gn = n, Yc = c, Xc = o, lm = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, kv(er, function() {
        return Em(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = T.T, T.T = null, o = Y.p, Y.p = 2, p = ze, ze |= 4;
        try {
          zv(e, t, n);
        } finally {
          ze = p, Y.p = o, T.T = i;
        }
      }
      dt = 1, vm(), bm(), Sm();
    }
  }
  function vm() {
    if (dt === 1) {
      dt = 0;
      var e = ma, t = Ri, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = T.T, T.T = null;
        var i = Y.p;
        Y.p = 2;
        var o = ze;
        ze |= 4;
        try {
          Wp(t, e);
          var c = ou, p = af(e.containerInfo), S = c.focusedElem, A = c.selectionRange;
          if (p !== S && S && S.ownerDocument && nf(
            S.ownerDocument.documentElement,
            S
          )) {
            if (A !== null && Oo(S)) {
              var D = A.start, V = A.end;
              if (V === void 0 && (V = D), "selectionStart" in S)
                S.selectionStart = D, S.selectionEnd = Math.min(
                  V,
                  S.value.length
                );
              else {
                var I = S.ownerDocument || document, C = I && I.defaultView || window;
                if (C.getSelection) {
                  var U = C.getSelection(), re = S.textContent.length, de = Math.min(A.start, re), qe = A.end === void 0 ? de : Math.min(A.end, re);
                  !U.extend && de > qe && (p = qe, qe = de, de = p);
                  var w = tf(
                    S,
                    de
                  ), j = tf(
                    S,
                    qe
                  );
                  if (w && j && (U.rangeCount !== 1 || U.anchorNode !== w.node || U.anchorOffset !== w.offset || U.focusNode !== j.node || U.focusOffset !== j.offset)) {
                    var M = I.createRange();
                    M.setStart(w.node, w.offset), U.removeAllRanges(), de > qe ? (U.addRange(M), U.extend(j.node, j.offset)) : (M.setEnd(j.node, j.offset), U.addRange(M));
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
              var q = I[S];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          ws = !!su, ou = su = null;
        } finally {
          ze = o, Y.p = i, T.T = n;
        }
      }
      e.current = t, dt = 2;
    }
  }
  function bm() {
    if (dt === 2) {
      dt = 0;
      var e = ma, t = Ri, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = T.T, T.T = null;
        var i = Y.p;
        Y.p = 2;
        var o = ze;
        ze |= 4;
        try {
          Xp(e, t.alternate, t);
        } finally {
          ze = o, Y.p = i, T.T = n;
        }
      }
      dt = 3;
    }
  }
  function Sm() {
    if (dt === 4 || dt === 3) {
      dt = 0, Pi();
      var e = ma, t = Ri, n = Gn, i = lm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? dt = 5 : (dt = 0, Ri = ma = null, _m(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (pa = null), mo(n), t = t.stateNode, Ze && typeof Ze.onCommitFiberRoot == "function")
        try {
          Ze.onCommitFiberRoot(
            xn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = T.T, o = Y.p, Y.p = 2, T.T = null;
        try {
          for (var c = e.onRecoverableError, p = 0; p < i.length; p++) {
            var S = i[p];
            c(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          T.T = t, Y.p = o;
        }
      }
      (Gn & 3) !== 0 && hs(), vn(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === Qc ? Ur++ : (Ur = 0, Qc = e) : Ur = 0, Lr(0);
    }
  }
  function _m(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, yr(t)));
  }
  function hs() {
    return vm(), bm(), Sm(), Em();
  }
  function Em() {
    if (dt !== 5) return !1;
    var e = ma, t = Yc;
    Yc = 0;
    var n = mo(Gn), i = T.T, o = Y.p;
    try {
      Y.p = 32 > n ? 32 : n, T.T = null, n = Xc, Xc = null;
      var c = ma, p = Gn;
      if (dt = 0, Ri = ma = null, Gn = 0, (ze & 6) !== 0) throw Error(s(331));
      var S = ze;
      if (ze |= 4, am(c.current), em(
        c,
        c.current,
        p,
        n
      ), ze = S, Lr(0, !1), Ze && typeof Ze.onPostCommitFiberRoot == "function")
        try {
          Ze.onPostCommitFiberRoot(xn, c);
        } catch {
        }
      return !0;
    } finally {
      Y.p = o, T.T = i, _m(e, t);
    }
  }
  function xm(e, t, n) {
    t = Qt(n, t), t = jc(e.stateNode, t, 2), e = sa(e, t, 2), e !== null && (jt(e, 2), vn(e));
  }
  function Le(e, t, n) {
    if (e.tag === 3)
      xm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (pa === null || !pa.has(i))) {
            e = Qt(n, e), n = Ap(2), i = sa(t, n, 2), i !== null && (Np(
              n,
              i,
              t,
              e
            ), jt(i, 2), vn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Fc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Lv();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(n) || (Ic = !0, o.add(n), e = qv.bind(null, e, t, n), t.then(e, e));
  }
  function qv(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ke === e && (je & n) === n && (Pe === 4 || Pe === 3 && (je & 62914560) === je && 300 > pt() - cs ? (ze & 2) === 0 && Ui(e, 0) : Kc |= n, zi === je && (zi = 0)), vn(e);
  }
  function Am(e, t) {
    t === 0 && (t = Re()), e = Ba(e, t), e !== null && (jt(e, t), vn(e));
  }
  function Iv(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Am(e, n);
  }
  function Kv(e, t) {
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
        throw Error(s(314));
    }
    i !== null && i.delete(t), Am(e, n);
  }
  function kv(e, t) {
    return an(e, t);
  }
  var gs = null, Bi = null, Wc = !1, ys = !1, Pc = !1, ga = 0;
  function vn(e) {
    e !== Bi && e.next === null && (Bi === null ? gs = Bi = e : Bi = Bi.next = e), ys = !0, Wc || (Wc = !0, Xv());
  }
  function Lr(e, t) {
    if (!Pc && ys) {
      Pc = !0;
      do
        for (var n = !1, i = gs; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var p = i.suspendedLanes, S = i.pingedLanes;
              c = (1 << 31 - xt(42 | e) + 1) - 1, c &= o & ~(p & ~S), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, $m(i, c));
          } else
            c = je, c = Se(
              i,
              i === Ke ? c : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (c & 3) === 0 || rt(i, c) || (n = !0, $m(i, c));
          i = i.next;
        }
      while (n);
      Pc = !1;
    }
  }
  function Yv() {
    Nm();
  }
  function Nm() {
    ys = Wc = !1;
    var e = 0;
    ga !== 0 && ab() && (e = ga);
    for (var t = pt(), n = null, i = gs; i !== null; ) {
      var o = i.next, c = jm(i, t);
      c === 0 ? (i.next = null, n === null ? gs = o : n.next = o, o === null && (Bi = n)) : (n = i, (e !== 0 || (c & 3) !== 0) && (ys = !0)), i = o;
    }
    dt !== 0 && dt !== 5 || Lr(e), ga !== 0 && (ga = 0);
  }
  function jm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var p = 31 - xt(c), S = 1 << p, A = o[p];
      A === -1 ? ((S & n) === 0 || (S & i) !== 0) && (o[p] = ii(S, t)) : A <= t && (e.expiredLanes |= S), c &= ~S;
    }
    if (t = Ke, n = je, n = Se(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Ue === 2 || Ue === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Fe(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || rt(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && Fe(i), mo(n)) {
        case 2:
        case 8:
          n = ai;
          break;
        case 32:
          n = er;
          break;
        case 268435456:
          n = tr;
          break;
        default:
          n = er;
      }
      return i = wm.bind(null, e), n = an(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && Fe(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function wm(e, t) {
    if (dt !== 0 && dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (hs() && e.callbackNode !== n)
      return null;
    var i = je;
    return i = Se(
      e,
      e === Ke ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (om(e, i, t), jm(e, pt()), e.callbackNode != null && e.callbackNode === n ? wm.bind(null, e) : null);
  }
  function $m(e, t) {
    if (hs()) return null;
    om(e, t, !0);
  }
  function Xv() {
    rb(function() {
      (ze & 6) !== 0 ? an(
        ni,
        Yv
      ) : Nm();
    });
  }
  function eu() {
    if (ga === 0) {
      var e = xi;
      e === 0 && (e = Ma, Ma <<= 1, (Ma & 261888) === 0 && (Ma = 256)), ga = e;
    }
    return ga;
  }
  function Tm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Nl("" + e);
  }
  function Mm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Qv(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var c = Tm(
        (o[Mt] || null).action
      ), p = i.submitter;
      p && (t = (t = p[Mt] || null) ? Tm(t.formAction) : p.getAttribute("formAction"), t !== null && (c = t, p = null));
      var S = new Tl(
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
                if (ga !== 0) {
                  var A = p ? Mm(o, p) : new FormData(o);
                  Sc(
                    n,
                    {
                      pending: !0,
                      data: A,
                      method: o.method,
                      action: c
                    },
                    null,
                    A
                  );
                }
              } else
                typeof c == "function" && (S.preventDefault(), A = p ? Mm(o, p) : new FormData(o), Sc(
                  n,
                  {
                    pending: !0,
                    data: A,
                    method: o.method,
                    action: c
                  },
                  c,
                  A
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var tu = 0; tu < Lo.length; tu++) {
    var nu = Lo[tu], Zv = nu.toLowerCase(), Jv = nu[0].toUpperCase() + nu.slice(1);
    ln(
      Zv,
      "on" + Jv
    );
  }
  ln(sf, "onAnimationEnd"), ln(of, "onAnimationIteration"), ln(cf, "onAnimationStart"), ln("dblclick", "onDoubleClick"), ln("focusin", "onFocus"), ln("focusout", "onBlur"), ln(fv, "onTransitionRun"), ln(pv, "onTransitionStart"), ln(mv, "onTransitionCancel"), ln(uf, "onTransitionEnd"), ci("onMouseEnter", ["mouseout", "mouseover"]), ci("onMouseLeave", ["mouseout", "mouseover"]), ci("onPointerEnter", ["pointerout", "pointerover"]), ci("onPointerLeave", ["pointerout", "pointerover"]), za(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), za(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), za("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), za(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), za(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), za(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Fv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Br)
  );
  function Dm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], o = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = i.length - 1; 0 <= p; p--) {
            var S = i[p], A = S.instance, D = S.currentTarget;
            if (S = S.listener, A !== c && o.isPropagationStopped())
              break e;
            c = S, o.currentTarget = D;
            try {
              c(o);
            } catch (V) {
              Cl(V);
            }
            o.currentTarget = null, c = A;
          }
        else
          for (p = 0; p < i.length; p++) {
            if (S = i[p], A = S.instance, D = S.currentTarget, S = S.listener, A !== c && o.isPropagationStopped())
              break e;
            c = S, o.currentTarget = D;
            try {
              c(o);
            } catch (V) {
              Cl(V);
            }
            o.currentTarget = null, c = A;
          }
      }
    }
  }
  function Ne(e, t) {
    var n = t[ho];
    n === void 0 && (n = t[ho] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Cm(t, e, 2, !1), n.add(i));
  }
  function au(e, t, n) {
    var i = 0;
    t && (i |= 4), Cm(
      n,
      e,
      i,
      t
    );
  }
  var vs = "_reactListening" + Math.random().toString(36).slice(2);
  function iu(e) {
    if (!e[vs]) {
      e[vs] = !0, Ad.forEach(function(n) {
        n !== "selectionchange" && (Fv.has(n) || au(n, !1, e), au(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[vs] || (t[vs] = !0, au("selectionchange", !1, t));
    }
  }
  function Cm(e, t, n, i) {
    switch (sh(t)) {
      case 2:
        var o = Nb;
        break;
      case 8:
        o = jb;
        break;
      default:
        o = bu;
    }
    n = o.bind(
      null,
      t,
      n,
      e
    ), o = void 0, !Ao || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, !1);
  }
  function ru(e, t, n, i, o) {
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
              var A = p.tag;
              if ((A === 3 || A === 4) && p.stateNode.containerInfo === o)
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (p = li(S), p === null) return;
            if (A = p.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              i = c = p;
              continue e;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    Ud(function() {
      var D = c, V = Eo(n), I = [];
      e: {
        var C = df.get(e);
        if (C !== void 0) {
          var U = Tl, re = e;
          switch (e) {
            case "keypress":
              if (wl(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Ky;
              break;
            case "focusin":
              re = "focus", U = $o;
              break;
            case "focusout":
              re = "blur", U = $o;
              break;
            case "beforeblur":
            case "afterblur":
              U = $o;
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
              U = Vd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Cy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Xy;
              break;
            case sf:
            case of:
            case cf:
              U = Ry;
              break;
            case uf:
              U = Zy;
              break;
            case "scroll":
            case "scrollend":
              U = My;
              break;
            case "wheel":
              U = Fy;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Gd;
              break;
            case "toggle":
            case "beforetoggle":
              U = Py;
          }
          var de = (t & 4) !== 0, qe = !de && (e === "scroll" || e === "scrollend"), w = de ? C !== null ? C + "Capture" : null : C;
          de = [];
          for (var j = D, M; j !== null; ) {
            var q = j;
            if (M = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || M === null || w === null || (q = lr(j, w), q != null && de.push(
              Vr(j, q, M)
            )), qe) break;
            j = j.return;
          }
          0 < de.length && (C = new U(
            C,
            re,
            null,
            n,
            V
          ), I.push({ event: C, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", C && n !== _o && (re = n.relatedTarget || n.fromElement) && (li(re) || re[ri]))
            break e;
          if ((U || C) && (C = V.window === V ? V : (C = V.ownerDocument) ? C.defaultView || C.parentWindow : window, U ? (re = n.relatedTarget || n.toElement, U = D, re = re ? li(re) : null, re !== null && (qe = d(re), de = re.tag, re !== qe || de !== 5 && de !== 27 && de !== 6) && (re = null)) : (U = null, re = D), U !== re)) {
            if (de = Vd, q = "onMouseLeave", w = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (de = Gd, q = "onPointerLeave", w = "onPointerEnter", j = "pointer"), qe = U == null ? C : rr(U), M = re == null ? C : rr(re), C = new de(
              q,
              j + "leave",
              U,
              n,
              V
            ), C.target = qe, C.relatedTarget = M, q = null, li(V) === D && (de = new de(
              w,
              j + "enter",
              re,
              n,
              V
            ), de.target = M, de.relatedTarget = qe, q = de), qe = q, U && re)
              t: {
                for (de = Wv, w = U, j = re, M = 0, q = w; q; q = de(q))
                  M++;
                q = 0;
                for (var se = j; se; se = de(se))
                  q++;
                for (; 0 < M - q; )
                  w = de(w), M--;
                for (; 0 < q - M; )
                  j = de(j), q--;
                for (; M--; ) {
                  if (w === j || j !== null && w === j.alternate) {
                    de = w;
                    break t;
                  }
                  w = de(w), j = de(j);
                }
                de = null;
              }
            else de = null;
            U !== null && Om(
              I,
              C,
              U,
              de,
              !1
            ), re !== null && qe !== null && Om(
              I,
              qe,
              re,
              de,
              !0
            );
          }
        }
        e: {
          if (C = D ? rr(D) : window, U = C.nodeName && C.nodeName.toLowerCase(), U === "select" || U === "input" && C.type === "file")
            var Ce = Zd;
          else if (Xd(C))
            if (Jd)
              Ce = cv;
            else {
              Ce = sv;
              var le = lv;
            }
          else
            U = C.nodeName, !U || U.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? D && So(D.elementType) && (Ce = Zd) : Ce = ov;
          if (Ce && (Ce = Ce(e, D))) {
            Qd(
              I,
              Ce,
              n,
              V
            );
            break e;
          }
          le && le(e, C, D), e === "focusout" && D && C.type === "number" && D.memoizedProps.value != null && bo(C, "number", C.value);
        }
        switch (le = D ? rr(D) : window, e) {
          case "focusin":
            (Xd(le) || le.contentEditable === "true") && (hi = le, zo = D, mr = null);
            break;
          case "focusout":
            mr = zo = hi = null;
            break;
          case "mousedown":
            Ro = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ro = !1, rf(I, n, V);
            break;
          case "selectionchange":
            if (dv) break;
          case "keydown":
          case "keyup":
            rf(I, n, V);
        }
        var xe;
        if (Mo)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          mi ? kd(e, n) && (we = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (we = "onCompositionStart");
        we && (qd && n.locale !== "ko" && (mi || we !== "onCompositionStart" ? we === "onCompositionEnd" && mi && (xe = Ld()) : (ea = V, No = "value" in ea ? ea.value : ea.textContent, mi = !0)), le = bs(D, we), 0 < le.length && (we = new Hd(
          we,
          e,
          null,
          n,
          V
        ), I.push({ event: we, listeners: le }), xe ? we.data = xe : (xe = Yd(n), xe !== null && (we.data = xe)))), (xe = tv ? nv(e, n) : av(e, n)) && (we = bs(D, "onBeforeInput"), 0 < we.length && (le = new Hd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          V
        ), I.push({
          event: le,
          listeners: we
        }), le.data = xe)), Qv(
          I,
          e,
          D,
          n,
          V
        );
      }
      Dm(I, t);
    });
  }
  function Vr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function bs(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e, c = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = lr(e, n), o != null && i.unshift(
        Vr(e, o, c)
      ), o = lr(e, t), o != null && i.push(
        Vr(e, o, c)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function Wv(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Om(e, t, n, i, o) {
    for (var c = t._reactName, p = []; n !== null && n !== i; ) {
      var S = n, A = S.alternate, D = S.stateNode;
      if (S = S.tag, A !== null && A === i) break;
      S !== 5 && S !== 26 && S !== 27 || D === null || (A = D, o ? (D = lr(n, c), D != null && p.unshift(
        Vr(n, D, A)
      )) : o || (D = lr(n, c), D != null && p.push(
        Vr(n, D, A)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Pv = /\r\n?/g, eb = /\u0000|\uFFFD/g;
  function zm(e) {
    return (typeof e == "string" ? e : "" + e).replace(Pv, `
`).replace(eb, "");
  }
  function Rm(e, t) {
    return t = zm(t), zm(e) === t;
  }
  function Ge(e, t, n, i, o, c) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || di(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && di(e, "" + i);
        break;
      case "className":
        xl(e, "class", i);
        break;
      case "tabIndex":
        xl(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xl(e, n, i);
        break;
      case "style":
        zd(e, i, c);
        break;
      case "data":
        if (t !== "object") {
          xl(e, "data", i);
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
        i = Nl("" + i), e.setAttribute(n, i);
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
        i = Nl("" + i), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = jn);
        break;
      case "onScroll":
        i != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ne("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(s(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(s(60));
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
        n = Nl("" + i), e.setAttributeNS(
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
        Ne("beforetoggle", e), Ne("toggle", e), El(e, "popover", i);
        break;
      case "xlinkActuate":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Nn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Nn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        El(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = $y.get(n) || n, El(e, n, i));
    }
  }
  function lu(e, t, n, i, o, c) {
    switch (n) {
      case "style":
        zd(e, i, c);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(s(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string" ? di(e, i) : (typeof i == "number" || typeof i == "bigint") && di(e, "" + i);
        break;
      case "onScroll":
        i != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ne("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = jn);
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
        if (!Nd.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), c = e[Mt] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof i == "function")) {
              typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : El(e, n, i);
          }
    }
  }
  function _t(e, t, n) {
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
        Ne("error", e), Ne("load", e);
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
                  throw Error(s(137, t));
                default:
                  Ge(e, t, c, p, n, null);
              }
          }
        o && Ge(e, t, "srcSet", n.srcSet, n, null), i && Ge(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ne("invalid", e);
        var S = c = p = o = null, A = null, D = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var V = n[i];
            if (V != null)
              switch (i) {
                case "name":
                  o = V;
                  break;
                case "type":
                  p = V;
                  break;
                case "checked":
                  A = V;
                  break;
                case "defaultChecked":
                  D = V;
                  break;
                case "value":
                  c = V;
                  break;
                case "defaultValue":
                  S = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Ge(e, t, i, V, n, null);
              }
          }
        Md(
          e,
          c,
          S,
          A,
          D,
          p,
          o,
          !1
        );
        return;
      case "select":
        Ne("invalid", e), i = p = c = null;
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
        t = c, n = p, e.multiple = !!i, t != null ? ui(e, !!i, t, !1) : n != null && ui(e, !!i, n, !0);
        return;
      case "textarea":
        Ne("invalid", e), c = o = i = null;
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
                if (S != null) throw Error(s(91));
                break;
              default:
                Ge(e, t, p, S, n, null);
            }
        Cd(e, i, o, c);
        return;
      case "option":
        for (A in n)
          if (n.hasOwnProperty(A) && (i = n[A], i != null))
            switch (A) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Ge(e, t, A, i, n, null);
            }
        return;
      case "dialog":
        Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
        break;
      case "iframe":
      case "object":
        Ne("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Br.length; i++)
          Ne(Br[i], e);
        break;
      case "image":
        Ne("error", e), Ne("load", e);
        break;
      case "details":
        Ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ne("error", e), Ne("load", e);
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
        for (D in n)
          if (n.hasOwnProperty(D) && (i = n[D], i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ge(e, t, D, i, n, null);
            }
        return;
      default:
        if (So(t)) {
          for (V in n)
            n.hasOwnProperty(V) && (i = n[V], i !== void 0 && lu(
              e,
              t,
              V,
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
  function tb(e, t, n, i) {
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
        var o = null, c = null, p = null, S = null, A = null, D = null, V = null;
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
                i.hasOwnProperty(U) || Ge(e, t, U, null, i, I);
            }
        }
        for (var C in i) {
          var U = i[C];
          if (I = n[C], i.hasOwnProperty(C) && (U != null || I != null))
            switch (C) {
              case "type":
                c = U;
                break;
              case "name":
                o = U;
                break;
              case "checked":
                D = U;
                break;
              case "defaultChecked":
                V = U;
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
                  throw Error(s(137, t));
                break;
              default:
                U !== I && Ge(
                  e,
                  t,
                  C,
                  U,
                  i,
                  I
                );
            }
        }
        vo(
          e,
          p,
          S,
          A,
          D,
          V,
          c,
          o
        );
        return;
      case "select":
        U = p = S = C = null;
        for (c in n)
          if (A = n[c], n.hasOwnProperty(c) && A != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                U = A;
              default:
                i.hasOwnProperty(c) || Ge(
                  e,
                  t,
                  c,
                  null,
                  i,
                  A
                );
            }
        for (o in i)
          if (c = i[o], A = n[o], i.hasOwnProperty(o) && (c != null || A != null))
            switch (o) {
              case "value":
                C = c;
                break;
              case "defaultValue":
                S = c;
                break;
              case "multiple":
                p = c;
              default:
                c !== A && Ge(
                  e,
                  t,
                  o,
                  c,
                  i,
                  A
                );
            }
        t = S, n = p, i = U, C != null ? ui(e, !!n, C, !1) : !!i != !!n && (t != null ? ui(e, !!n, t, !0) : ui(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = C = null;
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
                C = o;
                break;
              case "defaultValue":
                U = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== c && Ge(e, t, p, o, i, c);
            }
        Dd(e, C, U);
        return;
      case "option":
        for (var re in n)
          if (C = n[re], n.hasOwnProperty(re) && C != null && !i.hasOwnProperty(re))
            switch (re) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ge(
                  e,
                  t,
                  re,
                  null,
                  i,
                  C
                );
            }
        for (A in i)
          if (C = i[A], U = n[A], i.hasOwnProperty(A) && C !== U && (C != null || U != null))
            switch (A) {
              case "selected":
                e.selected = C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Ge(
                  e,
                  t,
                  A,
                  C,
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
        for (var de in n)
          C = n[de], n.hasOwnProperty(de) && C != null && !i.hasOwnProperty(de) && Ge(e, t, de, null, i, C);
        for (D in i)
          if (C = i[D], U = n[D], i.hasOwnProperty(D) && C !== U && (C != null || U != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(s(137, t));
                break;
              default:
                Ge(
                  e,
                  t,
                  D,
                  C,
                  i,
                  U
                );
            }
        return;
      default:
        if (So(t)) {
          for (var qe in n)
            C = n[qe], n.hasOwnProperty(qe) && C !== void 0 && !i.hasOwnProperty(qe) && lu(
              e,
              t,
              qe,
              void 0,
              i,
              C
            );
          for (V in i)
            C = i[V], U = n[V], !i.hasOwnProperty(V) || C === U || C === void 0 && U === void 0 || lu(
              e,
              t,
              V,
              C,
              i,
              U
            );
          return;
        }
    }
    for (var w in n)
      C = n[w], n.hasOwnProperty(w) && C != null && !i.hasOwnProperty(w) && Ge(e, t, w, null, i, C);
    for (I in i)
      C = i[I], U = n[I], !i.hasOwnProperty(I) || C === U || C == null && U == null || Ge(e, t, I, C, i, U);
  }
  function Um(e) {
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
  function nb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var o = n[i], c = o.transferSize, p = o.initiatorType, S = o.duration;
        if (c && S && Um(p)) {
          for (p = 0, S = o.responseEnd, i += 1; i < n.length; i++) {
            var A = n[i], D = A.startTime;
            if (D > S) break;
            var V = A.transferSize, I = A.initiatorType;
            V && Um(I) && (A = A.responseEnd, p += V * (A < S ? 1 : (S - D) / (A - D)));
          }
          if (--i, t += 8 * (c + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var su = null, ou = null;
  function Ss(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Lm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bm(e, t) {
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
  function cu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var uu = null;
  function ab() {
    var e = window.event;
    return e && e.type === "popstate" ? e === uu ? !1 : (uu = e, !0) : (uu = null, !1);
  }
  var Vm = typeof setTimeout == "function" ? setTimeout : void 0, ib = typeof clearTimeout == "function" ? clearTimeout : void 0, Hm = typeof Promise == "function" ? Promise : void 0, rb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hm < "u" ? function(e) {
    return Hm.resolve(null).then(e).catch(lb);
  } : Vm;
  function lb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ya(e) {
    return e === "head";
  }
  function Gm(e, t) {
    var n = t, i = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (i === 0) {
            e.removeChild(o), qi(t);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          Hr(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Hr(n);
          for (var c = n.firstChild; c; ) {
            var p = c.nextSibling, S = c.nodeName;
            c[ir] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && c.rel.toLowerCase() === "stylesheet" || n.removeChild(c), c = p;
          }
        } else
          n === "body" && Hr(e.ownerDocument.body);
      n = o;
    } while (n);
    qi(t);
  }
  function qm(e, t) {
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
  function du(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          du(n), go(n);
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
  function sb(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[ir])
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
      if (e = Pt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ob(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Pt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Im(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Pt(e.nextSibling), e === null)) return null;
    return e;
  }
  function fu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function pu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function cb(e, t) {
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
  function Pt(e) {
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
  var mu = null;
  function Km(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Pt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function km(e) {
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
  function Ym(e, t, n) {
    switch (t = Ss(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Hr(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    go(e);
  }
  var en = /* @__PURE__ */ new Map(), Xm = /* @__PURE__ */ new Set();
  function _s(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var qn = Y.d;
  Y.d = {
    f: ub,
    r: db,
    D: fb,
    C: pb,
    L: mb,
    m: hb,
    X: yb,
    S: gb,
    M: vb
  };
  function ub() {
    var e = qn.f(), t = fs();
    return e || t;
  }
  function db(e) {
    var t = si(e);
    t !== null && t.tag === 5 && t.type === "form" ? up(t) : qn.r(e);
  }
  var Vi = typeof document > "u" ? null : document;
  function Qm(e, t, n) {
    var i = Vi;
    if (i && typeof t == "string" && t) {
      var o = Yt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Xm.has(o) || (Xm.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), _t(t, "link", e), mt(t), i.head.appendChild(t)));
    }
  }
  function fb(e) {
    qn.D(e), Qm("dns-prefetch", e, null);
  }
  function pb(e, t) {
    qn.C(e, t), Qm("preconnect", e, t);
  }
  function mb(e, t, n) {
    qn.L(e, t, n);
    var i = Vi;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + Yt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Yt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Yt(
        n.imageSizes
      ) + '"]')) : o += '[href="' + Yt(e) + '"]';
      var c = o;
      switch (t) {
        case "style":
          c = Hi(e);
          break;
        case "script":
          c = Gi(e);
      }
      en.has(c) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), en.set(c, e), i.querySelector(o) !== null || t === "style" && i.querySelector(Gr(c)) || t === "script" && i.querySelector(qr(c)) || (t = i.createElement("link"), _t(t, "link", e), mt(t), i.head.appendChild(t)));
    }
  }
  function hb(e, t) {
    qn.m(e, t);
    var n = Vi;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Yt(i) + '"][href="' + Yt(e) + '"]', c = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Gi(e);
      }
      if (!en.has(c) && (e = b({ rel: "modulepreload", href: e }, t), en.set(c, e), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(qr(c)))
              return;
        }
        i = n.createElement("link"), _t(i, "link", e), mt(i), n.head.appendChild(i);
      }
    }
  }
  function gb(e, t, n) {
    qn.S(e, t, n);
    var i = Vi;
    if (i && e) {
      var o = oi(i).hoistableStyles, c = Hi(e);
      t = t || "default";
      var p = o.get(c);
      if (!p) {
        var S = { loading: 0, preload: null };
        if (p = i.querySelector(
          Gr(c)
        ))
          S.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = en.get(c)) && hu(e, n);
          var A = p = i.createElement("link");
          mt(A), _t(A, "link", e), A._p = new Promise(function(D, V) {
            A.onload = D, A.onerror = V;
          }), A.addEventListener("load", function() {
            S.loading |= 1;
          }), A.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Es(p, t, i);
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
  function yb(e, t) {
    qn.X(e, t);
    var n = Vi;
    if (n && e) {
      var i = oi(n).hoistableScripts, o = Gi(e), c = i.get(o);
      c || (c = n.querySelector(qr(o)), c || (e = b({ src: e, async: !0 }, t), (t = en.get(o)) && gu(e, t), c = n.createElement("script"), mt(c), _t(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(o, c));
    }
  }
  function vb(e, t) {
    qn.M(e, t);
    var n = Vi;
    if (n && e) {
      var i = oi(n).hoistableScripts, o = Gi(e), c = i.get(o);
      c || (c = n.querySelector(qr(o)), c || (e = b({ src: e, async: !0, type: "module" }, t), (t = en.get(o)) && gu(e, t), c = n.createElement("script"), mt(c), _t(c, "link", e), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, i.set(o, c));
    }
  }
  function Zm(e, t, n, i) {
    var o = (o = Ee.current) ? _s(o) : null;
    if (!o) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Hi(n.href), n = oi(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Hi(n.href);
          var c = oi(
            o
          ).hoistableStyles, p = c.get(e);
          if (p || (o = o.ownerDocument || o, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(e, p), (c = o.querySelector(
            Gr(e)
          )) && !c._p && (p.instance = c, p.state.loading = 5), en.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, en.set(e, n), c || bb(
            o,
            e,
            n,
            p.state
          ))), t && i === null)
            throw Error(s(528, ""));
          return p;
        }
        if (t && i !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Gi(n), n = oi(
          o
        ).hoistableScripts, i = n.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Hi(e) {
    return 'href="' + Yt(e) + '"';
  }
  function Gr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Jm(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function bb(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), _t(t, "link", n), mt(t), e.head.appendChild(t));
  }
  function Gi(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function qr(e) {
    return "script[async]" + e;
  }
  function Fm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + Yt(n.href) + '"]'
          );
          if (i)
            return t.instance = i, mt(i), i;
          var o = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), mt(i), _t(i, "style", o), Es(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = Hi(n.href);
          var c = e.querySelector(
            Gr(o)
          );
          if (c)
            return t.state.loading |= 4, t.instance = c, mt(c), c;
          i = Jm(n), (o = en.get(o)) && hu(i, o), c = (e.ownerDocument || e).createElement("link"), mt(c);
          var p = c;
          return p._p = new Promise(function(S, A) {
            p.onload = S, p.onerror = A;
          }), _t(c, "link", i), t.state.loading |= 4, Es(c, n.precedence, e), t.instance = c;
        case "script":
          return c = Gi(n.src), (o = e.querySelector(
            qr(c)
          )) ? (t.instance = o, mt(o), o) : (i = n, (o = en.get(c)) && (i = b({}, n), gu(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), mt(o), _t(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Es(i, n.precedence, e));
    return t.instance;
  }
  function Es(e, t, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, c = o, p = 0; p < i.length; p++) {
      var S = i[p];
      if (S.dataset.precedence === t) c = S;
      else if (c !== o) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function hu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function gu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var xs = null;
  function Wm(e, t, n) {
    if (xs === null) {
      var i = /* @__PURE__ */ new Map(), o = xs = /* @__PURE__ */ new Map();
      o.set(n, i);
    } else
      o = xs, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
    if (i.has(e)) return i;
    for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var c = n[o];
      if (!(c[ir] || c[yt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = c.getAttribute(t) || "";
        p = e + p;
        var S = i.get(p);
        S ? S.push(c) : i.set(p, [c]);
      }
    }
    return i;
  }
  function Pm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Sb(e, t, n) {
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
  function eh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _b(e, t, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = Hi(i.href), c = t.querySelector(
          Gr(o)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = As.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = c, mt(c);
          return;
        }
        c = t.ownerDocument || t, i = Jm(i), (o = en.get(o)) && hu(i, o), c = c.createElement("link"), mt(c);
        var p = c;
        p._p = new Promise(function(S, A) {
          p.onload = S, p.onerror = A;
        }), _t(c, "link", i), n.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = As.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var yu = 0;
  function Eb(e, t) {
    return e.stylesheets && e.count === 0 && js(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && js(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && yu === 0 && (yu = 62500 * nb());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && js(e, e.stylesheets), e.unsuspend)) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        },
        (e.imgBytes > yu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function As() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) js(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ns = null;
  function js(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ns = /* @__PURE__ */ new Map(), t.forEach(xb, e), Ns = null, As.call(e));
  }
  function xb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ns.get(e);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ns.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < o.length; c++) {
          var p = o[c];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), i = p);
        }
        i && n.set(null, i);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), c = n.get(p) || i, c === i && n.set(null, o), n.set(p, o), this.count++, i = As.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ir = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: O,
    _currentValue2: O,
    _threadCount: 0
  };
  function Ab(e, t, n, i, o, c, p, S, A) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mn(0), this.hiddenUpdates = mn(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function th(e, t, n, i, o, c, p, S, A, D, V, I) {
    return e = new Ab(
      e,
      t,
      n,
      p,
      A,
      D,
      V,
      I,
      S
    ), t = 1, c === !0 && (t |= 24), c = Vt(3, null, null, t), e.current = c, c.stateNode = e, t = Jo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, ec(c), e;
  }
  function nh(e) {
    return e ? (e = vi, e) : vi;
  }
  function ah(e, t, n, i, o, c) {
    o = nh(o), i.context === null ? i.context = o : i.pendingContext = o, i = la(t), i.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (i.callback = c), n = sa(e, i, t), n !== null && (Ut(n, e, t), _r(n, e, t));
  }
  function ih(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function vu(e, t) {
    ih(e, t), (e = e.alternate) && ih(e, t);
  }
  function rh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ba(e, 67108864);
      t !== null && Ut(t, e, 67108864), vu(e, 67108864);
    }
  }
  function lh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kt();
      t = ar(t);
      var n = Ba(e, t);
      n !== null && Ut(n, e, t), vu(e, t);
    }
  }
  var ws = !0;
  function Nb(e, t, n, i) {
    var o = T.T;
    T.T = null;
    var c = Y.p;
    try {
      Y.p = 2, bu(e, t, n, i);
    } finally {
      Y.p = c, T.T = o;
    }
  }
  function jb(e, t, n, i) {
    var o = T.T;
    T.T = null;
    var c = Y.p;
    try {
      Y.p = 8, bu(e, t, n, i);
    } finally {
      Y.p = c, T.T = o;
    }
  }
  function bu(e, t, n, i) {
    if (ws) {
      var o = Su(i);
      if (o === null)
        ru(
          e,
          t,
          i,
          $s,
          n
        ), oh(e, i);
      else if ($b(
        o,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (oh(e, i), t & 4 && -1 < wb.indexOf(e)) {
        for (; o !== null; ) {
          var c = si(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var p = B(c.pendingLanes);
                  if (p !== 0) {
                    var S = c;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                      var A = 1 << 31 - xt(p);
                      S.entanglements[1] |= A, p &= ~A;
                    }
                    vn(c), (ze & 6) === 0 && (us = pt() + 500, Lr(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Ba(c, 2), S !== null && Ut(S, c, 2), fs(), vu(c, 2);
            }
          if (c = Su(i), c === null && ru(
            e,
            t,
            i,
            $s,
            n
          ), c === o) break;
          o = c;
        }
        o !== null && i.stopPropagation();
      } else
        ru(
          e,
          t,
          i,
          null,
          n
        );
    }
  }
  function Su(e) {
    return e = Eo(e), _u(e);
  }
  var $s = null;
  function _u(e) {
    if ($s = null, e = li(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return $s = e, null;
  }
  function sh(e) {
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
        switch (bl()) {
          case ni:
            return 2;
          case ai:
            return 8;
          case er:
          case fo:
            return 32;
          case tr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Eu = !1, va = null, ba = null, Sa = null, Kr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), _a = [], wb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function oh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        va = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Kr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kr.delete(t.pointerId);
    }
  }
  function Yr(e, t, n, i, o, c) {
    return e === null || e.nativeEvent !== c ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: c,
      targetContainers: [o]
    }, t !== null && (t = si(t), t !== null && rh(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function $b(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return va = Yr(
          va,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return ba = Yr(
          ba,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return Sa = Yr(
          Sa,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "pointerover":
        var c = o.pointerId;
        return Kr.set(
          c,
          Yr(
            Kr.get(c) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return c = o.pointerId, kr.set(
          c,
          Yr(
            kr.get(c) || null,
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
  function ch(e) {
    var t = li(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, Ed(e.priority, function() {
              lh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, Ed(e.priority, function() {
              lh(n);
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
  function Ts(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Su(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        _o = i, n.target.dispatchEvent(i), _o = null;
      } else
        return t = si(n), t !== null && rh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function uh(e, t, n) {
    Ts(e) && n.delete(t);
  }
  function Tb() {
    Eu = !1, va !== null && Ts(va) && (va = null), ba !== null && Ts(ba) && (ba = null), Sa !== null && Ts(Sa) && (Sa = null), Kr.forEach(uh), kr.forEach(uh);
  }
  function Ms(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Eu || (Eu = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      Tb
    )));
  }
  var Ds = null;
  function dh(e) {
    Ds !== e && (Ds = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Ds === e && (Ds = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (_u(i || n) === null)
              continue;
            break;
          }
          var c = si(n);
          c !== null && (e.splice(t, 3), t -= 3, Sc(
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
  function qi(e) {
    function t(A) {
      return Ms(A, e);
    }
    va !== null && Ms(va, e), ba !== null && Ms(ba, e), Sa !== null && Ms(Sa, e), Kr.forEach(t), kr.forEach(t);
    for (var n = 0; n < _a.length; n++) {
      var i = _a[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < _a.length && (n = _a[0], n.blockedOn === null); )
      ch(n), n.blockedOn === null && _a.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], c = n[i + 1], p = o[Mt] || null;
        if (typeof c == "function")
          p || dh(n);
        else if (p) {
          var S = null;
          if (c && c.hasAttribute("formAction")) {
            if (o = c, p = c[Mt] || null)
              S = p.formAction;
            else if (_u(o) !== null) continue;
          } else S = p.action;
          typeof S == "function" ? n[i + 1] = S : (n.splice(i, 3), i -= 3), dh(n);
        }
      }
  }
  function fh() {
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
  function xu(e) {
    this._internalRoot = e;
  }
  Cs.prototype.render = xu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, i = Kt();
    ah(n, i, e, t, null, null);
  }, Cs.prototype.unmount = xu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ah(e.current, 2, null, e, null, null), fs(), t[ri] = null;
    }
  };
  function Cs(e) {
    this._internalRoot = e;
  }
  Cs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = _d();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < _a.length && t !== 0 && t < _a[n].priority; n++) ;
      _a.splice(n, 0, e), n === 0 && ch(e);
    }
  };
  var ph = r.version;
  if (ph !== "19.2.7")
    throw Error(
      s(
        527,
        ph,
        "19.2.7"
      )
    );
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = g(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Mb = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Os.isDisabled && Os.supportsFiber)
      try {
        xn = Os.inject(
          Mb
        ), Ze = Os;
      } catch {
      }
  }
  return Qr.createRoot = function(e, t) {
    if (!u(e)) throw Error(s(299));
    var n = !1, i = "", o = Sp, c = _p, p = Ep;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = th(
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
      fh
    ), e[ri] = t.current, iu(e), new xu(t);
  }, Qr.hydrateRoot = function(e, t, n) {
    if (!u(e)) throw Error(s(299));
    var i = !1, o = "", c = Sp, p = _p, S = Ep, A = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (A = n.formState)), t = th(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      o,
      A,
      c,
      p,
      S,
      fh
    ), t.context = nh(null), n = t.current, i = Kt(), i = ar(i), o = la(i), o.callback = null, sa(n, o, i), n = i, t.current.lanes = n, jt(t, n), vn(t), e[ri] = t.current, iu(e), new Cs(t);
  }, Qr.version = "19.2.7", Qr;
}
var xh;
function Kb() {
  if (xh) return ju.exports;
  xh = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), ju.exports = Ib(), ju.exports;
}
var kb = Kb();
const Yb = ["none", "low", "medium", "high", "xhigh", "max"], Xb = ["low", "medium", "high", "xhigh", "max"], Qb = [
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
], Zb = 300 * 1e3, Jb = 500, Ah = 256, Fb = 160, Wb = 500, Pb = 300, e0 = /[\u0000-\u001f\u007f]/, al = /* @__PURE__ */ new Map();
function rd(a) {
  return typeof a == "string" && a !== "ultra" && /^[a-z][a-z0-9_-]{0,63}$/.test(a);
}
function ks(a, r) {
  if (typeof a != "string" || e0.test(a)) return;
  const l = a.trim();
  if (l !== "")
    return l.slice(0, r);
}
function t0(a) {
  const r = ks(a, Ah + 1);
  return r && r.length <= Ah ? r : void 0;
}
function n0(a) {
  if (!Array.isArray(a)) return;
  const r = /* @__PURE__ */ new Map();
  for (const l of a) {
    const s = typeof l == "string" ? l : l && typeof l == "object" ? l.effort : void 0;
    if (!rd(s) || r.has(s)) continue;
    const u = { effort: s };
    if (l && typeof l == "object") {
      const d = l.description, f = ks(d, Pb);
      f && (u.description = f);
    }
    r.set(s, u);
  }
  return r.size > 0 ? Array.from(r.values()) : void 0;
}
function ld(a) {
  var r;
  return {
    ...a,
    reasoningEfforts: (r = a.reasoningEfforts) == null ? void 0 : r.map((l) => ({ ...l }))
  };
}
function a0(a) {
  return {
    models: a.models.map(ld),
    capabilities: { ...a.capabilities },
    ...a.source ? { source: a.source } : {}
  };
}
function Eg(a) {
  if (!Array.isArray(a)) return [];
  const r = /* @__PURE__ */ new Set(), l = [];
  for (const s of a) {
    if (l.length >= Jb) break;
    const u = typeof s == "string" ? { id: s } : s ?? {}, d = t0(u.id);
    if (!d || r.has(d)) continue;
    r.add(d);
    const f = [u.label, u.display_name, u.name].map((b) => ks(b, Fb)).find(Boolean), v = {
      id: d,
      label: f ?? d
    }, m = ks(u.description, Wb);
    m && (v.description = m);
    const g = u.defaultReasoningEffort ?? u.default_reasoning_effort ?? u.default_reasoning_level;
    rd(g) && (v.defaultReasoningEffort = g);
    const y = n0(
      u.reasoningEfforts ?? u.supported_reasoning_efforts ?? u.supported_reasoning_levels ?? u.reasoning_efforts
    );
    y && (v.reasoningEfforts = y), l.push(v);
  }
  return l;
}
function i0(a) {
  return a.filter((r) => r !== "ultra").map((r) => ({ effort: r }));
}
function xg(a) {
  if (a !== "openai" && a !== "openai-codex") return [];
  const r = a === "openai" ? Yb : Xb;
  return Qb.map((l) => ({
    id: l.id,
    label: l.label,
    description: l.description,
    defaultReasoningEffort: a === "openai" ? "medium" : l.codexDefault,
    reasoningEfforts: i0(r)
  }));
}
function Bu(a, r) {
  const l = xg(a), s = l.find((u) => u.id === r);
  if (s) return s;
  if (r === "gpt-5.6") {
    const u = l.find((d) => d.id === "gpt-5.6-sol");
    if (u) return { ...ld(u), id: r, label: "GPT-5.6 (Sol alias)" };
  }
}
function Ag(a, r, l) {
  const s = [], u = /* @__PURE__ */ new Map(), d = (v) => {
    var y;
    const m = u.get(v.id);
    if (m === void 0) {
      u.set(v.id, s.length), s.push(ld(v));
      return;
    }
    const g = s[m];
    s[m] = {
      ...g,
      ...v,
      label: v.label === v.id && g.label !== g.id ? g.label : v.label,
      defaultReasoningEffort: v.defaultReasoningEffort ?? g.defaultReasoningEffort,
      reasoningEfforts: (y = v.reasoningEfforts) != null && y.length ? v.reasoningEfforts.map((b) => ({ ...b })) : g.reasoningEfforts
    };
  };
  xg(a).forEach(d), r.forEach((v) => {
    const m = Bu(a, v.id);
    m && d(m), d(v);
  });
  const f = l == null ? void 0 : l.trim();
  return f && !u.has(f) && d(Bu(a, f) ?? { id: f, label: f }), s;
}
function Ys(a, r, l = []) {
  var d;
  const s = Bu(a, r), u = l.find((f) => f.id === r);
  return u ? s ? {
    ...s,
    ...u,
    label: u.label === u.id ? s.label : u.label,
    defaultReasoningEffort: u.defaultReasoningEffort ?? s.defaultReasoningEffort,
    reasoningEfforts: (d = u.reasoningEfforts) != null && d.length ? u.reasoningEfforts : s.reasoningEfforts
  } : u : s;
}
function r0(a) {
  let r = 2166136261;
  for (let l = 0; l < a.length; l += 1)
    r ^= a.charCodeAt(l), r = Math.imul(r, 16777619);
  return `${a.length}-${(r >>> 0).toString(36)}`;
}
function qs(a, r, l) {
  return `${a}:${r0(r ?? "")}:${(l == null ? void 0 : l.trim()) ?? ""}`;
}
function Ng(a, r = Date.now()) {
  const l = al.get(a);
  return l ? l.expiresAt <= r ? (al.delete(a), null) : a0(l.result) : null;
}
function jg(a, r, l = Date.now()) {
  al.set(a, {
    expiresAt: l + Zb,
    result: {
      models: Eg(r.models),
      capabilities: {
        reasoningEffort: r.capabilities.reasoningEffort === !0,
        richModelCatalog: r.capabilities.richModelCatalog === !0
      },
      ...r.source ? { source: r.source } : {}
    }
  });
}
function Wr(a) {
  const r = `${a}:`;
  for (const l of al.keys())
    l.startsWith(r) && al.delete(l);
}
const In = {
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
}, wg = "settings";
function l0(a, r) {
  const l = {
    ...a.reasoningEfforts
  };
  for (const [s, u] of Object.entries(r.reasoningEfforts ?? {}))
    rd(u) && (l[s] = u);
  return {
    provider: r.provider ?? a.provider,
    models: { ...a.models, ...r.models },
    apiKeys: { ...a.apiKeys, ...r.apiKeys },
    reasoningEfforts: l,
    // A host upgrade/downgrade must be negotiated again each browser session.
    providerCapabilities: {},
    customBaseUrl: r.customBaseUrl !== void 0 ? r.customBaseUrl : a.customBaseUrl
  };
}
function s0(a) {
  const r = a.storage.get(wg);
  if (!r) return {
    ...In,
    models: { ...In.models },
    apiKeys: {},
    reasoningEfforts: { ...In.reasoningEfforts },
    providerCapabilities: { ...In.providerCapabilities }
  };
  try {
    const l = JSON.parse(r);
    return l0(In, l);
  } catch {
    return {
      ...In,
      models: { ...In.models },
      apiKeys: {},
      reasoningEfforts: { ...In.reasoningEfforts },
      providerCapabilities: { ...In.providerCapabilities }
    };
  }
}
function o0(a, r) {
  const { providerCapabilities: l, ...s } = r;
  a.storage.set(wg, JSON.stringify(s));
}
function Xs(a) {
  var l, s;
  const r = (l = a.providerCapabilities) == null ? void 0 : l[a.provider];
  if (!((r == null ? void 0 : r.reasoningEffort) !== !0 || r.reasoningModel !== a.models[a.provider]))
    return (s = a.reasoningEfforts) == null ? void 0 : s[a.provider];
}
function $g(a, r, l) {
  var d;
  const s = { ...a.reasoningEfforts };
  l === "" ? delete s[r] : s[r] = l;
  const u = (d = a.providerCapabilities) == null ? void 0 : d[r];
  return {
    ...a,
    reasoningEfforts: s,
    ...u ? {
      providerCapabilities: {
        ...a.providerCapabilities,
        [r]: {
          reasoningEffort: u.reasoningEffort,
          richModelCatalog: u.richModelCatalog,
          ...l ? { reasoningModel: a.models[r] ?? "" } : {}
        }
      }
    } : {}
  };
}
function Vu(a, r, l, s, u) {
  var R, x;
  const d = (R = a.providerCapabilities) == null ? void 0 : R[r], f = { ...a.reasoningEfforts }, v = f[r], m = a.models[r] ?? "", g = l.find((H) => H.id === m), y = Ys(
    r,
    m,
    Ag(r, l, m)
  ), b = !!((x = y == null ? void 0 : y.reasoningEfforts) != null && x.some(
    (H) => H.effort === v
  )), _ = s.reasoningEffort && s.richModelCatalog && !!g && u !== "fallback" && u !== "stale" && !!v && !b;
  _ && delete f[r];
  const N = !_ && s.reasoningEffort && v && b ? m : void 0;
  return ((d == null ? void 0 : d.reasoningEffort) ?? !1) === s.reasoningEffort && ((d == null ? void 0 : d.richModelCatalog) ?? !1) === s.richModelCatalog && (d == null ? void 0 : d.reasoningModel) === N && !_ ? a : {
    ...a,
    reasoningEfforts: f,
    providerCapabilities: {
      ...a.providerCapabilities,
      [r]: {
        reasoningEffort: s.reasoningEffort,
        richModelCatalog: s.richModelCatalog,
        ...N ? { reasoningModel: N } : {}
      }
    }
  };
}
function c0(a, r) {
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
const Nh = 50, Tg = "conversations";
function sd(a) {
  const r = a.storage.get(Tg);
  if (!r) return [];
  try {
    return JSON.parse(r);
  } catch {
    return [];
  }
}
function jh(a) {
  return a.messages.some((r) => {
    var l;
    return (l = r.attachments) == null ? void 0 : l.some((s) => s.dataUrl);
  }) ? {
    ...a,
    messages: a.messages.map(
      (r) => r.attachments ? {
        ...r,
        attachments: r.attachments.map(
          (l) => l.dataUrl ? { ...l, dataUrl: void 0 } : l
        )
      } : r
    )
  } : a;
}
function zs(a, r) {
  try {
    return a.storage.set(Tg, JSON.stringify(r)), !0;
  } catch {
    return !1;
  }
}
function Mg(a, r) {
  if (zs(a, r)) return;
  const l = [...r];
  for (; l.length > 1; )
    if (l.pop(), zs(a, l)) return;
  zs(a, r.map(jh)) || zs(a, r.slice(0, 1).map(jh));
}
function Hu(a) {
  return sd(a).sort((r, l) => l.updatedAt - r.updatedAt);
}
function wh(a, r) {
  const l = sd(a), s = l.findIndex((u) => u.id === r.id);
  s >= 0 ? l[s] = r : l.push(r), l.sort((u, d) => d.updatedAt - u.updatedAt), l.length > Nh && l.splice(Nh), Mg(a, l);
}
function u0(a, r) {
  const l = sd(a).filter((s) => s.id !== r);
  Mg(a, l);
}
function $h(a, r, l) {
  const s = Date.now();
  return {
    id: crypto.randomUUID(),
    title: "",
    createdAt: s,
    updatedAt: s,
    provider: a,
    model: r,
    ...l ? { reasoningEffort: l } : {},
    messages: []
  };
}
function d0(a) {
  return a.slice(0, 40);
}
function f0() {
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
function p0({ onClick: a }) {
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      className: "gcp-fab",
      onClick: a,
      "aria-label": "Graph Copilot",
      title: "Graph Copilot",
      children: /* @__PURE__ */ h.jsx(f0, {})
    }
  );
}
const Th = 8 * 1024 * 1024, Mh = 2 * 1024 * 1024, Dh = 20 * 1024 * 1024, m0 = /* @__PURE__ */ new Set([
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
function Dg(a) {
  const r = a.lastIndexOf(".");
  return r >= 0 ? a.slice(r + 1).toLowerCase() : "";
}
function Cg(a) {
  const r = (a.type || "").toLowerCase();
  if (r.startsWith("image/")) return "image";
  if (r === "application/pdf") return "pdf";
  if (r.startsWith("text/")) return "text";
  const l = Dg(a.name);
  return l === "pdf" ? "pdf" : m0.has(l) ? "image" : "text";
}
function tl(a) {
  return a < 1024 ? `${a} B` : a < 1024 * 1024 ? `${(a / 1024).toFixed(1)} KB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
}
const h0 = {
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
function g0(a) {
  return h0[Dg(a)] ?? "";
}
function y0(a) {
  return new Promise((r, l) => {
    const s = new FileReader();
    s.onload = () => r(s.result), s.onerror = () => l(s.error ?? new Error("FileReader failed")), s.readAsDataURL(a);
  });
}
const v0 = "4.10.38", Ch = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${v0}/build`;
let Mu = null;
function b0() {
  return Mu || (Mu = import(`${Ch}/pdf.mjs`).then((r) => {
    const l = r.default ?? r;
    return l.GlobalWorkerOptions.workerSrc = `${Ch}/pdf.worker.mjs`, l;
  })), Mu;
}
async function S0(a) {
  const r = await b0(), l = await a.arrayBuffer(), s = await r.getDocument({ data: l }).promise, u = [];
  for (let d = 1; d <= s.numPages; d++) {
    const m = (await (await s.getPage(d)).getTextContent()).items.map((g) => typeof (g == null ? void 0 : g.str) == "string" ? g.str : "").join(" ").replace(/[ \t]+/g, " ").trim();
    m && u.push(m);
  }
  return u.join(`

`).trim();
}
async function _0(a, r = {}) {
  const l = Cg(a), s = {
    id: crypto.randomUUID(),
    kind: l,
    name: a.name,
    size: a.size,
    mime: a.type || ""
  };
  if (l === "image") {
    if (a.size > Th)
      throw new Error(`Image "${a.name}" is too large (max ${tl(Th)})`);
    const d = await (r.readDataUrl ?? y0)(a);
    return { ...s, dataUrl: d };
  }
  if (l === "pdf") {
    if (a.size > Dh)
      throw new Error(`PDF "${a.name}" is too large (max ${tl(Dh)})`);
    let d;
    try {
      d = await (r.loadPdfText ?? S0)(a);
    } catch (f) {
      const v = (f == null ? void 0 : f.message) ?? String(f);
      throw new Error(`Could not read PDF "${a.name}": ${v}`);
    }
    return { ...s, text: d };
  }
  if (a.size > Mh)
    throw new Error(`Text file "${a.name}" is too large (max ${tl(Mh)})`);
  const u = await (r.readText ?? ((d) => d.text()))(a);
  return { ...s, text: u };
}
const E0 = /* @__PURE__ */ new Set([
  "openai",
  "openai-codex",
  "openrouter",
  "anthropic",
  "custom"
]);
function Og(a, r, l) {
  const s = r ?? [], u = [];
  a.trim() && u.push(a);
  for (const v of s)
    if ((v.kind === "text" || v.kind === "pdf") && v.text) {
      const m = v.kind === "pdf" ? "" : g0(v.name);
      u.push(`Attached file "${v.name}":
\`\`\`${m}
${v.text}
\`\`\``);
    }
  const d = u.join(`

`), f = s.filter((v) => v.kind === "image" && v.dataUrl);
  if (f.length > 0 && E0.has(l))
    return [
      { type: "text", text: d || "(see attached image)" },
      ...f.map((m) => ({ type: "image_url", image_url: { url: m.dataUrl } }))
    ];
  if (f.length > 0) {
    const v = f.map((m) => `[image attached (not sent to this provider): ${m.name}]`).join(`
`);
    return [d, v].filter(Boolean).join(`

`);
  }
  return d;
}
function Oh(a, r) {
  const l = a.split(`
`);
  for (const s of l) {
    if (!s.startsWith("data: ")) continue;
    const u = s.slice(6).trim();
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
      const v = {
        message: d.message,
        stop_reason: d.stop_reason,
        usage: d.usage ?? {}
      };
      r.onDone(v);
    } else if (f === "error")
      return r.onError(d.message ?? "Unknown error from LLM proxy"), !0;
  }
  return !1;
}
async function zg(a, r, l, s) {
  let u;
  try {
    u = await a.http.fetch("/api/llm/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r),
      signal: s
    });
  } catch (m) {
    l.onError(`Network error: ${String(m)}`);
    return;
  }
  if (!u.ok) {
    let m = "";
    try {
      m = await u.text(), m.length > 200 && (m = m.slice(0, 200) + "...");
    } catch {
    }
    l.onError(`HTTP ${u.status}: ${m}`);
    return;
  }
  const d = u.body.getReader(), f = new TextDecoder();
  let v = "";
  try {
    for (; ; ) {
      const { done: m, value: g } = await d.read();
      if (m) break;
      v += f.decode(g, { stream: !0 }).replace(/\r\n/g, `
`);
      const y = v.split(`

`);
      v = y.pop() ?? "";
      for (const b of y) {
        if (!b.trim()) continue;
        if (Oh(b, l)) {
          d.cancel().catch(() => {
          });
          return;
        }
      }
    }
    v.trim() && Oh(v, l);
  } catch (m) {
    (m == null ? void 0 : m.name) !== "AbortError" && l.onError(`Stream read error: ${String(m)}`);
  } finally {
    d.releaseLock();
  }
}
async function Rg(a, r, l, s) {
  var m, g;
  const u = await a.http.fetch("/api/llm/models", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider: r, api_key: l, base_url: s })
  });
  if (!u.ok) {
    let y = "";
    try {
      y = await u.text(), y.length > 200 && (y = y.slice(0, 200) + "...");
    } catch {
    }
    throw new Error(`HTTP ${u.status}: ${y}`);
  }
  const d = await u.json(), f = d && typeof d == "object" ? d : {}, v = ["live", "cache", "stale", "fallback"].includes(String(f.source)) ? f.source : void 0;
  return {
    models: Eg(f.models),
    capabilities: {
      reasoningEffort: ((m = f.capabilities) == null ? void 0 : m.reasoning_effort) === !0,
      richModelCatalog: ((g = f.capabilities) == null ? void 0 : g.rich_model_catalog) === !0
    },
    ...v ? { source: v } : {}
  };
}
async function x0(a) {
  return (await (await a.http.fetch("/api/llm/codex/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  })).json()).auth_url;
}
async function Gu(a) {
  return await (await a.http.fetch("/api/llm/codex/status", void 0)).json();
}
async function A0(a) {
  await a.http.fetch("/api/llm/codex/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });
}
const ja = "[REDACTED]";
function et(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}
function N0(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function $a(a) {
  const r = N0(a);
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
  ].some((l) => r === l || r.endsWith(`_${l}`));
}
function Xn(a) {
  return Array.isArray(a) ? a.map(Xn) : et(a) ? Object.fromEntries(
    Object.entries(a).map(([r, l]) => [
      r,
      $a(r) ? ja : Xn(l)
    ])
  ) : a;
}
function _n(a, r) {
  typeof a == "string" ? a.length > 0 && r.add(a) : Array.isArray(a) ? a.forEach((l) => _n(l, r)) : et(a) && Object.values(a).forEach((l) => _n(l, r));
}
function Qs(a, r) {
  if (Array.isArray(a))
    a.forEach((l) => Qs(l, r));
  else if (et(a))
    for (const [l, s] of Object.entries(a))
      $a(l) ? _n(s, r) : Qs(s, r);
}
function zh(a, r, l, s) {
  if (!Array.isArray(a)) return;
  const u = /* @__PURE__ */ new Map();
  for (const d of a) {
    if (!et(d)) continue;
    let f;
    if (d.op === "add_node")
      f = typeof d.node_type == "string" ? d.node_type : void 0, typeof d.ref == "string" && f && u.set(d.ref, f);
    else if (d.op === "set_params") {
      const g = typeof d.node_id == "string" ? d.node_id : void 0;
      f = g ? u.get(g) ?? l.get(g) : void 0;
    } else
      continue;
    if (!et(d.params)) continue;
    const v = f ? r.get(f) : void 0, m = v ? new Map(v.params.map((g) => [g.name, g])) : void 0;
    for (const [g, y] of Object.entries(d.params)) {
      const b = m == null ? void 0 : m.get(g);
      (!b || b.param_type === "secret" || $a(g)) && _n(y, s);
    }
  }
}
function j0(a, r, l, s) {
  if (Array.isArray(a))
    for (const u of a) {
      if (!et(u)) continue;
      const d = typeof u.node_id == "string" ? u.node_id : void 0, f = typeof u.param == "string" ? u.param : void 0, v = d ? l.get(d) : void 0, m = v ? r.get(v) : void 0, g = m == null ? void 0 : m.params.find((y) => y.name === f);
      (!g || g.param_type === "secret" || f && $a(f)) && _n(u.values, s);
    }
}
function Ug(a, r) {
  for (const l of a.values())
    for (const s of l.params)
      (s.param_type === "secret" || $a(s.name)) && (_n(s.default, r), _n(s.options, r));
}
function il(a, r, l) {
  const s = /* @__PURE__ */ new Set();
  if (Ug(r, s), Qs(a.arguments, s), a.name === "apply_graph_operations")
    zh(a.arguments.operations, r, l, s);
  else if (a.name === "run_graph_experiments") {
    if (Array.isArray(a.arguments.variants))
      for (const u of a.arguments.variants)
        et(u) && zh(u.operations, r, l, s);
    a.arguments.search !== void 0 && _n(a.arguments.search, s);
  } else a.name === "optimize_graph_parameters" && j0(
    a.arguments.bindings,
    r,
    l,
    s
  );
  return s;
}
function Zs(a, r, l) {
  var s;
  Ug(r, l), Qs(a, l), _n(a.presets, l);
  for (const u of a.nodes) {
    const d = (s = u.data) == null ? void 0 : s.params;
    if (!et(d)) continue;
    const f = typeof u.type == "string" ? r.get(u.type) : void 0, v = f ? new Map(f.params.map((m) => [m.name, m])) : void 0;
    for (const [m, g] of Object.entries(d)) {
      const y = v == null ? void 0 : v.get(m);
      (!y || y.param_type === "secret" || $a(m)) && _n(g, l);
    }
  }
}
function wa(a, r) {
  if (typeof a == "string") {
    let l = a;
    for (const s of [...r].sort((u, d) => d.length - u.length))
      l = l.split(s).join(ja);
    return l;
  }
  return Array.isArray(a) ? a.map((l) => wa(l, r)) : et(a) ? Object.fromEntries(
    Object.entries(a).map(([l, s]) => [l, wa(s, r)])
  ) : a;
}
function ki(a) {
  return new Map(a.map((r) => [r.node_name, r]));
}
function rl(a) {
  return new Map(
    a.filter((r) => typeof r.type == "string").map((r) => [r.id, r.type])
  );
}
function w0(a, r) {
  const l = ki(r), s = /* @__PURE__ */ new Set();
  Zs(a, l, s);
  const u = Xn(a);
  if (!et(u)) return { ...a, nodes: [], edges: [] };
  const d = Array.isArray(u.nodes) ? u.nodes : [];
  a.nodes.forEach((v, m) => {
    const g = d[m];
    !et(g) || !et(g.data) || v.data && Object.prototype.hasOwnProperty.call(v.data, "params") && (g.data.params = qu(
      v.data.params,
      typeof v.type == "string" ? v.type : void 0,
      l
    ));
  });
  const f = wa(u, s);
  return et(f) ? f : { nodes: [], edges: [] };
}
function lo(a, r, l, s = []) {
  let u = [], d = { nodes: [] };
  try {
    u = l.graph.getNodeDefinitions();
  } catch {
  }
  try {
    const g = l.graph.getGraph();
    d = { nodes: g.nodes, presets: g.presets };
  } catch {
  }
  const f = ki(u), v = rl(d.nodes), m = il(a, f, v);
  Zs(d, f, m);
  for (const g of s) {
    const y = ki(g.definitions), b = rl(g.graph.nodes);
    for (const _ of il(a, y, b))
      m.add(_);
    Zs(g.graph, y, m);
  }
  try {
    const g = JSON.parse(r);
    if (Array.isArray(g) || et(g))
      return JSON.stringify(wa(Xn(g), m));
  } catch {
  }
  return wa(r, m);
}
function qu(a, r, l) {
  const s = Xn(a);
  if (!et(s)) return s;
  const u = r ? l.get(r) : void 0, d = u ? new Map(u.params.map((f) => [f.name, f])) : void 0;
  for (const f of Object.keys(s)) {
    const v = d == null ? void 0 : d.get(f);
    (!v || v.param_type === "secret") && (s[f] = ja);
  }
  return s;
}
function Rh(a, r, l) {
  const s = Xn(a);
  if (!Array.isArray(s)) return s;
  const u = /* @__PURE__ */ new Map();
  for (const d of s)
    if (et(d)) {
      if (d.op === "add_node") {
        const f = typeof d.node_type == "string" ? d.node_type : void 0;
        typeof d.ref == "string" && f && u.set(d.ref, f), "params" in d && (d.params = qu(d.params, f, r));
      } else if (d.op === "set_params") {
        const f = typeof d.node_id == "string" ? d.node_id : void 0, v = f ? u.get(f) ?? l.get(f) : void 0;
        d.params = qu(d.params, v, r);
      }
    }
  return s;
}
function $0(a, r, l) {
  const s = Xn(a);
  if (!Array.isArray(s)) return s;
  for (const u of s) {
    if (!et(u)) continue;
    const d = typeof u.node_id == "string" ? u.node_id : void 0, f = typeof u.param == "string" ? u.param : void 0, v = d ? l.get(d) : void 0, m = v ? r.get(v) : void 0, g = m == null ? void 0 : m.params.find((y) => y.name === f);
    (!g || g.param_type === "secret") && (u.values = Array.isArray(u.values) ? u.values.map(() => ja) : ja);
  }
  return s;
}
function Lg(a, r) {
  let l = [], s = [];
  try {
    l = r.graph.getNodeDefinitions();
  } catch {
  }
  try {
    s = r.graph.getGraph().nodes;
  } catch {
  }
  const u = ki(l), d = rl(s), f = Xn(a.arguments), v = et(f) ? f : {};
  if (a.name === "apply_graph_operations")
    v.operations = Rh(a.arguments.operations, u, d);
  else if (a.name === "run_graph_experiments") {
    const y = a.arguments.variants;
    Array.isArray(v.variants) && Array.isArray(y) && v.variants.forEach((b, _) => {
      et(b) && et(y[_]) && (b.operations = Rh(
        y[_].operations,
        u,
        d
      ));
    }), a.arguments.search !== void 0 && (v.search = ja);
  } else a.name === "optimize_graph_parameters" && (v.bindings = $0(
    a.arguments.bindings,
    u,
    d
  ));
  const m = il(a, u, d), g = wa(v, m);
  return {
    id: a.id,
    name: a.name,
    arguments: et(g) ? g : {}
  };
}
function Bg(a, r) {
  let l = [], s = [];
  try {
    l = r.graph.getNodeDefinitions();
  } catch {
  }
  try {
    s = r.graph.getGraph().nodes;
  } catch {
  }
  const u = ki(l), d = rl(s), f = /* @__PURE__ */ new Set();
  for (const v of a)
    for (const m of il(v, u, d))
      f.add(m);
  return a.map((v) => {
    const m = Lg(v, r), g = wa(m.arguments, f);
    return {
      ...m,
      arguments: et(g) ? g : {}
    };
  });
}
function Iu(a, r, l) {
  let s = [], u = { nodes: [], edges: [] };
  try {
    s = l.graph.getNodeDefinitions();
  } catch {
  }
  try {
    u = l.graph.getGraph();
  } catch {
  }
  const d = ki(s), f = rl(u.nodes), v = /* @__PURE__ */ new Set();
  Zs(u, d, v);
  for (const m of r)
    for (const g of il(m, d, f))
      v.add(g);
  return wa(a, v);
}
const Rs = 3e4;
function T0(a) {
  const r = a.param_type === "secret" || $a(a.name), l = r ? ja : Xn(a.default), s = l == null ? String(l) : typeof l == "object" ? JSON.stringify(l) : String(l), u = s.length > 60 ? s.slice(0, 60) + "..." : s;
  let d = "";
  if (a.param_type === "select" && a.options.length > 0)
    d = r ? `{${ja}}` : `{${a.options.join("|")}}`;
  else if (a.param_type === "int" || a.param_type === "float") {
    const f = a.min_value !== null, v = a.max_value !== null;
    if (f || v) {
      const m = f ? String(a.min_value) : "", g = v ? String(a.max_value) : "";
      d = `{${m}..${g}}`;
    }
  }
  return `${a.name}:${a.param_type}=${u}${d}`;
}
function M0(a) {
  return a.map((r) => {
    const l = [];
    if (r.inputs.length > 0) {
      const u = r.inputs.map((d) => `${d.name}:${d.data_type}`).join(", ");
      l.push(`in[${u}]`);
    }
    if (r.outputs.length > 0) {
      const u = r.outputs.map((d) => `${d.name}:${d.data_type}`).join(", ");
      l.push(`out[${u}]`);
    }
    if (r.params.length > 0) {
      const u = r.params.map(T0).join(", ");
      l.push(`params[${u}]`);
    }
    const s = l.length > 0 ? " " + l.join(" ") : "";
    return `${r.node_name}:${s} [category: ${r.category}]`;
  }).join(`
`);
}
function Vg(a) {
  return a.map((r) => {
    const l = (r.description || "").replace(/\s+/g, " ").trim(), s = l.length > 100 ? l.slice(0, 100) + "..." : l;
    return `${r.node_name} [${r.category}]${s ? " - " + s : ""}`;
  }).join(`
`);
}
function Hg(a, r = []) {
  const l = w0(a, r), s = JSON.stringify({ nodes: l.nodes, edges: l.edges });
  if (s.length <= Rs)
    return s;
  const u = [], d = [], f = {
    originalNodes: l.nodes.length,
    includedNodes: 0,
    originalEdges: l.edges.length,
    includedEdges: 0,
    originalChars: s.length,
    limit: Rs
  }, v = () => JSON.stringify({ nodes: u, edges: d, _truncated: f });
  for (const g of l.nodes)
    if (u.push(g), f.includedNodes = u.length, v().length > Rs) {
      u.pop(), f.includedNodes = u.length;
      break;
    }
  const m = new Set(u.map((g) => String(g.id ?? "")));
  for (const g of l.edges)
    if (!(!m.has(String(g.source ?? "")) || !m.has(String(g.target ?? ""))) && (d.push(g), f.includedEdges = d.length, v().length > Rs)) {
      d.pop(), f.includedEdges = d.length;
      break;
    }
  return v();
}
function D0(a, r) {
  const l = Vg(a), s = Hg(r, a);
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
5. Report — summarize what changed in 1-2 sentences, in the user's language.

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
- Connect every REQUIRED input of nodes you add; validate_graph reports the ones you missed.
- Never use clear_graph unless the user explicitly asked to start over.
- Do not remove or rewire nodes the user built unless the request requires it — and say so when you do.

## Style
- Reply in the user's language.
- Match the shape of the request: a question gets a direct answer; a build gets a brief plan, the work, and a 1-2 sentence summary of what changed. No filler openers, no restating the request.
- Use \`code\` for node types, ports, and params; keep paragraphs and lists short; skip headings unless the reply is genuinely long.
- Present measured numbers exactly as reported, with the metric name and direction.

## Node catalog index (NodeName [Category] - description). Call get_node_schemas for exact ports/params.
${l}

## Current graph
${s}`;
}
const C0 = "graph-copilot", O0 = "0.3.0";
function Js(a) {
  if (a.length === 0 || a.some((u) => !Number.isFinite(u)))
    return;
  let r = 0, l = 0;
  if (a.forEach((u, d) => {
    const f = d + 1, v = u - r;
    r += v / f;
    const m = u - r;
    l += v * m;
  }), !Number.isFinite(r) || !Number.isFinite(l))
    return;
  const s = a.length < 2 ? 0 : l / (a.length - 1);
  if (Number.isFinite(s))
    return { mean: r, variance: Math.max(0, s) };
}
function Qn(a) {
  var r;
  return (r = Js(a)) == null ? void 0 : r.mean;
}
function so(a) {
  if (a.length < 2) return;
  const r = Js(a);
  if (!r) return;
  const l = Math.sqrt(r.variance);
  return Number.isFinite(l) ? l : void 0;
}
function Is(a) {
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
    return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * a)) - Is(1 - a);
  let l = 0.9999999999998099;
  const s = a - 1;
  r.forEach((d, f) => {
    l += d / (s + f + 1);
  });
  const u = s + r.length - 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (s + 0.5) * Math.log(u) - u + Math.log(l);
}
function Uh(a, r, l) {
  const f = a + r, v = a + 1, m = a - 1;
  let g = 1, y = 1 - f * l / v;
  Math.abs(y) < 1e-300 && (y = 1e-300), y = 1 / y;
  let b = y;
  for (let _ = 1; _ <= 200; _ += 1) {
    const N = 2 * _;
    let R = _ * (r - _) * l / ((m + N) * (a + N));
    y = 1 + R * y, Math.abs(y) < 1e-300 && (y = 1e-300), g = 1 + R / g, Math.abs(g) < 1e-300 && (g = 1e-300), y = 1 / y, b *= y * g, R = -((a + _) * (f + _) * l) / ((a + N) * (v + N)), y = 1 + R * y, Math.abs(y) < 1e-300 && (y = 1e-300), g = 1 + R / g, Math.abs(g) < 1e-300 && (g = 1e-300), y = 1 / y;
    const x = y * g;
    if (b *= x, Math.abs(x - 1) <= 3e-14) break;
  }
  return b;
}
function z0(a, r, l) {
  if (a <= 0) return 0;
  if (a >= 1) return 1;
  const s = Math.exp(
    Is(r + l) - Is(r) - Is(l) + r * Math.log(a) + l * Math.log1p(-a)
  );
  return a < (r + 1) / (r + l + 2) ? s * Uh(r, l, a) / r : 1 - s * Uh(l, r, 1 - a) / l;
}
function Lh(a, r) {
  if (a === 0) return 0.5;
  const l = r / (r + a * a), s = 0.5 * z0(
    l,
    r / 2,
    0.5
  );
  return a > 0 ? 1 - s : s;
}
function R0(a) {
  if (!Number.isInteger(a) || a < 1) return;
  const r = 0.975;
  let l = 0, s = 1;
  for (; Lh(s, a) < r && s < 1e6; ) s *= 2;
  if (!(s >= 1e6)) {
    for (let u = 0; u < 100; u += 1) {
      const d = (l + s) / 2;
      Lh(d, a) < r ? l = d : s = d;
    }
    return (l + s) / 2;
  }
}
function Gg(a) {
  if (a.length < 2) return;
  const r = Qn(a), l = so(a), s = a.length - 1, u = R0(s);
  if (r === void 0 || l === void 0 || u === void 0)
    return;
  const d = u * l / Math.sqrt(a.length), f = r - d, v = r + d;
  if ([d, f, v].every(Number.isFinite))
    return {
      confidenceLevel: 0.95,
      degreesOfFreedom: s,
      mean: r,
      margin: d,
      lower: f,
      upper: v
    };
}
const od = Gg;
function U0(a, r) {
  if (a.length < 2 || r.length < 2) return;
  const l = Js(a), s = Js(r);
  if (!l || !s) return;
  const u = a.length + r.length - 2, d = ((a.length - 1) * l.variance + (r.length - 1) * s.variance) / u;
  if (!Number.isFinite(d) || d <= 0) return;
  const f = (l.mean - s.mean) / Math.sqrt(d), v = 1 - 3 / (4 * u - 1), m = f * v;
  return Number.isFinite(m) ? m : void 0;
}
function ll(a, r, l) {
  const s = Qn(a), u = Qn(r);
  if (s === void 0 || u === void 0) return;
  const d = s - u, f = l === "maximize" ? d : -d;
  if (!Number.isFinite(d) || !Number.isFinite(f)) return;
  const v = U0(a, r);
  return {
    baselineMean: u,
    candidateMean: s,
    rawDelta: d,
    improvement: f,
    hedgesG: v,
    directionAdjustedHedgesG: v === void 0 ? void 0 : l === "maximize" ? v : -v
  };
}
const L0 = [
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
function Us(a) {
  return a !== void 0 && Number.isFinite(a) ? String(a) : "";
}
function B0(a) {
  return /^[\t\r\n ]*[=+\-@]/.test(a) ? `'${a}` : a;
}
function V0(a) {
  const r = B0(a);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function H0(a) {
  const r = [L0.slice()];
  return a.runs.forEach((l) => {
    r.push([
      a.id,
      a.createdAt,
      a.hypothesis,
      a.objective.metric,
      a.objective.direction,
      l.variantId,
      l.variantLabel,
      Us(l.repetition),
      l.status,
      l.metricKey ?? "",
      Us(l.metricValue),
      Us(l.runtimeMs),
      l.seed === void 0 ? "" : typeof l.seed == "number" ? Us(l.seed) : l.seed,
      l.error ?? ""
    ]);
  }), r.map((l) => l.map(V0).join(",")).join(`\r
`);
}
function xa(a) {
  return Object.is(a, -0) || a === 0 ? "0" : Number(a.toPrecision(6)).toString();
}
function bn(a) {
  return a.replace(/[\r\n]+/g, " ").replace(/`/g, "'").trim();
}
function G0(a) {
  const r = /* @__PURE__ */ new Map();
  return a.runs.forEach((l) => {
    let s = r.get(l.variantId);
    s || (s = {
      id: l.variantId,
      label: l.variantLabel || l.variantId,
      usableValues: [],
      unusableRuns: 0
    }, r.set(l.variantId, s)), l.status === "completed" && Number.isFinite(l.metricValue) ? s.usableValues.push(l.metricValue) : s.unusableRuns += 1;
  }), [...r.values()];
}
function q0(a) {
  var v;
  const r = G0(a), l = r.find((m) => m.id === a.baselineVariantId), s = [], u = [
    `# Research report: ${bn(a.id)}`,
    "",
    "## Study question",
    "",
    `- Hypothesis under test: ${bn(a.hypothesis)}`,
    `- Objective: ${a.objective.direction} \`${bn(a.objective.metric)}\`.`,
    `- Recorded evidence: ${a.runs.length} run(s) across ${r.length} variant(s).`,
    "",
    "## Observations",
    ""
  ];
  r.length === 0 && (u.push("- **[Observation]** No run records were available."), s.push("No run records were available for analysis.")), r.forEach((m) => {
    const g = Qn(m.usableValues), y = so(m.usableValues), b = Gg(m.usableValues), _ = [`n=${m.usableValues.length}`];
    if (g !== void 0 && _.push(`mean=${xa(g)}`), y !== void 0 && _.push(`sample SD=${xa(y)}`), b ? _.push(`95% Student-t CI=[${xa(b.lower)}, ${xa(b.upper)}]`) : _.push("95% Student-t CI=unavailable"), l && m.id !== l.id) {
      const N = ll(
        m.usableValues,
        l.usableValues,
        a.objective.direction
      );
      N && (_.push(`raw delta vs ${bn(l.label)}=${xa(N.rawDelta)}`), _.push(`direction-adjusted improvement=${xa(N.improvement)}`), N.hedgesG !== void 0 && _.push(`Hedges g=${xa(N.hedgesG)}`));
    }
    u.push(`- **[Observation] ${bn(m.label)}:** ${_.join("; ")}.`), m.usableValues.length < 2 && s.push(
      `${m.label} has fewer than two finite completed observations; variability and a confidence interval are unavailable.`
    ), m.unusableRuns > 0 && s.push(
      `${m.label} has ${m.unusableRuns} run(s) excluded because they failed, were incomplete, or had a non-finite objective value.`
    );
  }), a.baselineVariantId && !l && s.push(`Baseline variant '${a.baselineVariantId}' was not present in the run records.`);
  const d = l ? r.filter((m) => m.id !== l.id).map((m) => ({
    variant: m,
    comparison: ll(
      m.usableValues,
      l.usableValues,
      a.objective.direction
    )
  })).filter((m) => m.comparison !== void 0).sort((m, g) => g.comparison.improvement - m.comparison.improvement) : [];
  u.push(
    "",
    "## Claims and interpretation",
    "",
    "- **[Claim status]** The hypothesis remains a claim under test. These descriptive observations alone do not establish causality, robustness, or external validity."
  ), d[0] ? u.push(
    `- **[Candidate claim]** ${bn(d[0].variant.label)} had the strongest observed direction-adjusted change versus the baseline (${xa(d[0].comparison.improvement)}); confirm it with a pre-registered, independently replicated study before treating it as a conclusion.`
  ) : u.push("- **[Candidate claim]** No baseline comparison had enough finite evidence to nominate a directional result.");
  const f = [...a.warnings ?? [], ...s];
  return u.push("", "## Warnings", ""), f.length === 0 ? u.push("- None recorded.") : f.forEach((m) => u.push(`- **[Warning]** ${bn(m)}`)), u.push("", "## Paper leads", ""), (v = a.paperLeads) != null && v.length ? a.paperLeads.forEach((m) => {
    u.push(
      `- **[Paper lead] ${bn(m.title)}** — Evidence: ${bn(m.evidence)} Next study: ${bn(m.nextStep)}`
    );
  }) : u.push("- None recorded."), u.join(`
`);
}
const cd = "codefyui.graph-copilot.study", Fs = 1, Ku = "plugin-canonical-v1", Ws = 5 * 1024 * 1024, Bh = 64, Vh = 1e5, Hh = 64 * 1024, Pr = 1e4, sl = 8, I0 = 16, K0 = 5e3, k0 = 1e4, ku = 1e3, ud = 512, Y0 = 40, X0 = 256, Ls = 1e3, Ie = 512, $t = 32 * 1024;
class cn extends Error {
  constructor(l, s) {
    super(s);
    tn(this, "code");
    this.name = "StudyBundleError", this.code = l;
  }
}
function F(a, r, l) {
  throw new cn(a, `${r}: ${l}`);
}
function qg(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function Yu(a, r, l, s) {
  if (l > Bh && F("LIMIT_EXCEEDED", r, `maximum depth is ${Bh}`), s.values += 1, s.values > Vh && F("LIMIT_EXCEEDED", r, `maximum value count is ${Vh}`), a === null) return "null";
  if (typeof a == "boolean") return a ? "true" : "false";
  if (typeof a == "number")
    return Number.isFinite(a) || F("INVALID_VALUE", r, "numbers must be finite"), JSON.stringify(a);
  if (typeof a == "string")
    return a.length > Hh && F(
      "LIMIT_EXCEEDED",
      r,
      `maximum string length is ${Hh}`
    ), JSON.stringify(a);
  (typeof a != "object" || a === void 0) && F("INVALID_VALUE", r, `unsupported JSON value ${typeof a}`), s.stack.has(a) && F("INVALID_VALUE", r, "cyclic values are not allowed"), s.stack.add(a);
  try {
    if (Array.isArray(a)) {
      a.length > Pr && F(
        "LIMIT_EXCEEDED",
        r,
        `maximum collection size is ${Pr}`
      );
      for (let d = 0; d < a.length; d += 1)
        Object.prototype.hasOwnProperty.call(a, d) || F("INVALID_VALUE", `${r}/${d}`, "sparse arrays are not allowed");
      return `[${a.map((d, f) => Yu(
        d,
        `${r}/${f}`,
        l + 1,
        s
      )).join(",")}]`;
    }
    qg(a) || F("INVALID_VALUE", r, "objects must be plain JSON objects");
    const u = Object.keys(a).sort();
    return u.length > Pr && F(
      "LIMIT_EXCEEDED",
      r,
      `maximum collection size is ${Pr}`
    ), `{${u.map((d) => (d.length > Ie && F("LIMIT_EXCEEDED", r, `object key exceeds ${Ie} characters`), `${JSON.stringify(d)}:${Yu(
      a[d],
      `${r}/${oo(d)}`,
      l + 1,
      s
    )}`)).join(",")}}`;
  } finally {
    s.stack.delete(a);
  }
}
function Yi(a) {
  return Yu(a, "$", 0, { values: 0, stack: /* @__PURE__ */ new WeakSet() });
}
function Q0(a) {
  return new TextEncoder().encode(a).byteLength;
}
function dd(a) {
  const r = Q0(a);
  if (r > Ws)
    throw new cn(
      "BUNDLE_TOO_LARGE",
      `Study bundle is ${r} bytes; maximum is ${Ws}`
    );
}
async function Ig(a) {
  var s;
  const r = (s = globalThis.crypto) == null ? void 0 : s.subtle;
  if (!r)
    throw new cn(
      "CRYPTO_UNAVAILABLE",
      "Web Crypto SHA-256 is unavailable in this environment"
    );
  const l = await r.digest("SHA-256", new TextEncoder().encode(a));
  return [...new Uint8Array(l)].map((u) => u.toString(16).padStart(2, "0")).join("");
}
function ge(a, r) {
  return qg(a) || F("INVALID_BUNDLE", r, "expected an object"), a;
}
function De(a, r, l, s) {
  const u = new Set(r);
  for (const d of Object.keys(a))
    u.has(d) || F("INVALID_BUNDLE", `${s}/${oo(d)}`, "unknown property");
  for (const d of l)
    Object.prototype.hasOwnProperty.call(a, d) || F("INVALID_BUNDLE", s, `missing required property '${d}'`);
}
function Qe(a, r, l = Pr) {
  return Array.isArray(a) || F("INVALID_BUNDLE", r, "expected an array"), a.length > l && F("LIMIT_EXCEEDED", r, `maximum item count is ${l}`), a;
}
function be(a, r, l = Ie, s = !1) {
  return typeof a != "string" && F("INVALID_BUNDLE", r, "expected a string"), (!s && !a.trim() || a.length > l) && F(
    a.length > l ? "LIMIT_EXCEEDED" : "INVALID_BUNDLE",
    r,
    a.length > l ? `maximum length is ${l}` : "must not be empty"
  ), /\u0000/.test(a) && F("INVALID_BUNDLE", r, "NUL characters are not allowed"), a;
}
function gt(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && F("INVALID_BUNDLE", r, "expected a finite number"), a;
}
function ol(a, r, l, s) {
  const u = gt(a, r);
  return (!Number.isInteger(u) || u < l || u > s) && F("INVALID_BUNDLE", r, `expected an integer from ${l} to ${s}`), u;
}
function Kg(a, r) {
  return typeof a != "boolean" && F("INVALID_BUNDLE", r, "expected a boolean"), a;
}
function Zn(a, r, l) {
  return (typeof a != "string" || !r.includes(a)) && F("INVALID_BUNDLE", l, `expected one of: ${r.join(", ")}`), a;
}
function cl(a, r) {
  const l = be(a, r, 64);
  return (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(l) || Number.isNaN(Date.parse(l)) || new Date(l).toISOString() !== l) && F("INVALID_BUNDLE", r, "expected a canonical ISO-8601 UTC timestamp"), l;
}
function Be(a, r) {
  const l = be(a, r, 256);
  return (l !== l.trim() || /[\u0000-\u001f\u007f]/.test(l)) && F("INVALID_BUNDLE", r, "id must be trimmed and contain no control characters"), l;
}
function un(a, r, l) {
  new Set(a).size !== a.length && F("INVALID_BUNDLE", r, `${l} must be unique`);
}
function me(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function oo(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Pa(a, r) {
  if (!a || typeof a != "object") return;
  if (Array.isArray(a)) {
    a.forEach((s, u) => Pa(s, `${r}/${u}`));
    return;
  }
  const l = ge(a, r);
  if (me(l, "$gcpSecretRef")) {
    De(l, ["$gcpSecretRef"], ["$gcpSecretRef"], r), Be(l.$gcpSecretRef, `${r}/$gcpSecretRef`);
    return;
  }
  for (const [s, u] of Object.entries(l))
    Pa(u, `${r}/${oo(s)}`);
}
function kg(a, r) {
  const l = ge(a, r);
  De(l, ["x", "y"], ["x", "y"], r), gt(l.x, `${r}/x`), gt(l.y, `${r}/y`);
}
function Z0(a, r) {
  const l = ge(a, r);
  De(
    l,
    ["nodes", "edges", "presets", "segmentGroups", "name", "description"],
    ["nodes", "edges"],
    r
  );
  const s = Qe(l.nodes, `${r}/nodes`, K0), u = [];
  s.forEach((m, g) => {
    const y = `${r}/nodes/${g}`, b = ge(m, y);
    De(b, ["id", "type", "position", "data"], ["id", "type", "position", "data"], y), u.push(Be(b.id, `${y}/id`)), be(b.type, `${y}/type`, Ie), kg(b.position, `${y}/position`);
    const _ = ge(b.data, `${y}/data`);
    Pa(_, `${y}/data`);
  }), un(u, `${r}/nodes`, "node ids");
  const d = new Set(u), f = Qe(l.edges, `${r}/edges`, k0), v = [];
  f.forEach((m, g) => {
    const y = `${r}/edges/${g}`, b = ge(m, y);
    De(
      b,
      ["id", "source", "target", "sourceHandle", "targetHandle", "type"],
      ["id", "source", "target", "sourceHandle", "targetHandle"],
      y
    ), v.push(Be(b.id, `${y}/id`));
    const _ = Be(b.source, `${y}/source`), N = Be(b.target, `${y}/target`);
    d.has(_) || F("INVALID_BUNDLE", `${y}/source`, "unknown source node"), d.has(N) || F("INVALID_BUNDLE", `${y}/target`, "unknown target node"), be(b.sourceHandle, `${y}/sourceHandle`, Ie, !0), be(b.targetHandle, `${y}/targetHandle`, Ie, !0), me(b, "type") && Zn(b.type, ["data", "trigger"], `${y}/type`);
  }), un(v, `${r}/edges`, "edge ids"), me(l, "presets") && Qe(l.presets, `${r}/presets`).forEach((g, y) => Pa(g, `${r}/presets/${y}`)), me(l, "segmentGroups") && Pa(l.segmentGroups, `${r}/segmentGroups`), me(l, "name") && be(l.name, `${r}/name`, Ie, !0), me(l, "description") && be(l.description, `${r}/description`, $t, !0);
}
function Gh(a, r) {
  const l = ge(a, r);
  Pa(l, r);
}
function J0(a, r) {
  const l = ge(a, r);
  switch (Zn(
    l.op,
    ["add_node", "connect", "set_params", "remove_node", "remove_edge", "clear_graph", "auto_layout"],
    `${r}/op`
  )) {
    case "add_node":
      De(l, ["op", "node_type", "ref", "params", "position"], ["op", "node_type"], r), be(l.node_type, `${r}/node_type`, Ie), me(l, "ref") && Be(l.ref, `${r}/ref`), me(l, "params") && Gh(l.params, `${r}/params`), me(l, "position") && kg(l.position, `${r}/position`);
      return;
    case "connect":
      De(
        l,
        ["op", "source", "source_handle", "target", "target_handle"],
        ["op", "source", "source_handle", "target", "target_handle"],
        r
      ), Be(l.source, `${r}/source`), be(l.source_handle, `${r}/source_handle`, Ie, !0), Be(l.target, `${r}/target`), be(l.target_handle, `${r}/target_handle`, Ie, !0);
      return;
    case "set_params":
      De(l, ["op", "node_id", "params"], ["op", "node_id", "params"], r), Be(l.node_id, `${r}/node_id`), Gh(l.params, `${r}/params`);
      return;
    case "remove_node":
      De(l, ["op", "node_id"], ["op", "node_id"], r), Be(l.node_id, `${r}/node_id`);
      return;
    case "remove_edge":
      De(
        l,
        ["op", "source", "target", "source_handle", "target_handle"],
        ["op", "source", "target"],
        r
      ), Be(l.source, `${r}/source`), Be(l.target, `${r}/target`), me(l, "source_handle") && be(l.source_handle, `${r}/source_handle`, Ie, !0), me(l, "target_handle") && be(l.target_handle, `${r}/target_handle`, Ie, !0);
      return;
    case "clear_graph":
    case "auto_layout":
      De(l, ["op"], ["op"], r);
  }
}
function F0(a, r) {
  const l = ge(a, r);
  De(
    l,
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    r
  ), Be(l.pluginId, `${r}/pluginId`), be(l.pluginVersion, `${r}/pluginVersion`, 128), ol(l.codefyuiApiVersion, `${r}/codefyuiApiVersion`, 1, 1e3);
}
function W0(a, r) {
  const l = ge(a, r);
  De(l, ["facts"], ["facts"], r);
  const s = Qe(l.facts, `${r}/facts`, X0), u = [];
  s.forEach((d, f) => {
    const v = `${r}/facts/${f}`, m = ge(d, v);
    De(m, ["key", "status", "source", "collectedAt", "value"], ["key", "status", "source"], v), u.push(be(m.key, `${v}/key`, Ie));
    const g = Zn(
      m.status,
      ["observed", "declared", "unavailable"],
      `${v}/status`
    );
    be(m.source, `${v}/source`, Ie), me(m, "collectedAt") && cl(m.collectedAt, `${v}/collectedAt`);
    const y = me(m, "value");
    if (g === "unavailable" && y && F("INVALID_BUNDLE", `${v}/value`, "unavailable facts must not contain a value"), g !== "unavailable" && !y && F("INVALID_BUNDLE", v, `${g} facts require a value`), y) {
      Pa(m.value, `${v}/value`);
      const b = /* @__PURE__ */ new Map();
      ul(m.value, `${v}/value`, b), b.size > 0 && F(
        "INVALID_BUNDLE",
        `${v}/value`,
        "SecretRefs are allowed only in the replayable study spec"
      );
    }
  }), un(u, `${r}/facts`, "provenance fact keys");
}
function P0(a, r) {
  const l = ge(a, r);
  De(
    l,
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
  ), be(l.hypothesis, `${r}/hypothesis`, $t), Z0(l.baseline, `${r}/baseline`);
  const s = ge(l.objective, `${r}/objective`);
  De(s, ["metric", "direction"], ["metric", "direction"], `${r}/objective`), be(s.metric, `${r}/objective/metric`, Ie), Zn(s.direction, ["maximize", "minimize"], `${r}/objective/direction`), ol(l.repetitions, `${r}/repetitions`, 1, 5), ol(l.concurrency, `${r}/concurrency`, 1, 2), Kg(l.applyBestRequested, `${r}/applyBestRequested`);
  const u = Qe(l.variants, `${r}/variants`, sl);
  u.length === 0 && F("INVALID_BUNDLE", `${r}/variants`, "at least one variant is required");
  const d = [];
  u.forEach((f, v) => {
    const m = `${r}/variants/${v}`, g = ge(f, m);
    De(g, ["id", "label", "operations"], ["id", "label", "operations"], m), d.push(Be(g.id, `${m}/id`)), be(g.label, `${m}/label`, Ie), Qe(
      g.operations,
      `${m}/operations`,
      ku
    ).forEach((b, _) => {
      J0(b, `${m}/operations/${_}`);
    });
  }), un(d, `${r}/variants`, "variant ids");
}
function e1(a, r) {
  const l = ge(a, r);
  De(l, ["phase", "code", "message"], ["phase", "code", "message"], r), Zn(l.phase, ["prepare", "validate", "execute", "metric", "cancel"], `${r}/phase`), be(l.code, `${r}/code`, Ie), be(l.message, `${r}/message`, $t);
}
function t1(a, r, l) {
  const s = Qe(a, l, I0), u = ge(r.spec, "/payload/spec"), d = Qe(u.variants, "/payload/spec/variants", sl), f = new Set(d.map((y, b) => Be(
    ge(y, `/payload/spec/variants/${b}`).id,
    `/payload/spec/variants/${b}/id`
  ))), v = ol(u.repetitions, "/payload/spec/repetitions", 1, 5), m = [], g = [];
  s.forEach((y, b) => {
    const _ = `${l}/${b}`, N = ge(y, _);
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
    const R = Be(N.runKey, `${_}/runKey`);
    m.push(R), me(N, "runId") && Be(N.runId, `${_}/runId`), me(N, "graphId") && Be(N.graphId, `${_}/graphId`);
    const x = Be(N.variantId, `${_}/variantId`);
    f.has(x) || F("INVALID_BUNDLE", `${_}/variantId`, "unknown variant id");
    const H = ol(N.repetition, `${_}/repetition`, 1, v);
    g.push(`${x}\0${H}`);
    const $ = Zn(
      N.status,
      ["completed", "failed", "cancelled"],
      `${_}/status`
    );
    me(N, "startedAt") && cl(N.startedAt, `${_}/startedAt`), me(N, "completedAt") && cl(N.completedAt, `${_}/completedAt`), me(N, "startedAt") && me(N, "completedAt") && Date.parse(N.completedAt) < Date.parse(N.startedAt) && F("INVALID_BUNDLE", `${_}/completedAt`, "must not be before startedAt"), gt(N.durationMs, `${_}/durationMs`) < 0 && F("INVALID_BUNDLE", `${_}/durationMs`, "must be non-negative");
    const K = Qe(N.metrics, `${_}/metrics`, ud), ae = [];
    K.forEach((X, ne) => {
      const G = `${_}/metrics/${ne}`, ce = ge(X, G);
      De(
        ce,
        ["observedKey", "canonicalKey", "value", "source"],
        ["observedKey", "canonicalKey", "value", "source"],
        G
      ), ae.push(be(ce.observedKey, `${G}/observedKey`, Ie)), be(ce.canonicalKey, `${G}/canonicalKey`, Ie), gt(ce.value, `${G}/value`), Zn(ce.source, ["output_summary", "progress", "client"], `${G}/source`);
    }), un(ae, `${_}/metrics`, "observed metric keys"), me(N, "error") && e1(N.error, `${_}/error`), $ === "completed" && me(N, "error") && F("INVALID_BUNDLE", `${_}/error`, "completed runs must not contain an error"), $ !== "completed" && !me(N, "error") && F("INVALID_BUNDLE", _, `${$} runs require an error`);
  }), un(m, l, "run keys"), un(g, l, "variant/repetition slots");
}
function n1(a, r) {
  const l = ge(a, r);
  De(l, ["title", "evidence", "nextStep"], ["title", "evidence", "nextStep"], r), be(l.title, `${r}/title`, $t), be(l.evidence, `${r}/evidence`, $t), be(l.nextStep, `${r}/nextStep`, $t);
}
function a1(a, r) {
  const l = ge(a, r);
  if (De(
    l,
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
  ), Be(l.id, `${r}/id`), be(l.label, `${r}/label`, Ie), Zn(l.status, ["completed", "invalid", "failed"], `${r}/status`), me(l, "metricKey") && be(l.metricKey, `${r}/metricKey`, Ie), Qe(l.metricValues, `${r}/metricValues`, 5).forEach((f, v) => {
    gt(f, `${r}/metricValues/${v}`);
  }), me(l, "mean") && gt(l.mean, `${r}/mean`), me(l, "stddev") && gt(l.stddev, `${r}/stddev`) < 0 && F("INVALID_BUNDLE", `${r}/stddev`, "must be non-negative"), me(l, "confidenceInterval95")) {
    const f = ge(l.confidenceInterval95, `${r}/confidenceInterval95`);
    De(
      f,
      ["level", "lower", "upper"],
      ["level", "lower", "upper"],
      `${r}/confidenceInterval95`
    ), f.level !== 0.95 && F("INVALID_BUNDLE", `${r}/confidenceInterval95/level`, "must be 0.95");
    const v = gt(f.lower, `${r}/confidenceInterval95/lower`), m = gt(f.upper, `${r}/confidenceInterval95/upper`);
    v > m && F("INVALID_BUNDLE", `${r}/confidenceInterval95`, "lower must not exceed upper");
  }
  if (me(l, "baselineComparison")) {
    const f = ge(l.baselineComparison, `${r}/baselineComparison`);
    De(
      f,
      ["baselineId", "meanDelta", "objectiveImprovement", "hedgesG"],
      ["baselineId", "meanDelta", "objectiveImprovement"],
      `${r}/baselineComparison`
    ), Be(f.baselineId, `${r}/baselineComparison/baselineId`), gt(f.meanDelta, `${r}/baselineComparison/meanDelta`), gt(
      f.objectiveImprovement,
      `${r}/baselineComparison/objectiveImprovement`
    ), me(f, "hedgesG") && gt(f.hedgesG, `${r}/baselineComparison/hedgesG`);
  }
  gt(l.runtimeMs, `${r}/runtimeMs`) < 0 && F("INVALID_BUNDLE", `${r}/runtimeMs`, "must be non-negative");
  const u = Qe(l.observedMetrics, `${r}/observedMetrics`, ud), d = [];
  u.forEach((f, v) => {
    const m = `${r}/observedMetrics/${v}`, g = ge(f, m);
    De(g, ["key", "value"], ["key", "value"], m), d.push(be(g.key, `${m}/key`, Ie)), gt(g.value, `${m}/value`);
  }), un(d, `${r}/observedMetrics`, "derived metric keys"), me(l, "operationSummary") && Qe(l.operationSummary, `${r}/operationSummary`, ku).forEach((f, v) => be(f, `${r}/operationSummary/${v}`, $t)), Qe(l.errors, `${r}/errors`, ku).forEach((f, v) => be(f, `${r}/errors/${v}`, $t));
}
function Ps(a) {
  return a.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
}
function Yg(a, r) {
  return Object.is(a, r) || a === r ? !0 : Math.abs(a - r) <= Number.EPSILON * 32 * Math.max(1, Math.abs(a), Math.abs(r));
}
function Na(a, r, l, s) {
  const u = me(a, r);
  if (l === void 0) {
    u && F("INVALID_BUNDLE", `${s}/${r}`, "is not supported by the raw run evidence");
    return;
  }
  u || F("INVALID_BUNDLE", s, `${r} is required by the raw run evidence`);
  const d = gt(a[r], `${s}/${r}`);
  Yg(d, l) || F("INVALID_BUNDLE", `${s}/${r}`, `does not match raw run evidence (expected ${l})`);
}
function i1(a, r, l) {
  const s = a.metrics.filter((d) => d.canonicalKey === r);
  if (s.length < 2) return;
  const u = s[0].value;
  s.some((d) => d.value !== u) && F(
    "INVALID_BUNDLE",
    `${l}/metrics`,
    `conflicting duplicate samples resolve to objective identity '${r}'`
  );
}
function Xg(a, r, l) {
  const s = [...a.metrics];
  if (s.length === 0) return;
  const u = (y) => (i1(a, y.canonicalKey, l), { key: y.canonicalKey, value: y.value }), d = (y) => new Set(y.map((_) => _.canonicalKey)).size === 1 && y.length > 0 ? u(y[0]) : void 0, f = r.metric.trim(), v = s.find((y) => y.observedKey === f) ?? s.find((y) => y.observedKey.toLowerCase() === f.toLowerCase());
  if (v) return u(v);
  if (f && f.toLowerCase() !== "auto") {
    const y = Ps(f);
    return d(s.filter((b) => {
      const _ = Ps(b.observedKey);
      return _ === y || _.endsWith(`.${y}`);
    }));
  }
  const m = r.direction === "maximize" ? /(^|\.)(accuracy|f1|f1_score|reward|score|r2|auc|precision|recall)$/i : /(^|\.)(val_loss|loss|error|mae|mse|rmse)$/i, g = s.filter((y) => m.test(y.observedKey));
  return g.length > 0 ? d(g) : r.direction === "minimize" ? d(s.filter((y) => /(^|\.)runtime_ms$/i.test(y.observedKey))) : void 0;
}
function r1(a, r, l) {
  const s = Qe(a.metricValues, `${l}/metricValues`, 5).map((u, d) => gt(u, `${l}/metricValues/${d}`));
  (s.length !== r.length || s.some((u, d) => u !== r[d])) && F("INVALID_BUNDLE", `${l}/metricValues`, "does not match completed raw run evidence");
}
function Qg(a) {
  const r = /* @__PURE__ */ new Map();
  for (const l of a)
    for (const s of l.metrics) {
      const u = r.get(s.observedKey) ?? [];
      u.push(s.value), r.set(s.observedKey, u);
    }
  return [...r.entries()].sort(([l], [s]) => l.localeCompare(s)).slice(0, Y0).map(([l, s]) => ({ key: l, value: Qn(s) }));
}
function l1(a, r, l) {
  const s = Qe(
    a.observedMetrics,
    `${l}/observedMetrics`,
    ud
  ).map((u, d) => {
    const f = ge(u, `${l}/observedMetrics/${d}`);
    return {
      key: be(f.key, `${l}/observedMetrics/${d}/key`, Ie),
      value: gt(f.value, `${l}/observedMetrics/${d}/value`)
    };
  });
  (s.length !== r.length || s.some((u, d) => u.key !== r[d].key || !Yg(u.value, r[d].value))) && F("INVALID_BUNDLE", `${l}/observedMetrics`, "does not match raw run evidence");
}
function s1(a, r, l, s) {
  const u = l ? od(r) : void 0;
  if (!u) {
    me(a, "confidenceInterval95") && F(
      "INVALID_BUNDLE",
      `${s}/confidenceInterval95`,
      "is not supported by the raw run evidence"
    );
    return;
  }
  me(a, "confidenceInterval95") || F("INVALID_BUNDLE", s, "confidenceInterval95 is required by the raw run evidence");
  const d = ge(a.confidenceInterval95, `${s}/confidenceInterval95`);
  Na(d, "lower", u.lower, `${s}/confidenceInterval95`), Na(d, "upper", u.upper, `${s}/confidenceInterval95`);
}
function o1(a, r, l, s) {
  if (!r) {
    me(a, "baselineComparison") && F("INVALID_BUNDLE", `${s}/baselineComparison`, "is not supported by the raw run evidence");
    return;
  }
  me(a, "baselineComparison") || F("INVALID_BUNDLE", s, "baselineComparison is required by the raw run evidence");
  const u = ge(a.baselineComparison, `${s}/baselineComparison`);
  u.baselineId !== l && F("INVALID_BUNDLE", `${s}/baselineComparison/baselineId`, "does not match the evidence baseline"), Na(u, "meanDelta", r.rawDelta, `${s}/baselineComparison`), Na(
    u,
    "objectiveImprovement",
    r.improvement,
    `${s}/baselineComparison`
  ), Na(u, "hedgesG", r.hedgesG, `${s}/baselineComparison`);
}
function c1(a, r, l) {
  const s = r.spec, u = r.runs, f = a.variants.map((x, H) => {
    var he;
    const $ = `${l}/variants/${H}`, z = ge(x, $), K = z.id, ae = z.label, X = u.filter((T) => T.variantId === K).sort((T, Y) => T.repetition - Y.repetition || T.runKey.localeCompare(Y.runKey)), ne = X.filter((T) => T.status === "completed"), G = ne.map((T) => Xg(T, s.objective, `/payload/runs/${u.indexOf(T)}`)).filter((T) => T !== void 0), ce = new Set(G.map((T) => T.key)), ue = G.map((T) => T.value), k = ce.size === 1 ? (he = G[0]) == null ? void 0 : he.key : void 0, Q = ne.length === s.repetitions && G.length === s.repetitions && ce.size === 1, oe = z.status;
    oe === "invalid" && X.length > 0 && F("INVALID_BUNDLE", `${$}/status`, "invalid variants must not contain execution runs");
    const ye = oe === "invalid" ? "invalid" : Q ? "completed" : "failed";
    k === void 0 ? me(z, "metricKey") && F("INVALID_BUNDLE", `${$}/metricKey`, "is not supported by the raw run evidence") : z.metricKey !== k && F(
      "INVALID_BUNDLE",
      `${$}/metricKey`,
      `does not match raw run identity '${k}'`
    );
    const ee = Qn(X.map((T) => T.durationMs)) ?? 0;
    return Na(z, "runtimeMs", ee, $), l1(z, Qg(X), $), {
      record: z,
      id: K,
      label: ae,
      values: ue,
      ...k === void 0 ? {} : { metricKey: k },
      fullyObserved: Q,
      preRankingStatus: ye,
      finalStatus: ye,
      ...Q ? { mean: Qn(ue) } : {}
    };
  });
  new Set(
    f.filter((x) => x.preRankingStatus === "completed" && x.metricKey).map((x) => Ps(x.metricKey))
  ).size > 1 && f.forEach((x) => {
    x.preRankingStatus === "completed" && (x.finalStatus = "failed");
  }), f.forEach((x, H) => {
    const $ = `${l}/variants/${H}`;
    x.record.status !== x.finalStatus && F(
      "INVALID_BUNDLE",
      `${$}/status`,
      `does not match raw run evidence (expected ${x.finalStatus})`
    );
    const z = x.preRankingStatus === "completed" && x.finalStatus === "failed";
    r1(
      x.record,
      z ? [] : x.values,
      $
    ), s1(
      x.record,
      x.values,
      x.finalStatus === "completed",
      $
    );
    const K = x.finalStatus === "completed" ? x.mean : void 0;
    Na(x.record, "mean", K, $), Na(
      x.record,
      "stddev",
      x.finalStatus === "completed" ? so(x.values) : void 0,
      $
    );
  });
  const m = me(a, "baselineVariantId") ? a.baselineVariantId : void 0;
  if (m !== void 0) {
    const x = s.variants.filter(($) => $.operations.length === 0);
    (x.length !== 1 || x[0].id !== m) && F(
      "INVALID_BUNDLE",
      `${l}/baselineVariantId`,
      "must identify the single zero-operation baseline from the study spec"
    );
    const H = f.find(($) => $.id === m);
    f.forEach(($, z) => {
      const K = $.id !== m && H.finalStatus === "completed" && $.finalStatus === "completed" ? ll($.values, H.values, s.objective.direction) : void 0;
      o1(
        $.record,
        K,
        m,
        `${l}/variants/${z}`
      );
    });
  }
  const g = f.filter((x) => x.finalStatus === "completed" && x.mean !== void 0).sort((x, H) => (s.objective.direction === "maximize" ? H.mean - x.mean : x.mean - H.mean) || x.id.localeCompare(H.id)), y = g[0], b = y ? Math.max(1, Math.abs(y.mean)) * Number.EPSILON * 8 : 0, N = (y ? g.filter((x) => Math.abs(x.mean - y.mean) <= b) : []).length === 1 ? y : void 0;
  N ? (a.winnerId !== N.id || a.winnerLabel !== N.label) && F(
    "INVALID_BUNDLE",
    `${l}/winnerId`,
    `does not match the raw-run winner '${N.id}'`
  ) : (me(a, "winnerId") || me(a, "winnerLabel")) && F("INVALID_BUNDLE", `${l}/winnerId`, "no unique winner is supported by the raw run evidence");
  const R = g.length === 0 ? "failed" : f.every((x) => x.finalStatus === "completed") ? "completed" : "partial";
  a.status !== R && F(
    "INVALID_BUNDLE",
    `${l}/status`,
    `does not match raw run evidence (expected ${R})`
  );
}
function u1(a, r, l) {
  const s = ge(a, l);
  De(
    s,
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
    l
  ), Zn(s.status, ["completed", "partial", "failed"], `${l}/status`);
  const u = Qe(s.variants, `${l}/variants`, sl), d = [], f = /* @__PURE__ */ new Map();
  u.forEach((b, _) => {
    a1(b, `${l}/variants/${_}`);
    const N = ge(b, `${l}/variants/${_}`), R = Be(N.id, `${l}/variants/${_}/id`);
    d.push(R), f.set(R, be(N.label, `${l}/variants/${_}/label`, Ie));
  }), un(d, `${l}/variants`, "derived variant ids");
  const v = ge(r.spec, "/payload/spec"), m = /* @__PURE__ */ new Map(), g = Qe(v.variants, "/payload/spec/variants", sl).map((b, _) => {
    const N = ge(b, `/payload/spec/variants/${_}`), R = Be(N.id, `/payload/spec/variants/${_}/id`);
    return m.set(
      R,
      be(N.label, `/payload/spec/variants/${_}/label`, Ie)
    ), R;
  });
  (d.length !== g.length || d.some((b) => !g.includes(b))) && F("INVALID_BUNDLE", `${l}/variants`, "must match spec variant ids exactly");
  for (const b of d)
    f.get(b) !== m.get(b) && F("INVALID_BUNDLE", `${l}/variants`, `label for variant '${b}' does not match the spec`);
  if (me(s, "baselineVariantId")) {
    const b = Be(s.baselineVariantId, `${l}/baselineVariantId`);
    f.has(b) || F("INVALID_BUNDLE", `${l}/baselineVariantId`, "unknown baseline variant"), u.forEach((_, N) => {
      const R = ge(_, `${l}/variants/${N}`);
      if (!me(R, "baselineComparison")) return;
      ge(
        R.baselineComparison,
        `${l}/variants/${N}/baselineComparison`
      ).baselineId !== b && F(
        "INVALID_BUNDLE",
        `${l}/variants/${N}/baselineComparison/baselineId`,
        "must match derived baselineVariantId"
      );
    });
  } else u.some((b) => me(ge(b, l), "baselineComparison")) && F("INVALID_BUNDLE", `${l}/variants`, "baselineComparison requires baselineVariantId");
  if (me(s, "winnerId")) {
    const b = Be(s.winnerId, `${l}/winnerId`);
    f.has(b) || F("INVALID_BUNDLE", `${l}/winnerId`, "unknown winner variant"), me(s, "winnerLabel") && be(s.winnerLabel, `${l}/winnerLabel`, Ie) !== f.get(b) && F("INVALID_BUNDLE", `${l}/winnerLabel`, "does not match the winner variant label");
  } else me(s, "winnerLabel") && F("INVALID_BUNDLE", `${l}/winnerLabel`, "winnerLabel requires winnerId");
  if (me(s, "appliedVariantId")) {
    const b = Be(s.appliedVariantId, `${l}/appliedVariantId`);
    f.has(b) || F("INVALID_BUNDLE", `${l}/appliedVariantId`, "unknown applied variant");
  }
  me(s, "applyConflict") && be(s.applyConflict, `${l}/applyConflict`, $t);
  const y = ge(s.insights, `${l}/insights`);
  De(y, ["summary", "warnings", "paperIdeas"], ["summary", "warnings", "paperIdeas"], `${l}/insights`), Qe(y.summary, `${l}/insights/summary`, 1e3).forEach((b, _) => be(b, `${l}/insights/summary/${_}`, $t)), Qe(y.warnings, `${l}/insights/warnings`, 1e3).forEach((b, _) => be(b, `${l}/insights/warnings/${_}`, $t)), Qe(y.paperIdeas, `${l}/insights/paperIdeas`, 1e3).forEach((b, _) => n1(b, `${l}/insights/paperIdeas/${_}`)), c1(s, r, l);
}
function qh(a) {
  return a.startsWith("/") && !/~(?:[^01]|$)/.test(a);
}
function ul(a, r, l) {
  if (!a || typeof a != "object") return;
  if (Array.isArray(a)) {
    a.forEach((u, d) => ul(u, `${r}/${d}`, l));
    return;
  }
  const s = ge(a, r);
  if (me(s, "$gcpSecretRef")) {
    De(s, ["$gcpSecretRef"], ["$gcpSecretRef"], r);
    const u = Be(s.$gcpSecretRef, `${r}/$gcpSecretRef`), d = l.get(u) ?? [];
    d.push(r), l.set(u, d);
    return;
  }
  for (const [u, d] of Object.entries(s))
    ul(d, `${r}/${oo(u)}`, l);
}
function d1(a, r, l) {
  const s = ge(a, l);
  De(
    s,
    ["policy", "secretRequirements", "textRedactions"],
    ["policy", "secretRequirements", "textRedactions"],
    l
  ), s.policy !== "explicit-secret-ref-v1" && F("INVALID_BUNDLE", `${l}/policy`, "expected 'explicit-secret-ref-v1'");
  const u = Qe(
    s.secretRequirements,
    `${l}/secretRequirements`,
    Ls
  ), d = [], f = /* @__PURE__ */ new Map();
  u.forEach((N, R) => {
    const x = `${l}/secretRequirements/${R}`, H = ge(N, x);
    De(
      H,
      ["id", "locations", "reason", "requiredAtReplay", "nodeType", "parameter"],
      ["id", "locations", "reason", "requiredAtReplay"],
      x
    );
    const $ = Be(H.id, `${x}/id`);
    d.push($);
    const z = Qe(H.locations, `${x}/locations`, Ls).map((K, ae) => {
      const X = be(
        K,
        `${x}/locations/${ae}`,
        $t
      );
      return qh(X) || F("INVALID_BUNDLE", `${x}/locations/${ae}`, "expected a valid JSON Pointer"), X;
    });
    z.length === 0 && F("INVALID_BUNDLE", `${x}/locations`, "at least one location is required"), un(z, `${x}/locations`, "secret locations"), f.set($, [...z].sort()), be(H.reason, `${x}/reason`, $t), Kg(H.requiredAtReplay, `${x}/requiredAtReplay`), me(H, "nodeType") && be(H.nodeType, `${x}/nodeType`, Ie), me(H, "parameter") && be(H.parameter, `${x}/parameter`, Ie);
  }), un(d, `${l}/secretRequirements`, "secret requirement ids"), Qe(
    s.textRedactions,
    `${l}/textRedactions`,
    Ls
  ).forEach((N, R) => {
    const x = `${l}/textRedactions/${R}`, H = ge(N, x);
    De(H, ["locations", "reason"], ["locations", "reason"], x);
    const $ = Qe(H.locations, `${x}/locations`, Ls);
    $.length === 0 && F("INVALID_BUNDLE", `${x}/locations`, "at least one location is required"), $.forEach((z, K) => {
      const ae = be(z, `${x}/locations/${K}`, $t);
      qh(ae) || F("INVALID_BUNDLE", `${x}/locations/${K}`, "expected a valid JSON Pointer");
    }), be(H.reason, `${x}/reason`, $t);
  });
  const m = /* @__PURE__ */ new Map(), g = ge(r.spec, "/payload/spec");
  ul(g.baseline, "/spec/baseline", m), Qe(g.variants, "/payload/spec/variants", sl).forEach((N, R) => {
    const x = ge(N, `/payload/spec/variants/${R}`);
    ul(x.operations, `/spec/variants/${R}/operations`, m);
  });
  const b = [...m.keys()].sort(), _ = [...f.keys()].sort();
  (b.length !== _.length || b.some((N, R) => N !== _[R])) && F(
    "INVALID_BUNDLE",
    `${l}/secretRequirements`,
    `must declare exactly the SecretRefs used by the spec (used: ${b.join(", ") || "none"})`
  );
  for (const N of b) {
    const R = [...m.get(N)].sort(), x = f.get(N);
    (R.length !== x.length || R.some((H, $) => H !== x[$])) && F(
      "INVALID_BUNDLE",
      `${l}/secretRequirements`,
      `locations for SecretRef '${N}' do not match the spec`
    );
  }
}
function f1(a, r) {
  const l = ge(a, r);
  De(
    l,
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    r
  ), Be(l.id, `${r}/id`);
  const s = cl(l.createdAt, `${r}/createdAt`), u = cl(l.completedAt, `${r}/completedAt`);
  return Date.parse(u) < Date.parse(s) && F("INVALID_BUNDLE", `${r}/completedAt`, "must not be before createdAt"), F0(l.producer, `${r}/producer`), W0(l.provenance, `${r}/provenance`), P0(l.spec, `${r}/spec`), t1(l.runs, l, `${r}/runs`), u1(l.derived, l, `${r}/derived`), d1(l.redactionReport, l, `${r}/redactionReport`), l;
}
function p1(a, r) {
  const l = ge(a, r);
  De(
    l,
    ["algorithm", "canonicalization", "contentSha256"],
    ["algorithm", "canonicalization", "contentSha256"],
    r
  ), l.algorithm !== "SHA-256" && F("INVALID_BUNDLE", `${r}/algorithm`, "expected 'SHA-256'"), l.canonicalization !== Ku && F("INVALID_BUNDLE", `${r}/canonicalization`, `expected '${Ku}'`);
  const s = be(l.contentSha256, `${r}/contentSha256`, 64);
  return /^[a-f0-9]{64}$/.test(s) || F("INVALID_BUNDLE", `${r}/contentSha256`, "expected 64 lowercase hexadecimal characters"), l;
}
function m1(a) {
  Yi(a);
  const r = ge(a, "/");
  if (r.format !== cd)
    throw new cn(
      "UNSUPPORTED_FORMAT",
      `Unsupported study bundle format '${String(r.format ?? "")}'`
    );
  if (typeof r.formatVersion != "number" || !Number.isInteger(r.formatVersion))
    throw new cn("UNSUPPORTED_VERSION", "Study bundle formatVersion must be an integer");
  if (r.formatVersion > Fs)
    throw new cn(
      "FUTURE_VERSION",
      `Study bundle version ${r.formatVersion} requires a newer Graph Copilot`
    );
  if (r.formatVersion !== Fs)
    throw new cn(
      "UNSUPPORTED_VERSION",
      `Study bundle version ${r.formatVersion} is not supported`
    );
  De(r, ["format", "formatVersion", "payload", "integrity"], ["format", "formatVersion", "payload", "integrity"], "/");
  const l = f1(r.payload, "/payload"), s = p1(r.integrity, "/integrity");
  return { root: r, payload: l, integrity: s };
}
function Zg(a) {
  return {
    format: cd,
    formatVersion: Fs,
    payload: a
  };
}
function Jg(a, r = /* @__PURE__ */ new WeakSet()) {
  if (!a || typeof a != "object" || r.has(a)) return a;
  r.add(a);
  for (const l of Object.values(a)) Jg(l, r);
  return Object.freeze(a);
}
function Fg(a) {
  return JSON.parse(Yi(a));
}
function Du(a, r) {
  return a === void 0 ? {} : { [r]: a };
}
function h1(a, r, l) {
  const s = a.variants.map((b) => {
    var ce;
    const _ = l.filter((ue) => ue.variantId === b.id).sort((ue, k) => ue.repetition - k.repetition || ue.runKey.localeCompare(k.runKey)), N = _.filter((ue) => ue.status === "completed"), R = N.map((ue) => Xg(ue, r.objective, `/payload/runs/${l.indexOf(ue)}`)).filter((ue) => ue !== void 0), x = new Set(R.map((ue) => ue.key)), H = R.map((ue) => ue.value), $ = x.size === 1 ? (ce = R[0]) == null ? void 0 : ce.key : void 0, z = N.length === r.repetitions && R.length === r.repetitions && x.size === 1, K = b.status === "invalid" ? "invalid" : z ? "completed" : "failed", ae = z ? od(H) : void 0, X = z ? Qn(H) : void 0, ne = z ? so(H) : void 0, G = {
      id: b.id,
      label: b.label,
      status: K,
      ...$ === void 0 ? {} : { metricKey: $ },
      metricValues: H,
      ...X === void 0 ? {} : { mean: X },
      ...ne === void 0 ? {} : { stddev: ne },
      ...ae === void 0 ? {} : {
        confidenceInterval95: {
          level: 0.95,
          lower: ae.lower,
          upper: ae.upper
        }
      },
      runtimeMs: Qn(_.map((ue) => ue.durationMs)) ?? 0,
      observedMetrics: Qg(_),
      ...b.operationSummary === void 0 ? {} : { operationSummary: [...b.operationSummary] },
      errors: [...b.errors]
    };
    return {
      id: b.id,
      label: b.label,
      values: H,
      ...$ === void 0 ? {} : { metricKey: $ },
      preRankingStatus: K,
      result: G
    };
  });
  if (new Set(
    s.filter((b) => b.preRankingStatus === "completed" && b.metricKey).map((b) => Ps(b.metricKey))
  ).size > 1 && s.forEach((b) => {
    if (b.preRankingStatus !== "completed") return;
    const {
      mean: _,
      stddev: N,
      confidenceInterval95: R,
      baselineComparison: x,
      ...H
    } = b.result;
    b.result = { ...H, status: "failed", metricValues: [] };
  }), a.baselineVariantId !== void 0) {
    const b = s.find((_) => _.id === a.baselineVariantId);
    (b == null ? void 0 : b.result.status) === "completed" && s.forEach((_) => {
      if (_.id === b.id || _.result.status !== "completed") return;
      const N = ll(_.values, b.values, r.objective.direction);
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
  const d = s.filter((b) => b.result.status === "completed" && b.result.mean !== void 0).sort((b, _) => (r.objective.direction === "maximize" ? _.result.mean - b.result.mean : b.result.mean - _.result.mean) || b.id.localeCompare(_.id)), f = d[0], v = f ? Math.max(1, Math.abs(f.result.mean)) * Number.EPSILON * 8 : 0, g = (f ? d.filter((b) => Math.abs(b.result.mean - f.result.mean) <= v) : []).length === 1 ? f : void 0;
  return {
    status: d.length === 0 ? "failed" : s.every((b) => b.result.status === "completed") ? "completed" : "partial",
    variants: s.map((b) => b.result),
    ...Du(a.baselineVariantId, "baselineVariantId"),
    ...g === void 0 ? {} : { winnerId: g.id, winnerLabel: g.label },
    ...Du(a.appliedVariantId, "appliedVariantId"),
    ...Du(a.applyConflict, "applyConflict"),
    insights: {
      summary: [...a.insights.summary],
      warnings: [...a.insights.warnings],
      paperIdeas: a.insights.paperIdeas.map((b) => ({ ...b }))
    }
  };
}
async function fd(a) {
  const { payload: r, integrity: l } = m1(a), s = await Ig(Yi(Zg(r)));
  if (s !== l.contentSha256)
    throw new cn(
      "INTEGRITY_MISMATCH",
      `Study bundle integrity mismatch: expected ${s}, received ${l.contentSha256}`
    );
  const u = Fg(a);
  return dd(Yi(u)), Jg(u);
}
async function g1(a) {
  const r = {
    hypothesis: a.session.hypothesis,
    baseline: a.baseline,
    objective: { ...a.session.objective },
    repetitions: a.session.repetitions,
    concurrency: a.concurrency ?? 1,
    applyBestRequested: a.applyBestRequested ?? !1,
    variants: a.variants
  }, l = {
    id: a.session.id,
    createdAt: a.session.createdAt,
    completedAt: a.completedAt,
    producer: a.producer,
    provenance: a.provenance,
    spec: r,
    runs: a.runs,
    derived: h1(a.session, r, a.runs),
    redactionReport: a.redactionReport
  }, s = Fg(l), u = await Ig(Yi(Zg(s)));
  return fd({
    format: cd,
    formatVersion: Fs,
    payload: s,
    integrity: {
      algorithm: "SHA-256",
      canonicalization: Ku,
      contentSha256: u
    }
  });
}
async function pd(a) {
  const r = await fd(a), l = Yi(r);
  return dd(l), l;
}
async function md(a) {
  if (typeof a != "string")
    throw new cn("INVALID_JSON", "Study bundle input must be text");
  dd(a);
  let r;
  try {
    r = JSON.parse(a);
  } catch (l) {
    throw new cn("INVALID_JSON", `Study bundle is not valid JSON: ${String(l)}`);
  }
  return fd(r);
}
const y1 = "graph-copilot", v1 = "[REDACTED]", b1 = "Exact echoes of values removed by capture redaction were removed from text. Arbitrary unrelated secrets in ordinary strings cannot be detected.", S1 = "A credential-shaped field outside the replayable graph spec was removed.";
class _1 extends Error {
  constructor(l, s) {
    super(`${l}: ${s}`);
    tn(this, "path");
    this.name = "StudyCaptureError", this.path = l;
  }
}
function Me(a, r) {
  throw new _1(a, r);
}
function Fi(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function Sn(a, r) {
  return Fi(a) || Me(r, "expected a plain object"), a;
}
function Lt(a, r, l = !1) {
  return (typeof a != "string" || !l && a.length === 0) && Me(r, l ? "expected a string" : "expected a non-empty string"), a;
}
function Xi(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && Me(r, "expected a finite number"), a;
}
function vl(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function E1(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function ei(a) {
  const r = E1(a);
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
  ].some((l) => r === l || r.endsWith(`_${l}`));
}
function Qi(a, r, l = /* @__PURE__ */ new WeakSet()) {
  if (typeof a == "string") {
    a.length > 0 && r.add(a);
    return;
  }
  if (Array.isArray(a)) {
    if (l.has(a)) return;
    l.add(a), a.forEach((s) => Qi(s, r, l)), l.delete(a);
    return;
  }
  if (Fi(a)) {
    if (l.has(a)) return;
    l.add(a), Object.values(a).forEach((s) => Qi(s, r, l)), l.delete(a);
  }
}
function Wa(a, r, l = /* @__PURE__ */ new WeakSet()) {
  if (Array.isArray(a)) {
    if (l.has(a)) return;
    l.add(a), a.forEach((s) => Wa(s, r, l)), l.delete(a);
    return;
  }
  if (Fi(a) && !l.has(a)) {
    l.add(a);
    for (const [s, u] of Object.entries(a))
      ei(s) ? Qi(u, r) : Wa(u, r, l);
    l.delete(a);
  }
}
function x1(a) {
  const r = /* @__PURE__ */ new Map();
  return a.forEach((l, s) => {
    const u = Lt(l == null ? void 0 : l.node_name, `definitions[${s}].node_name`);
    r.has(u) && Me(`definitions[${s}].node_name`, `duplicate node definition '${u}'`);
    const d = /* @__PURE__ */ new Set();
    Array.isArray(l.params) || Me(`definitions[${s}].params`, "expected an array"), l.params.forEach((f, v) => {
      const m = Lt(
        f == null ? void 0 : f.name,
        `definitions[${s}].params[${v}].name`
      );
      d.has(m) && Me(
        `definitions[${s}].params[${v}].name`,
        `duplicate parameter definition '${m}'`
      ), d.add(m);
    }), r.set(u, l);
  }), r;
}
function Wg(a) {
  const r = /* @__PURE__ */ new Map();
  return a.forEach((l) => {
    typeof (l == null ? void 0 : l.id) == "string" && typeof l.type == "string" && r.set(l.id, l.type);
  }), r;
}
function A1(a, r, l) {
  if (a.op === "add_node") {
    const s = typeof a.node_type == "string" ? a.node_type : void 0;
    return s && typeof a.ref == "string" && l.set(a.ref, s), s;
  }
  if (a.op === "set_params") {
    const s = typeof a.node_id == "string" ? a.node_id : void 0;
    return s ? l.get(s) ?? r.get(s) : void 0;
  }
  a.op === "remove_node" && typeof a.node_id == "string" ? (l.delete(a.node_id), r.delete(a.node_id)) : a.op === "clear_graph" && (r.clear(), l.clear());
}
function Ih(a, r, l, s) {
  if (Wa(a, s), !Fi(a)) return;
  const u = r ? l.get(r) : void 0, d = Pg(u);
  for (const [f, v] of Object.entries(a)) {
    const m = d == null ? void 0 : d.get(f);
    (!u || !m || m.param_type === "secret" || ei(f)) && Qi(v, s);
  }
}
function N1(a, r) {
  var f;
  const l = /* @__PURE__ */ new Set(), { baseline: s, request: u } = a;
  for (const v of r.values())
    for (const m of v.params)
      Wa(m.default, l), (m.param_type === "secret" || ei(m.name)) && Qi(m.default, l);
  Wa(s, l), Wa(u, l), Wa(a.provenanceFacts, l);
  for (const v of Array.isArray(s.nodes) ? s.nodes : [])
    Ih((f = v.data) == null ? void 0 : f.params, v.type, r, l);
  Array.isArray(s.presets) && s.presets.forEach((v) => Qi(v, l));
  const d = Wg(Array.isArray(s.nodes) ? s.nodes : []);
  for (const v of Array.isArray(u.variants) ? u.variants : []) {
    const m = new Map(d), g = /* @__PURE__ */ new Map();
    for (const y of Array.isArray(v == null ? void 0 : v.operations) ? v.operations : []) {
      if (!Fi(y)) continue;
      const b = A1(y, m, g);
      (y.op === "add_node" || y.op === "set_params") && Ih(y.params, b, r, l);
    }
  }
  return l;
}
function j1(a) {
  const l = [v1, "<removed>", "***", "�"].find((s) => [...a].every((u) => !s.includes(u)));
  if (l) return l;
  for (let s = 57344; s <= 63743; s += 1) {
    const u = String.fromCodePoint(s);
    if ([...a].every((d) => !u.includes(d))) return u;
  }
  return "";
}
class w1 {
  constructor() {
    tn(this, "byReason", /* @__PURE__ */ new Map());
  }
  record(r, l) {
    const s = this.byReason.get(l) ?? /* @__PURE__ */ new Set();
    s.add(r), this.byReason.set(l, s);
  }
  report() {
    return [...this.byReason.entries()].map(([r, l]) => ({
      locations: [...l].sort(),
      reason: r
    }));
  }
}
class $1 {
  constructor(r, l) {
    tn(this, "ordered");
    tn(this, "replacement");
    this.redactions = l, this.ordered = [...r].sort((s, u) => u.length - s.length), this.replacement = j1(r);
  }
  text(r, l) {
    let s = r;
    for (const u of this.ordered) s = s.split(u).join(this.replacement);
    return s !== r && this.redactions.record(l, b1), s;
  }
  semantic(r, l) {
    return this.ordered.some((s) => r.includes(s)) && Me(l, "a redacted value appears in a semantic identity and cannot be safely rewritten"), r;
  }
}
function T1(a) {
  return a.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 180) || "secret";
}
function M1(a) {
  if (a === null) return "null";
  if (typeof a == "string") return `string:${a}`;
  if (typeof a == "number" && Number.isFinite(a)) return `number:${String(a)}`;
  if (typeof a == "boolean") return `boolean:${String(a)}`;
}
class D1 {
  constructor() {
    tn(this, "identities", /* @__PURE__ */ new Map());
    tn(this, "requirements", /* @__PURE__ */ new Map());
    tn(this, "usedIds", /* @__PURE__ */ new Set());
  }
  ref(r) {
    const l = M1(r.rawValue), s = this.identities.get(r.identity) ?? [];
    let u = l === void 0 ? void 0 : s.find((d) => d.signature === l);
    if (!u) {
      const d = T1(r.suggestedId);
      let f = d, v = 2;
      for (; this.usedIds.has(f); )
        f = `${d}-${v}`, v += 1;
      this.usedIds.add(f), u = { signature: l, id: f }, s.push(u), this.identities.set(r.identity, s), this.requirements.set(f, {
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
    return [...this.requirements.values()].map(({ requirement: r, locations: l }) => ({
      ...r,
      locations: [...l].sort()
    }));
  }
}
function dl(a, r, l) {
  if (a === null || typeof a == "boolean") return a;
  if (typeof a == "number") return Xi(a, r);
  if (typeof a == "string") return l.scrubber.text(a, r);
  if (Array.isArray(a)) {
    l.stack.has(a) && Me(r, "cyclic values are not portable"), l.stack.add(a);
    try {
      const u = [];
      for (let d = 0; d < a.length; d += 1)
        Object.prototype.hasOwnProperty.call(a, d) || Me(`${r}/${d}`, "sparse arrays are not portable"), u.push(dl(a[d], `${r}/${d}`, l));
      return u;
    } finally {
      l.stack.delete(a);
    }
  }
  const s = Sn(a, r);
  l.stack.has(s) && Me(r, "cyclic values are not portable"), l.stack.add(s);
  try {
    Object.prototype.hasOwnProperty.call(s, "$gcpSecretRef") && Me(r, "raw host data may not contain the reserved '$gcpSecretRef' key");
    const u = /* @__PURE__ */ Object.create(null);
    for (const [d, f] of Object.entries(s)) {
      const v = `${r}/${vl(d)}`;
      u[d] = ei(d) ? l.secrets.ref({
        identity: `credential:${r}:${d}`,
        suggestedId: `${d}-${r}`,
        rawValue: f,
        location: v,
        reason: `Credential-shaped key '${d}' was redacted recursively.`,
        parameter: d
      }) : dl(f, v, l);
    }
    return u;
  } finally {
    l.stack.delete(s);
  }
}
function eo(a, r, l, s, u = /* @__PURE__ */ new WeakSet()) {
  if (a === null || typeof a == "boolean") return a;
  if (typeof a == "number") return Xi(a, r);
  if (typeof a == "string") return l.text(a, r);
  if (Array.isArray(a)) {
    u.has(a) && Me(r, "cyclic values are not portable"), u.add(a);
    try {
      const f = [];
      for (let v = 0; v < a.length; v += 1)
        Object.prototype.hasOwnProperty.call(a, v) || Me(`${r}/${v}`, "sparse arrays are not portable"), f.push(eo(a[v], `${r}/${v}`, l, s, u));
      return f;
    } finally {
      u.delete(a);
    }
  }
  const d = Sn(a, r);
  u.has(d) && Me(r, "cyclic values are not portable"), u.add(d);
  try {
    Object.prototype.hasOwnProperty.call(d, "$gcpSecretRef") && Me(r, "provenance may not contain the reserved '$gcpSecretRef' key");
    const f = /* @__PURE__ */ Object.create(null);
    for (const [v, m] of Object.entries(d)) {
      const g = `${r}/${vl(v)}`;
      ei(v) ? (f[v] = l.replacement, s.record(g, S1)) : f[v] = eo(m, g, l, s, u);
    }
    return f;
  } finally {
    u.delete(d);
  }
}
function Pg(a) {
  return a ? new Map(a.params.map((r) => [r.name, r])) : void 0;
}
function Xu(a, r, l, s, u, d, f) {
  const v = Sn(a, u), m = r ? d.get(r) : void 0, g = Pg(m), y = /* @__PURE__ */ Object.create(null);
  for (const [b, _] of Object.entries(v)) {
    const N = `${u}/${vl(b)}`, R = g == null ? void 0 : g.get(b);
    let x;
    m ? R ? R.param_type === "secret" ? x = `${r}.${b} is declared as a secret parameter.` : ei(b) && (x = `Credential-shaped parameter '${b}' was redacted recursively.`) : x = `Parameter '${b}' is absent from the captured '${r}' schema and was redacted fail-closed.` : x = r ? `Node type '${r}' has no captured schema; parameter '${b}' was redacted fail-closed.` : `The node type is unresolved; parameter '${b}' was redacted fail-closed.`, y[b] = x ? f.secrets.ref({
      identity: `${l}:param:${b}`,
      suggestedId: `${s}-${b}`,
      rawValue: _,
      location: N,
      reason: x,
      ...r === void 0 ? {} : { nodeType: r },
      parameter: b
    }) : dl(_, N, f);
  }
  return y;
}
function C1(a, r, l) {
  Fi(a) || Me("baseline", "expected a plain serialized graph"), Array.isArray(a.nodes) || Me("baseline.nodes", "expected an array"), Array.isArray(a.edges) || Me("baseline.edges", "expected an array");
  const s = a.nodes.map((f, v) => {
    const m = `/spec/baseline/nodes/${v}`, g = Sn(f, `baseline.nodes[${v}]`), y = l.scrubber.semantic(Lt(g.id, `${m}/id`), `${m}/id`), b = l.scrubber.semantic(Lt(g.type, `${m}/type`), `${m}/type`);
    let _ = { x: 0, y: 0 };
    if (g.position !== void 0) {
      const x = Sn(g.position, `${m}/position`);
      _ = {
        x: Xi(x.x, `${m}/position/x`),
        y: Xi(x.y, `${m}/position/y`)
      };
    }
    const N = g.data === void 0 ? {} : Sn(g.data, `${m}/data`), R = /* @__PURE__ */ Object.create(null);
    for (const [x, H] of Object.entries(N)) {
      const $ = `${m}/data/${vl(x)}`;
      x === "params" ? R.params = Xu(
        H,
        b,
        `node:${y}`,
        y,
        $,
        r,
        l
      ) : ei(x) ? R[x] = l.secrets.ref({
        identity: `node:${y}:credential:${x}`,
        suggestedId: `${y}-${x}`,
        rawValue: H,
        location: $,
        reason: `Credential-shaped key '${x}' was redacted recursively.`,
        nodeType: b,
        parameter: x
      }) : R[x] = dl(H, $, l);
    }
    return { id: y, type: b, position: _, data: R };
  }), u = a.edges.map((f, v) => {
    const m = `/spec/baseline/edges/${v}`, g = Sn(f, `baseline.edges[${v}]`), y = g.type;
    y !== void 0 && y !== "data" && y !== "trigger" && Me(`${m}/type`, "expected 'data' or 'trigger'");
    const b = y === "data" || y === "trigger" ? y : void 0;
    return {
      id: l.scrubber.semantic(Lt(g.id, `${m}/id`), `${m}/id`),
      source: l.scrubber.semantic(Lt(g.source, `${m}/source`), `${m}/source`),
      target: l.scrubber.semantic(Lt(g.target, `${m}/target`), `${m}/target`),
      sourceHandle: l.scrubber.semantic(
        Lt(g.sourceHandle, `${m}/sourceHandle`, !0),
        `${m}/sourceHandle`
      ),
      targetHandle: l.scrubber.semantic(
        Lt(g.targetHandle, `${m}/targetHandle`, !0),
        `${m}/targetHandle`
      ),
      ...b === void 0 ? {} : { type: b }
    };
  });
  return {
    nodes: s,
    edges: u,
    ...a.presets === void 0 ? {} : {
      presets: (Array.isArray(a.presets) || Me("/spec/baseline/presets", "expected an array"), a.presets.map((f, v) => l.secrets.ref({
        identity: `preset:${v}`,
        suggestedId: `preset-${v + 1}`,
        rawValue: f,
        location: `/spec/baseline/presets/${v}`,
        reason: "Preset schema is unavailable; the entire preset was redacted fail-closed."
      })))
    },
    ...a.segmentGroups === void 0 ? {} : { segmentGroups: dl(a.segmentGroups, "/spec/baseline/segmentGroups", l) },
    ...a.name === void 0 ? {} : { name: l.scrubber.text(Lt(a.name, "/spec/baseline/name", !0), "/spec/baseline/name") },
    ...a.description === void 0 ? {} : {
      description: l.scrubber.text(
        Lt(a.description, "/spec/baseline/description", !0),
        "/spec/baseline/description"
      )
    }
  };
}
function nn(a, r, l, s = !1) {
  return l.semantic(Lt(a, r, s), r);
}
function O1(a, r, l, s, u, d) {
  Array.isArray(a) || Me(`request.variants[${l}].operations`, "expected an array");
  const f = new Map(s), v = /* @__PURE__ */ new Map();
  return a.map((m, g) => {
    const y = `/spec/variants/${l}/operations/${g}`, b = Sn(m, `request.variants[${l}].operations[${g}]`);
    switch (b.op) {
      case "add_node": {
        const _ = nn(b.node_type, `${y}/node_type`, d.scrubber), N = b.ref === void 0 ? void 0 : nn(b.ref, `${y}/ref`, d.scrubber);
        N !== void 0 && v.set(N, _);
        const R = u.get(_), x = /* @__PURE__ */ Object.create(null);
        for (const K of (R == null ? void 0 : R.params) ?? [])
          K.default !== void 0 && (x[K.name] = K.default);
        if (b.params !== void 0)
          for (const [K, ae] of Object.entries(Sn(b.params, `${y}/params`)))
            x[K] = ae;
        const $ = Object.keys(x).length > 0 ? Xu(
          x,
          _,
          N === void 0 ? `variant:${r}:operation:${g}` : `variant:${r}:ref:${N}`,
          N ?? `${r}-node-${g + 1}`,
          `${y}/params`,
          u,
          d
        ) : void 0, z = b.position === void 0 ? void 0 : (() => {
          const K = Sn(b.position, `${y}/position`);
          return {
            x: Xi(K.x, `${y}/position/x`),
            y: Xi(K.y, `${y}/position/y`)
          };
        })();
        return {
          op: "add_node",
          node_type: _,
          ...N === void 0 ? {} : { ref: N },
          ...$ === void 0 ? {} : { params: $ },
          ...z === void 0 ? {} : { position: z }
        };
      }
      case "set_params": {
        const _ = nn(b.node_id, `${y}/node_id`, d.scrubber), N = v.get(_) ?? f.get(_), R = v.has(_) ? `variant:${r}:ref:${_}` : `node:${_}`;
        return {
          op: "set_params",
          node_id: _,
          params: Xu(
            b.params,
            N,
            R,
            _,
            `${y}/params`,
            u,
            d
          )
        };
      }
      case "connect":
        return {
          op: "connect",
          source: nn(b.source, `${y}/source`, d.scrubber),
          source_handle: nn(
            b.source_handle,
            `${y}/source_handle`,
            d.scrubber,
            !0
          ),
          target: nn(b.target, `${y}/target`, d.scrubber),
          target_handle: nn(
            b.target_handle,
            `${y}/target_handle`,
            d.scrubber,
            !0
          )
        };
      case "remove_node": {
        const _ = nn(b.node_id, `${y}/node_id`, d.scrubber);
        return v.delete(_), f.delete(_), { op: "remove_node", node_id: _ };
      }
      case "remove_edge":
        return {
          op: "remove_edge",
          source: nn(b.source, `${y}/source`, d.scrubber),
          target: nn(b.target, `${y}/target`, d.scrubber),
          ...b.source_handle === void 0 ? {} : {
            source_handle: nn(
              b.source_handle,
              `${y}/source_handle`,
              d.scrubber,
              !0
            )
          },
          ...b.target_handle === void 0 ? {} : {
            target_handle: nn(
              b.target_handle,
              `${y}/target_handle`,
              d.scrubber,
              !0
            )
          }
        };
      case "clear_graph":
        return f.clear(), v.clear(), { op: "clear_graph" };
      case "auto_layout":
        return { op: "auto_layout" };
      default:
        return Me(`${y}/op`, `unsupported graph operation '${String(b.op)}'`);
    }
  });
}
function z1(a, r) {
  var l;
  return ((l = a.id) == null ? void 0 : l.trim()) || `variant-${r + 1}`;
}
function R1(a) {
  Array.isArray(a.request.variants) || Me("request.variants", "expected an array"), Array.isArray(a.session.variants) || Me("session.variants", "expected an array"), (a.request.repetitions ?? 1) !== a.session.repetitions && Me("request.repetitions", "does not match the completed session"), (a.request.objective.metric !== a.session.objective.metric || a.request.objective.direction !== a.session.objective.direction) && Me("request.objective", "does not match the completed session"), a.request.hypothesis.trim() !== a.session.hypothesis && Me("request.hypothesis", "does not match the completed session"), a.request.variants.length !== a.session.variants.length && Me("request.variants", "does not match the completed session variant count"), a.request.variants.forEach((l, s) => {
    const u = a.session.variants[s];
    z1(l, s) !== (u == null ? void 0 : u.id) && Me(`request.variants[${s}].id`, "does not match the completed session variant id"), l.label.trim() !== u.label && Me(`request.variants[${s}].label`, "does not match the completed session variant label");
  });
}
function U1(a, r, l) {
  return {
    ...a,
    id: l.semantic(a.id, `/derived/variants/${r}/id`),
    label: l.text(a.label, `/derived/variants/${r}/label`),
    ...a.metricKey === void 0 ? {} : { metricKey: l.semantic(a.metricKey, `/derived/variants/${r}/metricKey`) },
    metricValues: [...a.metricValues],
    observedMetrics: Object.fromEntries(Object.entries(a.observedMetrics).map(([s, u]) => [
      l.semantic(s, `/derived/variants/${r}/observedMetrics/${vl(s)}`),
      u
    ])),
    ...a.runs === void 0 ? {} : {
      runs: a.runs.map((s) => ({
        ...s,
        observedMetrics: { ...s.observedMetrics }
      }))
    },
    ...a.operationSummary === void 0 ? {} : {
      operationSummary: a.operationSummary.map((s, u) => l.text(s, `/derived/variants/${r}/operationSummary/${u}`))
    },
    errors: a.errors.map((s, u) => l.text(s, `/derived/variants/${r}/errors/${u}`))
  };
}
function L1(a, r) {
  const l = a.variants.map((u, d) => U1(u, d, r)), s = new Map(l.map((u) => [u.id, u]));
  return {
    ...a,
    id: r.semantic(a.id, "/id"),
    hypothesis: r.text(a.hypothesis, "/spec/hypothesis"),
    objective: {
      ...a.objective,
      metric: r.semantic(a.objective.metric, "/spec/objective/metric")
    },
    variants: l,
    ...a.search === void 0 ? {} : { search: a.search },
    ...a.winnerLabel === void 0 ? {} : {
      winnerLabel: (() => {
        const u = r.text(a.winnerLabel, "/derived/winnerLabel");
        return a.winnerId && s.has(a.winnerId) ? s.get(a.winnerId).label : u;
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
function B1(a, r, l) {
  if (!(a.metricKey === void 0 && a.metricValue === void 0))
    return (typeof a.metricKey != "string" || a.metricKey.length === 0 || typeof a.metricValue != "number" || !Number.isFinite(a.metricValue)) && Me("session.variants[].runs[].metric", "metricKey and finite metricValue must be provided together"), {
      // Older run records retained only the canonical identity. Calling that
      // stored identity the observed key is explicit client-side evidence, not
      // a guessed node/port identity.
      observedKey: r.semantic(a.metricKey, `${l}/observedKey`),
      canonicalKey: r.semantic(a.metricKey, `${l}/canonicalKey`),
      value: a.metricValue,
      source: a.metricSource ?? "client"
    };
}
function V1(a, r) {
  const l = [], s = /* @__PURE__ */ new Set();
  return a.variants.forEach((u, d) => {
    var f;
    (f = u.runs) == null || f.forEach((v, m) => {
      var x, H;
      const g = `${u.id}\0${v.repetition}`;
      s.has(g) && Me(`session.variants[${d}].runs[${m}]`, "duplicate variant/repetition run slot"), s.add(g);
      const y = [], b = /* @__PURE__ */ new Set(), _ = B1(v, r, `/runs/${l.length}/metrics/0`);
      _ && (b.add(_.observedKey), y.push(_));
      for (const [$, z] of Object.entries(v.observedMetrics)) {
        if (!Number.isFinite(z)) continue;
        const K = ((x = v.observedMetricIdentities) == null ? void 0 : x[$]) ?? ($ === "system.runtime_ms" ? "system.runtime_ms" : void 0), ae = ((H = v.observedMetricSources) == null ? void 0 : H[$]) ?? ($ === "system.runtime_ms" ? "client" : void 0);
        if (!K || !ae) continue;
        const X = `/runs/${l.length}/metrics/${y.length}`, ne = r.semantic($, `${X}/observedKey`), G = r.semantic(K, `${X}/canonicalKey`);
        b.has(ne) || (b.add(ne), y.push({ observedKey: ne, canonicalKey: G, value: z, source: ae }));
      }
      const N = Number.isFinite(v.observedMetrics["system.runtime_ms"]) ? v.observedMetrics["system.runtime_ms"] : v.durationMs;
      Number.isFinite(N) && !b.has("system.runtime_ms") && y.push({
        observedKey: "system.runtime_ms",
        canonicalKey: "system.runtime_ms",
        value: N,
        source: "client"
      });
      const R = `/runs/${l.length}/error/message`;
      l.push({
        runKey: `${u.id}:rep:${v.repetition}`,
        variantId: u.id,
        repetition: v.repetition,
        status: v.status,
        durationMs: v.durationMs,
        metrics: y,
        ...v.status === "failed" ? {
          error: {
            phase: "execute",
            code: "EXPERIMENT_RUN_FAILED",
            message: r.text(
              v.error ?? "No error message was recorded by the experiment runtime.",
              R
            )
          }
        } : {}
      });
    });
  }), l;
}
function H1(a, r, l) {
  const s = (a.provenanceFacts ?? []).map((u, d) => {
    const f = `/provenance/facts/${d}`;
    return {
      key: r.text(Lt(u.key, `${f}/key`), `${f}/key`),
      status: u.status,
      source: r.text(Lt(u.source, `${f}/source`), `${f}/source`),
      ...u.collectedAt === void 0 ? {} : { collectedAt: u.collectedAt },
      ...u.value === void 0 ? {} : { value: eo(u.value, `${f}/value`, r, l) }
    };
  });
  return a.request.search !== void 0 && (s.some((u) => u.key === "optimizer.plan") && Me("provenanceFacts", "'optimizer.plan' is reserved for the captured experiment request"), s.push({
    key: "optimizer.plan",
    status: "observed",
    source: "graph-experiment request",
    value: eo(
      a.request.search,
      `/provenance/facts/${s.length}/value`,
      r,
      l
    )
  })), s.some((u) => u.key === "redaction.arbitrary_string_secret_detection") && Me(
    "provenanceFacts",
    "'redaction.arbitrary_string_secret_detection' is reserved for the capture limitation"
  ), s.push({
    key: "redaction.arbitrary_string_secret_detection",
    status: "unavailable",
    source: "schema-guided capture cannot detect arbitrary secrets embedded in ordinary strings"
  }), s;
}
async function G1(a) {
  R1(a);
  const r = x1(a.definitions), l = N1(a, r), s = new w1(), u = new $1(l, s), d = new D1(), f = { secrets: d, scrubber: u, stack: /* @__PURE__ */ new WeakSet() }, v = C1(a.baseline, r, f), m = Wg(a.baseline.nodes), g = L1(a.session, u), y = a.request.variants.map((R, x) => ({
    id: g.variants[x].id,
    label: u.text(a.session.variants[x].label, `/spec/variants/${x}/label`),
    operations: O1(
      R.operations,
      g.variants[x].id,
      x,
      m,
      r,
      f
    )
  }));
  if (g.variants.forEach((R, x) => {
    R.label = y[x].label;
  }), g.winnerId !== void 0) {
    const R = g.variants.find((x) => x.id === g.winnerId);
    R && (g.winnerLabel = R.label);
  }
  const b = V1(a.session, u), _ = H1(a, u, s), N = {
    policy: "explicit-secret-ref-v1",
    secretRequirements: d.report(),
    textRedactions: s.report()
  };
  return g1({
    session: g,
    completedAt: a.completedAt,
    producer: {
      pluginId: a.pluginId ?? y1,
      pluginVersion: a.pluginVersion,
      codefyuiApiVersion: a.codefyuiApiVersion
    },
    provenance: { facts: _ },
    baseline: v,
    variants: y,
    runs: b,
    redactionReport: N,
    concurrency: a.request.concurrency ?? 1,
    applyBestRequested: a.request.apply_best ?? !1
  });
}
const to = "graph-copilot.study-index.v1", q1 = "graph-copilot.study.sha256.", hd = "codefyui.graph-copilot.study-index", gd = 1, ey = 10, I1 = 512 * 1024, ty = 256, K1 = 32 * 1024, Kh = 4, ny = /^[a-f0-9]{64}$/, k1 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, Y1 = "graph-copilot.study-index.v1.lock";
class ut extends Error {
  constructor(l, s, u) {
    super(s);
    tn(this, "code");
    tn(this, "causeValue");
    this.name = "StudyStorageError", this.code = l, this.causeValue = u;
  }
}
function ay(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function iy(a, r) {
  const l = Object.keys(a);
  return l.length === r.length && l.every((s) => r.includes(s));
}
function X1(a) {
  return typeof a == "string" && k1.test(a) && !Number.isNaN(Date.parse(a)) && new Date(a).toISOString() === a;
}
function ry(a) {
  return typeof a == "string" && a.length > 0 && a.length <= ty && a === a.trim() && !/[\u0000-\u001f\u007f]/.test(a);
}
function Q1(a) {
  if (!ry(a))
    throw new ut(
      "INVALID_ID",
      `Study id must be a non-empty, trimmed string of at most ${ty} characters`
    );
}
function Z1(a) {
  return !ay(a) || !iy(a, ["id", "digest", "createdAt", "hypothesis", "kind"]) || !ry(a.id) || typeof a.digest != "string" || !ny.test(a.digest) || !X1(a.createdAt) || typeof a.hypothesis != "string" || !a.hypothesis.trim() || a.hypothesis.length > K1 || a.hypothesis.includes("\0") || a.kind !== "portable" ? null : Object.freeze({
    id: a.id,
    digest: a.digest,
    createdAt: a.createdAt,
    hypothesis: a.hypothesis,
    kind: "portable"
  });
}
function co(a, r) {
  return r.createdAt.localeCompare(a.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function J1(a, r) {
  return a.createdAt.localeCompare(r.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function ly(a) {
  return Object.freeze({
    format: hd,
    formatVersion: gd,
    entries: Object.freeze([...a].sort(co))
  });
}
const Fa = ly([]);
function uo(a) {
  if (!a || a.length > I1) return Fa;
  let r;
  try {
    r = JSON.parse(a);
  } catch {
    return Fa;
  }
  if (!ay(r) || !iy(r, ["format", "formatVersion", "entries"]) || r.format !== hd || r.formatVersion !== gd || !Array.isArray(r.entries)) return Fa;
  const l = r.entries.map(Z1).filter((f) => f !== null), s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const f of l)
    s.set(f.id, (s.get(f.id) ?? 0) + 1), u.set(f.digest, (u.get(f.digest) ?? 0) + 1);
  const d = l.filter((f) => s.get(f.id) === 1 && u.get(f.digest) === 1);
  return ly(d.sort(co).slice(0, ey));
}
function yd(a) {
  return JSON.stringify({
    format: hd,
    formatVersion: gd,
    entries: [...a].sort(co)
  });
}
function kh(a) {
  if (a === null) return Fa;
  const r = uo(a);
  if (a !== yd(r.entries))
    throw new ut(
      "INDEX_READ_FAILED",
      "Portable study index is malformed or non-canonical; mutation was aborted without changing storage"
    );
  return r;
}
function Zi(a) {
  try {
    return a.storage.get(to);
  } catch (r) {
    throw new ut("INDEX_READ_FAILED", "Could not read the portable study index", r);
  }
}
function sy(a, r) {
  try {
    return a.storage.remove(r), !0;
  } catch {
    return !1;
  }
}
const Bs = /* @__PURE__ */ new Map();
function F1() {
  if (typeof navigator > "u") return null;
  const a = navigator.locks;
  return !a || typeof a.request != "function" ? null : a;
}
function oy(a, r) {
  const l = F1();
  if (l === null)
    return Promise.reject(new ut(
      "LOCK_UNAVAILABLE",
      "Cross-tab storage mutations require browser Web Locks; this environment remains read-only"
    ));
  const s = Bs.get(a) ?? Promise.resolve();
  let u;
  const d = new Promise((f) => {
    u = f;
  });
  return Bs.set(a, d), s.catch(() => {
  }).then(() => l.request(a, { mode: "exclusive" }, r)).finally(() => {
    u(), Bs.get(a) === d && Bs.delete(a);
  });
}
function W1(a) {
  return oy(Y1, a);
}
function P1(a, r, l) {
  if (Zi(a) !== r) return !1;
  try {
    a.storage.set(to, l);
  } catch (s) {
    let u;
    try {
      u = a.storage.get(to);
    } catch {
      u = void 0;
    }
    if (u === l) return !0;
    throw new ut(
      "INDEX_WRITE_FAILED",
      u === r ? "Portable study index write failed before changing the index" : "Portable study index write failed and the resulting index was left untouched to avoid overwriting a concurrent update",
      s
    );
  }
  return Zi(a) === l;
}
function eS(a, r) {
  try {
    const l = Zi(a), s = uo(l);
    return s.entries.some((u) => u.digest === r) ? !0 : l !== null && l !== yd(s.entries);
  } catch {
    return !0;
  }
}
function Yh(a, r) {
  return eS(a, r) ? !0 : sy(a, vd(r));
}
function vd(a) {
  if (!ny.test(a))
    throw new ut("BUNDLE_TAMPERED", "Study digest is not a lowercase SHA-256 value");
  return `${q1}${a}`;
}
async function tS(a) {
  return md(a);
}
function nS(a) {
  try {
    return uo(a.storage.get(to));
  } catch {
    return Fa;
  }
}
async function cy(a, r) {
  const l = await pd(r), s = await md(l), u = Object.freeze({
    id: s.payload.id,
    digest: s.integrity.contentSha256,
    createdAt: s.payload.createdAt,
    hypothesis: s.payload.spec.hypothesis,
    kind: "portable"
  });
  return W1(async () => {
    const d = Zi(a), v = kh(d).entries.find((b) => b.id === u.id);
    if (v && v.digest !== u.digest)
      throw new ut(
        "ID_CONFLICT",
        `Study '${u.id}' already exists with different content; fork it to a new id before saving`
      );
    const m = vd(u.digest);
    let g;
    try {
      g = a.storage.get(m);
    } catch (b) {
      throw new ut("BUNDLE_READ_FAILED", `Could not inspect study blob ${u.digest}`, b);
    }
    if (g !== null && g !== l)
      throw new ut(
        "BUNDLE_KEY_CONFLICT",
        `Content-addressed study blob ${u.digest} already contains different bytes`
      );
    if (v && g === l)
      return Object.freeze({
        status: "unchanged",
        entry: v,
        cleanupFailures: Object.freeze([])
      });
    const y = g === null;
    if (y) {
      try {
        a.storage.set(m, l);
      } catch (b) {
        let _;
        try {
          _ = a.storage.get(m);
        } catch {
          _ = void 0;
        }
        if (_ === l)
          g = _;
        else
          throw _ !== void 0 && sy(a, m), new ut(
            "BUNDLE_WRITE_FAILED",
            `Could not store portable study blob ${u.digest}`,
            b
          );
      }
      if (g !== null && g !== l)
        throw new ut(
          "BUNDLE_KEY_CONFLICT",
          `Content-addressed study blob ${u.digest} changed during the write`
        );
    }
    try {
      for (let b = 0; b < Kh; b += 1) {
        const _ = Zi(a), N = kh(_), R = N.entries.find((X) => X.id === u.id);
        if (R) {
          if (R.digest !== u.digest)
            throw new ut(
              "ID_CONFLICT",
              `Study '${u.id}' already exists with different content; fork it to a new id before saving`
            );
          return Object.freeze({
            status: y ? "saved" : "unchanged",
            entry: R,
            cleanupFailures: Object.freeze([])
          });
        }
        const x = [...N.entries, u], H = [...N.entries].sort(J1).slice(0, Math.max(0, x.length - ey)), $ = new Set(H.map((X) => X.digest)), z = x.filter((X) => !$.has(X.digest)).sort(co), K = yd(z);
        if (!P1(a, _, K)) continue;
        const ae = [];
        for (const X of H)
          Yh(a, X.digest) || ae.push(X.digest);
        return Object.freeze({
          status: "saved",
          entry: u,
          cleanupFailures: Object.freeze(ae)
        });
      }
      throw new ut(
        "INDEX_WRITE_FAILED",
        `Portable study index changed during ${Kh} consecutive commit attempts`
      );
    } catch (b) {
      throw y && Yh(a, u.digest), b;
    }
  });
}
async function Xh(a, r) {
  Q1(r);
  const s = uo(Zi(a)).entries.find((f) => f.id === r);
  if (!s)
    throw new ut("STUDY_NOT_FOUND", `Portable study '${r}' is not indexed`);
  const u = vd(s.digest);
  let d;
  try {
    d = a.storage.get(u);
  } catch (f) {
    throw new ut("BUNDLE_READ_FAILED", `Could not read portable study '${r}'`, f);
  }
  if (d === null)
    throw new ut("BUNDLE_MISSING", `Portable study '${r}' is indexed but its blob is missing`);
  try {
    const f = await md(d), v = await pd(f);
    if (f.payload.id !== s.id || f.integrity.contentSha256 !== s.digest || v !== d)
      throw new ut(
        "BUNDLE_TAMPERED",
        `Portable study '${r}' does not match its content-addressed index entry`
      );
    return f;
  } catch (f) {
    if (f instanceof ut) throw f;
    const v = f instanceof cn ? ` (${f.code})` : "";
    throw new ut(
      "BUNDLE_TAMPERED",
      `Portable study '${r}' failed integrity verification${v}`,
      f
    );
  }
}
const bd = "experiment-sessions-v1", Qu = "gcp:experiments-changed", Qh = 8, no = 16, aS = 20, iS = 600 * 1e3, rS = "graph-copilot.experiment-sessions-v1.lock";
class Ks extends Error {
  constructor(l, s) {
    super(l.message);
    tn(this, "observation");
    this.name = l.name, this.observation = s;
  }
}
function fl(a) {
  return a === void 0 ? a : JSON.parse(JSON.stringify(a));
}
function lS(a) {
  const r = String(a);
  return a instanceof ut && a.causeValue !== void 0 ? `${r}: ${String(a.causeValue)}` : r;
}
function pl(a) {
  const r = typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${a}-${r}`;
}
function uy(a) {
  return typeof a == "number" && Number.isFinite(a) ? a : void 0;
}
function ao(a) {
  if (a.length !== 0)
    return a.reduce((r, l) => r + l, 0) / a.length;
}
function sS(a) {
  if (a.length < 2) return;
  const r = ao(a);
  return Math.sqrt(a.reduce((l, s) => l + (s - r) ** 2, 0) / (a.length - 1));
}
function Zh(a) {
  return JSON.stringify({
    nodes: a.nodes,
    edges: a.edges,
    presets: a.presets ?? []
  });
}
function dy(a) {
  const r = a.nodes.filter((s) => s.type !== "note"), l = new Set(r.map((s) => s.id));
  return {
    ...a,
    nodes: r,
    edges: a.edges.filter((s) => typeof s.source == "string" && typeof s.target == "string" && l.has(s.source) && l.has(s.target))
  };
}
function oS(a) {
  return Object.fromEntries(a.params.map((r) => [r.name, fl(r.default)]));
}
function cS(a, r) {
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
function Jh(a, r) {
  if (!r || typeof r != "object" || Array.isArray(r))
    return "params must be an object";
  const l = new Map(a.params.map((s) => [s.name, s]));
  for (const [s, u] of Object.entries(r)) {
    const d = l.get(s);
    if (!d)
      return `Unknown parameter '${s}' for node type '${a.node_name}'`;
    const f = cS(d, u);
    if (f) return f;
  }
}
function uS(a) {
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
function Fh(a, r, l) {
  const s = fl(a), u = {}, d = [], f = new Map(l.map((g) => [g.node_name, g])), v = (g) => {
    const y = u[g] ?? g;
    return s.nodes.some((b) => b.id === y) ? y : void 0;
  }, m = (g, y) => d.push({ index: g, ok: !1, error: y });
  return r.forEach((g, y) => {
    var b;
    if (!g || typeof g != "object" || typeof g.op != "string") {
      m(y, "Operation must be an object with an op field");
      return;
    }
    switch (g.op) {
      case "add_node": {
        const _ = f.get(g.node_type);
        if (!_) {
          m(y, `Unknown node type '${g.node_type}'`);
          return;
        }
        if (g.params !== void 0) {
          const x = Jh(_, g.params);
          if (x) {
            m(y, `add_node: ${x}`);
            return;
          }
        }
        const N = pl("candidate-node"), R = {
          id: N,
          type: g.node_type,
          position: g.position ?? {
            x: 160 + s.nodes.length % 4 * 240,
            y: 120 + Math.floor(s.nodes.length / 4) * 160
          },
          data: { params: { ...oS(_), ...g.params ?? {} } }
        };
        s.nodes.push(R), g.ref && (u[g.ref] = N), d.push({ index: y, ok: !0, node_id: N });
        return;
      }
      case "set_params": {
        const _ = v(g.node_id);
        if (!_) {
          m(y, `set_params: unknown node '${g.node_id}'`);
          return;
        }
        const N = s.nodes.find((H) => H.id === _), R = typeof N.type == "string" ? f.get(N.type) : void 0;
        if (!R) {
          m(y, `set_params: node '${g.node_id}' has no known definition`);
          return;
        }
        const x = Jh(R, g.params);
        if (x) {
          m(y, `set_params: ${x}`);
          return;
        }
        N.data = {
          ...N.data ?? {},
          params: { ...((b = N.data) == null ? void 0 : b.params) ?? {}, ...fl(g.params) }
        }, d.push({ index: y, ok: !0, node_id: _ });
        return;
      }
      case "connect": {
        const _ = v(g.source), N = v(g.target);
        if (!_ || !N) {
          m(y, `connect: unknown ${_ ? "target" : "source"} node`);
          return;
        }
        const R = g.source_handle === "trigger", x = {
          id: pl("candidate-edge"),
          source: _,
          target: N,
          sourceHandle: g.source_handle,
          targetHandle: R ? "__trigger" : g.target_handle,
          ...R ? { type: "trigger" } : {}
        };
        s.edges.push(x), d.push({ index: y, ok: !0 });
        return;
      }
      case "remove_node": {
        const _ = v(g.node_id);
        if (!_) {
          m(y, `remove_node: unknown node '${g.node_id}'`);
          return;
        }
        s.nodes = s.nodes.filter((N) => N.id !== _), s.edges = s.edges.filter((N) => N.source !== _ && N.target !== _), d.push({ index: y, ok: !0 });
        return;
      }
      case "remove_edge": {
        const _ = v(g.source), N = v(g.target);
        if (!_ || !N) {
          m(y, "remove_edge: unknown source or target node");
          return;
        }
        const R = s.edges.length;
        s.edges = s.edges.filter((x) => !(x.source === _ && x.target === N && (g.source_handle === void 0 || x.sourceHandle === g.source_handle) && (g.target_handle === void 0 || x.targetHandle === g.target_handle))), R === s.edges.length ? m(y, "remove_edge: no matching edge") : d.push({ index: y, ok: !0 });
        return;
      }
      case "clear_graph":
        s.nodes = [], s.edges = [], Object.keys(u).forEach((_) => delete u[_]), d.push({ index: y, ok: !0 });
        return;
      case "auto_layout":
        s.nodes.forEach((_, N) => {
          _.position = {
            x: 120 + N % 4 * 260,
            y: 100 + Math.floor(N / 4) * 180
          };
        }), d.push({ index: y, ok: !0 });
        return;
      default:
        m(y, `Unknown operation '${g.op ?? ""}'`);
    }
  }), { graph: s, results: d, refs: u };
}
async function dS(a, r, l) {
  try {
    const s = dy(r), u = await a.http.fetch("/api/graph/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: l,
      body: JSON.stringify({
        nodes: s.nodes,
        edges: s.edges,
        presets: s.presets ?? []
      })
    });
    if (!u.ok) return [`Validation request failed: HTTP ${u.status}`];
    const d = await u.json(), f = Array.isArray(d.errors) ? d.errors.map(String) : [];
    return d.valid !== !0 ? f.length > 0 ? f : ["Graph validation returned an invalid or malformed result"] : f.length === 0 ? [] : ["Graph validation returned valid=true together with errors", ...f];
  } catch (s) {
    if (l != null && l.aborted) throw new DOMException("Experiment cancelled", "AbortError");
    return [`Validation request failed: ${String(s)}`];
  }
}
async function fS(a, r) {
  const l = await a.http.fetch("/api/auth/bootstrap", { signal: r });
  if (!l.ok) throw new Error(`Execution auth bootstrap failed: HTTP ${l.status}`);
  const s = await l.json();
  if (typeof s.token != "string" || !s.token)
    throw new Error("Execution auth bootstrap returned no token");
  return s.token;
}
function pS(a) {
  const r = window.location.protocol === "https:" ? "wss:" : "ws:", l = new URL(`${r}//${window.location.host}/ws/execution`);
  return l.searchParams.set("token", a), l.toString();
}
function Wh(a, r) {
  let l = a;
  const s = [.../* @__PURE__ */ new Set([r, encodeURIComponent(r)])].filter((u) => u.length > 0).sort((u, d) => d.length - u.length);
  for (const u of s) l = l.split(u).join("[REDACTED]");
  return l;
}
function mS(a, r, l, s, u, d) {
  if (!l || typeof l != "object") return;
  const f = a.nodes.find((m) => m.id === r), v = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(l)) {
    if (!g || typeof g != "object") continue;
    const y = uy(g.value);
    if (y === void 0) continue;
    const b = `${r}.${m}`, _ = f != null && f.type && v === 1 ? `${f.type}.${m}` : b;
    s[b] = y, u[b] = _, d[b] = "output_summary", f != null && f.type && v === 1 && (s[_] = y, u[_] = _, d[_] = "output_summary");
  }
}
function hS(a, r, l, s, u, d) {
  if (!l || typeof l != "object") return;
  const f = a.nodes.find((m) => m.id === r), v = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(l)) {
    const y = uy(g);
    if (y === void 0) continue;
    const b = `${r}.progress.${m}`, _ = f != null && f.type && v === 1 ? `${f.type}.progress.${m}` : b;
    s[b] = y, u[b] = _, d[b] = "progress", f != null && f.type && v === 1 && (s[_] = y, u[_] = _, d[_] = "progress");
  }
}
function gS(a, r, l, s = iS) {
  const u = dy(a), d = Date.now();
  return new Promise((f, v) => {
    const m = new WebSocket(pS(r)), g = {}, y = {}, b = {};
    let _ = !1;
    const N = (H) => {
      if (_) return;
      _ = !0, clearTimeout(x), l == null || l.removeEventListener("abort", R), (m.readyState === WebSocket.OPEN || m.readyState === WebSocket.CONNECTING) && m.close();
      const $ = Date.now() - d;
      g["system.runtime_ms"] = $, y["system.runtime_ms"] = "system.runtime_ms", b["system.runtime_ms"] = "client";
      const z = { metrics: g, metricIdentities: y, metricSources: b, durationMs: $ };
      H ? H instanceof DOMException && H.name === "AbortError" ? v(H) : v(new Ks(H, z)) : f(z);
    }, R = () => N(new DOMException("Experiment cancelled", "AbortError")), x = setTimeout(
      () => N(new Error(`Experiment run timed out after ${Math.round(s / 1e3)}s`)),
      s
    );
    if (l == null || l.addEventListener("abort", R, { once: !0 }), l != null && l.aborted) {
      R();
      return;
    }
    m.onopen = () => {
      m.send(JSON.stringify({
        action: "execute",
        nodes: u.nodes,
        edges: u.edges,
        presets: u.presets ?? [],
        run_id: pl("gcp-experiment-run"),
        // Scalar summaries arrive on node_status regardless. Avoid retaining
        // full tensors for every candidate in CodefyUI's in-memory run store.
        record_outputs: !1,
        graph_id: pl("gcp-experiment-graph"),
        weights_persistent: !1
      }));
    }, m.onmessage = (H) => {
      let $;
      try {
        $ = JSON.parse(String(H.data));
      } catch {
        return;
      }
      const z = String($.type ?? "");
      if (z === "node_status") {
        const K = String($.node_id ?? "");
        mS(u, K, $.output_summary, g, y, b), hS(u, K, $.progress, g, y, b);
      } else z === "execution_complete" ? N() : (z === "execution_error" || z === "execution_stopped" || z === "error") && N(new Error(String($.error ?? z)));
    }, m.onerror = () => N(new Error("Experiment execution WebSocket failed")), m.onclose = () => {
      _ || N(new Error("Experiment execution WebSocket closed before completion"));
    };
  }).catch((f) => {
    if (f instanceof DOMException && f.name === "AbortError") throw f;
    if (f instanceof Ks) {
      const m = new Error(Wh(f.message, r));
      throw m.name = f.name, new Ks(m, f.observation);
    }
    const v = f instanceof Error ? f.message : String(f);
    throw new Error(Wh(v, r));
  });
}
function Zu(a) {
  return a.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
}
function Ph(a, r, l = {}) {
  const s = Object.entries(a).filter(([, y]) => Number.isFinite(y));
  if (s.length === 0) return;
  const u = (y) => ({
    key: l[y[0]] ?? y[0],
    value: y[1],
    observedKey: y[0]
  }), d = (y) => new Set(y.map(([_]) => l[_] ?? _)).size === 1 && y.length > 0 ? u(y[0]) : void 0, f = r.metric.trim(), v = s.find(([y]) => y === f) ?? s.find(([y]) => y.toLowerCase() === f.toLowerCase());
  if (v) return u(v);
  if (f && f.toLowerCase() !== "auto") {
    const y = Zu(f), b = s.filter(([_]) => {
      const N = Zu(_);
      return N === y || N.endsWith(`.${y}`);
    });
    return d(b);
  }
  const m = r.direction === "maximize" ? /(^|\.)(accuracy|f1|f1_score|reward|score|r2|auc|precision|recall)$/i : /(^|\.)(val_loss|loss|error|mae|mse|rmse)$/i, g = s.filter(([y]) => m.test(y));
  return g.length > 0 ? d(g) : r.direction === "minimize" ? d(s.filter(([y]) => /(^|\.)runtime_ms$/i.test(y))) : void 0;
}
async function eg(a, r, l) {
  const s = new Array(a.length);
  let u = 0;
  const d = Array.from({ length: Math.min(r, a.length) }, async () => {
    for (; u < a.length; ) {
      const f = u++;
      s[f] = await l(a[f], f);
    }
  });
  return await Promise.all(d), s;
}
function yS(a) {
  const r = /* @__PURE__ */ new Map();
  for (const l of a)
    for (const [s, u] of Object.entries(l.metrics))
      r.has(s) || r.set(s, []), r.get(s).push(u);
  return Object.fromEntries(
    [...r.entries()].sort(([l], [s]) => l.localeCompare(s)).slice(0, 40).map(([l, s]) => [l, ao(s)])
  );
}
function vS(a) {
  const r = a.variants.filter((u) => u.operations.length === 0).length, l = a.variants.filter((u) => u.operations.length > 0);
  if (r !== 1 || l.length === 0) return;
  let s;
  for (const u of l) {
    if (u.operations.length !== 1) return;
    const d = u.operations[0];
    if (d.op !== "set_params") return;
    const f = Object.keys(d.params);
    if (f.length !== 1) return;
    const v = `${d.node_id}.${f[0]}`;
    if (s && s !== v) return;
    s = v;
  }
  return s;
}
function bS(a, r, l, s = []) {
  const u = [], d = [], f = [], v = vS(a);
  if (s.length > 1)
    u.push(
      `No unique winner: ${s.map((y) => y.label).join(", ")} tied at ${s[0].mean.toPrecision(6)}.`
    ), d.push("Automatic promotion was skipped because the top observed means were tied.");
  else if ((l == null ? void 0 : l.mean) !== void 0) {
    if (u.push(
      `${l.label} has the top observed mean at ${l.mean.toPrecision(6)} (${a.objective.direction} ${l.metricKey ?? a.objective.metric}).`
    ), l.confidenceInterval95 && u.push(
      `Its descriptive 95% Student-t interval is [${l.confidenceInterval95.lower.toPrecision(5)}, ${l.confidenceInterval95.upper.toPrecision(5)}].`
    ), l.baselineComparison) {
      const b = l.baselineComparison.hedgesG === void 0 ? "" : `; Hedges g=${l.baselineComparison.hedgesG.toPrecision(4)}`;
      u.push(
        `Versus baseline, the direction-adjusted mean change is ${l.baselineComparison.objectiveImprovement.toPrecision(5)}${b}.`
      );
    }
    const y = r.filter((b) => b.mean !== void 0).sort((b, _) => a.objective.direction === "maximize" ? _.mean - b.mean : b.mean - _.mean);
    if (y.length > 1) {
      const b = Math.abs(y[0].mean - y[1].mean);
      u.push(`The lead over the runner-up is ${b.toPrecision(4)}.`);
    }
    v ? f.push({
      title: `Controlled parameter study: ${v}`,
      evidence: `A one-factor pilot found the top observed mean for ${l.label} across ${a.repetitions ?? 1} repeated execution(s).`,
      nextStep: "Add an explicit seed schedule, report confidence intervals, and test on a held-out dataset."
    }) : f.push({
      title: `Replication study for ${a.objective.metric}`,
      evidence: `${l.label} has the top observed mean, but the variants are not proven to be a controlled one-factor ablation.`,
      nextStep: "Create a baseline and one-factor variants, add controlled seeds, then repeat on held-out data."
    });
  } else if (s.length === 0) {
    const y = r.some((b) => b.errors.some((_) => _.includes("cross-candidate ranking was refused")));
    d.push(y ? "Candidates exposed different objective metric identities, so no cross-candidate ranking was valid." : `No candidate exposed the requested numeric metric '${a.objective.metric}'.`);
  }
  (a.repetitions ?? 1) < 3 ? d.push("This is a pilot comparison, not paper-grade evidence; use at least 3-5 controlled independent seeds.") : d.push("Repetitions reused each candidate graph. Treat them as independent seeds only when the graph contains an explicit seed schedule."), r.some((y) => {
    var b;
    return y.confidenceInterval95 || ((b = y.baselineComparison) == null ? void 0 : b.hedgesG) !== void 0;
  }) && d.push(
    "Confidence intervals and Hedges g are descriptive screening statistics here; no hypothesis test, multiple-comparison correction, or causal claim was performed."
  );
  const m = r.filter((y) => y.status !== "completed");
  m.length > 0 && d.push(`${m.length} candidate(s) were invalid or failed during execution.`);
  const g = r.filter((y) => y.mean !== void 0 && y.stddev !== void 0 && Math.abs(y.mean) > 0 && y.stddev / Math.abs(y.mean) > 0.1);
  return g.length > 0 && (d.push(`High run-to-run variation detected for: ${g.map((y) => y.label).join(", ")}.`), f.push({
    title: "Sensitivity and stability analysis",
    evidence: "At least one candidate has a coefficient of variation above 10% in this pilot.",
    nextStep: "Increase repetitions and test whether initialization, data order, or hyperparameters explain the variance."
  })), { summary: u, warnings: d, paperIdeas: f };
}
function SS(a) {
  const { applyResult: r, appliedOperations: l, ...s } = a;
  return s;
}
function fy(a) {
  if (!a || typeof a != "object") return;
  const r = a;
  if (typeof r.id != "string" || typeof r.createdAt != "string" || typeof r.hypothesis != "string" || !r.objective || typeof r.objective.metric != "string" || !["maximize", "minimize"].includes(r.objective.direction) || typeof r.repetitions != "number" || !Number.isInteger(r.repetitions) || !Array.isArray(r.variants))
    return;
  const l = r.variants.filter((u) => !!u && typeof u == "object" && typeof u.id == "string" && typeof u.label == "string" && ["completed", "invalid", "failed"].includes(u.status) && Array.isArray(u.metricValues) && u.metricValues.every((d) => typeof d == "number" && Number.isFinite(d)) && (u.metricKey === void 0 || typeof u.metricKey == "string") && (u.mean === void 0 || typeof u.mean == "number" && Number.isFinite(u.mean)) && (u.stddev === void 0 || typeof u.stddev == "number" && Number.isFinite(u.stddev)) && (u.confidenceInterval95 === void 0 || u.confidenceInterval95.level === 0.95 && typeof u.confidenceInterval95.lower == "number" && Number.isFinite(u.confidenceInterval95.lower) && typeof u.confidenceInterval95.upper == "number" && Number.isFinite(u.confidenceInterval95.upper)) && (u.baselineComparison === void 0 || typeof u.baselineComparison.baselineId == "string" && typeof u.baselineComparison.meanDelta == "number" && Number.isFinite(u.baselineComparison.meanDelta) && typeof u.baselineComparison.objectiveImprovement == "number" && Number.isFinite(u.baselineComparison.objectiveImprovement) && (u.baselineComparison.hedgesG === void 0 || typeof u.baselineComparison.hedgesG == "number" && Number.isFinite(u.baselineComparison.hedgesG))) && typeof u.runtimeMs == "number" && Number.isFinite(u.runtimeMs) && !!u.observedMetrics && typeof u.observedMetrics == "object" && Array.isArray(u.errors) && u.errors.every((d) => typeof d == "string") && (u.runs === void 0 || Array.isArray(u.runs) && u.runs.every((d) => !!d && typeof d == "object" && Number.isInteger(d.repetition) && d.repetition >= 1 && ["completed", "failed"].includes(d.status) && typeof d.durationMs == "number" && Number.isFinite(d.durationMs) && (d.metricKey === void 0 || typeof d.metricKey == "string") && (d.metricValue === void 0 || typeof d.metricValue == "number" && Number.isFinite(d.metricValue)) && (d.metricSource === void 0 || ["output_summary", "progress", "client"].includes(d.metricSource)) && !!d.observedMetrics && typeof d.observedMetrics == "object" && Object.values(d.observedMetrics).every((f) => typeof f == "number" && Number.isFinite(f)) && (d.observedMetricIdentities === void 0 || !!d.observedMetricIdentities && typeof d.observedMetricIdentities == "object" && Object.values(d.observedMetricIdentities).every((f) => typeof f == "string") && Object.keys(d.observedMetricIdentities).every((f) => f in d.observedMetrics)) && (d.observedMetricSources === void 0 || !!d.observedMetricSources && typeof d.observedMetricSources == "object" && Object.values(d.observedMetricSources).every((f) => ["output_summary", "progress", "client"].includes(f)) && Object.keys(d.observedMetricSources).every((f) => f in d.observedMetrics)) && (d.error === void 0 || typeof d.error == "string"))) && (u.operationSummary === void 0 || Array.isArray(u.operationSummary) && u.operationSummary.every((d) => typeof d == "string"))), s = r.insights && typeof r.insights == "object" ? r.insights : { summary: [], warnings: [], paperIdeas: [] };
  return {
    ...r,
    status: ["completed", "partial", "failed"].includes(r.status ?? "") ? r.status : "failed",
    repetitions: r.repetitions,
    objective: r.objective,
    variants: l,
    baselineVariantId: typeof r.baselineVariantId == "string" ? r.baselineVariantId : void 0,
    search: Sd(r.search) ? r.search : void 0,
    insights: {
      summary: Array.isArray(s.summary) ? s.summary.filter((u) => typeof u == "string") : [],
      warnings: Array.isArray(s.warnings) ? s.warnings.filter((u) => typeof u == "string") : [],
      paperIdeas: Array.isArray(s.paperIdeas) ? s.paperIdeas.filter((u) => !!u && typeof u == "object" && typeof u.title == "string" && typeof u.evidence == "string" && typeof u.nextStep == "string") : []
    }
  };
}
function py(a) {
  try {
    const r = a.storage.get(bd);
    if (!r) return [];
    const l = JSON.parse(r);
    return Array.isArray(l) ? l.map(fy).filter((s) => !!s) : [];
  } catch {
    return [];
  }
}
function _S(a) {
  let r;
  try {
    r = a.storage.get(bd);
  } catch (u) {
    throw new Error(`Could not read the Experiment Lab archive before mutation: ${String(u)}`);
  }
  if (r === null) return [];
  let l;
  try {
    l = JSON.parse(r);
  } catch (u) {
    throw new Error(`Experiment Lab archive is malformed and remains read-only: ${String(u)}`);
  }
  if (!Array.isArray(l))
    throw new Error("Experiment Lab archive is malformed and remains read-only: expected an array");
  const s = l.map((u, d) => {
    const f = fy(u);
    if (!f)
      throw new Error(`Experiment Lab archive entry ${d} is invalid and cannot be safely rewritten`);
    return f;
  });
  if (new Set(s.map((u) => u.id)).size !== s.length)
    throw new Error("Experiment Lab archive contains duplicate study ids and cannot be safely rewritten");
  if (r !== JSON.stringify(s))
    throw new Error("Experiment Lab archive is non-canonical or contains lossy legacy data and remains read-only");
  return s;
}
async function my(a, r, l = {}) {
  await oy(rS, async () => {
    const s = _S(a);
    if (l.rejectIfExists && s.some((d) => d.id === r.id))
      throw new Error(
        `A local Experiment Lab report already uses study id '${r.id}'; import was refused to avoid overwriting local evidence.`
      );
    const u = [SS(r), ...s.filter((d) => d.id !== r.id)].slice(0, aS);
    a.storage.set(bd, JSON.stringify(u));
  }), typeof window < "u" && window.dispatchEvent(new Event(Qu));
}
function tg(a, r, l, s, u) {
  const d = lo(
    {
      id: `experiment-session:${l.id}`,
      name: "run_graph_experiments",
      arguments: r
    },
    JSON.stringify(l),
    a,
    [{ graph: s, definitions: u }]
  );
  return JSON.parse(d);
}
function ES(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return "operation must be an object";
  const r = a, l = (s) => typeof r[s] == "string" && r[s] !== "";
  switch (r.op) {
    case "add_node":
      return l("node_type") ? r.ref !== void 0 && typeof r.ref != "string" ? "add_node ref must be a string" : r.params !== void 0 && (!r.params || typeof r.params != "object" || Array.isArray(r.params)) ? "add_node params must be an object" : void 0 : "add_node requires node_type";
    case "set_params":
      return l("node_id") ? !r.params || typeof r.params != "object" || Array.isArray(r.params) ? "set_params params must be an object" : void 0 : "set_params requires node_id";
    case "connect":
      return l("source") && l("source_handle") && l("target") && typeof r.target_handle == "string" ? void 0 : "connect requires string source, source_handle, target, and target_handle";
    case "remove_node":
      return l("node_id") ? void 0 : "remove_node requires node_id";
    case "remove_edge":
      return !l("source") || !l("target") ? "remove_edge requires source and target" : r.source_handle !== void 0 && typeof r.source_handle != "string" ? "remove_edge source_handle must be a string" : r.target_handle !== void 0 && typeof r.target_handle != "string" ? "remove_edge target_handle must be a string" : void 0;
    case "clear_graph":
    case "auto_layout":
      return;
    default:
      return `unknown operation '${String(r.op ?? "")}'`;
  }
}
function Vs(a, r) {
  const l = new Set(r);
  return Object.keys(a).every((s) => l.has(s));
}
function Cu(a) {
  return typeof a == "boolean" || typeof a == "string" || typeof a == "number" && Number.isFinite(a);
}
function Sd(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = a;
  if (!Vs(r, [
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
  const l = [];
  for (const u of r.bindings) {
    if (!u || typeof u != "object" || Array.isArray(u)) return !1;
    const d = u;
    if (!Vs(d, [
      "nodeId",
      "nodeType",
      "param",
      "paramType",
      "baselineValue",
      "domain"
    ]) || typeof d.nodeId != "string" || typeof d.nodeType != "string" || typeof d.param != "string" || !["int", "float", "bool", "select"].includes(String(d.paramType)) || !Cu(d.baselineValue) || !Array.isArray(d.domain) || d.domain.length < 1 || d.domain.length > 32 || !d.domain.every(Cu)) return !1;
    l.push(`${d.nodeId}\0${d.param}`);
  }
  if (new Set(l).size !== l.length || !Array.isArray(r.assignments) || r.assignments.length > 8) return !1;
  const s = [];
  for (const u of r.assignments) {
    if (!u || typeof u != "object" || Array.isArray(u)) return !1;
    const d = u;
    if (!Vs(d, ["variantId", "domainIndex", "values"]) || typeof d.variantId != "string" || !Number.isInteger(d.domainIndex) || d.domainIndex < 0 || !Array.isArray(d.values) || d.values.length !== r.bindings.length) return !1;
    s.push(d.variantId);
    for (const f of d.values) {
      if (!f || typeof f != "object" || Array.isArray(f)) return !1;
      const v = f;
      if (!Vs(v, ["nodeId", "param", "value"]) || typeof v.nodeId != "string" || typeof v.param != "string" || !Cu(v.value)) return !1;
    }
  }
  return new Set(s).size === s.length && r.generatedCandidateCount === r.assignments.length;
}
function hy(a) {
  if (!a || typeof a != "object") throw new Error("Experiment request must be an object");
  if (typeof a.hypothesis != "string" || !a.hypothesis.trim())
    throw new Error("Experiment requires a hypothesis");
  if (!a.objective || typeof a.objective != "object" || typeof a.objective.metric != "string" || !a.objective.metric.trim())
    throw new Error("Experiment requires an objective metric");
  if (!["maximize", "minimize"].includes(a.objective.direction))
    throw new Error("Experiment objective direction must be maximize or minimize");
  if (!Array.isArray(a.variants) || a.variants.length === 0)
    throw new Error("Experiment requires at least one variant");
  if (a.variants.length > Qh)
    throw new Error(`Experiment supports at most ${Qh} variants`);
  const r = a.repetitions ?? 1;
  if (!Number.isInteger(r) || r < 1 || r > 5)
    throw new Error("Experiment repetitions must be an integer from 1 to 5");
  if (a.variants.length * r > no)
    throw new Error(`Experiment budget is capped at ${no} total runs`);
  const l = a.concurrency ?? 1;
  if (!Number.isInteger(l) || l < 1 || l > 2)
    throw new Error("Experiment concurrency must be an integer from 1 to 2");
  if (a.apply_best !== void 0 && typeof a.apply_best != "boolean")
    throw new Error("Experiment apply_best must be a boolean");
  if (a.search !== void 0 && !Sd(a.search))
    throw new Error("Experiment search metadata is malformed");
  const s = a.variants.map((u, d) => {
    var f;
    if (!u || typeof u != "object") throw new Error("Every experiment variant must be an object");
    if (u.id !== void 0 && typeof u.id != "string")
      throw new Error("Experiment variant ids must be strings");
    return ((f = u.id) == null ? void 0 : f.trim()) || `variant-${d + 1}`;
  });
  if (new Set(s).size !== s.length) throw new Error("Experiment variant ids must be unique");
  for (const u of a.variants) {
    if (typeof u.label != "string" || !u.label.trim())
      throw new Error("Every experiment variant requires a label");
    if (!Array.isArray(u.operations)) throw new Error("Every experiment variant requires an operations array");
    u.operations.forEach((d, f) => {
      const v = ES(d);
      if (v) throw new Error(`Invalid operation ${f} in variant '${u.label}': ${v}`);
    });
  }
  if (a.search && (a.search.totalVariantCount !== a.variants.length || a.search.totalExecutionCount !== a.variants.length * r || a.search.assignments.some((u) => !s.includes(u.variantId))))
    throw new Error("Experiment search metadata does not match the compiled variants or run count");
  return { repetitions: r, concurrency: l };
}
function xS(a) {
  const { repetitions: r } = hy(a);
  return a.variants.length * r;
}
async function AS(a, r, l, s = () => !1, u = () => {
}) {
  const { repetitions: d, concurrency: f } = hy(r), v = (/* @__PURE__ */ new Date()).toISOString(), m = fl(a.graph.getGraph()), g = Zh(m), y = a.graph.getNodeDefinitions(), b = r.variants.map((k, Q) => {
    var ee;
    const oe = {
      id: ((ee = k.id) == null ? void 0 : ee.trim()) || `variant-${Q + 1}`,
      label: k.label.trim(),
      operations: k.operations
    }, ye = Fh(m, oe.operations, y);
    return {
      input: oe,
      graph: ye.graph,
      preparationErrors: ye.results.filter((he) => !he.ok).map((he) => he.error ?? "operation failed"),
      validationErrors: []
    };
  });
  await eg(b, 2, async (k) => {
    k.preparationErrors.length === 0 && (k.validationErrors = await dS(a, k.graph, l));
  });
  const _ = b.filter((k) => k.preparationErrors.length === 0 && k.validationErrors.length === 0);
  let N = "";
  _.length > 0 && (N = await fS(a, l));
  const R = [];
  for (let k = 0; k < d; k += 1) {
    const Q = k % 2 === 0 ? _ : [..._].reverse(), oe = await eg(Q, f, async (ye) => {
      try {
        return {
          variantId: ye.input.id,
          repetition: k + 1,
          observation: await gS(ye.graph, N, l)
        };
      } catch (ee) {
        if (ee instanceof DOMException && ee.name === "AbortError") throw ee;
        return ee instanceof Ks ? {
          variantId: ye.input.id,
          repetition: k + 1,
          observation: {
            ...ee.observation,
            error: String(ee)
          }
        } : {
          variantId: ye.input.id,
          repetition: k + 1,
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
    R.push(...oe);
  }
  const x = b.map((k) => {
    var ie;
    const Q = R.filter((J) => J.variantId === k.input.id), oe = Q.map((J) => J.observation).filter((J) => !J.error), ye = oe.map((J) => Ph(J.metrics, r.objective, J.metricIdentities)).filter((J) => !!J), ee = [
      ...k.preparationErrors,
      ...k.validationErrors,
      ...Q.flatMap((J) => J.observation.error ? [J.observation.error] : [])
    ], he = new Set(ye.map((J) => J.key)), T = oe.length === d && ye.length === d && he.size === 1;
    k.preparationErrors.length === 0 && k.validationErrors.length === 0 && oe.length !== d && ee.push(`Only ${oe.length}/${d} repetitions completed successfully.`), oe.length > 0 && ye.length !== oe.length && ee.push(
      `Objective metric "${r.objective.metric}" was missing in ${oe.length - ye.length}/${oe.length} successful repetitions.`
    ), he.size > 1 && ee.push(`Objective metric resolved to inconsistent keys across repetitions: ${[...he].join(", ")}.`);
    const Y = ye.map((J) => J.value), O = T ? od(Y) : void 0;
    return {
      id: k.input.id,
      label: k.input.label,
      status: k.preparationErrors.length > 0 || k.validationErrors.length > 0 ? "invalid" : T ? "completed" : "failed",
      metricKey: he.size === 1 ? (ie = ye[0]) == null ? void 0 : ie.key : void 0,
      metricValues: Y,
      mean: T ? ao(Y) : void 0,
      stddev: T ? sS(Y) : void 0,
      confidenceInterval95: O ? {
        level: 0.95,
        lower: O.lower,
        upper: O.upper
      } : void 0,
      runtimeMs: ao(Q.map((J) => J.observation.durationMs)) ?? 0,
      observedMetrics: yS(Q.map((J) => J.observation)),
      runs: Q.map(({ repetition: J, observation: E }) => {
        const L = Ph(
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
      operationSummary: uS(k.input.operations),
      errors: ee
    };
  }), H = b.filter((k) => k.input.operations.length === 0);
  if (H.length === 1) {
    const k = x.find((Q) => Q.id === H[0].input.id);
    if ((k == null ? void 0 : k.status) === "completed")
      for (const Q of x) {
        if (Q.id === k.id || Q.status !== "completed") continue;
        const oe = ll(
          Q.metricValues,
          k.metricValues,
          r.objective.direction
        );
        oe && (Q.baselineComparison = {
          baselineId: k.id,
          meanDelta: oe.rawDelta,
          objectiveImprovement: oe.improvement,
          hedgesG: oe.hedgesG
        });
      }
  }
  if (new Set(
    x.filter((k) => k.status === "completed" && k.metricKey).map((k) => Zu(k.metricKey))
  ).size > 1) {
    const k = x.filter((Q) => Q.status === "completed" && Q.metricKey).map((Q) => `${Q.label}: ${Q.metricKey}`).join(", ");
    for (const Q of x)
      Q.status === "completed" && (Q.status = "failed", Q.metricValues = [], Q.mean = void 0, Q.stddev = void 0, Q.confidenceInterval95 = void 0, Q.baselineComparison = void 0, Q.errors.push(`Candidates resolved different objective metrics (${k}); cross-candidate ranking was refused.`));
  }
  const z = x.filter((k) => k.status === "completed" && k.mean !== void 0).sort((k, Q) => (r.objective.direction === "maximize" ? Q.mean - k.mean : k.mean - Q.mean) || k.id.localeCompare(Q.id)), K = z[0], ae = K ? Math.max(1, Math.abs(K.mean)) * Number.EPSILON * 8 : 0, X = K ? z.filter((k) => Math.abs(k.mean - K.mean) <= ae) : [], ne = X.length === 1 ? K : void 0, G = {
    id: pl("experiment"),
    createdAt: v,
    hypothesis: r.hypothesis.trim(),
    objective: r.objective,
    repetitions: d,
    status: z.length === 0 ? "failed" : x.every((k) => k.status === "completed") ? "completed" : "partial",
    variants: x,
    baselineVariantId: H.length === 1 ? H[0].input.id : void 0,
    search: r.search ? fl(r.search) : void 0,
    winnerId: ne == null ? void 0 : ne.id,
    winnerLabel: ne == null ? void 0 : ne.label,
    insights: bS({ ...r, repetitions: d }, x, ne, X)
  };
  if (l != null && l.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  if (r.apply_best && ne) {
    const k = b.find((ye) => ye.input.id === ne.id).input, Q = s(), oe = Zh(a.graph.getGraph()) !== g;
    if (u(), Q || oe)
      G.applyConflict = "The live graph changed while experiments were running; winner was not applied.";
    else if (k.operations.some((ye) => ye.op !== "set_params"))
      G.applyConflict = "Automatic promotion supports parameter-only winners; this structural winner remains a proposal for review.";
    else if (k.operations.length > 0) {
      if (l != null && l.aborted) throw new DOMException("Experiment cancelled", "AbortError");
      const ye = Fh(m, k.operations, y);
      if (ye.results.some((ee) => !ee.ok))
        G.applyConflict = `Winner promotion failed parameter preflight: ${ye.results.filter((ee) => !ee.ok).map((ee) => ee.error).join("; ")}`;
      else {
        try {
          G.applyResult = a.graph.applyOperations(k.operations), G.appliedOperations = k.operations, G.applyResult.results.every((ee) => ee.ok) ? G.appliedVariantId = ne.id : G.applyConflict = "Winner promotion was only partially applied; the canvas may contain a partial parameter update. Inspect operation errors.";
        } catch (ee) {
          G.applyConflict = `Winner promotion threw unexpectedly; the canvas may contain a partial parameter update: ${String(ee)}`;
        }
        G.applyConflict && a.ui.toast(G.applyConflict, "error");
      }
    } else
      G.appliedVariantId = ne.id;
  }
  if (l != null && l.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  const ce = (/* @__PURE__ */ new Date()).toISOString();
  try {
    const k = await G1({
      session: G,
      request: r,
      baseline: m,
      definitions: y,
      pluginId: a.pluginId || C0,
      pluginVersion: O0,
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
    }), Q = await cy(a, k);
    if (Q.cleanupFailures.length > 0) {
      const oe = `Portable study was saved, but ${Q.cleanupFailures.length} unreferenced old blob(s) could not be cleaned up.`;
      G.insights.warnings.push(oe);
      try {
        a.ui.toast(oe, "warning");
      } catch {
      }
    }
  } catch (k) {
    const Q = `Experiment completed, but its portable study bundle could not be captured or saved: ${lS(k)}`;
    G.insights.warnings.push(Q);
    try {
      a.ui.toast(Q, "warning");
    } catch {
    }
  }
  let ue = tg(a, r, G, m, y);
  try {
    await my(a, ue);
  } catch (k) {
    const Q = `Experiment completed, but its local history could not be saved: ${String(k)}`;
    G.insights.warnings.push(Q);
    try {
      a.ui.toast(Q, "warning");
    } catch {
    }
    ue = tg(a, r, G, m, y);
  }
  return ue;
}
async function NS(a, r, l) {
  let s = !1, u, d = !0;
  const f = () => {
    d && (d = !1, u == null || u());
  };
  try {
    u = a.graph.onGraphChanged(() => {
      d && (s = !0);
    });
  } catch {
    s = !0;
  }
  try {
    return await AS(
      a,
      r,
      l,
      () => s,
      f
    );
  } finally {
    f();
  }
}
const Ju = 1, jS = "mulberry32-v1", ng = 4, ag = 32, Ou = 8, ig = 16, wS = /* @__PURE__ */ new Set([
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
]), $S = /* @__PURE__ */ new Set(["metric", "direction"]), TS = /* @__PURE__ */ new Set(["node_id", "param", "values"]), MS = /* @__PURE__ */ new Set(["int", "float", "bool", "select"]), DS = "Planner-only seed: it deterministically selects parameter assignments and does not seed graph nodes or make graph executions reproducible.";
function Fu(a, r) {
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new Error(`${r} must be an object`);
  return a;
}
function Wu(a, r, l) {
  const s = Object.keys(a).filter((u) => !r.has(u));
  if (s.length > 0)
    throw new Error(`${l} contains unknown field(s): ${s.join(", ")}`);
}
function io(a, r) {
  if (typeof a != "string" || !a.trim())
    throw new Error(`${r} must be a non-empty string`);
  return a.trim();
}
function rg(a, r, l) {
  if (a === void 0) return r;
  if (typeof a != "boolean") throw new Error(`${l} must be a boolean`);
  return a;
}
function Pu(a, r, l, s, u) {
  const d = a === void 0 ? r : a;
  if (!Number.isInteger(d) || d < l || d > s)
    throw new Error(`${u} must be an integer from ${l} to ${s}`);
  return d;
}
function ml(a) {
  return typeof a == "number" ? `number:${Object.is(a, -0) ? "0" : String(a)}` : `${typeof a}:${JSON.stringify(a)}`;
}
function lg(a, r, l) {
  switch (a.param_type) {
    case "int":
      if (typeof r != "number" || !Number.isFinite(r) || !Number.isInteger(r))
        throw new Error(`${l} must be a finite integer`);
      break;
    case "float":
      if (typeof r != "number" || !Number.isFinite(r))
        throw new Error(`${l} must be a finite number`);
      break;
    case "bool":
      if (typeof r != "boolean") throw new Error(`${l} must be a boolean`);
      break;
    case "select":
      if (typeof r != "string") throw new Error(`${l} must be a string select option`);
      if (!Array.isArray(a.options) || !a.options.includes(r))
        throw new Error(`${l} must be one of: ${(a.options ?? []).join(", ")}`);
      break;
    default:
      throw new Error(`${l} uses unsupported parameter type '${String(a.param_type)}'`);
  }
  if (typeof r == "number") {
    if (typeof a.min_value == "number" && r < a.min_value)
      throw new Error(`${l} must be >= ${a.min_value}`);
    if (typeof a.max_value == "number" && r > a.max_value)
      throw new Error(`${l} must be <= ${a.max_value}`);
  }
  return r;
}
function CS(a, r, l) {
  const s = a.nodes.filter((d) => d.id === r);
  if (s.length === 0) throw new Error(`${l} references missing node '${r}'`);
  if (s.length > 1) throw new Error(`${l} references ambiguous duplicate node id '${r}'`);
  const u = s[0];
  if (!u.type || u.type === "note")
    throw new Error(`${l} node '${r}' has no optimizable node type`);
  return u;
}
function OS(a, r, l) {
  const s = a.filter((u) => u.node_name === r);
  if (s.length === 0) throw new Error(`${l} has no definition for node type '${r}'`);
  if (s.length > 1) throw new Error(`${l} found duplicate definitions for node type '${r}'`);
  return s[0];
}
function zS(a, r, l, s) {
  var z;
  const u = `optimizer.bindings[${r}]`, d = Fu(a, u);
  Wu(d, TS, u);
  const f = io(d.node_id, `${u}.node_id`), v = io(d.param, `${u}.param`), m = CS(l, f, u), g = OS(s, m.type, u), y = g.params.filter((K) => K.name === v);
  if (y.length === 0)
    throw new Error(`${u} references unknown parameter '${v}' on '${m.type}'`);
  if (y.length > 1)
    throw new Error(`${u} references ambiguous duplicate parameter '${v}' on '${m.type}'`);
  const b = y[0];
  if (!MS.has(b.param_type))
    throw new Error(
      `${u} parameter '${f}.${v}' has unsupported type '${String(b.param_type)}'; only int, float, bool, and select are allowed`
    );
  if ($a(v))
    throw new Error(
      `${u} parameter '${f}.${v}' has a credential-shaped name and cannot be optimized; this is refused even when the node schema declares an otherwise supported parameter type`
    );
  if (!Array.isArray(d.values) || d.values.length === 0)
    throw new Error(`${u}.values must be a non-empty explicit domain`);
  if (d.values.length > ag)
    throw new Error(`${u}.values supports at most ${ag} values`);
  const _ = d.values.map((K, ae) => lg(b, K, `${u}.values[${ae}]`)), N = _.map(ml);
  if (new Set(N).size !== N.length)
    throw new Error(`${u}.values must contain unique scalar values`);
  const R = (z = m.data) == null ? void 0 : z.params, H = !!R && Object.prototype.hasOwnProperty.call(R, v) ? R[v] : b.default, $ = lg(b, H, `${u} baseline value`);
  return {
    node: m,
    definition: g,
    parameter: b,
    nodeId: f,
    paramName: v,
    baselineValue: $,
    domain: _
  };
}
function RS(a, r) {
  const l = new Array(a.length);
  let s = r;
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u].domain;
    l[u] = d[s % d.length], s = Math.floor(s / d.length);
  }
  return l;
}
function US(a) {
  let r = 0;
  for (const l of a) {
    const s = ml(l.baselineValue), u = l.domain.findIndex((d) => ml(d) === s);
    if (u < 0) return;
    r = r * l.domain.length + u;
  }
  return r;
}
function LS(a) {
  let r = a >>> 0;
  return () => {
    r = r + 1831565813 >>> 0;
    let l = r;
    return l = Math.imul(l ^ l >>> 15, l | 1) >>> 0, l ^= l + Math.imul(l ^ l >>> 7, l | 61), (l ^ l >>> 14) >>> 0;
  };
}
function BS(a, r, l) {
  const s = LS(l), u = /* @__PURE__ */ new Map(), d = [];
  for (let f = 0; f < r; f += 1) {
    const v = a - f, m = s() % v, g = u.get(m) ?? m, y = v - 1, b = u.get(y) ?? y;
    m !== y ? u.set(m, b) : u.delete(m), u.delete(y), d.push(g);
  }
  return d;
}
function VS(a, r) {
  const l = [], s = /* @__PURE__ */ new Map();
  return a.forEach((u, d) => {
    s.has(u.nodeId) || (s.set(u.nodeId, []), l.push(u.nodeId)), s.get(u.nodeId).push([u.paramName, r[d]]);
  }), l.map((u) => ({
    op: "set_params",
    node_id: u,
    params: Object.fromEntries(s.get(u))
  }));
}
function HS(a, r) {
  return r.every((l, s) => ml(l) === ml(a[s].baselineValue));
}
function GS(a) {
  const r = Fu(a, "optimizer");
  if (Wu(r, wS, "optimizer"), r.version !== void 0 && r.version !== Ju)
    throw new Error(`optimizer.version must be ${Ju}`);
  if (r.strategy !== "grid" && r.strategy !== "seeded_random")
    throw new Error("optimizer.strategy must be grid or seeded_random");
  const l = io(r.hypothesis, "optimizer.hypothesis"), s = Fu(r.objective, "optimizer.objective");
  Wu(s, $S, "optimizer.objective");
  const u = io(s.metric, "optimizer.objective.metric");
  if (s.direction !== "maximize" && s.direction !== "minimize")
    throw new Error("optimizer.objective.direction must be maximize or minimize");
  return {
    raw: r,
    strategy: r.strategy,
    hypothesis: l,
    objective: { metric: u, direction: s.direction },
    repetitions: Pu(r.repetitions, 1, 1, 5, "optimizer.repetitions"),
    concurrency: Pu(r.concurrency, 1, 1, 2, "optimizer.concurrency"),
    includeBaseline: rg(r.include_baseline, !0, "optimizer.include_baseline"),
    applyBest: rg(r.apply_best, !1, "optimizer.apply_best")
  };
}
function qS(a, r, l) {
  const s = GS(a);
  if (!Array.isArray(s.raw.bindings) || s.raw.bindings.length < 1 || s.raw.bindings.length > ng)
    throw new Error(`optimizer.bindings must contain 1 to ${ng} bindings`);
  if (!r || !Array.isArray(r.nodes) || !Array.isArray(r.edges))
    throw new Error("current graph must contain nodes and edges arrays");
  if (!Array.isArray(l)) throw new Error("node definitions must be an array");
  const u = s.raw.bindings.map((X, ne) => zS(X, ne, r, l)), d = u.map((X) => `${X.nodeId}\0${X.paramName}`);
  if (new Set(d).size !== d.length)
    throw new Error("optimizer.bindings must not repeat the same node parameter");
  const f = u.reduce((X, ne) => X * ne.domain.length, 1), v = US(u), m = Ou - (s.includeBaseline ? 1 : 0);
  let g, y;
  const b = f - (v === void 0 ? 0 : 1);
  if (s.strategy === "grid") {
    if (s.raw.candidate_count !== void 0)
      throw new Error("optimizer.candidate_count is only allowed for seeded_random");
    if (s.raw.seed !== void 0)
      throw new Error("optimizer.seed is only allowed for seeded_random");
    if (b > m)
      throw new Error(
        `Grid Cartesian product has ${b} changed assignments but only ${m} candidate slots are available; narrow the domains instead of truncating the grid`
      );
    g = Array.from({ length: f }, (X, ne) => ne).filter((X) => X !== v);
  } else {
    const X = Pu(
      s.raw.candidate_count,
      Number.NaN,
      1,
      m,
      "optimizer.candidate_count"
    );
    if (!Number.isInteger(s.raw.seed) || s.raw.seed < 0 || s.raw.seed > 4294967295)
      throw new Error("optimizer.seed is required for seeded_random and must be a uint32 integer");
    if (y = s.raw.seed, X > b)
      throw new Error(
        `seeded_random requested ${X} unique changed assignments, but only ${b} are available`
      );
    g = BS(b, X, y).map((G) => v !== void 0 && G >= v ? G + 1 : G);
  }
  const _ = g.map((X) => ({
    domainIndex: X,
    assignment: RS(u, X)
  })).filter(({ assignment: X }) => !HS(u, X));
  if (_.length === 0)
    throw new Error("optimizer search space contains no assignment different from the current graph baseline");
  const N = s.includeBaseline ? [{ id: "baseline", label: "Baseline", operations: [] }] : [], R = s.strategy === "grid" ? "grid" : "random", x = _.map(({ assignment: X }, ne) => ({
    id: `optimizer-${R}-${String(ne + 1).padStart(3, "0")}`,
    label: `${s.strategy === "grid" ? "Grid" : "Random"} ${ne + 1}: ${u.map((G, ce) => `${G.nodeId}.${G.paramName}=${JSON.stringify(X[ce])}`).join(", ")}`,
    operations: VS(u, X)
  })), H = [...N, ...x];
  if (H.length > Ou)
    throw new Error(`optimizer compiled ${H.length} variants; maximum is ${Ou}`);
  const $ = H.length * s.repetitions;
  if ($ > ig)
    throw new Error(
      `optimizer compiled ${H.length} variants x ${s.repetitions} repetitions = ${$} executions; maximum is ${ig}`
    );
  const z = _.map(
    ({ domainIndex: X, assignment: ne }, G) => ({
      variantId: x[G].id,
      domainIndex: X,
      values: u.map((ce, ue) => ({
        nodeId: ce.nodeId,
        param: ce.paramName,
        value: ne[ue]
      }))
    })
  ), K = {
    schemaVersion: Ju,
    strategy: s.strategy,
    prngVersion: s.strategy === "seeded_random" ? jS : void 0,
    plannerSeed: y,
    seedDescription: DS,
    includesBaseline: s.includeBaseline,
    totalDomainAssignments: f,
    baselineAssignmentExcluded: v !== void 0,
    generatedCandidateCount: x.length,
    totalVariantCount: H.length,
    totalExecutionCount: $,
    bindings: u.map((X) => ({
      nodeId: X.nodeId,
      nodeType: X.node.type,
      param: X.paramName,
      paramType: X.parameter.param_type,
      baselineValue: X.baselineValue,
      domain: [...X.domain]
    })),
    assignments: z
  };
  return {
    request: {
      hypothesis: s.hypothesis,
      objective: s.objective,
      variants: H,
      repetitions: s.repetitions,
      concurrency: s.concurrency,
      apply_best: s.applyBest,
      search: K
    },
    metadata: K
  };
}
const sg = 16, og = 2, IS = [
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
function ro(a) {
  const r = a.graph.getGraph();
  return JSON.stringify({ nodes: r.nodes, edges: r.edges, presets: r.presets ?? [] });
}
function KS(a) {
  if (typeof a == "string") return JSON.stringify(a);
  const r = JSON.stringify(a);
  return r === void 0 ? String(a) : r.length > 180 ? `${r.slice(0, 177)}...` : r;
}
function cg(a) {
  if (!a) return "";
  const r = Object.entries(a).map(([l, s]) => `${l}=${KS(s)}`);
  return r.length > 0 ? r.join(", ") : "no parameters";
}
function kS(a) {
  switch (a.op) {
    case "add_node": {
      const r = cg(a.params);
      return `add ${a.node_type}${r ? ` with ${r}` : ""}`;
    }
    case "set_params":
      return `set ${a.node_id}: ${cg(a.params)}`;
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
function zu(a, r) {
  const l = a.role === "user" && a.attachments && a.attachments.length > 0 ? Og(a.content, a.attachments, r) : a.content, s = { role: a.role, content: l };
  return a.tool_calls && (s.tool_calls = a.tool_calls), a.tool_call_id && (s.tool_call_id = a.tool_call_id), s;
}
function ug(a, r) {
  const l = /* @__PURE__ */ new Map();
  a.forEach((u, d) => {
    const f = u.op, v = r[d], m = v ? v.ok : !1;
    l.has(f) || l.set(f, { ok: 0, fail: 0 });
    const g = l.get(f);
    m ? g.ok++ : g.fail++;
  });
  const s = [];
  for (const [u, d] of l) {
    const f = d.ok + d.fail;
    d.fail === 0 ? s.push(`${u} x${f} ok`) : d.ok === 0 ? s.push(`${u} x${f} FAILED`) : s.push(`${u} x${f} (${d.ok} ok, ${d.fail} FAILED)`);
  }
  return s.join(", ");
}
function YS(a, r, l, s, u) {
  const f = { role: "system", content: D0(
    a.graph.getNodeDefinitions(),
    a.graph.getGraph()
  ) }, v = r.slice(-20), m = r.flatMap((_) => _.tool_calls ?? []), g = new Map(m.map((_) => [_.id, _])), y = v.map((_) => {
    if (_.role === "user") return zu(_, u);
    if (_.role === "tool") {
      const N = _.tool_call_id ? g.get(_.tool_call_id) : void 0, R = lo(
        N ?? { id: _.tool_call_id ?? "legacy", name: "legacy_tool", arguments: {} },
        _.content,
        a
      );
      return zu({ ..._, content: R }, u);
    }
    return zu({
      ..._,
      content: Iu(_.content, m, a),
      ..._.tool_calls ? { tool_calls: Bg(_.tool_calls, a) } : {}
    }, u);
  }), b = {
    role: "user",
    content: Og(l, s, u)
  };
  return [f, ...y, b];
}
function gy(a, r, l = IS, s = 8192) {
  const u = a.provider, d = a.models[u] ?? "", f = {
    provider: u,
    model: d,
    messages: r,
    tools: l,
    max_tokens: s
  };
  if (u !== "openai-codex") {
    const m = u === "openai" ? a.apiKeys.openai : u === "openrouter" ? a.apiKeys.openrouter : u === "anthropic" ? a.apiKeys.anthropic : u === "custom" ? a.apiKeys.custom : void 0;
    m && (f.api_key = m);
  }
  u === "custom" && a.customBaseUrl && (f.base_url = a.customBaseUrl);
  const v = Xs(a);
  return v && (f.reasoning_effort = v), f;
}
async function yy(a) {
  const r = (f) => {
    const v = lo(
      { name: "validate_graph", arguments: {} },
      JSON.stringify(f),
      a
    );
    try {
      const m = JSON.parse(v);
      let g = m.valid === !0;
      const y = Array.isArray(m.errors) ? m.errors.filter((b) => typeof b == "string") : [];
      return g && y.length > 0 && (g = !1), !g && y.length === 0 && y.push("Graph validation failed without diagnostic details."), { valid: g, errors: y };
    } catch {
      return { valid: !1, errors: ["Graph validation returned an unreadable result."] };
    }
  }, l = a.graph.getGraph(), s = l.nodes.filter((f) => f.type !== "note"), u = new Set(s.map((f) => f.id)), d = l.edges.filter((f) => typeof f.source == "string" && typeof f.target == "string" && u.has(f.source) && u.has(f.target));
  try {
    const f = await a.http.fetch("/api/graph/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes: s, edges: d, presets: l.presets ?? [] })
    });
    if (!f.ok)
      return r({ valid: !1, errors: [`validate request failed: HTTP ${f.status}`] });
    const v = await f.json();
    return r({
      valid: v.valid === !0,
      errors: Array.isArray(v.errors) ? v.errors.filter((m) => typeof m == "string") : []
    });
  } catch (f) {
    return r({ valid: !1, errors: [`validate request error: ${String(f)}`] });
  }
}
async function XS(a) {
  let r = !1, l;
  try {
    l = a.graph.onGraphChanged(() => {
      r = !0;
    });
  } catch {
    return {
      valid: !1,
      errors: ["Graph validation could not safely monitor the active graph for concurrent changes."]
    };
  }
  let s;
  try {
    s = ro(a);
  } catch {
    try {
      l();
    } catch {
    }
    return {
      valid: !1,
      errors: ["Graph validation could not capture the active graph revision."]
    };
  }
  const u = await yy(a);
  let d;
  try {
    d = ro(a);
  } catch {
  }
  const f = r || d === void 0 || d !== s;
  try {
    l();
  } catch {
  }
  return f ? {
    valid: !1,
    errors: [
      "The active graph changed while validation was in flight. Re-read the current graph and validate that revision before finishing."
    ]
  } : u;
}
async function QS(a, r, l, s, u) {
  const f = [
    { role: "system", content: `You are a focused research sub-agent for CodefyUI Graph Copilot. Answer ONE sub-question about building a node graph, using ONLY node types that appear in the index below (exact names; if nothing in the index fits, say so instead of inventing a type). Answer with: (1) the node types needed, (2) a one-line wiring plan (which output feeds which input), (3) any params worth setting. CONCISE — no preamble, no code blocks.

## Node index
` + s },
    { role: "user", content: l }
  ];
  let v = "";
  try {
    await zg(
      a,
      gy(r, f, [], 1024),
      {
        onText: (m) => {
          v += m;
        },
        onDone: (m) => {
          !v && m.message.content && (v = m.message.content);
        },
        onError: (m) => {
          v += `
(research error: ${m})`;
        }
      },
      u
    );
  } catch (m) {
    return `(research failed: ${String(m)})`;
  }
  return v.trim() || "(no answer)";
}
async function vy(a, r, l, s, u, d, f, v = !1) {
  const { name: m, arguments: g } = a;
  if (m === "apply_graph_operations") {
    const y = g.operations;
    if (!Array.isArray(y))
      return JSON.stringify({ error: "operations must be an array of GraphOp objects" });
    let b;
    try {
      b = r.graph.applyOperations(y);
    } catch (N) {
      return JSON.stringify({ error: `applyOperations threw: ${String(N)}` });
    }
    const _ = ug(y, b.results);
    return u.push(_), s.onOpsApplied(_, b), JSON.stringify({
      results: b.results,
      refs: b.refs,
      node_count: b.node_count,
      edge_count: b.edge_count
    });
  }
  if (m === "get_node_schemas") {
    const b = (Array.isArray(g.node_types) ? g.node_types : []).map(($) => String($)), _ = r.graph.getNodeDefinitions(), N = new Map(_.map(($) => [$.node_name, $])), R = b.map(($) => N.get($)).filter(($) => !!$), x = b.filter(($) => !N.has($));
    let H = R.length > 0 ? M0(R) : "(no matching node types)";
    return x.length > 0 && (H += `
(unknown node types, not in catalog: ${x.join(", ")})`), H;
  }
  if (m === "validate_graph")
    return JSON.stringify(await yy(r));
  if (m === "research") {
    const b = (Array.isArray(g.questions) ? g.questions : []).map((R) => String(R)).filter((R) => R.trim()).slice(0, 4);
    if (b.length === 0)
      return JSON.stringify({ error: 'research requires a non-empty "questions" array' });
    const _ = Vg(r.graph.getNodeDefinitions()), N = await Promise.all(
      b.map((R) => QS(r, l, R, _, f))
    );
    return b.map((R, x) => `[${x + 1}] Q: ${R}
A: ${N[x]}`).join(`

`);
  }
  if (m === "optimize_graph_parameters") {
    let y;
    try {
      y = qS(
        g,
        r.graph.getGraph(),
        r.graph.getNodeDefinitions()
      );
    } catch (_) {
      return JSON.stringify({ error: String(_) });
    }
    const b = await vy(
      {
        id: a.id,
        name: "run_graph_experiments",
        arguments: y.request
      },
      r,
      l,
      s,
      u,
      d,
      f,
      !0
    );
    try {
      const _ = JSON.parse(b);
      return JSON.stringify({ ..._, optimizer: y.metadata });
    } catch {
      return b;
    }
  }
  if (m === "run_graph_experiments") {
    if (g.search !== void 0 && !v)
      return JSON.stringify({
        error: "search metadata is internal optimizer provenance; call optimize_graph_parameters instead"
      });
    let y;
    try {
      y = xS(g);
    } catch ($) {
      return JSON.stringify({ error: String($) });
    }
    if (y > d.remaining)
      return JSON.stringify({
        error: `Experiment turn budget exceeded: ${y} requested, ${d.remaining} of ${no} executions remain.`
      });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." });
    if (!s.onExperimentApproval)
      return JSON.stringify({
        error: "Experiment execution requires an interactive user confirmation, but this client did not provide one."
      });
    const b = g;
    let _ = !1, N;
    try {
      N = r.graph.onGraphChanged(() => {
        _ = !0;
      });
    } catch ($) {
      return JSON.stringify({ error: `Cannot safely watch the graph during approval: ${String($)}` });
    }
    let R;
    try {
      R = ro(r);
    } catch ($) {
      return N(), JSON.stringify({ error: `Cannot capture the graph before approval: ${String($)}` });
    }
    let x;
    try {
      try {
        const $ = v ? {
          ...a,
          arguments: Object.fromEntries(
            Object.entries(a.arguments).filter(([K]) => K !== "search")
          )
        } : a, z = Lg($, r).arguments;
        x = await s.onExperimentApproval({
          hypothesis: z.hypothesis,
          variantCount: b.variants.length,
          repetitions: b.repetitions ?? 1,
          executionCount: y,
          concurrency: b.concurrency ?? 1,
          applyBest: b.apply_best ?? !1,
          variants: z.variants.map((K) => ({
            label: K.label,
            operations: K.operations.map(kS)
          })),
          nodeTypes: [.../* @__PURE__ */ new Set([
            ...r.graph.getGraph().nodes.map((K) => K.type).filter((K) => !!K && K !== "note"),
            ...b.variants.flatMap((K) => K.operations.filter((ae) => ae.op === "add_node").map((ae) => ae.node_type))
          ])]
        });
      } catch ($) {
        return f != null && f.aborted ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." }) : JSON.stringify({ error: `Experiment approval failed: ${String($)}` });
      }
    } finally {
      N();
    }
    if (!x)
      return JSON.stringify({ cancelled: !0, error: "Experiment execution was not approved by the user." });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." });
    let H;
    try {
      H = ro(r) !== R;
    } catch ($) {
      return JSON.stringify({ error: `Cannot re-check the graph after approval: ${String($)}` });
    }
    if (_ || H)
      return JSON.stringify({
        cancelled: !0,
        replan: !0,
        error: "The active graph changed while execution approval was open. Re-read the graph and propose the study again."
      });
    d.remaining -= y;
    try {
      const $ = await NS(
        r,
        g,
        f
      );
      if ($.applyResult && $.appliedOperations) {
        const X = `promote experiment winner: ${ug(
          $.appliedOperations,
          $.applyResult.results
        )}`;
        u.push(X), s.onOpsApplied(X, $.applyResult);
      }
      const { applyResult: z, appliedOperations: K, ...ae } = $;
      return JSON.stringify(ae);
    } catch ($) {
      return f != null && f.aborted || $ instanceof DOMException && $.name === "AbortError" ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled." }) : JSON.stringify({ error: String($) });
    }
  }
  return m === "get_current_graph" ? Hg(r.graph.getGraph(), r.graph.getNodeDefinitions()) : JSON.stringify({ error: `Unknown tool: ${m}` });
}
async function ZS(a) {
  const { api: r, settings: l, history: s, userText: u, attachments: d, callbacks: f, signal: v } = a, m = [], g = YS(
    r,
    s,
    u,
    d,
    l.provider
  );
  let y = 0, b = 0, _ = !1;
  const N = [], R = { remaining: no }, x = ($) => {
    var z;
    m.push($), (z = f.onTurnAppended) == null || z.call(f, $);
  }, H = ($) => {
    const z = Iu($, N, r);
    z.trim() && x({ role: "assistant", content: z });
  };
  try {
    for (; ; ) {
      let $ = "", z = null, K = null;
      if (await zg(
        r,
        gy(l, g),
        {
          onText(ee) {
            $ += ee, f.onTextDelta(ee);
          },
          onDone(ee) {
            z = ee;
          },
          onError(ee) {
            K = ee;
          }
        },
        v
      ), K !== null) {
        H($), f.onTurnsCommitted(m), f.onError(K), f.onFinished();
        return;
      }
      if (!z) {
        H($), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      const ae = z, X = ae.message.tool_calls ?? [], ne = ae.message.content || $, G = Iu(
        ne,
        [...N, ...X],
        r
      );
      if (ae.stop_reason === "end" || X.length === 0) {
        const ee = r.graph.getGraph();
        if (_ && Array.isArray(ee.nodes) && ee.nodes.length > 0) {
          const he = await XS(r);
          if (!he.valid) {
            if (b >= og) {
              G.trim() && x({ role: "assistant", content: G }), x({
                role: "assistant",
                content: `I could not complete a runnable graph after ${og} correction attempts. The current graph still fails CodefyUI validation:
` + he.errors.map((T) => `- ${T}`).join(`
`)
              }), f.onTurnsCommitted(m), f.onFinished();
              return;
            }
            b++, G.trim() && x({ role: "assistant", content: G }), g.push({ role: "assistant", content: G }), g.push({
              role: "user",
              content: `The graph is not runnable yet — validate_graph reported these errors. Fix them with graph operations, then validate again before finishing:
` + he.errors.map((T) => `- ${T}`).join(`
`)
            });
            continue;
          }
        }
        x({ role: "assistant", content: G }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      y++;
      const ce = Bg(X, r);
      N.push(...X);
      const ue = {
        role: "assistant",
        content: G,
        tool_calls: ce
      }, k = m.length;
      x(ue);
      const Q = [], oe = [];
      for (const ee of X) {
        const he = Q.length, T = Date.now(), Y = await vy(
          ee,
          r,
          l,
          f,
          Q,
          R,
          v
        );
        Q.length > he && (_ = !0);
        const O = lo(ee, Y, r);
        if (x({
          role: "tool",
          content: O,
          tool_call_id: ee.id,
          durationMs: Date.now() - T
        }), oe.push({
          role: "tool",
          content: O,
          tool_call_id: ee.id
        }), v != null && v.aborted) {
          f.onTurnsCommitted(m), f.onFinished();
          return;
        }
      }
      Q.length > 0 && (m[k] = { ...ue, opsSummary: Q.join("; ") });
      const ye = {
        role: "assistant",
        content: G,
        tool_calls: X
      };
      if (g.push(ye), g.push(...oe), y >= sg) {
        x({
          role: "assistant",
          content: `(stopped after ${sg} tool rounds)`
        }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
    }
  } catch ($) {
    f.onTurnsCommitted(m), f.onError(String($)), f.onFinished();
  }
}
function JS(a) {
  const r = [];
  let l = 0;
  return a.forEach((s, u) => {
    if (s.role === "tool") {
      for (let f = r.length - 1; f >= 0; f--) {
        const v = r[f].stages.find(
          (m) => m.call.id === s.tool_call_id && !m.result
        );
        if (v) {
          v.result = s;
          return;
        }
      }
      return;
    }
    s.role === "user" && (l = 0);
    const d = (s.tool_calls ?? []).map((f) => ({ call: f }));
    r.push({
      key: u,
      turn: s,
      stages: d,
      ...d.length > 0 ? { step: ++l } : {}
    });
  }), r;
}
function FS(a) {
  if (!Number.isFinite(a) || a < 0) return "";
  if (a < 1e4) return `${Math.max(a / 1e3, 0.1).toFixed(1)}s`;
  const r = Math.round(a / 1e3);
  if (r < 60) return `${r}s`;
  const l = Math.floor(r / 60), s = r % 60;
  return `${l}m ${String(s).padStart(2, "0")}s`;
}
const Ta = {
  apply_graph_operations: "Edit graph",
  get_current_graph: "Read graph",
  get_node_schemas: "Node schemas",
  validate_graph: "Validate graph",
  research: "Research",
  run_graph_experiments: "Experiment study",
  optimize_graph_parameters: "Parameter search"
};
function Wi(a) {
  try {
    const r = JSON.parse(a);
    return r && typeof r == "object" && !Array.isArray(r) ? r : null;
  } catch {
    return null;
  }
}
function WS(a) {
  const r = Array.isArray(a.operations) ? a.operations : [], l = /* @__PURE__ */ new Map();
  for (const s of r) {
    const u = s && typeof s == "object" ? String(s.op ?? "?") : "?";
    l.set(u, (l.get(u) ?? 0) + 1);
  }
  return [...l].map(([s, u]) => `${s} ×${u}`).join(", ");
}
function Jn(a, r) {
  return a.length > r ? a.slice(0, r - 1) + "…" : a;
}
function dn(a) {
  try {
    return Jn(JSON.stringify(JSON.parse(a), null, 2), 4e3);
  } catch {
    return Jn(a, 4e3);
  }
}
function Ji(a, r) {
  return `${a} ${r}${a === 1 ? "" : "s"}`;
}
function PS(a, r) {
  const l = Ta.apply_graph_operations, s = WS(a);
  if (!r)
    return { label: l, summary: s || "applying operations", status: "running" };
  const u = Wi(r.content);
  if (!u)
    return { label: l, summary: s, status: "ok", detail: dn(r.content) };
  if (typeof u.error == "string")
    return { label: l, summary: Jn(u.error, 120), status: "error", detail: dn(r.content) };
  const f = (Array.isArray(u.results) ? u.results : []).filter((y) => !y.ok).length, v = typeof u.node_count == "number" ? u.node_count : null, m = typeof u.edge_count == "number" ? u.edge_count : null, g = [];
  return s && g.push(s), f > 0 && g.push(`${f} failed`), v !== null && m !== null && g.push(`${Ji(v, "node")} · ${Ji(m, "edge")}`), {
    label: l,
    summary: g.join(" — ") || "applied",
    status: f > 0 ? "error" : "ok",
    detail: dn(r.content)
  };
}
function e_(a) {
  const r = Ta.validate_graph;
  if (!a) return { label: r, summary: "checking…", status: "running" };
  const l = Wi(a.content), s = Array.isArray(l == null ? void 0 : l.errors) ? l.errors.map(String) : [];
  return l != null && l.valid ? { label: r, summary: "graph is runnable", status: "ok" } : {
    label: r,
    summary: s.length > 0 ? Ji(s.length, "issue") : "not runnable",
    status: "error",
    detail: s.length > 0 ? s.map((u) => `• ${u}`).join(`
`) : dn(a.content)
  };
}
function t_(a) {
  const r = Ta.get_current_graph;
  if (!a) return { label: r, summary: "reading…", status: "running" };
  const l = Wi(a.content), s = Array.isArray(l == null ? void 0 : l.nodes) ? l.nodes.length : null, u = Array.isArray(l == null ? void 0 : l.edges) ? l.edges.length : null;
  return {
    label: r,
    summary: s !== null && u !== null ? `${Ji(s, "node")} · ${Ji(u, "edge")}` : "snapshot",
    status: "ok",
    detail: dn(a.content)
  };
}
function n_(a, r) {
  const l = Ta.get_node_schemas, s = Array.isArray(a.node_types) ? a.node_types.map(String) : [], u = s.length > 0 ? Jn(s.join(", "), 90) : "node types";
  return r ? { label: l, summary: u, status: "ok", detail: Jn(r.content, 4e3) } : { label: l, summary: u, status: "running" };
}
function a_(a, r) {
  const l = Ta.research, s = Array.isArray(a.questions) ? a.questions.length : 0, u = s > 0 ? `${Ji(s, "question")} in parallel` : "researching";
  return r ? { label: l, summary: u, status: "ok", detail: Jn(r.content, 4e3) } : { label: l, summary: u, status: "running" };
}
function i_(a, r) {
  const l = Ta.run_graph_experiments, s = Array.isArray(a.variants) ? a.variants.length : 0, u = typeof a.repetitions == "number" ? a.repetitions : 1, d = s > 0 ? `${s} candidates · ${s * u} runs` : "preparing study";
  if (!r) return { label: l, summary: d, status: "running" };
  const f = Wi(r.content);
  if (!f || typeof f.error == "string")
    return {
      label: l,
      summary: typeof (f == null ? void 0 : f.error) == "string" ? Jn(f.error, 120) : "study failed",
      status: "error",
      detail: dn(r.content)
    };
  const v = typeof f.winnerLabel == "string" ? f.winnerLabel : null, m = typeof f.appliedVariantId == "string";
  return {
    label: l,
    summary: v ? `${v} ranked first${m ? " · applied" : ""}` : "no rankable metric",
    status: v ? "ok" : "error",
    detail: dn(r.content)
  };
}
function r_(a, r) {
  const l = Ta.optimize_graph_parameters, s = Array.isArray(a.bindings) ? a.bindings.length : 0, u = a.strategy === "seeded_random" ? "seeded random" : "grid", d = typeof a.repetitions == "number" ? a.repetitions : 1, f = a.strategy === "seeded_random" && typeof a.candidate_count == "number" ? a.candidate_count + (a.include_baseline === !1 ? 0 : 1) : void 0, v = f ? `${u} · ${s} params · ${f * d} runs` : `${u} · ${s} ${s === 1 ? "parameter" : "parameters"}`;
  if (!r) return { label: l, summary: v, status: "running" };
  const m = Wi(r.content);
  if (!m || typeof m.error == "string")
    return {
      label: l,
      summary: typeof (m == null ? void 0 : m.error) == "string" ? Jn(m.error, 120) : "search failed",
      status: "error",
      detail: dn(r.content)
    };
  const g = typeof m.winnerLabel == "string" ? m.winnerLabel : null, y = typeof m.appliedVariantId == "string";
  return {
    label: l,
    summary: g ? `${g} ranked first${y ? " · applied" : ""}` : "no rankable metric",
    status: g ? "ok" : "error",
    detail: dn(r.content)
  };
}
function l_(a, r) {
  const l = Ta[a.name] ?? a.name;
  if (!r) return { label: l, summary: "running…", status: "running" };
  const s = Wi(r.content);
  return s && typeof s.error == "string" ? { label: l, summary: Jn(s.error, 120), status: "error", detail: dn(r.content) } : { label: l, summary: "done", status: "ok", detail: dn(r.content) };
}
function by(a) {
  const { call: r, result: l } = a, s = r.arguments ?? {};
  switch (r.name) {
    case "apply_graph_operations":
      return PS(s, l);
    case "validate_graph":
      return e_(l);
    case "get_current_graph":
      return t_(l);
    case "get_node_schemas":
      return n_(s, l);
    case "research":
      return a_(s, l);
    case "run_graph_experiments":
      return i_(s, l);
    case "optimize_graph_parameters":
      return r_(s, l);
    default:
      return l_(r, l);
  }
}
const s_ = /`([^`\n]+)`/, o_ = /\[([^\]\n]+)\]\(([^)\s]+)\)/, c_ = /\*\*([^\n]+?)\*\*/, u_ = /(^|[\s(])\*([^\s*](?:[^*\n]*?[^\s*])?)\*(?=[\s).,!?:;]|$)/;
function d_(a) {
  let r = null;
  const l = (v) => {
    v && (r === null || v.index < r.index) && (r = v);
  }, s = s_.exec(a);
  s && l({
    index: s.index,
    length: s[0].length,
    node: (v) => /* @__PURE__ */ h.jsx("code", { children: s[1] }, v)
  });
  const u = o_.exec(a);
  if (u) {
    const v = u[2];
    l({
      index: u.index,
      length: u[0].length,
      node: (m) => /^https?:\/\//i.test(v) ? /* @__PURE__ */ h.jsx("a", { href: v, target: "_blank", rel: "noopener noreferrer", children: u[1] }, m) : u[0]
    });
  }
  const d = c_.exec(a);
  d && l({
    index: d.index,
    length: d[0].length,
    node: (v) => /* @__PURE__ */ h.jsx("strong", { children: nl(d[1]) }, v)
  });
  const f = u_.exec(a);
  return f && l({
    index: f.index,
    length: f[0].length,
    prefix: f[1],
    node: (v) => /* @__PURE__ */ h.jsx("em", { children: nl(f[2]) }, v)
  }), r;
}
function nl(a) {
  const r = [];
  let l = a, s = 0;
  for (; l.length > 0; ) {
    const u = d_(l);
    if (!u) {
      r.push(l);
      break;
    }
    const d = l.slice(0, u.index) + (u.prefix ?? "");
    d && r.push(d), r.push(u.node(s++)), l = l.slice(u.index + u.length);
  }
  return r;
}
const f_ = /^(#{1,3})\s+(.*)$/, p_ = /^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/, m_ = /^\s*[-*]\s+(.*)$/, h_ = /^\s*\d+[.)]\s+(.*)$/;
function dg(a, r) {
  const l = a.split(`
`), s = [];
  let u = [], d = null, f = 0;
  const v = () => {
    u.length !== 0 && (s.push(
      /* @__PURE__ */ h.jsx("p", { className: "gcp-md-p", children: nl(u.join(`
`)) }, `${r}-p${f++}`)
    ), u = []);
  }, m = () => {
    if (!d) return;
    const g = d.items.map((y, b) => /* @__PURE__ */ h.jsx("li", { children: nl(y) }, b));
    s.push(
      d.ordered ? /* @__PURE__ */ h.jsx("ol", { className: "gcp-md-list", children: g }, `${r}-l${f++}`) : /* @__PURE__ */ h.jsx("ul", { className: "gcp-md-list", children: g }, `${r}-l${f++}`)
    ), d = null;
  };
  for (const g of l) {
    const y = f_.exec(g);
    if (y) {
      v(), m(), s.push(
        /* @__PURE__ */ h.jsx("div", { className: `gcp-md-h${y[1].length}`, children: nl(y[2]) }, `${r}-h${f++}`)
      );
      continue;
    }
    if (p_.test(g)) {
      v(), m(), s.push(/* @__PURE__ */ h.jsx("hr", { className: "gcp-md-hr" }, `${r}-r${f++}`));
      continue;
    }
    const b = m_.exec(g), _ = b ? null : h_.exec(g);
    if (b || _) {
      v();
      const N = !!_;
      (!d || d.ordered !== N) && (m(), d = { ordered: N, items: [] }), d.items.push((b ?? _)[1]);
      continue;
    }
    if (g.trim() === "") {
      v(), m();
      continue;
    }
    m(), u.push(g);
  }
  return v(), m(), s;
}
const Ru = /```[^\n]*\n?([\s\S]*?)(?:```|$)/g;
function g_({ text: a }) {
  const r = [];
  let l = 0, s = 0;
  Ru.lastIndex = 0;
  for (let u = Ru.exec(a); u !== null && (u.index > l && r.push(...dg(a.slice(l, u.index), `s${s++}`)), r.push(
    /* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: u[1] }) }, `c${s++}`)
  ), l = u.index + u[0].length, u[0].length !== 0); u = Ru.exec(a))
    ;
  return l < a.length && r.push(...dg(a.slice(l), `s${s++}`)), /* @__PURE__ */ h.jsx(h.Fragment, { children: r });
}
function y_({ kind: a }) {
  return /* @__PURE__ */ h.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    a === "pdf" ? /* @__PURE__ */ h.jsx("path", { d: "M9 18v-4M15 18v-4m0 0h1.5M9 14h.8a1 1 0 0 1 0 2H9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) : /* @__PURE__ */ h.jsx("path", { d: "M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function v_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function b_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M12 5v9", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "19", r: "1.7", fill: "currentColor" })
  ] });
}
function S_({ open: a }) {
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
function __(a) {
  const r = a.split(/(```[^\n]*\n[\s\S]*?```|```[\s\S]*?```)/g), l = [];
  return r.forEach((s, u) => {
    if (s.startsWith("```")) {
      const d = s.replace(/^```[^\n]*\n?/, "").replace(/```$/, "");
      l.push(/* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: d }) }, u));
    } else s && l.push(/* @__PURE__ */ h.jsx("span", { children: s }, u));
  }), l;
}
function E_({ stage: a }) {
  var f;
  const [r, l] = P.useState(!1), s = by(a), u = !!s.detail, d = (f = a.result) == null ? void 0 : f.durationMs;
  return /* @__PURE__ */ h.jsxs("div", { className: `gcp-stage ${s.status}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "gcp-stage-head",
        onClick: () => u && l((v) => !v),
        "aria-expanded": u ? r : void 0,
        "aria-label": `${s.label}${s.summary ? `: ${s.summary}` : ""}`,
        disabled: !u,
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-status", "aria-hidden": "true", children: s.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-spinner" }) : s.status === "ok" ? /* @__PURE__ */ h.jsx(v_, {}) : /* @__PURE__ */ h.jsx(b_, {}) }),
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-label", children: s.label }),
          s.summary && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-summary", children: s.summary }),
          typeof d == "number" && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-time", children: FS(d) }),
          u && /* @__PURE__ */ h.jsx(S_, { open: r })
        ]
      }
    ),
    r && s.detail && /* @__PURE__ */ h.jsx("pre", { className: "gcp-stage-detail", children: s.detail })
  ] });
}
function fg({
  turn: a,
  stages: r = [],
  step: l,
  streaming: s = !1,
  streamingText: u
}) {
  if (a.role === "tool") return null;
  const d = a.role === "user", f = s && u !== void 0 ? u : a.content, v = f.trim().length > 0, m = a.attachments ?? [], g = !d && r.length > 0;
  return /* @__PURE__ */ h.jsxs("div", { className: `gcp-msg-row ${d ? "user" : "assistant"}${g ? " step" : ""}`, children: [
    m.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-bubble-attachments", children: m.map(
      (y, b) => y.kind === "image" && y.dataUrl ? /* @__PURE__ */ h.jsx("img", { className: "gcp-att-image", src: y.dataUrl, alt: y.name, title: y.name }, b) : /* @__PURE__ */ h.jsxs("span", { className: "gcp-att-file", title: y.name, children: [
        /* @__PURE__ */ h.jsx(y_, { kind: y.kind }),
        /* @__PURE__ */ h.jsx("span", { className: "gcp-att-file-name", children: y.name })
      ] }, b)
    ) }),
    g && typeof l == "number" && /* @__PURE__ */ h.jsxs("div", { className: "gcp-step-tag", children: [
      /* @__PURE__ */ h.jsx("span", { className: "gcp-step-tag-dot", "aria-hidden": "true" }),
      "Step ",
      l
    ] }),
    (v || s && r.length === 0) && /* @__PURE__ */ h.jsxs("div", { className: "gcp-bubble", children: [
      d ? __(f) : /* @__PURE__ */ h.jsx(g_, { text: f }),
      s && /* @__PURE__ */ h.jsx("span", { className: "gcp-caret", "aria-hidden": "true" })
    ] }),
    r.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-stages", children: r.map((y, b) => /* @__PURE__ */ h.jsx(E_, { stage: y }, `${y.call.id}-${b}`)) }),
    !d && a.opsSummary && r.length === 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-ops-chip", children: /* @__PURE__ */ h.jsxs("span", { children: [
      "Applied: ",
      a.opsSummary
    ] }) })
  ] });
}
function x_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L11 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L15 22L11 13L2 9L22 2Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function A_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }) });
}
function pg() {
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
function N_({ kind: a }) {
  return a === "pdf" ? /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M8.5 13.5h1a1.2 1.2 0 0 1 0 2.4h-1zm0 0v4M14 13.5v4m0-4h1.6m-1.6 2h1.2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }) : /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function j_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round" }) });
}
function w_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function $_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7.5v5.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "16.5", r: "1.2", fill: "currentColor" })
  ] });
}
function T_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M13 2L4 14h6l-1 8 9-12h-6l1-8z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function mg() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const M_ = [
  "Build a small CNN image classifier",
  "Explain what my current graph does",
  "Improve my current graph"
];
function D_({
  api: a,
  settings: r,
  codexLoggedIn: l,
  conversation: s,
  onConversationChange: u,
  onSettingsChange: d,
  onOpenSettings: f,
  onOpenHistory: v
}) {
  var Ma, Da, Ca;
  const [m, g] = P.useState(""), [y, b] = P.useState(!1), [_, N] = P.useState(!1), [R, x] = P.useState(""), [H, $] = P.useState([]), [z, K] = P.useState(0), [ae, X] = P.useState(null), [ne, G] = P.useState(""), [ce, ue] = P.useState([]), [k, Q] = P.useState([]), [oe, ye] = P.useState(!1), [ee, he] = P.useState(null), T = P.useRef(null), Y = P.useRef(!0), O = P.useRef(null), ie = P.useRef(null), J = P.useRef(null), E = P.useRef(null), L = P.useRef(0), Z = c0(r, l), te = k.some((B) => B.status === "loading"), fe = k.filter((B) => B.status === "ready" && B.att).map((B) => B.att), Ee = Z && !y && !te && (m.trim().length > 0 || fe.length > 0);
  P.useEffect(() => () => {
    var B, Se;
    (B = E.current) == null || B.call(E, !1), E.current = null, (Se = J.current) == null || Se.abort();
  }, []), P.useEffect(() => {
    if (!y) {
      K(0);
      return;
    }
    const B = Date.now(), Se = window.setInterval(() => {
      K(Math.floor((Date.now() - B) / 1e3));
    }, 1e3);
    return () => window.clearInterval(Se);
  }, [y]);
  const Te = P.useCallback(() => {
    const B = T.current;
    B && (Y.current = B.scrollHeight - B.scrollTop - B.clientHeight < 80);
  }, []);
  P.useEffect(() => {
    const B = T.current;
    B && Y.current && (B.scrollTop = B.scrollHeight);
  }, [s.messages, H, R, k.length, y]);
  const at = P.useCallback(() => {
    const B = O.current;
    B && (B.style.height = "auto", B.style.height = Math.min(B.scrollHeight, 110) + "px");
  }, []);
  P.useEffect(() => {
    at();
  }, [m, at]);
  const Ve = P.useCallback(
    (B) => {
      if (!(!Z || y))
        for (const Se of Array.from(B)) {
          const rt = crypto.randomUUID(), ii = Cg(Se);
          Q((Re) => [
            ...Re,
            { id: rt, name: Se.name, kind: ii, size: Se.size, status: "loading" }
          ]), _0(Se).then((Re) => {
            Q(
              (mn) => mn.map((jt) => jt.id === rt ? { ...jt, status: "ready", att: Re } : jt)
            );
          }).catch((Re) => {
            const mn = (Re == null ? void 0 : Re.message) ?? String(Re);
            Q(
              (jt) => jt.map((rn) => rn.id === rt ? { ...rn, status: "error", error: mn } : rn)
            );
          });
        }
    },
    [Z, y]
  ), fn = (B) => {
    Q((Se) => Se.filter((rt) => rt.id !== B));
  }, En = (B) => {
    B.target.files && B.target.files.length > 0 && Ve(B.target.files), B.target.value = "";
  }, Fn = (B) => {
    var rt;
    const Se = (rt = B.clipboardData) == null ? void 0 : rt.files;
    Se && Se.length > 0 && (Ve(Se), B.preventDefault());
  }, W = (B) => {
    !Z || y || Array.from(B.dataTransfer.types).includes("Files") && (B.preventDefault(), L.current += 1, ye(!0));
  }, pe = (B) => {
    !Z || y || Array.from(B.dataTransfer.types).includes("Files") && B.preventDefault();
  }, ke = () => {
    L.current -= 1, L.current <= 0 && (L.current = 0, ye(!1));
  }, it = (B) => {
    L.current = 0, ye(!1), !(!Z || y) && B.dataTransfer.files && B.dataTransfer.files.length > 0 && (B.preventDefault(), Ve(B.dataTransfer.files));
  }, ft = P.useCallback(
    async (B, Se) => {
      var nr;
      const rt = B.trim();
      if (!rt && Se.length === 0 || y || !Z) return;
      X(null), G(rt), ue(Se), g(""), Q([]), b(!0), x(""), $([]), Y.current = !0;
      const ii = { role: "user", content: rt };
      Se.length > 0 && (ii.attachments = Se);
      let Re = { ...s };
      Re.title || (Re.title = d0(rt || ((nr = Se[0]) == null ? void 0 : nr.name) || "Attachment")), Re.provider = r.provider, Re.model = r.models[r.provider] ?? "";
      const mn = Xs(r);
      mn ? Re.reasoningEffort = mn : delete Re.reasoningEffort, Re.messages = [...Re.messages, ii], Re.updatedAt = Date.now(), u(Re), wh(a, Re);
      const jt = new AbortController();
      J.current = jt;
      let rn = "";
      await ZS({
        api: a,
        settings: r,
        history: Re.messages.slice(0, -1),
        // exclude the user turn we just added
        userText: rt,
        attachments: Se.length > 0 ? Se : void 0,
        callbacks: {
          onTextDelta(At) {
            rn += At, x(rn);
          },
          onTurnAppended(At) {
            At.role !== "tool" && (rn = "", x("")), $((Oa) => [...Oa, At]);
          },
          onOpsApplied() {
          },
          onExperimentApproval(At) {
            var Oa;
            return jt.signal.aborted ? Promise.resolve(!1) : ((Oa = E.current) == null || Oa.call(E, !1), new Promise((ar) => {
              E.current = ar, he(At);
            }));
          },
          onTurnsCommitted(At) {
            x(""), rn = "", $([]), Re = { ...Re, messages: [...Re.messages, ...At], updatedAt: Date.now() }, u(Re), wh(a, Re);
          },
          onError(At) {
            X(At), x(""), rn = "";
          },
          onFinished() {
            var At;
            (At = E.current) == null || At.call(E, !1), E.current = null, he(null), b(!1), J.current = null;
          }
        },
        signal: jt.signal
      });
    },
    [a, y, s, u, Z, r]
  ), Et = () => ft(m, fe), Tt = (B) => {
    B.key === "Enter" && !B.shiftKey && (B.preventDefault(), ft(m, fe));
  }, an = () => {
    var B, Se;
    (B = E.current) == null || B.call(E, !1), E.current = null, he(null), (Se = J.current) == null || Se.abort();
  }, Fe = (B) => {
    const Se = E.current;
    E.current = null, he(null), Se == null || Se(B);
  }, ti = () => ft(ne, ce), Pi = H.length > 0 ? [...s.messages, ...H] : s.messages, pt = JS(Pi), bl = pt.length === 0 && !y, ni = pt[pt.length - 1], ai = ni == null ? void 0 : ni.stages.find((B) => !B.result), fo = y && R === "" && !!!ai && !ee, tr = H.filter(
    (B) => {
      var Se;
      return B.role === "assistant" && (((Se = B.tool_calls) == null ? void 0 : Se.length) ?? 0) > 0;
    }
  ).length, po = ee ? "Waiting for approval" : R !== "" ? "Writing reply" : ai ? by(ai).label : "Thinking", Wn = r.provider, xn = r.models[Wn] ?? "", Ze = Ys(Wn, xn), pn = ((Da = (Ma = r.providerCapabilities) == null ? void 0 : Ma[Wn]) == null ? void 0 : Da.reasoningEffort) === !0, xt = d && pn ? (Ze == null ? void 0 : Ze.reasoningEfforts) ?? [] : [], An = ((Ca = r.reasoningEfforts) == null ? void 0 : Ca[Wn]) ?? "", Sl = (B) => {
    N(!1), d == null || d($g(r, Wn, B));
  }, _l = bl ? Hu(a).filter((B) => B.id !== s.id).length : 0;
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `gcp-chat${oe ? " gcp-dragging" : ""}`,
      onDragEnter: W,
      onDragOver: pe,
      onDragLeave: ke,
      onDrop: it,
      children: [
        /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: "gcp-messages",
            role: "log",
            "aria-live": "polite",
            "aria-label": "Conversation",
            ref: T,
            onScroll: Te,
            children: [
              bl && /* @__PURE__ */ h.jsxs("div", { className: "gcp-welcome", children: [
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-mark", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-title", children: "Build graphs by conversation" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-sub", children: "Describe the pipeline you want, ask for parameter changes, or attach an image, PDF, or code file for context." }),
                Z && /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-suggestions", "aria-label": "Suggested prompts", children: M_.map((B) => /* @__PURE__ */ h.jsx("button", { className: "gcp-suggestion", onClick: () => ft(B, []), children: B }, B)) }),
                _l > 0 && /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "gcp-welcome-history",
                    onClick: v,
                    "aria-label": "View previous conversations",
                    children: [
                      /* @__PURE__ */ h.jsx(w_, {}),
                      "Previous conversations (",
                      _l,
                      ")"
                    ]
                  }
                )
              ] }),
              pt.map((B) => /* @__PURE__ */ h.jsx(
                fg,
                {
                  turn: B.turn,
                  stages: B.stages,
                  step: B.step
                },
                B.key
              )),
              y && R !== "" && /* @__PURE__ */ h.jsx(
                fg,
                {
                  turn: { role: "assistant", content: "" },
                  streaming: !0,
                  streamingText: R
                }
              ),
              fo && /* @__PURE__ */ h.jsxs("div", { className: "gcp-thinking", role: "status", "aria-label": "Waiting for the assistant", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-orb", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-text", children: "Thinking" }),
                z >= 3 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-thinking-time", children: [
                  z,
                  "s"
                ] })
              ] }),
              ae && !y && /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-row", role: "alert", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-error-icon", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx($_, {}) }),
                /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-body", children: [
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-title", children: "Request failed" }),
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-text", children: ae })
                ] }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-retry-btn", onClick: ti, "aria-label": "Retry", children: "Retry" })
              ] })
            ]
          }
        ),
        oe && /* @__PURE__ */ h.jsx("div", { className: "gcp-dropzone", "aria-hidden": "true", children: /* @__PURE__ */ h.jsxs("div", { className: "gcp-dropzone-inner", children: [
          /* @__PURE__ */ h.jsx(pg, {}),
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
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-candidates", "aria-label": "Candidate changes", children: ee.variants.map((B, Se) => /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: B.label }),
                /* @__PURE__ */ h.jsx("span", { children: B.operations.length > 0 ? B.operations.join(" · ") : "baseline — no changes" })
              ] }, `${Se}-${B.label}`)) }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-nodes", children: [
                /* @__PURE__ */ h.jsx("strong", { children: "Nodes that may execute" }),
                /* @__PURE__ */ h.jsx("span", { children: ee.nodeTypes.length > 0 ? ee.nodeTypes.join(", ") : "No typed nodes detected" })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-warning", children: "Candidate edits stay off-canvas, but nodes may write files, call networks, use GPU time, or incur API costs." }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-actions", children: [
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-secondary", onClick: () => Fe(!1), autoFocus: !0, children: "Cancel" }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-primary", onClick: () => Fe(!0), children: "Approve and run" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-area", children: [
          k.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-attachments", "aria-label": "Attachments", children: k.map((B) => {
            var Se;
            return /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: `gcp-chip ${B.kind === "image" ? "image" : "file"} ${B.status}`,
                title: B.status === "error" ? B.error : `${B.name} · ${tl(B.size)}`,
                children: [
                  B.kind === "image" && ((Se = B.att) != null && Se.dataUrl) ? /* @__PURE__ */ h.jsx("img", { className: "gcp-chip-thumb", src: B.att.dataUrl, alt: B.name }) : /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-icon", children: /* @__PURE__ */ h.jsx(N_, { kind: B.kind }) }),
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-chip-body", children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-name", children: B.name }),
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-size", children: B.status === "loading" ? "reading…" : B.status === "error" ? "failed" : tl(B.size) })
                  ] }),
                  B.status === "loading" && /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-spinner", "aria-hidden": "true" }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "gcp-chip-remove",
                      onClick: () => fn(B.id),
                      "aria-label": `Remove ${B.name}`,
                      title: "Remove",
                      children: /* @__PURE__ */ h.jsx(j_, {})
                    }
                  )
                ]
              },
              B.id
            );
          }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-row", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: ie,
                type: "file",
                multiple: !0,
                className: "gcp-file-input",
                onChange: En,
                "aria-hidden": "true",
                tabIndex: -1
              }
            ),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-attach-btn",
                onClick: () => {
                  var B;
                  return (B = ie.current) == null ? void 0 : B.click();
                },
                disabled: !Z || y,
                "aria-label": "Attach files",
                title: "Attach image, PDF, or text/code",
                children: /* @__PURE__ */ h.jsx(pg, {})
              }
            ),
            /* @__PURE__ */ h.jsx(
              "textarea",
              {
                ref: O,
                className: "gcp-textarea",
                rows: 1,
                placeholder: "Message Graph Copilot…",
                value: m,
                onChange: (B) => g(B.target.value),
                onKeyDown: Tt,
                onPaste: Fn,
                disabled: y || !Z,
                "aria-label": "Message input",
                "aria-disabled": Z ? void 0 : "true"
              }
            ),
            y ? /* @__PURE__ */ h.jsx("button", { className: "gcp-stop-btn", onClick: an, "aria-label": "Stop generation", title: "Stop", children: /* @__PURE__ */ h.jsx(A_, {}) }) : /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-send-btn",
                onClick: Et,
                disabled: !Ee,
                "aria-label": "Send message",
                title: "Send",
                children: /* @__PURE__ */ h.jsx(x_, {})
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-composer-bar", children: [
            /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-context", children: xt.length > 0 ? /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: "gcp-effort",
                onKeyDown: (B) => {
                  B.key === "Escape" && N(!1);
                },
                children: [
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      className: `gcp-context-chip${_ ? " open" : ""}`,
                      onClick: () => N((B) => !B),
                      "aria-haspopup": "menu",
                      "aria-expanded": _,
                      "aria-label": "Model and reasoning effort",
                      title: "Adjust reasoning effort",
                      children: [
                        /* @__PURE__ */ h.jsx(T_, {}),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: xn || "model" }),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-effort", children: An || (Ze == null ? void 0 : Ze.defaultReasoningEffort) || "auto" })
                      ]
                    }
                  ),
                  _ && /* @__PURE__ */ h.jsxs("div", { className: "gcp-effort-menu", role: "menu", "aria-label": "Reasoning effort", children: [
                    /* @__PURE__ */ h.jsx("div", { className: "gcp-effort-menu-title", children: "Reasoning effort" }),
                    xt.map((B) => /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": An === B.effort,
                        className: `gcp-effort-item${An === B.effort ? " selected" : ""}`,
                        onClick: () => Sl(B.effort),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-name", children: B.effort }),
                          B.description && /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-desc", children: B.description }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: An === B.effort && /* @__PURE__ */ h.jsx(mg, {}) })
                        ]
                      },
                      B.effort
                    )),
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": An === "",
                        className: `gcp-effort-item${An === "" ? " selected" : ""}`,
                        onClick: () => Sl(""),
                        children: [
                          /* @__PURE__ */ h.jsxs("span", { className: "gcp-effort-item-name", children: [
                            "model default",
                            Ze != null && Ze.defaultReasoningEffort ? ` (${Ze.defaultReasoningEffort})` : ""
                          ] }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: An === "" && /* @__PURE__ */ h.jsx(mg, {}) })
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
                title: `Provider: ${Wn} — open settings`,
                children: /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: xn || "set up model" })
              }
            ) }),
            y ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-runbar", role: "status", "aria-label": "Agent activity", children: [
              /* @__PURE__ */ h.jsx("span", { className: "gcp-runbar-pulse", "aria-hidden": "true" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-phase", children: [
                po,
                "…"
              ] }),
              tr > 0 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-step", children: [
                "step ",
                tr
              ] }),
              z >= 1 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-time", children: [
                z,
                "s"
              ] })
            ] }) : /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-hint", "aria-hidden": "true", children: "Enter ↵ send · Shift+Enter newline" })
          ] }),
          !Z && !y && /* @__PURE__ */ h.jsxs("div", { className: "gcp-not-ready-overlay", children: [
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
const C_ = "Imported portable-study content passed SHA-256 integrity checking, which detects content changes but does not authenticate its author or evidence source. It is read-only and was not executed in this browser session.";
function hl(a, r) {
  return a < r ? -1 : a > r ? 1 : 0;
}
function O_(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.value]).sort(([r], [l]) => hl(r, l))
  );
}
function z_(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.canonicalKey]).sort(([r], [l]) => hl(r, l))
  );
}
function R_(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.source]).sort(([r], [l]) => hl(r, l))
  );
}
function U_(a, r) {
  if (r.metricKey !== void 0)
    return a.metrics.find((l) => l.canonicalKey === r.metricKey);
}
function L_(a, r) {
  const l = U_(a, r), s = a.status === "completed" ? void 0 : a.status === "cancelled" ? `Imported run was cancelled [${a.error.phase}/${a.error.code}]: ${a.error.message}` : `Imported run failed [${a.error.phase}/${a.error.code}]: ${a.error.message}`;
  return {
    repetition: a.repetition,
    // ExperimentSession has no cancelled run state. Preserve the distinction
    // in the error text while ensuring cancelled evidence never appears as a
    // successful observation.
    status: a.status === "completed" ? "completed" : "failed",
    durationMs: a.durationMs,
    ...l === void 0 ? {} : {
      metricKey: l.canonicalKey,
      metricValue: l.value,
      metricSource: l.source
    },
    observedMetrics: O_(a.metrics),
    ...a.metrics.length === 0 ? {} : {
      observedMetricIdentities: z_(a.metrics),
      observedMetricSources: R_(a.metrics)
    },
    ...s === void 0 ? {} : { error: s }
  };
}
function B_(a, r) {
  const l = r.filter((s) => s.variantId === a.id).sort((s, u) => s.repetition - u.repetition || hl(s.runKey, u.runKey)).map((s) => L_(s, a));
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
      a.observedMetrics.map(({ key: s, value: u }) => [s, u]).sort(([s], [u]) => hl(s, u))
    ),
    // Always supply an array, including an empty one. Omitting it would make
    // legacy export code synthesize attempts from aggregate metricValues.
    runs: l,
    ...a.operationSummary === void 0 ? {} : { operationSummary: [...a.operationSummary] },
    errors: [...a.errors]
  };
}
function V_(a) {
  return {
    title: a.title,
    evidence: a.evidence,
    nextStep: a.nextStep
  };
}
function H_(a) {
  const r = a.payload.provenance.facts.find((l) => l.key === "optimizer.plan" && l.status === "observed");
  if (!(!r || !Sd(r.value)))
    return JSON.parse(JSON.stringify(r.value));
}
function G_(a) {
  const { payload: r } = a, { derived: l, spec: s } = r, u = H_(a);
  return {
    id: r.id,
    createdAt: r.createdAt,
    hypothesis: s.hypothesis,
    objective: { ...s.objective },
    repetitions: s.repetitions,
    status: l.status,
    variants: l.variants.map((d) => B_(d, r.runs)),
    ...u === void 0 ? {} : { search: u },
    ...l.baselineVariantId === void 0 ? {} : { baselineVariantId: l.baselineVariantId },
    ...l.winnerId === void 0 ? {} : { winnerId: l.winnerId },
    ...l.winnerLabel === void 0 ? {} : { winnerLabel: l.winnerLabel },
    ...l.appliedVariantId === void 0 ? {} : { appliedVariantId: l.appliedVariantId },
    ...l.applyConflict === void 0 ? {} : { applyConflict: l.applyConflict },
    insights: {
      summary: [...l.insights.summary],
      warnings: [...l.insights.warnings, C_],
      paperIdeas: l.insights.paperIdeas.map(V_)
    }
  };
}
function Aa(a) {
  return !!a && typeof a == "object" && !Array.isArray(a);
}
function q_(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function Sy(a) {
  return Aa(a) && typeof a.$gcpSecretRef == "string";
}
function gl(a, r) {
  if (Sy(a)) {
    const l = a.$gcpSecretRef;
    return q_(r.bindings, l) && typeof r.bindings[l] == "string" ? (r.resolved.add(l), r.bindings[l]) : (r.missing.add(l), "");
  }
  if (Array.isArray(a))
    return a.map((l) => gl(l, r));
  if (Aa(a)) {
    const l = /* @__PURE__ */ Object.create(null);
    for (const [s, u] of Object.entries(a))
      l[s] = gl(u, r);
    return l;
  }
  return a;
}
function ed(a, r) {
  return gl(a, r);
}
function I_(a, r) {
  return {
    name: a.name ?? "",
    description: a.description ?? "",
    nodes: a.nodes.map((l) => ({
      id: l.id,
      type: l.type,
      position: { x: l.position.x, y: l.position.y },
      data: ed(l.data, r)
    })),
    edges: a.edges.map((l) => ({
      id: l.id,
      source: l.source,
      target: l.target,
      sourceHandle: l.sourceHandle,
      targetHandle: l.targetHandle,
      ...l.type === void 0 ? {} : { type: l.type }
    })),
    presets: a.presets === void 0 ? [] : gl(a.presets, r),
    segmentGroups: a.segmentGroups === void 0 ? [] : gl(a.segmentGroups, r)
  };
}
function hg(a, r) {
  return a.nodes.some((l) => l.id === r);
}
function Ii(a, r, l) {
  const s = r[l];
  return s !== void 0 && hg(a, s) ? s : hg(a, l) ? l : null;
}
function K_(a) {
  return encodeURIComponent(a);
}
function k_(a, r) {
  let l = a, s = 1;
  for (; r.has(l); )
    l = `${a}~${s}`, s += 1;
  return r.add(l), l;
}
function gg(a, r, l, s) {
  return k_(
    `graph-copilot:${K_(a)}:${r}:${l}`,
    s
  );
}
function Yn(a, r) {
  return { code: "INVALID_OPERATION", operationIndex: a, message: r };
}
function Kn(a, r, l) {
  const s = a[r];
  return typeof s == "string" ? s : Yn(l, `${r} must be a string`);
}
function kn(a) {
  return typeof a != "string";
}
function Y_(a, r, l, s, u, d, f) {
  if (!Aa(r) || typeof r.op != "string")
    return Yn(l, "operation must be an object with an op string");
  switch (r.op) {
    case "add_node": {
      const v = Kn(r, "node_type", l);
      if (kn(v)) return v;
      if (r.ref !== void 0 && typeof r.ref != "string")
        return Yn(l, "ref must be a string when provided");
      if (r.params !== void 0 && !Aa(r.params))
        return Yn(l, "params must be an object when provided");
      if (r.position !== void 0 && (!Aa(r.position) || typeof r.position.x != "number" || !Number.isFinite(r.position.x) || typeof r.position.y != "number" || !Number.isFinite(r.position.y)))
        return Yn(l, "position must contain finite x and y numbers");
      const m = gg(s, "node", l, d), g = a.nodes.length, y = {
        x: 160 + g % 4 * 240,
        y: 120 + Math.floor(g / 4) * 160
      }, b = r.position;
      return a.nodes.push({
        id: m,
        type: v,
        position: b === void 0 ? y : { x: b.x, y: b.y },
        data: {
          params: r.params === void 0 ? {} : ed(r.params, f)
        }
      }), typeof r.ref == "string" && (u[r.ref] = m), null;
    }
    case "connect": {
      const v = Kn(r, "source", l), m = Kn(r, "target", l), g = Kn(r, "source_handle", l), y = Kn(r, "target_handle", l);
      if (kn(v)) return v;
      if (kn(m)) return m;
      if (kn(g)) return g;
      if (kn(y)) return y;
      const b = Ii(a, u, v), _ = Ii(a, u, m);
      if (b === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: l,
          message: `connect: unknown source node '${v}'`
        };
      if (_ === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: l,
          message: `connect: unknown target node '${m}'`
        };
      const N = g === "trigger", R = N ? "__trigger" : y;
      return a.edges.some((x) => x.source === b && x.target === _ && x.sourceHandle === g && x.targetHandle === R) ? {
        code: "DUPLICATE_EDGE",
        operationIndex: l,
        message: "connect: edge already exists"
      } : (a.edges.push({
        id: gg(s, "edge", l, d),
        source: b,
        target: _,
        sourceHandle: g,
        targetHandle: R,
        type: N ? "trigger" : "data"
      }), null);
    }
    case "set_params": {
      const v = Kn(r, "node_id", l);
      if (kn(v)) return v;
      if (!Aa(r.params))
        return Yn(l, "params must be an object");
      const m = Ii(a, u, v);
      if (m === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: l,
          message: `set_params: unknown node '${v}'`
        };
      const g = a.nodes.find((b) => b.id === m), y = Aa(g.data.params) ? g.data.params : {};
      return g.data = {
        ...g.data,
        params: {
          ...y,
          ...ed(r.params, f)
        }
      }, null;
    }
    case "remove_node": {
      const v = Kn(r, "node_id", l);
      if (kn(v)) return v;
      const m = Ii(a, u, v);
      return m === null ? {
        code: "UNKNOWN_NODE",
        operationIndex: l,
        message: `remove_node: unknown node '${v}'`
      } : (a.nodes = a.nodes.filter((g) => g.id !== m), a.edges = a.edges.filter((g) => g.source !== m && g.target !== m), null);
    }
    case "remove_edge": {
      const v = Kn(r, "source", l), m = Kn(r, "target", l);
      if (kn(v)) return v;
      if (kn(m)) return m;
      if (r.source_handle !== void 0 && typeof r.source_handle != "string")
        return Yn(l, "source_handle must be a string when provided");
      if (r.target_handle !== void 0 && typeof r.target_handle != "string")
        return Yn(l, "target_handle must be a string when provided");
      const g = Ii(a, u, v), y = Ii(a, u, m);
      if (g === null || y === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: l,
          message: "remove_edge: unknown source or target node"
        };
      const b = new Set(a.edges.filter((_) => _.source === g && _.target === y && (r.source_handle === void 0 || _.sourceHandle === r.source_handle) && (r.target_handle === void 0 || _.targetHandle === r.target_handle)).map((_) => _.id));
      return b.size === 0 ? {
        code: "UNKNOWN_EDGE",
        operationIndex: l,
        message: "remove_edge: no matching edge"
      } : (a.edges = a.edges.filter((_) => !b.has(_.id)), null);
    }
    case "clear_graph":
      a.nodes = [], a.edges = [];
      for (const v of Object.keys(u)) delete u[v];
      return null;
    case "auto_layout":
      return a.nodes.forEach((v, m) => {
        v.position = {
          x: 120 + m % 4 * 260,
          y: 100 + Math.floor(m / 4) * 180
        };
      }), null;
    default:
      return Yn(l, `unknown operation '${r.op}'`);
  }
}
function yg(a, r, l) {
  return {
    status: "error",
    variantId: a,
    variantLabel: l,
    graph: null,
    refs: {},
    missingSecretRefs: [],
    errors: [r],
    fidelity: "portable-operation-replay",
    fidelityWarnings: [],
    sensitive: !1
  };
}
function X_(a, r, l = {}) {
  const s = a.payload.spec.variants.find((b) => b.id === r);
  if (s === void 0)
    return yg(r, {
      code: "VARIANT_NOT_FOUND",
      message: `Unknown study variant '${r}'`
    });
  const u = {
    bindings: l,
    missing: /* @__PURE__ */ new Set(),
    resolved: /* @__PURE__ */ new Set()
  }, d = I_(a.payload.spec.baseline, u), f = {}, v = /* @__PURE__ */ new Set([
    ...d.nodes.map((b) => b.id),
    ...d.edges.map((b) => b.id)
  ]);
  for (let b = 0; b < s.operations.length; b += 1) {
    const _ = Y_(
      d,
      s.operations[b],
      b,
      s.id,
      f,
      v,
      u
    );
    if (_ !== null) return yg(r, _, s.label);
  }
  const m = [...u.missing].sort(), g = s.operations.some((b) => b.op === "add_node"), y = g ? [
    "Portable study v1 does not include node-definition defaults. Added nodes contain only parameters recorded in the operation, so defaults used by the original runtime may be missing.",
    "Generated node and edge ids are deterministic portable ids and may differ from ids used by the original experiment execution."
  ] : [];
  return {
    status: m.length === 0 ? "ready" : "blocked",
    variantId: r,
    variantLabel: s.label,
    graph: d,
    refs: { ...f },
    missingSecretRefs: m,
    errors: [],
    fidelity: g ? "approximate-node-defaults" : "portable-operation-replay",
    fidelityWarnings: y,
    sensitive: u.resolved.size > 0
  };
}
function td(a) {
  return Sy(a) ? !0 : Array.isArray(a) ? a.some(td) : Aa(a) && Object.values(a).some(td);
}
function Q_(a) {
  const r = {
    name: a.name,
    description: a.description,
    nodes: a.nodes,
    edges: a.edges,
    presets: a.presets,
    segmentGroups: a.segmentGroups
  };
  if (td(r))
    throw new Error("Candidate graph still contains an unresolved SecretRef");
  return JSON.stringify(r, null, 2);
}
function Uu(a) {
  try {
    return py(a);
  } catch {
    return [];
  }
}
function Z_(a) {
  const r = new Date(a);
  return Number.isNaN(r.getTime()) ? "Date unavailable" : new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(r);
}
function Ki(a) {
  if (a === void 0 || !Number.isFinite(a)) return "—";
  const r = Math.abs(a);
  return r !== 0 && (r >= 1e5 || r < 1e-4) ? a.toExponential(3) : new Intl.NumberFormat(void 0, { maximumSignificantDigits: 6 }).format(a);
}
function vg(a) {
  return a === void 0 || !Number.isFinite(a) ? "—" : `${a > 0 ? "+" : ""}${Ki(a)}`;
}
function J_(a) {
  return !Number.isFinite(a) || a < 0 ? "—" : a < 1e3 ? `${Math.round(a)} ms` : `${(a / 1e3).toFixed(a < 1e4 ? 1 : 0)} s`;
}
function F_(a) {
  return [...a.variants ?? []].sort((r, l) => r.mean === void 0 ? l.mean === void 0 ? 0 : 1 : l.mean === void 0 ? -1 : a.objective.direction === "maximize" ? l.mean - r.mean : r.mean - l.mean);
}
function bg(a) {
  var l, s;
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
    warnings: ((l = a.insights) == null ? void 0 : l.warnings) ?? [],
    paperLeads: ((s = a.insights) == null ? void 0 : s.paperIdeas) ?? [],
    runs: r
  };
}
function Hs(a, r, l) {
  const s = URL.createObjectURL(new Blob([l], { type: `${r};charset=utf-8` })), u = document.createElement("a");
  u.href = s, u.download = a, u.style.display = "none", document.body.appendChild(u), u.click(), u.remove(), URL.revokeObjectURL(s);
}
function Zr(a) {
  return a.replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "") || "graph-copilot-study";
}
function Lu({ status: a }) {
  return /* @__PURE__ */ h.jsx("span", { className: `gcp-lab-badge ${a}`, children: a });
}
function W_() {
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
function P_({ api: a }) {
  var ue, k, Q, oe, ye, ee, he, T, Y;
  const [r, l] = P.useState(() => Uu(a)), [s, u] = P.useState(() => {
    var O;
    return ((O = Uu(a)[0]) == null ? void 0 : O.id) ?? null;
  }), [d, f] = P.useState(null), [v, m] = P.useState(!1), [g, y] = P.useState(null), [b, _] = P.useState(null), [N, R] = P.useState(null), [x, H] = P.useState(!1), $ = P.useRef(null);
  P.useEffect(() => {
    const O = () => {
      const ie = Uu(a);
      l(ie), u((J) => {
        var E;
        return J && ie.some((L) => L.id === J) ? J : ((E = ie[0]) == null ? void 0 : E.id) ?? null;
      });
    };
    return window.addEventListener(Qu, O), () => window.removeEventListener(Qu, O);
  }, [a]);
  const z = r.find((O) => O.id === s) ?? r[0], K = z && (d == null ? void 0 : d.payload.id) === z.id ? d : null, ae = P.useMemo(() => z ? F_(z) : [], [z]);
  P.useEffect(() => {
    let O = !0;
    return f(null), m(!1), z ? nS(a).entries.some((J) => J.id === z.id) ? (m(!0), Xh(a, z.id).then((J) => {
      O && f(J);
    }).catch((J) => {
      O && y(`Portable study could not be verified: ${String(J)}`);
    }).finally(() => {
      O && m(!1);
    }), () => {
      O = !1;
    }) : () => {
      O = !1;
    } : () => {
      O = !1;
    };
  }, [a, z == null ? void 0 : z.id]);
  const X = async (O) => {
    var J;
    const ie = (J = O.currentTarget.files) == null ? void 0 : J[0];
    if (O.currentTarget.value = "", !!ie) {
      R(null), y(null);
      try {
        if (typeof ie.size == "number" && ie.size > Ws)
          throw new Error(`Portable study exceeds the ${Ws} byte import limit`);
        const E = await tS(await ie.text());
        _(E);
      } catch (E) {
        _(null), R(`Import rejected before storage: ${String(E)}`);
      }
    }
  }, ne = async () => {
    if (!b) return;
    H(!0), R(null);
    let O = !1;
    try {
      if (py(a).some((E) => E.id === b.payload.id))
        throw new Error(
          `A local Experiment Lab report already uses study id '${b.payload.id}'; import was refused to avoid overwriting local evidence.`
        );
      const ie = G_(b), J = await cy(a, b);
      O = !0, await my(a, ie, { rejectIfExists: !0 }), u(ie.id), f(b), _(null), y(J.status === "unchanged" ? "This content-integrity-checked portable study was already stored; its read-only report was added." : "Portable study imported for read-only review. SHA-256 checks content changes only; it does not authenticate authorship. No graph was executed or applied.");
    } catch (ie) {
      R(O ? `The content-integrity-checked bundle was stored, but its read-only Lab report could not be saved. Retry the import: ${String(ie)}` : `Portable study was not imported: ${String(ie)}`);
    } finally {
      H(!1);
    }
  }, G = async () => {
    if (z)
      try {
        const O = K ?? await Xh(a, z.id);
        f(O), Hs(
          `${Zr(z.id)}-portable-study.json`,
          "application/json",
          await pd(O)
        ), y("Portable study content integrity checked before export; SHA-256 does not authenticate authorship.");
      } catch (O) {
        y(`Portable study export failed: ${String(O)}`);
      }
  }, ce = (O, ie) => {
    var J;
    if (K)
      try {
        const E = X_(K, O);
        if (E.status === "error" || !E.graph)
          throw new Error(((J = E.errors[0]) == null ? void 0 : J.message) ?? "Candidate could not be reconstructed");
        Hs(
          `${Zr(K.payload.id)}-${Zr(ie)}-graph.json`,
          "application/json",
          Q_(E.graph)
        );
        const L = E.status === "blocked" ? `Candidate graph downloaded with ${E.missingSecretRefs.length} unresolved secret value(s) left blank.` : "Candidate graph materialized from the content-integrity-checked portable operation record and downloaded.";
        y(E.fidelityWarnings.length === 0 ? L : `${L} Fidelity warning: ${E.fidelityWarnings.join(" ")}`);
      } catch (E) {
        y(`Candidate graph export failed: ${String(E)}`);
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
          var O;
          return (O = $.current) == null ? void 0 : O.click();
        }, children: "Import portable study" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            ref: $,
            type: "file",
            accept: "application/json,.json",
            "aria-label": "Choose portable study file",
            hidden: !0,
            onChange: (O) => {
              X(O);
            }
          }
        )
      ] })
    ] }),
    N && !b && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message error", role: "alert", children: N }),
    g && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message", role: "status", children: g }),
    r.length === 0 || !z ? /* @__PURE__ */ h.jsx(W_, {}) : /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-layout", children: [
      /* @__PURE__ */ h.jsx("aside", { className: "gcp-lab-studies", "aria-label": "Experiment studies", children: r.map((O) => {
        var ie, J, E;
        return /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: `gcp-study-card${O.id === z.id ? " active" : ""}`,
            onClick: () => {
              y(null), u(O.id);
            },
            "aria-pressed": O.id === z.id,
            children: [
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-top", children: [
                /* @__PURE__ */ h.jsx(Lu, { status: O.status }),
                /* @__PURE__ */ h.jsx("time", { dateTime: O.createdAt, children: Z_(O.createdAt) })
              ] }),
              /* @__PURE__ */ h.jsx("strong", { children: O.hypothesis || "Untitled study" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-meta", children: [
                ((ie = O.objective) == null ? void 0 : ie.direction) === "minimize" ? "↓" : "↑",
                " ",
                ((J = O.objective) == null ? void 0 : J.metric) || "metric",
                /* @__PURE__ */ h.jsx("span", { "aria-hidden": "true", children: " · " }),
                ((E = O.variants) == null ? void 0 : E.length) ?? 0,
                " candidates"
              ] })
            ]
          },
          O.id
        );
      }) }),
      /* @__PURE__ */ h.jsxs("article", { className: "gcp-lab-report", "aria-label": `Experiment report: ${z.hypothesis}`, children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-report-head", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Study hypothesis" }),
            /* @__PURE__ */ h.jsx("h2", { children: z.hypothesis })
          ] }),
          /* @__PURE__ */ h.jsx(Lu, { status: z.status })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-export-actions", "aria-label": "Export study evidence", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Hs(
                `${Zr(z.id)}-runs.csv`,
                "text/csv",
                H0(bg(z))
              ),
              children: "Export runs CSV"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Hs(
                `${Zr(z.id)}-research.md`,
                "text/markdown",
                q0(bg(z))
              ),
              children: "Export research brief"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              disabled: !K || v,
              title: K ? "Export the SHA-256 content-integrity-checked baseline, variants, provenance, and run records" : "No portable bundle is available for this legacy summary",
              onClick: () => {
                G();
              },
              children: v ? "Verifying portable study…" : "Export portable study"
            }
          )
        ] }),
        K && /* @__PURE__ */ h.jsxs("p", { className: "gcp-lab-integrity", children: [
          "Content integrity checked · SHA-256 ",
          K.integrity.contentSha256.slice(0, 12),
          "… · authorship unverified"
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-summary-grid", children: [
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card", "aria-labelledby": "gcp-study-objective", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon objective", "aria-hidden": "true", children: "◎" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-objective", children: "Study objective" }),
              /* @__PURE__ */ h.jsxs("strong", { children: [
                z.objective.direction === "maximize" ? "Maximize" : "Minimize",
                " ",
                z.objective.metric
              ] }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                z.repetitions,
                " ",
                z.repetitions === 1 ? "run" : "runs",
                " per candidate"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card winner", "aria-labelledby": "gcp-study-winner", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon winner", "aria-hidden": "true", children: "★" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-winner", children: "Winning candidate" }),
              /* @__PURE__ */ h.jsx("strong", { children: z.winnerLabel ?? "No winner resolved" }),
              /* @__PURE__ */ h.jsx("span", { children: z.winnerId ? `${Ki((ue = z.variants.find((O) => O.id === z.winnerId)) == null ? void 0 : ue.mean)} mean score` : "Check warnings for missing evidence" })
            ] })
          ] })
        ] }),
        z.search && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-search-plan", "aria-label": "Deterministic parameter search plan", children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Reproducible planner" }),
          /* @__PURE__ */ h.jsx("strong", { children: z.search.strategy === "grid" ? "Complete grid" : "Seeded random" }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            z.search.generatedCandidateCount,
            " generated candidates · ",
            " ",
            z.search.totalDomainAssignments,
            " domain assignments · ",
            " ",
            z.search.totalExecutionCount,
            " executions",
            z.search.plannerSeed === void 0 ? "" : ` · planner seed ${z.search.plannerSeed} (${z.search.prngVersion})`
          ] }),
          /* @__PURE__ */ h.jsx("small", { children: z.search.seedDescription })
        ] }),
        ((Q = (k = z.insights) == null ? void 0 : k.summary) == null ? void 0 : Q.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-findings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-findings", children: "Key findings" }) }),
          /* @__PURE__ */ h.jsx("ul", { className: "gcp-lab-findings", children: z.insights.summary.map((O, ie) => /* @__PURE__ */ h.jsx("li", { children: O }, `${ie}-${O}`)) })
        ] }),
        /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-candidate-leaderboard", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-candidate-leaderboard", children: "Candidate leaderboard" }),
            /* @__PURE__ */ h.jsx("span", { children: z.objective.direction === "maximize" ? "Higher is better" : "Lower is better" })
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
            /* @__PURE__ */ h.jsx("tbody", { children: ae.map((O, ie) => {
              var E, L;
              const J = O.id === z.winnerId;
              return /* @__PURE__ */ h.jsxs("tr", { className: J ? "winner" : void 0, children: [
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx("span", { className: "gcp-rank", children: O.mean === void 0 ? "—" : ie + 1 }) }),
                /* @__PURE__ */ h.jsxs("td", { children: [
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-candidate-name", children: [
                    /* @__PURE__ */ h.jsx("strong", { children: O.label }),
                    J && /* @__PURE__ */ h.jsx("span", { className: "gcp-winner-tag", children: "Winner" }),
                    O.status !== "completed" && /* @__PURE__ */ h.jsx(Lu, { status: O.status })
                  ] }),
                  O.operationSummary && O.operationSummary.length > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-operations", children: O.operationSummary.join(" · ") }),
                  ((E = O.errors) == null ? void 0 : E.length) > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-error", children: O.errors[0] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: Ki(O.mean) }),
                  O.baselineComparison && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "improvement ",
                    vg(O.baselineComparison.objectiveImprovement),
                    O.baselineComparison.hedgesG === void 0 ? "" : ` · g ${vg(O.baselineComparison.hedgesG)}`
                  ] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: O.stddev === void 0 ? "—" : `± ${Ki(O.stddev)}` }),
                  O.confidenceInterval95 && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "95% CI [",
                    Ki(O.confidenceInterval95.lower),
                    ", ",
                    Ki(O.confidenceInterval95.upper),
                    "]"
                  ] })
                ] }),
                /* @__PURE__ */ h.jsx("td", { children: ((L = O.metricValues) == null ? void 0 : L.length) ?? 0 }),
                /* @__PURE__ */ h.jsx("td", { children: J_(O.runtimeMs) }),
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    type: "button",
                    className: "gcp-candidate-download",
                    disabled: !K,
                    title: K ? "Materialize a graph JSON without changing the canvas; recorded fidelity warnings will be shown" : "This legacy summary has no portable candidate specification",
                    onClick: () => ce(O.id, O.label),
                    children: "Download"
                  }
                ) })
              ] }, O.id);
            }) })
          ] }) })
        ] }),
        (((ye = (oe = z.insights) == null ? void 0 : oe.warnings) == null ? void 0 : ye.length) > 0 || z.applyConflict) && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-warnings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-warnings", children: "Evidence warnings" }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-warnings", children: [
            z.applyConflict && /* @__PURE__ */ h.jsx("p", { role: "alert", children: z.applyConflict }),
            (he = (ee = z.insights) == null ? void 0 : ee.warnings) == null ? void 0 : he.map((O, ie) => /* @__PURE__ */ h.jsx("p", { role: "alert", children: O }, `${ie}-${O}`))
          ] })
        ] }),
        ((Y = (T = z.insights) == null ? void 0 : T.paperIdeas) == null ? void 0 : Y.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-paper-ideas", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-paper-ideas", children: "Paper ideas" }),
            /* @__PURE__ */ h.jsx("span", { children: "Research leads, not final claims" })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "gcp-paper-grid", children: z.insights.paperIdeas.map((O, ie) => /* @__PURE__ */ h.jsxs("article", { className: "gcp-paper-card", children: [
            /* @__PURE__ */ h.jsxs("span", { className: "gcp-paper-index", children: [
              "0",
              ie + 1
            ] }),
            /* @__PURE__ */ h.jsx("h4", { children: O.title }),
            /* @__PURE__ */ h.jsxs("dl", { children: [
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("dt", { children: "Evidence" }),
                /* @__PURE__ */ h.jsx("dd", { children: O.evidence })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("dt", { children: "Next step" }),
                /* @__PURE__ */ h.jsx("dd", { children: O.nextStep })
              ] })
            ] })
          ] }, `${ie}-${O.title}`)) })
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
              ne();
            }, disabled: x, children: x ? "Importing…" : "Import read-only" })
          ] })
        ]
      }
    ) })
  ] });
}
function eE(a) {
  const r = Date.now() - a, l = Math.floor(r / 1e3);
  if (l < 60) return "just now";
  const s = Math.floor(l / 60);
  if (s < 60) return `${s}m ago`;
  const u = Math.floor(s / 60);
  if (u < 24) return `${u}h ago`;
  const d = Math.floor(u / 24);
  return d < 7 ? `${d}d ago` : `${Math.floor(d / 7)}w ago`;
}
function tE({ api: a, activeId: r, onResume: l, onNew: s }) {
  const [u, d] = P.useState(
    () => Hu(a)
  ), [f, v] = P.useState(null), m = (y, b) => {
    y.stopPropagation(), f === b ? (u0(a, b), d(Hu(a)), f === b && v(null)) : v(b);
  }, g = () => {
    v(null);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-history", children: [
    /* @__PURE__ */ h.jsx("div", { className: "gcp-history-top", children: /* @__PURE__ */ h.jsx(
      "button",
      {
        className: "gcp-new-btn",
        onClick: s,
        "aria-label": "Start new conversation",
        children: "+ New chat"
      }
    ) }),
    u.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "gcp-history-empty", children: "No conversations yet" }) : /* @__PURE__ */ h.jsx("div", { className: "gcp-history-list", onClick: g, children: u.map((y) => /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: `gcp-history-item${y.id === r ? " active" : ""}`,
        onClick: () => l(y),
        role: "button",
        tabIndex: 0,
        "aria-label": `Resume conversation: ${y.title || "(untitled)"}`,
        onKeyDown: (b) => {
          (b.key === "Enter" || b.key === " ") && (b.preventDefault(), l(y));
        },
        children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-history-info", children: [
            /* @__PURE__ */ h.jsx("div", { className: "gcp-history-title", children: y.title || "(untitled)" }),
            /* @__PURE__ */ h.jsxs("div", { className: "gcp-history-meta", children: [
              eE(y.updatedAt),
              " · ",
              y.provider,
              "/",
              y.model || "—",
              y.reasoningEffort ? ` · ${y.reasoningEffort} effort` : ""
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: `gcp-history-delete${f === y.id ? " confirm" : ""}`,
              onClick: (b) => m(b, y.id),
              "aria-label": f === y.id ? `Confirm delete "${y.title || "untitled"}"` : `Delete "${y.title || "untitled"}"`,
              title: f === y.id ? "Click again to confirm" : "Delete",
              children: "✕"
            }
          )
        ]
      },
      y.id
    )) })
  ] });
}
let yl = 0, nd = 0, el = null;
function Jr() {
  return yl += 1, nd += 1, el = null, yl;
}
function Gs(a) {
  return a === yl;
}
async function ad(a) {
  const r = yl;
  let l = el;
  (l === null || l.generation !== r) && (l = {
    generation: r,
    sequence: ++nd,
    promise: Promise.resolve().then(a)
  }, el = l);
  try {
    const s = await l.promise;
    return l.generation === yl && l.sequence === nd ? s : null;
  } finally {
    el === l && (el = null);
  }
}
const Sg = {
  openai: "OpenAI API",
  "openai-codex": "OpenAI Codex (ChatGPT)",
  openrouter: "OpenRouter",
  anthropic: "Claude API",
  custom: "Custom (OpenAI-compatible)"
}, nE = [
  "openai",
  "openrouter",
  "anthropic",
  "custom"
], aE = 2e3, iE = 300 * 1e3, Fr = {
  reasoningEffort: !1,
  richModelCatalog: !1
};
function rE({
  value: a,
  onBlur: r,
  placeholder: l,
  "aria-label": s
}) {
  const [u, d] = P.useState(!1), [f, v] = P.useState(a);
  return P.useEffect(() => {
    v(a);
  }, [a]), /* @__PURE__ */ h.jsxs("div", { className: "gcp-key-row", children: [
    /* @__PURE__ */ h.jsx(
      "input",
      {
        type: u ? "text" : "password",
        className: "gcp-input",
        value: f,
        onChange: (m) => v(m.target.value),
        onBlur: () => r(f),
        placeholder: l ?? "API key",
        "aria-label": s,
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
function lE({
  api: a,
  settings: r,
  codexLoggedIn: l,
  codexEmail: s,
  onCodexStatusChange: u,
  onChange: d
}) {
  var fn, En, Fn;
  const f = r.provider, v = f === "openai" ? r.apiKeys.openai : f === "openrouter" ? r.apiKeys.openrouter : f === "anthropic" ? r.apiKeys.anthropic : f === "custom" ? r.apiKeys.custom : void 0, m = f === "custom" ? r.customBaseUrl : void 0, g = qs(
    f,
    f === "openai-codex" ? s ?? (l ? "active-codex-session" : "") : v,
    m
  ), [y, b] = P.useState({ provider: f, identity: g, models: [] }), [_, N] = P.useState(!1), [R, x] = P.useState(null), H = P.useRef(0), $ = P.useRef(r), z = P.useRef(d), K = P.useRef(u), ae = P.useRef(l), X = P.useRef(s), ne = P.useRef(l), [G, ce] = P.useState(null), [ue, k] = P.useState(!1), Q = P.useRef(null), oe = P.useRef(0);
  $.current = r, z.current = d, K.current = u, ae.current = l, X.current = s;
  const ye = r.models[f] ?? "", ee = Ag(
    f,
    y.provider === f && y.identity === g ? y.models : [],
    ye
  ), he = Ys(f, ye, ee), Y = ((En = (fn = r.providerCapabilities) == null ? void 0 : fn[f]) == null ? void 0 : En.reasoningEffort) === !0 ? (he == null ? void 0 : he.reasoningEfforts) ?? [] : [];
  P.useEffect(() => () => {
    Q.current !== null && (clearInterval(Q.current), Q.current = null);
  }, []), P.useEffect(() => {
    let W = !0;
    return f === "openai-codex" && ad(() => Gu(a)).then((pe) => {
      if (W && pe !== null) {
        const ke = pe.status === "logged_in", it = ke ? pe.email ?? null : null;
        (ke !== ae.current || it !== X.current) && (Wr("openai-codex"), te("openai-codex", [], Fr)), K.current(ke, it);
      }
    }).catch(() => {
    }), () => {
      W = !1;
    };
  }, [a, f]), P.useEffect(() => {
    ne.current && !l && Wr("openai-codex"), ne.current = l;
  }, [l]);
  function O(W) {
    const pe = { ...$.current, ...W };
    $.current = pe, z.current(pe);
  }
  function ie(W) {
    var Fe, ti;
    const pe = $.current, ke = { ...pe.reasoningEfforts }, it = ke[f], ft = Ys(f, W, ee), Et = !!((Fe = ft == null ? void 0 : ft.reasoningEfforts) != null && Fe.some(
      (Pi) => Pi.effort === it
    ));
    it && (ft != null && ft.reasoningEfforts) && !Et && delete ke[f];
    const Tt = (ti = pe.providerCapabilities) == null ? void 0 : ti[f], an = Tt ? {
      reasoningEffort: Tt.reasoningEffort,
      richModelCatalog: Tt.richModelCatalog,
      ...it && Et ? { reasoningModel: W } : {}
    } : void 0;
    O({
      models: { ...pe.models, [f]: W },
      reasoningEfforts: ke,
      ...an ? {
        providerCapabilities: {
          ...pe.providerCapabilities,
          [f]: an
        }
      } : {}
    });
  }
  function J(W) {
    const pe = $g(
      $.current,
      f,
      W
    );
    $.current = pe, z.current(pe);
  }
  function E(W, pe) {
    const ke = $.current, it = { ...ke.providerCapabilities };
    delete it[W], O({
      apiKeys: { ...ke.apiKeys, [W]: pe },
      providerCapabilities: it
    });
  }
  function L(W) {
    return W === "openai" ? $.current.apiKeys.openai : W === "openrouter" ? $.current.apiKeys.openrouter : W === "anthropic" ? $.current.apiKeys.anthropic : W === "custom" ? $.current.apiKeys.custom : void 0;
  }
  function Z(W) {
    return qs(
      W,
      W === "openai-codex" ? X.current ?? (ae.current ? "active-codex-session" : "") : L(W),
      W === "custom" ? $.current.customBaseUrl : void 0
    );
  }
  function te(W, pe, ke, it) {
    const ft = $.current, Et = Vu(
      ft,
      W,
      pe,
      ke,
      it
    );
    Et !== ft && ($.current = Et, z.current(Et));
  }
  async function fe(W, pe = f) {
    const ke = L(pe), it = pe === "custom" ? $.current.customBaseUrl : void 0, ft = pe === "openai-codex" ? ae.current : pe === "custom" ? !!it : !!ke, Et = Z(pe), Tt = ++H.current;
    if (!ft) {
      N(!1), x(null), b({ provider: pe, identity: Et, models: [] }), te(pe, [], Fr);
      return;
    }
    const an = Et;
    if (!W) {
      const Fe = Ng(an);
      if (Fe) {
        if (H.current !== Tt) return;
        b({ provider: pe, identity: Et, models: Fe.models }), te(
          pe,
          Fe.models,
          Fe.capabilities,
          Fe.source
        ), x(null), N(!1);
        return;
      }
    }
    N(!0), x(null);
    try {
      const Fe = await Rg(
        a,
        pe,
        ke,
        it
      );
      if (H.current !== Tt) return;
      jg(an, Fe), b({ provider: pe, identity: Et, models: Fe.models }), te(
        pe,
        Fe.models,
        Fe.capabilities,
        Fe.source
      );
    } catch (Fe) {
      if (H.current !== Tt) return;
      x(String(Fe));
    } finally {
      H.current === Tt && N(!1);
    }
  }
  P.useEffect(() => {
    if (++H.current, N(!1), x(null), b(
      (W) => W.provider === f && W.identity === g ? W : { provider: f, identity: g, models: [] }
    ), f === "custom") {
      te(f, [], Fr);
      return;
    }
    return fe(!1, f), () => {
      ++H.current;
    };
  }, [a, f, v, m, l, s]);
  function Ee() {
    fe(!0);
  }
  async function Te() {
    const W = Jr();
    try {
      const pe = await x0(a);
      if (!Gs(W)) return;
      window.open(pe, "_blank"), k(!0), oe.current = Date.now(), Q.current = setInterval(async () => {
        try {
          const ke = await ad(() => Gu(a));
          ke !== null && Gs(W) && ke.status === "logged_in" && (Jr(), Wr("openai-codex"), te("openai-codex", [], Fr), K.current(!0, ke.email ?? null), k(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null));
        } catch {
        }
        if (Date.now() - oe.current > iE) {
          if (!Gs(W)) return;
          Jr(), k(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null);
        }
      }, aE);
    } catch (pe) {
      ce(String(pe));
    }
  }
  async function at() {
    const W = Jr();
    k(!1), Q.current !== null && (clearInterval(Q.current), Q.current = null);
    try {
      if (await A0(a), !Gs(W)) return;
      Jr(), Wr("openai-codex"), ++H.current, b({
        provider: "openai-codex",
        identity: qs("openai-codex"),
        models: []
      }), x(null), te("openai-codex", [], Fr), K.current(!1, null);
    } catch (pe) {
      ce(String(pe));
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
          onChange: (W) => O({ provider: W.target.value }),
          "aria-label": "Select LLM provider",
          children: Object.keys(Sg).map((W) => /* @__PURE__ */ h.jsx("option", { value: W, children: Sg[W] }, W))
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
            onChange: (W) => ie(W.target.value),
            placeholder: "model id",
            "aria-label": "Model ID",
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ h.jsx("datalist", { id: Ve, children: ee.map((W) => /* @__PURE__ */ h.jsx("option", { value: W.id, label: W.label }, W.id)) }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            className: "gcp-load-btn",
            onClick: Ee,
            disabled: _,
            "aria-label": "Load available models from provider",
            title: "Refresh model list",
            children: _ ? "Refreshing..." : "Refresh"
          }
        )
      ] }),
      R && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: R })
    ] }),
    Y.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-reasoning-effort", children: "Reasoning effort" }),
      /* @__PURE__ */ h.jsxs(
        "select",
        {
          id: "gcp-reasoning-effort",
          className: "gcp-select",
          value: ((Fn = r.reasoningEfforts) == null ? void 0 : Fn[f]) ?? "",
          onChange: (W) => J(W.target.value),
          "aria-label": "Reasoning effort",
          children: [
            /* @__PURE__ */ h.jsxs("option", { value: "", children: [
              "Model default",
              he != null && he.defaultReasoningEffort ? ` (${he.defaultReasoningEffort})` : ""
            ] }),
            Y.map((W) => /* @__PURE__ */ h.jsx(
              "option",
              {
                value: W.effort,
                title: W.description,
                children: W.effort
              },
              W.effort
            ))
          ]
        }
      )
    ] }),
    f !== "openai-codex" && nE.filter((W) => W === f || f === "custom" && W === "custom").map(
      (W) => W === f ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
        /* @__PURE__ */ h.jsx("label", { className: "gcp-label", children: W === "openai" ? "OpenAI API Key" : W === "anthropic" ? "Anthropic API Key" : W === "openrouter" ? "OpenRouter API Key" : "Custom API Key" }),
        /* @__PURE__ */ h.jsx(
          rE,
          {
            value: r.apiKeys[W] ?? "",
            onBlur: (pe) => E(W, pe),
            placeholder: W === "custom" ? "API key (optional)" : "sk-...",
            "aria-label": W === "openai" ? "OpenAI API key" : W === "anthropic" ? "Anthropic API key" : W === "openrouter" ? "OpenRouter API key" : "Custom API key"
          }
        )
      ] }, W) : null
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
          onChange: (W) => O({ customBaseUrl: W.target.value }),
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
            className: `gcp-codex-status${l ? " signed-in" : ue ? " pending" : ""}`,
            role: "status",
            "aria-live": "polite",
            children: l ? `Signed in${s ? ` as ${s}` : ""}` : ue ? "Sign-in pending... (waiting for browser auth)" : "Not signed in"
          }
        ),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-codex-btns", children: [
          !l && /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "gcp-codex-btn",
              onClick: Te,
              disabled: ue,
              "aria-label": "Sign in with ChatGPT Codex",
              children: ue ? "Waiting..." : "Sign in"
            }
          ),
          l && /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "gcp-codex-btn danger",
              onClick: at,
              "aria-label": "Sign out from ChatGPT Codex",
              children: "Sign out"
            }
          )
        ] }),
        G && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: G })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "gcp-footnote", children: "Keys are stored in this browser's localStorage and sent only to your local CodefyUI backend, which forwards them to the selected provider." })
  ] });
}
function sE() {
  return /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }) });
}
function oE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M9 3h6M10 3v5l-5.2 9a2.7 2.7 0 0 0 2.34 4h9.72a2.7 2.7 0 0 0 2.34-4L14 8V3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M7.5 15h9", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function cE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function uE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function dE({ expanded: a }) {
  return a ? /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function fE() {
  return /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "m6 6 12 12M18 6 6 18", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round" }) });
}
function _g(a) {
  var r, l;
  try {
    const s = (l = (r = a.graph) == null ? void 0 : r.getGraph) == null ? void 0 : l.call(r);
    return s ? {
      nodes: Array.isArray(s.nodes) ? s.nodes.length : 0,
      edges: Array.isArray(s.edges) ? s.edges.length : 0,
      available: !0
    } : { nodes: 0, edges: 0, available: !1 };
  } catch {
    return { nodes: 0, edges: 0, available: !1 };
  }
}
function pE({
  api: a,
  settings: r,
  codexLoggedIn: l,
  codexEmail: s,
  conversation: u,
  onConversationChange: d,
  onSettingsChange: f,
  onCodexStatusChange: v,
  onNewConversation: m,
  onResumeConversation: g,
  onClose: y
}) {
  const [b, _] = P.useState("chat"), [N, R] = P.useState("compact"), [x, H] = P.useState(() => _g(a));
  P.useEffect(() => {
    var ce, ue;
    const G = () => H(_g(a));
    G();
    try {
      return (ue = (ce = a.graph) == null ? void 0 : ce.onGraphChanged) == null ? void 0 : ue.call(ce, G);
    } catch {
      return;
    }
  }, [a]);
  const $ = (G) => {
    g(G), _("chat");
  }, z = () => {
    m(), _("chat");
  }, K = (G) => {
    _((ce) => ce === G && G !== "chat" ? "chat" : G);
  }, ae = r.models[r.provider] ?? "", X = Number.isFinite(a.apiVersion) ? `API v${a.apiVersion}` : "API legacy", ne = [
    { id: "chat", label: "Chat", ariaLabel: "Agent chat", icon: /* @__PURE__ */ h.jsx(sE, {}) },
    { id: "experiments", label: "Lab", ariaLabel: "Experiments lab", icon: /* @__PURE__ */ h.jsx(oE, {}) },
    { id: "history", label: "History", ariaLabel: "Conversation history", icon: /* @__PURE__ */ h.jsx(cE, {}) },
    { id: "settings", label: "Settings", ariaLabel: "Settings", icon: /* @__PURE__ */ h.jsx(uE, {}) }
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
                  title: `Provider: ${r.provider}${ae ? ` · ${ae}` : ""} — click to change`,
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-model-dot", "aria-hidden": "true" }),
                    ae || "Set up model"
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "gcp-icon-btn",
                  onClick: () => R((G) => G === "compact" ? "expanded" : "compact"),
                  "aria-label": N === "compact" ? "Expand panel" : "Use compact panel",
                  title: N === "compact" ? "Expand workspace" : "Compact workspace",
                  children: /* @__PURE__ */ h.jsx(dE, { expanded: N === "expanded" })
                }
              ),
              /* @__PURE__ */ h.jsx("button", { className: "gcp-icon-btn", onClick: y, "aria-label": "Close panel", title: "Close", children: /* @__PURE__ */ h.jsx(fE, {}) })
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
          /* @__PURE__ */ h.jsx("nav", { className: "gcp-workbench-nav", "aria-label": "Agent workbench views", children: ne.map((G) => /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: `gcp-nav-btn${b === G.id ? " active" : ""}`,
              onClick: () => K(G.id),
              "aria-label": G.ariaLabel,
              "aria-current": b === G.id ? "page" : void 0,
              children: [
                G.icon,
                /* @__PURE__ */ h.jsx("span", { children: G.label })
              ]
            },
            G.id
          )) })
        ] }),
        /* @__PURE__ */ h.jsxs("main", { className: "gcp-view", children: [
          b === "chat" && /* @__PURE__ */ h.jsx(
            D_,
            {
              api: a,
              settings: r,
              codexLoggedIn: l,
              conversation: u,
              onConversationChange: d,
              onSettingsChange: f,
              onOpenSettings: () => _("settings"),
              onOpenHistory: () => _("history")
            }
          ),
          b === "experiments" && /* @__PURE__ */ h.jsx(P_, { api: a }),
          b === "history" && /* @__PURE__ */ h.jsx(tE, { api: a, activeId: u.id, onResume: $, onNew: z }),
          b === "settings" && /* @__PURE__ */ h.jsx(
            lE,
            {
              api: a,
              settings: r,
              codexLoggedIn: l,
              codexEmail: s,
              onCodexStatusChange: v,
              onChange: f
            }
          )
        ] })
      ]
    }
  );
}
function mE({ api: a }) {
  const [r, l] = P.useState(!1), [s, u] = P.useState(() => s0(a)), [d, f] = P.useState(!1), [v, m] = P.useState(null), [g, y] = P.useState(
    () => $h(
      s.provider,
      s.models[s.provider] ?? "",
      Xs(s)
    )
  );
  P.useEffect(() => {
    o0(a, s);
  }, [a, s]), P.useEffect(() => {
    if (s.provider !== "openai-codex") return;
    let x = !1;
    return ad(() => Gu(a)).then((H) => {
      if (x || H === null) return;
      const $ = H.status === "logged_in", z = $ ? H.email ?? null : null;
      ($ !== d || z !== v) && u((K) => Vu(
        K,
        "openai-codex",
        [],
        { reasoningEffort: !1, richModelCatalog: !1 }
      )), $ || Wr("openai-codex"), f($), m(z);
    }).catch(() => {
    }), () => {
      x = !0;
    };
  }, [a, s.provider]), P.useEffect(() => {
    const x = s.provider;
    if (x === "custom") return;
    const H = x === "openai" ? s.apiKeys.openai : x === "openrouter" ? s.apiKeys.openrouter : x === "anthropic" ? s.apiKeys.anthropic : void 0;
    if (!(x === "openai-codex" ? d : !!H)) return;
    const z = qs(
      x,
      x === "openai-codex" ? v ?? "active-codex-session" : H
    );
    let K = !1;
    const ae = (ne) => {
      K || u((G) => {
        if (G.provider !== x) return G;
        const ce = x === "openai" ? G.apiKeys.openai : x === "openrouter" ? G.apiKeys.openrouter : x === "anthropic" ? G.apiKeys.anthropic : void 0;
        return x !== "openai-codex" && ce !== H ? G : Vu(
          G,
          x,
          ne.models,
          ne.capabilities,
          ne.source
        );
      });
    }, X = Ng(z);
    return X ? (ae(X), () => {
      K = !0;
    }) : (Rg(a, x, H).then((ne) => {
      K || (jg(z, ne), ae(ne));
    }).catch(() => {
    }), () => {
      K = !0;
    });
  }, [
    a,
    s.provider,
    s.apiKeys.openai,
    s.apiKeys.openrouter,
    s.apiKeys.anthropic,
    d,
    v
  ]);
  const b = (x) => {
    u(x);
  }, _ = (x, H) => {
    f(x), m(H);
  }, N = () => {
    y(
      $h(
        s.provider,
        s.models[s.provider] ?? "",
        Xs(s)
      )
    );
  }, R = (x) => {
    y(x);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-root", children: [
    /* @__PURE__ */ h.jsx(p0, { onClick: () => l((x) => !x) }),
    r && /* @__PURE__ */ h.jsx(
      pE,
      {
        api: a,
        settings: s,
        codexLoggedIn: d,
        codexEmail: v,
        conversation: g,
        onConversationChange: y,
        onSettingsChange: b,
        onCodexStatusChange: _,
        onNewConversation: N,
        onResumeConversation: R,
        onClose: () => l(!1)
      }
    )
  ] });
}
function gE(a) {
  const r = a.ui.addFloatingWidget({ id: "copilot" });
  kb.createRoot(r).render(
    /* @__PURE__ */ h.jsx(Bb.StrictMode, { children: /* @__PURE__ */ h.jsx(mE, { api: a }) })
  );
}
export {
  gE as default
};
