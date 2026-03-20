const ANIMATION_TYPES = [
    { id: 'fade', label: 'Fade' },
    { id: 'slide-up', label: 'Slide Up' },
    { id: 'slide-down', label: 'Slide Down' },
    { id: 'slide-left', label: 'Slide Left' },
    { id: 'slide-right', label: 'Slide Right' },
    { id: 'scale', label: 'Scale' },
    { id: 'rotate', label: 'Rotate' },
    { id: 'bounce', label: 'Bounce' },
    { id: 'flip', label: 'Flip' },
    { id: 'swing', label: 'Swing' },
    { id: 'shake', label: 'Shake' },
    { id: 'zoom-in', label: 'Zoom In' },
];

const EASING_TYPES = [
    'linear', 
    'ease-in', 
    'ease-out', 
    'ease-in-out', 
    'cubic-bezier(0.4, 0, 0.2, 1)', 
    'cubic-bezier(0, 0, 0.2, 1)', 
    'cubic-bezier(0.4, 0, 1, 1)', 
    'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
];

const ELEMENT_TEMPLATES = {
    card: `
        <div class="card-preview">
            <div class="card-image">
                <div class="card-img-placeholder"></div>
                <div class="card-badge">Featured</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">Creative Project</h3>
                <p class="card-desc">A brief description of this amazing animated card element.</p>
                <div class="card-footer">
                    <div class="avatars">
                        <div class="avatar"></div>
                        <div class="avatar"></div>
                        <div class="avatar"></div>
                    </div>
                    <div class="card-link">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </div>
            </div>
        </div>
    `,
    button: `
        <button class="btn-preview">
            Get Started Now
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
    `,
    menu: `
        <div class="menu-preview">
            <div class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Profile</div>
            <div class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg> Notifications</div>
            <div class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg> Search</div>
            <div class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> Favorites</div>
            <div class="menu-item danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg> Delete</div>
        </div>
    `,
    text: `
        <div class="text-preview">
            <h2 class="text-title">MOTION IS <span class="text-muted">EVERYTHING.</span></h2>
            <p class="text-desc">Create stunning web animations with ease using our professional generator tool.</p>
        </div>
    `,
    icon: `
        <div class="icon-preview">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </div>
    `
};

// State
let state = {
    elementType: 'card',
    animationType: 'slide-up',
    duration: 0.6,
    delay: 0,
    easing: 'ease-out',
    repeat: 0,
    showCode: false
};

// DOM Elements
const elementSelector = document.getElementById('element-selector');
const animationSelector = document.getElementById('animation-selector');
const durationSlider = document.getElementById('duration-slider');
const delaySlider = document.getElementById('delay-slider');
const easingSelector = document.getElementById('easing-selector');
const repeatSelector = document.getElementById('repeat-selector');
const replayBtn = document.getElementById('replay-btn');
const previewContainer = document.getElementById('preview-container');
const currentElementLabel = document.getElementById('current-element-label');
const toggleCodeBtn = document.getElementById('toggle-code-btn');
const copyCodeBtn = document.getElementById('copy-code-btn');
const codeOverlay = document.getElementById('code-overlay');
const closeCodeBtn = document.getElementById('close-code-btn');
const codeOutput = document.getElementById('code-output');

// Initialize
function init() {
    // Populate Animation Types
    ANIMATION_TYPES.forEach(type => {
        const btn = document.createElement('button');
        btn.className = `animation-btn ${state.animationType === type.id ? 'active' : ''}`;
        btn.textContent = type.label;
        btn.dataset.id = type.id;
        btn.onclick = () => updateState({ animationType: type.id });
        animationSelector.appendChild(btn);
    });

    // Populate Easings
    EASING_TYPES.forEach(easing => {
        const option = document.createElement('option');
        option.value = easing;
        option.textContent = easing.replace('cubic-bezier', 'cb');
        if (easing === state.easing) option.selected = true;
        easingSelector.appendChild(option);
    });

    // Event Listeners
    elementSelector.querySelectorAll('.element-btn').forEach(btn => {
        btn.onclick = () => updateState({ elementType: btn.dataset.type });
    });

    durationSlider.oninput = (e) => {
        const val = parseFloat(e.target.value);
        document.getElementById('duration-val').textContent = val + 's';
        updateState({ duration: val });
    };

    delaySlider.oninput = (e) => {
        const val = parseFloat(e.target.value);
        document.getElementById('delay-val').textContent = val + 's';
        updateState({ delay: val });
    };

    easingSelector.onchange = (e) => updateState({ easing: e.target.value });

    repeatSelector.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.onclick = () => updateState({ repeat: parseInt(btn.dataset.val) });
    });

    replayBtn.onclick = playAnimation;
    toggleCodeBtn.onclick = () => updateState({ showCode: !state.showCode });
    closeCodeBtn.onclick = () => updateState({ showCode: false });
    copyCodeBtn.onclick = copyCode;

    renderPreview();
    playAnimation();
}

function updateState(newState) {
    state = { ...state, ...newState };
    
    // Update UI
    elementSelector.querySelectorAll('.element-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === state.elementType);
    });
    
    animationSelector.querySelectorAll('.animation-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.id === state.animationType);
    });

    repeatSelector.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.val) === state.repeat);
    });

    currentElementLabel.textContent = `${state.elementType} Animation`;
    codeOverlay.classList.toggle('hidden', !state.showCode);
    toggleCodeBtn.classList.toggle('active', state.showCode);

    if (newState.elementType) renderPreview();
    playAnimation();
    generateCode();
}

