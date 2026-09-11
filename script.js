// ১. Navigation Smooth Scroll (স্মুথ স্ক্রোলিং)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ২. Admission Button Action (ভর্তি তথ্যের পপ-আপ নোটিশ ও ফর্ম)
function showMessage() {
    const modalHTML = `
        <div id="customModal" style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.6); display: flex; align-items: center;
            justify-content: center; z-index: 2000; padding: 20px;">
            <div style="
                background: white; padding: 30px; border-radius: 10px;
                max-width: 450px; width: 100%; text-align: center;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3); border-top: 5px solid #c8a951;">
                <h3 style="color: #064d3a; margin-bottom: 10px;">Nūrul Ilm Madrasah</h3>
                <p style="color: #555; font-size: 14px; margin-bottom: 15px;">
                    Our official batch-based admission process will start for the <strong>2027 Academic Session</strong>.
                </p>
                <div style="background: #eef5f0; padding: 12px; border-radius: 5px; margin-bottom: 20px; font-size: 13px; color: #064d3a; text-align: left;">
                    📌 <strong>Target Programs:</strong><br>
                    • Qur’an Program (Qaida to Hifz)<br>
                    • Arabic Spoken (Junior & Senior)<br>
                    • Higher Arabic & Specialized Courses
                </div>
                <button onclick="closeModal()" style="
                    background: #064d3a; color: white; border: none; padding: 10px 20px;
                    border-radius: 5px; cursor: pointer; font-weight: bold;">
                    Got It
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// পপ-আপ বন্ধ করার ফাংশন
function closeModal() {
    const modal = document.getElementById('customModal');
    if (modal) {
        modal.remove();
    }
}

// ৩. Program Card Interactive Alert (প্রোগ্রাম কার্ডে ক্লিক করলে বিস্তারিত)
document.addEventListener('DOMContentLoaded', () => {
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const details = card.querySelector('p').innerText;
            alert(`📚 Course: ${title}\n📌 Modules: ${details}\n\nAdmission opens for 2027 session!`);
        });
    });
});