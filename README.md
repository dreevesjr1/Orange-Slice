🟧 Orange Slice Golf — AWS Deployment
A static, cloud‑hosted golf community website deployed on Amazon Web Services using S3, CloudFront, and Route 53.


📌 Overview
Orange Slice Golf is an Orlando‑based golf lifestyle community website built with:

HTML / CSS / JavaScript

AWS S3 for static hosting

AWS CloudFront for global CDN distribution

AWS Route 53 for domain routing

AWS Certificate Manager (ACM) for HTTPS

Optional: API Gateway + Lambda + DynamoDB for sign‑up form backend

This README explains how the site is structured, deployed, updated, and maintained.

🗂️ Project Structure
Code
orange-slice-golf/
│
├── index.html
├── styles.css
├── script.js
│
├── images/
│   ├── hero.jpg
│   ├── favicon.png
│   └── logo.png
│
└── README.md
☁️ AWS Architecture
The website uses a standard static hosting pipeline:

Component	Purpose
S3 Bucket	Stores HTML, CSS, JS, and images
CloudFront	Caches and serves the site globally
Route 53	Routes domain traffic to CloudFront
ACM Certificate	Provides HTTPS
(Optional) API Gateway + Lambda + DynamoDB	Handles sign‑up form submissions


🚀 Deployment Steps
1. Upload Website Files to S3
Upload:

index.html

styles.css

script.js

/images folder

Ensure public read access or use CloudFront OAI.

2. Configure S3 for Static Hosting
Enable:

Static website hosting

Index document: index.html

Error document: index.html (SPA‑friendly)

3. Create a CloudFront Distribution
Origin: your S3 bucket

Viewer protocol: Redirect HTTP → HTTPS

Cache policy: CachingOptimized

Add your domain under “Alternate Domain Names (CNAME)”

Attach your ACM certificate

4. Route 53 Domain Setup
Create an A Record → CloudFront distribution.

Example:

Code
A — orange-slice-golf.com → CloudFront
5. Updating the Website
When you upload new HTML/CSS/JS:

You MUST invalidate CloudFront:
Code
/*
CloudFront does not auto‑refresh — each update requires a new invalidation.

🔧 Local Development
Run locally by opening index.html in a browser.

Recommended tools:

Live Server (VS Code)

Prettier for formatting

GitHub Pages for preview builds

🔒 Security Considerations
Use HTTPS via ACM

Restrict S3 bucket access using CloudFront OAI

Enable CloudFront logging

Use IAM least‑privilege roles

Validate all form inputs in Lambda

📈 Future Enhancements
PayPal integration for Shop items

Google linked Calendar that adds events to users calendars automatically

Mobile application for subscribers to get affiliate deals with partners