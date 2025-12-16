# Game Developer Portfolio Website

Một website portfolio hiện đại và chuyên nghiệp dành cho game developers, được xây dựng bằng ReactJS.

## 🎮 Tính năng

- **Responsive Design**: Tương thích với mọi thiết bị từ mobile đến desktop
- **Modern UI/UX**: Thiết kế hiện đại với animations và effects đẹp mắt
- **Interactive Elements**: Các thành phần tương tác như typing animation, hover effects
- **Portfolio Showcase**: Trình bày dự án game một cách chuyên nghiệp
- **Contact Form**: Form liên hệ với validation
- **Smooth Scrolling**: Navigation mượt mà giữa các sections
- **Game-themed Design**: Thiết kế theo chủ đề game với controller animation

## 🚀 Cài đặt và Chạy

### Yêu cầu hệ thống
- Node.js (version 14 hoặc cao hơn)
- npm hoặc yarn

### Cài đặt
```bash
# Clone repository
git clone [your-repo-url]
cd game-dev-portfolio

# Cài đặt dependencies
npm install

# Chạy development server
npm start
```

Website sẽ chạy tại `http://localhost:3000`

### Build cho production
```bash
npm run build
```

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section với typing animation
│   ├── About.js           # Giới thiệu bản thân
│   ├── Skills.js          # Kỹ năng và công nghệ
│   ├── Projects.js        # Portfolio dự án
│   ├── Experience.js      # Kinh nghiệm làm việc
│   ├── Contact.js         # Form liên hệ
│   └── Footer.js          # Footer
├── App.js                 # Main component
├── App.css               # Global styles
└── index.css             # Base styles
```

## 🎨 Customization

### Thay đổi thông tin cá nhân

1. **Hero Section** (`src/components/Hero.js`):
   - Thay đổi tên trong `<span className="highlight">Tên của bạn</span>`
   - Cập nhật mô tả trong `hero-description`

2. **About Section** (`src/components/About.js`):
   - Cập nhật câu chuyện và triết lý phát triển
   - Thay đổi các số liệu thống kê

3. **Skills Section** (`src/components/Skills.js`):
   - Cập nhật danh sách kỹ năng và mức độ thành thạo
   - Thêm/bớt platforms và certifications

4. **Projects Section** (`src/components/Projects.js`):
   - Thay thế các dự án mẫu bằng dự án thực tế
   - Cập nhật hình ảnh, mô tả, và links

5. **Experience Section** (`src/components/Experience.js`):
   - Cập nhật kinh nghiệm làm việc và học vấn
   - Thay đổi thông tin công ty và thành tựu

6. **Contact Section** (`src/components/Contact.js`):
   - Cập nhật thông tin liên hệ (email, phone, địa chỉ)
   - Thay đổi social media links

### Thay đổi màu sắc

Các màu chính được sử dụng:
- Primary: `#00d4ff` (cyan)
- Secondary: `#ff00ff` (magenta)
- Accent: `#00ff88` (green)
- Background: `#0a0a0a` (dark)

Để thay đổi màu sắc, tìm và thay thế các giá trị hex này trong các file CSS.

### Thêm animations

Website sử dụng CSS animations và transitions. Bạn có thể:
- Thêm keyframes mới trong CSS
- Sử dụng thư viện như Framer Motion cho animations phức tạp hơn
- Thêm scroll-triggered animations

## 🖼️ Thêm hình ảnh

1. Thêm hình ảnh vào thư mục `public/images/`
2. Cập nhật đường dẫn trong components tương ứng
3. Đối với project images, thay thế `/api/placeholder/400/250` bằng đường dẫn thực tế

## 📱 Responsive Design

Website được thiết kế responsive với các breakpoints:
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🔧 Tối ưu hóa

### Performance
- Lazy loading cho images
- Code splitting
- Minification trong production build

### SEO
- Thêm meta tags trong `public/index.html`
- Sử dụng semantic HTML
- Thêm alt text cho images

## 📦 Deployment

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Thêm homepage và scripts vào package.json
npm run deploy
```

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

Nếu bạn có câu hỏi hoặc cần hỗ trợ, hãy tạo issue trên GitHub repository.

---

**Made with ❤️ for the game development community**