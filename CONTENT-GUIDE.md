# Portfolio content editing guide

Use this guide to update every piece of text, link, and image on your site. All edits are in the `src/components` folder.

---

## 1. Hero section (top of page)

**File:** `src/components/Hero.jsx`

| What to edit | Line | Change to |
|--------------|------|----------|
| **Your name** (big gradient text) | 16 | Replace `SRINIVASAN` with your name (or keep it). |
| **Tagline** | 17 | Replace `ECE Student \| Web & AI Developer` with your title (e.g. "Full Stack Developer", "ML Engineer"). |
| **Resume button** | 7–9 | To make "Download Resume" work: put your resume PDF in `public/` (e.g. `public/resume.pdf`) and change the function to: `window.open('/resume.pdf', '_blank');` |

---

## 2. About section (photo + bio)

**File:** `src/components/About.jsx`

| What to edit | Where | What to do |
|--------------|--------|------------|
| **Profile photo** | Top of file | Your photo is already set to `src/assets/sri.PNG`. To use a different image: (1) add the new image to `src/assets/` (e.g. `my-photo.jpg`), (2) change the import to `import profilePhoto from '../assets/my-photo.jpg';`, (3) update the `alt` text in the `<img>` tag. |
| **About paragraphs** | Lines 26–36 | Replace the two `<p className="about-description">` blocks with your own bio. You can use one paragraph or add more. |

---

## 3. Skills section

**File:** `src/components/Skills.jsx`

| What to edit | Where | What to do |
|--------------|--------|------------|
| **Skills list** | Lines 3–15 | Edit the `skills` array. Each item is `{ name: 'Skill Name', icon: '😀' }`. Change names, add/remove skills, and swap emojis if you like. Example: `{ name: 'TypeScript', icon: '📘' }`. |

---

## 4. Projects section

**File:** `src/components/Projects.jsx`

| What to edit | Where | What to do |
|--------------|--------|------------|
| **Projects** | Lines 3–23 | Edit the `projects` array. Each project has: `title`, `description`, `tech`, `githubUrl`. Update with your real project names, descriptions, tech stack, and GitHub repo URLs (use full URL like `https://github.com/username/repo-name`). Add or remove projects by adding/removing objects in the array. |

---

## 5. Contact section

**File:** `src/components/Contact.jsx`

| What to edit | Line | Change to |
|--------------|------|----------|
| **Email** | 5 | Replace `your.email@example.com` in `mailto:your.email@example.com` with your real email. |
| **LinkedIn** | 6 | Replace `https://linkedin.com/in/yourprofile` with your LinkedIn profile URL. |
| **GitHub** | 7 | Replace `https://github.com/yourusername` with your GitHub profile URL (e.g. `https://github.com/Srinivasan-001`). |
| **Contact message** | 23–24 | Optionally change the sentence "I'm always open to discussing..." to your own message. |

---

## 6. Header / navigation

**File:** `src/components/Header.jsx`

| What to edit | Line | Change to |
|--------------|------|----------|
| **Logo/brand text** | 12 | Replace `Portfolio` with your name or a short brand name if you want. |

---

## 7. Browser tab title

**File:** `index.html` (in project root)

| What to edit | Where | Change to |
|--------------|--------|----------|
| **Page title** | `<title>` tag | Replace with your name or "Your Name – Portfolio". |

---

## Quick checklist

- [ ] Hero: name, tagline, resume link
- [ ] About: photo (or keep `sri.PNG`), bio text
- [ ] Skills: add/remove/rename skills and icons
- [ ] Projects: titles, descriptions, tech, GitHub URLs
- [ ] Contact: email, LinkedIn URL, GitHub URL
- [ ] Header: brand text (optional)
- [ ] `index.html`: page title

After saving any file, the dev server will reload and you’ll see your changes. If you want, we can go through one section (e.g. Projects or Contact) and edit it step by step.
