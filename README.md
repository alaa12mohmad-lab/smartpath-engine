# ⚡ SmartPath Engine — دليل الإعداد

## الخطوة 1 — إنشاء مشروع Firebase

1. افتح [Firebase Console](https://console.firebase.google.com)
2. اضغط **Add project** → اكتب اسم (مثلاً `smartpath-engine`) → Continue
3. من القائمة الجانبية: **Build → Firestore Database**
4. اضغط **Create database** → اختر **Start in test mode** → Next → Enable
5. من القائمة الجانبية: **Project Settings** (أيقونة الترس)
6. انزل لـ **Your apps** → اضغط **</>** (Web)
7. اكتب اسم التطبيق → Register app
8. **انسخ** الـ `firebaseConfig` object

## الخطوة 2 — ضع بيانات Firebase في الكود

افتح `src/firebase.js` وضع بياناتك بدل الـ REPLACE_WITH_...:

```js
const firebaseConfig = {
  apiKey:            "AIzaSy...",
  authDomain:        "my-project.firebaseapp.com",
  projectId:         "my-project",
  storageBucket:     "my-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123",
}
```

## الخطوة 3 — إنشاء Repository على GitHub

1. افتح [github.com](https://github.com) → **New repository**
2. اسم الـ repo: `smartpath-engine`
3. اجعله **Public** → Create repository
4. ارفع كل الملفات:

```bash
cd smartpath
git init
git add .
git commit -m "SmartPath Engine v2"
git branch -M main
git remote add origin https://github.com/USERNAME/smartpath-engine.git
git push -u origin main
```

## الخطوة 4 — تفعيل GitHub Pages

1. في الـ repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** → Save

**بعد دقيقتين سيكون التطبيق على:**
```
https://USERNAME.github.io/smartpath-engine/
```

## الخطوة 5 — تحديث اسم الـ repo في vite.config.js

```js
export default defineConfig({
  plugins: [react()],
  base: '/smartpath-engine/',  // ← غيّر هذا لاسم repo بتاعك
})
```

## تشغيل محلي

```bash
npm install
npm run dev
# افتح http://localhost:5173
```

## نشر يدوي

```bash
npm run deploy
```

---

كل مرة تعمل `git push` على branch `main` → GitHub Actions يبني التطبيق تلقائياً وينشره.
