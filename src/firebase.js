// src/firebase.js
// ═══════════════════════════════════════════════════════
//   ضع هنا بيانات مشروعك على Firebase
//   من: Firebase Console → Project Settings → Your apps → SDK setup
// ═══════════════════════════════════════════════════════

import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkMvid-s3ePuOnKKVBvr2UIbkYuAY-Ydo",
  authDomain: "smartpath-engine.firebaseapp.com",
  projectId: "smartpath-engine",
  storageBucket: "smartpath-engine.firebasestorage.app",
  messagingSenderId: "24140119165",
  appId: "1:24140119165:web:16d95fdc48e0f7e0138514",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// ── Device ID (يُنشأ مرة واحدة ويُخزَّن في localStorage) ──
function getDeviceId() {
  let id = localStorage.getItem('sp_device_id')
  if (!id) {
    id = 'user_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem('sp_device_id', id)
  }
  return id
}

const DEVICE_ID = getDeviceId()

// ── قراءة البيانات ──
export async function loadData() {
  try {
    const ref = doc(db, 'smartpath', DEVICE_ID)
    const snap = await getDoc(ref)
    if (snap.exists()) return snap.data()
    return null
  } catch (err) {
    console.error('Firebase loadData error:', err)
    return null
  }
}

// ── حفظ البيانات ──
export async function saveData(data) {
  try {
    const ref = doc(db, 'smartpath', DEVICE_ID)
    await setDoc(ref, data, { merge: true })
  } catch (err) {
    console.error('Firebase saveData error:', err)
  }
}
