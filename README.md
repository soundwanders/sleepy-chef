# 👩‍🍳 Sleepy Chef

> **Time-Saving Treats: 30 Minute Recipes for Busy Chefs**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-sleepychef.vercel.app-blue?style=flat-square)](https://sleepychef.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-13.5.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.1.2-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.5.0-green?style=flat-square&logo=mongodb)](https://mongodb.com/)

## 🍽️ About

Sleepy Chef is a modern recipe discovery platform designed for busy people who want delicious meals in 30 minutes or less. Search recipes by type, ingredient, or name, and discover your next favorite dish with our intuitive interface and smart filtering system.

### ✨ Key Features

- **Smart Search**: Find recipes by type, ingredient, or name with intelligent filtering
- **30-Minute Focus**: All recipes designed for quick preparation
- **Recipe Submission**: Community-driven recipe collection with moderated submissions
- **Responsive Design**: Optimized for desktop and mobile experiences
- **Dark Mode**: Toggle between light and dark themes
- **Interactive UI**: Smooth animations and modern design patterns

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn
- MongoDB database (for recipe submissions)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/soundwanders/sleepy-chef.git
   cd sleepy-chef
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_RECAPTCHA_SITEKEY=your_hcaptcha_site_key
   RECAPTCHA_SECRET=your_hcaptcha_secret_key
   ELASTIC_EMAIL=your_email_service_user
   ELASTIC_PASSWORD=your_email_service_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Tech Stack

### Frontend
- **Next.js 13** - React framework with SSR/SSG
- **React 18** - UI library with hooks and context
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **SWR** - Data fetching with caching

### Backend & Database
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - Document database for recipe storage
- **HCaptcha** - Bot protection for form submissions

### Development & Testing
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting

## 📁 Project Structure

```
sleepy-chef/
├── components/          # React components
│   ├── form/           # Recipe submission form components
│   ├── nav/            # Navigation components
│   ├── recipes/        # Recipe display components
│   └── ui/             # Reusable UI components
├── pages/              # Next.js pages and API routes
│   ├── api/            # API endpoints
│   ├── id/             # Dynamic recipe pages
│   └── types/          # Recipe type pages
├── data/               # Recipe database and context
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # CSS and styling
└── __tests__/          # Test files
```

## 🔧 Core Features

### Recipe Search & Discovery
- **Multi-parameter search**: Type, ingredient, or recipe name
- **Smart filtering**: Intelligent matching with fallback options
- **Sorting options**: Name (A-Z, Z-A) and preparation time
- **Category browsing**: Dedicated pages for each recipe type

### Recipe Submission System
- **Form validation**: Client and server-side validation
- **Rate limiting**: Prevents spam submissions
- **Moderation workflow**: Admin approval system via email notifications
- **Local storage**: Auto-save form progress
- **Bot protection**: HCaptcha integration

### Performance & UX
- **Static Site Generation**: Pre-rendered pages for optimal performance
- **Progressive loading**: Skeleton screens and loading animations
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Dark mode**: System preference detection with manual toggle

## 🧪 Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

The project includes comprehensive tests for:
- Form validation and submission
- Search functionality
- Component rendering
- API endpoints

## 📊 API Reference

### Get Recipes
```http
GET /api/recipes?type={type}&ingredient={ingredient}&name={name}
```

**Parameters:**
- `type` (optional): Recipe category (beef, chicken, pasta, etc.)
- `ingredient` (optional): Ingredient to search for
- `name` (optional): Recipe name to search for

**Response:**
```json
[
  {
    "id": 1,
    "name": "Recipe Name",
    "types": ["chicken", "soup"],
    "time": "25 minutes",
    "vegetarian": false,
    "vegan": false,
    "ingredients": ["ingredient1", "ingredient2"],
    "nutrition": { "calories": "400", "fat": "10g" },
    "directions": ["step1", "step2"]
  }
]
```

### Submit Recipe
```http
POST /api/submit-recipe
```

**Body:**
```json
{
  "recipeData": "stringified_recipe_object",
  "token": "hcaptcha_token",
  "userId": "unique_user_id"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### Manual Deployment

```bash
npm run build
npm start
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** for new functionality
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Icons**: [Freepik](https://www.flaticon.com/authors/freepik) from Flaticon
- **Font Optimization**: Glyphhanger for web font subsetting
- **Inspiration**: Built with ❤️ for busy  cooks everywhere

---

<div align="center">
  <strong>Go to bed on a full belly! 🍳</strong>
</div>