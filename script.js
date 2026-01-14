// وظيفة للرسالة السرية
function showSecretMessage() {
    const secretText = document.getElementById('secretText');
    if (secretText.style.display === 'none') {
        secretText.style.display = 'block';
        setTimeout(() => {
            secretText.style.opacity = '1';
        }, 10);
    } else {
        secretText.style.display = 'none';
    }
}

// تحديث شريط التنقل لدعم 6 عناصر
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();
    
    // تحديث العدادات إذا كانت الصفحة تحتوي عليها
    if (document.querySelector('.counter-container')) {
        updateCounters();
        // تحديث كل ثانية
        setInterval(updateCounters, 1000);
    }
});

// تحديث شريط التنقل بناءً على الصفحة الحالية (6 عناصر)
function updateNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    const indicator = document.querySelector('.nav-indicator');
    
    // إزالة النشط من جميع العناصر
    navItems.forEach(item => item.classList.remove('active'));
    
    // تحديد العنصر النشط بناءً على الصفحة الحالية
    let activeIndex = 0;
    switch(currentPage) {
        case 'index.html':
            activeIndex = 0;
            break;
        case 'love-counter.html':
            activeIndex = 1;
            break;
        case 'age-counter.html':
            activeIndex = 2;
            break;
        case 'cats.html':
            activeIndex = 3;
            break;
        case 'love-letter.html':
            activeIndex = 4;
            break;
        case 'favorites.html':
            activeIndex = 5;
            break;
        default:
            activeIndex = 0;
    }
    
    // إضافة النشط للعنصر المناسب
    if (navItems[activeIndex]) {
        navItems[activeIndex].classList.add('active');
        
        // تحريك المؤشر (فقط على الأجهزة الكبيرة)
        if (indicator && window.innerWidth > 768) {
            const itemWidth = navItems[0].offsetWidth;
            const container = document.querySelector('.nav-container');
            const containerWidth = container.offsetWidth;
            const itemCount = navItems.length;
            const itemEffectiveWidth = containerWidth / itemCount;
            
            // حساب الموضع بدقة مع مراعاة المسافات
            indicator.style.transform = `translateX(${activeIndex * itemEffectiveWidth}px)`;
            indicator.style.display = 'block';
            indicator.style.width = `${itemEffectiveWidth}px`;
        } else if (indicator) {
            // إخفاء المؤشر على الهواتف
            indicator.style.display = 'none';
        }
    }
}

// تحديث عند تغيير حجم النافذة
window.addEventListener('resize', function() {
    updateNavigation();
});

// تحديث جميع العدادات
function updateCounters() {
    updateLoveCounter();
    updateAgeCounter();
}

// وظيفة عداد الحب (يجب ضبط تاريخ بداية الحب هنا)
function updateLoveCounter() {
    // ضع تاريخ بداية حبك هنا (سنة، شهر-1، يوم)
    const loveStartDate = new Date(2021, 10, 27); // مثال: 15 يونيو 2023
    
    const now = new Date();
    const diffTime = Math.abs(now - loveStartDate);
    
    // حساب السنوات
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    
    // حساب الأشهر المتبقية
    const tempDate = new Date(loveStartDate);
    tempDate.setFullYear(tempDate.getFullYear() + diffYears);
    const diffMonths = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24 * 30.44));
    
    // حساب الأيام المتبقية
    tempDate.setMonth(tempDate.getMonth() + diffMonths);
    const diffDays = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));
    
    // حساب الساعات
    tempDate.setDate(tempDate.getDate() + diffDays);
    const diffHours = Math.floor((now - tempDate) / (1000 * 60 * 60));
    
    // حساب الدقائق
    tempDate.setHours(tempDate.getHours() + diffHours);
    const diffMinutes = Math.floor((now - tempDate) / (1000 * 60));
    
    // حساب الثواني
    tempDate.setMinutes(tempDate.getMinutes() + diffMinutes);
    const diffSeconds = Math.floor((now - tempDate) / 1000);
    
    // تحديث القيم في صفحة عداد الحب
    if (document.getElementById('loveYears')) {
        document.getElementById('loveYears').textContent = diffYears;
        document.getElementById('loveMonths').textContent = diffMonths;
        document.getElementById('loveDays').textContent = diffDays;
        document.getElementById('loveHours').textContent = diffHours;
        document.getElementById('loveMinutes').textContent = diffMinutes;
        document.getElementById('loveSeconds').textContent = diffSeconds;
        
        // تحديث تاريخ البداية المعروض
        const startDateStr = loveStartDate.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById('loveStartDate').textContent = startDateStr;
    }
}

