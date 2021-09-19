import Generator, { GeneratorOptions } from "yeoman-generator"
import { resolve } from "path"

export default class extends Generator {
  paths() {
    this.sourceRoot(resolve(__dirname, ".."))
  }

  writing() {
    this.fs.copy(
      this.templatePath("templates/src/index.ts"),
      this.destinationPath("src/index.ts")
    )

    this.fs.copy(
      this.templatePath("templates/src/index.spec.ts"),
      this.destinationPath("src/index.spec.ts")
    )

    this.fs.copy(
      this.templatePath("templates/templates/dummyfile.txt.ejs"),
      this.destinationPath("templates/dummyfile.txt.ejs")
    )

    this.fs.copy(
      this.templatePath("jest.config.js"),
      this.destinationPath("jest.config.js")
    )

    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    )

    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      {
        process: content => {
          return content
            .toString()
            .replace(
              /"directory": "packages\/generator"/,
              `"directory": "packages/${this.appname}"`
            )
            .replace(
              /@zioroboco\/generator-generator/g,
              `@zioroboco/generator-${this.appname}`
            )
            .replace(/"version": ".+"/, `"version": "0.0.0"`)
        },
      }
    )
  }
}
