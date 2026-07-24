/**
 * Cache Buster - ระบบเคลียร์แคชสำหรับ LINE LIFF / In-App Browser
 * ใช้สำหรับแก้ปัญหาที่ LINE WebView แคชไฟล์เก่าไว้ไม่ยอมอัพเดต
 */

(function() {
    'use strict';

    // === ฟังก์ชันหลัก: เคลียร์แคชทั้งหมดและรีโหลดหน้า ===
    async function clearCacheAndReload() {
        const btn = document.getElementById('btn-clear-cache');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        }

        try {
            // 1. ลบ Cache Storage ทั้งหมด (Service Worker Caches)
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(
                    cacheNames.map(function(cacheName) {
                        return caches.delete(cacheName);
                    })
                );
                console.log('[Cache Buster] ลบ Cache Storage สำเร็จ:', cacheNames.length, 'caches');
            }

            // 2. ยกเลิก Service Workers ทั้งหมด
            if ('serviceWorker' in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                await Promise.all(
                    registrations.map(function(registration) {
                        return registration.unregister();
                    })
                );
                console.log('[Cache Buster] ยกเลิก Service Workers สำเร็จ:', registrations.length, 'workers');
            }

            // 3. บันทึกเวลาอัพเดตล่าสุด
            const now = new Date();
            const timeStr = now.toLocaleString('th-TH', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            localStorage.setItem('lastCacheUpdate', timeStr);

            // 4. Force reload - เพิ่ม timestamp ใน URL เพื่อข้ามแคช
            const currentUrl = window.location.href.split('?')[0];
            window.location.href = currentUrl + '?nocache=' + Date.now();

        } catch (error) {
            console.error('[Cache Buster] เกิดข้อผิดพลาด:', error);
            // Fallback: reload แบบ hard refresh
            window.location.reload(true);
        }
    }

    // === ผูกปุ่มเคลียร์แคชกับฟังก์ชัน ===
    document.addEventListener('DOMContentLoaded', function() {
        // ปุ่มใน index.html (header)
        const clearBtn = document.getElementById('btn-clear-cache');
        if (clearBtn) {
            clearBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('ต้องการเคลียร์แคชและโหลดข้อมูลใหม่ทั้งหมดหรือไม่?')) {
                    clearCacheAndReload();
                }
            });
        }

        // แสดงข้อมูลเวอร์ชัน
        const versionInfo = document.getElementById('version-info');
        if (versionInfo) {
            const lastUpdate = localStorage.getItem('lastCacheUpdate');
            if (lastUpdate) {
                versionInfo.textContent = 'อัพเดตล่าสุด: ' + lastUpdate;
            }
        }
    });

    // === ทำให้ฟังก์ชันเรียกใช้ได้จากภายนอก (สำหรับ flex.html) ===
    window.clearCacheAndReload = clearCacheAndReload;

})();
