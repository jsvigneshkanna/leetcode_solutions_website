---
layout: ../../../layouts/MarkdownLayout.astro
title: Palindrome
language: python
createdDate: 30/10/2022
question: Given an integer x, return true if x is a palindrome, and false otherwise.
leetcodeLink: https://leetcode.com/problems/palindrome-number/
---

```
const fs = require('fs')
const markdown = require('markdown-it')
const shiki = require('shiki')

shiki.getHighlighter({
  theme: 'nord'
}).then(highlighter => {
  const md = markdown({
    html: true,
    highlight: (code, lang) => {
      return highlighter.codeToHtml(code, { lang })
    }
  })

  const html = md.render(fs.readFileSync('index.md', 'utf-8'))
  const out = `
    <title>Shiki</title>
    <link rel="stylesheet" href="style.css">
    ${html}
    <script src="index.js"></script>
  `
  fs.writeFileSync('index.html', out)

  console.log('done')
})
```
