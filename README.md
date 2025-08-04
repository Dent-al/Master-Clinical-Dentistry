# Master Clinical Dentistry Website

A modern, professional React website showcasing the Master of Clinical Dentistry (MClinDent) program for dental professionals seeking advanced postgraduate education.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional Layout**: Clean, modern design suitable for medical/dental education
- **Program Information**: Comprehensive details about the MClinDent program
- **Specializations**: Detailed information about available clinical disciplines
- **Key Highlights**: Program benefits and unique features
- **Fast Performance**: Built with Vite for optimal loading speeds

## Technology Stack

- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with Grid, Flexbox, and responsive design
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── ProgramOverview.jsx
│   ├── Specializations.jsx
│   ├── KeyHighlights.jsx
│   └── Footer.jsx      # Footer section
├── App.jsx             # Main App component
├── App.css             # Main styles
├── index.css           # Global styles
└── main.jsx            # React entry point
```

## Customization

### Colors
The website uses a professional color scheme:
- Primary Blue: `#2c5aa0`
- Accent Orange: `#f59e0b`
- Text Gray: `#4b5563`
- Background: `#ffffff` and `#f8fafc`

### Content
All content can be easily modified in the respective component files:
- Program information in `ProgramOverview.jsx`
- Specializations in `Specializations.jsx`
- Key highlights in `KeyHighlights.jsx`

## Contact

For questions about the MClinDent program, please contact:
- Email: info@masterclinicaldentistry.edu
- Phone: +1 (555) 123-4567

## License

This project is licensed under the MIT License.
