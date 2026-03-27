# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

**Answer: It changed relative its original position. When it was changed at top:20px, it moved the sidebar 20px down, but it was 20px under the header instead of the website since its original position was directly at the bottom of the header.**

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

**Answer: When the position is fixed and I scroll the page, the footer stays at the bottom of the viewport, but when the footer position is relative it stays at its original position. This is because when it is position: fixed; bottom:0;, there footer's bottom is 0px away from the viewport and will stay there since it is relative to the viewport; but when the position is relative and the bottom is 0px, the footer doesn't move at all since you didn't move the footer any pixels away from the bottom.**

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

**Answer: The effect of position:absolute makes an element positioned based on the nearest positioned ancestor (which is the body), which is why when you reduce position: absolute; top: 66px; 
to top: 1px;, it puts the content near the top of the website. The difference between fixed and absolute is that since fixed is based on the viewport, it will stay in the same position even if you scroll; while absolute, since it is relative to its ancestor, does move when scolling because its ancestor moves as well.**

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

**Answer: Notice appears on top of content because its z-index is greater than the z-index of content (which is 1); if the z-indexes were swapped, it would lead to the content being on top of notice. This means that z-index affected the "layering" of elements.**

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    - Static-Default position
    - Relative-Position based on static
    - Absolute-position based on ancestor (ex if <div><p></p></div>, if p position is absolute it will position based on the space in div)
    - Fixed-based on viewport, doesn't move when scrolling

    b. How does absolute positioning depend on its parent element?
    - It depends on its parent element since a parent element is considered an ancestor. (ex if <div><p></p></div>, if p position is absolute it will position based on the space in div. If div is 200px all-round and you make p's position top: 20px, it will position the p 20px away from the top of the 200px div)

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    -Sticky will be like a fixed element, but when the scroll exceeds where the sticky element was positioned (y-axis wise, not viewport-wise), it will stick to the top/bottom of the page.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
