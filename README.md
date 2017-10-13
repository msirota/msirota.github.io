# Sirota Lab

## How to Add Team Members

1) Add their image to the `images` folder
2) In the `index.html` file, search for "Add Team Member Below"
3) Copy and paste the following template to match all the others:
```html
<div class="col-xs-12 col-sm-4 sub-section person">
  <div class="col-xs-4 col-sm-12">
    <img class="img-fluid icon-img" src="images/[file name of image].jpg">
  </div>
  <div class="col-xs-8 col-sm-12 description-section">
    <h3><a href="[website of teammember]">MEMBER NAME</a></h3>
    <h4>TITLE</h4>
    <p>DESCRIPTION</p>
  </div>
</div>
```
4) Provide the file name for the image in `img src`; be sure to leave `images/` at the beginning since the image is in this directory.
5) Provide the website for the team member in `a href`. Be sure to use "http://" or "https://" at the beginning of the link.
6) After entering their name and title, make sure the description is not too long so that it is consistent with the others.
7) Save, test, commit!

## How to Add Publications

1) In the `index.html` file, search for "Add Publications Below"
2) Copy and paste the following template to match all the others:
```html
<li> Authors,
  <strong>Sirota M</strong>,
  Title, publication info,
  <a href="https://www.ncbi.nlm.nih.gov/pubmed/********">
    **********
  </a>
</li>
```
3) Fill in everything as usual, but keep Sirota M `strong`!
4) Place the PubMed PMID where there are *********, and be sure to test the link
5) Save, test, commit!

## To-Do List:

6/15:
- [x] Place images into separate image directory
- [x] Remove extraneous files, e.g. in apps (This step after each change and at end)
- [x] Create 'landing' page that will eventually replace index; use Bootstrap
    - [x] Create head material to load bootstrap and all other desired libraries
    - [x] Create bootstrap navbar to be used on all pages
    - [x] Create social media footer to be used on all pages
    - [x] Move images in "uploads" to images directory, remove it
    - [x] Remove extraneous files, e.g. in apps (This step after each change and at end)
    - [x] Think of ways to use Vue for repetition
- [x] Replace index.html
    - [x] Make icon and about the lab link to index
- [x] Redo 'research' page
    - [x] Replace head, navigation, and footer
    - [x] Move images in "uploads" to images directory, remove it
    - [x] Remove extraneous files, e.g. in apps (This step after each change and
    at end)
    - [x] Make icon and about the lab link to index
- [x] Redo 'people' page
    - [x] Replace head, navigation, and footer
    - [x] Move images in "uploads" to images directory, remove it
    - [x] Remove extraneous files, e.g. in apps (This step after each change and
    at end)
    - [x] Make icon and about the lab link to index
    - [x] Replace content
    - [x] Find and add links to each person!!!
    - [x] Clearfix or equal out column heights; use grid
- [x] Redo 'publications' page
    - [x] Replace head, navigation, and footer
    - [x] Replace content
- [x] Redo 'teaching' page
    - [x] Fix file names of images
    - [x] Replace head, navigation, and footer
    - [x] Replace content
- [x] Redo 'open positions' page
    - [x] Replace head, navigation, and footer
    - [x] Replace content
- [x] Fix margin issue above footer on each page
- [x] Make `<b>` or `<strong>` consistent and actually bold

10/9:
- [x] Remove double helix
- [x] Add new logo
- [x] Refactor as single-page site
    - [x] Research
    - [x] People
    - [x] Open Positions
    - [x] Teaching
    - [x] Publications
- [x] Anchor navigation
- [x] Resize logo
- [x] Reformat logo and toggle button for mobile
- [x] Reformat navigation
- [x] Set body in margins
- [x] Set all images to max original size
- [x] Replace all VW with pixel values
- [x] Network effect in side margins
- [x] Create various options for coloration
- [x] Create top margin for sections to compensate for nav-bar size
- [x] Float logos
- [x] Fix footer position
- [x] Adjust navigation background color
- [x] Make max-width of nav same as body
- [x] Full-width sections
- [x] Enlarge logos

10/12
- [x] Correct logo size on phone
- [x] Correct sizing of navigation LIs in mobile dropdown
- [x] Single-page smooth scrolling
- [x] Auto-close menu on mobile when selection is made
- [x] Make content background transparent for lighter gray

10/13
- [x] Add icons to Openings
- [x] Remove flyers from Teaching
- [x] Switch Openings and Teaching
- [x] Even out the padding
- [x] Favicon of Sirota Lab logo
- [x] Legal and format for footer
- [x] Write documentation for how to:
    - [x] Add and remove team members
