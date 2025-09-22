// ข้อมูลรายการชำระเงินทั้งหมด
const allPayments = [
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
    { date: '01/08/24', amount: 9000, description: 'ยืมผ่อนรถ', slip: 'https://s.imgz.io/2025/09/10/1Aug67e2abb23107bc6f1b.jpg' },
    { date: '25/07/24', amount: 9000, description: 'ยืมผ่อนรถ', slip: 'https://s.imgz.io/2025/09/10/25Jul67328173daebdd0db2.jpg' },
    { date: '21/07/24', amount: 500, description: 'ยืมเงิน', slip: 'https://s.imgz.io/2025/09/10/21Jul6786f410945249b9e1.jpg' },
    { date: '16/07/24', amount: 500, description: 'ยืมเงิน', slip: 'https://s.imgz.io/2025/09/10/16Jul6770754e5a51ee3b51.jpg' },
    { date: '12/07/24', amount: 500, description: 'ยืมเงิน', slip: 'https://s.imgz.io/2025/09/10/12Jul67b06c43f0d95e74ab.jpg' },
    { date: '05/07/24', amount: 3000, description: 'ยืมเงินไปเอารถเก๋ง', slip: 'https://s.imgz.io/2025/09/10/5Jul6785257a5cc28e4368.jpg' },
    { date: '03/07/24', amount: 1000, description: 'ยืมเงิน', slip: 'https://s.imgz.io/2025/09/10/3Jul670d31de48ed2eded3.jpg' },
    { date: '27/06/24', amount: 500, description: 'ยืมเงิน', slip: 'https://s.imgz.io/2025/09/10/27Jun677a243a441c64347a.jpg' },
    { date: '20/06/24', amount: 500, description: 'ยืมเงิน', slip:'https://s.imgz.io/2025/09/10/20Jun67a2989f0f50728d9b.jpg' },
    { date: '14/06/24', amount: 500, description: 'ยืมเงิน', slip: 'https://s.imgz.io/2025/09/10/14Jun676a25dbcf8a147eac.jpg' },
    { date: '13/06/24', amount: 400, description: 'ยืมเงิน', slip: 'https://s.imgz.io/2025/09/10/13Jun673f85f0358c0567cc.jpg' },
    { date: '07/06/24', amount: 10000, description: 'พี่แบงค์ยืม', slip: 'https://s.imgz.io/2025/09/10/7Jun675bd79ca6a5ef7458.jpg' },
    { date: '04/06/24', amount: 30000, description: 'พี่แบงค์ยืม', slip: 'https://s.imgz.io/2025/09/10/4Aug67d58e6072cc8715b4.jpg' },
];

document.addEventListener('DOMContentLoaded', () => {
    // เลือกเฉพาะแท็บที่มีคุณสมบัติ data-tab เท่านั้น
    const tabItems = document.querySelectorAll('[data-tab]');
    const totalLoanElement = document.getElementById('total-loan');
    const totalPaidElement = document.getElementById('total-paid');
    const totalOutstandingElement = document.getElementById('total-outstanding');
    const latestPaymentList = document.getElementById('latest-payment-list');
    const paymentHistoryList = document.getElementById('payment-history-list');
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

        // ✅ เพิ่มโค้ด 2 บรรทัดนี้เข้าไป เพื่อบันทึกค่าลง localStorage
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

    const renderPaymentHistory = () => {
        const totalPaidAmount = allPayments.reduce((sum, payment) => sum + payment.amount, 0);
        historyTotalPaidElement.textContent = `${totalPaidAmount.toLocaleString()} บาท`;

        paymentHistoryList.innerHTML = '';
        const paymentsByYear = allPayments.reduce((acc, payment) => {
            if (!acc[payment.year]) {
                acc[payment.year] = [];
            }
            acc[payment.year].push(payment);
            return acc;
        }, {});

        const sortedYears = Object.keys(paymentsByYear).sort((a, b) => b - a);

        sortedYears.forEach(year => {
            const yearGroup = document.createElement('div');
            yearGroup.className = 'year-group mb-4';
            const yearHeader = document.createElement('div');
            yearHeader.className = 'year-header d-flex justify-content-between align-items-center fw-bold mb-2 p-2 rounded';
            yearHeader.innerHTML = `
                <span>ปี ${year}</span>
                <i class="fas fa-chevron-down toggle-icon"></i>
            `;
            yearGroup.appendChild(yearHeader);
            const yearList = document.createElement('ul');
            yearList.className = 'list-group list-group-flush year-list d-none';
            paymentsByYear[year].forEach(payment => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.innerHTML = `
                    <div>
                        <span class="d-block fw-bold">${payment.description}</span>
                        <small class="text-muted">วันที่ ${payment.date}</small>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <span class="fw-bold text-success">+ ${payment.amount.toLocaleString()} บาท</span>
                        ${payment.slip ? `<button class="btn btn-sm view-slip-btn" data-slip-url="${payment.slip}" data-bs-toggle="modal" data-bs-target="#slipModal"><i class="fas fa-image"></i></button>` : ''}
                    </div>
                `;
                yearList.appendChild(listItem);
            });
            yearGroup.appendChild(yearList);
            paymentHistoryList.appendChild(yearGroup);
        });

        document.querySelectorAll('.year-header').forEach(header => {
            header.addEventListener('click', () => {
                const yearList = header.nextElementSibling;
                const icon = header.querySelector('.toggle-icon');
                yearList.classList.toggle('d-none');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            });
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

            tabItems.forEach(item => item.classList.remove('active'));
            e.currentTarget.classList.add('active');

            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');
            
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

    // Initial render for all tabs
    renderSummary();
    renderPaymentHistory();
    renderLoanList();
});
