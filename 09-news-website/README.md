# News Portal Project

## 📌 Features

This project demonstrates the following:

* **React Router Loaders** – Used for fetching data before rendering pages.
* **News API Integration** – Fetch news dynamically from APIs.
* **Category Filtering** – View news by different categories.
* **Responsive Design** – Fully mobile-friendly using Tailwind CSS.
* **Reusable Components** – Cards, breadcrumbs, contact form, Google Maps embed.
* **Load More Button** – Load more news dynamically.

## 📂 Folder Structure

```
src/
├─ assets/        # Images and media (ads, banners, placeholders)
├─ components/    # Reusable components (NewsCard, Breadcrumb, GMap, etc.)
├─ pages/         # Page components (Home, News, Category, About, Contact)
├─ loaders/       # React Router loaders for fetching API data
├─ utils/         # Helper functions and API utilities (newsApi.js, helpers.js)
├─ App.jsx        # Main app router setup
└─ main.jsx       # Entry point
.env              # Local environment variables (VITE_NEWS_API_KEY)
```

## ⚡ Tech Stack

* **Frontend:** React, React Router
* **Styling:** Tailwind CSS
* **Data Fetching:** News API via `newsApi.js`
* **State Management:** React useState, useEffect

## 🚀 Getting Started (Local Development)

1. **Clone the repository**

```bash
git clone https://github.com/nazrulrafi/react-personal-projects.git
cd 09-news-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the root directory and add your NewsAPI key (get it from [https://newsapi.org/](https://newsapi.org/)):

```
VITE_NEWS_API_KEY=your_newsapi_key_here
```

4. **Run the local development server**

```bash
npm run dev
```

* Open your browser at `http://localhost:5173`
* The site will fetch news directly from NewsAPI using your key.
