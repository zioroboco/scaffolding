import assert from "yeoman-assert"
import helpers from "yeoman-test"

describe(`with no inputs`, () => {
  beforeAll(() => {
    return helpers.run(__dirname)
  })

  it(`creates all expected files`, () => {
    assert.file("jest.config.js")
    assert.file("package.json")
    assert.file("src/index.spec.ts")
    assert.file("src/index.ts")
    assert.file("templates/dummyfile.txt.ejs")
    assert.file("tsconfig.json")
  })

  it(`writes the package name into templates`, () => {
    assert.noFileContent("package.json", "<%= packagename %>")
    assert.noFileContent("package.json", `"@zioroboco/generator-"`)
  })

  it(`keeps the nested templates intact`, () => {
    assert.fileContent("templates/dummyfile.txt.ejs", "<%= name %>")
  })
})
