<!--lint disable list-item-indent-->
<!--lint disable list-item-bullet-indent-->

# SaBoT_hacks
some hacks for the SaBoT project view ui

# How to Use:

this is currently only usable if you can install the [greasmonkey](https://www.greasespot.net/) Firefox browser extension.  
[https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

if you have it installed you can add own scripts -
these scripts are running only on the sites you tell them to.

To install this script for your SaBoT website:
- go to your SaBoT project view.
- click the greasmonkey icon in your browser toolbar
- there choose `New user script`
- click greasmonkey icon again
- choose `unnamed script` → `edit`
- an extra tab opens where you can write your user script.
- open [main_greasemonkey.js](main_greasemonkey.js)
- copy the content of this script to your newly created user script
- in line 5 change `https://YOURURLTO_SaBoT/projects/*` to fit your installation.
    (if you visit the url you should see the project view.)
- save user script (Ctrl+S or the small symbol at the top right)
- with this there should be some additionally tabs be created in the 'script editor'
- go to your installation and check if something has changed ;-)

![screenshot_mods.png](screenshot_mods.png)

Mods:
- header and footer are not fixed anymore.
- E-Mail filed contains combined string form `Main Contact` + `Project name` + `E-Mail`
- Actions:
    - delete and \*accept can be hidden
    - edit link points to *sub tab* that is chosen in 'target_tab'
- you can hide accepted projects

- if there is an export link with href `/projects/export/hall` (only available in `Hall View`)
    it is extended with an Modified CSV export that escapes the fields.
    use the following options for import:
    ![import options](screenshot_LibreOffice_CSV_import_option.png)
    eventually you have to toggle `Format quoted field as text` to get the correct result..
