PatternFlyIcons font is generated using [IcoMoon](http://icomoon.io/app).

Go to [Manage Projects](https://icomoon.io/app/#/projects)

![image](https://cloud.githubusercontent.com/assets/12733153/15152985/71b8c62a-16a5-11e6-9d3c-d01be57f3c54.png)

Import the project `PatternFlyIcons-webfont.json` and Load it:

![image](https://cloud.githubusercontent.com/assets/12733153/15152997/83795582-16a5-11e6-9b64-370884453684.png)

After the Load you should see the “PatternFlyIcons - webfont” set above the “IcoMoon - Free” set.  Note that all icons in PatternFlyIcons are selected AND several icons in the IcoMoon set are also selected -keep those selections!

To add new icons to the PatternFlyIcons set, click on the right-hand kabob menu and select “Import To Set”.  Import the new icons/svgs/pngs:

![image](https://cloud.githubusercontent.com/assets/12733153/15153017/9411521e-16a5-11e6-9a70-e37e73c16734.png)

Make sure you select the new icons in the set (click on them to give them a yellow selection border).

Generate the fonts by clicking on the “Generate Font” button at the bottom of any IcoMoon webpage:

![image](https://cloud.githubusercontent.com/assets/12733153/15153037/a676306e-16a5-11e6-8759-03845f0793c3.png)

At the bottom of the “Generate Font” page, click on the “Download” button.  This will download a zip file which you should expand.  Goto where you expanded the downloaded zip file and copy the 4 font files in the “font” directory (PatternFlyIcons-webfont.eot, .svg, .ttf, .woff) to the patternfly repo under “dist/fonts”.

When finished, return to Manage Projects, and download the updated PatternFlyIcons-webfont.json file to the root of patternfly repo.   

Next update the PatternFly icon test page.

To start this process update “less/variables.less”  add new variables with the “content” values for the new icons.

    Ex:  @pficon-var-blueprint:     "\e915";)  

To see the content values for the PF icons click on the demo.html in the root dir of where you expanded the pf icon zip file.

Next, update "less/icons.less" and add new LESS to denote the new icons.

    Ex:
      @{icon-prefix}-blueprint:before {
        content: @pficon-var-blueprint;
      }

Finally, update "tests-src/icons.html" to include the new icons.

    Ex:
      <li>
         <span class="pficon pficon-blueprint"></span>
         <span class="icon-class">pficon-blueprint</span>
      </li>

Do a ‘grunt build’ and ‘grunt server’ and review the Icons test page to verify the new icons render correctly.

Create a PR with the updated PatternFlyIcons-webfont.json file, the updated LESS files, the test-src file, and the generated font files under patternfly/dist/css and patternfly/dist/fonts.  

An example of a patternfly icon/font update PR is:  https://github.com/patternfly/patternfly/pull/278
