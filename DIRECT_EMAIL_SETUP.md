# Direct Email Setup Guide

## 🚀 Quick Setup with Web3Forms (Recommended - 2 minutes)

Web3Forms is a free service that sends emails directly from your contact form without requiring users to open their email client.

### Step 1: Get Your Access Key
1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address (tiwaritarun497@gmail.com)
3. Click "Create Access Key"
4. Copy the access key they provide

### Step 2: Update Your Website
1. Open `src/components/Contact.tsx`
2. Find line with `'YOUR_WEB3FORMS_ACCESS_KEY'`
3. Replace it with your actual access key

### Step 3: Test
1. Deploy your changes
2. Fill out the contact form on your website
3. Check your email inbox for the message

## ✅ Benefits of Web3Forms:
- **100% Free** for up to 1000 emails/month
- **No registration required** - just need email
- **Instant setup** - works immediately
- **Spam protection** built-in
- **No complex configuration**

## 🔧 Alternative: EmailJS Setup (More Features)

If you want more advanced features:

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up with your Gmail account
3. Verify your email

### Step 2: Create Email Service
1. Go to "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Connect your Gmail account
4. Note your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Set up template with these variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{message}}` - message content
3. Note your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Code
Replace the Web3Forms implementation in `Contact.tsx` with:

```javascript
import emailjs from '@emailjs/browser';

// In handleSubmit function:
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
};

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams,
  'YOUR_PUBLIC_KEY'
);
```

## 📧 Current Email Address
The form is configured to send emails to: **tiwaritarun497@gmail.com**

To change this:
- **Web3Forms**: Emails go to the address you used to create the access key
- **EmailJS**: Configure in your EmailJS template

## 🔒 Security Notes
- Access keys are safe to use in frontend code
- Both services have spam protection
- Rate limiting is built-in

## 🆘 Need Help?
If you encounter issues, the current implementation has a mailto fallback that will always work.