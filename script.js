const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteer-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const captcha = formData.get('captcha');
        const message = formData.get('message');

        if (captcha != 21) {
            console.log('CAPTCHA validation failed. Please try again.');
            return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('CAPTCHA:', captcha);
        console.log('Message:', message);

        form.reset();
    });
});


function openModal(donationAmount) {
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modal-text');
    const qrCode = document.getElementById('qr-code');
    modalText.textContent = `Scan to donate.`;

    let qrCodeSrc = '';
    switch (donationAmount) {
        case '₹10':
            qrCodeSrc = './img/qr.jpg';
            break;
        case '₹50':
            qrCodeSrc = './img/qr.jpg';
            break;
        case '₹100':
            qrCodeSrc = './img/qr.jpg';
            break;
        default:
            qrCodeSrc = './img/qr.jpg';
            break;
    }
    qrCode.src = qrCodeSrc;

    modal.style.display = 'flex';
}

document.querySelector('.close').onclick = function () {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}