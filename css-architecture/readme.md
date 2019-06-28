# CSS 3 Architektur- und Aufbaukurs

## Contents

- **Architekturkonzepte von Cascading Stylesheets**
    - Cascading und Gewichtung
    - Klassen, ID - Selektoren im Vergleich
    - Skalierbares, modulares CSS für grosse Projekte und Teams
    - CSS Nomenklaturen, z.B. BEM - Block-Element-Modifier
- **CSS Precompiler**
    - Installation und Einführung von SASS
    - Im Vergleich: Post CSS, Less
- **CSS Aufbau-Workshop**
    - Schritt für Schritt - Weblayouts mit responsiven Layout-Komponenten und Inhalten.
    - Mobile-first: vom kleinsten zum größten Gerät
    - Fallback für alte Browser
    - Aufbau von Basis-Stylesheets, Typographie und Layout über interaktive Verhaltensweisen
    - Baukasten CSS und Kunden-Themes
- **UX Techniken für bessere Userinterfaces**
    - CSS Transitions und Animations
    - CSS Grids und Flexboxes
    - Responsive Content: Icons, Scalable Vector Graphics, Textverhalten


## Installationen

- Visual Studio Code
- Live Server
- auto SASS
- assets/css, /js, /figures
- nodejs
- nvm oder n (https://github.com/nvm-sh/nvm)
- typescript
- server.js
- pug
- webpack (npm install --save-dev webpack), (npm install --save-dev webpack-cli)
- 

Quelle: https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/

1. Im Terminal: npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
2. Erst node_modules Ordner anlegen

### What are these packages for?

- `node-sass` provides binding for Node.js to LibSass, a Sass compiler.
- `sass-loader` is a loader for Webpack for compiling SCSS/Sass files.
- `style-loader` injects our styles into our DOM.
- `css-loader` interprets @import and @url() and resolves them.
- `mini-css-extract-plugin` extracts our CSS out of the JavaScript bundle into a separate file, essential for production builds.








```bash
Usage:
  nvm --help                                Show this message
  nvm --version                             Print out the installed version of nvm
  nvm install [-s] <version>                Download and install a <version>, [-s] from source. Uses .nvmrc if available
    --reinstall-packages-from=<version>     When installing, reinstall packages installed in <node|iojs|node version number>
    --lts                                   When installing, only select from LTS (long-term support) versions
    --lts=<LTS name>                        When installing, only select from versions for a specific LTS line
    --skip-default-packages                 When installing, skip the default-packages file if it exists
    --latest-npm                            After installing, attempt to upgrade to the latest working npm on the given node version
    --no-progress                           Disable the progress bar on any downloads
  nvm uninstall <version>                   Uninstall a version
  nvm uninstall --lts                       Uninstall using automatic LTS (long-term support) alias `lts/*`, if available.
  nvm uninstall --lts=<LTS name>            Uninstall using automatic alias for provided LTS line, if available.
  nvm use [--silent] <version>              Modify PATH to use <version>. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm exec [--silent] <version> [<command>] Run <command> on <version>. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm run [--silent] <version> [<args>]     Run `node` on <version> with <args> as arguments. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm current                               Display currently activated version of Node
  nvm ls                                    List installed versions
  nvm ls <version>                          List versions matching a given <version>
  nvm ls-remote                             List remote versions available for install
    --lts                                   When listing, only show LTS (long-term support) versions
  nvm ls-remote <version>                   List remote versions available for install, matching a given <version>
    --lts                                   When listing, only show LTS (long-term support) versions
    --lts=<LTS name>                        When listing, only show versions for a specific LTS line
  nvm version <version>                     Resolve the given description to a single local version
  nvm version-remote <version>              Resolve the given description to a single remote version
    --lts                                   When listing, only select from LTS (long-term support) versions
    --lts=<LTS name>                        When listing, only select from versions for a specific LTS line
  nvm deactivate                            Undo effects of `nvm` on current shell
  nvm alias [<pattern>]                     Show all aliases beginning with <pattern>
  nvm alias <name> <version>                Set an alias named <name> pointing to <version>
  nvm unalias <name>                        Deletes the alias named <name>
  nvm install-latest-npm                    Attempt to upgrade to the latest working `npm` on the current node version
  nvm reinstall-packages <version>          Reinstall global `npm` packages contained in <version> to current version
  nvm unload                                Unload `nvm` from shell
  nvm which [current | <version>]           Display path to installed node version. Uses .nvmrc if available
  nvm cache dir                             Display path to the cache directory for nvm
  nvm cache clear                           Empty cache directory for nvm

Example:
  nvm install 8.0.0                     Install a specific version number
  nvm use 8.0                           Use the latest available 8.0.x release
  nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
  nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell

Note:
  to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)
```