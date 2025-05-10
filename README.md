# John Anderson Portfolio

A modern, responsive portfolio website showcasing the work of **John Anderson**, a Full Stack Developer. Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, this site features dark mode, animated backgrounds, and interactive skill visualizations. 

> **Keywords:** Full Stack Developer portfolio, React Vite Tailwind, TypeScript portfolio, dark mode website, animated backgrounds

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Key Components](#key-components)
- [SEO & Accessibility](#seo--accessibility)
- [Contributing](#contributing)
- [License](#license)

## Demo

Live site: [https://your-domain.com](https://your-domain.com)
LinkedIn Account: ["https://www.linkedin.com/posts/muhammad-jareer_ive-updated-my-linkedin-profile-url-activity-7326869277641216000-WI7y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfrBVkBRt4TpEgTOa4ikdwvAPeMCv5O8K8"]

## Features

- **Mobile‑First Responsive Design** – Fluid layouts across all screen sizes.
- **Dark / Light Mode Toggle** – Powered by a custom `useTheme` hook and Tailwind CSS dark variants.
- **Animated Background** – Interactive particle effects via `react-tsparticles` and floating gradient borders.
- **Interactive Skill Visualization** – Dynamic `SkillSection` with skill bars and progress indicators.
- **Seamless Navigation** – Client‑side routing with React Router DOM.
- **Performance Optimized** – Vite for instant HMR and optimized production builds.

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install     # or yarn install

# Start development server
npm run dev     # or yarn dev
```

## Usage

- Open your browser at `http://localhost:5173`.
- Use the theme toggle in the top-right corner to switch between light and dark modes.
- Navigate through sections: Home, Education, Certifications, Skills, Platforms.

## Tech Stack

- **Framework**: React, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Animation**: Framer Motion, react-tsparticles
- **Routing**: React Router DOM
- **State Management**: React Context (e.g. `useTheme`)

## Key Components

- **`ParticlesBackground`** &mdash; Configurable particle animation backdrop.
- **`FloatingDecorativeCircle`** &mdash; Pulsing gradient‑border circles supporting dark / light themes.
- **`SkillSection`** &mdash; Detailed skill bars and dynamic theme support.
- **`NavigationSection`** &mdash; Interactive cards linking to portfolio sections.

## SEO & Accessibility

- **Semantic HTML** – Proper use of headings (`<h1>`–`<h6>`), sections, and landmarks.
- **Meta Tags** &mdash; Add to `<head>` for enhanced SEO and social sharing:
  ```html
  <!-- Basic SEO Meta Tags -->
  <meta name="description" content="John Anderson's portfolio showcasing Full Stack Developer skills and projects, built with React, Vite, and Tailwind CSS.">
  <meta name="keywords" content="John Anderson portfolio, full stack developer, React, Vite, Tailwind CSS, TypeScript">
  <meta property="og:title" content="John Anderson Portfolio">
  <meta property="og:description" content="Explore John Anderson’s projects, skills, and professional background.">
  <meta property="og:image" content="/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  ```
- **Accessibility** – ARIA labels for interactive elements, keyboard‑navigable, descriptive alt text for images.

## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

Please review the [contribution guidelines](CONTRIBUTING.md) before submitting.

## License

Distributed under the [MIT License](LICENSE).
