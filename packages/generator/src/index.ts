import Generator from "yeoman-generator"
import { resolve } from "path"

export default class extends Generator {
  paths() {
    this.sourceRoot(resolve(__dirname, "../templates"))
  }

  files = [
    "jest.config.js",
    "src/index.ts",
    "templates/dummyfile.txt.ejs",
    "tsconfig.json",
  ]

  templates = ["package.json.ejs", "src/index.spec.ts.ejs"]

  writing() {
    this.templates.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file.replace(".ejs", "")),
        { name: "example" }
      )
    })

    this.files.forEach(file => {
      this.fs.copy(this.templatePath(file), this.destinationPath(file))
    })
  }
}
