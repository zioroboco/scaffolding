import Generator from "yeoman-generator"
import { resolve } from "path"

export default class extends Generator {
  paths() {
    this.sourceRoot(resolve(__dirname, "../templates"))
  }

  writing() {
    this.renderTemplate(
      this.templatePath("dummyfile.txt.ejs"),
      this.destinationPath("dummyfile.txt"),
      { name: "dummyfile" }
    )
  }
}
