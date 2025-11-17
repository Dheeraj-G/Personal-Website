# Testing Guide

## Quick Start - Local Development

1. **Install dependencies** (if not already done):
   ```bash
   cd website/my-app
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   The server will start on **http://localhost:5000**

3. **Open your browser** and navigate to `http://localhost:5000`

## What to Test

### 1. Visual Checks
- [ ] **Homepage loads** - You should see the Hero section
- [ ] **Navigation works** - Click on About, Projects, Experience, Contact links
- [ ] **Personal photo displays** - Check the About section shows `/personal-photo.jpeg`
- [ ] **Resume link works** - Click "View my Resume" button in About section
- [ ] **Social links work** - Test GitHub, LinkedIn, and Email links in Contact section
- [ ] **Responsive design** - Resize browser window to test mobile/tablet views
- [ ] **Theme toggle** - Test dark/light mode switching (if available)

### 2. Contact Form Testing

#### Without Environment Variables (Testing UI Only)
The form will show validation errors and UI feedback, but won't send emails:
- [ ] **Form validation** - Try submitting empty form, invalid email, etc.
- [ ] **Form fields** - Fill in First Name, Last Name, Email, Message
- [ ] **Submit button** - Check loading state and error handling

#### With Environment Variables (Full Testing)
Create a `.env` file in `website/my-app/`:
```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=your_verified_email@example.com
PORT=5000
```

Then test:
- [ ] **Form submission** - Submit a test message
- [ ] **Success message** - Should see success toast notification
- [ ] **Email received** - Check `gosuladheeraj@gmail.com` inbox
- [ ] **Form reset** - Form should clear after successful submission

### 3. API Endpoint Testing

Test the contact API directly using curl or a tool like Postman:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{"success": true}
```

### 4. Production Build Testing

Test the production build locally:

```bash
# Build the project
npm run build

# Start production server
npm run start
```

Then test at `http://localhost:5000`:
- [ ] **Static files serve correctly** - Images, CSS, JS load properly
- [ ] **API still works** - Contact form functions in production mode
- [ ] **No console errors** - Check browser console for errors

## Troubleshooting

### Port Already in Use
If port 5000 is taken, set a different port:
```bash
PORT=3000 npm run dev
```

### Contact Form Not Working
1. Check environment variables are set correctly
2. Verify Resend API key is valid
3. Check that `RESEND_FROM_EMAIL` is verified in your Resend account
4. Check server console for error messages

### Build Errors
```bash
# Check TypeScript errors
npm run check

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Verify `personal-photo.jpeg` exists in `client/public/`
- Check browser console for 404 errors
- Ensure the image path is `/personal-photo.jpeg` (with leading slash)

## Pre-Deployment Checklist

Before deploying to Vercel:
- [ ] All visual elements display correctly
- [ ] Contact form validation works
- [ ] Contact form sends emails (with env vars)
- [ ] All links work (resume, social media)
- [ ] Production build completes without errors
- [ ] No console errors in browser
- [ ] Responsive design works on mobile/tablet
- [ ] Environment variables documented for Vercel

