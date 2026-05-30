# 🚗 Cars API

Express.js ile geliştirilmiş basit bir REST API projesi.  
Bu API araç verileri üzerinde **CRUD (Create, Read, Update, Delete)** işlemleri yapmayı sağlar.

---

## ✨ Özellikler

✅ Tüm araçları listeleme  
✅ ID ile tek araç görüntüleme  
✅ Yeni araç ekleme  
✅ Araç bilgisi güncelleme  
✅ Araç silme  
✅ Logger Middleware  
✅ ID doğrulama Middleware  
✅ JSON tabanlı veri saklama

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| Node.js | Backend runtime |
| Express.js | API framework |
| Nodemon | Otomatik server restart |

---

## 📂 Proje Yapısı

```bash
cars-api/
│
├── controllers/
├── routes/
├── middleware/
├── data/
├── utils/
├── server.js
└── package.json
```

---

## ⚙️ Kurulum

### 1. Projeyi klonla

```bash
git clone <repo-link>
```

### 2. Klasöre gir

```bash
cd cars-api
```

### 3. Paketleri yükle

```bash
npm install
```

### 4. Server'ı çalıştır

```bash
npm start
```

Server çalıştıktan sonra:

```bash
http://localhost:3000
```

---

## 🚀 API Endpointleri

### 📌 Tüm Araçları Getir

```http
GET /api/v1/cars
```

---

### 📌 Tek Araç Getir

```http
GET /api/v1/cars/:id
```

---

### 📌 Yeni Araç Ekle

```http
POST /api/v1/cars
```

Örnek Body:

```json
{
  "brand": "Toyota",
  "model": "Corolla",
  "year": 2024,
  "color": "White"
}
```

---

### 📌 Araç Güncelle

```http
PATCH /api/v1/cars/:id
```

---

### 📌 Araç Sil

```http
DELETE /api/v1/cars/:id
```

---

## 🔧 Middleware

### Logger Middleware

Her isteğin **method** ve **URL** bilgisini console üzerinde gösterir.

### ID Control Middleware

Gönderilen ID'nin geçerli olup olmadığını kontrol eder.  
Geçersiz ID durumunda hata döndürür.

---

## 📌 Örnek Response

```json
{
  "message": "Araç verileri alındı",
  "results": 5,
  "cars": []
}
```

---

## 👨‍💻 Geliştirici

**Bekir**
