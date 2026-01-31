# Jagaban Rangers Solidarity Movement — Website Plan

## Overview

A **futuristic, high-impact** site for the Jagaban Rangers Solidarity Movement using the provided content, assets, and brand colors. This document maps every asset to pages, defines the design direction, and specifies the Partnerships page thumbnail–PDF behavior **without any code yet**.

---

## 1. Brand Colors (Primary Palette)

| Role | Hex | Usage |
|------|-----|--------|
| **Blue** (outer ring) | `#0075B0` | Primary blue: nav, headings, CTAs, footer accents |
| **Light blue** (top of “R”) | `#00A5ED` | Highlights, links, gradients, hero accents |
| **Red** (left of “J”) | `#E53935` | CTAs, alerts, key highlights, BOF alignment |
| **Green** (right of “R”) | `#00A65A` | Success, growth, “lives impacted,” secondary CTAs |

**Supporting:** White, near-black (`#1a1a1a`), light gray backgrounds for contrast and readability.

---

## 2. Design Direction: “Amazing & Futuristic”

- **Visual style:** Clean, bold typography; generous whitespace; subtle gradients and soft shadows using the four brand colors.
- **Motion:** Light animations (fade-in, slide-up on scroll), smooth hover states, optional hero video background.
- **Layout:** Full-width hero sections, clear grid for content, sticky nav with logo.
- **Tech feel:** Card-based sections, clear hierarchy, optional subtle geometric or line patterns in backgrounds (no clutter).
- **Accessibility:** Strong contrast, readable font sizes, focus states, semantic HTML when built.

---

## 3. Asset Inventory & Placement

### 3.1 Images

| Asset | Best placement |
|-------|----------------|
| **logo.png** | Header/nav (left), footer; scale for favicon if needed (favicon.ico exists). |
| **favicon.ico** | Browser tab. |
| **benjamin.jpeg** | **Partnerships page:** Benjamin Olowejebutu portrait (e.g. hero or “Our Key Partner” section). |
| **bof_logo.jpeg** | **Partnerships page:** BOF logo beside Jagaban Rangers logo in “Our Key Partner” / logo strip. |
| **mike_and_oba.jpeg** | **About Us:** “Who We Are” or “Rangers in action” — dignitaries/team. |
| **mike.jpeg** | **About Us** or **Get Involved:** Team/leadership. |
| **oba_and_mike2.jpeg** | **About Us:** Alternate team/dignitary shot or gallery. |

### 3.2 Videos (outreach1.mp4 – outreach9.mp4)

| Use | Suggested assets |
|-----|-------------------|
| **Home — Hero** | One standout clip (e.g. outreach1 or 2) as background or primary hero video. |
| **Home — Featured outreach** | Short clip next to “Featured Outreach” copy. |
| **Programs & Outreaches — Gallery** | Grid/carousel of 2–4 clips (e.g. outreach3–6) with play buttons. |
| **Get Involved — Testimonial** | One clip (e.g. outreach7 or 8) as “Short testimonial video from a beneficiary or sponsor.” |
| **About Us or Mission** | Optional background or inline clip for emotional impact. |

Use lazy loading and optional poster frames (e.g. first frame or a thumbnail) for performance.

### 3.3 Thumbnails & PDFs (Partnerships page)

Use **thumbnails** as clickable cards; each opens its **matching PDF** in a new tab or modal.

| Thumbnail | PDF (exact filename) |
|-----------|------------------------|
| abia_thumbnails.png | ABIA SURGERIES.pdf |
| akwaibom_thumbnails.png | Brochure Akwa Ibom.pdf |
| benue_thumbnails.png | Brochure Benue.pdf |
| crossriver_thumbnails.png | Cross River 2019 Brochure.pdf |
| edo_thumbnails.png | Edo Brochure.pdf |
| imo_thumbnails.png | Imo Surgeries.pdf |
| ondo_thumbnails.png | Ondo Surgeries.pdf |
| rivers_thumbnails.png | RIvers Brochure.pdf *(filename has typo: “RIvers”)* |

- **Partnerships page behavior:**  
  - Show Benjamin image + BOF logo in “Our Key Partner” section.  
  - Add a section “Outreach Brochures & Reports” (or similar).  
  - Display the 8 thumbnails in a grid (e.g. 2×4 or 4×2 on desktop).  
  - Each thumbnail is a button/card: **on click** → open the corresponding PDF (same row in table above) in a new tab (`target="_blank"`) or in a modal viewer.  
