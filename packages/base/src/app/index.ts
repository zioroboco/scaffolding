import * as glob from "fast-glob"
import Generator from "yeoman-generator"
import { resolve } from "path"

export default class extends Generator {
  paths() {
    this.sourceRoot(resolve(__dirname, "../../templates"))
  }

  writing() {
    glob
      .sync("**/*", {
        cwd: this.templatePath(),
        dot: true,
      })
      .forEach(file => {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(file.replace(".ejs", "")),
          { appname: this.appname }
        )
      })
  }
}
