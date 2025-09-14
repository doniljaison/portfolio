# My Portfolio Website

This is my first portfolio website built with React and Tailwind CSS. It's a simple, clean website that shows who I am and what I can do.

## What I Used to Build This

- **React** - JavaScript library for building user interfaces
- **TypeScript** - JavaScript with types (makes code safer)
- **Tailwind CSS** - CSS framework for styling
- **Vite** - Build tool that makes development faster
- **Lucide React** - Icons for the website

## How to Run This Website

### Step 1: Install Node.js
First, you need to install Node.js on your computer:
- Go to [nodejs.org](https://nodejs.org/)
- Download and install the latest version

### Step 2: Download the Code
```bash
# If you have git installed
git clone <repository-url>
cd portfolio

# Or just download the ZIP file and extract it
```

### Step 3: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```

### Step 4: Start the Website
```bash
npm run dev
```

### Step 5: Open in Browser
The website will open at `http://localhost:5173`

## How to Build for Production

If you want to create files for hosting:
```bash
npm run build
```

This creates a `dist` folder with all the files you need to upload to a web server.

## What's in This Website

- **Hero Section** - Introduction with my name and title
- **About Section** - Personal information and what I do
- **Skills Section** - Technologies and tools I know
- **Contact Section** - Contact form and my contact details
- **Header** - Navigation menu
- **Footer** - Social media links

## How I Made This

This was my first React project, so I kept it simple:

1. **Components** - Each section is a separate React component
2. **Styling** - Used Tailwind CSS classes for styling
3. **Responsive** - Works on mobile, tablet, and desktop
4. **Simple Code** - Easy to understand and modify

## File Structure

```
src/
├── components/          # All the website sections
│   ├── Header.tsx      # Top navigation
│   ├── Hero.tsx        # Main landing section
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills and technologies
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Bottom section
├── pages/
│   └── Index.tsx       # Main page that puts everything together
└── main.tsx            # Where the app starts
```

## Customizing This Website

### Change Personal Information
Edit these files with your information:
- `src/components/Hero.tsx` - Your name and title
- `src/components/About.tsx` - Your personal info
- `src/components/Skills.tsx` - Your skills
- `src/components/Contact.tsx` - Your contact details

### Add New Sections
1. Create a new file in `src/components/`
2. Add it to `src/pages/Index.tsx`
3. Add a link in `src/components/Header.tsx`


---

*This is my first portfolio website. I'm still learning and improving!*
