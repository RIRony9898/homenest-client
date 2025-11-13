# 🏠 HomeNest - Real Estate Listing Portal

HomeNest is a comprehensive real estate listing platform where property owners can post their available rentals or sale listings, and users can browse, search, and filter properties by location, price, or type. Built with modern web technologies, it provides a seamless experience for both property owners and seekers.

## 🌐 Live Site

[View Live Demo](https://homenest-real-estate.netlify.app/) (Replace with your actual deployment URL)

## ✨ Key Features

- **🏡 Property Listings**: Complete CRUD operations for property management with detailed property information
- **🔍 Advanced Search & Filter**: Search properties by name, sort by price or date with real-time filtering
- **⭐ Ratings & Reviews**: Interactive rating system with 1-5 star reviews for each property
- **🔐 Secure Authentication**: Email/password and Google OAuth authentication with protected routes
- **🌙 Dark/Light Mode**: Seamless theme switching with persistent user preferences
- **📱 Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **🎨 Modern UI/UX**: Beautiful gradient designs with smooth animations and transitions
- **⚡ Real-time Updates**: Instant UI updates without page refreshes for better user experience
- **🛡️ Private Routes**: Protected routes for property management and user-specific features
- **📊 Dashboard Features**: My Properties, My Ratings, and comprehensive property management

## 🛠️ Technology Stack

### Frontend

- **React 18** - Modern JavaScript library for building user interfaces
- **React Router** - Declarative routing for React applications
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **DaisyUI** - Component library built on top of Tailwind CSS
- **React Icons** - Popular icon library for React
- **React Stars** - Interactive star rating component
- **Swiper** - Modern mobile touch slider
- **React Toastify** - Toast notifications
- **SweetAlert2** - Beautiful alert dialogs
- **React Spinners** - Loading spinner components

### Backend

- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MongoDB** - NoSQL database for storing property and user data
- **CORS** - Cross-Origin Resource Sharing middleware

### Authentication & Hosting

- **Firebase Authentication** - Secure authentication service
- **Netlify** - Frontend hosting and deployment
- **Vercel** - Backend API hosting



## 📁 Project Structure

```
homenest/
├── homenest-client/          # React frontend
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── AuthContexts/    # Authentication context
│   │   ├── Components/      # Reusable UI components
│   │   │   ├── HomePage/    # Home page sections
│   │   │   └── ...
│   │   ├── Contexts/        # Theme context
│   │   ├── Firebase/        # Firebase configuration
│   │   ├── Hooks/           # Custom React hooks
│   │   ├── Layouts/         # Layout components
│   │   ├── Pages/           # Page components
│   │   ├── Routes/          # Routing configuration
│   │   └── ...
│   └── ...
└── homenest-server/          # Express backend
    ├── index.js            # Main server file
    └── package.json
```

## 🔗 API Endpoints

### Properties

- `GET /properties` - Get all properties (with search and sort)
- `GET /properties/:id` - Get single property
- `POST /properties` - Create new property
- `PATCH /properties/:id` - Update property
- `DELETE /properties/:id` - Delete property
- `GET /recent-properties` - Get recent properties (limit 6)
- `GET /my-properties` - Get user's properties

### Reviews

- `GET /reviews/:propertyId` - Get reviews for a property
- `GET /my-reviews` - Get user's reviews
- `POST /reviews` - Add new review

## 🎯 Usage

1. **Browse Properties**: Visit the home page to see featured properties and use the navigation
2. **Search & Filter**: Use the search bar and sorting options on the Properties page
3. **Authentication**: Register or login to access private features
4. **Add Properties**: Logged-in users can add new property listings
5. **Manage Properties**: Users can view, update, and delete their own properties
6. **Rate & Review**: Leave ratings and reviews for properties you've viewed

---
