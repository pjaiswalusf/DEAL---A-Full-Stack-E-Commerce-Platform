# 🛍️ DEAL - A Full-Stack E-Commerce Platform  

![DEAL Thumbnail](assets/thumbnail.jpg)  

A modern e-commerce platform inspired by TEMU, built with **Next.js 15, React 19, Prisma, and Stripe** for a seamless shopping experience. Users can **browse products, add items to cart, make secure payments, and engage with gamification elements like Spin the Wheel**.  

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![Next.js](https://img.shields.io/badge/Next.js%2015-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React%2019-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)  
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  

---

## 🚀 Features  

✅ **User Authentication** (Sign-up, Sign-in, Guest Checkout)  
✅ **Product Listings & Categories** - Browse, search, and filter products  
✅ **Persistent Shopping Cart** - Cart remains the same even after login  
✅ **Secure Payments** - Integrated **Stripe** for transaction processing  
✅ **Gamification with Spin the Wheel** - Users can win free products  
✅ **Sanity.io CMS** - Admin panel for seamless product management  
✅ **Optimized Performance** - SSR, ISR, and client-side rendering for a faster experience  
✅ **Analytics with Umami** - Track user engagement and sales metrics  
✅ **Deployed on Vercel** - High availability and **<1.2s page load time**  

---

## 🏗️ Tech Stack  

### **Frontend**  
- **Next.js 15**  
- **React 19**  
- **TailwindCSS**  
- **TypeScript**  

### **Backend**  
- **Next.js API Routes**  
- **Prisma ORM**  
- **PostgreSQL**  

### **Payments & Analytics**  
- **Stripe** - Secure online payments  
- **Umami Analytics** - Track user traffic  

### **CMS & Deployment**  
- **Sanity.io** - Headless CMS for managing product data  
- **Vercel** - Deployment and hosting  

---

## 📦 Installation & Setup  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/DEAL-ecommerce.git
cd DEAL-ecommerce

2️⃣ Install Dependencies

npm install
# or
yarn install

3️⃣ Set Up Environment Variables

Rename .env.example to .env and fill in the necessary values:

DATABASE_URL="postgresql://..."
NEXT_PUBLIC_STRIPE_KEY="..."
SANITY_PROJECT_ID="..."

4️⃣ Set Up the Database

npx prisma db push
npx prisma generate

5️⃣ Run the Development Server

npm run dev
# or
yarn dev

🔗 Visit http://localhost:3000 to see the project live!

🚀 Deployment

Vercel is recommended for deployment:

vercel deploy

Ensure environment variables are configured in Vercel settings before deployment.

📝 License

This project is MIT Licensed. See the LICENSE file for more details.

🙌 Acknowledgments
	•	Inspired by TEMU’s UI & shopping experience
	•	Built using Next.js, Prisma, and Stripe
	•	Documentation references:
	•	Next.js Docs
	•	Prisma Docs
	•	TailwindCSS Docs

🔥 Feel free to fork, contribute, and star this repo if you like it! 🚀

This README.md ensures clarity, professionalism, and easy navigation for visitors. Let me know if you want any modifications! 🚀