- **Copy:** Optional short label under each thumbnail (e.g. “Abia Surgeries”, “Akwa Ibom Brochure”, “Benue Brochure”, etc.) for clarity.

---

## 4. Page-by-Page Plan

### Home

- **Hero:** Headline + subhead from brief; **hero visual:** outreach video (e.g. outreach1 or 2) with overlay + optional logo or “Donate / Volunteer” CTAs.
- **Intro:** Short “Empowering Communities…” block.
- **Featured outreach:** Text block + one **outreach video** (e.g. outreach2) + “Donate Now” and “Volunteer Today” buttons.
- **Footer:** Logo, quick links, newsletter, social placeholders, copyright.

### About Us

- **Who We Are:** Copy from brief + **mike_and_oba.jpeg** (or oba_and_mike2) as “Rangers team in action.”
- **Values:** Four cards (Compassion, Unity, Excellence, Transparency) with icons or small color accents (blue/light blue/red/green).
- **Optional:** mike.jpeg or oba_and_mike2 in a second column or gallery.

### Our Mission

- **Mission / Vision / Objectives:** Clear typography and spacing; optional **infographic placeholder** (timeline or “lives impacted”) using brand colors.
- **Optional:** One small outreach video for emotional punch.

### Programs & Outreaches

- **Medical outreaches:** List (fibroids, lipomas, breast lumps, hernias, etc.) + “How We Operate” (Community ID → Planning → Follow-up).
- **Gallery:** **outreach3–6** (or similar) as video grid with posters/play buttons.
- **Upcoming events:** Placeholder date/community + newsletter CTA.

### Partnerships

- **Our Key Partner:** Benjamin Olowejebutu Foundation copy + **benjamin.jpeg** (portrait) + **bof_logo.jpeg** next to site logo.
- **“Outreach Brochures & Reports”:** Grid of **8 thumbnails** (abia, akwaibom, benue, crossriver, edo, imo, ondo, rivers); each **on click** opens the **matching PDF** (see table above). Optional labels under each thumbnail.
- **Why Partner With Us:** Bullets + CTA to contact.

### Get Involved

- **Ways to get involved:** Sponsor, Volunteer, Donate, Spread the word.
- **Donation form placeholder:** Name, email, amount, payment options.
- **Testimonial quote** from brief + **one video** (e.g. outreach7 or 8) as “Short testimonial video.”

### Contact Us

- **Contact details:** Email, phone, address placeholders.
- **Contact form placeholder:** Name, email, message, submit.
- **Newsletter signup:** Email + subscribe.
- **Social:** X (Twitter), Facebook, Instagram @JagabanRangers.

---

## 5. Navigation & Global Elements

- **Nav items:** Home | About Us | Our Mission | Programs & Outreaches | Partnerships | Get Involved | Contact Us.
- **Header:** logo.png left; nav center/right; optional “Donate” or “Volunteer” as prominent CTA.
- **Footer:** Same links + Newsletter + Social placeholders + “Privacy Policy | Terms of Use” + copyright.
- **Favicon:** asset/favicon.ico.

---

## 6. Thumbnail–PDF Pairs (Quick Reference for Build)

```
abia_thumbnails.png       → ABIA SURGERIES.pdf
akwaibom_thumbnails.png   → Brochure Akwa Ibom.pdf
benue_thumbnails.png      → Brochure Benue.pdf
crossriver_thumbnails.png → Cross River 2019 Brochure.pdf
edo_thumbnails.png        → Edo Brochure.pdf
imo_thumbnails.png        → Imo Surgeries.pdf
ondo_thumbnails.png       → Ondo Surgeries.pdf
rivers_thumbnails.png     → RIvers Brochure.pdf
```

All paths relative to `asset/` (e.g. `asset/abia_thumbnails.png`, `asset/ABIA SURGERIES.pdf`).

---

## 7. Summary

- **Look:** Futuristic, clean, bold — brand colors (#0075B0, #00A5ED, #E53935, #00A65A) drive UI and accents.
- **Assets:** Logo and favicon global; Benjamin + BOF logo + 8 brochure thumbnails on Partnerships; team images on About Us; 9 outreach videos across Home, Programs, Get Involved (and optionally About/Mission).
- **Partnerships:** Benjamin image + BOF logo + grid of 8 thumbnails; each thumbnail opens its paired PDF (names confirmed as above). No code in this plan — ready for implementation when you say go.
