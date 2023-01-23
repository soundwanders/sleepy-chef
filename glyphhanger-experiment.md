## Secret File: The Glyphhanger Experiment 😱
_____________________

Glyphhanger is a tool that helps optimize webfont loading by subsetting the font files to only include the characters that are used on the website. 

Subsetting web fonts means reducing the number of characters in the font file by only including the ones that are needed for the website, instead of using the entire font file. 

This leads to faster page loading times and smaller file sizes, as the browser will only have to download the subset of characters it needs. 

Glyphhanger can automate this process by analyzing the text on a website and creating a subset of the font that includes only the characters used on the website.
<br/><br/>

_____________________


## CSS Template
Create a CSS template for Glyphhanger to outline the desired format of the generated CSS file.

```
.{{css-class}} {
  font-family: "{{font-name}}";
}

@font-face {
  font-family: "{{font-name}}";
  src: url("{{path}}") format('{{ext}}');
  unicode-range: {{unicode-range}};
}
```
_____________________
<br/>

## Generating the Output
You must be inside the directory that contains your project's font files. The template you create must also be located inside of your fonts file, as you will be accessing it when you run Glyphhanger.

We use the `--template` option to specify the path to the template file, and then, inside the template file, use the proper placeholders to indicate where the font information should be inserted. 

After our template is created, we can use the Glyphhanger option `--css={{font-name}}.module.css` to customize the file type we generate.

For example, because we have a template file located at `./fonts.template`, we would generate the subset and CSS files from Glyphhanger by running the glyphhanger command with the following options:

Finally, the output command designates the directory to save the generated files to. You must create your directory before you run the glyphhanger command, in our case it is the folder 'generated-fonts' nested inside of our 'fonts' folder.

```
glyphhanger --whitelist=ABCD --subset=*.ttf --template=./fonts.template --output=./generated-fonts

```

_____________________
<br/>

## The Proof is in the Pudding
_Total file size reduction: 2250.59 KB_

| Font Name | Old File Size | New File Size |
| --------- | ------------- | ------------- |
| Poppins-Bold.ttf | 150.29 KB | 1.43 KB |
| Poppins-Bold.ttf | 150.29 KB | 1.18 KB |
| Poppins-ExtraBold.ttf | 149.13 KB | 1.44 KB |
| Poppins-ExtraBold.ttf | 149.13 KB | 1.19 KB |
| Poppins-Medium.ttf | 152.81 KB | 1.45 KB |
| Poppins-Medium.ttf | 152.81 KB | 1.2 KB |
| Poppins-Regular.ttf | 154.48 KB | 1.47 KB |
| Poppins-Regular.ttf | 154.48 KB | 1.2 KB |
| Poppins-SemiBold.ttf | 151.55 KB | 1.46 KB |
| Poppins-SemiBold.ttf | 151.55 KB | 1.21 KB |
| RobotoMono-Bold.ttf | 84.97 KB | 2.29 KB |
| RobotoMono-Bold.ttf | 84.97 KB | 1.85 KB |
| RobotoMono-Bold.ttf | 84.97 KB | 1.33 KB |
| RobotoMono-Medium.ttf | 84.79 KB | 2.3 KB |
| RobotoMono-Medium.ttf | 84.79 KB | 1.86 KB |
| RobotoMono-Medium.ttf | 84.79 KB | 1.37 KB |
| RobotoMono-Regular.ttf | 84.87 KB | 2.34 KB |
| RobotoMono-Regular.ttf | 84.87 KB | 1.88 KB |
| RobotoMono-Regular.ttf | 84.87 KB | 1.37 KB |