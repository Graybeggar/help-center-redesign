# Help Center Redesign: a small UI/UX case study

A working before-and-after of a support help center. Open `before.html` for the
old page and `index.html` for the redesign. No build step: plain HTML, CSS,
and JavaScript.

## The problem with the old page

- Every question and answer ran together in one gray wall of text, in small
  type with low contrast. Finding anything meant reading everything.
- Headings were written the company's way, not the customer's way, and every
  answer ended in the same useless "Click here."
- There was no search and no grouping, and the only escape hatch was a contact
  form with a 3 to 5 business day wait.
- Nothing about it worked on a phone screen.

## What changed, and why

- **Search first.** The redesign opens with a search box, because most people
  arrive with one specific problem ("charged twice"), not a topic. Search
  filters articles as you type.
- **Categories by the customer's task,** not by internal departments: Billing,
  Login and access, Account, Troubleshooting.
- **Questions as headings,** in the words a customer would type, with the
  answer in short plain sentences underneath, expandable so the page stays
  scannable.
- **Readable by default:** body text at full size with strong contrast
  (dark slate on white), a clear type scale, and generous spacing. Nothing
  important is conveyed by color alone.
- **An honest contact block** that says what to send and how long a reply
  takes, instead of a warning not to write twice.
- **Responsive and keyboard friendly:** one column on phones, visible focus
  rings, real buttons and labels.

## What I would test next

- Watch which searches return nothing; those are the articles to write next.
- Put the top three questions for each category first and measure whether
  contact volume for them drops.

Files: `index.html` (redesign), `before.html` (the old page), `styles.css`,
`app.js` (the article data, search, and category filtering).