// وظيفة عداد عمر حبيبتك (يجب ضبط تاريخ ميلادها هنا)
function updateAgeCounter() {
    // ضع تاريخ ميلاد حبيبتك هنا (سنة، شهر-1، يوم)
    const birthDate = new Date(2008, 11, 8); // مثال: 20 أغسطس 2002
    
    const now = new Date();
    const diffTime = Math.abs(now - birthDate);
    
    // حساب السنوات
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    
    // حساب الأشهر المتبقية
    const tempDate = new Date(birthDate);
    tempDate.setFullYear(tempDate.getFullYear() + diffYears);
    const diffMonths = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24 * 30.44));
    
    // حساب الأيام المتبقية
    tempDate.setMonth(tempDate.getMonth() + diffMonths);
    const diffDays = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));
    
    // حساب الساعات
    tempDate.setDate(tempDate.getDate() + diffDays);
    const diffHours = Math.floor((now - tempDate) / (1000 * 60 * 60));
    
    // حساب الدقائق
    tempDate.setHours(tempDate.getHours() + diffHours);
    const diffMinutes = Math.floor((now - tempDate) / (1000 * 60));
    
    // حساب الثواني
    tempDate.setMinutes(tempDate.getMinutes() + diffMinutes);
    const diffSeconds = Math.floor((now - tempDate) / 1000);
    
    // حساب أيام الميلاد القادم
    let nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < now) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const daysToBirthday = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));
    
    // تحديث القيم في صفحة عداد العمر
    if (document.getElementById('ageYears')) {
        document.getElementById('ageYears').textContent = diffYears;
        document.getElementById('ageMonths').textContent = diffMonths;
        document.getElementById('ageDays').textContent = diffDays;
        document.getElementById('ageHours').textContent = diffHours;
        document.getElementById('ageMinutes').textContent = diffMinutes;
        document.getElementById('ageSeconds').textContent = diffSeconds;
        document.getElementById('nextBirthday').textContent = daysToBirthday;
        
        // تحديث تاريخ الميلاد المعروض
        const birthDateStr = birthDate.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById('birthDateDisplay').textContent = birthDateStr;
    }
}

// تحسين تجربة المستخدم - إضافة تأثيرات لشريط التنقل
function enhanceNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'translateY(0)';
            }
        });
        
        // تأثير اللمس للهواتف
        item.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        
        item.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// تشغيل تحسينات التنقل بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    enhanceNavigation();
});

// دالة لتحديث التواريخ يدوياً (إذا احتجت)
function updateDates() {
    // يمكنك استدعاء هذه الدالة لتحديث التواريخ
    console.log('تم تحديث التواريخ بنجاح!');
    
    // تحديث التواريخ في الصفحة الحالية
    updateLoveCounter();
    updateAgeCounter();
    updateNavigation();
}

// دالة مساعدة لتنسيق الأرقام
function formatNumber(num) {
    return num < 10 ? '0' + num : num;
}

// دالة لإضافة تأثيرات لطيفة للعدادات
function animateCounters() {
    const counters = document.querySelectorAll('.counter-value');
    
    counters.forEach(counter => {
        const originalValue = counter.textContent;
        counter.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
            counter.style.transition = 'transform 0.3s ease';
        }, 300);
    });
}

// تشغيل تأثيرات العدادات كل 10 ثواني
setInterval(() => {
    if (document.querySelector('.counter-container')) {
        animateCounters();
    }
}, 10000);

// تهيئة الصفحة عند التحميل
window.onload = function() {
    // تحديث جميع العناصر
    updateNavigation();
    updateCounters();
    enhanceNavigation();
    
    // إضافة تأثير للصفحات عند تحميلها
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
};