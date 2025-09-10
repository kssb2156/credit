document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const paymentHistoryList = document.getElementById('payment-history-list');
    const latestPaymentList = document.getElementById('latest-payment-list');
    
    // Data for payment history, now including the year and a slip URL
    // ข้อมูลรายการชำระเงินทั้งหมด
    const allPayments = [
        // Payments for Year 2568 (ปีล่าสุดอยู่บนสุด)
        { date: '05/09/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Sep6876dea1385ac5a259.jpg' },
        { date: '06/08/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/6Aug6826a4e7bb31ac56ea.jpg' },
        { date: '05/07/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Jul683b70a26be79e05b2.jpg' },
        { date: '05/06/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Jun6817876dc63a67150b.jpg' },
        { date: '05/05/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5May6866b0566fbf8a69e6.jpg' },
        { date: '05/04/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Apr688478585de6594cbc.jpg' },
        { date: '05/03/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Mar687b4bf84bbcd5dd42.jpg' },
        { date: '05/02/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Feb6877bf42aadb2dd0d3.jpg' },
        { date: '05/01/2568', amount: 2000, description: 'ชำระเงิน', year: 2568, slip: 'https://s.imgz.io/2025/09/10/5Jan68df2278be3efce80f.jpg' },

        // Payments for Year 2567
        { date: '06/12/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/6Dec67e965a793e431d4f0.png' },
        { date: '06/11/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/6Nov67d881c1ec862be5e5.jpg' },
        { date: '05/10/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/5Otc67c6b5e6bccac4f8c5.jpg' },
        { date: '05/09/2567', amount: 2000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/5Sep67d5900ad6baa87abd.jpg' },
        { date: '07/08/2567', amount: 10000, description: 'ชำระเงิน', year: 2567, slip: 'https://s.imgz.io/2025/09/10/7Aug6797898aa3fd75e2eb.jpg' },
    ];
    
    // ดึงข้อมูลไปแสดงในหน้า สรุป รายการชำระล่าสุด
    const renderLatestPayment = () => {
        // ล้างรายการเก่าออกก่อน
        latestPaymentList.innerHTML = '';
        
        // ดึงข้อมูล 2 รายการแรกจากอาร์เรย์ allPayments
        const latestPayments = allPayments.slice(0, 2); 

        // วนลูปเพื่อแสดงผลทีละรายการ
        latestPayments.forEach(payment => {
            const isPayment = payment.amount > 0;
            const itemClass = isPayment ? 'text-success' : 'text-danger';
            const sign = isPayment ? '+' : '';

            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                <div>
                    <small class="text-muted">วันที่ ${payment.date}</small>
                    <span class="d-block fw-bold">${payment.description}</span>
                </div>
                <span class="fw-bold ${itemClass}">${sign} ${payment.amount.toLocaleString()} บาท</span>
                ${isPayment && payment.slip ? `<button class="btn btn-sm view-slip-btn" data-slip-url="${payment.slip}" data-bs-toggle="modal" data-bs-target="#slipModal"><i class="fas fa-image"></i></button>` : ''}
            `;
            latestPaymentList.appendChild(listItem);
        });

        // ถ้าไม่มีรายการเลย ให้แสดงข้อความแจ้งเตือน
        if (latestPayments.length === 0) {
            latestPaymentList.innerHTML = '<li class="list-group-item text-center text-muted">ไม่พบรายการชำระเงินล่าสุด</li>';
        }
    };

    // Populate payment history
    const renderPaymentHistory = () => {
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
            // This is the line to fix the issue. We add 'd-none' to collapse the list by default.
            yearList.className = 'list-group list-group-flush year-list d-none';

            paymentsByYear[year].forEach(payment => {
                const isPayment = payment.amount > 0;
                const itemClass = isPayment ? 'text-success' : 'text-danger';
                const sign = isPayment ? '+' : '';

                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.innerHTML = `
                    <div>
                        <span class="d-block fw-bold">${payment.description}</span>
                        <small class="text-muted">วันที่ ${payment.date}</small>
                    </div>
                    <span class="fw-bold ${itemClass}">${sign} ${payment.amount.toLocaleString()} บาท</span>
                    ${isPayment && payment.slip ? `<button class="btn btn-sm view-slip-btn" data-slip-url="${payment.slip}" data-bs-toggle="modal" data-bs-target="#slipModal"><i class="fas fa-image"></i></button>` : ''}
                `;
                yearList.appendChild(listItem);
            });
            yearGroup.appendChild(yearList);
            paymentHistoryList.appendChild(yearGroup);
        });

        // Add toggle functionality
        document.querySelectorAll('.year-header').forEach(header => {
            header.addEventListener('click', () => {
                const yearList = header.nextElementSibling;
                const icon = header.querySelector('.toggle-icon');
                yearList.classList.toggle('d-none');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            });
        });

        // Add slip display logic
        const slipModalElement = document.getElementById('slipModal');
        slipModalElement.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const slipUrl = button.getAttribute('data-slip-url');
            const modalImage = slipModalElement.querySelector('#modalSlipImage');
            modalImage.src = slipUrl;
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
        });
    });

    // Initial render
    renderPaymentHistory();
    renderLatestPayment(); // Call this function to display the latest items on the summary page.
});
