(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`.gcp-root{--gcp-canvas: var(--surface-canvas, #0f1319);--gcp-bg: var(--surface-app, #151a22);--gcp-panel: var(--surface-panel, #1c222c);--gcp-surface: var(--surface-raised, #242b37);--gcp-input-bg: var(--surface-input, #2c3441);--gcp-hover: var(--surface-hover, #353d4b);--gcp-active: var(--surface-active, #404959);--gcp-scrim: var(--surface-scrim, rgba(6, 9, 13, .72));--gcp-text: var(--text-primary, #f0f4f8);--gcp-dim: var(--text-secondary, #c6d0da);--gcp-muted: var(--text-muted, #aeb9c6);--gcp-disabled: var(--text-disabled, #6b7684);--gcp-accent-ink: var(--text-on-accent, #04212b);--gcp-border-soft: var(--border-subtle, #262e3a);--gcp-border: var(--border-base, #313a48);--gcp-border-strong: var(--border-strong, #6b7787);--gcp-focus: var(--border-focus, #22d3ee);--gcp-accent: var(--accent, #22d3ee);--gcp-accent-deep: var(--accent-deep, #06b6d4);--gcp-accent-dim: var(--accent-dim, #0e7490);--gcp-accent-wash: var(--accent-wash, rgba(34, 211, 238, .12));--gcp-accent-glow: var(--accent-glow, rgba(34, 211, 238, .45));--gcp-ok: var(--status-success, #5ec269);--gcp-danger: var(--status-error, #ff6b63);--gcp-warn: var(--status-warning, #ffc94d);--gcp-info: var(--status-info, #6aa9ff);--gcp-ok-wash: var(--success-wash, rgba(94, 194, 105, .14));--gcp-danger-wash: var(--danger-wash, rgba(255, 107, 99, .14));--gcp-warn-wash: var(--warning-wash, rgba(255, 201, 77, .14));--gcp-info-wash: var(--info-wash, rgba(106, 169, 255, .14));--gcp-wire: var(--wire, #5b6c82);--gcp-wire-active: var(--wire-active, #22d3ee);--gcp-fs-2xs: var(--fs-2xs, .6875rem);--gcp-fs-xs: var(--fs-xs, .75rem);--gcp-fs-sm: var(--fs-sm, .8125rem);--gcp-fs-md: var(--fs-md, .875rem);--gcp-fs-lg: var(--fs-lg, 1rem);--gcp-fs-xl: var(--fs-xl, 1.125rem);--gcp-lh-tight: var(--lh-tight, 1.25);--gcp-lh-snug: var(--lh-snug, 1.4);--gcp-lh: var(--lh-normal, 1.55);--gcp-r-xs: var(--radius-sm, 4px);--gcp-r-sm: var(--radius, 6px);--gcp-r: var(--radius-lg, 8px);--gcp-r-lg: var(--radius-xl, 12px);--gcp-r-pill: var(--radius-pill, 999px);--gcp-shadow-sm: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, .4));--gcp-shadow: var(--shadow, 0 4px 12px -2px rgba(0, 0, 0, .5));--gcp-shadow-lg: var(--shadow-lg, 0 12px 32px -8px rgba(0, 0, 0, .6));--gcp-shadow-pop: var(--shadow-popover, 0 16px 40px -12px rgba(0, 0, 0, .7));--gcp-edge-hi: var(--inner-highlight, inset 0 1px 0 rgba(255, 255, 255, .05));--gcp-t-fast: var(--transition-fast, .12s ease);--gcp-t: var(--transition, .18s ease);--gcp-ease: cubic-bezier(.22, 1, .36, 1);--gcp-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;position:relative;font-family:inherit;font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-dim);box-sizing:border-box;-webkit-font-smoothing:antialiased}.gcp-root *,.gcp-root *:before,.gcp-root *:after{box-sizing:inherit}.gcp-root ::-webkit-scrollbar{width:6px;height:6px}.gcp-root ::-webkit-scrollbar-track{background:transparent}.gcp-root ::-webkit-scrollbar-thumb{background:var(--gcp-border);border-radius:3px}.gcp-root ::-webkit-scrollbar-thumb:hover{background:var(--gcp-border-strong)}.gcp-fab{width:48px;height:48px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-fab:hover{background:var(--gcp-accent);transform:translateY(-1px);box-shadow:inset 0 1px #ffffff38,0 8px 18px -6px var(--gcp-accent-glow)}.gcp-fab:active{transform:scale(.96)}.gcp-fab:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-window{position:fixed;bottom:16px;right:16px;width:min(448px,calc(100vw - 32px));height:min(690px,calc(100vh - 88px));min-height:420px;background:var(--gcp-panel);border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);display:flex;flex-direction:column;box-shadow:var(--gcp-shadow-pop),var(--gcp-edge-hi);overflow:hidden;isolation:isolate;animation:gcp-window-in .2s var(--gcp-ease) both;transition:width .26s var(--gcp-ease),height .26s var(--gcp-ease),border-radius .26s var(--gcp-ease)}.gcp-window--expanded{width:min(980px,calc(100vw - 32px));height:min(800px,calc(100vh - 32px))}@keyframes gcp-window-in{0%{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}.gcp-workbench-header{display:flex;flex-direction:column;flex-shrink:0;background:linear-gradient(180deg,var(--gcp-bg) 0%,var(--gcp-canvas) 100%);border-bottom:1px solid var(--gcp-border);box-shadow:var(--gcp-edge-hi);position:relative;z-index:3}.gcp-header-main{min-height:52px;display:flex;align-items:center;gap:12px;padding:8px 10px 6px 12px}.gcp-brand{display:flex;align-items:center;gap:9px;min-width:0;flex:1}.gcp-header-mark{width:28px;height:28px;border-radius:var(--gcp-r-sm);background:var(--gcp-accent-deep);box-shadow:inset 0 1px #ffffff38;display:inline-flex;align-items:center;justify-content:center;color:var(--gcp-accent-ink);font-size:14px;flex-shrink:0}.gcp-brand-copy{display:flex;flex-direction:column;min-width:0;line-height:var(--gcp-lh-tight)}.gcp-brand-copy strong{color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600;letter-spacing:-.01em;white-space:nowrap}.gcp-brand-copy>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:600;margin-top:2px;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}.gcp-header-actions{display:flex;align-items:center;justify-content:flex-end;gap:4px;min-width:0}.gcp-icon-btn{width:28px;height:28px;border-radius:var(--gcp-r-sm);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-icon-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-icon-btn:active{transform:scale(.94)}.gcp-icon-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-icon-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-model-chip{display:inline-flex;align-items:center;gap:6px;height:26px;max-width:150px;min-width:0;padding:0 9px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:1}.gcp-model-chip:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-model-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-model-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--gcp-ok)}.gcp-label-btn{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px 0 8px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-label-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-label-btn.active{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-label-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-bar{height:28px;display:flex;align-items:center;gap:8px;padding:0 13px;border-top:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-live-indicator{width:6px;height:6px;border-radius:50%;background:var(--gcp-disabled);flex-shrink:0}.gcp-live-indicator.online{background:var(--gcp-ok)}.gcp-context-name{color:var(--gcp-muted);font-weight:600}.gcp-context-stat{padding-left:8px;border-left:1px solid var(--gcp-border-soft)}.gcp-context-stat strong{color:var(--gcp-dim);font-weight:600;font-family:var(--gcp-mono)}.gcp-context-api{margin-left:auto;font-family:var(--gcp-mono)}.gcp-workbench-nav{display:flex;align-items:stretch;padding:0 6px}.gcp-nav-btn{flex:1;min-width:0;border:none;border-bottom:2px solid transparent;background:transparent;color:var(--gcp-muted);display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:7px 8px 6px;font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;outline:none;transition:color var(--gcp-t-fast),border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-nav-btn:hover{color:var(--gcp-dim)}.gcp-nav-btn.active{color:var(--gcp-text);border-bottom-color:var(--gcp-accent-deep)}.gcp-nav-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-nav-btn svg{flex-shrink:0}.gcp-view{flex:1;overflow:hidden;display:flex;flex-direction:column}.gcp-chat{flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative}.gcp-messages{flex:1;overflow-y:auto;padding:14px 14px 8px;display:flex;flex-direction:column;gap:12px}.gcp-welcome{margin:auto;text-align:center;padding:24px 26px;max-width:320px;display:flex;flex-direction:column;align-items:center;gap:10px}.gcp-welcome-mark{width:44px;height:44px;border-radius:var(--gcp-r-lg);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);display:flex;align-items:center;justify-content:center;font-size:20px;animation:gcp-pop .36s var(--gcp-ease) both}.gcp-welcome-title{font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text);letter-spacing:-.01em;animation:gcp-rise .36s var(--gcp-ease) 40ms both}.gcp-welcome-sub{font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh);color:var(--gcp-muted);animation:gcp-rise .36s var(--gcp-ease) 80ms both}.gcp-welcome-history{margin-top:6px;display:inline-flex;align-items:center;gap:7px;padding:6px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:500;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;animation:gcp-rise .36s var(--gcp-ease) .14s both}.gcp-welcome-history:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-welcome-history:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-welcome-suggestions{display:flex;flex-direction:column;gap:6px;width:100%;margin-top:4px;animation:gcp-rise .36s var(--gcp-ease) .11s both}.gcp-suggestion{padding:8px 11px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);background:var(--gcp-surface);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-family:inherit;line-height:var(--gcp-lh-snug);text-align:left;cursor:pointer;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),border-color var(--gcp-t-fast);outline:none}.gcp-suggestion:hover{color:var(--gcp-accent);border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-suggestion:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@keyframes gcp-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}@keyframes gcp-rise{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}.gcp-msg-row{display:flex;flex-direction:column;gap:6px;animation:gcp-rise .24s var(--gcp-ease) both}.gcp-msg-row.user{align-items:flex-end}.gcp-msg-row.assistant{align-items:flex-start}.gcp-bubble{max-width:88%;padding:8px 11px;border-radius:var(--gcp-r);line-height:var(--gcp-lh);word-break:break-word;white-space:pre-wrap;font-size:var(--gcp-fs-sm)}.gcp-msg-row.user .gcp-bubble{background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-text);border-bottom-right-radius:var(--gcp-r-xs)}.gcp-msg-row.assistant .gcp-bubble{background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-dim);border-bottom-left-radius:var(--gcp-r-xs)}.gcp-bubble pre{background:var(--gcp-canvas);border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);padding:9px 10px;overflow-x:auto;font-size:var(--gcp-fs-xs);font-family:var(--gcp-mono);margin:7px 0 2px;white-space:pre;line-height:1.5}.gcp-bubble pre:first-child{margin-top:0}.gcp-bubble pre:last-child{margin-bottom:0}.gcp-bubble code{font-family:var(--gcp-mono);font-size:var(--gcp-fs-xs)}.gcp-bubble :not(pre)>code{background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);padding:1px 5px;border-radius:var(--gcp-r-xs);font-size:var(--gcp-fs-2xs);color:var(--gcp-text)}.gcp-bubble .gcp-md-p{margin:0 0 8px}.gcp-bubble .gcp-md-p:last-child{margin-bottom:0}.gcp-md-h1,.gcp-md-h2,.gcp-md-h3{font-weight:600;color:var(--gcp-text);margin:10px 0 6px;line-height:var(--gcp-lh-snug)}.gcp-md-h1{font-size:var(--gcp-fs-md)}.gcp-md-h2{font-size:var(--gcp-fs-sm)}.gcp-md-h3{font-size:var(--gcp-fs-sm);color:var(--gcp-muted)}.gcp-md-h1:first-child,.gcp-md-h2:first-child,.gcp-md-h3:first-child{margin-top:0}.gcp-md-list{margin:2px 0 8px;padding-left:18px}.gcp-md-list:last-child{margin-bottom:0}.gcp-md-list li{margin:3px 0}.gcp-md-list li::marker{color:var(--gcp-muted)}.gcp-md-hr{border:none;border-top:1px solid var(--gcp-border-soft);margin:10px 0}.gcp-bubble a{color:var(--gcp-accent);text-decoration:underline;text-underline-offset:2px;text-decoration-color:var(--gcp-accent-dim)}.gcp-bubble a:hover{text-decoration-color:var(--gcp-accent)}.gcp-caret{display:inline-block;width:2px;height:1em;background:var(--gcp-accent);margin-left:2px;vertical-align:text-bottom;border-radius:1px;animation:gcp-blink 1s step-end infinite}@keyframes gcp-blink{0%,to{opacity:1}50%{opacity:0}}.gcp-bubble-attachments{display:flex;flex-wrap:wrap;gap:6px;max-width:88%;justify-content:inherit}.gcp-msg-row.user .gcp-bubble-attachments{justify-content:flex-end}.gcp-att-image{max-width:160px;max-height:160px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border);object-fit:cover;display:block}.gcp-att-file{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);max-width:180px}.gcp-att-file svg{color:var(--gcp-accent);flex-shrink:0}.gcp-att-file-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-ops-chip{display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);border:1px solid var(--gcp-accent-dim);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);line-height:1.5;font-variant-numeric:tabular-nums}.gcp-step-tag{display:inline-flex;align-items:center;gap:6px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-weight:600;letter-spacing:.08em;text-transform:uppercase}.gcp-step-tag-dot{width:6px;height:6px;border-radius:50%;background:var(--gcp-wire);flex-shrink:0}.gcp-stages{position:relative;display:flex;flex-direction:column;gap:2px;width:88%;padding-left:2px}.gcp-stages:before{content:"";position:absolute;left:10px;top:12px;bottom:12px;width:2px;border-radius:1px;background:var(--gcp-border)}.gcp-stage{position:relative;border-radius:var(--gcp-r-sm);overflow:hidden;animation:gcp-rise .2s var(--gcp-ease) both}.gcp-stage-head{display:flex;align-items:center;gap:8px;width:100%;min-height:28px;padding:4px 7px 4px 0;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast)}.gcp-stage-head:not(:disabled):hover{background:var(--gcp-hover)}.gcp-stage-head:disabled{cursor:default}.gcp-stage-head:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-stage-status{position:relative;z-index:1;width:18px;height:18px;margin-left:2px;border-radius:50%;background:var(--gcp-panel);border:1px solid var(--gcp-border);display:flex;align-items:center;justify-content:center;flex-shrink:0}.gcp-stage.ok .gcp-stage-status{color:var(--gcp-ok);background:var(--gcp-ok-wash);border-color:transparent}.gcp-stage.error .gcp-stage-status{color:var(--gcp-danger);background:var(--gcp-danger-wash);border-color:transparent}.gcp-stage.running .gcp-stage-status{color:var(--gcp-accent);background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim);box-shadow:0 0 6px var(--gcp-accent-glow)}.gcp-stage-spinner{width:10px;height:10px;border-radius:50%;border:2px solid transparent;border-top-color:var(--gcp-accent);border-right-color:var(--gcp-accent);animation:gcp-spin .7s linear infinite}@keyframes gcp-spin{to{transform:rotate(360deg)}}.gcp-stage-label{font-weight:600;font-size:var(--gcp-fs-xs);color:var(--gcp-dim);white-space:nowrap;flex-shrink:0;line-height:var(--gcp-lh-tight)}.gcp-stage.running .gcp-stage-label{color:var(--gcp-text)}.gcp-stage-summary{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage.error .gcp-stage-summary{color:var(--gcp-danger)}.gcp-stage-time{flex-shrink:0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-stage-chevron{color:var(--gcp-muted);flex-shrink:0;transition:transform var(--gcp-t-fast)}.gcp-stage-chevron.open{transform:rotate(90deg)}.gcp-stage-detail{margin:2px 0 4px 28px;padding:8px 10px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:1.55;max-height:180px;overflow:auto;white-space:pre-wrap;word-break:break-word}.gcp-thinking{display:flex;align-items:center;gap:8px;padding:2px 2px 6px;font-size:var(--gcp-fs-sm);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-thinking-orb{color:var(--gcp-accent);font-size:var(--gcp-fs-sm);animation:gcp-orb-pulse 1.5s ease-in-out infinite}.gcp-thinking-text{background:linear-gradient(90deg,var(--gcp-muted) 25%,var(--gcp-accent) 50%,var(--gcp-muted) 75%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gcp-shimmer 1.8s linear infinite}.gcp-thinking-time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono);font-variant-numeric:tabular-nums}@keyframes gcp-orb-pulse{0%,to{opacity:.45;transform:scale(.92)}50%{opacity:1;transform:scale(1.06)}}@keyframes gcp-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.gcp-error-row{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-danger);background:var(--gcp-danger-wash);animation:gcp-rise .2s var(--gcp-ease) both}.gcp-error-icon{color:var(--gcp-danger);margin-top:1px;flex-shrink:0;display:flex}.gcp-error-body{flex:1;min-width:0}.gcp-error-title{font-size:var(--gcp-fs-xs);font-weight:600;color:var(--gcp-danger)}.gcp-error-text{font-size:var(--gcp-fs-xs);color:var(--gcp-dim);margin-top:2px;word-break:break-word;line-height:var(--gcp-lh-snug)}.gcp-retry-btn{padding:5px 12px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast);align-self:center;flex-shrink:0}.gcp-retry-btn:hover{background:var(--gcp-danger-wash)}.gcp-retry-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-dropzone{position:absolute;top:8px;right:8px;bottom:8px;left:8px;z-index:5;border-radius:var(--gcp-r);background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;pointer-events:none;animation:gcp-fade .12s ease both}.gcp-dropzone-inner{display:flex;flex-direction:column;align-items:center;gap:10px;padding:24px 32px;border:1.5px dashed var(--gcp-accent-dim);border-radius:var(--gcp-r);color:var(--gcp-accent);font-size:var(--gcp-fs-sm);background:var(--gcp-accent-wash)}.gcp-dropzone-inner svg{width:22px;height:22px}@keyframes gcp-fade{0%{opacity:0}to{opacity:1}}.gcp-input-area{position:relative;padding:10px 12px 9px;border-top:1px solid var(--gcp-border);display:flex;flex-direction:column;gap:8px;flex-shrink:0;background:var(--gcp-bg)}.gcp-input-row{display:flex;gap:8px;align-items:flex-end}.gcp-attachments{display:flex;flex-wrap:wrap;gap:7px}.gcp-chip{position:relative;display:inline-flex;align-items:center;gap:8px;padding:5px 7px 5px 6px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border);max-width:190px;animation:gcp-pop .18s var(--gcp-ease) both}.gcp-chip.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-chip-thumb{width:30px;height:30px;border-radius:var(--gcp-r-xs);object-fit:cover;flex-shrink:0;border:1px solid var(--gcp-border-soft)}.gcp-chip-icon{width:30px;height:30px;border-radius:var(--gcp-r-xs);flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--gcp-canvas);color:var(--gcp-accent)}.gcp-chip.error .gcp-chip-icon{color:var(--gcp-danger)}.gcp-chip-body{display:flex;flex-direction:column;min-width:0;line-height:1.25}.gcp-chip-name{font-size:var(--gcp-fs-xs);color:var(--gcp-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:110px}.gcp-chip-size{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted)}.gcp-chip.error .gcp-chip-size{color:var(--gcp-danger)}.gcp-chip-spinner{width:12px;height:12px;border-radius:50%;border:2px solid var(--gcp-border);border-top-color:var(--gcp-accent);flex-shrink:0;animation:gcp-spin .7s linear infinite}.gcp-chip-remove{width:18px;height:18px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none}.gcp-chip-remove:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-chip-remove:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:1px}.gcp-file-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.gcp-attach-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast);outline:none}.gcp-attach-btn:hover:not(:disabled){color:var(--gcp-text);background:var(--gcp-hover)}.gcp-attach-btn:disabled{opacity:.4;cursor:not-allowed}.gcp-attach-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-textarea{flex:1;resize:none;background:var(--gcp-input-bg);border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);color:var(--gcp-text);font-family:inherit;font-size:var(--gcp-fs-sm);padding:8px 10px;outline:none;line-height:var(--gcp-lh-snug);min-height:34px;max-height:110px;overflow-y:auto;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-textarea::placeholder{color:var(--gcp-disabled)}.gcp-textarea:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-textarea:disabled{opacity:.5;cursor:not-allowed}.gcp-send-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:inset 0 1px #ffffff38,0 6px 14px -6px var(--gcp-accent-glow);transition:background var(--gcp-t-fast),transform var(--gcp-t-fast),box-shadow var(--gcp-t-fast);outline:none}.gcp-send-btn:hover:not(:disabled){background:var(--gcp-accent)}.gcp-send-btn:active:not(:disabled){transform:scale(.94)}.gcp-send-btn:disabled{opacity:.4;cursor:not-allowed;background:var(--gcp-input-bg);color:var(--gcp-disabled);box-shadow:none}.gcp-send-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-stop-btn{width:34px;height:34px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--gcp-t-fast),transform var(--gcp-t-fast);outline:none}.gcp-stop-btn:hover{background:var(--gcp-danger-wash)}.gcp-stop-btn:active{transform:scale(.94)}.gcp-stop-btn:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:2px}.gcp-composer-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:22px}.gcp-composer-context{display:flex;align-items:center;gap:6px;min-width:0}.gcp-context-chip{display:inline-flex;align-items:center;gap:6px;height:22px;max-width:230px;padding:0 7px;border-radius:var(--gcp-r-sm);border:1px solid var(--gcp-border-soft);background:transparent;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast),border-color var(--gcp-t-fast)}.gcp-context-chip:hover,.gcp-context-chip.open{background:var(--gcp-hover);color:var(--gcp-dim);border-color:var(--gcp-border)}.gcp-context-chip:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-context-chip svg{flex-shrink:0;color:var(--gcp-accent)}.gcp-context-chip-model{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-context-chip-effort{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-weight:600}.gcp-effort{position:relative;min-width:0}.gcp-menu-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:25;background:transparent;border:none;cursor:default;padding:0}.gcp-effort-menu{position:absolute;bottom:calc(100% + 8px);left:0;z-index:30;min-width:250px;max-width:300px;padding:4px;background:var(--gcp-surface);border:1px solid var(--gcp-border);border-radius:var(--gcp-r);box-shadow:var(--gcp-shadow-pop);animation:gcp-rise .14s var(--gcp-ease) both}.gcp-effort-menu-title{padding:6px 8px 4px;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-effort-item{display:flex;align-items:baseline;gap:8px;width:100%;padding:6px 8px;background:transparent;border:none;border-radius:var(--gcp-r-sm);color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);text-align:left;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-effort-item:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-effort-item:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:-2px}.gcp-effort-item.selected{background:var(--gcp-accent-wash)}.gcp-effort-item.selected .gcp-effort-item-name{color:var(--gcp-accent)}.gcp-effort-item-name{font-family:var(--gcp-mono);font-weight:600;white-space:nowrap;flex-shrink:0}.gcp-effort-item-desc{flex:1;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-effort-item-check{margin-left:auto;flex-shrink:0;width:12px;color:var(--gcp-accent);display:inline-flex}.gcp-effort-menu-divider{height:1px;margin:4px 0;background:var(--gcp-border)}.gcp-runbar{display:flex;align-items:center;gap:7px;min-width:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-runbar-pulse{width:7px;height:7px;border-radius:50%;background:var(--gcp-accent);flex-shrink:0;animation:gcp-runbar-pulse 1.4s ease-in-out infinite}@keyframes gcp-runbar-pulse{0%,to{opacity:.4;box-shadow:0 0 0 0 var(--gcp-accent-wash)}50%{opacity:1;box-shadow:0 0 6px 0 var(--gcp-accent-glow)}}.gcp-runbar-phase{color:var(--gcp-dim);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.gcp-run-sparkline{flex:none;color:var(--gcp-accent);opacity:.9}.gcp-runbar-step{flex-shrink:0;padding:1px 6px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);font-family:var(--gcp-mono)}.gcp-runbar-time{flex-shrink:0;font-family:var(--gcp-mono)}.gcp-composer-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-disabled);white-space:nowrap;-webkit-user-select:none;user-select:none}.gcp-not-ready-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--gcp-scrim);display:flex;align-items:center;justify-content:center;gap:10px}.gcp-not-ready-label{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-cta-btn{padding:6px 14px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none;white-space:nowrap}.gcp-cta-btn:hover{background:var(--gcp-accent)}.gcp-cta-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history{flex:1;display:flex;flex-direction:column;overflow:hidden}.gcp-history-top{padding:12px;border-bottom:1px solid var(--gcp-border-soft);flex-shrink:0}.gcp-new-btn{width:100%;padding:8px 12px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-sm);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-new-btn:hover{background:var(--gcp-accent)}.gcp-new-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-history-list{flex:1;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:2px}.gcp-history-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--gcp-r-sm);cursor:pointer;transition:background var(--gcp-t-fast);border:1px solid transparent;position:relative}.gcp-history-item:hover{background:var(--gcp-hover)}.gcp-history-item.active{background:var(--gcp-accent-wash);border-color:var(--gcp-accent-dim)}.gcp-history-item.active:before{content:"";position:absolute;left:0;top:8px;bottom:8px;width:2px;border-radius:2px;background:var(--gcp-accent-deep)}.gcp-history-info{flex:1;min-width:0}.gcp-history-title{font-size:var(--gcp-fs-sm);color:var(--gcp-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}.gcp-history-meta{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums}.gcp-history-delete{width:24px;height:24px;border-radius:var(--gcp-r-xs);border:none;background:transparent;color:var(--gcp-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:var(--gcp-fs-sm);flex-shrink:0;transition:color var(--gcp-t-fast),background var(--gcp-t-fast),opacity var(--gcp-t-fast);outline:none;opacity:0}.gcp-history-item:hover .gcp-history-delete{opacity:1}.gcp-history-delete:hover{color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-history-delete.confirm{color:var(--gcp-danger);background:var(--gcp-danger-wash);opacity:1}.gcp-history-delete:focus-visible{outline:2px solid var(--gcp-danger);outline-offset:1px;opacity:1}.gcp-history-empty{padding:40px 18px;text-align:center;color:var(--gcp-muted);font-size:var(--gcp-fs-sm)}.gcp-settings{flex:1;overflow-y:auto;padding:16px 14px 20px;display:flex;flex-direction:column;gap:16px}.gcp-field{display:flex;flex-direction:column;gap:6px}.gcp-label{font-size:var(--gcp-fs-2xs);font-weight:700;color:var(--gcp-muted);text-transform:uppercase;letter-spacing:.05em}.gcp-select,.gcp-input{width:100%;padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:var(--gcp-input-bg);color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-family:inherit;outline:none;transition:border-color var(--gcp-t-fast),box-shadow var(--gcp-t-fast)}.gcp-select{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23aeb9c6' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}.gcp-select:focus,.gcp-input:focus{border-color:var(--gcp-focus);box-shadow:var(--focus-ring, 0 0 0 2px var(--gcp-panel), 0 0 0 4px var(--gcp-focus))}.gcp-input::placeholder{color:var(--gcp-disabled)}.gcp-model-row{display:flex;gap:6px}.gcp-model-row .gcp-input{flex:1}.gcp-load-btn{padding:7px 11px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);font-weight:600;font-family:inherit;cursor:pointer;white-space:nowrap;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-load-btn:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-load-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-load-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-key-row{display:flex;gap:6px}.gcp-key-row .gcp-input{flex:1;font-family:var(--gcp-mono)}.gcp-show-btn{padding:7px 10px;border-radius:var(--gcp-r-xs);border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);font-weight:600;font-family:inherit;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast);outline:none;flex-shrink:0}.gcp-show-btn:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-show-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-section{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:var(--gcp-r);border:1px solid var(--gcp-border-soft);background:var(--gcp-surface)}.gcp-codex-status{font-size:var(--gcp-fs-xs);color:var(--gcp-dim)}.gcp-codex-status.signed-in{color:var(--gcp-ok)}.gcp-codex-status.pending{color:var(--gcp-warn)}.gcp-codex-btns{display:flex;gap:8px}.gcp-codex-btn{padding:6px 13px;border-radius:var(--gcp-r-sm);border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-size:var(--gcp-fs-xs);font-weight:700;font-family:inherit;cursor:pointer;box-shadow:inset 0 1px #ffffff38;transition:background var(--gcp-t-fast);outline:none}.gcp-codex-btn:hover{background:var(--gcp-accent)}.gcp-codex-btn.danger{border:1px solid var(--gcp-danger);background:transparent;color:var(--gcp-danger);box-shadow:none}.gcp-codex-btn.danger:hover{background:var(--gcp-danger-wash)}.gcp-codex-btn:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-codex-btn:disabled{opacity:.45;cursor:not-allowed}.gcp-field-hint{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);margin-top:2px}.gcp-field-hint.error{color:var(--gcp-danger)}.gcp-footnote{font-size:var(--gcp-fs-2xs);color:var(--gcp-muted);line-height:var(--gcp-lh);padding-top:6px;border-top:1px solid var(--gcp-border-soft)}.gcp-window--expanded .gcp-msg-row,.gcp-window--expanded .gcp-thinking,.gcp-window--expanded .gcp-error-row{width:min(100%,760px);margin-left:auto;margin-right:auto}.gcp-window--expanded .gcp-messages{padding:24px clamp(22px,8vw,92px) 12px}.gcp-window--expanded .gcp-input-area{padding-left:clamp(22px,9vw,108px);padding-right:clamp(22px,9vw,108px)}.gcp-window--expanded .gcp-settings,.gcp-window--expanded .gcp-history{width:min(100%,760px);margin:0 auto}.gcp-lab{position:relative;flex:1;min-height:0;overflow-y:auto;padding:18px;background:var(--gcp-panel)}.gcp-lab-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:16px}.gcp-eyebrow{display:block;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;line-height:var(--gcp-lh-snug);text-transform:uppercase}.gcp-lab-heading h1{margin:2px 0 4px;color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-tight);letter-spacing:-.01em}.gcp-lab-heading p{margin:0;max-width:560px;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-count{flex-shrink:0;padding:3px 9px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-lab-heading-actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:7px}.gcp-lab-heading-actions>button{min-height:28px;padding:5px 10px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-heading-actions>button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-heading-actions>button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-portable-message{margin:-7px 0 13px;padding:8px 10px;border:1px solid var(--gcp-ok);border-radius:var(--gcp-r-sm);background:var(--gcp-ok-wash);color:var(--gcp-ok);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-portable-message.error{border-color:var(--gcp-danger);background:var(--gcp-danger-wash);color:var(--gcp-danger)}.gcp-lab-empty{min-height:340px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 20px;border:1px dashed var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-canvas)}.gcp-lab-empty-mark{width:52px;height:52px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-lg);display:grid;place-items:center;color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-empty h2{margin:15px 0 6px;font-size:var(--gcp-fs-lg);font-weight:600;color:var(--gcp-text)}.gcp-lab-empty p{max-width:470px;margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-example{max-width:510px;margin-top:16px;padding:10px 12px;border-radius:var(--gcp-r-sm);background:var(--gcp-surface);border:1px solid var(--gcp-border-soft);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh);text-align:left}.gcp-lab-layout{display:flex;flex-direction:column;gap:13px}.gcp-lab-studies{display:flex;gap:8px;overflow-x:auto;padding:1px 1px 5px;scrollbar-width:thin}.gcp-study-card{width:220px;min-width:220px;display:flex;flex-direction:column;align-items:stretch;gap:7px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-surface);color:var(--gcp-text);font-family:inherit;text-align:left;cursor:pointer;outline:none;transition:border-color var(--gcp-t-fast),background var(--gcp-t-fast)}.gcp-study-card:hover{border-color:var(--gcp-border);background:var(--gcp-hover)}.gcp-study-card.active{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-study-card:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-study-card-top{display:flex;justify-content:space-between;align-items:center;gap:8px}.gcp-study-card time{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-family:var(--gcp-mono)}.gcp-study-card>strong{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:32px;font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-study-card-meta{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-lab-badge{display:inline-flex;align-items:center;width:fit-content;min-height:18px;padding:2px 7px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-pill);color:var(--gcp-muted);background:var(--gcp-input-bg);font-size:var(--gcp-fs-2xs);font-weight:700;line-height:1;letter-spacing:.04em;text-transform:uppercase}.gcp-lab-badge.completed{color:var(--gcp-ok);border-color:var(--gcp-ok);background:var(--gcp-ok-wash)}.gcp-lab-badge.partial,.gcp-lab-badge.invalid{color:var(--gcp-warn);border-color:var(--gcp-warn);background:var(--gcp-warn-wash)}.gcp-lab-badge.failed{color:var(--gcp-danger);border-color:var(--gcp-danger);background:var(--gcp-danger-wash)}.gcp-lab-report{min-width:0;padding:16px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-edge-hi)}.gcp-lab-report-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.gcp-lab-report-head h2{margin:4px 0 0;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600;line-height:var(--gcp-lh-snug);letter-spacing:-.01em}.gcp-lab-export-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px}.gcp-lab-export-actions button{min-height:26px;padding:4px 9px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-lab-export-actions button:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-lab-export-actions button:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-lab-export-actions button:disabled{opacity:.45;cursor:not-allowed}.gcp-lab-export-actions button:disabled:hover{background:transparent;color:var(--gcp-dim)}.gcp-lab-integrity{margin:7px 0 0;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-summary-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.gcp-lab-summary-card{min-width:0;display:flex;align-items:center;gap:11px;padding:11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-lab-summary-card.winner{border-color:var(--gcp-accent-dim);background:var(--gcp-accent-wash)}.gcp-lab-card-icon{width:30px;height:30px;border-radius:var(--gcp-r-sm);display:grid;place-items:center;flex-shrink:0;font-size:14px}.gcp-lab-card-icon.objective{color:var(--gcp-info);background:var(--gcp-info-wash)}.gcp-lab-card-icon.winner{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-lab-summary-card>div{min-width:0;display:flex;flex-direction:column;gap:2px}.gcp-lab-summary-card h3{margin:0;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-transform:uppercase}.gcp-lab-summary-card strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gcp-lab-summary-card div>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-search-plan{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:baseline;gap:3px 10px;margin-top:8px;padding:10px 11px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r-sm);background:var(--gcp-info-wash)}.gcp-lab-search-plan .gcp-eyebrow{grid-column:1 / -1;color:var(--gcp-info)}.gcp-lab-search-plan strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-lab-search-plan>span:not(.gcp-eyebrow){color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-search-plan small{grid-column:1 / -1;color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-section{margin-top:18px}.gcp-lab-section-title{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:8px}.gcp-lab-section-title h3{margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-sm);font-weight:600}.gcp-lab-section-title>span{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs)}.gcp-lab-findings{margin:0;padding:10px 12px 10px 27px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-lab-findings li+li{margin-top:5px}.gcp-lab-findings li::marker{color:var(--gcp-accent)}.gcp-leaderboard-wrap{overflow-x:auto;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas)}.gcp-leaderboard{width:100%;min-width:650px;border-collapse:collapse;font-size:var(--gcp-fs-xs);font-variant-numeric:tabular-nums}.gcp-leaderboard th{padding:8px 9px;border-bottom:1px solid var(--gcp-border);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.06em;text-align:left;text-transform:uppercase;white-space:nowrap}.gcp-leaderboard td{padding:9px;border-bottom:1px solid var(--gcp-border-soft);color:var(--gcp-dim);vertical-align:middle}.gcp-leaderboard tbody tr:last-child td{border-bottom:none}.gcp-leaderboard tbody tr.winner{background:var(--gcp-accent-wash)}.gcp-rank{display:inline-grid;place-items:center;width:21px;height:21px;border-radius:var(--gcp-r-xs);background:var(--gcp-input-bg);color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-leaderboard tr.winner .gcp-rank{color:var(--gcp-accent);background:var(--gcp-accent-wash)}.gcp-candidate-name{display:flex;align-items:center;flex-wrap:wrap;gap:5px;min-width:140px}.gcp-candidate-name strong{color:var(--gcp-text);font-size:var(--gcp-fs-xs)}.gcp-winner-tag{padding:2px 5px;border-radius:var(--gcp-r-xs);background:var(--gcp-accent-wash);color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase}.gcp-candidate-operations{display:block;max-width:240px;margin-top:3px;color:var(--gcp-muted);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-candidate-error{display:block;max-width:210px;margin-top:3px;color:var(--gcp-danger);font-size:var(--gcp-fs-2xs);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gcp-metric-value{color:var(--gcp-text)!important;font-family:var(--gcp-mono)}.gcp-metric-detail{display:block;margin-top:3px;color:var(--gcp-muted);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:500;line-height:var(--gcp-lh-snug);white-space:nowrap}.gcp-candidate-download{min-height:25px;padding:4px 8px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-xs);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-2xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-candidate-download:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-candidate-download:disabled{opacity:.4;cursor:not-allowed}.gcp-study-import-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:8;display:grid;place-items:center;padding:20px;background:var(--gcp-scrim)}.gcp-study-import-dialog{width:min(100%,520px);max-height:calc(100% - 12px);overflow-y:auto;padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-lg)}.gcp-study-import-dialog h2{margin:4px 0 7px;color:var(--gcp-text);font-size:var(--gcp-fs-lg);font-weight:600}.gcp-study-import-dialog>p{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh)}.gcp-study-import-dialog dl{margin:14px 0;display:grid;gap:7px}.gcp-study-import-dialog dl>div{display:grid;grid-template-columns:105px minmax(0,1fr);gap:10px}.gcp-study-import-dialog dt{color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-weight:700;text-transform:uppercase;letter-spacing:.04em}.gcp-study-import-dialog dd{min-width:0;margin:0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);overflow-wrap:anywhere}.gcp-study-import-dialog code{color:var(--gcp-accent);font-family:var(--gcp-mono);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-study-import-safety{padding:9px 10px;border:1px solid var(--gcp-accent-dim);border-radius:var(--gcp-r-sm);background:var(--gcp-accent-wash)}.gcp-study-import-dialog .gcp-lab-portable-message{margin:10px 0 0}.gcp-study-import-actions{display:flex;justify-content:flex-end;gap:7px;margin-top:15px}.gcp-study-import-actions button{min-height:30px;padding:6px 12px;border:1px solid var(--gcp-border-strong);border-radius:var(--gcp-r-sm);background:transparent;color:var(--gcp-dim);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:600;line-height:1;cursor:pointer;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-study-import-actions button:hover:not(:disabled){background:var(--gcp-hover);color:var(--gcp-text)}.gcp-study-import-actions button.primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);font-weight:700;box-shadow:inset 0 1px #ffffff38}.gcp-study-import-actions button.primary:hover:not(:disabled){background:var(--gcp-accent);color:var(--gcp-accent-ink)}.gcp-study-import-actions button:disabled{opacity:.5;cursor:not-allowed}.gcp-lab-warnings{display:flex;flex-direction:column;gap:5px}.gcp-lab-warnings p{position:relative;margin:0;padding:8px 10px 8px 27px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-warn);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-lab-warnings p:before{content:"!";position:absolute;left:10px;top:8px;color:var(--gcp-warn);font-weight:800}.gcp-paper-grid{display:grid;grid-template-columns:1fr;gap:8px}.gcp-paper-card{position:relative;padding:12px;border:1px solid var(--gcp-border-soft);border-radius:var(--gcp-r);background:var(--gcp-canvas);overflow:hidden}.gcp-paper-index{position:absolute;right:9px;top:7px;color:var(--gcp-border-soft);font-family:var(--gcp-mono);font-size:24px;font-weight:700}.gcp-paper-card h4{position:relative;margin:0 28px 9px 0;color:var(--gcp-text);font-size:var(--gcp-fs-xs);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-paper-card dl{margin:0;display:flex;flex-direction:column;gap:7px}.gcp-paper-card dl>div{display:grid;grid-template-columns:58px 1fr;gap:7px}.gcp-paper-card dt{color:var(--gcp-accent-dim);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.05em;text-transform:uppercase}.gcp-paper-card dd{margin:0;color:var(--gcp-dim);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh)}.gcp-window--expanded .gcp-lab{padding:24px}.gcp-window--expanded .gcp-lab-layout{display:grid;grid-template-columns:220px minmax(0,1fr);align-items:start}.gcp-window--expanded .gcp-lab-studies{position:sticky;top:0;max-height:590px;flex-direction:column;overflow-x:hidden;overflow-y:auto;padding:1px 5px 1px 1px}.gcp-window--expanded .gcp-study-card{width:100%;min-width:0}.gcp-window--expanded .gcp-lab-summary-grid,.gcp-window--expanded .gcp-paper-grid{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:720px),(max-height:560px){.gcp-window,.gcp-window--expanded{top:8px;right:8px;bottom:8px;left:8px;width:auto;height:auto;min-height:0;border-radius:var(--gcp-r-lg)}.gcp-window--expanded .gcp-lab-layout{display:flex}.gcp-window--expanded .gcp-lab-studies{position:static;max-height:none;flex-direction:row;overflow-x:auto;overflow-y:hidden}.gcp-window--expanded .gcp-study-card{width:220px;min-width:220px}.gcp-window--expanded .gcp-messages{padding:16px 14px 8px}.gcp-window--expanded .gcp-input-area{padding:10px 12px 9px}}@media(max-width:430px){.gcp-header-main{padding-left:10px;gap:7px}.gcp-brand-copy>span{display:none}.gcp-header-actions .gcp-model-chip{max-width:116px}.gcp-context-bar{padding:0 11px;gap:6px}.gcp-context-name{display:none}.gcp-context-stat{padding-left:6px}.gcp-workbench-nav{padding:0 4px}.gcp-nav-btn{gap:5px;padding:7px 4px 6px;font-size:var(--gcp-fs-2xs)}.gcp-composer-hint{display:none}.gcp-lab{padding:14px 11px}.gcp-lab-report{padding:12px 10px}.gcp-lab-heading p{display:none}.gcp-lab-heading{align-items:center;margin-bottom:13px}}.gcp-experiment-approval-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:40;display:grid;place-items:center;padding:18px;background:var(--gcp-scrim)}.gcp-experiment-approval{width:min(420px,100%);padding:18px;border:1px solid var(--gcp-border);border-radius:var(--gcp-r-lg);background:var(--gcp-surface);box-shadow:var(--gcp-shadow-pop)}.gcp-experiment-approval-kicker{margin-bottom:6px;color:var(--gcp-accent);font-size:var(--gcp-fs-2xs);font-weight:700;letter-spacing:.08em;text-transform:uppercase}.gcp-experiment-approval-title{color:var(--gcp-text);font-size:var(--gcp-fs-xl);font-weight:600;line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-hypothesis{margin-top:10px;color:var(--gcp-text);font-size:var(--gcp-fs-sm);line-height:var(--gcp-lh)}.gcp-experiment-approval-facts{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.gcp-experiment-approval-facts span{padding:3px 8px;border-radius:var(--gcp-r-pill);border:1px solid var(--gcp-border);background:var(--gcp-input-bg);color:var(--gcp-muted);font-size:var(--gcp-fs-2xs);font-variant-numeric:tabular-nums}.gcp-experiment-approval-candidates{display:grid;gap:6px;max-height:124px;margin-top:12px;overflow-y:auto}.gcp-experiment-approval-candidates>div,.gcp-experiment-approval-nodes{display:grid;grid-template-columns:minmax(72px,.35fr) minmax(0,1fr);gap:8px;padding:7px 9px;border-radius:var(--gcp-r-sm);background:var(--gcp-canvas);font-size:var(--gcp-fs-2xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-candidates strong,.gcp-experiment-approval-nodes strong{color:var(--gcp-text)}.gcp-experiment-approval-candidates span,.gcp-experiment-approval-nodes span{min-width:0;overflow-wrap:anywhere;color:var(--gcp-muted);font-family:var(--gcp-mono)}.gcp-experiment-approval-nodes{margin-top:6px}.gcp-experiment-approval-warning{margin-top:14px;padding:10px 11px;border:1px solid var(--gcp-warn);border-radius:var(--gcp-r-sm);background:var(--gcp-warn-wash);color:var(--gcp-dim);font-size:var(--gcp-fs-xs);line-height:var(--gcp-lh-snug)}.gcp-experiment-approval-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:18px}.gcp-approval-secondary,.gcp-approval-primary{min-height:32px;padding:0 13px;border-radius:var(--gcp-r-sm);font-family:inherit;font-size:var(--gcp-fs-xs);font-weight:700;cursor:pointer;outline:none;transition:background var(--gcp-t-fast),color var(--gcp-t-fast)}.gcp-approval-secondary{border:1px solid var(--gcp-border-strong);background:transparent;color:var(--gcp-dim)}.gcp-approval-secondary:hover{background:var(--gcp-hover);color:var(--gcp-text)}.gcp-approval-secondary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}.gcp-approval-primary{border:none;background:var(--gcp-accent-deep);color:var(--gcp-accent-ink);box-shadow:inset 0 1px #ffffff38}.gcp-approval-primary:hover{background:var(--gcp-accent)}.gcp-approval-primary:focus-visible{outline:2px solid var(--gcp-focus);outline-offset:2px}@media(prefers-reduced-motion:reduce){.gcp-root *,.gcp-root *:before,.gcp-root *:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`)),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var Ib = Object.defineProperty;
var kb = (a, r, s) => r in a ? Ib(a, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[r] = s;
var rn = (a, r, s) => kb(a, typeof r != "symbol" ? r + "" : r, s);
function Kb(a) {
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
function Yb() {
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
function Xb() {
  return Eh || (Eh = 1, Tu.exports = Yb()), Tu.exports;
}
var h = Xb(), Mu = { exports: {} }, _e = {};
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
function Qb() {
  if (xh) return _e;
  xh = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), f = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), _ = Symbol.iterator;
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
  function $(x, U, F) {
    this.props = x, this.context = U, this.refs = B, this.updater = F || R;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(x, U) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, U, "setState");
  }, $.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function O() {
  }
  O.prototype = $.prototype;
  function I(x, U, F) {
    this.props = x, this.context = U, this.refs = B, this.updater = F || R;
  }
  var P = I.prototype = new O();
  P.constructor = I, E(P, $.prototype), P.isPureReactComponent = !0;
  var Q = Array.isArray;
  function ae() {
  }
  var H = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function ue(x, U, F) {
    var re = F.ref;
    return {
      $$typeof: a,
      type: x,
      key: U,
      ref: re !== void 0 ? re : null,
      props: F
    };
  }
  function Y(x, U) {
    return ue(x.type, U, x.props);
  }
  function X(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function ie(x) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(F) {
      return U[F];
    });
  }
  var fe = /\/+/g;
  function ee(x, U) {
    return typeof x == "object" && x !== null && x.key != null ? ie("" + x.key) : U.toString(36);
  }
  function pe(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(ae, ae) : (x.status = "pending", x.then(
          function(U) {
            x.status === "pending" && (x.status = "fulfilled", x.value = U);
          },
          function(U) {
            x.status === "pending" && (x.status = "rejected", x.reason = U);
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
  function w(x, U, F, re, ye) {
    var Se = typeof x;
    (Se === "undefined" || Se === "boolean") && (x = null);
    var ce = !1;
    if (x === null) ce = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case r:
              ce = !0;
              break;
            case v:
              return ce = x._init, w(
                ce(x._payload),
                U,
                F,
                re,
                ye
              );
          }
      }
    if (ce)
      return ye = ye(x), ce = re === "" ? "." + ee(x, 0) : re, Q(ye) ? (F = "", ce != null && (F = ce.replace(fe, "$&/") + "/"), w(ye, U, F, "", function(gn) {
        return gn;
      })) : ye != null && (X(ye) && (ye = Y(
        ye,
        F + (ye.key == null || x && x.key === ye.key ? "" : ("" + ye.key).replace(
          fe,
          "$&/"
        ) + "/") + ce
      )), U.push(ye)), 1;
    ce = 0;
    var We = re === "" ? "." : re + ":";
    if (Q(x))
      for (var Ae = 0; Ae < x.length; Ae++)
        re = x[Ae], Se = We + ee(re, Ae), ce += w(
          re,
          U,
          F,
          Se,
          ye
        );
    else if (Ae = A(x), typeof Ae == "function")
      for (x = Ae.call(x), Ae = 0; !(re = x.next()).done; )
        re = re.value, Se = We + ee(re, Ae++), ce += w(
          re,
          U,
          F,
          Se,
          ye
        );
    else if (Se === "object") {
      if (typeof x.then == "function")
        return w(
          pe(x),
          U,
          F,
          re,
          ye
        );
      throw U = String(x), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function K(x, U, F) {
    if (x == null) return x;
    var re = [], ye = 0;
    return w(x, re, "", "", function(Se) {
      return U.call(F, Se, ye++);
    }), re;
  }
  function M(x) {
    if (x._status === -1) {
      var U = x._result;
      U = U(), U.then(
        function(F) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = F);
        },
        function(F) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = F);
        }
      ), x._status === -1 && (x._status = 0, x._result = U);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var te = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, J = {
    map: K,
    forEach: function(x, U, F) {
      K(
        x,
        function() {
          U.apply(this, arguments);
        },
        F
      );
    },
    count: function(x) {
      var U = 0;
      return K(x, function() {
        U++;
      }), U;
    },
    toArray: function(x) {
      return K(x, function(U) {
        return U;
      }) || [];
    },
    only: function(x) {
      if (!X(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return _e.Activity = b, _e.Children = J, _e.Component = $, _e.Fragment = s, _e.Profiler = c, _e.PureComponent = I, _e.StrictMode = l, _e.Suspense = m, _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, _e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return H.H.useMemoCache(x);
    }
  }, _e.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, _e.cacheSignal = function() {
    return null;
  }, _e.cloneElement = function(x, U, F) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var re = E({}, x.props), ye = x.key;
    if (U != null)
      for (Se in U.key !== void 0 && (ye = "" + U.key), U)
        !oe.call(U, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && U.ref === void 0 || (re[Se] = U[Se]);
    var Se = arguments.length - 2;
    if (Se === 1) re.children = F;
    else if (1 < Se) {
      for (var ce = Array(Se), We = 0; We < Se; We++)
        ce[We] = arguments[We + 2];
      re.children = ce;
    }
    return ue(x.type, ye, re);
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
  }, _e.createElement = function(x, U, F) {
    var re, ye = {}, Se = null;
    if (U != null)
      for (re in U.key !== void 0 && (Se = "" + U.key), U)
        oe.call(U, re) && re !== "key" && re !== "__self" && re !== "__source" && (ye[re] = U[re]);
    var ce = arguments.length - 2;
    if (ce === 1) ye.children = F;
    else if (1 < ce) {
      for (var We = Array(ce), Ae = 0; Ae < ce; Ae++)
        We[Ae] = arguments[Ae + 2];
      ye.children = We;
    }
    if (x && x.defaultProps)
      for (re in ce = x.defaultProps, ce)
        ye[re] === void 0 && (ye[re] = ce[re]);
    return ue(x, Se, ye);
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(x) {
    return { $$typeof: y, render: x };
  }, _e.isValidElement = X, _e.lazy = function(x) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: x },
      _init: M
    };
  }, _e.memo = function(x, U) {
    return {
      $$typeof: g,
      type: x,
      compare: U === void 0 ? null : U
    };
  }, _e.startTransition = function(x) {
    var U = H.T, F = {};
    H.T = F;
    try {
      var re = x(), ye = H.S;
      ye !== null && ye(F, re), typeof re == "object" && re !== null && typeof re.then == "function" && re.then(ae, te);
    } catch (Se) {
      te(Se);
    } finally {
      U !== null && F.types !== null && (U.types = F.types), H.T = U;
    }
  }, _e.unstable_useCacheRefresh = function() {
    return H.H.useCacheRefresh();
  }, _e.use = function(x) {
    return H.H.use(x);
  }, _e.useActionState = function(x, U, F) {
    return H.H.useActionState(x, U, F);
  }, _e.useCallback = function(x, U) {
    return H.H.useCallback(x, U);
  }, _e.useContext = function(x) {
    return H.H.useContext(x);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(x, U) {
    return H.H.useDeferredValue(x, U);
  }, _e.useEffect = function(x, U) {
    return H.H.useEffect(x, U);
  }, _e.useEffectEvent = function(x) {
    return H.H.useEffectEvent(x);
  }, _e.useId = function() {
    return H.H.useId();
  }, _e.useImperativeHandle = function(x, U, F) {
    return H.H.useImperativeHandle(x, U, F);
  }, _e.useInsertionEffect = function(x, U) {
    return H.H.useInsertionEffect(x, U);
  }, _e.useLayoutEffect = function(x, U) {
    return H.H.useLayoutEffect(x, U);
  }, _e.useMemo = function(x, U) {
    return H.H.useMemo(x, U);
  }, _e.useOptimistic = function(x, U) {
    return H.H.useOptimistic(x, U);
  }, _e.useReducer = function(x, U, F) {
    return H.H.useReducer(x, U, F);
  }, _e.useRef = function(x) {
    return H.H.useRef(x);
  }, _e.useState = function(x) {
    return H.H.useState(x);
  }, _e.useSyncExternalStore = function(x, U, F) {
    return H.H.useSyncExternalStore(
      x,
      U,
      F
    );
  }, _e.useTransition = function() {
    return H.H.useTransition();
  }, _e.version = "19.2.7", _e;
}
var Nh;
function fd() {
  return Nh || (Nh = 1, Mu.exports = Qb()), Mu.exports;
}
var W = fd();
const Jb = /* @__PURE__ */ Kb(W);
var Ou = { exports: {} }, Jr = {}, Cu = { exports: {} }, Du = {};
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
function Zb() {
  return Ah || (Ah = 1, (function(a) {
    function r(w, K) {
      var M = w.length;
      w.push(K);
      e: for (; 0 < M; ) {
        var te = M - 1 >>> 1, J = w[te];
        if (0 < c(J, K))
          w[te] = K, w[M] = J, M = te;
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
        e: for (var te = 0, J = w.length, x = J >>> 1; te < x; ) {
          var U = 2 * (te + 1) - 1, F = w[U], re = U + 1, ye = w[re];
          if (0 > c(F, M))
            re < J && 0 > c(ye, F) ? (w[te] = ye, w[re] = M, te = re) : (w[te] = F, w[U] = M, te = U);
          else if (re < J && 0 > c(ye, M))
            w[te] = ye, w[re] = M, te = re;
          else break e;
        }
      }
      return K;
    }
    function c(w, K) {
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
    var m = [], g = [], v = 1, b = null, _ = 3, A = !1, R = !1, E = !1, B = !1, $ = typeof setTimeout == "function" ? setTimeout : null, O = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
    function P(w) {
      for (var K = s(g); K !== null; ) {
        if (K.callback === null) l(g);
        else if (K.startTime <= w)
          l(g), K.sortIndex = K.expirationTime, r(m, K);
        else break;
        K = s(g);
      }
    }
    function Q(w) {
      if (E = !1, P(w), !R)
        if (s(m) !== null)
          R = !0, ae || (ae = !0, ie());
        else {
          var K = s(g);
          K !== null && pe(Q, K.startTime - w);
        }
    }
    var ae = !1, H = -1, oe = 5, ue = -1;
    function Y() {
      return B ? !0 : !(a.unstable_now() - ue < oe);
    }
    function X() {
      if (B = !1, ae) {
        var w = a.unstable_now();
        ue = w;
        var K = !0;
        try {
          e: {
            R = !1, E && (E = !1, O(H), H = -1), A = !0;
            var M = _;
            try {
              t: {
                for (P(w), b = s(m); b !== null && !(b.expirationTime > w && Y()); ) {
                  var te = b.callback;
                  if (typeof te == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var J = te(
                      b.expirationTime <= w
                    );
                    if (w = a.unstable_now(), typeof J == "function") {
                      b.callback = J, P(w), K = !0;
                      break t;
                    }
                    b === s(m) && l(m), P(w);
                  } else l(m);
                  b = s(m);
                }
                if (b !== null) K = !0;
                else {
                  var x = s(g);
                  x !== null && pe(
                    Q,
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
          K ? ie() : ae = !1;
        }
      }
    }
    var ie;
    if (typeof I == "function")
      ie = function() {
        I(X);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), ee = fe.port2;
      fe.port1.onmessage = X, ie = function() {
        ee.postMessage(null);
      };
    } else
      ie = function() {
        $(X, 0);
      };
    function pe(w, K) {
      H = $(function() {
        w(a.unstable_now());
      }, K);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, a.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : oe = 0 < w ? Math.floor(1e3 / w) : 5;
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
      return J = M + J, w = {
        id: v++,
        callback: K,
        priorityLevel: w,
        startTime: M,
        expirationTime: J,
        sortIndex: -1
      }, M > te ? (w.sortIndex = M, r(g, w), s(m) === null && w === s(g) && (E ? (O(H), H = -1) : E = !0, pe(Q, M - te))) : (w.sortIndex = J, r(m, w), R || A || (R = !0, ae || (ae = !0, ie()))), w;
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
function Fb() {
  return jh || (jh = 1, Cu.exports = Zb()), Cu.exports;
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
function Wb() {
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
function Pb() {
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
  return a(), zu.exports = Wb(), zu.exports;
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
function e0() {
  if (Th) return Jr;
  Th = 1;
  var a = Fb(), r = fd(), s = Pb();
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
  var b = Object.assign, _ = Symbol.for("react.element"), A = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), I = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), Y = Symbol.for("react.memo_cache_sentinel"), X = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != "object" ? null : (e = X && e[X] || e["@@iterator"], typeof e == "function" ? e : null);
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
      case $:
        return "Profiler";
      case B:
        return "StrictMode";
      case Q:
        return "Suspense";
      case ae:
        return "SuspenseList";
      case ue:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return "Portal";
        case I:
          return e.displayName || "Context";
        case O:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case H:
          return t = e.displayName || null, t !== null ? t : ee(e.type) || "Memo";
        case oe:
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
  }, te = [], J = -1;
  function x(e) {
    return { current: e };
  }
  function U(e) {
    0 > J || (e.current = te[J], te[J] = null, J--);
  }
  function F(e, t) {
    J++, te[J] = e.current, e.current = t;
  }
  var re = x(null), ye = x(null), Se = x(null), ce = x(null);
  function We(e, t) {
    switch (F(Se, t), F(ye, e), F(re, null), t.nodeType) {
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
    U(re), F(re, e);
  }
  function Ae() {
    U(re), U(ye), U(Se);
  }
  function gn(e) {
    e.memoizedState !== null && F(ce, e);
    var t = re.current, n = Km(t, e.type);
    t !== n && (F(ye, e), F(re, n));
  }
  function ln(e) {
    ye.current === e && (U(re), U(ye)), ce.current === e && (U(ce), kr._currentValue = M);
  }
  var ta, ne;
  function he(e) {
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
                } catch (L) {
                  var z = L;
                }
                Reflect.construct(e, [], k);
              } else {
                try {
                  k.call();
                } catch (L) {
                  z = L;
                }
                e.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                z = L;
              }
              (k = e()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (L) {
            if (L && z && typeof L.stack == "string")
              return [L.stack, z.stack];
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
        var N = p.split(`
`), D = S.split(`
`);
        for (o = i = 0; i < N.length && !N[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < D.length && !D[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === N.length || o === D.length)
          for (i = N.length - 1, o = D.length - 1; 1 <= i && 0 <= o && N[i] !== D[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (N[i] !== D[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || N[i] !== D[o]) {
                  var V = `
` + N[i].replace(" at new ", " at ");
                  return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
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
        return rt(e.type, !1);
      case 11:
        return rt(e.type.render, !1);
      case 1:
        return rt(e.type, !0);
      case 31:
        return he("Activity");
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
  var Tt = Object.prototype.hasOwnProperty, on = a.unstable_scheduleCallback, Pe = a.unstable_cancelCallback, si = a.unstable_shouldYield, na = a.unstable_requestPaint, Nt = a.unstable_now, yo = a.unstable_getCurrentPriorityLevel, Ss = a.unstable_ImmediatePriority, ar = a.unstable_UserBlockingPriority, La = a.unstable_NormalPriority, vo = a.unstable_LowPriority, _s = a.unstable_IdlePriority, li = a.log, Es = a.unstable_setDisableYieldValue, wn = null, ht = null;
  function $n(e) {
    if (typeof li == "function" && Es(e), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(wn, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : aa, xs = Math.log, bo = Math.LN2;
  function aa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xs(e) / bo | 0) | 0;
  }
  var ia = 256, jt = 262144, oi = 4194304;
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
  function Yt(e, t, n) {
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
    var e = oi;
    return oi <<= 1, (oi & 62914560) === 0 && (oi = 4194304), e;
  }
  function ci(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function sa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function G(e, t, n, i, o, u) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var S = e.entanglements, N = e.expirationTimes, D = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var V = 31 - At(n), k = 1 << V;
      S[V] = 0, N[V] = -1;
      var z = D[V];
      if (z !== null)
        for (D[V] = null, V = 0; V < z.length; V++) {
          var L = z[V];
          L !== null && (L.lane &= -536870913);
        }
      n &= ~k;
    }
    i !== 0 && ve(e, i, 0), u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t));
  }
  function ve(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930;
  }
  function gt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - At(n), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), n &= ~o;
    }
  }
  function Ua(e, t) {
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
  function Bt() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : mh(e.type));
  }
  function Xt(e, t) {
    var n = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = n;
    }
  }
  var cn = Math.random().toString(36).slice(2), je = "__reactFiber$" + cn, Ze = "__reactProps$" + cn, bn = "__reactContainer$" + cn, So = "__reactEvents$" + cn, Cy = "__reactListeners$" + cn, Dy = "__reactHandles$" + cn, Md = "__reactResources$" + cn, rr = "__reactMarker$" + cn;
  function _o(e) {
    delete e[je], delete e[Ze], delete e[So], delete e[Cy], delete e[Dy];
  }
  function ui(e) {
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
  function di(e) {
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
  function fi(e) {
    var t = e[Md];
    return t || (t = e[Md] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ft(e) {
    e[rr] = !0;
  }
  var Od = /* @__PURE__ */ new Set(), Cd = {};
  function Ba(e, t) {
    pi(e, t), pi(e + "Capture", t);
  }
  function pi(e, t) {
    for (Cd[e] = t, e = 0; e < t.length; e++)
      Od.add(t[e]);
  }
  var zy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Dd = {}, zd = {};
  function Ry(e) {
    return Tt.call(zd, e) ? !0 : Tt.call(Dd, e) ? !1 : zy.test(e) ? zd[e] = !0 : (Dd[e] = !0, !1);
  }
  function As(e, t, n) {
    if (Ry(t))
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
  function js(e, t, n) {
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
  function Ly(e, t, n) {
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
  function Eo(e) {
    if (!e._valueTracker) {
      var t = Rd(e) ? "checked" : "value";
      e._valueTracker = Ly(
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
  function ws(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Uy = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(
      Uy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xo(e, t, n, i, o, u, p, S) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? No(e, p, Qt(t)) : n != null ? No(e, p, Qt(n)) : i != null && e.removeAttribute("value"), o == null && u != null && (e.defaultChecked = !!u), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Qt(S) : e.removeAttribute("name");
  }
  function Ud(e, t, n, i, o, u, p, S) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Eo(e);
        return;
      }
      n = n != null ? "" + Qt(n) : "", t = t != null ? "" + Qt(t) : n, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = S ? e.checked : !!i, e.defaultChecked = !!i, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), Eo(e);
  }
  function No(e, t, n) {
    t === "number" && ws(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function mi(e, t, n, i) {
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
  function Bd(e, t, n) {
    if (t != null && (t = "" + Qt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Qt(n) : "";
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
    n = Qt(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i), Eo(e);
  }
  function hi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var By = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hd(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || By.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
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
  var Vy = /* @__PURE__ */ new Map([
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
  ]), Hy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $s(e) {
    return Hy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Mn() {
  }
  var jo = null;
  function wo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var gi = null, yi = null;
  function qd(e) {
    var t = di(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ze] || null;
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
              'input[name="' + Jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[Ze] || null;
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
              i = n[t], i.form === e.form && Ld(i);
          }
          break e;
        case "textarea":
          Bd(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && mi(e, !!n.multiple, t, !1);
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
      if ($o = !1, (gi !== null || yi !== null) && (hl(), gi && (t = gi, e = yi, yi = gi = null, qd(t), e)))
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
  var la = null, Mo = null, Ts = null;
  function kd() {
    if (Ts) return Ts;
    var e, t = Mo, n = t.length, i, o = "value" in la ? la.value : la.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (i = 1; i <= p && t[n - i] === o[u - i]; i++) ;
    return Ts = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Ms(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Os() {
    return !0;
  }
  function Kd() {
    return !1;
  }
  function Mt(e) {
    function t(n, i, o, u, p) {
      this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(u) : u[S]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Os : Kd, this.isPropagationStopped = Kd, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Os);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Os);
      },
      persist: function() {
      },
      isPersistent: Os
    }), t;
  }
  var Va = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cs = Mt(Va), cr = b({}, Va, { view: 0, detail: 0 }), Gy = Mt(cr), Oo, Co, ur, Ds = b({}, cr, {
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
      return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? (Oo = e.screenX - ur.screenX, Co = e.screenY - ur.screenY) : Co = Oo = 0, ur = e), Oo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Co;
    }
  }), Yd = Mt(Ds), qy = b({}, Ds, { dataTransfer: 0 }), Iy = Mt(qy), ky = b({}, cr, { relatedTarget: 0 }), Do = Mt(ky), Ky = b({}, Va, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yy = Mt(Ky), Xy = b({}, Va, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Qy = Mt(Xy), Jy = b({}, Va, { data: 0 }), Xd = Mt(Jy), Zy = {
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
  }, Fy = {
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
  }, Wy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Py(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wy[e]) ? !!t[e] : !1;
  }
  function zo() {
    return Py;
  }
  var ev = b({}, cr, {
    key: function(e) {
      if (e.key) {
        var t = Zy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ms(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fy[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? Ms(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), tv = Mt(ev), nv = b({}, Ds, {
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
  }), Qd = Mt(nv), av = b({}, cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zo
  }), iv = Mt(av), rv = b({}, Va, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sv = Mt(rv), lv = b({}, Ds, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ov = Mt(lv), cv = b({}, Va, {
    newState: 0,
    oldState: 0
  }), uv = Mt(cv), dv = [9, 13, 27, 32], Ro = On && "CompositionEvent" in window, dr = null;
  On && "documentMode" in document && (dr = document.documentMode);
  var fv = On && "TextEvent" in window && !dr, Jd = On && (!Ro || dr && 8 < dr && 11 >= dr), Zd = " ", Fd = !1;
  function Wd(e, t) {
    switch (e) {
      case "keyup":
        return dv.indexOf(t.keyCode) !== -1;
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
  var vi = !1;
  function pv(e, t) {
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
  function mv(e, t) {
    if (vi)
      return e === "compositionend" || !Ro && Wd(e, t) ? (e = kd(), Ts = Mo = la = null, vi = !1, e) : null;
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
  var hv = {
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
    return t === "input" ? !!hv[e.type] : t === "textarea";
  }
  function tf(e, t, n, i) {
    gi ? yi ? yi.push(i) : yi = [i] : gi = i, t = El(t, "onChange"), 0 < t.length && (n = new Cs(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var fr = null, pr = null;
  function gv(e) {
    Bm(e, 0);
  }
  function zs(e) {
    var t = sr(e);
    if (Ld(t)) return e;
  }
  function nf(e, t) {
    if (e === "change") return t;
  }
  var af = !1;
  if (On) {
    var Lo;
    if (On) {
      var Uo = "oninput" in document;
      if (!Uo) {
        var rf = document.createElement("div");
        rf.setAttribute("oninput", "return;"), Uo = typeof rf.oninput == "function";
      }
      Lo = Uo;
    } else Lo = !1;
    af = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    fr && (fr.detachEvent("onpropertychange", lf), pr = fr = null);
  }
  function lf(e) {
    if (e.propertyName === "value" && zs(pr)) {
      var t = [];
      tf(
        t,
        pr,
        e,
        wo(e)
      ), Id(gv, t);
    }
  }
  function yv(e, t, n) {
    e === "focusin" ? (sf(), fr = t, pr = n, fr.attachEvent("onpropertychange", lf)) : e === "focusout" && sf();
  }
  function vv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zs(pr);
  }
  function bv(e, t) {
    if (e === "click") return zs(t);
  }
  function Sv(e, t) {
    if (e === "input" || e === "change")
      return zs(t);
  }
  function _v(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Vt = typeof Object.is == "function" ? Object.is : _v;
  function mr(e, t) {
    if (Vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Tt.call(t, o) || !Vt(e[o], t[o]))
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
    for (var t = ws(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ws(e.document);
    }
    return t;
  }
  function Bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Ev = On && "documentMode" in document && 11 >= document.documentMode, bi = null, Vo = null, hr = null, Ho = !1;
  function ff(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho || bi == null || bi !== ws(i) || (i = bi, "selectionStart" in i && Bo(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), hr && mr(hr, i) || (hr = i, i = El(Vo, "onSelect"), 0 < i.length && (t = new Cs(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = bi)));
  }
  function Ha(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Si = {
    animationend: Ha("Animation", "AnimationEnd"),
    animationiteration: Ha("Animation", "AnimationIteration"),
    animationstart: Ha("Animation", "AnimationStart"),
    transitionrun: Ha("Transition", "TransitionRun"),
    transitionstart: Ha("Transition", "TransitionStart"),
    transitioncancel: Ha("Transition", "TransitionCancel"),
    transitionend: Ha("Transition", "TransitionEnd")
  }, Go = {}, pf = {};
  On && (pf = document.createElement("div").style, "AnimationEvent" in window || (delete Si.animationend.animation, delete Si.animationiteration.animation, delete Si.animationstart.animation), "TransitionEvent" in window || delete Si.transitionend.transition);
  function Ga(e) {
    if (Go[e]) return Go[e];
    if (!Si[e]) return e;
    var t = Si[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in pf)
        return Go[e] = t[n];
    return e;
  }
  var mf = Ga("animationend"), hf = Ga("animationiteration"), gf = Ga("animationstart"), xv = Ga("transitionrun"), Nv = Ga("transitionstart"), Av = Ga("transitioncancel"), yf = Ga("transitionend"), vf = /* @__PURE__ */ new Map(), qo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  qo.push("scrollEnd");
  function un(e, t) {
    vf.set(e, t), Ba(t, [e]);
  }
  var Rs = typeof reportError == "function" ? reportError : function(e) {
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
  }, Zt = [], _i = 0, Io = 0;
  function Ls() {
    for (var e = _i, t = Io = _i = 0; t < e; ) {
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
  function Us(e, t, n, i) {
    Zt[_i++] = e, Zt[_i++] = t, Zt[_i++] = n, Zt[_i++] = i, Io |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function ko(e, t, n, i) {
    return Us(e, t, n, i), Bs(e);
  }
  function qa(e, t) {
    return Us(e, null, null, t), Bs(e);
  }
  function bf(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, u = e.return; u !== null; )
      u.childLanes |= n, i = u.alternate, i !== null && (i.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (o = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, o && t !== null && (o = 31 - At(n), e = u.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), u) : null;
  }
  function Bs(e) {
    if (50 < Ur)
      throw Ur = 0, Pc = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ei = {};
  function jv(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, i) {
    return new jv(e, t, n, i);
  }
  function Ko(e) {
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
  function Vs(e, t, n, i, o, u) {
    var p = 0;
    if (i = e, typeof e == "function") Ko(e) && (p = 1);
    else if (typeof e == "string")
      p = Ob(
        e,
        n,
        re.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ue:
          return e = Ht(31, n, t, o), e.elementType = ue, e.lanes = u, e;
        case E:
          return Ia(n.children, o, u, t);
        case B:
          p = 8, o |= 24;
          break;
        case $:
          return e = Ht(12, n, t, o | 2), e.elementType = $, e.lanes = u, e;
        case Q:
          return e = Ht(13, n, t, o), e.elementType = Q, e.lanes = u, e;
        case ae:
          return e = Ht(19, n, t, o), e.elementType = ae, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case I:
                p = 10;
                break e;
              case O:
                p = 9;
                break e;
              case P:
                p = 11;
                break e;
              case H:
                p = 14;
                break e;
              case oe:
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
  function Xo(e, t, n) {
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
  var xi = [], Ni = 0, Hs = null, gr = 0, Wt = [], Pt = 0, oa = null, Sn = 1, _n = "";
  function Dn(e, t) {
    xi[Ni++] = gr, xi[Ni++] = Hs, Hs = e, gr = t;
  }
  function xf(e, t, n) {
    Wt[Pt++] = Sn, Wt[Pt++] = _n, Wt[Pt++] = oa, oa = e;
    var i = Sn;
    e = _n;
    var o = 32 - At(i) - 1;
    i &= ~(1 << o), n += 1;
    var u = 32 - At(t) + o;
    if (30 < u) {
      var p = o - o % 5;
      u = (i & (1 << p) - 1).toString(32), i >>= p, o -= p, Sn = 1 << 32 - At(t) + o | n << o | i, _n = u + e;
    } else
      Sn = 1 << u | n << o | i, _n = e;
  }
  function Qo(e) {
    e.return !== null && (Dn(e, 1), xf(e, 1, 0));
  }
  function Jo(e) {
    for (; e === Hs; )
      Hs = xi[--Ni], xi[Ni] = null, gr = xi[--Ni], xi[Ni] = null;
    for (; e === oa; )
      oa = Wt[--Pt], Wt[Pt] = null, _n = Wt[--Pt], Wt[Pt] = null, Sn = Wt[--Pt], Wt[Pt] = null;
  }
  function Nf(e, t) {
    Wt[Pt++] = Sn, Wt[Pt++] = _n, Wt[Pt++] = oa, Sn = t.id, _n = t.overflow, oa = e;
  }
  var yt = null, Xe = null, Oe = !1, ca = null, en = !1, Zo = Error(l(519));
  function ua(e) {
    var t = Error(
      l(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw yr(Ft(t, e)), Zo;
  }
  function Af(e) {
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
        for (n = 0; n < Vr.length; n++)
          $e(Vr[n], t);
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
        $e("invalid", t), Vd(t, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || qm(t.textContent, n) ? (i.popover != null && ($e("beforetoggle", t), $e("toggle", t)), i.onScroll != null && $e("scroll", t), i.onScrollEnd != null && $e("scrollend", t), i.onClick != null && (t.onclick = Mn), t = !0) : t = !1, t || ua(e, !0);
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
  function Ai(e) {
    if (e !== yt) return !1;
    if (!Oe) return jf(e), Oe = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || mu(e.type, e.memoizedProps)), n = !n), n && Xe && ua(e), jf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Xe = Fm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      Xe = Fm(e);
    } else
      t === 27 ? (t = Xe, Na(e.type) ? (e = bu, bu = null, Xe = e) : Xe = t) : Xe = yt ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ka() {
    Xe = yt = null, Oe = !1;
  }
  function Fo() {
    var e = ca;
    return e !== null && (zt === null ? zt = e : zt.push.apply(
      zt,
      e
    ), ca = null), e;
  }
  function yr(e) {
    ca === null ? ca = [e] : ca.push(e);
  }
  var Wo = x(null), Ka = null, zn = null;
  function da(e, t, n) {
    F(Wo, t._currentValue), t._currentValue = n;
  }
  function Rn(e) {
    e._currentValue = Wo.current, U(Wo);
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
      var u = o.dependencies;
      if (u !== null) {
        var p = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var S = u;
          u = o;
          for (var N = 0; N < t.length; N++)
            if (S.context === t[N]) {
              u.lanes |= n, S = u.alternate, S !== null && (S.lanes |= n), Po(
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
        p.lanes |= n, u = p.alternate, u !== null && (u.lanes |= n), Po(p, n, e), p = null;
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
  function ji(e, t, n, i) {
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
          Vt(o.pendingProps.value, p.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (o === ce.current) {
        if (p = o.alternate, p === null) throw Error(l(387));
        p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(kr) : e = [kr]);
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
  function Gs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Vt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ya(e) {
    Ka = e, zn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function vt(e) {
    return wf(Ka, e);
  }
  function qs(e, t) {
    return Ka === null && Ya(e), wf(e, t);
  }
  function wf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, zn === null) {
      if (e === null) throw Error(l(308));
      zn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else zn = zn.next = t;
    return n;
  }
  var wv = typeof AbortController < "u" ? AbortController : function() {
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
  }, $v = a.unstable_scheduleCallback, Tv = a.unstable_NormalPriority, st = {
    $$typeof: I,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function tc() {
    return {
      controller: new wv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vr(e) {
    e.refCount--, e.refCount === 0 && $v(Tv, function() {
      e.controller.abort();
    });
  }
  var br = null, nc = 0, wi = 0, $i = null;
  function Mv(e, t) {
    if (br === null) {
      var n = br = [];
      nc = 0, wi = ru(), $i = {
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
    if (--nc === 0 && br !== null) {
      $i !== null && ($i.status = "fulfilled");
      var e = br;
      br = null, wi = 0, $i = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ov(e, t) {
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
    fm = Nt(), typeof t == "object" && t !== null && typeof t.then == "function" && Mv(e, t), Tf !== null && Tf(e, t);
  };
  var Xa = x(null);
  function ac() {
    var e = Xa.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Is(e, t) {
    t === null ? F(Xa, Xa.current) : F(Xa, t.pool);
  }
  function Mf() {
    var e = ac();
    return e === null ? null : { parent: st._currentValue, pool: e };
  }
  var Ti = Error(l(460)), ic = Error(l(474)), ks = Error(l(542)), Ks = { then: function() {
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
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter)
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
        throw Ja = t, Ti;
    }
  }
  function Qa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ja = n, Ti) : n;
    }
  }
  var Ja = null;
  function Df() {
    if (Ja === null) throw Error(l(459));
    var e = Ja;
    return Ja = null, e;
  }
  function zf(e) {
    if (e === Ti || e === ks)
      throw Error(l(483));
  }
  var Mi = null, Sr = 0;
  function Ys(e) {
    var t = Sr;
    return Sr += 1, Mi === null && (Mi = []), Cf(Mi, e, t);
  }
  function _r(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Xs(e, t) {
    throw t.$$typeof === _ ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Rf(e) {
    function t(T, j) {
      if (e) {
        var C = T.deletions;
        C === null ? (T.deletions = [j], T.flags |= 16) : C.push(j);
      }
    }
    function n(T, j) {
      if (!e) return null;
      for (; j !== null; )
        t(T, j), j = j.sibling;
      return null;
    }
    function i(T) {
      for (var j = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? j.set(T.key, T) : j.set(T.index, T), T = T.sibling;
      return j;
    }
    function o(T, j) {
      return T = Cn(T, j), T.index = 0, T.sibling = null, T;
    }
    function u(T, j, C) {
      return T.index = C, e ? (C = T.alternate, C !== null ? (C = C.index, C < j ? (T.flags |= 67108866, j) : C) : (T.flags |= 67108866, j)) : (T.flags |= 1048576, j);
    }
    function p(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function S(T, j, C, q) {
      return j === null || j.tag !== 6 ? (j = Yo(C, T.mode, q), j.return = T, j) : (j = o(j, C), j.return = T, j);
    }
    function N(T, j, C, q) {
      var de = C.type;
      return de === E ? V(
        T,
        j,
        C.props.children,
        q,
        C.key
      ) : j !== null && (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && Qa(de) === j.type) ? (j = o(j, C.props), _r(j, C), j.return = T, j) : (j = Vs(
        C.type,
        C.key,
        C.props,
        null,
        T.mode,
        q
      ), _r(j, C), j.return = T, j);
    }
    function D(T, j, C, q) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== C.containerInfo || j.stateNode.implementation !== C.implementation ? (j = Xo(C, T.mode, q), j.return = T, j) : (j = o(j, C.children || []), j.return = T, j);
    }
    function V(T, j, C, q, de) {
      return j === null || j.tag !== 7 ? (j = Ia(
        C,
        T.mode,
        q,
        de
      ), j.return = T, j) : (j = o(j, C), j.return = T, j);
    }
    function k(T, j, C) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Yo(
          "" + j,
          T.mode,
          C
        ), j.return = T, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case A:
            return C = Vs(
              j.type,
              j.key,
              j.props,
              null,
              T.mode,
              C
            ), _r(C, j), C.return = T, C;
          case R:
            return j = Xo(
              j,
              T.mode,
              C
            ), j.return = T, j;
          case oe:
            return j = Qa(j), k(T, j, C);
        }
        if (pe(j) || ie(j))
          return j = Ia(
            j,
            T.mode,
            C,
            null
          ), j.return = T, j;
        if (typeof j.then == "function")
          return k(T, Ys(j), C);
        if (j.$$typeof === I)
          return k(
            T,
            qs(T, j),
            C
          );
        Xs(T, j);
      }
      return null;
    }
    function z(T, j, C, q) {
      var de = j !== null ? j.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return de !== null ? null : S(T, j, "" + C, q);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case A:
            return C.key === de ? N(T, j, C, q) : null;
          case R:
            return C.key === de ? D(T, j, C, q) : null;
          case oe:
            return C = Qa(C), z(T, j, C, q);
        }
        if (pe(C) || ie(C))
          return de !== null ? null : V(T, j, C, q, null);
        if (typeof C.then == "function")
          return z(
            T,
            j,
            Ys(C),
            q
          );
        if (C.$$typeof === I)
          return z(
            T,
            j,
            qs(T, C),
            q
          );
        Xs(T, C);
      }
      return null;
    }
    function L(T, j, C, q, de) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return T = T.get(C) || null, S(j, T, "" + q, de);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case A:
            return T = T.get(
              q.key === null ? C : q.key
            ) || null, N(j, T, q, de);
          case R:
            return T = T.get(
              q.key === null ? C : q.key
            ) || null, D(j, T, q, de);
          case oe:
            return q = Qa(q), L(
              T,
              j,
              C,
              q,
              de
            );
        }
        if (pe(q) || ie(q))
          return T = T.get(C) || null, V(j, T, q, de, null);
        if (typeof q.then == "function")
          return L(
            T,
            j,
            C,
            Ys(q),
            de
          );
        if (q.$$typeof === I)
          return L(
            T,
            j,
            C,
            qs(j, q),
            de
          );
        Xs(j, q);
      }
      return null;
    }
    function se(T, j, C, q) {
      for (var de = null, ze = null, le = j, Ne = j = 0, Me = null; le !== null && Ne < C.length; Ne++) {
        le.index > Ne ? (Me = le, le = null) : Me = le.sibling;
        var Re = z(
          T,
          le,
          C[Ne],
          q
        );
        if (Re === null) {
          le === null && (le = Me);
          break;
        }
        e && le && Re.alternate === null && t(T, le), j = u(Re, j, Ne), ze === null ? de = Re : ze.sibling = Re, ze = Re, le = Me;
      }
      if (Ne === C.length)
        return n(T, le), Oe && Dn(T, Ne), de;
      if (le === null) {
        for (; Ne < C.length; Ne++)
          le = k(T, C[Ne], q), le !== null && (j = u(
            le,
            j,
            Ne
          ), ze === null ? de = le : ze.sibling = le, ze = le);
        return Oe && Dn(T, Ne), de;
      }
      for (le = i(le); Ne < C.length; Ne++)
        Me = L(
          le,
          T,
          Ne,
          C[Ne],
          q
        ), Me !== null && (e && Me.alternate !== null && le.delete(
          Me.key === null ? Ne : Me.key
        ), j = u(
          Me,
          j,
          Ne
        ), ze === null ? de = Me : ze.sibling = Me, ze = Me);
      return e && le.forEach(function(Ta) {
        return t(T, Ta);
      }), Oe && Dn(T, Ne), de;
    }
    function me(T, j, C, q) {
      if (C == null) throw Error(l(151));
      for (var de = null, ze = null, le = j, Ne = j = 0, Me = null, Re = C.next(); le !== null && !Re.done; Ne++, Re = C.next()) {
        le.index > Ne ? (Me = le, le = null) : Me = le.sibling;
        var Ta = z(T, le, Re.value, q);
        if (Ta === null) {
          le === null && (le = Me);
          break;
        }
        e && le && Ta.alternate === null && t(T, le), j = u(Ta, j, Ne), ze === null ? de = Ta : ze.sibling = Ta, ze = Ta, le = Me;
      }
      if (Re.done)
        return n(T, le), Oe && Dn(T, Ne), de;
      if (le === null) {
        for (; !Re.done; Ne++, Re = C.next())
          Re = k(T, Re.value, q), Re !== null && (j = u(Re, j, Ne), ze === null ? de = Re : ze.sibling = Re, ze = Re);
        return Oe && Dn(T, Ne), de;
      }
      for (le = i(le); !Re.done; Ne++, Re = C.next())
        Re = L(le, T, Ne, Re.value, q), Re !== null && (e && Re.alternate !== null && le.delete(Re.key === null ? Ne : Re.key), j = u(Re, j, Ne), ze === null ? de = Re : ze.sibling = Re, ze = Re);
      return e && le.forEach(function(qb) {
        return t(T, qb);
      }), Oe && Dn(T, Ne), de;
    }
    function Ie(T, j, C, q) {
      if (typeof C == "object" && C !== null && C.type === E && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case A:
            e: {
              for (var de = C.key; j !== null; ) {
                if (j.key === de) {
                  if (de = C.type, de === E) {
                    if (j.tag === 7) {
                      n(
                        T,
                        j.sibling
                      ), q = o(
                        j,
                        C.props.children
                      ), q.return = T, T = q;
                      break e;
                    }
                  } else if (j.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && Qa(de) === j.type) {
                    n(
                      T,
                      j.sibling
                    ), q = o(j, C.props), _r(q, C), q.return = T, T = q;
                    break e;
                  }
                  n(T, j);
                  break;
                } else t(T, j);
                j = j.sibling;
              }
              C.type === E ? (q = Ia(
                C.props.children,
                T.mode,
                q,
                C.key
              ), q.return = T, T = q) : (q = Vs(
                C.type,
                C.key,
                C.props,
                null,
                T.mode,
                q
              ), _r(q, C), q.return = T, T = q);
            }
            return p(T);
          case R:
            e: {
              for (de = C.key; j !== null; ) {
                if (j.key === de)
                  if (j.tag === 4 && j.stateNode.containerInfo === C.containerInfo && j.stateNode.implementation === C.implementation) {
                    n(
                      T,
                      j.sibling
                    ), q = o(j, C.children || []), q.return = T, T = q;
                    break e;
                  } else {
                    n(T, j);
                    break;
                  }
                else t(T, j);
                j = j.sibling;
              }
              q = Xo(C, T.mode, q), q.return = T, T = q;
            }
            return p(T);
          case oe:
            return C = Qa(C), Ie(
              T,
              j,
              C,
              q
            );
        }
        if (pe(C))
          return se(
            T,
            j,
            C,
            q
          );
        if (ie(C)) {
          if (de = ie(C), typeof de != "function") throw Error(l(150));
          return C = de.call(C), me(
            T,
            j,
            C,
            q
          );
        }
        if (typeof C.then == "function")
          return Ie(
            T,
            j,
            Ys(C),
            q
          );
        if (C.$$typeof === I)
          return Ie(
            T,
            j,
            qs(T, C),
            q
          );
        Xs(T, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, j !== null && j.tag === 6 ? (n(T, j.sibling), q = o(j, C), q.return = T, T = q) : (n(T, j), q = Yo(C, T.mode, q), q.return = T, T = q), p(T)) : n(T, j);
    }
    return function(T, j, C, q) {
      try {
        Sr = 0;
        var de = Ie(
          T,
          j,
          C,
          q
        );
        return Mi = null, de;
      } catch (le) {
        if (le === Ti || le === ks) throw le;
        var ze = Ht(29, le, null, T.mode);
        return ze.lanes = q, ze.return = T, ze;
      } finally {
      }
    };
  }
  var Za = Rf(!0), Lf = Rf(!1), fa = !1;
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
    return Us(e, i, t, n), Bs(e);
  }
  function Er(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, gt(e, n);
    }
  }
  function lc(e, t) {
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
  var oc = !1;
  function xr() {
    if (oc) {
      var e = $i;
      if (e !== null) throw e;
    }
  }
  function Nr(e, t, n, i) {
    oc = !1;
    var o = e.updateQueue;
    fa = !1;
    var u = o.firstBaseUpdate, p = o.lastBaseUpdate, S = o.shared.pending;
    if (S !== null) {
      o.shared.pending = null;
      var N = S, D = N.next;
      N.next = null, p === null ? u = D : p.next = D, p = N;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, S = V.lastBaseUpdate, S !== p && (S === null ? V.firstBaseUpdate = D : S.next = D, V.lastBaseUpdate = N));
    }
    if (u !== null) {
      var k = o.baseState;
      p = 0, V = D = N = null, S = u;
      do {
        var z = S.lane & -536870913, L = z !== S.lane;
        if (L ? (Te & z) === z : (i & z) === z) {
          z !== 0 && z === wi && (oc = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var se = e, me = S;
            z = t;
            var Ie = n;
            switch (me.tag) {
              case 1:
                if (se = me.payload, typeof se == "function") {
                  k = se.call(Ie, k, z);
                  break e;
                }
                k = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = me.payload, z = typeof se == "function" ? se.call(Ie, k, z) : se, z == null) break e;
                k = b({}, k, z);
                break e;
              case 2:
                fa = !0;
            }
          }
          z = S.callback, z !== null && (e.flags |= 64, L && (e.flags |= 8192), L = o.callbacks, L === null ? o.callbacks = [z] : L.push(z));
        } else
          L = {
            lane: z,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, V === null ? (D = V = L, N = k) : V = V.next = L, p |= z;
        if (S = S.next, S === null) {
          if (S = o.shared.pending, S === null)
            break;
          L = S, S = L.next, L.next = null, o.lastBaseUpdate = L, o.shared.pending = null;
        }
      } while (!0);
      V === null && (N = k), o.baseState = N, o.firstBaseUpdate = D, o.lastBaseUpdate = V, u === null && (o.shared.lanes = 0), ba |= p, e.lanes = p, e.memoizedState = k;
    }
  }
  function Uf(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function Bf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Uf(n[e], t);
  }
  var Oi = x(null), Qs = x(0);
  function Vf(e, t) {
    e = kn, F(Qs, e), F(Oi, t), kn = e | t.baseLanes;
  }
  function cc() {
    F(Qs, kn), F(Oi, Oi.current);
  }
  function uc() {
    kn = Qs.current, U(Oi), U(Qs);
  }
  var Gt = x(null), tn = null;
  function ha(e) {
    var t = e.alternate;
    F(at, at.current & 1), F(Gt, e), tn === null && (t === null || Oi.current !== null || t.memoizedState !== null) && (tn = e);
  }
  function dc(e) {
    F(at, at.current), F(Gt, e), tn === null && (tn = e);
  }
  function Hf(e) {
    e.tag === 22 ? (F(at, at.current), F(Gt, e), tn === null && (tn = e)) : ga();
  }
  function ga() {
    F(at, at.current), F(Gt, Gt.current);
  }
  function qt(e) {
    U(Gt), tn === e && (tn = null), U(at);
  }
  var at = x(0);
  function Js(e) {
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
  var Ln = 0, xe = null, Ge = null, lt = null, Zs = !1, Ci = !1, Fa = !1, Fs = 0, Ar = 0, Di = null, Cv = 0;
  function et() {
    throw Error(l(321));
  }
  function fc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function pc(e, t, n, i, o, u) {
    return Ln = u, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? xp : $c, Fa = !1, u = n(i, o), Fa = !1, Ci && (u = qf(
      t,
      n,
      i,
      o
    )), Gf(e), u;
  }
  function Gf(e) {
    w.H = $r;
    var t = Ge !== null && Ge.next !== null;
    if (Ln = 0, lt = Ge = xe = null, Zs = !1, Ar = 0, Di = null, t) throw Error(l(300));
    e === null || ot || (e = e.dependencies, e !== null && Gs(e) && (ot = !0));
  }
  function qf(e, t, n, i) {
    xe = e;
    var o = 0;
    do {
      if (Ci && (Di = null), Ar = 0, Ci = !1, 25 <= o) throw Error(l(301));
      if (o += 1, lt = Ge = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      w.H = Np, u = t(n, i);
    } while (Ci);
    return u;
  }
  function Dv() {
    var e = w.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? jr(t) : t, e = e.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== e && (xe.flags |= 1024), t;
  }
  function mc() {
    var e = Fs !== 0;
    return Fs = 0, e;
  }
  function hc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function gc(e) {
    if (Zs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Zs = !1;
    }
    Ln = 0, lt = Ge = xe = null, Ci = !1, Ar = Fs = 0, Di = null;
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
  function Ws() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function jr(e) {
    var t = Ar;
    return Ar += 1, Di === null && (Di = []), e = Cf(Di, e, t), t = xe, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? xp : $c), e;
  }
  function Ps(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return jr(e);
      if (e.$$typeof === I) return vt(e);
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ws(), xe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = Y;
    return t.index++, n;
  }
  function Un(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function el(e) {
    var t = it();
    return vc(t, Ge, e);
  }
  function vc(e, t, n) {
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
      var S = p = null, N = null, D = t, V = !1;
      do {
        var k = D.lane & -536870913;
        if (k !== D.lane ? (Te & k) === k : (Ln & k) === k) {
          var z = D.revertLane;
          if (z === 0)
            N !== null && (N = N.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), k === wi && (V = !0);
          else if ((Ln & z) === z) {
            D = D.next, z === wi && (V = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, N === null ? (S = N = k, p = u) : N = N.next = k, xe.lanes |= z, ba |= z;
          k = D.action, Fa && n(u, k), u = D.hasEagerState ? D.eagerState : n(u, k);
        } else
          z = {
            lane: k,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, N === null ? (S = N = z, p = u) : N = N.next = z, xe.lanes |= k, ba |= k;
        D = D.next;
      } while (D !== null && D !== t);
      if (N === null ? p = u : N.next = S, !Vt(u, e.memoizedState) && (ot = !0, V && (n = $i, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = p, e.baseQueue = N, i.lastRenderedState = u;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function bc(e) {
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
      Vt(u, t.memoizedState) || (ot = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function If(e, t, n) {
    var i = xe, o = it(), u = Oe;
    if (u) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else n = t();
    var p = !Vt(
      (Ge || o).memoizedState,
      n
    );
    if (p && (o.memoizedState = n, ot = !0), o = o.queue, Ec(Yf.bind(null, i, o, e), [
      e
    ]), o.getSnapshot !== t || p || lt !== null && lt.memoizedState.tag & 1) {
      if (i.flags |= 2048, zi(
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
      ), Ye === null) throw Error(l(349));
      u || (Ln & 127) !== 0 || kf(i, t, n);
    }
    return n;
  }
  function kf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = Ws(), xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function Qf(e) {
    var t = qa(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function Sc(e) {
    var t = wt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Fa) {
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
    return e.baseState = n, vc(
      e,
      Ge,
      typeof i == "function" ? i : Un
    );
  }
  function zv(e, t, n, i, o) {
    if (al(e)) throw Error(l(485));
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
        var S = n(o, i), N = w.S;
        N !== null && N(p, S), Ff(e, t, S);
      } catch (D) {
        _c(e, t, D);
      } finally {
        u !== null && p.types !== null && (u.types = p.types), w.T = u;
      }
    } else
      try {
        u = n(o, i), Ff(e, t, u);
      } catch (D) {
        _c(e, t, D);
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
    if (Oe) {
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var i = xe;
          if (Oe) {
            if (Xe) {
              t: {
                for (var o = Xe, u = en; o.nodeType !== 8; ) {
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
                Xe = nn(
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
    ), i.dispatch = n, i = Sc(!1), u = wc.bind(
      null,
      xe,
      !1,
      i.queue
    ), i = wt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, n = zv.bind(
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
    if (t = vc(
      e,
      t,
      ep
    )[0], e = el(Un)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = jr(t);
      } catch (p) {
        throw p === Ti ? ks : p;
      }
    else i = t;
    t = it();
    var o = t.queue, u = o.dispatch;
    return n !== t.memoizedState && (xe.flags |= 2048, zi(
      9,
      { destroy: void 0 },
      Rv.bind(null, o, n),
      null
    )), [i, u, e];
  }
  function Rv(e, t) {
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
  function zi(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = xe.updateQueue, t === null && (t = Ws(), xe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function rp() {
    return it().memoizedState;
  }
  function tl(e, t, n, i) {
    var o = wt();
    xe.flags |= e, o.memoizedState = zi(
      1 | t,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function nl(e, t, n, i) {
    var o = it();
    i = i === void 0 ? null : i;
    var u = o.memoizedState.inst;
    Ge !== null && i !== null && fc(i, Ge.memoizedState.deps) ? o.memoizedState = zi(t, u, n, i) : (xe.flags |= e, o.memoizedState = zi(
      1 | t,
      u,
      n,
      i
    ));
  }
  function sp(e, t) {
    tl(8390656, 8, e, t);
  }
  function Ec(e, t) {
    nl(2048, 8, e, t);
  }
  function Lv(e) {
    xe.flags |= 4;
    var t = xe.updateQueue;
    if (t === null)
      t = Ws(), xe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function lp(e) {
    var t = it().memoizedState;
    return Lv({ ref: t, nextImpl: e }), function() {
      if ((Le & 2) !== 0) throw Error(l(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function op(e, t) {
    return nl(4, 2, e, t);
  }
  function cp(e, t) {
    return nl(4, 4, e, t);
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
    n = n != null ? n.concat([e]) : null, nl(4, 4, up.bind(null, t, e), n);
  }
  function xc() {
  }
  function fp(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && fc(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function pp(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && fc(t, i[1]))
      return i[0];
    if (i = e(), Fa) {
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
    return n === void 0 || (Ln & 1073741824) !== 0 && (Te & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = mm(), xe.lanes |= e, ba |= e, n);
  }
  function mp(e, t, n, i) {
    return Vt(n, t) ? n : Oi.current !== null ? (e = Nc(e, n, i), Vt(e, t) || (ot = !0), e) : (Ln & 42) === 0 || (Ln & 1073741824) !== 0 && (Te & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = mm(), xe.lanes |= e, ba |= e, t);
  }
  function hp(e, t, n, i, o) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var p = w.T, S = {};
    w.T = S, wc(e, !1, t, n);
    try {
      var N = o(), D = w.S;
      if (D !== null && D(S, N), N !== null && typeof N == "object" && typeof N.then == "function") {
        var V = Ov(
          N,
          i
        );
        wr(
          e,
          t,
          V,
          Kt(e)
        );
      } else
        wr(
          e,
          t,
          i,
          Kt(e)
        );
    } catch (k) {
      wr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: k },
        Kt()
      );
    } finally {
      K.p = u, p !== null && S.types !== null && (p.types = S.types), w.T = p;
    }
  }
  function Uv() {
  }
  function Ac(e, t, n, i) {
    if (e.tag !== 5) throw Error(l(476));
    var o = gp(e).queue;
    hp(
      e,
      o,
      t,
      M,
      n === null ? Uv : function() {
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
        lastRenderedReducer: Un,
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
  function jc() {
    return vt(kr);
  }
  function vp() {
    return it().memoizedState;
  }
  function bp() {
    return it().memoizedState;
  }
  function Bv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Kt();
          e = pa(n);
          var i = ma(t, e, n);
          i !== null && (Rt(i, t, n), Er(i, t, n)), t = { cache: tc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vv(e, t, n) {
    var i = Kt();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, al(e) ? _p(t, n) : (n = ko(e, t, n, i), n !== null && (Rt(n, e, i), Ep(n, t, i)));
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
    if (al(e)) _p(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var p = t.lastRenderedState, S = u(p, n);
          if (o.hasEagerState = !0, o.eagerState = S, Vt(S, p))
            return Us(e, t, o, 0), Ye === null && Ls(), !1;
        } catch {
        } finally {
        }
      if (n = ko(e, t, o, i), n !== null)
        return Rt(n, e, i), Ep(n, t, i), !0;
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
    }, al(e)) {
      if (t) throw Error(l(479));
    } else
      t = ko(
        e,
        n,
        i,
        2
      ), t !== null && Rt(t, e, 2);
  }
  function al(e) {
    var t = e.alternate;
    return e === xe || t !== null && t === xe;
  }
  function _p(e, t) {
    Ci = Zs = !0;
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
    use: Ps,
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
    use: Ps,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: vt,
    useEffect: sp,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, tl(
        4194308,
        4,
        up.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return tl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      tl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = wt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Fa) {
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
        if (Fa) {
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
      }, i.queue = e, e = e.dispatch = Vv.bind(
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
      if (Oe) {
        if (n === void 0)
          throw Error(l(407));
        n = n();
      } else {
        if (n = t(), Ye === null)
          throw Error(l(349));
        (Te & 127) !== 0 || kf(i, t, n);
      }
      o.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return o.queue = u, sp(Yf.bind(null, i, u, e), [
        e
      ]), i.flags |= 2048, zi(
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
      var e = wt(), t = Ye.identifierPrefix;
      if (Oe) {
        var n = _n, i = Sn;
        n = (i & ~(1 << 32 - At(i) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Fs++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Cv++, t = "_" + t + "r_" + n.toString(32) + "_";
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
      return wt().memoizedState = Bv.bind(
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
  }, $c = {
    readContext: vt,
    use: Ps,
    useCallback: fp,
    useContext: vt,
    useEffect: Ec,
    useImperativeHandle: dp,
    useInsertionEffect: op,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: el,
    useRef: rp,
    useState: function() {
      return el(Un);
    },
    useDebugValue: xc,
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
      var e = el(Un)[0], t = it().memoizedState;
      return [
        typeof e == "boolean" ? e : jr(e),
        t
      ];
    },
    useSyncExternalStore: If,
    useId: vp,
    useHostTransitionStatus: jc,
    useFormState: np,
    useActionState: np,
    useOptimistic: function(e, t) {
      var n = it();
      return Jf(n, Ge, e, t);
    },
    useMemoCache: yc,
    useCacheRefresh: bp
  };
  $c.useEffectEvent = lp;
  var Np = {
    readContext: vt,
    use: Ps,
    useCallback: fp,
    useContext: vt,
    useEffect: Ec,
    useImperativeHandle: dp,
    useInsertionEffect: op,
    useLayoutEffect: cp,
    useMemo: pp,
    useReducer: bc,
    useRef: rp,
    useState: function() {
      return bc(Un);
    },
    useDebugValue: xc,
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
      var e = bc(Un)[0], t = it().memoizedState;
      return [
        typeof e == "boolean" ? e : jr(e),
        t
      ];
    },
    useSyncExternalStore: If,
    useId: vp,
    useHostTransitionStatus: jc,
    useFormState: ip,
    useActionState: ip,
    useOptimistic: function(e, t) {
      var n = it();
      return Ge !== null ? Jf(n, Ge, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
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
  function Ap(e, t, n, i, o, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, p) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, i) || !mr(o, u) : !0;
  }
  function jp(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && Mc.enqueueReplaceState(t, t.state, null);
  }
  function Wa(e, t) {
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
    Rs(e);
  }
  function $p(e) {
    console.error(e);
  }
  function Tp(e) {
    Rs(e);
  }
  function il(e, t) {
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
    return n = pa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      il(e, t);
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
        Mp(t, n, i);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      Mp(t, n, i), typeof o != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([this]) : Sa.add(this));
      var S = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Hv(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && ji(
        t,
        n,
        o,
        !0
      ), n = Gt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return tn === null ? gl() : n.alternate === null && tt === 0 && (tt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Ks ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), nu(e, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === Ks ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), nu(e, i, o)), !1;
        }
        throw Error(l(435, n.tag));
      }
      return nu(e, i, o), gl(), !1;
    }
    if (Oe)
      return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Zo && (e = Error(l(422), { cause: i }), yr(Ft(e, n)))) : (i !== Zo && (t = Error(l(423), {
        cause: i
      }), yr(
        Ft(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ft(i, n), o = Oc(
        e.stateNode,
        i,
        o
      ), lc(e, o), tt !== 4 && (tt = 2)), !1;
    var u = Error(l(520), { cause: i });
    if (u = Ft(u, n), Lr === null ? Lr = [u] : Lr.push(u), tt !== 4 && (tt = 2), t === null) return !0;
    i = Ft(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Oc(n.stateNode, i, e), lc(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Sa === null || !Sa.has(u))))
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
  var Cc = Error(l(461)), ot = !1;
  function bt(e, t, n, i) {
    t.child = e === null ? Lf(t, null, n, i) : Za(
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
    return Ya(t), i = pc(
      e,
      t,
      n,
      p,
      u,
      o
    ), S = mc(), e !== null && !ot ? (hc(e, t, o), Bn(e, t, o)) : (Oe && S && Qo(t), t.flags |= 1, bt(e, t, i, o), t.child);
  }
  function zp(e, t, n, i, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Ko(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Rp(
        e,
        t,
        u,
        i,
        o
      )) : (e = Vs(
        n.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Hc(e, o)) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : mr, n(p, i) && e.ref === t.ref)
        return Bn(e, t, o);
    }
    return t.flags |= 1, e = Cn(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Rp(e, t, n, i, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (mr(u, i) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = i = u, Hc(e, o))
          (e.flags & 131072) !== 0 && (ot = !0);
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
        ), u !== null ? Vf(t, u) : cc(), Hf(t);
      else
        return i = t.lanes = 536870912, Up(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          i
        );
    } else
      u !== null ? (Is(t, u.cachePool), Vf(t, u), ga(), t.memoizedState = null) : (e !== null && Is(t, null), cc(), ga());
    return bt(e, t, o, n), t.child;
  }
  function Tr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Up(e, t, n, i, o) {
    var u = ac();
    return u = u === null ? null : { parent: st._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && Is(t, null), cc(), Hf(t), e !== null && ji(e, t, i, !0), t.childLanes = o, null;
  }
  function rl(e, t) {
    return t = ll(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Bp(e, t, n) {
    return Za(t, e.child, null, n), e = rl(t, t.pendingProps), e.flags |= 2, qt(t), t.memoizedState = null, e;
  }
  function Gv(e, t, n) {
    var i = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Oe) {
        if (i.mode === "hidden")
          return e = rl(t, i), t.lanes = 536870912, Tr(null, e);
        if (dc(t), (e = Xe) ? (e = Zm(
          e,
          en
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: oa !== null ? { id: Sn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, yt = t, Xe = null)) : e = null, e === null) throw ua(t);
        return t.lanes = 536870912, null;
      }
      return rl(t, i);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var p = u.dehydrated;
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
      else if (ot || ji(e, t, n, !1), o = (n & e.childLanes) !== 0, ot || o) {
        if (i = Ye, i !== null && (p = Ua(i, n), p !== 0 && p !== u.retryLane))
          throw u.retryLane = p, qa(e, p), Rt(i, e, p), Cc;
        gl(), t = Bp(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Xe = nn(p.nextSibling), yt = t, Oe = !0, ca = null, en = !1, e !== null && Nf(t, e), t = rl(t, i), t.flags |= 4096;
      return t;
    }
    return e = Cn(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function sl(e, t) {
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
    return Ya(t), n = pc(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = mc(), e !== null && !ot ? (hc(e, t, o), Bn(e, t, o)) : (Oe && i && Qo(t), t.flags |= 1, bt(e, t, n, o), t.child);
  }
  function Vp(e, t, n, i, o, u) {
    return Ya(t), t.updateQueue = null, n = qf(
      t,
      i,
      n,
      o
    ), Gf(e), i = mc(), e !== null && !ot ? (hc(e, t, u), Bn(e, t, u)) : (Oe && i && Qo(t), t.flags |= 1, bt(e, t, n, u), t.child);
  }
  function Hp(e, t, n, i, o) {
    if (Ya(t), t.stateNode === null) {
      var u = Ei, p = n.contextType;
      typeof p == "object" && p !== null && (u = vt(p)), u = new n(i, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Mc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = i, u.state = t.memoizedState, u.refs = {}, rc(t), p = n.contextType, u.context = typeof p == "object" && p !== null ? vt(p) : Ei, u.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (Tc(
        t,
        n,
        p,
        i
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (p = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), p !== u.state && Mc.enqueueReplaceState(u, u.state, null), Nr(t, i, u, o), xr(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      u = t.stateNode;
      var S = t.memoizedProps, N = Wa(n, S);
      u.props = N;
      var D = u.context, V = n.contextType;
      p = Ei, typeof V == "object" && V !== null && (p = vt(V));
      var k = n.getDerivedStateFromProps;
      V = typeof k == "function" || typeof u.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, V || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (S || D !== p) && jp(
        t,
        u,
        i,
        p
      ), fa = !1;
      var z = t.memoizedState;
      u.state = z, Nr(t, i, u, o), xr(), D = t.memoizedState, S || z !== D || fa ? (typeof k == "function" && (Tc(
        t,
        n,
        k,
        i
      ), D = t.memoizedState), (N = fa || Ap(
        t,
        n,
        N,
        i,
        z,
        D,
        p
      )) ? (V || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = D), u.props = i, u.state = D, u.context = p, i = N) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      u = t.stateNode, sc(e, t), p = t.memoizedProps, V = Wa(n, p), u.props = V, k = t.pendingProps, z = u.context, D = n.contextType, N = Ei, typeof D == "object" && D !== null && (N = vt(D)), S = n.getDerivedStateFromProps, (D = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== k || z !== N) && jp(
        t,
        u,
        i,
        N
      ), fa = !1, z = t.memoizedState, u.state = z, Nr(t, i, u, o), xr();
      var L = t.memoizedState;
      p !== k || z !== L || fa || e !== null && e.dependencies !== null && Gs(e.dependencies) ? (typeof S == "function" && (Tc(
        t,
        n,
        S,
        i
      ), L = t.memoizedState), (V = fa || Ap(
        t,
        n,
        V,
        i,
        z,
        L,
        N
      ) || e !== null && e.dependencies !== null && Gs(e.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, L, N), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        i,
        L,
        N
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = L), u.props = i, u.state = L, u.context = N, i = V) : (typeof u.componentDidUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return u = i, sl(e, t), i = (t.flags & 128) !== 0, u || i ? (u = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && i ? (t.child = Za(
      t,
      e.child,
      null,
      o
    ), t.child = Za(
      t,
      null,
      n,
      o
    )) : bt(e, t, n, o), t.memoizedState = u.state, e = t.child) : e = Bn(
      e,
      t,
      o
    ), e;
  }
  function Gp(e, t, n, i) {
    return ka(), t.flags |= 256, bt(e, t, n, i), t.child;
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
  function Lc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= kt), e;
  }
  function qp(e, t, n) {
    var i = t.pendingProps, o = !1, u = (t.flags & 128) !== 0, p;
    if ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (at.current & 2) !== 0), p && (o = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Oe) {
        if (o ? ha(t) : ga(), (e = Xe) ? (e = Zm(
          e,
          en
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: oa !== null ? { id: Sn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, yt = t, Xe = null)) : e = null, e === null) throw ua(t);
        return vu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = i.children;
      return i = i.fallback, o ? (ga(), o = t.mode, S = ll(
        { mode: "hidden", children: S },
        o
      ), i = Ia(
        i,
        o,
        n,
        null
      ), S.return = t, i.return = t, S.sibling = i, t.child = S, i = t.child, i.memoizedState = Rc(n), i.childLanes = Lc(
        e,
        p,
        n
      ), t.memoizedState = zc, Tr(null, i)) : (ha(t), Uc(t, S));
    }
    var N = e.memoizedState;
    if (N !== null && (S = N.dehydrated, S !== null)) {
      if (u)
        t.flags & 256 ? (ha(t), t.flags &= -257, t = Bc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ga(), t.child = e.child, t.flags |= 128, t = null) : (ga(), S = i.fallback, o = t.mode, i = ll(
          { mode: "visible", children: i.children },
          o
        ), S = Ia(
          S,
          o,
          n,
          null
        ), S.flags |= 2, i.return = t, S.return = t, i.sibling = S, t.child = i, Za(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = Rc(n), i.childLanes = Lc(
          e,
          p,
          n
        ), t.memoizedState = zc, t = Tr(null, i));
      else if (ha(t), vu(S)) {
        if (p = S.nextSibling && S.nextSibling.dataset, p) var D = p.dgst;
        p = D, i = Error(l(419)), i.stack = "", i.digest = p, yr({ value: i, source: null, stack: null }), t = Bc(
          e,
          t,
          n
        );
      } else if (ot || ji(e, t, n, !1), p = (n & e.childLanes) !== 0, ot || p) {
        if (p = Ye, p !== null && (i = Ua(p, n), i !== 0 && i !== N.retryLane))
          throw N.retryLane = i, qa(e, i), Rt(p, e, i), Cc;
        yu(S) || gl(), t = Bc(
          e,
          t,
          n
        );
      } else
        yu(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = N.treeContext, Xe = nn(
          S.nextSibling
        ), yt = t, Oe = !0, ca = null, en = !1, e !== null && Nf(t, e), t = Uc(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (ga(), S = i.fallback, o = t.mode, N = e.child, D = N.sibling, i = Cn(N, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = N.subtreeFlags & 65011712, D !== null ? S = Cn(
      D,
      S
    ) : (S = Ia(
      S,
      o,
      n,
      null
    ), S.flags |= 2), S.return = t, i.return = t, i.sibling = S, t.child = i, Tr(null, i), i = t.child, S = e.child.memoizedState, S === null ? S = Rc(n) : (o = S.cachePool, o !== null ? (N = st._currentValue, o = o.parent !== N ? { parent: N, pool: N } : o) : o = Mf(), S = {
      baseLanes: S.baseLanes | n,
      cachePool: o
    }), i.memoizedState = S, i.childLanes = Lc(
      e,
      p,
      n
    ), t.memoizedState = zc, Tr(e.child, i)) : (ha(t), n = e.child, e = n.sibling, n = Cn(n, {
      mode: "visible",
      children: i.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Uc(e, t) {
    return t = ll(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ll(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function Bc(e, t, n) {
    return Za(t, e.child, null, n), e = Uc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ip(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Po(e.return, t, n);
  }
  function Vc(e, t, n, i, o, u) {
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
  function kp(e, t, n) {
    var i = t.pendingProps, o = i.revealOrder, u = i.tail;
    i = i.children;
    var p = at.current, S = (p & 2) !== 0;
    if (S ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, F(at, p), bt(e, t, i, n), i = Oe ? gr : 0, !S && e !== null && (e.flags & 128) !== 0)
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
          e = n.alternate, e !== null && Js(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Vc(
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
          if (e = o.alternate, e !== null && Js(e) === null) {
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
          u,
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
    if (e !== null && (t.dependencies = e.dependencies), ba |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ji(
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
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Gs(e)));
  }
  function qv(e, t, n) {
    switch (t.tag) {
      case 3:
        We(t, t.stateNode.containerInfo), da(t, st, e.memoizedState.cache), ka();
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
          return t.flags |= 128, dc(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (ha(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? qp(e, t, n) : (ha(t), e = Bn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        ha(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (ji(
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
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), F(at, at.current), i) break;
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
    return Bn(e, t, n);
  }
  function Kp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!Hc(e, n) && (t.flags & 128) === 0)
          return ot = !1, qv(
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
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            Ko(e) ? (i = Wa(e, i), t.tag = 1, t = Hp(
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
              if (o === P) {
                t.tag = 11, t = Dp(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === H) {
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
        return i = t.type, o = Wa(
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
          o = u.element, sc(e, t), Nr(t, i, null, n);
          var p = t.memoizedState;
          if (i = p.cache, da(t, st, i), i !== u.cache && ec(
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
              for (Xe = nn(e.firstChild), yt = t, Oe = !0, ca = null, en = !0, n = Lf(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ka(), i === o) {
              t = Bn(
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
        return sl(e, t), e === null ? (n = nh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Oe || (n = t.type, e = t.pendingProps, i = xl(
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
        ), yt = t, en = !0, o = Xe, Na(t.type) ? (bu = o, Xe = nn(i.firstChild)) : Xe = o), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), sl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Oe && ((o = i = Xe) && (i = vb(
          i,
          t.type,
          t.pendingProps,
          en
        ), i !== null ? (t.stateNode = i, yt = t, Xe = nn(i.firstChild), en = !1, o = !0) : o = !1), o || ua(t)), gn(t), o = t.type, u = t.pendingProps, p = e !== null ? e.memoizedProps : null, i = u.children, mu(o, u) ? i = null : p !== null && mu(o, p) && (t.flags |= 32), t.memoizedState !== null && (o = pc(
          e,
          t,
          Dv,
          null,
          null,
          n
        ), kr._currentValue = o), sl(e, t), bt(e, t, i, n), t.child;
      case 6:
        return e === null && Oe && ((e = n = Xe) && (n = bb(
          n,
          t.pendingProps,
          en
        ), n !== null ? (t.stateNode = n, yt = t, Xe = null, e = !0) : e = !1), e || ua(t)), null;
      case 13:
        return qp(e, t, n);
      case 4:
        return We(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Za(
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
        return kp(e, t, n);
      case 31:
        return Gv(e, t, n);
      case 22:
        return Lp(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ya(t), i = vt(st), e === null ? (o = ac(), o === null && (o = Ye, u = tc(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= n), o = u), t.memoizedState = { parent: i, cache: o }, rc(t), da(t, st, o)) : ((e.lanes & n) !== 0 && (sc(e, t), Nr(t, null, null, n), xr()), o = e.memoizedState, u = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), da(t, st, i)) : (i = u.cache, da(t, st, i), i !== o.cache && ec(
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
  function Vn(e) {
    e.flags |= 4;
  }
  function Gc(e, t, n, i, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (vm()) e.flags |= 8192;
        else
          throw Ja = Ks, ic;
    } else e.flags &= -16777217;
  }
  function Yp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !lh(t))
      if (vm()) e.flags |= 8192;
      else
        throw Ja = Ks, ic;
  }
  function ol(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ir() : 536870912, e.lanes |= t, Bi |= t);
  }
  function Mr(e, t) {
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
  function Iv(e, t, n) {
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
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Rn(st), Ae(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ai(t) ? Vn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Fo())), Qe(t), null;
      case 26:
        var o = t.type, u = t.memoizedState;
        return e === null ? (Vn(t), u !== null ? (Qe(t), Yp(t, u)) : (Qe(t), Gc(
          t,
          o,
          null,
          i,
          n
        ))) : u ? u !== e.memoizedState ? (Vn(t), Qe(t), Yp(t, u)) : (Qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Vn(t), Qe(t), Gc(
          t,
          o,
          e,
          i,
          n
        )), null;
      case 27:
        if (ln(t), n = Se.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Vn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          e = re.current, Ai(t) ? Af(t) : (e = Pm(o, i, n), t.stateNode = e, Vn(t));
        }
        return Qe(t), null;
      case 5:
        if (ln(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Vn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(l(166));
            return Qe(t), null;
          }
          if (u = re.current, Ai(t))
            Af(t);
          else {
            var p = xl(
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
          if (e = Se.current, Ai(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = yt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[je] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || qm(e.nodeValue, n)), e || ua(t, !0);
          } else
            e = xl(e).createTextNode(
              i
            ), e[je] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = Ai(t), n !== null) {
            if (e === null) {
              if (!i) throw Error(l(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
              e[je] = t;
            } else
              ka(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), e = !1;
          } else
            n = Fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(l(558));
        }
        return Qe(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Ai(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(l(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
              o[je] = t;
            } else
              ka(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), o = !1;
          } else
            o = Fo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        return qt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), ol(t, t.updateQueue), Qe(t), null);
      case 4:
        return Ae(), e === null && cu(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Rn(t.type), Qe(t), null;
      case 19:
        if (U(at), i = t.memoizedState, i === null) return Qe(t), null;
        if (o = (t.flags & 128) !== 0, u = i.rendering, u === null)
          if (o) Mr(i, !1);
          else {
            if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Js(e), u !== null) {
                  for (t.flags |= 128, Mr(i, !1), e = u.updateQueue, t.updateQueue = e, ol(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Sf(n, e), n = n.sibling;
                  return F(
                    at,
                    at.current & 1 | 2
                  ), Oe && Dn(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Nt() > pl && (t.flags |= 128, o = !0, Mr(i, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Js(u), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ol(t, e), Mr(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Oe)
                return Qe(t), null;
            } else
              2 * Nt() - i.renderingStartTime > pl && n !== 536870912 && (t.flags |= 128, o = !0, Mr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (e = i.last, e !== null ? e.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Nt(), e.sibling = null, n = at.current, F(
          at,
          o ? n & 1 | 2 : n & 1
        ), Oe && Dn(t, i.treeForkCount), e) : (Qe(t), null);
      case 22:
      case 23:
        return qt(t), uc(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), n = t.updateQueue, n !== null && ol(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && U(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Rn(st), Qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function kv(e, t) {
    switch (Jo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(st), Ae(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ln(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (qt(t), t.alternate === null)
            throw Error(l(340));
          ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(l(340));
          ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return U(at), null;
      case 4:
        return Ae(), null;
      case 10:
        return Rn(t.type), null;
      case 22:
      case 23:
        return qt(t), uc(), e !== null && U(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Rn(st), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xp(e, t) {
    switch (Jo(t), t.tag) {
      case 3:
        Rn(st), Ae();
        break;
      case 26:
      case 27:
      case 5:
        ln(t);
        break;
      case 4:
        Ae();
        break;
      case 31:
        t.memoizedState !== null && qt(t);
        break;
      case 13:
        qt(t);
        break;
      case 19:
        U(at);
        break;
      case 10:
        Rn(t.type);
        break;
      case 22:
      case 23:
        qt(t), uc(), e !== null && U(Xa);
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
      Ve(t, t.return, S);
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
              var N = n, D = S;
              try {
                D();
              } catch (V) {
                Ve(
                  o,
                  N,
                  V
                );
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (V) {
      Ve(t, t.return, V);
    }
  }
  function Qp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Bf(t, n);
      } catch (i) {
        Ve(e, e.return, i);
      }
    }
  }
  function Jp(e, t, n) {
    n.props = Wa(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Ve(e, t, i);
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
      Ve(e, t, o);
    }
  }
  function En(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Ve(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Ve(e, t, o);
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
      Ve(e, e.return, o);
    }
  }
  function qc(e, t, n) {
    try {
      var i = e.stateNode;
      fb(i, e.type, n, t), i[Ze] = t;
    } catch (o) {
      Ve(e, e.return, o);
    }
  }
  function Fp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Na(e.type) || e.tag === 4;
  }
  function Ic(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Na(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function kc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mn));
    else if (i !== 4 && (i === 27 && Na(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (kc(e, t, n), e = e.sibling; e !== null; )
        kc(e, t, n), e = e.sibling;
  }
  function cl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && Na(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (cl(e, t, n), e = e.sibling; e !== null; )
        cl(e, t, n), e = e.sibling;
  }
  function Wp(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      St(t, i, n), t[je] = e, t[Ze] = n;
    } catch (u) {
      Ve(e, e.return, u);
    }
  }
  var Hn = !1, ct = !1, Kc = !1, Pp = typeof WeakSet == "function" ? WeakSet : Set, pt = null;
  function Kv(e, t) {
    if (e = e.containerInfo, fu = Ml, e = df(e), Bo(e)) {
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
            var p = 0, S = -1, N = -1, D = 0, V = 0, k = e, z = null;
            t: for (; ; ) {
              for (var L; k !== n || o !== 0 && k.nodeType !== 3 || (S = p + o), k !== u || i !== 0 && k.nodeType !== 3 || (N = p + i), k.nodeType === 3 && (p += k.nodeValue.length), (L = k.firstChild) !== null; )
                z = k, k = L;
              for (; ; ) {
                if (k === e) break t;
                if (z === n && ++D === o && (S = p), z === u && ++V === i && (N = p), (L = k.nextSibling) !== null) break;
                k = z, z = k.parentNode;
              }
              k = L;
            }
            n = S === -1 || N === -1 ? null : { start: S, end: N };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (pu = { focusedElem: e, selectionRange: n }, Ml = !1, pt = t; pt !== null; )
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
                  var se = Wa(
                    n.type,
                    o
                  );
                  e = i.getSnapshotBeforeUpdate(
                    se,
                    u
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (me) {
                  Ve(
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
        qn(e, n), i & 4 && Or(5, n);
        break;
      case 1:
        if (qn(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Ve(n, n.return, p);
            }
          else {
            var o = Wa(
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
              Ve(
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
            Bf(e, t);
          } catch (p) {
            Ve(n, n.return, p);
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
        qn(e, n), i & 4 && im(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = eb.bind(
          null,
          n
        ), Sb(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || Hn, !i) {
          t = t !== null && t.memoizedState !== null || ct, o = Hn;
          var u = ct;
          Hn = i, (ct = t) && !u ? In(
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
    t !== null && (e.alternate = null, tm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && _o(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
        Na(n.type) && (Fe = n.stateNode, Ot = !1), Gn(
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
              Ve(
                n,
                t,
                u
              );
            }
          else
            try {
              Fe.removeChild(n.stateNode);
            } catch (u) {
              Ve(
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
        Ve(t, t.return, n);
      }
    }
  }
  function im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Yi(e);
      } catch (n) {
        Ve(t, t.return, n);
      }
  }
  function Yv(e) {
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
  function ul(e, t) {
    var n = Yv(e);
    t.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var o = tb.bind(null, e, i);
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
              if (Na(S.type)) {
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
            )) : i === null && e.stateNode !== null && qc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Ct(t, e), Dt(e), i & 512 && (ct || n === null || En(n, n.return)), n !== null && i & 4 && qc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Ct(t, e), Dt(e), i & 512 && (ct || n === null || En(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            hi(o, "");
          } catch (se) {
            Ve(e, e.return, se);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, qc(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Kc = !0);
        break;
      case 6:
        if (Ct(t, e), Dt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (se) {
            Ve(e, e.return, se);
          }
        }
        break;
      case 3:
        if (jl = null, o = dn, dn = Nl(t.containerInfo), Ct(t, e), dn = o, Dt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Yi(t.containerInfo);
          } catch (se) {
            Ve(e, e.return, se);
          }
        Kc && (Kc = !1, sm(e));
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
        Ct(t, e), Dt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ul(e, i)));
        break;
      case 13:
        Ct(t, e), Dt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (fl = Nt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ul(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var N = n !== null && n.memoizedState !== null, D = Hn, V = ct;
        if (Hn = D || o, ct = V || N, Ct(t, e), ct = V, Hn = D, Dt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || N || Hn || ct || Pa(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                N = n = t;
                try {
                  if (u = N.stateNode, o)
                    p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    S = N.stateNode;
                    var k = N.memoizedProps.style, z = k != null && k.hasOwnProperty("display") ? k.display : null;
                    S.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (se) {
                  Ve(N, N.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                N = t;
                try {
                  N.stateNode.nodeValue = o ? "" : N.memoizedProps;
                } catch (se) {
                  Ve(N, N.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                N = t;
                try {
                  var L = N.stateNode;
                  o ? Jm(L, !0) : Jm(N.stateNode, !1);
                } catch (se) {
                  Ve(N, N.return, se);
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
        i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, ul(e, n))));
        break;
      case 19:
        Ct(t, e), Dt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, ul(e, i)));
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
            cl(e, u, o);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (hi(p, ""), n.flags &= -33);
            var S = Ic(e);
            cl(e, S, p);
            break;
          case 3:
          case 4:
            var N = n.stateNode.containerInfo, D = Ic(e);
            kc(
              e,
              D,
              N
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (V) {
        Ve(e, e.return, V);
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
  function Pa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ya(4, t, t.return), Pa(t);
          break;
        case 1:
          En(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Jp(
            t,
            t.return,
            n
          ), Pa(t);
          break;
        case 27:
          Gr(t.stateNode);
        case 26:
        case 5:
          En(t, t.return), Pa(t);
          break;
        case 22:
          t.memoizedState === null && Pa(t);
          break;
        case 30:
          Pa(t);
          break;
        default:
          Pa(t);
      }
      e = e.sibling;
    }
  }
  function In(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, u = t, p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          In(
            o,
            u,
            n
          ), Or(4, u);
          break;
        case 1:
          if (In(
            o,
            u,
            n
          ), i = u, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (D) {
              Ve(i, i.return, D);
            }
          if (i = u, o = i.updateQueue, o !== null) {
            var S = i.stateNode;
            try {
              var N = o.shared.hiddenCallbacks;
              if (N !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < N.length; o++)
                  Uf(N[o], S);
            } catch (D) {
              Ve(i, i.return, D);
            }
          }
          n && p & 64 && Qp(u), Cr(u, u.return);
          break;
        case 27:
          Wp(u);
        case 26:
        case 5:
          In(
            o,
            u,
            n
          ), n && i === null && p & 4 && Zp(u), Cr(u, u.return);
          break;
        case 12:
          In(
            o,
            u,
            n
          );
          break;
        case 31:
          In(
            o,
            u,
            n
          ), n && p & 4 && am(o, u);
          break;
        case 13:
          In(
            o,
            u,
            n
          ), n && p & 4 && im(o, u);
          break;
        case 22:
          u.memoizedState === null && In(
            o,
            u,
            n
          ), Cr(u, u.return);
          break;
        case 30:
          break;
        default:
          In(
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
  function Xc(e, t) {
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
          } catch (N) {
            Ve(t, t.return, N);
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
        ) : (u._visibility |= 2, Ri(
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
        ), o & 2048 && Xc(t.alternate, t);
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
  function Ri(e, t, n, i, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, p = t, S = n, N = i, D = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Ri(
            u,
            p,
            S,
            N,
            o
          ), Or(8, p);
          break;
        case 23:
          break;
        case 22:
          var V = p.stateNode;
          p.memoizedState !== null ? V._visibility & 2 ? Ri(
            u,
            p,
            S,
            N,
            o
          ) : Dr(
            u,
            p
          ) : (V._visibility |= 2, Ri(
            u,
            p,
            S,
            N,
            o
          )), o && D & 2048 && Yc(
            p.alternate,
            p
          );
          break;
        case 24:
          Ri(
            u,
            p,
            S,
            N,
            o
          ), o && D & 2048 && Xc(p.alternate, p);
          break;
        default:
          Ri(
            u,
            p,
            S,
            N,
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
            Dr(n, i), o & 2048 && Xc(i.alternate, i);
            break;
          default:
            Dr(n, i);
        }
        t = t.sibling;
      }
  }
  var zr = 8192;
  function Li(e, t, n) {
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
        Li(
          e,
          t,
          n
        ), e.flags & zr && e.memoizedState !== null && Cb(
          n,
          dn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Li(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var i = dn;
        dn = Nl(e.stateNode.containerInfo), Li(
          e,
          t,
          n
        ), dn = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = zr, zr = 16777216, Li(
          e,
          t,
          n
        ), zr = i) : Li(
          e,
          t,
          n
        ));
        break;
      default:
        Li(
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
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, dl(e)) : Rr(e);
        break;
      default:
        Rr(e);
    }
  }
  function dl(e) {
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
          ya(8, t, t.return), dl(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, dl(t));
          break;
        default:
          dl(t);
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
  var Xv = {
    getCacheForType: function(e) {
      var t = vt(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return vt(st).controller.signal;
    }
  }, Qv = typeof WeakMap == "function" ? WeakMap : Map, Le = 0, Ye = null, we = null, Te = 0, Be = 0, It = null, va = !1, Ui = !1, Qc = !1, kn = 0, tt = 0, ba = 0, ei = 0, Jc = 0, kt = 0, Bi = 0, Lr = null, zt = null, Zc = !1, fl = 0, fm = 0, pl = 1 / 0, ml = null, Sa = null, dt = 0, _a = null, Vi = null, Kn = 0, Fc = 0, Wc = null, pm = null, Ur = 0, Pc = null;
  function Kt() {
    return (Le & 2) !== 0 && Te !== 0 ? Te & -Te : w.T !== null ? ru() : Bt();
  }
  function mm() {
    if (kt === 0)
      if ((Te & 536870912) === 0 || Oe) {
        var e = jt;
        jt <<= 1, (jt & 3932160) === 0 && (jt = 262144), kt = e;
      } else kt = 536870912;
    return e = Gt.current, e !== null && (e.flags |= 32), kt;
  }
  function Rt(e, t, n) {
    (e === Ye && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (Hi(e, 0), Ea(
      e,
      Te,
      kt,
      !1
    )), sa(e, n), ((Le & 2) === 0 || e !== Ye) && (e === Ye && ((Le & 2) === 0 && (ei |= n), tt === 4 && Ea(
      e,
      Te,
      kt,
      !1
    )), xn(e));
  }
  function hm(e, t, n) {
    if ((Le & 6) !== 0) throw Error(l(327));
    var i = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ra(e, t), o = i ? Fv(e, t) : tu(e, t, !0), u = i;
    do {
      if (o === 0) {
        Ui && !i && Ea(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Jv(n)) {
          o = tu(e, t, !1), u = !1;
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
              var N = S.current.memoizedState.isDehydrated;
              if (N && (Hi(S, p).flags |= 256), p = tu(
                S,
                p,
                !1
              ), p !== 2) {
                if (Qc && !N) {
                  S.errorRecoveryDisabledLanes |= u, ei |= u, o = 4;
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
          Hi(e, 0), Ea(e, t, 0, !0);
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
                kt,
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
          if ((t & 62914560) === t && (o = fl + 300 - Nt(), 10 < o)) {
            if (Ea(
              i,
              t,
              kt,
              !va
            ), Yt(i, 0, !0) !== 0) break e;
            Kn = t, i.timeoutHandle = Ym(
              gm.bind(
                null,
                i,
                n,
                zt,
                ml,
                Zc,
                t,
                kt,
                ei,
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
            ml,
            Zc,
            t,
            kt,
            ei,
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
  function gm(e, t, n, i, o, u, p, S, N, D, V, k, z, L) {
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
        u,
        k
      );
      var se = (u & 62914560) === u ? fl - Nt() : (u & 4194048) === u ? fm - Nt() : 0;
      if (se = Db(
        k,
        se
      ), se !== null) {
        Kn = u, e.cancelPendingCommit = se(
          Nm.bind(
            null,
            e,
            t,
            u,
            n,
            i,
            o,
            p,
            S,
            N,
            V,
            k,
            null,
            z,
            L
          )
        ), Ea(e, u, p, !D);
        return;
      }
    }
    Nm(
      e,
      t,
      u,
      n,
      i,
      o,
      p,
      S,
      N
    );
  }
  function Jv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], u = o.getSnapshot;
          o = o.value;
          try {
            if (!Vt(u(), o)) return !1;
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
    t &= ~Jc, t &= ~ei, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var u = 31 - At(o), p = 1 << u;
      i[u] = -1, o &= ~p;
    }
    n !== 0 && ve(e, n, t);
  }
  function hl() {
    return (Le & 6) === 0 ? (Br(0), !1) : !0;
  }
  function eu() {
    if (we !== null) {
      if (Be === 0)
        var e = we.return;
      else
        e = we, zn = Ka = null, gc(e), Mi = null, Sr = 0, e = we;
      for (; e !== null; )
        Xp(e.alternate, e), e = e.return;
      we = null;
    }
  }
  function Hi(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, hb(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Kn = 0, eu(), Ye = e, we = n = Cn(e.current, null), Te = t, Be = 0, It = null, va = !1, Ui = ra(e, t), Qc = !1, Bi = kt = Jc = ei = ba = tt = 0, zt = Lr = null, Zc = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - At(i), u = 1 << o;
        t |= e[o], i &= ~u;
      }
    return kn = t, Ls(), n;
  }
  function ym(e, t) {
    xe = null, w.H = $r, t === Ti || t === ks ? (t = Df(), Be = 3) : t === ic ? (t = Df(), Be = 4) : Be = t === Cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, It = t, we === null && (tt = 1, il(
      e,
      Ft(t, e.current)
    ));
  }
  function vm() {
    var e = Gt.current;
    return e === null ? !0 : (Te & 4194048) === Te ? tn === null : (Te & 62914560) === Te || (Te & 536870912) !== 0 ? e === tn : !1;
  }
  function bm() {
    var e = w.H;
    return w.H = $r, e === null ? $r : e;
  }
  function Sm() {
    var e = w.A;
    return w.A = Xv, e;
  }
  function gl() {
    tt = 4, va || (Te & 4194048) !== Te && Gt.current !== null || (Ui = !0), (ba & 134217727) === 0 && (ei & 134217727) === 0 || Ye === null || Ea(
      Ye,
      Te,
      kt,
      !1
    );
  }
  function tu(e, t, n) {
    var i = Le;
    Le |= 2;
    var o = bm(), u = Sm();
    (Ye !== e || Te !== t) && (ml = null, Hi(e, t)), t = !1;
    var p = tt;
    e: do
      try {
        if (Be !== 0 && we !== null) {
          var S = we, N = It;
          switch (Be) {
            case 8:
              eu(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var D = Be;
              if (Be = 0, It = null, Gi(e, S, N, D), n && Ui) {
                p = 0;
                break e;
              }
              break;
            default:
              D = Be, Be = 0, It = null, Gi(e, S, N, D);
          }
        }
        Zv(), p = tt;
        break;
      } catch (V) {
        ym(e, V);
      }
    while (!0);
    return t && e.shellSuspendCounter++, zn = Ka = null, Le = i, w.H = o, w.A = u, we === null && (Ye = null, Te = 0, Ls()), p;
  }
  function Zv() {
    for (; we !== null; ) _m(we);
  }
  function Fv(e, t) {
    var n = Le;
    Le |= 2;
    var i = bm(), o = Sm();
    Ye !== e || Te !== t ? (ml = null, pl = Nt() + 500, Hi(e, t)) : Ui = ra(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && we !== null) {
          t = we;
          var u = It;
          t: switch (Be) {
            case 1:
              Be = 0, It = null, Gi(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Of(u)) {
                Be = 0, It = null, Em(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Ye !== e || (Be = 7), xn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              Of(u) ? (Be = 0, It = null, Em(t)) : (Be = 0, It = null, Gi(e, t, u, 7));
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
                    Be = 0, It = null;
                    var N = S.sibling;
                    if (N !== null) we = N;
                    else {
                      var D = S.return;
                      D !== null ? (we = D, yl(D)) : we = null;
                    }
                    break t;
                  }
              }
              Be = 0, It = null, Gi(e, t, u, 5);
              break;
            case 6:
              Be = 0, It = null, Gi(e, t, u, 6);
              break;
            case 8:
              eu(), tt = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        Wv();
        break;
      } catch (V) {
        ym(e, V);
      }
    while (!0);
    return zn = Ka = null, w.H = i, w.A = o, Le = n, we !== null ? 0 : (Ye = null, Te = 0, Ls(), tt);
  }
  function Wv() {
    for (; we !== null && !si(); )
      _m(we);
  }
  function _m(e) {
    var t = Kp(e.alternate, e, kn);
    e.memoizedProps = e.pendingProps, t === null ? yl(e) : we = t;
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
          Te
        );
        break;
      case 11:
        t = Vp(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Te
        );
        break;
      case 5:
        gc(t);
      default:
        Xp(n, t), t = we = Sf(t, kn), t = Kp(n, t, kn);
    }
    e.memoizedProps = e.pendingProps, t === null ? yl(e) : we = t;
  }
  function Gi(e, t, n, i) {
    zn = Ka = null, gc(t), Mi = null, Sr = 0;
    var o = t.return;
    try {
      if (Hv(
        e,
        o,
        t,
        n,
        Te
      )) {
        tt = 1, il(
          e,
          Ft(n, e.current)
        ), we = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw we = o, u;
      tt = 1, il(
        e,
        Ft(n, e.current)
      ), we = null;
      return;
    }
    t.flags & 32768 ? (Oe || i === 1 ? e = !0 : Ui || (Te & 536870912) !== 0 ? e = !1 : (va = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Gt.current, i !== null && i.tag === 13 && (i.flags |= 16384))), xm(t, e)) : yl(t);
  }
  function yl(e) {
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
      var n = Iv(
        t.alternate,
        t,
        kn
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
      var n = kv(e.alternate, e);
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
  function Nm(e, t, n, i, o, u, p, S, N) {
    e.cancelPendingCommit = null;
    do
      vl();
    while (dt !== 0);
    if ((Le & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (u = t.lanes | t.childLanes, u |= Io, G(
        e,
        n,
        u,
        p,
        S,
        N
      ), e === Ye && (we = Ye = null, Te = 0), Vi = t, _a = e, Kn = n, Fc = u, Wc = o, pm = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, nb(La, function() {
        return Tm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = w.T, w.T = null, o = K.p, K.p = 2, p = Le, Le |= 4;
        try {
          Kv(e, t, n);
        } finally {
          Le = p, K.p = o, w.T = i;
        }
      }
      dt = 1, Am(), jm(), wm();
    }
  }
  function Am() {
    if (dt === 1) {
      dt = 0;
      var e = _a, t = Vi, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = w.T, w.T = null;
        var i = K.p;
        K.p = 2;
        var o = Le;
        Le |= 4;
        try {
          rm(t, e);
          var u = pu, p = df(e.containerInfo), S = u.focusedElem, N = u.selectionRange;
          if (p !== S && S && S.ownerDocument && uf(
            S.ownerDocument.documentElement,
            S
          )) {
            if (N !== null && Bo(S)) {
              var D = N.start, V = N.end;
              if (V === void 0 && (V = D), "selectionStart" in S)
                S.selectionStart = D, S.selectionEnd = Math.min(
                  V,
                  S.value.length
                );
              else {
                var k = S.ownerDocument || document, z = k && k.defaultView || window;
                if (z.getSelection) {
                  var L = z.getSelection(), se = S.textContent.length, me = Math.min(N.start, se), Ie = N.end === void 0 ? me : Math.min(N.end, se);
                  !L.extend && me > Ie && (p = Ie, Ie = me, me = p);
                  var T = cf(
                    S,
                    me
                  ), j = cf(
                    S,
                    Ie
                  );
                  if (T && j && (L.rangeCount !== 1 || L.anchorNode !== T.node || L.anchorOffset !== T.offset || L.focusNode !== j.node || L.focusOffset !== j.offset)) {
                    var C = k.createRange();
                    C.setStart(T.node, T.offset), L.removeAllRanges(), me > Ie ? (L.addRange(C), L.extend(j.node, j.offset)) : (C.setEnd(j.node, j.offset), L.addRange(C));
                  }
                }
              }
            }
            for (k = [], L = S; L = L.parentNode; )
              L.nodeType === 1 && k.push({
                element: L,
                left: L.scrollLeft,
                top: L.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < k.length; S++) {
              var q = k[S];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Ml = !!fu, pu = fu = null;
        } finally {
          Le = o, K.p = i, w.T = n;
        }
      }
      e.current = t, dt = 2;
    }
  }
  function jm() {
    if (dt === 2) {
      dt = 0;
      var e = _a, t = Vi, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = w.T, w.T = null;
        var i = K.p;
        K.p = 2;
        var o = Le;
        Le |= 4;
        try {
          em(e, t.alternate, t);
        } finally {
          Le = o, K.p = i, w.T = n;
        }
      }
      dt = 3;
    }
  }
  function wm() {
    if (dt === 4 || dt === 3) {
      dt = 0, na();
      var e = _a, t = Vi, n = Kn, i = pm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? dt = 5 : (dt = 0, Vi = _a = null, $m(e, e.pendingLanes));
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
        t = w.T, o = K.p, K.p = 2, w.T = null;
        try {
          for (var u = e.onRecoverableError, p = 0; p < i.length; p++) {
            var S = i[p];
            u(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          w.T = t, K.p = o;
        }
      }
      (Kn & 3) !== 0 && vl(), xn(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === Pc ? Ur++ : (Ur = 0, Pc = e) : Ur = 0, Br(0);
    }
  }
  function $m(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, vr(t)));
  }
  function vl() {
    return Am(), jm(), wm(), Tm();
  }
  function Tm() {
    if (dt !== 5) return !1;
    var e = _a, t = Fc;
    Fc = 0;
    var n = vn(Kn), i = w.T, o = K.p;
    try {
      K.p = 32 > n ? 32 : n, w.T = null, n = Wc, Wc = null;
      var u = _a, p = Kn;
      if (dt = 0, Vi = _a = null, Kn = 0, (Le & 6) !== 0) throw Error(l(331));
      var S = Le;
      if (Le |= 4, um(u.current), lm(
        u,
        u.current,
        p,
        n
      ), Le = S, Br(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(wn, u);
        } catch {
        }
      return !0;
    } finally {
      K.p = o, w.T = i, $m(e, t);
    }
  }
  function Mm(e, t, n) {
    t = Ft(n, t), t = Oc(e.stateNode, t, 2), e = ma(e, t, 2), e !== null && (sa(e, 2), xn(e));
  }
  function Ve(e, t, n) {
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
  function nu(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Qv();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(n) || (Qc = !0, o.add(n), e = Pv.bind(null, e, t, n), t.then(e, e));
  }
  function Pv(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (Te & n) === n && (tt === 4 || tt === 3 && (Te & 62914560) === Te && 300 > Nt() - fl ? (Le & 2) === 0 && Hi(e, 0) : Jc |= n, Bi === Te && (Bi = 0)), xn(e);
  }
  function Om(e, t) {
    t === 0 && (t = ir()), e = qa(e, t), e !== null && (sa(e, t), xn(e));
  }
  function eb(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Om(e, n);
  }
  function tb(e, t) {
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
  function nb(e, t) {
    return on(e, t);
  }
  var bl = null, qi = null, au = !1, Sl = !1, iu = !1, xa = 0;
  function xn(e) {
    e !== qi && e.next === null && (qi === null ? bl = qi = e : qi = qi.next = e), Sl = !0, au || (au = !0, ib());
  }
  function Br(e, t) {
    if (!iu && Sl) {
      iu = !0;
      do
        for (var n = !1, i = bl; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var p = i.suspendedLanes, S = i.pingedLanes;
              u = (1 << 31 - At(42 | e) + 1) - 1, u &= o & ~(p & ~S), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Rm(i, u));
          } else
            u = Te, u = Yt(
              i,
              i === Ye ? u : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (u & 3) === 0 || ra(i, u) || (n = !0, Rm(i, u));
          i = i.next;
        }
      while (n);
      iu = !1;
    }
  }
  function ab() {
    Cm();
  }
  function Cm() {
    Sl = au = !1;
    var e = 0;
    xa !== 0 && mb() && (e = xa);
    for (var t = Nt(), n = null, i = bl; i !== null; ) {
      var o = i.next, u = Dm(i, t);
      u === 0 ? (i.next = null, n === null ? bl = o : n.next = o, o === null && (qi = n)) : (n = i, (e !== 0 || (u & 3) !== 0) && (Sl = !0)), i = o;
    }
    dt !== 0 && dt !== 5 || Br(e), xa !== 0 && (xa = 0);
  }
  function Dm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var p = 31 - At(u), S = 1 << p, N = o[p];
      N === -1 ? ((S & n) === 0 || (S & i) !== 0) && (o[p] = Ns(S, t)) : N <= t && (e.expiredLanes |= S), u &= ~S;
    }
    if (t = Ye, n = Te, n = Yt(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Pe(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ra(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && Pe(i), vn(n)) {
        case 2:
        case 8:
          n = ar;
          break;
        case 32:
          n = La;
          break;
        case 268435456:
          n = _s;
          break;
        default:
          n = La;
      }
      return i = zm.bind(null, e), n = on(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && Pe(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zm(e, t) {
    if (dt !== 0 && dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (vl() && e.callbackNode !== n)
      return null;
    var i = Te;
    return i = Yt(
      e,
      e === Ye ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (hm(e, i, t), Dm(e, Nt()), e.callbackNode != null && e.callbackNode === n ? zm.bind(null, e) : null);
  }
  function Rm(e, t) {
    if (vl()) return null;
    hm(e, t, !0);
  }
  function ib() {
    gb(function() {
      (Le & 6) !== 0 ? on(
        Ss,
        ab
      ) : Cm();
    });
  }
  function ru() {
    if (xa === 0) {
      var e = wi;
      e === 0 && (e = ia, ia <<= 1, (ia & 261888) === 0 && (ia = 256)), xa = e;
    }
    return xa;
  }
  function Lm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : $s("" + e);
  }
  function Um(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function rb(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var u = Lm(
        (o[Ze] || null).action
      ), p = i.submitter;
      p && (t = (t = p[Ze] || null) ? Lm(t.formAction) : p.getAttribute("formAction"), t !== null && (u = t, p = null));
      var S = new Cs(
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
                  var N = p ? Um(o, p) : new FormData(o);
                  Ac(
                    n,
                    {
                      pending: !0,
                      data: N,
                      method: o.method,
                      action: u
                    },
                    null,
                    N
                  );
                }
              } else
                typeof u == "function" && (S.preventDefault(), N = p ? Um(o, p) : new FormData(o), Ac(
                  n,
                  {
                    pending: !0,
                    data: N,
                    method: o.method,
                    action: u
                  },
                  u,
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
    var lu = qo[su], sb = lu.toLowerCase(), lb = lu[0].toUpperCase() + lu.slice(1);
    un(
      sb,
      "on" + lb
    );
  }
  un(mf, "onAnimationEnd"), un(hf, "onAnimationIteration"), un(gf, "onAnimationStart"), un("dblclick", "onDoubleClick"), un("focusin", "onFocus"), un("focusout", "onBlur"), un(xv, "onTransitionRun"), un(Nv, "onTransitionStart"), un(Av, "onTransitionCancel"), un(yf, "onTransitionEnd"), pi("onMouseEnter", ["mouseout", "mouseover"]), pi("onMouseLeave", ["mouseout", "mouseover"]), pi("onPointerEnter", ["pointerout", "pointerover"]), pi("onPointerLeave", ["pointerout", "pointerover"]), Ba(
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
  var Vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ob = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vr)
  );
  function Bm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], o = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = i.length - 1; 0 <= p; p--) {
            var S = i[p], N = S.instance, D = S.currentTarget;
            if (S = S.listener, N !== u && o.isPropagationStopped())
              break e;
            u = S, o.currentTarget = D;
            try {
              u(o);
            } catch (V) {
              Rs(V);
            }
            o.currentTarget = null, u = N;
          }
        else
          for (p = 0; p < i.length; p++) {
            if (S = i[p], N = S.instance, D = S.currentTarget, S = S.listener, N !== u && o.isPropagationStopped())
              break e;
            u = S, o.currentTarget = D;
            try {
              u(o);
            } catch (V) {
              Rs(V);
            }
            o.currentTarget = null, u = N;
          }
      }
    }
  }
  function $e(e, t) {
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
  var _l = "_reactListening" + Math.random().toString(36).slice(2);
  function cu(e) {
    if (!e[_l]) {
      e[_l] = !0, Od.forEach(function(n) {
        n !== "selectionchange" && (ob.has(n) || ou(n, !1, e), ou(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_l] || (t[_l] = !0, ou("selectionchange", !1, t));
    }
  }
  function Vm(e, t, n, i) {
    switch (mh(t)) {
      case 2:
        var o = Lb;
        break;
      case 8:
        o = Ub;
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
              var N = p.tag;
              if ((N === 3 || N === 4) && p.stateNode.containerInfo === o)
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (p = ui(S), p === null) return;
            if (N = p.tag, N === 5 || N === 6 || N === 26 || N === 27) {
              i = u = p;
              continue e;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    Id(function() {
      var D = u, V = wo(n), k = [];
      e: {
        var z = vf.get(e);
        if (z !== void 0) {
          var L = Cs, se = e;
          switch (e) {
            case "keypress":
              if (Ms(n) === 0) break e;
            case "keydown":
            case "keyup":
              L = tv;
              break;
            case "focusin":
              se = "focus", L = Do;
              break;
            case "focusout":
              se = "blur", L = Do;
              break;
            case "beforeblur":
            case "afterblur":
              L = Do;
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
              L = Yd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = Iy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = iv;
              break;
            case mf:
            case hf:
            case gf:
              L = Yy;
              break;
            case yf:
              L = sv;
              break;
            case "scroll":
            case "scrollend":
              L = Gy;
              break;
            case "wheel":
              L = ov;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = Qy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = Qd;
              break;
            case "toggle":
            case "beforetoggle":
              L = uv;
          }
          var me = (t & 4) !== 0, Ie = !me && (e === "scroll" || e === "scrollend"), T = me ? z !== null ? z + "Capture" : null : z;
          me = [];
          for (var j = D, C; j !== null; ) {
            var q = j;
            if (C = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || C === null || T === null || (q = lr(j, T), q != null && me.push(
              Hr(j, q, C)
            )), Ie) break;
            j = j.return;
          }
          0 < me.length && (z = new L(
            z,
            se,
            null,
            n,
            V
          ), k.push({ event: z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", z && n !== jo && (se = n.relatedTarget || n.fromElement) && (ui(se) || se[bn]))
            break e;
          if ((L || z) && (z = V.window === V ? V : (z = V.ownerDocument) ? z.defaultView || z.parentWindow : window, L ? (se = n.relatedTarget || n.toElement, L = D, se = se ? ui(se) : null, se !== null && (Ie = d(se), me = se.tag, se !== Ie || me !== 5 && me !== 27 && me !== 6) && (se = null)) : (L = null, se = D), L !== se)) {
            if (me = Yd, q = "onMouseLeave", T = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (me = Qd, q = "onPointerLeave", T = "onPointerEnter", j = "pointer"), Ie = L == null ? z : sr(L), C = se == null ? z : sr(se), z = new me(
              q,
              j + "leave",
              L,
              n,
              V
            ), z.target = Ie, z.relatedTarget = C, q = null, ui(V) === D && (me = new me(
              T,
              j + "enter",
              se,
              n,
              V
            ), me.target = C, me.relatedTarget = Ie, q = me), Ie = q, L && se)
              t: {
                for (me = cb, T = L, j = se, C = 0, q = T; q; q = me(q))
                  C++;
                q = 0;
                for (var de = j; de; de = me(de))
                  q++;
                for (; 0 < C - q; )
                  T = me(T), C--;
                for (; 0 < q - C; )
                  j = me(j), q--;
                for (; C--; ) {
                  if (T === j || j !== null && T === j.alternate) {
                    me = T;
                    break t;
                  }
                  T = me(T), j = me(j);
                }
                me = null;
              }
            else me = null;
            L !== null && Hm(
              k,
              z,
              L,
              me,
              !1
            ), se !== null && Ie !== null && Hm(
              k,
              Ie,
              se,
              me,
              !0
            );
          }
        }
        e: {
          if (z = D ? sr(D) : window, L = z.nodeName && z.nodeName.toLowerCase(), L === "select" || L === "input" && z.type === "file")
            var ze = nf;
          else if (ef(z))
            if (af)
              ze = Sv;
            else {
              ze = vv;
              var le = yv;
            }
          else
            L = z.nodeName, !L || L.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? D && Ao(D.elementType) && (ze = nf) : ze = bv;
          if (ze && (ze = ze(e, D))) {
            tf(
              k,
              ze,
              n,
              V
            );
            break e;
          }
          le && le(e, z, D), e === "focusout" && D && z.type === "number" && D.memoizedProps.value != null && No(z, "number", z.value);
        }
        switch (le = D ? sr(D) : window, e) {
          case "focusin":
            (ef(le) || le.contentEditable === "true") && (bi = le, Vo = D, hr = null);
            break;
          case "focusout":
            hr = Vo = bi = null;
            break;
          case "mousedown":
            Ho = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ho = !1, ff(k, n, V);
            break;
          case "selectionchange":
            if (Ev) break;
          case "keydown":
          case "keyup":
            ff(k, n, V);
        }
        var Ne;
        if (Ro)
          e: {
            switch (e) {
              case "compositionstart":
                var Me = "onCompositionStart";
                break e;
              case "compositionend":
                Me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Me = "onCompositionUpdate";
                break e;
            }
            Me = void 0;
          }
        else
          vi ? Wd(e, n) && (Me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Me = "onCompositionStart");
        Me && (Jd && n.locale !== "ko" && (vi || Me !== "onCompositionStart" ? Me === "onCompositionEnd" && vi && (Ne = kd()) : (la = V, Mo = "value" in la ? la.value : la.textContent, vi = !0)), le = El(D, Me), 0 < le.length && (Me = new Xd(
          Me,
          e,
          null,
          n,
          V
        ), k.push({ event: Me, listeners: le }), Ne ? Me.data = Ne : (Ne = Pd(n), Ne !== null && (Me.data = Ne)))), (Ne = fv ? pv(e, n) : mv(e, n)) && (Me = El(D, "onBeforeInput"), 0 < Me.length && (le = new Xd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          V
        ), k.push({
          event: le,
          listeners: Me
        }), le.data = Ne)), rb(
          k,
          e,
          D,
          n,
          V
        );
      }
      Bm(k, t);
    });
  }
  function Hr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function El(e, t) {
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
  function cb(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Hm(e, t, n, i, o) {
    for (var u = t._reactName, p = []; n !== null && n !== i; ) {
      var S = n, N = S.alternate, D = S.stateNode;
      if (S = S.tag, N !== null && N === i) break;
      S !== 5 && S !== 26 && S !== 27 || D === null || (N = D, o ? (D = lr(n, u), D != null && p.unshift(
        Hr(n, D, N)
      )) : o || (D = lr(n, u), D != null && p.push(
        Hr(n, D, N)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var ub = /\r\n?/g, db = /\u0000|\uFFFD/g;
  function Gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(ub, `
`).replace(db, "");
  }
  function qm(e, t) {
    return t = Gm(t), Gm(e) === t;
  }
  function qe(e, t, n, i, o, u) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || hi(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && hi(e, "" + i);
        break;
      case "className":
        js(e, "class", i);
        break;
      case "tabIndex":
        js(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        js(e, n, i);
        break;
      case "style":
        Gd(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          js(e, "data", i);
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
        i = $s("" + i), e.setAttribute(n, i);
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
        i = $s("" + i), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = Mn);
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
        n = $s("" + i), e.setAttributeNS(
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
        $e("beforetoggle", e), $e("toggle", e), As(e, "popover", i);
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
        As(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Vy.get(n) || n, As(e, n, i));
    }
  }
  function du(e, t, n, i, o, u) {
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
        typeof i == "string" ? hi(e, i) : (typeof i == "number" || typeof i == "bigint") && hi(e, "" + i);
        break;
      case "onScroll":
        i != null && $e("scroll", e);
        break;
      case "onScrollEnd":
        i != null && $e("scrollend", e);
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
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), u = e[Ze] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, o), typeof i == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : As(e, n, i);
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
        var S = u = p = o = null, N = null, D = null;
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
                  N = V;
                  break;
                case "defaultChecked":
                  D = V;
                  break;
                case "value":
                  u = V;
                  break;
                case "defaultValue":
                  S = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(l(137, t));
                  break;
                default:
                  qe(e, t, i, V, n, null);
              }
          }
        Ud(
          e,
          u,
          S,
          N,
          D,
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
        t = u, n = p, e.multiple = !!i, t != null ? mi(e, !!i, t, !1) : n != null && mi(e, !!i, n, !0);
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
        Vd(e, i, o, u);
        return;
      case "option":
        for (N in n)
          if (n.hasOwnProperty(N) && (i = n[N], i != null))
            switch (N) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                qe(e, t, N, i, n, null);
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
        for (i = 0; i < Vr.length; i++)
          $e(Vr[i], e);
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
        for (D in n)
          if (n.hasOwnProperty(D) && (i = n[D], i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                qe(e, t, D, i, n, null);
            }
        return;
      default:
        if (Ao(t)) {
          for (V in n)
            n.hasOwnProperty(V) && (i = n[V], i !== void 0 && du(
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
      n.hasOwnProperty(S) && (i = n[S], i != null && qe(e, t, S, i, n, null));
  }
  function fb(e, t, n, i) {
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
        var o = null, u = null, p = null, S = null, N = null, D = null, V = null;
        for (L in n) {
          var k = n[L];
          if (n.hasOwnProperty(L) && k != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                N = k;
              default:
                i.hasOwnProperty(L) || qe(e, t, L, null, i, k);
            }
        }
        for (var z in i) {
          var L = i[z];
          if (k = n[z], i.hasOwnProperty(z) && (L != null || k != null))
            switch (z) {
              case "type":
                u = L;
                break;
              case "name":
                o = L;
                break;
              case "checked":
                D = L;
                break;
              case "defaultChecked":
                V = L;
                break;
              case "value":
                p = L;
                break;
              case "defaultValue":
                S = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(l(137, t));
                break;
              default:
                L !== k && qe(
                  e,
                  t,
                  z,
                  L,
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
          D,
          V,
          u,
          o
        );
        return;
      case "select":
        L = p = S = z = null;
        for (u in n)
          if (N = n[u], n.hasOwnProperty(u) && N != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                L = N;
              default:
                i.hasOwnProperty(u) || qe(
                  e,
                  t,
                  u,
                  null,
                  i,
                  N
                );
            }
        for (o in i)
          if (u = i[o], N = n[o], i.hasOwnProperty(o) && (u != null || N != null))
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
                u !== N && qe(
                  e,
                  t,
                  o,
                  u,
                  i,
                  N
                );
            }
        t = S, n = p, i = L, z != null ? mi(e, !!n, z, !1) : !!i != !!n && (t != null ? mi(e, !!n, t, !0) : mi(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        L = z = null;
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
                L = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(l(91));
                break;
              default:
                o !== u && qe(e, t, p, o, i, u);
            }
        Bd(e, z, L);
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
        for (N in i)
          if (z = i[N], L = n[N], i.hasOwnProperty(N) && z !== L && (z != null || L != null))
            switch (N) {
              case "selected":
                e.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                qe(
                  e,
                  t,
                  N,
                  z,
                  i,
                  L
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
          z = n[me], n.hasOwnProperty(me) && z != null && !i.hasOwnProperty(me) && qe(e, t, me, null, i, z);
        for (D in i)
          if (z = i[D], L = n[D], i.hasOwnProperty(D) && z !== L && (z != null || L != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(l(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  D,
                  z,
                  i,
                  L
                );
            }
        return;
      default:
        if (Ao(t)) {
          for (var Ie in n)
            z = n[Ie], n.hasOwnProperty(Ie) && z !== void 0 && !i.hasOwnProperty(Ie) && du(
              e,
              t,
              Ie,
              void 0,
              i,
              z
            );
          for (V in i)
            z = i[V], L = n[V], !i.hasOwnProperty(V) || z === L || z === void 0 && L === void 0 || du(
              e,
              t,
              V,
              z,
              i,
              L
            );
          return;
        }
    }
    for (var T in n)
      z = n[T], n.hasOwnProperty(T) && z != null && !i.hasOwnProperty(T) && qe(e, t, T, null, i, z);
    for (k in i)
      z = i[k], L = n[k], !i.hasOwnProperty(k) || z === L || z == null && L == null || qe(e, t, k, z, i, L);
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
  function pb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var o = n[i], u = o.transferSize, p = o.initiatorType, S = o.duration;
        if (u && S && Im(p)) {
          for (p = 0, S = o.responseEnd, i += 1; i < n.length; i++) {
            var N = n[i], D = N.startTime;
            if (D > S) break;
            var V = N.transferSize, k = N.initiatorType;
            V && Im(k) && (N = N.responseEnd, p += V * (N < S ? 1 : (S - D) / (N - D)));
          }
          if (--i, t += 8 * (u + p) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var fu = null, pu = null;
  function xl(e) {
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
  function mb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === hu ? !1 : (hu = e, !0) : (hu = null, !1);
  }
  var Ym = typeof setTimeout == "function" ? setTimeout : void 0, hb = typeof clearTimeout == "function" ? clearTimeout : void 0, Xm = typeof Promise == "function" ? Promise : void 0, gb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xm < "u" ? function(e) {
    return Xm.resolve(null).then(e).catch(yb);
  } : Ym;
  function yb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Na(e) {
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
  function vb(e, t, n, i) {
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
  function bb(e, t, n) {
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
  function yu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function vu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Sb(e, t) {
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
  var bu = null;
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
    switch (t = xl(n), e) {
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
    _o(e);
  }
  var an = /* @__PURE__ */ new Map(), eh = /* @__PURE__ */ new Set();
  function Nl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Yn = K.d;
  K.d = {
    f: _b,
    r: Eb,
    D: xb,
    C: Nb,
    L: Ab,
    m: jb,
    X: $b,
    S: wb,
    M: Tb
  };
  function _b() {
    var e = Yn.f(), t = hl();
    return e || t;
  }
  function Eb(e) {
    var t = di(e);
    t !== null && t.tag === 5 && t.type === "form" ? yp(t) : Yn.r(e);
  }
  var Ii = typeof document > "u" ? null : document;
  function th(e, t, n) {
    var i = Ii;
    if (i && typeof t == "string" && t) {
      var o = Jt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), eh.has(o) || (eh.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), St(t, "link", e), ft(t), i.head.appendChild(t)));
    }
  }
  function xb(e) {
    Yn.D(e), th("dns-prefetch", e, null);
  }
  function Nb(e, t) {
    Yn.C(e, t), th("preconnect", e, t);
  }
  function Ab(e, t, n) {
    Yn.L(e, t, n);
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
          u = ki(e);
          break;
        case "script":
          u = Ki(e);
      }
      an.has(u) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), an.set(u, e), i.querySelector(o) !== null || t === "style" && i.querySelector(qr(u)) || t === "script" && i.querySelector(Ir(u)) || (t = i.createElement("link"), St(t, "link", e), ft(t), i.head.appendChild(t)));
    }
  }
  function jb(e, t) {
    Yn.m(e, t);
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
          u = Ki(e);
      }
      if (!an.has(u) && (e = b({ rel: "modulepreload", href: e }, t), an.set(u, e), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ir(u)))
              return;
        }
        i = n.createElement("link"), St(i, "link", e), ft(i), n.head.appendChild(i);
      }
    }
  }
  function wb(e, t, n) {
    Yn.S(e, t, n);
    var i = Ii;
    if (i && e) {
      var o = fi(i).hoistableStyles, u = ki(e);
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
          ), (n = an.get(u)) && Su(e, n);
          var N = p = i.createElement("link");
          ft(N), St(N, "link", e), N._p = new Promise(function(D, V) {
            N.onload = D, N.onerror = V;
          }), N.addEventListener("load", function() {
            S.loading |= 1;
          }), N.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Al(p, t, i);
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
  function $b(e, t) {
    Yn.X(e, t);
    var n = Ii;
    if (n && e) {
      var i = fi(n).hoistableScripts, o = Ki(e), u = i.get(o);
      u || (u = n.querySelector(Ir(o)), u || (e = b({ src: e, async: !0 }, t), (t = an.get(o)) && _u(e, t), u = n.createElement("script"), ft(u), St(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(o, u));
    }
  }
  function Tb(e, t) {
    Yn.M(e, t);
    var n = Ii;
    if (n && e) {
      var i = fi(n).hoistableScripts, o = Ki(e), u = i.get(o);
      u || (u = n.querySelector(Ir(o)), u || (e = b({ src: e, async: !0, type: "module" }, t), (t = an.get(o)) && _u(e, t), u = n.createElement("script"), ft(u), St(u, "link", e), n.head.appendChild(u)), u = {
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
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ki(n.href), n = fi(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ki(n.href);
          var u = fi(
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
          }, an.set(e, n), u || Mb(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ki(n), n = fi(
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
  function ki(e) {
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
  function Mb(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), St(t, "link", n), ft(t), e.head.appendChild(t));
  }
  function Ki(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function Ir(e) {
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
          ), ft(i), St(i, "style", o), Al(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = ki(n.href);
          var u = e.querySelector(
            qr(o)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ft(u), u;
          i = ah(n), (o = an.get(o)) && Su(i, o), u = (e.ownerDocument || e).createElement("link"), ft(u);
          var p = u;
          return p._p = new Promise(function(S, N) {
            p.onload = S, p.onerror = N;
          }), St(u, "link", i), t.state.loading |= 4, Al(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Ki(n.src), (o = e.querySelector(
            Ir(u)
          )) ? (t.instance = o, ft(o), o) : (i = n, (o = an.get(u)) && (i = b({}, n), _u(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ft(o), St(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Al(i, n.precedence, e));
    return t.instance;
  }
  function Al(e, t, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, u = o, p = 0; p < i.length; p++) {
      var S = i[p];
      if (S.dataset.precedence === t) u = S;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Su(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function _u(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var jl = null;
  function rh(e, t, n) {
    if (jl === null) {
      var i = /* @__PURE__ */ new Map(), o = jl = /* @__PURE__ */ new Map();
      o.set(n, i);
    } else
      o = jl, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
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
  function Ob(e, t, n) {
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
  function Cb(e, t, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = ki(i.href), u = t.querySelector(
          qr(o)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = wl.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, ft(u);
          return;
        }
        u = t.ownerDocument || t, i = ah(i), (o = an.get(o)) && Su(i, o), u = u.createElement("link"), ft(u);
        var p = u;
        p._p = new Promise(function(S, N) {
          p.onload = S, p.onerror = N;
        }), St(u, "link", i), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = wl.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Eu = 0;
  function Db(e, t) {
    return e.stylesheets && e.count === 0 && Tl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Tl(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Eu === 0 && (Eu = 62500 * pb());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Tl(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Eu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function wl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Tl(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var $l = null;
  function Tl(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, $l = /* @__PURE__ */ new Map(), t.forEach(zb, e), $l = null, wl.call(e));
  }
  function zb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = $l.get(e);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), $l.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < o.length; u++) {
          var p = o[u];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), i = p);
        }
        i && n.set(null, i);
      }
      o = t.instance, p = o.getAttribute("data-precedence"), u = n.get(p) || i, u === i && n.set(null, o), n.set(p, o), this.count++, i = wl.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var kr = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: M,
    _currentValue2: M,
    _threadCount: 0
  };
  function Rb(e, t, n, i, o, u, p, S, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ci(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ci(0), this.hiddenUpdates = ci(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function oh(e, t, n, i, o, u, p, S, N, D, V, k) {
    return e = new Rb(
      e,
      t,
      n,
      p,
      N,
      D,
      V,
      k,
      S
    ), t = 1, u === !0 && (t |= 24), u = Ht(3, null, null, t), e.current = u, u.stateNode = e, t = tc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, rc(u), e;
  }
  function ch(e) {
    return e ? (e = Ei, e) : Ei;
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
  function xu(e, t) {
    dh(e, t), (e = e.alternate) && dh(e, t);
  }
  function fh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Rt(t, e, 67108864), xu(e, 67108864);
    }
  }
  function ph(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kt();
      t = Ue(t);
      var n = qa(e, t);
      n !== null && Rt(n, e, t), xu(e, t);
    }
  }
  var Ml = !0;
  function Lb(e, t, n, i) {
    var o = w.T;
    w.T = null;
    var u = K.p;
    try {
      K.p = 2, Nu(e, t, n, i);
    } finally {
      K.p = u, w.T = o;
    }
  }
  function Ub(e, t, n, i) {
    var o = w.T;
    w.T = null;
    var u = K.p;
    try {
      K.p = 8, Nu(e, t, n, i);
    } finally {
      K.p = u, w.T = o;
    }
  }
  function Nu(e, t, n, i) {
    if (Ml) {
      var o = Au(i);
      if (o === null)
        uu(
          e,
          t,
          i,
          Ol,
          n
        ), hh(e, i);
      else if (Vb(
        o,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (hh(e, i), t & 4 && -1 < Bb.indexOf(e)) {
        for (; o !== null; ) {
          var u = di(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var p = yn(u.pendingLanes);
                  if (p !== 0) {
                    var S = u;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                      var N = 1 << 31 - At(p);
                      S.entanglements[1] |= N, p &= ~N;
                    }
                    xn(u), (Le & 6) === 0 && (pl = Nt() + 500, Br(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = qa(u, 2), S !== null && Rt(S, u, 2), hl(), xu(u, 2);
            }
          if (u = Au(i), u === null && uu(
            e,
            t,
            i,
            Ol,
            n
          ), u === o) break;
          o = u;
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
  var Ol = null;
  function ju(e) {
    if (Ol = null, e = ui(e), e !== null) {
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
    return Ol = e, null;
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
        switch (yo()) {
          case Ss:
            return 2;
          case ar:
            return 8;
          case La:
          case vo:
            return 32;
          case _s:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wu = !1, Aa = null, ja = null, wa = null, Kr = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), $a = [], Bb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Aa = null;
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
        Yr.delete(t.pointerId);
    }
  }
  function Xr(e, t, n, i, o, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: u,
      targetContainers: [o]
    }, t !== null && (t = di(t), t !== null && fh(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Vb(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return Aa = Xr(
          Aa,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return ja = Xr(
          ja,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return wa = Xr(
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
          Xr(
            Kr.get(u) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return u = o.pointerId, Yr.set(
          u,
          Xr(
            Yr.get(u) || null,
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
    var t = ui(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, Xt(e.priority, function() {
              ph(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, Xt(e.priority, function() {
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
  function Cl(e) {
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
        return t = di(n), t !== null && fh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function yh(e, t, n) {
    Cl(e) && n.delete(t);
  }
  function Hb() {
    wu = !1, Aa !== null && Cl(Aa) && (Aa = null), ja !== null && Cl(ja) && (ja = null), wa !== null && Cl(wa) && (wa = null), Kr.forEach(yh), Yr.forEach(yh);
  }
  function Dl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, wu || (wu = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      Hb
    )));
  }
  var zl = null;
  function vh(e) {
    zl !== e && (zl = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        zl === e && (zl = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (ju(i || n) === null)
              continue;
            break;
          }
          var u = di(n);
          u !== null && (e.splice(t, 3), t -= 3, Ac(
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
    function t(N) {
      return Dl(N, e);
    }
    Aa !== null && Dl(Aa, e), ja !== null && Dl(ja, e), wa !== null && Dl(wa, e), Kr.forEach(t), Yr.forEach(t);
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
            else if (ju(o) !== null) continue;
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
  function $u(e) {
    this._internalRoot = e;
  }
  Rl.prototype.render = $u.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var n = t.current, i = Kt();
    uh(n, i, e, t, null, null);
  }, Rl.prototype.unmount = $u.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      uh(e.current, 2, null, e, null, null), hl(), t[bn] = null;
    }
  };
  function Rl(e) {
    this._internalRoot = e;
  }
  Rl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Bt();
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
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Gb = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: w,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        wn = Ll.inject(
          Gb
        ), ht = Ll;
      } catch {
      }
  }
  return Jr.createRoot = function(e, t) {
    if (!c(e)) throw Error(l(299));
    var n = !1, i = "", o = wp, u = $p, p = Tp;
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
    ), e[bn] = t.current, cu(e), new $u(t);
  }, Jr.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(l(299));
    var i = !1, o = "", u = wp, p = $p, S = Tp, N = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (N = n.formState)), t = oh(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      o,
      N,
      u,
      p,
      S,
      bh
    ), t.context = ch(null), n = t.current, i = Kt(), i = Ue(i), o = pa(i), o.callback = null, ma(n, o, i), n = i, t.current.lanes = n, sa(t, n), xn(t), e[bn] = t.current, cu(e), new Rl(t);
  }, Jr.version = "19.2.7", Jr;
}
var Mh;
function t0() {
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
  return a(), Ou.exports = e0(), Ou.exports;
}
var n0 = t0();
const a0 = ["none", "low", "medium", "high", "xhigh", "max"], i0 = ["low", "medium", "high", "xhigh", "max"], r0 = [
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
], s0 = 300 * 1e3, l0 = 500, Oh = 256, o0 = 160, c0 = 500, u0 = 300, d0 = /[\u0000-\u001f\u007f]/, is = /* @__PURE__ */ new Map();
function pd(a) {
  return typeof a == "string" && a !== "ultra" && /^[a-z][a-z0-9_-]{0,63}$/.test(a);
}
function Ql(a, r) {
  if (typeof a != "string" || d0.test(a)) return;
  const s = a.trim();
  if (s !== "")
    return s.slice(0, r);
}
function f0(a) {
  const r = Ql(a, Oh + 1);
  return r && r.length <= Oh ? r : void 0;
}
function p0(a) {
  if (!Array.isArray(a)) return;
  const r = /* @__PURE__ */ new Map();
  for (const s of a) {
    const l = typeof s == "string" ? s : s && typeof s == "object" ? s.effort : void 0;
    if (!pd(l) || r.has(l)) continue;
    const c = { effort: l };
    if (s && typeof s == "object") {
      const d = s.description, f = Ql(d, u0);
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
function m0(a) {
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
    if (s.length >= l0) break;
    const c = typeof l == "string" ? { id: l } : l ?? {}, d = f0(c.id);
    if (!d || r.has(d)) continue;
    r.add(d);
    const f = [c.label, c.display_name, c.name].map((b) => Ql(b, o0)).find(Boolean), y = {
      id: d,
      label: f ?? d
    }, m = Ql(c.description, c0);
    m && (y.description = m);
    const g = c.defaultReasoningEffort ?? c.default_reasoning_effort ?? c.default_reasoning_level;
    pd(g) && (y.defaultReasoningEffort = g);
    const v = p0(
      c.reasoningEfforts ?? c.supported_reasoning_efforts ?? c.supported_reasoning_levels ?? c.reasoning_efforts
    );
    v && (y.reasoningEfforts = v), s.push(y);
  }
  return s;
}
function h0(a) {
  return a.filter((r) => r !== "ultra").map((r) => ({ effort: r }));
}
function Dg(a) {
  if (a !== "openai" && a !== "openai-codex") return [];
  const r = a === "openai" ? a0 : i0;
  return r0.map((s) => ({
    id: s.id,
    label: s.label,
    description: s.description,
    defaultReasoningEffort: a === "openai" ? "medium" : s.codexDefault,
    reasoningEfforts: h0(r)
  }));
}
function Ku(a, r) {
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
    const m = Ku(a, y.id);
    m && d(m), d(y);
  });
  const f = s == null ? void 0 : s.trim();
  return f && !c.has(f) && d(Ku(a, f) ?? { id: f, label: f }), l;
}
function Jl(a, r, s = []) {
  var d;
  const l = Ku(a, r), c = s.find((f) => f.id === r);
  return c ? l ? {
    ...l,
    ...c,
    label: c.label === c.id ? l.label : c.label,
    defaultReasoningEffort: c.defaultReasoningEffort ?? l.defaultReasoningEffort,
    reasoningEfforts: (d = c.reasoningEfforts) != null && d.length ? c.reasoningEfforts : l.reasoningEfforts
  } : c : l;
}
function g0(a) {
  let r = 2166136261;
  for (let s = 0; s < a.length; s += 1)
    r ^= a.charCodeAt(s), r = Math.imul(r, 16777619);
  return `${a.length}-${(r >>> 0).toString(36)}`;
}
function Kl(a, r, s) {
  return `${a}:${g0(r ?? "")}:${(s == null ? void 0 : s.trim()) ?? ""}`;
}
function Rg(a, r = Date.now()) {
  const s = is.get(a);
  return s ? s.expiresAt <= r ? (is.delete(a), null) : m0(s.result) : null;
}
function Lg(a, r, s = Date.now()) {
  is.set(a, {
    expiresAt: s + s0,
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
}, Ug = "settings";
function y0(a, r) {
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
function v0(a) {
  const r = a.storage.get(Ug);
  if (!r) return {
    ...Xn,
    models: { ...Xn.models },
    apiKeys: {},
    reasoningEfforts: { ...Xn.reasoningEfforts },
    providerCapabilities: { ...Xn.providerCapabilities }
  };
  try {
    const s = JSON.parse(r);
    return y0(Xn, s);
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
function b0(a, r) {
  const { providerCapabilities: s, ...l } = r;
  a.storage.set(Ug, JSON.stringify(l));
}
function Zl(a) {
  var s, l;
  const r = (s = a.providerCapabilities) == null ? void 0 : s[a.provider];
  if (!((r == null ? void 0 : r.reasoningEffort) !== !0 || r.reasoningModel !== a.models[a.provider]))
    return (l = a.reasoningEfforts) == null ? void 0 : l[a.provider];
}
function Bg(a, r, s) {
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
  var R, E;
  const d = (R = a.providerCapabilities) == null ? void 0 : R[r], f = { ...a.reasoningEfforts }, y = f[r], m = a.models[r] ?? "", g = s.find((B) => B.id === m), v = Jl(
    r,
    m,
    zg(r, s, m)
  ), b = !!((E = v == null ? void 0 : v.reasoningEfforts) != null && E.some(
    (B) => B.effort === y
  )), _ = l.reasoningEffort && l.richModelCatalog && !!g && c !== "fallback" && c !== "stale" && !!y && !b;
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
function S0(a, r) {
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
const Ch = 50, Vg = "conversations";
function hd(a) {
  const r = a.storage.get(Vg);
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
function Ul(a, r) {
  try {
    return a.storage.set(Vg, JSON.stringify(r)), !0;
  } catch {
    return !1;
  }
}
function Hg(a, r) {
  if (Ul(a, r)) return;
  const s = [...r];
  for (; s.length > 1; )
    if (s.pop(), Ul(a, s)) return;
  Ul(a, r.map(Dh)) || Ul(a, r.slice(0, 1).map(Dh));
}
function Xu(a) {
  return hd(a).sort((r, s) => s.updatedAt - r.updatedAt);
}
function zh(a, r) {
  const s = hd(a), l = s.findIndex((c) => c.id === r.id);
  l >= 0 ? s[l] = r : s.push(r), s.sort((c, d) => d.updatedAt - c.updatedAt), s.length > Ch && s.splice(Ch), Hg(a, s);
}
function _0(a, r) {
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
function E0(a) {
  return a.slice(0, 40);
}
function x0() {
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
function N0({ onClick: a }) {
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      className: "gcp-fab",
      onClick: a,
      "aria-label": "Graph Copilot",
      title: "Graph Copilot",
      children: /* @__PURE__ */ h.jsx(x0, {})
    }
  );
}
const Lh = 8 * 1024 * 1024, Uh = 2 * 1024 * 1024, Bh = 20 * 1024 * 1024, A0 = /* @__PURE__ */ new Set([
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
  return s === "pdf" ? "pdf" : A0.has(s) ? "image" : "text";
}
function ns(a) {
  return a < 1024 ? `${a} B` : a < 1024 * 1024 ? `${(a / 1024).toFixed(1)} KB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
}
const j0 = {
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
function w0(a) {
  return j0[Gg(a)] ?? "";
}
function $0(a) {
  return new Promise((r, s) => {
    const l = new FileReader();
    l.onload = () => r(l.result), l.onerror = () => s(l.error ?? new Error("FileReader failed")), l.readAsDataURL(a);
  });
}
const T0 = "4.10.38", Vh = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${T0}/build`;
let Ru = null;
function M0() {
  return Ru || (Ru = import(`${Vh}/pdf.mjs`).then((r) => {
    const s = r.default ?? r;
    return s.GlobalWorkerOptions.workerSrc = `${Vh}/pdf.worker.mjs`, s;
  })), Ru;
}
async function O0(a) {
  const r = await M0(), s = await a.arrayBuffer(), l = await r.getDocument({ data: s }).promise, c = [];
  for (let d = 1; d <= l.numPages; d++) {
    const m = (await (await l.getPage(d)).getTextContent()).items.map((g) => typeof (g == null ? void 0 : g.str) == "string" ? g.str : "").join(" ").replace(/[ \t]+/g, " ").trim();
    m && c.push(m);
  }
  return c.join(`

`).trim();
}
async function C0(a, r = {}) {
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
    const d = await (r.readDataUrl ?? $0)(a);
    return { ...l, dataUrl: d };
  }
  if (s === "pdf") {
    if (a.size > Bh)
      throw new Error(`PDF "${a.name}" is too large (max ${ns(Bh)})`);
    let d;
    try {
      d = await (r.loadPdfText ?? O0)(a);
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
const D0 = /* @__PURE__ */ new Set([
  "openai",
  "openai-codex",
  "openrouter",
  "anthropic",
  "custom"
]);
function Ig(a, r, s) {
  const l = r ?? [], c = [];
  a.trim() && c.push(a);
  for (const y of l)
    if ((y.kind === "text" || y.kind === "pdf") && y.text) {
      const m = y.kind === "pdf" ? "" : w0(y.name);
      c.push(`Attached file "${y.name}":
\`\`\`${m}
${y.text}
\`\`\``);
    }
  const d = c.join(`

`), f = l.filter((y) => y.kind === "image" && y.dataUrl);
  if (f.length > 0 && D0.has(s))
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
async function kg(a, r, s, l) {
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
async function z0(a) {
  return (await (await a.http.fetch("/api/llm/codex/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  })).json()).auth_url;
}
async function Qu(a) {
  return await (await a.http.fetch("/api/llm/codex/status", void 0)).json();
}
async function R0(a) {
  await a.http.fetch("/api/llm/codex/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });
}
const Da = "[REDACTED]";
function nt(a) {
  return typeof a == "object" && a !== null && !Array.isArray(a);
}
function L0(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function Ra(a) {
  const r = L0(a);
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
      Ra(r) ? Da : Fn(s)
    ])
  ) : a;
}
function jn(a, r) {
  typeof a == "string" ? a.length > 0 && r.add(a) : Array.isArray(a) ? a.forEach((s) => jn(s, r)) : nt(a) && Object.values(a).forEach((s) => jn(s, r));
}
function Fl(a, r) {
  if (Array.isArray(a))
    a.forEach((s) => Fl(s, r));
  else if (nt(a))
    for (const [s, l] of Object.entries(a))
      Ra(s) ? jn(l, r) : Fl(l, r);
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
      (!b || b.param_type === "secret" || Ra(g)) && jn(v, l);
    }
  }
}
function U0(a, r, s, l) {
  if (Array.isArray(a))
    for (const c of a) {
      if (!nt(c)) continue;
      const d = typeof c.node_id == "string" ? c.node_id : void 0, f = typeof c.param == "string" ? c.param : void 0, y = d ? s.get(d) : void 0, m = y ? r.get(y) : void 0, g = m == null ? void 0 : m.params.find((v) => v.name === f);
      (!g || g.param_type === "secret" || f && Ra(f)) && jn(c.values, l);
    }
}
function Yg(a, r) {
  for (const s of a.values())
    for (const l of s.params)
      (l.param_type === "secret" || Ra(l.name)) && (jn(l.default, r), jn(l.options, r));
}
function rs(a, r, s) {
  const l = /* @__PURE__ */ new Set();
  if (Yg(r, l), Fl(a.arguments, l), a.name === "apply_graph_operations")
    Gh(a.arguments.operations, r, s, l);
  else if (a.name === "run_graph_experiments") {
    if (Array.isArray(a.arguments.variants))
      for (const c of a.arguments.variants)
        nt(c) && Gh(c.operations, r, s, l);
    a.arguments.search !== void 0 && jn(a.arguments.search, l);
  } else a.name === "optimize_graph_parameters" && U0(
    a.arguments.bindings,
    r,
    s,
    l
  );
  return l;
}
function Wl(a, r, s) {
  var l;
  Yg(r, s), Fl(a, s), jn(a.presets, s);
  for (const c of a.nodes) {
    const d = (l = c.data) == null ? void 0 : l.params;
    if (!nt(d)) continue;
    const f = typeof c.type == "string" ? r.get(c.type) : void 0, y = f ? new Map(f.params.map((m) => [m.name, m])) : void 0;
    for (const [m, g] of Object.entries(d)) {
      const v = y == null ? void 0 : y.get(m);
      (!v || v.param_type === "secret" || Ra(m)) && jn(g, s);
    }
  }
}
function za(a, r) {
  if (typeof a == "string") {
    let s = a;
    for (const l of [...r].sort((c, d) => d.length - c.length))
      s = s.split(l).join(Da);
    return s;
  }
  return Array.isArray(a) ? a.map((s) => za(s, r)) : nt(a) ? Object.fromEntries(
    Object.entries(a).map(([s, l]) => [s, za(l, r)])
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
function B0(a, r) {
  const s = Zi(r), l = /* @__PURE__ */ new Set();
  Wl(a, s, l);
  const c = Fn(a);
  if (!nt(c)) return { ...a, nodes: [], edges: [] };
  const d = Array.isArray(c.nodes) ? c.nodes : [];
  a.nodes.forEach((y, m) => {
    const g = d[m];
    !nt(g) || !nt(g.data) || y.data && Object.prototype.hasOwnProperty.call(y.data, "params") && (g.data.params = Ju(
      y.data.params,
      typeof y.type == "string" ? y.type : void 0,
      s
    ));
  });
  const f = za(c, l);
  return nt(f) ? f : { nodes: [], edges: [] };
}
function fo(a, r, s, l = []) {
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
  Wl(d, f, m);
  for (const g of l) {
    const v = Zi(g.definitions), b = ss(g.graph.nodes);
    for (const _ of rs(a, v, b))
      m.add(_);
    Wl(g.graph, v, m);
  }
  try {
    const g = JSON.parse(r);
    if (Array.isArray(g) || nt(g))
      return JSON.stringify(za(Fn(g), m));
  } catch {
  }
  return za(r, m);
}
function Ju(a, r, s) {
  const l = Fn(a);
  if (!nt(l)) return l;
  const c = r ? s.get(r) : void 0, d = c ? new Map(c.params.map((f) => [f.name, f])) : void 0;
  for (const f of Object.keys(l)) {
    const y = d == null ? void 0 : d.get(f);
    (!y || y.param_type === "secret") && (l[f] = Da);
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
        typeof d.ref == "string" && f && c.set(d.ref, f), "params" in d && (d.params = Ju(d.params, f, r));
      } else if (d.op === "set_params") {
        const f = typeof d.node_id == "string" ? d.node_id : void 0, y = f ? c.get(f) ?? s.get(f) : void 0;
        d.params = Ju(d.params, y, r);
      }
    }
  return l;
}
function V0(a, r, s) {
  const l = Fn(a);
  if (!Array.isArray(l)) return l;
  for (const c of l) {
    if (!nt(c)) continue;
    const d = typeof c.node_id == "string" ? c.node_id : void 0, f = typeof c.param == "string" ? c.param : void 0, y = d ? s.get(d) : void 0, m = y ? r.get(y) : void 0, g = m == null ? void 0 : m.params.find((v) => v.name === f);
    (!g || g.param_type === "secret") && (c.values = Array.isArray(c.values) ? c.values.map(() => Da) : Da);
  }
  return l;
}
function Xg(a, r) {
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
    }), a.arguments.search !== void 0 && (y.search = Da);
  } else a.name === "optimize_graph_parameters" && (y.bindings = V0(
    a.arguments.bindings,
    c,
    d
  ));
  const m = rs(a, c, d), g = za(y, m);
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
    const m = Xg(y, r), g = za(m.arguments, f);
    return {
      ...m,
      arguments: nt(g) ? g : {}
    };
  });
}
function Zu(a, r, s) {
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
  Wl(c, d, y);
  for (const m of r)
    for (const g of rs(m, d, f))
      y.add(g);
  return za(a, y);
}
const Bl = 3e4;
function H0(a) {
  const r = a.param_type === "secret" || Ra(a.name), s = r ? Da : Fn(a.default), l = s == null ? String(s) : typeof s == "object" ? JSON.stringify(s) : String(s), c = l.length > 60 ? l.slice(0, 60) + "..." : l;
  let d = "";
  if (a.param_type === "select" && a.options.length > 0)
    d = r ? `{${Da}}` : `{${a.options.join("|")}}`;
  else if (a.param_type === "int" || a.param_type === "float") {
    const f = a.min_value !== null, y = a.max_value !== null;
    if (f || y) {
      const m = f ? String(a.min_value) : "", g = y ? String(a.max_value) : "";
      d = `{${m}..${g}}`;
    }
  }
  return `${a.name}:${a.param_type}=${c}${d}`;
}
function G0(a) {
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
      const c = r.params.map(H0).join(", ");
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
  const s = B0(a, r), l = JSON.stringify({ nodes: s.nodes, edges: s.edges });
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
function q0(a, r) {
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
const I0 = "graph-copilot", k0 = "0.3.0";
function Pl(a) {
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
  return (r = Pl(a)) == null ? void 0 : r.mean;
}
function po(a) {
  if (a.length < 2) return;
  const r = Pl(a);
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
function K0(a, r, s) {
  if (a <= 0) return 0;
  if (a >= 1) return 1;
  const l = Math.exp(
    Yl(r + s) - Yl(r) - Yl(s) + r * Math.log(a) + s * Math.log1p(-a)
  );
  return a < (r + 1) / (r + s + 2) ? l * Ih(r, s, a) / r : 1 - l * Ih(s, r, 1 - a) / s;
}
function kh(a, r) {
  if (a === 0) return 0.5;
  const s = r / (r + a * a), l = 0.5 * K0(
    s,
    r / 2,
    0.5
  );
  return a > 0 ? 1 - l : l;
}
function Y0(a) {
  if (!Number.isInteger(a) || a < 1) return;
  const r = 0.975;
  let s = 0, l = 1;
  for (; kh(l, a) < r && l < 1e6; ) l *= 2;
  if (!(l >= 1e6)) {
    for (let c = 0; c < 100; c += 1) {
      const d = (s + l) / 2;
      kh(d, a) < r ? s = d : l = d;
    }
    return (s + l) / 2;
  }
}
function Fg(a) {
  if (a.length < 2) return;
  const r = Wn(a), s = po(a), l = a.length - 1, c = Y0(l);
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
function X0(a, r) {
  if (a.length < 2 || r.length < 2) return;
  const s = Pl(a), l = Pl(r);
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
  const y = X0(a, r);
  return {
    baselineMean: c,
    candidateMean: l,
    rawDelta: d,
    improvement: f,
    hedgesG: y,
    directionAdjustedHedgesG: y === void 0 ? void 0 : s === "maximize" ? y : -y
  };
}
const Q0 = [
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
function Vl(a) {
  return a !== void 0 && Number.isFinite(a) ? String(a) : "";
}
function J0(a) {
  return /^[\t\r\n ]*[=+\-@]/.test(a) ? `'${a}` : a;
}
function Z0(a) {
  const r = J0(a);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function F0(a) {
  const r = [Q0.slice()];
  return a.runs.forEach((s) => {
    r.push([
      a.id,
      a.createdAt,
      a.hypothesis,
      a.objective.metric,
      a.objective.direction,
      s.variantId,
      s.variantLabel,
      Vl(s.repetition),
      s.status,
      s.metricKey ?? "",
      Vl(s.metricValue),
      Vl(s.runtimeMs),
      s.seed === void 0 ? "" : typeof s.seed == "number" ? Vl(s.seed) : s.seed,
      s.error ?? ""
    ]);
  }), r.map((s) => s.map(Z0).join(",")).join(`\r
`);
}
function Ma(a) {
  return Object.is(a, -0) || a === 0 ? "0" : Number(a.toPrecision(6)).toString();
}
function Nn(a) {
  return a.replace(/[\r\n]+/g, " ").replace(/`/g, "'").trim();
}
function W0(a) {
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
function P0(a) {
  var y;
  const r = W0(a), s = r.find((m) => m.id === a.baselineVariantId), l = [], c = [
    `# Research report: ${Nn(a.id)}`,
    "",
    "## Study question",
    "",
    `- Hypothesis under test: ${Nn(a.hypothesis)}`,
    `- Objective: ${a.objective.direction} \`${Nn(a.objective.metric)}\`.`,
    `- Recorded evidence: ${a.runs.length} run(s) across ${r.length} variant(s).`,
    "",
    "## Observations",
    ""
  ];
  r.length === 0 && (c.push("- **[Observation]** No run records were available."), l.push("No run records were available for analysis.")), r.forEach((m) => {
    const g = Wn(m.usableValues), v = po(m.usableValues), b = Fg(m.usableValues), _ = [`n=${m.usableValues.length}`];
    if (g !== void 0 && _.push(`mean=${Ma(g)}`), v !== void 0 && _.push(`sample SD=${Ma(v)}`), b ? _.push(`95% Student-t CI=[${Ma(b.lower)}, ${Ma(b.upper)}]`) : _.push("95% Student-t CI=unavailable"), s && m.id !== s.id) {
      const A = ls(
        m.usableValues,
        s.usableValues,
        a.objective.direction
      );
      A && (_.push(`raw delta vs ${Nn(s.label)}=${Ma(A.rawDelta)}`), _.push(`direction-adjusted improvement=${Ma(A.improvement)}`), A.hedgesG !== void 0 && _.push(`Hedges g=${Ma(A.hedgesG)}`));
    }
    c.push(`- **[Observation] ${Nn(m.label)}:** ${_.join("; ")}.`), m.usableValues.length < 2 && l.push(
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
    `- **[Candidate claim]** ${Nn(d[0].variant.label)} had the strongest observed direction-adjusted change versus the baseline (${Ma(d[0].comparison.improvement)}); confirm it with a pre-registered, independently replicated study before treating it as a conclusion.`
  ) : c.push("- **[Candidate claim]** No baseline comparison had enough finite evidence to nominate a directional result.");
  const f = [...a.warnings ?? [], ...l];
  return c.push("", "## Warnings", ""), f.length === 0 ? c.push("- None recorded.") : f.forEach((m) => c.push(`- **[Warning]** ${Nn(m)}`)), c.push("", "## Paper leads", ""), (y = a.paperLeads) != null && y.length ? a.paperLeads.forEach((m) => {
    c.push(
      `- **[Paper lead] ${Nn(m.title)}** — Evidence: ${Nn(m.evidence)} Next study: ${Nn(m.nextStep)}`
    );
  }) : c.push("- None recorded."), c.join(`
`);
}
const yd = "codefyui.graph-copilot.study", eo = 1, Fu = "plugin-canonical-v1", to = 5 * 1024 * 1024, Kh = 64, Yh = 1e5, Xh = 64 * 1024, es = 1e4, os = 8, e1 = 16, t1 = 5e3, n1 = 1e4, Wu = 1e3, vd = 512, a1 = 40, i1 = 256, Hl = 1e3, ke = 512, $t = 32 * 1024;
class pn extends Error {
  constructor(s, l) {
    super(l);
    rn(this, "code");
    this.name = "StudyBundleError", this.code = s;
  }
}
function Z(a, r, s) {
  throw new pn(a, `${r}: ${s}`);
}
function Wg(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function Pu(a, r, s, l) {
  if (s > Kh && Z("LIMIT_EXCEEDED", r, `maximum depth is ${Kh}`), l.values += 1, l.values > Yh && Z("LIMIT_EXCEEDED", r, `maximum value count is ${Yh}`), a === null) return "null";
  if (typeof a == "boolean") return a ? "true" : "false";
  if (typeof a == "number")
    return Number.isFinite(a) || Z("INVALID_VALUE", r, "numbers must be finite"), JSON.stringify(a);
  if (typeof a == "string")
    return a.length > Xh && Z(
      "LIMIT_EXCEEDED",
      r,
      `maximum string length is ${Xh}`
    ), JSON.stringify(a);
  (typeof a != "object" || a === void 0) && Z("INVALID_VALUE", r, `unsupported JSON value ${typeof a}`), l.stack.has(a) && Z("INVALID_VALUE", r, "cyclic values are not allowed"), l.stack.add(a);
  try {
    if (Array.isArray(a)) {
      a.length > es && Z(
        "LIMIT_EXCEEDED",
        r,
        `maximum collection size is ${es}`
      );
      for (let d = 0; d < a.length; d += 1)
        Object.prototype.hasOwnProperty.call(a, d) || Z("INVALID_VALUE", `${r}/${d}`, "sparse arrays are not allowed");
      return `[${a.map((d, f) => Pu(
        d,
        `${r}/${f}`,
        s + 1,
        l
      )).join(",")}]`;
    }
    Wg(a) || Z("INVALID_VALUE", r, "objects must be plain JSON objects");
    const c = Object.keys(a).sort();
    return c.length > es && Z(
      "LIMIT_EXCEEDED",
      r,
      `maximum collection size is ${es}`
    ), `{${c.map((d) => (d.length > ke && Z("LIMIT_EXCEEDED", r, `object key exceeds ${ke} characters`), `${JSON.stringify(d)}:${Pu(
      a[d],
      `${r}/${mo(d)}`,
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
function r1(a) {
  return new TextEncoder().encode(a).byteLength;
}
function bd(a) {
  const r = r1(a);
  if (r > to)
    throw new pn(
      "BUNDLE_TOO_LARGE",
      `Study bundle is ${r} bytes; maximum is ${to}`
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
  return Wg(a) || Z("INVALID_BUNDLE", r, "expected an object"), a;
}
function De(a, r, s, l) {
  const c = new Set(r);
  for (const d of Object.keys(a))
    c.has(d) || Z("INVALID_BUNDLE", `${l}/${mo(d)}`, "unknown property");
  for (const d of s)
    Object.prototype.hasOwnProperty.call(a, d) || Z("INVALID_BUNDLE", l, `missing required property '${d}'`);
}
function Je(a, r, s = es) {
  return Array.isArray(a) || Z("INVALID_BUNDLE", r, "expected an array"), a.length > s && Z("LIMIT_EXCEEDED", r, `maximum item count is ${s}`), a;
}
function Ee(a, r, s = ke, l = !1) {
  return typeof a != "string" && Z("INVALID_BUNDLE", r, "expected a string"), (!l && !a.trim() || a.length > s) && Z(
    a.length > s ? "LIMIT_EXCEEDED" : "INVALID_BUNDLE",
    r,
    a.length > s ? `maximum length is ${s}` : "must not be empty"
  ), /\u0000/.test(a) && Z("INVALID_BUNDLE", r, "NUL characters are not allowed"), a;
}
function mt(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && Z("INVALID_BUNDLE", r, "expected a finite number"), a;
}
function cs(a, r, s, l) {
  const c = mt(a, r);
  return (!Number.isInteger(c) || c < s || c > l) && Z("INVALID_BUNDLE", r, `expected an integer from ${s} to ${l}`), c;
}
function ey(a, r) {
  return typeof a != "boolean" && Z("INVALID_BUNDLE", r, "expected a boolean"), a;
}
function Pn(a, r, s) {
  return (typeof a != "string" || !r.includes(a)) && Z("INVALID_BUNDLE", s, `expected one of: ${r.join(", ")}`), a;
}
function us(a, r) {
  const s = Ee(a, r, 64);
  return (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(s) || Number.isNaN(Date.parse(s)) || new Date(s).toISOString() !== s) && Z("INVALID_BUNDLE", r, "expected a canonical ISO-8601 UTC timestamp"), s;
}
function He(a, r) {
  const s = Ee(a, r, 256);
  return (s !== s.trim() || /[\u0000-\u001f\u007f]/.test(s)) && Z("INVALID_BUNDLE", r, "id must be trimmed and contain no control characters"), s;
}
function mn(a, r, s) {
  new Set(a).size !== a.length && Z("INVALID_BUNDLE", r, `${s} must be unique`);
}
function ge(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function mo(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ai(a, r) {
  if (!a || typeof a != "object") return;
  if (Array.isArray(a)) {
    a.forEach((l, c) => ai(l, `${r}/${c}`));
    return;
  }
  const s = be(a, r);
  if (ge(s, "$gcpSecretRef")) {
    De(s, ["$gcpSecretRef"], ["$gcpSecretRef"], r), He(s.$gcpSecretRef, `${r}/$gcpSecretRef`);
    return;
  }
  for (const [l, c] of Object.entries(s))
    ai(c, `${r}/${mo(l)}`);
}
function ty(a, r) {
  const s = be(a, r);
  De(s, ["x", "y"], ["x", "y"], r), mt(s.x, `${r}/x`), mt(s.y, `${r}/y`);
}
function s1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["nodes", "edges", "presets", "segmentGroups", "name", "description"],
    ["nodes", "edges"],
    r
  );
  const l = Je(s.nodes, `${r}/nodes`, t1), c = [];
  l.forEach((m, g) => {
    const v = `${r}/nodes/${g}`, b = be(m, v);
    De(b, ["id", "type", "position", "data"], ["id", "type", "position", "data"], v), c.push(He(b.id, `${v}/id`)), Ee(b.type, `${v}/type`, ke), ty(b.position, `${v}/position`);
    const _ = be(b.data, `${v}/data`);
    ai(_, `${v}/data`);
  }), mn(c, `${r}/nodes`, "node ids");
  const d = new Set(c), f = Je(s.edges, `${r}/edges`, n1), y = [];
  f.forEach((m, g) => {
    const v = `${r}/edges/${g}`, b = be(m, v);
    De(
      b,
      ["id", "source", "target", "sourceHandle", "targetHandle", "type"],
      ["id", "source", "target", "sourceHandle", "targetHandle"],
      v
    ), y.push(He(b.id, `${v}/id`));
    const _ = He(b.source, `${v}/source`), A = He(b.target, `${v}/target`);
    d.has(_) || Z("INVALID_BUNDLE", `${v}/source`, "unknown source node"), d.has(A) || Z("INVALID_BUNDLE", `${v}/target`, "unknown target node"), Ee(b.sourceHandle, `${v}/sourceHandle`, ke, !0), Ee(b.targetHandle, `${v}/targetHandle`, ke, !0), ge(b, "type") && Pn(b.type, ["data", "trigger"], `${v}/type`);
  }), mn(y, `${r}/edges`, "edge ids"), ge(s, "presets") && Je(s.presets, `${r}/presets`).forEach((g, v) => ai(g, `${r}/presets/${v}`)), ge(s, "segmentGroups") && ai(s.segmentGroups, `${r}/segmentGroups`), ge(s, "name") && Ee(s.name, `${r}/name`, ke, !0), ge(s, "description") && Ee(s.description, `${r}/description`, $t, !0);
}
function Qh(a, r) {
  const s = be(a, r);
  ai(s, r);
}
function l1(a, r) {
  const s = be(a, r);
  switch (Pn(
    s.op,
    ["add_node", "connect", "set_params", "remove_node", "remove_edge", "clear_graph", "auto_layout"],
    `${r}/op`
  )) {
    case "add_node":
      De(s, ["op", "node_type", "ref", "params", "position"], ["op", "node_type"], r), Ee(s.node_type, `${r}/node_type`, ke), ge(s, "ref") && He(s.ref, `${r}/ref`), ge(s, "params") && Qh(s.params, `${r}/params`), ge(s, "position") && ty(s.position, `${r}/position`);
      return;
    case "connect":
      De(
        s,
        ["op", "source", "source_handle", "target", "target_handle"],
        ["op", "source", "source_handle", "target", "target_handle"],
        r
      ), He(s.source, `${r}/source`), Ee(s.source_handle, `${r}/source_handle`, ke, !0), He(s.target, `${r}/target`), Ee(s.target_handle, `${r}/target_handle`, ke, !0);
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
      ), He(s.source, `${r}/source`), He(s.target, `${r}/target`), ge(s, "source_handle") && Ee(s.source_handle, `${r}/source_handle`, ke, !0), ge(s, "target_handle") && Ee(s.target_handle, `${r}/target_handle`, ke, !0);
      return;
    case "clear_graph":
    case "auto_layout":
      De(s, ["op"], ["op"], r);
  }
}
function o1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    ["pluginId", "pluginVersion", "codefyuiApiVersion"],
    r
  ), He(s.pluginId, `${r}/pluginId`), Ee(s.pluginVersion, `${r}/pluginVersion`, 128), cs(s.codefyuiApiVersion, `${r}/codefyuiApiVersion`, 1, 1e3);
}
function c1(a, r) {
  const s = be(a, r);
  De(s, ["facts"], ["facts"], r);
  const l = Je(s.facts, `${r}/facts`, i1), c = [];
  l.forEach((d, f) => {
    const y = `${r}/facts/${f}`, m = be(d, y);
    De(m, ["key", "status", "source", "collectedAt", "value"], ["key", "status", "source"], y), c.push(Ee(m.key, `${y}/key`, ke));
    const g = Pn(
      m.status,
      ["observed", "declared", "unavailable"],
      `${y}/status`
    );
    Ee(m.source, `${y}/source`, ke), ge(m, "collectedAt") && us(m.collectedAt, `${y}/collectedAt`);
    const v = ge(m, "value");
    if (g === "unavailable" && v && Z("INVALID_BUNDLE", `${y}/value`, "unavailable facts must not contain a value"), g !== "unavailable" && !v && Z("INVALID_BUNDLE", y, `${g} facts require a value`), v) {
      ai(m.value, `${y}/value`);
      const b = /* @__PURE__ */ new Map();
      ds(m.value, `${y}/value`, b), b.size > 0 && Z(
        "INVALID_BUNDLE",
        `${y}/value`,
        "SecretRefs are allowed only in the replayable study spec"
      );
    }
  }), mn(c, `${r}/facts`, "provenance fact keys");
}
function u1(a, r) {
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
  ), Ee(s.hypothesis, `${r}/hypothesis`, $t), s1(s.baseline, `${r}/baseline`);
  const l = be(s.objective, `${r}/objective`);
  De(l, ["metric", "direction"], ["metric", "direction"], `${r}/objective`), Ee(l.metric, `${r}/objective/metric`, ke), Pn(l.direction, ["maximize", "minimize"], `${r}/objective/direction`), cs(s.repetitions, `${r}/repetitions`, 1, 5), cs(s.concurrency, `${r}/concurrency`, 1, 2), ey(s.applyBestRequested, `${r}/applyBestRequested`);
  const c = Je(s.variants, `${r}/variants`, os);
  c.length === 0 && Z("INVALID_BUNDLE", `${r}/variants`, "at least one variant is required");
  const d = [];
  c.forEach((f, y) => {
    const m = `${r}/variants/${y}`, g = be(f, m);
    De(g, ["id", "label", "operations"], ["id", "label", "operations"], m), d.push(He(g.id, `${m}/id`)), Ee(g.label, `${m}/label`, ke), Je(
      g.operations,
      `${m}/operations`,
      Wu
    ).forEach((b, _) => {
      l1(b, `${m}/operations/${_}`);
    });
  }), mn(d, `${r}/variants`, "variant ids");
}
function d1(a, r) {
  const s = be(a, r);
  De(s, ["phase", "code", "message"], ["phase", "code", "message"], r), Pn(s.phase, ["prepare", "validate", "execute", "metric", "cancel"], `${r}/phase`), Ee(s.code, `${r}/code`, ke), Ee(s.message, `${r}/message`, $t);
}
function f1(a, r, s) {
  const l = Je(a, s, e1), c = be(r.spec, "/payload/spec"), d = Je(c.variants, "/payload/spec/variants", os), f = new Set(d.map((v, b) => He(
    be(v, `/payload/spec/variants/${b}`).id,
    `/payload/spec/variants/${b}/id`
  ))), y = cs(c.repetitions, "/payload/spec/repetitions", 1, 5), m = [], g = [];
  l.forEach((v, b) => {
    const _ = `${s}/${b}`, A = be(v, _);
    De(
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
    const R = He(A.runKey, `${_}/runKey`);
    m.push(R), ge(A, "runId") && He(A.runId, `${_}/runId`), ge(A, "graphId") && He(A.graphId, `${_}/graphId`);
    const E = He(A.variantId, `${_}/variantId`);
    f.has(E) || Z("INVALID_BUNDLE", `${_}/variantId`, "unknown variant id");
    const B = cs(A.repetition, `${_}/repetition`, 1, y);
    g.push(`${E}\0${B}`);
    const $ = Pn(
      A.status,
      ["completed", "failed", "cancelled"],
      `${_}/status`
    );
    ge(A, "startedAt") && us(A.startedAt, `${_}/startedAt`), ge(A, "completedAt") && us(A.completedAt, `${_}/completedAt`), ge(A, "startedAt") && ge(A, "completedAt") && Date.parse(A.completedAt) < Date.parse(A.startedAt) && Z("INVALID_BUNDLE", `${_}/completedAt`, "must not be before startedAt"), mt(A.durationMs, `${_}/durationMs`) < 0 && Z("INVALID_BUNDLE", `${_}/durationMs`, "must be non-negative");
    const I = Je(A.metrics, `${_}/metrics`, vd), P = [];
    I.forEach((Q, ae) => {
      const H = `${_}/metrics/${ae}`, oe = be(Q, H);
      De(
        oe,
        ["observedKey", "canonicalKey", "value", "source"],
        ["observedKey", "canonicalKey", "value", "source"],
        H
      ), P.push(Ee(oe.observedKey, `${H}/observedKey`, ke)), Ee(oe.canonicalKey, `${H}/canonicalKey`, ke), mt(oe.value, `${H}/value`), Pn(oe.source, ["output_summary", "progress", "client"], `${H}/source`);
    }), mn(P, `${_}/metrics`, "observed metric keys"), ge(A, "error") && d1(A.error, `${_}/error`), $ === "completed" && ge(A, "error") && Z("INVALID_BUNDLE", `${_}/error`, "completed runs must not contain an error"), $ !== "completed" && !ge(A, "error") && Z("INVALID_BUNDLE", _, `${$} runs require an error`);
  }), mn(m, s, "run keys"), mn(g, s, "variant/repetition slots");
}
function p1(a, r) {
  const s = be(a, r);
  De(s, ["title", "evidence", "nextStep"], ["title", "evidence", "nextStep"], r), Ee(s.title, `${r}/title`, $t), Ee(s.evidence, `${r}/evidence`, $t), Ee(s.nextStep, `${r}/nextStep`, $t);
}
function m1(a, r) {
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
  ), He(s.id, `${r}/id`), Ee(s.label, `${r}/label`, ke), Pn(s.status, ["completed", "invalid", "failed"], `${r}/status`), ge(s, "metricKey") && Ee(s.metricKey, `${r}/metricKey`, ke), Je(s.metricValues, `${r}/metricValues`, 5).forEach((f, y) => {
    mt(f, `${r}/metricValues/${y}`);
  }), ge(s, "mean") && mt(s.mean, `${r}/mean`), ge(s, "stddev") && mt(s.stddev, `${r}/stddev`) < 0 && Z("INVALID_BUNDLE", `${r}/stddev`, "must be non-negative"), ge(s, "confidenceInterval95")) {
    const f = be(s.confidenceInterval95, `${r}/confidenceInterval95`);
    De(
      f,
      ["level", "lower", "upper"],
      ["level", "lower", "upper"],
      `${r}/confidenceInterval95`
    ), f.level !== 0.95 && Z("INVALID_BUNDLE", `${r}/confidenceInterval95/level`, "must be 0.95");
    const y = mt(f.lower, `${r}/confidenceInterval95/lower`), m = mt(f.upper, `${r}/confidenceInterval95/upper`);
    y > m && Z("INVALID_BUNDLE", `${r}/confidenceInterval95`, "lower must not exceed upper");
  }
  if (ge(s, "baselineComparison")) {
    const f = be(s.baselineComparison, `${r}/baselineComparison`);
    De(
      f,
      ["baselineId", "meanDelta", "objectiveImprovement", "hedgesG"],
      ["baselineId", "meanDelta", "objectiveImprovement"],
      `${r}/baselineComparison`
    ), He(f.baselineId, `${r}/baselineComparison/baselineId`), mt(f.meanDelta, `${r}/baselineComparison/meanDelta`), mt(
      f.objectiveImprovement,
      `${r}/baselineComparison/objectiveImprovement`
    ), ge(f, "hedgesG") && mt(f.hedgesG, `${r}/baselineComparison/hedgesG`);
  }
  mt(s.runtimeMs, `${r}/runtimeMs`) < 0 && Z("INVALID_BUNDLE", `${r}/runtimeMs`, "must be non-negative");
  const c = Je(s.observedMetrics, `${r}/observedMetrics`, vd), d = [];
  c.forEach((f, y) => {
    const m = `${r}/observedMetrics/${y}`, g = be(f, m);
    De(g, ["key", "value"], ["key", "value"], m), d.push(Ee(g.key, `${m}/key`, ke)), mt(g.value, `${m}/value`);
  }), mn(d, `${r}/observedMetrics`, "derived metric keys"), ge(s, "operationSummary") && Je(s.operationSummary, `${r}/operationSummary`, Wu).forEach((f, y) => Ee(f, `${r}/operationSummary/${y}`, $t)), Je(s.errors, `${r}/errors`, Wu).forEach((f, y) => Ee(f, `${r}/errors/${y}`, $t));
}
function no(a) {
  return a.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.|\.$/g, "");
}
function ny(a, r) {
  return Object.is(a, r) || a === r ? !0 : Math.abs(a - r) <= Number.EPSILON * 32 * Math.max(1, Math.abs(a), Math.abs(r));
}
function Ca(a, r, s, l) {
  const c = ge(a, r);
  if (s === void 0) {
    c && Z("INVALID_BUNDLE", `${l}/${r}`, "is not supported by the raw run evidence");
    return;
  }
  c || Z("INVALID_BUNDLE", l, `${r} is required by the raw run evidence`);
  const d = mt(a[r], `${l}/${r}`);
  ny(d, s) || Z("INVALID_BUNDLE", `${l}/${r}`, `does not match raw run evidence (expected ${s})`);
}
function h1(a, r, s) {
  const l = a.metrics.filter((d) => d.canonicalKey === r);
  if (l.length < 2) return;
  const c = l[0].value;
  l.some((d) => d.value !== c) && Z(
    "INVALID_BUNDLE",
    `${s}/metrics`,
    `conflicting duplicate samples resolve to objective identity '${r}'`
  );
}
function ay(a, r, s) {
  const l = [...a.metrics];
  if (l.length === 0) return;
  const c = (v) => (h1(a, v.canonicalKey, s), { key: v.canonicalKey, value: v.value }), d = (v) => new Set(v.map((_) => _.canonicalKey)).size === 1 && v.length > 0 ? c(v[0]) : void 0, f = r.metric.trim(), y = l.find((v) => v.observedKey === f) ?? l.find((v) => v.observedKey.toLowerCase() === f.toLowerCase());
  if (y) return c(y);
  if (f && f.toLowerCase() !== "auto") {
    const v = no(f);
    return d(l.filter((b) => {
      const _ = no(b.observedKey);
      return _ === v || _.endsWith(`.${v}`);
    }));
  }
  const m = r.direction === "maximize" ? /(^|\.)(accuracy|f1|f1_score|reward|score|r2|auc|precision|recall)$/i : /(^|\.)(val_loss|loss|error|mae|mse|rmse)$/i, g = l.filter((v) => m.test(v.observedKey));
  return g.length > 0 ? d(g) : r.direction === "minimize" ? d(l.filter((v) => /(^|\.)runtime_ms$/i.test(v.observedKey))) : void 0;
}
function g1(a, r, s) {
  const l = Je(a.metricValues, `${s}/metricValues`, 5).map((c, d) => mt(c, `${s}/metricValues/${d}`));
  (l.length !== r.length || l.some((c, d) => c !== r[d])) && Z("INVALID_BUNDLE", `${s}/metricValues`, "does not match completed raw run evidence");
}
function iy(a) {
  const r = /* @__PURE__ */ new Map();
  for (const s of a)
    for (const l of s.metrics) {
      const c = r.get(l.observedKey) ?? [];
      c.push(l.value), r.set(l.observedKey, c);
    }
  return [...r.entries()].sort(([s], [l]) => s.localeCompare(l)).slice(0, a1).map(([s, l]) => ({ key: s, value: Wn(l) }));
}
function y1(a, r, s) {
  const l = Je(
    a.observedMetrics,
    `${s}/observedMetrics`,
    vd
  ).map((c, d) => {
    const f = be(c, `${s}/observedMetrics/${d}`);
    return {
      key: Ee(f.key, `${s}/observedMetrics/${d}/key`, ke),
      value: mt(f.value, `${s}/observedMetrics/${d}/value`)
    };
  });
  (l.length !== r.length || l.some((c, d) => c.key !== r[d].key || !ny(c.value, r[d].value))) && Z("INVALID_BUNDLE", `${s}/observedMetrics`, "does not match raw run evidence");
}
function v1(a, r, s, l) {
  const c = s ? gd(r) : void 0;
  if (!c) {
    ge(a, "confidenceInterval95") && Z(
      "INVALID_BUNDLE",
      `${l}/confidenceInterval95`,
      "is not supported by the raw run evidence"
    );
    return;
  }
  ge(a, "confidenceInterval95") || Z("INVALID_BUNDLE", l, "confidenceInterval95 is required by the raw run evidence");
  const d = be(a.confidenceInterval95, `${l}/confidenceInterval95`);
  Ca(d, "lower", c.lower, `${l}/confidenceInterval95`), Ca(d, "upper", c.upper, `${l}/confidenceInterval95`);
}
function b1(a, r, s, l) {
  if (!r) {
    ge(a, "baselineComparison") && Z("INVALID_BUNDLE", `${l}/baselineComparison`, "is not supported by the raw run evidence");
    return;
  }
  ge(a, "baselineComparison") || Z("INVALID_BUNDLE", l, "baselineComparison is required by the raw run evidence");
  const c = be(a.baselineComparison, `${l}/baselineComparison`);
  c.baselineId !== s && Z("INVALID_BUNDLE", `${l}/baselineComparison/baselineId`, "does not match the evidence baseline"), Ca(c, "meanDelta", r.rawDelta, `${l}/baselineComparison`), Ca(
    c,
    "objectiveImprovement",
    r.improvement,
    `${l}/baselineComparison`
  ), Ca(c, "hedgesG", r.hedgesG, `${l}/baselineComparison`);
}
function S1(a, r, s) {
  const l = r.spec, c = r.runs, f = a.variants.map((E, B) => {
    var pe;
    const $ = `${s}/variants/${B}`, O = be(E, $), I = O.id, P = O.label, Q = c.filter((w) => w.variantId === I).sort((w, K) => w.repetition - K.repetition || w.runKey.localeCompare(K.runKey)), ae = Q.filter((w) => w.status === "completed"), H = ae.map((w) => ay(w, l.objective, `/payload/runs/${c.indexOf(w)}`)).filter((w) => w !== void 0), oe = new Set(H.map((w) => w.key)), ue = H.map((w) => w.value), Y = oe.size === 1 ? (pe = H[0]) == null ? void 0 : pe.key : void 0, X = ae.length === l.repetitions && H.length === l.repetitions && oe.size === 1, ie = O.status;
    ie === "invalid" && Q.length > 0 && Z("INVALID_BUNDLE", `${$}/status`, "invalid variants must not contain execution runs");
    const fe = ie === "invalid" ? "invalid" : X ? "completed" : "failed";
    Y === void 0 ? ge(O, "metricKey") && Z("INVALID_BUNDLE", `${$}/metricKey`, "is not supported by the raw run evidence") : O.metricKey !== Y && Z(
      "INVALID_BUNDLE",
      `${$}/metricKey`,
      `does not match raw run identity '${Y}'`
    );
    const ee = Wn(Q.map((w) => w.durationMs)) ?? 0;
    return Ca(O, "runtimeMs", ee, $), y1(O, iy(Q), $), {
      record: O,
      id: I,
      label: P,
      values: ue,
      ...Y === void 0 ? {} : { metricKey: Y },
      fullyObserved: X,
      preRankingStatus: fe,
      finalStatus: fe,
      ...X ? { mean: Wn(ue) } : {}
    };
  });
  new Set(
    f.filter((E) => E.preRankingStatus === "completed" && E.metricKey).map((E) => no(E.metricKey))
  ).size > 1 && f.forEach((E) => {
    E.preRankingStatus === "completed" && (E.finalStatus = "failed");
  }), f.forEach((E, B) => {
    const $ = `${s}/variants/${B}`;
    E.record.status !== E.finalStatus && Z(
      "INVALID_BUNDLE",
      `${$}/status`,
      `does not match raw run evidence (expected ${E.finalStatus})`
    );
    const O = E.preRankingStatus === "completed" && E.finalStatus === "failed";
    g1(
      E.record,
      O ? [] : E.values,
      $
    ), v1(
      E.record,
      E.values,
      E.finalStatus === "completed",
      $
    );
    const I = E.finalStatus === "completed" ? E.mean : void 0;
    Ca(E.record, "mean", I, $), Ca(
      E.record,
      "stddev",
      E.finalStatus === "completed" ? po(E.values) : void 0,
      $
    );
  });
  const m = ge(a, "baselineVariantId") ? a.baselineVariantId : void 0;
  if (m !== void 0) {
    const E = l.variants.filter(($) => $.operations.length === 0);
    (E.length !== 1 || E[0].id !== m) && Z(
      "INVALID_BUNDLE",
      `${s}/baselineVariantId`,
      "must identify the single zero-operation baseline from the study spec"
    );
    const B = f.find(($) => $.id === m);
    f.forEach(($, O) => {
      const I = $.id !== m && B.finalStatus === "completed" && $.finalStatus === "completed" ? ls($.values, B.values, l.objective.direction) : void 0;
      b1(
        $.record,
        I,
        m,
        `${s}/variants/${O}`
      );
    });
  }
  const g = f.filter((E) => E.finalStatus === "completed" && E.mean !== void 0).sort((E, B) => (l.objective.direction === "maximize" ? B.mean - E.mean : E.mean - B.mean) || E.id.localeCompare(B.id)), v = g[0], b = v ? Math.max(1, Math.abs(v.mean)) * Number.EPSILON * 8 : 0, A = (v ? g.filter((E) => Math.abs(E.mean - v.mean) <= b) : []).length === 1 ? v : void 0;
  A ? (a.winnerId !== A.id || a.winnerLabel !== A.label) && Z(
    "INVALID_BUNDLE",
    `${s}/winnerId`,
    `does not match the raw-run winner '${A.id}'`
  ) : (ge(a, "winnerId") || ge(a, "winnerLabel")) && Z("INVALID_BUNDLE", `${s}/winnerId`, "no unique winner is supported by the raw run evidence");
  const R = g.length === 0 ? "failed" : f.every((E) => E.finalStatus === "completed") ? "completed" : "partial";
  a.status !== R && Z(
    "INVALID_BUNDLE",
    `${s}/status`,
    `does not match raw run evidence (expected ${R})`
  );
}
function _1(a, r, s) {
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
    m1(b, `${s}/variants/${_}`);
    const A = be(b, `${s}/variants/${_}`), R = He(A.id, `${s}/variants/${_}/id`);
    d.push(R), f.set(R, Ee(A.label, `${s}/variants/${_}/label`, ke));
  }), mn(d, `${s}/variants`, "derived variant ids");
  const y = be(r.spec, "/payload/spec"), m = /* @__PURE__ */ new Map(), g = Je(y.variants, "/payload/spec/variants", os).map((b, _) => {
    const A = be(b, `/payload/spec/variants/${_}`), R = He(A.id, `/payload/spec/variants/${_}/id`);
    return m.set(
      R,
      Ee(A.label, `/payload/spec/variants/${_}/label`, ke)
    ), R;
  });
  (d.length !== g.length || d.some((b) => !g.includes(b))) && Z("INVALID_BUNDLE", `${s}/variants`, "must match spec variant ids exactly");
  for (const b of d)
    f.get(b) !== m.get(b) && Z("INVALID_BUNDLE", `${s}/variants`, `label for variant '${b}' does not match the spec`);
  if (ge(l, "baselineVariantId")) {
    const b = He(l.baselineVariantId, `${s}/baselineVariantId`);
    f.has(b) || Z("INVALID_BUNDLE", `${s}/baselineVariantId`, "unknown baseline variant"), c.forEach((_, A) => {
      const R = be(_, `${s}/variants/${A}`);
      if (!ge(R, "baselineComparison")) return;
      be(
        R.baselineComparison,
        `${s}/variants/${A}/baselineComparison`
      ).baselineId !== b && Z(
        "INVALID_BUNDLE",
        `${s}/variants/${A}/baselineComparison/baselineId`,
        "must match derived baselineVariantId"
      );
    });
  } else c.some((b) => ge(be(b, s), "baselineComparison")) && Z("INVALID_BUNDLE", `${s}/variants`, "baselineComparison requires baselineVariantId");
  if (ge(l, "winnerId")) {
    const b = He(l.winnerId, `${s}/winnerId`);
    f.has(b) || Z("INVALID_BUNDLE", `${s}/winnerId`, "unknown winner variant"), ge(l, "winnerLabel") && Ee(l.winnerLabel, `${s}/winnerLabel`, ke) !== f.get(b) && Z("INVALID_BUNDLE", `${s}/winnerLabel`, "does not match the winner variant label");
  } else ge(l, "winnerLabel") && Z("INVALID_BUNDLE", `${s}/winnerLabel`, "winnerLabel requires winnerId");
  if (ge(l, "appliedVariantId")) {
    const b = He(l.appliedVariantId, `${s}/appliedVariantId`);
    f.has(b) || Z("INVALID_BUNDLE", `${s}/appliedVariantId`, "unknown applied variant");
  }
  ge(l, "applyConflict") && Ee(l.applyConflict, `${s}/applyConflict`, $t);
  const v = be(l.insights, `${s}/insights`);
  De(v, ["summary", "warnings", "paperIdeas"], ["summary", "warnings", "paperIdeas"], `${s}/insights`), Je(v.summary, `${s}/insights/summary`, 1e3).forEach((b, _) => Ee(b, `${s}/insights/summary/${_}`, $t)), Je(v.warnings, `${s}/insights/warnings`, 1e3).forEach((b, _) => Ee(b, `${s}/insights/warnings/${_}`, $t)), Je(v.paperIdeas, `${s}/insights/paperIdeas`, 1e3).forEach((b, _) => p1(b, `${s}/insights/paperIdeas/${_}`)), S1(l, r, s);
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
  if (ge(l, "$gcpSecretRef")) {
    De(l, ["$gcpSecretRef"], ["$gcpSecretRef"], r);
    const c = He(l.$gcpSecretRef, `${r}/$gcpSecretRef`), d = s.get(c) ?? [];
    d.push(r), s.set(c, d);
    return;
  }
  for (const [c, d] of Object.entries(l))
    ds(d, `${r}/${mo(c)}`, s);
}
function E1(a, r, s) {
  const l = be(a, s);
  De(
    l,
    ["policy", "secretRequirements", "textRedactions"],
    ["policy", "secretRequirements", "textRedactions"],
    s
  ), l.policy !== "explicit-secret-ref-v1" && Z("INVALID_BUNDLE", `${s}/policy`, "expected 'explicit-secret-ref-v1'");
  const c = Je(
    l.secretRequirements,
    `${s}/secretRequirements`,
    Hl
  ), d = [], f = /* @__PURE__ */ new Map();
  c.forEach((A, R) => {
    const E = `${s}/secretRequirements/${R}`, B = be(A, E);
    De(
      B,
      ["id", "locations", "reason", "requiredAtReplay", "nodeType", "parameter"],
      ["id", "locations", "reason", "requiredAtReplay"],
      E
    );
    const $ = He(B.id, `${E}/id`);
    d.push($);
    const O = Je(B.locations, `${E}/locations`, Hl).map((I, P) => {
      const Q = Ee(
        I,
        `${E}/locations/${P}`,
        $t
      );
      return Jh(Q) || Z("INVALID_BUNDLE", `${E}/locations/${P}`, "expected a valid JSON Pointer"), Q;
    });
    O.length === 0 && Z("INVALID_BUNDLE", `${E}/locations`, "at least one location is required"), mn(O, `${E}/locations`, "secret locations"), f.set($, [...O].sort()), Ee(B.reason, `${E}/reason`, $t), ey(B.requiredAtReplay, `${E}/requiredAtReplay`), ge(B, "nodeType") && Ee(B.nodeType, `${E}/nodeType`, ke), ge(B, "parameter") && Ee(B.parameter, `${E}/parameter`, ke);
  }), mn(d, `${s}/secretRequirements`, "secret requirement ids"), Je(
    l.textRedactions,
    `${s}/textRedactions`,
    Hl
  ).forEach((A, R) => {
    const E = `${s}/textRedactions/${R}`, B = be(A, E);
    De(B, ["locations", "reason"], ["locations", "reason"], E);
    const $ = Je(B.locations, `${E}/locations`, Hl);
    $.length === 0 && Z("INVALID_BUNDLE", `${E}/locations`, "at least one location is required"), $.forEach((O, I) => {
      const P = Ee(O, `${E}/locations/${I}`, $t);
      Jh(P) || Z("INVALID_BUNDLE", `${E}/locations/${I}`, "expected a valid JSON Pointer");
    }), Ee(B.reason, `${E}/reason`, $t);
  });
  const m = /* @__PURE__ */ new Map(), g = be(r.spec, "/payload/spec");
  ds(g.baseline, "/spec/baseline", m), Je(g.variants, "/payload/spec/variants", os).forEach((A, R) => {
    const E = be(A, `/payload/spec/variants/${R}`);
    ds(E.operations, `/spec/variants/${R}/operations`, m);
  });
  const b = [...m.keys()].sort(), _ = [...f.keys()].sort();
  (b.length !== _.length || b.some((A, R) => A !== _[R])) && Z(
    "INVALID_BUNDLE",
    `${s}/secretRequirements`,
    `must declare exactly the SecretRefs used by the spec (used: ${b.join(", ") || "none"})`
  );
  for (const A of b) {
    const R = [...m.get(A)].sort(), E = f.get(A);
    (R.length !== E.length || R.some((B, $) => B !== E[$])) && Z(
      "INVALID_BUNDLE",
      `${s}/secretRequirements`,
      `locations for SecretRef '${A}' do not match the spec`
    );
  }
}
function x1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    ["id", "createdAt", "completedAt", "producer", "provenance", "spec", "runs", "derived", "redactionReport"],
    r
  ), He(s.id, `${r}/id`);
  const l = us(s.createdAt, `${r}/createdAt`), c = us(s.completedAt, `${r}/completedAt`);
  return Date.parse(c) < Date.parse(l) && Z("INVALID_BUNDLE", `${r}/completedAt`, "must not be before createdAt"), o1(s.producer, `${r}/producer`), c1(s.provenance, `${r}/provenance`), u1(s.spec, `${r}/spec`), f1(s.runs, s, `${r}/runs`), _1(s.derived, s, `${r}/derived`), E1(s.redactionReport, s, `${r}/redactionReport`), s;
}
function N1(a, r) {
  const s = be(a, r);
  De(
    s,
    ["algorithm", "canonicalization", "contentSha256"],
    ["algorithm", "canonicalization", "contentSha256"],
    r
  ), s.algorithm !== "SHA-256" && Z("INVALID_BUNDLE", `${r}/algorithm`, "expected 'SHA-256'"), s.canonicalization !== Fu && Z("INVALID_BUNDLE", `${r}/canonicalization`, `expected '${Fu}'`);
  const l = Ee(s.contentSha256, `${r}/contentSha256`, 64);
  return /^[a-f0-9]{64}$/.test(l) || Z("INVALID_BUNDLE", `${r}/contentSha256`, "expected 64 lowercase hexadecimal characters"), s;
}
function A1(a) {
  Fi(a);
  const r = be(a, "/");
  if (r.format !== yd)
    throw new pn(
      "UNSUPPORTED_FORMAT",
      `Unsupported study bundle format '${String(r.format ?? "")}'`
    );
  if (typeof r.formatVersion != "number" || !Number.isInteger(r.formatVersion))
    throw new pn("UNSUPPORTED_VERSION", "Study bundle formatVersion must be an integer");
  if (r.formatVersion > eo)
    throw new pn(
      "FUTURE_VERSION",
      `Study bundle version ${r.formatVersion} requires a newer Graph Copilot`
    );
  if (r.formatVersion !== eo)
    throw new pn(
      "UNSUPPORTED_VERSION",
      `Study bundle version ${r.formatVersion} is not supported`
    );
  De(r, ["format", "formatVersion", "payload", "integrity"], ["format", "formatVersion", "payload", "integrity"], "/");
  const s = x1(r.payload, "/payload"), l = N1(r.integrity, "/integrity");
  return { root: r, payload: s, integrity: l };
}
function ry(a) {
  return {
    format: yd,
    formatVersion: eo,
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
function Lu(a, r) {
  return a === void 0 ? {} : { [r]: a };
}
function j1(a, r, s) {
  const l = a.variants.map((b) => {
    var oe;
    const _ = s.filter((ue) => ue.variantId === b.id).sort((ue, Y) => ue.repetition - Y.repetition || ue.runKey.localeCompare(Y.runKey)), A = _.filter((ue) => ue.status === "completed"), R = A.map((ue) => ay(ue, r.objective, `/payload/runs/${s.indexOf(ue)}`)).filter((ue) => ue !== void 0), E = new Set(R.map((ue) => ue.key)), B = R.map((ue) => ue.value), $ = E.size === 1 ? (oe = R[0]) == null ? void 0 : oe.key : void 0, O = A.length === r.repetitions && R.length === r.repetitions && E.size === 1, I = b.status === "invalid" ? "invalid" : O ? "completed" : "failed", P = O ? gd(B) : void 0, Q = O ? Wn(B) : void 0, ae = O ? po(B) : void 0, H = {
      id: b.id,
      label: b.label,
      status: I,
      ...$ === void 0 ? {} : { metricKey: $ },
      metricValues: B,
      ...Q === void 0 ? {} : { mean: Q },
      ...ae === void 0 ? {} : { stddev: ae },
      ...P === void 0 ? {} : {
        confidenceInterval95: {
          level: 0.95,
          lower: P.lower,
          upper: P.upper
        }
      },
      runtimeMs: Wn(_.map((ue) => ue.durationMs)) ?? 0,
      observedMetrics: iy(_),
      ...b.operationSummary === void 0 ? {} : { operationSummary: [...b.operationSummary] },
      errors: [...b.errors]
    };
    return {
      id: b.id,
      label: b.label,
      values: B,
      ...$ === void 0 ? {} : { metricKey: $ },
      preRankingStatus: I,
      result: H
    };
  });
  if (new Set(
    l.filter((b) => b.preRankingStatus === "completed" && b.metricKey).map((b) => no(b.metricKey))
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
      const A = ls(_.values, b.values, r.objective.direction);
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
    ...Lu(a.baselineVariantId, "baselineVariantId"),
    ...g === void 0 ? {} : { winnerId: g.id, winnerLabel: g.label },
    ...Lu(a.appliedVariantId, "appliedVariantId"),
    ...Lu(a.applyConflict, "applyConflict"),
    insights: {
      summary: [...a.insights.summary],
      warnings: [...a.insights.warnings],
      paperIdeas: a.insights.paperIdeas.map((b) => ({ ...b }))
    }
  };
}
async function Sd(a) {
  const { payload: r, integrity: s } = A1(a), l = await Pg(Fi(ry(r)));
  if (l !== s.contentSha256)
    throw new pn(
      "INTEGRITY_MISMATCH",
      `Study bundle integrity mismatch: expected ${l}, received ${s.contentSha256}`
    );
  const c = ly(a);
  return bd(Fi(c)), sy(c);
}
async function w1(a) {
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
    derived: j1(a.session, r, a.runs),
    redactionReport: a.redactionReport
  }, l = ly(s), c = await Pg(Fi(ry(l)));
  return Sd({
    format: yd,
    formatVersion: eo,
    payload: l,
    integrity: {
      algorithm: "SHA-256",
      canonicalization: Fu,
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
const $1 = "graph-copilot", T1 = "[REDACTED]", M1 = "Exact echoes of values removed by capture redaction were removed from text. Arbitrary unrelated secrets in ordinary strings cannot be detected.", O1 = "A credential-shaped field outside the replayable graph spec was removed.";
class C1 extends Error {
  constructor(s, l) {
    super(`${s}: ${l}`);
    rn(this, "path");
    this.name = "StudyCaptureError", this.path = s;
  }
}
function Ce(a, r) {
  throw new C1(a, r);
}
function nr(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = Object.getPrototypeOf(a);
  return r === Object.prototype || r === null;
}
function An(a, r) {
  return nr(a) || Ce(r, "expected a plain object"), a;
}
function Lt(a, r, s = !1) {
  return (typeof a != "string" || !s && a.length === 0) && Ce(r, s ? "expected a string" : "expected a non-empty string"), a;
}
function Wi(a, r) {
  return (typeof a != "number" || !Number.isFinite(a)) && Ce(r, "expected a finite number"), a;
}
function bs(a) {
  return a.replace(/~/g, "~0").replace(/\//g, "~1");
}
function D1(a) {
  return a.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase();
}
function ii(a) {
  const r = D1(a);
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
function ni(a, r, s = /* @__PURE__ */ new WeakSet()) {
  if (Array.isArray(a)) {
    if (s.has(a)) return;
    s.add(a), a.forEach((l) => ni(l, r, s)), s.delete(a);
    return;
  }
  if (nr(a) && !s.has(a)) {
    s.add(a);
    for (const [l, c] of Object.entries(a))
      ii(l) ? Pi(c, r) : ni(c, r, s);
    s.delete(a);
  }
}
function z1(a) {
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
function R1(a, r, s) {
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
  if (ni(a, l), !nr(a)) return;
  const c = r ? s.get(r) : void 0, d = cy(c);
  for (const [f, y] of Object.entries(a)) {
    const m = d == null ? void 0 : d.get(f);
    (!c || !m || m.param_type === "secret" || ii(f)) && Pi(y, l);
  }
}
function L1(a, r) {
  var f;
  const s = /* @__PURE__ */ new Set(), { baseline: l, request: c } = a;
  for (const y of r.values())
    for (const m of y.params)
      ni(m.default, s), (m.param_type === "secret" || ii(m.name)) && Pi(m.default, s);
  ni(l, s), ni(c, s), ni(a.provenanceFacts, s);
  for (const y of Array.isArray(l.nodes) ? l.nodes : [])
    Zh((f = y.data) == null ? void 0 : f.params, y.type, r, s);
  Array.isArray(l.presets) && l.presets.forEach((y) => Pi(y, s));
  const d = oy(Array.isArray(l.nodes) ? l.nodes : []);
  for (const y of Array.isArray(c.variants) ? c.variants : []) {
    const m = new Map(d), g = /* @__PURE__ */ new Map();
    for (const v of Array.isArray(y == null ? void 0 : y.operations) ? y.operations : []) {
      if (!nr(v)) continue;
      const b = R1(v, m, g);
      (v.op === "add_node" || v.op === "set_params") && Zh(v.params, b, r, s);
    }
  }
  return s;
}
function U1(a) {
  const s = [T1, "<removed>", "***", "�"].find((l) => [...a].every((c) => !l.includes(c)));
  if (s) return s;
  for (let l = 57344; l <= 63743; l += 1) {
    const c = String.fromCodePoint(l);
    if ([...a].every((d) => !c.includes(d))) return c;
  }
  return "";
}
class B1 {
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
class V1 {
  constructor(r, s) {
    rn(this, "ordered");
    rn(this, "replacement");
    this.redactions = s, this.ordered = [...r].sort((l, c) => c.length - l.length), this.replacement = U1(r);
  }
  text(r, s) {
    let l = r;
    for (const c of this.ordered) l = l.split(c).join(this.replacement);
    return l !== r && this.redactions.record(s, M1), l;
  }
  semantic(r, s) {
    return this.ordered.some((l) => r.includes(l)) && Ce(s, "a redacted value appears in a semantic identity and cannot be safely rewritten"), r;
  }
}
function H1(a) {
  return a.normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 180) || "secret";
}
function G1(a) {
  if (a === null) return "null";
  if (typeof a == "string") return `string:${a}`;
  if (typeof a == "number" && Number.isFinite(a)) return `number:${String(a)}`;
  if (typeof a == "boolean") return `boolean:${String(a)}`;
}
class q1 {
  constructor() {
    rn(this, "identities", /* @__PURE__ */ new Map());
    rn(this, "requirements", /* @__PURE__ */ new Map());
    rn(this, "usedIds", /* @__PURE__ */ new Set());
  }
  ref(r) {
    const s = G1(r.rawValue), l = this.identities.get(r.identity) ?? [];
    let c = s === void 0 ? void 0 : l.find((d) => d.signature === s);
    if (!c) {
      const d = H1(r.suggestedId);
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
  const l = An(a, r);
  s.stack.has(l) && Ce(r, "cyclic values are not portable"), s.stack.add(l);
  try {
    Object.prototype.hasOwnProperty.call(l, "$gcpSecretRef") && Ce(r, "raw host data may not contain the reserved '$gcpSecretRef' key");
    const c = /* @__PURE__ */ Object.create(null);
    for (const [d, f] of Object.entries(l)) {
      const y = `${r}/${bs(d)}`;
      c[d] = ii(d) ? s.secrets.ref({
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
function ao(a, r, s, l, c = /* @__PURE__ */ new WeakSet()) {
  if (a === null || typeof a == "boolean") return a;
  if (typeof a == "number") return Wi(a, r);
  if (typeof a == "string") return s.text(a, r);
  if (Array.isArray(a)) {
    c.has(a) && Ce(r, "cyclic values are not portable"), c.add(a);
    try {
      const f = [];
      for (let y = 0; y < a.length; y += 1)
        Object.prototype.hasOwnProperty.call(a, y) || Ce(`${r}/${y}`, "sparse arrays are not portable"), f.push(ao(a[y], `${r}/${y}`, s, l, c));
      return f;
    } finally {
      c.delete(a);
    }
  }
  const d = An(a, r);
  c.has(d) && Ce(r, "cyclic values are not portable"), c.add(d);
  try {
    Object.prototype.hasOwnProperty.call(d, "$gcpSecretRef") && Ce(r, "provenance may not contain the reserved '$gcpSecretRef' key");
    const f = /* @__PURE__ */ Object.create(null);
    for (const [y, m] of Object.entries(d)) {
      const g = `${r}/${bs(y)}`;
      ii(y) ? (f[y] = s.replacement, l.record(g, O1)) : f[y] = ao(m, g, s, l, c);
    }
    return f;
  } finally {
    c.delete(d);
  }
}
function cy(a) {
  return a ? new Map(a.params.map((r) => [r.name, r])) : void 0;
}
function ed(a, r, s, l, c, d, f) {
  const y = An(a, c), m = r ? d.get(r) : void 0, g = cy(m), v = /* @__PURE__ */ Object.create(null);
  for (const [b, _] of Object.entries(y)) {
    const A = `${c}/${bs(b)}`, R = g == null ? void 0 : g.get(b);
    let E;
    m ? R ? R.param_type === "secret" ? E = `${r}.${b} is declared as a secret parameter.` : ii(b) && (E = `Credential-shaped parameter '${b}' was redacted recursively.`) : E = `Parameter '${b}' is absent from the captured '${r}' schema and was redacted fail-closed.` : E = r ? `Node type '${r}' has no captured schema; parameter '${b}' was redacted fail-closed.` : `The node type is unresolved; parameter '${b}' was redacted fail-closed.`, v[b] = E ? f.secrets.ref({
      identity: `${s}:param:${b}`,
      suggestedId: `${l}-${b}`,
      rawValue: _,
      location: A,
      reason: E,
      ...r === void 0 ? {} : { nodeType: r },
      parameter: b
    }) : fs(_, A, f);
  }
  return v;
}
function I1(a, r, s) {
  nr(a) || Ce("baseline", "expected a plain serialized graph"), Array.isArray(a.nodes) || Ce("baseline.nodes", "expected an array"), Array.isArray(a.edges) || Ce("baseline.edges", "expected an array");
  const l = a.nodes.map((f, y) => {
    const m = `/spec/baseline/nodes/${y}`, g = An(f, `baseline.nodes[${y}]`), v = s.scrubber.semantic(Lt(g.id, `${m}/id`), `${m}/id`), b = s.scrubber.semantic(Lt(g.type, `${m}/type`), `${m}/type`);
    let _ = { x: 0, y: 0 };
    if (g.position !== void 0) {
      const E = An(g.position, `${m}/position`);
      _ = {
        x: Wi(E.x, `${m}/position/x`),
        y: Wi(E.y, `${m}/position/y`)
      };
    }
    const A = g.data === void 0 ? {} : An(g.data, `${m}/data`), R = /* @__PURE__ */ Object.create(null);
    for (const [E, B] of Object.entries(A)) {
      const $ = `${m}/data/${bs(E)}`;
      E === "params" ? R.params = ed(
        B,
        b,
        `node:${v}`,
        v,
        $,
        r,
        s
      ) : ii(E) ? R[E] = s.secrets.ref({
        identity: `node:${v}:credential:${E}`,
        suggestedId: `${v}-${E}`,
        rawValue: B,
        location: $,
        reason: `Credential-shaped key '${E}' was redacted recursively.`,
        nodeType: b,
        parameter: E
      }) : R[E] = fs(B, $, s);
    }
    return { id: v, type: b, position: _, data: R };
  }), c = a.edges.map((f, y) => {
    const m = `/spec/baseline/edges/${y}`, g = An(f, `baseline.edges[${y}]`), v = g.type;
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
function k1(a, r, s, l, c, d) {
  Array.isArray(a) || Ce(`request.variants[${s}].operations`, "expected an array");
  const f = new Map(l), y = /* @__PURE__ */ new Map();
  return a.map((m, g) => {
    const v = `/spec/variants/${s}/operations/${g}`, b = An(m, `request.variants[${s}].operations[${g}]`);
    switch (b.op) {
      case "add_node": {
        const _ = sn(b.node_type, `${v}/node_type`, d.scrubber), A = b.ref === void 0 ? void 0 : sn(b.ref, `${v}/ref`, d.scrubber);
        A !== void 0 && y.set(A, _);
        const R = c.get(_), E = /* @__PURE__ */ Object.create(null);
        for (const I of (R == null ? void 0 : R.params) ?? [])
          I.default !== void 0 && (E[I.name] = I.default);
        if (b.params !== void 0)
          for (const [I, P] of Object.entries(An(b.params, `${v}/params`)))
            E[I] = P;
        const $ = Object.keys(E).length > 0 ? ed(
          E,
          _,
          A === void 0 ? `variant:${r}:operation:${g}` : `variant:${r}:ref:${A}`,
          A ?? `${r}-node-${g + 1}`,
          `${v}/params`,
          c,
          d
        ) : void 0, O = b.position === void 0 ? void 0 : (() => {
          const I = An(b.position, `${v}/position`);
          return {
            x: Wi(I.x, `${v}/position/x`),
            y: Wi(I.y, `${v}/position/y`)
          };
        })();
        return {
          op: "add_node",
          node_type: _,
          ...A === void 0 ? {} : { ref: A },
          ...$ === void 0 ? {} : { params: $ },
          ...O === void 0 ? {} : { position: O }
        };
      }
      case "set_params": {
        const _ = sn(b.node_id, `${v}/node_id`, d.scrubber), A = y.get(_) ?? f.get(_), R = y.has(_) ? `variant:${r}:ref:${_}` : `node:${_}`;
        return {
          op: "set_params",
          node_id: _,
          params: ed(
            b.params,
            A,
            R,
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
function K1(a, r) {
  var s;
  return ((s = a.id) == null ? void 0 : s.trim()) || `variant-${r + 1}`;
}
function Y1(a) {
  Array.isArray(a.request.variants) || Ce("request.variants", "expected an array"), Array.isArray(a.session.variants) || Ce("session.variants", "expected an array"), (a.request.repetitions ?? 1) !== a.session.repetitions && Ce("request.repetitions", "does not match the completed session"), (a.request.objective.metric !== a.session.objective.metric || a.request.objective.direction !== a.session.objective.direction) && Ce("request.objective", "does not match the completed session"), a.request.hypothesis.trim() !== a.session.hypothesis && Ce("request.hypothesis", "does not match the completed session"), a.request.variants.length !== a.session.variants.length && Ce("request.variants", "does not match the completed session variant count"), a.request.variants.forEach((s, l) => {
    const c = a.session.variants[l];
    K1(s, l) !== (c == null ? void 0 : c.id) && Ce(`request.variants[${l}].id`, "does not match the completed session variant id"), s.label.trim() !== c.label && Ce(`request.variants[${l}].label`, "does not match the completed session variant label");
  });
}
function X1(a, r, s) {
  return {
    ...a,
    id: s.semantic(a.id, `/derived/variants/${r}/id`),
    label: s.text(a.label, `/derived/variants/${r}/label`),
    ...a.metricKey === void 0 ? {} : { metricKey: s.semantic(a.metricKey, `/derived/variants/${r}/metricKey`) },
    metricValues: [...a.metricValues],
    observedMetrics: Object.fromEntries(Object.entries(a.observedMetrics).map(([l, c]) => [
      s.semantic(l, `/derived/variants/${r}/observedMetrics/${bs(l)}`),
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
function Q1(a, r) {
  const s = a.variants.map((c, d) => X1(c, d, r)), l = new Map(s.map((c) => [c.id, c]));
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
function J1(a, r, s) {
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
function Z1(a, r) {
  const s = [], l = /* @__PURE__ */ new Set();
  return a.variants.forEach((c, d) => {
    var f;
    (f = c.runs) == null || f.forEach((y, m) => {
      var E, B;
      const g = `${c.id}\0${y.repetition}`;
      l.has(g) && Ce(`session.variants[${d}].runs[${m}]`, "duplicate variant/repetition run slot"), l.add(g);
      const v = [], b = /* @__PURE__ */ new Set(), _ = J1(y, r, `/runs/${s.length}/metrics/0`);
      _ && (b.add(_.observedKey), v.push(_));
      for (const [$, O] of Object.entries(y.observedMetrics)) {
        if (!Number.isFinite(O)) continue;
        const I = ((E = y.observedMetricIdentities) == null ? void 0 : E[$]) ?? ($ === "system.runtime_ms" ? "system.runtime_ms" : void 0), P = ((B = y.observedMetricSources) == null ? void 0 : B[$]) ?? ($ === "system.runtime_ms" ? "client" : void 0);
        if (!I || !P) continue;
        const Q = `/runs/${s.length}/metrics/${v.length}`, ae = r.semantic($, `${Q}/observedKey`), H = r.semantic(I, `${Q}/canonicalKey`);
        b.has(ae) || (b.add(ae), v.push({ observedKey: ae, canonicalKey: H, value: O, source: P }));
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
              R
            )
          }
        } : {}
      });
    });
  }), s;
}
function F1(a, r, s) {
  const l = (a.provenanceFacts ?? []).map((c, d) => {
    const f = `/provenance/facts/${d}`;
    return {
      key: r.text(Lt(c.key, `${f}/key`), `${f}/key`),
      status: c.status,
      source: r.text(Lt(c.source, `${f}/source`), `${f}/source`),
      ...c.collectedAt === void 0 ? {} : { collectedAt: c.collectedAt },
      ...c.value === void 0 ? {} : { value: ao(c.value, `${f}/value`, r, s) }
    };
  });
  return a.request.search !== void 0 && (l.some((c) => c.key === "optimizer.plan") && Ce("provenanceFacts", "'optimizer.plan' is reserved for the captured experiment request"), l.push({
    key: "optimizer.plan",
    status: "observed",
    source: "graph-experiment request",
    value: ao(
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
async function W1(a) {
  Y1(a);
  const r = z1(a.definitions), s = L1(a, r), l = new B1(), c = new V1(s, l), d = new q1(), f = { secrets: d, scrubber: c, stack: /* @__PURE__ */ new WeakSet() }, y = I1(a.baseline, r, f), m = oy(a.baseline.nodes), g = Q1(a.session, c), v = a.request.variants.map((R, E) => ({
    id: g.variants[E].id,
    label: c.text(a.session.variants[E].label, `/spec/variants/${E}/label`),
    operations: k1(
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
  const b = Z1(a.session, c), _ = F1(a, c, l), A = {
    policy: "explicit-secret-ref-v1",
    secretRequirements: d.report(),
    textRedactions: l.report()
  };
  return w1({
    session: g,
    completedAt: a.completedAt,
    producer: {
      pluginId: a.pluginId ?? $1,
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
const io = "graph-copilot.study-index.v1", P1 = "graph-copilot.study.sha256.", xd = "codefyui.graph-copilot.study-index", Nd = 1, uy = 10, eS = 512 * 1024, dy = 256, tS = 32 * 1024, Fh = 4, fy = /^[a-f0-9]{64}$/, nS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, aS = "graph-copilot.study-index.v1.lock";
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
function iS(a) {
  return typeof a == "string" && nS.test(a) && !Number.isNaN(Date.parse(a)) && new Date(a).toISOString() === a;
}
function hy(a) {
  return typeof a == "string" && a.length > 0 && a.length <= dy && a === a.trim() && !/[\u0000-\u001f\u007f]/.test(a);
}
function rS(a) {
  if (!hy(a))
    throw new ut(
      "INVALID_ID",
      `Study id must be a non-empty, trimmed string of at most ${dy} characters`
    );
}
function sS(a) {
  return !py(a) || !my(a, ["id", "digest", "createdAt", "hypothesis", "kind"]) || !hy(a.id) || typeof a.digest != "string" || !fy.test(a.digest) || !iS(a.createdAt) || typeof a.hypothesis != "string" || !a.hypothesis.trim() || a.hypothesis.length > tS || a.hypothesis.includes("\0") || a.kind !== "portable" ? null : Object.freeze({
    id: a.id,
    digest: a.digest,
    createdAt: a.createdAt,
    hypothesis: a.hypothesis,
    kind: "portable"
  });
}
function ho(a, r) {
  return r.createdAt.localeCompare(a.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function lS(a, r) {
  return a.createdAt.localeCompare(r.createdAt) || a.id.localeCompare(r.id) || a.digest.localeCompare(r.digest);
}
function gy(a) {
  return Object.freeze({
    format: xd,
    formatVersion: Nd,
    entries: Object.freeze([...a].sort(ho))
  });
}
const ti = gy([]);
function go(a) {
  if (!a || a.length > eS) return ti;
  let r;
  try {
    r = JSON.parse(a);
  } catch {
    return ti;
  }
  if (!py(r) || !my(r, ["format", "formatVersion", "entries"]) || r.format !== xd || r.formatVersion !== Nd || !Array.isArray(r.entries)) return ti;
  const s = r.entries.map(sS).filter((f) => f !== null), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  for (const f of s)
    l.set(f.id, (l.get(f.id) ?? 0) + 1), c.set(f.digest, (c.get(f.digest) ?? 0) + 1);
  const d = s.filter((f) => l.get(f.id) === 1 && c.get(f.digest) === 1);
  return gy(d.sort(ho).slice(0, uy));
}
function Ad(a) {
  return JSON.stringify({
    format: xd,
    formatVersion: Nd,
    entries: [...a].sort(ho)
  });
}
function Wh(a) {
  if (a === null) return ti;
  const r = go(a);
  if (a !== Ad(r.entries))
    throw new ut(
      "INDEX_READ_FAILED",
      "Portable study index is malformed or non-canonical; mutation was aborted without changing storage"
    );
  return r;
}
function er(a) {
  try {
    return a.storage.get(io);
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
const Gl = /* @__PURE__ */ new Map();
function oS() {
  if (typeof navigator > "u") return null;
  const a = navigator.locks;
  return !a || typeof a.request != "function" ? null : a;
}
function vy(a, r) {
  const s = oS();
  if (s === null)
    return Promise.reject(new ut(
      "LOCK_UNAVAILABLE",
      "Cross-tab storage mutations require browser Web Locks; this environment remains read-only"
    ));
  const l = Gl.get(a) ?? Promise.resolve();
  let c;
  const d = new Promise((f) => {
    c = f;
  });
  return Gl.set(a, d), l.catch(() => {
  }).then(() => s.request(a, { mode: "exclusive" }, r)).finally(() => {
    c(), Gl.get(a) === d && Gl.delete(a);
  });
}
function cS(a) {
  return vy(aS, a);
}
function uS(a, r, s) {
  if (er(a) !== r) return !1;
  try {
    a.storage.set(io, s);
  } catch (l) {
    let c;
    try {
      c = a.storage.get(io);
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
function dS(a, r) {
  try {
    const s = er(a), l = go(s);
    return l.entries.some((c) => c.digest === r) ? !0 : s !== null && s !== Ad(l.entries);
  } catch {
    return !0;
  }
}
function Ph(a, r) {
  return dS(a, r) ? !0 : yy(a, jd(r));
}
function jd(a) {
  if (!fy.test(a))
    throw new ut("BUNDLE_TAMPERED", "Study digest is not a lowercase SHA-256 value");
  return `${P1}${a}`;
}
async function fS(a) {
  return Ed(a);
}
function pS(a) {
  try {
    return go(a.storage.get(io));
  } catch {
    return ti;
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
  return cS(async () => {
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
        const _ = er(a), A = Wh(_), R = A.entries.find((Q) => Q.id === c.id);
        if (R) {
          if (R.digest !== c.digest)
            throw new ut(
              "ID_CONFLICT",
              `Study '${c.id}' already exists with different content; fork it to a new id before saving`
            );
          return Object.freeze({
            status: v ? "saved" : "unchanged",
            entry: R,
            cleanupFailures: Object.freeze([])
          });
        }
        const E = [...A.entries, c], B = [...A.entries].sort(lS).slice(0, Math.max(0, E.length - uy)), $ = new Set(B.map((Q) => Q.digest)), O = E.filter((Q) => !$.has(Q.digest)).sort(ho), I = Ad(O);
        if (!uS(a, _, I)) continue;
        const P = [];
        for (const Q of B)
          Ph(a, Q.digest) || P.push(Q.digest);
        return Object.freeze({
          status: "saved",
          entry: c,
          cleanupFailures: Object.freeze(P)
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
  rS(r);
  const l = go(er(a)).entries.find((f) => f.id === r);
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
function ro(a) {
  if (typeof a == "number" && Number.isFinite(a)) return a;
  if (typeof a == "boolean") return a ? 1 : 0;
}
function Qi(a) {
  return a && typeof a == "object" && !Array.isArray(a) ? a : null;
}
function tg(a, r, s) {
  const l = Qi(s);
  if (!l) return;
  if ((typeof l.type == "string" ? l.type : "") === "model") {
    const y = ro(l.trainable ?? l.params);
    y !== void 0 && (a.modelParams[r] = y);
    return;
  }
  const d = l.value, f = ro(d);
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
    texts: []
  }, s = Qi(a.output_summary);
  if (s)
    for (const [d, f] of Object.entries(s))
      tg(r, d, f);
  const l = Qi(a.progress);
  l && (r.progress = l);
  const c = Array.isArray(a.outputs) ? a.outputs : [];
  for (const d of c) {
    const f = Qi(d);
    if (!f) continue;
    const y = typeof f.output_kind == "string" ? f.output_kind : "";
    if (y === "progress") {
      const m = Qi(f.progress);
      m && (r.progress = m);
    } else if (y === "tensor_summary") {
      const m = Qi(f.tensor_summary);
      if (m)
        for (const [g, v] of Object.entries(m))
          tg(r, g, v);
    } else y === "text" && typeof f.text == "string" && f.text.length > 0 && r.texts.push(f.text);
  }
  return r;
}
const wd = "experiment-sessions-v1", td = "gcp:experiments-changed", ng = 8, so = 16, mS = 20, hS = 600 * 1e3, gS = "graph-copilot.experiment-sessions-v1.lock";
class Xl extends Error {
  constructor(s, l) {
    super(s.message);
    rn(this, "observation");
    this.name = s.name, this.observation = l;
  }
}
function ps(a) {
  return a === void 0 ? a : JSON.parse(JSON.stringify(a));
}
function yS(a) {
  const r = String(a);
  return a instanceof ut && a.causeValue !== void 0 ? `${r}: ${String(a.causeValue)}` : r;
}
function ms(a) {
  const r = typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${a}-${r}`;
}
function vS(a) {
  return typeof a == "number" && Number.isFinite(a) ? a : void 0;
}
function lo(a) {
  if (a.length !== 0)
    return a.reduce((r, s) => r + s, 0) / a.length;
}
function bS(a) {
  if (a.length < 2) return;
  const r = lo(a);
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
function SS(a) {
  return Object.fromEntries(a.params.map((r) => [r.name, ps(r.default)]));
}
function _S(a, r) {
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
    const f = _S(d, c);
    if (f) return f;
  }
}
function ES(a) {
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
  const l = ps(a), c = {}, d = [], f = new Map(s.map((g) => [g.node_name, g])), y = (g) => {
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
          const E = ig(_, g.params);
          if (E) {
            m(v, `add_node: ${E}`);
            return;
          }
        }
        const A = ms("candidate-node"), R = {
          id: A,
          type: g.node_type,
          position: g.position ?? {
            x: 160 + l.nodes.length % 4 * 240,
            y: 120 + Math.floor(l.nodes.length / 4) * 160
          },
          data: { params: { ...SS(_), ...g.params ?? {} } }
        };
        l.nodes.push(R), g.ref && (c[g.ref] = A), d.push({ index: v, ok: !0, node_id: A });
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
          params: { ...((b = A.data) == null ? void 0 : b.params) ?? {}, ...ps(g.params) }
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
          id: ms("candidate-edge"),
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
        l.nodes = [], l.edges = [], Object.keys(c).forEach((_) => delete c[_]), d.push({ index: v, ok: !0 });
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
  }), { graph: l, results: d, refs: c };
}
async function xS(a, r, s) {
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
async function _y(a, r) {
  const s = await a.http.fetch("/api/auth/bootstrap", { signal: r });
  if (!s.ok) throw new Error(`Execution auth bootstrap failed: HTTP ${s.status}`);
  const l = await s.json();
  if (typeof l.token != "string" || !l.token)
    throw new Error("Execution auth bootstrap returned no token");
  return l.token;
}
function Ey(a) {
  const r = window.location.protocol === "https:" ? "wss:" : "ws:", s = new URL(`${r}//${window.location.host}/ws/execution`);
  return s.searchParams.set("token", a), s.toString();
}
function oo(a, r) {
  let s = a;
  const l = [.../* @__PURE__ */ new Set([r, encodeURIComponent(r)])].filter((c) => c.length > 0).sort((c, d) => d.length - c.length);
  for (const c of l) s = s.split(c).join("[REDACTED]");
  return s;
}
function NS(a, r, s, l, c, d) {
  const f = a.nodes.find((m) => m.id === r), y = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(s)) {
    const v = `${r}.${m}`, b = f != null && f.type && y === 1 ? `${f.type}.${m}` : v;
    l[v] = g, c[v] = b, d[v] = "output_summary", f != null && f.type && y === 1 && (l[b] = g, c[b] = b, d[b] = "output_summary");
  }
}
function AS(a, r, s, l, c, d) {
  if (!s || typeof s != "object") return;
  const f = a.nodes.find((m) => m.id === r), y = f ? a.nodes.filter((m) => m.type === f.type).length : 0;
  for (const [m, g] of Object.entries(s)) {
    const v = vS(g);
    if (v === void 0) continue;
    const b = `${r}.progress.${m}`, _ = f != null && f.type && y === 1 ? `${f.type}.progress.${m}` : b;
    l[b] = v, c[b] = _, d[b] = "progress", f != null && f.type && y === 1 && (l[_] = v, c[_] = _, d[_] = "progress");
  }
}
function jS(a, r, s, l = hS) {
  const c = $d(a), d = Date.now();
  return new Promise((f, y) => {
    const m = new WebSocket(Ey(r)), g = {}, v = {}, b = {};
    let _ = !1;
    const A = (B) => {
      if (_) return;
      _ = !0, clearTimeout(E), s == null || s.removeEventListener("abort", R), (m.readyState === WebSocket.OPEN || m.readyState === WebSocket.CONNECTING) && m.close();
      const $ = Date.now() - d;
      g["system.runtime_ms"] = $, v["system.runtime_ms"] = "system.runtime_ms", b["system.runtime_ms"] = "client";
      const O = { metrics: g, metricIdentities: v, metricSources: b, durationMs: $ };
      B ? B instanceof DOMException && B.name === "AbortError" ? y(B) : y(new Xl(B, O)) : f(O);
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
        nodes: c.nodes,
        edges: c.edges,
        presets: c.presets ?? [],
        run_id: ms("gcp-experiment-run"),
        // Scalar summaries arrive on node_status regardless. Avoid retaining
        // full tensors for every candidate in CodefyUI's in-memory run store.
        record_outputs: !1,
        graph_id: ms("gcp-experiment-graph"),
        weights_persistent: !1
      }));
    }, m.onmessage = (B) => {
      let $;
      try {
        $ = JSON.parse(String(B.data));
      } catch {
        return;
      }
      const O = String($.type ?? "");
      if (O === "node_status") {
        const I = String($.node_id ?? ""), P = Sy($);
        NS(c, I, P.scalars, g, v, b), P.progress && AS(c, I, P.progress, g, v, b);
      } else O === "execution_complete" ? A() : (O === "execution_error" || O === "execution_stopped" || O === "error") && A(new Error(String($.error ?? O)));
    }, m.onerror = () => A(new Error("Experiment execution WebSocket failed")), m.onclose = () => {
      _ || A(new Error("Experiment execution WebSocket closed before completion"));
    };
  }).catch((f) => {
    if (f instanceof DOMException && f.name === "AbortError") throw f;
    if (f instanceof Xl) {
      const m = new Error(oo(f.message, r));
      throw m.name = f.name, new Xl(m, f.observation);
    }
    const y = f instanceof Error ? f.message : String(f);
    throw new Error(oo(y, r));
  });
}
function nd(a) {
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
  let c = 0;
  const d = Array.from({ length: Math.min(r, a.length) }, async () => {
    for (; c < a.length; ) {
      const f = c++;
      l[f] = await s(a[f], f);
    }
  });
  return await Promise.all(d), l;
}
function wS(a) {
  const r = /* @__PURE__ */ new Map();
  for (const s of a)
    for (const [l, c] of Object.entries(s.metrics))
      r.has(l) || r.set(l, []), r.get(l).push(c);
  return Object.fromEntries(
    [...r.entries()].sort(([s], [l]) => s.localeCompare(l)).slice(0, 40).map(([s, l]) => [s, lo(l)])
  );
}
function $S(a) {
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
function TS(a, r, s, l = []) {
  const c = [], d = [], f = [], y = $S(a);
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
function MS(a) {
  const { applyResult: r, appliedOperations: s, ...l } = a;
  return l;
}
function xy(a) {
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
    search: Td(r.search) ? r.search : void 0,
    insights: {
      summary: Array.isArray(l.summary) ? l.summary.filter((c) => typeof c == "string") : [],
      warnings: Array.isArray(l.warnings) ? l.warnings.filter((c) => typeof c == "string") : [],
      paperIdeas: Array.isArray(l.paperIdeas) ? l.paperIdeas.filter((c) => !!c && typeof c == "object" && typeof c.title == "string" && typeof c.evidence == "string" && typeof c.nextStep == "string") : []
    }
  };
}
function Ny(a) {
  try {
    const r = a.storage.get(wd);
    if (!r) return [];
    const s = JSON.parse(r);
    return Array.isArray(s) ? s.map(xy).filter((l) => !!l) : [];
  } catch {
    return [];
  }
}
function OS(a) {
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
    const f = xy(c);
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
async function Ay(a, r, s = {}) {
  await vy(gS, async () => {
    const l = OS(a);
    if (s.rejectIfExists && l.some((d) => d.id === r.id))
      throw new Error(
        `A local Experiment Lab report already uses study id '${r.id}'; import was refused to avoid overwriting local evidence.`
      );
    const c = [MS(r), ...l.filter((d) => d.id !== r.id)].slice(0, mS);
    a.storage.set(wd, JSON.stringify(c));
  }), typeof window < "u" && window.dispatchEvent(new Event(td));
}
function og(a, r, s, l, c) {
  const d = fo(
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
function CS(a) {
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
function ql(a, r) {
  const s = new Set(r);
  return Object.keys(a).every((l) => s.has(l));
}
function Uu(a) {
  return typeof a == "boolean" || typeof a == "string" || typeof a == "number" && Number.isFinite(a);
}
function Td(a) {
  if (!a || typeof a != "object" || Array.isArray(a)) return !1;
  const r = a;
  if (!ql(r, [
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
    if (!ql(d, [
      "nodeId",
      "nodeType",
      "param",
      "paramType",
      "baselineValue",
      "domain"
    ]) || typeof d.nodeId != "string" || typeof d.nodeType != "string" || typeof d.param != "string" || !["int", "float", "bool", "select"].includes(String(d.paramType)) || !Uu(d.baselineValue) || !Array.isArray(d.domain) || d.domain.length < 1 || d.domain.length > 32 || !d.domain.every(Uu)) return !1;
    s.push(`${d.nodeId}\0${d.param}`);
  }
  if (new Set(s).size !== s.length || !Array.isArray(r.assignments) || r.assignments.length > 8) return !1;
  const l = [];
  for (const c of r.assignments) {
    if (!c || typeof c != "object" || Array.isArray(c)) return !1;
    const d = c;
    if (!ql(d, ["variantId", "domainIndex", "values"]) || typeof d.variantId != "string" || !Number.isInteger(d.domainIndex) || d.domainIndex < 0 || !Array.isArray(d.values) || d.values.length !== r.bindings.length) return !1;
    l.push(d.variantId);
    for (const f of d.values) {
      if (!f || typeof f != "object" || Array.isArray(f)) return !1;
      const y = f;
      if (!ql(y, ["nodeId", "param", "value"]) || typeof y.nodeId != "string" || typeof y.param != "string" || !Uu(y.value)) return !1;
    }
  }
  return new Set(l).size === l.length && r.generatedCandidateCount === r.assignments.length;
}
function jy(a) {
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
  if (a.variants.length * r > so)
    throw new Error(`Experiment budget is capped at ${so} total runs`);
  const s = a.concurrency ?? 1;
  if (!Number.isInteger(s) || s < 1 || s > 2)
    throw new Error("Experiment concurrency must be an integer from 1 to 2");
  if (a.apply_best !== void 0 && typeof a.apply_best != "boolean")
    throw new Error("Experiment apply_best must be a boolean");
  if (a.search !== void 0 && !Td(a.search))
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
      const y = CS(d);
      if (y) throw new Error(`Invalid operation ${f} in variant '${c.label}': ${y}`);
    });
  }
  if (a.search && (a.search.totalVariantCount !== a.variants.length || a.search.totalExecutionCount !== a.variants.length * r || a.search.assignments.some((c) => !l.includes(c.variantId))))
    throw new Error("Experiment search metadata does not match the compiled variants or run count");
  return { repetitions: r, concurrency: s };
}
function DS(a) {
  const { repetitions: r } = jy(a);
  return a.variants.length * r;
}
async function zS(a, r, s, l = () => !1, c = () => {
}) {
  const { repetitions: d, concurrency: f } = jy(r), y = (/* @__PURE__ */ new Date()).toISOString(), m = ps(a.graph.getGraph()), g = ag(m), v = a.graph.getNodeDefinitions(), b = r.variants.map((Y, X) => {
    var ee;
    const ie = {
      id: ((ee = Y.id) == null ? void 0 : ee.trim()) || `variant-${X + 1}`,
      label: Y.label.trim(),
      operations: Y.operations
    }, fe = rg(m, ie.operations, v);
    return {
      input: ie,
      graph: fe.graph,
      preparationErrors: fe.results.filter((pe) => !pe.ok).map((pe) => pe.error ?? "operation failed"),
      validationErrors: []
    };
  });
  await lg(b, 2, async (Y) => {
    Y.preparationErrors.length === 0 && (Y.validationErrors = await xS(a, Y.graph, s));
  });
  const _ = b.filter((Y) => Y.preparationErrors.length === 0 && Y.validationErrors.length === 0);
  let A = "";
  _.length > 0 && (A = await _y(a, s));
  const R = [];
  for (let Y = 0; Y < d; Y += 1) {
    const X = Y % 2 === 0 ? _ : [..._].reverse(), ie = await lg(X, f, async (fe) => {
      try {
        return {
          variantId: fe.input.id,
          repetition: Y + 1,
          observation: await jS(fe.graph, A, s)
        };
      } catch (ee) {
        if (ee instanceof DOMException && ee.name === "AbortError") throw ee;
        return ee instanceof Xl ? {
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
    R.push(...ie);
  }
  const E = b.map((Y) => {
    var te;
    const X = R.filter((J) => J.variantId === Y.input.id), ie = X.map((J) => J.observation).filter((J) => !J.error), fe = ie.map((J) => sg(J.metrics, r.objective, J.metricIdentities)).filter((J) => !!J), ee = [
      ...Y.preparationErrors,
      ...Y.validationErrors,
      ...X.flatMap((J) => J.observation.error ? [J.observation.error] : [])
    ], pe = new Set(fe.map((J) => J.key)), w = ie.length === d && fe.length === d && pe.size === 1;
    Y.preparationErrors.length === 0 && Y.validationErrors.length === 0 && ie.length !== d && ee.push(`Only ${ie.length}/${d} repetitions completed successfully.`), ie.length > 0 && fe.length !== ie.length && ee.push(
      `Objective metric "${r.objective.metric}" was missing in ${ie.length - fe.length}/${ie.length} successful repetitions.`
    ), pe.size > 1 && ee.push(`Objective metric resolved to inconsistent keys across repetitions: ${[...pe].join(", ")}.`);
    const K = fe.map((J) => J.value), M = w ? gd(K) : void 0;
    return {
      id: Y.input.id,
      label: Y.input.label,
      status: Y.preparationErrors.length > 0 || Y.validationErrors.length > 0 ? "invalid" : w ? "completed" : "failed",
      metricKey: pe.size === 1 ? (te = fe[0]) == null ? void 0 : te.key : void 0,
      metricValues: K,
      mean: w ? lo(K) : void 0,
      stddev: w ? bS(K) : void 0,
      confidenceInterval95: M ? {
        level: 0.95,
        lower: M.lower,
        upper: M.upper
      } : void 0,
      runtimeMs: lo(X.map((J) => J.observation.durationMs)) ?? 0,
      observedMetrics: wS(X.map((J) => J.observation)),
      runs: X.map(({ repetition: J, observation: x }) => {
        const U = sg(
          x.metrics,
          r.objective,
          x.metricIdentities
        );
        return {
          repetition: J,
          status: x.error ? "failed" : "completed",
          durationMs: x.durationMs,
          metricKey: U == null ? void 0 : U.key,
          metricValue: U == null ? void 0 : U.value,
          metricSource: U ? x.metricSources[U.observedKey] : void 0,
          observedMetrics: x.metrics,
          observedMetricIdentities: x.metricIdentities,
          observedMetricSources: x.metricSources,
          ...x.error ? { error: x.error } : {}
        };
      }),
      operationSummary: ES(Y.input.operations),
      errors: ee
    };
  }), B = b.filter((Y) => Y.input.operations.length === 0);
  if (B.length === 1) {
    const Y = E.find((X) => X.id === B[0].input.id);
    if ((Y == null ? void 0 : Y.status) === "completed")
      for (const X of E) {
        if (X.id === Y.id || X.status !== "completed") continue;
        const ie = ls(
          X.metricValues,
          Y.metricValues,
          r.objective.direction
        );
        ie && (X.baselineComparison = {
          baselineId: Y.id,
          meanDelta: ie.rawDelta,
          objectiveImprovement: ie.improvement,
          hedgesG: ie.hedgesG
        });
      }
  }
  if (new Set(
    E.filter((Y) => Y.status === "completed" && Y.metricKey).map((Y) => nd(Y.metricKey))
  ).size > 1) {
    const Y = E.filter((X) => X.status === "completed" && X.metricKey).map((X) => `${X.label}: ${X.metricKey}`).join(", ");
    for (const X of E)
      X.status === "completed" && (X.status = "failed", X.metricValues = [], X.mean = void 0, X.stddev = void 0, X.confidenceInterval95 = void 0, X.baselineComparison = void 0, X.errors.push(`Candidates resolved different objective metrics (${Y}); cross-candidate ranking was refused.`));
  }
  const O = E.filter((Y) => Y.status === "completed" && Y.mean !== void 0).sort((Y, X) => (r.objective.direction === "maximize" ? X.mean - Y.mean : Y.mean - X.mean) || Y.id.localeCompare(X.id)), I = O[0], P = I ? Math.max(1, Math.abs(I.mean)) * Number.EPSILON * 8 : 0, Q = I ? O.filter((Y) => Math.abs(Y.mean - I.mean) <= P) : [], ae = Q.length === 1 ? I : void 0, H = {
    id: ms("experiment"),
    createdAt: y,
    hypothesis: r.hypothesis.trim(),
    objective: r.objective,
    repetitions: d,
    status: O.length === 0 ? "failed" : E.every((Y) => Y.status === "completed") ? "completed" : "partial",
    variants: E,
    baselineVariantId: B.length === 1 ? B[0].input.id : void 0,
    search: r.search ? ps(r.search) : void 0,
    winnerId: ae == null ? void 0 : ae.id,
    winnerLabel: ae == null ? void 0 : ae.label,
    insights: TS({ ...r, repetitions: d }, E, ae, Q)
  };
  if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  if (r.apply_best && ae) {
    const Y = b.find((fe) => fe.input.id === ae.id).input, X = l(), ie = ag(a.graph.getGraph()) !== g;
    if (c(), X || ie)
      H.applyConflict = "The live graph changed while experiments were running; winner was not applied.";
    else if (Y.operations.some((fe) => fe.op !== "set_params"))
      H.applyConflict = "Automatic promotion supports parameter-only winners; this structural winner remains a proposal for review.";
    else if (Y.operations.length > 0) {
      if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
      const fe = rg(m, Y.operations, v);
      if (fe.results.some((ee) => !ee.ok))
        H.applyConflict = `Winner promotion failed parameter preflight: ${fe.results.filter((ee) => !ee.ok).map((ee) => ee.error).join("; ")}`;
      else {
        try {
          H.applyResult = a.graph.applyOperations(Y.operations), H.appliedOperations = Y.operations, H.applyResult.results.every((ee) => ee.ok) ? H.appliedVariantId = ae.id : H.applyConflict = "Winner promotion was only partially applied; the canvas may contain a partial parameter update. Inspect operation errors.";
        } catch (ee) {
          H.applyConflict = `Winner promotion threw unexpectedly; the canvas may contain a partial parameter update: ${String(ee)}`;
        }
        H.applyConflict && a.ui.toast(H.applyConflict, "error");
      }
    } else
      H.appliedVariantId = ae.id;
  }
  if (s != null && s.aborted) throw new DOMException("Experiment cancelled", "AbortError");
  const oe = (/* @__PURE__ */ new Date()).toISOString();
  try {
    const Y = await W1({
      session: H,
      request: r,
      baseline: m,
      definitions: v,
      pluginId: a.pluginId || I0,
      pluginVersion: k0,
      codefyuiApiVersion: a.apiVersion,
      completedAt: oe,
      provenanceFacts: [
        {
          key: "codefyui.api_version",
          status: "observed",
          source: "CodefyUIPluginAPI",
          collectedAt: oe,
          value: a.apiVersion
        },
        {
          key: "experiment.coordinator",
          status: "observed",
          source: "Graph Copilot browser runtime",
          collectedAt: oe,
          value: "browser-local"
        },
        {
          key: "experiment.runner_seed_schedule",
          status: "unavailable",
          source: "Graph Copilot does not assign graph-node RNG seeds"
        }
      ]
    }), X = await by(a, Y);
    if (X.cleanupFailures.length > 0) {
      const ie = `Portable study was saved, but ${X.cleanupFailures.length} unreferenced old blob(s) could not be cleaned up.`;
      H.insights.warnings.push(ie);
      try {
        a.ui.toast(ie, "warning");
      } catch {
      }
    }
  } catch (Y) {
    const X = `Experiment completed, but its portable study bundle could not be captured or saved: ${yS(Y)}`;
    H.insights.warnings.push(X);
    try {
      a.ui.toast(X, "warning");
    } catch {
    }
  }
  let ue = og(a, r, H, m, v);
  try {
    await Ay(a, ue);
  } catch (Y) {
    const X = `Experiment completed, but its local history could not be saved: ${String(Y)}`;
    H.insights.warnings.push(X);
    try {
      a.ui.toast(X, "warning");
    } catch {
    }
    ue = og(a, r, H, m, v);
  }
  return ue;
}
async function RS(a, r, s) {
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
    return await zS(
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
const ad = 1, LS = "mulberry32-v1", cg = 4, ug = 32, Bu = 8, dg = 16, US = /* @__PURE__ */ new Set([
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
]), BS = /* @__PURE__ */ new Set(["metric", "direction"]), VS = /* @__PURE__ */ new Set(["node_id", "param", "values"]), HS = /* @__PURE__ */ new Set(["int", "float", "bool", "select"]), GS = "Planner-only seed: it deterministically selects parameter assignments and does not seed graph nodes or make graph executions reproducible.";
function id(a, r) {
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new Error(`${r} must be an object`);
  return a;
}
function rd(a, r, s) {
  const l = Object.keys(a).filter((c) => !r.has(c));
  if (l.length > 0)
    throw new Error(`${s} contains unknown field(s): ${l.join(", ")}`);
}
function co(a, r) {
  if (typeof a != "string" || !a.trim())
    throw new Error(`${r} must be a non-empty string`);
  return a.trim();
}
function fg(a, r, s) {
  if (a === void 0) return r;
  if (typeof a != "boolean") throw new Error(`${s} must be a boolean`);
  return a;
}
function sd(a, r, s, l, c) {
  const d = a === void 0 ? r : a;
  if (!Number.isInteger(d) || d < s || d > l)
    throw new Error(`${c} must be an integer from ${s} to ${l}`);
  return d;
}
function hs(a) {
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
function qS(a, r, s) {
  const l = a.nodes.filter((d) => d.id === r);
  if (l.length === 0) throw new Error(`${s} references missing node '${r}'`);
  if (l.length > 1) throw new Error(`${s} references ambiguous duplicate node id '${r}'`);
  const c = l[0];
  if (!c.type || c.type === "note")
    throw new Error(`${s} node '${r}' has no optimizable node type`);
  return c;
}
function IS(a, r, s) {
  const l = a.filter((c) => c.node_name === r);
  if (l.length === 0) throw new Error(`${s} has no definition for node type '${r}'`);
  if (l.length > 1) throw new Error(`${s} found duplicate definitions for node type '${r}'`);
  return l[0];
}
function kS(a, r, s, l) {
  var O;
  const c = `optimizer.bindings[${r}]`, d = id(a, c);
  rd(d, VS, c);
  const f = co(d.node_id, `${c}.node_id`), y = co(d.param, `${c}.param`), m = qS(s, f, c), g = IS(l, m.type, c), v = g.params.filter((I) => I.name === y);
  if (v.length === 0)
    throw new Error(`${c} references unknown parameter '${y}' on '${m.type}'`);
  if (v.length > 1)
    throw new Error(`${c} references ambiguous duplicate parameter '${y}' on '${m.type}'`);
  const b = v[0];
  if (!HS.has(b.param_type))
    throw new Error(
      `${c} parameter '${f}.${y}' has unsupported type '${String(b.param_type)}'; only int, float, bool, and select are allowed`
    );
  if (Ra(y))
    throw new Error(
      `${c} parameter '${f}.${y}' has a credential-shaped name and cannot be optimized; this is refused even when the node schema declares an otherwise supported parameter type`
    );
  if (!Array.isArray(d.values) || d.values.length === 0)
    throw new Error(`${c}.values must be a non-empty explicit domain`);
  if (d.values.length > ug)
    throw new Error(`${c}.values supports at most ${ug} values`);
  const _ = d.values.map((I, P) => pg(b, I, `${c}.values[${P}]`)), A = _.map(hs);
  if (new Set(A).size !== A.length)
    throw new Error(`${c}.values must contain unique scalar values`);
  const R = (O = m.data) == null ? void 0 : O.params, B = !!R && Object.prototype.hasOwnProperty.call(R, y) ? R[y] : b.default, $ = pg(b, B, `${c} baseline value`);
  return {
    node: m,
    definition: g,
    parameter: b,
    nodeId: f,
    paramName: y,
    baselineValue: $,
    domain: _
  };
}
function KS(a, r) {
  const s = new Array(a.length);
  let l = r;
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c].domain;
    s[c] = d[l % d.length], l = Math.floor(l / d.length);
  }
  return s;
}
function YS(a) {
  let r = 0;
  for (const s of a) {
    const l = hs(s.baselineValue), c = s.domain.findIndex((d) => hs(d) === l);
    if (c < 0) return;
    r = r * s.domain.length + c;
  }
  return r;
}
function XS(a) {
  let r = a >>> 0;
  return () => {
    r = r + 1831565813 >>> 0;
    let s = r;
    return s = Math.imul(s ^ s >>> 15, s | 1) >>> 0, s ^= s + Math.imul(s ^ s >>> 7, s | 61), (s ^ s >>> 14) >>> 0;
  };
}
function QS(a, r, s) {
  const l = XS(s), c = /* @__PURE__ */ new Map(), d = [];
  for (let f = 0; f < r; f += 1) {
    const y = a - f, m = l() % y, g = c.get(m) ?? m, v = y - 1, b = c.get(v) ?? v;
    m !== v ? c.set(m, b) : c.delete(m), c.delete(v), d.push(g);
  }
  return d;
}
function JS(a, r) {
  const s = [], l = /* @__PURE__ */ new Map();
  return a.forEach((c, d) => {
    l.has(c.nodeId) || (l.set(c.nodeId, []), s.push(c.nodeId)), l.get(c.nodeId).push([c.paramName, r[d]]);
  }), s.map((c) => ({
    op: "set_params",
    node_id: c,
    params: Object.fromEntries(l.get(c))
  }));
}
function ZS(a, r) {
  return r.every((s, l) => hs(s) === hs(a[l].baselineValue));
}
function FS(a) {
  const r = id(a, "optimizer");
  if (rd(r, US, "optimizer"), r.version !== void 0 && r.version !== ad)
    throw new Error(`optimizer.version must be ${ad}`);
  if (r.strategy !== "grid" && r.strategy !== "seeded_random")
    throw new Error("optimizer.strategy must be grid or seeded_random");
  const s = co(r.hypothesis, "optimizer.hypothesis"), l = id(r.objective, "optimizer.objective");
  rd(l, BS, "optimizer.objective");
  const c = co(l.metric, "optimizer.objective.metric");
  if (l.direction !== "maximize" && l.direction !== "minimize")
    throw new Error("optimizer.objective.direction must be maximize or minimize");
  return {
    raw: r,
    strategy: r.strategy,
    hypothesis: s,
    objective: { metric: c, direction: l.direction },
    repetitions: sd(r.repetitions, 1, 1, 5, "optimizer.repetitions"),
    concurrency: sd(r.concurrency, 1, 1, 2, "optimizer.concurrency"),
    includeBaseline: fg(r.include_baseline, !0, "optimizer.include_baseline"),
    applyBest: fg(r.apply_best, !1, "optimizer.apply_best")
  };
}
function WS(a, r, s) {
  const l = FS(a);
  if (!Array.isArray(l.raw.bindings) || l.raw.bindings.length < 1 || l.raw.bindings.length > cg)
    throw new Error(`optimizer.bindings must contain 1 to ${cg} bindings`);
  if (!r || !Array.isArray(r.nodes) || !Array.isArray(r.edges))
    throw new Error("current graph must contain nodes and edges arrays");
  if (!Array.isArray(s)) throw new Error("node definitions must be an array");
  const c = l.raw.bindings.map((Q, ae) => kS(Q, ae, r, s)), d = c.map((Q) => `${Q.nodeId}\0${Q.paramName}`);
  if (new Set(d).size !== d.length)
    throw new Error("optimizer.bindings must not repeat the same node parameter");
  const f = c.reduce((Q, ae) => Q * ae.domain.length, 1), y = YS(c), m = Bu - (l.includeBaseline ? 1 : 0);
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
    g = Array.from({ length: f }, (Q, ae) => ae).filter((Q) => Q !== y);
  } else {
    const Q = sd(
      l.raw.candidate_count,
      Number.NaN,
      1,
      m,
      "optimizer.candidate_count"
    );
    if (!Number.isInteger(l.raw.seed) || l.raw.seed < 0 || l.raw.seed > 4294967295)
      throw new Error("optimizer.seed is required for seeded_random and must be a uint32 integer");
    if (v = l.raw.seed, Q > b)
      throw new Error(
        `seeded_random requested ${Q} unique changed assignments, but only ${b} are available`
      );
    g = QS(b, Q, v).map((H) => y !== void 0 && H >= y ? H + 1 : H);
  }
  const _ = g.map((Q) => ({
    domainIndex: Q,
    assignment: KS(c, Q)
  })).filter(({ assignment: Q }) => !ZS(c, Q));
  if (_.length === 0)
    throw new Error("optimizer search space contains no assignment different from the current graph baseline");
  const A = l.includeBaseline ? [{ id: "baseline", label: "Baseline", operations: [] }] : [], R = l.strategy === "grid" ? "grid" : "random", E = _.map(({ assignment: Q }, ae) => ({
    id: `optimizer-${R}-${String(ae + 1).padStart(3, "0")}`,
    label: `${l.strategy === "grid" ? "Grid" : "Random"} ${ae + 1}: ${c.map((H, oe) => `${H.nodeId}.${H.paramName}=${JSON.stringify(Q[oe])}`).join(", ")}`,
    operations: JS(c, Q)
  })), B = [...A, ...E];
  if (B.length > Bu)
    throw new Error(`optimizer compiled ${B.length} variants; maximum is ${Bu}`);
  const $ = B.length * l.repetitions;
  if ($ > dg)
    throw new Error(
      `optimizer compiled ${B.length} variants x ${l.repetitions} repetitions = ${$} executions; maximum is ${dg}`
    );
  const O = _.map(
    ({ domainIndex: Q, assignment: ae }, H) => ({
      variantId: E[H].id,
      domainIndex: Q,
      values: c.map((oe, ue) => ({
        nodeId: oe.nodeId,
        param: oe.paramName,
        value: ae[ue]
      }))
    })
  ), I = {
    schemaVersion: ad,
    strategy: l.strategy,
    prngVersion: l.strategy === "seeded_random" ? LS : void 0,
    plannerSeed: v,
    seedDescription: GS,
    includesBaseline: l.includeBaseline,
    totalDomainAssignments: f,
    baselineAssignmentExcluded: y !== void 0,
    generatedCandidateCount: E.length,
    totalVariantCount: B.length,
    totalExecutionCount: $,
    bindings: c.map((Q) => ({
      nodeId: Q.nodeId,
      nodeType: Q.node.type,
      param: Q.paramName,
      paramType: Q.parameter.param_type,
      baselineValue: Q.baselineValue,
      domain: [...Q.domain]
    })),
    assignments: O
  };
  return {
    request: {
      hypothesis: l.hypothesis,
      objective: l.objective,
      variants: B,
      repetitions: l.repetitions,
      concurrency: l.concurrency,
      apply_best: l.applyBest,
      search: I
    },
    metadata: I
  };
}
const PS = 360, e_ = 720, t_ = 5e3, mg = 60;
function n_(a) {
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
function a_(a) {
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
function Vu(a) {
  const r = Object.keys(a);
  if (r.length <= mg) return a;
  const s = {};
  for (const l of r.slice(0, mg)) s[l] = a[l];
  return s;
}
const i_ = /* @__PURE__ */ new Set([
  "completed",
  "cached",
  "error",
  "interrupted"
]);
async function r_(a, r) {
  const { signal: s, timeoutMs: l, onProgress: c } = r, d = await _y(a, s), f = $d(a.graph.getGraph()), y = a_(f), m = f.nodes.length, g = Date.now();
  return new Promise((v) => {
    const b = new WebSocket(Ey(d)), _ = {}, A = {}, R = {}, E = {}, B = /* @__PURE__ */ new Set(), $ = [];
    let O, I = !1, P = !1, Q;
    const ae = (X, ie) => {
      if (I) return;
      I = !0, window.clearTimeout(Y), Q !== void 0 && window.clearTimeout(Q), s == null || s.removeEventListener("abort", ue), (b.readyState === WebSocket.OPEN || b.readyState === WebSocket.CONNECTING) && b.close();
      const fe = $.join(`
`).slice(-1500);
      v({
        status: X,
        durationMs: Date.now() - g,
        runId: O,
        ...ie ? { error: oo(ie, d) } : {},
        nodeErrors: E,
        completedNodes: B.size,
        totalNodes: m,
        outputs: Vu(_),
        finalProgress: Vu(A),
        metrics: Vu(R),
        textTail: fe
      });
    }, H = (X) => {
      if (!I && !P) {
        P = !0, c == null || c({
          phase: "cancelling",
          elapsedMs: Date.now() - g,
          completedNodes: B.size,
          totalNodes: m
        });
        try {
          b.readyState === WebSocket.OPEN && b.send(JSON.stringify(
            O ? { action: "cancel", run_id: O } : { action: "cancel" }
          ));
        } catch {
        }
        Q = window.setTimeout(
          () => ae(X, X === "timeout" ? `Run timed out after ${Math.round(l / 6e4)} minutes and was cancelled.` : void 0),
          t_
        ), oe = X;
      }
    };
    let oe = "cancelled";
    const ue = () => H("cancelled"), Y = window.setTimeout(() => H("timeout"), l);
    if (s == null || s.addEventListener("abort", ue, { once: !0 }), s != null && s.aborted) {
      ae("cancelled");
      return;
    }
    c == null || c({
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
    }, b.onmessage = (X) => {
      let ie;
      try {
        ie = JSON.parse(String(X.data));
      } catch {
        return;
      }
      const fe = String(ie.type ?? "");
      if (typeof ie.run_id == "string" && ie.run_id && (O = ie.run_id), ie.rejected === !0) {
        ae("error", String(ie.error ?? "The host rejected the run request."));
        return;
      }
      if (fe === "node_status") {
        const ee = String(ie.node_id ?? ""), pe = String(ie.status ?? ""), w = y(ee), K = Sy(ie);
        i_.has(pe) && B.add(ee), pe === "error" && (E[w] = oo(
          String(ie.error ?? "node failed"),
          d
        ));
        for (const [M, te] of Object.entries(K.scalars))
          _[`${w}.${M}`] = te;
        for (const [M, te] of Object.entries(K.strings))
          _[`${w}.${M}`] = te;
        for (const [M, te] of Object.entries(K.modelParams))
          _[`${w}.${M}.params`] = te;
        for (const M of K.texts) $.push(M);
        if (K.progress)
          for (const [M, te] of Object.entries(K.progress)) {
            const J = ro(te);
            J !== void 0 ? A[`${w}.${M}`] = J : typeof te == "string" && te.length <= 80 && (A[`${w}.${M}`] = te);
          }
        c == null || c({
          phase: "running",
          nodeType: w,
          nodeStatus: pe,
          ...K.progress ? { progress: K.progress } : {},
          elapsedMs: Date.now() - g,
          completedNodes: B.size,
          totalNodes: m
        });
      } else if (fe === "metric") {
        const ee = Array.isArray(ie.points) ? ie.points : [];
        for (const pe of ee) {
          if (!pe || typeof pe != "object") continue;
          const w = pe, K = typeof w.name == "string" ? w.name : "", M = ro(w.value);
          K && M !== void 0 && (R[K] = M);
        }
      } else fe === "execution_complete" ? ae("complete") : fe === "execution_stopped" ? ae(oe, P ? void 0 : `Run stopped by the host (${String(ie.reason ?? "stopped")}).`) : (fe === "execution_error" || fe === "error") && ae("error", String(ie.error ?? fe));
    }, b.onerror = () => ae("error", "Execution WebSocket failed."), b.onclose = () => {
      I || ae(
        P ? oe : "error",
        P ? void 0 : "Execution WebSocket closed before the run completed."
      );
    };
  });
}
const hg = 16, gg = 2, s_ = [
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
function uo(a) {
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
function l_(a) {
  if (typeof a == "string") return JSON.stringify(a);
  const r = JSON.stringify(a);
  return r === void 0 ? String(a) : r.length > 180 ? `${r.slice(0, 177)}...` : r;
}
function vg(a) {
  if (!a) return "";
  const r = Object.entries(a).map(([s, l]) => `${s}=${l_(l)}`);
  return r.length > 0 ? r.join(", ") : "no parameters";
}
function o_(a) {
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
function Hu(a, r) {
  const s = a.role === "user" && a.attachments && a.attachments.length > 0 ? Ig(a.content, a.attachments, r) : a.content, l = { role: a.role, content: s };
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
function c_(a, r, s, l, c) {
  const f = { role: "system", content: q0(
    a.graph.getNodeDefinitions(),
    a.graph.getGraph()
  ) }, y = r.slice(-20), m = r.flatMap((_) => _.tool_calls ?? []), g = new Map(m.map((_) => [_.id, _])), v = y.map((_) => {
    if (_.role === "user") return Hu(_, c);
    if (_.role === "tool") {
      const A = _.tool_call_id ? g.get(_.tool_call_id) : void 0, R = fo(
        A ?? { id: _.tool_call_id ?? "legacy", name: "legacy_tool", arguments: {} },
        _.content,
        a
      );
      return Hu({ ..._, content: R }, c);
    }
    return Hu({
      ..._,
      content: Zu(_.content, m, a),
      ..._.tool_calls ? { tool_calls: Qg(_.tool_calls, a) } : {}
    }, c);
  }), b = {
    role: "user",
    content: Ig(s, l, c)
  };
  return [f, ...v, b];
}
function wy(a, r, s = s_, l = 8192) {
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
  const y = Zl(a);
  return y && (f.reasoning_effort = y), f;
}
async function ld(a) {
  const r = (f) => {
    const y = fo(
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
async function u_(a) {
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
    l = uo(a);
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
    d = uo(a);
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
async function d_(a, r, s, l, c) {
  const f = [
    { role: "system", content: `You are a focused research sub-agent for CodefyUI Graph Copilot. Answer ONE sub-question about building a node graph, using ONLY node types that appear in the index below (exact names; if nothing in the index fits, say so instead of inventing a type). Answer with: (1) the node types needed, (2) a one-line wiring plan (which output feeds which input), (3) any params worth setting. CONCISE — no preamble, no code blocks.

## Node index
` + l },
    { role: "user", content: s }
  ];
  let y = "";
  try {
    await kg(
      a,
      wy(r, f, [], 1024),
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
let Gu = !1;
async function $y(a, r, s, l, c, d, f, y = !1) {
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
    const _ = bg(v, b.results);
    return c.push(_), l.onOpsApplied(_, b), JSON.stringify({
      results: b.results,
      refs: b.refs,
      node_count: b.node_count,
      edge_count: b.edge_count
    });
  }
  if (m === "get_node_schemas") {
    const b = (Array.isArray(g.node_types) ? g.node_types : []).map(($) => String($)), _ = r.graph.getNodeDefinitions(), A = new Map(_.map(($) => [$.node_name, $])), R = b.map(($) => A.get($)).filter(($) => !!$), E = b.filter(($) => !A.has($));
    let B = R.length > 0 ? G0(R) : "(no matching node types)";
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
    const v = typeof g.reason == "string" && g.reason.trim() ? g.reason.trim().slice(0, 300) : "Run the current graph.", b = typeof g.timeout_minutes == "number" && Number.isFinite(g.timeout_minutes) ? Math.round(g.timeout_minutes) : PS, _ = Math.min(Math.max(b, 1), e_);
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
    let R;
    try {
      R = yg(r);
    } catch ($) {
      return JSON.stringify({ error: `Cannot capture the graph before approval: ${String($)}` });
    }
    let E;
    try {
      const $ = r.graph.getGraph();
      E = await l.onRunApproval({
        reason: v,
        nodeCount: $.nodes.filter((O) => O.type !== "note").length,
        edgeCount: $.edges.length,
        nodeTypes: [...new Set(
          $.nodes.map((O) => O.type).filter((O) => !!O && O !== "note")
        )],
        timeoutMinutes: _
      });
    } catch ($) {
      return f != null && f.aborted ? JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." }) : JSON.stringify({ error: `Run approval failed: ${String($)}` });
    }
    if (!E)
      return JSON.stringify({ cancelled: !0, error: "The run was not approved by the user." });
    if (f != null && f.aborted)
      return JSON.stringify({ cancelled: !0, error: "Run cancelled before execution." });
    let B;
    try {
      B = yg(r) !== R;
    } catch ($) {
      return JSON.stringify({ error: `Cannot re-check the graph after approval: ${String($)}` });
    }
    if (B)
      return JSON.stringify({
        cancelled: !0,
        replan: !0,
        error: "The graph changed while the run approval was open. Re-read the graph, re-validate, and propose the run again."
      });
    Gu = !0;
    try {
      const $ = await r_(r, {
        signal: f,
        timeoutMs: _ * 6e4,
        onProgress: l.onRunProgress
      }), { durationMs: O, textTail: I, ...P } = $;
      return JSON.stringify({
        ...P,
        duration_s: Math.round(O / 1e3),
        ...I ? { text_tail: I } : {}
      });
    } catch ($) {
      return JSON.stringify({ error: `Run failed: ${String($)}` });
    } finally {
      Gu = !1;
    }
  }
  if (m === "research") {
    const b = (Array.isArray(g.questions) ? g.questions : []).map((R) => String(R)).filter((R) => R.trim()).slice(0, 4);
    if (b.length === 0)
      return JSON.stringify({ error: 'research requires a non-empty "questions" array' });
    const _ = Jg(r.graph.getNodeDefinitions()), A = await Promise.all(
      b.map((R) => d_(r, s, R, _, f))
    );
    return b.map((R, E) => `[${E + 1}] Q: ${R}
A: ${A[E]}`).join(`

`);
  }
  if (m === "optimize_graph_parameters") {
    let v;
    try {
      v = WS(
        g,
        r.graph.getGraph(),
        r.graph.getNodeDefinitions()
      );
    } catch (_) {
      return JSON.stringify({ error: String(_) });
    }
    const b = await $y(
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
      v = DS(g);
    } catch ($) {
      return JSON.stringify({ error: String($) });
    }
    if (v > d.remaining)
      return JSON.stringify({
        error: `Experiment turn budget exceeded: ${v} requested, ${d.remaining} of ${so} executions remain.`
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
    } catch ($) {
      return JSON.stringify({ error: `Cannot safely watch the graph during approval: ${String($)}` });
    }
    let R;
    try {
      R = uo(r);
    } catch ($) {
      return A(), JSON.stringify({ error: `Cannot capture the graph before approval: ${String($)}` });
    }
    let E;
    try {
      try {
        const $ = y ? {
          ...a,
          arguments: Object.fromEntries(
            Object.entries(a.arguments).filter(([I]) => I !== "search")
          )
        } : a, O = Xg($, r).arguments;
        E = await l.onExperimentApproval({
          hypothesis: O.hypothesis,
          variantCount: b.variants.length,
          repetitions: b.repetitions ?? 1,
          executionCount: v,
          concurrency: b.concurrency ?? 1,
          applyBest: b.apply_best ?? !1,
          variants: O.variants.map((I) => ({
            label: I.label,
            operations: I.operations.map(o_)
          })),
          nodeTypes: [.../* @__PURE__ */ new Set([
            ...r.graph.getGraph().nodes.map((I) => I.type).filter((I) => !!I && I !== "note"),
            ...b.variants.flatMap((I) => I.operations.filter((P) => P.op === "add_node").map((P) => P.node_type))
          ])]
        });
      } catch ($) {
        return f != null && f.aborted ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled before execution." }) : JSON.stringify({ error: `Experiment approval failed: ${String($)}` });
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
      B = uo(r) !== R;
    } catch ($) {
      return JSON.stringify({ error: `Cannot re-check the graph after approval: ${String($)}` });
    }
    if (_ || B)
      return JSON.stringify({
        cancelled: !0,
        replan: !0,
        error: "The active graph changed while execution approval was open. Re-read the graph and propose the study again."
      });
    d.remaining -= v;
    try {
      const $ = await RS(
        r,
        g,
        f
      );
      if ($.applyResult && $.appliedOperations) {
        const Q = `promote experiment winner: ${bg(
          $.appliedOperations,
          $.applyResult.results
        )}`;
        c.push(Q), l.onOpsApplied(Q, $.applyResult);
      }
      const { applyResult: O, appliedOperations: I, ...P } = $;
      return JSON.stringify(P);
    } catch ($) {
      return f != null && f.aborted || $ instanceof DOMException && $.name === "AbortError" ? JSON.stringify({ cancelled: !0, error: "Experiment cancelled." }) : JSON.stringify({ error: String($) });
    }
  }
  return m === "get_current_graph" ? Zg(r.graph.getGraph(), r.graph.getNodeDefinitions()) : JSON.stringify({ error: `Unknown tool: ${m}` });
}
async function f_(a) {
  const { api: r, settings: s, history: l, userText: c, attachments: d, callbacks: f, signal: y } = a, m = [], g = c_(
    r,
    l,
    c,
    d,
    s.provider
  );
  let v = 0, b = 0, _ = !1;
  const A = [], R = { remaining: so }, E = ($) => {
    var O;
    m.push($), (O = f.onTurnAppended) == null || O.call(f, $);
  }, B = ($) => {
    const O = Zu($, A, r);
    O.trim() && E({ role: "assistant", content: O });
  };
  try {
    for (; ; ) {
      let $ = "", O = null, I = null;
      if (await kg(
        r,
        wy(s, g),
        {
          onText(ee) {
            $ += ee, f.onTextDelta(ee);
          },
          onDone(ee) {
            O = ee;
          },
          onError(ee) {
            I = ee;
          }
        },
        y
      ), I !== null) {
        B($), f.onTurnsCommitted(m), f.onError(I), f.onFinished();
        return;
      }
      if (!O) {
        B($), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      const P = O, Q = P.message.tool_calls ?? [], ae = P.message.content || $, H = Zu(
        ae,
        [...A, ...Q],
        r
      );
      if (P.stop_reason === "end" || Q.length === 0) {
        const ee = r.graph.getGraph();
        if (_ && Array.isArray(ee.nodes) && ee.nodes.length > 0) {
          const pe = await u_(r);
          if (!pe.valid) {
            if (b >= gg) {
              H.trim() && E({ role: "assistant", content: H }), E({
                role: "assistant",
                content: `I could not complete a runnable graph after ${gg} correction attempts. The current graph still fails CodefyUI validation:
` + pe.errors.map((w) => `- ${w}`).join(`
`)
              }), f.onTurnsCommitted(m), f.onFinished();
              return;
            }
            b++, H.trim() && E({ role: "assistant", content: H }), g.push({ role: "assistant", content: H }), g.push({
              role: "user",
              content: `The graph is not runnable yet — validate_graph reported these errors. Fix them with graph operations, then validate again before finishing:
` + pe.errors.map((w) => `- ${w}`).join(`
`)
            });
            continue;
          }
        }
        E({ role: "assistant", content: H }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
      v++;
      const oe = Qg(Q, r);
      A.push(...Q);
      const ue = {
        role: "assistant",
        content: H,
        tool_calls: oe
      }, Y = m.length;
      E(ue);
      const X = [], ie = [];
      for (const ee of Q) {
        const pe = X.length, w = Date.now(), K = await $y(
          ee,
          r,
          s,
          f,
          X,
          R,
          y
        );
        X.length > pe && (_ = !0);
        const M = fo(ee, K, r);
        if (E({
          role: "tool",
          content: M,
          tool_call_id: ee.id,
          durationMs: Date.now() - w
        }), ie.push({
          role: "tool",
          content: M,
          tool_call_id: ee.id
        }), y != null && y.aborted) {
          f.onTurnsCommitted(m), f.onFinished();
          return;
        }
      }
      X.length > 0 && (m[Y] = { ...ue, opsSummary: X.join("; ") });
      const fe = {
        role: "assistant",
        content: H,
        tool_calls: Q
      };
      if (g.push(fe), g.push(...ie), v >= hg) {
        E({
          role: "assistant",
          content: `(stopped after ${hg} tool rounds)`
        }), f.onTurnsCommitted(m), f.onFinished();
        return;
      }
    }
  } catch ($) {
    f.onTurnsCommitted(m), f.onError(String($)), f.onFinished();
  }
}
const Sg = 120, p_ = ["loss", "train_loss", "val_loss"];
function m_(a, r) {
  const s = r.progress;
  if (!s) return a;
  for (const l of p_) {
    const c = s[l];
    if (typeof c == "number" && Number.isFinite(c)) {
      const d = [...a, c];
      return d.length > Sg ? d.slice(d.length - Sg) : d;
    }
  }
  return a;
}
function h_(a, r, s) {
  if (a.length < 2) return "";
  const l = Math.min(...a), d = Math.max(...a) - l, f = r / (a.length - 1), y = 1.5, m = s - y * 2;
  return a.map((g, v) => {
    const b = v * f, _ = d === 0 ? s / 2 : y + (1 - (g - l) / d) * m;
    return `${b.toFixed(1)},${_.toFixed(1)}`;
  }).join(" ");
}
function g_({ series: a }) {
  const l = h_(a, 96, 20);
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
function y_(a) {
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
function Ty(a) {
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
function ri(a) {
  try {
    const r = JSON.parse(a);
    return r && typeof r == "object" && !Array.isArray(r) ? r : null;
  } catch {
    return null;
  }
}
function v_(a) {
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
function b_(a, r) {
  const s = ea.apply_graph_operations, l = v_(a);
  if (!r)
    return { label: s, summary: l || "applying operations", status: "running" };
  const c = ri(r.content);
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
function S_(a) {
  const r = ea.validate_graph;
  if (!a) return { label: r, summary: "checking…", status: "running" };
  const s = ri(a.content), l = Array.isArray(s == null ? void 0 : s.errors) ? s.errors.map(String) : [];
  return s != null && s.valid ? { label: r, summary: "graph is runnable", status: "ok" } : {
    label: r,
    summary: l.length > 0 ? tr(l.length, "issue") : "not runnable",
    status: "error",
    detail: l.length > 0 ? l.map((c) => `• ${c}`).join(`
`) : Ut(a.content)
  };
}
function __(a) {
  const r = ea.get_current_graph;
  if (!a) return { label: r, summary: "reading…", status: "running" };
  const s = ri(a.content), l = Array.isArray(s == null ? void 0 : s.nodes) ? s.nodes.length : null, c = Array.isArray(s == null ? void 0 : s.edges) ? s.edges.length : null;
  return {
    label: r,
    summary: l !== null && c !== null ? `${tr(l, "node")} · ${tr(c, "edge")}` : "snapshot",
    status: "ok",
    detail: Ut(a.content)
  };
}
function E_(a, r) {
  const s = ea.get_node_schemas, l = Array.isArray(a.node_types) ? a.node_types.map(String) : [], c = l.length > 0 ? hn(l.join(", "), 90) : "node types";
  return r ? { label: s, summary: c, status: "ok", detail: hn(r.content, 4e3) } : { label: s, summary: c, status: "running" };
}
function x_(a, r) {
  const s = ea.research, l = Array.isArray(a.questions) ? a.questions.length : 0, c = l > 0 ? `${tr(l, "question")} in parallel` : "researching";
  return r ? { label: s, summary: c, status: "ok", detail: hn(r.content, 4e3) } : { label: s, summary: c, status: "running" };
}
function N_(a, r) {
  const s = ea.run_graph_experiments, l = Array.isArray(a.variants) ? a.variants.length : 0, c = typeof a.repetitions == "number" ? a.repetitions : 1, d = l > 0 ? `${l} candidates · ${l * c} runs` : "preparing study";
  if (!r) return { label: s, summary: d, status: "running" };
  const f = ri(r.content);
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
function A_(a, r) {
  const s = ea.optimize_graph_parameters, l = Array.isArray(a.bindings) ? a.bindings.length : 0, c = a.strategy === "seeded_random" ? "seeded random" : "grid", d = typeof a.repetitions == "number" ? a.repetitions : 1, f = a.strategy === "seeded_random" && typeof a.candidate_count == "number" ? a.candidate_count + (a.include_baseline === !1 ? 0 : 1) : void 0, y = f ? `${c} · ${l} params · ${f * d} runs` : `${c} · ${l} ${l === 1 ? "parameter" : "parameters"}`;
  if (!r) return { label: s, summary: y, status: "running" };
  const m = ri(r.content);
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
function j_(a, r) {
  const s = ea.run_graph, l = typeof a.reason == "string" ? hn(a.reason, 90) : "";
  if (!r) return { label: s, summary: l || "executing…", status: "running" };
  const c = ri(r.content);
  if (!c)
    return { label: s, summary: "done", status: "ok", detail: Ut(r.content) };
  if (typeof c.status != "string") {
    const y = typeof c.error == "string" ? c.error : "run not started";
    return { label: s, summary: hn(y, 120), status: "error", detail: Ut(r.content) };
  }
  const d = c.status, f = [d];
  return typeof c.completedNodes == "number" && typeof c.totalNodes == "number" && f.push(`${c.completedNodes}/${c.totalNodes} nodes`), typeof c.duration_s == "number" && f.push(Ty(c.duration_s * 1e3)), {
    label: s,
    summary: f.join(" · "),
    status: d === "complete" ? "ok" : "error",
    detail: Ut(r.content)
  };
}
function w_(a, r) {
  const s = ea[a.name] ?? a.name;
  if (!r) return { label: s, summary: "running…", status: "running" };
  const l = ri(r.content);
  return l && typeof l.error == "string" ? { label: s, summary: hn(l.error, 120), status: "error", detail: Ut(r.content) } : { label: s, summary: "done", status: "ok", detail: Ut(r.content) };
}
function My(a) {
  const { call: r, result: s } = a, l = r.arguments ?? {};
  switch (r.name) {
    case "apply_graph_operations":
      return b_(l, s);
    case "validate_graph":
      return S_(s);
    case "get_current_graph":
      return __(s);
    case "get_node_schemas":
      return E_(l, s);
    case "research":
      return x_(l, s);
    case "run_graph":
      return j_(l, s);
    case "run_graph_experiments":
      return N_(l, s);
    case "optimize_graph_parameters":
      return A_(l, s);
    default:
      return w_(r, s);
  }
}
const $_ = /`([^`\n]+)`/, T_ = /\[([^\]\n]+)\]\(([^)\s]+)\)/, M_ = /\*\*([^\n]+?)\*\*/, O_ = /(^|[\s(])\*([^\s*](?:[^*\n]*?[^\s*])?)\*(?=[\s).,!?:;]|$)/;
function C_(a) {
  let r = null;
  const s = (y) => {
    y && (r === null || y.index < r.index) && (r = y);
  }, l = $_.exec(a);
  l && s({
    index: l.index,
    length: l[0].length,
    node: (y) => /* @__PURE__ */ h.jsx("code", { children: l[1] }, y)
  });
  const c = T_.exec(a);
  if (c) {
    const y = c[2];
    s({
      index: c.index,
      length: c[0].length,
      node: (m) => /^https?:\/\//i.test(y) ? /* @__PURE__ */ h.jsx("a", { href: y, target: "_blank", rel: "noopener noreferrer", children: c[1] }, m) : c[0]
    });
  }
  const d = M_.exec(a);
  d && s({
    index: d.index,
    length: d[0].length,
    node: (y) => /* @__PURE__ */ h.jsx("strong", { children: as(d[1]) }, y)
  });
  const f = O_.exec(a);
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
    const c = C_(s);
    if (!c) {
      r.push(s);
      break;
    }
    const d = s.slice(0, c.index) + (c.prefix ?? "");
    d && r.push(d), r.push(c.node(l++)), s = s.slice(c.index + c.length);
  }
  return r;
}
const D_ = /^(#{1,3})\s+(.*)$/, z_ = /^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/, R_ = /^\s*[-*]\s+(.*)$/, L_ = /^\s*\d+[.)]\s+(.*)$/;
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
    const v = D_.exec(g);
    if (v) {
      y(), m(), l.push(
        /* @__PURE__ */ h.jsx("div", { className: `gcp-md-h${v[1].length}`, children: as(v[2]) }, `${r}-h${f++}`)
      );
      continue;
    }
    if (z_.test(g)) {
      y(), m(), l.push(/* @__PURE__ */ h.jsx("hr", { className: "gcp-md-hr" }, `${r}-r${f++}`));
      continue;
    }
    const b = R_.exec(g), _ = b ? null : L_.exec(g);
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
    m(), c.push(g);
  }
  return y(), m(), l;
}
const qu = /```[^\n]*\n?([\s\S]*?)(?:```|$)/g;
function U_({ text: a }) {
  const r = [];
  let s = 0, l = 0;
  qu.lastIndex = 0;
  for (let c = qu.exec(a); c !== null && (c.index > s && r.push(..._g(a.slice(s, c.index), `s${l++}`)), r.push(
    /* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: c[1] }) }, `c${l++}`)
  ), s = c.index + c[0].length, c[0].length !== 0); c = qu.exec(a))
    ;
  return s < a.length && r.push(..._g(a.slice(s), `s${l++}`)), /* @__PURE__ */ h.jsx(h.Fragment, { children: r });
}
function B_({ kind: a }) {
  return /* @__PURE__ */ h.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }),
    a === "pdf" ? /* @__PURE__ */ h.jsx("path", { d: "M9 18v-4M15 18v-4m0 0h1.5M9 14h.8a1 1 0 0 1 0 2H9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) : /* @__PURE__ */ h.jsx("path", { d: "M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function V_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function H_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M12 5v9", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "19", r: "1.7", fill: "currentColor" })
  ] });
}
function G_({ open: a }) {
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
function q_(a) {
  const r = a.split(/(```[^\n]*\n[\s\S]*?```|```[\s\S]*?```)/g), s = [];
  return r.forEach((l, c) => {
    if (l.startsWith("```")) {
      const d = l.replace(/^```[^\n]*\n?/, "").replace(/```$/, "");
      s.push(/* @__PURE__ */ h.jsx("pre", { children: /* @__PURE__ */ h.jsx("code", { children: d }) }, c));
    } else l && s.push(/* @__PURE__ */ h.jsx("span", { children: l }, c));
  }), s;
}
function I_({ stage: a }) {
  var f;
  const [r, s] = W.useState(!1), l = My(a), c = !!l.detail, d = (f = a.result) == null ? void 0 : f.durationMs;
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
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-status", "aria-hidden": "true", children: l.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-spinner" }) : l.status === "ok" ? /* @__PURE__ */ h.jsx(V_, {}) : /* @__PURE__ */ h.jsx(H_, {}) }),
          /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-label", children: l.label }),
          l.summary && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-summary", children: l.summary }),
          typeof d == "number" && /* @__PURE__ */ h.jsx("span", { className: "gcp-stage-time", children: Ty(d) }),
          c && /* @__PURE__ */ h.jsx(G_, { open: r })
        ]
      }
    ),
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
        /* @__PURE__ */ h.jsx(B_, { kind: v.kind }),
        /* @__PURE__ */ h.jsx("span", { className: "gcp-att-file-name", children: v.name })
      ] }, b)
    ) }),
    g && typeof s == "number" && /* @__PURE__ */ h.jsxs("div", { className: "gcp-step-tag", children: [
      /* @__PURE__ */ h.jsx("span", { className: "gcp-step-tag-dot", "aria-hidden": "true" }),
      "Step ",
      s
    ] }),
    (y || l && r.length === 0) && /* @__PURE__ */ h.jsxs("div", { className: "gcp-bubble", children: [
      d ? q_(f) : /* @__PURE__ */ h.jsx(U_, { text: f }),
      l && /* @__PURE__ */ h.jsx("span", { className: "gcp-caret", "aria-hidden": "true" })
    ] }),
    r.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-stages", children: r.map((v, b) => /* @__PURE__ */ h.jsx(I_, { stage: v }, `${v.call.id}-${b}`)) }),
    !d && a.opsSummary && r.length === 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-ops-chip", children: /* @__PURE__ */ h.jsxs("span", { children: [
      "Applied: ",
      a.opsSummary
    ] }) })
  ] });
}
function k_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L11 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M22 2L15 22L11 13L2 9L22 2Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function K_() {
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
function Y_({ kind: a }) {
  return a === "pdf" ? /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M8.5 13.5h1a1.2 1.2 0 0 1 0 2.4h-1zm0 0v4M14 13.5v4m0-4h1.6m-1.6 2h1.2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }) : /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M14 2v6h6M8 13h8M8 17h6", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function X_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round" }) });
}
function Q_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function J_() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7.5v5.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "16.5", r: "1.2", fill: "currentColor" })
  ] });
}
function Z_() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M13 2L4 14h6l-1 8 9-12h-6l1-8z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Ng() {
  return /* @__PURE__ */ h.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 6L9 17l-5-5", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const F_ = [
  "Build a small CNN image classifier",
  "Explain what my current graph does",
  "Improve my current graph"
];
function W_({
  api: a,
  settings: r,
  codexLoggedIn: s,
  conversation: l,
  onConversationChange: c,
  onSettingsChange: d,
  onOpenSettings: f,
  onOpenHistory: y
}) {
  var ir, ci, sa;
  const [m, g] = W.useState(""), [v, b] = W.useState(!1), [_, A] = W.useState(!1), [R, E] = W.useState(""), [B, $] = W.useState([]), [O, I] = W.useState(0), [P, Q] = W.useState(null), [ae, H] = W.useState(""), [oe, ue] = W.useState([]), [Y, X] = W.useState([]), [ie, fe] = W.useState(!1), [ee, pe] = W.useState(null), [w, K] = W.useState(null), [M, te] = W.useState(null), [J, x] = W.useState([]), U = W.useRef(null), F = W.useRef(!0), re = W.useRef(null), ye = W.useRef(null), Se = W.useRef(null), ce = W.useRef(null), We = W.useRef(0), Ae = S0(r, s), gn = Y.some((G) => G.status === "loading"), ln = Y.filter((G) => G.status === "ready" && G.att).map((G) => G.att), ta = Ae && !v && !gn && (m.trim().length > 0 || ln.length > 0);
  W.useEffect(() => () => {
    var G, ve;
    (G = ce.current) == null || G.call(ce, !1), ce.current = null, (ve = Se.current) == null || ve.abort();
  }, []), W.useEffect(() => {
    if (!v) {
      I(0);
      return;
    }
    const G = Date.now(), ve = window.setInterval(() => {
      I(Math.floor((Date.now() - G) / 1e3));
    }, 1e3);
    return () => window.clearInterval(ve);
  }, [v]);
  const ne = W.useCallback(() => {
    const G = U.current;
    G && (F.current = G.scrollHeight - G.scrollTop - G.clientHeight < 80);
  }, []);
  W.useEffect(() => {
    const G = U.current;
    G && F.current && (G.scrollTop = G.scrollHeight);
  }, [l.messages, B, R, Y.length, v]);
  const he = W.useCallback(() => {
    const G = re.current;
    G && (G.style.height = "auto", G.style.height = Math.min(G.scrollHeight, 110) + "px");
  }, []);
  W.useEffect(() => {
    he();
  }, [m, he]);
  const Ke = W.useCallback(
    (G) => {
      if (!(!Ae || v))
        for (const ve of Array.from(G)) {
          const gt = crypto.randomUUID(), Ua = qg(ve);
          X((Ue) => [
            ...Ue,
            { id: gt, name: ve.name, kind: Ua, size: ve.size, status: "loading" }
          ]), C0(ve).then((Ue) => {
            X(
              (vn) => vn.map((Bt) => Bt.id === gt ? { ...Bt, status: "ready", att: Ue } : Bt)
            );
          }).catch((Ue) => {
            const vn = (Ue == null ? void 0 : Ue.message) ?? String(Ue);
            X(
              (Bt) => Bt.map((Xt) => Xt.id === gt ? { ...Xt, status: "error", error: vn } : Xt)
            );
          });
        }
    },
    [Ae, v]
  ), rt = (G) => {
    X((ve) => ve.filter((gt) => gt.id !== G));
  }, xt = (G) => {
    G.target.files && G.target.files.length > 0 && Ke(G.target.files), G.target.value = "";
  }, _t = (G) => {
    var gt;
    const ve = (gt = G.clipboardData) == null ? void 0 : gt.files;
    ve && ve.length > 0 && (Ke(ve), G.preventDefault());
  }, Tt = (G) => {
    !Ae || v || Array.from(G.dataTransfer.types).includes("Files") && (G.preventDefault(), We.current += 1, fe(!0));
  }, on = (G) => {
    !Ae || v || Array.from(G.dataTransfer.types).includes("Files") && G.preventDefault();
  }, Pe = () => {
    We.current -= 1, We.current <= 0 && (We.current = 0, fe(!1));
  }, si = (G) => {
    We.current = 0, fe(!1), !(!Ae || v) && G.dataTransfer.files && G.dataTransfer.files.length > 0 && (G.preventDefault(), Ke(G.dataTransfer.files));
  }, na = W.useCallback(
    async (G, ve) => {
      var cn;
      const gt = G.trim();
      if (!gt && ve.length === 0 || v || !Ae) return;
      Q(null), H(gt), ue(ve), g(""), X([]), b(!0), E(""), $([]), F.current = !0;
      const Ua = { role: "user", content: gt };
      ve.length > 0 && (Ua.attachments = ve);
      let Ue = { ...l };
      Ue.title || (Ue.title = E0(gt || ((cn = ve[0]) == null ? void 0 : cn.name) || "Attachment")), Ue.provider = r.provider, Ue.model = r.models[r.provider] ?? "";
      const vn = Zl(r);
      vn ? Ue.reasoningEffort = vn : delete Ue.reasoningEffort, Ue.messages = [...Ue.messages, Ua], Ue.updatedAt = Date.now(), c(Ue), zh(a, Ue);
      const Bt = new AbortController();
      Se.current = Bt;
      let Xt = "";
      await f_({
        api: a,
        settings: r,
        history: Ue.messages.slice(0, -1),
        // exclude the user turn we just added
        userText: gt,
        attachments: ve.length > 0 ? ve : void 0,
        callbacks: {
          onTextDelta(je) {
            Xt += je, E(Xt);
          },
          onTurnAppended(je) {
            je.role !== "tool" ? (Xt = "", E("")) : (te(null), x([])), $((Ze) => [...Ze, je]);
          },
          onOpsApplied() {
          },
          onExperimentApproval(je) {
            var Ze;
            return Bt.signal.aborted ? Promise.resolve(!1) : ((Ze = ce.current) == null || Ze.call(ce, !1), new Promise((bn) => {
              ce.current = bn, pe(je);
            }));
          },
          onRunApproval(je) {
            var Ze;
            return Bt.signal.aborted ? Promise.resolve(!1) : ((Ze = ce.current) == null || Ze.call(ce, !1), new Promise((bn) => {
              ce.current = bn, K(je);
            }));
          },
          onRunProgress(je) {
            te(n_(je)), je.phase === "connecting" ? x([]) : x((Ze) => m_(Ze, je));
          },
          onTurnsCommitted(je) {
            E(""), Xt = "", $([]), Ue = { ...Ue, messages: [...Ue.messages, ...je], updatedAt: Date.now() }, c(Ue), zh(a, Ue);
          },
          onError(je) {
            Q(je), E(""), Xt = "";
          },
          onFinished() {
            var je;
            (je = ce.current) == null || je.call(ce, !1), ce.current = null, pe(null), K(null), te(null), x([]), b(!1), Se.current = null;
          }
        },
        signal: Bt.signal
      });
    },
    [a, v, l, c, Ae, r]
  ), Nt = () => na(m, ln), yo = (G) => {
    G.key === "Enter" && !G.shiftKey && (G.preventDefault(), na(m, ln));
  }, Ss = () => {
    var G, ve;
    (G = ce.current) == null || G.call(ce, !1), ce.current = null, pe(null), K(null), (ve = Se.current) == null || ve.abort();
  }, ar = (G) => {
    const ve = ce.current;
    ce.current = null, pe(null), ve == null || ve(G);
  }, La = (G) => {
    const ve = ce.current;
    ce.current = null, K(null), ve == null || ve(G);
  }, vo = () => na(ae, oe), _s = B.length > 0 ? [...l.messages, ...B] : l.messages, li = y_(_s), Es = li.length === 0 && !v, wn = li[li.length - 1], ht = wn == null ? void 0 : wn.stages.find((G) => !G.result), At = v && R === "" && !!!ht && !ee && !w, xs = B.filter(
    (G) => {
      var ve;
      return G.role === "assistant" && (((ve = G.tool_calls) == null ? void 0 : ve.length) ?? 0) > 0;
    }
  ).length, bo = ee || w ? "Waiting for approval" : M || (R !== "" ? "Writing reply" : ht ? My(ht).label : "Thinking"), aa = r.provider, ia = r.models[aa] ?? "", jt = Jl(aa, ia), oi = ((ci = (ir = r.providerCapabilities) == null ? void 0 : ir[aa]) == null ? void 0 : ci.reasoningEffort) === !0, yn = d && oi ? (jt == null ? void 0 : jt.reasoningEfforts) ?? [] : [], Yt = ((sa = r.reasoningEfforts) == null ? void 0 : sa[aa]) ?? "", ra = (G) => {
    A(!1), d == null || d(Bg(r, aa, G));
  }, Ns = Es ? Xu(a).filter((G) => G.id !== l.id).length : 0;
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `gcp-chat${ie ? " gcp-dragging" : ""}`,
      onDragEnter: Tt,
      onDragOver: on,
      onDragLeave: Pe,
      onDrop: si,
      children: [
        /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: "gcp-messages",
            role: "log",
            "aria-live": "polite",
            "aria-label": "Conversation",
            ref: U,
            onScroll: ne,
            children: [
              Es && /* @__PURE__ */ h.jsxs("div", { className: "gcp-welcome", children: [
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-mark", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-title", children: "Build graphs by conversation" }),
                /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-sub", children: "Describe the pipeline you want, ask for parameter changes, or attach an image, PDF, or code file for context." }),
                Ae && /* @__PURE__ */ h.jsx("div", { className: "gcp-welcome-suggestions", "aria-label": "Suggested prompts", children: F_.map((G) => /* @__PURE__ */ h.jsx("button", { className: "gcp-suggestion", onClick: () => na(G, []), children: G }, G)) }),
                Ns > 0 && /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "gcp-welcome-history",
                    onClick: y,
                    "aria-label": "View previous conversations",
                    children: [
                      /* @__PURE__ */ h.jsx(Q_, {}),
                      "Previous conversations (",
                      Ns,
                      ")"
                    ]
                  }
                )
              ] }),
              li.map((G) => /* @__PURE__ */ h.jsx(
                Eg,
                {
                  turn: G.turn,
                  stages: G.stages,
                  step: G.step
                },
                G.key
              )),
              v && R !== "" && /* @__PURE__ */ h.jsx(
                Eg,
                {
                  turn: { role: "assistant", content: "" },
                  streaming: !0,
                  streamingText: R
                }
              ),
              At && /* @__PURE__ */ h.jsxs("div", { className: "gcp-thinking", role: "status", "aria-label": "Waiting for the assistant", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-orb", "aria-hidden": "true", children: "✦" }),
                /* @__PURE__ */ h.jsx("span", { className: "gcp-thinking-text", children: "Thinking" }),
                O >= 3 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-thinking-time", children: [
                  O,
                  "s"
                ] })
              ] }),
              P && !v && /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-row", role: "alert", children: [
                /* @__PURE__ */ h.jsx("span", { className: "gcp-error-icon", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx(J_, {}) }),
                /* @__PURE__ */ h.jsxs("div", { className: "gcp-error-body", children: [
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-title", children: "Request failed" }),
                  /* @__PURE__ */ h.jsx("div", { className: "gcp-error-text", children: P })
                ] }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-retry-btn", onClick: vo, "aria-label": "Retry", children: "Retry" })
              ] })
            ]
          }
        ),
        ie && /* @__PURE__ */ h.jsx("div", { className: "gcp-dropzone", "aria-hidden": "true", children: /* @__PURE__ */ h.jsxs("div", { className: "gcp-dropzone-inner", children: [
          /* @__PURE__ */ h.jsx(xg, {}),
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
              /* @__PURE__ */ h.jsx("div", { className: "gcp-experiment-approval-candidates", "aria-label": "Candidate changes", children: ee.variants.map((G, ve) => /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: G.label }),
                /* @__PURE__ */ h.jsx("span", { children: G.operations.length > 0 ? G.operations.join(" · ") : "baseline — no changes" })
              ] }, `${ve}-${G.label}`)) }),
              /* @__PURE__ */ h.jsxs("div", { className: "gcp-experiment-approval-nodes", children: [
                /* @__PURE__ */ h.jsx("strong", { children: "Nodes that may execute" }),
                /* @__PURE__ */ h.jsx("span", { children: ee.nodeTypes.length > 0 ? ee.nodeTypes.join(", ") : "No typed nodes detected" })
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
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-secondary", onClick: () => La(!1), autoFocus: !0, children: "Cancel" }),
                /* @__PURE__ */ h.jsx("button", { className: "gcp-approval-primary", onClick: () => La(!0), children: "Run graph" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-area", children: [
          Y.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "gcp-attachments", "aria-label": "Attachments", children: Y.map((G) => {
            var ve;
            return /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: `gcp-chip ${G.kind === "image" ? "image" : "file"} ${G.status}`,
                title: G.status === "error" ? G.error : `${G.name} · ${ns(G.size)}`,
                children: [
                  G.kind === "image" && ((ve = G.att) != null && ve.dataUrl) ? /* @__PURE__ */ h.jsx("img", { className: "gcp-chip-thumb", src: G.att.dataUrl, alt: G.name }) : /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-icon", children: /* @__PURE__ */ h.jsx(Y_, { kind: G.kind }) }),
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-chip-body", children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-name", children: G.name }),
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-size", children: G.status === "loading" ? "reading…" : G.status === "error" ? "failed" : ns(G.size) })
                  ] }),
                  G.status === "loading" && /* @__PURE__ */ h.jsx("span", { className: "gcp-chip-spinner", "aria-hidden": "true" }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "gcp-chip-remove",
                      onClick: () => rt(G.id),
                      "aria-label": `Remove ${G.name}`,
                      title: "Remove",
                      children: /* @__PURE__ */ h.jsx(X_, {})
                    }
                  )
                ]
              },
              G.id
            );
          }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-input-row", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: ye,
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
                  var G;
                  return (G = ye.current) == null ? void 0 : G.click();
                },
                disabled: !Ae || v,
                "aria-label": "Attach files",
                title: "Attach image, PDF, or text/code",
                children: /* @__PURE__ */ h.jsx(xg, {})
              }
            ),
            /* @__PURE__ */ h.jsx(
              "textarea",
              {
                ref: re,
                className: "gcp-textarea",
                rows: 1,
                placeholder: "Message Graph Copilot…",
                value: m,
                onChange: (G) => g(G.target.value),
                onKeyDown: yo,
                onPaste: _t,
                disabled: v || !Ae,
                "aria-label": "Message input",
                "aria-disabled": Ae ? void 0 : "true"
              }
            ),
            v ? /* @__PURE__ */ h.jsx("button", { className: "gcp-stop-btn", onClick: Ss, "aria-label": "Stop generation", title: "Stop", children: /* @__PURE__ */ h.jsx(K_, {}) }) : /* @__PURE__ */ h.jsx(
              "button",
              {
                className: "gcp-send-btn",
                onClick: Nt,
                disabled: !ta,
                "aria-label": "Send message",
                title: "Send",
                children: /* @__PURE__ */ h.jsx(k_, {})
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-composer-bar", children: [
            /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-context", children: yn.length > 0 ? /* @__PURE__ */ h.jsxs(
              "div",
              {
                className: "gcp-effort",
                onKeyDown: (G) => {
                  G.key === "Escape" && A(!1);
                },
                children: [
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      className: `gcp-context-chip${_ ? " open" : ""}`,
                      onClick: () => A((G) => !G),
                      "aria-haspopup": "menu",
                      "aria-expanded": _,
                      "aria-label": "Model and reasoning effort",
                      title: "Adjust reasoning effort",
                      children: [
                        /* @__PURE__ */ h.jsx(Z_, {}),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: ia || "model" }),
                        /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-effort", children: Yt || (jt == null ? void 0 : jt.defaultReasoningEffort) || "auto" })
                      ]
                    }
                  ),
                  _ && /* @__PURE__ */ h.jsxs("div", { className: "gcp-effort-menu", role: "menu", "aria-label": "Reasoning effort", children: [
                    /* @__PURE__ */ h.jsx("div", { className: "gcp-effort-menu-title", children: "Reasoning effort" }),
                    yn.map((G) => /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": Yt === G.effort,
                        className: `gcp-effort-item${Yt === G.effort ? " selected" : ""}`,
                        onClick: () => ra(G.effort),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-name", children: G.effort }),
                          G.description && /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-desc", children: G.description }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: Yt === G.effort && /* @__PURE__ */ h.jsx(Ng, {}) })
                        ]
                      },
                      G.effort
                    )),
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        role: "menuitemradio",
                        "aria-checked": Yt === "",
                        className: `gcp-effort-item${Yt === "" ? " selected" : ""}`,
                        onClick: () => ra(""),
                        children: [
                          /* @__PURE__ */ h.jsxs("span", { className: "gcp-effort-item-name", children: [
                            "model default",
                            jt != null && jt.defaultReasoningEffort ? ` (${jt.defaultReasoningEffort})` : ""
                          ] }),
                          /* @__PURE__ */ h.jsx("span", { className: "gcp-effort-item-check", "aria-hidden": "true", children: Yt === "" && /* @__PURE__ */ h.jsx(Ng, {}) })
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
                title: `Provider: ${aa} — open settings`,
                children: /* @__PURE__ */ h.jsx("span", { className: "gcp-context-chip-model", children: ia || "set up model" })
              }
            ) }),
            v ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-runbar", role: "status", "aria-label": "Agent activity", children: [
              /* @__PURE__ */ h.jsx("span", { className: "gcp-runbar-pulse", "aria-hidden": "true" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-phase", children: [
                bo,
                "…"
              ] }),
              J.length >= 2 && /* @__PURE__ */ h.jsx(g_, { series: J }),
              xs > 0 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-step", children: [
                "step ",
                xs
              ] }),
              O >= 1 && /* @__PURE__ */ h.jsxs("span", { className: "gcp-runbar-time", children: [
                O,
                "s"
              ] })
            ] }) : /* @__PURE__ */ h.jsx("div", { className: "gcp-composer-hint", "aria-hidden": "true", children: "Enter ↵ send · Shift+Enter newline" })
          ] }),
          !Ae && !v && /* @__PURE__ */ h.jsxs("div", { className: "gcp-not-ready-overlay", children: [
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
const P_ = "Imported portable-study content passed SHA-256 integrity checking, which detects content changes but does not authenticate its author or evidence source. It is read-only and was not executed in this browser session.";
function gs(a, r) {
  return a < r ? -1 : a > r ? 1 : 0;
}
function eE(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.value]).sort(([r], [s]) => gs(r, s))
  );
}
function tE(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.canonicalKey]).sort(([r], [s]) => gs(r, s))
  );
}
function nE(a) {
  return Object.fromEntries(
    a.map((r) => [r.observedKey, r.source]).sort(([r], [s]) => gs(r, s))
  );
}
function aE(a, r) {
  if (r.metricKey !== void 0)
    return a.metrics.find((s) => s.canonicalKey === r.metricKey);
}
function iE(a, r) {
  const s = aE(a, r), l = a.status === "completed" ? void 0 : a.status === "cancelled" ? `Imported run was cancelled [${a.error.phase}/${a.error.code}]: ${a.error.message}` : `Imported run failed [${a.error.phase}/${a.error.code}]: ${a.error.message}`;
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
    observedMetrics: eE(a.metrics),
    ...a.metrics.length === 0 ? {} : {
      observedMetricIdentities: tE(a.metrics),
      observedMetricSources: nE(a.metrics)
    },
    ...l === void 0 ? {} : { error: l }
  };
}
function rE(a, r) {
  const s = r.filter((l) => l.variantId === a.id).sort((l, c) => l.repetition - c.repetition || gs(l.runKey, c.runKey)).map((l) => iE(l, a));
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
      a.observedMetrics.map(({ key: l, value: c }) => [l, c]).sort(([l], [c]) => gs(l, c))
    ),
    // Always supply an array, including an empty one. Omitting it would make
    // legacy export code synthesize attempts from aggregate metricValues.
    runs: s,
    ...a.operationSummary === void 0 ? {} : { operationSummary: [...a.operationSummary] },
    errors: [...a.errors]
  };
}
function sE(a) {
  return {
    title: a.title,
    evidence: a.evidence,
    nextStep: a.nextStep
  };
}
function lE(a) {
  const r = a.payload.provenance.facts.find((s) => s.key === "optimizer.plan" && s.status === "observed");
  if (!(!r || !Td(r.value)))
    return JSON.parse(JSON.stringify(r.value));
}
function oE(a) {
  const { payload: r } = a, { derived: s, spec: l } = r, c = lE(a);
  return {
    id: r.id,
    createdAt: r.createdAt,
    hypothesis: l.hypothesis,
    objective: { ...l.objective },
    repetitions: l.repetitions,
    status: s.status,
    variants: s.variants.map((d) => rE(d, r.runs)),
    ...c === void 0 ? {} : { search: c },
    ...s.baselineVariantId === void 0 ? {} : { baselineVariantId: s.baselineVariantId },
    ...s.winnerId === void 0 ? {} : { winnerId: s.winnerId },
    ...s.winnerLabel === void 0 ? {} : { winnerLabel: s.winnerLabel },
    ...s.appliedVariantId === void 0 ? {} : { appliedVariantId: s.appliedVariantId },
    ...s.applyConflict === void 0 ? {} : { applyConflict: s.applyConflict },
    insights: {
      summary: [...s.insights.summary],
      warnings: [...s.insights.warnings, P_],
      paperIdeas: s.insights.paperIdeas.map(sE)
    }
  };
}
function Oa(a) {
  return !!a && typeof a == "object" && !Array.isArray(a);
}
function cE(a, r) {
  return Object.prototype.hasOwnProperty.call(a, r);
}
function Oy(a) {
  return Oa(a) && typeof a.$gcpSecretRef == "string";
}
function ys(a, r) {
  if (Oy(a)) {
    const s = a.$gcpSecretRef;
    return cE(r.bindings, s) && typeof r.bindings[s] == "string" ? (r.resolved.add(s), r.bindings[s]) : (r.missing.add(s), "");
  }
  if (Array.isArray(a))
    return a.map((s) => ys(s, r));
  if (Oa(a)) {
    const s = /* @__PURE__ */ Object.create(null);
    for (const [l, c] of Object.entries(a))
      s[l] = ys(c, r);
    return s;
  }
  return a;
}
function od(a, r) {
  return ys(a, r);
}
function uE(a, r) {
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
    presets: a.presets === void 0 ? [] : ys(a.presets, r),
    segmentGroups: a.segmentGroups === void 0 ? [] : ys(a.segmentGroups, r)
  };
}
function Ag(a, r) {
  return a.nodes.some((s) => s.id === r);
}
function Xi(a, r, s) {
  const l = r[s];
  return l !== void 0 && Ag(a, l) ? l : Ag(a, s) ? s : null;
}
function dE(a) {
  return encodeURIComponent(a);
}
function fE(a, r) {
  let s = a, l = 1;
  for (; r.has(s); )
    s = `${a}~${l}`, l += 1;
  return r.add(s), s;
}
function jg(a, r, s, l) {
  return fE(
    `graph-copilot:${dE(a)}:${r}:${s}`,
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
function pE(a, r, s, l, c, d, f) {
  if (!Oa(r) || typeof r.op != "string")
    return Zn(s, "operation must be an object with an op string");
  switch (r.op) {
    case "add_node": {
      const y = Qn(r, "node_type", s);
      if (Jn(y)) return y;
      if (r.ref !== void 0 && typeof r.ref != "string")
        return Zn(s, "ref must be a string when provided");
      if (r.params !== void 0 && !Oa(r.params))
        return Zn(s, "params must be an object when provided");
      if (r.position !== void 0 && (!Oa(r.position) || typeof r.position.x != "number" || !Number.isFinite(r.position.x) || typeof r.position.y != "number" || !Number.isFinite(r.position.y)))
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
      const b = Xi(a, c, y), _ = Xi(a, c, m);
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
        id: jg(l, "edge", s, d),
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
      if (!Oa(r.params))
        return Zn(s, "params must be an object");
      const m = Xi(a, c, y);
      if (m === null)
        return {
          code: "UNKNOWN_NODE",
          operationIndex: s,
          message: `set_params: unknown node '${y}'`
        };
      const g = a.nodes.find((b) => b.id === m), v = Oa(g.data.params) ? g.data.params : {};
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
      const m = Xi(a, c, y);
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
      const g = Xi(a, c, y), v = Xi(a, c, m);
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
function mE(a, r, s = {}) {
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
  }, d = uE(a.payload.spec.baseline, c), f = {}, y = /* @__PURE__ */ new Set([
    ...d.nodes.map((b) => b.id),
    ...d.edges.map((b) => b.id)
  ]);
  for (let b = 0; b < l.operations.length; b += 1) {
    const _ = pE(
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
  return Oy(a) ? !0 : Array.isArray(a) ? a.some(cd) : Oa(a) && Object.values(a).some(cd);
}
function hE(a) {
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
    return Ny(a);
  } catch {
    return [];
  }
}
function gE(a) {
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
function yE(a) {
  return !Number.isFinite(a) || a < 0 ? "—" : a < 1e3 ? `${Math.round(a)} ms` : `${(a / 1e3).toFixed(a < 1e4 ? 1 : 0)} s`;
}
function vE(a) {
  return [...a.variants ?? []].sort((r, s) => r.mean === void 0 ? s.mean === void 0 ? 0 : 1 : s.mean === void 0 ? -1 : a.objective.direction === "maximize" ? s.mean - r.mean : r.mean - s.mean);
}
function Tg(a) {
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
function ku({ status: a }) {
  return /* @__PURE__ */ h.jsx("span", { className: `gcp-lab-badge ${a}`, children: a });
}
function bE() {
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
function SE({ api: a }) {
  var ue, Y, X, ie, fe, ee, pe, w, K;
  const [r, s] = W.useState(() => Iu(a)), [l, c] = W.useState(() => {
    var M;
    return ((M = Iu(a)[0]) == null ? void 0 : M.id) ?? null;
  }), [d, f] = W.useState(null), [y, m] = W.useState(!1), [g, v] = W.useState(null), [b, _] = W.useState(null), [A, R] = W.useState(null), [E, B] = W.useState(!1), $ = W.useRef(null);
  W.useEffect(() => {
    const M = () => {
      const te = Iu(a);
      s(te), c((J) => {
        var x;
        return J && te.some((U) => U.id === J) ? J : ((x = te[0]) == null ? void 0 : x.id) ?? null;
      });
    };
    return window.addEventListener(td, M), () => window.removeEventListener(td, M);
  }, [a]);
  const O = r.find((M) => M.id === l) ?? r[0], I = O && (d == null ? void 0 : d.payload.id) === O.id ? d : null, P = W.useMemo(() => O ? vE(O) : [], [O]);
  W.useEffect(() => {
    let M = !0;
    return f(null), m(!1), O ? pS(a).entries.some((J) => J.id === O.id) ? (m(!0), eg(a, O.id).then((J) => {
      M && f(J);
    }).catch((J) => {
      M && v(`Portable study could not be verified: ${String(J)}`);
    }).finally(() => {
      M && m(!1);
    }), () => {
      M = !1;
    }) : () => {
      M = !1;
    } : () => {
      M = !1;
    };
  }, [a, O == null ? void 0 : O.id]);
  const Q = async (M) => {
    var J;
    const te = (J = M.currentTarget.files) == null ? void 0 : J[0];
    if (M.currentTarget.value = "", !!te) {
      R(null), v(null);
      try {
        if (typeof te.size == "number" && te.size > to)
          throw new Error(`Portable study exceeds the ${to} byte import limit`);
        const x = await fS(await te.text());
        _(x);
      } catch (x) {
        _(null), R(`Import rejected before storage: ${String(x)}`);
      }
    }
  }, ae = async () => {
    if (!b) return;
    B(!0), R(null);
    let M = !1;
    try {
      if (Ny(a).some((x) => x.id === b.payload.id))
        throw new Error(
          `A local Experiment Lab report already uses study id '${b.payload.id}'; import was refused to avoid overwriting local evidence.`
        );
      const te = oE(b), J = await by(a, b);
      M = !0, await Ay(a, te, { rejectIfExists: !0 }), c(te.id), f(b), _(null), v(J.status === "unchanged" ? "This content-integrity-checked portable study was already stored; its read-only report was added." : "Portable study imported for read-only review. SHA-256 checks content changes only; it does not authenticate authorship. No graph was executed or applied.");
    } catch (te) {
      R(M ? `The content-integrity-checked bundle was stored, but its read-only Lab report could not be saved. Retry the import: ${String(te)}` : `Portable study was not imported: ${String(te)}`);
    } finally {
      B(!1);
    }
  }, H = async () => {
    if (O)
      try {
        const M = I ?? await eg(a, O.id);
        f(M), Il(
          `${Zr(O.id)}-portable-study.json`,
          "application/json",
          await _d(M)
        ), v("Portable study content integrity checked before export; SHA-256 does not authenticate authorship.");
      } catch (M) {
        v(`Portable study export failed: ${String(M)}`);
      }
  }, oe = (M, te) => {
    var J;
    if (I)
      try {
        const x = mE(I, M);
        if (x.status === "error" || !x.graph)
          throw new Error(((J = x.errors[0]) == null ? void 0 : J.message) ?? "Candidate could not be reconstructed");
        Il(
          `${Zr(I.payload.id)}-${Zr(te)}-graph.json`,
          "application/json",
          hE(x.graph)
        );
        const U = x.status === "blocked" ? `Candidate graph downloaded with ${x.missingSecretRefs.length} unresolved secret value(s) left blank.` : "Candidate graph materialized from the content-integrity-checked portable operation record and downloaded.";
        v(x.fidelityWarnings.length === 0 ? U : `${U} Fidelity warning: ${x.fidelityWarnings.join(" ")}`);
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
          return (M = $.current) == null ? void 0 : M.click();
        }, children: "Import portable study" }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            ref: $,
            type: "file",
            accept: "application/json,.json",
            "aria-label": "Choose portable study file",
            hidden: !0,
            onChange: (M) => {
              Q(M);
            }
          }
        )
      ] })
    ] }),
    A && !b && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message error", role: "alert", children: A }),
    g && /* @__PURE__ */ h.jsx("p", { className: "gcp-lab-portable-message", role: "status", children: g }),
    r.length === 0 || !O ? /* @__PURE__ */ h.jsx(bE, {}) : /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-layout", children: [
      /* @__PURE__ */ h.jsx("aside", { className: "gcp-lab-studies", "aria-label": "Experiment studies", children: r.map((M) => {
        var te, J, x;
        return /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: `gcp-study-card${M.id === O.id ? " active" : ""}`,
            onClick: () => {
              v(null), c(M.id);
            },
            "aria-pressed": M.id === O.id,
            children: [
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-top", children: [
                /* @__PURE__ */ h.jsx(ku, { status: M.status }),
                /* @__PURE__ */ h.jsx("time", { dateTime: M.createdAt, children: gE(M.createdAt) })
              ] }),
              /* @__PURE__ */ h.jsx("strong", { children: M.hypothesis || "Untitled study" }),
              /* @__PURE__ */ h.jsxs("span", { className: "gcp-study-card-meta", children: [
                ((te = M.objective) == null ? void 0 : te.direction) === "minimize" ? "↓" : "↑",
                " ",
                ((J = M.objective) == null ? void 0 : J.metric) || "metric",
                /* @__PURE__ */ h.jsx("span", { "aria-hidden": "true", children: " · " }),
                ((x = M.variants) == null ? void 0 : x.length) ?? 0,
                " candidates"
              ] })
            ]
          },
          M.id
        );
      }) }),
      /* @__PURE__ */ h.jsxs("article", { className: "gcp-lab-report", "aria-label": `Experiment report: ${O.hypothesis}`, children: [
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-report-head", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Study hypothesis" }),
            /* @__PURE__ */ h.jsx("h2", { children: O.hypothesis })
          ] }),
          /* @__PURE__ */ h.jsx(ku, { status: O.status })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-export-actions", "aria-label": "Export study evidence", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Il(
                `${Zr(O.id)}-runs.csv`,
                "text/csv",
                F0(Tg(O))
              ),
              children: "Export runs CSV"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              onClick: () => Il(
                `${Zr(O.id)}-research.md`,
                "text/markdown",
                P0(Tg(O))
              ),
              children: "Export research brief"
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              disabled: !I || y,
              title: I ? "Export the SHA-256 content-integrity-checked baseline, variants, provenance, and run records" : "No portable bundle is available for this legacy summary",
              onClick: () => {
                H();
              },
              children: y ? "Verifying portable study…" : "Export portable study"
            }
          )
        ] }),
        I && /* @__PURE__ */ h.jsxs("p", { className: "gcp-lab-integrity", children: [
          "Content integrity checked · SHA-256 ",
          I.integrity.contentSha256.slice(0, 12),
          "… · authorship unverified"
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-summary-grid", children: [
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card", "aria-labelledby": "gcp-study-objective", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon objective", "aria-hidden": "true", children: "◎" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-objective", children: "Study objective" }),
              /* @__PURE__ */ h.jsxs("strong", { children: [
                O.objective.direction === "maximize" ? "Maximize" : "Minimize",
                " ",
                O.objective.metric
              ] }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                O.repetitions,
                " ",
                O.repetitions === 1 ? "run" : "runs",
                " per candidate"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-summary-card winner", "aria-labelledby": "gcp-study-winner", children: [
            /* @__PURE__ */ h.jsx("span", { className: "gcp-lab-card-icon winner", "aria-hidden": "true", children: "★" }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-winner", children: "Winning candidate" }),
              /* @__PURE__ */ h.jsx("strong", { children: O.winnerLabel ?? "No winner resolved" }),
              /* @__PURE__ */ h.jsx("span", { children: O.winnerId ? `${Ji((ue = O.variants.find((M) => M.id === O.winnerId)) == null ? void 0 : ue.mean)} mean score` : "Check warnings for missing evidence" })
            ] })
          ] })
        ] }),
        O.search && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-search-plan", "aria-label": "Deterministic parameter search plan", children: [
          /* @__PURE__ */ h.jsx("span", { className: "gcp-eyebrow", children: "Reproducible planner" }),
          /* @__PURE__ */ h.jsx("strong", { children: O.search.strategy === "grid" ? "Complete grid" : "Seeded random" }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            O.search.generatedCandidateCount,
            " generated candidates · ",
            " ",
            O.search.totalDomainAssignments,
            " domain assignments · ",
            " ",
            O.search.totalExecutionCount,
            " executions",
            O.search.plannerSeed === void 0 ? "" : ` · planner seed ${O.search.plannerSeed} (${O.search.prngVersion})`
          ] }),
          /* @__PURE__ */ h.jsx("small", { children: O.search.seedDescription })
        ] }),
        ((X = (Y = O.insights) == null ? void 0 : Y.summary) == null ? void 0 : X.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-findings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-findings", children: "Key findings" }) }),
          /* @__PURE__ */ h.jsx("ul", { className: "gcp-lab-findings", children: O.insights.summary.map((M, te) => /* @__PURE__ */ h.jsx("li", { children: M }, `${te}-${M}`)) })
        ] }),
        /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-candidate-leaderboard", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-candidate-leaderboard", children: "Candidate leaderboard" }),
            /* @__PURE__ */ h.jsx("span", { children: O.objective.direction === "maximize" ? "Higher is better" : "Lower is better" })
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
            /* @__PURE__ */ h.jsx("tbody", { children: P.map((M, te) => {
              var x, U;
              const J = M.id === O.winnerId;
              return /* @__PURE__ */ h.jsxs("tr", { className: J ? "winner" : void 0, children: [
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx("span", { className: "gcp-rank", children: M.mean === void 0 ? "—" : te + 1 }) }),
                /* @__PURE__ */ h.jsxs("td", { children: [
                  /* @__PURE__ */ h.jsxs("span", { className: "gcp-candidate-name", children: [
                    /* @__PURE__ */ h.jsx("strong", { children: M.label }),
                    J && /* @__PURE__ */ h.jsx("span", { className: "gcp-winner-tag", children: "Winner" }),
                    M.status !== "completed" && /* @__PURE__ */ h.jsx(ku, { status: M.status })
                  ] }),
                  M.operationSummary && M.operationSummary.length > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-operations", children: M.operationSummary.join(" · ") }),
                  ((x = M.errors) == null ? void 0 : x.length) > 0 && /* @__PURE__ */ h.jsx("span", { className: "gcp-candidate-error", children: M.errors[0] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: Ji(M.mean) }),
                  M.baselineComparison && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "improvement ",
                    $g(M.baselineComparison.objectiveImprovement),
                    M.baselineComparison.hedgesG === void 0 ? "" : ` · g ${$g(M.baselineComparison.hedgesG)}`
                  ] })
                ] }),
                /* @__PURE__ */ h.jsxs("td", { className: "gcp-metric-value", children: [
                  /* @__PURE__ */ h.jsx("span", { children: M.stddev === void 0 ? "—" : `± ${Ji(M.stddev)}` }),
                  M.confidenceInterval95 && /* @__PURE__ */ h.jsxs("small", { className: "gcp-metric-detail", children: [
                    "95% CI [",
                    Ji(M.confidenceInterval95.lower),
                    ", ",
                    Ji(M.confidenceInterval95.upper),
                    "]"
                  ] })
                ] }),
                /* @__PURE__ */ h.jsx("td", { children: ((U = M.metricValues) == null ? void 0 : U.length) ?? 0 }),
                /* @__PURE__ */ h.jsx("td", { children: yE(M.runtimeMs) }),
                /* @__PURE__ */ h.jsx("td", { children: /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    type: "button",
                    className: "gcp-candidate-download",
                    disabled: !I,
                    title: I ? "Materialize a graph JSON without changing the canvas; recorded fidelity warnings will be shown" : "This legacy summary has no portable candidate specification",
                    onClick: () => oe(M.id, M.label),
                    children: "Download"
                  }
                ) })
              ] }, M.id);
            }) })
          ] }) })
        ] }),
        (((fe = (ie = O.insights) == null ? void 0 : ie.warnings) == null ? void 0 : fe.length) > 0 || O.applyConflict) && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-study-warnings", children: [
          /* @__PURE__ */ h.jsx("div", { className: "gcp-lab-section-title", children: /* @__PURE__ */ h.jsx("h3", { id: "gcp-study-warnings", children: "Evidence warnings" }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-warnings", children: [
            O.applyConflict && /* @__PURE__ */ h.jsx("p", { role: "alert", children: O.applyConflict }),
            (pe = (ee = O.insights) == null ? void 0 : ee.warnings) == null ? void 0 : pe.map((M, te) => /* @__PURE__ */ h.jsx("p", { role: "alert", children: M }, `${te}-${M}`))
          ] })
        ] }),
        ((K = (w = O.insights) == null ? void 0 : w.paperIdeas) == null ? void 0 : K.length) > 0 && /* @__PURE__ */ h.jsxs("section", { className: "gcp-lab-section", "aria-labelledby": "gcp-paper-ideas", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "gcp-lab-section-title", children: [
            /* @__PURE__ */ h.jsx("h3", { id: "gcp-paper-ideas", children: "Paper ideas" }),
            /* @__PURE__ */ h.jsx("span", { children: "Research leads, not final claims" })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "gcp-paper-grid", children: O.insights.paperIdeas.map((M, te) => /* @__PURE__ */ h.jsxs("article", { className: "gcp-paper-card", children: [
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
              ae();
            }, disabled: E, children: E ? "Importing…" : "Import read-only" })
          ] })
        ]
      }
    ) })
  ] });
}
function _E(a) {
  const r = Date.now() - a, s = Math.floor(r / 1e3);
  if (s < 60) return "just now";
  const l = Math.floor(s / 60);
  if (l < 60) return `${l}m ago`;
  const c = Math.floor(l / 60);
  if (c < 24) return `${c}h ago`;
  const d = Math.floor(c / 24);
  return d < 7 ? `${d}d ago` : `${Math.floor(d / 7)}w ago`;
}
function EE({ api: a, activeId: r, onResume: s, onNew: l }) {
  const [c, d] = W.useState(
    () => Xu(a)
  ), [f, y] = W.useState(null), m = (v, b) => {
    v.stopPropagation(), f === b ? (_0(a, b), d(Xu(a)), f === b && y(null)) : y(b);
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
              _E(v.updatedAt),
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
let vs = 0, ud = 0, ts = null;
function Fr() {
  return vs += 1, ud += 1, ts = null, vs;
}
function kl(a) {
  return a === vs;
}
async function dd(a) {
  const r = vs;
  let s = ts;
  (s === null || s.generation !== r) && (s = {
    generation: r,
    sequence: ++ud,
    promise: Promise.resolve().then(a)
  }, ts = s);
  try {
    const l = await s.promise;
    return s.generation === vs && s.sequence === ud ? l : null;
  } finally {
    ts === s && (ts = null);
  }
}
const Mg = {
  openai: "OpenAI API",
  "openai-codex": "OpenAI Codex (ChatGPT)",
  openrouter: "OpenRouter",
  anthropic: "Claude API",
  custom: "Custom (OpenAI-compatible)"
}, xE = [
  "openai",
  "openrouter",
  "anthropic",
  "custom"
], NE = 2e3, AE = 300 * 1e3, Wr = {
  reasoningEffort: !1,
  richModelCatalog: !1
};
function jE({
  value: a,
  onBlur: r,
  placeholder: s,
  "aria-label": l
}) {
  const [c, d] = W.useState(!1), [f, y] = W.useState(a);
  return W.useEffect(() => {
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
function wE({
  api: a,
  settings: r,
  codexLoggedIn: s,
  codexEmail: l,
  onCodexStatusChange: c,
  onChange: d
}) {
  var gn, ln, ta;
  const f = r.provider, y = f === "openai" ? r.apiKeys.openai : f === "openrouter" ? r.apiKeys.openrouter : f === "anthropic" ? r.apiKeys.anthropic : f === "custom" ? r.apiKeys.custom : void 0, m = f === "custom" ? r.customBaseUrl : void 0, g = Kl(
    f,
    f === "openai-codex" ? l ?? (s ? "active-codex-session" : "") : y,
    m
  ), [v, b] = W.useState({ provider: f, identity: g, models: [] }), [_, A] = W.useState(!1), [R, E] = W.useState(null), B = W.useRef(0), $ = W.useRef(r), O = W.useRef(d), I = W.useRef(c), P = W.useRef(s), Q = W.useRef(l), ae = W.useRef(s), [H, oe] = W.useState(null), [ue, Y] = W.useState(!1), X = W.useRef(null), ie = W.useRef(0);
  $.current = r, O.current = d, I.current = c, P.current = s, Q.current = l;
  const fe = r.models[f] ?? "", ee = zg(
    f,
    v.provider === f && v.identity === g ? v.models : [],
    fe
  ), pe = Jl(f, fe, ee), K = ((ln = (gn = r.providerCapabilities) == null ? void 0 : gn[f]) == null ? void 0 : ln.reasoningEffort) === !0 ? (pe == null ? void 0 : pe.reasoningEfforts) ?? [] : [];
  W.useEffect(() => () => {
    X.current !== null && (clearInterval(X.current), X.current = null);
  }, []), W.useEffect(() => {
    let ne = !0;
    return f === "openai-codex" && dd(() => Qu(a)).then((he) => {
      if (ne && he !== null) {
        const Ke = he.status === "logged_in", rt = Ke ? he.email ?? null : null;
        (Ke !== P.current || rt !== Q.current) && (Pr("openai-codex"), re("openai-codex", [], Wr)), I.current(Ke, rt);
      }
    }).catch(() => {
    }), () => {
      ne = !1;
    };
  }, [a, f]), W.useEffect(() => {
    ae.current && !s && Pr("openai-codex"), ae.current = s;
  }, [s]);
  function M(ne) {
    const he = { ...$.current, ...ne };
    $.current = he, O.current(he);
  }
  function te(ne) {
    var Pe, si;
    const he = $.current, Ke = { ...he.reasoningEfforts }, rt = Ke[f], xt = Jl(f, ne, ee), _t = !!((Pe = xt == null ? void 0 : xt.reasoningEfforts) != null && Pe.some(
      (na) => na.effort === rt
    ));
    rt && (xt != null && xt.reasoningEfforts) && !_t && delete Ke[f];
    const Tt = (si = he.providerCapabilities) == null ? void 0 : si[f], on = Tt ? {
      reasoningEffort: Tt.reasoningEffort,
      richModelCatalog: Tt.richModelCatalog,
      ...rt && _t ? { reasoningModel: ne } : {}
    } : void 0;
    M({
      models: { ...he.models, [f]: ne },
      reasoningEfforts: Ke,
      ...on ? {
        providerCapabilities: {
          ...he.providerCapabilities,
          [f]: on
        }
      } : {}
    });
  }
  function J(ne) {
    const he = Bg(
      $.current,
      f,
      ne
    );
    $.current = he, O.current(he);
  }
  function x(ne, he) {
    const Ke = $.current, rt = { ...Ke.providerCapabilities };
    delete rt[ne], M({
      apiKeys: { ...Ke.apiKeys, [ne]: he },
      providerCapabilities: rt
    });
  }
  function U(ne) {
    return ne === "openai" ? $.current.apiKeys.openai : ne === "openrouter" ? $.current.apiKeys.openrouter : ne === "anthropic" ? $.current.apiKeys.anthropic : ne === "custom" ? $.current.apiKeys.custom : void 0;
  }
  function F(ne) {
    return Kl(
      ne,
      ne === "openai-codex" ? Q.current ?? (P.current ? "active-codex-session" : "") : U(ne),
      ne === "custom" ? $.current.customBaseUrl : void 0
    );
  }
  function re(ne, he, Ke, rt) {
    const xt = $.current, _t = Yu(
      xt,
      ne,
      he,
      Ke,
      rt
    );
    _t !== xt && ($.current = _t, O.current(_t));
  }
  async function ye(ne, he = f) {
    const Ke = U(he), rt = he === "custom" ? $.current.customBaseUrl : void 0, xt = he === "openai-codex" ? P.current : he === "custom" ? !!rt : !!Ke, _t = F(he), Tt = ++B.current;
    if (!xt) {
      A(!1), E(null), b({ provider: he, identity: _t, models: [] }), re(he, [], Wr);
      return;
    }
    const on = _t;
    if (!ne) {
      const Pe = Rg(on);
      if (Pe) {
        if (B.current !== Tt) return;
        b({ provider: he, identity: _t, models: Pe.models }), re(
          he,
          Pe.models,
          Pe.capabilities,
          Pe.source
        ), E(null), A(!1);
        return;
      }
    }
    A(!0), E(null);
    try {
      const Pe = await Kg(
        a,
        he,
        Ke,
        rt
      );
      if (B.current !== Tt) return;
      Lg(on, Pe), b({ provider: he, identity: _t, models: Pe.models }), re(
        he,
        Pe.models,
        Pe.capabilities,
        Pe.source
      );
    } catch (Pe) {
      if (B.current !== Tt) return;
      E(String(Pe));
    } finally {
      B.current === Tt && A(!1);
    }
  }
  W.useEffect(() => {
    if (++B.current, A(!1), E(null), b(
      (ne) => ne.provider === f && ne.identity === g ? ne : { provider: f, identity: g, models: [] }
    ), f === "custom") {
      re(f, [], Wr);
      return;
    }
    return ye(!1, f), () => {
      ++B.current;
    };
  }, [a, f, y, m, s, l]);
  function Se() {
    ye(!0);
  }
  async function ce() {
    const ne = Fr();
    try {
      const he = await z0(a);
      if (!kl(ne)) return;
      window.open(he, "_blank"), Y(!0), ie.current = Date.now(), X.current = setInterval(async () => {
        try {
          const Ke = await dd(() => Qu(a));
          Ke !== null && kl(ne) && Ke.status === "logged_in" && (Fr(), Pr("openai-codex"), re("openai-codex", [], Wr), I.current(!0, Ke.email ?? null), Y(!1), X.current !== null && (clearInterval(X.current), X.current = null));
        } catch {
        }
        if (Date.now() - ie.current > AE) {
          if (!kl(ne)) return;
          Fr(), Y(!1), X.current !== null && (clearInterval(X.current), X.current = null);
        }
      }, NE);
    } catch (he) {
      oe(String(he));
    }
  }
  async function We() {
    const ne = Fr();
    Y(!1), X.current !== null && (clearInterval(X.current), X.current = null);
    try {
      if (await R0(a), !kl(ne)) return;
      Fr(), Pr("openai-codex"), ++B.current, b({
        provider: "openai-codex",
        identity: Kl("openai-codex"),
        models: []
      }), E(null), re("openai-codex", [], Wr), I.current(!1, null);
    } catch (he) {
      oe(String(he));
    }
  }
  const Ae = "gcp-model-datalist";
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-settings", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
      /* @__PURE__ */ h.jsx("label", { className: "gcp-label", htmlFor: "gcp-provider-select", children: "Provider" }),
      /* @__PURE__ */ h.jsx(
        "select",
        {
          id: "gcp-provider-select",
          className: "gcp-select",
          value: f,
          onChange: (ne) => M({ provider: ne.target.value }),
          "aria-label": "Select LLM provider",
          children: Object.keys(Mg).map((ne) => /* @__PURE__ */ h.jsx("option", { value: ne, children: Mg[ne] }, ne))
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
            list: Ae,
            value: r.models[f] ?? "",
            onChange: (ne) => te(ne.target.value),
            placeholder: "model id",
            "aria-label": "Model ID",
            autoComplete: "off",
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ h.jsx("datalist", { id: Ae, children: ee.map((ne) => /* @__PURE__ */ h.jsx("option", { value: ne.id, label: ne.label }, ne.id)) }),
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
      R && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: R })
    ] }),
    K.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
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
              pe != null && pe.defaultReasoningEffort ? ` (${pe.defaultReasoningEffort})` : ""
            ] }),
            K.map((ne) => /* @__PURE__ */ h.jsx(
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
    f !== "openai-codex" && xE.filter((ne) => ne === f || f === "custom" && ne === "custom").map(
      (ne) => ne === f ? /* @__PURE__ */ h.jsxs("div", { className: "gcp-field", children: [
        /* @__PURE__ */ h.jsx("label", { className: "gcp-label", children: ne === "openai" ? "OpenAI API Key" : ne === "anthropic" ? "Anthropic API Key" : ne === "openrouter" ? "OpenRouter API Key" : "Custom API Key" }),
        /* @__PURE__ */ h.jsx(
          jE,
          {
            value: r.apiKeys[ne] ?? "",
            onBlur: (he) => x(ne, he),
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
          onChange: (ne) => M({ customBaseUrl: ne.target.value }),
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
              onClick: ce,
              disabled: ue,
              "aria-label": "Sign in with ChatGPT Codex",
              children: ue ? "Waiting..." : "Sign in"
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
        H && /* @__PURE__ */ h.jsx("span", { className: "gcp-field-hint error", role: "alert", children: H })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "gcp-footnote", children: "Keys are stored in this browser's localStorage and sent only to your local CodefyUI backend, which forwards them to the selected provider." })
  ] });
}
function $E() {
  return /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M20 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round" }) });
}
function TE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("path", { d: "M9 3h6M10 3v5l-5.2 9a2.7 2.7 0 0 0 2.34 4h9.72a2.7 2.7 0 0 0 2.34-4L14 8V3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ h.jsx("path", { d: "M7.5 15h9", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function ME() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function OE() {
  return /* @__PURE__ */ h.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ h.jsx("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ h.jsx("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
  ] });
}
function CE({ expanded: a }) {
  return a ? /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ h.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function DE() {
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
function zE({
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
  const [b, _] = W.useState("chat"), [A, R] = W.useState("compact"), [E, B] = W.useState(() => Og(a));
  W.useEffect(() => {
    var oe, ue;
    const H = () => B(Og(a));
    H();
    try {
      return (ue = (oe = a.graph) == null ? void 0 : oe.onGraphChanged) == null ? void 0 : ue.call(oe, H);
    } catch {
      return;
    }
  }, [a]);
  const $ = (H) => {
    g(H), _("chat");
  }, O = () => {
    m(), _("chat");
  }, I = (H) => {
    _((oe) => oe === H && H !== "chat" ? "chat" : H);
  }, P = r.models[r.provider] ?? "", Q = Number.isFinite(a.apiVersion) ? `API v${a.apiVersion}` : "API legacy", ae = [
    { id: "chat", label: "Chat", ariaLabel: "Agent chat", icon: /* @__PURE__ */ h.jsx($E, {}) },
    { id: "experiments", label: "Lab", ariaLabel: "Experiments lab", icon: /* @__PURE__ */ h.jsx(TE, {}) },
    { id: "history", label: "History", ariaLabel: "Conversation history", icon: /* @__PURE__ */ h.jsx(ME, {}) },
    { id: "settings", label: "Settings", ariaLabel: "Settings", icon: /* @__PURE__ */ h.jsx(OE, {}) }
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
                  title: `Provider: ${r.provider}${P ? ` · ${P}` : ""} — click to change`,
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "gcp-model-dot", "aria-hidden": "true" }),
                    P || "Set up model"
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "gcp-icon-btn",
                  onClick: () => R((H) => H === "compact" ? "expanded" : "compact"),
                  "aria-label": A === "compact" ? "Expand panel" : "Use compact panel",
                  title: A === "compact" ? "Expand workspace" : "Compact workspace",
                  children: /* @__PURE__ */ h.jsx(CE, { expanded: A === "expanded" })
                }
              ),
              /* @__PURE__ */ h.jsx("button", { className: "gcp-icon-btn", onClick: v, "aria-label": "Close panel", title: "Close", children: /* @__PURE__ */ h.jsx(DE, {}) })
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
            /* @__PURE__ */ h.jsx("span", { className: "gcp-context-api", children: Q })
          ] }),
          /* @__PURE__ */ h.jsx("nav", { className: "gcp-workbench-nav", "aria-label": "Agent workbench views", children: ae.map((H) => /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: `gcp-nav-btn${b === H.id ? " active" : ""}`,
              onClick: () => I(H.id),
              "aria-label": H.ariaLabel,
              "aria-current": b === H.id ? "page" : void 0,
              children: [
                H.icon,
                /* @__PURE__ */ h.jsx("span", { children: H.label })
              ]
            },
            H.id
          )) })
        ] }),
        /* @__PURE__ */ h.jsxs("main", { className: "gcp-view", children: [
          b === "chat" && /* @__PURE__ */ h.jsx(
            W_,
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
          b === "experiments" && /* @__PURE__ */ h.jsx(SE, { api: a }),
          b === "history" && /* @__PURE__ */ h.jsx(EE, { api: a, activeId: c.id, onResume: $, onNew: O }),
          b === "settings" && /* @__PURE__ */ h.jsx(
            wE,
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
function RE({ api: a }) {
  const [r, s] = W.useState(!1), [l, c] = W.useState(() => v0(a)), [d, f] = W.useState(!1), [y, m] = W.useState(null), [g, v] = W.useState(
    () => Rh(
      l.provider,
      l.models[l.provider] ?? "",
      Zl(l)
    )
  );
  W.useEffect(() => {
    b0(a, l);
  }, [a, l]), W.useEffect(() => {
    if (l.provider !== "openai-codex") return;
    let E = !1;
    return dd(() => Qu(a)).then((B) => {
      if (E || B === null) return;
      const $ = B.status === "logged_in", O = $ ? B.email ?? null : null;
      ($ !== d || O !== y) && c((I) => Yu(
        I,
        "openai-codex",
        [],
        { reasoningEffort: !1, richModelCatalog: !1 }
      )), $ || Pr("openai-codex"), f($), m(O);
    }).catch(() => {
    }), () => {
      E = !0;
    };
  }, [a, l.provider]), W.useEffect(() => {
    const E = l.provider;
    if (E === "custom") return;
    const B = E === "openai" ? l.apiKeys.openai : E === "openrouter" ? l.apiKeys.openrouter : E === "anthropic" ? l.apiKeys.anthropic : void 0;
    if (!(E === "openai-codex" ? d : !!B)) return;
    const O = Kl(
      E,
      E === "openai-codex" ? y ?? "active-codex-session" : B
    );
    let I = !1;
    const P = (ae) => {
      I || c((H) => {
        if (H.provider !== E) return H;
        const oe = E === "openai" ? H.apiKeys.openai : E === "openrouter" ? H.apiKeys.openrouter : E === "anthropic" ? H.apiKeys.anthropic : void 0;
        return E !== "openai-codex" && oe !== B ? H : Yu(
          H,
          E,
          ae.models,
          ae.capabilities,
          ae.source
        );
      });
    }, Q = Rg(O);
    return Q ? (P(Q), () => {
      I = !0;
    }) : (Kg(a, E, B).then((ae) => {
      I || (Lg(O, ae), P(ae));
    }).catch(() => {
    }), () => {
      I = !0;
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
    c(E);
  }, _ = (E, B) => {
    f(E), m(B);
  }, A = () => {
    v(
      Rh(
        l.provider,
        l.models[l.provider] ?? "",
        Zl(l)
      )
    );
  }, R = (E) => {
    v(E);
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "gcp-root", children: [
    /* @__PURE__ */ h.jsx(N0, { onClick: () => s((E) => !E) }),
    r && /* @__PURE__ */ h.jsx(
      zE,
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
function UE(a) {
  const r = a.ui.addFloatingWidget({ id: "copilot" });
  n0.createRoot(r).render(
    /* @__PURE__ */ h.jsx(Jb.StrictMode, { children: /* @__PURE__ */ h.jsx(RE, { api: a }) })
  );
}
export {
  UE as default
};
