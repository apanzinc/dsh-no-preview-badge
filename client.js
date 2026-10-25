// 注入一条 CSS 规则隐藏“预览版”小标；类名包含 previewBadge 即命中，不依赖构建哈希前缀。
window.__ModuleLoader__.load({
  id: '@local/hide-hero-preview-badge',
  factory() {
    return {
      apply(ctx) {
        ctx.effect(() => {
          const style = document.createElement('style');
          style.textContent = '[class*="previewBadge"]{display:none!important}';
          (document.head || document.documentElement).append(style);
          return () => style.remove();
        });
      },
    };
  },
});
