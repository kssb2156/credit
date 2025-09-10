document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');
    const paymentHistoryList = document.getElementById('payment-history-list');

    // Data for payment history, now including the year
    const allPayments = [
        // Payments for Year 2568
        { date: '10/09/2568', amount: 20000, description: 'ชำระเงินงวดที่ 2', year: 2568 },
        { date: '01/09/2568', amount: 10000, description: 'ชำระเงินงวดที่ 1', year: 2568 },
        // Payments for Year 2567
        { date: '06/12/2567', amount: 2000, description: 'ชำระบางส่วน', year: 2567 },
        { date: '06/11/2567', amount: 2000, description: 'ชำระบางส่วน', year: 2567 },
        { date: '05/10/2567', amount: 2000, description: 'ชำระบางส่วน', year: 2567 },
        { date: '05/09/2567', amount: 2000, description: 'ชำระบางส่วน', year: 2567 },
        { date: '07/08/2567', amount: 10000, description: 'ชำระบางส่วน', year: 2567 },
    ];

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
            yearList.className = 'list-group list-group-flush year-list';

            paymentsByYear[year].forEach((payment, index) => {
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
                    ${isPayment ? `<button class="btn btn-sm view-slip-btn" data-bs-toggle="modal" data-bs-target="#slipModal${index + 1}"><i class="fas fa-image"></i></button>` : ''}
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
});
