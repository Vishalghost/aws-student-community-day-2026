# AWS Student Community Day Chennai 2026 🚀

A modern, animated, and responsive website for AWS Student Community Day Chennai 2026, built with Next.js 14, TypeScript, and Tailwind CSS.

![AWS Community Day](public/img/aws.png)

## ✨ Features

### 🎨 Design & Animations
- **Smooth Scroll Animations**: Framer Motion powered scroll-triggered animations across all sections
- **Parallax Backgrounds**: Subtle Chennai cityscape and floating cloud animations
- **Interactive Hover Effects**: Cards, buttons, and elements with spring physics animations
- **Gradient Dark Theme**: Modern purple-orange gradient design with glassmorphism effects
- **Custom Scrollbar**: Gradient-styled scrollbar matching the theme

### 📱 Responsive Design
- Fully responsive across desktop, tablet, and mobile devices
- Mobile-first approach with optimized layouts
- Touch-friendly interactions

### 🎯 Key Sections
- **Hero Section**: Animated countdown timer to event date
- **Event Schedule**: Visual flowchart timeline with 3 parallel tracks (Gen-AI, Serverless, Security)
- **Featured Speakers**: Grid showcase of keynote speakers
- **Registration Plans**: Three pricing tiers (Early Bird, Standard, On-Spot)
- **Venue Information**: Google Maps integration with Sathyabama Institute details
- **Sponsors & Organizers**: Animated logo grids
- **FAQ Section**: Expandable accordion with common questions

### 🎭 Special Features
- Live countdown timer to February 15, 2026
- Flowchart-style event schedule with branching tracks
- Integrated lunch breaks within track timelines
- Smooth section transitions with stagger effects
- Background parallax elements (Chennai cityscape, clouds, lighthouse)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended) / Docker

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/Vishalghost/aws-student-community-day-2026-test-website.git

# Navigate to project directory
cd aws-student-community-day-2026-test-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build the image
docker build -t aws-community-day .

# Run the container
docker run -p 3000:3000 aws-community-day
```

### Docker Compose (Optional)

```bash
docker-compose up
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vishalghost/aws-student-community-day-2026-test-website)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
aws-community-nextjs/
├── app/
│   ├── favicon.ico          # AWS logo favicon
│   ├── globals.css          # Global styles + animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/
│   └── img/                 # Images and assets
│       ├── aws.png
│       ├── chennai.png      # Background cityscape
│       ├── cloud.png        # Parallax clouds
│       └── ...
├── reference-site/          # Reference GitHub resources
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose config
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Update Event Details

Edit `app/page.tsx`:

```typescript
// Event date for countdown
const eventDate = new Date('2026-02-15T09:00:00');

// Speaker information
const speakers = [
  { name: "Your Speaker", role: "Role", company: "Company" }
];

// Schedule tracks
const schedule = {
  tracks: {
    "Track Name": [
      { time: "10:00 AM", event: "Session", speaker: "Name" }
    ]
  }
};
```

### Modify Theme Colors

Edit `tailwind.config.js` or use Tailwind classes in components.

### Adjust Animations

Edit `app/globals.css` for animation speeds and effects:

```css
.cloud-float {
  animation-duration: 80s; /* Adjust cloud speed */
}

.chennai-shadow {
  opacity: 0.08; /* Adjust background opacity */
}
```

## 🎯 Animation Features

- **Scroll-triggered animations**: Elements fade in as you scroll
- **Stagger effects**: Cards appear sequentially with delays
- **Hover animations**: Scale, lift, and color transitions
- **Parallax backgrounds**: Clouds float across the viewport
- **Spring physics**: Natural, bouncy interactions

## 📸 Screenshots

### Desktop View
![Desktop Hero](screenshots/desktop-hero.png)
![Event Schedule](screenshots/schedule-flowchart.png)

### Mobile View
![Mobile View](screenshots/mobile-view.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **AWS Community**: For organizing the event
- **Sathyabama Institute**: Venue partner
- **Reference Site**: [AWS Cloud Club Chennai](https://github.com/AWSCCPanimalarChennai/aws-cloud-club-site)
- **Design Inspiration**: Modern web design trends and AWS branding

## 📞 Contact

For questions or support, please reach out to the AWS Student Community Day Chennai 2026 organizing team.

---

**Built with ❤️ for AWS Student Community Day Chennai 2026**

🔗 **Live Demo**: [Coming Soon]

⭐ **Star this repo** if you find it helpful!