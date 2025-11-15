# 📰 News Today - Modern News Feed Application

A responsive news aggregation web application built with React and powered by GNews API. Features real-time news updates, category filtering, search functionality, and a beautiful user interface.

![News Today](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.2-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Live Demo

[View Live Application](https://news-feed-pi.vercel.app)

## ✨ Features

- **🔍 Smart Search** - Search for news articles across multiple sources
- **📑 Category Filtering** - Browse news by categories (Tech, Business, Sports, Health, etc.)
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **⚡ Fast Loading** - Powered by Vite for lightning-fast development and builds
- **🎨 Modern UI** - Clean, intuitive interface with smooth animations
- **♿ Accessible** - Built with accessibility best practices
- **🌐 Real-time Updates** - Latest news from trusted sources worldwide
- **💾 State Management** - Custom React hooks for efficient data fetching
- **🔄 Error Handling** - Graceful error states with retry functionality
- **⏱️ Debounced Search** - Optimized API calls with search debouncing

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.2
- **Styling:** Tailwind CSS 3.0
- **HTTP Client:** Axios 1.13.2
- **Icons:** React Icons 5.5.0
- **API:** GNews API
- **Deployment:** Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.19.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git**

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/leogabson/news-feed.git
cd news-feed-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your GNews API Key

1. Visit [GNews.io](https://gnews.io/)
2. Sign up for a free account
3. Copy your API key from the dashboard

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_NEWS_API_KEY=your_gnews_api_key_here
VITE_NEWS_API_BASE_URL=https://gnews.io/api/v4
```

**⚠️ Important:** Replace `your_gnews_api_key_here` with your actual GNews API key.

### 5. Run the development server

```bash
npm run dev
```

The application will open at `http://localhost:5173/`

## 📦 Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `VITE_NEWS_API_KEY`
   - `VITE_NEWS_API_BASE_URL`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard
6. Deploy!

## 📂 Project Structure

```
news-feed-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons
│   ├── components/        # React components
│   │   ├── common/       # Reusable components (Button, Loader, etc.)
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── news/         # News-specific components
│   ├── hooks/            # Custom React hooks
│   │   ├── useNews.js    # News fetching hook
│   │   └── useDebounce.js # Search debounce hook
│   ├── services/         # API services
│   │   └── newsApi.js    # GNews API integration
│   ├── utils/            # Utility functions
│   │   ├── constants.js  # App constants
│   │   └── helpers.js    # Helper functions
│   ├── App.jsx           # Main app component
│   ├── App.css           # App styles
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── .env                   # Environment variables (not committed)
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🎨 Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🔑 Key Features Explained

### Custom Hooks

- **useNews**: Manages news fetching, loading states, and errors
- **useDebounce**: Optimizes search by delaying API calls

### Responsive Design

The app is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Error Handling

- Network errors
- API errors
- Empty states
- Retry functionality

## 🐛 Troubleshooting

### Images not loading?

- Check if you're using `image` field (GNews) instead of `urlToImage` (News API)
- Verify fallback images are working

### API errors?

- Verify your API key is correct in `.env`
- Check if you've exceeded your API quota (100 requests/day for free tier)
- Ensure `.env` file is in the root directory

### Build errors?

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear cache: `npm cache clean --force`

## 📝 API Limitations (Free Tier)

- **Max articles per request:** 10
- **Rate limit:** 100 requests/day
- **Language:** English only
- **Country:** US news (can be changed in constants)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Leogabson**

- GitHub: [@leogabson](https://github.com/leogabson)
- Email: gabrielehuwa92gmail.com

## 🙏 Acknowledgments

- [GNews API](https://gnews.io/) for providing news data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting

## 📞 Support

For support, email gabrielehuwa92@gmail.com or open an issue in the repository.

---

⭐ **Star this repo if you found it helpful!**
