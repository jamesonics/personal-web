/**
 * 个人主页 - 主脚本文件
 * 黑白简约风格，最小化动效
 */

(function() {
    'use strict';

    // DOM加载完成后执行
    document.addEventListener('DOMContentLoaded', function() {
        init();
    });

    function init() {
        // 更新页脚年份
        updateFooterYear();

        // 平滑滚动（备用，CSS已处理）
        setupSmoothScroll();

        // 添加当前年份到页脚
        console.log('个人主页已加载完成');
    }

    /**
     * 更新页脚年份
     */
    function updateFooterYear() {
        const footerText = document.querySelector('.footer-text');
        if (footerText) {
            const currentYear = new Date().getFullYear();
            const today = new Date();
            const dateStr = today.getFullYear() + '-' +
                           String(today.getMonth() + 1).padStart(2, '0') + '-' +
                           String(today.getDate()).padStart(2, '0');

            footerText.innerHTML = `© ${currentYear} 刘子涵 | 最后更新: ${dateStr}`;
        }
    }

    /**
     * 设置平滑滚动
     */
    function setupSmoothScroll() {
        // 为所有锚点链接添加平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

})();
