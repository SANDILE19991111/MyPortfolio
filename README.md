# Sandile Khoza - Developer Portfolio

A modern, futuristic portfolio website for Sandile Khoza, Computer Science & Mathematics Graduate from Northwest University (NWU). Showcasing expertise in Software Engineering and Networking.

## Features

- **Modern & Futuristic Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Eye-friendly dark theme with vibrant accent colors
- **Interactive Sections**:
  - Hero section with call-to-action
  - About section with skill progress bars
  - Featured projects showcase
  - Comprehensive skills & expertise display
  - Contact form with social links
- **Performance Optimized**: Fast loading times with Vite bundler
- **Smooth Animations**: Framer Motion animations throughout
- **Modern Tech Stack**: React 18, Tailwind CSS 3, Vite

## Tech Stack

**Frontend:**
- React 18.2
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)

**Build Tools:**
- Vite 5
- PostCSS
- Autoprefixer

## Installation

1. **Clone or Extract the Repository**
   ```bash
   cd "Sandile Dev Portfolio"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The portfolio will open automatically at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with mobile menu
│   ├── Hero.jsx            # Hero section with main CTA
│   ├── About.jsx           # About section with skills overview
│   ├── Projects.jsx        # Projects showcase
│   ├── Skills.jsx          # Technical skills & expertise
│   └── Contact.jsx         # Contact form & social links
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles & animations

public/
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Color Scheme

- **Primary**: `#00f0ff` (Cyan)
- **Secondary**: `#ff006e` (Pink/Magenta)
- **Accent**: `#8338ec` (Purple)
- **Dark**: `#0a0e27` (Very Dark Blue)
- **Darker**: `#050812` (Almost Black)

## Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Customization

### Update Content

1. **Hero Section**: Edit `src/components/Hero.jsx`
   - Change title, description, and stats
   - Update CTA button links

2. **About Section**: Edit `src/components/About.jsx`
   - Update bio and expertise descriptions
   - Modify skill progress percentages

3. **Projects**: Edit `src/components/Projects.jsx`
   - Add/remove projects
   - Update project descriptions and technologies
   - Link to live demos and GitHub repositories

4. **Skills**: Edit `src/components/Skills.jsx`
   - Add/remove skill categories
   - Update individual skills
   - Modify certification information

5. **Contact**: Edit `src/components/Contact.jsx`
   - Update contact form handling
   - Add actual social media links
   - Configure email service integration

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color',
  // ...
}
```

### Add Images

1. Place images in `src/assets/`
2. Import and use in components:
   ```javascript
   import myImage from '../assets/my-image.png'
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-build and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

Configure in `vite.config.js` and push to GitHub

## Integration

### Add Form Backend
Currently, the contact form logs to console. To enable email:
1. Integrate with services like Formspree, EmailJS, or your own backend
2. Update the `handleSubmit` function in `Contact.jsx`

### Add Analytics
Add Google Analytics or similar in `index.html`

### Add Blog Section
Create a new `Blog.jsx` component and integrate with a CMS

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Contributing

Feel free to fork and customize this portfolio for your own use!

## License

This project is open source and available under the MIT License.

## Credits

Built with passion using:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [Vite](https://vitejs.dev)

## Support

For questions or issues, please reach out through the contact form on the portfolio or via the social links provided.

---

**Last Updated**: May 2026
