# My Private Kitchen 🍳

> A warm personal kitchen — a pure frontend web app for recipe browsing, meal ordering, and cooking progress tracking

**My Private Kitchen** is a full-featured recipe management system designed for home kitchen scenarios. Built upon a meticulously curated collection of 296 Chinese dishes, it offers an elegant ordering interface, a complete shopping cart and checkout flow, plus robust recipe CRUD and cooking progress tracking. The entire application runs entirely in the browser with zero backend dependencies.

<p align="center">
  <img src="https://img.shields.io/badge/recipes-296-orange" alt="296 recipes">
  <img src="https://img.shields.io/badge/categories-15-orange" alt="15 categories">
  <img src="https://img.shields.io/badge/pure--frontend-localStorage-brightgreen" alt="pure frontend">
</p>

---

## ✨ Features

### 🛒 Ordering Experience
- **Category Browsing**: 15 categories (Stir-fry, Braised, Steamed, Soups…), one-click switching
- **Real-time Search**: Instantly filter by dish name or ingredient within the current category
- **Shopping Cart**: Multi-select with quantity adjustment, bottom-sheet design for smooth interaction
- **Order Confirmation**: Warm confirmation card replacing cold browser dialogs
- **Order History**: Traceable history with ratings and feedback

### 📋 Recipe Management (CRUD)
- **Full-field Editing**: Name, category, difficulty, cooking time, image, ingredients, seasonings, steps — everything is editable
- **Search-based Management**: Quickly locate recipes by name, category, or ingredient keywords
- **Safe Deletion**: Confirmation-protected removal to prevent accidents

### 👨‍🍳 Cooking Tracking
- **Cook Count**: Track how many times each dish has been made
- **Mastered Badge**: 3+ five-star ratings unlocks the "Signature Dish" badge
- **Star Ratings**: Rate dishes (1-5 stars) and leave comments after meals

### ❤️ Favorites & More
- **Favorites**: One-click bookmarking with a dedicated category view
- **Today's Menu**: Auto-populated after order confirmation
- **Responsive Design**: Works seamlessly on desktop and mobile

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Structure | HTML5 semantic markup |
| Styling | CSS3 custom properties, Flexbox, skeleton loading animation |
| Logic | Vanilla JavaScript (ES6+), SPA architecture |
| Storage | localStorage for persistence |
| Icons | Font Awesome 6 |
| Typography | System font stack (PingFang SC / Noto Sans SC) |

- **Zero dependencies**: No frontend framework or build tools
- **Zero server**: Pure static files; open `index.html` and go

---

## 🚀 Getting Started

### Option 1: Open directly
```bash
# Open index.html in your browser
open index.html
```

### Option 2: Local HTTP server (recommended)
```bash
# Python
python -m http.server 3000

# or Node.js
npx http-server -p 3000

# Then visit http://localhost:3000
```

> **Note**: Opening via `file://` protocol may cause cross-origin restrictions in some browsers. A local HTTP server is recommended.

---

## 📁 Project Structure

```
├── index.html          # Main page (SPA entry)
├── styles.css          # Global styles (warm cream palette)
├── script.js           # Core logic (RecipeManager + UIManager)
├── recipes-data.js     # 296 dish recipes (~209KB)
├── recipes.json        # JSON backup of recipe data
├── images/             # Dish images (~190 images)
└── CookLikeHOC-main/   # Upstream data source (see Acknowledgments)
```

### Core Modules

- **`RecipeManager`** — Data engine: recipe loading, localStorage persistence, cart state, order management, rating system
- **`UIManager`** — UI controller: three-page routing (Order / Browse / Manage), modal rendering, search & filter, form handling

---

## 📖 Usage Guide

### Order Page
1. Select a category tab to browse dishes
2. Use the search bar to filter within the current category
3. Click a dish card to view details (ingredients, seasonings, steps, reviews)
4. ❤️ to favorite, 🛒 to add to cart
5. Cart icon (top-right) → confirm order

### Manage Page
1. Switch to the "Manage" tab
2. Enter keywords in the search bar to find a recipe
3. Click "Edit" to enter full-field editing mode (auto-navigates to the form)
4. Click "Delete" to remove a recipe
5. Use the form below to add new recipes

### Orders & Reviews
1. After placing an order on the Order page, history appears under "Browse"
2. Pending orders can be marked "Complete"
3. Completed orders can receive 1-5 star ratings and text reviews
4. Reviews are displayed on the corresponding recipe's detail page

---

## 🎨 Design Language

| Property | Value |
|----------|-------|
| Primary | Warm cream `#FDF8F3` |
| Accent | Coral orange `#E07A5F` |
| Border radius | 8px / 16px / 24px / 999px |
| Card shadow | `0 2px 12px rgba(0,0,0,0.04)` |
| Typography | System font stack, Chinese-first PingFang SC |

The overall aesthetic is warm and gentle, suited for everyday home kitchen use.

---

## 🙏 Acknowledgments

### Recipe Data Source

All 296 recipes in this project are sourced from the open-source project **[CookLikeHOC](https://github.com/Gar-b-age/CookLikeHOC)**, curated and maintained by [@Gar-b-age](https://github.com/Gar-b-age) and community contributors.

CookLikeHOC is based on the publicly released [Laoxiangji Food Traceability Report](https://www.lxjchina.com.cn/display.asp?id=4226) and [Laoxiangji Food Traceability Report 2.0](https://www.lxjchina.com.cn/info.php?class_id=102106) by **Laoxiangji** (老乡鸡, "Home Original Chicken"), a well-known Chinese restaurant chain. The project systematically digitized the recipes, ingredient lists, and cooking steps from these reports. It is a purely community-driven effort with no commercial affiliation with the Laoxiangji brand.

Sincere thanks to:

- **[Gar-b-age](https://github.com/Gar-b-age)** — Project initiator, initial recipe data curation and structuring
- **[liucongg](https://github.com/liucongg)** — AI-drawn illustration version
- **[honestAnt](https://github.com/honestAnt)** — Docker deployment support
- **All CookLikeHOC community contributors** — Proofreading, supplementing, and ongoing maintenance
- **Laoxiangji (老乡鸡)** — Publishing the food traceability reports, promoting transparency in Chinese cuisine

> This project is a downstream application of CookLikeHOC data, focused on personal home kitchen recipe management and meal ordering. For the original data or more dish details, visit the [CookLikeHOC repository](https://github.com/Gar-b-age/CookLikeHOC) and its [live website](https://cooklikehoc.soilzhu.su).

---

## 📄 License

Recipe data inherits licensing from the CookLikeHOC project. Code is licensed under the MIT License.

---

## 🔮 Roadmap

- [ ] PWA offline support
- [ ] Data export/import (one-click JSON backup & restore)
- [ ] Auto-generated grocery shopping list
- [ ] Nutritional information display
- [ ] Multi-device data sync

---

<p align="center">
  <sub>Cook with heart, eat with love ❤️</sub>
</p>