function renderPreview() {
    previewContainer.innerHTML = ELEMENT_TEMPLATES[state.elementType];
}

function playAnimation() {
    const el = previewContainer.firstElementChild;
    if (!el) return;

    // Reset
    el.style.opacity = '0';
    
    const keyframes = getKeyframes(state.animationType);
    const options = {
        duration: state.duration * 1000,
        delay: state.delay * 1000,
        easing: state.easing,
        iterations: state.repeat === -1 ? Infinity : (state.repeat + 1),
        fill: 'forwards'
    };

    el.animate(keyframes, options);
}

function getKeyframes(type) {
    switch (type) {
        case 'fade':
            return [{ opacity: 0 }, { opacity: 1 }];
        case 'slide-up':
            return [
                { opacity: 0, transform: 'translateY(30px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ];
        case 'slide-down':
            return [
                { opacity: 0, transform: 'translateY(-30px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ];
        case 'slide-left':
            return [
                { opacity: 0, transform: 'translateX(30px)' },
                { opacity: 1, transform: 'translateX(0)' }
            ];
        case 'slide-right':
            return [
                { opacity: 0, transform: 'translateX(-30px)' },
                { opacity: 1, transform: 'translateX(0)' }
            ];
        case 'scale':
            return [
                { opacity: 0, transform: 'scale(0.8)' },
                { opacity: 1, transform: 'scale(1)' }
            ];
        case 'rotate':
            return [
                { opacity: 0, transform: 'rotate(-15deg) scale(0.9)', transformOrigin: 'center' },
                { opacity: 1, transform: 'rotate(0) scale(1)', transformOrigin: 'center' }
            ];
        case 'bounce':
            return [
                { opacity: 0, transform: 'scale(0.3)', offset: 0 },
                { opacity: 1, transform: 'scale(1.05)', offset: 0.5 },
                { opacity: 1, transform: 'scale(0.9)', offset: 0.7 },
                { opacity: 1, transform: 'scale(1)', offset: 1 }
            ];
        case 'flip':
            return [
                { opacity: 0, transform: 'perspective(1000px) rotateX(-90deg)', transformOrigin: 'top' },
                { opacity: 1, transform: 'perspective(1000px) rotateX(0deg)', transformOrigin: 'top' }
            ];
        case 'swing':
            return [
                { transform: 'rotate(0deg)', transformOrigin: 'top center', offset: 0 },
                { transform: 'rotate(15deg)', transformOrigin: 'top center', offset: 0.2 },
                { transform: 'rotate(-10deg)', transformOrigin: 'top center', offset: 0.4 },
                { transform: 'rotate(5deg)', transformOrigin: 'top center', offset: 0.6 },
                { transform: 'rotate(-5deg)', transformOrigin: 'top center', offset: 0.8 },
                { transform: 'rotate(0deg)', transformOrigin: 'top center', offset: 1 }
            ];
        case 'shake':
            return [
                { transform: 'translateX(0)', offset: 0 },
                { transform: 'translateX(-10px)', offset: 0.1 },
                { transform: 'translateX(10px)', offset: 0.2 },
                { transform: 'translateX(-10px)', offset: 0.3 },
                { transform: 'translateX(10px)', offset: 0.4 },
                { transform: 'translateX(-10px)', offset: 0.5 },
                { transform: 'translateX(10px)', offset: 0.6 },
                { transform: 'translateX(-10px)', offset: 0.7 },
                { transform: 'translateX(10px)', offset: 0.8 },
                { transform: 'translateX(-10px)', offset: 0.9 },
                { transform: 'translateX(0)', offset: 1 }
            ];
        case 'zoom-in':
            return [
                { opacity: 0, transform: 'scale(1.5)' },
                { opacity: 1, transform: 'scale(1)' }
            ];
        default:
            return [{ opacity: 0 }, { opacity: 1 }];
    }
}

function generateCode() {
    const keyframes = getKeyframes(state.animationType);
    const animationName = `animate-${state.animationType}`;
    
    let css = `@keyframes ${animationName} {\n`;
    keyframes.forEach((kf, i) => {
        const step = i === 0 ? '  0%' : (i === keyframes.length - 1 ? '  100%' : `  ${Math.round(kf.offset * 100)}%`);
        css += `${step} {\n`;
        for (const [prop, val] of Object.entries(kf)) {
            if (prop === 'offset') continue;
            const cssProp = prop.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
            css += `    ${cssProp}: ${val};\n`;
        }
        css += `  }\n`;
    });
    css += `}\n\n`;
    
    css += `.animated-element {\n`;
    css += `  animation: ${animationName} ${state.duration}s ${state.easing} ${state.delay}s;\n`;
    css += `  animation-fill-mode: forwards;\n`;
    if (state.repeat !== 0) {
        css += `  animation-iteration-count: ${state.repeat === -1 ? 'infinite' : state.repeat + 1};\n`;
    }
    css += `}`;

    codeOutput.textContent = css;
}

function copyCode() {
    navigator.clipboard.writeText(codeOutput.textContent).then(() => {
        const originalText = copyCodeBtn.innerHTML;
        copyCodeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        setTimeout(() => {
            copyCodeBtn.innerHTML = originalText;
        }, 2000);
    });
}

init();
