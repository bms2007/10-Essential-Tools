const tools = [
    {
        name: "Image to PNG Converter",
        category: "Image Tools",
        description: "Convert any image to PNG format",
        url: "tools/image-to-png.html",
        icon: "🖼️"
    },
    {
        name: "Word Counter",
        category: "Text Tools",
        description: "Count words, characters, and sentences",
        url: "tools/word-counter.html",
        icon: "📝"
    },
    {
        name: "JSON Formatter",
        category: "Developer Tools",
        description: "Format and validate JSON data",
        url: "tools/json-formatter.html",
        icon: "💻"
    },
    {
        name: "BMI Calculator",
        category: "Health",
        description: "Calculate your Body Mass Index",
        url: "tools/bmi-calculator.html",
        icon: "🧮"
    },
    {
        name: "Password Generator",
        category: "Security",
        description: "Create strong, secure passwords",
        url: "tools/password-generator.html",
        icon: "🔒"
    },
    {
        name: "YouTube Thumbnail Downloader",
        category: "Social Media",
        description: "Download YouTube video thumbnails",
        url: "tools/youtube-thumbnail.html",
        icon: "📺"
    },
    {
        name: "QR Code Generator",
        category: "Utilities",
        description: "Generate QR codes for any text",
        url: "tools/qr-code-generator.html",
        icon: "🔳"
    },
    {
        name: "Age Calculator",
        category: "Calculators",
        description: "Calculate your exact age",
        url: "tools/age-calculator.html",
        icon: "📅"
    },
    {
        name: "Base64 Encoder",
        category: "Developer Tools",
        description: "Encode text to Base64",
        url: "tools/base64-encoder.html",
        icon: "🔤"
    },
    {
        name: "Currency Converter",
        category: "Finance",
        description: "Convert between world currencies",
        url: "tools/currency-converter.html",
        icon: "💵"
    }
];

function displayTools() {
    const container = document.getElementById('tools-container');
    
    tools.forEach(tool => {
        const toolCol = document.createElement('div');
        toolCol.className = 'col-md-4 col-sm-6 mb-4';
        toolCol.innerHTML = `
            <div class="card tool-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${tool.icon} ${tool.name}</h5>
                    <p class="card-text">${tool.description}</p>
                    <a href="${tool.url}" class="btn btn-primary">Use Tool</a>
                </div>
            </div>
        `;
        container.appendChild(toolCol);
    });
}

document.addEventListener('DOMContentLoaded', displayTools);