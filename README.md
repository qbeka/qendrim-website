# Qendrim Beka - Terminal Portfolio

A unique terminal-based portfolio with dual viewing modes and interactive commands.

## 🚀 Features

- **💻 Terminal Mode**: Navigate portfolio using terminal commands
- **🎨 Portfolio Mode**: Traditional portfolio view with 8-bit theme toggle
- **📄 Resume Viewer**: Built-in PDF viewer with fullscreen mode
- **⌨️ Command History**: Arrow keys to navigate previous commands
- **📂 Detail Views**: Nano/Vim-style editors for in-depth content
- **🔄 Dual Modes**: Switch between terminal and regular portfolio anytime

## 🎮 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📟 Terminal Commands

### General
- `!help` - Show all available commands
- `!clear` - Clear the terminal
- `!portfolio` - Switch to regular portfolio view
- `!about` - About Qendrim
- `!resume` - View resume (with fullscreen option)

### Navigation
- `!experience` - List all work experience
- `!experience/[id]` - View specific experience details
- `!education` - View education details
- `!skills` - List all technical skills
- `!projects` - List all projects
- `!projects/[id]` - View project details in editor
- `!involvement` - List leadership activities
- `!involvement/[id]` - View involvement details
- `!contact` - Get contact information
- `!socials` - Social media links

### Resume Controls
- `f` - Toggle fullscreen mode
- `q` or `Esc` - Close resume viewer

### Tips
- Use ↑/↓ arrow keys to navigate command history
- Press `q` or `Esc` to close detail views
- All commands start with `!`

## 🎨 Portfolio Mode

In portfolio mode, you get:
- Modern parchment aesthetic design
- 8-bit theme toggle (gamepad button)
- Smooth section navigation
- All sections on one scrollable page
- Terminal mode button to switch back

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Terminal.tsx           # Terminal UI & command processor
│   ├── PortfolioView.tsx      # Regular portfolio wrapper
│   ├── Navigation.tsx         # Portfolio mode navigation
│   ├── Hero.tsx              # About section
│   ├── ExperienceSection.tsx # Work & Education
│   ├── Projects.tsx          # Projects showcase
│   ├── Involvement.tsx       # Leadership activities
│   ├── Testimonials.tsx      # Recommendations
│   └── Contact.tsx           # Contact form
├── contexts/
│   ├── ViewModeContext.tsx   # Terminal/Portfolio switcher
│   └── ThemeContext.tsx      # 8-bit theme toggle
└── lib/
    └── terminalData.ts       # All content & data
```

## 📊 Projects Included

1. **Philo - A Thinking Journal** (25K+ users, $24K ARR)
2. **NeuroNavScore** (🏆 1st Place natHACKS 2024)
3. **Gmail Code Autofill Extension**
4. **ASL Hand Sign Recognition**
5. **US Election Voting Simulation**
6. **ML Rock Paper Scissors**
7. **Matrix Calculator Study Tool**

## 💼 Experience Highlights

- **Philo** - Founder (Oct 2025 - Present)
- **NAT** - Research & Development Intern (May 2025 - Present)
- **Government of Alberta** - Data Analyst (Summer 2025)
- **Index Competitive** - Founder/President (Mar 2025 - Present)

## 🛠️ Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios (for contact form integration)

## 📬 Contact

- **Email**: beka.qendrim1@gmail.com
- **GitHub**: [github.com/qbeka](https://github.com/qbeka)
- **LinkedIn**: [linkedin.com/in/qendrimbeka](https://www.linkedin.com/in/qendrimbeka/)
- **Calendly**: [calendly.com/beka-qendrim1](https://calendly.com/beka-qendrim1)

## 🎓 About

Qendrim Beka is a 3rd Year Computing Science student at the University of Alberta (Minor in Philosophy) with First Class Academic Standing. He's a competitor and builder passionate about creating impactful products.

---

Made with ❤️ and code by Qendrim Beka
