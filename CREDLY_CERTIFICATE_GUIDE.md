# How to Add Credly Certificates to Your Portfolio

This guide explains how to add your Credly badges and certificates to your portfolio website.

## Step 1: Get Your Credly Badge URL

1. Go to your Credly profile: https://www.credly.com/users/[your-username]
2. Click on the badge you want to add
3. Copy the badge URL (e.g., `https://www.credly.com/badges/abc123xyz`)
4. Optionally, you can also get the badge image URL by right-clicking the badge and selecting "Copy Image Address"

## Step 2: Add Certificate to Data File

Open `src/data/certificates.ts` and add a new certificate object:

```typescript
{
  id: "aws-certified-developer",  // Unique ID (use kebab-case)
  title: "AWS Certified Developer - Associate",  // Certificate name
  issuer: "Amazon Web Services",  // Issuing organization
  issueDate: "2024-03",  // Format: YYYY-MM
  credentialId: "ABC123XYZ",  // Your credential ID from Credly
  credentialUrl: "https://www.credly.com/badges/your-badge-id",  // Credly badge URL
  skills: ["AWS", "Cloud Computing", "DevOps", "Lambda"],  // Related skills
  description: "Demonstrates expertise in developing and maintaining AWS applications.",
},
```

## Step 3: Certificate Types Supported

### Credly Badges (Digital Badges)
- Use `credentialUrl` to link to your Credly badge
- The certificate section will show a "View Badge" button
- Visitors can click to verify your credential on Credly

### PDF Certificates
- Upload PDF to `public/images/` folder
- Use `pdfPath` with format: `/portfolio/images/your-certificate.pdf`
- The certificate section will show a "View PDF" button

### Both Credly + PDF
- You can include both `credentialUrl` and `pdfPath`
- Both buttons will be displayed

## Example: Adding a Credly Certificate

```typescript
{
  id: "google-cloud-architect",
  title: "Google Cloud Professional Architect",
  issuer: "Google Cloud",
  issueDate: "2024-01",
  credentialId: "GCP-123456",
  credentialUrl: "https://www.credly.com/badges/abc123",
  skills: ["Google Cloud", "Cloud Architecture", "Infrastructure", "Security"],
  description: "Professional certification demonstrating expertise in designing and managing Google Cloud solutions.",
},
```

## Example: Adding a PDF Certificate

```typescript
{
  id: "coursera-machine-learning",
  title: "Machine Learning Specialization",
  issuer: "Coursera",
  issueDate: "2023-12",
  pdfPath: "/portfolio/images/coursera-ml-certificate.pdf",
  skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
  description: "Comprehensive specialization covering supervised learning, unsupervised learning, and deep learning.",
},
```

## Example: Both Credly Badge + PDF

```typescript
{
  id: "comptia-security-plus",
  title: "CompTIA Security+",
  issuer: "CompTIA",
  issueDate: "2024-02",
  credentialId: "COMP001234567",
  credentialUrl: "https://www.credly.com/badges/xyz789",
  pdfPath: "/portfolio/images/comptia-security-plus.pdf",
  skills: ["Cybersecurity", "Network Security", "Risk Management", "Compliance"],
  description: "Industry-standard certification for cybersecurity professionals.",
},
```

## Tips

1. **Keep IDs Unique**: Use descriptive, unique IDs in kebab-case (lowercase with hyphens)
2. **Date Format**: Always use YYYY-MM format for consistency
3. **Skills**: Add 3-5 relevant skills that the certificate covers
4. **Description**: Write a brief 1-2 sentence description
5. **Verify URLs**: Test your Credly URLs before adding them
6. **PDF Size**: Keep PDF files under 5MB for faster loading

## After Adding Certificates

1. Save the `src/data/certificates.ts` file
2. The dev server will automatically reload
3. Check http://localhost:3000 to see your new certificates
4. Commit and push your changes
5. Deploy to GitHub Pages

## Troubleshooting

**Certificate not showing?**
- Check that the certificate object is properly formatted
- Ensure there's a comma after each certificate object (except the last one)
- Verify the file paths are correct

**PDF not loading?**
- Make sure the PDF is in the `public/images/` folder
- Check that the path starts with `/portfolio/images/` for production
- Verify the PDF filename matches exactly (case-sensitive)

**Credly badge link not working?**
- Ensure the URL is the full badge URL from Credly
- Check that the badge is set to "Public" in your Credly settings
- Verify you copied the correct badge URL

## Need Help?

Check the existing certificates in `src/data/certificates.ts` for working examples, or refer to the main README.md for general portfolio updates.

---

