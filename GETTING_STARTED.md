# Getting Started with Your New Portfolio

Welcome to your fresh, modern portfolio! This guide will help you get everything up and running.

## 🎉 What's New?

Your new portfolio features:
- **8-Bit Theme Toggle**: A unique feature that transforms your entire site into a retro 8-bit aesthetic
- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS, and Framer Motion
- **Oxford Library Aesthetic**: Clean, professional design with white/grey/black color scheme
- **All Your Projects**: Preserved from your previous portfolio
- **Email Integration**: Working contact form with MailerLite
- **Fully Responsive**: Beautiful on all devices

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   
   Your `.env` file is already configured with your MailerLite credentials. If you need to update them:
   ```bash
   NEXT_PUBLIC_MAILERLITE_API_KEY=your_api_key
   NEXT_PUBLIC_MAILERLITE_GROUP_ID=your_group_id
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

## 🎮 Using the 8-Bit Theme

Click the **gamepad icon** in the top-right navigation to toggle between:
- **Normal Mode**: Clean, professional Oxford Library aesthetic
- **8-Bit Mode**: Retro pixelated design with amber accents

The theme persists in local storage, so your preference is saved!

## 📁 What's Preserved?

All your important files are in the `_preserved/` directory:
- ✅ 6 Project MDX files
- ✅ Project images (asl.jpg, gmail-autofill.jpg, matrix.jpg, nathacks.jpg, rps.jpg, voting.jpg)
- ✅ Email integration code (Mailchimp.tsx, Offerings.tsx)
- ✅ Environment variables (.env, .env.example)
- ✅ Your personal information (saved in AI memory for easy reference)

## 📝 Sections Overview

Your portfolio includes:

1. **Hero/About** - Your introduction with headshot and social links
2. **Experience** - Work at Index Competitive, education at UofA, and skills
3. **Projects** - All 6 projects with images, descriptions, and links
4. **Testimonials** - Recommendation from Mustafa Khan
5. **Involvement** - Leadership roles and competitive activities
6. **Blog** - Placeholder for future blog posts
7. **Contact** - Email form with "Work With Me" offerings

## 🎨 Customization

### Update Your Information

All your info is in the components. To update:

- **Personal Info**: `src/components/Hero.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Contact Links**: `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Add More Projects

Edit `src/components/Projects.tsx` and add to the `projects` array:

```typescript
{
  title: 'Your Project Name',
  date: 'Month Year',
  summary: 'Brief description...',
  image: '/images/your-image.jpg',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  github: 'https://github.com/...',
  demo: 'https://demo-link.com',
  award: '🏆 Optional Award Text',
}
```

### Change Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  burgundy: '#8B3A3A',  // Primary accent
  amber: '#E6A963',      // 8-bit accent
  // ... more colors
}
```

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables
6. Deploy!

## 🔧 Troubleshooting

### Dev Server Won't Start

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Images Not Loading

Make sure all images are in the `public/` directory and referenced without `/public` in the path:

```tsx
// Correct
<Image src="/images/project.jpg" ... />

// Wrong
<Image src="/public/images/project.jpg" ... />
```

### Environment Variables Not Working

- Make sure `.env` is in the root directory
- Variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- Restart dev server after changing `.env`

## 💡 Tips

1. **Test Both Themes**: Always check how new content looks in both normal and 8-bit themes
2. **Optimize Images**: Use Next.js Image component for automatic optimization
3. **Keep It Updated**: Regularly update your projects and testimonials
4. **Mobile First**: Test on mobile devices regularly

## 🤝 Need Help?

- Check the main [README.md](./README.md) for technical details
- Review component files in `src/components/` for examples
- Look at preserved files in `_preserved/` for reference

## 🎉 Ready to Launch!

Your portfolio is ready to go! Just:
1. Test everything locally
2. Customize any content you want to change
3. Push to GitHub
4. Deploy to Vercel/Netlify
5. Share with the world!

---

Built with ❤️ and lots of code. Time to show it off!

