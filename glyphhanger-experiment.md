## Classified: The Glyphhanger Experiment 😱
_____________________

Glyphhanger is a tool that helps optimize webfont loading by subsetting the font files to only include the characters that are used on the website. 

Subsetting web fonts means reducing the number of characters in the font file by only including the ones that are needed for the website, instead of using the entire font file. 

This leads to faster page loading times and smaller file sizes, as the browser will only have to download the subset of characters it needs. 

Glyphhanger can automate this process by analyzing the text on a website and creating a subset of the font that includes only the characters used on the website.
<br/><br/>

_____________________


## CSS Template
Glyphhanger uses a configuration file, usually named `glyphhanger.config.js`, to specify the options for the font generation. One of the options available in this configuration file is the ability to specify a CSS template that will be used to generate the CSS file for the web font.

The CSS template provided in the question is an example of how the template can be customized to match the desired format of the generated CSS file. The template uses placeholders, denoted by double curly braces `({{ }})`, that will be replaced by the actual values at the time of generation.

Glyphhanger CSS templates include two main sections:
    The first section is a CSS class that is used to apply the font to the elements in the HTML file.
    The second section is a @font-face rule that is used to import the web font into the CSS file.

The placeholders in the CSS template are as follows:

    {{css-class}}: This placeholder will be replaced with the CSS class name specified in the configuration file.
    {{font-name}}: This placeholder will be replaced with the font name specified in the configuration file.
    {{path}}: This placeholder will be replaced with the path to the generated web font file specified in the configuration file.
    {{ext}}: This placeholder will be replaced with the file extension specified in the configuration file.
    {{unicode-range}}: This placeholder will be replaced with the unicode-range specified in the configuration file.

To use this CSS template, it needs to be specified in the configuration file using the cssTemplate option. It can be placed in the root of your project.

For example, in the `glyphhanger.config.js` file, you would include the following line:
```
cssTemplate: path.resolve(__dirname, 'path/to/template.css'),
```

Now, when you run the glyphhanger command in the command line and it will use this template to generate the CSS file.

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

After our template is created, you can use the Glyphhanger option `--css={{font-name}}.module.css` to customize the file type we generate.

For example, because we have a template file located at `./fonts-css.template`, we would generate the subset and CSS files from Glyphhanger by running the glyphhanger command with the following options:

Finally, the output command designates the directory to save the generated files to. You must create your directory before you run the glyphhanger command, in our case it is the folder 'generated-fonts' nested inside of our 'fonts' folder.

```
glyphhanger --whitelist=ABCD --subset=*.ttf --template=./fonts-css.template --css --output=./path/to/your/fonts

```

Note that you could also alter the `--subset` output using any of the following options:
- --subset: Subset the characters in the input file(s) to only the characters used.
- --subset=auto: Subset the characters in the input file(s) to the characters used in the CSS file(s) and the HTML file(s) in the input folder.
- --subset=<chars>: Subset the characters in the input file(s) to the characters in the specified string.
- --subset-file=<file>: Subset the characters in the input file(s) to the characters in the specified file.


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