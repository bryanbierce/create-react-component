# Create React Component CLI

A simple command line utility to make your React development workflow easier.

### Installation :floppy_disk:

```sh
git clone https://github.com/bryanbierce/create-react-component.git && cd create-react-component && npm install && npm link
```


### Usage

When you need a new component file:

```sh
crc MyComponent my-component.js
```

This will create a file called `my-componnent.js` inside the directory in which you run the command. In that file it will create and export a component with the name `MyComponent`.

The final output will look like:

<img width="400" src="https://cloud.githubusercontent.com/assets/11323991/21996204/e718958c-dbdd-11e6-844b-ff313dfd387f.png">

#### Defaults

The file path argument by default supports full relative paths. (ex. `../other-folder/some-folder/my-component.js`).

If you request a file in a folder path that does not exist it will create the necessary folders for you.

By default if you request a new component in a file that already exists it will error out. To overwrite existing files with a new component pass the `-f` or `--force` flag.
(ex. `crc MyComponent some-folder/my-component.js -f`)

If you don't capitalize your component name (ex. `myComponent`) it will capitalize it for you so that react will recognize it as a composite component.

#### Stateless Components

Creating stateless components is supported with the `-s` or `--stateless` flags. This looks like:

```sh
crc MyComponent ./my-component.js -s
```

The result looks like:

<img width="400" src="https://cloud.githubusercontent.com/assets/11323991/21996526/858929f6-dbdf-11e6-918c-af7ac8e95f95.png">


## Node requirements

Version 1.0 supports Node v0.10 and greater


## Future Updates :calendar:

I have a number of other things for which I would like to build in support. Most of them fell outside the basic use case and some of them would be substantially simpler by either bringing in a build system or dropping support for v0.10 and using some of the richer language features. Expect one or the other to happen in the future. After that some or all of the following list will be supported.

* Import Flow Types
* Basic Flow Types on class or function
* Destructure React.PropTypes and create empty definition(both on object assignment and as static class property)
* Support `createClass`
* Support `require` instead of `import` (If it is requested)



## Thanks! :sparkles:

I hope some others find this as convenient as I have and removes a little tedium :smile:  If you find a bug or have a feature request please don't hesitate to submit an issue or @bryanbierce me on Twitter.

