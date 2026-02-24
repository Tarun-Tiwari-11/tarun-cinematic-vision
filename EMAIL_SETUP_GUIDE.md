# Email Functionality Setup Guide

## Current Implementation
Your contact form currently uses a **mailto** approach that opens the user's default email client with a pre-filled message. This works but requires users to have an email client configured.

## Option 1: Keep Current Implementation (Simplest)
**What it does:** Opens user's email client with pre-filled message
**Pros:** No setup required, works immediately
**Cons:** Requires users to have email client, not seamless

**To customize:**
1. Replace `your-email@example.com` with your actual email in `src/components/Contact.tsx`
2. Update social media links in the same file

## Option 2: Upgrade to EmailJS (Recommended)
**What it does:** Sends emails directly from the website without opening email client
**Pros:** Professional, seamless user experience
**Cons:** Requires 10-minute setup

### EmailJS Setup Steps:

#### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up for free account
- Verify your email

#### 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow setup instructions
- Note your **Service ID** service_fgxazof

#### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website contact form
```

- Note your **Template ID** template_kwhlbow

#### 4. Get Public Key
- Go to "Account" → "General"
- Copy your **Public Key** W0f_TcsbO1uC1OACx

#### 5. Install EmailJS Package
```bash
npm install @emailjs/browser
```

#### 6. Update Your Website
Replace the current Contact component with the EmailJS version:

1. **Rename files:**
   ```bash
   mv src/components/Contact.tsx src/components/ContactBackup.tsx
   mv src/components/ContactWithEmailJS.tsx src/components/Contact.tsx
   ```

2. **Update configuration in Contact.tsx:**
   - Replace `your_service_id` with your Service ID
   - Replace `your_template_id` with your Template ID  
   - Replace `your_public_key` with your Public Key
   - Replace `your-email@example.com` with your actual email

3. **Uncomment EmailJS code:**
   - Uncomment the import: `import emailjs from '@emailjs/browser';`
   - Uncomment the EmailJS implementation in handleSubmit
   - Comment out or remove the mailto fallback

#### 7. Test Your Setup
- Fill out the contact form on your website
- Check if you receive the email
- Verify the email format looks good

## Option 3: Alternative Services
If you prefer other services:
- **Formspree:** Simple form backend service
- **Netlify Forms:** If hosting on Netlify
- **Vercel Contact Forms:** If using Vercel Pro

## Security Notes
- EmailJS public key is safe to expose in frontend code
- Never put private keys in frontend code
- Consider adding rate limiting for production use

## Need Help?
If you encounter issues during setup, the current mailto implementation will continue working as a fallback.