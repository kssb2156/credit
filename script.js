// ข้อมูลรายการชำระเงินทั้งหมด (ใช้ปี พ.ศ. 256x)
const allPayments = [
    { date: '05/01/2569', amount: 2000, description: 'ชำระเงิน', year: 2569, slip: 'https://s.imgz.io/2026/01/05/imagef6f4533590ba717e.png' },
    { date: '05/12/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/12/05/image924af375ed5493b2.png' },
    { date: '05/11/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/11/05/imagee4e3d50fd8ecc4f8.png' },
    { date: '05/10/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/10/05/imageee1c0defc956e287.png' },
    { date: '05/09/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Sep6876dea1385ac5a259.jpg' },
    { date: '06/08/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/6Aug6826a4e7bb31ac56ea.jpg' },
    { date: '05/07/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Jul683b70a26be79e05b2.jpg' },
    { date: '05/06/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Jun6817876dc63a67150b.jpg' },
    { date: '05/05/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5May6866b0566fbf8a69e6.jpg' },
    { date: '05/04/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Apr688478585de6594cbc.jpg' },
    { date: '05/03/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Mar687b4bf84bbcd5dd42.jpg' },
    { date: '05/02/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Feb6877bf42aadb2dd0d3.jpg' },
    { date: '05/01/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Jan68df2278be3efce80f.jpg' },
    { date: '06/12/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/6Dec67e965a793e431d4f0.png' },
    { date: '06/11/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/6Nov67d881c1ec862be5e5.jpg' },
    { date: '05/10/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/5Otc67c6b5e6bccac4f8c5.jpg' },
    { date: '05/09/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/5Sep67d5900ad6baa87abd.jpg' },
    { date: '07/08/2567', amount: 10000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/7Aug6797898aa3fd75e2eb.jpg' },
];

// ข้อมูลรายการเงินยืมทั้งหมด
const allLoans = [
    { date: '01/08/2567', amount: 9000, description: 'ยืมผ่อนรถ', year: 2567, slip: 'https://s.imgz.io/2025/09/10/1Aug67e2abb23107bc6f1b.jpg' },
    { date: '25/07/2567', amount: 9000, description: 'ยืมผ่อนรถ', year: 2567, slip: 'https://s.imgz.io/2025/09/10/25Jul67328173daebdd0db2.jpg' },
    { date: '21/07/2567', amount: 500, description: 'ยืมเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/21Jul6786f410945249b9e1.jpg' },
    { date: '16/07/2567', amount: 500, description: 'ยืมเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/16Jul6770754e5a51ee3b51.jpg' },
    { date: '12/07/2567', amount: 500, description: 'ยืมเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/12Jul67b06c43f0d95e74ab.jpg' },
    { date: '05/07/2567', amount: 3000, description: 'ยืมเงินไปเอารถเก๋ง', year: 2567, slip: 'https://s.imgz.io/2025/09/10/5Jul6785257a5cc28e4368.jpg' },
    { date: '03/07/2567', amount: 1000, description: 'ยืมเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/3Jul670d31de48ed2eded3.jpg' },
    { date: '27/06/2567', amount: 500, description: 'ยืมเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/27Jun677a243a441c64347a.jpg' },
    { date: '20/06/2567', amount: 500, description: 'ยืมเงิน', year: 2567, slip:'https://s.imgz.io/2025/09/10/20Jun67a2989f0f50728d9b.jpg' },
    { date: '14/06/2567', amount: 500, description: 'ยืมเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/14Jun676a25dbcf8a147eac.jpg' },
    { date: '13/06/2567', amount: 400, description: 'ยืมเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/13Jun673f85f0358c0567cc.jpg' },
    { date: '07/06/2567', amount: 10000, description: 'พี่แบงค์ยืม', year: 2567, slip: 'https://s.imgz.io/2025/09/10/7Jun675bd79ca6a5ef7458.jpg' },
    { date: '04/06/2567', amount: 30000, description: 'พี่แบงค์ยืม', year: 2567, slip: 'https://s.imgz.io/2025/09/10/4Aug67d58e6072cc8715b4.jpg' },
];

document.addEventListener('DOMContentLoaded', () => {
    // เลือกเฉพาะแท็บที่มีคุณสมบัติ data-tab เท่านั้น
    const tabItems = document.querySelectorAll('[data-tab]');
    const totalLoanElement = document.getElementById('total-loan');
    const totalPaidElement = document.getElementById('total-paid');
    const totalOutstandingElement = document.getElementById('total-outstanding');
    const latestPaymentList = document.getElementById('latest-payment-list');
    const paymentHistoryList = document.getElementById('payment-history-list'); // Accordion Container
    const loanListElement = document.getElementById('loan-list');
    const historyTotalPaidElement = document.getElementById('history-total-paid');
    const loanTotalAmountElement = document.getElementById('loan-total-amount');

    // Functions to render data
    const renderSummary = () => {
        const totalLoanAmount = allLoans.reduce((sum, loan) => sum + loan.amount, 0);
        const totalPaidAmount = allPayments.reduce((sum, payment) => sum + payment.amount, 0);
        const totalOutstandingAmount = totalLoanAmount - totalPaidAmount;

        totalLoanElement.textContent = `${totalLoanAmount.toLocaleString()} บาท`;
        totalPaidElement.textContent = `${totalPaidAmount.toLocaleString()} บาท`;
        totalOutstandingElement.textContent = `${totalOutstandingAmount.toLocaleString()} บาท`;

        // ลูกเล่น: Pulse Animation สำหรับยอดคงเหลือ 0
        if (totalOutstandingAmount === 0) {
            totalOutstandingElement.classList.add('zero-balance');
        } else {
            totalOutstandingElement.classList.remove('zero-balance');
        }

        localStorage.setItem('totalPaidAmount', totalPaidAmount);
        localStorage.setItem('totalOutstandingAmount', totalOutstandingAmount);

        renderLatestPayments();
    };

    const renderLatestPayments = () => {
        latestPaymentList.innerHTML = '';
        const latestPayments = allPayments.slice(0, 5); 
        
        if (latestPayments.length === 0) {
            latestPaymentList.innerHTML = '<li class="list-group-item text-center text-muted">ไม่พบรายการชำระเงินล่าสุด</li>';
        } else {
            latestPayments.forEach(payment => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.innerHTML = `
                    <div>
                        <small class="text-muted">วันที่ ${payment.date}</small>
                        <span class="d-block fw-bold">${payment.description}</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <span class="fw-bold text-success">+ ${payment.amount.toLocaleString()} บาท</span>
                        ${payment.slip ? `<button class="btn btn-sm view-slip-btn" data-slip-url="${payment.slip}" data-bs-toggle="modal" data-bs-target="#slipModal"><i class="fas fa-image"></i></button>` : ''}
                    </div>
                `;
                latestPaymentList.appendChild(listItem);
            });
        }
    };

    // ฟังก์ชันสร้าง Accordion สำหรับประวัติชำระ
    const renderPaymentHistory = () => {
        const totalPaidAmount = allPayments.reduce((sum, payment) => sum + payment.amount, 0);
        historyTotalPaidElement.textContent = `${totalPaidAmount.toLocaleString()} บาท`;

        paymentHistoryList.innerHTML = '';
        
        // 1. Group Payments by Year
        const paymentsByYear = allPayments.reduce((acc, payment) => {
            const year = payment.year;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(payment);
            return acc;
        }, {});
        
        // Sort years in descending order
        const sortedYears = Object.keys(paymentsByYear).sort((a, b) => b - a);

        // 2. Render Accordion for each year
        sortedYears.forEach(year => { // ลบ index ออก เพราะไม่ใช้เงื่อนไข isFirst
            const payments = paymentsByYear[year];
            const yearTotal = payments.reduce((sum, p) => sum + p.amount, 0);
            const accordionId = `collapse-year-${year}`;
            
            // *** การแก้ไข: ลบเงื่อนไข isFirst ออก และใช้ 'collapsed' และ '' แทน 'show' เพื่อให้ปิดทั้งหมด ***
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item history-accordion-item animate__animated animate__fadeInUp'; 
            
            accordionItem.innerHTML = `
                <h2 class="accordion-header" id="heading-${year}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${accordionId}" aria-expanded="false" aria-controls="${accordionId}">
                        <div class="d-flex justify-content-between w-100 pe-3">
                            <span>ผ่อนชำระปี ${year}</span>
                            <span class="text-success fw-bold">${yearTotal.toLocaleString()} บาท</span>
                        </div>
                    </button>
                </h2>
                <div id="${accordionId}" class="accordion-collapse collapse" aria-labelledby="heading-${year}" data-bs-parent="#payment-history-list">
                    <div class="accordion-body p-0">
                        <ul class="list-group list-group-flush">
                            ${payments.map(payment => `
                                <li class="list-group-item d-flex justify-content-between align-items-center history-item">
                                    <div class="d-flex flex-column">
                                        <small class="text-muted">วันที่ ${payment.date}</small> 
                                        <span class="d-block">${payment.description}</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="fw-bold text-success">+ ${payment.amount.toLocaleString()} บาท</span>
                                        ${payment.slip ? `<button class="btn btn-sm view-slip-btn" data-slip-url="${payment.slip}" data-bs-toggle="modal" data-bs-target="#slipModal"><i class="fas fa-image"></i></button>` : ''}
                                    </div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
            // ***************************************************************************************
            
            paymentHistoryList.appendChild(accordionItem);
        });
    };

    const renderLoanList = () => {
        const totalLoanAmount = allLoans.reduce((sum, loan) => sum + loan.amount, 0);
        loanTotalAmountElement.textContent = `${totalLoanAmount.toLocaleString()} บาท`;
        
        loanListElement.innerHTML = '';
        allLoans.forEach(loan => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center loan-item';
            listItem.innerHTML = `
                <div>
                    <small class="text-muted">วันที่ ${loan.date}</small>
                    <span class="d-block fw-bold">${loan.description}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold text-danger">${loan.amount.toLocaleString()} บาท</span>
                    ${loan.slip ? `<button class="btn btn-sm view-slip-btn" data-slip-url="${loan.slip}" data-bs-toggle="modal" data-bs-target="#slipModal"><i class="fas fa-image"></i></button>` : ''}
                </div>
            `;
            loanListElement.appendChild(listItem);
        });
    };

    // Tab switching logic
    tabItems.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.currentTarget.dataset.tab;

            // Handle URL changes for Admin tab without changing the active tab
            if (e.currentTarget.getAttribute('href') === 'flex.html') {
                 window.location.href = 'flex.html';
                 return;
            }

            tabItems.forEach(item => {
                if (item.getAttribute('href') !== 'flex.html') { // ไม่ต้องลบคลาส active จาก Admin
                    item.classList.remove('active');
                }
            });
            e.currentTarget.classList.add('active');

            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
                pane.classList.remove('animate__fadeIn');
                pane.classList.add('animate__fadeOut');
            });
            
            const targetPane = document.getElementById(targetTab);
            targetPane.classList.remove('animate__fadeOut');
            targetPane.classList.add('animate__fadeIn', 'active');
            
            // Re-render content for the newly active tab
            if (targetTab === 'summary-tab') {
                renderSummary();
            } else if (targetTab === 'history-tab') {
                renderPaymentHistory();
            } else if (targetTab === 'loan-tab') {
                renderLoanList();
            }
        });
    });

    // Slip display logic
    const slipModalElement = document.getElementById('slipModal');
    if (slipModalElement) {
        slipModalElement.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const slipUrl = button.getAttribute('data-slip-url');
            const modalImage = slipModalElement.querySelector('#modalSlipImage');
            modalImage.src = slipUrl;
        });
    }

    // Initial render
    renderSummary();
    // เมื่อเปิดหน้ามาครั้งแรกจะ renderSummary() และ renderPaymentHistory() จะถูกเรียกเมื่อกดแท็บ
});
