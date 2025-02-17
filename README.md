# 🛍️ DEAL - A Full-Stack E-Commerce Platform  

🔗 **Live Website:** [[https://yourwebsite.com](https://temu-clone-omega.vercel.app/)]([https://yourwebsite.com](https://temu-clone-omega.vercel.app/))  

A modern e-commerce platform inspired by TEMU, built with **Next.js 15, React 19, Prisma, and Stripe** for a seamless shopping experience. Users can **browse products, add items to cart, make secure payments, and engage with gamification elements like Spin the Wheel**.  
 
[![Next.js](https://img.shields.io/badge/Next.js%2015-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React%2019-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)  
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)  
[![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=flat&logo=sanity&logoColor=white)](https://www.sanity.io/)  
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat&logo=stripe&logoColor=white)](https://stripe.com/)

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
git clone https://github.com/pjaiswalusf/DEAL---A-Full-Stack-E-Commerce-Platform
```

### **2️⃣ Install Dependencies**

```bash
npm install
# or
yarn install
```

### **3️⃣ Set Up Environment Variables**

Rename .env.example to .env and fill in the necessary values:
```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_STRIPE_KEY="..."
SANITY_PROJECT_ID="..."
```

### **4️⃣ Set Up the Database**

```bash
npx prisma db push
npx prisma generate
```

### **5️⃣ Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

🔗 Visit http://localhost:3000 to see the project live!

### **🚀 Deployment**


**Vercel** is recommended for deployment:

```bash
vercel deploy
```

Ensure environment variables are configured in Vercel settings before deployment.


### **🙌 Acknowledgments**
- Inspired by **TEMU’s UI & shopping experience**
- Built using **Next.js, Prisma, and Stripe**
- Documentation references:  
  - [Next.js Docs](https://nextjs.org/docs)  
  - [Prisma Docs](https://www.prisma.io/docs)  
  - [TailwindCSS Docs](https://tailwindcss.com/docs)  

