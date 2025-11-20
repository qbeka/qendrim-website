# Deployment Checklist

Use this checklist before deploying your portfolio to production.

## 📋 Pre-Deployment

### Content Review
- [ ] All personal information is accurate (name, email, links)
- [ ] All projects are listed with correct details
- [ ] Project images are optimized and loading correctly
- [ ] Social media links are working
- [ ] Calendly link is correct
- [ ] Contact email is correct

### Technical Checks
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes (or fix issues)
- [ ] All images are in `public/` directory
- [ ] Environment variables are set up
- [ ] Both themes (normal and 8-bit) work correctly
- [ ] All sections scroll smoothly
- [ ] Navigation links work
- [ ] Contact form submits successfully

### Responsive Testing
- [ ] Test on mobile (iPhone/Android)
- [ ] Test on tablet (iPad)
- [ ] Test on desktop (various screen sizes)
- [ ] Test navigation menu on mobile
- [ ] Test all buttons and links on touch devices

### Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers

### Performance
- [ ] Images are compressed (use tools like TinyPNG)
- [ ] No console errors in browser
- [ ] Page loads quickly
- [ ] Animations are smooth

## 🚀 Deployment

### Environment Variables

Set these in your deployment platform (Vercel/Netlify):

```
NEXT_PUBLIC_MAILERLITE_API_KEY=your_api_key_here
NEXT_PUBLIC_MAILERLITE_GROUP_ID=your_group_id_here
```

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add your MailerLite credentials
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

### Netlify Deployment

1. **Push to GitHub** (same as above)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

4. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add your MailerLite credentials

5. **Deploy**
   - Trigger deployment
   - Visit your live site!

## ✅ Post-Deployment

### Functionality Testing
- [ ] Visit live site and test all sections
- [ ] Toggle 8-bit theme works
- [ ] Submit contact form (use test email)
- [ ] Click all external links
- [ ] Test on mobile device
- [ ] Check page load speed

### SEO & Meta Tags
- [ ] Page title is correct
- [ ] Meta description is set
- [ ] Social media preview works (test with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/))
- [ ] Favicon appears in browser tab

### Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Set up Vercel Analytics
- [ ] Add any tracking you need

### Domain (Optional)
- [ ] Purchase custom domain
- [ ] Configure DNS settings
- [ ] Add domain in Vercel/Netlify
- [ ] Wait for SSL certificate
- [ ] Test HTTPS works

## 📊 Monitoring

After deployment, regularly check:
- [ ] Contact form submissions in MailerLite
- [ ] Site is loading correctly
- [ ] No broken links
- [ ] Analytics data (if set up)
- [ ] Mobile performance

## 🔄 Updates

When making updates:
1. Test locally first
2. Push to GitHub
3. Automatic deployment triggers
4. Verify changes live

## 🎉 Launch Announcement

Share your portfolio:
- [ ] Update LinkedIn profile with portfolio link
- [ ] Update GitHub profile README
- [ ] Share on Twitter/X
- [ ] Email to network
- [ ] Update resume with portfolio link

## 🆘 Rollback Plan

If something goes wrong:
- Vercel: Use "Redeploy" button for previous deployment
- Netlify: Use "Deploys" tab to rollback
- Git: Revert commit and push

---

**🎊 Congratulations on launching your portfolio!**

Remember to keep it updated with new projects and achievements.

